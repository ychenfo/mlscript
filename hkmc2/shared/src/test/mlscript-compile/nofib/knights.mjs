import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let knights1, printBoard_inst_0_tsni, spaces_inst_0_1_tsni, replicate_inst_0_1_2_tsni, spaces_inst_0_3_tsni, replicate_inst_0_3_2_tsni, spaces_inst_0_4_tsni, replicate_inst_0_4_2_tsni, spaces_inst_0_5_tsni, replicate_inst_0_5_2_tsni, spaces_inst_0_6_tsni, replicate_inst_0_6_2_tsni, spaces_inst_0_7_tsni, replicate_inst_0_7_2_tsni, spaces_inst_0_8_tsni, replicate_inst_0_8_2_tsni, printBoard_inst_9_tsni, spaces_inst_9_1_tsni, replicate_inst_9_1_2_tsni, spaces_inst_9_3_tsni, replicate_inst_9_3_2_tsni, spaces_inst_9_4_tsni, replicate_inst_9_4_2_tsni, spaces_inst_9_5_tsni, replicate_inst_9_5_2_tsni, spaces_inst_9_6_tsni, replicate_inst_9_6_2_tsni, spaces_inst_9_7_tsni, replicate_inst_9_7_2_tsni, spaces_inst_9_8_tsni, replicate_inst_9_8_2_tsni, spaces_inst_8_tsni, replicate_inst_8_2_tsni, printBoard_inst_10_tsni, spaces_inst_10_1_tsni, replicate_inst_10_1_2_tsni, spaces_inst_10_3_tsni, replicate_inst_10_3_2_tsni, spaces_inst_10_4_tsni, replicate_inst_10_4_2_tsni, spaces_inst_10_5_tsni, replicate_inst_10_5_2_tsni, spaces_inst_10_6_tsni, replicate_inst_10_6_2_tsni, spaces_inst_10_7_tsni, replicate_inst_10_7_2_tsni, spaces_inst_10_8_tsni, replicate_inst_10_8_2_tsni, printBoard_inst_11_tsni, spaces_inst_11_1_tsni, replicate_inst_11_1_2_tsni, spaces_inst_11_3_tsni, replicate_inst_11_3_2_tsni, spaces_inst_11_4_tsni, replicate_inst_11_4_2_tsni, spaces_inst_11_5_tsni, replicate_inst_11_5_2_tsni, spaces_inst_11_6_tsni, replicate_inst_11_6_2_tsni, spaces_inst_11_7_tsni, replicate_inst_11_7_2_tsni, spaces_inst_11_8_tsni, replicate_inst_11_8_2_tsni, spaces_inst_7_tsni, replicate_inst_7_2_tsni, printBoard_inst_12_tsni, spaces_inst_12_1_tsni, replicate_inst_12_1_2_tsni, spaces_inst_12_3_tsni, replicate_inst_12_3_2_tsni, spaces_inst_12_4_tsni, replicate_inst_12_4_2_tsni, spaces_inst_12_5_tsni, replicate_inst_12_5_2_tsni, spaces_inst_12_6_tsni, replicate_inst_12_6_2_tsni, spaces_inst_12_7_tsni, replicate_inst_12_7_2_tsni, spaces_inst_12_8_tsni, replicate_inst_12_8_2_tsni, spaces_inst_6_tsni, replicate_inst_6_2_tsni, printBoard_inst_13_tsni, spaces_inst_13_1_tsni, replicate_inst_13_1_2_tsni, spaces_inst_13_3_tsni, replicate_inst_13_3_2_tsni, spaces_inst_13_4_tsni, replicate_inst_13_4_2_tsni, spaces_inst_13_5_tsni, replicate_inst_13_5_2_tsni, spaces_inst_13_6_tsni, replicate_inst_13_6_2_tsni, spaces_inst_13_7_tsni, replicate_inst_13_7_2_tsni, spaces_inst_13_8_tsni, replicate_inst_13_8_2_tsni, printBoard_inst_14_tsni, spaces_inst_14_1_tsni, replicate_inst_14_1_2_tsni, spaces_inst_14_3_tsni, replicate_inst_14_3_2_tsni, spaces_inst_14_4_tsni, replicate_inst_14_4_2_tsni, spaces_inst_14_5_tsni, replicate_inst_14_5_2_tsni, spaces_inst_14_6_tsni, replicate_inst_14_6_2_tsni, spaces_inst_14_7_tsni, replicate_inst_14_7_2_tsni, spaces_inst_14_8_tsni, replicate_inst_14_8_2_tsni, spaces_inst_5_tsni, replicate_inst_5_2_tsni, printBoard_inst_15_tsni, spaces_inst_15_1_tsni, replicate_inst_15_1_2_tsni, spaces_inst_15_3_tsni, replicate_inst_15_3_2_tsni, spaces_inst_15_4_tsni, replicate_inst_15_4_2_tsni, spaces_inst_15_5_tsni, replicate_inst_15_5_2_tsni, spaces_inst_15_6_tsni, replicate_inst_15_6_2_tsni, spaces_inst_15_7_tsni, replicate_inst_15_7_2_tsni, spaces_inst_15_8_tsni, replicate_inst_15_8_2_tsni, printBoard_inst_16_tsni, spaces_inst_16_1_tsni, replicate_inst_16_1_2_tsni, spaces_inst_16_3_tsni, replicate_inst_16_3_2_tsni, spaces_inst_16_4_tsni, replicate_inst_16_4_2_tsni, spaces_inst_16_5_tsni, replicate_inst_16_5_2_tsni, spaces_inst_16_6_tsni, replicate_inst_16_6_2_tsni, spaces_inst_16_7_tsni, replicate_inst_16_7_2_tsni, spaces_inst_16_8_tsni, replicate_inst_16_8_2_tsni, spaces_inst_4_tsni, replicate_inst_4_2_tsni, printBoard_inst_17_tsni, spaces_inst_17_1_tsni, replicate_inst_17_1_2_tsni, spaces_inst_17_3_tsni, replicate_inst_17_3_2_tsni, spaces_inst_17_4_tsni, replicate_inst_17_4_2_tsni, spaces_inst_17_5_tsni, replicate_inst_17_5_2_tsni, spaces_inst_17_6_tsni, replicate_inst_17_6_2_tsni, spaces_inst_17_7_tsni, replicate_inst_17_7_2_tsni, spaces_inst_17_8_tsni, replicate_inst_17_8_2_tsni, spaces_inst_3_tsni, replicate_inst_3_2_tsni, printBoard_inst_18_tsni, spaces_inst_18_1_tsni, replicate_inst_18_1_2_tsni, spaces_inst_18_3_tsni, replicate_inst_18_3_2_tsni, spaces_inst_18_4_tsni, replicate_inst_18_4_2_tsni, spaces_inst_18_5_tsni, replicate_inst_18_5_2_tsni, spaces_inst_18_6_tsni, replicate_inst_18_6_2_tsni, spaces_inst_18_7_tsni, replicate_inst_18_7_2_tsni, spaces_inst_18_8_tsni, replicate_inst_18_8_2_tsni, printBoard_inst_19_tsni, spaces_inst_19_1_tsni, replicate_inst_19_1_2_tsni, spaces_inst_19_3_tsni, replicate_inst_19_3_2_tsni, spaces_inst_19_4_tsni, replicate_inst_19_4_2_tsni, spaces_inst_19_5_tsni, replicate_inst_19_5_2_tsni, spaces_inst_19_6_tsni, replicate_inst_19_6_2_tsni, spaces_inst_19_7_tsni, replicate_inst_19_7_2_tsni, spaces_inst_19_8_tsni, replicate_inst_19_8_2_tsni, printBoard_inst_20_tsni, spaces_inst_20_1_tsni, replicate_inst_20_1_2_tsni, spaces_inst_20_3_tsni, replicate_inst_20_3_2_tsni, spaces_inst_20_4_tsni, replicate_inst_20_4_2_tsni, spaces_inst_20_5_tsni, replicate_inst_20_5_2_tsni, spaces_inst_20_6_tsni, replicate_inst_20_6_2_tsni, spaces_inst_20_7_tsni, replicate_inst_20_7_2_tsni, spaces_inst_20_8_tsni, replicate_inst_20_8_2_tsni, spaces_inst_1_tsni, replicate_inst_1_2_tsni, possibleMoves_inst_21_tsni, possibleMoves_inst_22_tsni, allDescend_inst_23_tsni, possibleMoves_inst_23_22_tsni, descAndNo_inst_24_tsni, possibleMoves_inst_24_25_tsni, allDescend_inst_24_23_tsni, possibleMoves_inst_24_23_22_tsni, map_inst_24_23_26_tsni, moveKnight_inst_24_23_27_tsni, addPiece_inst_24_23_27_28_tsni, descAndNo_inst_29_tsni, possibleMoves_inst_29_25_tsni, allDescend_inst_29_23_tsni, possibleMoves_inst_29_23_22_tsni, map_inst_29_23_26_tsni, singleDescend_inst_30_tsni, descAndNo_inst_30_24_tsni, allDescend_inst_30_24_23_tsni, possibleMoves_inst_30_24_23_22_tsni, possibleMoves_inst_30_24_25_tsni, map_inst_30_24_23_26_tsni, deadEnd_inst_31_tsni, possibleMoves_inst_31_21_tsni, printBoard_inst_32_tsni, spaces_inst_32_1_tsni, replicate_inst_32_1_2_tsni, spaces_inst_32_3_tsni, replicate_inst_32_3_2_tsni, spaces_inst_32_4_tsni, replicate_inst_32_4_2_tsni, spaces_inst_32_5_tsni, replicate_inst_32_5_2_tsni, spaces_inst_32_6_tsni, replicate_inst_32_6_2_tsni, spaces_inst_32_7_tsni, replicate_inst_32_7_2_tsni, spaces_inst_32_8_tsni, replicate_inst_32_8_2_tsni, descendents_inst_33_tsni, deadEnd_inst_33_31_tsni, possibleMoves_inst_33_31_21_tsni, singleDescend_inst_33_30_tsni, descAndNo_inst_33_30_24_tsni, possibleMoves_inst_33_30_24_25_tsni, allDescend_inst_33_30_24_23_tsni, possibleMoves_inst_33_30_24_23_22_tsni, map_inst_33_30_24_23_26_tsni, descAndNo_inst_33_29_tsni, allDescend_inst_33_29_23_tsni, possibleMoves_inst_33_29_23_22_tsni, possibleMoves_inst_33_29_25_tsni, map_inst_33_29_23_26_tsni, depthSearch_inst_34_tsni, grow_inst_35_tsni, descendents_inst_35_33_tsni, descAndNo_inst_35_33_29_tsni, possibleMoves_inst_35_33_29_25_tsni, allDescend_inst_35_33_29_23_tsni, possibleMoves_inst_35_33_29_23_22_tsni, map_inst_35_33_29_23_26_tsni, singleDescend_inst_35_33_30_tsni, descAndNo_inst_35_33_30_24_tsni, allDescend_inst_35_33_30_24_23_tsni, possibleMoves_inst_35_33_30_24_23_22_tsni, possibleMoves_inst_35_33_30_24_25_tsni, map_inst_35_33_30_24_23_26_tsni, deadEnd_inst_35_33_31_tsni, possibleMoves_inst_35_33_31_21_tsni, root_inst_36_tsni, enumFromTo_inst_36_37_tsni, enumFromTo_inst_36_38_tsni, printTour_inst_39_tsni, showChessSet_inst_39_40_tsni, printBoard_inst_39_40_32_tsni, spaces_inst_39_40_32_1_tsni, replicate_inst_39_40_32_1_2_tsni, spaces_inst_39_40_32_3_tsni, replicate_inst_39_40_32_3_2_tsni, spaces_inst_39_40_32_4_tsni, replicate_inst_39_40_32_4_2_tsni, spaces_inst_39_40_32_5_tsni, replicate_inst_39_40_32_5_2_tsni, spaces_inst_39_40_32_6_tsni, replicate_inst_39_40_32_6_2_tsni, spaces_inst_39_40_32_7_tsni, replicate_inst_39_40_32_7_2_tsni, spaces_inst_39_40_32_8_tsni, replicate_inst_39_40_32_8_2_tsni, append_inst_39_40_32_41_tsni, append_inst_39_40_32_42_tsni, append_inst_39_40_32_43_tsni, append_inst_39_40_32_44_tsni, append_inst_39_40_32_45_tsni, append_inst_39_40_32_46_tsni, append_inst_39_40_32_47_tsni, append_inst_39_40_32_48_tsni, append_inst_39_40_32_49_tsni, append_inst_39_40_32_50_tsni, append_inst_39_40_32_51_tsni, append_inst_39_40_32_52_tsni, append_inst_39_40_32_53_tsni, append_inst_39_40_32_54_tsni, append_inst_39_40_32_55_tsni, append_inst_39_40_32_56_tsni, root_inst_39_36_tsni, enumFromTo_inst_39_36_37_tsni, enumFromTo_inst_39_36_38_tsni, grow_inst_39_35_tsni, descendents_inst_39_35_33_tsni, deadEnd_inst_39_35_33_31_tsni, possibleMoves_inst_39_35_33_31_21_tsni, singleDescend_inst_39_35_33_30_tsni, descAndNo_inst_39_35_33_30_24_tsni, possibleMoves_inst_39_35_33_30_24_25_tsni, allDescend_inst_39_35_33_30_24_23_tsni, possibleMoves_inst_39_35_33_30_24_23_22_tsni, map_inst_39_35_33_30_24_23_26_tsni, descAndNo_inst_39_35_33_29_tsni, allDescend_inst_39_35_33_29_23_tsni, possibleMoves_inst_39_35_33_29_23_22_tsni, possibleMoves_inst_39_35_33_29_25_tsni, map_inst_39_35_33_29_23_26_tsni, depthSearch_inst_39_34_tsni, take_lz_inst_39_57_tsni, testKnights_nofib_inst_58_tsni, printTour_inst_58_39_tsni, depthSearch_inst_58_39_34_tsni, grow_inst_58_39_35_tsni, descendents_inst_58_39_35_33_tsni, descAndNo_inst_58_39_35_33_29_tsni, possibleMoves_inst_58_39_35_33_29_25_tsni, allDescend_inst_58_39_35_33_29_23_tsni, possibleMoves_inst_58_39_35_33_29_23_22_tsni, map_inst_58_39_35_33_29_23_26_tsni, singleDescend_inst_58_39_35_33_30_tsni, descAndNo_inst_58_39_35_33_30_24_tsni, allDescend_inst_58_39_35_33_30_24_23_tsni, possibleMoves_inst_58_39_35_33_30_24_23_22_tsni, possibleMoves_inst_58_39_35_33_30_24_25_tsni, map_inst_58_39_35_33_30_24_23_26_tsni, deadEnd_inst_58_39_35_33_31_tsni, possibleMoves_inst_58_39_35_33_31_21_tsni, root_inst_58_39_36_tsni, enumFromTo_inst_58_39_36_37_tsni, enumFromTo_inst_58_39_36_38_tsni, showChessSet_inst_58_39_40_tsni, printBoard_inst_58_39_40_32_tsni, spaces_inst_58_39_40_32_8_tsni, replicate_inst_58_39_40_32_8_2_tsni, spaces_inst_58_39_40_32_7_tsni, replicate_inst_58_39_40_32_7_2_tsni, spaces_inst_58_39_40_32_6_tsni, replicate_inst_58_39_40_32_6_2_tsni, spaces_inst_58_39_40_32_5_tsni, replicate_inst_58_39_40_32_5_2_tsni, spaces_inst_58_39_40_32_4_tsni, replicate_inst_58_39_40_32_4_2_tsni, spaces_inst_58_39_40_32_3_tsni, replicate_inst_58_39_40_32_3_2_tsni, spaces_inst_58_39_40_32_1_tsni, replicate_inst_58_39_40_32_1_2_tsni, append_inst_58_39_40_32_51_tsni, append_inst_58_39_40_32_44_tsni, append_inst_58_39_40_32_46_tsni, append_inst_58_39_40_32_41_tsni, append_inst_58_39_40_32_45_tsni, append_inst_58_39_40_32_43_tsni, append_inst_58_39_40_32_50_tsni, append_inst_58_39_40_32_42_tsni, append_inst_58_39_40_32_48_tsni, append_inst_58_39_40_32_49_tsni, append_inst_58_39_40_32_47_tsni, append_inst_58_39_40_32_53_tsni, append_inst_58_39_40_32_54_tsni, append_inst_58_39_40_32_56_tsni, append_inst_58_39_40_32_52_tsni, append_inst_58_39_40_32_55_tsni, take_lz_inst_58_39_57_tsni, append_inst_58_39_59_tsni, append_inst_58_39_60_tsni, append_inst_58_39_61_tsni, append_inst_58_39_62_tsni, append_inst_0_52_tsni, append_inst_0_50_tsni, append_inst_0_53_tsni, append_inst_0_54_tsni, append_inst_0_42_tsni, append_inst_0_56_tsni, append_inst_0_55_tsni, append_inst_9_52_tsni, append_inst_9_50_tsni, append_inst_9_53_tsni, append_inst_9_54_tsni, append_inst_9_42_tsni, append_inst_9_56_tsni, append_inst_9_55_tsni, append_inst_55_tsni, append_inst_10_52_tsni, append_inst_10_50_tsni, append_inst_10_53_tsni, append_inst_10_54_tsni, append_inst_10_42_tsni, append_inst_10_56_tsni, append_inst_10_55_tsni, append_inst_11_52_tsni, append_inst_11_50_tsni, append_inst_11_53_tsni, append_inst_11_54_tsni, append_inst_11_42_tsni, append_inst_11_56_tsni, append_inst_11_55_tsni, append_inst_56_tsni, append_inst_12_52_tsni, append_inst_12_50_tsni, append_inst_12_53_tsni, append_inst_12_54_tsni, append_inst_12_42_tsni, append_inst_12_56_tsni, append_inst_12_55_tsni, append_inst_42_tsni, append_inst_13_52_tsni, append_inst_13_50_tsni, append_inst_13_53_tsni, append_inst_13_54_tsni, append_inst_13_42_tsni, append_inst_13_56_tsni, append_inst_13_55_tsni, append_inst_14_52_tsni, append_inst_14_50_tsni, append_inst_14_53_tsni, append_inst_14_54_tsni, append_inst_14_42_tsni, append_inst_14_56_tsni, append_inst_14_55_tsni, append_inst_54_tsni, append_inst_15_52_tsni, append_inst_15_50_tsni, append_inst_15_53_tsni, append_inst_15_54_tsni, append_inst_15_42_tsni, append_inst_15_56_tsni, append_inst_15_55_tsni, append_inst_16_52_tsni, append_inst_16_50_tsni, append_inst_16_53_tsni, append_inst_16_54_tsni, append_inst_16_42_tsni, append_inst_16_56_tsni, append_inst_16_55_tsni, append_inst_53_tsni, append_inst_17_52_tsni, append_inst_17_50_tsni, append_inst_17_53_tsni, append_inst_17_54_tsni, append_inst_17_42_tsni, append_inst_17_56_tsni, append_inst_17_55_tsni, append_inst_50_tsni, append_inst_18_52_tsni, append_inst_18_50_tsni, append_inst_18_53_tsni, append_inst_18_54_tsni, append_inst_18_42_tsni, append_inst_18_56_tsni, append_inst_18_55_tsni, append_inst_19_52_tsni, append_inst_19_50_tsni, append_inst_19_53_tsni, append_inst_19_54_tsni, append_inst_19_42_tsni, append_inst_19_56_tsni, append_inst_19_55_tsni, append_inst_20_52_tsni, append_inst_20_50_tsni, append_inst_20_53_tsni, append_inst_20_54_tsni, append_inst_20_42_tsni, append_inst_20_56_tsni, append_inst_20_55_tsni, append_inst_52_tsni, canMove_inst_22_63_tsni, move_inst_22_63_64_tsni, map_inst_26_tsni, map_inst_23_26_tsni, deleteFirst_inst_24_65_tsni, myInit_inst_24_65_66_tsni, append_inst_32_52_tsni, append_inst_32_50_tsni, append_inst_32_53_tsni, append_inst_32_54_tsni, append_inst_32_42_tsni, append_inst_32_56_tsni, append_inst_32_55_tsni, take_lz_inst_57_tsni, append_inst_39_60_tsni, nofibListToString_inst_67_tsni, match_ls_arm_Cons_inst_21_tsni, match_ls_arm_Cons_inst_22_tsni, match_ls_arm_Cons_inst_23_22_tsni, match_ls_arm_Cons_inst_24_25_tsni, match_ls_arm_Cons_inst_24_23_22_tsni, match_ls_arm_Cons_inst_29_25_tsni, match_ls_arm_Cons_inst_29_23_22_tsni, match_ls_arm_Cons_inst_30_24_23_22_tsni, match_ls_arm_Cons_inst_30_24_25_tsni, match_ls_arm_Cons_inst_31_21_tsni, match_ls_arm_Cons_inst_33_31_21_tsni, match_ls_arm_Cons_inst_33_30_24_25_tsni, match_ls_arm_Cons_inst_33_30_24_23_22_tsni, match_ls_arm_Cons_inst_33_29_23_22_tsni, match_ls_arm_Cons_inst_33_29_25_tsni, match_ls_arm_Cons_inst_35_33_29_25_tsni, match_ls_arm_Cons_inst_35_33_29_23_22_tsni, match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni, match_ls_arm_Cons_inst_35_33_30_24_25_tsni, match_ls_arm_Cons_inst_35_33_31_21_tsni, match_xs_arm_Cons_inst_39_60_tsni, match_ls_arm_Cons_inst_39_35_33_31_21_tsni, match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni, match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni, match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni, match_ls_arm_Cons_inst_39_35_33_29_25_tsni, match_xs_arm_Nil_inst_39_tsni, match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni, match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni, match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni, match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni, match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni, match_xs_arm_Cons_inst_58_39_60_tsni, match_xs_arm_Nil_inst_58_39_tsni, match_ls_arm_Cons_inst_67_tsni;
match_ls_arm_Cons_inst_21_tsni = function match_ls_arm_Cons_inst_21_tsni(lscomp, board, _deforest_Cons_head_inst_21_tsni, _deforest_Cons_tail_inst_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_21_tsni;
  param1 = _deforest_Cons_tail_inst_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_22_tsni = function match_ls_arm_Cons_inst_22_tsni(lscomp, board, _deforest_Cons_head_inst_22_tsni, _deforest_Cons_tail_inst_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_tsni;
  param1 = _deforest_Cons_tail_inst_22_tsni;
  x = param0;
  t = param1;
  scrut = canMove_inst_22_63_tsni(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_26_tsni(f, xs);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_23_22_tsni = function match_ls_arm_Cons_inst_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_23_22_tsni, _deforest_Cons_tail_inst_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_23_26_tsni(f, xs);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_24_25_tsni = function match_ls_arm_Cons_inst_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_24_25_tsni, _deforest_Cons_tail_inst_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_24_23_22_tsni = function match_ls_arm_Cons_inst_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_24_23_22_tsni, _deforest_Cons_tail_inst_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = deleteFirst_inst_24_65_tsni(x2);
          tmp5 = possibleMoves_inst_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_29_25_tsni = function match_ls_arm_Cons_inst_29_25_tsni(lscomp, board, _deforest_Cons_head_inst_29_25_tsni, _deforest_Cons_tail_inst_29_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_29_25_tsni;
  param1 = _deforest_Cons_tail_inst_29_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_29_23_22_tsni = function match_ls_arm_Cons_inst_29_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_29_23_22_tsni, _deforest_Cons_tail_inst_29_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_29_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_29_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_29_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_30_24_23_22_tsni = function match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_30_24_23_22_tsni, _deforest_Cons_tail_inst_30_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_30_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_30_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_30_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          _deforest_Deforest_Arr_2_0 = tmp6;
          _deforest_Deforest_Arr_2_1 = x2;
          arr = (lscomp2, param13) => {
            let first1, first0, y, x3, t2, scrut1, tmp8;
            first0 = _deforest_Deforest_Arr_2_0;
            first1 = _deforest_Deforest_Arr_2_1;
            y = first0;
            x3 = first1;
            t2 = param13;
            scrut1 = y === 1;
            if (scrut1 === true) {
              tmp8 = lscomp2(t2);
              return NofibPrelude.Cons(x3, tmp8)
            } else {
              return lscomp2(t2)
            }
          };
          tmp7 = lscomp1(t1);
          _deforest_LzCons_head = arr;
          _deforest_LzCons_tail = tmp7;
          return (lscomp2) => {
            let param03, param13;
            param03 = _deforest_LzCons_head;
            param13 = _deforest_LzCons_tail;
            return runtime.safeCall(param03(lscomp2, param13))
          }
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_30_24_25_tsni = function match_ls_arm_Cons_inst_30_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_30_24_25_tsni, _deforest_Cons_tail_inst_30_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_30_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_30_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_31_21_tsni = function match_ls_arm_Cons_inst_31_21_tsni(lscomp, board, _deforest_Cons_head_inst_31_21_tsni, _deforest_Cons_tail_inst_31_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_31_21_tsni;
  param1 = _deforest_Cons_tail_inst_31_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_33_31_21_tsni = function match_ls_arm_Cons_inst_33_31_21_tsni(lscomp, board, _deforest_Cons_head_inst_33_31_21_tsni, _deforest_Cons_tail_inst_33_31_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_33_31_21_tsni;
  param1 = _deforest_Cons_tail_inst_33_31_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_33_30_24_25_tsni = function match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_33_30_24_25_tsni, _deforest_Cons_tail_inst_33_30_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_33_30_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_33_30_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_33_30_24_23_22_tsni = function match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_33_30_24_23_22_tsni, _deforest_Cons_tail_inst_33_30_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_33_30_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_33_30_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_33_30_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_33_30_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          _deforest_Deforest_Arr_2_0 = tmp6;
          _deforest_Deforest_Arr_2_1 = x2;
          arr = (lscomp2, param13) => {
            let first1, first0, y, x3, t2, scrut1, tmp8;
            first0 = _deforest_Deforest_Arr_2_0;
            first1 = _deforest_Deforest_Arr_2_1;
            y = first0;
            x3 = first1;
            t2 = param13;
            scrut1 = y === 1;
            if (scrut1 === true) {
              tmp8 = lscomp2(t2);
              return NofibPrelude.Cons(x3, tmp8)
            } else {
              return lscomp2(t2)
            }
          };
          tmp7 = lscomp1(t1);
          _deforest_LzCons_head = arr;
          _deforest_LzCons_tail = tmp7;
          return (lscomp2) => {
            let param03, param13;
            param03 = _deforest_LzCons_head;
            param13 = _deforest_LzCons_tail;
            return runtime.safeCall(param03(lscomp2, param13))
          }
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_33_29_23_22_tsni = function match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_33_29_23_22_tsni, _deforest_Cons_tail_inst_33_29_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_33_29_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_33_29_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_33_29_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_33_29_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_33_29_25_tsni = function match_ls_arm_Cons_inst_33_29_25_tsni(lscomp, board, _deforest_Cons_head_inst_33_29_25_tsni, _deforest_Cons_tail_inst_33_29_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_33_29_25_tsni;
  param1 = _deforest_Cons_tail_inst_33_29_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_35_33_29_25_tsni = function match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp, board, _deforest_Cons_head_inst_35_33_29_25_tsni, _deforest_Cons_tail_inst_35_33_29_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_35_33_29_25_tsni;
  param1 = _deforest_Cons_tail_inst_35_33_29_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_35_33_29_23_22_tsni = function match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_35_33_29_23_22_tsni, _deforest_Cons_tail_inst_35_33_29_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_35_33_29_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_35_33_29_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_35_33_29_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_35_33_29_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni = function match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_35_33_30_24_23_22_tsni, _deforest_Cons_tail_inst_35_33_30_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_35_33_30_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_35_33_30_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_35_33_30_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_35_33_30_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          _deforest_Deforest_Arr_2_0 = tmp6;
          _deforest_Deforest_Arr_2_1 = x2;
          arr = (lscomp2, param13) => {
            let first1, first0, y, x3, t2, scrut1, tmp8;
            first0 = _deforest_Deforest_Arr_2_0;
            first1 = _deforest_Deforest_Arr_2_1;
            y = first0;
            x3 = first1;
            t2 = param13;
            scrut1 = y === 1;
            if (scrut1 === true) {
              tmp8 = lscomp2(t2);
              return NofibPrelude.Cons(x3, tmp8)
            } else {
              return lscomp2(t2)
            }
          };
          tmp7 = lscomp1(t1);
          _deforest_LzCons_head = arr;
          _deforest_LzCons_tail = tmp7;
          return (lscomp2) => {
            let param03, param13;
            param03 = _deforest_LzCons_head;
            param13 = _deforest_LzCons_tail;
            return runtime.safeCall(param03(lscomp2, param13))
          }
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_35_33_30_24_25_tsni = function match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_35_33_30_24_25_tsni, _deforest_Cons_tail_inst_35_33_30_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_35_33_30_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_35_33_30_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_35_33_31_21_tsni = function match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp, board, _deforest_Cons_head_inst_35_33_31_21_tsni, _deforest_Cons_tail_inst_35_33_31_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_35_33_31_21_tsni;
  param1 = _deforest_Cons_tail_inst_35_33_31_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_xs_arm_Cons_inst_39_60_tsni = function match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head_inst_39_60_tsni, _deforest_Cons_tail_inst_39_60_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_39_60_tsni;
  param1 = _deforest_Cons_tail_inst_39_60_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_60_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_39_35_33_31_21_tsni = function match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp, board, _deforest_Cons_head_inst_39_35_33_31_21_tsni, _deforest_Cons_tail_inst_39_35_33_31_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_39_35_33_31_21_tsni;
  param1 = _deforest_Cons_tail_inst_39_35_33_31_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni = function match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_39_35_33_30_24_25_tsni, _deforest_Cons_tail_inst_39_35_33_30_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_39_35_33_30_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_39_35_33_30_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni = function match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_39_35_33_30_24_23_22_tsni, _deforest_Cons_tail_inst_39_35_33_30_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_35_33_30_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_39_35_33_30_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_39_35_33_30_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_39_35_33_30_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          _deforest_Deforest_Arr_2_0 = tmp6;
          _deforest_Deforest_Arr_2_1 = x2;
          arr = (lscomp2, param13) => {
            let first1, first0, y, x3, t2, scrut1, tmp8;
            first0 = _deforest_Deforest_Arr_2_0;
            first1 = _deforest_Deforest_Arr_2_1;
            y = first0;
            x3 = first1;
            t2 = param13;
            scrut1 = y === 1;
            if (scrut1 === true) {
              tmp8 = lscomp2(t2);
              return NofibPrelude.Cons(x3, tmp8)
            } else {
              return lscomp2(t2)
            }
          };
          tmp7 = lscomp1(t1);
          _deforest_LzCons_head = arr;
          _deforest_LzCons_tail = tmp7;
          return (lscomp2) => {
            let param03, param13;
            param03 = _deforest_LzCons_head;
            param13 = _deforest_LzCons_tail;
            return runtime.safeCall(param03(lscomp2, param13))
          }
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni = function match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_39_35_33_29_23_22_tsni, _deforest_Cons_tail_inst_39_35_33_29_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_35_33_29_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_39_35_33_29_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_39_35_33_29_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_39_35_33_29_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_39_35_33_29_25_tsni = function match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp, board, _deforest_Cons_head_inst_39_35_33_29_25_tsni, _deforest_Cons_tail_inst_39_35_33_29_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_39_35_33_29_25_tsni;
  param1 = _deforest_Cons_tail_inst_39_35_33_29_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_xs_arm_Nil_inst_39_tsni = function match_xs_arm_Nil_inst_39_tsni(pp) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni = function match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp, board, _deforest_Cons_head_inst_58_39_35_33_29_25_tsni, _deforest_Cons_tail_inst_58_39_35_33_29_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_58_39_35_33_29_25_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_35_33_29_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni = function match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_58_39_35_33_29_23_22_tsni, _deforest_Cons_tail_inst_58_39_35_33_29_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_58_39_35_33_29_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_35_33_29_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_58_39_35_33_29_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_58_39_35_33_29_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          arr = [
            tmp6,
            x2
          ];
          tmp7 = lscomp1(t1);
          return NofibPrelude.LzCons(arr, tmp7)
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni = function match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp, board, _deforest_Cons_head_inst_58_39_35_33_30_24_23_22_tsni, _deforest_Cons_tail_inst_58_39_35_33_30_24_23_22_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_58_39_35_33_30_24_23_22_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_35_33_30_24_23_22_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_58_39_35_33_30_24_23_26_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return (lscomp1) => {
        let param02, param12, x2, t1, tmp3, lambda;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        lambda = (undefined, function () {
          let tmp4, tmp5, tmp6, arr, tmp7, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
          tmp4 = knights.deleteFirst(x2);
          tmp5 = possibleMoves_inst_58_39_35_33_30_24_25_tsni(tmp4);
          tmp6 = NofibPrelude.listLen(tmp5);
          _deforest_Deforest_Arr_2_0 = tmp6;
          _deforest_Deforest_Arr_2_1 = x2;
          arr = (lscomp2, param13) => {
            let first1, first0, y, x3, t2, scrut1, tmp8;
            first0 = _deforest_Deforest_Arr_2_0;
            first1 = _deforest_Deforest_Arr_2_1;
            y = first0;
            x3 = first1;
            t2 = param13;
            scrut1 = y === 1;
            if (scrut1 === true) {
              tmp8 = lscomp2(t2);
              return NofibPrelude.Cons(x3, tmp8)
            } else {
              return lscomp2(t2)
            }
          };
          tmp7 = lscomp1(t1);
          _deforest_LzCons_head = arr;
          _deforest_LzCons_tail = tmp7;
          return (lscomp2) => {
            let param03, param13;
            param03 = _deforest_LzCons_head;
            param13 = _deforest_LzCons_tail;
            return runtime.safeCall(param03(lscomp2, param13))
          }
        });
        tmp3 = lambda;
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni = function match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp, board, _deforest_Cons_head_inst_58_39_35_33_30_24_25_tsni, _deforest_Cons_tail_inst_58_39_35_33_30_24_25_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_58_39_35_33_30_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_35_33_30_24_25_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni = function match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp, board, _deforest_Cons_head_inst_58_39_35_33_31_21_tsni, _deforest_Cons_tail_inst_58_39_35_33_31_21_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_58_39_35_33_31_21_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_35_33_31_21_tsni;
  x = param0;
  t = param1;
  scrut = knights.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp(t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp(t)
  }
};
match_xs_arm_Cons_inst_58_39_60_tsni = function match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head_inst_58_39_60_tsni, _deforest_Cons_tail_inst_58_39_60_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_58_39_60_tsni;
  param1 = _deforest_Cons_tail_inst_58_39_60_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_58_39_60_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return () => {
    return match_ls_arm_Cons_inst_67_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_58_39_tsni = function match_xs_arm_Nil_inst_58_39_tsni(pp) {
  return () => {
    return ""
  }
};
match_ls_arm_Cons_inst_67_tsni = function match_ls_arm_Cons_inst_67_tsni(_deforest_Cons_head_inst_67_tsni, _deforest_Cons_tail_inst_67_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_67_tsni;
  param1 = _deforest_Cons_tail_inst_67_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_67_tsni(t);
  return h + tmp
};
printBoard_inst_0_tsni = function printBoard_inst_0_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_0_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_0_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_0_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_0_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_0_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_0_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_0_tsni(s, tmp23, xs1);
              tmp25 = append_inst_0_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_0_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_0_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_0_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_0_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_0_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_0_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_0_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_0_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_0_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_0_tsni(s, tmp55, xs1);
            tmp57 = append_inst_0_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_0_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_0_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_0_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_0_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_0_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_0_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_0_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_0_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_0_1_tsni = function spaces_inst_0_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_tsni(tmp3, " ")
};
replicate_inst_0_1_2_tsni = function replicate_inst_0_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_3_tsni = function spaces_inst_0_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_3_2_tsni(tmp3, " ")
};
replicate_inst_0_3_2_tsni = function replicate_inst_0_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_4_tsni = function spaces_inst_0_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_4_2_tsni(tmp3, " ")
};
replicate_inst_0_4_2_tsni = function replicate_inst_0_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_5_tsni = function spaces_inst_0_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_5_2_tsni(tmp3, " ")
};
replicate_inst_0_5_2_tsni = function replicate_inst_0_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_6_tsni = function spaces_inst_0_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_6_2_tsni(tmp3, " ")
};
replicate_inst_0_6_2_tsni = function replicate_inst_0_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_7_tsni = function spaces_inst_0_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_7_2_tsni(tmp3, " ")
};
replicate_inst_0_7_2_tsni = function replicate_inst_0_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_8_tsni = function spaces_inst_0_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_8_2_tsni(tmp3, " ")
};
replicate_inst_0_8_2_tsni = function replicate_inst_0_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_9_tsni = function printBoard_inst_9_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_9_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_9_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_9_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_9_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_9_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_9_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_9_tsni(s, tmp23, xs1);
              tmp25 = append_inst_9_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_9_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_9_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_9_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_9_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_9_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_9_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_9_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_9_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_9_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_9_tsni(s, tmp55, xs1);
            tmp57 = append_inst_9_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_9_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_9_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_9_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_9_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_9_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_9_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_9_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_9_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_9_1_tsni = function spaces_inst_9_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_1_2_tsni(tmp3, " ")
};
replicate_inst_9_1_2_tsni = function replicate_inst_9_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_3_tsni = function spaces_inst_9_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_3_2_tsni(tmp3, " ")
};
replicate_inst_9_3_2_tsni = function replicate_inst_9_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_4_tsni = function spaces_inst_9_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_4_2_tsni(tmp3, " ")
};
replicate_inst_9_4_2_tsni = function replicate_inst_9_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_5_tsni = function spaces_inst_9_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_5_2_tsni(tmp3, " ")
};
replicate_inst_9_5_2_tsni = function replicate_inst_9_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_6_tsni = function spaces_inst_9_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_6_2_tsni(tmp3, " ")
};
replicate_inst_9_6_2_tsni = function replicate_inst_9_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_7_tsni = function spaces_inst_9_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_7_2_tsni(tmp3, " ")
};
replicate_inst_9_7_2_tsni = function replicate_inst_9_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_8_tsni = function spaces_inst_9_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_8_2_tsni(tmp3, " ")
};
replicate_inst_9_8_2_tsni = function replicate_inst_9_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_8_tsni = function spaces_inst_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_8_2_tsni(tmp3, " ")
};
replicate_inst_8_2_tsni = function replicate_inst_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_10_tsni = function printBoard_inst_10_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_10_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_10_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_10_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_10_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_10_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_10_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_10_tsni(s, tmp23, xs1);
              tmp25 = append_inst_10_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_10_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_10_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_10_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_10_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_10_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_10_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_10_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_10_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_10_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_10_tsni(s, tmp55, xs1);
            tmp57 = append_inst_10_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_10_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_10_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_10_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_10_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_10_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_10_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_10_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_10_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_10_1_tsni = function spaces_inst_10_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_1_2_tsni(tmp3, " ")
};
replicate_inst_10_1_2_tsni = function replicate_inst_10_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_3_tsni = function spaces_inst_10_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_3_2_tsni(tmp3, " ")
};
replicate_inst_10_3_2_tsni = function replicate_inst_10_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_4_tsni = function spaces_inst_10_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_4_2_tsni(tmp3, " ")
};
replicate_inst_10_4_2_tsni = function replicate_inst_10_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_5_tsni = function spaces_inst_10_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_5_2_tsni(tmp3, " ")
};
replicate_inst_10_5_2_tsni = function replicate_inst_10_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_6_tsni = function spaces_inst_10_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_6_2_tsni(tmp3, " ")
};
replicate_inst_10_6_2_tsni = function replicate_inst_10_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_7_tsni = function spaces_inst_10_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_7_2_tsni(tmp3, " ")
};
replicate_inst_10_7_2_tsni = function replicate_inst_10_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_8_tsni = function spaces_inst_10_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_8_2_tsni(tmp3, " ")
};
replicate_inst_10_8_2_tsni = function replicate_inst_10_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_11_tsni = function printBoard_inst_11_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_11_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_11_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_11_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_11_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_11_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_11_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_11_tsni(s, tmp23, xs1);
              tmp25 = append_inst_11_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_11_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_11_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_11_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_11_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_11_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_11_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_11_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_11_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_11_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_11_tsni(s, tmp55, xs1);
            tmp57 = append_inst_11_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_11_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_11_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_11_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_11_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_11_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_11_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_11_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_11_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_11_1_tsni = function spaces_inst_11_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_1_2_tsni(tmp3, " ")
};
replicate_inst_11_1_2_tsni = function replicate_inst_11_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_3_tsni = function spaces_inst_11_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_3_2_tsni(tmp3, " ")
};
replicate_inst_11_3_2_tsni = function replicate_inst_11_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_4_tsni = function spaces_inst_11_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_4_2_tsni(tmp3, " ")
};
replicate_inst_11_4_2_tsni = function replicate_inst_11_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_5_tsni = function spaces_inst_11_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_5_2_tsni(tmp3, " ")
};
replicate_inst_11_5_2_tsni = function replicate_inst_11_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_6_tsni = function spaces_inst_11_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_6_2_tsni(tmp3, " ")
};
replicate_inst_11_6_2_tsni = function replicate_inst_11_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_7_tsni = function spaces_inst_11_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_7_2_tsni(tmp3, " ")
};
replicate_inst_11_7_2_tsni = function replicate_inst_11_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_8_tsni = function spaces_inst_11_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_8_2_tsni(tmp3, " ")
};
replicate_inst_11_8_2_tsni = function replicate_inst_11_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_7_tsni = function spaces_inst_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_7_2_tsni(tmp3, " ")
};
replicate_inst_7_2_tsni = function replicate_inst_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_12_tsni = function printBoard_inst_12_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_12_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_12_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_12_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_12_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_12_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_12_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_12_tsni(s, tmp23, xs1);
              tmp25 = append_inst_12_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_12_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_12_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_12_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_12_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_12_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_12_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_12_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_12_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_12_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_12_tsni(s, tmp55, xs1);
            tmp57 = append_inst_12_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_12_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_12_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_12_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_12_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_12_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_12_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_12_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_12_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_12_1_tsni = function spaces_inst_12_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_1_2_tsni(tmp3, " ")
};
replicate_inst_12_1_2_tsni = function replicate_inst_12_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_3_tsni = function spaces_inst_12_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_3_2_tsni(tmp3, " ")
};
replicate_inst_12_3_2_tsni = function replicate_inst_12_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_4_tsni = function spaces_inst_12_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_4_2_tsni(tmp3, " ")
};
replicate_inst_12_4_2_tsni = function replicate_inst_12_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_5_tsni = function spaces_inst_12_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_5_2_tsni(tmp3, " ")
};
replicate_inst_12_5_2_tsni = function replicate_inst_12_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_6_tsni = function spaces_inst_12_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_6_2_tsni(tmp3, " ")
};
replicate_inst_12_6_2_tsni = function replicate_inst_12_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_7_tsni = function spaces_inst_12_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_7_2_tsni(tmp3, " ")
};
replicate_inst_12_7_2_tsni = function replicate_inst_12_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_8_tsni = function spaces_inst_12_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_8_2_tsni(tmp3, " ")
};
replicate_inst_12_8_2_tsni = function replicate_inst_12_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_6_tsni = function spaces_inst_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_6_2_tsni(tmp3, " ")
};
replicate_inst_6_2_tsni = function replicate_inst_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_13_tsni = function printBoard_inst_13_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_13_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_13_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_13_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_13_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_13_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_13_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_13_tsni(s, tmp23, xs1);
              tmp25 = append_inst_13_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_13_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_13_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_13_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_13_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_13_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_13_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_13_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_13_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_13_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_13_tsni(s, tmp55, xs1);
            tmp57 = append_inst_13_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_13_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_13_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_13_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_13_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_13_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_13_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_13_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_13_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_13_1_tsni = function spaces_inst_13_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_1_2_tsni(tmp3, " ")
};
replicate_inst_13_1_2_tsni = function replicate_inst_13_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_3_tsni = function spaces_inst_13_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_3_2_tsni(tmp3, " ")
};
replicate_inst_13_3_2_tsni = function replicate_inst_13_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_4_tsni = function spaces_inst_13_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_4_2_tsni(tmp3, " ")
};
replicate_inst_13_4_2_tsni = function replicate_inst_13_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_5_tsni = function spaces_inst_13_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_5_2_tsni(tmp3, " ")
};
replicate_inst_13_5_2_tsni = function replicate_inst_13_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_6_tsni = function spaces_inst_13_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_6_2_tsni(tmp3, " ")
};
replicate_inst_13_6_2_tsni = function replicate_inst_13_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_7_tsni = function spaces_inst_13_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_7_2_tsni(tmp3, " ")
};
replicate_inst_13_7_2_tsni = function replicate_inst_13_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_8_tsni = function spaces_inst_13_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_8_2_tsni(tmp3, " ")
};
replicate_inst_13_8_2_tsni = function replicate_inst_13_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_14_tsni = function printBoard_inst_14_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_14_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_14_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_14_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_14_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_14_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_14_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_14_tsni(s, tmp23, xs1);
              tmp25 = append_inst_14_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_14_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_14_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_14_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_14_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_14_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_14_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_14_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_14_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_14_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_14_tsni(s, tmp55, xs1);
            tmp57 = append_inst_14_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_14_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_14_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_14_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_14_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_14_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_14_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_14_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_14_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_14_1_tsni = function spaces_inst_14_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_1_2_tsni(tmp3, " ")
};
replicate_inst_14_1_2_tsni = function replicate_inst_14_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_3_tsni = function spaces_inst_14_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_3_2_tsni(tmp3, " ")
};
replicate_inst_14_3_2_tsni = function replicate_inst_14_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_4_tsni = function spaces_inst_14_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_4_2_tsni(tmp3, " ")
};
replicate_inst_14_4_2_tsni = function replicate_inst_14_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_5_tsni = function spaces_inst_14_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_5_2_tsni(tmp3, " ")
};
replicate_inst_14_5_2_tsni = function replicate_inst_14_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_6_tsni = function spaces_inst_14_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_6_2_tsni(tmp3, " ")
};
replicate_inst_14_6_2_tsni = function replicate_inst_14_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_7_tsni = function spaces_inst_14_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_7_2_tsni(tmp3, " ")
};
replicate_inst_14_7_2_tsni = function replicate_inst_14_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_8_tsni = function spaces_inst_14_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_8_2_tsni(tmp3, " ")
};
replicate_inst_14_8_2_tsni = function replicate_inst_14_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_5_tsni = function spaces_inst_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_5_2_tsni(tmp3, " ")
};
replicate_inst_5_2_tsni = function replicate_inst_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_15_tsni = function printBoard_inst_15_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_15_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_15_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_15_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_15_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_15_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_15_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_15_tsni(s, tmp23, xs1);
              tmp25 = append_inst_15_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_15_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_15_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_15_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_15_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_15_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_15_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_15_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_15_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_15_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_15_tsni(s, tmp55, xs1);
            tmp57 = append_inst_15_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_15_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_15_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_15_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_15_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_15_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_15_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_15_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_15_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_15_1_tsni = function spaces_inst_15_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_1_2_tsni(tmp3, " ")
};
replicate_inst_15_1_2_tsni = function replicate_inst_15_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_3_tsni = function spaces_inst_15_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_3_2_tsni(tmp3, " ")
};
replicate_inst_15_3_2_tsni = function replicate_inst_15_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_4_tsni = function spaces_inst_15_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_4_2_tsni(tmp3, " ")
};
replicate_inst_15_4_2_tsni = function replicate_inst_15_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_5_tsni = function spaces_inst_15_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_5_2_tsni(tmp3, " ")
};
replicate_inst_15_5_2_tsni = function replicate_inst_15_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_6_tsni = function spaces_inst_15_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_6_2_tsni(tmp3, " ")
};
replicate_inst_15_6_2_tsni = function replicate_inst_15_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_7_tsni = function spaces_inst_15_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_7_2_tsni(tmp3, " ")
};
replicate_inst_15_7_2_tsni = function replicate_inst_15_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_8_tsni = function spaces_inst_15_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_8_2_tsni(tmp3, " ")
};
replicate_inst_15_8_2_tsni = function replicate_inst_15_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_16_tsni = function printBoard_inst_16_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_16_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_16_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_16_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_16_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_16_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_16_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_16_tsni(s, tmp23, xs1);
              tmp25 = append_inst_16_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_16_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_16_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_16_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_16_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_16_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_16_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_16_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_16_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_16_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_16_tsni(s, tmp55, xs1);
            tmp57 = append_inst_16_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_16_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_16_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_16_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_16_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_16_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_16_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_16_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_16_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_16_1_tsni = function spaces_inst_16_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_1_2_tsni(tmp3, " ")
};
replicate_inst_16_1_2_tsni = function replicate_inst_16_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_3_tsni = function spaces_inst_16_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_3_2_tsni(tmp3, " ")
};
replicate_inst_16_3_2_tsni = function replicate_inst_16_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_4_tsni = function spaces_inst_16_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_4_2_tsni(tmp3, " ")
};
replicate_inst_16_4_2_tsni = function replicate_inst_16_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_5_tsni = function spaces_inst_16_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_5_2_tsni(tmp3, " ")
};
replicate_inst_16_5_2_tsni = function replicate_inst_16_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_6_tsni = function spaces_inst_16_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_6_2_tsni(tmp3, " ")
};
replicate_inst_16_6_2_tsni = function replicate_inst_16_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_7_tsni = function spaces_inst_16_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_7_2_tsni(tmp3, " ")
};
replicate_inst_16_7_2_tsni = function replicate_inst_16_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_8_tsni = function spaces_inst_16_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_8_2_tsni(tmp3, " ")
};
replicate_inst_16_8_2_tsni = function replicate_inst_16_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_4_tsni = function spaces_inst_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_4_2_tsni(tmp3, " ")
};
replicate_inst_4_2_tsni = function replicate_inst_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_17_tsni = function printBoard_inst_17_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_17_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_17_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_17_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_17_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_17_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_17_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_17_tsni(s, tmp23, xs1);
              tmp25 = append_inst_17_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_17_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_17_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_17_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_17_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_17_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_17_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_17_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_17_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_17_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_17_tsni(s, tmp55, xs1);
            tmp57 = append_inst_17_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_17_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_17_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_17_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_17_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_17_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_17_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_17_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_17_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_17_1_tsni = function spaces_inst_17_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_1_2_tsni(tmp3, " ")
};
replicate_inst_17_1_2_tsni = function replicate_inst_17_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_3_tsni = function spaces_inst_17_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_3_2_tsni(tmp3, " ")
};
replicate_inst_17_3_2_tsni = function replicate_inst_17_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_4_tsni = function spaces_inst_17_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_4_2_tsni(tmp3, " ")
};
replicate_inst_17_4_2_tsni = function replicate_inst_17_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_5_tsni = function spaces_inst_17_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_5_2_tsni(tmp3, " ")
};
replicate_inst_17_5_2_tsni = function replicate_inst_17_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_6_tsni = function spaces_inst_17_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_6_2_tsni(tmp3, " ")
};
replicate_inst_17_6_2_tsni = function replicate_inst_17_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_7_tsni = function spaces_inst_17_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_7_2_tsni(tmp3, " ")
};
replicate_inst_17_7_2_tsni = function replicate_inst_17_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_8_tsni = function spaces_inst_17_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_8_2_tsni(tmp3, " ")
};
replicate_inst_17_8_2_tsni = function replicate_inst_17_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_3_tsni = function spaces_inst_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_3_2_tsni(tmp3, " ")
};
replicate_inst_3_2_tsni = function replicate_inst_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_18_tsni = function printBoard_inst_18_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_18_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_18_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_18_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_18_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_18_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_18_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_18_tsni(s, tmp23, xs1);
              tmp25 = append_inst_18_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_18_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_18_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_18_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_18_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_18_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_18_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_18_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_18_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_18_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_18_tsni(s, tmp55, xs1);
            tmp57 = append_inst_18_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_18_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_18_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_18_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_18_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_18_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_18_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_18_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_18_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_18_1_tsni = function spaces_inst_18_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_1_2_tsni(tmp3, " ")
};
replicate_inst_18_1_2_tsni = function replicate_inst_18_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_3_tsni = function spaces_inst_18_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_3_2_tsni(tmp3, " ")
};
replicate_inst_18_3_2_tsni = function replicate_inst_18_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_4_tsni = function spaces_inst_18_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_4_2_tsni(tmp3, " ")
};
replicate_inst_18_4_2_tsni = function replicate_inst_18_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_5_tsni = function spaces_inst_18_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_5_2_tsni(tmp3, " ")
};
replicate_inst_18_5_2_tsni = function replicate_inst_18_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_6_tsni = function spaces_inst_18_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_6_2_tsni(tmp3, " ")
};
replicate_inst_18_6_2_tsni = function replicate_inst_18_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_7_tsni = function spaces_inst_18_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_7_2_tsni(tmp3, " ")
};
replicate_inst_18_7_2_tsni = function replicate_inst_18_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_8_tsni = function spaces_inst_18_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_8_2_tsni(tmp3, " ")
};
replicate_inst_18_8_2_tsni = function replicate_inst_18_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_19_tsni = function printBoard_inst_19_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_19_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_19_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_19_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_19_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_19_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_19_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_19_tsni(s, tmp23, xs1);
              tmp25 = append_inst_19_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_19_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_19_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_19_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_19_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_19_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_19_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_19_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_19_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_19_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_19_tsni(s, tmp55, xs1);
            tmp57 = append_inst_19_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_19_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_19_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_19_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_19_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_19_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_19_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_19_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_19_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_19_1_tsni = function spaces_inst_19_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_1_2_tsni(tmp3, " ")
};
replicate_inst_19_1_2_tsni = function replicate_inst_19_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_3_tsni = function spaces_inst_19_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_3_2_tsni(tmp3, " ")
};
replicate_inst_19_3_2_tsni = function replicate_inst_19_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_4_tsni = function spaces_inst_19_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_4_2_tsni(tmp3, " ")
};
replicate_inst_19_4_2_tsni = function replicate_inst_19_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_5_tsni = function spaces_inst_19_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_5_2_tsni(tmp3, " ")
};
replicate_inst_19_5_2_tsni = function replicate_inst_19_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_6_tsni = function spaces_inst_19_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_6_2_tsni(tmp3, " ")
};
replicate_inst_19_6_2_tsni = function replicate_inst_19_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_7_tsni = function spaces_inst_19_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_7_2_tsni(tmp3, " ")
};
replicate_inst_19_7_2_tsni = function replicate_inst_19_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_8_tsni = function spaces_inst_19_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_8_2_tsni(tmp3, " ")
};
replicate_inst_19_8_2_tsni = function replicate_inst_19_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_20_tsni = function printBoard_inst_20_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_20_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_20_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_20_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_20_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_20_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_20_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_20_tsni(s, tmp23, xs1);
              tmp25 = append_inst_20_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_20_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_20_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_20_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_20_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_20_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_20_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_20_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_20_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_20_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_20_tsni(s, tmp55, xs1);
            tmp57 = append_inst_20_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_20_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_20_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_20_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_20_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_20_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_20_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_20_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_20_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_20_1_tsni = function spaces_inst_20_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_1_2_tsni(tmp3, " ")
};
replicate_inst_20_1_2_tsni = function replicate_inst_20_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_3_tsni = function spaces_inst_20_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_3_2_tsni(tmp3, " ")
};
replicate_inst_20_3_2_tsni = function replicate_inst_20_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_4_tsni = function spaces_inst_20_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_4_2_tsni(tmp3, " ")
};
replicate_inst_20_4_2_tsni = function replicate_inst_20_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_5_tsni = function spaces_inst_20_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_5_2_tsni(tmp3, " ")
};
replicate_inst_20_5_2_tsni = function replicate_inst_20_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_6_tsni = function spaces_inst_20_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_6_2_tsni(tmp3, " ")
};
replicate_inst_20_6_2_tsni = function replicate_inst_20_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_7_tsni = function spaces_inst_20_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_7_2_tsni(tmp3, " ")
};
replicate_inst_20_7_2_tsni = function replicate_inst_20_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_8_tsni = function spaces_inst_20_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_8_2_tsni(tmp3, " ")
};
replicate_inst_20_8_2_tsni = function replicate_inst_20_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_1_tsni = function spaces_inst_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_1_2_tsni(tmp3, " ")
};
replicate_inst_1_2_tsni = function replicate_inst_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
possibleMoves_inst_21_tsni = function possibleMoves_inst_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_22_tsni = function possibleMoves_inst_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x + 2;
    tmp10 = y + 1;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return NofibPrelude.Nil
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x + 2;
    tmp10 = y - 1;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x - 2;
    tmp10 = y + 1;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x - 2;
    tmp10 = y - 1;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x + 1;
    tmp10 = y + 2;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x - 1;
    tmp10 = y + 2;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x + 1;
    tmp10 = y - 2;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = (x, y) => {
    let tmp9, tmp10, arr;
    tmp9 = x - 1;
    tmp10 = y - 2;
    arr = [
      tmp9,
      tmp10
    ];
    return arr
  };
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_23_tsni = function allDescend_inst_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_23_22_tsni = function possibleMoves_inst_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return NofibPrelude.Nil
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
descAndNo_inst_24_tsni = function descAndNo_inst_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_24_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_24_25_tsni = function possibleMoves_inst_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_24_23_tsni = function allDescend_inst_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return moveKnight_inst_24_23_27_tsni(board, b)
  });
  return map_inst_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_24_23_22_tsni = function possibleMoves_inst_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_24_23_26_tsni = function map_inst_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
