import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let constraints1, filterTree_inst_0_tsni, foldTree_inst_0_1_tsni, map_inst_0_1_2_tsni, map_inst_3_tsni, leaves_inst_4_tsni, map_inst_4_3_tsni, filter_inst_5_tsni, leaves_inst_6_tsni, map_inst_6_3_tsni, mapTree_inst_7_tsni, prune_inst_8_tsni, filterTree_inst_8_0_tsni, foldTree_inst_8_0_1_tsni, map_inst_8_0_1_2_tsni, filter_inst_8_0_9_tsni, labelInconsistencies_inst_10_tsni, earliestInconsistency_inst_10_11_tsni, filter_inst_10_11_5_tsni, mapTree_inst_10_12_tsni, map_inst_10_12_13_tsni, mkTree_inst_14_tsni, enumFromTo_inst_14_15_tsni, initTree_inst_14_16_tsni, map_inst_14_16_17_tsni, filter_inst_18_tsni, leaves_inst_19_tsni, map_inst_19_3_tsni, prune_inst_20_tsni, filterTree_inst_20_0_tsni, foldTree_inst_20_0_1_tsni, map_inst_20_0_1_2_tsni, mkTree_inst_21_tsni, enumFromTo_inst_21_15_tsni, lookupCache_inst_22_tsni, mapTree_inst_22_23_tsni, map_inst_22_23_13_tsni, cacheChecks_inst_24_tsni, fillTable_inst_24_25_tsni, enumFromTo_inst_24_25_26_tsni, enumFromTo_inst_24_25_27_tsni, map_inst_24_28_tsni, emptyTable_inst_29_tsni, enumFromTo_inst_29_30_tsni, enumFromTo_inst_29_31_tsni, bj_inst_32_tsni, map_inst_32_33_tsni, bt_inst_34_tsni, earliestInconsistency_inst_34_35_tsni, filter_inst_34_35_5_tsni, mapTree_inst_34_36_tsni, map_inst_34_36_13_tsni, bj__inst_37_tsni, map_inst_37_38_tsni, bt_inst_39_tsni, earliestInconsistency_inst_39_35_tsni, filter_inst_39_35_5_tsni, mapTree_inst_39_36_tsni, map_inst_39_36_13_tsni, lookupCache_inst_40_tsni, mapTree_inst_40_23_tsni, map_inst_40_23_13_tsni, cacheChecks_inst_41_tsni, fillTable_inst_41_25_tsni, enumFromTo_inst_41_25_26_tsni, enumFromTo_inst_41_25_27_tsni, map_inst_41_28_tsni, emptyTable_inst_42_tsni, enumFromTo_inst_42_30_tsni, enumFromTo_inst_42_31_tsni, search_inst_43_tsni, mkTree_inst_43_21_tsni, enumFromTo_inst_43_21_15_tsni, prune_inst_43_20_tsni, filterTree_inst_43_20_0_tsni, foldTree_inst_43_20_0_1_tsni, map_inst_43_20_0_1_2_tsni, leaves_inst_43_19_tsni, map_inst_43_19_3_tsni, filter_inst_43_18_tsni, bt_inst_44_tsni, earliestInconsistency_inst_44_35_tsni, filter_inst_44_35_5_tsni, bm_inst_45_tsni, emptyTable_inst_45_29_tsni, enumFromTo_inst_45_29_30_tsni, enumFromTo_inst_45_29_31_tsni, cacheChecks_inst_45_24_tsni, fillTable_inst_45_24_25_tsni, enumFromTo_inst_45_24_25_26_tsni, enumFromTo_inst_45_24_25_27_tsni, lookupCache_inst_45_22_tsni, map_inst_45_24_28_tsni, mapTree_inst_45_22_23_tsni, map_inst_45_22_23_13_tsni, bjbt_inst_46_tsni, bt_inst_46_34_tsni, earliestInconsistency_inst_46_34_35_tsni, filter_inst_46_34_35_5_tsni, bj_inst_46_32_tsni, foldTree_inst_46_32_47_tsni, map_inst_46_32_47_2_tsni, map_inst_46_32_33_tsni, mapTree_inst_46_34_36_tsni, map_inst_46_34_36_13_tsni, bjbt__inst_48_tsni, bt_inst_48_39_tsni, earliestInconsistency_inst_48_39_35_tsni, filter_inst_48_39_35_5_tsni, bj__inst_48_37_tsni, foldTree_inst_48_37_49_tsni, map_inst_48_37_49_2_tsni, map_inst_48_37_38_tsni, mapTree_inst_48_39_36_tsni, map_inst_48_39_36_13_tsni, fc_inst_50_tsni, emptyTable_inst_50_42_tsni, enumFromTo_inst_50_42_30_tsni, enumFromTo_inst_50_42_31_tsni, cacheChecks_inst_50_41_tsni, fillTable_inst_50_41_25_tsni, enumFromTo_inst_50_41_25_26_tsni, enumFromTo_inst_50_41_25_27_tsni, lookupCache_inst_50_40_tsni, map_inst_50_41_28_tsni, mapTree_inst_50_40_23_tsni, map_inst_50_40_23_13_tsni, testConstraints_nofib_inst_51_tsni, fc_inst_51_50_tsni, lookupCache_inst_51_50_40_tsni, mapTree_inst_51_50_40_23_tsni, map_inst_51_50_40_23_13_tsni, cacheChecks_inst_51_50_41_tsni, fillTable_inst_51_50_41_25_tsni, enumFromTo_inst_51_50_41_25_26_tsni, enumFromTo_inst_51_50_41_25_27_tsni, map_inst_51_50_41_28_tsni, emptyTable_inst_51_50_42_tsni, enumFromTo_inst_51_50_42_30_tsni, enumFromTo_inst_51_50_42_31_tsni, bjbt__inst_51_48_tsni, bj__inst_51_48_37_tsni, map_inst_51_48_37_38_tsni, bt_inst_51_48_39_tsni, earliestInconsistency_inst_51_48_39_35_tsni, filter_inst_51_48_39_35_5_tsni, mapTree_inst_51_48_39_36_tsni, map_inst_51_48_39_36_13_tsni, bjbt_inst_51_46_tsni, bj_inst_51_46_32_tsni, map_inst_51_46_32_33_tsni, bt_inst_51_46_34_tsni, earliestInconsistency_inst_51_46_34_35_tsni, filter_inst_51_46_34_35_5_tsni, mapTree_inst_51_46_34_36_tsni, map_inst_51_46_34_36_13_tsni, bm_inst_51_45_tsni, lookupCache_inst_51_45_22_tsni, mapTree_inst_51_45_22_23_tsni, map_inst_51_45_22_23_13_tsni, cacheChecks_inst_51_45_24_tsni, fillTable_inst_51_45_24_25_tsni, enumFromTo_inst_51_45_24_25_26_tsni, enumFromTo_inst_51_45_24_25_27_tsni, map_inst_51_45_24_28_tsni, emptyTable_inst_51_45_29_tsni, enumFromTo_inst_51_45_29_30_tsni, enumFromTo_inst_51_45_29_31_tsni, bt_inst_51_44_tsni, earliestInconsistency_inst_51_44_35_tsni, filter_inst_51_44_35_5_tsni, try__inst_51_52_tsni, search_inst_51_52_43_tsni, mkTree_inst_51_52_43_21_tsni, enumFromTo_inst_51_52_43_21_15_tsni, prune_inst_51_52_43_20_tsni, filterTree_inst_51_52_43_20_0_tsni, foldTree_inst_51_52_43_20_0_1_tsni, map_inst_51_52_43_20_0_1_2_tsni, leaves_inst_51_52_43_19_tsni, map_inst_51_52_43_19_3_tsni, filter_inst_51_52_43_18_tsni, filter_inst_0_9_tsni, concat_inst_53_tsni, concat_inst_4_53_tsni, concat_inst_6_53_tsni, map_inst_7_13_tsni, fst_inst_54_tsni, map_inst_55_tsni, concat_inst_19_53_tsni, filter_inst_20_0_9_tsni, initTree_inst_21_16_tsni, map_inst_21_16_17_tsni, checkComplete_inst_22_56_tsni, complete_inst_22_56_57_tsni, maxLevel_inst_22_56_57_58_tsni, mapTree_inst_59_tsni, map_inst_59_13_tsni, fst_inst_60_tsni, zipWith_inst_24_25_61_tsni, zipWith_inst_24_25_62_tsni, combine_inst_32_63_tsni, foldTree_inst_32_47_tsni, map_inst_32_47_2_tsni, combine_inst_37_64_tsni, foldTree_inst_37_49_tsni, map_inst_37_49_2_tsni, checkComplete_inst_40_56_tsni, complete_inst_40_56_57_tsni, maxLevel_inst_40_56_57_58_tsni, domainWipeout_inst_65_tsni, mapTree_inst_65_66_tsni, map_inst_65_66_13_tsni, zipWith_inst_41_25_61_tsni, zipWith_inst_41_25_62_tsni, initTree_inst_43_21_16_tsni, map_inst_43_21_16_17_tsni, filter_inst_43_20_0_9_tsni, concat_inst_43_19_53_tsni, map_inst_43_55_tsni, map_inst_67_tsni, zipWith_inst_45_24_25_61_tsni, zipWith_inst_45_24_25_62_tsni, checkComplete_inst_45_22_56_tsni, complete_inst_45_22_56_57_tsni, maxLevel_inst_45_22_56_57_58_tsni, mapTree_inst_45_59_tsni, fst_inst_45_60_tsni, map_inst_45_59_13_tsni, combine_inst_46_32_63_tsni, combine_inst_48_37_64_tsni, zipWith_inst_50_41_25_61_tsni, zipWith_inst_50_41_25_62_tsni, checkComplete_inst_50_40_56_tsni, complete_inst_50_40_56_57_tsni, maxLevel_inst_50_40_56_57_58_tsni, domainWipeout_inst_50_65_tsni, mapTree_inst_50_65_66_tsni, map_inst_50_65_66_13_tsni, checkComplete_inst_51_50_40_56_tsni, complete_inst_51_50_40_56_57_tsni, maxLevel_inst_51_50_40_56_57_58_tsni, domainWipeout_inst_51_50_65_tsni, mapTree_inst_51_50_65_66_tsni, map_inst_51_50_65_66_13_tsni, zipWith_inst_51_50_41_25_61_tsni, zipWith_inst_51_50_41_25_62_tsni, combine_inst_51_48_37_64_tsni, foldTree_inst_51_48_37_49_tsni, map_inst_51_48_37_49_2_tsni, combine_inst_51_46_32_63_tsni, foldTree_inst_51_46_32_47_tsni, map_inst_51_46_32_47_2_tsni, checkComplete_inst_51_45_22_56_tsni, complete_inst_51_45_22_56_57_tsni, maxLevel_inst_51_45_22_56_57_58_tsni, mapTree_inst_51_45_59_tsni, map_inst_51_45_59_13_tsni, fst_inst_51_45_60_tsni, zipWith_inst_51_45_24_25_61_tsni, zipWith_inst_51_45_24_25_62_tsni, initTree_inst_51_52_43_21_16_tsni, map_inst_51_52_43_21_16_17_tsni, filter_inst_51_52_43_20_0_9_tsni, concat_inst_51_52_43_19_53_tsni, map_inst_51_52_43_55_tsni, map_inst_51_67_tsni, queens_inst_51_52_68_tsni, safe_inst_51_52_68_69_tsni, match_scrut_rest_inst_34_tsni, match_scrut_rest_inst_39_tsni, match_scrut_rest_inst_44_tsni, match_scrut_rest_inst_46_34_tsni, match_scrut_rest_inst_48_39_tsni, match_scrut_rest_inst_51_48_39_tsni, match_scrut_rest_inst_51_46_34_tsni, match_scrut_rest_inst_51_44_tsni, match_xs_arm_Nil_inst_14_16_17_tsni, match_xs_arm_Nil_inst_21_16_17_tsni, match_x_arm_Deforest_Arr_2_inst_60_tsni, match_scrut_arm_default_inst_34_tsni, match_scrut_arm_default_inst_39_tsni, match_tp2_arm_Deforest_Arr_2_inst_65_tsni, match_first0_arm_Deforest_Arr_2_inst_65_tsni, match_xs_arm_Nil_inst_43_21_16_17_tsni, match_xs_arm_Cons_inst_67_tsni, match_scrut_arm_default_inst_44_tsni, match_x_arm_Deforest_Arr_2_inst_45_60_tsni, match_scrut_arm_default_inst_46_34_tsni, match_scrut_arm_default_inst_48_39_tsni, match_tp2_arm_Deforest_Arr_2_inst_50_65_tsni, match_first0_arm_Deforest_Arr_2_inst_50_65_tsni, match_tp2_arm_Deforest_Arr_2_inst_51_50_65_tsni, match_first0_arm_Deforest_Arr_2_inst_51_50_65_tsni, match_scrut_arm_default_inst_51_48_39_tsni, match_scrut_arm_default_inst_51_46_34_tsni, match_x_arm_Deforest_Arr_2_inst_51_45_60_tsni, match_scrut_arm_default_inst_51_44_tsni, match_xs_arm_Nil_inst_51_52_43_21_16_17_tsni, match_xs_arm_Cons_inst_51_67_tsni, match_as2_arm_Assign_inst_51_52_68_69_tsni;
match_scrut_rest_inst_34_tsni = function match_scrut_rest_inst_34_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_39_tsni = function match_scrut_rest_inst_39_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_44_tsni = function match_scrut_rest_inst_44_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_46_34_tsni = function match_scrut_rest_inst_46_34_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_48_39_tsni = function match_scrut_rest_inst_48_39_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_51_48_39_tsni = function match_scrut_rest_inst_51_48_39_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_51_46_34_tsni = function match_scrut_rest_inst_51_46_34_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_scrut_rest_inst_51_44_tsni = function match_scrut_rest_inst_51_44_tsni(s, tmp) {
  let arr;
  arr = [
    s,
    tmp
  ];
  return arr
};
match_xs_arm_Nil_inst_14_16_17_tsni = function match_xs_arm_Nil_inst_14_16_17_tsni(f) {
  return (f1) => {
    return (f2) => {
      return (f3) => {
        return (f4) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
match_xs_arm_Nil_inst_21_16_17_tsni = function match_xs_arm_Nil_inst_21_16_17_tsni(f) {
  return NofibPrelude.Nil
};
match_x_arm_Deforest_Arr_2_inst_60_tsni = function match_x_arm_Deforest_Arr_2_inst_60_tsni(_deforest_Deforest_Arr_2_0_inst_60_tsni, _deforest_Deforest_Arr_2_1_inst_60_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_tsni;
  f = first0;
  s = first1;
  return f
};
match_scrut_arm_default_inst_34_tsni = function match_scrut_arm_default_inst_34_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_34_tsni(s, tmp)
};
match_scrut_arm_default_inst_39_tsni = function match_scrut_arm_default_inst_39_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_39_tsni(s, tmp)
};
match_tp2_arm_Deforest_Arr_2_inst_65_tsni = function match_tp2_arm_Deforest_Arr_2_inst_65_tsni(_deforest_Deforest_Arr_2_0_inst_65_tsni, _deforest_Deforest_Arr_2_1_inst_65_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_65_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_65_tsni;
  return runtime.safeCall(first0(first1))
};
match_first0_arm_Deforest_Arr_2_inst_65_tsni = function match_first0_arm_Deforest_Arr_2_inst_65_tsni(first1, _deforest_Deforest_Arr_2_0_inst_65_tsni, _deforest_Deforest_Arr_2_1_inst_65_tsni) {
  let lscomp1, first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_65_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_65_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  lscomp1 = function lscomp1(ls) {
    let param0, param1, vs, t1, scrut1, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      vs = param0;
      t1 = param1;
      scrut1 = NofibPrelude.all(constraints.knownConflict, vs);
      if (scrut1 === true) {
        tmp4 = lscomp1(t1);
        return NofibPrelude.Cons(vs, tmp4)
      } else {
        return lscomp1(t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = lscomp1(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints.collect(tmp2);
    tmp1 = runtime.safeCall(constraints.Known(tmp3));
  }
  cs_ = tmp1;
  arr = [
    as_,
    cs_
  ];
  return arr
};
match_xs_arm_Nil_inst_43_21_16_17_tsni = function match_xs_arm_Nil_inst_43_21_16_17_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_67_tsni = function match_xs_arm_Cons_inst_67_tsni(f, _deforest_Cons_head_inst_67_tsni, _deforest_Cons_tail_inst_67_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_67_tsni;
  param1 = _deforest_Cons_tail_inst_67_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_67_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_scrut_arm_default_inst_44_tsni = function match_scrut_arm_default_inst_44_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_44_tsni(s, tmp)
};
match_x_arm_Deforest_Arr_2_inst_45_60_tsni = function match_x_arm_Deforest_Arr_2_inst_45_60_tsni(_deforest_Deforest_Arr_2_0_inst_45_60_tsni, _deforest_Deforest_Arr_2_1_inst_45_60_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_45_60_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_45_60_tsni;
  f = first0;
  s = first1;
  return f
};
match_scrut_arm_default_inst_46_34_tsni = function match_scrut_arm_default_inst_46_34_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_46_34_tsni(s, tmp)
};
match_scrut_arm_default_inst_48_39_tsni = function match_scrut_arm_default_inst_48_39_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_48_39_tsni(s, tmp)
};
match_tp2_arm_Deforest_Arr_2_inst_50_65_tsni = function match_tp2_arm_Deforest_Arr_2_inst_50_65_tsni(_deforest_Deforest_Arr_2_0_inst_50_65_tsni, _deforest_Deforest_Arr_2_1_inst_50_65_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_50_65_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_50_65_tsni;
  return runtime.safeCall(first0(first1))
};
match_first0_arm_Deforest_Arr_2_inst_50_65_tsni = function match_first0_arm_Deforest_Arr_2_inst_50_65_tsni(first1, _deforest_Deforest_Arr_2_0_inst_50_65_tsni, _deforest_Deforest_Arr_2_1_inst_50_65_tsni) {
  let lscomp1, first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_50_65_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_50_65_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  lscomp1 = function lscomp1(ls) {
    let param0, param1, vs, t1, scrut1, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      vs = param0;
      t1 = param1;
      scrut1 = NofibPrelude.all(constraints.knownConflict, vs);
      if (scrut1 === true) {
        tmp4 = lscomp1(t1);
        return NofibPrelude.Cons(vs, tmp4)
      } else {
        return lscomp1(t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = lscomp1(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints.collect(tmp2);
    tmp1 = runtime.safeCall(constraints.Known(tmp3));
  }
  cs_ = tmp1;
  arr = [
    as_,
    cs_
  ];
  return arr
};
match_tp2_arm_Deforest_Arr_2_inst_51_50_65_tsni = function match_tp2_arm_Deforest_Arr_2_inst_51_50_65_tsni(_deforest_Deforest_Arr_2_0_inst_51_50_65_tsni, _deforest_Deforest_Arr_2_1_inst_51_50_65_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_50_65_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_51_50_65_tsni;
  return runtime.safeCall(first0(first1))
};
match_first0_arm_Deforest_Arr_2_inst_51_50_65_tsni = function match_first0_arm_Deforest_Arr_2_inst_51_50_65_tsni(first1, _deforest_Deforest_Arr_2_0_inst_51_50_65_tsni, _deforest_Deforest_Arr_2_1_inst_51_50_65_tsni) {
  let lscomp1, first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_50_65_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_51_50_65_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  lscomp1 = function lscomp1(ls) {
    let param0, param1, vs, t1, scrut1, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      vs = param0;
      t1 = param1;
      scrut1 = NofibPrelude.all(constraints.knownConflict, vs);
      if (scrut1 === true) {
        tmp4 = lscomp1(t1);
        return NofibPrelude.Cons(vs, tmp4)
      } else {
        return lscomp1(t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = lscomp1(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints.collect(tmp2);
    tmp1 = runtime.safeCall(constraints.Known(tmp3));
  }
  cs_ = tmp1;
  arr = [
    as_,
    cs_
  ];
  return arr
};
match_scrut_arm_default_inst_51_48_39_tsni = function match_scrut_arm_default_inst_51_48_39_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_51_48_39_tsni(s, tmp)
};
match_scrut_arm_default_inst_51_46_34_tsni = function match_scrut_arm_default_inst_51_46_34_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_51_46_34_tsni(s, tmp)
};
match_x_arm_Deforest_Arr_2_inst_51_45_60_tsni = function match_x_arm_Deforest_Arr_2_inst_51_45_60_tsni(_deforest_Deforest_Arr_2_0_inst_51_45_60_tsni, _deforest_Deforest_Arr_2_1_inst_51_45_60_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_45_60_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_51_45_60_tsni;
  f = first0;
  s = first1;
  return f
};
match_scrut_arm_default_inst_51_44_tsni = function match_scrut_arm_default_inst_51_44_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
  return match_scrut_rest_inst_51_44_tsni(s, tmp)
};
match_xs_arm_Nil_inst_51_52_43_21_16_17_tsni = function match_xs_arm_Nil_inst_51_52_43_21_16_17_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_51_67_tsni = function match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head_inst_51_67_tsni, _deforest_Cons_tail_inst_51_67_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_51_67_tsni;
  param1 = _deforest_Cons_tail_inst_51_67_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_51_67_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_as2_arm_Assign_inst_51_52_68_69_tsni = function match_as2_arm_Assign_inst_51_52_68_69_tsni(i, m, _deforest_Assign_varr_inst_51_52_68_69_tsni, _deforest_Assign_value_inst_51_52_68_69_tsni) {
  let param0, param1, j, n, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  param0 = _deforest_Assign_varr_inst_51_52_68_69_tsni;
  param1 = _deforest_Assign_value_inst_51_52_68_69_tsni;
  j = param0;
  n = param1;
  tmp = m == n;
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = i - j;
    tmp2 = NofibPrelude.abs(tmp1);
    tmp3 = m - n;
    tmp4 = NofibPrelude.abs(tmp3);
    tmp5 = tmp2 == tmp4;
    scrut1 = Predef.not(tmp5);
    if (scrut1 === true) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
};
filterTree_inst_0_tsni = function filterTree_inst_0_tsni(p, t) {
  let f1;
  f1 = function f1(a, cs) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = constraints.label(x);
      return runtime.safeCall(p(tmp1))
    });
    tmp = filter_inst_0_9_tsni(lambda, cs);
    return constraints.Node(a, tmp)
  };
  return foldTree_inst_0_1_tsni(f1, t)
};
foldTree_inst_0_1_tsni = function foldTree_inst_0_1_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda = (undefined, function (x) {
      return foldTree_inst_0_1_tsni(f, x)
    });
    tmp = map_inst_0_1_2_tsni(lambda, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_0_1_2_tsni = function map_inst_0_1_2_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_2_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_0_9_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_0_9_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
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
      tmp2 = concat_inst_53_tsni(xs2);
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
leaves_inst_4_tsni = function leaves_inst_4_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_4_3_tsni(leaves_inst_4_tsni, cs);
      return concat_inst_4_53_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
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
      tmp2 = concat_inst_4_53_tsni(xs2);
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
filter_inst_5_tsni = function filter_inst_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = [
          tmp1,
          tmp2
        ];
        return runtime.safeCall(NofibPrelude.Some(arr))
      }
    } else {
      return filter_inst_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_6_tsni = function leaves_inst_6_tsni(t) {
  return runtime.safeCall(t())
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
      tmp2 = concat_inst_6_53_tsni(xs2);
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
mapTree_inst_7_tsni = function mapTree_inst_7_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_7_tsni(f, x)
    });
    tmp1 = map_inst_7_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return () => {
      let param01, param11, cs, leaf, tmp2;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      leaf = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
      } else {
        cs = param11;
        tmp2 = map_inst_6_3_tsni(leaves_inst_6_tsni, cs);
        return concat_inst_6_53_tsni(tmp2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_8_tsni = function prune_inst_8_tsni(p, t) {
  let lambda;
  lambda = (undefined, function (x) {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return Predef.not(tmp)
  });
  return filterTree_inst_8_0_tsni(lambda, t)
};
filterTree_inst_8_0_tsni = function filterTree_inst_8_0_tsni(p, t) {
  let f1;
  f1 = function f1(a, cs) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = constraints.label(x);
      return runtime.safeCall(p(tmp1))
    });
    tmp = filter_inst_8_0_9_tsni(lambda, cs);
    return constraints.Node(a, tmp)
  };
  return foldTree_inst_8_0_1_tsni(f1, t)
};
foldTree_inst_8_0_1_tsni = function foldTree_inst_8_0_1_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_8_0_1_2_tsni = function map_inst_8_0_1_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_8_0_9_tsni = function filter_inst_8_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
labelInconsistencies_inst_10_tsni = function labelInconsistencies_inst_10_tsni(csp, t) {
  let f2;
  f2 = function f2(s) {
    let tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    tmp = earliestInconsistency_inst_10_11_tsni(csp, s);
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = () => {
      let first1, first0, f, s1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      f = first0;
      s1 = first1;
      return f
    };
    return arr
  };
  return mapTree_inst_10_12_tsni(f2, t)
};
earliestInconsistency_inst_10_11_tsni = function earliestInconsistency_inst_10_11_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_10_11_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_10_11_5_tsni = function filter_inst_10_11_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_10_11_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = [
          tmp1,
          tmp2
        ];
        return runtime.safeCall(NofibPrelude.Some(arr))
      }
    } else {
      return filter_inst_10_11_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_10_12_tsni = function mapTree_inst_10_12_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_10_12_13_tsni = function map_inst_10_12_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mkTree_inst_14_tsni = function mkTree_inst_14_tsni(csp) {
  let next, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next = function next(ss) {
      let lscomp1, scrut, tmp, tmp1;
      tmp = constraints.maxLevel(ss);
      scrut = tmp < vars;
      if (scrut === true) {
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, ss))
        };
        tmp1 = enumFromTo_inst_14_15_tsni(1, vals);
        return lscomp1(tmp1)
      } else {
        return (f) => {
          return match_xs_arm_Nil_inst_14_16_17_tsni(f)
        }
      }
    };
    return initTree_inst_14_16_tsni(next, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_14_15_tsni = function enumFromTo_inst_14_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_14_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1(t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_14_16_17_tsni(f, xs);
        _deforest_Cons_head2 = tmp7;
        _deforest_Cons_tail2 = tmp8;
        return (f1) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp7 = runtime.safeCall(f1(x));
          tmp8 = map_inst_10_12_13_tsni(f1, xs);
          _deforest_Cons_head3 = tmp7;
          _deforest_Cons_tail3 = tmp8;
          return (f2) => {
            let _deforest_Cons_head4, _deforest_Cons_tail4;
            param01 = _deforest_Cons_head3;
            param11 = _deforest_Cons_tail3;
            x = param01;
            xs = param11;
            tmp7 = runtime.safeCall(f2(x));
            tmp8 = map_inst_8_0_1_2_tsni(f2, xs);
            _deforest_Cons_head4 = tmp7;
            _deforest_Cons_tail4 = tmp8;
            return (f3) => {
              let param02, param12, h, t, scrut1, tmp9, _deforest_Cons_head5, _deforest_Cons_tail5;
              param02 = _deforest_Cons_head4;
              param12 = _deforest_Cons_tail4;
              h = param02;
              t = param12;
              scrut1 = runtime.safeCall(f3(h));
              if (scrut1 === true) {
                tmp9 = filter_inst_8_0_9_tsni(f3, t);
                _deforest_Cons_head5 = h;
                _deforest_Cons_tail5 = tmp9;
                return (f4) => {
                  param01 = _deforest_Cons_head5;
                  param11 = _deforest_Cons_tail5;
                  x = param01;
                  xs = param11;
                  tmp7 = runtime.safeCall(f4(x));
                  tmp8 = map_inst_7_13_tsni(f4, xs);
                  return NofibPrelude.Cons(tmp7, tmp8)
                }
              } else {
                return filter_inst_8_0_9_tsni(f3, t)
              }
            }
          }
        }
      }
    }
  } else {
    return (lscomp1, ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_14_16_17_tsni(f)
      }
    }
  }
};
initTree_inst_14_16_tsni = function initTree_inst_14_16_tsni(f, x) {
  let tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  tmp = runtime.safeCall(f(x));
  lambda = (undefined, function (y) {
    return initTree_inst_14_16_tsni(f, y)
  });
  tmp1 = map_inst_14_16_17_tsni(lambda, tmp);
  _deforest_Node_lab = x;
  _deforest_Node_children = tmp1;
  return (f1) => {
    let param0, param1, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
    param0 = _deforest_Node_lab;
    param1 = _deforest_Node_children;
    l = param0;
    c = param1;
    tmp2 = runtime.safeCall(f1(l));
    lambda1 = (undefined, function (x1) {
      return mapTree_inst_10_12_tsni(f1, x1)
    });
    tmp3 = map_inst_10_12_13_tsni(lambda1, c);
    _deforest_Node_lab1 = tmp2;
    _deforest_Node_children1 = tmp3;
    return (f2) => {
      let param01, param11, l1, c1, tmp4, lambda2;
      param01 = _deforest_Node_lab1;
      param11 = _deforest_Node_children1;
      l1 = param01;
      c1 = param11;
      lambda2 = (undefined, function (x1) {
        return foldTree_inst_8_0_1_tsni(f2, x1)
      });
      tmp4 = map_inst_8_0_1_2_tsni(lambda2, c1);
      return runtime.safeCall(f2(l1, tmp4))
    }
  }
};
map_inst_14_16_17_tsni = function map_inst_14_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_18_tsni = function filter_inst_18_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_18_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_55_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_18_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_19_tsni = function leaves_inst_19_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_19_3_tsni(leaves_inst_19_tsni, cs);
      return concat_inst_19_53_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_19_3_tsni = function map_inst_19_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_19_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_19_53_tsni(xs2);
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
prune_inst_20_tsni = function prune_inst_20_tsni(p, t) {
  let lambda;
  lambda = (undefined, function (x) {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return Predef.not(tmp)
  });
  return filterTree_inst_20_0_tsni(lambda, t)
};
filterTree_inst_20_0_tsni = function filterTree_inst_20_0_tsni(p, t) {
  let f1;
  f1 = function f1(a, cs) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = constraints.label(x);
      return runtime.safeCall(p(tmp1))
    });
    tmp = filter_inst_20_0_9_tsni(lambda, cs);
    return constraints.Node(a, tmp)
  };
  return foldTree_inst_20_0_1_tsni(f1, t)
};
foldTree_inst_20_0_1_tsni = function foldTree_inst_20_0_1_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda = (undefined, function (x) {
      return foldTree_inst_20_0_1_tsni(f, x)
    });
    tmp = map_inst_20_0_1_2_tsni(lambda, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_20_0_1_2_tsni = function map_inst_20_0_1_2_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_0_1_2_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_20_0_9_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_20_0_9_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mkTree_inst_21_tsni = function mkTree_inst_21_tsni(csp) {
  let next, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next = function next(ss) {
      let lscomp1, scrut, tmp, tmp1;
      tmp = constraints.maxLevel(ss);
      scrut = tmp < vars;
      if (scrut === true) {
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, ss))
        };
        tmp1 = enumFromTo_inst_21_15_tsni(1, vals);
        return lscomp1(tmp1)
      } else {
        return (f) => {
          return match_xs_arm_Nil_inst_21_16_17_tsni(f)
        }
      }
    };
    return initTree_inst_21_16_tsni(next, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_21_15_tsni = function enumFromTo_inst_21_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_21_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1(t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_21_16_17_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (lscomp1, ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_21_16_17_tsni(f)
      }
    }
  }
};
lookupCache_inst_22_tsni = function lookupCache_inst_22_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_22_23_tsni(lambda, t)
};
mapTree_inst_22_23_tsni = function mapTree_inst_22_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_22_23_13_tsni = function map_inst_22_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_24_tsni = function cacheChecks_inst_24_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_60_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_22_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = [
          tmp8,
          cs1
        ];
        _deforest_Deforest_Arr_2_02 = arr3;
        _deforest_Deforest_Arr_2_12 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_60_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_24_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_24_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_24_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_22_23_tsni(f, x)
      });
      tmp3 = map_inst_22_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_59_tsni(f1, x)
        });
        tmp3 = map_inst_59_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_24_25_tsni = function fillTable_inst_24_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_24_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_24_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_24_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_24_25_26_tsni = function enumFromTo_inst_24_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_24_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          tmp4 = constraints.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_24_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_24_25_27_tsni = function enumFromTo_inst_24_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_24_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_24_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_24_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_24_28_tsni = function map_inst_24_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_22_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_59_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
