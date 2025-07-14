import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let puzzle1, writeHistory_inst_0_tsni, writeState_inst_0_1_tsni, writeSolutions_inst_2_tsni, writeHistory_inst_2_0_tsni, writeState_inst_2_0_1_tsni, concat_inst_3_tsni, append_inst_3_4_tsni, writeSolutions_inst_5_tsni, writeHistory_inst_5_0_tsni, writeState_inst_5_0_1_tsni, transfer_inst_6_tsni, updateState_inst_6_7_tsni, itemFromTo_inst_6_8_tsni, itemFromTo_inst_6_9_tsni, itemFromTo_inst_6_10_tsni, concat_inst_6_3_tsni, append_inst_6_3_4_tsni, testPuzzle_nofib_inst_11_tsni, transfer_inst_11_6_tsni, concat_inst_11_6_3_tsni, append_inst_11_6_3_4_tsni, updateState_inst_11_6_7_tsni, itemFromTo_inst_11_6_8_tsni, itemFromTo_inst_11_6_10_tsni, itemFromTo_inst_11_6_9_tsni, writeSolutions_inst_11_5_tsni, writeHistory_inst_11_5_0_tsni, writeState_inst_11_5_0_1_tsni, append_inst_11_5_12_tsni, append_inst_11_5_13_tsni, append_inst_11_5_0_14_tsni, append_inst_11_5_0_15_tsni, append_inst_11_5_0_1_16_tsni, writeItem_inst_11_5_0_1_17_tsni, append_inst_11_5_0_1_17_18_tsni, append_inst_11_5_0_1_17_19_tsni, append_inst_11_5_0_1_17_20_tsni, append_inst_11_5_0_1_17_21_tsni, append_inst_11_5_0_1_17_22_tsni, append_inst_11_5_0_1_17_23_tsni, append_inst_11_5_0_1_17_24_tsni, append_inst_11_5_0_1_17_25_tsni, writeItem_inst_11_5_0_1_26_tsni, append_inst_11_5_0_1_26_18_tsni, append_inst_11_5_0_1_26_19_tsni, append_inst_11_5_0_1_26_20_tsni, append_inst_11_5_0_1_26_21_tsni, append_inst_11_5_0_1_26_22_tsni, append_inst_11_5_0_1_26_23_tsni, append_inst_11_5_0_1_26_24_tsni, append_inst_11_5_0_1_26_25_tsni, writeItem_inst_11_5_0_1_27_tsni, append_inst_11_5_0_1_27_18_tsni, append_inst_11_5_0_1_27_19_tsni, append_inst_11_5_0_1_27_20_tsni, append_inst_11_5_0_1_27_21_tsni, append_inst_11_5_0_1_27_22_tsni, append_inst_11_5_0_1_27_23_tsni, append_inst_11_5_0_1_27_24_tsni, append_inst_11_5_0_1_27_25_tsni, writeItem_inst_11_5_0_1_28_tsni, append_inst_11_5_0_1_28_18_tsni, append_inst_11_5_0_1_28_19_tsni, append_inst_11_5_0_1_28_20_tsni, append_inst_11_5_0_1_28_21_tsni, append_inst_11_5_0_1_28_22_tsni, append_inst_11_5_0_1_28_23_tsni, append_inst_11_5_0_1_28_24_tsni, append_inst_11_5_0_1_28_25_tsni, append_inst_11_5_0_1_29_tsni, writeItem_inst_28_tsni, writeItem_inst_27_tsni, writeItem_inst_26_tsni, writeItem_inst_17_tsni, writeItem_inst_0_1_28_tsni, writeItem_inst_0_1_27_tsni, writeItem_inst_0_1_26_tsni, writeItem_inst_0_1_17_tsni, writeItem_inst_2_0_1_17_tsni, writeItem_inst_2_0_1_26_tsni, writeItem_inst_2_0_1_27_tsni, writeItem_inst_2_0_1_28_tsni, append_inst_30_tsni, writeItem_inst_5_0_1_17_tsni, writeItem_inst_5_0_1_26_tsni, writeItem_inst_5_0_1_27_tsni, writeItem_inst_5_0_1_28_tsni, updateState_inst_6_31_tsni, concat_inst_6_32_tsni, append_inst_6_30_tsni, append_inst_11_6_30_tsni, concat_inst_11_6_32_tsni, updateState_inst_11_6_31_tsni, nofibListToString_inst_33_tsni, match_s_arm_State_inst_6_31_tsni, match_ls_arm_Cons_inst_6_tsni, match_ls_arm_Cons_inst_6_tsni1, match_ls_arm_Cons_inst_6_tsni2, match_s_arm_State_inst_11_6_31_tsni, match_ls_arm_Cons_inst_11_6_tsni, match_ls_arm_Cons_inst_11_6_tsni1, match_ls_arm_Cons_inst_11_6_tsni2, match_ls_arm_Cons_inst_33_tsni;
match_s_arm_State_inst_6_31_tsni = function match_s_arm_State_inst_6_31_tsni(i, pos, _deforest_State_b_inst_6_31_tsni, _deforest_State_e_inst_6_31_tsni, _deforest_State_l_inst_6_31_tsni, _deforest_State_a_inst_6_31_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_6_31_tsni;
  param1 = _deforest_State_e_inst_6_31_tsni;
  param2 = _deforest_State_l_inst_6_31_tsni;
  param3 = _deforest_State_a_inst_6_31_tsni;
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
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Cons_inst_6_tsni = function match_ls_arm_Cons_inst_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_6_tsni, _deforest_Cons_tail_inst_6_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_6_tsni;
  param1 = _deforest_Cons_tail_inst_6_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle.position(i, dest);
  scrut = puzzle.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle.position(j, dest);
    scrut1 = puzzle.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_6_7_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_6_31_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_6_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3(ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_6_32_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3(ys)
      }
    } else {
      return lscomp3(ys)
    }
  } else {
    return lscomp3(ys)
  }
};
match_ls_arm_Cons_inst_6_tsni1 = function match_ls_arm_Cons_inst_6_tsni(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_6_tsni, _deforest_Cons_tail_inst_6_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_6_tsni;
  param1 = _deforest_Cons_tail_inst_6_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle.position(item, dest);
  scrut = puzzle.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_6_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1(xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_6_3_tsni(xs1);
        return append_inst_6_3_4_tsni(x, tmp6)
      }
    } else {
      return lscomp1(xs)
    }
  } else {
    return lscomp1(xs)
  }
};
match_ls_arm_Cons_inst_6_tsni2 = function match_ls_arm_Cons_inst_6_tsni(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_6_tsni, _deforest_Cons_tail_inst_6_tsni) {
  let lscomp3, param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_6_tsni;
  param1 = _deforest_Cons_tail_inst_6_tsni;
  i = param0;
  xs = param1;
  lscomp3 = function lscomp3(ls) {
    return runtime.safeCall(ls(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs))
  };
  tmp = puzzle.succItem(i);
  tmp1 = itemFromTo_inst_6_8_tsni(tmp, puzzle.Adam);
  return lscomp3(tmp1)
};
match_s_arm_State_inst_11_6_31_tsni = function match_s_arm_State_inst_11_6_31_tsni(i, pos, _deforest_State_b_inst_11_6_31_tsni, _deforest_State_e_inst_11_6_31_tsni, _deforest_State_l_inst_11_6_31_tsni, _deforest_State_a_inst_11_6_31_tsni) {
  let param0, param1, param2, param3, a, b, c, d;
  param0 = _deforest_State_b_inst_11_6_31_tsni;
  param1 = _deforest_State_e_inst_11_6_31_tsni;
  param2 = _deforest_State_l_inst_11_6_31_tsni;
  param3 = _deforest_State_a_inst_11_6_31_tsni;
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
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Cons_inst_11_6_tsni = function match_ls_arm_Cons_inst_11_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head_inst_11_6_tsni, _deforest_Cons_tail_inst_11_6_tsni) {
  let param0, param1, j, ys, scrut, scrut1, newDest, scrut2, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_11_6_tsni;
  param1 = _deforest_Cons_tail_inst_11_6_tsni;
  j = param0;
  ys = param1;
  tmp = puzzle.position(i, dest);
  scrut = puzzle.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle.position(j, dest);
    scrut1 = puzzle.bankEq(tmp1, location);
    if (scrut1 === true) {
      tmp2 = updateState_inst_11_6_7_tsni(dest, i, newLocation);
      tmp3 = updateState_inst_11_6_31_tsni(tmp2, j, newLocation);
      newDest = tmp3;
      scrut2 = puzzle.notSeen(newDest, history);
      if (scrut2 === true) {
        tmp4 = puzzle.u2times(i);
        tmp5 = countdown + tmp4;
        newTime = tmp5;
        tmp6 = transfer_inst_11_6_tsni(source, newDest, newLocation, newTime, newHistory);
        tmp7 = lscomp3(ys);
        _deforest_Cons_head = tmp6;
        _deforest_Cons_tail = tmp7;
        return () => {
          let param01, param11, x, xs1, tmp8;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs1 = param11;
          tmp8 = concat_inst_11_6_32_tsni(xs1);
          return NofibPrelude.append(x, tmp8)
        }
      } else {
        return lscomp3(ys)
      }
    } else {
      return lscomp3(ys)
    }
  } else {
    return lscomp3(ys)
  }
};
match_ls_arm_Cons_inst_11_6_tsni1 = function match_ls_arm_Cons_inst_11_6_tsni(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_11_6_tsni, _deforest_Cons_tail_inst_11_6_tsni) {
  let lscomp3, param0, param1, i, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_11_6_tsni;
  param1 = _deforest_Cons_tail_inst_11_6_tsni;
  i = param0;
  xs = param1;
  lscomp3 = function lscomp3(ls) {
    return runtime.safeCall(ls(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs))
  };
  tmp = puzzle.succItem(i);
  tmp1 = itemFromTo_inst_11_6_8_tsni(tmp, puzzle.Adam);
  return lscomp3(tmp1)
};
match_ls_arm_Cons_inst_11_6_tsni2 = function match_ls_arm_Cons_inst_11_6_tsni(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head_inst_11_6_tsni, _deforest_Cons_tail_inst_11_6_tsni) {
  let param0, param1, item, xs, scrut, newDest, scrut1, newTime, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_11_6_tsni;
  param1 = _deforest_Cons_tail_inst_11_6_tsni;
  item = param0;
  xs = param1;
  tmp = puzzle.position(item, dest);
  scrut = puzzle.bankEq(tmp, location);
  if (scrut === true) {
    tmp1 = puzzle.updateState(dest, item, newLocation);
    newDest = tmp1;
    scrut1 = puzzle.notSeen(newDest, history);
    if (scrut1 === true) {
      tmp2 = puzzle.u2times(item);
      tmp3 = countdown + tmp2;
      newTime = tmp3;
      tmp4 = transfer_inst_11_6_tsni(source, newDest, newLocation, newTime, newHistory);
      tmp5 = lscomp1(xs);
      _deforest_Cons_head = tmp4;
      _deforest_Cons_tail = tmp5;
      return () => {
        let param01, param11, x, xs1, tmp6;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs1 = param11;
        tmp6 = concat_inst_11_6_3_tsni(xs1);
        return append_inst_11_6_3_4_tsni(x, tmp6)
      }
    } else {
      return lscomp1(xs)
    }
  } else {
    return lscomp1(xs)
  }
};
match_ls_arm_Cons_inst_33_tsni = function match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head_inst_33_tsni, _deforest_Cons_tail_inst_33_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_33_tsni;
  param1 = _deforest_Cons_tail_inst_33_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_33_tsni(t);
  return h + tmp
};
writeHistory_inst_0_tsni = function writeHistory_inst_0_tsni(history, x) {
  let tmp, lambda, lambda1;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda = (undefined, function (timestate, acc) {
      let lambda2;
      lambda2 = (undefined, function (s) {
        let first1, first0, time, state, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        if (globalThis.Array.isArray(timestate) && timestate.length === 2) {
          first0 = timestate[0];
          first1 = timestate[1];
          time = first0;
          state = first1;
          tmp1 = NofibPrelude.nofibStringToList("Time: ");
          tmp2 = puzzle.totalTime(history);
          tmp3 = tmp2 - time;
          tmp4 = NofibPrelude.stringOfInt(tmp3);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = runtime.safeCall(acc(s));
          tmp7 = writeState_inst_0_1_tsni(state, tmp6);
          tmp8 = NofibPrelude.Cons("\n", tmp7);
          tmp9 = NofibPrelude.append(tmp5, tmp8);
          return NofibPrelude.append(tmp1, tmp9)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      return lambda2
    });
    lambda1 = (undefined, function (x1) {
      return x1
    });
    tmp = NofibPrelude.foldr(lambda, lambda1, history);
    return runtime.safeCall(tmp(x))
  }
};
writeState_inst_0_1_tsni = function writeState_inst_0_1_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_0_1_17_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_0_1_26_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_0_1_27_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_0_1_28_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
writeSolutions_inst_2_tsni = function writeSolutions_inst_2_tsni(solutions, count, s) {
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
    tmp4 = writeSolutions_inst_2_tsni(next, tmp3, s);
    tmp5 = writeHistory_inst_2_0_tsni(item, tmp4);
    tmp6 = NofibPrelude.Cons("\n", tmp5);
    tmp7 = NofibPrelude.append(tmp2, tmp6);
    return NofibPrelude.append(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
writeHistory_inst_2_0_tsni = function writeHistory_inst_2_0_tsni(history, x) {
  let tmp, lambda, lambda1;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda = (undefined, function (timestate, acc) {
      let lambda2;
      lambda2 = (undefined, function (s) {
        let first1, first0, time, state, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        if (globalThis.Array.isArray(timestate) && timestate.length === 2) {
          first0 = timestate[0];
          first1 = timestate[1];
          time = first0;
          state = first1;
          tmp1 = NofibPrelude.nofibStringToList("Time: ");
          tmp2 = puzzle.totalTime(history);
          tmp3 = tmp2 - time;
          tmp4 = NofibPrelude.stringOfInt(tmp3);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = runtime.safeCall(acc(s));
          tmp7 = writeState_inst_2_0_1_tsni(state, tmp6);
          tmp8 = NofibPrelude.Cons("\n", tmp7);
          tmp9 = NofibPrelude.append(tmp5, tmp8);
          return NofibPrelude.append(tmp1, tmp9)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      return lambda2
    });
    lambda1 = (undefined, function (x1) {
      return x1
    });
    tmp = NofibPrelude.foldr(lambda, lambda1, history);
    return runtime.safeCall(tmp(x))
  }
};
writeState_inst_2_0_1_tsni = function writeState_inst_2_0_1_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_2_0_1_17_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_2_0_1_26_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_2_0_1_27_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_2_0_1_28_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
concat_inst_3_tsni = function concat_inst_3_tsni(ls) {
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
    tmp = concat_inst_3_tsni(xs);
    return append_inst_3_4_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_3_4_tsni = function append_inst_3_4_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_3_4_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_30_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeSolutions_inst_5_tsni = function writeSolutions_inst_5_tsni(solutions, count, s) {
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
    tmp4 = writeSolutions_inst_5_tsni(next, tmp3, s);
    tmp5 = writeHistory_inst_5_0_tsni(item, tmp4);
    tmp6 = NofibPrelude.Cons("\n", tmp5);
    tmp7 = NofibPrelude.append(tmp2, tmp6);
    return NofibPrelude.append(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
writeHistory_inst_5_0_tsni = function writeHistory_inst_5_0_tsni(history, x) {
  let tmp, lambda, lambda1;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda = (undefined, function (timestate, acc) {
      let lambda2;
      lambda2 = (undefined, function (s) {
        let first1, first0, time, state, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        if (globalThis.Array.isArray(timestate) && timestate.length === 2) {
          first0 = timestate[0];
          first1 = timestate[1];
          time = first0;
          state = first1;
          tmp1 = NofibPrelude.nofibStringToList("Time: ");
          tmp2 = puzzle.totalTime(history);
          tmp3 = tmp2 - time;
          tmp4 = NofibPrelude.stringOfInt(tmp3);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = runtime.safeCall(acc(s));
          tmp7 = writeState_inst_5_0_1_tsni(state, tmp6);
          tmp8 = NofibPrelude.Cons("\n", tmp7);
          tmp9 = NofibPrelude.append(tmp5, tmp8);
          return NofibPrelude.append(tmp1, tmp9)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      return lambda2
    });
    lambda1 = (undefined, function (x1) {
      return x1
    });
    tmp = NofibPrelude.foldr(lambda, lambda1, history);
    return runtime.safeCall(tmp(x))
  }
};
writeState_inst_5_0_1_tsni = function writeState_inst_5_0_1_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = NofibPrelude.append(tmp5, s);
  tmp7 = writeItem_inst_5_0_1_17_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_5_0_1_26_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_5_0_1_27_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_5_0_1_28_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return NofibPrelude.append(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return NofibPrelude.append(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp1, tmp9);
  return NofibPrelude.append(tmp, tmp10)
};
transfer_inst_6_tsni = function transfer_inst_6_tsni(source, dest, location, countdown, history) {
  let lscomp2, lscomp1, newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = [
      countdown,
      dest
    ];
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, source, dest, location, countdown, history, newHistory, newLocation))
    };
    lscomp2 = function lscomp2(ls) {
      return runtime.safeCall(ls(lscomp2, source, dest, location, countdown, history, newHistory, newLocation))
    };
    arr1 = [
      countdown,
      dest
    ];
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_6_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1(tmp3);
    tmp5 = concat_inst_6_3_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_6_10_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2(tmp6);
    tmp8 = concat_inst_6_32_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_6_30_tsni(moveOne, moveTwo)
  }
};
updateState_inst_6_7_tsni = function updateState_inst_6_7_tsni(s, i, pos) {
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
        return match_s_arm_State_inst_6_31_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = pos;
      _deforest_State_l1 = c;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_31_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = b;
      _deforest_State_l2 = pos;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_31_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b3 = a;
      _deforest_State_e3 = b;
      _deforest_State_l3 = c;
      _deforest_State_a3 = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_6_31_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
itemFromTo_inst_6_8_tsni = function itemFromTo_inst_6_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2(xs)
    };
    return (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_6_8_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_6_9_tsni = function itemFromTo_inst_6_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_tsni1(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_6_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_tsni1(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_6_10_tsni = function itemFromTo_inst_6_10_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_tsni2(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_6_10_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_6_tsni2(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
concat_inst_6_3_tsni = function concat_inst_6_3_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_6_3_4_tsni = function append_inst_6_3_4_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_6_3_4_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_6_30_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testPuzzle_nofib_inst_11_tsni = function testPuzzle_nofib_inst_11_tsni(x) {
  let time, scrut, solutions, mins, tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.listLen(x);
  scrut = tmp === 1;
  if (scrut === true) {
    tmp1 = 0;
  } else {
    throw globalThis.Error("puzzle expects exactly one argument");
  }
  time = tmp1;
  tmp2 = transfer_inst_11_6_tsni(puzzle.initialState, puzzle.finalState, puzzle.RightBank, time, NofibPrelude.Nil);
  solutions = tmp2;
  tmp3 = puzzle.minSolutions(solutions);
  mins = tmp3;
  return writeSolutions_inst_11_5_tsni(mins, 1, () => {
    return ""
  })
};
transfer_inst_11_6_tsni = function transfer_inst_11_6_tsni(source, dest, location, countdown, history) {
  let lscomp2, lscomp1, newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  scrut = puzzle.stateEq(source, dest);
  if (scrut === true) {
    arr = [
      countdown,
      dest
    ];
    tmp = NofibPrelude.Cons(arr, history);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  } else {
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, source, dest, location, countdown, history, newHistory, newLocation))
    };
    lscomp2 = function lscomp2(ls) {
      return runtime.safeCall(ls(lscomp2, source, dest, location, countdown, history, newHistory, newLocation))
    };
    arr1 = [
      countdown,
      dest
    ];
    tmp1 = NofibPrelude.Cons(arr1, history);
    newHistory = tmp1;
    tmp2 = puzzle.opposite(location);
    newLocation = tmp2;
    tmp3 = itemFromTo_inst_11_6_9_tsni(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1(tmp3);
    tmp5 = concat_inst_11_6_3_tsni(tmp4);
    moveOne = tmp5;
    tmp6 = itemFromTo_inst_11_6_10_tsni(puzzle.Bono, puzzle.Larry);
    tmp7 = lscomp2(tmp6);
    tmp8 = concat_inst_11_6_32_tsni(tmp7);
    moveTwo = tmp8;
    return append_inst_11_6_30_tsni(moveOne, moveTwo)
  }
};
concat_inst_11_6_3_tsni = function concat_inst_11_6_3_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_11_6_3_4_tsni = function append_inst_11_6_3_4_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_6_3_4_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_11_6_30_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
updateState_inst_11_6_7_tsni = function updateState_inst_11_6_7_tsni(s, i, pos) {
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
        return match_s_arm_State_inst_11_6_31_tsni(i1, pos1, _deforest_State_b3, _deforest_State_e3, _deforest_State_l3, _deforest_State_a3)
      }
    } else if (i instanceof puzzle.Edge.class) {
      _deforest_State_b2 = a;
      _deforest_State_e2 = pos;
      _deforest_State_l2 = c;
      _deforest_State_a2 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_11_6_31_tsni(i1, pos1, _deforest_State_b2, _deforest_State_e2, _deforest_State_l2, _deforest_State_a2)
      }
    } else if (i instanceof puzzle.Larry.class) {
      _deforest_State_b1 = a;
      _deforest_State_e1 = b;
      _deforest_State_l1 = pos;
      _deforest_State_a1 = d;
      return (i1, pos1) => {
        return match_s_arm_State_inst_11_6_31_tsni(i1, pos1, _deforest_State_b1, _deforest_State_e1, _deforest_State_l1, _deforest_State_a1)
      }
    } else if (i instanceof puzzle.Adam.class) {
      _deforest_State_b = a;
      _deforest_State_e = b;
      _deforest_State_l = c;
      _deforest_State_a = pos;
      return (i1, pos1) => {
        return match_s_arm_State_inst_11_6_31_tsni(i1, pos1, _deforest_State_b, _deforest_State_e, _deforest_State_l, _deforest_State_a)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
itemFromTo_inst_11_6_8_tsni = function itemFromTo_inst_11_6_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return lscomp2(xs)
    };
    return (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_11_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_11_6_8_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs) => {
      return match_ls_arm_Cons_inst_11_6_tsni(lscomp3, lscomp2, source, dest, location, countdown, history, newHistory, newLocation, i, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_11_6_10_tsni = function itemFromTo_inst_11_6_10_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    return (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_11_6_tsni1(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_11_6_10_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp2, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_11_6_tsni1(lscomp2, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
itemFromTo_inst_11_6_9_tsni = function itemFromTo_inst_11_6_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = puzzle.itemEq(a, b);
  if (scrut === true) {
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_11_6_tsni2(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    tmp = puzzle.succItem(a);
    tmp1 = itemFromTo_inst_11_6_9_tsni(tmp, b);
    _deforest_Cons_head1 = a;
    _deforest_Cons_tail1 = tmp1;
    return (lscomp1, source, dest, location, countdown, history, newHistory, newLocation) => {
      return match_ls_arm_Cons_inst_11_6_tsni2(lscomp1, source, dest, location, countdown, history, newHistory, newLocation, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
writeSolutions_inst_11_5_tsni = function writeSolutions_inst_11_5_tsni(solutions, count, s) {
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
    tmp4 = writeSolutions_inst_11_5_tsni(next, tmp3, s);
    tmp5 = writeHistory_inst_11_5_0_tsni(item, tmp4);
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = tmp5;
    tmp6 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp7 = append_inst_11_5_13_tsni(tmp2, tmp6);
    return append_inst_11_5_12_tsni(tmp, tmp7)
  } else {
    throw new globalThis.Error("match error");
  }
};
writeHistory_inst_11_5_0_tsni = function writeHistory_inst_11_5_0_tsni(history, x) {
  let tmp, lambda, lambda1;
  if (history instanceof NofibPrelude.Nil.class) {
    return x
  } else {
    lambda = (undefined, function (timestate, acc) {
      let lambda2;
      lambda2 = (undefined, function (s) {
        let first1, first0, time, state, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail;
        if (globalThis.Array.isArray(timestate) && timestate.length === 2) {
          first0 = timestate[0];
          first1 = timestate[1];
          time = first0;
          state = first1;
          tmp1 = NofibPrelude.nofibStringToList("Time: ");
          tmp2 = puzzle.totalTime(history);
          tmp3 = tmp2 - time;
          tmp4 = NofibPrelude.stringOfInt(tmp3);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = runtime.safeCall(acc(s));
          tmp7 = writeState_inst_11_5_0_1_tsni(state, tmp6);
          _deforest_Cons_head = "\n";
          _deforest_Cons_tail = tmp7;
          tmp8 = () => {
            return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
          };
          tmp9 = append_inst_11_5_0_15_tsni(tmp5, tmp8);
          return append_inst_11_5_0_14_tsni(tmp1, tmp9)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      return lambda2
    });
    lambda1 = (undefined, function (x1) {
      return x1
    });
    tmp = NofibPrelude.foldr(lambda, lambda1, history);
    return runtime.safeCall(tmp(x))
  }
};
writeState_inst_11_5_0_1_tsni = function writeState_inst_11_5_0_1_tsni(state, s) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp1 = puzzle.bonoPos(state);
  tmp2 = puzzle.edgePos(state);
  tmp3 = puzzle.larryPos(state);
  tmp4 = puzzle.adamPos(state);
  tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
  tmp6 = append_inst_11_5_0_1_16_tsni(tmp5, s);
  tmp7 = writeItem_inst_11_5_0_1_17_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
      return append_inst_11_5_0_1_17_18_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
      return append_inst_11_5_0_1_17_19_tsni(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp4, tmp6);
  tmp8 = writeItem_inst_11_5_0_1_26_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
      return append_inst_11_5_0_1_26_20_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
      return append_inst_11_5_0_1_26_21_tsni(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp3, tmp7);
  tmp9 = writeItem_inst_11_5_0_1_27_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
      return append_inst_11_5_0_1_27_22_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
      return append_inst_11_5_0_1_27_23_tsni(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp2, tmp8);
  tmp10 = writeItem_inst_11_5_0_1_28_tsni((b, rest) => {
    let tmp11, tmp12;
    if (b instanceof puzzle.LeftBank.class) {
      tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
      return append_inst_11_5_0_1_28_24_tsni(tmp11, rest)
    } else if (b instanceof puzzle.RightBank.class) {
      tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
      return append_inst_11_5_0_1_28_25_tsni(tmp12, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  }, tmp1, tmp9);
  return append_inst_11_5_0_1_29_tsni(tmp, tmp10)
};
append_inst_11_5_12_tsni = function append_inst_11_5_12_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_12_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_13_tsni = function append_inst_11_5_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_14_tsni = function append_inst_11_5_0_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_15_tsni = function append_inst_11_5_0_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_16_tsni = function append_inst_11_5_0_1_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeItem_inst_11_5_0_1_17_tsni = function writeItem_inst_11_5_0_1_17_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_11_5_0_1_17_18_tsni = function append_inst_11_5_0_1_17_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_19_tsni = function append_inst_11_5_0_1_17_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_20_tsni = function append_inst_11_5_0_1_17_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_21_tsni = function append_inst_11_5_0_1_17_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_22_tsni = function append_inst_11_5_0_1_17_22_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_22_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_23_tsni = function append_inst_11_5_0_1_17_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_24_tsni = function append_inst_11_5_0_1_17_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_17_25_tsni = function append_inst_11_5_0_1_17_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_17_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeItem_inst_11_5_0_1_26_tsni = function writeItem_inst_11_5_0_1_26_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_11_5_0_1_26_18_tsni = function append_inst_11_5_0_1_26_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_19_tsni = function append_inst_11_5_0_1_26_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_20_tsni = function append_inst_11_5_0_1_26_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_21_tsni = function append_inst_11_5_0_1_26_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_22_tsni = function append_inst_11_5_0_1_26_22_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_22_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_23_tsni = function append_inst_11_5_0_1_26_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_24_tsni = function append_inst_11_5_0_1_26_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_26_25_tsni = function append_inst_11_5_0_1_26_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_26_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeItem_inst_11_5_0_1_27_tsni = function writeItem_inst_11_5_0_1_27_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_11_5_0_1_27_18_tsni = function append_inst_11_5_0_1_27_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_19_tsni = function append_inst_11_5_0_1_27_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_20_tsni = function append_inst_11_5_0_1_27_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_21_tsni = function append_inst_11_5_0_1_27_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_22_tsni = function append_inst_11_5_0_1_27_22_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_22_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_23_tsni = function append_inst_11_5_0_1_27_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_24_tsni = function append_inst_11_5_0_1_27_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_27_25_tsni = function append_inst_11_5_0_1_27_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_27_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeItem_inst_11_5_0_1_28_tsni = function writeItem_inst_11_5_0_1_28_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_11_5_0_1_28_18_tsni = function append_inst_11_5_0_1_28_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_19_tsni = function append_inst_11_5_0_1_28_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_20_tsni = function append_inst_11_5_0_1_28_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_21_tsni = function append_inst_11_5_0_1_28_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_22_tsni = function append_inst_11_5_0_1_28_22_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_22_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_23_tsni = function append_inst_11_5_0_1_28_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_24_tsni = function append_inst_11_5_0_1_28_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_28_25_tsni = function append_inst_11_5_0_1_28_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_28_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_11_5_0_1_29_tsni = function append_inst_11_5_0_1_29_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_11_5_0_1_29_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeItem_inst_28_tsni = function writeItem_inst_28_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_27_tsni = function writeItem_inst_27_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_26_tsni = function writeItem_inst_26_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_17_tsni = function writeItem_inst_17_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_0_1_28_tsni = function writeItem_inst_0_1_28_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_0_1_27_tsni = function writeItem_inst_0_1_27_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_0_1_26_tsni = function writeItem_inst_0_1_26_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_0_1_17_tsni = function writeItem_inst_0_1_17_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_2_0_1_17_tsni = function writeItem_inst_2_0_1_17_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_2_0_1_26_tsni = function writeItem_inst_2_0_1_26_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_2_0_1_27_tsni = function writeItem_inst_2_0_1_27_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_2_0_1_28_tsni = function writeItem_inst_2_0_1_28_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
append_inst_30_tsni = function append_inst_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeItem_inst_5_0_1_17_tsni = function writeItem_inst_5_0_1_17_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_5_0_1_26_tsni = function writeItem_inst_5_0_1_26_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_5_0_1_27_tsni = function writeItem_inst_5_0_1_27_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
writeItem_inst_5_0_1_28_tsni = function writeItem_inst_5_0_1_28_tsni(i, b, rest) {
  return runtime.safeCall(i(b, rest))
};
updateState_inst_6_31_tsni = function updateState_inst_6_31_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
concat_inst_6_32_tsni = function concat_inst_6_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_6_30_tsni = function append_inst_6_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_6_30_tsni = function append_inst_11_6_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_11_6_32_tsni = function concat_inst_11_6_32_tsni(ls) {
  return runtime.safeCall(ls())
};
updateState_inst_11_6_31_tsni = function updateState_inst_11_6_31_tsni(s, i, pos) {
  return runtime.safeCall(s(i, pos))
};
nofibListToString_inst_33_tsni = function nofibListToString_inst_33_tsni(ls) {
  return runtime.safeCall(ls())
};
(class puzzle {
  static {
    puzzle1 = puzzle;
    let tmp, tmp1;
    this.ItemType = class ItemType {
      constructor() {}
      toString() { return "ItemType"; }
    };
    const Bono$class = class Bono extends puzzle.ItemType {
      constructor() {
        super();
      }
      toString() { return "Bono"; }
    };
    this.Bono = new Bono$class;
    this.Bono.class = Bono$class;
    const Edge$class = class Edge extends puzzle.ItemType {
      constructor() {
        super();
      }
      toString() { return "Edge"; }
    };
    this.Edge = new Edge$class;
    this.Edge.class = Edge$class;
    const Larry$class = class Larry extends puzzle.ItemType {
      constructor() {
        super();
      }
      toString() { return "Larry"; }
    };
    this.Larry = new Larry$class;
    this.Larry.class = Larry$class;
    const Adam$class = class Adam extends puzzle.ItemType {
      constructor() {
        super();
      }
      toString() { return "Adam"; }
    };
    this.Adam = new Adam$class;
    this.Adam.class = Adam$class;
    this.BankType = class BankType {
      constructor() {}
      toString() { return "BankType"; }
    };
    const LeftBank$class = class LeftBank extends puzzle.BankType {
      constructor() {
        super();
      }
      toString() { return "LeftBank"; }
    };
    this.LeftBank = new LeftBank$class;
    this.LeftBank.class = LeftBank$class;
    const RightBank$class = class RightBank extends puzzle.BankType {
      constructor() {
        super();
      }
      toString() { return "RightBank"; }
    };
    this.RightBank = new RightBank$class;
    this.RightBank.class = RightBank$class;
    this.State = function State(b1, e1, l1, a1) {
      return new State.class(b1, e1, l1, a1);
    };
    this.State.class = class State {
      constructor(b, e, l, a) {
        this.b = b;
        this.e = e;
        this.l = l;
        this.a = a;
      }
      toString() { return "State(" + runtime.render(this.b) + ", " + runtime.render(this.e) + ", " + runtime.render(this.l) + ", " + runtime.render(this.a) + ")"; }
    };
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
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
    let param0, param1, param2, param3, a3, b3, c, d, param01, param11, param21, param31, e, f, g, h, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
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
        tmp1 = puzzle.bankEq(b3, f);
        tmp2 = tmp && tmp1;
        tmp3 = puzzle.bankEq(c, g);
        tmp4 = tmp2 && tmp3;
        tmp5 = puzzle.bankEq(d, h);
        return tmp4 && tmp5
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
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
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static opposite(b3) {
    if (b3 instanceof puzzle.LeftBank.class) {
      return puzzle.RightBank
    } else if (b3 instanceof puzzle.RightBank.class) {
      return puzzle.LeftBank
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static notSeen(state, states) {
    let tmp, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, s8, tmp1;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        s8 = first1;
        tmp1 = puzzle.stateEq(state, s8);
        return Predef.not(tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
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
        throw new globalThis.Error("match error");
      }
    } else if (i4 instanceof puzzle.Edge.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp2 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return NofibPrelude.append(tmp2, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp3 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return NofibPrelude.append(tmp3, rest)
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (i4 instanceof puzzle.Larry.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp4 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return NofibPrelude.append(tmp4, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp5 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return NofibPrelude.append(tmp5, rest)
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (i4 instanceof puzzle.Adam.class) {
      if (b4 instanceof puzzle.LeftBank.class) {
        tmp6 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return NofibPrelude.append(tmp6, rest)
      } else if (b4 instanceof puzzle.RightBank.class) {
        tmp7 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return NofibPrelude.append(tmp7, rest)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
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
    tmp7 = writeItem_inst_17_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw new globalThis.Error("match error");
      }
    }, tmp4, tmp6);
    tmp8 = writeItem_inst_26_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw new globalThis.Error("match error");
      }
    }, tmp3, tmp7);
    tmp9 = writeItem_inst_27_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw new globalThis.Error("match error");
      }
    }, tmp2, tmp8);
    tmp10 = writeItem_inst_28_tsni((b5, rest1) => {
      let tmp11, tmp12;
      if (b5 instanceof puzzle.LeftBank.class) {
        tmp11 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
        return NofibPrelude.append(tmp11, rest1)
      } else if (b5 instanceof puzzle.RightBank.class) {
        tmp12 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
        return NofibPrelude.append(tmp12, rest1)
      } else {
        throw new globalThis.Error("match error");
      }
    }, tmp1, tmp9);
    return NofibPrelude.append(tmp, tmp10)
  } 
  static totalTime(history) {
    let param0, param1, first1, first0, time;
    if (history instanceof NofibPrelude.Cons.class) {
      param0 = history.head;
      param1 = history.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        time = first0;
        return time
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static writeHistory(history1, x) {
    let tmp, lambda, lambda1;
    if (history1 instanceof NofibPrelude.Nil.class) {
      return x
    } else {
      lambda = (undefined, function (timestate, acc) {
        let lambda2;
        lambda2 = (undefined, function (s9) {
          let first1, first0, time, state2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
          if (globalThis.Array.isArray(timestate) && timestate.length === 2) {
            first0 = timestate[0];
            first1 = timestate[1];
            time = first0;
            state2 = first1;
            tmp1 = NofibPrelude.nofibStringToList("Time: ");
            tmp2 = puzzle.totalTime(history1);
            tmp3 = tmp2 - time;
            tmp4 = NofibPrelude.stringOfInt(tmp3);
            tmp5 = NofibPrelude.nofibStringToList(tmp4);
            tmp6 = runtime.safeCall(acc(s9));
            tmp7 = puzzle.writeState(state2, tmp6);
            tmp8 = NofibPrelude.Cons("\n", tmp7);
            tmp9 = NofibPrelude.append(tmp5, tmp8);
            return NofibPrelude.append(tmp1, tmp9)
          } else {
            throw new globalThis.Error("match error");
          }
        });
        return lambda2
      });
      lambda1 = (undefined, function (x1) {
        return x1
      });
      tmp = NofibPrelude.foldr(lambda, lambda1, history1);
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
      tmp4 = writeSolutions_inst_2_tsni(next, tmp3, s9);
      tmp5 = writeHistory_inst_0_tsni(item, tmp4);
      tmp6 = NofibPrelude.Cons("\n", tmp5);
      tmp7 = NofibPrelude.append(tmp2, tmp6);
      return NofibPrelude.append(tmp, tmp7)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static minSolutions(history2) {
    let minAcc, param0, param1, history3, next, tmp, tmp1, tmp2;
    if (history2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (history2 instanceof NofibPrelude.Cons.class) {
      param0 = history2.head;
      param1 = history2.tail;
      history3 = param0;
      next = param1;
      minAcc = function minAcc(minSoFar, mins, ls) {
        let param01, param11, history4, next1, total, scrut, scrut1, tmp3, tmp4, tmp5;
        if (ls instanceof NofibPrelude.Nil.class) {
          return mins
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param01 = ls.head;
          param11 = ls.tail;
          history4 = param01;
          next1 = param11;
          tmp3 = puzzle.totalTime(history4);
          total = tmp3;
          scrut1 = minSoFar < total;
          if (scrut1 === true) {
            return minAcc(minSoFar, mins, next1)
          } else {
            scrut = minSoFar === total;
            if (scrut === true) {
              tmp4 = NofibPrelude.Cons(history4, mins);
              return minAcc(minSoFar, tmp4, next1)
            } else {
              tmp5 = NofibPrelude.Cons(history4, NofibPrelude.Nil);
              return minAcc(total, tmp5, next1)
            }
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = puzzle.totalTime(history3);
      tmp1 = NofibPrelude.Cons(history3, NofibPrelude.Nil);
      tmp2 = minAcc(tmp, tmp1, next);
      return NofibPrelude.reverse(tmp2)
    } else {
      throw new globalThis.Error("match error");
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
      throw new globalThis.Error("match error");
    }
  } 
  static transfer(source, dest, location, countdown, history3) {
    let lscomp2, lscomp1, newHistory, newLocation, moveOne, moveTwo, scrut, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    scrut = puzzle.stateEq(source, dest);
    if (scrut === true) {
      arr = [
        countdown,
        dest
      ];
      tmp = NofibPrelude.Cons(arr, history3);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else {
      lscomp1 = function lscomp1(ls) {
        let param0, param1, item, xs, scrut1, newDest, scrut2, newTime, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          item = param0;
          xs = param1;
          tmp9 = puzzle.position(item, dest);
          scrut1 = puzzle.bankEq(tmp9, location);
          if (scrut1 === true) {
            tmp10 = puzzle.updateState(dest, item, newLocation);
            newDest = tmp10;
            scrut2 = puzzle.notSeen(newDest, history3);
            if (scrut2 === true) {
              tmp11 = puzzle.u2times(item);
              tmp12 = countdown + tmp11;
              newTime = tmp12;
              tmp13 = puzzle.transfer(source, newDest, newLocation, newTime, newHistory);
              tmp14 = lscomp1(xs);
              return NofibPrelude.Cons(tmp13, tmp14)
            } else {
              return lscomp1(xs)
            }
          } else {
            return lscomp1(xs)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls) {
        let lscomp3, param0, param1, i6, xs, tmp9, tmp10;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          i6 = param0;
          xs = param1;
          lscomp3 = function lscomp3(ls1) {
            let param01, param11, j, ys, scrut1, scrut2, newDest, scrut3, newTime, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18;
            if (ls1 instanceof NofibPrelude.Nil.class) {
              return lscomp2(xs)
            } else if (ls1 instanceof NofibPrelude.Cons.class) {
              param01 = ls1.head;
              param11 = ls1.tail;
              j = param01;
              ys = param11;
              tmp11 = puzzle.position(i6, dest);
              scrut1 = puzzle.bankEq(tmp11, location);
              if (scrut1 === true) {
                tmp12 = puzzle.position(j, dest);
                scrut2 = puzzle.bankEq(tmp12, location);
                if (scrut2 === true) {
                  tmp13 = puzzle.updateState(dest, i6, newLocation);
                  tmp14 = puzzle.updateState(tmp13, j, newLocation);
                  newDest = tmp14;
                  scrut3 = puzzle.notSeen(newDest, history3);
                  if (scrut3 === true) {
                    tmp15 = puzzle.u2times(i6);
                    tmp16 = countdown + tmp15;
                    newTime = tmp16;
                    tmp17 = puzzle.transfer(source, newDest, newLocation, newTime, newHistory);
                    tmp18 = lscomp3(ys);
                    return NofibPrelude.Cons(tmp17, tmp18)
                  } else {
                    return lscomp3(ys)
                  }
                } else {
                  return lscomp3(ys)
                }
              } else {
                return lscomp3(ys)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp9 = puzzle.succItem(i6);
          tmp10 = puzzle.itemFromTo(tmp9, puzzle.Adam);
          return lscomp3(tmp10)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      arr1 = [
        countdown,
        dest
      ];
      tmp1 = NofibPrelude.Cons(arr1, history3);
      newHistory = tmp1;
      tmp2 = puzzle.opposite(location);
      newLocation = tmp2;
      tmp3 = puzzle.itemFromTo(puzzle.Bono, puzzle.Adam);
      tmp4 = lscomp1(tmp3);
      tmp5 = concat_inst_3_tsni(tmp4);
      moveOne = tmp5;
      tmp6 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
      tmp7 = lscomp2(tmp6);
      tmp8 = NofibPrelude.concat(tmp7);
      moveTwo = tmp8;
      return append_inst_30_tsni(moveOne, moveTwo)
    }
  } 
  static testPuzzle_nofib(x1) {
    let time, scrut, solutions1, mins, tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.listLen(x1);
    scrut = tmp === 1;
    if (scrut === true) {
      tmp1 = 0;
    } else {
      throw globalThis.Error("puzzle expects exactly one argument");
    }
    time = tmp1;
    tmp2 = transfer_inst_6_tsni(puzzle.initialState, puzzle.finalState, puzzle.RightBank, time, NofibPrelude.Nil);
    solutions1 = tmp2;
    tmp3 = puzzle.minSolutions(solutions1);
    mins = tmp3;
    return writeSolutions_inst_5_tsni(mins, 1, NofibPrelude.Nil)
  } 
  static main() {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(2, NofibPrelude.Nil);
    tmp1 = testPuzzle_nofib_inst_11_tsni(tmp);
    return nofibListToString_inst_33_tsni(tmp1)
  }
  static toString() { return "puzzle"; }
});
let puzzle = puzzle1; export default puzzle;
