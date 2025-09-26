const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let lscomp, clausify1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lscomp$, lscomp$_inst_0_1_tsni, tautclause_inst_2_3_tsni, lscomp$_inst_2_3_1_tsni, uniclHelper_inst_4_5_tsni, tautclause_inst_4_5_3_tsni, lscomp$_inst_4_5_3_1_tsni, interleave_inst_6_7_tsni, interleave_inst_6_8_tsni, unicl_inst_9_10_tsni, uniclHelper_inst_9_10_5_tsni, tautclause_inst_9_10_5_3_tsni, lscomp$_inst_9_10_5_3_1_tsni, split_inst_9_11_tsni, splitHelper_inst_9_11_12_tsni, disp_inst_9_13_tsni, interleave_inst_9_13_7_tsni, interleave_inst_9_13_8_tsni, map_inst_9_14_tsni, clauses_inst_15_16_tsni, map_inst_15_16_14_tsni, disp_inst_15_16_13_tsni, interleave_inst_15_16_13_7_tsni, interleave_inst_15_16_13_8_tsni, unicl_inst_15_16_10_tsni, uniclHelper_inst_15_16_10_5_tsni, tautclause_inst_15_16_10_5_3_tsni, lscomp$_inst_15_16_10_5_3_1_tsni, split_inst_15_16_11_tsni, splitHelper_inst_15_16_11_12_tsni, replicate_inst_15_17_tsni, map_inst_15_18_tsni, concat_inst_15_16_19_tsni, append_inst_15_16_19_20_tsni, testClausify_nofib_inst_21_22_tsni, map_inst_21_22_18_tsni, clauses_inst_21_22_16_tsni, unicl_inst_21_22_16_10_tsni, uniclHelper_inst_21_22_16_10_5_tsni, tautclause_inst_21_22_16_10_5_3_tsni, lscomp$_inst_21_22_16_10_5_3_1_tsni, split_inst_21_22_16_11_tsni, splitHelper_inst_21_22_16_11_12_tsni, disp_inst_21_22_16_13_tsni, interleave_inst_21_22_16_13_7_tsni, interleave_inst_21_22_16_13_8_tsni, map_inst_21_22_16_14_tsni, concat_inst_21_22_16_19_tsni, append_inst_21_22_16_19_20_tsni, replicate_inst_21_22_17_tsni, concat_inst_21_22_23_tsni, append_inst_21_22_23_20_tsni, listNeq_inst_0_24_tsni, listNeq_inst_2_3_24_tsni, listNeq_inst_4_5_3_24_tsni, append_inst_6_25_tsni, append_inst_6_26_tsni, listNeq_inst_9_10_5_3_24_tsni, foldr_inst_9_10_27_tsni, append_inst_9_13_25_tsni, append_inst_9_13_26_tsni, concat_inst_9_19_tsni, append_inst_15_16_13_25_tsni, append_inst_15_16_13_26_tsni, listNeq_inst_15_16_10_5_3_24_tsni, foldr_inst_15_16_10_27_tsni, concat_inst_15_23_tsni, append_inst_15_23_20_tsni, listNeq_inst_21_22_16_10_5_3_24_tsni, foldr_inst_21_22_16_10_27_tsni, append_inst_21_22_16_13_25_tsni, append_inst_21_22_16_13_26_tsni, nofibListToString_inst_21_28_tsni;
lscomp$_inst_0_1_tsni = function lscomp$_inst_0_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_0_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_0_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_0_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tautclause_inst_2_3_tsni = function tautclause_inst_2_3_tsni(c_a) {
  let first1, first0, c, a, tmp;
  if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
    first0 = runtime.Tuple.get(c_a, 0);
    first1 = runtime.Tuple.get(c_a, 1);
    c = first0;
    a = first1;
    tmp = lscomp$_inst_2_3_1_tsni(a, c);
    return listNeq_inst_2_3_24_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_2_3_1_tsni = function lscomp$_inst_2_3_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_2_3_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_2_3_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_2_3_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
uniclHelper_inst_4_5_tsni = function uniclHelper_inst_4_5_tsni(p, x) {
  let cp, scrut;
  cp = clausify.clause(p);
  scrut = tautclause_inst_4_5_3_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_4_5_3_tsni = function tautclause_inst_4_5_3_tsni(c_a) {
  let first1, first0, c, a, tmp;
  if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
    first0 = runtime.Tuple.get(c_a, 0);
    first1 = runtime.Tuple.get(c_a, 1);
    c = first0;
    a = first1;
    tmp = lscomp$_inst_4_5_3_1_tsni(a, c);
    return listNeq_inst_4_5_3_24_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_4_5_3_1_tsni = function lscomp$_inst_4_5_3_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_4_5_3_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_4_5_3_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_4_5_3_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_6_7_tsni = function interleave_inst_6_7_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_6_7_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_6_25_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_6_8_tsni = function interleave_inst_6_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_6_8_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_6_26_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
unicl_inst_9_10_tsni = function unicl_inst_9_10_tsni(a) {
  return foldr_inst_9_10_27_tsni(uniclHelper_inst_9_10_5_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_9_10_5_tsni = function uniclHelper_inst_9_10_5_tsni(p, x) {
  let cp, scrut;
  cp = clausify.clause(p);
  scrut = tautclause_inst_9_10_5_3_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_9_10_5_3_tsni = function tautclause_inst_9_10_5_3_tsni(c_a) {
  let first1, first0, c, a, tmp;
  if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
    first0 = runtime.Tuple.get(c_a, 0);
    first1 = runtime.Tuple.get(c_a, 1);
    c = first0;
    a = first1;
    tmp = lscomp$_inst_9_10_5_3_1_tsni(a, c);
    return listNeq_inst_9_10_5_3_24_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_9_10_5_3_1_tsni = function lscomp$_inst_9_10_5_3_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_9_10_5_3_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_9_10_5_3_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_9_10_5_3_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
split_inst_9_11_tsni = function split_inst_9_11_tsni(p) {
  let lambda7;
  lambda7 = (f, z) => {
    return z
  };
  return splitHelper_inst_9_11_12_tsni(p, lambda7)
};
splitHelper_inst_9_11_12_tsni = function splitHelper_inst_9_11_12_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_9_11_12_tsni(q, a);
    return splitHelper_inst_9_11_12_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_9_10_27_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
disp_inst_9_13_tsni = function disp_inst_9_13_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
    first0 = runtime.Tuple.get(l_r, 0);
    first1 = runtime.Tuple.get(l_r, 1);
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_9_13_8_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_9_13_7_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_9_13_25_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_9_13_26_tsni(tmp2, tmp9)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_9_13_7_tsni = function interleave_inst_9_13_7_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_9_13_7_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_9_13_25_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_9_13_8_tsni = function interleave_inst_9_13_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_9_13_8_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_9_13_26_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_9_14_tsni = function map_inst_9_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_9_19_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
clauses_inst_15_16_tsni = function clauses_inst_15_16_tsni(t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = clausify.parse(t);
  tmp1 = clausify.elim(tmp);
  tmp2 = clausify.negin(tmp1);
  tmp3 = clausify.disin(tmp2);
  tmp4 = split_inst_15_16_11_tsni(tmp3);
  tmp5 = unicl_inst_15_16_10_tsni(tmp4);
  tmp6 = map_inst_15_16_14_tsni(disp_inst_15_16_13_tsni, tmp5);
  return concat_inst_15_16_19_tsni(tmp6)
};
map_inst_15_16_14_tsni = function map_inst_15_16_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_15_16_19_tsni(xs2);
      return append_inst_15_16_19_20_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
disp_inst_15_16_13_tsni = function disp_inst_15_16_13_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
    first0 = runtime.Tuple.get(l_r, 0);
    first1 = runtime.Tuple.get(l_r, 1);
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_15_16_13_8_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_15_16_13_7_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_15_16_13_25_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_15_16_13_26_tsni(tmp2, tmp9)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_15_16_13_7_tsni = function interleave_inst_15_16_13_7_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_15_16_13_7_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_15_16_13_25_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_15_16_13_8_tsni = function interleave_inst_15_16_13_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_15_16_13_8_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_15_16_13_26_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
unicl_inst_15_16_10_tsni = function unicl_inst_15_16_10_tsni(a) {
  return foldr_inst_15_16_10_27_tsni(uniclHelper_inst_15_16_10_5_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_15_16_10_5_tsni = function uniclHelper_inst_15_16_10_5_tsni(p, x) {
  let cp, scrut;
  cp = clausify.clause(p);
  scrut = tautclause_inst_15_16_10_5_3_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_15_16_10_5_3_tsni = function tautclause_inst_15_16_10_5_3_tsni(c_a) {
  let first1, first0, c, a, tmp;
  if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
    first0 = runtime.Tuple.get(c_a, 0);
    first1 = runtime.Tuple.get(c_a, 1);
    c = first0;
    a = first1;
    tmp = lscomp$_inst_15_16_10_5_3_1_tsni(a, c);
    return listNeq_inst_15_16_10_5_3_24_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_15_16_10_5_3_1_tsni = function lscomp$_inst_15_16_10_5_3_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_15_16_10_5_3_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_15_16_10_5_3_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_15_16_10_5_3_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
split_inst_15_16_11_tsni = function split_inst_15_16_11_tsni(p) {
  let lambda7;
  lambda7 = (f, z) => {
    return z
  };
  return splitHelper_inst_15_16_11_12_tsni(p, lambda7)
};
splitHelper_inst_15_16_11_12_tsni = function splitHelper_inst_15_16_11_12_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_15_16_11_12_tsni(q, a);
    return splitHelper_inst_15_16_11_12_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_15_16_10_27_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
replicate_inst_15_17_tsni = function replicate_inst_15_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x1, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x1));
      tmp3 = map_inst_15_18_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = concat_inst_15_23_tsni(xs1);
        return append_inst_15_23_20_tsni(x2, tmp4)
      }
    }
  }
};
map_inst_15_18_tsni = function map_inst_15_18_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_15_16_19_tsni = function concat_inst_15_16_19_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_16_19_20_tsni = function append_inst_15_16_19_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_16_19_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_15_23_20_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testClausify_nofib_inst_21_22_tsni = function testClausify_nofib_inst_21_22_tsni(n) {
  let xs, tmp, tmp1;
  tmp = NofibPrelude.nofibStringToList("a = a = a");
  xs = replicate_inst_21_22_17_tsni(n, tmp);
  tmp1 = map_inst_21_22_18_tsni(clauses_inst_21_22_16_tsni, xs);
  return concat_inst_21_22_23_tsni(tmp1)
};
map_inst_21_22_18_tsni = function map_inst_21_22_18_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
clauses_inst_21_22_16_tsni = function clauses_inst_21_22_16_tsni(t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = clausify.parse(t);
  tmp1 = clausify.elim(tmp);
  tmp2 = clausify.negin(tmp1);
  tmp3 = clausify.disin(tmp2);
  tmp4 = split_inst_21_22_16_11_tsni(tmp3);
  tmp5 = unicl_inst_21_22_16_10_tsni(tmp4);
  tmp6 = map_inst_21_22_16_14_tsni(disp_inst_21_22_16_13_tsni, tmp5);
  return concat_inst_21_22_16_19_tsni(tmp6)
};
unicl_inst_21_22_16_10_tsni = function unicl_inst_21_22_16_10_tsni(a) {
  return foldr_inst_21_22_16_10_27_tsni(uniclHelper_inst_21_22_16_10_5_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_21_22_16_10_5_tsni = function uniclHelper_inst_21_22_16_10_5_tsni(p, x) {
  let cp, scrut;
  cp = clausify.clause(p);
  scrut = tautclause_inst_21_22_16_10_5_3_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_21_22_16_10_5_3_tsni = function tautclause_inst_21_22_16_10_5_3_tsni(c_a) {
  let first1, first0, c, a, tmp;
  if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
    first0 = runtime.Tuple.get(c_a, 0);
    first1 = runtime.Tuple.get(c_a, 1);
    c = first0;
    a = first1;
    tmp = lscomp$_inst_21_22_16_10_5_3_1_tsni(a, c);
    return listNeq_inst_21_22_16_10_5_3_24_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_21_22_16_10_5_3_1_tsni = function lscomp$_inst_21_22_16_10_5_3_1_tsni(a, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      } else {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$_inst_21_22_16_10_5_3_1_tsni(a, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, hx, tx, param02, param12, hy, ty, scrut1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        hx = param01;
        tx = param11;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          hy = param02;
          ty = param12;
          scrut1 = hx == hy;
          if (scrut1 === true) {
            return listNeq_inst_21_22_16_10_5_3_24_tsni(tx, ty)
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else {
      return lscomp$_inst_21_22_16_10_5_3_1_tsni(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
split_inst_21_22_16_11_tsni = function split_inst_21_22_16_11_tsni(p) {
  let lambda7;
  lambda7 = (f, z) => {
    return z
  };
  return splitHelper_inst_21_22_16_11_12_tsni(p, lambda7)
};
splitHelper_inst_21_22_16_11_12_tsni = function splitHelper_inst_21_22_16_11_12_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_21_22_16_11_12_tsni(q, a);
    return splitHelper_inst_21_22_16_11_12_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_21_22_16_10_27_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
disp_inst_21_22_16_13_tsni = function disp_inst_21_22_16_13_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
    first0 = runtime.Tuple.get(l_r, 0);
    first1 = runtime.Tuple.get(l_r, 1);
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_21_22_16_13_8_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_21_22_16_13_7_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_21_22_16_13_25_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_21_22_16_13_26_tsni(tmp2, tmp9)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_21_22_16_13_7_tsni = function interleave_inst_21_22_16_13_7_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_21_22_16_13_7_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_21_22_16_13_25_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
interleave_inst_21_22_16_13_8_tsni = function interleave_inst_21_22_16_13_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_21_22_16_13_8_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_21_22_16_13_26_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_21_22_16_14_tsni = function map_inst_21_22_16_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_22_16_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_21_22_16_19_tsni(xs2);
      return append_inst_21_22_16_19_20_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
concat_inst_21_22_16_19_tsni = function concat_inst_21_22_16_19_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_22_16_19_20_tsni = function append_inst_21_22_16_19_20_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_21_22_16_19_20_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_21_22_23_20_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return () => {
        let param01, param11, h, t, tmp1;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp1 = nofibListToString_inst_21_28_tsni(t);
        return h + tmp1
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_21_22_17_tsni = function replicate_inst_21_22_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f) => {
      return () => {
        return () => {
          return ""
        }
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_22_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x1, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x1));
      tmp3 = map_inst_21_22_18_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = concat_inst_21_22_23_tsni(xs1);
        return append_inst_21_22_23_20_tsni(x2, tmp4)
      }
    }
  }
};
concat_inst_21_22_23_tsni = function concat_inst_21_22_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_22_23_20_tsni = function append_inst_21_22_23_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_0_24_tsni = function listNeq_inst_0_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_2_3_24_tsni = function listNeq_inst_2_3_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_4_5_3_24_tsni = function listNeq_inst_4_5_3_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_6_25_tsni = function append_inst_6_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_6_26_tsni = function append_inst_6_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_9_10_5_3_24_tsni = function listNeq_inst_9_10_5_3_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_9_10_27_tsni = function foldr_inst_9_10_27_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_9_13_25_tsni = function append_inst_9_13_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_13_26_tsni = function append_inst_9_13_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_9_19_tsni = function concat_inst_9_19_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_16_13_25_tsni = function append_inst_15_16_13_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_16_13_26_tsni = function append_inst_15_16_13_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_15_16_10_5_3_24_tsni = function listNeq_inst_15_16_10_5_3_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_15_16_10_27_tsni = function foldr_inst_15_16_10_27_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_15_23_tsni = function concat_inst_15_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_23_20_tsni = function append_inst_15_23_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_21_22_16_10_5_3_24_tsni = function listNeq_inst_21_22_16_10_5_3_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_21_22_16_10_27_tsni = function foldr_inst_21_22_16_10_27_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_21_22_16_13_25_tsni = function append_inst_21_22_16_13_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_22_16_13_26_tsni = function append_inst_21_22_16_13_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_21_28_tsni = function nofibListToString_inst_21_28_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp$ = function lscomp$(a, ls) {
  let param0, param1, h, t, scrut, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = NofibPrelude.inList(h, a);
    if (scrut === true) {
      tmp = lscomp$(a, t);
      return NofibPrelude.Cons(h, tmp)
    } else {
      return lscomp$(a, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(a) {
  return (ls) => {
    return lscomp$(a, ls)
  }
};
lambda$5 = function lambda$(c) {
  return clausify1.charLeq(c, "z")
};
lambda2 = (undefined, function (c) {
  return () => {
    return lambda$5(c)
  }
});
lambda$4 = function lambda$(c) {
  return clausify1.charLeq(c, "z")
};
lambda3 = (undefined, function (c) {
  return () => {
    return lambda$4(c)
  }
});
lambda$3 = function lambda$(c) {
  return clausify1.charLeq(c, "z")
};
lambda4 = (undefined, function (c) {
  return () => {
    return lambda$3(c)
  }
});
lambda$2 = function lambda$(c) {
  return clausify1.charLeq(c, "z")
};
lambda5 = (undefined, function (c) {
  return () => {
    return lambda$2(c)
  }
});
lambda$1 = function lambda$(c) {
  return clausify1.charLeq(c, "z")
};
lambda6 = (undefined, function (c) {
  return () => {
    return lambda$1(c)
  }
});
lambda1 = (undefined, function (s) {
  let tmp;
  tmp = clausify1.spri(s);
  return tmp != 0
});
lambda$ = function lambda$(dq) {
  return clausify1.conjunct(dq)
};
lambda = (undefined, function (dq) {
  return () => {
    return lambda$(dq)
  }
});
globalThis.Object.freeze(class clausify {
  static {
    clausify1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    globalThis.Object.freeze(class Formula {
      static {
        clausify.Formula = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Formula"]; 
    });
    this.Sym = function Sym(a) {
      return globalThis.Object.freeze(new Sym.class(a));
    };
    globalThis.Object.freeze(class Sym extends clausify.Formula {
      static {
        clausify.Sym.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sym", ["a"]]; 
    });
    this.Not = function Not(a) {
      return globalThis.Object.freeze(new Not.class(a));
    };
    globalThis.Object.freeze(class Not extends clausify.Formula {
      static {
        clausify.Not.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Not", ["a"]]; 
    });
    this.Dis = function Dis(a, b) {
      return globalThis.Object.freeze(new Dis.class(a, b));
    };
    globalThis.Object.freeze(class Dis extends clausify.Formula {
      static {
        clausify.Dis.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Dis", ["a", "b"]]; 
    });
    this.Con = function Con(a, b) {
      return globalThis.Object.freeze(new Con.class(a, b));
    };
    globalThis.Object.freeze(class Con extends clausify.Formula {
      static {
        clausify.Con.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["a", "b"]]; 
    });
    this.Imp = function Imp(a, b) {
      return globalThis.Object.freeze(new Imp.class(a, b));
    };
    globalThis.Object.freeze(class Imp extends clausify.Formula {
      static {
        clausify.Imp.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Imp", ["a", "b"]]; 
    });
    this.Eqv = function Eqv(a, b) {
      return globalThis.Object.freeze(new Eqv.class(a, b));
    };
    globalThis.Object.freeze(class Eqv extends clausify.Formula {
      static {
        clausify.Eqv.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Eqv", ["a", "b"]]; 
    });
    globalThis.Object.freeze(class StackFrame {
      static {
        clausify.StackFrame = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "StackFrame"]; 
    });
    this.Ast = function Ast(f) {
      return globalThis.Object.freeze(new Ast.class(f));
    };
    globalThis.Object.freeze(class Ast extends clausify.StackFrame {
      static {
        clausify.Ast.class = this
      }
      constructor(f) {
        super();
        this.f = f;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ast", ["f"]]; 
    });
    this.Lex = function Lex(s) {
      return globalThis.Object.freeze(new Lex.class(s));
    };
    globalThis.Object.freeze(class Lex extends clausify.StackFrame {
      static {
        clausify.Lex.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lex", ["s"]]; 
    });
  }
  static charLt(a, b) {
    return a < b
  } 
  static charLeq(a, b) {
    return a <= b
  } 
  static charGt(a, b) {
    return a > b
  } 
  static charGeq(a, b) {
    return a >= b
  } 
  static insert(x, ys) {
    let param0, param1, y, ys1, scrut, scrut1, tmp, tmp1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x, NofibPrelude.Nil)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param0 = ys.head;
      param1 = ys.tail;
      y = param0;
      ys1 = param1;
      scrut1 = clausify.charLt(x, y);
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(y, ys1);
        return NofibPrelude.Cons(x, tmp)
      } else {
        scrut = clausify.charGt(x, y);
        if (scrut === true) {
          tmp1 = clausify.insert(x, ys1);
          return NofibPrelude.Cons(y, tmp1)
        } else {
          return NofibPrelude.Cons(y, ys1)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static clauseHelper(p, x) {
    let param0, param01, s, first1, first0, c, a, s1, c1, a1, param1, p1, q, tmp, tmp1, tmp2;
    if (p instanceof clausify.Dis.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp = clausify.clauseHelper(q, x);
      return clausify.clauseHelper(p1, tmp)
    } else if (p instanceof clausify.Sym.class) {
      param0 = p.a;
      s1 = param0;
      if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
        first0 = runtime.Tuple.get(x, 0);
        first1 = runtime.Tuple.get(x, 1);
        c1 = first0;
        a1 = first1;
        tmp1 = clausify.insert(s1, c1);
        return globalThis.Object.freeze([
          tmp1,
          a1
        ])
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (p instanceof clausify.Not.class) {
      param0 = p.a;
      if (param0 instanceof clausify.Sym.class) {
        param01 = param0.a;
        s = param01;
        if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
          first0 = runtime.Tuple.get(x, 0);
          first1 = runtime.Tuple.get(x, 1);
          c = first0;
          a = first1;
          tmp2 = clausify.insert(s, a);
          return globalThis.Object.freeze([
            c,
            tmp2
          ])
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static clause(p) {
    let tmp;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return clausify.clauseHelper(p, tmp)
  } 
  static conjunct(p) {
    let param0, param1;
    if (p instanceof clausify.Con.class) {
      param0 = p.a;
      param1 = p.b;
      return true
    } else {
      return false
    }
  } 
  static disin(p) {
    let param0, param1, p1, q, p2, q1, dp, dq, scrut, param01, param11, p3, q2, r, p4, param02, param12, q3, r1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda$this;
    if (p instanceof clausify.Dis.class) {
      param0 = p.a;
      param1 = p.b;
      p4 = param0;
      if (param1 instanceof clausify.Con.class) {
        param02 = param1.a;
        param12 = param1.b;
        q3 = param02;
        r1 = param12;
        tmp = clausify.Dis(p4, q3);
        tmp1 = clausify.disin(tmp);
        tmp2 = clausify.Dis(p4, r1);
        tmp3 = clausify.disin(tmp2);
        return clausify.Con(tmp1, tmp3)
      } else {
        if (param0 instanceof clausify.Con.class) {
          param01 = param0.a;
          param11 = param0.b;
          p3 = param01;
          q2 = param11;
          r = param1;
          tmp4 = clausify.Dis(p3, r);
          tmp5 = clausify.disin(tmp4);
          tmp6 = clausify.Dis(q2, r);
          tmp7 = clausify.disin(tmp6);
          return clausify.Con(tmp5, tmp7)
        } else {
          p2 = param0;
          q1 = param1;
          dp = clausify.disin(p2);
          dq = clausify.disin(q1);
          tmp8 = clausify.conjunct(dp);
          lambda$this = runtime.safeCall(lambda(dq));
          scrut = runtime.short_or(tmp8, lambda$this);
          if (scrut === true) {
            tmp9 = clausify.Dis(dp, dq);
            return clausify.disin(tmp9)
          } else {
            return clausify.Dis(dp, dq)
          }
        }
      }
    } else if (p instanceof clausify.Con.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp10 = clausify.disin(p1);
      tmp11 = clausify.disin(q);
      return clausify.Con(tmp10, tmp11)
    } else {
      return p
    }
  } 
  static elim(p) {
    let param0, param1, f, f_, p1, q, p2, q1, p3, q2, p4, s, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (p instanceof clausify.Sym.class) {
      param0 = p.a;
      s = param0;
      return clausify.Sym(s)
    } else if (p instanceof clausify.Not.class) {
      param0 = p.a;
      p4 = param0;
      tmp = clausify.elim(p4);
      return clausify.Not(tmp)
    } else if (p instanceof clausify.Dis.class) {
      param0 = p.a;
      param1 = p.b;
      p3 = param0;
      q2 = param1;
      tmp1 = clausify.elim(p3);
      tmp2 = clausify.elim(q2);
      return clausify.Dis(tmp1, tmp2)
    } else if (p instanceof clausify.Con.class) {
      param0 = p.a;
      param1 = p.b;
      p2 = param0;
      q1 = param1;
      tmp3 = clausify.elim(p2);
      tmp4 = clausify.elim(q1);
      return clausify.Con(tmp3, tmp4)
    } else if (p instanceof clausify.Imp.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp5 = clausify.elim(p1);
      tmp6 = clausify.Not(tmp5);
      tmp7 = clausify.elim(q);
      return clausify.Dis(tmp6, tmp7)
    } else if (p instanceof clausify.Eqv.class) {
      param0 = p.a;
      param1 = p.b;
      f = param0;
      f_ = param1;
      tmp8 = clausify.Imp(f, f_);
      tmp9 = clausify.elim(tmp8);
      tmp10 = clausify.Imp(f_, f);
      tmp11 = clausify.elim(tmp10);
      return clausify.Con(tmp9, tmp11)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static interleave(xs, ys) {
    let param0, param1, x, xs1, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      tmp = clausify.interleave(ys, xs1);
      return NofibPrelude.Cons(x, tmp)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static negin(p) {
    let param0, param1, p1, q, p2, q1, param01, param11, p3, q2, p4, q3, p5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (p instanceof clausify.Not.class) {
      param0 = p.a;
      if (param0 instanceof clausify.Not.class) {
        param01 = param0.a;
        p5 = param01;
        return clausify.negin(p5)
      } else if (param0 instanceof clausify.Con.class) {
        param01 = param0.a;
        param11 = param0.b;
        p4 = param01;
        q3 = param11;
        tmp = clausify.Not(p4);
        tmp1 = clausify.negin(tmp);
        tmp2 = clausify.Not(q3);
        tmp3 = clausify.negin(tmp2);
        return clausify.Dis(tmp1, tmp3)
      } else if (param0 instanceof clausify.Dis.class) {
        param01 = param0.a;
        param11 = param0.b;
        p3 = param01;
        q2 = param11;
        tmp4 = clausify.Not(p3);
        tmp5 = clausify.negin(tmp4);
        tmp6 = clausify.Not(q2);
        tmp7 = clausify.negin(tmp6);
        return clausify.Con(tmp5, tmp7)
      } else {
        return p
      }
    } else if (p instanceof clausify.Dis.class) {
      param0 = p.a;
      param1 = p.b;
      p2 = param0;
      q1 = param1;
      tmp8 = clausify.negin(p2);
      tmp9 = clausify.negin(q1);
      return clausify.Dis(tmp8, tmp9)
    } else if (p instanceof clausify.Con.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp10 = clausify.negin(p1);
      tmp11 = clausify.negin(q);
      return clausify.Con(tmp10, tmp11)
    } else {
      return p
    }
  } 
  static opri(c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5;
    scrut5 = c === "(";
    if (scrut5 === true) {
      return 0
    } else {
      scrut4 = c === "=";
      if (scrut4 === true) {
        return 1
      } else {
        scrut3 = c === ">";
        if (scrut3 === true) {
          return 2
        } else {
          scrut2 = c === "|";
          if (scrut2 === true) {
            return 3
          } else {
            scrut1 = c === "&";
            if (scrut1 === true) {
              return 4
            } else {
              scrut = c === "~";
              if (scrut === true) {
                return 5
              } else {
                throw globalThis.Error(c)
              }
            }
          }
        }
      }
    }
  } 
  static red(s) {
    let param0, param1, param01, p, param02, param11, param03, s1, p1, param04, param12, param05, q, s2, p2, q1, s3, p3, q2, s4, p4, q3, s5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        p4 = param01;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param02 = param1.head;
          param11 = param1.tail;
          if (param02 instanceof clausify.Lex.class) {
            param03 = param02.s;
            p3 = param01;
            p2 = param01;
            p1 = param01;
            p = param01;
            if (param03 === "=") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q3 = param05;
                  s5 = param12;
                  tmp = clausify.Eqv(q3, p4);
                  tmp1 = clausify.Ast(tmp);
                  return NofibPrelude.Cons(tmp1, s5)
                } else {
                  p3 = param01;
                  p2 = param01;
                  p1 = param01;
                  p = param01;
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                p3 = param01;
                p2 = param01;
                p1 = param01;
                p = param01;
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param03 === ">") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q2 = param05;
                  s4 = param12;
                  tmp2 = clausify.Imp(q2, p3);
                  tmp3 = clausify.Ast(tmp2);
                  return NofibPrelude.Cons(tmp3, s4)
                } else {
                  p2 = param01;
                  p1 = param01;
                  p = param01;
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                p2 = param01;
                p1 = param01;
                p = param01;
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param03 === "|") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q1 = param05;
                  s3 = param12;
                  tmp4 = clausify.Dis(q1, p2);
                  tmp5 = clausify.Ast(tmp4);
                  return NofibPrelude.Cons(tmp5, s3)
                } else {
                  p1 = param01;
                  p = param01;
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                p1 = param01;
                p = param01;
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param03 === "&") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q = param05;
                  s2 = param12;
                  tmp6 = clausify.Con(q, p1);
                  tmp7 = clausify.Ast(tmp6);
                  return NofibPrelude.Cons(tmp7, s2)
                } else {
                  p = param01;
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                p = param01;
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param03 === "~") {
              s1 = param11;
              tmp8 = clausify.Not(p);
              tmp9 = clausify.Ast(tmp8);
              return NofibPrelude.Cons(tmp9, s1)
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            p3 = param01;
            p2 = param01;
            p1 = param01;
            p = param01;
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          p3 = param01;
          p2 = param01;
          p1 = param01;
          p = param01;
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static spri(s) {
    let param0, param1, param01, x, param02, param11, param03, c, s1;
    if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        x = param01;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param02 = param1.head;
          param11 = param1.tail;
          if (param02 instanceof clausify.Lex.class) {
            param03 = param02.s;
            c = param03;
            s1 = param11;
            return clausify.opri(c)
          } else {
            return 0
          }
        } else {
          return 0
        }
      } else {
        return 0
      }
    } else {
      return 0
    }
  } 
  static redstar(s) {
    return NofibPrelude.while_(lambda1, clausify.red, s)
  } 
  static spaces(n) {
    return NofibPrelude.replicate(n, " ")
  } 
  static parseHelper(t, s) {
    let param0, param1, c, t1, scrut, scrut1, t2, scrut2, param01, param11, x, param02, param12, param03, ss, t3, t4, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, lambda$this, lambda$this1, lambda$this2, lambda$this3, lambda$this4;
    if (t instanceof NofibPrelude.Nil.class) {
      return clausify.redstar(s)
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (param0 === " ") {
        t4 = param1;
        return clausify.parseHelper(t4, s)
      } else if (param0 === "(") {
        t3 = param1;
        tmp = clausify.Lex("(");
        tmp1 = NofibPrelude.Cons(tmp, s);
        return clausify.parseHelper(t3, tmp1)
      } else if (param0 === ")") {
        t2 = param1;
        scrut2 = clausify.redstar(s);
        if (scrut2 instanceof NofibPrelude.Cons.class) {
          param01 = scrut2.head;
          param11 = scrut2.tail;
          x = param01;
          if (param11 instanceof NofibPrelude.Cons.class) {
            param02 = param11.head;
            param12 = param11.tail;
            if (param02 instanceof clausify.Lex.class) {
              param03 = param02.s;
              if (param03 === "(") {
                ss = param12;
                tmp2 = NofibPrelude.Cons(x, ss);
                return clausify.parseHelper(t2, tmp2)
              } else {
                c = param0;
                t1 = param1;
                tmp3 = clausify.charLeq("a", c);
                lambda$this = runtime.safeCall(lambda2(c));
                scrut1 = runtime.short_and(tmp3, lambda$this);
                if (scrut1 === true) {
                  tmp4 = clausify.Sym(c);
                  tmp5 = clausify.Ast(tmp4);
                  tmp6 = NofibPrelude.Cons(tmp5, s);
                  return clausify.parseHelper(t1, tmp6)
                } else {
                  tmp7 = clausify.spri(s);
                  tmp8 = clausify.opri(c);
                  scrut = tmp7 > tmp8;
                  if (scrut === true) {
                    tmp9 = NofibPrelude.Cons(c, t1);
                    tmp10 = clausify.red(s);
                    return clausify.parseHelper(tmp9, tmp10)
                  } else {
                    tmp11 = clausify.Lex(c);
                    tmp12 = NofibPrelude.Cons(tmp11, s);
                    return clausify.parseHelper(t1, tmp12)
                  }
                }
              }
            } else {
              c = param0;
              t1 = param1;
              tmp13 = clausify.charLeq("a", c);
              lambda$this1 = runtime.safeCall(lambda3(c));
              scrut1 = runtime.short_and(tmp13, lambda$this1);
              if (scrut1 === true) {
                tmp14 = clausify.Sym(c);
                tmp15 = clausify.Ast(tmp14);
                tmp16 = NofibPrelude.Cons(tmp15, s);
                return clausify.parseHelper(t1, tmp16)
              } else {
                tmp17 = clausify.spri(s);
                tmp18 = clausify.opri(c);
                scrut = tmp17 > tmp18;
                if (scrut === true) {
                  tmp19 = NofibPrelude.Cons(c, t1);
                  tmp20 = clausify.red(s);
                  return clausify.parseHelper(tmp19, tmp20)
                } else {
                  tmp21 = clausify.Lex(c);
                  tmp22 = NofibPrelude.Cons(tmp21, s);
                  return clausify.parseHelper(t1, tmp22)
                }
              }
            }
          } else {
            c = param0;
            t1 = param1;
            tmp23 = clausify.charLeq("a", c);
            lambda$this2 = runtime.safeCall(lambda4(c));
            scrut1 = runtime.short_and(tmp23, lambda$this2);
            if (scrut1 === true) {
              tmp24 = clausify.Sym(c);
              tmp25 = clausify.Ast(tmp24);
              tmp26 = NofibPrelude.Cons(tmp25, s);
              return clausify.parseHelper(t1, tmp26)
            } else {
              tmp27 = clausify.spri(s);
              tmp28 = clausify.opri(c);
              scrut = tmp27 > tmp28;
              if (scrut === true) {
                tmp29 = NofibPrelude.Cons(c, t1);
                tmp30 = clausify.red(s);
                return clausify.parseHelper(tmp29, tmp30)
              } else {
                tmp31 = clausify.Lex(c);
                tmp32 = NofibPrelude.Cons(tmp31, s);
                return clausify.parseHelper(t1, tmp32)
              }
            }
          }
        } else {
          c = param0;
          t1 = param1;
          tmp33 = clausify.charLeq("a", c);
          lambda$this3 = runtime.safeCall(lambda5(c));
          scrut1 = runtime.short_and(tmp33, lambda$this3);
          if (scrut1 === true) {
            tmp34 = clausify.Sym(c);
            tmp35 = clausify.Ast(tmp34);
            tmp36 = NofibPrelude.Cons(tmp35, s);
            return clausify.parseHelper(t1, tmp36)
          } else {
            tmp37 = clausify.spri(s);
            tmp38 = clausify.opri(c);
            scrut = tmp37 > tmp38;
            if (scrut === true) {
              tmp39 = NofibPrelude.Cons(c, t1);
              tmp40 = clausify.red(s);
              return clausify.parseHelper(tmp39, tmp40)
            } else {
              tmp41 = clausify.Lex(c);
              tmp42 = NofibPrelude.Cons(tmp41, s);
              return clausify.parseHelper(t1, tmp42)
            }
          }
        }
      } else {
        c = param0;
        t1 = param1;
        tmp43 = clausify.charLeq("a", c);
        lambda$this4 = runtime.safeCall(lambda6(c));
        scrut1 = runtime.short_and(tmp43, lambda$this4);
        if (scrut1 === true) {
          tmp44 = clausify.Sym(c);
          tmp45 = clausify.Ast(tmp44);
          tmp46 = NofibPrelude.Cons(tmp45, s);
          return clausify.parseHelper(t1, tmp46)
        } else {
          tmp47 = clausify.spri(s);
          tmp48 = clausify.opri(c);
          scrut = tmp47 > tmp48;
          if (scrut === true) {
            tmp49 = NofibPrelude.Cons(c, t1);
            tmp50 = clausify.red(s);
            return clausify.parseHelper(tmp49, tmp50)
          } else {
            tmp51 = clausify.Lex(c);
            tmp52 = NofibPrelude.Cons(tmp51, s);
            return clausify.parseHelper(t1, tmp52)
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static parse(t) {
    let scrut, param0, param1, param01, f;
    scrut = clausify.parseHelper(t, NofibPrelude.Nil);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        f = param01;
        if (param1 instanceof NofibPrelude.Nil.class) {
          return f
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static splitHelper(p, a) {
    let param0, param1, p1, q, tmp;
    if (p instanceof clausify.Con.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp = clausify.splitHelper(q, a);
      return clausify.splitHelper(p1, tmp)
    } else {
      return NofibPrelude.Cons(p, a)
    }
  } 
  static split(p) {
    return clausify.splitHelper(p, NofibPrelude.Nil)
  } 
  static tautclause(c_a) {
    let first1, first0, c, a, tmp;
    if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
      first0 = runtime.Tuple.get(c_a, 0);
      first1 = runtime.Tuple.get(c_a, 1);
      c = first0;
      a = first1;
      tmp = lscomp$_inst_0_1_tsni(a, c);
      return listNeq_inst_0_24_tsni(tmp, NofibPrelude.Nil)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static uniclHelper(p, x) {
    let cp, scrut;
    cp = clausify.clause(p);
    scrut = tautclause_inst_2_3_tsni(cp);
    if (scrut === true) {
      return x
    } else {
      return clausify.insert(cp, x)
    }
  } 
  static unicl(a) {
    return NofibPrelude.foldr(uniclHelper_inst_4_5_tsni, NofibPrelude.Nil, a)
  } 
  static disp(l_r) {
    let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
      first0 = runtime.Tuple.get(l_r, 0);
      first1 = runtime.Tuple.get(l_r, 1);
      l = first0;
      r = first1;
      tmp = NofibPrelude.listLen(l);
      tmp1 = clausify.spaces(tmp);
      tmp2 = interleave_inst_6_8_tsni(l, tmp1);
      tmp3 = NofibPrelude.nofibStringToList("<=");
      tmp4 = NofibPrelude.listLen(r);
      tmp5 = clausify.spaces(tmp4);
      tmp6 = interleave_inst_6_7_tsni(tmp5, r);
      tmp7 = NofibPrelude.nofibStringToList("\n");
      tmp8 = append_inst_6_25_tsni(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp3, tmp8);
      return append_inst_6_26_tsni(tmp2, tmp9)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static clauses(t) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = clausify.parse(t);
    tmp1 = clausify.elim(tmp);
    tmp2 = clausify.negin(tmp1);
    tmp3 = clausify.disin(tmp2);
    tmp4 = split_inst_9_11_tsni(tmp3);
    tmp5 = unicl_inst_9_10_tsni(tmp4);
    tmp6 = map_inst_9_14_tsni(disp_inst_9_13_tsni, tmp5);
    return concat_inst_9_19_tsni(tmp6)
  } 
  static testClausify_nofib(n) {
    let xs, tmp, tmp1;
    tmp = NofibPrelude.nofibStringToList("a = a = a");
    xs = replicate_inst_15_17_tsni(n, tmp);
    tmp1 = map_inst_15_18_tsni(clauses_inst_15_16_tsni, xs);
    return concat_inst_15_23_tsni(tmp1)
  } 
  static main() {
    let tmp;
    tmp = testClausify_nofib_inst_21_22_tsni(10);
    return nofibListToString_inst_21_28_tsni(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "clausify"]; 
});
let clausify = clausify1; export default clausify;