emptyTable_inst_29_tsni = function emptyTable_inst_29_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_29_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_29_30_tsni = function enumFromTo_inst_29_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_29_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_29_31_tsni = function enumFromTo_inst_29_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_29_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_29_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
bj_inst_32_tsni = function bj_inst_32_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_32_33_tsni(constraints.label, chs);
        tmp2 = combine_inst_32_63_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_32_47_tsni(f6, t)
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
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_32_63_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_34_tsni = function bt_inst_34_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_34_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_34_36_tsni(f3, t)
};
earliestInconsistency_inst_34_35_tsni = function earliestInconsistency_inst_34_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_34_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_34_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_34_35_5_tsni = function filter_inst_34_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_34_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_34_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_34_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_34_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_34_36_tsni = function mapTree_inst_34_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_34_36_tsni(f, x)
    });
    tmp1 = map_inst_34_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_32_47_tsni(f1, x)
      });
      tmp2 = map_inst_32_47_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_34_36_13_tsni = function map_inst_34_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_34_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_32_47_2_tsni(f1, xs1);
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
bj__inst_37_tsni = function bj__inst_37_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_37_38_tsni(constraints.label, chs);
        tmp2 = combine_inst_37_64_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_37_49_tsni(f7, t)
};
map_inst_37_38_tsni = function map_inst_37_38_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_38_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_37_64_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_39_tsni = function bt_inst_39_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_39_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_39_36_tsni(f3, t)
};
earliestInconsistency_inst_39_35_tsni = function earliestInconsistency_inst_39_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_39_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_39_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_39_35_5_tsni = function filter_inst_39_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_39_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_39_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_39_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_39_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_39_36_tsni = function mapTree_inst_39_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_39_36_tsni(f, x)
    });
    tmp1 = map_inst_39_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_37_49_tsni(f1, x)
      });
      tmp2 = map_inst_37_49_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_36_13_tsni = function map_inst_39_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_37_49_2_tsni(f1, xs1);
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
lookupCache_inst_40_tsni = function lookupCache_inst_40_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_40_23_tsni(lambda, t)
};
mapTree_inst_40_23_tsni = function mapTree_inst_40_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_40_23_13_tsni = function map_inst_40_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_41_tsni = function cacheChecks_inst_41_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_02 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_12 = constraints.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_65_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_65_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_40_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_04 = tmp8;
        _deforest_Deforest_Arr_2_14 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_65_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr3;
        _deforest_Deforest_Arr_2_13 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_65_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_41_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_41_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_41_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_40_23_tsni(f, x)
      });
      tmp3 = map_inst_40_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_65_66_tsni(f1, x)
        });
        tmp3 = map_inst_65_66_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_41_25_tsni = function fillTable_inst_41_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_41_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_41_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_41_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_41_25_26_tsni = function enumFromTo_inst_41_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_41_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          tmp4 = constraints.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_41_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_41_25_27_tsni = function enumFromTo_inst_41_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_41_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_41_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_41_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_41_28_tsni = function map_inst_41_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_40_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_65_66_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
