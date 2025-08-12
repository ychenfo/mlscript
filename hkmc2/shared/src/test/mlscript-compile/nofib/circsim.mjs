import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let circsim1, upsweep_inst_0_1_tsni, sweep_ud_inst_2_3_tsni, upsweep_inst_2_3_1_tsni, put_inst_2_4_tsni, downsweep_inst_2_3_5_tsni, sweep_ud_inst_6_7_tsni, upsweep_inst_6_7_1_tsni, put_inst_6_8_tsni, downsweep_inst_6_7_5_tsni, sweep_ud_inst_9_10_tsni, upsweep_inst_9_10_1_tsni, put_inst_9_11_tsni, downsweep_inst_9_10_5_tsni, scanlr_inst_12_13_tsni, sweep_ud_inst_12_13_10_tsni, upsweep_inst_12_13_10_1_tsni, downsweep_inst_12_13_10_5_tsni, put_inst_12_13_11_tsni, map_inst_16_17_tsni, map_inst_16_18_tsni, map_inst_16_19_tsni, compare_and_update_inst_21_22_tsni, up_i_inst_23_24_tsni, compare_and_update_inst_23_24_22_tsni, up_i_inst_23_25_tsni, map_inst_23_24_26_tsni, check_right_inst_27_28_tsni, update_i_inst_29_30_tsni, up_i_inst_29_30_25_tsni, up_i_inst_29_30_24_tsni, compare_and_update_inst_29_30_24_22_tsni, map_inst_29_30_24_26_tsni, update_o_inst_29_31_tsni, check_right_inst_29_31_28_tsni, map_inst_32_33_tsni, send_inst_32_34_tsni, scanlr_inst_32_34_13_tsni, sweep_ud_inst_32_34_13_10_tsni, upsweep_inst_32_34_13_10_1_tsni, put_inst_32_34_13_11_tsni, downsweep_inst_32_34_13_10_5_tsni, update_io_inst_32_35_tsni, update_o_inst_32_35_31_tsni, check_right_inst_32_35_31_28_tsni, update_i_inst_32_35_30_tsni, up_i_inst_32_35_30_24_tsni, compare_and_update_inst_32_35_30_24_22_tsni, up_i_inst_32_35_30_25_tsni, map_inst_32_35_30_24_26_tsni, acknowledge_inst_36_37_tsni, map_inst_36_37_19_tsni, map_inst_36_37_18_tsni, map_inst_36_37_17_tsni, do_send_inst_36_38_tsni, update_io_inst_36_38_35_tsni, update_i_inst_36_38_35_30_tsni, up_i_inst_36_38_35_30_25_tsni, up_i_inst_36_38_35_30_24_tsni, compare_and_update_inst_36_38_35_30_24_22_tsni, map_inst_36_38_35_30_24_26_tsni, update_o_inst_36_38_35_31_tsni, check_right_inst_36_38_35_31_28_tsni, send_inst_36_38_34_tsni, scanlr_inst_36_38_34_13_tsni, sweep_ud_inst_36_38_34_13_10_tsni, upsweep_inst_36_38_34_13_10_1_tsni, downsweep_inst_36_38_34_13_10_5_tsni, put_inst_36_38_34_13_11_tsni, map_inst_36_38_33_tsni, do_sends_inst_39_40_tsni, do_send_inst_39_40_38_tsni, map_inst_39_40_38_33_tsni, send_inst_39_40_38_34_tsni, scanlr_inst_39_40_38_34_13_tsni, sweep_ud_inst_39_40_38_34_13_10_tsni, upsweep_inst_39_40_38_34_13_10_1_tsni, put_inst_39_40_38_34_13_11_tsni, downsweep_inst_39_40_38_34_13_10_5_tsni, update_io_inst_39_40_38_35_tsni, update_o_inst_39_40_38_35_31_tsni, check_right_inst_39_40_38_35_31_28_tsni, update_i_inst_39_40_38_35_30_tsni, up_i_inst_39_40_38_35_30_24_tsni, compare_and_update_inst_39_40_38_35_30_24_22_tsni, up_i_inst_39_40_38_35_30_25_tsni, map_inst_39_40_38_35_30_24_26_tsni, acknowledge_inst_39_40_37_tsni, map_inst_39_40_37_17_tsni, map_inst_39_40_37_18_tsni, map_inst_39_40_37_19_tsni, store_inputs_inst_39_41_tsni, zip_inst_39_42_tsni, do_sends_inst_39_43_tsni, do_send_inst_39_43_38_tsni, map_inst_39_43_38_33_tsni, send_inst_39_43_38_34_tsni, scanlr_inst_39_43_38_34_13_tsni, sweep_ud_inst_39_43_38_34_13_10_tsni, upsweep_inst_39_43_38_34_13_10_1_tsni, put_inst_39_43_38_34_13_11_tsni, downsweep_inst_39_43_38_34_13_10_5_tsni, update_io_inst_39_43_38_35_tsni, update_o_inst_39_43_38_35_31_tsni, check_right_inst_39_43_38_35_31_28_tsni, update_i_inst_39_43_38_35_30_tsni, up_i_inst_39_43_38_35_30_24_tsni, compare_and_update_inst_39_43_38_35_30_24_22_tsni, up_i_inst_39_43_38_35_30_25_tsni, map_inst_39_43_38_35_30_24_26_tsni, acknowledge_inst_39_43_37_tsni, map_inst_39_43_37_17_tsni, map_inst_39_43_37_18_tsni, map_inst_39_43_37_19_tsni, enumFromTo_inst_39_44_tsni, do_cycle_inst_45_46_tsni, enumFromTo_inst_45_46_44_tsni, do_sends_inst_45_46_43_tsni, acknowledge_inst_45_46_43_37_tsni, map_inst_45_46_43_37_19_tsni, map_inst_45_46_43_37_18_tsni, map_inst_45_46_43_37_17_tsni, do_send_inst_45_46_43_38_tsni, update_io_inst_45_46_43_38_35_tsni, update_i_inst_45_46_43_38_35_30_tsni, up_i_inst_45_46_43_38_35_30_25_tsni, up_i_inst_45_46_43_38_35_30_24_tsni, compare_and_update_inst_45_46_43_38_35_30_24_22_tsni, map_inst_45_46_43_38_35_30_24_26_tsni, update_o_inst_45_46_43_38_35_31_tsni, check_right_inst_45_46_43_38_35_31_28_tsni, send_inst_45_46_43_38_34_tsni, scanlr_inst_45_46_43_38_34_13_tsni, sweep_ud_inst_45_46_43_38_34_13_10_tsni, upsweep_inst_45_46_43_38_34_13_10_1_tsni, downsweep_inst_45_46_43_38_34_13_10_5_tsni, put_inst_45_46_43_38_34_13_11_tsni, map_inst_45_46_43_38_33_tsni, store_inputs_inst_45_46_41_tsni, zip_inst_45_46_42_tsni, do_sends_inst_45_46_40_tsni, acknowledge_inst_45_46_40_37_tsni, map_inst_45_46_40_37_19_tsni, map_inst_45_46_40_37_18_tsni, map_inst_45_46_40_37_17_tsni, do_send_inst_45_46_40_38_tsni, update_io_inst_45_46_40_38_35_tsni, update_i_inst_45_46_40_38_35_30_tsni, up_i_inst_45_46_40_38_35_30_25_tsni, up_i_inst_45_46_40_38_35_30_24_tsni, compare_and_update_inst_45_46_40_38_35_30_24_22_tsni, map_inst_45_46_40_38_35_30_24_26_tsni, update_o_inst_45_46_40_38_35_31_tsni, check_right_inst_45_46_40_38_35_31_28_tsni, send_inst_45_46_40_38_34_tsni, scanlr_inst_45_46_40_38_34_13_tsni, sweep_ud_inst_45_46_40_38_34_13_10_tsni, upsweep_inst_45_46_40_38_34_13_10_1_tsni, downsweep_inst_45_46_40_38_34_13_10_5_tsni, put_inst_45_46_40_38_34_13_11_tsni, map_inst_45_46_40_38_33_tsni, enumFromTo_inst_47_48_tsni, map_inst_47_49_tsni, enumFromTo_inst_47_50_tsni, map_inst_47_51_tsni, enumFromTo_inst_47_52_tsni, map_inst_47_53_tsni, map_inst_47_54_tsni, reg_inst_47_55_tsni, simulate_inst_56_57_tsni, do_cycle_inst_56_57_46_tsni, do_sends_inst_56_57_46_40_tsni, do_send_inst_56_57_46_40_38_tsni, map_inst_56_57_46_40_38_33_tsni, send_inst_56_57_46_40_38_34_tsni, scanlr_inst_56_57_46_40_38_34_13_tsni, sweep_ud_inst_56_57_46_40_38_34_13_10_tsni, upsweep_inst_56_57_46_40_38_34_13_10_1_tsni, put_inst_56_57_46_40_38_34_13_11_tsni, downsweep_inst_56_57_46_40_38_34_13_10_5_tsni, update_io_inst_56_57_46_40_38_35_tsni, update_o_inst_56_57_46_40_38_35_31_tsni, check_right_inst_56_57_46_40_38_35_31_28_tsni, update_i_inst_56_57_46_40_38_35_30_tsni, up_i_inst_56_57_46_40_38_35_30_24_tsni, compare_and_update_inst_56_57_46_40_38_35_30_24_22_tsni, up_i_inst_56_57_46_40_38_35_30_25_tsni, map_inst_56_57_46_40_38_35_30_24_26_tsni, acknowledge_inst_56_57_46_40_37_tsni, map_inst_56_57_46_40_37_17_tsni, map_inst_56_57_46_40_37_18_tsni, map_inst_56_57_46_40_37_19_tsni, store_inputs_inst_56_57_46_41_tsni, zip_inst_56_57_46_42_tsni, do_sends_inst_56_57_46_43_tsni, do_send_inst_56_57_46_43_38_tsni, map_inst_56_57_46_43_38_33_tsni, send_inst_56_57_46_43_38_34_tsni, scanlr_inst_56_57_46_43_38_34_13_tsni, sweep_ud_inst_56_57_46_43_38_34_13_10_tsni, upsweep_inst_56_57_46_43_38_34_13_10_1_tsni, put_inst_56_57_46_43_38_34_13_11_tsni, downsweep_inst_56_57_46_43_38_34_13_10_5_tsni, update_io_inst_56_57_46_43_38_35_tsni, update_o_inst_56_57_46_43_38_35_31_tsni, check_right_inst_56_57_46_43_38_35_31_28_tsni, update_i_inst_56_57_46_43_38_35_30_tsni, up_i_inst_56_57_46_43_38_35_30_24_tsni, compare_and_update_inst_56_57_46_43_38_35_30_24_22_tsni, up_i_inst_56_57_46_43_38_35_30_25_tsni, map_inst_56_57_46_43_38_35_30_24_26_tsni, acknowledge_inst_56_57_46_43_37_tsni, map_inst_56_57_46_43_37_17_tsni, map_inst_56_57_46_43_37_18_tsni, map_inst_56_57_46_43_37_19_tsni, enumFromTo_inst_56_57_46_44_tsni, collect_outputs_inst_56_58_tsni, regs_inst_59_60_tsni, map_inst_59_60_54_tsni, reg_inst_59_60_55_tsni, map_inst_59_60_53_tsni, enumFromTo_inst_59_60_52_tsni, map_inst_59_60_51_tsni, enumFromTo_inst_59_60_50_tsni, map_inst_59_60_49_tsni, enumFromTo_inst_59_60_48_tsni, circuit_simulate_inst_59_61_tsni, collect_outputs_inst_59_61_58_tsni, simulate_inst_59_61_57_tsni, do_cycle_inst_59_61_57_46_tsni, enumFromTo_inst_59_61_57_46_44_tsni, do_sends_inst_59_61_57_46_43_tsni, acknowledge_inst_59_61_57_46_43_37_tsni, map_inst_59_61_57_46_43_37_19_tsni, map_inst_59_61_57_46_43_37_18_tsni, map_inst_59_61_57_46_43_37_17_tsni, do_send_inst_59_61_57_46_43_38_tsni, update_io_inst_59_61_57_46_43_38_35_tsni, update_i_inst_59_61_57_46_43_38_35_30_tsni, up_i_inst_59_61_57_46_43_38_35_30_25_tsni, up_i_inst_59_61_57_46_43_38_35_30_24_tsni, compare_and_update_inst_59_61_57_46_43_38_35_30_24_22_tsni, map_inst_59_61_57_46_43_38_35_30_24_26_tsni, update_o_inst_59_61_57_46_43_38_35_31_tsni, check_right_inst_59_61_57_46_43_38_35_31_28_tsni, send_inst_59_61_57_46_43_38_34_tsni, scanlr_inst_59_61_57_46_43_38_34_13_tsni, sweep_ud_inst_59_61_57_46_43_38_34_13_10_tsni, upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni, downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni, put_inst_59_61_57_46_43_38_34_13_11_tsni, map_inst_59_61_57_46_43_38_33_tsni, zip_inst_59_61_57_46_42_tsni, do_sends_inst_59_61_57_46_40_tsni, acknowledge_inst_59_61_57_46_40_37_tsni, map_inst_59_61_57_46_40_37_19_tsni, map_inst_59_61_57_46_40_37_18_tsni, map_inst_59_61_57_46_40_37_17_tsni, do_send_inst_59_61_57_46_40_38_tsni, update_io_inst_59_61_57_46_40_38_35_tsni, update_i_inst_59_61_57_46_40_38_35_30_tsni, up_i_inst_59_61_57_46_40_38_35_30_25_tsni, up_i_inst_59_61_57_46_40_38_35_30_24_tsni, compare_and_update_inst_59_61_57_46_40_38_35_30_24_22_tsni, map_inst_59_61_57_46_40_38_35_30_24_26_tsni, update_o_inst_59_61_57_46_40_38_35_31_tsni, check_right_inst_59_61_57_46_40_38_35_31_28_tsni, send_inst_59_61_57_46_40_38_34_tsni, scanlr_inst_59_61_57_46_40_38_34_13_tsni, sweep_ud_inst_59_61_57_46_40_38_34_13_10_tsni, upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni, downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni, put_inst_59_61_57_46_40_38_34_13_11_tsni, map_inst_59_61_57_46_40_38_33_tsni, replicate_inst_59_62_tsni, replicate_inst_59_63_tsni, pad_circuit_inst_59_64_tsni, zipWith_lz_nl_inst_59_60_65_tsni, zipWith_lz_nl_inst_59_60_66_tsni, run_inst_67_68_tsni, circuit_simulate_inst_67_68_61_tsni, simulate_inst_67_68_61_57_tsni, do_cycle_inst_67_68_61_57_46_tsni, do_sends_inst_67_68_61_57_46_40_tsni, do_send_inst_67_68_61_57_46_40_38_tsni, map_inst_67_68_61_57_46_40_38_33_tsni, send_inst_67_68_61_57_46_40_38_34_tsni, scanlr_inst_67_68_61_57_46_40_38_34_13_tsni, sweep_ud_inst_67_68_61_57_46_40_38_34_13_10_tsni, upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni, put_inst_67_68_61_57_46_40_38_34_13_11_tsni, downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni, update_io_inst_67_68_61_57_46_40_38_35_tsni, update_o_inst_67_68_61_57_46_40_38_35_31_tsni, check_right_inst_67_68_61_57_46_40_38_35_31_28_tsni, update_i_inst_67_68_61_57_46_40_38_35_30_tsni, up_i_inst_67_68_61_57_46_40_38_35_30_24_tsni, compare_and_update_inst_67_68_61_57_46_40_38_35_30_24_22_tsni, up_i_inst_67_68_61_57_46_40_38_35_30_25_tsni, map_inst_67_68_61_57_46_40_38_35_30_24_26_tsni, acknowledge_inst_67_68_61_57_46_40_37_tsni, map_inst_67_68_61_57_46_40_37_17_tsni, map_inst_67_68_61_57_46_40_37_18_tsni, map_inst_67_68_61_57_46_40_37_19_tsni, zip_inst_67_68_61_57_46_42_tsni, do_sends_inst_67_68_61_57_46_43_tsni, do_send_inst_67_68_61_57_46_43_38_tsni, map_inst_67_68_61_57_46_43_38_33_tsni, send_inst_67_68_61_57_46_43_38_34_tsni, scanlr_inst_67_68_61_57_46_43_38_34_13_tsni, sweep_ud_inst_67_68_61_57_46_43_38_34_13_10_tsni, upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni, put_inst_67_68_61_57_46_43_38_34_13_11_tsni, downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni, update_io_inst_67_68_61_57_46_43_38_35_tsni, update_o_inst_67_68_61_57_46_43_38_35_31_tsni, check_right_inst_67_68_61_57_46_43_38_35_31_28_tsni, update_i_inst_67_68_61_57_46_43_38_35_30_tsni, up_i_inst_67_68_61_57_46_43_38_35_30_24_tsni, compare_and_update_inst_67_68_61_57_46_43_38_35_30_24_22_tsni, up_i_inst_67_68_61_57_46_43_38_35_30_25_tsni, map_inst_67_68_61_57_46_43_38_35_30_24_26_tsni, acknowledge_inst_67_68_61_57_46_43_37_tsni, map_inst_67_68_61_57_46_43_37_17_tsni, map_inst_67_68_61_57_46_43_37_18_tsni, map_inst_67_68_61_57_46_43_37_19_tsni, enumFromTo_inst_67_68_61_57_46_44_tsni, collect_outputs_inst_67_68_61_58_tsni, replicate_inst_67_68_62_tsni, replicate_inst_67_68_63_tsni, pad_circuit_inst_67_68_64_tsni, regs_inst_67_68_60_tsni, enumFromTo_inst_67_68_60_48_tsni, map_inst_67_68_60_49_tsni, enumFromTo_inst_67_68_60_50_tsni, map_inst_67_68_60_51_tsni, enumFromTo_inst_67_68_60_52_tsni, map_inst_67_68_60_53_tsni, map_inst_67_68_60_54_tsni, reg_inst_67_68_60_55_tsni, zipWith_lz_nl_inst_67_68_60_65_tsni, zipWith_lz_nl_inst_67_68_60_66_tsni, testCircsim_nofib_inst_69_70_tsni, run_inst_69_70_68_tsni, regs_inst_69_70_68_60_tsni, map_inst_69_70_68_60_54_tsni, reg_inst_69_70_68_60_55_tsni, map_inst_69_70_68_60_53_tsni, enumFromTo_inst_69_70_68_60_52_tsni, map_inst_69_70_68_60_51_tsni, enumFromTo_inst_69_70_68_60_50_tsni, map_inst_69_70_68_60_49_tsni, enumFromTo_inst_69_70_68_60_48_tsni, circuit_simulate_inst_69_70_68_61_tsni, collect_outputs_inst_69_70_68_61_58_tsni, simulate_inst_69_70_68_61_57_tsni, do_cycle_inst_69_70_68_61_57_46_tsni, enumFromTo_inst_69_70_68_61_57_46_44_tsni, do_sends_inst_69_70_68_61_57_46_43_tsni, acknowledge_inst_69_70_68_61_57_46_43_37_tsni, map_inst_69_70_68_61_57_46_43_37_19_tsni, map_inst_69_70_68_61_57_46_43_37_18_tsni, map_inst_69_70_68_61_57_46_43_37_17_tsni, do_send_inst_69_70_68_61_57_46_43_38_tsni, update_io_inst_69_70_68_61_57_46_43_38_35_tsni, update_i_inst_69_70_68_61_57_46_43_38_35_30_tsni, up_i_inst_69_70_68_61_57_46_43_38_35_30_25_tsni, up_i_inst_69_70_68_61_57_46_43_38_35_30_24_tsni, compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_24_22_tsni, map_inst_69_70_68_61_57_46_43_38_35_30_24_26_tsni, update_o_inst_69_70_68_61_57_46_43_38_35_31_tsni, check_right_inst_69_70_68_61_57_46_43_38_35_31_28_tsni, send_inst_69_70_68_61_57_46_43_38_34_tsni, scanlr_inst_69_70_68_61_57_46_43_38_34_13_tsni, sweep_ud_inst_69_70_68_61_57_46_43_38_34_13_10_tsni, upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni, downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni, put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni, map_inst_69_70_68_61_57_46_43_38_33_tsni, zip_inst_69_70_68_61_57_46_42_tsni, do_sends_inst_69_70_68_61_57_46_40_tsni, acknowledge_inst_69_70_68_61_57_46_40_37_tsni, map_inst_69_70_68_61_57_46_40_37_19_tsni, map_inst_69_70_68_61_57_46_40_37_18_tsni, map_inst_69_70_68_61_57_46_40_37_17_tsni, do_send_inst_69_70_68_61_57_46_40_38_tsni, update_io_inst_69_70_68_61_57_46_40_38_35_tsni, update_i_inst_69_70_68_61_57_46_40_38_35_30_tsni, up_i_inst_69_70_68_61_57_46_40_38_35_30_25_tsni, up_i_inst_69_70_68_61_57_46_40_38_35_30_24_tsni, compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_24_22_tsni, map_inst_69_70_68_61_57_46_40_38_35_30_24_26_tsni, update_o_inst_69_70_68_61_57_46_40_38_35_31_tsni, check_right_inst_69_70_68_61_57_46_40_38_35_31_28_tsni, send_inst_69_70_68_61_57_46_40_38_34_tsni, scanlr_inst_69_70_68_61_57_46_40_38_34_13_tsni, sweep_ud_inst_69_70_68_61_57_46_40_38_34_13_10_tsni, upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni, downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni, put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni, map_inst_69_70_68_61_57_46_40_38_33_tsni, replicate_inst_69_70_68_62_tsni, replicate_inst_69_70_68_63_tsni, pad_circuit_inst_69_70_68_64_tsni, zipWith_lz_nl_inst_69_70_68_60_65_tsni, zipWith_lz_nl_inst_69_70_68_60_66_tsni, downsweep_inst_0_5_tsni, get_inst_2_71_tsni, get_inst_6_72_tsni, get_inst_9_73_tsni, get_inst_12_13_73_tsni, head_inst_14_74_tsni, head_inst_15_75_tsni, orList_inst_16_76_tsni, orList_inst_16_77_tsni, eqTup2_inst_20_78_tsni, eqTup2_inst_21_22_78_tsni, eqTup2_inst_23_24_22_78_tsni, compare_and_update_inst_23_25_22_tsni, map_inst_23_25_26_tsni, check_left_inst_27_79_tsni, compare_and_update_inst_29_30_25_22_tsni, eqTup2_inst_29_30_24_22_78_tsni, map_inst_29_30_25_26_tsni, check_left_inst_29_31_79_tsni, map_inst_32_80_tsni, get_inst_32_34_13_73_tsni, snd_inst_32_81_tsni, check_left_inst_32_35_31_79_tsni, eqTup2_inst_32_35_30_24_22_78_tsni, compare_and_update_inst_32_35_30_25_22_tsni, map_inst_32_35_30_25_26_tsni, orList_inst_36_37_77_tsni, orList_inst_36_37_76_tsni, compare_and_update_inst_36_38_35_30_25_22_tsni, eqTup2_inst_36_38_35_30_24_22_78_tsni, map_inst_36_38_35_30_25_26_tsni, check_left_inst_36_38_35_31_79_tsni, get_inst_36_38_34_13_73_tsni, snd_inst_36_38_81_tsni, map_inst_36_38_80_tsni, map_inst_39_40_38_80_tsni, get_inst_39_40_38_34_13_73_tsni, snd_inst_39_40_38_81_tsni, check_left_inst_39_40_38_35_31_79_tsni, eqTup2_inst_39_40_38_35_30_24_22_78_tsni, compare_and_update_inst_39_40_38_35_30_25_22_tsni, map_inst_39_40_38_35_30_25_26_tsni, orList_inst_39_40_37_76_tsni, orList_inst_39_40_37_77_tsni, head_inst_39_41_75_tsni, map_inst_39_43_38_80_tsni, get_inst_39_43_38_34_13_73_tsni, snd_inst_39_43_38_81_tsni, check_left_inst_39_43_38_35_31_79_tsni, eqTup2_inst_39_43_38_35_30_24_22_78_tsni, compare_and_update_inst_39_43_38_35_30_25_22_tsni, map_inst_39_43_38_35_30_25_26_tsni, orList_inst_39_43_37_76_tsni, orList_inst_39_43_37_77_tsni, foldl_inst_39_82_tsni, critical_path_depth_inst_45_83_tsni, foldl_inst_45_46_82_tsni, orList_inst_45_46_43_37_77_tsni, orList_inst_45_46_43_37_76_tsni, compare_and_update_inst_45_46_43_38_35_30_25_22_tsni, eqTup2_inst_45_46_43_38_35_30_24_22_78_tsni, map_inst_45_46_43_38_35_30_25_26_tsni, check_left_inst_45_46_43_38_35_31_79_tsni, get_inst_45_46_43_38_34_13_73_tsni, snd_inst_45_46_43_38_81_tsni, map_inst_45_46_43_38_80_tsni, head_inst_45_46_41_75_tsni, orList_inst_45_46_40_37_77_tsni, orList_inst_45_46_40_37_76_tsni, compare_and_update_inst_45_46_40_38_35_30_25_22_tsni, eqTup2_inst_45_46_40_38_35_30_24_22_78_tsni, map_inst_45_46_40_38_35_30_25_26_tsni, check_left_inst_45_46_40_38_35_31_79_tsni, get_inst_45_46_40_38_34_13_73_tsni, snd_inst_45_46_40_38_81_tsni, map_inst_45_46_40_38_80_tsni, zipWith_lz_nl_inst_47_66_tsni, zipWith_lz_nl_inst_47_65_tsni, concat_inst_47_84_tsni, append_inst_47_84_85_tsni, map_inst_56_57_46_40_38_80_tsni, get_inst_56_57_46_40_38_34_13_73_tsni, snd_inst_56_57_46_40_38_81_tsni, check_left_inst_56_57_46_40_38_35_31_79_tsni, eqTup2_inst_56_57_46_40_38_35_30_24_22_78_tsni, compare_and_update_inst_56_57_46_40_38_35_30_25_22_tsni, map_inst_56_57_46_40_38_35_30_25_26_tsni, orList_inst_56_57_46_40_37_76_tsni, orList_inst_56_57_46_40_37_77_tsni, head_inst_56_57_46_41_75_tsni, map_inst_56_57_46_43_38_80_tsni, get_inst_56_57_46_43_38_34_13_73_tsni, snd_inst_56_57_46_43_38_81_tsni, check_left_inst_56_57_46_43_38_35_31_79_tsni, eqTup2_inst_56_57_46_43_38_35_30_24_22_78_tsni, compare_and_update_inst_56_57_46_43_38_35_30_25_22_tsni, map_inst_56_57_46_43_38_35_30_25_26_tsni, orList_inst_56_57_46_43_37_76_tsni, orList_inst_56_57_46_43_37_77_tsni, foldl_inst_56_57_46_82_tsni, critical_path_depth_inst_56_57_83_tsni, head_inst_56_58_74_tsni, concat_inst_59_60_84_tsni, append_inst_59_60_84_85_tsni, head_inst_59_61_58_74_tsni, critical_path_depth_inst_59_61_57_83_tsni, foldl_inst_59_61_57_46_82_tsni, orList_inst_59_61_57_46_43_37_77_tsni, orList_inst_59_61_57_46_43_37_76_tsni, compare_and_update_inst_59_61_57_46_43_38_35_30_25_22_tsni, eqTup2_inst_59_61_57_46_43_38_35_30_24_22_78_tsni, map_inst_59_61_57_46_43_38_35_30_25_26_tsni, check_left_inst_59_61_57_46_43_38_35_31_79_tsni, get_inst_59_61_57_46_43_38_34_13_73_tsni, snd_inst_59_61_57_46_43_38_81_tsni, map_inst_59_61_57_46_43_38_80_tsni, store_inputs_inst_59_61_57_46_41_tsni, orList_inst_59_61_57_46_40_37_77_tsni, orList_inst_59_61_57_46_40_37_76_tsni, compare_and_update_inst_59_61_57_46_40_38_35_30_25_22_tsni, eqTup2_inst_59_61_57_46_40_38_35_30_24_22_78_tsni, map_inst_59_61_57_46_40_38_35_30_25_26_tsni, check_left_inst_59_61_57_46_40_38_35_31_79_tsni, get_inst_59_61_57_46_40_38_34_13_73_tsni, snd_inst_59_61_57_46_40_38_81_tsni, map_inst_59_61_57_46_40_38_80_tsni, scanl_inst_59_61_57_86_tsni, map_inst_59_61_58_87_tsni, map_inst_67_68_61_57_46_40_38_80_tsni, get_inst_67_68_61_57_46_40_38_34_13_73_tsni, snd_inst_67_68_61_57_46_40_38_81_tsni, check_left_inst_67_68_61_57_46_40_38_35_31_79_tsni, eqTup2_inst_67_68_61_57_46_40_38_35_30_24_22_78_tsni, compare_and_update_inst_67_68_61_57_46_40_38_35_30_25_22_tsni, map_inst_67_68_61_57_46_40_38_35_30_25_26_tsni, orList_inst_67_68_61_57_46_40_37_76_tsni, orList_inst_67_68_61_57_46_40_37_77_tsni, store_inputs_inst_67_68_61_57_46_41_tsni, map_inst_67_68_61_57_46_43_38_80_tsni, get_inst_67_68_61_57_46_43_38_34_13_73_tsni, snd_inst_67_68_61_57_46_43_38_81_tsni, check_left_inst_67_68_61_57_46_43_38_35_31_79_tsni, eqTup2_inst_67_68_61_57_46_43_38_35_30_24_22_78_tsni, compare_and_update_inst_67_68_61_57_46_43_38_35_30_25_22_tsni, map_inst_67_68_61_57_46_43_38_35_30_25_26_tsni, orList_inst_67_68_61_57_46_43_37_76_tsni, orList_inst_67_68_61_57_46_43_37_77_tsni, foldl_inst_67_68_61_57_46_82_tsni, critical_path_depth_inst_67_68_61_57_83_tsni, head_inst_67_68_61_58_74_tsni, scanl_inst_67_68_61_57_86_tsni, concat_inst_67_68_60_84_tsni, append_inst_67_68_60_84_85_tsni, map_inst_67_68_61_58_87_tsni, concat_inst_69_70_68_60_84_tsni, append_inst_69_70_68_60_84_85_tsni, head_inst_69_70_68_61_58_74_tsni, critical_path_depth_inst_69_70_68_61_57_83_tsni, foldl_inst_69_70_68_61_57_46_82_tsni, orList_inst_69_70_68_61_57_46_43_37_77_tsni, orList_inst_69_70_68_61_57_46_43_37_76_tsni, compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni, eqTup2_inst_69_70_68_61_57_46_43_38_35_30_24_22_78_tsni, map_inst_69_70_68_61_57_46_43_38_35_30_25_26_tsni, check_left_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni, snd_inst_69_70_68_61_57_46_43_38_81_tsni, map_inst_69_70_68_61_57_46_43_38_80_tsni, store_inputs_inst_69_70_68_61_57_46_41_tsni, orList_inst_69_70_68_61_57_46_40_37_77_tsni, orList_inst_69_70_68_61_57_46_40_37_76_tsni, compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni, eqTup2_inst_69_70_68_61_57_46_40_38_35_30_24_22_78_tsni, map_inst_69_70_68_61_57_46_40_38_35_30_25_26_tsni, check_left_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni, snd_inst_69_70_68_61_57_46_40_38_81_tsni, map_inst_69_70_68_61_57_46_40_38_80_tsni, scanl_inst_69_70_68_61_57_86_tsni, map_inst_69_70_68_61_58_87_tsni, match_t_arm_Node_inst_2_3_1_tsni, match_t_arm_Node_inst_6_7_1_tsni, match_t_arm_Node_inst_9_10_1_tsni, match_t_arm_Node_inst_12_13_10_1_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_23_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_27_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_29_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_29_31_79_tsni, match_t_arm_Node_inst_32_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_32_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_32_35_30_25_22_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_36_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_36_38_35_31_79_tsni, match_t_arm_Node_inst_36_38_34_13_10_1_tsni, match_t_arm_Node_inst_39_40_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_39_40_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_39_40_38_35_30_25_22_tsni, match_ls_arm_Nil_inst_39_41_tsni, match_t_arm_Node_inst_39_43_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_39_43_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_39_43_38_35_30_25_22_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_43_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_45_46_43_38_35_31_79_tsni, match_t_arm_Node_inst_45_46_43_38_34_13_10_1_tsni, match_ls_arm_Nil_inst_45_46_41_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_40_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_45_46_40_38_35_31_79_tsni, match_t_arm_Node_inst_45_46_40_38_34_13_10_1_tsni, match_xs_arm_Cons_inst_47_84_85_tsni, match_t_arm_Node_inst_56_57_46_40_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_56_57_46_40_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_40_38_35_30_25_22_tsni, match_ls_arm_Nil_inst_56_57_46_41_tsni, match_t_arm_Node_inst_56_57_46_43_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_56_57_46_43_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_43_38_35_30_25_22_tsni, match_xs_arm_Cons_inst_59_60_84_85_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_43_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_59_61_57_46_43_38_35_31_79_tsni, match_t_arm_Node_inst_59_61_57_46_43_38_34_13_10_1_tsni, match_ls_arm_Nil_inst_59_61_57_46_41_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_40_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_59_61_57_46_40_38_35_31_79_tsni, match_t_arm_Node_inst_59_61_57_46_40_38_34_13_10_1_tsni, match_xs_arm_Nil_inst_59_61_58_87_tsni, match_xs_arm_Cons_inst_59_61_57_46_42_tsni, match_xs_arm_default_inst_59_61_57_46_42_tsni, match_first0_arm_Deforest_Arr_2_inst_59_61_57_46_41_tsni, match_t_arm_Node_inst_67_68_61_57_46_40_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_40_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_40_38_35_30_25_22_tsni, match_ls_arm_Nil_inst_67_68_61_57_46_41_tsni, match_t_arm_Node_inst_67_68_61_57_46_43_38_34_13_10_1_tsni, match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_43_38_35_31_79_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_43_38_35_30_25_22_tsni, match_xs_arm_Cons_inst_67_68_60_84_85_tsni, match_xs_arm_Nil_inst_67_68_61_58_87_tsni, match_xs_arm_Cons_inst_67_68_61_57_46_42_tsni, match_first0_arm_Deforest_Arr_2_inst_67_68_61_57_46_41_tsni, match_xs_arm_default_inst_67_68_61_57_46_42_tsni, match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, match_t_arm_Node_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni, match_ls_arm_Nil_inst_69_70_68_61_57_46_41_tsni, match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni, match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, match_t_arm_Node_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni, match_xs_arm_Nil_inst_69_70_68_61_58_87_tsni, match_xs_arm_Cons_inst_69_70_68_61_57_46_42_tsni, match_xs_arm_default_inst_69_70_68_61_57_46_42_tsni, match_first0_arm_Deforest_Arr_2_inst_69_70_68_61_57_46_41_tsni;
match_t_arm_Node_inst_2_3_1_tsni = function match_t_arm_Node_inst_2_3_1_tsni(f, _deforest_Node_value_inst_2_3_1_tsni, _deforest_Node_left_inst_2_3_1_tsni, _deforest_Node_right_inst_2_3_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_2_3_1_tsni;
  param1 = _deforest_Node_left_inst_2_3_1_tsni;
  param2 = _deforest_Node_right_inst_2_3_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_2_3_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_2_3_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_6_7_1_tsni = function match_t_arm_Node_inst_6_7_1_tsni(f, _deforest_Node_value_inst_6_7_1_tsni, _deforest_Node_left_inst_6_7_1_tsni, _deforest_Node_right_inst_6_7_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_6_7_1_tsni;
  param1 = _deforest_Node_left_inst_6_7_1_tsni;
  param2 = _deforest_Node_right_inst_6_7_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_6_7_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_6_7_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_9_10_1_tsni = function match_t_arm_Node_inst_9_10_1_tsni(f, _deforest_Node_value_inst_9_10_1_tsni, _deforest_Node_left_inst_9_10_1_tsni, _deforest_Node_right_inst_9_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_9_10_1_tsni;
  param1 = _deforest_Node_left_inst_9_10_1_tsni;
  param2 = _deforest_Node_right_inst_9_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_9_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_9_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_12_13_10_1_tsni = function match_t_arm_Node_inst_12_13_10_1_tsni(f, _deforest_Node_value_inst_12_13_10_1_tsni, _deforest_Node_left_inst_12_13_10_1_tsni, _deforest_Node_right_inst_12_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_12_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_12_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_12_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_12_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_12_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_23_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_23_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_23_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_23_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_23_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_23_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_23_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_23_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_27_79_tsni = function match_b_arm_Deforest_Arr_6_inst_27_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_27_79_tsni, _deforest_Deforest_Arr_6_1_inst_27_79_tsni, _deforest_Deforest_Arr_6_2_inst_27_79_tsni, _deforest_Deforest_Arr_6_3_inst_27_79_tsni, _deforest_Deforest_Arr_6_4_inst_27_79_tsni, _deforest_Deforest_Arr_6_5_inst_27_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_27_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_27_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_27_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_27_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_27_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_27_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_29_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_29_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_29_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_29_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_29_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_29_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_29_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_29_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_29_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_29_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_29_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_29_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_29_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_29_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_29_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_29_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_29_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_29_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_29_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_29_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_29_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_29_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_32_34_13_10_1_tsni = function match_t_arm_Node_inst_32_34_13_10_1_tsni(f, _deforest_Node_value_inst_32_34_13_10_1_tsni, _deforest_Node_left_inst_32_34_13_10_1_tsni, _deforest_Node_right_inst_32_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_32_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_32_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_32_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_32_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_32_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_32_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_32_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_32_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_32_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_32_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_32_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_32_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_32_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_32_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_32_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_32_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_32_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_32_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_32_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_32_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_32_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_32_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_32_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_32_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_32_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_32_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_32_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_36_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_36_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_36_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_36_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_36_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_36_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_36_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_36_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_36_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_36_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_36_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_36_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_36_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_36_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_36_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_36_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_36_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_36_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_36_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_36_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_36_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_36_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_36_38_34_13_10_1_tsni = function match_t_arm_Node_inst_36_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_36_38_34_13_10_1_tsni, _deforest_Node_left_inst_36_38_34_13_10_1_tsni, _deforest_Node_right_inst_36_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_36_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_36_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_36_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_36_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_36_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_39_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_39_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_39_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_39_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_39_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_39_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_39_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_39_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_39_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_39_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_39_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_39_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_39_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_39_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_39_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_39_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_39_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_39_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_39_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_39_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_39_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_39_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_39_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_39_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_39_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_39_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_39_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_39_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_39_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_39_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_39_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_39_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_ls_arm_Nil_inst_39_41_tsni = function match_ls_arm_Nil_inst_39_41_tsni(lscomp, state, pid_) {
  return () => {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_39_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_39_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_39_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_39_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_39_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_39_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_39_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_39_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_39_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_39_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_39_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_39_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_39_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_39_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_39_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_39_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_39_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_39_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_39_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_39_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_39_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_39_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_39_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_39_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_39_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_39_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_39_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_39_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_39_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_39_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_39_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_39_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_45_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_45_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_45_46_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_45_46_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_45_46_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_45_46_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_45_46_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_45_46_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_45_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_45_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_45_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_45_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_45_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_45_46_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_45_46_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_45_46_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_45_46_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_45_46_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_45_46_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_45_46_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_45_46_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_45_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_45_46_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_45_46_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_45_46_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_45_46_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_45_46_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_45_46_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_45_46_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_45_46_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Nil_inst_45_46_41_tsni = function match_ls_arm_Nil_inst_45_46_41_tsni(lscomp, state, pid_) {
  return () => {
    throw new globalThis.Error("match error");
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_45_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_45_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_45_46_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_45_46_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_45_46_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_45_46_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_45_46_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_45_46_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_45_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_45_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_45_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_45_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_45_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_45_46_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_45_46_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_45_46_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_45_46_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_45_46_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_45_46_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_45_46_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_45_46_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_45_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_45_46_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_45_46_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_45_46_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_45_46_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_45_46_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_45_46_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_45_46_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_45_46_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_47_84_85_tsni = function match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head_inst_47_84_85_tsni, _deforest_Cons_tail_inst_47_84_85_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_47_84_85_tsni;
  param1 = _deforest_Cons_tail_inst_47_84_85_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_47_84_85_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_t_arm_Node_inst_56_57_46_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_56_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_56_57_46_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_56_57_46_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_56_57_46_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_56_57_46_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_56_57_46_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_56_57_46_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_56_57_46_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_56_57_46_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_56_57_46_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_56_57_46_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_56_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_56_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_56_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_56_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_56_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_56_57_46_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_56_57_46_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_56_57_46_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_56_57_46_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_56_57_46_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_56_57_46_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_56_57_46_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_56_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_56_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_56_57_46_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_56_57_46_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_56_57_46_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_56_57_46_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_ls_arm_Nil_inst_56_57_46_41_tsni = function match_ls_arm_Nil_inst_56_57_46_41_tsni(lscomp, state, pid_) {
  return () => {
    throw new globalThis.Error("match error");
  }
};
match_t_arm_Node_inst_56_57_46_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_56_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_56_57_46_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_56_57_46_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_56_57_46_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_56_57_46_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_56_57_46_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_56_57_46_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_56_57_46_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_56_57_46_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_56_57_46_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_56_57_46_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_56_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_56_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_56_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_56_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_56_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_56_57_46_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_56_57_46_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_56_57_46_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_56_57_46_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_56_57_46_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_56_57_46_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_56_57_46_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_56_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_56_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_56_57_46_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_56_57_46_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_56_57_46_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_56_57_46_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_xs_arm_Cons_inst_59_60_84_85_tsni = function match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head_inst_59_60_84_85_tsni, _deforest_Cons_tail_inst_59_60_84_85_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_59_60_84_85_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_84_85_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_59_60_84_85_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_59_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_59_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_59_61_57_46_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_59_61_57_46_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_59_61_57_46_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_59_61_57_46_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_59_61_57_46_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_59_61_57_46_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_59_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_59_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_59_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_59_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_59_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_59_61_57_46_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_59_61_57_46_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_59_61_57_46_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_59_61_57_46_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_59_61_57_46_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_59_61_57_46_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_59_61_57_46_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_59_61_57_46_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_59_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_59_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_59_61_57_46_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_59_61_57_46_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_59_61_57_46_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_59_61_57_46_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Nil_inst_59_61_57_46_41_tsni = function match_ls_arm_Nil_inst_59_61_57_46_41_tsni(lscomp, state, pid_) {
  return NofibPrelude.Nil
};
match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_59_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_59_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_59_61_57_46_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_59_61_57_46_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_59_61_57_46_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_59_61_57_46_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_59_61_57_46_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_59_61_57_46_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_59_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_59_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_59_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_59_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_59_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_59_61_57_46_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_59_61_57_46_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_59_61_57_46_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_59_61_57_46_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_59_61_57_46_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_59_61_57_46_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_59_61_57_46_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_59_61_57_46_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_59_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_59_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_59_61_57_46_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_59_61_57_46_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_59_61_57_46_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_59_61_57_46_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Nil_inst_59_61_58_87_tsni = function match_xs_arm_Nil_inst_59_61_58_87_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_59_61_57_46_42_tsni = function match_xs_arm_Cons_inst_59_61_57_46_42_tsni(ys, _deforest_Cons_head_inst_59_61_57_46_42_tsni, _deforest_Cons_tail_inst_59_61_57_46_42_tsni) {
  let param0, param1, x, xs;
  param0 = _deforest_Cons_head_inst_59_61_57_46_42_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_57_46_42_tsni;
  x = param0;
  xs = param1;
  return runtime.safeCall(ys(x, xs))
};
match_xs_arm_default_inst_59_61_57_46_42_tsni = function match_xs_arm_default_inst_59_61_57_46_42_tsni(ys) {
  return (lscomp, state, pid_) => {
    return match_ls_arm_Nil_inst_59_61_57_46_41_tsni(lscomp, state, pid_)
  }
};
match_first0_arm_Deforest_Arr_2_inst_59_61_57_46_41_tsni = function match_first0_arm_Deforest_Arr_2_inst_59_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0_inst_59_61_57_46_41_tsni, _deforest_Deforest_Arr_2_1_inst_59_61_57_46_41_tsni) {
  let first11, first0, label, input_pid, value, scrut, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_59_61_57_46_41_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_59_61_57_46_41_tsni;
  label = first0;
  input_pid = first11;
  value = first1;
  scrut = pid_ == input_pid;
  if (scrut === true) {
    tmp = circsim.update_outports(state, value);
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    return lscomp(t)
  }
};
match_t_arm_Node_inst_67_68_61_57_46_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_67_68_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_67_68_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_67_68_61_57_46_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_67_68_61_57_46_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_67_68_61_57_46_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_67_68_61_57_46_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_67_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_67_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_67_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_67_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_67_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_67_68_61_57_46_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_67_68_61_57_46_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_67_68_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_67_68_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_67_68_61_57_46_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_67_68_61_57_46_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_67_68_61_57_46_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_67_68_61_57_46_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_ls_arm_Nil_inst_67_68_61_57_46_41_tsni = function match_ls_arm_Nil_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_) {
  return NofibPrelude.Nil
};
match_t_arm_Node_inst_67_68_61_57_46_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_67_68_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_67_68_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_67_68_61_57_46_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_67_68_61_57_46_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_67_68_61_57_46_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_67_68_61_57_46_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_67_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_67_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_67_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_67_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_67_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_67_68_61_57_46_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_67_68_61_57_46_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_67_68_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_67_68_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_67_68_61_57_46_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_67_68_61_57_46_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_67_68_61_57_46_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_67_68_61_57_46_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_xs_arm_Cons_inst_67_68_60_84_85_tsni = function match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head_inst_67_68_60_84_85_tsni, _deforest_Cons_tail_inst_67_68_60_84_85_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_67_68_60_84_85_tsni;
  param1 = _deforest_Cons_tail_inst_67_68_60_84_85_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_67_68_60_84_85_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_67_68_61_58_87_tsni = function match_xs_arm_Nil_inst_67_68_61_58_87_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_67_68_61_57_46_42_tsni = function match_xs_arm_Cons_inst_67_68_61_57_46_42_tsni(ys, _deforest_Cons_head_inst_67_68_61_57_46_42_tsni, _deforest_Cons_tail_inst_67_68_61_57_46_42_tsni) {
  let param0, param1, x, xs;
  param0 = _deforest_Cons_head_inst_67_68_61_57_46_42_tsni;
  param1 = _deforest_Cons_tail_inst_67_68_61_57_46_42_tsni;
  x = param0;
  xs = param1;
  return runtime.safeCall(ys(x, xs))
};
match_first0_arm_Deforest_Arr_2_inst_67_68_61_57_46_41_tsni = function match_first0_arm_Deforest_Arr_2_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0_inst_67_68_61_57_46_41_tsni, _deforest_Deforest_Arr_2_1_inst_67_68_61_57_46_41_tsni) {
  let first11, first0, label, input_pid, value, scrut, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_67_68_61_57_46_41_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_67_68_61_57_46_41_tsni;
  label = first0;
  input_pid = first11;
  value = first1;
  scrut = pid_ == input_pid;
  if (scrut === true) {
    tmp = circsim.update_outports(state, value);
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    return lscomp(t)
  }
};
match_xs_arm_default_inst_67_68_61_57_46_42_tsni = function match_xs_arm_default_inst_67_68_61_57_46_42_tsni(ys) {
  return (lscomp, state, pid_) => {
    return match_ls_arm_Nil_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_)
  }
};
match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni = function match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head_inst_69_70_68_60_84_85_tsni, _deforest_Cons_tail_inst_69_70_68_60_84_85_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_69_70_68_60_84_85_tsni;
  param1 = _deforest_Cons_tail_inst_69_70_68_60_84_85_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_69_70_68_60_84_85_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_43_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_43_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_69_70_68_61_57_46_43_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_69_70_68_61_57_46_43_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_69_70_68_61_57_46_43_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni = function match_t_arm_Node_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_left_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni, _deforest_Node_right_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Nil_inst_69_70_68_61_57_46_41_tsni = function match_ls_arm_Nil_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_) {
  return NofibPrelude.Nil
};
match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni = function match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni(i, p, m_, _deforest_Deforest_Arr_3_0_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_1_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni, _deforest_Deforest_Arr_3_2_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni) {
  let first2, first1, first0, pid_, port, m, scrut, arr, arr1, arr2, arr3;
  first0 = _deforest_Deforest_Arr_3_0_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni;
  pid_ = first0;
  port = first1;
  m = first2;
  arr = [
    i,
    p
  ];
  arr1 = [
    pid_,
    port
  ];
  scrut = NofibPrelude.eqTup2(arr, arr1);
  if (scrut === true) {
    arr2 = [
      pid_,
      port,
      m_
    ];
    return arr2
  } else {
    arr3 = [
      pid_,
      port,
      m
    ];
    return arr3
  }
};
match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_40_38_35_31_79_tsni = function match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_40_38_35_31_79_tsni(pqr, pdr, _deforest_Deforest_Arr_6_0_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_1_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_2_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_3_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_4_inst_69_70_68_61_57_46_40_38_35_31_79_tsni, _deforest_Deforest_Arr_6_5_inst_69_70_68_61_57_46_40_38_35_31_79_tsni) {
  let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
  first0 = _deforest_Deforest_Arr_6_0_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  first1 = _deforest_Deforest_Arr_6_1_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  first2 = _deforest_Deforest_Arr_6_2_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  first3 = _deforest_Deforest_Arr_6_3_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  first4 = _deforest_Deforest_Arr_6_4_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  first5 = _deforest_Deforest_Arr_6_5_inst_69_70_68_61_57_46_40_38_35_31_79_tsni;
  p = first0;
  m = first1;
  ql = first2;
  dl = first3;
  qr = first4;
  dr = first5;
  tmp = pdr > 0;
  scrut = pqr && tmp;
  if (scrut === true) {
    arr = [
      p,
      m,
      ql,
      dl,
      qr,
      dr
    ];
    return arr
  } else {
    arr1 = [
      p,
      m,
      ql,
      dl,
      false,
      dr
    ];
    return arr1
  }
};
match_t_arm_Node_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni = function match_t_arm_Node_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_left_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni, _deforest_Node_right_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, tmp, arr, tmp1, arr1, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
  param0 = _deforest_Node_value_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni;
  param1 = _deforest_Node_left_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni;
  param2 = _deforest_Node_right_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni;
  x = param0;
  l = param1;
  r = param2;
  scrut = upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    lv = first0;
    l_ = first1;
    scrut1 = upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, r);
    if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
      first01 = scrut1[0];
      first11 = scrut1[1];
      rv = first01;
      r_ = first11;
      tmp = runtime.safeCall(f(lv, rv));
      arr = [
        lv,
        rv
      ];
      _deforest_Node_value = arr;
      _deforest_Node_left = l_;
      _deforest_Node_right = r_;
      tmp1 = (g, d) => {
        let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2;
        param01 = _deforest_Node_value;
        param11 = _deforest_Node_left;
        param21 = _deforest_Node_right;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first02 = param01[0];
          first12 = param01[1];
          lv1 = first02;
          rv1 = first12;
          l1 = param11;
          r1 = param21;
          scrut2 = runtime.safeCall(g(lv1, rv1, d));
          return runtime.safeCall(scrut2(g, l1, r1))
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        tmp,
        tmp1
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Nil_inst_69_70_68_61_58_87_tsni = function match_xs_arm_Nil_inst_69_70_68_61_58_87_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_69_70_68_61_57_46_42_tsni = function match_xs_arm_Cons_inst_69_70_68_61_57_46_42_tsni(ys, _deforest_Cons_head_inst_69_70_68_61_57_46_42_tsni, _deforest_Cons_tail_inst_69_70_68_61_57_46_42_tsni) {
  let param0, param1, x, xs;
  param0 = _deforest_Cons_head_inst_69_70_68_61_57_46_42_tsni;
  param1 = _deforest_Cons_tail_inst_69_70_68_61_57_46_42_tsni;
  x = param0;
  xs = param1;
  return runtime.safeCall(ys(x, xs))
};
match_xs_arm_default_inst_69_70_68_61_57_46_42_tsni = function match_xs_arm_default_inst_69_70_68_61_57_46_42_tsni(ys) {
  return (lscomp, state, pid_) => {
    return match_ls_arm_Nil_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_)
  }
};
match_first0_arm_Deforest_Arr_2_inst_69_70_68_61_57_46_41_tsni = function match_first0_arm_Deforest_Arr_2_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0_inst_69_70_68_61_57_46_41_tsni, _deforest_Deforest_Arr_2_1_inst_69_70_68_61_57_46_41_tsni) {
  let first11, first0, label, input_pid, value, scrut, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_69_70_68_61_57_46_41_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_69_70_68_61_57_46_41_tsni;
  label = first0;
  input_pid = first11;
  value = first1;
  scrut = pid_ == input_pid;
  if (scrut === true) {
    tmp = circsim.update_outports(state, value);
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    return lscomp(t)
  }
};
upsweep_inst_0_1_tsni = function upsweep_inst_0_1_tsni(f, t) {
  let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, a, tmp, arr, tmp1, arr1, tmp2, arr2, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Cell_value;
  if (t instanceof circsim.Cell.class) {
    param0 = t.value;
    a = param0;
    _deforest_Cell_value = a;
    tmp = (g, d) => {
      let param01, x1;
      param01 = _deforest_Cell_value;
      x1 = param01;
      return runtime.safeCall(circsim.Cell(d))
    };
    arr = [
      a,
      tmp
    ];
    return arr
  } else if (t instanceof circsim.Node.class) {
    param0 = t.value;
    param1 = t.left;
    param2 = t.right;
    x = param0;
    l = param1;
    r = param2;
    scrut = upsweep_inst_0_1_tsni(f, l);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      lv = first0;
      l_ = first1;
      scrut1 = upsweep_inst_0_1_tsni(f, r);
      if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
        first01 = scrut1[0];
        first11 = scrut1[1];
        rv = first01;
        r_ = first11;
        tmp1 = runtime.safeCall(f(lv, rv));
        arr1 = [
          lv,
          rv
        ];
        _deforest_Node_value = arr1;
        _deforest_Node_left = l_;
        _deforest_Node_right = r_;
        tmp2 = (g, d) => {
          let param01, param11, param21, first12, first02, lv1, rv1, l1, r1, scrut2, first13, first03, dl, dr, tmp3, tmp4;
          param01 = _deforest_Node_value;
          param11 = _deforest_Node_left;
          param21 = _deforest_Node_right;
          if (globalThis.Array.isArray(param01) && param01.length === 2) {
            first02 = param01[0];
            first12 = param01[1];
            lv1 = first02;
            rv1 = first12;
            l1 = param11;
            r1 = param21;
            scrut2 = runtime.safeCall(g(lv1, rv1, d));
            if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
              first03 = scrut2[0];
              first13 = scrut2[1];
              dl = first03;
              dr = first13;
              tmp3 = downsweep_inst_0_5_tsni(g, dl, l1);
              tmp4 = downsweep_inst_0_5_tsni(g, dr, r1);
              return runtime.safeCall(circsim.Node(circsim.Unit, tmp3, tmp4))
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        arr2 = [
          tmp1,
          tmp2
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
sweep_ud_inst_2_3_tsni = function sweep_ud_inst_2_3_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_2_3_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_2_3_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = () => {
      let first11, first01, up_ans, t_1, tmp1, arr1;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      up_ans = first01;
      t_1 = first11;
      tmp1 = get_inst_2_71_tsni(t_1);
      arr1 = [
        up_ans,
        tmp1
      ];
      return arr1
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_2_3_1_tsni = function upsweep_inst_2_3_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_2_4_tsni = function put_inst_2_4_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_2_4_tsni(fstHalf);
        tmp3 = put_inst_2_4_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_2_3_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_2_4_tsni(fstHalf);
      tmp7 = put_inst_2_4_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_2_3_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_2_3_5_tsni = function downsweep_inst_2_3_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
sweep_ud_inst_6_7_tsni = function sweep_ud_inst_6_7_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_6_7_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_6_7_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = () => {
      let first11, first01, up_ans, t_1, tmp1, arr1;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      up_ans = first01;
      t_1 = first11;
      tmp1 = get_inst_6_72_tsni(t_1);
      arr1 = [
        up_ans,
        tmp1
      ];
      return arr1
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_6_7_1_tsni = function upsweep_inst_6_7_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_6_8_tsni = function put_inst_6_8_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_6_8_tsni(fstHalf);
        tmp3 = put_inst_6_8_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_6_7_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_6_8_tsni(fstHalf);
      tmp7 = put_inst_6_8_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_6_7_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_6_7_5_tsni = function downsweep_inst_6_7_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
sweep_ud_inst_9_10_tsni = function sweep_ud_inst_9_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_9_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_9_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_9_73_tsni(t_1);
        arr2 = [
          ans1,
          tmp3
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_9_10_1_tsni = function upsweep_inst_9_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_9_11_tsni = function put_inst_9_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_9_11_tsni(fstHalf);
        tmp3 = put_inst_9_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_9_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_9_11_tsni(fstHalf);
      tmp7 = put_inst_9_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_9_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_9_10_5_tsni = function downsweep_inst_9_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
scanlr_inst_12_13_tsni = function scanlr_inst_12_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_12_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_12_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_12_13_73_tsni(l1);
              tmp7 = get_inst_12_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_12_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_12_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_12_13_10_tsni = function sweep_ud_inst_12_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_12_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_12_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_12_13_73_tsni(t_1);
        arr2 = [
          ans1,
          tmp3
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_12_13_10_1_tsni = function upsweep_inst_12_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_12_13_10_5_tsni = function downsweep_inst_12_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_12_13_11_tsni = function put_inst_12_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_12_13_11_tsni(fstHalf);
        tmp3 = put_inst_12_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_12_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_12_13_11_tsni(fstHalf);
      tmp7 = put_inst_12_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_12_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_16_17_tsni = function map_inst_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_16_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_16_18_tsni = function map_inst_16_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_16_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_16_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_16_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_16_19_tsni = function map_inst_16_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
compare_and_update_inst_21_22_tsni = function compare_and_update_inst_21_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_23_24_tsni = function up_i_inst_23_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_23_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_23_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_23_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_23_24_22_tsni(arr, x)
    });
    return map_inst_23_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_23_24_22_tsni = function compare_and_update_inst_23_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_23_25_tsni = function up_i_inst_23_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_23_25_22_tsni(arr, x)
    });
    return map_inst_23_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_24_26_tsni = function map_inst_23_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_23_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_27_28_tsni = function check_right_inst_27_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_27_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_27_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_29_30_tsni = function update_i_inst_29_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_29_30_24_tsni(r, ins);
    return up_i_inst_29_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_29_30_25_tsni = function up_i_inst_29_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_29_30_25_22_tsni(arr, x)
    });
    return map_inst_29_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_29_30_24_tsni = function up_i_inst_29_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_29_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_29_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_29_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_29_30_24_22_tsni(arr, x)
    });
    return map_inst_29_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_29_30_24_22_tsni = function compare_and_update_inst_29_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_29_30_24_26_tsni = function map_inst_29_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_29_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_29_31_tsni = function update_o_inst_29_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_29_31_28_tsni(rp, out_);
    return check_left_inst_29_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_29_31_28_tsni = function check_right_inst_29_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_29_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_29_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_32_33_tsni = function map_inst_32_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_32_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_32_34_tsni = function send_inst_32_34_tsni(xs) {
  return scanlr_inst_32_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_32_34_13_tsni = function scanlr_inst_32_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_32_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_32_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_32_34_13_73_tsni(l1);
              tmp7 = get_inst_32_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_32_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_32_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_32_34_13_10_tsni = function sweep_ud_inst_32_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_32_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_32_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_32_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_32_34_13_10_1_tsni = function upsweep_inst_32_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_32_34_13_11_tsni = function put_inst_32_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_32_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_32_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_32_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_32_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_32_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_32_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_32_34_13_10_5_tsni = function downsweep_inst_32_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_32_35_tsni = function update_io_inst_32_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_32_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_32_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_32_35_31_tsni = function update_o_inst_32_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_32_35_31_28_tsni(rp, out_);
    return check_left_inst_32_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_32_35_31_28_tsni = function check_right_inst_32_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_32_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_32_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_32_35_30_tsni = function update_i_inst_32_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_32_35_30_24_tsni(r, ins);
    return up_i_inst_32_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_32_35_30_24_tsni = function up_i_inst_32_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_32_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_32_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_32_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_32_35_30_24_22_tsni(arr, x)
    });
    return map_inst_32_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_32_35_30_24_22_tsni = function compare_and_update_inst_32_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_32_35_30_25_tsni = function up_i_inst_32_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_32_35_30_25_22_tsni(arr, x)
    });
    return map_inst_32_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_32_35_30_24_26_tsni = function map_inst_32_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_32_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_36_37_tsni = function acknowledge_inst_36_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_36_37_17_tsni(check_lr_requests, xs);
    return orList_inst_36_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_36_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_36_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_36_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_36_37_19_tsni = function map_inst_36_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_36_37_18_tsni = function map_inst_36_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_36_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_36_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_36_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_36_37_17_tsni = function map_inst_36_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_36_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_36_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_36_38_tsni = function do_send_inst_36_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_36_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_36_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_36_38_34_tsni(x);
    return snd_inst_36_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_36_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_36_38_35_tsni = function update_io_inst_36_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_36_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_36_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_36_38_35_30_tsni = function update_i_inst_36_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_36_38_35_30_24_tsni(r, ins);
    return up_i_inst_36_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_36_38_35_30_25_tsni = function up_i_inst_36_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_36_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_36_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_36_38_35_30_24_tsni = function up_i_inst_36_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_36_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_36_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_36_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_36_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_36_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_36_38_35_30_24_22_tsni = function compare_and_update_inst_36_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_36_38_35_30_24_26_tsni = function map_inst_36_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_36_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_36_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_36_38_35_31_tsni = function update_o_inst_36_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_36_38_35_31_28_tsni(rp, out_);
    return check_left_inst_36_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_36_38_35_31_28_tsni = function check_right_inst_36_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_36_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_36_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_36_38_34_tsni = function send_inst_36_38_34_tsni(xs) {
  return scanlr_inst_36_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_36_38_34_13_tsni = function scanlr_inst_36_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_36_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_36_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_36_38_34_13_73_tsni(l1);
              tmp7 = get_inst_36_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_36_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_36_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_36_38_34_13_10_tsni = function sweep_ud_inst_36_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_36_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_36_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_36_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_36_38_34_13_10_1_tsni = function upsweep_inst_36_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_36_38_34_13_10_5_tsni = function downsweep_inst_36_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_36_38_34_13_11_tsni = function put_inst_36_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_36_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_36_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_36_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_36_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_36_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_36_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_36_38_33_tsni = function map_inst_36_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_36_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_36_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_sends_inst_39_40_tsni = function do_sends_inst_39_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_39_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_39_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_39_40_38_tsni = function do_send_inst_39_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_39_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_39_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_39_40_38_34_tsni(x);
    return snd_inst_39_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_39_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_39_40_38_33_tsni = function map_inst_39_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_39_40_38_34_tsni = function send_inst_39_40_38_34_tsni(xs) {
  return scanlr_inst_39_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_39_40_38_34_13_tsni = function scanlr_inst_39_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_39_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_39_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_39_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_39_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_39_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_39_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_39_40_38_34_13_10_tsni = function sweep_ud_inst_39_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_39_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_39_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_39_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_39_40_38_34_13_10_1_tsni = function upsweep_inst_39_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_39_40_38_34_13_11_tsni = function put_inst_39_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_39_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_39_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_39_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_39_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_39_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_39_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_39_40_38_34_13_10_5_tsni = function downsweep_inst_39_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_39_40_38_35_tsni = function update_io_inst_39_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_39_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_39_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_39_40_38_35_31_tsni = function update_o_inst_39_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_39_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_39_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_39_40_38_35_31_28_tsni = function check_right_inst_39_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_39_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_39_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_39_40_38_35_30_tsni = function update_i_inst_39_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_39_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_39_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_39_40_38_35_30_24_tsni = function up_i_inst_39_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_39_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_39_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_39_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_39_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_39_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_39_40_38_35_30_24_22_tsni = function compare_and_update_inst_39_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_39_40_38_35_30_25_tsni = function up_i_inst_39_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_39_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_39_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_40_38_35_30_24_26_tsni = function map_inst_39_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_39_40_37_tsni = function acknowledge_inst_39_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_39_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_39_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_39_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_39_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_39_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_39_40_37_17_tsni = function map_inst_39_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_39_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_40_37_18_tsni = function map_inst_39_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_39_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_40_37_19_tsni = function map_inst_39_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
store_inputs_inst_39_41_tsni = function store_inputs_inst_39_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return head_inst_39_41_75_tsni(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
zip_inst_39_42_tsni = function zip_inst_39_42_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0, first11, first01, label, input_pid, value, scrut, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (globalThis.Array.isArray(first0) && first0.length === 2) {
          first01 = first0[0];
          first11 = first0[1];
          label = first01;
          input_pid = first11;
          value = first1;
          scrut = pid_ == input_pid;
          if (scrut === true) {
            tmp1 = circsim.update_outports(state, value);
            tmp2 = lscomp(t);
            _deforest_Cons_head1 = tmp1;
            _deforest_Cons_tail1 = tmp2;
            return () => {
              let param02, param12, h, t1;
              param02 = _deforest_Cons_head1;
              param12 = _deforest_Cons_tail1;
              h = param02;
              t1 = param12;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          return lscomp(t)
        }
      };
      tmp = zip_inst_39_42_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (lscomp, state, pid_) => {
        let param02, param12, h, t;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        h = param02;
        t = param12;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    } else {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_39_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    return (lscomp, state, pid_) => {
      return match_ls_arm_Nil_inst_39_41_tsni(lscomp, state, pid_)
    }
  }
};
do_sends_inst_39_43_tsni = function do_sends_inst_39_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_39_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_39_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_39_43_38_tsni = function do_send_inst_39_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_39_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_39_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_39_43_38_34_tsni(x);
    return snd_inst_39_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_39_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_39_43_38_33_tsni = function map_inst_39_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_39_43_38_34_tsni = function send_inst_39_43_38_34_tsni(xs) {
  return scanlr_inst_39_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_39_43_38_34_13_tsni = function scanlr_inst_39_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_39_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_39_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_39_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_39_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_39_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_39_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_39_43_38_34_13_10_tsni = function sweep_ud_inst_39_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_39_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_39_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_39_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_39_43_38_34_13_10_1_tsni = function upsweep_inst_39_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_39_43_38_34_13_11_tsni = function put_inst_39_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_39_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_39_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_39_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_39_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_39_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_39_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_39_43_38_34_13_10_5_tsni = function downsweep_inst_39_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_39_43_38_35_tsni = function update_io_inst_39_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_39_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_39_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_39_43_38_35_31_tsni = function update_o_inst_39_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_39_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_39_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_39_43_38_35_31_28_tsni = function check_right_inst_39_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_39_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_39_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_39_43_38_35_30_tsni = function update_i_inst_39_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_39_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_39_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_39_43_38_35_30_24_tsni = function up_i_inst_39_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_39_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_39_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_39_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_39_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_39_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_39_43_38_35_30_24_22_tsni = function compare_and_update_inst_39_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_39_43_38_35_30_25_tsni = function up_i_inst_39_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_39_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_39_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_43_38_35_30_24_26_tsni = function map_inst_39_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_39_43_37_tsni = function acknowledge_inst_39_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_39_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_39_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_39_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_39_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_39_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_39_43_37_17_tsni = function map_inst_39_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_39_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_43_37_18_tsni = function map_inst_39_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_39_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_43_37_19_tsni = function map_inst_39_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_39_44_tsni = function enumFromTo_inst_39_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_39_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_39_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
do_cycle_inst_45_46_tsni = function do_cycle_inst_45_46_tsni(cpd, tp4, inputs) {
  let sim_then_send, first3, first2, first1, first0, size, ins, outs, states, states1, states2, states3, states4, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
  sim_then_send = function sim_then_send(state, d) {
    let tmp5;
    tmp5 = circsim.simulate_components(d, state);
    return do_sends_inst_45_46_40_tsni(d, tmp5)
  };
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (s) {
      let tmp5;
      tmp5 = zip_inst_45_46_42_tsni(ins, inputs);
      return store_inputs_inst_45_46_41_tsni(tmp5, s)
    });
    tmp = NofibPrelude.map(lambda, states);
    states1 = tmp;
    tmp1 = do_sends_inst_45_46_43_tsni(0, states1);
    states2 = tmp1;
    tmp2 = enumFromTo_inst_45_46_44_tsni(1, cpd);
    tmp3 = foldl_inst_45_46_82_tsni(sim_then_send, states2, tmp2);
    states3 = tmp3;
    tmp4 = circsim.restore_requests(states, states3);
    states4 = tmp4;
    arr = [
      size,
      ins,
      outs,
      states4
    ];
    return arr
  } else {
    throw globalThis.Error(tp4);
  }
};
enumFromTo_inst_45_46_44_tsni = function enumFromTo_inst_45_46_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_46_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_45_46_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
do_sends_inst_45_46_43_tsni = function do_sends_inst_45_46_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_45_46_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_45_46_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_45_46_43_37_tsni = function acknowledge_inst_45_46_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_45_46_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_45_46_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_45_46_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_45_46_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_45_46_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_45_46_43_37_19_tsni = function map_inst_45_46_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_45_46_43_37_18_tsni = function map_inst_45_46_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_45_46_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_45_46_43_37_17_tsni = function map_inst_45_46_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_45_46_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_45_46_43_38_tsni = function do_send_inst_45_46_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_45_46_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_45_46_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_45_46_43_38_34_tsni(x);
    return snd_inst_45_46_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_45_46_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_45_46_43_38_35_tsni = function update_io_inst_45_46_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_45_46_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_45_46_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_45_46_43_38_35_30_tsni = function update_i_inst_45_46_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_45_46_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_45_46_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_45_46_43_38_35_30_25_tsni = function up_i_inst_45_46_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_45_46_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_45_46_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_45_46_43_38_35_30_24_tsni = function up_i_inst_45_46_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_45_46_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_45_46_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_45_46_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_45_46_43_38_35_30_24_22_tsni = function compare_and_update_inst_45_46_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_45_46_43_38_35_30_24_26_tsni = function map_inst_45_46_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_45_46_43_38_35_31_tsni = function update_o_inst_45_46_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_45_46_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_45_46_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_45_46_43_38_35_31_28_tsni = function check_right_inst_45_46_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_45_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_45_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_45_46_43_38_34_tsni = function send_inst_45_46_43_38_34_tsni(xs) {
  return scanlr_inst_45_46_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_45_46_43_38_34_13_tsni = function scanlr_inst_45_46_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_45_46_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_45_46_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_45_46_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_45_46_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_45_46_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_45_46_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_45_46_43_38_34_13_10_tsni = function sweep_ud_inst_45_46_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_45_46_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_45_46_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_45_46_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_45_46_43_38_34_13_10_1_tsni = function upsweep_inst_45_46_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_45_46_43_38_34_13_10_5_tsni = function downsweep_inst_45_46_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_45_46_43_38_34_13_11_tsni = function put_inst_45_46_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_45_46_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_45_46_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_45_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_45_46_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_45_46_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_45_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_45_46_43_38_33_tsni = function map_inst_45_46_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
store_inputs_inst_45_46_41_tsni = function store_inputs_inst_45_46_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return head_inst_45_46_41_75_tsni(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
zip_inst_45_46_42_tsni = function zip_inst_45_46_42_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0, first11, first01, label, input_pid, value, scrut, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (globalThis.Array.isArray(first0) && first0.length === 2) {
          first01 = first0[0];
          first11 = first0[1];
          label = first01;
          input_pid = first11;
          value = first1;
          scrut = pid_ == input_pid;
          if (scrut === true) {
            tmp1 = circsim.update_outports(state, value);
            tmp2 = lscomp(t);
            _deforest_Cons_head1 = tmp1;
            _deforest_Cons_tail1 = tmp2;
            return () => {
              let param02, param12, h, t1;
              param02 = _deforest_Cons_head1;
              param12 = _deforest_Cons_tail1;
              h = param02;
              t1 = param12;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          return lscomp(t)
        }
      };
      tmp = zip_inst_45_46_42_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (lscomp, state, pid_) => {
        let param02, param12, h, t;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        h = param02;
        t = param12;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    } else {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_45_46_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    return (lscomp, state, pid_) => {
      return match_ls_arm_Nil_inst_45_46_41_tsni(lscomp, state, pid_)
    }
  }
};
do_sends_inst_45_46_40_tsni = function do_sends_inst_45_46_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_45_46_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_45_46_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_45_46_40_37_tsni = function acknowledge_inst_45_46_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_45_46_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_45_46_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_45_46_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_45_46_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_45_46_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_45_46_40_37_19_tsni = function map_inst_45_46_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_45_46_40_37_18_tsni = function map_inst_45_46_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_45_46_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_45_46_40_37_17_tsni = function map_inst_45_46_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_45_46_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_45_46_40_38_tsni = function do_send_inst_45_46_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_45_46_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_45_46_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_45_46_40_38_34_tsni(x);
    return snd_inst_45_46_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_45_46_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_45_46_40_38_35_tsni = function update_io_inst_45_46_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_45_46_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_45_46_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_45_46_40_38_35_30_tsni = function update_i_inst_45_46_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_45_46_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_45_46_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_45_46_40_38_35_30_25_tsni = function up_i_inst_45_46_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_45_46_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_45_46_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_45_46_40_38_35_30_24_tsni = function up_i_inst_45_46_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_45_46_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_45_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_45_46_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_45_46_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_45_46_40_38_35_30_24_22_tsni = function compare_and_update_inst_45_46_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_45_46_40_38_35_30_24_26_tsni = function map_inst_45_46_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_45_46_40_38_35_31_tsni = function update_o_inst_45_46_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_45_46_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_45_46_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_45_46_40_38_35_31_28_tsni = function check_right_inst_45_46_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_45_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_45_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_45_46_40_38_34_tsni = function send_inst_45_46_40_38_34_tsni(xs) {
  return scanlr_inst_45_46_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_45_46_40_38_34_13_tsni = function scanlr_inst_45_46_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_45_46_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_45_46_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_45_46_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_45_46_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_45_46_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_45_46_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_45_46_40_38_34_13_10_tsni = function sweep_ud_inst_45_46_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_45_46_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_45_46_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_45_46_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_45_46_40_38_34_13_10_1_tsni = function upsweep_inst_45_46_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_45_46_40_38_34_13_10_5_tsni = function downsweep_inst_45_46_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_45_46_40_38_34_13_11_tsni = function put_inst_45_46_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_45_46_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_45_46_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_45_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_45_46_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_45_46_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_45_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_45_46_40_38_33_tsni = function map_inst_45_46_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_46_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_47_48_tsni = function enumFromTo_inst_47_48_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_47_48_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_47_66_tsni(f1, xs1, ys);
        return NofibPrelude.Cons(tmp4, tmp5)
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_47_49_tsni = function map_inst_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_47_50_tsni = function enumFromTo_inst_47_50_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_47_50_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_47_51_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_47_65_tsni(f1, xs1, ys);
        return NofibPrelude.Cons(tmp4, tmp5)
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_47_51_tsni = function map_inst_47_51_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_47_52_tsni = function enumFromTo_inst_47_52_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_47_52_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_47_53_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_47_54_tsni(f1, xs);
        _deforest_Cons_head2 = tmp2;
        _deforest_Cons_tail2 = tmp3;
        return () => {
          let param01, param11, x1, xs1, tmp4;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs1 = param11;
          tmp4 = concat_inst_47_84_tsni(xs1);
          return append_inst_47_84_85_tsni(x1, tmp4)
        }
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_47_53_tsni = function map_inst_47_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_47_54_tsni = function map_inst_47_54_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
reg_inst_47_55_tsni = function reg_inst_47_55_tsni(sto, n) {
  let arr, tmp, tmp1, tmp2, tmp3, arr1, tmp4, arr2, tmp5, tmp6, tmp7, arr3, tmp8, arr4, tmp9, tmp10, tmp11, tmp12, arr5, tmp13, arr6, tmp14, tmp15, arr7, tmp16, tmp17, tmp18, arr8, arr9, tmp19, tmp20, arr10, tmp21, tmp22, tmp23, tmp24, arr11, tmp25, arr12, tmp26, tmp27, arr13, tmp28, tmp29, tmp30, tmp31, arr14, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  arr = [
    0,
    circsim.F,
    false,
    0,
    true,
    4
  ];
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  tmp1 = runtime.safeCall(circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp));
  tmp2 = n + 1;
  tmp3 = n + 5;
  arr1 = [
    tmp3,
    0,
    circsim.F
  ];
  tmp4 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  arr2 = [
    0,
    circsim.F,
    false,
    0,
    true,
    5
  ];
  tmp5 = NofibPrelude.Cons(arr2, NofibPrelude.Nil);
  tmp6 = runtime.safeCall(circsim.PS(tmp2, circsim.Dff, 1, tmp4, tmp5));
  tmp7 = n + 2;
  arr3 = [
    sto,
    0,
    circsim.F
  ];
  tmp8 = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
  arr4 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp9 = NofibPrelude.Cons(arr4, NofibPrelude.Nil);
  tmp10 = runtime.safeCall(circsim.PS(tmp7, circsim.Inv, 1, tmp8, tmp9));
  tmp11 = n + 3;
  tmp12 = n + 1;
  arr5 = [
    tmp12,
    0,
    circsim.F
  ];
  tmp13 = n + 2;
  arr6 = [
    tmp13,
    0,
    circsim.F
  ];
  tmp14 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(arr5, tmp14);
  arr7 = [
    0,
    circsim.F,
    false,
    0,
    true,
    2
  ];
  tmp16 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
  tmp17 = runtime.safeCall(circsim.PS(tmp11, circsim.And2, 2, tmp15, tmp16));
  tmp18 = n + 4;
  arr8 = [
    sto,
    0,
    circsim.F
  ];
  arr9 = [
    n,
    0,
    circsim.F
  ];
  tmp19 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
  tmp20 = NofibPrelude.Cons(arr8, tmp19);
  arr10 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp21 = NofibPrelude.Cons(arr10, NofibPrelude.Nil);
  tmp22 = runtime.safeCall(circsim.PS(tmp18, circsim.And2, 1, tmp20, tmp21));
  tmp23 = n + 5;
  tmp24 = n + 3;
  arr11 = [
    tmp24,
    0,
    circsim.F
  ];
  tmp25 = n + 4;
  arr12 = [
    tmp25,
    0,
    circsim.F
  ];
  tmp26 = NofibPrelude.Cons(arr12, NofibPrelude.Nil);
  tmp27 = NofibPrelude.Cons(arr11, tmp26);
  arr13 = [
    0,
    circsim.F,
    true,
    4,
    false,
    0
  ];
  tmp28 = NofibPrelude.Cons(arr13, NofibPrelude.Nil);
  tmp29 = runtime.safeCall(circsim.PS(tmp23, circsim.Or2, 3, tmp27, tmp28));
  tmp30 = n + 6;
  tmp31 = n + 1;
  arr14 = [
    tmp31,
    0,
    circsim.F
  ];
  tmp32 = NofibPrelude.Cons(arr14, NofibPrelude.Nil);
  tmp33 = runtime.safeCall(circsim.PS(tmp30, circsim.Outp, 4, tmp32, NofibPrelude.Nil));
  _deforest_Cons_head6 = tmp33;
  _deforest_Cons_tail6 = (ys) => {
    return ys
  };
  tmp34 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp29;
  _deforest_Cons_tail5 = tmp34;
  tmp35 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp22;
  _deforest_Cons_tail4 = tmp35;
  tmp36 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp17;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp10;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp6;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp39;
  return (ys) => {
    return match_xs_arm_Cons_inst_47_84_85_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
simulate_inst_56_57_tsni = function simulate_inst_56_57_tsni(inputs_list, b) {
  let first3, first2, first1, first0, size, ins, outs, states, tmp, tmp1, arr, tmp2, lambda;
  if (globalThis.Array.isArray(b) && b.length === 4) {
    first0 = b[0];
    first1 = b[1];
    first2 = b[2];
    first3 = b[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (x, y) {
      let arr1, tmp3, _deforest_Deforest_Arr_4_0, _deforest_Deforest_Arr_4_1, _deforest_Deforest_Arr_4_2, _deforest_Deforest_Arr_4_3;
      _deforest_Deforest_Arr_4_0 = size;
      _deforest_Deforest_Arr_4_1 = ins;
      _deforest_Deforest_Arr_4_2 = outs;
      _deforest_Deforest_Arr_4_3 = states;
      arr1 = () => {
        let first31, first21, first11, first01, size1, ins1, outs1, states1, tmp4;
        first01 = _deforest_Deforest_Arr_4_0;
        first11 = _deforest_Deforest_Arr_4_1;
        first21 = _deforest_Deforest_Arr_4_2;
        first31 = _deforest_Deforest_Arr_4_3;
        size1 = first01;
        ins1 = first11;
        outs1 = first21;
        states1 = first31;
        tmp4 = NofibPrelude.map(circsim.pathDepth, states1);
        return NofibPrelude.maximum(tmp4)
      };
      tmp3 = critical_path_depth_inst_56_57_83_tsni(arr1);
      return do_cycle_inst_56_57_46_tsni(tmp3, x, y)
    });
    tmp = lambda;
    tmp1 = NofibPrelude.map(circsim.init_dffs, states);
    arr = [
      size,
      ins,
      outs,
      tmp1
    ];
    tmp2 = NofibPrelude.scanl(tmp, arr, inputs_list);
    return NofibPrelude.tail(tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
do_cycle_inst_56_57_46_tsni = function do_cycle_inst_56_57_46_tsni(cpd, tp4, inputs) {
  let sim_then_send, first3, first2, first1, first0, size, ins, outs, states, states1, states2, states3, states4, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
  sim_then_send = function sim_then_send(state, d) {
    let tmp5;
    tmp5 = circsim.simulate_components(d, state);
    return do_sends_inst_56_57_46_40_tsni(d, tmp5)
  };
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (s) {
      let tmp5;
      tmp5 = zip_inst_56_57_46_42_tsni(ins, inputs);
      return store_inputs_inst_56_57_46_41_tsni(tmp5, s)
    });
    tmp = NofibPrelude.map(lambda, states);
    states1 = tmp;
    tmp1 = do_sends_inst_56_57_46_43_tsni(0, states1);
    states2 = tmp1;
    tmp2 = enumFromTo_inst_56_57_46_44_tsni(1, cpd);
    tmp3 = foldl_inst_56_57_46_82_tsni(sim_then_send, states2, tmp2);
    states3 = tmp3;
    tmp4 = circsim.restore_requests(states, states3);
    states4 = tmp4;
    arr = [
      size,
      ins,
      outs,
      states4
    ];
    return arr
  } else {
    throw globalThis.Error(tp4);
  }
};
do_sends_inst_56_57_46_40_tsni = function do_sends_inst_56_57_46_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_56_57_46_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_56_57_46_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_56_57_46_40_38_tsni = function do_send_inst_56_57_46_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_56_57_46_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_56_57_46_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_56_57_46_40_38_34_tsni(x);
    return snd_inst_56_57_46_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_56_57_46_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_56_57_46_40_38_33_tsni = function map_inst_56_57_46_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_56_57_46_40_38_34_tsni = function send_inst_56_57_46_40_38_34_tsni(xs) {
  return scanlr_inst_56_57_46_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_56_57_46_40_38_34_13_tsni = function scanlr_inst_56_57_46_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_56_57_46_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_56_57_46_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_56_57_46_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_56_57_46_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_56_57_46_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_56_57_46_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_56_57_46_40_38_34_13_10_tsni = function sweep_ud_inst_56_57_46_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_56_57_46_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_56_57_46_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_56_57_46_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_56_57_46_40_38_34_13_10_1_tsni = function upsweep_inst_56_57_46_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_56_57_46_40_38_34_13_11_tsni = function put_inst_56_57_46_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_56_57_46_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_56_57_46_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_56_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_56_57_46_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_56_57_46_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_56_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_56_57_46_40_38_34_13_10_5_tsni = function downsweep_inst_56_57_46_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_56_57_46_40_38_35_tsni = function update_io_inst_56_57_46_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_56_57_46_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_56_57_46_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_56_57_46_40_38_35_31_tsni = function update_o_inst_56_57_46_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_56_57_46_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_56_57_46_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_56_57_46_40_38_35_31_28_tsni = function check_right_inst_56_57_46_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_56_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_56_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_56_57_46_40_38_35_30_tsni = function update_i_inst_56_57_46_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_56_57_46_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_56_57_46_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_56_57_46_40_38_35_30_24_tsni = function up_i_inst_56_57_46_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_56_57_46_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_56_57_46_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_56_57_46_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_56_57_46_40_38_35_30_24_22_tsni = function compare_and_update_inst_56_57_46_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_56_57_46_40_38_35_30_25_tsni = function up_i_inst_56_57_46_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_56_57_46_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_56_57_46_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_40_38_35_30_24_26_tsni = function map_inst_56_57_46_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_56_57_46_40_37_tsni = function acknowledge_inst_56_57_46_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_56_57_46_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_56_57_46_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_56_57_46_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_56_57_46_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_56_57_46_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_56_57_46_40_37_17_tsni = function map_inst_56_57_46_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_56_57_46_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_40_37_18_tsni = function map_inst_56_57_46_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_56_57_46_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_40_37_19_tsni = function map_inst_56_57_46_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
store_inputs_inst_56_57_46_41_tsni = function store_inputs_inst_56_57_46_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return head_inst_56_57_46_41_75_tsni(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
zip_inst_56_57_46_42_tsni = function zip_inst_56_57_46_42_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0, first11, first01, label, input_pid, value, scrut, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (globalThis.Array.isArray(first0) && first0.length === 2) {
          first01 = first0[0];
          first11 = first0[1];
          label = first01;
          input_pid = first11;
          value = first1;
          scrut = pid_ == input_pid;
          if (scrut === true) {
            tmp1 = circsim.update_outports(state, value);
            tmp2 = lscomp(t);
            _deforest_Cons_head1 = tmp1;
            _deforest_Cons_tail1 = tmp2;
            return () => {
              let param02, param12, h, t1;
              param02 = _deforest_Cons_head1;
              param12 = _deforest_Cons_tail1;
              h = param02;
              t1 = param12;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          return lscomp(t)
        }
      };
      tmp = zip_inst_56_57_46_42_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (lscomp, state, pid_) => {
        let param02, param12, h, t;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        h = param02;
        t = param12;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    } else {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_56_57_46_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    return (lscomp, state, pid_) => {
      return match_ls_arm_Nil_inst_56_57_46_41_tsni(lscomp, state, pid_)
    }
  }
};
do_sends_inst_56_57_46_43_tsni = function do_sends_inst_56_57_46_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_56_57_46_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_56_57_46_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_56_57_46_43_38_tsni = function do_send_inst_56_57_46_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_56_57_46_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_56_57_46_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_56_57_46_43_38_34_tsni(x);
    return snd_inst_56_57_46_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_56_57_46_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_56_57_46_43_38_33_tsni = function map_inst_56_57_46_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_56_57_46_43_38_34_tsni = function send_inst_56_57_46_43_38_34_tsni(xs) {
  return scanlr_inst_56_57_46_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_56_57_46_43_38_34_13_tsni = function scanlr_inst_56_57_46_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_56_57_46_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_56_57_46_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_56_57_46_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_56_57_46_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_56_57_46_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_56_57_46_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_56_57_46_43_38_34_13_10_tsni = function sweep_ud_inst_56_57_46_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_56_57_46_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_56_57_46_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_56_57_46_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_56_57_46_43_38_34_13_10_1_tsni = function upsweep_inst_56_57_46_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_56_57_46_43_38_34_13_11_tsni = function put_inst_56_57_46_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_56_57_46_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_56_57_46_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_56_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_56_57_46_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_56_57_46_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_56_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_56_57_46_43_38_34_13_10_5_tsni = function downsweep_inst_56_57_46_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_56_57_46_43_38_35_tsni = function update_io_inst_56_57_46_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_56_57_46_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_56_57_46_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_56_57_46_43_38_35_31_tsni = function update_o_inst_56_57_46_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_56_57_46_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_56_57_46_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_56_57_46_43_38_35_31_28_tsni = function check_right_inst_56_57_46_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_56_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_56_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_56_57_46_43_38_35_30_tsni = function update_i_inst_56_57_46_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_56_57_46_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_56_57_46_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_56_57_46_43_38_35_30_24_tsni = function up_i_inst_56_57_46_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_56_57_46_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_56_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_56_57_46_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_56_57_46_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_56_57_46_43_38_35_30_24_22_tsni = function compare_and_update_inst_56_57_46_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_56_57_46_43_38_35_30_25_tsni = function up_i_inst_56_57_46_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_56_57_46_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_56_57_46_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_43_38_35_30_24_26_tsni = function map_inst_56_57_46_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_56_57_46_43_37_tsni = function acknowledge_inst_56_57_46_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_56_57_46_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_56_57_46_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_56_57_46_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_56_57_46_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_56_57_46_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_56_57_46_43_37_17_tsni = function map_inst_56_57_46_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_56_57_46_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_43_37_18_tsni = function map_inst_56_57_46_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_56_57_46_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_56_57_46_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_56_57_46_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_56_57_46_43_37_19_tsni = function map_inst_56_57_46_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_56_57_46_44_tsni = function enumFromTo_inst_56_57_46_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_56_57_46_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_56_57_46_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
collect_outputs_inst_56_58_tsni = function collect_outputs_inst_56_58_tsni(tp4) {
  let thrid, get_output, first3, first2, first1, first0, size, ins, outs, states, lambda;
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    thrid = function thrid(tp3) {
      let first21, first11, first01, v;
      if (globalThis.Array.isArray(tp3) && tp3.length === 3) {
        first01 = tp3[0];
        first11 = tp3[1];
        first21 = tp3[2];
        v = first21;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    };
    get_output = function get_output(states1, label_p) {
      let lscomp, first11, first01, label, p, tmp, tmp1;
      if (globalThis.Array.isArray(label_p) && label_p.length === 2) {
        first01 = label_p[0];
        first11 = label_p[1];
        label = first01;
        p = first11;
        lscomp = function lscomp(ls) {
          let param0, param1, s, t, scrut, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
          if (ls instanceof NofibPrelude.Nil.class) {
            return () => {
              throw new globalThis.Error("match error");
            }
          } else if (ls instanceof NofibPrelude.Cons.class) {
            param0 = ls.head;
            param1 = ls.tail;
            s = param0;
            t = param1;
            tmp2 = circsim.pid(s);
            scrut = p == tmp2;
            if (scrut === true) {
              tmp3 = circsim.inports(s);
              tmp4 = NofibPrelude.head(tmp3);
              tmp5 = lscomp(t);
              _deforest_Cons_head = tmp4;
              _deforest_Cons_tail = tmp5;
              return () => {
                let param01, param11, h, t1;
                param01 = _deforest_Cons_head;
                param11 = _deforest_Cons_tail;
                h = param01;
                t1 = param11;
                return h
              }
            } else {
              return lscomp(t)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp = lscomp(states1);
        tmp1 = head_inst_56_58_74_tsni(tmp);
        return thrid(tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (p) {
      return get_output(states, p)
    });
    return NofibPrelude.map(lambda, outs)
  } else {
    throw new globalThis.Error("match error");
  }
};
regs_inst_59_60_tsni = function regs_inst_59_60_tsni(bits) {
  let ilabel, olabel, is_, os, sto, states, arr, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr1, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, arr2, lambda, lambda1, lambda2, lambda3, _deforest_Deforest_Arr_4_0, _deforest_Deforest_Arr_4_1, _deforest_Deforest_Arr_4_2, _deforest_Deforest_Arr_4_3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  ilabel = function ilabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("x", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (lscomp, state, pid_1, t, first1) => {
      return match_first0_arm_Deforest_Arr_2_inst_59_61_57_46_41_tsni(lscomp, state, pid_1, t, first1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr3
  };
  olabel = function olabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("y", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (thrid, states1) => {
      let lscomp, first1, first0, label, p, tmp26, tmp27;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      label = first0;
      p = first1;
      lscomp = function lscomp(ls) {
        let param0, param1, s, t, scrut, tmp28, tmp29, tmp30, tmp31, _deforest_Cons_head1, _deforest_Cons_tail1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return () => {
            throw new globalThis.Error("match error");
          }
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          s = param0;
          t = param1;
          tmp28 = circsim.pid(s);
          scrut = p == tmp28;
          if (scrut === true) {
            tmp29 = circsim.inports(s);
            tmp30 = NofibPrelude.head(tmp29);
            tmp31 = lscomp(t);
            _deforest_Cons_head1 = tmp30;
            _deforest_Cons_tail1 = tmp31;
            return () => {
              let param01, param11, h, t1;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              h = param01;
              t1 = param11;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp26 = lscomp(states1);
      tmp27 = head_inst_59_61_58_74_tsni(tmp26);
      return thrid(tmp27)
    };
    return arr3
  };
  _deforest_Deforest_Arr_2_0 = "sto";
  _deforest_Deforest_Arr_2_1 = 0;
  arr = (lscomp, state, pid_, t, first1) => {
    return match_first0_arm_Deforest_Arr_2_inst_59_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp = NofibPrelude.enumFrom(0);
  tmp1 = bits - 1;
  tmp2 = enumFromTo_inst_59_60_48_tsni(0, tmp1);
  lambda = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp3 = map_inst_59_60_49_tsni(lambda, tmp2);
  tmp4 = zipWith_lz_nl_inst_59_60_66_tsni(ilabel, tmp, tmp3);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp4;
  tmp5 = (ys) => {
    return match_xs_arm_Cons_inst_59_61_57_46_42_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  is_ = tmp5;
  tmp6 = NofibPrelude.enumFrom(0);
  tmp7 = bits - 1;
  tmp8 = enumFromTo_inst_59_60_50_tsni(0, tmp7);
  lambda1 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 7
  });
  tmp9 = map_inst_59_60_51_tsni(lambda1, tmp8);
  tmp10 = zipWith_lz_nl_inst_59_60_65_tsni(olabel, tmp6, tmp9);
  os = tmp10;
  tmp11 = bits - 1;
  tmp12 = 8 * tmp11;
  tmp13 = tmp12 + 5;
  arr1 = [
    0,
    circsim.F,
    false,
    0,
    true,
    tmp13
  ];
  tmp14 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  tmp15 = runtime.safeCall(circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14));
  sto = tmp15;
  tmp16 = bits - 1;
  tmp17 = enumFromTo_inst_59_60_52_tsni(0, tmp16);
  lambda2 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp18 = map_inst_59_60_53_tsni(lambda2, tmp17);
  lambda3 = (undefined, function (x) {
    return reg_inst_59_60_55_tsni(0, x)
  });
  tmp19 = map_inst_59_60_54_tsni(lambda3, tmp18);
  tmp20 = concat_inst_59_60_84_tsni(tmp19);
  tmp21 = NofibPrelude.Cons(sto, tmp20);
  states = tmp21;
  tmp22 = 7 * bits;
  tmp23 = 1 + tmp22;
  _deforest_Deforest_Arr_4_0 = tmp23;
  _deforest_Deforest_Arr_4_1 = is_;
  _deforest_Deforest_Arr_4_2 = os;
  _deforest_Deforest_Arr_4_3 = states;
  arr2 = () => {
    let first3, first2, first1, first0, size, ins, outs, states1, p2, states_, tmp24, tmp25, tmp26, tmp27, arr3, _deforest_Deforest_Arr_4_01, _deforest_Deforest_Arr_4_11, _deforest_Deforest_Arr_4_21, _deforest_Deforest_Arr_4_31;
    first0 = _deforest_Deforest_Arr_4_0;
    first1 = _deforest_Deforest_Arr_4_1;
    first2 = _deforest_Deforest_Arr_4_2;
    first3 = _deforest_Deforest_Arr_4_3;
    size = first0;
    ins = first1;
    outs = first2;
    states1 = first3;
    tmp24 = circsim.nearest_power_of_two(size);
    p2 = tmp24;
    tmp25 = NofibPrelude.replicate_lz(p2, circsim.emptyState);
    tmp26 = NofibPrelude.append_nl_lz(states1, tmp25);
    states_ = tmp26;
    tmp27 = NofibPrelude.take_lz(p2, states_);
    _deforest_Deforest_Arr_4_01 = p2;
    _deforest_Deforest_Arr_4_11 = ins;
    _deforest_Deforest_Arr_4_21 = outs;
    _deforest_Deforest_Arr_4_31 = tmp27;
    arr3 = (inputs_list) => {
      let first31, first21, first11, first01, size1, ins1, outs1, states2, tmp28, tmp29, arr4, tmp30, lambda4;
      first01 = _deforest_Deforest_Arr_4_01;
      first11 = _deforest_Deforest_Arr_4_11;
      first21 = _deforest_Deforest_Arr_4_21;
      first31 = _deforest_Deforest_Arr_4_31;
      size1 = first01;
      ins1 = first11;
      outs1 = first21;
      states2 = first31;
      lambda4 = (undefined, function (x, y) {
        let arr5, tmp31, _deforest_Deforest_Arr_4_02, _deforest_Deforest_Arr_4_12, _deforest_Deforest_Arr_4_22, _deforest_Deforest_Arr_4_32;
        _deforest_Deforest_Arr_4_02 = size1;
        _deforest_Deforest_Arr_4_12 = ins1;
        _deforest_Deforest_Arr_4_22 = outs1;
        _deforest_Deforest_Arr_4_32 = states2;
        arr5 = () => {
          let first32, first22, first12, first02, size2, ins2, outs2, states3, tmp32;
          first02 = _deforest_Deforest_Arr_4_02;
          first12 = _deforest_Deforest_Arr_4_12;
          first22 = _deforest_Deforest_Arr_4_22;
          first32 = _deforest_Deforest_Arr_4_32;
          size2 = first02;
          ins2 = first12;
          outs2 = first22;
          states3 = first32;
          tmp32 = NofibPrelude.map(circsim.pathDepth, states3);
          return NofibPrelude.maximum(tmp32)
        };
        tmp31 = critical_path_depth_inst_59_61_57_83_tsni(arr5);
        return do_cycle_inst_59_61_57_46_tsni(tmp31, x, y)
      });
      tmp28 = lambda4;
      tmp29 = NofibPrelude.map(circsim.init_dffs, states2);
      arr4 = [
        size1,
        ins1,
        outs1,
        tmp29
      ];
      tmp30 = scanl_inst_59_61_57_86_tsni(tmp28, arr4, inputs_list);
      return NofibPrelude.tail(tmp30)
    };
    return arr3
  };
  return arr2
};
map_inst_59_60_54_tsni = function map_inst_59_60_54_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
reg_inst_59_60_55_tsni = function reg_inst_59_60_55_tsni(sto, n) {
  let arr, tmp, tmp1, tmp2, tmp3, arr1, tmp4, arr2, tmp5, tmp6, tmp7, arr3, tmp8, arr4, tmp9, tmp10, tmp11, tmp12, arr5, tmp13, arr6, tmp14, tmp15, arr7, tmp16, tmp17, tmp18, arr8, arr9, tmp19, tmp20, arr10, tmp21, tmp22, tmp23, tmp24, arr11, tmp25, arr12, tmp26, tmp27, arr13, tmp28, tmp29, tmp30, tmp31, arr14, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  arr = [
    0,
    circsim.F,
    false,
    0,
    true,
    4
  ];
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  tmp1 = runtime.safeCall(circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp));
  tmp2 = n + 1;
  tmp3 = n + 5;
  arr1 = [
    tmp3,
    0,
    circsim.F
  ];
  tmp4 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  arr2 = [
    0,
    circsim.F,
    false,
    0,
    true,
    5
  ];
  tmp5 = NofibPrelude.Cons(arr2, NofibPrelude.Nil);
  tmp6 = runtime.safeCall(circsim.PS(tmp2, circsim.Dff, 1, tmp4, tmp5));
  tmp7 = n + 2;
  arr3 = [
    sto,
    0,
    circsim.F
  ];
  tmp8 = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
  arr4 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp9 = NofibPrelude.Cons(arr4, NofibPrelude.Nil);
  tmp10 = runtime.safeCall(circsim.PS(tmp7, circsim.Inv, 1, tmp8, tmp9));
  tmp11 = n + 3;
  tmp12 = n + 1;
  arr5 = [
    tmp12,
    0,
    circsim.F
  ];
  tmp13 = n + 2;
  arr6 = [
    tmp13,
    0,
    circsim.F
  ];
  tmp14 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(arr5, tmp14);
  arr7 = [
    0,
    circsim.F,
    false,
    0,
    true,
    2
  ];
  tmp16 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
  tmp17 = runtime.safeCall(circsim.PS(tmp11, circsim.And2, 2, tmp15, tmp16));
  tmp18 = n + 4;
  arr8 = [
    sto,
    0,
    circsim.F
  ];
  arr9 = [
    n,
    0,
    circsim.F
  ];
  tmp19 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
  tmp20 = NofibPrelude.Cons(arr8, tmp19);
  arr10 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp21 = NofibPrelude.Cons(arr10, NofibPrelude.Nil);
  tmp22 = runtime.safeCall(circsim.PS(tmp18, circsim.And2, 1, tmp20, tmp21));
  tmp23 = n + 5;
  tmp24 = n + 3;
  arr11 = [
    tmp24,
    0,
    circsim.F
  ];
  tmp25 = n + 4;
  arr12 = [
    tmp25,
    0,
    circsim.F
  ];
  tmp26 = NofibPrelude.Cons(arr12, NofibPrelude.Nil);
  tmp27 = NofibPrelude.Cons(arr11, tmp26);
  arr13 = [
    0,
    circsim.F,
    true,
    4,
    false,
    0
  ];
  tmp28 = NofibPrelude.Cons(arr13, NofibPrelude.Nil);
  tmp29 = runtime.safeCall(circsim.PS(tmp23, circsim.Or2, 3, tmp27, tmp28));
  tmp30 = n + 6;
  tmp31 = n + 1;
  arr14 = [
    tmp31,
    0,
    circsim.F
  ];
  tmp32 = NofibPrelude.Cons(arr14, NofibPrelude.Nil);
  tmp33 = runtime.safeCall(circsim.PS(tmp30, circsim.Outp, 4, tmp32, NofibPrelude.Nil));
  _deforest_Cons_head6 = tmp33;
  _deforest_Cons_tail6 = (ys) => {
    return ys
  };
  tmp34 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp29;
  _deforest_Cons_tail5 = tmp34;
  tmp35 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp22;
  _deforest_Cons_tail4 = tmp35;
  tmp36 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp17;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp10;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp6;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp39;
  return (ys) => {
    return match_xs_arm_Cons_inst_59_60_84_85_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
map_inst_59_60_53_tsni = function map_inst_59_60_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_59_60_52_tsni = function enumFromTo_inst_59_60_52_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_60_52_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_59_60_53_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_59_60_54_tsni(f1, xs);
        _deforest_Cons_head2 = tmp2;
        _deforest_Cons_tail2 = tmp3;
        return () => {
          let param01, param11, x1, xs1, tmp4;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs1 = param11;
          tmp4 = concat_inst_59_60_84_tsni(xs1);
          return append_inst_59_60_84_85_tsni(x1, tmp4)
        }
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_59_60_51_tsni = function map_inst_59_60_51_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_59_60_50_tsni = function enumFromTo_inst_59_60_50_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_60_50_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_59_60_51_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_59_60_65_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f2) => {
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_59_61_58_87_tsni(f2, xs);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (f2) => {
          return match_xs_arm_Nil_inst_59_61_58_87_tsni(f2)
        }
      }
    }
  }
};
map_inst_59_60_49_tsni = function map_inst_59_60_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_59_60_48_tsni = function enumFromTo_inst_59_60_48_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_60_48_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_59_60_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_59_60_66_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (ys1) => {
          return match_xs_arm_Cons_inst_59_61_57_46_42_tsni(ys1, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (ys) => {
          return match_xs_arm_default_inst_59_61_57_46_42_tsni(ys)
        }
      }
    }
  }
};
circuit_simulate_inst_59_61_tsni = function circuit_simulate_inst_59_61_tsni(inputs_list, circuit) {
  let tmp;
  tmp = simulate_inst_59_61_57_tsni(inputs_list, circuit);
  return NofibPrelude.map(collect_outputs_inst_59_61_58_tsni, tmp)
};
collect_outputs_inst_59_61_58_tsni = function collect_outputs_inst_59_61_58_tsni(tp4) {
  let thrid, get_output, first3, first2, first1, first0, size, ins, outs, states, lambda;
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    thrid = function thrid(tp3) {
      let first21, first11, first01, v;
      if (globalThis.Array.isArray(tp3) && tp3.length === 3) {
        first01 = tp3[0];
        first11 = tp3[1];
        first21 = tp3[2];
        v = first21;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    };
    get_output = function get_output(states1, label_p) {
      return runtime.safeCall(label_p(thrid, states1))
    };
    lambda = (undefined, function (p) {
      return get_output(states, p)
    });
    return map_inst_59_61_58_87_tsni(lambda, outs)
  } else {
    throw new globalThis.Error("match error");
  }
};
simulate_inst_59_61_57_tsni = function simulate_inst_59_61_57_tsni(inputs_list, b) {
  return runtime.safeCall(b(inputs_list))
};
do_cycle_inst_59_61_57_46_tsni = function do_cycle_inst_59_61_57_46_tsni(cpd, tp4, inputs) {
  let sim_then_send, first3, first2, first1, first0, size, ins, outs, states, states1, states2, states3, states4, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
  sim_then_send = function sim_then_send(state, d) {
    let tmp5;
    tmp5 = circsim.simulate_components(d, state);
    return do_sends_inst_59_61_57_46_40_tsni(d, tmp5)
  };
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (s) {
      let tmp5;
      tmp5 = zip_inst_59_61_57_46_42_tsni(ins, inputs);
      return store_inputs_inst_59_61_57_46_41_tsni(tmp5, s)
    });
    tmp = NofibPrelude.map(lambda, states);
    states1 = tmp;
    tmp1 = do_sends_inst_59_61_57_46_43_tsni(0, states1);
    states2 = tmp1;
    tmp2 = enumFromTo_inst_59_61_57_46_44_tsni(1, cpd);
    tmp3 = foldl_inst_59_61_57_46_82_tsni(sim_then_send, states2, tmp2);
    states3 = tmp3;
    tmp4 = circsim.restore_requests(states, states3);
    states4 = tmp4;
    arr = [
      size,
      ins,
      outs,
      states4
    ];
    return arr
  } else {
    throw globalThis.Error(tp4);
  }
};
enumFromTo_inst_59_61_57_46_44_tsni = function enumFromTo_inst_59_61_57_46_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_61_57_46_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_59_61_57_46_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
do_sends_inst_59_61_57_46_43_tsni = function do_sends_inst_59_61_57_46_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_59_61_57_46_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_59_61_57_46_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_59_61_57_46_43_37_tsni = function acknowledge_inst_59_61_57_46_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_59_61_57_46_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_59_61_57_46_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_59_61_57_46_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_59_61_57_46_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_59_61_57_46_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_59_61_57_46_43_37_19_tsni = function map_inst_59_61_57_46_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_59_61_57_46_43_37_18_tsni = function map_inst_59_61_57_46_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_59_61_57_46_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_59_61_57_46_43_37_17_tsni = function map_inst_59_61_57_46_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_59_61_57_46_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_59_61_57_46_43_38_tsni = function do_send_inst_59_61_57_46_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_59_61_57_46_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_59_61_57_46_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_59_61_57_46_43_38_34_tsni(x);
    return snd_inst_59_61_57_46_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_59_61_57_46_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_59_61_57_46_43_38_35_tsni = function update_io_inst_59_61_57_46_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_59_61_57_46_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_59_61_57_46_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_59_61_57_46_43_38_35_30_tsni = function update_i_inst_59_61_57_46_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_59_61_57_46_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_59_61_57_46_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_59_61_57_46_43_38_35_30_25_tsni = function up_i_inst_59_61_57_46_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_59_61_57_46_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_59_61_57_46_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_59_61_57_46_43_38_35_30_24_tsni = function up_i_inst_59_61_57_46_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_59_61_57_46_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_59_61_57_46_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_59_61_57_46_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_59_61_57_46_43_38_35_30_24_22_tsni = function compare_and_update_inst_59_61_57_46_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_59_61_57_46_43_38_35_30_24_26_tsni = function map_inst_59_61_57_46_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_59_61_57_46_43_38_35_31_tsni = function update_o_inst_59_61_57_46_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_59_61_57_46_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_59_61_57_46_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_59_61_57_46_43_38_35_31_28_tsni = function check_right_inst_59_61_57_46_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_59_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_59_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_59_61_57_46_43_38_34_tsni = function send_inst_59_61_57_46_43_38_34_tsni(xs) {
  return scanlr_inst_59_61_57_46_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_59_61_57_46_43_38_34_13_tsni = function scanlr_inst_59_61_57_46_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_59_61_57_46_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_59_61_57_46_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_59_61_57_46_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_59_61_57_46_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_59_61_57_46_43_38_34_13_10_tsni = function sweep_ud_inst_59_61_57_46_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_59_61_57_46_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni = function upsweep_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni = function downsweep_inst_59_61_57_46_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_59_61_57_46_43_38_34_13_11_tsni = function put_inst_59_61_57_46_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_59_61_57_46_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_59_61_57_46_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_59_61_57_46_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_59_61_57_46_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_59_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_59_61_57_46_43_38_33_tsni = function map_inst_59_61_57_46_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
zip_inst_59_61_57_46_42_tsni = function zip_inst_59_61_57_46_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
do_sends_inst_59_61_57_46_40_tsni = function do_sends_inst_59_61_57_46_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_59_61_57_46_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_59_61_57_46_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_59_61_57_46_40_37_tsni = function acknowledge_inst_59_61_57_46_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_59_61_57_46_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_59_61_57_46_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_59_61_57_46_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_59_61_57_46_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_59_61_57_46_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_59_61_57_46_40_37_19_tsni = function map_inst_59_61_57_46_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_59_61_57_46_40_37_18_tsni = function map_inst_59_61_57_46_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_59_61_57_46_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_59_61_57_46_40_37_17_tsni = function map_inst_59_61_57_46_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_59_61_57_46_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_59_61_57_46_40_38_tsni = function do_send_inst_59_61_57_46_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_59_61_57_46_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_59_61_57_46_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_59_61_57_46_40_38_34_tsni(x);
    return snd_inst_59_61_57_46_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_59_61_57_46_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_59_61_57_46_40_38_35_tsni = function update_io_inst_59_61_57_46_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_59_61_57_46_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_59_61_57_46_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_59_61_57_46_40_38_35_30_tsni = function update_i_inst_59_61_57_46_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_59_61_57_46_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_59_61_57_46_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_59_61_57_46_40_38_35_30_25_tsni = function up_i_inst_59_61_57_46_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_59_61_57_46_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_59_61_57_46_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_59_61_57_46_40_38_35_30_24_tsni = function up_i_inst_59_61_57_46_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_59_61_57_46_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_59_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_59_61_57_46_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_59_61_57_46_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_59_61_57_46_40_38_35_30_24_22_tsni = function compare_and_update_inst_59_61_57_46_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_59_61_57_46_40_38_35_30_24_26_tsni = function map_inst_59_61_57_46_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_59_61_57_46_40_38_35_31_tsni = function update_o_inst_59_61_57_46_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_59_61_57_46_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_59_61_57_46_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_59_61_57_46_40_38_35_31_28_tsni = function check_right_inst_59_61_57_46_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_59_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_59_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_59_61_57_46_40_38_34_tsni = function send_inst_59_61_57_46_40_38_34_tsni(xs) {
  return scanlr_inst_59_61_57_46_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_59_61_57_46_40_38_34_13_tsni = function scanlr_inst_59_61_57_46_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_59_61_57_46_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_59_61_57_46_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_59_61_57_46_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_59_61_57_46_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_59_61_57_46_40_38_34_13_10_tsni = function sweep_ud_inst_59_61_57_46_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_59_61_57_46_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni = function upsweep_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni = function downsweep_inst_59_61_57_46_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_59_61_57_46_40_38_34_13_11_tsni = function put_inst_59_61_57_46_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_59_61_57_46_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_59_61_57_46_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_59_61_57_46_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_59_61_57_46_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_59_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_59_61_57_46_40_38_33_tsni = function map_inst_59_61_57_46_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_61_57_46_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_59_61_57_46_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_59_62_tsni = function replicate_inst_59_62_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, q) => {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_62_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, q) => {
      let param0, param1, x1, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(q, x1));
      tmp3 = scanl_inst_59_61_57_86_tsni(f, tmp2, xs);
      return NofibPrelude.Cons(q, tmp3)
    }
  }
};
replicate_inst_59_63_tsni = function replicate_inst_59_63_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (x1, xs) => {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_59_61_57_46_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_63_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (x1, xs) => {
      let param0, param1, y, ys, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      _deforest_Deforest_Arr_2_0 = x1;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(lscomp, state, pid_, t, first1))
      };
      tmp2 = zip_inst_59_61_57_46_42_tsni(xs, ys);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp, state, pid_) => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    }
  }
};
pad_circuit_inst_59_64_tsni = function pad_circuit_inst_59_64_tsni(size_ins_outs_states) {
  return runtime.safeCall(size_ins_outs_states())
};
zipWith_lz_nl_inst_59_60_65_tsni = function zipWith_lz_nl_inst_59_60_65_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (f1) => {
      return match_xs_arm_Nil_inst_59_61_58_87_tsni(f1)
    }
  }
};
zipWith_lz_nl_inst_59_60_66_tsni = function zipWith_lz_nl_inst_59_60_66_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_default_inst_59_61_57_46_42_tsni(ys)
    }
  }
};
run_inst_67_68_tsni = function run_inst_67_68_tsni(num_bits, num_cycles) {
  let example, inputs, cycles, tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = regs_inst_67_68_60_tsni(num_bits);
  tmp1 = pad_circuit_inst_67_68_64_tsni(tmp);
  example = tmp1;
  tmp2 = num_bits + 1;
  tmp3 = replicate_inst_67_68_63_tsni(tmp2, circsim.T);
  inputs = tmp3;
  tmp4 = replicate_inst_67_68_62_tsni(num_cycles, inputs);
  cycles = tmp4;
  return circuit_simulate_inst_67_68_61_tsni(cycles, example)
};
circuit_simulate_inst_67_68_61_tsni = function circuit_simulate_inst_67_68_61_tsni(inputs_list, circuit) {
  let tmp;
  tmp = simulate_inst_67_68_61_57_tsni(inputs_list, circuit);
  return NofibPrelude.map(collect_outputs_inst_67_68_61_58_tsni, tmp)
};
simulate_inst_67_68_61_57_tsni = function simulate_inst_67_68_61_57_tsni(inputs_list, b) {
  return runtime.safeCall(b(inputs_list))
};
do_cycle_inst_67_68_61_57_46_tsni = function do_cycle_inst_67_68_61_57_46_tsni(cpd, tp4, inputs) {
  let sim_then_send, first3, first2, first1, first0, size, ins, outs, states, states1, states2, states3, states4, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
  sim_then_send = function sim_then_send(state, d) {
    let tmp5;
    tmp5 = circsim.simulate_components(d, state);
    return do_sends_inst_67_68_61_57_46_40_tsni(d, tmp5)
  };
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (s) {
      let tmp5;
      tmp5 = zip_inst_67_68_61_57_46_42_tsni(ins, inputs);
      return store_inputs_inst_67_68_61_57_46_41_tsni(tmp5, s)
    });
    tmp = NofibPrelude.map(lambda, states);
    states1 = tmp;
    tmp1 = do_sends_inst_67_68_61_57_46_43_tsni(0, states1);
    states2 = tmp1;
    tmp2 = enumFromTo_inst_67_68_61_57_46_44_tsni(1, cpd);
    tmp3 = foldl_inst_67_68_61_57_46_82_tsni(sim_then_send, states2, tmp2);
    states3 = tmp3;
    tmp4 = circsim.restore_requests(states, states3);
    states4 = tmp4;
    arr = [
      size,
      ins,
      outs,
      states4
    ];
    return arr
  } else {
    throw globalThis.Error(tp4);
  }
};
do_sends_inst_67_68_61_57_46_40_tsni = function do_sends_inst_67_68_61_57_46_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_67_68_61_57_46_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_67_68_61_57_46_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_67_68_61_57_46_40_38_tsni = function do_send_inst_67_68_61_57_46_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_67_68_61_57_46_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_67_68_61_57_46_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_67_68_61_57_46_40_38_34_tsni(x);
    return snd_inst_67_68_61_57_46_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_67_68_61_57_46_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_67_68_61_57_46_40_38_33_tsni = function map_inst_67_68_61_57_46_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_67_68_61_57_46_40_38_34_tsni = function send_inst_67_68_61_57_46_40_38_34_tsni(xs) {
  return scanlr_inst_67_68_61_57_46_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_67_68_61_57_46_40_38_34_13_tsni = function scanlr_inst_67_68_61_57_46_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_67_68_61_57_46_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_67_68_61_57_46_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_67_68_61_57_46_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_67_68_61_57_46_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_67_68_61_57_46_40_38_34_13_10_tsni = function sweep_ud_inst_67_68_61_57_46_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_67_68_61_57_46_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni = function upsweep_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_67_68_61_57_46_40_38_34_13_11_tsni = function put_inst_67_68_61_57_46_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_67_68_61_57_46_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_67_68_61_57_46_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_67_68_61_57_46_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_67_68_61_57_46_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_67_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni = function downsweep_inst_67_68_61_57_46_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_67_68_61_57_46_40_38_35_tsni = function update_io_inst_67_68_61_57_46_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_67_68_61_57_46_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_67_68_61_57_46_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_67_68_61_57_46_40_38_35_31_tsni = function update_o_inst_67_68_61_57_46_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_67_68_61_57_46_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_67_68_61_57_46_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_67_68_61_57_46_40_38_35_31_28_tsni = function check_right_inst_67_68_61_57_46_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_67_68_61_57_46_40_38_35_30_tsni = function update_i_inst_67_68_61_57_46_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_67_68_61_57_46_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_67_68_61_57_46_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_67_68_61_57_46_40_38_35_30_24_tsni = function up_i_inst_67_68_61_57_46_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_67_68_61_57_46_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_67_68_61_57_46_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_67_68_61_57_46_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_67_68_61_57_46_40_38_35_30_24_22_tsni = function compare_and_update_inst_67_68_61_57_46_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_67_68_61_57_46_40_38_35_30_25_tsni = function up_i_inst_67_68_61_57_46_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_67_68_61_57_46_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_67_68_61_57_46_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_40_38_35_30_24_26_tsni = function map_inst_67_68_61_57_46_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_67_68_61_57_46_40_37_tsni = function acknowledge_inst_67_68_61_57_46_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_67_68_61_57_46_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_67_68_61_57_46_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_67_68_61_57_46_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_67_68_61_57_46_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_67_68_61_57_46_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_67_68_61_57_46_40_37_17_tsni = function map_inst_67_68_61_57_46_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_67_68_61_57_46_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_40_37_18_tsni = function map_inst_67_68_61_57_46_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_67_68_61_57_46_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_40_37_19_tsni = function map_inst_67_68_61_57_46_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zip_inst_67_68_61_57_46_42_tsni = function zip_inst_67_68_61_57_46_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
do_sends_inst_67_68_61_57_46_43_tsni = function do_sends_inst_67_68_61_57_46_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_67_68_61_57_46_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_67_68_61_57_46_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
do_send_inst_67_68_61_57_46_43_38_tsni = function do_send_inst_67_68_61_57_46_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_67_68_61_57_46_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_67_68_61_57_46_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_67_68_61_57_46_43_38_34_tsni(x);
    return snd_inst_67_68_61_57_46_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_67_68_61_57_46_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
map_inst_67_68_61_57_46_43_38_33_tsni = function map_inst_67_68_61_57_46_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_67_68_61_57_46_43_38_34_tsni = function send_inst_67_68_61_57_46_43_38_34_tsni(xs) {
  return scanlr_inst_67_68_61_57_46_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_67_68_61_57_46_43_38_34_13_tsni = function scanlr_inst_67_68_61_57_46_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_67_68_61_57_46_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_67_68_61_57_46_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_67_68_61_57_46_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_67_68_61_57_46_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_67_68_61_57_46_43_38_34_13_10_tsni = function sweep_ud_inst_67_68_61_57_46_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_67_68_61_57_46_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni = function upsweep_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
put_inst_67_68_61_57_46_43_38_34_13_11_tsni = function put_inst_67_68_61_57_46_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_67_68_61_57_46_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_67_68_61_57_46_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_67_68_61_57_46_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_67_68_61_57_46_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_67_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni = function downsweep_inst_67_68_61_57_46_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
update_io_inst_67_68_61_57_46_43_38_35_tsni = function update_io_inst_67_68_61_57_46_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_67_68_61_57_46_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_67_68_61_57_46_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_o_inst_67_68_61_57_46_43_38_35_31_tsni = function update_o_inst_67_68_61_57_46_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_67_68_61_57_46_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_67_68_61_57_46_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_67_68_61_57_46_43_38_35_31_28_tsni = function check_right_inst_67_68_61_57_46_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_67_68_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_i_inst_67_68_61_57_46_43_38_35_30_tsni = function update_i_inst_67_68_61_57_46_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_67_68_61_57_46_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_67_68_61_57_46_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_67_68_61_57_46_43_38_35_30_24_tsni = function up_i_inst_67_68_61_57_46_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_0 = i1;
          _deforest_Deforest_Arr_2_1 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_01 = pid_;
          _deforest_Deforest_Arr_2_11 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_67_68_61_57_46_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_67_68_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_67_68_61_57_46_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_67_68_61_57_46_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_67_68_61_57_46_43_38_35_30_24_22_tsni = function compare_and_update_inst_67_68_61_57_46_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
up_i_inst_67_68_61_57_46_43_38_35_30_25_tsni = function up_i_inst_67_68_61_57_46_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_67_68_61_57_46_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_67_68_61_57_46_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_43_38_35_30_24_26_tsni = function map_inst_67_68_61_57_46_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
acknowledge_inst_67_68_61_57_46_43_37_tsni = function acknowledge_inst_67_68_61_57_46_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_67_68_61_57_46_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_67_68_61_57_46_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_67_68_61_57_46_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_67_68_61_57_46_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_67_68_61_57_46_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_67_68_61_57_46_43_37_17_tsni = function map_inst_67_68_61_57_46_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_67_68_61_57_46_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_43_37_18_tsni = function map_inst_67_68_61_57_46_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_67_68_61_57_46_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_67_68_61_57_46_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_67_68_61_57_46_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_67_68_61_57_46_43_37_19_tsni = function map_inst_67_68_61_57_46_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_67_68_61_57_46_44_tsni = function enumFromTo_inst_67_68_61_57_46_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_67_68_61_57_46_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_67_68_61_57_46_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
collect_outputs_inst_67_68_61_58_tsni = function collect_outputs_inst_67_68_61_58_tsni(tp4) {
  let thrid, get_output, first3, first2, first1, first0, size, ins, outs, states, lambda;
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    thrid = function thrid(tp3) {
      let first21, first11, first01, v;
      if (globalThis.Array.isArray(tp3) && tp3.length === 3) {
        first01 = tp3[0];
        first11 = tp3[1];
        first21 = tp3[2];
        v = first21;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    };
    get_output = function get_output(states1, label_p) {
      return runtime.safeCall(label_p(thrid, states1))
    };
    lambda = (undefined, function (p) {
      return get_output(states, p)
    });
    return map_inst_67_68_61_58_87_tsni(lambda, outs)
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_67_68_62_tsni = function replicate_inst_67_68_62_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, q) => {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_67_68_62_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, q) => {
      let param0, param1, x1, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(q, x1));
      tmp3 = scanl_inst_67_68_61_57_86_tsni(f, tmp2, xs);
      return NofibPrelude.Cons(q, tmp3)
    }
  }
};
replicate_inst_67_68_63_tsni = function replicate_inst_67_68_63_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (x1, xs) => {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_67_68_63_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (x1, xs) => {
      let param0, param1, y, ys, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      _deforest_Deforest_Arr_2_0 = x1;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(lscomp, state, pid_, t, first1))
      };
      tmp2 = zip_inst_67_68_61_57_46_42_tsni(xs, ys);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp, state, pid_) => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    }
  }
};
pad_circuit_inst_67_68_64_tsni = function pad_circuit_inst_67_68_64_tsni(size_ins_outs_states) {
  return runtime.safeCall(size_ins_outs_states())
};
regs_inst_67_68_60_tsni = function regs_inst_67_68_60_tsni(bits) {
  let ilabel, olabel, is_, os, sto, states, arr, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr1, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, arr2, lambda, lambda1, lambda2, lambda3, _deforest_Deforest_Arr_4_0, _deforest_Deforest_Arr_4_1, _deforest_Deforest_Arr_4_2, _deforest_Deforest_Arr_4_3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  ilabel = function ilabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("x", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (lscomp, state, pid_1, t, first1) => {
      return match_first0_arm_Deforest_Arr_2_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_1, t, first1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr3
  };
  olabel = function olabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("y", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (thrid, states1) => {
      let lscomp, first1, first0, label, p, tmp26, tmp27;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      label = first0;
      p = first1;
      lscomp = function lscomp(ls) {
        let param0, param1, s, t, scrut, tmp28, tmp29, tmp30, tmp31, _deforest_Cons_head1, _deforest_Cons_tail1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return () => {
            throw new globalThis.Error("match error");
          }
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          s = param0;
          t = param1;
          tmp28 = circsim.pid(s);
          scrut = p == tmp28;
          if (scrut === true) {
            tmp29 = circsim.inports(s);
            tmp30 = NofibPrelude.head(tmp29);
            tmp31 = lscomp(t);
            _deforest_Cons_head1 = tmp30;
            _deforest_Cons_tail1 = tmp31;
            return () => {
              let param01, param11, h, t1;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              h = param01;
              t1 = param11;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp26 = lscomp(states1);
      tmp27 = head_inst_67_68_61_58_74_tsni(tmp26);
      return thrid(tmp27)
    };
    return arr3
  };
  _deforest_Deforest_Arr_2_0 = "sto";
  _deforest_Deforest_Arr_2_1 = 0;
  arr = (lscomp, state, pid_, t, first1) => {
    return match_first0_arm_Deforest_Arr_2_inst_67_68_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp = NofibPrelude.enumFrom(0);
  tmp1 = bits - 1;
  tmp2 = enumFromTo_inst_67_68_60_48_tsni(0, tmp1);
  lambda = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp3 = map_inst_67_68_60_49_tsni(lambda, tmp2);
  tmp4 = zipWith_lz_nl_inst_67_68_60_66_tsni(ilabel, tmp, tmp3);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp4;
  tmp5 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_61_57_46_42_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  is_ = tmp5;
  tmp6 = NofibPrelude.enumFrom(0);
  tmp7 = bits - 1;
  tmp8 = enumFromTo_inst_67_68_60_50_tsni(0, tmp7);
  lambda1 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 7
  });
  tmp9 = map_inst_67_68_60_51_tsni(lambda1, tmp8);
  tmp10 = zipWith_lz_nl_inst_67_68_60_65_tsni(olabel, tmp6, tmp9);
  os = tmp10;
  tmp11 = bits - 1;
  tmp12 = 8 * tmp11;
  tmp13 = tmp12 + 5;
  arr1 = [
    0,
    circsim.F,
    false,
    0,
    true,
    tmp13
  ];
  tmp14 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  tmp15 = runtime.safeCall(circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14));
  sto = tmp15;
  tmp16 = bits - 1;
  tmp17 = enumFromTo_inst_67_68_60_52_tsni(0, tmp16);
  lambda2 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp18 = map_inst_67_68_60_53_tsni(lambda2, tmp17);
  lambda3 = (undefined, function (x) {
    return reg_inst_67_68_60_55_tsni(0, x)
  });
  tmp19 = map_inst_67_68_60_54_tsni(lambda3, tmp18);
  tmp20 = concat_inst_67_68_60_84_tsni(tmp19);
  tmp21 = NofibPrelude.Cons(sto, tmp20);
  states = tmp21;
  tmp22 = 7 * bits;
  tmp23 = 1 + tmp22;
  _deforest_Deforest_Arr_4_0 = tmp23;
  _deforest_Deforest_Arr_4_1 = is_;
  _deforest_Deforest_Arr_4_2 = os;
  _deforest_Deforest_Arr_4_3 = states;
  arr2 = () => {
    let first3, first2, first1, first0, size, ins, outs, states1, p2, states_, tmp24, tmp25, tmp26, tmp27, arr3, _deforest_Deforest_Arr_4_01, _deforest_Deforest_Arr_4_11, _deforest_Deforest_Arr_4_21, _deforest_Deforest_Arr_4_31;
    first0 = _deforest_Deforest_Arr_4_0;
    first1 = _deforest_Deforest_Arr_4_1;
    first2 = _deforest_Deforest_Arr_4_2;
    first3 = _deforest_Deforest_Arr_4_3;
    size = first0;
    ins = first1;
    outs = first2;
    states1 = first3;
    tmp24 = circsim.nearest_power_of_two(size);
    p2 = tmp24;
    tmp25 = NofibPrelude.replicate_lz(p2, circsim.emptyState);
    tmp26 = NofibPrelude.append_nl_lz(states1, tmp25);
    states_ = tmp26;
    tmp27 = NofibPrelude.take_lz(p2, states_);
    _deforest_Deforest_Arr_4_01 = p2;
    _deforest_Deforest_Arr_4_11 = ins;
    _deforest_Deforest_Arr_4_21 = outs;
    _deforest_Deforest_Arr_4_31 = tmp27;
    arr3 = (inputs_list) => {
      let first31, first21, first11, first01, size1, ins1, outs1, states2, tmp28, tmp29, arr4, tmp30, lambda4;
      first01 = _deforest_Deforest_Arr_4_01;
      first11 = _deforest_Deforest_Arr_4_11;
      first21 = _deforest_Deforest_Arr_4_21;
      first31 = _deforest_Deforest_Arr_4_31;
      size1 = first01;
      ins1 = first11;
      outs1 = first21;
      states2 = first31;
      lambda4 = (undefined, function (x, y) {
        let arr5, tmp31, _deforest_Deforest_Arr_4_02, _deforest_Deforest_Arr_4_12, _deforest_Deforest_Arr_4_22, _deforest_Deforest_Arr_4_32;
        _deforest_Deforest_Arr_4_02 = size1;
        _deforest_Deforest_Arr_4_12 = ins1;
        _deforest_Deforest_Arr_4_22 = outs1;
        _deforest_Deforest_Arr_4_32 = states2;
        arr5 = () => {
          let first32, first22, first12, first02, size2, ins2, outs2, states3, tmp32;
          first02 = _deforest_Deforest_Arr_4_02;
          first12 = _deforest_Deforest_Arr_4_12;
          first22 = _deforest_Deforest_Arr_4_22;
          first32 = _deforest_Deforest_Arr_4_32;
          size2 = first02;
          ins2 = first12;
          outs2 = first22;
          states3 = first32;
          tmp32 = NofibPrelude.map(circsim.pathDepth, states3);
          return NofibPrelude.maximum(tmp32)
        };
        tmp31 = critical_path_depth_inst_67_68_61_57_83_tsni(arr5);
        return do_cycle_inst_67_68_61_57_46_tsni(tmp31, x, y)
      });
      tmp28 = lambda4;
      tmp29 = NofibPrelude.map(circsim.init_dffs, states2);
      arr4 = [
        size1,
        ins1,
        outs1,
        tmp29
      ];
      tmp30 = scanl_inst_67_68_61_57_86_tsni(tmp28, arr4, inputs_list);
      return NofibPrelude.tail(tmp30)
    };
    return arr3
  };
  return arr2
};
enumFromTo_inst_67_68_60_48_tsni = function enumFromTo_inst_67_68_60_48_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_67_68_60_48_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_67_68_60_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_67_68_60_66_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (ys1) => {
          return match_xs_arm_Cons_inst_67_68_61_57_46_42_tsni(ys1, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (ys) => {
          return match_xs_arm_default_inst_67_68_61_57_46_42_tsni(ys)
        }
      }
    }
  }
};
map_inst_67_68_60_49_tsni = function map_inst_67_68_60_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_67_68_60_50_tsni = function enumFromTo_inst_67_68_60_50_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_67_68_60_50_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_67_68_60_51_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_67_68_60_65_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f2) => {
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_67_68_61_58_87_tsni(f2, xs);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (f2) => {
          return match_xs_arm_Nil_inst_67_68_61_58_87_tsni(f2)
        }
      }
    }
  }
};
map_inst_67_68_60_51_tsni = function map_inst_67_68_60_51_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_67_68_60_52_tsni = function enumFromTo_inst_67_68_60_52_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_67_68_60_52_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_67_68_60_53_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_67_68_60_54_tsni(f1, xs);
        _deforest_Cons_head2 = tmp2;
        _deforest_Cons_tail2 = tmp3;
        return () => {
          let param01, param11, x1, xs1, tmp4;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs1 = param11;
          tmp4 = concat_inst_67_68_60_84_tsni(xs1);
          return append_inst_67_68_60_84_85_tsni(x1, tmp4)
        }
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_67_68_60_53_tsni = function map_inst_67_68_60_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_67_68_60_54_tsni = function map_inst_67_68_60_54_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
reg_inst_67_68_60_55_tsni = function reg_inst_67_68_60_55_tsni(sto, n) {
  let arr, tmp, tmp1, tmp2, tmp3, arr1, tmp4, arr2, tmp5, tmp6, tmp7, arr3, tmp8, arr4, tmp9, tmp10, tmp11, tmp12, arr5, tmp13, arr6, tmp14, tmp15, arr7, tmp16, tmp17, tmp18, arr8, arr9, tmp19, tmp20, arr10, tmp21, tmp22, tmp23, tmp24, arr11, tmp25, arr12, tmp26, tmp27, arr13, tmp28, tmp29, tmp30, tmp31, arr14, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  arr = [
    0,
    circsim.F,
    false,
    0,
    true,
    4
  ];
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  tmp1 = runtime.safeCall(circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp));
  tmp2 = n + 1;
  tmp3 = n + 5;
  arr1 = [
    tmp3,
    0,
    circsim.F
  ];
  tmp4 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  arr2 = [
    0,
    circsim.F,
    false,
    0,
    true,
    5
  ];
  tmp5 = NofibPrelude.Cons(arr2, NofibPrelude.Nil);
  tmp6 = runtime.safeCall(circsim.PS(tmp2, circsim.Dff, 1, tmp4, tmp5));
  tmp7 = n + 2;
  arr3 = [
    sto,
    0,
    circsim.F
  ];
  tmp8 = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
  arr4 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp9 = NofibPrelude.Cons(arr4, NofibPrelude.Nil);
  tmp10 = runtime.safeCall(circsim.PS(tmp7, circsim.Inv, 1, tmp8, tmp9));
  tmp11 = n + 3;
  tmp12 = n + 1;
  arr5 = [
    tmp12,
    0,
    circsim.F
  ];
  tmp13 = n + 2;
  arr6 = [
    tmp13,
    0,
    circsim.F
  ];
  tmp14 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(arr5, tmp14);
  arr7 = [
    0,
    circsim.F,
    false,
    0,
    true,
    2
  ];
  tmp16 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
  tmp17 = runtime.safeCall(circsim.PS(tmp11, circsim.And2, 2, tmp15, tmp16));
  tmp18 = n + 4;
  arr8 = [
    sto,
    0,
    circsim.F
  ];
  arr9 = [
    n,
    0,
    circsim.F
  ];
  tmp19 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
  tmp20 = NofibPrelude.Cons(arr8, tmp19);
  arr10 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp21 = NofibPrelude.Cons(arr10, NofibPrelude.Nil);
  tmp22 = runtime.safeCall(circsim.PS(tmp18, circsim.And2, 1, tmp20, tmp21));
  tmp23 = n + 5;
  tmp24 = n + 3;
  arr11 = [
    tmp24,
    0,
    circsim.F
  ];
  tmp25 = n + 4;
  arr12 = [
    tmp25,
    0,
    circsim.F
  ];
  tmp26 = NofibPrelude.Cons(arr12, NofibPrelude.Nil);
  tmp27 = NofibPrelude.Cons(arr11, tmp26);
  arr13 = [
    0,
    circsim.F,
    true,
    4,
    false,
    0
  ];
  tmp28 = NofibPrelude.Cons(arr13, NofibPrelude.Nil);
  tmp29 = runtime.safeCall(circsim.PS(tmp23, circsim.Or2, 3, tmp27, tmp28));
  tmp30 = n + 6;
  tmp31 = n + 1;
  arr14 = [
    tmp31,
    0,
    circsim.F
  ];
  tmp32 = NofibPrelude.Cons(arr14, NofibPrelude.Nil);
  tmp33 = runtime.safeCall(circsim.PS(tmp30, circsim.Outp, 4, tmp32, NofibPrelude.Nil));
  _deforest_Cons_head6 = tmp33;
  _deforest_Cons_tail6 = (ys) => {
    return ys
  };
  tmp34 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp29;
  _deforest_Cons_tail5 = tmp34;
  tmp35 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp22;
  _deforest_Cons_tail4 = tmp35;
  tmp36 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp17;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp10;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp6;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp39;
  return (ys) => {
    return match_xs_arm_Cons_inst_67_68_60_84_85_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zipWith_lz_nl_inst_67_68_60_65_tsni = function zipWith_lz_nl_inst_67_68_60_65_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (f1) => {
      return match_xs_arm_Nil_inst_67_68_61_58_87_tsni(f1)
    }
  }
};
zipWith_lz_nl_inst_67_68_60_66_tsni = function zipWith_lz_nl_inst_67_68_60_66_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_default_inst_67_68_61_57_46_42_tsni(ys)
    }
  }
};
testCircsim_nofib_inst_69_70_tsni = function testCircsim_nofib_inst_69_70_tsni(n) {
  return run_inst_69_70_68_tsni(8, n)
};
run_inst_69_70_68_tsni = function run_inst_69_70_68_tsni(num_bits, num_cycles) {
  let example, inputs, cycles, tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = regs_inst_69_70_68_60_tsni(num_bits);
  tmp1 = pad_circuit_inst_69_70_68_64_tsni(tmp);
  example = tmp1;
  tmp2 = num_bits + 1;
  tmp3 = replicate_inst_69_70_68_63_tsni(tmp2, circsim.T);
  inputs = tmp3;
  tmp4 = replicate_inst_69_70_68_62_tsni(num_cycles, inputs);
  cycles = tmp4;
  return circuit_simulate_inst_69_70_68_61_tsni(cycles, example)
};
regs_inst_69_70_68_60_tsni = function regs_inst_69_70_68_60_tsni(bits) {
  let ilabel, olabel, is_, os, sto, states, arr, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr1, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, arr2, lambda, lambda1, lambda2, lambda3, _deforest_Deforest_Arr_4_0, _deforest_Deforest_Arr_4_1, _deforest_Deforest_Arr_4_2, _deforest_Deforest_Arr_4_3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  ilabel = function ilabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("x", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (lscomp, state, pid_1, t, first1) => {
      return match_first0_arm_Deforest_Arr_2_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_1, t, first1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr3
  };
  olabel = function olabel(n, pid_) {
    let tmp24, tmp25, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp24 = NofibPrelude.stringOfInt(n);
    tmp25 = NofibPrelude.stringConcat("y", tmp24);
    _deforest_Deforest_Arr_2_01 = tmp25;
    _deforest_Deforest_Arr_2_11 = pid_;
    arr3 = (thrid, states1) => {
      let lscomp, first1, first0, label, p, tmp26, tmp27;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      label = first0;
      p = first1;
      lscomp = function lscomp(ls) {
        let param0, param1, s, t, scrut, tmp28, tmp29, tmp30, tmp31, _deforest_Cons_head1, _deforest_Cons_tail1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return () => {
            throw new globalThis.Error("match error");
          }
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          s = param0;
          t = param1;
          tmp28 = circsim.pid(s);
          scrut = p == tmp28;
          if (scrut === true) {
            tmp29 = circsim.inports(s);
            tmp30 = NofibPrelude.head(tmp29);
            tmp31 = lscomp(t);
            _deforest_Cons_head1 = tmp30;
            _deforest_Cons_tail1 = tmp31;
            return () => {
              let param01, param11, h, t1;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              h = param01;
              t1 = param11;
              return h
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp26 = lscomp(states1);
      tmp27 = head_inst_69_70_68_61_58_74_tsni(tmp26);
      return thrid(tmp27)
    };
    return arr3
  };
  _deforest_Deforest_Arr_2_0 = "sto";
  _deforest_Deforest_Arr_2_1 = 0;
  arr = (lscomp, state, pid_, t, first1) => {
    return match_first0_arm_Deforest_Arr_2_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_, t, first1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp = NofibPrelude.enumFrom(0);
  tmp1 = bits - 1;
  tmp2 = enumFromTo_inst_69_70_68_60_48_tsni(0, tmp1);
  lambda = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp3 = map_inst_69_70_68_60_49_tsni(lambda, tmp2);
  tmp4 = zipWith_lz_nl_inst_69_70_68_60_66_tsni(ilabel, tmp, tmp3);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp4;
  tmp5 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_61_57_46_42_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  is_ = tmp5;
  tmp6 = NofibPrelude.enumFrom(0);
  tmp7 = bits - 1;
  tmp8 = enumFromTo_inst_69_70_68_60_50_tsni(0, tmp7);
  lambda1 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 7
  });
  tmp9 = map_inst_69_70_68_60_51_tsni(lambda1, tmp8);
  tmp10 = zipWith_lz_nl_inst_69_70_68_60_65_tsni(olabel, tmp6, tmp9);
  os = tmp10;
  tmp11 = bits - 1;
  tmp12 = 8 * tmp11;
  tmp13 = tmp12 + 5;
  arr1 = [
    0,
    circsim.F,
    false,
    0,
    true,
    tmp13
  ];
  tmp14 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  tmp15 = runtime.safeCall(circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14));
  sto = tmp15;
  tmp16 = bits - 1;
  tmp17 = enumFromTo_inst_69_70_68_60_52_tsni(0, tmp16);
  lambda2 = (undefined, function (x) {
    let tmp24;
    tmp24 = 7 * x;
    return tmp24 + 1
  });
  tmp18 = map_inst_69_70_68_60_53_tsni(lambda2, tmp17);
  lambda3 = (undefined, function (x) {
    return reg_inst_69_70_68_60_55_tsni(0, x)
  });
  tmp19 = map_inst_69_70_68_60_54_tsni(lambda3, tmp18);
  tmp20 = concat_inst_69_70_68_60_84_tsni(tmp19);
  tmp21 = NofibPrelude.Cons(sto, tmp20);
  states = tmp21;
  tmp22 = 7 * bits;
  tmp23 = 1 + tmp22;
  _deforest_Deforest_Arr_4_0 = tmp23;
  _deforest_Deforest_Arr_4_1 = is_;
  _deforest_Deforest_Arr_4_2 = os;
  _deforest_Deforest_Arr_4_3 = states;
  arr2 = () => {
    let first3, first2, first1, first0, size, ins, outs, states1, p2, states_, tmp24, tmp25, tmp26, tmp27, arr3, _deforest_Deforest_Arr_4_01, _deforest_Deforest_Arr_4_11, _deforest_Deforest_Arr_4_21, _deforest_Deforest_Arr_4_31;
    first0 = _deforest_Deforest_Arr_4_0;
    first1 = _deforest_Deforest_Arr_4_1;
    first2 = _deforest_Deforest_Arr_4_2;
    first3 = _deforest_Deforest_Arr_4_3;
    size = first0;
    ins = first1;
    outs = first2;
    states1 = first3;
    tmp24 = circsim.nearest_power_of_two(size);
    p2 = tmp24;
    tmp25 = NofibPrelude.replicate_lz(p2, circsim.emptyState);
    tmp26 = NofibPrelude.append_nl_lz(states1, tmp25);
    states_ = tmp26;
    tmp27 = NofibPrelude.take_lz(p2, states_);
    _deforest_Deforest_Arr_4_01 = p2;
    _deforest_Deforest_Arr_4_11 = ins;
    _deforest_Deforest_Arr_4_21 = outs;
    _deforest_Deforest_Arr_4_31 = tmp27;
    arr3 = (inputs_list) => {
      let first31, first21, first11, first01, size1, ins1, outs1, states2, tmp28, tmp29, arr4, tmp30, lambda4;
      first01 = _deforest_Deforest_Arr_4_01;
      first11 = _deforest_Deforest_Arr_4_11;
      first21 = _deforest_Deforest_Arr_4_21;
      first31 = _deforest_Deforest_Arr_4_31;
      size1 = first01;
      ins1 = first11;
      outs1 = first21;
      states2 = first31;
      lambda4 = (undefined, function (x, y) {
        let arr5, tmp31, _deforest_Deforest_Arr_4_02, _deforest_Deforest_Arr_4_12, _deforest_Deforest_Arr_4_22, _deforest_Deforest_Arr_4_32;
        _deforest_Deforest_Arr_4_02 = size1;
        _deforest_Deforest_Arr_4_12 = ins1;
        _deforest_Deforest_Arr_4_22 = outs1;
        _deforest_Deforest_Arr_4_32 = states2;
        arr5 = () => {
          let first32, first22, first12, first02, size2, ins2, outs2, states3, tmp32;
          first02 = _deforest_Deforest_Arr_4_02;
          first12 = _deforest_Deforest_Arr_4_12;
          first22 = _deforest_Deforest_Arr_4_22;
          first32 = _deforest_Deforest_Arr_4_32;
          size2 = first02;
          ins2 = first12;
          outs2 = first22;
          states3 = first32;
          tmp32 = NofibPrelude.map(circsim.pathDepth, states3);
          return NofibPrelude.maximum(tmp32)
        };
        tmp31 = critical_path_depth_inst_69_70_68_61_57_83_tsni(arr5);
        return do_cycle_inst_69_70_68_61_57_46_tsni(tmp31, x, y)
      });
      tmp28 = lambda4;
      tmp29 = NofibPrelude.map(circsim.init_dffs, states2);
      arr4 = [
        size1,
        ins1,
        outs1,
        tmp29
      ];
      tmp30 = scanl_inst_69_70_68_61_57_86_tsni(tmp28, arr4, inputs_list);
      return NofibPrelude.tail(tmp30)
    };
    return arr3
  };
  return arr2
};
map_inst_69_70_68_60_54_tsni = function map_inst_69_70_68_60_54_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
reg_inst_69_70_68_60_55_tsni = function reg_inst_69_70_68_60_55_tsni(sto, n) {
  let arr, tmp, tmp1, tmp2, tmp3, arr1, tmp4, arr2, tmp5, tmp6, tmp7, arr3, tmp8, arr4, tmp9, tmp10, tmp11, tmp12, arr5, tmp13, arr6, tmp14, tmp15, arr7, tmp16, tmp17, tmp18, arr8, arr9, tmp19, tmp20, arr10, tmp21, tmp22, tmp23, tmp24, arr11, tmp25, arr12, tmp26, tmp27, arr13, tmp28, tmp29, tmp30, tmp31, arr14, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  arr = [
    0,
    circsim.F,
    false,
    0,
    true,
    4
  ];
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  tmp1 = runtime.safeCall(circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp));
  tmp2 = n + 1;
  tmp3 = n + 5;
  arr1 = [
    tmp3,
    0,
    circsim.F
  ];
  tmp4 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
  arr2 = [
    0,
    circsim.F,
    false,
    0,
    true,
    5
  ];
  tmp5 = NofibPrelude.Cons(arr2, NofibPrelude.Nil);
  tmp6 = runtime.safeCall(circsim.PS(tmp2, circsim.Dff, 1, tmp4, tmp5));
  tmp7 = n + 2;
  arr3 = [
    sto,
    0,
    circsim.F
  ];
  tmp8 = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
  arr4 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp9 = NofibPrelude.Cons(arr4, NofibPrelude.Nil);
  tmp10 = runtime.safeCall(circsim.PS(tmp7, circsim.Inv, 1, tmp8, tmp9));
  tmp11 = n + 3;
  tmp12 = n + 1;
  arr5 = [
    tmp12,
    0,
    circsim.F
  ];
  tmp13 = n + 2;
  arr6 = [
    tmp13,
    0,
    circsim.F
  ];
  tmp14 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(arr5, tmp14);
  arr7 = [
    0,
    circsim.F,
    false,
    0,
    true,
    2
  ];
  tmp16 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
  tmp17 = runtime.safeCall(circsim.PS(tmp11, circsim.And2, 2, tmp15, tmp16));
  tmp18 = n + 4;
  arr8 = [
    sto,
    0,
    circsim.F
  ];
  arr9 = [
    n,
    0,
    circsim.F
  ];
  tmp19 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
  tmp20 = NofibPrelude.Cons(arr8, tmp19);
  arr10 = [
    0,
    circsim.F,
    false,
    0,
    true,
    1
  ];
  tmp21 = NofibPrelude.Cons(arr10, NofibPrelude.Nil);
  tmp22 = runtime.safeCall(circsim.PS(tmp18, circsim.And2, 1, tmp20, tmp21));
  tmp23 = n + 5;
  tmp24 = n + 3;
  arr11 = [
    tmp24,
    0,
    circsim.F
  ];
  tmp25 = n + 4;
  arr12 = [
    tmp25,
    0,
    circsim.F
  ];
  tmp26 = NofibPrelude.Cons(arr12, NofibPrelude.Nil);
  tmp27 = NofibPrelude.Cons(arr11, tmp26);
  arr13 = [
    0,
    circsim.F,
    true,
    4,
    false,
    0
  ];
  tmp28 = NofibPrelude.Cons(arr13, NofibPrelude.Nil);
  tmp29 = runtime.safeCall(circsim.PS(tmp23, circsim.Or2, 3, tmp27, tmp28));
  tmp30 = n + 6;
  tmp31 = n + 1;
  arr14 = [
    tmp31,
    0,
    circsim.F
  ];
  tmp32 = NofibPrelude.Cons(arr14, NofibPrelude.Nil);
  tmp33 = runtime.safeCall(circsim.PS(tmp30, circsim.Outp, 4, tmp32, NofibPrelude.Nil));
  _deforest_Cons_head6 = tmp33;
  _deforest_Cons_tail6 = (ys) => {
    return ys
  };
  tmp34 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp29;
  _deforest_Cons_tail5 = tmp34;
  tmp35 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp22;
  _deforest_Cons_tail4 = tmp35;
  tmp36 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp17;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp10;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp6;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp39;
  return (ys) => {
    return match_xs_arm_Cons_inst_69_70_68_60_84_85_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
map_inst_69_70_68_60_53_tsni = function map_inst_69_70_68_60_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_69_70_68_60_52_tsni = function enumFromTo_inst_69_70_68_60_52_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_69_70_68_60_52_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_69_70_68_60_53_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_69_70_68_60_54_tsni(f1, xs);
        _deforest_Cons_head2 = tmp2;
        _deforest_Cons_tail2 = tmp3;
        return () => {
          let param01, param11, x1, xs1, tmp4;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs1 = param11;
          tmp4 = concat_inst_69_70_68_60_84_tsni(xs1);
          return append_inst_69_70_68_60_84_85_tsni(x1, tmp4)
        }
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_69_70_68_60_51_tsni = function map_inst_69_70_68_60_51_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_69_70_68_60_50_tsni = function enumFromTo_inst_69_70_68_60_50_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_69_70_68_60_50_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_69_70_68_60_51_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_69_70_68_60_65_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f2) => {
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_69_70_68_61_58_87_tsni(f2, xs);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (f2) => {
          return match_xs_arm_Nil_inst_69_70_68_61_58_87_tsni(f2)
        }
      }
    }
  }
};
map_inst_69_70_68_60_49_tsni = function map_inst_69_70_68_60_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_69_70_68_60_48_tsni = function enumFromTo_inst_69_70_68_60_48_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_69_70_68_60_48_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_69_70_68_60_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, x1, xs1) => {
        let param01, param11, y, ys, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp4 = runtime.safeCall(f1(x1, y));
        tmp5 = zipWith_lz_nl_inst_69_70_68_60_66_tsni(f1, xs1, ys);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (ys1) => {
          return match_xs_arm_Cons_inst_69_70_68_61_57_46_42_tsni(ys1, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      }
    }
  } else {
    return (f) => {
      return (f1, x, xs) => {
        return (ys) => {
          return match_xs_arm_default_inst_69_70_68_61_57_46_42_tsni(ys)
        }
      }
    }
  }
};
circuit_simulate_inst_69_70_68_61_tsni = function circuit_simulate_inst_69_70_68_61_tsni(inputs_list, circuit) {
  let tmp;
  tmp = simulate_inst_69_70_68_61_57_tsni(inputs_list, circuit);
  return NofibPrelude.map(collect_outputs_inst_69_70_68_61_58_tsni, tmp)
};
collect_outputs_inst_69_70_68_61_58_tsni = function collect_outputs_inst_69_70_68_61_58_tsni(tp4) {
  let thrid, get_output, first3, first2, first1, first0, size, ins, outs, states, lambda;
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    thrid = function thrid(tp3) {
      let first21, first11, first01, v;
      if (globalThis.Array.isArray(tp3) && tp3.length === 3) {
        first01 = tp3[0];
        first11 = tp3[1];
        first21 = tp3[2];
        v = first21;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    };
    get_output = function get_output(states1, label_p) {
      return runtime.safeCall(label_p(thrid, states1))
    };
    lambda = (undefined, function (p) {
      return get_output(states, p)
    });
    return map_inst_69_70_68_61_58_87_tsni(lambda, outs)
  } else {
    throw new globalThis.Error("match error");
  }
};
simulate_inst_69_70_68_61_57_tsni = function simulate_inst_69_70_68_61_57_tsni(inputs_list, b) {
  return runtime.safeCall(b(inputs_list))
};
do_cycle_inst_69_70_68_61_57_46_tsni = function do_cycle_inst_69_70_68_61_57_46_tsni(cpd, tp4, inputs) {
  let sim_then_send, first3, first2, first1, first0, size, ins, outs, states, states1, states2, states3, states4, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
  sim_then_send = function sim_then_send(state, d) {
    let tmp5;
    tmp5 = circsim.simulate_components(d, state);
    return do_sends_inst_69_70_68_61_57_46_40_tsni(d, tmp5)
  };
  if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
    first0 = tp4[0];
    first1 = tp4[1];
    first2 = tp4[2];
    first3 = tp4[3];
    size = first0;
    ins = first1;
    outs = first2;
    states = first3;
    lambda = (undefined, function (s) {
      let tmp5;
      tmp5 = zip_inst_69_70_68_61_57_46_42_tsni(ins, inputs);
      return store_inputs_inst_69_70_68_61_57_46_41_tsni(tmp5, s)
    });
    tmp = NofibPrelude.map(lambda, states);
    states1 = tmp;
    tmp1 = do_sends_inst_69_70_68_61_57_46_43_tsni(0, states1);
    states2 = tmp1;
    tmp2 = enumFromTo_inst_69_70_68_61_57_46_44_tsni(1, cpd);
    tmp3 = foldl_inst_69_70_68_61_57_46_82_tsni(sim_then_send, states2, tmp2);
    states3 = tmp3;
    tmp4 = circsim.restore_requests(states, states3);
    states4 = tmp4;
    arr = [
      size,
      ins,
      outs,
      states4
    ];
    return arr
  } else {
    throw globalThis.Error(tp4);
  }
};
enumFromTo_inst_69_70_68_61_57_46_44_tsni = function enumFromTo_inst_69_70_68_61_57_46_44_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_69_70_68_61_57_46_44_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f, a1) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = runtime.safeCall(f(a1, h));
      return foldl_inst_69_70_68_61_57_46_82_tsni(f, tmp2, t)
    }
  } else {
    return (f, a1) => {
      return a1
    }
  }
};
do_sends_inst_69_70_68_61_57_46_43_tsni = function do_sends_inst_69_70_68_61_57_46_43_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_69_70_68_61_57_46_43_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_69_70_68_61_57_46_43_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_69_70_68_61_57_46_43_37_tsni = function acknowledge_inst_69_70_68_61_57_46_43_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_69_70_68_61_57_46_43_37_17_tsni(check_lr_requests, xs);
    return orList_inst_69_70_68_61_57_46_43_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_69_70_68_61_57_46_43_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_69_70_68_61_57_46_43_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_69_70_68_61_57_46_43_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_69_70_68_61_57_46_43_37_19_tsni = function map_inst_69_70_68_61_57_46_43_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_69_70_68_61_57_46_43_37_18_tsni = function map_inst_69_70_68_61_57_46_43_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_43_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_43_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_69_70_68_61_57_46_43_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_69_70_68_61_57_46_43_37_17_tsni = function map_inst_69_70_68_61_57_46_43_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_43_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_69_70_68_61_57_46_43_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_69_70_68_61_57_46_43_38_tsni = function do_send_inst_69_70_68_61_57_46_43_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_69_70_68_61_57_46_43_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_69_70_68_61_57_46_43_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_69_70_68_61_57_46_43_38_34_tsni(x);
    return snd_inst_69_70_68_61_57_46_43_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_69_70_68_61_57_46_43_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_69_70_68_61_57_46_43_38_35_tsni = function update_io_inst_69_70_68_61_57_46_43_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_69_70_68_61_57_46_43_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_69_70_68_61_57_46_43_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_69_70_68_61_57_46_43_38_35_30_tsni = function update_i_inst_69_70_68_61_57_46_43_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_69_70_68_61_57_46_43_38_35_30_24_tsni(r, ins);
    return up_i_inst_69_70_68_61_57_46_43_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_69_70_68_61_57_46_43_38_35_30_25_tsni = function up_i_inst_69_70_68_61_57_46_43_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_69_70_68_61_57_46_43_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_69_70_68_61_57_46_43_38_35_30_24_tsni = function up_i_inst_69_70_68_61_57_46_43_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_69_70_68_61_57_46_43_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_69_70_68_61_57_46_43_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_24_22_tsni = function compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_69_70_68_61_57_46_43_38_35_30_24_26_tsni = function map_inst_69_70_68_61_57_46_43_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_43_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_43_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_69_70_68_61_57_46_43_38_35_31_tsni = function update_o_inst_69_70_68_61_57_46_43_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_69_70_68_61_57_46_43_38_35_31_28_tsni(rp, out_);
    return check_left_inst_69_70_68_61_57_46_43_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_69_70_68_61_57_46_43_38_35_31_28_tsni = function check_right_inst_69_70_68_61_57_46_43_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_43_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_69_70_68_61_57_46_43_38_34_tsni = function send_inst_69_70_68_61_57_46_43_38_34_tsni(xs) {
  return scanlr_inst_69_70_68_61_57_46_43_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_69_70_68_61_57_46_43_38_34_13_tsni = function scanlr_inst_69_70_68_61_57_46_43_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni(l1);
              tmp7 = get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_69_70_68_61_57_46_43_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_69_70_68_61_57_46_43_38_34_13_10_tsni = function sweep_ud_inst_69_70_68_61_57_46_43_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni = function upsweep_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni = function downsweep_inst_69_70_68_61_57_46_43_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni = function put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_69_70_68_61_57_46_43_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_69_70_68_61_57_46_43_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_69_70_68_61_57_46_43_38_33_tsni = function map_inst_69_70_68_61_57_46_43_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_43_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_43_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
zip_inst_69_70_68_61_57_46_42_tsni = function zip_inst_69_70_68_61_57_46_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
do_sends_inst_69_70_68_61_57_46_40_tsni = function do_sends_inst_69_70_68_61_57_46_40_tsni(d, states) {
  let lambda, lambda1;
  lambda = (undefined, function (s) {
    return acknowledge_inst_69_70_68_61_57_46_40_37_tsni(d, s)
  });
  lambda1 = (undefined, function (x) {
    return do_send_inst_69_70_68_61_57_46_40_38_tsni(d, x)
  });
  return NofibPrelude.until(lambda, lambda1, states)
};
acknowledge_inst_69_70_68_61_57_46_40_37_tsni = function acknowledge_inst_69_70_68_61_57_46_40_37_tsni(d, states) {
  let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
  check_requests = function check_requests(xs) {
    let tmp3;
    tmp3 = map_inst_69_70_68_61_57_46_40_37_17_tsni(check_lr_requests, xs);
    return orList_inst_69_70_68_61_57_46_40_37_76_tsni(tmp3)
  };
  check_lr_requests = function check_lr_requests(pql) {
    let first5, first4, first3, first2, first1, first0, p, m, ql, dl, qr, dr;
    if (globalThis.Array.isArray(pql) && pql.length === 6) {
      first0 = pql[0];
      first1 = pql[1];
      first2 = pql[2];
      first3 = pql[3];
      first4 = pql[4];
      first5 = pql[5];
      p = first0;
      m = first1;
      ql = first2;
      dl = first3;
      qr = first4;
      dr = first5;
      return ql || qr
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_69_70_68_61_57_46_40_37_18_tsni(lambda, states);
  states1 = tmp;
  lambda1 = (undefined, function (s) {
    let tmp3;
    tmp3 = circsim.outports(s);
    return check_requests(tmp3)
  });
  tmp1 = map_inst_69_70_68_61_57_46_40_37_19_tsni(lambda1, states1);
  tmp2 = orList_inst_69_70_68_61_57_46_40_37_77_tsni(tmp1);
  return Predef.not(tmp2)
};
map_inst_69_70_68_61_57_46_40_37_19_tsni = function map_inst_69_70_68_61_57_46_40_37_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_69_70_68_61_57_46_40_37_18_tsni = function map_inst_69_70_68_61_57_46_40_37_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_40_37_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_40_37_19_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        if (h === true) {
          return true
        } else {
          return orList_inst_69_70_68_61_57_46_40_37_77_tsni(t)
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_69_70_68_61_57_46_40_37_17_tsni = function map_inst_69_70_68_61_57_46_40_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_40_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, h, t;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      if (h === true) {
        return true
      } else {
        return orList_inst_69_70_68_61_57_46_40_37_76_tsni(t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return false
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
do_send_inst_69_70_68_61_57_46_40_38_tsni = function do_send_inst_69_70_68_61_57_46_40_38_tsni(d, states) {
  let states1, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
  lambda = (undefined, function (s) {
    return circsim.check_depth(d, s)
  });
  tmp = map_inst_69_70_68_61_57_46_40_38_33_tsni(lambda, states);
  states1 = tmp;
  tmp1 = map_inst_69_70_68_61_57_46_40_38_80_tsni(circsim.make_packet, states1);
  tmp2 = circsim.pad_packets(tmp1);
  tmp3 = NofibPrelude.transpose(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp6;
    tmp6 = send_inst_69_70_68_61_57_46_40_38_34_tsni(x);
    return snd_inst_69_70_68_61_57_46_40_38_81_tsni(tmp6)
  });
  tmp4 = NofibPrelude.map(lambda1, tmp3);
  send_results = tmp4;
  tmp5 = NofibPrelude.transpose(send_results);
  pss_ = tmp5;
  lambda2 = (undefined, function (x, y) {
    return update_io_inst_69_70_68_61_57_46_40_38_35_tsni(d, x, y)
  });
  return NofibPrelude.zipWith(lambda2, pss_, states)
};
update_io_inst_69_70_68_61_57_46_40_38_35_tsni = function update_io_inst_69_70_68_61_57_46_40_38_35_tsni(d, lrps, state) {
  let update_is, update_os, tmp;
  update_is = function update_is(state1) {
    let tmp1, tmp2;
    tmp1 = circsim.inports(state1);
    tmp2 = NofibPrelude.foldr(update_i_inst_69_70_68_61_57_46_40_38_35_30_tsni, tmp1, lrps);
    return circsim.updateInports(state1, tmp2)
  };
  update_os = function update_os(state1) {
    let scrut, tmp1, tmp2, tmp3;
    tmp1 = circsim.pathDepth(state1);
    scrut = tmp1 == d;
    if (scrut === true) {
      tmp2 = circsim.outports(state1);
      tmp3 = NofibPrelude.zipWith(update_o_inst_69_70_68_61_57_46_40_38_35_31_tsni, lrps, tmp2);
      return circsim.updateOutports(state1, tmp3)
    } else {
      return state1
    }
  };
  tmp = update_is(state);
  return update_os(tmp)
};
update_i_inst_69_70_68_61_57_46_40_38_35_30_tsni = function update_i_inst_69_70_68_61_57_46_40_38_35_30_tsni(l_r, ins) {
  let first1, first0, l, r, tmp;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = up_i_inst_69_70_68_61_57_46_40_38_35_30_24_tsni(r, ins);
    return up_i_inst_69_70_68_61_57_46_40_38_35_30_25_tsni(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_69_70_68_61_57_46_40_38_35_30_25_tsni = function up_i_inst_69_70_68_61_57_46_40_38_35_30_25_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        return runtime.safeCall(pid_port_m(i1, p1, m_1))
      };
      return compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni(arr, x)
    });
    return map_inst_69_70_68_61_57_46_40_38_35_30_25_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
up_i_inst_69_70_68_61_57_46_40_38_35_30_24_tsni = function up_i_inst_69_70_68_61_57_46_40_38_35_30_24_tsni(ipm_, ins) {
  let first7, first6, first5, first4, first3, first2, first1, first0, i, p, m_, lambda;
  if (globalThis.Array.isArray(ipm_) && ipm_.length === 8) {
    first0 = ipm_[0];
    first1 = ipm_[1];
    first2 = ipm_[2];
    first3 = ipm_[3];
    first4 = ipm_[4];
    first5 = ipm_[5];
    first6 = ipm_[6];
    first7 = ipm_[7];
    i = first0;
    p = first1;
    m_ = first2;
    lambda = (undefined, function (x) {
      let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
      _deforest_Deforest_Arr_3_0 = i;
      _deforest_Deforest_Arr_3_1 = p;
      _deforest_Deforest_Arr_3_2 = m_;
      arr = (pid_port_m) => {
        let first21, first11, first01, i1, p1, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22;
        first01 = _deforest_Deforest_Arr_3_0;
        first11 = _deforest_Deforest_Arr_3_1;
        first21 = _deforest_Deforest_Arr_3_2;
        i1 = first01;
        p1 = first11;
        m_1 = first21;
        if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
          first02 = pid_port_m[0];
          first12 = pid_port_m[1];
          first22 = pid_port_m[2];
          pid_ = first02;
          port = first12;
          m = first22;
          _deforest_Deforest_Arr_2_01 = i1;
          _deforest_Deforest_Arr_2_11 = p1;
          arr1 = (t2) => {
            let first13, first03, a, b;
            first03 = _deforest_Deforest_Arr_2_01;
            first13 = _deforest_Deforest_Arr_2_11;
            a = first03;
            b = first13;
            return runtime.safeCall(t2(a, b))
          };
          _deforest_Deforest_Arr_2_0 = pid_;
          _deforest_Deforest_Arr_2_1 = port;
          arr2 = (a, b) => {
            let first13, first03, c, d, scrut1, scrut2;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            c = first03;
            d = first13;
            scrut1 = a == c;
            if (scrut1 === true) {
              scrut2 = b == d;
              if (scrut2 === true) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          };
          scrut = eqTup2_inst_69_70_68_61_57_46_40_38_35_30_24_22_78_tsni(arr1, arr2);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_02 = pid_;
            _deforest_Deforest_Arr_3_12 = port;
            _deforest_Deforest_Arr_3_22 = m_1;
            arr3 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
            };
            return arr3
          } else {
            _deforest_Deforest_Arr_3_01 = pid_;
            _deforest_Deforest_Arr_3_11 = port;
            _deforest_Deforest_Arr_3_21 = m;
            arr4 = (i2, p2, m_2) => {
              return match_pid_port_m_arm_Deforest_Arr_3_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni(i2, p2, m_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            return arr4
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_24_22_tsni(arr, x)
    });
    return map_inst_69_70_68_61_57_46_40_38_35_30_24_26_tsni(lambda, ins)
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_24_22_tsni = function compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_24_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_69_70_68_61_57_46_40_38_35_30_24_26_tsni = function map_inst_69_70_68_61_57_46_40_38_35_30_24_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_40_38_35_30_24_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_40_38_35_30_25_26_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
update_o_inst_69_70_68_61_57_46_40_38_35_31_tsni = function update_o_inst_69_70_68_61_57_46_40_38_35_31_tsni(lp_rp, out_) {
  let first1, first0, lp, rp, tmp;
  if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
    first0 = lp_rp[0];
    first1 = lp_rp[1];
    lp = first0;
    rp = first1;
    tmp = check_right_inst_69_70_68_61_57_46_40_38_35_31_28_tsni(rp, out_);
    return check_left_inst_69_70_68_61_57_46_40_38_35_31_79_tsni(lp, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
check_right_inst_69_70_68_61_57_46_40_38_35_31_28_tsni = function check_right_inst_69_70_68_61_57_46_40_38_35_31_28_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p, m, ql, dl, qr, dr, scrut, tmp, arr, arr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    if (globalThis.Array.isArray(b) && b.length === 6) {
      first01 = b[0];
      first11 = b[1];
      first21 = b[2];
      first31 = b[3];
      first41 = b[4];
      first51 = b[5];
      p = first01;
      m = first11;
      ql = first21;
      dl = first31;
      qr = first41;
      dr = first51;
      tmp = pdl > 0;
      scrut = pql && tmp;
      if (scrut === true) {
        _deforest_Deforest_Arr_6_0 = p;
        _deforest_Deforest_Arr_6_1 = m;
        _deforest_Deforest_Arr_6_2 = ql;
        _deforest_Deforest_Arr_6_3 = dl;
        _deforest_Deforest_Arr_6_4 = qr;
        _deforest_Deforest_Arr_6_5 = dr;
        arr = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_0, _deforest_Deforest_Arr_6_1, _deforest_Deforest_Arr_6_2, _deforest_Deforest_Arr_6_3, _deforest_Deforest_Arr_6_4, _deforest_Deforest_Arr_6_5)
        };
        return arr
      } else {
        _deforest_Deforest_Arr_6_01 = p;
        _deforest_Deforest_Arr_6_11 = m;
        _deforest_Deforest_Arr_6_21 = false;
        _deforest_Deforest_Arr_6_31 = dl;
        _deforest_Deforest_Arr_6_41 = qr;
        _deforest_Deforest_Arr_6_51 = dr;
        arr1 = (pqr1, pdr1) => {
          return match_b_arm_Deforest_Arr_6_inst_69_70_68_61_57_46_40_38_35_31_79_tsni(pqr1, pdr1, _deforest_Deforest_Arr_6_01, _deforest_Deforest_Arr_6_11, _deforest_Deforest_Arr_6_21, _deforest_Deforest_Arr_6_31, _deforest_Deforest_Arr_6_41, _deforest_Deforest_Arr_6_51)
        };
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
send_inst_69_70_68_61_57_46_40_38_34_tsni = function send_inst_69_70_68_61_57_46_40_38_34_tsni(xs) {
  return scanlr_inst_69_70_68_61_57_46_40_38_34_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
};
scanlr_inst_69_70_68_61_57_46_40_38_34_13_tsni = function scanlr_inst_69_70_68_61_57_46_40_38_34_13_tsni(f, g, lu, ru, xs) {
  let down3, up, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
  up = function up(f1, g1, lxly, rxry) {
    let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        tmp2 = runtime.safeCall(f1(lx, rx));
        tmp3 = runtime.safeCall(g1(ly, ry));
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  down3 = function down3(f1, g1, lxly, rxry, ab) {
    let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
      first0 = lxly[0];
      first1 = lxly[1];
      lx = first0;
      ly = first1;
      if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
        first01 = rxry[0];
        first11 = rxry[1];
        rx = first01;
        ry = first11;
        if (globalThis.Array.isArray(ab) && ab.length === 2) {
          first02 = ab[0];
          first12 = ab[1];
          a = first02;
          b = first12;
          tmp2 = runtime.safeCall(g1(ry, b));
          arr1 = [
            a,
            tmp2
          ];
          tmp3 = runtime.safeCall(f1(a, lx));
          arr2 = [
            tmp3,
            b
          ];
          _deforest_Deforest_Arr_2_0 = arr1;
          _deforest_Deforest_Arr_2_1 = arr2;
          arr3 = (g2, l, r) => {
            let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
            first03 = _deforest_Deforest_Arr_2_0;
            first13 = _deforest_Deforest_Arr_2_1;
            dl = first03;
            dr = first13;
            tmp4 = downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni(g2, dl, l);
            tmp5 = downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni(g2, dr, r);
            _deforest_Node_value = circsim.Unit;
            _deforest_Node_left = tmp4;
            _deforest_Node_right = tmp5;
            return () => {
              let param0, param1, param2, l1, r1, tmp6, tmp7;
              param0 = _deforest_Node_value;
              param1 = _deforest_Node_left;
              param2 = _deforest_Node_right;
              l1 = param1;
              r1 = param2;
              tmp6 = get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni(l1);
              tmp7 = get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni(r1);
              return NofibPrelude.append(tmp6, tmp7)
            }
          };
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    let arr1;
    arr1 = [
      x,
      x
    ];
    return arr1
  });
  tmp = NofibPrelude.map(lambda, xs);
  xs_ = tmp;
  arr = [
    lu,
    ru
  ];
  tmp1 = put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(xs_);
  lambda1 = (undefined, function (a, b) {
    return up(f, g, a, b)
  });
  lambda2 = (undefined, function (a, b, c) {
    return down3(f, g, a, b, c)
  });
  scrut = sweep_ud_inst_69_70_68_61_57_46_40_38_34_13_10_tsni(lambda1, lambda2, arr, tmp1);
  return runtime.safeCall(scrut(f, g, lu, ru))
};
sweep_ud_inst_69_70_68_61_57_46_40_38_34_13_10_tsni = function sweep_ud_inst_69_70_68_61_57_46_40_38_34_13_10_tsni(up, down, u, t) {
  let scrut, first1, first0, ans, t_, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut = upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(up, t);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    ans = first0;
    t_ = first1;
    tmp = downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni(down, u, t_);
    _deforest_Deforest_Arr_2_0 = ans;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (f, g, lu, ru) => {
      let first11, first01, first12, first02, l_ans, r_ans, t_1, ans1, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(first01) && first01.length === 2) {
        first02 = first01[0];
        first12 = first01[1];
        l_ans = first02;
        r_ans = first12;
        t_1 = first11;
        tmp1 = runtime.safeCall(g(r_ans, ru));
        tmp2 = runtime.safeCall(f(lu, l_ans));
        arr1 = [
          tmp1,
          tmp2
        ];
        ans1 = arr1;
        tmp3 = get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni(t_1);
        _deforest_Deforest_Arr_2_01 = ans1;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr2 = () => {
          let first13, first03, f1, s;
          first03 = _deforest_Deforest_Arr_2_01;
          first13 = _deforest_Deforest_Arr_2_11;
          f1 = first03;
          s = first13;
          return s
        };
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni = function upsweep_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, t) {
  return runtime.safeCall(t(f))
};
downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni = function downsweep_inst_69_70_68_61_57_46_40_38_34_13_10_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni = function put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(xs) {
  let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1, _deforest_Cell_value;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cell_value = x;
      return (f) => {
        let param01, a, tmp8, arr, _deforest_Cell_value1;
        param01 = _deforest_Cell_value;
        a = param01;
        _deforest_Cell_value1 = a;
        tmp8 = (g, d) => {
          let param02, x1, _deforest_Cell_value2;
          param02 = _deforest_Cell_value1;
          x1 = param02;
          _deforest_Cell_value2 = d;
          return () => {
            let param03, x2;
            param03 = _deforest_Cell_value2;
            x2 = param03;
            return NofibPrelude.Cons(x2, NofibPrelude.Nil)
          }
        };
        arr = [
          a,
          tmp8
        ];
        return arr
      }
    } else {
      tmp = NofibPrelude.listLen(xs);
      tmp1 = NofibPrelude.intDiv(tmp, 2);
      scrut = NofibPrelude.splitAt(tmp1, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp2 = put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(fstHalf);
        tmp3 = put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(sndHalf);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return (f) => {
          return match_t_arm_Node_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    tmp4 = NofibPrelude.listLen(xs);
    tmp5 = NofibPrelude.intDiv(tmp4, 2);
    scrut = NofibPrelude.splitAt(tmp5, xs);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      fstHalf = first0;
      sndHalf = first1;
      tmp6 = put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(fstHalf);
      tmp7 = put_inst_69_70_68_61_57_46_40_38_34_13_11_tsni(sndHalf);
      _deforest_Node_value1 = circsim.Unit;
      _deforest_Node_left1 = tmp6;
      _deforest_Node_right1 = tmp7;
      return (f) => {
        return match_t_arm_Node_inst_69_70_68_61_57_46_40_38_34_13_10_1_tsni(f, _deforest_Node_value1, _deforest_Node_left1, _deforest_Node_right1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map_inst_69_70_68_61_57_46_40_38_33_tsni = function map_inst_69_70_68_61_57_46_40_38_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_61_57_46_40_38_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_61_57_46_40_38_80_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_69_70_68_62_tsni = function replicate_inst_69_70_68_62_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, q) => {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_69_70_68_62_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, q) => {
      let param0, param1, x1, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(q, x1));
      tmp3 = scanl_inst_69_70_68_61_57_86_tsni(f, tmp2, xs);
      return NofibPrelude.Cons(q, tmp3)
    }
  }
};
replicate_inst_69_70_68_63_tsni = function replicate_inst_69_70_68_63_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (x1, xs) => {
      return (lscomp, state, pid_) => {
        return match_ls_arm_Nil_inst_69_70_68_61_57_46_41_tsni(lscomp, state, pid_)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_69_70_68_63_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (x1, xs) => {
      let param0, param1, y, ys, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      _deforest_Deforest_Arr_2_0 = x1;
      _deforest_Deforest_Arr_2_1 = y;
      arr = (lscomp, state, pid_, t) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(lscomp, state, pid_, t, first1))
      };
      tmp2 = zip_inst_69_70_68_61_57_46_42_tsni(xs, ys);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp, state, pid_) => {
        let param01, param11, h, t;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        return runtime.safeCall(h(lscomp, state, pid_, t))
      }
    }
  }
};
pad_circuit_inst_69_70_68_64_tsni = function pad_circuit_inst_69_70_68_64_tsni(size_ins_outs_states) {
  return runtime.safeCall(size_ins_outs_states())
};
zipWith_lz_nl_inst_69_70_68_60_65_tsni = function zipWith_lz_nl_inst_69_70_68_60_65_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (f1) => {
      return match_xs_arm_Nil_inst_69_70_68_61_58_87_tsni(f1)
    }
  }
};
zipWith_lz_nl_inst_69_70_68_60_66_tsni = function zipWith_lz_nl_inst_69_70_68_60_66_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_default_inst_69_70_68_61_57_46_42_tsni(ys)
    }
  }
};
downsweep_inst_0_5_tsni = function downsweep_inst_0_5_tsni(g, d, t) {
  return runtime.safeCall(t(g, d))
};
get_inst_2_71_tsni = function get_inst_2_71_tsni(t) {
  return runtime.safeCall(t())
};
get_inst_6_72_tsni = function get_inst_6_72_tsni(t) {
  return runtime.safeCall(t())
};
get_inst_9_73_tsni = function get_inst_9_73_tsni(t) {
  return runtime.safeCall(t())
};
get_inst_12_13_73_tsni = function get_inst_12_13_73_tsni(t) {
  return runtime.safeCall(t())
};
head_inst_14_74_tsni = function head_inst_14_74_tsni(l) {
  return runtime.safeCall(l())
};
head_inst_15_75_tsni = function head_inst_15_75_tsni(l) {
  return runtime.safeCall(l())
};
orList_inst_16_76_tsni = function orList_inst_16_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_16_77_tsni = function orList_inst_16_77_tsni(ls) {
  return runtime.safeCall(ls())
};
eqTup2_inst_20_78_tsni = function eqTup2_inst_20_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
eqTup2_inst_21_22_78_tsni = function eqTup2_inst_21_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
eqTup2_inst_23_24_22_78_tsni = function eqTup2_inst_23_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_23_25_22_tsni = function compare_and_update_inst_23_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_23_25_26_tsni = function map_inst_23_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_27_79_tsni = function check_left_inst_27_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
compare_and_update_inst_29_30_25_22_tsni = function compare_and_update_inst_29_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_29_30_24_22_78_tsni = function eqTup2_inst_29_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_29_30_25_26_tsni = function map_inst_29_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_29_31_79_tsni = function check_left_inst_29_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_32_80_tsni = function map_inst_32_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_32_34_13_73_tsni = function get_inst_32_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_32_81_tsni = function snd_inst_32_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_32_35_31_79_tsni = function check_left_inst_32_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_32_35_30_24_22_78_tsni = function eqTup2_inst_32_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_32_35_30_25_22_tsni = function compare_and_update_inst_32_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_32_35_30_25_26_tsni = function map_inst_32_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_36_37_77_tsni = function orList_inst_36_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_36_37_76_tsni = function orList_inst_36_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_36_38_35_30_25_22_tsni = function compare_and_update_inst_36_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_36_38_35_30_24_22_78_tsni = function eqTup2_inst_36_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_36_38_35_30_25_26_tsni = function map_inst_36_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_36_38_35_31_79_tsni = function check_left_inst_36_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_36_38_34_13_73_tsni = function get_inst_36_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_36_38_81_tsni = function snd_inst_36_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_36_38_80_tsni = function map_inst_36_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_39_40_38_80_tsni = function map_inst_39_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_39_40_38_34_13_73_tsni = function get_inst_39_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_39_40_38_81_tsni = function snd_inst_39_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_39_40_38_35_31_79_tsni = function check_left_inst_39_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_39_40_38_35_30_24_22_78_tsni = function eqTup2_inst_39_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_39_40_38_35_30_25_22_tsni = function compare_and_update_inst_39_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_39_40_38_35_30_25_26_tsni = function map_inst_39_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_39_40_37_76_tsni = function orList_inst_39_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_39_40_37_77_tsni = function orList_inst_39_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
head_inst_39_41_75_tsni = function head_inst_39_41_75_tsni(l) {
  return runtime.safeCall(l())
};
map_inst_39_43_38_80_tsni = function map_inst_39_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_39_43_38_34_13_73_tsni = function get_inst_39_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_39_43_38_81_tsni = function snd_inst_39_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_39_43_38_35_31_79_tsni = function check_left_inst_39_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_39_43_38_35_30_24_22_78_tsni = function eqTup2_inst_39_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_39_43_38_35_30_25_22_tsni = function compare_and_update_inst_39_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_39_43_38_35_30_25_26_tsni = function map_inst_39_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_39_43_37_76_tsni = function orList_inst_39_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_39_43_37_77_tsni = function orList_inst_39_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
foldl_inst_39_82_tsni = function foldl_inst_39_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
critical_path_depth_inst_45_83_tsni = function critical_path_depth_inst_45_83_tsni(siot) {
  return runtime.safeCall(siot())
};
foldl_inst_45_46_82_tsni = function foldl_inst_45_46_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
orList_inst_45_46_43_37_77_tsni = function orList_inst_45_46_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_45_46_43_37_76_tsni = function orList_inst_45_46_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_45_46_43_38_35_30_25_22_tsni = function compare_and_update_inst_45_46_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_45_46_43_38_35_30_24_22_78_tsni = function eqTup2_inst_45_46_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_45_46_43_38_35_30_25_26_tsni = function map_inst_45_46_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_45_46_43_38_35_31_79_tsni = function check_left_inst_45_46_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_45_46_43_38_34_13_73_tsni = function get_inst_45_46_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_45_46_43_38_81_tsni = function snd_inst_45_46_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_45_46_43_38_80_tsni = function map_inst_45_46_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
head_inst_45_46_41_75_tsni = function head_inst_45_46_41_75_tsni(l) {
  return runtime.safeCall(l())
};
orList_inst_45_46_40_37_77_tsni = function orList_inst_45_46_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_45_46_40_37_76_tsni = function orList_inst_45_46_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_45_46_40_38_35_30_25_22_tsni = function compare_and_update_inst_45_46_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_45_46_40_38_35_30_24_22_78_tsni = function eqTup2_inst_45_46_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_45_46_40_38_35_30_25_26_tsni = function map_inst_45_46_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_45_46_40_38_35_31_79_tsni = function check_left_inst_45_46_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_45_46_40_38_34_13_73_tsni = function get_inst_45_46_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_45_46_40_38_81_tsni = function snd_inst_45_46_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_45_46_40_38_80_tsni = function map_inst_45_46_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith_lz_nl_inst_47_66_tsni = function zipWith_lz_nl_inst_47_66_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_lz_nl_inst_47_65_tsni = function zipWith_lz_nl_inst_47_65_tsni(f, xss, yss) {
  let scrut, param0, param1, x, xs;
  scrut = NofibPrelude.force(xss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
concat_inst_47_84_tsni = function concat_inst_47_84_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_47_84_85_tsni = function append_inst_47_84_85_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_56_57_46_40_38_80_tsni = function map_inst_56_57_46_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_56_57_46_40_38_34_13_73_tsni = function get_inst_56_57_46_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_56_57_46_40_38_81_tsni = function snd_inst_56_57_46_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_56_57_46_40_38_35_31_79_tsni = function check_left_inst_56_57_46_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_56_57_46_40_38_35_30_24_22_78_tsni = function eqTup2_inst_56_57_46_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_56_57_46_40_38_35_30_25_22_tsni = function compare_and_update_inst_56_57_46_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_56_57_46_40_38_35_30_25_26_tsni = function map_inst_56_57_46_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_56_57_46_40_37_76_tsni = function orList_inst_56_57_46_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_56_57_46_40_37_77_tsni = function orList_inst_56_57_46_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
head_inst_56_57_46_41_75_tsni = function head_inst_56_57_46_41_75_tsni(l) {
  return runtime.safeCall(l())
};
map_inst_56_57_46_43_38_80_tsni = function map_inst_56_57_46_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_56_57_46_43_38_34_13_73_tsni = function get_inst_56_57_46_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_56_57_46_43_38_81_tsni = function snd_inst_56_57_46_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_56_57_46_43_38_35_31_79_tsni = function check_left_inst_56_57_46_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_56_57_46_43_38_35_30_24_22_78_tsni = function eqTup2_inst_56_57_46_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_56_57_46_43_38_35_30_25_22_tsni = function compare_and_update_inst_56_57_46_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_56_57_46_43_38_35_30_25_26_tsni = function map_inst_56_57_46_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_56_57_46_43_37_76_tsni = function orList_inst_56_57_46_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_56_57_46_43_37_77_tsni = function orList_inst_56_57_46_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
foldl_inst_56_57_46_82_tsni = function foldl_inst_56_57_46_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
critical_path_depth_inst_56_57_83_tsni = function critical_path_depth_inst_56_57_83_tsni(siot) {
  return runtime.safeCall(siot())
};
head_inst_56_58_74_tsni = function head_inst_56_58_74_tsni(l) {
  return runtime.safeCall(l())
};
concat_inst_59_60_84_tsni = function concat_inst_59_60_84_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_59_60_84_85_tsni = function append_inst_59_60_84_85_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_59_61_58_74_tsni = function head_inst_59_61_58_74_tsni(l) {
  return runtime.safeCall(l())
};
critical_path_depth_inst_59_61_57_83_tsni = function critical_path_depth_inst_59_61_57_83_tsni(siot) {
  return runtime.safeCall(siot())
};
foldl_inst_59_61_57_46_82_tsni = function foldl_inst_59_61_57_46_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
orList_inst_59_61_57_46_43_37_77_tsni = function orList_inst_59_61_57_46_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_59_61_57_46_43_37_76_tsni = function orList_inst_59_61_57_46_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_59_61_57_46_43_38_35_30_25_22_tsni = function compare_and_update_inst_59_61_57_46_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_59_61_57_46_43_38_35_30_24_22_78_tsni = function eqTup2_inst_59_61_57_46_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_59_61_57_46_43_38_35_30_25_26_tsni = function map_inst_59_61_57_46_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_59_61_57_46_43_38_35_31_79_tsni = function check_left_inst_59_61_57_46_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_59_61_57_46_43_38_34_13_73_tsni = function get_inst_59_61_57_46_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_59_61_57_46_43_38_81_tsni = function snd_inst_59_61_57_46_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_59_61_57_46_43_38_80_tsni = function map_inst_59_61_57_46_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
store_inputs_inst_59_61_57_46_41_tsni = function store_inputs_inst_59_61_57_46_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return NofibPrelude.head(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
orList_inst_59_61_57_46_40_37_77_tsni = function orList_inst_59_61_57_46_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_59_61_57_46_40_37_76_tsni = function orList_inst_59_61_57_46_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_59_61_57_46_40_38_35_30_25_22_tsni = function compare_and_update_inst_59_61_57_46_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_59_61_57_46_40_38_35_30_24_22_78_tsni = function eqTup2_inst_59_61_57_46_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_59_61_57_46_40_38_35_30_25_26_tsni = function map_inst_59_61_57_46_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_59_61_57_46_40_38_35_31_79_tsni = function check_left_inst_59_61_57_46_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_59_61_57_46_40_38_34_13_73_tsni = function get_inst_59_61_57_46_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_59_61_57_46_40_38_81_tsni = function snd_inst_59_61_57_46_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_59_61_57_46_40_38_80_tsni = function map_inst_59_61_57_46_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_59_61_57_86_tsni = function scanl_inst_59_61_57_86_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_59_61_58_87_tsni = function map_inst_59_61_58_87_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_67_68_61_57_46_40_38_80_tsni = function map_inst_67_68_61_57_46_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_67_68_61_57_46_40_38_34_13_73_tsni = function get_inst_67_68_61_57_46_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_67_68_61_57_46_40_38_81_tsni = function snd_inst_67_68_61_57_46_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_67_68_61_57_46_40_38_35_31_79_tsni = function check_left_inst_67_68_61_57_46_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_67_68_61_57_46_40_38_35_30_24_22_78_tsni = function eqTup2_inst_67_68_61_57_46_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_67_68_61_57_46_40_38_35_30_25_22_tsni = function compare_and_update_inst_67_68_61_57_46_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_67_68_61_57_46_40_38_35_30_25_26_tsni = function map_inst_67_68_61_57_46_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_67_68_61_57_46_40_37_76_tsni = function orList_inst_67_68_61_57_46_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_67_68_61_57_46_40_37_77_tsni = function orList_inst_67_68_61_57_46_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
store_inputs_inst_67_68_61_57_46_41_tsni = function store_inputs_inst_67_68_61_57_46_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return NofibPrelude.head(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
map_inst_67_68_61_57_46_43_38_80_tsni = function map_inst_67_68_61_57_46_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
get_inst_67_68_61_57_46_43_38_34_13_73_tsni = function get_inst_67_68_61_57_46_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_67_68_61_57_46_43_38_81_tsni = function snd_inst_67_68_61_57_46_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
check_left_inst_67_68_61_57_46_43_38_35_31_79_tsni = function check_left_inst_67_68_61_57_46_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
eqTup2_inst_67_68_61_57_46_43_38_35_30_24_22_78_tsni = function eqTup2_inst_67_68_61_57_46_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
compare_and_update_inst_67_68_61_57_46_43_38_35_30_25_22_tsni = function compare_and_update_inst_67_68_61_57_46_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
map_inst_67_68_61_57_46_43_38_35_30_25_26_tsni = function map_inst_67_68_61_57_46_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
orList_inst_67_68_61_57_46_43_37_76_tsni = function orList_inst_67_68_61_57_46_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_67_68_61_57_46_43_37_77_tsni = function orList_inst_67_68_61_57_46_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
foldl_inst_67_68_61_57_46_82_tsni = function foldl_inst_67_68_61_57_46_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
critical_path_depth_inst_67_68_61_57_83_tsni = function critical_path_depth_inst_67_68_61_57_83_tsni(siot) {
  return runtime.safeCall(siot())
};
head_inst_67_68_61_58_74_tsni = function head_inst_67_68_61_58_74_tsni(l) {
  return runtime.safeCall(l())
};
scanl_inst_67_68_61_57_86_tsni = function scanl_inst_67_68_61_57_86_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
concat_inst_67_68_60_84_tsni = function concat_inst_67_68_60_84_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_67_68_60_84_85_tsni = function append_inst_67_68_60_84_85_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_67_68_61_58_87_tsni = function map_inst_67_68_61_58_87_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_69_70_68_60_84_tsni = function concat_inst_69_70_68_60_84_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_69_70_68_60_84_85_tsni = function append_inst_69_70_68_60_84_85_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_69_70_68_61_58_74_tsni = function head_inst_69_70_68_61_58_74_tsni(l) {
  return runtime.safeCall(l())
};
critical_path_depth_inst_69_70_68_61_57_83_tsni = function critical_path_depth_inst_69_70_68_61_57_83_tsni(siot) {
  return runtime.safeCall(siot())
};
foldl_inst_69_70_68_61_57_46_82_tsni = function foldl_inst_69_70_68_61_57_46_82_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
orList_inst_69_70_68_61_57_46_43_37_77_tsni = function orList_inst_69_70_68_61_57_46_43_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_69_70_68_61_57_46_43_37_76_tsni = function orList_inst_69_70_68_61_57_46_43_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni = function compare_and_update_inst_69_70_68_61_57_46_43_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_69_70_68_61_57_46_43_38_35_30_24_22_78_tsni = function eqTup2_inst_69_70_68_61_57_46_43_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_69_70_68_61_57_46_43_38_35_30_25_26_tsni = function map_inst_69_70_68_61_57_46_43_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_69_70_68_61_57_46_43_38_35_31_79_tsni = function check_left_inst_69_70_68_61_57_46_43_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni = function get_inst_69_70_68_61_57_46_43_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_69_70_68_61_57_46_43_38_81_tsni = function snd_inst_69_70_68_61_57_46_43_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_69_70_68_61_57_46_43_38_80_tsni = function map_inst_69_70_68_61_57_46_43_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
store_inputs_inst_69_70_68_61_57_46_41_tsni = function store_inputs_inst_69_70_68_61_57_46_41_tsni(label_inputs, state) {
  let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
  if (state instanceof circsim.PS.class) {
    param0 = state.pid;
    param1 = state.compType;
    param2 = state.pathDepth;
    param3 = state.inports;
    param4 = state.outports;
    pid_ = param0;
    if (param1 instanceof circsim.Inp.class) {
      lscomp = function lscomp(ls) {
        return runtime.safeCall(ls(lscomp, state, pid_))
      };
      tmp = lscomp(label_inputs);
      return NofibPrelude.head(tmp)
    } else {
      return state
    }
  } else {
    return state
  }
};
orList_inst_69_70_68_61_57_46_40_37_77_tsni = function orList_inst_69_70_68_61_57_46_40_37_77_tsni(ls) {
  return runtime.safeCall(ls())
};
orList_inst_69_70_68_61_57_46_40_37_76_tsni = function orList_inst_69_70_68_61_57_46_40_37_76_tsni(ls) {
  return runtime.safeCall(ls())
};
compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni = function compare_and_update_inst_69_70_68_61_57_46_40_38_35_30_25_22_tsni(ipm_, pid_port_m) {
  return runtime.safeCall(ipm_(pid_port_m))
};
eqTup2_inst_69_70_68_61_57_46_40_38_35_30_24_22_78_tsni = function eqTup2_inst_69_70_68_61_57_46_40_38_35_30_24_22_78_tsni(t1, t2) {
  return runtime.safeCall(t1(t2))
};
map_inst_69_70_68_61_57_46_40_38_35_30_25_26_tsni = function map_inst_69_70_68_61_57_46_40_38_35_30_25_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
check_left_inst_69_70_68_61_57_46_40_38_35_31_79_tsni = function check_left_inst_69_70_68_61_57_46_40_38_35_31_79_tsni(a, b) {
  let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e;
  if (globalThis.Array.isArray(a) && a.length === 8) {
    first0 = a[0];
    first1 = a[1];
    first2 = a[2];
    first3 = a[3];
    first4 = a[4];
    first5 = a[5];
    first6 = a[6];
    first7 = a[7];
    pid_ = first0;
    port = first1;
    pm = first2;
    pql = first3;
    pdl = first4;
    pqr = first5;
    pdr = first6;
    e = first7;
    return runtime.safeCall(b(pqr, pdr))
  } else {
    throw new globalThis.Error("match error");
  }
};
get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni = function get_inst_69_70_68_61_57_46_40_38_34_13_73_tsni(t) {
  return runtime.safeCall(t())
};
snd_inst_69_70_68_61_57_46_40_38_81_tsni = function snd_inst_69_70_68_61_57_46_40_38_81_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_69_70_68_61_57_46_40_38_80_tsni = function map_inst_69_70_68_61_57_46_40_38_80_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_69_70_68_61_57_86_tsni = function scanl_inst_69_70_68_61_57_86_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_69_70_68_61_58_87_tsni = function map_inst_69_70_68_61_58_87_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class circsim {
  static {
    circsim1 = circsim;
    let tmp, tmp1, tmp2, tmp3, tmp4, arr;
    this.BinTree = class BinTree {
      constructor() {}
      toString() { return "BinTree"; }
    };
    this.Cell = function Cell(value1) {
      return new Cell.class(value1);
    };
    this.Cell.class = class Cell extends circsim.BinTree {
      constructor(value) {
        super();
        this.value = value;
      }
      toString() { return "Cell(" + runtime.render(this.value) + ")"; }
    };
    this.Node = function Node(value1, left1, right1) {
      return new Node.class(value1, left1, right1);
    };
    this.Node.class = class Node extends circsim.BinTree {
      constructor(value, left, right) {
        super();
        this.value = value;
        this.left = left;
        this.right = right;
      }
      toString() { return "Node(" + runtime.render(this.value) + ", " + runtime.render(this.left) + ", " + runtime.render(this.right) + ")"; }
    };
    this.Componenet = class Componenet {
      constructor() {}
      toString() { return "Componenet"; }
    };
    const None_$class = class None_ extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "None_"; }
    };
    this.None_ = new None_$class;
    this.None_.class = None_$class;
    const Inp$class = class Inp extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Inp"; }
    };
    this.Inp = new Inp$class;
    this.Inp.class = Inp$class;
    const Outp$class = class Outp extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Outp"; }
    };
    this.Outp = new Outp$class;
    this.Outp.class = Outp$class;
    const Dff$class = class Dff extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Dff"; }
    };
    this.Dff = new Dff$class;
    this.Dff.class = Dff$class;
    const Inv$class = class Inv extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Inv"; }
    };
    this.Inv = new Inv$class;
    this.Inv.class = Inv$class;
    const And2$class = class And2 extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "And2"; }
    };
    this.And2 = new And2$class;
    this.And2.class = And2$class;
    const Or2$class = class Or2 extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Or2"; }
    };
    this.Or2 = new Or2$class;
    this.Or2.class = Or2$class;
    const Xor$class = class Xor extends circsim.Componenet {
      constructor() {
        super();
      }
      toString() { return "Xor"; }
    };
    this.Xor = new Xor$class;
    this.Xor.class = Xor$class;
    const Unit$class = class Unit {
      constructor() {}
      toString() { return "Unit"; }
    };
    this.Unit = new Unit$class;
    this.Unit.class = Unit$class;
    this.PS = function PS(pid1, compType1, pathDepth1, inports1, outports1) {
      return new PS.class(pid1, compType1, pathDepth1, inports1, outports1);
    };
    this.PS.class = class PS {
      constructor(pid, compType, pathDepth, inports, outports) {
        this.pid = pid;
        this.compType = compType;
        this.pathDepth = pathDepth;
        this.inports = inports;
        this.outports = outports;
      }
      toString() { return "PS(" + runtime.render(this.pid) + ", " + runtime.render(this.compType) + ", " + runtime.render(this.pathDepth) + ", " + runtime.render(this.inports) + ", " + runtime.render(this.outports) + ")"; }
    };
    this.Boolean = class Boolean {
      constructor() {}
      toString() { return "Boolean"; }
    };
    const F$class = class F extends circsim.Boolean {
      constructor() {
        super();
      }
      toString() { return "F"; }
    };
    this.F = new F$class;
    this.F.class = F$class;
    const T$class = class T extends circsim.Boolean {
      constructor() {
        super();
      }
      toString() { return "T"; }
    };
    this.T = new T$class;
    this.T.class = T$class;
    tmp = - 1;
    tmp1 = - 1;
    tmp2 = runtime.safeCall(circsim.PS(tmp, circsim.None_, tmp1, NofibPrelude.Nil, NofibPrelude.Nil));
    this.emptyState = tmp2;
    tmp3 = - 1;
    tmp4 = - 1;
    arr = [
      tmp3,
      tmp4,
      circsim.F,
      false,
      0,
      false,
      0,
      1
    ];
    this.emptyPacket = arr;
  }
  static pid(p) {
    return p.pid
  } 
  static compType(p1) {
    return p1.compType
  } 
  static pathDepth(p2) {
    return p2.pathDepth
  } 
  static inports(p3) {
    return p3.inports
  } 
  static outports(p4) {
    return p4.outports
  } 
  static updateOutports(p5, noutports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.pid(p5);
    tmp1 = circsim.compType(p5);
    tmp2 = circsim.pathDepth(p5);
    tmp3 = circsim.inports(p5);
    return runtime.safeCall(circsim.PS(tmp, tmp1, tmp2, tmp3, noutports))
  } 
  static updateInports(p6, ninports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.pid(p6);
    tmp1 = circsim.compType(p6);
    tmp2 = circsim.pathDepth(p6);
    tmp3 = circsim.outports(p6);
    return runtime.safeCall(circsim.PS(tmp, tmp1, tmp2, ninports, tmp3))
  } 
  static put(xs) {
    let scrut, first1, first0, fstHalf, sndHalf, param0, param1, x, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(circsim.Cell(x))
      } else {
        tmp = NofibPrelude.listLen(xs);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut = NofibPrelude.splitAt(tmp1, xs);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          fstHalf = first0;
          sndHalf = first1;
          tmp2 = circsim.put(fstHalf);
          tmp3 = circsim.put(sndHalf);
          return runtime.safeCall(circsim.Node(circsim.Unit, tmp2, tmp3))
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      tmp4 = NofibPrelude.listLen(xs);
      tmp5 = NofibPrelude.intDiv(tmp4, 2);
      scrut = NofibPrelude.splitAt(tmp5, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        fstHalf = first0;
        sndHalf = first1;
        tmp6 = circsim.put(fstHalf);
        tmp7 = circsim.put(sndHalf);
        return runtime.safeCall(circsim.Node(circsim.Unit, tmp6, tmp7))
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static get(t) {
    let param0, param1, param2, l, r, x, tmp, tmp1;
    if (t instanceof circsim.Cell.class) {
      param0 = t.value;
      x = param0;
      return NofibPrelude.Cons(x, NofibPrelude.Nil)
    } else if (t instanceof circsim.Node.class) {
      param0 = t.value;
      param1 = t.left;
      param2 = t.right;
      l = param1;
      r = param2;
      tmp = circsim.get(l);
      tmp1 = circsim.get(r);
      return NofibPrelude.append(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static upsweep(f, t1) {
    let param0, param1, param2, x, l, r, scrut, first1, first0, lv, l_, scrut1, first11, first01, rv, r_, a, tmp, arr, tmp1, arr1, tmp2, arr2;
    if (t1 instanceof circsim.Cell.class) {
      param0 = t1.value;
      a = param0;
      tmp = runtime.safeCall(circsim.Cell(a));
      arr = [
        a,
        tmp
      ];
      return arr
    } else if (t1 instanceof circsim.Node.class) {
      param0 = t1.value;
      param1 = t1.left;
      param2 = t1.right;
      x = param0;
      l = param1;
      r = param2;
      scrut = circsim.upsweep(f, l);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        lv = first0;
        l_ = first1;
        scrut1 = circsim.upsweep(f, r);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          rv = first01;
          r_ = first11;
          tmp1 = runtime.safeCall(f(lv, rv));
          arr1 = [
            lv,
            rv
          ];
          tmp2 = runtime.safeCall(circsim.Node(arr1, l_, r_));
          arr2 = [
            tmp1,
            tmp2
          ];
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static downsweep(g, d, t2) {
    let param0, param1, param2, first1, first0, lv, rv, l, r, scrut, first11, first01, dl, dr, x, tmp, tmp1;
    if (t2 instanceof circsim.Cell.class) {
      param0 = t2.value;
      x = param0;
      return runtime.safeCall(circsim.Cell(d))
    } else if (t2 instanceof circsim.Node.class) {
      param0 = t2.value;
      param1 = t2.left;
      param2 = t2.right;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        lv = first0;
        rv = first1;
        l = param1;
        r = param2;
        scrut = runtime.safeCall(g(lv, rv, d));
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first01 = scrut[0];
          first11 = scrut[1];
          dl = first01;
          dr = first11;
          tmp = circsim.downsweep(g, dl, l);
          tmp1 = circsim.downsweep(g, dr, r);
          return runtime.safeCall(circsim.Node(circsim.Unit, tmp, tmp1))
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sweep_ud(up, down, u, t3) {
    let scrut, first1, first0, ans, t_, tmp, arr;
    scrut = upsweep_inst_0_1_tsni(up, t3);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      ans = first0;
      t_ = first1;
      tmp = downsweep_inst_0_5_tsni(down, u, t_);
      arr = [
        ans,
        tmp
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static scanL(f1, u1, xs1) {
    let down1, scrut, tmp;
    down1 = function down1(l, r, x) {
      let tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      tmp1 = runtime.safeCall(f1(x, l));
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (g1, l1, r1) => {
        let first1, first0, dl, dr, tmp2, tmp3, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        dl = first0;
        dr = first1;
        tmp2 = downsweep_inst_2_3_5_tsni(g1, dl, l1);
        tmp3 = downsweep_inst_2_3_5_tsni(g1, dr, r1);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return () => {
          let param0, param1, param2, l2, r2, tmp4, tmp5;
          param0 = _deforest_Node_value;
          param1 = _deforest_Node_left;
          param2 = _deforest_Node_right;
          l2 = param1;
          r2 = param2;
          tmp4 = get_inst_2_71_tsni(l2);
          tmp5 = get_inst_2_71_tsni(r2);
          return NofibPrelude.append(tmp4, tmp5)
        }
      };
      return arr
    };
    tmp = put_inst_2_4_tsni(xs1);
    scrut = sweep_ud_inst_2_3_tsni(f1, down1, u1, tmp);
    return runtime.safeCall(scrut())
  } 
  static scanR(f2, u2, xs2) {
    let down2, scrut, tmp;
    down2 = function down2(l, r, x) {
      let tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      tmp1 = runtime.safeCall(f2(r, x));
      _deforest_Deforest_Arr_2_0 = tmp1;
      _deforest_Deforest_Arr_2_1 = x;
      arr = (g1, l1, r1) => {
        let first1, first0, dl, dr, tmp2, tmp3, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        dl = first0;
        dr = first1;
        tmp2 = downsweep_inst_6_7_5_tsni(g1, dl, l1);
        tmp3 = downsweep_inst_6_7_5_tsni(g1, dr, r1);
        _deforest_Node_value = circsim.Unit;
        _deforest_Node_left = tmp2;
        _deforest_Node_right = tmp3;
        return () => {
          let param0, param1, param2, l2, r2, tmp4, tmp5;
          param0 = _deforest_Node_value;
          param1 = _deforest_Node_left;
          param2 = _deforest_Node_right;
          l2 = param1;
          r2 = param2;
          tmp4 = get_inst_6_72_tsni(l2);
          tmp5 = get_inst_6_72_tsni(r2);
          return NofibPrelude.append(tmp4, tmp5)
        }
      };
      return arr
    };
    tmp = put_inst_6_8_tsni(xs2);
    scrut = sweep_ud_inst_6_7_tsni(f2, down2, u2, tmp);
    return runtime.safeCall(scrut())
  } 
  static scanlr(f3, g1, lu, ru, xs3) {
    let down3, up1, xs_, scrut, tmp, arr, tmp1, lambda, lambda1, lambda2;
    up1 = function up(f4, g2, lxly, rxry) {
      let first1, first0, lx, ly, first11, first01, rx, ry, tmp2, tmp3, arr1;
      if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
        first0 = lxly[0];
        first1 = lxly[1];
        lx = first0;
        ly = first1;
        if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
          first01 = rxry[0];
          first11 = rxry[1];
          rx = first01;
          ry = first11;
          tmp2 = runtime.safeCall(f4(lx, rx));
          tmp3 = runtime.safeCall(g2(ly, ry));
          arr1 = [
            tmp2,
            tmp3
          ];
          return arr1
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    down3 = function down3(f4, g2, lxly, rxry, ab) {
      let first1, first0, lx, ly, first11, first01, rx, ry, first12, first02, a, b, tmp2, arr1, tmp3, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      if (globalThis.Array.isArray(lxly) && lxly.length === 2) {
        first0 = lxly[0];
        first1 = lxly[1];
        lx = first0;
        ly = first1;
        if (globalThis.Array.isArray(rxry) && rxry.length === 2) {
          first01 = rxry[0];
          first11 = rxry[1];
          rx = first01;
          ry = first11;
          if (globalThis.Array.isArray(ab) && ab.length === 2) {
            first02 = ab[0];
            first12 = ab[1];
            a = first02;
            b = first12;
            tmp2 = runtime.safeCall(g2(ry, b));
            arr1 = [
              a,
              tmp2
            ];
            tmp3 = runtime.safeCall(f4(a, lx));
            arr2 = [
              tmp3,
              b
            ];
            _deforest_Deforest_Arr_2_0 = arr1;
            _deforest_Deforest_Arr_2_1 = arr2;
            arr3 = (g3, l, r) => {
              let first13, first03, dl, dr, tmp4, tmp5, _deforest_Node_value, _deforest_Node_left, _deforest_Node_right;
              first03 = _deforest_Deforest_Arr_2_0;
              first13 = _deforest_Deforest_Arr_2_1;
              dl = first03;
              dr = first13;
              tmp4 = downsweep_inst_9_10_5_tsni(g3, dl, l);
              tmp5 = downsweep_inst_9_10_5_tsni(g3, dr, r);
              _deforest_Node_value = circsim.Unit;
              _deforest_Node_left = tmp4;
              _deforest_Node_right = tmp5;
              return () => {
                let param0, param1, param2, l1, r1, tmp6, tmp7;
                param0 = _deforest_Node_value;
                param1 = _deforest_Node_left;
                param2 = _deforest_Node_right;
                l1 = param1;
                r1 = param2;
                tmp6 = get_inst_9_73_tsni(l1);
                tmp7 = get_inst_9_73_tsni(r1);
                return NofibPrelude.append(tmp6, tmp7)
              }
            };
            return arr3
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let arr1;
      arr1 = [
        x,
        x
      ];
      return arr1
    });
    tmp = NofibPrelude.map(lambda, xs3);
    xs_ = tmp;
    arr = [
      lu,
      ru
    ];
    tmp1 = put_inst_9_11_tsni(xs_);
    lambda1 = (undefined, function (a, b) {
      return up1(f3, g1, a, b)
    });
    lambda2 = (undefined, function (a, b, c) {
      return down3(f3, g1, a, b, c)
    });
    scrut = sweep_ud_inst_9_10_tsni(lambda1, lambda2, arr, tmp1);
    return runtime.safeCall(scrut(f3, g1, lu, ru))
  } 
  static nearest_power_of_two(x) {
    let lambda, lambda1;
    lambda = (undefined, function (a) {
      return a >= x
    });
    lambda1 = (undefined, function (a) {
      return a * 2
    });
    return NofibPrelude.until(lambda, lambda1, 1)
  } 
  static pad_circuit(size_ins_outs_states) {
    let first3, first2, first1, first0, size, ins, outs, states, p21, states_, tmp, tmp1, tmp2, tmp3, arr;
    if (globalThis.Array.isArray(size_ins_outs_states) && size_ins_outs_states.length === 4) {
      first0 = size_ins_outs_states[0];
      first1 = size_ins_outs_states[1];
      first2 = size_ins_outs_states[2];
      first3 = size_ins_outs_states[3];
      size = first0;
      ins = first1;
      outs = first2;
      states = first3;
      tmp = circsim.nearest_power_of_two(size);
      p21 = tmp;
      tmp1 = NofibPrelude.replicate_lz(p21, circsim.emptyState);
      tmp2 = NofibPrelude.append_nl_lz(states, tmp1);
      states_ = tmp2;
      tmp3 = NofibPrelude.take_lz(p21, states_);
      arr = [
        p21,
        ins,
        outs,
        tmp3
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inv(x1) {
    let scrut;
    scrut = x1 === circsim.T;
    if (scrut === true) {
      return circsim.F
    } else {
      return circsim.T
    }
  } 
  static and2(x2, y) {
    let scrut, tmp, tmp1;
    tmp = x2 === circsim.T;
    tmp1 = y === circsim.T;
    scrut = tmp && tmp1;
    if (scrut === true) {
      return circsim.T
    } else {
      return circsim.F
    }
  } 
  static or2(x3, y1) {
    let scrut, tmp, tmp1;
    tmp = x3 === circsim.T;
    tmp1 = y1 === circsim.T;
    scrut = tmp || tmp1;
    if (scrut === true) {
      return circsim.T
    } else {
      return circsim.F
    }
  } 
  static xor(x4, y2) {
    let scrut;
    scrut = x4 === y2;
    if (scrut === true) {
      return circsim.T
    } else {
      return circsim.F
    }
  } 
  static send_right(a, b) {
    let first7, first6, first5, first4, first3, first2, first1, first0, ia, sa, ma, qla, dla, qra, dra, ea, first71, first61, first51, first41, first31, first21, first11, first01, ib, sb, mb, qlb, dlb, qrb, drb, eb, scrut, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2;
    if (globalThis.Array.isArray(a) && a.length === 8) {
      first0 = a[0];
      first1 = a[1];
      first2 = a[2];
      first3 = a[3];
      first4 = a[4];
      first5 = a[5];
      first6 = a[6];
      first7 = a[7];
      ia = first0;
      sa = first1;
      ma = first2;
      qla = first3;
      dla = first4;
      qra = first5;
      dra = first6;
      ea = first7;
      if (globalThis.Array.isArray(b) && b.length === 8) {
        first01 = b[0];
        first11 = b[1];
        first21 = b[2];
        first31 = b[3];
        first41 = b[4];
        first51 = b[5];
        first61 = b[6];
        first71 = b[7];
        ib = first01;
        sb = first11;
        mb = first21;
        qlb = first31;
        dlb = first41;
        qrb = first51;
        drb = first61;
        eb = first71;
        if (qra === true) {
          scrut = dra > eb;
          if (scrut === true) {
            tmp = dra - eb;
            tmp1 = ea + eb;
            arr = [
              ia,
              sa,
              ma,
              qla,
              dla,
              qra,
              tmp,
              tmp1
            ];
            return arr
          } else {
            tmp2 = ea + eb;
            arr1 = [
              ib,
              sb,
              mb,
              qlb,
              dlb,
              qrb,
              drb,
              tmp2
            ];
            return arr1
          }
        } else {
          tmp3 = ea + eb;
          arr2 = [
            ib,
            sb,
            mb,
            qlb,
            dlb,
            qrb,
            drb,
            tmp3
          ];
          return arr2
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static send_left(a1, b1) {
    let first7, first6, first5, first4, first3, first2, first1, first0, ia, sa, ma, qla, dla, qra, dra, ea, first71, first61, first51, first41, first31, first21, first11, first01, ib, sb, mb, qlb, dlb, qrb, drb, eb, scrut, tmp, tmp1, tmp2, arr, tmp3, arr1;
    if (globalThis.Array.isArray(a1) && a1.length === 8) {
      first0 = a1[0];
      first1 = a1[1];
      first2 = a1[2];
      first3 = a1[3];
      first4 = a1[4];
      first5 = a1[5];
      first6 = a1[6];
      first7 = a1[7];
      ia = first0;
      sa = first1;
      ma = first2;
      qla = first3;
      dla = first4;
      qra = first5;
      dra = first6;
      ea = first7;
      if (globalThis.Array.isArray(b1) && b1.length === 8) {
        first01 = b1[0];
        first11 = b1[1];
        first21 = b1[2];
        first31 = b1[3];
        first41 = b1[4];
        first51 = b1[5];
        first61 = b1[6];
        first71 = b1[7];
        ib = first01;
        sb = first11;
        mb = first21;
        qlb = first31;
        dlb = first41;
        qrb = first51;
        drb = first61;
        eb = first71;
        tmp = dlb > ea;
        scrut = qlb && tmp;
        if (scrut === true) {
          tmp1 = dlb - ea;
          tmp2 = ea + eb;
          arr = [
            ib,
            sb,
            mb,
            qlb,
            tmp1,
            qrb,
            drb,
            tmp2
          ];
          return arr
        } else {
          tmp3 = ea + eb;
          arr1 = [
            ia,
            sa,
            ma,
            qla,
            dla,
            qra,
            dra,
            tmp3
          ];
          return arr1
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static send(xs4) {
    return scanlr_inst_12_13_tsni(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs4)
  } 
  static update_outports(state, value) {
    let lscomp, tmp, tmp1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t4, first5, first4, first3, first2, first1, first0, p7, m, ql, dl, qr, dr, arr, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h = param0;
        t4 = param1;
        if (globalThis.Array.isArray(h) && h.length === 6) {
          first0 = h[0];
          first1 = h[1];
          first2 = h[2];
          first3 = h[3];
          first4 = h[4];
          first5 = h[5];
          p7 = first0;
          m = first1;
          ql = first2;
          dl = first3;
          qr = first4;
          dr = first5;
          arr = [
            p7,
            value,
            ql,
            dl,
            qr,
            dr
          ];
          tmp2 = lscomp(t4);
          return NofibPrelude.Cons(arr, tmp2)
        } else {
          return lscomp(t4)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = circsim.outports(state);
    tmp1 = lscomp(tmp);
    return circsim.updateOutports(state, tmp1)
  } 
  static critical_path_depth(siot) {
    let first3, first2, first1, first0, size, ins, outs, states, tmp;
    if (globalThis.Array.isArray(siot) && siot.length === 4) {
      first0 = siot[0];
      first1 = siot[1];
      first2 = siot[2];
      first3 = siot[3];
      size = first0;
      ins = first1;
      outs = first2;
      states = first3;
      tmp = NofibPrelude.map(circsim.pathDepth, states);
      return NofibPrelude.maximum(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static collect_outputs(tp4) {
    let thrid, get_output, first3, first2, first1, first0, size, ins, outs, states, lambda;
    if (globalThis.Array.isArray(tp4) && tp4.length === 4) {
      first0 = tp4[0];
      first1 = tp4[1];
      first2 = tp4[2];
      first3 = tp4[3];
      size = first0;
      ins = first1;
      outs = first2;
      states = first3;
      thrid = function thrid(tp3) {
        let first21, first11, first01, v;
        if (globalThis.Array.isArray(tp3) && tp3.length === 3) {
          first01 = tp3[0];
          first11 = tp3[1];
          first21 = tp3[2];
          v = first21;
          return v
        } else {
          throw new globalThis.Error("match error");
        }
      };
      get_output = function get_output(states1, label_p) {
        let lscomp, first11, first01, label, p7, tmp, tmp1;
        if (globalThis.Array.isArray(label_p) && label_p.length === 2) {
          first01 = label_p[0];
          first11 = label_p[1];
          label = first01;
          p7 = first11;
          lscomp = function lscomp(ls) {
            let param0, param1, s, t4, scrut, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
            if (ls instanceof NofibPrelude.Nil.class) {
              return () => {
                throw new globalThis.Error("match error");
              }
            } else if (ls instanceof NofibPrelude.Cons.class) {
              param0 = ls.head;
              param1 = ls.tail;
              s = param0;
              t4 = param1;
              tmp2 = circsim.pid(s);
              scrut = p7 == tmp2;
              if (scrut === true) {
                tmp3 = circsim.inports(s);
                tmp4 = NofibPrelude.head(tmp3);
                tmp5 = lscomp(t4);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = tmp5;
                return () => {
                  let param01, param11, h, t5;
                  param01 = _deforest_Cons_head;
                  param11 = _deforest_Cons_tail;
                  h = param01;
                  t5 = param11;
                  return h
                }
              } else {
                return lscomp(t4)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp = lscomp(states1);
          tmp1 = head_inst_14_74_tsni(tmp);
          return thrid(tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lambda = (undefined, function (p7) {
        return get_output(states, p7)
      });
      return NofibPrelude.map(lambda, outs)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static store_inputs(label_inputs, state1) {
    let lscomp, param0, param1, param2, param3, param4, pid_, tmp;
    if (state1 instanceof circsim.PS.class) {
      param0 = state1.pid;
      param1 = state1.compType;
      param2 = state1.pathDepth;
      param3 = state1.inports;
      param4 = state1.outports;
      pid_ = param0;
      if (param1 instanceof circsim.Inp.class) {
        lscomp = function lscomp(ls) {
          let param01, param11, h, t4, first1, first0, first11, first01, label, input_pid, value1, scrut, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
          if (ls instanceof NofibPrelude.Nil.class) {
            return () => {
              throw new globalThis.Error("match error");
            }
          } else if (ls instanceof NofibPrelude.Cons.class) {
            param01 = ls.head;
            param11 = ls.tail;
            h = param01;
            t4 = param11;
            if (globalThis.Array.isArray(h) && h.length === 2) {
              first0 = h[0];
              first1 = h[1];
              if (globalThis.Array.isArray(first0) && first0.length === 2) {
                first01 = first0[0];
                first11 = first0[1];
                label = first01;
                input_pid = first11;
                value1 = first1;
                scrut = pid_ == input_pid;
                if (scrut === true) {
                  tmp1 = circsim.update_outports(state1, value1);
                  tmp2 = lscomp(t4);
                  _deforest_Cons_head = tmp1;
                  _deforest_Cons_tail = tmp2;
                  return () => {
                    let param02, param12, h1, t5;
                    param02 = _deforest_Cons_head;
                    param12 = _deforest_Cons_tail;
                    h1 = param02;
                    t5 = param12;
                    return h1
                  }
                } else {
                  return lscomp(t4)
                }
              } else {
                return lscomp(t4)
              }
            } else {
              return lscomp(t4)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp = lscomp(label_inputs);
        return head_inst_15_75_tsni(tmp)
      } else {
        return state1
      }
    } else {
      return state1
    }
  } 
  static apply_component(comp, signals) {
    let param0, param1, x5, param01, param11, y3, x6, y4, x7, y5, x8, x9, x10, tmp, tmp1, tmp2, tmp3;
    if (comp instanceof circsim.Inp.class) {
      return NofibPrelude.None
    } else if (comp instanceof circsim.Outp.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x10 = param0;
        if (param1 instanceof NofibPrelude.Nil.class) {
          return runtime.safeCall(NofibPrelude.Some(x10))
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.Dff.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x9 = param0;
        if (param1 instanceof NofibPrelude.Nil.class) {
          return runtime.safeCall(NofibPrelude.Some(x9))
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.Inv.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x8 = param0;
        if (param1 instanceof NofibPrelude.Nil.class) {
          tmp = circsim.inv(x8);
          return runtime.safeCall(NofibPrelude.Some(tmp))
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.And2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x7 = param0;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param01 = param1.head;
          param11 = param1.tail;
          y5 = param01;
          if (param11 instanceof NofibPrelude.Nil.class) {
            tmp1 = circsim.and2(x7, y5);
            return runtime.safeCall(NofibPrelude.Some(tmp1))
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.Or2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x6 = param0;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param01 = param1.head;
          param11 = param1.tail;
          y4 = param01;
          if (param11 instanceof NofibPrelude.Nil.class) {
            tmp2 = circsim.or2(x6, y4);
            return runtime.safeCall(NofibPrelude.Some(tmp2))
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.Xor.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        param0 = signals.head;
        param1 = signals.tail;
        x5 = param0;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param01 = param1.head;
          param11 = param1.tail;
          y3 = param01;
          if (param11 instanceof NofibPrelude.Nil.class) {
            tmp3 = circsim.xor(x5, y3);
            return runtime.safeCall(NofibPrelude.Some(tmp3))
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (comp instanceof circsim.None_.class) {
      return NofibPrelude.None
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static init_dffs(state2) {
    let scrut, tmp;
    tmp = circsim.compType(state2);
    scrut = tmp === circsim.Dff;
    if (scrut === true) {
      return circsim.update_outports(state2, circsim.F)
    } else {
      return state2
    }
  } 
  static restore_requests(old_states, new_states) {
    let restore_outport, restore;
    restore = function restore(os, ns) {
      let tmp, tmp1, tmp2;
      tmp = circsim.outports(os);
      tmp1 = circsim.outports(ns);
      tmp2 = NofibPrelude.zipWith(restore_outport, tmp, tmp1);
      return circsim.updateOutports(ns, tmp2)
    };
    restore_outport = function restore_outport(pql, mdq) {
      let first5, first4, first3, first2, first1, first0, p7, ql, dl, qr, dq, first51, first41, first31, first21, first11, first01, m, arr;
      if (globalThis.Array.isArray(pql) && pql.length === 6) {
        first0 = pql[0];
        first1 = pql[1];
        first2 = pql[2];
        first3 = pql[3];
        first4 = pql[4];
        first5 = pql[5];
        p7 = first0;
        ql = first2;
        dl = first3;
        qr = first4;
        dq = first5;
        if (globalThis.Array.isArray(mdq) && mdq.length === 6) {
          first01 = mdq[0];
          first11 = mdq[1];
          first21 = mdq[2];
          first31 = mdq[3];
          first41 = mdq[4];
          first51 = mdq[5];
          m = first11;
          arr = [
            p7,
            m,
            ql,
            dl,
            qr,
            dq
          ];
          return arr
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.zipWith(restore, old_states, new_states)
  } 
  static update_requests(b2, state3) {
    let lscomp, tmp, tmp1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t4, first5, first4, first3, first2, first1, first0, p7, m, ql, dl, qr, dr, arr, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h = param0;
        t4 = param1;
        if (globalThis.Array.isArray(h) && h.length === 6) {
          first0 = h[0];
          first1 = h[1];
          first2 = h[2];
          first3 = h[3];
          first4 = h[4];
          first5 = h[5];
          p7 = first0;
          m = first1;
          ql = first2;
          dl = first3;
          qr = first4;
          dr = first5;
          arr = [
            p7,
            m,
            b2,
            dl,
            b2,
            dr
          ];
          tmp2 = lscomp(t4);
          return NofibPrelude.Cons(arr, tmp2)
        } else {
          return lscomp(t4)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = circsim.outports(state3);
    tmp1 = lscomp(tmp);
    return circsim.updateOutports(state3, tmp1)
  } 
  static check_depth(d1, state4) {
    let scrut, tmp;
    tmp = circsim.pathDepth(state4);
    scrut = tmp == d1;
    if (scrut === true) {
      return state4
    } else {
      return circsim.update_requests(false, state4)
    }
  } 
  static acknowledge(d2, states) {
    let check_requests, check_lr_requests, states1, tmp, tmp1, tmp2, lambda, lambda1;
    check_requests = function check_requests(xs5) {
      let tmp3;
      tmp3 = map_inst_16_17_tsni(check_lr_requests, xs5);
      return orList_inst_16_76_tsni(tmp3)
    };
    check_lr_requests = function check_lr_requests(pql) {
      let first5, first4, first3, first2, first1, first0, p7, m, ql, dl, qr, dr;
      if (globalThis.Array.isArray(pql) && pql.length === 6) {
        first0 = pql[0];
        first1 = pql[1];
        first2 = pql[2];
        first3 = pql[3];
        first4 = pql[4];
        first5 = pql[5];
        p7 = first0;
        m = first1;
        ql = first2;
        dl = first3;
        qr = first4;
        dr = first5;
        return ql || qr
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (s) {
      return circsim.check_depth(d2, s)
    });
    tmp = map_inst_16_18_tsni(lambda, states);
    states1 = tmp;
    lambda1 = (undefined, function (s) {
      let tmp3;
      tmp3 = circsim.outports(s);
      return check_requests(tmp3)
    });
    tmp1 = map_inst_16_19_tsni(lambda1, states1);
    tmp2 = orList_inst_16_77_tsni(tmp1);
    return Predef.not(tmp2)
  } 
  static pad_packets(pss) {
    let pad, lambda;
    pad = function pad(xs5) {
      let max_ps, tmp, tmp1, tmp2, tmp3, lambda1;
      lambda1 = (undefined, function (x5) {
        return NofibPrelude.listLen(x5)
      });
      tmp = NofibPrelude.map(lambda1, pss);
      tmp1 = NofibPrelude.maximum(tmp);
      max_ps = tmp1;
      tmp2 = NofibPrelude.replicate_lz(max_ps, circsim.emptyPacket);
      tmp3 = NofibPrelude.append_nl_lz(xs5, tmp2);
      return NofibPrelude.take_lz(max_ps, tmp3)
    };
    lambda = (undefined, function (x5) {
      return pad(x5)
    });
    return NofibPrelude.map(lambda, pss)
  } 
  static make_packet(state5) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t4, first5, first4, first3, first2, first1, first0, p7, m, ql, dl, qr, dr, tmp1, arr, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h = param0;
        t4 = param1;
        if (globalThis.Array.isArray(h) && h.length === 6) {
          first0 = h[0];
          first1 = h[1];
          first2 = h[2];
          first3 = h[3];
          first4 = h[4];
          first5 = h[5];
          p7 = first0;
          m = first1;
          ql = first2;
          dl = first3;
          qr = first4;
          dr = first5;
          tmp1 = circsim.pid(state5);
          arr = [
            tmp1,
            p7,
            m,
            ql,
            dl,
            qr,
            dr,
            1
          ];
          tmp2 = lscomp(t4);
          return NofibPrelude.Cons(arr, tmp2)
        } else {
          return lscomp(t4)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = circsim.outports(state5);
    return lscomp(tmp)
  } 
  static compare_and_update(ipm_, pid_port_m) {
    let first2, first1, first0, i, p7, m_, first21, first11, first01, pid_, port, m, scrut, arr, arr1, arr2, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    if (globalThis.Array.isArray(ipm_) && ipm_.length === 3) {
      first0 = ipm_[0];
      first1 = ipm_[1];
      first2 = ipm_[2];
      i = first0;
      p7 = first1;
      m_ = first2;
      if (globalThis.Array.isArray(pid_port_m) && pid_port_m.length === 3) {
        first01 = pid_port_m[0];
        first11 = pid_port_m[1];
        first21 = pid_port_m[2];
        pid_ = first01;
        port = first11;
        m = first21;
        _deforest_Deforest_Arr_2_0 = i;
        _deforest_Deforest_Arr_2_1 = p7;
        arr = (t21) => {
          let first12, first02, a2, b3;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          a2 = first02;
          b3 = first12;
          return runtime.safeCall(t21(a2, b3))
        };
        _deforest_Deforest_Arr_2_01 = pid_;
        _deforest_Deforest_Arr_2_11 = port;
        arr1 = (a2, b3) => {
          let first12, first02, c, d3, scrut1, scrut2;
          first02 = _deforest_Deforest_Arr_2_01;
          first12 = _deforest_Deforest_Arr_2_11;
          c = first02;
          d3 = first12;
          scrut1 = a2 == c;
          if (scrut1 === true) {
            scrut2 = b3 == d3;
            if (scrut2 === true) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        };
        scrut = eqTup2_inst_20_78_tsni(arr, arr1);
        if (scrut === true) {
          arr2 = [
            pid_,
            port,
            m_
          ];
          return arr2
        } else {
          arr3 = [
            pid_,
            port,
            m
          ];
          return arr3
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static up_i(ipm_1, ins) {
    let first7, first6, first5, first4, first3, first2, first1, first0, i, p7, m_, lambda;
    if (globalThis.Array.isArray(ipm_1) && ipm_1.length === 8) {
      first0 = ipm_1[0];
      first1 = ipm_1[1];
      first2 = ipm_1[2];
      first3 = ipm_1[3];
      first4 = ipm_1[4];
      first5 = ipm_1[5];
      first6 = ipm_1[6];
      first7 = ipm_1[7];
      i = first0;
      p7 = first1;
      m_ = first2;
      lambda = (undefined, function (x5) {
        let arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
        _deforest_Deforest_Arr_3_0 = i;
        _deforest_Deforest_Arr_3_1 = p7;
        _deforest_Deforest_Arr_3_2 = m_;
        arr = (pid_port_m1) => {
          let first21, first11, first01, i1, p8, m_1, first22, first12, first02, pid_, port, m, scrut, arr1, arr2, arr3, arr4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
          first01 = _deforest_Deforest_Arr_3_0;
          first11 = _deforest_Deforest_Arr_3_1;
          first21 = _deforest_Deforest_Arr_3_2;
          i1 = first01;
          p8 = first11;
          m_1 = first21;
          if (globalThis.Array.isArray(pid_port_m1) && pid_port_m1.length === 3) {
            first02 = pid_port_m1[0];
            first12 = pid_port_m1[1];
            first22 = pid_port_m1[2];
            pid_ = first02;
            port = first12;
            m = first22;
            _deforest_Deforest_Arr_2_01 = i1;
            _deforest_Deforest_Arr_2_11 = p8;
            arr1 = (t21) => {
              let first13, first03, a2, b3;
              first03 = _deforest_Deforest_Arr_2_01;
              first13 = _deforest_Deforest_Arr_2_11;
              a2 = first03;
              b3 = first13;
              return runtime.safeCall(t21(a2, b3))
            };
            _deforest_Deforest_Arr_2_0 = pid_;
            _deforest_Deforest_Arr_2_1 = port;
            arr2 = (a2, b3) => {
              let first13, first03, c, d3, scrut1, scrut2;
              first03 = _deforest_Deforest_Arr_2_0;
              first13 = _deforest_Deforest_Arr_2_1;
              c = first03;
              d3 = first13;
              scrut1 = a2 == c;
              if (scrut1 === true) {
                scrut2 = b3 == d3;
                if (scrut2 === true) {
                  return true
                } else {
                  return false
                }
              } else {
                return false
              }
            };
            scrut = eqTup2_inst_21_22_78_tsni(arr1, arr2);
            if (scrut === true) {
              arr3 = [
                pid_,
                port,
                m_1
              ];
              return arr3
            } else {
              arr4 = [
                pid_,
                port,
                m
              ];
              return arr4
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return compare_and_update_inst_21_22_tsni(arr, x5)
      });
      return NofibPrelude.map(lambda, ins)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static update_i(l_r, ins1) {
    let first1, first0, l, r, tmp;
    if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
      first0 = l_r[0];
      first1 = l_r[1];
      l = first0;
      r = first1;
      tmp = up_i_inst_23_24_tsni(r, ins1);
      return up_i_inst_23_25_tsni(l, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static check_left(a2, b3) {
    let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p7, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
    if (globalThis.Array.isArray(a2) && a2.length === 8) {
      first0 = a2[0];
      first1 = a2[1];
      first2 = a2[2];
      first3 = a2[3];
      first4 = a2[4];
      first5 = a2[5];
      first6 = a2[6];
      first7 = a2[7];
      pid_ = first0;
      port = first1;
      pm = first2;
      pql = first3;
      pdl = first4;
      pqr = first5;
      pdr = first6;
      e = first7;
      if (globalThis.Array.isArray(b3) && b3.length === 6) {
        first01 = b3[0];
        first11 = b3[1];
        first21 = b3[2];
        first31 = b3[3];
        first41 = b3[4];
        first51 = b3[5];
        p7 = first01;
        m = first11;
        ql = first21;
        dl = first31;
        qr = first41;
        dr = first51;
        tmp = pdr > 0;
        scrut = pqr && tmp;
        if (scrut === true) {
          arr = [
            p7,
            m,
            ql,
            dl,
            qr,
            dr
          ];
          return arr
        } else {
          arr1 = [
            p7,
            m,
            ql,
            dl,
            false,
            dr
          ];
          return arr1
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static check_right(a3, b4) {
    let first7, first6, first5, first4, first3, first2, first1, first0, pid_, port, pm, pql, pdl, pqr, pdr, e, first51, first41, first31, first21, first11, first01, p7, m, ql, dl, qr, dr, scrut, tmp, arr, arr1;
    if (globalThis.Array.isArray(a3) && a3.length === 8) {
      first0 = a3[0];
      first1 = a3[1];
      first2 = a3[2];
      first3 = a3[3];
      first4 = a3[4];
      first5 = a3[5];
      first6 = a3[6];
      first7 = a3[7];
      pid_ = first0;
      port = first1;
      pm = first2;
      pql = first3;
      pdl = first4;
      pqr = first5;
      pdr = first6;
      e = first7;
      if (globalThis.Array.isArray(b4) && b4.length === 6) {
        first01 = b4[0];
        first11 = b4[1];
        first21 = b4[2];
        first31 = b4[3];
        first41 = b4[4];
        first51 = b4[5];
        p7 = first01;
        m = first11;
        ql = first21;
        dl = first31;
        qr = first41;
        dr = first51;
        tmp = pdl > 0;
        scrut = pql && tmp;
        if (scrut === true) {
          arr = [
            p7,
            m,
            ql,
            dl,
            qr,
            dr
          ];
          return arr
        } else {
          arr1 = [
            p7,
            m,
            false,
            dl,
            qr,
            dr
          ];
          return arr1
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static update_o(lp_rp, out_) {
    let first1, first0, lp, rp, tmp;
    if (globalThis.Array.isArray(lp_rp) && lp_rp.length === 2) {
      first0 = lp_rp[0];
      first1 = lp_rp[1];
      lp = first0;
      rp = first1;
      tmp = check_right_inst_27_28_tsni(rp, out_);
      return check_left_inst_27_79_tsni(lp, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static update_io(d3, lrps, state6) {
    let update_is, update_os, tmp;
    update_is = function update_is(state7) {
      let tmp1, tmp2;
      tmp1 = circsim.inports(state7);
      tmp2 = NofibPrelude.foldr(update_i_inst_29_30_tsni, tmp1, lrps);
      return circsim.updateInports(state7, tmp2)
    };
    update_os = function update_os(state7) {
      let scrut, tmp1, tmp2, tmp3;
      tmp1 = circsim.pathDepth(state7);
      scrut = tmp1 == d3;
      if (scrut === true) {
        tmp2 = circsim.outports(state7);
        tmp3 = NofibPrelude.zipWith(update_o_inst_29_31_tsni, lrps, tmp2);
        return circsim.updateOutports(state7, tmp3)
      } else {
        return state7
      }
    };
    tmp = update_is(state6);
    return update_os(tmp)
  } 
  static do_send(d4, states1) {
    let states11, send_results, pss_, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1, lambda2;
    lambda = (undefined, function (s) {
      return circsim.check_depth(d4, s)
    });
    tmp = map_inst_32_33_tsni(lambda, states1);
    states11 = tmp;
    tmp1 = map_inst_32_80_tsni(circsim.make_packet, states11);
    tmp2 = circsim.pad_packets(tmp1);
    tmp3 = NofibPrelude.transpose(tmp2);
    lambda1 = (undefined, function (x5) {
      let tmp6;
      tmp6 = send_inst_32_34_tsni(x5);
      return snd_inst_32_81_tsni(tmp6)
    });
    tmp4 = NofibPrelude.map(lambda1, tmp3);
    send_results = tmp4;
    tmp5 = NofibPrelude.transpose(send_results);
    pss_ = tmp5;
    lambda2 = (undefined, function (x5, y3) {
      return update_io_inst_32_35_tsni(d4, x5, y3)
    });
    return NofibPrelude.zipWith(lambda2, pss_, states1)
  } 
  static do_sends(d5, states2) {
    let lambda, lambda1;
    lambda = (undefined, function (s) {
      return acknowledge_inst_36_37_tsni(d5, s)
    });
    lambda1 = (undefined, function (x5) {
      return do_send_inst_36_38_tsni(d5, x5)
    });
    return NofibPrelude.until(lambda, lambda1, states2)
  } 
  static simulate_component(d6, state7) {
    let lscomp, out_signals, new_value, scrut, scrut1, param0, v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    lscomp = function lscomp(ls) {
      let param01, param1, h, t4, first2, first1, first0, sig, tmp6;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param1 = ls.tail;
        h = param01;
        t4 = param1;
        if (globalThis.Array.isArray(h) && h.length === 3) {
          first0 = h[0];
          first1 = h[1];
          first2 = h[2];
          sig = first2;
          tmp6 = lscomp(t4);
          return NofibPrelude.Cons(sig, tmp6)
        } else {
          return lscomp(t4)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = circsim.inports(state7);
    tmp1 = lscomp(tmp);
    out_signals = tmp1;
    tmp2 = circsim.compType(state7);
    tmp3 = circsim.apply_component(tmp2, out_signals);
    new_value = tmp3;
    tmp4 = circsim.pathDepth(state7);
    scrut = d6 == tmp4;
    if (scrut === true) {
      tmp5 = new_value === NofibPrelude.None;
      scrut1 = Predef.not(tmp5);
      if (scrut1 === true) {
        if (new_value instanceof NofibPrelude.Some.class) {
          param0 = new_value.x;
          v = param0;
          return circsim.update_outports(state7, v)
        } else {
          return state7
        }
      } else {
        return state7
      }
    } else {
      return state7
    }
  } 
  static simulate_components(depth, states3) {
    let lambda;
    lambda = (undefined, function (s) {
      return circsim.simulate_component(depth, s)
    });
    return NofibPrelude.map(lambda, states3)
  } 
  static do_cycle(cpd, tp41, inputs) {
    let sim_then_send, first3, first2, first1, first0, size, ins2, outs, states4, states11, states21, states31, states41, tmp, tmp1, tmp2, tmp3, tmp4, arr, lambda;
    sim_then_send = function sim_then_send(state8, d7) {
      let tmp5;
      tmp5 = circsim.simulate_components(d7, state8);
      return do_sends_inst_39_40_tsni(d7, tmp5)
    };
    if (globalThis.Array.isArray(tp41) && tp41.length === 4) {
      first0 = tp41[0];
      first1 = tp41[1];
      first2 = tp41[2];
      first3 = tp41[3];
      size = first0;
      ins2 = first1;
      outs = first2;
      states4 = first3;
      lambda = (undefined, function (s) {
        let tmp5;
        tmp5 = zip_inst_39_42_tsni(ins2, inputs);
        return store_inputs_inst_39_41_tsni(tmp5, s)
      });
      tmp = NofibPrelude.map(lambda, states4);
      states11 = tmp;
      tmp1 = do_sends_inst_39_43_tsni(0, states11);
      states21 = tmp1;
      tmp2 = enumFromTo_inst_39_44_tsni(1, cpd);
      tmp3 = foldl_inst_39_82_tsni(sim_then_send, states21, tmp2);
      states31 = tmp3;
      tmp4 = circsim.restore_requests(states4, states31);
      states41 = tmp4;
      arr = [
        size,
        ins2,
        outs,
        states41
      ];
      return arr
    } else {
      throw globalThis.Error(tp41);
    }
  } 
  static simulate(inputs_list, b5) {
    let first3, first2, first1, first0, size, ins2, outs, states4, tmp, tmp1, arr, tmp2, lambda;
    if (globalThis.Array.isArray(b5) && b5.length === 4) {
      first0 = b5[0];
      first1 = b5[1];
      first2 = b5[2];
      first3 = b5[3];
      size = first0;
      ins2 = first1;
      outs = first2;
      states4 = first3;
      lambda = (undefined, function (x5, y3) {
        let arr1, tmp3, _deforest_Deforest_Arr_4_0, _deforest_Deforest_Arr_4_1, _deforest_Deforest_Arr_4_2, _deforest_Deforest_Arr_4_3;
        _deforest_Deforest_Arr_4_0 = size;
        _deforest_Deforest_Arr_4_1 = ins2;
        _deforest_Deforest_Arr_4_2 = outs;
        _deforest_Deforest_Arr_4_3 = states4;
        arr1 = () => {
          let first31, first21, first11, first01, size1, ins3, outs1, states5, tmp4;
          first01 = _deforest_Deforest_Arr_4_0;
          first11 = _deforest_Deforest_Arr_4_1;
          first21 = _deforest_Deforest_Arr_4_2;
          first31 = _deforest_Deforest_Arr_4_3;
          size1 = first01;
          ins3 = first11;
          outs1 = first21;
          states5 = first31;
          tmp4 = NofibPrelude.map(circsim.pathDepth, states5);
          return NofibPrelude.maximum(tmp4)
        };
        tmp3 = critical_path_depth_inst_45_83_tsni(arr1);
        return do_cycle_inst_45_46_tsni(tmp3, x5, y3)
      });
      tmp = lambda;
      tmp1 = NofibPrelude.map(circsim.init_dffs, states4);
      arr = [
        size,
        ins2,
        outs,
        tmp1
      ];
      tmp2 = NofibPrelude.scanl(tmp, arr, inputs_list);
      return NofibPrelude.tail(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static reg(sto, n) {
    let arr, tmp, tmp1, tmp2, tmp3, arr1, tmp4, arr2, tmp5, tmp6, tmp7, arr3, tmp8, arr4, tmp9, tmp10, tmp11, tmp12, arr5, tmp13, arr6, tmp14, tmp15, arr7, tmp16, tmp17, tmp18, arr8, arr9, tmp19, tmp20, arr10, tmp21, tmp22, tmp23, tmp24, arr11, tmp25, arr12, tmp26, tmp27, arr13, tmp28, tmp29, tmp30, tmp31, arr14, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39;
    arr = [
      0,
      circsim.F,
      false,
      0,
      true,
      4
    ];
    tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
    tmp1 = runtime.safeCall(circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp));
    tmp2 = n + 1;
    tmp3 = n + 5;
    arr1 = [
      tmp3,
      0,
      circsim.F
    ];
    tmp4 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
    arr2 = [
      0,
      circsim.F,
      false,
      0,
      true,
      5
    ];
    tmp5 = NofibPrelude.Cons(arr2, NofibPrelude.Nil);
    tmp6 = runtime.safeCall(circsim.PS(tmp2, circsim.Dff, 1, tmp4, tmp5));
    tmp7 = n + 2;
    arr3 = [
      sto,
      0,
      circsim.F
    ];
    tmp8 = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
    arr4 = [
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ];
    tmp9 = NofibPrelude.Cons(arr4, NofibPrelude.Nil);
    tmp10 = runtime.safeCall(circsim.PS(tmp7, circsim.Inv, 1, tmp8, tmp9));
    tmp11 = n + 3;
    tmp12 = n + 1;
    arr5 = [
      tmp12,
      0,
      circsim.F
    ];
    tmp13 = n + 2;
    arr6 = [
      tmp13,
      0,
      circsim.F
    ];
    tmp14 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(arr5, tmp14);
    arr7 = [
      0,
      circsim.F,
      false,
      0,
      true,
      2
    ];
    tmp16 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
    tmp17 = runtime.safeCall(circsim.PS(tmp11, circsim.And2, 2, tmp15, tmp16));
    tmp18 = n + 4;
    arr8 = [
      sto,
      0,
      circsim.F
    ];
    arr9 = [
      n,
      0,
      circsim.F
    ];
    tmp19 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(arr8, tmp19);
    arr10 = [
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ];
    tmp21 = NofibPrelude.Cons(arr10, NofibPrelude.Nil);
    tmp22 = runtime.safeCall(circsim.PS(tmp18, circsim.And2, 1, tmp20, tmp21));
    tmp23 = n + 5;
    tmp24 = n + 3;
    arr11 = [
      tmp24,
      0,
      circsim.F
    ];
    tmp25 = n + 4;
    arr12 = [
      tmp25,
      0,
      circsim.F
    ];
    tmp26 = NofibPrelude.Cons(arr12, NofibPrelude.Nil);
    tmp27 = NofibPrelude.Cons(arr11, tmp26);
    arr13 = [
      0,
      circsim.F,
      true,
      4,
      false,
      0
    ];
    tmp28 = NofibPrelude.Cons(arr13, NofibPrelude.Nil);
    tmp29 = runtime.safeCall(circsim.PS(tmp23, circsim.Or2, 3, tmp27, tmp28));
    tmp30 = n + 6;
    tmp31 = n + 1;
    arr14 = [
      tmp31,
      0,
      circsim.F
    ];
    tmp32 = NofibPrelude.Cons(arr14, NofibPrelude.Nil);
    tmp33 = runtime.safeCall(circsim.PS(tmp30, circsim.Outp, 4, tmp32, NofibPrelude.Nil));
    tmp34 = NofibPrelude.Cons(tmp33, NofibPrelude.Nil);
    tmp35 = NofibPrelude.Cons(tmp29, tmp34);
    tmp36 = NofibPrelude.Cons(tmp22, tmp35);
    tmp37 = NofibPrelude.Cons(tmp17, tmp36);
    tmp38 = NofibPrelude.Cons(tmp10, tmp37);
    tmp39 = NofibPrelude.Cons(tmp6, tmp38);
    return NofibPrelude.Cons(tmp1, tmp39)
  } 
  static regs(bits) {
    let ilabel, olabel, is_, os, sto1, states4, arr, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr1, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, arr2, lambda, lambda1, lambda2, lambda3;
    ilabel = function ilabel(n1, pid_) {
      let tmp24, tmp25, arr3;
      tmp24 = NofibPrelude.stringOfInt(n1);
      tmp25 = NofibPrelude.stringConcat("x", tmp24);
      arr3 = [
        tmp25,
        pid_
      ];
      return arr3
    };
    olabel = function olabel(n1, pid_) {
      let tmp24, tmp25, arr3;
      tmp24 = NofibPrelude.stringOfInt(n1);
      tmp25 = NofibPrelude.stringConcat("y", tmp24);
      arr3 = [
        tmp25,
        pid_
      ];
      return arr3
    };
    arr = [
      "sto",
      0
    ];
    tmp = NofibPrelude.enumFrom(0);
    tmp1 = bits - 1;
    tmp2 = enumFromTo_inst_47_48_tsni(0, tmp1);
    lambda = (undefined, function (x5) {
      let tmp24;
      tmp24 = 7 * x5;
      return tmp24 + 1
    });
    tmp3 = map_inst_47_49_tsni(lambda, tmp2);
    tmp4 = zipWith_lz_nl_inst_47_66_tsni(ilabel, tmp, tmp3);
    tmp5 = NofibPrelude.Cons(arr, tmp4);
    is_ = tmp5;
    tmp6 = NofibPrelude.enumFrom(0);
    tmp7 = bits - 1;
    tmp8 = enumFromTo_inst_47_50_tsni(0, tmp7);
    lambda1 = (undefined, function (x5) {
      let tmp24;
      tmp24 = 7 * x5;
      return tmp24 + 7
    });
    tmp9 = map_inst_47_51_tsni(lambda1, tmp8);
    tmp10 = zipWith_lz_nl_inst_47_65_tsni(olabel, tmp6, tmp9);
    os = tmp10;
    tmp11 = bits - 1;
    tmp12 = 8 * tmp11;
    tmp13 = tmp12 + 5;
    arr1 = [
      0,
      circsim.F,
      false,
      0,
      true,
      tmp13
    ];
    tmp14 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
    tmp15 = runtime.safeCall(circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14));
    sto1 = tmp15;
    tmp16 = bits - 1;
    tmp17 = enumFromTo_inst_47_52_tsni(0, tmp16);
    lambda2 = (undefined, function (x5) {
      let tmp24;
      tmp24 = 7 * x5;
      return tmp24 + 1
    });
    tmp18 = map_inst_47_53_tsni(lambda2, tmp17);
    lambda3 = (undefined, function (x5) {
      return reg_inst_47_55_tsni(0, x5)
    });
    tmp19 = map_inst_47_54_tsni(lambda3, tmp18);
    tmp20 = concat_inst_47_84_tsni(tmp19);
    tmp21 = NofibPrelude.Cons(sto1, tmp20);
    states4 = tmp21;
    tmp22 = 7 * bits;
    tmp23 = 1 + tmp22;
    arr2 = [
      tmp23,
      is_,
      os,
      states4
    ];
    return arr2
  } 
  static circuit_simulate(inputs_list1, circuit) {
    let tmp;
    tmp = simulate_inst_56_57_tsni(inputs_list1, circuit);
    return NofibPrelude.map(collect_outputs_inst_56_58_tsni, tmp)
  } 
  static run(num_bits, num_cycles) {
    let example, inputs1, cycles, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = regs_inst_59_60_tsni(num_bits);
    tmp1 = pad_circuit_inst_59_64_tsni(tmp);
    example = tmp1;
    tmp2 = num_bits + 1;
    tmp3 = replicate_inst_59_63_tsni(tmp2, circsim.T);
    inputs1 = tmp3;
    tmp4 = replicate_inst_59_62_tsni(num_cycles, inputs1);
    cycles = tmp4;
    return circuit_simulate_inst_59_61_tsni(cycles, example)
  } 
  static testCircsim_nofib(n1) {
    return run_inst_67_68_tsni(8, n1)
  } 
  static main() {
    let tmp;
    tmp = testCircsim_nofib_inst_69_70_tsni(40);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "circsim"; }
});
let circsim = circsim1; export default circsim;
