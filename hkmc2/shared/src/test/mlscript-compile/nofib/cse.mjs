import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cse1, map_inst_0_tsni, ltGraph_inst_1_tsni, map_inst_1_0_tsni, fetch_inst_2_tsni, ltGraph_inst_3_tsni, map_inst_3_0_tsni, enumFromTo_inst_4_tsni, testCse_nofib_inst_5_tsni, cse_inst_5_6_tsni, ltGraph_inst_5_6_3_tsni, map_inst_5_6_3_0_tsni, take_inst_5_7_tsni, enumFromTo_inst_5_4_tsni, scanr_inst_8_tsni, scanl_inst_9_tsni, concat_inst_10_tsni, concat_inst_1_10_tsni, bind_inst_11_tsni, concat_inst_3_10_tsni, map_inst_12_tsni, concat_inst_5_6_3_10_tsni, map_inst_5_13_tsni, map_inst_5_12_tsni, match_ls_arm_Cons_inst_8_tsni, match_ls_arm_Cons_inst_9_tsni, match_ls_arm_Cons_inst_5_7_tsni, match_xs_arm_Nil_inst_5_13_tsni;
match_ls_arm_Cons_inst_8_tsni = function match_ls_arm_Cons_inst_8_tsni(f, q, _deforest_Cons_head_inst_8_tsni, _deforest_Cons_tail_inst_8_tsni) {
  let param0, param1, x, xs, scrut, param01, param11, q1, t, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_8_tsni;
  param1 = _deforest_Cons_tail_inst_8_tsni;
  x = param0;
  xs = param1;
  scrut = scanr_inst_8_tsni(f, q, xs);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param01 = scrut.head;
    param11 = scrut.tail;
    q1 = param01;
    t = param11;
    tmp = runtime.safeCall(f(x, q1));
    tmp1 = NofibPrelude.Cons(q1, t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Cons_inst_9_tsni = function match_ls_arm_Cons_inst_9_tsni(f, q, _deforest_Cons_head_inst_9_tsni, _deforest_Cons_tail_inst_9_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_9_tsni;
  param1 = _deforest_Cons_tail_inst_9_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_9_tsni(f, tmp, xs);
  return NofibPrelude.Cons(q, tmp1)
};
match_ls_arm_Cons_inst_5_7_tsni = function match_ls_arm_Cons_inst_5_7_tsni(n, _deforest_Cons_head_inst_5_7_tsni, _deforest_Cons_tail_inst_5_7_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_5_7_tsni;
  param1 = _deforest_Cons_tail_inst_5_7_tsni;
  h = param0;
  t = param1;
  scrut = n <= 0;
  if (scrut === true) {
    return (f) => {
      return match_xs_arm_Nil_inst_5_13_tsni(f)
    }
  } else {
    tmp = n - 1;
    tmp1 = take_inst_5_7_tsni(tmp, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param01, param11, x, xs, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x = param01;
      xs = param11;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_5_13_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_5_13_tsni = function match_xs_arm_Nil_inst_5_13_tsni(f) {
  return NofibPrelude.Nil
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
      tmp2 = concat_inst_10_tsni(xs2);
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
ltGraph_inst_1_tsni = function ltGraph_inst_1_tsni(t) {
  let labelOf, param0, param1, first1, first0, n, x, xs, tmp, arr, tmp1, tmp2;
  labelOf = function labelOf(t1) {
    let param01, param11, first11, first01, n1, x1, xs1;
    if (t1 instanceof cse.Node.class) {
      param01 = t1.a;
      param11 = t1.b;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first01 = param01[0];
        first11 = param01[1];
        n1 = first01;
        x1 = first11;
        xs1 = param11;
        return n1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  if (t instanceof cse.Node.class) {
    param0 = t.a;
    param1 = t.b;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      n = first0;
      x = first1;
      xs = param1;
      tmp = NofibPrelude.map(labelOf, xs);
      arr = [
        n,
        x,
        tmp
      ];
      tmp1 = map_inst_1_0_tsni(ltGraph_inst_1_tsni, xs);
      tmp2 = concat_inst_1_10_tsni(tmp1);
      return NofibPrelude.Cons(arr, tmp2)
    } else {
      throw new globalThis.Error("match error");
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
      tmp2 = concat_inst_1_10_tsni(xs2);
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
fetch_inst_2_tsni = function fetch_inst_2_tsni(s) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = s;
  arr = (f) => {
    let first1, first0, s_, a, tmp;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    s_ = first0;
    a = first1;
    tmp = runtime.safeCall(f(a));
    return runtime.safeCall(tmp(s_))
  };
  return arr
};
ltGraph_inst_3_tsni = function ltGraph_inst_3_tsni(t) {
  let labelOf, param0, param1, first1, first0, n, x, xs, tmp, arr, tmp1, tmp2;
  labelOf = function labelOf(t1) {
    let param01, param11, first11, first01, n1, x1, xs1;
    if (t1 instanceof cse.Node.class) {
      param01 = t1.a;
      param11 = t1.b;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first01 = param01[0];
        first11 = param01[1];
        n1 = first01;
        x1 = first11;
        xs1 = param11;
        return n1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  if (t instanceof cse.Node.class) {
    param0 = t.a;
    param1 = t.b;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      n = first0;
      x = first1;
      xs = param1;
      tmp = NofibPrelude.map(labelOf, xs);
      arr = [
        n,
        x,
        tmp
      ];
      tmp1 = map_inst_3_0_tsni(ltGraph_inst_3_tsni, xs);
      tmp2 = concat_inst_3_10_tsni(tmp1);
      return NofibPrelude.Cons(arr, tmp2)
    } else {
      throw new globalThis.Error("match error");
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
      tmp2 = concat_inst_3_10_tsni(xs2);
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
enumFromTo_inst_4_tsni = function enumFromTo_inst_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_4_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_12_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCse_nofib_inst_5_tsni = function testCse_nofib_inst_5_tsni(n) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (i) {
    let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5;
    tmp2 = NofibPrelude.intMod(i, 6);
    _deforest_Cons_head5 = cse.example5;
    _deforest_Cons_tail5 = (n1) => {
      return (f) => {
        return match_xs_arm_Nil_inst_5_13_tsni(f)
      }
    };
    tmp3 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = cse.example4;
    _deforest_Cons_tail4 = tmp3;
    tmp4 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = cse.example3;
    _deforest_Cons_tail3 = tmp4;
    tmp5 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = cse.example2;
    _deforest_Cons_tail2 = tmp5;
    tmp6 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = cse.example1;
    _deforest_Cons_tail1 = tmp6;
    tmp7 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = cse.example0;
    _deforest_Cons_tail = tmp7;
    tmp8 = (n1) => {
      return match_ls_arm_Cons_inst_5_7_tsni(n1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp9 = take_inst_5_7_tsni(tmp2, tmp8);
    return map_inst_5_13_tsni(cse_inst_5_6_tsni, tmp9)
  });
  tmp = lambda;
  tmp1 = enumFromTo_inst_5_4_tsni(1, n);
  return map_inst_5_12_tsni(tmp, tmp1)
};
cse_inst_5_6_tsni = function cse_inst_5_6_tsni(t) {
  let tmp, tmp1;
  tmp = cse.labelTree(t);
  tmp1 = ltGraph_inst_5_6_3_tsni(tmp);
  return cse.findCommon(tmp1)
};
ltGraph_inst_5_6_3_tsni = function ltGraph_inst_5_6_3_tsni(t) {
  let labelOf, param0, param1, first1, first0, n, x, xs, tmp, arr, tmp1, tmp2;
  labelOf = function labelOf(t1) {
    let param01, param11, first11, first01, n1, x1, xs1;
    if (t1 instanceof cse.Node.class) {
      param01 = t1.a;
      param11 = t1.b;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first01 = param01[0];
        first11 = param01[1];
        n1 = first01;
        x1 = first11;
        xs1 = param11;
        return n1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  if (t instanceof cse.Node.class) {
    param0 = t.a;
    param1 = t.b;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      n = first0;
      x = first1;
      xs = param1;
      tmp = NofibPrelude.map(labelOf, xs);
      arr = [
        n,
        x,
        tmp
      ];
      tmp1 = map_inst_5_6_3_0_tsni(ltGraph_inst_5_6_3_tsni, xs);
      tmp2 = concat_inst_5_6_3_10_tsni(tmp1);
      return NofibPrelude.Cons(arr, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_5_6_3_0_tsni = function map_inst_5_6_3_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_6_3_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_5_6_3_10_tsni(xs2);
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
take_inst_5_7_tsni = function take_inst_5_7_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
enumFromTo_inst_5_4_tsni = function enumFromTo_inst_5_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_5_4_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_5_12_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
scanr_inst_8_tsni = function scanr_inst_8_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
scanl_inst_9_tsni = function scanl_inst_9_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
concat_inst_10_tsni = function concat_inst_10_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_1_10_tsni = function concat_inst_1_10_tsni(ls) {
  return runtime.safeCall(ls())
};
bind_inst_11_tsni = function bind_inst_11_tsni(m, f) {
  let lambda;
  lambda = (undefined, function (s) {
    let scrut;
    scrut = runtime.safeCall(m(s));
    return runtime.safeCall(scrut(f))
  });
  return lambda
};
concat_inst_3_10_tsni = function concat_inst_3_10_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_12_tsni = function map_inst_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_5_6_3_10_tsni = function concat_inst_5_6_3_10_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_5_13_tsni = function map_inst_5_13_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_5_12_tsni = function map_inst_5_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class cse {
  static {
    cse1 = cse;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
    lambda = (undefined, function (x) {
      return x + 1
    });
    tmp = cse.update(lambda);
    this.incr = tmp;
    this.Node = function Node(a1, b1) {
      return new Node.class(a1, b1);
    };
    this.Node.class = class Node {
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return "Node(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    tmp1 = cse.Node("0", NofibPrelude.Nil);
    this.zerO = tmp1;
    tmp2 = cse.Node("a", NofibPrelude.Nil);
    this.a = tmp2;
    tmp3 = cse.Node("b", NofibPrelude.Nil);
    this.b = tmp3;
    tmp4 = cse.Node("c", NofibPrelude.Nil);
    this.c = tmp4;
    tmp5 = cse.Node("d", NofibPrelude.Nil);
    this.d = tmp5;
    this.example0 = cse.a;
    tmp6 = cse.plus_(cse.a, cse.a);
    this.example1 = tmp6;
    tmp7 = cse.mult_(cse.a, cse.b);
    tmp8 = cse.mult_(cse.a, cse.b);
    tmp9 = cse.plus_(tmp7, tmp8);
    this.example2 = tmp9;
    tmp10 = cse.plus_(cse.a, cse.b);
    tmp11 = cse.mult_(tmp10, cse.c);
    tmp12 = cse.plus_(cse.a, cse.b);
    tmp13 = cse.plus_(tmp11, tmp12);
    this.example3 = tmp13;
    _deforest_Cons_head7 = cse.d;
    _deforest_Cons_tail7 = (f, q) => {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    };
    tmp14 = (f, q) => {
      return match_ls_arm_Cons_inst_9_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = cse.c;
    _deforest_Cons_tail6 = tmp14;
    tmp15 = (f, q) => {
      return match_ls_arm_Cons_inst_9_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = cse.b;
    _deforest_Cons_tail5 = tmp15;
    tmp16 = (f, q) => {
      return match_ls_arm_Cons_inst_9_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = cse.a;
    _deforest_Cons_tail4 = tmp16;
    tmp17 = (f, q) => {
      return match_ls_arm_Cons_inst_9_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    tmp18 = scanl_inst_9_tsni(cse.plus_, cse.zerO, tmp17);
    tmp19 = cse.prod(tmp18);
    this.example4 = tmp19;
    _deforest_Cons_head3 = cse.d;
    _deforest_Cons_tail3 = (f, q) => {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    };
    tmp20 = (f, q) => {
      return match_ls_arm_Cons_inst_8_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = cse.c;
    _deforest_Cons_tail2 = tmp20;
    tmp21 = (f, q) => {
      return match_ls_arm_Cons_inst_8_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = cse.b;
    _deforest_Cons_tail1 = tmp21;
    tmp22 = (f, q) => {
      return match_ls_arm_Cons_inst_8_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = cse.a;
    _deforest_Cons_tail = tmp22;
    tmp23 = (f, q) => {
      return match_ls_arm_Cons_inst_8_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp24 = scanr_inst_8_tsni(cse.plus_, cse.zerO, tmp23);
    tmp25 = cse.prod(tmp24);
    this.example5 = tmp25;
  }
  static retURN(a) {
    let lambda;
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        s,
        a
      ];
      return arr
    });
    return lambda
  } 
  static bind(m, f) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, first1, first0, s_, a1, tmp;
      scrut = runtime.safeCall(m(s));
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        s_ = first0;
        a1 = first1;
        tmp = runtime.safeCall(f(a1));
        return runtime.safeCall(tmp(s_))
      } else {
        throw new globalThis.Error("match error");
      }
    });
    return lambda
  } 
  static join(m1) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, first1, first0, s_, ma;
      scrut = runtime.safeCall(m1(s));
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        s_ = first0;
        ma = first1;
        return runtime.safeCall(ma(s_))
      } else {
        throw new globalThis.Error("match error");
      }
    });
    return lambda
  } 
  static mmap(f1, m2) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, first1, first0, s_, a1, tmp, arr;
      scrut = runtime.safeCall(m2(s));
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        s_ = first0;
        a1 = first1;
        tmp = runtime.safeCall(f1(a1));
        arr = [
          s_,
          tmp
        ];
        return arr
      } else {
        throw new globalThis.Error("match error");
      }
    });
    return lambda
  } 
  static mmapl(f2, aas) {
    let param0, param1, a1, as_, tmp, lambda;
    if (aas instanceof NofibPrelude.Nil.class) {
      return cse.retURN(NofibPrelude.Nil)
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param0 = aas.head;
      param1 = aas.tail;
      a1 = param0;
      as_ = param1;
      tmp = runtime.safeCall(f2(a1));
      lambda = (undefined, function (b) {
        let tmp1, lambda1;
        tmp1 = cse.mmapl(f2, as_);
        lambda1 = (undefined, function (bs) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(b, bs);
          return cse.retURN(tmp2)
        });
        return cse.bind(tmp1, lambda1)
      });
      return cse.bind(tmp, lambda)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mmapr(f3, xs) {
    let param0, param1, x, xs1, tmp, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return cse.retURN(NofibPrelude.Nil)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      tmp = cse.mmapr(f3, xs1);
      lambda = (undefined, function (ys) {
        let tmp1, lambda1;
        tmp1 = runtime.safeCall(f3(x));
        lambda1 = (undefined, function (y) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(y, ys);
          return cse.retURN(tmp2)
        });
        return cse.bind(tmp1, lambda1)
      });
      return cse.bind(tmp, lambda)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mfoldl(f4, a1, xs1) {
    let param0, param1, x, xs2, tmp, lambda;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return cse.retURN(a1)
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(f4(a1, x));
      lambda = (undefined, function (fax) {
        return cse.mfoldl(f4, fax, xs2)
      });
      return cse.bind(tmp, lambda)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mfoldr(f5, a2, xs2) {
    let param0, param1, x, xs3, tmp, lambda;
    if (xs2 instanceof NofibPrelude.Nil.class) {
      return cse.retURN(a2)
    } else if (xs2 instanceof NofibPrelude.Cons.class) {
      param0 = xs2.head;
      param1 = xs2.tail;
      x = param0;
      xs3 = param1;
      tmp = cse.mfoldr(f5, a2, xs3);
      lambda = (undefined, function (y) {
        return runtime.safeCall(f5(x, y))
      });
      return cse.bind(tmp, lambda)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mif(c, t, f6) {
    let lambda;
    lambda = (undefined, function (cond) {
      if (cond === true) {
        return t
      } else {
        return f6
      }
    });
    return cse.bind(c, lambda)
  } 
  static startingWith(m3, v) {
    let scrut, first1, first0, final1, answer;
    scrut = runtime.safeCall(m3(v));
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      final1 = first0;
      answer = first1;
      return answer
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fetch(s) {
    let arr;
    arr = [
      s,
      s
    ];
    return arr
  } 
  static fetchWith(f7) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp, arr;
      tmp = runtime.safeCall(f7(s1));
      arr = [
        s1,
        tmp
      ];
      return arr
    });
    return lambda
  } 
  static update(f8) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp, arr;
      tmp = runtime.safeCall(f8(s1));
      arr = [
        tmp,
        s1
      ];
      return arr
    });
    return lambda
  } 
  static set_(s_) {
    let lambda;
    lambda = (undefined, function (s1) {
      let arr;
      arr = [
        s_,
        s1
      ];
      return arr
    });
    return lambda
  } 
  static labelTree(t1) {
    let label, tmp;
    label = function label(t2) {
      let param0, param1, x, xs3, lambda;
      if (t2 instanceof cse.Node.class) {
        param0 = t2.a;
        param1 = t2.b;
        x = param0;
        xs3 = param1;
        lambda = (undefined, function (n) {
          let tmp1, tmp2, lambda1;
          tmp1 = cse.mmapl(label, xs3);
          lambda1 = (undefined, function (ts) {
            let arr, tmp3;
            arr = [
              n,
              x
            ];
            tmp3 = cse.Node(arr, ts);
            return cse.retURN(tmp3)
          });
          tmp2 = lambda1;
          return cse.bind(tmp1, tmp2)
        });
        return cse.bind(cse.incr, lambda)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = label(t1);
    return cse.startingWith(tmp, 0)
  } 
  static ltGraph(t2) {
    let labelOf, param0, param1, first1, first0, n, x, xs3, tmp, arr, tmp1, tmp2;
    labelOf = function labelOf(t3) {
      let param01, param11, first11, first01, n1, x1, xs4;
      if (t3 instanceof cse.Node.class) {
        param01 = t3.a;
        param11 = t3.b;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first01 = param01[0];
          first11 = param01[1];
          n1 = first01;
          x1 = first11;
          xs4 = param11;
          return n1
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (t2 instanceof cse.Node.class) {
      param0 = t2.a;
      param1 = t2.b;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        n = first0;
        x = first1;
        xs3 = param1;
        tmp = NofibPrelude.map(labelOf, xs3);
        arr = [
          n,
          x,
          tmp
        ];
        tmp1 = map_inst_0_tsni(ltGraph_inst_1_tsni, xs3);
        tmp2 = concat_inst_10_tsni(tmp1);
        return NofibPrelude.Cons(arr, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static visited(n) {
    let tmp, lambda;
    lambda = (undefined, function (us) {
      let scrut, tmp1, tmp2, lambda1;
      scrut = NofibPrelude.inList(n, us);
      if (scrut === true) {
        return cse.retURN(true)
      } else {
        tmp1 = NofibPrelude.Cons(n, us);
        tmp2 = cse.set_(tmp1);
        lambda1 = (undefined, function (_p) {
          return cse.retURN(false)
        });
        return cse.bind(tmp2, lambda1)
      }
    });
    tmp = lambda;
    return bind_inst_11_tsni(fetch_inst_2_tsni, tmp)
  } 
  static newlyDefined(x, fx, f9, y) {
    let scrut;
    scrut = x === y;
    if (scrut === true) {
      return fx
    } else {
      return runtime.safeCall(f9(y))
    }
  } 
  static findCommon(ls) {
    let sim, scrut, first1, first0, a3, b, arr, tmp, lambda;
    sim = function sim(n_s_cs, r_lg) {
      let lscomp, first2, first11, first01, n1, s1, cs, first12, first02, r, lg, rcs, ms, scrut1, tmp1, tmp2, arr1, tmp3, arr2, arr3, lambda1;
      if (globalThis.Array.isArray(n_s_cs) && n_s_cs.length === 3) {
        first01 = n_s_cs[0];
        first11 = n_s_cs[1];
        first2 = n_s_cs[2];
        n1 = first01;
        s1 = first11;
        cs = first2;
        if (globalThis.Array.isArray(r_lg) && r_lg.length === 2) {
          first02 = r_lg[0];
          first12 = r_lg[1];
          r = first02;
          lg = first12;
          lscomp = function lscomp(ls1) {
            let param0, param1, first21, first13, first03, m4, s_1, cs_, t3, scrut2, scrut3, tmp4;
            if (ls1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls1 instanceof NofibPrelude.Cons.class) {
              param0 = ls1.head;
              param1 = ls1.tail;
              if (globalThis.Array.isArray(param0) && param0.length === 3) {
                first03 = param0[0];
                first13 = param0[1];
                first21 = param0[2];
                m4 = first03;
                s_1 = first13;
                cs_ = first21;
                t3 = param1;
                scrut2 = s1 === s_1;
                if (scrut2 === true) {
                  scrut3 = NofibPrelude.listEq(cs_, rcs);
                  if (scrut3 === true) {
                    tmp4 = lscomp(t3);
                    return NofibPrelude.Cons(m4, tmp4)
                  } else {
                    return lscomp(t3)
                  }
                } else {
                  return lscomp(t3)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp1 = NofibPrelude.map(r, cs);
          rcs = tmp1;
          tmp2 = lscomp(lg);
          ms = tmp2;
          scrut1 = NofibPrelude.null_(ms);
          if (scrut1 === true) {
            arr1 = [
              n1,
              s1,
              rcs
            ];
            tmp3 = NofibPrelude.Cons(arr1, lg);
            arr2 = [
              r,
              tmp3
            ];
            return arr2
          } else {
            lambda1 = (undefined, function (x1) {
              let tmp4;
              tmp4 = NofibPrelude.head(ms);
              return cse.newlyDefined(n1, tmp4, r, x1)
            });
            arr3 = [
              lambda1,
              lg
            ];
            return arr3
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x1) {
      return x1
    });
    arr = [
      lambda,
      NofibPrelude.Nil
    ];
    scrut = NofibPrelude.foldr(sim, arr, ls);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      a3 = first0;
      b = first1;
      return b
    } else {
      tmp = runtime.safeCall(ls.toString());
      throw globalThis.Error(tmp);
    }
  } 
  static cse(t3) {
    let tmp, tmp1;
    tmp = cse.labelTree(t3);
    tmp1 = ltGraph_inst_3_tsni(tmp);
    return cse.findCommon(tmp1)
  } 
  static plus_(x1, y1) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x1, tmp);
    return cse.Node("+", tmp1)
  } 
  static mult_(x2, y2) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y2, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x2, tmp);
    return cse.Node("*", tmp1)
  } 
  static prod(xs3) {
    return cse.Node("X", xs3)
  } 
  static testCse_nofib(n1) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (i) {
      let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      tmp2 = NofibPrelude.intMod(i, 6);
      tmp3 = NofibPrelude.Cons(cse.example5, NofibPrelude.Nil);
      tmp4 = NofibPrelude.Cons(cse.example4, tmp3);
      tmp5 = NofibPrelude.Cons(cse.example3, tmp4);
      tmp6 = NofibPrelude.Cons(cse.example2, tmp5);
      tmp7 = NofibPrelude.Cons(cse.example1, tmp6);
      tmp8 = NofibPrelude.Cons(cse.example0, tmp7);
      tmp9 = NofibPrelude.take(tmp2, tmp8);
      return NofibPrelude.map(cse.cse, tmp9)
    });
    tmp = lambda;
    tmp1 = enumFromTo_inst_4_tsni(1, n1);
    return map_inst_12_tsni(tmp, tmp1)
  } 
  static main() {
    let tmp;
    tmp = testCse_nofib_inst_5_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "cse"; }
});
let cse = cse1; export default cse;
