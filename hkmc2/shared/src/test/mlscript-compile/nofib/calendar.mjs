import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let calendar1, map_inst_0_tsni, groop_inst_1_tsni, groop_inst_2_tsni, zipWith_inst_3_tsni, emptyPic_inst_4_tsni, replicate_inst_4_5_tsni, map_inst_6_tsni, scanl_inst_7_tsni, monthLengths_inst_8_tsni, space_inst_9_tsni, replicate_inst_9_10_tsni, rjustify_inst_11_tsni, space_inst_11_9_tsni, replicate_inst_11_9_10_tsni, enumFromTo_inst_12_tsni, space_inst_13_tsni, replicate_inst_13_10_tsni, unlines_inst_14_tsni, map_inst_14_0_tsni, enumFromTo_inst_15_tsni, concat_inst_16_tsni, append_inst_16_17_tsni, testCalendar_nofib_inst_18_tsni, cal_inst_18_19_tsni, unlines_inst_18_19_14_tsni, map_inst_18_19_14_0_tsni, monthLengths_inst_18_19_20_tsni, firstDays_inst_18_19_21_tsni, monthLengths_inst_18_19_21_8_tsni, scanl_inst_18_19_21_7_tsni, map_inst_18_19_21_6_tsni, take_inst_18_19_21_22_tsni, block_inst_18_19_23_tsni, groop_inst_18_19_23_1_tsni, dates_inst_18_19_24_tsni, date_inst_18_19_24_25_tsni, rjustify_inst_18_19_24_25_11_tsni, space_inst_18_19_24_25_11_9_tsni, replicate_inst_18_19_24_25_11_9_10_tsni, enumFromTo_inst_18_19_24_12_tsni, cjustify_inst_18_19_26_tsni, space_inst_18_19_26_13_tsni, replicate_inst_18_19_26_13_10_tsni, zipWith_inst_18_19_27_tsni, zipWith_inst_18_19_28_tsni, block_inst_18_19_29_tsni, groop_inst_18_19_29_1_tsni, zip3_inst_18_19_30_tsni, cjustify_inst_18_19_31_tsni, space_inst_18_19_31_13_tsni, replicate_inst_18_19_31_13_10_tsni, enumFromTo_inst_18_15_tsni, map_inst_18_32_tsni, concat_inst_33_tsni, map_inst_34_tsni, map_inst_35_tsni, emptyPic_inst_36_tsni, append_inst_37_tsni, take_inst_22_tsni, append_inst_38_tsni, append_inst_11_38_tsni, map_inst_39_tsni, append_inst_40_tsni, concat_inst_14_33_tsni, emptyPic_inst_41_tsni, emptyPic_inst_42_tsni, map_inst_32_tsni, nofibListToString_inst_43_tsni, concat_inst_18_19_14_33_tsni, emptyPic_inst_18_19_41_tsni, emptyPic_inst_18_19_42_tsni, map_inst_18_19_23_34_tsni, append_inst_18_19_24_25_11_38_tsni, map_inst_18_19_24_39_tsni, append_inst_18_19_44_tsni, append_inst_18_19_26_40_tsni, append_inst_18_19_45_tsni, append_inst_18_19_46_tsni, map_inst_18_19_29_34_tsni, map_inst_18_19_47_tsni, emptyPic_inst_18_19_48_tsni, append_inst_18_19_31_40_tsni, match_xs_arm_Nil_inst_37_tsni, match_xs_arm_Cons_inst_6_tsni, match_ls_arm_Cons_inst_7_tsni, match_xs_arm_Cons_inst_18_19_30_tsni, match_zs_arm_Cons_inst_18_19_30_tsni, match_ls_arm_Cons_inst_18_19_21_7_tsni, match_xs_arm_Cons_inst_18_19_21_6_tsni, match_ys_arm_default_inst_18_19_30_tsni, match_xs_arm_Nil_inst_18_19_45_tsni, match_xss_arm_default_inst_18_19_27_tsni, match_xs_arm_Nil_inst_18_19_47_tsni;
match_xs_arm_Nil_inst_37_tsni = function match_xs_arm_Nil_inst_37_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_6_tsni = function match_xs_arm_Cons_inst_6_tsni(f, _deforest_Cons_head_inst_6_tsni, _deforest_Cons_tail_inst_6_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_6_tsni;
  param1 = _deforest_Cons_tail_inst_6_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_6_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_22_tsni(tmp2, t);
      return NofibPrelude.Cons(h, tmp3)
    }
  }
};
match_ls_arm_Cons_inst_7_tsni = function match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head_inst_7_tsni, _deforest_Cons_tail_inst_7_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_7_tsni;
  param1 = _deforest_Cons_tail_inst_7_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_7_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_6_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_18_19_30_tsni = function match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head_inst_18_19_30_tsni, _deforest_Cons_tail_inst_18_19_30_tsni) {
  let param0, param1, x, xs;
  param0 = _deforest_Cons_head_inst_18_19_30_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_30_tsni;
  x = param0;
  xs = param1;
  return runtime.safeCall(ys(zs, x, xs))
};
match_zs_arm_Cons_inst_18_19_30_tsni = function match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head_inst_18_19_30_tsni, _deforest_Cons_tail_inst_18_19_30_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_18_19_30_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_30_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (title, table) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title(mn);
    tmp2 = table(fd, ml);
    return append_inst_18_19_46_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_18_19_30_tsni(xs, ys, zs);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_18_19_47_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_ls_arm_Cons_inst_18_19_21_7_tsni = function match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head_inst_18_19_21_7_tsni, _deforest_Cons_tail_inst_18_19_21_7_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_18_19_21_7_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_21_7_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_18_19_21_7_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_18_19_21_6_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_18_19_21_6_tsni = function match_xs_arm_Cons_inst_18_19_21_6_tsni(f, _deforest_Cons_head_inst_18_19_21_6_tsni, _deforest_Cons_tail_inst_18_19_21_6_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_18_19_21_6_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_21_6_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_18_19_21_6_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_18_19_30_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_18_19_21_22_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ys_arm_default_inst_18_19_30_tsni = function match_ys_arm_default_inst_18_19_30_tsni(zs, x, xs) {
  return (f) => {
    return match_xs_arm_Nil_inst_18_19_47_tsni(f)
  }
};
match_xs_arm_Nil_inst_18_19_45_tsni = function match_xs_arm_Nil_inst_18_19_45_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_18_19_27_tsni = function match_xss_arm_default_inst_18_19_27_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_18_19_45_tsni(ys)
  }
};
match_xs_arm_Nil_inst_18_19_47_tsni = function match_xs_arm_Nil_inst_18_19_47_tsni(f) {
  return NofibPrelude.Nil
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
      tmp2 = concat_inst_33_tsni(xs2);
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
groop_inst_1_tsni = function groop_inst_1_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_1_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_34_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
groop_inst_2_tsni = function groop_inst_2_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_2_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_35_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
zipWith_inst_3_tsni = function zipWith_inst_3_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_Nil_inst_37_tsni(ys)
    }
  }
};
emptyPic_inst_4_tsni = function emptyPic_inst_4_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_4_5_tsni = function replicate_inst_4_5_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, x1, xs) => {
      return (ys) => {
        return match_xs_arm_Nil_inst_37_tsni(ys)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_4_5_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, x1, xs) => {
      let param0, param1, y, ys, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      tmp2 = runtime.safeCall(f(x1, y));
      tmp3 = zipWith_inst_3_tsni(f, xs, ys);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = append_inst_37_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp4)
      }
    }
  }
};
map_inst_6_tsni = function map_inst_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_7_tsni = function scanl_inst_7_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_8_tsni = function monthLengths_inst_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return NofibPrelude.Nil
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_6_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_7_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
space_inst_9_tsni = function space_inst_9_tsni(n) {
  return replicate_inst_9_10_tsni(n, " ")
};
replicate_inst_9_10_tsni = function replicate_inst_9_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
rjustify_inst_11_tsni = function rjustify_inst_11_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_11_9_tsni(tmp1);
  return append_inst_11_38_tsni(tmp2, s)
};
space_inst_11_9_tsni = function space_inst_11_9_tsni(n) {
  return replicate_inst_11_9_10_tsni(n, " ")
};
replicate_inst_11_9_10_tsni = function replicate_inst_11_9_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_9_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_12_tsni = function enumFromTo_inst_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_39_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
space_inst_13_tsni = function space_inst_13_tsni(n) {
  return replicate_inst_13_10_tsni(n, " ")
};
replicate_inst_13_10_tsni = function replicate_inst_13_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
unlines_inst_14_tsni = function unlines_inst_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return NofibPrelude.append(x, tmp1)
  });
  tmp = map_inst_14_0_tsni(lambda, ls);
  return concat_inst_14_33_tsni(tmp)
};
map_inst_14_0_tsni = function map_inst_14_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_14_33_tsni(xs2);
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
enumFromTo_inst_15_tsni = function enumFromTo_inst_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_32_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
concat_inst_16_tsni = function concat_inst_16_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_16_17_tsni = function append_inst_16_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_16_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_43_tsni(t);
      return h + tmp1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testCalendar_nofib_inst_18_tsni = function testCalendar_nofib_inst_18_tsni(n) {
  let tmp, tmp1, lambda;
  tmp = 1993 + n;
  tmp1 = enumFromTo_inst_18_15_tsni(1993, tmp);
  lambda = (undefined, function (x) {
    return cal_inst_18_19_tsni(x)
  });
  return map_inst_18_32_tsni(lambda, tmp1)
};
cal_inst_18_19_tsni = function cal_inst_18_19_tsni(year) {
  let body, pad, banner, entries, pic, title, months, table, side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
  banner = function banner(yr) {
    let tmp7, tmp8, tmp9, arr2, tmp10, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
    tmp7 = NofibPrelude.stringOfInt(yr);
    tmp8 = NofibPrelude.nofibStringToList(tmp7);
    tmp9 = cjustify_inst_18_19_31_tsni(75, tmp8);
    _deforest_Deforest_Arr_2_02 = 1;
    _deforest_Deforest_Arr_2_12 = 75;
    arr2 = () => {
      let first1, first0, h, w, tmp11;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      h = first0;
      w = first1;
      tmp11 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp11)
    };
    tmp10 = emptyPic_inst_18_19_48_tsni(arr2);
    return NofibPrelude.Cons(tmp9, tmp10)
  };
  body = function body(yr) {
    let tmp7, tmp8, lambda;
    tmp7 = months(yr);
    lambda = (undefined, function (x) {
      let tmp9;
      tmp9 = pic(x);
      return pad(tmp9)
    });
    tmp8 = map_inst_18_19_47_tsni(lambda, tmp7);
    return block_inst_18_19_29_tsni(3, tmp8)
  };
  pic = function pic(mnfdml) {
    return runtime.safeCall(mnfdml(title, table))
  };
  pad = function pad(p) {
    let tmp7, tmp8;
    tmp7 = zipWith_inst_18_19_28_tsni(NofibPrelude.append, side, p);
    tmp8 = zipWith_inst_18_19_27_tsni(NofibPrelude.append, tmp7, side);
    return append_inst_18_19_45_tsni(tmp8, end)
  };
  title = function title(mn) {
    let tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
    tmp7 = cjustify_inst_18_19_26_tsni(21, mn);
    _deforest_Cons_head1 = tmp7;
    _deforest_Cons_tail1 = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp8;
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp8 = append_inst_18_19_46_tsni(xs, ys);
      return NofibPrelude.Cons(x, tmp8)
    }
  };
  table = function table(fd, ml) {
    let tmp7;
    tmp7 = entries(fd, ml);
    return append_inst_18_19_44_tsni(daynames, tmp7)
  };
  entries = function entries(fd, ml) {
    let tmp7;
    tmp7 = dates_inst_18_19_24_tsni(fd, ml);
    return block_inst_18_19_23_tsni(7, tmp7)
  };
  months = function months(yer) {
    let tmp7, tmp8;
    tmp7 = firstDays_inst_18_19_21_tsni(yer);
    tmp8 = monthLengths_inst_18_19_20_tsni(yer);
    return zip3_inst_18_19_30_tsni(calendar.monthNames, tmp7, tmp8)
  };
  _deforest_Deforest_Arr_2_01 = 8;
  _deforest_Deforest_Arr_2_11 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_18_19_42_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_18_19_41_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_18_19_44_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner(year);
  tmp5 = body(year);
  tmp6 = NofibPrelude.append(tmp4, tmp5);
  return unlines_inst_18_19_14_tsni(tmp6)
};
unlines_inst_18_19_14_tsni = function unlines_inst_18_19_14_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1;
    tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return NofibPrelude.append(x, tmp1)
  });
  tmp = map_inst_18_19_14_0_tsni(lambda, ls);
  return concat_inst_18_19_14_33_tsni(tmp)
};
map_inst_18_19_14_0_tsni = function map_inst_18_19_14_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_18_19_14_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_18_19_14_33_tsni(xs2);
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
monthLengths_inst_18_19_20_tsni = function monthLengths_inst_18_19_20_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return (f) => {
      return match_xs_arm_Nil_inst_18_19_47_tsni(f)
    }
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_18_19_30_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_18_19_21_tsni = function firstDays_inst_18_19_21_tsni(year) {
  let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_18_19_21_8_tsni(year);
  lambda = (undefined, function (a, b) {
    return a + b
  });
  tmp2 = scanl_inst_18_19_21_7_tsni(lambda, tmp, tmp1);
  lambda1 = (undefined, function (x) {
    return NofibPrelude.intMod(x, 7)
  });
  tmp3 = map_inst_18_19_21_6_tsni(lambda1, tmp2);
  return take_inst_18_19_21_22_tsni(12, tmp3)
};
monthLengths_inst_18_19_21_8_tsni = function monthLengths_inst_18_19_21_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_18_19_30_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_18_19_21_6_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_18_19_21_7_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_18_19_21_7_tsni = function scanl_inst_18_19_21_7_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_18_19_21_6_tsni = function map_inst_18_19_21_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_18_19_21_22_tsni = function take_inst_18_19_21_22_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
block_inst_18_19_23_tsni = function block_inst_18_19_23_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_18_19_23_1_tsni(n, t);
  tmp1 = map_inst_18_19_23_34_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_18_19_23_1_tsni = function groop_inst_18_19_23_1_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_18_19_23_1_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_18_19_23_34_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_18_19_24_tsni = function dates_inst_18_19_24_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_18_19_24_12_tsni(tmp, tmp1);
  lambda = (undefined, function (d) {
    return date_inst_18_19_24_25_tsni(ml, d)
  });
  return map_inst_18_19_24_39_tsni(lambda, tmp2)
};
date_inst_18_19_24_25_tsni = function date_inst_18_19_24_25_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_18_19_24_25_11_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_18_19_24_25_11_tsni = function rjustify_inst_18_19_24_25_11_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_18_19_24_25_11_9_tsni(tmp1);
  return append_inst_18_19_24_25_11_38_tsni(tmp2, s)
};
space_inst_18_19_24_25_11_9_tsni = function space_inst_18_19_24_25_11_9_tsni(n) {
  return replicate_inst_18_19_24_25_11_9_10_tsni(n, " ")
};
replicate_inst_18_19_24_25_11_9_10_tsni = function replicate_inst_18_19_24_25_11_9_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_19_24_25_11_9_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_19_24_25_11_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_18_19_24_12_tsni = function enumFromTo_inst_18_19_24_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_18_19_24_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_18_19_24_39_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
cjustify_inst_18_19_26_tsni = function cjustify_inst_18_19_26_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_18_19_26_13_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_18_19_26_40_tsni(tmp3, tmp6)
};
space_inst_18_19_26_13_tsni = function space_inst_18_19_26_13_tsni(n) {
  return replicate_inst_18_19_26_13_10_tsni(n, " ")
};
replicate_inst_18_19_26_13_10_tsni = function replicate_inst_18_19_26_13_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_19_26_13_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_19_26_40_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
zipWith_inst_18_19_27_tsni = function zipWith_inst_18_19_27_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_18_19_28_tsni = function zipWith_inst_18_19_28_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_18_19_28_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_18_19_27_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_18_19_45_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_18_19_45_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_18_19_27_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_18_19_27_tsni(f1, yss1)
    }
  }
};
block_inst_18_19_29_tsni = function block_inst_18_19_29_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_18_19_29_1_tsni(n, t);
  tmp1 = map_inst_18_19_29_34_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_18_19_29_1_tsni = function groop_inst_18_19_29_1_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_18_19_29_1_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_18_19_29_34_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
