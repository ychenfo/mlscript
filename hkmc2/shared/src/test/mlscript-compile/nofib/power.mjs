import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let rs, deriv1, int1, int11, qs, power1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda42, lambda43, lambda44, lambda45, lambda46, lambda47, lambda48, lambda49, lambda50, lambda51, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, rs$, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, qs$, lambda$29, lambda$30, tree_inst_0_tsni, lambda_inst_0_tsni, composeSndLz__inst_0_1_tsni, lambda_inst_0_1_tsni, lambda$_inst_0_1_tsni, compose__inst_0_1_2_tsni, lambda_inst_0_1_2_tsni, lambda$_inst_0_1_2_tsni, multPs_inst_0_1_2_3_tsni, lambda_inst_0_1_2_3_tsni, lambda$_inst_0_1_2_3_tsni, x__inst_0_1_2_3_4_tsni, lambda_inst_0_1_2_3_4_5_tsni, multPs_inst_0_1_2_6_tsni, lambda_inst_0_1_2_6_tsni, lambda$_inst_0_1_2_6_tsni, x__inst_0_1_2_6_4_tsni, lambda_inst_0_1_2_6_4_5_tsni, multPs_inst_0_1_2_7_tsni, lambda_inst_0_1_2_7_tsni, lambda$_inst_0_1_2_7_tsni, x__inst_0_1_2_7_4_tsni, lambda_inst_0_1_2_7_4_5_tsni, tree_inst_8_tsni, lambda_inst_8_tsni, composeSndLz__inst_8_1_tsni, lambda_inst_8_1_tsni, lambda$_inst_8_1_tsni, compose__inst_8_1_2_tsni, lambda_inst_8_1_2_tsni, lambda$_inst_8_1_2_tsni, multPs_inst_8_1_2_3_tsni, lambda_inst_8_1_2_3_tsni, lambda$_inst_8_1_2_3_tsni, x__inst_8_1_2_3_4_tsni, lambda_inst_8_1_2_3_4_5_tsni, multPs_inst_8_1_2_6_tsni, lambda_inst_8_1_2_6_tsni, lambda$_inst_8_1_2_6_tsni, x__inst_8_1_2_6_4_tsni, lambda_inst_8_1_2_6_4_5_tsni, multPs_inst_8_1_2_7_tsni, lambda_inst_8_1_2_7_tsni, lambda$_inst_8_1_2_7_tsni, x__inst_8_1_2_7_4_tsni, lambda_inst_8_1_2_7_4_5_tsni, qs$_inst_9_tsni, lambda_inst_9_tsni, divPs_inst_9_10_tsni, lambda_inst_9_10_tsni, lambda$_inst_9_10_tsni, lambda_inst_9_10_11_tsni, fromIntegerPs_inst_9_12_tsni, lambda_inst_9_12_13_tsni, qs$_inst_14_tsni, lambda$_inst_14_tsni, divPs_inst_14_10_tsni, lambda_inst_14_10_tsni, lambda$_inst_14_10_tsni, lambda_inst_14_10_11_tsni, fromIntegerPs_inst_14_12_tsni, lambda_inst_14_12_13_tsni, lambda_inst_15_tsni, lambda$_inst_15_tsni, divPs_inst_15_10_tsni, lambda_inst_15_10_tsni, lambda$_inst_15_10_tsni, lambda_inst_15_10_11_tsni, fromIntegerPs_inst_15_12_tsni, lambda_inst_15_12_13_tsni, qs$_inst_16_17_tsni, lambda_inst_16_17_tsni, lambda$_inst_16_17_tsni, divPs_inst_16_17_10_tsni, lambda_inst_16_17_10_tsni, lambda$_inst_16_17_10_tsni, lambda_inst_16_17_10_11_tsni, fromIntegerPs_inst_16_17_12_tsni, lambda_inst_16_17_12_13_tsni, sqrtPs_inst_18_tsni, lambda_inst_18_tsni, qs$_inst_18_19_tsni, lambda_inst_18_19_tsni, lambda$_inst_18_19_tsni, divPs_inst_18_19_10_tsni, lambda_inst_18_19_10_tsni, lambda$_inst_18_19_10_tsni, lambda_inst_18_19_10_11_tsni, fromIntegerPs_inst_18_19_12_tsni, lambda_inst_18_19_12_13_tsni, sqrtPs_inst_20_tsni, lambda$_inst_20_tsni, qs$_inst_20_19_tsni, lambda_inst_20_19_tsni, lambda$_inst_20_19_tsni, divPs_inst_20_19_10_tsni, lambda_inst_20_19_10_tsni, lambda$_inst_20_19_10_tsni, lambda_inst_20_19_10_11_tsni, fromIntegerPs_inst_20_19_12_tsni, lambda_inst_20_19_12_13_tsni, rs$_inst_21_tsni, lambda_inst_21_tsni, divPs_inst_21_22_tsni, lambda_inst_21_22_tsni, lambda$_inst_21_22_tsni, lambda_inst_21_22_11_tsni, fromIntegerPs_inst_21_23_tsni, lambda_inst_21_23_13_tsni, rs$_inst_24_tsni, lambda$_inst_24_tsni, divPs_inst_24_22_tsni, lambda_inst_24_22_tsni, lambda$_inst_24_22_tsni, lambda_inst_24_22_11_tsni, fromIntegerPs_inst_24_23_tsni, lambda_inst_24_23_13_tsni, lambda_inst_25_tsni, lambda$_inst_25_tsni, divPs_inst_25_22_tsni, lambda_inst_25_22_tsni, lambda$_inst_25_22_tsni, lambda_inst_25_22_11_tsni, fromIntegerPs_inst_25_23_tsni, lambda_inst_25_23_13_tsni, rs$_inst_26_27_tsni, lambda_inst_26_27_tsni, lambda$_inst_26_27_tsni, divPs_inst_26_27_22_tsni, lambda_inst_26_27_22_tsni, lambda$_inst_26_27_22_tsni, lambda_inst_26_27_22_11_tsni, compose__inst_26_27_28_tsni, lambda_inst_26_27_28_tsni, lambda$_inst_26_27_28_tsni, multPs_inst_26_27_28_3_tsni, lambda_inst_26_27_28_3_tsni, lambda$_inst_26_27_28_3_tsni, x__inst_26_27_28_3_4_tsni, lambda_inst_26_27_28_3_4_5_tsni, multPs_inst_26_27_28_6_tsni, lambda_inst_26_27_28_6_tsni, lambda$_inst_26_27_28_6_tsni, x__inst_26_27_28_6_4_tsni, lambda_inst_26_27_28_6_4_5_tsni, multPs_inst_26_27_28_7_tsni, lambda_inst_26_27_28_7_tsni, lambda$_inst_26_27_28_7_tsni, x__inst_26_27_28_7_4_tsni, lambda_inst_26_27_28_7_4_5_tsni, fromIntegerPs_inst_26_27_23_tsni, lambda_inst_26_27_23_13_tsni, rs$_inst_29_30_tsni, lambda_inst_29_30_tsni, lambda$_inst_29_30_tsni, divPs_inst_29_30_22_tsni, lambda_inst_29_30_22_tsni, lambda$_inst_29_30_22_tsni, lambda_inst_29_30_22_11_tsni, compose__inst_29_30_28_tsni, lambda_inst_29_30_28_tsni, lambda$_inst_29_30_28_tsni, multPs_inst_29_30_28_3_tsni, lambda_inst_29_30_28_3_tsni, lambda$_inst_29_30_28_3_tsni, x__inst_29_30_28_3_4_tsni, lambda_inst_29_30_28_3_4_5_tsni, multPs_inst_29_30_28_6_tsni, lambda_inst_29_30_28_6_tsni, lambda$_inst_29_30_28_6_tsni, x__inst_29_30_28_6_4_tsni, lambda_inst_29_30_28_6_4_5_tsni, multPs_inst_29_30_28_7_tsni, lambda_inst_29_30_28_7_tsni, lambda$_inst_29_30_28_7_tsni, x__inst_29_30_28_7_4_tsni, lambda_inst_29_30_28_7_4_5_tsni, fromIntegerPs_inst_29_30_23_tsni, lambda_inst_29_30_23_13_tsni, lambda$_inst_31_32_tsni, rs$_inst_31_32_30_tsni, lambda_inst_31_32_30_tsni, lambda$_inst_31_32_30_tsni, compose__inst_31_32_30_28_tsni, lambda_inst_31_32_30_28_tsni, lambda$_inst_31_32_30_28_tsni, multPs_inst_31_32_30_28_7_tsni, lambda_inst_31_32_30_28_7_tsni, lambda$_inst_31_32_30_28_7_tsni, x__inst_31_32_30_28_7_4_tsni, lambda_inst_31_32_30_28_7_4_5_tsni, multPs_inst_31_32_30_28_6_tsni, lambda_inst_31_32_30_28_6_tsni, lambda$_inst_31_32_30_28_6_tsni, x__inst_31_32_30_28_6_4_tsni, lambda_inst_31_32_30_28_6_4_5_tsni, multPs_inst_31_32_30_28_3_tsni, lambda_inst_31_32_30_28_3_tsni, lambda$_inst_31_32_30_28_3_tsni, x__inst_31_32_30_28_3_4_tsni, lambda_inst_31_32_30_28_3_4_5_tsni, divPs_inst_31_32_30_22_tsni, lambda_inst_31_32_30_22_tsni, lambda$_inst_31_32_30_22_tsni, lambda_inst_31_32_30_22_11_tsni, fromIntegerPs_inst_31_32_30_23_tsni, lambda_inst_31_32_30_23_13_tsni, composeSndLz__inst_33_tsni, lambda_inst_33_tsni, compose__inst_33_2_tsni, lambda_inst_33_2_tsni, lambda$_inst_33_2_tsni, multPs_inst_33_2_7_tsni, lambda_inst_33_2_7_tsni, lambda$_inst_33_2_7_tsni, x__inst_33_2_7_4_tsni, lambda_inst_33_2_7_4_5_tsni, multPs_inst_33_2_6_tsni, lambda_inst_33_2_6_tsni, lambda$_inst_33_2_6_tsni, x__inst_33_2_6_4_tsni, lambda_inst_33_2_6_4_5_tsni, multPs_inst_33_2_3_tsni, lambda_inst_33_2_3_tsni, lambda$_inst_33_2_3_tsni, x__inst_33_2_3_4_tsni, lambda_inst_33_2_3_4_5_tsni, composeSndLz__inst_34_tsni, lambda$_inst_34_tsni, compose__inst_34_2_tsni, lambda_inst_34_2_tsni, lambda$_inst_34_2_tsni, multPs_inst_34_2_7_tsni, lambda_inst_34_2_7_tsni, lambda$_inst_34_2_7_tsni, x__inst_34_2_7_4_tsni, lambda_inst_34_2_7_4_5_tsni, multPs_inst_34_2_6_tsni, lambda_inst_34_2_6_tsni, lambda$_inst_34_2_6_tsni, x__inst_34_2_6_4_tsni, lambda_inst_34_2_6_4_5_tsni, multPs_inst_34_2_3_tsni, lambda_inst_34_2_3_tsni, lambda$_inst_34_2_3_tsni, x__inst_34_2_3_4_tsni, lambda_inst_34_2_3_4_5_tsni, multPs_inst_35_36_tsni, lambda_inst_35_36_tsni, lambda$_inst_35_36_tsni, x__inst_35_36_4_tsni, lambda_inst_35_36_4_5_tsni, x__inst_35_37_tsni, lambda_inst_35_37_5_tsni, multPs_inst_35_38_tsni, lambda_inst_35_38_tsni, lambda$_inst_35_38_tsni, x__inst_35_38_4_tsni, lambda_inst_35_38_4_5_tsni, lambda$_inst_39_40_tsni, multPs_inst_39_40_38_tsni, lambda_inst_39_40_38_tsni, lambda$_inst_39_40_38_tsni, x__inst_39_40_38_4_tsni, lambda_inst_39_40_38_4_5_tsni, multPs_inst_39_40_36_tsni, lambda_inst_39_40_36_tsni, lambda$_inst_39_40_36_tsni, x__inst_39_40_36_4_tsni, lambda_inst_39_40_36_4_5_tsni, x__inst_39_40_37_tsni, lambda_inst_39_40_37_5_tsni, lambda_inst_41_42_tsni, lambda$_inst_41_42_40_tsni, multPs_inst_41_42_40_36_tsni, lambda_inst_41_42_40_36_tsni, lambda$_inst_41_42_40_36_tsni, x__inst_41_42_40_36_4_tsni, lambda_inst_41_42_40_36_4_5_tsni, x__inst_41_42_40_37_tsni, lambda_inst_41_42_40_37_5_tsni, multPs_inst_41_42_40_38_tsni, lambda_inst_41_42_40_38_tsni, lambda$_inst_41_42_40_38_tsni, x__inst_41_42_40_38_4_tsni, lambda_inst_41_42_40_38_4_5_tsni, lambda_inst_43_tsni, lambda$_inst_43_tsni, compose__inst_43_2_tsni, lambda_inst_43_2_tsni, lambda$_inst_43_2_tsni, multPs_inst_43_2_7_tsni, lambda_inst_43_2_7_tsni, lambda$_inst_43_2_7_tsni, x__inst_43_2_7_4_tsni, lambda_inst_43_2_7_4_5_tsni, multPs_inst_43_2_6_tsni, lambda_inst_43_2_6_tsni, lambda$_inst_43_2_6_tsni, x__inst_43_2_6_4_tsni, lambda_inst_43_2_6_4_5_tsni, multPs_inst_43_2_3_tsni, lambda_inst_43_2_3_tsni, lambda$_inst_43_2_3_tsni, x__inst_43_2_3_4_tsni, lambda_inst_43_2_3_4_5_tsni, lambda_inst_44_45_tsni, lambda$_inst_44_45_32_tsni, rs$_inst_44_45_32_30_tsni, lambda_inst_44_45_32_30_tsni, lambda$_inst_44_45_32_30_tsni, divPs_inst_44_45_32_30_22_tsni, lambda_inst_44_45_32_30_22_tsni, lambda$_inst_44_45_32_30_22_tsni, lambda_inst_44_45_32_30_22_11_tsni, compose__inst_44_45_32_30_28_tsni, lambda_inst_44_45_32_30_28_tsni, lambda$_inst_44_45_32_30_28_tsni, multPs_inst_44_45_32_30_28_3_tsni, lambda_inst_44_45_32_30_28_3_tsni, lambda$_inst_44_45_32_30_28_3_tsni, x__inst_44_45_32_30_28_3_4_tsni, lambda_inst_44_45_32_30_28_3_4_5_tsni, multPs_inst_44_45_32_30_28_6_tsni, lambda_inst_44_45_32_30_28_6_tsni, lambda$_inst_44_45_32_30_28_6_tsni, x__inst_44_45_32_30_28_6_4_tsni, lambda_inst_44_45_32_30_28_6_4_5_tsni, multPs_inst_44_45_32_30_28_7_tsni, lambda_inst_44_45_32_30_28_7_tsni, lambda$_inst_44_45_32_30_28_7_tsni, x__inst_44_45_32_30_28_7_4_tsni, lambda_inst_44_45_32_30_28_7_4_5_tsni, fromIntegerPs_inst_44_45_32_30_23_tsni, lambda_inst_44_45_32_30_23_13_tsni, lambda_inst_46_tsni, lambda$_inst_46_tsni, qs$_inst_46_19_tsni, lambda_inst_46_19_tsni, lambda$_inst_46_19_tsni, divPs_inst_46_19_10_tsni, lambda_inst_46_19_10_tsni, lambda$_inst_46_19_10_tsni, lambda_inst_46_19_10_11_tsni, fromIntegerPs_inst_46_19_12_tsni, lambda_inst_46_19_12_13_tsni, lambda_inst_47_tsni, lambda_inst_47_tsni1, composeSndLz__inst_47_1_tsni, lambda_inst_47_1_tsni, lambda$_inst_47_1_tsni, compose__inst_47_1_2_tsni, lambda_inst_47_1_2_tsni, lambda$_inst_47_1_2_tsni, multPs_inst_47_1_2_3_tsni, lambda_inst_47_1_2_3_tsni, lambda$_inst_47_1_2_3_tsni, x__inst_47_1_2_3_4_tsni, lambda_inst_47_1_2_3_4_5_tsni, multPs_inst_47_1_2_6_tsni, lambda_inst_47_1_2_6_tsni, lambda$_inst_47_1_2_6_tsni, x__inst_47_1_2_6_4_tsni, lambda_inst_47_1_2_6_4_5_tsni, multPs_inst_47_1_2_7_tsni, lambda_inst_47_1_2_7_tsni, lambda$_inst_47_1_2_7_tsni, x__inst_47_1_2_7_4_tsni, lambda_inst_47_1_2_7_4_5_tsni, lambda_inst_48_49_tsni, lambda_inst_48_49_50_tsni, lambda_inst_51_52_tsni, lambda_inst_51_52_53_tsni, sinx_inst_54_55_tsni, lambda_inst_54_55_52_tsni, lambda_inst_54_55_52_53_tsni, cosx_inst_54_56_tsni, lambda_inst_54_56_49_tsni, lambda_inst_54_56_49_50_tsni, powerPs_inst_54_57_tsni, multPs_inst_54_57_58_tsni, lambda_inst_54_57_58_tsni, lambda$_inst_54_57_58_tsni, x__inst_54_57_58_4_tsni, lambda_inst_54_57_58_4_5_tsni, fromIntegerPs_inst_54_59_tsni, lambda_inst_54_59_13_tsni, sqrtPs_inst_54_60_tsni, lambda_inst_54_60_tsni, lambda$_inst_54_60_tsni, qs$_inst_54_60_19_tsni, lambda_inst_54_60_19_tsni, lambda$_inst_54_60_19_tsni, divPs_inst_54_60_19_10_tsni, lambda_inst_54_60_19_10_tsni, lambda$_inst_54_60_19_10_tsni, lambda_inst_54_60_19_10_11_tsni, fromIntegerPs_inst_54_60_19_12_tsni, lambda_inst_54_60_19_12_13_tsni, sinx_inst_54_61_tsni, lambda_inst_54_61_52_tsni, lambda_inst_54_61_52_53_tsni, cosx_inst_54_62_tsni, lambda_inst_54_62_49_tsni, lambda_inst_54_62_49_50_tsni, divPs_inst_54_63_tsni, lambda_inst_54_63_tsni, lambda$_inst_54_63_tsni, lambda_inst_54_63_11_tsni, powerPs_inst_54_64_tsni, multPs_inst_54_64_58_tsni, lambda_inst_54_64_58_tsni, lambda$_inst_54_64_58_tsni, x__inst_54_64_58_4_tsni, lambda_inst_54_64_58_4_5_tsni, x__inst_54_65_tsni, lambda_inst_54_65_5_tsni, fromIntegerPs_inst_54_66_tsni, lambda_inst_54_66_13_tsni, divPs_inst_54_67_tsni, lambda_inst_54_67_tsni, lambda$_inst_54_67_tsni, lambda_inst_54_67_11_tsni, fromIntegerPs_inst_54_68_tsni, lambda_inst_54_68_13_tsni, revert_inst_54_69_tsni, lambda_inst_54_69_45_tsni, lambda$_inst_54_69_45_32_tsni, rs$_inst_54_69_45_32_30_tsni, lambda_inst_54_69_45_32_30_tsni, lambda$_inst_54_69_45_32_30_tsni, compose__inst_54_69_45_32_30_28_tsni, lambda_inst_54_69_45_32_30_28_tsni, lambda$_inst_54_69_45_32_30_28_tsni, multPs_inst_54_69_45_32_30_28_7_tsni, lambda_inst_54_69_45_32_30_28_7_tsni, lambda$_inst_54_69_45_32_30_28_7_tsni, x__inst_54_69_45_32_30_28_7_4_tsni, lambda_inst_54_69_45_32_30_28_7_4_5_tsni, multPs_inst_54_69_45_32_30_28_6_tsni, lambda_inst_54_69_45_32_30_28_6_tsni, lambda$_inst_54_69_45_32_30_28_6_tsni, x__inst_54_69_45_32_30_28_6_4_tsni, lambda_inst_54_69_45_32_30_28_6_4_5_tsni, multPs_inst_54_69_45_32_30_28_3_tsni, lambda_inst_54_69_45_32_30_28_3_tsni, lambda$_inst_54_69_45_32_30_28_3_tsni, x__inst_54_69_45_32_30_28_3_4_tsni, lambda_inst_54_69_45_32_30_28_3_4_5_tsni, divPs_inst_54_69_45_32_30_22_tsni, lambda_inst_54_69_45_32_30_22_tsni, lambda$_inst_54_69_45_32_30_22_tsni, lambda_inst_54_69_45_32_30_22_11_tsni, fromIntegerPs_inst_54_69_45_32_30_23_tsni, lambda_inst_54_69_45_32_30_23_13_tsni, tree_inst_54_70_tsni, lambda_inst_54_70_tsni, lambda_inst_54_70_tsni1, composeSndLz__inst_54_70_1_tsni, lambda_inst_54_70_1_tsni, lambda$_inst_54_70_1_tsni, compose__inst_54_70_1_2_tsni, lambda_inst_54_70_1_2_tsni, lambda$_inst_54_70_1_2_tsni, multPs_inst_54_70_1_2_7_tsni, lambda_inst_54_70_1_2_7_tsni, lambda$_inst_54_70_1_2_7_tsni, x__inst_54_70_1_2_7_4_tsni, lambda_inst_54_70_1_2_7_4_5_tsni, multPs_inst_54_70_1_2_6_tsni, lambda_inst_54_70_1_2_6_tsni, lambda$_inst_54_70_1_2_6_tsni, x__inst_54_70_1_2_6_4_tsni, lambda_inst_54_70_1_2_6_4_5_tsni, multPs_inst_54_70_1_2_3_tsni, lambda_inst_54_70_1_2_3_tsni, lambda$_inst_54_70_1_2_3_tsni, x__inst_54_70_1_2_3_4_tsni, lambda_inst_54_70_1_2_3_4_5_tsni, multPs_inst_54_70_1_71_tsni, lambda_inst_54_70_1_71_tsni, lambda$_inst_54_70_1_71_tsni, x__inst_54_70_1_71_4_tsni, lambda_inst_54_70_1_71_4_5_tsni, testPower_nofib_inst_72_73_tsni, tree_inst_72_73_70_tsni, lambda_inst_72_73_70_tsni, lambda_inst_72_73_70_tsni1, composeSndLz__inst_72_73_70_1_tsni, lambda_inst_72_73_70_1_tsni, lambda$_inst_72_73_70_1_tsni, multPs_inst_72_73_70_1_71_tsni, lambda_inst_72_73_70_1_71_tsni, lambda$_inst_72_73_70_1_71_tsni, x__inst_72_73_70_1_71_4_tsni, lambda_inst_72_73_70_1_71_4_5_tsni, compose__inst_72_73_70_1_2_tsni, lambda_inst_72_73_70_1_2_tsni, lambda$_inst_72_73_70_1_2_tsni, multPs_inst_72_73_70_1_2_3_tsni, lambda_inst_72_73_70_1_2_3_tsni, lambda$_inst_72_73_70_1_2_3_tsni, x__inst_72_73_70_1_2_3_4_tsni, lambda_inst_72_73_70_1_2_3_4_5_tsni, multPs_inst_72_73_70_1_2_6_tsni, lambda_inst_72_73_70_1_2_6_tsni, lambda$_inst_72_73_70_1_2_6_tsni, x__inst_72_73_70_1_2_6_4_tsni, lambda_inst_72_73_70_1_2_6_4_5_tsni, multPs_inst_72_73_70_1_2_7_tsni, lambda_inst_72_73_70_1_2_7_tsni, lambda$_inst_72_73_70_1_2_7_tsni, x__inst_72_73_70_1_2_7_4_tsni, lambda_inst_72_73_70_1_2_7_4_5_tsni, revert_inst_72_73_69_tsni, lambda_inst_72_73_69_45_tsni, lambda$_inst_72_73_69_45_32_tsni, rs$_inst_72_73_69_45_32_30_tsni, lambda_inst_72_73_69_45_32_30_tsni, lambda$_inst_72_73_69_45_32_30_tsni, divPs_inst_72_73_69_45_32_30_22_tsni, lambda_inst_72_73_69_45_32_30_22_tsni, lambda$_inst_72_73_69_45_32_30_22_tsni, lambda_inst_72_73_69_45_32_30_22_11_tsni, compose__inst_72_73_69_45_32_30_28_tsni, lambda_inst_72_73_69_45_32_30_28_tsni, lambda$_inst_72_73_69_45_32_30_28_tsni, multPs_inst_72_73_69_45_32_30_28_3_tsni, lambda_inst_72_73_69_45_32_30_28_3_tsni, lambda$_inst_72_73_69_45_32_30_28_3_tsni, x__inst_72_73_69_45_32_30_28_3_4_tsni, lambda_inst_72_73_69_45_32_30_28_3_4_5_tsni, multPs_inst_72_73_69_45_32_30_28_6_tsni, lambda_inst_72_73_69_45_32_30_28_6_tsni, lambda$_inst_72_73_69_45_32_30_28_6_tsni, x__inst_72_73_69_45_32_30_28_6_4_tsni, lambda_inst_72_73_69_45_32_30_28_6_4_5_tsni, multPs_inst_72_73_69_45_32_30_28_7_tsni, lambda_inst_72_73_69_45_32_30_28_7_tsni, lambda$_inst_72_73_69_45_32_30_28_7_tsni, x__inst_72_73_69_45_32_30_28_7_4_tsni, lambda_inst_72_73_69_45_32_30_28_7_4_5_tsni, fromIntegerPs_inst_72_73_69_45_32_30_23_tsni, lambda_inst_72_73_69_45_32_30_23_13_tsni, divPs_inst_72_73_67_tsni, lambda_inst_72_73_67_tsni, lambda$_inst_72_73_67_tsni, lambda_inst_72_73_67_11_tsni, powerPs_inst_72_73_64_tsni, multPs_inst_72_73_64_58_tsni, lambda_inst_72_73_64_58_tsni, lambda$_inst_72_73_64_58_tsni, x__inst_72_73_64_58_4_tsni, lambda_inst_72_73_64_58_4_5_tsni, x__inst_72_73_65_tsni, lambda_inst_72_73_65_5_tsni, fromIntegerPs_inst_72_73_66_tsni, lambda_inst_72_73_66_13_tsni, fromIntegerPs_inst_72_73_68_tsni, lambda_inst_72_73_68_13_tsni, divPs_inst_72_73_63_tsni, lambda_inst_72_73_63_tsni, lambda$_inst_72_73_63_tsni, lambda_inst_72_73_63_11_tsni, cosx_inst_72_73_62_tsni, lambda_inst_72_73_62_49_tsni, lambda_inst_72_73_62_49_50_tsni, sinx_inst_72_73_61_tsni, lambda_inst_72_73_61_52_tsni, lambda_inst_72_73_61_52_53_tsni, sqrtPs_inst_72_73_60_tsni, lambda_inst_72_73_60_tsni, lambda$_inst_72_73_60_tsni, qs$_inst_72_73_60_19_tsni, lambda_inst_72_73_60_19_tsni, lambda$_inst_72_73_60_19_tsni, divPs_inst_72_73_60_19_10_tsni, lambda_inst_72_73_60_19_10_tsni, lambda$_inst_72_73_60_19_10_tsni, lambda_inst_72_73_60_19_10_11_tsni, fromIntegerPs_inst_72_73_60_19_12_tsni, lambda_inst_72_73_60_19_12_13_tsni, powerPs_inst_72_73_57_tsni, multPs_inst_72_73_57_58_tsni, lambda_inst_72_73_57_58_tsni, lambda$_inst_72_73_57_58_tsni, x__inst_72_73_57_58_4_tsni, lambda_inst_72_73_57_58_4_5_tsni, cosx_inst_72_73_56_tsni, lambda_inst_72_73_56_49_tsni, lambda_inst_72_73_56_49_50_tsni, fromIntegerPs_inst_72_73_59_tsni, lambda_inst_72_73_59_13_tsni, sinx_inst_72_73_55_tsni, lambda_inst_72_73_55_52_tsni, lambda_inst_72_73_55_52_53_tsni, addPs_inst_9_74_tsni, lambda_inst_9_74_tsni, lambda$_inst_9_74_tsni, addPs_inst_14_74_tsni, lambda_inst_14_74_tsni, lambda$_inst_14_74_tsni, addPs_inst_15_74_tsni, lambda_inst_15_74_tsni, lambda$_inst_15_74_tsni, addPs_inst_16_17_74_tsni, lambda_inst_16_17_74_tsni, lambda$_inst_16_17_74_tsni, addPs_inst_18_19_74_tsni, lambda_inst_18_19_74_tsni, lambda$_inst_18_19_74_tsni, addPs_inst_20_19_74_tsni, lambda_inst_20_19_74_tsni, lambda$_inst_20_19_74_tsni, addPs_inst_46_19_74_tsni, lambda_inst_46_19_74_tsni, lambda$_inst_46_19_74_tsni, minusPs_inst_48_75_tsni, addPs_inst_48_75_76_tsni, lambda_inst_48_75_76_tsni, lambda$_inst_48_75_76_tsni, minusPs_inst_51_77_tsni, addPs_inst_51_77_76_tsni, lambda_inst_51_77_76_tsni, lambda$_inst_51_77_76_tsni, minusPs_inst_54_55_77_tsni, addPs_inst_54_55_77_76_tsni, lambda_inst_54_55_77_76_tsni, lambda$_inst_54_55_77_76_tsni, minusPs_inst_54_56_75_tsni, addPs_inst_54_56_75_76_tsni, lambda_inst_54_56_75_76_tsni, lambda$_inst_54_56_75_76_tsni, minusPs_inst_54_78_tsni, addPs_inst_54_78_76_tsni, lambda_inst_54_78_76_tsni, lambda$_inst_54_78_76_tsni, addPs_inst_54_60_19_74_tsni, lambda_inst_54_60_19_74_tsni, lambda$_inst_54_60_19_74_tsni, minusPs_inst_54_61_77_tsni, addPs_inst_54_61_77_76_tsni, lambda_inst_54_61_77_76_tsni, lambda$_inst_54_61_77_76_tsni, minusPs_inst_54_62_75_tsni, addPs_inst_54_62_75_76_tsni, lambda_inst_54_62_75_76_tsni, lambda$_inst_54_62_75_76_tsni, addPs_inst_54_79_tsni, lambda_inst_54_79_tsni, lambda$_inst_54_79_tsni, addPs_inst_72_73_79_tsni, lambda_inst_72_73_79_tsni, lambda$_inst_72_73_79_tsni, minusPs_inst_72_73_62_75_tsni, addPs_inst_72_73_62_75_76_tsni, lambda_inst_72_73_62_75_76_tsni, lambda$_inst_72_73_62_75_76_tsni, minusPs_inst_72_73_61_77_tsni, addPs_inst_72_73_61_77_76_tsni, lambda_inst_72_73_61_77_76_tsni, lambda$_inst_72_73_61_77_76_tsni, addPs_inst_72_73_60_19_74_tsni, lambda_inst_72_73_60_19_74_tsni, lambda$_inst_72_73_60_19_74_tsni, minusPs_inst_72_73_56_75_tsni, addPs_inst_72_73_56_75_76_tsni, lambda_inst_72_73_56_75_76_tsni, lambda$_inst_72_73_56_75_76_tsni, minusPs_inst_72_73_78_tsni, addPs_inst_72_73_78_76_tsni, lambda_inst_72_73_78_76_tsni, lambda$_inst_72_73_78_76_tsni, minusPs_inst_72_73_55_77_tsni, addPs_inst_72_73_55_77_76_tsni, lambda_inst_72_73_55_77_76_tsni, lambda$_inst_72_73_55_77_76_tsni, match_scrut_arm_Pz_inst_21_22_tsni, match_scrut_arm_Pz_inst_24_22_tsni, match_scrut_arm_Pz_inst_25_22_tsni, match_scrut_arm_Pz_inst_26_27_22_tsni, match_scrut_arm_Pz_inst_29_30_22_tsni, match_scrut_arm_Pz_inst_31_32_30_22_tsni, match_scrut_arm_Pc_inst_35_36_tsni, match_scrut_arm_Pc_inst_39_40_36_tsni, match_scrut_arm_Pc_inst_41_42_40_36_tsni, match_scrut_arm_Pz_inst_44_45_32_30_22_tsni, match_scrut_arm_Pc_inst_54_64_58_tsni, match_scrut_arm_Pz_inst_54_67_tsni, match_scrut_arm_Pz_inst_54_69_45_32_30_22_tsni, match_scrut_arm_Pz_inst_72_73_69_45_32_30_22_tsni, match_scrut_arm_Pz_inst_72_73_67_tsni, match_scrut_arm_Pc_inst_72_73_64_58_tsni;
match_scrut_arm_Pz_inst_21_22_tsni = function match_scrut_arm_Pz_inst_21_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_21_22_11_tsni);
      tmp1 = divPs_inst_21_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_24_22_tsni = function match_scrut_arm_Pz_inst_24_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_24_22_11_tsni);
      tmp1 = divPs_inst_24_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_25_22_tsni = function match_scrut_arm_Pz_inst_25_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_25_22_11_tsni);
      tmp1 = divPs_inst_25_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_26_27_22_tsni = function match_scrut_arm_Pz_inst_26_27_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_26_27_22_11_tsni);
      tmp1 = divPs_inst_26_27_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_29_30_22_tsni = function match_scrut_arm_Pz_inst_29_30_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_29_30_22_11_tsni);
      tmp1 = divPs_inst_29_30_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_31_32_30_22_tsni = function match_scrut_arm_Pz_inst_31_32_30_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_31_32_30_22_11_tsni);
      tmp1 = divPs_inst_31_32_30_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pc_inst_35_36_tsni = function match_scrut_arm_Pc_inst_35_36_tsni(gss, _deforest_Pc_f_inst_35_36_tsni, _deforest_Pc_s_inst_35_36_tsni) {
  let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Pc_f_inst_35_36_tsni;
  param1 = _deforest_Pc_s_inst_35_36_tsni;
  f = param0;
  fs_ = param1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param01 = scrut.f;
    param11 = scrut.s;
    g = param01;
    gs = param11;
    tmp = f * g;
    tmp1 = power1.dotMult(f, gs);
    tmp2 = power1.dotMult(g, fs_);
    tmp3 = power1.addPs(tmp1, tmp2);
    tmp4 = x__inst_35_36_4_tsni();
    tmp5 = multPs_inst_35_36_tsni(tmp4, fs_);
    tmp6 = multPs_inst_35_36_tsni(tmp5, gs);
    tmp7 = power1.addPs(tmp3, tmp6);
    return power1.Pc(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_Pc_inst_39_40_36_tsni = function match_scrut_arm_Pc_inst_39_40_36_tsni(gss, _deforest_Pc_f_inst_39_40_36_tsni, _deforest_Pc_s_inst_39_40_36_tsni) {
  let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Pc_f_inst_39_40_36_tsni;
  param1 = _deforest_Pc_s_inst_39_40_36_tsni;
  f = param0;
  fs_ = param1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param01 = scrut.f;
    param11 = scrut.s;
    g = param01;
    gs = param11;
    tmp = f * g;
    tmp1 = power1.dotMult(f, gs);
    tmp2 = power1.dotMult(g, fs_);
    tmp3 = power1.addPs(tmp1, tmp2);
    tmp4 = x__inst_39_40_36_4_tsni();
    tmp5 = multPs_inst_39_40_36_tsni(tmp4, fs_);
    tmp6 = multPs_inst_39_40_36_tsni(tmp5, gs);
    tmp7 = power1.addPs(tmp3, tmp6);
    return power1.Pc(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_Pc_inst_41_42_40_36_tsni = function match_scrut_arm_Pc_inst_41_42_40_36_tsni(gss, _deforest_Pc_f_inst_41_42_40_36_tsni, _deforest_Pc_s_inst_41_42_40_36_tsni) {
  let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Pc_f_inst_41_42_40_36_tsni;
  param1 = _deforest_Pc_s_inst_41_42_40_36_tsni;
  f = param0;
  fs_ = param1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param01 = scrut.f;
    param11 = scrut.s;
    g = param01;
    gs = param11;
    tmp = f * g;
    tmp1 = power1.dotMult(f, gs);
    tmp2 = power1.dotMult(g, fs_);
    tmp3 = power1.addPs(tmp1, tmp2);
    tmp4 = x__inst_41_42_40_36_4_tsni();
    tmp5 = multPs_inst_41_42_40_36_tsni(tmp4, fs_);
    tmp6 = multPs_inst_41_42_40_36_tsni(tmp5, gs);
    tmp7 = power1.addPs(tmp3, tmp6);
    return power1.Pc(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_Pz_inst_44_45_32_30_22_tsni = function match_scrut_arm_Pz_inst_44_45_32_30_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_44_45_32_30_22_11_tsni);
      tmp1 = divPs_inst_44_45_32_30_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pc_inst_54_64_58_tsni = function match_scrut_arm_Pc_inst_54_64_58_tsni(gss, _deforest_Pc_f_inst_54_64_58_tsni, _deforest_Pc_s_inst_54_64_58_tsni) {
  let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Pc_f_inst_54_64_58_tsni;
  param1 = _deforest_Pc_s_inst_54_64_58_tsni;
  f = param0;
  fs_ = param1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param01 = scrut.f;
    param11 = scrut.s;
    g = param01;
    gs = param11;
    tmp = f * g;
    tmp1 = power1.dotMult(f, gs);
    tmp2 = power1.dotMult(g, fs_);
    tmp3 = power1.addPs(tmp1, tmp2);
    tmp4 = x__inst_54_64_58_4_tsni();
    tmp5 = multPs_inst_54_64_58_tsni(tmp4, fs_);
    tmp6 = multPs_inst_54_64_58_tsni(tmp5, gs);
    tmp7 = power1.addPs(tmp3, tmp6);
    return power1.Pc(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_Pz_inst_54_67_tsni = function match_scrut_arm_Pz_inst_54_67_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_54_67_11_tsni);
      tmp1 = divPs_inst_54_67_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_54_69_45_32_30_22_tsni = function match_scrut_arm_Pz_inst_54_69_45_32_30_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_54_69_45_32_30_22_11_tsni);
      tmp1 = divPs_inst_54_69_45_32_30_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_72_73_69_45_32_30_22_tsni = function match_scrut_arm_Pz_inst_72_73_69_45_32_30_22_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_72_73_69_45_32_30_22_11_tsni);
      tmp1 = divPs_inst_72_73_69_45_32_30_22_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pz_inst_72_73_67_tsni = function match_scrut_arm_Pz_inst_72_73_67_tsni(gss) {
  let scrut, param0, param1, gs, tmp, tmp1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    throw globalThis.Error("power series 0/0");
  } else if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      gs = param1;
      tmp = NofibPrelude.lazy(lambda_inst_72_73_67_11_tsni);
      tmp1 = divPs_inst_72_73_67_tsni(tmp, gs);
      return NofibPrelude.force(tmp1)
    } else {
      return power1.Pz
    }
  } else {
    return power1.Pz
  }
};
match_scrut_arm_Pc_inst_72_73_64_58_tsni = function match_scrut_arm_Pc_inst_72_73_64_58_tsni(gss, _deforest_Pc_f_inst_72_73_64_58_tsni, _deforest_Pc_s_inst_72_73_64_58_tsni) {
  let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Pc_f_inst_72_73_64_58_tsni;
  param1 = _deforest_Pc_s_inst_72_73_64_58_tsni;
  f = param0;
  fs_ = param1;
  scrut = NofibPrelude.force(gss);
  if (scrut instanceof power1.Pz.class) {
    return power1.Pz
  } else if (scrut instanceof power1.Pc.class) {
    param01 = scrut.f;
    param11 = scrut.s;
    g = param01;
    gs = param11;
    tmp = f * g;
    tmp1 = power1.dotMult(f, gs);
    tmp2 = power1.dotMult(g, fs_);
    tmp3 = power1.addPs(tmp1, tmp2);
    tmp4 = x__inst_72_73_64_58_4_tsni();
    tmp5 = multPs_inst_72_73_64_58_tsni(tmp4, fs_);
    tmp6 = multPs_inst_72_73_64_58_tsni(tmp5, gs);
    tmp7 = power1.addPs(tmp3, tmp6);
    return power1.Pc(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
tree_inst_0_tsni = function tree_inst_0_tsni() {
  let tmp;
  tmp = lambda_inst_0_tsni;
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_tsni = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda47);
  tmp2 = composeSndLz__inst_0_1_tsni(tmp, tmp1);
  return power1.Pc(0, tmp2)
});
composeSndLz__inst_0_1_tsni = function composeSndLz__inst_0_1_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_1_tsni(fss, gss)
  }
});
lambda$_inst_0_1_tsni = function lambda$_inst_0_1_tsni(fss, gss) {
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
        tmp3 = compose__inst_0_1_2_tsni(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_0_1_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_0_1_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compose__inst_0_1_2_tsni = function compose__inst_0_1_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_1_2_tsni(fss, gss)
  }
});
lambda$_inst_0_1_2_tsni = function lambda$_inst_0_1_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_0_1_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_0_1_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_0_1_2_tsni(fs_, gss);
        tmp6 = multPs_inst_0_1_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_0_1_2_tsni(fs_, gss);
      tmp10 = multPs_inst_0_1_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_0_1_2_3_tsni = function multPs_inst_0_1_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_1_2_3_tsni(fss, gss)
  }
});
lambda$_inst_0_1_2_3_tsni = function lambda$_inst_0_1_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_0_1_2_3_4_tsni = function x__inst_0_1_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_0_1_2_3_4_5_tsni)
};
lambda_inst_0_1_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_0_1_2_3_4_tsni();
      tmp6 = multPs_inst_0_1_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_0_1_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_0_1_2_6_tsni = function multPs_inst_0_1_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_1_2_6_tsni(fss, gss)
  }
});
lambda$_inst_0_1_2_6_tsni = function lambda$_inst_0_1_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_0_1_2_6_4_tsni = function x__inst_0_1_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_0_1_2_6_4_5_tsni)
};
lambda_inst_0_1_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_0_1_2_6_4_tsni();
      tmp6 = multPs_inst_0_1_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_0_1_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_0_1_2_7_tsni = function multPs_inst_0_1_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_0_1_2_7_tsni(fss, gss)
  }
});
lambda$_inst_0_1_2_7_tsni = function lambda$_inst_0_1_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_0_1_2_7_4_tsni = function x__inst_0_1_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_0_1_2_7_4_5_tsni)
};
lambda_inst_0_1_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_0_1_2_7_4_tsni();
      tmp6 = multPs_inst_0_1_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_0_1_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
