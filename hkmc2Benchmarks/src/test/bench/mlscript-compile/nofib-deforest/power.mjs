const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let rs, deriv1, int1, int11, qs, power1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda42, lambda43, lambda44, lambda45, lambda46, lambda47, lambda48, lambda49, lambda50, lambda51, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, rs$, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, qs$, lambda$29, lambda$30, qs$_inst_0_tsni, lambda_inst_0_tsni, lambda_inst_0_1_tsni, lambda$_inst_0_1_2_tsni, divPs_inst_0_3_tsni, lambda_inst_0_3_tsni, lambda$_inst_0_3_tsni, dotMult_inst_0_3_4_tsni, lambda_inst_0_3_4_tsni, lambda$_inst_0_3_4_tsni, dotMult_inst_0_3_5_tsni, lambda_inst_0_3_5_tsni, lambda$_inst_0_3_5_tsni, dotMult_inst_0_3_6_tsni, lambda_inst_0_3_6_tsni, lambda$_inst_0_3_6_tsni, qs$_inst_7_tsni, lambda$_inst_7_tsni, lambda_inst_7_1_tsni, lambda$_inst_7_1_2_tsni, divPs_inst_7_3_tsni, lambda_inst_7_3_tsni, lambda$_inst_7_3_tsni, dotMult_inst_7_3_4_tsni, lambda_inst_7_3_4_tsni, lambda$_inst_7_3_4_tsni, dotMult_inst_7_3_5_tsni, lambda_inst_7_3_5_tsni, lambda$_inst_7_3_5_tsni, dotMult_inst_7_3_6_tsni, lambda_inst_7_3_6_tsni, lambda$_inst_7_3_6_tsni, lambda_inst_8_tsni, lambda$_inst_8_tsni, lambda_inst_8_1_tsni, lambda$_inst_8_1_2_tsni, divPs_inst_8_3_tsni, lambda_inst_8_3_tsni, lambda$_inst_8_3_tsni, dotMult_inst_8_3_4_tsni, lambda_inst_8_3_4_tsni, lambda$_inst_8_3_4_tsni, dotMult_inst_8_3_5_tsni, lambda_inst_8_3_5_tsni, lambda$_inst_8_3_5_tsni, dotMult_inst_8_3_6_tsni, lambda_inst_8_3_6_tsni, lambda$_inst_8_3_6_tsni, qs$_inst_9_10_tsni, lambda_inst_9_10_tsni, lambda$_inst_9_10_tsni, divPs_inst_9_10_3_tsni, lambda_inst_9_10_3_tsni, lambda$_inst_9_10_3_tsni, dotMult_inst_9_10_3_6_tsni, lambda_inst_9_10_3_6_tsni, lambda$_inst_9_10_3_6_tsni, dotMult_inst_9_10_3_5_tsni, lambda_inst_9_10_3_5_tsni, lambda$_inst_9_10_3_5_tsni, dotMult_inst_9_10_3_4_tsni, lambda_inst_9_10_3_4_tsni, lambda$_inst_9_10_3_4_tsni, lambda_inst_9_10_1_tsni, lambda$_inst_9_10_1_2_tsni, sqrtPs_inst_11_tsni, lambda_inst_11_tsni, qs$_inst_11_12_tsni, lambda_inst_11_12_tsni, lambda$_inst_11_12_tsni, divPs_inst_11_12_3_tsni, lambda_inst_11_12_3_tsni, lambda$_inst_11_12_3_tsni, dotMult_inst_11_12_3_6_tsni, lambda_inst_11_12_3_6_tsni, lambda$_inst_11_12_3_6_tsni, dotMult_inst_11_12_3_5_tsni, lambda_inst_11_12_3_5_tsni, lambda$_inst_11_12_3_5_tsni, dotMult_inst_11_12_3_4_tsni, lambda_inst_11_12_3_4_tsni, lambda$_inst_11_12_3_4_tsni, lambda_inst_11_12_1_tsni, lambda$_inst_11_12_1_2_tsni, sqrtPs_inst_13_tsni, lambda$_inst_13_tsni, qs$_inst_13_12_tsni, lambda_inst_13_12_tsni, lambda$_inst_13_12_tsni, divPs_inst_13_12_3_tsni, lambda_inst_13_12_3_tsni, lambda$_inst_13_12_3_tsni, dotMult_inst_13_12_3_6_tsni, lambda_inst_13_12_3_6_tsni, lambda$_inst_13_12_3_6_tsni, dotMult_inst_13_12_3_5_tsni, lambda_inst_13_12_3_5_tsni, lambda$_inst_13_12_3_5_tsni, dotMult_inst_13_12_3_4_tsni, lambda_inst_13_12_3_4_tsni, lambda$_inst_13_12_3_4_tsni, lambda_inst_13_12_1_tsni, lambda$_inst_13_12_1_2_tsni, rs$_inst_14_tsni, lambda_inst_14_tsni, divPs_inst_14_15_tsni, lambda_inst_14_15_tsni, lambda$_inst_14_15_tsni, dotMult_inst_14_15_4_tsni, lambda_inst_14_15_4_tsni, lambda$_inst_14_15_4_tsni, dotMult_inst_14_15_5_tsni, lambda_inst_14_15_5_tsni, lambda$_inst_14_15_5_tsni, dotMult_inst_14_15_6_tsni, lambda_inst_14_15_6_tsni, lambda$_inst_14_15_6_tsni, rs$_inst_16_tsni, lambda$_inst_16_tsni, divPs_inst_16_15_tsni, lambda_inst_16_15_tsni, lambda$_inst_16_15_tsni, dotMult_inst_16_15_4_tsni, lambda_inst_16_15_4_tsni, lambda$_inst_16_15_4_tsni, dotMult_inst_16_15_5_tsni, lambda_inst_16_15_5_tsni, lambda$_inst_16_15_5_tsni, dotMult_inst_16_15_6_tsni, lambda_inst_16_15_6_tsni, lambda$_inst_16_15_6_tsni, lambda_inst_17_tsni, lambda$_inst_17_tsni, divPs_inst_17_15_tsni, lambda_inst_17_15_tsni, lambda$_inst_17_15_tsni, dotMult_inst_17_15_4_tsni, lambda_inst_17_15_4_tsni, lambda$_inst_17_15_4_tsni, dotMult_inst_17_15_5_tsni, lambda_inst_17_15_5_tsni, lambda$_inst_17_15_5_tsni, dotMult_inst_17_15_6_tsni, lambda_inst_17_15_6_tsni, lambda$_inst_17_15_6_tsni, rs$_inst_18_19_tsni, lambda_inst_18_19_tsni, lambda$_inst_18_19_tsni, divPs_inst_18_19_15_tsni, lambda_inst_18_19_15_tsni, lambda$_inst_18_19_15_tsni, dotMult_inst_18_19_15_6_tsni, lambda_inst_18_19_15_6_tsni, lambda$_inst_18_19_15_6_tsni, dotMult_inst_18_19_15_5_tsni, lambda_inst_18_19_15_5_tsni, lambda$_inst_18_19_15_5_tsni, dotMult_inst_18_19_15_4_tsni, lambda_inst_18_19_15_4_tsni, lambda$_inst_18_19_15_4_tsni, rs$_inst_20_21_tsni, lambda_inst_20_21_tsni, lambda$_inst_20_21_tsni, divPs_inst_20_21_15_tsni, lambda_inst_20_21_15_tsni, lambda$_inst_20_21_15_tsni, dotMult_inst_20_21_15_6_tsni, lambda_inst_20_21_15_6_tsni, lambda$_inst_20_21_15_6_tsni, dotMult_inst_20_21_15_5_tsni, lambda_inst_20_21_15_5_tsni, lambda$_inst_20_21_15_5_tsni, dotMult_inst_20_21_15_4_tsni, lambda_inst_20_21_15_4_tsni, lambda$_inst_20_21_15_4_tsni, lambda$_inst_22_23_tsni, rs$_inst_22_23_21_tsni, lambda_inst_22_23_21_tsni, lambda$_inst_22_23_21_tsni, divPs_inst_22_23_21_15_tsni, lambda_inst_22_23_21_15_tsni, lambda$_inst_22_23_21_15_tsni, dotMult_inst_22_23_21_15_4_tsni, lambda_inst_22_23_21_15_4_tsni, lambda$_inst_22_23_21_15_4_tsni, dotMult_inst_22_23_21_15_5_tsni, lambda_inst_22_23_21_15_5_tsni, lambda$_inst_22_23_21_15_5_tsni, dotMult_inst_22_23_21_15_6_tsni, lambda_inst_22_23_21_15_6_tsni, lambda$_inst_22_23_21_15_6_tsni, divPs_inst_24_tsni, lambda_inst_24_tsni, dotMult_inst_24_6_tsni, lambda_inst_24_6_tsni, lambda$_inst_24_6_tsni, dotMult_inst_24_5_tsni, lambda_inst_24_5_tsni, lambda$_inst_24_5_tsni, dotMult_inst_24_4_tsni, lambda_inst_24_4_tsni, lambda$_inst_24_4_tsni, divPs_inst_25_tsni, lambda$_inst_25_tsni, dotMult_inst_25_6_tsni, lambda_inst_25_6_tsni, lambda$_inst_25_6_tsni, dotMult_inst_25_5_tsni, lambda_inst_25_5_tsni, lambda$_inst_25_5_tsni, dotMult_inst_25_4_tsni, lambda_inst_25_4_tsni, lambda$_inst_25_4_tsni, lambda_inst_26_tsni, lambda$_inst_26_tsni, dotMult_inst_26_6_tsni, lambda_inst_26_6_tsni, lambda$_inst_26_6_tsni, dotMult_inst_26_5_tsni, lambda_inst_26_5_tsni, lambda$_inst_26_5_tsni, dotMult_inst_26_4_tsni, lambda_inst_26_4_tsni, lambda$_inst_26_4_tsni, lambda_inst_27_28_tsni, lambda$_inst_27_28_23_tsni, rs$_inst_27_28_23_21_tsni, lambda_inst_27_28_23_21_tsni, lambda$_inst_27_28_23_21_tsni, divPs_inst_27_28_23_21_15_tsni, lambda_inst_27_28_23_21_15_tsni, lambda$_inst_27_28_23_21_15_tsni, dotMult_inst_27_28_23_21_15_6_tsni, lambda_inst_27_28_23_21_15_6_tsni, lambda$_inst_27_28_23_21_15_6_tsni, dotMult_inst_27_28_23_21_15_5_tsni, lambda_inst_27_28_23_21_15_5_tsni, lambda$_inst_27_28_23_21_15_5_tsni, dotMult_inst_27_28_23_21_15_4_tsni, lambda_inst_27_28_23_21_15_4_tsni, lambda$_inst_27_28_23_21_15_4_tsni, lambda_inst_29_tsni, lambda$_inst_29_tsni, qs$_inst_29_12_tsni, lambda_inst_29_12_tsni, lambda$_inst_29_12_tsni, divPs_inst_29_12_3_tsni, lambda_inst_29_12_3_tsni, lambda$_inst_29_12_3_tsni, dotMult_inst_29_12_3_6_tsni, lambda_inst_29_12_3_6_tsni, lambda$_inst_29_12_3_6_tsni, dotMult_inst_29_12_3_5_tsni, lambda_inst_29_12_3_5_tsni, lambda$_inst_29_12_3_5_tsni, dotMult_inst_29_12_3_4_tsni, lambda_inst_29_12_3_4_tsni, lambda$_inst_29_12_3_4_tsni, lambda_inst_29_12_1_tsni, lambda$_inst_29_12_1_2_tsni, integralLz_inst_30_31_tsni, lambda_inst_30_31_32_tsni, lambda$_inst_30_31_32_33_tsni, int1_inst_30_31_32_33_34_tsni, lambda_inst_30_31_32_33_34_tsni, lambda$_inst_30_31_32_33_34_tsni, integral_inst_30_35_tsni, lambda_inst_30_35_36_tsni, lambda$_inst_30_35_36_37_tsni, int1_inst_30_35_36_37_38_tsni, lambda_inst_30_35_36_37_38_tsni, lambda$_inst_30_35_36_37_38_tsni, integralLz_inst_39_40_tsni, lambda_inst_39_40_32_tsni, lambda$_inst_39_40_32_33_tsni, int1_inst_39_40_32_33_34_tsni, lambda_inst_39_40_32_33_34_tsni, lambda$_inst_39_40_32_33_34_tsni, sinx_inst_41_42_tsni, integralLz_inst_41_42_40_tsni, lambda_inst_41_42_40_32_tsni, lambda$_inst_41_42_40_32_33_tsni, int1_inst_41_42_40_32_33_34_tsni, lambda_inst_41_42_40_32_33_34_tsni, lambda$_inst_41_42_40_32_33_34_tsni, cosx_inst_41_43_tsni, integral_inst_41_43_35_tsni, lambda_inst_41_43_35_36_tsni, lambda$_inst_41_43_35_36_37_tsni, int1_inst_41_43_35_36_37_38_tsni, lambda_inst_41_43_35_36_37_38_tsni, lambda$_inst_41_43_35_36_37_38_tsni, integralLz_inst_41_43_31_tsni, lambda_inst_41_43_31_32_tsni, lambda$_inst_41_43_31_32_33_tsni, int1_inst_41_43_31_32_33_34_tsni, lambda_inst_41_43_31_32_33_34_tsni, lambda$_inst_41_43_31_32_33_34_tsni, sqrtPs_inst_41_44_tsni, lambda_inst_41_44_tsni, lambda$_inst_41_44_tsni, qs$_inst_41_44_12_tsni, lambda_inst_41_44_12_tsni, lambda$_inst_41_44_12_tsni, lambda_inst_41_44_12_1_tsni, lambda$_inst_41_44_12_1_2_tsni, divPs_inst_41_44_12_3_tsni, lambda_inst_41_44_12_3_tsni, lambda$_inst_41_44_12_3_tsni, dotMult_inst_41_44_12_3_4_tsni, lambda_inst_41_44_12_3_4_tsni, lambda$_inst_41_44_12_3_4_tsni, dotMult_inst_41_44_12_3_5_tsni, lambda_inst_41_44_12_3_5_tsni, lambda$_inst_41_44_12_3_5_tsni, dotMult_inst_41_44_12_3_6_tsni, lambda_inst_41_44_12_3_6_tsni, lambda$_inst_41_44_12_3_6_tsni, sinx_inst_41_45_tsni, integralLz_inst_41_45_40_tsni, lambda_inst_41_45_40_32_tsni, lambda$_inst_41_45_40_32_33_tsni, int1_inst_41_45_40_32_33_34_tsni, lambda_inst_41_45_40_32_33_34_tsni, lambda$_inst_41_45_40_32_33_34_tsni, cosx_inst_41_46_tsni, integral_inst_41_46_35_tsni, lambda_inst_41_46_35_36_tsni, lambda$_inst_41_46_35_36_37_tsni, int1_inst_41_46_35_36_37_38_tsni, lambda_inst_41_46_35_36_37_38_tsni, lambda$_inst_41_46_35_36_37_38_tsni, integralLz_inst_41_46_31_tsni, lambda_inst_41_46_31_32_tsni, lambda$_inst_41_46_31_32_33_tsni, int1_inst_41_46_31_32_33_34_tsni, lambda_inst_41_46_31_32_33_34_tsni, lambda$_inst_41_46_31_32_33_34_tsni, divPs_inst_41_47_tsni, lambda_inst_41_47_tsni, lambda$_inst_41_47_tsni, dotMult_inst_41_47_4_tsni, lambda_inst_41_47_4_tsni, lambda$_inst_41_47_4_tsni, dotMult_inst_41_47_5_tsni, lambda_inst_41_47_5_tsni, lambda$_inst_41_47_5_tsni, dotMult_inst_41_47_6_tsni, lambda_inst_41_47_6_tsni, lambda$_inst_41_47_6_tsni, divPs_inst_41_48_tsni, lambda_inst_41_48_tsni, lambda$_inst_41_48_tsni, dotMult_inst_41_48_4_tsni, lambda_inst_41_48_4_tsni, lambda$_inst_41_48_4_tsni, dotMult_inst_41_48_5_tsni, lambda_inst_41_48_5_tsni, lambda$_inst_41_48_5_tsni, dotMult_inst_41_48_6_tsni, lambda_inst_41_48_6_tsni, lambda$_inst_41_48_6_tsni, revert_inst_41_49_tsni, lambda_inst_41_49_28_tsni, lambda$_inst_41_49_28_23_tsni, rs$_inst_41_49_28_23_21_tsni, lambda_inst_41_49_28_23_21_tsni, lambda$_inst_41_49_28_23_21_tsni, divPs_inst_41_49_28_23_21_15_tsni, lambda_inst_41_49_28_23_21_15_tsni, lambda$_inst_41_49_28_23_21_15_tsni, dotMult_inst_41_49_28_23_21_15_4_tsni, lambda_inst_41_49_28_23_21_15_4_tsni, lambda$_inst_41_49_28_23_21_15_4_tsni, dotMult_inst_41_49_28_23_21_15_5_tsni, lambda_inst_41_49_28_23_21_15_5_tsni, lambda$_inst_41_49_28_23_21_15_5_tsni, dotMult_inst_41_49_28_23_21_15_6_tsni, lambda_inst_41_49_28_23_21_15_6_tsni, lambda$_inst_41_49_28_23_21_15_6_tsni, integral_inst_41_50_tsni, lambda_inst_41_50_36_tsni, lambda$_inst_41_50_36_37_tsni, testPower_nofib_inst_51_52_tsni, revert_inst_51_52_49_tsni, lambda_inst_51_52_49_28_tsni, lambda$_inst_51_52_49_28_23_tsni, rs$_inst_51_52_49_28_23_21_tsni, lambda_inst_51_52_49_28_23_21_tsni, lambda$_inst_51_52_49_28_23_21_tsni, divPs_inst_51_52_49_28_23_21_15_tsni, lambda_inst_51_52_49_28_23_21_15_tsni, lambda$_inst_51_52_49_28_23_21_15_tsni, dotMult_inst_51_52_49_28_23_21_15_6_tsni, lambda_inst_51_52_49_28_23_21_15_6_tsni, lambda$_inst_51_52_49_28_23_21_15_6_tsni, dotMult_inst_51_52_49_28_23_21_15_5_tsni, lambda_inst_51_52_49_28_23_21_15_5_tsni, lambda$_inst_51_52_49_28_23_21_15_5_tsni, dotMult_inst_51_52_49_28_23_21_15_4_tsni, lambda_inst_51_52_49_28_23_21_15_4_tsni, lambda$_inst_51_52_49_28_23_21_15_4_tsni, integral_inst_51_52_50_tsni, lambda_inst_51_52_50_36_tsni, lambda$_inst_51_52_50_36_37_tsni, divPs_inst_51_52_48_tsni, lambda_inst_51_52_48_tsni, lambda$_inst_51_52_48_tsni, dotMult_inst_51_52_48_6_tsni, lambda_inst_51_52_48_6_tsni, lambda$_inst_51_52_48_6_tsni, dotMult_inst_51_52_48_5_tsni, lambda_inst_51_52_48_5_tsni, lambda$_inst_51_52_48_5_tsni, dotMult_inst_51_52_48_4_tsni, lambda_inst_51_52_48_4_tsni, lambda$_inst_51_52_48_4_tsni, divPs_inst_51_52_47_tsni, lambda_inst_51_52_47_tsni, lambda$_inst_51_52_47_tsni, dotMult_inst_51_52_47_6_tsni, lambda_inst_51_52_47_6_tsni, lambda$_inst_51_52_47_6_tsni, dotMult_inst_51_52_47_5_tsni, lambda_inst_51_52_47_5_tsni, lambda$_inst_51_52_47_5_tsni, dotMult_inst_51_52_47_4_tsni, lambda_inst_51_52_47_4_tsni, lambda$_inst_51_52_47_4_tsni, cosx_inst_51_52_46_tsni, integralLz_inst_51_52_46_31_tsni, lambda_inst_51_52_46_31_32_tsni, lambda$_inst_51_52_46_31_32_33_tsni, int1_inst_51_52_46_31_32_33_34_tsni, lambda_inst_51_52_46_31_32_33_34_tsni, lambda$_inst_51_52_46_31_32_33_34_tsni, integral_inst_51_52_46_35_tsni, lambda_inst_51_52_46_35_36_tsni, lambda$_inst_51_52_46_35_36_37_tsni, int1_inst_51_52_46_35_36_37_38_tsni, lambda_inst_51_52_46_35_36_37_38_tsni, lambda$_inst_51_52_46_35_36_37_38_tsni, sinx_inst_51_52_45_tsni, integralLz_inst_51_52_45_40_tsni, lambda_inst_51_52_45_40_32_tsni, lambda$_inst_51_52_45_40_32_33_tsni, int1_inst_51_52_45_40_32_33_34_tsni, lambda_inst_51_52_45_40_32_33_34_tsni, lambda$_inst_51_52_45_40_32_33_34_tsni, sqrtPs_inst_51_52_44_tsni, lambda_inst_51_52_44_tsni, lambda$_inst_51_52_44_tsni, qs$_inst_51_52_44_12_tsni, lambda_inst_51_52_44_12_tsni, lambda$_inst_51_52_44_12_tsni, divPs_inst_51_52_44_12_3_tsni, lambda_inst_51_52_44_12_3_tsni, lambda$_inst_51_52_44_12_3_tsni, dotMult_inst_51_52_44_12_3_6_tsni, lambda_inst_51_52_44_12_3_6_tsni, lambda$_inst_51_52_44_12_3_6_tsni, dotMult_inst_51_52_44_12_3_5_tsni, lambda_inst_51_52_44_12_3_5_tsni, lambda$_inst_51_52_44_12_3_5_tsni, dotMult_inst_51_52_44_12_3_4_tsni, lambda_inst_51_52_44_12_3_4_tsni, lambda$_inst_51_52_44_12_3_4_tsni, lambda_inst_51_52_44_12_1_tsni, lambda$_inst_51_52_44_12_1_2_tsni, cosx_inst_51_52_43_tsni, integralLz_inst_51_52_43_31_tsni, lambda_inst_51_52_43_31_32_tsni, lambda$_inst_51_52_43_31_32_33_tsni, int1_inst_51_52_43_31_32_33_34_tsni, lambda_inst_51_52_43_31_32_33_34_tsni, lambda$_inst_51_52_43_31_32_33_34_tsni, integral_inst_51_52_43_35_tsni, lambda_inst_51_52_43_35_36_tsni, lambda$_inst_51_52_43_35_36_37_tsni, int1_inst_51_52_43_35_36_37_38_tsni, lambda_inst_51_52_43_35_36_37_38_tsni, lambda$_inst_51_52_43_35_36_37_38_tsni, sinx_inst_51_52_42_tsni, integralLz_inst_51_52_42_40_tsni, lambda_inst_51_52_42_40_32_tsni, lambda$_inst_51_52_42_40_32_33_tsni, int1_inst_51_52_42_40_32_33_34_tsni, lambda_inst_51_52_42_40_32_33_34_tsni, lambda$_inst_51_52_42_40_32_33_34_tsni, deriv_inst_0_53_tsni, lambda_inst_0_53_54_tsni, lambda$_inst_0_53_54_55_tsni, negatePs_inst_0_3_56_tsni, lambda_inst_0_3_56_tsni, lambda$_inst_0_3_56_tsni, negatePs_inst_0_3_57_tsni, lambda_inst_0_3_57_tsni, lambda$_inst_0_3_57_tsni, negatePs_inst_0_3_58_tsni, lambda_inst_0_3_58_tsni, lambda$_inst_0_3_58_tsni, integral_inst_0_59_tsni, lambda_inst_0_59_36_tsni, lambda$_inst_0_59_36_37_tsni, int1_inst_0_59_36_37_38_tsni, lambda_inst_0_59_36_37_38_tsni, lambda$_inst_0_59_36_37_38_tsni, deriv_inst_7_53_tsni, lambda_inst_7_53_54_tsni, lambda$_inst_7_53_54_55_tsni, negatePs_inst_7_3_56_tsni, lambda_inst_7_3_56_tsni, lambda$_inst_7_3_56_tsni, negatePs_inst_7_3_57_tsni, lambda_inst_7_3_57_tsni, lambda$_inst_7_3_57_tsni, negatePs_inst_7_3_58_tsni, lambda_inst_7_3_58_tsni, lambda$_inst_7_3_58_tsni, integral_inst_7_59_tsni, lambda_inst_7_59_36_tsni, lambda$_inst_7_59_36_37_tsni, int1_inst_7_59_36_37_38_tsni, lambda_inst_7_59_36_37_38_tsni, lambda$_inst_7_59_36_37_38_tsni, deriv_inst_8_53_tsni, lambda_inst_8_53_54_tsni, lambda$_inst_8_53_54_55_tsni, negatePs_inst_8_3_56_tsni, lambda_inst_8_3_56_tsni, lambda$_inst_8_3_56_tsni, negatePs_inst_8_3_57_tsni, lambda_inst_8_3_57_tsni, lambda$_inst_8_3_57_tsni, negatePs_inst_8_3_58_tsni, lambda_inst_8_3_58_tsni, lambda$_inst_8_3_58_tsni, integral_inst_8_59_tsni, lambda_inst_8_59_36_tsni, lambda$_inst_8_59_36_37_tsni, int1_inst_8_59_36_37_38_tsni, lambda_inst_8_59_36_37_38_tsni, lambda$_inst_8_59_36_37_38_tsni, negatePs_inst_9_10_3_58_tsni, lambda_inst_9_10_3_58_tsni, lambda$_inst_9_10_3_58_tsni, negatePs_inst_9_10_3_57_tsni, lambda_inst_9_10_3_57_tsni, lambda$_inst_9_10_3_57_tsni, negatePs_inst_9_10_3_56_tsni, lambda_inst_9_10_3_56_tsni, lambda$_inst_9_10_3_56_tsni, integral_inst_9_10_59_tsni, lambda_inst_9_10_59_36_tsni, lambda$_inst_9_10_59_36_37_tsni, int1_inst_9_10_59_36_37_38_tsni, lambda_inst_9_10_59_36_37_38_tsni, lambda$_inst_9_10_59_36_37_38_tsni, deriv_inst_9_10_53_tsni, lambda_inst_9_10_53_54_tsni, lambda$_inst_9_10_53_54_55_tsni, negatePs_inst_11_12_3_58_tsni, lambda_inst_11_12_3_58_tsni, lambda$_inst_11_12_3_58_tsni, negatePs_inst_11_12_3_57_tsni, lambda_inst_11_12_3_57_tsni, lambda$_inst_11_12_3_57_tsni, negatePs_inst_11_12_3_56_tsni, lambda_inst_11_12_3_56_tsni, lambda$_inst_11_12_3_56_tsni, integral_inst_11_12_59_tsni, lambda_inst_11_12_59_36_tsni, lambda$_inst_11_12_59_36_37_tsni, int1_inst_11_12_59_36_37_38_tsni, lambda_inst_11_12_59_36_37_38_tsni, lambda$_inst_11_12_59_36_37_38_tsni, deriv_inst_11_12_53_tsni, lambda_inst_11_12_53_54_tsni, lambda$_inst_11_12_53_54_55_tsni, negatePs_inst_13_12_3_58_tsni, lambda_inst_13_12_3_58_tsni, lambda$_inst_13_12_3_58_tsni, negatePs_inst_13_12_3_57_tsni, lambda_inst_13_12_3_57_tsni, lambda$_inst_13_12_3_57_tsni, negatePs_inst_13_12_3_56_tsni, lambda_inst_13_12_3_56_tsni, lambda$_inst_13_12_3_56_tsni, integral_inst_13_12_59_tsni, lambda_inst_13_12_59_36_tsni, lambda$_inst_13_12_59_36_37_tsni, int1_inst_13_12_59_36_37_38_tsni, lambda_inst_13_12_59_36_37_38_tsni, lambda$_inst_13_12_59_36_37_38_tsni, deriv_inst_13_12_53_tsni, lambda_inst_13_12_53_54_tsni, lambda$_inst_13_12_53_54_55_tsni, negatePs_inst_14_15_56_tsni, lambda_inst_14_15_56_tsni, lambda$_inst_14_15_56_tsni, negatePs_inst_14_15_57_tsni, lambda_inst_14_15_57_tsni, lambda$_inst_14_15_57_tsni, negatePs_inst_14_15_58_tsni, lambda_inst_14_15_58_tsni, lambda$_inst_14_15_58_tsni, negatePs_inst_16_15_56_tsni, lambda_inst_16_15_56_tsni, lambda$_inst_16_15_56_tsni, negatePs_inst_16_15_57_tsni, lambda_inst_16_15_57_tsni, lambda$_inst_16_15_57_tsni, negatePs_inst_16_15_58_tsni, lambda_inst_16_15_58_tsni, lambda$_inst_16_15_58_tsni, negatePs_inst_17_15_56_tsni, lambda_inst_17_15_56_tsni, lambda$_inst_17_15_56_tsni, negatePs_inst_17_15_57_tsni, lambda_inst_17_15_57_tsni, lambda$_inst_17_15_57_tsni, negatePs_inst_17_15_58_tsni, lambda_inst_17_15_58_tsni, lambda$_inst_17_15_58_tsni, negatePs_inst_18_19_15_58_tsni, lambda_inst_18_19_15_58_tsni, lambda$_inst_18_19_15_58_tsni, negatePs_inst_18_19_15_57_tsni, lambda_inst_18_19_15_57_tsni, lambda$_inst_18_19_15_57_tsni, negatePs_inst_18_19_15_56_tsni, lambda_inst_18_19_15_56_tsni, lambda$_inst_18_19_15_56_tsni, negatePs_inst_20_21_15_58_tsni, lambda_inst_20_21_15_58_tsni, lambda$_inst_20_21_15_58_tsni, negatePs_inst_20_21_15_57_tsni, lambda_inst_20_21_15_57_tsni, lambda$_inst_20_21_15_57_tsni, negatePs_inst_20_21_15_56_tsni, lambda_inst_20_21_15_56_tsni, lambda$_inst_20_21_15_56_tsni, negatePs_inst_22_23_21_15_56_tsni, lambda_inst_22_23_21_15_56_tsni, lambda$_inst_22_23_21_15_56_tsni, negatePs_inst_22_23_21_15_57_tsni, lambda_inst_22_23_21_15_57_tsni, lambda$_inst_22_23_21_15_57_tsni, negatePs_inst_22_23_21_15_58_tsni, lambda_inst_22_23_21_15_58_tsni, lambda$_inst_22_23_21_15_58_tsni, negatePs_inst_24_58_tsni, lambda_inst_24_58_tsni, lambda$_inst_24_58_tsni, negatePs_inst_24_57_tsni, lambda_inst_24_57_tsni, lambda$_inst_24_57_tsni, negatePs_inst_24_56_tsni, lambda_inst_24_56_tsni, lambda$_inst_24_56_tsni, negatePs_inst_25_58_tsni, lambda_inst_25_58_tsni, lambda$_inst_25_58_tsni, negatePs_inst_25_57_tsni, lambda_inst_25_57_tsni, lambda$_inst_25_57_tsni, negatePs_inst_25_56_tsni, lambda_inst_25_56_tsni, lambda$_inst_25_56_tsni, negatePs_inst_26_58_tsni, lambda_inst_26_58_tsni, lambda$_inst_26_58_tsni, negatePs_inst_26_57_tsni, lambda_inst_26_57_tsni, lambda$_inst_26_57_tsni, negatePs_inst_26_56_tsni, lambda_inst_26_56_tsni, lambda$_inst_26_56_tsni, negatePs_inst_27_28_23_21_15_58_tsni, lambda_inst_27_28_23_21_15_58_tsni, lambda$_inst_27_28_23_21_15_58_tsni, negatePs_inst_27_28_23_21_15_57_tsni, lambda_inst_27_28_23_21_15_57_tsni, lambda$_inst_27_28_23_21_15_57_tsni, negatePs_inst_27_28_23_21_15_56_tsni, lambda_inst_27_28_23_21_15_56_tsni, lambda$_inst_27_28_23_21_15_56_tsni, negatePs_inst_29_12_3_58_tsni, lambda_inst_29_12_3_58_tsni, lambda$_inst_29_12_3_58_tsni, negatePs_inst_29_12_3_57_tsni, lambda_inst_29_12_3_57_tsni, lambda$_inst_29_12_3_57_tsni, negatePs_inst_29_12_3_56_tsni, lambda_inst_29_12_3_56_tsni, lambda$_inst_29_12_3_56_tsni, integral_inst_29_12_59_tsni, lambda_inst_29_12_59_36_tsni, lambda$_inst_29_12_59_36_37_tsni, int1_inst_29_12_59_36_37_38_tsni, lambda_inst_29_12_59_36_37_38_tsni, lambda$_inst_29_12_59_36_37_38_tsni, deriv_inst_29_12_53_tsni, lambda_inst_29_12_53_54_tsni, lambda$_inst_29_12_53_54_55_tsni, minusPs_inst_30_60_tsni, negatePs_inst_30_60_61_tsni, lambda_inst_30_60_61_tsni, lambda$_inst_30_60_61_tsni, minusPs_inst_39_62_tsni, negatePs_inst_39_62_61_tsni, lambda_inst_39_62_61_tsni, lambda$_inst_39_62_61_tsni, minusPs_inst_41_42_62_tsni, negatePs_inst_41_42_62_61_tsni, lambda_inst_41_42_62_61_tsni, lambda$_inst_41_42_62_61_tsni, minusPs_inst_41_43_60_tsni, negatePs_inst_41_43_60_61_tsni, lambda_inst_41_43_60_61_tsni, lambda$_inst_41_43_60_61_tsni, deriv_inst_41_44_12_53_tsni, lambda_inst_41_44_12_53_54_tsni, lambda$_inst_41_44_12_53_54_55_tsni, negatePs_inst_41_44_12_3_56_tsni, lambda_inst_41_44_12_3_56_tsni, lambda$_inst_41_44_12_3_56_tsni, negatePs_inst_41_44_12_3_57_tsni, lambda_inst_41_44_12_3_57_tsni, lambda$_inst_41_44_12_3_57_tsni, negatePs_inst_41_44_12_3_58_tsni, lambda_inst_41_44_12_3_58_tsni, lambda$_inst_41_44_12_3_58_tsni, integral_inst_41_44_12_59_tsni, lambda_inst_41_44_12_59_36_tsni, lambda$_inst_41_44_12_59_36_37_tsni, int1_inst_41_44_12_59_36_37_38_tsni, lambda_inst_41_44_12_59_36_37_38_tsni, lambda$_inst_41_44_12_59_36_37_38_tsni, minusPs_inst_41_45_62_tsni, negatePs_inst_41_45_62_61_tsni, lambda_inst_41_45_62_61_tsni, lambda$_inst_41_45_62_61_tsni, minusPs_inst_41_46_60_tsni, negatePs_inst_41_46_60_61_tsni, lambda_inst_41_46_60_61_tsni, lambda$_inst_41_46_60_61_tsni, negatePs_inst_41_47_56_tsni, lambda_inst_41_47_56_tsni, lambda$_inst_41_47_56_tsni, negatePs_inst_41_47_57_tsni, lambda_inst_41_47_57_tsni, lambda$_inst_41_47_57_tsni, negatePs_inst_41_47_58_tsni, lambda_inst_41_47_58_tsni, lambda$_inst_41_47_58_tsni, negatePs_inst_41_48_56_tsni, lambda_inst_41_48_56_tsni, lambda$_inst_41_48_56_tsni, negatePs_inst_41_48_57_tsni, lambda_inst_41_48_57_tsni, lambda$_inst_41_48_57_tsni, negatePs_inst_41_48_58_tsni, lambda_inst_41_48_58_tsni, lambda$_inst_41_48_58_tsni, int1_inst_41_50_36_37_38_tsni, lambda_inst_41_50_36_37_38_tsni, lambda$_inst_41_50_36_37_38_tsni, negatePs_inst_41_49_28_23_21_15_56_tsni, lambda_inst_41_49_28_23_21_15_56_tsni, lambda$_inst_41_49_28_23_21_15_56_tsni, negatePs_inst_41_49_28_23_21_15_57_tsni, lambda_inst_41_49_28_23_21_15_57_tsni, lambda$_inst_41_49_28_23_21_15_57_tsni, negatePs_inst_41_49_28_23_21_15_58_tsni, lambda_inst_41_49_28_23_21_15_58_tsni, lambda$_inst_41_49_28_23_21_15_58_tsni, negatePs_inst_51_52_49_28_23_21_15_58_tsni, lambda_inst_51_52_49_28_23_21_15_58_tsni, lambda$_inst_51_52_49_28_23_21_15_58_tsni, negatePs_inst_51_52_49_28_23_21_15_57_tsni, lambda_inst_51_52_49_28_23_21_15_57_tsni, lambda$_inst_51_52_49_28_23_21_15_57_tsni, negatePs_inst_51_52_49_28_23_21_15_56_tsni, lambda_inst_51_52_49_28_23_21_15_56_tsni, lambda$_inst_51_52_49_28_23_21_15_56_tsni, negatePs_inst_51_52_48_58_tsni, lambda_inst_51_52_48_58_tsni, lambda$_inst_51_52_48_58_tsni, negatePs_inst_51_52_48_57_tsni, lambda_inst_51_52_48_57_tsni, lambda$_inst_51_52_48_57_tsni, negatePs_inst_51_52_48_56_tsni, lambda_inst_51_52_48_56_tsni, lambda$_inst_51_52_48_56_tsni, int1_inst_51_52_50_36_37_38_tsni, lambda_inst_51_52_50_36_37_38_tsni, lambda$_inst_51_52_50_36_37_38_tsni, negatePs_inst_51_52_47_58_tsni, lambda_inst_51_52_47_58_tsni, lambda$_inst_51_52_47_58_tsni, negatePs_inst_51_52_47_57_tsni, lambda_inst_51_52_47_57_tsni, lambda$_inst_51_52_47_57_tsni, negatePs_inst_51_52_47_56_tsni, lambda_inst_51_52_47_56_tsni, lambda$_inst_51_52_47_56_tsni, minusPs_inst_51_52_46_60_tsni, negatePs_inst_51_52_46_60_61_tsni, lambda_inst_51_52_46_60_61_tsni, lambda$_inst_51_52_46_60_61_tsni, minusPs_inst_51_52_45_62_tsni, negatePs_inst_51_52_45_62_61_tsni, lambda_inst_51_52_45_62_61_tsni, lambda$_inst_51_52_45_62_61_tsni, negatePs_inst_51_52_44_12_3_58_tsni, lambda_inst_51_52_44_12_3_58_tsni, lambda$_inst_51_52_44_12_3_58_tsni, negatePs_inst_51_52_44_12_3_57_tsni, lambda_inst_51_52_44_12_3_57_tsni, lambda$_inst_51_52_44_12_3_57_tsni, negatePs_inst_51_52_44_12_3_56_tsni, lambda_inst_51_52_44_12_3_56_tsni, lambda$_inst_51_52_44_12_3_56_tsni, integral_inst_51_52_44_12_59_tsni, lambda_inst_51_52_44_12_59_36_tsni, lambda$_inst_51_52_44_12_59_36_37_tsni, int1_inst_51_52_44_12_59_36_37_38_tsni, lambda_inst_51_52_44_12_59_36_37_38_tsni, lambda$_inst_51_52_44_12_59_36_37_38_tsni, deriv_inst_51_52_44_12_53_tsni, lambda_inst_51_52_44_12_53_54_tsni, lambda$_inst_51_52_44_12_53_54_55_tsni, minusPs_inst_51_52_43_60_tsni, negatePs_inst_51_52_43_60_61_tsni, lambda_inst_51_52_43_60_61_tsni, lambda$_inst_51_52_43_60_61_tsni, minusPs_inst_51_52_42_62_tsni, negatePs_inst_51_52_42_62_61_tsni, lambda_inst_51_52_42_62_61_tsni, lambda$_inst_51_52_42_62_61_tsni, match_scrut_arm_Pz_inst_0_59_36_37_38_tsni, match_scrut_arm_Pc_inst_0_59_36_37_38_tsni, match_scrut_arm_Pz_inst_7_59_36_37_38_tsni, match_scrut_arm_Pc_inst_7_59_36_37_38_tsni, match_scrut_arm_Pz_inst_8_59_36_37_38_tsni, match_scrut_arm_Pc_inst_8_59_36_37_38_tsni, match_scrut_arm_Pz_inst_9_10_59_36_37_38_tsni, match_scrut_arm_Pc_inst_9_10_59_36_37_38_tsni, match_scrut_arm_Pz_inst_11_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_11_12_59_36_37_38_tsni, match_scrut_arm_Pz_inst_13_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_13_12_59_36_37_38_tsni, match_scrut_arm_Pz_inst_29_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_29_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_30_35_36_37_38_tsni, match_scrut_arm_Pc_inst_30_60_61_tsni, match_scrut_arm_Pc_inst_39_62_61_tsni, match_scrut_arm_Pc_inst_41_42_62_61_tsni, match_scrut_arm_Pc_inst_41_43_60_61_tsni, match_scrut_arm_Pc_inst_41_43_35_36_37_38_tsni, match_scrut_arm_Pz_inst_41_44_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_41_44_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_41_45_62_61_tsni, match_scrut_arm_Pc_inst_41_46_60_61_tsni, match_scrut_arm_Pc_inst_41_46_35_36_37_38_tsni, match_scrut_arm_Pz_inst_41_50_36_37_38_tsni, match_scrut_arm_Pc_inst_41_50_36_37_38_tsni, match_scrut_arm_Pz_inst_51_52_50_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_50_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_46_35_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_46_60_61_tsni, match_scrut_arm_Pc_inst_51_52_45_62_61_tsni, match_scrut_arm_Pz_inst_51_52_44_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_44_12_59_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_43_35_36_37_38_tsni, match_scrut_arm_Pc_inst_51_52_43_60_61_tsni, match_scrut_arm_Pc_inst_51_52_42_62_61_tsni;
match_scrut_arm_Pz_inst_0_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_0_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_0_59_36_37_38_tsni, _deforest_Pc_s_inst_0_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_0_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_0_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_0_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_7_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_7_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_7_59_36_37_38_tsni, _deforest_Pc_s_inst_7_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_7_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_7_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_7_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_8_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_8_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_8_59_36_37_38_tsni, _deforest_Pc_s_inst_8_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_8_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_8_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_8_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_9_10_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_9_10_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_9_10_59_36_37_38_tsni, _deforest_Pc_s_inst_9_10_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_9_10_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_9_10_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_9_10_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_11_12_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_11_12_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_11_12_59_36_37_38_tsni, _deforest_Pc_s_inst_11_12_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_11_12_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_11_12_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_11_12_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_13_12_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_13_12_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_13_12_59_36_37_38_tsni, _deforest_Pc_s_inst_13_12_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_13_12_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_13_12_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_13_12_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_29_12_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_29_12_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_29_12_59_36_37_38_tsni, _deforest_Pc_s_inst_29_12_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_29_12_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_29_12_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_29_12_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pc_inst_30_35_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_30_35_36_37_38_tsni, _deforest_Pc_s_inst_30_35_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_30_35_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_30_35_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_30_35_36_37_38_tsni(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_30_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
});
match_scrut_arm_Pc_inst_30_60_61_tsni = (undefined, function (_deforest_Pc_f_inst_30_60_61_tsni, _deforest_Pc_s_inst_30_60_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_30_60_61_tsni;
  param1 = _deforest_Pc_s_inst_30_60_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_30_60_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_39_62_61_tsni = (undefined, function (_deforest_Pc_f_inst_39_62_61_tsni, _deforest_Pc_s_inst_39_62_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_39_62_61_tsni;
  param1 = _deforest_Pc_s_inst_39_62_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_39_62_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_41_42_62_61_tsni = (undefined, function (_deforest_Pc_f_inst_41_42_62_61_tsni, _deforest_Pc_s_inst_41_42_62_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_41_42_62_61_tsni;
  param1 = _deforest_Pc_s_inst_41_42_62_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_41_42_62_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_41_43_60_61_tsni = (undefined, function (_deforest_Pc_f_inst_41_43_60_61_tsni, _deforest_Pc_s_inst_41_43_60_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_41_43_60_61_tsni;
  param1 = _deforest_Pc_s_inst_41_43_60_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_41_43_60_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_41_43_35_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_41_43_35_36_37_38_tsni, _deforest_Pc_s_inst_41_43_35_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_41_43_35_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_41_43_35_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_41_43_35_36_37_38_tsni(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_41_43_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
});
match_scrut_arm_Pz_inst_41_44_12_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_41_44_12_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_41_44_12_59_36_37_38_tsni, _deforest_Pc_s_inst_41_44_12_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_41_44_12_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_41_44_12_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_41_44_12_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pc_inst_41_45_62_61_tsni = (undefined, function (_deforest_Pc_f_inst_41_45_62_61_tsni, _deforest_Pc_s_inst_41_45_62_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_41_45_62_61_tsni;
  param1 = _deforest_Pc_s_inst_41_45_62_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_41_45_62_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_41_46_60_61_tsni = (undefined, function (_deforest_Pc_f_inst_41_46_60_61_tsni, _deforest_Pc_s_inst_41_46_60_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_41_46_60_61_tsni;
  param1 = _deforest_Pc_s_inst_41_46_60_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_41_46_60_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_41_46_35_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_41_46_35_36_37_38_tsni, _deforest_Pc_s_inst_41_46_35_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_41_46_35_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_41_46_35_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_41_46_35_36_37_38_tsni(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_41_46_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
});
match_scrut_arm_Pz_inst_41_50_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_41_50_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_41_50_36_37_38_tsni, _deforest_Pc_s_inst_41_50_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_41_50_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_41_50_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_41_50_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pz_inst_51_52_50_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_51_52_50_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_51_52_50_36_37_38_tsni, _deforest_Pc_s_inst_51_52_50_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_51_52_50_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_51_52_50_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_51_52_50_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pc_inst_51_52_46_35_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_51_52_46_35_36_37_38_tsni, _deforest_Pc_s_inst_51_52_46_35_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_51_52_46_35_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_51_52_46_35_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_51_52_46_35_36_37_38_tsni(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_46_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
});
match_scrut_arm_Pc_inst_51_52_46_60_61_tsni = (undefined, function (_deforest_Pc_f_inst_51_52_46_60_61_tsni, _deforest_Pc_s_inst_51_52_46_60_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_51_52_46_60_61_tsni;
  param1 = _deforest_Pc_s_inst_51_52_46_60_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_51_52_46_60_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_51_52_45_62_61_tsni = (undefined, function (_deforest_Pc_f_inst_51_52_45_62_61_tsni, _deforest_Pc_s_inst_51_52_45_62_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_51_52_45_62_61_tsni;
  param1 = _deforest_Pc_s_inst_51_52_45_62_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_51_52_45_62_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pz_inst_51_52_44_12_59_36_37_38_tsni = (undefined, function (n) {
  return power1.Pz
});
match_scrut_arm_Pc_inst_51_52_44_12_59_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_51_52_44_12_59_36_37_38_tsni, _deforest_Pc_s_inst_51_52_44_12_59_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_51_52_44_12_59_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_51_52_44_12_59_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_51_52_44_12_59_36_37_38_tsni(fs_, tmp1);
  return power1.Pc(tmp, tmp2)
});
match_scrut_arm_Pc_inst_51_52_43_35_36_37_38_tsni = (undefined, function (n, _deforest_Pc_f_inst_51_52_43_35_36_37_38_tsni, _deforest_Pc_s_inst_51_52_43_35_36_37_38_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_51_52_43_35_36_37_38_tsni;
  param1 = _deforest_Pc_s_inst_51_52_43_35_36_37_38_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1_inst_51_52_43_35_36_37_38_tsni(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_43_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
});
match_scrut_arm_Pc_inst_51_52_43_60_61_tsni = (undefined, function (_deforest_Pc_f_inst_51_52_43_60_61_tsni, _deforest_Pc_s_inst_51_52_43_60_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_51_52_43_60_61_tsni;
  param1 = _deforest_Pc_s_inst_51_52_43_60_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_51_52_43_60_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
match_scrut_arm_Pc_inst_51_52_42_62_61_tsni = (undefined, function (_deforest_Pc_f_inst_51_52_42_62_61_tsni, _deforest_Pc_s_inst_51_52_42_62_61_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_51_52_42_62_61_tsni;
  param1 = _deforest_Pc_s_inst_51_52_42_62_61_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_51_52_42_62_61_tsni(fs_);
  return power1.Pc(tmp, tmp1)
});
qs$_inst_0_tsni = function qs$_inst_0_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$29(fs_)
  }
});
lambda_inst_0_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_0_1_2_tsni(fs_)
  }
});
lambda$_inst_0_1_2_tsni = function lambda$_inst_0_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
divPs_inst_0_3_tsni = function divPs_inst_0_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_3_tsni(fss, gss)
  }
});
lambda$_inst_0_3_tsni = function lambda$_inst_0_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_0_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_0_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_0_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_0_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_0_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_0_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_0_3_tsni(tmp5, tmp6);
          _deforest_Pc_f = q1;
          _deforest_Pc_s = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_0_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_0_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_0_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_0_3_tsni(tmp11, tmp12);
          _deforest_Pc_f2 = q;
          _deforest_Pc_s2 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_0_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_0_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_0_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_0_3_tsni(tmp17, tmp18);
        _deforest_Pc_f1 = q;
        _deforest_Pc_s1 = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_0_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_0_3_4_tsni = function dotMult_inst_0_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_0_3_4_tsni(c, ps)
  }
});
lambda$_inst_0_3_4_tsni = function lambda$_inst_0_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_0_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_0_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_0_3_5_tsni = function dotMult_inst_0_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_0_3_5_tsni(c, ps)
  }
});
lambda$_inst_0_3_5_tsni = function lambda$_inst_0_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_0_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_0_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_0_3_6_tsni = function dotMult_inst_0_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_0_3_6_tsni(c, ps)
  }
});
lambda$_inst_0_3_6_tsni = function lambda$_inst_0_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_0_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_0_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_7_tsni = function qs$_inst_7_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda43(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_7_tsni = function lambda$_inst_7_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_7_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_7_53_tsni(tmp1);
  tmp3 = qs$_inst_7_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_7_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_7_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
lambda_inst_7_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_7_1_2_tsni(fs_)
  }
});
lambda$_inst_7_1_2_tsni = function lambda$_inst_7_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
divPs_inst_7_3_tsni = function divPs_inst_7_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_7_3_tsni(fss, gss)
  }
});
lambda$_inst_7_3_tsni = function lambda$_inst_7_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_7_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_7_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_7_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_7_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_7_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_7_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_7_3_tsni(tmp5, tmp6);
          _deforest_Pc_f = q1;
          _deforest_Pc_s = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_7_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_7_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_7_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_7_3_tsni(tmp11, tmp12);
          _deforest_Pc_f2 = q;
          _deforest_Pc_s2 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_7_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_7_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_7_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_7_3_tsni(tmp17, tmp18);
        _deforest_Pc_f1 = q;
        _deforest_Pc_s1 = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_7_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_7_3_4_tsni = function dotMult_inst_7_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_7_3_4_tsni(c, ps)
  }
});
lambda$_inst_7_3_4_tsni = function lambda$_inst_7_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_7_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_7_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_7_3_5_tsni = function dotMult_inst_7_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_7_3_5_tsni(c, ps)
  }
});
lambda$_inst_7_3_5_tsni = function lambda$_inst_7_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_7_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_7_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_7_3_6_tsni = function dotMult_inst_7_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_7_3_6_tsni(c, ps)
  }
});
lambda$_inst_7_3_6_tsni = function lambda$_inst_7_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_7_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_7_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_8_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_8_tsni(fs_)
  }
});
lambda$_inst_8_tsni = function lambda$_inst_8_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_8_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_8_53_tsni(tmp1);
  tmp3 = qs$(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_8_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_8_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
lambda_inst_8_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_8_1_2_tsni(fs_)
  }
});
lambda$_inst_8_1_2_tsni = function lambda$_inst_8_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
divPs_inst_8_3_tsni = function divPs_inst_8_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_3_tsni(fss, gss)
  }
});
lambda$_inst_8_3_tsni = function lambda$_inst_8_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_8_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_8_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_8_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_8_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_8_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_8_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_8_3_tsni(tmp5, tmp6);
          _deforest_Pc_f = q1;
          _deforest_Pc_s = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_8_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_8_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_8_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_8_3_tsni(tmp11, tmp12);
          _deforest_Pc_f2 = q;
          _deforest_Pc_s2 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_8_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_8_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_8_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_8_3_tsni(tmp17, tmp18);
        _deforest_Pc_f1 = q;
        _deforest_Pc_s1 = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_8_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_8_3_4_tsni = function dotMult_inst_8_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_8_3_4_tsni(c, ps)
  }
});
lambda$_inst_8_3_4_tsni = function lambda$_inst_8_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_8_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_8_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_8_3_5_tsni = function dotMult_inst_8_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_8_3_5_tsni(c, ps)
  }
});
lambda$_inst_8_3_5_tsni = function lambda$_inst_8_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_8_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_8_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_8_3_6_tsni = function dotMult_inst_8_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_8_3_6_tsni(c, ps)
  }
});
lambda$_inst_8_3_6_tsni = function lambda$_inst_8_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_8_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_8_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_9_10_tsni = function qs$_inst_9_10_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_9_10_tsni(fs_)
  }
});
lambda$_inst_9_10_tsni = function lambda$_inst_9_10_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_9_10_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_9_10_53_tsni(tmp1);
  tmp3 = qs$_inst_9_10_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_9_10_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_9_10_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
