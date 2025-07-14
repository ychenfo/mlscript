import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let minimax1, map_inst_0_tsni, concat_inst_1_tsni, append_inst_1_2_tsni, map_inst_3_tsni, map2_inst_4_tsni, map_inst_5_tsni, map_inst_6_tsni, repTree_inst_7_tsni, map_inst_7_8_tsni, mise_inst_9_tsni, map_inst_9_6_tsni, cropTree_inst_10_tsni, static_inst_11_tsni, score_inst_11_12_tsni, map2_inst_11_12_4_tsni, map_inst_11_5_tsni, eval_inst_11_12_13_tsni, searchTree_inst_14_tsni, newPositions_inst_14_15_tsni, map_inst_14_15_3_tsni, placePiece_inst_14_15_16_tsni, newPositions_inst_14_17_tsni, map_inst_14_17_3_tsni, placePiece_inst_14_17_16_tsni, concat_inst_14_15_18_tsni, append_inst_14_15_18_2_tsni, concat_inst_14_17_18_tsni, append_inst_14_17_18_2_tsni, repTree_inst_14_7_tsni, map_inst_14_7_8_tsni, prune_inst_14_19_tsni, map_inst_14_19_20_tsni, alternate_inst_21_tsni, fullBoard_inst_21_22_tsni, map_inst_21_22_0_tsni, concat_inst_21_22_1_tsni, append_inst_21_22_1_2_tsni, static_inst_21_23_tsni, map_inst_21_23_5_tsni, score_inst_21_23_12_tsni, map2_inst_21_23_12_4_tsni, eval_inst_21_23_12_13_tsni, interpret_inst_21_23_24_tsni, static_inst_21_25_tsni, map_inst_21_25_5_tsni, score_inst_21_25_12_tsni, map2_inst_21_25_12_4_tsni, eval_inst_21_25_12_13_tsni, interpret_inst_21_25_24_tsni, newPositions_inst_21_26_tsni, map_inst_21_26_3_tsni, placePiece_inst_21_26_16_tsni, bestMove_inst_21_27_tsni, mise_inst_21_27_9_tsni, map_inst_21_27_9_6_tsni, cropTree_inst_21_27_10_tsni, static_inst_21_27_11_tsni, score_inst_21_27_11_12_tsni, map2_inst_21_27_11_12_4_tsni, map_inst_21_27_11_5_tsni, eval_inst_21_27_11_12_13_tsni, searchTree_inst_21_27_14_tsni, newPositions_inst_21_27_14_15_tsni, map_inst_21_27_14_15_3_tsni, placePiece_inst_21_27_14_15_16_tsni, newPositions_inst_21_27_14_17_tsni, map_inst_21_27_14_17_3_tsni, placePiece_inst_21_27_14_17_16_tsni, concat_inst_21_27_14_15_18_tsni, append_inst_21_27_14_15_18_2_tsni, concat_inst_21_27_14_17_18_tsni, append_inst_21_27_14_17_18_2_tsni, repTree_inst_21_27_14_7_tsni, map_inst_21_27_14_7_8_tsni, prune_inst_21_27_14_19_tsni, map_inst_21_27_14_19_20_tsni, best_inst_21_28_tsni, best_inst_28_tsni, newPositions_inst_26_tsni, map_inst_26_3_tsni, placePiece_inst_26_16_tsni, static_inst_25_tsni, score_inst_25_12_tsni, map2_inst_25_12_4_tsni, map_inst_25_5_tsni, eval_inst_25_12_13_tsni, interpret_inst_25_24_tsni, static_inst_23_tsni, score_inst_23_12_tsni, map2_inst_23_12_4_tsni, map_inst_23_5_tsni, eval_inst_23_12_13_tsni, interpret_inst_23_24_tsni, fullBoard_inst_22_tsni, concat_inst_22_1_tsni, append_inst_22_1_2_tsni, map_inst_22_0_tsni, map_inst_29_tsni, alternate_inst_30_tsni, fullBoard_inst_30_22_tsni, map_inst_30_22_0_tsni, concat_inst_30_22_1_tsni, append_inst_30_22_1_2_tsni, static_inst_30_23_tsni, map_inst_30_23_5_tsni, score_inst_30_23_12_tsni, map2_inst_30_23_12_4_tsni, eval_inst_30_23_12_13_tsni, interpret_inst_30_23_24_tsni, static_inst_30_25_tsni, map_inst_30_25_5_tsni, score_inst_30_25_12_tsni, map2_inst_30_25_12_4_tsni, eval_inst_30_25_12_13_tsni, interpret_inst_30_25_24_tsni, newPositions_inst_30_26_tsni, map_inst_30_26_3_tsni, placePiece_inst_30_26_16_tsni, bestMove_inst_30_27_tsni, mise_inst_30_27_9_tsni, map_inst_30_27_9_6_tsni, cropTree_inst_30_27_10_tsni, static_inst_30_27_11_tsni, score_inst_30_27_11_12_tsni, map2_inst_30_27_11_12_4_tsni, map_inst_30_27_11_5_tsni, eval_inst_30_27_11_12_13_tsni, searchTree_inst_30_27_14_tsni, newPositions_inst_30_27_14_15_tsni, map_inst_30_27_14_15_3_tsni, placePiece_inst_30_27_14_15_16_tsni, newPositions_inst_30_27_14_17_tsni, map_inst_30_27_14_17_3_tsni, placePiece_inst_30_27_14_17_16_tsni, concat_inst_30_27_14_15_18_tsni, append_inst_30_27_14_15_18_2_tsni, concat_inst_30_27_14_17_18_tsni, append_inst_30_27_14_17_18_2_tsni, repTree_inst_30_27_14_7_tsni, map_inst_30_27_14_7_8_tsni, prune_inst_30_27_14_19_tsni, map_inst_30_27_14_19_20_tsni, best_inst_30_28_tsni, prog_inst_31_tsni, alternate_inst_31_30_tsni, best_inst_31_30_28_tsni, bestMove_inst_31_30_27_tsni, searchTree_inst_31_30_27_14_tsni, repTree_inst_31_30_27_14_7_tsni, map_inst_31_30_27_14_7_8_tsni, newPositions_inst_31_30_27_14_17_tsni, map_inst_31_30_27_14_17_3_tsni, placePiece_inst_31_30_27_14_17_16_tsni, concat_inst_31_30_27_14_17_18_tsni, append_inst_31_30_27_14_17_18_2_tsni, newPositions_inst_31_30_27_14_15_tsni, map_inst_31_30_27_14_15_3_tsni, placePiece_inst_31_30_27_14_15_16_tsni, concat_inst_31_30_27_14_15_18_tsni, append_inst_31_30_27_14_15_18_2_tsni, static_inst_31_30_27_11_tsni, map_inst_31_30_27_11_5_tsni, score_inst_31_30_27_11_12_tsni, map2_inst_31_30_27_11_12_4_tsni, eval_inst_31_30_27_11_12_13_tsni, prune_inst_31_30_27_14_19_tsni, map_inst_31_30_27_14_19_20_tsni, mise_inst_31_30_27_9_tsni, map_inst_31_30_27_9_6_tsni, cropTree_inst_31_30_27_10_tsni, newPositions_inst_31_30_26_tsni, map_inst_31_30_26_3_tsni, placePiece_inst_31_30_26_16_tsni, static_inst_31_30_25_tsni, score_inst_31_30_25_12_tsni, map2_inst_31_30_25_12_4_tsni, map_inst_31_30_25_5_tsni, eval_inst_31_30_25_12_13_tsni, interpret_inst_31_30_25_24_tsni, static_inst_31_30_23_tsni, score_inst_31_30_23_12_tsni, map2_inst_31_30_23_12_4_tsni, map_inst_31_30_23_5_tsni, eval_inst_31_30_23_12_13_tsni, interpret_inst_31_30_23_24_tsni, fullBoard_inst_31_30_22_tsni, concat_inst_31_30_22_1_tsni, append_inst_31_30_22_1_2_tsni, map_inst_31_30_22_0_tsni, map_inst_31_29_tsni, concat_inst_31_32_tsni, append_inst_31_32_2_tsni, append_inst_31_33_tsni, andd_inst_34_tsni, concat_inst_18_tsni, map_inst_35_tsni, interpret_inst_24_tsni, foldr_inst_36_tsni, prune_inst_19_tsni, map_inst_19_20_tsni, foldr_inst_9_36_tsni, map_inst_11_12_35_tsni, interpret_inst_11_24_tsni, mapTree_inst_37_tsni, map_inst_37_38_tsni, andd_inst_21_22_34_tsni, map_inst_21_23_12_35_tsni, evaluationEq_inst_21_39_tsni, map_inst_21_25_12_35_tsni, evaluationEq_inst_21_40_tsni, concat_inst_21_26_18_tsni, append_inst_21_26_18_2_tsni, foldr_inst_21_27_9_36_tsni, map_inst_21_27_11_12_35_tsni, interpret_inst_21_27_11_24_tsni, mapTree_inst_21_27_37_tsni, map_inst_21_27_37_38_tsni, concat_inst_26_18_tsni, append_inst_26_18_2_tsni, map_inst_25_12_35_tsni, evaluationEq_inst_40_tsni, map_inst_23_12_35_tsni, evaluationEq_inst_39_tsni, andd_inst_22_34_tsni, concat_inst_32_tsni, andd_inst_30_22_34_tsni, map_inst_30_23_12_35_tsni, evaluationEq_inst_30_39_tsni, map_inst_30_25_12_35_tsni, evaluationEq_inst_30_40_tsni, concat_inst_30_26_18_tsni, append_inst_30_26_18_2_tsni, foldr_inst_30_27_9_36_tsni, map_inst_30_27_11_12_35_tsni, interpret_inst_30_27_11_24_tsni, mapTree_inst_30_27_37_tsni, map_inst_30_27_37_38_tsni, showMove_inst_41_tsni, interpret_inst_31_30_27_11_24_tsni, map_inst_31_30_27_11_12_35_tsni, mapTree_inst_31_30_27_37_tsni, map_inst_31_30_27_37_38_tsni, foldr_inst_31_30_27_9_36_tsni, concat_inst_31_30_26_18_tsni, append_inst_31_30_26_18_2_tsni, map_inst_31_30_25_12_35_tsni, evaluationEq_inst_31_30_40_tsni, map_inst_31_30_23_12_35_tsni, evaluationEq_inst_31_30_39_tsni, andd_inst_31_30_22_34_tsni, showMove_inst_31_41_tsni, nofibListToString_inst_42_tsni, match_xs_arm_Nil_inst_35_tsni, match_t_arm_Branch_inst_9_tsni, match_xs_arm_Nil_inst_11_12_35_tsni, match_xs_arm_Nil_inst_14_15_18_2_tsni, match_xs_arm_Cons_inst_14_15_18_2_tsni, match_ls_arm_Cons_inst_14_15_tsni, match_ls_arm_Cons_inst_14_15_tsni1, match_xs_arm_Nil_inst_14_17_18_2_tsni, match_xs_arm_Cons_inst_14_17_18_2_tsni, match_ls_arm_Cons_inst_14_17_tsni, match_ls_arm_Cons_inst_14_17_tsni1, match_xs_arm_Cons_inst_14_7_8_tsni, match_xs_arm_Nil_inst_14_7_8_tsni, match_t_arm_Branch_inst_37_tsni, match_xs_arm_Nil_inst_37_38_tsni, match_xs_arm_Nil_inst_21_23_12_35_tsni, match_xs_arm_Nil_inst_21_25_12_35_tsni, match_xs_arm_Nil_inst_21_26_18_2_tsni, match_xs_arm_Cons_inst_21_26_18_2_tsni, match_ls_arm_Cons_inst_21_26_tsni, match_ls_arm_Cons_inst_21_26_tsni1, match_t_arm_Branch_inst_21_27_9_tsni, match_xs_arm_Nil_inst_21_27_11_12_35_tsni, match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni, match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni, match_ls_arm_Cons_inst_21_27_14_15_tsni, match_ls_arm_Cons_inst_21_27_14_15_tsni1, match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni, match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni, match_ls_arm_Cons_inst_21_27_14_17_tsni, match_ls_arm_Cons_inst_21_27_14_17_tsni1, match_xs_arm_Cons_inst_21_27_14_7_8_tsni, match_xs_arm_Nil_inst_21_27_14_7_8_tsni, match_t_arm_Branch_inst_21_27_37_tsni, match_xs_arm_Nil_inst_21_27_37_38_tsni, match_ls_arm_Cons_inst_26_tsni, match_ls_arm_Cons_inst_26_tsni1, match_xs_arm_Nil_inst_26_18_2_tsni, match_xs_arm_Cons_inst_26_18_2_tsni, match_xs_arm_Nil_inst_25_12_35_tsni, match_xs_arm_Nil_inst_23_12_35_tsni, match_xs_arm_Nil_inst_30_23_12_35_tsni, match_xs_arm_Nil_inst_30_25_12_35_tsni, match_xs_arm_Nil_inst_30_26_18_2_tsni, match_xs_arm_Cons_inst_30_26_18_2_tsni, match_ls_arm_Cons_inst_30_26_tsni, match_ls_arm_Cons_inst_30_26_tsni1, match_t_arm_Branch_inst_30_27_9_tsni, match_xs_arm_Nil_inst_30_27_11_12_35_tsni, match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni, match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni, match_ls_arm_Cons_inst_30_27_14_15_tsni, match_ls_arm_Cons_inst_30_27_14_15_tsni1, match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni, match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni, match_ls_arm_Cons_inst_30_27_14_17_tsni, match_ls_arm_Cons_inst_30_27_14_17_tsni1, match_xs_arm_Cons_inst_30_27_14_7_8_tsni, match_xs_arm_Nil_inst_30_27_14_7_8_tsni, match_t_arm_Branch_inst_30_27_37_tsni, match_xs_arm_Nil_inst_30_27_37_38_tsni, match_xs_arm_Nil_inst_29_tsni, match_ls_arm_Cons_inst_31_30_27_14_17_tsni, match_ls_arm_Cons_inst_31_30_27_14_17_tsni1, match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni, match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni, match_xs_arm_Cons_inst_31_30_27_14_7_8_tsni, match_xs_arm_Nil_inst_31_30_27_14_7_8_tsni, match_ls_arm_Cons_inst_31_30_27_14_15_tsni, match_ls_arm_Cons_inst_31_30_27_14_15_tsni1, match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni, match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni, match_xs_arm_Nil_inst_31_30_27_11_12_35_tsni, match_t_arm_Branch_inst_31_30_27_37_tsni, match_xs_arm_Nil_inst_31_30_27_37_38_tsni, match_t_arm_Branch_inst_31_30_27_9_tsni, match_ls_arm_Cons_inst_31_30_26_tsni, match_ls_arm_Cons_inst_31_30_26_tsni1, match_xs_arm_Nil_inst_31_30_26_18_2_tsni, match_xs_arm_Cons_inst_31_30_26_18_2_tsni, match_xs_arm_Nil_inst_31_30_25_12_35_tsni, match_xs_arm_Nil_inst_31_30_23_12_35_tsni, match_xs_arm_Nil_inst_31_29_tsni, match_ls_arm_Cons_inst_42_tsni;
match_xs_arm_Nil_inst_35_tsni = function match_xs_arm_Nil_inst_35_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_9_tsni = function match_t_arm_Branch_inst_9_tsni(f, g, _deforest_Branch_a_inst_9_tsni, _deforest_Branch_cs_inst_9_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_9_tsni;
  param1 = _deforest_Branch_cs_inst_9_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda = (undefined, function (x) {
      return mise_inst_9_tsni(g, f, x)
    });
    tmp1 = map_inst_9_6_tsni(lambda, l);
    return foldr_inst_9_36_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_11_12_35_tsni = function match_xs_arm_Nil_inst_11_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_14_15_18_2_tsni = function match_xs_arm_Nil_inst_14_15_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_14_15_18_2_tsni = function match_xs_arm_Cons_inst_14_15_18_2_tsni(ys, _deforest_Cons_head_inst_14_15_18_2_tsni, _deforest_Cons_tail_inst_14_15_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_14_15_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_14_15_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_14_15_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_14_15_tsni = function match_ls_arm_Cons_inst_14_15_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_14_15_tsni, _deforest_Cons_tail_inst_14_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_14_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_14_15_tsni1 = function match_ls_arm_Cons_inst_14_15_tsni(lscomp1, _deforest_Cons_head_inst_14_15_tsni, _deforest_Cons_tail_inst_14_15_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_14_15_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_14_17_18_2_tsni = function match_xs_arm_Nil_inst_14_17_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_14_17_18_2_tsni = function match_xs_arm_Cons_inst_14_17_18_2_tsni(ys, _deforest_Cons_head_inst_14_17_18_2_tsni, _deforest_Cons_tail_inst_14_17_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_14_17_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_14_17_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_14_17_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_14_17_tsni = function match_ls_arm_Cons_inst_14_17_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_14_17_tsni, _deforest_Cons_tail_inst_14_17_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_14_17_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_14_17_tsni1 = function match_ls_arm_Cons_inst_14_17_tsni(lscomp1, _deforest_Cons_head_inst_14_17_tsni, _deforest_Cons_tail_inst_14_17_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_14_17_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Cons_inst_14_7_8_tsni = function match_xs_arm_Cons_inst_14_7_8_tsni(f, _deforest_Cons_head_inst_14_7_8_tsni, _deforest_Cons_tail_inst_14_7_8_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_14_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_14_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_14_7_8_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_14_19_20_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_37_38_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_xs_arm_Nil_inst_14_7_8_tsni = function match_xs_arm_Nil_inst_14_7_8_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_37_38_tsni(f2)
    }
  }
};
match_t_arm_Branch_inst_37_tsni = function match_t_arm_Branch_inst_37_tsni(f, _deforest_Branch_a_inst_37_tsni, _deforest_Branch_cs_inst_37_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_37_tsni;
  param1 = _deforest_Branch_cs_inst_37_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return mapTree_inst_37_tsni(f, x)
  });
  tmp1 = map_inst_37_38_tsni(lambda, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_37_38_tsni = function match_xs_arm_Nil_inst_37_38_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_21_23_12_35_tsni = function match_xs_arm_Nil_inst_21_23_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_21_25_12_35_tsni = function match_xs_arm_Nil_inst_21_25_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_21_26_18_2_tsni = function match_xs_arm_Nil_inst_21_26_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_21_26_18_2_tsni = function match_xs_arm_Cons_inst_21_26_18_2_tsni(ys, _deforest_Cons_head_inst_21_26_18_2_tsni, _deforest_Cons_tail_inst_21_26_18_2_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_21_26_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_21_26_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_21_26_18_2_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_21_26_tsni = function match_ls_arm_Cons_inst_21_26_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_21_26_tsni, _deforest_Cons_tail_inst_21_26_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_21_26_tsni;
  param1 = _deforest_Cons_tail_inst_21_26_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_21_26_tsni1 = function match_ls_arm_Cons_inst_21_26_tsni(lscomp1, _deforest_Cons_head_inst_21_26_tsni, _deforest_Cons_tail_inst_21_26_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_21_26_tsni;
  param1 = _deforest_Cons_tail_inst_21_26_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_t_arm_Branch_inst_21_27_9_tsni = function match_t_arm_Branch_inst_21_27_9_tsni(f, g, _deforest_Branch_a_inst_21_27_9_tsni, _deforest_Branch_cs_inst_21_27_9_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_21_27_9_tsni;
  param1 = _deforest_Branch_cs_inst_21_27_9_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda = (undefined, function (x) {
      return mise_inst_21_27_9_tsni(g, f, x)
    });
    tmp1 = map_inst_21_27_9_6_tsni(lambda, l);
    return foldr_inst_21_27_9_36_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_21_27_11_12_35_tsni = function match_xs_arm_Nil_inst_21_27_11_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni = function match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni = function match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni(ys, _deforest_Cons_head_inst_21_27_14_15_18_2_tsni, _deforest_Cons_tail_inst_21_27_14_15_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_27_14_15_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_15_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_21_27_14_15_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_21_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_21_27_14_15_tsni = function match_ls_arm_Cons_inst_21_27_14_15_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_21_27_14_15_tsni, _deforest_Cons_tail_inst_21_27_14_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_21_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_21_27_14_15_tsni1 = function match_ls_arm_Cons_inst_21_27_14_15_tsni(lscomp1, _deforest_Cons_head_inst_21_27_14_15_tsni, _deforest_Cons_tail_inst_21_27_14_15_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_21_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_15_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni = function match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni = function match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni(ys, _deforest_Cons_head_inst_21_27_14_17_18_2_tsni, _deforest_Cons_tail_inst_21_27_14_17_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_27_14_17_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_17_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_21_27_14_17_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_21_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_21_27_14_17_tsni = function match_ls_arm_Cons_inst_21_27_14_17_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_21_27_14_17_tsni, _deforest_Cons_tail_inst_21_27_14_17_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_21_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_17_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_21_27_14_17_tsni1 = function match_ls_arm_Cons_inst_21_27_14_17_tsni(lscomp1, _deforest_Cons_head_inst_21_27_14_17_tsni, _deforest_Cons_tail_inst_21_27_14_17_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_21_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_17_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Cons_inst_21_27_14_7_8_tsni = function match_xs_arm_Cons_inst_21_27_14_7_8_tsni(f, _deforest_Cons_head_inst_21_27_14_7_8_tsni, _deforest_Cons_tail_inst_21_27_14_7_8_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_27_14_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_21_27_14_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_21_27_14_7_8_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_21_27_14_19_20_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_21_27_37_38_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_xs_arm_Nil_inst_21_27_14_7_8_tsni = function match_xs_arm_Nil_inst_21_27_14_7_8_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_21_27_37_38_tsni(f2)
    }
  }
};
match_t_arm_Branch_inst_21_27_37_tsni = function match_t_arm_Branch_inst_21_27_37_tsni(f, _deforest_Branch_a_inst_21_27_37_tsni, _deforest_Branch_cs_inst_21_27_37_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_21_27_37_tsni;
  param1 = _deforest_Branch_cs_inst_21_27_37_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return mapTree_inst_21_27_37_tsni(f, x)
  });
  tmp1 = map_inst_21_27_37_38_tsni(lambda, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_21_27_37_38_tsni = function match_xs_arm_Nil_inst_21_27_37_38_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_26_tsni = function match_ls_arm_Cons_inst_26_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_26_tsni, _deforest_Cons_tail_inst_26_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_26_tsni;
  param1 = _deforest_Cons_tail_inst_26_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_26_tsni1 = function match_ls_arm_Cons_inst_26_tsni(lscomp1, _deforest_Cons_head_inst_26_tsni, _deforest_Cons_tail_inst_26_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_26_tsni;
  param1 = _deforest_Cons_tail_inst_26_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_26_18_2_tsni = function match_xs_arm_Nil_inst_26_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_26_18_2_tsni = function match_xs_arm_Cons_inst_26_18_2_tsni(ys, _deforest_Cons_head_inst_26_18_2_tsni, _deforest_Cons_tail_inst_26_18_2_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_26_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_26_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_26_18_2_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_25_12_35_tsni = function match_xs_arm_Nil_inst_25_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_23_12_35_tsni = function match_xs_arm_Nil_inst_23_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_30_23_12_35_tsni = function match_xs_arm_Nil_inst_30_23_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_30_25_12_35_tsni = function match_xs_arm_Nil_inst_30_25_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_30_26_18_2_tsni = function match_xs_arm_Nil_inst_30_26_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_30_26_18_2_tsni = function match_xs_arm_Cons_inst_30_26_18_2_tsni(ys, _deforest_Cons_head_inst_30_26_18_2_tsni, _deforest_Cons_tail_inst_30_26_18_2_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_30_26_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_30_26_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_30_26_18_2_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_30_26_tsni = function match_ls_arm_Cons_inst_30_26_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_30_26_tsni, _deforest_Cons_tail_inst_30_26_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_30_26_tsni;
  param1 = _deforest_Cons_tail_inst_30_26_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_30_26_tsni1 = function match_ls_arm_Cons_inst_30_26_tsni(lscomp1, _deforest_Cons_head_inst_30_26_tsni, _deforest_Cons_tail_inst_30_26_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_30_26_tsni;
  param1 = _deforest_Cons_tail_inst_30_26_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_t_arm_Branch_inst_30_27_9_tsni = function match_t_arm_Branch_inst_30_27_9_tsni(f, g, _deforest_Branch_a_inst_30_27_9_tsni, _deforest_Branch_cs_inst_30_27_9_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_30_27_9_tsni;
  param1 = _deforest_Branch_cs_inst_30_27_9_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda = (undefined, function (x) {
      return mise_inst_30_27_9_tsni(g, f, x)
    });
    tmp1 = map_inst_30_27_9_6_tsni(lambda, l);
    return foldr_inst_30_27_9_36_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_30_27_11_12_35_tsni = function match_xs_arm_Nil_inst_30_27_11_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni = function match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni = function match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head_inst_30_27_14_15_18_2_tsni, _deforest_Cons_tail_inst_30_27_14_15_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_27_14_15_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_15_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_30_27_14_15_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_30_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_30_27_14_15_tsni = function match_ls_arm_Cons_inst_30_27_14_15_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_30_27_14_15_tsni, _deforest_Cons_tail_inst_30_27_14_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_30_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_30_27_14_15_tsni1 = function match_ls_arm_Cons_inst_30_27_14_15_tsni(lscomp1, _deforest_Cons_head_inst_30_27_14_15_tsni, _deforest_Cons_tail_inst_30_27_14_15_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_30_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_15_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni = function match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni = function match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head_inst_30_27_14_17_18_2_tsni, _deforest_Cons_tail_inst_30_27_14_17_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_27_14_17_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_17_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_30_27_14_17_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_30_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ls_arm_Cons_inst_30_27_14_17_tsni = function match_ls_arm_Cons_inst_30_27_14_17_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_30_27_14_17_tsni, _deforest_Cons_tail_inst_30_27_14_17_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_30_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_17_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_30_27_14_17_tsni1 = function match_ls_arm_Cons_inst_30_27_14_17_tsni(lscomp1, _deforest_Cons_head_inst_30_27_14_17_tsni, _deforest_Cons_tail_inst_30_27_14_17_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_30_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_17_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Cons_inst_30_27_14_7_8_tsni = function match_xs_arm_Cons_inst_30_27_14_7_8_tsni(f, _deforest_Cons_head_inst_30_27_14_7_8_tsni, _deforest_Cons_tail_inst_30_27_14_7_8_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_27_14_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_30_27_14_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_30_27_14_7_8_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_30_27_14_19_20_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_30_27_37_38_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_xs_arm_Nil_inst_30_27_14_7_8_tsni = function match_xs_arm_Nil_inst_30_27_14_7_8_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_30_27_37_38_tsni(f2)
    }
  }
};
match_t_arm_Branch_inst_30_27_37_tsni = function match_t_arm_Branch_inst_30_27_37_tsni(f, _deforest_Branch_a_inst_30_27_37_tsni, _deforest_Branch_cs_inst_30_27_37_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_30_27_37_tsni;
  param1 = _deforest_Branch_cs_inst_30_27_37_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return mapTree_inst_30_27_37_tsni(f, x)
  });
  tmp1 = map_inst_30_27_37_38_tsni(lambda, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_30_27_37_38_tsni = function match_xs_arm_Nil_inst_30_27_37_38_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_29_tsni = function match_xs_arm_Nil_inst_29_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_ls_arm_Cons_inst_31_30_27_14_17_tsni = function match_ls_arm_Cons_inst_31_30_27_14_17_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_31_30_27_14_17_tsni, _deforest_Cons_tail_inst_31_30_27_14_17_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_31_30_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_17_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_31_30_27_14_17_tsni1 = function match_ls_arm_Cons_inst_31_30_27_14_17_tsni(lscomp1, _deforest_Cons_head_inst_31_30_27_14_17_tsni, _deforest_Cons_tail_inst_31_30_27_14_17_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_31_30_27_14_17_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_17_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni = function match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni = function match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head_inst_31_30_27_14_17_18_2_tsni, _deforest_Cons_tail_inst_31_30_27_14_17_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_31_30_27_14_17_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_17_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_31_30_27_14_17_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_31_30_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_31_30_27_14_7_8_tsni = function match_xs_arm_Cons_inst_31_30_27_14_7_8_tsni(f, _deforest_Cons_head_inst_31_30_27_14_7_8_tsni, _deforest_Cons_tail_inst_31_30_27_14_7_8_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_31_30_27_14_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_31_30_27_14_7_8_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_31_30_27_14_19_20_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_31_30_27_37_38_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_xs_arm_Nil_inst_31_30_27_14_7_8_tsni = function match_xs_arm_Nil_inst_31_30_27_14_7_8_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_31_30_27_37_38_tsni(f2)
    }
  }
};
match_ls_arm_Cons_inst_31_30_27_14_15_tsni = function match_ls_arm_Cons_inst_31_30_27_14_15_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_31_30_27_14_15_tsni, _deforest_Cons_tail_inst_31_30_27_14_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_31_30_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_31_30_27_14_15_tsni1 = function match_ls_arm_Cons_inst_31_30_27_14_15_tsni(lscomp1, _deforest_Cons_head_inst_31_30_27_14_15_tsni, _deforest_Cons_tail_inst_31_30_27_14_15_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_31_30_27_14_15_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_15_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni = function match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni = function match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head_inst_31_30_27_14_15_18_2_tsni, _deforest_Cons_tail_inst_31_30_27_14_15_18_2_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_31_30_27_14_15_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_27_14_15_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_31_30_27_14_15_18_2_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_31_30_27_14_7_8_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_31_30_27_11_12_35_tsni = function match_xs_arm_Nil_inst_31_30_27_11_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_31_30_27_37_tsni = function match_t_arm_Branch_inst_31_30_27_37_tsni(f, _deforest_Branch_a_inst_31_30_27_37_tsni, _deforest_Branch_cs_inst_31_30_27_37_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_31_30_27_37_tsni;
  param1 = _deforest_Branch_cs_inst_31_30_27_37_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return mapTree_inst_31_30_27_37_tsni(f, x)
  });
  tmp1 = map_inst_31_30_27_37_38_tsni(lambda, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_31_30_27_37_38_tsni = function match_xs_arm_Nil_inst_31_30_27_37_38_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_31_30_27_9_tsni = function match_t_arm_Branch_inst_31_30_27_9_tsni(f, g, _deforest_Branch_a_inst_31_30_27_9_tsni, _deforest_Branch_cs_inst_31_30_27_9_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda;
  param0 = _deforest_Branch_a_inst_31_30_27_9_tsni;
  param1 = _deforest_Branch_cs_inst_31_30_27_9_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda = (undefined, function (x) {
      return mise_inst_31_30_27_9_tsni(g, f, x)
    });
    tmp1 = map_inst_31_30_27_9_6_tsni(lambda, l);
    return foldr_inst_31_30_27_9_36_tsni(f, tmp, tmp1)
  }
};
match_ls_arm_Cons_inst_31_30_26_tsni = function match_ls_arm_Cons_inst_31_30_26_tsni(lscomp2, lscomp1, x, xs, _deforest_Cons_head_inst_31_30_26_tsni, _deforest_Cons_tail_inst_31_30_26_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_31_30_26_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_26_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2(ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_31_30_26_tsni1 = function match_ls_arm_Cons_inst_31_30_26_tsni(lscomp1, _deforest_Cons_head_inst_31_30_26_tsni, _deforest_Cons_tail_inst_31_30_26_tsni) {
  let lscomp2, param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_31_30_26_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_26_tsni;
  x = param0;
  xs = param1;
  lscomp2 = function lscomp2(ls) {
    return runtime.safeCall(ls(lscomp2, lscomp1, x, xs))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp21, lscomp11, x1, xs1) => {
    return lscomp11(xs1)
  };
  tmp = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp21, lscomp11, x1, xs1) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni(lscomp21, lscomp11, x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2(tmp2)
};
match_xs_arm_Nil_inst_31_30_26_18_2_tsni = function match_xs_arm_Nil_inst_31_30_26_18_2_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_31_30_26_18_2_tsni = function match_xs_arm_Cons_inst_31_30_26_18_2_tsni(ys, _deforest_Cons_head_inst_31_30_26_18_2_tsni, _deforest_Cons_tail_inst_31_30_26_18_2_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_31_30_26_18_2_tsni;
  param1 = _deforest_Cons_tail_inst_31_30_26_18_2_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_31_30_26_18_2_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_31_30_25_12_35_tsni = function match_xs_arm_Nil_inst_31_30_25_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_31_30_23_12_35_tsni = function match_xs_arm_Nil_inst_31_30_23_12_35_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_31_29_tsni = function match_xs_arm_Nil_inst_31_29_tsni(f) {
  return () => {
    return () => {
      return ""
    }
  }
};
match_ls_arm_Cons_inst_42_tsni = function match_ls_arm_Cons_inst_42_tsni(_deforest_Cons_head_inst_42_tsni, _deforest_Cons_tail_inst_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_42_tsni;
  param1 = _deforest_Cons_tail_inst_42_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_42_tsni(t);
  return h + tmp
};
map_inst_0_tsni = function map_inst_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_1_tsni = function concat_inst_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_1_tsni(xs);
    return append_inst_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_1_2_tsni = function append_inst_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_0_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_34_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_3_tsni = function map_inst_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_18_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map2_inst_4_tsni = function map2_inst_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_5_tsni = function map_inst_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_24_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_6_tsni = function map_inst_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_36_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
repTree_inst_7_tsni = function repTree_inst_7_tsni(f, g, a) {
  let tmp, tmp1, lambda, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return repTree_inst_7_tsni(g, f, x)
  });
  tmp1 = map_inst_7_8_tsni(lambda, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda1;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      return minimax.Branch(a1, NofibPrelude.Nil)
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda1 = (undefined, function (x) {
          let tmp3;
          tmp3 = n - 1;
          return prune_inst_19_tsni(tmp3, x)
        });
        tmp2 = map_inst_19_20_tsni(lambda1, l);
        return minimax.Branch(a1, tmp2)
      }
    }
  }
};
map_inst_7_8_tsni = function map_inst_7_8_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_8_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_19_20_tsni(f1, xs1);
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
mise_inst_9_tsni = function mise_inst_9_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
map_inst_9_6_tsni = function map_inst_9_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_9_36_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cropTree_inst_10_tsni = function cropTree_inst_10_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_9_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_10_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_9_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_9_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_11_tsni = function static_inst_11_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_11_12_tsni(board, x)
  });
  tmp = map_inst_11_5_tsni(lambda, minimax.wins);
  return interpret_inst_11_24_tsni(0, tmp)
};
score_inst_11_12_tsni = function score_inst_11_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_11_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_11_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_11_12_13_tsni(tmp2)
};
map2_inst_11_12_4_tsni = function map2_inst_11_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_11_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_11_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_11_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_11_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_11_5_tsni = function map_inst_11_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_11_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_11_12_13_tsni = function eval_inst_11_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_11_24_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_14_tsni = function searchTree_inst_14_tsni(p, board) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (x) {
    return newPositions_inst_14_15_tsni(p, x)
  });
  lambda1 = (undefined, function (x) {
    let tmp1;
    tmp1 = minimax.opposite(p);
    return newPositions_inst_14_17_tsni(tmp1, x)
  });
  tmp = repTree_inst_14_7_tsni(lambda, lambda1, board);
  return prune_inst_14_19_tsni(5, tmp)
};
newPositions_inst_14_15_tsni = function newPositions_inst_14_15_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_15_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_15_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_15_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_14_15_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_14_15_3_tsni(lambda, tmp3);
  return concat_inst_14_15_18_tsni(tmp4)
};
map_inst_14_15_3_tsni = function map_inst_14_15_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_15_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_14_15_18_tsni(xs2);
      return append_inst_14_15_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_14_15_16_tsni = function placePiece_inst_14_15_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_14_15_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_15_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_15_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_15_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
newPositions_inst_14_17_tsni = function newPositions_inst_14_17_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_17_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_17_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_14_17_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_14_17_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_14_17_3_tsni(lambda, tmp3);
  return concat_inst_14_17_18_tsni(tmp4)
};
map_inst_14_17_3_tsni = function map_inst_14_17_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_17_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_14_17_18_tsni(xs2);
      return append_inst_14_17_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_14_17_16_tsni = function placePiece_inst_14_17_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_14_17_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_17_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_17_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_14_17_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
concat_inst_14_15_18_tsni = function concat_inst_14_15_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_14_15_18_2_tsni = function append_inst_14_15_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_14_17_18_tsni = function concat_inst_14_17_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_14_17_18_2_tsni = function append_inst_14_17_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_14_7_tsni = function repTree_inst_14_7_tsni(f, g, a) {
  let tmp, tmp1, lambda, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return repTree_inst_14_7_tsni(g, f, x)
  });
  tmp1 = map_inst_14_7_8_tsni(lambda, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_37_38_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_37_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda1 = (undefined, function (x) {
          let tmp3;
          tmp3 = n - 1;
          return prune_inst_14_19_tsni(tmp3, x)
        });
        tmp2 = map_inst_14_19_20_tsni(lambda1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_37_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
map_inst_14_7_8_tsni = function map_inst_14_7_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_14_19_tsni = function prune_inst_14_19_tsni(n, t) {
  return runtime.safeCall(t(n))
};
map_inst_14_19_20_tsni = function map_inst_14_19_20_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
alternate_inst_21_tsni = function alternate_inst_21_tsni(player, f, g, board) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda;
  scrut2 = fullBoard_inst_21_22_tsni(board);
  if (scrut2 === true) {
    return NofibPrelude.Nil
  } else {
    tmp = static_inst_21_23_tsni(board);
    scrut1 = evaluationEq_inst_21_39_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = static_inst_21_25_tsni(board);
      scrut = evaluationEq_inst_21_40_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return NofibPrelude.Nil
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_21_26_tsni(player, board);
        lambda = (undefined, function (x) {
          return bestMove_inst_21_27_tsni(opposition, g, f, x)
        });
        scores = NofibPrelude.map(lambda, possibles);
        boardd_eval = best_inst_21_28_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
fullBoard_inst_21_22_tsni = function fullBoard_inst_21_22_tsni(b) {
  let tmp, tmp1, lambda;
  tmp = concat_inst_21_22_1_tsni(b);
  lambda = (undefined, function (x) {
    let tmp2;
    tmp2 = minimax.eqPiece(x, minimax.Empty);
    return Predef.not(tmp2)
  });
  tmp1 = map_inst_21_22_0_tsni(lambda, tmp);
  return andd_inst_21_22_34_tsni(tmp1)
};
map_inst_21_22_0_tsni = function map_inst_21_22_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_21_22_1_tsni = function concat_inst_21_22_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_21_22_1_tsni(xs);
    return append_inst_21_22_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_21_22_1_2_tsni = function append_inst_21_22_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_21_22_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_21_22_0_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_21_22_34_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_21_23_tsni = function static_inst_21_23_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_21_23_12_tsni(board, x)
  });
  tmp = map_inst_21_23_5_tsni(lambda, minimax.wins);
  return interpret_inst_21_23_24_tsni(0, tmp)
};
map_inst_21_23_5_tsni = function map_inst_21_23_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_23_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
score_inst_21_23_12_tsni = function score_inst_21_23_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_21_23_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_21_23_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_21_23_12_13_tsni(tmp2)
};
map2_inst_21_23_12_4_tsni = function map2_inst_21_23_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_21_23_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_21_23_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_21_23_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_21_23_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_21_23_12_13_tsni = function eval_inst_21_23_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_21_23_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_21_23_24_tsni = function interpret_inst_21_23_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_21_25_tsni = function static_inst_21_25_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_21_25_12_tsni(board, x)
  });
  tmp = map_inst_21_25_5_tsni(lambda, minimax.wins);
  return interpret_inst_21_25_24_tsni(0, tmp)
};
map_inst_21_25_5_tsni = function map_inst_21_25_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_25_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
score_inst_21_25_12_tsni = function score_inst_21_25_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_21_25_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_21_25_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_21_25_12_13_tsni(tmp2)
};
map2_inst_21_25_12_4_tsni = function map2_inst_21_25_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_21_25_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_21_25_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_21_25_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_21_25_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_21_25_12_13_tsni = function eval_inst_21_25_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_21_25_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_21_25_24_tsni = function interpret_inst_21_25_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_21_26_tsni = function newPositions_inst_21_26_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_26_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_26_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_26_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_21_26_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_21_26_3_tsni(lambda, tmp3);
  return concat_inst_21_26_18_tsni(tmp4)
};
map_inst_21_26_3_tsni = function map_inst_21_26_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_26_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_21_26_18_tsni(xs2);
      return append_inst_21_26_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_21_26_16_tsni = function placePiece_inst_21_26_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_21_26_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_21_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_26_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_21_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_26_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_21_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_26_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