tree_inst_8_tsni = function tree_inst_8_tsni() {
  let tmp;
  tmp = lambda46;
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_tsni = (undefined, function () {
  return tree_inst_8_tsni()
});
composeSndLz__inst_8_1_tsni = function composeSndLz__inst_8_1_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_1_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_1_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_1_tsni(fss, gss)
  }
});
lambda$_inst_8_1_tsni = function lambda$_inst_8_1_tsni(fss, gss) {
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
        tmp3 = compose__inst_8_1_2_tsni(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_8_1_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_8_1_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compose__inst_8_1_2_tsni = function compose__inst_8_1_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_1_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_1_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_1_2_tsni(fss, gss)
  }
});
lambda$_inst_8_1_2_tsni = function lambda$_inst_8_1_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_8_1_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_8_1_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_8_1_2_tsni(fs_, gss);
        tmp6 = multPs_inst_8_1_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_8_1_2_tsni(fs_, gss);
      tmp10 = multPs_inst_8_1_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_8_1_2_3_tsni = function multPs_inst_8_1_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_1_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_1_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_1_2_3_tsni(fss, gss)
  }
});
lambda$_inst_8_1_2_3_tsni = function lambda$_inst_8_1_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_8_1_2_3_4_tsni = function x__inst_8_1_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_8_1_2_3_4_5_tsni)
};
lambda_inst_8_1_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_8_1_2_3_4_tsni();
      tmp6 = multPs_inst_8_1_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_8_1_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_8_1_2_6_tsni = function multPs_inst_8_1_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_1_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_1_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_1_2_6_tsni(fss, gss)
  }
});
lambda$_inst_8_1_2_6_tsni = function lambda$_inst_8_1_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_8_1_2_6_4_tsni = function x__inst_8_1_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_8_1_2_6_4_5_tsni)
};
lambda_inst_8_1_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_8_1_2_6_4_tsni();
      tmp6 = multPs_inst_8_1_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_8_1_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_8_1_2_7_tsni = function multPs_inst_8_1_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_1_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_1_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_8_1_2_7_tsni(fss, gss)
  }
});
lambda$_inst_8_1_2_7_tsni = function lambda$_inst_8_1_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_8_1_2_7_4_tsni = function x__inst_8_1_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_8_1_2_7_4_5_tsni)
};
lambda_inst_8_1_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_8_1_2_7_4_tsni();
      tmp6 = multPs_inst_8_1_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_8_1_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
