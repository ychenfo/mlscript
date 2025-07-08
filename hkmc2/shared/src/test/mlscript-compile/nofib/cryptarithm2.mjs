import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cryptarithm21, map_inst_0_tsni, map_inst_1_tsni, bind_inst_2_tsni, map_inst_2_3_tsni, bind_inst_4_tsni, map_inst_4_3_tsni, bind_inst_5_tsni, map_inst_5_3_tsni, bind_inst_6_tsni, map_inst_6_3_tsni, mapM_inst_7_tsni, bind_inst_7_8_tsni, map_inst_7_8_3_tsni, bind_inst_7_9_tsni, map_inst_7_9_3_tsni, select_inst_10_tsni, lookup_inst_10_11_tsni, permute_inst_10_12_tsni, bind_inst_10_12_2_tsni, map_inst_10_12_2_3_tsni, bind_inst_10_12_13_tsni, map_inst_10_12_13_3_tsni, bind_inst_10_12_14_tsni, map_inst_10_12_14_3_tsni, put_inst_10_12_15_tsni, lift_inst_10_12_16_tsni, map_inst_10_12_16_17_tsni, map_inst_10_12_18_tsni, bind_inst_10_4_tsni, map_inst_10_4_3_tsni, return__inst_19_tsni, unlines_inst_20_tsni, map_inst_20_0_tsni, map_inst_21_tsni, concat_inst_22_tsni, append_inst_22_23_tsni, execStateT_inst_24_tsni, map_inst_24_1_tsni, concat_inst_24_25_tsni, append_inst_24_25_23_tsni, solve_inst_26_tsni, select_inst_26_10_tsni, bind_inst_26_10_4_tsni, map_inst_26_10_4_3_tsni, permute_inst_26_10_12_tsni, lift_inst_26_10_12_16_tsni, map_inst_26_10_12_16_17_tsni, map_inst_26_10_12_18_tsni, bind_inst_26_10_12_14_tsni, map_inst_26_10_12_14_3_tsni, put_inst_26_10_12_15_tsni, bind_inst_26_10_12_13_tsni, map_inst_26_10_12_13_3_tsni, bind_inst_26_10_12_2_tsni, map_inst_26_10_12_2_3_tsni, lookup_inst_26_10_11_tsni, mapM_inst_26_7_tsni, bind_inst_26_7_9_tsni, map_inst_26_7_9_3_tsni, bind_inst_26_7_8_tsni, map_inst_26_7_8_3_tsni, bind_inst_26_6_tsni, map_inst_26_6_3_tsni, select_inst_26_27_tsni, bind_inst_26_27_4_tsni, map_inst_26_27_4_3_tsni, permute_inst_26_27_12_tsni, lift_inst_26_27_12_16_tsni, map_inst_26_27_12_16_17_tsni, map_inst_26_27_12_18_tsni, bind_inst_26_27_12_14_tsni, map_inst_26_27_12_14_3_tsni, put_inst_26_27_12_15_tsni, bind_inst_26_27_12_13_tsni, map_inst_26_27_12_13_3_tsni, bind_inst_26_27_12_2_tsni, map_inst_26_27_12_2_3_tsni, lookup_inst_26_27_11_tsni, bind_inst_26_28_tsni, map_inst_26_28_3_tsni, guard_inst_26_29_tsni, bind_inst_26_30_tsni, map_inst_26_30_3_tsni, bind_inst_26_5_tsni, map_inst_26_5_3_tsni, return__inst_26_19_tsni, puzzle_inst_31_tsni, solve_inst_31_26_tsni, bind_inst_31_26_5_tsni, map_inst_31_26_5_3_tsni, bind_inst_31_26_30_tsni, map_inst_31_26_30_3_tsni, bind_inst_31_26_28_tsni, map_inst_31_26_28_3_tsni, guard_inst_31_26_29_tsni, select_inst_31_26_27_tsni, lookup_inst_31_26_27_11_tsni, permute_inst_31_26_27_12_tsni, bind_inst_31_26_27_12_2_tsni, map_inst_31_26_27_12_2_3_tsni, bind_inst_31_26_27_12_13_tsni, map_inst_31_26_27_12_13_3_tsni, bind_inst_31_26_27_12_14_tsni, map_inst_31_26_27_12_14_3_tsni, put_inst_31_26_27_12_15_tsni, lift_inst_31_26_27_12_16_tsni, map_inst_31_26_27_12_16_17_tsni, map_inst_31_26_27_12_18_tsni, bind_inst_31_26_27_4_tsni, map_inst_31_26_27_4_3_tsni, bind_inst_31_26_6_tsni, map_inst_31_26_6_3_tsni, mapM_inst_31_26_7_tsni, bind_inst_31_26_7_8_tsni, map_inst_31_26_7_8_3_tsni, bind_inst_31_26_7_9_tsni, map_inst_31_26_7_9_3_tsni, select_inst_31_26_10_tsni, lookup_inst_31_26_10_11_tsni, permute_inst_31_26_10_12_tsni, bind_inst_31_26_10_12_2_tsni, map_inst_31_26_10_12_2_3_tsni, bind_inst_31_26_10_12_13_tsni, map_inst_31_26_10_12_13_3_tsni, bind_inst_31_26_10_12_14_tsni, map_inst_31_26_10_12_14_3_tsni, put_inst_31_26_10_12_15_tsni, lift_inst_31_26_10_12_16_tsni, map_inst_31_26_10_12_16_17_tsni, map_inst_31_26_10_12_18_tsni, bind_inst_31_26_10_4_tsni, map_inst_31_26_10_4_3_tsni, return__inst_31_26_19_tsni, execStateT_inst_31_24_tsni, map_inst_31_24_1_tsni, concat_inst_31_24_25_tsni, append_inst_31_24_25_23_tsni, lookup_inst_31_32_tsni, concat_inst_31_22_tsni, append_inst_31_22_23_tsni, unlines_inst_31_20_tsni, map_inst_31_20_0_tsni, map_inst_31_21_tsni, testCryptarithm2_nofib_inst_33_tsni, puzzle_inst_33_31_tsni, unlines_inst_33_31_20_tsni, map_inst_33_31_20_0_tsni, map_inst_33_31_21_tsni, concat_inst_33_31_22_tsni, append_inst_33_31_22_23_tsni, lookup_inst_33_31_32_tsni, execStateT_inst_33_31_24_tsni, map_inst_33_31_24_1_tsni, concat_inst_33_31_24_25_tsni, append_inst_33_31_24_25_23_tsni, solve_inst_33_31_26_tsni, select_inst_33_31_26_10_tsni, bind_inst_33_31_26_10_4_tsni, map_inst_33_31_26_10_4_3_tsni, permute_inst_33_31_26_10_12_tsni, lift_inst_33_31_26_10_12_16_tsni, map_inst_33_31_26_10_12_16_17_tsni, map_inst_33_31_26_10_12_18_tsni, bind_inst_33_31_26_10_12_14_tsni, map_inst_33_31_26_10_12_14_3_tsni, put_inst_33_31_26_10_12_15_tsni, bind_inst_33_31_26_10_12_13_tsni, map_inst_33_31_26_10_12_13_3_tsni, bind_inst_33_31_26_10_12_2_tsni, map_inst_33_31_26_10_12_2_3_tsni, lookup_inst_33_31_26_10_11_tsni, mapM_inst_33_31_26_7_tsni, bind_inst_33_31_26_7_9_tsni, map_inst_33_31_26_7_9_3_tsni, bind_inst_33_31_26_7_8_tsni, map_inst_33_31_26_7_8_3_tsni, bind_inst_33_31_26_6_tsni, map_inst_33_31_26_6_3_tsni, select_inst_33_31_26_27_tsni, bind_inst_33_31_26_27_4_tsni, map_inst_33_31_26_27_4_3_tsni, permute_inst_33_31_26_27_12_tsni, lift_inst_33_31_26_27_12_16_tsni, map_inst_33_31_26_27_12_16_17_tsni, map_inst_33_31_26_27_12_18_tsni, bind_inst_33_31_26_27_12_14_tsni, map_inst_33_31_26_27_12_14_3_tsni, put_inst_33_31_26_27_12_15_tsni, bind_inst_33_31_26_27_12_13_tsni, map_inst_33_31_26_27_12_13_3_tsni, bind_inst_33_31_26_27_12_2_tsni, map_inst_33_31_26_27_12_2_3_tsni, lookup_inst_33_31_26_27_11_tsni, bind_inst_33_31_26_28_tsni, map_inst_33_31_26_28_3_tsni, guard_inst_33_31_26_29_tsni, bind_inst_33_31_26_30_tsni, map_inst_33_31_26_30_3_tsni, bind_inst_33_31_26_5_tsni, map_inst_33_31_26_5_3_tsni, return__inst_33_31_26_19_tsni, concat_inst_34_tsni, concat_inst_25_tsni, concat_inst_2_35_tsni, concat_inst_4_35_tsni, concat_inst_5_35_tsni, concat_inst_6_35_tsni, runStateT_inst_5_36_tsni, concat_inst_7_8_35_tsni, concat_inst_7_9_35_tsni, concat_inst_10_12_2_35_tsni, concat_inst_10_12_13_35_tsni, concat_inst_10_12_14_35_tsni, runStateT_inst_10_12_14_36_tsni, concat_inst_10_12_16_37_tsni, runStateT_inst_10_12_13_36_tsni, listDiff_inst_10_12_38_tsni, foldl_inst_10_12_38_39_tsni, concat_inst_10_4_35_tsni, runStateT_inst_7_9_36_tsni, concat_inst_20_34_tsni, append_inst_40_tsni, concat_inst_26_10_4_35_tsni, listDiff_inst_26_10_12_38_tsni, foldl_inst_26_10_12_38_39_tsni, concat_inst_26_10_12_16_37_tsni, concat_inst_26_10_12_14_35_tsni, runStateT_inst_26_10_12_14_36_tsni, concat_inst_26_10_12_13_35_tsni, runStateT_inst_26_10_12_13_36_tsni, concat_inst_26_10_12_2_35_tsni, concat_inst_26_7_9_35_tsni, concat_inst_26_7_8_35_tsni, runStateT_inst_26_7_9_36_tsni, concat_inst_26_6_35_tsni, concat_inst_26_27_4_35_tsni, listDiff_inst_26_27_12_38_tsni, foldl_inst_26_27_12_38_39_tsni, concat_inst_26_27_12_16_37_tsni, concat_inst_26_27_12_14_35_tsni, runStateT_inst_26_27_12_14_36_tsni, concat_inst_26_27_12_13_35_tsni, runStateT_inst_26_27_12_13_36_tsni, concat_inst_26_27_12_2_35_tsni, concat_inst_26_28_35_tsni, runStateT_inst_26_28_36_tsni, concat_inst_26_30_35_tsni, runStateT_inst_26_30_36_tsni, concat_inst_26_5_35_tsni, runStateT_inst_26_5_36_tsni, concat_inst_31_26_5_35_tsni, concat_inst_31_26_30_35_tsni, concat_inst_31_26_28_35_tsni, runStateT_inst_31_26_28_36_tsni, concat_inst_31_26_27_12_2_35_tsni, concat_inst_31_26_27_12_13_35_tsni, concat_inst_31_26_27_12_14_35_tsni, runStateT_inst_31_26_27_12_14_36_tsni, concat_inst_31_26_27_12_16_37_tsni, runStateT_inst_31_26_27_12_13_36_tsni, listDiff_inst_31_26_27_12_38_tsni, foldl_inst_31_26_27_12_38_39_tsni, concat_inst_31_26_27_4_35_tsni, runStateT_inst_31_26_30_36_tsni, concat_inst_31_26_6_35_tsni, runStateT_inst_31_26_5_36_tsni, concat_inst_31_26_7_8_35_tsni, concat_inst_31_26_7_9_35_tsni, concat_inst_31_26_10_12_2_35_tsni, concat_inst_31_26_10_12_13_35_tsni, concat_inst_31_26_10_12_14_35_tsni, runStateT_inst_31_26_10_12_14_36_tsni, concat_inst_31_26_10_12_16_37_tsni, runStateT_inst_31_26_10_12_13_36_tsni, listDiff_inst_31_26_10_12_38_tsni, foldl_inst_31_26_10_12_38_39_tsni, concat_inst_31_26_10_4_35_tsni, runStateT_inst_31_26_7_9_36_tsni, fromSome_inst_31_41_tsni, append_inst_31_40_tsni, concat_inst_31_20_34_tsni, concat_inst_33_31_20_34_tsni, append_inst_33_31_40_tsni, fromSome_inst_33_31_41_tsni, concat_inst_33_31_26_10_4_35_tsni, listDiff_inst_33_31_26_10_12_38_tsni, foldl_inst_33_31_26_10_12_38_39_tsni, concat_inst_33_31_26_10_12_16_37_tsni, concat_inst_33_31_26_10_12_14_35_tsni, runStateT_inst_33_31_26_10_12_14_36_tsni, concat_inst_33_31_26_10_12_13_35_tsni, runStateT_inst_33_31_26_10_12_13_36_tsni, concat_inst_33_31_26_10_12_2_35_tsni, concat_inst_33_31_26_7_9_35_tsni, concat_inst_33_31_26_7_8_35_tsni, runStateT_inst_33_31_26_7_9_36_tsni, concat_inst_33_31_26_6_35_tsni, concat_inst_33_31_26_27_4_35_tsni, listDiff_inst_33_31_26_27_12_38_tsni, foldl_inst_33_31_26_27_12_38_39_tsni, concat_inst_33_31_26_27_12_16_37_tsni, concat_inst_33_31_26_27_12_14_35_tsni, runStateT_inst_33_31_26_27_12_14_36_tsni, concat_inst_33_31_26_27_12_13_35_tsni, runStateT_inst_33_31_26_27_12_13_36_tsni, concat_inst_33_31_26_27_12_2_35_tsni, concat_inst_33_31_26_28_35_tsni, runStateT_inst_33_31_26_28_36_tsni, concat_inst_33_31_26_30_35_tsni, runStateT_inst_33_31_26_30_36_tsni, concat_inst_33_31_26_5_35_tsni, runStateT_inst_33_31_26_5_36_tsni, match_m_arm_StateT_inst_5_36_tsni, match_m_arm_StateT_inst_26_28_36_tsni, match_m_arm_StateT_inst_26_5_36_tsni, match_m_arm_StateT_inst_31_26_28_36_tsni, match_m_arm_StateT_inst_31_26_5_36_tsni, match_m_arm_StateT_inst_33_31_26_28_36_tsni, match_m_arm_StateT_inst_33_31_26_5_36_tsni;
match_m_arm_StateT_inst_5_36_tsni = function match_m_arm_StateT_inst_5_36_tsni(s, _deforest_StateT_run_inst_5_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_5_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_26_28_36_tsni = function match_m_arm_StateT_inst_26_28_36_tsni(s, _deforest_StateT_run_inst_26_28_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_26_28_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_26_5_36_tsni = function match_m_arm_StateT_inst_26_5_36_tsni(s, _deforest_StateT_run_inst_26_5_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_26_5_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_31_26_28_36_tsni = function match_m_arm_StateT_inst_31_26_28_36_tsni(s, _deforest_StateT_run_inst_31_26_28_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_31_26_28_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_31_26_5_36_tsni = function match_m_arm_StateT_inst_31_26_5_36_tsni(s, _deforest_StateT_run_inst_31_26_5_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_31_26_5_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_33_31_26_28_36_tsni = function match_m_arm_StateT_inst_33_31_26_28_36_tsni(s, _deforest_StateT_run_inst_33_31_26_28_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_33_31_26_28_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_m_arm_StateT_inst_33_31_26_5_36_tsni = function match_m_arm_StateT_inst_33_31_26_5_36_tsni(s, _deforest_StateT_run_inst_33_31_26_5_36_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_33_31_26_5_36_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
map_inst_0_tsni = function map_inst_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_34_tsni(xs2);
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
map_inst_1_tsni = function map_inst_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_25_tsni(xs2);
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
bind_inst_2_tsni = function bind_inst_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_2_3_tsni(tmp1, tmp2);
    return concat_inst_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_2_3_tsni = function map_inst_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_2_35_tsni(xs2);
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
bind_inst_4_tsni = function bind_inst_4_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_4_3_tsni(tmp1, tmp2);
    return concat_inst_4_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_4_3_tsni = function map_inst_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_4_35_tsni(xs2);
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
bind_inst_5_tsni = function bind_inst_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_5_36_tsni(m, s);
    tmp3 = map_inst_5_3_tsni(tmp1, tmp2);
    return concat_inst_5_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_5_3_tsni = function map_inst_5_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_5_35_tsni(xs2);
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
bind_inst_6_tsni = function bind_inst_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_6_3_tsni(tmp1, tmp2);
    return concat_inst_6_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_5_36_tsni(s, _deforest_StateT_run)
  }
};
map_inst_6_3_tsni = function map_inst_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_6_35_tsni(xs2);
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
mapM_inst_7_tsni = function mapM_inst_7_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return cryptarithm2.return_(tmp2)
      });
      return bind_inst_7_8_tsni(r, lambda2)
    });
    return bind_inst_7_9_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_7_8_tsni = function bind_inst_7_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_7_8_3_tsni(tmp1, tmp2);
    return concat_inst_7_8_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_7_8_3_tsni = function map_inst_7_8_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_8_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_7_8_35_tsni(xs2);
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
bind_inst_7_9_tsni = function bind_inst_7_9_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_7_9_36_tsni(m, s);
    tmp3 = map_inst_7_9_3_tsni(tmp1, tmp2);
    return concat_inst_7_9_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_7_9_3_tsni = function map_inst_7_9_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_9_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_7_9_35_tsni(xs2);
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
select_inst_10_tsni = function select_inst_10_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_10_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_10_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_10_11_tsni = function lookup_inst_10_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_10_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_10_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_10_12_tsni = function permute_inst_10_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_10_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_10_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_10_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_10_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_10_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_10_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_10_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_10_12_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_10_12_2_tsni = function bind_inst_10_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_10_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_10_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_10_12_2_3_tsni = function map_inst_10_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_10_12_2_35_tsni(xs2);
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
bind_inst_10_12_13_tsni = function bind_inst_10_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_10_12_13_36_tsni(m, s);
    tmp3 = map_inst_10_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_10_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_10_12_13_3_tsni = function map_inst_10_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_10_12_13_35_tsni(xs2);
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
bind_inst_10_12_14_tsni = function bind_inst_10_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_10_12_14_36_tsni(m, s);
    tmp3 = map_inst_10_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_10_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_10_12_14_3_tsni = function map_inst_10_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_10_12_14_35_tsni(xs2);
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
put_inst_10_12_15_tsni = function put_inst_10_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_10_12_16_tsni = function lift_inst_10_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_10_12_16_17_tsni(lambda1, ls);
    return concat_inst_10_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_10_12_16_17_tsni = function map_inst_10_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_10_12_18_tsni = function map_inst_10_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_10_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_10_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_10_4_tsni = function bind_inst_10_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_10_4_3_tsni(tmp1, tmp2);
    return concat_inst_10_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_10_4_3_tsni = function map_inst_10_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_10_4_35_tsni(xs2);
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
return__inst_19_tsni = function return__inst_19_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr;
    arr = [
      a,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_5_36_tsni(s, _deforest_StateT_run)
  }
};
unlines_inst_20_tsni = function unlines_inst_20_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return NofibPrelude.append(x, tmp1)
  });
  tmp = map_inst_20_0_tsni(lambda, ls);
  return concat_inst_20_34_tsni(tmp)
};
map_inst_20_0_tsni = function map_inst_20_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_21_tsni = function map_inst_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_20_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_20_34_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_22_tsni = function concat_inst_22_tsni(ls) {
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
    tmp = concat_inst_22_tsni(xs);
    return append_inst_22_23_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_tsni = function append_inst_22_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_40_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
execStateT_inst_24_tsni = function execStateT_inst_24_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, a, s1;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      a = first0;
      s1 = first1;
      return NofibPrelude.Cons(s1, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_24_1_tsni(tmp, tmp1);
  return concat_inst_24_25_tsni(tmp2)
};
map_inst_24_1_tsni = function map_inst_24_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_24_25_tsni(xs2);
      return append_inst_24_25_23_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return () => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_24_25_tsni = function concat_inst_24_25_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_24_25_23_tsni = function append_inst_24_25_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_24_25_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      a = param01;
      tmp1 = a;
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
solve_inst_26_tsni = function solve_inst_26_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_26_19_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_26_7_tsni(select_inst_26_10_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return cryptarithm2.return_(tmp3)
      });
      tmp = bind_inst_26_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_26_27_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_26_29_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_26_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_26_28_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_26_30_tsni(tmp2, tmp3)
    });
    return bind_inst_26_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return cryptarithm2.return_(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
select_inst_26_10_tsni = function select_inst_26_10_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_26_10_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_26_10_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_26_10_4_tsni = function bind_inst_26_10_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_10_4_3_tsni(tmp1, tmp2);
    return concat_inst_26_10_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_26_10_4_3_tsni = function map_inst_26_10_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_10_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_10_4_35_tsni(xs2);
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
permute_inst_26_10_12_tsni = function permute_inst_26_10_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_26_10_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_26_10_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_26_10_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_26_10_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_26_10_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_26_10_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_26_10_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_26_10_12_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_26_10_12_16_tsni = function lift_inst_26_10_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_26_10_12_16_17_tsni(lambda1, ls);
    return concat_inst_26_10_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_26_10_12_16_17_tsni = function map_inst_26_10_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_26_10_12_18_tsni = function map_inst_26_10_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_10_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_26_10_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_26_10_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_26_10_12_14_tsni = function bind_inst_26_10_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_10_12_14_36_tsni(m, s);
    tmp3 = map_inst_26_10_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_26_10_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_10_12_14_3_tsni = function map_inst_26_10_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_10_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_10_12_14_35_tsni(xs2);
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
put_inst_26_10_12_15_tsni = function put_inst_26_10_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
bind_inst_26_10_12_13_tsni = function bind_inst_26_10_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_10_12_13_36_tsni(m, s);
    tmp3 = map_inst_26_10_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_26_10_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_10_12_13_3_tsni = function map_inst_26_10_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_10_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_10_12_13_35_tsni(xs2);
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
bind_inst_26_10_12_2_tsni = function bind_inst_26_10_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_10_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_26_10_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_10_12_2_3_tsni = function map_inst_26_10_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_10_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_10_12_2_35_tsni(xs2);
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
lookup_inst_26_10_11_tsni = function lookup_inst_26_10_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_26_10_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_26_10_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_26_7_tsni = function mapM_inst_26_7_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return cryptarithm2.return_(tmp2)
      });
      return bind_inst_26_7_8_tsni(r, lambda2)
    });
    return bind_inst_26_7_9_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_26_7_9_tsni = function bind_inst_26_7_9_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_7_9_36_tsni(m, s);
    tmp3 = map_inst_26_7_9_3_tsni(tmp1, tmp2);
    return concat_inst_26_7_9_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_7_9_3_tsni = function map_inst_26_7_9_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_7_9_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_7_9_35_tsni(xs2);
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
bind_inst_26_7_8_tsni = function bind_inst_26_7_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_7_8_3_tsni(tmp1, tmp2);
    return concat_inst_26_7_8_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_7_8_3_tsni = function map_inst_26_7_8_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_7_8_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_7_8_35_tsni(xs2);
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
bind_inst_26_6_tsni = function bind_inst_26_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_6_3_tsni(tmp1, tmp2);
    return concat_inst_26_6_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