bestMove_inst_21_27_tsni = function bestMove_inst_21_27_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_21_27_14_tsni(p, b);
  tmp1 = mapTree_inst_21_27_37_tsni(static_inst_21_27_11_tsni, tmp);
  tmp2 = cropTree_inst_21_27_10_tsni(tmp1);
  return mise_inst_21_27_9_tsni(f, g, tmp2)
};
mise_inst_21_27_9_tsni = function mise_inst_21_27_9_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
map_inst_21_27_9_6_tsni = function map_inst_21_27_9_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_27_9_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_21_27_9_36_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cropTree_inst_21_27_10_tsni = function cropTree_inst_21_27_10_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_21_27_9_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_21_27_10_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_21_27_9_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_21_27_9_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_21_27_11_tsni = function static_inst_21_27_11_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_21_27_11_12_tsni(board, x)
  });
  tmp = map_inst_21_27_11_5_tsni(lambda, minimax.wins);
  return interpret_inst_21_27_11_24_tsni(0, tmp)
};
score_inst_21_27_11_12_tsni = function score_inst_21_27_11_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_21_27_11_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_21_27_11_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_21_27_11_12_13_tsni(tmp2)
};
map2_inst_21_27_11_12_4_tsni = function map2_inst_21_27_11_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_21_27_11_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_21_27_11_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_21_27_11_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_21_27_11_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_21_27_11_5_tsni = function map_inst_21_27_11_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_27_11_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_21_27_11_12_13_tsni = function eval_inst_21_27_11_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_21_27_11_24_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_21_27_14_tsni = function searchTree_inst_21_27_14_tsni(p, board) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (x) {
    return newPositions_inst_21_27_14_15_tsni(p, x)
  });
  lambda1 = (undefined, function (x) {
    let tmp1;
    tmp1 = minimax.opposite(p);
    return newPositions_inst_21_27_14_17_tsni(tmp1, x)
  });
  tmp = repTree_inst_21_27_14_7_tsni(lambda, lambda1, board);
  return prune_inst_21_27_14_19_tsni(5, tmp)
};
newPositions_inst_21_27_14_15_tsni = function newPositions_inst_21_27_14_15_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_15_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_21_27_14_15_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_21_27_14_15_3_tsni(lambda, tmp3);
  return concat_inst_21_27_14_15_18_tsni(tmp4)
};
map_inst_21_27_14_15_3_tsni = function map_inst_21_27_14_15_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_27_14_15_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_21_27_14_15_18_tsni(xs2);
      return append_inst_21_27_14_15_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_21_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_21_27_14_15_16_tsni = function placePiece_inst_21_27_14_15_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_15_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
