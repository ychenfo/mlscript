import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let infiniteMandel, walkIt, lscomp2, windowToViewport, lscomp1, prettyRGB, mandel1, lambda, lambda1, lambda2, infiniteMandel$, lambda$, lambda$1, walkIt$, lambda$2, lscomp1$, lscomp2$, windowToViewport$, prettyRGB$, lscomp2$_inst_0_tsni, enumFromTo_inst_0_1_tsni, lscomp1$_inst_2_3_tsni, lscomp2$_inst_2_3_tsni, enumFromTo_inst_2_3_1_tsni, whenDiverge_inst_4_5_tsni, mandel_inst_4_5_6_tsni, infiniteMandel$_inst_4_5_6_7_tsni, lambda_inst_4_5_6_7_tsni, lambda$_inst_4_5_6_7_tsni, lambda_inst_4_5_6_7_8_tsni, lambda$_inst_4_5_6_7_8_9_tsni, comp_times_inst_4_5_6_7_8_9_10_tsni, lambda$_inst_11_12_tsni, whenDiverge_inst_11_12_5_tsni, mandel_inst_11_12_5_6_tsni, infiniteMandel$_inst_11_12_5_6_7_tsni, lambda_inst_11_12_5_6_7_tsni, lambda$_inst_11_12_5_6_7_tsni, lambda_inst_11_12_5_6_7_8_tsni, lambda$_inst_11_12_5_6_7_8_9_tsni, comp_times_inst_11_12_5_6_7_8_9_10_tsni, comp_times_inst_13_10_tsni, lambda$_inst_14_9_tsni, comp_times_inst_14_9_10_tsni, infiniteMandel$_inst_15_tsni, lambda_inst_15_tsni, lambda_inst_15_8_tsni, lambda$_inst_15_8_9_tsni, comp_times_inst_15_8_9_10_tsni, infiniteMandel$_inst_16_tsni, lambda$_inst_16_tsni, lambda_inst_16_8_tsni, lambda$_inst_16_8_9_tsni, comp_times_inst_16_8_9_10_tsni, lambda_inst_17_tsni, lambda$_inst_17_tsni, lambda_inst_17_8_tsni, lambda$_inst_17_8_9_tsni, comp_times_inst_17_8_9_10_tsni, infiniteMandel$_inst_18_19_tsni, lambda_inst_18_19_tsni, lambda$_inst_18_19_tsni, lambda_inst_18_19_8_tsni, lambda$_inst_18_19_8_9_tsni, comp_times_inst_18_19_8_9_10_tsni, infiniteMandel$_inst_20_7_tsni, lambda_inst_20_7_tsni, lambda$_inst_20_7_tsni, lambda_inst_20_7_8_tsni, lambda$_inst_20_7_8_9_tsni, comp_times_inst_20_7_8_9_10_tsni, mandel_inst_21_6_tsni, infiniteMandel$_inst_21_6_7_tsni, lambda_inst_21_6_7_tsni, lambda$_inst_21_6_7_tsni, lambda_inst_21_6_7_8_tsni, lambda$_inst_21_6_7_8_9_tsni, comp_times_inst_21_6_7_8_9_10_tsni, lambda_inst_22_23_tsni, lambda$_inst_22_23_12_tsni, whenDiverge_inst_22_23_12_5_tsni, mandel_inst_22_23_12_5_6_tsni, infiniteMandel$_inst_22_23_12_5_6_7_tsni, lambda_inst_22_23_12_5_6_7_tsni, lambda$_inst_22_23_12_5_6_7_tsni, lambda_inst_22_23_12_5_6_7_8_tsni, lambda$_inst_22_23_12_5_6_7_8_9_tsni, comp_times_inst_22_23_12_5_6_7_8_9_10_tsni, lscomp1$_inst_24_25_tsni, lscomp2$_inst_24_25_tsni, enumFromTo_inst_24_25_1_tsni, enumFromTo_inst_24_26_tsni, parallelMandel_inst_24_27_tsni, lambda_inst_24_27_23_tsni, lambda$_inst_24_27_23_12_tsni, whenDiverge_inst_24_27_23_12_5_tsni, mandel_inst_24_27_23_12_5_6_tsni, infiniteMandel$_inst_24_27_23_12_5_6_7_tsni, lambda_inst_24_27_23_12_5_6_7_tsni, lambda$_inst_24_27_23_12_5_6_7_tsni, lambda_inst_24_27_23_12_5_6_7_8_tsni, lambda$_inst_24_27_23_12_5_6_7_8_9_tsni, comp_times_inst_24_27_23_12_5_6_7_8_9_10_tsni, map_inst_24_27_28_tsni, mandelset_inst_29_30_tsni, parallelMandel_inst_29_30_27_tsni, lambda_inst_29_30_27_23_tsni, lambda$_inst_29_30_27_23_12_tsni, whenDiverge_inst_29_30_27_23_12_5_tsni, mandel_inst_29_30_27_23_12_5_6_tsni, infiniteMandel$_inst_29_30_27_23_12_5_6_7_tsni, lambda_inst_29_30_27_23_12_5_6_7_tsni, lambda$_inst_29_30_27_23_12_5_6_7_tsni, lambda_inst_29_30_27_23_12_5_6_7_8_tsni, lambda$_inst_29_30_27_23_12_5_6_7_8_9_tsni, comp_times_inst_29_30_27_23_12_5_6_7_8_9_10_tsni, map_inst_29_30_27_28_tsni, lscomp1$_inst_29_30_25_tsni, lscomp2$_inst_29_30_25_tsni, enumFromTo_inst_29_30_25_1_tsni, enumFromTo_inst_29_30_26_tsni, testMandel_nofib_inst_31_32_tsni, mandelset_inst_31_32_30_tsni, lscomp1$_inst_31_32_30_25_tsni, lscomp2$_inst_31_32_30_25_tsni, enumFromTo_inst_31_32_30_25_1_tsni, enumFromTo_inst_31_32_30_26_tsni, parallelMandel_inst_31_32_30_27_tsni, lambda_inst_31_32_30_27_23_tsni, lambda$_inst_31_32_30_27_23_12_tsni, whenDiverge_inst_31_32_30_27_23_12_5_tsni, mandel_inst_31_32_30_27_23_12_5_6_tsni, infiniteMandel$_inst_31_32_30_27_23_12_5_6_7_tsni, lambda_inst_31_32_30_27_23_12_5_6_7_tsni, lambda$_inst_31_32_30_27_23_12_5_6_7_tsni, lambda_inst_31_32_30_27_23_12_5_6_7_8_tsni, lambda$_inst_31_32_30_27_23_12_5_6_7_8_9_tsni, comp_times_inst_31_32_30_27_23_12_5_6_7_8_9_10_tsni, map_inst_31_32_30_27_28_tsni, comp_plus_inst_4_5_6_7_8_9_33_tsni, comp_plus_inst_11_12_5_6_7_8_9_33_tsni, comp_plus_inst_13_33_tsni, comp_plus_inst_14_9_33_tsni, comp_plus_inst_15_8_9_33_tsni, comp_plus_inst_16_8_9_33_tsni, comp_plus_inst_17_8_9_33_tsni, comp_plus_inst_18_19_8_9_33_tsni, comp_plus_inst_20_7_8_9_33_tsni, comp_plus_inst_21_6_7_8_9_33_tsni, comp_plus_inst_22_23_12_5_6_7_8_9_33_tsni, comp_plus_inst_24_27_23_12_5_6_7_8_9_33_tsni, map_inst_24_34_tsni, comp_plus_inst_29_30_27_23_12_5_6_7_8_9_33_tsni, map_inst_29_30_34_tsni, comp_plus_inst_31_32_30_27_23_12_5_6_7_8_9_33_tsni, map_inst_31_32_30_34_tsni;
lscomp2$_inst_0_tsni = function lscomp2$_inst_0_tsni(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return runtime.safeCall(ls2(x, y, x_, y_, screenX, screenY, t, t1))
};
enumFromTo_inst_0_1_tsni = function enumFromTo_inst_0_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
      tmp3 = lscomp2$_inst_0_tsni(x, y, x_, y_, screenX, screenY, t, t1, t2);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      return lscomp1$(x, y, x_, y_, screenX, screenY, t1)
    }
  }
};
lscomp1$_inst_2_3_tsni = function lscomp1$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, ls1) {
  let param0, param1, t, t1, tmp;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    t = param0;
    t1 = param1;
    tmp = enumFromTo_inst_2_3_1_tsni(1, screenX);
    return lscomp2$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, t, t1, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_2_3_tsni = function lscomp2$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return runtime.safeCall(ls2(x, y, x_, y_, screenX, screenY, t, t1))
};
enumFromTo_inst_2_3_1_tsni = function enumFromTo_inst_2_3_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_2_3_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
      tmp3 = lscomp2$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, t, t1, t2);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      return lscomp1$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, t1)
    }
  }
};
whenDiverge_inst_4_5_tsni = function whenDiverge_inst_4_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_4_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_4_5_6_tsni = function mandel_inst_4_5_6_tsni(c) {
  return infiniteMandel$_inst_4_5_6_7_tsni(c)
};
infiniteMandel$_inst_4_5_6_7_tsni = function infiniteMandel$_inst_4_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_4_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_4_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_4_5_6_7_tsni(c)
  }
});
lambda$_inst_4_5_6_7_tsni = function lambda$_inst_4_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_4_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_4_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_4_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_4_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_4_5_6_7_8_9_tsni = function lambda$_inst_4_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_4_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_4_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_4_5_6_7_8_9_10_tsni = function comp_times_inst_4_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_11_12_tsni = function lambda$_inst_11_12_tsni(limit, radius, c) {
  return whenDiverge_inst_11_12_5_tsni(limit, radius, c)
};
whenDiverge_inst_11_12_5_tsni = function whenDiverge_inst_11_12_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_11_12_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_11_12_5_6_tsni = function mandel_inst_11_12_5_6_tsni(c) {
  return infiniteMandel$_inst_11_12_5_6_7_tsni(c)
};
infiniteMandel$_inst_11_12_5_6_7_tsni = function infiniteMandel$_inst_11_12_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_12_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_12_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_11_12_5_6_7_tsni(c)
  }
});
lambda$_inst_11_12_5_6_7_tsni = function lambda$_inst_11_12_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_11_12_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_11_12_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_11_12_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_11_12_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_11_12_5_6_7_8_9_tsni = function lambda$_inst_11_12_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_11_12_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_11_12_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_11_12_5_6_7_8_9_10_tsni = function comp_times_inst_11_12_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
comp_times_inst_13_10_tsni = function comp_times_inst_13_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_14_9_tsni = function lambda$_inst_14_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_14_9_10_tsni(z, z);
  return comp_plus_inst_14_9_33_tsni(tmp, c)
};
comp_times_inst_14_9_10_tsni = function comp_times_inst_14_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
infiniteMandel$_inst_15_tsni = function infiniteMandel$_inst_15_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_tsni = (undefined, function (c) {
  return () => {
    return lambda$(c)
  }
});
lambda_inst_15_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_15_8_9_tsni(c, z)
  }
});
lambda$_inst_15_8_9_tsni = function lambda$_inst_15_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_15_8_9_10_tsni(z, z);
  return comp_plus_inst_15_8_9_33_tsni(tmp, c)
};
comp_times_inst_15_8_9_10_tsni = function comp_times_inst_15_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
infiniteMandel$_inst_16_tsni = function infiniteMandel$_inst_16_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda(c));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_16_tsni = function lambda$_inst_16_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_16_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_16_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_16_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_16_8_9_tsni(c, z)
  }
});
lambda$_inst_16_8_9_tsni = function lambda$_inst_16_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_16_8_9_10_tsni(z, z);
  return comp_plus_inst_16_8_9_33_tsni(tmp, c)
};
comp_times_inst_16_8_9_10_tsni = function comp_times_inst_16_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_17_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_17_tsni(c)
  }
});
lambda$_inst_17_tsni = function lambda$_inst_17_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$(c);
  lambda$this = runtime.safeCall(lambda_inst_17_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_17_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_17_8_9_tsni(c, z)
  }
});
lambda$_inst_17_8_9_tsni = function lambda$_inst_17_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_17_8_9_10_tsni(z, z);
  return comp_plus_inst_17_8_9_33_tsni(tmp, c)
};
comp_times_inst_17_8_9_10_tsni = function comp_times_inst_17_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
infiniteMandel$_inst_18_19_tsni = function infiniteMandel$_inst_18_19_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_19_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_19_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_18_19_tsni(c)
  }
});
lambda$_inst_18_19_tsni = function lambda$_inst_18_19_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_18_19_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_18_19_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_18_19_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_18_19_8_9_tsni(c, z)
  }
});
lambda$_inst_18_19_8_9_tsni = function lambda$_inst_18_19_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_18_19_8_9_10_tsni(z, z);
  return comp_plus_inst_18_19_8_9_33_tsni(tmp, c)
};
comp_times_inst_18_19_8_9_10_tsni = function comp_times_inst_18_19_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
infiniteMandel$_inst_20_7_tsni = function infiniteMandel$_inst_20_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_20_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_20_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_20_7_tsni(c)
  }
});
lambda$_inst_20_7_tsni = function lambda$_inst_20_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_20_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_20_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_20_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_20_7_8_9_tsni(c, z)
  }
});
lambda$_inst_20_7_8_9_tsni = function lambda$_inst_20_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_20_7_8_9_10_tsni(z, z);
  return comp_plus_inst_20_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_20_7_8_9_10_tsni = function comp_times_inst_20_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mandel_inst_21_6_tsni = function mandel_inst_21_6_tsni(c) {
  return infiniteMandel$_inst_21_6_7_tsni(c)
};
infiniteMandel$_inst_21_6_7_tsni = function infiniteMandel$_inst_21_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_21_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_21_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_21_6_7_tsni(c)
  }
});
lambda$_inst_21_6_7_tsni = function lambda$_inst_21_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_21_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_21_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_21_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_21_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_21_6_7_8_9_tsni = function lambda$_inst_21_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_21_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_21_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_21_6_7_8_9_10_tsni = function comp_times_inst_21_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_22_23_tsni = (undefined, function (limit, radius) {
  return (c) => {
    return lambda$_inst_22_23_12_tsni(limit, radius, c)
  }
});
lambda$_inst_22_23_12_tsni = function lambda$_inst_22_23_12_tsni(limit, radius, c) {
  return whenDiverge_inst_22_23_12_5_tsni(limit, radius, c)
};
whenDiverge_inst_22_23_12_5_tsni = function whenDiverge_inst_22_23_12_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_22_23_12_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_22_23_12_5_6_tsni = function mandel_inst_22_23_12_5_6_tsni(c) {
  return infiniteMandel$_inst_22_23_12_5_6_7_tsni(c)
};
infiniteMandel$_inst_22_23_12_5_6_7_tsni = function infiniteMandel$_inst_22_23_12_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_22_23_12_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_22_23_12_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_22_23_12_5_6_7_tsni(c)
  }
});
lambda$_inst_22_23_12_5_6_7_tsni = function lambda$_inst_22_23_12_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_22_23_12_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_22_23_12_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_22_23_12_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_22_23_12_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_22_23_12_5_6_7_8_9_tsni = function lambda$_inst_22_23_12_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_22_23_12_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_22_23_12_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_22_23_12_5_6_7_8_9_10_tsni = function comp_times_inst_22_23_12_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1$_inst_24_25_tsni = function lscomp1$_inst_24_25_tsni(x, y, x_, y_, screenX, screenY, ls1) {
  return runtime.safeCall(ls1(x, y, x_, y_, screenX, screenY))
};
lscomp2$_inst_24_25_tsni = function lscomp2$_inst_24_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return runtime.safeCall(ls2(x, y, x_, y_, screenX, screenY, t, t1))
};
enumFromTo_inst_24_25_1_tsni = function enumFromTo_inst_24_25_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_24_25_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
      tmp3 = lscomp2$_inst_24_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x1, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x1));
        tmp5 = map_inst_24_27_28_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x1));
          tmp5 = map_inst_24_34_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      return lscomp1$_inst_24_25_tsni(x, y, x_, y_, screenX, screenY, t1)
    }
  }
};
enumFromTo_inst_24_26_tsni = function enumFromTo_inst_24_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_24_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY) => {
      let param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_24_25_1_tsni(1, screenX);
      return lscomp2$_inst_24_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, tmp2)
    }
  } else {
    return (x, y, x_, y_, screenX, screenY) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
parallelMandel_inst_24_27_tsni = function parallelMandel_inst_24_27_tsni(mat, limit, radius) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_24_27_23_tsni(limit, radius));
  return map_inst_24_27_28_tsni(lambda$this, mat)
};
lambda_inst_24_27_23_tsni = (undefined, function (limit, radius) {
  return (c) => {
    return lambda$_inst_24_27_23_12_tsni(limit, radius, c)
  }
});
lambda$_inst_24_27_23_12_tsni = function lambda$_inst_24_27_23_12_tsni(limit, radius, c) {
  return whenDiverge_inst_24_27_23_12_5_tsni(limit, radius, c)
};
whenDiverge_inst_24_27_23_12_5_tsni = function whenDiverge_inst_24_27_23_12_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_24_27_23_12_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_24_27_23_12_5_6_tsni = function mandel_inst_24_27_23_12_5_6_tsni(c) {
  return infiniteMandel$_inst_24_27_23_12_5_6_7_tsni(c)
};
infiniteMandel$_inst_24_27_23_12_5_6_7_tsni = function infiniteMandel$_inst_24_27_23_12_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_24_27_23_12_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_24_27_23_12_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_24_27_23_12_5_6_7_tsni(c)
  }
});
lambda$_inst_24_27_23_12_5_6_7_tsni = function lambda$_inst_24_27_23_12_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_24_27_23_12_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_24_27_23_12_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_24_27_23_12_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_24_27_23_12_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_24_27_23_12_5_6_7_8_9_tsni = function lambda$_inst_24_27_23_12_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_24_27_23_12_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_24_27_23_12_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_24_27_23_12_5_6_7_8_9_10_tsni = function comp_times_inst_24_27_23_12_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_24_27_28_tsni = function map_inst_24_27_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mandelset_inst_29_30_tsni = function mandelset_inst_29_30_tsni(x, y, x_, y_, screenX, screenY, lIMIT) {
  let result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, prettyRGB$this;
  tmp = enumFromTo_inst_29_30_26_tsni(1, screenY);
  tmp1 = lscomp1$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, tmp);
  tmp2 = x_ - x;
  tmp3 = y_ - y;
  tmp4 = NofibPrelude.max(tmp2, tmp3);
  tmp5 = tmp4 / 2;
  tmp6 = parallelMandel_inst_29_30_27_tsni(tmp1, lIMIT, tmp5);
  result = tmp6;
  prettyRGB$this = runtime.safeCall(prettyRGB(lIMIT));
  tmp7 = map_inst_29_30_34_tsni(prettyRGB$this, result);
  return mandel.createPixmap(screenX, screenY, lIMIT, tmp7)
};
parallelMandel_inst_29_30_27_tsni = function parallelMandel_inst_29_30_27_tsni(mat, limit, radius) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_29_30_27_23_tsni(limit, radius));
  return map_inst_29_30_27_28_tsni(lambda$this, mat)
};
lambda_inst_29_30_27_23_tsni = (undefined, function (limit, radius) {
  return (c) => {
    return lambda$_inst_29_30_27_23_12_tsni(limit, radius, c)
  }
});
lambda$_inst_29_30_27_23_12_tsni = function lambda$_inst_29_30_27_23_12_tsni(limit, radius, c) {
  return whenDiverge_inst_29_30_27_23_12_5_tsni(limit, radius, c)
};
whenDiverge_inst_29_30_27_23_12_5_tsni = function whenDiverge_inst_29_30_27_23_12_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_29_30_27_23_12_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_29_30_27_23_12_5_6_tsni = function mandel_inst_29_30_27_23_12_5_6_tsni(c) {
  return infiniteMandel$_inst_29_30_27_23_12_5_6_7_tsni(c)
};
infiniteMandel$_inst_29_30_27_23_12_5_6_7_tsni = function infiniteMandel$_inst_29_30_27_23_12_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_29_30_27_23_12_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_29_30_27_23_12_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_29_30_27_23_12_5_6_7_tsni(c)
  }
});
lambda$_inst_29_30_27_23_12_5_6_7_tsni = function lambda$_inst_29_30_27_23_12_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_29_30_27_23_12_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_29_30_27_23_12_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_29_30_27_23_12_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_29_30_27_23_12_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_29_30_27_23_12_5_6_7_8_9_tsni = function lambda$_inst_29_30_27_23_12_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_29_30_27_23_12_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_29_30_27_23_12_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_29_30_27_23_12_5_6_7_8_9_10_tsni = function comp_times_inst_29_30_27_23_12_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_29_30_27_28_tsni = function map_inst_29_30_27_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp1$_inst_29_30_25_tsni = function lscomp1$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, ls1) {
  return runtime.safeCall(ls1(x, y, x_, y_, screenX, screenY))
};
lscomp2$_inst_29_30_25_tsni = function lscomp2$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return runtime.safeCall(ls2(x, y, x_, y_, screenX, screenY, t, t1))
};
enumFromTo_inst_29_30_25_1_tsni = function enumFromTo_inst_29_30_25_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_29_30_25_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
      tmp3 = lscomp2$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x1, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x1));
        tmp5 = map_inst_29_30_27_28_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x1));
          tmp5 = map_inst_29_30_34_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      return lscomp1$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, t1)
    }
  }
};
enumFromTo_inst_29_30_26_tsni = function enumFromTo_inst_29_30_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_29_30_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY) => {
      let param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_29_30_25_1_tsni(1, screenX);
      return lscomp2$_inst_29_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, tmp2)
    }
  } else {
    return (x, y, x_, y_, screenX, screenY) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
testMandel_nofib_inst_31_32_tsni = function testMandel_nofib_inst_31_32_tsni(dummy) {
  let minx, miny, maxx, maxy, screenX, screenY, limit, tmp, tmp1;
  tmp = - 2.0;
  minx = tmp;
  tmp1 = - 2.0;
  miny = tmp1;
  maxx = 2.0;
  maxy = 2.0;
  screenX = 25;
  screenY = 25;
  limit = 75;
  return mandelset_inst_31_32_30_tsni(minx, miny, maxx, maxy, screenX, screenY, limit)
};
mandelset_inst_31_32_30_tsni = function mandelset_inst_31_32_30_tsni(x, y, x_, y_, screenX, screenY, lIMIT) {
  let result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, prettyRGB$this;
  tmp = enumFromTo_inst_31_32_30_26_tsni(1, screenY);
  tmp1 = lscomp1$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, tmp);
  tmp2 = x_ - x;
  tmp3 = y_ - y;
  tmp4 = NofibPrelude.max(tmp2, tmp3);
  tmp5 = tmp4 / 2;
  tmp6 = parallelMandel_inst_31_32_30_27_tsni(tmp1, lIMIT, tmp5);
  result = tmp6;
  prettyRGB$this = runtime.safeCall(prettyRGB(lIMIT));
  tmp7 = map_inst_31_32_30_34_tsni(prettyRGB$this, result);
  return mandel.createPixmap(screenX, screenY, lIMIT, tmp7)
};
lscomp1$_inst_31_32_30_25_tsni = function lscomp1$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, ls1) {
  return runtime.safeCall(ls1(x, y, x_, y_, screenX, screenY))
};
lscomp2$_inst_31_32_30_25_tsni = function lscomp2$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return runtime.safeCall(ls2(x, y, x_, y_, screenX, screenY, t, t1))
};
enumFromTo_inst_31_32_30_25_1_tsni = function enumFromTo_inst_31_32_30_25_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_31_32_30_25_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
      tmp3 = lscomp2$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x1, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x1));
        tmp5 = map_inst_31_32_30_27_28_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x1 = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x1));
          tmp5 = map_inst_31_32_30_34_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (x, y, x_, y_, screenX, screenY, t, t1) => {
      return lscomp1$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, t1)
    }
  }
};
enumFromTo_inst_31_32_30_26_tsni = function enumFromTo_inst_31_32_30_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_31_32_30_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (x, y, x_, y_, screenX, screenY) => {
      let param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_31_32_30_25_1_tsni(1, screenX);
      return lscomp2$_inst_31_32_30_25_tsni(x, y, x_, y_, screenX, screenY, t, t1, tmp2)
    }
  } else {
    return (x, y, x_, y_, screenX, screenY) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
parallelMandel_inst_31_32_30_27_tsni = function parallelMandel_inst_31_32_30_27_tsni(mat, limit, radius) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_31_32_30_27_23_tsni(limit, radius));
  return map_inst_31_32_30_27_28_tsni(lambda$this, mat)
};
lambda_inst_31_32_30_27_23_tsni = (undefined, function (limit, radius) {
  return (c) => {
    return lambda$_inst_31_32_30_27_23_12_tsni(limit, radius, c)
  }
});
lambda$_inst_31_32_30_27_23_12_tsni = function lambda$_inst_31_32_30_27_23_12_tsni(limit, radius, c) {
  return whenDiverge_inst_31_32_30_27_23_12_5_tsni(limit, radius, c)
};
whenDiverge_inst_31_32_30_27_23_12_5_tsni = function whenDiverge_inst_31_32_30_27_23_12_5_tsni(limit, radius, c) {
  let tmp, tmp1;
  tmp = mandel_inst_31_32_30_27_23_12_5_6_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt$(radius, tmp1)
};
mandel_inst_31_32_30_27_23_12_5_6_tsni = function mandel_inst_31_32_30_27_23_12_5_6_tsni(c) {
  return infiniteMandel$_inst_31_32_30_27_23_12_5_6_7_tsni(c)
};
infiniteMandel$_inst_31_32_30_27_23_12_5_6_7_tsni = function infiniteMandel$_inst_31_32_30_27_23_12_5_6_7_tsni(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_31_32_30_27_23_12_5_6_7_tsni(c));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_31_32_30_27_23_12_5_6_7_tsni = (undefined, function (c) {
  return () => {
    return lambda$_inst_31_32_30_27_23_12_5_6_7_tsni(c)
  }
});
lambda$_inst_31_32_30_27_23_12_5_6_7_tsni = function lambda$_inst_31_32_30_27_23_12_5_6_7_tsni(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_31_32_30_27_23_12_5_6_7_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_31_32_30_27_23_12_5_6_7_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda_inst_31_32_30_27_23_12_5_6_7_8_tsni = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_31_32_30_27_23_12_5_6_7_8_9_tsni(c, z)
  }
});
lambda$_inst_31_32_30_27_23_12_5_6_7_8_9_tsni = function lambda$_inst_31_32_30_27_23_12_5_6_7_8_9_tsni(c, z) {
  let tmp;
  tmp = comp_times_inst_31_32_30_27_23_12_5_6_7_8_9_10_tsni(z, z);
  return comp_plus_inst_31_32_30_27_23_12_5_6_7_8_9_33_tsni(tmp, c)
};
comp_times_inst_31_32_30_27_23_12_5_6_7_8_9_10_tsni = function comp_times_inst_31_32_30_27_23_12_5_6_7_8_9_10_tsni(x, y) {
  let param0, param1, a, b, param01, param11, c, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, _deforest_Complex_r, _deforest_Complex_i;
  if (x instanceof mandel.Complex.class) {
    param0 = x.r;
    param1 = x.i;
    a = param0;
    b = param1;
    if (y instanceof mandel.Complex.class) {
      param01 = y.r;
      param11 = y.i;
      c = param01;
      d = param11;
      tmp = a * c;
      tmp1 = b * d;
      tmp2 = tmp - tmp1;
      tmp3 = a * d;
      tmp4 = b * c;
      tmp5 = tmp3 + tmp4;
      _deforest_Complex_r = tmp2;
      _deforest_Complex_i = tmp5;
      return (y1) => {
        let param02, param12, a1, b1, param03, param13, c1, d1, tmp6, tmp7;
        param02 = _deforest_Complex_r;
        param12 = _deforest_Complex_i;
        a1 = param02;
        b1 = param12;
        if (y1 instanceof mandel.Complex.class) {
          param03 = y1.r;
          param13 = y1.i;
          c1 = param03;
          d1 = param13;
          tmp6 = a1 + c1;
          tmp7 = b1 + d1;
          return mandel.Complex(tmp6, tmp7)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_31_32_30_27_28_tsni = function map_inst_31_32_30_27_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_4_5_6_7_8_9_33_tsni = function comp_plus_inst_4_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_11_12_5_6_7_8_9_33_tsni = function comp_plus_inst_11_12_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_13_33_tsni = function comp_plus_inst_13_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_14_9_33_tsni = function comp_plus_inst_14_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_15_8_9_33_tsni = function comp_plus_inst_15_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_16_8_9_33_tsni = function comp_plus_inst_16_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_17_8_9_33_tsni = function comp_plus_inst_17_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_18_19_8_9_33_tsni = function comp_plus_inst_18_19_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_20_7_8_9_33_tsni = function comp_plus_inst_20_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_21_6_7_8_9_33_tsni = function comp_plus_inst_21_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_22_23_12_5_6_7_8_9_33_tsni = function comp_plus_inst_22_23_12_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_24_27_23_12_5_6_7_8_9_33_tsni = function comp_plus_inst_24_27_23_12_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_24_34_tsni = function map_inst_24_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_29_30_27_23_12_5_6_7_8_9_33_tsni = function comp_plus_inst_29_30_27_23_12_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_29_30_34_tsni = function map_inst_29_30_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_31_32_30_27_23_12_5_6_7_8_9_33_tsni = function comp_plus_inst_31_32_30_27_23_12_5_6_7_8_9_33_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_31_32_30_34_tsni = function map_inst_31_32_30_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prettyRGB$ = function prettyRGB$(lIMIT, s) {
  let t, tmp, arr;
  tmp = lIMIT - s;
  t = tmp;
  arr = [
    s,
    t,
    t
  ];
  return arr
};
prettyRGB = function prettyRGB(lIMIT) {
  return (s) => {
    return prettyRGB$(lIMIT, s)
  }
};
windowToViewport$ = function windowToViewport$(x, y, x_, y_, screenX, screenY, s, t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = x_ - x;
  tmp1 = s * tmp;
  tmp2 = tmp1 / screenX;
  tmp3 = x + tmp2;
  tmp4 = y_ - y;
  tmp5 = t * tmp4;
  tmp6 = tmp5 / screenY;
  tmp7 = y + tmp6;
  return mandel1.Complex(tmp3, tmp7)
};
windowToViewport = function windowToViewport(x, y, x_, y_, screenX, screenY) {
  return (s, t) => {
    return windowToViewport$(x, y, x_, y_, screenX, screenY, s, t)
  }
};
lscomp2$ = function lscomp2$(x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  let param0, param1, s, t2, tmp, tmp1;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$(x, y, x_, y_, screenX, screenY, t1)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    s = param0;
    t2 = param1;
    tmp = windowToViewport$(x, y, x_, y_, screenX, screenY, s, t);
    tmp1 = lscomp2$(x, y, x_, y_, screenX, screenY, t, t1, t2);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2 = function lscomp2(x, y, x_, y_, screenX, screenY, t, t1) {
  return (ls2) => {
    return lscomp2$(x, y, x_, y_, screenX, screenY, t, t1, ls2)
  }
};
lscomp1$ = function lscomp1$(x, y, x_, y_, screenX, screenY, ls1) {
  let param0, param1, t, t1, tmp;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    t = param0;
    t1 = param1;
    tmp = enumFromTo_inst_0_1_tsni(1, screenX);
    return lscomp2$_inst_0_tsni(x, y, x_, y_, screenX, screenY, t, t1, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1 = function lscomp1(x, y, x_, y_, screenX, screenY) {
  return (ls1) => {
    return lscomp1$_inst_2_3_tsni(x, y, x_, y_, screenX, screenY, ls1)
  }
};
lambda$2 = function lambda$(limit, radius, c) {
  return whenDiverge_inst_4_5_tsni(limit, radius, c)
};
lambda2 = (undefined, function (limit, radius) {
  return (c) => {
    return lambda$_inst_11_12_tsni(limit, radius, c)
  }
});
walkIt$ = function walkIt$(radius, ls) {
  let scrut, param0, param1, x, xs, scrut1, tmp;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return 0
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    scrut1 = mandel1.diverge(x, radius);
    if (scrut1 === true) {
      return 0
    } else {
      tmp = walkIt$(radius, xs);
      return 1 + tmp
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
walkIt = function walkIt(radius) {
  return (ls) => {
    return walkIt$(radius, ls)
  }
};
lambda$1 = function lambda$(c, z) {
  let tmp;
  tmp = comp_times_inst_13_10_tsni(z, z);
  return comp_plus_inst_13_33_tsni(tmp, c)
};
lambda1 = (undefined, function (c) {
  return (z) => {
    return lambda$_inst_14_9_tsni(c, z)
  }
});
lambda$ = function lambda$(c) {
  let tmp, tmp1, lambda$this;
  tmp = infiniteMandel$_inst_15_tsni(c);
  lambda$this = runtime.safeCall(lambda_inst_15_8_tsni(c));
  tmp1 = NofibPrelude.map_lz(lambda$this, tmp);
  return NofibPrelude.LzCons(c, tmp1)
};
lambda = (undefined, function (c) {
  return () => {
    return lambda$_inst_16_tsni(c)
  }
});
infiniteMandel$ = function infiniteMandel$(c) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_tsni(c));
  return NofibPrelude.lazy(tmp)
};
infiniteMandel = function infiniteMandel(c) {
  return () => {
    return infiniteMandel$_inst_18_19_tsni(c)
  }
};
(class mandel {
  static {
    mandel1 = mandel;
    this.Pixmap = function Pixmap(a1, b1, c1, d1) {
      return new Pixmap.class(a1, b1, c1, d1);
    };
    this.Pixmap.class = class Pixmap {
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return "Pixmap(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ", " + runtime.render(this.c) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Complex = function Complex(r1, i1) {
      return new Complex.class(r1, i1);
    };
    this.Complex.class = class Complex {
      constructor(r, i) {
        this.r = r;
        this.i = i;
      }
      toString() { return "Complex(" + runtime.render(this.r) + ", " + runtime.render(this.i) + ")"; }
    };
  }
  static createPixmap(width, height, max, colours) {
    return runtime.safeCall(mandel.Pixmap(width, height, max, colours))
  } 
  static comp_magnitude(c) {
    let param0, param1, a, b, tmp, tmp1, tmp2;
    if (c instanceof mandel.Complex.class) {
      param0 = c.r;
      param1 = c.i;
      a = param0;
      b = param1;
      tmp = a * a;
      tmp1 = b * b;
      tmp2 = tmp + tmp1;
      return NofibPrelude.sqrt(tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static comp_times(x, y) {
    let param0, param1, a, b, param01, param11, c1, d, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (x instanceof mandel.Complex.class) {
      param0 = x.r;
      param1 = x.i;
      a = param0;
      b = param1;
      if (y instanceof mandel.Complex.class) {
        param01 = y.r;
        param11 = y.i;
        c1 = param01;
        d = param11;
        tmp = a * c1;
        tmp1 = b * d;
        tmp2 = tmp - tmp1;
        tmp3 = a * d;
        tmp4 = b * c1;
        tmp5 = tmp3 + tmp4;
        return mandel.Complex(tmp2, tmp5)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static comp_plus(x1, y1) {
    let param0, param1, a, b, param01, param11, c1, d, tmp, tmp1;
    if (x1 instanceof mandel.Complex.class) {
      param0 = x1.r;
      param1 = x1.i;
      a = param0;
      b = param1;
      if (y1 instanceof mandel.Complex.class) {
        param01 = y1.r;
        param11 = y1.i;
        c1 = param01;
        d = param11;
        tmp = a + c1;
        tmp1 = b + d;
        return mandel.Complex(tmp, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mandel(c1) {
    return infiniteMandel$_inst_20_7_tsni(c1)
  } 
  static diverge(cmplx, radius) {
    let tmp;
    tmp = mandel.comp_magnitude(cmplx);
    return tmp > radius
  } 
  static whenDiverge(limit, radius1, c2) {
    let tmp, tmp1;
    tmp = mandel_inst_21_6_tsni(c2);
    tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
    return walkIt$(radius1, tmp1)
  } 
  static parallelMandel(mat, limit1, radius2) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda_inst_22_23_tsni(limit1, radius2));
    return NofibPrelude.map(lambda$this, mat)
  } 
  static mandelset(x2, y2, x_, y_, screenX, screenY, lIMIT) {
    let result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, prettyRGB$this;
    tmp = enumFromTo_inst_24_26_tsni(1, screenY);
    tmp1 = lscomp1$_inst_24_25_tsni(x2, y2, x_, y_, screenX, screenY, tmp);
    tmp2 = x_ - x2;
    tmp3 = y_ - y2;
    tmp4 = NofibPrelude.max(tmp2, tmp3);
    tmp5 = tmp4 / 2;
    tmp6 = parallelMandel_inst_24_27_tsni(tmp1, lIMIT, tmp5);
    result = tmp6;
    prettyRGB$this = runtime.safeCall(prettyRGB(lIMIT));
    tmp7 = map_inst_24_34_tsni(prettyRGB$this, result);
    return mandel.createPixmap(screenX, screenY, lIMIT, tmp7)
  } 
  static testMandel_nofib(dummy) {
    let minx, miny, maxx, maxy, screenX1, screenY1, limit2, tmp, tmp1;
    tmp = - 2.0;
    minx = tmp;
    tmp1 = - 2.0;
    miny = tmp1;
    maxx = 2.0;
    maxy = 2.0;
    screenX1 = 25;
    screenY1 = 25;
    limit2 = 75;
    return mandelset_inst_29_30_tsni(minx, miny, maxx, maxy, screenX1, screenY1, limit2)
  } 
  static main() {
    let tmp;
    tmp = testMandel_nofib_inst_31_32_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "mandel"; }
});
let mandel = mandel1; export default mandel;
