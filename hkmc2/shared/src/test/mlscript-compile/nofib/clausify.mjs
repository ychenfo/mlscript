import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let clausify1, elim_inst_0_tsni, elim_inst_1_tsni, elim_inst_2_tsni, elim_inst_3_tsni, elim_inst_4_tsni, elim_inst_5_tsni, elim_inst_6_tsni, elim_inst_7_tsni, elim_inst_8_tsni, tautclause_inst_9_tsni, uniclHelper_inst_10_tsni, tautclause_inst_10_9_tsni, interleave_inst_11_tsni, spaces_inst_12_tsni, replicate_inst_12_13_tsni, interleave_inst_14_tsni, spaces_inst_15_tsni, replicate_inst_15_13_tsni, map_inst_16_tsni, disp_inst_17_tsni, interleave_inst_17_11_tsni, interleave_inst_17_14_tsni, unicl_inst_18_tsni, uniclHelper_inst_18_10_tsni, tautclause_inst_18_10_9_tsni, split_inst_19_tsni, splitHelper_inst_19_20_tsni, map_inst_21_tsni, clauses_inst_22_tsni, unicl_inst_22_18_tsni, uniclHelper_inst_22_18_10_tsni, tautclause_inst_22_18_10_9_tsni, split_inst_22_19_tsni, splitHelper_inst_22_19_20_tsni, disp_inst_22_17_tsni, interleave_inst_22_17_11_tsni, interleave_inst_22_17_14_tsni, map_inst_22_16_tsni, concat_inst_22_23_tsni, append_inst_22_23_24_tsni, replicate_inst_25_tsni, testClausify_nofib_inst_26_tsni, clauses_inst_26_22_tsni, map_inst_26_22_16_tsni, disp_inst_26_22_17_tsni, interleave_inst_26_22_17_11_tsni, interleave_inst_26_22_17_14_tsni, unicl_inst_26_22_18_tsni, uniclHelper_inst_26_22_18_10_tsni, tautclause_inst_26_22_18_10_9_tsni, split_inst_26_22_19_tsni, splitHelper_inst_26_22_19_20_tsni, replicate_inst_26_25_tsni, map_inst_26_21_tsni, concat_inst_26_22_23_tsni, append_inst_26_22_23_24_tsni, concat_inst_26_27_tsni, append_inst_26_27_24_tsni, listNeq_inst_9_28_tsni, listNeq_inst_10_9_28_tsni, append_inst_29_tsni, append_inst_30_tsni, concat_inst_23_tsni, append_inst_17_29_tsni, append_inst_17_30_tsni, listNeq_inst_18_10_9_28_tsni, foldr_inst_18_31_tsni, concat_inst_27_tsni, listNeq_inst_22_18_10_9_28_tsni, foldr_inst_22_18_31_tsni, append_inst_22_17_29_tsni, append_inst_22_17_30_tsni, append_inst_27_24_tsni, append_inst_26_22_17_29_tsni, append_inst_26_22_17_30_tsni, listNeq_inst_26_22_18_10_9_28_tsni, foldr_inst_26_22_18_31_tsni, nofibListToString_inst_32_tsni, match_p_arm_Imp_inst_0_tsni, match_p_arm_Imp_inst_1_tsni;
match_p_arm_Imp_inst_0_tsni = function match_p_arm_Imp_inst_0_tsni(_deforest_Imp_a_inst_0_tsni, _deforest_Imp_b_inst_0_tsni) {
  let param0, param1, p, q, tmp, tmp1, tmp2;
  param0 = _deforest_Imp_a_inst_0_tsni;
  param1 = _deforest_Imp_b_inst_0_tsni;
  p = param0;
  q = param1;
  tmp = elim_inst_0_tsni(p);
  tmp1 = runtime.safeCall(clausify.Not(tmp));
  tmp2 = elim_inst_0_tsni(q);
  return clausify.Dis(tmp1, tmp2)
};
match_p_arm_Imp_inst_1_tsni = function match_p_arm_Imp_inst_1_tsni(_deforest_Imp_a_inst_1_tsni, _deforest_Imp_b_inst_1_tsni) {
  let param0, param1, p, q, tmp, tmp1, tmp2;
  param0 = _deforest_Imp_a_inst_1_tsni;
  param1 = _deforest_Imp_b_inst_1_tsni;
  p = param0;
  q = param1;
  tmp = elim_inst_1_tsni(p);
  tmp1 = runtime.safeCall(clausify.Not(tmp));
  tmp2 = elim_inst_1_tsni(q);
  return clausify.Dis(tmp1, tmp2)
};
elim_inst_0_tsni = function elim_inst_0_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_1_tsni = function elim_inst_1_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_2_tsni = function elim_inst_2_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_3_tsni = function elim_inst_3_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_4_tsni = function elim_inst_4_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_5_tsni = function elim_inst_5_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_6_tsni = function elim_inst_6_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_7_tsni = function elim_inst_7_tsni(p) {
  return runtime.safeCall(p())
};
elim_inst_8_tsni = function elim_inst_8_tsni(p) {
  return runtime.safeCall(p())
};
tautclause_inst_9_tsni = function tautclause_inst_9_tsni(c_a) {
  let lscomp, first1, first0, c, a, tmp;
  if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
    first0 = c_a[0];
    first1 = c_a[1];
    c = first0;
    a = first1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t, scrut, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
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
          tmp1 = lscomp(t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp1;
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
                return listNeq_inst_9_28_tsni(tx, ty)
              } else {
                return true
              }
            } else {
              return true
            }
          }
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(c);
    return listNeq_inst_9_28_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
