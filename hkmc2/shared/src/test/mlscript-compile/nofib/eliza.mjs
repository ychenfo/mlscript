import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let eliza1, lscomp_inst_0_tsni, dropWhile_inst_1_2_tsni, dropWhile_inst_3_4_tsni, ucase_inst_5_6_tsni, map_inst_5_6_7_tsni, append_inst_5_8_tsni, map_inst_5_9_tsni, conjug_inst_10_11_tsni, map_inst_10_11_9_tsni, append_inst_10_11_8_tsni, ucase_inst_10_11_6_tsni, map_inst_10_11_6_7_tsni, lz_map_inst_10_12_tsni, replies_inst_13_14_tsni, lz_map_inst_13_14_12_tsni, conjug_inst_13_14_11_tsni, ucase_inst_13_14_11_6_tsni, map_inst_13_14_11_6_7_tsni, append_inst_13_14_11_8_tsni, map_inst_13_14_11_9_tsni, answer_inst_15_16_tsni, replies_inst_15_16_14_tsni, conjug_inst_15_16_14_11_tsni, map_inst_15_16_14_11_9_tsni, append_inst_15_16_14_11_8_tsni, ucase_inst_15_16_14_11_6_tsni, map_inst_15_16_14_11_6_7_tsni, lz_map_inst_15_16_14_12_tsni, repeated_inst_15_17_tsni, trim_inst_18_19_tsni, dropWhile_inst_18_19_4_tsni, words_inst_18_20_tsni, dropWhile_inst_18_20_2_tsni, take_inst_18_21_tsni, map_inst_18_22_tsni, session_inst_18_23_tsni, answer_inst_18_23_16_tsni, replies_inst_18_23_16_14_tsni, lz_map_inst_18_23_16_14_12_tsni, conjug_inst_18_23_16_14_11_tsni, ucase_inst_18_23_16_14_11_6_tsni, map_inst_18_23_16_14_11_6_7_tsni, append_inst_18_23_16_14_11_8_tsni, map_inst_18_23_16_14_11_9_tsni, repeated_inst_18_23_17_tsni, filter_inst_18_24_tsni, enumFromTo_inst_18_25_tsni, testEliza_nofib_inst_26_27_tsni, enumFromTo_inst_26_27_25_tsni, session_inst_26_27_23_tsni, answer_inst_26_27_23_16_tsni, replies_inst_26_27_23_16_14_tsni, conjug_inst_26_27_23_16_14_11_tsni, map_inst_26_27_23_16_14_11_9_tsni, append_inst_26_27_23_16_14_11_8_tsni, ucase_inst_26_27_23_16_14_11_6_tsni, map_inst_26_27_23_16_14_11_6_7_tsni, lz_map_inst_26_27_23_16_14_12_tsni, repeated_inst_26_27_23_17_tsni, filter_inst_26_27_24_tsni, map_inst_26_27_22_tsni, words_inst_26_27_20_tsni, dropWhile_inst_26_27_20_2_tsni, trim_inst_26_27_19_tsni, dropWhile_inst_26_27_19_4_tsni, take_inst_26_27_21_tsni, map_inst_26_27_28_tsni, append_inst_26_27_23_29_tsni, append_inst_26_27_23_30_tsni, concat_inst_31_tsni, append_inst_31_32_tsni, prepare_inst_33_tsni, append_inst_34_tsni, break__inst_1_35_tsni, foldr_inst_3_36_tsni, listEq_inst_5_37_tsni, head_inst_5_38_tsni, foldr_inst_5_39_tsni, foldr_inst_10_11_39_tsni, head_inst_10_11_38_tsni, listEq_inst_10_11_37_tsni, prefix_inst_10_40_tsni, prefix_inst_13_14_40_tsni, listEq_inst_13_14_11_37_tsni, head_inst_13_14_11_38_tsni, foldr_inst_13_14_11_39_tsni, foldr_inst_15_16_14_11_39_tsni, head_inst_15_16_14_11_38_tsni, listEq_inst_15_16_14_11_37_tsni, prefix_inst_15_16_14_40_tsni, foldr_inst_18_19_36_tsni, prefix_inst_18_23_16_14_40_tsni, listEq_inst_18_23_16_14_11_37_tsni, head_inst_18_23_16_14_11_38_tsni, foldr_inst_18_23_16_14_11_39_tsni, map_inst_18_28_tsni, foldr_inst_26_27_23_16_14_11_39_tsni, head_inst_26_27_23_16_14_11_38_tsni, listEq_inst_26_27_23_16_14_11_37_tsni, prefix_inst_26_27_23_16_14_40_tsni, foldr_inst_26_27_19_36_tsni, map_inst_26_41_tsni, nofibListToString_inst_26_42_tsni, match_xs_arm_Cons_inst_31_32_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni, match_ls_arm_Cons_inst_0_tsni, match_param0_arm_Deforest_Arr_2_inst_0_tsni, match_l_arm_Cons_inst_5_38_tsni, match_l_arm_Cons_inst_10_11_38_tsni, match_l_arm_Cons_inst_13_14_11_38_tsni, match_l_arm_Cons_inst_15_16_14_11_38_tsni, match_scrut_arm_Deforest_Arr_2_inst_15_tsni, match_xs_arm_Nil_inst_18_22_tsni, match_l_arm_Cons_inst_18_23_16_14_11_38_tsni, match_scrut_arm_Deforest_Arr_2_inst_18_23_tsni, match_l_arm_Cons_inst_26_27_23_16_14_11_38_tsni, match_scrut_arm_Deforest_Arr_2_inst_26_27_23_tsni, match_xs_arm_Nil_inst_26_27_22_tsni, match_ls_arm_Cons_inst_26_42_tsni;
match_xs_arm_Cons_inst_31_32_tsni = function match_xs_arm_Cons_inst_31_32_tsni(ys, _deforest_Cons_head_inst_31_32_tsni, _deforest_Cons_tail_inst_31_32_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_31_32_tsni;
  param1 = _deforest_Cons_tail_inst_31_32_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_31_32_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni(_deforest_Deforest_Arr_2_0_inst_33_tsni, _deforest_Deforest_Arr_2_1_inst_33_tsni) {
  let first1, first0, w, r, tmp, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_33_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_33_tsni;
  w = first0;
  r = first1;
  tmp = eliza.ucase(w);
  arr = [
    tmp,
    r
  ];
  return arr
};
match_ls_arm_Cons_inst_0_tsni = function match_ls_arm_Cons_inst_0_tsni(lscomp, _deforest_Cons_head_inst_0_tsni, _deforest_Cons_tail_inst_0_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_0_tsni;
  param1 = _deforest_Cons_tail_inst_0_tsni;
  return runtime.safeCall(param0(lscomp, param1))
};
match_param0_arm_Deforest_Arr_2_inst_0_tsni = function match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp, param1, _deforest_Deforest_Arr_2_0_inst_0_tsni, _deforest_Deforest_Arr_2_1_inst_0_tsni) {
  let first1, first0, x, y, t, arr, arr1, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_tsni;
  x = first0;
  y = first1;
  t = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    return match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Deforest_Arr_2_01 = y;
  _deforest_Deforest_Arr_2_11 = x;
  arr1 = () => {
    return match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Cons_head2 = arr1;
  _deforest_Cons_tail2 = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_31_32_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = arr;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (ys) => {
    return match_xs_arm_Cons_inst_31_32_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  tmp2 = lscomp_inst_0_tsni(t);
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp2;
  return () => {
    let param0, param11, x1, xs, tmp3;
    param0 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param0;
    xs = param11;
    tmp3 = concat_inst_31_tsni(xs);
    return append_inst_31_32_tsni(x1, tmp3)
  }
};
match_l_arm_Cons_inst_5_38_tsni = function match_l_arm_Cons_inst_5_38_tsni(_deforest_Cons_head_inst_5_38_tsni, _deforest_Cons_tail_inst_5_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_5_38_tsni;
  param1 = _deforest_Cons_tail_inst_5_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_l_arm_Cons_inst_10_11_38_tsni = function match_l_arm_Cons_inst_10_11_38_tsni(_deforest_Cons_head_inst_10_11_38_tsni, _deforest_Cons_tail_inst_10_11_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_10_11_38_tsni;
  param1 = _deforest_Cons_tail_inst_10_11_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_l_arm_Cons_inst_13_14_11_38_tsni = function match_l_arm_Cons_inst_13_14_11_38_tsni(_deforest_Cons_head_inst_13_14_11_38_tsni, _deforest_Cons_tail_inst_13_14_11_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_13_14_11_38_tsni;
  param1 = _deforest_Cons_tail_inst_13_14_11_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_l_arm_Cons_inst_15_16_14_11_38_tsni = function match_l_arm_Cons_inst_15_16_14_11_38_tsni(_deforest_Cons_head_inst_15_16_14_11_38_tsni, _deforest_Cons_tail_inst_15_16_14_11_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_15_16_14_11_38_tsni;
  param1 = _deforest_Cons_tail_inst_15_16_14_11_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_scrut_arm_Deforest_Arr_2_inst_15_tsni = function match_scrut_arm_Deforest_Arr_2_inst_15_tsni(l, ls, _deforest_Deforest_Arr_2_0_inst_15_tsni, _deforest_Deforest_Arr_2_1_inst_15_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = eliza.session(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
};
match_xs_arm_Nil_inst_18_22_tsni = function match_xs_arm_Nil_inst_18_22_tsni(f) {
  return (f1) => {
    return (rs, prev) => {
      return NofibPrelude.Nil
    }
  }
};
match_l_arm_Cons_inst_18_23_16_14_11_38_tsni = function match_l_arm_Cons_inst_18_23_16_14_11_38_tsni(_deforest_Cons_head_inst_18_23_16_14_11_38_tsni, _deforest_Cons_tail_inst_18_23_16_14_11_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_18_23_16_14_11_38_tsni;
  param1 = _deforest_Cons_tail_inst_18_23_16_14_11_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_scrut_arm_Deforest_Arr_2_inst_18_23_tsni = function match_scrut_arm_Deforest_Arr_2_inst_18_23_tsni(l, ls, _deforest_Deforest_Arr_2_0_inst_18_23_tsni, _deforest_Deforest_Arr_2_1_inst_18_23_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_23_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_23_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_18_23_tsni(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
};
match_l_arm_Cons_inst_26_27_23_16_14_11_38_tsni = function match_l_arm_Cons_inst_26_27_23_16_14_11_38_tsni(_deforest_Cons_head_inst_26_27_23_16_14_11_38_tsni, _deforest_Cons_tail_inst_26_27_23_16_14_11_38_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_26_27_23_16_14_11_38_tsni;
  param1 = _deforest_Cons_tail_inst_26_27_23_16_14_11_38_tsni;
  h = param0;
  t = param1;
  return h
};
match_scrut_arm_Deforest_Arr_2_inst_26_27_23_tsni = function match_scrut_arm_Deforest_Arr_2_inst_26_27_23_tsni(l, ls, _deforest_Deforest_Arr_2_0_inst_26_27_23_tsni, _deforest_Deforest_Arr_2_1_inst_26_27_23_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_26_27_23_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_26_27_23_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_26_27_23_tsni(rs_, l, ls);
  tmp2 = append_inst_26_27_23_30_tsni(tmp, tmp1);
  return append_inst_26_27_23_29_tsni(response, tmp2)
};
match_xs_arm_Nil_inst_26_27_22_tsni = function match_xs_arm_Nil_inst_26_27_22_tsni(f) {
  return (f1) => {
    return (rs, prev) => {
      return () => {
        return ""
      }
    }
  }
};
match_ls_arm_Cons_inst_26_42_tsni = function match_ls_arm_Cons_inst_26_42_tsni(_deforest_Cons_head_inst_26_42_tsni, _deforest_Cons_tail_inst_26_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_26_42_tsni;
  param1 = _deforest_Cons_tail_inst_26_42_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_26_42_tsni(t);
  return h + tmp
};
lscomp_inst_0_tsni = function lscomp_inst_0_tsni(ls) {
  return runtime.safeCall(ls(lscomp_not_in_scp))
};
dropWhile_inst_1_2_tsni = function dropWhile_inst_1_2_tsni(f, ls) {
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
      return dropWhile_inst_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        _deforest_Cons_head1 = h2h;
        _deforest_Cons_tail1 = t2t;
        tmp = (p) => {
          let param02, param12, x, xs, scrut2, first11, first01, ys, zs, scrut3, tmp2, arr, tmp3, arr1;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          x = param02;
          xs = param12;
          scrut3 = runtime.safeCall(p(x));
          if (scrut3 === true) {
            tmp2 = NofibPrelude.Cons(x, xs);
            arr = [
              NofibPrelude.Nil,
              tmp2
            ];
            return arr
          } else {
            scrut2 = break__inst_1_35_tsni(p, xs);
            if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
              first01 = scrut2[0];
              first11 = scrut2[1];
              ys = first01;
              zs = first11;
              tmp3 = NofibPrelude.Cons(x, ys);
              arr1 = [
                tmp3,
                zs
              ];
              return arr1
            } else {
              throw new globalThis.Error("match error");
            }
          }
        };
        scrut1 = break__inst_1_35_tsni(eliza.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = eliza.words(s_);
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
dropWhile_inst_3_4_tsni = function dropWhile_inst_3_4_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_3_4_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return (f1, z) => {
        let param01, param11, h1, t1, tmp;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = foldr_inst_3_36_tsni(f1, z, t1);
        return runtime.safeCall(f1(h1, tmp))
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ucase_inst_5_6_tsni = function ucase_inst_5_6_tsni(ls) {
  return map_inst_5_6_7_tsni(eliza.toUpper, ls)
};
map_inst_5_6_7_tsni = function map_inst_5_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_5_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_5_8_tsni = function append_inst_5_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_5_9_tsni = function map_inst_5_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_5_39_tsni(f1, z, t);
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
conjug_inst_10_11_tsni = function conjug_inst_10_11_tsni(d, w) {
  let maybe, conj, trailingI, tmp, tmp1, tmp2;
  maybe = function maybe(d1, xs) {
    let scrut;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      return d1
    } else {
      return xs
    }
  };
  conj = function conj(w1) {
    let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return (ys) => {
          return ys
        }
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          w_ = first0;
          m = first1;
          t = param1;
          tmp6 = ucase_inst_10_11_6_tsni(w1);
          scrut = listEq_inst_10_11_37_tsni(tmp6, w_);
          if (scrut === true) {
            tmp7 = lscomp(t);
            _deforest_Cons_head1 = m;
            _deforest_Cons_tail1 = tmp7;
            return (ys) => {
              let param01, param11, x, xs, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              x = param01;
              xs = param11;
              tmp8 = append_inst_10_11_8_tsni(xs, ys);
              _deforest_Cons_head2 = x;
              _deforest_Cons_tail2 = tmp8;
              return () => {
                return match_l_arm_Cons_inst_10_11_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
              }
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp3 = lscomp(eliza.conjugates);
    _deforest_Cons_head = w1;
    _deforest_Cons_tail = NofibPrelude.Nil;
    tmp4 = () => {
      return match_l_arm_Cons_inst_10_11_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = append_inst_10_11_8_tsni(tmp3, tmp4);
    return head_inst_10_11_38_tsni(tmp5)
  };
  trailingI = function trailingI(ls) {
    let cons;
    cons = function cons(x, xs) {
      let scrut, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      tmp5 = NofibPrelude.null_(xs);
      scrut = tmp4 && tmp5;
      if (scrut === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    };
    return foldr_inst_10_11_39_tsni(cons, NofibPrelude.Nil, ls)
  };
  tmp = maybe(d, w);
  tmp1 = map_inst_10_11_9_tsni(conj, tmp);
  tmp2 = trailingI(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_10_11_9_tsni = function map_inst_10_11_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_11_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_10_11_39_tsni(f1, z, t);
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
append_inst_10_11_8_tsni = function append_inst_10_11_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
ucase_inst_10_11_6_tsni = function ucase_inst_10_11_6_tsni(ls) {
  return map_inst_10_11_6_7_tsni(eliza.toUpper, ls)
};
map_inst_10_11_6_7_tsni = function map_inst_10_11_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_11_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_10_11_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lz_map_inst_10_12_tsni = function lz_map_inst_10_12_tsni(f, ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let param0, param1, h, t, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return (x, xs) => {
        return false
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp1 = runtime.safeCall(f(h));
      tmp2 = lz_map_inst_10_12_tsni(f, t);
      _deforest_LzCons_head = tmp1;
      _deforest_LzCons_tail = tmp2;
      return (x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_LzCons_head;
        param11 = _deforest_LzCons_tail;
        y = param01;
        ys = param11;
        tmp3 = NofibPrelude.listEq(x, y);
        tmp4 = prefix_inst_10_40_tsni(xs, ys);
        return tmp3 && tmp4
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
replies_inst_13_14_tsni = function replies_inst_13_14_tsni(key, l) {
  let tmp, tmp1, tmp2, lambda, lambda1;
  lambda = (undefined, function (x) {
    let tmp3, tmp4;
    tmp3 = NofibPrelude.listLen(key);
    tmp4 = NofibPrelude.drop(tmp3, x);
    return conjug_inst_13_14_11_tsni(l, tmp4)
  });
  tmp = lambda;
  tmp1 = eliza.tails(l);
  lambda1 = (undefined, function (ls) {
    let tmp3;
    tmp3 = lz_map_inst_13_14_12_tsni(eliza.ucase, ls);
    return prefix_inst_13_14_40_tsni(key, tmp3)
  });
  tmp2 = NofibPrelude.filter_lz(lambda1, tmp1);
  return NofibPrelude.map_lz(tmp, tmp2)
};
lz_map_inst_13_14_12_tsni = function lz_map_inst_13_14_12_tsni(f, ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let param0, param1, h, t, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return (x, xs) => {
        return false
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp1 = runtime.safeCall(f(h));
      tmp2 = lz_map_inst_13_14_12_tsni(f, t);
      _deforest_LzCons_head = tmp1;
      _deforest_LzCons_tail = tmp2;
      return (x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_LzCons_head;
        param11 = _deforest_LzCons_tail;
        y = param01;
        ys = param11;
        tmp3 = NofibPrelude.listEq(x, y);
        tmp4 = prefix_inst_13_14_40_tsni(xs, ys);
        return tmp3 && tmp4
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
conjug_inst_13_14_11_tsni = function conjug_inst_13_14_11_tsni(d, w) {
  let maybe, conj, trailingI, tmp, tmp1, tmp2;
  maybe = function maybe(d1, xs) {
    let scrut;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      return d1
    } else {
      return xs
    }
  };
  conj = function conj(w1) {
    let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return (ys) => {
          return ys
        }
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          w_ = first0;
          m = first1;
          t = param1;
          tmp6 = ucase_inst_13_14_11_6_tsni(w1);
          scrut = listEq_inst_13_14_11_37_tsni(tmp6, w_);
          if (scrut === true) {
            tmp7 = lscomp(t);
            _deforest_Cons_head1 = m;
            _deforest_Cons_tail1 = tmp7;
            return (ys) => {
              let param01, param11, x, xs, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              x = param01;
              xs = param11;
              tmp8 = append_inst_13_14_11_8_tsni(xs, ys);
              _deforest_Cons_head2 = x;
              _deforest_Cons_tail2 = tmp8;
              return () => {
                return match_l_arm_Cons_inst_13_14_11_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
              }
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp3 = lscomp(eliza.conjugates);
    _deforest_Cons_head = w1;
    _deforest_Cons_tail = NofibPrelude.Nil;
    tmp4 = () => {
      return match_l_arm_Cons_inst_13_14_11_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = append_inst_13_14_11_8_tsni(tmp3, tmp4);
    return head_inst_13_14_11_38_tsni(tmp5)
  };
  trailingI = function trailingI(ls) {
    let cons;
    cons = function cons(x, xs) {
      let scrut, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      tmp5 = NofibPrelude.null_(xs);
      scrut = tmp4 && tmp5;
      if (scrut === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    };
    return foldr_inst_13_14_11_39_tsni(cons, NofibPrelude.Nil, ls)
  };
  tmp = maybe(d, w);
  tmp1 = map_inst_13_14_11_9_tsni(conj, tmp);
  tmp2 = trailingI(tmp1);
  return eliza.unwords(tmp2)
};
ucase_inst_13_14_11_6_tsni = function ucase_inst_13_14_11_6_tsni(ls) {
  return map_inst_13_14_11_6_7_tsni(eliza.toUpper, ls)
};
map_inst_13_14_11_6_7_tsni = function map_inst_13_14_11_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_14_11_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_13_14_11_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_13_14_11_8_tsni = function append_inst_13_14_11_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_13_14_11_9_tsni = function map_inst_13_14_11_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_14_11_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_13_14_11_39_tsni(f1, z, t);
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
answer_inst_15_16_tsni = function answer_inst_15_16_tsni(st, l) {
  let ans, cons, scrut, first1, first0, response, kt, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  cons = function cons(e, r_es) {
    let first11, first01, r, es, tmp2, arr1;
    if (globalThis.Array.isArray(r_es) && r_es.length === 2) {
      first01 = r_es[0];
      first11 = r_es[1];
      r = first01;
      es = first11;
      tmp2 = NofibPrelude.Cons(e, es);
      arr1 = [
        r,
        tmp2
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  };
  ans = function ans(e_es, l1) {
    let param0, param1, first11, first01, key, a_as, es, scrut1, param01, param11, a, as_, rs, scrut2, tmp2, arr1, tmp3, tmp4, tmp5, arr2, tmp6, arr3;
    if (e_es instanceof NofibPrelude.Cons.class) {
      param0 = e_es.head;
      param1 = e_es.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first01 = param0[0];
        first11 = param0[1];
        key = first01;
        a_as = first11;
        es = param1;
        scrut1 = NofibPrelude.force(a_as);
        if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          a = param01;
          as_ = param11;
          tmp2 = replies_inst_15_16_14_tsni(key, l1);
          rs = tmp2;
          scrut2 = eliza.null_lz(rs);
          if (scrut2 === true) {
            arr1 = [
              key,
              a_as
            ];
            tmp3 = ans(es, l1);
            return cons(arr1, tmp3)
          } else {
            tmp4 = NofibPrelude.head_lz(rs);
            tmp5 = eliza.makeResponse(a, tmp4);
            arr2 = [
              key,
              as_
            ];
            tmp6 = NofibPrelude.Cons(arr2, es);
            arr3 = [
              tmp5,
              tmp6
            ];
            return arr3
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
  };
  tmp = eliza.keyTabOf(st);
  scrut = ans(tmp, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_15_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
replies_inst_15_16_14_tsni = function replies_inst_15_16_14_tsni(key, l) {
  let tmp, tmp1, tmp2, lambda, lambda1;
  lambda = (undefined, function (x) {
    let tmp3, tmp4;
    tmp3 = NofibPrelude.listLen(key);
    tmp4 = NofibPrelude.drop(tmp3, x);
    return conjug_inst_15_16_14_11_tsni(l, tmp4)
  });
  tmp = lambda;
  tmp1 = eliza.tails(l);
  lambda1 = (undefined, function (ls) {
    let tmp3;
    tmp3 = lz_map_inst_15_16_14_12_tsni(eliza.ucase, ls);
    return prefix_inst_15_16_14_40_tsni(key, tmp3)
  });
  tmp2 = NofibPrelude.filter_lz(lambda1, tmp1);
  return NofibPrelude.map_lz(tmp, tmp2)
};
conjug_inst_15_16_14_11_tsni = function conjug_inst_15_16_14_11_tsni(d, w) {
  let maybe, conj, trailingI, tmp, tmp1, tmp2;
  maybe = function maybe(d1, xs) {
    let scrut;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      return d1
    } else {
      return xs
    }
  };
  conj = function conj(w1) {
    let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return (ys) => {
          return ys
        }
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          w_ = first0;
          m = first1;
          t = param1;
          tmp6 = ucase_inst_15_16_14_11_6_tsni(w1);
          scrut = listEq_inst_15_16_14_11_37_tsni(tmp6, w_);
          if (scrut === true) {
            tmp7 = lscomp(t);
            _deforest_Cons_head1 = m;
            _deforest_Cons_tail1 = tmp7;
            return (ys) => {
              let param01, param11, x, xs, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              x = param01;
              xs = param11;
              tmp8 = append_inst_15_16_14_11_8_tsni(xs, ys);
              _deforest_Cons_head2 = x;
              _deforest_Cons_tail2 = tmp8;
              return () => {
                return match_l_arm_Cons_inst_15_16_14_11_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
              }
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp3 = lscomp(eliza.conjugates);
    _deforest_Cons_head = w1;
    _deforest_Cons_tail = NofibPrelude.Nil;
    tmp4 = () => {
      return match_l_arm_Cons_inst_15_16_14_11_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = append_inst_15_16_14_11_8_tsni(tmp3, tmp4);
    return head_inst_15_16_14_11_38_tsni(tmp5)
  };
  trailingI = function trailingI(ls) {
    let cons;
    cons = function cons(x, xs) {
      let scrut, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      tmp5 = NofibPrelude.null_(xs);
      scrut = tmp4 && tmp5;
      if (scrut === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    };
    return foldr_inst_15_16_14_11_39_tsni(cons, NofibPrelude.Nil, ls)
  };
  tmp = maybe(d, w);
  tmp1 = map_inst_15_16_14_11_9_tsni(conj, tmp);
  tmp2 = trailingI(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_15_16_14_11_9_tsni = function map_inst_15_16_14_11_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_14_11_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_15_16_14_11_39_tsni(f1, z, t);
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
append_inst_15_16_14_11_8_tsni = function append_inst_15_16_14_11_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
ucase_inst_15_16_14_11_6_tsni = function ucase_inst_15_16_14_11_6_tsni(ls) {
  return map_inst_15_16_14_11_6_7_tsni(eliza.toUpper, ls)
};
map_inst_15_16_14_11_6_7_tsni = function map_inst_15_16_14_11_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_14_11_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_15_16_14_11_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lz_map_inst_15_16_14_12_tsni = function lz_map_inst_15_16_14_12_tsni(f, ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let param0, param1, h, t, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return (x, xs) => {
        return false
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp1 = runtime.safeCall(f(h));
      tmp2 = lz_map_inst_15_16_14_12_tsni(f, t);
      _deforest_LzCons_head = tmp1;
      _deforest_LzCons_tail = tmp2;
      return (x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_LzCons_head;
        param11 = _deforest_LzCons_tail;
        y = param01;
        ys = param11;
        tmp3 = NofibPrelude.listEq(x, y);
        tmp4 = prefix_inst_15_16_14_40_tsni(xs, ys);
        return tmp3 && tmp4
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
repeated_inst_15_17_tsni = function repeated_inst_15_17_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(kt_rp) && kt_rp.length === 2) {
    first0 = kt_rp[0];
    first1 = kt_rp[1];
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      arr = [
        kt,
        rp
      ];
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = arr;
      arr1 = (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_15_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
trim_inst_18_19_tsni = function trim_inst_18_19_tsni(ls) {
  let cons, tmp, lambda;
  cons = function cons(x, xs) {
    let scrut, scrut1, tmp1;
    tmp1 = NofibPrelude.nofibStringToList(" .!?,");
    scrut = NofibPrelude.inList(x, tmp1);
    if (scrut === true) {
      scrut1 = NofibPrelude.null_(xs);
      if (scrut1 === true) {
        return NofibPrelude.Nil
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    } else {
      return NofibPrelude.Cons(x, xs)
    }
  };
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList(" .!?,");
    return NofibPrelude.inList(x, tmp1)
  });
  tmp = dropWhile_inst_18_19_4_tsni(lambda, ls);
  return foldr_inst_18_19_36_tsni(cons, NofibPrelude.Nil, tmp)
};
dropWhile_inst_18_19_4_tsni = function dropWhile_inst_18_19_4_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_18_19_4_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return (f1, z) => {
        let param01, param11, h1, t1, tmp;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = foldr_inst_18_19_36_tsni(f1, z, t1);
        return runtime.safeCall(f1(h1, tmp))
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
words_inst_18_20_tsni = function words_inst_18_20_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_18_20_2_tsni(eliza.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_18_20_2_tsni = function dropWhile_inst_18_20_2_tsni(f, ls) {
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
      return dropWhile_inst_18_20_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_18_20_tsni(s_);
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
take_inst_18_21_tsni = function take_inst_18_21_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_18_22_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_18_22_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_18_21_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_18_22_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_18_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_18_23_17_tsni(rs);
              } else {
                tmp5 = answer_inst_18_23_16_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_18_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_18_22_tsni = function map_inst_18_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
session_inst_18_23_tsni = function session_inst_18_23_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_18_23_16_tsni = function answer_inst_18_23_16_tsni(st, l) {
  let ans, cons, scrut, first1, first0, response, kt, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  cons = function cons(e, r_es) {
    let first11, first01, r, es, tmp2, arr1;
    if (globalThis.Array.isArray(r_es) && r_es.length === 2) {
      first01 = r_es[0];
      first11 = r_es[1];
      r = first01;
      es = first11;
      tmp2 = NofibPrelude.Cons(e, es);
      arr1 = [
        r,
        tmp2
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  };
  ans = function ans(e_es, l1) {
    let param0, param1, first11, first01, key, a_as, es, scrut1, param01, param11, a, as_, rs, scrut2, tmp2, arr1, tmp3, tmp4, tmp5, arr2, tmp6, arr3;
    if (e_es instanceof NofibPrelude.Cons.class) {
      param0 = e_es.head;
      param1 = e_es.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first01 = param0[0];
        first11 = param0[1];
        key = first01;
        a_as = first11;
        es = param1;
        scrut1 = NofibPrelude.force(a_as);
        if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          a = param01;
          as_ = param11;
          tmp2 = replies_inst_18_23_16_14_tsni(key, l1);
          rs = tmp2;
          scrut2 = eliza.null_lz(rs);
          if (scrut2 === true) {
            arr1 = [
              key,
              a_as
            ];
            tmp3 = ans(es, l1);
            return cons(arr1, tmp3)
          } else {
            tmp4 = NofibPrelude.head_lz(rs);
            tmp5 = eliza.makeResponse(a, tmp4);
            arr2 = [
              key,
              as_
            ];
            tmp6 = NofibPrelude.Cons(arr2, es);
            arr3 = [
              tmp5,
              tmp6
            ];
            return arr3
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
  };
  tmp = eliza.keyTabOf(st);
  scrut = ans(tmp, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_23_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
replies_inst_18_23_16_14_tsni = function replies_inst_18_23_16_14_tsni(key, l) {
  let tmp, tmp1, tmp2, lambda, lambda1;
  lambda = (undefined, function (x) {
    let tmp3, tmp4;
    tmp3 = NofibPrelude.listLen(key);
    tmp4 = NofibPrelude.drop(tmp3, x);
    return conjug_inst_18_23_16_14_11_tsni(l, tmp4)
  });
  tmp = lambda;
  tmp1 = eliza.tails(l);
  lambda1 = (undefined, function (ls) {
    let tmp3;
    tmp3 = lz_map_inst_18_23_16_14_12_tsni(eliza.ucase, ls);
    return prefix_inst_18_23_16_14_40_tsni(key, tmp3)
  });
  tmp2 = NofibPrelude.filter_lz(lambda1, tmp1);
  return NofibPrelude.map_lz(tmp, tmp2)
};
lz_map_inst_18_23_16_14_12_tsni = function lz_map_inst_18_23_16_14_12_tsni(f, ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let param0, param1, h, t, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return (x, xs) => {
        return false
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp1 = runtime.safeCall(f(h));
      tmp2 = lz_map_inst_18_23_16_14_12_tsni(f, t);
      _deforest_LzCons_head = tmp1;
      _deforest_LzCons_tail = tmp2;
      return (x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_LzCons_head;
        param11 = _deforest_LzCons_tail;
        y = param01;
        ys = param11;
        tmp3 = NofibPrelude.listEq(x, y);
        tmp4 = prefix_inst_18_23_16_14_40_tsni(xs, ys);
        return tmp3 && tmp4
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
conjug_inst_18_23_16_14_11_tsni = function conjug_inst_18_23_16_14_11_tsni(d, w) {
  let maybe, conj, trailingI, tmp, tmp1, tmp2;
  maybe = function maybe(d1, xs) {
    let scrut;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      return d1
    } else {
      return xs
    }
  };
  conj = function conj(w1) {
    let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return (ys) => {
          return ys
        }
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          w_ = first0;
          m = first1;
          t = param1;
          tmp6 = ucase_inst_18_23_16_14_11_6_tsni(w1);
          scrut = listEq_inst_18_23_16_14_11_37_tsni(tmp6, w_);
          if (scrut === true) {
            tmp7 = lscomp(t);
            _deforest_Cons_head1 = m;
            _deforest_Cons_tail1 = tmp7;
            return (ys) => {
              let param01, param11, x, xs, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              x = param01;
              xs = param11;
              tmp8 = append_inst_18_23_16_14_11_8_tsni(xs, ys);
              _deforest_Cons_head2 = x;
              _deforest_Cons_tail2 = tmp8;
              return () => {
                return match_l_arm_Cons_inst_18_23_16_14_11_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
              }
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp3 = lscomp(eliza.conjugates);
    _deforest_Cons_head = w1;
    _deforest_Cons_tail = NofibPrelude.Nil;
    tmp4 = () => {
      return match_l_arm_Cons_inst_18_23_16_14_11_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = append_inst_18_23_16_14_11_8_tsni(tmp3, tmp4);
    return head_inst_18_23_16_14_11_38_tsni(tmp5)
  };
  trailingI = function trailingI(ls) {
    let cons;
    cons = function cons(x, xs) {
      let scrut, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      tmp5 = NofibPrelude.null_(xs);
      scrut = tmp4 && tmp5;
      if (scrut === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    };
    return foldr_inst_18_23_16_14_11_39_tsni(cons, NofibPrelude.Nil, ls)
  };
  tmp = maybe(d, w);
  tmp1 = map_inst_18_23_16_14_11_9_tsni(conj, tmp);
  tmp2 = trailingI(tmp1);
  return eliza.unwords(tmp2)
};
ucase_inst_18_23_16_14_11_6_tsni = function ucase_inst_18_23_16_14_11_6_tsni(ls) {
  return map_inst_18_23_16_14_11_6_7_tsni(eliza.toUpper, ls)
};
map_inst_18_23_16_14_11_6_7_tsni = function map_inst_18_23_16_14_11_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_18_23_16_14_11_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_18_23_16_14_11_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_18_23_16_14_11_8_tsni = function append_inst_18_23_16_14_11_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_18_23_16_14_11_9_tsni = function map_inst_18_23_16_14_11_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_18_23_16_14_11_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_18_23_16_14_11_39_tsni(f1, z, t);
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
repeated_inst_18_23_17_tsni = function repeated_inst_18_23_17_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(kt_rp) && kt_rp.length === 2) {
    first0 = kt_rp[0];
    first1 = kt_rp[1];
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      arr = [
        kt,
        rp
      ];
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = arr;
      arr1 = (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_18_23_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_18_24_tsni = function filter_inst_18_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
enumFromTo_inst_18_25_tsni = function enumFromTo_inst_18_25_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_18_25_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_18_28_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testEliza_nofib_inst_26_27_tsni = function testEliza_nofib_inst_26_27_tsni(n) {
  let input, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, lambda;
  tmp = NofibPrelude.nofibStringToList("Are we alone?");
  tmp1 = NofibPrelude.nofibStringToList("That the Roswell event was actually an alien encounter. Do you agreed?");
  tmp2 = NofibPrelude.nofibStringToList("But why not talk about you, its more fun.");
  tmp3 = NofibPrelude.nofibStringToList("I dont ask, you do");
  tmp4 = NofibPrelude.nofibStringToList("do ray me");
  tmp5 = NofibPrelude.nofibStringToList("Nop, thats because your a computer");
  tmp6 = NofibPrelude.nofibStringToList("you dont");
  tmp7 = NofibPrelude.nofibStringToList("Oh, a paranoid computer, ehh?");
  tmp8 = NofibPrelude.nofibStringToList("Tell me about *your* mother");
  tmp9 = NofibPrelude.nofibStringToList("No, what what was she like?");
  tmp10 = NofibPrelude.nofibStringToList("I'm asking questions, not you");
  tmp11 = NofibPrelude.nofibStringToList("no");
  tmp12 = NofibPrelude.nofibStringToList("yes");
  tmp13 = NofibPrelude.nofibStringToList("but I'm not");
  tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(tmp12, tmp14);
  tmp16 = NofibPrelude.Cons(tmp11, tmp15);
  tmp17 = NofibPrelude.Cons(tmp10, tmp16);
  tmp18 = NofibPrelude.Cons(tmp9, tmp17);
  tmp19 = NofibPrelude.Cons(tmp8, tmp18);
  tmp20 = NofibPrelude.Cons(tmp7, tmp19);
  tmp21 = NofibPrelude.Cons(tmp6, tmp20);
  tmp22 = NofibPrelude.Cons(tmp5, tmp21);
  tmp23 = NofibPrelude.Cons(tmp4, tmp22);
  tmp24 = NofibPrelude.Cons(tmp3, tmp23);
  tmp25 = NofibPrelude.Cons(tmp2, tmp24);
  tmp26 = NofibPrelude.Cons(tmp1, tmp25);
  tmp27 = NofibPrelude.Cons(tmp, tmp26);
  tmp28 = Predef.id(tmp27);
  input = tmp28;
  lambda = (undefined, function (i) {
    let tmp31, tmp32, tmp33, tmp34, lambda1, lambda2;
    tmp31 = NofibPrelude.intMod(i, 20);
    tmp32 = take_inst_26_27_21_tsni(tmp31, input);
    lambda1 = (undefined, function (x) {
      let tmp35;
      tmp35 = trim_inst_26_27_19_tsni(x);
      return words_inst_26_27_20_tsni(tmp35)
    });
    tmp33 = map_inst_26_27_22_tsni(lambda1, tmp32);
    lambda2 = (undefined, function (x) {
      let tmp35;
      tmp35 = NofibPrelude.null_(x);
      return Predef.not(tmp35)
    });
    tmp34 = filter_inst_26_27_24_tsni(lambda2, tmp33);
    return session_inst_26_27_23_tsni(eliza.initial, NofibPrelude.Nil, tmp34)
  });
  tmp29 = lambda;
  tmp30 = enumFromTo_inst_26_27_25_tsni(1, n);
  return map_inst_26_27_28_tsni(tmp29, tmp30)
};
enumFromTo_inst_26_27_25_tsni = function enumFromTo_inst_26_27_25_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_26_27_25_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_26_27_28_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_26_41_tsni(f1, xs);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
session_inst_26_27_23_tsni = function session_inst_26_27_23_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_26_27_23_16_tsni = function answer_inst_26_27_23_16_tsni(st, l) {
  let ans, cons, scrut, first1, first0, response, kt, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  cons = function cons(e, r_es) {
    let first11, first01, r, es, tmp2, arr1;
    if (globalThis.Array.isArray(r_es) && r_es.length === 2) {
      first01 = r_es[0];
      first11 = r_es[1];
      r = first01;
      es = first11;
      tmp2 = NofibPrelude.Cons(e, es);
      arr1 = [
        r,
        tmp2
      ];
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  };
  ans = function ans(e_es, l1) {
    let param0, param1, first11, first01, key, a_as, es, scrut1, param01, param11, a, as_, rs, scrut2, tmp2, arr1, tmp3, tmp4, tmp5, arr2, tmp6, arr3;
    if (e_es instanceof NofibPrelude.Cons.class) {
      param0 = e_es.head;
      param1 = e_es.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first01 = param0[0];
        first11 = param0[1];
        key = first01;
        a_as = first11;
        es = param1;
        scrut1 = NofibPrelude.force(a_as);
        if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          a = param01;
          as_ = param11;
          tmp2 = replies_inst_26_27_23_16_14_tsni(key, l1);
          rs = tmp2;
          scrut2 = eliza.null_lz(rs);
          if (scrut2 === true) {
            arr1 = [
              key,
              a_as
            ];
            tmp3 = ans(es, l1);
            return cons(arr1, tmp3)
          } else {
            tmp4 = NofibPrelude.head_lz(rs);
            tmp5 = eliza.makeResponse(a, tmp4);
            arr2 = [
              key,
              as_
            ];
            tmp6 = NofibPrelude.Cons(arr2, es);
            arr3 = [
              tmp5,
              tmp6
            ];
            return arr3
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
  };
  tmp = eliza.keyTabOf(st);
  scrut = ans(tmp, l);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_26_27_23_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
replies_inst_26_27_23_16_14_tsni = function replies_inst_26_27_23_16_14_tsni(key, l) {
  let tmp, tmp1, tmp2, lambda, lambda1;
  lambda = (undefined, function (x) {
    let tmp3, tmp4;
    tmp3 = NofibPrelude.listLen(key);
    tmp4 = NofibPrelude.drop(tmp3, x);
    return conjug_inst_26_27_23_16_14_11_tsni(l, tmp4)
  });
  tmp = lambda;
  tmp1 = eliza.tails(l);
  lambda1 = (undefined, function (ls) {
    let tmp3;
    tmp3 = lz_map_inst_26_27_23_16_14_12_tsni(eliza.ucase, ls);
    return prefix_inst_26_27_23_16_14_40_tsni(key, tmp3)
  });
  tmp2 = NofibPrelude.filter_lz(lambda1, tmp1);
  return NofibPrelude.map_lz(tmp, tmp2)
};
conjug_inst_26_27_23_16_14_11_tsni = function conjug_inst_26_27_23_16_14_11_tsni(d, w) {
  let maybe, conj, trailingI, tmp, tmp1, tmp2;
  maybe = function maybe(d1, xs) {
    let scrut;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      return d1
    } else {
      return xs
    }
  };
  conj = function conj(w1) {
    let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return (ys) => {
          return ys
        }
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          w_ = first0;
          m = first1;
          t = param1;
          tmp6 = ucase_inst_26_27_23_16_14_11_6_tsni(w1);
          scrut = listEq_inst_26_27_23_16_14_11_37_tsni(tmp6, w_);
          if (scrut === true) {
            tmp7 = lscomp(t);
            _deforest_Cons_head1 = m;
            _deforest_Cons_tail1 = tmp7;
            return (ys) => {
              let param01, param11, x, xs, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
              param01 = _deforest_Cons_head1;
              param11 = _deforest_Cons_tail1;
              x = param01;
              xs = param11;
              tmp8 = append_inst_26_27_23_16_14_11_8_tsni(xs, ys);
              _deforest_Cons_head2 = x;
              _deforest_Cons_tail2 = tmp8;
              return () => {
                return match_l_arm_Cons_inst_26_27_23_16_14_11_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
              }
            }
          } else {
            return lscomp(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp3 = lscomp(eliza.conjugates);
    _deforest_Cons_head = w1;
    _deforest_Cons_tail = NofibPrelude.Nil;
    tmp4 = () => {
      return match_l_arm_Cons_inst_26_27_23_16_14_11_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = append_inst_26_27_23_16_14_11_8_tsni(tmp3, tmp4);
    return head_inst_26_27_23_16_14_11_38_tsni(tmp5)
  };
  trailingI = function trailingI(ls) {
    let cons;
    cons = function cons(x, xs) {
      let scrut, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      tmp5 = NofibPrelude.null_(xs);
      scrut = tmp4 && tmp5;
      if (scrut === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    };
    return foldr_inst_26_27_23_16_14_11_39_tsni(cons, NofibPrelude.Nil, ls)
  };
  tmp = maybe(d, w);
  tmp1 = map_inst_26_27_23_16_14_11_9_tsni(conj, tmp);
  tmp2 = trailingI(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_26_27_23_16_14_11_9_tsni = function map_inst_26_27_23_16_14_11_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_23_16_14_11_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_26_27_23_16_14_11_39_tsni(f1, z, t);
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
append_inst_26_27_23_16_14_11_8_tsni = function append_inst_26_27_23_16_14_11_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
ucase_inst_26_27_23_16_14_11_6_tsni = function ucase_inst_26_27_23_16_14_11_6_tsni(ls) {
  return map_inst_26_27_23_16_14_11_6_7_tsni(eliza.toUpper, ls)
};
map_inst_26_27_23_16_14_11_6_7_tsni = function map_inst_26_27_23_16_14_11_6_7_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_23_16_14_11_6_7_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_26_27_23_16_14_11_37_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lz_map_inst_26_27_23_16_14_12_tsni = function lz_map_inst_26_27_23_16_14_12_tsni(f, ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let param0, param1, h, t, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return (x, xs) => {
        return false
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp1 = runtime.safeCall(f(h));
      tmp2 = lz_map_inst_26_27_23_16_14_12_tsni(f, t);
      _deforest_LzCons_head = tmp1;
      _deforest_LzCons_tail = tmp2;
      return (x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_LzCons_head;
        param11 = _deforest_LzCons_tail;
        y = param01;
        ys = param11;
        tmp3 = NofibPrelude.listEq(x, y);
        tmp4 = prefix_inst_26_27_23_16_14_40_tsni(xs, ys);
        return tmp3 && tmp4
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
repeated_inst_26_27_23_17_tsni = function repeated_inst_26_27_23_17_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(kt_rp) && kt_rp.length === 2) {
    first0 = kt_rp[0];
    first1 = kt_rp[1];
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      arr = [
        kt,
        rp
      ];
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = arr;
      arr1 = (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_26_27_23_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr1
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_26_27_24_tsni = function filter_inst_26_27_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_26_27_22_tsni = function map_inst_26_27_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
words_inst_26_27_20_tsni = function words_inst_26_27_20_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_26_27_20_2_tsni(eliza.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_26_27_20_2_tsni = function dropWhile_inst_26_27_20_2_tsni(f, ls) {
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
      return dropWhile_inst_26_27_20_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza.isSpace, tmp);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          w = first0;
          s_ = first1;
          tmp1 = words_inst_26_27_20_tsni(s_);
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
trim_inst_26_27_19_tsni = function trim_inst_26_27_19_tsni(ls) {
  let cons, tmp, lambda;
  cons = function cons(x, xs) {
    let scrut, scrut1, tmp1;
    tmp1 = NofibPrelude.nofibStringToList(" .!?,");
    scrut = NofibPrelude.inList(x, tmp1);
    if (scrut === true) {
      scrut1 = NofibPrelude.null_(xs);
      if (scrut1 === true) {
        return NofibPrelude.Nil
      } else {
        return NofibPrelude.Cons(x, xs)
      }
    } else {
      return NofibPrelude.Cons(x, xs)
    }
  };
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList(" .!?,");
    return NofibPrelude.inList(x, tmp1)
  });
  tmp = dropWhile_inst_26_27_19_4_tsni(lambda, ls);
  return foldr_inst_26_27_19_36_tsni(cons, NofibPrelude.Nil, tmp)
};
dropWhile_inst_26_27_19_4_tsni = function dropWhile_inst_26_27_19_4_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return dropWhile_inst_26_27_19_4_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return (f1, z) => {
        let param01, param11, h1, t1, tmp;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp = foldr_inst_26_27_19_36_tsni(f1, z, t1);
        return runtime.safeCall(f1(h1, tmp))
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
take_inst_26_27_21_tsni = function take_inst_26_27_21_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_26_27_22_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_26_27_22_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_26_27_21_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_26_27_22_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_26_27_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_26_27_23_17_tsni(rs);
              } else {
                tmp5 = answer_inst_26_27_23_16_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_26_27_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_26_27_28_tsni = function map_inst_26_27_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_26_27_23_29_tsni = function append_inst_26_27_23_29_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_26_27_23_29_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_26_42_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_26_27_23_30_tsni = function append_inst_26_27_23_30_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_26_27_23_30_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_26_42_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_31_tsni = function concat_inst_31_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_32_tsni = function append_inst_31_32_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
prepare_inst_33_tsni = function prepare_inst_33_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  return NofibPrelude.map(tmp, ls)
};
append_inst_34_tsni = function append_inst_34_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
break__inst_1_35_tsni = function break__inst_1_35_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
foldr_inst_3_36_tsni = function foldr_inst_3_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_5_37_tsni = function listEq_inst_5_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_5_38_tsni = function head_inst_5_38_tsni(l) {
  return runtime.safeCall(l())
};
foldr_inst_5_39_tsni = function foldr_inst_5_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_10_11_39_tsni = function foldr_inst_10_11_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
head_inst_10_11_38_tsni = function head_inst_10_11_38_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_10_11_37_tsni = function listEq_inst_10_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
prefix_inst_10_40_tsni = function prefix_inst_10_40_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw new globalThis.Error("match error");
  }
};
prefix_inst_13_14_40_tsni = function prefix_inst_13_14_40_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw new globalThis.Error("match error");
  }
};
listEq_inst_13_14_11_37_tsni = function listEq_inst_13_14_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_13_14_11_38_tsni = function head_inst_13_14_11_38_tsni(l) {
  return runtime.safeCall(l())
};
foldr_inst_13_14_11_39_tsni = function foldr_inst_13_14_11_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_15_16_14_11_39_tsni = function foldr_inst_15_16_14_11_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
head_inst_15_16_14_11_38_tsni = function head_inst_15_16_14_11_38_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_15_16_14_11_37_tsni = function listEq_inst_15_16_14_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
prefix_inst_15_16_14_40_tsni = function prefix_inst_15_16_14_40_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw new globalThis.Error("match error");
  }
};
foldr_inst_18_19_36_tsni = function foldr_inst_18_19_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_18_23_16_14_40_tsni = function prefix_inst_18_23_16_14_40_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw new globalThis.Error("match error");
  }
};
listEq_inst_18_23_16_14_11_37_tsni = function listEq_inst_18_23_16_14_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_18_23_16_14_11_38_tsni = function head_inst_18_23_16_14_11_38_tsni(l) {
  return runtime.safeCall(l())
};
foldr_inst_18_23_16_14_11_39_tsni = function foldr_inst_18_23_16_14_11_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_18_28_tsni = function map_inst_18_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_26_27_23_16_14_11_39_tsni = function foldr_inst_26_27_23_16_14_11_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
head_inst_26_27_23_16_14_11_38_tsni = function head_inst_26_27_23_16_14_11_38_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_26_27_23_16_14_11_37_tsni = function listEq_inst_26_27_23_16_14_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
prefix_inst_26_27_23_16_14_40_tsni = function prefix_inst_26_27_23_16_14_40_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw new globalThis.Error("match error");
  }
};
foldr_inst_26_27_19_36_tsni = function foldr_inst_26_27_19_36_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_26_41_tsni = function map_inst_26_41_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
nofibListToString_inst_26_42_tsni = function nofibListToString_inst_26_42_tsni(ls) {
  return runtime.safeCall(ls())
};
(class eliza {
  static {
    eliza1 = eliza;
    let lscomp, prepare, lscomp1, canYou, canI, youAre, iDont, iFeel, whyDont, whyCant, areYou, iCant, iAm, you, yes, no, computer, iWant, question, name, because, sorry, dream, hello, maybe, your, always, think, alike, friend, nokeyMsgs, oneways, bothways, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, arr, tmp230, arr1, tmp231, arr2, tmp232, arr3, tmp233, arr4, tmp234, arr5, tmp235, arr6, tmp236, arr7, tmp237, arr8, tmp238, arr9, tmp239, arr10, tmp240, arr11, tmp241, arr12, tmp242, arr13, tmp243, arr14, tmp244, arr15, tmp245, arr16, tmp246, arr17, tmp247, arr18, tmp248, arr19, tmp249, arr20, tmp250, arr21, tmp251, arr22, tmp252, arr23, tmp253, arr24, tmp254, arr25, tmp255, arr26, tmp256, arr27, tmp257, arr28, tmp258, arr29, tmp259, arr30, tmp260, arr31, tmp261, arr32, tmp262, arr33, tmp263, arr34, tmp264, arr35, tmp265, arr36, tmp266, arr37, tmp267, arr38, arr39, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, arr40, tmp311, tmp312, arr41, tmp313, tmp314, tmp315, arr42, tmp316, tmp317, arr43, tmp318, tmp319, arr44, tmp320, tmp321, arr45, tmp322, tmp323, arr46, tmp324, tmp325, arr47, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
    tmp = NofibPrelude.nofibStringToList("Why did you repeat yourself?");
    tmp1 = NofibPrelude.nofibStringToList("Do you expect a different answer by repeating yourself?");
    tmp2 = NofibPrelude.nofibStringToList("Come, come, elucidate your thoughts.");
    tmp3 = NofibPrelude.nofibStringToList("Please don't repeat yourself!");
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = Predef.id(tmp7);
    this.repeatMsgs = tmp8;
    tmp9 = NofibPrelude.nofibStringToList("?Don_t you believe that I can");
    tmp10 = NofibPrelude.nofibStringToList("?Perhaps you would like to be able to");
    tmp11 = NofibPrelude.nofibStringToList("?You want me to be able to");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    canYou = tmp14;
    tmp15 = NofibPrelude.nofibStringToList("?Perhaps you don_t want to");
    tmp16 = NofibPrelude.nofibStringToList("?Do you want to be able to");
    tmp17 = NofibPrelude.Cons(tmp16, NofibPrelude.Nil);
    tmp18 = NofibPrelude.Cons(tmp15, tmp17);
    canI = tmp18;
    tmp19 = NofibPrelude.nofibStringToList("?What makes you think I am");
    tmp20 = NofibPrelude.nofibStringToList("?Does it please you to believe I am");
    tmp21 = NofibPrelude.nofibStringToList("?Perhaps you would like to be");
    tmp22 = NofibPrelude.nofibStringToList("?Do you sometimes wish you were");
    tmp23 = NofibPrelude.Cons(tmp22, NofibPrelude.Nil);
    tmp24 = NofibPrelude.Cons(tmp21, tmp23);
    tmp25 = NofibPrelude.Cons(tmp20, tmp24);
    tmp26 = NofibPrelude.Cons(tmp19, tmp25);
    youAre = tmp26;
    tmp27 = NofibPrelude.nofibStringToList("?Don_t you really");
    tmp28 = NofibPrelude.nofibStringToList("?Why don_t you");
    tmp29 = NofibPrelude.nofibStringToList("?Do you wish to be able to");
    tmp30 = NofibPrelude.nofibStringToList("Does that trouble you?");
    tmp31 = NofibPrelude.Cons(tmp30, NofibPrelude.Nil);
    tmp32 = NofibPrelude.Cons(tmp29, tmp31);
    tmp33 = NofibPrelude.Cons(tmp28, tmp32);
    tmp34 = NofibPrelude.Cons(tmp27, tmp33);
    iDont = tmp34;
    tmp35 = NofibPrelude.nofibStringToList("Tell me more about such feelings.");
    tmp36 = NofibPrelude.nofibStringToList("?Do you often feel");
    tmp37 = NofibPrelude.nofibStringToList("?Do you enjoy feeling");
    tmp38 = NofibPrelude.Cons(tmp37, NofibPrelude.Nil);
    tmp39 = NofibPrelude.Cons(tmp36, tmp38);
    tmp40 = NofibPrelude.Cons(tmp35, tmp39);
    iFeel = tmp40;
    tmp41 = NofibPrelude.nofibStringToList("?Do you really believe I don't");
    tmp42 = NofibPrelude.nofibStringToList(".Perhaps in good time I will");
    tmp43 = NofibPrelude.nofibStringToList("?Do you want me to");
    tmp44 = NofibPrelude.Cons(tmp43, NofibPrelude.Nil);
    tmp45 = NofibPrelude.Cons(tmp42, tmp44);
    tmp46 = NofibPrelude.Cons(tmp41, tmp45);
    whyDont = tmp46;
    tmp47 = NofibPrelude.nofibStringToList("?Do you think you should be able to");
    tmp48 = NofibPrelude.nofibStringToList("?Why can't you");
    tmp49 = NofibPrelude.Cons(tmp48, NofibPrelude.Nil);
    tmp50 = NofibPrelude.Cons(tmp47, tmp49);
    whyCant = tmp50;
    tmp51 = NofibPrelude.nofibStringToList("?Why are you interested in whether or not I am");
    tmp52 = NofibPrelude.nofibStringToList("?Would you prefer if I were not");
    tmp53 = NofibPrelude.nofibStringToList("?Perhaps in your fantasies I am");
    tmp54 = NofibPrelude.Cons(tmp53, NofibPrelude.Nil);
    tmp55 = NofibPrelude.Cons(tmp52, tmp54);
    tmp56 = NofibPrelude.Cons(tmp51, tmp55);
    areYou = tmp56;
    tmp57 = NofibPrelude.nofibStringToList("?How do you know you can't");
    tmp58 = NofibPrelude.nofibStringToList("Have you tried?");
    tmp59 = NofibPrelude.nofibStringToList("?Perhaps you can now");
    tmp60 = NofibPrelude.Cons(tmp59, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(tmp58, tmp60);
    tmp62 = NofibPrelude.Cons(tmp57, tmp61);
    iCant = tmp62;
    tmp63 = NofibPrelude.nofibStringToList("?Did you come to me because you are");
    tmp64 = NofibPrelude.nofibStringToList("?How long have you been");
    tmp65 = NofibPrelude.nofibStringToList("?Do you believe it is normal to be");
    tmp66 = NofibPrelude.nofibStringToList("?Do you enjoy being");
    tmp67 = NofibPrelude.Cons(tmp66, NofibPrelude.Nil);
    tmp68 = NofibPrelude.Cons(tmp65, tmp67);
    tmp69 = NofibPrelude.Cons(tmp64, tmp68);
    tmp70 = NofibPrelude.Cons(tmp63, tmp69);
    iAm = tmp70;
    tmp71 = NofibPrelude.nofibStringToList("We were discussing you --not me.");
    tmp72 = NofibPrelude.nofibStringToList("?Oh,");
    tmp73 = NofibPrelude.nofibStringToList("You're not really talking about me, are you?");
    tmp74 = NofibPrelude.Cons(tmp73, NofibPrelude.Nil);
    tmp75 = NofibPrelude.Cons(tmp72, tmp74);
    tmp76 = NofibPrelude.Cons(tmp71, tmp75);
    you = tmp76;
    tmp77 = NofibPrelude.nofibStringToList("You seem quite positive.");
    tmp78 = NofibPrelude.nofibStringToList("Are you Sure?");
    tmp79 = NofibPrelude.nofibStringToList("I see.");
    tmp80 = NofibPrelude.nofibStringToList("I understand.");
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp79, tmp81);
    tmp83 = NofibPrelude.Cons(tmp78, tmp82);
    tmp84 = NofibPrelude.Cons(tmp77, tmp83);
    yes = tmp84;
    tmp85 = NofibPrelude.nofibStringToList("Are you saying no just to be negative?");
    tmp86 = NofibPrelude.nofibStringToList("You are being a bit negative.");
    tmp87 = NofibPrelude.nofibStringToList("Why not?");
    tmp88 = NofibPrelude.nofibStringToList("Are you sure?");
    tmp89 = NofibPrelude.nofibStringToList("Why no?");
    tmp90 = NofibPrelude.Cons(tmp89, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(tmp88, tmp90);
    tmp92 = NofibPrelude.Cons(tmp87, tmp91);
    tmp93 = NofibPrelude.Cons(tmp86, tmp92);
    tmp94 = NofibPrelude.Cons(tmp85, tmp93);
    no = tmp94;
    tmp95 = NofibPrelude.nofibStringToList("Do computers worry you?");
    tmp96 = NofibPrelude.nofibStringToList("Are you talking about me in particular?");
    tmp97 = NofibPrelude.nofibStringToList("Are you frightened by machines?");
    tmp98 = NofibPrelude.nofibStringToList("Why do you mention computers?");
    tmp99 = NofibPrelude.nofibStringToList("What do you think machines have to do with your problems?");
    tmp100 = NofibPrelude.nofibStringToList("Don't you think computers can help people?");
    tmp101 = NofibPrelude.nofibStringToList("What is it about machines that worries you?");
    tmp102 = NofibPrelude.Cons(tmp101, NofibPrelude.Nil);
    tmp103 = NofibPrelude.Cons(tmp100, tmp102);
    tmp104 = NofibPrelude.Cons(tmp99, tmp103);
    tmp105 = NofibPrelude.Cons(tmp98, tmp104);
    tmp106 = NofibPrelude.Cons(tmp97, tmp105);
    tmp107 = NofibPrelude.Cons(tmp96, tmp106);
    tmp108 = NofibPrelude.Cons(tmp95, tmp107);
    computer = tmp108;
    tmp109 = NofibPrelude.nofibStringToList("?Why do you want");
    tmp110 = NofibPrelude.nofibStringToList("?What would it mean to you if you got");
    tmp111 = NofibPrelude.nofibStringToList("?Suppose you got");
    tmp112 = NofibPrelude.nofibStringToList("?What if you never got");
    tmp113 = NofibPrelude.nofibStringToList(".I sometimes also want");
    tmp114 = NofibPrelude.Cons(tmp113, NofibPrelude.Nil);
    tmp115 = NofibPrelude.Cons(tmp112, tmp114);
    tmp116 = NofibPrelude.Cons(tmp111, tmp115);
    tmp117 = NofibPrelude.Cons(tmp110, tmp116);
    tmp118 = NofibPrelude.Cons(tmp109, tmp117);
    iWant = tmp118;
    tmp119 = NofibPrelude.nofibStringToList("Why do you ask?");
    tmp120 = NofibPrelude.nofibStringToList("Does that question interest you?");
    tmp121 = NofibPrelude.nofibStringToList("What answer would please you the most?");
    tmp122 = NofibPrelude.nofibStringToList("What do you think?");
    tmp123 = NofibPrelude.nofibStringToList("Are such questions on your mind often?");
    tmp124 = NofibPrelude.nofibStringToList("What is it that you really want to know?");
    tmp125 = NofibPrelude.nofibStringToList("Have you asked anyone else?");
    tmp126 = NofibPrelude.nofibStringToList("Have you asked such questions before?");
    tmp127 = NofibPrelude.nofibStringToList("What else comes to mind when you ask that?");
    tmp128 = NofibPrelude.Cons(tmp127, NofibPrelude.Nil);
    tmp129 = NofibPrelude.Cons(tmp126, tmp128);
    tmp130 = NofibPrelude.Cons(tmp125, tmp129);
    tmp131 = NofibPrelude.Cons(tmp124, tmp130);
    tmp132 = NofibPrelude.Cons(tmp123, tmp131);
    tmp133 = NofibPrelude.Cons(tmp122, tmp132);
    tmp134 = NofibPrelude.Cons(tmp121, tmp133);
    tmp135 = NofibPrelude.Cons(tmp120, tmp134);
    tmp136 = NofibPrelude.Cons(tmp119, tmp135);
    question = tmp136;
    tmp137 = NofibPrelude.nofibStringToList("Names don't interest me.");
    tmp138 = NofibPrelude.nofibStringToList("I don't care about names --please go on.");
    tmp139 = NofibPrelude.Cons(tmp138, NofibPrelude.Nil);
    tmp140 = NofibPrelude.Cons(tmp137, tmp139);
    name = tmp140;
    tmp141 = NofibPrelude.nofibStringToList("Is that the real reason?");
    tmp142 = NofibPrelude.nofibStringToList("Don't any other reasons come to mind?");
    tmp143 = NofibPrelude.nofibStringToList("Does that reason explain anything else?");
    tmp144 = NofibPrelude.nofibStringToList("What other reasons might there be?");
    tmp145 = NofibPrelude.Cons(tmp144, NofibPrelude.Nil);
    tmp146 = NofibPrelude.Cons(tmp143, tmp145);
    tmp147 = NofibPrelude.Cons(tmp142, tmp146);
    tmp148 = NofibPrelude.Cons(tmp141, tmp147);
    because = tmp148;
    tmp149 = NofibPrelude.nofibStringToList("Please don't apologise!");
    tmp150 = NofibPrelude.nofibStringToList("Apologies are not necessary.");
    tmp151 = NofibPrelude.nofibStringToList("What feelings do you have when you apologise?");
    tmp152 = NofibPrelude.nofibStringToList("Don't be so defensive!");
    tmp153 = NofibPrelude.Cons(tmp152, NofibPrelude.Nil);
    tmp154 = NofibPrelude.Cons(tmp151, tmp153);
    tmp155 = NofibPrelude.Cons(tmp150, tmp154);
    tmp156 = NofibPrelude.Cons(tmp149, tmp155);
    sorry = tmp156;
    tmp157 = NofibPrelude.nofibStringToList("What does that dream suggest to you?");
    tmp158 = NofibPrelude.nofibStringToList("Do you dream often?");
    tmp159 = NofibPrelude.nofibStringToList("What persons appear in your dreams?");
    tmp160 = NofibPrelude.nofibStringToList("Are you disturbed by your dreams?");
    tmp161 = NofibPrelude.Cons(tmp160, NofibPrelude.Nil);
    tmp162 = NofibPrelude.Cons(tmp159, tmp161);
    tmp163 = NofibPrelude.Cons(tmp158, tmp162);
    tmp164 = NofibPrelude.Cons(tmp157, tmp163);
    dream = tmp164;
    tmp165 = NofibPrelude.nofibStringToList("How do you...please state your problem.");
    tmp166 = NofibPrelude.Cons(tmp165, NofibPrelude.Nil);
    hello = tmp166;
    tmp167 = NofibPrelude.nofibStringToList("You don't seem quite certain.");
    tmp168 = NofibPrelude.nofibStringToList("Why the uncertain tone?");
    tmp169 = NofibPrelude.nofibStringToList("Can't you be more positive?");
    tmp170 = NofibPrelude.nofibStringToList("You aren't sure?");
    tmp171 = NofibPrelude.nofibStringToList("Don't you know?");
    tmp172 = NofibPrelude.Cons(tmp171, NofibPrelude.Nil);
    tmp173 = NofibPrelude.Cons(tmp170, tmp172);
    tmp174 = NofibPrelude.Cons(tmp169, tmp173);
    tmp175 = NofibPrelude.Cons(tmp168, tmp174);
    tmp176 = NofibPrelude.Cons(tmp167, tmp175);
    maybe = tmp176;
    tmp177 = NofibPrelude.nofibStringToList("?Why are you concerned about my");
    tmp178 = NofibPrelude.nofibStringToList("?What about your own");
    tmp179 = NofibPrelude.Cons(tmp178, NofibPrelude.Nil);
    tmp180 = NofibPrelude.Cons(tmp177, tmp179);
    your = tmp180;
    tmp181 = NofibPrelude.nofibStringToList("Can you think of a specific example?");
    tmp182 = NofibPrelude.nofibStringToList("When?");
    tmp183 = NofibPrelude.nofibStringToList("What are you thinking of?");
    tmp184 = NofibPrelude.nofibStringToList("Really, always?");
    tmp185 = NofibPrelude.Cons(tmp184, NofibPrelude.Nil);
    tmp186 = NofibPrelude.Cons(tmp183, tmp185);
    tmp187 = NofibPrelude.Cons(tmp182, tmp186);
    tmp188 = NofibPrelude.Cons(tmp181, tmp187);
    always = tmp188;
    tmp189 = NofibPrelude.nofibStringToList("Do you really think so?");
    tmp190 = NofibPrelude.nofibStringToList("?But you are not sure you");
    tmp191 = NofibPrelude.nofibStringToList("?Do you doubt you");
    tmp192 = NofibPrelude.Cons(tmp191, NofibPrelude.Nil);
    tmp193 = NofibPrelude.Cons(tmp190, tmp192);
    tmp194 = NofibPrelude.Cons(tmp189, tmp193);
    think = tmp194;
    tmp195 = NofibPrelude.nofibStringToList("In what way?");
    tmp196 = NofibPrelude.nofibStringToList("What resemblence do you see?");
    tmp197 = NofibPrelude.nofibStringToList("What does the similarity suggest to you?");
    tmp198 = NofibPrelude.nofibStringToList("What other connections do you see?");
    tmp199 = NofibPrelude.nofibStringToList("Cound there really be some connection?");
    tmp200 = NofibPrelude.nofibStringToList("How?");
    tmp201 = NofibPrelude.Cons(tmp200, NofibPrelude.Nil);
    tmp202 = NofibPrelude.Cons(tmp199, tmp201);
    tmp203 = NofibPrelude.Cons(tmp198, tmp202);
    tmp204 = NofibPrelude.Cons(tmp197, tmp203);
    tmp205 = NofibPrelude.Cons(tmp196, tmp204);
    tmp206 = NofibPrelude.Cons(tmp195, tmp205);
    alike = tmp206;
    tmp207 = NofibPrelude.nofibStringToList("Why do you bring up the topic of friends?");
    tmp208 = NofibPrelude.nofibStringToList("Do your friends worry you?");
    tmp209 = NofibPrelude.nofibStringToList("Do your friends pick on you?");
    tmp210 = NofibPrelude.nofibStringToList("Are you sure you have any friends?");
    tmp211 = NofibPrelude.nofibStringToList("Do you impose on your friends?");
    tmp212 = NofibPrelude.nofibStringToList("Perhaps your love for friends worries you.");
    tmp213 = NofibPrelude.Cons(tmp212, NofibPrelude.Nil);
    tmp214 = NofibPrelude.Cons(tmp211, tmp213);
    tmp215 = NofibPrelude.Cons(tmp210, tmp214);
    tmp216 = NofibPrelude.Cons(tmp209, tmp215);
    tmp217 = NofibPrelude.Cons(tmp208, tmp216);
    tmp218 = NofibPrelude.Cons(tmp207, tmp217);
    friend = tmp218;
    tmp219 = NofibPrelude.nofibStringToList("I'm not sure I understand you fully.");
    tmp220 = NofibPrelude.nofibStringToList("What does that suggest to you?");
    tmp221 = NofibPrelude.nofibStringToList("I see.");
    tmp222 = NofibPrelude.nofibStringToList("Can you elaborate on that?");
    tmp223 = NofibPrelude.nofibStringToList("Say, do you have any psychological problems?");
    tmp224 = NofibPrelude.Cons(tmp223, NofibPrelude.Nil);
    tmp225 = NofibPrelude.Cons(tmp222, tmp224);
    tmp226 = NofibPrelude.Cons(tmp221, tmp225);
    tmp227 = NofibPrelude.Cons(tmp220, tmp226);
    tmp228 = NofibPrelude.Cons(tmp219, tmp227);
    nokeyMsgs = tmp228;
    tmp229 = NofibPrelude.nofibStringToList("CAN YOU");
    arr = [
      tmp229,
      canYou
    ];
    tmp230 = NofibPrelude.nofibStringToList("CAN I");
    arr1 = [
      tmp230,
      canI
    ];
    tmp231 = NofibPrelude.nofibStringToList("YOU ARE");
    arr2 = [
      tmp231,
      youAre
    ];
    tmp232 = NofibPrelude.nofibStringToList("YOU'RE");
    arr3 = [
      tmp232,
      youAre
    ];
    tmp233 = NofibPrelude.nofibStringToList("I DON'T");
    arr4 = [
      tmp233,
      iDont
    ];
    tmp234 = NofibPrelude.nofibStringToList("I FEEL");
    arr5 = [
      tmp234,
      iFeel
    ];
    tmp235 = NofibPrelude.nofibStringToList("WHY DON'T YOU");
    arr6 = [
      tmp235,
      whyDont
    ];
    tmp236 = NofibPrelude.nofibStringToList("WHY CAN'T I");
    arr7 = [
      tmp236,
      whyCant
    ];
    tmp237 = NofibPrelude.nofibStringToList("ARE YOU");
    arr8 = [
      tmp237,
      areYou
    ];
    tmp238 = NofibPrelude.nofibStringToList("I CAN'T");
    arr9 = [
      tmp238,
      iCant
    ];
    tmp239 = NofibPrelude.nofibStringToList("I AM");
    arr10 = [
      tmp239,
      iAm
    ];
    tmp240 = NofibPrelude.nofibStringToList("I'M");
    arr11 = [
      tmp240,
      iAm
    ];
    tmp241 = NofibPrelude.nofibStringToList("YOU");
    arr12 = [
      tmp241,
      you
    ];
    tmp242 = NofibPrelude.nofibStringToList("YES");
    arr13 = [
      tmp242,
      yes
    ];
    tmp243 = NofibPrelude.nofibStringToList("NO");
    arr14 = [
      tmp243,
      no
    ];
    tmp244 = NofibPrelude.nofibStringToList("COMPUTER");
    arr15 = [
      tmp244,
      computer
    ];
    tmp245 = NofibPrelude.nofibStringToList("COMPUTERS");
    arr16 = [
      tmp245,
      computer
    ];
    tmp246 = NofibPrelude.nofibStringToList("I WANT");
    arr17 = [
      tmp246,
      iWant
    ];
    tmp247 = NofibPrelude.nofibStringToList("WHAT");
    arr18 = [
      tmp247,
      question
    ];
    tmp248 = NofibPrelude.nofibStringToList("HOW");
    arr19 = [
      tmp248,
      question
    ];
    tmp249 = NofibPrelude.nofibStringToList("WHO");
    arr20 = [
      tmp249,
      question
    ];
    tmp250 = NofibPrelude.nofibStringToList("WHERE");
    arr21 = [
      tmp250,
      question
    ];
    tmp251 = NofibPrelude.nofibStringToList("WHEN");
    arr22 = [
      tmp251,
      question
    ];
    tmp252 = NofibPrelude.nofibStringToList("NAME");
    arr23 = [
      tmp252,
      name
    ];
    tmp253 = NofibPrelude.nofibStringToList("WHY");
    arr24 = [
      tmp253,
      question
    ];
    tmp254 = NofibPrelude.nofibStringToList("CAUSE");
    arr25 = [
      tmp254,
      because
    ];
    tmp255 = NofibPrelude.nofibStringToList("BECAUSE");
    arr26 = [
      tmp255,
      because
    ];
    tmp256 = NofibPrelude.nofibStringToList("DREAM");
    arr27 = [
      tmp256,
      dream
    ];
    tmp257 = NofibPrelude.nofibStringToList("SORRY");
    arr28 = [
      tmp257,
      sorry
    ];
    tmp258 = NofibPrelude.nofibStringToList("HI");
    arr29 = [
      tmp258,
      hello
    ];
    tmp259 = NofibPrelude.nofibStringToList("DREAMS");
    arr30 = [
      tmp259,
      dream
    ];
    tmp260 = NofibPrelude.nofibStringToList("MAYBE");
    arr31 = [
      tmp260,
      maybe
    ];
    tmp261 = NofibPrelude.nofibStringToList("HELLO");
    arr32 = [
      tmp261,
      hello
    ];
    tmp262 = NofibPrelude.nofibStringToList("ALWAYS");
    arr33 = [
      tmp262,
      always
    ];
    tmp263 = NofibPrelude.nofibStringToList("YOUR");
    arr34 = [
      tmp263,
      your
    ];
    tmp264 = NofibPrelude.nofibStringToList("ALIKE");
    arr35 = [
      tmp264,
      alike
    ];
    tmp265 = NofibPrelude.nofibStringToList("THINK");
    arr36 = [
      tmp265,
      think
    ];
    tmp266 = NofibPrelude.nofibStringToList("FRIENDS");
    arr37 = [
      tmp266,
      friend
    ];
    tmp267 = NofibPrelude.nofibStringToList("FRIEND");
    arr38 = [
      tmp267,
      friend
    ];
    arr39 = [
      NofibPrelude.Nil,
      nokeyMsgs
    ];
    tmp268 = NofibPrelude.Cons(arr39, NofibPrelude.Nil);
    tmp269 = NofibPrelude.Cons(arr38, tmp268);
    tmp270 = NofibPrelude.Cons(arr37, tmp269);
    tmp271 = NofibPrelude.Cons(arr36, tmp270);
    tmp272 = NofibPrelude.Cons(arr35, tmp271);
    tmp273 = NofibPrelude.Cons(arr34, tmp272);
    tmp274 = NofibPrelude.Cons(arr33, tmp273);
    tmp275 = NofibPrelude.Cons(arr32, tmp274);
    tmp276 = NofibPrelude.Cons(arr31, tmp275);
    tmp277 = NofibPrelude.Cons(arr30, tmp276);
    tmp278 = NofibPrelude.Cons(arr29, tmp277);
    tmp279 = NofibPrelude.Cons(arr28, tmp278);
    tmp280 = NofibPrelude.Cons(arr27, tmp279);
    tmp281 = NofibPrelude.Cons(arr26, tmp280);
    tmp282 = NofibPrelude.Cons(arr25, tmp281);
    tmp283 = NofibPrelude.Cons(arr24, tmp282);
    tmp284 = NofibPrelude.Cons(arr23, tmp283);
    tmp285 = NofibPrelude.Cons(arr22, tmp284);
    tmp286 = NofibPrelude.Cons(arr21, tmp285);
    tmp287 = NofibPrelude.Cons(arr20, tmp286);
    tmp288 = NofibPrelude.Cons(arr19, tmp287);
    tmp289 = NofibPrelude.Cons(arr18, tmp288);
    tmp290 = NofibPrelude.Cons(arr17, tmp289);
    tmp291 = NofibPrelude.Cons(arr16, tmp290);
    tmp292 = NofibPrelude.Cons(arr15, tmp291);
    tmp293 = NofibPrelude.Cons(arr14, tmp292);
    tmp294 = NofibPrelude.Cons(arr13, tmp293);
    tmp295 = NofibPrelude.Cons(arr12, tmp294);
    tmp296 = NofibPrelude.Cons(arr11, tmp295);
    tmp297 = NofibPrelude.Cons(arr10, tmp296);
    tmp298 = NofibPrelude.Cons(arr9, tmp297);
    tmp299 = NofibPrelude.Cons(arr8, tmp298);
    tmp300 = NofibPrelude.Cons(arr7, tmp299);
    tmp301 = NofibPrelude.Cons(arr6, tmp300);
    tmp302 = NofibPrelude.Cons(arr5, tmp301);
    tmp303 = NofibPrelude.Cons(arr4, tmp302);
    tmp304 = NofibPrelude.Cons(arr3, tmp303);
    tmp305 = NofibPrelude.Cons(arr2, tmp304);
    tmp306 = NofibPrelude.Cons(arr1, tmp305);
    tmp307 = NofibPrelude.Cons(arr, tmp306);
    tmp308 = Predef.id(tmp307);
    this.respMsgs = tmp308;
    lscomp = function lscomp(ls) {
      let param0, param1, first1, first0, k, rs, t, tmp336, tmp337, arr48, tmp338;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          k = first0;
          rs = first1;
          t = param1;
          tmp336 = eliza.words(k);
          tmp337 = eliza.cycle(rs);
          arr48 = [
            tmp336,
            tmp337
          ];
          tmp338 = lscomp(t);
          return NofibPrelude.Cons(arr48, tmp338)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp309 = lscomp(eliza.respMsgs);
    tmp310 = eliza.cycle(eliza.repeatMsgs);
    arr40 = [
      tmp309,
      tmp310
    ];
    this.initial = arr40;
    prepare = function prepare(ls) {
      let tmp336, lambda;
      lambda = (undefined, function (caseScrut) {
        let first1, first0, w, r, tmp337, arr48;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          w = first0;
          r = first1;
          tmp337 = eliza.ucase(w);
          arr48 = [
            tmp337,
            r
          ];
          return arr48
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp336 = lambda;
      return NofibPrelude.map(tmp336, ls)
    };
    lscomp1 = function lscomp(ls) {
      let param0, param1, first1, first0, x, y, t, arr48, arr49, tmp336, tmp337, tmp338;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          x = first0;
          y = first1;
          t = param1;
          arr48 = [
            x,
            y
          ];
          arr49 = [
            y,
            x
          ];
          tmp336 = NofibPrelude.Cons(arr49, NofibPrelude.Nil);
          tmp337 = NofibPrelude.Cons(arr48, tmp336);
          tmp338 = lscomp1(t);
          return NofibPrelude.Cons(tmp337, tmp338)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp311 = NofibPrelude.nofibStringToList("me");
    tmp312 = NofibPrelude.nofibStringToList("you");
    _deforest_Deforest_Arr_2_06 = tmp311;
    _deforest_Deforest_Arr_2_16 = tmp312;
    arr41 = () => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_33_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    _deforest_Cons_head6 = arr41;
    _deforest_Cons_tail6 = (ys) => {
      return ys
    };
    tmp313 = (ys) => {
      let param0, param1, x, xs, tmp336;
      param0 = _deforest_Cons_head6;
      param1 = _deforest_Cons_tail6;
      x = param0;
      xs = param1;
      tmp336 = append_inst_34_tsni(xs, ys);
      return NofibPrelude.Cons(x, tmp336)
    };
    oneways = tmp313;
    tmp314 = NofibPrelude.nofibStringToList("are");
    tmp315 = NofibPrelude.nofibStringToList("am");
    _deforest_Deforest_Arr_2_05 = tmp314;
    _deforest_Deforest_Arr_2_15 = tmp315;
    arr42 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
    };
    tmp316 = NofibPrelude.nofibStringToList("we're");
    tmp317 = NofibPrelude.nofibStringToList("was");
    _deforest_Deforest_Arr_2_04 = tmp316;
    _deforest_Deforest_Arr_2_14 = tmp317;
    arr43 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
    };
    tmp318 = NofibPrelude.nofibStringToList("you");
    tmp319 = NofibPrelude.nofibStringToList("I");
    _deforest_Deforest_Arr_2_03 = tmp318;
    _deforest_Deforest_Arr_2_13 = tmp319;
    arr44 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
    };
    tmp320 = NofibPrelude.nofibStringToList("your");
    tmp321 = NofibPrelude.nofibStringToList("my");
    _deforest_Deforest_Arr_2_02 = tmp320;
    _deforest_Deforest_Arr_2_12 = tmp321;
    arr45 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
    };
    tmp322 = NofibPrelude.nofibStringToList("I've");
    tmp323 = NofibPrelude.nofibStringToList("you've");
    _deforest_Deforest_Arr_2_01 = tmp322;
    _deforest_Deforest_Arr_2_11 = tmp323;
    arr46 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    tmp324 = NofibPrelude.nofibStringToList("I'm");
    tmp325 = NofibPrelude.nofibStringToList("you're");
    _deforest_Deforest_Arr_2_0 = tmp324;
    _deforest_Deforest_Arr_2_1 = tmp325;
    arr47 = (lscomp2, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_0_tsni(lscomp2, param1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head5 = arr47;
    _deforest_Cons_tail5 = (lscomp2) => {
      return () => {
        return NofibPrelude.Nil
      }
    };
    tmp326 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = arr46;
    _deforest_Cons_tail4 = tmp326;
    tmp327 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = arr45;
    _deforest_Cons_tail3 = tmp327;
    tmp328 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = arr44;
    _deforest_Cons_tail2 = tmp328;
    tmp329 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = arr43;
    _deforest_Cons_tail1 = tmp329;
    tmp330 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr42;
    _deforest_Cons_tail = tmp330;
    tmp331 = (lscomp2) => {
      return match_ls_arm_Cons_inst_0_tsni(lscomp2, _deforest_Cons_head, _deforest_Cons_tail)
    };
    bothways = tmp331;
    tmp332 = lscomp_inst_0_tsni(bothways);
    tmp333 = concat_inst_31_tsni(tmp332);
    tmp334 = append_inst_34_tsni(oneways, tmp333);
    tmp335 = prepare_inst_33_tsni(tmp334);
    this.conjugates = tmp335;
  }
  static toUpper(c) {
    return runtime.safeCall(c.toUpperCase())
  } 
  static lz_map(f, ls) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let param0, param1, h, t, tmp1, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.LzNil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h = param0;
        t = param1;
        tmp1 = runtime.safeCall(f(h));
        tmp2 = eliza.lz_map(f, t);
        return NofibPrelude.LzCons(tmp1, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static append_lz(xs, ys) {
    let param0, param1, h, t, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.force(ys)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      lambda = (undefined, function () {
        let tmp;
        tmp = eliza.append_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp)
      });
      return NofibPrelude.lazy(lambda)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static cycle(xs1) {
    let tmp, lambda;
    lambda = (undefined, function () {
      return eliza.cycle(xs1)
    });
    tmp = NofibPrelude.lazy(lambda);
    return eliza.append_lz(xs1, tmp)
  } 
  static isSpace(c1) {
    return c1 === " "
  } 
  static words(s) {
    let scrut;
    scrut = dropWhile_inst_1_2_tsni(eliza.isSpace, s);
    return runtime.safeCall(scrut())
  } 
  static unwords(ws) {
    let go, param0, param1, w, ws1, tmp;
    go = function go(ws2) {
      let param01, param11, w1, ws3, tmp1, tmp2;
      if (ws2 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ws2 instanceof NofibPrelude.Cons.class) {
        param01 = ws2.head;
        param11 = ws2.tail;
        w1 = param01;
        ws3 = param11;
        tmp1 = go(ws3);
        tmp2 = NofibPrelude.append(w1, tmp1);
        return NofibPrelude.Cons(" ", tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
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
  static null_lz(ls1) {
    let scrut, param0, param1, h, t;
    scrut = NofibPrelude.force(ls1);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      return false
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static trim(ls2) {
    let cons, tmp, lambda;
    cons = function cons(x, xs2) {
      let scrut, scrut1, tmp1;
      tmp1 = NofibPrelude.nofibStringToList(" .!?,");
      scrut = NofibPrelude.inList(x, tmp1);
      if (scrut === true) {
        scrut1 = NofibPrelude.null_(xs2);
        if (scrut1 === true) {
          return NofibPrelude.Nil
        } else {
          return NofibPrelude.Cons(x, xs2)
        }
      } else {
        return NofibPrelude.Cons(x, xs2)
      }
    };
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.nofibStringToList(" .!?,");
      return NofibPrelude.inList(x, tmp1)
    });
    tmp = dropWhile_inst_3_4_tsni(lambda, ls2);
    return foldr_inst_3_36_tsni(cons, NofibPrelude.Nil, tmp)
  } 
  static repeated(kt_rp) {
    let first1, first0, kt, param0, param1, r, rp, arr, arr1;
    if (globalThis.Array.isArray(kt_rp) && kt_rp.length === 2) {
      first0 = kt_rp[0];
      first1 = kt_rp[1];
      kt = first0;
      if (first1 instanceof NofibPrelude.Cons.class) {
        param0 = first1.head;
        param1 = first1.tail;
        r = param0;
        rp = param1;
        arr = [
          kt,
          rp
        ];
        arr1 = [
          r,
          arr
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static newKeyTab(kt_, kt_rp1) {
    let first1, first0, kt, rp, arr;
    if (globalThis.Array.isArray(kt_rp1) && kt_rp1.length === 2) {
      first0 = kt_rp1[0];
      first1 = kt_rp1[1];
      kt = first0;
      rp = first1;
      arr = [
        kt_,
        rp
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static keyTabOf(kt_rp2) {
    let first1, first0, kt, rp;
    if (globalThis.Array.isArray(kt_rp2) && kt_rp2.length === 2) {
      first0 = kt_rp2[0];
      first1 = kt_rp2[1];
      kt = first0;
      rp = first1;
      return kt
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static makeResponse(cs, us) {
    let param0, param1, cs_, cs_1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (cs instanceof NofibPrelude.Cons.class) {
      param0 = cs.head;
      param1 = cs.tail;
      if (param0 === "?") {
        cs_1 = param1;
        tmp = NofibPrelude.nofibStringToList(" ");
        tmp1 = NofibPrelude.nofibStringToList("?");
        tmp2 = NofibPrelude.append(us, tmp1);
        tmp3 = NofibPrelude.append(tmp, tmp2);
        return NofibPrelude.append(cs_1, tmp3)
      } else if (param0 === ".") {
        cs_ = param1;
        tmp4 = NofibPrelude.nofibStringToList(" ");
        tmp5 = NofibPrelude.nofibStringToList(".");
        tmp6 = NofibPrelude.append(us, tmp5);
        tmp7 = NofibPrelude.append(tmp4, tmp6);
        return NofibPrelude.append(cs_, tmp7)
      } else {
        return cs
      }
    } else {
      return cs
    }
  } 
  static prefix(xxs, yys) {
    let param0, param1, x, xs2, scrut, param01, param11, y, ys1, tmp, tmp1;
    if (xxs instanceof NofibPrelude.Nil.class) {
      return true
    } else if (xxs instanceof NofibPrelude.Cons.class) {
      param0 = xxs.head;
      param1 = xxs.tail;
      x = param0;
      xs2 = param1;
      scrut = NofibPrelude.force(yys);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return false
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        y = param01;
        ys1 = param11;
        tmp = NofibPrelude.listEq(x, y);
        tmp1 = eliza.prefix(xs2, ys1);
        return tmp && tmp1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tails(xs2) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let xss, tmp1, tmp2;
      if (xs2 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.LzNil
      } else {
        xss = xs2;
        tmp1 = NofibPrelude.tail(xss);
        tmp2 = eliza.tails(tmp1);
        return NofibPrelude.LzCons(xss, tmp2)
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static ucase(ls3) {
    return NofibPrelude.map(eliza.toUpper, ls3)
  } 
  static conjug(d, w) {
    let maybe, conj, trailingI, tmp, tmp1, tmp2;
    maybe = function maybe(d1, xs3) {
      let scrut;
      scrut = NofibPrelude.null_(xs3);
      if (scrut === true) {
        return d1
      } else {
        return xs3
      }
    };
    conj = function conj(w1) {
      let lscomp, tmp3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail;
      lscomp = function lscomp(ls4) {
        let param0, param1, first1, first0, w_, m, t, scrut, tmp6, tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
        if (ls4 instanceof NofibPrelude.Nil.class) {
          return (ys1) => {
            return ys1
          }
        } else if (ls4 instanceof NofibPrelude.Cons.class) {
          param0 = ls4.head;
          param1 = ls4.tail;
          if (globalThis.Array.isArray(param0) && param0.length === 2) {
            first0 = param0[0];
            first1 = param0[1];
            w_ = first0;
            m = first1;
            t = param1;
            tmp6 = ucase_inst_5_6_tsni(w1);
            scrut = listEq_inst_5_37_tsni(tmp6, w_);
            if (scrut === true) {
              tmp7 = lscomp(t);
              _deforest_Cons_head1 = m;
              _deforest_Cons_tail1 = tmp7;
              return (ys1) => {
                let param01, param11, x, xs3, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
                param01 = _deforest_Cons_head1;
                param11 = _deforest_Cons_tail1;
                x = param01;
                xs3 = param11;
                tmp8 = append_inst_5_8_tsni(xs3, ys1);
                _deforest_Cons_head2 = x;
                _deforest_Cons_tail2 = tmp8;
                return () => {
                  return match_l_arm_Cons_inst_5_38_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
                }
              }
            } else {
              return lscomp(t)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp3 = lscomp(eliza.conjugates);
      _deforest_Cons_head = w1;
      _deforest_Cons_tail = NofibPrelude.Nil;
      tmp4 = () => {
        return match_l_arm_Cons_inst_5_38_tsni(_deforest_Cons_head, _deforest_Cons_tail)
      };
      tmp5 = append_inst_5_8_tsni(tmp3, tmp4);
      return head_inst_5_38_tsni(tmp5)
    };
    trailingI = function trailingI(ls4) {
      let cons;
      cons = function cons(x, xs3) {
        let scrut, tmp3, tmp4, tmp5, tmp6;
        tmp3 = NofibPrelude.nofibStringToList("I");
        tmp4 = NofibPrelude.listEq(x, tmp3);
        tmp5 = NofibPrelude.null_(xs3);
        scrut = tmp4 && tmp5;
        if (scrut === true) {
          tmp6 = NofibPrelude.nofibStringToList("me");
          return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
        } else {
          return NofibPrelude.Cons(x, xs3)
        }
      };
      return foldr_inst_5_39_tsni(cons, NofibPrelude.Nil, ls4)
    };
    tmp = maybe(d, w);
    tmp1 = map_inst_5_9_tsni(conj, tmp);
    tmp2 = trailingI(tmp1);
    return eliza.unwords(tmp2)
  } 
  static replies(key, l) {
    let tmp, tmp1, tmp2, lambda, lambda1;
    lambda = (undefined, function (x) {
      let tmp3, tmp4;
      tmp3 = NofibPrelude.listLen(key);
      tmp4 = NofibPrelude.drop(tmp3, x);
      return conjug_inst_10_11_tsni(l, tmp4)
    });
    tmp = lambda;
    tmp1 = eliza.tails(l);
    lambda1 = (undefined, function (ls4) {
      let tmp3;
      tmp3 = lz_map_inst_10_12_tsni(eliza.ucase, ls4);
      return prefix_inst_10_40_tsni(key, tmp3)
    });
    tmp2 = NofibPrelude.filter_lz(lambda1, tmp1);
    return NofibPrelude.map_lz(tmp, tmp2)
  } 
  static answer(st, l1) {
    let ans, cons, scrut, first1, first0, response, kt, tmp, tmp1, arr;
    cons = function cons(e, r_es) {
      let first11, first01, r, es, tmp2, arr1;
      if (globalThis.Array.isArray(r_es) && r_es.length === 2) {
        first01 = r_es[0];
        first11 = r_es[1];
        r = first01;
        es = first11;
        tmp2 = NofibPrelude.Cons(e, es);
        arr1 = [
          r,
          tmp2
        ];
        return arr1
      } else {
        throw new globalThis.Error("match error");
      }
    };
    ans = function ans(e_es, l2) {
      let param0, param1, first11, first01, key1, a_as, es, scrut1, param01, param11, a, as_, rs, scrut2, tmp2, arr1, tmp3, tmp4, tmp5, arr2, tmp6, arr3;
      if (e_es instanceof NofibPrelude.Cons.class) {
        param0 = e_es.head;
        param1 = e_es.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          key1 = first01;
          a_as = first11;
          es = param1;
          scrut1 = NofibPrelude.force(a_as);
          if (scrut1 instanceof NofibPrelude.LzCons.class) {
            param01 = scrut1.head;
            param11 = scrut1.tail;
            a = param01;
            as_ = param11;
            tmp2 = replies_inst_13_14_tsni(key1, l2);
            rs = tmp2;
            scrut2 = eliza.null_lz(rs);
            if (scrut2 === true) {
              arr1 = [
                key1,
                a_as
              ];
              tmp3 = ans(es, l2);
              return cons(arr1, tmp3)
            } else {
              tmp4 = NofibPrelude.head_lz(rs);
              tmp5 = eliza.makeResponse(a, tmp4);
              arr2 = [
                key1,
                as_
              ];
              tmp6 = NofibPrelude.Cons(arr2, es);
              arr3 = [
                tmp5,
                tmp6
              ];
              return arr3
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
    };
    tmp = eliza.keyTabOf(st);
    scrut = ans(tmp, l1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      response = first0;
      kt = first1;
      tmp1 = eliza.newKeyTab(kt, st);
      arr = [
        response,
        tmp1
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static session(rs, prev, ls4) {
    let param0, param1, l2, ls5, scrut, scrut1, tmp;
    if (ls4 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls4 instanceof NofibPrelude.Cons.class) {
      param0 = ls4.head;
      param1 = ls4.tail;
      l2 = param0;
      ls5 = param1;
      scrut = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l2);
      if (scrut === true) {
        tmp = repeated_inst_15_17_tsni(rs);
      } else {
        tmp = answer_inst_15_16_tsni(rs, l2);
      }
      scrut1 = tmp;
      return runtime.safeCall(scrut1(l2, ls5))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static testEliza_nofib(n) {
    let input, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, lambda;
    tmp = NofibPrelude.nofibStringToList("Are we alone?");
    tmp1 = NofibPrelude.nofibStringToList("That the Roswell event was actually an alien encounter. Do you agreed?");
    tmp2 = NofibPrelude.nofibStringToList("But why not talk about you, its more fun.");
    tmp3 = NofibPrelude.nofibStringToList("I dont ask, you do");
    tmp4 = NofibPrelude.nofibStringToList("do ray me");
    tmp5 = NofibPrelude.nofibStringToList("Nop, thats because your a computer");
    tmp6 = NofibPrelude.nofibStringToList("you dont");
    tmp7 = NofibPrelude.nofibStringToList("Oh, a paranoid computer, ehh?");
    tmp8 = NofibPrelude.nofibStringToList("Tell me about *your* mother");
    tmp9 = NofibPrelude.nofibStringToList("No, what what was she like?");
    tmp10 = NofibPrelude.nofibStringToList("I'm asking questions, not you");
    tmp11 = NofibPrelude.nofibStringToList("no");
    tmp12 = NofibPrelude.nofibStringToList("yes");
    tmp13 = NofibPrelude.nofibStringToList("but I'm not");
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(tmp12, tmp14);
    tmp16 = NofibPrelude.Cons(tmp11, tmp15);
    tmp17 = NofibPrelude.Cons(tmp10, tmp16);
    tmp18 = NofibPrelude.Cons(tmp9, tmp17);
    tmp19 = NofibPrelude.Cons(tmp8, tmp18);
    tmp20 = NofibPrelude.Cons(tmp7, tmp19);
    tmp21 = NofibPrelude.Cons(tmp6, tmp20);
    tmp22 = NofibPrelude.Cons(tmp5, tmp21);
    tmp23 = NofibPrelude.Cons(tmp4, tmp22);
    tmp24 = NofibPrelude.Cons(tmp3, tmp23);
    tmp25 = NofibPrelude.Cons(tmp2, tmp24);
    tmp26 = NofibPrelude.Cons(tmp1, tmp25);
    tmp27 = NofibPrelude.Cons(tmp, tmp26);
    tmp28 = Predef.id(tmp27);
    input = tmp28;
    lambda = (undefined, function (i) {
      let tmp31, tmp32, tmp33, tmp34, lambda1, lambda2;
      tmp31 = NofibPrelude.intMod(i, 20);
      tmp32 = take_inst_18_21_tsni(tmp31, input);
      lambda1 = (undefined, function (x) {
        let tmp35;
        tmp35 = trim_inst_18_19_tsni(x);
        return words_inst_18_20_tsni(tmp35)
      });
      tmp33 = map_inst_18_22_tsni(lambda1, tmp32);
      lambda2 = (undefined, function (x) {
        let tmp35;
        tmp35 = NofibPrelude.null_(x);
        return Predef.not(tmp35)
      });
      tmp34 = filter_inst_18_24_tsni(lambda2, tmp33);
      return session_inst_18_23_tsni(eliza.initial, NofibPrelude.Nil, tmp34)
    });
    tmp29 = lambda;
    tmp30 = enumFromTo_inst_18_25_tsni(1, n);
    return map_inst_18_28_tsni(tmp29, tmp30)
  } 
  static main() {
    let tmp, tmp1, lambda;
    tmp = testEliza_nofib_inst_26_27_tsni(20);
    lambda = (undefined, function (x) {
      return nofibListToString_inst_26_42_tsni(x)
    });
    tmp1 = map_inst_26_41_tsni(lambda, tmp);
    return runtime.safeCall(tmp1.toString())
  }
  static toString() { return "eliza"; }
});
let eliza = eliza1; export default eliza;