divPs_inst_9_10_3_tsni = function divPs_inst_9_10_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_9_10_3_tsni(fss, gss)
  }
});
lambda$_inst_9_10_3_tsni = function lambda$_inst_9_10_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_9_10_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_9_10_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_9_10_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_9_10_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_9_10_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_9_10_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_9_10_3_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_9_10_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_9_10_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_9_10_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_9_10_3_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_9_10_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_9_10_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_9_10_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_9_10_3_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_9_10_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_9_10_3_6_tsni = function dotMult_inst_9_10_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_9_10_3_6_tsni(c, ps)
  }
});
lambda$_inst_9_10_3_6_tsni = function lambda$_inst_9_10_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_9_10_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_9_10_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_9_10_3_5_tsni = function dotMult_inst_9_10_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_9_10_3_5_tsni(c, ps)
  }
});
lambda$_inst_9_10_3_5_tsni = function lambda$_inst_9_10_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_9_10_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_9_10_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_9_10_3_4_tsni = function dotMult_inst_9_10_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_9_10_3_4_tsni(c, ps)
  }
});
lambda$_inst_9_10_3_4_tsni = function lambda$_inst_9_10_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_9_10_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_9_10_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_9_10_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_9_10_1_2_tsni(fs_)
  }
});
lambda$_inst_9_10_1_2_tsni = function lambda$_inst_9_10_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
sqrtPs_inst_11_tsni = function sqrtPs_inst_11_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_tsni = (undefined, function (fss) {
  return () => {
    return lambda$28(fss)
  }
});
qs$_inst_11_12_tsni = function qs$_inst_11_12_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_11_12_tsni(fs_)
  }
});
lambda$_inst_11_12_tsni = function lambda$_inst_11_12_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_11_12_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_11_12_53_tsni(tmp1);
  tmp3 = qs$_inst_11_12_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_11_12_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_11_12_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
