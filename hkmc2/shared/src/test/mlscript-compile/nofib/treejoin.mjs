import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let readInt_, treejoin1, lambda, lambda1, lookupT_inst_0_1_tsni, readInt_inst_2_3_tsni, readInt__inst_2_3_4_tsni, readInt_inst_2_5_tsni, readInt__inst_2_5_4_tsni, readInt_inst_2_6_tsni, readInt__inst_2_6_4_tsni, readTree_inst_7_8_tsni, readInt_inst_7_8_6_tsni, readInt__inst_7_8_6_4_tsni, readInt_inst_7_8_5_tsni, readInt__inst_7_8_5_4_tsni, readInt_inst_7_8_3_tsni, readInt__inst_7_8_3_4_tsni, readTree_inst_7_9_tsni, readInt_inst_7_9_6_tsni, readInt__inst_7_9_6_4_tsni, readInt_inst_7_9_5_tsni, readInt__inst_7_9_5_4_tsni, readInt_inst_7_9_3_tsni, readInt__inst_7_9_3_4_tsni, join_inst_7_10_tsni, lookupT_inst_7_10_1_tsni, testTreejoin_nofib_inst_11_12_tsni, join_inst_11_12_10_tsni, lookupT_inst_11_12_10_1_tsni, readTree_inst_11_12_9_tsni, readInt_inst_11_12_9_3_tsni, readInt__inst_11_12_9_3_4_tsni, readInt_inst_11_12_9_5_tsni, readInt__inst_11_12_9_5_4_tsni, readInt_inst_11_12_9_6_tsni, readInt__inst_11_12_9_6_4_tsni, readTree_inst_11_12_8_tsni, readInt_inst_11_12_8_3_tsni, readInt__inst_11_12_8_3_4_tsni, readInt_inst_11_12_8_5_tsni, readInt__inst_11_12_8_5_4_tsni, readInt_inst_11_12_8_6_tsni, readInt__inst_11_12_8_6_4_tsni, match_scrut_arm_None_inst_0_tsni, match_scrut_arm_Deforest_Arr_2_inst_2_tsni, match_scrut_arm_Deforest_Arr_2_inst_2_tsni1, match_scrut_arm_Deforest_Arr_2_inst_2_tsni2, match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni1, match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni2, match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni, match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni1, match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni2, match_scrut_arm_None_inst_7_10_tsni, match_scrut_arm_None_inst_11_12_10_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni1, match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni2, match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni1, match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni2;
match_scrut_arm_None_inst_0_tsni = (undefined, function (j, a, b, c) {
  return j
});
match_scrut_arm_Deforest_Arr_2_inst_2_tsni = (undefined, function (fk, t, _deforest_Deforest_Arr_2_0_inst_2_tsni, _deforest_Deforest_Arr_2_1_inst_2_tsni) {
  let first1, first0, f, s_, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_2_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_2_tsni;
  f = first0;
  s_ = first1;
  scrut = readInt_inst_2_5_tsni(s_);
  return runtime.safeCall(scrut(fk, t, f))
});
match_scrut_arm_Deforest_Arr_2_inst_2_tsni1 = (undefined, function (fk, t, f, _deforest_Deforest_Arr_2_0_inst_2_tsni, _deforest_Deforest_Arr_2_1_inst_2_tsni) {
  let first1, first0, g, s__, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_2_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_2_tsni;
  g = first0;
  s__ = first1;
  scrut = readInt_inst_2_6_tsni(s__);
  return runtime.safeCall(scrut(fk, t, f, g))
});
match_scrut_arm_Deforest_Arr_2_inst_2_tsni2 = (undefined, function (fk, t, f, g, _deforest_Deforest_Arr_2_0_inst_2_tsni, _deforest_Deforest_Arr_2_1_inst_2_tsni) {
  let first1, first0, h, s___, e, k, arr, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_2_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_2_tsni;
  h = first0;
  s___ = first1;
  arr = [
    f,
    g,
    h
  ];
  e = arr;
  tmp = runtime.safeCall(fk(e));
  k = tmp;
  tmp1 = treejoin.insertT(k, e, t);
  return treejoin.readTree(fk, s___, tmp1)
});
match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni = (undefined, function (fk, t, f, g, _deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, h, s___, e, k, arr, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  h = first0;
  s___ = first1;
  arr = [
    f,
    g,
    h
  ];
  e = arr;
  tmp = runtime.safeCall(fk(e));
  k = tmp;
  tmp1 = treejoin.insertT(k, e, t);
  return readTree_inst_7_8_tsni(fk, s___, tmp1)
});
match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni1 = (undefined, function (fk, t, f, _deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, g, s__, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  g = first0;
  s__ = first1;
  scrut = readInt_inst_7_8_6_tsni(s__);
  return runtime.safeCall(scrut(fk, t, f, g))
});
match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni2 = (undefined, function (fk, t, _deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, f, s_, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  f = first0;
  s_ = first1;
  scrut = readInt_inst_7_8_5_tsni(s_);
  return runtime.safeCall(scrut(fk, t, f))
});
match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni = (undefined, function (fk, t, f, g, _deforest_Deforest_Arr_2_0_inst_7_9_tsni, _deforest_Deforest_Arr_2_1_inst_7_9_tsni) {
  let first1, first0, h, s___, e, k, arr, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_9_tsni;
  h = first0;
  s___ = first1;
  arr = [
    f,
    g,
    h
  ];
  e = arr;
  tmp = runtime.safeCall(fk(e));
  k = tmp;
  tmp1 = treejoin.insertT(k, e, t);
  return readTree_inst_7_9_tsni(fk, s___, tmp1)
});
match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni1 = (undefined, function (fk, t, f, _deforest_Deforest_Arr_2_0_inst_7_9_tsni, _deforest_Deforest_Arr_2_1_inst_7_9_tsni) {
  let first1, first0, g, s__, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_9_tsni;
  g = first0;
  s__ = first1;
  scrut = readInt_inst_7_9_6_tsni(s__);
  return runtime.safeCall(scrut(fk, t, f, g))
});
match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni2 = (undefined, function (fk, t, _deforest_Deforest_Arr_2_0_inst_7_9_tsni, _deforest_Deforest_Arr_2_1_inst_7_9_tsni) {
  let first1, first0, f, s_, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_9_tsni;
  f = first0;
  s_ = first1;
  scrut = readInt_inst_7_9_5_tsni(s_);
  return runtime.safeCall(scrut(fk, t, f))
});
match_scrut_arm_None_inst_7_10_tsni = (undefined, function (j, a, b, c) {
  return j
});
match_scrut_arm_None_inst_11_12_10_tsni = (undefined, function (j, a, b, c) {
  return j
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni = (undefined, function (fk, t, _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni) {
  let first1, first0, f, s_, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni;
  f = first0;
  s_ = first1;
  scrut = readInt_inst_11_12_9_5_tsni(s_);
  return runtime.safeCall(scrut(fk, t, f))
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni1 = (undefined, function (fk, t, f, _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni) {
  let first1, first0, g, s__, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni;
  g = first0;
  s__ = first1;
  scrut = readInt_inst_11_12_9_6_tsni(s__);
  return runtime.safeCall(scrut(fk, t, f, g))
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni2 = (undefined, function (fk, t, f, g, _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni) {
  let first1, first0, h, s___, e, k, arr, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_9_tsni;
  h = first0;
  s___ = first1;
  arr = [
    f,
    g,
    h
  ];
  e = arr;
  tmp = runtime.safeCall(fk(e));
  k = tmp;
  tmp1 = treejoin.insertT(k, e, t);
  return readTree_inst_11_12_9_tsni(fk, s___, tmp1)
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni = (undefined, function (fk, t, _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni) {
  let first1, first0, f, s_, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni;
  f = first0;
  s_ = first1;
  scrut = readInt_inst_11_12_8_5_tsni(s_);
  return runtime.safeCall(scrut(fk, t, f))
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni1 = (undefined, function (fk, t, f, _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni) {
  let first1, first0, g, s__, scrut;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni;
  g = first0;
  s__ = first1;
  scrut = readInt_inst_11_12_8_6_tsni(s__);
  return runtime.safeCall(scrut(fk, t, f, g))
});
match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni2 = (undefined, function (fk, t, f, g, _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni) {
  let first1, first0, h, s___, e, k, arr, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_8_tsni;
  h = first0;
  s___ = first1;
  arr = [
    f,
    g,
    h
  ];
  e = arr;
  tmp = runtime.safeCall(fk(e));
  k = tmp;
  tmp1 = treejoin.insertT(k, e, t);
  return readTree_inst_11_12_8_tsni(fk, s___, tmp1)
});
lookupT_inst_0_1_tsni = function lookupT_inst_0_1_tsni(k, t) {
  let param0, param1, k_, e, scrut, param2, k_1, l, r, scrut1, _deforest_Some_x;
  if (t instanceof treejoin.Node.class) {
    param0 = t.k;
    param1 = t.l;
    param2 = t.r;
    k_1 = param0;
    l = param1;
    r = param2;
    scrut1 = k <= k_1;
    if (scrut1 === true) {
      return lookupT_inst_0_1_tsni(k, l)
    } else {
      return lookupT_inst_0_1_tsni(k, r)
    }
  } else if (t instanceof treejoin.Leaf.class) {
    param0 = t.k;
    param1 = t.e;
    k_ = param0;
    e = param1;
    scrut = k === k_;
    if (scrut === true) {
      _deforest_Some_x = e;
      return (j, a, b, c) => {
        let param01, first2, first1, first0, d, e1, f, arr;
        param01 = _deforest_Some_x;
        if (globalThis.Array.isArray(param01) && param01.length === 3) {
          first0 = param01[0];
          first1 = param01[1];
          first2 = param01[2];
          d = first0;
          e1 = first1;
          f = first2;
          arr = [
            a,
            b,
            c,
            d,
            e1
          ];
          return treejoin.insertT(c, arr, j)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      return (j, a, b, c) => {
        return match_scrut_arm_None_inst_0_tsni(j, a, b, c)
      }
    }
  } else if (t instanceof treejoin.Empty.class) {
    return (j, a, b, c) => {
      return match_scrut_arm_None_inst_0_tsni(j, a, b, c)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
readInt_inst_2_3_tsni = function readInt_inst_2_3_tsni(s) {
  return readInt__inst_2_3_4_tsni(0, s)
};
readInt__inst_2_3_4_tsni = function readInt__inst_2_3_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_2_3_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t) => {
        return match_scrut_arm_Deforest_Arr_2_inst_2_tsni(fk, t, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t) => {
      return match_scrut_arm_Deforest_Arr_2_inst_2_tsni(fk, t, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_2_5_tsni = function readInt_inst_2_5_tsni(s) {
  return readInt__inst_2_5_4_tsni(0, s)
};
readInt__inst_2_5_4_tsni = function readInt__inst_2_5_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_2_5_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f) => {
        return match_scrut_arm_Deforest_Arr_2_inst_2_tsni1(fk, t, f, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f) => {
      return match_scrut_arm_Deforest_Arr_2_inst_2_tsni1(fk, t, f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_2_6_tsni = function readInt_inst_2_6_tsni(s) {
  return readInt__inst_2_6_4_tsni(0, s)
};
readInt__inst_2_6_4_tsni = function readInt__inst_2_6_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_2_6_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f, g) => {
        return match_scrut_arm_Deforest_Arr_2_inst_2_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f, g) => {
      return match_scrut_arm_Deforest_Arr_2_inst_2_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readTree_inst_7_8_tsni = function readTree_inst_7_8_tsni(fk, s, t) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return t
  } else {
    scrut = readInt_inst_7_8_3_tsni(s);
    return runtime.safeCall(scrut(fk, t))
  }
};
readInt_inst_7_8_6_tsni = function readInt_inst_7_8_6_tsni(s) {
  return readInt__inst_7_8_6_4_tsni(0, s)
};
readInt__inst_7_8_6_4_tsni = function readInt__inst_7_8_6_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_8_6_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t, f, g) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(fk, t, f, g, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t, f, g) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(fk, t, f, g, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
readInt_inst_7_8_5_tsni = function readInt_inst_7_8_5_tsni(s) {
  return readInt__inst_7_8_5_4_tsni(0, s)
};
readInt__inst_7_8_5_4_tsni = function readInt__inst_7_8_5_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_8_5_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t, f) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni1(fk, t, f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t, f) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni1(fk, t, f, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
readInt_inst_7_8_3_tsni = function readInt_inst_7_8_3_tsni(s) {
  return readInt__inst_7_8_3_4_tsni(0, s)
};
readInt__inst_7_8_3_4_tsni = function readInt__inst_7_8_3_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_8_3_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni2(fk, t, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni2(fk, t, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
readTree_inst_7_9_tsni = function readTree_inst_7_9_tsni(fk, s, t) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return t
  } else {
    scrut = readInt_inst_7_9_3_tsni(s);
    return runtime.safeCall(scrut(fk, t))
  }
};
readInt_inst_7_9_6_tsni = function readInt_inst_7_9_6_tsni(s) {
  return readInt__inst_7_9_6_4_tsni(0, s)
};
readInt__inst_7_9_6_4_tsni = function readInt__inst_7_9_6_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_9_6_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t, f, g) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni(fk, t, f, g, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t, f, g) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni(fk, t, f, g, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
readInt_inst_7_9_5_tsni = function readInt_inst_7_9_5_tsni(s) {
  return readInt__inst_7_9_5_4_tsni(0, s)
};
readInt__inst_7_9_5_4_tsni = function readInt__inst_7_9_5_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_9_5_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t, f) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni1(fk, t, f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t, f) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni1(fk, t, f, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
readInt_inst_7_9_3_tsni = function readInt_inst_7_9_3_tsni(s) {
  return readInt__inst_7_9_3_4_tsni(0, s)
};
readInt__inst_7_9_3_4_tsni = function readInt__inst_7_9_3_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_7_9_3_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_0 = n;
      _deforest_Deforest_Arr_2_1 = s_1;
      arr = (fk, t) => {
        return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni2(fk, t, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_01 = n;
    _deforest_Deforest_Arr_2_11 = s_;
    arr1 = (fk, t) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_9_tsni2(fk, t, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    return arr1
  }
};
join_inst_7_10_tsni = function join_inst_7_10_tsni(t1, t2, j) {
  let param0, param1, param2, k, l, r, k1, first2, first1, first0, a, b, c, scrut, tmp;
  if (t1 instanceof treejoin.Empty.class) {
    return j
  } else {
    if (t2 instanceof treejoin.Empty.class) {
      return j
    } else {
      if (t1 instanceof treejoin.Leaf.class) {
        param0 = t1.k;
        param1 = t1.e;
        k1 = param0;
        if (globalThis.Array.isArray(param1) && param1.length === 3) {
          first0 = param1[0];
          first1 = param1[1];
          first2 = param1[2];
          a = first0;
          b = first1;
          c = first2;
          scrut = lookupT_inst_7_10_1_tsni(c, t2);
          return runtime.safeCall(scrut(j, a, b, c))
        } else {
          throw new globalThis.Error("match error");
        }
      } else if (t1 instanceof treejoin.Node.class) {
        param0 = t1.k;
        param1 = t1.l;
        param2 = t1.r;
        k = param0;
        l = param1;
        r = param2;
        tmp = join_inst_7_10_tsni(r, t2, j);
        return join_inst_7_10_tsni(l, t2, tmp)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
lookupT_inst_7_10_1_tsni = function lookupT_inst_7_10_1_tsni(k, t) {
  let param0, param1, k_, e, scrut, param2, k_1, l, r, scrut1, _deforest_Some_x;
  if (t instanceof treejoin.Node.class) {
    param0 = t.k;
    param1 = t.l;
    param2 = t.r;
    k_1 = param0;
    l = param1;
    r = param2;
    scrut1 = k <= k_1;
    if (scrut1 === true) {
      return lookupT_inst_7_10_1_tsni(k, l)
    } else {
      return lookupT_inst_7_10_1_tsni(k, r)
    }
  } else if (t instanceof treejoin.Leaf.class) {
    param0 = t.k;
    param1 = t.e;
    k_ = param0;
    e = param1;
    scrut = k === k_;
    if (scrut === true) {
      _deforest_Some_x = e;
      return (j, a, b, c) => {
        let param01, first2, first1, first0, d, e1, f, arr;
        param01 = _deforest_Some_x;
        if (globalThis.Array.isArray(param01) && param01.length === 3) {
          first0 = param01[0];
          first1 = param01[1];
          first2 = param01[2];
          d = first0;
          e1 = first1;
          f = first2;
          arr = [
            a,
            b,
            c,
            d,
            e1
          ];
          return treejoin.insertT(c, arr, j)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      return (j, a, b, c) => {
        return match_scrut_arm_None_inst_7_10_tsni(j, a, b, c)
      }
    }
  } else if (t instanceof treejoin.Empty.class) {
    return (j, a, b, c) => {
      return match_scrut_arm_None_inst_7_10_tsni(j, a, b, c)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testTreejoin_nofib_inst_11_12_tsni = function testTreejoin_nofib_inst_11_12_tsni(n) {
  let c1, c2, a, b, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/1500.1"));
  tmp1 = runtime.safeCall(tmp.toString());
  tmp2 = NofibPrelude.nofibStringToList(tmp1);
  c1 = tmp2;
  tmp3 = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/1500.2"));
  tmp4 = runtime.safeCall(tmp3.toString());
  tmp5 = NofibPrelude.nofibStringToList(tmp4);
  c2 = tmp5;
  tmp6 = lambda;
  tmp7 = readTree_inst_11_12_8_tsni(tmp6, c1, treejoin.Empty);
  a = tmp7;
  tmp8 = lambda1;
  tmp9 = readTree_inst_11_12_9_tsni(tmp8, c2, treejoin.Empty);
  b = tmp9;
  return join_inst_11_12_10_tsni(a, b, treejoin.Empty)
};
join_inst_11_12_10_tsni = function join_inst_11_12_10_tsni(t1, t2, j) {
  let param0, param1, param2, k, l, r, k1, first2, first1, first0, a, b, c, scrut, tmp;
  if (t1 instanceof treejoin.Empty.class) {
    return j
  } else {
    if (t2 instanceof treejoin.Empty.class) {
      return j
    } else {
      if (t1 instanceof treejoin.Leaf.class) {
        param0 = t1.k;
        param1 = t1.e;
        k1 = param0;
        if (globalThis.Array.isArray(param1) && param1.length === 3) {
          first0 = param1[0];
          first1 = param1[1];
          first2 = param1[2];
          a = first0;
          b = first1;
          c = first2;
          scrut = lookupT_inst_11_12_10_1_tsni(c, t2);
          return runtime.safeCall(scrut(j, a, b, c))
        } else {
          throw new globalThis.Error("match error");
        }
      } else if (t1 instanceof treejoin.Node.class) {
        param0 = t1.k;
        param1 = t1.l;
        param2 = t1.r;
        k = param0;
        l = param1;
        r = param2;
        tmp = join_inst_11_12_10_tsni(r, t2, j);
        return join_inst_11_12_10_tsni(l, t2, tmp)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
lookupT_inst_11_12_10_1_tsni = function lookupT_inst_11_12_10_1_tsni(k, t) {
  let param0, param1, k_, e, scrut, param2, k_1, l, r, scrut1, _deforest_Some_x;
  if (t instanceof treejoin.Node.class) {
    param0 = t.k;
    param1 = t.l;
    param2 = t.r;
    k_1 = param0;
    l = param1;
    r = param2;
    scrut1 = k <= k_1;
    if (scrut1 === true) {
      return lookupT_inst_11_12_10_1_tsni(k, l)
    } else {
      return lookupT_inst_11_12_10_1_tsni(k, r)
    }
  } else if (t instanceof treejoin.Leaf.class) {
    param0 = t.k;
    param1 = t.e;
    k_ = param0;
    e = param1;
    scrut = k === k_;
    if (scrut === true) {
      _deforest_Some_x = e;
      return (j, a, b, c) => {
        let param01, first2, first1, first0, d, e1, f, arr;
        param01 = _deforest_Some_x;
        if (globalThis.Array.isArray(param01) && param01.length === 3) {
          first0 = param01[0];
          first1 = param01[1];
          first2 = param01[2];
          d = first0;
          e1 = first1;
          f = first2;
          arr = [
            a,
            b,
            c,
            d,
            e1
          ];
          return treejoin.insertT(c, arr, j)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      return (j, a, b, c) => {
        return match_scrut_arm_None_inst_11_12_10_tsni(j, a, b, c)
      }
    }
  } else if (t instanceof treejoin.Empty.class) {
    return (j, a, b, c) => {
      return match_scrut_arm_None_inst_11_12_10_tsni(j, a, b, c)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
readTree_inst_11_12_9_tsni = function readTree_inst_11_12_9_tsni(fk, s, t) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return t
  } else {
    scrut = readInt_inst_11_12_9_3_tsni(s);
    return runtime.safeCall(scrut(fk, t))
  }
};
readInt_inst_11_12_9_3_tsni = function readInt_inst_11_12_9_3_tsni(s) {
  return readInt__inst_11_12_9_3_4_tsni(0, s)
};
readInt__inst_11_12_9_3_4_tsni = function readInt__inst_11_12_9_3_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_9_3_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni(fk, t, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni(fk, t, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_11_12_9_5_tsni = function readInt_inst_11_12_9_5_tsni(s) {
  return readInt__inst_11_12_9_5_4_tsni(0, s)
};
readInt__inst_11_12_9_5_4_tsni = function readInt__inst_11_12_9_5_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_9_5_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni1(fk, t, f, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni1(fk, t, f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_11_12_9_6_tsni = function readInt_inst_11_12_9_6_tsni(s) {
  return readInt__inst_11_12_9_6_4_tsni(0, s)
};
readInt__inst_11_12_9_6_4_tsni = function readInt__inst_11_12_9_6_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_9_6_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f, g) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f, g) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_9_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readTree_inst_11_12_8_tsni = function readTree_inst_11_12_8_tsni(fk, s, t) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return t
  } else {
    scrut = readInt_inst_11_12_8_3_tsni(s);
    return runtime.safeCall(scrut(fk, t))
  }
};
readInt_inst_11_12_8_3_tsni = function readInt_inst_11_12_8_3_tsni(s) {
  return readInt__inst_11_12_8_3_4_tsni(0, s)
};
readInt__inst_11_12_8_3_4_tsni = function readInt__inst_11_12_8_3_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_8_3_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni(fk, t, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni(fk, t, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_11_12_8_5_tsni = function readInt_inst_11_12_8_5_tsni(s) {
  return readInt__inst_11_12_8_5_4_tsni(0, s)
};
readInt__inst_11_12_8_5_4_tsni = function readInt__inst_11_12_8_5_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_8_5_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni1(fk, t, f, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni1(fk, t, f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
readInt_inst_11_12_8_6_tsni = function readInt_inst_11_12_8_6_tsni(s) {
  return readInt__inst_11_12_8_6_4_tsni(0, s)
};
readInt__inst_11_12_8_6_4_tsni = function readInt__inst_11_12_8_6_4_tsni(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt__inst_11_12_8_6_4_tsni(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      _deforest_Deforest_Arr_2_01 = n;
      _deforest_Deforest_Arr_2_11 = s_1;
      arr = (fk, t, f, g) => {
        return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = s_;
    arr1 = (fk, t, f, g) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_8_tsni2(fk, t, f, g, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr1
  }
};
lambda = (undefined, function (caseScrut) {
  let first2, first1, first0, xx;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 3) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    first2 = caseScrut[2];
    xx = first0;
    return xx
  } else {
    throw new globalThis.Error("match error");
  }
});
lambda1 = (undefined, function (caseScrut) {
  let first2, first1, first0, xx;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 3) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    first2 = caseScrut[2];
    xx = first0;
    return xx
  } else {
    throw new globalThis.Error("match error");
  }
});
readInt_ = function readInt_(n, cs) {
  let s_, param0, param1, c, cs_, s_1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1;
  if (cs instanceof NofibPrelude.Cons.class) {
    param0 = cs.head;
    param1 = cs.tail;
    c = param0;
    cs_ = param1;
    scrut = treejoin1.isDigit(c);
    if (scrut === true) {
      tmp = n * 10;
      tmp1 = runtime.safeCall(c.codePointAt(0));
      tmp2 = tmp + tmp1;
      tmp3 = tmp2 - 48;
      return readInt_(tmp3, cs_)
    } else {
      tmp4 = NofibPrelude.Cons(c, cs);
      tmp5 = NofibPrelude.dropWhile(treejoin1.isSpace, tmp4);
      s_1 = tmp5;
      arr = [
        n,
        s_1
      ];
      return arr
    }
  } else {
    tmp6 = NofibPrelude.dropWhile(treejoin1.isSpace, cs);
    s_ = tmp6;
    arr1 = [
      n,
      s_
    ];
    return arr1
  }
};
(class treejoin {
  static {
    treejoin1 = treejoin;
    this.Tree = class Tree {
      constructor() {}
      toString() { return "Tree"; }
    };
    this.Node = function Node(k1, l1, r1) {
      return new Node.class(k1, l1, r1);
    };
    this.Node.class = class Node extends treejoin.Tree {
      constructor(k, l, r) {
        super();
        this.k = k;
        this.l = l;
        this.r = r;
      }
      toString() { return "Node(" + runtime.render(this.k) + ", " + runtime.render(this.l) + ", " + runtime.render(this.r) + ")"; }
    };
    this.Leaf = function Leaf(k1, e1) {
      return new Leaf.class(k1, e1);
    };
    this.Leaf.class = class Leaf extends treejoin.Tree {
      constructor(k, e) {
        super();
        this.k = k;
        this.e = e;
      }
      toString() { return "Leaf(" + runtime.render(this.k) + ", " + runtime.render(this.e) + ")"; }
    };
    const Empty$class = class Empty extends treejoin.Tree {
      constructor() {
        super();
      }
      toString() { return "Empty"; }
    };
    this.Empty = new Empty$class;
    this.Empty.class = Empty$class;
  }
  static isSpace(c) {
    let tmp, tmp1;
    tmp = c === " ";
    tmp1 = c === "\n";
    return tmp || tmp1
  } 
  static isDigit(c1) {
    let n, tmp, tmp1, tmp2;
    tmp = runtime.safeCall(c1.codePointAt(0));
    n = tmp;
    tmp1 = n >= 48;
    tmp2 = n <= 57;
    return tmp1 && tmp2
  } 
  static insertT(k, e, t) {
    let param0, param1, k_, k__, l_, scrut, scrut1, param2, k_1, l, r, scrut2, tmp, tmp1, tmp2, tmp3, tmp4;
    if (t instanceof treejoin.Node.class) {
      param0 = t.k;
      param1 = t.l;
      param2 = t.r;
      k_1 = param0;
      l = param1;
      r = param2;
      scrut2 = k <= k_1;
      if (scrut2 === true) {
        tmp = treejoin.insertT(k, e, l);
        return runtime.safeCall(treejoin.Node(k_1, tmp, r))
      } else {
        tmp1 = treejoin.insertT(k, e, r);
        return runtime.safeCall(treejoin.Node(k_1, l, tmp1))
      }
    } else if (t instanceof treejoin.Leaf.class) {
      param0 = t.k;
      param1 = t.e;
      k_ = param0;
      k__ = param1;
      tmp2 = treejoin.Leaf(k, e);
      l_ = tmp2;
      scrut1 = k < k_;
      if (scrut1 === true) {
        tmp3 = treejoin.Leaf(k_, k__);
        return runtime.safeCall(treejoin.Node(k, l_, tmp3))
      } else {
        scrut = k > k_;
        if (scrut === true) {
          tmp4 = treejoin.Leaf(k_, k__);
          return runtime.safeCall(treejoin.Node(k_, tmp4, l_))
        } else {
          throw globalThis.Error("already exist");
        }
      }
    } else if (t instanceof treejoin.Empty.class) {
      return treejoin.Leaf(k, e)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lookupT(k1, t1) {
    let param0, param1, k_, e1, scrut, param2, k_1, l, r, scrut1;
    if (t1 instanceof treejoin.Node.class) {
      param0 = t1.k;
      param1 = t1.l;
      param2 = t1.r;
      k_1 = param0;
      l = param1;
      r = param2;
      scrut1 = k1 <= k_1;
      if (scrut1 === true) {
        return treejoin.lookupT(k1, l)
      } else {
        return treejoin.lookupT(k1, r)
      }
    } else if (t1 instanceof treejoin.Leaf.class) {
      param0 = t1.k;
      param1 = t1.e;
      k_ = param0;
      e1 = param1;
      scrut = k1 === k_;
      if (scrut === true) {
        return runtime.safeCall(NofibPrelude.Some(e1))
      } else {
        return NofibPrelude.None
      }
    } else if (t1 instanceof treejoin.Empty.class) {
      return NofibPrelude.None
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static readInt(s) {
    return readInt_(0, s)
  } 
  static join(t11, t2, j) {
    let param0, param1, param2, k2, l, r, k3, first2, first1, first0, a, b, c2, scrut, tmp;
    if (t11 instanceof treejoin.Empty.class) {
      return j
    } else {
      if (t2 instanceof treejoin.Empty.class) {
        return j
      } else {
        if (t11 instanceof treejoin.Leaf.class) {
          param0 = t11.k;
          param1 = t11.e;
          k3 = param0;
          if (globalThis.Array.isArray(param1) && param1.length === 3) {
            first0 = param1[0];
            first1 = param1[1];
            first2 = param1[2];
            a = first0;
            b = first1;
            c2 = first2;
            scrut = lookupT_inst_0_1_tsni(c2, t2);
            return runtime.safeCall(scrut(j, a, b, c2))
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (t11 instanceof treejoin.Node.class) {
          param0 = t11.k;
          param1 = t11.l;
          param2 = t11.r;
          k2 = param0;
          l = param1;
          r = param2;
          tmp = treejoin.join(r, t2, j);
          return treejoin.join(l, t2, tmp)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static readTree(fk, s1, t3) {
    let scrut;
    if (s1 instanceof NofibPrelude.Nil.class) {
      return t3
    } else {
      scrut = readInt_inst_2_3_tsni(s1);
      return runtime.safeCall(scrut(fk, t3))
    }
  } 
  static testTreejoin_nofib(n) {
    let c11, c2, a, b, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/1500.1"));
    tmp1 = runtime.safeCall(tmp.toString());
    tmp2 = NofibPrelude.nofibStringToList(tmp1);
    c11 = tmp2;
    tmp3 = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/1500.2"));
    tmp4 = runtime.safeCall(tmp3.toString());
    tmp5 = NofibPrelude.nofibStringToList(tmp4);
    c2 = tmp5;
    tmp6 = lambda;
    tmp7 = readTree_inst_7_8_tsni(tmp6, c11, treejoin.Empty);
    a = tmp7;
    tmp8 = lambda1;
    tmp9 = readTree_inst_7_9_tsni(tmp8, c2, treejoin.Empty);
    b = tmp9;
    return join_inst_7_10_tsni(a, b, treejoin.Empty)
  } 
  static main() {
    let tmp;
    tmp = testTreejoin_nofib_inst_11_12_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "treejoin"; }
});
let treejoin = treejoin1; export default treejoin;
