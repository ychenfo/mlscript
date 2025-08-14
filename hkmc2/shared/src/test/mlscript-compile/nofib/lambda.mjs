import runtime from "./../Runtime.mjs";
import Term1 from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lookup2, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda$, lambda$1, lambda$2, lookup2$, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, pp_inst_0_tsni, ppn_inst_0_tsni, ppenv_inst_0_tsni, flatMap_inst_0_1_tsni, append_inst_0_1_2_tsni, traverseTerm_inst_3_tsni, eval_inst_3_tsni, lambda_inst_3_tsni, lambda$_inst_3_tsni, lambda_inst_3_tsni1, lambda$_inst_3_tsni1, apply_inst_3_tsni, lambda_inst_3_tsni2, lambda$_inst_3_tsni2, traverseCon_inst_3_tsni, lambda_inst_3_tsni3, lambda$_inst_3_tsni3, lookupVar_inst_3_4_tsni, lambda_inst_3_4_5_tsni, lambda$_inst_3_4_5_6_tsni, lookup2$_inst_3_4_5_6_7_tsni, lookup_inst_3_4_5_6_7_8_tsni, myBind_inst_3_4_9_tsni, lambda_inst_3_10_tsni, myReturn_inst_3_10_11_tsni, pushVar_inst_3_12_tsni, myBind_inst_3_12_13_tsni, lambda_inst_3_14_tsni, myReturn_inst_3_14_15_tsni, traverseTerm_inst_16_tsni, eval_inst_16_tsni, lambda_inst_16_tsni, lambda$_inst_16_tsni, lambda_inst_16_tsni1, lambda$_inst_16_tsni1, apply_inst_16_tsni, lambda_inst_16_tsni2, lambda$_inst_16_tsni2, traverseCon_inst_16_tsni, lambda_inst_16_tsni3, lambda_inst_16_tsni4, lookupVar_inst_16_4_tsni, lambda_inst_16_4_5_tsni, lambda$_inst_16_4_5_6_tsni, lookup2$_inst_16_4_5_6_7_tsni, lookup_inst_16_4_5_6_7_8_tsni, myBind_inst_16_4_9_tsni, lambda_inst_16_10_tsni, myReturn_inst_16_10_11_tsni, pushVar_inst_16_12_tsni, myBind_inst_16_12_13_tsni, lambda_inst_16_14_tsni, myReturn_inst_16_14_15_tsni, traverseTerm_inst_17_tsni, eval_inst_17_tsni, lambda_inst_17_tsni, lambda$_inst_17_tsni, lambda_inst_17_tsni1, lambda$_inst_17_tsni1, apply_inst_17_tsni, lambda_inst_17_tsni2, lambda$_inst_17_tsni2, traverseCon_inst_17_tsni, lambda$_inst_17_tsni3, lambda_inst_17_tsni3, lookupVar_inst_17_4_tsni, lambda_inst_17_4_5_tsni, lambda$_inst_17_4_5_6_tsni, lookup2$_inst_17_4_5_6_7_tsni, lookup_inst_17_4_5_6_7_8_tsni, myBind_inst_17_4_9_tsni, lambda_inst_17_10_tsni, myReturn_inst_17_10_11_tsni, pushVar_inst_17_12_tsni, myBind_inst_17_12_13_tsni, lambda_inst_17_14_tsni, myReturn_inst_17_14_15_tsni, traverseTerm_inst_18_tsni, eval_inst_18_tsni, lambda_inst_18_tsni, lambda$_inst_18_tsni, lambda_inst_18_tsni1, apply_inst_18_tsni, lambda_inst_18_tsni2, lambda$_inst_18_tsni1, traverseCon_inst_18_tsni, lambda_inst_18_tsni3, lambda$_inst_18_tsni2, lambda_inst_18_tsni4, lookupVar_inst_18_4_tsni, lambda_inst_18_4_5_tsni, lambda$_inst_18_4_5_6_tsni, lookup2$_inst_18_4_5_6_7_tsni, lookup_inst_18_4_5_6_7_8_tsni, myBind_inst_18_4_9_tsni, lambda_inst_18_10_tsni, myReturn_inst_18_10_11_tsni, pushVar_inst_18_12_tsni, myBind_inst_18_12_13_tsni, lambda_inst_18_14_tsni, myReturn_inst_18_14_15_tsni, traverseTerm_inst_19_tsni, eval_inst_19_tsni, lambda_inst_19_tsni, lambda$_inst_19_tsni, lambda$_inst_19_tsni1, apply_inst_19_tsni, lambda_inst_19_tsni1, lambda$_inst_19_tsni2, traverseCon_inst_19_tsni, lambda_inst_19_tsni2, lambda$_inst_19_tsni3, lambda_inst_19_tsni3, lookupVar_inst_19_4_tsni, lambda_inst_19_4_5_tsni, lambda$_inst_19_4_5_6_tsni, lookup2$_inst_19_4_5_6_7_tsni, lookup_inst_19_4_5_6_7_8_tsni, myBind_inst_19_4_9_tsni, lambda_inst_19_10_tsni, myReturn_inst_19_10_11_tsni, pushVar_inst_19_12_tsni, myBind_inst_19_12_13_tsni, lambda_inst_19_14_tsni, myReturn_inst_19_14_15_tsni, traverseTerm_inst_20_tsni, eval_inst_20_tsni, lambda_inst_20_tsni, lambda_inst_20_tsni1, lambda$_inst_20_tsni, apply_inst_20_tsni, lambda_inst_20_tsni2, lambda$_inst_20_tsni1, traverseCon_inst_20_tsni, lambda_inst_20_tsni3, lambda$_inst_20_tsni2, lambda_inst_20_tsni4, lookupVar_inst_20_4_tsni, lambda_inst_20_4_5_tsni, lambda$_inst_20_4_5_6_tsni, lookup2$_inst_20_4_5_6_7_tsni, lookup_inst_20_4_5_6_7_8_tsni, myBind_inst_20_4_9_tsni, lambda_inst_20_10_tsni, myReturn_inst_20_10_11_tsni, pushVar_inst_20_12_tsni, myBind_inst_20_12_13_tsni, lambda_inst_20_14_tsni, myReturn_inst_20_14_15_tsni, traverseTerm_inst_21_tsni, eval_inst_21_tsni, lambda$_inst_21_tsni, lambda_inst_21_tsni, lambda$_inst_21_tsni1, apply_inst_21_tsni, lambda_inst_21_tsni1, lambda$_inst_21_tsni2, traverseCon_inst_21_tsni, lambda_inst_21_tsni2, lambda$_inst_21_tsni3, lambda_inst_21_tsni3, lookupVar_inst_21_4_tsni, lambda_inst_21_4_5_tsni, lambda$_inst_21_4_5_6_tsni, lookup2$_inst_21_4_5_6_7_tsni, lookup_inst_21_4_5_6_7_8_tsni, myBind_inst_21_4_9_tsni, lambda_inst_21_10_tsni, myReturn_inst_21_10_11_tsni, pushVar_inst_21_12_tsni, myBind_inst_21_12_13_tsni, lambda_inst_21_14_tsni, myReturn_inst_21_14_15_tsni, traverseTerm_inst_22_tsni, eval_inst_22_tsni, lambda_inst_22_tsni, lambda$_inst_22_tsni, lambda_inst_22_tsni1, lambda$_inst_22_tsni1, apply_inst_22_tsni, lambda_inst_22_tsni2, traverseCon_inst_22_tsni, lambda_inst_22_tsni3, lambda$_inst_22_tsni2, lambda_inst_22_tsni4, lookupVar_inst_22_4_tsni, lambda_inst_22_4_5_tsni, lambda$_inst_22_4_5_6_tsni, lookup2$_inst_22_4_5_6_7_tsni, lookup_inst_22_4_5_6_7_8_tsni, myBind_inst_22_4_9_tsni, lambda_inst_22_10_tsni, myReturn_inst_22_10_11_tsni, pushVar_inst_22_12_tsni, myBind_inst_22_12_13_tsni, lambda_inst_22_14_tsni, myReturn_inst_22_14_15_tsni, traverseTerm_inst_23_tsni, eval_inst_23_tsni, lambda_inst_23_tsni, lambda$_inst_23_tsni, lambda_inst_23_tsni1, lambda$_inst_23_tsni1, apply_inst_23_tsni, lambda$_inst_23_tsni2, traverseCon_inst_23_tsni, lambda_inst_23_tsni2, lambda$_inst_23_tsni3, lambda_inst_23_tsni3, lookupVar_inst_23_4_tsni, lambda_inst_23_4_5_tsni, lambda$_inst_23_4_5_6_tsni, lookup2$_inst_23_4_5_6_7_tsni, lookup_inst_23_4_5_6_7_8_tsni, myBind_inst_23_4_9_tsni, lambda_inst_23_10_tsni, myReturn_inst_23_10_11_tsni, pushVar_inst_23_12_tsni, myBind_inst_23_12_13_tsni, lambda_inst_23_14_tsni, myReturn_inst_23_14_15_tsni, lookup_inst_24_8_tsni, lookup2$_inst_25_26_tsni, lookup_inst_25_26_8_tsni, lookup2$_inst_27_7_tsni, lookup_inst_27_7_8_tsni, lambda$_inst_28_6_tsni, lookup2$_inst_28_6_7_tsni, lookup_inst_28_6_7_8_tsni, lambda_inst_29_5_tsni, lambda$_inst_29_5_6_tsni, lookup2$_inst_29_5_6_7_tsni, lookup_inst_29_5_6_7_8_tsni, eval_inst_30_tsni, lambda_inst_30_tsni, lambda$_inst_30_tsni, lambda_inst_30_tsni1, lambda$_inst_30_tsni1, apply_inst_30_tsni, lambda_inst_30_tsni2, lambda$_inst_30_tsni2, traverseCon_inst_30_tsni, lambda_inst_30_tsni3, lambda$_inst_30_tsni3, lambda_inst_30_tsni4, lookupVar_inst_30_4_tsni, lambda_inst_30_4_5_tsni, lambda$_inst_30_4_5_6_tsni, lookup2$_inst_30_4_5_6_7_tsni, lookup_inst_30_4_5_6_7_8_tsni, myBind_inst_30_4_9_tsni, lambda_inst_30_10_tsni, myReturn_inst_30_10_11_tsni, pushVar_inst_30_12_tsni, myBind_inst_30_12_13_tsni, lambda_inst_30_14_tsni, myReturn_inst_30_14_15_tsni, traverseTerm_inst_31_tsni, eval_inst_31_tsni, lambda_inst_31_tsni, lambda$_inst_31_tsni, lambda_inst_31_tsni1, lambda$_inst_31_tsni1, apply_inst_31_tsni, lambda_inst_31_tsni2, lambda$_inst_31_tsni2, lambda_inst_31_tsni3, lambda$_inst_31_tsni3, lambda_inst_31_tsni4, lookupVar_inst_31_4_tsni, lambda_inst_31_4_5_tsni, lambda$_inst_31_4_5_6_tsni, lookup2$_inst_31_4_5_6_7_tsni, lookup_inst_31_4_5_6_7_8_tsni, myBind_inst_31_4_9_tsni, lambda_inst_31_10_tsni, myReturn_inst_31_10_11_tsni, pushVar_inst_31_12_tsni, myBind_inst_31_12_13_tsni, lambda_inst_31_14_tsni, myReturn_inst_31_14_15_tsni, traverseTerm_inst_32_tsni, eval_inst_32_tsni, lambda_inst_32_tsni, lambda$_inst_32_tsni, lambda_inst_32_tsni1, lambda$_inst_32_tsni1, lambda_inst_32_tsni2, lambda$_inst_32_tsni2, traverseCon_inst_32_tsni, lambda_inst_32_tsni3, lambda$_inst_32_tsni3, lambda_inst_32_tsni4, lookupVar_inst_32_4_tsni, lambda_inst_32_4_5_tsni, lambda$_inst_32_4_5_6_tsni, lookup2$_inst_32_4_5_6_7_tsni, lookup_inst_32_4_5_6_7_8_tsni, myBind_inst_32_4_9_tsni, lambda_inst_32_10_tsni, myReturn_inst_32_10_11_tsni, pushVar_inst_32_12_tsni, myBind_inst_32_12_13_tsni, lambda_inst_32_14_tsni, myReturn_inst_32_14_15_tsni, traverseTerm_inst_33_tsni, lambda_inst_33_tsni, lambda$_inst_33_tsni, lambda_inst_33_tsni1, lambda$_inst_33_tsni1, apply_inst_33_tsni, lambda_inst_33_tsni2, lambda$_inst_33_tsni2, traverseCon_inst_33_tsni, lambda_inst_33_tsni3, lambda$_inst_33_tsni3, lambda_inst_33_tsni4, lookupVar_inst_33_4_tsni, lambda_inst_33_4_5_tsni, lambda$_inst_33_4_5_6_tsni, lookup2$_inst_33_4_5_6_7_tsni, lookup_inst_33_4_5_6_7_8_tsni, myBind_inst_33_4_9_tsni, lambda_inst_33_10_tsni, myReturn_inst_33_10_11_tsni, pushVar_inst_33_12_tsni, myBind_inst_33_12_13_tsni, lambda_inst_33_14_tsni, myReturn_inst_33_14_15_tsni, simpleApply_inst_34_tsni, simpleEvalCon_inst_34_tsni, lookup_inst_34_35_tsni, simpleEval_inst_36_tsni, simpleEvalCon_inst_36_tsni, lookup_inst_36_35_tsni, simpleEval_inst_37_tsni, simpleApply_inst_37_tsni, lookup_inst_37_35_tsni, pp_inst_38_tsni, ppenv_inst_38_tsni, lambda_inst_38_tsni, flatMap_inst_38_1_tsni, append_inst_38_1_2_tsni, ppn_inst_39_tsni, ppenv_inst_39_tsni, lambda_inst_39_tsni, flatMap_inst_39_1_tsni, append_inst_39_1_2_tsni, pp_inst_40_tsni, ppn_inst_40_tsni, lambda_inst_40_tsni, flatMap_inst_40_1_tsni, append_inst_40_1_2_tsni, traverseTerm_inst_41_42_tsni, eval_inst_41_42_tsni, lambda_inst_41_42_tsni, lambda$_inst_41_42_tsni, lambda_inst_41_42_tsni1, lambda$_inst_41_42_tsni1, apply_inst_41_42_tsni, lambda_inst_41_42_tsni2, lambda$_inst_41_42_tsni2, traverseCon_inst_41_42_tsni, lambda_inst_41_42_tsni3, lambda$_inst_41_42_tsni3, lambda_inst_41_42_tsni4, lambda_inst_41_42_14_tsni, myReturn_inst_41_42_14_15_tsni, pushVar_inst_41_42_12_tsni, myBind_inst_41_42_12_13_tsni, lambda_inst_41_42_10_tsni, myReturn_inst_41_42_10_11_tsni, lookupVar_inst_41_42_4_tsni, lambda_inst_41_42_4_5_tsni, lambda$_inst_41_42_4_5_6_tsni, lookup2$_inst_41_42_4_5_6_7_tsni, lookup_inst_41_42_4_5_6_7_8_tsni, myBind_inst_41_42_4_9_tsni, pp_inst_41_43_tsni, ppn_inst_41_43_tsni, ppenv_inst_41_43_tsni, lambda_inst_41_43_tsni, flatMap_inst_41_43_1_tsni, append_inst_41_43_1_2_tsni, pp_inst_41_44_tsni, ppn_inst_41_44_tsni, ppenv_inst_41_44_tsni, lambda_inst_41_44_tsni, flatMap_inst_41_44_1_tsni, append_inst_41_44_1_2_tsni, simpleEval_inst_45_46_tsni, simpleApply_inst_45_46_tsni, simpleEvalCon_inst_45_46_tsni, lookup_inst_45_46_35_tsni, ev_inst_47_48_tsni, pp_inst_47_48_44_tsni, ppn_inst_47_48_44_tsni, ppenv_inst_47_48_44_tsni, lambda_inst_47_48_44_tsni, flatMap_inst_47_48_44_1_tsni, append_inst_47_48_44_1_2_tsni, pp_inst_47_48_43_tsni, ppn_inst_47_48_43_tsni, ppenv_inst_47_48_43_tsni, lambda_inst_47_48_43_tsni, flatMap_inst_47_48_43_1_tsni, append_inst_47_48_43_1_2_tsni, traverseTerm_inst_47_48_42_tsni, eval_inst_47_48_42_tsni, lambda_inst_47_48_42_tsni, lambda$_inst_47_48_42_tsni, lambda_inst_47_48_42_tsni1, lambda$_inst_47_48_42_tsni1, apply_inst_47_48_42_tsni, lambda_inst_47_48_42_tsni2, lambda$_inst_47_48_42_tsni2, traverseCon_inst_47_48_42_tsni, lambda_inst_47_48_42_tsni3, lambda$_inst_47_48_42_tsni3, lambda_inst_47_48_42_tsni4, lookupVar_inst_47_48_42_4_tsni, lambda_inst_47_48_42_4_5_tsni, lambda$_inst_47_48_42_4_5_6_tsni, lookup2$_inst_47_48_42_4_5_6_7_tsni, lookup_inst_47_48_42_4_5_6_7_8_tsni, myBind_inst_47_48_42_4_9_tsni, lambda_inst_47_48_42_10_tsni, myReturn_inst_47_48_42_10_11_tsni, pushVar_inst_47_48_42_12_tsni, myBind_inst_47_48_42_12_13_tsni, lambda_inst_47_48_42_14_tsni, myReturn_inst_47_48_42_14_15_tsni, mainSimple_inst_49_50_tsni, simpleEval_inst_49_50_46_tsni, simpleApply_inst_49_50_46_tsni, simpleEvalCon_inst_49_50_46_tsni, lookup_inst_49_50_46_35_tsni, mainMonad_inst_49_51_tsni, ev_inst_49_51_48_tsni, traverseTerm_inst_49_51_48_42_tsni, eval_inst_49_51_48_42_tsni, lambda_inst_49_51_48_42_tsni, lambda$_inst_49_51_48_42_tsni, lambda_inst_49_51_48_42_tsni1, lambda$_inst_49_51_48_42_tsni1, apply_inst_49_51_48_42_tsni, lambda_inst_49_51_48_42_tsni2, lambda$_inst_49_51_48_42_tsni2, traverseCon_inst_49_51_48_42_tsni, lambda_inst_49_51_48_42_tsni3, lambda$_inst_49_51_48_42_tsni3, lambda_inst_49_51_48_42_tsni4, lambda_inst_49_51_48_42_14_tsni, myReturn_inst_49_51_48_42_14_15_tsni, pushVar_inst_49_51_48_42_12_tsni, myBind_inst_49_51_48_42_12_13_tsni, lambda_inst_49_51_48_42_10_tsni, myReturn_inst_49_51_48_42_10_11_tsni, lookupVar_inst_49_51_48_42_4_tsni, lambda_inst_49_51_48_42_4_5_tsni, lambda$_inst_49_51_48_42_4_5_6_tsni, lookup2$_inst_49_51_48_42_4_5_6_7_tsni, lookup_inst_49_51_48_42_4_5_6_7_8_tsni, myBind_inst_49_51_48_42_4_9_tsni, pp_inst_49_51_48_43_tsni, ppn_inst_49_51_48_43_tsni, ppenv_inst_49_51_48_43_tsni, lambda_inst_49_51_48_43_tsni, flatMap_inst_49_51_48_43_1_tsni, append_inst_49_51_48_43_1_2_tsni, pp_inst_49_51_48_44_tsni, ppn_inst_49_51_48_44_tsni, ppenv_inst_49_51_48_44_tsni, lambda_inst_49_51_48_44_tsni, flatMap_inst_49_51_48_44_1_tsni, append_inst_49_51_48_44_1_2_tsni, testLambda_nofib_inst_52_53_tsni, mainMonad_inst_52_53_51_tsni, ev_inst_52_53_51_48_tsni, pp_inst_52_53_51_48_44_tsni, ppn_inst_52_53_51_48_44_tsni, ppenv_inst_52_53_51_48_44_tsni, lambda_inst_52_53_51_48_44_tsni, flatMap_inst_52_53_51_48_44_1_tsni, append_inst_52_53_51_48_44_1_2_tsni, pp_inst_52_53_51_48_43_tsni, ppn_inst_52_53_51_48_43_tsni, ppenv_inst_52_53_51_48_43_tsni, lambda_inst_52_53_51_48_43_tsni, flatMap_inst_52_53_51_48_43_1_tsni, append_inst_52_53_51_48_43_1_2_tsni, traverseTerm_inst_52_53_51_48_42_tsni, eval_inst_52_53_51_48_42_tsni, lambda_inst_52_53_51_48_42_tsni, lambda$_inst_52_53_51_48_42_tsni, lambda_inst_52_53_51_48_42_tsni1, lambda$_inst_52_53_51_48_42_tsni1, apply_inst_52_53_51_48_42_tsni, lambda_inst_52_53_51_48_42_tsni2, lambda$_inst_52_53_51_48_42_tsni2, traverseCon_inst_52_53_51_48_42_tsni, lambda_inst_52_53_51_48_42_tsni3, lambda$_inst_52_53_51_48_42_tsni3, lambda_inst_52_53_51_48_42_tsni4, lookupVar_inst_52_53_51_48_42_4_tsni, lambda_inst_52_53_51_48_42_4_5_tsni, lambda$_inst_52_53_51_48_42_4_5_6_tsni, lookup2$_inst_52_53_51_48_42_4_5_6_7_tsni, lookup_inst_52_53_51_48_42_4_5_6_7_8_tsni, myBind_inst_52_53_51_48_42_4_9_tsni, lambda_inst_52_53_51_48_42_10_tsni, myReturn_inst_52_53_51_48_42_10_11_tsni, pushVar_inst_52_53_51_48_42_12_tsni, myBind_inst_52_53_51_48_42_12_13_tsni, lambda_inst_52_53_51_48_42_14_tsni, myReturn_inst_52_53_51_48_42_14_15_tsni, mainSimple_inst_52_53_50_tsni, simpleEval_inst_52_53_50_46_tsni, simpleApply_inst_52_53_50_46_tsni, simpleEvalCon_inst_52_53_50_46_tsni, lookup_inst_52_53_50_46_35_tsni, append_inst_0_54_tsni, myMaybe_inst_3_4_5_6_7_55_tsni, myBind_inst_3_56_tsni, lambda_inst_3_56_57_tsni, lambda$_inst_3_56_57_58_tsni, myRunState_inst_3_56_57_58_59_tsni, myBind_inst_3_60_tsni, lambda_inst_3_60_57_tsni, lambda$_inst_3_60_57_58_tsni, myRunState_inst_3_60_57_58_61_tsni, withEnv_inst_3_62_tsni, myEvalState_inst_3_62_63_tsni, myRunState_inst_3_62_63_64_tsni, myBind_inst_3_65_tsni, lambda_inst_3_65_57_tsni, lambda$_inst_3_65_57_58_tsni, myRunState_inst_3_65_57_58_61_tsni, myMaybe_inst_16_4_5_6_7_55_tsni, myBind_inst_16_56_tsni, lambda_inst_16_56_57_tsni, lambda$_inst_16_56_57_58_tsni, myRunState_inst_16_56_57_58_59_tsni, myBind_inst_16_60_tsni, lambda_inst_16_60_57_tsni, lambda$_inst_16_60_57_58_tsni, myRunState_inst_16_60_57_58_61_tsni, withEnv_inst_16_62_tsni, myEvalState_inst_16_62_63_tsni, myRunState_inst_16_62_63_64_tsni, myBind_inst_16_65_tsni, lambda_inst_16_65_57_tsni, lambda$_inst_16_65_57_58_tsni, myRunState_inst_16_65_57_58_61_tsni, myMaybe_inst_17_4_5_6_7_55_tsni, myBind_inst_17_56_tsni, lambda_inst_17_56_57_tsni, lambda$_inst_17_56_57_58_tsni, myRunState_inst_17_56_57_58_59_tsni, myBind_inst_17_60_tsni, lambda_inst_17_60_57_tsni, lambda$_inst_17_60_57_58_tsni, myRunState_inst_17_60_57_58_61_tsni, withEnv_inst_17_62_tsni, myEvalState_inst_17_62_63_tsni, myRunState_inst_17_62_63_64_tsni, myBind_inst_17_65_tsni, lambda_inst_17_65_57_tsni, lambda$_inst_17_65_57_58_tsni, myRunState_inst_17_65_57_58_61_tsni, myMaybe_inst_18_4_5_6_7_55_tsni, myBind_inst_18_56_tsni, lambda_inst_18_56_57_tsni, lambda$_inst_18_56_57_58_tsni, myRunState_inst_18_56_57_58_59_tsni, myBind_inst_18_60_tsni, lambda_inst_18_60_57_tsni, lambda$_inst_18_60_57_58_tsni, myRunState_inst_18_60_57_58_61_tsni, withEnv_inst_18_62_tsni, myEvalState_inst_18_62_63_tsni, myRunState_inst_18_62_63_64_tsni, myBind_inst_18_65_tsni, lambda_inst_18_65_57_tsni, lambda$_inst_18_65_57_58_tsni, myRunState_inst_18_65_57_58_61_tsni, myMaybe_inst_19_4_5_6_7_55_tsni, myBind_inst_19_56_tsni, lambda_inst_19_56_57_tsni, lambda$_inst_19_56_57_58_tsni, myRunState_inst_19_56_57_58_59_tsni, myBind_inst_19_60_tsni, lambda_inst_19_60_57_tsni, lambda$_inst_19_60_57_58_tsni, myRunState_inst_19_60_57_58_61_tsni, withEnv_inst_19_62_tsni, myEvalState_inst_19_62_63_tsni, myRunState_inst_19_62_63_64_tsni, myBind_inst_19_65_tsni, lambda_inst_19_65_57_tsni, lambda$_inst_19_65_57_58_tsni, myRunState_inst_19_65_57_58_61_tsni, myMaybe_inst_20_4_5_6_7_55_tsni, myBind_inst_20_56_tsni, lambda_inst_20_56_57_tsni, lambda$_inst_20_56_57_58_tsni, myRunState_inst_20_56_57_58_59_tsni, myBind_inst_20_60_tsni, lambda_inst_20_60_57_tsni, lambda$_inst_20_60_57_58_tsni, myRunState_inst_20_60_57_58_61_tsni, withEnv_inst_20_62_tsni, myEvalState_inst_20_62_63_tsni, myRunState_inst_20_62_63_64_tsni, myBind_inst_20_65_tsni, lambda_inst_20_65_57_tsni, lambda$_inst_20_65_57_58_tsni, myRunState_inst_20_65_57_58_61_tsni, myMaybe_inst_21_4_5_6_7_55_tsni, myBind_inst_21_56_tsni, lambda_inst_21_56_57_tsni, lambda$_inst_21_56_57_58_tsni, myRunState_inst_21_56_57_58_59_tsni, myBind_inst_21_60_tsni, lambda_inst_21_60_57_tsni, lambda$_inst_21_60_57_58_tsni, myRunState_inst_21_60_57_58_61_tsni, withEnv_inst_21_62_tsni, myEvalState_inst_21_62_63_tsni, myRunState_inst_21_62_63_64_tsni, myBind_inst_21_65_tsni, lambda_inst_21_65_57_tsni, lambda$_inst_21_65_57_58_tsni, myRunState_inst_21_65_57_58_61_tsni, myMaybe_inst_22_4_5_6_7_55_tsni, myBind_inst_22_56_tsni, lambda_inst_22_56_57_tsni, lambda$_inst_22_56_57_58_tsni, myRunState_inst_22_56_57_58_59_tsni, myBind_inst_22_60_tsni, lambda_inst_22_60_57_tsni, lambda$_inst_22_60_57_58_tsni, myRunState_inst_22_60_57_58_61_tsni, withEnv_inst_22_62_tsni, myEvalState_inst_22_62_63_tsni, myRunState_inst_22_62_63_64_tsni, myBind_inst_22_65_tsni, lambda_inst_22_65_57_tsni, lambda$_inst_22_65_57_58_tsni, myRunState_inst_22_65_57_58_61_tsni, myMaybe_inst_23_4_5_6_7_55_tsni, myBind_inst_23_56_tsni, lambda_inst_23_56_57_tsni, lambda$_inst_23_56_57_58_tsni, myRunState_inst_23_56_57_58_59_tsni, myBind_inst_23_60_tsni, lambda_inst_23_60_57_tsni, lambda$_inst_23_60_57_58_tsni, myRunState_inst_23_60_57_58_61_tsni, withEnv_inst_23_62_tsni, myEvalState_inst_23_62_63_tsni, myRunState_inst_23_62_63_64_tsni, myBind_inst_23_65_tsni, lambda_inst_23_65_57_tsni, lambda$_inst_23_65_57_58_tsni, myRunState_inst_23_65_57_58_61_tsni, myMaybe_inst_24_55_tsni, myMaybe_inst_25_26_55_tsni, myMaybe_inst_27_7_55_tsni, myMaybe_inst_28_6_7_55_tsni, myMaybe_inst_29_5_6_7_55_tsni, myMaybe_inst_30_4_5_6_7_55_tsni, myBind_inst_30_56_tsni, lambda_inst_30_56_57_tsni, lambda$_inst_30_56_57_58_tsni, myRunState_inst_30_56_57_58_59_tsni, myBind_inst_30_60_tsni, lambda_inst_30_60_57_tsni, lambda$_inst_30_60_57_58_tsni, myRunState_inst_30_60_57_58_61_tsni, withEnv_inst_30_62_tsni, myEvalState_inst_30_62_63_tsni, myRunState_inst_30_62_63_64_tsni, myBind_inst_30_65_tsni, lambda_inst_30_65_57_tsni, lambda$_inst_30_65_57_58_tsni, myRunState_inst_30_65_57_58_61_tsni, myMaybe_inst_31_4_5_6_7_55_tsni, myBind_inst_31_56_tsni, lambda_inst_31_56_57_tsni, lambda$_inst_31_56_57_58_tsni, myRunState_inst_31_56_57_58_59_tsni, myBind_inst_31_60_tsni, lambda_inst_31_60_57_tsni, lambda$_inst_31_60_57_58_tsni, myRunState_inst_31_60_57_58_61_tsni, withEnv_inst_31_62_tsni, myEvalState_inst_31_62_63_tsni, myRunState_inst_31_62_63_64_tsni, myBind_inst_31_65_tsni, lambda_inst_31_65_57_tsni, lambda$_inst_31_65_57_58_tsni, myRunState_inst_31_65_57_58_61_tsni, myMaybe_inst_32_4_5_6_7_55_tsni, myBind_inst_32_56_tsni, lambda_inst_32_56_57_tsni, lambda$_inst_32_56_57_58_tsni, myRunState_inst_32_56_57_58_59_tsni, myBind_inst_32_60_tsni, lambda_inst_32_60_57_tsni, lambda$_inst_32_60_57_58_tsni, myRunState_inst_32_60_57_58_61_tsni, withEnv_inst_32_62_tsni, myEvalState_inst_32_62_63_tsni, myRunState_inst_32_62_63_64_tsni, myBind_inst_32_65_tsni, lambda_inst_32_65_57_tsni, lambda$_inst_32_65_57_58_tsni, myRunState_inst_32_65_57_58_61_tsni, myMaybe_inst_33_4_5_6_7_55_tsni, myBind_inst_33_56_tsni, lambda_inst_33_56_57_tsni, lambda$_inst_33_56_57_58_tsni, myRunState_inst_33_56_57_58_59_tsni, myBind_inst_33_60_tsni, lambda_inst_33_60_57_tsni, lambda$_inst_33_60_57_58_tsni, myRunState_inst_33_60_57_58_61_tsni, withEnv_inst_33_62_tsni, myEvalState_inst_33_62_63_tsni, myRunState_inst_33_62_63_64_tsni, myBind_inst_33_65_tsni, lambda_inst_33_65_57_tsni, lambda$_inst_33_65_57_58_tsni, myRunState_inst_33_65_57_58_61_tsni, myMaybe_inst_34_66_tsni, myMaybe_inst_36_66_tsni, myMaybe_inst_37_66_tsni, append_inst_38_54_tsni, append_inst_39_54_tsni, append_inst_40_54_tsni, myBind_inst_41_42_65_tsni, lambda_inst_41_42_65_57_tsni, lambda$_inst_41_42_65_57_58_tsni, myRunState_inst_41_42_65_57_58_61_tsni, withEnv_inst_41_42_62_tsni, myEvalState_inst_41_42_62_63_tsni, myRunState_inst_41_42_62_63_64_tsni, myBind_inst_41_42_60_tsni, lambda_inst_41_42_60_57_tsni, lambda$_inst_41_42_60_57_58_tsni, myRunState_inst_41_42_60_57_58_61_tsni, myMaybe_inst_41_42_4_5_6_7_55_tsni, myBind_inst_41_42_56_tsni, lambda_inst_41_42_56_57_tsni, lambda$_inst_41_42_56_57_58_tsni, myRunState_inst_41_42_56_57_58_59_tsni, append_inst_41_43_54_tsni, append_inst_41_44_54_tsni, myMaybe_inst_45_46_66_tsni, append_inst_47_48_44_54_tsni, append_inst_47_48_43_54_tsni, myMaybe_inst_47_48_42_4_5_6_7_55_tsni, myBind_inst_47_48_42_56_tsni, lambda_inst_47_48_42_56_57_tsni, lambda$_inst_47_48_42_56_57_58_tsni, myRunState_inst_47_48_42_56_57_58_59_tsni, myBind_inst_47_48_42_60_tsni, lambda_inst_47_48_42_60_57_tsni, lambda$_inst_47_48_42_60_57_58_tsni, myRunState_inst_47_48_42_60_57_58_61_tsni, withEnv_inst_47_48_42_62_tsni, myEvalState_inst_47_48_42_62_63_tsni, myRunState_inst_47_48_42_62_63_64_tsni, myBind_inst_47_48_42_65_tsni, lambda_inst_47_48_42_65_57_tsni, lambda$_inst_47_48_42_65_57_58_tsni, myRunState_inst_47_48_42_65_57_58_61_tsni, myMaybe_inst_49_50_46_66_tsni, myBind_inst_49_51_48_42_65_tsni, lambda_inst_49_51_48_42_65_57_tsni, lambda$_inst_49_51_48_42_65_57_58_tsni, myRunState_inst_49_51_48_42_65_57_58_61_tsni, withEnv_inst_49_51_48_42_62_tsni, myEvalState_inst_49_51_48_42_62_63_tsni, myRunState_inst_49_51_48_42_62_63_64_tsni, myBind_inst_49_51_48_42_60_tsni, lambda_inst_49_51_48_42_60_57_tsni, lambda$_inst_49_51_48_42_60_57_58_tsni, myRunState_inst_49_51_48_42_60_57_58_61_tsni, myMaybe_inst_49_51_48_42_4_5_6_7_55_tsni, myBind_inst_49_51_48_42_56_tsni, lambda_inst_49_51_48_42_56_57_tsni, lambda$_inst_49_51_48_42_56_57_58_tsni, myRunState_inst_49_51_48_42_56_57_58_59_tsni, append_inst_49_51_48_43_54_tsni, append_inst_49_51_48_44_54_tsni, append_inst_52_53_51_48_44_54_tsni, append_inst_52_53_51_48_43_54_tsni, myMaybe_inst_52_53_51_48_42_4_5_6_7_55_tsni, myBind_inst_52_53_51_48_42_56_tsni, lambda_inst_52_53_51_48_42_56_57_tsni, lambda$_inst_52_53_51_48_42_56_57_58_tsni, myRunState_inst_52_53_51_48_42_56_57_58_59_tsni, myBind_inst_52_53_51_48_42_60_tsni, lambda_inst_52_53_51_48_42_60_57_tsni, lambda$_inst_52_53_51_48_42_60_57_58_tsni, myRunState_inst_52_53_51_48_42_60_57_58_61_tsni, withEnv_inst_52_53_51_48_42_62_tsni, myEvalState_inst_52_53_51_48_42_62_63_tsni, myRunState_inst_52_53_51_48_42_62_63_64_tsni, myBind_inst_52_53_51_48_42_65_tsni, lambda_inst_52_53_51_48_42_65_57_tsni, lambda$_inst_52_53_51_48_42_65_57_58_tsni, myRunState_inst_52_53_51_48_42_65_57_58_61_tsni, myMaybe_inst_52_53_50_46_66_tsni;
pp_inst_0_tsni = function pp_inst_0_tsni(t) {
  return ppn_inst_0_tsni(0, t)
};
ppn_inst_0_tsni = function ppn_inst_0_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_0_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_0_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_0_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_0_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_0_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_0_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_0_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_0_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_0_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_0_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_0_tsni = function ppenv_inst_0_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda20;
  tmp2 = flatMap_inst_0_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_0_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_0_1_tsni = function flatMap_inst_0_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_0_1_tsni(f, t);
    return append_inst_0_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_tsni = function append_inst_0_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_0_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_3_tsni = function traverseTerm_inst_3_tsni(t) {
  return eval_inst_3_tsni(t)
};
eval_inst_3_tsni = function eval_inst_3_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_3_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_3_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_3_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_3_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_3_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_3_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_3_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_3_65_tsni(lambda.incr, lambda_inst_3_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_3_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_3_tsni(a, b, vall)
  }
});
lambda$_inst_3_tsni = function lambda$_inst_3_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_3_tsni(a)
  } else {
    return traverseTerm_inst_3_tsni(b)
  }
};
lambda_inst_3_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_3_tsni1(v, u_)
  }
});
lambda$_inst_3_tsni1 = function lambda$_inst_3_tsni(v, u_) {
  return apply_inst_3_tsni(u_, v)
};
apply_inst_3_tsni = function apply_inst_3_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_3_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_3_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_3_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_3_tsni2 = function lambda$_inst_3_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_3_tsni(b);
  tmp2 = pushVar_inst_3_12_tsni(x, tmp, tmp1);
  return withEnv_inst_3_62_tsni(e, tmp2)
};
traverseCon_inst_3_tsni = function traverseCon_inst_3_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_3_tsni(t);
  tmp1 = lambda_inst_3_10_tsni;
  return myBind_inst_3_60_tsni(tmp, tmp1)
};
lambda_inst_3_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_3_tsni3(x, e)
  }
});
lambda$_inst_3_tsni3 = function lambda$_inst_3_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_3_4_tsni(x);
  return myBind_inst_3_56_tsni(tmp, lambda11)
};
lookupVar_inst_3_4_tsni = function lookupVar_inst_3_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_3_4_5_tsni(v));
  return myBind_inst_3_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_3_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_3_4_5_6_tsni(v, env)
  }
});
lambda$_inst_3_4_5_6_tsni = function lambda$_inst_3_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_3_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_3_4_5_6_7_tsni = function lookup2$_inst_3_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_3_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_3_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_3_4_5_6_7_8_tsni = function lookup_inst_3_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_3_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_3_4_9_tsni = function myBind_inst_3_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_3_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_3_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_3_10_11_tsni = function myReturn_inst_3_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_3_12_tsni = function pushVar_inst_3_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_3_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_3_12_13_tsni = function myBind_inst_3_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_3_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_3_14_15_tsni(tmp)
});
myReturn_inst_3_14_15_tsni = function myReturn_inst_3_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_16_tsni = function traverseTerm_inst_16_tsni(t) {
  return eval_inst_16_tsni(t)
};
eval_inst_16_tsni = function eval_inst_16_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_16_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_16_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_16_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_16_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_16_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_16_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_16_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_16_65_tsni(lambda.incr, lambda_inst_16_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_16_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_16_tsni(a, b, vall)
  }
});
lambda$_inst_16_tsni = function lambda$_inst_16_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_16_tsni(a)
  } else {
    return traverseTerm_inst_16_tsni(b)
  }
};
lambda_inst_16_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_16_tsni1(v, u_)
  }
});
lambda$_inst_16_tsni1 = function lambda$_inst_16_tsni(v, u_) {
  return apply_inst_16_tsni(u_, v)
};
apply_inst_16_tsni = function apply_inst_16_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_16_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_16_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_16_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_16_tsni2 = function lambda$_inst_16_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_16_tsni(b);
  tmp2 = pushVar_inst_16_12_tsni(x, tmp, tmp1);
  return withEnv_inst_16_62_tsni(e, tmp2)
};
traverseCon_inst_16_tsni = function traverseCon_inst_16_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_16_tsni(t);
  tmp1 = lambda_inst_16_10_tsni;
  return myBind_inst_16_60_tsni(tmp, tmp1)
};
lambda_inst_16_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$10(x, e)
  }
});
lambda_inst_16_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_16_tsni(t)
});
lookupVar_inst_16_4_tsni = function lookupVar_inst_16_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_16_4_5_tsni(v));
  return myBind_inst_16_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_16_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_16_4_5_6_tsni(v, env)
  }
});
lambda$_inst_16_4_5_6_tsni = function lambda$_inst_16_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_16_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_16_4_5_6_7_tsni = function lookup2$_inst_16_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_16_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_16_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_16_4_5_6_7_8_tsni = function lookup_inst_16_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_16_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_16_4_9_tsni = function myBind_inst_16_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_16_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_16_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_16_10_11_tsni = function myReturn_inst_16_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_16_12_tsni = function pushVar_inst_16_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_16_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_16_12_13_tsni = function myBind_inst_16_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_16_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_16_14_15_tsni(tmp)
});
myReturn_inst_16_14_15_tsni = function myReturn_inst_16_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_17_tsni = function traverseTerm_inst_17_tsni(t) {
  return eval_inst_17_tsni(t)
};
eval_inst_17_tsni = function eval_inst_17_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda10(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_17_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_17_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_17_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_17_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_17_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_17_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_17_65_tsni(lambda.incr, lambda_inst_17_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_17_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_17_tsni(a, b, vall)
  }
});
lambda$_inst_17_tsni = function lambda$_inst_17_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_17_tsni(a)
  } else {
    return traverseTerm_inst_17_tsni(b)
  }
};
lambda_inst_17_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_17_tsni1(v, u_)
  }
});
lambda$_inst_17_tsni1 = function lambda$_inst_17_tsni(v, u_) {
  return apply_inst_17_tsni(u_, v)
};
apply_inst_17_tsni = function apply_inst_17_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_17_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_17_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_17_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_17_tsni2 = function lambda$_inst_17_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_17_tsni(b);
  tmp2 = pushVar_inst_17_12_tsni(x, tmp, tmp1);
  return withEnv_inst_17_62_tsni(e, tmp2)
};
traverseCon_inst_17_tsni = function traverseCon_inst_17_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_17_tsni(t);
  tmp1 = lambda_inst_17_10_tsni;
  return myBind_inst_17_60_tsni(tmp, tmp1)
};
lambda$_inst_17_tsni3 = function lambda$_inst_17_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_17_4_tsni(x);
  return myBind_inst_17_56_tsni(tmp, lambda_inst_17_tsni3)
};
lambda_inst_17_tsni3 = (undefined, function (t) {
  return traverseTerm_inst_17_tsni(t)
});
lookupVar_inst_17_4_tsni = function lookupVar_inst_17_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_17_4_5_tsni(v));
  return myBind_inst_17_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_17_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_17_4_5_6_tsni(v, env)
  }
});
lambda$_inst_17_4_5_6_tsni = function lambda$_inst_17_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_17_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_17_4_5_6_7_tsni = function lookup2$_inst_17_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_17_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_17_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_17_4_5_6_7_8_tsni = function lookup_inst_17_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_17_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_17_4_9_tsni = function myBind_inst_17_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_17_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_17_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_17_10_11_tsni = function myReturn_inst_17_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_17_12_tsni = function pushVar_inst_17_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_17_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_17_12_13_tsni = function myBind_inst_17_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_17_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_17_14_15_tsni(tmp)
});
myReturn_inst_17_14_15_tsni = function myReturn_inst_17_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_18_tsni = function traverseTerm_inst_18_tsni(t) {
  return eval_inst_18_tsni(t)
};
eval_inst_18_tsni = function eval_inst_18_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_18_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_18_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_18_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_18_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_18_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_18_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_18_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_18_65_tsni(lambda.incr, lambda_inst_18_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_18_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_18_tsni(a, b, vall)
  }
});
lambda$_inst_18_tsni = function lambda$_inst_18_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_18_tsni(a)
  } else {
    return traverseTerm_inst_18_tsni(b)
  }
};
lambda_inst_18_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$6(v, u_)
  }
});
apply_inst_18_tsni = function apply_inst_18_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_18_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_18_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_18_tsni1(a, x, b, e, orig)
  }
});
lambda$_inst_18_tsni1 = function lambda$_inst_18_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_18_tsni(b);
  tmp2 = pushVar_inst_18_12_tsni(x, tmp, tmp1);
  return withEnv_inst_18_62_tsni(e, tmp2)
};
traverseCon_inst_18_tsni = function traverseCon_inst_18_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_18_tsni(t);
  tmp1 = lambda_inst_18_10_tsni;
  return myBind_inst_18_60_tsni(tmp, tmp1)
};
lambda_inst_18_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_18_tsni2(x, e)
  }
});
lambda$_inst_18_tsni2 = function lambda$_inst_18_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_18_4_tsni(x);
  return myBind_inst_18_56_tsni(tmp, lambda_inst_18_tsni4)
};
lambda_inst_18_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_18_tsni(t)
});
lookupVar_inst_18_4_tsni = function lookupVar_inst_18_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_18_4_5_tsni(v));
  return myBind_inst_18_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_18_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_18_4_5_6_tsni(v, env)
  }
});
lambda$_inst_18_4_5_6_tsni = function lambda$_inst_18_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_18_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_18_4_5_6_7_tsni = function lookup2$_inst_18_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_18_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_18_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_18_4_5_6_7_8_tsni = function lookup_inst_18_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_18_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_18_4_9_tsni = function myBind_inst_18_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_18_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_18_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_18_10_11_tsni = function myReturn_inst_18_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_18_12_tsni = function pushVar_inst_18_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_18_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_18_12_13_tsni = function myBind_inst_18_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_18_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_18_14_15_tsni(tmp)
});
myReturn_inst_18_14_15_tsni = function myReturn_inst_18_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_19_tsni = function traverseTerm_inst_19_tsni(t) {
  return eval_inst_19_tsni(t)
};
eval_inst_19_tsni = function eval_inst_19_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_19_tsni2(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_19_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_19_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_19_tsni(u);
    lambda$this2 = runtime.safeCall(lambda15(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_19_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_19_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_19_65_tsni(lambda.incr, lambda_inst_19_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_19_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_19_tsni(a, b, vall)
  }
});
lambda$_inst_19_tsni = function lambda$_inst_19_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_19_tsni(a)
  } else {
    return traverseTerm_inst_19_tsni(b)
  }
};
lambda$_inst_19_tsni1 = function lambda$_inst_19_tsni(v, u_) {
  return apply_inst_19_tsni(u_, v)
};
apply_inst_19_tsni = function apply_inst_19_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_19_tsni1(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_19_tsni1 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_19_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_19_tsni2 = function lambda$_inst_19_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_19_tsni(b);
  tmp2 = pushVar_inst_19_12_tsni(x, tmp, tmp1);
  return withEnv_inst_19_62_tsni(e, tmp2)
};
traverseCon_inst_19_tsni = function traverseCon_inst_19_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_19_tsni(t);
  tmp1 = lambda_inst_19_10_tsni;
  return myBind_inst_19_60_tsni(tmp, tmp1)
};
lambda_inst_19_tsni2 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_19_tsni3(x, e)
  }
});
lambda$_inst_19_tsni3 = function lambda$_inst_19_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_19_4_tsni(x);
  return myBind_inst_19_56_tsni(tmp, lambda_inst_19_tsni3)
};
lambda_inst_19_tsni3 = (undefined, function (t) {
  return traverseTerm_inst_19_tsni(t)
});
lookupVar_inst_19_4_tsni = function lookupVar_inst_19_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_19_4_5_tsni(v));
  return myBind_inst_19_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_19_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_19_4_5_6_tsni(v, env)
  }
});
lambda$_inst_19_4_5_6_tsni = function lambda$_inst_19_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_19_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_19_4_5_6_7_tsni = function lookup2$_inst_19_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_19_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_19_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_19_4_5_6_7_8_tsni = function lookup_inst_19_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_19_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_19_4_9_tsni = function myBind_inst_19_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_19_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_19_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_19_10_11_tsni = function myReturn_inst_19_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_19_12_tsni = function pushVar_inst_19_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_19_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_19_12_13_tsni = function myBind_inst_19_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_19_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_19_14_15_tsni(tmp)
});
myReturn_inst_19_14_15_tsni = function myReturn_inst_19_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_20_tsni = function traverseTerm_inst_20_tsni(t) {
  return eval_inst_20_tsni(t)
};
eval_inst_20_tsni = function eval_inst_20_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_20_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_20_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_20_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_20_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_20_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_20_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_20_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_20_65_tsni(lambda.incr, lambda_inst_20_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_20_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$5(a, b, vall)
  }
});
lambda_inst_20_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_20_tsni(v, u_)
  }
});
lambda$_inst_20_tsni = function lambda$_inst_20_tsni(v, u_) {
  return apply_inst_20_tsni(u_, v)
};
apply_inst_20_tsni = function apply_inst_20_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_20_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_20_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_20_tsni1(a, x, b, e, orig)
  }
});
lambda$_inst_20_tsni1 = function lambda$_inst_20_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_20_tsni(b);
  tmp2 = pushVar_inst_20_12_tsni(x, tmp, tmp1);
  return withEnv_inst_20_62_tsni(e, tmp2)
};
traverseCon_inst_20_tsni = function traverseCon_inst_20_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_20_tsni(t);
  tmp1 = lambda_inst_20_10_tsni;
  return myBind_inst_20_60_tsni(tmp, tmp1)
};
lambda_inst_20_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_20_tsni2(x, e)
  }
});
lambda$_inst_20_tsni2 = function lambda$_inst_20_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_20_4_tsni(x);
  return myBind_inst_20_56_tsni(tmp, lambda_inst_20_tsni4)
};
lambda_inst_20_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_20_tsni(t)
});
lookupVar_inst_20_4_tsni = function lookupVar_inst_20_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_20_4_5_tsni(v));
  return myBind_inst_20_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_20_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_20_4_5_6_tsni(v, env)
  }
});
lambda$_inst_20_4_5_6_tsni = function lambda$_inst_20_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_20_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_20_4_5_6_7_tsni = function lookup2$_inst_20_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_20_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_20_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_20_4_5_6_7_8_tsni = function lookup_inst_20_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_20_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_20_4_9_tsni = function myBind_inst_20_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_20_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_20_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_20_10_11_tsni = function myReturn_inst_20_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_20_12_tsni = function pushVar_inst_20_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_20_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_20_12_13_tsni = function myBind_inst_20_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_20_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_20_14_15_tsni(tmp)
});
myReturn_inst_20_14_15_tsni = function myReturn_inst_20_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_21_tsni = function traverseTerm_inst_21_tsni(t) {
  return eval_inst_21_tsni(t)
};
eval_inst_21_tsni = function eval_inst_21_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_21_tsni2(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_21_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_21_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_21_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_21_tsni(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_21_tsni(c);
    tmp5 = runtime.safeCall(lambda16(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_21_65_tsni(lambda.incr, lambda_inst_21_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_21_tsni = function lambda$_inst_21_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_21_tsni(a)
  } else {
    return traverseTerm_inst_21_tsni(b)
  }
};
lambda_inst_21_tsni = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_21_tsni1(v, u_)
  }
});
lambda$_inst_21_tsni1 = function lambda$_inst_21_tsni(v, u_) {
  return apply_inst_21_tsni(u_, v)
};
apply_inst_21_tsni = function apply_inst_21_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_21_tsni1(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_21_tsni1 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_21_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_21_tsni2 = function lambda$_inst_21_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_21_tsni(b);
  tmp2 = pushVar_inst_21_12_tsni(x, tmp, tmp1);
  return withEnv_inst_21_62_tsni(e, tmp2)
};
traverseCon_inst_21_tsni = function traverseCon_inst_21_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_21_tsni(t);
  tmp1 = lambda_inst_21_10_tsni;
  return myBind_inst_21_60_tsni(tmp, tmp1)
};
lambda_inst_21_tsni2 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_21_tsni3(x, e)
  }
});
lambda$_inst_21_tsni3 = function lambda$_inst_21_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_21_4_tsni(x);
  return myBind_inst_21_56_tsni(tmp, lambda_inst_21_tsni3)
};
lambda_inst_21_tsni3 = (undefined, function (t) {
  return traverseTerm_inst_21_tsni(t)
});
lookupVar_inst_21_4_tsni = function lookupVar_inst_21_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_21_4_5_tsni(v));
  return myBind_inst_21_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_21_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_21_4_5_6_tsni(v, env)
  }
});
lambda$_inst_21_4_5_6_tsni = function lambda$_inst_21_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_21_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_21_4_5_6_7_tsni = function lookup2$_inst_21_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_21_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_21_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_21_4_5_6_7_8_tsni = function lookup_inst_21_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_21_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_21_4_9_tsni = function myBind_inst_21_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_21_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_21_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_21_10_11_tsni = function myReturn_inst_21_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_21_12_tsni = function pushVar_inst_21_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_21_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_21_12_13_tsni = function myBind_inst_21_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_21_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_21_14_15_tsni(tmp)
});
myReturn_inst_21_14_15_tsni = function myReturn_inst_21_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_22_tsni = function traverseTerm_inst_22_tsni(t) {
  return eval_inst_22_tsni(t)
};
eval_inst_22_tsni = function eval_inst_22_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_22_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_22_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_22_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_22_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_22_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_22_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_22_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_22_65_tsni(lambda.incr, lambda_inst_22_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_22_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_22_tsni(a, b, vall)
  }
});
lambda$_inst_22_tsni = function lambda$_inst_22_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_22_tsni(a)
  } else {
    return traverseTerm_inst_22_tsni(b)
  }
};
lambda_inst_22_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_22_tsni1(v, u_)
  }
});
lambda$_inst_22_tsni1 = function lambda$_inst_22_tsni(v, u_) {
  return apply_inst_22_tsni(u_, v)
};
apply_inst_22_tsni = function apply_inst_22_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_22_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_22_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$4(a, x, b, e, orig)
  }
});
traverseCon_inst_22_tsni = function traverseCon_inst_22_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_22_tsni(t);
  tmp1 = lambda_inst_22_10_tsni;
  return myBind_inst_22_60_tsni(tmp, tmp1)
};
lambda_inst_22_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_22_tsni2(x, e)
  }
});
lambda$_inst_22_tsni2 = function lambda$_inst_22_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_22_4_tsni(x);
  return myBind_inst_22_56_tsni(tmp, lambda_inst_22_tsni4)
};
lambda_inst_22_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_22_tsni(t)
});
lookupVar_inst_22_4_tsni = function lookupVar_inst_22_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_22_4_5_tsni(v));
  return myBind_inst_22_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_22_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_22_4_5_6_tsni(v, env)
  }
});
lambda$_inst_22_4_5_6_tsni = function lambda$_inst_22_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_22_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_22_4_5_6_7_tsni = function lookup2$_inst_22_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_22_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_22_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_22_4_5_6_7_8_tsni = function lookup_inst_22_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_22_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_22_4_9_tsni = function myBind_inst_22_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_22_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_22_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_22_10_11_tsni = function myReturn_inst_22_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_22_12_tsni = function pushVar_inst_22_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_22_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_22_12_13_tsni = function myBind_inst_22_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_22_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_22_14_15_tsni(tmp)
});
myReturn_inst_22_14_15_tsni = function myReturn_inst_22_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_23_tsni = function traverseTerm_inst_23_tsni(t) {
  return eval_inst_23_tsni(t)
};
eval_inst_23_tsni = function eval_inst_23_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_23_tsni2(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_23_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_23_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_23_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_23_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_23_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_23_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_23_65_tsni(lambda.incr, lambda_inst_23_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_23_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_23_tsni(a, b, vall)
  }
});
lambda$_inst_23_tsni = function lambda$_inst_23_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_23_tsni(a)
  } else {
    return traverseTerm_inst_23_tsni(b)
  }
};
lambda_inst_23_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_23_tsni1(v, u_)
  }
});
lambda$_inst_23_tsni1 = function lambda$_inst_23_tsni(v, u_) {
  return apply_inst_23_tsni(u_, v)
};
apply_inst_23_tsni = function apply_inst_23_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda9(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_23_tsni2 = function lambda$_inst_23_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_23_tsni(b);
  tmp2 = pushVar_inst_23_12_tsni(x, tmp, tmp1);
  return withEnv_inst_23_62_tsni(e, tmp2)
};
traverseCon_inst_23_tsni = function traverseCon_inst_23_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_23_tsni(t);
  tmp1 = lambda_inst_23_10_tsni;
  return myBind_inst_23_60_tsni(tmp, tmp1)
};
lambda_inst_23_tsni2 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_23_tsni3(x, e)
  }
});
lambda$_inst_23_tsni3 = function lambda$_inst_23_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_23_4_tsni(x);
  return myBind_inst_23_56_tsni(tmp, lambda_inst_23_tsni3)
};
lambda_inst_23_tsni3 = (undefined, function (t) {
  return traverseTerm_inst_23_tsni(t)
});
lookupVar_inst_23_4_tsni = function lookupVar_inst_23_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_23_4_5_tsni(v));
  return myBind_inst_23_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_23_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_23_4_5_6_tsni(v, env)
  }
});
lambda$_inst_23_4_5_6_tsni = function lambda$_inst_23_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_23_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_23_4_5_6_7_tsni = function lookup2$_inst_23_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_23_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_23_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_23_4_5_6_7_8_tsni = function lookup_inst_23_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_23_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_23_4_9_tsni = function myBind_inst_23_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_23_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_23_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_23_10_11_tsni = function myReturn_inst_23_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_23_12_tsni = function pushVar_inst_23_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_23_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_23_12_13_tsni = function myBind_inst_23_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_23_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_23_14_15_tsni(tmp)
});
myReturn_inst_23_14_15_tsni = function myReturn_inst_23_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_24_8_tsni = function lookup_inst_24_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_24_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup2$_inst_25_26_tsni = function lookup2$_inst_25_26_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_25_26_8_tsni(v, env);
  return myMaybe_inst_25_26_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_25_26_8_tsni = function lookup_inst_25_26_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_25_26_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup2$_inst_27_7_tsni = function lookup2$_inst_27_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_27_7_8_tsni(v, env);
  return myMaybe_inst_27_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_27_7_8_tsni = function lookup_inst_27_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_27_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_28_6_tsni = function lambda$_inst_28_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_28_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_28_6_7_tsni = function lookup2$_inst_28_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_28_6_7_8_tsni(v, env);
  return myMaybe_inst_28_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_28_6_7_8_tsni = function lookup_inst_28_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_28_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_29_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_29_5_6_tsni(v, env)
  }
});
lambda$_inst_29_5_6_tsni = function lambda$_inst_29_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_29_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_29_5_6_7_tsni = function lookup2$_inst_29_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_29_5_6_7_8_tsni(v, env);
  return myMaybe_inst_29_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_29_5_6_7_8_tsni = function lookup_inst_29_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_29_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_30_tsni = function eval_inst_30_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_30_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_30_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = lambda.traverseTerm(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = lambda.traverseTerm(u);
    lambda$this2 = runtime.safeCall(lambda_inst_30_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = lambda.traverseTerm(c);
    tmp5 = runtime.safeCall(lambda_inst_30_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_30_65_tsni(lambda.incr, lambda_inst_30_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_30_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_30_tsni(a, b, vall)
  }
});
lambda$_inst_30_tsni = function lambda$_inst_30_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return lambda1.traverseTerm(a)
  } else {
    return lambda1.traverseTerm(b)
  }
};
lambda_inst_30_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_30_tsni1(v, u_)
  }
});
lambda$_inst_30_tsni1 = function lambda$_inst_30_tsni(v, u_) {
  return apply_inst_30_tsni(u_, v)
};
apply_inst_30_tsni = function apply_inst_30_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_30_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_30_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_30_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_30_tsni2 = function lambda$_inst_30_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = lambda1.traverseTerm(b);
  tmp2 = pushVar_inst_30_12_tsni(x, tmp, tmp1);
  return withEnv_inst_30_62_tsni(e, tmp2)
};
traverseCon_inst_30_tsni = function traverseCon_inst_30_tsni(t) {
  let tmp, tmp1;
  tmp = lambda.traverseTerm(t);
  tmp1 = lambda_inst_30_10_tsni;
  return myBind_inst_30_60_tsni(tmp, tmp1)
};
lambda_inst_30_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_30_tsni3(x, e)
  }
});
lambda$_inst_30_tsni3 = function lambda$_inst_30_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_30_4_tsni(x);
  return myBind_inst_30_56_tsni(tmp, lambda_inst_30_tsni4)
};
lambda_inst_30_tsni4 = (undefined, function (t) {
  return lambda1.traverseTerm(t)
});
lookupVar_inst_30_4_tsni = function lookupVar_inst_30_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_30_4_5_tsni(v));
  return myBind_inst_30_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_30_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_30_4_5_6_tsni(v, env)
  }
});
lambda$_inst_30_4_5_6_tsni = function lambda$_inst_30_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_30_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_30_4_5_6_7_tsni = function lookup2$_inst_30_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_30_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_30_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_30_4_5_6_7_8_tsni = function lookup_inst_30_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_30_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_30_4_9_tsni = function myBind_inst_30_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_30_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_30_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_30_10_11_tsni = function myReturn_inst_30_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_30_12_tsni = function pushVar_inst_30_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_30_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_30_12_13_tsni = function myBind_inst_30_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_30_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_30_14_15_tsni(tmp)
});
myReturn_inst_30_14_15_tsni = function myReturn_inst_30_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_31_tsni = function traverseTerm_inst_31_tsni(t) {
  return eval_inst_31_tsni(t)
};
eval_inst_31_tsni = function eval_inst_31_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_31_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = lambda.traverseCon(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_31_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_31_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_31_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_31_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_31_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_31_65_tsni(lambda.incr, lambda_inst_31_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_31_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_31_tsni(a, b, vall)
  }
});
lambda$_inst_31_tsni = function lambda$_inst_31_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_31_tsni(a)
  } else {
    return traverseTerm_inst_31_tsni(b)
  }
};
lambda_inst_31_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_31_tsni1(v, u_)
  }
});
lambda$_inst_31_tsni1 = function lambda$_inst_31_tsni(v, u_) {
  return apply_inst_31_tsni(u_, v)
};
apply_inst_31_tsni = function apply_inst_31_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_31_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_31_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_31_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_31_tsni2 = function lambda$_inst_31_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_31_tsni(b);
  tmp2 = pushVar_inst_31_12_tsni(x, tmp, tmp1);
  return withEnv_inst_31_62_tsni(e, tmp2)
};
lambda_inst_31_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_31_tsni3(x, e)
  }
});
lambda$_inst_31_tsni3 = function lambda$_inst_31_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_31_4_tsni(x);
  return myBind_inst_31_56_tsni(tmp, lambda_inst_31_tsni4)
};
lambda_inst_31_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_31_tsni(t)
});
lookupVar_inst_31_4_tsni = function lookupVar_inst_31_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_31_4_5_tsni(v));
  return myBind_inst_31_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_31_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_31_4_5_6_tsni(v, env)
  }
});
lambda$_inst_31_4_5_6_tsni = function lambda$_inst_31_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_31_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_31_4_5_6_7_tsni = function lookup2$_inst_31_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_31_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_31_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_31_4_5_6_7_8_tsni = function lookup_inst_31_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_31_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_31_4_9_tsni = function myBind_inst_31_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_31_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_31_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_31_10_11_tsni = function myReturn_inst_31_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_31_12_tsni = function pushVar_inst_31_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_31_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_31_12_13_tsni = function myBind_inst_31_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_31_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_31_14_15_tsni(tmp)
});
myReturn_inst_31_14_15_tsni = function myReturn_inst_31_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_32_tsni = function traverseTerm_inst_32_tsni(t) {
  return eval_inst_32_tsni(t)
};
eval_inst_32_tsni = function eval_inst_32_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_32_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_32_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_32_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_32_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_32_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_32_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_32_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_32_65_tsni(lambda.incr, lambda_inst_32_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_32_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_32_tsni(a, b, vall)
  }
});
lambda$_inst_32_tsni = function lambda$_inst_32_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_32_tsni(a)
  } else {
    return traverseTerm_inst_32_tsni(b)
  }
};
lambda_inst_32_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_32_tsni1(v, u_)
  }
});
lambda$_inst_32_tsni1 = function lambda$_inst_32_tsni(v, u_) {
  return lambda1.apply(u_, v)
};
lambda_inst_32_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_32_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_32_tsni2 = function lambda$_inst_32_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_32_tsni(b);
  tmp2 = pushVar_inst_32_12_tsni(x, tmp, tmp1);
  return withEnv_inst_32_62_tsni(e, tmp2)
};
traverseCon_inst_32_tsni = function traverseCon_inst_32_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_32_tsni(t);
  tmp1 = lambda_inst_32_10_tsni;
  return myBind_inst_32_60_tsni(tmp, tmp1)
};
lambda_inst_32_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_32_tsni3(x, e)
  }
});
lambda$_inst_32_tsni3 = function lambda$_inst_32_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_32_4_tsni(x);
  return myBind_inst_32_56_tsni(tmp, lambda_inst_32_tsni4)
};
lambda_inst_32_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_32_tsni(t)
});
lookupVar_inst_32_4_tsni = function lookupVar_inst_32_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_32_4_5_tsni(v));
  return myBind_inst_32_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_32_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_32_4_5_6_tsni(v, env)
  }
});
lambda$_inst_32_4_5_6_tsni = function lambda$_inst_32_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_32_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_32_4_5_6_7_tsni = function lookup2$_inst_32_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_32_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_32_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_32_4_5_6_7_8_tsni = function lookup_inst_32_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_32_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_32_4_9_tsni = function myBind_inst_32_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_32_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_32_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_32_10_11_tsni = function myReturn_inst_32_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_32_12_tsni = function pushVar_inst_32_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_32_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_32_12_13_tsni = function myBind_inst_32_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_32_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_32_14_15_tsni(tmp)
});
myReturn_inst_32_14_15_tsni = function myReturn_inst_32_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
traverseTerm_inst_33_tsni = function traverseTerm_inst_33_tsni(t) {
  return lambda.eval(t)
};
lambda_inst_33_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_33_tsni(a, b, vall)
  }
});
lambda$_inst_33_tsni = function lambda$_inst_33_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_33_tsni(a)
  } else {
    return traverseTerm_inst_33_tsni(b)
  }
};
lambda_inst_33_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_33_tsni1(v, u_)
  }
});
lambda$_inst_33_tsni1 = function lambda$_inst_33_tsni(v, u_) {
  return apply_inst_33_tsni(u_, v)
};
apply_inst_33_tsni = function apply_inst_33_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_33_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_33_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_33_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_33_tsni2 = function lambda$_inst_33_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_33_tsni(b);
  tmp2 = pushVar_inst_33_12_tsni(x, tmp, tmp1);
  return withEnv_inst_33_62_tsni(e, tmp2)
};
traverseCon_inst_33_tsni = function traverseCon_inst_33_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_33_tsni(t);
  tmp1 = lambda_inst_33_10_tsni;
  return myBind_inst_33_60_tsni(tmp, tmp1)
};
lambda_inst_33_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_33_tsni3(x, e)
  }
});
lambda$_inst_33_tsni3 = function lambda$_inst_33_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_33_4_tsni(x);
  return myBind_inst_33_56_tsni(tmp, lambda_inst_33_tsni4)
};
lambda_inst_33_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_33_tsni(t)
});
lookupVar_inst_33_4_tsni = function lookupVar_inst_33_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_33_4_5_tsni(v));
  return myBind_inst_33_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_33_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_33_4_5_6_tsni(v, env)
  }
});
lambda$_inst_33_4_5_6_tsni = function lambda$_inst_33_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_33_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_33_4_5_6_7_tsni = function lookup2$_inst_33_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_33_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_33_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_33_4_5_6_7_8_tsni = function lookup_inst_33_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_33_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_33_4_9_tsni = function myBind_inst_33_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_33_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_33_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_33_10_11_tsni = function myReturn_inst_33_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_33_12_tsni = function pushVar_inst_33_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_33_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_33_12_13_tsni = function myBind_inst_33_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_33_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_33_14_15_tsni(tmp)
});
myReturn_inst_33_14_15_tsni = function myReturn_inst_33_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
simpleApply_inst_34_tsni = function simpleApply_inst_34_tsni(env, t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, arr, tmp1;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = lambda.Thunk(a, env);
      arr = [
        x,
        tmp
      ];
      tmp1 = NofibPrelude.Cons(arr, e);
      return lambda.simpleEval(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_34_tsni = function simpleEvalCon_inst_34_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = lambda.simpleEval(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_34_35_tsni = function lookup_inst_34_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_34_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_36_tsni = function simpleEval_inst_36_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_36_35_tsni(v2, env);
    tmp1 = myMaybe_inst_36_66_tsni(lambda18, lambda19, tmp);
    return simpleEval_inst_36_tsni(env, tmp1)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    e1 = param0;
    return runtime.safeCall(lambda.Con(e1))
  } else if (ter instanceof lambda.Incr.class) {
    return runtime.safeCall(lambda.Con(0))
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp2 = simpleEvalCon_inst_36_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_36_tsni(env, v1);
    v_ = tmp3;
    tmp4 = u_1 + v_;
    return runtime.safeCall(lambda.Con(tmp4))
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp5 = lambda.Lam(x, b1);
    return lambda.Thunk(tmp5, env)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp6 = simpleEval_inst_36_tsni(env, u);
    u_ = tmp6;
    return lambda.simpleApply(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_36_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_36_tsni(env, a)
    } else {
      return simpleEval_inst_36_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_36_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleEvalCon_inst_36_tsni = function simpleEvalCon_inst_36_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_36_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_36_35_tsni = function lookup_inst_36_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_36_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_37_tsni = function simpleEval_inst_37_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_37_35_tsni(v2, env);
    tmp1 = myMaybe_inst_37_66_tsni(lambda18, lambda19, tmp);
    return simpleEval_inst_37_tsni(env, tmp1)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    e1 = param0;
    return runtime.safeCall(lambda.Con(e1))
  } else if (ter instanceof lambda.Incr.class) {
    return runtime.safeCall(lambda.Con(0))
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp2 = lambda.simpleEvalCon(env, u1);
    u_1 = tmp2;
    tmp3 = lambda.simpleEvalCon(env, v1);
    v_ = tmp3;
    tmp4 = u_1 + v_;
    return runtime.safeCall(lambda.Con(tmp4))
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp5 = lambda.Lam(x, b1);
    return lambda.Thunk(tmp5, env)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp6 = simpleEval_inst_37_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_37_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_37_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_37_tsni(env, a)
    } else {
      return simpleEval_inst_37_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_37_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_37_tsni = function simpleApply_inst_37_tsni(env, t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, arr, tmp1;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = lambda.Thunk(a, env);
      arr = [
        x,
        tmp
      ];
      tmp1 = NofibPrelude.Cons(arr, e);
      return simpleEval_inst_37_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
lookup_inst_37_35_tsni = function lookup_inst_37_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_37_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_38_tsni = function pp_inst_38_tsni(t) {
  return lambda.ppn(0, t)
};
ppenv_inst_38_tsni = function ppenv_inst_38_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_38_tsni;
  tmp2 = flatMap_inst_38_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_38_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_38_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_38_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_38_1_tsni = function flatMap_inst_38_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_38_1_tsni(f, t);
    return append_inst_38_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_38_1_2_tsni = function append_inst_38_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_38_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_38_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ppn_inst_39_tsni = function ppn_inst_39_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_39_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_39_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_39_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_39_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_39_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_39_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_39_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_39_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_39_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_39_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_39_tsni = function ppenv_inst_39_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_39_tsni;
  tmp2 = flatMap_inst_39_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_39_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_39_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = lambda1.pp(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_39_1_tsni = function flatMap_inst_39_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_39_1_tsni(f, t);
    return append_inst_39_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_1_2_tsni = function append_inst_39_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_39_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_40_tsni = function pp_inst_40_tsni(t) {
  return ppn_inst_40_tsni(0, t)
};
ppn_inst_40_tsni = function ppn_inst_40_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_40_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_40_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_40_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_40_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_40_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_40_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_40_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_40_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_40_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = lambda.ppenv(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_40_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_40_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_40_1_tsni = function flatMap_inst_40_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_40_1_tsni(f, t);
    return append_inst_40_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_1_2_tsni = function append_inst_40_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_40_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_41_42_tsni = function traverseTerm_inst_41_42_tsni(t) {
  return eval_inst_41_42_tsni(t)
};
eval_inst_41_42_tsni = function eval_inst_41_42_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_41_42_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_41_42_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_41_42_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_41_42_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_41_42_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_41_42_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_41_42_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_41_42_65_tsni(lambda.incr, lambda_inst_41_42_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_41_42_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_41_42_tsni(a, b, vall)
  }
});
lambda$_inst_41_42_tsni = function lambda$_inst_41_42_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_41_42_tsni(a)
  } else {
    return traverseTerm_inst_41_42_tsni(b)
  }
};
lambda_inst_41_42_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_41_42_tsni1(v, u_)
  }
});
lambda$_inst_41_42_tsni1 = function lambda$_inst_41_42_tsni(v, u_) {
  return apply_inst_41_42_tsni(u_, v)
};
apply_inst_41_42_tsni = function apply_inst_41_42_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_41_42_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_41_42_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_41_42_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_41_42_tsni2 = function lambda$_inst_41_42_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_41_42_tsni(b);
  tmp2 = pushVar_inst_41_42_12_tsni(x, tmp, tmp1);
  return withEnv_inst_41_42_62_tsni(e, tmp2)
};
traverseCon_inst_41_42_tsni = function traverseCon_inst_41_42_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_41_42_tsni(t);
  tmp1 = lambda_inst_41_42_10_tsni;
  return myBind_inst_41_42_60_tsni(tmp, tmp1)
};
lambda_inst_41_42_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_41_42_tsni3(x, e)
  }
});
lambda$_inst_41_42_tsni3 = function lambda$_inst_41_42_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_41_42_4_tsni(x);
  return myBind_inst_41_42_56_tsni(tmp, lambda_inst_41_42_tsni4)
};
lambda_inst_41_42_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_41_42_tsni(t)
});
lambda_inst_41_42_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_41_42_14_15_tsni(tmp)
});
myReturn_inst_41_42_14_15_tsni = function myReturn_inst_41_42_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_41_42_12_tsni = function pushVar_inst_41_42_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_41_42_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_41_42_12_13_tsni = function myBind_inst_41_42_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_41_42_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_41_42_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_41_42_10_11_tsni = function myReturn_inst_41_42_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookupVar_inst_41_42_4_tsni = function lookupVar_inst_41_42_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_42_4_5_tsni(v));
  return myBind_inst_41_42_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_41_42_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_41_42_4_5_6_tsni(v, env)
  }
});
lambda$_inst_41_42_4_5_6_tsni = function lambda$_inst_41_42_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_41_42_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_41_42_4_5_6_7_tsni = function lookup2$_inst_41_42_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_41_42_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_41_42_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_41_42_4_5_6_7_8_tsni = function lookup_inst_41_42_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_41_42_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_41_42_4_9_tsni = function myBind_inst_41_42_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
pp_inst_41_43_tsni = function pp_inst_41_43_tsni(t) {
  return ppn_inst_41_43_tsni(0, t)
};
ppn_inst_41_43_tsni = function ppn_inst_41_43_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_41_43_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_41_43_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_41_43_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_41_43_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_41_43_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_41_43_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_41_43_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_41_43_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_41_43_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_41_43_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_41_43_tsni = function ppenv_inst_41_43_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_41_43_tsni;
  tmp2 = flatMap_inst_41_43_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_41_43_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_41_43_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_41_43_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_41_43_1_tsni = function flatMap_inst_41_43_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_41_43_1_tsni(f, t);
    return append_inst_41_43_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_41_43_1_2_tsni = function append_inst_41_43_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_43_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_41_43_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_41_44_tsni = function pp_inst_41_44_tsni(t) {
  return ppn_inst_41_44_tsni(0, t)
};
ppn_inst_41_44_tsni = function ppn_inst_41_44_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_41_44_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_41_44_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_41_44_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_41_44_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_41_44_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_41_44_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_41_44_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_41_44_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_41_44_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_41_44_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_41_44_tsni = function ppenv_inst_41_44_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_41_44_tsni;
  tmp2 = flatMap_inst_41_44_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_41_44_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_41_44_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_41_44_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_41_44_1_tsni = function flatMap_inst_41_44_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_41_44_1_tsni(f, t);
    return append_inst_41_44_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_41_44_1_2_tsni = function append_inst_41_44_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_44_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_41_44_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_45_46_tsni = function simpleEval_inst_45_46_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_45_46_35_tsni(v2, env);
    tmp1 = myMaybe_inst_45_46_66_tsni(lambda18, lambda19, tmp);
    return simpleEval_inst_45_46_tsni(env, tmp1)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    e1 = param0;
    return runtime.safeCall(lambda.Con(e1))
  } else if (ter instanceof lambda.Incr.class) {
    return runtime.safeCall(lambda.Con(0))
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp2 = simpleEvalCon_inst_45_46_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_45_46_tsni(env, v1);
    v_ = tmp3;
    tmp4 = u_1 + v_;
    return runtime.safeCall(lambda.Con(tmp4))
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp5 = lambda.Lam(x, b1);
    return lambda.Thunk(tmp5, env)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp6 = simpleEval_inst_45_46_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_45_46_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_45_46_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_45_46_tsni(env, a)
    } else {
      return simpleEval_inst_45_46_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_45_46_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_45_46_tsni = function simpleApply_inst_45_46_tsni(env, t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, arr, tmp1;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = lambda.Thunk(a, env);
      arr = [
        x,
        tmp
      ];
      tmp1 = NofibPrelude.Cons(arr, e);
      return simpleEval_inst_45_46_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_45_46_tsni = function simpleEvalCon_inst_45_46_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_45_46_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_45_46_35_tsni = function lookup_inst_45_46_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_45_46_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ev_inst_47_48_tsni = function ev_inst_47_48_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_47_48_42_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_47_48_43_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_47_48_44_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_47_48_44_tsni = function pp_inst_47_48_44_tsni(t) {
  return ppn_inst_47_48_44_tsni(0, t)
};
ppn_inst_47_48_44_tsni = function ppn_inst_47_48_44_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_47_48_44_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_47_48_44_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_47_48_44_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_47_48_44_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_47_48_44_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_47_48_44_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_47_48_44_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_47_48_44_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_47_48_44_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_47_48_44_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_47_48_44_tsni = function ppenv_inst_47_48_44_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_47_48_44_tsni;
  tmp2 = flatMap_inst_47_48_44_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_47_48_44_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_47_48_44_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_47_48_44_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_47_48_44_1_tsni = function flatMap_inst_47_48_44_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_47_48_44_1_tsni(f, t);
    return append_inst_47_48_44_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_47_48_44_1_2_tsni = function append_inst_47_48_44_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_47_48_44_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_47_48_44_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_47_48_43_tsni = function pp_inst_47_48_43_tsni(t) {
  return ppn_inst_47_48_43_tsni(0, t)
};
ppn_inst_47_48_43_tsni = function ppn_inst_47_48_43_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_47_48_43_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_47_48_43_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_47_48_43_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_47_48_43_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_47_48_43_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_47_48_43_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_47_48_43_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_47_48_43_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_47_48_43_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_47_48_43_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_47_48_43_tsni = function ppenv_inst_47_48_43_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_47_48_43_tsni;
  tmp2 = flatMap_inst_47_48_43_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_47_48_43_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_47_48_43_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_47_48_43_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_47_48_43_1_tsni = function flatMap_inst_47_48_43_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_47_48_43_1_tsni(f, t);
    return append_inst_47_48_43_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_47_48_43_1_2_tsni = function append_inst_47_48_43_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_47_48_43_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_47_48_43_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_47_48_42_tsni = function traverseTerm_inst_47_48_42_tsni(t) {
  return eval_inst_47_48_42_tsni(t)
};
eval_inst_47_48_42_tsni = function eval_inst_47_48_42_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_47_48_42_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_47_48_42_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_47_48_42_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_47_48_42_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_47_48_42_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_47_48_42_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_47_48_42_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_47_48_42_65_tsni(lambda.incr, lambda_inst_47_48_42_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_47_48_42_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_47_48_42_tsni(a, b, vall)
  }
});
lambda$_inst_47_48_42_tsni = function lambda$_inst_47_48_42_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_47_48_42_tsni(a)
  } else {
    return traverseTerm_inst_47_48_42_tsni(b)
  }
};
lambda_inst_47_48_42_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_47_48_42_tsni1(v, u_)
  }
});
lambda$_inst_47_48_42_tsni1 = function lambda$_inst_47_48_42_tsni(v, u_) {
  return apply_inst_47_48_42_tsni(u_, v)
};
apply_inst_47_48_42_tsni = function apply_inst_47_48_42_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_47_48_42_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_47_48_42_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_47_48_42_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_47_48_42_tsni2 = function lambda$_inst_47_48_42_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_47_48_42_tsni(b);
  tmp2 = pushVar_inst_47_48_42_12_tsni(x, tmp, tmp1);
  return withEnv_inst_47_48_42_62_tsni(e, tmp2)
};
traverseCon_inst_47_48_42_tsni = function traverseCon_inst_47_48_42_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_47_48_42_tsni(t);
  tmp1 = lambda_inst_47_48_42_10_tsni;
  return myBind_inst_47_48_42_60_tsni(tmp, tmp1)
};
lambda_inst_47_48_42_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_47_48_42_tsni3(x, e)
  }
});
lambda$_inst_47_48_42_tsni3 = function lambda$_inst_47_48_42_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_47_48_42_4_tsni(x);
  return myBind_inst_47_48_42_56_tsni(tmp, lambda_inst_47_48_42_tsni4)
};
lambda_inst_47_48_42_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_47_48_42_tsni(t)
});
lookupVar_inst_47_48_42_4_tsni = function lookupVar_inst_47_48_42_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_47_48_42_4_5_tsni(v));
  return myBind_inst_47_48_42_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_47_48_42_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_47_48_42_4_5_6_tsni(v, env)
  }
});
lambda$_inst_47_48_42_4_5_6_tsni = function lambda$_inst_47_48_42_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_47_48_42_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_47_48_42_4_5_6_7_tsni = function lookup2$_inst_47_48_42_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_47_48_42_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_47_48_42_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_47_48_42_4_5_6_7_8_tsni = function lookup_inst_47_48_42_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_47_48_42_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_47_48_42_4_9_tsni = function myBind_inst_47_48_42_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_47_48_42_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_47_48_42_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_47_48_42_10_11_tsni = function myReturn_inst_47_48_42_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_47_48_42_12_tsni = function pushVar_inst_47_48_42_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_47_48_42_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_47_48_42_12_13_tsni = function myBind_inst_47_48_42_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_47_48_42_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_47_48_42_14_15_tsni(tmp)
});
myReturn_inst_47_48_42_14_15_tsni = function myReturn_inst_47_48_42_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
mainSimple_inst_49_50_tsni = function mainSimple_inst_49_50_tsni(args) {
  let scrut, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    tmp3 = simpleEval_inst_49_50_46_tsni(NofibPrelude.Nil, tmp2);
    return lambda.showTerm(tmp3)
  }
};
simpleEval_inst_49_50_46_tsni = function simpleEval_inst_49_50_46_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_49_50_46_35_tsni(v2, env);
    tmp1 = myMaybe_inst_49_50_46_66_tsni(lambda18, lambda19, tmp);
    return simpleEval_inst_49_50_46_tsni(env, tmp1)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    e1 = param0;
    return runtime.safeCall(lambda.Con(e1))
  } else if (ter instanceof lambda.Incr.class) {
    return runtime.safeCall(lambda.Con(0))
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp2 = simpleEvalCon_inst_49_50_46_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_49_50_46_tsni(env, v1);
    v_ = tmp3;
    tmp4 = u_1 + v_;
    return runtime.safeCall(lambda.Con(tmp4))
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp5 = lambda.Lam(x, b1);
    return lambda.Thunk(tmp5, env)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp6 = simpleEval_inst_49_50_46_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_49_50_46_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_49_50_46_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_49_50_46_tsni(env, a)
    } else {
      return simpleEval_inst_49_50_46_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_49_50_46_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_49_50_46_tsni = function simpleApply_inst_49_50_46_tsni(env, t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, arr, tmp1;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = lambda.Thunk(a, env);
      arr = [
        x,
        tmp
      ];
      tmp1 = NofibPrelude.Cons(arr, e);
      return simpleEval_inst_49_50_46_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_49_50_46_tsni = function simpleEvalCon_inst_49_50_46_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_49_50_46_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_49_50_46_35_tsni = function lookup_inst_49_50_46_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_49_50_46_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mainMonad_inst_49_51_tsni = function mainMonad_inst_49_51_tsni(args) {
  let scrut, tmp, tmp1, tmp2;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    return ev_inst_49_51_48_tsni(tmp2)
  }
};
ev_inst_49_51_48_tsni = function ev_inst_49_51_48_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_49_51_48_42_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_49_51_48_43_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_49_51_48_44_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_49_51_48_42_tsni = function traverseTerm_inst_49_51_48_42_tsni(t) {
  return eval_inst_49_51_48_42_tsni(t)
};
eval_inst_49_51_48_42_tsni = function eval_inst_49_51_48_42_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_49_51_48_42_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_49_51_48_42_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_49_51_48_42_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_49_51_48_42_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_49_51_48_42_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_49_51_48_42_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_49_51_48_42_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_49_51_48_42_65_tsni(lambda.incr, lambda_inst_49_51_48_42_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_49_51_48_42_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_49_51_48_42_tsni(a, b, vall)
  }
});
lambda$_inst_49_51_48_42_tsni = function lambda$_inst_49_51_48_42_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_49_51_48_42_tsni(a)
  } else {
    return traverseTerm_inst_49_51_48_42_tsni(b)
  }
};
lambda_inst_49_51_48_42_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_49_51_48_42_tsni1(v, u_)
  }
});
lambda$_inst_49_51_48_42_tsni1 = function lambda$_inst_49_51_48_42_tsni(v, u_) {
  return apply_inst_49_51_48_42_tsni(u_, v)
};
apply_inst_49_51_48_42_tsni = function apply_inst_49_51_48_42_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_49_51_48_42_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_49_51_48_42_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_49_51_48_42_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_49_51_48_42_tsni2 = function lambda$_inst_49_51_48_42_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_49_51_48_42_tsni(b);
  tmp2 = pushVar_inst_49_51_48_42_12_tsni(x, tmp, tmp1);
  return withEnv_inst_49_51_48_42_62_tsni(e, tmp2)
};
traverseCon_inst_49_51_48_42_tsni = function traverseCon_inst_49_51_48_42_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_49_51_48_42_tsni(t);
  tmp1 = lambda_inst_49_51_48_42_10_tsni;
  return myBind_inst_49_51_48_42_60_tsni(tmp, tmp1)
};
lambda_inst_49_51_48_42_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_49_51_48_42_tsni3(x, e)
  }
});
lambda$_inst_49_51_48_42_tsni3 = function lambda$_inst_49_51_48_42_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_49_51_48_42_4_tsni(x);
  return myBind_inst_49_51_48_42_56_tsni(tmp, lambda_inst_49_51_48_42_tsni4)
};
lambda_inst_49_51_48_42_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_49_51_48_42_tsni(t)
});
lambda_inst_49_51_48_42_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_49_51_48_42_14_15_tsni(tmp)
});
myReturn_inst_49_51_48_42_14_15_tsni = function myReturn_inst_49_51_48_42_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_49_51_48_42_12_tsni = function pushVar_inst_49_51_48_42_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_49_51_48_42_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_49_51_48_42_12_13_tsni = function myBind_inst_49_51_48_42_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_49_51_48_42_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_49_51_48_42_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_49_51_48_42_10_11_tsni = function myReturn_inst_49_51_48_42_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookupVar_inst_49_51_48_42_4_tsni = function lookupVar_inst_49_51_48_42_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_49_51_48_42_4_5_tsni(v));
  return myBind_inst_49_51_48_42_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_49_51_48_42_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_49_51_48_42_4_5_6_tsni(v, env)
  }
});
lambda$_inst_49_51_48_42_4_5_6_tsni = function lambda$_inst_49_51_48_42_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_49_51_48_42_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_49_51_48_42_4_5_6_7_tsni = function lookup2$_inst_49_51_48_42_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_49_51_48_42_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_49_51_48_42_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_49_51_48_42_4_5_6_7_8_tsni = function lookup_inst_49_51_48_42_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_49_51_48_42_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_49_51_48_42_4_9_tsni = function myBind_inst_49_51_48_42_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
pp_inst_49_51_48_43_tsni = function pp_inst_49_51_48_43_tsni(t) {
  return ppn_inst_49_51_48_43_tsni(0, t)
};
ppn_inst_49_51_48_43_tsni = function ppn_inst_49_51_48_43_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_49_51_48_43_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_49_51_48_43_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_49_51_48_43_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_49_51_48_43_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_49_51_48_43_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_49_51_48_43_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_49_51_48_43_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_49_51_48_43_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_49_51_48_43_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_49_51_48_43_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_49_51_48_43_tsni = function ppenv_inst_49_51_48_43_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_49_51_48_43_tsni;
  tmp2 = flatMap_inst_49_51_48_43_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_49_51_48_43_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_49_51_48_43_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_49_51_48_43_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_49_51_48_43_1_tsni = function flatMap_inst_49_51_48_43_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_49_51_48_43_1_tsni(f, t);
    return append_inst_49_51_48_43_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_49_51_48_43_1_2_tsni = function append_inst_49_51_48_43_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_49_51_48_43_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_49_51_48_43_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_49_51_48_44_tsni = function pp_inst_49_51_48_44_tsni(t) {
  return ppn_inst_49_51_48_44_tsni(0, t)
};
ppn_inst_49_51_48_44_tsni = function ppn_inst_49_51_48_44_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_49_51_48_44_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_49_51_48_44_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_49_51_48_44_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_49_51_48_44_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_49_51_48_44_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_49_51_48_44_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_49_51_48_44_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_49_51_48_44_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_49_51_48_44_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_49_51_48_44_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_49_51_48_44_tsni = function ppenv_inst_49_51_48_44_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_49_51_48_44_tsni;
  tmp2 = flatMap_inst_49_51_48_44_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_49_51_48_44_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_49_51_48_44_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_49_51_48_44_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_49_51_48_44_1_tsni = function flatMap_inst_49_51_48_44_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_49_51_48_44_1_tsni(f, t);
    return append_inst_49_51_48_44_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_49_51_48_44_1_2_tsni = function append_inst_49_51_48_44_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_49_51_48_44_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_49_51_48_44_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testLambda_nofib_inst_52_53_tsni = function testLambda_nofib_inst_52_53_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, arr;
  tmp = NofibPrelude.Cons(n, NofibPrelude.Nil);
  tmp1 = mainSimple_inst_52_53_50_tsni(tmp);
  tmp2 = NofibPrelude.Cons(n, NofibPrelude.Nil);
  tmp3 = mainMonad_inst_52_53_51_tsni(tmp2);
  arr = [
    tmp1,
    tmp3
  ];
  return arr
};
mainMonad_inst_52_53_51_tsni = function mainMonad_inst_52_53_51_tsni(args) {
  let scrut, tmp, tmp1, tmp2;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    return ev_inst_52_53_51_48_tsni(tmp2)
  }
};
ev_inst_52_53_51_48_tsni = function ev_inst_52_53_51_48_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_52_53_51_48_42_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_52_53_51_48_43_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_52_53_51_48_44_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_52_53_51_48_44_tsni = function pp_inst_52_53_51_48_44_tsni(t) {
  return ppn_inst_52_53_51_48_44_tsni(0, t)
};
ppn_inst_52_53_51_48_44_tsni = function ppn_inst_52_53_51_48_44_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_52_53_51_48_44_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_52_53_51_48_44_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_52_53_51_48_44_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_52_53_51_48_44_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_52_53_51_48_44_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_52_53_51_48_44_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_52_53_51_48_44_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_52_53_51_48_44_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_52_53_51_48_44_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_52_53_51_48_44_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_52_53_51_48_44_tsni = function ppenv_inst_52_53_51_48_44_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_52_53_51_48_44_tsni;
  tmp2 = flatMap_inst_52_53_51_48_44_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_52_53_51_48_44_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_52_53_51_48_44_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_52_53_51_48_44_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_52_53_51_48_44_1_tsni = function flatMap_inst_52_53_51_48_44_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_52_53_51_48_44_1_tsni(f, t);
    return append_inst_52_53_51_48_44_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_52_53_51_48_44_1_2_tsni = function append_inst_52_53_51_48_44_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_52_53_51_48_44_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_52_53_51_48_44_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_52_53_51_48_43_tsni = function pp_inst_52_53_51_48_43_tsni(t) {
  return ppn_inst_52_53_51_48_43_tsni(0, t)
};
ppn_inst_52_53_51_48_43_tsni = function ppn_inst_52_53_51_48_43_tsni(n, ter) {
  let param0, param1, t, e, param2, c, a, b, a1, b1, a2, b2, v, t1, i, v1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v1 = param0;
    return v1
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp)
  } else if (ter instanceof lambda.Incr.class) {
    return NofibPrelude.nofibStringToList("INCR")
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    v = param0;
    t1 = param1;
    tmp1 = NofibPrelude.nofibStringToList(". ");
    tmp2 = 0 - 1;
    tmp3 = ppn_inst_52_53_51_48_43_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_52_53_51_48_43_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_52_53_51_48_43_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_52_53_51_48_43_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_52_53_51_48_43_tsni(2, b1);
    tmp15 = NofibPrelude.append(tmp13, tmp14);
    tmp16 = NofibPrelude.append(tmp12, tmp15);
    return lambda.bracket(n, 2, tmp16)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp17 = NofibPrelude.nofibStringToList("IF ");
    tmp18 = ppn_inst_52_53_51_48_43_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_52_53_51_48_43_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_52_53_51_48_43_tsni(0, b);
    tmp23 = NofibPrelude.append(tmp21, tmp22);
    tmp24 = NofibPrelude.append(tmp20, tmp23);
    tmp25 = NofibPrelude.append(tmp19, tmp24);
    tmp26 = NofibPrelude.append(tmp18, tmp25);
    tmp27 = NofibPrelude.append(tmp17, tmp26);
    return lambda.bracket(n, 0, tmp27)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp28 = ppn_inst_52_53_51_48_43_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_52_53_51_48_43_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_52_53_51_48_43_tsni = function ppenv_inst_52_53_51_48_43_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = NofibPrelude.nofibStringToList("[");
  tmp1 = lambda_inst_52_53_51_48_43_tsni;
  tmp2 = flatMap_inst_52_53_51_48_43_1_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_52_53_51_48_43_54_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
lambda_inst_52_53_51_48_43_tsni = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_52_53_51_48_43_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
flatMap_inst_52_53_51_48_43_1_tsni = function flatMap_inst_52_53_51_48_43_1_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = flatMap_inst_52_53_51_48_43_1_tsni(f, t);
    return append_inst_52_53_51_48_43_1_2_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_52_53_51_48_43_1_2_tsni = function append_inst_52_53_51_48_43_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_52_53_51_48_43_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_52_53_51_48_43_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_52_53_51_48_42_tsni = function traverseTerm_inst_52_53_51_48_42_tsni(t) {
  return eval_inst_52_53_51_48_42_tsni(t)
};
eval_inst_52_53_51_48_42_tsni = function eval_inst_52_53_51_48_42_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1, lambda$this2;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda$this = runtime.safeCall(lambda_inst_52_53_51_48_42_tsni3(x1));
    return lambda.myBind(lambda.myGet, lambda$this)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_52_53_51_48_42_tsni(u1);
    lambda$this1 = runtime.safeCall(lambda12(v1));
    return lambda.myBind(tmp, lambda$this1)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_52_53_51_48_42_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp2 = runtime.safeCall(lambda14(x, b1));
    return lambda.myBind(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_52_53_51_48_42_tsni(u);
    lambda$this2 = runtime.safeCall(lambda_inst_52_53_51_48_42_tsni1(v));
    return lambda.myBind(tmp3, lambda$this2)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_52_53_51_48_42_tsni(c);
    tmp5 = runtime.safeCall(lambda_inst_52_53_51_48_42_tsni(a, b));
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    return myBind_inst_52_53_51_48_42_65_tsni(lambda.incr, lambda_inst_52_53_51_48_42_14_tsni)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_52_53_51_48_42_tsni = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_52_53_51_48_42_tsni(a, b, vall)
  }
});
lambda$_inst_52_53_51_48_42_tsni = function lambda$_inst_52_53_51_48_42_tsni(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_52_53_51_48_42_tsni(a)
  } else {
    return traverseTerm_inst_52_53_51_48_42_tsni(b)
  }
};
lambda_inst_52_53_51_48_42_tsni1 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_52_53_51_48_42_tsni1(v, u_)
  }
});
lambda$_inst_52_53_51_48_42_tsni1 = function lambda$_inst_52_53_51_48_42_tsni(v, u_) {
  return apply_inst_52_53_51_48_42_tsni(u_, v)
};
apply_inst_52_53_51_48_42_tsni = function apply_inst_52_53_51_48_42_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = runtime.safeCall(lambda_inst_52_53_51_48_42_tsni2(a, x, b, e));
      return lambda.myBind(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_52_53_51_48_42_tsni2 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_52_53_51_48_42_tsni2(a, x, b, e, orig)
  }
});
lambda$_inst_52_53_51_48_42_tsni2 = function lambda$_inst_52_53_51_48_42_tsni(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_52_53_51_48_42_tsni(b);
  tmp2 = pushVar_inst_52_53_51_48_42_12_tsni(x, tmp, tmp1);
  return withEnv_inst_52_53_51_48_42_62_tsni(e, tmp2)
};
traverseCon_inst_52_53_51_48_42_tsni = function traverseCon_inst_52_53_51_48_42_tsni(t) {
  let tmp, tmp1;
  tmp = traverseTerm_inst_52_53_51_48_42_tsni(t);
  tmp1 = lambda_inst_52_53_51_48_42_10_tsni;
  return myBind_inst_52_53_51_48_42_60_tsni(tmp, tmp1)
};
lambda_inst_52_53_51_48_42_tsni3 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_52_53_51_48_42_tsni3(x, e)
  }
});
lambda$_inst_52_53_51_48_42_tsni3 = function lambda$_inst_52_53_51_48_42_tsni(x, e) {
  let tmp;
  tmp = lookupVar_inst_52_53_51_48_42_4_tsni(x);
  return myBind_inst_52_53_51_48_42_56_tsni(tmp, lambda_inst_52_53_51_48_42_tsni4)
};
lambda_inst_52_53_51_48_42_tsni4 = (undefined, function (t) {
  return traverseTerm_inst_52_53_51_48_42_tsni(t)
});
lookupVar_inst_52_53_51_48_42_4_tsni = function lookupVar_inst_52_53_51_48_42_4_tsni(v) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_52_53_51_48_42_4_5_tsni(v));
  return myBind_inst_52_53_51_48_42_4_9_tsni(lambda.myGet, lambda$this)
};
lambda_inst_52_53_51_48_42_4_5_tsni = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_52_53_51_48_42_4_5_6_tsni(v, env)
  }
});
lambda$_inst_52_53_51_48_42_4_5_6_tsni = function lambda$_inst_52_53_51_48_42_4_5_6_tsni(v, env) {
  let tmp;
  tmp = lookup2$_inst_52_53_51_48_42_4_5_6_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lookup2$_inst_52_53_51_48_42_4_5_6_7_tsni = function lookup2$_inst_52_53_51_48_42_4_5_6_7_tsni(v, env) {
  let tmp;
  tmp = lookup_inst_52_53_51_48_42_4_5_6_7_8_tsni(v, env);
  return myMaybe_inst_52_53_51_48_42_4_5_6_7_55_tsni(lambda4, lambda5, tmp)
};
lookup_inst_52_53_51_48_42_4_5_6_7_8_tsni = function lookup_inst_52_53_51_48_42_4_5_6_7_8_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_52_53_51_48_42_4_5_6_7_8_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_52_53_51_48_42_4_9_tsni = function myBind_inst_52_53_51_48_42_4_9_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_52_53_51_48_42_10_tsni = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return myReturn_inst_52_53_51_48_42_10_11_tsni(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
myReturn_inst_52_53_51_48_42_10_11_tsni = function myReturn_inst_52_53_51_48_42_10_11_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_52_53_51_48_42_12_tsni = function pushVar_inst_52_53_51_48_42_12_tsni(v, t, m) {
  let tmp;
  tmp = runtime.safeCall(lambda7(v, t, m));
  return myBind_inst_52_53_51_48_42_12_13_tsni(lambda.myGet, tmp)
};
myBind_inst_52_53_51_48_42_12_13_tsni = function myBind_inst_52_53_51_48_42_12_13_tsni(m, f) {
  let tmp, _deforest_MyState_r;
  tmp = runtime.safeCall(lambda2(m, f));
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lambda_inst_52_53_51_48_42_14_tsni = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return myReturn_inst_52_53_51_48_42_14_15_tsni(tmp)
});
myReturn_inst_52_53_51_48_42_14_15_tsni = function myReturn_inst_52_53_51_48_42_14_15_tsni(a) {
  let lambda$this, _deforest_MyState_r;
  lambda$this = runtime.safeCall(lambda3(a));
  _deforest_MyState_r = lambda$this;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
mainSimple_inst_52_53_50_tsni = function mainSimple_inst_52_53_50_tsni(args) {
  let scrut, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    tmp3 = simpleEval_inst_52_53_50_46_tsni(NofibPrelude.Nil, tmp2);
    return lambda.showTerm(tmp3)
  }
};
simpleEval_inst_52_53_50_46_tsni = function simpleEval_inst_52_53_50_46_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_52_53_50_46_35_tsni(v2, env);
    tmp1 = myMaybe_inst_52_53_50_46_66_tsni(lambda18, lambda19, tmp);
    return simpleEval_inst_52_53_50_46_tsni(env, tmp1)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    e1 = param0;
    return runtime.safeCall(lambda.Con(e1))
  } else if (ter instanceof lambda.Incr.class) {
    return runtime.safeCall(lambda.Con(0))
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp2 = simpleEvalCon_inst_52_53_50_46_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_52_53_50_46_tsni(env, v1);
    v_ = tmp3;
    tmp4 = u_1 + v_;
    return runtime.safeCall(lambda.Con(tmp4))
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    tmp5 = lambda.Lam(x, b1);
    return lambda.Thunk(tmp5, env)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp6 = simpleEval_inst_52_53_50_46_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_52_53_50_46_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_52_53_50_46_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_52_53_50_46_tsni(env, a)
    } else {
      return simpleEval_inst_52_53_50_46_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_52_53_50_46_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_52_53_50_46_tsni = function simpleApply_inst_52_53_50_46_tsni(env, t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, arr, tmp1;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      tmp = lambda.Thunk(a, env);
      arr = [
        x,
        tmp
      ];
      tmp1 = NofibPrelude.Cons(arr, e);
      return simpleEval_inst_52_53_50_46_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_52_53_50_46_tsni = function simpleEvalCon_inst_52_53_50_46_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_52_53_50_46_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_52_53_50_46_35_tsni = function lookup_inst_52_53_50_46_35_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (f) => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = NofibPrelude.listEq(k, x);
      if (scrut === true) {
        _deforest_Some_x = v;
        return (f) => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return runtime.safeCall(f(x1))
        }
      } else {
        return lookup_inst_52_53_50_46_35_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_54_tsni = function append_inst_0_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myMaybe_inst_3_4_5_6_7_55_tsni = function myMaybe_inst_3_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_3_56_tsni = function myBind_inst_3_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_3_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_3_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_3_56_57_58_tsni = function lambda$_inst_3_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_3_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_3_56_57_58_59_tsni = function myRunState_inst_3_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_3_60_tsni = function myBind_inst_3_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_3_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_3_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_3_60_57_58_tsni = function lambda$_inst_3_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_3_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_3_60_57_58_61_tsni = function myRunState_inst_3_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_3_62_tsni = function withEnv_inst_3_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_3_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_3_62_63_tsni = function myEvalState_inst_3_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_3_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_3_62_63_64_tsni = function myRunState_inst_3_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_3_65_tsni = function myBind_inst_3_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_3_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_3_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_3_65_57_58_tsni = function lambda$_inst_3_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_3_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_3_65_57_58_61_tsni = function myRunState_inst_3_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_16_4_5_6_7_55_tsni = function myMaybe_inst_16_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_16_56_tsni = function myBind_inst_16_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_16_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_16_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_16_56_57_58_tsni = function lambda$_inst_16_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_16_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_16_56_57_58_59_tsni = function myRunState_inst_16_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_60_tsni = function myBind_inst_16_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_16_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_16_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_16_60_57_58_tsni = function lambda$_inst_16_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_16_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_16_60_57_58_61_tsni = function myRunState_inst_16_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_16_62_tsni = function withEnv_inst_16_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_16_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_16_62_63_tsni = function myEvalState_inst_16_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_16_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_16_62_63_64_tsni = function myRunState_inst_16_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_65_tsni = function myBind_inst_16_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_16_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_16_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_16_65_57_58_tsni = function lambda$_inst_16_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_16_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_16_65_57_58_61_tsni = function myRunState_inst_16_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_17_4_5_6_7_55_tsni = function myMaybe_inst_17_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_17_56_tsni = function myBind_inst_17_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_17_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_17_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_17_56_57_58_tsni = function lambda$_inst_17_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_17_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_17_56_57_58_59_tsni = function myRunState_inst_17_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_60_tsni = function myBind_inst_17_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_17_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_17_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_17_60_57_58_tsni = function lambda$_inst_17_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_17_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_17_60_57_58_61_tsni = function myRunState_inst_17_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_17_62_tsni = function withEnv_inst_17_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_17_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_17_62_63_tsni = function myEvalState_inst_17_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_17_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_17_62_63_64_tsni = function myRunState_inst_17_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_65_tsni = function myBind_inst_17_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_17_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_17_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_17_65_57_58_tsni = function lambda$_inst_17_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_17_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_17_65_57_58_61_tsni = function myRunState_inst_17_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_18_4_5_6_7_55_tsni = function myMaybe_inst_18_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_18_56_tsni = function myBind_inst_18_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_18_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_18_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_18_56_57_58_tsni = function lambda$_inst_18_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_18_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_18_56_57_58_59_tsni = function myRunState_inst_18_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_60_tsni = function myBind_inst_18_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_18_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_18_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_18_60_57_58_tsni = function lambda$_inst_18_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_18_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_18_60_57_58_61_tsni = function myRunState_inst_18_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_18_62_tsni = function withEnv_inst_18_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_18_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_18_62_63_tsni = function myEvalState_inst_18_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_18_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_18_62_63_64_tsni = function myRunState_inst_18_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_65_tsni = function myBind_inst_18_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_18_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_18_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_18_65_57_58_tsni = function lambda$_inst_18_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_18_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_18_65_57_58_61_tsni = function myRunState_inst_18_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_19_4_5_6_7_55_tsni = function myMaybe_inst_19_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_19_56_tsni = function myBind_inst_19_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_19_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_19_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_19_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_19_56_57_58_tsni = function lambda$_inst_19_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_19_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_19_56_57_58_59_tsni = function myRunState_inst_19_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_60_tsni = function myBind_inst_19_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_19_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_19_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_19_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_19_60_57_58_tsni = function lambda$_inst_19_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_19_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_19_60_57_58_61_tsni = function myRunState_inst_19_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_19_62_tsni = function withEnv_inst_19_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_19_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_19_62_63_tsni = function myEvalState_inst_19_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_19_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_19_62_63_64_tsni = function myRunState_inst_19_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_65_tsni = function myBind_inst_19_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_19_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_19_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_19_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_19_65_57_58_tsni = function lambda$_inst_19_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_19_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_19_65_57_58_61_tsni = function myRunState_inst_19_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_20_4_5_6_7_55_tsni = function myMaybe_inst_20_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_20_56_tsni = function myBind_inst_20_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_20_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_20_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_20_56_57_58_tsni = function lambda$_inst_20_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_20_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_20_56_57_58_59_tsni = function myRunState_inst_20_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_60_tsni = function myBind_inst_20_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_20_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_20_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_20_60_57_58_tsni = function lambda$_inst_20_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_20_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_20_60_57_58_61_tsni = function myRunState_inst_20_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_20_62_tsni = function withEnv_inst_20_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_20_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_20_62_63_tsni = function myEvalState_inst_20_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_20_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_20_62_63_64_tsni = function myRunState_inst_20_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_65_tsni = function myBind_inst_20_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_20_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_20_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_20_65_57_58_tsni = function lambda$_inst_20_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_20_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_20_65_57_58_61_tsni = function myRunState_inst_20_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_21_4_5_6_7_55_tsni = function myMaybe_inst_21_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_21_56_tsni = function myBind_inst_21_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_21_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_21_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_21_56_57_58_tsni = function lambda$_inst_21_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_21_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_21_56_57_58_59_tsni = function myRunState_inst_21_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_21_60_tsni = function myBind_inst_21_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_21_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_21_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_21_60_57_58_tsni = function lambda$_inst_21_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_21_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_21_60_57_58_61_tsni = function myRunState_inst_21_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_21_62_tsni = function withEnv_inst_21_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_21_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_21_62_63_tsni = function myEvalState_inst_21_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_21_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_21_62_63_64_tsni = function myRunState_inst_21_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_21_65_tsni = function myBind_inst_21_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_21_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_21_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_21_65_57_58_tsni = function lambda$_inst_21_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_21_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_21_65_57_58_61_tsni = function myRunState_inst_21_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_22_4_5_6_7_55_tsni = function myMaybe_inst_22_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_22_56_tsni = function myBind_inst_22_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_22_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_22_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_22_56_57_58_tsni = function lambda$_inst_22_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_22_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_22_56_57_58_59_tsni = function myRunState_inst_22_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_22_60_tsni = function myBind_inst_22_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_22_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_22_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_22_60_57_58_tsni = function lambda$_inst_22_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_22_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_22_60_57_58_61_tsni = function myRunState_inst_22_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_22_62_tsni = function withEnv_inst_22_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_22_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_22_62_63_tsni = function myEvalState_inst_22_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_22_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_22_62_63_64_tsni = function myRunState_inst_22_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_22_65_tsni = function myBind_inst_22_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_22_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_22_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_22_65_57_58_tsni = function lambda$_inst_22_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_22_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_22_65_57_58_61_tsni = function myRunState_inst_22_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_23_4_5_6_7_55_tsni = function myMaybe_inst_23_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_23_56_tsni = function myBind_inst_23_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_23_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_23_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_23_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_23_56_57_58_tsni = function lambda$_inst_23_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_23_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_23_56_57_58_59_tsni = function myRunState_inst_23_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_23_60_tsni = function myBind_inst_23_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_23_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_23_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_23_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_23_60_57_58_tsni = function lambda$_inst_23_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_23_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_23_60_57_58_61_tsni = function myRunState_inst_23_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_23_62_tsni = function withEnv_inst_23_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_23_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_23_62_63_tsni = function myEvalState_inst_23_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_23_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_23_62_63_64_tsni = function myRunState_inst_23_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_23_65_tsni = function myBind_inst_23_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_23_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_23_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_23_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_23_65_57_58_tsni = function lambda$_inst_23_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_23_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_23_65_57_58_61_tsni = function myRunState_inst_23_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_24_55_tsni = function myMaybe_inst_24_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_25_26_55_tsni = function myMaybe_inst_25_26_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_27_7_55_tsni = function myMaybe_inst_27_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_28_6_7_55_tsni = function myMaybe_inst_28_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_29_5_6_7_55_tsni = function myMaybe_inst_29_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_30_4_5_6_7_55_tsni = function myMaybe_inst_30_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_30_56_tsni = function myBind_inst_30_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_30_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_30_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_30_56_57_58_tsni = function lambda$_inst_30_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_30_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_30_56_57_58_59_tsni = function myRunState_inst_30_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_30_60_tsni = function myBind_inst_30_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_30_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_30_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_30_60_57_58_tsni = function lambda$_inst_30_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_30_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_30_60_57_58_61_tsni = function myRunState_inst_30_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_30_62_tsni = function withEnv_inst_30_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_30_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_30_62_63_tsni = function myEvalState_inst_30_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_30_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_30_62_63_64_tsni = function myRunState_inst_30_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_30_65_tsni = function myBind_inst_30_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_30_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_30_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_30_65_57_58_tsni = function lambda$_inst_30_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_30_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_30_65_57_58_61_tsni = function myRunState_inst_30_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_31_4_5_6_7_55_tsni = function myMaybe_inst_31_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_31_56_tsni = function myBind_inst_31_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_31_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_31_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_31_56_57_58_tsni = function lambda$_inst_31_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_31_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_31_56_57_58_59_tsni = function myRunState_inst_31_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_31_60_tsni = function myBind_inst_31_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_31_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_31_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_31_60_57_58_tsni = function lambda$_inst_31_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_31_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_31_60_57_58_61_tsni = function myRunState_inst_31_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_31_62_tsni = function withEnv_inst_31_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_31_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_31_62_63_tsni = function myEvalState_inst_31_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_31_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_31_62_63_64_tsni = function myRunState_inst_31_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_31_65_tsni = function myBind_inst_31_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_31_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_31_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_31_65_57_58_tsni = function lambda$_inst_31_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_31_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_31_65_57_58_61_tsni = function myRunState_inst_31_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_32_4_5_6_7_55_tsni = function myMaybe_inst_32_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_32_56_tsni = function myBind_inst_32_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_32_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_32_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_32_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_32_56_57_58_tsni = function lambda$_inst_32_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_32_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_32_56_57_58_59_tsni = function myRunState_inst_32_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_32_60_tsni = function myBind_inst_32_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_32_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_32_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_32_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_32_60_57_58_tsni = function lambda$_inst_32_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_32_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_32_60_57_58_61_tsni = function myRunState_inst_32_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_32_62_tsni = function withEnv_inst_32_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_32_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_32_62_63_tsni = function myEvalState_inst_32_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_32_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_32_62_63_64_tsni = function myRunState_inst_32_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_32_65_tsni = function myBind_inst_32_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_32_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_32_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_32_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_32_65_57_58_tsni = function lambda$_inst_32_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_32_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_32_65_57_58_61_tsni = function myRunState_inst_32_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_33_4_5_6_7_55_tsni = function myMaybe_inst_33_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_33_56_tsni = function myBind_inst_33_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_33_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_33_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_33_56_57_58_tsni = function lambda$_inst_33_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_33_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_33_56_57_58_59_tsni = function myRunState_inst_33_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_33_60_tsni = function myBind_inst_33_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_33_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_33_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_33_60_57_58_tsni = function lambda$_inst_33_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_33_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_33_60_57_58_61_tsni = function myRunState_inst_33_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_33_62_tsni = function withEnv_inst_33_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_33_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_33_62_63_tsni = function myEvalState_inst_33_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_33_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_33_62_63_64_tsni = function myRunState_inst_33_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_33_65_tsni = function myBind_inst_33_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_33_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_33_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_33_65_57_58_tsni = function lambda$_inst_33_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_33_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_33_65_57_58_61_tsni = function myRunState_inst_33_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_34_66_tsni = function myMaybe_inst_34_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_36_66_tsni = function myMaybe_inst_36_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_37_66_tsni = function myMaybe_inst_37_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
append_inst_38_54_tsni = function append_inst_38_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_54_tsni = function append_inst_39_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_54_tsni = function append_inst_40_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myBind_inst_41_42_65_tsni = function myBind_inst_41_42_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_41_42_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_41_42_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_41_42_65_57_58_tsni = function lambda$_inst_41_42_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_41_42_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_41_42_65_57_58_61_tsni = function myRunState_inst_41_42_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_41_42_62_tsni = function withEnv_inst_41_42_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_41_42_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_41_42_62_63_tsni = function myEvalState_inst_41_42_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_41_42_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_41_42_62_63_64_tsni = function myRunState_inst_41_42_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_41_42_60_tsni = function myBind_inst_41_42_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_41_42_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_41_42_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_41_42_60_57_58_tsni = function lambda$_inst_41_42_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_41_42_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_41_42_60_57_58_61_tsni = function myRunState_inst_41_42_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_41_42_4_5_6_7_55_tsni = function myMaybe_inst_41_42_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_41_42_56_tsni = function myBind_inst_41_42_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_41_42_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_41_42_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_41_42_56_57_58_tsni = function lambda$_inst_41_42_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_41_42_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_41_42_56_57_58_59_tsni = function myRunState_inst_41_42_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_41_43_54_tsni = function append_inst_41_43_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_41_44_54_tsni = function append_inst_41_44_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myMaybe_inst_45_46_66_tsni = function myMaybe_inst_45_46_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
append_inst_47_48_44_54_tsni = function append_inst_47_48_44_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_47_48_43_54_tsni = function append_inst_47_48_43_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myMaybe_inst_47_48_42_4_5_6_7_55_tsni = function myMaybe_inst_47_48_42_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_47_48_42_56_tsni = function myBind_inst_47_48_42_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_48_42_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_47_48_42_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_47_48_42_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_47_48_42_56_57_58_tsni = function lambda$_inst_47_48_42_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_47_48_42_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_47_48_42_56_57_58_59_tsni = function myRunState_inst_47_48_42_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_47_48_42_60_tsni = function myBind_inst_47_48_42_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_48_42_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_47_48_42_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_47_48_42_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_47_48_42_60_57_58_tsni = function lambda$_inst_47_48_42_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_47_48_42_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_47_48_42_60_57_58_61_tsni = function myRunState_inst_47_48_42_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_47_48_42_62_tsni = function withEnv_inst_47_48_42_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_47_48_42_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_47_48_42_62_63_tsni = function myEvalState_inst_47_48_42_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_47_48_42_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_47_48_42_62_63_64_tsni = function myRunState_inst_47_48_42_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_47_48_42_65_tsni = function myBind_inst_47_48_42_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_48_42_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_47_48_42_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_47_48_42_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_47_48_42_65_57_58_tsni = function lambda$_inst_47_48_42_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_47_48_42_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_47_48_42_65_57_58_61_tsni = function myRunState_inst_47_48_42_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_49_50_46_66_tsni = function myMaybe_inst_49_50_46_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_49_51_48_42_65_tsni = function myBind_inst_49_51_48_42_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_49_51_48_42_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_49_51_48_42_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_49_51_48_42_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_49_51_48_42_65_57_58_tsni = function lambda$_inst_49_51_48_42_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_49_51_48_42_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_49_51_48_42_65_57_58_61_tsni = function myRunState_inst_49_51_48_42_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_49_51_48_42_62_tsni = function withEnv_inst_49_51_48_42_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_49_51_48_42_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_49_51_48_42_62_63_tsni = function myEvalState_inst_49_51_48_42_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_49_51_48_42_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_49_51_48_42_62_63_64_tsni = function myRunState_inst_49_51_48_42_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_49_51_48_42_60_tsni = function myBind_inst_49_51_48_42_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_49_51_48_42_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_49_51_48_42_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_49_51_48_42_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_49_51_48_42_60_57_58_tsni = function lambda$_inst_49_51_48_42_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_49_51_48_42_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_49_51_48_42_60_57_58_61_tsni = function myRunState_inst_49_51_48_42_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_49_51_48_42_4_5_6_7_55_tsni = function myMaybe_inst_49_51_48_42_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_49_51_48_42_56_tsni = function myBind_inst_49_51_48_42_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_49_51_48_42_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_49_51_48_42_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_49_51_48_42_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_49_51_48_42_56_57_58_tsni = function lambda$_inst_49_51_48_42_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_49_51_48_42_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_49_51_48_42_56_57_58_59_tsni = function myRunState_inst_49_51_48_42_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_49_51_48_43_54_tsni = function append_inst_49_51_48_43_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_49_51_48_44_54_tsni = function append_inst_49_51_48_44_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_53_51_48_44_54_tsni = function append_inst_52_53_51_48_44_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_53_51_48_43_54_tsni = function append_inst_52_53_51_48_43_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myMaybe_inst_52_53_51_48_42_4_5_6_7_55_tsni = function myMaybe_inst_52_53_51_48_42_4_5_6_7_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_52_53_51_48_42_56_tsni = function myBind_inst_52_53_51_48_42_56_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_52_53_51_48_42_56_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_52_53_51_48_42_56_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_52_53_51_48_42_56_57_58_tsni(m, f, s)
  }
});
lambda$_inst_52_53_51_48_42_56_57_58_tsni = function lambda$_inst_52_53_51_48_42_56_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = myRunState_inst_52_53_51_48_42_56_57_58_59_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_52_53_51_48_42_56_57_58_59_tsni = function myRunState_inst_52_53_51_48_42_56_57_58_59_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_52_53_51_48_42_60_tsni = function myBind_inst_52_53_51_48_42_60_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_52_53_51_48_42_60_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_52_53_51_48_42_60_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_52_53_51_48_42_60_57_58_tsni(m, f, s)
  }
});
lambda$_inst_52_53_51_48_42_60_57_58_tsni = function lambda$_inst_52_53_51_48_42_60_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_52_53_51_48_42_60_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_52_53_51_48_42_60_57_58_61_tsni = function myRunState_inst_52_53_51_48_42_60_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
withEnv_inst_52_53_51_48_42_62_tsni = function withEnv_inst_52_53_51_48_42_62_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_52_53_51_48_42_62_63_tsni(m, tmp);
  return lambda.myReturn(tmp1)
};
myEvalState_inst_52_53_51_48_42_62_63_tsni = function myEvalState_inst_52_53_51_48_42_62_63_tsni(m, s) {
  let scrut, first1, first0, s_, a;
  scrut = myRunState_inst_52_53_51_48_42_62_63_64_tsni(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    return a
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_52_53_51_48_42_62_63_64_tsni = function myRunState_inst_52_53_51_48_42_62_63_64_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_52_53_51_48_42_65_tsni = function myBind_inst_52_53_51_48_42_65_tsni(m, f) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_52_53_51_48_42_65_57_tsni(m, f));
  return runtime.safeCall(lambda.MyState(tmp))
};
lambda_inst_52_53_51_48_42_65_57_tsni = (undefined, function (m, f) {
  return (s) => {
    return lambda$_inst_52_53_51_48_42_65_57_58_tsni(m, f, s)
  }
});
lambda$_inst_52_53_51_48_42_65_57_58_tsni = function lambda$_inst_52_53_51_48_42_65_57_58_tsni(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return myRunState_inst_52_53_51_48_42_65_57_58_61_tsni(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_52_53_51_48_42_65_57_58_61_tsni = function myRunState_inst_52_53_51_48_42_65_57_58_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_52_53_50_46_66_tsni = function myMaybe_inst_52_53_50_46_66_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
lambda20 = (undefined, function (caseScrut) {
  let first1, first0, v, t, tmp, tmp1, tmp2, tmp3, tmp4;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    v = first0;
    t = first1;
    tmp = NofibPrelude.nofibStringToList("=");
    tmp1 = pp_inst_0_tsni(t);
    tmp2 = NofibPrelude.nofibStringToList(", ");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    tmp4 = NofibPrelude.append(tmp, tmp3);
    return NofibPrelude.append(v, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
});
lambda18 = (undefined, function (dummy) {
  throw globalThis.Error("undefined var");
});
lambda19 = (undefined, function (x) {
  return x
});
lambda11 = (undefined, function (t) {
  return traverseTerm_inst_3_tsni(t)
});
lambda$10 = function lambda$(x, e) {
  let tmp;
  tmp = lookupVar_inst_16_4_tsni(x);
  return myBind_inst_16_56_tsni(tmp, lambda_inst_16_tsni4)
};
lambda10 = (undefined, function (x) {
  return (e) => {
    return lambda$_inst_17_tsni3(x, e)
  }
});
lambda$9 = function lambda$(u_, v_) {
  let tmp, tmp1;
  tmp = u_ + v_;
  tmp1 = runtime.safeCall(lambda1.Con(tmp));
  return lambda1.myReturn(tmp1)
};
lambda13 = (undefined, function (u_) {
  return (v_) => {
    return lambda$9(u_, v_)
  }
});
lambda$8 = function lambda$(v, u_) {
  let tmp, lambda$this;
  tmp = lambda1.traverseCon(v);
  lambda$this = runtime.safeCall(lambda13(u_));
  return lambda1.myBind(tmp, lambda$this)
};
lambda12 = (undefined, function (v) {
  return (u_) => {
    return lambda$8(v, u_)
  }
});
lambda$7 = function lambda$(x, b, env) {
  let tmp, tmp1;
  tmp = lambda1.Lam(x, b);
  tmp1 = lambda1.Thunk(tmp, env);
  return lambda1.myReturn(tmp1)
};
lambda14 = (undefined, function (x, b) {
  return (env) => {
    return lambda$7(x, b, env)
  }
});
lambda$6 = function lambda$(v, u_) {
  return apply_inst_18_tsni(u_, v)
};
lambda15 = (undefined, function (v) {
  return (u_) => {
    return lambda$_inst_19_tsni1(v, u_)
  }
});
lambda$5 = function lambda$(a, b, vall) {
  let scrut, tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  scrut = lambda1.eqTerm(vall, tmp);
  if (scrut === true) {
    return traverseTerm_inst_20_tsni(a)
  } else {
    return traverseTerm_inst_20_tsni(b)
  }
};
lambda16 = (undefined, function (a, b) {
  return (vall) => {
    return lambda$_inst_21_tsni(a, b, vall)
  }
});
lambda17 = (undefined, function (_dummy) {
  let tmp;
  tmp = runtime.safeCall(lambda1.Con(0));
  return lambda1.myReturn(tmp)
});
lambda$4 = function lambda$(a, x, b, e, orig) {
  let tmp, tmp1, tmp2;
  tmp = lambda1.Thunk(a, orig);
  tmp1 = traverseTerm_inst_22_tsni(b);
  tmp2 = pushVar_inst_22_12_tsni(x, tmp, tmp1);
  return withEnv_inst_22_62_tsni(e, tmp2)
};
lambda9 = (undefined, function (a, x, b, e) {
  return (orig) => {
    return lambda$_inst_23_tsni2(a, x, b, e, orig)
  }
});
lambda8 = (undefined, function (_t) {
  let param0, c;
  if (_t instanceof lambda1.Con.class) {
    param0 = _t.i;
    c = param0;
    return lambda1.myReturn(c)
  } else {
    throw globalThis.Error("Not a Con");
  }
});
lambda$3 = function lambda$(v, t, m, env) {
  let arr, tmp;
  arr = [
    v,
    t
  ];
  tmp = NofibPrelude.Cons(arr, env);
  return lambda1.withEnv(tmp, m)
};
lambda7 = (undefined, function (v, t, m) {
  return (env) => {
    return lambda$3(v, t, m, env)
  }
});
lambda4 = (undefined, function (dummy) {
  throw globalThis.Error("undefined");
});
lambda5 = (undefined, function (x) {
  return x
});
lookup2$ = function lookup2$(v, env) {
  let tmp;
  tmp = lookup_inst_24_8_tsni(v, env);
  return myMaybe_inst_24_55_tsni(lambda4, lambda5, tmp)
};
lookup2 = function lookup2(v) {
  return (env) => {
    return lookup2$_inst_25_26_tsni(v, env)
  }
};
lambda$2 = function lambda$(v, env) {
  let tmp;
  tmp = lookup2$_inst_27_7_tsni(v, env);
  return lambda1.myReturn(tmp)
};
lambda6 = (undefined, function (v) {
  return (env) => {
    return lambda$_inst_28_6_tsni(v, env)
  }
});
lambda$1 = function lambda$(a, s) {
  let arr;
  arr = [
    s,
    a
  ];
  return arr
};
lambda3 = (undefined, function (a) {
  return (s) => {
    return lambda$1(a, s)
  }
});
lambda$ = function lambda$(m, f, s) {
  let scrut, first1, first0, s_, a, tmp;
  scrut = lambda1.myRunState(m, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return lambda1.myRunState(tmp, s_)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda2 = (undefined, function (m, f) {
  return (s) => {
    return lambda$(m, f, s)
  }
});
(class lambda {
  static {
    lambda1 = lambda;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, lambda21;
    this.MyState = function MyState(r1) {
      return new MyState.class(r1);
    };
    this.MyState.class = class MyState {
      constructor(r) {
        this.r = r;
      }
      toString() { return "MyState(" + runtime.render(this.r) + ")"; }
    };
    lambda21 = (undefined, function (s) {
      let arr;
      arr = [
        s,
        s
      ];
      return arr
    });
    tmp = runtime.safeCall(lambda.MyState(lambda21));
    this.myGet = tmp;
    this.Term = class Term {
      constructor() {}
      toString() { return "Term"; }
    };
    const Incr$class = class Incr extends lambda.Term {
      constructor() {
        super();
      }
      toString() { return "Incr"; }
    };
    this.Incr = new Incr$class;
    this.Incr.class = Incr$class;
    this.Var = function Var(s1) {
      return new Var.class(s1);
    };
    this.Var.class = class Var extends lambda.Term {
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return "Var(" + runtime.render(this.s) + ")"; }
    };
    this.Con = function Con(i1) {
      return new Con.class(i1);
    };
    this.Con.class = class Con extends lambda.Term {
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return "Con(" + runtime.render(this.i) + ")"; }
    };
    this.Add = function Add(a1, b1) {
      return new Add.class(a1, b1);
    };
    this.Add.class = class Add extends lambda.Term {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "Add(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.Lam = function Lam(s1, t1) {
      return new Lam.class(s1, t1);
    };
    this.Lam.class = class Lam extends lambda.Term {
      constructor(s, t) {
        super();
        this.s = s;
        this.t = t;
      }
      toString() { return "Lam(" + runtime.render(this.s) + ", " + runtime.render(this.t) + ")"; }
    };
    this.App = function App(a1, b1) {
      return new App.class(a1, b1);
    };
    this.App.class = class App extends lambda.Term {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "App(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.IfZero = function IfZero(a1, b1, c1) {
      return new IfZero.class(a1, b1, c1);
    };
    this.IfZero.class = class IfZero extends lambda.Term {
      constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return "IfZero(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ", " + runtime.render(this.c) + ")"; }
    };
    this.Thunk = function Thunk(t1, e1) {
      return new Thunk.class(t1, e1);
    };
    this.Thunk.class = class Thunk extends lambda.Term {
      constructor(t, e) {
        super();
        this.t = t;
        this.e = e;
      }
      toString() { return "Thunk(" + runtime.render(this.t) + ", " + runtime.render(this.e) + ")"; }
    };
    const Unit$class = class Unit {
      constructor() {}
      toString() { return "Unit"; }
    };
    this.Unit = new Unit$class;
    this.Unit.class = Unit$class;
    tmp1 = lambda.myReturn(lambda.Unit);
    this.incr = tmp1;
    tmp2 = NofibPrelude.nofibStringToList("x");
    tmp3 = NofibPrelude.nofibStringToList("F");
    tmp4 = runtime.safeCall(lambda.Var(tmp3));
    tmp5 = NofibPrelude.nofibStringToList("x");
    tmp6 = runtime.safeCall(lambda.Var(tmp5));
    tmp7 = NofibPrelude.nofibStringToList("x");
    tmp8 = runtime.safeCall(lambda.Var(tmp7));
    tmp9 = lambda.App(tmp6, tmp8);
    tmp10 = lambda.App(tmp4, tmp9);
    tmp11 = lambda.Lam(tmp2, tmp10);
    this.lfxx = tmp11;
    tmp12 = NofibPrelude.nofibStringToList("F");
    tmp13 = lambda.App(lambda.lfxx, lambda.lfxx);
    tmp14 = lambda.Lam(tmp12, tmp13);
    this.fix = tmp14;
    tmp15 = NofibPrelude.nofibStringToList("n");
    tmp16 = runtime.safeCall(lambda.Var(tmp15));
    tmp17 = - 1;
    tmp18 = runtime.safeCall(lambda.Con(tmp17));
    tmp19 = lambda.Add(tmp16, tmp18);
    this.nMinus1 = tmp19;
    tmp20 = NofibPrelude.nofibStringToList("sum");
    tmp21 = NofibPrelude.nofibStringToList("n");
    tmp22 = NofibPrelude.nofibStringToList("n");
    tmp23 = runtime.safeCall(lambda.Var(tmp22));
    tmp24 = runtime.safeCall(lambda.Con(0));
    tmp25 = NofibPrelude.nofibStringToList("n");
    tmp26 = runtime.safeCall(lambda.Var(tmp25));
    tmp27 = NofibPrelude.nofibStringToList("sum");
    tmp28 = runtime.safeCall(lambda.Var(tmp27));
    tmp29 = lambda.App(tmp28, lambda.nMinus1);
    tmp30 = lambda.Add(tmp26, tmp29);
    tmp31 = runtime.safeCall(lambda.IfZero(tmp23, tmp24, tmp30));
    tmp32 = lambda.Lam(tmp21, tmp31);
    tmp33 = lambda.Lam(tmp20, tmp32);
    this.partialSum0 = tmp33;
    tmp34 = lambda.App(lambda.fix, lambda.partialSum0);
    this.sum0 = tmp34;
  }
  static lookup(k, t) {
    let param0, param1, first1, first0, x, v, t1, scrut;
    if (t instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x = first0;
        v = first1;
        t1 = param1;
        scrut = NofibPrelude.listEq(k, x);
        if (scrut === true) {
          return runtime.safeCall(NofibPrelude.Some(v))
        } else {
          return lambda.lookup(k, t1)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myRunState(m, s) {
    let param0, f;
    if (m instanceof lambda.MyState.class) {
      param0 = m.r;
      f = param0;
      return runtime.safeCall(f(s))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myBind(m1, f) {
    let tmp;
    tmp = runtime.safeCall(lambda2(m1, f));
    return runtime.safeCall(lambda.MyState(tmp))
  } 
  static myReturn(a) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda3(a));
    return runtime.safeCall(lambda.MyState(lambda$this))
  } 
  static myEvalState(m2, s1) {
    let scrut, first1, first0, s_, a1;
    scrut = lambda.myRunState(m2, s1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a1 = first1;
      return a1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static eqEnv(a1, b) {
    let param0, param1, first1, first0, s11, t1, b1, param01, param11, first11, first01, s2, t2, d, scrut, scrut1;
    if (a1 instanceof NofibPrelude.Nil.class) {
      if (b instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else if (a1 instanceof NofibPrelude.Cons.class) {
      param0 = a1.head;
      param1 = a1.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        s11 = first0;
        t1 = first1;
        b1 = param1;
        if (b1 instanceof NofibPrelude.Cons.class) {
          param01 = b1.head;
          param11 = b1.tail;
          if (globalThis.Array.isArray(param01) && param01.length === 2) {
            first01 = param01[0];
            first11 = param01[1];
            s2 = first01;
            t2 = first11;
            d = param11;
            scrut = NofibPrelude.listEq(s11, s2);
            if (scrut === true) {
              scrut1 = lambda.eqTerm(t1, t2);
              if (scrut1 === true) {
                return lambda.eqEnv(b1, d)
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
  static eqTerm(a2, b1) {
    let param0, param1, a3, b2, param01, param11, c, d, param2, a4, b3, c1, param02, param12, param21, d1, e, f1, a5, b4, param03, param13, c2, d2, a6, b5, param04, param14, c3, d3, a7, b6, param05, param15, c4, d4, a8, param06, b7, a9, b8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (a2 instanceof lambda.Var.class) {
      param0 = a2.s;
      a9 = param0;
      if (b1 instanceof lambda.Var.class) {
        param06 = b1.s;
        b8 = param06;
        return NofibPrelude.listEq(a9, b8)
      } else {
        return false
      }
    } else if (a2 instanceof lambda.Con.class) {
      param0 = a2.i;
      a8 = param0;
      if (b1 instanceof lambda.Con.class) {
        param06 = b1.i;
        b7 = param06;
        return a8 === b7
      } else {
        return false
      }
    } else if (a2 instanceof lambda.Incr.class) {
      if (b1 instanceof lambda.Incr.class) {
        return true
      } else {
        return false
      }
    } else if (a2 instanceof lambda.Add.class) {
      param0 = a2.a;
      param1 = a2.b;
      a7 = param0;
      b6 = param1;
      if (b6 instanceof lambda.Add.class) {
        param05 = b6.a;
        param15 = b6.b;
        c4 = param05;
        d4 = param15;
        tmp = lambda.eqTerm(a7, c4);
        tmp1 = lambda.eqTerm(b6, d4);
        return tmp && tmp1
      } else {
        return false
      }
    } else if (a2 instanceof lambda.Lam.class) {
      param0 = a2.s;
      param1 = a2.t;
      a6 = param0;
      b5 = param1;
      if (b5 instanceof lambda.Lam.class) {
        param04 = b5.s;
        param14 = b5.t;
        c3 = param04;
        d3 = param14;
        tmp2 = NofibPrelude.listEq(a6, c3);
        tmp3 = lambda.eqTerm(b5, d3);
        return tmp2 && tmp3
      } else {
        return false
      }
    } else if (a2 instanceof lambda.App.class) {
      param0 = a2.a;
      param1 = a2.b;
      a5 = param0;
      b4 = param1;
      if (b4 instanceof lambda.App.class) {
        param03 = b4.a;
        param13 = b4.b;
        c2 = param03;
        d2 = param13;
        tmp4 = lambda.eqTerm(a5, c2);
        tmp5 = lambda.eqTerm(b4, d2);
        return tmp4 && tmp5
      } else {
        return false
      }
    } else if (a2 instanceof lambda.IfZero.class) {
      param0 = a2.a;
      param1 = a2.b;
      param2 = a2.c;
      a4 = param0;
      b3 = param1;
      c1 = param2;
      if (b3 instanceof lambda.IfZero.class) {
        param02 = b3.a;
        param12 = b3.b;
        param21 = b3.c;
        d1 = param02;
        e = param12;
        f1 = param21;
        tmp6 = lambda.eqTerm(a4, d1);
        tmp7 = lambda.eqTerm(b3, e);
        tmp8 = tmp6 && tmp7;
        tmp9 = lambda.eqTerm(c1, f1);
        return tmp8 && tmp9
      } else {
        return false
      }
    } else if (a2 instanceof lambda.Thunk.class) {
      param0 = a2.t;
      param1 = a2.e;
      a3 = param0;
      b2 = param1;
      if (b2 instanceof lambda.Thunk.class) {
        param01 = b2.t;
        param11 = b2.e;
        c = param01;
        d = param11;
        tmp10 = lambda.eqTerm(a3, c);
        tmp11 = lambda.eqEnv(b2, d);
        return tmp10 && tmp11
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static myMaybe(d, f1, x) {
    let param0, x1;
    if (x instanceof NofibPrelude.Some.class) {
      param0 = x.x;
      x1 = param0;
      return runtime.safeCall(f1(x1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lookupVar(v) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda_inst_29_5_tsni(v));
    return lambda.myBind(lambda.myGet, lambda$this)
  } 
  static withEnv(tmp, m3) {
    let tmp1;
    tmp1 = lambda.myEvalState(m3, tmp);
    return lambda.myReturn(tmp1)
  } 
  static pushVar(v1, t1, m4) {
    let tmp1;
    tmp1 = runtime.safeCall(lambda7(v1, t1, m4));
    return lambda.myBind(lambda.myGet, tmp1)
  } 
  static traverseTerm(t2) {
    return eval_inst_30_tsni(t2)
  } 
  static traverseCon(t3) {
    let tmp1, tmp2;
    tmp1 = traverseTerm_inst_31_tsni(t3);
    tmp2 = lambda_inst_31_10_tsni;
    return myBind_inst_31_60_tsni(tmp1, tmp2)
  } 
  static apply(t4, a3) {
    let param0, param1, param01, param11, x1, b2, e, tmp1;
    if (t4 instanceof lambda.Thunk.class) {
      param0 = t4.t;
      param1 = t4.e;
      if (param0 instanceof lambda.Lam.class) {
        param01 = param0.s;
        param11 = param0.t;
        x1 = param01;
        b2 = param11;
        e = param1;
        tmp1 = runtime.safeCall(lambda_inst_32_tsni2(a3, x1, b2, e));
        return lambda.myBind(lambda.myGet, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static eval(ter) {
    let param0, i, param1, param2, c, a4, b2, u, v2, x1, b3, t5, e, u1, v3, x2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, lambda$this1, lambda$this2;
    if (ter instanceof lambda.Var.class) {
      param0 = ter.s;
      x2 = param0;
      lambda$this = runtime.safeCall(lambda_inst_33_tsni3(x2));
      return lambda.myBind(lambda.myGet, lambda$this)
    } else if (ter instanceof lambda.Add.class) {
      param0 = ter.a;
      param1 = ter.b;
      u1 = param0;
      v3 = param1;
      tmp1 = traverseCon_inst_33_tsni(u1);
      lambda$this1 = runtime.safeCall(lambda12(v3));
      return lambda.myBind(tmp1, lambda$this1)
    } else if (ter instanceof lambda.Thunk.class) {
      param0 = ter.t;
      param1 = ter.e;
      t5 = param0;
      e = param1;
      tmp2 = traverseTerm_inst_33_tsni(t5);
      return lambda.withEnv(e, tmp2)
    } else if (ter instanceof lambda.Lam.class) {
      param0 = ter.s;
      param1 = ter.t;
      x1 = param0;
      b3 = param1;
      tmp3 = runtime.safeCall(lambda14(x1, b3));
      return lambda.myBind(lambda.myGet, tmp3)
    } else if (ter instanceof lambda.App.class) {
      param0 = ter.a;
      param1 = ter.b;
      u = param0;
      v2 = param1;
      tmp4 = traverseTerm_inst_33_tsni(u);
      lambda$this2 = runtime.safeCall(lambda_inst_33_tsni1(v2));
      return lambda.myBind(tmp4, lambda$this2)
    } else if (ter instanceof lambda.IfZero.class) {
      param0 = ter.a;
      param1 = ter.b;
      param2 = ter.c;
      c = param0;
      a4 = param1;
      b2 = param2;
      tmp5 = traverseTerm_inst_33_tsni(c);
      tmp6 = runtime.safeCall(lambda_inst_33_tsni(a4, b2));
      return lambda.myBind(tmp5, tmp6)
    } else if (ter instanceof lambda.Con.class) {
      param0 = ter.i;
      i = param0;
      tmp7 = runtime.safeCall(lambda.Con(i));
      return lambda.myReturn(tmp7)
    } else if (ter instanceof lambda.Incr.class) {
      return myBind_inst_33_65_tsni(lambda.incr, lambda_inst_33_14_tsni)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static simpleEval(env, ter1) {
    let param0, param1, t5, e, param2, c, a4, b2, val_, scrut, u, v2, u_, x1, b3, u1, v3, u_1, v_, e1, v4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (ter1 instanceof lambda.Var.class) {
      param0 = ter1.s;
      v4 = param0;
      tmp1 = lookup_inst_34_35_tsni(v4, env);
      tmp2 = myMaybe_inst_34_66_tsni(lambda18, lambda19, tmp1);
      return lambda.simpleEval(env, tmp2)
    } else if (ter1 instanceof lambda.Con.class) {
      param0 = ter1.i;
      e1 = param0;
      return runtime.safeCall(lambda.Con(e1))
    } else if (ter1 instanceof lambda.Incr.class) {
      return runtime.safeCall(lambda.Con(0))
    } else if (ter1 instanceof lambda.Add.class) {
      param0 = ter1.a;
      param1 = ter1.b;
      u1 = param0;
      v3 = param1;
      tmp3 = simpleEvalCon_inst_34_tsni(env, u1);
      u_1 = tmp3;
      tmp4 = simpleEvalCon_inst_34_tsni(env, v3);
      v_ = tmp4;
      tmp5 = u_1 + v_;
      return runtime.safeCall(lambda.Con(tmp5))
    } else if (ter1 instanceof lambda.Lam.class) {
      param0 = ter1.s;
      param1 = ter1.t;
      x1 = param0;
      b3 = param1;
      tmp6 = lambda.Lam(x1, b3);
      return lambda.Thunk(tmp6, env)
    } else if (ter1 instanceof lambda.App.class) {
      param0 = ter1.a;
      param1 = ter1.b;
      u = param0;
      v2 = param1;
      tmp7 = lambda.simpleEval(env, u);
      u_ = tmp7;
      return simpleApply_inst_34_tsni(env, u_, v2)
    } else if (ter1 instanceof lambda.IfZero.class) {
      param0 = ter1.a;
      param1 = ter1.b;
      param2 = ter1.c;
      c = param0;
      a4 = param1;
      b2 = param2;
      tmp8 = lambda.simpleEval(env, c);
      val_ = tmp8;
      tmp9 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(val_, tmp9);
      if (scrut === true) {
        return lambda.simpleEval(env, a4)
      } else {
        return lambda.simpleEval(env, b2)
      }
    } else if (ter1 instanceof lambda.Thunk.class) {
      param0 = ter1.t;
      param1 = ter1.e;
      t5 = param0;
      e = param1;
      return lambda.simpleEval(e, t5)
    } else {
      throw globalThis.Error(ter1);
    }
  } 
  static simpleApply(env1, t5, a4) {
    let param0, param1, param01, param11, x1, b2, e, tmp1, arr, tmp2;
    if (t5 instanceof lambda.Thunk.class) {
      param0 = t5.t;
      param1 = t5.e;
      if (param0 instanceof lambda.Lam.class) {
        param01 = param0.s;
        param11 = param0.t;
        x1 = param01;
        b2 = param11;
        e = param1;
        tmp1 = lambda.Thunk(a4, env1);
        arr = [
          x1,
          tmp1
        ];
        tmp2 = NofibPrelude.Cons(arr, e);
        return simpleEval_inst_36_tsni(tmp2, b2)
      } else {
        throw globalThis.Error("bad application");
      }
    } else {
      throw globalThis.Error("bad application");
    }
  } 
  static simpleEvalCon(env2, e) {
    let e_, param0, c, tmp1;
    tmp1 = simpleEval_inst_37_tsni(env2, e);
    e_ = tmp1;
    if (e_ instanceof lambda.Con.class) {
      param0 = e_.i;
      c = param0;
      return c
    } else {
      throw globalThis.Error("Not a Con");
    }
  } 
  static bracket(ot, ths, t6) {
    let scrut, tmp1, tmp2;
    scrut = ths <= ot;
    if (scrut === true) {
      tmp1 = NofibPrelude.nofibStringToList(")");
      tmp2 = NofibPrelude.append(t6, tmp1);
      return NofibPrelude.Cons("(", tmp2)
    } else {
      return t6
    }
  } 
  static ppn(n, ter2) {
    let param0, param1, t7, e1, param2, c, a5, b2, a6, b3, a7, b4, v2, t8, i, v3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33;
    if (ter2 instanceof lambda.Var.class) {
      param0 = ter2.s;
      v3 = param0;
      return v3
    } else if (ter2 instanceof lambda.Con.class) {
      param0 = ter2.i;
      i = param0;
      tmp1 = NofibPrelude.stringOfInt(i);
      return NofibPrelude.nofibStringToList(tmp1)
    } else if (ter2 instanceof lambda.Incr.class) {
      return NofibPrelude.nofibStringToList("INCR")
    } else if (ter2 instanceof lambda.Lam.class) {
      param0 = ter2.s;
      param1 = ter2.t;
      v2 = param0;
      t8 = param1;
      tmp2 = NofibPrelude.nofibStringToList(". ");
      tmp3 = 0 - 1;
      tmp4 = lambda.ppn(tmp3, t8);
      tmp5 = NofibPrelude.append(tmp2, tmp4);
      tmp6 = NofibPrelude.append(v2, tmp5);
      tmp7 = NofibPrelude.Cons("@", tmp6);
      return lambda.bracket(n, 0, tmp7)
    } else if (ter2 instanceof lambda.Add.class) {
      param0 = ter2.a;
      param1 = ter2.b;
      a7 = param0;
      b4 = param1;
      tmp8 = lambda.ppn(1, a7);
      tmp9 = NofibPrelude.nofibStringToList(" + ");
      tmp10 = lambda.ppn(1, b4);
      tmp11 = NofibPrelude.append(tmp9, tmp10);
      tmp12 = NofibPrelude.append(tmp8, tmp11);
      return lambda.bracket(n, 1, tmp12)
    } else if (ter2 instanceof lambda.App.class) {
      param0 = ter2.a;
      param1 = ter2.b;
      a6 = param0;
      b3 = param1;
      tmp13 = lambda.ppn(2, a6);
      tmp14 = NofibPrelude.nofibStringToList(" ");
      tmp15 = lambda.ppn(2, b3);
      tmp16 = NofibPrelude.append(tmp14, tmp15);
      tmp17 = NofibPrelude.append(tmp13, tmp16);
      return lambda.bracket(n, 2, tmp17)
    } else if (ter2 instanceof lambda.IfZero.class) {
      param0 = ter2.a;
      param1 = ter2.b;
      param2 = ter2.c;
      c = param0;
      a5 = param1;
      b2 = param2;
      tmp18 = NofibPrelude.nofibStringToList("IF ");
      tmp19 = lambda.ppn(0, c);
      tmp20 = NofibPrelude.nofibStringToList(" THEN ");
      tmp21 = lambda.ppn(0, a5);
      tmp22 = NofibPrelude.nofibStringToList(" ELSE ");
      tmp23 = lambda.ppn(0, b2);
      tmp24 = NofibPrelude.append(tmp22, tmp23);
      tmp25 = NofibPrelude.append(tmp21, tmp24);
      tmp26 = NofibPrelude.append(tmp20, tmp25);
      tmp27 = NofibPrelude.append(tmp19, tmp26);
      tmp28 = NofibPrelude.append(tmp18, tmp27);
      return lambda.bracket(n, 0, tmp28)
    } else if (ter2 instanceof lambda.Thunk.class) {
      param0 = ter2.t;
      param1 = ter2.e;
      t7 = param0;
      e1 = param1;
      tmp29 = lambda.ppn(3, t7);
      tmp30 = NofibPrelude.nofibStringToList("::");
      tmp31 = ppenv_inst_38_tsni(e1);
      tmp32 = NofibPrelude.append(tmp30, tmp31);
      tmp33 = NofibPrelude.append(tmp29, tmp32);
      return lambda.bracket(n, 0, tmp33)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pp(t7) {
    return ppn_inst_39_tsni(0, t7)
  } 
  static ppenv(env3) {
    let tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp1 = NofibPrelude.nofibStringToList("[");
    tmp2 = lambda_inst_40_tsni;
    tmp3 = flatMap_inst_40_1_tsni(tmp2, env3);
    tmp4 = NofibPrelude.nofibStringToList("]");
    tmp5 = append_inst_40_54_tsni(tmp3, tmp4);
    return NofibPrelude.append(tmp1, tmp5)
  } 
  static showTerm(t8) {
    let param0, a5, tmp1, tmp2, tmp3;
    if (t8 instanceof lambda.Con.class) {
      param0 = t8.i;
      a5 = param0;
      tmp1 = NofibPrelude.nofibStringToList("Con ");
      tmp2 = NofibPrelude.stringOfInt(a5);
      tmp3 = NofibPrelude.nofibStringToList(tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static ev(t9) {
    let envt2, first1, first0, env4, t21, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp1 = traverseTerm_inst_41_42_tsni(t9);
    tmp2 = lambda.myRunState(tmp1, NofibPrelude.Nil);
    envt2 = tmp2;
    if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
      first0 = envt2[0];
      first1 = envt2[1];
      env4 = first0;
      t21 = first1;
      tmp3 = pp_inst_41_43_tsni(t21);
      tmp4 = NofibPrelude.nofibStringToList("  ");
      tmp5 = ppenv_inst_41_44_tsni(env4);
      tmp6 = NofibPrelude.append(tmp4, tmp5);
      return NofibPrelude.append(tmp3, tmp6)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mainSimple(args) {
    let scrut, tmp1, tmp2, tmp3, tmp4;
    scrut = NofibPrelude.null_(args);
    if (scrut === true) {
      throw globalThis.Error("Args: number-to-sum-up-to");
    } else {
      tmp1 = NofibPrelude.head(args);
      tmp2 = runtime.safeCall(lambda.Con(tmp1));
      tmp3 = lambda.App(lambda.sum0, tmp2);
      tmp4 = simpleEval_inst_45_46_tsni(NofibPrelude.Nil, tmp3);
      return lambda.showTerm(tmp4)
    }
  } 
  static mainMonad(args1) {
    let scrut, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.null_(args1);
    if (scrut === true) {
      throw globalThis.Error("Args: number-to-sum-up-to");
    } else {
      tmp1 = NofibPrelude.head(args1);
      tmp2 = runtime.safeCall(lambda.Con(tmp1));
      tmp3 = lambda.App(lambda.sum0, tmp2);
      return ev_inst_47_48_tsni(tmp3)
    }
  } 
  static testLambda_nofib(n1) {
    let tmp1, tmp2, tmp3, tmp4, arr;
    tmp1 = NofibPrelude.Cons(n1, NofibPrelude.Nil);
    tmp2 = mainSimple_inst_49_50_tsni(tmp1);
    tmp3 = NofibPrelude.Cons(n1, NofibPrelude.Nil);
    tmp4 = mainMonad_inst_49_51_tsni(tmp3);
    arr = [
      tmp2,
      tmp4
    ];
    return arr
  } 
  static main() {
    let tmp1;
    tmp1 = testLambda_nofib_inst_52_53_tsni(80);
    return runtime.safeCall(tmp1.toString())
  }
  static toString() { return "lambda"; }
});
let lambda = lambda1; export default lambda;