divPs_inst_11_12_3_tsni = function divPs_inst_11_12_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_11_12_3_tsni(fss, gss)
  }
});
lambda$_inst_11_12_3_tsni = function lambda$_inst_11_12_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_11_12_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_11_12_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_11_12_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_11_12_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_11_12_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_11_12_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_11_12_3_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_11_12_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_11_12_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_11_12_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_11_12_3_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_11_12_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_11_12_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_11_12_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_11_12_3_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_11_12_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_11_12_3_6_tsni = function dotMult_inst_11_12_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_11_12_3_6_tsni(c, ps)
  }
});
lambda$_inst_11_12_3_6_tsni = function lambda$_inst_11_12_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_11_12_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_11_12_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_11_12_3_5_tsni = function dotMult_inst_11_12_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_11_12_3_5_tsni(c, ps)
  }
});
lambda$_inst_11_12_3_5_tsni = function lambda$_inst_11_12_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_11_12_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_11_12_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_11_12_3_4_tsni = function dotMult_inst_11_12_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_11_12_3_4_tsni(c, ps)
  }
});
lambda$_inst_11_12_3_4_tsni = function lambda$_inst_11_12_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_11_12_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_11_12_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_11_12_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_11_12_1_2_tsni(fs_)
  }
});
lambda$_inst_11_12_1_2_tsni = function lambda$_inst_11_12_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
sqrtPs_inst_13_tsni = function sqrtPs_inst_13_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda42(fss));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_13_tsni = function lambda$_inst_13_tsni(fss) {
  let scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gss = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        if (param01 === 0) {
          fs_1 = param11;
          tmp = sqrtPs_inst_13_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_13_12_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_13_12_tsni = function qs$_inst_13_12_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_13_12_tsni(fs_)
  }
});
lambda$_inst_13_12_tsni = function lambda$_inst_13_12_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_13_12_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_13_12_53_tsni(tmp1);
  tmp3 = qs$_inst_13_12_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_13_12_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_13_12_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
