import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let awards1, map_inst_0_1_tsni, sort_inst_2_3_tsni, qsort_inst_2_3_4_tsni, qpart_inst_2_3_4_tsni, rqsort_inst_2_3_4_tsni, rqpart_inst_2_3_4_tsni, perms_inst_2_5_tsni, map_inst_2_5_1_tsni, map_inst_2_6_tsni, awards_inst_7_8_tsni, perms_inst_7_8_5_tsni, map_inst_7_8_5_1_tsni, sort_inst_7_8_3_tsni, qsort_inst_7_8_3_4_tsni, qpart_inst_7_8_3_4_tsni, rqsort_inst_7_8_3_4_tsni, rqpart_inst_7_8_3_4_tsni, map_inst_7_8_6_tsni, findawards_inst_9_10_tsni, awards_inst_9_10_8_tsni, sort_inst_9_10_8_3_tsni, qsort_inst_9_10_8_3_4_tsni, qpart_inst_9_10_8_3_4_tsni, rqsort_inst_9_10_8_3_4_tsni, rqpart_inst_9_10_8_3_4_tsni, perms_inst_9_10_8_5_tsni, map_inst_9_10_8_5_1_tsni, map_inst_9_10_8_6_tsni, findallawards_inst_11_12_tsni, findawards_inst_11_12_10_tsni, awards_inst_11_12_10_8_tsni, perms_inst_11_12_10_8_5_tsni, map_inst_11_12_10_8_5_1_tsni, sort_inst_11_12_10_8_3_tsni, qsort_inst_11_12_10_8_3_4_tsni, qpart_inst_11_12_10_8_3_4_tsni, rqsort_inst_11_12_10_8_3_4_tsni, rqpart_inst_11_12_10_8_3_4_tsni, map_inst_11_12_10_8_6_tsni, enumFromTo_inst_11_13_tsni, testAwards_nofib_inst_14_15_tsni, enumFromTo_inst_14_15_13_tsni, findallawards_inst_14_15_12_tsni, findawards_inst_14_15_12_10_tsni, awards_inst_14_15_12_10_8_tsni, sort_inst_14_15_12_10_8_3_tsni, qsort_inst_14_15_12_10_8_3_4_tsni, qpart_inst_14_15_12_10_8_3_4_tsni, rqsort_inst_14_15_12_10_8_3_4_tsni, rqpart_inst_14_15_12_10_8_3_4_tsni, perms_inst_14_15_12_10_8_5_tsni, map_inst_14_15_12_10_8_5_1_tsni, map_inst_14_15_12_10_8_6_tsni, append_inst_0_16_tsni, map_inst_2_17_tsni, append_inst_2_5_16_tsni, filter_inst_2_18_tsni, append_inst_7_8_5_16_tsni, map_inst_7_8_17_tsni, filter_inst_7_8_18_tsni, map_inst_9_10_8_17_tsni, append_inst_9_10_8_5_16_tsni, filter_inst_9_10_8_18_tsni, append_inst_11_12_10_8_5_16_tsni, map_inst_11_12_10_8_17_tsni, filter_inst_11_12_10_8_18_tsni, map_inst_11_19_tsni, map_inst_14_15_19_tsni, map_inst_14_15_12_10_8_17_tsni, append_inst_14_15_12_10_8_5_16_tsni, filter_inst_14_15_12_10_8_18_tsni, match_xs_arm_Cons_inst_2_17_tsni, match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni, match_xs_arm_Cons_inst_7_8_17_tsni, match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni, match_xs_arm_Cons_inst_9_10_8_17_tsni, match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni, match_xs_arm_Cons_inst_11_12_10_8_17_tsni, match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni, match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni, match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni;
match_xs_arm_Cons_inst_2_17_tsni = function match_xs_arm_Cons_inst_2_17_tsni(f, _deforest_Cons_head_inst_2_17_tsni, _deforest_Cons_tail_inst_2_17_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_2_17_tsni;
  param1 = _deforest_Cons_tail_inst_2_17_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_2_17_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni = function match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni(atleast, _deforest_Deforest_Arr_2_0_inst_2_tsni, _deforest_Deforest_Arr_2_1_inst_2_tsni) {
  let first1, first0, name, threshold, tmp, tmp1, lambda;
  first0 = _deforest_Deforest_Arr_2_0_inst_2_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_2_tsni;
  name = first0;
  threshold = first1;
  tmp = atleast(threshold);
  tmp1 = sort_inst_2_3_tsni(tmp);
  lambda = (undefined, function (ps) {
    let arr;
    arr = [
      name,
      ps
    ];
    return arr
  });
  return map_inst_2_17_tsni(lambda, tmp1)
};
match_xs_arm_Cons_inst_7_8_17_tsni = function match_xs_arm_Cons_inst_7_8_17_tsni(f, _deforest_Cons_head_inst_7_8_17_tsni, _deforest_Cons_tail_inst_7_8_17_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_7_8_17_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_17_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_7_8_17_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni = function match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni(atleast, _deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, name, threshold, tmp, tmp1, lambda;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  name = first0;
  threshold = first1;
  tmp = atleast(threshold);
  tmp1 = sort_inst_7_8_3_tsni(tmp);
  lambda = (undefined, function (ps) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = name;
    _deforest_Deforest_Arr_2_1 = ps;
    arr = (scores) => {
      let first11, first01, award, first12, first02, sum_, perm, arr1, arr2, tmp2, tmp3;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      award = first01;
      if (globalThis.Array.isArray(first11) && first11.length === 2) {
        first02 = first11[0];
        first12 = first11[1];
        sum_ = first02;
        perm = first12;
        arr1 = [
          sum_,
          perm
        ];
        arr2 = [
          award,
          arr1
        ];
        tmp2 = awards.listDiff(scores, perm);
        tmp3 = awards.findawards(tmp2);
        return NofibPrelude.Cons(arr2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  });
  return map_inst_7_8_17_tsni(lambda, tmp1)
};
match_xs_arm_Cons_inst_9_10_8_17_tsni = function match_xs_arm_Cons_inst_9_10_8_17_tsni(f, _deforest_Cons_head_inst_9_10_8_17_tsni, _deforest_Cons_tail_inst_9_10_8_17_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_9_10_8_17_tsni;
  param1 = _deforest_Cons_tail_inst_9_10_8_17_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_9_10_8_17_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni = function match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni(atleast, _deforest_Deforest_Arr_2_0_inst_9_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_9_10_8_tsni) {
  let first1, first0, name, threshold, tmp, tmp1, lambda;
  first0 = _deforest_Deforest_Arr_2_0_inst_9_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_9_10_8_tsni;
  name = first0;
  threshold = first1;
  tmp = atleast(threshold);
  tmp1 = sort_inst_9_10_8_3_tsni(tmp);
  lambda = (undefined, function (ps) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = name;
    _deforest_Deforest_Arr_2_1 = ps;
    arr = (scores) => {
      let first11, first01, award, first12, first02, sum_, perm, arr1, arr2, tmp2, tmp3;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      award = first01;
      if (globalThis.Array.isArray(first11) && first11.length === 2) {
        first02 = first11[0];
        first12 = first11[1];
        sum_ = first02;
        perm = first12;
        arr1 = [
          sum_,
          perm
        ];
        arr2 = [
          award,
          arr1
        ];
        tmp2 = awards.listDiff(scores, perm);
        tmp3 = findawards_inst_9_10_tsni(tmp2);
        return NofibPrelude.Cons(arr2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  });
  return map_inst_9_10_8_17_tsni(lambda, tmp1)
};
match_xs_arm_Cons_inst_11_12_10_8_17_tsni = function match_xs_arm_Cons_inst_11_12_10_8_17_tsni(f, _deforest_Cons_head_inst_11_12_10_8_17_tsni, _deforest_Cons_tail_inst_11_12_10_8_17_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_11_12_10_8_17_tsni;
  param1 = _deforest_Cons_tail_inst_11_12_10_8_17_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_11_12_10_8_17_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni = function match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(atleast, _deforest_Deforest_Arr_2_0_inst_11_12_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_10_8_tsni) {
  let first1, first0, name, threshold, tmp, tmp1, lambda;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_10_8_tsni;
  name = first0;
  threshold = first1;
  tmp = atleast(threshold);
  tmp1 = sort_inst_11_12_10_8_3_tsni(tmp);
  lambda = (undefined, function (ps) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = name;
    _deforest_Deforest_Arr_2_1 = ps;
    arr = (scores) => {
      let first11, first01, award, first12, first02, sum_, perm, arr1, arr2, tmp2, tmp3;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      award = first01;
      if (globalThis.Array.isArray(first11) && first11.length === 2) {
        first02 = first11[0];
        first12 = first11[1];
        sum_ = first02;
        perm = first12;
        arr1 = [
          sum_,
          perm
        ];
        arr2 = [
          award,
          arr1
        ];
        tmp2 = awards.listDiff(scores, perm);
        tmp3 = findawards_inst_11_12_10_tsni(tmp2);
        return NofibPrelude.Cons(arr2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  });
  return map_inst_11_12_10_8_17_tsni(lambda, tmp1)
};
match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni = function match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni(f, _deforest_Cons_head_inst_14_15_12_10_8_17_tsni, _deforest_Cons_tail_inst_14_15_12_10_8_17_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_14_15_12_10_8_17_tsni;
  param1 = _deforest_Cons_tail_inst_14_15_12_10_8_17_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_14_15_12_10_8_17_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni = function match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni(atleast, _deforest_Deforest_Arr_2_0_inst_14_15_12_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_14_15_12_10_8_tsni) {
  let first1, first0, name, threshold, tmp, tmp1, lambda;
  first0 = _deforest_Deforest_Arr_2_0_inst_14_15_12_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_14_15_12_10_8_tsni;
  name = first0;
  threshold = first1;
  tmp = atleast(threshold);
  tmp1 = sort_inst_14_15_12_10_8_3_tsni(tmp);
  lambda = (undefined, function (ps) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = name;
    _deforest_Deforest_Arr_2_1 = ps;
    arr = (scores) => {
      let first11, first01, award, first12, first02, sum_, perm, arr1, arr2, tmp2, tmp3;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      award = first01;
      if (globalThis.Array.isArray(first11) && first11.length === 2) {
        first02 = first11[0];
        first12 = first11[1];
        sum_ = first02;
        perm = first12;
        arr1 = [
          sum_,
          perm
        ];
        arr2 = [
          award,
          arr1
        ];
        tmp2 = awards.listDiff(scores, perm);
        tmp3 = findawards_inst_14_15_12_10_tsni(tmp2);
        return NofibPrelude.Cons(arr2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return arr
  });
  return map_inst_14_15_12_10_8_17_tsni(lambda, tmp1)
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
      tmp2 = append_inst_0_16_tsni(xs2, ys);
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
sort_inst_2_3_tsni = function sort_inst_2_3_tsni(l) {
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
  return qsort_inst_2_3_4_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_2_3_4_tsni = function qsort_inst_2_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_2_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_2_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_2_3_4_tsni = function qpart_inst_2_3_4_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_2_3_4_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_2_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_2_3_4_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_2_3_4_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_2_3_4_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_2_3_4_tsni = function rqsort_inst_2_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_2_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_2_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_2_3_4_tsni = function rqpart_inst_2_3_4_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_2_3_4_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_2_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_2_3_4_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_2_3_4_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_2_3_4_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
perms_inst_2_5_tsni = function perms_inst_2_5_tsni(m, nns) {
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
        tmp1 = perms_inst_2_5_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_2_5_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_2_5_tsni(m, ns);
        return append_inst_2_5_16_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_2_5_1_tsni = function map_inst_2_5_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_5_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_2_5_16_tsni(xs2, ys);
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
map_inst_2_6_tsni = function map_inst_2_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_6_tsni(f, xs1);
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
        tmp2 = filter_inst_2_18_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_2_18_tsni(f1, t)
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
awards_inst_7_8_tsni = function awards_inst_7_8_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
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
    return filter_inst_7_8_18_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    return runtime.safeCall(name_threshold(atleast))
  };
  tmp = perms_inst_7_8_5_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_7_8_6_tsni(lambda, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  arr = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni(atleast1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp2 = award(arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni(atleast1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp3 = award(arr1);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  arr2 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_7_8_tsni(atleast1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
perms_inst_7_8_5_tsni = function perms_inst_7_8_5_tsni(m, nns) {
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
        tmp1 = perms_inst_7_8_5_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_7_8_5_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_7_8_5_tsni(m, ns);
        return append_inst_7_8_5_16_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_7_8_5_1_tsni = function map_inst_7_8_5_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_8_5_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_7_8_5_16_tsni(xs2, ys);
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
sort_inst_7_8_3_tsni = function sort_inst_7_8_3_tsni(l) {
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
  return qsort_inst_7_8_3_4_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_7_8_3_4_tsni = function qsort_inst_7_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_7_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_7_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_7_8_3_4_tsni = function qpart_inst_7_8_3_4_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_7_8_3_4_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_7_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_7_8_3_4_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_7_8_3_4_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_7_8_3_4_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_7_8_3_4_tsni = function rqsort_inst_7_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_7_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_7_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_7_8_3_4_tsni = function rqpart_inst_7_8_3_4_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_7_8_3_4_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_7_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_7_8_3_4_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_7_8_3_4_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_7_8_3_4_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_7_8_6_tsni = function map_inst_7_8_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_8_6_tsni(f, xs1);
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
        tmp2 = filter_inst_7_8_18_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_7_8_18_tsni(f1, t)
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
findawards_inst_9_10_tsni = function findawards_inst_9_10_tsni(scores) {
  let scrut, param0, param1, head_, tail_;
  scrut = awards_inst_9_10_8_tsni(scores);
  if (scrut instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    head_ = param0;
    tail_ = param1;
    return runtime.safeCall(head_(scores))
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_9_10_8_tsni = function awards_inst_9_10_8_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
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
    return filter_inst_9_10_8_18_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    return runtime.safeCall(name_threshold(atleast))
  };
  tmp = perms_inst_9_10_8_5_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_9_10_8_6_tsni(lambda, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  arr = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp2 = award(arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp3 = award(arr1);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  arr2 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_9_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
sort_inst_9_10_8_3_tsni = function sort_inst_9_10_8_3_tsni(l) {
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
  return qsort_inst_9_10_8_3_4_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_9_10_8_3_4_tsni = function qsort_inst_9_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_9_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_9_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_9_10_8_3_4_tsni = function qpart_inst_9_10_8_3_4_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_9_10_8_3_4_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_9_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_9_10_8_3_4_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_9_10_8_3_4_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_9_10_8_3_4_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_9_10_8_3_4_tsni = function rqsort_inst_9_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_9_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_9_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_9_10_8_3_4_tsni = function rqpart_inst_9_10_8_3_4_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_9_10_8_3_4_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_9_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_9_10_8_3_4_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_9_10_8_3_4_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_9_10_8_3_4_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
perms_inst_9_10_8_5_tsni = function perms_inst_9_10_8_5_tsni(m, nns) {
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
        tmp1 = perms_inst_9_10_8_5_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_9_10_8_5_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_9_10_8_5_tsni(m, ns);
        return append_inst_9_10_8_5_16_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_9_10_8_5_1_tsni = function map_inst_9_10_8_5_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_10_8_5_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_9_10_8_5_16_tsni(xs2, ys);
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
map_inst_9_10_8_6_tsni = function map_inst_9_10_8_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_10_8_6_tsni(f, xs1);
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
        tmp2 = filter_inst_9_10_8_18_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_9_10_8_18_tsni(f1, t)
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
findallawards_inst_11_12_tsni = function findallawards_inst_11_12_tsni(competitors) {
  let tmp, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, name, scores, tmp1, arr;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      name = first0;
      scores = first1;
      tmp1 = findawards_inst_11_12_10_tsni(scores);
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
findawards_inst_11_12_10_tsni = function findawards_inst_11_12_10_tsni(scores) {
  let scrut, param0, param1, head_, tail_;
  scrut = awards_inst_11_12_10_8_tsni(scores);
  if (scrut instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    head_ = param0;
    tail_ = param1;
    return runtime.safeCall(head_(scores))
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_11_12_10_8_tsni = function awards_inst_11_12_10_8_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
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
    return filter_inst_11_12_10_8_18_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    return runtime.safeCall(name_threshold(atleast))
  };
  tmp = perms_inst_11_12_10_8_5_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_11_12_10_8_6_tsni(lambda, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  arr = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp2 = award(arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp3 = award(arr1);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  arr2 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
perms_inst_11_12_10_8_5_tsni = function perms_inst_11_12_10_8_5_tsni(m, nns) {
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
        tmp1 = perms_inst_11_12_10_8_5_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_11_12_10_8_5_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_11_12_10_8_5_tsni(m, ns);
        return append_inst_11_12_10_8_5_16_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_11_12_10_8_5_1_tsni = function map_inst_11_12_10_8_5_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_11_12_10_8_5_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_11_12_10_8_5_16_tsni(xs2, ys);
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
sort_inst_11_12_10_8_3_tsni = function sort_inst_11_12_10_8_3_tsni(l) {
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
  return qsort_inst_11_12_10_8_3_4_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_11_12_10_8_3_4_tsni = function qsort_inst_11_12_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_11_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_11_12_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_11_12_10_8_3_4_tsni = function qpart_inst_11_12_10_8_3_4_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_11_12_10_8_3_4_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_11_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_11_12_10_8_3_4_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_11_12_10_8_3_4_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_11_12_10_8_3_4_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_11_12_10_8_3_4_tsni = function rqsort_inst_11_12_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_11_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_11_12_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_11_12_10_8_3_4_tsni = function rqpart_inst_11_12_10_8_3_4_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_11_12_10_8_3_4_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_11_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_11_12_10_8_3_4_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_11_12_10_8_3_4_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_11_12_10_8_3_4_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_11_12_10_8_6_tsni = function map_inst_11_12_10_8_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_11_12_10_8_6_tsni(f, xs1);
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
        tmp2 = filter_inst_11_12_10_8_18_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_11_12_10_8_18_tsni(f1, t)
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
enumFromTo_inst_11_13_tsni = function enumFromTo_inst_11_13_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_13_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_11_19_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testAwards_nofib_inst_14_15_tsni = function testAwards_nofib_inst_14_15_tsni(n) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (x) {
    let tmp2, tmp3, tmp4;
    tmp2 = NofibPrelude.intMod(x, 100);
    tmp3 = awards.competitors(tmp2);
    tmp4 = findallawards_inst_14_15_12_tsni(tmp3);
    return Predef.print(tmp4)
  });
  tmp = lambda;
  tmp1 = enumFromTo_inst_14_15_13_tsni(1, n);
  return map_inst_14_15_19_tsni(tmp, tmp1)
};
enumFromTo_inst_14_15_13_tsni = function enumFromTo_inst_14_15_13_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_14_15_13_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_14_15_19_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
findallawards_inst_14_15_12_tsni = function findallawards_inst_14_15_12_tsni(competitors) {
  let tmp, lambda;
  lambda = (undefined, function (caseScrut) {
    let first1, first0, name, scores, tmp1, arr;
    if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
      first0 = caseScrut[0];
      first1 = caseScrut[1];
      name = first0;
      scores = first1;
      tmp1 = findawards_inst_14_15_12_10_tsni(scores);
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
findawards_inst_14_15_12_10_tsni = function findawards_inst_14_15_12_10_tsni(scores) {
  let scrut, param0, param1, head_, tail_;
  scrut = awards_inst_14_15_12_10_8_tsni(scores);
  if (scrut instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    head_ = param0;
    tail_ = param1;
    return runtime.safeCall(head_(scores))
  } else {
    throw new globalThis.Error("match error");
  }
};
awards_inst_14_15_12_10_8_tsni = function awards_inst_14_15_12_10_8_tsni(scores) {
  let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
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
    return filter_inst_14_15_12_10_8_18_tsni(tmp6, sumscores)
  };
  award = function award(name_threshold) {
    return runtime.safeCall(name_threshold(atleast))
  };
  tmp = perms_inst_14_15_12_10_8_5_tsni(3, scores);
  lambda = (undefined, function (p) {
    let tmp6, arr3;
    tmp6 = NofibPrelude.sum(p);
    arr3 = [
      tmp6,
      p
    ];
    return arr3
  });
  tmp1 = map_inst_14_15_12_10_8_6_tsni(lambda, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  arr = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  tmp2 = award(arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp3 = award(arr1);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  arr2 = (atleast1) => {
    return match_name_threshold_arm_Deforest_Arr_2_inst_14_15_12_10_8_tsni(atleast1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp4 = award(arr2);
  tmp5 = NofibPrelude.append(tmp3, tmp4);
  return NofibPrelude.append(tmp2, tmp5)
};
sort_inst_14_15_12_10_8_3_tsni = function sort_inst_14_15_12_10_8_3_tsni(l) {
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
  return qsort_inst_14_15_12_10_8_3_4_tsni(lambda, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_14_15_12_10_8_3_4_tsni = function qsort_inst_14_15_12_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_14_15_12_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_14_15_12_10_8_3_4_tsni = function qpart_inst_14_15_12_10_8_3_4_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_14_15_12_10_8_3_4_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_14_15_12_10_8_3_4_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_14_15_12_10_8_3_4_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_14_15_12_10_8_3_4_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_14_15_12_10_8_3_4_tsni = function rqsort_inst_14_15_12_10_8_3_4_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_14_15_12_10_8_3_4_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_14_15_12_10_8_3_4_tsni = function rqpart_inst_14_15_12_10_8_3_4_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_14_15_12_10_8_3_4_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_14_15_12_10_8_17_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_14_15_12_10_8_3_4_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_14_15_12_10_8_3_4_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_14_15_12_10_8_3_4_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
perms_inst_14_15_12_10_8_5_tsni = function perms_inst_14_15_12_10_8_5_tsni(m, nns) {
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
        tmp1 = perms_inst_14_15_12_10_8_5_tsni(tmp, ns);
        lambda1 = (undefined, function (x) {
          return NofibPrelude.Cons(n, x)
        });
        tmp2 = map_inst_14_15_12_10_8_5_1_tsni(lambda1, tmp1);
        tmp3 = perms_inst_14_15_12_10_8_5_tsni(m, ns);
        return append_inst_14_15_12_10_8_5_16_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_14_15_12_10_8_5_1_tsni = function map_inst_14_15_12_10_8_5_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_15_12_10_8_5_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_14_15_12_10_8_5_16_tsni(xs2, ys);
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
map_inst_14_15_12_10_8_6_tsni = function map_inst_14_15_12_10_8_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_14_15_12_10_8_6_tsni(f, xs1);
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
        tmp2 = filter_inst_14_15_12_10_8_18_tsni(f1, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_14_15_12_10_8_18_tsni(f1, t)
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
append_inst_0_16_tsni = function append_inst_0_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_2_17_tsni = function map_inst_2_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_2_5_16_tsni = function append_inst_2_5_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_2_18_tsni = function filter_inst_2_18_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
append_inst_7_8_5_16_tsni = function append_inst_7_8_5_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_7_8_17_tsni = function map_inst_7_8_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_7_8_18_tsni = function filter_inst_7_8_18_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_9_10_8_17_tsni = function map_inst_9_10_8_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_9_10_8_5_16_tsni = function append_inst_9_10_8_5_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_9_10_8_18_tsni = function filter_inst_9_10_8_18_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
append_inst_11_12_10_8_5_16_tsni = function append_inst_11_12_10_8_5_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_11_12_10_8_17_tsni = function map_inst_11_12_10_8_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
filter_inst_11_12_10_8_18_tsni = function filter_inst_11_12_10_8_18_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_11_19_tsni = function map_inst_11_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_14_15_19_tsni = function map_inst_14_15_19_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_14_15_12_10_8_17_tsni = function map_inst_14_15_12_10_8_17_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_14_15_12_10_8_5_16_tsni = function append_inst_14_15_12_10_8_5_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_14_15_12_10_8_18_tsni = function filter_inst_14_15_12_10_8_18_tsni(f, ls) {
  return runtime.safeCall(ls(f))
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
          tmp1 = awards.perms(tmp, ns);
          lambda1 = (undefined, function (x2) {
            return NofibPrelude.Cons(n, x2)
          });
          tmp2 = map_inst_0_1_tsni(lambda1, tmp1);
          tmp3 = awards.perms(m, ns);
          return append_inst_0_16_tsni(tmp2, tmp3)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static awards(scores) {
    let award, atleast, sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
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
      return filter_inst_2_18_tsni(tmp6, sumscores)
    };
    award = function award(name_threshold) {
      return runtime.safeCall(name_threshold(atleast))
    };
    tmp = perms_inst_2_5_tsni(3, scores);
    lambda = (undefined, function (p) {
      let tmp6, arr3;
      tmp6 = NofibPrelude.sum(p);
      arr3 = [
        tmp6,
        p
      ];
      return arr3
    });
    tmp1 = map_inst_2_6_tsni(lambda, tmp);
    sumscores = tmp1;
    _deforest_Deforest_Arr_2_0 = "Gold";
    _deforest_Deforest_Arr_2_1 = 70;
    arr = (atleast1) => {
      return match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni(atleast1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    tmp2 = award(arr);
    _deforest_Deforest_Arr_2_01 = "Silver";
    _deforest_Deforest_Arr_2_11 = 60;
    arr1 = (atleast1) => {
      return match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni(atleast1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    tmp3 = award(arr1);
    _deforest_Deforest_Arr_2_02 = "Bronze";
    _deforest_Deforest_Arr_2_12 = 50;
    arr2 = (atleast1) => {
      return match_name_threshold_arm_Deforest_Arr_2_inst_2_tsni(atleast1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
    };
    tmp4 = award(arr2);
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return NofibPrelude.append(tmp2, tmp5)
  } 
  static findawards(scores1) {
    let scrut, param0, param1, head_, tail_;
    scrut = awards_inst_7_8_tsni(scores1);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      head_ = param0;
      tail_ = param1;
      return runtime.safeCall(head_(scores1))
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
        tmp1 = findawards_inst_9_10_tsni(scores2);
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
      tmp4 = findallawards_inst_11_12_tsni(tmp3);
      return Predef.print(tmp4)
    });
    tmp = lambda;
    tmp1 = enumFromTo_inst_11_13_tsni(1, n);
    return map_inst_11_19_tsni(tmp, tmp1)
  } 
  static main() {
    return testAwards_nofib_inst_14_15_tsni(100)
  }
  static toString() { return "awards"; }
});
let awards = awards1; export default awards;
