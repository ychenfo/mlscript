const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let r, l, go, f, lscomp, combine, go1, NofibPrelude1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, go$, transpose_inst_0_tsni, unzip_inst_0_1_tsni, f_inst_0_1_2_tsni, lscomp_inst_0_3_tsni, f_inst_4_2_tsni, combine_inst_5_tsni, unzip_inst_5_1_tsni, f_inst_5_1_2_tsni, lscomp_inst_5_3_tsni, reverse_inst_0_1_2_6_tsni, r_inst_0_1_2_6_7_tsni, reverse_inst_0_1_2_8_tsni, r_inst_0_1_2_8_7_tsni, reverse_inst_4_2_8_tsni, r_inst_4_2_8_7_tsni, reverse_inst_4_2_6_tsni, r_inst_4_2_6_7_tsni, reverse_inst_5_1_2_6_tsni, r_inst_5_1_2_6_7_tsni, reverse_inst_5_1_2_8_tsni, r_inst_5_1_2_8_7_tsni;
transpose_inst_0_tsni = function transpose_inst_0_tsni(xss) {
  let param0, param1, param01, param11, x, xs, xss1, scrut, xss2, tmp;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    if (param0 instanceof NofibPrelude.Nil.class) {
      xss2 = param1;
      return transpose_inst_0_tsni(xss2)
    } else if (param0 instanceof NofibPrelude.Cons.class) {
      param01 = param0.head;
      param11 = param0.tail;
      x = param01;
      xs = param11;
      xss1 = param1;
      tmp = lscomp_inst_0_3_tsni(xss1);
      scrut = unzip_inst_0_1_tsni(tmp);
      return runtime.safeCall(scrut(x, xs))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
unzip_inst_0_1_tsni = function unzip_inst_0_1_tsni(l1) {
  let lambda24, lambda25;
  lambda25 = (l$_) => {
    return l$_
  };
  lambda24 = (l$_) => {
    return l$_
  };
  return f_inst_0_1_2_tsni(l1, lambda25, lambda24)
};
f_inst_0_1_2_tsni = function f_inst_0_1_2_tsni(l1, a, b) {
  return runtime.safeCall(l1(a, b))
};
lscomp_inst_0_3_tsni = function lscomp_inst_0_3_tsni(ls) {
  let param0, param1, h, t, param01, param11, hd, tl, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ls instanceof NofibPrelude1.Nil.class) {
    return (a, b) => {
      let tmp2, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      tmp2 = reverse_inst_0_1_2_6_tsni(a);
      tmp3 = reverse_inst_0_1_2_8_tsni(b);
      _deforest_Deforest_Arr_2_01 = tmp2;
      _deforest_Deforest_Arr_2_11 = tmp3;
      return (x, xs) => {
        let first1, first0, hds, tls;
        first0 = _deforest_Deforest_Arr_2_01;
        first1 = _deforest_Deforest_Arr_2_11;
        hds = first0;
        tls = first1;
        return combine(x, hds, xs, tls)
      }
    }
  } else if (ls instanceof NofibPrelude1.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    if (h instanceof NofibPrelude1.Cons.class) {
      param01 = h.head;
      param11 = h.tail;
      hd = param01;
      tl = param11;
      _deforest_Deforest_Arr_2_0 = hd;
      _deforest_Deforest_Arr_2_1 = tl;
      tmp = (a, b, param12) => {
        let first1, first0, x, y, t1, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x = first0;
        y = first1;
        t1 = param12;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = a;
        tmp2 = (l$_) => {
          let param02, param13, x1, xs, tmp4;
          param02 = _deforest_Cons_head1;
          param13 = _deforest_Cons_tail1;
          x1 = param02;
          xs = param13;
          tmp4 = NofibPrelude1.Cons(x1, l$_);
          return r_inst_0_1_2_6_7_tsni(tmp4, xs)
        };
        _deforest_Cons_head2 = y;
        _deforest_Cons_tail2 = b;
        tmp3 = (l$_) => {
          let param02, param13, x1, xs, tmp4;
          param02 = _deforest_Cons_head2;
          param13 = _deforest_Cons_tail2;
          x1 = param02;
          xs = param13;
          tmp4 = NofibPrelude1.Cons(x1, l$_);
          return r_inst_0_1_2_8_7_tsni(tmp4, xs)
        };
        return f_inst_0_1_2_tsni(t1, tmp2, tmp3)
      };
      tmp1 = lscomp_inst_0_3_tsni(t);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (a, b) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(a, b, param12))
      }
    } else {
      return lscomp_inst_0_3_tsni(t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f_inst_4_2_tsni = function f_inst_4_2_tsni(l1, a, b) {
  let param0, param1, first1, first0, x, y, t, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (l1 instanceof NofibPrelude1.Nil.class) {
    tmp = reverse_inst_4_2_6_tsni(a);
    tmp1 = reverse_inst_4_2_8_tsni(b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } else if (l1 instanceof NofibPrelude1.Cons.class) {
    param0 = l1.head;
    param1 = l1.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      t = param1;
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = a;
      tmp2 = (l$_) => {
        let param01, param11, x1, xs, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs = param11;
        tmp4 = NofibPrelude1.Cons(x1, l$_);
        return r_inst_4_2_6_7_tsni(tmp4, xs)
      };
      _deforest_Cons_head = y;
      _deforest_Cons_tail = b;
      tmp3 = (l$_) => {
        let param01, param11, x1, xs, tmp4;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x1 = param01;
        xs = param11;
        tmp4 = NofibPrelude1.Cons(x1, l$_);
        return r_inst_4_2_8_7_tsni(tmp4, xs)
      };
      return f_inst_4_2_tsni(t, tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
combine_inst_5_tsni = function combine_inst_5_tsni(y, h, ys, t) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude1.Cons(y, h);
  tmp1 = NofibPrelude1.Cons(ys, t);
  tmp2 = NofibPrelude1.transpose(tmp1);
  return NofibPrelude1.Cons(tmp, tmp2)
};
unzip_inst_5_1_tsni = function unzip_inst_5_1_tsni(l1) {
  let lambda24, lambda25;
  lambda25 = (l$_) => {
    return l$_
  };
  lambda24 = (l$_) => {
    return l$_
  };
  return f_inst_5_1_2_tsni(l1, lambda25, lambda24)
};
f_inst_5_1_2_tsni = function f_inst_5_1_2_tsni(l1, a, b) {
  return runtime.safeCall(l1(a, b))
};
lscomp_inst_5_3_tsni = function lscomp_inst_5_3_tsni(ls) {
  let param0, param1, h, t, param01, param11, hd, tl, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ls instanceof NofibPrelude1.Nil.class) {
    return (a, b) => {
      let tmp2, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
      tmp2 = reverse_inst_5_1_2_6_tsni(a);
      tmp3 = reverse_inst_5_1_2_8_tsni(b);
      _deforest_Deforest_Arr_2_01 = tmp2;
      _deforest_Deforest_Arr_2_11 = tmp3;
      return (x, xs) => {
        let first1, first0, hds, tls;
        first0 = _deforest_Deforest_Arr_2_01;
        first1 = _deforest_Deforest_Arr_2_11;
        hds = first0;
        tls = first1;
        return combine_inst_5_tsni(x, hds, xs, tls)
      }
    }
  } else if (ls instanceof NofibPrelude1.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    if (h instanceof NofibPrelude1.Cons.class) {
      param01 = h.head;
      param11 = h.tail;
      hd = param01;
      tl = param11;
      _deforest_Deforest_Arr_2_0 = hd;
      _deforest_Deforest_Arr_2_1 = tl;
      tmp = (a, b, param12) => {
        let first1, first0, x, y, t1, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        x = first0;
        y = first1;
        t1 = param12;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = a;
        tmp2 = (l$_) => {
          let param02, param13, x1, xs, tmp4;
          param02 = _deforest_Cons_head1;
          param13 = _deforest_Cons_tail1;
          x1 = param02;
          xs = param13;
          tmp4 = NofibPrelude1.Cons(x1, l$_);
          return r_inst_5_1_2_6_7_tsni(tmp4, xs)
        };
        _deforest_Cons_head2 = y;
        _deforest_Cons_tail2 = b;
        tmp3 = (l$_) => {
          let param02, param13, x1, xs, tmp4;
          param02 = _deforest_Cons_head2;
          param13 = _deforest_Cons_tail2;
          x1 = param02;
          xs = param13;
          tmp4 = NofibPrelude1.Cons(x1, l$_);
          return r_inst_5_1_2_8_7_tsni(tmp4, xs)
        };
        return f_inst_5_1_2_tsni(t1, tmp2, tmp3)
      };
      tmp1 = lscomp_inst_5_3_tsni(t);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (a, b) => {
        let param02, param12;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        return runtime.safeCall(param02(a, b, param12))
      }
    } else {
      return lscomp_inst_5_3_tsni(t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
reverse_inst_0_1_2_6_tsni = function reverse_inst_0_1_2_6_tsni(l1) {
  return r_inst_0_1_2_6_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_0_1_2_6_7_tsni = function r_inst_0_1_2_6_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
reverse_inst_0_1_2_8_tsni = function reverse_inst_0_1_2_8_tsni(l1) {
  return r_inst_0_1_2_8_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_0_1_2_8_7_tsni = function r_inst_0_1_2_8_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
reverse_inst_4_2_8_tsni = function reverse_inst_4_2_8_tsni(l1) {
  return r_inst_4_2_8_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_4_2_8_7_tsni = function r_inst_4_2_8_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
reverse_inst_4_2_6_tsni = function reverse_inst_4_2_6_tsni(l1) {
  return r_inst_4_2_6_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_4_2_6_7_tsni = function r_inst_4_2_6_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
reverse_inst_5_1_2_6_tsni = function reverse_inst_5_1_2_6_tsni(l1) {
  return r_inst_5_1_2_6_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_5_1_2_6_7_tsni = function r_inst_5_1_2_6_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
reverse_inst_5_1_2_8_tsni = function reverse_inst_5_1_2_8_tsni(l1) {
  return r_inst_5_1_2_8_7_tsni(NofibPrelude.Nil, l1)
};
r_inst_5_1_2_8_7_tsni = function r_inst_5_1_2_8_7_tsni(l$_, l1) {
  return runtime.safeCall(l1(l$_))
};
go$ = function go$(s, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i < s.length;
  if (scrut === true) {
    tmp = runtime.safeCall(s.charAt(i));
    tmp1 = i + 1;
    tmp2 = go$(s, tmp1);
    return NofibPrelude1.Cons(tmp, tmp2)
  } else {
    return NofibPrelude1.Nil
  }
};
go1 = function go(s) {
  return (i) => {
    return go$(s, i)
  }
};
lambda$16 = function lambda$(x) {
  let tmp;
  tmp = NofibPrelude1.repeat(x);
  return NofibPrelude1.LzCons(x, tmp)
};
lambda22 = (undefined, function (x) {
  return () => {
    return lambda$16(x)
  }
});
lambda$15 = function lambda$(a) {
  let tmp, tmp1;
  tmp = a + 1;
  tmp1 = NofibPrelude1.enumFrom(tmp);
  return NofibPrelude1.LzCons(a, tmp1)
};
lambda21 = (undefined, function (a) {
  return () => {
    return lambda$15(a)
  }
});
lambda19 = (undefined, function () {
  return NofibPrelude1.LzNil
});
lambda$14 = function lambda$(n, x) {
  let tmp, tmp1;
  tmp = n - 1;
  tmp1 = NofibPrelude1.replicate_lz(tmp, x);
  return NofibPrelude1.LzCons(x, tmp1)
};
lambda20 = (undefined, function (n, x) {
  return () => {
    return lambda$14(n, x)
  }
});
lambda$13 = function lambda$(xs, ys) {
  let scrut, param0, param1, h, t, tmp;
  scrut = NofibPrelude1.force(xs);
  if (scrut instanceof NofibPrelude1.LzNil.class) {
    return NofibPrelude1.force(ys)
  } else if (scrut instanceof NofibPrelude1.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = NofibPrelude1.append_lz_lz(t, ys);
    return NofibPrelude1.LzCons(h, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda18 = (undefined, function (xs, ys) {
  return () => {
    return lambda$13(xs, ys)
  }
});
lambda$12 = function lambda$(ys, h, t) {
  let tmp;
  tmp = NofibPrelude1.append_nl_lz(t, ys);
  return NofibPrelude1.LzCons(h, tmp)
};
lambda17 = (undefined, function (ys, h, t) {
  return () => {
    return lambda$12(ys, h, t)
  }
});
lambda$11 = function lambda$(f1, x) {
  let tmp, tmp1;
  tmp = runtime.safeCall(f1(x));
  tmp1 = NofibPrelude1.iterate(f1, tmp);
  return NofibPrelude1.LzCons(x, tmp1)
};
lambda16 = (undefined, function (f1, x) {
  return () => {
    return lambda$11(f1, x)
  }
});
lambda$10 = function lambda$(f1, xss, yss) {
  let scrut, param0, param1, x, xs, scrut1, param01, param11, y, ys, tmp, tmp1;
  scrut = NofibPrelude1.force(xss);
  if (scrut instanceof NofibPrelude1.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs = param1;
    scrut1 = NofibPrelude1.force(yss);
    if (scrut1 instanceof NofibPrelude1.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f1(x, y));
      tmp1 = NofibPrelude1.zipWith_lz_lz(f1, xs, ys);
      return NofibPrelude1.LzCons(tmp, tmp1)
    } else {
      return NofibPrelude1.LzNil
    }
  } else {
    return NofibPrelude1.LzNil
  }
};
lambda15 = (undefined, function (f1, xss, yss) {
  return () => {
    return lambda$10(f1, xss, yss)
  }
});
lambda$9 = function lambda$(x, xs, y, ys) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    x,
    y
  ]);
  tmp1 = NofibPrelude1.zip_lz_lz(xs, ys);
  return NofibPrelude1.LzCons(tmp, tmp1)
};
lambda12 = (undefined, function (x, xs, y, ys) {
  return () => {
    return lambda$9(x, xs, y, ys)
  }
});
lambda13 = (undefined, function () {
  return NofibPrelude1.LzNil
});
lambda14 = (undefined, function () {
  return NofibPrelude1.LzNil
});
lambda11 = (undefined, function () {
  return NofibPrelude1.LzNil
});
lambda$8 = function lambda$(n, ls) {
  let scrut, scrut1, param0, param1, h, t, tmp, tmp1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude1.force(ls);
    if (scrut1 instanceof NofibPrelude1.LzNil.class) {
      return NofibPrelude1.LzNil
    } else if (scrut1 instanceof NofibPrelude1.LzCons.class) {
      param0 = scrut1.head;
      param1 = scrut1.tail;
      h = param0;
      t = param1;
      tmp = n - 1;
      tmp1 = NofibPrelude1.take_lz_lz(tmp, t);
      return NofibPrelude1.LzCons(h, tmp1)
    } else {
      return NofibPrelude1.LzNil
    }
  } else {
    return NofibPrelude1.LzNil
  }
};
lambda10 = (undefined, function (n, ls) {
  return () => {
    return lambda$8(n, ls)
  }
});
lambda9 = (undefined, function (x, y) {
  return x == y
});
lambda$7 = function lambda$(eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
};
lambda7 = (undefined, function (eq, h) {
  return (y) => {
    return lambda$7(eq, h, y)
  }
});
lambda$6 = function lambda$(eq, ls) {
  let scrut, param0, param1, h, t, tmp, tmp1, lambda$this;
  scrut = NofibPrelude1.force(ls);
  if (scrut instanceof NofibPrelude1.LzNil.class) {
    return NofibPrelude1.LzNil
  } else if (scrut instanceof NofibPrelude1.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    lambda$this = runtime.safeCall(lambda7(eq, h));
    tmp = NofibPrelude1.filter_lz(lambda$this, t);
    tmp1 = NofibPrelude1.nubBy_lz(eq, tmp);
    return NofibPrelude1.LzCons(h, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda8 = (undefined, function (eq, ls) {
  return () => {
    return lambda$6(eq, ls)
  }
});
lambda$5 = function lambda$(p, ls) {
  let scrut, param0, param1, h, t, scrut1, tmp, tmp1;
  scrut = NofibPrelude1.force(ls);
  if (scrut instanceof NofibPrelude1.LzNil.class) {
    return NofibPrelude1.LzNil
  } else if (scrut instanceof NofibPrelude1.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    scrut1 = runtime.safeCall(p(h));
    if (scrut1 === true) {
      tmp = NofibPrelude1.filter_lz(p, t);
      return NofibPrelude1.LzCons(h, tmp)
    } else {
      tmp1 = NofibPrelude1.filter_lz(p, t);
      return NofibPrelude1.force(tmp1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda6 = (undefined, function (p, ls) {
  return () => {
    return lambda$5(p, ls)
  }
});
lambda$4 = function lambda$(f1, ls) {
  let scrut, param0, param1, h, t, tmp, tmp1;
  scrut = NofibPrelude1.force(ls);
  if (scrut instanceof NofibPrelude1.LzNil.class) {
    return NofibPrelude1.LzNil
  } else if (scrut instanceof NofibPrelude1.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f1(h));
    tmp1 = NofibPrelude1.map_lz(f1, t);
    return NofibPrelude1.LzCons(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda5 = (undefined, function (f1, ls) {
  return () => {
    return lambda$4(f1, ls)
  }
});
lscomp = function lscomp(ls) {
  let param0, param1, h, t, param01, param11, hd, tl, tmp, tmp1;
  if (ls instanceof NofibPrelude1.Nil.class) {
    return NofibPrelude1.Nil
  } else if (ls instanceof NofibPrelude1.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    if (h instanceof NofibPrelude1.Cons.class) {
      param01 = h.head;
      param11 = h.tail;
      hd = param01;
      tl = param11;
      tmp = globalThis.Object.freeze([
        hd,
        tl
      ]);
      tmp1 = lscomp(t);
      return NofibPrelude1.Cons(tmp, tmp1)
    } else {
      return lscomp(t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
combine = function combine(y, h, ys, t) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude1.Cons(y, h);
  tmp1 = NofibPrelude1.Cons(ys, t);
  tmp2 = transpose_inst_0_tsni(tmp1);
  return NofibPrelude1.Cons(tmp, tmp2)
};
f = function f(l1, a, b) {
  let param0, param1, first1, first0, x, y, t, tmp, tmp1, tmp2, tmp3;
  if (l1 instanceof NofibPrelude1.Nil.class) {
    tmp = NofibPrelude1.reverse(a);
    tmp1 = NofibPrelude1.reverse(b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } else if (l1 instanceof NofibPrelude1.Cons.class) {
    param0 = l1.head;
    param1 = l1.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      t = param1;
      tmp2 = NofibPrelude1.Cons(x, a);
      tmp3 = NofibPrelude1.Cons(y, b);
      return f(t, tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
go = function go(xs, a) {
  let param0, param1, h, t, tmp;
  if (xs instanceof NofibPrelude1.Nil.class) {
    return a
  } else if (xs instanceof NofibPrelude1.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    h = param0;
    t = param1;
    tmp = a + h;
    return go(t, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda4 = (undefined, function (x, y) {
  return x == y
});
lambda$3 = function lambda$(eq, acc, y) {
  return NofibPrelude1.deleteBy(eq, y, acc)
};
lambda3 = (undefined, function (eq) {
  return (acc, y) => {
    return lambda$3(eq, acc, y)
  }
});
lambda$2 = function lambda$(eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
};
lambda2 = (undefined, function (eq, h) {
  return (y) => {
    return lambda$2(eq, h, y)
  }
});
lambda1 = (undefined, function (x, y) {
  let scrut;
  scrut = x > y;
  if (scrut === true) {
    return x
  } else {
    return y
  }
});
lambda$1 = function lambda$(f1, xs, ys) {
  return NofibPrelude1.listEqBy(f1, xs, ys)
};
lambda = (undefined, function (f1, xs, ys) {
  return () => {
    return lambda$1(f1, xs, ys)
  }
});
l = function l(ls, a) {
  let param0, param1, h, t, tmp;
  if (ls instanceof NofibPrelude1.Nil.class) {
    return a
  } else if (ls instanceof NofibPrelude1.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = a + 1;
    return l(t, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
r = function r(l$_, l1) {
  let param0, param1, x, xs, tmp;
  if (l1 instanceof NofibPrelude1.Cons.class) {
    param0 = l1.head;
    param1 = l1.tail;
    x = param0;
    xs = param1;
    tmp = NofibPrelude1.Cons(x, l$_);
    return r(tmp, xs)
  } else {
    return l$_
  }
};
lambda$ = function lambda$(f1, g, x) {
  let tmp;
  tmp = runtime.safeCall(g(x));
  return runtime.safeCall(f1(tmp))
};
lambda23 = (undefined, function (f1, g) {
  return (x) => {
    return lambda$(f1, g, x)
  }
});
globalThis.Object.freeze(class NofibPrelude {
  static {
    NofibPrelude1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    globalThis.Object.freeze(class Option {
      static {
        NofibPrelude.Option = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Option"]; 
    });
    this.Some = function Some(x) {
      return globalThis.Object.freeze(new Some.class(x));
    };
    globalThis.Object.freeze(class Some extends NofibPrelude.Option {
      static {
        NofibPrelude.Some.class = this
      }
      constructor(x) {
        super();
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["x"]]; 
    });
    globalThis.Object.freeze(class None extends NofibPrelude.Option {
      static {
        NofibPrelude.None = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: None
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"]; 
    });
    this.Lazy = function Lazy(init) {
      return globalThis.Object.freeze(new Lazy.class(init));
    };
    globalThis.Object.freeze(class Lazy {
      static {
        NofibPrelude.Lazy.class = this
      }
      constructor(init) {
        this.init = init;
        this.cached = NofibPrelude.None;
      }
      #cached;
      get cached() { return this.#cached; }
      set cached(value) { this.#cached = value; }
      get() {
        let scrut, v, param0, v1, tmp;
        scrut = this.cached;
        if (scrut instanceof NofibPrelude.Some.class) {
          param0 = scrut.x;
          v1 = param0;
          return v1
        } else {
          v = runtime.safeCall(this.init());
          tmp = NofibPrelude.Some(v);
          this.cached = tmp;
          return v
        }
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lazy", ["init"]]; 
    });
    globalThis.Object.freeze(class List {
      static {
        NofibPrelude.List = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "List"]; 
    });
    this.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    globalThis.Object.freeze(class Cons extends NofibPrelude.List {
      static {
        NofibPrelude.Cons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() {
        let tmp, tmp1, tmp2;
        tmp = NofibPrelude.Cons(this.head, this.tail);
        tmp1 = NofibPrelude._internal_cons_to_str(tmp);
        tmp2 = "[" + tmp1;
        return tmp2 + "]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]]; 
    });
    globalThis.Object.freeze(class Nil extends NofibPrelude.List {
      static {
        NofibPrelude.Nil = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Nil
        })
      }
      toString() {
        return "[]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["object", "Nil"]; 
    });
    globalThis.Object.freeze(class LzList {
      static {
        NofibPrelude.LzList = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzList"]; 
    });
    this.LzCons = function LzCons(head, tail) {
      return globalThis.Object.freeze(new LzCons.class(head, tail));
    };
    globalThis.Object.freeze(class LzCons extends NofibPrelude.LzList {
      static {
        NofibPrelude.LzCons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzCons", ["head", "tail"]]; 
    });
    globalThis.Object.freeze(class LzNil extends NofibPrelude.LzList {
      static {
        NofibPrelude.LzNil = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LzNil
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LzNil"]; 
    });
  }
  static fromSome(s) {
    let param0, x;
    if (s instanceof NofibPrelude.Some.class) {
      param0 = s.x;
      x = param0;
      return x
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static lazy(x) {
    return NofibPrelude.Lazy(x)
  } 
  static force(x) {
    if (x instanceof NofibPrelude.Lazy.class) {
      return x.get()
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static _internal_cons_to_str(ls) {
    let param0, param1, h, t, h1, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(Predef.render(h1))
      } else {
        h = param0;
        t = param1;
        tmp = runtime.safeCall(Predef.render(h));
        tmp1 = tmp + ",";
        tmp2 = NofibPrelude._internal_cons_to_str(t);
        return tmp1 + tmp2
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ltList(xs, ys, lt, gt) {
    let param0, param1, x, xs1, param01, param11, y, ys1, scrut, scrut1;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        y = param01;
        ys1 = param11;
        scrut1 = runtime.safeCall(lt(x, y));
        if (scrut1 === true) {
          return true
        } else {
          scrut = runtime.safeCall(gt(x, y));
          if (scrut === true) {
            return false
          } else {
            return NofibPrelude.ltList(xs1, ys1, lt, gt)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static list(...args) {
    let rest, first0, x, xs, tmp;
    if (runtime.Tuple.isArrayLike(args) && args.length === 0) {
      return NofibPrelude.Nil
    } else if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
      first0 = runtime.Tuple.get(args, 0);
      rest = runtime.safeCall(runtime.Tuple.slice(args, 1, 0));
      x = first0;
      xs = rest;
      tmp = NofibPrelude.list(...xs);
      return NofibPrelude.Cons(x, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ltTup2(t1, t2, lt1, gt1, lt2) {
    let first1, first0, a, b, first11, first01, c, d, scrut, scrut1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      first0 = runtime.Tuple.get(t1, 0);
      first1 = runtime.Tuple.get(t1, 1);
      a = first0;
      b = first1;
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        first01 = runtime.Tuple.get(t2, 0);
        first11 = runtime.Tuple.get(t2, 1);
        c = first01;
        d = first11;
        scrut1 = runtime.safeCall(lt1(a, c));
        if (scrut1 === true) {
          return true
        } else {
          scrut = runtime.safeCall(gt1(a, c));
          if (scrut === true) {
            return false
          } else {
            return runtime.safeCall(lt2(b, d))
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static eqTup2(t1, t2) {
    let first1, first0, a, b, first11, first01, c, d, scrut, scrut1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      first0 = runtime.Tuple.get(t1, 0);
      first1 = runtime.Tuple.get(t1, 1);
      a = first0;
      b = first1;
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        first01 = runtime.Tuple.get(t2, 0);
        first11 = runtime.Tuple.get(t2, 1);
        c = first01;
        d = first11;
        scrut = a == c;
        if (scrut === true) {
          scrut1 = b == d;
          if (scrut1 === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static compose(f1, g) {
    return runtime.safeCall(lambda23(f1, g))
  } 
  static snd(x) {
    let first1, first0, f1, s;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      first0 = runtime.Tuple.get(x, 0);
      first1 = runtime.Tuple.get(x, 1);
      f1 = first0;
      s = first1;
      return s
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static fst(x) {
    let first1, first0, f1, s;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      first0 = runtime.Tuple.get(x, 0);
      first1 = runtime.Tuple.get(x, 1);
      f1 = first0;
      s = first1;
      return f1
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static until(p, f1, i) {
    let scrut, tmp;
    scrut = runtime.safeCall(p(i));
    if (scrut === true) {
      return i
    } else {
      tmp = runtime.safeCall(f1(i));
      return NofibPrelude.until(p, f1, tmp)
    }
  } 
  static flip(f1, x, y) {
    let tmp;
    tmp = runtime.safeCall(f1(y));
    return runtime.safeCall(tmp(x))
  } 
  static power(a, n) {
    return globalThis.Math.pow(a, n)
  } 
  static intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  } 
  static intQuot(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.trunc(tmp))
  } 
  static intMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  } 
  static intRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  } 
  static quotRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = NofibPrelude.intRem(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static divMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = NofibPrelude.intMod(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static max(a, b) {
    return globalThis.Math.max(a, b)
  } 
  static min(a, b) {
    return globalThis.Math.min(a, b)
  } 
  static abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  } 
  static head(l1) {
    let param0, param1, h, t;
    if (l1 instanceof NofibPrelude.Cons.class) {
      param0 = l1.head;
      param1 = l1.tail;
      h = param0;
      t = param1;
      return h
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static tail(l1) {
    let param0, param1, h, t;
    if (l1 instanceof NofibPrelude.Cons.class) {
      param0 = l1.head;
      param1 = l1.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static while_(p, f1, x) {
    let scrut, tmp;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      tmp = runtime.safeCall(f1(x));
      return NofibPrelude.while_(p, f1, tmp)
    } else {
      return x
    }
  } 
  static reverse(l1) {
    return r(NofibPrelude.Nil, l1)
  } 
  static map(f1, xs) {
    let param0, param1, x, xs1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = NofibPrelude.map(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static listLen(ls) {
    return l(ls, 0)
  } 
  static listEq(xs, ys) {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      hx = param0;
      tx = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        hy = param01;
        ty = param11;
        scrut = hx == hy;
        if (scrut === true) {
          return NofibPrelude.listEq(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static listEqBy(f1, a, b) {
    let param0, param1, x, xs, param01, param11, y, ys, tmp, lambda$this;
    if (a instanceof NofibPrelude.Nil.class) {
      if (b instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else if (a instanceof NofibPrelude.Cons.class) {
      param0 = a.head;
      param1 = a.tail;
      x = param0;
      xs = param1;
      if (b instanceof NofibPrelude.Cons.class) {
        param01 = b.head;
        param11 = b.tail;
        y = param01;
        ys = param11;
        tmp = runtime.safeCall(f1(x, y));
        lambda$this = runtime.safeCall(lambda(f1, xs, ys));
        return runtime.short_and(tmp, lambda$this)
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static listNeq(xs, ys) {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      hx = param0;
      tx = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        hy = param01;
        ty = param11;
        scrut = hx == hy;
        if (scrut === true) {
          return NofibPrelude.listNeq(tx, ty)
        } else {
          return true
        }
      } else {
        return true
      }
    } else {
      return true
    }
  } 
  static enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = NofibPrelude.enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    } else {
      return NofibPrelude.Nil
    }
  } 
  static enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = NofibPrelude.enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    } else {
      return NofibPrelude.Nil
    }
  } 
  static leave(n, ls) {
    let param0, param1, h, t, scrut, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = n <= 0;
      if (scrut === true) {
        return ls
      } else {
        tmp = n - 1;
        return NofibPrelude.leave(tmp, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static take(n, ls) {
    let param0, param1, h, t, scrut, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      } else {
        tmp = n - 1;
        tmp1 = NofibPrelude.take(tmp, t);
        return NofibPrelude.Cons(h, tmp1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static splitAt(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take(n, ls);
    tmp1 = NofibPrelude.leave(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static zip(xs, ys) {
    let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1;
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
        tmp = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp1 = NofibPrelude.zip(xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static inList(x, ls) {
    let param0, param1, h, t, scrut;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = x === h;
      if (scrut === true) {
        return true
      } else {
        return NofibPrelude.inList(x, t)
      }
    } else if (ls instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static notElem(x, ls) {
    let tmp;
    tmp = NofibPrelude.inList(x, ls);
    return ! tmp
  } 
  static append(xs, ys) {
    let param0, param1, x, xs1, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      tmp = NofibPrelude.append(xs1, ys);
      return NofibPrelude.Cons(x, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static concat(ls) {
    let param0, param1, x, xs, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x = param0;
      xs = param1;
      tmp = NofibPrelude.concat(xs);
      return NofibPrelude.append(x, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static filter(f1, ls) {
    let param0, param1, h, t, scrut, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        tmp = NofibPrelude.filter(f1, t);
        return NofibPrelude.Cons(h, tmp)
      } else {
        return NofibPrelude.filter(f1, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static all(p, ls) {
    let param0, param1, h, t, scrut;
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = runtime.safeCall(p(h));
      if (scrut === true) {
        return NofibPrelude.all(p, t)
      } else {
        return false
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static orList(ls) {
    let param0, param1, h, t;
    if (ls instanceof NofibPrelude.Nil.class) {
      return false
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      if (h === true) {
        return true
      } else {
        return NofibPrelude.orList(t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static leaveWhile(f1, ls) {
    let param0, param1, h, t, scrut;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = runtime.safeCall(f1(h));
      if (scrut === true) {
        return NofibPrelude.leaveWhile(f1, t)
      } else {
        return NofibPrelude.Cons(h, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static foldl(f1, a, xs) {
    let param0, param1, h, t, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return a
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      tmp = runtime.safeCall(f1(a, h));
      return NofibPrelude.foldl(f1, tmp, t)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static scanl(f1, q, ls) {
    let param0, param1, x, xs, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f1(q, x));
      tmp1 = NofibPrelude.scanl(f1, tmp, xs);
      return NofibPrelude.Cons(q, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static scanr(f1, q, ls) {
    let param0, param1, x, xs, scrut, param01, param11, q1, t, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x = param0;
      xs = param1;
      scrut = NofibPrelude.scanr(f1, q, xs);
      if (scrut instanceof NofibPrelude.Cons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        q1 = param01;
        t = param11;
        tmp = runtime.safeCall(f1(x, q1));
        tmp1 = NofibPrelude.Cons(q1, t);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static foldr(f1, z, xs) {
    let param0, param1, h, t, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      tmp = NofibPrelude.foldr(f1, z, t);
      return runtime.safeCall(f1(h, tmp))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static foldl1(f1, ls) {
    let param0, param1, x, xs;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x = param0;
      xs = param1;
      return NofibPrelude.foldl(f1, x, xs)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static foldr1(f1, ls) {
    let param0, param1, x, xs, x1, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x1
      } else {
        x = param0;
        xs = param1;
        tmp = NofibPrelude.foldr1(f1, xs);
        return runtime.safeCall(f1(x, tmp))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static maximum(xs) {
    return NofibPrelude.foldl1(lambda1, xs)
  } 
  static nubBy(eq, ls) {
    let param0, param1, h, t, tmp, tmp1, lambda$this;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      lambda$this = runtime.safeCall(lambda2(eq, h));
      tmp = NofibPrelude.filter(lambda$this, t);
      tmp1 = NofibPrelude.nubBy(eq, tmp);
      return NofibPrelude.Cons(h, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static zipWith(f1, xss, yss) {
    let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      param0 = xss.head;
      param1 = xss.tail;
      x = param0;
      xs = param1;
      if (yss instanceof NofibPrelude.Cons.class) {
        param01 = yss.head;
        param11 = yss.tail;
        y = param01;
        ys = param11;
        tmp = runtime.safeCall(f1(x, y));
        tmp1 = NofibPrelude.zipWith(f1, xs, ys);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static deleteBy(eq, x, ys) {
    let param0, param1, y, ys1, scrut, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param0 = ys.head;
      param1 = ys.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(eq(x, y));
      if (scrut === true) {
        return ys1
      } else {
        tmp = NofibPrelude.deleteBy(eq, x, ys1);
        return NofibPrelude.Cons(y, tmp)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static unionBy(eq, xs, ys) {
    let tmp, tmp1, lambda$this;
    tmp = NofibPrelude.nubBy(eq, ys);
    lambda$this = runtime.safeCall(lambda3(eq));
    tmp1 = NofibPrelude.foldl(lambda$this, tmp, xs);
    return NofibPrelude.append(xs, tmp1)
  } 
  static union(xs, ys) {
    return NofibPrelude.unionBy(lambda4, xs, ys)
  } 
  static atIndex(i, ls) {
    let param0, param1, h, t, scrut, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = i == 0;
      if (scrut === true) {
        return h
      } else {
        tmp = i - 1;
        return NofibPrelude.atIndex(tmp, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static sum(xs) {
    return go(xs, 0)
  } 
  static null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  } 
  static replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      tmp = n - 1;
      tmp1 = NofibPrelude.replicate(tmp, x);
      return NofibPrelude.Cons(x, tmp1)
    }
  } 
  static unzip(l1) {
    let lambda24, lambda25;
    lambda25 = (l$_) => {
      return l$_
    };
    lambda24 = (l$_) => {
      return l$_
    };
    return f_inst_4_2_tsni(l1, lambda25, lambda24)
  } 
  static zip3(xs, ys, zs) {
    let param0, param1, x, xs1, param01, param11, y, ys1, param02, param12, z, zs1, tmp, tmp1;
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
        if (zs instanceof NofibPrelude.Cons.class) {
          param02 = zs.head;
          param12 = zs.tail;
          z = param02;
          zs1 = param12;
          tmp = globalThis.Object.freeze([
            x,
            y,
            z
          ]);
          tmp1 = NofibPrelude.zip3(xs1, ys1, zs1);
          return NofibPrelude.Cons(tmp, tmp1)
        } else {
          return NofibPrelude.Nil
        }
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static transpose(xss) {
    let param0, param1, param01, param11, x, xs, xss1, scrut, xss2, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      param0 = xss.head;
      param1 = xss.tail;
      if (param0 instanceof NofibPrelude.Nil.class) {
        xss2 = param1;
        return NofibPrelude.transpose(xss2)
      } else if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param11 = param0.tail;
        x = param01;
        xs = param11;
        xss1 = param1;
        tmp = lscomp_inst_5_3_tsni(xss1);
        scrut = unzip_inst_5_1_tsni(tmp);
        return runtime.safeCall(scrut(x, xs))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static break_(p, ls) {
    let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x = param0;
      xs = param1;
      scrut1 = runtime.safeCall(p(x));
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(x, xs);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      } else {
        scrut = NofibPrelude.break_(p, xs);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          ys = first0;
          zs = first1;
          tmp1 = NofibPrelude.Cons(x, ys);
          return globalThis.Object.freeze([
            tmp1,
            zs
          ])
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static flatMap(f1, ls) {
    let param0, param1, h, t, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp = runtime.safeCall(f1(h));
      tmp1 = NofibPrelude.flatMap(f1, t);
      return NofibPrelude.append(tmp, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static map_lz(f1, ls) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda5(f1, ls));
    return NofibPrelude.lazy(lambda$this)
  } 
  static filter_lz(p, ls) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda6(p, ls));
    return NofibPrelude.lazy(lambda$this)
  } 
  static nubBy_lz(eq, ls) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda8(eq, ls));
    return NofibPrelude.lazy(lambda$this)
  } 
  static nub_lz(ls) {
    return NofibPrelude.nubBy_lz(lambda9, ls)
  } 
  static take_lz(n, ls) {
    let scrut, scrut1, param0, param1, h, t, tmp, tmp1;
    scrut = n > 0;
    if (scrut === true) {
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        param0 = scrut1.head;
        param1 = scrut1.tail;
        h = param0;
        t = param1;
        tmp = n - 1;
        tmp1 = NofibPrelude.take_lz(tmp, t);
        return NofibPrelude.Cons(h, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static take_lz_lz(n, ls) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda10(n, ls));
    return NofibPrelude.lazy(lambda$this)
  } 
  static leave_lz(n, ls) {
    let scrut, param0, param1, h, t, scrut1, tmp;
    scrut1 = n <= 0;
    if (scrut1 === true) {
      return ls
    } else {
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.lazy(lambda11)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        h = param0;
        t = param1;
        tmp = n - 1;
        return NofibPrelude.leave_lz(tmp, t)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } 
  static splitAt_lz(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take_lz(n, ls);
    tmp1 = NofibPrelude.leave_lz(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static zip_lz_nl(xs, ys) {
    let scrut, param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs1 = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        y = param01;
        ys1 = param11;
        tmp = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp1 = NofibPrelude.zip_lz_nl(xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static zip_lz_lz(xs, ys) {
    let scrut, param0, param1, x, xs1, scrut1, param01, param11, y, ys1, lambda$this;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs1 = param1;
      scrut1 = NofibPrelude.force(ys);
      if (scrut1 instanceof NofibPrelude.LzCons.class) {
        param01 = scrut1.head;
        param11 = scrut1.tail;
        y = param01;
        ys1 = param11;
        lambda$this = runtime.safeCall(lambda12(x, xs1, y, ys1));
        return NofibPrelude.lazy(lambda$this)
      } else {
        return NofibPrelude.lazy(lambda13)
      }
    } else {
      return NofibPrelude.lazy(lambda14)
    }
  } 
  static zipWith_lz_lz(f1, xss, yss) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda15(f1, xss, yss));
    return NofibPrelude.lazy(lambda$this)
  } 
  static zipWith_lz_nl(f1, xss, yss) {
    let scrut, param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1;
    scrut = NofibPrelude.force(xss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs = param1;
      if (yss instanceof NofibPrelude.Cons.class) {
        param01 = yss.head;
        param11 = yss.tail;
        y = param01;
        ys = param11;
        tmp = runtime.safeCall(f1(x, y));
        tmp1 = NofibPrelude.zipWith_lz_nl(f1, xs, ys);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static iterate(f1, x) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda16(f1, x));
    return NofibPrelude.lazy(lambda$this)
  } 
  static append_nl_lz(xs, ys) {
    let param0, param1, h, t, lambda$this;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      lambda$this = runtime.safeCall(lambda17(ys, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static append_lz_lz(xs, ys) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda18(xs, ys));
    return NofibPrelude.lazy(lambda$this)
  } 
  static replicate_lz(n, x) {
    let scrut, lambda$this;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.lazy(lambda19)
    } else {
      lambda$this = runtime.safeCall(lambda20(n, x));
      return NofibPrelude.lazy(lambda$this)
    }
  } 
  static enumFrom(a) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda21(a));
    return NofibPrelude.lazy(lambda$this)
  } 
  static head_lz(ls) {
    let scrut, param0, param1, h, t;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      return h
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static repeat(x) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda22(x));
    return NofibPrelude.lazy(lambda$this)
  } 
  static stringOfFloat(x) {
    return x + ""
  } 
  static stringOfInt(x) {
    return x + ""
  } 
  static stringConcat(x, y) {
    return x + y
  } 
  static stringListConcat(ls) {
    let param0, param1, h, t, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp = NofibPrelude.stringListConcat(t);
      return NofibPrelude.stringConcat(h, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  } 
  static tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
  } 
  static sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  } 
  static cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  } 
  static round(x) {
    return runtime.safeCall(globalThis.Math.round(x))
  } 
  static int_of_char(x) {
    return runtime.safeCall(x.charCodeAt(0))
  } 
  static nofibStringToList(s) {
    return go$(s, 0)
  } 
  static nofibListToString(ls) {
    let param0, param1, h, t, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      tmp = NofibPrelude.nofibListToString(t);
      return h + tmp
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NofibPrelude"]; 
});
let NofibPrelude = NofibPrelude1; export default NofibPrelude;