newPositions_inst_21_27_14_17_tsni = function newPositions_inst_21_27_14_17_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_21_27_14_17_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_21_27_14_17_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_21_27_14_17_3_tsni(lambda, tmp3);
  return concat_inst_21_27_14_17_18_tsni(tmp4)
};
map_inst_21_27_14_17_3_tsni = function map_inst_21_27_14_17_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_27_14_17_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_21_27_14_17_18_tsni(xs2);
      return append_inst_21_27_14_17_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_21_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_21_27_14_17_16_tsni = function placePiece_inst_21_27_14_17_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_21_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_21_27_14_17_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
concat_inst_21_27_14_15_18_tsni = function concat_inst_21_27_14_15_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_27_14_15_18_2_tsni = function append_inst_21_27_14_15_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_21_27_14_17_18_tsni = function concat_inst_21_27_14_17_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_27_14_17_18_2_tsni = function append_inst_21_27_14_17_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_21_27_14_7_tsni = function repTree_inst_21_27_14_7_tsni(f, g, a) {
  let tmp, tmp1, lambda, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return repTree_inst_21_27_14_7_tsni(g, f, x)
  });
  tmp1 = map_inst_21_27_14_7_8_tsni(lambda, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_21_27_37_38_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_21_27_37_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda1 = (undefined, function (x) {
          let tmp3;
          tmp3 = n - 1;
          return prune_inst_21_27_14_19_tsni(tmp3, x)
        });
        tmp2 = map_inst_21_27_14_19_20_tsni(lambda1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_21_27_37_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
map_inst_21_27_14_7_8_tsni = function map_inst_21_27_14_7_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_21_27_14_19_tsni = function prune_inst_21_27_14_19_tsni(n, t) {
  return runtime.safeCall(t(n))
};
map_inst_21_27_14_19_20_tsni = function map_inst_21_27_14_19_20_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_21_28_tsni = function best_inst_21_28_tsni(f, bs, ss) {
  let best_, param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      best_ = function best_(b1, s1, ls1, ls2) {
        let param02, param12, b_, bs2, param03, param13, s_, ss2, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          if (ls2 instanceof NofibPrelude.Nil.class) {
            _deforest_Deforest_Arr_2_0 = b1;
            _deforest_Deforest_Arr_2_1 = s1;
            arr = (f1, g, opposition) => {
              let first1, first0, boardd, eval1, arr1, tmp1;
              first0 = _deforest_Deforest_Arr_2_0;
              first1 = _deforest_Deforest_Arr_2_1;
              boardd = first0;
              eval1 = first1;
              arr1 = [
                boardd,
                eval1
              ];
              tmp1 = alternate_inst_21_tsni(opposition, g, f1, boardd);
              return NofibPrelude.Cons(arr1, tmp1)
            };
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param02 = ls1.head;
          param12 = ls1.tail;
          b_ = param02;
          bs2 = param12;
          if (ls2 instanceof NofibPrelude.Cons.class) {
            param03 = ls2.head;
            param13 = ls2.tail;
            s_ = param03;
            ss2 = param13;
            tmp = runtime.safeCall(f(s1, s_));
            scrut = minimax.evaluationEq(s1, tmp);
            if (scrut === true) {
              return best_(b1, s1, bs2, ss2)
            } else {
              return best_(b_, s_, bs2, ss2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return best_(b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_inst_28_tsni = function best_inst_28_tsni(f, bs, ss) {
  let best_, param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      best_ = function best_(b1, s1, ls1, ls2) {
        let param02, param12, b_, bs2, param03, param13, s_, ss2, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          if (ls2 instanceof NofibPrelude.Nil.class) {
            _deforest_Deforest_Arr_2_0 = b1;
            _deforest_Deforest_Arr_2_1 = s1;
            arr = (f1, g, opposition) => {
              let first1, first0, boardd, eval1, arr1, tmp1;
              first0 = _deforest_Deforest_Arr_2_0;
              first1 = _deforest_Deforest_Arr_2_1;
              boardd = first0;
              eval1 = first1;
              arr1 = [
                boardd,
                eval1
              ];
              tmp1 = alternate_inst_21_tsni(opposition, g, f1, boardd);
              return NofibPrelude.Cons(arr1, tmp1)
            };
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param02 = ls1.head;
          param12 = ls1.tail;
          b_ = param02;
          bs2 = param12;
          if (ls2 instanceof NofibPrelude.Cons.class) {
            param03 = ls2.head;
            param13 = ls2.tail;
            s_ = param03;
            ss2 = param13;
            tmp = runtime.safeCall(f(s1, s_));
            scrut = minimax.evaluationEq(s1, tmp);
            if (scrut === true) {
              return best_(b1, s1, bs2, ss2)
            } else {
              return best_(b_, s_, bs2, ss2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return best_(b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
newPositions_inst_26_tsni = function newPositions_inst_26_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_26_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_26_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_26_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_26_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_26_3_tsni(lambda, tmp3);
  return concat_inst_26_18_tsni(tmp4)
};
map_inst_26_3_tsni = function map_inst_26_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_18_tsni(xs2);
      return append_inst_26_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_26_16_tsni = function placePiece_inst_26_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_26_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_26_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_26_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_26_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
static_inst_25_tsni = function static_inst_25_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_25_12_tsni(board, x)
  });
  tmp = map_inst_25_5_tsni(lambda, minimax.wins);
  return interpret_inst_25_24_tsni(0, tmp)
};
score_inst_25_12_tsni = function score_inst_25_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_25_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_25_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_25_12_13_tsni(tmp2)
};
map2_inst_25_12_4_tsni = function map2_inst_25_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_25_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_25_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_25_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_25_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_25_5_tsni = function map_inst_25_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
eval_inst_25_12_13_tsni = function eval_inst_25_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_25_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_25_24_tsni = function interpret_inst_25_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_23_tsni = function static_inst_23_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_23_12_tsni(board, x)
  });
  tmp = map_inst_23_5_tsni(lambda, minimax.wins);
  return interpret_inst_23_24_tsni(0, tmp)
};
score_inst_23_12_tsni = function score_inst_23_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_23_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_23_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_23_12_13_tsni(tmp2)
};
map2_inst_23_12_4_tsni = function map2_inst_23_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_23_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_23_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_23_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_23_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_5_tsni = function map_inst_23_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
eval_inst_23_12_13_tsni = function eval_inst_23_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_23_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_23_24_tsni = function interpret_inst_23_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
fullBoard_inst_22_tsni = function fullBoard_inst_22_tsni(b) {
  let tmp, tmp1, lambda;
  tmp = concat_inst_22_1_tsni(b);
  lambda = (undefined, function (x) {
    let tmp2;
    tmp2 = minimax.eqPiece(x, minimax.Empty);
    return Predef.not(tmp2)
  });
  tmp1 = map_inst_22_0_tsni(lambda, tmp);
  return andd_inst_22_34_tsni(tmp1)
};
concat_inst_22_1_tsni = function concat_inst_22_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_22_1_tsni(xs);
    return append_inst_22_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_1_2_tsni = function append_inst_22_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_22_0_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_22_34_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_22_0_tsni = function map_inst_22_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_29_tsni = function map_inst_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
alternate_inst_30_tsni = function alternate_inst_30_tsni(player, f, g, board) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda;
  scrut2 = fullBoard_inst_30_22_tsni(board);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_29_tsni(f1)
    }
  } else {
    tmp = static_inst_30_23_tsni(board);
    scrut1 = evaluationEq_inst_30_39_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_29_tsni(f1)
      }
    } else {
      tmp1 = static_inst_30_25_tsni(board);
      scrut = evaluationEq_inst_30_40_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_29_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_30_26_tsni(player, board);
        lambda = (undefined, function (x) {
          return bestMove_inst_30_27_tsni(opposition, g, f, x)
        });
        scores = NofibPrelude.map(lambda, possibles);
        boardd_eval = best_inst_30_28_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
fullBoard_inst_30_22_tsni = function fullBoard_inst_30_22_tsni(b) {
  let tmp, tmp1, lambda;
  tmp = concat_inst_30_22_1_tsni(b);
  lambda = (undefined, function (x) {
    let tmp2;
    tmp2 = minimax.eqPiece(x, minimax.Empty);
    return Predef.not(tmp2)
  });
  tmp1 = map_inst_30_22_0_tsni(lambda, tmp);
  return andd_inst_30_22_34_tsni(tmp1)
};
map_inst_30_22_0_tsni = function map_inst_30_22_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_30_22_1_tsni = function concat_inst_30_22_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_30_22_1_tsni(xs);
    return append_inst_30_22_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_30_22_1_2_tsni = function append_inst_30_22_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_30_22_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_30_22_0_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_30_22_34_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_30_23_tsni = function static_inst_30_23_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_30_23_12_tsni(board, x)
  });
  tmp = map_inst_30_23_5_tsni(lambda, minimax.wins);
  return interpret_inst_30_23_24_tsni(0, tmp)
};
map_inst_30_23_5_tsni = function map_inst_30_23_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_23_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
score_inst_30_23_12_tsni = function score_inst_30_23_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_30_23_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_30_23_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_30_23_12_13_tsni(tmp2)
};
map2_inst_30_23_12_4_tsni = function map2_inst_30_23_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_30_23_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_30_23_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_30_23_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_23_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_30_23_12_13_tsni = function eval_inst_30_23_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_30_23_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_30_23_24_tsni = function interpret_inst_30_23_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_30_25_tsni = function static_inst_30_25_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_30_25_12_tsni(board, x)
  });
  tmp = map_inst_30_25_5_tsni(lambda, minimax.wins);
  return interpret_inst_30_25_24_tsni(0, tmp)
};
map_inst_30_25_5_tsni = function map_inst_30_25_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_25_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
score_inst_30_25_12_tsni = function score_inst_30_25_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_30_25_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_30_25_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_30_25_12_13_tsni(tmp2)
};
map2_inst_30_25_12_4_tsni = function map2_inst_30_25_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_30_25_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_30_25_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_30_25_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_25_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_30_25_12_13_tsni = function eval_inst_30_25_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_30_25_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_30_25_24_tsni = function interpret_inst_30_25_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_30_26_tsni = function newPositions_inst_30_26_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_26_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_26_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_26_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_30_26_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_30_26_3_tsni(lambda, tmp3);
  return concat_inst_30_26_18_tsni(tmp4)
};
map_inst_30_26_3_tsni = function map_inst_30_26_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_26_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_26_18_tsni(xs2);
      return append_inst_30_26_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_30_26_16_tsni = function placePiece_inst_30_26_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_30_26_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_26_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_26_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_26_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
