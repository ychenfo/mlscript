const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let f, lscomp, proc, listcomp, secretary1, lambda, lambda1, lambda2, f$, lambda$, lscomp$, proc$, lambda$1, listcomp$, sim_inst_0_1_tsni, simulate_inst_0_1_2_tsni, enumFromTo_inst_0_1_2_3_tsni, lscomp$_inst_0_1_2_4_tsni, proc_inst_0_1_5_tsni, proc$_inst_0_1_5_6_tsni, listcomp$_inst_7_8_tsni, sim_inst_7_8_1_tsni, proc_inst_7_8_1_5_tsni, proc$_inst_7_8_1_5_6_tsni, simulate_inst_7_8_1_2_tsni, lscomp$_inst_7_8_1_2_4_tsni, enumFromTo_inst_7_8_1_2_3_tsni, proc$_inst_10_6_tsni, enumFromTo_inst_11_3_tsni, lscomp$_inst_11_4_tsni, proc_inst_12_5_tsni, proc$_inst_12_5_6_tsni, simulate_inst_12_2_tsni, lscomp$_inst_12_2_4_tsni, enumFromTo_inst_12_2_3_tsni, listcomp$_inst_13_14_tsni, sim_inst_13_14_1_tsni, proc_inst_13_14_1_5_tsni, proc$_inst_13_14_1_5_6_tsni, simulate_inst_13_14_1_2_tsni, lscomp$_inst_13_14_1_2_4_tsni, enumFromTo_inst_13_14_1_2_3_tsni, enumFromTo_inst_13_15_tsni, testSecretary_nofib_inst_16_17_tsni, listcomp$_inst_16_17_14_tsni, sim_inst_16_17_14_1_tsni, simulate_inst_16_17_14_1_2_tsni, enumFromTo_inst_16_17_14_1_2_3_tsni, lscomp$_inst_16_17_14_1_2_4_tsni, proc_inst_16_17_14_1_5_tsni, proc$_inst_16_17_14_1_5_6_tsni, enumFromTo_inst_16_17_15_tsni, filter_inst_0_1_2_18_tsni, listEq_inst_0_1_5_6_19_tsni, listEq_inst_7_8_1_5_6_19_tsni, filter_inst_7_8_1_2_18_tsni, listEq_inst_9_19_tsni, listEq_inst_10_6_19_tsni, filter_inst_11_18_tsni, listEq_inst_12_5_6_19_tsni, filter_inst_12_2_18_tsni, listEq_inst_13_14_1_5_6_19_tsni, filter_inst_13_14_1_2_18_tsni, filter_inst_16_17_14_1_2_18_tsni, listEq_inst_16_17_14_1_5_6_19_tsni;
sim_inst_0_1_tsni = function sim_inst_0_1_tsni(n, k) {
  let proc$this;
  proc$this = runtime.safeCall(proc_inst_0_1_5_tsni(k));
  return simulate_inst_0_1_2_tsni(n, 100, proc$this)
};
simulate_inst_0_1_2_tsni = function simulate_inst_0_1_2_tsni(n, m, proc1) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = enumFromTo_inst_0_1_2_3_tsni(1, n);
  tmp1 = lscomp$_inst_0_1_2_4_tsni(m, proc1, tmp);
  tmp2 = filter_inst_0_1_2_18_tsni(lambda1, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
enumFromTo_inst_0_1_2_3_tsni = function enumFromTo_inst_0_1_2_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_2_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_0_1_2_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_0_1_2_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_0_1_2_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp$_inst_0_1_2_4_tsni = function lscomp$_inst_0_1_2_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
proc_inst_0_1_5_tsni = function proc_inst_0_1_5_tsni(k) {
  return (rs) => {
    return proc$_inst_0_1_5_6_tsni(k, rs)
  }
};
proc$_inst_0_1_5_6_tsni = function proc$_inst_0_1_5_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_0_1_5_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_0_1_5_6_19_tsni(tmp6, tmp7)
};
listcomp$_inst_7_8_tsni = function listcomp$_inst_7_8_tsni(n, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = sim_inst_7_8_1_tsni(n, h);
    tmp1 = listcomp$_inst_7_8_tsni(n, t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sim_inst_7_8_1_tsni = function sim_inst_7_8_1_tsni(n, k) {
  let proc$this;
  proc$this = runtime.safeCall(proc_inst_7_8_1_5_tsni(k));
  return simulate_inst_7_8_1_2_tsni(n, 100, proc$this)
};
proc_inst_7_8_1_5_tsni = function proc_inst_7_8_1_5_tsni(k) {
  return (rs) => {
    return proc$_inst_7_8_1_5_6_tsni(k, rs)
  }
};
proc$_inst_7_8_1_5_6_tsni = function proc$_inst_7_8_1_5_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_7_8_1_5_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_7_8_1_5_6_19_tsni(tmp6, tmp7)
};
simulate_inst_7_8_1_2_tsni = function simulate_inst_7_8_1_2_tsni(n, m, proc1) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = enumFromTo_inst_7_8_1_2_3_tsni(1, n);
  tmp1 = lscomp$_inst_7_8_1_2_4_tsni(m, proc1, tmp);
  tmp2 = filter_inst_7_8_1_2_18_tsni(lambda1, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
lscomp$_inst_7_8_1_2_4_tsni = function lscomp$_inst_7_8_1_2_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
enumFromTo_inst_7_8_1_2_3_tsni = function enumFromTo_inst_7_8_1_2_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_7_8_1_2_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_7_8_1_2_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_7_8_1_2_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_7_8_1_2_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
proc$_inst_10_6_tsni = function proc$_inst_10_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_10_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_10_6_19_tsni(tmp6, tmp7)
};
enumFromTo_inst_11_3_tsni = function enumFromTo_inst_11_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_11_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_11_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_11_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_11_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp$_inst_11_4_tsni = function lscomp$_inst_11_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
proc_inst_12_5_tsni = function proc_inst_12_5_tsni(k) {
  return (rs) => {
    return proc$_inst_12_5_6_tsni(k, rs)
  }
};
proc$_inst_12_5_6_tsni = function proc$_inst_12_5_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_12_5_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_12_5_6_19_tsni(tmp6, tmp7)
};
simulate_inst_12_2_tsni = function simulate_inst_12_2_tsni(n, m, proc1) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = enumFromTo_inst_12_2_3_tsni(1, n);
  tmp1 = lscomp$_inst_12_2_4_tsni(m, proc1, tmp);
  tmp2 = filter_inst_12_2_18_tsni(lambda1, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
lscomp$_inst_12_2_4_tsni = function lscomp$_inst_12_2_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
enumFromTo_inst_12_2_3_tsni = function enumFromTo_inst_12_2_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_12_2_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_12_2_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_12_2_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_12_2_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
listcomp$_inst_13_14_tsni = function listcomp$_inst_13_14_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
sim_inst_13_14_1_tsni = function sim_inst_13_14_1_tsni(n, k) {
  let proc$this;
  proc$this = runtime.safeCall(proc_inst_13_14_1_5_tsni(k));
  return simulate_inst_13_14_1_2_tsni(n, 100, proc$this)
};
proc_inst_13_14_1_5_tsni = function proc_inst_13_14_1_5_tsni(k) {
  return (rs) => {
    return proc$_inst_13_14_1_5_6_tsni(k, rs)
  }
};
proc$_inst_13_14_1_5_6_tsni = function proc$_inst_13_14_1_5_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_13_14_1_5_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_13_14_1_5_6_19_tsni(tmp6, tmp7)
};
simulate_inst_13_14_1_2_tsni = function simulate_inst_13_14_1_2_tsni(n, m, proc1) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = enumFromTo_inst_13_14_1_2_3_tsni(1, n);
  tmp1 = lscomp$_inst_13_14_1_2_4_tsni(m, proc1, tmp);
  tmp2 = filter_inst_13_14_1_2_18_tsni(lambda1, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
lscomp$_inst_13_14_1_2_4_tsni = function lscomp$_inst_13_14_1_2_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
enumFromTo_inst_13_14_1_2_3_tsni = function enumFromTo_inst_13_14_1_2_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_13_14_1_2_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_13_14_1_2_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_13_14_1_2_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_13_14_1_2_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_13_15_tsni = function enumFromTo_inst_13_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_13_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (n) => {
      let param0, param1, h, t, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = sim_inst_13_14_1_tsni(n, h);
      tmp3 = listcomp$_inst_13_14_tsni(n, t);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (n) => {
      return NofibPrelude.Nil
    }
  }
};
testSecretary_nofib_inst_16_17_tsni = function testSecretary_nofib_inst_16_17_tsni(n) {
  let tmp;
  tmp = enumFromTo_inst_16_17_15_tsni(35, 39);
  return listcomp$_inst_16_17_14_tsni(n, tmp)
};
listcomp$_inst_16_17_14_tsni = function listcomp$_inst_16_17_14_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
sim_inst_16_17_14_1_tsni = function sim_inst_16_17_14_1_tsni(n, k) {
  let proc$this;
  proc$this = runtime.safeCall(proc_inst_16_17_14_1_5_tsni(k));
  return simulate_inst_16_17_14_1_2_tsni(n, 100, proc$this)
};
simulate_inst_16_17_14_1_2_tsni = function simulate_inst_16_17_14_1_2_tsni(n, m, proc1) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = enumFromTo_inst_16_17_14_1_2_3_tsni(1, n);
  tmp1 = lscomp$_inst_16_17_14_1_2_4_tsni(m, proc1, tmp);
  tmp2 = filter_inst_16_17_14_1_2_18_tsni(lambda1, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
enumFromTo_inst_16_17_14_1_2_3_tsni = function enumFromTo_inst_16_17_14_1_2_3_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_16_17_14_1_2_3_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (m, proc1) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary1.infRand(m, seed);
      tmp3 = runtime.safeCall(proc1(tmp2));
      tmp4 = lscomp$_inst_16_17_14_1_2_4_tsni(m, proc1, t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f1) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f1(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_16_17_14_1_2_18_tsni(f1, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_16_17_14_1_2_18_tsni(f1, t1)
        }
      }
    }
  } else {
    return (m, proc1) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp$_inst_16_17_14_1_2_4_tsni = function lscomp$_inst_16_17_14_1_2_4_tsni(m, proc1, ls) {
  return runtime.safeCall(ls(m, proc1))
};
proc_inst_16_17_14_1_5_tsni = function proc_inst_16_17_14_1_5_tsni(k) {
  return (rs) => {
    return proc$_inst_16_17_14_1_5_6_tsni(k, rs)
  }
};
proc$_inst_16_17_14_1_5_6_tsni = function proc$_inst_16_17_14_1_5_6_tsni(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_16_17_14_1_5_6_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_16_17_14_1_5_6_19_tsni(tmp6, tmp7)
};
enumFromTo_inst_16_17_15_tsni = function enumFromTo_inst_16_17_15_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_16_17_15_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (n) => {
      let param0, param1, h, t, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = sim_inst_16_17_14_1_tsni(n, h);
      tmp3 = listcomp$_inst_16_17_14_tsni(n, t);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (n) => {
      return NofibPrelude.Nil
    }
  }
};
filter_inst_0_1_2_18_tsni = function filter_inst_0_1_2_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
listEq_inst_0_1_5_6_19_tsni = function listEq_inst_0_1_5_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listEq_inst_7_8_1_5_6_19_tsni = function listEq_inst_7_8_1_5_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_7_8_1_2_18_tsni = function filter_inst_7_8_1_2_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
listEq_inst_9_19_tsni = function listEq_inst_9_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listEq_inst_10_6_19_tsni = function listEq_inst_10_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_11_18_tsni = function filter_inst_11_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
listEq_inst_12_5_6_19_tsni = function listEq_inst_12_5_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_12_2_18_tsni = function filter_inst_12_2_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
listEq_inst_13_14_1_5_6_19_tsni = function listEq_inst_13_14_1_5_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_13_14_1_2_18_tsni = function filter_inst_13_14_1_2_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
filter_inst_16_17_14_1_2_18_tsni = function filter_inst_16_17_14_1_2_18_tsni(f1, ls) {
  return runtime.safeCall(ls(f1))
};
listEq_inst_16_17_14_1_5_6_19_tsni = function listEq_inst_16_17_14_1_5_6_19_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listcomp$ = function listcomp$(n, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = sim_inst_0_1_tsni(n, h);
    tmp1 = listcomp$(n, t);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
listcomp = function listcomp(n) {
  return (ls) => {
    return listcomp$_inst_7_8_tsni(n, ls)
  }
};
lambda$1 = function lambda$(bestk, x) {
  return x < bestk
};
lambda2 = (undefined, function (bestk) {
  return (x) => {
    return lambda$1(bestk, x)
  }
});
proc$ = function proc$(k, rs) {
  let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.nub_lz(rs);
  tmp1 = NofibPrelude.take_lz(100, tmp);
  xs = tmp1;
  best = 100;
  tmp2 = NofibPrelude.take(k, xs);
  tmp3 = NofibPrelude.maximum(tmp2);
  bestk = tmp3;
  tmp4 = NofibPrelude.leave(k, xs);
  lambda$this = runtime.safeCall(lambda2(bestk));
  tmp5 = NofibPrelude.leaveWhile(lambda$this, tmp4);
  afterk = tmp5;
  _deforest_Cons_head = best;
  _deforest_Cons_tail = (ys) => {
    if (ys instanceof NofibPrelude.Nil.class) {
      return true
    } else {
      return false
    }
  };
  tmp6 = (ys) => {
    let param0, param1, hx, tx, param01, param11, hy, ty, scrut;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    hx = param0;
    tx = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      hy = param01;
      ty = param11;
      scrut = hx == hy;
      if (scrut === true) {
        return listEq_inst_9_19_tsni(tx, ty)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  tmp7 = NofibPrelude.take(1, afterk);
  return listEq_inst_9_19_tsni(tmp6, tmp7)
};
proc = function proc(k) {
  return (rs) => {
    return proc$_inst_10_6_tsni(k, rs)
  }
};
lscomp$ = function lscomp$(m, proc1, ls) {
  let param0, param1, seed, t, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    seed = param0;
    t = param1;
    tmp = secretary1.infRand(m, seed);
    tmp1 = runtime.safeCall(proc1(tmp));
    tmp2 = lscomp$(m, proc1, t);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(m, proc1) {
  return (ls) => {
    return lscomp$(m, proc1, ls)
  }
};
lambda1 = (undefined, function (x) {
  return x
});
lambda$ = function lambda$(m, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.intMod(x, m);
  tmp1 = tmp + 1;
  tmp2 = 97 * x;
  tmp3 = tmp2 + 11;
  tmp4 = NofibPrelude.power(2, 7);
  tmp5 = NofibPrelude.intMod(tmp3, tmp4);
  tmp6 = f$(m, tmp5);
  return NofibPrelude.LzCons(tmp1, tmp6)
};
lambda = (undefined, function (m, x) {
  return () => {
    return lambda$(m, x)
  }
});
f$ = function f$(m, x) {
  let tmp;
  tmp = runtime.safeCall(lambda(m, x));
  return NofibPrelude.lazy(tmp)
};
f = function f(m) {
  return (x) => {
    return f$(m, x)
  }
};
globalThis.Object.freeze(class secretary {
  static {
    secretary1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static infRand(m, s) {
    return f$(m, s)
  } 
  static simulate(n, m, proc1) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = enumFromTo_inst_11_3_tsni(1, n);
    tmp1 = lscomp$_inst_11_4_tsni(m, proc1, tmp);
    tmp2 = filter_inst_11_18_tsni(lambda1, tmp1);
    tmp3 = NofibPrelude.listLen(tmp2);
    return tmp3 / n
  } 
  static sim(n, k) {
    let proc$this;
    proc$this = runtime.safeCall(proc_inst_12_5_tsni(k));
    return simulate_inst_12_2_tsni(n, 100, proc$this)
  } 
  static testSecretary_nofib(n) {
    let tmp;
    tmp = enumFromTo_inst_13_15_tsni(35, 39);
    return listcomp$_inst_13_14_tsni(n, tmp)
  } 
  static main() {
    let tmp;
    tmp = testSecretary_nofib_inst_16_17_tsni(50);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "secretary"]; 
});
let secretary = secretary1; export default secretary;