moveKnight_inst_24_23_27_tsni = function moveKnight_inst_24_23_27_tsni(board, dir) {
  let tmp, tmp1;
  tmp = knights.lastPiece(board);
  tmp1 = knights.move(dir, tmp);
  return addPiece_inst_24_23_27_28_tsni(tmp1, board)
};
addPiece_inst_24_23_27_28_tsni = function addPiece_inst_24_23_27_28_tsni(t, b) {
  let param0, param1, param2, param3, s, n, f, ts, tmp, tmp1, _deforest_Board_a, _deforest_Board_b, _deforest_Board_c, _deforest_Board_d, _deforest_Cons_head, _deforest_Cons_tail;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    s = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = n + 1;
    _deforest_Cons_head = t;
    _deforest_Cons_tail = ts;
    tmp1 = () => {
      let param01, param11, a, t1, a1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      a1 = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param01;
        t1 = param11;
        tmp2 = myInit_inst_24_65_66_tsni(t1);
        return NofibPrelude.Cons(a, tmp2)
      }
    };
    _deforest_Board_a = s;
    _deforest_Board_b = tmp;
    _deforest_Board_c = f;
    _deforest_Board_d = tmp1;
    return () => {
      let param01, param11, param21, param31, s1, n1, f1, ts1, ts_, tmp2, tmp3, tmp4, lambda;
      param01 = _deforest_Board_a;
      param11 = _deforest_Board_b;
      param21 = _deforest_Board_c;
      param31 = _deforest_Board_d;
      s1 = param01;
      n1 = param11;
      f1 = param21;
      ts1 = param31;
      tmp2 = myInit_inst_24_65_66_tsni(ts1);
      ts_ = tmp2;
      tmp3 = n1 - 1;
      lambda = (undefined, function () {
        return knights.myLast(ts_)
      });
      tmp4 = NofibPrelude.lazy(lambda);
      return runtime.safeCall(knights.Board(s1, tmp3, tmp4, ts_))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
descAndNo_inst_29_tsni = function descAndNo_inst_29_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_29_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_29_25_tsni = function possibleMoves_inst_29_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_29_23_tsni = function allDescend_inst_29_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_29_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_29_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_29_23_22_tsni = function possibleMoves_inst_29_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_29_23_26_tsni = function map_inst_29_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_30_tsni = function singleDescend_inst_30_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    return runtime.safeCall(scrut(lscomp))
  };
  tmp = descAndNo_inst_30_24_tsni(board);
  return lscomp(tmp)
};
descAndNo_inst_30_24_tsni = function descAndNo_inst_30_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_30_24_23_tsni(board);
  return lscomp(tmp)
};
allDescend_inst_30_24_23_tsni = function allDescend_inst_30_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_30_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_30_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_30_24_23_22_tsni = function possibleMoves_inst_30_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return (lscomp3) => {
            return NofibPrelude.Nil
          }
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_30_24_25_tsni = function possibleMoves_inst_30_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_30_24_23_26_tsni = function map_inst_30_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
deadEnd_inst_31_tsni = function deadEnd_inst_31_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_31_21_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_31_21_tsni = function possibleMoves_inst_31_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_31_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
printBoard_inst_32_tsni = function printBoard_inst_32_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_32_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_32_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_32_52_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_32_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_32_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_32_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_32_tsni(s, tmp23, xs1);
              tmp25 = append_inst_32_50_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_32_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_32_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_32_53_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_32_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_32_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_32_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_32_54_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_32_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_32_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_32_tsni(s, tmp55, xs1);
            tmp57 = append_inst_32_42_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_32_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_32_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_32_56_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_32_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_32_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_32_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_32_55_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_32_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_32_1_tsni = function spaces_inst_32_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_1_2_tsni(tmp3, " ")
};
replicate_inst_32_1_2_tsni = function replicate_inst_32_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_3_tsni = function spaces_inst_32_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_3_2_tsni(tmp3, " ")
};
replicate_inst_32_3_2_tsni = function replicate_inst_32_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_50_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_4_tsni = function spaces_inst_32_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_4_2_tsni(tmp3, " ")
};
replicate_inst_32_4_2_tsni = function replicate_inst_32_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_53_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_5_tsni = function spaces_inst_32_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_5_2_tsni(tmp3, " ")
};
replicate_inst_32_5_2_tsni = function replicate_inst_32_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_6_tsni = function spaces_inst_32_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_6_2_tsni(tmp3, " ")
};
replicate_inst_32_6_2_tsni = function replicate_inst_32_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_42_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_7_tsni = function spaces_inst_32_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_7_2_tsni(tmp3, " ")
};
replicate_inst_32_7_2_tsni = function replicate_inst_32_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_56_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_32_8_tsni = function spaces_inst_32_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_32_8_2_tsni(tmp3, " ")
};
replicate_inst_32_8_2_tsni = function replicate_inst_32_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_32_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_32_55_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
descendents_inst_33_tsni = function descendents_inst_33_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_33_31_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp4 = singleDescend_inst_33_30_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_33_29_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda1 = (undefined, function () {
              let tmp10, lambda3;
              lambda3 = (undefined, function () {
                return NofibPrelude.LzNil
              });
              tmp10 = NofibPrelude.lazy(lambda3);
              return NofibPrelude.LzCons(h, tmp10)
            });
            tmp9 = NofibPrelude.lazy(lambda1);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        lambda2 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        tmp8 = NofibPrelude.lazy(lambda2);
      }
    }
    res = tmp8;
    return res
  }
};
deadEnd_inst_33_31_tsni = function deadEnd_inst_33_31_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_33_31_21_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_33_31_21_tsni = function possibleMoves_inst_33_31_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_33_30_tsni = function singleDescend_inst_33_30_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    return runtime.safeCall(scrut(lscomp))
  };
  tmp = descAndNo_inst_33_30_24_tsni(board);
  return lscomp(tmp)
};
descAndNo_inst_33_30_24_tsni = function descAndNo_inst_33_30_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_33_30_24_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_33_30_24_25_tsni = function possibleMoves_inst_33_30_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_33_30_24_23_tsni = function allDescend_inst_33_30_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_33_30_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_33_30_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_33_30_24_23_22_tsni = function possibleMoves_inst_33_30_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return (lscomp3) => {
            return NofibPrelude.Nil
          }
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_33_30_24_23_26_tsni = function map_inst_33_30_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
descAndNo_inst_33_29_tsni = function descAndNo_inst_33_29_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_33_29_23_tsni(board);
  return lscomp(tmp)
};
allDescend_inst_33_29_23_tsni = function allDescend_inst_33_29_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_33_29_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_33_29_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_33_29_23_22_tsni = function possibleMoves_inst_33_29_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_33_29_25_tsni = function possibleMoves_inst_33_29_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_33_29_23_26_tsni = function map_inst_33_29_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_34_tsni = function depthSearch_inst_34_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    lambda = (undefined, function () {
      return (n) => {
        return NofibPrelude.Nil
      }
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      lambda1 = (undefined, function () {
        let tmp6, tmp7, tmp8, _deforest_LzCons_head, _deforest_LzCons_tail;
        tmp6 = knights.inquireFront_lz(q);
        tmp7 = knights.removeFront_lz(q);
        tmp8 = depthSearch_inst_34_tsni(tmp7, growFn, finFn);
        _deforest_LzCons_head = tmp6;
        _deforest_LzCons_tail = tmp8;
        return (n) => {
          let param0, param1, h, t, tmp9, tmp10;
          param0 = _deforest_LzCons_head;
          param1 = _deforest_LzCons_tail;
          h = param0;
          t = param1;
          tmp9 = n - 1;
          tmp10 = take_lz_inst_57_tsni(tmp9, t);
          return NofibPrelude.Cons(h, tmp10)
        }
      });
      tmp1 = lambda1;
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_34_tsni(tmp5, growFn, finFn)
    }
  }
};
grow_inst_35_tsni = function grow_inst_35_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_35_33_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_35_33_tsni = function descendents_inst_35_33_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_35_33_31_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp4 = singleDescend_inst_35_33_30_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_35_33_29_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda1 = (undefined, function () {
              let tmp10, lambda3;
              lambda3 = (undefined, function () {
                return NofibPrelude.LzNil
              });
              tmp10 = NofibPrelude.lazy(lambda3);
              return NofibPrelude.LzCons(h, tmp10)
            });
            tmp9 = NofibPrelude.lazy(lambda1);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        lambda2 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        tmp8 = NofibPrelude.lazy(lambda2);
      }
    }
    res = tmp8;
    return res
  }
};
descAndNo_inst_35_33_29_tsni = function descAndNo_inst_35_33_29_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_35_33_29_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_35_33_29_25_tsni = function possibleMoves_inst_35_33_29_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_35_33_29_23_tsni = function allDescend_inst_35_33_29_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_35_33_29_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_35_33_29_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_35_33_29_23_22_tsni = function possibleMoves_inst_35_33_29_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_35_33_29_23_26_tsni = function map_inst_35_33_29_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_35_33_30_tsni = function singleDescend_inst_35_33_30_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    return runtime.safeCall(scrut(lscomp))
  };
  tmp = descAndNo_inst_35_33_30_24_tsni(board);
  return lscomp(tmp)
};
descAndNo_inst_35_33_30_24_tsni = function descAndNo_inst_35_33_30_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_35_33_30_24_23_tsni(board);
  return lscomp(tmp)
};
allDescend_inst_35_33_30_24_23_tsni = function allDescend_inst_35_33_30_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_35_33_30_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_35_33_30_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_35_33_30_24_23_22_tsni = function possibleMoves_inst_35_33_30_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return (lscomp3) => {
            return NofibPrelude.Nil
          }
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_35_33_30_24_25_tsni = function possibleMoves_inst_35_33_30_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_35_33_30_24_23_26_tsni = function map_inst_35_33_30_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
deadEnd_inst_35_33_31_tsni = function deadEnd_inst_35_33_31_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_35_33_31_21_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_35_33_31_21_tsni = function possibleMoves_inst_35_33_31_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
root_inst_36_tsni = function root_inst_36_tsni(sze) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, sze))
  };
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_36_38_tsni(1, sze);
  tmp4 = lscomp1(tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  lambda = (undefined, function () {
    return NofibPrelude.LzNil
  });
  tmp9 = NofibPrelude.lazy(lambda);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
enumFromTo_inst_36_37_tsni = function enumFromTo_inst_36_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_36_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, tmp2, lambda;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      lambda = (undefined, function () {
        let arr, tmp3;
        arr = [
          h1,
          h2
        ];
        tmp3 = lscomp2(t2);
        return NofibPrelude.LzCons(arr, tmp3)
      });
      tmp2 = lambda;
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_36_38_tsni = function enumFromTo_inst_36_38_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_36_38_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, sze) => {
      let lscomp2, param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, h1, t1))
      };
      tmp2 = enumFromTo_inst_36_37_tsni(1, sze);
      return lscomp2(tmp2)
    }
  } else {
    return (lscomp1, sze) => {
      let lambda;
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    }
  }
};
printTour_inst_39_tsni = function printTour_inst_39_tsni(ss) {
  let pp, strToInt, scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2, lambda;
  strToInt = function strToInt(y, xs) {
    let param02, param12, x, xs1, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return y
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      x = param02;
      xs1 = param12;
      tmp3 = 10 * y;
      tmp4 = runtime.safeCall(x.codePointAt(0));
      tmp5 = tmp4 - 48;
      tmp6 = tmp3 + tmp5;
      return strToInt(tmp6, xs1)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  pp = function pp(xs) {
    return runtime.safeCall(xs(pp))
  };
  lambda = (undefined, function (x) {
    return strToInt(0, x)
  });
  scrut = NofibPrelude.map(lambda, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_39_36_tsni(size);
        tmp1 = depthSearch_inst_39_34_tsni(tmp, grow_inst_39_35_tsni, knights.isFinished);
        tmp2 = take_lz_inst_39_57_tsni(number, tmp1);
        return pp(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
showChessSet_inst_39_40_tsni = function showChessSet_inst_39_40_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_39_40_32_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_39_40_32_tsni = function printBoard_inst_39_40_32_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_39_40_32_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_39_40_32_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_39_40_32_52_tsni(tmp3, tmp5);
        _deforest_Cons_head4 = "*";
        _deforest_Cons_tail4 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_39_40_32_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_39_40_32_51_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_39_40_32_tsni(s, tmp15, xs1);
          tmp17 = append_inst_39_40_32_46_tsni(tmp14, tmp16);
          return append_inst_39_40_32_45_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_39_40_32_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_39_40_32_tsni(s, tmp23, xs1);
              tmp25 = append_inst_39_40_32_50_tsni(tmp22, tmp24);
              return append_inst_39_40_32_48_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_39_40_32_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_39_40_32_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_39_40_32_53_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_39_40_32_tsni(s, tmp35, tmp36);
                  return append_inst_39_40_32_49_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_39_40_32_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_39_40_32_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_39_40_32_54_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_39_40_32_tsni(s, tmp47, tmp48);
                return append_inst_39_40_32_47_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_39_40_32_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_39_40_32_tsni(s, tmp55, xs1);
            tmp57 = append_inst_39_40_32_42_tsni(tmp54, tmp56);
            return append_inst_39_40_32_43_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_39_40_32_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_39_40_32_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_39_40_32_56_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_39_40_32_tsni(s, tmp67, tmp68);
                return append_inst_39_40_32_41_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_39_40_32_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_39_40_32_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_39_40_32_55_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_39_60_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_39_40_32_tsni(s, tmp79, tmp80);
              return append_inst_39_40_32_44_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_39_40_32_1_tsni = function spaces_inst_39_40_32_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_1_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_1_2_tsni = function replicate_inst_39_40_32_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_52_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_3_tsni = function spaces_inst_39_40_32_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_3_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_3_2_tsni = function replicate_inst_39_40_32_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_50_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_4_tsni = function spaces_inst_39_40_32_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_4_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_4_2_tsni = function replicate_inst_39_40_32_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_53_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_5_tsni = function spaces_inst_39_40_32_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_5_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_5_2_tsni = function replicate_inst_39_40_32_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_54_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_6_tsni = function spaces_inst_39_40_32_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_6_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_6_2_tsni = function replicate_inst_39_40_32_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_42_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_7_tsni = function spaces_inst_39_40_32_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_7_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_7_2_tsni = function replicate_inst_39_40_32_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_56_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_39_40_32_8_tsni = function spaces_inst_39_40_32_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_39_40_32_8_2_tsni(tmp3, " ")
};
replicate_inst_39_40_32_8_2_tsni = function replicate_inst_39_40_32_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_32_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_32_55_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_39_40_32_41_tsni = function append_inst_39_40_32_41_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_41_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_42_tsni = function append_inst_39_40_32_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_43_tsni = function append_inst_39_40_32_43_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_43_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_44_tsni = function append_inst_39_40_32_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_45_tsni = function append_inst_39_40_32_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_46_tsni = function append_inst_39_40_32_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_47_tsni = function append_inst_39_40_32_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_48_tsni = function append_inst_39_40_32_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_49_tsni = function append_inst_39_40_32_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_50_tsni = function append_inst_39_40_32_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_51_tsni = function append_inst_39_40_32_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_32_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_32_52_tsni = function append_inst_39_40_32_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_53_tsni = function append_inst_39_40_32_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_54_tsni = function append_inst_39_40_32_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_55_tsni = function append_inst_39_40_32_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_32_56_tsni = function append_inst_39_40_32_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
root_inst_39_36_tsni = function root_inst_39_36_tsni(sze) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, sze))
  };
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_39_36_38_tsni(1, sze);
  tmp4 = lscomp1(tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  lambda = (undefined, function () {
    return NofibPrelude.LzNil
  });
  tmp9 = NofibPrelude.lazy(lambda);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
enumFromTo_inst_39_36_37_tsni = function enumFromTo_inst_39_36_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_39_36_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, tmp2, lambda;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      lambda = (undefined, function () {
        let arr, tmp3;
        arr = [
          h1,
          h2
        ];
        tmp3 = lscomp2(t2);
        return NofibPrelude.LzCons(arr, tmp3)
      });
      tmp2 = lambda;
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_39_36_38_tsni = function enumFromTo_inst_39_36_38_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_39_36_38_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, sze) => {
      let lscomp2, param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, h1, t1))
      };
      tmp2 = enumFromTo_inst_39_36_37_tsni(1, sze);
      return lscomp2(tmp2)
    }
  } else {
    return (lscomp1, sze) => {
      let lambda;
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    }
  }
};
grow_inst_39_35_tsni = function grow_inst_39_35_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_39_35_33_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_39_35_33_tsni = function descendents_inst_39_35_33_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_39_35_33_31_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp4 = singleDescend_inst_39_35_33_30_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_39_35_33_29_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda1 = (undefined, function () {
              let tmp10, lambda3;
              lambda3 = (undefined, function () {
                return NofibPrelude.LzNil
              });
              tmp10 = NofibPrelude.lazy(lambda3);
              return NofibPrelude.LzCons(h, tmp10)
            });
            tmp9 = NofibPrelude.lazy(lambda1);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        lambda2 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        tmp8 = NofibPrelude.lazy(lambda2);
      }
    }
    res = tmp8;
    return res
  }
};
deadEnd_inst_39_35_33_31_tsni = function deadEnd_inst_39_35_33_31_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_39_35_33_31_21_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_39_35_33_31_21_tsni = function possibleMoves_inst_39_35_33_31_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_39_35_33_30_tsni = function singleDescend_inst_39_35_33_30_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    return runtime.safeCall(scrut(lscomp))
  };
  tmp = descAndNo_inst_39_35_33_30_24_tsni(board);
  return lscomp(tmp)
};
descAndNo_inst_39_35_33_30_24_tsni = function descAndNo_inst_39_35_33_30_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_39_35_33_30_24_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_39_35_33_30_24_25_tsni = function possibleMoves_inst_39_35_33_30_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_39_35_33_30_24_23_tsni = function allDescend_inst_39_35_33_30_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_39_35_33_30_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_39_35_33_30_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_39_35_33_30_24_23_22_tsni = function possibleMoves_inst_39_35_33_30_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return (lscomp3) => {
            return NofibPrelude.Nil
          }
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_39_35_33_30_24_23_26_tsni = function map_inst_39_35_33_30_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
descAndNo_inst_39_35_33_29_tsni = function descAndNo_inst_39_35_33_29_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_39_35_33_29_23_tsni(board);
  return lscomp(tmp)
};
allDescend_inst_39_35_33_29_23_tsni = function allDescend_inst_39_35_33_29_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_39_35_33_29_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_39_35_33_29_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_39_35_33_29_23_22_tsni = function possibleMoves_inst_39_35_33_29_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_39_35_33_29_25_tsni = function possibleMoves_inst_39_35_33_29_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_39_35_33_29_23_26_tsni = function map_inst_39_35_33_29_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_39_34_tsni = function depthSearch_inst_39_34_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    lambda = (undefined, function () {
      return (n) => {
        return (pp) => {
          return match_xs_arm_Nil_inst_39_tsni(pp)
        }
      }
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      lambda1 = (undefined, function () {
        let tmp6, tmp7, tmp8, _deforest_LzCons_head, _deforest_LzCons_tail;
        tmp6 = knights.inquireFront_lz(q);
        tmp7 = knights.removeFront_lz(q);
        tmp8 = depthSearch_inst_39_34_tsni(tmp7, growFn, finFn);
        _deforest_LzCons_head = tmp6;
        _deforest_LzCons_tail = tmp8;
        return (n) => {
          let param0, param1, h, t, tmp9, tmp10, _deforest_Cons_head, _deforest_Cons_tail;
          param0 = _deforest_LzCons_head;
          param1 = _deforest_LzCons_tail;
          h = param0;
          t = param1;
          tmp9 = n - 1;
          tmp10 = take_lz_inst_39_57_tsni(tmp9, t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp10;
          return (pp) => {
            let param01, param11, first1, first0, x, y, xs, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (globalThis.Array.isArray(param01) && param01.length === 2) {
              first0 = param01[0];
              first1 = param01[1];
              x = first0;
              y = first1;
              xs = param11;
              tmp11 = NofibPrelude.nofibStringToList("\nKnights tour with ");
              tmp12 = NofibPrelude.stringOfInt(x);
              tmp13 = NofibPrelude.nofibStringToList(tmp12);
              tmp14 = NofibPrelude.nofibStringToList(" backtracking moves\n");
              tmp15 = showChessSet_inst_39_40_tsni(y);
              tmp16 = pp(xs);
              tmp17 = append_inst_39_60_tsni(tmp15, tmp16);
              tmp18 = NofibPrelude.append(tmp14, tmp17);
              tmp19 = NofibPrelude.append(tmp13, tmp18);
              return NofibPrelude.append(tmp11, tmp19)
            } else {
              throw new globalThis.Error("match error");
            }
          }
        }
      });
      tmp1 = lambda1;
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_39_34_tsni(tmp5, growFn, finFn)
    }
  }
};
take_lz_inst_39_57_tsni = function take_lz_inst_39_57_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return (pp) => {
      return match_xs_arm_Nil_inst_39_tsni(pp)
    }
  }
};
testKnights_nofib_inst_58_tsni = function testKnights_nofib_inst_58_tsni(ss) {
  let argsOk, all_digits, usageString, scrut;
  all_digits = function all_digits(s) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let tmp;
      tmp = knights.myIsDigit(a);
      return tmp && b
    });
    return NofibPrelude.foldr(lambda, true, s)
  };
  argsOk = function argsOk(ss1) {
    let tmp, tmp1, tmp2, lambda;
    tmp = NofibPrelude.listLen(ss1);
    tmp1 = tmp === 2;
    lambda = (undefined, function (a, b) {
      let tmp3;
      tmp3 = all_digits(a);
      return tmp3 && b
    });
    tmp2 = NofibPrelude.foldr(lambda, true, ss1);
    return tmp1 && tmp2
  };
  usageString = "\nUsage: knights <board size> <no solutions> \n";
  scrut = argsOk(ss);
  if (scrut === true) {
    return printTour_inst_58_39_tsni(ss)
  } else {
    throw globalThis.Error(usageString);
  }
};
printTour_inst_58_39_tsni = function printTour_inst_58_39_tsni(ss) {
  let pp, strToInt, scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2, lambda;
  strToInt = function strToInt(y, xs) {
    let param02, param12, x, xs1, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return y
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      x = param02;
      xs1 = param12;
      tmp3 = 10 * y;
      tmp4 = runtime.safeCall(x.codePointAt(0));
      tmp5 = tmp4 - 48;
      tmp6 = tmp3 + tmp5;
      return strToInt(tmp6, xs1)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  pp = function pp(xs) {
    return runtime.safeCall(xs(pp))
  };
  lambda = (undefined, function (x) {
    return strToInt(0, x)
  });
  scrut = NofibPrelude.map(lambda, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_58_39_36_tsni(size);
        tmp1 = depthSearch_inst_58_39_34_tsni(tmp, grow_inst_58_39_35_tsni, knights.isFinished);
        tmp2 = take_lz_inst_58_39_57_tsni(number, tmp1);
        return pp(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
depthSearch_inst_58_39_34_tsni = function depthSearch_inst_58_39_34_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    lambda = (undefined, function () {
      return (n) => {
        return (pp) => {
          return match_xs_arm_Nil_inst_58_39_tsni(pp)
        }
      }
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      lambda1 = (undefined, function () {
        let tmp6, tmp7, tmp8, _deforest_LzCons_head, _deforest_LzCons_tail;
        tmp6 = knights.inquireFront_lz(q);
        tmp7 = knights.removeFront_lz(q);
        tmp8 = depthSearch_inst_58_39_34_tsni(tmp7, growFn, finFn);
        _deforest_LzCons_head = tmp6;
        _deforest_LzCons_tail = tmp8;
        return (n) => {
          let param0, param1, h, t, tmp9, tmp10, _deforest_Cons_head, _deforest_Cons_tail;
          param0 = _deforest_LzCons_head;
          param1 = _deforest_LzCons_tail;
          h = param0;
          t = param1;
          tmp9 = n - 1;
          tmp10 = take_lz_inst_58_39_57_tsni(tmp9, t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp10;
          return (pp) => {
            let param01, param11, first1, first0, x, y, xs, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (globalThis.Array.isArray(param01) && param01.length === 2) {
              first0 = param01[0];
              first1 = param01[1];
              x = first0;
              y = first1;
              xs = param11;
              tmp11 = NofibPrelude.nofibStringToList("\nKnights tour with ");
              tmp12 = NofibPrelude.stringOfInt(x);
              tmp13 = NofibPrelude.nofibStringToList(tmp12);
              tmp14 = NofibPrelude.nofibStringToList(" backtracking moves\n");
              tmp15 = showChessSet_inst_58_39_40_tsni(y);
              tmp16 = pp(xs);
              tmp17 = append_inst_58_39_60_tsni(tmp15, tmp16);
              tmp18 = append_inst_58_39_62_tsni(tmp14, tmp17);
              tmp19 = append_inst_58_39_61_tsni(tmp13, tmp18);
              return append_inst_58_39_59_tsni(tmp11, tmp19)
            } else {
              throw new globalThis.Error("match error");
            }
          }
        }
      });
      tmp1 = lambda1;
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_58_39_34_tsni(tmp5, growFn, finFn)
    }
  }
};
grow_inst_58_39_35_tsni = function grow_inst_58_39_35_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_58_39_35_33_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_58_39_35_33_tsni = function descendents_inst_58_39_35_33_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_58_39_35_33_31_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    return NofibPrelude.lazy(lambda)
  } else {
    tmp4 = singleDescend_inst_58_39_35_33_30_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_58_39_35_33_29_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda1 = (undefined, function () {
              let tmp10, lambda3;
              lambda3 = (undefined, function () {
                return NofibPrelude.LzNil
              });
              tmp10 = NofibPrelude.lazy(lambda3);
              return NofibPrelude.LzCons(h, tmp10)
            });
            tmp9 = NofibPrelude.lazy(lambda1);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        lambda2 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        tmp8 = NofibPrelude.lazy(lambda2);
      }
    }
    res = tmp8;
    return res
  }
};
descAndNo_inst_58_39_35_33_29_tsni = function descAndNo_inst_58_39_35_33_29_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_58_39_35_33_29_23_tsni(board);
  return lscomp(tmp)
};
possibleMoves_inst_58_39_35_33_29_25_tsni = function possibleMoves_inst_58_39_35_33_29_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
allDescend_inst_58_39_35_33_29_23_tsni = function allDescend_inst_58_39_35_33_29_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_58_39_35_33_29_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_58_39_35_33_29_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_58_39_35_33_29_23_22_tsni = function possibleMoves_inst_58_39_35_33_29_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_29_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_58_39_35_33_29_23_26_tsni = function map_inst_58_39_35_33_29_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_58_39_35_33_30_tsni = function singleDescend_inst_58_39_35_33_30_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    return runtime.safeCall(scrut(lscomp))
  };
  tmp = descAndNo_inst_58_39_35_33_30_24_tsni(board);
  return lscomp(tmp)
};
descAndNo_inst_58_39_35_33_30_24_tsni = function descAndNo_inst_58_39_35_33_30_24_tsni(board) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  tmp = allDescend_inst_58_39_35_33_30_24_23_tsni(board);
  return lscomp(tmp)
};
allDescend_inst_58_39_35_33_30_24_23_tsni = function allDescend_inst_58_39_35_33_30_24_23_tsni(board) {
  let tmp, lambda;
  tmp = possibleMoves_inst_58_39_35_33_30_24_23_22_tsni(board);
  lambda = (undefined, function (b) {
    return knights.moveKnight(board, b)
  });
  return map_inst_58_39_35_33_30_24_23_26_tsni(lambda, tmp)
};
possibleMoves_inst_58_39_35_33_30_24_23_22_tsni = function possibleMoves_inst_58_39_35_33_30_24_23_22_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return (f) => {
      return (lscomp2) => {
        let lambda;
        lambda = (undefined, function () {
          return (lscomp3) => {
            return NofibPrelude.Nil
          }
        });
        return NofibPrelude.lazy(lambda)
      }
    }
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_23_22_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_58_39_35_33_30_24_25_tsni = function possibleMoves_inst_58_39_35_33_30_24_25_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_30_24_25_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
map_inst_58_39_35_33_30_24_23_26_tsni = function map_inst_58_39_35_33_30_24_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
deadEnd_inst_58_39_35_33_31_tsni = function deadEnd_inst_58_39_35_33_31_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_58_39_35_33_31_21_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_58_39_35_33_31_21_tsni = function possibleMoves_inst_58_39_35_33_31_21_tsni(board) {
  let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, board))
  };
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (lscomp1, board1) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (lscomp1, board1) => {
    return match_ls_arm_Cons_inst_58_39_35_33_31_21_tsni(lscomp1, board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp(tmp7);
  res = tmp8;
  return res
};
root_inst_58_39_36_tsni = function root_inst_58_39_36_tsni(sze) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, sze))
  };
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_58_39_36_38_tsni(1, sze);
  tmp4 = lscomp1(tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  lambda = (undefined, function () {
    return NofibPrelude.LzNil
  });
  tmp9 = NofibPrelude.lazy(lambda);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
enumFromTo_inst_58_39_36_37_tsni = function enumFromTo_inst_58_39_36_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_39_36_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, tmp2, lambda;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      lambda = (undefined, function () {
        let arr, tmp3;
        arr = [
          h1,
          h2
        ];
        tmp3 = lscomp2(t2);
        return NofibPrelude.LzCons(arr, tmp3)
      });
      tmp2 = lambda;
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_58_39_36_38_tsni = function enumFromTo_inst_58_39_36_38_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_39_36_38_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, sze) => {
      let lscomp2, param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, h1, t1))
      };
      tmp2 = enumFromTo_inst_58_39_36_37_tsni(1, sze);
      return lscomp2(tmp2)
    }
  } else {
    return (lscomp1, sze) => {
      let lambda;
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    }
  }
};
showChessSet_inst_58_39_40_tsni = function showChessSet_inst_58_39_40_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_58_39_40_32_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_58_39_40_32_tsni = function printBoard_inst_58_39_40_32_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_58_39_40_32_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_58_39_40_32_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_58_39_40_32_52_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_58_39_40_32_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_58_39_40_32_51_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_58_39_40_32_tsni(s, tmp15, xs1);
          tmp17 = append_inst_58_39_40_32_46_tsni(tmp14, tmp16);
          return append_inst_58_39_40_32_45_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_58_39_40_32_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_58_39_40_32_tsni(s, tmp23, xs1);
              tmp25 = append_inst_58_39_40_32_50_tsni(tmp22, tmp24);
              return append_inst_58_39_40_32_48_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_58_39_40_32_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_58_39_40_32_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_58_39_40_32_53_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_58_39_40_32_tsni(s, tmp35, tmp36);
                  return append_inst_58_39_40_32_49_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_58_39_40_32_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_58_39_40_32_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_58_39_40_32_54_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_58_39_40_32_tsni(s, tmp47, tmp48);
                return append_inst_58_39_40_32_47_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_58_39_40_32_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_58_39_40_32_tsni(s, tmp55, xs1);
            tmp57 = append_inst_58_39_40_32_42_tsni(tmp54, tmp56);
            return append_inst_58_39_40_32_43_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_58_39_40_32_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_58_39_40_32_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_58_39_40_32_56_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_58_39_40_32_tsni(s, tmp67, tmp68);
                return append_inst_58_39_40_32_41_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_58_39_40_32_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_58_39_40_32_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_58_39_40_32_55_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_58_39_60_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_58_39_40_32_tsni(s, tmp79, tmp80);
              return append_inst_58_39_40_32_44_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_58_39_40_32_8_tsni = function spaces_inst_58_39_40_32_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_8_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_8_2_tsni = function replicate_inst_58_39_40_32_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_55_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_7_tsni = function spaces_inst_58_39_40_32_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_7_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_7_2_tsni = function replicate_inst_58_39_40_32_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_56_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_6_tsni = function spaces_inst_58_39_40_32_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_6_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_6_2_tsni = function replicate_inst_58_39_40_32_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_42_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_5_tsni = function spaces_inst_58_39_40_32_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_5_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_5_2_tsni = function replicate_inst_58_39_40_32_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_54_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_4_tsni = function spaces_inst_58_39_40_32_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_4_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_4_2_tsni = function replicate_inst_58_39_40_32_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_53_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_3_tsni = function spaces_inst_58_39_40_32_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_3_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_3_2_tsni = function replicate_inst_58_39_40_32_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_50_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_58_39_40_32_1_tsni = function spaces_inst_58_39_40_32_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_58_39_40_32_1_2_tsni(tmp3, " ")
};
replicate_inst_58_39_40_32_1_2_tsni = function replicate_inst_58_39_40_32_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_58_39_40_32_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_58_39_40_32_52_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_58_39_40_32_51_tsni = function append_inst_58_39_40_32_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_44_tsni = function append_inst_58_39_40_32_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_46_tsni = function append_inst_58_39_40_32_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_41_tsni = function append_inst_58_39_40_32_41_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_41_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_45_tsni = function append_inst_58_39_40_32_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_43_tsni = function append_inst_58_39_40_32_43_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_43_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_50_tsni = function append_inst_58_39_40_32_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_42_tsni = function append_inst_58_39_40_32_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_48_tsni = function append_inst_58_39_40_32_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_49_tsni = function append_inst_58_39_40_32_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_47_tsni = function append_inst_58_39_40_32_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_40_32_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_58_39_60_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_40_32_53_tsni = function append_inst_58_39_40_32_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_54_tsni = function append_inst_58_39_40_32_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_56_tsni = function append_inst_58_39_40_32_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_52_tsni = function append_inst_58_39_40_32_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_40_32_55_tsni = function append_inst_58_39_40_32_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_58_39_57_tsni = function take_lz_inst_58_39_57_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return (pp) => {
      return match_xs_arm_Nil_inst_58_39_tsni(pp)
    }
  }
};
append_inst_58_39_59_tsni = function append_inst_58_39_59_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_59_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_67_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_60_tsni = function append_inst_58_39_60_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_39_61_tsni = function append_inst_58_39_61_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_61_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_67_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_39_62_tsni = function append_inst_58_39_62_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_39_62_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_67_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_52_tsni = function append_inst_0_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_50_tsni = function append_inst_0_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_53_tsni = function append_inst_0_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_54_tsni = function append_inst_0_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_42_tsni = function append_inst_0_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_56_tsni = function append_inst_0_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_55_tsni = function append_inst_0_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_52_tsni = function append_inst_9_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_50_tsni = function append_inst_9_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_53_tsni = function append_inst_9_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_54_tsni = function append_inst_9_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_42_tsni = function append_inst_9_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_56_tsni = function append_inst_9_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_55_tsni = function append_inst_9_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_55_tsni = function append_inst_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_52_tsni = function append_inst_10_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_50_tsni = function append_inst_10_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_53_tsni = function append_inst_10_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_54_tsni = function append_inst_10_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_42_tsni = function append_inst_10_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_56_tsni = function append_inst_10_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_55_tsni = function append_inst_10_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_52_tsni = function append_inst_11_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_50_tsni = function append_inst_11_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_53_tsni = function append_inst_11_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_54_tsni = function append_inst_11_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_42_tsni = function append_inst_11_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_56_tsni = function append_inst_11_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_55_tsni = function append_inst_11_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_56_tsni = function append_inst_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_52_tsni = function append_inst_12_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_50_tsni = function append_inst_12_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_53_tsni = function append_inst_12_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_54_tsni = function append_inst_12_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_42_tsni = function append_inst_12_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_56_tsni = function append_inst_12_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_55_tsni = function append_inst_12_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_tsni = function append_inst_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_52_tsni = function append_inst_13_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_50_tsni = function append_inst_13_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_53_tsni = function append_inst_13_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_54_tsni = function append_inst_13_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_42_tsni = function append_inst_13_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_56_tsni = function append_inst_13_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_55_tsni = function append_inst_13_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_52_tsni = function append_inst_14_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_50_tsni = function append_inst_14_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_53_tsni = function append_inst_14_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_54_tsni = function append_inst_14_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_42_tsni = function append_inst_14_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_56_tsni = function append_inst_14_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_55_tsni = function append_inst_14_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_54_tsni = function append_inst_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_52_tsni = function append_inst_15_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_50_tsni = function append_inst_15_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_53_tsni = function append_inst_15_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_54_tsni = function append_inst_15_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_42_tsni = function append_inst_15_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_56_tsni = function append_inst_15_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_55_tsni = function append_inst_15_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_52_tsni = function append_inst_16_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_50_tsni = function append_inst_16_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_53_tsni = function append_inst_16_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_54_tsni = function append_inst_16_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_42_tsni = function append_inst_16_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_56_tsni = function append_inst_16_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_55_tsni = function append_inst_16_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_tsni = function append_inst_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_52_tsni = function append_inst_17_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_50_tsni = function append_inst_17_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_53_tsni = function append_inst_17_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_54_tsni = function append_inst_17_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_42_tsni = function append_inst_17_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_56_tsni = function append_inst_17_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_55_tsni = function append_inst_17_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_50_tsni = function append_inst_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_52_tsni = function append_inst_18_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_50_tsni = function append_inst_18_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_53_tsni = function append_inst_18_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_54_tsni = function append_inst_18_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_42_tsni = function append_inst_18_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_56_tsni = function append_inst_18_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_55_tsni = function append_inst_18_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_52_tsni = function append_inst_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_50_tsni = function append_inst_19_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_53_tsni = function append_inst_19_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_54_tsni = function append_inst_19_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_42_tsni = function append_inst_19_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_56_tsni = function append_inst_19_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_55_tsni = function append_inst_19_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_52_tsni = function append_inst_20_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_50_tsni = function append_inst_20_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_53_tsni = function append_inst_20_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_54_tsni = function append_inst_20_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_42_tsni = function append_inst_20_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_56_tsni = function append_inst_20_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_55_tsni = function append_inst_20_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_tsni = function append_inst_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
canMove_inst_22_63_tsni = function canMove_inst_22_63_tsni(board, dir) {
  let tmp, tmp1;
  tmp = knights.lastPiece(board);
  tmp1 = move_inst_22_63_64_tsni(dir, tmp);
  return knights.canMoveTo(tmp1, board)
};
move_inst_22_63_64_tsni = function move_inst_22_63_64_tsni(d, x_y) {
  let first1, first0, x, y;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    return runtime.safeCall(d(x, y))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_26_tsni = function map_inst_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_23_26_tsni = function map_inst_23_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
deleteFirst_inst_24_65_tsni = function deleteFirst_inst_24_65_tsni(b) {
  return runtime.safeCall(b())
};
myInit_inst_24_65_66_tsni = function myInit_inst_24_65_66_tsni(a_t) {
  return runtime.safeCall(a_t())
};
append_inst_32_52_tsni = function append_inst_32_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_50_tsni = function append_inst_32_50_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_53_tsni = function append_inst_32_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_54_tsni = function append_inst_32_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_42_tsni = function append_inst_32_42_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_56_tsni = function append_inst_32_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_32_55_tsni = function append_inst_32_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_57_tsni = function take_lz_inst_57_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
append_inst_39_60_tsni = function append_inst_39_60_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_67_tsni = function nofibListToString_inst_67_tsni(ls) {
  return runtime.safeCall(ls())
};
(class knights {
  static {
    knights1 = knights;
    this.createQueue = NofibPrelude.Nil;
    this.Board = function Board(a1, b1, c1, d1) {
      return new Board.class(a1, b1, c1, d1);
    };
    this.Board.class = class Board {
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return "Board(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ", " + runtime.render(this.c) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Direction = class Direction {
      constructor() {}
      toString() { return "Direction"; }
    };
    const UL$class = class UL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UL"; }
    };
    this.UL = new UL$class;
    this.UL.class = UL$class;
    const UR$class = class UR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UR"; }
    };
    this.UR = new UR$class;
    this.UR.class = UR$class;
    const DL$class = class DL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DL"; }
    };
    this.DL = new DL$class;
    this.DL.class = DL$class;
    const DR$class = class DR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DR"; }
    };
    this.DR = new DR$class;
    this.DR.class = DR$class;
    const LU$class = class LU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LU"; }
    };
    this.LU = new LU$class;
    this.LU.class = LU$class;
    const LD$class = class LD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LD"; }
    };
    this.LD = new LD$class;
    this.LD.class = LD$class;
    const RU$class = class RU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RU"; }
    };
    this.RU = new RU$class;
    this.RU.class = RU$class;
    const RD$class = class RD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RD"; }
    };
    this.RD = new RD$class;
    this.RD.class = RD$class;
  }
  static myIsDigit(c) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    tmp2 = runtime.safeCall(c.codePointAt(0));
    tmp3 = tmp2 <= 57;
    return tmp1 && tmp3
  } 
  static intintComp(a_b, c_d) {
    let first1, first0, a, b, first11, first01, c1, d, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
      first0 = a_b[0];
      first1 = a_b[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d) && c_d.length === 2) {
        first01 = c_d[0];
        first11 = c_d[1];
        c1 = first01;
        d = first11;
        tmp = a < c1;
        tmp1 = a === c1;
        tmp2 = b < d;
        tmp3 = tmp1 && tmp2;
        return tmp || tmp3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static intChessSetComp(a_b1, c_d1) {
    let first1, first0, a, b, first11, first01, c1, d;
    if (globalThis.Array.isArray(a_b1) && a_b1.length === 2) {
      first0 = a_b1[0];
      first1 = a_b1[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d1) && c_d1.length === 2) {
        first01 = c_d1[0];
        first11 = c_d1[1];
        c1 = first01;
        d = first11;
        return a < c1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myInit(a_t) {
    let param0, param1, a, t, a1, tmp;
    if (a_t instanceof NofibPrelude.Cons.class) {
      param0 = a_t.head;
      param1 = a_t.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param0;
        t = param1;
        tmp = knights.myInit(t);
        return NofibPrelude.Cons(a, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myLast(a_t1) {
    let go, param0, param1, a, t;
    go = function go(h, t1) {
      let param01, param11, head, t2;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h
      } else if (t1 instanceof NofibPrelude.Cons.class) {
        param01 = t1.head;
        param11 = t1.tail;
        head = param01;
        t2 = param11;
        return go(head, t2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (a_t1 instanceof NofibPrelude.Cons.class) {
      param0 = a_t1.head;
      param1 = a_t1.tail;
      a = param0;
      t = param1;
      return go(a, t)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntInt(xs) {
    let lscomp2, lscomp1, param0, param1, x, xs1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      lscomp1 = function lscomp1(ls) {
        let param01, param11, h, t, scrut, tmp5;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param01 = ls.head;
          param11 = ls.tail;
          h = param01;
          t = param11;
          scrut = knights.intintComp(h, x);
          if (scrut === true) {
            tmp5 = lscomp1(t);
            return NofibPrelude.Cons(h, tmp5)
          } else {
            return lscomp1(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls) {
        let param01, param11, h, t, scrut, tmp5, tmp6;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param01 = ls.head;
          param11 = ls.tail;
          h = param01;
          t = param11;
          tmp5 = knights.intintComp(h, x);
          scrut = Predef.not(tmp5);
          if (scrut === true) {
            tmp6 = lscomp2(t);
            return NofibPrelude.Cons(h, tmp6)
          } else {
            return lscomp2(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp1(xs1);
      tmp1 = knights.quickSortIntInt(tmp);
      tmp2 = lscomp2(xs1);
      tmp3 = knights.quickSortIntInt(tmp2);
      tmp4 = NofibPrelude.Cons(x, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntChessSet(xs1) {
    let lscomp2, lscomp1, scrut, param0, param1, x, xs2, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    scrut = NofibPrelude.force(xs1);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs2 = param1;
      lscomp1 = function lscomp1(ls) {
        let scrut1, param01, param11, h, t, scrut2, lambda2, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          h = param01;
          t = param11;
          scrut2 = knights.intChessSetComp(h, x);
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp4;
              tmp4 = lscomp1(t);
              return NofibPrelude.LzCons(h, tmp4)
            });
            return NofibPrelude.lazy(lambda3)
          } else {
            return lscomp1(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls) {
        let scrut1, param01, param11, h, t, scrut2, tmp4, lambda2, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          h = param01;
          t = param11;
          tmp4 = knights.intChessSetComp(h, x);
          scrut2 = Predef.not(tmp4);
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp5;
              tmp5 = lscomp2(t);
              return NofibPrelude.LzCons(h, tmp5)
            });
            return NofibPrelude.lazy(lambda3)
          } else {
            return lscomp2(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp1(xs2);
      tmp1 = knights.quickSortIntChessSet(tmp);
      lambda1 = (undefined, function () {
        let tmp4, tmp5;
        tmp4 = lscomp2(xs2);
        tmp5 = knights.quickSortIntChessSet(tmp4);
        return NofibPrelude.LzCons(x, tmp5)
      });
      tmp2 = lambda1;
      tmp3 = NofibPrelude.lazy(tmp2);
      return NofibPrelude.append_lz_lz(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sizeQueue(xs2) {
    return NofibPrelude.listLen(xs2)
  } 
  static emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  } 
  static removeBack(xs3) {
    let param0, param1, x1, xs4, x2, tmp;
    if (xs3 instanceof NofibPrelude.Cons.class) {
      param0 = xs3.head;
      param1 = xs3.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        x1 = param0;
        xs4 = param1;
        tmp = knights.removeBack(xs4);
        return NofibPrelude.Cons(x1, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static removeFront(xs4) {
    let param0, param1, h, t;
    if (xs4 instanceof NofibPrelude.Cons.class) {
      param0 = xs4.head;
      param1 = xs4.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireBack(xs5) {
    let param0, param1, x1, xs6, x2;
    if (xs5 instanceof NofibPrelude.Cons.class) {
      param0 = xs5.head;
      param1 = xs5.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x2
      } else {
        x1 = param0;
        xs6 = param1;
        return knights.inquireBack(xs6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront(h_t) {
    return NofibPrelude.head(h_t)
  } 
  static addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  } 
  static addAllFront(list1, q1) {
    return NofibPrelude.append(list1, q1)
  } 
  static addBack(x1, q2) {
    let tmp;
    tmp = NofibPrelude.Cons(x1, NofibPrelude.Nil);
    return NofibPrelude.append(q2, tmp)
  } 
  static addFront(x2, q3) {
    return NofibPrelude.Cons(x2, q3)
  } 
  static createBoard(x3, t) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function () {
      return t
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return runtime.safeCall(knights.Board(x3, 1, tmp, tmp1))
  } 
  static sizeBoard(b) {
    let param0, param1, param2, param3, a;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      a = param0;
      return a
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static noPieces(b1) {
    let param0, param1, param2, param3, n;
    if (b1 instanceof knights.Board.class) {
      param0 = b1.a;
      param1 = b1.b;
      param2 = b1.c;
      param3 = b1.d;
      n = param1;
      return n
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addPiece(t1, b2) {
    let param0, param1, param2, param3, s, n, f, ts, tmp, tmp1;
    if (b2 instanceof knights.Board.class) {
      param0 = b2.a;
      param1 = b2.b;
      param2 = b2.c;
      param3 = b2.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(t1, ts);
      return runtime.safeCall(knights.Board(s, tmp, f, tmp1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static deleteFirst(b3) {
    let param0, param1, param2, param3, s, n, f, ts, ts_, tmp, tmp1, tmp2, lambda;
    if (b3 instanceof knights.Board.class) {
      param0 = b3.a;
      param1 = b3.b;
      param2 = b3.c;
      param3 = b3.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = knights.myInit(ts);
      ts_ = tmp;
      tmp1 = n - 1;
      lambda = (undefined, function () {
        return knights.myLast(ts_)
      });
      tmp2 = NofibPrelude.lazy(lambda);
      return runtime.safeCall(knights.Board(s, tmp1, tmp2, ts_))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static positionPiece(x4, b4) {
    let param0, param1, param2, param3, n, ts, tmp;
    if (b4 instanceof knights.Board.class) {
      param0 = b4.a;
      param1 = b4.b;
      param2 = b4.c;
      param3 = b4.d;
      n = param1;
      ts = param3;
      tmp = n - x4;
      return NofibPrelude.atIndex(tmp, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lastPiece(b5) {
    let param0, param1, param2, param3, param01, param11, t2, ts;
    if (b5 instanceof knights.Board.class) {
      param0 = b5.a;
      param1 = b5.b;
      param2 = b5.c;
      param3 = b5.d;
      if (param3 instanceof NofibPrelude.Cons.class) {
        param01 = param3.head;
        param11 = param3.tail;
        t2 = param01;
        ts = param11;
        return t2
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static firstPiece(b6) {
    let param0, param1, param2, param3, f;
    if (b6 instanceof knights.Board.class) {
      param0 = b6.a;
      param1 = b6.b;
      param2 = b6.c;
      param3 = b6.d;
      f = param2;
      return NofibPrelude.force(f)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pieceAtTile(x5, b7) {
    let find, param0, param1, param2, param3, ts;
    if (b7 instanceof knights.Board.class) {
      param0 = b7.a;
      param1 = b7.b;
      param2 = b7.c;
      param3 = b7.d;
      ts = param3;
      find = function find(x6, xs6) {
        let param01, param11, y, xs7, scrut, tmp;
        if (xs6 instanceof NofibPrelude.Nil.class) {
          throw globalThis.Error("Tile not used");
        } else if (xs6 instanceof NofibPrelude.Cons.class) {
          param01 = xs6.head;
          param11 = xs6.tail;
          y = param01;
          xs7 = param11;
          scrut = NofibPrelude.eqTup2(x6, y);
          if (scrut === true) {
            tmp = NofibPrelude.listLen(xs7);
            return 1 + tmp
          } else {
            return find(x6, xs7)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return find(x5, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tup2InList(y, xs6) {
    let param0, param1, x6, xs7, scrut;
    if (xs6 instanceof NofibPrelude.Nil.class) {
      return false
    } else if (xs6 instanceof NofibPrelude.Cons.class) {
      param0 = xs6.head;
      param1 = xs6.tail;
      x6 = param0;
      xs7 = param1;
      scrut = NofibPrelude.eqTup2(y, x6);
      if (scrut === true) {
        return true
      } else {
        return knights.tup2InList(y, xs7)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isSquareFree(x6, b8) {
    let param0, param1, param2, param3, ts, tmp;
    if (b8 instanceof knights.Board.class) {
      param0 = b8.a;
      param1 = b8.b;
      param2 = b8.c;
      param3 = b8.d;
      ts = param3;
      tmp = knights.tup2InList(x6, ts);
      return Predef.not(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static assignMoveNo(t2, size, z) {
    let param0, param1, first1, first0, x7, y1, t3, tmp, tmp1, tmp2, arr, tmp3, tmp4;
    if (t2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t2 instanceof NofibPrelude.Cons.class) {
      param0 = t2.head;
      param1 = t2.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x7 = first0;
        y1 = first1;
        t3 = param1;
        tmp = y1 - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + x7;
        arr = [
          tmp2,
          z
        ];
        tmp3 = z - 1;
        tmp4 = knights.assignMoveNo(t3, size, tmp3);
        return NofibPrelude.Cons(arr, tmp4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static spaces(s, y1) {
    let logTen, tmp, tmp1, tmp2, tmp3;
    logTen = function logTen(x7) {
      let scrut, tmp4, tmp5;
      scrut = x7 === 0;
      if (scrut === true) {
        return 0
      } else {
        tmp4 = NofibPrelude.intDiv(x7, 10);
        tmp5 = logTen(tmp4);
        return 1 + tmp5
      }
    };
    tmp = logTen(s);
    tmp1 = logTen(y1);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  } 
  static printBoard(s1, n, xs7) {
    let param0, param1, first1, first0, i, j, xs8, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
    if (xs7 instanceof NofibPrelude.Nil.class) {
      tmp = s1 * s1;
      scrut8 = n > tmp;
      if (scrut8 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = NofibPrelude.intMod(n, s1);
        scrut7 = tmp1 != 0;
        if (scrut7 === true) {
          tmp2 = s1 * s1;
          tmp3 = spaces_inst_1_tsni(tmp2, 1);
          tmp4 = n + 1;
          tmp5 = printBoard_inst_20_tsni(s1, tmp4, NofibPrelude.Nil);
          tmp6 = append_inst_52_tsni(tmp3, tmp5);
          return NofibPrelude.Cons("*", tmp6)
        } else {
          tmp7 = NofibPrelude.intMod(n, s1);
          scrut6 = tmp7 === 0;
          if (scrut6 === true) {
            tmp8 = NofibPrelude.nofibStringToList("*\n");
            tmp9 = n + 1;
            tmp10 = printBoard_inst_19_tsni(s1, tmp9, NofibPrelude.Nil);
            return NofibPrelude.append(tmp8, tmp10)
          } else {
            throw globalThis.Error("printBoard empty list error");
          }
        }
      }
    } else if (xs7 instanceof NofibPrelude.Cons.class) {
      param0 = xs7.head;
      param1 = xs7.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        i = first0;
        j = first1;
        xs8 = param1;
        scrut4 = i === n;
        if (scrut4 === true) {
          tmp11 = NofibPrelude.intMod(n, s1);
          scrut5 = tmp11 === 0;
          if (scrut5 === true) {
            tmp12 = NofibPrelude.stringOfInt(j);
            tmp13 = NofibPrelude.nofibStringToList(tmp12);
            tmp14 = NofibPrelude.nofibStringToList("\n");
            tmp15 = n + 1;
            tmp16 = printBoard_inst_18_tsni(s1, tmp15, xs8);
            tmp17 = NofibPrelude.append(tmp14, tmp16);
            return NofibPrelude.append(tmp13, tmp17)
          } else {
            scrut2 = i === n;
            if (scrut2 === true) {
              tmp18 = NofibPrelude.intMod(n, s1);
              scrut3 = tmp18 != 0;
              if (scrut3 === true) {
                tmp19 = NofibPrelude.stringOfInt(j);
                tmp20 = NofibPrelude.nofibStringToList(tmp19);
                tmp21 = s1 * s1;
                tmp22 = spaces_inst_3_tsni(tmp21, j);
                tmp23 = n + 1;
                tmp24 = printBoard_inst_17_tsni(s1, tmp23, xs8);
                tmp25 = append_inst_50_tsni(tmp22, tmp24);
                return NofibPrelude.append(tmp20, tmp25)
              } else {
                tmp26 = NofibPrelude.intMod(n, s1);
                scrut1 = tmp26 != 0;
                if (scrut1 === true) {
                  tmp27 = s1 * s1;
                  tmp28 = spaces_inst_4_tsni(tmp27, 1);
                  tmp29 = n + 1;
                  arr = [
                    i,
                    j
                  ];
                  tmp30 = NofibPrelude.Cons(arr, xs8);
                  tmp31 = printBoard_inst_16_tsni(s1, tmp29, tmp30);
                  tmp32 = append_inst_53_tsni(tmp28, tmp31);
                  return NofibPrelude.Cons("*", tmp32)
                } else {
                  tmp33 = NofibPrelude.intMod(n, s1);
                  scrut = tmp33 === 0;
                  if (scrut === true) {
                    tmp34 = NofibPrelude.nofibStringToList("*\n");
                    tmp35 = n + 1;
                    arr1 = [
                      i,
                      j
                    ];
                    tmp36 = NofibPrelude.Cons(arr1, xs8);
                    tmp37 = printBoard_inst_15_tsni(s1, tmp35, tmp36);
                    return NofibPrelude.append(tmp34, tmp37)
                  } else {
                    throw globalThis.Error("printBoard non-empty list error");
                  }
                }
              }
            } else {
              tmp38 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp38 != 0;
              if (scrut1 === true) {
                tmp39 = s1 * s1;
                tmp40 = spaces_inst_5_tsni(tmp39, 1);
                tmp41 = n + 1;
                arr2 = [
                  i,
                  j
                ];
                tmp42 = NofibPrelude.Cons(arr2, xs8);
                tmp43 = printBoard_inst_14_tsni(s1, tmp41, tmp42);
                tmp44 = append_inst_54_tsni(tmp40, tmp43);
                return NofibPrelude.Cons("*", tmp44)
              } else {
                tmp45 = NofibPrelude.intMod(n, s1);
                scrut = tmp45 === 0;
                if (scrut === true) {
                  tmp46 = NofibPrelude.nofibStringToList("*\n");
                  tmp47 = n + 1;
                  arr3 = [
                    i,
                    j
                  ];
                  tmp48 = NofibPrelude.Cons(arr3, xs8);
                  tmp49 = printBoard_inst_13_tsni(s1, tmp47, tmp48);
                  return NofibPrelude.append(tmp46, tmp49)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          }
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp50 = NofibPrelude.intMod(n, s1);
            scrut3 = tmp50 != 0;
            if (scrut3 === true) {
              tmp51 = NofibPrelude.stringOfInt(j);
              tmp52 = NofibPrelude.nofibStringToList(tmp51);
              tmp53 = s1 * s1;
              tmp54 = spaces_inst_6_tsni(tmp53, j);
              tmp55 = n + 1;
              tmp56 = printBoard_inst_12_tsni(s1, tmp55, xs8);
              tmp57 = append_inst_42_tsni(tmp54, tmp56);
              return NofibPrelude.append(tmp52, tmp57)
            } else {
              tmp58 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp58 != 0;
              if (scrut1 === true) {
                tmp59 = s1 * s1;
                tmp60 = spaces_inst_7_tsni(tmp59, 1);
                tmp61 = n + 1;
                arr4 = [
                  i,
                  j
                ];
                tmp62 = NofibPrelude.Cons(arr4, xs8);
                tmp63 = printBoard_inst_11_tsni(s1, tmp61, tmp62);
                tmp64 = append_inst_56_tsni(tmp60, tmp63);
                return NofibPrelude.Cons("*", tmp64)
              } else {
                tmp65 = NofibPrelude.intMod(n, s1);
                scrut = tmp65 === 0;
                if (scrut === true) {
                  tmp66 = NofibPrelude.nofibStringToList("*\n");
                  tmp67 = n + 1;
                  arr5 = [
                    i,
                    j
                  ];
                  tmp68 = NofibPrelude.Cons(arr5, xs8);
                  tmp69 = printBoard_inst_10_tsni(s1, tmp67, tmp68);
                  return NofibPrelude.append(tmp66, tmp69)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp70 = NofibPrelude.intMod(n, s1);
            scrut1 = tmp70 != 0;
            if (scrut1 === true) {
              tmp71 = s1 * s1;
              tmp72 = spaces_inst_8_tsni(tmp71, 1);
              tmp73 = n + 1;
              arr6 = [
                i,
                j
              ];
              tmp74 = NofibPrelude.Cons(arr6, xs8);
              tmp75 = printBoard_inst_9_tsni(s1, tmp73, tmp74);
              tmp76 = append_inst_55_tsni(tmp72, tmp75);
              return NofibPrelude.Cons("*", tmp76)
            } else {
              tmp77 = NofibPrelude.intMod(n, s1);
              scrut = tmp77 === 0;
              if (scrut === true) {
                tmp78 = NofibPrelude.nofibStringToList("*\n");
                tmp79 = n + 1;
                arr7 = [
                  i,
                  j
                ];
                tmp80 = NofibPrelude.Cons(arr7, xs8);
                tmp81 = printBoard_inst_0_tsni(s1, tmp79, tmp80);
                return NofibPrelude.append(tmp78, tmp81)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static move(d, x_y) {
    let first1, first0, x7, y2, tmp, tmp1, arr, tmp2, tmp3, arr1, tmp4, tmp5, arr2, tmp6, tmp7, arr3, tmp8, tmp9, arr4, tmp10, tmp11, arr5, tmp12, tmp13, arr6, tmp14, tmp15, arr7;
    if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
      first0 = x_y[0];
      first1 = x_y[1];
      x7 = first0;
      y2 = first1;
      if (d instanceof knights.UL.class) {
        tmp = x7 - 1;
        tmp1 = y2 - 2;
        arr = [
          tmp,
          tmp1
        ];
        return arr
      } else if (d instanceof knights.UR.class) {
        tmp2 = x7 + 1;
        tmp3 = y2 - 2;
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else if (d instanceof knights.DL.class) {
        tmp4 = x7 - 1;
        tmp5 = y2 + 2;
        arr2 = [
          tmp4,
          tmp5
        ];
        return arr2
      } else if (d instanceof knights.DR.class) {
        tmp6 = x7 + 1;
        tmp7 = y2 + 2;
        arr3 = [
          tmp6,
          tmp7
        ];
        return arr3
      } else if (d instanceof knights.LU.class) {
        tmp8 = x7 - 2;
        tmp9 = y2 - 1;
        arr4 = [
          tmp8,
          tmp9
        ];
        return arr4
      } else if (d instanceof knights.LD.class) {
        tmp10 = x7 - 2;
        tmp11 = y2 + 1;
        arr5 = [
          tmp10,
          tmp11
        ];
        return arr5
      } else if (d instanceof knights.RU.class) {
        tmp12 = x7 + 2;
        tmp13 = y2 - 1;
        arr6 = [
          tmp12,
          tmp13
        ];
        return arr6
      } else if (d instanceof knights.RD.class) {
        tmp14 = x7 + 2;
        tmp15 = y2 + 1;
        arr7 = [
          tmp14,
          tmp15
        ];
        return arr7
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static startTour(st, size1) {
    let scrut, tmp;
    tmp = NofibPrelude.intMod(size1, 2);
    scrut = tmp === 0;
    if (scrut === true) {
      return knights.createBoard(size1, st)
    } else {
      throw globalThis.Error("Tour doesnt exist for odd size board");
    }
  } 
  static moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.addPiece(tmp1, board)
  } 
  static canMoveTo(x_y1, board1) {
    let first1, first0, x7, y2, sze, res, scrut, scrut1, scrut2, scrut3, scrut4, tmp, tmp1;
    if (globalThis.Array.isArray(x_y1) && x_y1.length === 2) {
      first0 = x_y1[0];
      first1 = x_y1[1];
      x7 = first0;
      y2 = first1;
      tmp = knights.sizeBoard(board1);
      sze = tmp;
      scrut = x7 >= 1;
      if (scrut === true) {
        scrut1 = x7 <= sze;
        if (scrut1 === true) {
          scrut2 = y2 >= 1;
          if (scrut2 === true) {
            scrut3 = y2 <= sze;
            if (scrut3 === true) {
              scrut4 = knights.isSquareFree(x_y1, board1);
              if (scrut4 === true) {
                tmp1 = true;
              } else {
                tmp1 = false;
              }
            } else {
              tmp1 = false;
            }
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
      } else {
        tmp1 = false;
      }
      res = tmp1;
      return res
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static canMove(board2, dir1) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board2);
    tmp1 = knights.move(dir1, tmp);
    return knights.canMoveTo(tmp1, board2)
  } 
  static canJumpFirst(board3) {
    let tmp, tmp1;
    tmp = knights.firstPiece(board3);
    tmp1 = knights.deleteFirst(board3);
    return knights.canMoveTo(tmp, tmp1)
  } 
  static tourFinished(board4) {
    let sze, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = knights.sizeBoard(board4);
    sze = tmp;
    tmp1 = knights.noPieces(board4);
    tmp2 = sze * sze;
    tmp3 = tmp1 === tmp2;
    tmp4 = knights.canJumpFirst(board4);
    return tmp3 && tmp4
  } 
  static possibleMoves(board5) {
    let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    lscomp = function lscomp(ls) {
      let param0, param1, x7, t3, scrut, tmp9;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        x7 = param0;
        t3 = param1;
        scrut = knights.canMove(board5, x7);
        if (scrut === true) {
          tmp9 = lscomp(t3);
          return NofibPrelude.Cons(x7, tmp9)
        } else {
          return lscomp(t3)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = NofibPrelude.Cons(knights.RD, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(knights.RU, tmp);
    tmp2 = NofibPrelude.Cons(knights.LD, tmp1);
    tmp3 = NofibPrelude.Cons(knights.LU, tmp2);
    tmp4 = NofibPrelude.Cons(knights.DR, tmp3);
    tmp5 = NofibPrelude.Cons(knights.DL, tmp4);
    tmp6 = NofibPrelude.Cons(knights.UR, tmp5);
    tmp7 = NofibPrelude.Cons(knights.UL, tmp6);
    tmp8 = lscomp(tmp7);
    res = tmp8;
    return res
  } 
  static deadEnd(board6) {
    let tmp, tmp1;
    tmp = possibleMoves_inst_21_tsni(board6);
    tmp1 = NofibPrelude.listLen(tmp);
    return tmp1 === 0
  } 
  static allDescend(board7) {
    let tmp, lambda;
    tmp = possibleMoves_inst_22_tsni(board7);
    lambda = (undefined, function (b9) {
      return knights.moveKnight(board7, b9)
    });
    return map_inst_26_tsni(lambda, tmp)
  } 
  static descAndNo(board8) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let param0, param1, x7, t3, tmp1, lambda, lambda1;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        x7 = param0;
        t3 = param1;
        lambda1 = (undefined, function () {
          let tmp2, tmp3, tmp4, arr, tmp5;
          tmp2 = knights.deleteFirst(x7);
          tmp3 = knights.possibleMoves(tmp2);
          tmp4 = NofibPrelude.listLen(tmp3);
          arr = [
            tmp4,
            x7
          ];
          tmp5 = lscomp(t3);
          return NofibPrelude.LzCons(arr, tmp5)
        });
        tmp1 = lambda1;
        return NofibPrelude.lazy(tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = allDescend_inst_23_tsni(board8);
    return lscomp(tmp)
  } 
  static singleDescend(board9) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let scrut, param0, param1, first1, first0, y2, x7, t3, scrut1, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          y2 = first0;
          x7 = first1;
          t3 = param1;
          scrut1 = y2 === 1;
          if (scrut1 === true) {
            tmp1 = lscomp(t3);
            return NofibPrelude.Cons(x7, tmp1)
          } else {
            return lscomp(t3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = descAndNo_inst_24_tsni(board9);
    return lscomp(tmp)
  } 
  static descendents(board10) {
    let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
    tmp = knights.canJumpFirst(board10);
    tmp1 = knights.firstPiece(board10);
    tmp2 = knights.addPiece(tmp1, board10);
    tmp3 = deadEnd_inst_31_tsni(tmp2);
    scrut3 = tmp && tmp3;
    if (scrut3 === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else {
      tmp4 = singleDescend_inst_30_tsni(board10);
      singles = tmp4;
      tmp5 = NofibPrelude.listLen(singles);
      scrut = tmp5;
      scrut2 = scrut === 0;
      if (scrut2 === true) {
        tmp6 = descAndNo_inst_29_tsni(board10);
        tmp7 = knights.quickSortIntChessSet(tmp6);
        tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
      } else {
        scrut1 = scrut === 1;
        if (scrut1 === true) {
          if (singles instanceof NofibPrelude.Cons.class) {
            param0 = singles.head;
            param1 = singles.tail;
            h = param0;
            if (param1 instanceof NofibPrelude.Nil.class) {
              lambda1 = (undefined, function () {
                let tmp10, lambda3;
                lambda3 = (undefined, function () {
                  return NofibPrelude.LzNil
                });
                tmp10 = NofibPrelude.lazy(lambda3);
                return NofibPrelude.LzCons(h, tmp10)
              });
              tmp9 = NofibPrelude.lazy(lambda1);
            } else {
              throw globalThis.Error("unreachable");
            }
          } else {
            throw globalThis.Error("unreachable");
          }
          tmp8 = tmp9;
        } else {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          tmp8 = NofibPrelude.lazy(lambda2);
        }
      }
      res = tmp8;
      return res
    }
  } 
  static showChessSet(b9) {
    let param0, param1, param2, param3, sze, n1, f, ts, sortedTrail, tmp, tmp1;
    if (b9 instanceof knights.Board.class) {
      param0 = b9.a;
      param1 = b9.b;
      param2 = b9.c;
      param3 = b9.d;
      sze = param0;
      n1 = param1;
      f = param2;
      ts = param3;
      tmp = knights.assignMoveNo(ts, sze, n1);
      tmp1 = knights.quickSortIntInt(tmp);
      sortedTrail = tmp1;
      return printBoard_inst_32_tsni(sze, 1, sortedTrail)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static root(sze) {
    let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, param0, param1, h1, t11, tmp10, lambda1;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda1 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda1)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h1 = param0;
        t11 = param1;
        lscomp2 = function lscomp2(ls1) {
          let param01, param11, h2, t21, tmp11, lambda2;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t11)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            param01 = ls1.head;
            param11 = ls1.tail;
            h2 = param01;
            t21 = param11;
            lambda2 = (undefined, function () {
              let arr, tmp12;
              arr = [
                h1,
                h2
              ];
              tmp12 = lscomp2(t21);
              return NofibPrelude.LzCons(arr, tmp12)
            });
            tmp11 = lambda2;
            return NofibPrelude.lazy(tmp11)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp10 = NofibPrelude.enumFromTo(1, sze);
        return lscomp2(tmp10)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = NofibPrelude.enumFromTo(1, sze);
    tmp4 = lscomp1(tmp3);
    tmp5 = sze * sze;
    tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
    tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
    tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda);
    return NofibPrelude.append_lz_lz(tmp8, tmp9)
  } 
  static grow(x_y2) {
    let first1, first0, x7, y2, tmp, tmp1, tmp2;
    if (globalThis.Array.isArray(x_y2) && x_y2.length === 2) {
      first0 = x_y2[0];
      first1 = x_y2[1];
      x7 = first0;
      y2 = first1;
      tmp = x7 + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = descendents_inst_33_tsni(y2);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isFinished(x_y3) {
    let first1, first0, x7, y2;
    if (globalThis.Array.isArray(x_y3) && x_y3.length === 2) {
      first0 = x_y3[0];
      first1 = x_y3[1];
      x7 = first0;
      y2 = first1;
      return knights.tourFinished(y2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static emptyQueue_lz(x7) {
    let scrut;
    scrut = NofibPrelude.force(x7);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else {
      return false
    }
  } 
  static removeFront_lz(xs8) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(xs8);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return t3
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront_lz(h_t1) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(h_t1);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return h
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addAllFront_lz(list2, q4) {
    return NofibPrelude.append_lz_lz(list2, q4)
  } 
  static depthSearch(q5, growFn, finFn) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1;
    scrut1 = knights.emptyQueue_lz(q5);
    if (scrut1 === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else {
      tmp = knights.inquireFront_lz(q5);
      scrut = runtime.safeCall(finFn(tmp));
      if (scrut === true) {
        lambda1 = (undefined, function () {
          let tmp6, tmp7, tmp8;
          tmp6 = knights.inquireFront_lz(q5);
          tmp7 = knights.removeFront_lz(q5);
          tmp8 = knights.depthSearch(tmp7, growFn, finFn);
          return NofibPrelude.LzCons(tmp6, tmp8)
        });
        tmp1 = lambda1;
        return NofibPrelude.lazy(tmp1)
      } else {
        tmp2 = knights.inquireFront_lz(q5);
        tmp3 = runtime.safeCall(growFn(tmp2));
        tmp4 = knights.removeFront_lz(q5);
        tmp5 = knights.addAllFront_lz(tmp3, tmp4);
        return knights.depthSearch(tmp5, growFn, finFn)
      }
    }
  } 
  static printTour(ss) {
    let pp, strToInt, scrut, param0, param1, size2, param01, param11, number, tmp, tmp1, tmp2, lambda;
    strToInt = function strToInt(y2, xs9) {
      let param02, param12, x8, xs10, tmp3, tmp4, tmp5, tmp6;
      if (xs9 instanceof NofibPrelude.Nil.class) {
        return y2
      } else if (xs9 instanceof NofibPrelude.Cons.class) {
        param02 = xs9.head;
        param12 = xs9.tail;
        x8 = param02;
        xs10 = param12;
        tmp3 = 10 * y2;
        tmp4 = runtime.safeCall(x8.codePointAt(0));
        tmp5 = tmp4 - 48;
        tmp6 = tmp3 + tmp5;
        return strToInt(tmp6, xs10)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    pp = function pp(xs9) {
      let param02, param12, first1, first0, x8, y2, xs10, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs9 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs9 instanceof NofibPrelude.Cons.class) {
        param02 = xs9.head;
        param12 = xs9.tail;
        if (globalThis.Array.isArray(param02) && param02.length === 2) {
          first0 = param02[0];
          first1 = param02[1];
          x8 = first0;
          y2 = first1;
          xs10 = param12;
          tmp3 = NofibPrelude.nofibStringToList("\nKnights tour with ");
          tmp4 = NofibPrelude.stringOfInt(x8);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = NofibPrelude.nofibStringToList(" backtracking moves\n");
          tmp7 = knights.showChessSet(y2);
          tmp8 = pp(xs10);
          tmp9 = NofibPrelude.append(tmp7, tmp8);
          tmp10 = NofibPrelude.append(tmp6, tmp9);
          tmp11 = NofibPrelude.append(tmp5, tmp10);
          return NofibPrelude.append(tmp3, tmp11)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x8) {
      return strToInt(0, x8)
    });
    scrut = NofibPrelude.map(lambda, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      size2 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        number = param01;
        if (param11 instanceof NofibPrelude.Nil.class) {
          tmp = root_inst_36_tsni(size2);
          tmp1 = depthSearch_inst_34_tsni(tmp, grow_inst_35_tsni, knights.isFinished);
          tmp2 = take_lz_inst_57_tsni(number, tmp1);
          return pp(tmp2)
        } else {
          throw globalThis.Error("printTour error");
        }
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } 
  static testKnights_nofib(ss1) {
    let argsOk, all_digits, usageString, scrut;
    all_digits = function all_digits(s2) {
      let lambda;
      lambda = (undefined, function (a, b10) {
        let tmp;
        tmp = knights.myIsDigit(a);
        return tmp && b10
      });
      return NofibPrelude.foldr(lambda, true, s2)
    };
    argsOk = function argsOk(ss2) {
      let tmp, tmp1, tmp2, lambda;
      tmp = NofibPrelude.listLen(ss2);
      tmp1 = tmp === 2;
      lambda = (undefined, function (a, b10) {
        let tmp3;
        tmp3 = all_digits(a);
        return tmp3 && b10
      });
      tmp2 = NofibPrelude.foldr(lambda, true, ss2);
      return tmp1 && tmp2
    };
    usageString = "\nUsage: knights <board size> <no solutions> \n";
    scrut = argsOk(ss1);
    if (scrut === true) {
      return printTour_inst_39_tsni(ss1)
    } else {
      throw globalThis.Error(usageString);
    }
  } 
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.nofibStringToList("8");
    tmp1 = NofibPrelude.nofibStringToList("1");
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    tmp4 = testKnights_nofib_inst_58_tsni(tmp3);
    return nofibListToString_inst_67_tsni(tmp4)
  }
  static toString() { return "knights"; }
});
let knights = knights1; export default knights;