divPs_inst_13_12_3_tsni = function divPs_inst_13_12_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_13_12_3_tsni(fss, gss)
  }
});
lambda$_inst_13_12_3_tsni = function lambda$_inst_13_12_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_13_12_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_13_12_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_13_12_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_13_12_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_13_12_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_13_12_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_13_12_3_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_13_12_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_13_12_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_13_12_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_13_12_3_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_13_12_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_13_12_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_13_12_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_13_12_3_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_13_12_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_13_12_3_6_tsni = function dotMult_inst_13_12_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_13_12_3_6_tsni(c, ps)
  }
});
lambda$_inst_13_12_3_6_tsni = function lambda$_inst_13_12_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_13_12_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_13_12_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_13_12_3_5_tsni = function dotMult_inst_13_12_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_13_12_3_5_tsni(c, ps)
  }
});
lambda$_inst_13_12_3_5_tsni = function lambda$_inst_13_12_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_13_12_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_13_12_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_13_12_3_4_tsni = function dotMult_inst_13_12_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_13_12_3_4_tsni(c, ps)
  }
});
lambda$_inst_13_12_3_4_tsni = function lambda$_inst_13_12_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_13_12_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_13_12_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_13_12_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_13_12_1_2_tsni(fs_)
  }
});
lambda$_inst_13_12_1_2_tsni = function lambda$_inst_13_12_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
rs$_inst_14_tsni = function rs$_inst_14_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$21(fs_)
  }
});
divPs_inst_14_15_tsni = function divPs_inst_14_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_14_15_tsni(fss, gss)
  }
});
lambda$_inst_14_15_tsni = function lambda$_inst_14_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_14_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_14_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_14_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_14_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_14_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_14_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_14_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_14_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_14_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_14_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_14_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_14_15_4_tsni = function dotMult_inst_14_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_14_15_4_tsni(c, ps)
  }
});
lambda$_inst_14_15_4_tsni = function lambda$_inst_14_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_14_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_14_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_14_15_5_tsni = function dotMult_inst_14_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_14_15_5_tsni(c, ps)
  }
});
lambda$_inst_14_15_5_tsni = function lambda$_inst_14_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_14_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_14_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_14_15_6_tsni = function dotMult_inst_14_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_14_15_6_tsni(c, ps)
  }
});
lambda$_inst_14_15_6_tsni = function lambda$_inst_14_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_14_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_14_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rs$_inst_16_tsni = function rs$_inst_16_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda33(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_16_tsni = function lambda$_inst_16_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_16_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_16_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_16_15_tsni = function divPs_inst_16_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_16_15_tsni(fss, gss)
  }
});
lambda$_inst_16_15_tsni = function lambda$_inst_16_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_16_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_16_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_16_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_16_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_16_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_16_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_16_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_16_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_16_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_16_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_16_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_16_15_4_tsni = function dotMult_inst_16_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_16_15_4_tsni(c, ps)
  }
});
lambda$_inst_16_15_4_tsni = function lambda$_inst_16_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_16_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_16_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_16_15_5_tsni = function dotMult_inst_16_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_16_15_5_tsni(c, ps)
  }
});
lambda$_inst_16_15_5_tsni = function lambda$_inst_16_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_16_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_16_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_16_15_6_tsni = function dotMult_inst_16_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_16_15_6_tsni(c, ps)
  }
});
lambda$_inst_16_15_6_tsni = function lambda$_inst_16_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_16_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_16_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_17_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_17_tsni(fs_)
  }
});
lambda$_inst_17_tsni = function lambda$_inst_17_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_17_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_17_15_tsni = function divPs_inst_17_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_17_15_tsni(fss, gss)
  }
});
lambda$_inst_17_15_tsni = function lambda$_inst_17_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_17_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_17_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_17_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_17_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_17_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_17_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_17_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_17_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_17_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_17_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_17_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_17_15_4_tsni = function dotMult_inst_17_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_17_15_4_tsni(c, ps)
  }
});
lambda$_inst_17_15_4_tsni = function lambda$_inst_17_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_17_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_17_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_17_15_5_tsni = function dotMult_inst_17_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_17_15_5_tsni(c, ps)
  }
});
lambda$_inst_17_15_5_tsni = function lambda$_inst_17_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_17_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_17_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_17_15_6_tsni = function dotMult_inst_17_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_17_15_6_tsni(c, ps)
  }
});
lambda$_inst_17_15_6_tsni = function lambda$_inst_17_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_17_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_17_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rs$_inst_18_19_tsni = function rs$_inst_18_19_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_18_19_tsni(fs_)
  }
});
lambda$_inst_18_19_tsni = function lambda$_inst_18_19_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_18_19_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_18_19_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_18_19_15_tsni = function divPs_inst_18_19_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_18_19_15_tsni(fss, gss)
  }
});
lambda$_inst_18_19_15_tsni = function lambda$_inst_18_19_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_18_19_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_18_19_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_18_19_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_18_19_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_18_19_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_18_19_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_18_19_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_18_19_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_18_19_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_18_19_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_18_19_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_18_19_15_6_tsni = function dotMult_inst_18_19_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_18_19_15_6_tsni(c, ps)
  }
});
lambda$_inst_18_19_15_6_tsni = function lambda$_inst_18_19_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_18_19_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_18_19_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_18_19_15_5_tsni = function dotMult_inst_18_19_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_18_19_15_5_tsni(c, ps)
  }
});
lambda$_inst_18_19_15_5_tsni = function lambda$_inst_18_19_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_18_19_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_18_19_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_18_19_15_4_tsni = function dotMult_inst_18_19_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_18_19_15_4_tsni(c, ps)
  }
});
lambda$_inst_18_19_15_4_tsni = function lambda$_inst_18_19_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_18_19_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_18_19_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rs$_inst_20_21_tsni = function rs$_inst_20_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_20_21_tsni(fs_)
  }
});
lambda$_inst_20_21_tsni = function lambda$_inst_20_21_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_20_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_20_21_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_20_21_15_tsni = function divPs_inst_20_21_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_20_21_15_tsni(fss, gss)
  }
});
lambda$_inst_20_21_15_tsni = function lambda$_inst_20_21_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_20_21_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_20_21_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_20_21_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_20_21_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_20_21_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_20_21_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_20_21_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_20_21_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_20_21_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_20_21_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_20_21_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_20_21_15_6_tsni = function dotMult_inst_20_21_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_20_21_15_6_tsni(c, ps)
  }
});
lambda$_inst_20_21_15_6_tsni = function lambda$_inst_20_21_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_20_21_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_20_21_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_20_21_15_5_tsni = function dotMult_inst_20_21_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_20_21_15_5_tsni(c, ps)
  }
});
lambda$_inst_20_21_15_5_tsni = function lambda$_inst_20_21_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_20_21_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_20_21_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_20_21_15_4_tsni = function dotMult_inst_20_21_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_20_21_15_4_tsni(c, ps)
  }
});
lambda$_inst_20_21_15_4_tsni = function lambda$_inst_20_21_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_20_21_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_20_21_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_22_23_tsni = function lambda$_inst_22_23_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_22_23_21_tsni(fs_);
      return NofibPrelude.force(tmp)
    } else {
      f0 = param0;
      kss = param1;
      scrut1 = NofibPrelude.force(kss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        f1 = param01;
        gss = param11;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power1.Pz.class) {
          tmp1 = - 1;
          tmp2 = tmp1 / f1;
          lambda$this = runtime.safeCall(lambda34(f1));
          tmp3 = NofibPrelude.lazy(lambda$this);
          return power1.Pc(tmp2, tmp3)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rs$_inst_22_23_21_tsni = function rs$_inst_22_23_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_22_23_21_tsni(fs_)
  }
});
lambda$_inst_22_23_21_tsni = function lambda$_inst_22_23_21_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_22_23_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_22_23_21_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_22_23_21_15_tsni = function divPs_inst_22_23_21_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_22_23_21_15_tsni(fss, gss)
  }
});
lambda$_inst_22_23_21_15_tsni = function lambda$_inst_22_23_21_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_22_23_21_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_22_23_21_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_22_23_21_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_22_23_21_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_22_23_21_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_22_23_21_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_22_23_21_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_22_23_21_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_22_23_21_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_22_23_21_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_22_23_21_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_22_23_21_15_4_tsni = function dotMult_inst_22_23_21_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_22_23_21_15_4_tsni(c, ps)
  }
});
lambda$_inst_22_23_21_15_4_tsni = function lambda$_inst_22_23_21_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_22_23_21_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_22_23_21_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_22_23_21_15_5_tsni = function dotMult_inst_22_23_21_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_22_23_21_15_5_tsni(c, ps)
  }
});
lambda$_inst_22_23_21_15_5_tsni = function lambda$_inst_22_23_21_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_22_23_21_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_22_23_21_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_22_23_21_15_6_tsni = function dotMult_inst_22_23_21_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_22_23_21_15_6_tsni(c, ps)
  }
});
lambda$_inst_22_23_21_15_6_tsni = function lambda$_inst_22_23_21_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_22_23_21_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_22_23_21_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
divPs_inst_24_tsni = function divPs_inst_24_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$7(fss, gss)
  }
});
dotMult_inst_24_6_tsni = function dotMult_inst_24_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_24_6_tsni(c, ps)
  }
});
lambda$_inst_24_6_tsni = function lambda$_inst_24_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_24_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_24_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_24_5_tsni = function dotMult_inst_24_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_24_5_tsni(c, ps)
  }
});
lambda$_inst_24_5_tsni = function lambda$_inst_24_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_24_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_24_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_24_4_tsni = function dotMult_inst_24_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_24_4_tsni(c, ps)
  }
});
lambda$_inst_24_4_tsni = function lambda$_inst_24_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_24_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_24_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
divPs_inst_25_tsni = function divPs_inst_25_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda13(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_25_tsni = function lambda$_inst_25_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_25_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_25_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_25_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_25_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_25_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_25_5_tsni(q, gs);
          tmp10 = negatePs_inst_25_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_25_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_25_4_tsni(q, gs);
        tmp16 = negatePs_inst_25_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_25_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_25_6_tsni = function dotMult_inst_25_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_25_6_tsni(c, ps)
  }
});
lambda$_inst_25_6_tsni = function lambda$_inst_25_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_25_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_25_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_25_5_tsni = function dotMult_inst_25_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_25_5_tsni(c, ps)
  }
});
lambda$_inst_25_5_tsni = function lambda$_inst_25_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_25_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_25_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_25_4_tsni = function dotMult_inst_25_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_25_4_tsni(c, ps)
  }
});
lambda$_inst_25_4_tsni = function lambda$_inst_25_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_25_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_25_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_26_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_tsni(fss, gss)
  }
});
lambda$_inst_26_tsni = function lambda$_inst_26_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = power1.divPs(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = power1.divPs(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_26_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_26_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = power1.divPs(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_26_5_tsni(q, gs);
          tmp10 = negatePs_inst_26_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = power1.divPs(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_26_4_tsni(q, gs);
        tmp16 = negatePs_inst_26_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = power1.divPs(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_26_6_tsni = function dotMult_inst_26_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_26_6_tsni(c, ps)
  }
});
lambda$_inst_26_6_tsni = function lambda$_inst_26_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_26_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_26_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_26_5_tsni = function dotMult_inst_26_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_26_5_tsni(c, ps)
  }
});
lambda$_inst_26_5_tsni = function lambda$_inst_26_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_26_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_26_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_26_4_tsni = function dotMult_inst_26_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_26_4_tsni(c, ps)
  }
});
lambda$_inst_26_4_tsni = function lambda$_inst_26_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_26_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_26_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_27_28_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_27_28_23_tsni(fss)
  }
});
lambda$_inst_27_28_23_tsni = function lambda$_inst_27_28_23_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_27_28_23_21_tsni(fs_);
      return NofibPrelude.force(tmp)
    } else {
      f0 = param0;
      kss = param1;
      scrut1 = NofibPrelude.force(kss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        f1 = param01;
        gss = param11;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power1.Pz.class) {
          tmp1 = - 1;
          tmp2 = tmp1 / f1;
          lambda$this = runtime.safeCall(lambda34(f1));
          tmp3 = NofibPrelude.lazy(lambda$this);
          return power1.Pc(tmp2, tmp3)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rs$_inst_27_28_23_21_tsni = function rs$_inst_27_28_23_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_27_28_23_21_tsni(fs_)
  }
});
lambda$_inst_27_28_23_21_tsni = function lambda$_inst_27_28_23_21_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_27_28_23_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_27_28_23_21_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_27_28_23_21_15_tsni = function divPs_inst_27_28_23_21_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_27_28_23_21_15_tsni(fss, gss)
  }
});
lambda$_inst_27_28_23_21_15_tsni = function lambda$_inst_27_28_23_21_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_27_28_23_21_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_27_28_23_21_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_27_28_23_21_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_27_28_23_21_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_27_28_23_21_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_27_28_23_21_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_27_28_23_21_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_27_28_23_21_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_27_28_23_21_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_27_28_23_21_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_27_28_23_21_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_27_28_23_21_15_6_tsni = function dotMult_inst_27_28_23_21_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_6_tsni(c, ps)
  }
});
lambda$_inst_27_28_23_21_15_6_tsni = function lambda$_inst_27_28_23_21_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_27_28_23_21_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_27_28_23_21_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_27_28_23_21_15_5_tsni = function dotMult_inst_27_28_23_21_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_5_tsni(c, ps)
  }
});
lambda$_inst_27_28_23_21_15_5_tsni = function lambda$_inst_27_28_23_21_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_27_28_23_21_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_27_28_23_21_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_27_28_23_21_15_4_tsni = function dotMult_inst_27_28_23_21_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_4_tsni(c, ps)
  }
});
lambda$_inst_27_28_23_21_15_4_tsni = function lambda$_inst_27_28_23_21_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_27_28_23_21_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_27_28_23_21_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_29_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_29_tsni(fss)
  }
});
lambda$_inst_29_tsni = function lambda$_inst_29_tsni(fss) {
  let scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gss = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        if (param01 === 0) {
          fs_1 = param11;
          tmp = power1.sqrtPs(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_29_12_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_29_12_tsni = function qs$_inst_29_12_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_29_12_tsni(fs_)
  }
});
lambda$_inst_29_12_tsni = function lambda$_inst_29_12_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_29_12_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_29_12_53_tsni(tmp1);
  tmp3 = qs$_inst_29_12_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_29_12_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_29_12_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
