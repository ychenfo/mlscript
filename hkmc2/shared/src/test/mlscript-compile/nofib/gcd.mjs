import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let gcd1, quotRem_inst_0_1_tsni, g_inst_2_3_tsni, quotRem_inst_2_3_1_tsni, enumFromTo_inst_4_5_tsni, gcdE_inst_4_6_tsni, g_inst_4_6_3_tsni, quotRem_inst_4_6_3_1_tsni, enumFromTo_inst_4_7_tsni, map_inst_4_8_tsni, test_inst_9_10_tsni, map_inst_9_10_8_tsni, gcdE_inst_9_10_6_tsni, g_inst_9_10_6_3_tsni, quotRem_inst_9_10_6_3_1_tsni, enumFromTo_inst_9_10_5_tsni, enumFromTo_inst_9_10_7_tsni, testGcd_nofib_inst_11_12_tsni, test_inst_11_12_10_tsni, enumFromTo_inst_11_12_10_5_tsni, gcdE_inst_11_12_10_6_tsni, g_inst_11_12_10_6_3_tsni, quotRem_inst_11_12_10_6_3_1_tsni, enumFromTo_inst_11_12_10_7_tsni, map_inst_11_12_10_8_tsni, map_inst_4_13_tsni, map_inst_9_10_13_tsni, map_inst_11_12_10_13_tsni;
quotRem_inst_0_1_tsni = function quotRem_inst_0_1_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intQuot(a, b);
  tmp1 = NofibPrelude.intRem(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (u1, u2, v1, v2, v3) => {
    let first1, first0, q, r, arr1, tmp2, tmp3, tmp4, tmp5, arr2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    arr1 = [
      v1,
      v2,
      v3
    ];
    tmp2 = q * v1;
    tmp3 = u1 - tmp2;
    tmp4 = q * v2;
    tmp5 = u2 - tmp4;
    arr2 = [
      tmp3,
      tmp5,
      r
    ];
    return gcd.g(arr1, arr2)
  };
  return arr
};
g_inst_2_3_tsni = function g_inst_2_3_tsni(u1u2u3, v1v2v3) {
  let first2, first1, first0, u1, u2, u3, first21, first11, first01, v1, v2, v3, scrut, scrut1, arr;
  if (globalThis.Array.isArray(u1u2u3) && u1u2u3.length === 3) {
    first0 = u1u2u3[0];
    first1 = u1u2u3[1];
    first2 = u1u2u3[2];
    u1 = first0;
    u2 = first1;
    u3 = first2;
    if (globalThis.Array.isArray(v1v2v3) && v1v2v3.length === 3) {
      first01 = v1v2v3[0];
      first11 = v1v2v3[1];
      first21 = v1v2v3[2];
      v1 = first01;
      v2 = first11;
      v3 = first21;
      scrut1 = v3 == 0;
      if (scrut1 === true) {
        arr = [
          u3,
          u1,
          u2
        ];
        return arr
      } else {
        scrut = quotRem_inst_2_3_1_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_2_3_1_tsni = function quotRem_inst_2_3_1_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intQuot(a, b);
  tmp1 = NofibPrelude.intRem(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (u1, u2, v1, v2, v3) => {
    let first1, first0, q, r, arr1, tmp2, tmp3, tmp4, tmp5, arr2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    arr1 = [
      v1,
      v2,
      v3
    ];
    tmp2 = q * v1;
    tmp3 = u1 - tmp2;
    tmp4 = q * v2;
    tmp5 = u2 - tmp4;
    arr2 = [
      tmp3,
      tmp5,
      r
    ];
    return g_inst_2_3_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_4_5_tsni = function enumFromTo_inst_4_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_4_5_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = h1;
      _deforest_Deforest_Arr_2_1 = h2;
      arr = () => {
        let first1, first0, x, y, tmp3, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x = first0;
        y = first1;
        tmp3 = gcdE_inst_4_6_tsni(x, y);
        _deforest_Deforest_Arr_3_0 = x;
        _deforest_Deforest_Arr_3_1 = y;
        _deforest_Deforest_Arr_3_2 = tmp3;
        arr1 = () => {
          let first2, first11, first01, d1, d2, first21, first12, first02, gg, u, v, tmp4, tmp5;
          first01 = _deforest_Deforest_Arr_3_0;
          first11 = _deforest_Deforest_Arr_3_1;
          first2 = _deforest_Deforest_Arr_3_2;
          d1 = first01;
          d2 = first11;
          if (globalThis.Array.isArray(first2) && first2.length === 3) {
            first02 = first2[0];
            first12 = first2[1];
            first21 = first2[2];
            gg = first02;
            u = first12;
            v = first21;
            tmp4 = gg + u;
            tmp5 = tmp4 + v;
            return NofibPrelude.abs(tmp5)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return arr1
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_4_8_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_4_13_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
gcdE_inst_4_6_tsni = function gcdE_inst_4_6_tsni(x, y) {
  let scrut, arr, arr1, arr2;
  scrut = x == 0;
  if (scrut === true) {
    arr = [
      y,
      0,
      1
    ];
    return arr
  } else {
    arr1 = [
      1,
      0,
      x
    ];
    arr2 = [
      0,
      1,
      y
    ];
    return g_inst_4_6_3_tsni(arr1, arr2)
  }
};
g_inst_4_6_3_tsni = function g_inst_4_6_3_tsni(u1u2u3, v1v2v3) {
  let first2, first1, first0, u1, u2, u3, first21, first11, first01, v1, v2, v3, scrut, scrut1, arr;
  if (globalThis.Array.isArray(u1u2u3) && u1u2u3.length === 3) {
    first0 = u1u2u3[0];
    first1 = u1u2u3[1];
    first2 = u1u2u3[2];
    u1 = first0;
    u2 = first1;
    u3 = first2;
    if (globalThis.Array.isArray(v1v2v3) && v1v2v3.length === 3) {
      first01 = v1v2v3[0];
      first11 = v1v2v3[1];
      first21 = v1v2v3[2];
      v1 = first01;
      v2 = first11;
      v3 = first21;
      scrut1 = v3 == 0;
      if (scrut1 === true) {
        arr = [
          u3,
          u1,
          u2
        ];
        return arr
      } else {
        scrut = quotRem_inst_4_6_3_1_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_4_6_3_1_tsni = function quotRem_inst_4_6_3_1_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intQuot(a, b);
  tmp1 = NofibPrelude.intRem(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (u1, u2, v1, v2, v3) => {
    let first1, first0, q, r, arr1, tmp2, tmp3, tmp4, tmp5, arr2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    arr1 = [
      v1,
      v2,
      v3
    ];
    tmp2 = q * v1;
    tmp3 = u1 - tmp2;
    tmp4 = q * v2;
    tmp5 = u2 - tmp4;
    arr2 = [
      tmp3,
      tmp5,
      r
    ];
    return g_inst_4_6_3_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_4_7_tsni = function enumFromTo_inst_4_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_4_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ms) => {
      let lscomp2, param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(p2) {
        return runtime.safeCall(p2(lscomp2, lscomp1, h1, t1))
      };
      return lscomp2(ms)
    }
  } else {
    return (lscomp1, ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_4_8_tsni = function map_inst_4_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
test_inst_9_10_tsni = function test_inst_9_10_tsni(d) {
  let lscomp1, ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda, lambda1;
  lscomp1 = function lscomp1(p1) {
    return runtime.safeCall(p1(lscomp1, ms))
  };
  tmp = 5000 + d;
  tmp1 = enumFromTo_inst_9_10_7_tsni(5000, tmp);
  ns = tmp1;
  tmp2 = 10000 + d;
  tmp3 = enumFromTo_inst_9_10_5_tsni(10000, tmp2);
  ms = tmp3;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp4 = lambda;
  tmp5 = lscomp1(ns);
  tmp6 = map_inst_9_10_8_tsni(tmp4, tmp5);
  tripls = tmp6;
  lambda1 = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp7 = lambda1;
  tmp8 = map_inst_9_10_13_tsni(tmp7, tripls);
  rs = tmp8;
  return gcd.max_(rs)
};
map_inst_9_10_8_tsni = function map_inst_9_10_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
gcdE_inst_9_10_6_tsni = function gcdE_inst_9_10_6_tsni(x, y) {
  let scrut, arr, arr1, arr2;
  scrut = x == 0;
  if (scrut === true) {
    arr = [
      y,
      0,
      1
    ];
    return arr
  } else {
    arr1 = [
      1,
      0,
      x
    ];
    arr2 = [
      0,
      1,
      y
    ];
    return g_inst_9_10_6_3_tsni(arr1, arr2)
  }
};
g_inst_9_10_6_3_tsni = function g_inst_9_10_6_3_tsni(u1u2u3, v1v2v3) {
  let first2, first1, first0, u1, u2, u3, first21, first11, first01, v1, v2, v3, scrut, scrut1, arr;
  if (globalThis.Array.isArray(u1u2u3) && u1u2u3.length === 3) {
    first0 = u1u2u3[0];
    first1 = u1u2u3[1];
    first2 = u1u2u3[2];
    u1 = first0;
    u2 = first1;
    u3 = first2;
    if (globalThis.Array.isArray(v1v2v3) && v1v2v3.length === 3) {
      first01 = v1v2v3[0];
      first11 = v1v2v3[1];
      first21 = v1v2v3[2];
      v1 = first01;
      v2 = first11;
      v3 = first21;
      scrut1 = v3 == 0;
      if (scrut1 === true) {
        arr = [
          u3,
          u1,
          u2
        ];
        return arr
      } else {
        scrut = quotRem_inst_9_10_6_3_1_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_9_10_6_3_1_tsni = function quotRem_inst_9_10_6_3_1_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intQuot(a, b);
  tmp1 = NofibPrelude.intRem(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (u1, u2, v1, v2, v3) => {
    let first1, first0, q, r, arr1, tmp2, tmp3, tmp4, tmp5, arr2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    arr1 = [
      v1,
      v2,
      v3
    ];
    tmp2 = q * v1;
    tmp3 = u1 - tmp2;
    tmp4 = q * v2;
    tmp5 = u2 - tmp4;
    arr2 = [
      tmp3,
      tmp5,
      r
    ];
    return g_inst_9_10_6_3_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_9_10_5_tsni = function enumFromTo_inst_9_10_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_9_10_5_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = h1;
      _deforest_Deforest_Arr_2_1 = h2;
      arr = () => {
        let first1, first0, x, y, tmp3, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x = first0;
        y = first1;
        tmp3 = gcdE_inst_9_10_6_tsni(x, y);
        _deforest_Deforest_Arr_3_0 = x;
        _deforest_Deforest_Arr_3_1 = y;
        _deforest_Deforest_Arr_3_2 = tmp3;
        arr1 = () => {
          let first2, first11, first01, d1, d2, first21, first12, first02, gg, u, v, tmp4, tmp5;
          first01 = _deforest_Deforest_Arr_3_0;
          first11 = _deforest_Deforest_Arr_3_1;
          first2 = _deforest_Deforest_Arr_3_2;
          d1 = first01;
          d2 = first11;
          if (globalThis.Array.isArray(first2) && first2.length === 3) {
            first02 = first2[0];
            first12 = first2[1];
            first21 = first2[2];
            gg = first02;
            u = first12;
            v = first21;
            tmp4 = gg + u;
            tmp5 = tmp4 + v;
            return NofibPrelude.abs(tmp5)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return arr1
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_9_10_8_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_9_10_13_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_9_10_7_tsni = function enumFromTo_inst_9_10_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_9_10_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ms) => {
      let lscomp2, param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(p2) {
        return runtime.safeCall(p2(lscomp2, lscomp1, h1, t1))
      };
      return lscomp2(ms)
    }
  } else {
    return (lscomp1, ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
testGcd_nofib_inst_11_12_tsni = function testGcd_nofib_inst_11_12_tsni(x) {
  return test_inst_11_12_10_tsni(x)
};
test_inst_11_12_10_tsni = function test_inst_11_12_10_tsni(d) {
  let lscomp1, ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda, lambda1;
  lscomp1 = function lscomp1(p1) {
    return runtime.safeCall(p1(lscomp1, ms))
  };
  tmp = 5000 + d;
  tmp1 = enumFromTo_inst_11_12_10_7_tsni(5000, tmp);
  ns = tmp1;
  tmp2 = 10000 + d;
  tmp3 = enumFromTo_inst_11_12_10_5_tsni(10000, tmp2);
  ms = tmp3;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp4 = lambda;
  tmp5 = lscomp1(ns);
  tmp6 = map_inst_11_12_10_8_tsni(tmp4, tmp5);
  tripls = tmp6;
  lambda1 = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp7 = lambda1;
  tmp8 = map_inst_11_12_10_13_tsni(tmp7, tripls);
  rs = tmp8;
  return gcd.max_(rs)
};
enumFromTo_inst_11_12_10_5_tsni = function enumFromTo_inst_11_12_10_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_12_10_5_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, lscomp1, h1, t1) => {
      let param0, param1, h2, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = h1;
      _deforest_Deforest_Arr_2_1 = h2;
      arr = () => {
        let first1, first0, x, y, tmp3, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x = first0;
        y = first1;
        tmp3 = gcdE_inst_11_12_10_6_tsni(x, y);
        _deforest_Deforest_Arr_3_0 = x;
        _deforest_Deforest_Arr_3_1 = y;
        _deforest_Deforest_Arr_3_2 = tmp3;
        arr1 = () => {
          let first2, first11, first01, d1, d2, first21, first12, first02, gg, u, v, tmp4, tmp5;
          first01 = _deforest_Deforest_Arr_3_0;
          first11 = _deforest_Deforest_Arr_3_1;
          first2 = _deforest_Deforest_Arr_3_2;
          d1 = first01;
          d2 = first11;
          if (globalThis.Array.isArray(first2) && first2.length === 3) {
            first02 = first2[0];
            first12 = first2[1];
            first21 = first2[2];
            gg = first02;
            u = first12;
            v = first21;
            tmp4 = gg + u;
            tmp5 = tmp4 + v;
            return NofibPrelude.abs(tmp5)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return arr1
      };
      tmp2 = lscomp2(t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_11_12_10_8_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_11_12_10_13_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (lscomp2, lscomp1, h1, t1) => {
      return lscomp1(t1)
    }
  }
};
gcdE_inst_11_12_10_6_tsni = function gcdE_inst_11_12_10_6_tsni(x, y) {
  let scrut, arr, arr1, arr2;
  scrut = x == 0;
  if (scrut === true) {
    arr = [
      y,
      0,
      1
    ];
    return arr
  } else {
    arr1 = [
      1,
      0,
      x
    ];
    arr2 = [
      0,
      1,
      y
    ];
    return g_inst_11_12_10_6_3_tsni(arr1, arr2)
  }
};
g_inst_11_12_10_6_3_tsni = function g_inst_11_12_10_6_3_tsni(u1u2u3, v1v2v3) {
  let first2, first1, first0, u1, u2, u3, first21, first11, first01, v1, v2, v3, scrut, scrut1, arr;
  if (globalThis.Array.isArray(u1u2u3) && u1u2u3.length === 3) {
    first0 = u1u2u3[0];
    first1 = u1u2u3[1];
    first2 = u1u2u3[2];
    u1 = first0;
    u2 = first1;
    u3 = first2;
    if (globalThis.Array.isArray(v1v2v3) && v1v2v3.length === 3) {
      first01 = v1v2v3[0];
      first11 = v1v2v3[1];
      first21 = v1v2v3[2];
      v1 = first01;
      v2 = first11;
      v3 = first21;
      scrut1 = v3 == 0;
      if (scrut1 === true) {
        arr = [
          u3,
          u1,
          u2
        ];
        return arr
      } else {
        scrut = quotRem_inst_11_12_10_6_3_1_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_11_12_10_6_3_1_tsni = function quotRem_inst_11_12_10_6_3_1_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intQuot(a, b);
  tmp1 = NofibPrelude.intRem(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (u1, u2, v1, v2, v3) => {
    let first1, first0, q, r, arr1, tmp2, tmp3, tmp4, tmp5, arr2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    arr1 = [
      v1,
      v2,
      v3
    ];
    tmp2 = q * v1;
    tmp3 = u1 - tmp2;
    tmp4 = q * v2;
    tmp5 = u2 - tmp4;
    arr2 = [
      tmp3,
      tmp5,
      r
    ];
    return g_inst_11_12_10_6_3_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_11_12_10_7_tsni = function enumFromTo_inst_11_12_10_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_12_10_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp1, ms) => {
      let lscomp2, param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(p2) {
        return runtime.safeCall(p2(lscomp2, lscomp1, h1, t1))
      };
      return lscomp2(ms)
    }
  } else {
    return (lscomp1, ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
map_inst_11_12_10_8_tsni = function map_inst_11_12_10_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_4_13_tsni = function map_inst_4_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_9_10_13_tsni = function map_inst_9_10_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_11_12_10_13_tsni = function map_inst_11_12_10_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class gcd {
  static {
    gcd1 = gcd;
  }
  static g(u1u2u3, v1v2v3) {
    let first2, first1, first0, u1, u2, u3, first21, first11, first01, v1, v2, v3, scrut, scrut1, arr;
    if (globalThis.Array.isArray(u1u2u3) && u1u2u3.length === 3) {
      first0 = u1u2u3[0];
      first1 = u1u2u3[1];
      first2 = u1u2u3[2];
      u1 = first0;
      u2 = first1;
      u3 = first2;
      if (globalThis.Array.isArray(v1v2v3) && v1v2v3.length === 3) {
        first01 = v1v2v3[0];
        first11 = v1v2v3[1];
        first21 = v1v2v3[2];
        v1 = first01;
        v2 = first11;
        v3 = first21;
        scrut1 = v3 == 0;
        if (scrut1 === true) {
          arr = [
            u3,
            u1,
            u2
          ];
          return arr
        } else {
          scrut = quotRem_inst_0_1_tsni(u3, v3);
          return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static gcdE(x, y) {
    let scrut, arr, arr1, arr2;
    scrut = x == 0;
    if (scrut === true) {
      arr = [
        y,
        0,
        1
      ];
      return arr
    } else {
      arr1 = [
        1,
        0,
        x
      ];
      arr2 = [
        0,
        1,
        y
      ];
      return g_inst_2_3_tsni(arr1, arr2)
    }
  } 
  static max_(ls) {
    let param0, param1, x1, param01, param11, y1, xs, scrut, x2, tmp, tmp1;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x2 = param0;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x2
      } else if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        y1 = param01;
        xs = param11;
        scrut = x1 < y1;
        if (scrut === true) {
          tmp = NofibPrelude.Cons(y1, xs);
          return gcd.max_(tmp)
        } else {
          tmp1 = NofibPrelude.Cons(x1, xs);
          return gcd.max_(tmp1)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static test(d) {
    let lscomp1, ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda, lambda1;
    lscomp1 = function lscomp1(p1) {
      return runtime.safeCall(p1(lscomp1, ms))
    };
    tmp = 5000 + d;
    tmp1 = enumFromTo_inst_4_7_tsni(5000, tmp);
    ns = tmp1;
    tmp2 = 10000 + d;
    tmp3 = enumFromTo_inst_4_5_tsni(10000, tmp2);
    ms = tmp3;
    lambda = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut())
    });
    tmp4 = lambda;
    tmp5 = lscomp1(ns);
    tmp6 = map_inst_4_8_tsni(tmp4, tmp5);
    tripls = tmp6;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut())
    });
    tmp7 = lambda1;
    tmp8 = map_inst_4_13_tsni(tmp7, tripls);
    rs = tmp8;
    return gcd.max_(rs)
  } 
  static testGcd_nofib(x1) {
    return test_inst_9_10_tsni(x1)
  } 
  static main() {
    return testGcd_nofib_inst_11_12_tsni(40)
  }
  static toString() { return "gcd"; }
});
let gcd = gcd1; export default gcd;
