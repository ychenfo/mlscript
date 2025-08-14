import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let swap, span_tree, new_range, scc1, lambda, lambda1, lambda$, lambda$1, map_inst_0_1_tsni, swap_inst_0_2_tsni, lambda$_inst_3_4_tsni, map_inst_3_4_1_tsni, swap_inst_3_4_2_tsni, lambda_inst_5_6_tsni, lambda$_inst_5_6_4_tsni, map_inst_5_6_4_1_tsni, swap_inst_5_6_4_2_tsni, stronglyConnComp_inst_7_8_tsni, lambda_inst_7_8_6_tsni, lambda$_inst_7_8_6_4_tsni, map_inst_7_8_6_4_1_tsni, swap_inst_7_8_6_4_2_tsni, testScc_nofib_inst_9_10_tsni, stronglyConnComp_inst_9_10_8_tsni, lambda_inst_9_10_8_6_tsni, lambda$_inst_9_10_8_6_4_tsni, map_inst_9_10_8_6_4_1_tsni, swap_inst_9_10_8_6_4_2_tsni, new_range_inst_0_11_tsni, new_range_inst_3_4_11_tsni, new_range_inst_5_6_4_11_tsni, new_range_inst_7_8_6_4_11_tsni, dfs_inst_7_8_12_tsni, new_range_inst_9_10_8_6_4_11_tsni, dfs_inst_9_10_8_12_tsni, match_xs_arm_Cons_inst_7_8_12_tsni, match_xs_arm_Cons_inst_9_10_8_12_tsni;
match_xs_arm_Cons_inst_7_8_12_tsni = function match_xs_arm_Cons_inst_7_8_12_tsni(r, vs, ns, _deforest_Cons_head_inst_7_8_12_tsni, _deforest_Cons_tail_inst_7_8_12_tsni) {
  let param0, param1, x, xs, scrut, first1, first0, vs$_, ns$_, scrut1, arr, tmp, arr1, tmp1, tmp2, tmp3, arr2;
  param0 = _deforest_Cons_head_inst_7_8_12_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_12_tsni;
  x = param0;
  xs = param1;
  scrut1 = NofibPrelude.inList(x, vs);
  if (scrut1 === true) {
    arr = [
      vs,
      ns
    ];
    return dfs_inst_7_8_12_tsni(r, arr, xs)
  } else {
    tmp = NofibPrelude.Cons(x, vs);
    arr1 = [
      tmp,
      NofibPrelude.Nil
    ];
    tmp1 = runtime.safeCall(r(x));
    scrut = dfs_inst_7_8_12_tsni(r, arr1, tmp1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      vs$_ = first0;
      ns$_ = first1;
      tmp2 = NofibPrelude.Cons(x, ns$_);
      tmp3 = NofibPrelude.append(tmp2, ns);
      arr2 = [
        vs$_,
        tmp3
      ];
      return dfs_inst_7_8_12_tsni(r, arr2, xs)
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
match_xs_arm_Cons_inst_9_10_8_12_tsni = function match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head_inst_9_10_8_12_tsni, _deforest_Cons_tail_inst_9_10_8_12_tsni) {
  let param0, param1, x, xs, scrut, first1, first0, vs$_, ns$_, scrut1, arr, tmp, arr1, tmp1, tmp2, tmp3, arr2;
  param0 = _deforest_Cons_head_inst_9_10_8_12_tsni;
  param1 = _deforest_Cons_tail_inst_9_10_8_12_tsni;
  x = param0;
  xs = param1;
  scrut1 = NofibPrelude.inList(x, vs);
  if (scrut1 === true) {
    arr = [
      vs,
      ns
    ];
    return dfs_inst_9_10_8_12_tsni(r, arr, xs)
  } else {
    tmp = NofibPrelude.Cons(x, vs);
    arr1 = [
      tmp,
      NofibPrelude.Nil
    ];
    tmp1 = runtime.safeCall(r(x));
    scrut = dfs_inst_9_10_8_12_tsni(r, arr1, tmp1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      vs$_ = first0;
      ns$_ = first1;
      tmp2 = NofibPrelude.Cons(x, ns$_);
      tmp3 = NofibPrelude.append(tmp2, ns);
      arr2 = [
        vs$_,
        tmp3
      ];
      return dfs_inst_9_10_8_12_tsni(r, arr2, xs)
    } else {
      throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
  }
};
swap_inst_0_2_tsni = function swap_inst_0_2_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
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
        tmp = new_range_inst_0_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_0_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_3_4_tsni = function lambda$_inst_3_4_tsni(es, x) {
  let tmp;
  tmp = map_inst_3_4_1_tsni(swap_inst_3_4_2_tsni, es);
  return new_range_inst_3_4_11_tsni(tmp, x)
};
map_inst_3_4_1_tsni = function map_inst_3_4_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_4_1_tsni(f, xs1);
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
    throw new globalThis.Error("match error");
  }
};
swap_inst_3_4_2_tsni = function swap_inst_3_4_2_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
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
        tmp = new_range_inst_3_4_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_3_4_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_5_6_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_5_6_4_tsni(es, x)
  }
});
lambda$_inst_5_6_4_tsni = function lambda$_inst_5_6_4_tsni(es, x) {
  let tmp;
  tmp = map_inst_5_6_4_1_tsni(swap_inst_5_6_4_2_tsni, es);
  return new_range_inst_5_6_4_11_tsni(tmp, x)
};
map_inst_5_6_4_1_tsni = function map_inst_5_6_4_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_6_4_1_tsni(f, xs1);
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
    throw new globalThis.Error("match error");
  }
};
swap_inst_5_6_4_2_tsni = function swap_inst_5_6_4_2_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
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
        tmp = new_range_inst_5_6_4_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_5_6_4_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
