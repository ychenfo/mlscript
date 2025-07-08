import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let secretary1, testSecretary_nofib_inst_0_tsni, sim_inst_0_1_tsni, nub_lz_inst_0_1_2_tsni, nubBy_lz_inst_0_1_2_3_tsni, enumFromTo_inst_4_tsni, enumFromTo_inst_0_4_tsni, listEq_inst_0_1_5_tsni, take_lz_inst_0_1_6_tsni, match_ls_arm_Nil_inst_0_tsni, match_ls_arm_Cons_inst_0_tsni;
match_ls_arm_Nil_inst_0_tsni = function match_ls_arm_Nil_inst_0_tsni(listcomp, n) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_0_tsni = function match_ls_arm_Cons_inst_0_tsni(listcomp, n, _deforest_Cons_head_inst_0_tsni, _deforest_Cons_tail_inst_0_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_0_tsni;
  param1 = _deforest_Cons_tail_inst_0_tsni;
  h = param0;
  t = param1;
  tmp = sim_inst_0_1_tsni(n, h);
  tmp1 = listcomp(t);
  return NofibPrelude.Cons(tmp, tmp1)
};
testSecretary_nofib_inst_0_tsni = function testSecretary_nofib_inst_0_tsni(n) {
  let listcomp, tmp;
  listcomp = function listcomp(ls) {
    return runtime.safeCall(ls(listcomp, n))
  };
  tmp = enumFromTo_inst_0_4_tsni(35, 39);
  return listcomp(tmp)
};
sim_inst_0_1_tsni = function sim_inst_0_1_tsni(n, k) {
  let proc;
  proc = function proc(rs) {
    let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda, _deforest_Cons_head, _deforest_Cons_tail;
    tmp = nub_lz_inst_0_1_2_tsni(rs);
    tmp1 = take_lz_inst_0_1_6_tsni(100, tmp);
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
          return listEq_inst_0_1_5_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    };
    tmp7 = NofibPrelude.take(1, afterk);
    return listEq_inst_0_1_5_tsni(tmp6, tmp7)
  };
  return secretary.simulate(n, 100, proc)
};
nub_lz_inst_0_1_2_tsni = function nub_lz_inst_0_1_2_tsni(ls) {
  return nubBy_lz_inst_0_1_2_3_tsni(lambda, ls)
};
nubBy_lz_inst_0_1_2_3_tsni = function nubBy_lz_inst_0_1_2_3_tsni(eq, ls) {
  let tmp, _deforest_Lazy_init;
  tmp = runtime.safeCall(lambda(eq, ls));
  _deforest_Lazy_init = tmp;
  return (n) => {
    return NofibPrelude.Nil
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
    return (listcomp, n) => {
      return match_ls_arm_Cons_inst_0_tsni(listcomp, n, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    return (listcomp, n) => {
      return match_ls_arm_Nil_inst_0_tsni(listcomp, n)
    }
  }
};
enumFromTo_inst_0_4_tsni = function enumFromTo_inst_0_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_4_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (listcomp, n) => {
      return match_ls_arm_Cons_inst_0_tsni(listcomp, n, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    return (listcomp, n) => {
      return match_ls_arm_Nil_inst_0_tsni(listcomp, n)
    }
  }
};
listEq_inst_0_1_5_tsni = function listEq_inst_0_1_5_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_0_1_6_tsni = function take_lz_inst_0_1_6_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
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
      let param0, param1, seed, t, tmp4, tmp5, tmp6;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        seed = param0;
        t = param1;
        tmp4 = secretary.infRand(m1, seed);
        tmp5 = runtime.safeCall(proc(tmp4));
        tmp6 = lscomp(t);
        return NofibPrelude.Cons(tmp5, tmp6)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = NofibPrelude.enumFromTo(1, n);
    tmp1 = lscomp(tmp);
    lambda = (undefined, function (x) {
      return x
    });
    tmp2 = NofibPrelude.filter(lambda, tmp1);
    tmp3 = NofibPrelude.listLen(tmp2);
    return tmp3 / n
  } 
  static sim(n1, k) {
    let proc1;
    proc1 = function proc(rs) {
      let xs, best, bestk, afterk, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda;
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
      tmp6 = NofibPrelude.Cons(best, NofibPrelude.Nil);
      tmp7 = NofibPrelude.take(1, afterk);
      return NofibPrelude.listEq(tmp6, tmp7)
    };
    return secretary.simulate(n1, 100, proc1)
  } 
  static testSecretary_nofib(n2) {
    let listcomp, tmp;
    listcomp = function listcomp(ls) {
      let param0, param1, h, t, tmp1, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h = param0;
        t = param1;
        tmp1 = secretary.sim(n2, h);
        tmp2 = listcomp(t);
        return NofibPrelude.Cons(tmp1, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = enumFromTo_inst_4_tsni(35, 39);
    return listcomp(tmp)
  } 
  static main() {
    let tmp;
    tmp = testSecretary_nofib_inst_0_tsni(50);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "secretary"; }
});
let secretary = secretary1; export default secretary;