bestMove_inst_30_27_tsni = function bestMove_inst_30_27_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_30_27_14_tsni(p, b);
  tmp1 = mapTree_inst_30_27_37_tsni(static_inst_30_27_11_tsni, tmp);
  tmp2 = cropTree_inst_30_27_10_tsni(tmp1);
  return mise_inst_30_27_9_tsni(f, g, tmp2)
};
mise_inst_30_27_9_tsni = function mise_inst_30_27_9_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
map_inst_30_27_9_6_tsni = function map_inst_30_27_9_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_27_9_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_30_27_9_36_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cropTree_inst_30_27_10_tsni = function cropTree_inst_30_27_10_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_30_27_9_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_30_27_10_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_30_27_9_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_30_27_9_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_30_27_11_tsni = function static_inst_30_27_11_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_30_27_11_12_tsni(board, x)
  });
  tmp = map_inst_30_27_11_5_tsni(lambda, minimax.wins);
  return interpret_inst_30_27_11_24_tsni(0, tmp)
};
score_inst_30_27_11_12_tsni = function score_inst_30_27_11_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_30_27_11_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_30_27_11_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_30_27_11_12_13_tsni(tmp2)
};
map2_inst_30_27_11_12_4_tsni = function map2_inst_30_27_11_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_30_27_11_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_30_27_11_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_30_27_11_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_27_11_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_30_27_11_5_tsni = function map_inst_30_27_11_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_27_11_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_30_27_11_12_13_tsni = function eval_inst_30_27_11_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_30_27_11_24_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_30_27_14_tsni = function searchTree_inst_30_27_14_tsni(p, board) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (x) {
    return newPositions_inst_30_27_14_15_tsni(p, x)
  });
  lambda1 = (undefined, function (x) {
    let tmp1;
    tmp1 = minimax.opposite(p);
    return newPositions_inst_30_27_14_17_tsni(tmp1, x)
  });
  tmp = repTree_inst_30_27_14_7_tsni(lambda, lambda1, board);
  return prune_inst_30_27_14_19_tsni(5, tmp)
};
newPositions_inst_30_27_14_15_tsni = function newPositions_inst_30_27_14_15_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_30_27_14_15_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_30_27_14_15_3_tsni(lambda, tmp3);
  return concat_inst_30_27_14_15_18_tsni(tmp4)
};
map_inst_30_27_14_15_3_tsni = function map_inst_30_27_14_15_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_27_14_15_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_27_14_15_18_tsni(xs2);
      return append_inst_30_27_14_15_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_30_27_14_15_16_tsni = function placePiece_inst_30_27_14_15_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