qs$_inst_9_tsni = function qs$_inst_9_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$29(fs_)
  }
});
divPs_inst_9_10_tsni = function divPs_inst_9_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_9_10_tsni(fss, gss)
  }
});
lambda$_inst_9_10_tsni = function lambda$_inst_9_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_9_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_9_10_11_tsni);
        tmp1 = divPs_inst_9_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_9_12_tsni = function fromIntegerPs_inst_9_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_9_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_9_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
qs$_inst_14_tsni = function qs$_inst_14_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda43(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_14_tsni = function lambda$_inst_14_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_14_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_14_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_14_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_14_74_tsni(tmp, tmp6)
};
divPs_inst_14_10_tsni = function divPs_inst_14_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_14_10_tsni(fss, gss)
  }
});
lambda$_inst_14_10_tsni = function lambda$_inst_14_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_14_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_14_10_11_tsni);
        tmp1 = divPs_inst_14_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_14_12_tsni = function fromIntegerPs_inst_14_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_14_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_14_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
lambda_inst_15_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_15_tsni(fs_)
  }
});
lambda$_inst_15_tsni = function lambda$_inst_15_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_15_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_15_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_15_74_tsni(tmp, tmp6)
};
divPs_inst_15_10_tsni = function divPs_inst_15_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_15_10_tsni(fss, gss)
  }
});
lambda$_inst_15_10_tsni = function lambda$_inst_15_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_15_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_15_10_11_tsni);
        tmp1 = divPs_inst_15_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_15_12_tsni = function fromIntegerPs_inst_15_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_15_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_15_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
