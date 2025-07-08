import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let cryptarithm11, enumFromTo_inst_0_tsni, testCryptarithm_nofib_inst_1_tsni, enumFromTo_inst_1_2_tsni, take_inst_1_3_tsni, enumFromTo_inst_1_0_tsni, map_inst_4_tsni, permutations_inst_1_5_tsni, map_inst_1_4_tsni, match_ls_arm_Nil_inst_1_5_tsni;
match_ls_arm_Nil_inst_1_5_tsni = function match_ls_arm_Nil_inst_1_5_tsni() {
  return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
};
enumFromTo_inst_0_tsni = function enumFromTo_inst_0_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_4_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCryptarithm_nofib_inst_1_tsni = function testCryptarithm_nofib_inst_1_tsni(n) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (i) {
    let p0, tmp2, tmp3, tmp4, tmp5;
    tmp2 = 9 + i;
    tmp3 = enumFromTo_inst_1_2_tsni(0, tmp2);
    tmp4 = take_inst_1_3_tsni(10, tmp3);
    p0 = tmp4;
    tmp5 = permutations_inst_1_5_tsni(p0);
    return NofibPrelude.filter(cryptarithm1.condition, tmp5)
  });
  tmp = lambda;
  tmp1 = enumFromTo_inst_1_0_tsni(1, n);
  return map_inst_1_4_tsni(tmp, tmp1)
};
enumFromTo_inst_1_2_tsni = function enumFromTo_inst_1_2_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_1_2_tsni(tmp, b);
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
          return match_ls_arm_Nil_inst_1_5_tsni()
        }
      } else {
        tmp2 = n - 1;
        tmp3 = take_inst_1_3_tsni(tmp2, t);
        _deforest_Cons_head1 = h;
        _deforest_Cons_tail1 = tmp3;
        return () => {
          let lscomp1, param01, param11, j, js, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          j = param01;
          js = param11;
          lscomp1 = function lscomp1(p1) {
            let lscomp2, param02, param12, pjs, t1, tmp5;
            if (p1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (p1 instanceof NofibPrelude.Cons.class) {
              param02 = p1.head;
              param12 = p1.tail;
              pjs = param02;
              t1 = param12;
              lscomp2 = function lscomp2(p2) {
                let param03, param13, r, t2, tmp6;
                if (p2 instanceof NofibPrelude.Nil.class) {
                  return lscomp1(t1)
                } else if (p2 instanceof NofibPrelude.Cons.class) {
                  param03 = p2.head;
                  param13 = p2.tail;
                  r = param03;
                  t2 = param13;
                  tmp6 = lscomp2(t2);
                  return NofibPrelude.Cons(r, tmp6)
                } else {
                  throw new globalThis.Error("match error");
                }
              };
              tmp5 = cryptarithm1.addj(j, pjs);
              return lscomp2(tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp4 = permutations_inst_1_5_tsni(js);
          return lscomp1(tmp4)
        }
      }
    }
  } else {
    return (n) => {
      return () => {
        return match_ls_arm_Nil_inst_1_5_tsni()
      }
    }
  }
};
take_inst_1_3_tsni = function take_inst_1_3_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
enumFromTo_inst_1_0_tsni = function enumFromTo_inst_1_0_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_1_0_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_1_4_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
map_inst_4_tsni = function map_inst_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
permutations_inst_1_5_tsni = function permutations_inst_1_5_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_1_4_tsni = function map_inst_1_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
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
    let param0, param1, t, param01, param11, h, param02, param12, i, param03, param13, r, param04, param14, y, param05, param15, w, param06, param16, e1, param07, param17, l, param08, param18, v, param09, param19, n, tmp, tmp1, tmp2, tmp3, tmp4;
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
                  e1 = param06;
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
                          tmp1 = cryptarithm1.expand(t, w, e1, l, v, e1);
                          tmp2 = 5 * tmp1;
                          tmp3 = tmp + tmp2;
                          tmp4 = cryptarithm1.expand(n, i, n, e1, t, y);
                          return tmp3 == tmp4
                        } else {
                          throw new globalThis.Error("match error");
                        }
                      } else {
                        throw new globalThis.Error("match error");
                      }
                    } else {
                      throw new globalThis.Error("match error");
                    }
                  } else {
                    throw new globalThis.Error("match error");
                  }
                } else {
                  throw new globalThis.Error("match error");
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
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
  static addj(j, ls) {
    let lscomp, param0, param1, k, ks, tmp, tmp1, tmp2, tmp3, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = NofibPrelude.Cons(j, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      k = param0;
      ks = param1;
      lscomp = function lscomp(p1) {
        let param01, param11, h1, t1, tmp5, tmp6;
        if (p1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (p1 instanceof NofibPrelude.Cons.class) {
          param01 = p1.head;
          param11 = p1.tail;
          h1 = param01;
          t1 = param11;
          tmp5 = NofibPrelude.Cons(k, h1);
          tmp6 = lscomp(t1);
          return NofibPrelude.Cons(tmp5, tmp6)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp1 = NofibPrelude.Cons(k, ks);
      tmp2 = NofibPrelude.Cons(j, tmp1);
      tmp3 = cryptarithm1.addj(j, ks);
      tmp4 = lscomp(tmp3);
      return NofibPrelude.Cons(tmp2, tmp4)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static permutations(ls1) {
    let lscomp1, param0, param1, j1, js, tmp;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      param0 = ls1.head;
      param1 = ls1.tail;
      j1 = param0;
      js = param1;
      lscomp1 = function lscomp1(p1) {
        let lscomp2, param01, param11, pjs, t1, tmp1;
        if (p1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (p1 instanceof NofibPrelude.Cons.class) {
          param01 = p1.head;
          param11 = p1.tail;
          pjs = param01;
          t1 = param11;
          lscomp2 = function lscomp2(p2) {
            let param02, param12, r, t2, tmp2;
            if (p2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(t1)
            } else if (p2 instanceof NofibPrelude.Cons.class) {
              param02 = p2.head;
              param12 = p2.tail;
              r = param02;
              t2 = param12;
              tmp2 = lscomp2(t2);
              return NofibPrelude.Cons(r, tmp2)
            } else {
              throw new globalThis.Error("match error");
            }
          };
          tmp1 = cryptarithm1.addj(j1, pjs);
          return lscomp2(tmp1)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = cryptarithm1.permutations(js);
      return lscomp1(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static testCryptarithm_nofib(n) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (i) {
      let p0, tmp2, tmp3, tmp4, tmp5;
      tmp2 = 9 + i;
      tmp3 = NofibPrelude.enumFromTo(0, tmp2);
      tmp4 = NofibPrelude.take(10, tmp3);
      p0 = tmp4;
      tmp5 = cryptarithm1.permutations(p0);
      return NofibPrelude.filter(cryptarithm1.condition, tmp5)
    });
    tmp = lambda;
    tmp1 = enumFromTo_inst_0_tsni(1, n);
    return map_inst_4_tsni(tmp, tmp1)
  } 
  static main() {
    return testCryptarithm_nofib_inst_1_tsni(1)
  }
  static toString() { return "cryptarithm1"; }
});
let cryptarithm1 = cryptarithm11; export default cryptarithm1;