emptyTable_inst_42_tsni = function emptyTable_inst_42_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_42_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_42_30_tsni = function enumFromTo_inst_42_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_42_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_42_31_tsni = function enumFromTo_inst_42_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_42_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_42_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
search_inst_43_tsni = function search_inst_43_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
  tmp = mkTree_inst_43_21_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  lambda = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownConflict(tmp5)
  });
  tmp2 = prune_inst_43_20_tsni(lambda, tmp1);
  tmp3 = leaves_inst_43_19_tsni(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownSolution(tmp5)
  });
  tmp4 = filter_inst_43_18_tsni(lambda1, tmp3);
  return map_inst_43_55_tsni(NofibPrelude.fst, tmp4)
};
mkTree_inst_43_21_tsni = function mkTree_inst_43_21_tsni(csp) {
  let next, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next = function next(ss) {
      let lscomp1, scrut, tmp, tmp1;
      tmp = constraints.maxLevel(ss);
      scrut = tmp < vars;
      if (scrut === true) {
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, ss))
        };
        tmp1 = enumFromTo_inst_43_21_15_tsni(1, vals);
        return lscomp1(tmp1)
      } else {
        return (f) => {
          return match_xs_arm_Nil_inst_43_21_16_17_tsni(f)
        }
      }
    };
    return initTree_inst_43_21_16_tsni(next, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_43_21_15_tsni = function enumFromTo_inst_43_21_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_43_21_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1(t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_43_21_16_17_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (lscomp1, ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_43_21_16_17_tsni(f)
      }
    }
  }
};
prune_inst_43_20_tsni = function prune_inst_43_20_tsni(p, t) {
  let lambda;
  lambda = (undefined, function (x) {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return Predef.not(tmp)
  });
  return filterTree_inst_43_20_0_tsni(lambda, t)
};
filterTree_inst_43_20_0_tsni = function filterTree_inst_43_20_0_tsni(p, t) {
  let f1;
  f1 = function f1(a, cs) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = constraints.label(x);
      return runtime.safeCall(p(tmp1))
    });
    tmp = filter_inst_43_20_0_9_tsni(lambda, cs);
    return constraints.Node(a, tmp)
  };
  return foldTree_inst_43_20_0_1_tsni(f1, t)
};
foldTree_inst_43_20_0_1_tsni = function foldTree_inst_43_20_0_1_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda = (undefined, function (x) {
      return foldTree_inst_43_20_0_1_tsni(f, x)
    });
    tmp = map_inst_43_20_0_1_2_tsni(lambda, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_43_20_0_1_2_tsni = function map_inst_43_20_0_1_2_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_43_20_0_1_2_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_43_20_0_9_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_43_20_0_9_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_43_19_tsni = function leaves_inst_43_19_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_43_19_3_tsni(leaves_inst_43_19_tsni, cs);
      return concat_inst_43_19_53_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_43_19_3_tsni = function map_inst_43_19_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_43_19_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_43_19_53_tsni(xs2);
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
filter_inst_43_18_tsni = function filter_inst_43_18_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_43_18_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_43_55_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_43_18_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_44_tsni = function bt_inst_44_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_44_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_44_35_tsni = function earliestInconsistency_inst_44_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_44_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_44_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_44_35_5_tsni = function filter_inst_44_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_44_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_44_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_44_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bm_inst_45_tsni = function bm_inst_45_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_45_29_tsni(csp);
  tmp1 = cacheChecks_inst_45_24_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_45_22_tsni(csp, tmp1);
  return mapTree_inst_45_59_tsni(fst_inst_45_60_tsni, tmp2)
};
emptyTable_inst_45_29_tsni = function emptyTable_inst_45_29_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_45_29_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_45_29_30_tsni = function enumFromTo_inst_45_29_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_29_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_45_29_31_tsni = function enumFromTo_inst_45_29_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_29_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_45_29_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_45_24_tsni = function cacheChecks_inst_45_24_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_45_60_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_45_22_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = [
          tmp8,
          cs1
        ];
        _deforest_Deforest_Arr_2_02 = arr3;
        _deforest_Deforest_Arr_2_12 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_45_60_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_45_24_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_45_24_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_45_24_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_45_22_23_tsni(f, x)
      });
      tmp3 = map_inst_45_22_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_45_59_tsni(f1, x)
        });
        tmp3 = map_inst_45_59_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_45_24_25_tsni = function fillTable_inst_45_24_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_45_24_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_45_24_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_45_24_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_45_24_25_26_tsni = function enumFromTo_inst_45_24_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_24_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          tmp4 = constraints.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_45_24_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_45_24_25_27_tsni = function enumFromTo_inst_45_24_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_24_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_45_24_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_45_24_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lookupCache_inst_45_22_tsni = function lookupCache_inst_45_22_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_45_22_23_tsni(lambda, t)
};
map_inst_45_24_28_tsni = function map_inst_45_24_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_24_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_22_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_45_59_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_45_22_23_tsni = function mapTree_inst_45_22_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_45_22_23_13_tsni = function map_inst_45_22_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bjbt_inst_46_tsni = function bjbt_inst_46_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_46_34_tsni(csp, t);
  return bj_inst_46_32_tsni(csp, tmp)
};
bt_inst_46_34_tsni = function bt_inst_46_34_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_46_34_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_46_34_36_tsni(f3, t)
};
earliestInconsistency_inst_46_34_35_tsni = function earliestInconsistency_inst_46_34_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_46_34_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_46_34_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_46_34_35_5_tsni = function filter_inst_46_34_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_46_34_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_46_34_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_46_34_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_46_34_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bj_inst_46_32_tsni = function bj_inst_46_32_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_46_32_33_tsni(constraints.label, chs);
        tmp2 = combine_inst_46_32_63_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_46_32_47_tsni(f6, t)
};
foldTree_inst_46_32_47_tsni = function foldTree_inst_46_32_47_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_46_32_47_2_tsni = function map_inst_46_32_47_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_46_32_33_tsni = function map_inst_46_32_33_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_46_34_36_tsni = function mapTree_inst_46_34_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_46_34_36_tsni(f, x)
    });
    tmp1 = map_inst_46_34_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_46_32_47_tsni(f1, x)
      });
      tmp2 = map_inst_46_32_47_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_46_34_36_13_tsni = function map_inst_46_34_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_34_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_46_32_47_2_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_46_32_33_tsni(f2, xs1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = tmp1;
        return (acc) => {
          let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          if (globalThis.Array.isArray(param01) && param01.length === 2) {
            first0 = param01[0];
            first1 = param01[1];
            s = first0;
            if (first1 instanceof constraints.Known.class) {
              param02 = first1.vs;
              cs = param02;
              css = param11;
              tmp2 = constraints.maxLevel(s);
              scrut = NofibPrelude.notElem(tmp2, cs);
              if (scrut === true) {
                return cs
              } else {
                tmp3 = NofibPrelude.union(cs, acc);
                return combine_inst_46_32_63_tsni(css, tmp3)
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
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return (acc) => {
          return acc
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bjbt__inst_48_tsni = function bjbt__inst_48_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_48_39_tsni(csp, t);
  return bj__inst_48_37_tsni(csp, tmp)
};
bt_inst_48_39_tsni = function bt_inst_48_39_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_48_39_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_48_39_36_tsni(f3, t)
};
earliestInconsistency_inst_48_39_35_tsni = function earliestInconsistency_inst_48_39_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_48_39_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_48_39_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_48_39_35_5_tsni = function filter_inst_48_39_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_48_39_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_48_39_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_48_39_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_48_39_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bj__inst_48_37_tsni = function bj__inst_48_37_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_48_37_38_tsni(constraints.label, chs);
        tmp2 = combine_inst_48_37_64_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_48_37_49_tsni(f7, t)
};
foldTree_inst_48_37_49_tsni = function foldTree_inst_48_37_49_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_48_37_49_2_tsni = function map_inst_48_37_49_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_48_37_38_tsni = function map_inst_48_37_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_48_39_36_tsni = function mapTree_inst_48_39_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_48_39_36_tsni(f, x)
    });
    tmp1 = map_inst_48_39_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_48_37_49_tsni(f1, x)
      });
      tmp2 = map_inst_48_37_49_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_48_39_36_13_tsni = function map_inst_48_39_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_48_39_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_48_37_49_2_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_48_37_38_tsni(f2, xs1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = tmp1;
        return (acc) => {
          let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          if (globalThis.Array.isArray(param01) && param01.length === 2) {
            first0 = param01[0];
            first1 = param01[1];
            s = first0;
            if (first1 instanceof constraints.Known.class) {
              param02 = first1.vs;
              cs = param02;
              css = param11;
              tmp2 = constraints.maxLevel(s);
              scrut = NofibPrelude.notElem(tmp2, cs);
              if (scrut === true) {
                return cs
              } else {
                tmp3 = NofibPrelude.union(cs, acc);
                return combine_inst_48_37_64_tsni(css, tmp3)
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
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return (acc) => {
          return acc
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fc_inst_50_tsni = function fc_inst_50_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_50_42_tsni(csp);
  tmp1 = cacheChecks_inst_50_41_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_50_40_tsni(csp, tmp1);
  return domainWipeout_inst_50_65_tsni(csp, tmp2)
};
emptyTable_inst_50_42_tsni = function emptyTable_inst_50_42_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_50_42_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_50_42_30_tsni = function enumFromTo_inst_50_42_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_42_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_50_42_31_tsni = function enumFromTo_inst_50_42_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_42_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_50_42_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_50_41_tsni = function cacheChecks_inst_50_41_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_02 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_12 = constraints.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_50_65_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_50_65_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_50_40_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_04 = tmp8;
        _deforest_Deforest_Arr_2_14 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_50_65_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr3;
        _deforest_Deforest_Arr_2_13 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_50_65_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_50_41_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_50_41_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_50_41_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_50_40_23_tsni(f, x)
      });
      tmp3 = map_inst_50_40_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_50_65_66_tsni(f1, x)
        });
        tmp3 = map_inst_50_65_66_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_50_41_25_tsni = function fillTable_inst_50_41_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_50_41_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_50_41_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_50_41_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_50_41_25_26_tsni = function enumFromTo_inst_50_41_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_41_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          tmp4 = constraints.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_50_41_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_50_41_25_27_tsni = function enumFromTo_inst_50_41_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_41_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_50_41_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_50_41_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lookupCache_inst_50_40_tsni = function lookupCache_inst_50_40_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_50_40_23_tsni(lambda, t)
};
map_inst_50_41_28_tsni = function map_inst_50_41_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_41_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_50_40_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_50_65_66_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_50_40_23_tsni = function mapTree_inst_50_40_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_50_40_23_13_tsni = function map_inst_50_40_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
testConstraints_nofib_inst_51_tsni = function testConstraints_nofib_inst_51_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  _deforest_Cons_head4 = fc_inst_51_50_tsni;
  _deforest_Cons_tail4 = (f) => {
    return NofibPrelude.Nil
  };
  tmp = (f) => {
    return match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = bjbt__inst_51_48_tsni;
  _deforest_Cons_tail3 = tmp;
  tmp1 = (f) => {
    return match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = bjbt_inst_51_46_tsni;
  _deforest_Cons_tail2 = tmp1;
  tmp2 = (f) => {
    return match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = bm_inst_51_45_tsni;
  _deforest_Cons_tail1 = tmp2;
  tmp3 = (f) => {
    return match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = bt_inst_51_44_tsni;
  _deforest_Cons_tail = tmp3;
  tmp4 = (f) => {
    return match_xs_arm_Cons_inst_51_67_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  };
  lambda = (undefined, function (x) {
    return try__inst_51_52_tsni(n, x)
  });
  return map_inst_51_67_tsni(lambda, tmp4)
};
fc_inst_51_50_tsni = function fc_inst_51_50_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_51_50_42_tsni(csp);
  tmp1 = cacheChecks_inst_51_50_41_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_51_50_40_tsni(csp, tmp1);
  return domainWipeout_inst_51_50_65_tsni(csp, tmp2)
};
lookupCache_inst_51_50_40_tsni = function lookupCache_inst_51_50_40_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_51_50_40_23_tsni(lambda, t)
};
mapTree_inst_51_50_40_23_tsni = function mapTree_inst_51_50_40_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_50_40_23_13_tsni = function map_inst_51_50_40_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_51_50_41_tsni = function cacheChecks_inst_51_50_41_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_02 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_12 = constraints.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_51_50_65_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_51_50_65_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_51_50_40_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_04 = tmp8;
        _deforest_Deforest_Arr_2_14 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_51_50_65_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr3;
        _deforest_Deforest_Arr_2_13 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_51_50_65_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_51_50_41_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_51_50_41_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_51_50_41_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_51_50_40_23_tsni(f, x)
      });
      tmp3 = map_inst_51_50_40_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_51_50_65_66_tsni(f1, x)
        });
        tmp3 = map_inst_51_50_65_66_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_51_50_41_25_tsni = function fillTable_inst_51_50_41_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_51_50_41_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_51_50_41_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_51_50_41_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_51_50_41_25_26_tsni = function enumFromTo_inst_51_50_41_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_50_41_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Assign_varr, _deforest_Assign_value;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          _deforest_Assign_varr = varr;
          _deforest_Assign_value = vall;
          tmp4 = (i, m) => {
            return match_as2_arm_Assign_inst_51_52_68_69_tsni(i, m, _deforest_Assign_varr, _deforest_Assign_value)
          };
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_51_50_41_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_51_50_41_25_27_tsni = function enumFromTo_inst_51_50_41_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_50_41_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_51_50_41_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_51_50_41_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_51_50_41_28_tsni = function map_inst_51_50_41_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_50_41_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_50_40_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_51_50_65_66_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
emptyTable_inst_51_50_42_tsni = function emptyTable_inst_51_50_42_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_51_50_42_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_51_50_42_30_tsni = function enumFromTo_inst_51_50_42_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_50_42_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_51_50_42_31_tsni = function enumFromTo_inst_51_50_42_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_50_42_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_51_50_42_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
bjbt__inst_51_48_tsni = function bjbt__inst_51_48_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_51_48_39_tsni(csp, t);
  return bj__inst_51_48_37_tsni(csp, tmp)
};
bj__inst_51_48_37_tsni = function bj__inst_51_48_37_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_51_48_37_38_tsni(constraints.label, chs);
        tmp2 = combine_inst_51_48_37_64_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_51_48_37_49_tsni(f7, t)
};
map_inst_51_48_37_38_tsni = function map_inst_51_48_37_38_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_48_37_38_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_51_48_37_64_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_51_48_39_tsni = function bt_inst_51_48_39_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_51_48_39_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_51_48_39_36_tsni(f3, t)
};
earliestInconsistency_inst_51_48_39_35_tsni = function earliestInconsistency_inst_51_48_39_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_51_48_39_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_51_48_39_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_51_48_39_35_5_tsni = function filter_inst_51_48_39_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_51_48_39_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_51_48_39_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_51_48_39_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_51_48_39_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_51_48_39_36_tsni = function mapTree_inst_51_48_39_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_51_48_39_36_tsni(f, x)
    });
    tmp1 = map_inst_51_48_39_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_51_48_37_49_tsni(f1, x)
      });
      tmp2 = map_inst_51_48_37_49_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_51_48_39_36_13_tsni = function map_inst_51_48_39_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_48_39_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_48_37_49_2_tsni(f1, xs1);
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
bjbt_inst_51_46_tsni = function bjbt_inst_51_46_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_51_46_34_tsni(csp, t);
  return bj_inst_51_46_32_tsni(csp, tmp)
};
bj_inst_51_46_32_tsni = function bj_inst_51_46_32_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_51_46_32_33_tsni(constraints.label, chs);
        tmp2 = combine_inst_51_46_32_63_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return foldTree_inst_51_46_32_47_tsni(f6, t)
};
map_inst_51_46_32_33_tsni = function map_inst_51_46_32_33_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_46_32_33_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_51_46_32_63_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_51_46_34_tsni = function bt_inst_51_46_34_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_51_46_34_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return mapTree_inst_51_46_34_36_tsni(f3, t)
};
earliestInconsistency_inst_51_46_34_35_tsni = function earliestInconsistency_inst_51_46_34_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_51_46_34_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_51_46_34_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_51_46_34_35_5_tsni = function filter_inst_51_46_34_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_51_46_34_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_51_46_34_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_51_46_34_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_51_46_34_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_51_46_34_36_tsni = function mapTree_inst_51_46_34_36_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda = (undefined, function (x) {
      return mapTree_inst_51_46_34_36_tsni(f, x)
    });
    tmp1 = map_inst_51_46_34_36_13_tsni(lambda, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f1) => {
      let param01, param11, l1, c1, tmp2, lambda1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda1 = (undefined, function (x) {
        return foldTree_inst_51_46_32_47_tsni(f1, x)
      });
      tmp2 = map_inst_51_46_32_47_2_tsni(lambda1, c1);
      return runtime.safeCall(f1(l1, tmp2))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_51_46_34_36_13_tsni = function map_inst_51_46_34_36_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_46_34_36_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_46_32_47_2_tsni(f1, xs1);
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
bm_inst_51_45_tsni = function bm_inst_51_45_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_51_45_29_tsni(csp);
  tmp1 = cacheChecks_inst_51_45_24_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_51_45_22_tsni(csp, tmp1);
  return mapTree_inst_51_45_59_tsni(fst_inst_51_45_60_tsni, tmp2)
};
lookupCache_inst_51_45_22_tsni = function lookupCache_inst_51_45_22_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    return runtime.safeCall(tp(csp1))
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return mapTree_inst_51_45_22_23_tsni(lambda, t)
};
mapTree_inst_51_45_22_23_tsni = function mapTree_inst_51_45_22_23_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_45_22_23_13_tsni = function map_inst_51_45_22_23_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_51_45_24_tsni = function cacheChecks_inst_51_45_24_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, lambda, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_51_45_60_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp7 = checkComplete_inst_51_45_22_56_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = [
          tmp8,
          cs1
        ];
        _deforest_Deforest_Arr_2_02 = arr3;
        _deforest_Deforest_Arr_2_12 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_51_45_60_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr4
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.tail(tbl);
      tmp3 = fillTable_inst_51_45_24_25_tsni(s, csp, tmp2);
      return cacheChecks_inst_51_45_24_tsni(csp, tmp3, x)
    });
    tmp = lambda;
    tmp1 = map_inst_51_45_24_28_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda1, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda1 = (undefined, function (x) {
        return mapTree_inst_51_45_22_23_tsni(f, x)
      });
      tmp3 = map_inst_51_45_22_23_13_tsni(lambda1, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f1) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f1(l));
        lambda1 = (undefined, function (x) {
          return mapTree_inst_51_45_59_tsni(f1, x)
        });
        tmp3 = map_inst_51_45_59_13_tsni(lambda1, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fillTable_inst_51_45_24_25_tsni = function fillTable_inst_51_45_24_25_tsni(s, csp, tbl) {
  let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        f4 = function f4(cs, varval) {
          return runtime.safeCall(varval(var_, val_, rel, cs))
        };
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, vals))
        };
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_51_45_24_25_27_tsni(tmp, vars);
        tmp2 = lscomp1(tmp1);
        lambda = (undefined, function (x, y) {
          return zipWith_inst_51_45_24_25_62_tsni(f4, x, y)
        });
        return zipWith_inst_51_45_24_25_61_tsni(lambda, tbl, tmp2)
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
enumFromTo_inst_51_45_24_25_26_tsni = function enumFromTo_inst_51_45_24_25_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_45_24_25_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (var_, val_, rel, cs) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Assign_varr, _deforest_Assign_value;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints.Assign(var_, val_);
          _deforest_Assign_varr = varr;
          _deforest_Assign_value = vall;
          tmp4 = (i, m) => {
            return match_as2_arm_Assign_inst_51_52_68_69_tsni(i, m, _deforest_Assign_varr, _deforest_Assign_value)
          };
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = Predef.not(tmp5);
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return runtime.safeCall(constraints.Known(tmp7))
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_51_45_24_25_62_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (lscomp2, varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_51_45_24_25_27_tsni = function enumFromTo_inst_51_45_24_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_45_24_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, varrr))
      };
      tmp2 = enumFromTo_inst_51_45_24_25_26_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_51_45_24_25_61_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (lscomp1, vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_51_45_24_28_tsni = function map_inst_51_45_24_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_45_24_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_45_22_23_13_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_51_45_59_13_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
emptyTable_inst_51_45_29_tsni = function emptyTable_inst_51_45_29_tsni(csp) {
  let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, vals))
    };
    tmp = enumFromTo_inst_51_45_29_31_tsni(1, vars);
    tmp1 = lscomp1(tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_51_45_29_30_tsni = function enumFromTo_inst_51_45_29_30_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_45_29_30_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2) => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2(t2);
      return NofibPrelude.Cons(constraints.Unknown, tmp2)
    }
  } else {
    return (lscomp2) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_51_45_29_31_tsni = function enumFromTo_inst_51_45_29_31_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_45_29_31_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, vals) => {
      let lscomp2, param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2))
      };
      tmp2 = enumFromTo_inst_51_45_29_30_tsni(1, vals);
      tmp3 = lscomp2(tmp2);
      tmp4 = lscomp1(t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp1, vals) => {
      return NofibPrelude.Nil
    }
  }
};
bt_inst_51_44_tsni = function bt_inst_51_44_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut;
    scrut = earliestInconsistency_inst_51_44_35_tsni(csp, s);
    return runtime.safeCall(scrut(csp, s))
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_51_44_35_tsni = function earliestInconsistency_inst_51_44_35_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_51_44_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = runtime.safeCall(rel(a, x));
        return Predef.not(tmp1)
      });
      scrut = filter_inst_51_44_35_5_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_51_44_35_5_tsni = function filter_inst_51_44_35_5_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_51_44_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_51_44_35_5_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
          return match_scrut_rest_inst_51_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_51_44_35_5_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