qs$_inst_16_17_tsni = function qs$_inst_16_17_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_17_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_17_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_16_17_tsni(fs_)
  }
});
lambda$_inst_16_17_tsni = function lambda$_inst_16_17_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_16_17_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_16_17_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_16_17_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_16_17_74_tsni(tmp, tmp6)
};
divPs_inst_16_17_10_tsni = function divPs_inst_16_17_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_17_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_17_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_16_17_10_tsni(fss, gss)
  }
});
lambda$_inst_16_17_10_tsni = function lambda$_inst_16_17_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_16_17_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_16_17_10_11_tsni);
        tmp1 = divPs_inst_16_17_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_16_17_12_tsni = function fromIntegerPs_inst_16_17_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_16_17_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_16_17_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sqrtPs_inst_18_tsni = function sqrtPs_inst_18_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_tsni = (undefined, function (fss) {
  return () => {
    return lambda$28(fss)
  }
});
qs$_inst_18_19_tsni = function qs$_inst_18_19_tsni(fs_) {
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
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_18_19_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_18_19_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_18_19_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_18_19_74_tsni(tmp, tmp6)
};
divPs_inst_18_19_10_tsni = function divPs_inst_18_19_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_18_19_10_tsni(fss, gss)
  }
});
lambda$_inst_18_19_10_tsni = function lambda$_inst_18_19_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_18_19_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_18_19_10_11_tsni);
        tmp1 = divPs_inst_18_19_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_18_19_12_tsni = function fromIntegerPs_inst_18_19_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_18_19_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_18_19_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sqrtPs_inst_20_tsni = function sqrtPs_inst_20_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda42(fss));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_20_tsni = function lambda$_inst_20_tsni(fss) {
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
          tmp = sqrtPs_inst_20_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_20_19_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qs$_inst_20_19_tsni = function qs$_inst_20_19_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_19_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_19_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_20_19_tsni(fs_)
  }
});
lambda$_inst_20_19_tsni = function lambda$_inst_20_19_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_20_19_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_20_19_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_20_19_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_20_19_74_tsni(tmp, tmp6)
};
divPs_inst_20_19_10_tsni = function divPs_inst_20_19_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_19_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_19_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_20_19_10_tsni(fss, gss)
  }
});
lambda$_inst_20_19_10_tsni = function lambda$_inst_20_19_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_20_19_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_20_19_10_11_tsni);
        tmp1 = divPs_inst_20_19_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_20_19_12_tsni = function fromIntegerPs_inst_20_19_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_20_19_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_20_19_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
rs$_inst_21_tsni = function rs$_inst_21_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_21_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$21(fs_)
  }
});
divPs_inst_21_22_tsni = function divPs_inst_21_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_21_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_21_22_tsni(fss, gss)
  }
});
lambda$_inst_21_22_tsni = function lambda$_inst_21_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_21_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_21_22_tsni(gss)
  }
});
fromIntegerPs_inst_21_23_tsni = function fromIntegerPs_inst_21_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_21_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_21_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_21_22_tsni(gss)
  }
});
rs$_inst_24_tsni = function rs$_inst_24_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda33(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_24_tsni = function lambda$_inst_24_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_24_23_tsni(1);
  tmp1 = rs$_inst_24_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_24_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_24_22_tsni = function divPs_inst_24_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_24_22_tsni(fss, gss)
  }
});
lambda$_inst_24_22_tsni = function lambda$_inst_24_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_24_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_24_22_tsni(gss)
  }
});
fromIntegerPs_inst_24_23_tsni = function fromIntegerPs_inst_24_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_24_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_24_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_24_22_tsni(gss)
  }
});
lambda_inst_25_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_25_tsni(fs_)
  }
});
lambda$_inst_25_tsni = function lambda$_inst_25_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_25_23_tsni(1);
  tmp1 = rs$(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_25_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_25_22_tsni = function divPs_inst_25_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_25_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_25_22_tsni(fss, gss)
  }
});
lambda$_inst_25_22_tsni = function lambda$_inst_25_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_25_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_25_22_tsni(gss)
  }
});
fromIntegerPs_inst_25_23_tsni = function fromIntegerPs_inst_25_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_25_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_25_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_25_22_tsni(gss)
  }
});
rs$_inst_26_27_tsni = function rs$_inst_26_27_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_26_27_tsni(fs_)
  }
});
lambda$_inst_26_27_tsni = function lambda$_inst_26_27_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_26_27_23_tsni(1);
  tmp1 = rs$_inst_26_27_tsni(fs_);
  tmp2 = compose__inst_26_27_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_26_27_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_26_27_22_tsni = function divPs_inst_26_27_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_27_22_tsni(fss, gss)
  }
});
lambda$_inst_26_27_22_tsni = function lambda$_inst_26_27_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_26_27_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_26_27_22_tsni(gss)
  }
});
compose__inst_26_27_28_tsni = function compose__inst_26_27_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_27_28_tsni(fss, gss)
  }
});
lambda$_inst_26_27_28_tsni = function lambda$_inst_26_27_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_26_27_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_26_27_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_26_27_28_tsni(fs_, gss);
        tmp6 = multPs_inst_26_27_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_26_27_28_tsni(fs_, gss);
      tmp10 = multPs_inst_26_27_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_26_27_28_3_tsni = function multPs_inst_26_27_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_27_28_3_tsni(fss, gss)
  }
});
lambda$_inst_26_27_28_3_tsni = function lambda$_inst_26_27_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_26_27_28_3_4_tsni = function x__inst_26_27_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_26_27_28_3_4_5_tsni)
};
lambda_inst_26_27_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_26_27_28_3_4_tsni();
      tmp6 = multPs_inst_26_27_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_26_27_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_26_27_28_6_tsni = function multPs_inst_26_27_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_27_28_6_tsni(fss, gss)
  }
});
lambda$_inst_26_27_28_6_tsni = function lambda$_inst_26_27_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_26_27_28_6_4_tsni = function x__inst_26_27_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_26_27_28_6_4_5_tsni)
};
lambda_inst_26_27_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_26_27_28_6_4_tsni();
      tmp6 = multPs_inst_26_27_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_26_27_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_26_27_28_7_tsni = function multPs_inst_26_27_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_26_27_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_26_27_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_26_27_28_7_tsni(fss, gss)
  }
});
lambda$_inst_26_27_28_7_tsni = function lambda$_inst_26_27_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_26_27_28_7_4_tsni = function x__inst_26_27_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_26_27_28_7_4_5_tsni)
};
lambda_inst_26_27_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_26_27_28_7_4_tsni();
      tmp6 = multPs_inst_26_27_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_26_27_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
fromIntegerPs_inst_26_27_23_tsni = function fromIntegerPs_inst_26_27_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_26_27_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_26_27_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_26_27_22_tsni(gss)
  }
});
rs$_inst_29_30_tsni = function rs$_inst_29_30_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_29_30_tsni(fs_)
  }
});
lambda$_inst_29_30_tsni = function lambda$_inst_29_30_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_29_30_23_tsni(1);
  tmp1 = rs$_inst_29_30_tsni(fs_);
  tmp2 = compose__inst_29_30_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_29_30_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_29_30_22_tsni = function divPs_inst_29_30_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_30_22_tsni(fss, gss)
  }
});
lambda$_inst_29_30_22_tsni = function lambda$_inst_29_30_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_29_30_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_29_30_22_tsni(gss)
  }
});
compose__inst_29_30_28_tsni = function compose__inst_29_30_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_30_28_tsni(fss, gss)
  }
});
lambda$_inst_29_30_28_tsni = function lambda$_inst_29_30_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_29_30_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_29_30_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_29_30_28_tsni(fs_, gss);
        tmp6 = multPs_inst_29_30_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_29_30_28_tsni(fs_, gss);
      tmp10 = multPs_inst_29_30_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_29_30_28_3_tsni = function multPs_inst_29_30_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_30_28_3_tsni(fss, gss)
  }
});
lambda$_inst_29_30_28_3_tsni = function lambda$_inst_29_30_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_29_30_28_3_4_tsni = function x__inst_29_30_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_29_30_28_3_4_5_tsni)
};
lambda_inst_29_30_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_29_30_28_3_4_tsni();
      tmp6 = multPs_inst_29_30_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_29_30_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_29_30_28_6_tsni = function multPs_inst_29_30_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_30_28_6_tsni(fss, gss)
  }
});
lambda$_inst_29_30_28_6_tsni = function lambda$_inst_29_30_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_29_30_28_6_4_tsni = function x__inst_29_30_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_29_30_28_6_4_5_tsni)
};
lambda_inst_29_30_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_29_30_28_6_4_tsni();
      tmp6 = multPs_inst_29_30_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_29_30_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_29_30_28_7_tsni = function multPs_inst_29_30_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_29_30_28_7_tsni(fss, gss)
  }
});
lambda$_inst_29_30_28_7_tsni = function lambda$_inst_29_30_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_29_30_28_7_4_tsni = function x__inst_29_30_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_29_30_28_7_4_5_tsni)
};
lambda_inst_29_30_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_29_30_28_7_4_tsni();
      tmp6 = multPs_inst_29_30_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_29_30_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
fromIntegerPs_inst_29_30_23_tsni = function fromIntegerPs_inst_29_30_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_29_30_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_29_30_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_29_30_22_tsni(gss)
  }
});
lambda$_inst_31_32_tsni = function lambda$_inst_31_32_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_31_32_30_tsni(fs_);
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rs$_inst_31_32_30_tsni = function rs$_inst_31_32_30_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_31_32_30_tsni(fs_)
  }
});
lambda$_inst_31_32_30_tsni = function lambda$_inst_31_32_30_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_31_32_30_23_tsni(1);
  tmp1 = rs$_inst_31_32_30_tsni(fs_);
  tmp2 = compose__inst_31_32_30_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_31_32_30_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
compose__inst_31_32_30_28_tsni = function compose__inst_31_32_30_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_31_32_30_28_tsni(fss, gss)
  }
});
lambda$_inst_31_32_30_28_tsni = function lambda$_inst_31_32_30_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_31_32_30_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_31_32_30_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_31_32_30_28_tsni(fs_, gss);
        tmp6 = multPs_inst_31_32_30_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_31_32_30_28_tsni(fs_, gss);
      tmp10 = multPs_inst_31_32_30_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_31_32_30_28_7_tsni = function multPs_inst_31_32_30_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_31_32_30_28_7_tsni(fss, gss)
  }
});
lambda$_inst_31_32_30_28_7_tsni = function lambda$_inst_31_32_30_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_31_32_30_28_7_4_tsni = function x__inst_31_32_30_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_31_32_30_28_7_4_5_tsni)
};
lambda_inst_31_32_30_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_31_32_30_28_7_4_tsni();
      tmp6 = multPs_inst_31_32_30_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_31_32_30_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_31_32_30_28_6_tsni = function multPs_inst_31_32_30_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_31_32_30_28_6_tsni(fss, gss)
  }
});
lambda$_inst_31_32_30_28_6_tsni = function lambda$_inst_31_32_30_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_31_32_30_28_6_4_tsni = function x__inst_31_32_30_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_31_32_30_28_6_4_5_tsni)
};
lambda_inst_31_32_30_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_31_32_30_28_6_4_tsni();
      tmp6 = multPs_inst_31_32_30_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_31_32_30_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_31_32_30_28_3_tsni = function multPs_inst_31_32_30_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_31_32_30_28_3_tsni(fss, gss)
  }
});
lambda$_inst_31_32_30_28_3_tsni = function lambda$_inst_31_32_30_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_31_32_30_28_3_4_tsni = function x__inst_31_32_30_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_31_32_30_28_3_4_5_tsni)
};
lambda_inst_31_32_30_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_31_32_30_28_3_4_tsni();
      tmp6 = multPs_inst_31_32_30_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_31_32_30_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
divPs_inst_31_32_30_22_tsni = function divPs_inst_31_32_30_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_31_32_30_22_tsni(fss, gss)
  }
});
lambda$_inst_31_32_30_22_tsni = function lambda$_inst_31_32_30_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_31_32_30_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_31_32_30_22_tsni(gss)
  }
});
fromIntegerPs_inst_31_32_30_23_tsni = function fromIntegerPs_inst_31_32_30_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_31_32_30_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_31_32_30_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_31_32_30_22_tsni(gss)
  }
});
composeSndLz__inst_33_tsni = function composeSndLz__inst_33_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_33_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$15(fss, gss)
  }
});
compose__inst_33_2_tsni = function compose__inst_33_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_33_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_33_2_tsni(fss, gss)
  }
});
lambda$_inst_33_2_tsni = function lambda$_inst_33_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_33_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_33_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_33_2_tsni(fs_, gss);
        tmp6 = multPs_inst_33_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_33_2_tsni(fs_, gss);
      tmp10 = multPs_inst_33_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_33_2_7_tsni = function multPs_inst_33_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_33_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_33_2_7_tsni(fss, gss)
  }
});
lambda$_inst_33_2_7_tsni = function lambda$_inst_33_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_33_2_7_4_tsni = function x__inst_33_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_33_2_7_4_5_tsni)
};
lambda_inst_33_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_33_2_7_4_tsni();
      tmp6 = multPs_inst_33_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_33_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_33_2_6_tsni = function multPs_inst_33_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_33_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_33_2_6_tsni(fss, gss)
  }
});
lambda$_inst_33_2_6_tsni = function lambda$_inst_33_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_33_2_6_4_tsni = function x__inst_33_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_33_2_6_4_5_tsni)
};
lambda_inst_33_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_33_2_6_4_tsni();
      tmp6 = multPs_inst_33_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_33_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_33_2_3_tsni = function multPs_inst_33_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_33_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_33_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_33_2_3_tsni(fss, gss)
  }
});
lambda$_inst_33_2_3_tsni = function lambda$_inst_33_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_33_2_3_4_tsni = function x__inst_33_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_33_2_3_4_5_tsni)
};
lambda_inst_33_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_33_2_3_4_tsni();
      tmp6 = multPs_inst_33_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_33_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
