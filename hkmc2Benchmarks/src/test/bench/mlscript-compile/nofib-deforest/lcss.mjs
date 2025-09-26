const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let listcomp_fun, lcss1, lambda, lambda1, lambda2, lambda$, zip_inst_0_1_tsni, zip_inst_0_2_tsni, algc_inst_3_4_tsni, zip_inst_3_4_2_tsni, zip_inst_3_4_1_tsni, lcss_inst_5_6_tsni, algc_inst_5_6_4_tsni, zip_inst_5_6_4_1_tsni, zip_inst_5_6_4_2_tsni, lcssMain_inst_7_8_tsni, lcss_inst_7_8_6_tsni, algc_inst_7_8_6_4_tsni, zip_inst_7_8_6_4_2_tsni, zip_inst_7_8_6_4_1_tsni, testLCSS_nofib_inst_9_10_tsni, lcssMain_inst_9_10_8_tsni, lcss_inst_9_10_8_6_tsni, algc_inst_9_10_8_6_4_tsni, zip_inst_9_10_8_6_4_1_tsni, zip_inst_9_10_8_6_4_2_tsni, findk_inst_0_11_tsni, findk_inst_0_12_tsni, findk_inst_3_4_12_tsni, findk_inst_3_4_11_tsni, findk_inst_5_6_4_11_tsni, findk_inst_5_6_4_12_tsni, findk_inst_7_8_6_4_12_tsni, findk_inst_7_8_6_4_11_tsni, findk_inst_9_10_8_6_4_11_tsni, findk_inst_9_10_8_6_4_12_tsni, match_ls_arm_Nil_inst_0_11_tsni, match_ls_arm_Nil_inst_0_12_tsni, match_ls_arm_Nil_inst_3_4_12_tsni, match_ls_arm_Nil_inst_3_4_11_tsni, match_ls_arm_Nil_inst_5_6_4_11_tsni, match_ls_arm_Nil_inst_5_6_4_12_tsni, match_ls_arm_Nil_inst_7_8_6_4_12_tsni, match_ls_arm_Nil_inst_7_8_6_4_11_tsni, match_ls_arm_Nil_inst_9_10_8_6_4_11_tsni, match_ls_arm_Nil_inst_9_10_8_6_4_12_tsni;
match_ls_arm_Nil_inst_0_11_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_0_12_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_3_4_12_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_3_4_11_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_5_6_4_11_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_5_6_4_12_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_7_8_6_4_12_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_7_8_6_4_11_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_9_10_8_6_4_11_tsni = (undefined, function (k, km, m) {
  return km
});
match_ls_arm_Nil_inst_9_10_8_6_4_12_tsni = (undefined, function (k, km, m) {
  return km
});
zip_inst_0_1_tsni = function zip_inst_0_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_0_11_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_0_11_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_0_1_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_0_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_0_11_tsni(k, km, m)
    }
  }
};
zip_inst_0_2_tsni = function zip_inst_0_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_0_12_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_0_12_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_0_2_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_0_12_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_0_12_tsni(k, km, m)
    }
  }
};
algc_inst_3_4_tsni = function algc_inst_3_4_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
  if (ys instanceof NofibPrelude.Nil.class) {
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          return runtime.safeCall(lambda1(x))
        } else {
          return lambda2
        }
      } else {
        m2 = NofibPrelude.intDiv(m, 2);
        xs1 = NofibPrelude.take(m2, xs);
        xs2 = NofibPrelude.leave(m2, xs);
        l1 = lcss.algb(xs1, ys);
        tmp = NofibPrelude.reverse(xs2);
        tmp1 = NofibPrelude.reverse(ys);
        tmp2 = lcss.algb(tmp, tmp1);
        l2 = NofibPrelude.reverse(tmp2);
        tmp3 = - 1;
        tmp4 = zip_inst_3_4_1_tsni(l1, l2);
        k = findk_inst_3_4_11_tsni(0, 0, tmp3, tmp4);
        tmp5 = NofibPrelude.take(k, ys);
        tmp6 = algc_inst_3_4_tsni(m2, k, xs1, tmp5);
        tmp7 = m - m2;
        tmp8 = n - k;
        tmp9 = NofibPrelude.leave(k, ys);
        tmp10 = algc_inst_3_4_tsni(tmp7, tmp8, xs2, tmp9);
        return NofibPrelude.compose(tmp6, tmp10)
      }
    } else {
      m2 = NofibPrelude.intDiv(m, 2);
      xs1 = NofibPrelude.take(m2, xs);
      xs2 = NofibPrelude.leave(m2, xs);
      l1 = lcss.algb(xs1, ys);
      tmp11 = NofibPrelude.reverse(xs2);
      tmp12 = NofibPrelude.reverse(ys);
      tmp13 = lcss.algb(tmp11, tmp12);
      l2 = NofibPrelude.reverse(tmp13);
      tmp14 = - 1;
      tmp15 = zip_inst_3_4_2_tsni(l1, l2);
      k = findk_inst_3_4_12_tsni(0, 0, tmp14, tmp15);
      tmp16 = NofibPrelude.take(k, ys);
      tmp17 = algc_inst_3_4_tsni(m2, k, xs1, tmp16);
      tmp18 = m - m2;
      tmp19 = n - k;
      tmp20 = NofibPrelude.leave(k, ys);
      tmp21 = algc_inst_3_4_tsni(tmp18, tmp19, xs2, tmp20);
      return NofibPrelude.compose(tmp17, tmp21)
    }
  }
};
zip_inst_3_4_2_tsni = function zip_inst_3_4_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_3_4_12_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_3_4_12_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_3_4_2_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_3_4_12_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_3_4_12_tsni(k, km, m)
    }
  }
};
zip_inst_3_4_1_tsni = function zip_inst_3_4_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_3_4_11_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_3_4_11_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_3_4_1_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_3_4_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_3_4_11_tsni(k, km, m)
    }
  }
};
lcss_inst_5_6_tsni = function lcss_inst_5_6_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_5_6_4_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_5_6_4_tsni = function algc_inst_5_6_4_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
  if (ys instanceof NofibPrelude.Nil.class) {
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          return runtime.safeCall(lambda1(x))
        } else {
          return lambda2
        }
      } else {
        m2 = NofibPrelude.intDiv(m, 2);
        xs1 = NofibPrelude.take(m2, xs);
        xs2 = NofibPrelude.leave(m2, xs);
        l1 = lcss.algb(xs1, ys);
        tmp = NofibPrelude.reverse(xs2);
        tmp1 = NofibPrelude.reverse(ys);
        tmp2 = lcss.algb(tmp, tmp1);
        l2 = NofibPrelude.reverse(tmp2);
        tmp3 = - 1;
        tmp4 = zip_inst_5_6_4_1_tsni(l1, l2);
        k = findk_inst_5_6_4_11_tsni(0, 0, tmp3, tmp4);
        tmp5 = NofibPrelude.take(k, ys);
        tmp6 = algc_inst_5_6_4_tsni(m2, k, xs1, tmp5);
        tmp7 = m - m2;
        tmp8 = n - k;
        tmp9 = NofibPrelude.leave(k, ys);
        tmp10 = algc_inst_5_6_4_tsni(tmp7, tmp8, xs2, tmp9);
        return NofibPrelude.compose(tmp6, tmp10)
      }
    } else {
      m2 = NofibPrelude.intDiv(m, 2);
      xs1 = NofibPrelude.take(m2, xs);
      xs2 = NofibPrelude.leave(m2, xs);
      l1 = lcss.algb(xs1, ys);
      tmp11 = NofibPrelude.reverse(xs2);
      tmp12 = NofibPrelude.reverse(ys);
      tmp13 = lcss.algb(tmp11, tmp12);
      l2 = NofibPrelude.reverse(tmp13);
      tmp14 = - 1;
      tmp15 = zip_inst_5_6_4_2_tsni(l1, l2);
      k = findk_inst_5_6_4_12_tsni(0, 0, tmp14, tmp15);
      tmp16 = NofibPrelude.take(k, ys);
      tmp17 = algc_inst_5_6_4_tsni(m2, k, xs1, tmp16);
      tmp18 = m - m2;
      tmp19 = n - k;
      tmp20 = NofibPrelude.leave(k, ys);
      tmp21 = algc_inst_5_6_4_tsni(tmp18, tmp19, xs2, tmp20);
      return NofibPrelude.compose(tmp17, tmp21)
    }
  }
};
zip_inst_5_6_4_1_tsni = function zip_inst_5_6_4_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_5_6_4_11_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_5_6_4_11_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_5_6_4_1_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_5_6_4_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_5_6_4_11_tsni(k, km, m)
    }
  }
};
zip_inst_5_6_4_2_tsni = function zip_inst_5_6_4_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_5_6_4_12_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_5_6_4_12_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_5_6_4_2_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_5_6_4_12_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_5_6_4_12_tsni(k, km, m)
    }
  }
};
lcssMain_inst_7_8_tsni = function lcssMain_inst_7_8_tsni(a, b, c, d, e, f) {
  let tmp, tmp1;
  tmp = NofibPrelude.enumFromThenTo(a, b, c);
  tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
  return lcss_inst_7_8_6_tsni(tmp, tmp1)
};
lcss_inst_7_8_6_tsni = function lcss_inst_7_8_6_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_7_8_6_4_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_7_8_6_4_tsni = function algc_inst_7_8_6_4_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
  if (ys instanceof NofibPrelude.Nil.class) {
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          return runtime.safeCall(lambda1(x))
        } else {
          return lambda2
        }
      } else {
        m2 = NofibPrelude.intDiv(m, 2);
        xs1 = NofibPrelude.take(m2, xs);
        xs2 = NofibPrelude.leave(m2, xs);
        l1 = lcss.algb(xs1, ys);
        tmp = NofibPrelude.reverse(xs2);
        tmp1 = NofibPrelude.reverse(ys);
        tmp2 = lcss.algb(tmp, tmp1);
        l2 = NofibPrelude.reverse(tmp2);
        tmp3 = - 1;
        tmp4 = zip_inst_7_8_6_4_1_tsni(l1, l2);
        k = findk_inst_7_8_6_4_11_tsni(0, 0, tmp3, tmp4);
        tmp5 = NofibPrelude.take(k, ys);
        tmp6 = algc_inst_7_8_6_4_tsni(m2, k, xs1, tmp5);
        tmp7 = m - m2;
        tmp8 = n - k;
        tmp9 = NofibPrelude.leave(k, ys);
        tmp10 = algc_inst_7_8_6_4_tsni(tmp7, tmp8, xs2, tmp9);
        return NofibPrelude.compose(tmp6, tmp10)
      }
    } else {
      m2 = NofibPrelude.intDiv(m, 2);
      xs1 = NofibPrelude.take(m2, xs);
      xs2 = NofibPrelude.leave(m2, xs);
      l1 = lcss.algb(xs1, ys);
      tmp11 = NofibPrelude.reverse(xs2);
      tmp12 = NofibPrelude.reverse(ys);
      tmp13 = lcss.algb(tmp11, tmp12);
      l2 = NofibPrelude.reverse(tmp13);
      tmp14 = - 1;
      tmp15 = zip_inst_7_8_6_4_2_tsni(l1, l2);
      k = findk_inst_7_8_6_4_12_tsni(0, 0, tmp14, tmp15);
      tmp16 = NofibPrelude.take(k, ys);
      tmp17 = algc_inst_7_8_6_4_tsni(m2, k, xs1, tmp16);
      tmp18 = m - m2;
      tmp19 = n - k;
      tmp20 = NofibPrelude.leave(k, ys);
      tmp21 = algc_inst_7_8_6_4_tsni(tmp18, tmp19, xs2, tmp20);
      return NofibPrelude.compose(tmp17, tmp21)
    }
  }
};
zip_inst_7_8_6_4_2_tsni = function zip_inst_7_8_6_4_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_7_8_6_4_12_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_7_8_6_4_12_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_7_8_6_4_2_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_7_8_6_4_12_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_7_8_6_4_12_tsni(k, km, m)
    }
  }
};
zip_inst_7_8_6_4_1_tsni = function zip_inst_7_8_6_4_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_7_8_6_4_11_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_7_8_6_4_11_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_7_8_6_4_1_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_7_8_6_4_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_7_8_6_4_11_tsni(k, km, m)
    }
  }
};
testLCSS_nofib_inst_9_10_tsni = function testLCSS_nofib_inst_9_10_tsni(d) {
  return lcssMain_inst_9_10_8_tsni(1, 2, 60, 30, 31, 90)
};
lcssMain_inst_9_10_8_tsni = function lcssMain_inst_9_10_8_tsni(a, b, c, d, e, f) {
  let tmp, tmp1;
  tmp = NofibPrelude.enumFromThenTo(a, b, c);
  tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
  return lcss_inst_9_10_8_6_tsni(tmp, tmp1)
};
lcss_inst_9_10_8_6_tsni = function lcss_inst_9_10_8_6_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_9_10_8_6_4_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_9_10_8_6_4_tsni = function algc_inst_9_10_8_6_4_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
  if (ys instanceof NofibPrelude.Nil.class) {
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          return runtime.safeCall(lambda1(x))
        } else {
          return lambda2
        }
      } else {
        m2 = NofibPrelude.intDiv(m, 2);
        xs1 = NofibPrelude.take(m2, xs);
        xs2 = NofibPrelude.leave(m2, xs);
        l1 = lcss.algb(xs1, ys);
        tmp = NofibPrelude.reverse(xs2);
        tmp1 = NofibPrelude.reverse(ys);
        tmp2 = lcss.algb(tmp, tmp1);
        l2 = NofibPrelude.reverse(tmp2);
        tmp3 = - 1;
        tmp4 = zip_inst_9_10_8_6_4_1_tsni(l1, l2);
        k = findk_inst_9_10_8_6_4_11_tsni(0, 0, tmp3, tmp4);
        tmp5 = NofibPrelude.take(k, ys);
        tmp6 = algc_inst_9_10_8_6_4_tsni(m2, k, xs1, tmp5);
        tmp7 = m - m2;
        tmp8 = n - k;
        tmp9 = NofibPrelude.leave(k, ys);
        tmp10 = algc_inst_9_10_8_6_4_tsni(tmp7, tmp8, xs2, tmp9);
        return NofibPrelude.compose(tmp6, tmp10)
      }
    } else {
      m2 = NofibPrelude.intDiv(m, 2);
      xs1 = NofibPrelude.take(m2, xs);
      xs2 = NofibPrelude.leave(m2, xs);
      l1 = lcss.algb(xs1, ys);
      tmp11 = NofibPrelude.reverse(xs2);
      tmp12 = NofibPrelude.reverse(ys);
      tmp13 = lcss.algb(tmp11, tmp12);
      l2 = NofibPrelude.reverse(tmp13);
      tmp14 = - 1;
      tmp15 = zip_inst_9_10_8_6_4_2_tsni(l1, l2);
      k = findk_inst_9_10_8_6_4_12_tsni(0, 0, tmp14, tmp15);
      tmp16 = NofibPrelude.take(k, ys);
      tmp17 = algc_inst_9_10_8_6_4_tsni(m2, k, xs1, tmp16);
      tmp18 = m - m2;
      tmp19 = n - k;
      tmp20 = NofibPrelude.leave(k, ys);
      tmp21 = algc_inst_9_10_8_6_4_tsni(tmp18, tmp19, xs2, tmp20);
      return NofibPrelude.compose(tmp17, tmp21)
    }
  }
};
zip_inst_9_10_8_6_4_1_tsni = function zip_inst_9_10_8_6_4_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_9_10_8_6_4_11_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_9_10_8_6_4_11_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_9_10_8_6_4_1_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_9_10_8_6_4_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_9_10_8_6_4_11_tsni(k, km, m)
    }
  }
};
zip_inst_9_10_8_6_4_2_tsni = function zip_inst_9_10_8_6_4_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp2, tmp3, tmp4, tmp5;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp2 = x1 + y1;
        scrut = tmp2 >= m;
        if (scrut === true) {
          tmp3 = k + 1;
          tmp4 = x1 + y1;
          return findk_inst_9_10_8_6_4_12_tsni(tmp3, k, tmp4, xys)
        } else {
          tmp5 = k + 1;
          return findk_inst_9_10_8_6_4_12_tsni(tmp5, km, m, xys)
        }
      };
      tmp1 = zip_inst_9_10_8_6_4_2_tsni(xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_9_10_8_6_4_12_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_9_10_8_6_4_12_tsni(k, km, m)
    }
  }
};
findk_inst_0_11_tsni = function findk_inst_0_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_0_12_tsni = function findk_inst_0_12_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_3_4_12_tsni = function findk_inst_3_4_12_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_3_4_11_tsni = function findk_inst_3_4_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_5_6_4_11_tsni = function findk_inst_5_6_4_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_5_6_4_12_tsni = function findk_inst_5_6_4_12_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_7_8_6_4_12_tsni = function findk_inst_7_8_6_4_12_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_7_8_6_4_11_tsni = function findk_inst_7_8_6_4_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_9_10_8_6_4_11_tsni = function findk_inst_9_10_8_6_4_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_9_10_8_6_4_12_tsni = function findk_inst_9_10_8_6_4_12_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
lambda = (undefined, function (x) {
  return x
});
lambda$ = function lambda$(x, t) {
  return NofibPrelude.Cons(x, t)
};
lambda1 = (undefined, function (x) {
  return (t) => {
    return lambda$(x, t)
  }
});
lambda2 = (undefined, function (x) {
  return x
});
listcomp_fun = function listcomp_fun(listcomp_fun_para) {
  let param0, param1, listcomp_fun_ls_h, listcomp_fun_ls_t, tmp, tmp1;
  if (listcomp_fun_para instanceof NofibPrelude.Cons.class) {
    param0 = listcomp_fun_para.head;
    param1 = listcomp_fun_para.tail;
    listcomp_fun_ls_h = param0;
    listcomp_fun_ls_t = param1;
    tmp = globalThis.Object.freeze([
      listcomp_fun_ls_h,
      0
    ]);
    tmp1 = listcomp_fun(listcomp_fun_ls_t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else if (listcomp_fun_para instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
globalThis.Object.freeze(class lcss {
  static {
    lcss1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static algb2(x, k0j1, k1j1, yss) {
    let param0, param1, first1, first0, y, k0j, ys, kjcurr, scrut, tmp, tmp1, tmp2;
    if (yss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (yss instanceof NofibPrelude.Cons.class) {
      param0 = yss.head;
      param1 = yss.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first0;
        k0j = first1;
        ys = param1;
        scrut = x == y;
        if (scrut === true) {
          tmp = k0j1 + 1;
        } else {
          tmp = NofibPrelude.max(k1j1, k0j);
        }
        kjcurr = tmp;
        tmp1 = globalThis.Object.freeze([
          y,
          kjcurr
        ]);
        tmp2 = lcss.algb2(x, k0j, kjcurr, ys);
        return NofibPrelude.Cons(tmp1, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static algb1(xss, yss) {
    let param0, param1, x, xs, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.map(NofibPrelude.snd, yss)
    } else if (xss instanceof NofibPrelude.Cons.class) {
      param0 = xss.head;
      param1 = xss.tail;
      x = param0;
      xs = param1;
      tmp = lcss.algb2(x, 0, 0, yss);
      return lcss.algb1(xs, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static algb(xs, ys) {
    let tmp, tmp1;
    tmp = listcomp_fun(ys);
    tmp1 = lcss.algb1(xs, tmp);
    return NofibPrelude.Cons(0, tmp1)
  } 
  static findk(k, km, m, ls) {
    let param0, param1, first1, first0, x, y, xys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      return km
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x = first0;
        y = first1;
        xys = param1;
        tmp = x + y;
        scrut = tmp >= m;
        if (scrut === true) {
          tmp1 = k + 1;
          tmp2 = x + y;
          return lcss.findk(tmp1, k, tmp2, xys)
        } else {
          tmp3 = k + 1;
          return lcss.findk(tmp3, km, m, xys)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static algc(m, n, xs, ys) {
    let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    if (ys instanceof NofibPrelude.Nil.class) {
      return lambda
    } else {
      if (xs instanceof NofibPrelude.Cons.class) {
        param0 = xs.head;
        param1 = xs.tail;
        x = param0;
        if (param1 instanceof NofibPrelude.Nil.class) {
          scrut = NofibPrelude.inList(x, ys);
          if (scrut === true) {
            return runtime.safeCall(lambda1(x))
          } else {
            return lambda2
          }
        } else {
          m2 = NofibPrelude.intDiv(m, 2);
          xs1 = NofibPrelude.take(m2, xs);
          xs2 = NofibPrelude.leave(m2, xs);
          l1 = lcss.algb(xs1, ys);
          tmp = NofibPrelude.reverse(xs2);
          tmp1 = NofibPrelude.reverse(ys);
          tmp2 = lcss.algb(tmp, tmp1);
          l2 = NofibPrelude.reverse(tmp2);
          tmp3 = - 1;
          tmp4 = zip_inst_0_1_tsni(l1, l2);
          k = findk_inst_0_11_tsni(0, 0, tmp3, tmp4);
          tmp5 = NofibPrelude.take(k, ys);
          tmp6 = lcss.algc(m2, k, xs1, tmp5);
          tmp7 = m - m2;
          tmp8 = n - k;
          tmp9 = NofibPrelude.leave(k, ys);
          tmp10 = lcss.algc(tmp7, tmp8, xs2, tmp9);
          return NofibPrelude.compose(tmp6, tmp10)
        }
      } else {
        m2 = NofibPrelude.intDiv(m, 2);
        xs1 = NofibPrelude.take(m2, xs);
        xs2 = NofibPrelude.leave(m2, xs);
        l1 = lcss.algb(xs1, ys);
        tmp11 = NofibPrelude.reverse(xs2);
        tmp12 = NofibPrelude.reverse(ys);
        tmp13 = lcss.algb(tmp11, tmp12);
        l2 = NofibPrelude.reverse(tmp13);
        tmp14 = - 1;
        tmp15 = zip_inst_0_2_tsni(l1, l2);
        k = findk_inst_0_12_tsni(0, 0, tmp14, tmp15);
        tmp16 = NofibPrelude.take(k, ys);
        tmp17 = lcss.algc(m2, k, xs1, tmp16);
        tmp18 = m - m2;
        tmp19 = n - k;
        tmp20 = NofibPrelude.leave(k, ys);
        tmp21 = lcss.algc(tmp18, tmp19, xs2, tmp20);
        return NofibPrelude.compose(tmp17, tmp21)
      }
    }
  } 
  static lcss(xs, ys) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(xs);
    tmp1 = NofibPrelude.listLen(ys);
    tmp2 = algc_inst_3_4_tsni(tmp, tmp1, xs, ys);
    return runtime.safeCall(tmp2(NofibPrelude.Nil))
  } 
  static lcssMain(a, b, c, d, e, f) {
    let tmp, tmp1;
    tmp = NofibPrelude.enumFromThenTo(a, b, c);
    tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
    return lcss_inst_5_6_tsni(tmp, tmp1)
  } 
  static testLCSS_nofib(d) {
    return lcssMain_inst_7_8_tsni(1, 2, 60, 30, 31, 90)
  } 
  static main() {
    let tmp;
    tmp = testLCSS_nofib_inst_9_10_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lcss"]; 
});
let lcss = lcss1; export default lcss;