newPositions_inst_30_27_14_17_tsni = function newPositions_inst_30_27_14_17_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_30_27_14_17_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_30_27_14_17_3_tsni(lambda, tmp3);
  return concat_inst_30_27_14_17_18_tsni(tmp4)
};
map_inst_30_27_14_17_3_tsni = function map_inst_30_27_14_17_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_27_14_17_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_27_14_17_18_tsni(xs2);
      return append_inst_30_27_14_17_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_30_27_14_17_16_tsni = function placePiece_inst_30_27_14_17_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
concat_inst_30_27_14_15_18_tsni = function concat_inst_30_27_14_15_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_27_14_15_18_2_tsni = function append_inst_30_27_14_15_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_30_27_14_17_18_tsni = function concat_inst_30_27_14_17_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_27_14_17_18_2_tsni = function append_inst_30_27_14_17_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_30_27_14_7_tsni = function repTree_inst_30_27_14_7_tsni(f, g, a) {
  let tmp, tmp1, lambda, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return repTree_inst_30_27_14_7_tsni(g, f, x)
  });
  tmp1 = map_inst_30_27_14_7_8_tsni(lambda, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_30_27_37_38_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_30_27_37_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda1 = (undefined, function (x) {
          let tmp3;
          tmp3 = n - 1;
          return prune_inst_30_27_14_19_tsni(tmp3, x)
        });
        tmp2 = map_inst_30_27_14_19_20_tsni(lambda1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_30_27_37_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
map_inst_30_27_14_7_8_tsni = function map_inst_30_27_14_7_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_30_27_14_19_tsni = function prune_inst_30_27_14_19_tsni(n, t) {
  return runtime.safeCall(t(n))
};
map_inst_30_27_14_19_20_tsni = function map_inst_30_27_14_19_20_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_30_28_tsni = function best_inst_30_28_tsni(f, bs, ss) {
  let best_, param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      best_ = function best_(b1, s1, ls1, ls2) {
        let param02, param12, b_, bs2, param03, param13, s_, ss2, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          if (ls2 instanceof NofibPrelude.Nil.class) {
            _deforest_Deforest_Arr_2_0 = b1;
            _deforest_Deforest_Arr_2_1 = s1;
            arr = (f1, g, opposition) => {
              let first1, first0, boardd, eval1, arr1, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
              first0 = _deforest_Deforest_Arr_2_0;
              first1 = _deforest_Deforest_Arr_2_1;
              boardd = first0;
              eval1 = first1;
              _deforest_Deforest_Arr_2_01 = boardd;
              _deforest_Deforest_Arr_2_11 = eval1;
              arr1 = () => {
                let first11, first01, b2, e, tmp2, tmp3, tmp4, tmp5;
                first01 = _deforest_Deforest_Arr_2_01;
                first11 = _deforest_Deforest_Arr_2_11;
                b2 = first01;
                e = first11;
                tmp2 = minimax.showEvaluation(e);
                tmp3 = NofibPrelude.nofibStringToList("\n");
                tmp4 = minimax.showBoard(b2);
                tmp5 = NofibPrelude.append(tmp3, tmp4);
                return NofibPrelude.append(tmp2, tmp5)
              };
              tmp1 = alternate_inst_30_tsni(opposition, g, f1, boardd);
              _deforest_Cons_head = arr1;
              _deforest_Cons_tail = tmp1;
              return (f2) => {
                let param04, param14, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
                param04 = _deforest_Cons_head;
                param14 = _deforest_Cons_tail;
                x = param04;
                xs = param14;
                tmp2 = runtime.safeCall(f2(x));
                tmp3 = map_inst_29_tsni(f2, xs);
                _deforest_Cons_head1 = tmp2;
                _deforest_Cons_tail1 = tmp3;
                return () => {
                  let param05, param15, x1, xs1, tmp4;
                  param05 = _deforest_Cons_head1;
                  param15 = _deforest_Cons_tail1;
                  x1 = param05;
                  xs1 = param15;
                  tmp4 = concat_inst_32_tsni(xs1);
                  return NofibPrelude.append(x1, tmp4)
                }
              }
            };
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param02 = ls1.head;
          param12 = ls1.tail;
          b_ = param02;
          bs2 = param12;
          if (ls2 instanceof NofibPrelude.Cons.class) {
            param03 = ls2.head;
            param13 = ls2.tail;
            s_ = param03;
            ss2 = param13;
            tmp = runtime.safeCall(f(s1, s_));
            scrut = minimax.evaluationEq(s1, tmp);
            if (scrut === true) {
              return best_(b1, s1, bs2, ss2)
            } else {
              return best_(b_, s_, bs2, ss2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return best_(b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prog_inst_31_tsni = function prog_inst_31_tsni(input) {
  let board, testBoard, game, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
  board = function board(x) {
    let scrut;
    scrut = x === "doesn't happen";
    if (scrut === true) {
      return NofibPrelude.append(testBoard, testBoard)
    } else {
      return testBoard
    }
  };
  tmp = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(minimax.O, tmp);
  tmp2 = NofibPrelude.Cons(minimax.Empty, tmp1);
  tmp3 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp4 = NofibPrelude.Cons(minimax.X, tmp3);
  tmp5 = NofibPrelude.Cons(minimax.Empty, tmp4);
  tmp6 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp7 = NofibPrelude.Cons(minimax.Empty, tmp6);
  tmp8 = NofibPrelude.Cons(minimax.Empty, tmp7);
  tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
  tmp10 = NofibPrelude.Cons(tmp5, tmp9);
  tmp11 = NofibPrelude.Cons(tmp2, tmp10);
  testBoard = tmp11;
  tmp12 = board(input);
  tmp13 = alternate_inst_31_30_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
  game = tmp13;
  tmp14 = NofibPrelude.nofibStringToList("OXO\n");
  tmp15 = map_inst_31_29_tsni(showMove_inst_31_41_tsni, game);
  tmp16 = concat_inst_31_32_tsni(tmp15);
  return append_inst_31_33_tsni(tmp14, tmp16)
};
alternate_inst_31_30_tsni = function alternate_inst_31_30_tsni(player, f, g, board) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda;
  scrut2 = fullBoard_inst_31_30_22_tsni(board);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_31_29_tsni(f1)
    }
  } else {
    tmp = static_inst_31_30_23_tsni(board);
    scrut1 = evaluationEq_inst_31_30_39_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_29_tsni(f1)
      }
    } else {
      tmp1 = static_inst_31_30_25_tsni(board);
      scrut = evaluationEq_inst_31_30_40_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_31_29_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_31_30_26_tsni(player, board);
        lambda = (undefined, function (x) {
          return bestMove_inst_31_30_27_tsni(opposition, g, f, x)
        });
        scores = NofibPrelude.map(lambda, possibles);
        boardd_eval = best_inst_31_30_28_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
best_inst_31_30_28_tsni = function best_inst_31_30_28_tsni(f, bs, ss) {
  let best_, param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      best_ = function best_(b1, s1, ls1, ls2) {
        let param02, param12, b_, bs2, param03, param13, s_, ss2, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          if (ls2 instanceof NofibPrelude.Nil.class) {
            _deforest_Deforest_Arr_2_0 = b1;
            _deforest_Deforest_Arr_2_1 = s1;
            arr = (f1, g, opposition) => {
              let first1, first0, boardd, eval1, arr1, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
              first0 = _deforest_Deforest_Arr_2_0;
              first1 = _deforest_Deforest_Arr_2_1;
              boardd = first0;
              eval1 = first1;
              _deforest_Deforest_Arr_2_01 = boardd;
              _deforest_Deforest_Arr_2_11 = eval1;
              arr1 = () => {
                let first11, first01, b2, e, tmp2, tmp3, tmp4, tmp5;
                first01 = _deforest_Deforest_Arr_2_01;
                first11 = _deforest_Deforest_Arr_2_11;
                b2 = first01;
                e = first11;
                tmp2 = minimax.showEvaluation(e);
                tmp3 = NofibPrelude.nofibStringToList("\n");
                tmp4 = minimax.showBoard(b2);
                tmp5 = NofibPrelude.append(tmp3, tmp4);
                return NofibPrelude.append(tmp2, tmp5)
              };
              tmp1 = alternate_inst_31_30_tsni(opposition, g, f1, boardd);
              _deforest_Cons_head = arr1;
              _deforest_Cons_tail = tmp1;
              return (f2) => {
                let param04, param14, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
                param04 = _deforest_Cons_head;
                param14 = _deforest_Cons_tail;
                x = param04;
                xs = param14;
                tmp2 = runtime.safeCall(f2(x));
                tmp3 = map_inst_31_29_tsni(f2, xs);
                _deforest_Cons_head1 = tmp2;
                _deforest_Cons_tail1 = tmp3;
                return () => {
                  let param05, param15, x1, xs1, tmp4;
                  param05 = _deforest_Cons_head1;
                  param15 = _deforest_Cons_tail1;
                  x1 = param05;
                  xs1 = param15;
                  tmp4 = concat_inst_31_32_tsni(xs1);
                  return append_inst_31_32_2_tsni(x1, tmp4)
                }
              }
            };
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param02 = ls1.head;
          param12 = ls1.tail;
          b_ = param02;
          bs2 = param12;
          if (ls2 instanceof NofibPrelude.Cons.class) {
            param03 = ls2.head;
            param13 = ls2.tail;
            s_ = param03;
            ss2 = param13;
            tmp = runtime.safeCall(f(s1, s_));
            scrut = minimax.evaluationEq(s1, tmp);
            if (scrut === true) {
              return best_(b1, s1, bs2, ss2)
            } else {
              return best_(b_, s_, bs2, ss2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return best_(b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bestMove_inst_31_30_27_tsni = function bestMove_inst_31_30_27_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_31_30_27_14_tsni(p, b);
  tmp1 = mapTree_inst_31_30_27_37_tsni(static_inst_31_30_27_11_tsni, tmp);
  tmp2 = cropTree_inst_31_30_27_10_tsni(tmp1);
  return mise_inst_31_30_27_9_tsni(f, g, tmp2)
};
searchTree_inst_31_30_27_14_tsni = function searchTree_inst_31_30_27_14_tsni(p, board) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (x) {
    return newPositions_inst_31_30_27_14_15_tsni(p, x)
  });
  lambda1 = (undefined, function (x) {
    let tmp1;
    tmp1 = minimax.opposite(p);
    return newPositions_inst_31_30_27_14_17_tsni(tmp1, x)
  });
  tmp = repTree_inst_31_30_27_14_7_tsni(lambda, lambda1, board);
  return prune_inst_31_30_27_14_19_tsni(5, tmp)
};
repTree_inst_31_30_27_14_7_tsni = function repTree_inst_31_30_27_14_7_tsni(f, g, a) {
  let tmp, tmp1, lambda, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda = (undefined, function (x) {
    return repTree_inst_31_30_27_14_7_tsni(g, f, x)
  });
  tmp1 = map_inst_31_30_27_14_7_8_tsni(lambda, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a1 = a1;
      _deforest_Branch_cs1 = (f1) => {
        return match_xs_arm_Nil_inst_31_30_27_37_38_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_31_30_27_37_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda1 = (undefined, function (x) {
          let tmp3;
          tmp3 = n - 1;
          return prune_inst_31_30_27_14_19_tsni(tmp3, x)
        });
        tmp2 = map_inst_31_30_27_14_19_20_tsni(lambda1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_31_30_27_37_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
map_inst_31_30_27_14_7_8_tsni = function map_inst_31_30_27_14_7_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
newPositions_inst_31_30_27_14_17_tsni = function newPositions_inst_31_30_27_14_17_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_17_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_31_30_27_14_17_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_31_30_27_14_17_3_tsni(lambda, tmp3);
  return concat_inst_31_30_27_14_17_18_tsni(tmp4)
};
map_inst_31_30_27_14_17_3_tsni = function map_inst_31_30_27_14_17_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_27_14_17_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_30_27_14_17_18_tsni(xs2);
      return append_inst_31_30_27_14_17_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_30_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_31_30_27_14_17_16_tsni = function placePiece_inst_31_30_27_14_17_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_17_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_17_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
concat_inst_31_30_27_14_17_18_tsni = function concat_inst_31_30_27_14_17_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_30_27_14_17_18_2_tsni = function append_inst_31_30_27_14_17_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
newPositions_inst_31_30_27_14_15_tsni = function newPositions_inst_31_30_27_14_15_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_27_14_15_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_31_30_27_14_15_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_31_30_27_14_15_3_tsni(lambda, tmp3);
  return concat_inst_31_30_27_14_15_18_tsni(tmp4)
};
map_inst_31_30_27_14_15_3_tsni = function map_inst_31_30_27_14_15_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_27_14_15_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_30_27_14_15_18_tsni(xs2);
      return append_inst_31_30_27_14_15_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_30_27_14_7_8_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_31_30_27_14_15_16_tsni = function placePiece_inst_31_30_27_14_15_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_27_14_15_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_27_14_15_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
concat_inst_31_30_27_14_15_18_tsni = function concat_inst_31_30_27_14_15_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_30_27_14_15_18_2_tsni = function append_inst_31_30_27_14_15_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
static_inst_31_30_27_11_tsni = function static_inst_31_30_27_11_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_31_30_27_11_12_tsni(board, x)
  });
  tmp = map_inst_31_30_27_11_5_tsni(lambda, minimax.wins);
  return interpret_inst_31_30_27_11_24_tsni(0, tmp)
};
map_inst_31_30_27_11_5_tsni = function map_inst_31_30_27_11_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_27_11_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
score_inst_31_30_27_11_12_tsni = function score_inst_31_30_27_11_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_31_30_27_11_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_31_30_27_11_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_31_30_27_11_12_13_tsni(tmp2)
};
map2_inst_31_30_27_11_12_4_tsni = function map2_inst_31_30_27_11_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_31_30_27_11_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_31_30_27_11_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_31_30_27_11_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_30_27_11_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_31_30_27_11_12_13_tsni = function eval_inst_31_30_27_11_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_31_30_27_11_24_tsni(tmp1, ls)
      }
    }
  }
};
prune_inst_31_30_27_14_19_tsni = function prune_inst_31_30_27_14_19_tsni(n, t) {
  return runtime.safeCall(t(n))
};
map_inst_31_30_27_14_19_20_tsni = function map_inst_31_30_27_14_19_20_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_31_30_27_9_tsni = function mise_inst_31_30_27_9_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
map_inst_31_30_27_9_6_tsni = function map_inst_31_30_27_9_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_27_9_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_31_30_27_9_36_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cropTree_inst_31_30_27_10_tsni = function cropTree_inst_31_30_27_10_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_31_30_27_9_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_31_30_27_10_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_31_30_27_9_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_31_30_27_9_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
newPositions_inst_31_30_26_tsni = function newPositions_inst_31_30_26_tsni(piece, board) {
  let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1))
  };
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (lscomp11) => {
    return NofibPrelude.Nil
  };
  tmp = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni1(lscomp11, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni1(lscomp11, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (lscomp11) => {
    return match_ls_arm_Cons_inst_31_30_26_tsni1(lscomp11, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1(tmp2);
  lambda = (undefined, function (pos) {
    return placePiece_inst_31_30_26_16_tsni(piece, board, pos)
  });
  tmp4 = map_inst_31_30_26_3_tsni(lambda, tmp3);
  return concat_inst_31_30_26_18_tsni(tmp4)
};
map_inst_31_30_26_3_tsni = function map_inst_31_30_26_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_26_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_30_26_18_tsni(xs2);
      return append_inst_31_30_26_18_2_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
placePiece_inst_31_30_26_16_tsni = function placePiece_inst_31_30_26_16_tsni(p, board, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_31_30_26_18_2_tsni(ys)
    }
  } else {
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_26_18_2_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_26_18_2_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_31_30_26_18_2_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_31_30_26_18_2_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
};
static_inst_31_30_25_tsni = function static_inst_31_30_25_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_31_30_25_12_tsni(board, x)
  });
  tmp = map_inst_31_30_25_5_tsni(lambda, minimax.wins);
  return interpret_inst_31_30_25_24_tsni(0, tmp)
};
score_inst_31_30_25_12_tsni = function score_inst_31_30_25_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_31_30_25_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_31_30_25_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_31_30_25_12_13_tsni(tmp2)
};
map2_inst_31_30_25_12_4_tsni = function map2_inst_31_30_25_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_31_30_25_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_31_30_25_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_31_30_25_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_30_25_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_31_30_25_5_tsni = function map_inst_31_30_25_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_25_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
eval_inst_31_30_25_12_13_tsni = function eval_inst_31_30_25_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_31_30_25_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_31_30_25_24_tsni = function interpret_inst_31_30_25_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_31_30_23_tsni = function static_inst_31_30_23_tsni(board) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    return score_inst_31_30_23_12_tsni(board, x)
  });
  tmp = map_inst_31_30_23_5_tsni(lambda, minimax.wins);
  return interpret_inst_31_30_23_24_tsni(0, tmp)
};
score_inst_31_30_23_12_tsni = function score_inst_31_30_23_12_tsni(board, win) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (x, y) {
    return minimax.map2(minimax.scorePiece, x, y)
  });
  tmp = map2_inst_31_30_23_12_4_tsni(lambda, board, win);
  tmp1 = map_inst_31_30_23_12_35_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_31_30_23_12_13_tsni(tmp2)
};
map2_inst_31_30_23_12_4_tsni = function map2_inst_31_30_23_12_4_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_31_30_23_12_35_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_31_30_23_12_4_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_31_30_23_12_35_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_30_23_12_35_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_31_30_23_5_tsni = function map_inst_31_30_23_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_23_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
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
    throw new globalThis.Error("match error");
  }
};
eval_inst_31_30_23_12_13_tsni = function eval_inst_31_30_23_12_13_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_31_30_23_24_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_31_30_23_24_tsni = function interpret_inst_31_30_23_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
fullBoard_inst_31_30_22_tsni = function fullBoard_inst_31_30_22_tsni(b) {
  let tmp, tmp1, lambda;
  tmp = concat_inst_31_30_22_1_tsni(b);
  lambda = (undefined, function (x) {
    let tmp2;
    tmp2 = minimax.eqPiece(x, minimax.Empty);
    return Predef.not(tmp2)
  });
  tmp1 = map_inst_31_30_22_0_tsni(lambda, tmp);
  return andd_inst_31_30_22_34_tsni(tmp1)
};
concat_inst_31_30_22_1_tsni = function concat_inst_31_30_22_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_31_30_22_1_tsni(xs);
    return append_inst_31_30_22_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_31_30_22_1_2_tsni = function append_inst_31_30_22_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_30_22_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_31_30_22_0_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_31_30_22_34_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_31_30_22_0_tsni = function map_inst_31_30_22_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_29_tsni = function map_inst_31_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_31_32_tsni = function concat_inst_31_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_32_2_tsni = function append_inst_31_32_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_32_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_42_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_31_33_tsni = function append_inst_31_33_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_33_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_42_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