composeSndLz__inst_34_tsni = function composeSndLz__inst_34_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda25(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_34_tsni = function lambda$_inst_34_tsni(fss, gss) {
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
        tmp3 = compose__inst_34_2_tsni(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_34_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_34_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compose__inst_34_2_tsni = function compose__inst_34_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_34_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_34_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_34_2_tsni(fss, gss)
  }
});
lambda$_inst_34_2_tsni = function lambda$_inst_34_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_34_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_34_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_34_2_tsni(fs_, gss);
        tmp6 = multPs_inst_34_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_34_2_tsni(fs_, gss);
      tmp10 = multPs_inst_34_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_34_2_7_tsni = function multPs_inst_34_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_34_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_34_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_34_2_7_tsni(fss, gss)
  }
});
lambda$_inst_34_2_7_tsni = function lambda$_inst_34_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_34_2_7_4_tsni = function x__inst_34_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_34_2_7_4_5_tsni)
};
lambda_inst_34_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_34_2_7_4_tsni();
      tmp6 = multPs_inst_34_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_34_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_34_2_6_tsni = function multPs_inst_34_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_34_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_34_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_34_2_6_tsni(fss, gss)
  }
});
lambda$_inst_34_2_6_tsni = function lambda$_inst_34_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_34_2_6_4_tsni = function x__inst_34_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_34_2_6_4_5_tsni)
};
lambda_inst_34_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_34_2_6_4_tsni();
      tmp6 = multPs_inst_34_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_34_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_34_2_3_tsni = function multPs_inst_34_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_34_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_34_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_34_2_3_tsni(fss, gss)
  }
});
lambda$_inst_34_2_3_tsni = function lambda$_inst_34_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_34_2_3_4_tsni = function x__inst_34_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_34_2_3_4_5_tsni)
};
lambda_inst_34_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_34_2_3_4_tsni();
      tmp6 = multPs_inst_34_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_34_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_35_36_tsni = function multPs_inst_35_36_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_35_36_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_35_36_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_35_36_tsni(fss, gss)
  }
});
lambda$_inst_35_36_tsni = function lambda$_inst_35_36_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_35_36_4_tsni = function x__inst_35_36_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_35_36_4_5_tsni)
};
lambda_inst_35_36_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_35_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
x__inst_35_37_tsni = function x__inst_35_37_tsni() {
  return NofibPrelude.lazy(lambda_inst_35_37_5_tsni)
};
lambda_inst_35_37_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_35_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
multPs_inst_35_38_tsni = function multPs_inst_35_38_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_35_38_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_35_38_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_35_38_tsni(fss, gss)
  }
});
lambda$_inst_35_38_tsni = function lambda$_inst_35_38_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_35_38_4_tsni = function x__inst_35_38_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_35_38_4_5_tsni)
};
lambda_inst_35_38_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_35_38_4_tsni();
      tmp6 = multPs_inst_35_38_tsni(tmp5, fs_);
      tmp7 = multPs_inst_35_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda$_inst_39_40_tsni = function lambda$_inst_39_40_tsni(fss, gss) {
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
      tmp5 = x__inst_39_40_37_tsni();
      tmp6 = multPs_inst_39_40_36_tsni(tmp5, fs_);
      tmp7 = multPs_inst_39_40_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_39_40_38_tsni = function multPs_inst_39_40_38_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_40_38_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_40_38_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_39_40_38_tsni(fss, gss)
  }
});
lambda$_inst_39_40_38_tsni = function lambda$_inst_39_40_38_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_39_40_38_4_tsni = function x__inst_39_40_38_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_39_40_38_4_5_tsni)
};
lambda_inst_39_40_38_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_39_40_38_4_tsni();
      tmp6 = multPs_inst_39_40_38_tsni(tmp5, fs_);
      tmp7 = multPs_inst_39_40_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_39_40_36_tsni = function multPs_inst_39_40_36_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_40_36_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_40_36_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_39_40_36_tsni(fss, gss)
  }
});
lambda$_inst_39_40_36_tsni = function lambda$_inst_39_40_36_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_39_40_36_4_tsni = function x__inst_39_40_36_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_39_40_36_4_5_tsni)
};
lambda_inst_39_40_36_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_39_40_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
x__inst_39_40_37_tsni = function x__inst_39_40_37_tsni() {
  return NofibPrelude.lazy(lambda_inst_39_40_37_5_tsni)
};
lambda_inst_39_40_37_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_39_40_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
lambda_inst_41_42_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_42_40_tsni(fss, gss)
  }
});
lambda$_inst_41_42_40_tsni = function lambda$_inst_41_42_40_tsni(fss, gss) {
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
      tmp5 = x__inst_41_42_40_37_tsni();
      tmp6 = multPs_inst_41_42_40_36_tsni(tmp5, fs_);
      tmp7 = multPs_inst_41_42_40_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_41_42_40_36_tsni = function multPs_inst_41_42_40_36_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_40_36_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_42_40_36_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_42_40_36_tsni(fss, gss)
  }
});
lambda$_inst_41_42_40_36_tsni = function lambda$_inst_41_42_40_36_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_41_42_40_36_4_tsni = function x__inst_41_42_40_36_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_41_42_40_36_4_5_tsni)
};
lambda_inst_41_42_40_36_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_41_42_40_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
x__inst_41_42_40_37_tsni = function x__inst_41_42_40_37_tsni() {
  return NofibPrelude.lazy(lambda_inst_41_42_40_37_5_tsni)
};
lambda_inst_41_42_40_37_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_41_42_40_36_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
multPs_inst_41_42_40_38_tsni = function multPs_inst_41_42_40_38_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_41_42_40_38_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_41_42_40_38_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_41_42_40_38_tsni(fss, gss)
  }
});
lambda$_inst_41_42_40_38_tsni = function lambda$_inst_41_42_40_38_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_41_42_40_38_4_tsni = function x__inst_41_42_40_38_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_41_42_40_38_4_5_tsni)
};
lambda_inst_41_42_40_38_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_41_42_40_38_4_tsni();
      tmp6 = multPs_inst_41_42_40_38_tsni(tmp5, fs_);
      tmp7 = multPs_inst_41_42_40_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_43_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_43_tsni(fss, gss)
  }
});
lambda$_inst_43_tsni = function lambda$_inst_43_tsni(fss, gss) {
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
        tmp3 = compose__inst_43_2_tsni(fs_, tmp2);
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
    throw new globalThis.Error("match error");
  }
};
compose__inst_43_2_tsni = function compose__inst_43_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_43_2_tsni(fss, gss)
  }
});
lambda$_inst_43_2_tsni = function lambda$_inst_43_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_43_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_43_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_43_2_tsni(fs_, gss);
        tmp6 = multPs_inst_43_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_43_2_tsni(fs_, gss);
      tmp10 = multPs_inst_43_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_43_2_7_tsni = function multPs_inst_43_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_43_2_7_tsni(fss, gss)
  }
});
lambda$_inst_43_2_7_tsni = function lambda$_inst_43_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_43_2_7_4_tsni = function x__inst_43_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_43_2_7_4_5_tsni)
};
lambda_inst_43_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_43_2_7_4_tsni();
      tmp6 = multPs_inst_43_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_43_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_43_2_6_tsni = function multPs_inst_43_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_43_2_6_tsni(fss, gss)
  }
});
lambda$_inst_43_2_6_tsni = function lambda$_inst_43_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_43_2_6_4_tsni = function x__inst_43_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_43_2_6_4_5_tsni)
};
lambda_inst_43_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_43_2_6_4_tsni();
      tmp6 = multPs_inst_43_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_43_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_43_2_3_tsni = function multPs_inst_43_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_43_2_3_tsni(fss, gss)
  }
});
lambda$_inst_43_2_3_tsni = function lambda$_inst_43_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_43_2_3_4_tsni = function x__inst_43_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_43_2_3_4_5_tsni)
};
lambda_inst_43_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_43_2_3_4_tsni();
      tmp6 = multPs_inst_43_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_43_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_44_45_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_44_45_32_tsni(fss)
  }
});
lambda$_inst_44_45_32_tsni = function lambda$_inst_44_45_32_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_44_45_32_30_tsni(fs_);
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rs$_inst_44_45_32_30_tsni = function rs$_inst_44_45_32_30_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_44_45_32_30_tsni(fs_)
  }
});
lambda$_inst_44_45_32_30_tsni = function lambda$_inst_44_45_32_30_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_44_45_32_30_23_tsni(1);
  tmp1 = rs$_inst_44_45_32_30_tsni(fs_);
  tmp2 = compose__inst_44_45_32_30_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_44_45_32_30_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_44_45_32_30_22_tsni = function divPs_inst_44_45_32_30_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_44_45_32_30_22_tsni(fss, gss)
  }
});
lambda$_inst_44_45_32_30_22_tsni = function lambda$_inst_44_45_32_30_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_44_45_32_30_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_44_45_32_30_22_tsni(gss)
  }
});
compose__inst_44_45_32_30_28_tsni = function compose__inst_44_45_32_30_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_44_45_32_30_28_tsni(fss, gss)
  }
});
lambda$_inst_44_45_32_30_28_tsni = function lambda$_inst_44_45_32_30_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_44_45_32_30_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_44_45_32_30_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_44_45_32_30_28_tsni(fs_, gss);
        tmp6 = multPs_inst_44_45_32_30_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_44_45_32_30_28_tsni(fs_, gss);
      tmp10 = multPs_inst_44_45_32_30_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_44_45_32_30_28_3_tsni = function multPs_inst_44_45_32_30_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_44_45_32_30_28_3_tsni(fss, gss)
  }
});
lambda$_inst_44_45_32_30_28_3_tsni = function lambda$_inst_44_45_32_30_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_44_45_32_30_28_3_4_tsni = function x__inst_44_45_32_30_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_44_45_32_30_28_3_4_5_tsni)
};
lambda_inst_44_45_32_30_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_44_45_32_30_28_3_4_tsni();
      tmp6 = multPs_inst_44_45_32_30_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_44_45_32_30_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_44_45_32_30_28_6_tsni = function multPs_inst_44_45_32_30_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_44_45_32_30_28_6_tsni(fss, gss)
  }
});
lambda$_inst_44_45_32_30_28_6_tsni = function lambda$_inst_44_45_32_30_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_44_45_32_30_28_6_4_tsni = function x__inst_44_45_32_30_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_44_45_32_30_28_6_4_5_tsni)
};
lambda_inst_44_45_32_30_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_44_45_32_30_28_6_4_tsni();
      tmp6 = multPs_inst_44_45_32_30_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_44_45_32_30_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_44_45_32_30_28_7_tsni = function multPs_inst_44_45_32_30_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_32_30_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_44_45_32_30_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_44_45_32_30_28_7_tsni(fss, gss)
  }
});
lambda$_inst_44_45_32_30_28_7_tsni = function lambda$_inst_44_45_32_30_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_44_45_32_30_28_7_4_tsni = function x__inst_44_45_32_30_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_44_45_32_30_28_7_4_5_tsni)
};
lambda_inst_44_45_32_30_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_44_45_32_30_28_7_4_tsni();
      tmp6 = multPs_inst_44_45_32_30_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_44_45_32_30_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
fromIntegerPs_inst_44_45_32_30_23_tsni = function fromIntegerPs_inst_44_45_32_30_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_44_45_32_30_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_44_45_32_30_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_44_45_32_30_22_tsni(gss)
  }
});
lambda_inst_46_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_46_tsni(fss)
  }
});
lambda$_inst_46_tsni = function lambda$_inst_46_tsni(fss) {
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_46_19_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qs$_inst_46_19_tsni = function qs$_inst_46_19_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_19_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_19_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_46_19_tsni(fs_)
  }
});
lambda$_inst_46_19_tsni = function lambda$_inst_46_19_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_46_19_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_46_19_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_46_19_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_46_19_74_tsni(tmp, tmp6)
};
divPs_inst_46_19_10_tsni = function divPs_inst_46_19_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_19_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_19_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_46_19_10_tsni(fss, gss)
  }
});
lambda$_inst_46_19_10_tsni = function lambda$_inst_46_19_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_46_19_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_46_19_10_11_tsni);
        tmp1 = divPs_inst_46_19_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_46_19_12_tsni = function fromIntegerPs_inst_46_19_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_46_19_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_46_19_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
lambda_inst_47_tsni = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda_inst_47_tsni1);
  tmp2 = composeSndLz__inst_47_1_tsni(tmp, tmp1);
  return power1.Pc(0, tmp2)
});
lambda_inst_47_tsni1 = (undefined, function () {
  return power1.tree()
});
composeSndLz__inst_47_1_tsni = function composeSndLz__inst_47_1_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_1_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_47_1_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_47_1_tsni(fss, gss)
  }
});
lambda$_inst_47_1_tsni = function lambda$_inst_47_1_tsni(fss, gss) {
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
        tmp3 = compose__inst_47_1_2_tsni(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_47_1_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_47_1_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compose__inst_47_1_2_tsni = function compose__inst_47_1_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_1_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_47_1_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_47_1_2_tsni(fss, gss)
  }
});
lambda$_inst_47_1_2_tsni = function lambda$_inst_47_1_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_47_1_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_47_1_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_47_1_2_tsni(fs_, gss);
        tmp6 = multPs_inst_47_1_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_47_1_2_tsni(fs_, gss);
      tmp10 = multPs_inst_47_1_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_47_1_2_3_tsni = function multPs_inst_47_1_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_1_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_47_1_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_47_1_2_3_tsni(fss, gss)
  }
});
lambda$_inst_47_1_2_3_tsni = function lambda$_inst_47_1_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_47_1_2_3_4_tsni = function x__inst_47_1_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_47_1_2_3_4_5_tsni)
};
lambda_inst_47_1_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_47_1_2_3_4_tsni();
      tmp6 = multPs_inst_47_1_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_47_1_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_47_1_2_6_tsni = function multPs_inst_47_1_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_1_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_47_1_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_47_1_2_6_tsni(fss, gss)
  }
});
lambda$_inst_47_1_2_6_tsni = function lambda$_inst_47_1_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_47_1_2_6_4_tsni = function x__inst_47_1_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_47_1_2_6_4_5_tsni)
};
lambda_inst_47_1_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_47_1_2_6_4_tsni();
      tmp6 = multPs_inst_47_1_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_47_1_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_47_1_2_7_tsni = function multPs_inst_47_1_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_47_1_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_47_1_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_47_1_2_7_tsni(fss, gss)
  }
});
lambda$_inst_47_1_2_7_tsni = function lambda$_inst_47_1_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_47_1_2_7_4_tsni = function x__inst_47_1_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_47_1_2_7_4_5_tsni)
};
lambda_inst_47_1_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_47_1_2_7_4_tsni();
      tmp6 = multPs_inst_47_1_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_47_1_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_48_49_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_48_49_50_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_48_75_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_48_49_50_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
lambda_inst_51_52_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_51_52_53_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_51_77_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_51_52_53_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sinx_inst_54_55_tsni = function sinx_inst_54_55_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_54_55_52_tsni);
  tmp1 = power.integralLz(sinx_inst_54_55_tsni);
  tmp2 = minusPs_inst_54_55_77_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
lambda_inst_54_55_52_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_54_55_52_53_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_54_55_77_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_54_55_52_53_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
cosx_inst_54_56_tsni = function cosx_inst_54_56_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_54_56_49_tsni);
  tmp1 = power.integralLz(cosx_inst_54_56_tsni);
  tmp2 = power.integral(tmp1);
  return minusPs_inst_54_56_75_tsni(tmp, tmp2)
};
lambda_inst_54_56_49_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_54_56_49_50_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_54_56_75_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_54_56_49_50_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
powerPs_inst_54_57_tsni = function powerPs_inst_54_57_tsni(a, n) {
  let scrut, tmp, tmp1;
  scrut = n <= 0;
  if (scrut === true) {
    return power.fromIntegerPs(1)
  } else {
    tmp = n - 1;
    tmp1 = powerPs_inst_54_57_tsni(a, tmp);
    return multPs_inst_54_57_58_tsni(a, tmp1)
  }
};
multPs_inst_54_57_58_tsni = function multPs_inst_54_57_58_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_57_58_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_57_58_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_57_58_tsni(fss, gss)
  }
});
lambda$_inst_54_57_58_tsni = function lambda$_inst_54_57_58_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_57_58_4_tsni = function x__inst_54_57_58_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_57_58_4_5_tsni)
};
lambda_inst_54_57_58_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_57_58_4_tsni();
      tmp6 = multPs_inst_54_57_58_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_57_58_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
fromIntegerPs_inst_54_59_tsni = function fromIntegerPs_inst_54_59_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_54_59_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_54_59_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sqrtPs_inst_54_60_tsni = function sqrtPs_inst_54_60_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_60_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_60_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_54_60_tsni(fss)
  }
});
lambda$_inst_54_60_tsni = function lambda$_inst_54_60_tsni(fss) {
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
          tmp = sqrtPs_inst_54_60_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_54_60_19_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qs$_inst_54_60_19_tsni = function qs$_inst_54_60_19_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_60_19_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_60_19_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_54_60_19_tsni(fs_)
  }
});
lambda$_inst_54_60_19_tsni = function lambda$_inst_54_60_19_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_54_60_19_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_54_60_19_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_54_60_19_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_54_60_19_74_tsni(tmp, tmp6)
};
divPs_inst_54_60_19_10_tsni = function divPs_inst_54_60_19_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_60_19_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_60_19_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_60_19_10_tsni(fss, gss)
  }
});
lambda$_inst_54_60_19_10_tsni = function lambda$_inst_54_60_19_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_54_60_19_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_54_60_19_10_11_tsni);
        tmp1 = divPs_inst_54_60_19_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_54_60_19_12_tsni = function fromIntegerPs_inst_54_60_19_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_54_60_19_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_54_60_19_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sinx_inst_54_61_tsni = function sinx_inst_54_61_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_54_61_52_tsni);
  tmp1 = power.integralLz(sinx_inst_54_61_tsni);
  tmp2 = minusPs_inst_54_61_77_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