stronglyConnComp_inst_7_8_tsni = function stronglyConnComp_inst_7_8_tsni(es, vs) {
  let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1;
  arr = [
    NofibPrelude.Nil,
    NofibPrelude.Nil
  ];
  arr1 = [
    NofibPrelude.Nil,
    NofibPrelude.Nil
  ];
  lambda$this = runtime.safeCall(lambda(es));
  tmp = dfs_inst_7_8_12_tsni(lambda$this, arr1, vs);
  tmp1 = NofibPrelude.snd(tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_7_8_6_tsni(es));
  tmp2 = span_tree(lambda$this1, arr, tmp1);
  return NofibPrelude.snd(tmp2)
};
lambda_inst_7_8_6_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_7_8_6_4_tsni(es, x)
  }
});
lambda$_inst_7_8_6_4_tsni = function lambda$_inst_7_8_6_4_tsni(es, x) {
  let tmp;
  tmp = map_inst_7_8_6_4_1_tsni(swap_inst_7_8_6_4_2_tsni, es);
  return new_range_inst_7_8_6_4_11_tsni(tmp, x)
};
map_inst_7_8_6_4_1_tsni = function map_inst_7_8_6_4_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_7_8_6_4_1_tsni(f, xs1);
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
    throw new globalThis.Error("match error");
  }
};
swap_inst_7_8_6_4_2_tsni = function swap_inst_7_8_6_4_2_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
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
        tmp = new_range_inst_7_8_6_4_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_7_8_6_4_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
