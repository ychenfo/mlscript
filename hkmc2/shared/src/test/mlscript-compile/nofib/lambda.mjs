import runtime from "./../Runtime.mjs";
import Term1 from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lambda1, traverseTerm_inst_0_tsni, eval_inst_0_tsni, apply_inst_0_tsni, traverseCon_inst_0_tsni, lookupVar_inst_0_1_tsni, myReturn_inst_0_1_2_tsni, lookup_inst_0_1_3_tsni, myBind_inst_0_1_4_tsni, myBind_inst_0_5_tsni, myReturn_inst_0_6_tsni, myBind_inst_0_7_tsni, myReturn_inst_0_8_tsni, pushVar_inst_0_9_tsni, withEnv_inst_0_9_10_tsni, myReturn_inst_0_9_10_11_tsni, myBind_inst_0_9_12_tsni, withEnv_inst_0_13_tsni, myReturn_inst_0_13_11_tsni, myBind_inst_0_14_tsni, myReturn_inst_0_15_tsni, traverseTerm_inst_16_tsni, eval_inst_16_tsni, apply_inst_16_tsni, traverseCon_inst_16_tsni, lookupVar_inst_16_1_tsni, myReturn_inst_16_1_2_tsni, lookup_inst_16_1_3_tsni, myBind_inst_16_1_4_tsni, myBind_inst_16_5_tsni, myReturn_inst_16_6_tsni, myBind_inst_16_7_tsni, myReturn_inst_16_8_tsni, pushVar_inst_16_9_tsni, withEnv_inst_16_9_10_tsni, myReturn_inst_16_9_10_11_tsni, myBind_inst_16_9_12_tsni, withEnv_inst_16_13_tsni, myReturn_inst_16_13_11_tsni, myBind_inst_16_14_tsni, myReturn_inst_16_15_tsni, traverseTerm_inst_17_tsni, eval_inst_17_tsni, apply_inst_17_tsni, traverseCon_inst_17_tsni, lookupVar_inst_17_1_tsni, myReturn_inst_17_1_2_tsni, lookup_inst_17_1_3_tsni, myBind_inst_17_1_4_tsni, myBind_inst_17_5_tsni, myReturn_inst_17_6_tsni, myBind_inst_17_7_tsni, myReturn_inst_17_8_tsni, pushVar_inst_17_9_tsni, withEnv_inst_17_9_10_tsni, myReturn_inst_17_9_10_11_tsni, myBind_inst_17_9_12_tsni, withEnv_inst_17_13_tsni, myReturn_inst_17_13_11_tsni, myBind_inst_17_14_tsni, myReturn_inst_17_15_tsni, traverseTerm_inst_18_tsni, eval_inst_18_tsni, apply_inst_18_tsni, traverseCon_inst_18_tsni, lookupVar_inst_18_1_tsni, myReturn_inst_18_1_2_tsni, lookup_inst_18_1_3_tsni, myBind_inst_18_1_4_tsni, myBind_inst_18_5_tsni, myReturn_inst_18_6_tsni, myBind_inst_18_7_tsni, myReturn_inst_18_8_tsni, pushVar_inst_18_9_tsni, withEnv_inst_18_9_10_tsni, myReturn_inst_18_9_10_11_tsni, myBind_inst_18_9_12_tsni, withEnv_inst_18_13_tsni, myReturn_inst_18_13_11_tsni, myBind_inst_18_14_tsni, myReturn_inst_18_15_tsni, traverseTerm_inst_19_tsni, eval_inst_19_tsni, apply_inst_19_tsni, traverseCon_inst_19_tsni, lookupVar_inst_19_1_tsni, myReturn_inst_19_1_2_tsni, lookup_inst_19_1_3_tsni, myBind_inst_19_1_4_tsni, myBind_inst_19_5_tsni, myReturn_inst_19_6_tsni, myBind_inst_19_7_tsni, myReturn_inst_19_8_tsni, pushVar_inst_19_9_tsni, withEnv_inst_19_9_10_tsni, myReturn_inst_19_9_10_11_tsni, myBind_inst_19_9_12_tsni, withEnv_inst_19_13_tsni, myReturn_inst_19_13_11_tsni, myBind_inst_19_14_tsni, myReturn_inst_19_15_tsni, traverseTerm_inst_20_tsni, eval_inst_20_tsni, apply_inst_20_tsni, traverseCon_inst_20_tsni, lookupVar_inst_20_1_tsni, myReturn_inst_20_1_2_tsni, lookup_inst_20_1_3_tsni, myBind_inst_20_1_4_tsni, myBind_inst_20_5_tsni, myReturn_inst_20_6_tsni, myBind_inst_20_7_tsni, myReturn_inst_20_8_tsni, pushVar_inst_20_9_tsni, withEnv_inst_20_9_10_tsni, myReturn_inst_20_9_10_11_tsni, myBind_inst_20_9_12_tsni, withEnv_inst_20_13_tsni, myReturn_inst_20_13_11_tsni, myBind_inst_20_14_tsni, myReturn_inst_20_15_tsni, simpleEval_inst_21_tsni, simpleApply_inst_21_tsni, simpleEvalCon_inst_21_tsni, lookup_inst_21_22_tsni, simpleEval_inst_23_tsni, simpleApply_inst_23_tsni, simpleEvalCon_inst_23_tsni, lookup_inst_23_22_tsni, simpleEval_inst_24_tsni, simpleApply_inst_24_tsni, simpleEvalCon_inst_24_tsni, lookup_inst_24_22_tsni, simpleEval_inst_25_tsni, simpleApply_inst_25_tsni, simpleEvalCon_inst_25_tsni, lookup_inst_25_22_tsni, simpleEval_inst_26_tsni, simpleApply_inst_26_tsni, simpleEvalCon_inst_26_tsni, lookup_inst_26_22_tsni, simpleEval_inst_27_tsni, simpleApply_inst_27_tsni, simpleEvalCon_inst_27_tsni, lookup_inst_27_22_tsni, simpleEval_inst_28_tsni, simpleApply_inst_28_tsni, simpleEvalCon_inst_28_tsni, lookup_inst_28_22_tsni, simpleEval_inst_29_tsni, simpleApply_inst_29_tsni, simpleEvalCon_inst_29_tsni, lookup_inst_29_22_tsni, simpleEval_inst_30_tsni, simpleApply_inst_30_tsni, simpleEvalCon_inst_30_tsni, lookup_inst_30_22_tsni, lookup_inst_22_tsni, simpleEval_inst_31_tsni, simpleApply_inst_31_tsni, simpleEvalCon_inst_31_tsni, lookup_inst_31_22_tsni, simpleEval_inst_32_tsni, simpleApply_inst_32_tsni, simpleEvalCon_inst_32_tsni, lookup_inst_32_22_tsni, pp_inst_33_tsni, ppn_inst_33_tsni, ppenv_inst_33_tsni, flatMap_inst_33_34_tsni, append_inst_33_34_35_tsni, pp_inst_36_tsni, ppn_inst_36_tsni, ppenv_inst_36_tsni, flatMap_inst_36_34_tsni, append_inst_36_34_35_tsni, pp_inst_37_tsni, ppn_inst_37_tsni, ppenv_inst_37_tsni, flatMap_inst_37_34_tsni, append_inst_37_34_35_tsni, pp_inst_38_tsni, ppn_inst_38_tsni, ppenv_inst_38_tsni, flatMap_inst_38_34_tsni, append_inst_38_34_35_tsni, pp_inst_39_tsni, ppn_inst_39_tsni, ppenv_inst_39_tsni, flatMap_inst_39_34_tsni, append_inst_39_34_35_tsni, pp_inst_40_tsni, ppn_inst_40_tsni, ppenv_inst_40_tsni, flatMap_inst_40_34_tsni, append_inst_40_34_35_tsni, pp_inst_41_tsni, ppn_inst_41_tsni, ppenv_inst_41_tsni, flatMap_inst_41_34_tsni, append_inst_41_34_35_tsni, pp_inst_42_tsni, ppn_inst_42_tsni, ppenv_inst_42_tsni, flatMap_inst_42_34_tsni, append_inst_42_34_35_tsni, pp_inst_43_tsni, ppn_inst_43_tsni, ppenv_inst_43_tsni, flatMap_inst_43_34_tsni, append_inst_43_34_35_tsni, pp_inst_44_tsni, ppn_inst_44_tsni, ppenv_inst_44_tsni, flatMap_inst_44_34_tsni, append_inst_44_34_35_tsni, pp_inst_45_tsni, ppn_inst_45_tsni, ppenv_inst_45_tsni, flatMap_inst_45_34_tsni, append_inst_45_34_35_tsni, flatMap_inst_34_tsni, append_inst_34_35_tsni, pp_inst_46_tsni, ppn_inst_46_tsni, ppenv_inst_46_tsni, flatMap_inst_46_34_tsni, append_inst_46_34_35_tsni, pp_inst_47_tsni, ppn_inst_47_tsni, ppenv_inst_47_tsni, flatMap_inst_47_34_tsni, append_inst_47_34_35_tsni, traverseTerm_inst_48_tsni, eval_inst_48_tsni, apply_inst_48_tsni, traverseCon_inst_48_tsni, lookupVar_inst_48_1_tsni, myReturn_inst_48_1_2_tsni, lookup_inst_48_1_3_tsni, myBind_inst_48_1_4_tsni, myBind_inst_48_5_tsni, myReturn_inst_48_6_tsni, myBind_inst_48_7_tsni, myReturn_inst_48_8_tsni, pushVar_inst_48_9_tsni, withEnv_inst_48_9_10_tsni, myReturn_inst_48_9_10_11_tsni, myBind_inst_48_9_12_tsni, withEnv_inst_48_13_tsni, myReturn_inst_48_13_11_tsni, myBind_inst_48_14_tsni, myReturn_inst_48_15_tsni, simpleEval_inst_49_tsni, simpleApply_inst_49_tsni, simpleEvalCon_inst_49_tsni, lookup_inst_49_22_tsni, ev_inst_50_tsni, traverseTerm_inst_50_48_tsni, eval_inst_50_48_tsni, apply_inst_50_48_tsni, traverseCon_inst_50_48_tsni, myReturn_inst_50_48_15_tsni, myBind_inst_50_48_14_tsni, withEnv_inst_50_48_13_tsni, myReturn_inst_50_48_13_11_tsni, pushVar_inst_50_48_9_tsni, withEnv_inst_50_48_9_10_tsni, myReturn_inst_50_48_9_10_11_tsni, myBind_inst_50_48_9_12_tsni, myReturn_inst_50_48_8_tsni, myBind_inst_50_48_7_tsni, myReturn_inst_50_48_6_tsni, myBind_inst_50_48_5_tsni, lookupVar_inst_50_48_1_tsni, lookup_inst_50_48_1_3_tsni, myReturn_inst_50_48_1_2_tsni, myBind_inst_50_48_1_4_tsni, pp_inst_50_47_tsni, ppn_inst_50_47_tsni, ppenv_inst_50_47_tsni, flatMap_inst_50_47_34_tsni, append_inst_50_47_34_35_tsni, pp_inst_50_46_tsni, ppn_inst_50_46_tsni, ppenv_inst_50_46_tsni, flatMap_inst_50_46_34_tsni, append_inst_50_46_34_35_tsni, mainMonad_inst_51_tsni, ev_inst_51_50_tsni, pp_inst_51_50_46_tsni, ppn_inst_51_50_46_tsni, ppenv_inst_51_50_46_tsni, flatMap_inst_51_50_46_34_tsni, append_inst_51_50_46_34_35_tsni, pp_inst_51_50_47_tsni, ppn_inst_51_50_47_tsni, ppenv_inst_51_50_47_tsni, flatMap_inst_51_50_47_34_tsni, append_inst_51_50_47_34_35_tsni, traverseTerm_inst_51_50_48_tsni, eval_inst_51_50_48_tsni, apply_inst_51_50_48_tsni, traverseCon_inst_51_50_48_tsni, lookupVar_inst_51_50_48_1_tsni, myReturn_inst_51_50_48_1_2_tsni, lookup_inst_51_50_48_1_3_tsni, myBind_inst_51_50_48_1_4_tsni, myBind_inst_51_50_48_5_tsni, myReturn_inst_51_50_48_6_tsni, myBind_inst_51_50_48_7_tsni, myReturn_inst_51_50_48_8_tsni, pushVar_inst_51_50_48_9_tsni, withEnv_inst_51_50_48_9_10_tsni, myReturn_inst_51_50_48_9_10_11_tsni, myBind_inst_51_50_48_9_12_tsni, withEnv_inst_51_50_48_13_tsni, myReturn_inst_51_50_48_13_11_tsni, myBind_inst_51_50_48_14_tsni, myReturn_inst_51_50_48_15_tsni, mainSimple_inst_52_tsni, simpleEval_inst_52_49_tsni, simpleApply_inst_52_49_tsni, simpleEvalCon_inst_52_49_tsni, lookup_inst_52_49_22_tsni, testLambda_nofib_inst_53_tsni, mainSimple_inst_53_52_tsni, simpleEval_inst_53_52_49_tsni, simpleApply_inst_53_52_49_tsni, simpleEvalCon_inst_53_52_49_tsni, lookup_inst_53_52_49_22_tsni, mainMonad_inst_53_51_tsni, ev_inst_53_51_50_tsni, traverseTerm_inst_53_51_50_48_tsni, eval_inst_53_51_50_48_tsni, apply_inst_53_51_50_48_tsni, traverseCon_inst_53_51_50_48_tsni, myReturn_inst_53_51_50_48_15_tsni, myBind_inst_53_51_50_48_14_tsni, withEnv_inst_53_51_50_48_13_tsni, myReturn_inst_53_51_50_48_13_11_tsni, pushVar_inst_53_51_50_48_9_tsni, withEnv_inst_53_51_50_48_9_10_tsni, myReturn_inst_53_51_50_48_9_10_11_tsni, myBind_inst_53_51_50_48_9_12_tsni, myReturn_inst_53_51_50_48_8_tsni, myBind_inst_53_51_50_48_7_tsni, myReturn_inst_53_51_50_48_6_tsni, myBind_inst_53_51_50_48_5_tsni, lookupVar_inst_53_51_50_48_1_tsni, lookup_inst_53_51_50_48_1_3_tsni, myReturn_inst_53_51_50_48_1_2_tsni, myBind_inst_53_51_50_48_1_4_tsni, pp_inst_53_51_50_47_tsni, ppn_inst_53_51_50_47_tsni, ppenv_inst_53_51_50_47_tsni, flatMap_inst_53_51_50_47_34_tsni, append_inst_53_51_50_47_34_35_tsni, pp_inst_53_51_50_46_tsni, ppn_inst_53_51_50_46_tsni, ppenv_inst_53_51_50_46_tsni, flatMap_inst_53_51_50_46_34_tsni, append_inst_53_51_50_46_34_35_tsni, myRunState_inst_0_1_4_54_tsni, myMaybe_inst_0_1_55_tsni, myRunState_inst_0_5_56_tsni, myBind_inst_0_57_tsni, myRunState_inst_0_57_54_tsni, myRunState_inst_0_7_54_tsni, myBind_inst_0_58_tsni, myRunState_inst_0_58_54_tsni, myBind_inst_0_59_tsni, myRunState_inst_0_59_54_tsni, myRunState_inst_0_9_12_54_tsni, myEvalState_inst_0_13_60_tsni, myRunState_inst_0_13_60_61_tsni, myRunState_inst_0_14_54_tsni, myBind_inst_0_62_tsni, myRunState_inst_0_62_54_tsni, myBind_inst_0_63_tsni, myRunState_inst_0_63_54_tsni, myRunState_inst_16_1_4_54_tsni, myMaybe_inst_16_1_55_tsni, myRunState_inst_16_5_56_tsni, myBind_inst_16_57_tsni, myRunState_inst_16_57_54_tsni, myRunState_inst_16_7_54_tsni, myBind_inst_16_58_tsni, myRunState_inst_16_58_54_tsni, myBind_inst_16_59_tsni, myRunState_inst_16_59_54_tsni, myRunState_inst_16_9_12_54_tsni, myEvalState_inst_16_13_60_tsni, myRunState_inst_16_13_60_61_tsni, myRunState_inst_16_14_54_tsni, myBind_inst_16_62_tsni, myRunState_inst_16_62_54_tsni, myBind_inst_16_63_tsni, myRunState_inst_16_63_54_tsni, myRunState_inst_17_1_4_54_tsni, myMaybe_inst_17_1_55_tsni, myRunState_inst_17_5_56_tsni, myBind_inst_17_57_tsni, myRunState_inst_17_57_54_tsni, myRunState_inst_17_7_54_tsni, myBind_inst_17_58_tsni, myRunState_inst_17_58_54_tsni, myBind_inst_17_59_tsni, myRunState_inst_17_59_54_tsni, myRunState_inst_17_9_12_54_tsni, myEvalState_inst_17_13_60_tsni, myRunState_inst_17_13_60_61_tsni, myRunState_inst_17_14_54_tsni, myBind_inst_17_62_tsni, myRunState_inst_17_62_54_tsni, myBind_inst_17_63_tsni, myRunState_inst_17_63_54_tsni, myRunState_inst_18_1_4_54_tsni, myMaybe_inst_18_1_55_tsni, myRunState_inst_18_5_56_tsni, myBind_inst_18_57_tsni, myRunState_inst_18_57_54_tsni, myRunState_inst_18_7_54_tsni, myBind_inst_18_58_tsni, myRunState_inst_18_58_54_tsni, myBind_inst_18_59_tsni, myRunState_inst_18_59_54_tsni, myRunState_inst_18_9_12_54_tsni, myEvalState_inst_18_13_60_tsni, myRunState_inst_18_13_60_61_tsni, myRunState_inst_18_14_54_tsni, myBind_inst_18_62_tsni, myRunState_inst_18_62_54_tsni, myBind_inst_18_63_tsni, myRunState_inst_18_63_54_tsni, myRunState_inst_19_1_4_54_tsni, myMaybe_inst_19_1_55_tsni, myRunState_inst_19_5_56_tsni, myBind_inst_19_57_tsni, myRunState_inst_19_57_54_tsni, myRunState_inst_19_7_54_tsni, myBind_inst_19_58_tsni, myRunState_inst_19_58_54_tsni, myBind_inst_19_59_tsni, myRunState_inst_19_59_54_tsni, myRunState_inst_19_9_12_54_tsni, myEvalState_inst_19_13_60_tsni, myRunState_inst_19_13_60_61_tsni, myRunState_inst_19_14_54_tsni, myBind_inst_19_62_tsni, myRunState_inst_19_62_54_tsni, myBind_inst_19_63_tsni, myRunState_inst_19_63_54_tsni, myRunState_inst_20_1_4_54_tsni, myMaybe_inst_20_1_55_tsni, myRunState_inst_20_5_56_tsni, myBind_inst_20_57_tsni, myRunState_inst_20_57_54_tsni, myRunState_inst_20_7_54_tsni, myBind_inst_20_58_tsni, myRunState_inst_20_58_54_tsni, myBind_inst_20_59_tsni, myRunState_inst_20_59_54_tsni, myRunState_inst_20_9_12_54_tsni, myEvalState_inst_20_13_60_tsni, myRunState_inst_20_13_60_61_tsni, myRunState_inst_20_14_54_tsni, myBind_inst_20_62_tsni, myRunState_inst_20_62_54_tsni, myBind_inst_20_63_tsni, myRunState_inst_20_63_54_tsni, myMaybe_inst_21_64_tsni, myMaybe_inst_23_64_tsni, myMaybe_inst_24_64_tsni, myMaybe_inst_25_64_tsni, myMaybe_inst_26_64_tsni, myMaybe_inst_27_64_tsni, myMaybe_inst_28_64_tsni, myMaybe_inst_29_64_tsni, myMaybe_inst_30_64_tsni, myMaybe_inst_64_tsni, myMaybe_inst_31_64_tsni, myMaybe_inst_32_64_tsni, append_inst_33_65_tsni, append_inst_36_65_tsni, append_inst_37_65_tsni, append_inst_38_65_tsni, append_inst_39_65_tsni, append_inst_40_65_tsni, append_inst_41_65_tsni, append_inst_42_65_tsni, append_inst_43_65_tsni, append_inst_44_65_tsni, append_inst_45_65_tsni, append_inst_65_tsni, append_inst_46_65_tsni, append_inst_47_65_tsni, myRunState_inst_48_1_4_54_tsni, myMaybe_inst_48_1_55_tsni, myRunState_inst_48_5_56_tsni, myBind_inst_48_57_tsni, myRunState_inst_48_57_54_tsni, myRunState_inst_48_7_54_tsni, myBind_inst_48_58_tsni, myRunState_inst_48_58_54_tsni, myBind_inst_48_59_tsni, myRunState_inst_48_59_54_tsni, myRunState_inst_48_9_12_54_tsni, myEvalState_inst_48_13_60_tsni, myRunState_inst_48_13_60_61_tsni, myRunState_inst_48_14_54_tsni, myBind_inst_48_62_tsni, myRunState_inst_48_62_54_tsni, myBind_inst_48_63_tsni, myRunState_inst_48_63_54_tsni, myMaybe_inst_49_64_tsni, myBind_inst_50_48_63_tsni, myRunState_inst_50_48_63_54_tsni, myBind_inst_50_48_62_tsni, myRunState_inst_50_48_62_54_tsni, myRunState_inst_50_48_14_54_tsni, myRunState_inst_50_48_9_12_54_tsni, myEvalState_inst_50_48_13_60_tsni, myRunState_inst_50_48_13_60_61_tsni, myBind_inst_50_48_59_tsni, myRunState_inst_50_48_59_54_tsni, myBind_inst_50_48_58_tsni, myRunState_inst_50_48_58_54_tsni, myRunState_inst_50_48_7_54_tsni, myBind_inst_50_48_57_tsni, myRunState_inst_50_48_57_54_tsni, myMaybe_inst_50_48_1_55_tsni, myRunState_inst_50_48_1_4_54_tsni, myRunState_inst_50_48_5_56_tsni, append_inst_50_47_65_tsni, append_inst_50_46_65_tsni, append_inst_51_50_46_65_tsni, append_inst_51_50_47_65_tsni, myRunState_inst_51_50_48_1_4_54_tsni, myMaybe_inst_51_50_48_1_55_tsni, myRunState_inst_51_50_48_5_56_tsni, myBind_inst_51_50_48_57_tsni, myRunState_inst_51_50_48_57_54_tsni, myRunState_inst_51_50_48_7_54_tsni, myBind_inst_51_50_48_58_tsni, myRunState_inst_51_50_48_58_54_tsni, myBind_inst_51_50_48_59_tsni, myRunState_inst_51_50_48_59_54_tsni, myRunState_inst_51_50_48_9_12_54_tsni, myEvalState_inst_51_50_48_13_60_tsni, myRunState_inst_51_50_48_13_60_61_tsni, myRunState_inst_51_50_48_14_54_tsni, myBind_inst_51_50_48_62_tsni, myRunState_inst_51_50_48_62_54_tsni, myBind_inst_51_50_48_63_tsni, myRunState_inst_51_50_48_63_54_tsni, myMaybe_inst_52_49_64_tsni, myMaybe_inst_53_52_49_64_tsni, myBind_inst_53_51_50_48_63_tsni, myRunState_inst_53_51_50_48_63_54_tsni, myBind_inst_53_51_50_48_62_tsni, myRunState_inst_53_51_50_48_62_54_tsni, myRunState_inst_53_51_50_48_14_54_tsni, myRunState_inst_53_51_50_48_9_12_54_tsni, myEvalState_inst_53_51_50_48_13_60_tsni, myRunState_inst_53_51_50_48_13_60_61_tsni, myBind_inst_53_51_50_48_59_tsni, myRunState_inst_53_51_50_48_59_54_tsni, myBind_inst_53_51_50_48_58_tsni, myRunState_inst_53_51_50_48_58_54_tsni, myRunState_inst_53_51_50_48_7_54_tsni, myBind_inst_53_51_50_48_57_tsni, myRunState_inst_53_51_50_48_57_54_tsni, myMaybe_inst_53_51_50_48_1_55_tsni, myRunState_inst_53_51_50_48_1_4_54_tsni, myRunState_inst_53_51_50_48_5_56_tsni, append_inst_53_51_50_47_65_tsni, append_inst_53_51_50_46_65_tsni;
traverseTerm_inst_0_tsni = function traverseTerm_inst_0_tsni(t) {
  return eval_inst_0_tsni(t)
};
eval_inst_0_tsni = function eval_inst_0_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_0_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_0_tsni(t1)
      });
      return myBind_inst_0_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_0_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_0_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_0_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_0_6_tsni(tmp9)
      });
      return myBind_inst_0_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_0_58_tsni(tmp, lambda3)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_0_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_0_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_0_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_0_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_0_tsni(u_, v)
    });
    return myBind_inst_0_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_0_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_0_tsni(a)
      } else {
        return traverseTerm_inst_0_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_0_15_tsni(tmp7)
    });
    return myBind_inst_0_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_0_tsni = function apply_inst_0_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_0_tsni(b);
        tmp3 = pushVar_inst_0_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_0_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_0_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_0_tsni = function traverseCon_inst_0_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_0_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_0_1_tsni = function lookupVar_inst_0_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_0_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_0_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_0_1_2_tsni(tmp)
  });
  return myBind_inst_0_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_0_1_2_tsni = function myReturn_inst_0_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_0_1_3_tsni = function lookup_inst_0_1_3_tsni(k, t) {
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
        return lookup_inst_0_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_0_1_4_tsni = function myBind_inst_0_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_0_5_tsni = function myBind_inst_0_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_0_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_0_6_tsni = function myReturn_inst_0_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_0_7_tsni = function myBind_inst_0_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_0_8_tsni = function myReturn_inst_0_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_0_9_tsni = function pushVar_inst_0_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_0_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_0_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_0_9_10_tsni = function withEnv_inst_0_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_0_9_10_11_tsni(tmp1)
};
myReturn_inst_0_9_10_11_tsni = function myReturn_inst_0_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_0_9_12_tsni = function myBind_inst_0_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_0_13_tsni = function withEnv_inst_0_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_0_13_60_tsni(m, tmp);
  return myReturn_inst_0_13_11_tsni(tmp1)
};
myReturn_inst_0_13_11_tsni = function myReturn_inst_0_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_0_14_tsni = function myBind_inst_0_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_0_15_tsni = function myReturn_inst_0_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
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
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_16_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_16_tsni(t1)
      });
      return myBind_inst_16_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_16_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_16_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_16_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_16_6_tsni(tmp9)
      });
      return myBind_inst_16_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_16_58_tsni(tmp, lambda3)
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
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_16_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_16_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_16_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_16_tsni(u_, v)
    });
    return myBind_inst_16_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_16_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_16_tsni(a)
      } else {
        return traverseTerm_inst_16_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_16_15_tsni(tmp7)
    });
    return myBind_inst_16_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_16_tsni = function apply_inst_16_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_16_tsni(b);
        tmp3 = pushVar_inst_16_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_16_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_16_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_16_tsni = function traverseCon_inst_16_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_16_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_16_1_tsni = function lookupVar_inst_16_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_16_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_16_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_16_1_2_tsni(tmp)
  });
  return myBind_inst_16_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_16_1_2_tsni = function myReturn_inst_16_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_16_1_3_tsni = function lookup_inst_16_1_3_tsni(k, t) {
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
        return lookup_inst_16_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_16_1_4_tsni = function myBind_inst_16_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_16_5_tsni = function myBind_inst_16_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_16_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_16_6_tsni = function myReturn_inst_16_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_16_7_tsni = function myBind_inst_16_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_16_8_tsni = function myReturn_inst_16_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_16_9_tsni = function pushVar_inst_16_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_16_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_16_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_16_9_10_tsni = function withEnv_inst_16_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_16_9_10_11_tsni(tmp1)
};
myReturn_inst_16_9_10_11_tsni = function myReturn_inst_16_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_16_9_12_tsni = function myBind_inst_16_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_16_13_tsni = function withEnv_inst_16_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_16_13_60_tsni(m, tmp);
  return myReturn_inst_16_13_11_tsni(tmp1)
};
myReturn_inst_16_13_11_tsni = function myReturn_inst_16_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_16_14_tsni = function myBind_inst_16_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_16_15_tsni = function myReturn_inst_16_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
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
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_17_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_17_tsni(t1)
      });
      return myBind_inst_17_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_17_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_17_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_17_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_17_6_tsni(tmp9)
      });
      return myBind_inst_17_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_17_58_tsni(tmp, lambda3)
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
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_17_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_17_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_17_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_17_tsni(u_, v)
    });
    return myBind_inst_17_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_17_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_17_tsni(a)
      } else {
        return traverseTerm_inst_17_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_17_15_tsni(tmp7)
    });
    return myBind_inst_17_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_17_tsni = function apply_inst_17_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_17_tsni(b);
        tmp3 = pushVar_inst_17_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_17_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_17_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_17_tsni = function traverseCon_inst_17_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_17_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_17_1_tsni = function lookupVar_inst_17_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_17_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_17_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_17_1_2_tsni(tmp)
  });
  return myBind_inst_17_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_17_1_2_tsni = function myReturn_inst_17_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_17_1_3_tsni = function lookup_inst_17_1_3_tsni(k, t) {
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
        return lookup_inst_17_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_17_1_4_tsni = function myBind_inst_17_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_17_5_tsni = function myBind_inst_17_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_17_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_17_6_tsni = function myReturn_inst_17_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_17_7_tsni = function myBind_inst_17_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_17_8_tsni = function myReturn_inst_17_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_17_9_tsni = function pushVar_inst_17_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_17_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_17_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_17_9_10_tsni = function withEnv_inst_17_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_17_9_10_11_tsni(tmp1)
};
myReturn_inst_17_9_10_11_tsni = function myReturn_inst_17_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_17_9_12_tsni = function myBind_inst_17_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_17_13_tsni = function withEnv_inst_17_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_17_13_60_tsni(m, tmp);
  return myReturn_inst_17_13_11_tsni(tmp1)
};
myReturn_inst_17_13_11_tsni = function myReturn_inst_17_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_17_14_tsni = function myBind_inst_17_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_17_15_tsni = function myReturn_inst_17_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
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
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_18_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_18_tsni(t1)
      });
      return myBind_inst_18_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_18_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_18_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_18_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_18_6_tsni(tmp9)
      });
      return myBind_inst_18_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_18_58_tsni(tmp, lambda3)
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
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_18_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_18_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_18_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_18_tsni(u_, v)
    });
    return myBind_inst_18_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_18_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_18_tsni(a)
      } else {
        return traverseTerm_inst_18_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_18_15_tsni(tmp7)
    });
    return myBind_inst_18_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_18_tsni = function apply_inst_18_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_18_tsni(b);
        tmp3 = pushVar_inst_18_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_18_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_18_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_18_tsni = function traverseCon_inst_18_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_18_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_18_1_tsni = function lookupVar_inst_18_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_18_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_18_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_18_1_2_tsni(tmp)
  });
  return myBind_inst_18_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_18_1_2_tsni = function myReturn_inst_18_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_18_1_3_tsni = function lookup_inst_18_1_3_tsni(k, t) {
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
        return lookup_inst_18_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_18_1_4_tsni = function myBind_inst_18_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_18_5_tsni = function myBind_inst_18_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_18_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_18_6_tsni = function myReturn_inst_18_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_18_7_tsni = function myBind_inst_18_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_18_8_tsni = function myReturn_inst_18_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_18_9_tsni = function pushVar_inst_18_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_18_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_18_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_18_9_10_tsni = function withEnv_inst_18_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_18_9_10_11_tsni(tmp1)
};
myReturn_inst_18_9_10_11_tsni = function myReturn_inst_18_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_18_9_12_tsni = function myBind_inst_18_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_18_13_tsni = function withEnv_inst_18_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_18_13_60_tsni(m, tmp);
  return myReturn_inst_18_13_11_tsni(tmp1)
};
myReturn_inst_18_13_11_tsni = function myReturn_inst_18_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_18_14_tsni = function myBind_inst_18_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_18_15_tsni = function myReturn_inst_18_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
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
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_19_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_19_tsni(t1)
      });
      return myBind_inst_19_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_19_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_19_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_19_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_19_6_tsni(tmp9)
      });
      return myBind_inst_19_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_19_58_tsni(tmp, lambda3)
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
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_19_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_19_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_19_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_19_tsni(u_, v)
    });
    return myBind_inst_19_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_19_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_19_tsni(a)
      } else {
        return traverseTerm_inst_19_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_19_15_tsni(tmp7)
    });
    return myBind_inst_19_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_19_tsni = function apply_inst_19_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_19_tsni(b);
        tmp3 = pushVar_inst_19_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_19_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_19_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_19_tsni = function traverseCon_inst_19_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_19_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_19_1_tsni = function lookupVar_inst_19_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_19_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_19_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_19_1_2_tsni(tmp)
  });
  return myBind_inst_19_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_19_1_2_tsni = function myReturn_inst_19_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_19_1_3_tsni = function lookup_inst_19_1_3_tsni(k, t) {
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
        return lookup_inst_19_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_19_1_4_tsni = function myBind_inst_19_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_19_5_tsni = function myBind_inst_19_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_19_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_19_6_tsni = function myReturn_inst_19_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_19_7_tsni = function myBind_inst_19_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_19_8_tsni = function myReturn_inst_19_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_19_9_tsni = function pushVar_inst_19_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_19_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_19_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_19_9_10_tsni = function withEnv_inst_19_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_19_9_10_11_tsni(tmp1)
};
myReturn_inst_19_9_10_11_tsni = function myReturn_inst_19_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_19_9_12_tsni = function myBind_inst_19_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_19_13_tsni = function withEnv_inst_19_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_19_13_60_tsni(m, tmp);
  return myReturn_inst_19_13_11_tsni(tmp1)
};
myReturn_inst_19_13_11_tsni = function myReturn_inst_19_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_19_14_tsni = function myBind_inst_19_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_19_15_tsni = function myReturn_inst_19_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
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
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_20_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_20_tsni(t1)
      });
      return myBind_inst_20_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_20_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_20_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_20_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_20_6_tsni(tmp9)
      });
      return myBind_inst_20_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_20_58_tsni(tmp, lambda3)
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
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_20_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_20_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_20_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_20_tsni(u_, v)
    });
    return myBind_inst_20_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_20_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_20_tsni(a)
      } else {
        return traverseTerm_inst_20_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_20_15_tsni(tmp7)
    });
    return myBind_inst_20_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_20_tsni = function apply_inst_20_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_20_tsni(b);
        tmp3 = pushVar_inst_20_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_20_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_20_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_20_tsni = function traverseCon_inst_20_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_20_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_20_1_tsni = function lookupVar_inst_20_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_20_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_20_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_20_1_2_tsni(tmp)
  });
  return myBind_inst_20_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_20_1_2_tsni = function myReturn_inst_20_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_20_1_3_tsni = function lookup_inst_20_1_3_tsni(k, t) {
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
        return lookup_inst_20_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_20_1_4_tsni = function myBind_inst_20_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_20_5_tsni = function myBind_inst_20_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_20_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_20_6_tsni = function myReturn_inst_20_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_20_7_tsni = function myBind_inst_20_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_20_8_tsni = function myReturn_inst_20_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_20_9_tsni = function pushVar_inst_20_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_20_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_20_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_20_9_10_tsni = function withEnv_inst_20_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_20_9_10_11_tsni(tmp1)
};
myReturn_inst_20_9_10_11_tsni = function myReturn_inst_20_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_20_9_12_tsni = function myBind_inst_20_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_20_13_tsni = function withEnv_inst_20_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_20_13_60_tsni(m, tmp);
  return myReturn_inst_20_13_11_tsni(tmp1)
};
myReturn_inst_20_13_11_tsni = function myReturn_inst_20_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_20_14_tsni = function myBind_inst_20_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_20_15_tsni = function myReturn_inst_20_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
simpleEval_inst_21_tsni = function simpleEval_inst_21_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_21_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_21_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_21_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_21_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_21_tsni(env, v1);
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
    tmp6 = simpleEval_inst_21_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_21_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_21_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_21_tsni(env, a)
    } else {
      return simpleEval_inst_21_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_21_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_21_tsni = function simpleApply_inst_21_tsni(env, t, a) {
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
      return simpleEval_inst_21_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_21_tsni = function simpleEvalCon_inst_21_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_21_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_21_22_tsni = function lookup_inst_21_22_tsni(k, t) {
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
        return lookup_inst_21_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_23_tsni = function simpleEval_inst_23_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_23_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_23_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_23_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_23_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_23_tsni(env, v1);
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
    tmp6 = simpleEval_inst_23_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_23_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_23_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_23_tsni(env, a)
    } else {
      return simpleEval_inst_23_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_23_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_23_tsni = function simpleApply_inst_23_tsni(env, t, a) {
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
      return simpleEval_inst_23_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_23_tsni = function simpleEvalCon_inst_23_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_23_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_23_22_tsni = function lookup_inst_23_22_tsni(k, t) {
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
        return lookup_inst_23_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_24_tsni = function simpleEval_inst_24_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_24_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_24_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_24_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_24_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_24_tsni(env, v1);
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
    tmp6 = simpleEval_inst_24_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_24_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_24_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_24_tsni(env, a)
    } else {
      return simpleEval_inst_24_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_24_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_24_tsni = function simpleApply_inst_24_tsni(env, t, a) {
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
      return simpleEval_inst_24_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_24_tsni = function simpleEvalCon_inst_24_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_24_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_24_22_tsni = function lookup_inst_24_22_tsni(k, t) {
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
        return lookup_inst_24_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_25_tsni = function simpleEval_inst_25_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_25_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_25_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_25_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_25_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_25_tsni(env, v1);
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
    tmp6 = simpleEval_inst_25_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_25_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_25_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_25_tsni(env, a)
    } else {
      return simpleEval_inst_25_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_25_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_25_tsni = function simpleApply_inst_25_tsni(env, t, a) {
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
      return simpleEval_inst_25_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_25_tsni = function simpleEvalCon_inst_25_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_25_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_25_22_tsni = function lookup_inst_25_22_tsni(k, t) {
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
        return lookup_inst_25_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_26_tsni = function simpleEval_inst_26_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_26_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_26_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_26_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_26_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_26_tsni(env, v1);
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
    tmp6 = simpleEval_inst_26_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_26_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_26_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_26_tsni(env, a)
    } else {
      return simpleEval_inst_26_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_26_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_26_tsni = function simpleApply_inst_26_tsni(env, t, a) {
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
      return simpleEval_inst_26_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_26_tsni = function simpleEvalCon_inst_26_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_26_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_26_22_tsni = function lookup_inst_26_22_tsni(k, t) {
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
        return lookup_inst_26_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_27_tsni = function simpleEval_inst_27_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_27_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_27_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_27_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_27_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_27_tsni(env, v1);
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
    tmp6 = simpleEval_inst_27_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_27_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_27_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_27_tsni(env, a)
    } else {
      return simpleEval_inst_27_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_27_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_27_tsni = function simpleApply_inst_27_tsni(env, t, a) {
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
      return simpleEval_inst_27_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_27_tsni = function simpleEvalCon_inst_27_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_27_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_27_22_tsni = function lookup_inst_27_22_tsni(k, t) {
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
        return lookup_inst_27_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_28_tsni = function simpleEval_inst_28_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_28_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_28_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_28_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_28_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_28_tsni(env, v1);
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
    tmp6 = simpleEval_inst_28_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_28_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_28_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_28_tsni(env, a)
    } else {
      return simpleEval_inst_28_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_28_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_28_tsni = function simpleApply_inst_28_tsni(env, t, a) {
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
      return simpleEval_inst_28_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_28_tsni = function simpleEvalCon_inst_28_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_28_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_28_22_tsni = function lookup_inst_28_22_tsni(k, t) {
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
        return lookup_inst_28_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_29_tsni = function simpleEval_inst_29_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_29_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_29_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_29_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_29_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_29_tsni(env, v1);
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
    tmp6 = simpleEval_inst_29_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_29_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_29_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_29_tsni(env, a)
    } else {
      return simpleEval_inst_29_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_29_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_29_tsni = function simpleApply_inst_29_tsni(env, t, a) {
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
      return simpleEval_inst_29_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_29_tsni = function simpleEvalCon_inst_29_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_29_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_29_22_tsni = function lookup_inst_29_22_tsni(k, t) {
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
        return lookup_inst_29_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_30_tsni = function simpleEval_inst_30_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_30_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_30_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_30_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_30_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_30_tsni(env, v1);
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
    tmp6 = simpleEval_inst_30_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_30_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_30_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_30_tsni(env, a)
    } else {
      return simpleEval_inst_30_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_30_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_30_tsni = function simpleApply_inst_30_tsni(env, t, a) {
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
      return simpleEval_inst_30_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_30_tsni = function simpleEvalCon_inst_30_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_30_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_30_22_tsni = function lookup_inst_30_22_tsni(k, t) {
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
        return lookup_inst_30_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup_inst_22_tsni = function lookup_inst_22_tsni(k, t) {
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
        return lookup_inst_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_31_tsni = function simpleEval_inst_31_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_31_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_31_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_31_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_31_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_31_tsni(env, v1);
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
    tmp6 = simpleEval_inst_31_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_31_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_31_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_31_tsni(env, a)
    } else {
      return simpleEval_inst_31_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_31_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_31_tsni = function simpleApply_inst_31_tsni(env, t, a) {
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
      return simpleEval_inst_31_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_31_tsni = function simpleEvalCon_inst_31_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_31_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_31_22_tsni = function lookup_inst_31_22_tsni(k, t) {
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
        return lookup_inst_31_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
simpleEval_inst_32_tsni = function simpleEval_inst_32_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_32_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_32_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_32_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_32_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_32_tsni(env, v1);
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
    tmp6 = simpleEval_inst_32_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_32_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_32_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_32_tsni(env, a)
    } else {
      return simpleEval_inst_32_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_32_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_32_tsni = function simpleApply_inst_32_tsni(env, t, a) {
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
      return simpleEval_inst_32_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_32_tsni = function simpleEvalCon_inst_32_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_32_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_32_22_tsni = function lookup_inst_32_22_tsni(k, t) {
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
        return lookup_inst_32_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_33_tsni = function pp_inst_33_tsni(t) {
  return ppn_inst_33_tsni(0, t)
};
ppn_inst_33_tsni = function ppn_inst_33_tsni(n, ter) {
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
    tmp3 = ppn_inst_33_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_33_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_33_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_33_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_33_tsni(2, b1);
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
    tmp18 = ppn_inst_33_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_33_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_33_tsni(0, b);
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
    tmp28 = ppn_inst_33_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_33_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_33_tsni = function ppenv_inst_33_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_33_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_33_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_33_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_33_34_tsni = function flatMap_inst_33_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_33_34_tsni(f, t);
    return append_inst_33_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_33_34_35_tsni = function append_inst_33_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_33_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_33_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_36_tsni = function pp_inst_36_tsni(t) {
  return ppn_inst_36_tsni(0, t)
};
ppn_inst_36_tsni = function ppn_inst_36_tsni(n, ter) {
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
    tmp3 = ppn_inst_36_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_36_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_36_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_36_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_36_tsni(2, b1);
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
    tmp18 = ppn_inst_36_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_36_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_36_tsni(0, b);
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
    tmp28 = ppn_inst_36_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_36_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_36_tsni = function ppenv_inst_36_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_36_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_36_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_36_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_36_34_tsni = function flatMap_inst_36_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_36_34_tsni(f, t);
    return append_inst_36_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_36_34_35_tsni = function append_inst_36_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_36_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_36_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_37_tsni = function pp_inst_37_tsni(t) {
  return ppn_inst_37_tsni(0, t)
};
ppn_inst_37_tsni = function ppn_inst_37_tsni(n, ter) {
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
    tmp3 = ppn_inst_37_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_37_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_37_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_37_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_37_tsni(2, b1);
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
    tmp18 = ppn_inst_37_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_37_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_37_tsni(0, b);
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
    tmp28 = ppn_inst_37_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_37_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_37_tsni = function ppenv_inst_37_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_37_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_37_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_37_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_37_34_tsni = function flatMap_inst_37_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_37_34_tsni(f, t);
    return append_inst_37_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_37_34_35_tsni = function append_inst_37_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_37_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_37_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_38_tsni = function pp_inst_38_tsni(t) {
  return ppn_inst_38_tsni(0, t)
};
ppn_inst_38_tsni = function ppn_inst_38_tsni(n, ter) {
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
    tmp3 = ppn_inst_38_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_38_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_38_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_38_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_38_tsni(2, b1);
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
    tmp18 = ppn_inst_38_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_38_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_38_tsni(0, b);
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
    tmp28 = ppn_inst_38_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_38_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_38_tsni = function ppenv_inst_38_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_38_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_38_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_38_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_38_34_tsni = function flatMap_inst_38_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_38_34_tsni(f, t);
    return append_inst_38_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_38_34_35_tsni = function append_inst_38_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_38_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_38_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_39_tsni = function pp_inst_39_tsni(t) {
  return ppn_inst_39_tsni(0, t)
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
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_39_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_39_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_39_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_39_34_tsni = function flatMap_inst_39_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_39_34_tsni(f, t);
    return append_inst_39_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_34_35_tsni = function append_inst_39_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_39_65_tsni(xs1, ys1);
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
    tmp30 = ppenv_inst_40_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_40_tsni = function ppenv_inst_40_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_40_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_40_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_40_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_40_34_tsni = function flatMap_inst_40_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_40_34_tsni(f, t);
    return append_inst_40_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_34_35_tsni = function append_inst_40_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_40_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_41_tsni = function pp_inst_41_tsni(t) {
  return ppn_inst_41_tsni(0, t)
};
ppn_inst_41_tsni = function ppn_inst_41_tsni(n, ter) {
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
    tmp3 = ppn_inst_41_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_41_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_41_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_41_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_41_tsni(2, b1);
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
    tmp18 = ppn_inst_41_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_41_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_41_tsni(0, b);
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
    tmp28 = ppn_inst_41_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_41_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_41_tsni = function ppenv_inst_41_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_41_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_41_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_41_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_41_34_tsni = function flatMap_inst_41_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_41_34_tsni(f, t);
    return append_inst_41_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_41_34_35_tsni = function append_inst_41_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_41_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_42_tsni = function pp_inst_42_tsni(t) {
  return ppn_inst_42_tsni(0, t)
};
ppn_inst_42_tsni = function ppn_inst_42_tsni(n, ter) {
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
    tmp3 = ppn_inst_42_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_42_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_42_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_42_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_42_tsni(2, b1);
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
    tmp18 = ppn_inst_42_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_42_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_42_tsni(0, b);
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
    tmp28 = ppn_inst_42_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_42_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_42_tsni = function ppenv_inst_42_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_42_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_42_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_42_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_42_34_tsni = function flatMap_inst_42_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_42_34_tsni(f, t);
    return append_inst_42_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_42_34_35_tsni = function append_inst_42_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_42_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_42_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_43_tsni = function pp_inst_43_tsni(t) {
  return ppn_inst_43_tsni(0, t)
};
ppn_inst_43_tsni = function ppn_inst_43_tsni(n, ter) {
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
    tmp3 = ppn_inst_43_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_43_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_43_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_43_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_43_tsni(2, b1);
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
    tmp18 = ppn_inst_43_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_43_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_43_tsni(0, b);
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
    tmp28 = ppn_inst_43_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_43_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_43_tsni = function ppenv_inst_43_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_43_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_43_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_43_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_43_34_tsni = function flatMap_inst_43_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_43_34_tsni(f, t);
    return append_inst_43_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_43_34_35_tsni = function append_inst_43_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_43_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_43_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_44_tsni = function pp_inst_44_tsni(t) {
  return ppn_inst_44_tsni(0, t)
};
ppn_inst_44_tsni = function ppn_inst_44_tsni(n, ter) {
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
    tmp3 = ppn_inst_44_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_44_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_44_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_44_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_44_tsni(2, b1);
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
    tmp18 = ppn_inst_44_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_44_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_44_tsni(0, b);
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
    tmp28 = ppn_inst_44_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_44_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_44_tsni = function ppenv_inst_44_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_44_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_44_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_44_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_44_34_tsni = function flatMap_inst_44_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_44_34_tsni(f, t);
    return append_inst_44_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_44_34_35_tsni = function append_inst_44_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_44_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_44_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_45_tsni = function pp_inst_45_tsni(t) {
  return ppn_inst_45_tsni(0, t)
};
ppn_inst_45_tsni = function ppn_inst_45_tsni(n, ter) {
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
    tmp3 = ppn_inst_45_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_45_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_45_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_45_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_45_tsni(2, b1);
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
    tmp18 = ppn_inst_45_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_45_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_45_tsni(0, b);
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
    tmp28 = ppn_inst_45_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_45_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_45_tsni = function ppenv_inst_45_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_45_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_45_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_45_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_45_34_tsni = function flatMap_inst_45_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_45_34_tsni(f, t);
    return append_inst_45_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_45_34_35_tsni = function append_inst_45_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_45_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_45_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
flatMap_inst_34_tsni = function flatMap_inst_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_34_tsni(f, t);
    return append_inst_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_34_35_tsni = function append_inst_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_46_tsni = function pp_inst_46_tsni(t) {
  return ppn_inst_46_tsni(0, t)
};
ppn_inst_46_tsni = function ppn_inst_46_tsni(n, ter) {
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
    tmp3 = ppn_inst_46_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_46_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_46_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_46_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_46_tsni(2, b1);
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
    tmp18 = ppn_inst_46_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_46_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_46_tsni(0, b);
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
    tmp28 = ppn_inst_46_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_46_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_46_tsni = function ppenv_inst_46_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_46_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_46_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_46_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_46_34_tsni = function flatMap_inst_46_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_46_34_tsni(f, t);
    return append_inst_46_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_46_34_35_tsni = function append_inst_46_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_46_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_46_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_47_tsni = function pp_inst_47_tsni(t) {
  return ppn_inst_47_tsni(0, t)
};
ppn_inst_47_tsni = function ppn_inst_47_tsni(n, ter) {
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
    tmp3 = ppn_inst_47_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_47_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_47_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_47_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_47_tsni(2, b1);
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
    tmp18 = ppn_inst_47_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_47_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_47_tsni(0, b);
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
    tmp28 = ppn_inst_47_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_47_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_47_tsni = function ppenv_inst_47_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_47_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_47_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_47_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_47_34_tsni = function flatMap_inst_47_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_47_34_tsni(f, t);
    return append_inst_47_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_47_34_35_tsni = function append_inst_47_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_47_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_47_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_48_tsni = function traverseTerm_inst_48_tsni(t) {
  return eval_inst_48_tsni(t)
};
eval_inst_48_tsni = function eval_inst_48_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_48_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_48_tsni(t1)
      });
      return myBind_inst_48_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_48_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_48_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_48_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_48_6_tsni(tmp9)
      });
      return myBind_inst_48_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_48_58_tsni(tmp, lambda3)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_48_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_48_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_48_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_48_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_48_tsni(u_, v)
    });
    return myBind_inst_48_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_48_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_48_tsni(a)
      } else {
        return traverseTerm_inst_48_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_48_15_tsni(tmp7)
    });
    return myBind_inst_48_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_48_tsni = function apply_inst_48_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_48_tsni(b);
        tmp3 = pushVar_inst_48_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_48_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_48_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_48_tsni = function traverseCon_inst_48_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_48_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_48_1_tsni = function lookupVar_inst_48_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_48_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_48_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_48_1_2_tsni(tmp)
  });
  return myBind_inst_48_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_48_1_2_tsni = function myReturn_inst_48_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_48_1_3_tsni = function lookup_inst_48_1_3_tsni(k, t) {
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
        return lookup_inst_48_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_48_1_4_tsni = function myBind_inst_48_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_48_5_tsni = function myBind_inst_48_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_48_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_48_6_tsni = function myReturn_inst_48_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_48_7_tsni = function myBind_inst_48_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_48_8_tsni = function myReturn_inst_48_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_48_9_tsni = function pushVar_inst_48_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_48_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_48_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_48_9_10_tsni = function withEnv_inst_48_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_48_9_10_11_tsni(tmp1)
};
myReturn_inst_48_9_10_11_tsni = function myReturn_inst_48_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_48_9_12_tsni = function myBind_inst_48_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_48_13_tsni = function withEnv_inst_48_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_48_13_60_tsni(m, tmp);
  return myReturn_inst_48_13_11_tsni(tmp1)
};
myReturn_inst_48_13_11_tsni = function myReturn_inst_48_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_48_14_tsni = function myBind_inst_48_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_48_15_tsni = function myReturn_inst_48_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
simpleEval_inst_49_tsni = function simpleEval_inst_49_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_49_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_49_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_49_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_49_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_49_tsni(env, v1);
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
    tmp6 = simpleEval_inst_49_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_49_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_49_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_49_tsni(env, a)
    } else {
      return simpleEval_inst_49_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_49_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_49_tsni = function simpleApply_inst_49_tsni(env, t, a) {
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
      return simpleEval_inst_49_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_49_tsni = function simpleEvalCon_inst_49_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_49_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_49_22_tsni = function lookup_inst_49_22_tsni(k, t) {
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
        return lookup_inst_49_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ev_inst_50_tsni = function ev_inst_50_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_50_48_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_50_47_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_50_46_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_50_48_tsni = function traverseTerm_inst_50_48_tsni(t) {
  return eval_inst_50_48_tsni(t)
};
eval_inst_50_48_tsni = function eval_inst_50_48_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_50_48_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_50_48_tsni(t1)
      });
      return myBind_inst_50_48_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_50_48_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_50_48_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_50_48_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_50_48_6_tsni(tmp9)
      });
      return myBind_inst_50_48_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_50_48_58_tsni(tmp, lambda3)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_50_48_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_50_48_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_50_48_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_50_48_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_50_48_tsni(u_, v)
    });
    return myBind_inst_50_48_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_50_48_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_50_48_tsni(a)
      } else {
        return traverseTerm_inst_50_48_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_50_48_15_tsni(tmp7)
    });
    return myBind_inst_50_48_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_50_48_tsni = function apply_inst_50_48_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_50_48_tsni(b);
        tmp3 = pushVar_inst_50_48_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_50_48_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_50_48_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_50_48_tsni = function traverseCon_inst_50_48_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_50_48_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
myReturn_inst_50_48_15_tsni = function myReturn_inst_50_48_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_50_48_14_tsni = function myBind_inst_50_48_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_50_48_13_tsni = function withEnv_inst_50_48_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_50_48_13_60_tsni(m, tmp);
  return myReturn_inst_50_48_13_11_tsni(tmp1)
};
myReturn_inst_50_48_13_11_tsni = function myReturn_inst_50_48_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_50_48_9_tsni = function pushVar_inst_50_48_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_50_48_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_50_48_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_50_48_9_10_tsni = function withEnv_inst_50_48_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_50_48_9_10_11_tsni(tmp1)
};
myReturn_inst_50_48_9_10_11_tsni = function myReturn_inst_50_48_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_50_48_9_12_tsni = function myBind_inst_50_48_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_50_48_8_tsni = function myReturn_inst_50_48_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_50_48_7_tsni = function myBind_inst_50_48_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_50_48_6_tsni = function myReturn_inst_50_48_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_50_48_5_tsni = function myBind_inst_50_48_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_50_48_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lookupVar_inst_50_48_1_tsni = function lookupVar_inst_50_48_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_50_48_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_50_48_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_50_48_1_2_tsni(tmp)
  });
  return myBind_inst_50_48_1_4_tsni(lambda.myGet, lambda2)
};
lookup_inst_50_48_1_3_tsni = function lookup_inst_50_48_1_3_tsni(k, t) {
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
        return lookup_inst_50_48_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myReturn_inst_50_48_1_2_tsni = function myReturn_inst_50_48_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_50_48_1_4_tsni = function myBind_inst_50_48_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
pp_inst_50_47_tsni = function pp_inst_50_47_tsni(t) {
  return ppn_inst_50_47_tsni(0, t)
};
ppn_inst_50_47_tsni = function ppn_inst_50_47_tsni(n, ter) {
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
    tmp3 = ppn_inst_50_47_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_50_47_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_50_47_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_50_47_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_50_47_tsni(2, b1);
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
    tmp18 = ppn_inst_50_47_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_50_47_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_50_47_tsni(0, b);
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
    tmp28 = ppn_inst_50_47_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_50_47_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_50_47_tsni = function ppenv_inst_50_47_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_50_47_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_50_47_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_50_47_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_50_47_34_tsni = function flatMap_inst_50_47_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_50_47_34_tsni(f, t);
    return append_inst_50_47_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_50_47_34_35_tsni = function append_inst_50_47_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_50_47_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_50_47_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_50_46_tsni = function pp_inst_50_46_tsni(t) {
  return ppn_inst_50_46_tsni(0, t)
};
ppn_inst_50_46_tsni = function ppn_inst_50_46_tsni(n, ter) {
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
    tmp3 = ppn_inst_50_46_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_50_46_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_50_46_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_50_46_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_50_46_tsni(2, b1);
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
    tmp18 = ppn_inst_50_46_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_50_46_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_50_46_tsni(0, b);
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
    tmp28 = ppn_inst_50_46_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_50_46_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_50_46_tsni = function ppenv_inst_50_46_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_50_46_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_50_46_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_50_46_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_50_46_34_tsni = function flatMap_inst_50_46_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_50_46_34_tsni(f, t);
    return append_inst_50_46_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_50_46_34_35_tsni = function append_inst_50_46_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_50_46_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_50_46_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mainMonad_inst_51_tsni = function mainMonad_inst_51_tsni(args) {
  let scrut, tmp, tmp1, tmp2;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    return ev_inst_51_50_tsni(tmp2)
  }
};
ev_inst_51_50_tsni = function ev_inst_51_50_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_51_50_48_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_51_50_47_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_51_50_46_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_51_50_46_tsni = function pp_inst_51_50_46_tsni(t) {
  return ppn_inst_51_50_46_tsni(0, t)
};
ppn_inst_51_50_46_tsni = function ppn_inst_51_50_46_tsni(n, ter) {
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
    tmp3 = ppn_inst_51_50_46_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_51_50_46_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_51_50_46_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_51_50_46_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_51_50_46_tsni(2, b1);
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
    tmp18 = ppn_inst_51_50_46_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_51_50_46_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_51_50_46_tsni(0, b);
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
    tmp28 = ppn_inst_51_50_46_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_51_50_46_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_51_50_46_tsni = function ppenv_inst_51_50_46_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_51_50_46_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_51_50_46_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_51_50_46_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_51_50_46_34_tsni = function flatMap_inst_51_50_46_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_51_50_46_34_tsni(f, t);
    return append_inst_51_50_46_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_51_50_46_34_35_tsni = function append_inst_51_50_46_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_51_50_46_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_51_50_46_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_51_50_47_tsni = function pp_inst_51_50_47_tsni(t) {
  return ppn_inst_51_50_47_tsni(0, t)
};
ppn_inst_51_50_47_tsni = function ppn_inst_51_50_47_tsni(n, ter) {
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
    tmp3 = ppn_inst_51_50_47_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_51_50_47_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_51_50_47_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_51_50_47_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_51_50_47_tsni(2, b1);
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
    tmp18 = ppn_inst_51_50_47_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_51_50_47_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_51_50_47_tsni(0, b);
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
    tmp28 = ppn_inst_51_50_47_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_51_50_47_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_51_50_47_tsni = function ppenv_inst_51_50_47_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_51_50_47_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_51_50_47_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_51_50_47_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_51_50_47_34_tsni = function flatMap_inst_51_50_47_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_51_50_47_34_tsni(f, t);
    return append_inst_51_50_47_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_51_50_47_34_35_tsni = function append_inst_51_50_47_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_51_50_47_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_51_50_47_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_51_50_48_tsni = function traverseTerm_inst_51_50_48_tsni(t) {
  return eval_inst_51_50_48_tsni(t)
};
eval_inst_51_50_48_tsni = function eval_inst_51_50_48_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_51_50_48_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_51_50_48_tsni(t1)
      });
      return myBind_inst_51_50_48_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_51_50_48_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_51_50_48_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_51_50_48_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_51_50_48_6_tsni(tmp9)
      });
      return myBind_inst_51_50_48_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_51_50_48_58_tsni(tmp, lambda3)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_51_50_48_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_51_50_48_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_51_50_48_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_51_50_48_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_51_50_48_tsni(u_, v)
    });
    return myBind_inst_51_50_48_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_51_50_48_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_51_50_48_tsni(a)
      } else {
        return traverseTerm_inst_51_50_48_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_51_50_48_15_tsni(tmp7)
    });
    return myBind_inst_51_50_48_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_51_50_48_tsni = function apply_inst_51_50_48_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_51_50_48_tsni(b);
        tmp3 = pushVar_inst_51_50_48_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_51_50_48_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_51_50_48_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_51_50_48_tsni = function traverseCon_inst_51_50_48_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_51_50_48_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
lookupVar_inst_51_50_48_1_tsni = function lookupVar_inst_51_50_48_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_51_50_48_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_51_50_48_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_51_50_48_1_2_tsni(tmp)
  });
  return myBind_inst_51_50_48_1_4_tsni(lambda.myGet, lambda2)
};
myReturn_inst_51_50_48_1_2_tsni = function myReturn_inst_51_50_48_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
lookup_inst_51_50_48_1_3_tsni = function lookup_inst_51_50_48_1_3_tsni(k, t) {
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
        return lookup_inst_51_50_48_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myBind_inst_51_50_48_1_4_tsni = function myBind_inst_51_50_48_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myBind_inst_51_50_48_5_tsni = function myBind_inst_51_50_48_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_51_50_48_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_51_50_48_6_tsni = function myReturn_inst_51_50_48_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_51_50_48_7_tsni = function myBind_inst_51_50_48_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_51_50_48_8_tsni = function myReturn_inst_51_50_48_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_51_50_48_9_tsni = function pushVar_inst_51_50_48_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_51_50_48_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_51_50_48_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_51_50_48_9_10_tsni = function withEnv_inst_51_50_48_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_51_50_48_9_10_11_tsni(tmp1)
};
myReturn_inst_51_50_48_9_10_11_tsni = function myReturn_inst_51_50_48_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_51_50_48_9_12_tsni = function myBind_inst_51_50_48_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_51_50_48_13_tsni = function withEnv_inst_51_50_48_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_51_50_48_13_60_tsni(m, tmp);
  return myReturn_inst_51_50_48_13_11_tsni(tmp1)
};
myReturn_inst_51_50_48_13_11_tsni = function myReturn_inst_51_50_48_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_51_50_48_14_tsni = function myBind_inst_51_50_48_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_51_50_48_15_tsni = function myReturn_inst_51_50_48_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
mainSimple_inst_52_tsni = function mainSimple_inst_52_tsni(args) {
  let scrut, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    tmp3 = simpleEval_inst_52_49_tsni(NofibPrelude.Nil, tmp2);
    return lambda.showTerm(tmp3)
  }
};
simpleEval_inst_52_49_tsni = function simpleEval_inst_52_49_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_52_49_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_52_49_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_52_49_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_52_49_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_52_49_tsni(env, v1);
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
    tmp6 = simpleEval_inst_52_49_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_52_49_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_52_49_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_52_49_tsni(env, a)
    } else {
      return simpleEval_inst_52_49_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_52_49_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_52_49_tsni = function simpleApply_inst_52_49_tsni(env, t, a) {
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
      return simpleEval_inst_52_49_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_52_49_tsni = function simpleEvalCon_inst_52_49_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_52_49_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_52_49_22_tsni = function lookup_inst_52_49_22_tsni(k, t) {
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
        return lookup_inst_52_49_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testLambda_nofib_inst_53_tsni = function testLambda_nofib_inst_53_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, arr;
  tmp = NofibPrelude.Cons(n, NofibPrelude.Nil);
  tmp1 = mainSimple_inst_53_52_tsni(tmp);
  tmp2 = NofibPrelude.Cons(n, NofibPrelude.Nil);
  tmp3 = mainMonad_inst_53_51_tsni(tmp2);
  arr = [
    tmp1,
    tmp3
  ];
  return arr
};
mainSimple_inst_53_52_tsni = function mainSimple_inst_53_52_tsni(args) {
  let scrut, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    tmp3 = simpleEval_inst_53_52_49_tsni(NofibPrelude.Nil, tmp2);
    return lambda.showTerm(tmp3)
  }
};
simpleEval_inst_53_52_49_tsni = function simpleEval_inst_53_52_49_tsni(env, ter) {
  let param0, param1, t, e, param2, c, a, b, val_, scrut, u, v, u_, x, b1, u1, v1, u_1, v_, e1, v2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda2, lambda3;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    v2 = param0;
    tmp = lookup_inst_53_52_49_22_tsni(v2, env);
    lambda2 = (undefined, function (dummy) {
      throw globalThis.Error("undefined var");
    });
    lambda3 = (undefined, function (x1) {
      return x1
    });
    tmp1 = myMaybe_inst_53_52_49_64_tsni(lambda2, lambda3, tmp);
    return simpleEval_inst_53_52_49_tsni(env, tmp1)
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
    tmp2 = simpleEvalCon_inst_53_52_49_tsni(env, u1);
    u_1 = tmp2;
    tmp3 = simpleEvalCon_inst_53_52_49_tsni(env, v1);
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
    tmp6 = simpleEval_inst_53_52_49_tsni(env, u);
    u_ = tmp6;
    return simpleApply_inst_53_52_49_tsni(env, u_, v)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp7 = simpleEval_inst_53_52_49_tsni(env, c);
    val_ = tmp7;
    tmp8 = runtime.safeCall(lambda.Con(0));
    scrut = lambda.eqTerm(val_, tmp8);
    if (scrut === true) {
      return simpleEval_inst_53_52_49_tsni(env, a)
    } else {
      return simpleEval_inst_53_52_49_tsni(env, b)
    }
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    return simpleEval_inst_53_52_49_tsni(e, t)
  } else {
    throw globalThis.Error(ter);
  }
};
simpleApply_inst_53_52_49_tsni = function simpleApply_inst_53_52_49_tsni(env, t, a) {
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
      return simpleEval_inst_53_52_49_tsni(tmp1, b)
    } else {
      throw globalThis.Error("bad application");
    }
  } else {
    throw globalThis.Error("bad application");
  }
};
simpleEvalCon_inst_53_52_49_tsni = function simpleEvalCon_inst_53_52_49_tsni(env, e) {
  let e_, param0, c, tmp;
  tmp = simpleEval_inst_53_52_49_tsni(env, e);
  e_ = tmp;
  if (e_ instanceof lambda.Con.class) {
    param0 = e_.i;
    c = param0;
    return c
  } else {
    throw globalThis.Error("Not a Con");
  }
};
lookup_inst_53_52_49_22_tsni = function lookup_inst_53_52_49_22_tsni(k, t) {
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
        return lookup_inst_53_52_49_22_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mainMonad_inst_53_51_tsni = function mainMonad_inst_53_51_tsni(args) {
  let scrut, tmp, tmp1, tmp2;
  scrut = NofibPrelude.null_(args);
  if (scrut === true) {
    throw globalThis.Error("Args: number-to-sum-up-to");
  } else {
    tmp = NofibPrelude.head(args);
    tmp1 = runtime.safeCall(lambda.Con(tmp));
    tmp2 = lambda.App(lambda.sum0, tmp1);
    return ev_inst_53_51_50_tsni(tmp2)
  }
};
ev_inst_53_51_50_tsni = function ev_inst_53_51_50_tsni(t) {
  let envt2, first1, first0, env, t2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = traverseTerm_inst_53_51_50_48_tsni(t);
  tmp1 = lambda.myRunState(tmp, NofibPrelude.Nil);
  envt2 = tmp1;
  if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
    first0 = envt2[0];
    first1 = envt2[1];
    env = first0;
    t2 = first1;
    tmp2 = pp_inst_53_51_50_47_tsni(t2);
    tmp3 = NofibPrelude.nofibStringToList("  ");
    tmp4 = ppenv_inst_53_51_50_46_tsni(env);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseTerm_inst_53_51_50_48_tsni = function traverseTerm_inst_53_51_50_48_tsni(t) {
  return eval_inst_53_51_50_48_tsni(t)
};
eval_inst_53_51_50_48_tsni = function eval_inst_53_51_50_48_tsni(ter) {
  let param0, i, param1, param2, c, a, b, u, v, x, b1, t, e, u1, v1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
  if (ter instanceof lambda.Var.class) {
    param0 = ter.s;
    x1 = param0;
    lambda2 = (undefined, function (e1) {
      let tmp7, lambda8;
      tmp7 = lookupVar_inst_53_51_50_48_1_tsni(x1);
      lambda8 = (undefined, function (t1) {
        return traverseTerm_inst_53_51_50_48_tsni(t1)
      });
      return myBind_inst_53_51_50_48_5_tsni(tmp7, lambda8)
    });
    return myBind_inst_53_51_50_48_57_tsni(lambda.myGet, lambda2)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    u1 = param0;
    v1 = param1;
    tmp = traverseCon_inst_53_51_50_48_tsni(u1);
    lambda3 = (undefined, function (u_) {
      let tmp7, lambda8;
      tmp7 = traverseCon_inst_53_51_50_48_tsni(v1);
      lambda8 = (undefined, function (v_) {
        let tmp8, tmp9;
        tmp8 = u_ + v_;
        tmp9 = runtime.safeCall(lambda.Con(tmp8));
        return myReturn_inst_53_51_50_48_6_tsni(tmp9)
      });
      return myBind_inst_53_51_50_48_7_tsni(tmp7, lambda8)
    });
    return myBind_inst_53_51_50_48_58_tsni(tmp, lambda3)
  } else if (ter instanceof lambda.Thunk.class) {
    param0 = ter.t;
    param1 = ter.e;
    t = param0;
    e = param1;
    tmp1 = traverseTerm_inst_53_51_50_48_tsni(t);
    return lambda.withEnv(e, tmp1)
  } else if (ter instanceof lambda.Lam.class) {
    param0 = ter.s;
    param1 = ter.t;
    x = param0;
    b1 = param1;
    lambda4 = (undefined, function (env) {
      let tmp7, tmp8;
      tmp7 = lambda.Lam(x, b1);
      tmp8 = lambda.Thunk(tmp7, env);
      return myReturn_inst_53_51_50_48_8_tsni(tmp8)
    });
    tmp2 = lambda4;
    return myBind_inst_53_51_50_48_59_tsni(lambda.myGet, tmp2)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    u = param0;
    v = param1;
    tmp3 = traverseTerm_inst_53_51_50_48_tsni(u);
    lambda5 = (undefined, function (u_) {
      return apply_inst_53_51_50_48_tsni(u_, v)
    });
    return myBind_inst_53_51_50_48_62_tsni(tmp3, lambda5)
  } else if (ter instanceof lambda.IfZero.class) {
    param0 = ter.a;
    param1 = ter.b;
    param2 = ter.c;
    c = param0;
    a = param1;
    b = param2;
    tmp4 = traverseTerm_inst_53_51_50_48_tsni(c);
    lambda6 = (undefined, function (vall) {
      let scrut, tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(vall, tmp7);
      if (scrut === true) {
        return traverseTerm_inst_53_51_50_48_tsni(a)
      } else {
        return traverseTerm_inst_53_51_50_48_tsni(b)
      }
    });
    tmp5 = lambda6;
    return lambda.myBind(tmp4, tmp5)
  } else if (ter instanceof lambda.Con.class) {
    param0 = ter.i;
    i = param0;
    tmp6 = runtime.safeCall(lambda.Con(i));
    return lambda.myReturn(tmp6)
  } else if (ter instanceof lambda.Incr.class) {
    lambda7 = (undefined, function (_dummy) {
      let tmp7;
      tmp7 = runtime.safeCall(lambda.Con(0));
      return myReturn_inst_53_51_50_48_15_tsni(tmp7)
    });
    return myBind_inst_53_51_50_48_63_tsni(lambda.incr, lambda7)
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_inst_53_51_50_48_tsni = function apply_inst_53_51_50_48_tsni(t, a) {
  let param0, param1, param01, param11, x, b, e, tmp, lambda2;
  if (t instanceof lambda.Thunk.class) {
    param0 = t.t;
    param1 = t.e;
    if (param0 instanceof lambda.Lam.class) {
      param01 = param0.s;
      param11 = param0.t;
      x = param01;
      b = param11;
      e = param1;
      lambda2 = (undefined, function (orig) {
        let tmp1, tmp2, tmp3;
        tmp1 = lambda.Thunk(a, orig);
        tmp2 = traverseTerm_inst_53_51_50_48_tsni(b);
        tmp3 = pushVar_inst_53_51_50_48_9_tsni(x, tmp1, tmp2);
        return withEnv_inst_53_51_50_48_13_tsni(e, tmp3)
      });
      tmp = lambda2;
      return myBind_inst_53_51_50_48_14_tsni(lambda.myGet, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
traverseCon_inst_53_51_50_48_tsni = function traverseCon_inst_53_51_50_48_tsni(t) {
  let tmp, tmp1, lambda2;
  tmp = traverseTerm_inst_53_51_50_48_tsni(t);
  lambda2 = (undefined, function (_t) {
    let param0, c;
    if (_t instanceof lambda.Con.class) {
      param0 = _t.i;
      c = param0;
      return lambda.myReturn(c)
    } else {
      throw globalThis.Error("Not a Con");
    }
  });
  tmp1 = lambda2;
  return lambda.myBind(tmp, tmp1)
};
myReturn_inst_53_51_50_48_15_tsni = function myReturn_inst_53_51_50_48_15_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_53_51_50_48_14_tsni = function myBind_inst_53_51_50_48_14_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_14_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
withEnv_inst_53_51_50_48_13_tsni = function withEnv_inst_53_51_50_48_13_tsni(tmp, m) {
  let tmp1;
  tmp1 = myEvalState_inst_53_51_50_48_13_60_tsni(m, tmp);
  return myReturn_inst_53_51_50_48_13_11_tsni(tmp1)
};
myReturn_inst_53_51_50_48_13_11_tsni = function myReturn_inst_53_51_50_48_13_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
pushVar_inst_53_51_50_48_9_tsni = function pushVar_inst_53_51_50_48_9_tsni(v, t, m) {
  let tmp, lambda2;
  lambda2 = (undefined, function (env) {
    let arr, tmp1;
    arr = [
      v,
      t
    ];
    tmp1 = NofibPrelude.Cons(arr, env);
    return withEnv_inst_53_51_50_48_9_10_tsni(tmp1, m)
  });
  tmp = lambda2;
  return myBind_inst_53_51_50_48_9_12_tsni(lambda.myGet, tmp)
};
withEnv_inst_53_51_50_48_9_10_tsni = function withEnv_inst_53_51_50_48_9_10_tsni(tmp, m) {
  let tmp1;
  tmp1 = lambda.myEvalState(m, tmp);
  return myReturn_inst_53_51_50_48_9_10_11_tsni(tmp1)
};
myReturn_inst_53_51_50_48_9_10_11_tsni = function myReturn_inst_53_51_50_48_9_10_11_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = () => {
      let first1, first0, s_, a1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      return a1
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_53_51_50_48_9_12_tsni = function myBind_inst_53_51_50_48_9_12_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_9_12_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_53_51_50_48_8_tsni = function myReturn_inst_53_51_50_48_8_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_53_51_50_48_7_tsni = function myBind_inst_53_51_50_48_7_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_7_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
myReturn_inst_53_51_50_48_6_tsni = function myReturn_inst_53_51_50_48_6_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr;
    arr = [
      s,
      a
    ];
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_53_51_50_48_5_tsni = function myBind_inst_53_51_50_48_5_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut;
    scrut = myRunState_inst_53_51_50_48_5_56_tsni(m, s);
    return runtime.safeCall(scrut(f))
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
lookupVar_inst_53_51_50_48_1_tsni = function lookupVar_inst_53_51_50_48_1_tsni(v) {
  let lookup2, lambda2;
  lookup2 = function lookup2(env) {
    let tmp, lambda3, lambda4;
    tmp = lookup_inst_53_51_50_48_1_3_tsni(v, env);
    lambda3 = (undefined, function (dummy) {
      throw globalThis.Error("undefined");
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    return myMaybe_inst_53_51_50_48_1_55_tsni(lambda3, lambda4, tmp)
  };
  lambda2 = (undefined, function (env) {
    let tmp;
    tmp = lookup2(env);
    return myReturn_inst_53_51_50_48_1_2_tsni(tmp)
  });
  return myBind_inst_53_51_50_48_1_4_tsni(lambda.myGet, lambda2)
};
lookup_inst_53_51_50_48_1_3_tsni = function lookup_inst_53_51_50_48_1_3_tsni(k, t) {
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
        return lookup_inst_53_51_50_48_1_3_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myReturn_inst_53_51_50_48_1_2_tsni = function myReturn_inst_53_51_50_48_1_2_tsni(a) {
  let lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = a;
    arr = (f) => {
      let first1, first0, s_, a1, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      s_ = first0;
      a1 = first1;
      tmp = runtime.safeCall(f(a1));
      return lambda.myRunState(tmp, s_)
    };
    return arr
  });
  _deforest_MyState_r = lambda2;
  return (s) => {
    let param0, f;
    param0 = _deforest_MyState_r;
    f = param0;
    return runtime.safeCall(f(s))
  }
};
myBind_inst_53_51_50_48_1_4_tsni = function myBind_inst_53_51_50_48_1_4_tsni(m, f) {
  let tmp, lambda2, _deforest_MyState_r;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_1_4_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  _deforest_MyState_r = tmp;
  return (s) => {
    let param0, f1;
    param0 = _deforest_MyState_r;
    f1 = param0;
    return runtime.safeCall(f1(s))
  }
};
pp_inst_53_51_50_47_tsni = function pp_inst_53_51_50_47_tsni(t) {
  return ppn_inst_53_51_50_47_tsni(0, t)
};
ppn_inst_53_51_50_47_tsni = function ppn_inst_53_51_50_47_tsni(n, ter) {
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
    tmp3 = ppn_inst_53_51_50_47_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_53_51_50_47_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_53_51_50_47_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_53_51_50_47_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_53_51_50_47_tsni(2, b1);
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
    tmp18 = ppn_inst_53_51_50_47_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_53_51_50_47_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_53_51_50_47_tsni(0, b);
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
    tmp28 = ppn_inst_53_51_50_47_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_53_51_50_47_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_53_51_50_47_tsni = function ppenv_inst_53_51_50_47_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_53_51_50_47_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_53_51_50_47_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_53_51_50_47_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_53_51_50_47_34_tsni = function flatMap_inst_53_51_50_47_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_53_51_50_47_34_tsni(f, t);
    return append_inst_53_51_50_47_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_53_51_50_47_34_35_tsni = function append_inst_53_51_50_47_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_53_51_50_47_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_53_51_50_47_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pp_inst_53_51_50_46_tsni = function pp_inst_53_51_50_46_tsni(t) {
  return ppn_inst_53_51_50_46_tsni(0, t)
};
ppn_inst_53_51_50_46_tsni = function ppn_inst_53_51_50_46_tsni(n, ter) {
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
    tmp3 = ppn_inst_53_51_50_46_tsni(tmp2, t1);
    tmp4 = NofibPrelude.append(tmp1, tmp3);
    tmp5 = NofibPrelude.append(v, tmp4);
    tmp6 = NofibPrelude.Cons("@", tmp5);
    return lambda.bracket(n, 0, tmp6)
  } else if (ter instanceof lambda.Add.class) {
    param0 = ter.a;
    param1 = ter.b;
    a2 = param0;
    b2 = param1;
    tmp7 = ppn_inst_53_51_50_46_tsni(1, a2);
    tmp8 = NofibPrelude.nofibStringToList(" + ");
    tmp9 = ppn_inst_53_51_50_46_tsni(1, b2);
    tmp10 = NofibPrelude.append(tmp8, tmp9);
    tmp11 = NofibPrelude.append(tmp7, tmp10);
    return lambda.bracket(n, 1, tmp11)
  } else if (ter instanceof lambda.App.class) {
    param0 = ter.a;
    param1 = ter.b;
    a1 = param0;
    b1 = param1;
    tmp12 = ppn_inst_53_51_50_46_tsni(2, a1);
    tmp13 = NofibPrelude.nofibStringToList(" ");
    tmp14 = ppn_inst_53_51_50_46_tsni(2, b1);
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
    tmp18 = ppn_inst_53_51_50_46_tsni(0, c);
    tmp19 = NofibPrelude.nofibStringToList(" THEN ");
    tmp20 = ppn_inst_53_51_50_46_tsni(0, a);
    tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
    tmp22 = ppn_inst_53_51_50_46_tsni(0, b);
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
    tmp28 = ppn_inst_53_51_50_46_tsni(3, t);
    tmp29 = NofibPrelude.nofibStringToList("::");
    tmp30 = ppenv_inst_53_51_50_46_tsni(e);
    tmp31 = NofibPrelude.append(tmp29, tmp30);
    tmp32 = NofibPrelude.append(tmp28, tmp31);
    return lambda.bracket(n, 0, tmp32)
  } else {
    throw new globalThis.Error("match error");
  }
};
ppenv_inst_53_51_50_46_tsni = function ppenv_inst_53_51_50_46_tsni(env) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda2;
  tmp = NofibPrelude.nofibStringToList("[");
  lambda2 = (undefined, function (caseScrut) {
    let first1, first0, v, t, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      v = first0;
      t = first1;
      tmp5 = NofibPrelude.nofibStringToList("=");
      tmp6 = pp_inst_53_51_50_46_tsni(t);
      tmp7 = NofibPrelude.nofibStringToList(", ");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp5, tmp8);
      return NofibPrelude.append(v, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp1 = lambda2;
  tmp2 = flatMap_inst_53_51_50_46_34_tsni(tmp1, env);
  tmp3 = NofibPrelude.nofibStringToList("]");
  tmp4 = append_inst_53_51_50_46_65_tsni(tmp2, tmp3);
  return NofibPrelude.append(tmp, tmp4)
};
flatMap_inst_53_51_50_46_34_tsni = function flatMap_inst_53_51_50_46_34_tsni(f, ls) {
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
    tmp1 = flatMap_inst_53_51_50_46_34_tsni(f, t);
    return append_inst_53_51_50_46_34_35_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_53_51_50_46_34_35_tsni = function append_inst_53_51_50_46_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_53_51_50_46_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_53_51_50_46_65_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
myRunState_inst_0_1_4_54_tsni = function myRunState_inst_0_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_0_1_55_tsni = function myMaybe_inst_0_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_0_5_56_tsni = function myRunState_inst_0_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_0_57_tsni = function myBind_inst_0_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_0_57_54_tsni = function myRunState_inst_0_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_0_7_54_tsni = function myRunState_inst_0_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_0_58_tsni = function myBind_inst_0_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_0_58_54_tsni = function myRunState_inst_0_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_0_59_tsni = function myBind_inst_0_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_0_59_54_tsni = function myRunState_inst_0_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_0_9_12_54_tsni = function myRunState_inst_0_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_0_13_60_tsni = function myEvalState_inst_0_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_0_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_0_13_60_61_tsni = function myRunState_inst_0_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_0_14_54_tsni = function myRunState_inst_0_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_0_62_tsni = function myBind_inst_0_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_0_62_54_tsni = function myRunState_inst_0_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_0_63_tsni = function myBind_inst_0_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_0_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_0_63_54_tsni = function myRunState_inst_0_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_16_1_4_54_tsni = function myRunState_inst_16_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_16_1_55_tsni = function myMaybe_inst_16_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_16_5_56_tsni = function myRunState_inst_16_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_57_tsni = function myBind_inst_16_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_16_57_54_tsni = function myRunState_inst_16_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_16_7_54_tsni = function myRunState_inst_16_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_58_tsni = function myBind_inst_16_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_16_58_54_tsni = function myRunState_inst_16_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_59_tsni = function myBind_inst_16_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_16_59_54_tsni = function myRunState_inst_16_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_16_9_12_54_tsni = function myRunState_inst_16_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_16_13_60_tsni = function myEvalState_inst_16_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_16_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_16_13_60_61_tsni = function myRunState_inst_16_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_16_14_54_tsni = function myRunState_inst_16_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_62_tsni = function myBind_inst_16_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_16_62_54_tsni = function myRunState_inst_16_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_16_63_tsni = function myBind_inst_16_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_16_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_16_63_54_tsni = function myRunState_inst_16_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_17_1_4_54_tsni = function myRunState_inst_17_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_17_1_55_tsni = function myMaybe_inst_17_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_17_5_56_tsni = function myRunState_inst_17_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_57_tsni = function myBind_inst_17_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_17_57_54_tsni = function myRunState_inst_17_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_17_7_54_tsni = function myRunState_inst_17_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_58_tsni = function myBind_inst_17_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_17_58_54_tsni = function myRunState_inst_17_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_59_tsni = function myBind_inst_17_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_17_59_54_tsni = function myRunState_inst_17_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_17_9_12_54_tsni = function myRunState_inst_17_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_17_13_60_tsni = function myEvalState_inst_17_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_17_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_17_13_60_61_tsni = function myRunState_inst_17_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_17_14_54_tsni = function myRunState_inst_17_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_62_tsni = function myBind_inst_17_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_17_62_54_tsni = function myRunState_inst_17_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_17_63_tsni = function myBind_inst_17_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_17_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_17_63_54_tsni = function myRunState_inst_17_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_18_1_4_54_tsni = function myRunState_inst_18_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_18_1_55_tsni = function myMaybe_inst_18_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_18_5_56_tsni = function myRunState_inst_18_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_57_tsni = function myBind_inst_18_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_18_57_54_tsni = function myRunState_inst_18_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_18_7_54_tsni = function myRunState_inst_18_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_58_tsni = function myBind_inst_18_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_18_58_54_tsni = function myRunState_inst_18_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_59_tsni = function myBind_inst_18_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_18_59_54_tsni = function myRunState_inst_18_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_18_9_12_54_tsni = function myRunState_inst_18_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_18_13_60_tsni = function myEvalState_inst_18_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_18_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_18_13_60_61_tsni = function myRunState_inst_18_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_18_14_54_tsni = function myRunState_inst_18_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_62_tsni = function myBind_inst_18_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_18_62_54_tsni = function myRunState_inst_18_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_18_63_tsni = function myBind_inst_18_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_18_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_18_63_54_tsni = function myRunState_inst_18_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_19_1_4_54_tsni = function myRunState_inst_19_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_19_1_55_tsni = function myMaybe_inst_19_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_19_5_56_tsni = function myRunState_inst_19_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_57_tsni = function myBind_inst_19_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_19_57_54_tsni = function myRunState_inst_19_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_19_7_54_tsni = function myRunState_inst_19_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_58_tsni = function myBind_inst_19_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_19_58_54_tsni = function myRunState_inst_19_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_59_tsni = function myBind_inst_19_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_19_59_54_tsni = function myRunState_inst_19_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_19_9_12_54_tsni = function myRunState_inst_19_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_19_13_60_tsni = function myEvalState_inst_19_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_19_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_19_13_60_61_tsni = function myRunState_inst_19_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_19_14_54_tsni = function myRunState_inst_19_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_62_tsni = function myBind_inst_19_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_19_62_54_tsni = function myRunState_inst_19_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_19_63_tsni = function myBind_inst_19_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_19_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_19_63_54_tsni = function myRunState_inst_19_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_20_1_4_54_tsni = function myRunState_inst_20_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_20_1_55_tsni = function myMaybe_inst_20_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_20_5_56_tsni = function myRunState_inst_20_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_57_tsni = function myBind_inst_20_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_20_57_54_tsni = function myRunState_inst_20_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_20_7_54_tsni = function myRunState_inst_20_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_58_tsni = function myBind_inst_20_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_20_58_54_tsni = function myRunState_inst_20_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_59_tsni = function myBind_inst_20_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_20_59_54_tsni = function myRunState_inst_20_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_20_9_12_54_tsni = function myRunState_inst_20_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_20_13_60_tsni = function myEvalState_inst_20_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_20_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_20_13_60_61_tsni = function myRunState_inst_20_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_20_14_54_tsni = function myRunState_inst_20_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_62_tsni = function myBind_inst_20_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_20_62_54_tsni = function myRunState_inst_20_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_20_63_tsni = function myBind_inst_20_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_20_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_20_63_54_tsni = function myRunState_inst_20_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_21_64_tsni = function myMaybe_inst_21_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_23_64_tsni = function myMaybe_inst_23_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_24_64_tsni = function myMaybe_inst_24_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_25_64_tsni = function myMaybe_inst_25_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_26_64_tsni = function myMaybe_inst_26_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_27_64_tsni = function myMaybe_inst_27_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_28_64_tsni = function myMaybe_inst_28_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_29_64_tsni = function myMaybe_inst_29_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_30_64_tsni = function myMaybe_inst_30_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_64_tsni = function myMaybe_inst_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_31_64_tsni = function myMaybe_inst_31_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_32_64_tsni = function myMaybe_inst_32_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
append_inst_33_65_tsni = function append_inst_33_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_36_65_tsni = function append_inst_36_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_37_65_tsni = function append_inst_37_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_38_65_tsni = function append_inst_38_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_65_tsni = function append_inst_39_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_65_tsni = function append_inst_40_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_41_65_tsni = function append_inst_41_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_65_tsni = function append_inst_42_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_43_65_tsni = function append_inst_43_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_44_65_tsni = function append_inst_44_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_45_65_tsni = function append_inst_45_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_65_tsni = function append_inst_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_46_65_tsni = function append_inst_46_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_47_65_tsni = function append_inst_47_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myRunState_inst_48_1_4_54_tsni = function myRunState_inst_48_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_48_1_55_tsni = function myMaybe_inst_48_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_48_5_56_tsni = function myRunState_inst_48_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_48_57_tsni = function myBind_inst_48_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_48_57_54_tsni = function myRunState_inst_48_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_48_7_54_tsni = function myRunState_inst_48_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_48_58_tsni = function myBind_inst_48_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_48_58_54_tsni = function myRunState_inst_48_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_48_59_tsni = function myBind_inst_48_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_48_59_54_tsni = function myRunState_inst_48_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_48_9_12_54_tsni = function myRunState_inst_48_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_48_13_60_tsni = function myEvalState_inst_48_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_48_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_48_13_60_61_tsni = function myRunState_inst_48_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_48_14_54_tsni = function myRunState_inst_48_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_48_62_tsni = function myBind_inst_48_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_48_62_54_tsni = function myRunState_inst_48_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_48_63_tsni = function myBind_inst_48_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_48_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_48_63_54_tsni = function myRunState_inst_48_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_49_64_tsni = function myMaybe_inst_49_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_50_48_63_tsni = function myBind_inst_50_48_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_50_48_63_54_tsni = function myRunState_inst_50_48_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_50_48_62_tsni = function myBind_inst_50_48_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_50_48_62_54_tsni = function myRunState_inst_50_48_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_50_48_14_54_tsni = function myRunState_inst_50_48_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_50_48_9_12_54_tsni = function myRunState_inst_50_48_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_50_48_13_60_tsni = function myEvalState_inst_50_48_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_50_48_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_50_48_13_60_61_tsni = function myRunState_inst_50_48_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_50_48_59_tsni = function myBind_inst_50_48_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_50_48_59_54_tsni = function myRunState_inst_50_48_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_50_48_58_tsni = function myBind_inst_50_48_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_50_48_58_54_tsni = function myRunState_inst_50_48_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_50_48_7_54_tsni = function myRunState_inst_50_48_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_50_48_57_tsni = function myBind_inst_50_48_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_50_48_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_50_48_57_54_tsni = function myRunState_inst_50_48_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_50_48_1_55_tsni = function myMaybe_inst_50_48_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_50_48_1_4_54_tsni = function myRunState_inst_50_48_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_50_48_5_56_tsni = function myRunState_inst_50_48_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_50_47_65_tsni = function append_inst_50_47_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_50_46_65_tsni = function append_inst_50_46_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_50_46_65_tsni = function append_inst_51_50_46_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_50_47_65_tsni = function append_inst_51_50_47_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
myRunState_inst_51_50_48_1_4_54_tsni = function myRunState_inst_51_50_48_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_51_50_48_1_55_tsni = function myMaybe_inst_51_50_48_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_51_50_48_5_56_tsni = function myRunState_inst_51_50_48_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_51_50_48_57_tsni = function myBind_inst_51_50_48_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_51_50_48_57_54_tsni = function myRunState_inst_51_50_48_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_51_50_48_7_54_tsni = function myRunState_inst_51_50_48_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_51_50_48_58_tsni = function myBind_inst_51_50_48_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_51_50_48_58_54_tsni = function myRunState_inst_51_50_48_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_51_50_48_59_tsni = function myBind_inst_51_50_48_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_51_50_48_59_54_tsni = function myRunState_inst_51_50_48_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_51_50_48_9_12_54_tsni = function myRunState_inst_51_50_48_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_51_50_48_13_60_tsni = function myEvalState_inst_51_50_48_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_51_50_48_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_51_50_48_13_60_61_tsni = function myRunState_inst_51_50_48_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_51_50_48_14_54_tsni = function myRunState_inst_51_50_48_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_51_50_48_62_tsni = function myBind_inst_51_50_48_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_51_50_48_62_54_tsni = function myRunState_inst_51_50_48_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_51_50_48_63_tsni = function myBind_inst_51_50_48_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_51_50_48_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_51_50_48_63_54_tsni = function myRunState_inst_51_50_48_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_52_49_64_tsni = function myMaybe_inst_52_49_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myMaybe_inst_53_52_49_64_tsni = function myMaybe_inst_53_52_49_64_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myBind_inst_53_51_50_48_63_tsni = function myBind_inst_53_51_50_48_63_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_63_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_53_51_50_48_63_54_tsni = function myRunState_inst_53_51_50_48_63_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_53_51_50_48_62_tsni = function myBind_inst_53_51_50_48_62_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_62_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_53_51_50_48_62_54_tsni = function myRunState_inst_53_51_50_48_62_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_53_51_50_48_14_54_tsni = function myRunState_inst_53_51_50_48_14_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_53_51_50_48_9_12_54_tsni = function myRunState_inst_53_51_50_48_9_12_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myEvalState_inst_53_51_50_48_13_60_tsni = function myEvalState_inst_53_51_50_48_13_60_tsni(m, s) {
  let scrut;
  scrut = myRunState_inst_53_51_50_48_13_60_61_tsni(m, s);
  return runtime.safeCall(scrut())
};
myRunState_inst_53_51_50_48_13_60_61_tsni = function myRunState_inst_53_51_50_48_13_60_61_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_53_51_50_48_59_tsni = function myBind_inst_53_51_50_48_59_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_59_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_53_51_50_48_59_54_tsni = function myRunState_inst_53_51_50_48_59_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_53_51_50_48_58_tsni = function myBind_inst_53_51_50_48_58_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_58_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_53_51_50_48_58_54_tsni = function myRunState_inst_53_51_50_48_58_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_53_51_50_48_7_54_tsni = function myRunState_inst_53_51_50_48_7_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myBind_inst_53_51_50_48_57_tsni = function myBind_inst_53_51_50_48_57_tsni(m, f) {
  let tmp, lambda2;
  lambda2 = (undefined, function (s) {
    let scrut, first1, first0, s_, a, tmp1;
    scrut = lambda.myRunState(m, s);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      s_ = first0;
      a = first1;
      tmp1 = runtime.safeCall(f(a));
      return myRunState_inst_53_51_50_48_57_54_tsni(tmp1, s_)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda2;
  return runtime.safeCall(lambda.MyState(tmp))
};
myRunState_inst_53_51_50_48_57_54_tsni = function myRunState_inst_53_51_50_48_57_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myMaybe_inst_53_51_50_48_1_55_tsni = function myMaybe_inst_53_51_50_48_1_55_tsni(d, f, x) {
  return runtime.safeCall(x(f))
};
myRunState_inst_53_51_50_48_1_4_54_tsni = function myRunState_inst_53_51_50_48_1_4_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
myRunState_inst_53_51_50_48_5_56_tsni = function myRunState_inst_53_51_50_48_5_56_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_53_51_50_47_65_tsni = function append_inst_53_51_50_47_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_51_50_46_65_tsni = function append_inst_53_51_50_46_65_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
(class lambda {
  static {
    lambda1 = lambda;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, lambda2;
    this.MyState = function MyState(r1) {
      return new MyState.class(r1);
    };
    this.MyState.class = class MyState {
      constructor(r) {
        this.r = r;
      }
      toString() { return "MyState(" + runtime.render(this.r) + ")"; }
    };
    lambda2 = (undefined, function (s) {
      let arr;
      arr = [
        s,
        s
      ];
      return arr
    });
    tmp = runtime.safeCall(lambda.MyState(lambda2));
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
    let tmp, lambda2;
    lambda2 = (undefined, function (s1) {
      let scrut, first1, first0, s_, a, tmp1;
      scrut = lambda.myRunState(m1, s1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        s_ = first0;
        a = first1;
        tmp1 = runtime.safeCall(f(a));
        return lambda.myRunState(tmp1, s_)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda2;
    return runtime.safeCall(lambda.MyState(tmp))
  } 
  static myReturn(a) {
    let lambda2;
    lambda2 = (undefined, function (s1) {
      let arr;
      arr = [
        s1,
        a
      ];
      return arr
    });
    return runtime.safeCall(lambda.MyState(lambda2))
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
    let lookup2, lambda2;
    lookup2 = function lookup2(env) {
      let tmp, lambda3, lambda4;
      tmp = lambda.lookup(v, env);
      lambda3 = (undefined, function (dummy) {
        throw globalThis.Error("undefined");
      });
      lambda4 = (undefined, function (x1) {
        return x1
      });
      return lambda.myMaybe(lambda3, lambda4, tmp)
    };
    lambda2 = (undefined, function (env) {
      let tmp;
      tmp = lookup2(env);
      return lambda.myReturn(tmp)
    });
    return lambda.myBind(lambda.myGet, lambda2)
  } 
  static withEnv(tmp, m3) {
    let tmp1;
    tmp1 = lambda.myEvalState(m3, tmp);
    return lambda.myReturn(tmp1)
  } 
  static pushVar(v1, t1, m4) {
    let tmp1, lambda2;
    lambda2 = (undefined, function (env) {
      let arr, tmp2;
      arr = [
        v1,
        t1
      ];
      tmp2 = NofibPrelude.Cons(arr, env);
      return lambda.withEnv(tmp2, m4)
    });
    tmp1 = lambda2;
    return lambda.myBind(lambda.myGet, tmp1)
  } 
  static traverseTerm(t2) {
    return eval_inst_0_tsni(t2)
  } 
  static traverseCon(t3) {
    let tmp1, tmp2, lambda2;
    tmp1 = traverseTerm_inst_16_tsni(t3);
    lambda2 = (undefined, function (_t) {
      let param0, c;
      if (_t instanceof lambda.Con.class) {
        param0 = _t.i;
        c = param0;
        return lambda.myReturn(c)
      } else {
        throw globalThis.Error("Not a Con");
      }
    });
    tmp2 = lambda2;
    return lambda.myBind(tmp1, tmp2)
  } 
  static apply(t4, a3) {
    let param0, param1, param01, param11, x1, b2, e, tmp1, lambda2;
    if (t4 instanceof lambda.Thunk.class) {
      param0 = t4.t;
      param1 = t4.e;
      if (param0 instanceof lambda.Lam.class) {
        param01 = param0.s;
        param11 = param0.t;
        x1 = param01;
        b2 = param11;
        e = param1;
        lambda2 = (undefined, function (orig) {
          let tmp2, tmp3, tmp4;
          tmp2 = lambda.Thunk(a3, orig);
          tmp3 = lambda.traverseTerm(b2);
          tmp4 = lambda.pushVar(x1, tmp2, tmp3);
          return lambda.withEnv(e, tmp4)
        });
        tmp1 = lambda2;
        return lambda.myBind(lambda.myGet, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static eval(ter) {
    let param0, i, param1, param2, c, a4, b2, u, v2, x1, b3, t5, e, u1, v3, x2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7;
    if (ter instanceof lambda.Var.class) {
      param0 = ter.s;
      x2 = param0;
      lambda2 = (undefined, function (e1) {
        let tmp8, lambda8;
        tmp8 = lambda.lookupVar(x2);
        lambda8 = (undefined, function (t6) {
          return lambda.traverseTerm(t6)
        });
        return lambda.myBind(tmp8, lambda8)
      });
      return lambda.myBind(lambda.myGet, lambda2)
    } else if (ter instanceof lambda.Add.class) {
      param0 = ter.a;
      param1 = ter.b;
      u1 = param0;
      v3 = param1;
      tmp1 = traverseCon_inst_20_tsni(u1);
      lambda3 = (undefined, function (u_) {
        let tmp8, lambda8;
        tmp8 = lambda.traverseCon(v3);
        lambda8 = (undefined, function (v_) {
          let tmp9, tmp10;
          tmp9 = u_ + v_;
          tmp10 = runtime.safeCall(lambda.Con(tmp9));
          return lambda.myReturn(tmp10)
        });
        return lambda.myBind(tmp8, lambda8)
      });
      return lambda.myBind(tmp1, lambda3)
    } else if (ter instanceof lambda.Thunk.class) {
      param0 = ter.t;
      param1 = ter.e;
      t5 = param0;
      e = param1;
      tmp2 = traverseTerm_inst_19_tsni(t5);
      return lambda.withEnv(e, tmp2)
    } else if (ter instanceof lambda.Lam.class) {
      param0 = ter.s;
      param1 = ter.t;
      x1 = param0;
      b3 = param1;
      lambda4 = (undefined, function (env) {
        let tmp8, tmp9;
        tmp8 = lambda.Lam(x1, b3);
        tmp9 = lambda.Thunk(tmp8, env);
        return lambda.myReturn(tmp9)
      });
      tmp3 = lambda4;
      return lambda.myBind(lambda.myGet, tmp3)
    } else if (ter instanceof lambda.App.class) {
      param0 = ter.a;
      param1 = ter.b;
      u = param0;
      v2 = param1;
      tmp4 = traverseTerm_inst_18_tsni(u);
      lambda5 = (undefined, function (u_) {
        return lambda.apply(u_, v2)
      });
      return lambda.myBind(tmp4, lambda5)
    } else if (ter instanceof lambda.IfZero.class) {
      param0 = ter.a;
      param1 = ter.b;
      param2 = ter.c;
      c = param0;
      a4 = param1;
      b2 = param2;
      tmp5 = traverseTerm_inst_17_tsni(c);
      lambda6 = (undefined, function (vall) {
        let scrut, tmp8;
        tmp8 = runtime.safeCall(lambda.Con(0));
        scrut = lambda.eqTerm(vall, tmp8);
        if (scrut === true) {
          return lambda.traverseTerm(a4)
        } else {
          return lambda.traverseTerm(b2)
        }
      });
      tmp6 = lambda6;
      return lambda.myBind(tmp5, tmp6)
    } else if (ter instanceof lambda.Con.class) {
      param0 = ter.i;
      i = param0;
      tmp7 = runtime.safeCall(lambda.Con(i));
      return lambda.myReturn(tmp7)
    } else if (ter instanceof lambda.Incr.class) {
      lambda7 = (undefined, function (_dummy) {
        let tmp8;
        tmp8 = runtime.safeCall(lambda.Con(0));
        return lambda.myReturn(tmp8)
      });
      return lambda.myBind(lambda.incr, lambda7)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static simpleEval(env, ter1) {
    let param0, param1, t5, e, param2, c, a4, b2, val_, scrut, u, v2, u_, x1, b3, u1, v3, u_1, v_, e1, v4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda2, lambda3;
    if (ter1 instanceof lambda.Var.class) {
      param0 = ter1.s;
      v4 = param0;
      tmp1 = lookup_inst_22_tsni(v4, env);
      lambda2 = (undefined, function (dummy) {
        throw globalThis.Error("undefined var");
      });
      lambda3 = (undefined, function (x2) {
        return x2
      });
      tmp2 = myMaybe_inst_64_tsni(lambda2, lambda3, tmp1);
      return simpleEval_inst_30_tsni(env, tmp2)
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
      tmp3 = simpleEvalCon_inst_29_tsni(env, u1);
      u_1 = tmp3;
      tmp4 = simpleEvalCon_inst_28_tsni(env, v3);
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
      tmp7 = simpleEval_inst_27_tsni(env, u);
      u_ = tmp7;
      return simpleApply_inst_26_tsni(env, u_, v2)
    } else if (ter1 instanceof lambda.IfZero.class) {
      param0 = ter1.a;
      param1 = ter1.b;
      param2 = ter1.c;
      c = param0;
      a4 = param1;
      b2 = param2;
      tmp8 = simpleEval_inst_25_tsni(env, c);
      val_ = tmp8;
      tmp9 = runtime.safeCall(lambda.Con(0));
      scrut = lambda.eqTerm(val_, tmp9);
      if (scrut === true) {
        return simpleEval_inst_24_tsni(env, a4)
      } else {
        return simpleEval_inst_23_tsni(env, b2)
      }
    } else if (ter1 instanceof lambda.Thunk.class) {
      param0 = ter1.t;
      param1 = ter1.e;
      t5 = param0;
      e = param1;
      return simpleEval_inst_21_tsni(e, t5)
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
        return simpleEval_inst_31_tsni(tmp2, b2)
      } else {
        throw globalThis.Error("bad application");
      }
    } else {
      throw globalThis.Error("bad application");
    }
  } 
  static simpleEvalCon(env2, e) {
    let e_, param0, c, tmp1;
    tmp1 = simpleEval_inst_32_tsni(env2, e);
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
      tmp4 = ppn_inst_44_tsni(tmp3, t8);
      tmp5 = NofibPrelude.append(tmp2, tmp4);
      tmp6 = NofibPrelude.append(v2, tmp5);
      tmp7 = NofibPrelude.Cons("@", tmp6);
      return lambda.bracket(n, 0, tmp7)
    } else if (ter2 instanceof lambda.Add.class) {
      param0 = ter2.a;
      param1 = ter2.b;
      a7 = param0;
      b4 = param1;
      tmp8 = ppn_inst_43_tsni(1, a7);
      tmp9 = NofibPrelude.nofibStringToList(" + ");
      tmp10 = ppn_inst_42_tsni(1, b4);
      tmp11 = NofibPrelude.append(tmp9, tmp10);
      tmp12 = NofibPrelude.append(tmp8, tmp11);
      return lambda.bracket(n, 1, tmp12)
    } else if (ter2 instanceof lambda.App.class) {
      param0 = ter2.a;
      param1 = ter2.b;
      a6 = param0;
      b3 = param1;
      tmp13 = ppn_inst_41_tsni(2, a6);
      tmp14 = NofibPrelude.nofibStringToList(" ");
      tmp15 = ppn_inst_40_tsni(2, b3);
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
      tmp19 = ppn_inst_39_tsni(0, c);
      tmp20 = NofibPrelude.nofibStringToList(" THEN ");
      tmp21 = ppn_inst_38_tsni(0, a5);
      tmp22 = NofibPrelude.nofibStringToList(" ELSE ");
      tmp23 = ppn_inst_37_tsni(0, b2);
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
      tmp29 = ppn_inst_36_tsni(3, t7);
      tmp30 = NofibPrelude.nofibStringToList("::");
      tmp31 = ppenv_inst_33_tsni(e1);
      tmp32 = NofibPrelude.append(tmp30, tmp31);
      tmp33 = NofibPrelude.append(tmp29, tmp32);
      return lambda.bracket(n, 0, tmp33)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pp(t7) {
    return ppn_inst_45_tsni(0, t7)
  } 
  static ppenv(env3) {
    let tmp1, tmp2, tmp3, tmp4, tmp5, lambda2;
    tmp1 = NofibPrelude.nofibStringToList("[");
    lambda2 = (undefined, function (caseScrut) {
      let first1, first0, v2, t8, tmp6, tmp7, tmp8, tmp9, tmp10;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        v2 = first0;
        t8 = first1;
        tmp6 = NofibPrelude.nofibStringToList("=");
        tmp7 = lambda.pp(t8);
        tmp8 = NofibPrelude.nofibStringToList(", ");
        tmp9 = NofibPrelude.append(tmp7, tmp8);
        tmp10 = NofibPrelude.append(tmp6, tmp9);
        return NofibPrelude.append(v2, tmp10)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp2 = lambda2;
    tmp3 = flatMap_inst_34_tsni(tmp2, env3);
    tmp4 = NofibPrelude.nofibStringToList("]");
    tmp5 = append_inst_65_tsni(tmp3, tmp4);
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
    tmp1 = traverseTerm_inst_48_tsni(t9);
    tmp2 = lambda.myRunState(tmp1, NofibPrelude.Nil);
    envt2 = tmp2;
    if (globalThis.Array.isArray(envt2) && envt2.length === 2) {
      first0 = envt2[0];
      first1 = envt2[1];
      env4 = first0;
      t21 = first1;
      tmp3 = pp_inst_47_tsni(t21);
      tmp4 = NofibPrelude.nofibStringToList("  ");
      tmp5 = ppenv_inst_46_tsni(env4);
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
      tmp4 = simpleEval_inst_49_tsni(NofibPrelude.Nil, tmp3);
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
      return ev_inst_50_tsni(tmp3)
    }
  } 
  static testLambda_nofib(n1) {
    let tmp1, tmp2, tmp3, tmp4, arr;
    tmp1 = NofibPrelude.Cons(n1, NofibPrelude.Nil);
    tmp2 = mainSimple_inst_52_tsni(tmp1);
    tmp3 = NofibPrelude.Cons(n1, NofibPrelude.Nil);
    tmp4 = mainMonad_inst_51_tsni(tmp3);
    arr = [
      tmp2,
      tmp4
    ];
    return arr
  } 
  static main() {
    let tmp1;
    tmp1 = testLambda_nofib_inst_53_tsni(80);
    return runtime.safeCall(tmp1.toString())
  }
  static toString() { return "lambda"; }
});
let lambda = lambda1; export default lambda;