lambda_inst_54_61_52_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_54_61_52_53_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_54_61_77_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_54_61_52_53_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
cosx_inst_54_62_tsni = function cosx_inst_54_62_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_54_62_49_tsni);
  tmp1 = power.integralLz(cosx_inst_54_62_tsni);
  tmp2 = power.integral(tmp1);
  return minusPs_inst_54_62_75_tsni(tmp, tmp2)
};
lambda_inst_54_62_49_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_54_62_49_50_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_54_62_75_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_54_62_49_50_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
divPs_inst_54_63_tsni = function divPs_inst_54_63_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_63_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_63_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_63_tsni(fss, gss)
  }
});
lambda$_inst_54_63_tsni = function lambda$_inst_54_63_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_54_63_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_54_63_11_tsni);
        tmp1 = divPs_inst_54_63_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
powerPs_inst_54_64_tsni = function powerPs_inst_54_64_tsni(a, n) {
  let scrut, tmp, tmp1;
  scrut = n <= 0;
  if (scrut === true) {
    return power.fromIntegerPs(1)
  } else {
    tmp = n - 1;
    tmp1 = powerPs_inst_54_64_tsni(a, tmp);
    return multPs_inst_54_64_58_tsni(a, tmp1)
  }
};
multPs_inst_54_64_58_tsni = function multPs_inst_54_64_58_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_64_58_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_64_58_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_64_58_tsni(fss, gss)
  }
});
lambda$_inst_54_64_58_tsni = function lambda$_inst_54_64_58_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_64_58_4_tsni = function x__inst_54_64_58_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_64_58_4_5_tsni)
};
lambda_inst_54_64_58_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_54_64_58_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
x__inst_54_65_tsni = function x__inst_54_65_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_65_5_tsni)
};
lambda_inst_54_65_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_54_64_58_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
fromIntegerPs_inst_54_66_tsni = function fromIntegerPs_inst_54_66_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_54_66_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_54_66_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
divPs_inst_54_67_tsni = function divPs_inst_54_67_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_67_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_67_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_67_tsni(fss, gss)
  }
});
lambda$_inst_54_67_tsni = function lambda$_inst_54_67_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_54_67_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_54_67_tsni(gss)
  }
});
fromIntegerPs_inst_54_68_tsni = function fromIntegerPs_inst_54_68_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_54_68_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_54_68_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_54_67_tsni(gss)
  }
});
revert_inst_54_69_tsni = function revert_inst_54_69_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_54_69_45_32_tsni(fss)
  }
});
lambda$_inst_54_69_45_32_tsni = function lambda$_inst_54_69_45_32_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_54_69_45_32_30_tsni(fs_);
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rs$_inst_54_69_45_32_30_tsni = function rs$_inst_54_69_45_32_30_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_54_69_45_32_30_tsni(fs_)
  }
});
lambda$_inst_54_69_45_32_30_tsni = function lambda$_inst_54_69_45_32_30_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_54_69_45_32_30_23_tsni(1);
  tmp1 = rs$_inst_54_69_45_32_30_tsni(fs_);
  tmp2 = compose__inst_54_69_45_32_30_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_54_69_45_32_30_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
compose__inst_54_69_45_32_30_28_tsni = function compose__inst_54_69_45_32_30_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_69_45_32_30_28_tsni(fss, gss)
  }
});
lambda$_inst_54_69_45_32_30_28_tsni = function lambda$_inst_54_69_45_32_30_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_54_69_45_32_30_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_54_69_45_32_30_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_54_69_45_32_30_28_tsni(fs_, gss);
        tmp6 = multPs_inst_54_69_45_32_30_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_54_69_45_32_30_28_tsni(fs_, gss);
      tmp10 = multPs_inst_54_69_45_32_30_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_54_69_45_32_30_28_7_tsni = function multPs_inst_54_69_45_32_30_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_69_45_32_30_28_7_tsni(fss, gss)
  }
});
lambda$_inst_54_69_45_32_30_28_7_tsni = function lambda$_inst_54_69_45_32_30_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_69_45_32_30_28_7_4_tsni = function x__inst_54_69_45_32_30_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_69_45_32_30_28_7_4_5_tsni)
};
lambda_inst_54_69_45_32_30_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_69_45_32_30_28_7_4_tsni();
      tmp6 = multPs_inst_54_69_45_32_30_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_69_45_32_30_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_54_69_45_32_30_28_6_tsni = function multPs_inst_54_69_45_32_30_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_69_45_32_30_28_6_tsni(fss, gss)
  }
});
lambda$_inst_54_69_45_32_30_28_6_tsni = function lambda$_inst_54_69_45_32_30_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_69_45_32_30_28_6_4_tsni = function x__inst_54_69_45_32_30_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_69_45_32_30_28_6_4_5_tsni)
};
lambda_inst_54_69_45_32_30_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_69_45_32_30_28_6_4_tsni();
      tmp6 = multPs_inst_54_69_45_32_30_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_69_45_32_30_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_54_69_45_32_30_28_3_tsni = function multPs_inst_54_69_45_32_30_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_69_45_32_30_28_3_tsni(fss, gss)
  }
});
lambda$_inst_54_69_45_32_30_28_3_tsni = function lambda$_inst_54_69_45_32_30_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_69_45_32_30_28_3_4_tsni = function x__inst_54_69_45_32_30_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_69_45_32_30_28_3_4_5_tsni)
};
lambda_inst_54_69_45_32_30_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_69_45_32_30_28_3_4_tsni();
      tmp6 = multPs_inst_54_69_45_32_30_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_69_45_32_30_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
divPs_inst_54_69_45_32_30_22_tsni = function divPs_inst_54_69_45_32_30_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_69_45_32_30_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_69_45_32_30_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_69_45_32_30_22_tsni(fss, gss)
  }
});
lambda$_inst_54_69_45_32_30_22_tsni = function lambda$_inst_54_69_45_32_30_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_54_69_45_32_30_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_54_69_45_32_30_22_tsni(gss)
  }
});
fromIntegerPs_inst_54_69_45_32_30_23_tsni = function fromIntegerPs_inst_54_69_45_32_30_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_54_69_45_32_30_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_54_69_45_32_30_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_54_69_45_32_30_22_tsni(gss)
  }
});
tree_inst_54_70_tsni = function tree_inst_54_70_tsni() {
  let tmp;
  tmp = lambda_inst_54_70_tsni;
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_tsni = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda_inst_54_70_tsni1);
  tmp2 = composeSndLz__inst_54_70_1_tsni(tmp, tmp1);
  return power1.Pc(0, tmp2)
});
lambda_inst_54_70_tsni1 = (undefined, function () {
  return tree_inst_54_70_tsni()
});
composeSndLz__inst_54_70_1_tsni = function composeSndLz__inst_54_70_1_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_tsni = function lambda$_inst_54_70_1_tsni(fss, gss) {
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
        tmp3 = compose__inst_54_70_1_2_tsni(fs_, tmp2);
        tmp4 = multPs_inst_54_70_1_71_tsni(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_54_70_1_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_54_70_1_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compose__inst_54_70_1_2_tsni = function compose__inst_54_70_1_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_2_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_2_tsni = function lambda$_inst_54_70_1_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_54_70_1_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_54_70_1_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_54_70_1_2_tsni(fs_, gss);
        tmp6 = multPs_inst_54_70_1_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_54_70_1_2_tsni(fs_, gss);
      tmp10 = multPs_inst_54_70_1_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_54_70_1_2_7_tsni = function multPs_inst_54_70_1_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_2_7_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_2_7_tsni = function lambda$_inst_54_70_1_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_70_1_2_7_4_tsni = function x__inst_54_70_1_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_70_1_2_7_4_5_tsni)
};
lambda_inst_54_70_1_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_70_1_2_7_4_tsni();
      tmp6 = multPs_inst_54_70_1_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_70_1_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_54_70_1_2_6_tsni = function multPs_inst_54_70_1_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_2_6_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_2_6_tsni = function lambda$_inst_54_70_1_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_70_1_2_6_4_tsni = function x__inst_54_70_1_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_70_1_2_6_4_5_tsni)
};
lambda_inst_54_70_1_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_70_1_2_6_4_tsni();
      tmp6 = multPs_inst_54_70_1_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_70_1_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_54_70_1_2_3_tsni = function multPs_inst_54_70_1_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_2_3_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_2_3_tsni = function lambda$_inst_54_70_1_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_70_1_2_3_4_tsni = function x__inst_54_70_1_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_70_1_2_3_4_5_tsni)
};
lambda_inst_54_70_1_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_70_1_2_3_4_tsni();
      tmp6 = multPs_inst_54_70_1_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_70_1_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_54_70_1_71_tsni = function multPs_inst_54_70_1_71_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_70_1_71_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_70_1_71_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_54_70_1_71_tsni(fss, gss)
  }
});
lambda$_inst_54_70_1_71_tsni = function lambda$_inst_54_70_1_71_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_54_70_1_71_4_tsni = function x__inst_54_70_1_71_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_54_70_1_71_4_5_tsni)
};
lambda_inst_54_70_1_71_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_54_70_1_71_4_tsni();
      tmp6 = multPs_inst_54_70_1_71_tsni(tmp5, fs_);
      tmp7 = multPs_inst_54_70_1_71_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
testPower_nofib_inst_72_73_tsni = function testPower_nofib_inst_72_73_tsni(p) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
  tmp = sinx_inst_72_73_55_tsni();
  tmp1 = fromIntegerPs_inst_72_73_59_tsni(1);
  tmp2 = cosx_inst_72_73_56_tsni();
  tmp3 = powerPs_inst_72_73_57_tsni(tmp2, 2);
  tmp4 = minusPs_inst_72_73_78_tsni(tmp1, tmp3);
  tmp5 = sqrtPs_inst_72_73_60_tsni(tmp4);
  tmp6 = power.minusPs(tmp, tmp5);
  tmp7 = power.extract(p, tmp6);
  tmp8 = sinx_inst_72_73_61_tsni();
  tmp9 = cosx_inst_72_73_62_tsni();
  tmp10 = divPs_inst_72_73_63_tsni(tmp8, tmp9);
  tmp11 = fromIntegerPs_inst_72_73_68_tsni(1);
  tmp12 = fromIntegerPs_inst_72_73_66_tsni(1);
  tmp13 = x__inst_72_73_65_tsni();
  tmp14 = powerPs_inst_72_73_64_tsni(tmp13, 2);
  tmp15 = addPs_inst_72_73_79_tsni(tmp12, tmp14);
  tmp16 = divPs_inst_72_73_67_tsni(tmp11, tmp15);
  tmp17 = power.integral(tmp16);
  tmp18 = revert_inst_72_73_69_tsni(tmp17);
  tmp19 = power.minusPs(tmp10, tmp18);
  tmp20 = power.extract(p, tmp19);
  tmp21 = (tmp7 , tmp20);
  tmp22 = power.ts();
  tmp23 = power.extract(p, tmp22);
  tmp24 = (tmp21 , tmp23);
  tmp25 = tree_inst_72_73_70_tsni();
  tmp26 = power.extract(p, tmp25);
  return (tmp24 , tmp26)
};
tree_inst_72_73_70_tsni = function tree_inst_72_73_70_tsni() {
  let tmp;
  tmp = lambda_inst_72_73_70_tsni;
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_tsni = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda_inst_72_73_70_tsni1);
  tmp2 = composeSndLz__inst_72_73_70_1_tsni(tmp, tmp1);
  return power1.Pc(0, tmp2)
});
lambda_inst_72_73_70_tsni1 = (undefined, function () {
  return tree_inst_72_73_70_tsni()
});
composeSndLz__inst_72_73_70_1_tsni = function composeSndLz__inst_72_73_70_1_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_tsni = function lambda$_inst_72_73_70_1_tsni(fss, gss) {
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
        tmp3 = compose__inst_72_73_70_1_2_tsni(fs_, tmp2);
        tmp4 = multPs_inst_72_73_70_1_71_tsni(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_72_73_70_1_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_72_73_70_1_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_72_73_70_1_71_tsni = function multPs_inst_72_73_70_1_71_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_71_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_71_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_71_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_71_tsni = function lambda$_inst_72_73_70_1_71_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_70_1_71_4_tsni = function x__inst_72_73_70_1_71_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_70_1_71_4_5_tsni)
};
lambda_inst_72_73_70_1_71_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_70_1_71_4_tsni();
      tmp6 = multPs_inst_72_73_70_1_71_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_70_1_71_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
compose__inst_72_73_70_1_2_tsni = function compose__inst_72_73_70_1_2_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_2_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_2_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_2_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_2_tsni = function lambda$_inst_72_73_70_1_2_tsni(fss, gss) {
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
        tmp2 = compose__inst_72_73_70_1_2_tsni(fs_, tmp1);
        tmp3 = multPs_inst_72_73_70_1_2_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_72_73_70_1_2_tsni(fs_, gss);
        tmp6 = multPs_inst_72_73_70_1_2_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_72_73_70_1_2_tsni(fs_, gss);
      tmp10 = multPs_inst_72_73_70_1_2_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_72_73_70_1_2_3_tsni = function multPs_inst_72_73_70_1_2_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_2_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_2_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_2_3_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_2_3_tsni = function lambda$_inst_72_73_70_1_2_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_70_1_2_3_4_tsni = function x__inst_72_73_70_1_2_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_70_1_2_3_4_5_tsni)
};
lambda_inst_72_73_70_1_2_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_70_1_2_3_4_tsni();
      tmp6 = multPs_inst_72_73_70_1_2_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_70_1_2_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_72_73_70_1_2_6_tsni = function multPs_inst_72_73_70_1_2_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_2_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_2_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_2_6_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_2_6_tsni = function lambda$_inst_72_73_70_1_2_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_70_1_2_6_4_tsni = function x__inst_72_73_70_1_2_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_70_1_2_6_4_5_tsni)
};
lambda_inst_72_73_70_1_2_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_70_1_2_6_4_tsni();
      tmp6 = multPs_inst_72_73_70_1_2_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_70_1_2_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_72_73_70_1_2_7_tsni = function multPs_inst_72_73_70_1_2_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_70_1_2_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_70_1_2_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_70_1_2_7_tsni(fss, gss)
  }
});
lambda$_inst_72_73_70_1_2_7_tsni = function lambda$_inst_72_73_70_1_2_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_70_1_2_7_4_tsni = function x__inst_72_73_70_1_2_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_70_1_2_7_4_5_tsni)
};
lambda_inst_72_73_70_1_2_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_70_1_2_7_4_tsni();
      tmp6 = multPs_inst_72_73_70_1_2_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_70_1_2_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
revert_inst_72_73_69_tsni = function revert_inst_72_73_69_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_tsni(fss)
  }
});
lambda$_inst_72_73_69_45_32_tsni = function lambda$_inst_72_73_69_45_32_tsni(fss) {
  let scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss, scrut2, fs_, tmp, tmp1, tmp2, tmp3, lambda$this;
  scrut = NofibPrelude.force(fss);
  if (scrut instanceof power1.Pc.class) {
    param0 = scrut.f;
    param1 = scrut.s;
    if (param0 === 0) {
      fs_ = param1;
      tmp = rs$_inst_72_73_69_45_32_30_tsni(fs_);
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rs$_inst_72_73_69_45_32_30_tsni = function rs$_inst_72_73_69_45_32_30_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_tsni(fs_)
  }
});
lambda$_inst_72_73_69_45_32_30_tsni = function lambda$_inst_72_73_69_45_32_30_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_72_73_69_45_32_30_23_tsni(1);
  tmp1 = rs$_inst_72_73_69_45_32_30_tsni(fs_);
  tmp2 = compose__inst_72_73_69_45_32_30_28_tsni(fs_, tmp1);
  tmp3 = divPs_inst_72_73_69_45_32_30_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