zip3_inst_18_19_30_tsni = function zip3_inst_18_19_30_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
cjustify_inst_18_19_31_tsni = function cjustify_inst_18_19_31_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_18_19_31_13_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_18_19_31_40_tsni(tmp3, tmp6)
};
space_inst_18_19_31_13_tsni = function space_inst_18_19_31_13_tsni(n) {
  return replicate_inst_18_19_31_13_10_tsni(n, " ")
};
replicate_inst_18_19_31_13_10_tsni = function replicate_inst_18_19_31_13_10_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_19_31_13_10_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_19_31_40_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_18_15_tsni = function enumFromTo_inst_18_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_18_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_18_32_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x1, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs1 = param11;
        tmp4 = concat_inst_16_tsni(xs1);
        return append_inst_16_17_tsni(x1, tmp4)
      }
    }
  } else {
    return (f) => {
      return () => {
        return () => {
          return ""
        }
      }
    }
  }
};
map_inst_18_32_tsni = function map_inst_18_32_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_33_tsni = function concat_inst_33_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_34_tsni = function map_inst_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_35_tsni = function map_inst_35_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_36_tsni = function emptyPic_inst_36_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_37_tsni = function append_inst_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_inst_22_tsni = function take_inst_22_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
append_inst_38_tsni = function append_inst_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_38_tsni = function append_inst_11_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_tsni = function map_inst_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_40_tsni = function append_inst_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_14_33_tsni = function concat_inst_14_33_tsni(ls) {
  return runtime.safeCall(ls())
};
emptyPic_inst_41_tsni = function emptyPic_inst_41_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_42_tsni = function emptyPic_inst_42_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_32_tsni = function map_inst_32_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
nofibListToString_inst_43_tsni = function nofibListToString_inst_43_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_18_19_14_33_tsni = function concat_inst_18_19_14_33_tsni(ls) {
  return runtime.safeCall(ls())
};
emptyPic_inst_18_19_41_tsni = function emptyPic_inst_18_19_41_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_18_19_42_tsni = function emptyPic_inst_18_19_42_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_18_19_23_34_tsni = function map_inst_18_19_23_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_18_19_24_25_11_38_tsni = function append_inst_18_19_24_25_11_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_18_19_24_39_tsni = function map_inst_18_19_24_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_18_19_44_tsni = function append_inst_18_19_44_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_19_26_40_tsni = function append_inst_18_19_26_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_19_45_tsni = function append_inst_18_19_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_19_46_tsni = function append_inst_18_19_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_18_19_29_34_tsni = function map_inst_18_19_29_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_18_19_47_tsni = function map_inst_18_19_47_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_18_19_48_tsni = function emptyPic_inst_18_19_48_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_18_19_31_40_tsni = function append_inst_18_19_31_40_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
(class calendar {
  static {
    calendar1 = calendar;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    _deforest_Cons_head11 = tmp11;
    _deforest_Cons_tail11 = (ys, zs) => {
      return (f) => {
        return match_xs_arm_Nil_inst_18_19_47_tsni(f)
      }
    };
    tmp12 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head11, _deforest_Cons_tail11)
    };
    _deforest_Cons_head10 = tmp10;
    _deforest_Cons_tail10 = tmp12;
    tmp13 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head10, _deforest_Cons_tail10)
    };
    _deforest_Cons_head9 = tmp9;
    _deforest_Cons_tail9 = tmp13;
    tmp14 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = tmp8;
    _deforest_Cons_tail8 = tmp14;
    tmp15 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = tmp7;
    _deforest_Cons_tail7 = tmp15;
    tmp16 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = tmp6;
    _deforest_Cons_tail6 = tmp16;
    tmp17 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp5;
    _deforest_Cons_tail5 = tmp17;
    tmp18 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp4;
    _deforest_Cons_tail4 = tmp18;
    tmp19 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp3;
    _deforest_Cons_tail3 = tmp19;
    tmp20 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp2;
    _deforest_Cons_tail2 = tmp20;
    tmp21 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp21;
    tmp22 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp22;
    tmp23 = (ys, zs) => {
      return match_xs_arm_Cons_inst_18_19_30_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
    };
    this.monthNames = tmp23;
  }
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(x, tmp1)
    });
    tmp = map_inst_0_tsni(lambda, ls);
    return concat_inst_33_tsni(tmp)
  } 
  static height(p) {
    return NofibPrelude.listLen(p)
  } 
  static width(p1) {
    let tmp;
    tmp = NofibPrelude.head(p1);
    return NofibPrelude.listLen(tmp)
  } 
  static stack(ls1) {
    let lambda;
    lambda = (undefined, function (a, b) {
      return NofibPrelude.append(a, b)
    });
    return NofibPrelude.foldr1(lambda, ls1)
  } 
  static spread(ls2) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let lambda1;
      lambda1 = (undefined, function (a1, b1) {
        return NofibPrelude.append(a1, b1)
      });
      return NofibPrelude.zipWith(lambda1, a, b)
    });
    return NofibPrelude.foldr1(lambda, ls2)
  } 
  static emptyPic(hw) {
    let first1, first0, h, w, tmp;
    if (globalThis.Array.isArray(hw) && hw.length === 2) {
      first0 = hw[0];
      first1 = hw[1];
      h = first0;
      w = first1;
      tmp = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      tmp = NofibPrelude.take(n, xs);
      tmp1 = NofibPrelude.drop(n, xs);
      tmp2 = calendar.groop(n, tmp1);
      return NofibPrelude.Cons(tmp, tmp2)
    }
  } 
  static block(n1, t) {
    let tmp, tmp1;
    tmp = groop_inst_1_tsni(n1, t);
    tmp1 = map_inst_34_tsni(calendar.spread, tmp);
    return calendar.stack(tmp1)
  } 
  static blockT(n2, t1) {
    let tmp, tmp1;
    tmp = groop_inst_2_tsni(n2, t1);
    tmp1 = map_inst_35_tsni(calendar.stack, tmp);
    return calendar.stack(tmp1)
  } 
  static lframe(mn, p2) {
    let first1, first0, m, n3, h, w, tmp, tmp1, tmp2, arr, tmp3, tmp4, tmp5, arr1, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    if (globalThis.Array.isArray(mn) && mn.length === 2) {
      first0 = mn[0];
      first1 = mn[1];
      m = first0;
      n3 = first1;
      tmp = calendar.height(p2);
      h = tmp;
      tmp1 = calendar.width(p2);
      w = tmp1;
      tmp2 = n3 - w;
      _deforest_Deforest_Arr_2_01 = h;
      _deforest_Deforest_Arr_2_11 = tmp2;
      arr = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return replicate_inst_4_5_tsni(h1, tmp7)
      };
      tmp3 = emptyPic_inst_4_tsni(arr);
      tmp4 = zipWith_inst_3_tsni(NofibPrelude.append, p2, tmp3);
      tmp5 = m - h;
      _deforest_Deforest_Arr_2_0 = tmp5;
      _deforest_Deforest_Arr_2_1 = n3;
      arr1 = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_0;
        first11 = _deforest_Deforest_Arr_2_1;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return NofibPrelude.replicate(h1, tmp7)
      };
      tmp6 = emptyPic_inst_36_tsni(arr1);
      return append_inst_37_tsni(tmp4, tmp6)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static leap(year) {
    let scrut, tmp, tmp1, tmp2;
    tmp = NofibPrelude.intMod(year, 100);
    scrut = tmp == 0;
    if (scrut === true) {
      tmp1 = NofibPrelude.intMod(year, 400);
      return tmp1 == 0
    } else {
      tmp2 = NofibPrelude.intMod(year, 4);
      return tmp2 == 0
    }
  } 
  static monthLengths(year1) {
    let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.leap(year1);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    feb = tmp;
    tmp1 = NofibPrelude.Cons(31, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(30, tmp1);
    tmp3 = NofibPrelude.Cons(31, tmp2);
    tmp4 = NofibPrelude.Cons(30, tmp3);
    tmp5 = NofibPrelude.Cons(31, tmp4);
    tmp6 = NofibPrelude.Cons(31, tmp5);
    tmp7 = NofibPrelude.Cons(30, tmp6);
    tmp8 = NofibPrelude.Cons(31, tmp7);
    tmp9 = NofibPrelude.Cons(30, tmp8);
    tmp10 = NofibPrelude.Cons(31, tmp9);
    tmp11 = NofibPrelude.Cons(feb, tmp10);
    return NofibPrelude.Cons(31, tmp11)
  } 
  static jan1st(year2) {
    let last, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = year2 - 1;
    last = tmp;
    tmp1 = NofibPrelude.intDiv(last, 4);
    tmp2 = year2 + tmp1;
    tmp3 = NofibPrelude.intDiv(last, 100);
    tmp4 = tmp2 - tmp3;
    tmp5 = NofibPrelude.intDiv(last, 400);
    tmp6 = tmp4 + tmp5;
    return NofibPrelude.intMod(tmp6, 7)
  } 
  static firstDays(year3) {
    let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    tmp = calendar.jan1st(year3);
    tmp1 = monthLengths_inst_8_tsni(year3);
    lambda = (undefined, function (a, b) {
      return a + b
    });
    tmp2 = scanl_inst_7_tsni(lambda, tmp, tmp1);
    lambda1 = (undefined, function (x) {
      return NofibPrelude.intMod(x, 7)
    });
    tmp3 = map_inst_6_tsni(lambda1, tmp2);
    return take_inst_22_tsni(12, tmp3)
  } 
  static space(n3) {
    return NofibPrelude.replicate(n3, " ")
  } 
  static ljustify(n4, s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    tmp1 = n4 - tmp;
    tmp2 = calendar.space(tmp1);
    return NofibPrelude.append(s, tmp2)
  } 
  static rjustify(n5, s1) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s1);
    tmp1 = n5 - tmp;
    tmp2 = space_inst_9_tsni(tmp1);
    return append_inst_38_tsni(tmp2, s1)
  } 
  static date(ml, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = d < 1;
    tmp1 = ml < d;
    scrut = tmp || tmp1;
    if (scrut === true) {
      tmp2 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
    } else {
      tmp3 = NofibPrelude.stringOfInt(d);
      tmp4 = NofibPrelude.nofibStringToList(tmp3);
      tmp5 = rjustify_inst_11_tsni(3, tmp4);
      return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
    }
  } 
  static dates(fd, ml1) {
    let tmp, tmp1, tmp2, lambda;
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = enumFromTo_inst_12_tsni(tmp, tmp1);
    lambda = (undefined, function (d1) {
      return calendar.date(ml1, d1)
    });
    return map_inst_39_tsni(lambda, tmp2)
  } 
  static cjustify(n6, s2) {
    let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = NofibPrelude.listLen(s2);
    tmp1 = n6 - tmp;
    m = tmp1;
    tmp2 = NofibPrelude.intDiv(m, 2);
    halfm = tmp2;
    tmp3 = space_inst_13_tsni(halfm);
    tmp4 = m - halfm;
    tmp5 = calendar.space(tmp4);
    tmp6 = NofibPrelude.append(s2, tmp5);
    return append_inst_40_tsni(tmp3, tmp6)
  } 
  static cal(year4) {
    let body, pad, banner, entries, pic, title, months, table, side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    banner = function banner(yr) {
      let tmp7, tmp8, tmp9, arr2, tmp10;
      tmp7 = NofibPrelude.stringOfInt(yr);
      tmp8 = NofibPrelude.nofibStringToList(tmp7);
      tmp9 = calendar.cjustify(75, tmp8);
      arr2 = [
        1,
        75
      ];
      tmp10 = calendar.emptyPic(arr2);
      return NofibPrelude.Cons(tmp9, tmp10)
    };
    body = function body(yr) {
      let tmp7, tmp8, lambda;
      tmp7 = months(yr);
      lambda = (undefined, function (x) {
        let tmp9;
        tmp9 = pic(x);
        return pad(tmp9)
      });
      tmp8 = NofibPrelude.map(lambda, tmp7);
      return calendar.block(3, tmp8)
    };
    pic = function pic(mnfdml) {
      let first2, first1, first0, mn1, fd1, ml2, tmp7, tmp8;
      if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
        first0 = mnfdml[0];
        first1 = mnfdml[1];
        first2 = mnfdml[2];
        mn1 = first0;
        fd1 = first1;
        ml2 = first2;
        tmp7 = title(mn1);
        tmp8 = table(fd1, ml2);
        return NofibPrelude.append(tmp7, tmp8)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    pad = function pad(p3) {
      let tmp7, tmp8;
      tmp7 = NofibPrelude.zipWith(NofibPrelude.append, side, p3);
      tmp8 = NofibPrelude.zipWith(NofibPrelude.append, tmp7, side);
      return NofibPrelude.append(tmp8, end)
    };
    title = function title(mn1) {
      let tmp7;
      tmp7 = calendar.cjustify(21, mn1);
      return NofibPrelude.Cons(tmp7, NofibPrelude.Nil)
    };
    table = function table(fd1, ml2) {
      let tmp7;
      tmp7 = entries(fd1, ml2);
      return NofibPrelude.append(daynames, tmp7)
    };
    entries = function entries(fd1, ml2) {
      let tmp7;
      tmp7 = calendar.dates(fd1, ml2);
      return calendar.block(7, tmp7)
    };
    months = function months(yer) {
      let tmp7, tmp8;
      tmp7 = calendar.firstDays(yer);
      tmp8 = calendar.monthLengths(yer);
      return NofibPrelude.zip3(calendar.monthNames, tmp7, tmp8)
    };
    _deforest_Deforest_Arr_2_01 = 8;
    _deforest_Deforest_Arr_2_11 = 2;
    arr = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      h = first0;
      w = first1;
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp = emptyPic_inst_42_tsni(arr);
    side = tmp;
    _deforest_Deforest_Arr_2_0 = 1;
    _deforest_Deforest_Arr_2_1 = 25;
    arr1 = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      h = first0;
      w = first1;
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp1 = emptyPic_inst_41_tsni(arr1);
    end = tmp1;
    tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
    tmp3 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    daynames = tmp3;
    tmp4 = banner(year4);
    tmp5 = body(year4);
    tmp6 = NofibPrelude.append(tmp4, tmp5);
    return unlines_inst_14_tsni(tmp6)
  } 
  static testCalendar_nofib(n7) {
    let tmp, tmp1, lambda;
    tmp = 1993 + n7;
    tmp1 = enumFromTo_inst_15_tsni(1993, tmp);
    lambda = (undefined, function (x) {
      return calendar.cal(x)
    });
    return map_inst_32_tsni(lambda, tmp1)
  } 
  static main() {
    let tmp, tmp1;
    tmp = testCalendar_nofib_inst_18_tsni(0);
    tmp1 = concat_inst_16_tsni(tmp);
    return nofibListToString_inst_43_tsni(tmp1)
  }
  static toString() { return "calendar"; }
});
let calendar = calendar1; export default calendar;
