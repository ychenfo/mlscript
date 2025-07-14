import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cichelli1, map_inst_0_tsni, ends_inst_1_tsni, attribkeys_inst_2_tsni, map_inst_2_3_tsni, blocked__inst_4_tsni, ends_inst_4_5_tsni, ends_inst_4_6_tsni, partition__inst_4_7_tsni, select_inst_4_7_8_tsni, partition__inst_7_tsni, select_inst_7_8_tsni, ends_inst_5_tsni, blocked__inst_9_tsni, ends_inst_9_5_tsni, ends_inst_9_6_tsni, partition__inst_9_7_tsni, select_inst_9_7_8_tsni, assocm_inst_10_tsni, findhash__inst_11_tsni, assocm_inst_11_10_tsni, enumFromTo_lz_inst_11_12_tsni, enumFromTo_lz_inst_11_13_tsni, findhash_inst_14_tsni, findhash__inst_14_11_tsni, enumFromTo_lz_inst_14_11_12_tsni, enumFromTo_lz_inst_14_11_13_tsni, assocm_inst_14_11_10_tsni, blocked_inst_15_tsni, blocked__inst_15_9_tsni, partition__inst_15_9_7_tsni, select_inst_15_9_7_8_tsni, ends_inst_15_9_6_tsni, ends_inst_15_9_5_tsni, append_inst_15_9_16_tsni, append_inst_17_tsni, take_inst_18_tsni, cichelli_inst_19_tsni, take_inst_19_18_tsni, append_inst_19_17_tsni, blocked_inst_19_15_tsni, blocked__inst_19_15_9_tsni, ends_inst_19_15_9_5_tsni, ends_inst_19_15_9_6_tsni, partition__inst_19_15_9_7_tsni, select_inst_19_15_9_7_8_tsni, findhash_inst_19_14_tsni, findhash__inst_19_14_11_tsni, assocm_inst_19_14_11_10_tsni, enumFromTo_lz_inst_19_14_11_12_tsni, enumFromTo_lz_inst_19_14_11_13_tsni, append_inst_19_15_9_16_tsni, prog_inst_20_tsni, cichelli_inst_20_19_tsni, findhash_inst_20_19_14_tsni, findhash__inst_20_19_14_11_tsni, enumFromTo_lz_inst_20_19_14_11_12_tsni, enumFromTo_lz_inst_20_19_14_11_13_tsni, assocm_inst_20_19_14_11_10_tsni, blocked_inst_20_19_15_tsni, blocked__inst_20_19_15_9_tsni, partition__inst_20_19_15_9_7_tsni, select_inst_20_19_15_9_7_8_tsni, ends_inst_20_19_15_9_6_tsni, ends_inst_20_19_15_9_5_tsni, append_inst_20_19_15_9_16_tsni, append_inst_20_19_17_tsni, take_inst_20_19_18_tsni, concat_inst_21_tsni, append_inst_21_22_tsni, union_inst_4_23_tsni, subset_inst_4_24_tsni, all_inst_4_24_25_tsni, append_inst_4_16_tsni, append_inst_16_tsni, union_inst_23_tsni, union_inst_9_23_tsni, subset_inst_9_24_tsni, all_inst_9_24_25_tsni, append_inst_9_16_tsni, hash_inst_11_26_tsni, append_inst_11_27_tsni, hash_inst_14_11_26_tsni, subset_inst_15_9_24_tsni, all_inst_15_9_24_25_tsni, union_inst_15_9_23_tsni, attribkeys_inst_28_tsni, map_inst_28_3_tsni, attribkeys_inst_19_28_tsni, map_inst_19_28_3_tsni, union_inst_19_15_9_23_tsni, subset_inst_19_15_9_24_tsni, all_inst_19_15_9_24_25_tsni, hash_inst_19_14_11_26_tsni, hash_inst_20_19_14_11_26_tsni, subset_inst_20_19_15_9_24_tsni, all_inst_20_19_15_9_24_25_tsni, union_inst_20_19_15_9_23_tsni, attribkeys_inst_20_19_28_tsni, map_inst_20_19_28_3_tsni, match_xs_arm_Cons_inst_21_22_tsni, match_ls_arm_Cons_inst_4_23_tsni, match_ls_arm_Cons_inst_4_24_25_tsni, match_ls_arm_Cons_inst_23_tsni, match_ls_arm_Cons_inst_9_23_tsni, match_ls_arm_Cons_inst_9_24_25_tsni, match_first0_arm_None_inst__tsni, match_first0_arm_None_inst_11_tsni, match_xs_arm_Cons_inst_11_27_tsni, match_xs_arm_Nil_inst_11_27_tsni, match_first0_arm_None_inst_14_11_tsni, match_ls_arm_Cons_inst_15_9_24_25_tsni, match_ls_arm_Cons_inst_15_9_23_tsni, match_ks_arm_Cons_inst_14_11_tsni, match_xs_arm_Cons_inst_28_3_tsni, match_xs_arm_Nil_inst_28_3_tsni, match_xs_arm_Nil_inst_19_28_3_tsni, match_xs_arm_Cons_inst_19_28_3_tsni, match_ls_arm_Cons_inst_19_15_9_23_tsni, match_ls_arm_Cons_inst_19_15_9_24_25_tsni, match_first0_arm_None_inst_19_14_11_tsni, match_ks_arm_Cons_inst_19_14_11_tsni, match_first0_arm_None_inst_20_19_14_11_tsni, match_ls_arm_Cons_inst_20_19_15_9_24_25_tsni, match_ls_arm_Cons_inst_20_19_15_9_23_tsni, match_ks_arm_Cons_inst_20_19_14_11_tsni, match_xs_arm_Cons_inst_20_19_28_3_tsni, match_xs_arm_Nil_inst_20_19_28_3_tsni;
match_xs_arm_Cons_inst_21_22_tsni = function match_xs_arm_Cons_inst_21_22_tsni(ys, _deforest_Cons_head_inst_21_22_tsni, _deforest_Cons_tail_inst_21_22_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_21_22_tsni;
  param1 = _deforest_Cons_tail_inst_21_22_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_21_22_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_4_23_tsni = function match_ls_arm_Cons_inst_4_23_tsni(lscomp, xs, _deforest_Cons_head_inst_4_23_tsni, _deforest_Cons_tail_inst_4_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_4_23_tsni;
  param1 = _deforest_Cons_tail_inst_4_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_4_24_25_tsni = function match_ls_arm_Cons_inst_4_24_25_tsni(p, _deforest_Cons_head_inst_4_24_25_tsni, _deforest_Cons_tail_inst_4_24_25_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_4_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_4_24_25_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_4_24_25_tsni(p, t)
  } else {
    return false
  }
};
match_ls_arm_Cons_inst_23_tsni = function match_ls_arm_Cons_inst_23_tsni(lscomp, xs, _deforest_Cons_head_inst_23_tsni, _deforest_Cons_tail_inst_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_23_tsni;
  param1 = _deforest_Cons_tail_inst_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_9_23_tsni = function match_ls_arm_Cons_inst_9_23_tsni(lscomp, xs, _deforest_Cons_head_inst_9_23_tsni, _deforest_Cons_tail_inst_9_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_9_23_tsni;
  param1 = _deforest_Cons_tail_inst_9_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_9_24_25_tsni = function match_ls_arm_Cons_inst_9_24_25_tsni(p, _deforest_Cons_head_inst_9_24_25_tsni, _deforest_Cons_tail_inst_9_24_25_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_9_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_9_24_25_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_9_24_25_tsni(p, t)
  } else {
    return false
  }
};
match_first0_arm_None_inst__tsni = function match_first0_arm_None_inst__tsni(tryy, a, z, first1) {
  let lscomp1, param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, lambda1, lambda2;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      lambda = (undefined, function (m) {
        let arr, tmp7;
        arr = [
          a,
          m
        ];
        tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
        return tryy(tmp7)
      });
      tmp = lambda;
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      lscomp1 = function lscomp1(ls1) {
        let tmp7, lambda3;
        lambda3 = (undefined, function () {
          let lscomp2, scrut1, param01, param1, m, ms, tmp8, tmp9;
          scrut1 = NofibPrelude.force(ls1);
          if (scrut1 instanceof NofibPrelude.LzNil.class) {
            return NofibPrelude.LzNil
          } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
            param01 = scrut1.head;
            param1 = scrut1.tail;
            m = param01;
            ms = param1;
            lscomp2 = function lscomp2(ls2) {
              let scrut2, param02, param11, n, ns, tmp10, lambda4;
              scrut2 = NofibPrelude.force(ls2);
              if (scrut2 instanceof NofibPrelude.LzNil.class) {
                return lscomp1(ms)
              } else if (scrut2 instanceof NofibPrelude.LzCons.class) {
                param02 = scrut2.head;
                param11 = scrut2.tail;
                n = param02;
                ns = param11;
                lambda4 = (undefined, function () {
                  let arr, tmp11;
                  arr = [
                    m,
                    n
                  ];
                  tmp11 = lscomp2(ns);
                  return NofibPrelude.LzCons(arr, tmp11)
                });
                tmp10 = lambda4;
                return NofibPrelude.lazy(tmp10)
              } else {
                throw new globalThis.Error("match error");
              }
            };
            tmp8 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            tmp9 = lscomp2(tmp8);
            return NofibPrelude.force(tmp9)
          } else {
            throw new globalThis.Error("match error");
          }
        });
        tmp7 = lambda3;
        return NofibPrelude.lazy(tmp7)
      };
      lambda1 = (undefined, function (caseScrut) {
        let first11, first0, m, n, arr, arr1, tmp7, tmp8;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first11 = caseScrut[1];
          m = first0;
          n = first11;
          arr = [
            a,
            m
          ];
          arr1 = [
            z,
            n
          ];
          tmp7 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
          tmp8 = NofibPrelude.Cons(arr, tmp7);
          return tryy(tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp2 = lambda1;
      tmp3 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      tmp4 = lscomp1(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    lambda2 = (undefined, function (m) {
      let arr, tmp7;
      arr = [
        a,
        m
      ];
      tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
      return tryy(tmp7)
    });
    tmp5 = lambda2;
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_first0_arm_None_inst_11_tsni = function match_first0_arm_None_inst_11_tsni(tryy, a, z, first1) {
  let lscomp1, param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, lambda1, lambda2;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      lambda = (undefined, function (m) {
        let arr, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
        arr = [
          a,
          m
        ];
        _deforest_Cons_head = arr;
        _deforest_Cons_tail = (ys) => {
          return match_xs_arm_Nil_inst_11_27_tsni(ys)
        };
        tmp7 = (ys) => {
          return match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return tryy(tmp7)
      });
      tmp = lambda;
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      lscomp1 = function lscomp1(ls1) {
        let tmp7, lambda3;
        lambda3 = (undefined, function () {
          let scrut1;
          scrut1 = NofibPrelude.force(ls1);
          return runtime.safeCall(scrut1(lscomp1))
        });
        tmp7 = lambda3;
        return NofibPrelude.lazy(tmp7)
      };
      lambda1 = (undefined, function (caseScrut) {
        let first11, first0, m, n, arr, arr1, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first11 = caseScrut[1];
          m = first0;
          n = first11;
          arr = [
            a,
            m
          ];
          arr1 = [
            z,
            n
          ];
          _deforest_Cons_head1 = arr1;
          _deforest_Cons_tail1 = (ys) => {
            return match_xs_arm_Nil_inst_11_27_tsni(ys)
          };
          tmp7 = (ys) => {
            return match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
          };
          _deforest_Cons_head = arr;
          _deforest_Cons_tail = tmp7;
          tmp8 = (ys) => {
            return match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
          };
          return tryy(tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp2 = lambda1;
      tmp3 = enumFromTo_lz_inst_11_13_tsni(0, cichelli.maxval);
      tmp4 = lscomp1(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    lambda2 = (undefined, function (m) {
      let arr, tmp7, _deforest_Cons_head, _deforest_Cons_tail;
      arr = [
        a,
        m
      ];
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return match_xs_arm_Nil_inst_11_27_tsni(ys)
      };
      tmp7 = (ys) => {
        return match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return tryy(tmp7)
    });
    tmp5 = lambda2;
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_11_27_tsni = function match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head_inst_11_27_tsni, _deforest_Cons_tail_inst_11_27_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_11_27_tsni;
  param1 = _deforest_Cons_tail_inst_11_27_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_11_27_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_11_27_tsni = function match_xs_arm_Nil_inst_11_27_tsni(ys) {
  return ys
};
match_first0_arm_None_inst_14_11_tsni = function match_first0_arm_None_inst_14_11_tsni(tryy, a, z, first1) {
  let lscomp1, param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, lambda1, lambda2;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      lambda = (undefined, function (m) {
        let arr, tmp7;
        arr = [
          a,
          m
        ];
        tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
        return tryy(tmp7)
      });
      tmp = lambda;
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      lscomp1 = function lscomp1(ls1) {
        let tmp7, lambda3;
        lambda3 = (undefined, function () {
          let scrut1;
          scrut1 = NofibPrelude.force(ls1);
          return runtime.safeCall(scrut1(lscomp1))
        });
        tmp7 = lambda3;
        return NofibPrelude.lazy(tmp7)
      };
      lambda1 = (undefined, function (caseScrut) {
        let first11, first0, m, n, arr, arr1, tmp7, tmp8;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first11 = caseScrut[1];
          m = first0;
          n = first11;
          arr = [
            a,
            m
          ];
          arr1 = [
            z,
            n
          ];
          tmp7 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
          tmp8 = NofibPrelude.Cons(arr, tmp7);
          return tryy(tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp2 = lambda1;
      tmp3 = enumFromTo_lz_inst_14_11_13_tsni(0, cichelli.maxval);
      tmp4 = lscomp1(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    lambda2 = (undefined, function (m) {
      let arr, tmp7;
      arr = [
        a,
        m
      ];
      tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
      return tryy(tmp7)
    });
    tmp5 = lambda2;
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Cons_inst_15_9_24_25_tsni = function match_ls_arm_Cons_inst_15_9_24_25_tsni(p, _deforest_Cons_head_inst_15_9_24_25_tsni, _deforest_Cons_tail_inst_15_9_24_25_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_15_9_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_15_9_24_25_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_15_9_24_25_tsni(p, t)
  } else {
    return false
  }
};
match_ls_arm_Cons_inst_15_9_23_tsni = function match_ls_arm_Cons_inst_15_9_23_tsni(lscomp, xs, _deforest_Cons_head_inst_15_9_23_tsni, _deforest_Cons_tail_inst_15_9_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_15_9_23_tsni;
  param1 = _deforest_Cons_tail_inst_15_9_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ks_arm_Cons_inst_14_11_tsni = function match_ks_arm_Cons_inst_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head_inst_14_11_tsni, _deforest_Cons_tail_inst_14_11_tsni) {
  let tryy, param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_14_11_tsni;
  param1 = _deforest_Cons_tail_inst_14_11_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tryy = function tryy(newAssocs) {
      let newCharAssocs, scrut1, param02, newKeyHashSet, tmp2, tmp3, tmp4, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
      tmp2 = NofibPrelude.append(newAssocs, charAssocs);
      newCharAssocs = tmp2;
      _deforest_K_s = s;
      _deforest_K_c1 = a;
      _deforest_K_c2 = z;
      _deforest_K_i = n;
      tmp3 = (cvs) => {
        let param03, param12, param21, param31, a1, z1, n1, tmp5, tmp6, tmp7;
        param03 = _deforest_K_s;
        param12 = _deforest_K_c1;
        param21 = _deforest_K_c2;
        param31 = _deforest_K_i;
        a1 = param12;
        z1 = param21;
        n1 = param31;
        tmp5 = cichelli.assoc(a1, cvs);
        tmp6 = n1 + tmp5;
        tmp7 = cichelli.assoc(z1, cvs);
        return tmp6 + tmp7
      };
      tmp4 = hash_inst_14_11_26_tsni(newCharAssocs, tmp3);
      scrut1 = cichelli.hinsert(tmp4, keyHashSet);
      if (scrut1 instanceof NofibPrelude.None.class) {
        return runtime.safeCall(cichelli.NotEver(1))
      } else if (scrut1 instanceof NofibPrelude.Some.class) {
        param02 = scrut1.x;
        newKeyHashSet = param02;
        return findhash__inst_14_11_tsni(newKeyHashSet, newCharAssocs, ks)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = assocm_inst_14_11_10_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (tryy1, a1, z1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(tryy1, a1, z1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(tryy, a, z))
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_28_3_tsni = function match_xs_arm_Cons_inst_28_3_tsni(f, _deforest_Cons_head_inst_28_3_tsni, _deforest_Cons_tail_inst_28_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_28_3_tsni;
  param1 = _deforest_Cons_tail_inst_28_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_28_3_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Nil_inst_28_3_tsni = function match_xs_arm_Nil_inst_28_3_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_19_28_3_tsni = function match_xs_arm_Nil_inst_19_28_3_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_19_28_3_tsni = function match_xs_arm_Cons_inst_19_28_3_tsni(f, _deforest_Cons_head_inst_19_28_3_tsni, _deforest_Cons_tail_inst_19_28_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_19_28_3_tsni;
  param1 = _deforest_Cons_tail_inst_19_28_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_19_28_3_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_ls_arm_Cons_inst_19_15_9_23_tsni = function match_ls_arm_Cons_inst_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head_inst_19_15_9_23_tsni, _deforest_Cons_tail_inst_19_15_9_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_19_15_9_23_tsni;
  param1 = _deforest_Cons_tail_inst_19_15_9_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ls_arm_Cons_inst_19_15_9_24_25_tsni = function match_ls_arm_Cons_inst_19_15_9_24_25_tsni(p, _deforest_Cons_head_inst_19_15_9_24_25_tsni, _deforest_Cons_tail_inst_19_15_9_24_25_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_19_15_9_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_19_15_9_24_25_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_19_15_9_24_25_tsni(p, t)
  } else {
    return false
  }
};
match_first0_arm_None_inst_19_14_11_tsni = function match_first0_arm_None_inst_19_14_11_tsni(tryy, a, z, first1) {
  let lscomp1, param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, lambda1, lambda2;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      lambda = (undefined, function (m) {
        let arr, tmp7;
        arr = [
          a,
          m
        ];
        tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
        return tryy(tmp7)
      });
      tmp = lambda;
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      lscomp1 = function lscomp1(ls1) {
        let tmp7, lambda3;
        lambda3 = (undefined, function () {
          let scrut1;
          scrut1 = NofibPrelude.force(ls1);
          return runtime.safeCall(scrut1(lscomp1))
        });
        tmp7 = lambda3;
        return NofibPrelude.lazy(tmp7)
      };
      lambda1 = (undefined, function (caseScrut) {
        let first11, first0, m, n, arr, arr1, tmp7, tmp8;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first11 = caseScrut[1];
          m = first0;
          n = first11;
          arr = [
            a,
            m
          ];
          arr1 = [
            z,
            n
          ];
          tmp7 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
          tmp8 = NofibPrelude.Cons(arr, tmp7);
          return tryy(tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp2 = lambda1;
      tmp3 = enumFromTo_lz_inst_19_14_11_13_tsni(0, cichelli.maxval);
      tmp4 = lscomp1(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    lambda2 = (undefined, function (m) {
      let arr, tmp7;
      arr = [
        a,
        m
      ];
      tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
      return tryy(tmp7)
    });
    tmp5 = lambda2;
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ks_arm_Cons_inst_19_14_11_tsni = function match_ks_arm_Cons_inst_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head_inst_19_14_11_tsni, _deforest_Cons_tail_inst_19_14_11_tsni) {
  let tryy, param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_19_14_11_tsni;
  param1 = _deforest_Cons_tail_inst_19_14_11_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tryy = function tryy(newAssocs) {
      let newCharAssocs, scrut1, param02, newKeyHashSet, tmp2, tmp3, tmp4, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
      tmp2 = NofibPrelude.append(newAssocs, charAssocs);
      newCharAssocs = tmp2;
      _deforest_K_s = s;
      _deforest_K_c1 = a;
      _deforest_K_c2 = z;
      _deforest_K_i = n;
      tmp3 = (cvs) => {
        let param03, param12, param21, param31, a1, z1, n1, tmp5, tmp6, tmp7;
        param03 = _deforest_K_s;
        param12 = _deforest_K_c1;
        param21 = _deforest_K_c2;
        param31 = _deforest_K_i;
        a1 = param12;
        z1 = param21;
        n1 = param31;
        tmp5 = cichelli.assoc(a1, cvs);
        tmp6 = n1 + tmp5;
        tmp7 = cichelli.assoc(z1, cvs);
        return tmp6 + tmp7
      };
      tmp4 = hash_inst_19_14_11_26_tsni(newCharAssocs, tmp3);
      scrut1 = cichelli.hinsert(tmp4, keyHashSet);
      if (scrut1 instanceof NofibPrelude.None.class) {
        return runtime.safeCall(cichelli.NotEver(1))
      } else if (scrut1 instanceof NofibPrelude.Some.class) {
        param02 = scrut1.x;
        newKeyHashSet = param02;
        return findhash__inst_19_14_11_tsni(newKeyHashSet, newCharAssocs, ks)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = assocm_inst_19_14_11_10_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (tryy1, a1, z1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(tryy1, a1, z1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(tryy, a, z))
  } else {
    throw new globalThis.Error("match error");
  }
};
match_first0_arm_None_inst_20_19_14_11_tsni = function match_first0_arm_None_inst_20_19_14_11_tsni(tryy, a, z, first1) {
  let lscomp1, param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, lambda1, lambda2;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      lambda = (undefined, function (m) {
        let arr, tmp7;
        arr = [
          a,
          m
        ];
        tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
        return tryy(tmp7)
      });
      tmp = lambda;
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      lscomp1 = function lscomp1(ls1) {
        let tmp7, lambda3;
        lambda3 = (undefined, function () {
          let scrut1;
          scrut1 = NofibPrelude.force(ls1);
          return runtime.safeCall(scrut1(lscomp1))
        });
        tmp7 = lambda3;
        return NofibPrelude.lazy(tmp7)
      };
      lambda1 = (undefined, function (caseScrut) {
        let first11, first0, m, n, arr, arr1, tmp7, tmp8;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first11 = caseScrut[1];
          m = first0;
          n = first11;
          arr = [
            a,
            m
          ];
          arr1 = [
            z,
            n
          ];
          tmp7 = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
          tmp8 = NofibPrelude.Cons(arr, tmp7);
          return tryy(tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp2 = lambda1;
      tmp3 = enumFromTo_lz_inst_20_19_14_11_13_tsni(0, cichelli.maxval);
      tmp4 = lscomp1(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    lambda2 = (undefined, function (m) {
      let arr, tmp7;
      arr = [
        a,
        m
      ];
      tmp7 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
      return tryy(tmp7)
    });
    tmp5 = lambda2;
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw new globalThis.Error("match error");
  }
};
match_ls_arm_Cons_inst_20_19_15_9_24_25_tsni = function match_ls_arm_Cons_inst_20_19_15_9_24_25_tsni(p, _deforest_Cons_head_inst_20_19_15_9_24_25_tsni, _deforest_Cons_tail_inst_20_19_15_9_24_25_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_20_19_15_9_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_20_19_15_9_24_25_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_20_19_15_9_24_25_tsni(p, t)
  } else {
    return false
  }
};
match_ls_arm_Cons_inst_20_19_15_9_23_tsni = function match_ls_arm_Cons_inst_20_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head_inst_20_19_15_9_23_tsni, _deforest_Cons_tail_inst_20_19_15_9_23_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_20_19_15_9_23_tsni;
  param1 = _deforest_Cons_tail_inst_20_19_15_9_23_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    tmp1 = lscomp(t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp(t)
  }
};
match_ks_arm_Cons_inst_20_19_14_11_tsni = function match_ks_arm_Cons_inst_20_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head_inst_20_19_14_11_tsni, _deforest_Cons_tail_inst_20_19_14_11_tsni) {
  let tryy, param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_20_19_14_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_19_14_11_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tryy = function tryy(newAssocs) {
      let newCharAssocs, scrut1, param02, newKeyHashSet, tmp2, tmp3, tmp4, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
      tmp2 = NofibPrelude.append(newAssocs, charAssocs);
      newCharAssocs = tmp2;
      _deforest_K_s = s;
      _deforest_K_c1 = a;
      _deforest_K_c2 = z;
      _deforest_K_i = n;
      tmp3 = (cvs) => {
        let param03, param12, param21, param31, a1, z1, n1, tmp5, tmp6, tmp7;
        param03 = _deforest_K_s;
        param12 = _deforest_K_c1;
        param21 = _deforest_K_c2;
        param31 = _deforest_K_i;
        a1 = param12;
        z1 = param21;
        n1 = param31;
        tmp5 = cichelli.assoc(a1, cvs);
        tmp6 = n1 + tmp5;
        tmp7 = cichelli.assoc(z1, cvs);
        return tmp6 + tmp7
      };
      tmp4 = hash_inst_20_19_14_11_26_tsni(newCharAssocs, tmp3);
      scrut1 = cichelli.hinsert(tmp4, keyHashSet);
      if (scrut1 instanceof NofibPrelude.None.class) {
        return runtime.safeCall(cichelli.NotEver(1))
      } else if (scrut1 instanceof NofibPrelude.Some.class) {
        param02 = scrut1.x;
        newKeyHashSet = param02;
        return findhash__inst_20_19_14_11_tsni(newKeyHashSet, newCharAssocs, ks)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = assocm_inst_20_19_14_11_10_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (tryy1, a1, z1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(tryy1, a1, z1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(tryy, a, z))
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_20_19_28_3_tsni = function match_xs_arm_Cons_inst_20_19_28_3_tsni(f, _deforest_Cons_head_inst_20_19_28_3_tsni, _deforest_Cons_tail_inst_20_19_28_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_20_19_28_3_tsni;
  param1 = _deforest_Cons_tail_inst_20_19_28_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_20_19_28_3_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Nil_inst_20_19_28_3_tsni = function match_xs_arm_Nil_inst_20_19_28_3_tsni(f) {
  return NofibPrelude.Nil
};
map_inst_0_tsni = function map_inst_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
ends_inst_1_tsni = function ends_inst_1_tsni(k) {
  return runtime.safeCall(k())
};
attribkeys_inst_2_tsni = function attribkeys_inst_2_tsni(ks) {
  let tmp, lambda;
  lambda = (undefined, function (k) {
    let tmp1, tmp2, tmp3, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
    tmp1 = NofibPrelude.head(k);
    tmp2 = cichelli.last(k);
    tmp3 = NofibPrelude.listLen(k);
    _deforest_K_s = k;
    _deforest_K_c1 = tmp1;
    _deforest_K_c2 = tmp2;
    _deforest_K_i = tmp3;
    return () => {
      let param0, param1, param2, param3, a, z, tmp4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_K_s;
      param1 = _deforest_K_c1;
      param2 = _deforest_K_c2;
      param3 = _deforest_K_i;
      a = param1;
      z = param2;
      _deforest_Cons_head1 = z;
      _deforest_Cons_tail1 = (ys) => {
        return ys
      };
      tmp4 = (ys) => {
        return match_xs_arm_Cons_inst_21_22_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      };
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp4;
      return (ys) => {
        return match_xs_arm_Cons_inst_21_22_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  });
  tmp = lambda;
  return map_inst_2_3_tsni(tmp, ks)
};
map_inst_2_3_tsni = function map_inst_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_21_tsni(xs2);
        return append_inst_21_22_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
blocked__inst_4_tsni = function blocked__inst_4_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_4_5_tsni(k);
    tmp1 = union_inst_4_23_tsni(ds, tmp);
    ds_ = tmp1;
    lambda = (undefined, function (x) {
      let tmp4;
      tmp4 = ends_inst_4_6_tsni(x);
      return subset_inst_4_24_tsni(tmp4, ds_)
    });
    scrut = partition__inst_4_7_tsni(lambda, ks);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_4_tsni(ds_, rest);
      tmp3 = append_inst_4_16_tsni(det, tmp2);
      return NofibPrelude.Cons(k, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_4_5_tsni = function ends_inst_4_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_4_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_4_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_4_6_tsni = function ends_inst_4_6_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_4_24_25_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_4_24_25_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_4_7_tsni = function partition__inst_4_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_4_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_4_7_8_tsni = function select_inst_4_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_4_16_tsni(xs, ys);
        return NofibPrelude.Cons(x1, tmp2)
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_7_tsni = function partition__inst_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_7_8_tsni = function select_inst_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_16_tsni(xs, ys);
        return NofibPrelude.Cons(x1, tmp2)
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_5_tsni = function ends_inst_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
blocked__inst_9_tsni = function blocked__inst_9_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_9_5_tsni(k);
    tmp1 = union_inst_9_23_tsni(ds, tmp);
    ds_ = tmp1;
    lambda = (undefined, function (x) {
      let tmp4;
      tmp4 = ends_inst_9_6_tsni(x);
      return subset_inst_9_24_tsni(tmp4, ds_)
    });
    scrut = partition__inst_9_7_tsni(lambda, ks);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_9_tsni(ds_, rest);
      tmp3 = append_inst_9_16_tsni(det, tmp2);
      return NofibPrelude.Cons(k, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_9_5_tsni = function ends_inst_9_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_9_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_9_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_9_6_tsni = function ends_inst_9_6_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_9_24_25_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_9_24_25_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_9_7_tsni = function partition__inst_9_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_9_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_9_7_8_tsni = function select_inst_9_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_9_16_tsni(xs, ys);
        return NofibPrelude.Cons(x1, tmp2)
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
assocm_inst_10_tsni = function assocm_inst_10_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (tryy, a, z1, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1, lambda;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            lambda = (undefined, function (n) {
              let arr, tmp2;
              arr = [
                z1,
                n
              ];
              tmp2 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
              return tryy(tmp2)
            });
            tmp = lambda;
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy(NofibPrelude.Nil)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        return assocm_inst_10_tsni(x, yzs)
      }
    } else {
      return (tryy, a, z1, first11) => {
        return match_first0_arm_None_inst__tsni(tryy, a, z1, first11)
      }
    }
  } else {
    return (tryy, a, z1, first11) => {
      return match_first0_arm_None_inst__tsni(tryy, a, z1, first11)
    }
  }
};
findhash__inst_11_tsni = function findhash__inst_11_tsni(keyHashSet, charAssocs, ks) {
  let tryy, param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tryy = function tryy(newAssocs) {
        let newCharAssocs, scrut1, param02, newKeyHashSet, tmp2, tmp3, tmp4, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
        tmp2 = append_inst_11_27_tsni(newAssocs, charAssocs);
        newCharAssocs = tmp2;
        _deforest_K_s = s;
        _deforest_K_c1 = a;
        _deforest_K_c2 = z;
        _deforest_K_i = n;
        tmp3 = (cvs) => {
          let param03, param12, param21, param31, a1, z1, n1, tmp5, tmp6, tmp7;
          param03 = _deforest_K_s;
          param12 = _deforest_K_c1;
          param21 = _deforest_K_c2;
          param31 = _deforest_K_i;
          a1 = param12;
          z1 = param21;
          n1 = param31;
          tmp5 = cichelli.assoc(a1, cvs);
          tmp6 = n1 + tmp5;
          tmp7 = cichelli.assoc(z1, cvs);
          return tmp6 + tmp7
        };
        tmp4 = hash_inst_11_26_tsni(newCharAssocs, tmp3);
        scrut1 = cichelli.hinsert(tmp4, keyHashSet);
        if (scrut1 instanceof NofibPrelude.None.class) {
          return runtime.safeCall(cichelli.NotEver(1))
        } else if (scrut1 instanceof NofibPrelude.Some.class) {
          param02 = scrut1.x;
          newKeyHashSet = param02;
          return findhash__inst_11_tsni(newKeyHashSet, newCharAssocs, ks1)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = assocm_inst_11_10_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (tryy1, a1, z1) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(tryy1, a1, z1, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(tryy, a, z))
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
assocm_inst_11_10_tsni = function assocm_inst_11_10_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (tryy, a, z1, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1, lambda;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            lambda = (undefined, function (n) {
              let arr, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
              arr = [
                z1,
                n
              ];
              _deforest_Cons_head = arr;
              _deforest_Cons_tail = (ys) => {
                return match_xs_arm_Nil_inst_11_27_tsni(ys)
              };
              tmp2 = (ys) => {
                return match_xs_arm_Cons_inst_11_27_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              };
              return tryy(tmp2)
            });
            tmp = lambda;
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy((ys) => {
              return match_xs_arm_Nil_inst_11_27_tsni(ys)
            })
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        return assocm_inst_11_10_tsni(x, yzs)
      }
    } else {
      return (tryy, a, z1, first11) => {
        return match_first0_arm_None_inst_11_tsni(tryy, a, z1, first11)
      }
    }
  } else {
    return (tryy, a, z1, first11) => {
      return match_first0_arm_None_inst_11_tsni(tryy, a, z1, first11)
    }
  }
};
enumFromTo_lz_inst_11_12_tsni = function enumFromTo_lz_inst_11_12_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_11_12_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp2, lscomp1, m, ms) => {
        let param0, param1, n, ns, tmp3, lambda1;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        n = param0;
        ns = param1;
        lambda1 = (undefined, function () {
          let arr, tmp4;
          arr = [
            m,
            n
          ];
          tmp4 = lscomp2(ns);
          return NofibPrelude.LzCons(arr, tmp4)
        });
        tmp3 = lambda1;
        return NofibPrelude.lazy(tmp3)
      }
    } else {
      return (lscomp2, lscomp1, m, ms) => {
        return lscomp1(ms)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
enumFromTo_lz_inst_11_13_tsni = function enumFromTo_lz_inst_11_13_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_11_13_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp1) => {
        let lscomp2, param0, param1, m, ms, tmp3, tmp4;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        m = param0;
        ms = param1;
        lscomp2 = function lscomp2(ls2) {
          let scrut1;
          scrut1 = NofibPrelude.force(ls2);
          return runtime.safeCall(scrut1(lscomp2, lscomp1, m, ms))
        };
        tmp3 = enumFromTo_lz_inst_11_12_tsni(0, cichelli.maxval);
        tmp4 = lscomp2(tmp3);
        return NofibPrelude.force(tmp4)
      }
    } else {
      return (lscomp1) => {
        return NofibPrelude.LzNil
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
findhash_inst_14_tsni = function findhash_inst_14_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_14_11_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_14_11_tsni = function findhash__inst_14_11_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
enumFromTo_lz_inst_14_11_12_tsni = function enumFromTo_lz_inst_14_11_12_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_14_11_12_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp2, lscomp1, m, ms) => {
        let param0, param1, n, ns, tmp3, lambda1;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        n = param0;
        ns = param1;
        lambda1 = (undefined, function () {
          let arr, tmp4;
          arr = [
            m,
            n
          ];
          tmp4 = lscomp2(ns);
          return NofibPrelude.LzCons(arr, tmp4)
        });
        tmp3 = lambda1;
        return NofibPrelude.lazy(tmp3)
      }
    } else {
      return (lscomp2, lscomp1, m, ms) => {
        return lscomp1(ms)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
enumFromTo_lz_inst_14_11_13_tsni = function enumFromTo_lz_inst_14_11_13_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_14_11_13_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp1) => {
        let lscomp2, param0, param1, m, ms, tmp3, tmp4;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        m = param0;
        ms = param1;
        lscomp2 = function lscomp2(ls2) {
          let scrut1;
          scrut1 = NofibPrelude.force(ls2);
          return runtime.safeCall(scrut1(lscomp2, lscomp1, m, ms))
        };
        tmp3 = enumFromTo_lz_inst_14_11_12_tsni(0, cichelli.maxval);
        tmp4 = lscomp2(tmp3);
        return NofibPrelude.force(tmp4)
      }
    } else {
      return (lscomp1) => {
        return NofibPrelude.LzNil
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
assocm_inst_14_11_10_tsni = function assocm_inst_14_11_10_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (tryy, a, z1, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1, lambda;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            lambda = (undefined, function (n) {
              let arr, tmp2;
              arr = [
                z1,
                n
              ];
              tmp2 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
              return tryy(tmp2)
            });
            tmp = lambda;
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy(NofibPrelude.Nil)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        return assocm_inst_14_11_10_tsni(x, yzs)
      }
    } else {
      return (tryy, a, z1, first11) => {
        return match_first0_arm_None_inst_14_11_tsni(tryy, a, z1, first11)
      }
    }
  } else {
    return (tryy, a, z1, first11) => {
      return match_first0_arm_None_inst_14_11_tsni(tryy, a, z1, first11)
    }
  }
};
blocked_inst_15_tsni = function blocked_inst_15_tsni(ls) {
  return blocked__inst_15_9_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_15_9_tsni = function blocked__inst_15_9_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_15_9_5_tsni(k);
    tmp1 = union_inst_15_9_23_tsni(ds, tmp);
    ds_ = tmp1;
    lambda = (undefined, function (x) {
      let tmp4;
      tmp4 = ends_inst_15_9_6_tsni(x);
      return subset_inst_15_9_24_tsni(tmp4, ds_)
    });
    scrut = partition__inst_15_9_7_tsni(lambda, ks);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_15_9_tsni(ds_, rest);
      tmp3 = append_inst_15_9_16_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_15_9_7_tsni = function partition__inst_15_9_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_15_9_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_15_9_7_8_tsni = function select_inst_15_9_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_15_9_16_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_15_9_6_tsni = function ends_inst_15_9_6_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_15_9_24_25_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_15_9_24_25_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_15_9_5_tsni = function ends_inst_15_9_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_15_9_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_15_9_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_15_9_16_tsni = function append_inst_15_9_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_tsni = function append_inst_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
take_inst_18_tsni = function take_inst_18_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_28_3_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_28_3_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_18_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cichelli_inst_19_tsni = function cichelli_inst_19_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_19_18_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_19_17_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_19_28_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_19_15_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_19_14_tsni(hashkeys)
};
take_inst_19_18_tsni = function take_inst_19_18_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_19_28_3_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_19_28_3_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_19_18_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_19_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_19_17_tsni = function append_inst_19_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_19_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_19_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
blocked_inst_19_15_tsni = function blocked_inst_19_15_tsni(ls) {
  return blocked__inst_19_15_9_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_19_15_9_tsni = function blocked__inst_19_15_9_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_19_15_9_5_tsni(k);
    tmp1 = union_inst_19_15_9_23_tsni(ds, tmp);
    ds_ = tmp1;
    lambda = (undefined, function (x) {
      let tmp4;
      tmp4 = ends_inst_19_15_9_6_tsni(x);
      return subset_inst_19_15_9_24_tsni(tmp4, ds_)
    });
    scrut = partition__inst_19_15_9_7_tsni(lambda, ks);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_19_15_9_tsni(ds_, rest);
      tmp3 = append_inst_19_15_9_16_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_19_15_9_5_tsni = function ends_inst_19_15_9_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_19_15_9_6_tsni = function ends_inst_19_15_9_6_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_19_15_9_24_25_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_19_15_9_24_25_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_19_15_9_7_tsni = function partition__inst_19_15_9_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_19_15_9_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_19_15_9_7_8_tsni = function select_inst_19_15_9_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_19_15_9_16_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
findhash_inst_19_14_tsni = function findhash_inst_19_14_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_19_14_11_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_19_14_11_tsni = function findhash__inst_19_14_11_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
assocm_inst_19_14_11_10_tsni = function assocm_inst_19_14_11_10_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (tryy, a, z1, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1, lambda;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            lambda = (undefined, function (n) {
              let arr, tmp2;
              arr = [
                z1,
                n
              ];
              tmp2 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
              return tryy(tmp2)
            });
            tmp = lambda;
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy(NofibPrelude.Nil)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        return assocm_inst_19_14_11_10_tsni(x, yzs)
      }
    } else {
      return (tryy, a, z1, first11) => {
        return match_first0_arm_None_inst_19_14_11_tsni(tryy, a, z1, first11)
      }
    }
  } else {
    return (tryy, a, z1, first11) => {
      return match_first0_arm_None_inst_19_14_11_tsni(tryy, a, z1, first11)
    }
  }
};
enumFromTo_lz_inst_19_14_11_12_tsni = function enumFromTo_lz_inst_19_14_11_12_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_19_14_11_12_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp2, lscomp1, m, ms) => {
        let param0, param1, n, ns, tmp3, lambda1;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        n = param0;
        ns = param1;
        lambda1 = (undefined, function () {
          let arr, tmp4;
          arr = [
            m,
            n
          ];
          tmp4 = lscomp2(ns);
          return NofibPrelude.LzCons(arr, tmp4)
        });
        tmp3 = lambda1;
        return NofibPrelude.lazy(tmp3)
      }
    } else {
      return (lscomp2, lscomp1, m, ms) => {
        return lscomp1(ms)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
enumFromTo_lz_inst_19_14_11_13_tsni = function enumFromTo_lz_inst_19_14_11_13_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_19_14_11_13_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp1) => {
        let lscomp2, param0, param1, m, ms, tmp3, tmp4;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        m = param0;
        ms = param1;
        lscomp2 = function lscomp2(ls2) {
          let scrut1;
          scrut1 = NofibPrelude.force(ls2);
          return runtime.safeCall(scrut1(lscomp2, lscomp1, m, ms))
        };
        tmp3 = enumFromTo_lz_inst_19_14_11_12_tsni(0, cichelli.maxval);
        tmp4 = lscomp2(tmp3);
        return NofibPrelude.force(tmp4)
      }
    } else {
      return (lscomp1) => {
        return NofibPrelude.LzNil
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
append_inst_19_15_9_16_tsni = function append_inst_19_15_9_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
prog_inst_20_tsni = function prog_inst_20_tsni(n) {
  return cichelli_inst_20_19_tsni(n)
};
cichelli_inst_20_19_tsni = function cichelli_inst_20_19_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_20_19_18_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_20_19_17_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_20_19_28_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_20_19_15_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_20_19_14_tsni(hashkeys)
};
findhash_inst_20_19_14_tsni = function findhash_inst_20_19_14_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_20_19_14_11_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_20_19_14_11_tsni = function findhash__inst_20_19_14_11_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
enumFromTo_lz_inst_20_19_14_11_12_tsni = function enumFromTo_lz_inst_20_19_14_11_12_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_20_19_14_11_12_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp2, lscomp1, m, ms) => {
        let param0, param1, n, ns, tmp3, lambda1;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        n = param0;
        ns = param1;
        lambda1 = (undefined, function () {
          let arr, tmp4;
          arr = [
            m,
            n
          ];
          tmp4 = lscomp2(ns);
          return NofibPrelude.LzCons(arr, tmp4)
        });
        tmp3 = lambda1;
        return NofibPrelude.lazy(tmp3)
      }
    } else {
      return (lscomp2, lscomp1, m, ms) => {
        return lscomp1(ms)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
enumFromTo_lz_inst_20_19_14_11_13_tsni = function enumFromTo_lz_inst_20_19_14_11_13_tsni(a, b) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = a <= b;
    if (scrut === true) {
      tmp1 = a + 1;
      tmp2 = enumFromTo_lz_inst_20_19_14_11_13_tsni(tmp1, b);
      _deforest_LzCons_head = a;
      _deforest_LzCons_tail = tmp2;
      return (lscomp1) => {
        let lscomp2, param0, param1, m, ms, tmp3, tmp4;
        param0 = _deforest_LzCons_head;
        param1 = _deforest_LzCons_tail;
        m = param0;
        ms = param1;
        lscomp2 = function lscomp2(ls2) {
          let scrut1;
          scrut1 = NofibPrelude.force(ls2);
          return runtime.safeCall(scrut1(lscomp2, lscomp1, m, ms))
        };
        tmp3 = enumFromTo_lz_inst_20_19_14_11_12_tsni(0, cichelli.maxval);
        tmp4 = lscomp2(tmp3);
        return NofibPrelude.force(tmp4)
      }
    } else {
      return (lscomp1) => {
        return NofibPrelude.LzNil
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
assocm_inst_20_19_14_11_10_tsni = function assocm_inst_20_19_14_11_10_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (tryy, a, z1, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1, lambda;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            lambda = (undefined, function (n) {
              let arr, tmp2;
              arr = [
                z1,
                n
              ];
              tmp2 = NofibPrelude.Cons(arr, NofibPrelude.Nil);
              return tryy(tmp2)
            });
            tmp = lambda;
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy(NofibPrelude.Nil)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        return assocm_inst_20_19_14_11_10_tsni(x, yzs)
      }
    } else {
      return (tryy, a, z1, first11) => {
        return match_first0_arm_None_inst_20_19_14_11_tsni(tryy, a, z1, first11)
      }
    }
  } else {
    return (tryy, a, z1, first11) => {
      return match_first0_arm_None_inst_20_19_14_11_tsni(tryy, a, z1, first11)
    }
  }
};
blocked_inst_20_19_15_tsni = function blocked_inst_20_19_15_tsni(ls) {
  return blocked__inst_20_19_15_9_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_20_19_15_9_tsni = function blocked__inst_20_19_15_9_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_20_19_15_9_5_tsni(k);
    tmp1 = union_inst_20_19_15_9_23_tsni(ds, tmp);
    ds_ = tmp1;
    lambda = (undefined, function (x) {
      let tmp4;
      tmp4 = ends_inst_20_19_15_9_6_tsni(x);
      return subset_inst_20_19_15_9_24_tsni(tmp4, ds_)
    });
    scrut = partition__inst_20_19_15_9_7_tsni(lambda, ks);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_20_19_15_9_tsni(ds_, rest);
      tmp3 = append_inst_20_19_15_9_16_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_20_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
partition__inst_20_19_15_9_7_tsni = function partition__inst_20_19_15_9_7_tsni(p, ls) {
  let arr, lambda;
  arr = [
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ];
  lambda = (undefined, function (x, y) {
    return select_inst_20_19_15_9_7_8_tsni(p, x, y)
  });
  return NofibPrelude.foldr(lambda, arr, ls)
};
select_inst_20_19_15_9_7_8_tsni = function select_inst_20_19_15_9_7_8_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
    first0 = ts_fs[0];
    first1 = ts_fs[1];
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_20_19_15_9_16_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_20_19_14_11_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = [
        tmp,
        fs
      ];
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = [
        ts,
        tmp1
      ];
      return arr1
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_20_19_15_9_6_tsni = function ends_inst_20_19_15_9_6_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_20_19_15_9_24_25_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_20_19_15_9_24_25_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
ends_inst_20_19_15_9_5_tsni = function ends_inst_20_19_15_9_5_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (lscomp, xs) => {
      return NofibPrelude.Nil
    };
    tmp = (lscomp, xs) => {
      return match_ls_arm_Cons_inst_20_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (lscomp, xs) => {
      return match_ls_arm_Cons_inst_20_19_15_9_23_tsni(lscomp, xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_20_19_15_9_16_tsni = function append_inst_20_19_15_9_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_19_17_tsni = function append_inst_20_19_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_20_19_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_20_19_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
take_inst_20_19_18_tsni = function take_inst_20_19_18_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_20_19_28_3_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_20_19_28_3_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_20_19_18_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_20_19_28_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_21_tsni = function concat_inst_21_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_22_tsni = function append_inst_21_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
union_inst_4_23_tsni = function union_inst_4_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
subset_inst_4_24_tsni = function subset_inst_4_24_tsni(xs, ys) {
  let lambda;
  lambda = (undefined, function (x) {
    return NofibPrelude.inList(x, ys)
  });
  return all_inst_4_24_25_tsni(lambda, xs)
};
all_inst_4_24_25_tsni = function all_inst_4_24_25_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
append_inst_4_16_tsni = function append_inst_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_tsni = function append_inst_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
union_inst_23_tsni = function union_inst_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
union_inst_9_23_tsni = function union_inst_9_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
subset_inst_9_24_tsni = function subset_inst_9_24_tsni(xs, ys) {
  let lambda;
  lambda = (undefined, function (x) {
    return NofibPrelude.inList(x, ys)
  });
  return all_inst_9_24_25_tsni(lambda, xs)
};
all_inst_9_24_25_tsni = function all_inst_9_24_25_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
append_inst_9_16_tsni = function append_inst_9_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_11_26_tsni = function hash_inst_11_26_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_11_27_tsni = function append_inst_11_27_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_14_11_26_tsni = function hash_inst_14_11_26_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
subset_inst_15_9_24_tsni = function subset_inst_15_9_24_tsni(xs, ys) {
  let lambda;
  lambda = (undefined, function (x) {
    return NofibPrelude.inList(x, ys)
  });
  return all_inst_15_9_24_25_tsni(lambda, xs)
};
all_inst_15_9_24_25_tsni = function all_inst_15_9_24_25_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_15_9_23_tsni = function union_inst_15_9_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
attribkeys_inst_28_tsni = function attribkeys_inst_28_tsni(ks) {
  let tmp, lambda;
  lambda = (undefined, function (k) {
    let tmp1, tmp2, tmp3;
    tmp1 = NofibPrelude.head(k);
    tmp2 = cichelli.last(k);
    tmp3 = NofibPrelude.listLen(k);
    return runtime.safeCall(cichelli.K(k, tmp1, tmp2, tmp3))
  });
  tmp = lambda;
  return map_inst_28_3_tsni(tmp, ks)
};
map_inst_28_3_tsni = function map_inst_28_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
attribkeys_inst_19_28_tsni = function attribkeys_inst_19_28_tsni(ks) {
  let tmp, lambda;
  lambda = (undefined, function (k) {
    let tmp1, tmp2, tmp3;
    tmp1 = NofibPrelude.head(k);
    tmp2 = cichelli.last(k);
    tmp3 = NofibPrelude.listLen(k);
    return runtime.safeCall(cichelli.K(k, tmp1, tmp2, tmp3))
  });
  tmp = lambda;
  return map_inst_19_28_3_tsni(tmp, ks)
};
map_inst_19_28_3_tsni = function map_inst_19_28_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
union_inst_19_15_9_23_tsni = function union_inst_19_15_9_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
subset_inst_19_15_9_24_tsni = function subset_inst_19_15_9_24_tsni(xs, ys) {
  let lambda;
  lambda = (undefined, function (x) {
    return NofibPrelude.inList(x, ys)
  });
  return all_inst_19_15_9_24_25_tsni(lambda, xs)
};
all_inst_19_15_9_24_25_tsni = function all_inst_19_15_9_24_25_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
hash_inst_19_14_11_26_tsni = function hash_inst_19_14_11_26_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_20_19_14_11_26_tsni = function hash_inst_20_19_14_11_26_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
subset_inst_20_19_15_9_24_tsni = function subset_inst_20_19_15_9_24_tsni(xs, ys) {
  let lambda;
  lambda = (undefined, function (x) {
    return NofibPrelude.inList(x, ys)
  });
  return all_inst_20_19_15_9_24_25_tsni(lambda, xs)
};
all_inst_20_19_15_9_24_25_tsni = function all_inst_20_19_15_9_24_25_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_20_19_15_9_23_tsni = function union_inst_20_19_15_9_23_tsni(xs, ys) {
  let lscomp, tmp;
  lscomp = function lscomp(ls) {
    return runtime.safeCall(ls(lscomp, xs))
  };
  tmp = lscomp(ys);
  return NofibPrelude.append(xs, tmp)
};
attribkeys_inst_20_19_28_tsni = function attribkeys_inst_20_19_28_tsni(ks) {
  let tmp, lambda;
  lambda = (undefined, function (k) {
    let tmp1, tmp2, tmp3;
    tmp1 = NofibPrelude.head(k);
    tmp2 = cichelli.last(k);
    tmp3 = NofibPrelude.listLen(k);
    return runtime.safeCall(cichelli.K(k, tmp1, tmp2, tmp3))
  });
  tmp = lambda;
  return map_inst_20_19_28_3_tsni(tmp, ks)
};
map_inst_20_19_28_3_tsni = function map_inst_20_19_28_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class cichelli {
  static {
    cichelli1 = cichelli;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49;
    tmp = NofibPrelude.nofibStringToList("case");
    tmp1 = NofibPrelude.nofibStringToList("class");
    tmp2 = NofibPrelude.nofibStringToList("data");
    tmp3 = NofibPrelude.nofibStringToList("default");
    tmp4 = NofibPrelude.nofibStringToList("deriving");
    tmp5 = NofibPrelude.nofibStringToList("else");
    tmp6 = NofibPrelude.nofibStringToList("hiding");
    tmp7 = NofibPrelude.nofibStringToList("if");
    tmp8 = NofibPrelude.nofibStringToList("import");
    tmp9 = NofibPrelude.nofibStringToList("in");
    tmp10 = NofibPrelude.nofibStringToList("infix");
    tmp11 = NofibPrelude.nofibStringToList("infixl");
    tmp12 = NofibPrelude.nofibStringToList("instance");
    tmp13 = NofibPrelude.nofibStringToList("interface");
    tmp14 = NofibPrelude.nofibStringToList("let");
    tmp15 = NofibPrelude.nofibStringToList("module");
    tmp16 = NofibPrelude.nofibStringToList("of");
    tmp17 = NofibPrelude.nofibStringToList("renaming");
    tmp18 = NofibPrelude.nofibStringToList("then");
    tmp19 = NofibPrelude.nofibStringToList("to");
    tmp20 = NofibPrelude.nofibStringToList("type");
    tmp21 = NofibPrelude.nofibStringToList("where");
    tmp22 = NofibPrelude.Cons(tmp21, NofibPrelude.Nil);
    tmp23 = NofibPrelude.Cons(tmp20, tmp22);
    tmp24 = NofibPrelude.Cons(tmp19, tmp23);
    tmp25 = NofibPrelude.Cons(tmp18, tmp24);
    tmp26 = NofibPrelude.Cons(tmp17, tmp25);
    tmp27 = NofibPrelude.Cons(tmp16, tmp26);
    tmp28 = NofibPrelude.Cons(tmp15, tmp27);
    tmp29 = NofibPrelude.Cons(tmp14, tmp28);
    tmp30 = NofibPrelude.Cons(tmp13, tmp29);
    tmp31 = NofibPrelude.Cons(tmp12, tmp30);
    tmp32 = NofibPrelude.Cons(tmp11, tmp31);
    tmp33 = NofibPrelude.Cons(tmp10, tmp32);
    tmp34 = NofibPrelude.Cons(tmp9, tmp33);
    tmp35 = NofibPrelude.Cons(tmp8, tmp34);
    tmp36 = NofibPrelude.Cons(tmp7, tmp35);
    tmp37 = NofibPrelude.Cons(tmp6, tmp36);
    tmp38 = NofibPrelude.Cons(tmp5, tmp37);
    tmp39 = NofibPrelude.Cons(tmp4, tmp38);
    tmp40 = NofibPrelude.Cons(tmp3, tmp39);
    tmp41 = NofibPrelude.Cons(tmp2, tmp40);
    tmp42 = NofibPrelude.Cons(tmp1, tmp41);
    tmp43 = NofibPrelude.Cons(tmp, tmp42);
    this.keys = tmp43;
    this.K = function K(s1, c11, c21, i1) {
      return new K.class(s1, c11, c21, i1);
    };
    this.K.class = class K {
      constructor(s, c1, c2, i) {
        this.s = s;
        this.c1 = c1;
        this.c2 = c2;
        this.i = i;
      }
      toString() { return "K(" + runtime.render(this.s) + ", " + runtime.render(this.c1) + ", " + runtime.render(this.c2) + ", " + runtime.render(this.i) + ")"; }
    };
    this.H = function H(f1, s1, ls1) {
      return new H.class(f1, s1, ls1);
    };
    this.H.class = class H {
      constructor(f, s, ls) {
        this.f = f;
        this.s = s;
        this.ls = ls;
      }
      toString() { return "H(" + runtime.render(this.f) + ", " + runtime.render(this.s) + ", " + runtime.render(this.ls) + ")"; }
    };
    tmp44 = NofibPrelude.listLen(cichelli.keys);
    this.numberofkeys = tmp44;
    tmp45 = attribkeys_inst_2_tsni(cichelli.keys);
    tmp46 = map_inst_0_tsni(ends_inst_1_tsni, tmp45);
    tmp47 = concat_inst_21_tsni(tmp46);
    tmp48 = cichelli.histo(tmp47);
    this.freqtab = tmp48;
    tmp49 = NofibPrelude.listLen(cichelli.freqtab);
    this.maxval = tmp49;
    this.Status = class Status {
      constructor() {}
      toString() { return "Status"; }
    };
    this.NotEver = function NotEver(i1) {
      return new NotEver.class(i1);
    };
    this.NotEver.class = class NotEver extends cichelli.Status {
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return "NotEver(" + runtime.render(this.i) + ")"; }
    };
    this.YesIts = function YesIts(i1, t1) {
      return new YesIts.class(i1, t1);
    };
    this.YesIts.class = class YesIts extends cichelli.Status {
      constructor(i, t) {
        super();
        this.i = i;
        this.t = t;
      }
      toString() { return "YesIts(" + runtime.render(this.i) + ", " + runtime.render(this.t) + ")"; }
    };
  }
  static enumFromTo_lz(a, b) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, tmp1, tmp2;
      scrut = a <= b;
      if (scrut === true) {
        tmp1 = a + 1;
        tmp2 = cichelli.enumFromTo_lz(tmp1, b);
        return NofibPrelude.LzCons(a, tmp2)
      } else {
        return NofibPrelude.LzNil
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static last(ls) {
    let go, param0, param1, h, t;
    go = function go(h1, t1) {
      let param01, param11, head, t2;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h1
      } else if (t1 instanceof NofibPrelude.Cons.class) {
        param01 = t1.head;
        param11 = t1.tail;
        head = param01;
        t2 = param11;
        return go(head, t2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      return go(h, t)
    } else {
      throw globalThis.Error("last: empty list");
    }
  } 
  static ends(k) {
    let param0, param1, param2, param3, a1, z, tmp;
    if (k instanceof cichelli.K.class) {
      param0 = k.s;
      param1 = k.c1;
      param2 = k.c2;
      param3 = k.i;
      a1 = param1;
      z = param2;
      tmp = NofibPrelude.Cons(z, NofibPrelude.Nil);
      return NofibPrelude.Cons(a1, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static assoc(x, yz) {
    let param0, param1, first1, first0, y, z, yzs, scrut;
    if (yz instanceof NofibPrelude.Cons.class) {
      param0 = yz.head;
      param1 = yz.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        y = first0;
        z = first1;
        yzs = param1;
        scrut = x === y;
        if (scrut === true) {
          return z
        } else {
          return cichelli.assoc(x, yzs)
        }
      } else {
        throw globalThis.Error("assoc: not found");
      }
    } else {
      throw globalThis.Error("assoc: not found");
    }
  } 
  static assocm(x1, yz1) {
    let param0, param1, first1, first0, y, z, yzs, scrut;
    if (yz1 instanceof NofibPrelude.Cons.class) {
      param0 = yz1.head;
      param1 = yz1.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        y = first0;
        z = first1;
        yzs = param1;
        scrut = x1 === y;
        if (scrut === true) {
          return runtime.safeCall(NofibPrelude.Some(z))
        } else {
          return cichelli.assocm(x1, yzs)
        }
      } else {
        return NofibPrelude.None
      }
    } else {
      return NofibPrelude.None
    }
  } 
  static histins(x2, yns) {
    let param0, param1, first1, first0, y, n, yns1, scrut, tmp, arr, arr1, tmp1, arr2, arr3;
    if (yns instanceof NofibPrelude.Cons.class) {
      param0 = yns.head;
      param1 = yns.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        y = first0;
        n = first1;
        yns1 = param1;
        scrut = x2 === y;
        if (scrut === true) {
          tmp = n + 1;
          arr = [
            y,
            tmp
          ];
          return NofibPrelude.Cons(arr, yns1)
        } else {
          arr1 = [
            y,
            n
          ];
          tmp1 = cichelli.histins(x2, yns1);
          return NofibPrelude.Cons(arr1, tmp1)
        }
      } else {
        arr2 = [
          x2,
          1
        ];
        return NofibPrelude.Cons(arr2, NofibPrelude.Nil)
      }
    } else {
      arr3 = [
        x2,
        1
      ];
      return NofibPrelude.Cons(arr3, NofibPrelude.Nil)
    }
  } 
  static histo(ls1) {
    return NofibPrelude.foldr(cichelli.histins, NofibPrelude.Nil, ls1)
  } 
  static subset(xs, ys) {
    let lambda;
    lambda = (undefined, function (x3) {
      return NofibPrelude.inList(x3, ys)
    });
    return NofibPrelude.all(lambda, xs)
  } 
  static union(xs1, ys1) {
    let lscomp, tmp;
    lscomp = function lscomp(ls2) {
      let param0, param1, h, t, scrut, tmp1, tmp2;
      if (ls2 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls2 instanceof NofibPrelude.Cons.class) {
        param0 = ls2.head;
        param1 = ls2.tail;
        h = param0;
        t = param1;
        tmp1 = NofibPrelude.inList(h, xs1);
        scrut = Predef.not(tmp1);
        if (scrut === true) {
          tmp2 = lscomp(t);
          return NofibPrelude.Cons(h, tmp2)
        } else {
          return lscomp(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp(ys1);
    return NofibPrelude.append(xs1, tmp)
  } 
  static attribkeys(ks) {
    let tmp, lambda;
    lambda = (undefined, function (k1) {
      let tmp1, tmp2, tmp3;
      tmp1 = NofibPrelude.head(k1);
      tmp2 = cichelli.last(k1);
      tmp3 = NofibPrelude.listLen(k1);
      return runtime.safeCall(cichelli.K(k1, tmp1, tmp2, tmp3))
    });
    tmp = lambda;
    return NofibPrelude.map(tmp, ks)
  } 
  static minm(x3, y) {
    let param0, x4;
    if (x3 instanceof NofibPrelude.None.class) {
      return y
    } else if (x3 instanceof NofibPrelude.Some.class) {
      param0 = x3.x;
      x4 = param0;
      return NofibPrelude.min(x4, y)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static maxm(x4, y1) {
    let param0, x5;
    if (x4 instanceof NofibPrelude.None.class) {
      return y1
    } else if (x4 instanceof NofibPrelude.Some.class) {
      param0 = x4.x;
      x5 = param0;
      return NofibPrelude.max(x5, y1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static hash(cvs, k1) {
    let param0, param1, param2, param3, a1, z, n, tmp, tmp1, tmp2;
    if (k1 instanceof cichelli.K.class) {
      param0 = k1.s;
      param1 = k1.c1;
      param2 = k1.c2;
      param3 = k1.i;
      a1 = param1;
      z = param2;
      n = param3;
      tmp = cichelli.assoc(a1, cvs);
      tmp1 = n + tmp;
      tmp2 = cichelli.assoc(z, cvs);
      return tmp1 + tmp2
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static select(p, x5, ts_fs) {
    let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1;
    if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
      first0 = ts_fs[0];
      first1 = ts_fs[1];
      ts = first0;
      fs = first1;
      scrut = runtime.safeCall(p(x5));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x5, ts);
        arr = [
          tmp,
          fs
        ];
        return arr
      } else {
        tmp1 = NofibPrelude.Cons(x5, fs);
        arr1 = [
          ts,
          tmp1
        ];
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static partition_(p1, ls2) {
    let arr, lambda;
    arr = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    lambda = (undefined, function (x6, y2) {
      return cichelli.select(p1, x6, y2)
    });
    return NofibPrelude.foldr(lambda, arr, ls2)
  } 
  static freqsorted(x6) {
    return x6
  } 
  static blocked_(ds, ls3) {
    let param0, param1, k2, ks1, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda;
    if (ls3 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls3 instanceof NofibPrelude.Cons.class) {
      param0 = ls3.head;
      param1 = ls3.tail;
      k2 = param0;
      ks1 = param1;
      tmp = ends_inst_5_tsni(k2);
      tmp1 = union_inst_23_tsni(ds, tmp);
      ds_ = tmp1;
      lambda = (undefined, function (x7) {
        let tmp4;
        tmp4 = cichelli.ends(x7);
        return cichelli.subset(tmp4, ds_)
      });
      scrut = partition__inst_7_tsni(lambda, ks1);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        det = first0;
        rest = first1;
        tmp2 = blocked__inst_4_tsni(ds_, rest);
        tmp3 = append_inst_16_tsni(det, tmp2);
        return NofibPrelude.Cons(k2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static blocked(ls4) {
    return blocked__inst_9_tsni(NofibPrelude.Nil, ls4)
  } 
  static hinsert(h, hh) {
    let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (hh instanceof cichelli.H.class) {
      param0 = hh.f;
      param1 = hh.s;
      param2 = hh.ls;
      lo = param0;
      hi = param1;
      hs = param2;
      tmp = cichelli.minm(lo, h);
      lo_ = tmp;
      tmp1 = cichelli.maxm(hi, h);
      hi_ = tmp1;
      tmp2 = NofibPrelude.inList(h, hs);
      tmp3 = 1 + hi_;
      tmp4 = tmp3 - lo_;
      tmp5 = tmp4 > cichelli.numberofkeys;
      scrut = tmp2 || tmp5;
      if (scrut === true) {
        return NofibPrelude.None
      } else {
        tmp6 = runtime.safeCall(NofibPrelude.Some(lo_));
        tmp7 = runtime.safeCall(NofibPrelude.Some(hi_));
        tmp8 = NofibPrelude.Cons(h, hs);
        tmp9 = runtime.safeCall(cichelli.H(tmp6, tmp7, tmp8));
        return runtime.safeCall(NofibPrelude.Some(tmp9))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static first(k2, ls5) {
    let scrut, param0, param1, a1, l, param01, leaves, param11, leaves1, y2, tmp, tmp1;
    scrut = NofibPrelude.force(ls5);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return runtime.safeCall(cichelli.NotEver(k2))
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      a1 = param0;
      l = param1;
      if (a1 instanceof cichelli.YesIts.class) {
        param01 = a1.i;
        param11 = a1.t;
        leaves1 = param01;
        y2 = param11;
        tmp = k2 + leaves1;
        return cichelli.YesIts(tmp, y2)
      } else if (a1 instanceof cichelli.NotEver.class) {
        param01 = a1.i;
        leaves = param01;
        tmp1 = k2 + leaves;
        return cichelli.first(tmp1, l)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static firstSuccess(f, possibles) {
    let tmp;
    tmp = NofibPrelude.map_lz(f, possibles);
    return cichelli.first(0, tmp)
  } 
  static findhash_(keyHashSet, charAssocs, ks1) {
    let tryy, param0, param1, param01, param11, param2, param3, s, a1, z, n, ks2, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (ks1 instanceof NofibPrelude.Nil.class) {
      return cichelli.YesIts(1, charAssocs)
    } else if (ks1 instanceof NofibPrelude.Cons.class) {
      param0 = ks1.head;
      param1 = ks1.tail;
      if (param0 instanceof cichelli.K.class) {
        param01 = param0.s;
        param11 = param0.c1;
        param2 = param0.c2;
        param3 = param0.i;
        s = param01;
        a1 = param11;
        z = param2;
        n = param3;
        ks2 = param1;
        tryy = function tryy(newAssocs) {
          let newCharAssocs, scrut1, param02, newKeyHashSet, tmp2, tmp3, tmp4;
          tmp2 = NofibPrelude.append(newAssocs, charAssocs);
          newCharAssocs = tmp2;
          tmp3 = runtime.safeCall(cichelli.K(s, a1, z, n));
          tmp4 = cichelli.hash(newCharAssocs, tmp3);
          scrut1 = cichelli.hinsert(tmp4, keyHashSet);
          if (scrut1 instanceof NofibPrelude.None.class) {
            return runtime.safeCall(cichelli.NotEver(1))
          } else if (scrut1 instanceof NofibPrelude.Some.class) {
            param02 = scrut1.x;
            newKeyHashSet = param02;
            return cichelli.findhash_(newKeyHashSet, newCharAssocs, ks2)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp = assocm_inst_10_tsni(a1, charAssocs);
        tmp1 = cichelli.assocm(z, charAssocs);
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = tmp1;
        arr = (tryy1, a2, z1) => {
          let first1, first0;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          return runtime.safeCall(first0(tryy1, a2, z1, first1))
        };
        scrut = arr;
        return runtime.safeCall(scrut(tryy, a1, z))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static findhash(keys) {
    let tmp;
    tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
    return findhash__inst_11_tsni(tmp, NofibPrelude.Nil, keys)
  } 
  static freq(c) {
    return cichelli.assoc(c, cichelli.freqtab)
  } 
  static morefreq(k11, k21) {
    let param0, param1, param2, param3, a1, x7, param01, param11, param21, param31, b1, y2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (k11 instanceof cichelli.K.class) {
      param0 = k11.s;
      param1 = k11.c1;
      param2 = k11.c2;
      param3 = k11.i;
      a1 = param1;
      x7 = param2;
      if (k21 instanceof cichelli.K.class) {
        param01 = k21.s;
        param11 = k21.c1;
        param21 = k21.c2;
        param31 = k21.i;
        b1 = param11;
        y2 = param21;
        tmp = cichelli.freq(a1);
        tmp1 = cichelli.freq(x7);
        tmp2 = tmp + tmp1;
        tmp3 = cichelli.freq(b1);
        tmp4 = cichelli.freq(y2);
        tmp5 = tmp3 + tmp4;
        return tmp2 > tmp5
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static cichelli(n) {
    let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = NofibPrelude.intMod(n, 2);
    tmp1 = take_inst_18_tsni(tmp, cichelli.keys);
    tmp2 = append_inst_17_tsni(cichelli.keys, tmp1);
    tmp3 = attribkeys_inst_28_tsni(tmp2);
    attribkeys_ = tmp3;
    tmp4 = cichelli.freqsorted(attribkeys_);
    tmp5 = blocked_inst_15_tsni(tmp4);
    hashkeys = tmp5;
    return findhash_inst_14_tsni(hashkeys)
  } 
  static prog(n1) {
    return cichelli_inst_19_tsni(n1)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_20_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "cichelli"; }
});
let cichelli = cichelli1; export default cichelli;
