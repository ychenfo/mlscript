import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let lcss1, algc_inst_0_tsni, zip_inst_0_1_tsni, zip_inst_0_2_tsni, algc_inst_3_tsni, zip_inst_3_1_tsni, zip_inst_3_2_tsni, zip_inst_2_tsni, algc_inst_4_tsni, zip_inst_4_1_tsni, zip_inst_4_2_tsni, algc_inst_5_tsni, zip_inst_5_1_tsni, zip_inst_5_2_tsni, zip_inst_1_tsni, algc_inst_6_tsni, zip_inst_6_1_tsni, zip_inst_6_2_tsni, lcss_inst_7_tsni, algc_inst_7_6_tsni, zip_inst_7_6_2_tsni, zip_inst_7_6_1_tsni, lcssMain_inst_8_tsni, lcss_inst_8_7_tsni, algc_inst_8_7_6_tsni, zip_inst_8_7_6_1_tsni, zip_inst_8_7_6_2_tsni, testLCSS_nofib_inst_9_tsni, lcssMain_inst_9_8_tsni, lcss_inst_9_8_7_tsni, algc_inst_9_8_7_6_tsni, zip_inst_9_8_7_6_2_tsni, zip_inst_9_8_7_6_1_tsni, findk_inst_0_10_tsni, findk_inst_0_11_tsni, findk_inst_3_10_tsni, findk_inst_3_11_tsni, findk_inst_11_tsni, findk_inst_4_10_tsni, findk_inst_4_11_tsni, findk_inst_5_10_tsni, findk_inst_5_11_tsni, findk_inst_10_tsni, findk_inst_6_10_tsni, findk_inst_6_11_tsni, findk_inst_7_6_11_tsni, findk_inst_7_6_10_tsni, findk_inst_8_7_6_10_tsni, findk_inst_8_7_6_11_tsni, findk_inst_9_8_7_6_11_tsni, findk_inst_9_8_7_6_10_tsni, match_ls_arm_Nil_inst_0_10_tsni, match_ls_arm_Nil_inst_0_11_tsni, match_ls_arm_Nil_inst_3_10_tsni, match_ls_arm_Nil_inst_3_11_tsni, match_ls_arm_Nil_inst_11_tsni, match_ls_arm_Nil_inst_4_10_tsni, match_ls_arm_Nil_inst_4_11_tsni, match_ls_arm_Nil_inst_5_10_tsni, match_ls_arm_Nil_inst_5_11_tsni, match_ls_arm_Nil_inst_10_tsni, match_ls_arm_Nil_inst_6_10_tsni, match_ls_arm_Nil_inst_6_11_tsni, match_ls_arm_Nil_inst_7_6_11_tsni, match_ls_arm_Nil_inst_7_6_10_tsni, match_ls_arm_Nil_inst_8_7_6_10_tsni, match_ls_arm_Nil_inst_8_7_6_11_tsni, match_ls_arm_Nil_inst_9_8_7_6_11_tsni, match_ls_arm_Nil_inst_9_8_7_6_10_tsni;
match_ls_arm_Nil_inst_0_10_tsni = function match_ls_arm_Nil_inst_0_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_0_11_tsni = function match_ls_arm_Nil_inst_0_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_3_10_tsni = function match_ls_arm_Nil_inst_3_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_3_11_tsni = function match_ls_arm_Nil_inst_3_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_11_tsni = function match_ls_arm_Nil_inst_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_4_10_tsni = function match_ls_arm_Nil_inst_4_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_4_11_tsni = function match_ls_arm_Nil_inst_4_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_5_10_tsni = function match_ls_arm_Nil_inst_5_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_5_11_tsni = function match_ls_arm_Nil_inst_5_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_10_tsni = function match_ls_arm_Nil_inst_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_6_10_tsni = function match_ls_arm_Nil_inst_6_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_6_11_tsni = function match_ls_arm_Nil_inst_6_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_7_6_11_tsni = function match_ls_arm_Nil_inst_7_6_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_7_6_10_tsni = function match_ls_arm_Nil_inst_7_6_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_8_7_6_10_tsni = function match_ls_arm_Nil_inst_8_7_6_10_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_8_7_6_11_tsni = function match_ls_arm_Nil_inst_8_7_6_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_9_8_7_6_11_tsni = function match_ls_arm_Nil_inst_9_8_7_6_11_tsni(k, km, m) {
  return km
};
match_ls_arm_Nil_inst_9_8_7_6_10_tsni = function match_ls_arm_Nil_inst_9_8_7_6_10_tsni(k, km, m) {
  return km
};
algc_inst_0_tsni = function algc_inst_0_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_0_1_tsni(l1, l2);
        tmp10 = findk_inst_0_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_0_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_0_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_0_2_tsni(l1, l2);
      tmp27 = findk_inst_0_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_0_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_0_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_0_1_tsni = function zip_inst_0_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_0_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_0_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_0_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_0_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_0_10_tsni(k, km, m)
    }
  }
};
zip_inst_0_2_tsni = function zip_inst_0_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_0_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_0_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_0_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
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
algc_inst_3_tsni = function algc_inst_3_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_3_1_tsni(l1, l2);
        tmp10 = findk_inst_3_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_3_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_3_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_3_2_tsni(l1, l2);
      tmp27 = findk_inst_3_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_3_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_3_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_3_1_tsni = function zip_inst_3_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_3_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_3_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_3_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_3_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_3_10_tsni(k, km, m)
    }
  }
};
zip_inst_3_2_tsni = function zip_inst_3_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_3_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_3_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_3_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_3_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_3_11_tsni(k, km, m)
    }
  }
};
zip_inst_2_tsni = function zip_inst_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_11_tsni(k, km, m)
    }
  }
};
algc_inst_4_tsni = function algc_inst_4_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_4_1_tsni(l1, l2);
        tmp10 = findk_inst_4_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_4_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_4_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_4_2_tsni(l1, l2);
      tmp27 = findk_inst_4_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_4_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_4_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_4_1_tsni = function zip_inst_4_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_4_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_4_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_4_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_4_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_4_10_tsni(k, km, m)
    }
  }
};
zip_inst_4_2_tsni = function zip_inst_4_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_4_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_4_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_4_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_4_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_4_11_tsni(k, km, m)
    }
  }
};
algc_inst_5_tsni = function algc_inst_5_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_5_1_tsni(l1, l2);
        tmp10 = findk_inst_5_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_5_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_5_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_5_2_tsni(l1, l2);
      tmp27 = findk_inst_5_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_5_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_5_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_5_1_tsni = function zip_inst_5_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_5_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_5_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_5_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_5_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_5_10_tsni(k, km, m)
    }
  }
};
zip_inst_5_2_tsni = function zip_inst_5_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_5_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_5_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_5_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_5_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_5_11_tsni(k, km, m)
    }
  }
};
zip_inst_1_tsni = function zip_inst_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_10_tsni(k, km, m)
    }
  }
};
algc_inst_6_tsni = function algc_inst_6_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_6_1_tsni(l1, l2);
        tmp10 = findk_inst_6_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_6_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_6_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_6_2_tsni(l1, l2);
      tmp27 = findk_inst_6_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_6_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_6_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_6_1_tsni = function zip_inst_6_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_6_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_6_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_6_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_6_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_6_10_tsni(k, km, m)
    }
  }
};
zip_inst_6_2_tsni = function zip_inst_6_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_6_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_6_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_6_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_6_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_6_11_tsni(k, km, m)
    }
  }
};
lcss_inst_7_tsni = function lcss_inst_7_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_7_6_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_7_6_tsni = function algc_inst_7_6_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_7_6_1_tsni(l1, l2);
        tmp10 = findk_inst_7_6_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_7_6_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_7_6_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_7_6_2_tsni(l1, l2);
      tmp27 = findk_inst_7_6_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_7_6_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_7_6_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_7_6_2_tsni = function zip_inst_7_6_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_7_6_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_7_6_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_7_6_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_7_6_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_7_6_11_tsni(k, km, m)
    }
  }
};
zip_inst_7_6_1_tsni = function zip_inst_7_6_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_7_6_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_7_6_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_7_6_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_7_6_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_7_6_10_tsni(k, km, m)
    }
  }
};
lcssMain_inst_8_tsni = function lcssMain_inst_8_tsni(a, b, c, d, e, f) {
  let tmp, tmp1;
  tmp = NofibPrelude.enumFromThenTo(a, b, c);
  tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
  return lcss_inst_8_7_tsni(tmp, tmp1)
};
lcss_inst_8_7_tsni = function lcss_inst_8_7_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_8_7_6_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_8_7_6_tsni = function algc_inst_8_7_6_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_8_7_6_1_tsni(l1, l2);
        tmp10 = findk_inst_8_7_6_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_8_7_6_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_8_7_6_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_8_7_6_2_tsni(l1, l2);
      tmp27 = findk_inst_8_7_6_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_8_7_6_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_8_7_6_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_8_7_6_1_tsni = function zip_inst_8_7_6_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_8_7_6_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_8_7_6_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_8_7_6_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_8_7_6_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_8_7_6_10_tsni(k, km, m)
    }
  }
};
zip_inst_8_7_6_2_tsni = function zip_inst_8_7_6_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_8_7_6_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_8_7_6_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_8_7_6_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_8_7_6_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_8_7_6_11_tsni(k, km, m)
    }
  }
};
testLCSS_nofib_inst_9_tsni = function testLCSS_nofib_inst_9_tsni(d) {
  return lcssMain_inst_9_8_tsni(1, 2, 60, 30, 31, 90)
};
lcssMain_inst_9_8_tsni = function lcssMain_inst_9_8_tsni(a, b, c, d, e, f) {
  let tmp, tmp1;
  tmp = NofibPrelude.enumFromThenTo(a, b, c);
  tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
  return lcss_inst_9_8_7_tsni(tmp, tmp1)
};
lcss_inst_9_8_7_tsni = function lcss_inst_9_8_7_tsni(xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(xs);
  tmp1 = NofibPrelude.listLen(ys);
  tmp2 = algc_inst_9_8_7_6_tsni(tmp, tmp1, xs, ys);
  return runtime.safeCall(tmp2(NofibPrelude.Nil))
};
algc_inst_9_8_7_6_tsni = function algc_inst_9_8_7_6_tsni(m, n, xs, ys) {
  let m2, xs1, xs2, l1, l2, k, param0, param1, x, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
  if (ys instanceof NofibPrelude.Nil.class) {
    lambda = (undefined, function (x1) {
      return x1
    });
    return lambda
  } else {
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          lambda1 = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda1
        } else {
          lambda2 = (undefined, function (x1) {
            return x1
          });
          return lambda2
        }
      } else {
        tmp = NofibPrelude.intDiv(m, 2);
        m2 = tmp;
        tmp1 = NofibPrelude.take(m2, xs);
        xs1 = tmp1;
        tmp2 = NofibPrelude.drop(m2, xs);
        xs2 = tmp2;
        tmp3 = lcss.algb(xs1, ys);
        l1 = tmp3;
        tmp4 = NofibPrelude.reverse(xs2);
        tmp5 = NofibPrelude.reverse(ys);
        tmp6 = lcss.algb(tmp4, tmp5);
        tmp7 = NofibPrelude.reverse(tmp6);
        l2 = tmp7;
        tmp8 = - 1;
        tmp9 = zip_inst_9_8_7_6_1_tsni(l1, l2);
        tmp10 = findk_inst_9_8_7_6_10_tsni(0, 0, tmp8, tmp9);
        k = tmp10;
        tmp11 = NofibPrelude.take(k, ys);
        tmp12 = algc_inst_9_8_7_6_tsni(m2, k, xs1, tmp11);
        tmp13 = m - m2;
        tmp14 = n - k;
        tmp15 = NofibPrelude.drop(k, ys);
        tmp16 = algc_inst_9_8_7_6_tsni(tmp13, tmp14, xs2, tmp15);
        return NofibPrelude.compose(tmp12, tmp16)
      }
    } else {
      tmp17 = NofibPrelude.intDiv(m, 2);
      m2 = tmp17;
      tmp18 = NofibPrelude.take(m2, xs);
      xs1 = tmp18;
      tmp19 = NofibPrelude.drop(m2, xs);
      xs2 = tmp19;
      tmp20 = lcss.algb(xs1, ys);
      l1 = tmp20;
      tmp21 = NofibPrelude.reverse(xs2);
      tmp22 = NofibPrelude.reverse(ys);
      tmp23 = lcss.algb(tmp21, tmp22);
      tmp24 = NofibPrelude.reverse(tmp23);
      l2 = tmp24;
      tmp25 = - 1;
      tmp26 = zip_inst_9_8_7_6_2_tsni(l1, l2);
      tmp27 = findk_inst_9_8_7_6_11_tsni(0, 0, tmp25, tmp26);
      k = tmp27;
      tmp28 = NofibPrelude.take(k, ys);
      tmp29 = algc_inst_9_8_7_6_tsni(m2, k, xs1, tmp28);
      tmp30 = m - m2;
      tmp31 = n - k;
      tmp32 = NofibPrelude.drop(k, ys);
      tmp33 = algc_inst_9_8_7_6_tsni(tmp30, tmp31, xs2, tmp32);
      return NofibPrelude.compose(tmp29, tmp33)
    }
  }
};
zip_inst_9_8_7_6_2_tsni = function zip_inst_9_8_7_6_2_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_9_8_7_6_11_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_9_8_7_6_11_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_9_8_7_6_2_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_9_8_7_6_11_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_9_8_7_6_11_tsni(k, km, m)
    }
  }
};
zip_inst_9_8_7_6_1_tsni = function zip_inst_9_8_7_6_1_tsni(xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
      arr = (k, km, m, param12) => {
        let first1, first0, x1, y1, xys, scrut, tmp1, tmp2, tmp3, tmp4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x1 = first0;
        y1 = first1;
        xys = param12;
        tmp1 = x1 + y1;
        scrut = tmp1 >= m;
        if (scrut === true) {
          tmp2 = k + 1;
          tmp3 = x1 + y1;
          return findk_inst_9_8_7_6_10_tsni(tmp2, k, tmp3, xys)
        } else {
          tmp4 = k + 1;
          return findk_inst_9_8_7_6_10_tsni(tmp4, km, m, xys)
        }
      };
      tmp = zip_inst_9_8_7_6_1_tsni(xs1, ys1);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp;
      return (k, km, m) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(k, km, m, param12))
      }
    } else {
      return (k, km, m) => {
        return match_ls_arm_Nil_inst_9_8_7_6_10_tsni(k, km, m)
      }
    }
  } else {
    return (k, km, m) => {
      return match_ls_arm_Nil_inst_9_8_7_6_10_tsni(k, km, m)
    }
  }
};
findk_inst_0_10_tsni = function findk_inst_0_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_0_11_tsni = function findk_inst_0_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_3_10_tsni = function findk_inst_3_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_3_11_tsni = function findk_inst_3_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_11_tsni = function findk_inst_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_4_10_tsni = function findk_inst_4_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_4_11_tsni = function findk_inst_4_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_5_10_tsni = function findk_inst_5_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_5_11_tsni = function findk_inst_5_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_10_tsni = function findk_inst_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_6_10_tsni = function findk_inst_6_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_6_11_tsni = function findk_inst_6_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_7_6_11_tsni = function findk_inst_7_6_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_7_6_10_tsni = function findk_inst_7_6_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_8_7_6_10_tsni = function findk_inst_8_7_6_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_8_7_6_11_tsni = function findk_inst_8_7_6_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_9_8_7_6_11_tsni = function findk_inst_9_8_7_6_11_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
findk_inst_9_8_7_6_10_tsni = function findk_inst_9_8_7_6_10_tsni(k, km, m, ls) {
  return runtime.safeCall(ls(k, km, m))
};
(class lcss {
  static {
    lcss1 = lcss;
  }
  static algb2(x, k0j1, k1j1, yss) {
    let param0, param1, first1, first0, y, k0j, ys, kjcurr, scrut, tmp, arr, tmp1;
    if (yss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (yss instanceof NofibPrelude.Cons.class) {
      param0 = yss.head;
      param1 = yss.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
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
        arr = [
          y,
          kjcurr
        ];
        tmp1 = lcss.algb2(x, k0j, kjcurr, ys);
        return NofibPrelude.Cons(arr, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static algb1(xss, yss1) {
    let param0, param1, x1, xs, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.map(NofibPrelude.snd, yss1)
    } else if (xss instanceof NofibPrelude.Cons.class) {
      param0 = xss.head;
      param1 = xss.tail;
      x1 = param0;
      xs = param1;
      tmp = lcss.algb2(x1, 0, 0, yss1);
      return lcss.algb1(xs, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static algb(xs, ys) {
    let listcomp_fun, tmp, tmp1;
    listcomp_fun = function listcomp_fun(listcomp_fun_para) {
      let param0, param1, listcomp_fun_ls_h, listcomp_fun_ls_t, arr, tmp2;
      if (listcomp_fun_para instanceof NofibPrelude.Cons.class) {
        param0 = listcomp_fun_para.head;
        param1 = listcomp_fun_para.tail;
        listcomp_fun_ls_h = param0;
        listcomp_fun_ls_t = param1;
        arr = [
          listcomp_fun_ls_h,
          0
        ];
        tmp2 = listcomp_fun(listcomp_fun_ls_t);
        return NofibPrelude.Cons(arr, tmp2)
      } else if (listcomp_fun_para instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = listcomp_fun(ys);
    tmp1 = lcss.algb1(xs, tmp);
    return NofibPrelude.Cons(0, tmp1)
  } 
  static findk(k, km, m, ls) {
    let param0, param1, first1, first0, x1, y, xys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      return km
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x1 = first0;
        y = first1;
        xys = param1;
        tmp = x1 + y;
        scrut = tmp >= m;
        if (scrut === true) {
          tmp1 = k + 1;
          tmp2 = x1 + y;
          return lcss.findk(tmp1, k, tmp2, xys)
        } else {
          tmp3 = k + 1;
          return lcss.findk(tmp3, km, m, xys)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static algc(m1, n, xs1, ys1) {
    let m2, xs11, xs2, l1, l2, k1, param0, param1, x1, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, lambda, lambda1, lambda2;
    if (ys1 instanceof NofibPrelude.Nil.class) {
      lambda = (undefined, function (x2) {
        return x2
      });
      return lambda
    } else {
      if (xs1 instanceof NofibPrelude.Cons.class) {
        param0 = xs1.head;
        param1 = xs1.tail;
        x1 = param0;
        if (param1 instanceof NofibPrelude.Nil.class) {
          scrut = NofibPrelude.inList(x1, ys1);
          if (scrut === true) {
            lambda1 = (undefined, function (t) {
              return NofibPrelude.Cons(x1, t)
            });
            return lambda1
          } else {
            lambda2 = (undefined, function (x2) {
              return x2
            });
            return lambda2
          }
        } else {
          tmp = NofibPrelude.intDiv(m1, 2);
          m2 = tmp;
          tmp1 = NofibPrelude.take(m2, xs1);
          xs11 = tmp1;
          tmp2 = NofibPrelude.drop(m2, xs1);
          xs2 = tmp2;
          tmp3 = lcss.algb(xs11, ys1);
          l1 = tmp3;
          tmp4 = NofibPrelude.reverse(xs2);
          tmp5 = NofibPrelude.reverse(ys1);
          tmp6 = lcss.algb(tmp4, tmp5);
          tmp7 = NofibPrelude.reverse(tmp6);
          l2 = tmp7;
          tmp8 = - 1;
          tmp9 = zip_inst_1_tsni(l1, l2);
          tmp10 = findk_inst_10_tsni(0, 0, tmp8, tmp9);
          k1 = tmp10;
          tmp11 = NofibPrelude.take(k1, ys1);
          tmp12 = algc_inst_5_tsni(m2, k1, xs11, tmp11);
          tmp13 = m1 - m2;
          tmp14 = n - k1;
          tmp15 = NofibPrelude.drop(k1, ys1);
          tmp16 = algc_inst_4_tsni(tmp13, tmp14, xs2, tmp15);
          return NofibPrelude.compose(tmp12, tmp16)
        }
      } else {
        tmp17 = NofibPrelude.intDiv(m1, 2);
        m2 = tmp17;
        tmp18 = NofibPrelude.take(m2, xs1);
        xs11 = tmp18;
        tmp19 = NofibPrelude.drop(m2, xs1);
        xs2 = tmp19;
        tmp20 = lcss.algb(xs11, ys1);
        l1 = tmp20;
        tmp21 = NofibPrelude.reverse(xs2);
        tmp22 = NofibPrelude.reverse(ys1);
        tmp23 = lcss.algb(tmp21, tmp22);
        tmp24 = NofibPrelude.reverse(tmp23);
        l2 = tmp24;
        tmp25 = - 1;
        tmp26 = zip_inst_2_tsni(l1, l2);
        tmp27 = findk_inst_11_tsni(0, 0, tmp25, tmp26);
        k1 = tmp27;
        tmp28 = NofibPrelude.take(k1, ys1);
        tmp29 = algc_inst_3_tsni(m2, k1, xs11, tmp28);
        tmp30 = m1 - m2;
        tmp31 = n - k1;
        tmp32 = NofibPrelude.drop(k1, ys1);
        tmp33 = algc_inst_0_tsni(tmp30, tmp31, xs2, tmp32);
        return NofibPrelude.compose(tmp29, tmp33)
      }
    }
  } 
  static lcss(xs2, ys2) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(xs2);
    tmp1 = NofibPrelude.listLen(ys2);
    tmp2 = algc_inst_6_tsni(tmp, tmp1, xs2, ys2);
    return runtime.safeCall(tmp2(NofibPrelude.Nil))
  } 
  static lcssMain(a, b, c, d, e, f) {
    let tmp, tmp1;
    tmp = NofibPrelude.enumFromThenTo(a, b, c);
    tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
    return lcss_inst_7_tsni(tmp, tmp1)
  } 
  static testLCSS_nofib(d1) {
    return lcssMain_inst_8_tsni(1, 2, 60, 30, 31, 90)
  } 
  static main() {
    let tmp;
    tmp = testLCSS_nofib_inst_9_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "lcss"; }
});
let lcss = lcss1; export default lcss;