uniclHelper_inst_10_tsni = function uniclHelper_inst_10_tsni(p, x) {
  let cp, scrut, tmp;
  tmp = clausify.clause(p);
  cp = tmp;
  scrut = tautclause_inst_10_9_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_10_9_tsni = function tautclause_inst_10_9_tsni(c_a) {
  let lscomp, first1, first0, c, a, tmp;
  if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
    first0 = c_a[0];
    first1 = c_a[1];
    c = first0;
    a = first1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t, scrut, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
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
          tmp1 = lscomp(t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp1;
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
                return listNeq_inst_10_9_28_tsni(tx, ty)
              } else {
                return true
              }
            } else {
              return true
            }
          }
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(c);
    return listNeq_inst_10_9_28_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_11_tsni = function interleave_inst_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
spaces_inst_12_tsni = function spaces_inst_12_tsni(n) {
  return replicate_inst_12_13_tsni(n, " ")
};
replicate_inst_12_13_tsni = function replicate_inst_12_13_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return (ys1) => {
        return ys1
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_13_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = interleave_inst_11_tsni(ys, xs);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp3;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp3 = append_inst_29_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp3)
      }
    }
  }
};
interleave_inst_14_tsni = function interleave_inst_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
spaces_inst_15_tsni = function spaces_inst_15_tsni(n) {
  return replicate_inst_15_13_tsni(n, " ")
};
replicate_inst_15_13_tsni = function replicate_inst_15_13_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return (ys1) => {
        return ys1
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_13_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = interleave_inst_14_tsni(ys, xs);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp3;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp3 = append_inst_30_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp3)
      }
    }
  }
};
map_inst_16_tsni = function map_inst_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_23_tsni(xs2);
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
disp_inst_17_tsni = function disp_inst_17_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_17_14_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_17_11_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_17_29_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_17_30_tsni(tmp2, tmp9)
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_17_11_tsni = function interleave_inst_17_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_17_11_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_17_29_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_17_14_tsni = function interleave_inst_17_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_17_14_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_17_30_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unicl_inst_18_tsni = function unicl_inst_18_tsni(a) {
  return foldr_inst_18_31_tsni(uniclHelper_inst_18_10_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_18_10_tsni = function uniclHelper_inst_18_10_tsni(p, x) {
  let cp, scrut, tmp;
  tmp = clausify.clause(p);
  cp = tmp;
  scrut = tautclause_inst_18_10_9_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_18_10_9_tsni = function tautclause_inst_18_10_9_tsni(c_a) {
  let lscomp, first1, first0, c, a, tmp;
  if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
    first0 = c_a[0];
    first1 = c_a[1];
    c = first0;
    a = first1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t, scrut, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
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
          tmp1 = lscomp(t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp1;
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
                return listNeq_inst_18_10_9_28_tsni(tx, ty)
              } else {
                return true
              }
            } else {
              return true
            }
          }
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(c);
    return listNeq_inst_18_10_9_28_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
split_inst_19_tsni = function split_inst_19_tsni(p) {
  return splitHelper_inst_19_20_tsni(p, (f, z) => {
    return z
  })
};
splitHelper_inst_19_20_tsni = function splitHelper_inst_19_20_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_19_20_tsni(q, a);
    return splitHelper_inst_19_20_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_18_31_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
map_inst_21_tsni = function map_inst_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
clauses_inst_22_tsni = function clauses_inst_22_tsni(t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = clausify.parse(t);
  tmp1 = clausify.elim(tmp);
  tmp2 = clausify.negin(tmp1);
  tmp3 = clausify.disin(tmp2);
  tmp4 = split_inst_22_19_tsni(tmp3);
  tmp5 = unicl_inst_22_18_tsni(tmp4);
  tmp6 = map_inst_22_16_tsni(disp_inst_22_17_tsni, tmp5);
  return concat_inst_22_23_tsni(tmp6)
};
unicl_inst_22_18_tsni = function unicl_inst_22_18_tsni(a) {
  return foldr_inst_22_18_31_tsni(uniclHelper_inst_22_18_10_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_22_18_10_tsni = function uniclHelper_inst_22_18_10_tsni(p, x) {
  let cp, scrut, tmp;
  tmp = clausify.clause(p);
  cp = tmp;
  scrut = tautclause_inst_22_18_10_9_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_22_18_10_9_tsni = function tautclause_inst_22_18_10_9_tsni(c_a) {
  let lscomp, first1, first0, c, a, tmp;
  if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
    first0 = c_a[0];
    first1 = c_a[1];
    c = first0;
    a = first1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t, scrut, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
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
          tmp1 = lscomp(t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp1;
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
                return listNeq_inst_22_18_10_9_28_tsni(tx, ty)
              } else {
                return true
              }
            } else {
              return true
            }
          }
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(c);
    return listNeq_inst_22_18_10_9_28_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
split_inst_22_19_tsni = function split_inst_22_19_tsni(p) {
  return splitHelper_inst_22_19_20_tsni(p, (f, z) => {
    return z
  })
};
splitHelper_inst_22_19_20_tsni = function splitHelper_inst_22_19_20_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_22_19_20_tsni(q, a);
    return splitHelper_inst_22_19_20_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_22_18_31_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
disp_inst_22_17_tsni = function disp_inst_22_17_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_22_17_14_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_22_17_11_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_22_17_29_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_22_17_30_tsni(tmp2, tmp9)
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_22_17_11_tsni = function interleave_inst_22_17_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_22_17_11_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_22_17_29_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_22_17_14_tsni = function interleave_inst_22_17_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_22_17_14_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_22_17_30_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_22_16_tsni = function map_inst_22_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_22_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_22_23_tsni(xs2);
      return append_inst_22_23_24_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_22_23_tsni = function concat_inst_22_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_22_23_24_tsni = function append_inst_22_23_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_27_24_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_25_tsni = function replicate_inst_25_tsni(n, x) {
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
    tmp1 = replicate_inst_25_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x1, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x1));
      tmp3 = map_inst_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = concat_inst_27_tsni(xs1);
        return append_inst_27_24_tsni(x2, tmp4)
      }
    }
  }
};
testClausify_nofib_inst_26_tsni = function testClausify_nofib_inst_26_tsni(n) {
  let xs, tmp, tmp1, tmp2;
  tmp = NofibPrelude.nofibStringToList("a = a = a");
  tmp1 = replicate_inst_26_25_tsni(n, tmp);
  xs = tmp1;
  tmp2 = map_inst_26_21_tsni(clauses_inst_26_22_tsni, xs);
  return concat_inst_26_27_tsni(tmp2)
};
clauses_inst_26_22_tsni = function clauses_inst_26_22_tsni(t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = clausify.parse(t);
  tmp1 = clausify.elim(tmp);
  tmp2 = clausify.negin(tmp1);
  tmp3 = clausify.disin(tmp2);
  tmp4 = split_inst_26_22_19_tsni(tmp3);
  tmp5 = unicl_inst_26_22_18_tsni(tmp4);
  tmp6 = map_inst_26_22_16_tsni(disp_inst_26_22_17_tsni, tmp5);
  return concat_inst_26_22_23_tsni(tmp6)
};
map_inst_26_22_16_tsni = function map_inst_26_22_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_22_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_22_23_tsni(xs2);
      return append_inst_26_22_23_24_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
