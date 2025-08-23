const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let swap, span_tree, new_range, scc1, lambda, lambda1, lambda$, lambda$1, dfs_inst_0_1_tsni, map_inst_2_3_tsni, swap_inst_2_4_tsni, lambda$_inst_5_6_tsni, map_inst_5_6_3_tsni, swap_inst_5_6_4_tsni, dfs_inst_7_8_tsni, lambda_inst_7_9_tsni, lambda$_inst_7_9_6_tsni, map_inst_7_9_6_3_tsni, swap_inst_7_9_6_4_tsni, span_tree_inst_7_10_tsni, dfs_inst_7_10_1_tsni, new_range_inst_7_9_6_11_tsni, stronglyConnComp_inst_12_13_tsni, span_tree_inst_12_13_10_tsni, dfs_inst_12_13_10_1_tsni, lambda_inst_12_13_9_tsni, lambda$_inst_12_13_9_6_tsni, map_inst_12_13_9_6_3_tsni, swap_inst_12_13_9_6_4_tsni, new_range_inst_12_13_9_6_11_tsni, dfs_inst_12_13_8_tsni, lambda_inst_12_13_14_tsni, lambda$_inst_12_13_14_15_tsni, new_range_inst_12_13_14_15_16_tsni, testScc_nofib_inst_17_18_tsni, stronglyConnComp_inst_17_18_13_tsni, dfs_inst_17_18_13_8_tsni, lambda_inst_17_18_13_14_tsni, lambda$_inst_17_18_13_14_15_tsni, new_range_inst_17_18_13_14_15_16_tsni, lambda_inst_17_18_13_9_tsni, lambda$_inst_17_18_13_9_6_tsni, map_inst_17_18_13_9_6_3_tsni, swap_inst_17_18_13_9_6_4_tsni, span_tree_inst_17_18_13_10_tsni, dfs_inst_17_18_13_10_1_tsni, new_range_inst_17_18_13_9_6_11_tsni, new_range_inst_2_11_tsni, new_range_inst_5_6_11_tsni, inList_inst_7_8_19_tsni, snd_inst_7_20_tsni, snd_inst_12_13_20_tsni, inList_inst_12_13_8_19_tsni, inList_inst_17_18_13_8_19_tsni, snd_inst_17_18_13_20_tsni, match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni, match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni, match_ls_arm_Cons_inst_7_8_19_tsni, match_ls_arm_Nil_inst_7_8_19_tsni, match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni, match_vsns_arm_Deforest_Arr_2_inst_7_10_tsni, match_x_arm_Deforest_Arr_2_inst_7_20_tsni, match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni, match_vsns_arm_Deforest_Arr_2_inst_12_13_10_tsni, match_x_arm_Deforest_Arr_2_inst_12_13_20_tsni, match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni, match_ls_arm_Cons_inst_12_13_8_19_tsni, match_xs_arm_Cons_inst_12_13_8_tsni, match_xs_arm_Nil_inst_12_13_8_tsni, match_ls_arm_Nil_inst_12_13_8_19_tsni, match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni, match_ls_arm_Cons_inst_17_18_13_8_19_tsni, match_xs_arm_Nil_inst_17_18_13_8_tsni, match_xs_arm_Cons_inst_17_18_13_8_tsni, match_ls_arm_Nil_inst_17_18_13_8_19_tsni, match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni, match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_tsni, match_x_arm_Deforest_Arr_2_inst_17_18_13_20_tsni;
match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_0_1_tsni, _deforest_Deforest_Arr_2_1_inst_0_1_tsni) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_1_tsni;
  vs = first0;
  ns = first1;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = globalThis.Object.freeze([
      vs,
      ns
    ]);
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = NofibPrelude.inList(x, vs);
    if (scrut1 === true) {
      _deforest_Deforest_Arr_2_0 = vs;
      _deforest_Deforest_Arr_2_1 = ns;
      arr1 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return dfs_inst_0_1_tsni(r, arr1, xs1)
    } else {
      tmp = NofibPrelude.Cons(x, vs);
      _deforest_Deforest_Arr_2_01 = tmp;
      _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
      arr2 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      tmp1 = runtime.safeCall(r(x));
      scrut = dfs_inst_0_1_tsni(r, arr2, tmp1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first01 = runtime.Tuple.get(scrut, 0);
        first11 = runtime.Tuple.get(scrut, 1);
        vs$_ = first01;
        ns$_ = first11;
        tmp2 = NofibPrelude.Cons(x, ns$_);
        tmp3 = NofibPrelude.append(tmp2, ns);
        _deforest_Deforest_Arr_2_02 = vs$_;
        _deforest_Deforest_Arr_2_12 = tmp3;
        arr3 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return dfs_inst_0_1_tsni(r, arr3, xs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Cons_head, _deforest_Cons_tail;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  vs = first0;
  ns = first1;
  if (xs instanceof NofibPrelude.Nil.class) {
    arr = globalThis.Object.freeze([
      vs,
      ns
    ]);
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = inList_inst_7_8_19_tsni(x, vs);
    if (scrut1 === true) {
      _deforest_Deforest_Arr_2_0 = vs;
      _deforest_Deforest_Arr_2_1 = ns;
      arr1 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return dfs_inst_7_8_tsni(r, arr1, xs1)
    } else {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = vs;
      tmp = (x1) => {
        return match_ls_arm_Cons_inst_7_8_19_tsni(x1, _deforest_Cons_head, _deforest_Cons_tail)
      };
      _deforest_Deforest_Arr_2_01 = tmp;
      _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
      arr2 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni(r1, xs2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      tmp1 = runtime.safeCall(r(x));
      scrut = dfs_inst_7_8_tsni(r, arr2, tmp1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first01 = runtime.Tuple.get(scrut, 0);
        first11 = runtime.Tuple.get(scrut, 1);
        vs$_ = first01;
        ns$_ = first11;
        tmp2 = NofibPrelude.Cons(x, ns$_);
        tmp3 = NofibPrelude.append(tmp2, ns);
        _deforest_Deforest_Arr_2_02 = vs$_;
        _deforest_Deforest_Arr_2_12 = tmp3;
        arr3 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni(r1, xs2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return dfs_inst_7_8_tsni(r, arr3, xs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_7_8_19_tsni = (undefined, function (x, _deforest_Cons_head_inst_7_8_19_tsni, _deforest_Cons_tail_inst_7_8_19_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_7_8_19_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_19_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_7_8_19_tsni(x, t)
  }
});
match_ls_arm_Nil_inst_7_8_19_tsni = (undefined, function (x) {
  return false
});
match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_7_10_1_tsni, _deforest_Deforest_Arr_2_1_inst_7_10_1_tsni) {
  let first1, first0, vs, ns;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_10_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_10_1_tsni;
  vs = first0;
  ns = first1;
  return runtime.safeCall(xs(r, vs, ns))
});
match_vsns_arm_Deforest_Arr_2_inst_7_10_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_7_10_tsni, _deforest_Deforest_Arr_2_1_inst_7_10_tsni) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_10_tsni;
  vs = first0;
  ns = first1;
  if (xs instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_03 = vs;
    _deforest_Deforest_Arr_2_13 = ns;
    arr = () => {
      return match_x_arm_Deforest_Arr_2_inst_7_20_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
    };
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = NofibPrelude.inList(x, vs);
    if (scrut1 === true) {
      _deforest_Deforest_Arr_2_01 = vs;
      _deforest_Deforest_Arr_2_11 = ns;
      arr1 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_7_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return span_tree_inst_7_10_tsni(r, arr1, xs1)
    } else {
      tmp = NofibPrelude.Cons(x, vs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
      arr2 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp1 = runtime.safeCall(r(x));
      scrut = dfs_inst_7_10_1_tsni(r, arr2, tmp1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first01 = runtime.Tuple.get(scrut, 0);
        first11 = runtime.Tuple.get(scrut, 1);
        vs$_ = first01;
        ns$_ = first11;
        tmp2 = NofibPrelude.Cons(x, ns$_);
        tmp3 = NofibPrelude.Cons(tmp2, ns);
        _deforest_Deforest_Arr_2_02 = vs$_;
        _deforest_Deforest_Arr_2_12 = tmp3;
        arr3 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_7_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return span_tree_inst_7_10_tsni(r, arr3, xs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_x_arm_Deforest_Arr_2_inst_7_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_20_tsni, _deforest_Deforest_Arr_2_1_inst_7_20_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_20_tsni;
  f = first0;
  s = first1;
  return s
});
match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_12_13_10_1_tsni, _deforest_Deforest_Arr_2_1_inst_12_13_10_1_tsni) {
  let first1, first0, vs, ns;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_13_10_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_13_10_1_tsni;
  vs = first0;
  ns = first1;
  return runtime.safeCall(xs(r, vs, ns))
});
match_vsns_arm_Deforest_Arr_2_inst_12_13_10_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_12_13_10_tsni, _deforest_Deforest_Arr_2_1_inst_12_13_10_tsni) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_13_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_13_10_tsni;
  vs = first0;
  ns = first1;
  if (xs instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_03 = vs;
    _deforest_Deforest_Arr_2_13 = ns;
    arr = () => {
      return match_x_arm_Deforest_Arr_2_inst_12_13_20_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
    };
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = NofibPrelude.inList(x, vs);
    if (scrut1 === true) {
      _deforest_Deforest_Arr_2_02 = vs;
      _deforest_Deforest_Arr_2_12 = ns;
      arr1 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
      };
      return span_tree_inst_12_13_10_tsni(r, arr1, xs1)
    } else {
      tmp = NofibPrelude.Cons(x, vs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
      arr2 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp1 = runtime.safeCall(r(x));
      scrut = dfs_inst_12_13_10_1_tsni(r, arr2, tmp1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first01 = runtime.Tuple.get(scrut, 0);
        first11 = runtime.Tuple.get(scrut, 1);
        vs$_ = first01;
        ns$_ = first11;
        tmp2 = NofibPrelude.Cons(x, ns$_);
        tmp3 = NofibPrelude.Cons(tmp2, ns);
        _deforest_Deforest_Arr_2_01 = vs$_;
        _deforest_Deforest_Arr_2_11 = tmp3;
        arr3 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return span_tree_inst_12_13_10_tsni(r, arr3, xs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_x_arm_Deforest_Arr_2_inst_12_13_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_12_13_20_tsni, _deforest_Deforest_Arr_2_1_inst_12_13_20_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_13_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_13_20_tsni;
  f = first0;
  s = first1;
  return s
});
match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_12_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_12_13_8_tsni) {
  let first1, first0, vs, ns;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_13_8_tsni;
  vs = first0;
  ns = first1;
  return runtime.safeCall(xs(r, vs, ns))
});
match_ls_arm_Cons_inst_12_13_8_19_tsni = (undefined, function (x, _deforest_Cons_head_inst_12_13_8_19_tsni, _deforest_Cons_tail_inst_12_13_8_19_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_12_13_8_19_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_8_19_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_12_13_8_19_tsni(x, t)
  }
});
match_xs_arm_Cons_inst_12_13_8_tsni = (undefined, function (r, vs, ns, _deforest_Cons_head_inst_12_13_8_tsni, _deforest_Cons_tail_inst_12_13_8_tsni) {
  let param0, param1, x, xs, scrut, first1, first0, vs$_, ns$_, scrut1, arr, tmp, arr1, tmp1, tmp2, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  param0 = _deforest_Cons_head_inst_12_13_8_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_8_tsni;
  x = param0;
  xs = param1;
  scrut1 = inList_inst_12_13_8_19_tsni(x, vs);
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_02 = vs;
    _deforest_Deforest_Arr_2_12 = ns;
    arr = (r1, xs1) => {
      return match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
    };
    return dfs_inst_12_13_8_tsni(r, arr, xs)
  } else {
    _deforest_Cons_head = x;
    _deforest_Cons_tail = vs;
    tmp = (x1) => {
      return match_ls_arm_Cons_inst_12_13_8_19_tsni(x1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_Deforest_Arr_2_01 = tmp;
    _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
    arr1 = (r1, xs1) => {
      return match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    tmp1 = runtime.safeCall(r(x));
    scrut = dfs_inst_12_13_8_tsni(r, arr1, tmp1);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      vs$_ = first0;
      ns$_ = first1;
      tmp2 = NofibPrelude.Cons(x, ns$_);
      tmp3 = NofibPrelude.append(tmp2, ns);
      _deforest_Deforest_Arr_2_0 = vs$_;
      _deforest_Deforest_Arr_2_1 = tmp3;
      arr2 = (r1, xs1) => {
        return match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      return dfs_inst_12_13_8_tsni(r, arr2, xs)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
});
match_xs_arm_Nil_inst_12_13_8_tsni = (undefined, function (r, vs, ns) {
  let arr;
  arr = globalThis.Object.freeze([
    vs,
    ns
  ]);
  return arr
});
match_ls_arm_Nil_inst_12_13_8_19_tsni = (undefined, function (x) {
  return false
});
match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_17_18_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_17_18_13_8_tsni) {
  let first1, first0, vs, ns;
  first0 = _deforest_Deforest_Arr_2_0_inst_17_18_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_17_18_13_8_tsni;
  vs = first0;
  ns = first1;
  return runtime.safeCall(xs(r, vs, ns))
});
match_ls_arm_Cons_inst_17_18_13_8_19_tsni = (undefined, function (x, _deforest_Cons_head_inst_17_18_13_8_19_tsni, _deforest_Cons_tail_inst_17_18_13_8_19_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_17_18_13_8_19_tsni;
  param1 = _deforest_Cons_tail_inst_17_18_13_8_19_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_17_18_13_8_19_tsni(x, t)
  }
});
match_xs_arm_Nil_inst_17_18_13_8_tsni = (undefined, function (r, vs, ns) {
  let arr;
  arr = globalThis.Object.freeze([
    vs,
    ns
  ]);
  return arr
});
match_xs_arm_Cons_inst_17_18_13_8_tsni = (undefined, function (r, vs, ns, _deforest_Cons_head_inst_17_18_13_8_tsni, _deforest_Cons_tail_inst_17_18_13_8_tsni) {
  let param0, param1, x, xs, scrut, first1, first0, vs$_, ns$_, scrut1, arr, tmp, arr1, tmp1, tmp2, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_17_18_13_8_tsni;
  param1 = _deforest_Cons_tail_inst_17_18_13_8_tsni;
  x = param0;
  xs = param1;
  scrut1 = inList_inst_17_18_13_8_19_tsni(x, vs);
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = vs;
    _deforest_Deforest_Arr_2_1 = ns;
    arr = (r1, xs1) => {
      return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return dfs_inst_17_18_13_8_tsni(r, arr, xs)
  } else {
    _deforest_Cons_head = x;
    _deforest_Cons_tail = vs;
    tmp = (x1) => {
      return match_ls_arm_Cons_inst_17_18_13_8_19_tsni(x1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_Deforest_Arr_2_01 = tmp;
    _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
    arr1 = (r1, xs1) => {
      return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    tmp1 = runtime.safeCall(r(x));
    scrut = dfs_inst_17_18_13_8_tsni(r, arr1, tmp1);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      vs$_ = first0;
      ns$_ = first1;
      tmp2 = NofibPrelude.Cons(x, ns$_);
      tmp3 = NofibPrelude.append(tmp2, ns);
      _deforest_Deforest_Arr_2_02 = vs$_;
      _deforest_Deforest_Arr_2_12 = tmp3;
      arr2 = (r1, xs1) => {
        return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni(r1, xs1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
      };
      return dfs_inst_17_18_13_8_tsni(r, arr2, xs)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
});
match_ls_arm_Nil_inst_17_18_13_8_19_tsni = (undefined, function (x) {
  return false
});
match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_17_18_13_10_1_tsni, _deforest_Deforest_Arr_2_1_inst_17_18_13_10_1_tsni) {
  let first1, first0, vs, ns;
  first0 = _deforest_Deforest_Arr_2_0_inst_17_18_13_10_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_17_18_13_10_1_tsni;
  vs = first0;
  ns = first1;
  return runtime.safeCall(xs(r, vs, ns))
});
match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_tsni = (undefined, function (r, xs, _deforest_Deforest_Arr_2_0_inst_17_18_13_10_tsni, _deforest_Deforest_Arr_2_1_inst_17_18_13_10_tsni) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
  first0 = _deforest_Deforest_Arr_2_0_inst_17_18_13_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_17_18_13_10_tsni;
  vs = first0;
  ns = first1;
  if (xs instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_03 = vs;
    _deforest_Deforest_Arr_2_13 = ns;
    arr = () => {
      return match_x_arm_Deforest_Arr_2_inst_17_18_13_20_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
    };
    return arr
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    scrut1 = NofibPrelude.inList(x, vs);
    if (scrut1 === true) {
      _deforest_Deforest_Arr_2_01 = vs;
      _deforest_Deforest_Arr_2_11 = ns;
      arr1 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return span_tree_inst_17_18_13_10_tsni(r, arr1, xs1)
    } else {
      tmp = NofibPrelude.Cons(x, vs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
      arr2 = (r1, xs2) => {
        return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp1 = runtime.safeCall(r(x));
      scrut = dfs_inst_17_18_13_10_1_tsni(r, arr2, tmp1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first01 = runtime.Tuple.get(scrut, 0);
        first11 = runtime.Tuple.get(scrut, 1);
        vs$_ = first01;
        ns$_ = first11;
        tmp2 = NofibPrelude.Cons(x, ns$_);
        tmp3 = NofibPrelude.Cons(tmp2, ns);
        _deforest_Deforest_Arr_2_02 = vs$_;
        _deforest_Deforest_Arr_2_12 = tmp3;
        arr3 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_tsni(r1, xs2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return span_tree_inst_17_18_13_10_tsni(r, arr3, xs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_x_arm_Deforest_Arr_2_inst_17_18_13_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_17_18_13_20_tsni, _deforest_Deforest_Arr_2_1_inst_17_18_13_20_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_17_18_13_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_17_18_13_20_tsni;
  f = first0;
  s = first1;
  return s
});
dfs_inst_0_1_tsni = function dfs_inst_0_1_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
map_inst_2_3_tsni = function map_inst_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (w) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(w, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (w) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
swap_inst_2_4_tsni = function swap_inst_2_4_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = f;
    arr = (w, param1) => {
      let first11, first01, x, y, xys, scrut, tmp;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      x = first01;
      y = first11;
      xys = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_2_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_2_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_5_6_tsni = function lambda$_inst_5_6_tsni(es, x) {
  let tmp;
  tmp = map_inst_5_6_3_tsni(swap_inst_5_6_4_tsni, es);
  return new_range_inst_5_6_11_tsni(tmp, x)
};
map_inst_5_6_3_tsni = function map_inst_5_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (w) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(w, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (w) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
swap_inst_5_6_4_tsni = function swap_inst_5_6_4_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = f;
    arr = (w, param1) => {
      let first11, first01, x, y, xys, scrut, tmp;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      x = first01;
      y = first11;
      xys = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_5_6_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_5_6_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
dfs_inst_7_8_tsni = function dfs_inst_7_8_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
lambda_inst_7_9_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_7_9_6_tsni(es, x)
  }
});
lambda$_inst_7_9_6_tsni = function lambda$_inst_7_9_6_tsni(es, x) {
  let tmp;
  tmp = map_inst_7_9_6_3_tsni(swap_inst_7_9_6_4_tsni, es);
  return new_range_inst_7_9_6_11_tsni(tmp, x)
};
map_inst_7_9_6_3_tsni = function map_inst_7_9_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_9_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (w) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(w, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (w) => {
      return (r, vs, ns) => {
        let arr;
        arr = globalThis.Object.freeze([
          vs,
          ns
        ]);
        return arr
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
swap_inst_7_9_6_4_tsni = function swap_inst_7_9_6_4_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = f;
    arr = (w, param1) => {
      let first11, first01, x, y, xys, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      x = first01;
      y = first11;
      xys = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_7_9_6_11_tsni(xys, w);
        _deforest_Cons_head = y;
        _deforest_Cons_tail = tmp;
        return (r, vs, ns) => {
          let param0, param11, x1, xs, scrut1, first12, first02, vs$_, ns$_, scrut2, arr1, tmp1, arr2, tmp2, tmp3, tmp4, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
          param0 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x1 = param0;
          xs = param11;
          scrut2 = NofibPrelude.inList(x1, vs);
          if (scrut2 === true) {
            _deforest_Deforest_Arr_2_03 = vs;
            _deforest_Deforest_Arr_2_13 = ns;
            arr1 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
            };
            return dfs_inst_7_10_1_tsni(r, arr1, xs)
          } else {
            tmp1 = NofibPrelude.Cons(x1, vs);
            _deforest_Deforest_Arr_2_02 = tmp1;
            _deforest_Deforest_Arr_2_12 = NofibPrelude.Nil;
            arr2 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            tmp2 = runtime.safeCall(r(x1));
            scrut1 = dfs_inst_7_10_1_tsni(r, arr2, tmp2);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
              first02 = runtime.Tuple.get(scrut1, 0);
              first12 = runtime.Tuple.get(scrut1, 1);
              vs$_ = first02;
              ns$_ = first12;
              tmp3 = NofibPrelude.Cons(x1, ns$_);
              tmp4 = NofibPrelude.append(tmp3, ns);
              _deforest_Deforest_Arr_2_01 = vs$_;
              _deforest_Deforest_Arr_2_11 = tmp4;
              arr3 = (r1, xs1) => {
                return match_vsns_arm_Deforest_Arr_2_inst_7_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return dfs_inst_7_10_1_tsni(r, arr3, xs)
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          }
        }
      } else {
        return new_range_inst_7_9_6_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
span_tree_inst_7_10_tsni = function span_tree_inst_7_10_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
dfs_inst_7_10_1_tsni = function dfs_inst_7_10_1_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
new_range_inst_7_9_6_11_tsni = function new_range_inst_7_9_6_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
stronglyConnComp_inst_12_13_tsni = function stronglyConnComp_inst_12_13_tsni(es, vs) {
  let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  _deforest_Deforest_Arr_2_01 = NofibPrelude.Nil;
  _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
  arr = (r, xs) => {
    return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_tsni(r, xs, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Deforest_Arr_2_0 = (x) => {
    return match_ls_arm_Nil_inst_12_13_8_19_tsni(x)
  };
  _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
  arr1 = (r, xs) => {
    return match_vsns_arm_Deforest_Arr_2_inst_12_13_8_tsni(r, xs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  lambda$this = runtime.safeCall(lambda_inst_12_13_14_tsni(es));
  tmp = dfs_inst_12_13_8_tsni(lambda$this, arr1, vs);
  tmp1 = NofibPrelude.snd(tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_12_13_9_tsni(es));
  tmp2 = span_tree_inst_12_13_10_tsni(lambda$this1, arr, tmp1);
  return snd_inst_12_13_20_tsni(tmp2)
};
span_tree_inst_12_13_10_tsni = function span_tree_inst_12_13_10_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
dfs_inst_12_13_10_1_tsni = function dfs_inst_12_13_10_1_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
lambda_inst_12_13_9_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_12_13_9_6_tsni(es, x)
  }
});
lambda$_inst_12_13_9_6_tsni = function lambda$_inst_12_13_9_6_tsni(es, x) {
  let tmp;
  tmp = map_inst_12_13_9_6_3_tsni(swap_inst_12_13_9_6_4_tsni, es);
  return new_range_inst_12_13_9_6_11_tsni(tmp, x)
};
map_inst_12_13_9_6_3_tsni = function map_inst_12_13_9_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_12_13_9_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (w) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(w, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (w) => {
      return (r, vs, ns) => {
        let arr;
        arr = globalThis.Object.freeze([
          vs,
          ns
        ]);
        return arr
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
swap_inst_12_13_9_6_4_tsni = function swap_inst_12_13_9_6_4_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = f;
    arr = (w, param1) => {
      let first11, first01, x, y, xys, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      x = first01;
      y = first11;
      xys = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_12_13_9_6_11_tsni(xys, w);
        _deforest_Cons_head = y;
        _deforest_Cons_tail = tmp;
        return (r, vs, ns) => {
          let param0, param11, x1, xs, scrut1, first12, first02, vs$_, ns$_, scrut2, arr1, tmp1, arr2, tmp2, tmp3, tmp4, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
          param0 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x1 = param0;
          xs = param11;
          scrut2 = NofibPrelude.inList(x1, vs);
          if (scrut2 === true) {
            _deforest_Deforest_Arr_2_01 = vs;
            _deforest_Deforest_Arr_2_11 = ns;
            arr1 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return dfs_inst_12_13_10_1_tsni(r, arr1, xs)
          } else {
            tmp1 = NofibPrelude.Cons(x1, vs);
            _deforest_Deforest_Arr_2_02 = tmp1;
            _deforest_Deforest_Arr_2_12 = NofibPrelude.Nil;
            arr2 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            tmp2 = runtime.safeCall(r(x1));
            scrut1 = dfs_inst_12_13_10_1_tsni(r, arr2, tmp2);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
              first02 = runtime.Tuple.get(scrut1, 0);
              first12 = runtime.Tuple.get(scrut1, 1);
              vs$_ = first02;
              ns$_ = first12;
              tmp3 = NofibPrelude.Cons(x1, ns$_);
              tmp4 = NofibPrelude.append(tmp3, ns);
              _deforest_Deforest_Arr_2_03 = vs$_;
              _deforest_Deforest_Arr_2_13 = tmp4;
              arr3 = (r1, xs1) => {
                return match_vsns_arm_Deforest_Arr_2_inst_12_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
              };
              return dfs_inst_12_13_10_1_tsni(r, arr3, xs)
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          }
        }
      } else {
        return new_range_inst_12_13_9_6_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
new_range_inst_12_13_9_6_11_tsni = function new_range_inst_12_13_9_6_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
dfs_inst_12_13_8_tsni = function dfs_inst_12_13_8_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
lambda_inst_12_13_14_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_12_13_14_15_tsni(es, x)
  }
});
lambda$_inst_12_13_14_15_tsni = function lambda$_inst_12_13_14_15_tsni(es, x) {
  return new_range_inst_12_13_14_15_16_tsni(es, x)
};
new_range_inst_12_13_14_15_16_tsni = function new_range_inst_12_13_14_15_16_tsni(xys, w) {
  let param0, param1, first1, first0, x, y, xys1, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xys instanceof NofibPrelude.Nil.class) {
    return (r, vs, ns) => {
      return match_xs_arm_Nil_inst_12_13_8_tsni(r, vs, ns)
    }
  } else if (xys instanceof NofibPrelude.Cons.class) {
    param0 = xys.head;
    param1 = xys.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      xys1 = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_12_13_14_15_16_tsni(xys1, w);
        _deforest_Cons_head = y;
        _deforest_Cons_tail = tmp;
        return (r, vs, ns) => {
          return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        return new_range_inst_12_13_14_15_16_tsni(xys1, w)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testScc_nofib_inst_17_18_tsni = function testScc_nofib_inst_17_18_tsni(d) {
  let a, b, c, d1, f, g, h, vertices, edges, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  a = 1;
  b = 2;
  c = 3;
  d1 = 4;
  f = 5;
  g = 6;
  h = 7;
  _deforest_Cons_head6 = h;
  _deforest_Cons_tail6 = (r, vs, ns) => {
    return match_xs_arm_Nil_inst_17_18_13_8_tsni(r, vs, ns)
  };
  tmp = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = g;
  _deforest_Cons_tail5 = tmp;
  tmp1 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = f;
  _deforest_Cons_tail4 = tmp1;
  tmp2 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = d1;
  _deforest_Cons_tail3 = tmp2;
  tmp3 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = c;
  _deforest_Cons_tail2 = tmp3;
  tmp4 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = b;
  _deforest_Cons_tail1 = tmp4;
  tmp5 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = a;
  _deforest_Cons_tail = tmp5;
  tmp6 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head, _deforest_Cons_tail)
  };
  vertices = tmp6;
  arr = globalThis.Object.freeze([
    b,
    a
  ]);
  arr1 = globalThis.Object.freeze([
    c,
    b
  ]);
  arr2 = globalThis.Object.freeze([
    c,
    d1
  ]);
  arr3 = globalThis.Object.freeze([
    c,
    h
  ]);
  arr4 = globalThis.Object.freeze([
    d1,
    c
  ]);
  arr5 = globalThis.Object.freeze([
    f,
    a
  ]);
  arr6 = globalThis.Object.freeze([
    f,
    g
  ]);
  arr7 = globalThis.Object.freeze([
    f,
    h
  ]);
  arr8 = globalThis.Object.freeze([
    g,
    f
  ]);
  arr9 = globalThis.Object.freeze([
    h,
    g
  ]);
  tmp7 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
  tmp8 = NofibPrelude.Cons(arr8, tmp7);
  tmp9 = NofibPrelude.Cons(arr7, tmp8);
  tmp10 = NofibPrelude.Cons(arr6, tmp9);
  tmp11 = NofibPrelude.Cons(arr5, tmp10);
  tmp12 = NofibPrelude.Cons(arr4, tmp11);
  tmp13 = NofibPrelude.Cons(arr3, tmp12);
  tmp14 = NofibPrelude.Cons(arr2, tmp13);
  tmp15 = NofibPrelude.Cons(arr1, tmp14);
  tmp16 = NofibPrelude.Cons(arr, tmp15);
  edges = tmp16;
  return stronglyConnComp_inst_17_18_13_tsni(edges, vertices)
};
stronglyConnComp_inst_17_18_13_tsni = function stronglyConnComp_inst_17_18_13_tsni(es, vs) {
  let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  _deforest_Deforest_Arr_2_01 = NofibPrelude.Nil;
  _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
  arr = (r, xs) => {
    return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_tsni(r, xs, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Deforest_Arr_2_0 = (x) => {
    return match_ls_arm_Nil_inst_17_18_13_8_19_tsni(x)
  };
  _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
  arr1 = (r, xs) => {
    return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_8_tsni(r, xs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  lambda$this = runtime.safeCall(lambda_inst_17_18_13_14_tsni(es));
  tmp = dfs_inst_17_18_13_8_tsni(lambda$this, arr1, vs);
  tmp1 = NofibPrelude.snd(tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_17_18_13_9_tsni(es));
  tmp2 = span_tree_inst_17_18_13_10_tsni(lambda$this1, arr, tmp1);
  return snd_inst_17_18_13_20_tsni(tmp2)
};
dfs_inst_17_18_13_8_tsni = function dfs_inst_17_18_13_8_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
lambda_inst_17_18_13_14_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_17_18_13_14_15_tsni(es, x)
  }
});
lambda$_inst_17_18_13_14_15_tsni = function lambda$_inst_17_18_13_14_15_tsni(es, x) {
  return new_range_inst_17_18_13_14_15_16_tsni(es, x)
};
new_range_inst_17_18_13_14_15_16_tsni = function new_range_inst_17_18_13_14_15_16_tsni(xys, w) {
  let param0, param1, first1, first0, x, y, xys1, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xys instanceof NofibPrelude.Nil.class) {
    return (r, vs, ns) => {
      return match_xs_arm_Nil_inst_17_18_13_8_tsni(r, vs, ns)
    }
  } else if (xys instanceof NofibPrelude.Cons.class) {
    param0 = xys.head;
    param1 = xys.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      xys1 = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_17_18_13_14_15_16_tsni(xys1, w);
        _deforest_Cons_head = y;
        _deforest_Cons_tail = tmp;
        return (r, vs, ns) => {
          return match_xs_arm_Cons_inst_17_18_13_8_tsni(r, vs, ns, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        return new_range_inst_17_18_13_14_15_16_tsni(xys1, w)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_17_18_13_9_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_17_18_13_9_6_tsni(es, x)
  }
});
lambda$_inst_17_18_13_9_6_tsni = function lambda$_inst_17_18_13_9_6_tsni(es, x) {
  let tmp;
  tmp = map_inst_17_18_13_9_6_3_tsni(swap_inst_17_18_13_9_6_4_tsni, es);
  return new_range_inst_17_18_13_9_6_11_tsni(tmp, x)
};
map_inst_17_18_13_9_6_3_tsni = function map_inst_17_18_13_9_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_18_13_9_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (w) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(w, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (w) => {
      return (r, vs, ns) => {
        let arr;
        arr = globalThis.Object.freeze([
          vs,
          ns
        ]);
        return arr
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
swap_inst_17_18_13_9_6_4_tsni = function swap_inst_17_18_13_9_6_4_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = f;
    arr = (w, param1) => {
      let first11, first01, x, y, xys, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
      first01 = _deforest_Deforest_Arr_2_0;
      first11 = _deforest_Deforest_Arr_2_1;
      x = first01;
      y = first11;
      xys = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range_inst_17_18_13_9_6_11_tsni(xys, w);
        _deforest_Cons_head = y;
        _deforest_Cons_tail = tmp;
        return (r, vs, ns) => {
          let param0, param11, x1, xs, scrut1, first12, first02, vs$_, ns$_, scrut2, arr1, tmp1, arr2, tmp2, tmp3, tmp4, arr3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
          param0 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x1 = param0;
          xs = param11;
          scrut2 = NofibPrelude.inList(x1, vs);
          if (scrut2 === true) {
            _deforest_Deforest_Arr_2_03 = vs;
            _deforest_Deforest_Arr_2_13 = ns;
            arr1 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
            };
            return dfs_inst_17_18_13_10_1_tsni(r, arr1, xs)
          } else {
            tmp1 = NofibPrelude.Cons(x1, vs);
            _deforest_Deforest_Arr_2_02 = tmp1;
            _deforest_Deforest_Arr_2_12 = NofibPrelude.Nil;
            arr2 = (r1, xs1) => {
              return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            tmp2 = runtime.safeCall(r(x1));
            scrut1 = dfs_inst_17_18_13_10_1_tsni(r, arr2, tmp2);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
              first02 = runtime.Tuple.get(scrut1, 0);
              first12 = runtime.Tuple.get(scrut1, 1);
              vs$_ = first02;
              ns$_ = first12;
              tmp3 = NofibPrelude.Cons(x1, ns$_);
              tmp4 = NofibPrelude.append(tmp3, ns);
              _deforest_Deforest_Arr_2_01 = vs$_;
              _deforest_Deforest_Arr_2_11 = tmp4;
              arr3 = (r1, xs1) => {
                return match_vsns_arm_Deforest_Arr_2_inst_17_18_13_10_1_tsni(r1, xs1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return dfs_inst_17_18_13_10_1_tsni(r, arr3, xs)
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          }
        }
      } else {
        return new_range_inst_17_18_13_9_6_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
span_tree_inst_17_18_13_10_tsni = function span_tree_inst_17_18_13_10_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
dfs_inst_17_18_13_10_1_tsni = function dfs_inst_17_18_13_10_1_tsni(r, vsns, xs) {
  return runtime.safeCall(vsns(r, xs))
};
new_range_inst_17_18_13_9_6_11_tsni = function new_range_inst_17_18_13_9_6_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
new_range_inst_2_11_tsni = function new_range_inst_2_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
new_range_inst_5_6_11_tsni = function new_range_inst_5_6_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
inList_inst_7_8_19_tsni = function inList_inst_7_8_19_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
snd_inst_7_20_tsni = function snd_inst_7_20_tsni(x) {
  return runtime.safeCall(x())
};
snd_inst_12_13_20_tsni = function snd_inst_12_13_20_tsni(x) {
  return runtime.safeCall(x())
};
inList_inst_12_13_8_19_tsni = function inList_inst_12_13_8_19_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
inList_inst_17_18_13_8_19_tsni = function inList_inst_17_18_13_8_19_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
snd_inst_17_18_13_20_tsni = function snd_inst_17_18_13_20_tsni(x) {
  return runtime.safeCall(x())
};
swap = function swap(a) {
  let first1, first0, f, s, arr;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    first0 = runtime.Tuple.get(a, 0);
    first1 = runtime.Tuple.get(a, 1);
    f = first0;
    s = first1;
    arr = globalThis.Object.freeze([
      s,
      f
    ]);
    return arr
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
new_range = function new_range(xys, w) {
  let param0, param1, first1, first0, x, y, xys1, scrut, tmp;
  if (xys instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xys instanceof NofibPrelude.Cons.class) {
    param0 = xys.head;
    param1 = xys.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      xys1 = param1;
      scrut = x == w;
      if (scrut === true) {
        tmp = new_range(xys1, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range(xys1, w)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
span_tree = function span_tree(r, vsns, xs) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
    first0 = runtime.Tuple.get(vsns, 0);
    first1 = runtime.Tuple.get(vsns, 1);
    vs = first0;
    ns = first1;
    if (xs instanceof NofibPrelude.Nil.class) {
      arr = globalThis.Object.freeze([
        vs,
        ns
      ]);
      return arr
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      scrut1 = NofibPrelude.inList(x, vs);
      if (scrut1 === true) {
        arr1 = globalThis.Object.freeze([
          vs,
          ns
        ]);
        return span_tree(r, arr1, xs1)
      } else {
        tmp = NofibPrelude.Cons(x, vs);
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
        arr2 = (r1, xs2) => {
          return match_vsns_arm_Deforest_Arr_2_inst_0_1_tsni(r1, xs2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        tmp1 = runtime.safeCall(r(x));
        scrut = dfs_inst_0_1_tsni(r, arr2, tmp1);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first01 = runtime.Tuple.get(scrut, 0);
          first11 = runtime.Tuple.get(scrut, 1);
          vs$_ = first01;
          ns$_ = first11;
          tmp2 = NofibPrelude.Cons(x, ns$_);
          tmp3 = NofibPrelude.Cons(tmp2, ns);
          arr3 = globalThis.Object.freeze([
            vs$_,
            tmp3
          ]);
          return span_tree(r, arr3, xs1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$1 = function lambda$(es, x) {
  return new_range(es, x)
};
lambda = (undefined, function (es) {
  return (x) => {
    return lambda$1(es, x)
  }
});
lambda$ = function lambda$(es, x) {
  let tmp;
  tmp = map_inst_2_3_tsni(swap_inst_2_4_tsni, es);
  return new_range_inst_2_11_tsni(tmp, x)
};
lambda1 = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_5_6_tsni(es, x)
  }
});
(class scc {
  static {
    scc1 = scc;
  }
  static dfs(r, vsns, xs) {
    let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3;
    if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
      first0 = runtime.Tuple.get(vsns, 0);
      first1 = runtime.Tuple.get(vsns, 1);
      vs = first0;
      ns = first1;
      if (xs instanceof NofibPrelude.Nil.class) {
        arr = globalThis.Object.freeze([
          vs,
          ns
        ]);
        return arr
      } else if (xs instanceof NofibPrelude.Cons.class) {
        param0 = xs.head;
        param1 = xs.tail;
        x = param0;
        xs1 = param1;
        scrut1 = NofibPrelude.inList(x, vs);
        if (scrut1 === true) {
          arr1 = globalThis.Object.freeze([
            vs,
            ns
          ]);
          return scc.dfs(r, arr1, xs1)
        } else {
          tmp = NofibPrelude.Cons(x, vs);
          arr2 = globalThis.Object.freeze([
            tmp,
            NofibPrelude.Nil
          ]);
          tmp1 = runtime.safeCall(r(x));
          scrut = scc.dfs(r, arr2, tmp1);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            first01 = runtime.Tuple.get(scrut, 0);
            first11 = runtime.Tuple.get(scrut, 1);
            vs$_ = first01;
            ns$_ = first11;
            tmp2 = NofibPrelude.Cons(x, ns$_);
            tmp3 = NofibPrelude.append(tmp2, ns);
            arr3 = globalThis.Object.freeze([
              vs$_,
              tmp3
            ]);
            return scc.dfs(r, arr3, xs1)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static stronglyConnComp(es, vs) {
    let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    _deforest_Deforest_Arr_2_01 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_11 = NofibPrelude.Nil;
    arr = (r, xs) => {
      return match_vsns_arm_Deforest_Arr_2_inst_7_10_tsni(r, xs, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    _deforest_Deforest_Arr_2_0 = (x) => {
      return match_ls_arm_Nil_inst_7_8_19_tsni(x)
    };
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr1 = (r, xs) => {
      return match_vsns_arm_Deforest_Arr_2_inst_7_8_tsni(r, xs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    lambda$this = runtime.safeCall(lambda(es));
    tmp = dfs_inst_7_8_tsni(lambda$this, arr1, vs);
    tmp1 = NofibPrelude.snd(tmp);
    lambda$this1 = runtime.safeCall(lambda_inst_7_9_tsni(es));
    tmp2 = span_tree_inst_7_10_tsni(lambda$this1, arr, tmp1);
    return snd_inst_7_20_tsni(tmp2)
  } 
  static testScc_nofib(d) {
    let a, b, c, d1, f, g, h, vertices, edges, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
    a = 1;
    b = 2;
    c = 3;
    d1 = 4;
    f = 5;
    g = 6;
    h = 7;
    _deforest_Cons_head6 = h;
    _deforest_Cons_tail6 = (r, vs, ns) => {
      return match_xs_arm_Nil_inst_12_13_8_tsni(r, vs, ns)
    };
    tmp = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = g;
    _deforest_Cons_tail5 = tmp;
    tmp1 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = f;
    _deforest_Cons_tail4 = tmp1;
    tmp2 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = d1;
    _deforest_Cons_tail3 = tmp2;
    tmp3 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = c;
    _deforest_Cons_tail2 = tmp3;
    tmp4 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = b;
    _deforest_Cons_tail1 = tmp4;
    tmp5 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp5;
    tmp6 = (r, vs, ns) => {
      return match_xs_arm_Cons_inst_12_13_8_tsni(r, vs, ns, _deforest_Cons_head, _deforest_Cons_tail)
    };
    vertices = tmp6;
    arr = globalThis.Object.freeze([
      b,
      a
    ]);
    arr1 = globalThis.Object.freeze([
      c,
      b
    ]);
    arr2 = globalThis.Object.freeze([
      c,
      d1
    ]);
    arr3 = globalThis.Object.freeze([
      c,
      h
    ]);
    arr4 = globalThis.Object.freeze([
      d1,
      c
    ]);
    arr5 = globalThis.Object.freeze([
      f,
      a
    ]);
    arr6 = globalThis.Object.freeze([
      f,
      g
    ]);
    arr7 = globalThis.Object.freeze([
      f,
      h
    ]);
    arr8 = globalThis.Object.freeze([
      g,
      f
    ]);
    arr9 = globalThis.Object.freeze([
      h,
      g
    ]);
    tmp7 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
    tmp8 = NofibPrelude.Cons(arr8, tmp7);
    tmp9 = NofibPrelude.Cons(arr7, tmp8);
    tmp10 = NofibPrelude.Cons(arr6, tmp9);
    tmp11 = NofibPrelude.Cons(arr5, tmp10);
    tmp12 = NofibPrelude.Cons(arr4, tmp11);
    tmp13 = NofibPrelude.Cons(arr3, tmp12);
    tmp14 = NofibPrelude.Cons(arr2, tmp13);
    tmp15 = NofibPrelude.Cons(arr1, tmp14);
    tmp16 = NofibPrelude.Cons(arr, tmp15);
    edges = tmp16;
    return stronglyConnComp_inst_12_13_tsni(edges, vertices)
  } 
  static main() {
    let tmp;
    tmp = testScc_nofib_inst_17_18_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "scc"]; 
});
let scc = scc1; export default scc;