divPs_inst_72_73_69_45_32_30_22_tsni = function divPs_inst_72_73_69_45_32_30_22_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_22_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_22_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_22_tsni(fss, gss)
  }
});
lambda$_inst_72_73_69_45_32_30_22_tsni = function lambda$_inst_72_73_69_45_32_30_22_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_72_73_69_45_32_30_22_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_72_73_69_45_32_30_22_tsni(gss)
  }
});
compose__inst_72_73_69_45_32_30_28_tsni = function compose__inst_72_73_69_45_32_30_28_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_28_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_28_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_28_tsni(fss, gss)
  }
});
lambda$_inst_72_73_69_45_32_30_28_tsni = function lambda$_inst_72_73_69_45_32_30_28_tsni(fss, gss) {
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
        tmp2 = compose__inst_72_73_69_45_32_30_28_tsni(fs_, tmp1);
        tmp3 = multPs_inst_72_73_69_45_32_30_28_3_tsni(gs, tmp2);
        return power1.Pc(f, tmp3)
      } else {
        lambda$this1 = runtime.safeCall(lambda21(f));
        tmp4 = NofibPrelude.lazy(lambda$this1);
        tmp5 = compose__inst_72_73_69_45_32_30_28_tsni(fs_, gss);
        tmp6 = multPs_inst_72_73_69_45_32_30_28_6_tsni(gss, tmp5);
        tmp7 = power1.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda23(f));
      tmp8 = NofibPrelude.lazy(lambda$this2);
      tmp9 = compose__inst_72_73_69_45_32_30_28_tsni(fs_, gss);
      tmp10 = multPs_inst_72_73_69_45_32_30_28_7_tsni(gss, tmp9);
      tmp11 = power1.addPs(tmp8, tmp10);
      return NofibPrelude.force(tmp11)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multPs_inst_72_73_69_45_32_30_28_3_tsni = function multPs_inst_72_73_69_45_32_30_28_3_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_28_3_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_28_3_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_28_3_tsni(fss, gss)
  }
});
lambda$_inst_72_73_69_45_32_30_28_3_tsni = function lambda$_inst_72_73_69_45_32_30_28_3_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_69_45_32_30_28_3_4_tsni = function x__inst_72_73_69_45_32_30_28_3_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_69_45_32_30_28_3_4_5_tsni)
};
lambda_inst_72_73_69_45_32_30_28_3_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_69_45_32_30_28_3_4_tsni();
      tmp6 = multPs_inst_72_73_69_45_32_30_28_3_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_69_45_32_30_28_3_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_72_73_69_45_32_30_28_6_tsni = function multPs_inst_72_73_69_45_32_30_28_6_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_28_6_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_28_6_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_28_6_tsni(fss, gss)
  }
});
lambda$_inst_72_73_69_45_32_30_28_6_tsni = function lambda$_inst_72_73_69_45_32_30_28_6_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_69_45_32_30_28_6_4_tsni = function x__inst_72_73_69_45_32_30_28_6_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_69_45_32_30_28_6_4_5_tsni)
};
lambda_inst_72_73_69_45_32_30_28_6_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_69_45_32_30_28_6_4_tsni();
      tmp6 = multPs_inst_72_73_69_45_32_30_28_6_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_69_45_32_30_28_6_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
multPs_inst_72_73_69_45_32_30_28_7_tsni = function multPs_inst_72_73_69_45_32_30_28_7_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_69_45_32_30_28_7_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_69_45_32_30_28_7_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_69_45_32_30_28_7_tsni(fss, gss)
  }
});
lambda$_inst_72_73_69_45_32_30_28_7_tsni = function lambda$_inst_72_73_69_45_32_30_28_7_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_69_45_32_30_28_7_4_tsni = function x__inst_72_73_69_45_32_30_28_7_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_69_45_32_30_28_7_4_5_tsni)
};
lambda_inst_72_73_69_45_32_30_28_7_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_69_45_32_30_28_7_4_tsni();
      tmp6 = multPs_inst_72_73_69_45_32_30_28_7_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_69_45_32_30_28_7_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
fromIntegerPs_inst_72_73_69_45_32_30_23_tsni = function fromIntegerPs_inst_72_73_69_45_32_30_23_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_69_45_32_30_23_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_72_73_69_45_32_30_23_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_72_73_69_45_32_30_22_tsni(gss)
  }
});
divPs_inst_72_73_67_tsni = function divPs_inst_72_73_67_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_67_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_67_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_67_tsni(fss, gss)
  }
});
lambda$_inst_72_73_67_tsni = function lambda$_inst_72_73_67_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_72_73_67_11_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_72_73_67_tsni(gss)
  }
});
powerPs_inst_72_73_64_tsni = function powerPs_inst_72_73_64_tsni(a, n) {
  let scrut, tmp, tmp1;
  scrut = n <= 0;
  if (scrut === true) {
    return power.fromIntegerPs(1)
  } else {
    tmp = n - 1;
    tmp1 = powerPs_inst_72_73_64_tsni(a, tmp);
    return multPs_inst_72_73_64_58_tsni(a, tmp1)
  }
};
multPs_inst_72_73_64_58_tsni = function multPs_inst_72_73_64_58_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_64_58_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_64_58_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_64_58_tsni(fss, gss)
  }
});
lambda$_inst_72_73_64_58_tsni = function lambda$_inst_72_73_64_58_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_64_58_4_tsni = function x__inst_72_73_64_58_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_64_58_4_5_tsni)
};
lambda_inst_72_73_64_58_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_72_73_64_58_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
x__inst_72_73_65_tsni = function x__inst_72_73_65_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_65_5_tsni)
};
lambda_inst_72_73_65_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    return match_scrut_arm_Pc_inst_72_73_64_58_tsni(gss, _deforest_Pc_f, _deforest_Pc_s)
  }
});
fromIntegerPs_inst_72_73_66_tsni = function fromIntegerPs_inst_72_73_66_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_66_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_72_73_66_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
fromIntegerPs_inst_72_73_68_tsni = function fromIntegerPs_inst_72_73_68_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_68_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_72_73_68_13_tsni = (undefined, function () {
  return (gss) => {
    return match_scrut_arm_Pz_inst_72_73_67_tsni(gss)
  }
});
divPs_inst_72_73_63_tsni = function divPs_inst_72_73_63_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_63_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_63_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_63_tsni(fss, gss)
  }
});
lambda$_inst_72_73_63_tsni = function lambda$_inst_72_73_63_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_72_73_63_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_72_73_63_11_tsni);
        tmp1 = divPs_inst_72_73_63_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
cosx_inst_72_73_62_tsni = function cosx_inst_72_73_62_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_62_49_tsni);
  tmp1 = power.integralLz(cosx_inst_72_73_62_tsni);
  tmp2 = power.integral(tmp1);
  return minusPs_inst_72_73_62_75_tsni(tmp, tmp2)
};
lambda_inst_72_73_62_49_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_62_49_50_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_72_73_62_75_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_72_73_62_49_50_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sinx_inst_72_73_61_tsni = function sinx_inst_72_73_61_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_61_52_tsni);
  tmp1 = power.integralLz(sinx_inst_72_73_61_tsni);
  tmp2 = minusPs_inst_72_73_61_77_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
lambda_inst_72_73_61_52_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_61_52_53_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_72_73_61_77_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_72_73_61_52_53_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sqrtPs_inst_72_73_60_tsni = function sqrtPs_inst_72_73_60_tsni(fss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_60_tsni(fss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_60_tsni = (undefined, function (fss) {
  return () => {
    return lambda$_inst_72_73_60_tsni(fss)
  }
});
lambda$_inst_72_73_60_tsni = function lambda$_inst_72_73_60_tsni(fss) {
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
          tmp = sqrtPs_inst_72_73_60_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_72_73_60_19_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qs$_inst_72_73_60_19_tsni = function qs$_inst_72_73_60_19_tsni(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_60_19_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_60_19_tsni = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_72_73_60_19_tsni(fs_)
  }
});
lambda$_inst_72_73_60_19_tsni = function lambda$_inst_72_73_60_19_tsni(fs_) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = fromIntegerPs_inst_72_73_60_19_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_72_73_60_19_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_72_73_60_19_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_72_73_60_19_74_tsni(tmp, tmp6)
};
divPs_inst_72_73_60_19_10_tsni = function divPs_inst_72_73_60_19_10_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_60_19_10_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_60_19_10_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_60_19_10_tsni(fss, gss)
  }
});
lambda$_inst_72_73_60_19_10_tsni = function lambda$_inst_72_73_60_19_10_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
lambda_inst_72_73_60_19_10_11_tsni = (undefined, function () {
  return (gss) => {
    let scrut, param0, param1, gs, tmp, tmp1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      throw globalThis.Error("power series 0/0");
    } else if (scrut instanceof power1.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gs = param1;
        tmp = NofibPrelude.lazy(lambda_inst_72_73_60_19_10_11_tsni);
        tmp1 = divPs_inst_72_73_60_19_10_tsni(tmp, gs);
        return NofibPrelude.force(tmp1)
      } else {
        return power1.Pz
      }
    } else {
      return power1.Pz
    }
  }
});
fromIntegerPs_inst_72_73_60_19_12_tsni = function fromIntegerPs_inst_72_73_60_19_12_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_60_19_12_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_72_73_60_19_12_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
powerPs_inst_72_73_57_tsni = function powerPs_inst_72_73_57_tsni(a, n) {
  let scrut, tmp, tmp1;
  scrut = n <= 0;
  if (scrut === true) {
    return power.fromIntegerPs(1)
  } else {
    tmp = n - 1;
    tmp1 = powerPs_inst_72_73_57_tsni(a, tmp);
    return multPs_inst_72_73_57_58_tsni(a, tmp1)
  }
};
multPs_inst_72_73_57_58_tsni = function multPs_inst_72_73_57_58_tsni(fss, gss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_57_58_tsni(fss, gss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_57_58_tsni = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_72_73_57_58_tsni(fss, gss)
  }
});
lambda$_inst_72_73_57_58_tsni = function lambda$_inst_72_73_57_58_tsni(fss, gss) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(gss))
};
x__inst_72_73_57_58_4_tsni = function x__inst_72_73_57_58_4_tsni() {
  return NofibPrelude.lazy(lambda_inst_72_73_57_58_4_5_tsni)
};
lambda_inst_72_73_57_58_4_5_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda2);
  _deforest_Pc_f = 0;
  _deforest_Pc_s = tmp;
  return (gss) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gss);
    if (scrut instanceof power1.Pz.class) {
      return power1.Pz
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs = param11;
      tmp1 = f * g;
      tmp2 = power1.dotMult(f, gs);
      tmp3 = power1.dotMult(g, fs_);
      tmp4 = power1.addPs(tmp2, tmp3);
      tmp5 = x__inst_72_73_57_58_4_tsni();
      tmp6 = multPs_inst_72_73_57_58_tsni(tmp5, fs_);
      tmp7 = multPs_inst_72_73_57_58_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
cosx_inst_72_73_56_tsni = function cosx_inst_72_73_56_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_56_49_tsni);
  tmp1 = power.integralLz(cosx_inst_72_73_56_tsni);
  tmp2 = power.integral(tmp1);
  return minusPs_inst_72_73_56_75_tsni(tmp, tmp2)
};
lambda_inst_72_73_56_49_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_56_49_50_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_72_73_56_75_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_72_73_56_49_50_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
fromIntegerPs_inst_72_73_59_tsni = function fromIntegerPs_inst_72_73_59_tsni(c) {
  let scrut, lambda$this;
  scrut = c == 0;
  if (scrut === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_59_13_tsni)
  } else {
    lambda$this = runtime.safeCall(lambda5(c));
    return NofibPrelude.lazy(lambda$this)
  }
};
lambda_inst_72_73_59_13_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
sinx_inst_72_73_55_tsni = function sinx_inst_72_73_55_tsni() {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_55_52_tsni);
  tmp1 = power.integralLz(sinx_inst_72_73_55_tsni);
  tmp2 = minusPs_inst_72_73_55_77_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