divPs_inst_29_12_3_tsni = function divPs_inst_29_12_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_12_3_tsni(fss, gss)
  }
});
lambda$_inst_29_12_3_tsni = function lambda$_inst_29_12_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_29_12_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_29_12_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_29_12_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_29_12_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_29_12_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_29_12_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_29_12_3_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_29_12_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_29_12_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_29_12_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_29_12_3_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_29_12_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_29_12_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_29_12_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_29_12_3_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_29_12_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_29_12_3_6_tsni = function dotMult_inst_29_12_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_29_12_3_6_tsni(c, ps)
  }
});
lambda$_inst_29_12_3_6_tsni = function lambda$_inst_29_12_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_29_12_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_29_12_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_29_12_3_5_tsni = function dotMult_inst_29_12_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_29_12_3_5_tsni(c, ps)
  }
});
lambda$_inst_29_12_3_5_tsni = function lambda$_inst_29_12_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_29_12_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_29_12_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_29_12_3_4_tsni = function dotMult_inst_29_12_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_29_12_3_4_tsni(c, ps)
  }
});
lambda$_inst_29_12_3_4_tsni = function lambda$_inst_29_12_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_29_12_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_29_12_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_29_12_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_29_12_1_2_tsni(fs_)
  }
});
lambda$_inst_29_12_1_2_tsni = function lambda$_inst_29_12_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
integralLz_inst_30_31_tsni = function integralLz_inst_30_31_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_31_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_30_31_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_30_31_32_33_tsni(fs_)
  }
});
lambda$_inst_30_31_32_33_tsni = function lambda$_inst_30_31_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_30_31_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return (n) => {
    return match_scrut_arm_Pc_inst_30_35_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_30_31_32_33_34_tsni = function int1_inst_30_31_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_31_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_30_31_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_30_31_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_30_31_32_33_34_tsni = function lambda$_inst_30_31_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return (n1) => {
      return () => {
        return power1.Pz
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_30_31_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return (n1) => {
      return match_scrut_arm_Pc_inst_30_35_36_37_38_tsni(n1, _deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
integral_inst_30_35_tsni = function integral_inst_30_35_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_30_35_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_30_35_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_30_35_36_37_tsni(fs_)
  }
});
lambda$_inst_30_35_36_37_tsni = function lambda$_inst_30_35_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_30_35_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    return match_scrut_arm_Pc_inst_30_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_30_35_36_37_38_tsni = function int1_inst_30_35_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_35_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_30_35_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_30_35_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_30_35_36_37_38_tsni = function lambda$_inst_30_35_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
integralLz_inst_39_40_tsni = function integralLz_inst_39_40_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_40_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_40_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_39_40_32_33_tsni(fs_)
  }
});
lambda$_inst_39_40_32_33_tsni = function lambda$_inst_39_40_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_39_40_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return () => {
    return match_scrut_arm_Pc_inst_39_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_39_40_32_33_34_tsni = function int1_inst_39_40_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_40_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_40_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_39_40_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_39_40_32_33_34_tsni = function lambda$_inst_39_40_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_39_40_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_39_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sinx_inst_41_42_tsni = function sinx_inst_41_42_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda50);
  tmp1 = integralLz_inst_41_42_40_tsni(sinx_inst_41_42_tsni);
  tmp2 = minusPs_inst_41_42_62_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_41_42_40_tsni = function integralLz_inst_41_42_40_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_40_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_42_40_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_42_40_32_33_tsni(fs_)
  }
});
lambda$_inst_41_42_40_32_33_tsni = function lambda$_inst_41_42_40_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_41_42_40_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return () => {
    return match_scrut_arm_Pc_inst_41_42_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_42_40_32_33_34_tsni = function int1_inst_41_42_40_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_40_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_42_40_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_42_40_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_41_42_40_32_33_34_tsni = function lambda$_inst_41_42_40_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_41_42_40_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_41_42_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cosx_inst_41_43_tsni = function cosx_inst_41_43_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda48);
  tmp1 = integralLz_inst_41_43_31_tsni(cosx_inst_41_43_tsni);
  tmp2 = integral_inst_41_43_35_tsni(tmp1);
  return minusPs_inst_41_43_60_tsni(tmp, tmp2)
};
integral_inst_41_43_35_tsni = function integral_inst_41_43_35_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_43_35_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_41_43_35_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_43_35_36_37_tsni(fs_)
  }
});
lambda$_inst_41_43_35_36_37_tsni = function lambda$_inst_41_43_35_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_41_43_35_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    return match_scrut_arm_Pc_inst_41_43_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_43_35_36_37_38_tsni = function int1_inst_41_43_35_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_43_35_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_43_35_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_43_35_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_41_43_35_36_37_38_tsni = function lambda$_inst_41_43_35_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
integralLz_inst_41_43_31_tsni = function integralLz_inst_41_43_31_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_43_31_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_43_31_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_43_31_32_33_tsni(fs_)
  }
});
lambda$_inst_41_43_31_32_33_tsni = function lambda$_inst_41_43_31_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_41_43_31_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return (n) => {
    return match_scrut_arm_Pc_inst_41_43_35_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_43_31_32_33_34_tsni = function int1_inst_41_43_31_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_43_31_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_43_31_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_43_31_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_41_43_31_32_33_34_tsni = function lambda$_inst_41_43_31_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return (n1) => {
      return () => {
        return power1.Pz
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_41_43_31_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return (n1) => {
      return match_scrut_arm_Pc_inst_41_43_35_36_37_38_tsni(n1, _deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sqrtPs_inst_41_44_tsni = function sqrtPs_inst_41_44_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_41_44_tsni(fss)
  }
});
lambda$_inst_41_44_tsni = function lambda$_inst_41_44_tsni(fss) {
  let scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gss = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        if (param01 === 0) {
          fs_1 = param11;
          tmp = sqrtPs_inst_41_44_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_41_44_12_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_41_44_12_tsni = function qs$_inst_41_44_12_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_44_12_tsni(fs_)
  }
});
lambda$_inst_41_44_12_tsni = function lambda$_inst_41_44_12_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_41_44_12_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_41_44_12_53_tsni(tmp1);
  tmp3 = qs$_inst_41_44_12_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_41_44_12_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_41_44_12_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
lambda_inst_41_44_12_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_44_12_1_2_tsni(fs_)
  }
});
lambda$_inst_41_44_12_1_2_tsni = function lambda$_inst_41_44_12_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
divPs_inst_41_44_12_3_tsni = function divPs_inst_41_44_12_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_44_12_3_tsni(fss, gss)
  }
});
lambda$_inst_41_44_12_3_tsni = function lambda$_inst_41_44_12_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_41_44_12_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_41_44_12_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_41_44_12_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_41_44_12_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_41_44_12_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_41_44_12_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_41_44_12_3_tsni(tmp5, tmp6);
          _deforest_Pc_f = q1;
          _deforest_Pc_s = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_41_44_12_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_41_44_12_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_41_44_12_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_41_44_12_3_tsni(tmp11, tmp12);
          _deforest_Pc_f2 = q;
          _deforest_Pc_s2 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_41_44_12_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_41_44_12_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_41_44_12_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_41_44_12_3_tsni(tmp17, tmp18);
        _deforest_Pc_f1 = q;
        _deforest_Pc_s1 = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_41_44_12_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_44_12_3_4_tsni = function dotMult_inst_41_44_12_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_44_12_3_4_tsni(c, ps)
  }
});
lambda$_inst_41_44_12_3_4_tsni = function lambda$_inst_41_44_12_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_44_12_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_44_12_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_44_12_3_5_tsni = function dotMult_inst_41_44_12_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_44_12_3_5_tsni(c, ps)
  }
});
lambda$_inst_41_44_12_3_5_tsni = function lambda$_inst_41_44_12_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_44_12_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_44_12_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_44_12_3_6_tsni = function dotMult_inst_41_44_12_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_44_12_3_6_tsni(c, ps)
  }
});
lambda$_inst_41_44_12_3_6_tsni = function lambda$_inst_41_44_12_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_44_12_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_44_12_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sinx_inst_41_45_tsni = function sinx_inst_41_45_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda50);
  tmp1 = integralLz_inst_41_45_40_tsni(sinx_inst_41_45_tsni);
  tmp2 = minusPs_inst_41_45_62_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_41_45_40_tsni = function integralLz_inst_41_45_40_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_45_40_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_45_40_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_45_40_32_33_tsni(fs_)
  }
});
lambda$_inst_41_45_40_32_33_tsni = function lambda$_inst_41_45_40_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_41_45_40_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return () => {
    return match_scrut_arm_Pc_inst_41_45_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_45_40_32_33_34_tsni = function int1_inst_41_45_40_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_45_40_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_45_40_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_45_40_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_41_45_40_32_33_34_tsni = function lambda$_inst_41_45_40_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_41_45_40_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_41_45_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cosx_inst_41_46_tsni = function cosx_inst_41_46_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda48);
  tmp1 = integralLz_inst_41_46_31_tsni(cosx_inst_41_46_tsni);
  tmp2 = integral_inst_41_46_35_tsni(tmp1);
  return minusPs_inst_41_46_60_tsni(tmp, tmp2)
};
integral_inst_41_46_35_tsni = function integral_inst_41_46_35_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_46_35_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_41_46_35_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_46_35_36_37_tsni(fs_)
  }
});
lambda$_inst_41_46_35_36_37_tsni = function lambda$_inst_41_46_35_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_41_46_35_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    return match_scrut_arm_Pc_inst_41_46_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_46_35_36_37_38_tsni = function int1_inst_41_46_35_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_46_35_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_46_35_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_46_35_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_41_46_35_36_37_38_tsni = function lambda$_inst_41_46_35_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
integralLz_inst_41_46_31_tsni = function integralLz_inst_41_46_31_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_46_31_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_46_31_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_46_31_32_33_tsni(fs_)
  }
});
lambda$_inst_41_46_31_32_33_tsni = function lambda$_inst_41_46_31_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_41_46_31_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return (n) => {
    return match_scrut_arm_Pc_inst_41_46_35_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_41_46_31_32_33_34_tsni = function int1_inst_41_46_31_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_46_31_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_46_31_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_46_31_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_41_46_31_32_33_34_tsni = function lambda$_inst_41_46_31_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return (n1) => {
      return () => {
        return power1.Pz
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_41_46_31_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return (n1) => {
      return match_scrut_arm_Pc_inst_41_46_35_36_37_38_tsni(n1, _deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
divPs_inst_41_47_tsni = function divPs_inst_41_47_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_47_tsni(fss, gss)
  }
});
lambda$_inst_41_47_tsni = function lambda$_inst_41_47_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_41_47_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_41_47_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_41_47_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_41_47_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_41_47_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_41_47_5_tsni(q, gs);
          tmp10 = negatePs_inst_41_47_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_41_47_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_41_47_4_tsni(q, gs);
        tmp16 = negatePs_inst_41_47_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_41_47_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_47_4_tsni = function dotMult_inst_41_47_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_47_4_tsni(c, ps)
  }
});
lambda$_inst_41_47_4_tsni = function lambda$_inst_41_47_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_47_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_47_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_47_5_tsni = function dotMult_inst_41_47_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_47_5_tsni(c, ps)
  }
});
lambda$_inst_41_47_5_tsni = function lambda$_inst_41_47_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_47_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_47_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_47_6_tsni = function dotMult_inst_41_47_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_47_6_tsni(c, ps)
  }
});
lambda$_inst_41_47_6_tsni = function lambda$_inst_41_47_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_47_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_47_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
divPs_inst_41_48_tsni = function divPs_inst_41_48_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_48_tsni(fss, gss)
  }
});
lambda$_inst_41_48_tsni = function lambda$_inst_41_48_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_41_48_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_41_50_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_41_50_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_41_48_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_41_48_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_41_48_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_41_48_tsni(tmp5, tmp6);
          _deforest_Pc_f = q1;
          _deforest_Pc_s = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_41_50_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_41_48_5_tsni(q, gs);
          tmp10 = negatePs_inst_41_48_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_41_48_tsni(tmp11, tmp12);
          _deforest_Pc_f2 = q;
          _deforest_Pc_s2 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_41_50_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_41_48_4_tsni(q, gs);
        tmp16 = negatePs_inst_41_48_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_41_48_tsni(tmp17, tmp18);
        _deforest_Pc_f1 = q;
        _deforest_Pc_s1 = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_41_50_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_48_4_tsni = function dotMult_inst_41_48_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_48_4_tsni(c, ps)
  }
});
lambda$_inst_41_48_4_tsni = function lambda$_inst_41_48_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_48_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_48_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_48_5_tsni = function dotMult_inst_41_48_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_48_5_tsni(c, ps)
  }
});
lambda$_inst_41_48_5_tsni = function lambda$_inst_41_48_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_48_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_48_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_48_6_tsni = function dotMult_inst_41_48_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_48_6_tsni(c, ps)
  }
});
lambda$_inst_41_48_6_tsni = function lambda$_inst_41_48_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_48_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_48_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
revert_inst_41_49_tsni = function revert_inst_41_49_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_41_49_28_23_tsni(fss)
  }
});
lambda$_inst_41_49_28_23_tsni = function lambda$_inst_41_49_28_23_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
rs$_inst_41_49_28_23_21_tsni = function rs$_inst_41_49_28_23_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_49_28_23_21_tsni(fs_)
  }
});
lambda$_inst_41_49_28_23_21_tsni = function lambda$_inst_41_49_28_23_21_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_41_49_28_23_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_41_49_28_23_21_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_41_49_28_23_21_15_tsni = function divPs_inst_41_49_28_23_21_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_tsni(fss, gss)
  }
});
lambda$_inst_41_49_28_23_21_15_tsni = function lambda$_inst_41_49_28_23_21_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_41_49_28_23_21_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_41_49_28_23_21_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_41_49_28_23_21_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_41_49_28_23_21_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_41_49_28_23_21_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_41_49_28_23_21_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_41_49_28_23_21_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_41_49_28_23_21_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_41_49_28_23_21_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_41_49_28_23_21_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_41_49_28_23_21_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_49_28_23_21_15_4_tsni = function dotMult_inst_41_49_28_23_21_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_4_tsni(c, ps)
  }
});
lambda$_inst_41_49_28_23_21_15_4_tsni = function lambda$_inst_41_49_28_23_21_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_49_28_23_21_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_49_28_23_21_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_49_28_23_21_15_5_tsni = function dotMult_inst_41_49_28_23_21_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_5_tsni(c, ps)
  }
});
lambda$_inst_41_49_28_23_21_15_5_tsni = function lambda$_inst_41_49_28_23_21_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_49_28_23_21_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_49_28_23_21_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_41_49_28_23_21_15_6_tsni = function dotMult_inst_41_49_28_23_21_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_6_tsni(c, ps)
  }
});
lambda$_inst_41_49_28_23_21_15_6_tsni = function lambda$_inst_41_49_28_23_21_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_41_49_28_23_21_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_41_49_28_23_21_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
integral_inst_41_50_tsni = function integral_inst_41_50_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_50_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_41_50_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_50_36_37_tsni(fs_)
  }
});
lambda$_inst_41_50_36_37_tsni = function lambda$_inst_41_50_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_41_50_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    let param0, param1, f0, kss, scrut, param01, param11, f1, gss, scrut1, fs_1, tmp1, tmp2, tmp3, tmp4, lambda$this;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    if (param0 === 0) {
      fs_1 = param1;
      tmp1 = rs$_inst_41_49_28_23_21_tsni(fs_1);
      return NofibPrelude.force(tmp1)
    } else {
      f0 = param0;
      kss = param1;
      scrut = NofibPrelude.force(kss);
      if (scrut instanceof power1.Pc.class) {
        param01 = scrut.f;
        param11 = scrut.s;
        f1 = param01;
        gss = param11;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pz.class) {
          tmp2 = - 1;
          tmp3 = tmp2 / f1;
          lambda$this = runtime.safeCall(lambda34(f1));
          tmp4 = NofibPrelude.lazy(lambda$this);
          return power1.Pc(tmp3, tmp4)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
testPower_nofib_inst_51_52_tsni = function testPower_nofib_inst_51_52_tsni(p) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
  tmp = sinx_inst_51_52_42_tsni();
  tmp1 = power.fromIntegerPs(1);
  tmp2 = cosx_inst_51_52_43_tsni();
  tmp3 = power.powerPs(tmp2, 2);
  tmp4 = power.minusPs(tmp1, tmp3);
  tmp5 = sqrtPs_inst_51_52_44_tsni(tmp4);
  tmp6 = power.minusPs(tmp, tmp5);
  tmp7 = power.extract(p, tmp6);
  tmp8 = sinx_inst_51_52_45_tsni();
  tmp9 = cosx_inst_51_52_46_tsni();
  tmp10 = divPs_inst_51_52_47_tsni(tmp8, tmp9);
  tmp11 = power.fromIntegerPs(1);
  tmp12 = power.fromIntegerPs(1);
  tmp13 = power.x_();
  tmp14 = power.powerPs(tmp13, 2);
  tmp15 = power.addPs(tmp12, tmp14);
  tmp16 = divPs_inst_51_52_48_tsni(tmp11, tmp15);
  tmp17 = integral_inst_51_52_50_tsni(tmp16);
  tmp18 = revert_inst_51_52_49_tsni(tmp17);
  tmp19 = power.minusPs(tmp10, tmp18);
  tmp20 = power.extract(p, tmp19);
  tmp21 = (tmp7 , tmp20);
  tmp22 = power.ts();
  tmp23 = power.extract(p, tmp22);
  tmp24 = (tmp21 , tmp23);
  tmp25 = power.tree();
  tmp26 = power.extract(p, tmp25);
  return (tmp24 , tmp26)
};
revert_inst_51_52_49_tsni = function revert_inst_51_52_49_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_51_52_49_28_23_tsni(fss)
  }
});
lambda$_inst_51_52_49_28_23_tsni = function lambda$_inst_51_52_49_28_23_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
rs$_inst_51_52_49_28_23_21_tsni = function rs$_inst_51_52_49_28_23_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_tsni(fs_)
  }
});
lambda$_inst_51_52_49_28_23_21_tsni = function lambda$_inst_51_52_49_28_23_21_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_51_52_49_28_23_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_51_52_49_28_23_21_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_51_52_49_28_23_21_15_tsni = function divPs_inst_51_52_49_28_23_21_15_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_tsni(fss, gss)
  }
});
lambda$_inst_51_52_49_28_23_21_15_tsni = function lambda$_inst_51_52_49_28_23_21_15_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_51_52_49_28_23_21_15_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_51_52_49_28_23_21_15_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_51_52_49_28_23_21_15_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_51_52_49_28_23_21_15_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_51_52_49_28_23_21_15_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_51_52_49_28_23_21_15_5_tsni(q, gs);
          tmp10 = negatePs_inst_51_52_49_28_23_21_15_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_51_52_49_28_23_21_15_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_51_52_49_28_23_21_15_4_tsni(q, gs);
        tmp16 = negatePs_inst_51_52_49_28_23_21_15_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_51_52_49_28_23_21_15_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_49_28_23_21_15_6_tsni = function dotMult_inst_51_52_49_28_23_21_15_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_6_tsni(c, ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_6_tsni = function lambda$_inst_51_52_49_28_23_21_15_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_49_28_23_21_15_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_49_28_23_21_15_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_49_28_23_21_15_5_tsni = function dotMult_inst_51_52_49_28_23_21_15_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_5_tsni(c, ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_5_tsni = function lambda$_inst_51_52_49_28_23_21_15_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_49_28_23_21_15_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_49_28_23_21_15_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_49_28_23_21_15_4_tsni = function dotMult_inst_51_52_49_28_23_21_15_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_4_tsni(c, ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_4_tsni = function lambda$_inst_51_52_49_28_23_21_15_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_49_28_23_21_15_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_49_28_23_21_15_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
integral_inst_51_52_50_tsni = function integral_inst_51_52_50_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_51_52_50_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_51_52_50_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_50_36_37_tsni(fs_)
  }
});
lambda$_inst_51_52_50_36_37_tsni = function lambda$_inst_51_52_50_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_51_52_50_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    let param0, param1, f0, kss, scrut, param01, param11, f1, gss, scrut1, fs_1, tmp1, tmp2, tmp3, tmp4, lambda$this;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    if (param0 === 0) {
      fs_1 = param1;
      tmp1 = rs$_inst_51_52_49_28_23_21_tsni(fs_1);
      return NofibPrelude.force(tmp1)
    } else {
      f0 = param0;
      kss = param1;
      scrut = NofibPrelude.force(kss);
      if (scrut instanceof power1.Pc.class) {
        param01 = scrut.f;
        param11 = scrut.s;
        f1 = param01;
        gss = param11;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pz.class) {
          tmp2 = - 1;
          tmp3 = tmp2 / f1;
          lambda$this = runtime.safeCall(lambda34(f1));
          tmp4 = NofibPrelude.lazy(lambda$this);
          return power1.Pc(tmp3, tmp4)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
divPs_inst_51_52_48_tsni = function divPs_inst_51_52_48_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_51_52_48_tsni(fss, gss)
  }
});
lambda$_inst_51_52_48_tsni = function lambda$_inst_51_52_48_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_51_52_48_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_51_52_50_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_51_52_50_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_51_52_48_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_51_52_48_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_51_52_48_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_51_52_48_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_51_52_50_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_51_52_48_5_tsni(q, gs);
          tmp10 = negatePs_inst_51_52_48_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_51_52_48_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_51_52_50_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_51_52_48_4_tsni(q, gs);
        tmp16 = negatePs_inst_51_52_48_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_51_52_48_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_51_52_50_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_48_6_tsni = function dotMult_inst_51_52_48_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_48_6_tsni(c, ps)
  }
});
lambda$_inst_51_52_48_6_tsni = function lambda$_inst_51_52_48_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_48_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_48_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_48_5_tsni = function dotMult_inst_51_52_48_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_48_5_tsni(c, ps)
  }
});
lambda$_inst_51_52_48_5_tsni = function lambda$_inst_51_52_48_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_48_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_48_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_48_4_tsni = function dotMult_inst_51_52_48_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_48_4_tsni(c, ps)
  }
});
lambda$_inst_51_52_48_4_tsni = function lambda$_inst_51_52_48_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_48_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_48_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
divPs_inst_51_52_47_tsni = function divPs_inst_51_52_47_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_51_52_47_tsni(fss, gss)
  }
});
lambda$_inst_51_52_47_tsni = function lambda$_inst_51_52_47_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_51_52_47_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_51_52_47_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_51_52_47_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_51_52_47_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_51_52_47_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_51_52_47_5_tsni(q, gs);
          tmp10 = negatePs_inst_51_52_47_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_51_52_47_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_51_52_47_4_tsni(q, gs);
        tmp16 = negatePs_inst_51_52_47_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_51_52_47_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_47_6_tsni = function dotMult_inst_51_52_47_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_47_6_tsni(c, ps)
  }
});
lambda$_inst_51_52_47_6_tsni = function lambda$_inst_51_52_47_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_47_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_47_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_47_5_tsni = function dotMult_inst_51_52_47_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_47_5_tsni(c, ps)
  }
});
lambda$_inst_51_52_47_5_tsni = function lambda$_inst_51_52_47_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_47_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_47_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_47_4_tsni = function dotMult_inst_51_52_47_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_47_4_tsni(c, ps)
  }
});
lambda$_inst_51_52_47_4_tsni = function lambda$_inst_51_52_47_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_47_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_47_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cosx_inst_51_52_46_tsni = function cosx_inst_51_52_46_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda48);
  tmp1 = integralLz_inst_51_52_46_31_tsni(cosx_inst_51_52_46_tsni);
  tmp2 = integral_inst_51_52_46_35_tsni(tmp1);
  return minusPs_inst_51_52_46_60_tsni(tmp, tmp2)
};
integralLz_inst_51_52_46_31_tsni = function integralLz_inst_51_52_46_31_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_46_31_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_46_31_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_46_31_32_33_tsni(fs_)
  }
});
lambda$_inst_51_52_46_31_32_33_tsni = function lambda$_inst_51_52_46_31_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_51_52_46_31_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return (n) => {
    return match_scrut_arm_Pc_inst_51_52_46_35_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_46_31_32_33_34_tsni = function int1_inst_51_52_46_31_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_46_31_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_46_31_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_46_31_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_51_52_46_31_32_33_34_tsni = function lambda$_inst_51_52_46_31_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return (n1) => {
      return () => {
        return power1.Pz
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_51_52_46_31_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return (n1) => {
      return match_scrut_arm_Pc_inst_51_52_46_35_36_37_38_tsni(n1, _deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
integral_inst_51_52_46_35_tsni = function integral_inst_51_52_46_35_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_51_52_46_35_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_51_52_46_35_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_46_35_36_37_tsni(fs_)
  }
});
lambda$_inst_51_52_46_35_36_37_tsni = function lambda$_inst_51_52_46_35_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_51_52_46_35_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_46_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_46_35_36_37_38_tsni = function int1_inst_51_52_46_35_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_46_35_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_46_35_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_46_35_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_51_52_46_35_36_37_38_tsni = function lambda$_inst_51_52_46_35_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
sinx_inst_51_52_45_tsni = function sinx_inst_51_52_45_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda50);
  tmp1 = integralLz_inst_51_52_45_40_tsni(sinx_inst_51_52_45_tsni);
  tmp2 = minusPs_inst_51_52_45_62_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_51_52_45_40_tsni = function integralLz_inst_51_52_45_40_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_45_40_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_45_40_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_45_40_32_33_tsni(fs_)
  }
});
lambda$_inst_51_52_45_40_32_33_tsni = function lambda$_inst_51_52_45_40_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_51_52_45_40_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_45_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_45_40_32_33_34_tsni = function int1_inst_51_52_45_40_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_45_40_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_45_40_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_45_40_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_51_52_45_40_32_33_34_tsni = function lambda$_inst_51_52_45_40_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_51_52_45_40_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_51_52_45_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sqrtPs_inst_51_52_44_tsni = function sqrtPs_inst_51_52_44_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_51_52_44_tsni(fss)
  }
});
lambda$_inst_51_52_44_tsni = function lambda$_inst_51_52_44_tsni(fss) {
  let scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gss = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        if (param01 === 0) {
          fs_1 = param11;
          tmp = sqrtPs_inst_51_52_44_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_51_52_44_12_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qs$_inst_51_52_44_12_tsni = function qs$_inst_51_52_44_12_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_44_12_tsni(fs_)
  }
});
lambda$_inst_51_52_44_12_tsni = function lambda$_inst_51_52_44_12_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_51_52_44_12_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_51_52_44_12_53_tsni(tmp1);
  tmp3 = qs$_inst_51_52_44_12_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_51_52_44_12_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_51_52_44_12_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