testScc_nofib_inst_9_10_tsni = function testScc_nofib_inst_9_10_tsni(d) {
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
    let arr10;
    arr10 = [
      vs,
      ns
    ];
    return arr10
  };
  tmp = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = g;
  _deforest_Cons_tail5 = tmp;
  tmp1 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = f;
  _deforest_Cons_tail4 = tmp1;
  tmp2 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = d1;
  _deforest_Cons_tail3 = tmp2;
  tmp3 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = c;
  _deforest_Cons_tail2 = tmp3;
  tmp4 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = b;
  _deforest_Cons_tail1 = tmp4;
  tmp5 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = a;
  _deforest_Cons_tail = tmp5;
  tmp6 = (r, vs, ns) => {
    return match_xs_arm_Cons_inst_9_10_8_12_tsni(r, vs, ns, _deforest_Cons_head, _deforest_Cons_tail)
  };
  vertices = tmp6;
  arr = [
    b,
    a
  ];
  arr1 = [
    c,
    b
  ];
  arr2 = [
    c,
    d1
  ];
  arr3 = [
    c,
    h
  ];
  arr4 = [
    d1,
    c
  ];
  arr5 = [
    f,
    a
  ];
  arr6 = [
    f,
    g
  ];
  arr7 = [
    f,
    h
  ];
  arr8 = [
    g,
    f
  ];
  arr9 = [
    h,
    g
  ];
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
  return stronglyConnComp_inst_9_10_8_tsni(edges, vertices)
};
stronglyConnComp_inst_9_10_8_tsni = function stronglyConnComp_inst_9_10_8_tsni(es, vs) {
  let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1;
  arr = [
    NofibPrelude.Nil,
    NofibPrelude.Nil
  ];
  arr1 = [
    NofibPrelude.Nil,
    NofibPrelude.Nil
  ];
  lambda$this = runtime.safeCall(lambda(es));
  tmp = dfs_inst_9_10_8_12_tsni(lambda$this, arr1, vs);
  tmp1 = NofibPrelude.snd(tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_9_10_8_6_tsni(es));
  tmp2 = span_tree(lambda$this1, arr, tmp1);
  return NofibPrelude.snd(tmp2)
};
lambda_inst_9_10_8_6_tsni = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_9_10_8_6_4_tsni(es, x)
  }
});
lambda$_inst_9_10_8_6_4_tsni = function lambda$_inst_9_10_8_6_4_tsni(es, x) {
  let tmp;
  tmp = map_inst_9_10_8_6_4_1_tsni(swap_inst_9_10_8_6_4_2_tsni, es);
  return new_range_inst_9_10_8_6_4_11_tsni(tmp, x)
};
map_inst_9_10_8_6_4_1_tsni = function map_inst_9_10_8_6_4_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_10_8_6_4_1_tsni(f, xs1);
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
    throw new globalThis.Error("match error");
  }
};
swap_inst_9_10_8_6_4_2_tsni = function swap_inst_9_10_8_6_4_2_tsni(a) {
  let first1, first0, f, s, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
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
        tmp = new_range_inst_9_10_8_6_4_11_tsni(xys, w);
        return NofibPrelude.Cons(y, tmp)
      } else {
        return new_range_inst_9_10_8_6_4_11_tsni(xys, w)
      }
    };
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
new_range_inst_0_11_tsni = function new_range_inst_0_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
new_range_inst_3_4_11_tsni = function new_range_inst_3_4_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
new_range_inst_5_6_4_11_tsni = function new_range_inst_5_6_4_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
new_range_inst_7_8_6_4_11_tsni = function new_range_inst_7_8_6_4_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
dfs_inst_7_8_12_tsni = function dfs_inst_7_8_12_tsni(r, vsns, xs) {
  let first1, first0, vs, ns;
  if (globalThis.Array.isArray(vsns) && vsns.length === 2) {
    first0 = vsns[0];
    first1 = vsns[1];
    vs = first0;
    ns = first1;
    return runtime.safeCall(xs(r, vs, ns))
  } else {
    throw new globalThis.Error("match error");
  }
};
new_range_inst_9_10_8_6_4_11_tsni = function new_range_inst_9_10_8_6_4_11_tsni(xys, w) {
  return runtime.safeCall(xys(w))
};
dfs_inst_9_10_8_12_tsni = function dfs_inst_9_10_8_12_tsni(r, vsns, xs) {
  let first1, first0, vs, ns;
  if (globalThis.Array.isArray(vsns) && vsns.length === 2) {
    first0 = vsns[0];
    first1 = vsns[1];
    vs = first0;
    ns = first1;
    return runtime.safeCall(xs(r, vs, ns))
  } else {
    throw new globalThis.Error("match error");
  }
};
swap = function swap(a) {
  let first1, first0, f, s, arr;
  if (globalThis.Array.isArray(a) && a.length === 2) {
    first0 = a[0];
    first1 = a[1];
    f = first0;
    s = first1;
    arr = [
      s,
      f
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
};
new_range = function new_range(xys, w) {
  let param0, param1, first1, first0, x, y, xys1, scrut, tmp;
  if (xys instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xys instanceof NofibPrelude.Cons.class) {
    param0 = xys.head;
    param1 = xys.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
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
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
span_tree = function span_tree(r, vsns, xs) {
  let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3;
  if (globalThis.Array.isArray(vsns) && vsns.length === 2) {
    first0 = vsns[0];
    first1 = vsns[1];
    vs = first0;
    ns = first1;
    if (xs instanceof NofibPrelude.Nil.class) {
      arr = [
        vs,
        ns
      ];
      return arr
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      scrut1 = NofibPrelude.inList(x, vs);
      if (scrut1 === true) {
        arr1 = [
          vs,
          ns
        ];
        return span_tree(r, arr1, xs1)
      } else {
        tmp = NofibPrelude.Cons(x, vs);
        arr2 = [
          tmp,
          NofibPrelude.Nil
        ];
        tmp1 = runtime.safeCall(r(x));
        scrut = scc1.dfs(r, arr2, tmp1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first01 = scrut[0];
          first11 = scrut[1];
          vs$_ = first01;
          ns$_ = first11;
          tmp2 = NofibPrelude.Cons(x, ns$_);
          tmp3 = NofibPrelude.Cons(tmp2, ns);
          arr3 = [
            vs$_,
            tmp3
          ];
          return span_tree(r, arr3, xs1)
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
  tmp = map_inst_0_1_tsni(swap_inst_0_2_tsni, es);
  return new_range_inst_0_11_tsni(tmp, x)
};
lambda1 = (undefined, function (es) {
  return (x) => {
    return lambda$_inst_3_4_tsni(es, x)
  }
});
(class scc {
  static {
    scc1 = scc;
  }
  static dfs(r, vsns, xs) {
    let first1, first0, vs, ns, param0, param1, x, xs1, scrut, first11, first01, vs$_, ns$_, scrut1, arr, arr1, tmp, arr2, tmp1, tmp2, tmp3, arr3;
    if (globalThis.Array.isArray(vsns) && vsns.length === 2) {
      first0 = vsns[0];
      first1 = vsns[1];
      vs = first0;
      ns = first1;
      if (xs instanceof NofibPrelude.Nil.class) {
        arr = [
          vs,
          ns
        ];
        return arr
      } else if (xs instanceof NofibPrelude.Cons.class) {
        param0 = xs.head;
        param1 = xs.tail;
        x = param0;
        xs1 = param1;
        scrut1 = NofibPrelude.inList(x, vs);
        if (scrut1 === true) {
          arr1 = [
            vs,
            ns
          ];
          return scc.dfs(r, arr1, xs1)
        } else {
          tmp = NofibPrelude.Cons(x, vs);
          arr2 = [
            tmp,
            NofibPrelude.Nil
          ];
          tmp1 = runtime.safeCall(r(x));
          scrut = scc.dfs(r, arr2, tmp1);
          if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
            first01 = scrut[0];
            first11 = scrut[1];
            vs$_ = first01;
            ns$_ = first11;
            tmp2 = NofibPrelude.Cons(x, ns$_);
            tmp3 = NofibPrelude.append(tmp2, ns);
            arr3 = [
              vs$_,
              tmp3
            ];
            return scc.dfs(r, arr3, xs1)
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
  } 
  static stronglyConnComp(es, vs) {
    let arr, arr1, tmp, tmp1, tmp2, lambda$this, lambda$this1;
    arr = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    arr1 = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    lambda$this = runtime.safeCall(lambda(es));
    tmp = scc.dfs(lambda$this, arr1, vs);
    tmp1 = NofibPrelude.snd(tmp);
    lambda$this1 = runtime.safeCall(lambda_inst_5_6_tsni(es));
    tmp2 = span_tree(lambda$this1, arr, tmp1);
    return NofibPrelude.snd(tmp2)
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
    _deforest_Cons_tail6 = (r1, vs1, ns) => {
      let arr10;
      arr10 = [
        vs1,
        ns
      ];
      return arr10
    };
    tmp = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = g;
    _deforest_Cons_tail5 = tmp;
    tmp1 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = f;
    _deforest_Cons_tail4 = tmp1;
    tmp2 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = d1;
    _deforest_Cons_tail3 = tmp2;
    tmp3 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = c;
    _deforest_Cons_tail2 = tmp3;
    tmp4 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = b;
    _deforest_Cons_tail1 = tmp4;
    tmp5 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp5;
    tmp6 = (r1, vs1, ns) => {
      return match_xs_arm_Cons_inst_7_8_12_tsni(r1, vs1, ns, _deforest_Cons_head, _deforest_Cons_tail)
    };
    vertices = tmp6;
    arr = [
      b,
      a
    ];
    arr1 = [
      c,
      b
    ];
    arr2 = [
      c,
      d1
    ];
    arr3 = [
      c,
      h
    ];
    arr4 = [
      d1,
      c
    ];
    arr5 = [
      f,
      a
    ];
    arr6 = [
      f,
      g
    ];
    arr7 = [
      f,
      h
    ];
    arr8 = [
      g,
      f
    ];
    arr9 = [
      h,
      g
    ];
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
    return stronglyConnComp_inst_7_8_tsni(edges, vertices)
  } 
  static main() {
    let tmp;
    tmp = testScc_nofib_inst_9_10_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "scc"; }
});
let scc = scc1; export default scc;
