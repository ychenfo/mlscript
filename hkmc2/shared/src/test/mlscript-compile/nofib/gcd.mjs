import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let lscomp2, lscomp1, gcd1, lambda, lambda1, lscomp1$, lscomp2$, gcdE_inst_0_1_tsni, g_inst_0_1_2_tsni, quotRem_inst_0_1_2_3_tsni, quotRem_inst_4_3_tsni, g_inst_5_2_tsni, quotRem_inst_5_2_3_tsni, lambda_inst_6_7_tsni, gcdE_inst_6_7_1_tsni, g_inst_6_7_1_2_tsni, quotRem_inst_6_7_1_2_3_tsni, enumFromTo_inst_6_8_tsni, enumFromTo_inst_6_9_tsni, lscomp1$_inst_6_10_tsni, lscomp2$_inst_6_10_tsni, map_inst_6_11_tsni, test_inst_12_13_tsni, map_inst_12_13_11_tsni, lscomp1$_inst_12_13_10_tsni, lscomp2$_inst_12_13_10_tsni, lambda_inst_12_13_7_tsni, gcdE_inst_12_13_7_1_tsni, g_inst_12_13_7_1_2_tsni, quotRem_inst_12_13_7_1_2_3_tsni, enumFromTo_inst_12_13_8_tsni, enumFromTo_inst_12_13_9_tsni, testGcd_nofib_inst_14_15_tsni, test_inst_14_15_13_tsni, lambda_inst_14_15_13_7_tsni, gcdE_inst_14_15_13_7_1_tsni, g_inst_14_15_13_7_1_2_tsni, quotRem_inst_14_15_13_7_1_2_3_tsni, enumFromTo_inst_14_15_13_8_tsni, enumFromTo_inst_14_15_13_9_tsni, lscomp1$_inst_14_15_13_10_tsni, lscomp2$_inst_14_15_13_10_tsni, map_inst_14_15_13_11_tsni, map_inst_6_16_tsni, lambda_inst_6_17_tsni, map_inst_12_13_16_tsni, lambda_inst_12_13_17_tsni, map_inst_14_15_13_16_tsni, lambda_inst_14_15_13_17_tsni;
gcdE_inst_0_1_tsni = function gcdE_inst_0_1_tsni(x, y) {
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
    return g_inst_0_1_2_tsni(arr1, arr2)
  }
};
g_inst_0_1_2_tsni = function g_inst_0_1_2_tsni(u1u2u3, v1v2v3) {
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
        scrut = quotRem_inst_0_1_2_3_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_0_1_2_3_tsni = function quotRem_inst_0_1_2_3_tsni(a, b) {
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
    return g_inst_0_1_2_tsni(arr1, arr2)
  };
  return arr
};
quotRem_inst_4_3_tsni = function quotRem_inst_4_3_tsni(a, b) {
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
g_inst_5_2_tsni = function g_inst_5_2_tsni(u1u2u3, v1v2v3) {
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
        scrut = quotRem_inst_5_2_3_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_5_2_3_tsni = function quotRem_inst_5_2_3_tsni(a, b) {
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
    return g_inst_5_2_tsni(arr1, arr2)
  };
  return arr
};
lambda_inst_6_7_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
gcdE_inst_6_7_1_tsni = function gcdE_inst_6_7_1_tsni(x, y) {
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
    return g_inst_6_7_1_2_tsni(arr1, arr2)
  }
};
g_inst_6_7_1_2_tsni = function g_inst_6_7_1_2_tsni(u1u2u3, v1v2v3) {
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
        scrut = quotRem_inst_6_7_1_2_3_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_6_7_1_2_3_tsni = function quotRem_inst_6_7_1_2_3_tsni(a, b) {
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
    return g_inst_6_7_1_2_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_6_8_tsni = function enumFromTo_inst_6_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms, h1, t1) => {
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
        tmp3 = gcdE_inst_6_7_1_tsni(x, y);
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
      tmp2 = lscomp2$_inst_6_10_tsni(ms, h1, t1, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_6_11_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_6_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (ms, h1, t1) => {
      return lscomp1$_inst_6_10_tsni(ms, t1)
    }
  }
};
enumFromTo_inst_6_9_tsni = function enumFromTo_inst_6_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_9_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms) => {
      let param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      return lscomp2$_inst_6_10_tsni(ms, h1, t1, ms)
    }
  } else {
    return (ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
lscomp1$_inst_6_10_tsni = function lscomp1$_inst_6_10_tsni(ms, p1) {
  return runtime.safeCall(p1(ms))
};
lscomp2$_inst_6_10_tsni = function lscomp2$_inst_6_10_tsni(ms, h1, t1, p2) {
  return runtime.safeCall(p2(ms, h1, t1))
};
map_inst_6_11_tsni = function map_inst_6_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
test_inst_12_13_tsni = function test_inst_12_13_tsni(d) {
  let ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  tmp = 5000 + d;
  tmp1 = enumFromTo_inst_12_13_9_tsni(5000, tmp);
  ns = tmp1;
  tmp2 = 10000 + d;
  tmp3 = enumFromTo_inst_12_13_8_tsni(10000, tmp2);
  ms = tmp3;
  tmp4 = lambda_inst_12_13_7_tsni;
  tmp5 = lscomp1$_inst_12_13_10_tsni(ms, ns);
  tmp6 = map_inst_12_13_11_tsni(tmp4, tmp5);
  tripls = tmp6;
  tmp7 = lambda_inst_12_13_17_tsni;
  tmp8 = map_inst_12_13_16_tsni(tmp7, tripls);
  rs = tmp8;
  return gcd.max_(rs)
};
map_inst_12_13_11_tsni = function map_inst_12_13_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp1$_inst_12_13_10_tsni = function lscomp1$_inst_12_13_10_tsni(ms, p1) {
  return runtime.safeCall(p1(ms))
};
lscomp2$_inst_12_13_10_tsni = function lscomp2$_inst_12_13_10_tsni(ms, h1, t1, p2) {
  return runtime.safeCall(p2(ms, h1, t1))
};
lambda_inst_12_13_7_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
gcdE_inst_12_13_7_1_tsni = function gcdE_inst_12_13_7_1_tsni(x, y) {
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
    return g_inst_12_13_7_1_2_tsni(arr1, arr2)
  }
};
g_inst_12_13_7_1_2_tsni = function g_inst_12_13_7_1_2_tsni(u1u2u3, v1v2v3) {
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
        scrut = quotRem_inst_12_13_7_1_2_3_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_12_13_7_1_2_3_tsni = function quotRem_inst_12_13_7_1_2_3_tsni(a, b) {
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
    return g_inst_12_13_7_1_2_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_12_13_8_tsni = function enumFromTo_inst_12_13_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_12_13_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms, h1, t1) => {
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
        tmp3 = gcdE_inst_12_13_7_1_tsni(x, y);
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
      tmp2 = lscomp2$_inst_12_13_10_tsni(ms, h1, t1, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_12_13_11_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_12_13_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (ms, h1, t1) => {
      return lscomp1$_inst_12_13_10_tsni(ms, t1)
    }
  }
};
enumFromTo_inst_12_13_9_tsni = function enumFromTo_inst_12_13_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_12_13_9_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms) => {
      let param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      return lscomp2$_inst_12_13_10_tsni(ms, h1, t1, ms)
    }
  } else {
    return (ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
testGcd_nofib_inst_14_15_tsni = function testGcd_nofib_inst_14_15_tsni(x) {
  return test_inst_14_15_13_tsni(x)
};
test_inst_14_15_13_tsni = function test_inst_14_15_13_tsni(d) {
  let ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  tmp = 5000 + d;
  tmp1 = enumFromTo_inst_14_15_13_9_tsni(5000, tmp);
  ns = tmp1;
  tmp2 = 10000 + d;
  tmp3 = enumFromTo_inst_14_15_13_8_tsni(10000, tmp2);
  ms = tmp3;
  tmp4 = lambda_inst_14_15_13_7_tsni;
  tmp5 = lscomp1$_inst_14_15_13_10_tsni(ms, ns);
  tmp6 = map_inst_14_15_13_11_tsni(tmp4, tmp5);
  tripls = tmp6;
  tmp7 = lambda_inst_14_15_13_17_tsni;
  tmp8 = map_inst_14_15_13_16_tsni(tmp7, tripls);
  rs = tmp8;
  return gcd.max_(rs)
};
lambda_inst_14_15_13_7_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
gcdE_inst_14_15_13_7_1_tsni = function gcdE_inst_14_15_13_7_1_tsni(x, y) {
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
    return g_inst_14_15_13_7_1_2_tsni(arr1, arr2)
  }
};
g_inst_14_15_13_7_1_2_tsni = function g_inst_14_15_13_7_1_2_tsni(u1u2u3, v1v2v3) {
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
        scrut = quotRem_inst_14_15_13_7_1_2_3_tsni(u3, v3);
        return runtime.safeCall(scrut(u1, u2, v1, v2, v3))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
quotRem_inst_14_15_13_7_1_2_3_tsni = function quotRem_inst_14_15_13_7_1_2_3_tsni(a, b) {
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
    return g_inst_14_15_13_7_1_2_tsni(arr1, arr2)
  };
  return arr
};
enumFromTo_inst_14_15_13_8_tsni = function enumFromTo_inst_14_15_13_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_14_15_13_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms, h1, t1) => {
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
        tmp3 = gcdE_inst_14_15_13_7_1_tsni(x, y);
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
      tmp2 = lscomp2$_inst_14_15_13_10_tsni(ms, h1, t1, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f) => {
        let param01, param11, x, xs, tmp3, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_14_15_13_11_tsni(f, xs);
        _deforest_Cons_head2 = tmp3;
        _deforest_Cons_tail2 = tmp4;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_14_15_13_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
      }
    }
  } else {
    return (ms, h1, t1) => {
      return lscomp1$_inst_14_15_13_10_tsni(ms, t1)
    }
  }
};
enumFromTo_inst_14_15_13_9_tsni = function enumFromTo_inst_14_15_13_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_14_15_13_9_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ms) => {
      let param0, param1, h1, t1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      return lscomp2$_inst_14_15_13_10_tsni(ms, h1, t1, ms)
    }
  } else {
    return (ms) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
lscomp1$_inst_14_15_13_10_tsni = function lscomp1$_inst_14_15_13_10_tsni(ms, p1) {
  return runtime.safeCall(p1(ms))
};
lscomp2$_inst_14_15_13_10_tsni = function lscomp2$_inst_14_15_13_10_tsni(ms, h1, t1, p2) {
  return runtime.safeCall(p2(ms, h1, t1))
};
map_inst_14_15_13_11_tsni = function map_inst_14_15_13_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_6_16_tsni = function map_inst_6_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_6_17_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
map_inst_12_13_16_tsni = function map_inst_12_13_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_12_13_17_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
map_inst_14_15_13_16_tsni = function map_inst_14_15_13_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_14_15_13_17_tsni = (undefined, function (caseScrut) {
  return runtime.safeCall(caseScrut())
});
lscomp2$ = function lscomp2$(ms, h1, t1, p2) {
  let param0, param1, h2, t2, arr, tmp;
  if (p2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$(ms, t1)
  } else if (p2 instanceof NofibPrelude.Cons.class) {
    param0 = p2.head;
    param1 = p2.tail;
    h2 = param0;
    t2 = param1;
    arr = [
      h1,
      h2
    ];
    tmp = lscomp2$(ms, h1, t1, t2);
    return NofibPrelude.Cons(arr, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2 = function lscomp2(ms, h1, t1) {
  return (p2) => {
    return lscomp2$(ms, h1, t1, p2)
  }
};
lscomp1$ = function lscomp1$(ms, p1) {
  let param0, param1, h1, t1;
  if (p1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (p1 instanceof NofibPrelude.Cons.class) {
    param0 = p1.head;
    param1 = p1.tail;
    h1 = param0;
    t1 = param1;
    return lscomp2$(ms, h1, t1, ms)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1 = function lscomp1(ms) {
  return (p1) => {
    return lscomp1$(ms, p1)
  }
};
lambda = (undefined, function (caseScrut) {
  let first1, first0, x, y, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    x = first0;
    y = first1;
    tmp = gcdE_inst_0_1_tsni(x, y);
    arr = [
      x,
      y,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
lambda1 = (undefined, function (caseScrut) {
  let first2, first1, first0, d1, d2, first21, first11, first01, gg, u, v, tmp, tmp1;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 3) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    first2 = caseScrut[2];
    d1 = first0;
    d2 = first1;
    if (globalThis.Array.isArray(first2) && first2.length === 3) {
      first01 = first2[0];
      first11 = first2[1];
      first21 = first2[2];
      gg = first01;
      u = first11;
      v = first21;
      tmp = gg + u;
      tmp1 = tmp + v;
      return NofibPrelude.abs(tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
});
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
          scrut = quotRem_inst_4_3_tsni(u3, v3);
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
      return g_inst_5_2_tsni(arr1, arr2)
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
    let ns, ms, tripls, rs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = 5000 + d;
    tmp1 = enumFromTo_inst_6_9_tsni(5000, tmp);
    ns = tmp1;
    tmp2 = 10000 + d;
    tmp3 = enumFromTo_inst_6_8_tsni(10000, tmp2);
    ms = tmp3;
    tmp4 = lambda_inst_6_7_tsni;
    tmp5 = lscomp1$_inst_6_10_tsni(ms, ns);
    tmp6 = map_inst_6_11_tsni(tmp4, tmp5);
    tripls = tmp6;
    tmp7 = lambda_inst_6_17_tsni;
    tmp8 = map_inst_6_16_tsni(tmp7, tripls);
    rs = tmp8;
    return gcd.max_(rs)
  } 
  static testGcd_nofib(x1) {
    return test_inst_12_13_tsni(x1)
  } 
  static main() {
    return testGcd_nofib_inst_14_15_tsni(40)
  }
  static toString() { return "gcd"; }
});
let gcd = gcd1; export default gcd;
