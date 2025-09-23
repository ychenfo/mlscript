const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let rsa1, lambda, lambda1, lambda2, lambda3, lambda$, map_inst_0_1_tsni, lambda_inst_0_2_tsni, append_inst_0_2_3_tsni, collect_inst_4_5_tsni, take_inst_4_5_6_tsni, unlines_inst_4_7_tsni, map_inst_4_7_1_tsni, lambda_inst_4_7_2_tsni, append_inst_4_7_2_3_tsni, map_inst_4_8_tsni, encrypt_inst_9_10_tsni, unlines_inst_9_10_7_tsni, map_inst_9_10_7_1_tsni, lambda_inst_9_10_7_2_tsni, append_inst_9_10_7_2_3_tsni, map_inst_9_10_8_tsni, collect_inst_9_10_5_tsni, take_inst_9_10_5_6_tsni, concat_inst_9_10_7_11_tsni, append_inst_9_10_7_11_12_tsni, testRsa_nofib_inst_13_14_tsni, encrypt_inst_13_14_10_tsni, collect_inst_13_14_10_5_tsni, take_inst_13_14_10_5_6_tsni, unlines_inst_13_14_10_7_tsni, map_inst_13_14_10_7_1_tsni, lambda_inst_13_14_10_7_2_tsni, append_inst_13_14_10_7_2_3_tsni, map_inst_13_14_10_8_tsni, concat_inst_13_14_10_7_11_tsni, append_inst_13_14_10_7_11_12_tsni, concat_inst_0_11_tsni, append_inst_0_11_12_tsni, lambda_inst_4_15_tsni, lambda$_inst_4_15_16_tsni, code_inst_4_15_16_17_tsni, foldl_inst_4_15_16_17_18_tsni, concat_inst_4_7_11_tsni, append_inst_4_7_11_12_tsni, lambda_inst_9_10_15_tsni, lambda$_inst_9_10_15_16_tsni, code_inst_9_10_15_16_17_tsni, foldl_inst_9_10_15_16_17_18_tsni, hash_inst_9_19_tsni, foldl_inst_9_19_20_tsni, lambda_inst_13_14_10_15_tsni, lambda$_inst_13_14_10_15_16_tsni, code_inst_13_14_10_15_16_17_tsni, foldl_inst_13_14_10_15_16_17_18_tsni, hash_inst_13_14_19_tsni, foldl_inst_13_14_19_20_tsni, match_xs_arm_Cons_inst_0_11_12_tsni, match_xs_arm_Nil_inst_4_8_tsni, match_xs_arm_Nil_inst_4_15_16_17_18_tsni, match_xs_arm_Cons_inst_4_7_11_12_tsni, match_xs_arm_Cons_inst_9_10_7_11_12_tsni, match_xs_arm_Nil_inst_9_10_8_tsni, match_xs_arm_Nil_inst_9_10_15_16_17_18_tsni, match_xs_arm_Nil_inst_13_14_10_8_tsni, match_xs_arm_Nil_inst_13_14_10_15_16_17_18_tsni, match_xs_arm_Cons_inst_13_14_10_7_11_12_tsni;
match_xs_arm_Cons_inst_0_11_12_tsni = (undefined, function (ys, _deforest_Cons_head_inst_0_11_12_tsni, _deforest_Cons_tail_inst_0_11_12_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_0_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_11_12_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_4_8_tsni = (undefined, function (f) {
  return (f1) => {
    return () => {
      return NofibPrelude.Nil
    }
  }
});
match_xs_arm_Nil_inst_4_15_16_17_18_tsni = (undefined, function (f, a) {
  return a
});
match_xs_arm_Cons_inst_4_7_11_12_tsni = (undefined, function (ys, _deforest_Cons_head_inst_4_7_11_12_tsni, _deforest_Cons_tail_inst_4_7_11_12_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_4_7_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_4_7_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_4_7_11_12_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_9_10_7_11_12_tsni = (undefined, function (ys, _deforest_Cons_head_inst_9_10_7_11_12_tsni, _deforest_Cons_tail_inst_9_10_7_11_12_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_9_10_7_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_9_10_7_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_9_10_7_11_12_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f, a) => {
    let param01, param11, h, t, tmp1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    tmp1 = runtime.safeCall(f(a, h));
    return foldl_inst_9_19_20_tsni(f, tmp1, t)
  }
});
match_xs_arm_Nil_inst_9_10_8_tsni = (undefined, function (f) {
  return (f1) => {
    return () => {
      return (f2, a) => {
        return a
      }
    }
  }
});
match_xs_arm_Nil_inst_9_10_15_16_17_18_tsni = (undefined, function (f, a) {
  return a
});
match_xs_arm_Nil_inst_13_14_10_8_tsni = (undefined, function (f) {
  return (f1) => {
    return () => {
      return (f2, a) => {
        return a
      }
    }
  }
});
match_xs_arm_Nil_inst_13_14_10_15_16_17_18_tsni = (undefined, function (f, a) {
  return a
});
match_xs_arm_Cons_inst_13_14_10_7_11_12_tsni = (undefined, function (ys, _deforest_Cons_head_inst_13_14_10_7_11_12_tsni, _deforest_Cons_tail_inst_13_14_10_7_11_12_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_13_14_10_7_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_13_14_10_7_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_13_14_10_7_11_12_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f, a) => {
    let param01, param11, h, t, tmp1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    tmp1 = runtime.safeCall(f(a, h));
    return foldl_inst_13_14_19_20_tsni(f, tmp1, t)
  }
});
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
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_11_tsni(xs2);
      return append_inst_0_11_12_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_0_2_tsni = (undefined, function (l) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_0_11_12_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_0_2_3_tsni(l, tmp)
});
append_inst_0_2_3_tsni = function append_inst_0_2_3_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_2_3_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_11_12_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
collect_inst_4_5_tsni = function collect_inst_4_5_tsni(n, xs) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (f) => {
      return match_xs_arm_Nil_inst_4_8_tsni(f)
    }
  } else {
    if (xs instanceof NofibPrelude.Nil.class) {
      return (f) => {
        return match_xs_arm_Nil_inst_4_8_tsni(f)
      }
    } else {
      tmp = take_inst_4_5_6_tsni(n, xs);
      tmp1 = NofibPrelude.leave(n, xs);
      tmp2 = collect_inst_4_5_tsni(n, tmp1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp2;
      return (f) => {
        let param0, param1, x, xs1, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs1 = param1;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_4_8_tsni(f, xs1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return (f1) => {
          let _deforest_Cons_head2, _deforest_Cons_tail2;
          param0 = _deforest_Cons_head1;
          param1 = _deforest_Cons_tail1;
          x = param0;
          xs1 = param1;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_4_7_1_tsni(f1, xs1);
          _deforest_Cons_head2 = tmp3;
          _deforest_Cons_tail2 = tmp4;
          return () => {
            let param01, param11, x1, xs2, tmp5;
            param01 = _deforest_Cons_head2;
            param11 = _deforest_Cons_tail2;
            x1 = param01;
            xs2 = param11;
            tmp5 = concat_inst_4_7_11_tsni(xs2);
            return append_inst_4_7_11_12_tsni(x1, tmp5)
          }
        }
      }
    }
  }
};
take_inst_4_5_6_tsni = function take_inst_4_5_6_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f, a) => {
      return match_xs_arm_Nil_inst_4_15_16_17_18_tsni(f, a)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f, a) => {
        return match_xs_arm_Nil_inst_4_15_16_17_18_tsni(f, a)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_4_5_6_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f, a) => {
        let param01, param11, h1, t1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp2 = runtime.safeCall(f(a, h1));
        return foldl_inst_4_15_16_17_18_tsni(f, tmp2, t1)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
unlines_inst_4_7_tsni = function unlines_inst_4_7_tsni(ls) {
  let tmp;
  tmp = map_inst_4_7_1_tsni(lambda_inst_4_7_2_tsni, ls);
  return concat_inst_4_7_11_tsni(tmp)
};
map_inst_4_7_1_tsni = function map_inst_4_7_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_4_7_2_tsni = (undefined, function (l) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_4_7_11_12_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_4_7_2_3_tsni(l, tmp)
});
append_inst_4_7_2_3_tsni = function append_inst_4_7_2_3_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_4_7_2_3_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_4_7_11_12_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_4_8_tsni = function map_inst_4_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
encrypt_inst_9_10_tsni = function encrypt_inst_9_10_tsni(n, e, s) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(lambda_inst_9_10_15_tsni(n, e));
  tmp1 = rsa.size(n);
  tmp2 = collect_inst_9_10_5_tsni(tmp1, s);
  tmp3 = map_inst_9_10_8_tsni(tmp, tmp2);
  return unlines_inst_9_10_7_tsni(tmp3)
};
unlines_inst_9_10_7_tsni = function unlines_inst_9_10_7_tsni(ls) {
  let tmp;
  tmp = map_inst_9_10_7_1_tsni(lambda_inst_9_10_7_2_tsni, ls);
  return concat_inst_9_10_7_11_tsni(tmp)
};
map_inst_9_10_7_1_tsni = function map_inst_9_10_7_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_9_10_7_2_tsni = (undefined, function (l) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_10_7_11_12_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_9_10_7_2_3_tsni(l, tmp)
});
append_inst_9_10_7_2_3_tsni = function append_inst_9_10_7_2_3_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_9_10_7_2_3_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_9_10_7_11_12_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_9_10_8_tsni = function map_inst_9_10_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
collect_inst_9_10_5_tsni = function collect_inst_9_10_5_tsni(n, xs) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (f) => {
      return match_xs_arm_Nil_inst_9_10_8_tsni(f)
    }
  } else {
    if (xs instanceof NofibPrelude.Nil.class) {
      return (f) => {
        return match_xs_arm_Nil_inst_9_10_8_tsni(f)
      }
    } else {
      tmp = take_inst_9_10_5_6_tsni(n, xs);
      tmp1 = NofibPrelude.leave(n, xs);
      tmp2 = collect_inst_9_10_5_tsni(n, tmp1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp2;
      return (f) => {
        let param0, param1, x, xs1, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs1 = param1;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_9_10_8_tsni(f, xs1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return (f1) => {
          let _deforest_Cons_head2, _deforest_Cons_tail2;
          param0 = _deforest_Cons_head1;
          param1 = _deforest_Cons_tail1;
          x = param0;
          xs1 = param1;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_9_10_7_1_tsni(f1, xs1);
          _deforest_Cons_head2 = tmp3;
          _deforest_Cons_tail2 = tmp4;
          return () => {
            let param01, param11, x1, xs2, tmp5;
            param01 = _deforest_Cons_head2;
            param11 = _deforest_Cons_tail2;
            x1 = param01;
            xs2 = param11;
            tmp5 = concat_inst_9_10_7_11_tsni(xs2);
            return append_inst_9_10_7_11_12_tsni(x1, tmp5)
          }
        }
      }
    }
  }
};
take_inst_9_10_5_6_tsni = function take_inst_9_10_5_6_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f, a) => {
      return match_xs_arm_Nil_inst_9_10_15_16_17_18_tsni(f, a)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f, a) => {
        return match_xs_arm_Nil_inst_9_10_15_16_17_18_tsni(f, a)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_9_10_5_6_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f, a) => {
        let param01, param11, h1, t1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp2 = runtime.safeCall(f(a, h1));
        return foldl_inst_9_10_15_16_17_18_tsni(f, tmp2, t1)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
concat_inst_9_10_7_11_tsni = function concat_inst_9_10_7_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_9_10_7_11_12_tsni = function append_inst_9_10_7_11_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
testRsa_nofib_inst_13_14_tsni = function testRsa_nofib_inst_13_14_tsni(_) {
  let tmp, tmp1, tmp2;
  tmp = rsa.z_of_int("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107");
  tmp1 = rsa.z_of_int("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213");
  tmp2 = encrypt_inst_13_14_10_tsni(tmp, tmp1, rsa.intput);
  return hash_inst_13_14_19_tsni(tmp2)
};
encrypt_inst_13_14_10_tsni = function encrypt_inst_13_14_10_tsni(n, e, s) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(lambda_inst_13_14_10_15_tsni(n, e));
  tmp1 = rsa.size(n);
  tmp2 = collect_inst_13_14_10_5_tsni(tmp1, s);
  tmp3 = map_inst_13_14_10_8_tsni(tmp, tmp2);
  return unlines_inst_13_14_10_7_tsni(tmp3)
};
collect_inst_13_14_10_5_tsni = function collect_inst_13_14_10_5_tsni(n, xs) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (f) => {
      return match_xs_arm_Nil_inst_13_14_10_8_tsni(f)
    }
  } else {
    if (xs instanceof NofibPrelude.Nil.class) {
      return (f) => {
        return match_xs_arm_Nil_inst_13_14_10_8_tsni(f)
      }
    } else {
      tmp = take_inst_13_14_10_5_6_tsni(n, xs);
      tmp1 = NofibPrelude.leave(n, xs);
      tmp2 = collect_inst_13_14_10_5_tsni(n, tmp1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp2;
      return (f) => {
        let param0, param1, x, xs1, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs1 = param1;
        tmp3 = runtime.safeCall(f(x));
        tmp4 = map_inst_13_14_10_8_tsni(f, xs1);
        _deforest_Cons_head1 = tmp3;
        _deforest_Cons_tail1 = tmp4;
        return (f1) => {
          let _deforest_Cons_head2, _deforest_Cons_tail2;
          param0 = _deforest_Cons_head1;
          param1 = _deforest_Cons_tail1;
          x = param0;
          xs1 = param1;
          tmp3 = runtime.safeCall(f1(x));
          tmp4 = map_inst_13_14_10_7_1_tsni(f1, xs1);
          _deforest_Cons_head2 = tmp3;
          _deforest_Cons_tail2 = tmp4;
          return () => {
            let param01, param11, x1, xs2, tmp5;
            param01 = _deforest_Cons_head2;
            param11 = _deforest_Cons_tail2;
            x1 = param01;
            xs2 = param11;
            tmp5 = concat_inst_13_14_10_7_11_tsni(xs2);
            return append_inst_13_14_10_7_11_12_tsni(x1, tmp5)
          }
        }
      }
    }
  }
};
take_inst_13_14_10_5_6_tsni = function take_inst_13_14_10_5_6_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f, a) => {
      return match_xs_arm_Nil_inst_13_14_10_15_16_17_18_tsni(f, a)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f, a) => {
        return match_xs_arm_Nil_inst_13_14_10_15_16_17_18_tsni(f, a)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_13_14_10_5_6_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f, a) => {
        let param01, param11, h1, t1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h1 = param01;
        t1 = param11;
        tmp2 = runtime.safeCall(f(a, h1));
        return foldl_inst_13_14_10_15_16_17_18_tsni(f, tmp2, t1)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
unlines_inst_13_14_10_7_tsni = function unlines_inst_13_14_10_7_tsni(ls) {
  let tmp;
  tmp = map_inst_13_14_10_7_1_tsni(lambda_inst_13_14_10_7_2_tsni, ls);
  return concat_inst_13_14_10_7_11_tsni(tmp)
};
map_inst_13_14_10_7_1_tsni = function map_inst_13_14_10_7_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_13_14_10_7_2_tsni = (undefined, function (l) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_14_10_7_11_12_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_13_14_10_7_2_3_tsni(l, tmp)
});
append_inst_13_14_10_7_2_3_tsni = function append_inst_13_14_10_7_2_3_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_13_14_10_7_2_3_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_13_14_10_7_11_12_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_13_14_10_8_tsni = function map_inst_13_14_10_8_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_13_14_10_7_11_tsni = function concat_inst_13_14_10_7_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_14_10_7_11_12_tsni = function append_inst_13_14_10_7_11_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_0_11_tsni = function concat_inst_0_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_11_12_tsni = function append_inst_0_11_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_4_15_tsni = (undefined, function (n, e) {
  return (c) => {
    return lambda$_inst_4_15_16_tsni(n, e, c)
  }
});
lambda$_inst_4_15_16_tsni = function lambda$_inst_4_15_16_tsni(n, e, c) {
  let tmp, tmp1;
  tmp = code_inst_4_15_16_17_tsni(c);
  tmp1 = rsa1.power(e, n, tmp);
  return rsa1.string_of_z(tmp1)
};
code_inst_4_15_16_17_tsni = function code_inst_4_15_16_17_tsni(ls) {
  let tmp;
  tmp = lambda2;
  return foldl_inst_4_15_16_17_18_tsni(tmp, rsa.const0, ls)
};
foldl_inst_4_15_16_17_18_tsni = function foldl_inst_4_15_16_17_18_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_4_7_11_tsni = function concat_inst_4_7_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_4_7_11_12_tsni = function append_inst_4_7_11_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_9_10_15_tsni = (undefined, function (n, e) {
  return (c) => {
    return lambda$_inst_9_10_15_16_tsni(n, e, c)
  }
});
lambda$_inst_9_10_15_16_tsni = function lambda$_inst_9_10_15_16_tsni(n, e, c) {
  let tmp, tmp1;
  tmp = code_inst_9_10_15_16_17_tsni(c);
  tmp1 = rsa1.power(e, n, tmp);
  return rsa1.string_of_z(tmp1)
};
code_inst_9_10_15_16_17_tsni = function code_inst_9_10_15_16_17_tsni(ls) {
  let tmp;
  tmp = lambda2;
  return foldl_inst_9_10_15_16_17_18_tsni(tmp, rsa.const0, ls)
};
foldl_inst_9_10_15_16_17_18_tsni = function foldl_inst_9_10_15_16_17_18_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
hash_inst_9_19_tsni = function hash_inst_9_19_tsni(str) {
  let tmp;
  tmp = lambda;
  return foldl_inst_9_19_20_tsni(tmp, rsa.const0, str)
};
foldl_inst_9_19_20_tsni = function foldl_inst_9_19_20_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
lambda_inst_13_14_10_15_tsni = (undefined, function (n, e) {
  return (c) => {
    return lambda$_inst_13_14_10_15_16_tsni(n, e, c)
  }
});
lambda$_inst_13_14_10_15_16_tsni = function lambda$_inst_13_14_10_15_16_tsni(n, e, c) {
  let tmp, tmp1;
  tmp = code_inst_13_14_10_15_16_17_tsni(c);
  tmp1 = rsa1.power(e, n, tmp);
  return rsa1.string_of_z(tmp1)
};
code_inst_13_14_10_15_16_17_tsni = function code_inst_13_14_10_15_16_17_tsni(ls) {
  let tmp;
  tmp = lambda2;
  return foldl_inst_13_14_10_15_16_17_18_tsni(tmp, rsa.const0, ls)
};
foldl_inst_13_14_10_15_16_17_18_tsni = function foldl_inst_13_14_10_15_16_17_18_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
hash_inst_13_14_19_tsni = function hash_inst_13_14_19_tsni(str) {
  let tmp;
  tmp = lambda;
  return foldl_inst_13_14_19_20_tsni(tmp, rsa.const0, str)
};
foldl_inst_13_14_19_20_tsni = function foldl_inst_13_14_19_20_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
lambda$ = function lambda$(n, e, c) {
  let tmp, tmp1;
  tmp = rsa1.code(c);
  tmp1 = rsa1.power(e, n, tmp);
  return rsa1.string_of_z(tmp1)
};
lambda3 = (undefined, function (n, e) {
  return (c) => {
    return lambda$(n, e, c)
  }
});
lambda2 = (undefined, function (x, y) {
  let tmp, tmp1, tmp2;
  tmp = rsa1.z_mul(rsa1.const128, x);
  tmp1 = rsa1.int_if_char(y);
  tmp2 = rsa1.z_of_int(tmp1);
  return rsa1.z_add(tmp, tmp2)
});
lambda1 = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(l, tmp)
});
lambda = (undefined, function (acc, c) {
  let tmp, tmp1, tmp2;
  tmp = rsa1.int_if_char(c);
  tmp1 = rsa1.z_of_int(tmp);
  tmp2 = rsa1.z_mul(acc, rsa1.const31);
  return rsa1.z_add(tmp1, tmp2)
});
globalThis.Object.freeze(class rsa {
  static {
    rsa1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = rsa.z_of_int(0);
    this.const0 = tmp;
    tmp1 = rsa.z_of_int(31);
    this.const31 = tmp1;
    tmp2 = rsa.z_of_int(1);
    this.const1 = tmp2;
    tmp3 = rsa.z_of_int(2);
    this.const2 = tmp3;
    tmp4 = rsa.z_of_int(128);
    this.const128 = tmp4;
    tmp5 = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/rsa.faststdin"));
    tmp6 = runtime.safeCall(tmp5.toString());
    tmp7 = NofibPrelude.nofibStringToList(tmp6);
    this.intput = tmp7;
  }
  static z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  } 
  static string_of_z(x) {
    let tmp;
    tmp = x + "";
    return NofibPrelude.nofibStringToList(tmp)
  } 
  static z_add(x, y) {
    return x + y
  } 
  static z_mul(x, y) {
    return x * y
  } 
  static z_sub(x, y) {
    return x - y
  } 
  static z_div(x, y) {
    return x / y
  } 
  static z_mod(x, y) {
    return x % y
  } 
  static z_equal(x, y) {
    return x === y
  } 
  static z_sqr(x) {
    return x * x
  } 
  static int_if_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  } 
  static hash(str) {
    let tmp;
    tmp = lambda;
    return NofibPrelude.foldl(tmp, rsa.const0, str)
  } 
  static and_(ls) {
    let param0, param1, h, t;
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      if (h === true) {
        return rsa.and_(t)
      } else {
        return false
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static unlines(ls) {
    let tmp;
    tmp = map_inst_0_1_tsni(lambda_inst_0_2_tsni, ls);
    return concat_inst_0_11_tsni(tmp)
  } 
  static even(a) {
    let tmp;
    tmp = rsa.z_mod(a, rsa.const2);
    return tmp === rsa.const0
  } 
  static code(ls) {
    let tmp;
    tmp = lambda2;
    return NofibPrelude.foldl(tmp, rsa.const0, ls)
  } 
  static collect(n, xs) {
    let scrut, tmp, tmp1, tmp2;
    scrut = n === 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        tmp = NofibPrelude.take(n, xs);
        tmp1 = NofibPrelude.leave(n, xs);
        tmp2 = rsa.collect(n, tmp1);
        return NofibPrelude.Cons(tmp, tmp2)
      }
    }
  } 
  static size(n) {
    let tmp, tmp1, tmp2;
    tmp = rsa.string_of_z(n);
    tmp1 = NofibPrelude.listLen(tmp);
    tmp2 = tmp1 * 47;
    return NofibPrelude.intDiv(tmp2, 100)
  } 
  static encrypt(n, e, s) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(lambda_inst_4_15_tsni(n, e));
    tmp1 = rsa.size(n);
    tmp2 = collect_inst_4_5_tsni(tmp1, s);
    tmp3 = map_inst_4_8_tsni(tmp, tmp2);
    return unlines_inst_4_7_tsni(tmp3)
  } 
  static power(n, m, x) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut1 = rsa.z_equal(n, rsa.const0);
    if (scrut1 === true) {
      return rsa.const1
    } else {
      scrut = rsa.even(n);
      if (scrut === true) {
        tmp = rsa.z_div(n, rsa.const2);
        tmp1 = rsa.power(tmp, m, x);
        tmp2 = rsa.z_sqr(tmp1);
        return rsa.z_mod(tmp2, m)
      } else {
        tmp3 = rsa.z_sub(n, rsa.const1);
        tmp4 = rsa.power(tmp3, m, x);
        tmp5 = rsa.z_mul(x, tmp4);
        return rsa.z_mod(tmp5, m)
      }
    }
  } 
  static testRsa_nofib(_) {
    let tmp, tmp1, tmp2;
    tmp = rsa.z_of_int("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107");
    tmp1 = rsa.z_of_int("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213");
    tmp2 = encrypt_inst_9_10_tsni(tmp, tmp1, rsa.intput);
    return hash_inst_9_19_tsni(tmp2)
  } 
  static main() {
    return testRsa_nofib_inst_13_14_tsni(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "rsa"]; 
});
let rsa = rsa1; export default rsa;