disp_inst_26_22_17_tsni = function disp_inst_26_22_17_tsni(l_r) {
  let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
    first0 = l_r[0];
    first1 = l_r[1];
    l = first0;
    r = first1;
    tmp = NofibPrelude.listLen(l);
    tmp1 = clausify.spaces(tmp);
    tmp2 = interleave_inst_26_22_17_14_tsni(l, tmp1);
    tmp3 = NofibPrelude.nofibStringToList("<=");
    tmp4 = NofibPrelude.listLen(r);
    tmp5 = clausify.spaces(tmp4);
    tmp6 = interleave_inst_26_22_17_11_tsni(tmp5, r);
    tmp7 = NofibPrelude.nofibStringToList("\n");
    tmp8 = append_inst_26_22_17_29_tsni(tmp6, tmp7);
    tmp9 = NofibPrelude.append(tmp3, tmp8);
    return append_inst_26_22_17_30_tsni(tmp2, tmp9)
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_26_22_17_11_tsni = function interleave_inst_26_22_17_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_26_22_17_11_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_26_22_17_29_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interleave_inst_26_22_17_14_tsni = function interleave_inst_26_22_17_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = interleave_inst_26_22_17_14_tsni(ys, xs1);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let param01, param11, x1, xs2, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = append_inst_26_22_17_30_tsni(xs2, ys1);
      return NofibPrelude.Cons(x1, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys1) => {
      return ys1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unicl_inst_26_22_18_tsni = function unicl_inst_26_22_18_tsni(a) {
  return foldr_inst_26_22_18_31_tsni(uniclHelper_inst_26_22_18_10_tsni, NofibPrelude.Nil, a)
};
uniclHelper_inst_26_22_18_10_tsni = function uniclHelper_inst_26_22_18_10_tsni(p, x) {
  let cp, scrut, tmp;
  tmp = clausify.clause(p);
  cp = tmp;
  scrut = tautclause_inst_26_22_18_10_9_tsni(cp);
  if (scrut === true) {
    return x
  } else {
    return clausify.insert(cp, x)
  }
};
tautclause_inst_26_22_18_10_9_tsni = function tautclause_inst_26_22_18_10_9_tsni(c_a) {
  let lscomp, first1, first0, c, a, tmp;
  if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
    first0 = c_a[0];
    first1 = c_a[1];
    c = first0;
    a = first1;
    lscomp = function lscomp(ls) {
      let param0, param1, h, t, scrut, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
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
          tmp1 = lscomp(t);
          _deforest_Cons_head = h;
          _deforest_Cons_tail = tmp1;
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
                return listNeq_inst_26_22_18_10_9_28_tsni(tx, ty)
              } else {
                return true
              }
            } else {
              return true
            }
          }
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(c);
    return listNeq_inst_26_22_18_10_9_28_tsni(tmp, NofibPrelude.Nil)
  } else {
    throw new globalThis.Error("match error");
  }
};
split_inst_26_22_19_tsni = function split_inst_26_22_19_tsni(p) {
  return splitHelper_inst_26_22_19_20_tsni(p, (f, z) => {
    return z
  })
};
splitHelper_inst_26_22_19_20_tsni = function splitHelper_inst_26_22_19_20_tsni(p, a) {
  let param0, param1, p1, q, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (p instanceof clausify.Con.class) {
    param0 = p.a;
    param1 = p.b;
    p1 = param0;
    q = param1;
    tmp = splitHelper_inst_26_22_19_20_tsni(q, a);
    return splitHelper_inst_26_22_19_20_tsni(p1, tmp)
  } else {
    _deforest_Cons_head = p;
    _deforest_Cons_tail = a;
    return (f, z) => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp1 = foldr_inst_26_22_18_31_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp1))
    }
  }
};
replicate_inst_26_25_tsni = function replicate_inst_26_25_tsni(n, x) {
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
    tmp1 = replicate_inst_26_25_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x1, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x1));
      tmp3 = map_inst_26_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = concat_inst_26_27_tsni(xs1);
        return append_inst_26_27_24_tsni(x2, tmp4)
      }
    }
  }
};
map_inst_26_21_tsni = function map_inst_26_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_26_22_23_tsni = function concat_inst_26_22_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_26_22_23_24_tsni = function append_inst_26_22_23_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_26_22_23_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_26_27_24_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return () => {
        let param01, param11, h, t, tmp1;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp1 = nofibListToString_inst_32_tsni(t);
        return h + tmp1
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_26_27_tsni = function concat_inst_26_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_26_27_24_tsni = function append_inst_26_27_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_9_28_tsni = function listNeq_inst_9_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_10_9_28_tsni = function listNeq_inst_10_9_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_29_tsni = function append_inst_29_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_30_tsni = function append_inst_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_23_tsni = function concat_inst_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_17_29_tsni = function append_inst_17_29_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_30_tsni = function append_inst_17_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_18_10_9_28_tsni = function listNeq_inst_18_10_9_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_18_31_tsni = function foldr_inst_18_31_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_27_tsni = function concat_inst_27_tsni(ls) {
  return runtime.safeCall(ls())
};
listNeq_inst_22_18_10_9_28_tsni = function listNeq_inst_22_18_10_9_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_22_18_31_tsni = function foldr_inst_22_18_31_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_22_17_29_tsni = function append_inst_22_17_29_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_17_30_tsni = function append_inst_22_17_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_27_24_tsni = function append_inst_27_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_26_22_17_29_tsni = function append_inst_26_22_17_29_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_26_22_17_30_tsni = function append_inst_26_22_17_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listNeq_inst_26_22_18_10_9_28_tsni = function listNeq_inst_26_22_18_10_9_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_26_22_18_31_tsni = function foldr_inst_26_22_18_31_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
nofibListToString_inst_32_tsni = function nofibListToString_inst_32_tsni(ls) {
  return runtime.safeCall(ls())
};
(class clausify {
  static {
    clausify1 = clausify;
    this.Formula = class Formula {
      constructor() {}
      toString() { return "Formula"; }
    };
    this.Sym = function Sym(a1) {
      return new Sym.class(a1);
    };
    this.Sym.class = class Sym extends clausify.Formula {
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return "Sym(" + runtime.render(this.a) + ")"; }
    };
    this.Not = function Not(a1) {
      return new Not.class(a1);
    };
    this.Not.class = class Not extends clausify.Formula {
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return "Not(" + runtime.render(this.a) + ")"; }
    };
    this.Dis = function Dis(a1, b1) {
      return new Dis.class(a1, b1);
    };
    this.Dis.class = class Dis extends clausify.Formula {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "Dis(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.Con = function Con(a1, b1) {
      return new Con.class(a1, b1);
    };
    this.Con.class = class Con extends clausify.Formula {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "Con(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.Imp = function Imp(a1, b1) {
      return new Imp.class(a1, b1);
    };
    this.Imp.class = class Imp extends clausify.Formula {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "Imp(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.Eqv = function Eqv(a1, b1) {
      return new Eqv.class(a1, b1);
    };
    this.Eqv.class = class Eqv extends clausify.Formula {
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return "Eqv(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.StackFrame = class StackFrame {
      constructor() {}
      toString() { return "StackFrame"; }
    };
    this.Ast = function Ast(f1) {
      return new Ast.class(f1);
    };
    this.Ast.class = class Ast extends clausify.StackFrame {
      constructor(f) {
        super();
        this.f = f;
      }
      toString() { return "Ast(" + runtime.render(this.f) + ")"; }
    };
    this.Lex = function Lex(s1) {
      return new Lex.class(s1);
    };
    this.Lex.class = class Lex extends clausify.StackFrame {
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return "Lex(" + runtime.render(this.s) + ")"; }
    };
  }
  static charLt(a, b) {
    return a < b
  } 
  static charLeq(a1, b1) {
    return a1 <= b1
  } 
  static charGt(a2, b2) {
    return a2 > b2
  } 
  static charGeq(a3, b3) {
    return a3 >= b3
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
      throw new globalThis.Error("match error");
    }
  } 
  static clauseHelper(p, x1) {
    let param0, param01, s, first1, first0, c, a4, s1, c1, a5, param1, p1, q, tmp, tmp1, arr, tmp2, arr1;
    if (p instanceof clausify.Dis.class) {
      param0 = p.a;
      param1 = p.b;
      p1 = param0;
      q = param1;
      tmp = clausify.clauseHelper(q, x1);
      return clausify.clauseHelper(p1, tmp)
    } else if (p instanceof clausify.Sym.class) {
      param0 = p.a;
      s1 = param0;
      if (globalThis.Array.isArray(x1) && x1.length === 2) {
        first0 = x1[0];
        first1 = x1[1];
        c1 = first0;
        a5 = first1;
        tmp1 = clausify.insert(s1, c1);
        arr = [
          tmp1,
          a5
        ];
        return arr
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (p instanceof clausify.Not.class) {
      param0 = p.a;
      if (param0 instanceof clausify.Sym.class) {
        param01 = param0.a;
        s = param01;
        if (globalThis.Array.isArray(x1) && x1.length === 2) {
          first0 = x1[0];
          first1 = x1[1];
          c = first0;
          a4 = first1;
          tmp2 = clausify.insert(s, a4);
          arr1 = [
            c,
            tmp2
          ];
          return arr1
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
  static clause(p1) {
    let arr;
    arr = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    return clausify.clauseHelper(p1, arr)
  } 
  static conjunct(p2) {
    let param0, param1;
    if (p2 instanceof clausify.Con.class) {
      param0 = p2.a;
      param1 = p2.b;
      return true
    } else {
      return false
    }
  } 
  static disin(p3) {
    let param0, param1, p4, q, p5, q1, dp, dq, scrut, param01, param11, p6, q2, r, p7, param02, param12, q3, r1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    if (p3 instanceof clausify.Dis.class) {
      param0 = p3.a;
      param1 = p3.b;
      p7 = param0;
      if (param1 instanceof clausify.Con.class) {
        param02 = param1.a;
        param12 = param1.b;
        q3 = param02;
        r1 = param12;
        tmp = clausify.Dis(p7, q3);
        tmp1 = clausify.disin(tmp);
        tmp2 = clausify.Dis(p7, r1);
        tmp3 = clausify.disin(tmp2);
        return clausify.Con(tmp1, tmp3)
      } else {
        if (param0 instanceof clausify.Con.class) {
          param01 = param0.a;
          param11 = param0.b;
          p6 = param01;
          q2 = param11;
          r = param1;
          tmp4 = clausify.Dis(p6, r);
          tmp5 = clausify.disin(tmp4);
          tmp6 = clausify.Dis(q2, r);
          tmp7 = clausify.disin(tmp6);
          return clausify.Con(tmp5, tmp7)
        } else {
          p5 = param0;
          q1 = param1;
          tmp8 = clausify.disin(p5);
          dp = tmp8;
          tmp9 = clausify.disin(q1);
          dq = tmp9;
          tmp10 = clausify.conjunct(dp);
          tmp11 = clausify.conjunct(dq);
          scrut = tmp10 || tmp11;
          if (scrut === true) {
            tmp12 = clausify.Dis(dp, dq);
            return clausify.disin(tmp12)
          } else {
            return clausify.Dis(dp, dq)
          }
        }
      }
    } else if (p3 instanceof clausify.Con.class) {
      param0 = p3.a;
      param1 = p3.b;
      p4 = param0;
      q = param1;
      tmp13 = clausify.disin(p4);
      tmp14 = clausify.disin(q);
      return clausify.Con(tmp13, tmp14)
    } else {
      return p3
    }
  } 
  static elim(p4) {
    let param0, param1, f, f_, p5, q, p6, q1, p7, q2, p8, s, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Imp_a, _deforest_Imp_b, _deforest_Imp_a1, _deforest_Imp_b1;
    if (p4 instanceof clausify.Sym.class) {
      param0 = p4.a;
      s = param0;
      return runtime.safeCall(clausify.Sym(s))
    } else if (p4 instanceof clausify.Not.class) {
      param0 = p4.a;
      p8 = param0;
      tmp = elim_inst_8_tsni(p8);
      return runtime.safeCall(clausify.Not(tmp))
    } else if (p4 instanceof clausify.Dis.class) {
      param0 = p4.a;
      param1 = p4.b;
      p7 = param0;
      q2 = param1;
      tmp1 = elim_inst_7_tsni(p7);
      tmp2 = elim_inst_6_tsni(q2);
      return clausify.Dis(tmp1, tmp2)
    } else if (p4 instanceof clausify.Con.class) {
      param0 = p4.a;
      param1 = p4.b;
      p6 = param0;
      q1 = param1;
      tmp3 = elim_inst_5_tsni(p6);
      tmp4 = elim_inst_4_tsni(q1);
      return clausify.Con(tmp3, tmp4)
    } else if (p4 instanceof clausify.Imp.class) {
      param0 = p4.a;
      param1 = p4.b;
      p5 = param0;
      q = param1;
      tmp5 = elim_inst_3_tsni(p5);
      tmp6 = runtime.safeCall(clausify.Not(tmp5));
      tmp7 = elim_inst_2_tsni(q);
      return clausify.Dis(tmp6, tmp7)
    } else if (p4 instanceof clausify.Eqv.class) {
      param0 = p4.a;
      param1 = p4.b;
      f = param0;
      f_ = param1;
      _deforest_Imp_a1 = f;
      _deforest_Imp_b1 = f_;
      tmp8 = () => {
        return match_p_arm_Imp_inst_1_tsni(_deforest_Imp_a1, _deforest_Imp_b1)
      };
      tmp9 = elim_inst_1_tsni(tmp8);
      _deforest_Imp_a = f_;
      _deforest_Imp_b = f;
      tmp10 = () => {
        return match_p_arm_Imp_inst_0_tsni(_deforest_Imp_a, _deforest_Imp_b)
      };
      tmp11 = elim_inst_0_tsni(tmp10);
      return clausify.Con(tmp9, tmp11)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static interleave(xs, ys1) {
    let param0, param1, x2, xs1, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x2 = param0;
      xs1 = param1;
      tmp = clausify.interleave(ys1, xs1);
      return NofibPrelude.Cons(x2, tmp)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static negin(p5) {
    let param0, param1, p6, q, p7, q1, param01, param11, p8, q2, p9, q3, p10, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (p5 instanceof clausify.Not.class) {
      param0 = p5.a;
      if (param0 instanceof clausify.Not.class) {
        param01 = param0.a;
        p10 = param01;
        return clausify.negin(p10)
      } else if (param0 instanceof clausify.Con.class) {
        param01 = param0.a;
        param11 = param0.b;
        p9 = param01;
        q3 = param11;
        tmp = runtime.safeCall(clausify.Not(p9));
        tmp1 = clausify.negin(tmp);
        tmp2 = runtime.safeCall(clausify.Not(q3));
        tmp3 = clausify.negin(tmp2);
        return clausify.Dis(tmp1, tmp3)
      } else if (param0 instanceof clausify.Dis.class) {
        param01 = param0.a;
        param11 = param0.b;
        p8 = param01;
        q2 = param11;
        tmp4 = runtime.safeCall(clausify.Not(p8));
        tmp5 = clausify.negin(tmp4);
        tmp6 = runtime.safeCall(clausify.Not(q2));
        tmp7 = clausify.negin(tmp6);
        return clausify.Con(tmp5, tmp7)
      } else {
        return p5
      }
    } else if (p5 instanceof clausify.Dis.class) {
      param0 = p5.a;
      param1 = p5.b;
      p7 = param0;
      q1 = param1;
      tmp8 = clausify.negin(p7);
      tmp9 = clausify.negin(q1);
      return clausify.Dis(tmp8, tmp9)
    } else if (p5 instanceof clausify.Con.class) {
      param0 = p5.a;
      param1 = p5.b;
      p6 = param0;
      q = param1;
      tmp10 = clausify.negin(p6);
      tmp11 = clausify.negin(q);
      return clausify.Con(tmp10, tmp11)
    } else {
      return p5
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
                throw globalThis.Error(c);
              }
            }
          }
        }
      }
    }
  } 
  static red(s) {
    let param0, param1, param01, p6, param02, param11, param03, s1, p7, param04, param12, param05, q, s2, p8, q1, s3, p9, q2, s4, p10, q3, s5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        p10 = param01;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param02 = param1.head;
          param11 = param1.tail;
          if (param02 instanceof clausify.Lex.class) {
            param03 = param02.s;
            p9 = param01;
            p8 = param01;
            p7 = param01;
            p6 = param01;
            if (param03 === "=") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q3 = param05;
                  s5 = param12;
                  tmp = clausify.Eqv(q3, p10);
                  tmp1 = runtime.safeCall(clausify.Ast(tmp));
                  return NofibPrelude.Cons(tmp1, s5)
                } else {
                  p9 = param01;
                  p8 = param01;
                  p7 = param01;
                  p6 = param01;
                  throw new globalThis.Error("match error");
                }
              } else {
                p9 = param01;
                p8 = param01;
                p7 = param01;
                p6 = param01;
                throw new globalThis.Error("match error");
              }
            } else if (param03 === ">") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q2 = param05;
                  s4 = param12;
                  tmp2 = clausify.Imp(q2, p9);
                  tmp3 = runtime.safeCall(clausify.Ast(tmp2));
                  return NofibPrelude.Cons(tmp3, s4)
                } else {
                  p8 = param01;
                  p7 = param01;
                  p6 = param01;
                  throw new globalThis.Error("match error");
                }
              } else {
                p8 = param01;
                p7 = param01;
                p6 = param01;
                throw new globalThis.Error("match error");
              }
            } else if (param03 === "|") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q1 = param05;
                  s3 = param12;
                  tmp4 = clausify.Dis(q1, p8);
                  tmp5 = runtime.safeCall(clausify.Ast(tmp4));
                  return NofibPrelude.Cons(tmp5, s3)
                } else {
                  p7 = param01;
                  p6 = param01;
                  throw new globalThis.Error("match error");
                }
              } else {
                p7 = param01;
                p6 = param01;
                throw new globalThis.Error("match error");
              }
            } else if (param03 === "&") {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param04 = param11.head;
                param12 = param11.tail;
                if (param04 instanceof clausify.Ast.class) {
                  param05 = param04.f;
                  q = param05;
                  s2 = param12;
                  tmp6 = clausify.Con(q, p7);
                  tmp7 = runtime.safeCall(clausify.Ast(tmp6));
                  return NofibPrelude.Cons(tmp7, s2)
                } else {
                  p6 = param01;
                  throw new globalThis.Error("match error");
                }
              } else {
                p6 = param01;
                throw new globalThis.Error("match error");
              }
            } else if (param03 === "~") {
              s1 = param11;
              tmp8 = runtime.safeCall(clausify.Not(p6));
              tmp9 = runtime.safeCall(clausify.Ast(tmp8));
              return NofibPrelude.Cons(tmp9, s1)
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            p9 = param01;
            p8 = param01;
            p7 = param01;
            p6 = param01;
            throw new globalThis.Error("match error");
          }
        } else {
          p9 = param01;
          p8 = param01;
          p7 = param01;
          p6 = param01;
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static spri(s1) {
    let param0, param1, param01, x2, param02, param11, param03, c1, s2;
    if (s1 instanceof NofibPrelude.Cons.class) {
      param0 = s1.head;
      param1 = s1.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        x2 = param01;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param02 = param1.head;
          param11 = param1.tail;
          if (param02 instanceof clausify.Lex.class) {
            param03 = param02.s;
            c1 = param03;
            s2 = param11;
            return clausify.opri(c1)
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
  static redstar(s2) {
    let lambda;
    lambda = (undefined, function (s3) {
      let tmp;
      tmp = clausify.spri(s3);
      return tmp != 0
    });
    return NofibPrelude.while_(lambda, clausify.red, s2)
  } 
  static spaces(n) {
    return NofibPrelude.replicate(n, " ")
  } 
  static parseHelper(t, s3) {
    let param0, param1, c1, t1, scrut, scrut1, t2, scrut2, param01, param11, x2, param02, param12, param03, ss, t3, t4, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57;
    if (t instanceof NofibPrelude.Nil.class) {
      return clausify.redstar(s3)
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (param0 === " ") {
        t4 = param1;
        return clausify.parseHelper(t4, s3)
      } else if (param0 === "(") {
        t3 = param1;
        tmp = runtime.safeCall(clausify.Lex("("));
        tmp1 = NofibPrelude.Cons(tmp, s3);
        return clausify.parseHelper(t3, tmp1)
      } else if (param0 === ")") {
        t2 = param1;
        scrut2 = clausify.redstar(s3);
        if (scrut2 instanceof NofibPrelude.Cons.class) {
          param01 = scrut2.head;
          param11 = scrut2.tail;
          x2 = param01;
          if (param11 instanceof NofibPrelude.Cons.class) {
            param02 = param11.head;
            param12 = param11.tail;
            if (param02 instanceof clausify.Lex.class) {
              param03 = param02.s;
              if (param03 === "(") {
                ss = param12;
                tmp2 = NofibPrelude.Cons(x2, ss);
                return clausify.parseHelper(t2, tmp2)
              } else {
                c1 = param0;
                t1 = param1;
                tmp3 = clausify.charLeq("a", c1);
                tmp4 = clausify.charLeq(c1, "z");
                scrut1 = tmp3 && tmp4;
                if (scrut1 === true) {
                  tmp5 = runtime.safeCall(clausify.Sym(c1));
                  tmp6 = runtime.safeCall(clausify.Ast(tmp5));
                  tmp7 = NofibPrelude.Cons(tmp6, s3);
                  return clausify.parseHelper(t1, tmp7)
                } else {
                  tmp8 = clausify.spri(s3);
                  tmp9 = clausify.opri(c1);
                  scrut = tmp8 > tmp9;
                  if (scrut === true) {
                    tmp10 = NofibPrelude.Cons(c1, t1);
                    tmp11 = clausify.red(s3);
                    return clausify.parseHelper(tmp10, tmp11)
                  } else {
                    tmp12 = runtime.safeCall(clausify.Lex(c1));
                    tmp13 = NofibPrelude.Cons(tmp12, s3);
                    return clausify.parseHelper(t1, tmp13)
                  }
                }
              }
            } else {
              c1 = param0;
              t1 = param1;
              tmp14 = clausify.charLeq("a", c1);
              tmp15 = clausify.charLeq(c1, "z");
              scrut1 = tmp14 && tmp15;
              if (scrut1 === true) {
                tmp16 = runtime.safeCall(clausify.Sym(c1));
                tmp17 = runtime.safeCall(clausify.Ast(tmp16));
                tmp18 = NofibPrelude.Cons(tmp17, s3);
                return clausify.parseHelper(t1, tmp18)
              } else {
                tmp19 = clausify.spri(s3);
                tmp20 = clausify.opri(c1);
                scrut = tmp19 > tmp20;
                if (scrut === true) {
                  tmp21 = NofibPrelude.Cons(c1, t1);
                  tmp22 = clausify.red(s3);
                  return clausify.parseHelper(tmp21, tmp22)
                } else {
                  tmp23 = runtime.safeCall(clausify.Lex(c1));
                  tmp24 = NofibPrelude.Cons(tmp23, s3);
                  return clausify.parseHelper(t1, tmp24)
                }
              }
            }
          } else {
            c1 = param0;
            t1 = param1;
            tmp25 = clausify.charLeq("a", c1);
            tmp26 = clausify.charLeq(c1, "z");
            scrut1 = tmp25 && tmp26;
            if (scrut1 === true) {
              tmp27 = runtime.safeCall(clausify.Sym(c1));
              tmp28 = runtime.safeCall(clausify.Ast(tmp27));
              tmp29 = NofibPrelude.Cons(tmp28, s3);
              return clausify.parseHelper(t1, tmp29)
            } else {
              tmp30 = clausify.spri(s3);
              tmp31 = clausify.opri(c1);
              scrut = tmp30 > tmp31;
              if (scrut === true) {
                tmp32 = NofibPrelude.Cons(c1, t1);
                tmp33 = clausify.red(s3);
                return clausify.parseHelper(tmp32, tmp33)
              } else {
                tmp34 = runtime.safeCall(clausify.Lex(c1));
                tmp35 = NofibPrelude.Cons(tmp34, s3);
                return clausify.parseHelper(t1, tmp35)
              }
            }
          }
        } else {
          c1 = param0;
          t1 = param1;
          tmp36 = clausify.charLeq("a", c1);
          tmp37 = clausify.charLeq(c1, "z");
          scrut1 = tmp36 && tmp37;
          if (scrut1 === true) {
            tmp38 = runtime.safeCall(clausify.Sym(c1));
            tmp39 = runtime.safeCall(clausify.Ast(tmp38));
            tmp40 = NofibPrelude.Cons(tmp39, s3);
            return clausify.parseHelper(t1, tmp40)
          } else {
            tmp41 = clausify.spri(s3);
            tmp42 = clausify.opri(c1);
            scrut = tmp41 > tmp42;
            if (scrut === true) {
              tmp43 = NofibPrelude.Cons(c1, t1);
              tmp44 = clausify.red(s3);
              return clausify.parseHelper(tmp43, tmp44)
            } else {
              tmp45 = runtime.safeCall(clausify.Lex(c1));
              tmp46 = NofibPrelude.Cons(tmp45, s3);
              return clausify.parseHelper(t1, tmp46)
            }
          }
        }
      } else {
        c1 = param0;
        t1 = param1;
        tmp47 = clausify.charLeq("a", c1);
        tmp48 = clausify.charLeq(c1, "z");
        scrut1 = tmp47 && tmp48;
        if (scrut1 === true) {
          tmp49 = runtime.safeCall(clausify.Sym(c1));
          tmp50 = runtime.safeCall(clausify.Ast(tmp49));
          tmp51 = NofibPrelude.Cons(tmp50, s3);
          return clausify.parseHelper(t1, tmp51)
        } else {
          tmp52 = clausify.spri(s3);
          tmp53 = clausify.opri(c1);
          scrut = tmp52 > tmp53;
          if (scrut === true) {
            tmp54 = NofibPrelude.Cons(c1, t1);
            tmp55 = clausify.red(s3);
            return clausify.parseHelper(tmp54, tmp55)
          } else {
            tmp56 = runtime.safeCall(clausify.Lex(c1));
            tmp57 = NofibPrelude.Cons(tmp56, s3);
            return clausify.parseHelper(t1, tmp57)
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static parse(t1) {
    let scrut, param0, param1, param01, f;
    scrut = clausify.parseHelper(t1, NofibPrelude.Nil);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      if (param0 instanceof clausify.Ast.class) {
        param01 = param0.f;
        f = param01;
        if (param1 instanceof NofibPrelude.Nil.class) {
          return f
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
  static splitHelper(p6, a4) {
    let param0, param1, p7, q, tmp;
    if (p6 instanceof clausify.Con.class) {
      param0 = p6.a;
      param1 = p6.b;
      p7 = param0;
      q = param1;
      tmp = clausify.splitHelper(q, a4);
      return clausify.splitHelper(p7, tmp)
    } else {
      return NofibPrelude.Cons(p6, a4)
    }
  } 
  static split(p7) {
    return clausify.splitHelper(p7, NofibPrelude.Nil)
  } 
  static tautclause(c_a) {
    let lscomp, first1, first0, c1, a5, tmp;
    if (globalThis.Array.isArray(c_a) && c_a.length === 2) {
      first0 = c_a[0];
      first1 = c_a[1];
      c1 = first0;
      a5 = first1;
      lscomp = function lscomp(ls) {
        let param0, param1, h, t2, scrut, tmp1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param0 = ls.head;
          param1 = ls.tail;
          h = param0;
          t2 = param1;
          scrut = NofibPrelude.inList(h, a5);
          if (scrut === true) {
            tmp1 = lscomp(t2);
            return NofibPrelude.Cons(h, tmp1)
          } else {
            return lscomp(t2)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp(c1);
      return NofibPrelude.listNeq(tmp, NofibPrelude.Nil)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static uniclHelper(p8, x2) {
    let cp, scrut, tmp;
    tmp = clausify.clause(p8);
    cp = tmp;
    scrut = tautclause_inst_9_tsni(cp);
    if (scrut === true) {
      return x2
    } else {
      return clausify.insert(cp, x2)
    }
  } 
  static unicl(a5) {
    return NofibPrelude.foldr(uniclHelper_inst_10_tsni, NofibPrelude.Nil, a5)
  } 
  static disp(l_r) {
    let first1, first0, l, r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (globalThis.Array.isArray(l_r) && l_r.length === 2) {
      first0 = l_r[0];
      first1 = l_r[1];
      l = first0;
      r = first1;
      tmp = NofibPrelude.listLen(l);
      tmp1 = spaces_inst_15_tsni(tmp);
      tmp2 = interleave_inst_14_tsni(l, tmp1);
      tmp3 = NofibPrelude.nofibStringToList("<=");
      tmp4 = NofibPrelude.listLen(r);
      tmp5 = spaces_inst_12_tsni(tmp4);
      tmp6 = interleave_inst_11_tsni(tmp5, r);
      tmp7 = NofibPrelude.nofibStringToList("\n");
      tmp8 = append_inst_29_tsni(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp3, tmp8);
      return append_inst_30_tsni(tmp2, tmp9)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static clauses(t2) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = clausify.parse(t2);
    tmp1 = clausify.elim(tmp);
    tmp2 = clausify.negin(tmp1);
    tmp3 = clausify.disin(tmp2);
    tmp4 = split_inst_19_tsni(tmp3);
    tmp5 = unicl_inst_18_tsni(tmp4);
    tmp6 = map_inst_16_tsni(disp_inst_17_tsni, tmp5);
    return concat_inst_23_tsni(tmp6)
  } 
  static testClausify_nofib(n1) {
    let xs1, tmp, tmp1, tmp2;
    tmp = NofibPrelude.nofibStringToList("a = a = a");
    tmp1 = replicate_inst_25_tsni(n1, tmp);
    xs1 = tmp1;
    tmp2 = map_inst_21_tsni(clauses_inst_22_tsni, xs1);
    return concat_inst_27_tsni(tmp2)
  } 
  static main() {
    let tmp;
    tmp = testClausify_nofib_inst_26_tsni(10);
    return nofibListToString_inst_32_tsni(tmp)
  }
  static toString() { return "clausify"; }
});
let clausify = clausify1; export default clausify;