lambda_inst_72_73_55_52_tsni = (undefined, function () {
  let tmp, _deforest_Pc_f, _deforest_Pc_s;
  tmp = NofibPrelude.lazy(lambda_inst_72_73_55_52_53_tsni);
  _deforest_Pc_f = 1;
  _deforest_Pc_s = tmp;
  return (fss, gs) => {
    let param0, param1, f, fs_, scrut, param01, param11, g, gs1, tmp1, tmp2;
    param0 = _deforest_Pc_f;
    param1 = _deforest_Pc_s;
    f = param0;
    fs_ = param1;
    scrut = NofibPrelude.force(gs);
    if (scrut instanceof power1.Pz.class) {
      return NofibPrelude.force(fss)
    } else if (scrut instanceof power1.Pc.class) {
      param01 = scrut.f;
      param11 = scrut.s;
      g = param01;
      gs1 = param11;
      tmp1 = f + g;
      tmp2 = addPs_inst_72_73_55_77_76_tsni(fs_, gs1);
      return power1.Pc(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  }
});
lambda_inst_72_73_55_52_53_tsni = (undefined, function () {
  return (fss, gs) => {
    return NofibPrelude.force(gs)
  }
});
addPs_inst_9_74_tsni = function addPs_inst_9_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_9_74_tsni(fss, gs)
  }
});
lambda$_inst_9_74_tsni = function lambda$_inst_9_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_14_74_tsni = function addPs_inst_14_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_14_74_tsni(fss, gs)
  }
});
lambda$_inst_14_74_tsni = function lambda$_inst_14_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_15_74_tsni = function addPs_inst_15_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_15_74_tsni(fss, gs)
  }
});
lambda$_inst_15_74_tsni = function lambda$_inst_15_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_16_17_74_tsni = function addPs_inst_16_17_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_17_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_17_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_16_17_74_tsni(fss, gs)
  }
});
lambda$_inst_16_17_74_tsni = function lambda$_inst_16_17_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_18_19_74_tsni = function addPs_inst_18_19_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_18_19_74_tsni(fss, gs)
  }
});
lambda$_inst_18_19_74_tsni = function lambda$_inst_18_19_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_20_19_74_tsni = function addPs_inst_20_19_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_19_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_19_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_20_19_74_tsni(fss, gs)
  }
});
lambda$_inst_20_19_74_tsni = function lambda$_inst_20_19_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_46_19_74_tsni = function addPs_inst_46_19_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_19_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_19_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_46_19_74_tsni(fss, gs)
  }
});
lambda$_inst_46_19_74_tsni = function lambda$_inst_46_19_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_48_75_tsni = function minusPs_inst_48_75_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_48_75_76_tsni(a, tmp)
};
addPs_inst_48_75_76_tsni = function addPs_inst_48_75_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_75_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_75_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_48_75_76_tsni(fss, gs)
  }
});
lambda$_inst_48_75_76_tsni = function lambda$_inst_48_75_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_51_77_tsni = function minusPs_inst_51_77_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_51_77_76_tsni(a, tmp)
};
addPs_inst_51_77_76_tsni = function addPs_inst_51_77_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_51_77_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_51_77_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_51_77_76_tsni(fss, gs)
  }
});
lambda$_inst_51_77_76_tsni = function lambda$_inst_51_77_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_54_55_77_tsni = function minusPs_inst_54_55_77_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_54_55_77_76_tsni(a, tmp)
};
addPs_inst_54_55_77_76_tsni = function addPs_inst_54_55_77_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_55_77_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_55_77_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_55_77_76_tsni(fss, gs)
  }
});
lambda$_inst_54_55_77_76_tsni = function lambda$_inst_54_55_77_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_54_56_75_tsni = function minusPs_inst_54_56_75_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_54_56_75_76_tsni(a, tmp)
};
addPs_inst_54_56_75_76_tsni = function addPs_inst_54_56_75_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_56_75_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_56_75_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_56_75_76_tsni(fss, gs)
  }
});
lambda$_inst_54_56_75_76_tsni = function lambda$_inst_54_56_75_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_54_78_tsni = function minusPs_inst_54_78_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_54_78_76_tsni(a, tmp)
};
addPs_inst_54_78_76_tsni = function addPs_inst_54_78_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_78_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_78_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_78_76_tsni(fss, gs)
  }
});
lambda$_inst_54_78_76_tsni = function lambda$_inst_54_78_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_54_60_19_74_tsni = function addPs_inst_54_60_19_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_60_19_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_60_19_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_60_19_74_tsni(fss, gs)
  }
});
lambda$_inst_54_60_19_74_tsni = function lambda$_inst_54_60_19_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_54_61_77_tsni = function minusPs_inst_54_61_77_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_54_61_77_76_tsni(a, tmp)
};
addPs_inst_54_61_77_76_tsni = function addPs_inst_54_61_77_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_61_77_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_61_77_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_61_77_76_tsni(fss, gs)
  }
});
lambda$_inst_54_61_77_76_tsni = function lambda$_inst_54_61_77_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_54_62_75_tsni = function minusPs_inst_54_62_75_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_54_62_75_76_tsni(a, tmp)
};
addPs_inst_54_62_75_76_tsni = function addPs_inst_54_62_75_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_62_75_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_62_75_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_62_75_76_tsni(fss, gs)
  }
});
lambda$_inst_54_62_75_76_tsni = function lambda$_inst_54_62_75_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_54_79_tsni = function addPs_inst_54_79_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_54_79_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_54_79_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_54_79_tsni(fss, gs)
  }
});
lambda$_inst_54_79_tsni = function lambda$_inst_54_79_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_72_73_79_tsni = function addPs_inst_72_73_79_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_79_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_79_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_79_tsni(fss, gs)
  }
});
lambda$_inst_72_73_79_tsni = function lambda$_inst_72_73_79_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_72_73_62_75_tsni = function minusPs_inst_72_73_62_75_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_72_73_62_75_76_tsni(a, tmp)
};
addPs_inst_72_73_62_75_76_tsni = function addPs_inst_72_73_62_75_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_62_75_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_62_75_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_62_75_76_tsni(fss, gs)
  }
});
lambda$_inst_72_73_62_75_76_tsni = function lambda$_inst_72_73_62_75_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_72_73_61_77_tsni = function minusPs_inst_72_73_61_77_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_72_73_61_77_76_tsni(a, tmp)
};
addPs_inst_72_73_61_77_76_tsni = function addPs_inst_72_73_61_77_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_61_77_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_61_77_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_61_77_76_tsni(fss, gs)
  }
});
lambda$_inst_72_73_61_77_76_tsni = function lambda$_inst_72_73_61_77_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
addPs_inst_72_73_60_19_74_tsni = function addPs_inst_72_73_60_19_74_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_60_19_74_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_60_19_74_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_60_19_74_tsni(fss, gs)
  }
});
lambda$_inst_72_73_60_19_74_tsni = function lambda$_inst_72_73_60_19_74_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_72_73_56_75_tsni = function minusPs_inst_72_73_56_75_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_72_73_56_75_76_tsni(a, tmp)
};
addPs_inst_72_73_56_75_76_tsni = function addPs_inst_72_73_56_75_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_56_75_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_56_75_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_56_75_76_tsni(fss, gs)
  }
});
lambda$_inst_72_73_56_75_76_tsni = function lambda$_inst_72_73_56_75_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_72_73_78_tsni = function minusPs_inst_72_73_78_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_72_73_78_76_tsni(a, tmp)
};
addPs_inst_72_73_78_76_tsni = function addPs_inst_72_73_78_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_78_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_78_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_78_76_tsni(fss, gs)
  }
});
lambda$_inst_72_73_78_76_tsni = function lambda$_inst_72_73_78_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
};
minusPs_inst_72_73_55_77_tsni = function minusPs_inst_72_73_55_77_tsni(a, b) {
  let tmp;
  tmp = power.negatePs(b);
  return addPs_inst_72_73_55_77_76_tsni(a, tmp)
};
addPs_inst_72_73_55_77_76_tsni = function addPs_inst_72_73_55_77_76_tsni(fss, gs) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_72_73_55_77_76_tsni(fss, gs));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_72_73_55_77_76_tsni = (undefined, function (fss, gs) {
  return () => {
    return lambda$_inst_72_73_55_77_76_tsni(fss, gs)
  }
});
lambda$_inst_72_73_55_77_76_tsni = function lambda$_inst_72_73_55_77_76_tsni(fss, gs) {
  let scrut;
  scrut = NofibPrelude.force(fss);
  return runtime.safeCall(scrut(fss, gs))
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
  return tree_inst_0_tsni()
});
lambda46 = (undefined, function () {
  let tmp, tmp1, tmp2;
  tmp = power1.list();
  tmp1 = NofibPrelude.lazy(lambda_inst_8_tsni);
  tmp2 = composeSndLz__inst_8_1_tsni(tmp, tmp1);
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
  tmp = fromIntegerPs_inst_9_12_tsni(1);
  lambda$this = runtime.safeCall(lambda44(fs_));
  tmp1 = NofibPrelude.lazy(lambda$this);
  tmp2 = power1.deriv(tmp1);
  tmp3 = qs$_inst_9_tsni(fs_);
  tmp4 = power1.dotMultSndLz(2, tmp3);
  tmp5 = divPs_inst_9_10_tsni(tmp2, tmp4);
  tmp6 = power1.integral(tmp5);
  return addPs_inst_9_74_tsni(tmp, tmp6)
};
lambda43 = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_14_tsni(fs_)
  }
});
qs$ = function qs$(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
qs = function qs(fs_) {
  return () => {
    return qs$_inst_16_17_tsni(fs_)
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
          tmp = sqrtPs_inst_18_tsni(fs_1);
          return power1.Pc(0, tmp)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (param0 === 1) {
      fs_ = param1;
      tmp1 = qs$_inst_18_19_tsni(fs_);
      tmp2 = NofibPrelude.force(tmp1);
      return NofibPrelude.force(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda42 = (undefined, function (fss) {
  return () => {
    return lambda$_inst_20_tsni(fss)
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
  }
};
lambda36 = (undefined, function (fss) {
  return () => {
    return lambda$22(fss)
  }
});
lambda$21 = function lambda$(fs_) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = fromIntegerPs_inst_21_23_tsni(1);
  tmp1 = rs$_inst_21_tsni(fs_);
  tmp2 = power1.compose_(fs_, tmp1);
  tmp3 = divPs_inst_21_22_tsni(tmp, tmp2);
  return power1.Pc(0, tmp3)
};
lambda33 = (undefined, function (fs_) {
  return () => {
    return lambda$_inst_24_tsni(fs_)
  }
});
rs$ = function rs$(fs_) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_25_tsni(fs_));
  return NofibPrelude.lazy(tmp)
};
rs = function rs(fs_) {
  return () => {
    return rs$_inst_26_27_tsni(fs_)
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
      tmp = rs$_inst_29_30_tsni(fs_);
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
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda32 = (undefined, function (fss) {
  return () => {
    return lambda$_inst_31_32_tsni(fss)
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
        tmp3 = compose__inst_33_2_tsni(fs_, tmp2);
        tmp4 = power1.multPs(gs, tmp3);
        return power1.Pc(f, tmp4)
      } else {
        lambda$this1 = runtime.safeCall(lambda28(f));
        tmp5 = NofibPrelude.lazy(lambda$this1);
        tmp6 = composeSndLz__inst_33_tsni(fs_, gss);
        tmp7 = power1.multPs(gss, tmp6);
        tmp8 = power1.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
    } else {
      lambda$this2 = runtime.safeCall(lambda30(f));
      tmp9 = NofibPrelude.lazy(lambda$this2);
      tmp10 = composeSndLz__inst_33_tsni(fs_, gss);
      tmp11 = power1.multPs(gss, tmp10);
      tmp12 = power1.addPs(tmp9, tmp11);
      return NofibPrelude.force(tmp12)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda25 = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_34_tsni(fss, gss)
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
    throw new globalThis.Error("match error");
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
      throw globalThis.Error("power series 0/0");
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
          tmp3 = power1.dotMult(q1, gs1);
          tmp4 = power1.negatePs(tmp3);
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
          tmp9 = power1.dotMult(q, gs);
          tmp10 = power1.negatePs(tmp9);
          tmp11 = power1.addPs(fs_, tmp10);
          lambda$this1 = runtime.safeCall(lambda16(g, gs));
          tmp12 = NofibPrelude.lazy(lambda$this1);
          tmp13 = power1.divPs(tmp11, tmp12);
          return power1.Pc(q, tmp13)
        } else {
          throw new globalThis.Error("match error");
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
        tmp15 = power1.dotMult(q, gs);
        tmp16 = power1.negatePs(tmp15);
        tmp17 = power1.addPs(fs_, tmp16);
        lambda$this2 = runtime.safeCall(lambda17(g, gs));
        tmp18 = NofibPrelude.lazy(lambda$this2);
        tmp19 = power1.divPs(tmp17, tmp18);
        return power1.Pc(q, tmp19)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda13 = (undefined, function (fss, gss) {
  return () => {
    return lambda$7(fss, gss)
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
      tmp5 = x__inst_35_37_tsni();
      tmp6 = multPs_inst_35_36_tsni(tmp5, fs_);
      tmp7 = multPs_inst_35_38_tsni(tmp6, gs);
      tmp8 = power1.addPs(tmp4, tmp7);
      return power1.Pc(tmp1, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda12 = (undefined, function (fss, gss) {
  return () => {
    return lambda$_inst_39_40_tsni(fss, gss)
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
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
      toString() { return "Pss"; }
    };
    this.Pc = function Pc(f1, s1) {
      return new Pc.class(f1, s1);
    };
    this.Pc.class = class Pc extends power.Pss {
      constructor(f, s) {
        super();
        this.f = f;
        this.s = s;
      }
      toString() { return "Pc(" + runtime.render(this.f) + ", " + runtime.render(this.s) + ")"; }
    };
    const Pz$class = class Pz extends power.Pss {
      constructor() {
        super();
      }
      toString() { return "Pz"; }
    };
    this.Pz = new Pz$class;
    this.Pz.class = Pz$class;
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
        throw new globalThis.Error("match error");
      }
    }
  } 
  static dotMult(c1, ps1) {
    let tmp;
    tmp = runtime.safeCall(lambda7(c1, ps1));
    return NofibPrelude.lazy(tmp)
  } 
  static dotMultSndLz(c2, ps2) {
    let tmp;
    tmp = runtime.safeCall(lambda8(c2, ps2));
    return NofibPrelude.lazy(tmp)
  } 
  static negatePs(ps3) {
    let tmp;
    tmp = runtime.safeCall(lambda9(ps3));
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
  static multPs(fss1, gss) {
    let tmp;
    tmp = runtime.safeCall(lambda11(fss1, gss));
    return NofibPrelude.lazy(tmp)
  } 
  static multPsFstLz(fss2, gss1) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_41_42_tsni(fss2, gss1));
    return NofibPrelude.lazy(tmp)
  } 
  static powerPs(a1, n1) {
    let scrut, tmp, tmp1;
    scrut = n1 <= 0;
    if (scrut === true) {
      return power.fromIntegerPs(1)
    } else {
      tmp = n1 - 1;
      tmp1 = power.powerPs(a1, tmp);
      return power.multPs(a1, tmp1)
    }
  } 
  static divPs(fss3, gss2) {
    let tmp;
    tmp = runtime.safeCall(lambda13(fss3, gss2));
    return NofibPrelude.lazy(tmp)
  } 
  static compose_(fss4, gss3) {
    let tmp;
    tmp = runtime.safeCall(lambda18(fss4, gss3));
    return NofibPrelude.lazy(tmp)
  } 
  static composeSndLz_(fss5, gss4) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_43_tsni(fss5, gss4));
    return NofibPrelude.lazy(tmp)
  } 
  static revert(fss6) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_44_45_tsni(fss6));
    return NofibPrelude.lazy(tmp)
  } 
  static deriv(fss7) {
    let tmp;
    tmp = runtime.safeCall(lambda36(fss7));
    return NofibPrelude.lazy(tmp)
  } 
  static integral(fs_) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda39(fs_));
    return NofibPrelude.lazy(lambda$this)
  } 
  static integralLz(fs_1) {
    let tmp;
    tmp = runtime.safeCall(lambda41(fs_1));
    return NofibPrelude.lazy(tmp)
  } 
  static sqrtPs(fss8) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_46_tsni(fss8));
    return NofibPrelude.lazy(tmp)
  } 
  static ts() {
    let tmp;
    tmp = lambda45;
    return NofibPrelude.lazy(tmp)
  } 
  static tree() {
    let tmp;
    tmp = lambda_inst_47_tsni;
    return NofibPrelude.lazy(tmp)
  } 
  static cosx() {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.lazy(lambda_inst_48_49_tsni);
    tmp1 = power.integralLz(power.cosx);
    tmp2 = power.integral(tmp1);
    return minusPs_inst_48_75_tsni(tmp, tmp2)
  } 
  static sinx() {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.lazy(lambda_inst_51_52_tsni);
    tmp1 = power.integralLz(power.sinx);
    tmp2 = minusPs_inst_51_77_tsni(tmp, tmp1);
    return power.integral(tmp2)
  } 
  static testPower_nofib(p) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
    tmp = sinx_inst_54_55_tsni();
    tmp1 = fromIntegerPs_inst_54_59_tsni(1);
    tmp2 = cosx_inst_54_56_tsni();
    tmp3 = powerPs_inst_54_57_tsni(tmp2, 2);
    tmp4 = minusPs_inst_54_78_tsni(tmp1, tmp3);
    tmp5 = sqrtPs_inst_54_60_tsni(tmp4);
    tmp6 = power.minusPs(tmp, tmp5);
    tmp7 = power.extract(p, tmp6);
    tmp8 = sinx_inst_54_61_tsni();
    tmp9 = cosx_inst_54_62_tsni();
    tmp10 = divPs_inst_54_63_tsni(tmp8, tmp9);
    tmp11 = fromIntegerPs_inst_54_68_tsni(1);
    tmp12 = fromIntegerPs_inst_54_66_tsni(1);
    tmp13 = x__inst_54_65_tsni();
    tmp14 = powerPs_inst_54_64_tsni(tmp13, 2);
    tmp15 = addPs_inst_54_79_tsni(tmp12, tmp14);
    tmp16 = divPs_inst_54_67_tsni(tmp11, tmp15);
    tmp17 = power.integral(tmp16);
    tmp18 = revert_inst_54_69_tsni(tmp17);
    tmp19 = power.minusPs(tmp10, tmp18);
    tmp20 = power.extract(p, tmp19);
    tmp21 = (tmp7 , tmp20);
    tmp22 = power.ts();
    tmp23 = power.extract(p, tmp22);
    tmp24 = (tmp21 , tmp23);
    tmp25 = tree_inst_54_70_tsni();
    tmp26 = power.extract(p, tmp25);
    return (tmp24 , tmp26)
  } 
  static main() {
    let tmp;
    tmp = testPower_nofib_inst_72_73_tsni(14);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "power"; }
});
let power = power1; export default power;
