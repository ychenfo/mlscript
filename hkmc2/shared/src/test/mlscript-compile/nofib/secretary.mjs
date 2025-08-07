import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let secretary1, enumFromTo_inst_0_1_tsni, simulate_inst_2_3_tsni, enumFromTo_inst_2_3_1_tsni, sim_inst_4_5_tsni, simulate_inst_4_5_3_tsni, enumFromTo_inst_4_5_3_1_tsni, enumFromTo_inst_4_6_tsni, testSecretary_nofib_inst_7_8_tsni, sim_inst_7_8_5_tsni, simulate_inst_7_8_5_3_tsni, enumFromTo_inst_7_8_5_3_1_tsni, enumFromTo_inst_7_8_6_tsni, filter_inst_0_9_tsni, listEq_inst_2_10_tsni, filter_inst_2_3_9_tsni, filter_inst_4_5_3_9_tsni, listEq_inst_4_5_10_tsni, listEq_inst_7_8_5_10_tsni, filter_inst_7_8_5_3_9_tsni;
enumFromTo_inst_0_1_tsni = function enumFromTo_inst_0_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp, m, proc) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary.infRand(m, seed);
      tmp3 = runtime.safeCall(proc(tmp2));
      tmp4 = lscomp(t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_0_9_tsni(f, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_0_9_tsni(f, t1)
        }
      }
    }
  } else {
    return (lscomp, m, proc) => {
      return (f) => {
        return NofibPrelude.Nil
      }
    }
  }
};
simulate_inst_2_3_tsni = function simulate_inst_2_3_tsni(n, m, proc) {
  let lscomp, tmp, tmp1, tmp2, tmp3, lambda;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, m, proc))
  };
  tmp = enumFromTo_inst_2_3_1_tsni(1, n);
  tmp1 = lscomp(tmp);
  lambda = (undefined, function (x) {
    return x
  });
  tmp2 = filter_inst_2_3_9_tsni(lambda, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
enumFromTo_inst_2_3_1_tsni = function enumFromTo_inst_2_3_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_2_3_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp, m, proc) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary.infRand(m, seed);
      tmp3 = runtime.safeCall(proc(tmp2));
      tmp4 = lscomp(t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_2_3_9_tsni(f, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_2_3_9_tsni(f, t1)
        }
      }
    }
  } else {
    return (lscomp, m, proc) => {
      return (f) => {
        return NofibPrelude.Nil
      }
    }
  }
};
sim_inst_4_5_tsni = function sim_inst_4_5_tsni(n, k) {
  let proc;
  proc = function proc(rs) {
    let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda, _deforest_Cons_head, _deforest_Cons_tail;
    tmp = NofibPrelude.nub_lz(rs);
    tmp1 = NofibPrelude.take_lz(100, tmp);
    xs = tmp1;
    best = 100;
    tmp2 = NofibPrelude.take(k, xs);
    tmp3 = NofibPrelude.maximum(tmp2);
    bestk = tmp3;
    tmp4 = NofibPrelude.drop(k, xs);
    lambda = (undefined, function (x) {
      return x < bestk
    });
    tmp5 = NofibPrelude.dropWhile(lambda, tmp4);
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
          return listEq_inst_4_5_10_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    };
    tmp7 = NofibPrelude.take(1, afterk);
    return listEq_inst_4_5_10_tsni(tmp6, tmp7)
  };
  return simulate_inst_4_5_3_tsni(n, 100, proc)
};
simulate_inst_4_5_3_tsni = function simulate_inst_4_5_3_tsni(n, m, proc) {
  let lscomp, tmp, tmp1, tmp2, tmp3, lambda;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, m, proc))
  };
  tmp = enumFromTo_inst_4_5_3_1_tsni(1, n);
  tmp1 = lscomp(tmp);
  lambda = (undefined, function (x) {
    return x
  });
  tmp2 = filter_inst_4_5_3_9_tsni(lambda, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
enumFromTo_inst_4_5_3_1_tsni = function enumFromTo_inst_4_5_3_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_4_5_3_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp, m, proc) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary.infRand(m, seed);
      tmp3 = runtime.safeCall(proc(tmp2));
      tmp4 = lscomp(t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_4_5_3_9_tsni(f, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_4_5_3_9_tsni(f, t1)
        }
      }
    }
  } else {
    return (lscomp, m, proc) => {
      return (f) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_4_6_tsni = function enumFromTo_inst_4_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_4_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (listcomp, n) => {
      let param0, param1, h, t, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = sim_inst_4_5_tsni(n, h);
      tmp3 = listcomp(t);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (listcomp, n) => {
      return NofibPrelude.Nil
    }
  }
};
testSecretary_nofib_inst_7_8_tsni = function testSecretary_nofib_inst_7_8_tsni(n) {
  let listcomp, tmp;
  listcomp = function listcomp(ls) {
    return runtime.safeCall(ls(listcomp, n))
  };
  tmp = enumFromTo_inst_7_8_6_tsni(35, 39);
  return listcomp(tmp)
};
sim_inst_7_8_5_tsni = function sim_inst_7_8_5_tsni(n, k) {
  let proc;
  proc = function proc(rs) {
    let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda, _deforest_Cons_head, _deforest_Cons_tail;
    tmp = NofibPrelude.nub_lz(rs);
    tmp1 = NofibPrelude.take_lz(100, tmp);
    xs = tmp1;
    best = 100;
    tmp2 = NofibPrelude.take(k, xs);
    tmp3 = NofibPrelude.maximum(tmp2);
    bestk = tmp3;
    tmp4 = NofibPrelude.drop(k, xs);
    lambda = (undefined, function (x) {
      return x < bestk
    });
    tmp5 = NofibPrelude.dropWhile(lambda, tmp4);
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
          return listEq_inst_7_8_5_10_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    };
    tmp7 = NofibPrelude.take(1, afterk);
    return listEq_inst_7_8_5_10_tsni(tmp6, tmp7)
  };
  return simulate_inst_7_8_5_3_tsni(n, 100, proc)
};
simulate_inst_7_8_5_3_tsni = function simulate_inst_7_8_5_3_tsni(n, m, proc) {
  let lscomp, tmp, tmp1, tmp2, tmp3, lambda;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, m, proc))
  };
  tmp = enumFromTo_inst_7_8_5_3_1_tsni(1, n);
  tmp1 = lscomp(tmp);
  lambda = (undefined, function (x) {
    return x
  });
  tmp2 = filter_inst_7_8_5_3_9_tsni(lambda, tmp1);
  tmp3 = NofibPrelude.listLen(tmp2);
  return tmp3 / n
};
enumFromTo_inst_7_8_5_3_1_tsni = function enumFromTo_inst_7_8_5_3_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_7_8_5_3_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (lscomp, m, proc) => {
      let param0, param1, seed, t, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      seed = param0;
      t = param1;
      tmp2 = secretary.infRand(m, seed);
      tmp3 = runtime.safeCall(proc(tmp2));
      tmp4 = lscomp(t);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f) => {
        let param01, param11, h, t1, scrut1, tmp5;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t1 = param11;
        scrut1 = runtime.safeCall(f(h));
        if (scrut1 === true) {
          tmp5 = filter_inst_7_8_5_3_9_tsni(f, t1);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return filter_inst_7_8_5_3_9_tsni(f, t1)
        }
      }
    }
  } else {
    return (lscomp, m, proc) => {
      return (f) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_7_8_6_tsni = function enumFromTo_inst_7_8_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_7_8_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (listcomp, n) => {
      let param0, param1, h, t, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = sim_inst_7_8_5_tsni(n, h);
      tmp3 = listcomp(t);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (listcomp, n) => {
      return NofibPrelude.Nil
    }
  }
};
filter_inst_0_9_tsni = function filter_inst_0_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
listEq_inst_2_10_tsni = function listEq_inst_2_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_2_3_9_tsni = function filter_inst_2_3_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
filter_inst_4_5_3_9_tsni = function filter_inst_4_5_3_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
listEq_inst_4_5_10_tsni = function listEq_inst_4_5_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listEq_inst_7_8_5_10_tsni = function listEq_inst_7_8_5_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
filter_inst_7_8_5_3_9_tsni = function filter_inst_7_8_5_3_9_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
(class secretary {
  static {
    secretary1 = secretary;
  }
  static infRand(m, s) {
    let f;
    f = function f(x) {
      let tmp, lambda;
      lambda = (undefined, function () {
        let tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
        tmp1 = NofibPrelude.intMod(x, m);
        tmp2 = tmp1 + 1;
        tmp3 = 97 * x;
        tmp4 = tmp3 + 11;
        tmp5 = NofibPrelude.power(2, 7);
        tmp6 = NofibPrelude.intMod(tmp4, tmp5);
        tmp7 = f(tmp6);
        return NofibPrelude.LzCons(tmp2, tmp7)
      });
      tmp = lambda;
      return NofibPrelude.lazy(tmp)
    };
    return f(s)
  } 
  static simulate(n, m1, proc) {
    let lscomp, tmp, tmp1, tmp2, tmp3, lambda;
    lscomp = function lscomp(ls) {
      return runtime.safeCall(ls(lscomp, m1, proc))
    };
    tmp = enumFromTo_inst_0_1_tsni(1, n);
    tmp1 = lscomp(tmp);
    lambda = (undefined, function (x) {
      return x
    });
    tmp2 = filter_inst_0_9_tsni(lambda, tmp1);
    tmp3 = NofibPrelude.listLen(tmp2);
    return tmp3 / n
  } 
  static sim(n1, k) {
    let proc1;
    proc1 = function proc(rs) {
      let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda, _deforest_Cons_head, _deforest_Cons_tail;
      tmp = NofibPrelude.nub_lz(rs);
      tmp1 = NofibPrelude.take_lz(100, tmp);
      xs = tmp1;
      best = 100;
      tmp2 = NofibPrelude.take(k, xs);
      tmp3 = NofibPrelude.maximum(tmp2);
      bestk = tmp3;
      tmp4 = NofibPrelude.drop(k, xs);
      lambda = (undefined, function (x) {
        return x < bestk
      });
      tmp5 = NofibPrelude.dropWhile(lambda, tmp4);
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
            return listEq_inst_2_10_tsni(tx, ty)
          } else {
            return false
          }
        } else {
          return false
        }
      };
      tmp7 = NofibPrelude.take(1, afterk);
      return listEq_inst_2_10_tsni(tmp6, tmp7)
    };
    return simulate_inst_2_3_tsni(n1, 100, proc1)
  } 
  static testSecretary_nofib(n2) {
    let listcomp, tmp;
    listcomp = function listcomp(ls) {
      return runtime.safeCall(ls(listcomp, n2))
    };
    tmp = enumFromTo_inst_4_6_tsni(35, 39);
    return listcomp(tmp)
  } 
  static main() {
    let tmp;
    tmp = testSecretary_nofib_inst_7_8_tsni(50);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "secretary"; }
});
let secretary = secretary1; export default secretary;
