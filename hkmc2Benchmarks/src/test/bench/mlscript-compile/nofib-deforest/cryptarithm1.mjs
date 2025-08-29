const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let lscomp, lscomp2, lscomp1, cryptarithm11, lambda, lscomp$, lscomp1$, lscomp2$, enumFromTo_inst_0_1_tsni, take_inst_0_2_tsni, lambda_inst_3_4_tsni, take_inst_3_4_2_tsni, enumFromTo_inst_3_4_1_tsni, enumFromTo_inst_3_5_tsni, testCryptarithm_nofib_inst_6_7_tsni, enumFromTo_inst_6_7_5_tsni, lambda_inst_6_7_4_tsni, enumFromTo_inst_6_7_4_1_tsni, take_inst_6_7_4_2_tsni, permutations_inst_0_8_tsni, permutations_inst_3_4_8_tsni, map_inst_3_9_tsni, map_inst_6_7_9_tsni, permutations_inst_6_7_4_8_tsni, match_ls_arm_Nil_inst_0_8_tsni, match_ls_arm_Nil_inst_3_4_8_tsni, match_ls_arm_Nil_inst_6_7_4_8_tsni;
match_ls_arm_Nil_inst_0_8_tsni = (undefined, function () {
  return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
});
match_ls_arm_Nil_inst_3_4_8_tsni = (undefined, function () {
  return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
});
match_ls_arm_Nil_inst_6_7_4_8_tsni = (undefined, function () {
  return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
});
enumFromTo_inst_0_1_tsni = function enumFromTo_inst_0_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (n) => {
      let param0, param1, h, t, scrut1, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      scrut1 = n <= 0;
      if (scrut1 === true) {
        return () => {
          return match_ls_arm_Nil_inst_0_8_tsni()
        }
      } else {
        tmp2 = n - 1;
        tmp3 = take_inst_0_2_tsni(tmp2, t);
        _deforest_Cons_head1 = h;
        _deforest_Cons_tail1 = tmp3;
        return () => {
          let param01, param11, j, js, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          j = param01;
          js = param11;
          tmp4 = permutations_inst_0_8_tsni(js);
          return lscomp1$(j, tmp4)
        }
      }
    }
  } else {
    return (n) => {
      return () => {
        return match_ls_arm_Nil_inst_0_8_tsni()
      }
    }
  }
};
take_inst_0_2_tsni = function take_inst_0_2_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_3_4_tsni = (undefined, function (i) {
  let p0, tmp, tmp1, tmp2, tmp3;
  tmp = 9 + i;
  tmp1 = enumFromTo_inst_3_4_1_tsni(0, tmp);
  tmp2 = take_inst_3_4_2_tsni(10, tmp1);
  p0 = tmp2;
  tmp3 = permutations_inst_3_4_8_tsni(p0);
  return NofibPrelude.filter(cryptarithm11.condition, tmp3)
});
take_inst_3_4_2_tsni = function take_inst_3_4_2_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
enumFromTo_inst_3_4_1_tsni = function enumFromTo_inst_3_4_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_3_4_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (n) => {
      let param0, param1, h, t, scrut1, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      scrut1 = n <= 0;
      if (scrut1 === true) {
        return () => {
          return match_ls_arm_Nil_inst_3_4_8_tsni()
        }
      } else {
        tmp2 = n - 1;
        tmp3 = take_inst_3_4_2_tsni(tmp2, t);
        _deforest_Cons_head1 = h;
        _deforest_Cons_tail1 = tmp3;
        return () => {
          let param01, param11, j, js, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          j = param01;
          js = param11;
          tmp4 = permutations_inst_3_4_8_tsni(js);
          return lscomp1$(j, tmp4)
        }
      }
    }
  } else {
    return (n) => {
      return () => {
        return match_ls_arm_Nil_inst_3_4_8_tsni()
      }
    }
  }
};
enumFromTo_inst_3_5_tsni = function enumFromTo_inst_3_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_3_5_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_3_9_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCryptarithm_nofib_inst_6_7_tsni = function testCryptarithm_nofib_inst_6_7_tsni(n) {
  let tmp, tmp1;
  tmp = lambda_inst_6_7_4_tsni;
  tmp1 = enumFromTo_inst_6_7_5_tsni(1, n);
  return map_inst_6_7_9_tsni(tmp, tmp1)
};
enumFromTo_inst_6_7_5_tsni = function enumFromTo_inst_6_7_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_7_5_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_6_7_9_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
lambda_inst_6_7_4_tsni = (undefined, function (i) {
  let p0, tmp, tmp1, tmp2, tmp3;
  tmp = 9 + i;
  tmp1 = enumFromTo_inst_6_7_4_1_tsni(0, tmp);
  tmp2 = take_inst_6_7_4_2_tsni(10, tmp1);
  p0 = tmp2;
  tmp3 = permutations_inst_6_7_4_8_tsni(p0);
  return NofibPrelude.filter(cryptarithm11.condition, tmp3)
});
enumFromTo_inst_6_7_4_1_tsni = function enumFromTo_inst_6_7_4_1_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_6_7_4_1_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (n) => {
      let param0, param1, h, t, scrut1, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      scrut1 = n <= 0;
      if (scrut1 === true) {
        return () => {
          return match_ls_arm_Nil_inst_6_7_4_8_tsni()
        }
      } else {
        tmp2 = n - 1;
        tmp3 = take_inst_6_7_4_2_tsni(tmp2, t);
        _deforest_Cons_head1 = h;
        _deforest_Cons_tail1 = tmp3;
        return () => {
          let param01, param11, j, js, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          j = param01;
          js = param11;
          tmp4 = permutations_inst_6_7_4_8_tsni(js);
          return lscomp1$(j, tmp4)
        }
      }
    }
  } else {
    return (n) => {
      return () => {
        return match_ls_arm_Nil_inst_6_7_4_8_tsni()
      }
    }
  }
};
take_inst_6_7_4_2_tsni = function take_inst_6_7_4_2_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
permutations_inst_0_8_tsni = function permutations_inst_0_8_tsni(ls) {
  return runtime.safeCall(ls())
};
permutations_inst_3_4_8_tsni = function permutations_inst_3_4_8_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_3_9_tsni = function map_inst_3_9_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_6_7_9_tsni = function map_inst_6_7_9_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
permutations_inst_6_7_4_8_tsni = function permutations_inst_6_7_4_8_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda = (undefined, function (i) {
  let p0, tmp, tmp1, tmp2, tmp3;
  tmp = 9 + i;
  tmp1 = enumFromTo_inst_0_1_tsni(0, tmp);
  tmp2 = take_inst_0_2_tsni(10, tmp1);
  p0 = tmp2;
  tmp3 = permutations_inst_0_8_tsni(p0);
  return NofibPrelude.filter(cryptarithm11.condition, tmp3)
});
lscomp2$ = function lscomp2$(j, t1, p2) {
  let param0, param1, r, t2, tmp;
  if (p2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$(j, t1)
  } else if (p2 instanceof NofibPrelude.Cons.class) {
    param0 = p2.head;
    param1 = p2.tail;
    r = param0;
    t2 = param1;
    tmp = lscomp2$(j, t1, t2);
    return NofibPrelude.Cons(r, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2 = function lscomp2(j, t1) {
  return (p2) => {
    return lscomp2$(j, t1, p2)
  }
};
lscomp1$ = function lscomp1$(j, p1) {
  let param0, param1, pjs, t1, tmp;
  if (p1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (p1 instanceof NofibPrelude.Cons.class) {
    param0 = p1.head;
    param1 = p1.tail;
    pjs = param0;
    t1 = param1;
    tmp = cryptarithm11.addj(j, pjs);
    return lscomp2$(j, t1, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1 = function lscomp1(j) {
  return (p1) => {
    return lscomp1$(j, p1)
  }
};
lscomp$ = function lscomp$(k, p1) {
  let param0, param1, h1, t1, tmp, tmp1;
  if (p1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (p1 instanceof NofibPrelude.Cons.class) {
    param0 = p1.head;
    param1 = p1.tail;
    h1 = param0;
    t1 = param1;
    tmp = NofibPrelude.Cons(k, h1);
    tmp1 = lscomp$(k, t1);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(k) {
  return (p1) => {
    return lscomp$(k, p1)
  }
};
(class cryptarithm1 {
  static {
    cryptarithm11 = cryptarithm1;
  }
  static expand(a, b, c, d, e, f) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = e * 10;
    tmp1 = f + tmp;
    tmp2 = d * 100;
    tmp3 = tmp1 + tmp2;
    tmp4 = c * 1000;
    tmp5 = tmp3 + tmp4;
    tmp6 = b * 10000;
    tmp7 = tmp5 + tmp6;
    tmp8 = a * 100000;
    return tmp7 + tmp8
  } 
  static condition(thirywelvn) {
    let param0, param1, t, param01, param11, h, param02, param12, i, param03, param13, r, param04, param14, y, param05, param15, w, param06, param16, e, param07, param17, l, param08, param18, v, param09, param19, n, tmp, tmp1, tmp2, tmp3, tmp4;
    if (thirywelvn instanceof NofibPrelude.Cons.class) {
      param0 = thirywelvn.head;
      param1 = thirywelvn.tail;
      t = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        h = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          i = param02;
          if (param12 instanceof NofibPrelude.Cons.class) {
            param03 = param12.head;
            param13 = param12.tail;
            r = param03;
            if (param13 instanceof NofibPrelude.Cons.class) {
              param04 = param13.head;
              param14 = param13.tail;
              y = param04;
              if (param14 instanceof NofibPrelude.Cons.class) {
                param05 = param14.head;
                param15 = param14.tail;
                w = param05;
                if (param15 instanceof NofibPrelude.Cons.class) {
                  param06 = param15.head;
                  param16 = param15.tail;
                  e = param06;
                  if (param16 instanceof NofibPrelude.Cons.class) {
                    param07 = param16.head;
                    param17 = param16.tail;
                    l = param07;
                    if (param17 instanceof NofibPrelude.Cons.class) {
                      param08 = param17.head;
                      param18 = param17.tail;
                      v = param08;
                      if (param18 instanceof NofibPrelude.Cons.class) {
                        param09 = param18.head;
                        param19 = param18.tail;
                        n = param09;
                        if (param19 instanceof NofibPrelude.Nil.class) {
                          tmp = cryptarithm1.expand(t, h, i, r, t, y);
                          tmp1 = cryptarithm1.expand(t, w, e, l, v, e);
                          tmp2 = 5 * tmp1;
                          tmp3 = tmp + tmp2;
                          tmp4 = cryptarithm1.expand(n, i, n, e, t, y);
                          return tmp3 == tmp4
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
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
  static addj(j, ls) {
    let param0, param1, k, ks, tmp, tmp1, tmp2, tmp3, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = NofibPrelude.Cons(j, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      k = param0;
      ks = param1;
      tmp1 = NofibPrelude.Cons(k, ks);
      tmp2 = NofibPrelude.Cons(j, tmp1);
      tmp3 = cryptarithm1.addj(j, ks);
      tmp4 = lscomp$(k, tmp3);
      return NofibPrelude.Cons(tmp2, tmp4)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static permutations(ls) {
    let param0, param1, j, js, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      j = param0;
      js = param1;
      tmp = cryptarithm1.permutations(js);
      return lscomp1$(j, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static testCryptarithm_nofib(n) {
    let tmp, tmp1;
    tmp = lambda_inst_3_4_tsni;
    tmp1 = enumFromTo_inst_3_5_tsni(1, n);
    return map_inst_3_9_tsni(tmp, tmp1)
  } 
  static main() {
    return testCryptarithm_nofib_inst_6_7_tsni(1)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "cryptarithm1"]; 
});
let cryptarithm1 = cryptarithm11; export default cryptarithm1;
