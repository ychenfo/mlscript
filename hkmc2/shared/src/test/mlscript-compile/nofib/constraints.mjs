import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let constraints1, map_inst_0_tsni, leaves_inst_1_tsni, map_inst_1_0_tsni, filter_inst_2_tsni, leaves_inst_3_tsni, map_inst_3_0_tsni, labelInconsistencies_inst_4_tsni, earliestInconsistency_inst_4_5_tsni, filter_inst_4_5_2_tsni, filter_inst_6_tsni, leaves_inst_7_tsni, map_inst_7_0_tsni, lookupCache_inst_8_tsni, bj_inst_9_tsni, map_inst_9_10_tsni, bt_inst_11_tsni, earliestInconsistency_inst_11_12_tsni, filter_inst_11_12_2_tsni, bj__inst_13_tsni, map_inst_13_14_tsni, bt_inst_15_tsni, earliestInconsistency_inst_15_12_tsni, filter_inst_15_12_2_tsni, lookupCache_inst_16_tsni, search_inst_17_tsni, leaves_inst_17_7_tsni, map_inst_17_7_0_tsni, filter_inst_17_6_tsni, bt_inst_18_tsni, earliestInconsistency_inst_18_12_tsni, filter_inst_18_12_2_tsni, bm_inst_19_tsni, lookupCache_inst_19_8_tsni, bjbt_inst_20_tsni, bt_inst_20_11_tsni, earliestInconsistency_inst_20_11_12_tsni, filter_inst_20_11_12_2_tsni, bj_inst_20_9_tsni, map_inst_20_9_10_tsni, bjbt__inst_21_tsni, bt_inst_21_15_tsni, earliestInconsistency_inst_21_15_12_tsni, filter_inst_21_15_12_2_tsni, bj__inst_21_13_tsni, map_inst_21_13_14_tsni, fc_inst_22_tsni, lookupCache_inst_22_16_tsni, testConstraints_nofib_inst_23_tsni, fc_inst_23_22_tsni, lookupCache_inst_23_22_16_tsni, bjbt__inst_23_21_tsni, bj__inst_23_21_13_tsni, map_inst_23_21_13_14_tsni, bt_inst_23_21_15_tsni, earliestInconsistency_inst_23_21_15_12_tsni, filter_inst_23_21_15_12_2_tsni, bjbt_inst_23_20_tsni, bj_inst_23_20_9_tsni, map_inst_23_20_9_10_tsni, bt_inst_23_20_11_tsni, earliestInconsistency_inst_23_20_11_12_tsni, filter_inst_23_20_11_12_2_tsni, bm_inst_23_19_tsni, lookupCache_inst_23_19_8_tsni, bt_inst_23_18_tsni, earliestInconsistency_inst_23_18_12_tsni, filter_inst_23_18_12_2_tsni, try__inst_23_24_tsni, search_inst_23_24_17_tsni, leaves_inst_23_24_17_7_tsni, map_inst_23_24_17_7_0_tsni, filter_inst_23_24_17_6_tsni, concat_inst_25_tsni, concat_inst_1_25_tsni, concat_inst_3_25_tsni, map_inst_26_tsni, concat_inst_7_25_tsni, checkComplete_inst_8_27_tsni, complete_inst_8_27_28_tsni, maxLevel_inst_8_27_28_29_tsni, combine_inst_9_30_tsni, combine_inst_13_31_tsni, checkComplete_inst_16_27_tsni, complete_inst_16_27_28_tsni, maxLevel_inst_16_27_28_29_tsni, concat_inst_17_7_25_tsni, map_inst_17_26_tsni, map_inst_32_tsni, checkComplete_inst_19_8_27_tsni, complete_inst_19_8_27_28_tsni, maxLevel_inst_19_8_27_28_29_tsni, combine_inst_20_9_30_tsni, combine_inst_21_13_31_tsni, checkComplete_inst_22_16_27_tsni, complete_inst_22_16_27_28_tsni, maxLevel_inst_22_16_27_28_29_tsni, checkComplete_inst_23_22_16_27_tsni, complete_inst_23_22_16_27_28_tsni, maxLevel_inst_23_22_16_27_28_29_tsni, combine_inst_23_21_13_31_tsni, combine_inst_23_20_9_30_tsni, checkComplete_inst_23_19_8_27_tsni, complete_inst_23_19_8_27_28_tsni, maxLevel_inst_23_19_8_27_28_29_tsni, concat_inst_23_24_17_7_25_tsni, map_inst_23_24_17_26_tsni, map_inst_23_32_tsni, match_scrut_arm_default_inst_11_tsni, match_scrut_arm_default_inst_15_tsni, match_xs_arm_Cons_inst_32_tsni, match_scrut_arm_default_inst_18_tsni, match_scrut_arm_default_inst_20_11_tsni, match_scrut_arm_default_inst_21_15_tsni, match_scrut_arm_default_inst_23_21_15_tsni, match_scrut_arm_default_inst_23_20_11_tsni, match_scrut_arm_default_inst_23_18_tsni, match_xs_arm_Cons_inst_23_32_tsni;
match_scrut_arm_default_inst_11_tsni = function match_scrut_arm_default_inst_11_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_15_tsni = function match_scrut_arm_default_inst_15_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_xs_arm_Cons_inst_32_tsni = function match_xs_arm_Cons_inst_32_tsni(f, _deforest_Cons_head_inst_32_tsni, _deforest_Cons_tail_inst_32_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_32_tsni;
  param1 = _deforest_Cons_tail_inst_32_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_32_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_scrut_arm_default_inst_18_tsni = function match_scrut_arm_default_inst_18_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_20_11_tsni = function match_scrut_arm_default_inst_20_11_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_21_15_tsni = function match_scrut_arm_default_inst_21_15_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_23_21_15_tsni = function match_scrut_arm_default_inst_23_21_15_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_23_20_11_tsni = function match_scrut_arm_default_inst_23_20_11_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_scrut_arm_default_inst_23_18_tsni = function match_scrut_arm_default_inst_23_18_tsni(csp, s) {
  let tmp;
  tmp = constraints.checkComplete(csp, s);
};
match_xs_arm_Cons_inst_23_32_tsni = function match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head_inst_23_32_tsni, _deforest_Cons_tail_inst_23_32_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_23_32_tsni;
  param1 = _deforest_Cons_tail_inst_23_32_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_32_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
map_inst_0_tsni = function map_inst_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_1_tsni = function leaves_inst_1_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_1_0_tsni(leaves_inst_1_tsni, cs);
      return concat_inst_1_25_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_1_0_tsni = function map_inst_1_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_1_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_1_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_2_tsni = function filter_inst_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = [
          tmp1,
          tmp2
        ];
        return runtime.safeCall(NofibPrelude.Some(arr))
      }
    } else {
      return filter_inst_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_3_tsni = function leaves_inst_3_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_3_0_tsni(leaves_inst_3_tsni, cs);
      return concat_inst_3_25_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_3_0_tsni = function map_inst_3_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_3_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
labelInconsistencies_inst_4_tsni = function labelInconsistencies_inst_4_tsni(csp, t) {
  let f2;
  f2 = function f2(s) {
    let tmp, arr;
    tmp = earliestInconsistency_inst_4_5_tsni(csp, s);
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f2, t)
};
earliestInconsistency_inst_4_5_tsni = function earliestInconsistency_inst_4_5_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_4_5_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_4_5_2_tsni = function filter_inst_4_5_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_4_5_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = [
          tmp1,
          tmp2
        ];
        return runtime.safeCall(NofibPrelude.Some(arr))
      }
    } else {
      return filter_inst_4_5_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_6_tsni = function filter_inst_6_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_6_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_26_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_6_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leaves_inst_7_tsni = function leaves_inst_7_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_7_0_tsni(leaves_inst_7_tsni, cs);
      return concat_inst_7_25_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_7_0_tsni = function map_inst_7_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_7_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookupCache_inst_8_tsni = function lookupCache_inst_8_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_8_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
bj_inst_9_tsni = function bj_inst_9_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_9_10_tsni(constraints.label, chs);
        tmp2 = combine_inst_9_30_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f6, t)
};
map_inst_9_10_tsni = function map_inst_9_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_9_30_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_11_tsni = function bt_inst_11_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_11_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_11_12_tsni = function earliestInconsistency_inst_11_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_11_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_11_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_11_12_2_tsni = function filter_inst_11_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_11_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_11_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_11_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bj__inst_13_tsni = function bj__inst_13_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_13_14_tsni(constraints.label, chs);
        tmp2 = combine_inst_13_31_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f7, t)
};
map_inst_13_14_tsni = function map_inst_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_13_31_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_15_tsni = function bt_inst_15_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_15_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_15_12_tsni = function earliestInconsistency_inst_15_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_15_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_15_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_15_12_2_tsni = function filter_inst_15_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_15_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_15_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_15_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookupCache_inst_16_tsni = function lookupCache_inst_16_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_16_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
search_inst_17_tsni = function search_inst_17_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
  tmp = constraints.mkTree(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  lambda = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownConflict(tmp5)
  });
  tmp2 = constraints.prune(lambda, tmp1);
  tmp3 = leaves_inst_17_7_tsni(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownSolution(tmp5)
  });
  tmp4 = filter_inst_17_6_tsni(lambda1, tmp3);
  return map_inst_17_26_tsni(NofibPrelude.fst, tmp4)
};
leaves_inst_17_7_tsni = function leaves_inst_17_7_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_17_7_0_tsni(leaves_inst_17_7_tsni, cs);
      return concat_inst_17_7_25_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_17_7_0_tsni = function map_inst_17_7_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_7_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_17_7_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_17_6_tsni = function filter_inst_17_6_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_17_6_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_17_26_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_17_6_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_18_tsni = function bt_inst_18_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_18_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_18_12_tsni = function earliestInconsistency_inst_18_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_18_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_18_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_18_12_2_tsni = function filter_inst_18_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_18_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_18_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_18_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bm_inst_19_tsni = function bm_inst_19_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = constraints.emptyTable(csp);
  tmp1 = constraints.cacheChecks(csp, tmp, t);
  tmp2 = lookupCache_inst_19_8_tsni(csp, tmp1);
  return constraints.mapTree(NofibPrelude.fst, tmp2)
};
lookupCache_inst_19_8_tsni = function lookupCache_inst_19_8_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_19_8_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
bjbt_inst_20_tsni = function bjbt_inst_20_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_20_11_tsni(csp, t);
  return bj_inst_20_9_tsni(csp, tmp)
};
bt_inst_20_11_tsni = function bt_inst_20_11_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_20_11_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_20_11_12_tsni = function earliestInconsistency_inst_20_11_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_20_11_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_20_11_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_20_11_12_2_tsni = function filter_inst_20_11_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_20_11_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_20_11_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_20_11_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bj_inst_20_9_tsni = function bj_inst_20_9_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_20_9_10_tsni(constraints.label, chs);
        tmp2 = combine_inst_20_9_30_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f6, t)
};
map_inst_20_9_10_tsni = function map_inst_20_9_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_9_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_20_9_30_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bjbt__inst_21_tsni = function bjbt__inst_21_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_21_15_tsni(csp, t);
  return bj__inst_21_13_tsni(csp, tmp)
};
bt_inst_21_15_tsni = function bt_inst_21_15_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_21_15_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_21_15_12_tsni = function earliestInconsistency_inst_21_15_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_21_15_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_21_15_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_21_15_12_2_tsni = function filter_inst_21_15_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_21_15_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_21_15_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_21_15_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bj__inst_21_13_tsni = function bj__inst_21_13_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_21_13_14_tsni(constraints.label, chs);
        tmp2 = combine_inst_21_13_31_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f7, t)
};
map_inst_21_13_14_tsni = function map_inst_21_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_21_13_31_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fc_inst_22_tsni = function fc_inst_22_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = constraints.emptyTable(csp);
  tmp1 = constraints.cacheChecks(csp, tmp, t);
  tmp2 = lookupCache_inst_22_16_tsni(csp, tmp1);
  return constraints.domainWipeout(csp, tmp2)
};
lookupCache_inst_22_16_tsni = function lookupCache_inst_22_16_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_22_16_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
testConstraints_nofib_inst_23_tsni = function testConstraints_nofib_inst_23_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  _deforest_Cons_head4 = fc_inst_23_22_tsni;
  _deforest_Cons_tail4 = (f) => {
    return NofibPrelude.Nil
  };
  tmp = (f) => {
    return match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = bjbt__inst_23_21_tsni;
  _deforest_Cons_tail3 = tmp;
  tmp1 = (f) => {
    return match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = bjbt_inst_23_20_tsni;
  _deforest_Cons_tail2 = tmp1;
  tmp2 = (f) => {
    return match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = bm_inst_23_19_tsni;
  _deforest_Cons_tail1 = tmp2;
  tmp3 = (f) => {
    return match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = bt_inst_23_18_tsni;
  _deforest_Cons_tail = tmp3;
  tmp4 = (f) => {
    return match_xs_arm_Cons_inst_23_32_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  };
  lambda = (undefined, function (x) {
    return try__inst_23_24_tsni(n, x)
  });
  return map_inst_23_32_tsni(lambda, tmp4)
};
fc_inst_23_22_tsni = function fc_inst_23_22_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = constraints.emptyTable(csp);
  tmp1 = constraints.cacheChecks(csp, tmp, t);
  tmp2 = lookupCache_inst_23_22_16_tsni(csp, tmp1);
  return constraints.domainWipeout(csp, tmp2)
};
lookupCache_inst_23_22_16_tsni = function lookupCache_inst_23_22_16_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_23_22_16_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
bjbt__inst_23_21_tsni = function bjbt__inst_23_21_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_23_21_15_tsni(csp, t);
  return bj__inst_23_21_13_tsni(csp, tmp)
};
bj__inst_23_21_13_tsni = function bj__inst_23_21_13_tsni(csp, t) {
  let f7;
  f7 = function f7(tp2, chs) {
    let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_23_21_13_14_tsni(constraints.label, chs);
        tmp2 = combine_inst_23_21_13_31_tsni(tmp1, NofibPrelude.Nil);
        cs_ = runtime.safeCall(constraints.Known(tmp2));
        scrut = constraints.knownConflict(cs_);
        if (scrut === true) {
          arr1 = [
            a,
            cs_
          ];
          return constraints.Node(arr1, NofibPrelude.Nil)
        } else {
          arr2 = [
            a,
            cs_
          ];
          return constraints.Node(arr2, chs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f7, t)
};
map_inst_23_21_13_14_tsni = function map_inst_23_21_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_21_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_23_21_13_31_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_23_21_15_tsni = function bt_inst_23_21_15_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_23_21_15_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_23_21_15_12_tsni = function earliestInconsistency_inst_23_21_15_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_23_21_15_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_23_21_15_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_23_21_15_12_2_tsni = function filter_inst_23_21_15_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_23_21_15_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_23_21_15_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_23_21_15_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bjbt_inst_23_20_tsni = function bjbt_inst_23_20_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_23_20_11_tsni(csp, t);
  return bj_inst_23_20_9_tsni(csp, tmp)
};
bj_inst_23_20_9_tsni = function bj_inst_23_20_9_tsni(csp, t) {
  let f6;
  f6 = function f6(tp2, chs) {
    let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
    if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
      first0 = tp2[0];
      first1 = tp2[1];
      a1 = first0;
      a = first0;
      if (first1 instanceof constraints.Known.class) {
        param0 = first1.vs;
        cs = param0;
        tmp = runtime.safeCall(constraints.Known(cs));
        arr = [
          a1,
          tmp
        ];
        return constraints.Node(arr, chs)
      } else if (first1 instanceof constraints.Unknown.class) {
        tmp1 = map_inst_23_20_9_10_tsni(constraints.label, chs);
        tmp2 = combine_inst_23_20_9_30_tsni(tmp1, NofibPrelude.Nil);
        tmp3 = runtime.safeCall(constraints.Known(tmp2));
        arr1 = [
          a,
          tmp3
        ];
        return constraints.Node(arr1, chs)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return constraints.foldTree(f6, t)
};
map_inst_23_20_9_10_tsni = function map_inst_23_20_9_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_20_9_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_23_20_9_30_tsni(css, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bt_inst_23_20_11_tsni = function bt_inst_23_20_11_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_23_20_11_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_23_20_11_12_tsni = function earliestInconsistency_inst_23_20_11_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_23_20_11_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_23_20_11_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_23_20_11_12_2_tsni = function filter_inst_23_20_11_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_23_20_11_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_23_20_11_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_23_20_11_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bm_inst_23_19_tsni = function bm_inst_23_19_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = constraints.emptyTable(csp);
  tmp1 = constraints.cacheChecks(csp, tmp, t);
  tmp2 = lookupCache_inst_23_19_8_tsni(csp, tmp1);
  return constraints.mapTree(NofibPrelude.fst, tmp2)
};
lookupCache_inst_23_19_8_tsni = function lookupCache_inst_23_19_8_tsni(csp, t) {
  let f5, lambda;
  f5 = function f5(csp1, tp) {
    let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
    if (globalThis.Array.isArray(tp) && tp.length === 2) {
      first0 = tp[0];
      first1 = tp[1];
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl1 = first1;
        arr = [
          NofibPrelude.Nil,
          constraints.Unknown
        ];
        arr1 = [
          arr,
          tbl1
        ];
        return arr1
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param0 = first0.head;
        param1 = first0.tail;
        a = param0;
        as_ = param1;
        tbl = first1;
        tmp = constraints.value(a);
        tmp1 = tmp - 1;
        tmp2 = NofibPrelude.head(tbl);
        tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
        tableEntry = tmp3;
        scrut = tableEntry === constraints.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp4 = () => {
            let param01, param11, param02, param12, v, t1;
            param01 = _deforest_Cons_head;
            param11 = _deforest_Cons_tail;
            if (param01 instanceof constraints.Assign.class) {
              param02 = param01.varr;
              param12 = param01.value;
              v = param02;
              t1 = param11;
              return v
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp5 = checkComplete_inst_23_19_8_27_tsni(csp1, tmp4);
        } else {
          tmp5 = tableEntry;
        }
        cs = tmp5;
        tmp6 = NofibPrelude.Cons(a, as_);
        arr2 = [
          tmp6,
          cs
        ];
        arr3 = [
          arr2,
          tbl
        ];
        return arr3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return f5(csp, x)
  });
  return constraints.mapTree(lambda, t)
};
bt_inst_23_18_tsni = function bt_inst_23_18_tsni(csp, t) {
  let f3;
  f3 = function f3(s) {
    let scrut, arr;
    scrut = earliestInconsistency_inst_23_18_12_tsni(csp, s);
    runtime.safeCall(scrut(csp, s));
    arr = [
      s,
      tmp
    ];
    return arr
  };
  return constraints.mapTree(f3, t)
};
earliestInconsistency_inst_23_18_12_tsni = function earliestInconsistency_inst_23_18_12_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (csp1, s) => {
        return match_scrut_arm_default_inst_23_18_tsni(csp1, s)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda = (undefined, function (x) {
        /* error */
      });
      scrut = filter_inst_23_18_12_2_tsni(lambda, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_23_18_12_2_tsni = function filter_inst_23_18_12_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (csp, s) => {
        return match_scrut_arm_default_inst_23_18_tsni(csp, s)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_23_18_12_2_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (csp, s) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = runtime.safeCall(constraints.Known(tmp4));
        };
        _deforest_Some_x = arr;
        return (csp, s) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(csp, s))
        }
      }
    } else {
      return filter_inst_23_18_12_2_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
try__inst_23_24_tsni = function try__inst_23_24_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = constraints.queens(n);
  tmp1 = search_inst_23_24_17_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_23_24_17_tsni = function search_inst_23_24_17_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
  tmp = constraints.mkTree(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  lambda = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownConflict(tmp5)
  });
  tmp2 = constraints.prune(lambda, tmp1);
  tmp3 = leaves_inst_23_24_17_7_tsni(tmp2);
  lambda1 = (undefined, function (x) {
    let tmp5;
    tmp5 = NofibPrelude.snd(x);
    return constraints.knownSolution(tmp5)
  });
  tmp4 = filter_inst_23_24_17_6_tsni(lambda1, tmp3);
  return map_inst_23_24_17_26_tsni(NofibPrelude.fst, tmp4)
};
leaves_inst_23_24_17_7_tsni = function leaves_inst_23_24_17_7_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_23_24_17_7_0_tsni(leaves_inst_23_24_17_7_tsni, cs);
      return concat_inst_23_24_17_7_25_tsni(tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_24_17_7_0_tsni = function map_inst_23_24_17_7_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_17_7_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_23_24_17_7_25_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
filter_inst_23_24_17_6_tsni = function filter_inst_23_24_17_6_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_23_24_17_6_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f1) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f1(x));
        tmp2 = map_inst_23_24_17_26_tsni(f1, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_23_24_17_6_tsni(f, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_25_tsni = function concat_inst_25_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_1_25_tsni = function concat_inst_1_25_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_3_25_tsni = function concat_inst_3_25_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_26_tsni = function map_inst_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_7_25_tsni = function concat_inst_7_25_tsni(ls) {
  return runtime.safeCall(ls())
};
checkComplete_inst_8_27_tsni = function checkComplete_inst_8_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_8_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_8_27_28_tsni = function complete_inst_8_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_8_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_8_27_28_29_tsni = function maxLevel_inst_8_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
combine_inst_9_30_tsni = function combine_inst_9_30_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_13_31_tsni = function combine_inst_13_31_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
checkComplete_inst_16_27_tsni = function checkComplete_inst_16_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_16_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_16_27_28_tsni = function complete_inst_16_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_16_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_16_27_28_29_tsni = function maxLevel_inst_16_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_17_7_25_tsni = function concat_inst_17_7_25_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_17_26_tsni = function map_inst_17_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_32_tsni = function map_inst_32_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_19_8_27_tsni = function checkComplete_inst_19_8_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_19_8_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_19_8_27_28_tsni = function complete_inst_19_8_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_19_8_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_19_8_27_28_29_tsni = function maxLevel_inst_19_8_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
combine_inst_20_9_30_tsni = function combine_inst_20_9_30_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_21_13_31_tsni = function combine_inst_21_13_31_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
checkComplete_inst_22_16_27_tsni = function checkComplete_inst_22_16_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_22_16_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_22_16_27_28_tsni = function complete_inst_22_16_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_22_16_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_22_16_27_28_29_tsni = function maxLevel_inst_22_16_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
checkComplete_inst_23_22_16_27_tsni = function checkComplete_inst_23_22_16_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_23_22_16_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_23_22_16_27_28_tsni = function complete_inst_23_22_16_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_23_22_16_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_23_22_16_27_28_29_tsni = function maxLevel_inst_23_22_16_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
combine_inst_23_21_13_31_tsni = function combine_inst_23_21_13_31_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_23_20_9_30_tsni = function combine_inst_23_20_9_30_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
checkComplete_inst_23_19_8_27_tsni = function checkComplete_inst_23_19_8_27_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_23_19_8_27_28_tsni(csp, s);
  if (scrut === true) {
    return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
  } else {
    return constraints.Unknown
  }
};
complete_inst_23_19_8_27_28_tsni = function complete_inst_23_19_8_27_28_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_23_19_8_27_28_29_tsni(s);
    return tmp == v
  } else {
    throw new globalThis.Error("match error");
  }
};
maxLevel_inst_23_19_8_27_28_29_tsni = function maxLevel_inst_23_19_8_27_28_29_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_23_24_17_7_25_tsni = function concat_inst_23_24_17_7_25_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_23_24_17_26_tsni = function map_inst_23_24_17_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_23_32_tsni = function map_inst_23_32_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class constraints {
  static {
    constraints1 = constraints;
    this.Assign = function Assign(varr1, value1) {
      return new Assign.class(varr1, value1);
    };
    this.Assign.class = class Assign {
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return "Assign(" + runtime.render(this.varr) + ", " + runtime.render(this.value) + ")"; }
    };
    this.CSP = function CSP(vars1, vals1, rel1) {
      return new CSP.class(vars1, vals1, rel1);
    };
    this.CSP.class = class CSP {
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return "CSP(" + runtime.render(this.vars) + ", " + runtime.render(this.vals) + ", " + runtime.render(this.rel) + ")"; }
    };
    this.Node = function Node(lab1, children1) {
      return new Node.class(lab1, children1);
    };
    this.Node.class = class Node {
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return "Node(" + runtime.render(this.lab) + ", " + runtime.render(this.children) + ")"; }
    };
    this.ConflictSet = class ConflictSet {
      constructor() {}
      toString() { return "ConflictSet"; }
    };
    this.Known = function Known(vs1) {
      return new Known.class(vs1);
    };
    this.Known.class = class Known extends constraints.ConflictSet {
      constructor(vs) {
        super();
        this.vs = vs;
      }
      toString() { return "Known(" + runtime.render(this.vs) + ")"; }
    };
    const Unknown$class = class Unknown extends constraints.ConflictSet {
      constructor() {
        super();
      }
      toString() { return "Unknown"; }
    };
    this.Unknown = new Unknown$class;
    this.Unknown.class = Unknown$class;
  }
  static qsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return constraints.qpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static qpart(le1, x, ls1, rlt, rge, r1) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      tmp = constraints.rqsort(le1, rge, r1);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return constraints.rqsort(le1, rlt, tmp1)
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      param0 = ls1.head;
      param1 = ls1.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le1(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return constraints.qpart(le1, x, ys, rlt, tmp2, r1)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return constraints.qpart(le1, x, ys, tmp3, rge, r1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqsort(le2, ls2, r2) {
    let param0, param1, x1, xs, x2;
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
        xs = param1;
        return constraints.rqpart(le2, x1, xs, NofibPrelude.Nil, NofibPrelude.Nil, r2)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqpart(le3, x1, ls3, rle, rgt, r3) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls3 instanceof NofibPrelude.Nil.class) {
      tmp = constraints.qsort(le3, rgt, r3);
      tmp1 = NofibPrelude.Cons(x1, tmp);
      return constraints.rqsort(le3, rle, tmp1)
    } else if (ls3 instanceof NofibPrelude.Cons.class) {
      param0 = ls3.head;
      param1 = ls3.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le3(y, x1));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return constraints.rqpart(le3, x1, ys, tmp2, rgt, r3)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return constraints.rqpart(le3, x1, ys, rle, tmp3, r3)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static level(a) {
    let param0, param1, v;
    if (a instanceof constraints.Assign.class) {
      param0 = a.varr;
      param1 = a.value;
      v = param0;
      return v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static value(a1) {
    let param0, param1, v;
    if (a1 instanceof constraints.Assign.class) {
      param0 = a1.varr;
      param1 = a1.value;
      v = param1;
      return v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static maxLevel(ls4) {
    let param0, param1, param01, param11, v, t;
    if (ls4 instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls4 instanceof NofibPrelude.Cons.class) {
      param0 = ls4.head;
      param1 = ls4.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        v = param01;
        t = param1;
        return v
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static complete(csp, s) {
    let param0, param1, param2, v, tmp;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      v = param0;
      tmp = constraints.maxLevel(s);
      return tmp == v
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static safe(as1, as2) {
    let param0, param1, i, m, param01, param11, j, n;
    if (as1 instanceof constraints.Assign.class) {
      param0 = as1.varr;
      param1 = as1.value;
      i = param0;
      m = param1;
      if (as2 instanceof constraints.Assign.class) {
        param01 = as2.varr;
        param11 = as2.value;
        j = param01;
        n = param11;
        /* error */
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static queens(n) {
    return runtime.safeCall(constraints.CSP(n, n, constraints.safe))
  } 
  static label(n1) {
    let param0, param1, l;
    if (n1 instanceof constraints.Node.class) {
      param0 = n1.lab;
      param1 = n1.children;
      l = param0;
      return l
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mapTree(f, n2) {
    let param0, param1, l, c, tmp, tmp1, lambda;
    if (n2 instanceof constraints.Node.class) {
      param0 = n2.lab;
      param1 = n2.children;
      l = param0;
      c = param1;
      tmp = runtime.safeCall(f(l));
      lambda = (undefined, function (x2) {
        return constraints.mapTree(f, x2)
      });
      tmp1 = NofibPrelude.map(lambda, c);
      return constraints.Node(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static foldTree(f1, n3) {
    let param0, param1, l, c, tmp, lambda;
    if (n3 instanceof constraints.Node.class) {
      param0 = n3.lab;
      param1 = n3.children;
      l = param0;
      c = param1;
      lambda = (undefined, function (x2) {
        return constraints.foldTree(f1, x2)
      });
      tmp = NofibPrelude.map(lambda, c);
      return runtime.safeCall(f1(l, tmp))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static filterTree(p, t) {
    let f11;
    f11 = function f1(a2, cs) {
      let tmp, lambda;
      lambda = (undefined, function (x2) {
        let tmp1;
        tmp1 = constraints.label(x2);
        return runtime.safeCall(p(tmp1))
      });
      tmp = NofibPrelude.filter(lambda, cs);
      return constraints.Node(a2, tmp)
    };
    return constraints.foldTree(f11, t)
  } 
  static prune(p1, t1) {
    let lambda;
    lambda = (undefined, function (x2) {
      /* error */
    });
    return constraints.filterTree(lambda, t1)
  } 
  static leaves(t2) {
    let param0, param1, cs, leaf, tmp;
    if (t2 instanceof constraints.Node.class) {
      param0 = t2.lab;
      param1 = t2.children;
      leaf = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
      } else {
        cs = param1;
        tmp = map_inst_0_tsni(leaves_inst_1_tsni, cs);
        return concat_inst_25_tsni(tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static initTree(f2, x2) {
    let tmp, tmp1, lambda;
    tmp = runtime.safeCall(f2(x2));
    lambda = (undefined, function (y) {
      return constraints.initTree(f2, y)
    });
    tmp1 = NofibPrelude.map(lambda, tmp);
    return constraints.Node(x2, tmp1)
  } 
  static mkTree(csp1) {
    let next, param0, param1, param2, vars, vals, rel;
    if (csp1 instanceof constraints.CSP.class) {
      param0 = csp1.vars;
      param1 = csp1.vals;
      param2 = csp1.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      next = function next(ss) {
        let lscomp1, scrut, tmp, tmp1;
        tmp = constraints.maxLevel(ss);
        scrut = tmp < vars;
        if (scrut === true) {
          lscomp1 = function lscomp1(ls5) {
            let param01, param11, j, t11, tmp2, tmp3, tmp4, tmp5, tmp6;
            if (ls5 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls5 instanceof NofibPrelude.Cons.class) {
              param01 = ls5.head;
              param11 = ls5.tail;
              j = param01;
              t11 = param11;
              tmp2 = constraints.maxLevel(ss);
              tmp3 = tmp2 + 1;
              tmp4 = constraints.Assign(tmp3, j);
              tmp5 = NofibPrelude.Cons(tmp4, ss);
              tmp6 = lscomp1(t11);
              return NofibPrelude.Cons(tmp5, tmp6)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp1 = NofibPrelude.enumFromTo(1, vals);
          return lscomp1(tmp1)
        } else {
          return NofibPrelude.Nil
        }
      };
      return constraints.initTree(next, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static earliestInconsistency(csp2, aas) {
    let param0, param1, param2, vars, vals, rel, param01, param11, a2, as_, scrut, tmp, lambda;
    if (csp2 instanceof constraints.CSP.class) {
      param0 = csp2.vars;
      param1 = csp2.vals;
      param2 = csp2.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      if (aas instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (aas instanceof NofibPrelude.Cons.class) {
        param01 = aas.head;
        param11 = aas.tail;
        a2 = param01;
        as_ = param11;
        tmp = NofibPrelude.reverse(as_);
        lambda = (undefined, function (x3) {
          /* error */
        });
        scrut = filter_inst_2_tsni(lambda, tmp);
        return runtime.safeCall(scrut(a2))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static labelInconsistencies(csp3, t3) {
    let f21;
    f21 = function f2(s1) {
      let tmp, arr;
      tmp = constraints.earliestInconsistency(csp3, s1);
      arr = [
        s1,
        tmp
      ];
      return arr
    };
    return constraints.mapTree(f21, t3)
  } 
  static btsolver0(csp4) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    tmp = constraints.mkTree(csp4);
    tmp1 = labelInconsistencies_inst_4_tsni(csp4, tmp);
    lambda = (undefined, function (x3) {
      /* error */
    });
    tmp2 = constraints.prune(lambda, tmp1);
    tmp3 = constraints.mapTree(NofibPrelude.fst, tmp2);
    tmp4 = leaves_inst_3_tsni(tmp3);
    lambda1 = (undefined, function (x3) {
      return constraints.complete(csp4, x3)
    });
    return NofibPrelude.filter(lambda1, tmp4)
  } 
  static knownConflict(c) {
    let param0, param01, param1, a2, as_;
    if (c instanceof constraints.Known.class) {
      param0 = c.vs;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param1 = param0.tail;
        a2 = param01;
        as_ = param1;
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static knownSolution(c1) {
    let param0;
    if (c1 instanceof constraints.Known.class) {
      param0 = c1.vs;
      if (param0 instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static checkComplete(csp5, s1) {
    let scrut;
    scrut = constraints.complete(csp5, s1);
    if (scrut === true) {
      return runtime.safeCall(constraints.Known(NofibPrelude.Nil))
    } else {
      return constraints.Unknown
    }
  } 
  static search(labeler, csp6) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    tmp = constraints.mkTree(csp6);
    tmp1 = runtime.safeCall(labeler(csp6, tmp));
    lambda = (undefined, function (x3) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x3);
      return constraints.knownConflict(tmp5)
    });
    tmp2 = constraints.prune(lambda, tmp1);
    tmp3 = leaves_inst_7_tsni(tmp2);
    lambda1 = (undefined, function (x3) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x3);
      return constraints.knownSolution(tmp5)
    });
    tmp4 = filter_inst_6_tsni(lambda1, tmp3);
    return map_inst_26_tsni(NofibPrelude.fst, tmp4)
  } 
  static bt(csp7, t4) {
    let f3;
    f3 = function f3(s2) {
      let scrut, param0, first1, first0, a2, b, tmp, tmp1, tmp2, arr;
      scrut = constraints.earliestInconsistency(csp7, s2);
      if (scrut instanceof NofibPrelude.Some.class) {
        param0 = scrut.x;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          a2 = first0;
          b = first1;
          tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
          tmp1 = NofibPrelude.Cons(a2, tmp);
          tmp2 = runtime.safeCall(constraints.Known(tmp1));
        } else {
          tmp2 = constraints.checkComplete(csp7, s2);
        }
      } else {
        tmp2 = constraints.checkComplete(csp7, s2);
      }
      arr = [
        s2,
        tmp2
      ];
      return arr
    };
    return constraints.mapTree(f3, t4)
  } 
  static emptyTable(csp8) {
    let lscomp1, param0, param1, param2, vars, vals, rel, tmp, tmp1;
    if (csp8 instanceof constraints.CSP.class) {
      param0 = csp8.vars;
      param1 = csp8.vals;
      param2 = csp8.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      lscomp1 = function lscomp1(ls5) {
        let lscomp2, param01, param11, n4, t11, tmp2, tmp3, tmp4;
        if (ls5 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls5 instanceof NofibPrelude.Cons.class) {
          param01 = ls5.head;
          param11 = ls5.tail;
          n4 = param01;
          t11 = param11;
          lscomp2 = function lscomp2(ls6) {
            let param02, param12, m, t21, tmp5;
            if (ls6 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls6 instanceof NofibPrelude.Cons.class) {
              param02 = ls6.head;
              param12 = ls6.tail;
              m = param02;
              t21 = param12;
              tmp5 = lscomp2(t21);
              return NofibPrelude.Cons(constraints.Unknown, tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp2 = NofibPrelude.enumFromTo(1, vals);
          tmp3 = lscomp2(tmp2);
          tmp4 = lscomp1(t11);
          return NofibPrelude.Cons(tmp3, tmp4)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = NofibPrelude.enumFromTo(1, vars);
      tmp1 = lscomp1(tmp);
      return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fillTable(s2, csp9, tbl) {
    let f4, lscomp1, param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda;
    if (s2 instanceof NofibPrelude.Nil.class) {
      return tbl
    } else if (s2 instanceof NofibPrelude.Cons.class) {
      param0 = s2.head;
      param1 = s2.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        var_ = param01;
        val_ = param11;
        as_ = param1;
        if (csp9 instanceof constraints.CSP.class) {
          param02 = csp9.vars;
          param12 = csp9.vals;
          param2 = csp9.rel;
          vars = param02;
          vals = param12;
          rel = param2;
          f4 = function f4(cs, varval) {
            let first1, first0, varr, vall, scrut;
            if (globalThis.Array.isArray(varval) && varval.length === 2) {
              first0 = varval[0];
              first1 = varval[1];
              varr = first0;
              vall = first1;
              scrut = cs === constraints.Unknown;
              if (scrut === true) {
                /* error */
              } else {
                return cs
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          lscomp1 = function lscomp1(ls5) {
            let lscomp2, param03, param13, varrr, t11, tmp3, tmp4, tmp5;
            if (ls5 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls5 instanceof NofibPrelude.Cons.class) {
              param03 = ls5.head;
              param13 = ls5.tail;
              varrr = param03;
              t11 = param13;
              lscomp2 = function lscomp2(ls6) {
                let param04, param14, valll, t21, arr, tmp6;
                if (ls6 instanceof NofibPrelude.Nil.class) {
                  return NofibPrelude.Nil
                } else if (ls6 instanceof NofibPrelude.Cons.class) {
                  param04 = ls6.head;
                  param14 = ls6.tail;
                  valll = param04;
                  t21 = param14;
                  arr = [
                    varrr,
                    valll
                  ];
                  tmp6 = lscomp2(t21);
                  return NofibPrelude.Cons(arr, tmp6)
                } else {
                  throw new globalThis.Error("match error");
                }
              };
              tmp3 = NofibPrelude.enumFromTo(1, vals);
              tmp4 = lscomp2(tmp3);
              tmp5 = lscomp1(t11);
              return NofibPrelude.Cons(tmp4, tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp = var_ + 1;
          tmp1 = NofibPrelude.enumFromTo(tmp, vars);
          tmp2 = lscomp1(tmp1);
          lambda = (undefined, function (x3, y) {
            return NofibPrelude.zipWith(f4, x3, y)
          });
          return NofibPrelude.zipWith(lambda, tbl, tmp2)
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
  static lookupCache(csp10, t5) {
    let f5, lambda;
    f5 = function f5(csp11, tp) {
      let first1, first0, param0, param1, a2, as_, tbl1, tableEntry, cs, scrut, tbl2, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3;
      if (globalThis.Array.isArray(tp) && tp.length === 2) {
        first0 = tp[0];
        first1 = tp[1];
        if (first0 instanceof NofibPrelude.Nil.class) {
          tbl2 = first1;
          arr = [
            NofibPrelude.Nil,
            constraints.Unknown
          ];
          arr1 = [
            arr,
            tbl2
          ];
          return arr1
        } else if (first0 instanceof NofibPrelude.Cons.class) {
          param0 = first0.head;
          param1 = first0.tail;
          a2 = param0;
          as_ = param1;
          tbl1 = first1;
          tmp = constraints.value(a2);
          tmp1 = tmp - 1;
          tmp2 = NofibPrelude.head(tbl1);
          tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
          tableEntry = tmp3;
          scrut = tableEntry === constraints.Unknown;
          if (scrut === true) {
            tmp4 = NofibPrelude.Cons(a2, as_);
            tmp5 = constraints.checkComplete(csp11, tmp4);
          } else {
            tmp5 = tableEntry;
          }
          cs = tmp5;
          tmp6 = NofibPrelude.Cons(a2, as_);
          arr2 = [
            tmp6,
            cs
          ];
          arr3 = [
            arr2,
            tbl1
          ];
          return arr3
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x3) {
      return f5(csp10, x3)
    });
    return constraints.mapTree(lambda, t5)
  } 
  static cacheChecks(csp11, tbl1, n4) {
    let param0, param1, s3, cs, arr, tmp, tmp1, lambda;
    if (n4 instanceof constraints.Node.class) {
      param0 = n4.lab;
      param1 = n4.children;
      s3 = param0;
      cs = param1;
      arr = [
        s3,
        tbl1
      ];
      lambda = (undefined, function (x3) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.tail(tbl1);
        tmp3 = constraints.fillTable(s3, csp11, tmp2);
        return constraints.cacheChecks(csp11, tmp3, x3)
      });
      tmp = lambda;
      tmp1 = NofibPrelude.map(tmp, cs);
      return constraints.Node(arr, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bm(csp12, t6) {
    let tmp, tmp1, tmp2;
    tmp = constraints.emptyTable(csp12);
    tmp1 = constraints.cacheChecks(csp12, tmp, t6);
    tmp2 = lookupCache_inst_8_tsni(csp12, tmp1);
    return constraints.mapTree(NofibPrelude.fst, tmp2)
  } 
  static combine(ls5, acc) {
    let param0, param1, first1, first0, s3, param01, cs, css, scrut, tmp, tmp1;
    if (ls5 instanceof NofibPrelude.Nil.class) {
      return acc
    } else if (ls5 instanceof NofibPrelude.Cons.class) {
      param0 = ls5.head;
      param1 = ls5.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        s3 = first0;
        if (first1 instanceof constraints.Known.class) {
          param01 = first1.vs;
          cs = param01;
          css = param1;
          tmp = constraints.maxLevel(s3);
          scrut = NofibPrelude.notElem(tmp, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp1 = NofibPrelude.union(cs, acc);
            return constraints.combine(css, tmp1)
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
  static bj_(csp13, t7) {
    let f7;
    f7 = function f7(tp2, chs) {
      let first1, first0, a2, cs_, scrut, a3, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
      if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
        first0 = tp2[0];
        first1 = tp2[1];
        a3 = first0;
        a2 = first0;
        if (first1 instanceof constraints.Known.class) {
          param0 = first1.vs;
          cs = param0;
          tmp = runtime.safeCall(constraints.Known(cs));
          arr = [
            a3,
            tmp
          ];
          return constraints.Node(arr, chs)
        } else if (first1 instanceof constraints.Unknown.class) {
          tmp1 = NofibPrelude.map(constraints.label, chs);
          tmp2 = constraints.combine(tmp1, NofibPrelude.Nil);
          cs_ = runtime.safeCall(constraints.Known(tmp2));
          scrut = constraints.knownConflict(cs_);
          if (scrut === true) {
            arr1 = [
              a2,
              cs_
            ];
            return constraints.Node(arr1, NofibPrelude.Nil)
          } else {
            arr2 = [
              a2,
              cs_
            ];
            return constraints.Node(arr2, chs)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return constraints.foldTree(f7, t7)
  } 
  static bj(csp14, t8) {
    let f6;
    f6 = function f6(tp2, chs) {
      let first1, first0, a2, a3, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
      if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
        first0 = tp2[0];
        first1 = tp2[1];
        a3 = first0;
        a2 = first0;
        if (first1 instanceof constraints.Known.class) {
          param0 = first1.vs;
          cs = param0;
          tmp = runtime.safeCall(constraints.Known(cs));
          arr = [
            a3,
            tmp
          ];
          return constraints.Node(arr, chs)
        } else if (first1 instanceof constraints.Unknown.class) {
          tmp1 = NofibPrelude.map(constraints.label, chs);
          tmp2 = constraints.combine(tmp1, NofibPrelude.Nil);
          tmp3 = runtime.safeCall(constraints.Known(tmp2));
          arr1 = [
            a2,
            tmp3
          ];
          return constraints.Node(arr1, chs)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return constraints.foldTree(f6, t8)
  } 
  static bjbt(csp15, t9) {
    let tmp;
    tmp = bt_inst_11_tsni(csp15, t9);
    return bj_inst_9_tsni(csp15, tmp)
  } 
  static bjbt_(csp16, t10) {
    let tmp;
    tmp = bt_inst_15_tsni(csp16, t10);
    return bj__inst_13_tsni(csp16, tmp)
  } 
  static collect(ls6) {
    let param0, param1, param01, cs, css, tmp;
    if (ls6 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls6 instanceof NofibPrelude.Cons.class) {
      param0 = ls6.head;
      param1 = ls6.tail;
      if (param0 instanceof constraints.Known.class) {
        param01 = param0.vs;
        cs = param01;
        css = param1;
        tmp = constraints.collect(css);
        return NofibPrelude.union(cs, tmp)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static domainWipeout(csp17, t11) {
    let f8, param0, param1, param2, vars, vals, rel;
    if (csp17 instanceof constraints.CSP.class) {
      param0 = csp17.vars;
      param1 = csp17.vals;
      param2 = csp17.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      f8 = function f8(tp2) {
        let lscomp1, first1, first0, first11, first01, as_, cs, tbl2, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
        if (globalThis.Array.isArray(tp2) && tp2.length === 2) {
          first0 = tp2[0];
          first1 = tp2[1];
          if (globalThis.Array.isArray(first0) && first0.length === 2) {
            first01 = first0[0];
            first11 = first0[1];
            as_ = first01;
            cs = first11;
            tbl2 = first1;
            lscomp1 = function lscomp1(ls7) {
              let param01, param11, vs, t12, scrut1, tmp4;
              if (ls7 instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Nil
              } else if (ls7 instanceof NofibPrelude.Cons.class) {
                param01 = ls7.head;
                param11 = ls7.tail;
                vs = param01;
                t12 = param11;
                scrut1 = NofibPrelude.all(constraints.knownConflict, vs);
                if (scrut1 === true) {
                  tmp4 = lscomp1(t12);
                  return NofibPrelude.Cons(vs, tmp4)
                } else {
                  return lscomp1(t12)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            };
            tmp = lscomp1(tbl2);
            wipedDomains = tmp;
            scrut = NofibPrelude.null_(wipedDomains);
            if (scrut === true) {
              tmp1 = cs;
            } else {
              tmp2 = NofibPrelude.head(wipedDomains);
              tmp3 = constraints.collect(tmp2);
              tmp1 = runtime.safeCall(constraints.Known(tmp3));
            }
            cs_ = tmp1;
            arr = [
              as_,
              cs_
            ];
            return arr
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return constraints.mapTree(f8, t11)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fc(csp18, t12) {
    let tmp, tmp1, tmp2;
    tmp = constraints.emptyTable(csp18);
    tmp1 = constraints.cacheChecks(csp18, tmp, t12);
    tmp2 = lookupCache_inst_16_tsni(csp18, tmp1);
    return constraints.domainWipeout(csp18, tmp2)
  } 
  static try_(n5, algorithm) {
    let tmp, tmp1;
    tmp = constraints.queens(n5);
    tmp1 = search_inst_17_tsni(algorithm, tmp);
    return NofibPrelude.listLen(tmp1)
  } 
  static testConstraints_nofib(n6) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
    _deforest_Cons_head4 = fc_inst_22_tsni;
    _deforest_Cons_tail4 = (f3) => {
      return NofibPrelude.Nil
    };
    tmp = (f3) => {
      return match_xs_arm_Cons_inst_32_tsni(f3, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = bjbt__inst_21_tsni;
    _deforest_Cons_tail3 = tmp;
    tmp1 = (f3) => {
      return match_xs_arm_Cons_inst_32_tsni(f3, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = bjbt_inst_20_tsni;
    _deforest_Cons_tail2 = tmp1;
    tmp2 = (f3) => {
      return match_xs_arm_Cons_inst_32_tsni(f3, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = bm_inst_19_tsni;
    _deforest_Cons_tail1 = tmp2;
    tmp3 = (f3) => {
      return match_xs_arm_Cons_inst_32_tsni(f3, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = bt_inst_18_tsni;
    _deforest_Cons_tail = tmp3;
    tmp4 = (f3) => {
      return match_xs_arm_Cons_inst_32_tsni(f3, _deforest_Cons_head, _deforest_Cons_tail)
    };
    lambda = (undefined, function (x3) {
      return constraints.try_(n6, x3)
    });
    return map_inst_32_tsni(lambda, tmp4)
  } 
  static main() {
    let tmp;
    tmp = testConstraints_nofib_inst_23_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "constraints"; }
});
let constraints = constraints1; export default constraints;