try__inst_51_52_tsni = function try__inst_51_52_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = queens_inst_51_52_68_tsni(n);
  tmp1 = search_inst_51_52_43_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_51_52_43_tsni = function search_inst_51_52_43_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
  tmp = mkTree_inst_51_52_43_21_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  lambda = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownConflict(tmp5)
  });
  tmp2 = prune_inst_51_52_43_20_tsni(lambda, tmp1);
  tmp3 = leaves_inst_51_52_43_19_tsni(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownSolution(tmp5)
  });
  tmp4 = filter_inst_51_52_43_18_tsni(lambda1, tmp3);
  return map_inst_51_52_43_55_tsni(NofibPrelude.fst, tmp4)
};
mkTree_inst_51_52_43_21_tsni = function mkTree_inst_51_52_43_21_tsni(csp) {
  let next, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next = function next(ss) {
      let lscomp1, scrut, tmp, tmp1;
      tmp = constraints.maxLevel(ss);
      scrut = tmp < vars;
      if (scrut === true) {
        lscomp1 = function lscomp1(ls) {
          return runtime.safeCall(ls(lscomp1, ss))
        };
        tmp1 = enumFromTo_inst_51_52_43_21_15_tsni(1, vals);
        return lscomp1(tmp1)
      } else {
        return (f) => {
          return match_xs_arm_Nil_inst_51_52_43_21_16_17_tsni(f)
        }
      }
    };
    return initTree_inst_51_52_43_21_16_tsni(next, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_51_52_43_21_15_tsni = function enumFromTo_inst_51_52_43_21_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_52_43_21_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1(t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_51_52_43_21_16_17_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (lscomp1, ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_51_52_43_21_16_17_tsni(f)
      }
    }
  }
};
prune_inst_51_52_43_20_tsni = function prune_inst_51_52_43_20_tsni(p, t) {
  let lambda;
  lambda = (undefined, function (x) {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return Predef.not(tmp)
  });
  return filterTree_inst_51_52_43_20_0_tsni(lambda, t)
};
filterTree_inst_51_52_43_20_0_tsni = function filterTree_inst_51_52_43_20_0_tsni(p, t) {
  let f1;
  f1 = function f1(a, cs) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = constraints.label(x);
      return runtime.safeCall(p(tmp1))
    });
    tmp = filter_inst_51_52_43_20_0_9_tsni(lambda, cs);
    return constraints.Node(a, tmp)
  };
  return foldTree_inst_51_52_43_20_0_1_tsni(f1, t)
};
foldTree_inst_51_52_43_20_0_1_tsni = function foldTree_inst_51_52_43_20_0_1_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda = (undefined, function (x) {
      return foldTree_inst_51_52_43_20_0_1_tsni(f, x)
    });
    tmp = map_inst_51_52_43_20_0_1_2_tsni(lambda, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_51_52_43_20_0_1_2_tsni = function map_inst_51_52_43_20_0_1_2_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_43_20_0_1_2_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_51_52_43_20_0_9_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_51_52_43_20_0_9_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_51_52_43_19_tsni = function leaves_inst_51_52_43_19_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_51_52_43_19_3_tsni(leaves_inst_51_52_43_19_tsni, cs);
      return concat_inst_51_52_43_19_53_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_51_52_43_19_3_tsni = function map_inst_51_52_43_19_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_43_19_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_43_19_53_tsni(xs2);
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
filter_inst_51_52_43_18_tsni = function filter_inst_51_52_43_18_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_51_52_43_18_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_51_52_43_55_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_51_52_43_18_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_0_9_tsni = function filter_inst_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_53_tsni = function concat_inst_53_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_4_53_tsni = function concat_inst_4_53_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_6_53_tsni = function concat_inst_6_53_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_7_13_tsni = function map_inst_7_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
fst_inst_54_tsni = function fst_inst_54_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_55_tsni = function map_inst_55_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_19_53_tsni = function concat_inst_19_53_tsni(ls) {
  return runtime.safeCall(ls())
};
filter_inst_20_0_9_tsni = function filter_inst_20_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
initTree_inst_21_16_tsni = function initTree_inst_21_16_tsni(f, x) {
  let tmp, tmp1, lambda;
  tmp = runtime.safeCall(f(x));
  lambda = (undefined, function (y) {
    return initTree_inst_21_16_tsni(f, y)
  });
  tmp1 = map_inst_21_16_17_tsni(lambda, tmp);
  return constraints.Node(x, tmp1)
};
map_inst_21_16_17_tsni = function map_inst_21_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_22_56_tsni = function checkComplete_inst_22_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_22_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_22_56_57_tsni = function complete_inst_22_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_22_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_22_56_57_58_tsni = function maxLevel_inst_22_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_59_tsni = function mapTree_inst_59_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_59_13_tsni = function map_inst_59_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
fst_inst_60_tsni = function fst_inst_60_tsni(x) {
  return runtime.safeCall(x())
};
zipWith_inst_24_25_61_tsni = function zipWith_inst_24_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_24_25_62_tsni = function zipWith_inst_24_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
combine_inst_32_63_tsni = function combine_inst_32_63_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_32_47_tsni = function foldTree_inst_32_47_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_32_47_2_tsni = function map_inst_32_47_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_37_64_tsni = function combine_inst_37_64_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_37_49_tsni = function foldTree_inst_37_49_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_37_49_2_tsni = function map_inst_37_49_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_40_56_tsni = function checkComplete_inst_40_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_40_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_40_56_57_tsni = function complete_inst_40_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_40_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_40_56_57_58_tsni = function maxLevel_inst_40_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_65_tsni = function domainWipeout_inst_65_tsni(csp, t) {
  let f8, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    f8 = function f8(tp2) {
      return runtime.safeCall(tp2())
    };
    return mapTree_inst_65_66_tsni(f8, t)
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_65_66_tsni = function mapTree_inst_65_66_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_65_66_13_tsni = function map_inst_65_66_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith_inst_41_25_61_tsni = function zipWith_inst_41_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_41_25_62_tsni = function zipWith_inst_41_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
initTree_inst_43_21_16_tsni = function initTree_inst_43_21_16_tsni(f, x) {
  let tmp, tmp1, lambda;
  tmp = runtime.safeCall(f(x));
  lambda = (undefined, function (y) {
    return initTree_inst_43_21_16_tsni(f, y)
  });
  tmp1 = map_inst_43_21_16_17_tsni(lambda, tmp);
  return constraints.Node(x, tmp1)
};
map_inst_43_21_16_17_tsni = function map_inst_43_21_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_43_20_0_9_tsni = function filter_inst_43_20_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_43_19_53_tsni = function concat_inst_43_19_53_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_43_55_tsni = function map_inst_43_55_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_67_tsni = function map_inst_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith_inst_45_24_25_61_tsni = function zipWith_inst_45_24_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_45_24_25_62_tsni = function zipWith_inst_45_24_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
checkComplete_inst_45_22_56_tsni = function checkComplete_inst_45_22_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_45_22_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_45_22_56_57_tsni = function complete_inst_45_22_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_45_22_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_45_22_56_57_58_tsni = function maxLevel_inst_45_22_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_45_59_tsni = function mapTree_inst_45_59_tsni(f, n) {
  return runtime.safeCall(n(f))
};
fst_inst_45_60_tsni = function fst_inst_45_60_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_45_59_13_tsni = function map_inst_45_59_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_46_32_63_tsni = function combine_inst_46_32_63_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_48_37_64_tsni = function combine_inst_48_37_64_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
zipWith_inst_50_41_25_61_tsni = function zipWith_inst_50_41_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_50_41_25_62_tsni = function zipWith_inst_50_41_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
checkComplete_inst_50_40_56_tsni = function checkComplete_inst_50_40_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_50_40_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_50_40_56_57_tsni = function complete_inst_50_40_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_50_40_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_50_40_56_57_58_tsni = function maxLevel_inst_50_40_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_50_65_tsni = function domainWipeout_inst_50_65_tsni(csp, t) {
  let f8, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    f8 = function f8(tp2) {
      return runtime.safeCall(tp2())
    };
    return mapTree_inst_50_65_66_tsni(f8, t)
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_50_65_66_tsni = function mapTree_inst_50_65_66_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_50_65_66_13_tsni = function map_inst_50_65_66_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_51_50_40_56_tsni = function checkComplete_inst_51_50_40_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_51_50_40_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_51_50_40_56_57_tsni = function complete_inst_51_50_40_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_51_50_40_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_51_50_40_56_57_58_tsni = function maxLevel_inst_51_50_40_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_51_50_65_tsni = function domainWipeout_inst_51_50_65_tsni(csp, t) {
  let f8, param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    f8 = function f8(tp2) {
      return runtime.safeCall(tp2())
    };
    return mapTree_inst_51_50_65_66_tsni(f8, t)
  } else {
    throw new globalThis.Error("match error");
  }
};
mapTree_inst_51_50_65_66_tsni = function mapTree_inst_51_50_65_66_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_50_65_66_13_tsni = function map_inst_51_50_65_66_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith_inst_51_50_41_25_61_tsni = function zipWith_inst_51_50_41_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_51_50_41_25_62_tsni = function zipWith_inst_51_50_41_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
combine_inst_51_48_37_64_tsni = function combine_inst_51_48_37_64_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_51_48_37_49_tsni = function foldTree_inst_51_48_37_49_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_48_37_49_2_tsni = function map_inst_51_48_37_49_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_51_46_32_63_tsni = function combine_inst_51_46_32_63_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_51_46_32_47_tsni = function foldTree_inst_51_46_32_47_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_46_32_47_2_tsni = function map_inst_51_46_32_47_2_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_51_45_22_56_tsni = function checkComplete_inst_51_45_22_56_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_51_45_22_56_57_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_51_45_22_56_57_tsni = function complete_inst_51_45_22_56_57_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_51_45_22_56_57_58_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_51_45_22_56_57_58_tsni = function maxLevel_inst_51_45_22_56_57_58_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_51_45_59_tsni = function mapTree_inst_51_45_59_tsni(f, n) {
  return runtime.safeCall(n(f))
};
map_inst_51_45_59_13_tsni = function map_inst_51_45_59_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
fst_inst_51_45_60_tsni = function fst_inst_51_45_60_tsni(x) {
  return runtime.safeCall(x())
};
zipWith_inst_51_45_24_25_61_tsni = function zipWith_inst_51_45_24_25_61_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith_inst_51_45_24_25_62_tsni = function zipWith_inst_51_45_24_25_62_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
initTree_inst_51_52_43_21_16_tsni = function initTree_inst_51_52_43_21_16_tsni(f, x) {
  let tmp, tmp1, lambda;
  tmp = runtime.safeCall(f(x));
  lambda = (undefined, function (y) {
    return initTree_inst_51_52_43_21_16_tsni(f, y)
  });
  tmp1 = map_inst_51_52_43_21_16_17_tsni(lambda, tmp);
  return constraints.Node(x, tmp1)
};
map_inst_51_52_43_21_16_17_tsni = function map_inst_51_52_43_21_16_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_51_52_43_20_0_9_tsni = function filter_inst_51_52_43_20_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_51_52_43_19_53_tsni = function concat_inst_51_52_43_19_53_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_51_52_43_55_tsni = function map_inst_51_52_43_55_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_51_67_tsni = function map_inst_51_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
queens_inst_51_52_68_tsni = function queens_inst_51_52_68_tsni(n) {
  return runtime.safeCall(constraints.CSP(n, n, safe_inst_51_52_68_69_tsni))
};
safe_inst_51_52_68_69_tsni = function safe_inst_51_52_68_69_tsni(as1, as2) {
  let param0, param1, i, m;
  if (as1 instanceof constraints.Assign.class) {
    param0 = as1.varr;
    param1 = as1.value;
    i = param0;
    m = param1;
    return runtime.safeCall(as2(i, m))
  } else {
    throw new globalThis.Error("match error");
  }
};
(class constraints {
  static {
    constraints1 = constraints;
    this.Assign = function Assign(varr1, value1) {
      return new Assign.class(varr1, value1);
    };
    this.Assign.class = class Assign {
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return "Assign(" + runtime.render(this.varr) + ", " + runtime.render(this.value) + ")"; }
    };
    this.CSP = function CSP(vars1, vals1, rel1) {
      return new CSP.class(vars1, vals1, rel1);
    };
    this.CSP.class = class CSP {
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return "CSP(" + runtime.render(this.vars) + ", " + runtime.render(this.vals) + ", " + runtime.render(this.rel) + ")"; }
    };
    this.Node = function Node(lab1, children1) {
      return new Node.class(lab1, children1);
    };
    this.Node.class = class Node {
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return "Node(" + runtime.render(this.lab) + ", " + runtime.render(this.children) + ")"; }
    };
    this.ConflictSet = class ConflictSet {
      constructor() {}
      toString() { return "ConflictSet"; }
    };
    this.Known = function Known(vs1) {
      return new Known.class(vs1);
    };
    this.Known.class = class Known extends constraints.ConflictSet {
      constructor(vs) {
        super();
        this.vs = vs;
      }
      toString() { return "Known(" + runtime.render(this.vs) + ")"; }
    };
    const Unknown$class = class Unknown extends constraints.ConflictSet {
      constructor() {
        super();
      }
      toString() { return "Unknown"; }
    };
    this.Unknown = new Unknown$class;
    this.Unknown.class = Unknown$class;
  }
  static qsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return constraints.qpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static qpart(le1, x, ls1, rlt, rge, r1) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      tmp = constraints.rqsort(le1, rge, r1);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return constraints.rqsort(le1, rlt, tmp1)
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      param0 = ls1.head;
      param1 = ls1.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le1(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return constraints.qpart(le1, x, ys, rlt, tmp2, r1)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return constraints.qpart(le1, x, ys, tmp3, rge, r1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqsort(le2, ls2, r2) {
    let param0, param1, x1, xs, x2;
    if (ls2 instanceof NofibPrelude.Nil.class) {
      return r2
    } else if (ls2 instanceof NofibPrelude.Cons.class) {
      param0 = ls2.head;
      param1 = ls2.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x2, r2)
      } else {
        x1 = param0;
        xs = param1;
        return constraints.rqpart(le2, x1, xs, NofibPrelude.Nil, NofibPrelude.Nil, r2)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqpart(le3, x1, ls3, rle, rgt, r3) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls3 instanceof NofibPrelude.Nil.class) {
      tmp = constraints.qsort(le3, rgt, r3);
      tmp1 = NofibPrelude.Cons(x1, tmp);
      return constraints.rqsort(le3, rle, tmp1)
    } else if (ls3 instanceof NofibPrelude.Cons.class) {
      param0 = ls3.head;
      param1 = ls3.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le3(y, x1));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return constraints.rqpart(le3, x1, ys, tmp2, rgt, r3)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return constraints.rqpart(le3, x1, ys, rle, tmp3, r3)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static level(a) {
    let param0, param1, v;
    if (a instanceof constraints.Assign.class) {
      param0 = a.varr;
      param1 = a.value;
      v = param0;
      return v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static value(a1) {
    let param0, param1, v;
    if (a1 instanceof constraints.Assign.class) {
      param0 = a1.varr;
      param1 = a1.value;
      v = param1;
      return v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static maxLevel(ls4) {
    let param0, param1, param01, param11, v, t;
    if (ls4 instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls4 instanceof NofibPrelude.Cons.class) {
      param0 = ls4.head;
      param1 = ls4.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        v = param01;
        t = param1;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static complete(csp, s) {
    let param0, param1, param2, v, tmp;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      v = param0;
      tmp = constraints.maxLevel(s);
      return tmp == v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static safe(as1, as2) {
    let param0, param1, i, m, param01, param11, j, n, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (as1 instanceof constraints.Assign.class) {
      param0 = as1.varr;
      param1 = as1.value;
      i = param0;
      m = param1;
      if (as2 instanceof constraints.Assign.class) {
        param01 = as2.varr;
        param11 = as2.value;
        j = param01;
        n = param11;
        tmp = m == n;
        scrut = Predef.not(tmp);
        if (scrut === true) {
          tmp1 = i - j;
          tmp2 = NofibPrelude.abs(tmp1);
          tmp3 = m - n;
          tmp4 = NofibPrelude.abs(tmp3);
          tmp5 = tmp2 == tmp4;
          scrut1 = Predef.not(tmp5);
          if (scrut1 === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static queens(n) {
    return runtime.safeCall(constraints.CSP(n, n, constraints.safe))
  } 
  static label(n1) {
    let param0, param1, l;
    if (n1 instanceof constraints.Node.class) {
      param0 = n1.lab;
      param1 = n1.children;
      l = param0;
      return l
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mapTree(f, n2) {
    let param0, param1, l, c, tmp, tmp1, lambda;
    if (n2 instanceof constraints.Node.class) {
      param0 = n2.lab;
      param1 = n2.children;
      l = param0;
      c = param1;
      tmp = runtime.safeCall(f(l));
      lambda = (undefined, function (x2) {
        return constraints.mapTree(f, x2)
      });
      tmp1 = NofibPrelude.map(lambda, c);
      return constraints.Node(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static foldTree(f1, n3) {
    let param0, param1, l, c, tmp, lambda;
    if (n3 instanceof constraints.Node.class) {
      param0 = n3.lab;
      param1 = n3.children;
      l = param0;
      c = param1;
      lambda = (undefined, function (x2) {
        return constraints.foldTree(f1, x2)
      });
      tmp = NofibPrelude.map(lambda, c);
      return runtime.safeCall(f1(l, tmp))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static filterTree(p, t) {
    let f11;
    f11 = function f1(a2, cs) {
      let tmp, lambda;
      lambda = (undefined, function (x2) {
        let tmp1;
        tmp1 = constraints.label(x2);
        return runtime.safeCall(p(tmp1))
      });
      tmp = NofibPrelude.filter(lambda, cs);
      return constraints.Node(a2, tmp)
    };
    return constraints.foldTree(f11, t)
  } 
  static prune(p1, t1) {
    let lambda;
    lambda = (undefined, function (x2) {
      let tmp;
      tmp = runtime.safeCall(p1(x2));
      return Predef.not(tmp)
    });
    return filterTree_inst_0_tsni(lambda, t1)
  } 
  static leaves(t2) {
    let param0, param1, cs, leaf, tmp;
    if (t2 instanceof constraints.Node.class) {
      param0 = t2.lab;
      param1 = t2.children;
      leaf = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
      } else {
        cs = param1;
        tmp = map_inst_3_tsni(leaves_inst_4_tsni, cs);
        return concat_inst_53_tsni(tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static initTree(f2, x2) {
    let tmp, tmp1, lambda;
    tmp = runtime.safeCall(f2(x2));
    lambda = (undefined, function (y) {
      return constraints.initTree(f2, y)
    });
    tmp1 = NofibPrelude.map(lambda, tmp);
    return constraints.Node(x2, tmp1)
  } 
  static mkTree(csp1) {
    let next, param0, param1, param2, vars, vals, rel;
    if (csp1 instanceof constraints.CSP.class) {
      param0 = csp1.vars;
      param1 = csp1.vals;
      param2 = csp1.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      next = function next(ss) {
        let lscomp1, scrut, tmp, tmp1;
        tmp = constraints.maxLevel(ss);
        scrut = tmp < vars;
        if (scrut === true) {
          lscomp1 = function lscomp1(ls5) {
            let param01, param11, j, t11, tmp2, tmp3, tmp4, tmp5, tmp6;
            if (ls5 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls5 instanceof NofibPrelude.Cons.class) {
              param01 = ls5.head;
              param11 = ls5.tail;
              j = param01;
              t11 = param11;
              tmp2 = constraints.maxLevel(ss);
              tmp3 = tmp2 + 1;
              tmp4 = constraints.Assign(tmp3, j);
              tmp5 = NofibPrelude.Cons(tmp4, ss);
              tmp6 = lscomp1(t11);
              return NofibPrelude.Cons(tmp5, tmp6)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp1 = NofibPrelude.enumFromTo(1, vals);
          return lscomp1(tmp1)
        } else {
          return NofibPrelude.Nil
        }
      };
      return constraints.initTree(next, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static earliestInconsistency(csp2, aas) {
    let param0, param1, param2, vars, vals, rel, param01, param11, a2, as_, scrut, tmp, lambda;
    if (csp2 instanceof constraints.CSP.class) {
      param0 = csp2.vars;
      param1 = csp2.vals;
      param2 = csp2.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      if (aas instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (aas instanceof NofibPrelude.Cons.class) {
        param01 = aas.head;
        param11 = aas.tail;
        a2 = param01;
        as_ = param11;
        tmp = NofibPrelude.reverse(as_);
        lambda = (undefined, function (x3) {
          let tmp1;
          tmp1 = runtime.safeCall(rel(a2, x3));
          return Predef.not(tmp1)
        });
        scrut = filter_inst_5_tsni(lambda, tmp);
        return runtime.safeCall(scrut(a2))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static labelInconsistencies(csp3, t3) {
    let f21;
    f21 = function f2(s1) {
      let tmp, arr;
      tmp = constraints.earliestInconsistency(csp3, s1);
      arr = [
        s1,
        tmp
      ];
      return arr
    };
    return constraints.mapTree(f21, t3)
  } 
  static btsolver0(csp4) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    tmp = mkTree_inst_14_tsni(csp4);
    tmp1 = labelInconsistencies_inst_10_tsni(csp4, tmp);
    lambda = (undefined, function (x3) {
      let tmp5, tmp6;
      tmp5 = NofibPrelude.snd(x3);
      tmp6 = tmp5 === NofibPrelude.None;
      return Predef.not(tmp6)
    });
    tmp2 = prune_inst_8_tsni(lambda, tmp1);
    tmp3 = mapTree_inst_7_tsni(fst_inst_54_tsni, tmp2);
    tmp4 = leaves_inst_6_tsni(tmp3);
    lambda1 = (undefined, function (x3) {
      return constraints.complete(csp4, x3)
    });
    return NofibPrelude.filter(lambda1, tmp4)
  } 
  static knownConflict(c) {
    let param0, param01, param1, a2, as_;
    if (c instanceof constraints.Known.class) {
      param0 = c.vs;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param1 = param0.tail;
        a2 = param01;
        as_ = param1;
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static knownSolution(c1) {
    let param0;
    if (c1 instanceof constraints.Known.class) {
      param0 = c1.vs;
      if (param0 instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static checkComplete(csp5, s1) {
    let scrut;
    scrut = constraints.complete(csp5, s1);
    if (scrut === true) {
      return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
    } else {
      return constraints.Unknown
    }
  } 
  static search(labeler, csp6) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    tmp = mkTree_inst_21_tsni(csp6);
    tmp1 = runtime.safeCall(labeler(csp6, tmp));
    lambda = (undefined, function (x3) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x3);
      return constraints.knownConflict(tmp5)
    });
    tmp2 = prune_inst_20_tsni(lambda, tmp1);
    tmp3 = leaves_inst_19_tsni(tmp2);
    lambda1 = (undefined, function (x3) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x3);
      return constraints.knownSolution(tmp5)
    });
    tmp4 = filter_inst_18_tsni(lambda1, tmp3);
    return map_inst_55_tsni(NofibPrelude.fst, tmp4)
  } 
  static bt(csp7, t4) {
    let f3;
    f3 = function f3(s2) {
      let scrut, param0, first1, first0, a2, b, tmp, tmp1, tmp2, arr;
      scrut = constraints.earliestInconsistency(csp7, s2);
      if (scrut instanceof NofibPrelude.Some.class) {
        param0 = scrut.x;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          a2 = first0;
          b = first1;
          tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
          tmp1 = NofibPrelude.Cons(a2, tmp);
          tmp2 = runtime.safeCall(constraints.Known(tmp1));
        } else {
          tmp2 = constraints.checkComplete(csp7, s2);
        }
      } else {
        tmp2 = constraints.checkComplete(csp7, s2);
      }
      arr = [
        s2,
        tmp2
      ];
      return arr
    };
    return constraints.mapTree(f3, t4)
  } 
  static emptyTable(csp8) {
    let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
    if (csp8 instanceof constraints.CSP.class) {
      param0 = csp8.vars;
      param1 = csp8.vals;
      param2 = csp8.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      lscomp1 = function lscomp1(ls5) {
        let lscomp2, param01, param11, n4, t11, tmp2, tmp3, tmp4;
        if (ls5 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls5 instanceof NofibPrelude.Cons.class) {
          param01 = ls5.head;
          param11 = ls5.tail;
          n4 = param01;
          t11 = param11;
          lscomp2 = function lscomp2(ls6) {
            let param02, param12, m, t21, tmp5;
            if (ls6 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls6 instanceof NofibPrelude.Cons.class) {
              param02 = ls6.head;
              param12 = ls6.tail;
              m = param02;
              t21 = param12;
              tmp5 = lscomp2(t21);
              return NofibPrelude.Cons(constraints.Unknown, tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp2 = NofibPrelude.enumFromTo(1, vals);
          tmp3 = lscomp2(tmp2);
          tmp4 = lscomp1(t11);
          return NofibPrelude.Cons(tmp3, tmp4)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = NofibPrelude.enumFromTo(1, vars);
      tmp1 = lscomp1(tmp);
      return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fillTable(s2, csp9, tbl) {
    let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
    if (s2 instanceof NofibPrelude.Nil.class) {
      return tbl
    } else if (s2 instanceof NofibPrelude.Cons.class) {
      param0 = s2.head;
      param1 = s2.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        var_ = param01;
        val_ = param11;
        as_ = param1;
        if (csp9 instanceof constraints.CSP.class) {
          param02 = csp9.vars;
          param12 = csp9.vals;
          param2 = csp9.rel;
          vars = param02;
          vals = param12;
          rel = param2;
          f4 = function f4(cs, varval) {
            let first1, first0, varr, vall, scrut, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7;
            if (globalThis.Array.isArray(varval) && varval.length === 2) {
              first0 = varval[0];
              first1 = varval[1];
              varr = first0;
              vall = first1;
              scrut = cs === constraints.Unknown;
              if (scrut === true) {
                tmp3 = constraints.Assign(var_, val_);
                tmp4 = constraints.Assign(varr, vall);
                tmp5 = runtime.safeCall(rel(tmp3, tmp4));
                scrut1 = Predef.not(tmp5);
                if (scrut1 === true) {
                  tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
                  tmp7 = NofibPrelude.Cons(var_, tmp6);
                  return runtime.safeCall(constraints.Known(tmp7))
                } else {
                  return cs
                }
              } else {
                return cs
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          lscomp1 = function lscomp1(ls5) {
            let lscomp2, param03, param13, varrr, t11, tmp3, tmp4, tmp5;
            if (ls5 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls5 instanceof NofibPrelude.Cons.class) {
              param03 = ls5.head;
              param13 = ls5.tail;
              varrr = param03;
              t11 = param13;
              lscomp2 = function lscomp2(ls6) {
                let param04, param14, valll, t21, arr, tmp6;
                if (ls6 instanceof NofibPrelude.Nil.class) {
                  return NofibPrelude.Nil
                } else if (ls6 instanceof NofibPrelude.Cons.class) {
                  param04 = ls6.head;
                  param14 = ls6.tail;
                  valll = param04;
                  t21 = param14;
                  arr = [
                    varrr,
                    valll
                  ];
                  tmp6 = lscomp2(t21);
                  return NofibPrelude.Cons(arr, tmp6)
                } else {
                  throw new globalThis.Error("match error");
                }
              };
              tmp3 = NofibPrelude.enumFromTo(1, vals);
              tmp4 = lscomp2(tmp3);
              tmp5 = lscomp1(t11);
              return NofibPrelude.Cons(tmp4, tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp = var_ + 1;
          tmp1 = NofibPrelude.enumFromTo(tmp, vars);
          tmp2 = lscomp1(tmp1);
          lambda = (undefined, function (x3, y) {
            return NofibPrelude.zipWith(f4, x3, y)
          });
          return NofibPrelude.zipWith(lambda, tbl, tmp2)
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
  static lookupCache(csp10, t5) {
    let f5, lambda;
    f5 = function f5(csp11, tp) {
      let first1, first0, param0, param1, a2, as_, tbl1, tableEntry, cs, scrut, tbl2, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3;
      if (globalThis.Array.isArray(tp) && tp.length === 2) {
        first0 = tp[0];
        first1 = tp[1];
        if (first0 instanceof NofibPrelude.Nil.class) {
          tbl2 = first1;
          arr = [
            NofibPrelude.Nil,
            constraints.Unknown
          ];
          arr1 = [
            arr,
            tbl2
          ];
          return arr1
        } else if (first0 instanceof NofibPrelude.Cons.class) {
          param0 = first0.head;
          param1 = first0.tail;
          a2 = param0;
          as_ = param1;
          tbl1 = first1;
          tmp = constraints.value(a2);
          tmp1 = tmp - 1;
          tmp2 = NofibPrelude.head(tbl1);
          tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
          tableEntry = tmp3;
          scrut = tableEntry === constraints.Unknown;
          if (scrut === true) {
            tmp4 = NofibPrelude.Cons(a2, as_);
            tmp5 = constraints.checkComplete(csp11, tmp4);
          } else {
            tmp5 = tableEntry;
          }
          cs = tmp5;
          tmp6 = NofibPrelude.Cons(a2, as_);
          arr2 = [
            tmp6,
            cs
          ];
          arr3 = [
            arr2,
            tbl1
          ];
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x3) {
      return f5(csp10, x3)
    });
    return constraints.mapTree(lambda, t5)
  } 
  static cacheChecks(csp11, tbl1, n4) {
    let param0, param1, s3, cs, arr, tmp, tmp1, lambda;
    if (n4 instanceof constraints.Node.class) {
      param0 = n4.lab;
      param1 = n4.children;
      s3 = param0;
      cs = param1;
      arr = [
        s3,
        tbl1
      ];
      lambda = (undefined, function (x3) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.tail(tbl1);
        tmp3 = constraints.fillTable(s3, csp11, tmp2);
        return constraints.cacheChecks(csp11, tmp3, x3)
      });
      tmp = lambda;
      tmp1 = NofibPrelude.map(tmp, cs);
      return constraints.Node(arr, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bm(csp12, t6) {
    let tmp, tmp1, tmp2;
    tmp = emptyTable_inst_29_tsni(csp12);
    tmp1 = cacheChecks_inst_24_tsni(csp12, tmp, t6);
    tmp2 = lookupCache_inst_22_tsni(csp12, tmp1);
    return mapTree_inst_59_tsni(fst_inst_60_tsni, tmp2)
  } 
  static combine(ls5, acc) {
    let param0, param1, first1, first0, s3, param01, cs, css, scrut, tmp, tmp1;
    if (ls5 instanceof NofibPrelude.Nil.class) {
      return acc
    } else if (ls5 instanceof NofibPrelude.Cons.class) {
      param0 = ls5.head;
      param1 = ls5.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        s3 = first0;
        if (first1 instanceof constraints.Known.class) {
          param01 = first1.vs;
          cs = param01;
          css = param1;
          tmp = constraints.maxLevel(s3);
          scrut = NofibPrelude.notElem(tmp, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp1 = NofibPrelude.union(cs, acc);
            return constraints.combine(css, tmp1)
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
  static bj_(csp13, t7) {
    let f7;
    f7 = function f7(tp2, chs) {
      let first1, first0, a2, cs_, scrut, a3, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
      if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
        first0 = tp2[0];
        first1 = tp2[1];
        a3 = first0;
        a2 = first0;
        if (first1 instanceof constraints.Known.class) {
          param0 = first1.vs;
          cs = param0;
          tmp = runtime.safeCall(constraints.Known(cs));
          arr = [
            a3,
            tmp
          ];
          return constraints.Node(arr, chs)
        } else if (first1 instanceof constraints.Unknown.class) {
          tmp1 = NofibPrelude.map(constraints.label, chs);
          tmp2 = constraints.combine(tmp1, NofibPrelude.Nil);
          cs_ = runtime.safeCall(constraints.Known(tmp2));
          scrut = constraints.knownConflict(cs_);
          if (scrut === true) {
            arr1 = [
              a2,
              cs_
            ];
            return constraints.Node(arr1, NofibPrelude.Nil)
          } else {
            arr2 = [
              a2,
              cs_
            ];
            return constraints.Node(arr2, chs)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return constraints.foldTree(f7, t7)
  } 
  static bj(csp14, t8) {
    let f6;
    f6 = function f6(tp2, chs) {
      let first1, first0, a2, a3, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
      if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
        first0 = tp2[0];
        first1 = tp2[1];
        a3 = first0;
        a2 = first0;
        if (first1 instanceof constraints.Known.class) {
          param0 = first1.vs;
          cs = param0;
          tmp = runtime.safeCall(constraints.Known(cs));
          arr = [
            a3,
            tmp
          ];
          return constraints.Node(arr, chs)
        } else if (first1 instanceof constraints.Unknown.class) {
          tmp1 = NofibPrelude.map(constraints.label, chs);
          tmp2 = constraints.combine(tmp1, NofibPrelude.Nil);
          tmp3 = runtime.safeCall(constraints.Known(tmp2));
          arr1 = [
            a2,
            tmp3
          ];
          return constraints.Node(arr1, chs)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return constraints.foldTree(f6, t8)
  } 
  static bjbt(csp15, t9) {
    let tmp;
    tmp = bt_inst_34_tsni(csp15, t9);
    return bj_inst_32_tsni(csp15, tmp)
  } 
  static bjbt_(csp16, t10) {
    let tmp;
    tmp = bt_inst_39_tsni(csp16, t10);
    return bj__inst_37_tsni(csp16, tmp)
  } 
  static collect(ls6) {
    let param0, param1, param01, cs, css, tmp;
    if (ls6 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls6 instanceof NofibPrelude.Cons.class) {
      param0 = ls6.head;
      param1 = ls6.tail;
      if (param0 instanceof constraints.Known.class) {
        param01 = param0.vs;
        cs = param01;
        css = param1;
        tmp = constraints.collect(css);
        return NofibPrelude.union(cs, tmp)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static domainWipeout(csp17, t11) {
    let f8, param0, param1, param2, vars, vals, rel;
    if (csp17 instanceof constraints.CSP.class) {
      param0 = csp17.vars;
      param1 = csp17.vals;
      param2 = csp17.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      f8 = function f8(tp2) {
        let lscomp1, first1, first0, first11, first01, as_, cs, tbl2, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
        if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
          first0 = tp2[0];
          first1 = tp2[1];
          if (globalThis.Array.isArray(first0) && first0.length === 2) {
            first01 = first0[0];
            first11 = first0[1];
            as_ = first01;
            cs = first11;
            tbl2 = first1;
            lscomp1 = function lscomp1(ls7) {
              let param01, param11, vs, t12, scrut1, tmp4;
              if (ls7 instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Nil
              } else if (ls7 instanceof NofibPrelude.Cons.class) {
                param01 = ls7.head;
                param11 = ls7.tail;
                vs = param01;
                t12 = param11;
                scrut1 = NofibPrelude.all(constraints.knownConflict, vs);
                if (scrut1 === true) {
                  tmp4 = lscomp1(t12);
                  return NofibPrelude.Cons(vs, tmp4)
                } else {
                  return lscomp1(t12)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            };
            tmp = lscomp1(tbl2);
            wipedDomains = tmp;
            scrut = NofibPrelude.null_(wipedDomains);
            if (scrut === true) {
              tmp1 = cs;
            } else {
              tmp2 = NofibPrelude.head(wipedDomains);
              tmp3 = constraints.collect(tmp2);
              tmp1 = runtime.safeCall(constraints.Known(tmp3));
            }
            cs_ = tmp1;
            arr = [
              as_,
              cs_
            ];
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return constraints.mapTree(f8, t11)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fc(csp18, t12) {
    let tmp, tmp1, tmp2;
    tmp = emptyTable_inst_42_tsni(csp18);
    tmp1 = cacheChecks_inst_41_tsni(csp18, tmp, t12);
    tmp2 = lookupCache_inst_40_tsni(csp18, tmp1);
    return domainWipeout_inst_65_tsni(csp18, tmp2)
  } 
  static try_(n5, algorithm) {
    let tmp, tmp1;
    tmp = constraints.queens(n5);
    tmp1 = search_inst_43_tsni(algorithm, tmp);
    return NofibPrelude.listLen(tmp1)
  } 
  static testConstraints_nofib(n6) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
    _deforest_Cons_head4 = fc_inst_50_tsni;
    _deforest_Cons_tail4 = (f3) => {
      return NofibPrelude.Nil
    };
    tmp = (f3) => {
      return match_xs_arm_Cons_inst_67_tsni(f3, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = bjbt__inst_48_tsni;
    _deforest_Cons_tail3 = tmp;
    tmp1 = (f3) => {
      return match_xs_arm_Cons_inst_67_tsni(f3, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = bjbt_inst_46_tsni;
    _deforest_Cons_tail2 = tmp1;
    tmp2 = (f3) => {
      return match_xs_arm_Cons_inst_67_tsni(f3, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = bm_inst_45_tsni;
    _deforest_Cons_tail1 = tmp2;
    tmp3 = (f3) => {
      return match_xs_arm_Cons_inst_67_tsni(f3, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = bt_inst_44_tsni;
    _deforest_Cons_tail = tmp3;
    tmp4 = (f3) => {
      return match_xs_arm_Cons_inst_67_tsni(f3, _deforest_Cons_head, _deforest_Cons_tail)
    };
    lambda = (undefined, function (x3) {
      return constraints.try_(n6, x3)
    });
    return map_inst_67_tsni(lambda, tmp4)
  } 
  static main() {
    let tmp;
    tmp = testConstraints_nofib_inst_51_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "constraints"; }
});
let constraints = constraints1; export default constraints;
