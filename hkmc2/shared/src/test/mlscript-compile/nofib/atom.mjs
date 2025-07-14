import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let atom1, testforce_inst_0_tsni, scalarMut_inst_0_1_tsni, testAtom_nofib_inst_2_tsni, show_inst_2_3_tsni, testforce_inst_2_0_tsni, scalarMut_inst_2_0_1_tsni, take_lz_inst_2_4_tsni, dotMult_inst_0_5_tsni, stringListConcat_inst_2_3_6_tsni, dotMult_inst_2_0_5_tsni, stringListConcat_inst_2_7_tsni, match_ls_arm_Nil_inst_2_tsni;
match_ls_arm_Nil_inst_2_tsni = function match_ls_arm_Nil_inst_2_tsni(lscomp) {
  return () => {
    return ""
  }
};
testforce_inst_0_tsni = function testforce_inst_0_tsni(k, ss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp1, tmp2, tmp3, tmp4;
    scrut = NofibPrelude.force(ss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      if (param0 instanceof atom.State.class) {
        param01 = param0.position;
        param11 = param0.velocity;
        pos = param01;
        vel = param11;
        atoms = param1;
        tmp1 = - 1.0;
        tmp2 = scalarMut_inst_0_1_tsni(tmp1, k);
        tmp3 = dotMult_inst_0_5_tsni(tmp2, pos);
        tmp4 = testforce_inst_0_tsni(k, atoms);
        return NofibPrelude.LzCons(tmp3, tmp4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
scalarMut_inst_0_1_tsni = function scalarMut_inst_0_1_tsni(c, fs) {
  return runtime.safeCall(fs(c))
};
testAtom_nofib_inst_2_tsni = function testAtom_nofib_inst_2_tsni(n) {
  let lscomp, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp))
  };
  _deforest_Cons_head = 1.0;
  _deforest_Cons_tail = (c) => {
    return (gs) => {
      return NofibPrelude.Nil
    }
  };
  tmp = (c) => {
    let param0, param1, f, fs, tmp7, tmp8, _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    f = param0;
    fs = param1;
    tmp7 = c * f;
    tmp8 = scalarMut_inst_2_0_1_tsni(c, fs);
    _deforest_Cons_head1 = tmp7;
    _deforest_Cons_tail1 = tmp8;
    return (gs) => {
      let param01, param11, f1, fs1, param02, param12, g, gs1, tmp9, tmp10;
      param01 = _deforest_Cons_head1;
      param11 = _deforest_Cons_tail1;
      f1 = param01;
      fs1 = param11;
      if (gs instanceof NofibPrelude.Cons.class) {
        param02 = gs.head;
        param12 = gs.tail;
        g = param02;
        gs1 = param12;
        tmp9 = f1 * g;
        tmp10 = dotMult_inst_2_0_5_tsni(fs1, gs1);
        return NofibPrelude.Cons(tmp9, tmp10)
      } else {
        return NofibPrelude.Nil
      }
    }
  };
  tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
  tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
  tmp3 = atom.State(tmp1, tmp2);
  tmp4 = atom.runExperiment(testforce_inst_2_0_tsni, 0.02, tmp, tmp3);
  tmp5 = take_lz_inst_2_4_tsni(n, tmp4);
  tmp6 = lscomp(tmp5);
  return stringListConcat_inst_2_7_tsni(tmp6)
};
show_inst_2_3_tsni = function show_inst_2_3_tsni(s) {
  let lscomp, param0, param1, pos, vel, tmp;
  lscomp = function lscomp(ls) {
    let param01, param11, component, t, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
    if (ls instanceof NofibPrelude.Nil.class) {
      return () => {
        return ""
      }
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param01 = ls.head;
      param11 = ls.tail;
      component = param01;
      t = param11;
      tmp1 = NofibPrelude.stringOfFloat(component);
      tmp2 = NofibPrelude.stringConcat(tmp1, "\t");
      tmp3 = lscomp(t);
      _deforest_Cons_head = tmp2;
      _deforest_Cons_tail = tmp3;
      return () => {
        let param02, param12, h, t1, tmp4;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        h = param02;
        t1 = param12;
        tmp4 = stringListConcat_inst_2_3_6_tsni(t1);
        return NofibPrelude.stringConcat(h, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  if (s instanceof atom.State.class) {
    param0 = s.position;
    param1 = s.velocity;
    pos = param0;
    vel = param1;
    tmp = lscomp(pos);
    return stringListConcat_inst_2_3_6_tsni(tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
testforce_inst_2_0_tsni = function testforce_inst_2_0_tsni(k, ss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp1, tmp2, tmp3, tmp4;
    scrut = NofibPrelude.force(ss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      if (param0 instanceof atom.State.class) {
        param01 = param0.position;
        param11 = param0.velocity;
        pos = param01;
        vel = param11;
        atoms = param1;
        tmp1 = - 1.0;
        tmp2 = scalarMut_inst_2_0_1_tsni(tmp1, k);
        tmp3 = dotMult_inst_2_0_5_tsni(tmp2, pos);
        tmp4 = testforce_inst_2_0_tsni(k, atoms);
        return NofibPrelude.LzCons(tmp3, tmp4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
scalarMut_inst_2_0_1_tsni = function scalarMut_inst_2_0_1_tsni(c, fs) {
  return runtime.safeCall(fs(c))
};
take_lz_inst_2_4_tsni = function take_lz_inst_2_4_tsni(n, ls) {
  let scrut, scrut1, param0, param1, h, t, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    if (scrut1 instanceof NofibPrelude.LzNil.class) {
      return (lscomp) => {
        return match_ls_arm_Nil_inst_2_tsni(lscomp)
      }
    } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param0 = scrut1.head;
      param1 = scrut1.tail;
      h = param0;
      t = param1;
      tmp = n - 1;
      tmp1 = take_lz_inst_2_4_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (lscomp) => {
        let param01, param11, state, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        state = param01;
        t1 = param11;
        tmp2 = show_inst_2_3_tsni(state);
        tmp3 = NofibPrelude.stringConcat(tmp2, "\n");
        tmp4 = lscomp(t1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return () => {
          let param02, param12, h1, t2, tmp5;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t2 = param12;
          tmp5 = stringListConcat_inst_2_7_tsni(t2);
          return NofibPrelude.stringConcat(h1, tmp5)
        }
      }
    } else {
      return (lscomp) => {
        return match_ls_arm_Nil_inst_2_tsni(lscomp)
      }
    }
  } else {
    return (lscomp) => {
      return match_ls_arm_Nil_inst_2_tsni(lscomp)
    }
  }
};
dotMult_inst_0_5_tsni = function dotMult_inst_0_5_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
stringListConcat_inst_2_3_6_tsni = function stringListConcat_inst_2_3_6_tsni(ls) {
  return runtime.safeCall(ls())
};
dotMult_inst_2_0_5_tsni = function dotMult_inst_2_0_5_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
stringListConcat_inst_2_7_tsni = function stringListConcat_inst_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
(class atom {
  static {
    atom1 = atom;
    this.State = function State(position1, velocity1) {
      return new State.class(position1, velocity1);
    };
    this.State.class = class State {
      constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
      }
      toString() { return "State(" + runtime.render(this.position) + ", " + runtime.render(this.velocity) + ")"; }
    };
  }
  static dotPlus(fs, gs) {
    let param0, param1, f, fs1, param01, param11, g, gs1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return gs
    } else {
      if (gs instanceof NofibPrelude.Nil.class) {
        return fs
      } else {
        if (fs instanceof NofibPrelude.Cons.class) {
          param0 = fs.head;
          param1 = fs.tail;
          f = param0;
          fs1 = param1;
          if (gs instanceof NofibPrelude.Cons.class) {
            param01 = gs.head;
            param11 = gs.tail;
            g = param01;
            gs1 = param11;
            tmp = f + g;
            tmp1 = atom.dotPlus(fs1, gs1);
            return NofibPrelude.Cons(tmp, tmp1)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static dotMult(fs1, gs1) {
    let param0, param1, f, fs2, param01, param11, g, gs2, tmp, tmp1;
    if (fs1 instanceof NofibPrelude.Cons.class) {
      param0 = fs1.head;
      param1 = fs1.tail;
      f = param0;
      fs2 = param1;
      if (gs1 instanceof NofibPrelude.Cons.class) {
        param01 = gs1.head;
        param11 = gs1.tail;
        g = param01;
        gs2 = param11;
        tmp = f * g;
        tmp1 = atom.dotMult(fs2, gs2);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static scalarMut(c, fs2) {
    let param0, param1, f, fs3, tmp, tmp1;
    if (fs2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fs2 instanceof NofibPrelude.Cons.class) {
      param0 = fs2.head;
      param1 = fs2.tail;
      f = param0;
      fs3 = param1;
      tmp = c * f;
      tmp1 = atom.scalarMut(c, fs3);
      return NofibPrelude.Cons(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static testforce(k, ss) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp1, tmp2, tmp3, tmp4;
      scrut = NofibPrelude.force(ss);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        if (param0 instanceof atom.State.class) {
          param01 = param0.position;
          param11 = param0.velocity;
          pos = param01;
          vel = param11;
          atoms = param1;
          tmp1 = - 1.0;
          tmp2 = atom.scalarMut(tmp1, k);
          tmp3 = atom.dotMult(tmp2, pos);
          tmp4 = atom.testforce(k, atoms);
          return NofibPrelude.LzCons(tmp3, tmp4)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static show(s) {
    let lscomp, param0, param1, pos, vel, tmp;
    lscomp = function lscomp(ls) {
      let param01, param11, component, t, tmp1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        component = param01;
        t = param11;
        tmp1 = NofibPrelude.stringOfFloat(component);
        tmp2 = NofibPrelude.stringConcat(tmp1, "\t");
        tmp3 = lscomp(t);
        return NofibPrelude.Cons(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (s instanceof atom.State.class) {
      param0 = s.position;
      param1 = s.velocity;
      pos = param0;
      vel = param1;
      tmp = lscomp(pos);
      return NofibPrelude.stringListConcat(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static propagate(dt, aforce, state) {
    let param0, param1, pos, vel, tmp, tmp1, tmp2, tmp3;
    if (state instanceof atom.State.class) {
      param0 = state.position;
      param1 = state.velocity;
      pos = param0;
      vel = param1;
      tmp = atom.scalarMut(dt, vel);
      tmp1 = atom.dotPlus(pos, tmp);
      tmp2 = atom.scalarMut(dt, aforce);
      tmp3 = atom.dotPlus(vel, tmp2);
      return atom.State(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static runExperiment(law, dt1, param, init) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let stream, tmp1, tmp2, tmp3, lambda1;
      tmp1 = atom.runExperiment(law, dt1, param, init);
      stream = tmp1;
      tmp2 = runtime.safeCall(law(param, stream));
      lambda1 = (undefined, function (x, y) {
        return atom.propagate(dt1, x, y)
      });
      tmp3 = NofibPrelude.zipWith_lz_lz(lambda1, tmp2, stream);
      return NofibPrelude.LzCons(init, tmp3)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static testAtom_nofib(n) {
    let lscomp, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail;
    lscomp = function lscomp(ls) {
      let param0, param1, state1, t, tmp7, tmp8, tmp9;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        state1 = param0;
        t = param1;
        tmp7 = atom.show(state1);
        tmp8 = NofibPrelude.stringConcat(tmp7, "\n");
        tmp9 = lscomp(t);
        return NofibPrelude.Cons(tmp8, tmp9)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    _deforest_Cons_head = 1.0;
    _deforest_Cons_tail = (c1) => {
      return (gs2) => {
        return NofibPrelude.Nil
      }
    };
    tmp = (c1) => {
      let param0, param1, f, fs3, tmp7, tmp8, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      f = param0;
      fs3 = param1;
      tmp7 = c1 * f;
      tmp8 = scalarMut_inst_0_1_tsni(c1, fs3);
      _deforest_Cons_head1 = tmp7;
      _deforest_Cons_tail1 = tmp8;
      return (gs2) => {
        let param01, param11, f1, fs4, param02, param12, g, gs3, tmp9, tmp10;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        f1 = param01;
        fs4 = param11;
        if (gs2 instanceof NofibPrelude.Cons.class) {
          param02 = gs2.head;
          param12 = gs2.tail;
          g = param02;
          gs3 = param12;
          tmp9 = f1 * g;
          tmp10 = dotMult_inst_0_5_tsni(fs4, gs3);
          return NofibPrelude.Cons(tmp9, tmp10)
        } else {
          return NofibPrelude.Nil
        }
      }
    };
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp3 = atom.State(tmp1, tmp2);
    tmp4 = atom.runExperiment(testforce_inst_0_tsni, 0.02, tmp, tmp3);
    tmp5 = NofibPrelude.take_lz(n, tmp4);
    tmp6 = lscomp(tmp5);
    return NofibPrelude.stringListConcat(tmp6)
  } 
  static main() {
    return testAtom_nofib_inst_2_tsni(20)
  }
  static toString() { return "atom"; }
});
let atom = atom1; export default atom;
