import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let awards1, perms_inst_0_tsni, map_inst_0_1_tsni, map_inst_1_tsni, perms_inst_2_tsni, map_inst_2_1_tsni, perms_inst_3_tsni, map_inst_3_1_tsni, findawards_inst_4_tsni, awards_inst_4_5_tsni, perms_inst_4_5_3_tsni, map_inst_4_5_3_1_tsni, sort_inst_4_5_6_tsni, qsort_inst_4_5_6_7_tsni, qpart_inst_4_5_6_7_tsni, rqsort_inst_4_5_6_7_tsni, rqpart_inst_4_5_6_7_tsni, map_inst_4_5_8_tsni, awards_inst_5_tsni, sort_inst_5_6_tsni, qsort_inst_5_6_7_tsni, qpart_inst_5_6_7_tsni, rqsort_inst_5_6_7_tsni, rqpart_inst_5_6_7_tsni, perms_inst_5_3_tsni, map_inst_5_3_1_tsni, map_inst_5_8_tsni, enumFromTo_inst_9_tsni, testAwards_nofib_inst_10_tsni, findallawards_inst_10_11_tsni, findawards_inst_10_11_12_tsni, awards_inst_10_11_12_5_tsni, perms_inst_10_11_12_5_3_tsni, map_inst_10_11_12_5_3_1_tsni, sort_inst_10_11_12_5_6_tsni, qsort_inst_10_11_12_5_6_7_tsni, qpart_inst_10_11_12_5_6_7_tsni, rqsort_inst_10_11_12_5_6_7_tsni, rqpart_inst_10_11_12_5_6_7_tsni, map_inst_10_11_12_5_8_tsni, enumFromTo_inst_10_9_tsni, append_inst_0_13_tsni, append_inst_13_tsni, append_inst_2_13_tsni, append_inst_3_13_tsni, append_inst_4_5_3_13_tsni, map_inst_4_5_14_tsni, filter_inst_4_5_15_tsni, map_inst_5_14_tsni, append_inst_5_3_13_tsni, filter_inst_5_15_tsni, map_inst_16_tsni, append_inst_10_11_12_5_3_13_tsni, map_inst_10_11_12_5_14_tsni, filter_inst_10_11_12_5_15_tsni, map_inst_10_16_tsni, match_xs_arm_Cons_inst_4_5_14_tsni, match_xs_arm_Cons_inst_5_14_tsni, match_xs_arm_Cons_inst_10_11_12_5_14_tsni;
match_xs_arm_Cons_inst_4_5_14_tsni = function match_xs_arm_Cons_inst_4_5_14_tsni(f, _deforest_Cons_head_inst_4_5_14_tsni, _deforest_Cons_tail_inst_4_5_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_4_5_14_tsni;
  param1 = _deforest_Cons_tail_inst_4_5_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_4_5_14_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Cons_inst_5_14_tsni = function match_xs_arm_Cons_inst_5_14_tsni(f, _deforest_Cons_head_inst_5_14_tsni, _deforest_Cons_tail_inst_5_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_5_14_tsni;
  param1 = _deforest_Cons_tail_inst_5_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_5_14_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Cons_inst_10_11_12_5_14_tsni = function match_xs_arm_Cons_inst_10_11_12_5_14_tsni(f, _deforest_Cons_head_inst_10_11_12_5_14_tsni, _deforest_Cons_tail_inst_10_11_12_5_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_10_11_12_5_14_tsni;
  param1 = _deforest_Cons_tail_inst_10_11_12_5_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_10_11_12_5_14_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
perms_inst_0_tsni = function perms_inst_0_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_0_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_0_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_0_tsni(m, ns);
        return append_inst_0_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_0_1_tsni = function map_inst_0_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_0_13_tsni(xs2, ys);
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
map_inst_1_tsni = function map_inst_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_13_tsni(xs2, ys);
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
perms_inst_2_tsni = function perms_inst_2_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_2_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_2_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_2_tsni(m, ns);
        return append_inst_2_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_2_1_tsni = function map_inst_2_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_2_13_tsni(xs2, ys);
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
perms_inst_3_tsni = function perms_inst_3_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_3_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_3_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_3_tsni(m, ns);
        return append_inst_3_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_3_1_tsni = function map_inst_3_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_3_13_tsni(xs2, ys);
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
findawards_inst_4_tsni = function findawards_inst_4_tsni(scores) {
  let scrut, param0, param1, head_, tail_, first1, first0, award, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  scrut = awards_inst_4_5_tsni(scores);
  if (scrut instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    head_ = param0;
    tail_ = param1;
    if (globalThis.Array.isArray(head_) && head_.length === 2) {
      first0 = head_[0];
      first1 = head_[1];
      award = first0;
      if (globalThis.Array.isArray(first1) && first1.length === 2) {
        first01 = first1[0];
        first11 = first1[1];
        sum_ = first01;
        perm = first11;
        arr = [
          sum_,
          perm
        ];
        arr1 = [
          award,
          arr
        ];
        tmp = awards.listDiff(scores, perm);
        tmp1 = findawards_inst_4_tsni(tmp);
        return NofibPrelude.Cons(arr1, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_4_5_tsni = function awards_inst_4_5_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda;
  atleast = function atleast(threshold) {
    let tmp6, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, sum_, p;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        sum_ = first0;
        p = first1;
        return sum_ >= threshold
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp6 = lambda1;
    return filter_inst_4_5_15_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    let first1, first0, name, threshold, tmp6, tmp7, lambda1;
    if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
      first0 = name_threshold[0];
      first1 = name_threshold[1];
      name = first0;
      threshold = first1;
      tmp6 = atleast(threshold);
      tmp7 = sort_inst_4_5_6_tsni(tmp6);
      lambda1 = (undefined, function (ps) {
        let arr3;
        arr3 = [
          name,
          ps
        ];
        return arr3
      });
      return map_inst_4_5_14_tsni(lambda1, tmp7)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = perms_inst_4_5_3_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_4_5_8_tsni(lambda, tmp);
  sumscores = tmp1;
  arr = [
    "Gold",
    70
  ];
  tmp2 = award(arr);
  arr1 = [
    "Silver",
    60
  ];
  tmp3 = award(arr1);
  arr2 = [
    "Bronze",
    50
  ];
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
perms_inst_4_5_3_tsni = function perms_inst_4_5_3_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_4_5_3_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_4_5_3_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_4_5_3_tsni(m, ns);
        return append_inst_4_5_3_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_4_5_3_1_tsni = function map_inst_4_5_3_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_4_5_3_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_4_5_3_13_tsni(xs2, ys);
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
sort_inst_4_5_6_tsni = function sort_inst_4_5_6_tsni(l) {
  let lambda;
  lambda = (undefined, function (a, b) {
    let lambda1, lambda2, lambda3;
    lambda1 = (undefined, function (a1, b1) {
      return a1 < b1
    });
    lambda2 = (undefined, function (a1, b1) {
      return a1 > b1
    });
    lambda3 = (undefined, function (a1, b1) {
      let lambda4, lambda5;
      lambda4 = (undefined, function (a2, b2) {
        return a2 < b2
      });
      lambda5 = (undefined, function (a2, b2) {
        return a2 > b2
      });
      return NofibPrelude.ltList(a1, b1, lambda4, lambda5)
    });
    return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda3)
  });
  return qsort_inst_4_5_6_7_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_4_5_6_7_tsni = function qsort_inst_4_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_4_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_4_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_4_5_6_7_tsni = function qpart_inst_4_5_6_7_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_4_5_6_7_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_4_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_4_5_6_7_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_4_5_6_7_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_4_5_6_7_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_4_5_6_7_tsni = function rqsort_inst_4_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_4_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_4_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_4_5_6_7_tsni = function rqpart_inst_4_5_6_7_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_4_5_6_7_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_4_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_4_5_6_7_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_4_5_6_7_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_4_5_6_7_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_4_5_8_tsni = function map_inst_4_5_8_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_4_5_8_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_4_5_15_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_4_5_15_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_5_tsni = function awards_inst_5_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda;
  atleast = function atleast(threshold) {
    let tmp6, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, sum_, p;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        sum_ = first0;
        p = first1;
        return sum_ >= threshold
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp6 = lambda1;
    return filter_inst_5_15_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    let first1, first0, name, threshold, tmp6, tmp7, lambda1;
    if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
      first0 = name_threshold[0];
      first1 = name_threshold[1];
      name = first0;
      threshold = first1;
      tmp6 = atleast(threshold);
      tmp7 = sort_inst_5_6_tsni(tmp6);
      lambda1 = (undefined, function (ps) {
        let arr3;
        arr3 = [
          name,
          ps
        ];
        return arr3
      });
      return map_inst_5_14_tsni(lambda1, tmp7)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = perms_inst_5_3_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_5_8_tsni(lambda, tmp);
  sumscores = tmp1;
  arr = [
    "Gold",
    70
  ];
  tmp2 = award(arr);
  arr1 = [
    "Silver",
    60
  ];
  tmp3 = award(arr1);
  arr2 = [
    "Bronze",
    50
  ];
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
sort_inst_5_6_tsni = function sort_inst_5_6_tsni(l) {
  let lambda;
  lambda = (undefined, function (a, b) {
    let lambda1, lambda2, lambda3;
    lambda1 = (undefined, function (a1, b1) {
      return a1 < b1
    });
    lambda2 = (undefined, function (a1, b1) {
      return a1 > b1
    });
    lambda3 = (undefined, function (a1, b1) {
      let lambda4, lambda5;
      lambda4 = (undefined, function (a2, b2) {
        return a2 < b2
      });
      lambda5 = (undefined, function (a2, b2) {
        return a2 > b2
      });
      return NofibPrelude.ltList(a1, b1, lambda4, lambda5)
    });
    return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda3)
  });
  return qsort_inst_5_6_7_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_5_6_7_tsni = function qsort_inst_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_5_6_7_tsni = function qpart_inst_5_6_7_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_5_6_7_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_5_6_7_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_5_6_7_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_5_6_7_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_5_6_7_tsni = function rqsort_inst_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_5_6_7_tsni = function rqpart_inst_5_6_7_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_5_6_7_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_5_6_7_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_5_6_7_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_5_6_7_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
perms_inst_5_3_tsni = function perms_inst_5_3_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_5_3_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_5_3_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_5_3_tsni(m, ns);
        return append_inst_5_3_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_5_3_1_tsni = function map_inst_5_3_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_3_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_5_3_13_tsni(xs2, ys);
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
map_inst_5_8_tsni = function map_inst_5_8_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_8_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_5_15_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_5_15_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_9_tsni = function enumFromTo_inst_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_9_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_16_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testAwards_nofib_inst_10_tsni = function testAwards_nofib_inst_10_tsni(n) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (x) {
    let tmp2, tmp3, tmp4;
    tmp2 = NofibPrelude.intMod(x, 100);
    tmp3 = awards.competitors(tmp2);
    tmp4 = findallawards_inst_10_11_tsni(tmp3);
    return Predef.print(tmp4)
  });
  tmp = lambda;
  tmp1 = enumFromTo_inst_10_9_tsni(1, n);
  return map_inst_10_16_tsni(tmp, tmp1)
};
findallawards_inst_10_11_tsni = function findallawards_inst_10_11_tsni(competitors) {
  let tmp, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, name, scores, tmp1, arr;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      name = first0;
      scores = first1;
      tmp1 = findawards_inst_10_11_12_tsni(scores);
      arr = [
        name,
        tmp1
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.map(tmp, competitors)
};
findawards_inst_10_11_12_tsni = function findawards_inst_10_11_12_tsni(scores) {
  let scrut, param0, param1, head_, tail_, first1, first0, award, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  scrut = awards_inst_10_11_12_5_tsni(scores);
  if (scrut instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    head_ = param0;
    tail_ = param1;
    if (globalThis.Array.isArray(head_) && head_.length === 2) {
      first0 = head_[0];
      first1 = head_[1];
      award = first0;
      if (globalThis.Array.isArray(first1) && first1.length === 2) {
        first01 = first1[0];
        first11 = first1[1];
        sum_ = first01;
        perm = first11;
        arr = [
          sum_,
          perm
        ];
        arr1 = [
          award,
          arr
        ];
        tmp = awards.listDiff(scores, perm);
        tmp1 = findawards_inst_10_11_12_tsni(tmp);
        return NofibPrelude.Cons(arr1, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_10_11_12_5_tsni = function awards_inst_10_11_12_5_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda;
  atleast = function atleast(threshold) {
    let tmp6, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, sum_, p;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        sum_ = first0;
        p = first1;
        return sum_ >= threshold
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp6 = lambda1;
    return filter_inst_10_11_12_5_15_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    let first1, first0, name, threshold, tmp6, tmp7, lambda1;
    if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
      first0 = name_threshold[0];
      first1 = name_threshold[1];
      name = first0;
      threshold = first1;
      tmp6 = atleast(threshold);
      tmp7 = sort_inst_10_11_12_5_6_tsni(tmp6);
      lambda1 = (undefined, function (ps) {
        let arr3;
        arr3 = [
          name,
          ps
        ];
        return arr3
      });
      return map_inst_10_11_12_5_14_tsni(lambda1, tmp7)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = perms_inst_10_11_12_5_3_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_10_11_12_5_8_tsni(lambda, tmp);
  sumscores = tmp1;
  arr = [
    "Gold",
    70
  ];
  tmp2 = award(arr);
  arr1 = [
    "Silver",
    60
  ];
  tmp3 = award(arr1);
  arr2 = [
    "Bronze",
    50
  ];
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
perms_inst_10_11_12_5_3_tsni = function perms_inst_10_11_12_5_3_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_10_11_12_5_3_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_10_11_12_5_3_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_10_11_12_5_3_tsni(m, ns);
        return append_inst_10_11_12_5_3_13_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_10_11_12_5_3_1_tsni = function map_inst_10_11_12_5_3_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_11_12_5_3_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_10_11_12_5_3_13_tsni(xs2, ys);
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
sort_inst_10_11_12_5_6_tsni = function sort_inst_10_11_12_5_6_tsni(l) {
  let lambda;
  lambda = (undefined, function (a, b) {
    let lambda1, lambda2, lambda3;
    lambda1 = (undefined, function (a1, b1) {
      return a1 < b1
    });
    lambda2 = (undefined, function (a1, b1) {
      return a1 > b1
    });
    lambda3 = (undefined, function (a1, b1) {
      let lambda4, lambda5;
      lambda4 = (undefined, function (a2, b2) {
        return a2 < b2
      });
      lambda5 = (undefined, function (a2, b2) {
        return a2 > b2
      });
      return NofibPrelude.ltList(a1, b1, lambda4, lambda5)
    });
    return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda3)
  });
  return qsort_inst_10_11_12_5_6_7_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_10_11_12_5_6_7_tsni = function qsort_inst_10_11_12_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_10_11_12_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_10_11_12_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_10_11_12_5_6_7_tsni = function qpart_inst_10_11_12_5_6_7_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_10_11_12_5_6_7_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_10_11_12_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_10_11_12_5_6_7_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_10_11_12_5_6_7_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_10_11_12_5_6_7_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_10_11_12_5_6_7_tsni = function rqsort_inst_10_11_12_5_6_7_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_10_11_12_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_10_11_12_5_6_7_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_10_11_12_5_6_7_tsni = function rqpart_inst_10_11_12_5_6_7_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_10_11_12_5_6_7_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_10_11_12_5_14_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_10_11_12_5_6_7_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_10_11_12_5_6_7_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_10_11_12_5_6_7_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_10_11_12_5_8_tsni = function map_inst_10_11_12_5_8_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_10_11_12_5_8_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp2 = filter_inst_10_11_12_5_15_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_10_11_12_5_15_tsni(f1, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_10_9_tsni = function enumFromTo_inst_10_9_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_10_9_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_10_16_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
append_inst_0_13_tsni = function append_inst_0_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_tsni = function append_inst_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_2_13_tsni = function append_inst_2_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_3_13_tsni = function append_inst_3_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_4_5_3_13_tsni = function append_inst_4_5_3_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_4_5_14_tsni = function map_inst_4_5_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_4_5_15_tsni = function filter_inst_4_5_15_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_5_14_tsni = function map_inst_5_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_5_3_13_tsni = function append_inst_5_3_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_5_15_tsni = function filter_inst_5_15_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_16_tsni = function map_inst_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_10_11_12_5_3_13_tsni = function append_inst_10_11_12_5_3_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_10_11_12_5_14_tsni = function map_inst_10_11_12_5_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_10_11_12_5_15_tsni = function filter_inst_10_11_12_5_15_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_10_16_tsni = function map_inst_10_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class awards {
  static {
    awards1 = awards;
  }
  static delete_(xs, e) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return x == y
    });
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls) {
    return NofibPrelude.foldl(awards.delete_, a, ls)
  } 
  static qsort(le, ls1, r) {
    let param0, param1, x, xs1, x1;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      param0 = ls1.head;
      param1 = ls1.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs1 = param1;
        return awards.qpart(le, x, xs1, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static qpart(le1, x, ys, rlt, rge, r1) {
    let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3;
    if (ys instanceof NofibPrelude.Nil.class) {
      tmp = awards.rqsort(le1, rge, r1);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return awards.rqsort(le1, rlt, tmp1)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param0 = ys.head;
      param1 = ys.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(le1(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return awards.qpart(le1, x, ys1, rlt, tmp2, r1)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return awards.qpart(le1, x, ys1, tmp3, rge, r1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqsort(le2, ls2, r2) {
    let param0, param1, x1, xs1, x2;
    if (ls2 instanceof NofibPrelude.Nil.class) {
      return r2
    } else if (ls2 instanceof NofibPrelude.Cons.class) {
      param0 = ls2.head;
      param1 = ls2.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x2, r2)
      } else {
        x1 = param0;
        xs1 = param1;
        return awards.rqpart(le2, x1, xs1, NofibPrelude.Nil, NofibPrelude.Nil, r2)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqpart(le3, x1, yss, rle, rgt, r3) {
    let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3;
    if (yss instanceof NofibPrelude.Nil.class) {
      tmp = awards.qsort(le3, rgt, r3);
      tmp1 = NofibPrelude.Cons(x1, tmp);
      return awards.qsort(le3, rle, tmp1)
    } else if (yss instanceof NofibPrelude.Cons.class) {
      param0 = yss.head;
      param1 = yss.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(le3(y, x1));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return awards.rqpart(le3, x1, ys1, tmp2, rgt, r3)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return awards.rqpart(le3, x1, ys1, rle, tmp3, r3)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sort(l) {
    let lambda;
    lambda = (undefined, function (a1, b) {
      let lambda1, lambda2, lambda3;
      lambda1 = (undefined, function (a2, b1) {
        return a2 < b1
      });
      lambda2 = (undefined, function (a2, b1) {
        return a2 > b1
      });
      lambda3 = (undefined, function (a2, b1) {
        let lambda4, lambda5;
        lambda4 = (undefined, function (a3, b2) {
          return a3 < b2
        });
        lambda5 = (undefined, function (a3, b2) {
          return a3 > b2
        });
        return NofibPrelude.ltList(a2, b1, lambda4, lambda5)
      });
      return NofibPrelude.ltTup2(a1, b, lambda1, lambda2, lambda3)
    });
    return awards.qsort(lambda, l, NofibPrelude.Nil)
  } 
  static perms(m, nns) {
    let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    if (nns instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      scrut = m == 1;
      if (scrut === true) {
        lambda = (undefined, function (x2) {
          return NofibPrelude.Cons(x2, NofibPrelude.Nil)
        });
        return NofibPrelude.map(lambda, nns)
      } else {
        if (nns instanceof NofibPrelude.Cons.class) {
          param0 = nns.head;
          param1 = nns.tail;
          n = param0;
          ns = param1;
          tmp = m - 1;
          tmp1 = perms_inst_2_tsni(tmp, ns);
          lambda1 = (undefined, function (x2) {
            return NofibPrelude.Cons(n, x2)
          });
          tmp2 = map_inst_1_tsni(lambda1, tmp1);
          tmp3 = perms_inst_0_tsni(m, ns);
          return append_inst_13_tsni(tmp2, tmp3)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static awards(scores) {
    let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda;
    atleast = function atleast(threshold) {
      let tmp6, lambda1;
      lambda1 = (undefined, function (caseScrut) {
        let first1, first0, sum_, p;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          sum_ = first0;
          p = first1;
          return sum_ >= threshold
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp6 = lambda1;
      return NofibPrelude.filter(tmp6, sumscores)
    };
    award = function award(name_threshold) {
      let first1, first0, name, threshold, tmp6, tmp7, lambda1;
      if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
        first0 = name_threshold[0];
        first1 = name_threshold[1];
        name = first0;
        threshold = first1;
        tmp6 = atleast(threshold);
        tmp7 = awards.sort(tmp6);
        lambda1 = (undefined, function (ps) {
          let arr3;
          arr3 = [
            name,
            ps
          ];
          return arr3
        });
        return NofibPrelude.map(lambda1, tmp7)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = perms_inst_3_tsni(3, scores);
    lambda = (undefined, function (p) {
      let tmp6, arr3;
      tmp6 = NofibPrelude.sum(p);
      arr3 = [
        tmp6,
        p
      ];
      return arr3
    });
    tmp1 = NofibPrelude.map(lambda, tmp);
    sumscores = tmp1;
    arr = [
      "Gold",
      70
    ];
    tmp2 = award(arr);
    arr1 = [
      "Silver",
      60
    ];
    tmp3 = award(arr1);
    arr2 = [
      "Bronze",
      50
    ];
    tmp4 = award(arr2);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } 
  static findawards(scores1) {
    let scrut, param0, param1, head_, tail_, first1, first0, award, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
    scrut = awards_inst_5_tsni(scores1);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      head_ = param0;
      tail_ = param1;
      if (globalThis.Array.isArray(head_) && head_.length === 2) {
        first0 = head_[0];
        first1 = head_[1];
        award = first0;
        if (globalThis.Array.isArray(first1) && first1.length === 2) {
          first01 = first1[0];
          first11 = first1[1];
          sum_ = first01;
          perm = first11;
          arr = [
            sum_,
            perm
          ];
          arr1 = [
            award,
            arr
          ];
          tmp = awards.listDiff(scores1, perm);
          tmp1 = findawards_inst_4_tsni(tmp);
          return NofibPrelude.Cons(arr1, tmp1)
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
  static findallawards(competitors) {
    let tmp, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, name, scores2, tmp1, arr;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        name = first0;
        scores2 = first1;
        tmp1 = awards.findawards(scores2);
        arr = [
          name,
          tmp1
        ];
        return arr
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.map(tmp, competitors)
  } 
  static competitors(i) {
    let tmp, arr, tmp1, arr1, tmp2, arr2, tmp3, arr3;
    tmp = NofibPrelude.list(35, 27, 40, i, 34, 21);
    arr = [
      "Simon",
      tmp
    ];
    tmp1 = NofibPrelude.list(23, 19, 45, i, 17, 10, 5, 8, 14);
    arr1 = [
      "Hans",
      tmp1
    ];
    tmp2 = NofibPrelude.list(1, 18, i, 20, 21, 19, 34, 8, 16, 21);
    arr2 = [
      "Phil",
      tmp2
    ];
    tmp3 = NofibPrelude.list(9, 23, 17, 54, i, 41, 9, 18, 14);
    arr3 = [
      "Kevin",
      tmp3
    ];
    return NofibPrelude.list(arr, arr1, arr2, arr3)
  } 
  static testAwards_nofib(n) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (x2) {
      let tmp2, tmp3, tmp4;
      tmp2 = NofibPrelude.intMod(x2, 100);
      tmp3 = awards.competitors(tmp2);
      tmp4 = awards.findallawards(tmp3);
      return Predef.print(tmp4)
    });
    tmp = lambda;
    tmp1 = enumFromTo_inst_9_tsni(1, n);
    return map_inst_16_tsni(tmp, tmp1)
  } 
  static main() {
    return testAwards_nofib_inst_10_tsni(100)
  }
  static toString() { return "awards"; }
});
let awards = awards1; export default awards;
