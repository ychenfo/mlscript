import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let primetest1, lines_inst_0_tsni, break__inst_0_1_tsni, break__inst_1_tsni, chop_inst_2_tsni, divMod_inst_2_3_tsni, uniform_inst_4_tsni, map_inst_4_5_tsni, splitAt_lz_inst_6_tsni, chop_inst_7_tsni, divMod_inst_7_3_tsni, random_inst_8_tsni, chop_inst_8_7_tsni, divMod_inst_8_7_3_tsni, splitAt_lz_inst_8_6_tsni, uniform_inst_8_4_tsni, map_inst_8_4_5_tsni, multiTest_inst_9_tsni, findKQ_inst_9_10_tsni, divMod_inst_9_10_11_tsni, singleTest_inst_9_12_tsni, random_inst_9_12_8_tsni, chop_inst_9_12_8_7_tsni, divMod_inst_9_12_8_7_3_tsni, splitAt_lz_inst_9_12_8_6_tsni, uniform_inst_9_12_8_4_tsni, map_inst_9_12_8_4_5_tsni, doLine_inst_13_tsni, multiTest_inst_13_9_tsni, singleTest_inst_13_9_12_tsni, random_inst_13_9_12_8_tsni, uniform_inst_13_9_12_8_4_tsni, map_inst_13_9_12_8_4_5_tsni, splitAt_lz_inst_13_9_12_8_6_tsni, chop_inst_13_9_12_8_7_tsni, divMod_inst_13_9_12_8_7_3_tsni, findKQ_inst_13_9_10_tsni, divMod_inst_13_9_10_11_tsni, doInput_inst_14_tsni, doLine_inst_14_13_tsni, multiTest_inst_14_13_9_tsni, findKQ_inst_14_13_9_10_tsni, divMod_inst_14_13_9_10_11_tsni, singleTest_inst_14_13_9_12_tsni, random_inst_14_13_9_12_8_tsni, chop_inst_14_13_9_12_8_7_tsni, divMod_inst_14_13_9_12_8_7_3_tsni, splitAt_lz_inst_14_13_9_12_8_6_tsni, uniform_inst_14_13_9_12_8_4_tsni, map_inst_14_13_9_12_8_4_5_tsni, process_inst_15_tsni, doInput_inst_15_14_tsni, doLine_inst_15_14_13_tsni, multiTest_inst_15_14_13_9_tsni, singleTest_inst_15_14_13_9_12_tsni, random_inst_15_14_13_9_12_8_tsni, uniform_inst_15_14_13_9_12_8_4_tsni, map_inst_15_14_13_9_12_8_4_5_tsni, splitAt_lz_inst_15_14_13_9_12_8_6_tsni, chop_inst_15_14_13_9_12_8_7_tsni, divMod_inst_15_14_13_9_12_8_7_3_tsni, findKQ_inst_15_14_13_9_10_tsni, divMod_inst_15_14_13_9_10_11_tsni, lines_inst_16_tsni, break__inst_16_1_tsni, testPrimetest_nofib_inst_17_tsni, lines_inst_17_16_tsni, break__inst_17_16_1_tsni, process_inst_17_15_tsni, doInput_inst_17_15_14_tsni, doLine_inst_17_15_14_13_tsni, multiTest_inst_17_15_14_13_9_tsni, findKQ_inst_17_15_14_13_9_10_tsni, divMod_inst_17_15_14_13_9_10_11_tsni, singleTest_inst_17_15_14_13_9_12_tsni, random_inst_17_15_14_13_9_12_8_tsni, chop_inst_17_15_14_13_9_12_8_7_tsni, divMod_inst_17_15_14_13_9_12_8_7_3_tsni, splitAt_lz_inst_17_15_14_13_9_12_8_6_tsni, uniform_inst_17_15_14_13_9_12_8_4_tsni, map_inst_17_15_14_13_9_12_8_4_5_tsni, makeNumber_inst_18_tsni, foldl_inst_18_19_tsni, makeNumber_inst_8_18_tsni, foldl_inst_8_18_19_tsni, makeNumber_inst_9_12_8_18_tsni, foldl_inst_9_12_8_18_19_tsni, makeNumber_inst_13_9_12_8_18_tsni, foldl_inst_13_9_12_8_18_19_tsni, makeNumber_inst_14_13_9_12_8_18_tsni, foldl_inst_14_13_9_12_8_18_19_tsni, makeNumber_inst_15_14_13_9_12_8_18_tsni, foldl_inst_15_14_13_9_12_8_18_19_tsni, makeNumber_inst_17_15_14_13_9_12_8_18_tsni, foldl_inst_17_15_14_13_9_12_8_18_19_tsni, match_xs_arm_Cons_inst_18_19_tsni, match_xs_arm_Nil_inst_18_19_tsni, match_xs_arm_Cons_inst_8_18_19_tsni, match_xs_arm_Nil_inst_8_18_19_tsni, match_xs_arm_Cons_inst_9_12_8_18_19_tsni, match_xs_arm_Nil_inst_9_12_8_18_19_tsni, match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni, match_xs_arm_Nil_inst_13_9_12_8_18_19_tsni, match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni, match_xs_arm_Nil_inst_14_13_9_12_8_18_19_tsni, match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni, match_xs_arm_Nil_inst_15_14_13_9_12_8_18_19_tsni, match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni, match_xs_arm_Nil_inst_17_15_14_13_9_12_8_18_19_tsni;
match_xs_arm_Cons_inst_18_19_tsni = function match_xs_arm_Cons_inst_18_19_tsni(f, a, _deforest_Cons_head_inst_18_19_tsni, _deforest_Cons_tail_inst_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_18_19_tsni = function match_xs_arm_Nil_inst_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_8_18_19_tsni = function match_xs_arm_Cons_inst_8_18_19_tsni(f, a, _deforest_Cons_head_inst_8_18_19_tsni, _deforest_Cons_tail_inst_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_8_18_19_tsni = function match_xs_arm_Nil_inst_8_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_9_12_8_18_19_tsni = function match_xs_arm_Cons_inst_9_12_8_18_19_tsni(f, a, _deforest_Cons_head_inst_9_12_8_18_19_tsni, _deforest_Cons_tail_inst_9_12_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_9_12_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_9_12_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_9_12_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_9_12_8_18_19_tsni = function match_xs_arm_Nil_inst_9_12_8_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni = function match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head_inst_13_9_12_8_18_19_tsni, _deforest_Cons_tail_inst_13_9_12_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_13_9_12_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_13_9_12_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_13_9_12_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_13_9_12_8_18_19_tsni = function match_xs_arm_Nil_inst_13_9_12_8_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni = function match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head_inst_14_13_9_12_8_18_19_tsni, _deforest_Cons_tail_inst_14_13_9_12_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_14_13_9_12_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_14_13_9_12_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_14_13_9_12_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_14_13_9_12_8_18_19_tsni = function match_xs_arm_Nil_inst_14_13_9_12_8_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni = function match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head_inst_15_14_13_9_12_8_18_19_tsni, _deforest_Cons_tail_inst_15_14_13_9_12_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_15_14_13_9_12_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_15_14_13_9_12_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_15_14_13_9_12_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_15_14_13_9_12_8_18_19_tsni = function match_xs_arm_Nil_inst_15_14_13_9_12_8_18_19_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni = function match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head_inst_17_15_14_13_9_12_8_18_19_tsni, _deforest_Cons_tail_inst_17_15_14_13_9_12_8_18_19_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_17_15_14_13_9_12_8_18_19_tsni;
  param1 = _deforest_Cons_tail_inst_17_15_14_13_9_12_8_18_19_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_17_15_14_13_9_12_8_18_19_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_17_15_14_13_9_12_8_18_19_tsni = function match_xs_arm_Nil_inst_17_15_14_13_9_12_8_18_19_tsni(f, a) {
  return a
};
lines_inst_0_tsni = function lines_inst_0_tsni(s) {
  let scrut, first1, first0, l, s_, tt, lambda;
  lambda = (undefined, function (x) {
    return x == "|"
  });
  scrut = break__inst_0_1_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    tt = tmp;
    return NofibPrelude.Cons(l, tt)
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_0_1_tsni = function break__inst_0_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_0_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_0_1_tsni(p, xs);
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
break__inst_1_tsni = function break__inst_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_0_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_1_tsni(p, xs);
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
chop_inst_2_tsni = function chop_inst_2_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_2_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_2_3_tsni = function divMod_inst_2_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
uniform_inst_4_tsni = function uniform_inst_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_4_5_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
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
    return (f1, a) => {
      return match_xs_arm_Cons_inst_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_6_tsni = function splitAt_lz_inst_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_18_tsni(65536, tmp2);
    arr1 = [
      tmp3,
      rs2
    ];
    return arr1
  };
  return arr
};
chop_inst_7_tsni = function chop_inst_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_7_3_tsni = function divMod_inst_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
random_inst_8_tsni = function random_inst_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_8_7_tsni = function chop_inst_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_8_7_3_tsni = function divMod_inst_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_8_6_tsni = function splitAt_lz_inst_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      arr2 = [
        tmp5,
        rs_
      ];
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_8_4_tsni = function uniform_inst_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_8_4_5_tsni = function map_inst_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_9_tsni = function multiTest_inst_9_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      arr1 = [
        true,
        rs1
      ];
      return arr1
    } else {
      tmp3 = findKQ_inst_9_10_tsni(n);
      scrut1 = singleTest_inst_9_12_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    arr = [
      tmp2,
      rs
    ];
    return arr
  } else {
    return mTest(k, rs)
  }
};
findKQ_inst_9_10_tsni = function findKQ_inst_9_10_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_9_10_11_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_9_10_11_tsni = function divMod_inst_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
singleTest_inst_9_12_tsni = function singleTest_inst_9_12_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_9_12_8_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_9_12_8_tsni = function random_inst_9_12_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_9_12_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_9_12_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_9_12_8_7_tsni = function chop_inst_9_12_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_9_12_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_9_12_8_7_3_tsni = function divMod_inst_9_12_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_9_12_8_6_tsni = function splitAt_lz_inst_9_12_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_9_12_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_9_12_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_9_12_8_4_tsni = function uniform_inst_9_12_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_9_12_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_9_12_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_9_12_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_9_12_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_9_12_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_9_12_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_9_12_8_4_5_tsni = function map_inst_9_12_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_12_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_9_12_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_9_12_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
doLine_inst_13_tsni = function doLine_inst_13_tsni(cs, cont, rs) {
  let n, scrut, first1, first0, t, rs_, tmp, tmp1, tmp2;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_13_9_tsni(100, rs, n);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    t = first0;
    rs_ = first1;
    if (t === true) {
      tmp1 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Probably prime", tmp1)
    } else {
      tmp2 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Composite", tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_13_9_tsni = function multiTest_inst_13_9_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      arr1 = [
        true,
        rs1
      ];
      return arr1
    } else {
      tmp3 = findKQ_inst_13_9_10_tsni(n);
      scrut1 = singleTest_inst_13_9_12_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    arr = [
      tmp2,
      rs
    ];
    return arr
  } else {
    return mTest(k, rs)
  }
};
singleTest_inst_13_9_12_tsni = function singleTest_inst_13_9_12_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_13_9_12_8_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_13_9_12_8_tsni = function random_inst_13_9_12_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_13_9_12_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_13_9_12_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_13_9_12_8_4_tsni = function uniform_inst_13_9_12_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_13_9_12_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_13_9_12_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_13_9_12_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_13_9_12_8_4_5_tsni = function map_inst_13_9_12_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_9_12_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_13_9_12_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_13_9_12_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_13_9_12_8_6_tsni = function splitAt_lz_inst_13_9_12_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_13_9_12_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_13_9_12_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_13_9_12_8_7_tsni = function chop_inst_13_9_12_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_13_9_12_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_13_9_12_8_7_3_tsni = function divMod_inst_13_9_12_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_13_9_10_tsni = function findKQ_inst_13_9_10_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_13_9_10_11_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_13_9_10_11_tsni = function divMod_inst_13_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
doInput_inst_14_tsni = function doInput_inst_14_tsni(state, lls) {
  let param0, param1, l, ls, lambda;
  if (lls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (lls instanceof NofibPrelude.Cons.class) {
    param0 = lls.head;
    param1 = lls.tail;
    l = param0;
    ls = param1;
    lambda = (undefined, function (state1) {
      return doInput_inst_14_tsni(state1, ls)
    });
    return doLine_inst_14_13_tsni(l, lambda, state)
  } else {
    throw new globalThis.Error("match error");
  }
};
doLine_inst_14_13_tsni = function doLine_inst_14_13_tsni(cs, cont, rs) {
  let n, scrut, first1, first0, t, rs_, tmp, tmp1, tmp2;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_14_13_9_tsni(100, rs, n);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    t = first0;
    rs_ = first1;
    if (t === true) {
      tmp1 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Probably prime", tmp1)
    } else {
      tmp2 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Composite", tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_14_13_9_tsni = function multiTest_inst_14_13_9_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      arr1 = [
        true,
        rs1
      ];
      return arr1
    } else {
      tmp3 = findKQ_inst_14_13_9_10_tsni(n);
      scrut1 = singleTest_inst_14_13_9_12_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    arr = [
      tmp2,
      rs
    ];
    return arr
  } else {
    return mTest(k, rs)
  }
};
findKQ_inst_14_13_9_10_tsni = function findKQ_inst_14_13_9_10_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_14_13_9_10_11_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_14_13_9_10_11_tsni = function divMod_inst_14_13_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
singleTest_inst_14_13_9_12_tsni = function singleTest_inst_14_13_9_12_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_14_13_9_12_8_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_14_13_9_12_8_tsni = function random_inst_14_13_9_12_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_14_13_9_12_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_14_13_9_12_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_14_13_9_12_8_7_tsni = function chop_inst_14_13_9_12_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_14_13_9_12_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_14_13_9_12_8_7_3_tsni = function divMod_inst_14_13_9_12_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_14_13_9_12_8_6_tsni = function splitAt_lz_inst_14_13_9_12_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_14_13_9_12_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_14_13_9_12_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_14_13_9_12_8_4_tsni = function uniform_inst_14_13_9_12_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_14_13_9_12_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_14_13_9_12_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_14_13_9_12_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_14_13_9_12_8_4_5_tsni = function map_inst_14_13_9_12_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_13_9_12_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_14_13_9_12_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_14_13_9_12_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
process_inst_15_tsni = function process_inst_15_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_15_14_tsni(tmp, process_arg1)
};
doInput_inst_15_14_tsni = function doInput_inst_15_14_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
doLine_inst_15_14_13_tsni = function doLine_inst_15_14_13_tsni(cs, cont, rs) {
  let n, scrut, first1, first0, t, rs_, tmp, tmp1, tmp2;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_15_14_13_9_tsni(100, rs, n);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    t = first0;
    rs_ = first1;
    if (t === true) {
      tmp1 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Probably prime", tmp1)
    } else {
      tmp2 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Composite", tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_15_14_13_9_tsni = function multiTest_inst_15_14_13_9_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      arr1 = [
        true,
        rs1
      ];
      return arr1
    } else {
      tmp3 = findKQ_inst_15_14_13_9_10_tsni(n);
      scrut1 = singleTest_inst_15_14_13_9_12_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    arr = [
      tmp2,
      rs
    ];
    return arr
  } else {
    return mTest(k, rs)
  }
};
singleTest_inst_15_14_13_9_12_tsni = function singleTest_inst_15_14_13_9_12_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_15_14_13_9_12_8_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_15_14_13_9_12_8_tsni = function random_inst_15_14_13_9_12_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_15_14_13_9_12_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_15_14_13_9_12_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_15_14_13_9_12_8_4_tsni = function uniform_inst_15_14_13_9_12_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_15_14_13_9_12_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_15_14_13_9_12_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_15_14_13_9_12_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_15_14_13_9_12_8_4_5_tsni = function map_inst_15_14_13_9_12_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_14_13_9_12_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_15_14_13_9_12_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_15_14_13_9_12_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_15_14_13_9_12_8_6_tsni = function splitAt_lz_inst_15_14_13_9_12_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_15_14_13_9_12_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_15_14_13_9_12_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_15_14_13_9_12_8_7_tsni = function chop_inst_15_14_13_9_12_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_15_14_13_9_12_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_15_14_13_9_12_8_7_3_tsni = function divMod_inst_15_14_13_9_12_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_15_14_13_9_10_tsni = function findKQ_inst_15_14_13_9_10_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_15_14_13_9_10_11_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_15_14_13_9_10_11_tsni = function divMod_inst_15_14_13_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
lines_inst_16_tsni = function lines_inst_16_tsni(s) {
  let scrut, first1, first0, l, s_, tt, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x == "|"
  });
  scrut = break__inst_16_1_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    tt = tmp;
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tt;
    return (state) => {
      let param0, param1, l1, ls, lambda1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      l1 = param0;
      ls = param1;
      lambda1 = (undefined, function (state1) {
        return doInput_inst_15_14_tsni(state1, ls)
      });
      return doLine_inst_15_14_13_tsni(l1, lambda1, state)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_16_1_tsni = function break__inst_16_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_16_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_16_1_tsni(p, xs);
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
testPrimetest_nofib_inst_17_tsni = function testPrimetest_nofib_inst_17_tsni(d) {
  let cts, tmp, tmp1;
  tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
  cts = tmp;
  tmp1 = lines_inst_17_16_tsni(cts);
  return process_inst_17_15_tsni(tmp1)
};
lines_inst_17_16_tsni = function lines_inst_17_16_tsni(s) {
  let scrut, first1, first0, l, s_, tt, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  lambda = (undefined, function (x) {
    return x == "|"
  });
  scrut = break__inst_17_16_1_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    runtime.safeCall(s_());
    tt = tmp;
    _deforest_Cons_head = l;
    _deforest_Cons_tail = tt;
    return (state) => {
      let param0, param1, l1, ls, lambda1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      l1 = param0;
      ls = param1;
      lambda1 = (undefined, function (state1) {
        return doInput_inst_17_15_14_tsni(state1, ls)
      });
      return doLine_inst_17_15_14_13_tsni(l1, lambda1, state)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_17_16_1_tsni = function break__inst_17_16_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      () => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = () => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_17_16_tsni(s__);
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_17_16_1_tsni(p, xs);
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
process_inst_17_15_tsni = function process_inst_17_15_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_17_15_14_tsni(tmp, process_arg1)
};
doInput_inst_17_15_14_tsni = function doInput_inst_17_15_14_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
doLine_inst_17_15_14_13_tsni = function doLine_inst_17_15_14_13_tsni(cs, cont, rs) {
  let n, scrut, first1, first0, t, rs_, tmp, tmp1, tmp2;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_17_15_14_13_9_tsni(100, rs, n);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    t = first0;
    rs_ = first1;
    if (t === true) {
      tmp1 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Probably prime", tmp1)
    } else {
      tmp2 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Composite", tmp2)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_17_15_14_13_9_tsni = function multiTest_inst_17_15_14_13_9_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      arr1 = [
        true,
        rs1
      ];
      return arr1
    } else {
      tmp3 = findKQ_inst_17_15_14_13_9_10_tsni(n);
      scrut1 = singleTest_inst_17_15_14_13_9_12_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    arr = [
      tmp2,
      rs
    ];
    return arr
  } else {
    return mTest(k, rs)
  }
};
findKQ_inst_17_15_14_13_9_10_tsni = function findKQ_inst_17_15_14_13_9_10_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_17_15_14_13_9_10_11_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_17_15_14_13_9_10_11_tsni = function divMod_inst_17_15_14_13_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
singleTest_inst_17_15_14_13_9_12_tsni = function singleTest_inst_17_15_14_13_9_12_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_17_15_14_13_9_12_8_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_17_15_14_13_9_12_8_tsni = function random_inst_17_15_14_13_9_12_8_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_17_15_14_13_9_12_8_7_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_17_15_14_13_9_12_8_6_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_17_15_14_13_9_12_8_7_tsni = function chop_inst_17_15_14_13_9_12_8_7_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_17_15_14_13_9_12_8_7_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_17_15_14_13_9_12_8_7_3_tsni = function divMod_inst_17_15_14_13_9_12_8_7_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_17_15_14_13_9_12_8_6_tsni = function splitAt_lz_inst_17_15_14_13_9_12_8_6_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_17_15_14_13_9_12_8_4_tsni(ns, rs1);
    tmp3 = makeNumber_inst_17_15_14_13_9_12_8_18_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_17_15_14_13_9_12_8_4_tsni = function uniform_inst_17_15_14_13_9_12_8_4_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_17_15_14_13_9_12_8_18_19_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_17_15_14_13_9_12_8_4_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_17_15_14_13_9_12_8_4_5_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_17_15_14_13_9_12_8_4_5_tsni = function map_inst_17_15_14_13_9_12_8_4_5_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_15_14_13_9_12_8_4_5_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_17_15_14_13_9_12_8_18_19_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_17_15_14_13_9_12_8_18_19_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
makeNumber_inst_18_tsni = function makeNumber_inst_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_18_19_tsni(lambda, 0, ls)
};
foldl_inst_18_19_tsni = function foldl_inst_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_8_18_tsni = function makeNumber_inst_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_8_18_19_tsni = function foldl_inst_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_9_12_8_18_tsni = function makeNumber_inst_9_12_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_9_12_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_9_12_8_18_19_tsni = function foldl_inst_9_12_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_13_9_12_8_18_tsni = function makeNumber_inst_13_9_12_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_13_9_12_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_13_9_12_8_18_19_tsni = function foldl_inst_13_9_12_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_14_13_9_12_8_18_tsni = function makeNumber_inst_14_13_9_12_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_14_13_9_12_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_14_13_9_12_8_18_19_tsni = function foldl_inst_14_13_9_12_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_15_14_13_9_12_8_18_tsni = function makeNumber_inst_15_14_13_9_12_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_15_14_13_9_12_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_15_14_13_9_12_8_18_19_tsni = function foldl_inst_15_14_13_9_12_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_17_15_14_13_9_12_8_18_tsni = function makeNumber_inst_17_15_14_13_9_12_8_18_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_17_15_14_13_9_12_8_18_19_tsni(lambda, 0, ls)
};
foldl_inst_17_15_14_13_9_12_8_18_19_tsni = function foldl_inst_17_15_14_13_9_12_8_18_19_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
(class primetest {
  static {
    primetest1 = primetest;
  }
  static even(x) {
    let tmp;
    tmp = NofibPrelude.intMod(x, 2);
    return tmp == 0
  } 
  static int_val_of_char(x1) {
    let tmp;
    tmp = NofibPrelude.int_of_char(x1);
    return tmp - 48
  } 
  static int_val_of_string(s) {
    let f;
    f = function f(l, a) {
      let param0, param1, h, t, tmp, tmp1, tmp2;
      if (l instanceof NofibPrelude.Nil.class) {
        return a
      } else if (l instanceof NofibPrelude.Cons.class) {
        param0 = l.head;
        param1 = l.tail;
        h = param0;
        t = param1;
        tmp = 10 * a;
        tmp1 = primetest.int_val_of_char(h);
        tmp2 = tmp + tmp1;
        return f(t, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return f(s, 0)
  } 
  static break_(p, ls) {
    let param0, param1, x2, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2;
    if (ls instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x2 = param0;
      xs = param1;
      scrut1 = runtime.safeCall(p(x2));
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(x2, xs);
        arr1 = [
          NofibPrelude.Nil,
          tmp
        ];
        return arr1
      } else {
        scrut = primetest.break_(p, xs);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          ys = first0;
          zs = first1;
          tmp1 = NofibPrelude.Cons(x2, ys);
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
  static lines(s1) {
    let scrut, first1, first0, l, s_, tt, lambda;
    lambda = (undefined, function (x2) {
      return x2 == "|"
    });
    scrut = break__inst_1_tsni(lambda, s1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      l = first0;
      s_ = first1;
      runtime.safeCall(s_());
      tt = tmp;
      return NofibPrelude.Cons(l, tt)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static makeNumber(b, ls1) {
    let lambda;
    lambda = (undefined, function (a, x2) {
      let tmp;
      tmp = a * b;
      return tmp + x2
    });
    return NofibPrelude.foldl(lambda, 0, ls1)
  } 
  static chop(b1, n) {
    let chop_;
    chop_ = function chop_(a, n1) {
      let scrut, first1, first0, q, r, scrut1, tmp;
      scrut = NofibPrelude.divMod(n1, b1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        q = first0;
        r = first1;
        scrut1 = n1 == 0;
        if (scrut1 === true) {
          return a
        } else {
          tmp = NofibPrelude.Cons(r, a);
          return chop_(tmp, q)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return chop_(NofibPrelude.Nil, n)
  } 
  static powerMod(a, b2, m) {
    let f, a_, scrut, tmp;
    f = function f(a1, b3, c) {
      let g, scrut1;
      g = function g(a2, b4) {
        let scrut2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut2 = primetest.even(b4);
        if (scrut2 === true) {
          tmp1 = a2 * a2;
          tmp2 = NofibPrelude.intMod(tmp1, m);
          tmp3 = NofibPrelude.intDiv(b4, 2);
          return g(tmp2, tmp3)
        } else {
          tmp4 = b4 - 1;
          tmp5 = a2 * c;
          tmp6 = NofibPrelude.intMod(tmp5, m);
          return f(a2, tmp4, tmp6)
        }
      };
      scrut1 = b3 == 0;
      if (scrut1 === true) {
        return c
      } else {
        return g(a1, b3)
      }
    };
    scrut = b2 == 0;
    if (scrut === true) {
      return 1
    } else {
      a_ = NofibPrelude.intMod(a, m);
      tmp = b2 - 1;
      return f(a_, tmp, a_)
    }
  } 
  static log2(x2) {
    let tmp;
    tmp = chop_inst_2_tsni(2, x2);
    return NofibPrelude.listLen(tmp)
  } 
  static rands(s11, s2) {
    let k, s1_, s1__, scrut, k_, s2_, s2__, scrut1, z, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda, lambda1;
    tmp = NofibPrelude.intDiv(s11, 53668);
    k = tmp;
    tmp1 = k * 53668;
    tmp2 = s11 - tmp1;
    tmp3 = 40014 * tmp2;
    tmp4 = k * 12211;
    tmp5 = tmp3 - tmp4;
    s1_ = tmp5;
    scrut = s1_ < 0;
    if (scrut === true) {
      tmp6 = s1_ + 2147483563;
    } else {
      tmp6 = s1_;
    }
    s1__ = tmp6;
    tmp7 = NofibPrelude.intDiv(s2, 52774);
    k_ = tmp7;
    tmp8 = k_ * 52774;
    tmp9 = s2 - tmp8;
    tmp10 = 40692 * tmp9;
    tmp11 = k_ * 3791;
    tmp12 = tmp10 - tmp11;
    s2_ = tmp12;
    scrut1 = s2_ < 0;
    if (scrut1 === true) {
      tmp13 = s2_ + 2147483399;
    } else {
      tmp13 = s2_;
    }
    s2__ = tmp13;
    tmp14 = s1__ - s2__;
    z = tmp14;
    scrut2 = z < 1;
    if (scrut2 === true) {
      lambda = (undefined, function () {
        let tmp15, tmp16;
        tmp15 = z + 2147483562;
        tmp16 = primetest.rands(s1__, s2__);
        return NofibPrelude.LzCons(tmp15, tmp16)
      });
      return NofibPrelude.lazy(lambda)
    } else {
      lambda1 = (undefined, function () {
        let tmp15;
        tmp15 = primetest.rands(s1__, s2__);
        return NofibPrelude.LzCons(z, tmp15)
      });
      return NofibPrelude.lazy(lambda1)
    }
  } 
  static randomInts(s12, s21) {
    let scrut, scrut1, scrut2, scrut3;
    scrut = 1 <= s12;
    if (scrut === true) {
      scrut1 = s12 <= 2147483562;
      if (scrut1 === true) {
        scrut2 = 1 <= s21;
        if (scrut2 === true) {
          scrut3 = s21 <= 2147483398;
          if (scrut3 === true) {
            return primetest.rands(s12, s21)
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
  static findKQ(n1) {
    let f, tmp;
    f = function f(k, q) {
      let scrut, first1, first0, d, r, scrut1, tmp1, arr;
      scrut = NofibPrelude.divMod(q, 2);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        d = first0;
        r = first1;
        scrut1 = r == 0;
        if (scrut1 === true) {
          tmp1 = k + 1;
          return f(tmp1, d)
        } else {
          arr = [
            k,
            q
          ];
          return arr
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = n1 - 1;
    return f(0, tmp)
  } 
  static uniform(nns, rrs) {
    let param0, param1, n2, ns, param01, param11, r, rs, t, scrut, n3, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda;
    if (nns instanceof NofibPrelude.Cons.class) {
      param0 = nns.head;
      param1 = nns.tail;
      n3 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        if (rrs instanceof NofibPrelude.Cons.class) {
          param01 = rrs.head;
          param11 = rrs.tail;
          r1 = param01;
          rs1 = param11;
          tmp = NofibPrelude.intMod(r1, n3);
          return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
        } else {
          n2 = param0;
          ns = param1;
          throw new globalThis.Error("match error");
        }
      } else {
        n2 = param0;
        ns = param1;
        if (rrs instanceof NofibPrelude.Cons.class) {
          param01 = rrs.head;
          param11 = rrs.tail;
          r = param01;
          rs = param11;
          tmp1 = n2 + 1;
          t = NofibPrelude.intMod(r, tmp1);
          scrut = t == n2;
          if (scrut === true) {
            tmp2 = primetest.uniform(ns, rs);
            return NofibPrelude.Cons(t, tmp2)
          } else {
            lambda = (undefined, function (x3) {
              return NofibPrelude.intMod(x3, 65536)
            });
            tmp3 = NofibPrelude.map(lambda, rs);
            return NofibPrelude.Cons(t, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static random(n2, rs) {
    let ns, scrut, tmp, tmp1;
    tmp = chop_inst_7_tsni(65536, n2);
    ns = tmp;
    tmp1 = NofibPrelude.listLen(ns);
    scrut = splitAt_lz_inst_6_tsni(tmp1, rs);
    return runtime.safeCall(scrut(ns))
  } 
  static singleTestX(n3, kq, x3) {
    let square, witness, first1, first0, k, q, scrut, param0, param1, t, ts, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    square = function square(x4) {
      let tmp7;
      tmp7 = x4 * x4;
      return NofibPrelude.intMod(tmp7, n3)
    };
    witness = function witness(ls2) {
      let param01, param11, t1, ts1, scrut1, scrut2, tmp7;
      if (ls2 instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls2 instanceof NofibPrelude.Cons.class) {
        param01 = ls2.head;
        param11 = ls2.tail;
        t1 = param01;
        ts1 = param11;
        tmp7 = n3 - 1;
        scrut2 = t1 == tmp7;
        if (scrut2 === true) {
          return true
        } else {
          scrut1 = t1 == 1;
          if (scrut1 === true) {
            return false
          } else {
            return witness(ts1)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (globalThis.Array.isArray(kq) && kq.length === 2) {
      first0 = kq[0];
      first1 = kq[1];
      k = first0;
      q = first1;
      tmp = primetest.powerMod(x3, q, n3);
      tmp1 = NofibPrelude.iterate(square, tmp);
      scrut = NofibPrelude.take_lz(k, tmp1);
      if (scrut instanceof NofibPrelude.Cons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        t = param0;
        ts = param1;
        tmp2 = t == 1;
        tmp3 = n3 - 1;
        tmp4 = t == tmp3;
        tmp5 = tmp2 || tmp4;
        tmp6 = witness(ts);
        return tmp5 || tmp6
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static singleTest(n4, kq1, rs1) {
    let scrut, tmp;
    tmp = n4 - 2;
    scrut = random_inst_8_tsni(tmp, rs1);
    return runtime.safeCall(scrut(n4, kq1))
  } 
  static multiTest(k, rs2, n5) {
    let mTest, scrut, tmp, tmp1, tmp2, arr;
    mTest = function mTest(k1, rs3) {
      let scrut1, first1, first0, t, rs_, scrut2, arr1, tmp3, tmp4, arr2;
      scrut2 = k1 == 0;
      if (scrut2 === true) {
        arr1 = [
          true,
          rs3
        ];
        return arr1
      } else {
        tmp3 = primetest.findKQ(n5);
        scrut1 = primetest.singleTest(n5, tmp3, rs3);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first0 = scrut1[0];
          first1 = scrut1[1];
          t = first0;
          rs_ = first1;
          if (t === true) {
            tmp4 = k1 - 1;
            return mTest(tmp4, rs_)
          } else {
            arr2 = [
              false,
              rs_
            ];
            return arr2
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    };
    tmp = n5 <= 1;
    tmp1 = primetest.even(n5);
    scrut = tmp || tmp1;
    if (scrut === true) {
      tmp2 = n5 == 2;
      arr = [
        tmp2,
        rs2
      ];
      return arr
    } else {
      return mTest(k, rs2)
    }
  } 
  static doLine(cs, cont, rs3) {
    let n6, scrut, first1, first0, t, rs_, tmp, tmp1, tmp2;
    tmp = primetest.int_val_of_string(cs);
    n6 = tmp;
    scrut = multiTest_inst_9_tsni(100, rs3, n6);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      t = first0;
      rs_ = first1;
      if (t === true) {
        tmp1 = runtime.safeCall(cont(rs_));
        return NofibPrelude.Cons("Probably prime", tmp1)
      } else {
        tmp2 = runtime.safeCall(cont(rs_));
        return NofibPrelude.Cons("Composite", tmp2)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static doInput(state, lls) {
    let param0, param1, l, ls2, lambda;
    if (lls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (lls instanceof NofibPrelude.Cons.class) {
      param0 = lls.head;
      param1 = lls.tail;
      l = param0;
      ls2 = param1;
      lambda = (undefined, function (state1) {
        return primetest.doInput(state1, ls2)
      });
      return doLine_inst_13_tsni(l, lambda, state)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static process(process_arg1) {
    let tmp;
    tmp = primetest.randomInts(111, 47);
    return doInput_inst_14_tsni(tmp, process_arg1)
  } 
  static testPrimetest_nofib(d) {
    let cts, tmp, tmp1;
    tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
    cts = tmp;
    tmp1 = lines_inst_16_tsni(cts);
    return process_inst_15_tsni(tmp1)
  } 
  static main() {
    let tmp;
    tmp = testPrimetest_nofib_inst_17_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "primetest"; }
});
let primetest = primetest1; export default primetest;