map_inst_26_6_3_tsni = function map_inst_26_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_6_35_tsni(xs2);
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
select_inst_26_27_tsni = function select_inst_26_27_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_26_27_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_26_27_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_26_27_4_tsni = function bind_inst_26_27_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_27_4_3_tsni(tmp1, tmp2);
    return concat_inst_26_27_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_26_27_4_3_tsni = function map_inst_26_27_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_27_4_35_tsni(xs2);
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
permute_inst_26_27_12_tsni = function permute_inst_26_27_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_26_27_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_26_27_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_26_27_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_26_27_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_26_27_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_26_27_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_26_27_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_26_27_12_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_26_27_12_16_tsni = function lift_inst_26_27_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_26_27_12_16_17_tsni(lambda1, ls);
    return concat_inst_26_27_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_26_27_12_16_17_tsni = function map_inst_26_27_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_26_27_12_18_tsni = function map_inst_26_27_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_26_27_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_26_27_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_26_27_12_14_tsni = function bind_inst_26_27_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_27_12_14_36_tsni(m, s);
    tmp3 = map_inst_26_27_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_26_27_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_27_12_14_3_tsni = function map_inst_26_27_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_27_12_14_35_tsni(xs2);
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
put_inst_26_27_12_15_tsni = function put_inst_26_27_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
bind_inst_26_27_12_13_tsni = function bind_inst_26_27_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_27_12_13_36_tsni(m, s);
    tmp3 = map_inst_26_27_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_26_27_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_27_12_13_3_tsni = function map_inst_26_27_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_27_12_13_35_tsni(xs2);
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
bind_inst_26_27_12_2_tsni = function bind_inst_26_27_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_26_27_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_26_27_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_27_12_2_3_tsni = function map_inst_26_27_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_27_12_2_35_tsni(xs2);
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
lookup_inst_26_27_11_tsni = function lookup_inst_26_27_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_26_27_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_26_27_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_26_28_tsni = function bind_inst_26_28_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_28_36_tsni(m, s);
    tmp3 = map_inst_26_28_3_tsni(tmp1, tmp2);
    return concat_inst_26_28_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_28_3_tsni = function map_inst_26_28_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_28_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_28_35_tsni(xs2);
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
guard_inst_26_29_tsni = function guard_inst_26_29_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        cryptarithm2.Unit,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_26_28_36_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return NofibPrelude.Nil
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_26_28_36_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_26_30_tsni = function bind_inst_26_30_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_30_36_tsni(m, s);
    tmp3 = map_inst_26_30_3_tsni(tmp1, tmp2);
    return concat_inst_26_30_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_30_3_tsni = function map_inst_26_30_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_30_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_30_35_tsni(xs2);
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
bind_inst_26_5_tsni = function bind_inst_26_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_26_5_36_tsni(m, s);
    tmp3 = map_inst_26_5_3_tsni(tmp1, tmp2);
    return concat_inst_26_5_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_26_5_3_tsni = function map_inst_26_5_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_5_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_5_35_tsni(xs2);
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
return__inst_26_19_tsni = function return__inst_26_19_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr;
    arr = [
      a,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
puzzle_inst_31_tsni = function puzzle_inst_31_tsni(top, bot) {
  let solution, answer, scrut, env, look, expand, topVal, botVal, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, look1, expand1, lambda, lambda1, lambda2;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_31_26_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_31_24_tsni(solution, tmp5);
  runtime.safeCall(scrut());
  answer = tmp;
  tmp6 = cryptarithm2.digitEnv(answer);
  env = tmp6;
  look1 = function look(c) {
    let tmp16;
    tmp16 = lookup_inst_31_32_tsni(c, env);
    return fromSome_inst_31_41_tsni(tmp16)
  };
  look = look1;
  expand1 = function expand(ls) {
    let lambda3;
    lambda3 = (undefined, function (a, b) {
      let tmp16, tmp17;
      tmp16 = a * 10;
      tmp17 = runtime.safeCall(look(b));
      return tmp16 + tmp17
    });
    return NofibPrelude.foldl(lambda3, 0, ls)
  };
  expand = expand1;
  lambda = (undefined, function (xs) {
    return runtime.safeCall(expand(xs))
  });
  tmp7 = NofibPrelude.map(lambda, top);
  tmp8 = NofibPrelude.sum(tmp7);
  topVal = tmp8;
  tmp9 = runtime.safeCall(expand(bot));
  botVal = tmp9;
  tmp10 = concat_inst_31_22_tsni(top);
  tmp11 = append_inst_31_40_tsni(tmp10, bot);
  lambda1 = (undefined, function (x, y) {
    return x === y
  });
  tmp12 = NofibPrelude.nubBy(lambda1, tmp11);
  tmp13 = NofibPrelude.listLen(tmp12);
  scrut2 = tmp13 > 10;
  if (scrut2 === true) {
    throw globalThis.Error("error");
  } else {
    scrut1 = topVal != botVal;
    if (scrut1 === true) {
      throw globalThis.Error("error");
    } else {
      lambda2 = (undefined, function (caseScrut) {
        let first1, first0, c, i, tmp16, tmp17, tmp18, tmp19;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          c = first0;
          i = first1;
          tmp16 = NofibPrelude.nofibStringToList(" => ");
          tmp17 = NofibPrelude.stringOfInt(i);
          tmp18 = NofibPrelude.nofibStringToList(tmp17);
          tmp19 = NofibPrelude.append(tmp16, tmp18);
          return NofibPrelude.Cons(c, tmp19)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp14 = lambda2;
      tmp15 = map_inst_31_21_tsni(tmp14, env);
      return unlines_inst_31_20_tsni(tmp15)
    }
  }
};
solve_inst_31_26_tsni = function solve_inst_31_26_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_31_26_19_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_31_26_7_tsni(select_inst_31_26_10_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return cryptarithm2.return_(tmp3)
      });
      tmp = bind_inst_31_26_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_31_26_27_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_31_26_29_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_31_26_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_31_26_28_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_31_26_30_tsni(tmp2, tmp3)
    });
    return bind_inst_31_26_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return cryptarithm2.return_(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
bind_inst_31_26_5_tsni = function bind_inst_31_26_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_5_36_tsni(m, s);
    tmp3 = map_inst_31_26_5_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_5_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_5_3_tsni = function map_inst_31_26_5_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_5_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_5_35_tsni(xs2);
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
bind_inst_31_26_30_tsni = function bind_inst_31_26_30_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_30_36_tsni(m, s);
    tmp3 = map_inst_31_26_30_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_30_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_30_3_tsni = function map_inst_31_26_30_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_30_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_30_35_tsni(xs2);
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
bind_inst_31_26_28_tsni = function bind_inst_31_26_28_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_28_36_tsni(m, s);
    tmp3 = map_inst_31_26_28_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_28_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_28_3_tsni = function map_inst_31_26_28_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_28_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_28_35_tsni(xs2);
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
guard_inst_31_26_29_tsni = function guard_inst_31_26_29_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        cryptarithm2.Unit,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_31_26_28_36_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return NofibPrelude.Nil
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_31_26_28_36_tsni(s, _deforest_StateT_run1)
    }
  }
};
select_inst_31_26_27_tsni = function select_inst_31_26_27_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_31_26_27_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_31_26_27_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_31_26_27_11_tsni = function lookup_inst_31_26_27_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_31_26_27_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_31_26_27_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_31_26_27_12_tsni = function permute_inst_31_26_27_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_31_26_27_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_31_26_27_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_31_26_27_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_31_26_27_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_31_26_27_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_31_26_27_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_31_26_27_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_31_26_27_12_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_31_26_27_12_2_tsni = function bind_inst_31_26_27_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_27_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_27_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_27_12_2_3_tsni = function map_inst_31_26_27_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_27_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_27_12_2_35_tsni(xs2);
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
bind_inst_31_26_27_12_13_tsni = function bind_inst_31_26_27_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_27_12_13_36_tsni(m, s);
    tmp3 = map_inst_31_26_27_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_27_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_27_12_13_3_tsni = function map_inst_31_26_27_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_27_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_27_12_13_35_tsni(xs2);
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
bind_inst_31_26_27_12_14_tsni = function bind_inst_31_26_27_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_27_12_14_36_tsni(m, s);
    tmp3 = map_inst_31_26_27_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_27_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_27_12_14_3_tsni = function map_inst_31_26_27_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_27_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_27_12_14_35_tsni(xs2);
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
put_inst_31_26_27_12_15_tsni = function put_inst_31_26_27_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_31_26_27_12_16_tsni = function lift_inst_31_26_27_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_31_26_27_12_16_17_tsni(lambda1, ls);
    return concat_inst_31_26_27_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_31_26_27_12_16_17_tsni = function map_inst_31_26_27_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_26_27_12_18_tsni = function map_inst_31_26_27_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_27_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_31_26_27_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_31_26_27_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_31_26_27_4_tsni = function bind_inst_31_26_27_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_27_4_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_27_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_31_26_27_4_3_tsni = function map_inst_31_26_27_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_27_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_27_4_35_tsni(xs2);
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
bind_inst_31_26_6_tsni = function bind_inst_31_26_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_6_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_6_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_31_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
map_inst_31_26_6_3_tsni = function map_inst_31_26_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_6_35_tsni(xs2);
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
mapM_inst_31_26_7_tsni = function mapM_inst_31_26_7_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return cryptarithm2.return_(tmp2)
      });
      return bind_inst_31_26_7_8_tsni(r, lambda2)
    });
    return bind_inst_31_26_7_9_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_31_26_7_8_tsni = function bind_inst_31_26_7_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_7_8_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_7_8_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_7_8_3_tsni = function map_inst_31_26_7_8_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_7_8_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_7_8_35_tsni(xs2);
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
bind_inst_31_26_7_9_tsni = function bind_inst_31_26_7_9_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_7_9_36_tsni(m, s);
    tmp3 = map_inst_31_26_7_9_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_7_9_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_7_9_3_tsni = function map_inst_31_26_7_9_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_7_9_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_7_9_35_tsni(xs2);
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
select_inst_31_26_10_tsni = function select_inst_31_26_10_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_31_26_10_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_31_26_10_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_31_26_10_11_tsni = function lookup_inst_31_26_10_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_31_26_10_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_31_26_10_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_31_26_10_12_tsni = function permute_inst_31_26_10_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_31_26_10_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_31_26_10_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_31_26_10_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_31_26_10_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_31_26_10_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_31_26_10_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_31_26_10_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_31_26_10_12_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_31_26_10_12_2_tsni = function bind_inst_31_26_10_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_10_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_10_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_10_12_2_3_tsni = function map_inst_31_26_10_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_10_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_10_12_2_35_tsni(xs2);
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
bind_inst_31_26_10_12_13_tsni = function bind_inst_31_26_10_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_10_12_13_36_tsni(m, s);
    tmp3 = map_inst_31_26_10_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_10_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_10_12_13_3_tsni = function map_inst_31_26_10_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_10_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_10_12_13_35_tsni(xs2);
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
bind_inst_31_26_10_12_14_tsni = function bind_inst_31_26_10_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_31_26_10_12_14_36_tsni(m, s);
    tmp3 = map_inst_31_26_10_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_10_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_31_26_10_12_14_3_tsni = function map_inst_31_26_10_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_10_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_10_12_14_35_tsni(xs2);
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
put_inst_31_26_10_12_15_tsni = function put_inst_31_26_10_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_31_26_10_12_16_tsni = function lift_inst_31_26_10_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_31_26_10_12_16_17_tsni(lambda1, ls);
    return concat_inst_31_26_10_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_31_26_10_12_16_17_tsni = function map_inst_31_26_10_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_26_10_12_18_tsni = function map_inst_31_26_10_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_10_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_31_26_10_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_31_26_10_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_31_26_10_4_tsni = function bind_inst_31_26_10_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_31_26_10_4_3_tsni(tmp1, tmp2);
    return concat_inst_31_26_10_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_31_26_10_4_3_tsni = function map_inst_31_26_10_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_26_10_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_26_10_4_35_tsni(xs2);
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
return__inst_31_26_19_tsni = function return__inst_31_26_19_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr;
    arr = [
      a,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_31_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
execStateT_inst_31_24_tsni = function execStateT_inst_31_24_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, a, s1;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      a = first0;
      s1 = first1;
      return NofibPrelude.Cons(s1, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_31_24_1_tsni(tmp, tmp1);
  return concat_inst_31_24_25_tsni(tmp2)
};
map_inst_31_24_1_tsni = function map_inst_31_24_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_24_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_24_25_tsni(xs2);
      return append_inst_31_24_25_23_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return () => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_31_24_25_tsni = function concat_inst_31_24_25_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_24_25_23_tsni = function append_inst_31_24_25_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_24_25_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      a = param01;
      tmp1 = a;
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup_inst_31_32_tsni = function lookup_inst_31_32_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return () => {
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return () => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return x1
        }
      } else {
        return lookup_inst_31_32_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_31_22_tsni = function concat_inst_31_22_tsni(ls) {
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
    tmp = concat_inst_31_22_tsni(xs);
    return append_inst_31_22_23_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_31_22_23_tsni = function append_inst_31_22_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_22_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_31_40_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unlines_inst_31_20_tsni = function unlines_inst_31_20_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return NofibPrelude.append(x, tmp1)
  });
  tmp = map_inst_31_20_0_tsni(lambda, ls);
  return concat_inst_31_20_34_tsni(tmp)
};
map_inst_31_20_0_tsni = function map_inst_31_20_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_21_tsni = function map_inst_31_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_31_20_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_31_20_34_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testCryptarithm2_nofib_inst_33_tsni = function testCryptarithm2_nofib_inst_33_tsni(n) {
  let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
  tmp = NofibPrelude.nofibStringToList("THIRTY");
  tmp1 = NofibPrelude.nofibStringToList("TWELVE");
  tmp2 = NofibPrelude.nofibStringToList("TWELVE");
  tmp3 = NofibPrelude.nofibStringToList("TWELVE");
  tmp4 = NofibPrelude.nofibStringToList("TWELVE");
  tmp5 = NofibPrelude.nofibStringToList("TWELVE");
  scrut = n > 999999;
  if (scrut === true) {
    tmp6 = NofibPrelude.nofibStringToList("1");
  } else {
    tmp6 = NofibPrelude.Nil;
  }
  tmp7 = NofibPrelude.append(tmp5, tmp6);
  tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
  tmp9 = NofibPrelude.Cons(tmp4, tmp8);
  tmp10 = NofibPrelude.Cons(tmp3, tmp9);
  tmp11 = NofibPrelude.Cons(tmp2, tmp10);
  tmp12 = NofibPrelude.Cons(tmp1, tmp11);
  tmp13 = NofibPrelude.Cons(tmp, tmp12);
  args = tmp13;
  tmp14 = NofibPrelude.nofibStringToList("NINETY");
  return puzzle_inst_33_31_tsni(args, tmp14)
};
puzzle_inst_33_31_tsni = function puzzle_inst_33_31_tsni(top, bot) {
  let solution, answer, scrut, env, look, expand, topVal, botVal, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, look1, expand1, lambda, lambda1, lambda2;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_33_31_26_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_33_31_24_tsni(solution, tmp5);
  runtime.safeCall(scrut());
  answer = tmp;
  tmp6 = cryptarithm2.digitEnv(answer);
  env = tmp6;
  look1 = function look(c) {
    let tmp16;
    tmp16 = lookup_inst_33_31_32_tsni(c, env);
    return fromSome_inst_33_31_41_tsni(tmp16)
  };
  look = look1;
  expand1 = function expand(ls) {
    let lambda3;
    lambda3 = (undefined, function (a, b) {
      let tmp16, tmp17;
      tmp16 = a * 10;
      tmp17 = runtime.safeCall(look(b));
      return tmp16 + tmp17
    });
    return NofibPrelude.foldl(lambda3, 0, ls)
  };
  expand = expand1;
  lambda = (undefined, function (xs) {
    return runtime.safeCall(expand(xs))
  });
  tmp7 = NofibPrelude.map(lambda, top);
  tmp8 = NofibPrelude.sum(tmp7);
  topVal = tmp8;
  tmp9 = runtime.safeCall(expand(bot));
  botVal = tmp9;
  tmp10 = concat_inst_33_31_22_tsni(top);
  tmp11 = append_inst_33_31_40_tsni(tmp10, bot);
  lambda1 = (undefined, function (x, y) {
    return x === y
  });
  tmp12 = NofibPrelude.nubBy(lambda1, tmp11);
  tmp13 = NofibPrelude.listLen(tmp12);
  scrut2 = tmp13 > 10;
  if (scrut2 === true) {
    throw globalThis.Error("error");
  } else {
    scrut1 = topVal != botVal;
    if (scrut1 === true) {
      throw globalThis.Error("error");
    } else {
      lambda2 = (undefined, function (caseScrut) {
        let first1, first0, c, i, tmp16, tmp17, tmp18, tmp19;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          c = first0;
          i = first1;
          tmp16 = NofibPrelude.nofibStringToList(" => ");
          tmp17 = NofibPrelude.stringOfInt(i);
          tmp18 = NofibPrelude.nofibStringToList(tmp17);
          tmp19 = NofibPrelude.append(tmp16, tmp18);
          return NofibPrelude.Cons(c, tmp19)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp14 = lambda2;
      tmp15 = map_inst_33_31_21_tsni(tmp14, env);
      return unlines_inst_33_31_20_tsni(tmp15)
    }
  }
};
unlines_inst_33_31_20_tsni = function unlines_inst_33_31_20_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return NofibPrelude.append(x, tmp1)
  });
  tmp = map_inst_33_31_20_0_tsni(lambda, ls);
  return concat_inst_33_31_20_34_tsni(tmp)
};
map_inst_33_31_20_0_tsni = function map_inst_33_31_20_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_33_31_21_tsni = function map_inst_33_31_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_33_31_20_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_33_31_20_34_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_33_31_22_tsni = function concat_inst_33_31_22_tsni(ls) {
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
    tmp = concat_inst_33_31_22_tsni(xs);
    return append_inst_33_31_22_23_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_33_31_22_23_tsni = function append_inst_33_31_22_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_33_31_22_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_33_31_40_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup_inst_33_31_32_tsni = function lookup_inst_33_31_32_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return () => {
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return () => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return x1
        }
      } else {
        return lookup_inst_33_31_32_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
execStateT_inst_33_31_24_tsni = function execStateT_inst_33_31_24_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, a, s1;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      a = first0;
      s1 = first1;
      return NofibPrelude.Cons(s1, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_33_31_24_1_tsni(tmp, tmp1);
  return concat_inst_33_31_24_25_tsni(tmp2)
};
map_inst_33_31_24_1_tsni = function map_inst_33_31_24_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_24_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_24_25_tsni(xs2);
      return append_inst_33_31_24_25_23_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return () => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_33_31_24_25_tsni = function concat_inst_33_31_24_25_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_33_31_24_25_23_tsni = function append_inst_33_31_24_25_23_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_33_31_24_25_23_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      a = param01;
      tmp1 = a;
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
solve_inst_33_31_26_tsni = function solve_inst_33_31_26_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_33_31_26_19_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_33_31_26_7_tsni(select_inst_33_31_26_10_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return cryptarithm2.return_(tmp3)
      });
      tmp = bind_inst_33_31_26_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_33_31_26_27_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_33_31_26_29_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_33_31_26_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_33_31_26_28_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_33_31_26_30_tsni(tmp2, tmp3)
    });
    return bind_inst_33_31_26_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return cryptarithm2.return_(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
select_inst_33_31_26_10_tsni = function select_inst_33_31_26_10_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_33_31_26_10_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_33_31_26_10_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_33_31_26_10_4_tsni = function bind_inst_33_31_26_10_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_10_4_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_10_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_33_31_26_10_4_3_tsni = function map_inst_33_31_26_10_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_10_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_10_4_35_tsni(xs2);
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
permute_inst_33_31_26_10_12_tsni = function permute_inst_33_31_26_10_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_33_31_26_10_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_33_31_26_10_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_33_31_26_10_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_33_31_26_10_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_33_31_26_10_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_33_31_26_10_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_33_31_26_10_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_33_31_26_10_12_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_33_31_26_10_12_16_tsni = function lift_inst_33_31_26_10_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_33_31_26_10_12_16_17_tsni(lambda1, ls);
    return concat_inst_33_31_26_10_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_33_31_26_10_12_16_17_tsni = function map_inst_33_31_26_10_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_33_31_26_10_12_18_tsni = function map_inst_33_31_26_10_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_10_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_33_31_26_10_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_33_31_26_10_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_33_31_26_10_12_14_tsni = function bind_inst_33_31_26_10_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_10_12_14_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_10_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_10_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_10_12_14_3_tsni = function map_inst_33_31_26_10_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_10_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_10_12_14_35_tsni(xs2);
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
put_inst_33_31_26_10_12_15_tsni = function put_inst_33_31_26_10_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
bind_inst_33_31_26_10_12_13_tsni = function bind_inst_33_31_26_10_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_10_12_13_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_10_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_10_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_10_12_13_3_tsni = function map_inst_33_31_26_10_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_10_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_10_12_13_35_tsni(xs2);
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
bind_inst_33_31_26_10_12_2_tsni = function bind_inst_33_31_26_10_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_10_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_10_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_10_12_2_3_tsni = function map_inst_33_31_26_10_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_10_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_10_12_2_35_tsni(xs2);
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
lookup_inst_33_31_26_10_11_tsni = function lookup_inst_33_31_26_10_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_33_31_26_10_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_33_31_26_10_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_33_31_26_7_tsni = function mapM_inst_33_31_26_7_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return cryptarithm2.return_(tmp2)
      });
      return bind_inst_33_31_26_7_8_tsni(r, lambda2)
    });
    return bind_inst_33_31_26_7_9_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_33_31_26_7_9_tsni = function bind_inst_33_31_26_7_9_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_7_9_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_7_9_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_7_9_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_7_9_3_tsni = function map_inst_33_31_26_7_9_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_7_9_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_7_9_35_tsni(xs2);
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
bind_inst_33_31_26_7_8_tsni = function bind_inst_33_31_26_7_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_7_8_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_7_8_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_7_8_3_tsni = function map_inst_33_31_26_7_8_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_7_8_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_7_8_35_tsni(xs2);
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
bind_inst_33_31_26_6_tsni = function bind_inst_33_31_26_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_6_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_6_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_33_31_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
map_inst_33_31_26_6_3_tsni = function map_inst_33_31_26_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_6_35_tsni(xs2);
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
select_inst_33_31_26_27_tsni = function select_inst_33_31_26_27_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_33_31_26_27_11_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_33_31_26_27_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_33_31_26_27_4_tsni = function bind_inst_33_31_26_27_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_27_4_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_27_4_35_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_33_31_26_27_4_3_tsni = function map_inst_33_31_26_27_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_27_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_27_4_35_tsni(xs2);
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
permute_inst_33_31_26_27_12_tsni = function permute_inst_33_31_26_27_12_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_33_31_26_27_12_38_39_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_33_31_26_27_12_38_tsni(xs, tmp6);
      arr = [
        x,
        tmp7
      ];
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_33_31_26_27_12_18_tsni(tmp2, xs);
    tmp4 = lift_inst_33_31_26_27_12_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
      if (globalThis.Array.isArray(iis) && iis.length === 2) {
        first0 = iis[0];
        first1 = iis[1];
        i = first0;
        iss = first1;
        arr = [
          c,
          i
        ];
        tmp6 = cryptarithm2.digitEnv(st);
        tmp7 = NofibPrelude.Cons(arr, tmp6);
        tmp8 = cryptarithm2.Digits(iss, tmp7);
        tmp9 = put_inst_33_31_26_27_12_15_tsni(tmp8);
        lambda3 = (undefined, function (_p) {
          return cryptarithm2.return_(i)
        });
        return bind_inst_33_31_26_27_12_14_tsni(tmp9, lambda3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp5 = lambda2;
    return bind_inst_33_31_26_27_12_13_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_33_31_26_27_12_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_33_31_26_27_12_16_tsni = function lift_inst_33_31_26_27_12_16_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr;
      arr = [
        x,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = map_inst_33_31_26_27_12_16_17_tsni(lambda1, ls);
    return concat_inst_33_31_26_27_12_16_37_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_33_31_26_27_12_16_17_tsni = function map_inst_33_31_26_27_12_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_33_31_26_27_12_18_tsni = function map_inst_33_31_26_27_12_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_27_12_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_33_31_26_27_12_16_17_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_33_31_26_27_12_16_37_tsni(xs2);
        return NofibPrelude.append(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_33_31_26_27_12_14_tsni = function bind_inst_33_31_26_27_12_14_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_27_12_14_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_27_12_14_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_27_12_14_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_27_12_14_3_tsni = function map_inst_33_31_26_27_12_14_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_27_12_14_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_27_12_14_35_tsni(xs2);
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
put_inst_33_31_26_27_12_15_tsni = function put_inst_33_31_26_27_12_15_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr;
    arr = [
      cryptarithm2.Unit,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
bind_inst_33_31_26_27_12_13_tsni = function bind_inst_33_31_26_27_12_13_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_27_12_13_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_27_12_13_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_27_12_13_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_27_12_13_3_tsni = function map_inst_33_31_26_27_12_13_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_27_12_13_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_27_12_13_35_tsni(xs2);
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
bind_inst_33_31_26_27_12_2_tsni = function bind_inst_33_31_26_27_12_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_33_31_26_27_12_2_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_27_12_2_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_27_12_2_3_tsni = function map_inst_33_31_26_27_12_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_27_12_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_27_12_2_35_tsni(xs2);
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
lookup_inst_33_31_26_27_11_tsni = function lookup_inst_33_31_26_27_11_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_33_31_26_27_12_tsni(c)
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
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return cryptarithm2.return_(r)
        }
      } else {
        return lookup_inst_33_31_26_27_11_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_33_31_26_28_tsni = function bind_inst_33_31_26_28_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_28_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_28_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_28_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_28_3_tsni = function map_inst_33_31_26_28_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_28_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_28_35_tsni(xs2);
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
guard_inst_33_31_26_29_tsni = function guard_inst_33_31_26_29_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        cryptarithm2.Unit,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_33_31_26_28_36_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return NofibPrelude.Nil
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_33_31_26_28_36_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_33_31_26_30_tsni = function bind_inst_33_31_26_30_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_30_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_30_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_30_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_30_3_tsni = function map_inst_33_31_26_30_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_30_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_30_35_tsni(xs2);
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
bind_inst_33_31_26_5_tsni = function bind_inst_33_31_26_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_33_31_26_5_36_tsni(m, s);
    tmp3 = map_inst_33_31_26_5_3_tsni(tmp1, tmp2);
    return concat_inst_33_31_26_5_35_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_33_31_26_5_3_tsni = function map_inst_33_31_26_5_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_31_26_5_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_31_26_5_35_tsni(xs2);
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
return__inst_33_31_26_19_tsni = function return__inst_33_31_26_19_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr;
    arr = [
      a,
      s
    ];
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_33_31_26_5_36_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_34_tsni = function concat_inst_34_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_25_tsni = function concat_inst_25_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_2_35_tsni = function concat_inst_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_4_35_tsni = function concat_inst_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_5_35_tsni = function concat_inst_5_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_6_35_tsni = function concat_inst_6_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_5_36_tsni = function runStateT_inst_5_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_7_8_35_tsni = function concat_inst_7_8_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_7_9_35_tsni = function concat_inst_7_9_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_10_12_2_35_tsni = function concat_inst_10_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_10_12_13_35_tsni = function concat_inst_10_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_10_12_14_35_tsni = function concat_inst_10_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_10_12_14_36_tsni = function runStateT_inst_10_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_10_12_16_37_tsni = function concat_inst_10_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_10_12_13_36_tsni = function runStateT_inst_10_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_10_12_38_tsni = function listDiff_inst_10_12_38_tsni(a, ls) {
  return foldl_inst_10_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_10_12_38_39_tsni = function foldl_inst_10_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_10_4_35_tsni = function concat_inst_10_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_7_9_36_tsni = function runStateT_inst_7_9_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_20_34_tsni = function concat_inst_20_34_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_tsni = function append_inst_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_26_10_4_35_tsni = function concat_inst_26_10_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
listDiff_inst_26_10_12_38_tsni = function listDiff_inst_26_10_12_38_tsni(a, ls) {
  return foldl_inst_26_10_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_26_10_12_38_39_tsni = function foldl_inst_26_10_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_26_10_12_16_37_tsni = function concat_inst_26_10_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_10_12_14_35_tsni = function concat_inst_26_10_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_10_12_14_36_tsni = function runStateT_inst_26_10_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_10_12_13_35_tsni = function concat_inst_26_10_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_10_12_13_36_tsni = function runStateT_inst_26_10_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_10_12_2_35_tsni = function concat_inst_26_10_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_7_9_35_tsni = function concat_inst_26_7_9_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_7_8_35_tsni = function concat_inst_26_7_8_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_7_9_36_tsni = function runStateT_inst_26_7_9_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_6_35_tsni = function concat_inst_26_6_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_27_4_35_tsni = function concat_inst_26_27_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
listDiff_inst_26_27_12_38_tsni = function listDiff_inst_26_27_12_38_tsni(a, ls) {
  return foldl_inst_26_27_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_26_27_12_38_39_tsni = function foldl_inst_26_27_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_26_27_12_16_37_tsni = function concat_inst_26_27_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_27_12_14_35_tsni = function concat_inst_26_27_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_27_12_14_36_tsni = function runStateT_inst_26_27_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_27_12_13_35_tsni = function concat_inst_26_27_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_27_12_13_36_tsni = function runStateT_inst_26_27_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_27_12_2_35_tsni = function concat_inst_26_27_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_28_35_tsni = function concat_inst_26_28_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_28_36_tsni = function runStateT_inst_26_28_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_30_35_tsni = function concat_inst_26_30_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_30_36_tsni = function runStateT_inst_26_30_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_5_35_tsni = function concat_inst_26_5_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_26_5_36_tsni = function runStateT_inst_26_5_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_5_35_tsni = function concat_inst_31_26_5_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_30_35_tsni = function concat_inst_31_26_30_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_28_35_tsni = function concat_inst_31_26_28_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_28_36_tsni = function runStateT_inst_31_26_28_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_27_12_2_35_tsni = function concat_inst_31_26_27_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_27_12_13_35_tsni = function concat_inst_31_26_27_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_27_12_14_35_tsni = function concat_inst_31_26_27_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_27_12_14_36_tsni = function runStateT_inst_31_26_27_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_27_12_16_37_tsni = function concat_inst_31_26_27_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_27_12_13_36_tsni = function runStateT_inst_31_26_27_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_31_26_27_12_38_tsni = function listDiff_inst_31_26_27_12_38_tsni(a, ls) {
  return foldl_inst_31_26_27_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_31_26_27_12_38_39_tsni = function foldl_inst_31_26_27_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_31_26_27_4_35_tsni = function concat_inst_31_26_27_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_30_36_tsni = function runStateT_inst_31_26_30_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_6_35_tsni = function concat_inst_31_26_6_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_5_36_tsni = function runStateT_inst_31_26_5_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_7_8_35_tsni = function concat_inst_31_26_7_8_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_7_9_35_tsni = function concat_inst_31_26_7_9_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_10_12_2_35_tsni = function concat_inst_31_26_10_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_10_12_13_35_tsni = function concat_inst_31_26_10_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_26_10_12_14_35_tsni = function concat_inst_31_26_10_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_10_12_14_36_tsni = function runStateT_inst_31_26_10_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_31_26_10_12_16_37_tsni = function concat_inst_31_26_10_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_10_12_13_36_tsni = function runStateT_inst_31_26_10_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_31_26_10_12_38_tsni = function listDiff_inst_31_26_10_12_38_tsni(a, ls) {
  return foldl_inst_31_26_10_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_31_26_10_12_38_39_tsni = function foldl_inst_31_26_10_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_31_26_10_4_35_tsni = function concat_inst_31_26_10_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_31_26_7_9_36_tsni = function runStateT_inst_31_26_7_9_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
fromSome_inst_31_41_tsni = function fromSome_inst_31_41_tsni(s) {
  return runtime.safeCall(s())
};
append_inst_31_40_tsni = function append_inst_31_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_31_20_34_tsni = function concat_inst_31_20_34_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_20_34_tsni = function concat_inst_33_31_20_34_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_33_31_40_tsni = function append_inst_33_31_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
fromSome_inst_33_31_41_tsni = function fromSome_inst_33_31_41_tsni(s) {
  return runtime.safeCall(s())
};
concat_inst_33_31_26_10_4_35_tsni = function concat_inst_33_31_26_10_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
listDiff_inst_33_31_26_10_12_38_tsni = function listDiff_inst_33_31_26_10_12_38_tsni(a, ls) {
  return foldl_inst_33_31_26_10_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_33_31_26_10_12_38_39_tsni = function foldl_inst_33_31_26_10_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_33_31_26_10_12_16_37_tsni = function concat_inst_33_31_26_10_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_10_12_14_35_tsni = function concat_inst_33_31_26_10_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_10_12_14_36_tsni = function runStateT_inst_33_31_26_10_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_10_12_13_35_tsni = function concat_inst_33_31_26_10_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_10_12_13_36_tsni = function runStateT_inst_33_31_26_10_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_10_12_2_35_tsni = function concat_inst_33_31_26_10_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_7_9_35_tsni = function concat_inst_33_31_26_7_9_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_7_8_35_tsni = function concat_inst_33_31_26_7_8_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_7_9_36_tsni = function runStateT_inst_33_31_26_7_9_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_6_35_tsni = function concat_inst_33_31_26_6_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_27_4_35_tsni = function concat_inst_33_31_26_27_4_35_tsni(ls) {
  return runtime.safeCall(ls())
};
listDiff_inst_33_31_26_27_12_38_tsni = function listDiff_inst_33_31_26_27_12_38_tsni(a, ls) {
  return foldl_inst_33_31_26_27_12_38_39_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_33_31_26_27_12_38_39_tsni = function foldl_inst_33_31_26_27_12_38_39_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_33_31_26_27_12_16_37_tsni = function concat_inst_33_31_26_27_12_16_37_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_27_12_14_35_tsni = function concat_inst_33_31_26_27_12_14_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_27_12_14_36_tsni = function runStateT_inst_33_31_26_27_12_14_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_27_12_13_35_tsni = function concat_inst_33_31_26_27_12_13_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_27_12_13_36_tsni = function runStateT_inst_33_31_26_27_12_13_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_27_12_2_35_tsni = function concat_inst_33_31_26_27_12_2_35_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_33_31_26_28_35_tsni = function concat_inst_33_31_26_28_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_28_36_tsni = function runStateT_inst_33_31_26_28_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_30_35_tsni = function concat_inst_33_31_26_30_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_30_36_tsni = function runStateT_inst_33_31_26_30_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_33_31_26_5_35_tsni = function concat_inst_33_31_26_5_35_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_33_31_26_5_36_tsni = function runStateT_inst_33_31_26_5_36_tsni(m, s) {
  return runtime.safeCall(m(s))
};
(class cryptarithm2 {
  static {
    cryptarithm21 = cryptarithm2;
    let tmp, lambda;
    const Unit$class = class Unit {
      constructor() {}
      toString() { return "Unit"; }
    };
    this.Unit = new Unit$class;
    this.Unit.class = Unit$class;
    this.StateT = function StateT(run1) {
      return new StateT.class(run1);
    };
    this.StateT.class = class StateT {
      constructor(run) {
        this.run = run;
      }
      toString() { return "StateT(" + runtime.render(this.run) + ")"; }
    };
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        s,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = runtime.safeCall(cryptarithm2.StateT(lambda));
    this.get = tmp;
    this.Digits = function Digits(i1, c1) {
      return new Digits.class(i1, c1);
    };
    this.Digits.class = class Digits {
      constructor(i, c) {
        this.i = i;
        this.c = c;
      }
      toString() { return "Digits(" + runtime.render(this.i) + ", " + runtime.render(this.c) + ")"; }
    };
  }
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(x, tmp1)
    });
    tmp = map_inst_0_tsni(lambda, ls);
    return concat_inst_34_tsni(tmp)
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
        scrut = k === x;
        if (scrut === true) {
          return runtime.safeCall(NofibPrelude.Some(v))
        } else {
          return cryptarithm2.lookup(k, t1)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static delete_(xs, e) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return x === y
    });
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls1) {
    return NofibPrelude.foldl(cryptarithm2.delete_, a, ls1)
  } 
  static runStateT(m, s) {
    let param0, run;
    if (m instanceof cryptarithm2.StateT.class) {
      param0 = m.run;
      run = param0;
      return runtime.safeCall(run(s))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bind(m1, f) {
    let tmp, lambda;
    lambda = (undefined, function (s1) {
      let tmp1, tmp2, tmp3, lambda1;
      lambda1 = (undefined, function (caseScrut) {
        let first1, first0, a1, ss, tmp4;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          a1 = first0;
          ss = first1;
          tmp4 = runtime.safeCall(f(a1));
          return cryptarithm2.runStateT(tmp4, ss)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp1 = lambda1;
      tmp2 = cryptarithm2.runStateT(m1, s1);
      tmp3 = NofibPrelude.map(tmp1, tmp2);
      return NofibPrelude.concat(tmp3)
    });
    tmp = lambda;
    return runtime.safeCall(cryptarithm2.StateT(tmp))
  } 
  static return_(a1) {
    let lambda;
    lambda = (undefined, function (s1) {
      let arr;
      arr = [
        a1,
        s1
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static mapM(f1, ls2) {
    let tmp, lambda;
    tmp = cryptarithm2.return_(NofibPrelude.Nil);
    lambda = (undefined, function (a2, r) {
      let tmp1, lambda1;
      tmp1 = runtime.safeCall(f1(a2));
      lambda1 = (undefined, function (x) {
        let lambda2;
        lambda2 = (undefined, function (xs1) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(x, xs1);
          return cryptarithm2.return_(tmp2)
        });
        return cryptarithm2.bind(r, lambda2)
      });
      return cryptarithm2.bind(tmp1, lambda1)
    });
    return NofibPrelude.foldr(lambda, tmp, ls2)
  } 
  static lift(ls3) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp, lambda1;
      lambda1 = (undefined, function (x) {
        let arr;
        arr = [
          x,
          s1
        ];
        return NofibPrelude.Cons(arr, NofibPrelude.Nil)
      });
      tmp = NofibPrelude.map(lambda1, ls3);
      return NofibPrelude.concat(tmp)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static execStateT(m2, s1) {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, a2, s2;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a2 = first0;
        s2 = first1;
        return NofibPrelude.Cons(s2, NofibPrelude.Nil)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    tmp1 = cryptarithm2.runStateT(m2, s1);
    tmp2 = map_inst_1_tsni(tmp, tmp1);
    return concat_inst_25_tsni(tmp2)
  } 
  static guard(b) {
    let lambda, lambda1;
    if (b === true) {
      lambda = (undefined, function (s2) {
        let arr;
        arr = [
          cryptarithm2.Unit,
          s2
        ];
        return NofibPrelude.Cons(arr, NofibPrelude.Nil)
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda))
    } else {
      lambda1 = (undefined, function (s2) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda1))
    }
  } 
  static put(s2) {
    let lambda;
    lambda = (undefined, function (x) {
      let arr;
      arr = [
        cryptarithm2.Unit,
        s2
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static digits(d) {
    let param0, param1, a2, b1;
    if (d instanceof cryptarithm2.Digits.class) {
      param0 = d.i;
      param1 = d.c;
      a2 = param0;
      b1 = param1;
      return a2
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static digitEnv(d1) {
    let param0, param1, a2, b1;
    if (d1 instanceof cryptarithm2.Digits.class) {
      param0 = d1.i;
      param1 = d1.c;
      a2 = param0;
      b1 = param1;
      return b1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static permute(c) {
    let tmp, lambda;
    lambda = (undefined, function (st) {
      let xs1, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
      tmp1 = cryptarithm2.digits(st);
      xs1 = tmp1;
      lambda1 = (undefined, function (x) {
        let tmp6, tmp7, arr;
        tmp6 = NofibPrelude.Cons(x, NofibPrelude.Nil);
        tmp7 = cryptarithm2.listDiff(xs1, tmp6);
        arr = [
          x,
          tmp7
        ];
        return arr
      });
      tmp2 = lambda1;
      tmp3 = NofibPrelude.map(tmp2, xs1);
      tmp4 = cryptarithm2.lift(tmp3);
      lambda2 = (undefined, function (iis) {
        let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
        if (globalThis.Array.isArray(iis) && iis.length === 2) {
          first0 = iis[0];
          first1 = iis[1];
          i = first0;
          iss = first1;
          arr = [
            c,
            i
          ];
          tmp6 = cryptarithm2.digitEnv(st);
          tmp7 = NofibPrelude.Cons(arr, tmp6);
          tmp8 = cryptarithm2.Digits(iss, tmp7);
          tmp9 = cryptarithm2.put(tmp8);
          lambda3 = (undefined, function (_p) {
            return cryptarithm2.return_(i)
          });
          return cryptarithm2.bind(tmp9, lambda3)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp5 = lambda2;
      return cryptarithm2.bind(tmp4, tmp5)
    });
    tmp = lambda;
    return bind_inst_2_tsni(cryptarithm2.get, tmp)
  } 
  static select(c1) {
    let tmp, lambda;
    lambda = (undefined, function (st) {
      let scrut, param0, r, tmp1;
      tmp1 = cryptarithm2.digitEnv(st);
      scrut = cryptarithm2.lookup(c1, tmp1);
      if (scrut instanceof NofibPrelude.Some.class) {
        param0 = scrut.x;
        r = param0;
        return cryptarithm2.return_(r)
      } else if (scrut instanceof NofibPrelude.None.class) {
        return cryptarithm2.permute(c1)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return bind_inst_4_tsni(cryptarithm2.get, tmp)
  } 
  static rest(ls4) {
    let param0, param1, x, xs1;
    if (ls4 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls4 instanceof NofibPrelude.Cons.class) {
      param0 = ls4.head;
      param1 = ls4.tail;
      x = param0;
      xs1 = param1;
      return xs1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static solve(tops, bots, carry) {
    let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
    if (bots instanceof NofibPrelude.Cons.class) {
      param0 = bots.head;
      param1 = bots.tail;
      bot = param0;
      botss = param1;
      if (tops instanceof NofibPrelude.Nil.class) {
        tmp = return__inst_19_tsni(carry);
      } else if (tops instanceof NofibPrelude.Cons.class) {
        param01 = tops.head;
        param11 = tops.tail;
        top = param01;
        tmp1 = mapM_inst_7_tsni(select_inst_10_tsni, top);
        lambda = (undefined, function (topNS) {
          let tmp2, tmp3;
          tmp2 = NofibPrelude.sum(topNS);
          tmp3 = tmp2 + carry;
          return cryptarithm2.return_(tmp3)
        });
        tmp = bind_inst_6_tsni(tmp1, lambda);
      } else {
        throw new globalThis.Error("match error");
      }
      lambda1 = (undefined, function (topN) {
        let tmp2, tmp3, lambda5;
        tmp2 = cryptarithm2.select(bot);
        lambda5 = (undefined, function (botN) {
          let tmp4, tmp5, tmp6, tmp7, lambda6;
          tmp4 = NofibPrelude.intMod(topN, 10);
          tmp5 = tmp4 === botN;
          tmp6 = cryptarithm2.guard(tmp5);
          lambda6 = (undefined, function (_s) {
            let tmp8, tmp9;
            tmp8 = cryptarithm2.rest(tops);
            tmp9 = NofibPrelude.intDiv(topN, 10);
            return cryptarithm2.solve(tmp8, botss, tmp9)
          });
          tmp7 = lambda6;
          return cryptarithm2.bind(tmp6, tmp7)
        });
        tmp3 = lambda5;
        return cryptarithm2.bind(tmp2, tmp3)
      });
      return bind_inst_5_tsni(tmp, lambda1)
    } else if (bots instanceof NofibPrelude.Nil.class) {
      if (tops instanceof NofibPrelude.Nil.class) {
        scrut = carry === 0;
        if (scrut === true) {
          return cryptarithm2.return_(cryptarithm2.Unit)
        } else {
          lambda2 = (undefined, function (_p) {
            return NofibPrelude.Nil
          });
          return runtime.safeCall(cryptarithm2.StateT(lambda2))
        }
      } else {
        lambda3 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda3))
      }
    } else {
      lambda4 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda4))
    }
  } 
  static puzzle(top, bot) {
    let solution, answer, scrut, env, look, expand, topVal, botVal, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, look1, expand1, lambda, lambda1, lambda2;
    tmp = NofibPrelude.map(NofibPrelude.reverse, top);
    tmp1 = NofibPrelude.transpose(tmp);
    tmp2 = NofibPrelude.reverse(bot);
    tmp3 = solve_inst_26_tsni(tmp1, tmp2, 0);
    solution = tmp3;
    tmp4 = NofibPrelude.enumFromTo(0, 9);
    tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
    scrut = execStateT_inst_24_tsni(solution, tmp5);
    runtime.safeCall(scrut());
    answer = tmp;
    tmp6 = cryptarithm2.digitEnv(answer);
    env = tmp6;
    look1 = function look(c2) {
      let tmp16;
      tmp16 = cryptarithm2.lookup(c2, env);
      return NofibPrelude.fromSome(tmp16)
    };
    look = look1;
    expand1 = function expand(ls5) {
      let lambda3;
      lambda3 = (undefined, function (a2, b1) {
        let tmp16, tmp17;
        tmp16 = a2 * 10;
        tmp17 = runtime.safeCall(look(b1));
        return tmp16 + tmp17
      });
      return NofibPrelude.foldl(lambda3, 0, ls5)
    };
    expand = expand1;
    lambda = (undefined, function (xs1) {
      return runtime.safeCall(expand(xs1))
    });
    tmp7 = NofibPrelude.map(lambda, top);
    tmp8 = NofibPrelude.sum(tmp7);
    topVal = tmp8;
    tmp9 = runtime.safeCall(expand(bot));
    botVal = tmp9;
    tmp10 = concat_inst_22_tsni(top);
    tmp11 = append_inst_40_tsni(tmp10, bot);
    lambda1 = (undefined, function (x, y) {
      return x === y
    });
    tmp12 = NofibPrelude.nubBy(lambda1, tmp11);
    tmp13 = NofibPrelude.listLen(tmp12);
    scrut2 = tmp13 > 10;
    if (scrut2 === true) {
      throw globalThis.Error("error");
    } else {
      scrut1 = topVal != botVal;
      if (scrut1 === true) {
        throw globalThis.Error("error");
      } else {
        lambda2 = (undefined, function (caseScrut) {
          let first1, first0, c2, i, tmp16, tmp17, tmp18, tmp19;
          if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
            first0 = caseScrut[0];
            first1 = caseScrut[1];
            c2 = first0;
            i = first1;
            tmp16 = NofibPrelude.nofibStringToList(" => ");
            tmp17 = NofibPrelude.stringOfInt(i);
            tmp18 = NofibPrelude.nofibStringToList(tmp17);
            tmp19 = NofibPrelude.append(tmp16, tmp18);
            return NofibPrelude.Cons(c2, tmp19)
          } else {
            throw new globalThis.Error("match error");
          }
        });
        tmp14 = lambda2;
        tmp15 = map_inst_21_tsni(tmp14, env);
        return unlines_inst_20_tsni(tmp15)
      }
    }
  } 
  static testCryptarithm2_nofib(n) {
    let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    tmp = NofibPrelude.nofibStringToList("THIRTY");
    tmp1 = NofibPrelude.nofibStringToList("TWELVE");
    tmp2 = NofibPrelude.nofibStringToList("TWELVE");
    tmp3 = NofibPrelude.nofibStringToList("TWELVE");
    tmp4 = NofibPrelude.nofibStringToList("TWELVE");
    tmp5 = NofibPrelude.nofibStringToList("TWELVE");
    scrut = n > 999999;
    if (scrut === true) {
      tmp6 = NofibPrelude.nofibStringToList("1");
    } else {
      tmp6 = NofibPrelude.Nil;
    }
    tmp7 = NofibPrelude.append(tmp5, tmp6);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = NofibPrelude.Cons(tmp4, tmp8);
    tmp10 = NofibPrelude.Cons(tmp3, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    tmp12 = NofibPrelude.Cons(tmp1, tmp11);
    tmp13 = NofibPrelude.Cons(tmp, tmp12);
    args = tmp13;
    tmp14 = NofibPrelude.nofibStringToList("NINETY");
    return puzzle_inst_31_tsni(args, tmp14)
  } 
  static main() {
    let tmp;
    tmp = testCryptarithm2_nofib_inst_33_tsni(1);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "cryptarithm2"; }
});
let cryptarithm2 = cryptarithm21; export default cryptarithm2;
