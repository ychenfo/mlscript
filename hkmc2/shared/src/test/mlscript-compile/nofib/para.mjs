import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let para1, dropWhile_inst_0_tsni, lines_inst_1_tsni, break__inst_1_2_tsni, break__inst_2_tsni, map_inst_3_tsni, formats_inst_4_tsni, map_inst_4_5_tsni, tile_inst_6_tsni, splitAt_inst_6_7_tsni, splitAt_inst_7_tsni, splitAt_inst_8_tsni, splitAt_inst_9_tsni, unformat_inst_10_tsni, paras_inst_11_tsni, words_inst_12_tsni, dropWhile_inst_12_0_tsni, lines_inst_13_tsni, break__inst_13_2_tsni, unlines_inst_14_tsni, map_inst_14_3_tsni, map_inst_15_tsni, unparas_inst_16_tsni, unformat_inst_16_10_tsni, unparse_inst_17_tsni, unparas_inst_17_16_tsni, unformat_inst_17_16_10_tsni, unlines_inst_17_14_tsni, map_inst_17_14_3_tsni, map_inst_17_15_tsni, parse_inst_18_tsni, lines_inst_18_13_tsni, break__inst_18_13_2_tsni, words_inst_18_12_tsni, dropWhile_inst_18_12_0_tsni, paras_inst_18_11_tsni, filter_inst_18_11_19_tsni, tile_inst_20_tsni, splitAt_inst_20_7_tsni, stepr_inst_21_tsni, init__inst_21_22_tsni, splitAt_inst_21_22_9_tsni, init__inst_21_23_tsni, splitAt_inst_21_23_9_tsni, tail__inst_21_24_tsni, splitAt_inst_21_24_8_tsni, unparse_inst_25_tsni, unparas_inst_25_16_tsni, unformat_inst_25_16_10_tsni, unlines_inst_25_14_tsni, map_inst_25_14_3_tsni, map_inst_25_15_tsni, par3_inst_26_tsni, stepr_inst_26_21_tsni, tail__inst_26_21_24_tsni, splitAt_inst_26_21_24_8_tsni, init__inst_26_21_23_tsni, splitAt_inst_26_21_23_9_tsni, init__inst_26_21_22_tsni, splitAt_inst_26_21_22_9_tsni, tile_inst_26_20_tsni, splitAt_inst_26_20_7_tsni, concat_inst_27_tsni, append_inst_27_28_tsni, parse_inst_29_tsni, lines_inst_29_13_tsni, break__inst_29_13_2_tsni, words_inst_29_12_tsni, dropWhile_inst_29_12_0_tsni, paras_inst_29_11_tsni, filter_inst_29_11_19_tsni, fmt_inst_30_tsni, parse_inst_30_29_tsni, paras_inst_30_29_11_tsni, words_inst_30_29_12_tsni, dropWhile_inst_30_29_12_0_tsni, lines_inst_30_29_13_tsni, break__inst_30_29_13_2_tsni, filter_inst_30_29_11_19_tsni, par3_inst_30_26_tsni, tile_inst_30_26_20_tsni, splitAt_inst_30_26_20_7_tsni, stepr_inst_30_26_21_tsni, init__inst_30_26_21_22_tsni, splitAt_inst_30_26_21_22_9_tsni, init__inst_30_26_21_23_tsni, splitAt_inst_30_26_21_23_9_tsni, tail__inst_30_26_21_24_tsni, splitAt_inst_30_26_21_24_8_tsni, concat_inst_30_27_tsni, append_inst_30_27_28_tsni, unparse_inst_30_25_tsni, unlines_inst_30_25_14_tsni, map_inst_30_25_14_3_tsni, map_inst_30_25_15_tsni, unparas_inst_30_25_16_tsni, unformat_inst_30_25_16_10_tsni, testPara_nofib_inst_31_tsni, fmt_inst_31_30_tsni, unparse_inst_31_30_25_tsni, unparas_inst_31_30_25_16_tsni, unformat_inst_31_30_25_16_10_tsni, unlines_inst_31_30_25_14_tsni, map_inst_31_30_25_14_3_tsni, map_inst_31_30_25_15_tsni, par3_inst_31_30_26_tsni, stepr_inst_31_30_26_21_tsni, tail__inst_31_30_26_21_24_tsni, splitAt_inst_31_30_26_21_24_8_tsni, init__inst_31_30_26_21_23_tsni, splitAt_inst_31_30_26_21_23_9_tsni, init__inst_31_30_26_21_22_tsni, splitAt_inst_31_30_26_21_22_9_tsni, tile_inst_31_30_26_20_tsni, splitAt_inst_31_30_26_20_7_tsni, concat_inst_31_30_27_tsni, append_inst_31_30_27_28_tsni, parse_inst_31_30_29_tsni, lines_inst_31_30_29_13_tsni, break__inst_31_30_29_13_2_tsni, words_inst_31_30_29_12_tsni, dropWhile_inst_31_30_29_12_0_tsni, paras_inst_31_30_29_11_tsni, filter_inst_31_30_29_11_19_tsni, concat_inst_31_30_25_14_32_tsni, append_inst_31_30_25_14_32_28_tsni, concat_inst_33_tsni, break__inst_34_tsni, concat_inst_32_tsni, append_inst_4_35_tsni, append_inst_10_36_tsni, listNeq_inst_11_37_tsni, map_inst_38_tsni, concat_inst_14_32_tsni, append_inst_16_10_36_tsni, append_inst_17_16_10_36_tsni, concat_inst_17_14_32_tsni, map_inst_18_38_tsni, listNeq_inst_18_11_37_tsni, map_inst_39_tsni, append_inst_25_16_10_36_tsni, concat_inst_25_14_32_tsni, map_inst_40_tsni, map_inst_29_38_tsni, listNeq_inst_29_11_37_tsni, listNeq_inst_30_29_11_37_tsni, map_inst_30_29_38_tsni, map_inst_30_40_tsni, concat_inst_30_25_14_32_tsni, append_inst_30_25_16_10_36_tsni, append_inst_31_30_25_16_10_36_tsni, map_inst_31_30_40_tsni, map_inst_31_30_29_38_tsni, listNeq_inst_31_30_29_11_37_tsni, nofibListToString_inst_41_tsni, match_ls_arm_Cons_inst_33_tsni, match_ls_arm_Nil_inst_41_tsni;
match_ls_arm_Cons_inst_33_tsni = function match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head_inst_33_tsni, _deforest_Cons_tail_inst_33_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_33_tsni;
  param1 = _deforest_Cons_tail_inst_33_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_33_tsni(xs);
  return NofibPrelude.append(x, tmp)
};
match_ls_arm_Nil_inst_41_tsni = function match_ls_arm_Nil_inst_41_tsni() {
  return ""
};
dropWhile_inst_0_tsni = function dropWhile_inst_0_tsni(f, ls) {
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
      return dropWhile_inst_0_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h1, t1, scrut1, first1, first0, w, s_, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        _deforest_Cons_head1 = h1;
        _deforest_Cons_tail1 = t1;
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
            scrut2 = break__inst_34_tsni(p, xs);
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
        scrut1 = break__inst_34_tsni(para.isSpace, tmp);
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
lines_inst_1_tsni = function lines_inst_1_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_1_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    return NofibPrelude.Cons(l, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_1_2_tsni = function break__inst_1_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_1_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_1_2_tsni(p, xs1);
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
break__inst_2_tsni = function break__inst_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_1_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_2_tsni(p, xs1);
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
      tmp2 = concat_inst_32_tsni(xs2);
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
formats_inst_4_tsni = function formats_inst_4_tsni(txt) {
  let tmp, tmp1, lambda, lambda1;
  lambda = (undefined, function (w, ps) {
    let tmp2, tmp3, lambda2, lambda3;
    lambda2 = (undefined, function (p) {
      return para.new_(w, p)
    });
    tmp2 = map_inst_4_5_tsni(lambda2, ps);
    lambda3 = (undefined, function (p) {
      return para.glue(w, p)
    });
    tmp3 = NofibPrelude.map(lambda3, ps);
    return append_inst_4_35_tsni(tmp2, tmp3)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    let tmp2, tmp3;
    tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
  });
  tmp1 = lambda1;
  return para.fold1(tmp, tmp1, txt)
};
map_inst_4_5_tsni = function map_inst_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_4_35_tsni(xs2, ys);
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
tile_inst_6_tsni = function tile_inst_6_tsni(ws, a_b) {
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
      scrut = splitAt_inst_6_7_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_6_7_tsni = function splitAt_inst_6_7_tsni(n, ls) {
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
    tmp4 = tile_inst_6_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
splitAt_inst_7_tsni = function splitAt_inst_7_tsni(n, ls) {
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
    tmp4 = tile_inst_6_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
splitAt_inst_8_tsni = function splitAt_inst_8_tsni(n, ls) {
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
splitAt_inst_9_tsni = function splitAt_inst_9_tsni(n, ls) {
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
unformat_inst_10_tsni = function unformat_inst_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
paras_inst_11_tsni = function paras_inst_11_tsni(ls) {
  let tmp, lambda;
  tmp = para.format(NofibPrelude.Nil, ls);
  lambda = (undefined, function (x) {
    return listNeq_inst_11_37_tsni((ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }, x)
  });
  return NofibPrelude.filter(lambda, tmp)
};
words_inst_12_tsni = function words_inst_12_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_12_0_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_12_0_tsni = function dropWhile_inst_12_0_tsni(f, ls) {
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
      return dropWhile_inst_12_0_tsni(f, t)
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
          tmp1 = words_inst_12_tsni(s_);
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
lines_inst_13_tsni = function lines_inst_13_tsni(s) {
  let scrut, first1, first0, l, s_, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_13_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param0, param1, x, xs, tmp, tmp1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x));
      tmp1 = map_inst_38_tsni(f, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_13_2_tsni = function break__inst_13_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_13_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_13_2_tsni(p, xs1);
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
unlines_inst_14_tsni = function unlines_inst_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(l, tmp1)
  });
  tmp = map_inst_14_3_tsni(lambda, ls);
  return concat_inst_14_32_tsni(tmp)
};
map_inst_14_3_tsni = function map_inst_14_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_15_tsni = function map_inst_15_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_14_3_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_14_32_tsni(xs2);
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
unparas_inst_16_tsni = function unparas_inst_16_tsni(ls) {
  return unformat_inst_16_10_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_16_10_tsni = function unformat_inst_16_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_16_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_16_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
unparse_inst_17_tsni = function unparse_inst_17_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_17_16_tsni(ls);
  tmp1 = map_inst_17_15_tsni(para.unwords, tmp);
  return unlines_inst_17_14_tsni(tmp1)
};
unparas_inst_17_16_tsni = function unparas_inst_17_16_tsni(ls) {
  return unformat_inst_17_16_10_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_17_16_10_tsni = function unformat_inst_17_16_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_17_16_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_17_16_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
unlines_inst_17_14_tsni = function unlines_inst_17_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(l, tmp1)
  });
  tmp = map_inst_17_14_3_tsni(lambda, ls);
  return concat_inst_17_14_32_tsni(tmp)
};
map_inst_17_14_3_tsni = function map_inst_17_14_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_17_15_tsni = function map_inst_17_15_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_15_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_17_14_3_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_17_14_32_tsni(xs2);
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
parse_inst_18_tsni = function parse_inst_18_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_18_13_tsni(ls);
  tmp1 = map_inst_18_38_tsni(words_inst_18_12_tsni, tmp);
  return paras_inst_18_11_tsni(tmp1)
};
lines_inst_18_13_tsni = function lines_inst_18_13_tsni(s) {
  let scrut, first1, first0, l, s_, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_18_13_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param0, param1, x, xs, tmp, tmp1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x));
      tmp1 = map_inst_18_38_tsni(f, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_18_13_2_tsni = function break__inst_18_13_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_18_13_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_18_13_2_tsni(p, xs1);
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
words_inst_18_12_tsni = function words_inst_18_12_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_18_12_0_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_18_12_0_tsni = function dropWhile_inst_18_12_0_tsni(f, ls) {
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
      return dropWhile_inst_18_12_0_tsni(f, t)
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
          tmp1 = words_inst_18_12_tsni(s_);
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
paras_inst_18_11_tsni = function paras_inst_18_11_tsni(ls) {
  let tmp, lambda;
  tmp = para.format(NofibPrelude.Nil, ls);
  lambda = (undefined, function (x) {
    return listNeq_inst_18_11_37_tsni((ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }, x)
  });
  return filter_inst_18_11_19_tsni(lambda, tmp)
};
filter_inst_18_11_19_tsni = function filter_inst_18_11_19_tsni(f, ls) {
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
      tmp = filter_inst_18_11_19_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_39_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_18_11_19_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
tile_inst_20_tsni = function tile_inst_20_tsni(ws, a_b) {
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
      scrut = splitAt_inst_20_7_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_20_7_tsni = function splitAt_inst_20_7_tsni(n, ls) {
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
    tmp4 = tile_inst_20_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
stepr_inst_21_tsni = function stepr_inst_21_tsni(w, ps_tw_tl) {
  let bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    single = function single(p) {
      let tmp8;
      tmp8 = para.len_tl(p);
      return tmp8 === 0
    };
    width_hd = function width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tot_width
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tot_width - tmp8;
        return tmp9 - 1
      }
    };
    cost = function cost(p) {
      let a, scrut, tmp8, tmp9, tmp10, tmp11;
      scrut = single(p);
      if (scrut === true) {
        return 0
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = width_hd(p);
        tmp10 = para.optw - tmp9;
        a = tmp10;
        tmp11 = a * a;
        return tmp8 + tmp11
      }
    };
    old_width_hd = function old_width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tw
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tw - tmp8;
        return tmp9 - 1
      }
    };
    new_ = function new_(p) {
      let x, scrut, arr1, tmp8, tmp9, tmp10, tmp11, tmp12, arr2;
      scrut = single(p);
      if (scrut === true) {
        arr1 = [
          tw,
          0,
          tl
        ];
        return arr1
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = old_width_hd(p);
        tmp10 = para.optw - tmp9;
        x = tmp10;
        tmp11 = x * x;
        tmp12 = tmp8 + tmp11;
        arr2 = [
          tw,
          tmp12,
          tl
        ];
        return arr2
      }
    };
    trim = function trim(ps_pq) {
      let ps_p, q, p, scrut, scrut1, scrut2, tmp8, tmp9;
      scrut2 = para.null__(ps_pq);
      if (scrut2 === true) {
        return ps_pq
      } else {
        scrut1 = para.single_(ps_pq);
        if (scrut1 === true) {
          return ps_pq
        } else {
          ps_p = init__inst_21_22_tsni(ps_pq);
          q = para.last_(ps_pq);
          p = para.last_(ps_p);
          tmp8 = cost(p);
          tmp9 = cost(q);
          scrut = tmp8 <= tmp9;
          if (scrut === true) {
            return trim(ps_p)
          } else {
            return ps_pq
          }
        }
      }
    };
    drop_nofit = function drop_nofit(ps_p) {
      let scrut, scrut1, tmp8, tmp9, tmp10;
      scrut1 = para.null__(ps_p);
      if (scrut1 === true) {
        return ps_p
      } else {
        tmp8 = para.last_(ps_p);
        tmp9 = width_hd(tmp8);
        scrut = tmp9 > para.maxw;
        if (scrut === true) {
          tmp10 = init__inst_21_23_tsni(ps_p);
          return drop_nofit(tmp10)
        } else {
          return ps_p
        }
      }
    };
    bf = function bf(p, q) {
      let wqh, rqh, scrut, scrut1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      tmp8 = width_hd(q);
      wqh = tmp8;
      tmp9 = para.maxw - wqh;
      tmp10 = tmp9 + 1;
      rqh = tmp10;
      tmp11 = single(q);
      tmp12 = para.cost_tl(p);
      tmp13 = tmp12 === 0;
      scrut1 = tmp11 && tmp13;
      if (scrut1 === true) {
        tmp14 = width_hd(p);
        tmp15 = para.optw - tmp14;
        return NofibPrelude.min(tmp15, rqh)
      } else {
        scrut = single(q);
        if (scrut === true) {
          return rqh
        } else {
          tmp16 = cost(p);
          tmp17 = cost(q);
          tmp18 = tmp16 - tmp17;
          tmp19 = width_hd(p);
          tmp20 = wqh - tmp19;
          tmp21 = 2 * tmp20;
          tmp22 = para.ceildiv(tmp18, tmp21);
          return NofibPrelude.min(tmp22, rqh)
        }
      }
    };
    myAdd = function myAdd(p, qr_rs) {
      let q, r_rs, r, scrut, scrut1, tmp8, tmp9, tmp10, tmp11;
      tmp8 = para.single_(qr_rs);
      tmp9 = para.null__(qr_rs);
      scrut1 = tmp8 || tmp9;
      if (scrut1 === true) {
        return para.cons_(p, qr_rs)
      } else {
        q = para.head_(qr_rs);
        r_rs = tail__inst_21_24_tsni(qr_rs);
        r = para.head_(r_rs);
        tmp10 = bf(p, q);
        tmp11 = bf(q, r);
        scrut = tmp10 <= tmp11;
        if (scrut === true) {
          return myAdd(p, r_rs)
        } else {
          return para.cons_(p, qr_rs)
        }
      }
    };
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_(tmp3);
    tmp5 = myAdd(tmp4, ps);
    tmp6 = drop_nofit(tmp5);
    tmp7 = trim(tmp6);
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
init__inst_21_22_tsni = function init__inst_21_22_tsni(a_b) {
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
        scrut1 = splitAt_inst_21_22_9_tsni(tmp1, y);
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
splitAt_inst_21_22_9_tsni = function splitAt_inst_21_22_9_tsni(n, ls) {
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
init__inst_21_23_tsni = function init__inst_21_23_tsni(a_b) {
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
        scrut1 = splitAt_inst_21_23_9_tsni(tmp1, y);
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
splitAt_inst_21_23_9_tsni = function splitAt_inst_21_23_9_tsni(n, ls) {
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
tail__inst_21_24_tsni = function tail__inst_21_24_tsni(a_b) {
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
        scrut1 = splitAt_inst_21_24_8_tsni(tmp1, y);
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
splitAt_inst_21_24_8_tsni = function splitAt_inst_21_24_8_tsni(n, ls) {
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
unparse_inst_25_tsni = function unparse_inst_25_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_25_16_tsni(ls);
  tmp1 = map_inst_25_15_tsni(para.unwords, tmp);
  return unlines_inst_25_14_tsni(tmp1)
};
unparas_inst_25_16_tsni = function unparas_inst_25_16_tsni(ls) {
  return unformat_inst_25_16_10_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_25_16_10_tsni = function unformat_inst_25_16_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_25_16_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_25_16_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
unlines_inst_25_14_tsni = function unlines_inst_25_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(l, tmp1)
  });
  tmp = map_inst_25_14_3_tsni(lambda, ls);
  return concat_inst_25_14_32_tsni(tmp)
};
map_inst_25_14_3_tsni = function map_inst_25_14_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_25_15_tsni = function map_inst_25_15_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_15_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_25_14_3_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_25_14_32_tsni(xs2);
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
par3_inst_26_tsni = function par3_inst_26_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, lambda;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_26_21_tsni, para.startr, tmp);
  zs = tmp1;
  lambda = (undefined, function (x) {
    let tmp6, tmp7;
    tmp6 = para.fst3(x);
    tmp7 = para.last_(tmp6);
    return para.len_tl(tmp7)
  });
  tmp2 = lambda;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_26_20_tsni(ws, arr)
};
stepr_inst_26_21_tsni = function stepr_inst_26_21_tsni(w, ps_tw_tl) {
  let bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    single = function single(p) {
      let tmp8;
      tmp8 = para.len_tl(p);
      return tmp8 === 0
    };
    width_hd = function width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tot_width
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tot_width - tmp8;
        return tmp9 - 1
      }
    };
    cost = function cost(p) {
      let a, scrut, tmp8, tmp9, tmp10, tmp11;
      scrut = single(p);
      if (scrut === true) {
        return 0
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = width_hd(p);
        tmp10 = para.optw - tmp9;
        a = tmp10;
        tmp11 = a * a;
        return tmp8 + tmp11
      }
    };
    old_width_hd = function old_width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tw
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tw - tmp8;
        return tmp9 - 1
      }
    };
    new_ = function new_(p) {
      let x, scrut, arr1, tmp8, tmp9, tmp10, tmp11, tmp12, arr2;
      scrut = single(p);
      if (scrut === true) {
        arr1 = [
          tw,
          0,
          tl
        ];
        return arr1
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = old_width_hd(p);
        tmp10 = para.optw - tmp9;
        x = tmp10;
        tmp11 = x * x;
        tmp12 = tmp8 + tmp11;
        arr2 = [
          tw,
          tmp12,
          tl
        ];
        return arr2
      }
    };
    trim = function trim(ps_pq) {
      let ps_p, q, p, scrut, scrut1, scrut2, tmp8, tmp9;
      scrut2 = para.null__(ps_pq);
      if (scrut2 === true) {
        return ps_pq
      } else {
        scrut1 = para.single_(ps_pq);
        if (scrut1 === true) {
          return ps_pq
        } else {
          ps_p = init__inst_26_21_22_tsni(ps_pq);
          q = para.last_(ps_pq);
          p = para.last_(ps_p);
          tmp8 = cost(p);
          tmp9 = cost(q);
          scrut = tmp8 <= tmp9;
          if (scrut === true) {
            return trim(ps_p)
          } else {
            return ps_pq
          }
        }
      }
    };
    drop_nofit = function drop_nofit(ps_p) {
      let scrut, scrut1, tmp8, tmp9, tmp10;
      scrut1 = para.null__(ps_p);
      if (scrut1 === true) {
        return ps_p
      } else {
        tmp8 = para.last_(ps_p);
        tmp9 = width_hd(tmp8);
        scrut = tmp9 > para.maxw;
        if (scrut === true) {
          tmp10 = init__inst_26_21_23_tsni(ps_p);
          return drop_nofit(tmp10)
        } else {
          return ps_p
        }
      }
    };
    bf = function bf(p, q) {
      let wqh, rqh, scrut, scrut1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      tmp8 = width_hd(q);
      wqh = tmp8;
      tmp9 = para.maxw - wqh;
      tmp10 = tmp9 + 1;
      rqh = tmp10;
      tmp11 = single(q);
      tmp12 = para.cost_tl(p);
      tmp13 = tmp12 === 0;
      scrut1 = tmp11 && tmp13;
      if (scrut1 === true) {
        tmp14 = width_hd(p);
        tmp15 = para.optw - tmp14;
        return NofibPrelude.min(tmp15, rqh)
      } else {
        scrut = single(q);
        if (scrut === true) {
          return rqh
        } else {
          tmp16 = cost(p);
          tmp17 = cost(q);
          tmp18 = tmp16 - tmp17;
          tmp19 = width_hd(p);
          tmp20 = wqh - tmp19;
          tmp21 = 2 * tmp20;
          tmp22 = para.ceildiv(tmp18, tmp21);
          return NofibPrelude.min(tmp22, rqh)
        }
      }
    };
    myAdd = function myAdd(p, qr_rs) {
      let q, r_rs, r, scrut, scrut1, tmp8, tmp9, tmp10, tmp11;
      tmp8 = para.single_(qr_rs);
      tmp9 = para.null__(qr_rs);
      scrut1 = tmp8 || tmp9;
      if (scrut1 === true) {
        return para.cons_(p, qr_rs)
      } else {
        q = para.head_(qr_rs);
        r_rs = tail__inst_26_21_24_tsni(qr_rs);
        r = para.head_(r_rs);
        tmp10 = bf(p, q);
        tmp11 = bf(q, r);
        scrut = tmp10 <= tmp11;
        if (scrut === true) {
          return myAdd(p, r_rs)
        } else {
          return para.cons_(p, qr_rs)
        }
      }
    };
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_(tmp3);
    tmp5 = myAdd(tmp4, ps);
    tmp6 = drop_nofit(tmp5);
    tmp7 = trim(tmp6);
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
tail__inst_26_21_24_tsni = function tail__inst_26_21_24_tsni(a_b) {
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
        scrut1 = splitAt_inst_26_21_24_8_tsni(tmp1, y);
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
splitAt_inst_26_21_24_8_tsni = function splitAt_inst_26_21_24_8_tsni(n, ls) {
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
init__inst_26_21_23_tsni = function init__inst_26_21_23_tsni(a_b) {
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
        scrut1 = splitAt_inst_26_21_23_9_tsni(tmp1, y);
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
splitAt_inst_26_21_23_9_tsni = function splitAt_inst_26_21_23_9_tsni(n, ls) {
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
init__inst_26_21_22_tsni = function init__inst_26_21_22_tsni(a_b) {
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
        scrut1 = splitAt_inst_26_21_22_9_tsni(tmp1, y);
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
splitAt_inst_26_21_22_9_tsni = function splitAt_inst_26_21_22_9_tsni(n, ls) {
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
tile_inst_26_20_tsni = function tile_inst_26_20_tsni(ws, a_b) {
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
      scrut = splitAt_inst_26_20_7_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_26_20_7_tsni = function splitAt_inst_26_20_7_tsni(n, ls) {
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
    tmp4 = tile_inst_26_20_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
concat_inst_27_tsni = function concat_inst_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_27_28_tsni = function append_inst_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_40_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
parse_inst_29_tsni = function parse_inst_29_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_29_13_tsni(ls);
  tmp1 = map_inst_29_38_tsni(words_inst_29_12_tsni, tmp);
  return paras_inst_29_11_tsni(tmp1)
};
lines_inst_29_13_tsni = function lines_inst_29_13_tsni(s) {
  let scrut, first1, first0, l, s_, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_29_13_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param0, param1, x, xs, tmp, tmp1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x));
      tmp1 = map_inst_29_38_tsni(f, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_29_13_2_tsni = function break__inst_29_13_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_29_13_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_29_13_2_tsni(p, xs1);
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
words_inst_29_12_tsni = function words_inst_29_12_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_29_12_0_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_29_12_0_tsni = function dropWhile_inst_29_12_0_tsni(f, ls) {
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
      return dropWhile_inst_29_12_0_tsni(f, t)
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
          tmp1 = words_inst_29_12_tsni(s_);
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
paras_inst_29_11_tsni = function paras_inst_29_11_tsni(ls) {
  let tmp, lambda;
  tmp = para.format(NofibPrelude.Nil, ls);
  lambda = (undefined, function (x) {
    return listNeq_inst_29_11_37_tsni((ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }, x)
  });
  return filter_inst_29_11_19_tsni(lambda, tmp)
};
filter_inst_29_11_19_tsni = function filter_inst_29_11_19_tsni(f, ls) {
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
      tmp = filter_inst_29_11_19_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_27_tsni(xs);
        return append_inst_27_28_tsni(x, tmp1)
      }
    } else {
      return filter_inst_29_11_19_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fmt_inst_30_tsni = function fmt_inst_30_tsni(x) {
  let tmp, tmp1, tmp2;
  tmp = parse_inst_30_29_tsni(x);
  tmp1 = concat_inst_30_27_tsni(tmp);
  tmp2 = map_inst_30_40_tsni(par3_inst_30_26_tsni, tmp1);
  return unparse_inst_30_25_tsni(tmp2)
};
parse_inst_30_29_tsni = function parse_inst_30_29_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_30_29_13_tsni(ls);
  tmp1 = map_inst_30_29_38_tsni(words_inst_30_29_12_tsni, tmp);
  return paras_inst_30_29_11_tsni(tmp1)
};
paras_inst_30_29_11_tsni = function paras_inst_30_29_11_tsni(ls) {
  let tmp, lambda;
  tmp = para.format(NofibPrelude.Nil, ls);
  lambda = (undefined, function (x) {
    return listNeq_inst_30_29_11_37_tsni((ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }, x)
  });
  return filter_inst_30_29_11_19_tsni(lambda, tmp)
};
words_inst_30_29_12_tsni = function words_inst_30_29_12_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_30_29_12_0_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_30_29_12_0_tsni = function dropWhile_inst_30_29_12_0_tsni(f, ls) {
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
      return dropWhile_inst_30_29_12_0_tsni(f, t)
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
          tmp1 = words_inst_30_29_12_tsni(s_);
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
lines_inst_30_29_13_tsni = function lines_inst_30_29_13_tsni(s) {
  let scrut, first1, first0, l, s_, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_30_29_13_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param0, param1, x, xs, tmp, tmp1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x));
      tmp1 = map_inst_30_29_38_tsni(f, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_30_29_13_2_tsni = function break__inst_30_29_13_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_30_29_13_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_30_29_13_2_tsni(p, xs1);
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
filter_inst_30_29_11_19_tsni = function filter_inst_30_29_11_19_tsni(f, ls) {
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
      tmp = filter_inst_30_29_11_19_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_30_27_tsni(xs);
        return append_inst_30_27_28_tsni(x, tmp1)
      }
    } else {
      return filter_inst_30_29_11_19_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
par3_inst_30_26_tsni = function par3_inst_30_26_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, lambda;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_30_26_21_tsni, para.startr, tmp);
  zs = tmp1;
  lambda = (undefined, function (x) {
    let tmp6, tmp7;
    tmp6 = para.fst3(x);
    tmp7 = para.last_(tmp6);
    return para.len_tl(tmp7)
  });
  tmp2 = lambda;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_30_26_20_tsni(ws, arr)
};
tile_inst_30_26_20_tsni = function tile_inst_30_26_20_tsni(ws, a_b) {
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
      scrut = splitAt_inst_30_26_20_7_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_30_26_20_7_tsni = function splitAt_inst_30_26_20_7_tsni(n, ls) {
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
    tmp4 = tile_inst_30_26_20_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
stepr_inst_30_26_21_tsni = function stepr_inst_30_26_21_tsni(w, ps_tw_tl) {
  let bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    single = function single(p) {
      let tmp8;
      tmp8 = para.len_tl(p);
      return tmp8 === 0
    };
    width_hd = function width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tot_width
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tot_width - tmp8;
        return tmp9 - 1
      }
    };
    cost = function cost(p) {
      let a, scrut, tmp8, tmp9, tmp10, tmp11;
      scrut = single(p);
      if (scrut === true) {
        return 0
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = width_hd(p);
        tmp10 = para.optw - tmp9;
        a = tmp10;
        tmp11 = a * a;
        return tmp8 + tmp11
      }
    };
    old_width_hd = function old_width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tw
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tw - tmp8;
        return tmp9 - 1
      }
    };
    new_ = function new_(p) {
      let x, scrut, arr1, tmp8, tmp9, tmp10, tmp11, tmp12, arr2;
      scrut = single(p);
      if (scrut === true) {
        arr1 = [
          tw,
          0,
          tl
        ];
        return arr1
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = old_width_hd(p);
        tmp10 = para.optw - tmp9;
        x = tmp10;
        tmp11 = x * x;
        tmp12 = tmp8 + tmp11;
        arr2 = [
          tw,
          tmp12,
          tl
        ];
        return arr2
      }
    };
    trim = function trim(ps_pq) {
      let ps_p, q, p, scrut, scrut1, scrut2, tmp8, tmp9;
      scrut2 = para.null__(ps_pq);
      if (scrut2 === true) {
        return ps_pq
      } else {
        scrut1 = para.single_(ps_pq);
        if (scrut1 === true) {
          return ps_pq
        } else {
          ps_p = init__inst_30_26_21_22_tsni(ps_pq);
          q = para.last_(ps_pq);
          p = para.last_(ps_p);
          tmp8 = cost(p);
          tmp9 = cost(q);
          scrut = tmp8 <= tmp9;
          if (scrut === true) {
            return trim(ps_p)
          } else {
            return ps_pq
          }
        }
      }
    };
    drop_nofit = function drop_nofit(ps_p) {
      let scrut, scrut1, tmp8, tmp9, tmp10;
      scrut1 = para.null__(ps_p);
      if (scrut1 === true) {
        return ps_p
      } else {
        tmp8 = para.last_(ps_p);
        tmp9 = width_hd(tmp8);
        scrut = tmp9 > para.maxw;
        if (scrut === true) {
          tmp10 = init__inst_30_26_21_23_tsni(ps_p);
          return drop_nofit(tmp10)
        } else {
          return ps_p
        }
      }
    };
    bf = function bf(p, q) {
      let wqh, rqh, scrut, scrut1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      tmp8 = width_hd(q);
      wqh = tmp8;
      tmp9 = para.maxw - wqh;
      tmp10 = tmp9 + 1;
      rqh = tmp10;
      tmp11 = single(q);
      tmp12 = para.cost_tl(p);
      tmp13 = tmp12 === 0;
      scrut1 = tmp11 && tmp13;
      if (scrut1 === true) {
        tmp14 = width_hd(p);
        tmp15 = para.optw - tmp14;
        return NofibPrelude.min(tmp15, rqh)
      } else {
        scrut = single(q);
        if (scrut === true) {
          return rqh
        } else {
          tmp16 = cost(p);
          tmp17 = cost(q);
          tmp18 = tmp16 - tmp17;
          tmp19 = width_hd(p);
          tmp20 = wqh - tmp19;
          tmp21 = 2 * tmp20;
          tmp22 = para.ceildiv(tmp18, tmp21);
          return NofibPrelude.min(tmp22, rqh)
        }
      }
    };
    myAdd = function myAdd(p, qr_rs) {
      let q, r_rs, r, scrut, scrut1, tmp8, tmp9, tmp10, tmp11;
      tmp8 = para.single_(qr_rs);
      tmp9 = para.null__(qr_rs);
      scrut1 = tmp8 || tmp9;
      if (scrut1 === true) {
        return para.cons_(p, qr_rs)
      } else {
        q = para.head_(qr_rs);
        r_rs = tail__inst_30_26_21_24_tsni(qr_rs);
        r = para.head_(r_rs);
        tmp10 = bf(p, q);
        tmp11 = bf(q, r);
        scrut = tmp10 <= tmp11;
        if (scrut === true) {
          return myAdd(p, r_rs)
        } else {
          return para.cons_(p, qr_rs)
        }
      }
    };
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_(tmp3);
    tmp5 = myAdd(tmp4, ps);
    tmp6 = drop_nofit(tmp5);
    tmp7 = trim(tmp6);
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
init__inst_30_26_21_22_tsni = function init__inst_30_26_21_22_tsni(a_b) {
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
        scrut1 = splitAt_inst_30_26_21_22_9_tsni(tmp1, y);
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
splitAt_inst_30_26_21_22_9_tsni = function splitAt_inst_30_26_21_22_9_tsni(n, ls) {
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
init__inst_30_26_21_23_tsni = function init__inst_30_26_21_23_tsni(a_b) {
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
        scrut1 = splitAt_inst_30_26_21_23_9_tsni(tmp1, y);
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
splitAt_inst_30_26_21_23_9_tsni = function splitAt_inst_30_26_21_23_9_tsni(n, ls) {
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
tail__inst_30_26_21_24_tsni = function tail__inst_30_26_21_24_tsni(a_b) {
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
        scrut1 = splitAt_inst_30_26_21_24_8_tsni(tmp1, y);
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
splitAt_inst_30_26_21_24_8_tsni = function splitAt_inst_30_26_21_24_8_tsni(n, ls) {
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
concat_inst_30_27_tsni = function concat_inst_30_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_27_28_tsni = function append_inst_30_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_30_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_30_40_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unparse_inst_30_25_tsni = function unparse_inst_30_25_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_30_25_16_tsni(ls);
  tmp1 = map_inst_30_25_15_tsni(para.unwords, tmp);
  return unlines_inst_30_25_14_tsni(tmp1)
};
unlines_inst_30_25_14_tsni = function unlines_inst_30_25_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(l, tmp1)
  });
  tmp = map_inst_30_25_14_3_tsni(lambda, ls);
  return concat_inst_30_25_14_32_tsni(tmp)
};
map_inst_30_25_14_3_tsni = function map_inst_30_25_14_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_30_25_15_tsni = function map_inst_30_25_15_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_25_15_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_30_25_14_3_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_30_25_14_32_tsni(xs2);
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
unparas_inst_30_25_16_tsni = function unparas_inst_30_25_16_tsni(ls) {
  return unformat_inst_30_25_16_10_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_30_25_16_10_tsni = function unformat_inst_30_25_16_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_30_25_16_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_30_25_16_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
testPara_nofib_inst_31_tsni = function testPara_nofib_inst_31_tsni() {
  let scrut;
  scrut = NofibPrelude.null_(para.test);
  if (scrut === true) {
    return () => {
      return match_ls_arm_Nil_inst_41_tsni()
    }
  } else {
    return fmt_inst_31_30_tsni(para.test)
  }
};
fmt_inst_31_30_tsni = function fmt_inst_31_30_tsni(x) {
  let tmp, tmp1, tmp2;
  tmp = parse_inst_31_30_29_tsni(x);
  tmp1 = concat_inst_31_30_27_tsni(tmp);
  tmp2 = map_inst_31_30_40_tsni(par3_inst_31_30_26_tsni, tmp1);
  return unparse_inst_31_30_25_tsni(tmp2)
};
unparse_inst_31_30_25_tsni = function unparse_inst_31_30_25_tsni(ls) {
  let tmp, tmp1;
  tmp = unparas_inst_31_30_25_16_tsni(ls);
  tmp1 = map_inst_31_30_25_15_tsni(para.unwords, tmp);
  return unlines_inst_31_30_25_14_tsni(tmp1)
};
unparas_inst_31_30_25_16_tsni = function unparas_inst_31_30_25_16_tsni(ls) {
  return unformat_inst_31_30_25_16_10_tsni(NofibPrelude.Nil, ls)
};
unformat_inst_31_30_25_16_10_tsni = function unformat_inst_31_30_25_16_10_tsni(a, l) {
  let tmp, lambda, lambda1;
  lambda = (undefined, function (xs, ys) {
    let tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = a;
    _deforest_Cons_tail = (ys1) => {
      return ys1
    };
    tmp1 = (ys1) => {
      let param0, param1, x, xs1, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = append_inst_31_30_25_16_10_36_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp3)
    };
    tmp2 = append_inst_31_30_25_16_10_36_tsni(tmp1, ys);
    return NofibPrelude.append(xs, tmp2)
  });
  tmp = lambda;
  lambda1 = (undefined, function (x) {
    return x
  });
  return para.fold1(tmp, lambda1, l)
};
unlines_inst_31_30_25_14_tsni = function unlines_inst_31_30_25_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1;
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(l, tmp1)
  });
  tmp = map_inst_31_30_25_14_3_tsni(lambda, ls);
  return concat_inst_31_30_25_14_32_tsni(tmp)
};
map_inst_31_30_25_14_3_tsni = function map_inst_31_30_25_14_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_30_25_15_tsni = function map_inst_31_30_25_15_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_31_30_25_15_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_31_30_25_14_3_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_31_30_25_14_32_tsni(xs2);
        return append_inst_31_30_25_14_32_28_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return () => {
          return match_ls_arm_Nil_inst_41_tsni()
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
par3_inst_31_30_26_tsni = function par3_inst_31_30_26_tsni(ws) {
  let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, lambda;
  tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
  tmp1 = para.scan1(stepr_inst_31_30_26_21_tsni, para.startr, tmp);
  zs = tmp1;
  lambda = (undefined, function (x) {
    let tmp6, tmp7;
    tmp6 = para.fst3(x);
    tmp7 = para.last_(tmp6);
    return para.len_tl(tmp7)
  });
  tmp2 = lambda;
  tmp3 = NofibPrelude.map(tmp2, zs);
  tmp4 = NofibPrelude.head(zs);
  tmp5 = para.thd3(tmp4);
  arr = [
    tmp3,
    tmp5
  ];
  return tile_inst_31_30_26_20_tsni(ws, arr)
};
stepr_inst_31_30_26_21_tsni = function stepr_inst_31_30_26_21_tsni(w, ps_tw_tl) {
  let bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
  if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
    first0 = ps_tw_tl[0];
    first1 = ps_tw_tl[1];
    first2 = ps_tw_tl[2];
    ps = first0;
    tw = first1;
    tl = first2;
    single = function single(p) {
      let tmp8;
      tmp8 = para.len_tl(p);
      return tmp8 === 0
    };
    width_hd = function width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tot_width
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tot_width - tmp8;
        return tmp9 - 1
      }
    };
    cost = function cost(p) {
      let a, scrut, tmp8, tmp9, tmp10, tmp11;
      scrut = single(p);
      if (scrut === true) {
        return 0
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = width_hd(p);
        tmp10 = para.optw - tmp9;
        a = tmp10;
        tmp11 = a * a;
        return tmp8 + tmp11
      }
    };
    old_width_hd = function old_width_hd(p) {
      let scrut, tmp8, tmp9;
      scrut = single(p);
      if (scrut === true) {
        return tw
      } else {
        tmp8 = para.width_tl(p);
        tmp9 = tw - tmp8;
        return tmp9 - 1
      }
    };
    new_ = function new_(p) {
      let x, scrut, arr1, tmp8, tmp9, tmp10, tmp11, tmp12, arr2;
      scrut = single(p);
      if (scrut === true) {
        arr1 = [
          tw,
          0,
          tl
        ];
        return arr1
      } else {
        tmp8 = para.cost_tl(p);
        tmp9 = old_width_hd(p);
        tmp10 = para.optw - tmp9;
        x = tmp10;
        tmp11 = x * x;
        tmp12 = tmp8 + tmp11;
        arr2 = [
          tw,
          tmp12,
          tl
        ];
        return arr2
      }
    };
    trim = function trim(ps_pq) {
      let ps_p, q, p, scrut, scrut1, scrut2, tmp8, tmp9;
      scrut2 = para.null__(ps_pq);
      if (scrut2 === true) {
        return ps_pq
      } else {
        scrut1 = para.single_(ps_pq);
        if (scrut1 === true) {
          return ps_pq
        } else {
          ps_p = init__inst_31_30_26_21_22_tsni(ps_pq);
          q = para.last_(ps_pq);
          p = para.last_(ps_p);
          tmp8 = cost(p);
          tmp9 = cost(q);
          scrut = tmp8 <= tmp9;
          if (scrut === true) {
            return trim(ps_p)
          } else {
            return ps_pq
          }
        }
      }
    };
    drop_nofit = function drop_nofit(ps_p) {
      let scrut, scrut1, tmp8, tmp9, tmp10;
      scrut1 = para.null__(ps_p);
      if (scrut1 === true) {
        return ps_p
      } else {
        tmp8 = para.last_(ps_p);
        tmp9 = width_hd(tmp8);
        scrut = tmp9 > para.maxw;
        if (scrut === true) {
          tmp10 = init__inst_31_30_26_21_23_tsni(ps_p);
          return drop_nofit(tmp10)
        } else {
          return ps_p
        }
      }
    };
    bf = function bf(p, q) {
      let wqh, rqh, scrut, scrut1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      tmp8 = width_hd(q);
      wqh = tmp8;
      tmp9 = para.maxw - wqh;
      tmp10 = tmp9 + 1;
      rqh = tmp10;
      tmp11 = single(q);
      tmp12 = para.cost_tl(p);
      tmp13 = tmp12 === 0;
      scrut1 = tmp11 && tmp13;
      if (scrut1 === true) {
        tmp14 = width_hd(p);
        tmp15 = para.optw - tmp14;
        return NofibPrelude.min(tmp15, rqh)
      } else {
        scrut = single(q);
        if (scrut === true) {
          return rqh
        } else {
          tmp16 = cost(p);
          tmp17 = cost(q);
          tmp18 = tmp16 - tmp17;
          tmp19 = width_hd(p);
          tmp20 = wqh - tmp19;
          tmp21 = 2 * tmp20;
          tmp22 = para.ceildiv(tmp18, tmp21);
          return NofibPrelude.min(tmp22, rqh)
        }
      }
    };
    myAdd = function myAdd(p, qr_rs) {
      let q, r_rs, r, scrut, scrut1, tmp8, tmp9, tmp10, tmp11;
      tmp8 = para.single_(qr_rs);
      tmp9 = para.null__(qr_rs);
      scrut1 = tmp8 || tmp9;
      if (scrut1 === true) {
        return para.cons_(p, qr_rs)
      } else {
        q = para.head_(qr_rs);
        r_rs = tail__inst_31_30_26_21_24_tsni(qr_rs);
        r = para.head_(r_rs);
        tmp10 = bf(p, q);
        tmp11 = bf(q, r);
        scrut = tmp10 <= tmp11;
        if (scrut === true) {
          return myAdd(p, r_rs)
        } else {
          return para.cons_(p, qr_rs)
        }
      }
    };
    tmp = w + 1;
    tmp1 = tmp + tw;
    tot_width = tmp1;
    tmp2 = 1 + tl;
    tot_len = tmp2;
    tmp3 = para.last_(ps);
    tmp4 = new_(tmp3);
    tmp5 = myAdd(tmp4, ps);
    tmp6 = drop_nofit(tmp5);
    tmp7 = trim(tmp6);
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
tail__inst_31_30_26_21_24_tsni = function tail__inst_31_30_26_21_24_tsni(a_b) {
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
        scrut1 = splitAt_inst_31_30_26_21_24_8_tsni(tmp1, y);
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
splitAt_inst_31_30_26_21_24_8_tsni = function splitAt_inst_31_30_26_21_24_8_tsni(n, ls) {
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
init__inst_31_30_26_21_23_tsni = function init__inst_31_30_26_21_23_tsni(a_b) {
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
        scrut1 = splitAt_inst_31_30_26_21_23_9_tsni(tmp1, y);
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
splitAt_inst_31_30_26_21_23_9_tsni = function splitAt_inst_31_30_26_21_23_9_tsni(n, ls) {
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
init__inst_31_30_26_21_22_tsni = function init__inst_31_30_26_21_22_tsni(a_b) {
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
        scrut1 = splitAt_inst_31_30_26_21_22_9_tsni(tmp1, y);
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
splitAt_inst_31_30_26_21_22_9_tsni = function splitAt_inst_31_30_26_21_22_9_tsni(n, ls) {
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
tile_inst_31_30_26_20_tsni = function tile_inst_31_30_26_20_tsni(ws, a_b) {
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
      scrut = splitAt_inst_31_30_26_20_7_tsni(l, ws);
      return runtime.safeCall(scrut(m, ms, l))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_inst_31_30_26_20_7_tsni = function splitAt_inst_31_30_26_20_7_tsni(n, ls) {
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
    tmp4 = tile_inst_31_30_26_20_tsni(ws2, arr1);
    return NofibPrelude.Cons(ws1, tmp4)
  };
  return arr
};
concat_inst_31_30_27_tsni = function concat_inst_31_30_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_30_27_28_tsni = function append_inst_31_30_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_30_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_31_30_40_tsni(f, xs2);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
parse_inst_31_30_29_tsni = function parse_inst_31_30_29_tsni(ls) {
  let tmp, tmp1;
  tmp = lines_inst_31_30_29_13_tsni(ls);
  tmp1 = map_inst_31_30_29_38_tsni(words_inst_31_30_29_12_tsni, tmp);
  return paras_inst_31_30_29_11_tsni(tmp1)
};
lines_inst_31_30_29_13_tsni = function lines_inst_31_30_29_13_tsni(s) {
  let scrut, first1, first0, l, s_, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x === "\n"
  });
  scrut = break__inst_31_30_29_13_2_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param0, param1, x, xs, tmp, tmp1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x));
      tmp1 = map_inst_31_30_29_38_tsni(f, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_31_30_29_13_2_tsni = function break__inst_31_30_29_13_2_tsni(p, xs) {
  let param0, param1, x, xs1, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (f) => {
          return NofibPrelude.Nil
        };
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
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_31_30_29_13_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_31_30_29_13_2_tsni(p, xs1);
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
words_inst_31_30_29_12_tsni = function words_inst_31_30_29_12_tsni(s) {
  let scrut;
  scrut = dropWhile_inst_31_30_29_12_0_tsni(para.isSpace, s);
  return runtime.safeCall(scrut())
};
dropWhile_inst_31_30_29_12_0_tsni = function dropWhile_inst_31_30_29_12_0_tsni(f, ls) {
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
      return dropWhile_inst_31_30_29_12_0_tsni(f, t)
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
          tmp1 = words_inst_31_30_29_12_tsni(s_);
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
paras_inst_31_30_29_11_tsni = function paras_inst_31_30_29_11_tsni(ls) {
  let tmp, lambda;
  tmp = para.format(NofibPrelude.Nil, ls);
  lambda = (undefined, function (x) {
    return listNeq_inst_31_30_29_11_37_tsni((ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }, x)
  });
  return filter_inst_31_30_29_11_19_tsni(lambda, tmp)
};
filter_inst_31_30_29_11_19_tsni = function filter_inst_31_30_29_11_19_tsni(f, ls) {
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
      tmp = filter_inst_31_30_29_11_19_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return () => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = concat_inst_31_30_27_tsni(xs);
        return append_inst_31_30_27_28_tsni(x, tmp1)
      }
    } else {
      return filter_inst_31_30_29_11_19_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_31_30_25_14_32_tsni = function concat_inst_31_30_25_14_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_30_25_14_32_28_tsni = function append_inst_31_30_25_14_32_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_31_30_25_14_32_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_41_tsni(t);
      return h + tmp1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_33_tsni = function concat_inst_33_tsni(ls) {
  return runtime.safeCall(ls())
};
break__inst_34_tsni = function break__inst_34_tsni(p, xs) {
  return runtime.safeCall(xs(p))
};
concat_inst_32_tsni = function concat_inst_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_4_35_tsni = function append_inst_4_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_36_tsni = function append_inst_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_11_37_tsni = function listNeq_inst_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_38_tsni = function map_inst_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_14_32_tsni = function concat_inst_14_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_16_10_36_tsni = function append_inst_16_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_16_10_36_tsni = function append_inst_17_16_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_17_14_32_tsni = function concat_inst_17_14_32_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_18_38_tsni = function map_inst_18_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
listNeq_inst_18_11_37_tsni = function listNeq_inst_18_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_tsni = function map_inst_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_25_16_10_36_tsni = function append_inst_25_16_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_25_14_32_tsni = function concat_inst_25_14_32_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_40_tsni = function map_inst_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_29_38_tsni = function map_inst_29_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
listNeq_inst_29_11_37_tsni = function listNeq_inst_29_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_30_29_11_37_tsni = function listNeq_inst_30_29_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_30_29_38_tsni = function map_inst_30_29_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_30_40_tsni = function map_inst_30_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_30_25_14_32_tsni = function concat_inst_30_25_14_32_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_25_16_10_36_tsni = function append_inst_30_25_16_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_31_30_25_16_10_36_tsni = function append_inst_31_30_25_16_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_31_30_40_tsni = function map_inst_31_30_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_31_30_29_38_tsni = function map_inst_31_30_29_38_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
listNeq_inst_31_30_29_11_37_tsni = function listNeq_inst_31_30_29_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_41_tsni = function nofibListToString_inst_41_tsni(ls) {
  return runtime.safeCall(ls())
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
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = tmp8;
    _deforest_Cons_tail8 = tmp10;
    tmp11 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = tmp7;
    _deforest_Cons_tail7 = tmp11;
    tmp12 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = tmp6;
    _deforest_Cons_tail6 = tmp12;
    tmp13 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp5;
    _deforest_Cons_tail5 = tmp13;
    tmp14 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp4;
    _deforest_Cons_tail4 = tmp14;
    tmp15 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp3;
    _deforest_Cons_tail3 = tmp15;
    tmp16 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp2;
    _deforest_Cons_tail2 = tmp16;
    tmp17 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp17;
    tmp18 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp18;
    tmp19 = () => {
      return match_ls_arm_Cons_inst_33_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp20 = concat_inst_33_tsni(tmp19);
    this.test = tmp20;
  }
  static unwords(ws) {
    let go, param0, param1, w, ws1, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      param0 = ws.head;
      param1 = ws.tail;
      w = param0;
      ws1 = param1;
      go = function go(vs) {
        let param01, param11, v, vs1, tmp1, tmp2;
        if (vs instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (vs instanceof NofibPrelude.Cons.class) {
          param01 = vs.head;
          param11 = vs.tail;
          v = param01;
          vs1 = param11;
          tmp1 = go(vs1);
          tmp2 = NofibPrelude.append(v, tmp1);
          return NofibPrelude.Cons(" ", tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      };
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
    scrut = dropWhile_inst_0_tsni(para.isSpace, s);
    return runtime.safeCall(scrut())
  } 
  static lines(s1) {
    let scrut, first1, first0, l, s_, lambda;
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = break__inst_2_tsni(lambda, s1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      l = first0;
      s_ = first1;
      runtime.safeCall(s_());
      return NofibPrelude.Cons(l, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (l) {
      let tmp1;
      tmp1 = NofibPrelude.nofibStringToList("\n");
      return NofibPrelude.append(l, tmp1)
    });
    tmp = map_inst_3_tsni(lambda, ls);
    return concat_inst_32_tsni(tmp)
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
    let tmp, lambda, lambda1;
    lambda = (undefined, function (a, s2) {
      let tmp1, tmp2;
      tmp1 = NofibPrelude.head(s2);
      tmp2 = runtime.safeCall(f1(a, tmp1));
      return NofibPrelude.Cons(tmp2, s2)
    });
    tmp = lambda;
    lambda1 = (undefined, function (a) {
      let tmp1;
      tmp1 = runtime.safeCall(g1(a));
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    });
    return para.fold1(tmp, lambda1, xs3)
  } 
  static tails(xs4) {
    let lambda, lambda1;
    lambda = (undefined, function (a, s2) {
      return NofibPrelude.Cons(a, s2)
    });
    lambda1 = (undefined, function (a) {
      return NofibPrelude.Cons(a, NofibPrelude.Nil)
    });
    return para.scan1(lambda, lambda1, xs4)
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
    let tmp, lambda, lambda1;
    lambda = (undefined, function (a, b) {
      let scrut, tmp1, tmp2;
      tmp1 = runtime.safeCall(f2(a));
      tmp2 = runtime.safeCall(f2(b));
      scrut = tmp1 < tmp2;
      if (scrut === true) {
        return a
      } else {
        return b
      }
    });
    tmp = lambda;
    lambda1 = (undefined, function (x) {
      return x
    });
    return para.fold1(tmp, lambda1, xs6)
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
    let tmp, tmp1, lambda, lambda1;
    lambda = (undefined, function (w2, ps) {
      let tmp2, tmp3, lambda2, lambda3;
      lambda2 = (undefined, function (p2) {
        return para.new_(w2, p2)
      });
      tmp2 = NofibPrelude.map(lambda2, ps);
      lambda3 = (undefined, function (p2) {
        return para.glue(w2, p2)
      });
      tmp3 = NofibPrelude.map(lambda3, ps);
      return NofibPrelude.append(tmp2, tmp3)
    });
    tmp = lambda;
    lambda1 = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
      tmp3 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
    });
    tmp1 = lambda1;
    return para.fold1(tmp, tmp1, txt)
  } 
  static width(ls3) {
    let plus;
    plus = function plus(w2, n) {
      let tmp, tmp1;
      tmp = NofibPrelude.listLen(w2);
      tmp1 = tmp + 1;
      return tmp1 + n
    };
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
    let linc, plus, lambda;
    linc = function linc(l) {
      let a1, tmp, tmp1;
      tmp = para.width(l);
      tmp1 = para.optw - tmp;
      a1 = tmp1;
      return a1 * a1
    };
    plus = function plus(l, n) {
      let tmp;
      tmp = linc(l);
      return tmp + n
    };
    lambda = (undefined, function (x) {
      return 0
    });
    return para.fold1(plus, lambda, ls4)
  } 
  static par0(x) {
    let tmp, tmp1;
    tmp = formats_inst_4_tsni(x);
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
        scrut = splitAt_inst_7_tsni(l, ws1);
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
          scrut1 = splitAt_inst_8_tsni(tmp1, y);
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
          scrut1 = splitAt_inst_9_tsni(tmp1, y);
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
    let tmp, lambda, lambda1;
    lambda = (undefined, function (xs8, ys) {
      let tmp1, tmp2;
      tmp1 = NofibPrelude.Cons(a3, NofibPrelude.Nil);
      tmp2 = NofibPrelude.append(tmp1, ys);
      return NofibPrelude.append(xs8, tmp2)
    });
    tmp = lambda;
    lambda1 = (undefined, function (x1) {
      return x1
    });
    return para.fold1(tmp, lambda1, l)
  } 
  static format(a4, x1) {
    let start, breakk, unknownEq, lambda, lambda1;
    if (x1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else {
      unknownEq = function unknownEq(a5, b) {
        return a5 === b
      };
      breakk = function breakk(a5, b, xs8) {
        let scrut, tmp, tmp1, tmp2;
        scrut = unknownEq(a5, b);
        if (scrut === true) {
          return NofibPrelude.Cons(NofibPrelude.Nil, xs8)
        } else {
          tmp = NofibPrelude.head(xs8);
          tmp1 = NofibPrelude.Cons(b, tmp);
          tmp2 = NofibPrelude.tail(xs8);
          return NofibPrelude.Cons(tmp1, tmp2)
        }
      };
      start = function start(a5, b) {
        let tmp;
        tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
        return breakk(a5, b, tmp)
      };
      lambda = (undefined, function (x2, y) {
        return breakk(a4, x2, y)
      });
      lambda1 = (undefined, function (y) {
        return start(a4, y)
      });
      return para.fold1(lambda, lambda1, x1)
    }
  } 
  static unparas(ls6) {
    return unformat_inst_10_tsni(NofibPrelude.Nil, ls6)
  } 
  static paras(ls7) {
    let tmp, lambda;
    tmp = para.format(NofibPrelude.Nil, ls7);
    lambda = (undefined, function (x2) {
      return NofibPrelude.listNeq(NofibPrelude.Nil, x2)
    });
    return NofibPrelude.filter(lambda, tmp)
  } 
  static parse(ls8) {
    let tmp, tmp1;
    tmp = lines_inst_13_tsni(ls8);
    tmp1 = map_inst_38_tsni(words_inst_12_tsni, tmp);
    return paras_inst_11_tsni(tmp1)
  } 
  static unparse(ls9) {
    let tmp, tmp1;
    tmp = unparas_inst_16_tsni(ls9);
    tmp1 = map_inst_15_tsni(para.unwords, tmp);
    return unlines_inst_14_tsni(tmp1)
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
    let tmp, tmp1, lambda;
    tmp = parse_inst_18_tsni(par);
    lambda = (undefined, function (x2) {
      let tmp2;
      tmp2 = NofibPrelude.concat(x2);
      return runtime.safeCall(par(tmp2))
    });
    tmp1 = map_inst_39_tsni(lambda, tmp);
    return unparse_inst_17_tsni(tmp1)
  } 
  static stepr(w2, ps_tw_tl) {
    let bf, old_width_hd, width_hd, myAdd, single, trim, new_, cost, drop_nofit, first2, first1, first0, ps, tw, tl, tot_width, tot_len, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr;
    if (globalThis.Array.isArray(ps_tw_tl) && ps_tw_tl.length === 3) {
      first0 = ps_tw_tl[0];
      first1 = ps_tw_tl[1];
      first2 = ps_tw_tl[2];
      ps = first0;
      tw = first1;
      tl = first2;
      single = function single(p2) {
        let tmp8;
        tmp8 = para.len_tl(p2);
        return tmp8 === 0
      };
      width_hd = function width_hd(p2) {
        let scrut, tmp8, tmp9;
        scrut = single(p2);
        if (scrut === true) {
          return tot_width
        } else {
          tmp8 = para.width_tl(p2);
          tmp9 = tot_width - tmp8;
          return tmp9 - 1
        }
      };
      cost = function cost(p2) {
        let a6, scrut, tmp8, tmp9, tmp10, tmp11;
        scrut = single(p2);
        if (scrut === true) {
          return 0
        } else {
          tmp8 = para.cost_tl(p2);
          tmp9 = width_hd(p2);
          tmp10 = para.optw - tmp9;
          a6 = tmp10;
          tmp11 = a6 * a6;
          return tmp8 + tmp11
        }
      };
      old_width_hd = function old_width_hd(p2) {
        let scrut, tmp8, tmp9;
        scrut = single(p2);
        if (scrut === true) {
          return tw
        } else {
          tmp8 = para.width_tl(p2);
          tmp9 = tw - tmp8;
          return tmp9 - 1
        }
      };
      new_ = function new_(p2) {
        let x2, scrut, arr1, tmp8, tmp9, tmp10, tmp11, tmp12, arr2;
        scrut = single(p2);
        if (scrut === true) {
          arr1 = [
            tw,
            0,
            tl
          ];
          return arr1
        } else {
          tmp8 = para.cost_tl(p2);
          tmp9 = old_width_hd(p2);
          tmp10 = para.optw - tmp9;
          x2 = tmp10;
          tmp11 = x2 * x2;
          tmp12 = tmp8 + tmp11;
          arr2 = [
            tw,
            tmp12,
            tl
          ];
          return arr2
        }
      };
      trim = function trim(ps_pq) {
        let ps_p, q, p2, scrut, scrut1, scrut2, tmp8, tmp9;
        scrut2 = para.null__(ps_pq);
        if (scrut2 === true) {
          return ps_pq
        } else {
          scrut1 = para.single_(ps_pq);
          if (scrut1 === true) {
            return ps_pq
          } else {
            ps_p = para.init_(ps_pq);
            q = para.last_(ps_pq);
            p2 = para.last_(ps_p);
            tmp8 = cost(p2);
            tmp9 = cost(q);
            scrut = tmp8 <= tmp9;
            if (scrut === true) {
              return trim(ps_p)
            } else {
              return ps_pq
            }
          }
        }
      };
      drop_nofit = function drop_nofit(ps_p) {
        let scrut, scrut1, tmp8, tmp9, tmp10;
        scrut1 = para.null__(ps_p);
        if (scrut1 === true) {
          return ps_p
        } else {
          tmp8 = para.last_(ps_p);
          tmp9 = width_hd(tmp8);
          scrut = tmp9 > para.maxw;
          if (scrut === true) {
            tmp10 = para.init_(ps_p);
            return drop_nofit(tmp10)
          } else {
            return ps_p
          }
        }
      };
      bf = function bf(p2, q) {
        let wqh, rqh, scrut, scrut1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
        tmp8 = width_hd(q);
        wqh = tmp8;
        tmp9 = para.maxw - wqh;
        tmp10 = tmp9 + 1;
        rqh = tmp10;
        tmp11 = single(q);
        tmp12 = para.cost_tl(p2);
        tmp13 = tmp12 === 0;
        scrut1 = tmp11 && tmp13;
        if (scrut1 === true) {
          tmp14 = width_hd(p2);
          tmp15 = para.optw - tmp14;
          return NofibPrelude.min(tmp15, rqh)
        } else {
          scrut = single(q);
          if (scrut === true) {
            return rqh
          } else {
            tmp16 = cost(p2);
            tmp17 = cost(q);
            tmp18 = tmp16 - tmp17;
            tmp19 = width_hd(p2);
            tmp20 = wqh - tmp19;
            tmp21 = 2 * tmp20;
            tmp22 = para.ceildiv(tmp18, tmp21);
            return NofibPrelude.min(tmp22, rqh)
          }
        }
      };
      myAdd = function myAdd(p2, qr_rs) {
        let q, r_rs, r, scrut, scrut1, tmp8, tmp9, tmp10, tmp11;
        tmp8 = para.single_(qr_rs);
        tmp9 = para.null__(qr_rs);
        scrut1 = tmp8 || tmp9;
        if (scrut1 === true) {
          return para.cons_(p2, qr_rs)
        } else {
          q = para.head_(qr_rs);
          r_rs = para.tail_(qr_rs);
          r = para.head_(r_rs);
          tmp10 = bf(p2, q);
          tmp11 = bf(q, r);
          scrut = tmp10 <= tmp11;
          if (scrut === true) {
            return myAdd(p2, r_rs)
          } else {
            return para.cons_(p2, qr_rs)
          }
        }
      };
      tmp = w2 + 1;
      tmp1 = tmp + tw;
      tot_width = tmp1;
      tmp2 = 1 + tl;
      tot_len = tmp2;
      tmp3 = para.last_(ps);
      tmp4 = new_(tmp3);
      tmp5 = myAdd(tmp4, ps);
      tmp6 = drop_nofit(tmp5);
      tmp7 = trim(tmp6);
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
    let zs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, lambda;
    tmp = NofibPrelude.map(NofibPrelude.listLen, ws2);
    tmp1 = para.scan1(stepr_inst_21_tsni, para.startr, tmp);
    zs = tmp1;
    lambda = (undefined, function (x2) {
      let tmp6, tmp7;
      tmp6 = para.fst3(x2);
      tmp7 = para.last_(tmp6);
      return para.len_tl(tmp7)
    });
    tmp2 = lambda;
    tmp3 = NofibPrelude.map(tmp2, zs);
    tmp4 = NofibPrelude.head(zs);
    tmp5 = para.thd3(tmp4);
    arr = [
      tmp3,
      tmp5
    ];
    return tile_inst_20_tsni(ws2, arr)
  } 
  static fmt(x2) {
    let tmp, tmp1, tmp2;
    tmp = parse_inst_29_tsni(x2);
    tmp1 = concat_inst_27_tsni(tmp);
    tmp2 = map_inst_40_tsni(par3_inst_26_tsni, tmp1);
    return unparse_inst_25_tsni(tmp2)
  } 
  static testPara_nofib() {
    let scrut;
    scrut = NofibPrelude.null_(para.test);
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      return fmt_inst_30_tsni(para.test)
    }
  } 
  static main() {
    let tmp;
    tmp = testPara_nofib_inst_31_tsni();
    return nofibListToString_inst_41_tsni(tmp)
  }
  static toString() { return "para"; }
});
let para = para1; export default para;
