const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let lscomp, lscomp1, atom1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, show_inst_0_1_tsni, lscomp_inst_0_1_2_tsni, testforce_inst_3_tsni, lambda_inst_3_tsni, scalarMut_inst_3_4_tsni, testforce_inst_5_tsni, lambda$_inst_5_tsni, scalarMut_inst_5_4_tsni, lambda_inst_6_tsni, lambda$_inst_6_tsni, scalarMut_inst_6_4_tsni, lscomp_inst_7_2_tsni, testforce_inst_8_9_tsni, lambda_inst_8_9_tsni, lambda$_inst_8_9_tsni, scalarMut_inst_8_9_4_tsni, lscomp_inst_8_10_tsni, show_inst_8_10_1_tsni, lscomp_inst_8_10_1_2_tsni, take_lz_inst_8_11_tsni, testAtom_nofib_inst_12_13_tsni, lscomp_inst_12_13_10_tsni, show_inst_12_13_10_1_tsni, lscomp_inst_12_13_10_1_2_tsni, take_lz_inst_12_13_11_tsni, testforce_inst_12_13_9_tsni, lambda_inst_12_13_9_tsni, lambda$_inst_12_13_9_tsni, scalarMut_inst_12_13_9_4_tsni, stringListConcat_inst_0_1_14_tsni, dotMult_inst_3_15_tsni, dotMult_inst_5_15_tsni, dotMult_inst_6_15_tsni, stringListConcat_inst_7_14_tsni, dotMult_inst_8_9_15_tsni, stringListConcat_inst_8_10_1_14_tsni, stringListConcat_inst_8_16_tsni, stringListConcat_inst_12_13_10_1_14_tsni, stringListConcat_inst_12_13_16_tsni, dotMult_inst_12_13_9_15_tsni, match_ls_arm_Nil_inst_8_10_tsni, match_ls_arm_Nil_inst_12_13_10_tsni;
match_ls_arm_Nil_inst_8_10_tsni = (undefined, function () {
  return () => {
    return ""
  }
});
match_ls_arm_Nil_inst_12_13_10_tsni = (undefined, function () {
  return () => {
    return ""
  }
});
show_inst_0_1_tsni = function show_inst_0_1_tsni(s) {
  let param0, param1, pos, vel, tmp;
  if (s instanceof atom.State.class) {
    param0 = s.position;
    param1 = s.velocity;
    pos = param0;
    vel = param1;
    tmp = lscomp_inst_0_1_2_tsni(pos);
    return stringListConcat_inst_0_1_14_tsni(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp_inst_0_1_2_tsni = function lscomp_inst_0_1_2_tsni(ls) {
  let param0, param1, component, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return ""
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    component = param0;
    t = param1;
    tmp = NofibPrelude.stringOfFloat(component);
    tmp1 = NofibPrelude.stringConcat(tmp, "\t");
    tmp2 = lscomp_inst_0_1_2_tsni(t);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
    return () => {
      let param01, param11, h, t1, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t1 = param11;
      tmp3 = stringListConcat_inst_0_1_14_tsni(t1);
      return NofibPrelude.stringConcat(h, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testforce_inst_3_tsni = function testforce_inst_3_tsni(k, ss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_tsni(k, ss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_3_tsni = (undefined, function (k, ss) {
  return () => {
    return lambda$(k, ss)
  }
});
scalarMut_inst_3_4_tsni = function scalarMut_inst_3_4_tsni(c, fs) {
  let param0, param1, f, fs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (fs instanceof NofibPrelude.Nil.class) {
    return (gs) => {
      return NofibPrelude.Nil
    }
  } else if (fs instanceof NofibPrelude.Cons.class) {
    param0 = fs.head;
    param1 = fs.tail;
    f = param0;
    fs1 = param1;
    tmp = c * f;
    tmp1 = scalarMut_inst_3_4_tsni(c, fs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (gs) => {
      let param01, param11, f1, fs2, param02, param12, g, gs1, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      f1 = param01;
      fs2 = param11;
      if (gs instanceof NofibPrelude.Cons.class) {
        param02 = gs.head;
        param12 = gs.tail;
        g = param02;
        gs1 = param12;
        tmp2 = f1 * g;
        tmp3 = dotMult_inst_3_15_tsni(fs2, gs1);
        return NofibPrelude.Cons(tmp2, tmp3)
      } else {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testforce_inst_5_tsni = function testforce_inst_5_tsni(k, ss) {
  let tmp;
  tmp = runtime.safeCall(lambda(k, ss));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_5_tsni = function lambda$_inst_5_tsni(k, ss) {
  let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.force(ss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (param0 instanceof atom1.State.class) {
      param01 = param0.position;
      param11 = param0.velocity;
      pos = param01;
      vel = param11;
      atoms = param1;
      tmp = - 1.0;
      tmp1 = scalarMut_inst_5_4_tsni(tmp, k);
      tmp2 = dotMult_inst_5_15_tsni(tmp1, pos);
      tmp3 = testforce_inst_5_tsni(k, atoms);
      return NofibPrelude.LzCons(tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
scalarMut_inst_5_4_tsni = function scalarMut_inst_5_4_tsni(c, fs) {
  let param0, param1, f, fs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (fs instanceof NofibPrelude.Nil.class) {
    return (gs) => {
      return NofibPrelude.Nil
    }
  } else if (fs instanceof NofibPrelude.Cons.class) {
    param0 = fs.head;
    param1 = fs.tail;
    f = param0;
    fs1 = param1;
    tmp = c * f;
    tmp1 = scalarMut_inst_5_4_tsni(c, fs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (gs) => {
      let param01, param11, f1, fs2, param02, param12, g, gs1, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      f1 = param01;
      fs2 = param11;
      if (gs instanceof NofibPrelude.Cons.class) {
        param02 = gs.head;
        param12 = gs.tail;
        g = param02;
        gs1 = param12;
        tmp2 = f1 * g;
        tmp3 = dotMult_inst_5_15_tsni(fs2, gs1);
        return NofibPrelude.Cons(tmp2, tmp3)
      } else {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_6_tsni = (undefined, function (k, ss) {
  return () => {
    return lambda$_inst_6_tsni(k, ss)
  }
});
lambda$_inst_6_tsni = function lambda$_inst_6_tsni(k, ss) {
  let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.force(ss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (param0 instanceof atom1.State.class) {
      param01 = param0.position;
      param11 = param0.velocity;
      pos = param01;
      vel = param11;
      atoms = param1;
      tmp = - 1.0;
      tmp1 = scalarMut_inst_6_4_tsni(tmp, k);
      tmp2 = dotMult_inst_6_15_tsni(tmp1, pos);
      tmp3 = atom1.testforce(k, atoms);
      return NofibPrelude.LzCons(tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
scalarMut_inst_6_4_tsni = function scalarMut_inst_6_4_tsni(c, fs) {
  let param0, param1, f, fs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (fs instanceof NofibPrelude.Nil.class) {
    return (gs) => {
      return NofibPrelude.Nil
    }
  } else if (fs instanceof NofibPrelude.Cons.class) {
    param0 = fs.head;
    param1 = fs.tail;
    f = param0;
    fs1 = param1;
    tmp = c * f;
    tmp1 = scalarMut_inst_6_4_tsni(c, fs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (gs) => {
      let param01, param11, f1, fs2, param02, param12, g, gs1, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      f1 = param01;
      fs2 = param11;
      if (gs instanceof NofibPrelude.Cons.class) {
        param02 = gs.head;
        param12 = gs.tail;
        g = param02;
        gs1 = param12;
        tmp2 = f1 * g;
        tmp3 = dotMult_inst_6_15_tsni(fs2, gs1);
        return NofibPrelude.Cons(tmp2, tmp3)
      } else {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp_inst_7_2_tsni = function lscomp_inst_7_2_tsni(ls) {
  let param0, param1, component, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return ""
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    component = param0;
    t = param1;
    tmp = NofibPrelude.stringOfFloat(component);
    tmp1 = NofibPrelude.stringConcat(tmp, "\t");
    tmp2 = lscomp_inst_7_2_tsni(t);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
    return () => {
      let param01, param11, h, t1, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t1 = param11;
      tmp3 = stringListConcat_inst_7_14_tsni(t1);
      return NofibPrelude.stringConcat(h, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testforce_inst_8_9_tsni = function testforce_inst_8_9_tsni(k, ss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_9_tsni(k, ss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_9_tsni = (undefined, function (k, ss) {
  return () => {
    return lambda$_inst_8_9_tsni(k, ss)
  }
});
lambda$_inst_8_9_tsni = function lambda$_inst_8_9_tsni(k, ss) {
  let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.force(ss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (param0 instanceof atom1.State.class) {
      param01 = param0.position;
      param11 = param0.velocity;
      pos = param01;
      vel = param11;
      atoms = param1;
      tmp = - 1.0;
      tmp1 = scalarMut_inst_8_9_4_tsni(tmp, k);
      tmp2 = dotMult_inst_8_9_15_tsni(tmp1, pos);
      tmp3 = testforce_inst_8_9_tsni(k, atoms);
      return NofibPrelude.LzCons(tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
scalarMut_inst_8_9_4_tsni = function scalarMut_inst_8_9_4_tsni(c, fs) {
  return runtime.safeCall(fs(c))
};
lscomp_inst_8_10_tsni = function lscomp_inst_8_10_tsni(ls) {
  return runtime.safeCall(ls())
};
show_inst_8_10_1_tsni = function show_inst_8_10_1_tsni(s) {
  let param0, param1, pos, vel, tmp;
  if (s instanceof atom.State.class) {
    param0 = s.position;
    param1 = s.velocity;
    pos = param0;
    vel = param1;
    tmp = lscomp_inst_8_10_1_2_tsni(pos);
    return stringListConcat_inst_8_10_1_14_tsni(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp_inst_8_10_1_2_tsni = function lscomp_inst_8_10_1_2_tsni(ls) {
  let param0, param1, component, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return ""
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    component = param0;
    t = param1;
    tmp = NofibPrelude.stringOfFloat(component);
    tmp1 = NofibPrelude.stringConcat(tmp, "\t");
    tmp2 = lscomp_inst_8_10_1_2_tsni(t);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
    return () => {
      let param01, param11, h, t1, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t1 = param11;
      tmp3 = stringListConcat_inst_8_10_1_14_tsni(t1);
      return NofibPrelude.stringConcat(h, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_lz_inst_8_11_tsni = function take_lz_inst_8_11_tsni(n, ls) {
  let scrut, scrut1, param0, param1, h, t, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    if (scrut1 instanceof NofibPrelude.LzNil.class) {
      return () => {
        return match_ls_arm_Nil_inst_8_10_tsni()
      }
    } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param0 = scrut1.head;
      param1 = scrut1.tail;
      h = param0;
      t = param1;
      tmp = n - 1;
      tmp1 = take_lz_inst_8_11_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return () => {
        let param01, param11, state, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        state = param01;
        t1 = param11;
        tmp2 = show_inst_8_10_1_tsni(state);
        tmp3 = NofibPrelude.stringConcat(tmp2, "\n");
        tmp4 = lscomp_inst_8_10_tsni(t1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return () => {
          let param02, param12, h1, t2, tmp5;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t2 = param12;
          tmp5 = stringListConcat_inst_8_16_tsni(t2);
          return NofibPrelude.stringConcat(h1, tmp5)
        }
      }
    } else {
      return () => {
        return match_ls_arm_Nil_inst_8_10_tsni()
      }
    }
  } else {
    return () => {
      return match_ls_arm_Nil_inst_8_10_tsni()
    }
  }
};
testAtom_nofib_inst_12_13_tsni = function testAtom_nofib_inst_12_13_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail;
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
    tmp8 = scalarMut_inst_12_13_9_4_tsni(c, fs);
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
        tmp10 = dotMult_inst_12_13_9_15_tsni(fs1, gs1);
        return NofibPrelude.Cons(tmp9, tmp10)
      } else {
        return NofibPrelude.Nil
      }
    }
  };
  tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
  tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
  tmp3 = atom.State(tmp1, tmp2);
  tmp4 = atom.runExperiment(testforce_inst_12_13_9_tsni, 0.02, tmp, tmp3);
  tmp5 = take_lz_inst_12_13_11_tsni(n, tmp4);
  tmp6 = lscomp_inst_12_13_10_tsni(tmp5);
  return stringListConcat_inst_12_13_16_tsni(tmp6)
};
lscomp_inst_12_13_10_tsni = function lscomp_inst_12_13_10_tsni(ls) {
  return runtime.safeCall(ls())
};
show_inst_12_13_10_1_tsni = function show_inst_12_13_10_1_tsni(s) {
  let param0, param1, pos, vel, tmp;
  if (s instanceof atom.State.class) {
    param0 = s.position;
    param1 = s.velocity;
    pos = param0;
    vel = param1;
    tmp = lscomp_inst_12_13_10_1_2_tsni(pos);
    return stringListConcat_inst_12_13_10_1_14_tsni(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp_inst_12_13_10_1_2_tsni = function lscomp_inst_12_13_10_1_2_tsni(ls) {
  let param0, param1, component, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return ""
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    component = param0;
    t = param1;
    tmp = NofibPrelude.stringOfFloat(component);
    tmp1 = NofibPrelude.stringConcat(tmp, "\t");
    tmp2 = lscomp_inst_12_13_10_1_2_tsni(t);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
    return () => {
      let param01, param11, h, t1, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t1 = param11;
      tmp3 = stringListConcat_inst_12_13_10_1_14_tsni(t1);
      return NofibPrelude.stringConcat(h, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_lz_inst_12_13_11_tsni = function take_lz_inst_12_13_11_tsni(n, ls) {
  let scrut, scrut1, param0, param1, h, t, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    if (scrut1 instanceof NofibPrelude.LzNil.class) {
      return () => {
        return match_ls_arm_Nil_inst_12_13_10_tsni()
      }
    } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param0 = scrut1.head;
      param1 = scrut1.tail;
      h = param0;
      t = param1;
      tmp = n - 1;
      tmp1 = take_lz_inst_12_13_11_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return () => {
        let param01, param11, state, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        state = param01;
        t1 = param11;
        tmp2 = show_inst_12_13_10_1_tsni(state);
        tmp3 = NofibPrelude.stringConcat(tmp2, "\n");
        tmp4 = lscomp_inst_12_13_10_tsni(t1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return () => {
          let param02, param12, h1, t2, tmp5;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t2 = param12;
          tmp5 = stringListConcat_inst_12_13_16_tsni(t2);
          return NofibPrelude.stringConcat(h1, tmp5)
        }
      }
    } else {
      return () => {
        return match_ls_arm_Nil_inst_12_13_10_tsni()
      }
    }
  } else {
    return () => {
      return match_ls_arm_Nil_inst_12_13_10_tsni()
    }
  }
};
testforce_inst_12_13_9_tsni = function testforce_inst_12_13_9_tsni(k, ss) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_12_13_9_tsni(k, ss));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_12_13_9_tsni = (undefined, function (k, ss) {
  return () => {
    return lambda$_inst_12_13_9_tsni(k, ss)
  }
});
lambda$_inst_12_13_9_tsni = function lambda$_inst_12_13_9_tsni(k, ss) {
  let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.force(ss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (param0 instanceof atom1.State.class) {
      param01 = param0.position;
      param11 = param0.velocity;
      pos = param01;
      vel = param11;
      atoms = param1;
      tmp = - 1.0;
      tmp1 = scalarMut_inst_12_13_9_4_tsni(tmp, k);
      tmp2 = dotMult_inst_12_13_9_15_tsni(tmp1, pos);
      tmp3 = testforce_inst_12_13_9_tsni(k, atoms);
      return NofibPrelude.LzCons(tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
scalarMut_inst_12_13_9_4_tsni = function scalarMut_inst_12_13_9_4_tsni(c, fs) {
  return runtime.safeCall(fs(c))
};
stringListConcat_inst_0_1_14_tsni = function stringListConcat_inst_0_1_14_tsni(ls) {
  return runtime.safeCall(ls())
};
dotMult_inst_3_15_tsni = function dotMult_inst_3_15_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
dotMult_inst_5_15_tsni = function dotMult_inst_5_15_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
dotMult_inst_6_15_tsni = function dotMult_inst_6_15_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
stringListConcat_inst_7_14_tsni = function stringListConcat_inst_7_14_tsni(ls) {
  return runtime.safeCall(ls())
};
dotMult_inst_8_9_15_tsni = function dotMult_inst_8_9_15_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
stringListConcat_inst_8_10_1_14_tsni = function stringListConcat_inst_8_10_1_14_tsni(ls) {
  return runtime.safeCall(ls())
};
stringListConcat_inst_8_16_tsni = function stringListConcat_inst_8_16_tsni(ls) {
  return runtime.safeCall(ls())
};
stringListConcat_inst_12_13_10_1_14_tsni = function stringListConcat_inst_12_13_10_1_14_tsni(ls) {
  return runtime.safeCall(ls())
};
stringListConcat_inst_12_13_16_tsni = function stringListConcat_inst_12_13_16_tsni(ls) {
  return runtime.safeCall(ls())
};
dotMult_inst_12_13_9_15_tsni = function dotMult_inst_12_13_9_15_tsni(fs, gs) {
  return runtime.safeCall(fs(gs))
};
lscomp1 = function lscomp(ls) {
  let param0, param1, state, t, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    state = param0;
    t = param1;
    tmp = show_inst_0_1_tsni(state);
    tmp1 = NofibPrelude.stringConcat(tmp, "\n");
    tmp2 = lscomp1(t);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$2 = function lambda$(dt, x, y) {
  return atom1.propagate(dt, x, y)
};
lambda2 = (undefined, function (dt) {
  return (x, y) => {
    return lambda$2(dt, x, y)
  }
});
lambda$1 = function lambda$(law, dt, param, init) {
  let stream, tmp, tmp1, tmp2, lambda$this;
  tmp = atom1.runExperiment(law, dt, param, init);
  stream = tmp;
  tmp1 = runtime.safeCall(law(param, stream));
  lambda$this = runtime.safeCall(lambda2(dt));
  tmp2 = NofibPrelude.zipWith_lz_lz(lambda$this, tmp1, stream);
  return NofibPrelude.LzCons(init, tmp2)
};
lambda1 = (undefined, function (law, dt, param, init) {
  return () => {
    return lambda$1(law, dt, param, init)
  }
});
lscomp = function lscomp(ls) {
  let param0, param1, component, t, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    component = param0;
    t = param1;
    tmp = NofibPrelude.stringOfFloat(component);
    tmp1 = NofibPrelude.stringConcat(tmp, "\t");
    tmp2 = lscomp(t);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$ = function lambda$(k, ss) {
  let scrut, param0, param1, param01, param11, pos, vel, atoms, tmp, tmp1, tmp2, tmp3;
  scrut = NofibPrelude.force(ss);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (param0 instanceof atom1.State.class) {
      param01 = param0.position;
      param11 = param0.velocity;
      pos = param01;
      vel = param11;
      atoms = param1;
      tmp = - 1.0;
      tmp1 = scalarMut_inst_3_4_tsni(tmp, k);
      tmp2 = dotMult_inst_3_15_tsni(tmp1, pos);
      tmp3 = testforce_inst_3_tsni(k, atoms);
      return NofibPrelude.LzCons(tmp2, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda = (undefined, function (k, ss) {
  return () => {
    return lambda$_inst_5_tsni(k, ss)
  }
});
(class atom {
  static {
    atom1 = atom;
    this.State = function State(position, velocity) {
      return globalThis.Object.freeze(new State.class(position, velocity));
    };
    Object.defineProperty(this.State, "class", {
      enumerable: true,
      value: class State {
        constructor(position, velocity) {
          this.position = position;
          this.velocity = velocity;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "State", ["position", "velocity"]]; 
      }
    });
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
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } 
  static dotMult(fs, gs) {
    let param0, param1, f, fs1, param01, param11, g, gs1, tmp, tmp1;
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
        tmp = f * g;
        tmp1 = atom.dotMult(fs1, gs1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static scalarMut(c, fs) {
    let param0, param1, f, fs1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fs instanceof NofibPrelude.Cons.class) {
      param0 = fs.head;
      param1 = fs.tail;
      f = param0;
      fs1 = param1;
      tmp = c * f;
      tmp1 = atom.scalarMut(c, fs1);
      return NofibPrelude.Cons(tmp, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static testforce(k, ss) {
    let tmp;
    tmp = runtime.safeCall(lambda_inst_6_tsni(k, ss));
    return NofibPrelude.lazy(tmp)
  } 
  static show(s) {
    let param0, param1, pos, vel, tmp;
    if (s instanceof atom.State.class) {
      param0 = s.position;
      param1 = s.velocity;
      pos = param0;
      vel = param1;
      tmp = lscomp_inst_7_2_tsni(pos);
      return stringListConcat_inst_7_14_tsni(tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static runExperiment(law, dt, param, init) {
    let tmp;
    tmp = runtime.safeCall(lambda1(law, dt, param, init));
    return NofibPrelude.lazy(tmp)
  } 
  static testAtom_nofib(n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail;
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
      tmp8 = scalarMut_inst_8_9_4_tsni(c, fs);
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
          tmp10 = dotMult_inst_8_9_15_tsni(fs1, gs1);
          return NofibPrelude.Cons(tmp9, tmp10)
        } else {
          return NofibPrelude.Nil
        }
      }
    };
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp3 = atom.State(tmp1, tmp2);
    tmp4 = atom.runExperiment(testforce_inst_8_9_tsni, 0.02, tmp, tmp3);
    tmp5 = take_lz_inst_8_11_tsni(n, tmp4);
    tmp6 = lscomp_inst_8_10_tsni(tmp5);
    return stringListConcat_inst_8_16_tsni(tmp6)
  } 
  static main() {
    return testAtom_nofib_inst_12_13_tsni(20)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "atom"]; 
});
let atom = atom1; export default atom;
