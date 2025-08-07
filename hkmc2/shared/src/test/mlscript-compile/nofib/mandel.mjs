import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let mandel1, comp_times_inst_0_1_tsni, mandel_inst_2_3_tsni, comp_times_inst_2_3_1_tsni, whenDiverge_inst_4_5_tsni, mandel_inst_4_5_3_tsni, comp_times_inst_4_5_3_1_tsni, enumFromTo_inst_6_7_tsni, enumFromTo_inst_6_8_tsni, parallelMandel_inst_6_9_tsni, whenDiverge_inst_6_9_5_tsni, mandel_inst_6_9_5_3_tsni, comp_times_inst_6_9_5_3_1_tsni, map_inst_6_9_10_tsni, mandelset_inst_11_12_tsni, parallelMandel_inst_11_12_9_tsni, whenDiverge_inst_11_12_9_5_tsni, mandel_inst_11_12_9_5_3_tsni, comp_times_inst_11_12_9_5_3_1_tsni, map_inst_11_12_9_10_tsni, enumFromTo_inst_11_12_7_tsni, enumFromTo_inst_11_12_8_tsni, testMandel_nofib_inst_13_14_tsni, mandelset_inst_13_14_12_tsni, enumFromTo_inst_13_14_12_7_tsni, enumFromTo_inst_13_14_12_8_tsni, parallelMandel_inst_13_14_12_9_tsni, whenDiverge_inst_13_14_12_9_5_tsni, mandel_inst_13_14_12_9_5_3_tsni, comp_times_inst_13_14_12_9_5_3_1_tsni, map_inst_13_14_12_9_10_tsni, comp_plus_inst_0_15_tsni, comp_plus_inst_2_3_15_tsni, comp_plus_inst_4_5_3_15_tsni, comp_plus_inst_6_9_5_3_15_tsni, map_inst_6_16_tsni, comp_plus_inst_11_12_9_5_3_15_tsni, map_inst_11_12_16_tsni, comp_plus_inst_13_14_12_9_5_3_15_tsni, map_inst_13_14_12_16_tsni;
comp_times_inst_0_1_tsni = function comp_times_inst_0_1_tsni(x, y) {
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
mandel_inst_2_3_tsni = function mandel_inst_2_3_tsni(c) {
  let infiniteMandel;
  infiniteMandel = function infiniteMandel() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, lambda1;
      tmp1 = infiniteMandel();
      lambda1 = (undefined, function (z) {
        let tmp3;
        tmp3 = comp_times_inst_2_3_1_tsni(z, z);
        return comp_plus_inst_2_3_15_tsni(tmp3, c)
      });
      tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
      return NofibPrelude.LzCons(c, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  };
  return infiniteMandel()
};
comp_times_inst_2_3_1_tsni = function comp_times_inst_2_3_1_tsni(x, y) {
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
whenDiverge_inst_4_5_tsni = function whenDiverge_inst_4_5_tsni(limit, radius, c) {
  let walkIt, tmp, tmp1;
  walkIt = function walkIt(ls) {
    let scrut, param0, param1, x, xs, scrut1, tmp2;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return 0
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs = param1;
      scrut1 = mandel.diverge(x, radius);
      if (scrut1 === true) {
        return 0
      } else {
        tmp2 = walkIt(xs);
        return 1 + tmp2
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mandel_inst_4_5_3_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt(tmp1)
};
mandel_inst_4_5_3_tsni = function mandel_inst_4_5_3_tsni(c) {
  let infiniteMandel;
  infiniteMandel = function infiniteMandel() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, lambda1;
      tmp1 = infiniteMandel();
      lambda1 = (undefined, function (z) {
        let tmp3;
        tmp3 = comp_times_inst_4_5_3_1_tsni(z, z);
        return comp_plus_inst_4_5_3_15_tsni(tmp3, c)
      });
      tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
      return NofibPrelude.LzCons(c, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  };
  return infiniteMandel()
};
comp_times_inst_4_5_3_1_tsni = function comp_times_inst_4_5_3_1_tsni(x, y) {
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
enumFromTo_inst_6_7_tsni = function enumFromTo_inst_6_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport(s, t);
      tmp3 = lscomp2(t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x));
        tmp5 = map_inst_6_9_10_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x));
          tmp5 = map_inst_6_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_6_8_tsni = function enumFromTo_inst_6_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (windowToViewport, lscomp1, screenX) => {
      let lscomp2, param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls2) {
        return runtime.safeCall(ls2(lscomp2, windowToViewport, lscomp1, t, t1))
      };
      tmp2 = enumFromTo_inst_6_7_tsni(1, screenX);
      return lscomp2(tmp2)
    }
  } else {
    return (windowToViewport, lscomp1, screenX) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
parallelMandel_inst_6_9_tsni = function parallelMandel_inst_6_9_tsni(mat, limit, radius) {
  let lambda;
  lambda = (undefined, function (c) {
    return whenDiverge_inst_6_9_5_tsni(limit, radius, c)
  });
  return map_inst_6_9_10_tsni(lambda, mat)
};
whenDiverge_inst_6_9_5_tsni = function whenDiverge_inst_6_9_5_tsni(limit, radius, c) {
  let walkIt, tmp, tmp1;
  walkIt = function walkIt(ls) {
    let scrut, param0, param1, x, xs, scrut1, tmp2;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return 0
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs = param1;
      scrut1 = mandel.diverge(x, radius);
      if (scrut1 === true) {
        return 0
      } else {
        tmp2 = walkIt(xs);
        return 1 + tmp2
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mandel_inst_6_9_5_3_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt(tmp1)
};
mandel_inst_6_9_5_3_tsni = function mandel_inst_6_9_5_3_tsni(c) {
  let infiniteMandel;
  infiniteMandel = function infiniteMandel() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, lambda1;
      tmp1 = infiniteMandel();
      lambda1 = (undefined, function (z) {
        let tmp3;
        tmp3 = comp_times_inst_6_9_5_3_1_tsni(z, z);
        return comp_plus_inst_6_9_5_3_15_tsni(tmp3, c)
      });
      tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
      return NofibPrelude.LzCons(c, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  };
  return infiniteMandel()
};
comp_times_inst_6_9_5_3_1_tsni = function comp_times_inst_6_9_5_3_1_tsni(x, y) {
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
map_inst_6_9_10_tsni = function map_inst_6_9_10_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mandelset_inst_11_12_tsni = function mandelset_inst_11_12_tsni(x, y, x_, y_, screenX, screenY, lIMIT) {
  let windowToViewport, lscomp1, prettyRGB, result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  prettyRGB = function prettyRGB(s) {
    let t, tmp8, arr;
    tmp8 = lIMIT - s;
    t = tmp8;
    arr = [
      s,
      t,
      t
    ];
    return arr
  };
  windowToViewport = function windowToViewport(s, t) {
    let tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    tmp8 = x_ - x;
    tmp9 = s * tmp8;
    tmp10 = tmp9 / screenX;
    tmp11 = x + tmp10;
    tmp12 = y_ - y;
    tmp13 = t * tmp12;
    tmp14 = tmp13 / screenY;
    tmp15 = y + tmp14;
    return mandel.Complex(tmp11, tmp15)
  };
  lscomp1 = function lscomp1(ls1) {
    return runtime.safeCall(ls1(windowToViewport, lscomp1, screenX))
  };
  tmp = enumFromTo_inst_11_12_8_tsni(1, screenY);
  tmp1 = lscomp1(tmp);
  tmp2 = x_ - x;
  tmp3 = y_ - y;
  tmp4 = NofibPrelude.max(tmp2, tmp3);
  tmp5 = tmp4 / 2;
  tmp6 = parallelMandel_inst_11_12_9_tsni(tmp1, lIMIT, tmp5);
  result = tmp6;
  tmp7 = map_inst_11_12_16_tsni(prettyRGB, result);
  return mandel.createPixmap(screenX, screenY, lIMIT, tmp7)
};
parallelMandel_inst_11_12_9_tsni = function parallelMandel_inst_11_12_9_tsni(mat, limit, radius) {
  let lambda;
  lambda = (undefined, function (c) {
    return whenDiverge_inst_11_12_9_5_tsni(limit, radius, c)
  });
  return map_inst_11_12_9_10_tsni(lambda, mat)
};
whenDiverge_inst_11_12_9_5_tsni = function whenDiverge_inst_11_12_9_5_tsni(limit, radius, c) {
  let walkIt, tmp, tmp1;
  walkIt = function walkIt(ls) {
    let scrut, param0, param1, x, xs, scrut1, tmp2;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return 0
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs = param1;
      scrut1 = mandel.diverge(x, radius);
      if (scrut1 === true) {
        return 0
      } else {
        tmp2 = walkIt(xs);
        return 1 + tmp2
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mandel_inst_11_12_9_5_3_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt(tmp1)
};
mandel_inst_11_12_9_5_3_tsni = function mandel_inst_11_12_9_5_3_tsni(c) {
  let infiniteMandel;
  infiniteMandel = function infiniteMandel() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, lambda1;
      tmp1 = infiniteMandel();
      lambda1 = (undefined, function (z) {
        let tmp3;
        tmp3 = comp_times_inst_11_12_9_5_3_1_tsni(z, z);
        return comp_plus_inst_11_12_9_5_3_15_tsni(tmp3, c)
      });
      tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
      return NofibPrelude.LzCons(c, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  };
  return infiniteMandel()
};
comp_times_inst_11_12_9_5_3_1_tsni = function comp_times_inst_11_12_9_5_3_1_tsni(x, y) {
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
map_inst_11_12_9_10_tsni = function map_inst_11_12_9_10_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_11_12_7_tsni = function enumFromTo_inst_11_12_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_12_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport(s, t);
      tmp3 = lscomp2(t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x));
        tmp5 = map_inst_11_12_9_10_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x));
          tmp5 = map_inst_11_12_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_11_12_8_tsni = function enumFromTo_inst_11_12_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_12_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (windowToViewport, lscomp1, screenX) => {
      let lscomp2, param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls2) {
        return runtime.safeCall(ls2(lscomp2, windowToViewport, lscomp1, t, t1))
      };
      tmp2 = enumFromTo_inst_11_12_7_tsni(1, screenX);
      return lscomp2(tmp2)
    }
  } else {
    return (windowToViewport, lscomp1, screenX) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
testMandel_nofib_inst_13_14_tsni = function testMandel_nofib_inst_13_14_tsni(dummy) {
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
  return mandelset_inst_13_14_12_tsni(minx, miny, maxx, maxy, screenX, screenY, limit)
};
mandelset_inst_13_14_12_tsni = function mandelset_inst_13_14_12_tsni(x, y, x_, y_, screenX, screenY, lIMIT) {
  let windowToViewport, lscomp1, prettyRGB, result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  prettyRGB = function prettyRGB(s) {
    let t, tmp8, arr;
    tmp8 = lIMIT - s;
    t = tmp8;
    arr = [
      s,
      t,
      t
    ];
    return arr
  };
  windowToViewport = function windowToViewport(s, t) {
    let tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    tmp8 = x_ - x;
    tmp9 = s * tmp8;
    tmp10 = tmp9 / screenX;
    tmp11 = x + tmp10;
    tmp12 = y_ - y;
    tmp13 = t * tmp12;
    tmp14 = tmp13 / screenY;
    tmp15 = y + tmp14;
    return mandel.Complex(tmp11, tmp15)
  };
  lscomp1 = function lscomp1(ls1) {
    return runtime.safeCall(ls1(windowToViewport, lscomp1, screenX))
  };
  tmp = enumFromTo_inst_13_14_12_8_tsni(1, screenY);
  tmp1 = lscomp1(tmp);
  tmp2 = x_ - x;
  tmp3 = y_ - y;
  tmp4 = NofibPrelude.max(tmp2, tmp3);
  tmp5 = tmp4 / 2;
  tmp6 = parallelMandel_inst_13_14_12_9_tsni(tmp1, lIMIT, tmp5);
  result = tmp6;
  tmp7 = map_inst_13_14_12_16_tsni(prettyRGB, result);
  return mandel.createPixmap(screenX, screenY, lIMIT, tmp7)
};
enumFromTo_inst_13_14_12_7_tsni = function enumFromTo_inst_13_14_12_7_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_13_14_12_7_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      let param0, param1, s, t2, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      s = param0;
      t2 = param1;
      tmp2 = windowToViewport(s, t);
      tmp3 = lscomp2(t2);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f) => {
        let param01, param11, x, xs, tmp4, tmp5, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp4 = runtime.safeCall(f(x));
        tmp5 = map_inst_13_14_12_9_10_tsni(f, xs);
        _deforest_Cons_head2 = tmp4;
        _deforest_Cons_tail2 = tmp5;
        return (f1) => {
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp4 = runtime.safeCall(f1(x));
          tmp5 = map_inst_13_14_12_16_tsni(f1, xs);
          return NofibPrelude.Cons(tmp4, tmp5)
        }
      }
    }
  } else {
    return (lscomp2, windowToViewport, lscomp1, t, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromTo_inst_13_14_12_8_tsni = function enumFromTo_inst_13_14_12_8_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_13_14_12_8_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (windowToViewport, lscomp1, screenX) => {
      let lscomp2, param0, param1, t, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      t = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls2) {
        return runtime.safeCall(ls2(lscomp2, windowToViewport, lscomp1, t, t1))
      };
      tmp2 = enumFromTo_inst_13_14_12_7_tsni(1, screenX);
      return lscomp2(tmp2)
    }
  } else {
    return (windowToViewport, lscomp1, screenX) => {
      return (f) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
parallelMandel_inst_13_14_12_9_tsni = function parallelMandel_inst_13_14_12_9_tsni(mat, limit, radius) {
  let lambda;
  lambda = (undefined, function (c) {
    return whenDiverge_inst_13_14_12_9_5_tsni(limit, radius, c)
  });
  return map_inst_13_14_12_9_10_tsni(lambda, mat)
};
whenDiverge_inst_13_14_12_9_5_tsni = function whenDiverge_inst_13_14_12_9_5_tsni(limit, radius, c) {
  let walkIt, tmp, tmp1;
  walkIt = function walkIt(ls) {
    let scrut, param0, param1, x, xs, scrut1, tmp2;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return 0
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs = param1;
      scrut1 = mandel.diverge(x, radius);
      if (scrut1 === true) {
        return 0
      } else {
        tmp2 = walkIt(xs);
        return 1 + tmp2
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mandel_inst_13_14_12_9_5_3_tsni(c);
  tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
  return walkIt(tmp1)
};
mandel_inst_13_14_12_9_5_3_tsni = function mandel_inst_13_14_12_9_5_3_tsni(c) {
  let infiniteMandel;
  infiniteMandel = function infiniteMandel() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, lambda1;
      tmp1 = infiniteMandel();
      lambda1 = (undefined, function (z) {
        let tmp3;
        tmp3 = comp_times_inst_13_14_12_9_5_3_1_tsni(z, z);
        return comp_plus_inst_13_14_12_9_5_3_15_tsni(tmp3, c)
      });
      tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
      return NofibPrelude.LzCons(c, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  };
  return infiniteMandel()
};
comp_times_inst_13_14_12_9_5_3_1_tsni = function comp_times_inst_13_14_12_9_5_3_1_tsni(x, y) {
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
map_inst_13_14_12_9_10_tsni = function map_inst_13_14_12_9_10_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_0_15_tsni = function comp_plus_inst_0_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_2_3_15_tsni = function comp_plus_inst_2_3_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_4_5_3_15_tsni = function comp_plus_inst_4_5_3_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
comp_plus_inst_6_9_5_3_15_tsni = function comp_plus_inst_6_9_5_3_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_6_16_tsni = function map_inst_6_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_11_12_9_5_3_15_tsni = function comp_plus_inst_11_12_9_5_3_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_11_12_16_tsni = function map_inst_11_12_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
comp_plus_inst_13_14_12_9_5_3_15_tsni = function comp_plus_inst_13_14_12_9_5_3_15_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_13_14_12_16_tsni = function map_inst_13_14_12_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
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
    let infiniteMandel;
    infiniteMandel = function infiniteMandel() {
      let tmp, lambda;
      lambda = (undefined, function () {
        let tmp1, tmp2, lambda1;
        tmp1 = infiniteMandel();
        lambda1 = (undefined, function (z) {
          let tmp3;
          tmp3 = comp_times_inst_0_1_tsni(z, z);
          return comp_plus_inst_0_15_tsni(tmp3, c1)
        });
        tmp2 = NofibPrelude.map_lz(lambda1, tmp1);
        return NofibPrelude.LzCons(c1, tmp2)
      });
      tmp = lambda;
      return NofibPrelude.lazy(tmp)
    };
    return infiniteMandel()
  } 
  static diverge(cmplx, radius) {
    let tmp;
    tmp = mandel.comp_magnitude(cmplx);
    return tmp > radius
  } 
  static whenDiverge(limit, radius1, c2) {
    let walkIt, tmp, tmp1;
    walkIt = function walkIt(ls) {
      let scrut, param0, param1, x2, xs, scrut1, tmp2;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return 0
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        x2 = param0;
        xs = param1;
        scrut1 = mandel.diverge(x2, radius1);
        if (scrut1 === true) {
          return 0
        } else {
          tmp2 = walkIt(xs);
          return 1 + tmp2
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = mandel_inst_2_3_tsni(c2);
    tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
    return walkIt(tmp1)
  } 
  static parallelMandel(mat, limit1, radius2) {
    let lambda;
    lambda = (undefined, function (c3) {
      return whenDiverge_inst_4_5_tsni(limit1, radius2, c3)
    });
    return NofibPrelude.map(lambda, mat)
  } 
  static mandelset(x2, y2, x_, y_, screenX, screenY, lIMIT) {
    let windowToViewport, lscomp1, prettyRGB, result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    prettyRGB = function prettyRGB(s) {
      let t, tmp8, arr;
      tmp8 = lIMIT - s;
      t = tmp8;
      arr = [
        s,
        t,
        t
      ];
      return arr
    };
    windowToViewport = function windowToViewport(s, t) {
      let tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
      tmp8 = x_ - x2;
      tmp9 = s * tmp8;
      tmp10 = tmp9 / screenX;
      tmp11 = x2 + tmp10;
      tmp12 = y_ - y2;
      tmp13 = t * tmp12;
      tmp14 = tmp13 / screenY;
      tmp15 = y2 + tmp14;
      return mandel.Complex(tmp11, tmp15)
    };
    lscomp1 = function lscomp1(ls1) {
      return runtime.safeCall(ls1(windowToViewport, lscomp1, screenX))
    };
    tmp = enumFromTo_inst_6_8_tsni(1, screenY);
    tmp1 = lscomp1(tmp);
    tmp2 = x_ - x2;
    tmp3 = y_ - y2;
    tmp4 = NofibPrelude.max(tmp2, tmp3);
    tmp5 = tmp4 / 2;
    tmp6 = parallelMandel_inst_6_9_tsni(tmp1, lIMIT, tmp5);
    result = tmp6;
    tmp7 = map_inst_6_16_tsni(prettyRGB, result);
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
    return mandelset_inst_11_12_tsni(minx, miny, maxx, maxy, screenX1, screenY1, limit2)
  } 
  static main() {
    let tmp;
    tmp = testMandel_nofib_inst_13_14_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "mandel"; }
});
let mandel = mandel1; export default mandel;