andd_inst_34_tsni = function andd_inst_34_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_18_tsni = function concat_inst_18_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_35_tsni = function map_inst_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_24_tsni = function interpret_inst_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
foldr_inst_36_tsni = function foldr_inst_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prune_inst_19_tsni = function prune_inst_19_tsni(n, t) {
  return runtime.safeCall(t(n))
};
map_inst_19_20_tsni = function map_inst_19_20_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_9_36_tsni = function foldr_inst_9_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_11_12_35_tsni = function map_inst_11_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_11_24_tsni = function interpret_inst_11_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_37_tsni = function mapTree_inst_37_tsni(f, t) {
  return runtime.safeCall(t(f))
};
map_inst_37_38_tsni = function map_inst_37_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
andd_inst_21_22_34_tsni = function andd_inst_21_22_34_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_21_23_12_35_tsni = function map_inst_21_23_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_21_39_tsni = function evaluationEq_inst_21_39_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_21_25_12_35_tsni = function map_inst_21_25_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_21_40_tsni = function evaluationEq_inst_21_40_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_21_26_18_tsni = function concat_inst_21_26_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_26_18_2_tsni = function append_inst_21_26_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_21_27_9_36_tsni = function foldr_inst_21_27_9_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_21_27_11_12_35_tsni = function map_inst_21_27_11_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_21_27_11_24_tsni = function interpret_inst_21_27_11_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_21_27_37_tsni = function mapTree_inst_21_27_37_tsni(f, t) {
  return runtime.safeCall(t(f))
};
map_inst_21_27_37_38_tsni = function map_inst_21_27_37_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_26_18_tsni = function concat_inst_26_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_26_18_2_tsni = function append_inst_26_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_25_12_35_tsni = function map_inst_25_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_40_tsni = function evaluationEq_inst_40_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_23_12_35_tsni = function map_inst_23_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_39_tsni = function evaluationEq_inst_39_tsni(x, y) {
  return runtime.safeCall(x(y))
};
andd_inst_22_34_tsni = function andd_inst_22_34_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_32_tsni = function concat_inst_32_tsni(ls) {
  return runtime.safeCall(ls())
};
andd_inst_30_22_34_tsni = function andd_inst_30_22_34_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_30_23_12_35_tsni = function map_inst_30_23_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_30_39_tsni = function evaluationEq_inst_30_39_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_30_25_12_35_tsni = function map_inst_30_25_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_30_40_tsni = function evaluationEq_inst_30_40_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_30_26_18_tsni = function concat_inst_30_26_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_26_18_2_tsni = function append_inst_30_26_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_30_27_9_36_tsni = function foldr_inst_30_27_9_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_30_27_11_12_35_tsni = function map_inst_30_27_11_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_30_27_11_24_tsni = function interpret_inst_30_27_11_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_30_27_37_tsni = function mapTree_inst_30_27_37_tsni(f, t) {
  return runtime.safeCall(t(f))
};
map_inst_30_27_37_38_tsni = function map_inst_30_27_37_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
showMove_inst_41_tsni = function showMove_inst_41_tsni(m) {
  return runtime.safeCall(m())
};
interpret_inst_31_30_27_11_24_tsni = function interpret_inst_31_30_27_11_24_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_31_30_27_11_12_35_tsni = function map_inst_31_30_27_11_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_31_30_27_37_tsni = function mapTree_inst_31_30_27_37_tsni(f, t) {
  return runtime.safeCall(t(f))
};
map_inst_31_30_27_37_38_tsni = function map_inst_31_30_27_37_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_31_30_27_9_36_tsni = function foldr_inst_31_30_27_9_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_31_30_26_18_tsni = function concat_inst_31_30_26_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_30_26_18_2_tsni = function append_inst_31_30_26_18_2_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_31_30_25_12_35_tsni = function map_inst_31_30_25_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_31_30_40_tsni = function evaluationEq_inst_31_30_40_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_31_30_23_12_35_tsni = function map_inst_31_30_23_12_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_31_30_39_tsni = function evaluationEq_inst_31_30_39_tsni(x, y) {
  return runtime.safeCall(x(y))
};
andd_inst_31_30_22_34_tsni = function andd_inst_31_30_22_34_tsni(ls) {
  return runtime.safeCall(ls())
};
showMove_inst_31_41_tsni = function showMove_inst_31_41_tsni(m) {
  return runtime.safeCall(m())
};
nofibListToString_inst_42_tsni = function nofibListToString_inst_42_tsni(ls) {
  return runtime.safeCall(ls())
};
(class minimax {
  static {
    minimax1 = minimax;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105;
    this.Piece = class Piece {
      constructor() {}
      toString() { return "Piece"; }
    };
    const X$class = class X extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "X"; }
    };
    this.X = new X$class;
    this.X.class = X$class;
    const O$class = class O extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "O"; }
    };
    this.O = new O$class;
    this.O.class = O$class;
    const Empty$class = class Empty extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "Empty"; }
    };
    this.Empty = new Empty$class;
    this.Empty.class = Empty$class;
    this.Evaluation = class Evaluation {
      constructor() {}
      toString() { return "Evaluation"; }
    };
    const XWin$class = class XWin extends minimax.Evaluation {
      constructor() {
        super();
      }
      toString() { return "XWin"; }
    };
    this.XWin = new XWin$class;
    this.XWin.class = XWin$class;
    const OWin$class = class OWin extends minimax.Evaluation {
      constructor() {
        super();
      }
      toString() { return "OWin"; }
    };
    this.OWin = new OWin$class;
    this.OWin.class = OWin$class;
    this.Score = function Score(i1) {
      return new Score.class(i1);
    };
    this.Score.class = class Score extends minimax.Evaluation {
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return "Score(" + runtime.render(this.i) + ")"; }
    };
    this.Branch = function Branch(a1, cs1) {
      return new Branch.class(a1, cs1);
    };
    this.Branch.class = class Branch {
      constructor(a, cs) {
        this.a = a;
        this.cs = cs;
      }
      toString() { return "Branch(" + runtime.render(this.a) + ", " + runtime.render(this.cs) + ")"; }
    };
    tmp = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    tmp3 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(0, tmp3);
    tmp5 = NofibPrelude.Cons(0, tmp4);
    tmp6 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(0, tmp6);
    tmp8 = NofibPrelude.Cons(0, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    this.win1 = tmp11;
    tmp12 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(0, tmp12);
    tmp14 = NofibPrelude.Cons(0, tmp13);
    tmp15 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(1, tmp15);
    tmp17 = NofibPrelude.Cons(1, tmp16);
    tmp18 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp19 = NofibPrelude.Cons(0, tmp18);
    tmp20 = NofibPrelude.Cons(0, tmp19);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp17, tmp21);
    tmp23 = NofibPrelude.Cons(tmp14, tmp22);
    this.win2 = tmp23;
    tmp24 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp25 = NofibPrelude.Cons(0, tmp24);
    tmp26 = NofibPrelude.Cons(0, tmp25);
    tmp27 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp28 = NofibPrelude.Cons(0, tmp27);
    tmp29 = NofibPrelude.Cons(0, tmp28);
    tmp30 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(1, tmp30);
    tmp32 = NofibPrelude.Cons(1, tmp31);
    tmp33 = NofibPrelude.Cons(tmp32, NofibPrelude.Nil);
    tmp34 = NofibPrelude.Cons(tmp29, tmp33);
    tmp35 = NofibPrelude.Cons(tmp26, tmp34);
    this.win3 = tmp35;
    tmp36 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp37 = NofibPrelude.Cons(0, tmp36);
    tmp38 = NofibPrelude.Cons(1, tmp37);
    tmp39 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(0, tmp39);
    tmp41 = NofibPrelude.Cons(1, tmp40);
    tmp42 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(0, tmp42);
    tmp44 = NofibPrelude.Cons(1, tmp43);
    tmp45 = NofibPrelude.Cons(tmp44, NofibPrelude.Nil);
    tmp46 = NofibPrelude.Cons(tmp41, tmp45);
    tmp47 = NofibPrelude.Cons(tmp38, tmp46);
    this.win4 = tmp47;
    tmp48 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(1, tmp48);
    tmp50 = NofibPrelude.Cons(0, tmp49);
    tmp51 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(1, tmp51);
    tmp53 = NofibPrelude.Cons(0, tmp52);
    tmp54 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp55 = NofibPrelude.Cons(1, tmp54);
    tmp56 = NofibPrelude.Cons(0, tmp55);
    tmp57 = NofibPrelude.Cons(tmp56, NofibPrelude.Nil);
    tmp58 = NofibPrelude.Cons(tmp53, tmp57);
    tmp59 = NofibPrelude.Cons(tmp50, tmp58);
    this.win5 = tmp59;
    tmp60 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(0, tmp60);
    tmp62 = NofibPrelude.Cons(0, tmp61);
    tmp63 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp64 = NofibPrelude.Cons(0, tmp63);
    tmp65 = NofibPrelude.Cons(0, tmp64);
    tmp66 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp67 = NofibPrelude.Cons(0, tmp66);
    tmp68 = NofibPrelude.Cons(0, tmp67);
    tmp69 = NofibPrelude.Cons(tmp68, NofibPrelude.Nil);
    tmp70 = NofibPrelude.Cons(tmp65, tmp69);
    tmp71 = NofibPrelude.Cons(tmp62, tmp70);
    this.win6 = tmp71;
    tmp72 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp73 = NofibPrelude.Cons(0, tmp72);
    tmp74 = NofibPrelude.Cons(1, tmp73);
    tmp75 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(1, tmp75);
    tmp77 = NofibPrelude.Cons(0, tmp76);
    tmp78 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp79 = NofibPrelude.Cons(0, tmp78);
    tmp80 = NofibPrelude.Cons(0, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp77, tmp81);
    tmp83 = NofibPrelude.Cons(tmp74, tmp82);
    this.win7 = tmp83;
    tmp84 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp85 = NofibPrelude.Cons(0, tmp84);
    tmp86 = NofibPrelude.Cons(0, tmp85);
    tmp87 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp88 = NofibPrelude.Cons(1, tmp87);
    tmp89 = NofibPrelude.Cons(0, tmp88);
    tmp90 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(0, tmp90);
    tmp92 = NofibPrelude.Cons(1, tmp91);
    tmp93 = NofibPrelude.Cons(tmp92, NofibPrelude.Nil);
    tmp94 = NofibPrelude.Cons(tmp89, tmp93);
    tmp95 = NofibPrelude.Cons(tmp86, tmp94);
    this.win8 = tmp95;
    tmp96 = NofibPrelude.Cons(minimax.win8, NofibPrelude.Nil);
    tmp97 = NofibPrelude.Cons(minimax.win7, tmp96);
    tmp98 = NofibPrelude.Cons(minimax.win6, tmp97);
    tmp99 = NofibPrelude.Cons(minimax.win5, tmp98);
    tmp100 = NofibPrelude.Cons(minimax.win4, tmp99);
    tmp101 = NofibPrelude.Cons(minimax.win3, tmp100);
    tmp102 = NofibPrelude.Cons(minimax.win2, tmp101);
    tmp103 = NofibPrelude.Cons(minimax.win1, tmp102);
    this.wins = tmp103;
    tmp104 = NofibPrelude.replicate(3, minimax.Empty);
    tmp105 = NofibPrelude.replicate(3, tmp104);
    this.initialBoard = tmp105;
  }
  static andd(ls) {
    let param0, param1, b, bs, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      b = param0;
      bs = param1;
      tmp = minimax.andd(bs);
      return b && tmp
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static eqPiece(p1, p2) {
    if (p1 instanceof minimax.X.class) {
      if (p2 instanceof minimax.X.class) {
        return true
      } else {
        return false
      }
    } else if (p1 instanceof minimax.O.class) {
      if (p2 instanceof minimax.O.class) {
        return true
      } else {
        return false
      }
    } else if (p1 instanceof minimax.Empty.class) {
      if (p2 instanceof minimax.Empty.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static evaluationEq(x, y) {
    let param0, i, param01, j, scrut;
    if (x instanceof minimax.XWin.class) {
      if (y instanceof minimax.XWin.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof minimax.OWin.class) {
      if (y instanceof minimax.OWin.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof minimax.Score.class) {
      param0 = x.i;
      i = param0;
      if (y instanceof minimax.Score.class) {
        param01 = y.i;
        j = param01;
        scrut = i === j;
        if (scrut === true) {
          return true
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
  static showEvaluation(e) {
    let param0, i, tmp, tmp1, tmp2;
    if (e instanceof minimax.XWin.class) {
      return NofibPrelude.nofibStringToList("XWin")
    } else if (e instanceof minimax.OWin.class) {
      return NofibPrelude.nofibStringToList("OWin")
    } else if (e instanceof minimax.Score.class) {
      param0 = e.i;
      i = param0;
      tmp = NofibPrelude.nofibStringToList("Score ");
      tmp1 = NofibPrelude.stringOfInt(i);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showPiece(p) {
    if (p instanceof minimax.X.class) {
      return NofibPrelude.nofibStringToList("X")
    } else if (p instanceof minimax.O.class) {
      return NofibPrelude.nofibStringToList("O")
    } else if (p instanceof minimax.Empty.class) {
      return NofibPrelude.nofibStringToList(" ")
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showRow(ps) {
    let param0, param1, p11, param01, param11, p21, param02, param12, p3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (ps instanceof NofibPrelude.Cons.class) {
      param0 = ps.head;
      param1 = ps.tail;
      p11 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        p21 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          p3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            tmp = minimax.showPiece(p11);
            tmp1 = NofibPrelude.nofibStringToList("|");
            tmp2 = minimax.showPiece(p21);
            tmp3 = NofibPrelude.nofibStringToList("|");
            tmp4 = minimax.showPiece(p3);
            tmp5 = NofibPrelude.append(tmp3, tmp4);
            tmp6 = NofibPrelude.append(tmp2, tmp5);
            tmp7 = NofibPrelude.append(tmp1, tmp6);
            return NofibPrelude.append(tmp, tmp7)
          } else {
            throw new globalThis.Error("match error");
          }
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
  static showBoard(rs) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (rs instanceof NofibPrelude.Cons.class) {
      param0 = rs.head;
      param1 = rs.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            tmp = minimax.showRow(r1);
            tmp1 = NofibPrelude.nofibStringToList("\n------\n");
            tmp2 = minimax.showRow(r2);
            tmp3 = NofibPrelude.nofibStringToList("\n------\n");
            tmp4 = minimax.showRow(r3);
            tmp5 = NofibPrelude.nofibStringToList("\n\n");
            tmp6 = NofibPrelude.append(tmp4, tmp5);
            tmp7 = NofibPrelude.append(tmp3, tmp6);
            tmp8 = NofibPrelude.append(tmp2, tmp7);
            tmp9 = NofibPrelude.append(tmp1, tmp8);
            return NofibPrelude.append(tmp, tmp9)
          } else {
            throw new globalThis.Error("match error");
          }
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
  static insert(p3, ps1, i) {
    let param0, param1, p11, param01, param11, p21, param02, param12, p31, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (ps1 instanceof NofibPrelude.Cons.class) {
      param0 = ps1.head;
      param1 = ps1.tail;
      p11 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        p21 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          p31 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            scrut2 = i === 1;
            if (scrut2 === true) {
              tmp = NofibPrelude.Cons(p31, NofibPrelude.Nil);
              tmp1 = NofibPrelude.Cons(p21, tmp);
              return NofibPrelude.Cons(p3, tmp1)
            } else {
              scrut1 = i === 2;
              if (scrut1 === true) {
                tmp2 = NofibPrelude.Cons(p31, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(p3, tmp2);
                return NofibPrelude.Cons(p11, tmp3)
              } else {
                scrut = i === 3;
                if (scrut === true) {
                  tmp4 = NofibPrelude.Cons(p3, NofibPrelude.Nil);
                  tmp5 = NofibPrelude.Cons(p21, tmp4);
                  return NofibPrelude.Cons(p11, tmp5)
                } else {
                  throw new globalThis.Error("match error");
                }
              }
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
  static empty_(x1, r) {
    let scrut, param0, param1, param01, param11, param02, param12, scrut1, scrut2;
    scrut2 = x1 === 1;
    if (scrut2 === true) {
      if (r instanceof NofibPrelude.Cons.class) {
        param0 = r.head;
        param1 = r.tail;
        if (param0 instanceof minimax.Empty.class) {
          if (param1 instanceof NofibPrelude.Cons.class) {
            param01 = param1.head;
            param11 = param1.tail;
            if (param11 instanceof NofibPrelude.Cons.class) {
              param02 = param11.head;
              param12 = param11.tail;
              if (param12 instanceof NofibPrelude.Nil.class) {
                return true
              } else {
                scrut1 = x1 === 2;
                if (scrut1 === true) {
                  if (param01 instanceof minimax.Empty.class) {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  } else {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    if (param02 instanceof minimax.Empty.class) {
                      return false
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                }
              }
            } else {
              scrut1 = x1 === 2;
              if (scrut1 === true) {
                if (param01 instanceof minimax.Empty.class) {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  return false
                } else {
                  return false
                }
              }
            }
          } else {
            scrut1 = x1 === 2;
            if (scrut1 === true) {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            }
          }
        } else {
          scrut1 = x1 === 2;
          if (scrut1 === true) {
            if (param1 instanceof NofibPrelude.Cons.class) {
              param01 = param1.head;
              param11 = param1.tail;
              if (param01 instanceof minimax.Empty.class) {
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param12 instanceof NofibPrelude.Nil.class) {
                    return true
                  } else {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  if (param11 instanceof NofibPrelude.Cons.class) {
                    param02 = param11.head;
                    param12 = param11.tail;
                    if (param02 instanceof minimax.Empty.class) {
                      if (param12 instanceof NofibPrelude.Nil.class) {
                        return true
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
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            }
          } else {
            scrut = x1 === 3;
            if (scrut === true) {
              if (param1 instanceof NofibPrelude.Cons.class) {
                param01 = param1.head;
                param11 = param1.tail;
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param02 instanceof minimax.Empty.class) {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      return true
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
        scrut1 = x1 === 2;
        if (scrut1 === true) {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        } else {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        }
      }
    } else {
      scrut1 = x1 === 2;
      if (scrut1 === true) {
        if (r instanceof NofibPrelude.Cons.class) {
          param0 = r.head;
          param1 = r.tail;
          if (param1 instanceof NofibPrelude.Cons.class) {
            param01 = param1.head;
            param11 = param1.tail;
            if (param01 instanceof minimax.Empty.class) {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param02 = param11.head;
                param12 = param11.tail;
                if (param12 instanceof NofibPrelude.Nil.class) {
                  return true
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    if (param02 instanceof minimax.Empty.class) {
                      return false
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  return false
                } else {
                  return false
                }
              }
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param02 instanceof minimax.Empty.class) {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      return true
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
          } else {
            scrut = x1 === 3;
            if (scrut === true) {
              return false
            } else {
              return false
            }
          }
        } else {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        }
      } else {
        scrut = x1 === 3;
        if (scrut === true) {
          if (r instanceof NofibPrelude.Cons.class) {
            param0 = r.head;
            param1 = r.tail;
            if (param1 instanceof NofibPrelude.Cons.class) {
              param01 = param1.head;
              param11 = param1.tail;
              if (param11 instanceof NofibPrelude.Cons.class) {
                param02 = param11.head;
                param12 = param11.tail;
                if (param02 instanceof minimax.Empty.class) {
                  if (param12 instanceof NofibPrelude.Nil.class) {
                    return true
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
  } 
  static empty(pos, board) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x2, x3, x4;
    if (board instanceof NofibPrelude.Cons.class) {
      param0 = board.head;
      param1 = board.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x4 = first1;
                return minimax.empty_(x4, r1)
              } else if (first0 === 2) {
                x3 = first1;
                return minimax.empty_(x3, r2)
              } else if (first0 === 3) {
                x2 = first1;
                return minimax.empty_(x2, r3)
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
  static placePiece(p4, board1, pos1) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x2, x3, x4, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    tmp = minimax.empty(pos1, board1);
    scrut = Predef.not(tmp);
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      if (board1 instanceof NofibPrelude.Cons.class) {
        param0 = board1.head;
        param1 = board1.tail;
        r1 = param0;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param01 = param1.head;
          param11 = param1.tail;
          r2 = param01;
          if (param11 instanceof NofibPrelude.Cons.class) {
            param02 = param11.head;
            param12 = param11.tail;
            r3 = param02;
            if (param12 instanceof NofibPrelude.Nil.class) {
              if (globalThis.Array.isArray(pos1) && pos1.length === 2) {
                first0 = pos1[0];
                first1 = pos1[1];
                if (first0 === 1) {
                  x4 = first1;
                  tmp1 = minimax.insert(p4, r1, x4);
                  tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                  tmp3 = NofibPrelude.Cons(r2, tmp2);
                  tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
                } else if (first0 === 2) {
                  x3 = first1;
                  tmp5 = minimax.insert(p4, r2, x3);
                  tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                  tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                  tmp8 = NofibPrelude.Cons(r1, tmp7);
                  return NofibPrelude.Cons(tmp8, NofibPrelude.Nil)
                } else if (first0 === 3) {
                  x2 = first1;
                  tmp9 = minimax.insert(p4, r3, x2);
                  tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                  tmp11 = NofibPrelude.Cons(r2, tmp10);
                  tmp12 = NofibPrelude.Cons(r1, tmp11);
                  return NofibPrelude.Cons(tmp12, NofibPrelude.Nil)
                } else {
                  throw new globalThis.Error("match error");
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
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
  } 
  static fullBoard(b) {
    let tmp, tmp1, lambda;
    tmp = concat_inst_1_tsni(b);
    lambda = (undefined, function (x2) {
      let tmp2;
      tmp2 = minimax.eqPiece(x2, minimax.Empty);
      return Predef.not(tmp2)
    });
    tmp1 = map_inst_0_tsni(lambda, tmp);
    return andd_inst_34_tsni(tmp1)
  } 
  static newPositions(piece, board2) {
    let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, lambda;
    lscomp1 = function lscomp1(ls1) {
      let lscomp2, param0, param1, x2, xs, tmp5, tmp6, tmp7;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        param0 = ls1.head;
        param1 = ls1.tail;
        x2 = param0;
        xs = param1;
        lscomp2 = function lscomp2(ls2) {
          let param01, param11, y1, ys, arr, tmp8;
          if (ls2 instanceof NofibPrelude.Nil.class) {
            return lscomp1(xs)
          } else if (ls2 instanceof NofibPrelude.Cons.class) {
            param01 = ls2.head;
            param11 = ls2.tail;
            y1 = param01;
            ys = param11;
            arr = [
              x2,
              y1
            ];
            tmp8 = lscomp2(ys);
            return NofibPrelude.Cons(arr, tmp8)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp5 = NofibPrelude.Cons(3, NofibPrelude.Nil);
        tmp6 = NofibPrelude.Cons(2, tmp5);
        tmp7 = NofibPrelude.Cons(1, tmp6);
        return lscomp2(tmp7)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = NofibPrelude.Cons(3, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(2, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    tmp3 = lscomp1(tmp2);
    lambda = (undefined, function (pos2) {
      return minimax.placePiece(piece, board2, pos2)
    });
    tmp4 = map_inst_3_tsni(lambda, tmp3);
    return concat_inst_18_tsni(tmp4)
  } 
  static eval(x2) {
    let scrut, scrut1, tmp;
    scrut1 = x2 === 3;
    if (scrut1 === true) {
      return minimax.XWin
    } else {
      tmp = - 3;
      scrut = x2 === tmp;
      if (scrut === true) {
        return minimax.OWin
      } else {
        return runtime.safeCall(minimax.Score(x2))
      }
    }
  } 
  static interpret(x3, l) {
    let param0, param1, param01, y1, ls1, tmp;
    if (l instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(minimax.Score(x3))
    } else if (l instanceof NofibPrelude.Cons.class) {
      param0 = l.head;
      param1 = l.tail;
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        y1 = param01;
        ls1 = param1;
        tmp = x3 + y1;
        return minimax.interpret(tmp, ls1)
      } else if (param0 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param0 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static scorePiece(p5, score) {
    if (p5 instanceof minimax.X.class) {
      return score
    } else if (p5 instanceof minimax.Empty.class) {
      return 0
    } else if (p5 instanceof minimax.O.class) {
      return - score
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static map2(f, xs, ys) {
    let param0, param1, x4, xs1, param01, param11, y1, ys1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x4 = param0;
      xs1 = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        y1 = param01;
        ys1 = param11;
        tmp = runtime.safeCall(f(x4, y1));
        tmp1 = minimax.map2(f, xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else if (ys instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static score(board3, win) {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function (x4, y1) {
      return minimax.map2(minimax.scorePiece, x4, y1)
    });
    tmp = map2_inst_4_tsni(lambda, board3, win);
    tmp1 = map_inst_35_tsni(NofibPrelude.sum, tmp);
    tmp2 = NofibPrelude.sum(tmp1);
    return minimax.eval(tmp2)
  } 
  static static(board4) {
    let tmp, lambda;
    lambda = (undefined, function (x4) {
      return minimax.score(board4, x4)
    });
    tmp = map_inst_5_tsni(lambda, minimax.wins);
    return interpret_inst_24_tsni(0, tmp)
  } 
  static repTree(f1, g, a) {
    let tmp, tmp1, lambda;
    tmp = runtime.safeCall(f1(a));
    lambda = (undefined, function (x4) {
      return minimax.repTree(g, f1, x4)
    });
    tmp1 = NofibPrelude.map(lambda, tmp);
    return minimax.Branch(a, tmp1)
  } 
  static mapTree(f2, t) {
    let param0, param1, a1, l1, tmp, tmp1, lambda;
    if (t instanceof minimax.Branch.class) {
      param0 = t.a;
      param1 = t.cs;
      a1 = param0;
      l1 = param1;
      tmp = runtime.safeCall(f2(a1));
      lambda = (undefined, function (x4) {
        return minimax.mapTree(f2, x4)
      });
      tmp1 = NofibPrelude.map(lambda, l1);
      return minimax.Branch(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static prune(n, t1) {
    let param0, param1, a1, l1, scrut, scrut1, tmp, lambda;
    if (t1 instanceof minimax.Branch.class) {
      param0 = t1.a;
      param1 = t1.cs;
      a1 = param0;
      l1 = param1;
      scrut1 = n === 0;
      if (scrut1 === true) {
        return minimax.Branch(a1, NofibPrelude.Nil)
      } else {
        scrut = n < 0;
        if (scrut === true) {
          throw globalThis.Error("Tree.prune: < 0");
        } else {
          lambda = (undefined, function (x4) {
            let tmp1;
            tmp1 = n - 1;
            return minimax.prune(tmp1, x4)
          });
          tmp = NofibPrelude.map(lambda, l1);
          return minimax.Branch(a1, tmp)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static opposite(p6) {
    if (p6 instanceof minimax.X.class) {
      return minimax.O
    } else if (p6 instanceof minimax.O.class) {
      return minimax.X
    } else {
      throw globalThis.Error("opposite");
    }
  } 
  static best(f3, bs, ss) {
    let best_, param0, param1, b1, bs1, param01, param11, s, ss1;
    if (bs instanceof NofibPrelude.Cons.class) {
      param0 = bs.head;
      param1 = bs.tail;
      b1 = param0;
      bs1 = param1;
      if (ss instanceof NofibPrelude.Cons.class) {
        param01 = ss.head;
        param11 = ss.tail;
        s = param01;
        ss1 = param11;
        best_ = function best_(b2, s1, ls1, ls2) {
          let param02, param12, b_, bs2, param03, param13, s_, ss2, scrut, arr, tmp;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            if (ls2 instanceof NofibPrelude.Nil.class) {
              arr = [
                b2,
                s1
              ];
              return arr
            } else {
              throw new globalThis.Error("match error");
            }
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            param02 = ls1.head;
            param12 = ls1.tail;
            b_ = param02;
            bs2 = param12;
            if (ls2 instanceof NofibPrelude.Cons.class) {
              param03 = ls2.head;
              param13 = ls2.tail;
              s_ = param03;
              ss2 = param13;
              tmp = runtime.safeCall(f3(s1, s_));
              scrut = minimax.evaluationEq(s1, tmp);
              if (scrut === true) {
                return best_(b2, s1, bs2, ss2)
              } else {
                return best_(b_, s_, bs2, ss2)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return best_(b1, s, bs1, ss1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showMove(m) {
    let first1, first0, b1, e1, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(m) && m.length === 2) {
      first0 = m[0];
      first1 = m[1];
      b1 = first0;
      e1 = first1;
      tmp = minimax.showEvaluation(e1);
      tmp1 = NofibPrelude.nofibStringToList("\n");
      tmp2 = minimax.showBoard(b1);
      tmp3 = NofibPrelude.append(tmp1, tmp2);
      return NofibPrelude.append(tmp, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static max_(e1, e2) {
    let param0, x4, param01, y1, scrut;
    if (e1 instanceof minimax.XWin.class) {
      return minimax.XWin
    } else {
      if (e2 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (e2 instanceof minimax.OWin.class) {
        return e1
      } else {
        if (e1 instanceof minimax.OWin.class) {
          return e2
        } else if (e1 instanceof minimax.Score.class) {
          param0 = e1.i;
          x4 = param0;
          if (e2 instanceof minimax.Score.class) {
            param01 = e2.i;
            y1 = param01;
            scrut = x4 > y1;
            if (scrut === true) {
              return runtime.safeCall(minimax.Score(x4))
            } else {
              return runtime.safeCall(minimax.Score(y1))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static min_(e11, e21) {
    let param0, x4, param01, y1, scrut;
    if (e11 instanceof minimax.OWin.class) {
      return minimax.OWin
    } else {
      if (e21 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else if (e21 instanceof minimax.XWin.class) {
        return e11
      } else {
        if (e11 instanceof minimax.XWin.class) {
          return e21
        } else if (e11 instanceof minimax.Score.class) {
          param0 = e11.i;
          x4 = param0;
          if (e21 instanceof minimax.Score.class) {
            param01 = e21.i;
            y1 = param01;
            scrut = x4 < y1;
            if (scrut === true) {
              return runtime.safeCall(minimax.Score(x4))
            } else {
              return runtime.safeCall(minimax.Score(y1))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static mise(f4, g1, t2) {
    let param0, param1, l1, a1, tmp, tmp1, lambda;
    if (t2 instanceof minimax.Branch.class) {
      param0 = t2.a;
      param1 = t2.cs;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return a1
      } else {
        l1 = param1;
        tmp = runtime.safeCall(g1(minimax.OWin, minimax.XWin));
        lambda = (undefined, function (x4) {
          return minimax.mise(g1, f4, x4)
        });
        tmp1 = map_inst_6_tsni(lambda, l1);
        return foldr_inst_36_tsni(f4, tmp, tmp1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static searchTree(p7, board5) {
    let tmp, lambda, lambda1;
    lambda = (undefined, function (x4) {
      return minimax.newPositions(p7, x4)
    });
    lambda1 = (undefined, function (x4) {
      let tmp1;
      tmp1 = minimax.opposite(p7);
      return minimax.newPositions(tmp1, x4)
    });
    tmp = repTree_inst_7_tsni(lambda, lambda1, board5);
    return prune_inst_19_tsni(5, tmp)
  } 
  static cropTree(t3) {
    let param0, param1, x4, l1, param01, x5, l2, a1, tmp, tmp1;
    if (t3 instanceof minimax.Branch.class) {
      param0 = t3.a;
      param1 = t3.cs;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return minimax.Branch(a1, NofibPrelude.Nil)
      } else {
        if (param0 instanceof minimax.Score.class) {
          param01 = param0.i;
          x5 = param01;
          l2 = param1;
          tmp = runtime.safeCall(minimax.Score(x5));
          tmp1 = NofibPrelude.map(minimax.cropTree, l2);
          return minimax.Branch(tmp, tmp1)
        } else {
          x4 = param0;
          l1 = param1;
          return minimax.Branch(x4, NofibPrelude.Nil)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bestMove(p8, f5, g2, b1) {
    let tmp, tmp1, tmp2;
    tmp = searchTree_inst_14_tsni(p8, b1);
    tmp1 = mapTree_inst_37_tsni(static_inst_11_tsni, tmp);
    tmp2 = cropTree_inst_10_tsni(tmp1);
    return mise_inst_9_tsni(f5, g2, tmp2)
  } 
  static alternate(player, f6, g3, board6) {
    let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda;
    scrut2 = fullBoard_inst_22_tsni(board6);
    if (scrut2 === true) {
      return NofibPrelude.Nil
    } else {
      tmp = static_inst_23_tsni(board6);
      scrut1 = evaluationEq_inst_39_tsni(tmp, minimax.XWin);
      if (scrut1 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = static_inst_25_tsni(board6);
        scrut = evaluationEq_inst_40_tsni(tmp1, minimax.OWin);
        if (scrut === true) {
          return NofibPrelude.Nil
        } else {
          opposition = minimax.opposite(player);
          possibles = newPositions_inst_26_tsni(player, board6);
          lambda = (undefined, function (x4) {
            return minimax.bestMove(opposition, g3, f6, x4)
          });
          scores = NofibPrelude.map(lambda, possibles);
          boardd_eval = best_inst_28_tsni(f6, possibles, scores);
          return runtime.safeCall(boardd_eval(f6, g3, opposition))
        }
      }
    }
  } 
  static prog(input) {
    let board7, testBoard, game, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    board7 = function board(x4) {
      let scrut;
      scrut = x4 === "doesn't happen";
      if (scrut === true) {
        return NofibPrelude.append(testBoard, testBoard)
      } else {
        return testBoard
      }
    };
    tmp = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(minimax.O, tmp);
    tmp2 = NofibPrelude.Cons(minimax.Empty, tmp1);
    tmp3 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(minimax.X, tmp3);
    tmp5 = NofibPrelude.Cons(minimax.Empty, tmp4);
    tmp6 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(minimax.Empty, tmp6);
    tmp8 = NofibPrelude.Cons(minimax.Empty, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    testBoard = tmp11;
    tmp12 = board7(input);
    tmp13 = alternate_inst_30_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
    game = tmp13;
    tmp14 = NofibPrelude.nofibStringToList("OXO\n");
    tmp15 = map_inst_29_tsni(showMove_inst_41_tsni, game);
    tmp16 = concat_inst_32_tsni(tmp15);
    return NofibPrelude.append(tmp14, tmp16)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_31_tsni("180000");
    return nofibListToString_inst_42_tsni(tmp)
  }
  static toString() { return "minimax"; }
});
let minimax = minimax1; export default minimax;
