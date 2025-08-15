import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let go, plus, linc, plus1, start, breakk, unknownEq, bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, para1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, myAdd$, bf$, drop_nofit$, trim$, new_$, old_width_hd$, cost$, width_hd$, init__inst_0_1_tsni, splitAt_inst_0_1_2_tsni, trim$_inst_3_4_tsni, init__inst_3_4_1_tsni, splitAt_inst_3_4_1_2_tsni, init__inst_5_6_tsni, splitAt_inst_5_6_2_tsni, drop_nofit$_inst_7_8_tsni, init__inst_7_8_6_tsni, splitAt_inst_7_8_6_2_tsni, tail__inst_9_10_tsni, splitAt_inst_9_10_11_tsni, myAdd$_inst_12_13_tsni, tail__inst_12_13_10_tsni, splitAt_inst_12_13_10_11_tsni, lambda$_inst_16_17_tsni, map_inst_18_19_tsni, dropWhile_inst_20_21_tsni, break__inst_22_23_tsni, map_inst_24_25_tsni, lambda_inst_26_27_tsni, map_inst_26_27_19_tsni, formats_inst_28_29_tsni, lambda_inst_28_29_27_tsni, map_inst_28_29_27_19_tsni, splitAt_inst_30_31_tsni, splitAt_inst_32_11_tsni, splitAt_inst_33_2_tsni, lambda_inst_34_35_tsni, lambda$_inst_34_35_17_tsni, unformat_inst_36_37_tsni, lambda_inst_36_37_35_tsni, lambda$_inst_36_37_35_17_tsni, lambda_inst_38_39_tsni, lines_inst_40_41_tsni, break__inst_40_41_23_tsni, words_inst_40_42_tsni, dropWhile_inst_40_42_21_tsni, paras_inst_40_43_tsni, lambda_inst_40_43_39_tsni, unparas_inst_44_45_tsni, unformat_inst_44_45_37_tsni, lambda_inst_44_45_37_35_tsni, lambda$_inst_44_45_37_35_17_tsni, unlines_inst_44_46_tsni, map_inst_44_46_25_tsni, map_inst_44_47_tsni, unwords_inst_44_48_tsni, append_inst_44_48_49_tsni, go_inst_44_48_50_tsni, append_inst_44_48_50_51_tsni, parse_inst_52_53_tsni, paras_inst_52_53_43_tsni, lambda_inst_52_53_43_39_tsni, words_inst_52_53_42_tsni, dropWhile_inst_52_53_42_21_tsni, lines_inst_52_53_41_tsni, break__inst_52_53_41_23_tsni, filter_inst_52_53_43_54_tsni, unparse_inst_52_55_tsni, unlines_inst_52_55_46_tsni, map_inst_52_55_46_25_tsni, map_inst_52_55_47_tsni, unwords_inst_52_55_48_tsni, append_inst_52_55_48_49_tsni, go_inst_52_55_48_50_tsni, append_inst_52_55_48_50_51_tsni, unparas_inst_52_55_45_tsni, unformat_inst_52_55_45_37_tsni, lambda_inst_52_55_45_37_35_tsni, lambda$_inst_52_55_45_37_35_17_tsni, myAdd$_inst_56_57_tsni, tail__inst_56_57_10_tsni, splitAt_inst_56_57_10_11_tsni, drop_nofit$_inst_56_58_tsni, init__inst_56_58_6_tsni, splitAt_inst_56_58_6_2_tsni, trim$_inst_56_59_tsni, init__inst_56_59_1_tsni, splitAt_inst_56_59_1_2_tsni, stepr_inst_60_61_tsni, trim$_inst_60_61_59_tsni, init__inst_60_61_59_1_tsni, splitAt_inst_60_61_59_1_2_tsni, drop_nofit$_inst_60_61_58_tsni, init__inst_60_61_58_6_tsni, splitAt_inst_60_61_58_6_2_tsni, myAdd$_inst_60_61_57_tsni, tail__inst_60_61_57_10_tsni, splitAt_inst_60_61_57_10_11_tsni, tile_inst_60_62_tsni, splitAt_inst_60_62_31_tsni, parse_inst_63_64_tsni, paras_inst_63_64_43_tsni, lambda_inst_63_64_43_39_tsni, words_inst_63_64_42_tsni, dropWhile_inst_63_64_42_21_tsni, lines_inst_63_64_41_tsni, break__inst_63_64_41_23_tsni, filter_inst_63_64_43_54_tsni, par3_inst_63_65_tsni, tile_inst_63_65_62_tsni, splitAt_inst_63_65_62_31_tsni, stepr_inst_63_65_61_tsni, myAdd$_inst_63_65_61_57_tsni, tail__inst_63_65_61_57_10_tsni, splitAt_inst_63_65_61_57_10_11_tsni, drop_nofit$_inst_63_65_61_58_tsni, init__inst_63_65_61_58_6_tsni, splitAt_inst_63_65_61_58_6_2_tsni, trim$_inst_63_65_61_59_tsni, init__inst_63_65_61_59_1_tsni, splitAt_inst_63_65_61_59_1_2_tsni, concat_inst_63_66_tsni, append_inst_63_66_67_tsni, unparse_inst_63_68_tsni, unlines_inst_63_68_46_tsni, map_inst_63_68_46_25_tsni, map_inst_63_68_47_tsni, unwords_inst_63_68_48_tsni, append_inst_63_68_48_49_tsni, go_inst_63_68_48_50_tsni, append_inst_63_68_48_50_51_tsni, unparas_inst_63_68_45_tsni, unformat_inst_63_68_45_37_tsni, lambda_inst_63_68_45_37_35_tsni, lambda$_inst_63_68_45_37_35_17_tsni, fmt_inst_69_70_tsni, unparse_inst_69_70_68_tsni, unparas_inst_69_70_68_45_tsni, unformat_inst_69_70_68_45_37_tsni, lambda_inst_69_70_68_45_37_35_tsni, lambda$_inst_69_70_68_45_37_35_17_tsni, unlines_inst_69_70_68_46_tsni, map_inst_69_70_68_46_25_tsni, map_inst_69_70_68_47_tsni, unwords_inst_69_70_68_48_tsni, append_inst_69_70_68_48_49_tsni, go_inst_69_70_68_48_50_tsni, append_inst_69_70_68_48_50_51_tsni, par3_inst_69_70_65_tsni, stepr_inst_69_70_65_61_tsni, trim$_inst_69_70_65_61_59_tsni, init__inst_69_70_65_61_59_1_tsni, splitAt_inst_69_70_65_61_59_1_2_tsni, drop_nofit$_inst_69_70_65_61_58_tsni, init__inst_69_70_65_61_58_6_tsni, splitAt_inst_69_70_65_61_58_6_2_tsni, myAdd$_inst_69_70_65_61_57_tsni, tail__inst_69_70_65_61_57_10_tsni, splitAt_inst_69_70_65_61_57_10_11_tsni, tile_inst_69_70_65_62_tsni, splitAt_inst_69_70_65_62_31_tsni, concat_inst_69_70_66_tsni, append_inst_69_70_66_67_tsni, parse_inst_69_70_64_tsni, lines_inst_69_70_64_41_tsni, break__inst_69_70_64_41_23_tsni, words_inst_69_70_64_42_tsni, dropWhile_inst_69_70_64_42_21_tsni, paras_inst_69_70_64_43_tsni, lambda_inst_69_70_64_43_39_tsni, filter_inst_69_70_64_43_54_tsni, testPara_nofib_inst_71_72_tsni, fmt_inst_71_72_70_tsni, parse_inst_71_72_70_64_tsni, paras_inst_71_72_70_64_43_tsni, lambda_inst_71_72_70_64_43_39_tsni, words_inst_71_72_70_64_42_tsni, dropWhile_inst_71_72_70_64_42_21_tsni, lines_inst_71_72_70_64_41_tsni, break__inst_71_72_70_64_41_23_tsni, filter_inst_71_72_70_64_43_54_tsni, par3_inst_71_72_70_65_tsni, tile_inst_71_72_70_65_62_tsni, splitAt_inst_71_72_70_65_62_31_tsni, stepr_inst_71_72_70_65_61_tsni, myAdd$_inst_71_72_70_65_61_57_tsni, tail__inst_71_72_70_65_61_57_10_tsni, splitAt_inst_71_72_70_65_61_57_10_11_tsni, drop_nofit$_inst_71_72_70_65_61_58_tsni, init__inst_71_72_70_65_61_58_6_tsni, splitAt_inst_71_72_70_65_61_58_6_2_tsni, trim$_inst_71_72_70_65_61_59_tsni, init__inst_71_72_70_65_61_59_1_tsni, splitAt_inst_71_72_70_65_61_59_1_2_tsni, concat_inst_71_72_70_66_tsni, append_inst_71_72_70_66_67_tsni, unparse_inst_71_72_70_68_tsni, unlines_inst_71_72_70_68_46_tsni, map_inst_71_72_70_68_46_25_tsni, map_inst_71_72_70_68_47_tsni, unwords_inst_71_72_70_68_48_tsni, append_inst_71_72_70_68_48_49_tsni, go_inst_71_72_70_68_48_50_tsni, append_inst_71_72_70_68_48_50_51_tsni, unparas_inst_71_72_70_68_45_tsni, unformat_inst_71_72_70_68_45_37_tsni, lambda_inst_71_72_70_68_45_37_35_tsni, lambda$_inst_71_72_70_68_45_37_35_17_tsni, concat_inst_71_72_70_68_46_73_tsni, append_inst_71_72_70_68_46_73_67_tsni, listNeq_inst_14_74_tsni, append_inst_15_75_tsni, append_inst_16_17_75_tsni, append_inst_18_76_tsni, concat_inst_77_tsni, concat_inst_24_73_tsni, append_inst_26_27_76_tsni, append_inst_28_29_27_76_tsni, append_inst_34_35_17_75_tsni, append_inst_36_37_35_17_75_tsni, listNeq_inst_38_39_74_tsni, map_inst_40_78_tsni, listNeq_inst_40_43_39_74_tsni, append_inst_44_45_37_35_17_75_tsni, concat_inst_44_46_73_tsni, lambda_inst_44_46_79_tsni, append_inst_44_46_79_80_tsni, listNeq_inst_52_53_43_39_74_tsni, map_inst_52_53_78_tsni, map_inst_52_81_tsni, concat_inst_52_55_46_73_tsni, lambda_inst_52_55_46_79_tsni, append_inst_52_55_46_79_80_tsni, append_inst_52_55_45_37_35_17_75_tsni, listNeq_inst_63_64_43_39_74_tsni, map_inst_63_64_78_tsni, map_inst_63_82_tsni, concat_inst_63_68_46_73_tsni, lambda_inst_63_68_46_79_tsni, append_inst_63_68_46_79_80_tsni, append_inst_63_68_45_37_35_17_75_tsni, append_inst_69_70_68_45_37_35_17_75_tsni, concat_inst_69_70_68_46_73_tsni, lambda_inst_69_70_68_46_79_tsni, append_inst_69_70_68_46_79_80_tsni, map_inst_69_70_82_tsni, map_inst_69_70_64_78_tsni, listNeq_inst_69_70_64_43_39_74_tsni, listNeq_inst_71_72_70_64_43_39_74_tsni, map_inst_71_72_70_64_78_tsni, map_inst_71_72_70_82_tsni, lambda_inst_71_72_70_68_46_79_tsni, append_inst_71_72_70_68_46_79_80_tsni, append_inst_71_72_70_68_45_37_35_17_75_tsni, nofibListToString_inst_71_83_tsni, match_s__rest_inst_22_tsni, match_s__rest_inst_40_41_tsni, match_s__rest_inst_52_53_41_tsni, match_s__rest_inst_63_64_41_tsni, match_s__rest_inst_69_70_64_41_tsni, match_s__rest_inst_71_72_70_64_41_tsni, match_ls_arm_Cons_inst_77_tsni, match_xs_arm_Nil_inst_44_46_79_80_tsni, match_xs_arm_Cons_inst_44_46_79_80_tsni, match_xs_arm_Nil_inst_52_55_46_79_80_tsni, match_xs_arm_Cons_inst_52_55_46_79_80_tsni, match_xs_arm_Nil_inst_63_68_46_79_80_tsni, match_xs_arm_Cons_inst_63_68_46_79_80_tsni, match_xs_arm_Nil_inst_69_70_68_46_79_80_tsni, match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni, match_xs_arm_Nil_inst_71_72_70_68_46_79_80_tsni, match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni, match_ls_arm_Nil_inst_71_83_tsni;
match_s__rest_inst_22_tsni = function match_s__rest_inst_22_tsni(l, tmp) {
  return NofibPrelude.Cons(l, tmp)
};
match_s__rest_inst_40_41_tsni = function match_s__rest_inst_40_41_tsni(l, tmp) {
  let _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param0, param1, x, xs, tmp1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_40_78_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_s__rest_inst_52_53_41_tsni = function match_s__rest_inst_52_53_41_tsni(l, tmp) {
  let _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param0, param1, x, xs, tmp1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_52_53_78_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_s__rest_inst_63_64_41_tsni = function match_s__rest_inst_63_64_41_tsni(l, tmp) {
  let _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param0, param1, x, xs, tmp1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_63_64_78_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_s__rest_inst_69_70_64_41_tsni = function match_s__rest_inst_69_70_64_41_tsni(l, tmp) {
  let _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param0, param1, x, xs, tmp1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_69_70_64_78_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_s__rest_inst_71_72_70_64_41_tsni = function match_s__rest_inst_71_72_70_64_41_tsni(l, tmp) {
  let _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param0, param1, x, xs, tmp1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_71_72_70_64_78_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_ls_arm_Cons_inst_77_tsni = function match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head_inst_77_tsni, _deforest_Cons_tail_inst_77_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_77_tsni;
  param1 = _deforest_Cons_tail_inst_77_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_77_tsni(xs);
  return NofibPrelude.append(x, tmp)
};
match_xs_arm_Nil_inst_44_46_79_80_tsni = function match_xs_arm_Nil_inst_44_46_79_80_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_44_46_79_80_tsni = function match_xs_arm_Cons_inst_44_46_79_80_tsni(ys, _deforest_Cons_head_inst_44_46_79_80_tsni, _deforest_Cons_tail_inst_44_46_79_80_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_44_46_79_80_tsni;
  param1 = _deforest_Cons_tail_inst_44_46_79_80_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_44_46_79_80_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_52_55_46_79_80_tsni = function match_xs_arm_Nil_inst_52_55_46_79_80_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_52_55_46_79_80_tsni = function match_xs_arm_Cons_inst_52_55_46_79_80_tsni(ys, _deforest_Cons_head_inst_52_55_46_79_80_tsni, _deforest_Cons_tail_inst_52_55_46_79_80_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_52_55_46_79_80_tsni;
  param1 = _deforest_Cons_tail_inst_52_55_46_79_80_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_52_55_46_79_80_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_63_68_46_79_80_tsni = function match_xs_arm_Nil_inst_63_68_46_79_80_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_63_68_46_79_80_tsni = function match_xs_arm_Cons_inst_63_68_46_79_80_tsni(ys, _deforest_Cons_head_inst_63_68_46_79_80_tsni, _deforest_Cons_tail_inst_63_68_46_79_80_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_63_68_46_79_80_tsni;
  param1 = _deforest_Cons_tail_inst_63_68_46_79_80_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_63_68_46_79_80_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_69_70_68_46_79_80_tsni = function match_xs_arm_Nil_inst_69_70_68_46_79_80_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni = function match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni(ys, _deforest_Cons_head_inst_69_70_68_46_79_80_tsni, _deforest_Cons_tail_inst_69_70_68_46_79_80_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_69_70_68_46_79_80_tsni;
  param1 = _deforest_Cons_tail_inst_69_70_68_46_79_80_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_69_70_68_46_79_80_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_71_72_70_68_46_79_80_tsni = function match_xs_arm_Nil_inst_71_72_70_68_46_79_80_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni = function match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni(ys, _deforest_Cons_head_inst_71_72_70_68_46_79_80_tsni, _deforest_Cons_tail_inst_71_72_70_68_46_79_80_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_71_72_70_68_46_79_80_tsni;
  param1 = _deforest_Cons_tail_inst_71_72_70_68_46_79_80_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_71_72_70_68_46_79_80_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Nil_inst_71_83_tsni = function match_ls_arm_Nil_inst_71_83_tsni() {
  return ""
};
init__inst_0_1_tsni = function init__inst_0_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_0_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_0_1_2_tsni = function splitAt_inst_0_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
trim$_inst_3_4_tsni = function trim$_inst_3_4_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_3_4_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_3_4_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_3_4_1_tsni = function init__inst_3_4_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_3_4_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_3_4_1_2_tsni = function splitAt_inst_3_4_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
init__inst_5_6_tsni = function init__inst_5_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_5_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_5_6_2_tsni = function splitAt_inst_5_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_7_8_tsni = function drop_nofit$_inst_7_8_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_7_8_6_tsni(ps_p);
      return drop_nofit$_inst_7_8_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_7_8_6_tsni = function init__inst_7_8_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_7_8_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_7_8_6_2_tsni = function splitAt_inst_7_8_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
tail__inst_9_10_tsni = function tail__inst_9_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_9_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_9_10_11_tsni = function splitAt_inst_9_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
myAdd$_inst_12_13_tsni = function myAdd$_inst_12_13_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_12_13_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_12_13_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_12_13_10_tsni = function tail__inst_12_13_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_12_13_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_12_13_10_11_tsni = function splitAt_inst_12_13_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
lambda$_inst_16_17_tsni = function lambda$_inst_16_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_16_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_16_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
map_inst_18_19_tsni = function map_inst_18_19_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_18_19_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_18_76_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
dropWhile_inst_20_21_tsni = function dropWhile_inst_20_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_20_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = para.words(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_22_23_tsni = function break__inst_22_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_22_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = para.lines(s__);
        return match_s__rest_inst_22_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_22_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_24_25_tsni = function map_inst_24_25_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_25_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_24_73_tsni(xs2);
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
lambda_inst_26_27_tsni = (undefined, function (w, ps) {
  let tmp, tmp1, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda9(w));
  tmp = map_inst_26_27_19_tsni(lambda$this, ps);
  lambda$this1 = runtime.safeCall(lambda10(w));
  tmp1 = NofibPrelude.map(lambda$this1, ps);
  return append_inst_26_27_76_tsni(tmp, tmp1)
});
map_inst_26_27_19_tsni = function map_inst_26_27_19_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_19_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_26_27_76_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
formats_inst_28_29_tsni = function formats_inst_28_29_tsni(txt) {
  let tmp, tmp1;
  tmp = lambda_inst_28_29_27_tsni;
  tmp1 = lambda11;
  return para.fold1(tmp, tmp1, txt)
};
lambda_inst_28_29_27_tsni = (undefined, function (w, ps) {
  let tmp, tmp1, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda9(w));
  tmp = map_inst_28_29_27_19_tsni(lambda$this, ps);
  lambda$this1 = runtime.safeCall(lambda10(w));
  tmp1 = NofibPrelude.map(lambda$this1, ps);
  return append_inst_28_29_27_76_tsni(tmp, tmp1)
});
map_inst_28_29_27_19_tsni = function map_inst_28_29_27_19_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_29_27_19_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_28_29_27_76_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_30_31_tsni = function splitAt_inst_30_31_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (m, ms, l) => {
    let first1, first0, ws1, ws2, tmp2, tmp3, arr1, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    ws1 = first0;
    ws2 = first1;
    tmp2 = NofibPrelude.Cons(m, ms);
    tmp3 = NofibPrelude.drop(l, tmp2);
    arr1 = [
      tmp3,
      m
    ];
    tmp4 = para.tile(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
splitAt_inst_32_11_tsni = function splitAt_inst_32_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
splitAt_inst_33_2_tsni = function splitAt_inst_33_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
lambda_inst_34_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_34_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_34_35_17_tsni = function lambda$_inst_34_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_34_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_34_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
unformat_inst_36_37_tsni = function unformat_inst_36_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_36_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_36_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_36_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_36_37_35_17_tsni = function lambda$_inst_36_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_36_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_36_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
lambda_inst_38_39_tsni = (undefined, function (x) {
  return listNeq_inst_38_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
lines_inst_40_41_tsni = function lines_inst_40_41_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_40_41_23_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_40_41_23_tsni = function break__inst_40_41_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_40_41_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_40_41_tsni(s__);
        return match_s__rest_inst_40_41_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_40_41_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
words_inst_40_42_tsni = function words_inst_40_42_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_40_42_21_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_40_42_21_tsni = function dropWhile_inst_40_42_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_40_42_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_40_42_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
paras_inst_40_43_tsni = function paras_inst_40_43_tsni(ls) {
  let tmp;
  tmp = para.format(NofibPrelude.Nil, ls);
  return NofibPrelude.filter(lambda_inst_40_43_39_tsni, tmp)
};
lambda_inst_40_43_39_tsni = (undefined, function (x) {
  return listNeq_inst_40_43_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
unparas_inst_44_45_tsni = function unparas_inst_44_45_tsni(ls) {
  return unformat_inst_44_45_37_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_44_45_37_tsni = function unformat_inst_44_45_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_44_45_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_44_45_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_44_45_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_44_45_37_35_17_tsni = function lambda$_inst_44_45_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_44_45_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_44_45_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
unlines_inst_44_46_tsni = function unlines_inst_44_46_tsni(ls) {
  let tmp;
  tmp = map_inst_44_46_25_tsni(lambda_inst_44_46_79_tsni, ls);
  return concat_inst_44_46_73_tsni(tmp)
};
map_inst_44_46_25_tsni = function map_inst_44_46_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_44_47_tsni = function map_inst_44_47_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_47_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_44_46_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_44_46_73_tsni(xs2);
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
unwords_inst_44_48_tsni = function unwords_inst_44_48_tsni(ws) {
  let param0, param1, w, ws1, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_44_46_79_80_tsni(ys)
    }
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go_inst_44_48_50_tsni(ws1);
    return append_inst_44_48_49_tsni(w, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_44_48_49_tsni = function append_inst_44_48_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_44_48_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_44_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
go_inst_44_48_50_tsni = function go_inst_44_48_50_tsni(vs) {
  let param0, param1, v, vs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (vs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_44_46_79_80_tsni(ys)
    }
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go_inst_44_48_50_tsni(vs1);
    tmp1 = append_inst_44_48_50_51_tsni(v, tmp);
    _deforest_Cons_head = " ";
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_44_46_79_80_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_44_48_50_51_tsni = function append_inst_44_48_50_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_44_48_50_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_44_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
parse_inst_52_53_tsni = function parse_inst_52_53_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_52_53_41_tsni(ls);
  tmp1 = map_inst_52_53_78_tsni(words_inst_52_53_42_tsni, tmp);
  return paras_inst_52_53_43_tsni(tmp1)
};
paras_inst_52_53_43_tsni = function paras_inst_52_53_43_tsni(ls) {
  let tmp;
  tmp = para.format(NofibPrelude.Nil, ls);
  return filter_inst_52_53_43_54_tsni(lambda_inst_52_53_43_39_tsni, tmp)
};
lambda_inst_52_53_43_39_tsni = (undefined, function (x) {
  return listNeq_inst_52_53_43_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
words_inst_52_53_42_tsni = function words_inst_52_53_42_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_52_53_42_21_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_52_53_42_21_tsni = function dropWhile_inst_52_53_42_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_52_53_42_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_52_53_42_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_52_53_41_tsni = function lines_inst_52_53_41_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_52_53_41_23_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_52_53_41_23_tsni = function break__inst_52_53_41_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_52_53_41_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_52_53_41_tsni(s__);
        return match_s__rest_inst_52_53_41_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_52_53_41_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_52_53_43_54_tsni = function filter_inst_52_53_43_54_tsni(f, ls) {
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
      tmp = filter_inst_52_53_43_54_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_52_81_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_52_53_43_54_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparse_inst_52_55_tsni = function unparse_inst_52_55_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_52_55_45_tsni(ls);
  tmp1 = map_inst_52_55_47_tsni(unwords_inst_52_55_48_tsni, tmp);
  return unlines_inst_52_55_46_tsni(tmp1)
};
unlines_inst_52_55_46_tsni = function unlines_inst_52_55_46_tsni(ls) {
  let tmp;
  tmp = map_inst_52_55_46_25_tsni(lambda_inst_52_55_46_79_tsni, ls);
  return concat_inst_52_55_46_73_tsni(tmp)
};
map_inst_52_55_46_25_tsni = function map_inst_52_55_46_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_52_55_47_tsni = function map_inst_52_55_47_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_52_55_47_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_52_55_46_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_52_55_46_73_tsni(xs2);
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
unwords_inst_52_55_48_tsni = function unwords_inst_52_55_48_tsni(ws) {
  let param0, param1, w, ws1, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_52_55_46_79_80_tsni(ys)
    }
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go_inst_52_55_48_50_tsni(ws1);
    return append_inst_52_55_48_49_tsni(w, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_52_55_48_49_tsni = function append_inst_52_55_48_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_52_55_48_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_52_55_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
go_inst_52_55_48_50_tsni = function go_inst_52_55_48_50_tsni(vs) {
  let param0, param1, v, vs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (vs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_52_55_46_79_80_tsni(ys)
    }
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go_inst_52_55_48_50_tsni(vs1);
    tmp1 = append_inst_52_55_48_50_51_tsni(v, tmp);
    _deforest_Cons_head = " ";
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_52_55_46_79_80_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_52_55_48_50_51_tsni = function append_inst_52_55_48_50_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_52_55_48_50_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_52_55_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparas_inst_52_55_45_tsni = function unparas_inst_52_55_45_tsni(ls) {
  return unformat_inst_52_55_45_37_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_52_55_45_37_tsni = function unformat_inst_52_55_45_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_52_55_45_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_52_55_45_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_52_55_45_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_52_55_45_37_35_17_tsni = function lambda$_inst_52_55_45_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_52_55_45_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_52_55_45_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
myAdd$_inst_56_57_tsni = function myAdd$_inst_56_57_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_56_57_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_56_57_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_56_57_10_tsni = function tail__inst_56_57_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_56_57_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_56_57_10_11_tsni = function splitAt_inst_56_57_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_56_58_tsni = function drop_nofit$_inst_56_58_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_56_58_6_tsni(ps_p);
      return drop_nofit$_inst_56_58_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_56_58_6_tsni = function init__inst_56_58_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_56_58_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_56_58_6_2_tsni = function splitAt_inst_56_58_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
trim$_inst_56_59_tsni = function trim$_inst_56_59_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_56_59_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_56_59_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_56_59_1_tsni = function init__inst_56_59_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_56_59_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_56_59_1_2_tsni = function splitAt_inst_56_59_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
stepr_inst_60_61_tsni = function stepr_inst_60_61_tsni(w, ps_tw_tl) {
  let first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_$(tw, tl, tmp3);
    tmp5 = myAdd$_inst_60_61_57_tsni(tot_width, tmp4, ps);
    tmp6 = drop_nofit$_inst_60_61_58_tsni(tot_width, tmp5);
    tmp7 = trim$_inst_60_61_59_tsni(tot_width, tmp6);
    arr = [
      tmp7,
      tot_width,
      tot_len
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
trim$_inst_60_61_59_tsni = function trim$_inst_60_61_59_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_60_61_59_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_60_61_59_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_60_61_59_1_tsni = function init__inst_60_61_59_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_60_61_59_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_60_61_59_1_2_tsni = function splitAt_inst_60_61_59_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_60_61_58_tsni = function drop_nofit$_inst_60_61_58_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_60_61_58_6_tsni(ps_p);
      return drop_nofit$_inst_60_61_58_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_60_61_58_6_tsni = function init__inst_60_61_58_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_60_61_58_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_60_61_58_6_2_tsni = function splitAt_inst_60_61_58_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
myAdd$_inst_60_61_57_tsni = function myAdd$_inst_60_61_57_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_60_61_57_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_60_61_57_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_60_61_57_10_tsni = function tail__inst_60_61_57_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_60_61_57_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_60_61_57_10_11_tsni = function splitAt_inst_60_61_57_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
tile_inst_60_62_tsni = function tile_inst_60_62_tsni(ws, a_b) {
  let first1, first0, param0, param1, m, ms, n, l, scrut, n1, tmp;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    if (first0 instanceof NofibPrelude.Nil.class) {
      n1 = first1;
      return NofibPrelude.Nil
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      m = param0;
      ms = param1;
      n = first1;
      tmp = n - m;
      l = tmp;
      scrut = splitAt_inst_60_62_31_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_60_62_31_tsni = function splitAt_inst_60_62_31_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (m, ms, l) => {
    let first1, first0, ws1, ws2, tmp2, tmp3, arr1, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    ws1 = first0;
    ws2 = first1;
    tmp2 = NofibPrelude.Cons(m, ms);
    tmp3 = NofibPrelude.drop(l, tmp2);
    arr1 = [
      tmp3,
      m
    ];
    tmp4 = tile_inst_60_62_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
parse_inst_63_64_tsni = function parse_inst_63_64_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_63_64_41_tsni(ls);
  tmp1 = map_inst_63_64_78_tsni(words_inst_63_64_42_tsni, tmp);
  return paras_inst_63_64_43_tsni(tmp1)
};
paras_inst_63_64_43_tsni = function paras_inst_63_64_43_tsni(ls) {
  let tmp;
  tmp = para.format(NofibPrelude.Nil, ls);
  return filter_inst_63_64_43_54_tsni(lambda_inst_63_64_43_39_tsni, tmp)
};
lambda_inst_63_64_43_39_tsni = (undefined, function (x) {
  return listNeq_inst_63_64_43_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
words_inst_63_64_42_tsni = function words_inst_63_64_42_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_63_64_42_21_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_63_64_42_21_tsni = function dropWhile_inst_63_64_42_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_63_64_42_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_63_64_42_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_63_64_41_tsni = function lines_inst_63_64_41_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_63_64_41_23_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_63_64_41_23_tsni = function break__inst_63_64_41_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_63_64_41_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_63_64_41_tsni(s__);
        return match_s__rest_inst_63_64_41_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_63_64_41_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_63_64_43_54_tsni = function filter_inst_63_64_43_54_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_63_64_43_54_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_63_66_tsni(xs);
        return append_inst_63_66_67_tsni(x, tmp1)
      }
    } else {
      return filter_inst_63_64_43_54_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
par3_inst_63_65_tsni = function par3_inst_63_65_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_63_65_61_tsni, para.startr, tmp);
  zs = tmp1;
  tmp2 = lambda19;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_63_65_62_tsni(ws, arr)
};
tile_inst_63_65_62_tsni = function tile_inst_63_65_62_tsni(ws, a_b) {
  let first1, first0, param0, param1, m, ms, n, l, scrut, n1, tmp;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    if (first0 instanceof NofibPrelude.Nil.class) {
      n1 = first1;
      return NofibPrelude.Nil
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      m = param0;
      ms = param1;
      n = first1;
      tmp = n - m;
      l = tmp;
      scrut = splitAt_inst_63_65_62_31_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_63_65_62_31_tsni = function splitAt_inst_63_65_62_31_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (m, ms, l) => {
    let first1, first0, ws1, ws2, tmp2, tmp3, arr1, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    ws1 = first0;
    ws2 = first1;
    tmp2 = NofibPrelude.Cons(m, ms);
    tmp3 = NofibPrelude.drop(l, tmp2);
    arr1 = [
      tmp3,
      m
    ];
    tmp4 = tile_inst_63_65_62_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
stepr_inst_63_65_61_tsni = function stepr_inst_63_65_61_tsni(w, ps_tw_tl) {
  let first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_$(tw, tl, tmp3);
    tmp5 = myAdd$_inst_63_65_61_57_tsni(tot_width, tmp4, ps);
    tmp6 = drop_nofit$_inst_63_65_61_58_tsni(tot_width, tmp5);
    tmp7 = trim$_inst_63_65_61_59_tsni(tot_width, tmp6);
    arr = [
      tmp7,
      tot_width,
      tot_len
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
myAdd$_inst_63_65_61_57_tsni = function myAdd$_inst_63_65_61_57_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_63_65_61_57_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_63_65_61_57_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_63_65_61_57_10_tsni = function tail__inst_63_65_61_57_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_63_65_61_57_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_63_65_61_57_10_11_tsni = function splitAt_inst_63_65_61_57_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_63_65_61_58_tsni = function drop_nofit$_inst_63_65_61_58_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_63_65_61_58_6_tsni(ps_p);
      return drop_nofit$_inst_63_65_61_58_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_63_65_61_58_6_tsni = function init__inst_63_65_61_58_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_63_65_61_58_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_63_65_61_58_6_2_tsni = function splitAt_inst_63_65_61_58_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
trim$_inst_63_65_61_59_tsni = function trim$_inst_63_65_61_59_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_63_65_61_59_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_63_65_61_59_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_63_65_61_59_1_tsni = function init__inst_63_65_61_59_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_63_65_61_59_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_63_65_61_59_1_2_tsni = function splitAt_inst_63_65_61_59_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
concat_inst_63_66_tsni = function concat_inst_63_66_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_63_66_67_tsni = function append_inst_63_66_67_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_66_67_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_63_82_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparse_inst_63_68_tsni = function unparse_inst_63_68_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_63_68_45_tsni(ls);
  tmp1 = map_inst_63_68_47_tsni(unwords_inst_63_68_48_tsni, tmp);
  return unlines_inst_63_68_46_tsni(tmp1)
};
unlines_inst_63_68_46_tsni = function unlines_inst_63_68_46_tsni(ls) {
  let tmp;
  tmp = map_inst_63_68_46_25_tsni(lambda_inst_63_68_46_79_tsni, ls);
  return concat_inst_63_68_46_73_tsni(tmp)
};
map_inst_63_68_46_25_tsni = function map_inst_63_68_46_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_63_68_47_tsni = function map_inst_63_68_47_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_63_68_47_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_63_68_46_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_63_68_46_73_tsni(xs2);
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
unwords_inst_63_68_48_tsni = function unwords_inst_63_68_48_tsni(ws) {
  let param0, param1, w, ws1, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_63_68_46_79_80_tsni(ys)
    }
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go_inst_63_68_48_50_tsni(ws1);
    return append_inst_63_68_48_49_tsni(w, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_63_68_48_49_tsni = function append_inst_63_68_48_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_48_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
go_inst_63_68_48_50_tsni = function go_inst_63_68_48_50_tsni(vs) {
  let param0, param1, v, vs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (vs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_63_68_46_79_80_tsni(ys)
    }
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go_inst_63_68_48_50_tsni(vs1);
    tmp1 = append_inst_63_68_48_50_51_tsni(v, tmp);
    _deforest_Cons_head = " ";
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_63_68_46_79_80_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_63_68_48_50_51_tsni = function append_inst_63_68_48_50_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_48_50_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparas_inst_63_68_45_tsni = function unparas_inst_63_68_45_tsni(ls) {
  return unformat_inst_63_68_45_37_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_63_68_45_37_tsni = function unformat_inst_63_68_45_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_63_68_45_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_63_68_45_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_63_68_45_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_63_68_45_37_35_17_tsni = function lambda$_inst_63_68_45_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_63_68_45_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_63_68_45_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
fmt_inst_69_70_tsni = function fmt_inst_69_70_tsni(x) {
  let tmp, tmp1, tmp2;
  tmp = parse_inst_69_70_64_tsni(x);
  tmp1 = concat_inst_69_70_66_tsni(tmp);
  tmp2 = map_inst_69_70_82_tsni(par3_inst_69_70_65_tsni, tmp1);
  return unparse_inst_69_70_68_tsni(tmp2)
};
unparse_inst_69_70_68_tsni = function unparse_inst_69_70_68_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_69_70_68_45_tsni(ls);
  tmp1 = map_inst_69_70_68_47_tsni(unwords_inst_69_70_68_48_tsni, tmp);
  return unlines_inst_69_70_68_46_tsni(tmp1)
};
unparas_inst_69_70_68_45_tsni = function unparas_inst_69_70_68_45_tsni(ls) {
  return unformat_inst_69_70_68_45_37_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_69_70_68_45_37_tsni = function unformat_inst_69_70_68_45_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_69_70_68_45_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_69_70_68_45_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_69_70_68_45_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_69_70_68_45_37_35_17_tsni = function lambda$_inst_69_70_68_45_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_69_70_68_45_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_69_70_68_45_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
unlines_inst_69_70_68_46_tsni = function unlines_inst_69_70_68_46_tsni(ls) {
  let tmp;
  tmp = map_inst_69_70_68_46_25_tsni(lambda_inst_69_70_68_46_79_tsni, ls);
  return concat_inst_69_70_68_46_73_tsni(tmp)
};
map_inst_69_70_68_46_25_tsni = function map_inst_69_70_68_46_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_69_70_68_47_tsni = function map_inst_69_70_68_47_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_69_70_68_47_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_69_70_68_46_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_69_70_68_46_73_tsni(xs2);
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
unwords_inst_69_70_68_48_tsni = function unwords_inst_69_70_68_48_tsni(ws) {
  let param0, param1, w, ws1, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_69_70_68_46_79_80_tsni(ys)
    }
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go_inst_69_70_68_48_50_tsni(ws1);
    return append_inst_69_70_68_48_49_tsni(w, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_69_70_68_48_49_tsni = function append_inst_69_70_68_48_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_69_70_68_48_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
go_inst_69_70_68_48_50_tsni = function go_inst_69_70_68_48_50_tsni(vs) {
  let param0, param1, v, vs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (vs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_69_70_68_46_79_80_tsni(ys)
    }
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go_inst_69_70_68_48_50_tsni(vs1);
    tmp1 = append_inst_69_70_68_48_50_51_tsni(v, tmp);
    _deforest_Cons_head = " ";
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_69_70_68_48_50_51_tsni = function append_inst_69_70_68_48_50_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_69_70_68_48_50_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_69_70_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
par3_inst_69_70_65_tsni = function par3_inst_69_70_65_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_69_70_65_61_tsni, para.startr, tmp);
  zs = tmp1;
  tmp2 = lambda19;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_69_70_65_62_tsni(ws, arr)
};
stepr_inst_69_70_65_61_tsni = function stepr_inst_69_70_65_61_tsni(w, ps_tw_tl) {
  let first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_$(tw, tl, tmp3);
    tmp5 = myAdd$_inst_69_70_65_61_57_tsni(tot_width, tmp4, ps);
    tmp6 = drop_nofit$_inst_69_70_65_61_58_tsni(tot_width, tmp5);
    tmp7 = trim$_inst_69_70_65_61_59_tsni(tot_width, tmp6);
    arr = [
      tmp7,
      tot_width,
      tot_len
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
trim$_inst_69_70_65_61_59_tsni = function trim$_inst_69_70_65_61_59_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_69_70_65_61_59_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_69_70_65_61_59_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_69_70_65_61_59_1_tsni = function init__inst_69_70_65_61_59_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_69_70_65_61_59_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_69_70_65_61_59_1_2_tsni = function splitAt_inst_69_70_65_61_59_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_69_70_65_61_58_tsni = function drop_nofit$_inst_69_70_65_61_58_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_69_70_65_61_58_6_tsni(ps_p);
      return drop_nofit$_inst_69_70_65_61_58_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_69_70_65_61_58_6_tsni = function init__inst_69_70_65_61_58_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_69_70_65_61_58_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_69_70_65_61_58_6_2_tsni = function splitAt_inst_69_70_65_61_58_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
myAdd$_inst_69_70_65_61_57_tsni = function myAdd$_inst_69_70_65_61_57_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_69_70_65_61_57_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_69_70_65_61_57_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_69_70_65_61_57_10_tsni = function tail__inst_69_70_65_61_57_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_69_70_65_61_57_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_69_70_65_61_57_10_11_tsni = function splitAt_inst_69_70_65_61_57_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
tile_inst_69_70_65_62_tsni = function tile_inst_69_70_65_62_tsni(ws, a_b) {
  let first1, first0, param0, param1, m, ms, n, l, scrut, n1, tmp;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    if (first0 instanceof NofibPrelude.Nil.class) {
      n1 = first1;
      return NofibPrelude.Nil
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      m = param0;
      ms = param1;
      n = first1;
      tmp = n - m;
      l = tmp;
      scrut = splitAt_inst_69_70_65_62_31_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_69_70_65_62_31_tsni = function splitAt_inst_69_70_65_62_31_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (m, ms, l) => {
    let first1, first0, ws1, ws2, tmp2, tmp3, arr1, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    ws1 = first0;
    ws2 = first1;
    tmp2 = NofibPrelude.Cons(m, ms);
    tmp3 = NofibPrelude.drop(l, tmp2);
    arr1 = [
      tmp3,
      m
    ];
    tmp4 = tile_inst_69_70_65_62_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
concat_inst_69_70_66_tsni = function concat_inst_69_70_66_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_69_70_66_67_tsni = function append_inst_69_70_66_67_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_69_70_66_67_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_69_70_82_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
parse_inst_69_70_64_tsni = function parse_inst_69_70_64_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_69_70_64_41_tsni(ls);
  tmp1 = map_inst_69_70_64_78_tsni(words_inst_69_70_64_42_tsni, tmp);
  return paras_inst_69_70_64_43_tsni(tmp1)
};
lines_inst_69_70_64_41_tsni = function lines_inst_69_70_64_41_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_69_70_64_41_23_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_69_70_64_41_23_tsni = function break__inst_69_70_64_41_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_69_70_64_41_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_69_70_64_41_tsni(s__);
        return match_s__rest_inst_69_70_64_41_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_69_70_64_41_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
words_inst_69_70_64_42_tsni = function words_inst_69_70_64_42_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_69_70_64_42_21_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_69_70_64_42_21_tsni = function dropWhile_inst_69_70_64_42_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_69_70_64_42_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_69_70_64_42_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
paras_inst_69_70_64_43_tsni = function paras_inst_69_70_64_43_tsni(ls) {
  let tmp;
  tmp = para.format(NofibPrelude.Nil, ls);
  return filter_inst_69_70_64_43_54_tsni(lambda_inst_69_70_64_43_39_tsni, tmp)
};
lambda_inst_69_70_64_43_39_tsni = (undefined, function (x) {
  return listNeq_inst_69_70_64_43_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
filter_inst_69_70_64_43_54_tsni = function filter_inst_69_70_64_43_54_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_69_70_64_43_54_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_69_70_66_tsni(xs);
        return append_inst_69_70_66_67_tsni(x, tmp1)
      }
    } else {
      return filter_inst_69_70_64_43_54_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testPara_nofib_inst_71_72_tsni = function testPara_nofib_inst_71_72_tsni() {
  let scrut;
  scrut = NofibPrelude.null_(para.test);
  if (scrut === true) {
    return () => {
      return match_ls_arm_Nil_inst_71_83_tsni()
    }
  } else {
    return fmt_inst_71_72_70_tsni(para.test)
  }
};
fmt_inst_71_72_70_tsni = function fmt_inst_71_72_70_tsni(x) {
  let tmp, tmp1, tmp2;
  tmp = parse_inst_71_72_70_64_tsni(x);
  tmp1 = concat_inst_71_72_70_66_tsni(tmp);
  tmp2 = map_inst_71_72_70_82_tsni(par3_inst_71_72_70_65_tsni, tmp1);
  return unparse_inst_71_72_70_68_tsni(tmp2)
};
parse_inst_71_72_70_64_tsni = function parse_inst_71_72_70_64_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_71_72_70_64_41_tsni(ls);
  tmp1 = map_inst_71_72_70_64_78_tsni(words_inst_71_72_70_64_42_tsni, tmp);
  return paras_inst_71_72_70_64_43_tsni(tmp1)
};
paras_inst_71_72_70_64_43_tsni = function paras_inst_71_72_70_64_43_tsni(ls) {
  let tmp;
  tmp = para.format(NofibPrelude.Nil, ls);
  return filter_inst_71_72_70_64_43_54_tsni(lambda_inst_71_72_70_64_43_39_tsni, tmp)
};
lambda_inst_71_72_70_64_43_39_tsni = (undefined, function (x) {
  return listNeq_inst_71_72_70_64_43_39_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
words_inst_71_72_70_64_42_tsni = function words_inst_71_72_70_64_42_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_71_72_70_64_42_21_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_71_72_70_64_42_21_tsni = function dropWhile_inst_71_72_70_64_42_21_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_71_72_70_64_42_21_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = NofibPrelude.Cons(h1, t1);
        scrut1 = para.break_(para.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_71_72_70_64_42_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_71_72_70_64_41_tsni = function lines_inst_71_72_70_64_41_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_71_72_70_64_41_23_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_71_72_70_64_41_23_tsni = function break__inst_71_72_70_64_41_23_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_71_72_70_64_41_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs1;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_71_72_70_64_41_tsni(s__);
        return match_s__rest_inst_71_72_70_64_41_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_71_72_70_64_41_23_tsni(p, xs1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_71_72_70_64_43_54_tsni = function filter_inst_71_72_70_64_43_54_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_71_72_70_64_43_54_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_71_72_70_66_tsni(xs);
        return append_inst_71_72_70_66_67_tsni(x, tmp1)
      }
    } else {
      return filter_inst_71_72_70_64_43_54_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
par3_inst_71_72_70_65_tsni = function par3_inst_71_72_70_65_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_71_72_70_65_61_tsni, para.startr, tmp);
  zs = tmp1;
  tmp2 = lambda19;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_71_72_70_65_62_tsni(ws, arr)
};
tile_inst_71_72_70_65_62_tsni = function tile_inst_71_72_70_65_62_tsni(ws, a_b) {
  let first1, first0, param0, param1, m, ms, n, l, scrut, n1, tmp;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    if (first0 instanceof NofibPrelude.Nil.class) {
      n1 = first1;
      return NofibPrelude.Nil
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      m = param0;
      ms = param1;
      n = first1;
      tmp = n - m;
      l = tmp;
      scrut = splitAt_inst_71_72_70_65_62_31_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_71_72_70_65_62_31_tsni = function splitAt_inst_71_72_70_65_62_31_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (m, ms, l) => {
    let first1, first0, ws1, ws2, tmp2, tmp3, arr1, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    ws1 = first0;
    ws2 = first1;
    tmp2 = NofibPrelude.Cons(m, ms);
    tmp3 = NofibPrelude.drop(l, tmp2);
    arr1 = [
      tmp3,
      m
    ];
    tmp4 = tile_inst_71_72_70_65_62_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
stepr_inst_71_72_70_65_61_tsni = function stepr_inst_71_72_70_65_61_tsni(w, ps_tw_tl) {
  let first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_$(tw, tl, tmp3);
    tmp5 = myAdd$_inst_71_72_70_65_61_57_tsni(tot_width, tmp4, ps);
    tmp6 = drop_nofit$_inst_71_72_70_65_61_58_tsni(tot_width, tmp5);
    tmp7 = trim$_inst_71_72_70_65_61_59_tsni(tot_width, tmp6);
    arr = [
      tmp7,
      tot_width,
      tot_len
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
myAdd$_inst_71_72_70_65_61_57_tsni = function myAdd$_inst_71_72_70_65_61_57_tsni(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_71_72_70_65_61_57_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$_inst_71_72_70_65_61_57_tsni(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
tail__inst_71_72_70_65_61_57_10_tsni = function tail__inst_71_72_70_65_61_57_10_tsni(a_b) {
  let first1, first0, x, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    x = first0;
    y = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_71_72_70_65_61_57_10_11_tsni(tmp1, y);
        return runtime.safeCall(scrut1(x, y))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          tmp2,
          y
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_71_72_70_65_61_57_10_11_tsni = function splitAt_inst_71_72_70_65_61_57_10_11_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (x, y) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      tmp2,
      y0
    ];
    return arr1
  };
  return arr
};
drop_nofit$_inst_71_72_70_65_61_58_tsni = function drop_nofit$_inst_71_72_70_65_61_58_tsni(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_71_72_70_65_61_58_6_tsni(ps_p);
      return drop_nofit$_inst_71_72_70_65_61_58_tsni(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
init__inst_71_72_70_65_61_58_6_tsni = function init__inst_71_72_70_65_61_58_6_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_71_72_70_65_61_58_6_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_71_72_70_65_61_58_6_2_tsni = function splitAt_inst_71_72_70_65_61_58_6_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
trim$_inst_71_72_70_65_61_59_tsni = function trim$_inst_71_72_70_65_61_59_tsni(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_71_72_70_65_61_59_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$_inst_71_72_70_65_61_59_tsni(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
init__inst_71_72_70_65_61_59_1_tsni = function init__inst_71_72_70_65_61_59_1_tsni(a_b) {
  let first1, first0, y, x, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
  if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
    first0 = a_b[0];
    first1 = a_b[1];
    y = first0;
    x = first1;
    scrut2 = NofibPrelude.null_(x);
    if (scrut2 === true) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else {
      scrut = para.single(x);
      if (scrut === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut1 = splitAt_inst_71_72_70_65_61_59_1_2_tsni(tmp1, y);
        return runtime.safeCall(scrut1(y, x))
      } else {
        tmp2 = NofibPrelude.tail(x);
        arr1 = [
          y,
          tmp2
        ];
        return arr1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_71_72_70_65_61_59_1_2_tsni = function splitAt_inst_71_72_70_65_61_59_1_2_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take(n, ls);
  tmp1 = NofibPrelude.drop(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (y, x) => {
    let first1, first0, y0, y1, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y0 = first0;
    y1 = first1;
    tmp2 = NofibPrelude.reverse(y1);
    arr1 = [
      y0,
      tmp2
    ];
    return arr1
  };
  return arr
};
concat_inst_71_72_70_66_tsni = function concat_inst_71_72_70_66_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_71_72_70_66_67_tsni = function append_inst_71_72_70_66_67_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_71_72_70_66_67_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_71_72_70_82_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparse_inst_71_72_70_68_tsni = function unparse_inst_71_72_70_68_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_71_72_70_68_45_tsni(ls);
  tmp1 = map_inst_71_72_70_68_47_tsni(unwords_inst_71_72_70_68_48_tsni, tmp);
  return unlines_inst_71_72_70_68_46_tsni(tmp1)
};
unlines_inst_71_72_70_68_46_tsni = function unlines_inst_71_72_70_68_46_tsni(ls) {
  let tmp;
  tmp = map_inst_71_72_70_68_46_25_tsni(lambda_inst_71_72_70_68_46_79_tsni, ls);
  return concat_inst_71_72_70_68_46_73_tsni(tmp)
};
map_inst_71_72_70_68_46_25_tsni = function map_inst_71_72_70_68_46_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_71_72_70_68_47_tsni = function map_inst_71_72_70_68_47_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_71_72_70_68_47_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_71_72_70_68_46_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_71_72_70_68_46_73_tsni(xs2);
        return append_inst_71_72_70_68_46_73_67_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return () => {
          return match_ls_arm_Nil_inst_71_83_tsni()
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unwords_inst_71_72_70_68_48_tsni = function unwords_inst_71_72_70_68_48_tsni(ws) {
  let param0, param1, w, ws1, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_71_72_70_68_46_79_80_tsni(ys)
    }
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go_inst_71_72_70_68_48_50_tsni(ws1);
    return append_inst_71_72_70_68_48_49_tsni(w, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_71_72_70_68_48_49_tsni = function append_inst_71_72_70_68_48_49_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_71_72_70_68_48_49_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
go_inst_71_72_70_68_48_50_tsni = function go_inst_71_72_70_68_48_50_tsni(vs) {
  let param0, param1, v, vs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (vs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return match_xs_arm_Nil_inst_71_72_70_68_46_79_80_tsni(ys)
    }
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go_inst_71_72_70_68_48_50_tsni(vs1);
    tmp1 = append_inst_71_72_70_68_48_50_51_tsni(v, tmp);
    _deforest_Cons_head = " ";
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_71_72_70_68_48_50_51_tsni = function append_inst_71_72_70_68_48_50_51_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_71_72_70_68_48_50_51_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_71_72_70_68_46_79_80_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparas_inst_71_72_70_68_45_tsni = function unparas_inst_71_72_70_68_45_tsni(ls) {
  return unformat_inst_71_72_70_68_45_37_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_71_72_70_68_45_37_tsni = function unformat_inst_71_72_70_68_45_37_tsni(a, l) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_71_72_70_68_45_37_35_tsni(a));
  return para.fold1(tmp, lambda14, l)
};
lambda_inst_71_72_70_68_45_37_35_tsni = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_71_72_70_68_45_37_35_17_tsni(a, xs, ys)
  }
});
lambda$_inst_71_72_70_68_45_37_35_17_tsni = function lambda$_inst_71_72_70_68_45_37_35_17_tsni(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_71_72_70_68_45_37_35_17_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_71_72_70_68_45_37_35_17_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
concat_inst_71_72_70_68_46_73_tsni = function concat_inst_71_72_70_68_46_73_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_71_72_70_68_46_73_67_tsni = function append_inst_71_72_70_68_46_73_67_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_71_72_70_68_46_73_67_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_71_83_tsni(t);
      return h + tmp1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
listNeq_inst_14_74_tsni = function listNeq_inst_14_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_75_tsni = function append_inst_15_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_17_75_tsni = function append_inst_16_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_76_tsni = function append_inst_18_76_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_77_tsni = function concat_inst_77_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_24_73_tsni = function concat_inst_24_73_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_26_27_76_tsni = function append_inst_26_27_76_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_28_29_27_76_tsni = function append_inst_28_29_27_76_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_34_35_17_75_tsni = function append_inst_34_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_36_37_35_17_75_tsni = function append_inst_36_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_38_39_74_tsni = function listNeq_inst_38_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_40_78_tsni = function map_inst_40_78_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
listNeq_inst_40_43_39_74_tsni = function listNeq_inst_40_43_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_44_45_37_35_17_75_tsni = function append_inst_44_45_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_44_46_73_tsni = function concat_inst_44_46_73_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_44_46_79_tsni = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return append_inst_44_46_79_80_tsni(l, tmp)
});
append_inst_44_46_79_80_tsni = function append_inst_44_46_79_80_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_52_53_43_39_74_tsni = function listNeq_inst_52_53_43_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_52_53_78_tsni = function map_inst_52_53_78_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_52_81_tsni = function map_inst_52_81_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_52_55_46_73_tsni = function concat_inst_52_55_46_73_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_52_55_46_79_tsni = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return append_inst_52_55_46_79_80_tsni(l, tmp)
});
append_inst_52_55_46_79_80_tsni = function append_inst_52_55_46_79_80_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_55_45_37_35_17_75_tsni = function append_inst_52_55_45_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_63_64_43_39_74_tsni = function listNeq_inst_63_64_43_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_63_64_78_tsni = function map_inst_63_64_78_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_63_82_tsni = function map_inst_63_82_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_63_68_46_73_tsni = function concat_inst_63_68_46_73_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_63_68_46_79_tsni = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return append_inst_63_68_46_79_80_tsni(l, tmp)
});
append_inst_63_68_46_79_80_tsni = function append_inst_63_68_46_79_80_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_45_37_35_17_75_tsni = function append_inst_63_68_45_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_69_70_68_45_37_35_17_75_tsni = function append_inst_69_70_68_45_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_69_70_68_46_73_tsni = function concat_inst_69_70_68_46_73_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_69_70_68_46_79_tsni = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return append_inst_69_70_68_46_79_80_tsni(l, tmp)
});
append_inst_69_70_68_46_79_80_tsni = function append_inst_69_70_68_46_79_80_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_69_70_82_tsni = function map_inst_69_70_82_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_69_70_64_78_tsni = function map_inst_69_70_64_78_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
listNeq_inst_69_70_64_43_39_74_tsni = function listNeq_inst_69_70_64_43_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_71_72_70_64_43_39_74_tsni = function listNeq_inst_71_72_70_64_43_39_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_71_72_70_64_78_tsni = function map_inst_71_72_70_64_78_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_71_72_70_82_tsni = function map_inst_71_72_70_82_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_71_72_70_68_46_79_tsni = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return append_inst_71_72_70_68_46_79_80_tsni(l, tmp)
});
append_inst_71_72_70_68_46_79_80_tsni = function append_inst_71_72_70_68_46_79_80_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_71_72_70_68_45_37_35_17_75_tsni = function append_inst_71_72_70_68_45_37_35_17_75_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_71_83_tsni = function nofibListToString_inst_71_83_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda19 = (undefined, function (x) {
  let tmp, tmp1;
  tmp = para1.fst3(x);
  tmp1 = para1.last_(tmp);
  return para1.len_tl(tmp1)
});
single = function single(p) {
  let tmp;
  tmp = para1.len_tl(p);
  return tmp === 0
};
width_hd$ = function width_hd$(tot_width, p) {
  let scrut, tmp, tmp1;
  scrut = single(p);
  if (scrut === true) {
    return tot_width
  } else {
    tmp = para1.width_tl(p);
    tmp1 = tot_width - tmp;
    return tmp1 - 1
  }
};
width_hd = function width_hd(tot_width) {
  return (p) => {
    return width_hd$(tot_width, p)
  }
};
cost$ = function cost$(tot_width, p) {
  let a, scrut, tmp, tmp1, tmp2, tmp3;
  scrut = single(p);
  if (scrut === true) {
    return 0
  } else {
    tmp = para1.cost_tl(p);
    tmp1 = width_hd$(tot_width, p);
    tmp2 = para1.optw - tmp1;
    a = tmp2;
    tmp3 = a * a;
    return tmp + tmp3
  }
};
cost = function cost(tot_width) {
  return (p) => {
    return cost$(tot_width, p)
  }
};
old_width_hd$ = function old_width_hd$(tw, p) {
  let scrut, tmp, tmp1;
  scrut = single(p);
  if (scrut === true) {
    return tw
  } else {
    tmp = para1.width_tl(p);
    tmp1 = tw - tmp;
    return tmp1 - 1
  }
};
old_width_hd = function old_width_hd(tw) {
  return (p) => {
    return old_width_hd$(tw, p)
  }
};
new_$ = function new_$(tw, tl, p) {
  let x, scrut, arr, tmp, tmp1, tmp2, tmp3, tmp4, arr1;
  scrut = single(p);
  if (scrut === true) {
    arr = [
      tw,
      0,
      tl
    ];
    return arr
  } else {
    tmp = para1.cost_tl(p);
    tmp1 = old_width_hd$(tw, p);
    tmp2 = para1.optw - tmp1;
    x = tmp2;
    tmp3 = x * x;
    tmp4 = tmp + tmp3;
    arr1 = [
      tw,
      tmp4,
      tl
    ];
    return arr1
  }
};
new_ = function new_(tw, tl) {
  return (p) => {
    return new_$(tw, tl, p)
  }
};
trim$ = function trim$(tot_width, ps_pq) {
  let ps_p, q, p, scrut, scrut1, scrut2, tmp, tmp1;
  scrut2 = para1.null__(ps_pq);
  if (scrut2 === true) {
    return ps_pq
  } else {
    scrut1 = para1.single_(ps_pq);
    if (scrut1 === true) {
      return ps_pq
    } else {
      ps_p = init__inst_0_1_tsni(ps_pq);
      q = para1.last_(ps_pq);
      p = para1.last_(ps_p);
      tmp = cost$(tot_width, p);
      tmp1 = cost$(tot_width, q);
      scrut = tmp <= tmp1;
      if (scrut === true) {
        return trim$(tot_width, ps_p)
      } else {
        return ps_pq
      }
    }
  }
};
trim = function trim(tot_width) {
  return (ps_pq) => {
    return trim$_inst_3_4_tsni(tot_width, ps_pq)
  }
};
drop_nofit$ = function drop_nofit$(tot_width, ps_p) {
  let scrut, scrut1, tmp, tmp1, tmp2;
  scrut1 = para1.null__(ps_p);
  if (scrut1 === true) {
    return ps_p
  } else {
    tmp = para1.last_(ps_p);
    tmp1 = width_hd$(tot_width, tmp);
    scrut = tmp1 > para1.maxw;
    if (scrut === true) {
      tmp2 = init__inst_5_6_tsni(ps_p);
      return drop_nofit$(tot_width, tmp2)
    } else {
      return ps_p
    }
  }
};
drop_nofit = function drop_nofit(tot_width) {
  return (ps_p) => {
    return drop_nofit$_inst_7_8_tsni(tot_width, ps_p)
  }
};
bf$ = function bf$(tot_width, p, q) {
  let wqh, rqh, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
  tmp = width_hd$(tot_width, q);
  wqh = tmp;
  tmp1 = para1.maxw - wqh;
  tmp2 = tmp1 + 1;
  rqh = tmp2;
  tmp3 = single(q);
  tmp4 = para1.cost_tl(p);
  tmp5 = tmp4 === 0;
  scrut1 = tmp3 && tmp5;
  if (scrut1 === true) {
    tmp6 = width_hd$(tot_width, p);
    tmp7 = para1.optw - tmp6;
    return NofibPrelude.min(tmp7, rqh)
  } else {
    scrut = single(q);
    if (scrut === true) {
      return rqh
    } else {
      tmp8 = cost$(tot_width, p);
      tmp9 = cost$(tot_width, q);
      tmp10 = tmp8 - tmp9;
      tmp11 = width_hd$(tot_width, p);
      tmp12 = wqh - tmp11;
      tmp13 = 2 * tmp12;
      tmp14 = para1.ceildiv(tmp10, tmp13);
      return NofibPrelude.min(tmp14, rqh)
    }
  }
};
bf = function bf(tot_width) {
  return (p, q) => {
    return bf$(tot_width, p, q)
  }
};
myAdd$ = function myAdd$(tot_width, p, qr_rs) {
  let q, r_rs, r, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  tmp = para1.single_(qr_rs);
  tmp1 = para1.null__(qr_rs);
  scrut1 = tmp || tmp1;
  if (scrut1 === true) {
    return para1.cons_(p, qr_rs)
  } else {
    q = para1.head_(qr_rs);
    r_rs = tail__inst_9_10_tsni(qr_rs);
    r = para1.head_(r_rs);
    tmp2 = bf$(tot_width, p, q);
    tmp3 = bf$(tot_width, q, r);
    scrut = tmp2 <= tmp3;
    if (scrut === true) {
      return myAdd$(tot_width, p, r_rs)
    } else {
      return para1.cons_(p, qr_rs)
    }
  }
};
myAdd = function myAdd(tot_width) {
  return (p, qr_rs) => {
    return myAdd$_inst_12_13_tsni(tot_width, p, qr_rs)
  }
};
lambda$8 = function lambda$(par, x) {
  let tmp;
  tmp = NofibPrelude.concat(x);
  return runtime.safeCall(par(tmp))
};
lambda18 = (undefined, function (par) {
  return (x) => {
    return lambda$8(par, x)
  }
});
lambda17 = (undefined, function (x) {
  return listNeq_inst_14_74_tsni((ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      return true
    }
  }, x)
});
unknownEq = function unknownEq(a, b) {
  return a === b
};
breakk = function breakk(a, b, xs) {
  let scrut, tmp, tmp1, tmp2;
  scrut = unknownEq(a, b);
  if (scrut === true) {
    return NofibPrelude.Cons(NofibPrelude.Nil, xs)
  } else {
    tmp = NofibPrelude.head(xs);
    tmp1 = NofibPrelude.Cons(b, tmp);
    tmp2 = NofibPrelude.tail(xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
start = function start(a, b) {
  let tmp;
  tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
  return breakk(a, b, tmp)
};
lambda$7 = function lambda$(a, x, y) {
  return breakk(a, x, y)
};
lambda15 = (undefined, function (a) {
  return (x, y) => {
    return lambda$7(a, x, y)
  }
});
lambda$6 = function lambda$(a, y) {
  return start(a, y)
};
lambda16 = (undefined, function (a) {
  return (y) => {
    return lambda$6(a, y)
  }
});
lambda$5 = function lambda$(a, xs, ys) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = a;
  _deforest_Cons_tail = (ys1) => {
    return ys1
  };
  tmp = (ys1) => {
    let param0, param1, x, xs1, tmp2;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs1 = param1;
    tmp2 = append_inst_15_75_tsni(xs1, ys1);
    return NofibPrelude.Cons(x, tmp2)
  };
  tmp1 = append_inst_15_75_tsni(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
};
lambda13 = (undefined, function (a) {
  return (xs, ys) => {
    return lambda$_inst_16_17_tsni(a, xs, ys)
  }
});
lambda14 = (undefined, function (x) {
  return x
});
linc = function linc(l) {
  let a, tmp, tmp1;
  tmp = para1.width(l);
  tmp1 = para1.optw - tmp;
  a = tmp1;
  return a * a
};
plus1 = function plus(l, n) {
  let tmp;
  tmp = linc(l);
  return tmp + n
};
lambda12 = (undefined, function (x) {
  return 0
});
plus = function plus(w, n) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(w);
  tmp1 = tmp + 1;
  return tmp1 + n
};
lambda$4 = function lambda$(w, p) {
  return para1.new_(w, p)
};
lambda9 = (undefined, function (w) {
  return (p) => {
    return lambda$4(w, p)
  }
});
lambda$3 = function lambda$(w, p) {
  return para1.glue(w, p)
};
lambda10 = (undefined, function (w) {
  return (p) => {
    return lambda$3(w, p)
  }
});
lambda8 = (undefined, function (w, ps) {
  let tmp, tmp1, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda9(w));
  tmp = map_inst_18_19_tsni(lambda$this, ps);
  lambda$this1 = runtime.safeCall(lambda10(w));
  tmp1 = NofibPrelude.map(lambda$this1, ps);
  return append_inst_18_76_tsni(tmp, tmp1)
});
lambda11 = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
});
lambda$2 = function lambda$(f, a, b) {
  let scrut, tmp, tmp1;
  tmp = runtime.safeCall(f(a));
  tmp1 = runtime.safeCall(f(b));
  scrut = tmp < tmp1;
  if (scrut === true) {
    return a
  } else {
    return b
  }
};
lambda6 = (undefined, function (f) {
  return (a, b) => {
    return lambda$2(f, a, b)
  }
});
lambda7 = (undefined, function (x) {
  return x
});
lambda4 = (undefined, function (a, s) {
  return NofibPrelude.Cons(a, s)
});
lambda5 = (undefined, function (a) {
  return NofibPrelude.Cons(a, NofibPrelude.Nil)
});
lambda$1 = function lambda$(f, a, s) {
  let tmp, tmp1;
  tmp = NofibPrelude.head(s);
  tmp1 = runtime.safeCall(f(a, tmp));
  return NofibPrelude.Cons(tmp1, s)
};
lambda2 = (undefined, function (f) {
  return (a, s) => {
    return lambda$1(f, a, s)
  }
});
lambda$ = function lambda$(g, a) {
  let tmp;
  tmp = runtime.safeCall(g(a));
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
};
lambda3 = (undefined, function (g) {
  return (a) => {
    return lambda$(g, a)
  }
});
lambda1 = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("\n");
  return NofibPrelude.append(l, tmp)
});
lambda = (undefined, function (x) {
  return x === "\n"
});
go = function go(vs) {
  let param0, param1, v, vs1, tmp, tmp1;
  if (vs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (vs instanceof NofibPrelude.Cons.class) {
    param0 = vs.head;
    param1 = vs.tail;
    v = param0;
    vs1 = param1;
    tmp = go(vs1);
    tmp1 = NofibPrelude.append(v, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
(class para {
  static {
    para1 = para;
    let arr, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9;
    this.maxw = 70;
    this.optw = 63;
    arr = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    this.nil_ = arr;
    tmp = NofibPrelude.nofibStringToList("In the constructive programming community it is commonplace to see ");
    tmp1 = NofibPrelude.nofibStringToList("formal developments of textbook algorithms. In the algorithm design ");
    tmp2 = NofibPrelude.nofibStringToList("community, on the other hand, it may be well known that the textbook ");
    tmp3 = NofibPrelude.nofibStringToList("solution to a problem is not the most efficient possible. However, in ");
    tmp4 = NofibPrelude.nofibStringToList("presenting the more efficient solution, the algorithm designer will ");
    tmp5 = NofibPrelude.nofibStringToList("usually omit some of the implementation details, this creating an ");
    tmp6 = NofibPrelude.nofibStringToList("algorithm gap between the abstract algorithm and its concrete ");
    tmp7 = NofibPrelude.nofibStringToList("implementation. This is in contrast to the formal development, which ");
    tmp8 = NofibPrelude.nofibStringToList("usually presents the complete concrete implementation of the less ");
    tmp9 = NofibPrelude.nofibStringToList("efficient solution.\n\n");
    _deforest_Cons_head9 = tmp9;
    _deforest_Cons_tail9 = () => {
      return NofibPrelude.Nil
    };
    tmp10 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = tmp8;
    _deforest_Cons_tail8 = tmp10;
    tmp11 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = tmp7;
    _deforest_Cons_tail7 = tmp11;
    tmp12 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = tmp6;
    _deforest_Cons_tail6 = tmp12;
    tmp13 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp5;
    _deforest_Cons_tail5 = tmp13;
    tmp14 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp4;
    _deforest_Cons_tail4 = tmp14;
    tmp15 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp3;
    _deforest_Cons_tail3 = tmp15;
    tmp16 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp2;
    _deforest_Cons_tail2 = tmp16;
    tmp17 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp17;
    tmp18 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp18;
    tmp19 = () => {
      return match_ls_arm_Cons_inst_77_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp20 = concat_inst_77_tsni(tmp19);
    this.test = tmp20;
  }
  static unwords(ws) {
    let param0, param1, w, ws1, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      param0 = ws.head;
      param1 = ws.tail;
      w = param0;
      ws1 = param1;
      tmp = go(ws1);
      return NofibPrelude.append(w, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static break_(p, xs) {
    let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2;
    if (xs instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      scrut1 = runtime.safeCall(p(x));
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(x, xs1);
        arr1 = [
          NofibPrelude.Nil,
          tmp
        ];
        return arr1
      } else {
        scrut = para.break_(p, xs1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          ys = first0;
          zs = first1;
          tmp1 = NofibPrelude.Cons(x, ys);
          arr2 = [
            tmp1,
            zs
          ];
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isSpace(c) {
    return c === " "
  } 
  static words(s) {
    let scrut;
    scrut = dropWhile_inst_20_21_tsni(para.isSpace, s);
    return runtime.safeCall(scrut())
  } 
  static lines(s1) {
    let scrut, first1, first0, l, s_;
    scrut = break__inst_22_23_tsni(lambda, s1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      l = first0;
      s_ = first1;
      return runtime.safeCall(s_(l))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static unlines(ls) {
    let tmp;
    tmp = map_inst_24_25_tsni(lambda1, ls);
    return concat_inst_24_73_tsni(tmp)
  } 
  static all(p1, xs1) {
    let param0, param1, x, xs2, tmp, tmp1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return true
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(p1(x));
      tmp1 = para.all(p1, xs2);
      return tmp && tmp1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fold1(f, g, xs2) {
    let param0, param1, a, x, a1, tmp;
    if (xs2 instanceof NofibPrelude.Cons.class) {
      param0 = xs2.head;
      param1 = xs2.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(g(a1))
      } else {
        a = param0;
        x = param1;
        tmp = para.fold1(f, g, x);
        return runtime.safeCall(f(a, tmp))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static scan1(f1, g1, xs3) {
    let tmp, lambda$this;
    tmp = runtime.safeCall(lambda2(f1));
    lambda$this = runtime.safeCall(lambda3(g1));
    return para.fold1(tmp, lambda$this, xs3)
  } 
  static tails(xs4) {
    return para.scan1(lambda4, lambda5, xs4)
  } 
  static single(xs5) {
    let param0, param1, a;
    if (xs5 instanceof NofibPrelude.Cons.class) {
      param0 = xs5.head;
      param1 = xs5.tail;
      a = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static minWith(f2, xs6) {
    let tmp;
    tmp = runtime.safeCall(lambda6(f2));
    return para.fold1(tmp, lambda7, xs6)
  } 
  static new_(w, ls1) {
    let tmp;
    tmp = NofibPrelude.Cons(w, NofibPrelude.Nil);
    return NofibPrelude.Cons(tmp, ls1)
  } 
  static glue(w1, ls2) {
    let param0, param1, l, ls_, tmp;
    if (ls2 instanceof NofibPrelude.Cons.class) {
      param0 = ls2.head;
      param1 = ls2.tail;
      l = param0;
      ls_ = param1;
      tmp = NofibPrelude.Cons(w1, l);
      return NofibPrelude.Cons(tmp, ls_)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static formats(txt) {
    let tmp, tmp1;
    tmp = lambda_inst_26_27_tsni;
    tmp1 = lambda11;
    return para.fold1(tmp, tmp1, txt)
  } 
  static width(ls3) {
    return para.fold1(plus, NofibPrelude.listLen, ls3)
  } 
  static fits(xs7) {
    let tmp;
    tmp = para.width(xs7);
    return tmp <= para.maxw
  } 
  static feasible(a) {
    return para.all(para.fits, a)
  } 
  static cost(ls4) {
    return para.fold1(plus1, lambda12, ls4)
  } 
  static par0(x) {
    let tmp, tmp1;
    tmp = formats_inst_28_29_tsni(x);
    tmp1 = NofibPrelude.filter(para.feasible, tmp);
    return para.minWith(para.cost, tmp1)
  } 
  static fitH(ls5) {
    let tmp;
    tmp = NofibPrelude.head(ls5);
    return para.fits(tmp)
  } 
  static fst3(a_b_c) {
    let first2, first1, first0, a1, b, c1;
    if (globalThis.Array.isArray(a_b_c) && a_b_c.length === 3) {
      first0 = a_b_c[0];
      first1 = a_b_c[1];
      first2 = a_b_c[2];
      a1 = first0;
      b = first1;
      c1 = first2;
      return a1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static snd3(a_b_c1) {
    let first2, first1, first0, a1, b, c1;
    if (globalThis.Array.isArray(a_b_c1) && a_b_c1.length === 3) {
      first0 = a_b_c1[0];
      first1 = a_b_c1[1];
      first2 = a_b_c1[2];
      a1 = first0;
      b = first1;
      c1 = first2;
      return b
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static thd3(a_b_c2) {
    let first2, first1, first0, a1, b, c1;
    if (globalThis.Array.isArray(a_b_c2) && a_b_c2.length === 3) {
      first0 = a_b_c2[0];
      first1 = a_b_c2[1];
      first2 = a_b_c2[2];
      a1 = first0;
      b = first1;
      c1 = first2;
      return c1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static width_tl(a_b_c3) {
    return para.fst3(a_b_c3)
  } 
  static cost_tl(a_b_c4) {
    return para.snd3(a_b_c4)
  } 
  static len_tl(a_b_c5) {
    return para.thd3(a_b_c5)
  } 
  static tile(ws1, a_b) {
    let first1, first0, param0, param1, m, ms, n, l, scrut, n1, tmp;
    if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
      first0 = a_b[0];
      first1 = a_b[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        n1 = first1;
        return NofibPrelude.Nil
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        m = param0;
        ms = param1;
        n = first1;
        tmp = n - m;
        l = tmp;
        scrut = splitAt_inst_30_31_tsni(l, ws1);
        return runtime.safeCall(scrut(m, ms, l))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static null__(a_b1) {
    let first1, first0;
    if (globalThis.Array.isArray(a_b1) && a_b1.length === 2) {
      first0 = a_b1[0];
      first1 = a_b1[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        if (first1 instanceof NofibPrelude.Nil.class) {
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
  static single_(a_b2) {
    let first1, first0, x1, y, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (globalThis.Array.isArray(a_b2) && a_b2.length === 2) {
      first0 = a_b2[0];
      first1 = a_b2[1];
      x1 = first0;
      y = first1;
      tmp = NofibPrelude.null_(x1);
      tmp1 = para.single(y);
      tmp2 = tmp && tmp1;
      tmp3 = para.single(x1);
      tmp4 = NofibPrelude.null_(y);
      tmp5 = tmp3 && tmp4;
      return tmp2 || tmp5
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static head_(a_b3) {
    let first1, first0, x1, y, scrut, tmp;
    if (globalThis.Array.isArray(a_b3) && a_b3.length === 2) {
      first0 = a_b3[0];
      first1 = a_b3[1];
      x1 = first0;
      y = first1;
      tmp = NofibPrelude.null_(x1);
      scrut = Predef.not(tmp);
      if (scrut === true) {
        return NofibPrelude.head(x1)
      } else {
        return NofibPrelude.head(y)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static last_(a_b4) {
    let first1, first0, y, x1, scrut, tmp;
    if (globalThis.Array.isArray(a_b4) && a_b4.length === 2) {
      first0 = a_b4[0];
      first1 = a_b4[1];
      y = first0;
      x1 = first1;
      tmp = NofibPrelude.null_(x1);
      scrut = Predef.not(tmp);
      if (scrut === true) {
        return NofibPrelude.head(x1)
      } else {
        return NofibPrelude.head(y)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static cons_(a1, a_b5) {
    let first1, first0, x1, y, scrut, tmp, tmp1, arr, tmp2, arr1;
    if (globalThis.Array.isArray(a_b5) && a_b5.length === 2) {
      first0 = a_b5[0];
      first1 = a_b5[1];
      x1 = first0;
      y = first1;
      tmp = NofibPrelude.null_(y);
      scrut = Predef.not(tmp);
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a1, x1);
        arr = [
          tmp1,
          y
        ];
        return arr
      } else {
        tmp2 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
        arr1 = [
          tmp2,
          x1
        ];
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static snoc_(a2, a_b6) {
    let first1, first0, y, x1, scrut, tmp, tmp1, arr, tmp2, arr1;
    if (globalThis.Array.isArray(a_b6) && a_b6.length === 2) {
      first0 = a_b6[0];
      first1 = a_b6[1];
      y = first0;
      x1 = first1;
      tmp = NofibPrelude.null_(y);
      scrut = Predef.not(tmp);
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a2, x1);
        arr = [
          y,
          tmp1
        ];
        return arr
      } else {
        tmp2 = NofibPrelude.Cons(a2, NofibPrelude.Nil);
        arr1 = [
          x1,
          tmp2
        ];
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tail_(a_b7) {
    let first1, first0, x1, y, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
    if (globalThis.Array.isArray(a_b7) && a_b7.length === 2) {
      first0 = a_b7[0];
      first1 = a_b7[1];
      x1 = first0;
      y = first1;
      scrut2 = NofibPrelude.null_(x1);
      if (scrut2 === true) {
        arr = [
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ];
        return arr
      } else {
        scrut = para.single(x1);
        if (scrut === true) {
          tmp = NofibPrelude.listLen(y);
          tmp1 = NofibPrelude.intDiv(tmp, 2);
          scrut1 = splitAt_inst_32_11_tsni(tmp1, y);
          return runtime.safeCall(scrut1(x1, y))
        } else {
          tmp2 = NofibPrelude.tail(x1);
          arr1 = [
            tmp2,
            y
          ];
          return arr1
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static init_(a_b8) {
    let first1, first0, y, x1, scrut, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1;
    if (globalThis.Array.isArray(a_b8) && a_b8.length === 2) {
      first0 = a_b8[0];
      first1 = a_b8[1];
      y = first0;
      x1 = first1;
      scrut2 = NofibPrelude.null_(x1);
      if (scrut2 === true) {
        arr = [
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ];
        return arr
      } else {
        scrut = para.single(x1);
        if (scrut === true) {
          tmp = NofibPrelude.listLen(y);
          tmp1 = NofibPrelude.intDiv(tmp, 2);
          scrut1 = splitAt_inst_33_2_tsni(tmp1, y);
          return runtime.safeCall(scrut1(y, x1))
        } else {
          tmp2 = NofibPrelude.tail(x1);
          arr1 = [
            y,
            tmp2
          ];
          return arr1
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static unformat(a3, l) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_34_35_tsni(a3));
    return para.fold1(tmp, lambda14, l)
  } 
  static format(a4, x1) {
    let lambda$this, lambda$this1;
    if (x1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else {
      lambda$this = runtime.safeCall(lambda15(a4));
      lambda$this1 = runtime.safeCall(lambda16(a4));
      return para.fold1(lambda$this, lambda$this1, x1)
    }
  } 
  static unparas(ls6) {
    return unformat_inst_36_37_tsni(NofibPrelude.Nil, ls6)
  } 
  static paras(ls7) {
    let tmp;
    tmp = para.format(NofibPrelude.Nil, ls7);
    return NofibPrelude.filter(lambda_inst_38_39_tsni, tmp)
  } 
  static parse(ls8) {
    let tmp, tmp1;
    tmp = lines_inst_40_41_tsni(ls8);
    tmp1 = map_inst_40_78_tsni(words_inst_40_42_tsni, tmp);
    return paras_inst_40_43_tsni(tmp1)
  } 
  static unparse(ls9) {
    let tmp, tmp1;
    tmp = unparas_inst_44_45_tsni(ls9);
    tmp1 = map_inst_44_47_tsni(unwords_inst_44_48_tsni, tmp);
    return unlines_inst_44_46_tsni(tmp1)
  } 
  static startr(a5) {
    let scrut, arr, tmp, arr1;
    scrut = a5 <= para.maxw;
    if (scrut === true) {
      arr = [
        0,
        0,
        0
      ];
      tmp = para.cons_(arr, para.nil_);
      arr1 = [
        tmp,
        a5,
        1
      ];
      return arr1
    } else {
      throw globalThis.Error("startr param error");
    }
  } 
  static ceildiv(n, m) {
    let tmp, tmp1;
    tmp = n + m;
    tmp1 = tmp - 1;
    return NofibPrelude.intDiv(tmp1, m)
  } 
  static fmtWith(par) {
    let tmp, tmp1, lambda$this;
    tmp = parse_inst_52_53_tsni(par);
    lambda$this = runtime.safeCall(lambda18(par));
    tmp1 = map_inst_52_81_tsni(lambda$this, tmp);
    return unparse_inst_52_55_tsni(tmp1)
  } 
  static stepr(w2, ps_tw_tl) {
    let first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
    if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
      first0 = ps_tw_tl[0];
      first1 = ps_tw_tl[1];
      first2 = ps_tw_tl[2];
      ps = first0;
      tw = first1;
      tl = first2;
      tmp = w2 + 1;
      tmp1 = tmp + tw;
      tot_width = tmp1;
      tmp2 = 1 + tl;
      tot_len = tmp2;
      tmp3 = para.last_(ps);
      tmp4 = new_$(tw, tl, tmp3);
      tmp5 = myAdd$_inst_56_57_tsni(tot_width, tmp4, ps);
      tmp6 = drop_nofit$_inst_56_58_tsni(tot_width, tmp5);
      tmp7 = trim$_inst_56_59_tsni(tot_width, tmp6);
      arr = [
        tmp7,
        tot_width,
        tot_len
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static par3(ws2) {
    let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr;
    tmp = NofibPrelude.map(NofibPrelude.listLen, ws2);
    tmp1 = para.scan1(stepr_inst_60_61_tsni, para.startr, tmp);
    zs = tmp1;
    tmp2 = lambda19;
    tmp3 = NofibPrelude.map(tmp2, zs);
    tmp4 = NofibPrelude.head(zs);
    tmp5 = para.thd3(tmp4);
    arr = [
      tmp3,
      tmp5
    ];
    return tile_inst_60_62_tsni(ws2, arr)
  } 
  static fmt(x2) {
    let tmp, tmp1, tmp2;
    tmp = parse_inst_63_64_tsni(x2);
    tmp1 = concat_inst_63_66_tsni(tmp);
    tmp2 = map_inst_63_82_tsni(par3_inst_63_65_tsni, tmp1);
    return unparse_inst_63_68_tsni(tmp2)
  } 
  static testPara_nofib() {
    let scrut;
    scrut = NofibPrelude.null_(para.test);
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      return fmt_inst_69_70_tsni(para.test)
    }
  } 
  static main() {
    let tmp;
    tmp = testPara_nofib_inst_71_72_tsni();
    return nofibListToString_inst_71_83_tsni(tmp)
  }
  static toString() { return "para"; }
});
let para = para1; export default para;
