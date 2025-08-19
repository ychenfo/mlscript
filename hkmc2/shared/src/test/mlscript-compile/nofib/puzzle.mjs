const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let minAcc, lscomp3, lscomp2, lscomp1, puzzle1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lscomp2$, lscomp3$, lscomp1$, transfer_inst_0_tsni, lscomp2$_inst_0_tsni, lscomp3$_inst_0_tsni, updateState_inst_0_1_tsni, itemFromTo_inst_0_2_tsni, itemFromTo_inst_0_3_tsni, concat_inst_0_4_tsni, append_inst_0_4_5_tsni, transfer_inst_6_7_tsni, lscomp2$_inst_6_7_tsni, lscomp3$_inst_6_7_tsni, lscomp1$_inst_6_7_tsni, updateState_inst_6_7_1_tsni, itemFromTo_inst_6_7_2_tsni, itemFromTo_inst_6_7_3_tsni, concat_inst_6_7_4_tsni, append_inst_6_7_4_5_tsni, transfer_inst_8_tsni, lscomp2$_inst_8_tsni, lscomp1$_inst_8_tsni, itemFromTo_inst_8_9_tsni, updateState_inst_8_1_tsni, concat_inst_8_4_tsni, append_inst_8_4_5_tsni, transfer_inst_10_11_tsni, lscomp2$_inst_10_11_tsni, lscomp3$_inst_10_11_tsni, lscomp1$_inst_10_11_tsni, updateState_inst_10_11_1_tsni, concat_inst_10_11_4_tsni, append_inst_10_11_4_5_tsni, itemFromTo_inst_10_11_9_tsni, transfer_inst_12_tsni, lscomp3$_inst_12_tsni, lscomp1$_inst_12_tsni, itemFromTo_inst_12_9_tsni, updateState_inst_12_1_tsni, itemFromTo_inst_12_2_tsni, concat_inst_12_4_tsni, append_inst_12_4_5_tsni, transfer_inst_13_14_tsni, lscomp2$_inst_13_14_tsni, lscomp3$_inst_13_14_tsni, lscomp1$_inst_13_14_tsni, updateState_inst_13_14_1_tsni, itemFromTo_inst_13_14_2_tsni, concat_inst_13_14_4_tsni, append_inst_13_14_4_5_tsni, itemFromTo_inst_13_14_9_tsni, writeState_inst_15_16_tsni, lambda$_inst_17_18_tsni, writeState_inst_17_18_16_tsni, lambda_inst_19_20_tsni, lambda$_inst_19_20_18_tsni, writeState_inst_19_20_18_16_tsni, lambda$_inst_21_22_tsni, lambda_inst_21_22_20_tsni, lambda$_inst_21_22_20_18_tsni, writeState_inst_21_22_20_18_16_tsni, lambda_inst_24_25_tsni, lambda$_inst_24_25_22_tsni, lambda_inst_24_25_22_20_tsni, lambda$_inst_24_25_22_20_18_tsni, writeState_inst_24_25_22_20_18_16_tsni, writeHistory_inst_26_27_tsni, lambda_inst_26_27_25_tsni, lambda$_inst_26_27_25_22_tsni, lambda_inst_26_27_25_22_20_tsni, lambda$_inst_26_27_25_22_20_18_tsni, writeState_inst_26_27_25_22_20_18_16_tsni, lscomp2$_inst_28_tsni, lscomp3$_inst_28_tsni, lscomp1$_inst_28_tsni, itemFromTo_inst_28_9_tsni, updateState_inst_28_1_tsni, itemFromTo_inst_28_2_tsni, itemFromTo_inst_28_3_tsni, concat_inst_28_4_tsni, append_inst_28_4_5_tsni, transfer_inst_29_30_tsni, lscomp2$_inst_29_30_tsni, lscomp3$_inst_29_30_tsni, lscomp1$_inst_29_30_tsni, updateState_inst_29_30_1_tsni, itemFromTo_inst_29_30_2_tsni, itemFromTo_inst_29_30_3_tsni, concat_inst_29_30_4_tsni, append_inst_29_30_4_5_tsni, itemFromTo_inst_29_30_9_tsni, writeSolutions_inst_29_31_tsni, writeHistory_inst_29_31_27_tsni, lambda_inst_29_31_27_25_tsni, lambda$_inst_29_31_27_25_22_tsni, lambda_inst_29_31_27_25_22_20_tsni, lambda$_inst_29_31_27_25_22_20_18_tsni, writeState_inst_29_31_27_25_22_20_18_16_tsni, testPuzzle_nofib_inst_32_33_tsni, writeSolutions_inst_32_33_31_tsni, writeHistory_inst_32_33_31_27_tsni, lambda_inst_32_33_31_27_25_tsni, lambda$_inst_32_33_31_27_25_22_tsni, lambda_inst_32_33_31_27_25_22_20_tsni, lambda$_inst_32_33_31_27_25_22_20_18_tsni, writeState_inst_32_33_31_27_25_22_20_18_16_tsni, transfer_inst_32_33_30_tsni, lscomp2$_inst_32_33_30_tsni, lscomp3$_inst_32_33_30_tsni, lscomp1$_inst_32_33_30_tsni, itemFromTo_inst_32_33_30_9_tsni, updateState_inst_32_33_30_1_tsni, itemFromTo_inst_32_33_30_2_tsni, itemFromTo_inst_32_33_30_3_tsni, concat_inst_32_33_30_4_tsni, append_inst_32_33_30_4_5_tsni, append_inst_32_33_31_34_tsni, append_inst_32_33_31_35_tsni, append_inst_32_33_31_27_25_22_20_18_36_tsni, append_inst_32_33_31_27_25_22_20_18_37_tsni, append_inst_32_33_31_27_25_22_20_18_16_38_tsni, writeItem_inst_32_33_31_27_25_22_20_18_16_39_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_40_tsni, writeItem_inst_32_33_31_27_25_22_20_18_16_41_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_40_tsni, writeItem_inst_32_33_31_27_25_22_20_18_16_42_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_40_tsni, writeItem_inst_32_33_31_27_25_22_20_18_16_43_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_40_tsni, append_inst_32_33_31_27_25_22_20_18_16_44_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_45_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_46_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_47_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_48_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_49_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_50_tsni, append_inst_32_33_31_27_25_22_20_18_16_43_51_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_45_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_46_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_47_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_48_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_49_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_50_tsni, append_inst_32_33_31_27_25_22_20_18_16_42_51_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_45_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_46_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_47_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_48_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_49_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_50_tsni, append_inst_32_33_31_27_25_22_20_18_16_41_51_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_45_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_46_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_47_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_48_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_49_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_50_tsni, append_inst_32_33_31_27_25_22_20_18_16_39_51_tsni, updateState_inst_0_52_tsni, concat_inst_0_53_tsni, append_inst_0_54_tsni, concat_inst_6_7_53_tsni, updateState_inst_6_7_52_tsni, append_inst_6_7_54_tsni, updateState_inst_8_52_tsni, append_inst_8_54_tsni, updateState_inst_10_11_52_tsni, append_inst_10_11_54_tsni, updateState_inst_12_52_tsni, append_inst_12_54_tsni, updateState_inst_13_14_52_tsni, append_inst_13_14_54_tsni, writeItem_inst_15_16_39_tsni, writeItem_inst_15_16_41_tsni, writeItem_inst_15_16_42_tsni, writeItem_inst_15_16_43_tsni, writeItem_inst_17_18_16_43_tsni, writeItem_inst_17_18_16_42_tsni, writeItem_inst_17_18_16_41_tsni, writeItem_inst_17_18_16_39_tsni, writeItem_inst_19_20_18_16_39_tsni, writeItem_inst_19_20_18_16_41_tsni, writeItem_inst_19_20_18_16_42_tsni, writeItem_inst_19_20_18_16_43_tsni, writeItem_inst_21_22_20_18_16_43_tsni, writeItem_inst_21_22_20_18_16_42_tsni, writeItem_inst_21_22_20_18_16_41_tsni, writeItem_inst_21_22_20_18_16_39_tsni, writeItem_inst_23_43_tsni, writeItem_inst_23_42_tsni, writeItem_inst_23_41_tsni, writeItem_inst_23_39_tsni, writeItem_inst_24_25_22_20_18_16_39_tsni, writeItem_inst_24_25_22_20_18_16_41_tsni, writeItem_inst_24_25_22_20_18_16_42_tsni, writeItem_inst_24_25_22_20_18_16_43_tsni, writeItem_inst_26_27_25_22_20_18_16_43_tsni, writeItem_inst_26_27_25_22_20_18_16_42_tsni, writeItem_inst_26_27_25_22_20_18_16_41_tsni, writeItem_inst_26_27_25_22_20_18_16_39_tsni, updateState_inst_28_52_tsni, concat_inst_28_53_tsni, append_inst_28_54_tsni, concat_inst_29_30_53_tsni, updateState_inst_29_30_52_tsni, append_inst_29_30_54_tsni, writeItem_inst_29_31_27_25_22_20_18_16_39_tsni, writeItem_inst_29_31_27_25_22_20_18_16_41_tsni, writeItem_inst_29_31_27_25_22_20_18_16_42_tsni, writeItem_inst_29_31_27_25_22_20_18_16_43_tsni, updateState_inst_32_33_30_52_tsni, concat_inst_32_33_30_53_tsni, append_inst_32_33_30_54_tsni, nofibListToString_inst_32_55_tsni, match_s_arm_State_inst_0_52_tsni, match_ls_arm_Cons_inst_0_tsni, match_ls_arm_Cons_inst_0_tsni1, match_s_arm_State_inst_6_7_52_tsni, match_ls_arm_Cons_inst_6_7_tsni, match_ls_arm_Cons_inst_6_7_tsni1, match_ls_arm_Cons_inst_8_tsni, match_s_arm_State_inst_8_52_tsni, match_s_arm_State_inst_10_11_52_tsni, match_ls_arm_Cons_inst_10_11_tsni, match_ls_arm_Cons_inst_12_tsni, match_s_arm_State_inst_12_52_tsni, match_ls_arm_Cons_inst_12_tsni1, match_s_arm_State_inst_13_14_52_tsni, match_ls_arm_Cons_inst_13_14_tsni, match_ls_arm_Cons_inst_13_14_tsni1, match_ls_arm_Cons_inst_28_tsni, match_s_arm_State_inst_28_52_tsni, match_ls_arm_Cons_inst_28_tsni1, match_ls_arm_Cons_inst_28_tsni2, match_s_arm_State_inst_29_30_52_tsni, match_ls_arm_Cons_inst_29_30_tsni, match_ls_arm_Cons_inst_29_30_tsni1, match_ls_arm_Cons_inst_29_30_tsni2, match_ls_arm_Cons_inst_32_33_30_tsni, match_s_arm_State_inst_32_33_30_52_tsni, match_ls_arm_Cons_inst_32_33_30_tsni1, match_ls_arm_Cons_inst_32_33_30_tsni2, match_ls_arm_Cons_inst_32_55_tsni;
match_s_arm_State_inst_0_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_0_52_tsni, _deforest_State_e_inst_0_52_tsni, _deforest_State_l_inst_0_52_tsni, _deforest_State_a_inst_0_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_0_52_tsni;
  param1 = _deforest_State_e_inst_0_52_tsni;
  param2 = _deforest_State_l_inst_0_52_tsni;
  param3 = _deforest_State_a_inst_0_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_0_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_0_tsni, _deforest_Cons_tail_inst_0_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_tsni;
  param1 = _deforest_Cons_tail_inst_0_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_0_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_0_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_0_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_0_53_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_0_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_0_tsni, _deforest_Cons_tail_inst_0_tsni) {
  let param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_0_tsni;
  param1 = _deforest_Cons_tail_inst_0_tsni;
  i = param0;
  xs = param1;
  tmp = puzzle1.succItem(i);
  tmp1 = itemFromTo_inst_0_2_tsni(tmp, puzzle1.Adam);
  return lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
});
match_s_arm_State_inst_6_7_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_6_7_52_tsni, _deforest_State_e_inst_6_7_52_tsni, _deforest_State_l_inst_6_7_52_tsni, _deforest_State_a_inst_6_7_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_6_7_52_tsni;
  param1 = _deforest_State_e_inst_6_7_52_tsni;
  param2 = _deforest_State_l_inst_6_7_52_tsni;
  param3 = _deforest_State_a_inst_6_7_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_6_7_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_6_7_tsni, _deforest_Cons_tail_inst_6_7_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_6_7_tsni;
  param1 = _deforest_Cons_tail_inst_6_7_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_6_7_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_6_7_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_6_7_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_6_7_53_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_6_7_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_6_7_tsni, _deforest_Cons_tail_inst_6_7_tsni) {
  let param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_6_7_tsni;
  param1 = _deforest_Cons_tail_inst_6_7_tsni;
  i = param0;
  xs = param1;
  tmp = puzzle1.succItem(i);
  tmp1 = itemFromTo_inst_6_7_2_tsni(tmp, puzzle1.Adam);
  return lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
});
match_ls_arm_Cons_inst_8_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_8_tsni, _deforest_Cons_tail_inst_8_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_8_tsni;
  param1 = _deforest_Cons_tail_inst_8_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_8_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_8_4_tsni(xs1);
        return append_inst_8_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_s_arm_State_inst_8_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_8_52_tsni, _deforest_State_e_inst_8_52_tsni, _deforest_State_l_inst_8_52_tsni, _deforest_State_a_inst_8_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_8_52_tsni;
  param1 = _deforest_State_e_inst_8_52_tsni;
  param2 = _deforest_State_l_inst_8_52_tsni;
  param3 = _deforest_State_a_inst_8_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_s_arm_State_inst_10_11_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_10_11_52_tsni, _deforest_State_e_inst_10_11_52_tsni, _deforest_State_l_inst_10_11_52_tsni, _deforest_State_a_inst_10_11_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_10_11_52_tsni;
  param1 = _deforest_State_e_inst_10_11_52_tsni;
  param2 = _deforest_State_l_inst_10_11_52_tsni;
  param3 = _deforest_State_a_inst_10_11_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_10_11_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_10_11_tsni, _deforest_Cons_tail_inst_10_11_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_10_11_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_10_11_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_10_11_4_tsni(xs1);
        return append_inst_10_11_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_ls_arm_Cons_inst_12_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_12_tsni, _deforest_Cons_tail_inst_12_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_12_tsni;
  param1 = _deforest_Cons_tail_inst_12_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_12_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_12_4_tsni(xs1);
        return append_inst_12_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_s_arm_State_inst_12_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_12_52_tsni, _deforest_State_e_inst_12_52_tsni, _deforest_State_l_inst_12_52_tsni, _deforest_State_a_inst_12_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_12_52_tsni;
  param1 = _deforest_State_e_inst_12_52_tsni;
  param2 = _deforest_State_l_inst_12_52_tsni;
  param3 = _deforest_State_a_inst_12_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_12_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_12_tsni, _deforest_Cons_tail_inst_12_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Cons_head_inst_12_tsni;
  param1 = _deforest_Cons_tail_inst_12_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_12_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_12_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_12_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        return NofibPrelude.Cons(tmp6, tmp7)
      } else {
        return lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_s_arm_State_inst_13_14_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_13_14_52_tsni, _deforest_State_e_inst_13_14_52_tsni, _deforest_State_l_inst_13_14_52_tsni, _deforest_State_a_inst_13_14_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_13_14_52_tsni;
  param1 = _deforest_State_e_inst_13_14_52_tsni;
  param2 = _deforest_State_l_inst_13_14_52_tsni;
  param3 = _deforest_State_a_inst_13_14_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_13_14_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_13_14_tsni, _deforest_Cons_tail_inst_13_14_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  param0 = _deforest_Cons_head_inst_13_14_tsni;
  param1 = _deforest_Cons_tail_inst_13_14_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_13_14_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_13_14_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_13_14_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        return NofibPrelude.Cons(tmp6, tmp7)
      } else {
        return lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_13_14_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_13_14_tsni, _deforest_Cons_tail_inst_13_14_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_13_14_tsni;
  param1 = _deforest_Cons_tail_inst_13_14_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_13_14_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_13_14_4_tsni(xs1);
        return append_inst_13_14_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_ls_arm_Cons_inst_28_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_28_tsni, _deforest_Cons_tail_inst_28_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_28_tsni;
  param1 = _deforest_Cons_tail_inst_28_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = puzzle1.transfer(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_28_4_tsni(xs1);
        return append_inst_28_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_s_arm_State_inst_28_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_28_52_tsni, _deforest_State_e_inst_28_52_tsni, _deforest_State_l_inst_28_52_tsni, _deforest_State_a_inst_28_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_28_52_tsni;
  param1 = _deforest_State_e_inst_28_52_tsni;
  param2 = _deforest_State_l_inst_28_52_tsni;
  param3 = _deforest_State_a_inst_28_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_28_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_28_tsni, _deforest_Cons_tail_inst_28_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_28_tsni;
  param1 = _deforest_Cons_tail_inst_28_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_28_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_28_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = puzzle1.transfer(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_28_53_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_28_tsni2 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_28_tsni, _deforest_Cons_tail_inst_28_tsni) {
  let param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_28_tsni;
  param1 = _deforest_Cons_tail_inst_28_tsni;
  i = param0;
  xs = param1;
  tmp = puzzle1.succItem(i);
  tmp1 = itemFromTo_inst_28_2_tsni(tmp, puzzle1.Adam);
  return lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
});
match_s_arm_State_inst_29_30_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_29_30_52_tsni, _deforest_State_e_inst_29_30_52_tsni, _deforest_State_l_inst_29_30_52_tsni, _deforest_State_a_inst_29_30_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_29_30_52_tsni;
  param1 = _deforest_State_e_inst_29_30_52_tsni;
  param2 = _deforest_State_l_inst_29_30_52_tsni;
  param3 = _deforest_State_a_inst_29_30_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_29_30_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_29_30_tsni, _deforest_Cons_tail_inst_29_30_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_29_30_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_29_30_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_29_30_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_29_30_53_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_29_30_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_29_30_tsni, _deforest_Cons_tail_inst_29_30_tsni) {
  let param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_tsni;
  i = param0;
  xs = param1;
  tmp = puzzle1.succItem(i);
  tmp1 = itemFromTo_inst_29_30_2_tsni(tmp, puzzle1.Adam);
  return lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
});
match_ls_arm_Cons_inst_29_30_tsni2 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_29_30_tsni, _deforest_Cons_tail_inst_29_30_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_29_30_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_29_30_4_tsni(xs1);
        return append_inst_29_30_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_ls_arm_Cons_inst_32_33_30_tsni = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_32_33_30_tsni, _deforest_Cons_tail_inst_32_33_30_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_32_33_30_tsni;
  param1 = _deforest_Cons_tail_inst_32_33_30_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle1.position(item, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle1.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle1.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_32_33_30_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_32_33_30_4_tsni(xs1);
        return append_inst_32_33_30_4_5_tsni(x, tmp6)
      }
    } else {
      return lscomp1$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    return lscomp1$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  }
});
match_s_arm_State_inst_32_33_30_52_tsni = (undefined, function (i, pos, _deforest_State_b_inst_32_33_30_52_tsni, _deforest_State_e_inst_32_33_30_52_tsni, _deforest_State_l_inst_32_33_30_52_tsni, _deforest_State_a_inst_32_33_30_52_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_32_33_30_52_tsni;
  param1 = _deforest_State_e_inst_32_33_30_52_tsni;
  param2 = _deforest_State_l_inst_32_33_30_52_tsni;
  param3 = _deforest_State_a_inst_32_33_30_52_tsni;
  a = param0;
  b = param1;
  c = param2;
  d = param3;
  if (i instanceof puzzle.Bono.class) {
    return runtime.safeCall(puzzle.State(pos, b, c, d))
  } else if (i instanceof puzzle.Edge.class) {
    return runtime.safeCall(puzzle.State(a, pos, c, d))
  } else if (i instanceof puzzle.Larry.class) {
    return runtime.safeCall(puzzle.State(a, b, pos, d))
  } else if (i instanceof puzzle.Adam.class) {
    return runtime.safeCall(puzzle.State(a, b, c, pos))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_32_33_30_tsni1 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_32_33_30_tsni, _deforest_Cons_tail_inst_32_33_30_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_32_33_30_tsni;
  param1 = _deforest_Cons_tail_inst_32_33_30_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle1.position(i, dest);
  scrut = puzzle1.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle1.position(j, dest);
    scrut1 = puzzle1.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_32_33_30_1_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_32_33_30_52_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle1.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle1.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_32_33_30_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_32_33_30_53_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    return lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
  }
});
match_ls_arm_Cons_inst_32_33_30_tsni2 = (undefined, function (source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_32_33_30_tsni, _deforest_Cons_tail_inst_32_33_30_tsni) {
  let param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_32_33_30_tsni;
  param1 = _deforest_Cons_tail_inst_32_33_30_tsni;
  i = param0;
  xs = param1;
  tmp = puzzle1.succItem(i);
  tmp1 = itemFromTo_inst_32_33_30_2_tsni(tmp, puzzle1.Adam);
  return lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
});
match_ls_arm_Cons_inst_32_55_tsni = (undefined, function (_deforest_Cons_head_inst_32_55_tsni, _deforest_Cons_tail_inst_32_55_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_32_55_tsni;
  param1 = _deforest_Cons_tail_inst_32_55_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_32_55_tsni(t);
  return h + tmp
});
transfer_inst_0_tsni = function transfer_inst_0_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = puzzle.itemFromTo(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_0_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_0_3_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = concat_inst_0_53_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_0_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_0_tsni = function lscomp2$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
lscomp3$_inst_0_tsni = function lscomp3$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
updateState_inst_0_1_tsni = function updateState_inst_0_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b = pos;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_0_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_0_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_0_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_0_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_0_2_tsni = function itemFromTo_inst_0_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_0_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_0_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_0_3_tsni = function itemFromTo_inst_0_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_0_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_0_3_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_0_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_0_4_tsni = function concat_inst_0_4_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_0_4_tsni(xs);
    return append_inst_0_4_5_tsni(x, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_0_4_5_tsni = function append_inst_0_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_4_5_tsni(xs1, ys);
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
transfer_inst_6_7_tsni = function transfer_inst_6_7_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = puzzle.itemFromTo(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_6_7_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_6_7_3_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = concat_inst_6_7_53_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_6_7_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_6_7_tsni = function lscomp2$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
lscomp3$_inst_6_7_tsni = function lscomp3$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_6_7_tsni = function lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    item = param0;
    xs = param1;
    tmp = puzzle1.position(item, dest);
    scrut = puzzle1.bankEq(tmp, location);
    if (scrut === true) {
      tmp1 = puzzle1.updateState(dest, item, newLocation);
      newDest = tmp1;
      scrut1 = puzzle1.notSeen(newDest, history);
      if (scrut1 === true) {
        tmp2 = puzzle1.u2times(item);
        tmp3 = countdown + tmp2;
        newTime = tmp3;
        tmp4 = transfer_inst_6_7_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp5 = lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs);
        return NofibPrelude.Cons(tmp4, tmp5)
      } else {
        return lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
      }
    } else {
      return lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
updateState_inst_6_7_1_tsni = function updateState_inst_6_7_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b3 = pos;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_7_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = pos;
      _deforest_State_l2 = c;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_7_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = b;
      _deforest_State_l1 = pos;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_7_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b = a;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_7_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_6_7_2_tsni = function itemFromTo_inst_6_7_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_6_7_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_6_7_3_tsni = function itemFromTo_inst_6_7_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_7_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_6_7_3_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_7_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_6_7_4_tsni = function concat_inst_6_7_4_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_6_7_4_tsni(xs);
    return append_inst_6_7_4_5_tsni(x, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_6_7_4_5_tsni = function append_inst_6_7_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_6_7_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_6_7_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
transfer_inst_8_tsni = function transfer_inst_8_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_8_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_8_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = NofibPrelude.concat(tmp7);
    moveTwo = tmp8;
    return append_inst_8_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_8_tsni = function lscomp2$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, i, xs, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    i = param0;
    xs = param1;
    tmp = puzzle1.succItem(i);
    tmp1 = puzzle1.itemFromTo(tmp, puzzle1.Adam);
    return lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_8_tsni = function lscomp1$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
itemFromTo_inst_8_9_tsni = function itemFromTo_inst_8_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_8_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
updateState_inst_8_1_tsni = function updateState_inst_8_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b = pos;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_8_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_8_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_8_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_8_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
concat_inst_8_4_tsni = function concat_inst_8_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_8_4_5_tsni = function append_inst_8_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_8_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_8_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
transfer_inst_10_11_tsni = function transfer_inst_10_11_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_10_11_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_10_11_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = NofibPrelude.concat(tmp7);
    moveTwo = tmp8;
    return append_inst_10_11_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_10_11_tsni = function lscomp2$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, i, xs, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    i = param0;
    xs = param1;
    tmp = puzzle1.succItem(i);
    tmp1 = puzzle1.itemFromTo(tmp, puzzle1.Adam);
    return lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp3$_inst_10_11_tsni = function lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp2$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    j = param0;
    ys = param1;
    tmp = puzzle1.position(i, dest);
    scrut = puzzle1.bankEq(tmp, location);
    if (scrut === true) {
      tmp1 = puzzle1.position(j, dest);
      scrut1 = puzzle1.bankEq(tmp1, location);
      if (scrut1 === true) {
        tmp2 = updateState_inst_10_11_1_tsni(dest, i, newLocation);
        tmp3 = updateState_inst_10_11_52_tsni(tmp2, j, newLocation);
        newDest = tmp3;
        scrut2 = puzzle1.notSeen(newDest, history);
        if (scrut2 === true) {
          tmp4 = puzzle1.u2times(i);
          tmp5 = countdown + tmp4;
          newTime = tmp5;
          tmp6 = transfer_inst_10_11_tsni(source, newDest, newLocation, newTime, newHistory);
          tmp7 = lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
          return NofibPrelude.Cons(tmp6, tmp7)
        } else {
          return lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
        }
      } else {
        return lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_10_11_tsni = function lscomp1$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
updateState_inst_10_11_1_tsni = function updateState_inst_10_11_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b3 = pos;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_10_11_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = pos;
      _deforest_State_l2 = c;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_10_11_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = b;
      _deforest_State_l1 = pos;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_10_11_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b = a;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_10_11_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
concat_inst_10_11_4_tsni = function concat_inst_10_11_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_10_11_4_5_tsni = function append_inst_10_11_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_10_11_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_10_11_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_10_11_9_tsni = function itemFromTo_inst_10_11_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_10_11_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
transfer_inst_12_tsni = function transfer_inst_12_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_12_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_12_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = NofibPrelude.concat(tmp7);
    moveTwo = tmp8;
    return append_inst_12_54_tsni(moveOne, moveTwo)
  }
};
lscomp3$_inst_12_tsni = function lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_12_tsni = function lscomp1$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
itemFromTo_inst_12_9_tsni = function itemFromTo_inst_12_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_12_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
updateState_inst_12_1_tsni = function updateState_inst_12_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b = pos;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_12_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_12_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_12_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_12_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_12_2_tsni = function itemFromTo_inst_12_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_12_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_12_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_12_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_12_4_tsni = function concat_inst_12_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_12_4_5_tsni = function append_inst_12_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_12_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_12_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
transfer_inst_13_14_tsni = function transfer_inst_13_14_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_13_14_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_13_14_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = NofibPrelude.concat(tmp7);
    moveTwo = tmp8;
    return append_inst_13_14_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_13_14_tsni = function lscomp2$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, i, xs, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    i = param0;
    xs = param1;
    tmp = puzzle1.succItem(i);
    tmp1 = itemFromTo_inst_13_14_2_tsni(tmp, puzzle1.Adam);
    return lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp3$_inst_13_14_tsni = function lscomp3$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_13_14_tsni = function lscomp1$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
updateState_inst_13_14_1_tsni = function updateState_inst_13_14_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b3 = pos;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_13_14_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = pos;
      _deforest_State_l2 = c;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_13_14_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = b;
      _deforest_State_l1 = pos;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_13_14_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b = a;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_13_14_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_13_14_2_tsni = function itemFromTo_inst_13_14_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_13_14_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_13_14_4_tsni = function concat_inst_13_14_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_14_4_5_tsni = function append_inst_13_14_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_13_14_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_13_14_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_13_14_9_tsni = function itemFromTo_inst_13_14_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_13_14_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_13_14_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_13_14_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
writeState_inst_15_16_tsni = function writeState_inst_15_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_15_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_15_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_15_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_15_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
lambda$_inst_17_18_tsni = function lambda$_inst_17_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_17_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_17_18_16_tsni = function writeState_inst_17_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_17_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_17_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_17_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_17_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
lambda_inst_19_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_19_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_19_20_18_tsni = function lambda$_inst_19_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_19_20_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_19_20_18_16_tsni = function writeState_inst_19_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_19_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_19_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_19_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_19_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
lambda$_inst_21_22_tsni = function lambda$_inst_21_22_tsni(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_21_22_20_tsni(history, timestate, acc))
};
lambda_inst_21_22_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_21_22_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_21_22_20_18_tsni = function lambda$_inst_21_22_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_21_22_20_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_21_22_20_18_16_tsni = function writeState_inst_21_22_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_21_22_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_21_22_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_21_22_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_21_22_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
lambda_inst_24_25_tsni = (undefined, function (history) {
  return (timestate, acc) => {
    return lambda$_inst_24_25_22_tsni(history, timestate, acc)
  }
});
lambda$_inst_24_25_22_tsni = function lambda$_inst_24_25_22_tsni(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_24_25_22_20_tsni(history, timestate, acc))
};
lambda_inst_24_25_22_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_24_25_22_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_24_25_22_20_18_tsni = function lambda$_inst_24_25_22_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_24_25_22_20_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_24_25_22_20_18_16_tsni = function writeState_inst_24_25_22_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_24_25_22_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_24_25_22_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_24_25_22_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_24_25_22_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
writeHistory_inst_26_27_tsni = function writeHistory_inst_26_27_tsni(history, x) {
  let tmp, lambda$this;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda$this = runtime.safeCall(lambda_inst_26_27_25_tsni(history));
    tmp = NofibPrelude.foldr(lambda$this, lambda5, history);
    return runtime.safeCall(tmp(x))
  }
};
lambda_inst_26_27_25_tsni = (undefined, function (history) {
  return (timestate, acc) => {
    return lambda$_inst_26_27_25_22_tsni(history, timestate, acc)
  }
});
lambda$_inst_26_27_25_22_tsni = function lambda$_inst_26_27_25_22_tsni(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_26_27_25_22_20_tsni(history, timestate, acc))
};
lambda_inst_26_27_25_22_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_26_27_25_22_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_26_27_25_22_20_18_tsni = function lambda$_inst_26_27_25_22_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_26_27_25_22_20_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_26_27_25_22_20_18_16_tsni = function writeState_inst_26_27_25_22_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_26_27_25_22_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_26_27_25_22_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_26_27_25_22_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_26_27_25_22_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
lscomp2$_inst_28_tsni = function lscomp2$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
lscomp3$_inst_28_tsni = function lscomp3$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_28_tsni = function lscomp1$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
itemFromTo_inst_28_9_tsni = function itemFromTo_inst_28_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_28_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
updateState_inst_28_1_tsni = function updateState_inst_28_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b = pos;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_28_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_28_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_28_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_28_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_28_2_tsni = function itemFromTo_inst_28_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_28_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_28_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_28_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_28_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_28_3_tsni = function itemFromTo_inst_28_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_28_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_28_3_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_28_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_28_4_tsni = function concat_inst_28_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_28_4_5_tsni = function append_inst_28_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_28_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_28_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
transfer_inst_29_30_tsni = function transfer_inst_29_30_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_29_30_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_29_30_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_29_30_3_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = concat_inst_29_30_53_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_29_30_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_29_30_tsni = function lscomp2$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
lscomp3$_inst_29_30_tsni = function lscomp3$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_29_30_tsni = function lscomp1$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
updateState_inst_29_30_1_tsni = function updateState_inst_29_30_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b3 = pos;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_29_30_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = pos;
      _deforest_State_l2 = c;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_29_30_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = b;
      _deforest_State_l1 = pos;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_29_30_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b = a;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_29_30_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_29_30_2_tsni = function itemFromTo_inst_29_30_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_29_30_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_29_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_29_30_3_tsni = function itemFromTo_inst_29_30_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_29_30_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_29_30_3_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_29_30_tsni1(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_29_30_4_tsni = function concat_inst_29_30_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_4_5_tsni = function append_inst_29_30_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_29_30_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_29_30_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_29_30_9_tsni = function itemFromTo_inst_29_30_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_29_30_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_29_30_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_29_30_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
writeSolutions_inst_29_31_tsni = function writeSolutions_inst_29_31_tsni(solutions, count, s) {
  let param0, param1, item, next, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  if (solutions instanceof NofibPrelude.Nil.class) {
    return s
  } else if (solutions instanceof NofibPrelude.Cons.class) {
    param0 = solutions.head;
    param1 = solutions.tail;
    item = param0;
    next = param1;
    tmp = NofibPrelude.nofibStringToList("Solution ");
    tmp1 = NofibPrelude.stringOfInt(count);
    tmp2 = NofibPrelude.nofibStringToList(tmp1);
    tmp3 = count + 1;
    tmp4 = writeSolutions_inst_29_31_tsni(next, tmp3, s);
    tmp5 = writeHistory_inst_29_31_27_tsni(item, tmp4);
    tmp6 = NofibPrelude.Cons("\n", tmp5);
    tmp7 = NofibPrelude.append(tmp2, tmp6);
    return NofibPrelude.append(tmp, tmp7)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeHistory_inst_29_31_27_tsni = function writeHistory_inst_29_31_27_tsni(history, x) {
  let tmp, lambda$this;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda$this = runtime.safeCall(lambda_inst_29_31_27_25_tsni(history));
    tmp = NofibPrelude.foldr(lambda$this, lambda5, history);
    return runtime.safeCall(tmp(x))
  }
};
lambda_inst_29_31_27_25_tsni = (undefined, function (history) {
  return (timestate, acc) => {
    return lambda$_inst_29_31_27_25_22_tsni(history, timestate, acc)
  }
});
lambda$_inst_29_31_27_25_22_tsni = function lambda$_inst_29_31_27_25_22_tsni(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_29_31_27_25_22_20_tsni(history, timestate, acc))
};
lambda_inst_29_31_27_25_22_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_29_31_27_25_22_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_29_31_27_25_22_20_18_tsni = function lambda$_inst_29_31_27_25_22_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_29_31_27_25_22_20_18_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_29_31_27_25_22_20_18_16_tsni = function writeState_inst_29_31_27_25_22_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_29_31_27_25_22_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_29_31_27_25_22_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_29_31_27_25_22_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_29_31_27_25_22_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
testPuzzle_nofib_inst_32_33_tsni = function testPuzzle_nofib_inst_32_33_tsni(x) {
  let time, scrut, solutions, mins, tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.listLen(x);
  scrut = tmp === 1;
  if (scrut === true) {
    tmp1 = 0;
  } else {
    throw globalThis.Error("puzzle expects exactly one argument")
  }
  time = tmp1;
  tmp2 = transfer_inst_32_33_30_tsni(puzzle.initialState, puzzle.finalState, puzzle.RightBank, time, NofibPrelude.Nil);
  solutions = tmp2;
  tmp3 = puzzle.minSolutions(solutions);
  mins = tmp3;
  return writeSolutions_inst_32_33_31_tsni(mins, 1, () => {
    return ""
  })
};
writeSolutions_inst_32_33_31_tsni = function writeSolutions_inst_32_33_31_tsni(solutions, count, s) {
  let param0, param1, item, next, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  if (solutions instanceof NofibPrelude.Nil.class) {
    return s
  } else if (solutions instanceof NofibPrelude.Cons.class) {
    param0 = solutions.head;
    param1 = solutions.tail;
    item = param0;
    next = param1;
    tmp = NofibPrelude.nofibStringToList("Solution ");
    tmp1 = NofibPrelude.stringOfInt(count);
    tmp2 = NofibPrelude.nofibStringToList(tmp1);
    tmp3 = count + 1;
    tmp4 = writeSolutions_inst_32_33_31_tsni(next, tmp3, s);
    tmp5 = writeHistory_inst_32_33_31_27_tsni(item, tmp4);
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = tmp5;
    tmp6 = () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp7 = append_inst_32_33_31_34_tsni(tmp2, tmp6);
    return append_inst_32_33_31_35_tsni(tmp, tmp7)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeHistory_inst_32_33_31_27_tsni = function writeHistory_inst_32_33_31_27_tsni(history, x) {
  let tmp, lambda$this;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda$this = runtime.safeCall(lambda_inst_32_33_31_27_25_tsni(history));
    tmp = NofibPrelude.foldr(lambda$this, lambda5, history);
    return runtime.safeCall(tmp(x))
  }
};
lambda_inst_32_33_31_27_25_tsni = (undefined, function (history) {
  return (timestate, acc) => {
    return lambda$_inst_32_33_31_27_25_22_tsni(history, timestate, acc)
  }
});
lambda$_inst_32_33_31_27_25_22_tsni = function lambda$_inst_32_33_31_27_25_22_tsni(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_32_33_31_27_25_22_20_tsni(history, timestate, acc))
};
lambda_inst_32_33_31_27_25_22_20_tsni = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_32_33_31_27_25_22_20_18_tsni(history, timestate, acc, s)
  }
});
lambda$_inst_32_33_31_27_25_22_20_18_tsni = function lambda$_inst_32_33_31_27_25_22_20_18_tsni(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_32_33_31_27_25_22_20_18_16_tsni(state, tmp5);
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = tmp6;
    tmp7 = () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp8 = append_inst_32_33_31_27_25_22_20_18_37_tsni(tmp4, tmp7);
    return append_inst_32_33_31_27_25_22_20_18_36_tsni(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeState_inst_32_33_31_27_25_22_20_18_16_tsni = function writeState_inst_32_33_31_27_25_22_20_18_16_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = append_inst_32_33_31_27_25_22_20_18_16_44_tsni(tmp5, s);
  tmp7 = writeItem_inst_32_33_31_27_25_22_20_18_16_43_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return append_inst_32_33_31_27_25_22_20_18_16_43_45_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return append_inst_32_33_31_27_25_22_20_18_16_43_40_tsni(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_32_33_31_27_25_22_20_18_16_42_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return append_inst_32_33_31_27_25_22_20_18_16_42_47_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return append_inst_32_33_31_27_25_22_20_18_16_42_46_tsni(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_32_33_31_27_25_22_20_18_16_41_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return append_inst_32_33_31_27_25_22_20_18_16_41_49_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return append_inst_32_33_31_27_25_22_20_18_16_41_48_tsni(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_32_33_31_27_25_22_20_18_16_39_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return append_inst_32_33_31_27_25_22_20_18_16_39_51_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return append_inst_32_33_31_27_25_22_20_18_16_39_50_tsni(tmp12, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }, tmp1, tmp9);
  return append_inst_32_33_31_27_25_22_20_18_16_38_tsni(tmp, tmp10)
};
transfer_inst_32_33_30_tsni = function transfer_inst_32_33_30_tsni(source, dest, location, countdown, history) {
  let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_32_33_30_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp3);
    tmp5 = concat_inst_32_33_30_4_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_32_33_30_3_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, tmp6);
    tmp8 = concat_inst_32_33_30_53_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_32_33_30_54_tsni(moveOne, moveTwo)
  }
};
lscomp2$_inst_32_33_30_tsni = function lscomp2$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
lscomp3$_inst_32_33_30_tsni = function lscomp3$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation, i, xs))
};
lscomp1$_inst_32_33_30_tsni = function lscomp1$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return runtime.safeCall(ls(source, dest, location, countdown, history, newHistory, newLocation))
};
itemFromTo_inst_32_33_30_9_tsni = function itemFromTo_inst_32_33_30_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_32_33_30_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
updateState_inst_32_33_30_1_tsni = function updateState_inst_32_33_30_1_tsni(s, i, pos) {
  let param0, param1, param2, param3, a, b, c, d, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3;
  if (s instanceof puzzle.State.class) {
    param0 = s.b;
    param1 = s.e;
    param2 = s.l;
    param3 = s.a;
    a = param0;
    b = param1;
    c = param2;
    d = param3;
    if (i instanceof puzzle.Bono.class) {
      _deforest_State_b = pos;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_32_33_30_52_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_32_33_30_52_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_32_33_30_52_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_32_33_30_52_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
itemFromTo_inst_32_33_30_2_tsni = function itemFromTo_inst_32_33_30_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2$_inst_32_33_30_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
    };
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_32_33_30_2_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni1(source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_32_33_30_3_tsni = function itemFromTo_inst_32_33_30_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_32_33_30_3_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_32_33_30_tsni2(source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_32_33_30_4_tsni = function concat_inst_32_33_30_4_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_33_30_4_5_tsni = function append_inst_32_33_30_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_30_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_32_33_30_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_34_tsni = function append_inst_32_33_31_34_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_34_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_35_tsni = function append_inst_32_33_31_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_36_tsni = function append_inst_32_33_31_27_25_22_20_18_36_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_36_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_37_tsni = function append_inst_32_33_31_27_25_22_20_18_37_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_37_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_38_tsni = function append_inst_32_33_31_27_25_22_20_18_16_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeItem_inst_32_33_31_27_25_22_20_18_16_39_tsni = function writeItem_inst_32_33_31_27_25_22_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_32_33_31_27_25_22_20_18_16_39_40_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_40_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_40_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeItem_inst_32_33_31_27_25_22_20_18_16_41_tsni = function writeItem_inst_32_33_31_27_25_22_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_32_33_31_27_25_22_20_18_16_41_40_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_40_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_40_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeItem_inst_32_33_31_27_25_22_20_18_16_42_tsni = function writeItem_inst_32_33_31_27_25_22_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_32_33_31_27_25_22_20_18_16_42_40_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_40_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_40_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeItem_inst_32_33_31_27_25_22_20_18_16_43_tsni = function writeItem_inst_32_33_31_27_25_22_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_32_33_31_27_25_22_20_18_16_43_40_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_40_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_40_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_44_tsni = function append_inst_32_33_31_27_25_22_20_18_16_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_45_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_46_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_47_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_48_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_49_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_50_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_50_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_50_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_43_51_tsni = function append_inst_32_33_31_27_25_22_20_18_16_43_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_43_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_45_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_46_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_47_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_48_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_49_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_50_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_50_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_50_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_42_51_tsni = function append_inst_32_33_31_27_25_22_20_18_16_42_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_42_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_45_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_46_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_47_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_48_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_49_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_50_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_50_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_50_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_41_51_tsni = function append_inst_32_33_31_27_25_22_20_18_16_41_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_41_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_45_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_45_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_45_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_46_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_47_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_48_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_49_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_50_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_50_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_50_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_32_33_31_27_25_22_20_18_16_39_51_tsni = function append_inst_32_33_31_27_25_22_20_18_16_39_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_31_27_25_22_20_18_16_39_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
updateState_inst_0_52_tsni = function updateState_inst_0_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
concat_inst_0_53_tsni = function concat_inst_0_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_54_tsni = function append_inst_0_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_6_7_53_tsni = function concat_inst_6_7_53_tsni(ls) {
  return runtime.safeCall(ls())
};
updateState_inst_6_7_52_tsni = function updateState_inst_6_7_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_6_7_54_tsni = function append_inst_6_7_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
updateState_inst_8_52_tsni = function updateState_inst_8_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_8_54_tsni = function append_inst_8_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
updateState_inst_10_11_52_tsni = function updateState_inst_10_11_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_10_11_54_tsni = function append_inst_10_11_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
updateState_inst_12_52_tsni = function updateState_inst_12_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_12_54_tsni = function append_inst_12_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
updateState_inst_13_14_52_tsni = function updateState_inst_13_14_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_13_14_54_tsni = function append_inst_13_14_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeItem_inst_15_16_39_tsni = function writeItem_inst_15_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_15_16_41_tsni = function writeItem_inst_15_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_15_16_42_tsni = function writeItem_inst_15_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_15_16_43_tsni = function writeItem_inst_15_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_17_18_16_43_tsni = function writeItem_inst_17_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_17_18_16_42_tsni = function writeItem_inst_17_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_17_18_16_41_tsni = function writeItem_inst_17_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_17_18_16_39_tsni = function writeItem_inst_17_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_19_20_18_16_39_tsni = function writeItem_inst_19_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_19_20_18_16_41_tsni = function writeItem_inst_19_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_19_20_18_16_42_tsni = function writeItem_inst_19_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_19_20_18_16_43_tsni = function writeItem_inst_19_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_21_22_20_18_16_43_tsni = function writeItem_inst_21_22_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_21_22_20_18_16_42_tsni = function writeItem_inst_21_22_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_21_22_20_18_16_41_tsni = function writeItem_inst_21_22_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_21_22_20_18_16_39_tsni = function writeItem_inst_21_22_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_23_43_tsni = function writeItem_inst_23_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_23_42_tsni = function writeItem_inst_23_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_23_41_tsni = function writeItem_inst_23_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_23_39_tsni = function writeItem_inst_23_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_24_25_22_20_18_16_39_tsni = function writeItem_inst_24_25_22_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_24_25_22_20_18_16_41_tsni = function writeItem_inst_24_25_22_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_24_25_22_20_18_16_42_tsni = function writeItem_inst_24_25_22_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_24_25_22_20_18_16_43_tsni = function writeItem_inst_24_25_22_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_26_27_25_22_20_18_16_43_tsni = function writeItem_inst_26_27_25_22_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_26_27_25_22_20_18_16_42_tsni = function writeItem_inst_26_27_25_22_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_26_27_25_22_20_18_16_41_tsni = function writeItem_inst_26_27_25_22_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_26_27_25_22_20_18_16_39_tsni = function writeItem_inst_26_27_25_22_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
updateState_inst_28_52_tsni = function updateState_inst_28_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
concat_inst_28_53_tsni = function concat_inst_28_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_28_54_tsni = function append_inst_28_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_30_53_tsni = function concat_inst_29_30_53_tsni(ls) {
  return runtime.safeCall(ls())
};
updateState_inst_29_30_52_tsni = function updateState_inst_29_30_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
append_inst_29_30_54_tsni = function append_inst_29_30_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeItem_inst_29_31_27_25_22_20_18_16_39_tsni = function writeItem_inst_29_31_27_25_22_20_18_16_39_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_29_31_27_25_22_20_18_16_41_tsni = function writeItem_inst_29_31_27_25_22_20_18_16_41_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_29_31_27_25_22_20_18_16_42_tsni = function writeItem_inst_29_31_27_25_22_20_18_16_42_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_29_31_27_25_22_20_18_16_43_tsni = function writeItem_inst_29_31_27_25_22_20_18_16_43_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
updateState_inst_32_33_30_52_tsni = function updateState_inst_32_33_30_52_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
concat_inst_32_33_30_53_tsni = function concat_inst_32_33_30_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_33_30_54_tsni = function append_inst_32_33_30_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_32_55_tsni = function nofibListToString_inst_32_55_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp1$ = function lscomp1$(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    item = param0;
    xs = param1;
    tmp = puzzle1.position(item, dest);
    scrut = puzzle1.bankEq(tmp, location);
    if (scrut === true) {
      tmp1 = puzzle1.updateState(dest, item, newLocation);
      newDest = tmp1;
      scrut1 = puzzle1.notSeen(newDest, history);
      if (scrut1 === true) {
        tmp2 = puzzle1.u2times(item);
        tmp3 = countdown + tmp2;
        newTime = tmp3;
        tmp4 = transfer_inst_0_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp5 = lscomp1$(source, dest, location, countdown, history, newHistory, newLocation, xs);
        return NofibPrelude.Cons(tmp4, tmp5)
      } else {
        return lscomp1$(source, dest, location, countdown, history, newHistory, newLocation, xs)
      }
    } else {
      return lscomp1$(source, dest, location, countdown, history, newHistory, newLocation, xs)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1 = function lscomp1(source, dest, location, countdown, history, newHistory, newLocation) {
  return (ls) => {
    return lscomp1$_inst_6_7_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls)
  }
};
lscomp3$ = function lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp2$_inst_8_tsni(source, dest, location, countdown, history, newHistory, newLocation, xs)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    j = param0;
    ys = param1;
    tmp = puzzle1.position(i, dest);
    scrut = puzzle1.bankEq(tmp, location);
    if (scrut === true) {
      tmp1 = puzzle1.position(j, dest);
      scrut1 = puzzle1.bankEq(tmp1, location);
      if (scrut1 === true) {
        tmp2 = updateState_inst_8_1_tsni(dest, i, newLocation);
        tmp3 = updateState_inst_8_52_tsni(tmp2, j, newLocation);
        newDest = tmp3;
        scrut2 = puzzle1.notSeen(newDest, history);
        if (scrut2 === true) {
          tmp4 = puzzle1.u2times(i);
          tmp5 = countdown + tmp4;
          newTime = tmp5;
          tmp6 = transfer_inst_8_tsni(source, newDest, newLocation, newTime, newHistory);
          tmp7 = lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys);
          return NofibPrelude.Cons(tmp6, tmp7)
        } else {
          return lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
        }
      } else {
        return lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
      }
    } else {
      return lscomp3$(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ys)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp3 = function lscomp3(source, dest, location, countdown, history, newHistory, newLocation, i, xs) {
  return (ls) => {
    return lscomp3$_inst_10_11_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, ls)
  }
};
lscomp2$ = function lscomp2$(source, dest, location, countdown, history, newHistory, newLocation, ls) {
  let param0, param1, i, xs, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    i = param0;
    xs = param1;
    tmp = puzzle1.succItem(i);
    tmp1 = itemFromTo_inst_12_2_tsni(tmp, puzzle1.Adam);
    return lscomp3$_inst_12_tsni(source, dest, location, countdown, history, newHistory, newLocation, i, xs, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2 = function lscomp2(source, dest, location, countdown, history, newHistory, newLocation) {
  return (ls) => {
    return lscomp2$_inst_13_14_tsni(source, dest, location, countdown, history, newHistory, newLocation, ls)
  }
};
minAcc = function minAcc(minSoFar, mins, ls) {
  let param0, param1, history, next, total, scrut, scrut1, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return mins
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    history = param0;
    next = param1;
    tmp = puzzle1.totalTime(history);
    total = tmp;
    scrut1 = minSoFar < total;
    if (scrut1 === true) {
      return minAcc(minSoFar, mins, next)
    } else {
      scrut = minSoFar === total;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(history, mins);
        return minAcc(minSoFar, tmp1, next)
      } else {
        tmp2 = NofibPrelude.Cons(history, NofibPrelude.Nil);
        return minAcc(total, tmp2, next)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$5 = function lambda$(history, timestate, acc, s) {
  let first1, first0, time, state, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    first0 = runtime.Tuple.get(timestate, 0);
    first1 = runtime.Tuple.get(timestate, 1);
    time = first0;
    state = first1;
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle1.totalTime(history);
    tmp2 = tmp1 - time;
    tmp3 = NofibPrelude.stringOfInt(tmp2);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = runtime.safeCall(acc(s));
    tmp6 = writeState_inst_15_16_tsni(state, tmp5);
    tmp7 = NofibPrelude.Cons("\n", tmp6);
    tmp8 = NofibPrelude.append(tmp4, tmp7);
    return NofibPrelude.append(tmp, tmp8)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda6 = (undefined, function (history, timestate, acc) {
  return (s) => {
    return lambda$_inst_17_18_tsni(history, timestate, acc, s)
  }
});
lambda$4 = function lambda$(history, timestate, acc) {
  return runtime.safeCall(lambda_inst_19_20_tsni(history, timestate, acc))
};
lambda4 = (undefined, function (history) {
  return (timestate, acc) => {
    return lambda$_inst_21_22_tsni(history, timestate, acc)
  }
});
lambda5 = (undefined, function (x) {
  return x
});
lambda$3 = function lambda$(state, caseScrut) {
  let first1, first0, s, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    s = first1;
    tmp = puzzle1.stateEq(state, s);
    return ! tmp
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda3 = (undefined, function (state) {
  return (caseScrut) => {
    return lambda$3(state, caseScrut)
  }
});
lambda$2 = function lambda$(b, f) {
  return puzzle1.bankEq(b, f)
};
lambda = (undefined, function (b, f) {
  return () => {
    return lambda$2(b, f)
  }
});
lambda$1 = function lambda$(c, g) {
  return puzzle1.bankEq(c, g)
};
lambda1 = (undefined, function (c, g) {
  return () => {
    return lambda$1(c, g)
  }
});
lambda$ = function lambda$(d, h) {
  return puzzle1.bankEq(d, h)
};
lambda2 = (undefined, function (d, h) {
  return () => {
    return lambda$(d, h)
  }
});
(class puzzle {
  static {
    puzzle1 = puzzle;
    let tmp, tmp1;
    this.ItemType = class ItemType {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ItemType"]; 
    };
    const Bono$class = class Bono extends puzzle.ItemType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Bono
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bono"]; 
    };
    this.Bono = globalThis.Object.freeze(new Bono$class);
    const Edge$class = class Edge extends puzzle.ItemType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Edge
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Edge"]; 
    };
    this.Edge = globalThis.Object.freeze(new Edge$class);
    const Larry$class = class Larry extends puzzle.ItemType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Larry
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Larry"]; 
    };
    this.Larry = globalThis.Object.freeze(new Larry$class);
    const Adam$class = class Adam extends puzzle.ItemType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Adam
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Adam"]; 
    };
    this.Adam = globalThis.Object.freeze(new Adam$class);
    this.BankType = class BankType {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "BankType"]; 
    };
    const LeftBank$class = class LeftBank extends puzzle.BankType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LeftBank
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftBank"]; 
    };
    this.LeftBank = globalThis.Object.freeze(new LeftBank$class);
    const RightBank$class = class RightBank extends puzzle.BankType {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: RightBank
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RightBank"]; 
    };
    this.RightBank = globalThis.Object.freeze(new RightBank$class);
    this.State = function State(b1, e1, l1, a1) {
      return globalThis.Object.freeze(new State.class(b1, e1, l1, a1));
    };
    Object.defineProperty(this.State, "class", {
      enumerable: true,
      value: class State {
        constructor(b, e, l, a) {
          this.b = b;
          this.e = e;
          this.l = l;
          this.a = a;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "State", ["b", "e", "l", "a"]]; 
      }
    });
    tmp = runtime.safeCall(puzzle.State(puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank));
    this.initialState = tmp;
    tmp1 = runtime.safeCall(puzzle.State(puzzle.RightBank, puzzle.RightBank, puzzle.RightBank, puzzle.RightBank));
    this.finalState = tmp1;
  }
  static itemEq(a, b) {
    if (a instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.Bono.class) {
        return true
      } else {
        return false
      }
    } else if (a instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.Edge.class) {
        return true
      } else {
        return false
      }
    } else if (a instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.Larry.class) {
        return true
      } else {
        return false
      }
    } else if (a instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.Adam.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static succItem(i) {
    if (i instanceof puzzle.Bono.class) {
      return puzzle.Edge
    } else if (i instanceof puzzle.Edge.class) {
      return puzzle.Larry
    } else if (i instanceof puzzle.Larry.class) {
      return puzzle.Adam
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static isEnd(i1) {
    if (i1 instanceof puzzle.Bono.class) {
      return false
    } else if (i1 instanceof puzzle.Edge.class) {
      return false
    } else if (i1 instanceof puzzle.Larry.class) {
      return false
    } else if (i1 instanceof puzzle.Adam.class) {
      return true
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static itemFromTo(a1, b1) {
    let scrut, tmp, tmp1;
    scrut = puzzle.itemEq(a1, b1);
    if (scrut === true) {
      return NofibPrelude.Cons(a1, NofibPrelude.Nil)
    } else {
      tmp = puzzle.succItem(a1);
      tmp1 = puzzle.itemFromTo(tmp, b1);
      return NofibPrelude.Cons(a1, tmp1)
    }
  } 
  static bankEq(a2, b2) {
    if (a2 instanceof puzzle.LeftBank.class) {
      if (b2 instanceof puzzle.LeftBank.class) {
        return true
      } else {
        return false
      }
    } else if (a2 instanceof puzzle.RightBank.class) {
      if (b2 instanceof puzzle.RightBank.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static stateEq(s1, s2) {
    let param0, param1, param2, param3, a3, b3, c, d, param01, param11, param21, param31, e, f, g, h, tmp, tmp1, tmp2, lambda$this, lambda$this1, lambda$this2;
    if (s1 instanceof puzzle.State.class) {
      param0 = s1.b;
      param1 = s1.e;
      param2 = s1.l;
      param3 = s1.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      if (s2 instanceof puzzle.State.class) {
        param01 = s2.b;
        param11 = s2.e;
        param21 = s2.l;
        param31 = s2.a;
        e = param01;
        f = param11;
        g = param21;
        h = param31;
        tmp = puzzle.bankEq(a3, e);
        lambda$this = runtime.safeCall(lambda(b3, f));
        tmp1 = runtime.short_and(tmp, lambda$this);
        lambda$this1 = runtime.safeCall(lambda1(c, g));
        tmp2 = runtime.short_and(tmp1, lambda$this1);
        lambda$this2 = runtime.safeCall(lambda2(d, h));
        return runtime.short_and(tmp2, lambda$this2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static bonoPos(s) {
    let param0, param1, param2, param3, a3, b3, c, d;
    if (s instanceof puzzle.State.class) {
      param0 = s.b;
      param1 = s.e;
      param2 = s.l;
      param3 = s.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      return a3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static edgePos(s3) {
    let param0, param1, param2, param3, a3, b3, c, d;
    if (s3 instanceof puzzle.State.class) {
      param0 = s3.b;
      param1 = s3.e;
      param2 = s3.l;
      param3 = s3.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      return b3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static larryPos(s4) {
    let param0, param1, param2, param3, a3, b3, c, d;
    if (s4 instanceof puzzle.State.class) {
      param0 = s4.b;
      param1 = s4.e;
      param2 = s4.l;
      param3 = s4.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      return c
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static adamPos(s5) {
    let param0, param1, param2, param3, a3, b3, c, d;
    if (s5 instanceof puzzle.State.class) {
      param0 = s5.b;
      param1 = s5.e;
      param2 = s5.l;
      param3 = s5.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      return d
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static position(i2, s6) {
    if (i2 instanceof puzzle.Bono.class) {
      return puzzle.bonoPos(s6)
    } else if (i2 instanceof puzzle.Edge.class) {
      return puzzle.edgePos(s6)
    } else if (i2 instanceof puzzle.Larry.class) {
      return puzzle.larryPos(s6)
    } else if (i2 instanceof puzzle.Adam.class) {
      return puzzle.adamPos(s6)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static updateState(s7, i3, pos) {
    let param0, param1, param2, param3, a3, b3, c, d;
    if (s7 instanceof puzzle.State.class) {
      param0 = s7.b;
      param1 = s7.e;
      param2 = s7.l;
      param3 = s7.a;
      a3 = param0;
      b3 = param1;
      c = param2;
      d = param3;
      if (i3 instanceof puzzle.Bono.class) {
        return runtime.safeCall(puzzle.State(pos, b3, c, d))
      } else if (i3 instanceof puzzle.Edge.class) {
        return runtime.safeCall(puzzle.State(a3, pos, c, d))
      } else if (i3 instanceof puzzle.Larry.class) {
        return runtime.safeCall(puzzle.State(a3, b3, pos, d))
      } else if (i3 instanceof puzzle.Adam.class) {
        return runtime.safeCall(puzzle.State(a3, b3, c, pos))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static opposite(b3) {
    if (b3 instanceof puzzle.LeftBank.class) {
      return puzzle.RightBank
    } else if (b3 instanceof puzzle.RightBank.class) {
      return puzzle.LeftBank
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static notSeen(state, states) {
    let tmp;
    tmp = runtime.safeCall(lambda3(state));
    return NofibPrelude.all(tmp, states)
  } 
  static writeItem(i4, b4, rest) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (i4 instanceof puzzle.Bono.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp = NofibPrelude.nofibStringToList("    Bono |                    |\n");
        return NofibPrelude.append(tmp, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp1 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
        return NofibPrelude.append(tmp1, rest)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (i4 instanceof puzzle.Edge.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp2 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return NofibPrelude.append(tmp2, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp3 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return NofibPrelude.append(tmp3, rest)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (i4 instanceof puzzle.Larry.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp4 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return NofibPrelude.append(tmp4, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp5 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return NofibPrelude.append(tmp5, rest)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (i4 instanceof puzzle.Adam.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp6 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return NofibPrelude.append(tmp6, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp7 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return NofibPrelude.append(tmp7, rest)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static writeState(state1, s8) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp1 = puzzle.bonoPos(state1);
    tmp2 = puzzle.edgePos(state1);
    tmp3 = puzzle.larryPos(state1);
    tmp4 = puzzle.adamPos(state1);
    tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp6 = NofibPrelude.append(tmp5, s8);
    tmp7 = writeItem_inst_23_43_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }, tmp4, tmp6);
    tmp8 = writeItem_inst_23_42_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }, tmp3, tmp7);
    tmp9 = writeItem_inst_23_41_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }, tmp2, tmp8);
    tmp10 = writeItem_inst_23_39_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }, tmp1, tmp9);
    return NofibPrelude.append(tmp, tmp10)
  } 
  static totalTime(history) {
    let param0, param1, first1, first0, time;
    if (history instanceof NofibPrelude.Cons.class) {
      param0 = history.head;
      param1 = history.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        time = first0;
        return time
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static writeHistory(history1, x) {
    let tmp, lambda$this;
    if (history1 instanceof NofibPrelude.Nil.class) {
      return x
    } else {
      lambda$this = runtime.safeCall(lambda_inst_24_25_tsni(history1));
      tmp = NofibPrelude.foldr(lambda$this, lambda5, history1);
      return runtime.safeCall(tmp(x))
    }
  } 
  static writeSolutions(solutions, count, s9) {
    let param0, param1, item, next, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (solutions instanceof NofibPrelude.Nil.class) {
      return s9
    } else if (solutions instanceof NofibPrelude.Cons.class) {
      param0 = solutions.head;
      param1 = solutions.tail;
      item = param0;
      next = param1;
      tmp = NofibPrelude.nofibStringToList("Solution ");
      tmp1 = NofibPrelude.stringOfInt(count);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      tmp3 = count + 1;
      tmp4 = puzzle.writeSolutions(next, tmp3, s9);
      tmp5 = writeHistory_inst_26_27_tsni(item, tmp4);
      tmp6 = NofibPrelude.Cons("\n", tmp5);
      tmp7 = NofibPrelude.append(tmp2, tmp6);
      return NofibPrelude.append(tmp, tmp7)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static minSolutions(history2) {
    let param0, param1, history3, next, tmp, tmp1, tmp2;
    if (history2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (history2 instanceof NofibPrelude.Cons.class) {
      param0 = history2.head;
      param1 = history2.tail;
      history3 = param0;
      next = param1;
      tmp = puzzle.totalTime(history3);
      tmp1 = NofibPrelude.Cons(history3, NofibPrelude.Nil);
      tmp2 = minAcc(tmp, tmp1, next);
      return NofibPrelude.reverse(tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static u2times(i5) {
    if (i5 instanceof puzzle.Bono.class) {
      return 10
    } else if (i5 instanceof puzzle.Edge.class) {
      return 5
    } else if (i5 instanceof puzzle.Larry.class) {
      return 2
    } else if (i5 instanceof puzzle.Adam.class) {
      return 1
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static transfer(source, dest, location, countdown, history3) {
    let newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    scrut = puzzle.stateEq(source, dest);
    if (scrut === true) {
      arr = globalThis.Object.freeze([
        countdown,
        dest
      ]);
      tmp = NofibPrelude.Cons(arr, history3);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else {
      arr1 = globalThis.Object.freeze([
        countdown,
        dest
      ]);
      tmp1 = NofibPrelude.Cons(arr1, history3);
      newHistory = tmp1;
      tmp2 = puzzle.opposite(location);
      newLocation = tmp2;
      tmp3 = itemFromTo_inst_28_9_tsni(puzzle.Bono, puzzle.Adam);
      tmp4 = lscomp1$_inst_28_tsni(source, dest, location, countdown, history3, newHistory, newLocation, tmp3);
      tmp5 = concat_inst_28_4_tsni(tmp4);
      moveOne = tmp5;
      tmp6 = itemFromTo_inst_28_3_tsni(puzzle.Bono, puzzle.Larry);
      tmp7 = lscomp2$_inst_28_tsni(source, dest, location, countdown, history3, newHistory, newLocation, tmp6);
      tmp8 = concat_inst_28_53_tsni(tmp7);
      moveTwo = tmp8;
      return append_inst_28_54_tsni(moveOne, moveTwo)
    }
  } 
  static testPuzzle_nofib(x1) {
    let time, scrut, solutions1, mins, tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.listLen(x1);
    scrut = tmp === 1;
    if (scrut === true) {
      tmp1 = 0;
    } else {
      throw globalThis.Error("puzzle expects exactly one argument")
    }
    time = tmp1;
    tmp2 = transfer_inst_29_30_tsni(puzzle.initialState, puzzle.finalState, puzzle.RightBank, time, NofibPrelude.Nil);
    solutions1 = tmp2;
    tmp3 = puzzle.minSolutions(solutions1);
    mins = tmp3;
    return writeSolutions_inst_29_31_tsni(mins, 1, NofibPrelude.Nil)
  } 
  static main() {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(2, NofibPrelude.Nil);
    tmp1 = testPuzzle_nofib_inst_32_33_tsni(tmp);
    return nofibListToString_inst_32_55_tsni(tmp1)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "puzzle"]; 
});
let puzzle = puzzle1; export default puzzle;