divPs_inst_51_52_44_12_3_tsni = function divPs_inst_51_52_44_12_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_51_52_44_12_3_tsni(fss, gss)
  }
});
lambda$_inst_51_52_44_12_3_tsni = function lambda$_inst_51_52_44_12_3_tsni(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_51_52_44_12_3_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return (n) => {
          return match_scrut_arm_Pz_inst_51_52_44_12_59_36_37_38_tsni(n)
        }
      }
    } else {
      return (n) => {
        return match_scrut_arm_Pz_inst_51_52_44_12_59_36_37_38_tsni(n)
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_51_52_44_12_3_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_51_52_44_12_3_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_51_52_44_12_3_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_51_52_44_12_3_tsni(tmp5, tmp6);
          _deforest_Pc_f2 = q1;
          _deforest_Pc_s2 = tmp7;
          return (n) => {
            return match_scrut_arm_Pc_inst_51_52_44_12_59_36_37_38_tsni(n, _deforest_Pc_f2, _deforest_Pc_s2)
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_51_52_44_12_3_5_tsni(q, gs);
          tmp10 = negatePs_inst_51_52_44_12_3_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_51_52_44_12_3_tsni(tmp11, tmp12);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp13;
          return (n) => {
            return match_scrut_arm_Pc_inst_51_52_44_12_59_36_37_38_tsni(n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_51_52_44_12_3_4_tsni(q, gs);
        tmp16 = negatePs_inst_51_52_44_12_3_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_51_52_44_12_3_tsni(tmp17, tmp18);
        _deforest_Pc_f = q;
        _deforest_Pc_s = tmp19;
        return (n) => {
          return match_scrut_arm_Pc_inst_51_52_44_12_59_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_44_12_3_6_tsni = function dotMult_inst_51_52_44_12_3_6_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_6_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_6_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_6_tsni(c, ps)
  }
});
lambda$_inst_51_52_44_12_3_6_tsni = function lambda$_inst_51_52_44_12_3_6_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_44_12_3_6_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_44_12_3_58_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_44_12_3_5_tsni = function dotMult_inst_51_52_44_12_3_5_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_5_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_5_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_5_tsni(c, ps)
  }
});
lambda$_inst_51_52_44_12_3_5_tsni = function lambda$_inst_51_52_44_12_3_5_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_44_12_3_5_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_44_12_3_57_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dotMult_inst_51_52_44_12_3_4_tsni = function dotMult_inst_51_52_44_12_3_4_tsni(c, ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_4_tsni(c, ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_4_tsni = (undefined, function (c, ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_4_tsni(c, ps)
  }
});
lambda$_inst_51_52_44_12_3_4_tsni = function lambda$_inst_51_52_44_12_3_4_tsni(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = dotMult_inst_51_52_44_12_3_4_tsni(c, fs_);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp1;
    return () => {
      let param01, param11, f1, fs_1, tmp2, tmp3;
      param01 = _deforest_Pc_f;
      param11 = _deforest_Pc_s;
      f1 = param01;
      fs_1 = param11;
      tmp2 = - f1;
      tmp3 = negatePs_inst_51_52_44_12_3_56_tsni(fs_1);
      return power1.Pc(tmp2, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_51_52_44_12_1_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_44_12_1_2_tsni(fs_)
  }
});
lambda$_inst_51_52_44_12_1_2_tsni = function lambda$_inst_51_52_44_12_1_2_tsni(fs_) {
  let _deforest_Pc_f, _deforest_Pc_s;
  _deforest_Pc_f = 1;
  _deforest_Pc_s = fs_;
  return () => {
    let param0, param1, fs_1, tmp;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    fs_1 = param1;
    tmp = deriv1(fs_1, 1);
    return NofibPrelude.force(tmp)
  }
};
cosx_inst_51_52_43_tsni = function cosx_inst_51_52_43_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda48);
  tmp1 = integralLz_inst_51_52_43_31_tsni(cosx_inst_51_52_43_tsni);
  tmp2 = integral_inst_51_52_43_35_tsni(tmp1);
  return minusPs_inst_51_52_43_60_tsni(tmp, tmp2)
};
integralLz_inst_51_52_43_31_tsni = function integralLz_inst_51_52_43_31_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_43_31_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_43_31_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_43_31_32_33_tsni(fs_)
  }
});
lambda$_inst_51_52_43_31_32_33_tsni = function lambda$_inst_51_52_43_31_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_51_52_43_31_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return (n) => {
    return match_scrut_arm_Pc_inst_51_52_43_35_36_37_38_tsni(n, _deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_43_31_32_33_34_tsni = function int1_inst_51_52_43_31_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_43_31_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_43_31_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_43_31_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_51_52_43_31_32_33_34_tsni = function lambda$_inst_51_52_43_31_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return (n1) => {
      return () => {
        return power1.Pz
      }
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_51_52_43_31_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return (n1) => {
      return match_scrut_arm_Pc_inst_51_52_43_35_36_37_38_tsni(n1, _deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
integral_inst_51_52_43_35_tsni = function integral_inst_51_52_43_35_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_51_52_43_35_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_51_52_43_35_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_43_35_36_37_tsni(fs_)
  }
});
lambda$_inst_51_52_43_35_36_37_tsni = function lambda$_inst_51_52_43_35_36_37_tsni(fs_) {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = int1_inst_51_52_43_35_36_37_38_tsni(fs_, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_43_60_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_43_35_36_37_38_tsni = function int1_inst_51_52_43_35_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_43_35_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_43_35_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_43_35_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_51_52_43_35_36_37_38_tsni = function lambda$_inst_51_52_43_35_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
sinx_inst_51_52_42_tsni = function sinx_inst_51_52_42_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda50);
  tmp1 = integralLz_inst_51_52_42_40_tsni(sinx_inst_51_52_42_tsni);
  tmp2 = minusPs_inst_51_52_42_62_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_51_52_42_40_tsni = function integralLz_inst_51_52_42_40_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_42_40_32_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_42_40_32_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_42_40_32_33_tsni(fs_)
  }
});
lambda$_inst_51_52_42_40_32_33_tsni = function lambda$_inst_51_52_42_40_32_33_tsni(fs_) {
  let tmp, tmp1, _deforest_Pc_f, _deforest_Pc_s;
  tmp = runtime.safeCall(fs_());
  tmp1 = int1_inst_51_52_42_40_32_33_34_tsni(tmp, 1);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp1;
  return () => {
    return match_scrut_arm_Pc_inst_51_52_42_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
int1_inst_51_52_42_40_32_33_34_tsni = function int1_inst_51_52_42_40_32_33_34_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_42_40_32_33_34_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_42_40_32_33_34_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_42_40_32_33_34_tsni(fss, n)
  }
});
lambda$_inst_51_52_42_40_32_33_34_tsni = function lambda$_inst_51_52_42_40_32_33_34_tsni(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return () => {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1_inst_51_52_42_40_32_33_34_tsni(fs_, tmp1);
    _deforest_Pc_f = tmp;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_51_52_42_62_61_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
deriv_inst_0_53_tsni = function deriv_inst_0_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_0_53_54_55_tsni(fss)
  }
});
lambda$_inst_0_53_54_55_tsni = function lambda$_inst_0_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_0_3_56_tsni = function negatePs_inst_0_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_0_3_56_tsni(ps)
  }
});
lambda$_inst_0_3_56_tsni = function lambda$_inst_0_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_0_3_57_tsni = function negatePs_inst_0_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_0_3_57_tsni(ps)
  }
});
lambda$_inst_0_3_57_tsni = function lambda$_inst_0_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_0_3_58_tsni = function negatePs_inst_0_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_0_3_58_tsni(ps)
  }
});
lambda$_inst_0_3_58_tsni = function lambda$_inst_0_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_0_59_tsni = function integral_inst_0_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_0_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_0_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_0_59_36_37_tsni(fs_)
  }
});
lambda$_inst_0_59_36_37_tsni = function lambda$_inst_0_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_0_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_0_59_36_37_38_tsni = function int1_inst_0_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_0_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_0_59_36_37_38_tsni = function lambda$_inst_0_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_7_53_tsni = function deriv_inst_7_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_7_53_54_55_tsni(fss)
  }
});
lambda$_inst_7_53_54_55_tsni = function lambda$_inst_7_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_7_3_56_tsni = function negatePs_inst_7_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_7_3_56_tsni(ps)
  }
});
lambda$_inst_7_3_56_tsni = function lambda$_inst_7_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_7_3_57_tsni = function negatePs_inst_7_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_7_3_57_tsni(ps)
  }
});
lambda$_inst_7_3_57_tsni = function lambda$_inst_7_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_7_3_58_tsni = function negatePs_inst_7_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_7_3_58_tsni(ps)
  }
});
lambda$_inst_7_3_58_tsni = function lambda$_inst_7_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_7_59_tsni = function integral_inst_7_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_7_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_7_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_7_59_36_37_tsni(fs_)
  }
});
lambda$_inst_7_59_36_37_tsni = function lambda$_inst_7_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_7_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_7_59_36_37_38_tsni = function int1_inst_7_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_7_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_7_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_7_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_7_59_36_37_38_tsni = function lambda$_inst_7_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_8_53_tsni = function deriv_inst_8_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_8_53_54_55_tsni(fss)
  }
});
lambda$_inst_8_53_54_55_tsni = function lambda$_inst_8_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_8_3_56_tsni = function negatePs_inst_8_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_8_3_56_tsni(ps)
  }
});
lambda$_inst_8_3_56_tsni = function lambda$_inst_8_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_8_3_57_tsni = function negatePs_inst_8_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_8_3_57_tsni(ps)
  }
});
lambda$_inst_8_3_57_tsni = function lambda$_inst_8_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_8_3_58_tsni = function negatePs_inst_8_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_8_3_58_tsni(ps)
  }
});
lambda$_inst_8_3_58_tsni = function lambda$_inst_8_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_8_59_tsni = function integral_inst_8_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_8_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_8_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_8_59_36_37_tsni(fs_)
  }
});
lambda$_inst_8_59_36_37_tsni = function lambda$_inst_8_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_8_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_8_59_36_37_38_tsni = function int1_inst_8_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_8_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_8_59_36_37_38_tsni = function lambda$_inst_8_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
negatePs_inst_9_10_3_58_tsni = function negatePs_inst_9_10_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_9_10_3_58_tsni(ps)
  }
});
lambda$_inst_9_10_3_58_tsni = function lambda$_inst_9_10_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_9_10_3_57_tsni = function negatePs_inst_9_10_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_9_10_3_57_tsni(ps)
  }
});
lambda$_inst_9_10_3_57_tsni = function lambda$_inst_9_10_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_9_10_3_56_tsni = function negatePs_inst_9_10_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_9_10_3_56_tsni(ps)
  }
});
lambda$_inst_9_10_3_56_tsni = function lambda$_inst_9_10_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_9_10_59_tsni = function integral_inst_9_10_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_9_10_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_9_10_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_9_10_59_36_37_tsni(fs_)
  }
});
lambda$_inst_9_10_59_36_37_tsni = function lambda$_inst_9_10_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_9_10_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_9_10_59_36_37_38_tsni = function int1_inst_9_10_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_9_10_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_9_10_59_36_37_38_tsni = function lambda$_inst_9_10_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_9_10_53_tsni = function deriv_inst_9_10_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_9_10_53_54_55_tsni(fss)
  }
});
lambda$_inst_9_10_53_54_55_tsni = function lambda$_inst_9_10_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_11_12_3_58_tsni = function negatePs_inst_11_12_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_11_12_3_58_tsni(ps)
  }
});
lambda$_inst_11_12_3_58_tsni = function lambda$_inst_11_12_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_11_12_3_57_tsni = function negatePs_inst_11_12_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_11_12_3_57_tsni(ps)
  }
});
lambda$_inst_11_12_3_57_tsni = function lambda$_inst_11_12_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_11_12_3_56_tsni = function negatePs_inst_11_12_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_11_12_3_56_tsni(ps)
  }
});
lambda$_inst_11_12_3_56_tsni = function lambda$_inst_11_12_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_11_12_59_tsni = function integral_inst_11_12_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_11_12_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_11_12_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_11_12_59_36_37_tsni(fs_)
  }
});
lambda$_inst_11_12_59_36_37_tsni = function lambda$_inst_11_12_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_11_12_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_11_12_59_36_37_38_tsni = function int1_inst_11_12_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_11_12_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_11_12_59_36_37_38_tsni = function lambda$_inst_11_12_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_11_12_53_tsni = function deriv_inst_11_12_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_11_12_53_54_55_tsni(fss)
  }
});
lambda$_inst_11_12_53_54_55_tsni = function lambda$_inst_11_12_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_13_12_3_58_tsni = function negatePs_inst_13_12_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_13_12_3_58_tsni(ps)
  }
});
lambda$_inst_13_12_3_58_tsni = function lambda$_inst_13_12_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_13_12_3_57_tsni = function negatePs_inst_13_12_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_13_12_3_57_tsni(ps)
  }
});
lambda$_inst_13_12_3_57_tsni = function lambda$_inst_13_12_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_13_12_3_56_tsni = function negatePs_inst_13_12_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_13_12_3_56_tsni(ps)
  }
});
lambda$_inst_13_12_3_56_tsni = function lambda$_inst_13_12_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_13_12_59_tsni = function integral_inst_13_12_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_13_12_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_13_12_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_13_12_59_36_37_tsni(fs_)
  }
});
lambda$_inst_13_12_59_36_37_tsni = function lambda$_inst_13_12_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_13_12_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_13_12_59_36_37_38_tsni = function int1_inst_13_12_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_13_12_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_13_12_59_36_37_38_tsni = function lambda$_inst_13_12_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_13_12_53_tsni = function deriv_inst_13_12_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_12_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_12_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_13_12_53_54_55_tsni(fss)
  }
});
lambda$_inst_13_12_53_54_55_tsni = function lambda$_inst_13_12_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_14_15_56_tsni = function negatePs_inst_14_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_14_15_56_tsni(ps)
  }
});
lambda$_inst_14_15_56_tsni = function lambda$_inst_14_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_14_15_57_tsni = function negatePs_inst_14_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_14_15_57_tsni(ps)
  }
});
lambda$_inst_14_15_57_tsni = function lambda$_inst_14_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_14_15_58_tsni = function negatePs_inst_14_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_14_15_58_tsni(ps)
  }
});
lambda$_inst_14_15_58_tsni = function lambda$_inst_14_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_16_15_56_tsni = function negatePs_inst_16_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_16_15_56_tsni(ps)
  }
});
lambda$_inst_16_15_56_tsni = function lambda$_inst_16_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_16_15_57_tsni = function negatePs_inst_16_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_16_15_57_tsni(ps)
  }
});
lambda$_inst_16_15_57_tsni = function lambda$_inst_16_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_16_15_58_tsni = function negatePs_inst_16_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_16_15_58_tsni(ps)
  }
});
lambda$_inst_16_15_58_tsni = function lambda$_inst_16_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_17_15_56_tsni = function negatePs_inst_17_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_17_15_56_tsni(ps)
  }
});
lambda$_inst_17_15_56_tsni = function lambda$_inst_17_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_17_15_57_tsni = function negatePs_inst_17_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_17_15_57_tsni(ps)
  }
});
lambda$_inst_17_15_57_tsni = function lambda$_inst_17_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_17_15_58_tsni = function negatePs_inst_17_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_17_15_58_tsni(ps)
  }
});
lambda$_inst_17_15_58_tsni = function lambda$_inst_17_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_18_19_15_58_tsni = function negatePs_inst_18_19_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_18_19_15_58_tsni(ps)
  }
});
lambda$_inst_18_19_15_58_tsni = function lambda$_inst_18_19_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_18_19_15_57_tsni = function negatePs_inst_18_19_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_18_19_15_57_tsni(ps)
  }
});
lambda$_inst_18_19_15_57_tsni = function lambda$_inst_18_19_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_18_19_15_56_tsni = function negatePs_inst_18_19_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_18_19_15_56_tsni(ps)
  }
});
lambda$_inst_18_19_15_56_tsni = function lambda$_inst_18_19_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_20_21_15_58_tsni = function negatePs_inst_20_21_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_20_21_15_58_tsni(ps)
  }
});
lambda$_inst_20_21_15_58_tsni = function lambda$_inst_20_21_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_20_21_15_57_tsni = function negatePs_inst_20_21_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_20_21_15_57_tsni(ps)
  }
});
lambda$_inst_20_21_15_57_tsni = function lambda$_inst_20_21_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_20_21_15_56_tsni = function negatePs_inst_20_21_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_21_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_21_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_20_21_15_56_tsni(ps)
  }
});
lambda$_inst_20_21_15_56_tsni = function lambda$_inst_20_21_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_22_23_21_15_56_tsni = function negatePs_inst_22_23_21_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_22_23_21_15_56_tsni(ps)
  }
});
lambda$_inst_22_23_21_15_56_tsni = function lambda$_inst_22_23_21_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_22_23_21_15_57_tsni = function negatePs_inst_22_23_21_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_22_23_21_15_57_tsni(ps)
  }
});
lambda$_inst_22_23_21_15_57_tsni = function lambda$_inst_22_23_21_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_22_23_21_15_58_tsni = function negatePs_inst_22_23_21_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_21_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_21_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_22_23_21_15_58_tsni(ps)
  }
});
lambda$_inst_22_23_21_15_58_tsni = function lambda$_inst_22_23_21_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_24_58_tsni = function negatePs_inst_24_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_24_58_tsni(ps)
  }
});
lambda$_inst_24_58_tsni = function lambda$_inst_24_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_24_57_tsni = function negatePs_inst_24_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_24_57_tsni(ps)
  }
});
lambda$_inst_24_57_tsni = function lambda$_inst_24_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_24_56_tsni = function negatePs_inst_24_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_24_56_tsni(ps)
  }
});
lambda$_inst_24_56_tsni = function lambda$_inst_24_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_25_58_tsni = function negatePs_inst_25_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_25_58_tsni(ps)
  }
});
lambda$_inst_25_58_tsni = function lambda$_inst_25_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_25_57_tsni = function negatePs_inst_25_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_25_57_tsni(ps)
  }
});
lambda$_inst_25_57_tsni = function lambda$_inst_25_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_25_56_tsni = function negatePs_inst_25_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_25_56_tsni(ps)
  }
});
lambda$_inst_25_56_tsni = function lambda$_inst_25_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_26_58_tsni = function negatePs_inst_26_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_26_58_tsni(ps)
  }
});
lambda$_inst_26_58_tsni = function lambda$_inst_26_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_26_57_tsni = function negatePs_inst_26_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_26_57_tsni(ps)
  }
});
lambda$_inst_26_57_tsni = function lambda$_inst_26_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_26_56_tsni = function negatePs_inst_26_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_26_56_tsni(ps)
  }
});
lambda$_inst_26_56_tsni = function lambda$_inst_26_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_27_28_23_21_15_58_tsni = function negatePs_inst_27_28_23_21_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_58_tsni(ps)
  }
});
lambda$_inst_27_28_23_21_15_58_tsni = function lambda$_inst_27_28_23_21_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_27_28_23_21_15_57_tsni = function negatePs_inst_27_28_23_21_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_57_tsni(ps)
  }
});
lambda$_inst_27_28_23_21_15_57_tsni = function lambda$_inst_27_28_23_21_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_27_28_23_21_15_56_tsni = function negatePs_inst_27_28_23_21_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_27_28_23_21_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_27_28_23_21_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_27_28_23_21_15_56_tsni(ps)
  }
});
lambda$_inst_27_28_23_21_15_56_tsni = function lambda$_inst_27_28_23_21_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_29_12_3_58_tsni = function negatePs_inst_29_12_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_29_12_3_58_tsni(ps)
  }
});
lambda$_inst_29_12_3_58_tsni = function lambda$_inst_29_12_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_29_12_3_57_tsni = function negatePs_inst_29_12_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_29_12_3_57_tsni(ps)
  }
});
lambda$_inst_29_12_3_57_tsni = function lambda$_inst_29_12_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_29_12_3_56_tsni = function negatePs_inst_29_12_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_29_12_3_56_tsni(ps)
  }
});
lambda$_inst_29_12_3_56_tsni = function lambda$_inst_29_12_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_29_12_59_tsni = function integral_inst_29_12_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_29_12_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_29_12_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_29_12_59_36_37_tsni(fs_)
  }
});
lambda$_inst_29_12_59_36_37_tsni = function lambda$_inst_29_12_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_29_12_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_29_12_59_36_37_38_tsni = function int1_inst_29_12_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_29_12_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_29_12_59_36_37_38_tsni = function lambda$_inst_29_12_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_29_12_53_tsni = function deriv_inst_29_12_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_12_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_12_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_29_12_53_54_55_tsni(fss)
  }
});
lambda$_inst_29_12_53_54_55_tsni = function lambda$_inst_29_12_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
minusPs_inst_30_60_tsni = function minusPs_inst_30_60_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_30_60_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_30_60_61_tsni = function negatePs_inst_30_60_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_30_60_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_30_60_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_30_60_61_tsni(ps)
  }
});
lambda$_inst_30_60_61_tsni = function lambda$_inst_30_60_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_39_62_tsni = function minusPs_inst_39_62_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_39_62_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_39_62_61_tsni = function negatePs_inst_39_62_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_62_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_62_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_39_62_61_tsni(ps)
  }
});
lambda$_inst_39_62_61_tsni = function lambda$_inst_39_62_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_41_42_62_tsni = function minusPs_inst_41_42_62_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_41_42_62_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_41_42_62_61_tsni = function negatePs_inst_41_42_62_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_62_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_42_62_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_42_62_61_tsni(ps)
  }
});
lambda$_inst_41_42_62_61_tsni = function lambda$_inst_41_42_62_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_41_43_60_tsni = function minusPs_inst_41_43_60_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_41_43_60_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_41_43_60_61_tsni = function negatePs_inst_41_43_60_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_43_60_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_43_60_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_43_60_61_tsni(ps)
  }
});
lambda$_inst_41_43_60_61_tsni = function lambda$_inst_41_43_60_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
deriv_inst_41_44_12_53_tsni = function deriv_inst_41_44_12_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_41_44_12_53_54_55_tsni(fss)
  }
});
lambda$_inst_41_44_12_53_54_55_tsni = function lambda$_inst_41_44_12_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_44_12_3_56_tsni = function negatePs_inst_41_44_12_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_44_12_3_56_tsni(ps)
  }
});
lambda$_inst_41_44_12_3_56_tsni = function lambda$_inst_41_44_12_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_44_12_3_57_tsni = function negatePs_inst_41_44_12_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_44_12_3_57_tsni(ps)
  }
});
lambda$_inst_41_44_12_3_57_tsni = function lambda$_inst_41_44_12_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_44_12_3_58_tsni = function negatePs_inst_41_44_12_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_44_12_3_58_tsni(ps)
  }
});
lambda$_inst_41_44_12_3_58_tsni = function lambda$_inst_41_44_12_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_41_44_12_59_tsni = function integral_inst_41_44_12_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_44_12_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_41_44_12_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_41_44_12_59_36_37_tsni(fs_)
  }
});
lambda$_inst_41_44_12_59_36_37_tsni = function lambda$_inst_41_44_12_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_41_44_12_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_41_44_12_59_36_37_38_tsni = function int1_inst_41_44_12_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_44_12_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_44_12_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_44_12_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_41_44_12_59_36_37_38_tsni = function lambda$_inst_41_44_12_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
minusPs_inst_41_45_62_tsni = function minusPs_inst_41_45_62_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_41_45_62_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_41_45_62_61_tsni = function negatePs_inst_41_45_62_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_45_62_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_45_62_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_45_62_61_tsni(ps)
  }
});
lambda$_inst_41_45_62_61_tsni = function lambda$_inst_41_45_62_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_41_46_60_tsni = function minusPs_inst_41_46_60_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_41_46_60_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_41_46_60_61_tsni = function negatePs_inst_41_46_60_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_46_60_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_46_60_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_46_60_61_tsni(ps)
  }
});
lambda$_inst_41_46_60_61_tsni = function lambda$_inst_41_46_60_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_47_56_tsni = function negatePs_inst_41_47_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_47_56_tsni(ps)
  }
});
lambda$_inst_41_47_56_tsni = function lambda$_inst_41_47_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_47_57_tsni = function negatePs_inst_41_47_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_47_57_tsni(ps)
  }
});
lambda$_inst_41_47_57_tsni = function lambda$_inst_41_47_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_47_58_tsni = function negatePs_inst_41_47_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_47_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_47_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_47_58_tsni(ps)
  }
});
lambda$_inst_41_47_58_tsni = function lambda$_inst_41_47_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_48_56_tsni = function negatePs_inst_41_48_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_48_56_tsni(ps)
  }
});
lambda$_inst_41_48_56_tsni = function lambda$_inst_41_48_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_48_57_tsni = function negatePs_inst_41_48_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_48_57_tsni(ps)
  }
});
lambda$_inst_41_48_57_tsni = function lambda$_inst_41_48_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_48_58_tsni = function negatePs_inst_41_48_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_48_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_48_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_48_58_tsni(ps)
  }
});
lambda$_inst_41_48_58_tsni = function lambda$_inst_41_48_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
int1_inst_41_50_36_37_38_tsni = function int1_inst_41_50_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_50_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_50_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_41_50_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_41_50_36_37_38_tsni = function lambda$_inst_41_50_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
negatePs_inst_41_49_28_23_21_15_56_tsni = function negatePs_inst_41_49_28_23_21_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_56_tsni(ps)
  }
});
lambda$_inst_41_49_28_23_21_15_56_tsni = function lambda$_inst_41_49_28_23_21_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_49_28_23_21_15_57_tsni = function negatePs_inst_41_49_28_23_21_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_57_tsni(ps)
  }
});
lambda$_inst_41_49_28_23_21_15_57_tsni = function lambda$_inst_41_49_28_23_21_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_41_49_28_23_21_15_58_tsni = function negatePs_inst_41_49_28_23_21_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_49_28_23_21_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_49_28_23_21_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_41_49_28_23_21_15_58_tsni(ps)
  }
});
lambda$_inst_41_49_28_23_21_15_58_tsni = function lambda$_inst_41_49_28_23_21_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_49_28_23_21_15_58_tsni = function negatePs_inst_51_52_49_28_23_21_15_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_58_tsni(ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_58_tsni = function lambda$_inst_51_52_49_28_23_21_15_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_49_28_23_21_15_57_tsni = function negatePs_inst_51_52_49_28_23_21_15_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_57_tsni(ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_57_tsni = function lambda$_inst_51_52_49_28_23_21_15_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_49_28_23_21_15_56_tsni = function negatePs_inst_51_52_49_28_23_21_15_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_49_28_23_21_15_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_49_28_23_21_15_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_49_28_23_21_15_56_tsni(ps)
  }
});
lambda$_inst_51_52_49_28_23_21_15_56_tsni = function lambda$_inst_51_52_49_28_23_21_15_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_48_58_tsni = function negatePs_inst_51_52_48_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_48_58_tsni(ps)
  }
});
lambda$_inst_51_52_48_58_tsni = function lambda$_inst_51_52_48_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_48_57_tsni = function negatePs_inst_51_52_48_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_48_57_tsni(ps)
  }
});
lambda$_inst_51_52_48_57_tsni = function lambda$_inst_51_52_48_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_48_56_tsni = function negatePs_inst_51_52_48_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_48_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_48_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_48_56_tsni(ps)
  }
});
lambda$_inst_51_52_48_56_tsni = function lambda$_inst_51_52_48_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
int1_inst_51_52_50_36_37_38_tsni = function int1_inst_51_52_50_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_50_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_50_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_50_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_51_52_50_36_37_38_tsni = function lambda$_inst_51_52_50_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
negatePs_inst_51_52_47_58_tsni = function negatePs_inst_51_52_47_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_47_58_tsni(ps)
  }
});
lambda$_inst_51_52_47_58_tsni = function lambda$_inst_51_52_47_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_47_57_tsni = function negatePs_inst_51_52_47_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_47_57_tsni(ps)
  }
});
lambda$_inst_51_52_47_57_tsni = function lambda$_inst_51_52_47_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_47_56_tsni = function negatePs_inst_51_52_47_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_47_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_47_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_47_56_tsni(ps)
  }
});
lambda$_inst_51_52_47_56_tsni = function lambda$_inst_51_52_47_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_51_52_46_60_tsni = function minusPs_inst_51_52_46_60_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_51_52_46_60_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_51_52_46_60_61_tsni = function negatePs_inst_51_52_46_60_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_46_60_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_46_60_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_46_60_61_tsni(ps)
  }
});
lambda$_inst_51_52_46_60_61_tsni = function lambda$_inst_51_52_46_60_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_51_52_45_62_tsni = function minusPs_inst_51_52_45_62_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_51_52_45_62_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_51_52_45_62_61_tsni = function negatePs_inst_51_52_45_62_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_45_62_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_45_62_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_45_62_61_tsni(ps)
  }
});
lambda$_inst_51_52_45_62_61_tsni = function lambda$_inst_51_52_45_62_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_44_12_3_58_tsni = function negatePs_inst_51_52_44_12_3_58_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_58_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_58_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_58_tsni(ps)
  }
});
lambda$_inst_51_52_44_12_3_58_tsni = function lambda$_inst_51_52_44_12_3_58_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_44_12_3_57_tsni = function negatePs_inst_51_52_44_12_3_57_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_57_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_57_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_57_tsni(ps)
  }
});
lambda$_inst_51_52_44_12_3_57_tsni = function lambda$_inst_51_52_44_12_3_57_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
negatePs_inst_51_52_44_12_3_56_tsni = function negatePs_inst_51_52_44_12_3_56_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_3_56_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_3_56_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_44_12_3_56_tsni(ps)
  }
});
lambda$_inst_51_52_44_12_3_56_tsni = function lambda$_inst_51_52_44_12_3_56_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
integral_inst_51_52_44_12_59_tsni = function integral_inst_51_52_44_12_59_tsni(fs_) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_51_52_44_12_59_36_tsni(fs_));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_51_52_44_12_59_36_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_51_52_44_12_59_36_37_tsni(fs_)
  }
});
lambda$_inst_51_52_44_12_59_36_37_tsni = function lambda$_inst_51_52_44_12_59_36_37_tsni(fs_) {
  let tmp;
  tmp = int1_inst_51_52_44_12_59_36_37_38_tsni(fs_, 1);
  return power1.Pc(0, tmp)
};
int1_inst_51_52_44_12_59_36_37_38_tsni = function int1_inst_51_52_44_12_59_36_37_38_tsni(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_59_36_37_38_tsni(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_59_36_37_38_tsni = (undefined, function (fss, n) {
  return () => {
    return lambda$_inst_51_52_44_12_59_36_37_38_tsni(fss, n)
  }
});
lambda$_inst_51_52_44_12_59_36_37_38_tsni = function lambda$_inst_51_52_44_12_59_36_37_38_tsni(fss, n) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(n))
};
deriv_inst_51_52_44_12_53_tsni = function deriv_inst_51_52_44_12_53_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_44_12_53_54_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_44_12_53_54_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_51_52_44_12_53_54_55_tsni(fss)
  }
});
lambda$_inst_51_52_44_12_53_54_55_tsni = function lambda$_inst_51_52_44_12_53_54_55_tsni(fss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut())
};
minusPs_inst_51_52_43_60_tsni = function minusPs_inst_51_52_43_60_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_51_52_43_60_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_51_52_43_60_61_tsni = function negatePs_inst_51_52_43_60_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_43_60_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_43_60_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_43_60_61_tsni(ps)
  }
});
lambda$_inst_51_52_43_60_61_tsni = function lambda$_inst_51_52_43_60_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
minusPs_inst_51_52_42_62_tsni = function minusPs_inst_51_52_42_62_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_51_52_42_62_61_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_51_52_42_62_61_tsni = function negatePs_inst_51_52_42_62_61_tsni(ps) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_52_42_62_61_tsni(ps));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_52_42_62_61_tsni = (undefined, function (ps) {
  return () => {
    return lambda$_inst_51_52_42_62_61_tsni(ps)
  }
});
lambda$_inst_51_52_42_62_61_tsni = function lambda$_inst_51_52_42_62_61_tsni(ps) {
  let scrut;
  scrut = NofibPrelude.force(ps);
  return runtime.safeCall(scrut())
};
lambda51 = (undefined, function () {
  return power1.Pz
});
lambda50 = (undefined, function () {
  let tmp;
  tmp = NofibPrelude.lazy(lambda51);
  return power1.Pc(1, tmp)
});
lambda49 = (undefined, function () {
  return power1.Pz
});
lambda48 = (undefined, function () {
  let tmp;
  tmp = NofibPrelude.lazy(lambda49);
  return power1.Pc(1, tmp)
});
lambda47 = (undefined, function () {
  return power1.tree()
});
lambda46 = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda47);
  tmp2 = power1.composeSndLz_(tmp, tmp1);
  return power1.Pc(0, tmp2)
});
lambda45 = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.ts();
  tmp1 = power1.ts();
  tmp2 = power1.multPs(tmp, tmp1);
  return power1.Pc(1, tmp2)
});
lambda$30 = function lambda$(fs_) {
  return power1.Pc(1, fs_)
};
lambda44 = (undefined, function (fs_) {
  return () => {
    return lambda$30(fs_)
  }
});
lambda$29 = function lambda$(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = power1.fromIntegerPs(1);
  lambda$this = runtime.safeCall(lambda_inst_0_1_tsni(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = deriv_inst_0_53_tsni(tmp1);
  tmp3 = qs$_inst_0_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_0_3_tsni(tmp2, tmp4);
  tmp6 = integral_inst_0_59_tsni(tmp5);
  return power1.addPs(tmp, tmp6)
};
lambda43 = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_7_tsni(fs_)
  }
});
qs$ = function qs$(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
qs = function qs(fs_) {
  return () => {
    return qs$_inst_9_10_tsni(fs_)
  }
};
lambda$28 = function lambda$(fss) {
  let scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gss = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        if (param01 === 0) {
          fs_1 = param11;
          tmp = sqrtPs_inst_11_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_11_12_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda42 = (undefined, function (fss) {
  return () => {
    return lambda$_inst_13_tsni(fss)
  }
});
lambda$27 = function lambda$(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int11(fs_, tmp1);
    return power1.Pc(tmp, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda40 = (undefined, function (fss, n) {
  return () => {
    return lambda$27(fss, n)
  }
});
int11 = function int1(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda40(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda$26 = function lambda$(fs_) {
  let tmp, tmp1;
  tmp = runtime.safeCall(fs_());
  tmp1 = int11(tmp, 1);
  return power1.Pc(0, tmp1)
};
lambda41 = (undefined, function (fs_) {
  return () => {
    return lambda$26(fs_)
  }
});
lambda$25 = function lambda$(fss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = f / n;
    tmp1 = n + 1;
    tmp2 = int1(fs_, tmp1);
    return power1.Pc(tmp, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda38 = (undefined, function (fss, n) {
  return () => {
    return lambda$25(fss, n)
  }
});
int1 = function int1(fss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda38(fss, n));
  return NofibPrelude.lazy(tmp)
};
lambda$24 = function lambda$(fs_) {
  let tmp;
  tmp = int1(fs_, 1);
  return power1.Pc(0, tmp)
};
lambda39 = (undefined, function (fs_) {
  return () => {
    return lambda$24(fs_)
  }
});
lambda$23 = function lambda$(gss, n) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = n * f;
    tmp1 = n + 1;
    tmp2 = deriv1(fs_, tmp1);
    return power1.Pc(tmp, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda37 = (undefined, function (gss, n) {
  return () => {
    return lambda$23(gss, n)
  }
});
deriv1 = function deriv1(gss, n) {
  let tmp;
  tmp = runtime.safeCall(lambda37(gss, n));
  return NofibPrelude.lazy(tmp)
};
lambda$22 = function lambda$(fss) {
  let scrut, param0, param1, fs_, tmp;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    fs_ = param1;
    tmp = deriv1(fs_, 1);
    return NofibPrelude.force(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda36 = (undefined, function (fss) {
  return () => {
    return lambda$22(fss)
  }
});
lambda$21 = function lambda$(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = power1.fromIntegerPs(1);
  tmp1 = rs$_inst_14_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_14_15_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
lambda33 = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_16_tsni(fs_)
  }
});
rs$ = function rs$(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
rs = function rs(fs_) {
  return () => {
    return rs$_inst_18_19_tsni(fs_)
  }
};
lambda35 = (undefined, function () {
  return power1.Pz
});
lambda$20 = function lambda$(f1) {
  let tmp, tmp1;
  tmp = 1 / f1;
  tmp1 = NofibPrelude.lazy(lambda35);
  return power1.Pc(tmp, tmp1)
};
lambda34 = (undefined, function (f1) {
  return () => {
    return lambda$20(f1)
  }
});
lambda$19 = function lambda$(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_20_21_tsni(fs_);
      return NofibPrelude.force(tmp)
    } else {
      f0 = param0;
      kss = param1;
      scrut1 = NofibPrelude.force(kss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        f1 = param01;
        gss = param11;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power1.Pz.class) {
          tmp1 = - 1;
          tmp2 = tmp1 / f1;
          lambda$this = runtime.safeCall(lambda34(f1));
          tmp3 = NofibPrelude.lazy(lambda$this);
          return power1.Pc(tmp2, tmp3)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda32 = (undefined, function (fss) {
  return () => {
    return lambda$_inst_22_23_tsni(fss)
  }
});
lambda26 = (undefined, function () {
  return power1.Pz
});
lambda$18 = function lambda$(gs) {
  return power1.Pc(0, gs)
};
lambda27 = (undefined, function (gs) {
  return () => {
    return lambda$18(gs)
  }
});
lambda29 = (undefined, function () {
  return power1.Pz
});
lambda$17 = function lambda$(f) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda29);
  return power1.Pc(f, tmp)
};
lambda28 = (undefined, function (f) {
  return () => {
    return lambda$17(f)
  }
});
lambda31 = (undefined, function () {
  return power1.Pz
});
lambda$16 = function lambda$(f) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda31);
  return power1.Pc(f, tmp)
};
lambda30 = (undefined, function (f) {
  return () => {
    return lambda$16(f)
  }
});
lambda$15 = function lambda$(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = NofibPrelude.force(gss);
    scrut1 = NofibPrelude.force(tmp);
    if (scrut1 instanceof power1.Pz.class) {
      tmp1 = NofibPrelude.lazy(lambda26);
      return power1.Pc(f, tmp1)
    } else if (scrut1 instanceof power1.Pc.class) {
      param01 = scrut1.f;
      param11 = scrut1.s;
      if (param01 === 0) {
        gs = param11;
        lambda$this = runtime.safeCall(lambda27(gs));
        tmp2 = NofibPrelude.lazy(lambda$this);
        tmp3 = power1.compose_(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = power1.composeSndLz_(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = power1.composeSndLz_(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda25 = (undefined, function (fss, gss) {
  return () => {
    return lambda$15(fss, gss)
  }
});
lambda19 = (undefined, function () {
  return power1.Pz
});
lambda$14 = function lambda$(gs) {
  return power1.Pc(0, gs)
};
lambda20 = (undefined, function (gs) {
  return () => {
    return lambda$14(gs)
  }
});
lambda22 = (undefined, function () {
  return power1.Pz
});
lambda$13 = function lambda$(f) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda22);
  return power1.Pc(f, tmp)
};
lambda21 = (undefined, function (f) {
  return () => {
    return lambda$13(f)
  }
});
lambda24 = (undefined, function () {
  return power1.Pz
});
lambda$12 = function lambda$(f) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda24);
  return power1.Pc(f, tmp)
};
lambda23 = (undefined, function (f) {
  return () => {
    return lambda$12(f)
  }
});
lambda$11 = function lambda$(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    scrut1 = NofibPrelude.force(gss);
    if (scrut1 instanceof power1.Pz.class) {
      tmp = NofibPrelude.lazy(lambda19);
      return power1.Pc(f, tmp)
    } else if (scrut1 instanceof power1.Pc.class) {
      param01 = scrut1.f;
      param11 = scrut1.s;
      if (param01 === 0) {
        gs = param11;
        lambda$this = runtime.safeCall(lambda20(gs));
        tmp1 = NofibPrelude.lazy(lambda$this);
        tmp2 = power1.compose_(fs_, tmp1);
        tmp3 = power1.multPs(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = power1.compose_(fs_, gss);
        tmp6 = power1.multPs(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = power1.compose_(fs_, gss);
      tmp10 = power1.multPs(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda18 = (undefined, function (fss, gss) {
  return () => {
    return lambda$11(fss, gss)
  }
});
lambda14 = (undefined, function () {
  return power1.Pz
});
lambda$10 = function lambda$(g, gs) {
  return power1.Pc(g, gs)
};
lambda15 = (undefined, function (g, gs) {
  return () => {
    return lambda$10(g, gs)
  }
});
lambda$9 = function lambda$(g, gs) {
  return power1.Pc(g, gs)
};
lambda16 = (undefined, function (g, gs) {
  return () => {
    return lambda$9(g, gs)
  }
});
lambda$8 = function lambda$(g, gs) {
  return power1.Pc(g, gs)
};
lambda17 = (undefined, function (g, gs) {
  return () => {
    return lambda$8(g, gs)
  }
});
lambda$7 = function lambda$(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$this, lambda$this1, lambda$this2;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    scrut3 = NofibPrelude.force(gss);
    if (scrut3 instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0")
    } else if (scrut3 instanceof power1.Pc.class) {
      param03 = scrut3.f;
      param13 = scrut3.s;
      if (param03 === 0) {
        gs3 = param13;
        tmp = NofibPrelude.lazy(lambda14);
        tmp1 = divPs_inst_24_tsni(tmp, gs3);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_1 = param1;
      scrut2 = NofibPrelude.force(gss);
      if (scrut2 instanceof power1.Pc.class) {
        param02 = scrut2.f;
        param12 = scrut2.s;
        if (param02 === 0) {
          gs2 = param12;
          tmp2 = divPs_inst_24_tsni(fs_1, gs2);
          return NofibPrelude.force(tmp2)
        } else {
          g1 = param02;
          gs1 = param12;
          q1 = 0;
          tmp3 = dotMult_inst_24_6_tsni(q1, gs1);
          tmp4 = negatePs_inst_24_58_tsni(tmp3);
          tmp5 = power1.addPs(fs_1, tmp4);
          lambda$this = runtime.safeCall(lambda15(g1, gs1));
          tmp6 = NofibPrelude.lazy(lambda$this);
          tmp7 = divPs_inst_24_tsni(tmp5, tmp6);
          return power1.Pc(q1, tmp7)
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power1.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp8 = f / g;
          q = tmp8;
          tmp9 = dotMult_inst_24_5_tsni(q, gs);
          tmp10 = negatePs_inst_24_57_tsni(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = divPs_inst_24_tsni(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      f = param0;
      fs_ = param1;
      scrut1 = NofibPrelude.force(gss);
      if (scrut1 instanceof power1.Pc.class) {
        param01 = scrut1.f;
        param11 = scrut1.s;
        g = param01;
        gs = param11;
        tmp14 = f / g;
        q = tmp14;
        tmp15 = dotMult_inst_24_4_tsni(q, gs);
        tmp16 = negatePs_inst_24_56_tsni(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = divPs_inst_24_tsni(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda13 = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_25_tsni(fss, gss)
  }
});
lambda$6 = function lambda$(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  tmp = NofibPrelude.force(fss);
  scrut = NofibPrelude.force(tmp);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    scrut1 = NofibPrelude.force(gss);
    if (scrut1 instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut1 instanceof power1.Pc.class) {
      param01 = scrut1.f;
      param11 = scrut1.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = power1.x_();
      tmp6 = power1.multPs(tmp5, fs_);
      tmp7 = power1.multPs(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda12 = (undefined, function (fss, gss) {
  return () => {
    return lambda$6(fss, gss)
  }
});
lambda$5 = function lambda$(fss, gss) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    scrut1 = NofibPrelude.force(gss);
    if (scrut1 instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut1 instanceof power1.Pc.class) {
      param01 = scrut1.f;
      param11 = scrut1.s;
      g = param01;
      gs = param11;
      tmp = f * g;
      tmp1 = power1.dotMult(f, gs);
      tmp2 = power1.dotMult(g, fs_);
      tmp3 = power1.addPs(tmp1, tmp2);
      tmp4 = power1.x_();
      tmp5 = power1.multPs(tmp4, fs_);
      tmp6 = power1.multPs(tmp5, gs);
      tmp7 = power1.addPs(tmp3, tmp6);
      return power1.Pc(tmp, tmp7)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda11 = (undefined, function (fss, gss) {
  return () => {
    return lambda$5(fss, gss)
  }
});
lambda$4 = function lambda$(fss, gs) {
  let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs1, tmp, tmp1;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pz.class) {
    return NofibPrelude.force(gs)
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    scrut1 = NofibPrelude.force(gs);
    if (scrut1 instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut1 instanceof power1.Pc.class) {
      param01 = scrut1.f;
      param11 = scrut1.s;
      g = param01;
      gs1 = param11;
      tmp = f + g;
      tmp1 = power1.addPs(fs_, gs1);
      return power1.Pc(tmp, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda10 = (undefined, function (fss, gs) {
  return () => {
    return lambda$4(fss, gs)
  }
});
lambda$3 = function lambda$(ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = - f;
    tmp1 = power1.negatePs(fs_);
    return power1.Pc(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda9 = (undefined, function (ps) {
  return () => {
    return lambda$3(ps)
  }
});
lambda$2 = function lambda$(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1, tmp2;
  tmp = NofibPrelude.force(ps);
  scrut = NofibPrelude.force(tmp);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp1 = c * f;
    tmp2 = power1.dotMult(c, fs_);
    return power1.Pc(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda8 = (undefined, function (c, ps) {
  return () => {
    return lambda$2(c, ps)
  }
});
lambda$1 = function lambda$(c, ps) {
  let scrut, param0, param1, f, fs_, tmp, tmp1;
  scrut = NofibPrelude.force(ps);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    f = param0;
    fs_ = param1;
    tmp = c * f;
    tmp1 = power1.dotMult(c, fs_);
    return power1.Pc(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda7 = (undefined, function (c, ps) {
  return () => {
    return lambda$1(c, ps)
  }
});
lambda4 = (undefined, function () {
  return power1.Pz
});
lambda6 = (undefined, function () {
  return power1.Pz
});
lambda$ = function lambda$(c) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda6);
  return power1.Pc(c, tmp)
};
lambda5 = (undefined, function (c) {
  return () => {
    return lambda$(c)
  }
});
lambda3 = (undefined, function () {
  return power1.Pz
});
lambda2 = (undefined, function () {
  let tmp;
  tmp = NofibPrelude.lazy(lambda3);
  return power1.Pc(1, tmp)
});
lambda1 = (undefined, function () {
  let tmp;
  tmp = NofibPrelude.lazy(lambda2);
  return power1.Pc(0, tmp)
});
lambda = (undefined, function () {
  let tmp;
  tmp = power1.list();
  return power1.Pc(1, tmp)
});
(class power {
  static {
    power1 = power;
    this.Pss = class Pss {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pss"]; 
    };
    this.Pc = function Pc(f, s) {
      return globalThis.Object.freeze(new Pc.class(f, s));
    };
    Object.defineProperty(this.Pc, "class", {
      enumerable: true,
      value: class Pc extends power.Pss {
        constructor(f, s) {
          super();
          this.f = f;
          this.s = s;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Pc", ["f", "s"]]; 
      }
    });
    const Pz$class = class Pz extends power.Pss {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Pz
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Pz"]; 
    };
    this.Pz = globalThis.Object.freeze(new Pz$class);
  }
  static list() {
    return NofibPrelude.lazy(lambda)
  } 
  static x_() {
    return NofibPrelude.lazy(lambda1)
  } 
  static fromIntegerPs(c) {
    let scrut, lambda$this;
    scrut = c == 0;
    if (scrut === true) {
      return NofibPrelude.lazy(lambda4)
    } else {
      lambda$this = runtime.safeCall(lambda5(c));
      return NofibPrelude.lazy(lambda$this)
    }
  } 
  static extract(n, ps) {
    let scrut, param0, param1, x, ps1, scrut1, tmp, tmp1;
    scrut1 = n == 0;
    if (scrut1 === true) {
      return NofibPrelude.Nil
    } else {
      scrut = NofibPrelude.force(ps);
      if (scrut instanceof power.Pz.class) {
        return NofibPrelude.Nil
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        x = param0;
        ps1 = param1;
        tmp = n - 1;
        tmp1 = power.extract(tmp, ps1);
        return NofibPrelude.Cons(x, tmp1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } 
  static dotMult(c, ps) {
    let tmp;
    tmp = runtime.safeCall(lambda7(c, ps));
    return NofibPrelude.lazy(tmp)
  } 
  static dotMultSndLz(c, ps) {
    let tmp;
    tmp = runtime.safeCall(lambda8(c, ps));
    return NofibPrelude.lazy(tmp)
  } 
  static negatePs(ps) {
    let tmp;
    tmp = runtime.safeCall(lambda9(ps));
    return NofibPrelude.lazy(tmp)
  } 
  static addPs(fss, gs) {
    let tmp;
    tmp = runtime.safeCall(lambda10(fss, gs));
    return NofibPrelude.lazy(tmp)
  } 
  static minusPs(a, b) {
    let tmp;
    tmp = power.negatePs(b);
    return power.addPs(a, tmp)
  } 
  static multPs(fss, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda11(fss, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static multPsFstLz(fss, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda12(fss, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static powerPs(a, n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return power.fromIntegerPs(1)
    } else {
      tmp = n - 1;
      tmp1 = power.powerPs(a, tmp);
      return power.multPs(a, tmp1)
    }
  } 
  static divPs(fss, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_26_tsni(fss, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static compose_(fss, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda18(fss, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static composeSndLz_(fss, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda25(fss, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static revert(fss) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_27_28_tsni(fss));
    return NofibPrelude.lazy(tmp)
  } 
  static deriv(fss) {
    let tmp;
    tmp = runtime.safeCall(lambda36(fss));
    return NofibPrelude.lazy(tmp)
  } 
  static integral(fs_) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda39(fs_));
    return NofibPrelude.lazy(lambda$this)
  } 
  static integralLz(fs_) {
    let tmp;
    tmp = runtime.safeCall(lambda41(fs_));
    return NofibPrelude.lazy(tmp)
  } 
  static sqrtPs(fss) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_29_tsni(fss));
    return NofibPrelude.lazy(tmp)
  } 
  static ts() {
    let tmp;
    tmp = lambda45;
    return NofibPrelude.lazy(tmp)
  } 
  static tree() {
    let tmp;
    tmp = lambda46;
    return NofibPrelude.lazy(tmp)
  } 
  static cosx() {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.lazy(lambda48);
    tmp1 = integralLz_inst_30_31_tsni(power.cosx);
    tmp2 = integral_inst_30_35_tsni(tmp1);
    return minusPs_inst_30_60_tsni(tmp, tmp2)
  } 
  static sinx() {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.lazy(lambda50);
    tmp1 = integralLz_inst_39_40_tsni(power.sinx);
    tmp2 = minusPs_inst_39_62_tsni(tmp, tmp1);
    return power.integral(tmp2)
  } 
  static testPower_nofib(p) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
    tmp = sinx_inst_41_42_tsni();
    tmp1 = power.fromIntegerPs(1);
    tmp2 = cosx_inst_41_43_tsni();
    tmp3 = power.powerPs(tmp2, 2);
    tmp4 = power.minusPs(tmp1, tmp3);
    tmp5 = sqrtPs_inst_41_44_tsni(tmp4);
    tmp6 = power.minusPs(tmp, tmp5);
    tmp7 = power.extract(p, tmp6);
    tmp8 = sinx_inst_41_45_tsni();
    tmp9 = cosx_inst_41_46_tsni();
    tmp10 = divPs_inst_41_47_tsni(tmp8, tmp9);
    tmp11 = power.fromIntegerPs(1);
    tmp12 = power.fromIntegerPs(1);
    tmp13 = power.x_();
    tmp14 = power.powerPs(tmp13, 2);
    tmp15 = power.addPs(tmp12, tmp14);
    tmp16 = divPs_inst_41_48_tsni(tmp11, tmp15);
    tmp17 = integral_inst_41_50_tsni(tmp16);
    tmp18 = revert_inst_41_49_tsni(tmp17);
    tmp19 = power.minusPs(tmp10, tmp18);
    tmp20 = power.extract(p, tmp19);
    tmp21 = (tmp7 , tmp20);
    tmp22 = power.ts();
    tmp23 = power.extract(p, tmp22);
    tmp24 = (tmp21 , tmp23);
    tmp25 = power.tree();
    tmp26 = power.extract(p, tmp25);
    return (tmp24 , tmp26)
  } 
  static main() {
    let tmp;
    tmp = testPower_nofib_inst_51_52_tsni(14);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "power"]; 
});
let power = power1; export default power;
