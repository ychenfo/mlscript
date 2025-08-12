import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let boyer21, makelemmas_inst_0_tsni, strToToken_inst_0_1_tsni, getToken_inst_0_1_2_tsni, strToToken_inst_3_tsni, getToken_inst_3_2_tsni, getToken_inst_5_2_tsni, strToToken_inst_6_1_tsni, getToken_inst_6_1_2_tsni, strToToken_inst_7_8_tsni, getToken_inst_7_8_2_tsni, subterm_inst_9_10_tsni, strToToken_inst_9_10_8_tsni, getToken_inst_9_10_8_2_tsni, teststatement_inst_11_12_tsni, subterm_inst_11_12_10_tsni, strToToken_inst_11_12_10_8_tsni, getToken_inst_11_12_10_8_2_tsni, testresult_inst_13_14_tsni, teststatement_inst_13_14_12_tsni, subterm_inst_13_14_12_10_tsni, strToToken_inst_13_14_12_10_8_tsni, getToken_inst_13_14_12_10_8_2_tsni, testBoyer2_nofib_inst_15_16_tsni, testresult_inst_15_16_14_tsni, teststatement_inst_15_16_14_12_tsni, subterm_inst_15_16_14_12_10_tsni, strToToken_inst_15_16_14_12_10_8_tsni, getToken_inst_15_16_14_12_10_8_2_tsni, addlemmalst_inst_17_tsni, truep_inst_4_18_tsni, truep_inst_4_19_tsni, falsep_inst_4_20_tsni, truep_inst_4_21_tsni, falsep_inst_4_22_tsni, match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni, match_rules_arm_Cons_inst_0_tsni, match_scrut_arm_Deforest_Arr_2_inst_3_tsni, match_scrut_arm_Deforest_Arr_2_inst_5_tsni, match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni, match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni;
match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni = function match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(_deforest_Deforest_Arr_2_0_inst_0_1_tsni, _deforest_Deforest_Arr_2_1_inst_0_1_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_1_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_0_1_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_rules_arm_Cons_inst_0_tsni = function match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head_inst_0_tsni, _deforest_Cons_tail_inst_0_tsni) {
  let param0, param1, h, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_tsni;
  param1 = _deforest_Cons_tail_inst_0_tsni;
  h = param0;
  t = param1;
  tmp = strToToken_inst_0_1_tsni(h);
  tmp1 = boyer21.mkLispList(tmp);
  tmp2 = makelemmas_inst_0_tsni(t);
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp2;
  return (term) => {
    let param01, param11, h1, t1, tmp3;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h1 = param01;
    t1 = param11;
    tmp3 = boyer21.addlemma(h1, term);
    return addlemmalst_inst_17_tsni(t1, tmp3)
  }
};
match_scrut_arm_Deforest_Arr_2_inst_3_tsni = function match_scrut_arm_Deforest_Arr_2_inst_3_tsni(_deforest_Deforest_Arr_2_0_inst_3_tsni, _deforest_Deforest_Arr_2_1_inst_3_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_3_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_3_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_5_tsni = function match_scrut_arm_Deforest_Arr_2_inst_5_tsni(_deforest_Deforest_Arr_2_0_inst_5_tsni, _deforest_Deforest_Arr_2_1_inst_5_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_5_tsni;
  a = first0;
  b = first1;
  tmp = boyer2.strToToken(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni = function match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni(_deforest_Deforest_Arr_2_0_inst_6_1_tsni, _deforest_Deforest_Arr_2_1_inst_6_1_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_6_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_6_1_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_6_1_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_7_8_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni(_deforest_Deforest_Arr_2_0_inst_9_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_9_10_8_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_9_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_9_10_8_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_9_10_8_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(_deforest_Deforest_Arr_2_0_inst_11_12_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_12_10_8_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_12_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_12_10_8_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_11_12_10_8_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni(_deforest_Deforest_Arr_2_0_inst_13_14_12_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_13_14_12_10_8_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_13_14_12_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_13_14_12_10_8_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_13_14_12_10_8_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni(_deforest_Deforest_Arr_2_0_inst_15_16_14_12_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_15_16_14_12_10_8_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_16_14_12_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_16_14_12_10_8_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_15_16_14_12_10_8_tsni(b);
  return NofibPrelude.Cons(a, tmp)
};
makelemmas_inst_0_tsni = function makelemmas_inst_0_tsni(rules) {
  return runtime.safeCall(rules())
};
strToToken_inst_0_1_tsni = function strToToken_inst_0_1_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_0_1_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_0_1_2_tsni = function getToken_inst_0_1_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_0_1_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
strToToken_inst_3_tsni = function strToToken_inst_3_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_3_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_3_2_tsni = function getToken_inst_3_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_3_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_3_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_3_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_3_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
getToken_inst_5_2_tsni = function getToken_inst_5_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_5_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_5_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_5_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_5_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
strToToken_inst_6_1_tsni = function strToToken_inst_6_1_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_6_1_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_6_1_2_tsni = function getToken_inst_6_1_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_6_1_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_6_1_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
strToToken_inst_7_8_tsni = function strToToken_inst_7_8_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_7_8_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_7_8_2_tsni = function getToken_inst_7_8_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_7_8_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
subterm_inst_9_10_tsni = function subterm_inst_9_10_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_9_10_8_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_9_10_8_tsni = function strToToken_inst_9_10_8_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_9_10_8_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_9_10_8_2_tsni = function getToken_inst_9_10_8_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_9_10_8_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_9_10_8_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
teststatement_inst_11_12_tsni = function teststatement_inst_11_12_tsni(i) {
  let tmp;
  tmp = subterm_inst_11_12_10_tsni(i);
  return boyer2.applysubst(tmp, boyer2.statement)
};
subterm_inst_11_12_10_tsni = function subterm_inst_11_12_10_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_11_12_10_8_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_11_12_10_8_tsni = function strToToken_inst_11_12_10_8_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_11_12_10_8_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_11_12_10_8_2_tsni = function getToken_inst_11_12_10_8_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_11_12_10_8_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_11_12_10_8_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testresult_inst_13_14_tsni = function testresult_inst_13_14_tsni(i) {
  let tmp;
  tmp = teststatement_inst_13_14_12_tsni(i);
  return boyer2.tautp(tmp)
};
teststatement_inst_13_14_12_tsni = function teststatement_inst_13_14_12_tsni(i) {
  let tmp;
  tmp = subterm_inst_13_14_12_10_tsni(i);
  return boyer2.applysubst(tmp, boyer2.statement)
};
subterm_inst_13_14_12_10_tsni = function subterm_inst_13_14_12_10_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_13_14_12_10_8_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_13_14_12_10_8_tsni = function strToToken_inst_13_14_12_10_8_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_13_14_12_10_8_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_13_14_12_10_8_2_tsni = function getToken_inst_13_14_12_10_8_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_13_14_12_10_8_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_13_14_12_10_8_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testBoyer2_nofib_inst_15_16_tsni = function testBoyer2_nofib_inst_15_16_tsni(n) {
  let tmp;
  tmp = testresult_inst_15_16_14_tsni(n);
  return boyer2.report(tmp)
};
testresult_inst_15_16_14_tsni = function testresult_inst_15_16_14_tsni(i) {
  let tmp;
  tmp = teststatement_inst_15_16_14_12_tsni(i);
  return boyer2.tautp(tmp)
};
teststatement_inst_15_16_14_12_tsni = function teststatement_inst_15_16_14_12_tsni(i) {
  let tmp;
  tmp = subterm_inst_15_16_14_12_10_tsni(i);
  return boyer2.applysubst(tmp, boyer2.statement)
};
subterm_inst_15_16_14_12_10_tsni = function subterm_inst_15_16_14_12_10_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_15_16_14_12_10_8_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_15_16_14_12_10_8_tsni = function strToToken_inst_15_16_14_12_10_8_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_15_16_14_12_10_8_2_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_15_16_14_12_10_8_2_tsni = function getToken_inst_15_16_14_12_10_8_2_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_15_16_14_12_10_8_2_tsni(t)
    } else {
      tmp = h === "(";
      tmp1 = h === ")";
      scrut1 = tmp || tmp1;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp2;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp3;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_15_16_14_12_10_8_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
addlemmalst_inst_17_tsni = function addlemmalst_inst_17_tsni(lspls, term) {
  return runtime.safeCall(lspls(term))
};
truep_inst_4_18_tsni = function truep_inst_4_18_tsni(term_l) {
  return runtime.safeCall(term_l())
};
truep_inst_4_19_tsni = function truep_inst_4_19_tsni(term_l) {
  return runtime.safeCall(term_l())
};
falsep_inst_4_20_tsni = function falsep_inst_4_20_tsni(term_l) {
  return runtime.safeCall(term_l())
};
truep_inst_4_21_tsni = function truep_inst_4_21_tsni(term_l) {
  return runtime.safeCall(term_l())
};
falsep_inst_4_22_tsni = function falsep_inst_4_22_tsni(term_l) {
  return runtime.safeCall(term_l())
};
(class boyer2 {
  static {
    boyer21 = boyer2;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Cons_head12, _deforest_Cons_tail12, _deforest_Cons_head13, _deforest_Cons_tail13, _deforest_Cons_head14, _deforest_Cons_tail14, _deforest_Cons_head15, _deforest_Cons_tail15, _deforest_Cons_head16, _deforest_Cons_tail16, _deforest_Cons_head17, _deforest_Cons_tail17, _deforest_Cons_head18, _deforest_Cons_tail18, _deforest_Cons_head19, _deforest_Cons_tail19, _deforest_Cons_head20, _deforest_Cons_tail20, _deforest_Cons_head21, _deforest_Cons_tail21, _deforest_Cons_head22, _deforest_Cons_tail22, _deforest_Cons_head23, _deforest_Cons_tail23, _deforest_Cons_head24, _deforest_Cons_tail24, _deforest_Cons_head25, _deforest_Cons_tail25, _deforest_Cons_head26, _deforest_Cons_tail26, _deforest_Cons_head27, _deforest_Cons_tail27, _deforest_Cons_head28, _deforest_Cons_tail28, _deforest_Cons_head29, _deforest_Cons_tail29, _deforest_Cons_head30, _deforest_Cons_tail30, _deforest_Cons_head31, _deforest_Cons_tail31, _deforest_Cons_head32, _deforest_Cons_tail32, _deforest_Cons_head33, _deforest_Cons_tail33, _deforest_Cons_head34, _deforest_Cons_tail34, _deforest_Cons_head35, _deforest_Cons_tail35, _deforest_Cons_head36, _deforest_Cons_tail36, _deforest_Cons_head37, _deforest_Cons_tail37, _deforest_Cons_head38, _deforest_Cons_tail38, _deforest_Cons_head39, _deforest_Cons_tail39, _deforest_Cons_head40, _deforest_Cons_tail40, _deforest_Cons_head41, _deforest_Cons_tail41, _deforest_Cons_head42, _deforest_Cons_tail42, _deforest_Cons_head43, _deforest_Cons_tail43, _deforest_Cons_head44, _deforest_Cons_tail44, _deforest_Cons_head45, _deforest_Cons_tail45, _deforest_Cons_head46, _deforest_Cons_tail46, _deforest_Cons_head47, _deforest_Cons_tail47, _deforest_Cons_head48, _deforest_Cons_tail48, _deforest_Cons_head49, _deforest_Cons_tail49, _deforest_Cons_head50, _deforest_Cons_tail50, _deforest_Cons_head51, _deforest_Cons_tail51, _deforest_Cons_head52, _deforest_Cons_tail52, _deforest_Cons_head53, _deforest_Cons_tail53, _deforest_Cons_head54, _deforest_Cons_tail54, _deforest_Cons_head55, _deforest_Cons_tail55, _deforest_Cons_head56, _deforest_Cons_tail56, _deforest_Cons_head57, _deforest_Cons_tail57, _deforest_Cons_head58, _deforest_Cons_tail58, _deforest_Cons_head59, _deforest_Cons_tail59, _deforest_Cons_head60, _deforest_Cons_tail60, _deforest_Cons_head61, _deforest_Cons_tail61, _deforest_Cons_head62, _deforest_Cons_tail62, _deforest_Cons_head63, _deforest_Cons_tail63, _deforest_Cons_head64, _deforest_Cons_tail64, _deforest_Cons_head65, _deforest_Cons_tail65, _deforest_Cons_head66, _deforest_Cons_tail66, _deforest_Cons_head67, _deforest_Cons_tail67, _deforest_Cons_head68, _deforest_Cons_tail68, _deforest_Cons_head69, _deforest_Cons_tail69, _deforest_Cons_head70, _deforest_Cons_tail70, _deforest_Cons_head71, _deforest_Cons_tail71, _deforest_Cons_head72, _deforest_Cons_tail72, _deforest_Cons_head73, _deforest_Cons_tail73, _deforest_Cons_head74, _deforest_Cons_tail74, _deforest_Cons_head75, _deforest_Cons_tail75, _deforest_Cons_head76, _deforest_Cons_tail76, _deforest_Cons_head77, _deforest_Cons_tail77, _deforest_Cons_head78, _deforest_Cons_tail78, _deforest_Cons_head79, _deforest_Cons_tail79, _deforest_Cons_head80, _deforest_Cons_tail80, _deforest_Cons_head81, _deforest_Cons_tail81, _deforest_Cons_head82, _deforest_Cons_tail82, _deforest_Cons_head83, _deforest_Cons_tail83, _deforest_Cons_head84, _deforest_Cons_tail84, _deforest_Cons_head85, _deforest_Cons_tail85, _deforest_Cons_head86, _deforest_Cons_tail86, _deforest_Cons_head87, _deforest_Cons_tail87, _deforest_Cons_head88, _deforest_Cons_tail88, _deforest_Cons_head89, _deforest_Cons_tail89, _deforest_Cons_head90, _deforest_Cons_tail90, _deforest_Cons_head91, _deforest_Cons_tail91, _deforest_Cons_head92, _deforest_Cons_tail92, _deforest_Cons_head93, _deforest_Cons_tail93, _deforest_Cons_head94, _deforest_Cons_tail94, _deforest_Cons_head95, _deforest_Cons_tail95, _deforest_Cons_head96, _deforest_Cons_tail96, _deforest_Cons_head97, _deforest_Cons_tail97, _deforest_Cons_head98, _deforest_Cons_tail98, _deforest_Cons_head99, _deforest_Cons_tail99, _deforest_Cons_head100, _deforest_Cons_tail100, _deforest_Cons_head101, _deforest_Cons_tail101, _deforest_Cons_head102, _deforest_Cons_tail102, _deforest_Cons_head103, _deforest_Cons_tail103, _deforest_Cons_head104, _deforest_Cons_tail104, _deforest_Cons_head105, _deforest_Cons_tail105;
    this.Lisplist = class Lisplist {
      constructor() {}
      toString() { return "Lisplist"; }
    };
    const Nill$class = class Nill extends boyer2.Lisplist {
      constructor() {
        super();
      }
      toString() { return "Nill"; }
    };
    this.Nill = new Nill$class;
    this.Nill.class = Nill$class;
    this.Atom = function Atom(a1) {
      return new Atom.class(a1);
    };
    this.Atom.class = class Atom extends boyer2.Lisplist {
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return "Atom(" + runtime.render(this.a) + ")"; }
    };
    this.Conss = function Conss(a1) {
      return new Conss.class(a1);
    };
    this.Conss.class = class Conss extends boyer2.Lisplist {
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return "Conss(" + runtime.render(this.a) + ")"; }
    };
    this.LUT = class LUT {
      constructor() {}
      toString() { return "LUT"; }
    };
    const Empty$class = class Empty extends boyer2.LUT {
      constructor() {
        super();
      }
      toString() { return "Empty"; }
    };
    this.Empty = new Empty$class;
    this.Empty.class = Empty$class;
    this.Node = function Node(x1) {
      return new Node.class(x1);
    };
    this.Node.class = class Node extends boyer2.LUT {
      constructor(x) {
        super();
        this.x = x;
      }
      toString() { return "Node(" + runtime.render(this.x) + ")"; }
    };
    tmp = NofibPrelude.nofibStringToList("( implies ( and ( implies x y )( and ( implies y z )( and ( implies z u )( implies u w ) ) ) )( implies x w ) )");
    tmp1 = strToToken_inst_3_tsni(tmp);
    tmp2 = boyer21.mkLispList(tmp1);
    this.statement = tmp2;
    tmp3 = NofibPrelude.nofibStringToList("(equal (compile form)(reverse (codegen (optimize form) (Nill) ) ) )");
    tmp4 = NofibPrelude.nofibStringToList("(equal (eqp x y)(equal (fix x)(fix y) ) )");
    tmp5 = NofibPrelude.nofibStringToList("(equal (greaterp x y)(lessp y x) )");
    tmp6 = NofibPrelude.nofibStringToList("(equal (lesseqp x y)(not (lessp y x) ) )");
    tmp7 = NofibPrelude.nofibStringToList("(equal (greatereqp x y)(not (lessp y x) ) )");
    tmp8 = NofibPrelude.nofibStringToList("(equal (boolean x)(or (equal x (t) )(equal x (f) ) )");
    tmp9 = NofibPrelude.nofibStringToList("(equal (iff x y)(and (implies x y)(implies y x) ) )");
    tmp10 = NofibPrelude.nofibStringToList("(equal (even1 x)(if (zerop x)(t)(odd (1- x) ) ) )");
    tmp11 = NofibPrelude.nofibStringToList("(equal (countps- l pred)(countps-loop l pred (zero) ) )");
    tmp12 = NofibPrelude.nofibStringToList("(equal (fact- i)(fact-loop i 1) )");
    tmp13 = NofibPrelude.nofibStringToList("(equal (reverse- x)(reverse-loop x (Nill) ) )");
    tmp14 = NofibPrelude.nofibStringToList("(equal (divides x y)(zerop (remainder y x) ) )");
    tmp15 = NofibPrelude.nofibStringToList("(equal (assume-true var alist)(Conss (Conss var (t) )alist) )");
    tmp16 = NofibPrelude.nofibStringToList("(equal (assume-false var alist)(Conss (Conss var (f) )alist) )");
    tmp17 = NofibPrelude.nofibStringToList("(equal (tautology-checker x)(tautologyp (normalize x)(Nill) ) )");
    tmp18 = NofibPrelude.nofibStringToList("(equal (falsify x)(falsify1 (normalize x)(Nill) ) )");
    tmp19 = NofibPrelude.nofibStringToList("(equal (prime x)(and (not (zerop x))(not (equal x (add1 (zero) ) ) )(prime1 x (1- x) ) ) )");
    tmp20 = NofibPrelude.nofibStringToList("(equal (and p q)(if p (if q (t) (f) ) (f) ) )");
    tmp21 = NofibPrelude.nofibStringToList("(equal (or p q)(if p (t) (if q (t) (f) ) ) )");
    tmp22 = NofibPrelude.nofibStringToList("(equal (not p)(if p (f) (t) ) )");
    tmp23 = NofibPrelude.nofibStringToList("(equal (implies p q)(if p (if q (t) (f) ) (t) ) )");
    tmp24 = NofibPrelude.nofibStringToList("(equal (fix x)(if (numberp x) x (zero) ) )");
    tmp25 = NofibPrelude.nofibStringToList("(equal (if (if a b c) d e)(if a (if b d e) (if c d e) ) )");
    tmp26 = NofibPrelude.nofibStringToList("(equal (zerop x)(or (equal x (zero) )(not (numberp x) ) ) )");
    tmp27 = NofibPrelude.nofibStringToList("(equal (plus (plus x y) z )(plus x (plus y z) ) )");
    tmp28 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (zero ) )(and (zerop a) (zerop b) ) )");
    tmp29 = NofibPrelude.nofibStringToList("(equal (difference x x)(zero) )");
    tmp30 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (plus a c) )(equal (fix b) (fix c) ) )");
    tmp31 = NofibPrelude.nofibStringToList("(equal (equal (zero) (difference x y) )(not (lessp y x) ) )");
    tmp32 = NofibPrelude.nofibStringToList("(equal (equal x (difference x y) )(and (numberp x)(or (equal x (zero) )(zerop y) ) ) )");
    tmp33 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (append x y) ) a)(plus (meaning (plus-tree x) a)(meaning (plus-tree y) a) ) )");
    tmp34 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (plus-fringe x) ) a)(fix (meaning x a) ) )");
    tmp35 = NofibPrelude.nofibStringToList("(equal (append (append x y) z)(append x (append y z) ) )");
    tmp36 = NofibPrelude.nofibStringToList("(equal (reverse (append a b) )(append (reverse b) (reverse a) ) )");
    tmp37 = NofibPrelude.nofibStringToList("(equal (times x (plus y z) )(plus (times x y)(times x z) ) )");
    tmp38 = NofibPrelude.nofibStringToList("(equal (times (times x y) z)(times x (times y z) ) )");
    tmp39 = NofibPrelude.nofibStringToList("(equal (equal (times x y) (zero) )(or (zerop x)(zerop y) ) )");
    tmp40 = NofibPrelude.nofibStringToList("(equal (exec (append x y)pds envrn)(exec y (exec x pds envrn)envrn) )");
    tmp41 = NofibPrelude.nofibStringToList("(equal (mc-flatten x y)(append (flatten x)y) )");
    tmp42 = NofibPrelude.nofibStringToList("(equal (member x (append a b) )(or (member x a)(member x b) ) )");
    tmp43 = NofibPrelude.nofibStringToList("(equal (member x (reverse y) )(member x y) )");
    tmp44 = NofibPrelude.nofibStringToList("(equal (length (reverse x) )(length x) )");
    tmp45 = NofibPrelude.nofibStringToList("(equal (member a (intersect b c) )(and (member a b)(member a c) ) )");
    tmp46 = NofibPrelude.nofibStringToList("(equal (nth (zero)i)(zero) )");
    tmp47 = NofibPrelude.nofibStringToList("(equal (exp i (plus j k) )(times (exp i j)(exp i k) ) )");
    tmp48 = NofibPrelude.nofibStringToList("(equal (exp i (times j k) )(exp (exp i j)k) )");
    tmp49 = NofibPrelude.nofibStringToList("(equal (reverse-loop x y)(append (reverse x)y) )");
    tmp50 = NofibPrelude.nofibStringToList("(equal (reverse-loop x (Nill) )(reverse x) )");
    tmp51 = NofibPrelude.nofibStringToList("(equal (count-list z (sort-lp x y) )(plus (count-list z x)(count-list z y) ) )");
    tmp52 = NofibPrelude.nofibStringToList("(equal (equal (append a b)(append a c) )(equal b c) )");
    tmp53 = NofibPrelude.nofibStringToList("(equal (plus (remainder x y)(times y (quotient x y) ) )(fix x) )");
    tmp54 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus1 l i base)base)(plus (power-eval l base)i) )");
    tmp55 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus x y i base)base)(plus i (plus (power-eval x base)(power-eval y base) ) ) )");
    tmp56 = NofibPrelude.nofibStringToList("(equal (remainder y 1)(zero) )");
    tmp57 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)y)(not (zerop y) ) )");
    tmp58 = NofibPrelude.nofibStringToList("(equal (remainder x x)(zero) )");
    tmp59 = NofibPrelude.nofibStringToList("(equal (lessp (quotient i j)i)(and (not (zerop i) )(or (zerop j)(not (equal j 1) ) ) ) )");
    tmp60 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)x)(and (not (zerop y) )(not (zerop x) )(not (lessp x y) ) ) )");
    tmp61 = NofibPrelude.nofibStringToList("(equal (power-eval (power-rep i base)base)(fix i) )");
    tmp62 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus (power-rep i base)(power-rep j base)(zero)base)base)(plus i j) )");
    tmp63 = NofibPrelude.nofibStringToList("(equal (gcd x y)(gcd y x) )");
    tmp64 = NofibPrelude.nofibStringToList("(equal (nth (append a b)i)(append (nth a i)(nth b (difference i (length a) ) ) ) )");
    tmp65 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)x)(fix y) )");
    tmp66 = NofibPrelude.nofibStringToList("(equal (difference (plus y x)x)(fix y) )");
    tmp67 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)(plus x z) )(difference y z) )");
    tmp68 = NofibPrelude.nofibStringToList("(equal (times x (difference c w) )(difference (times c x)(times w x) ) )");
    tmp69 = NofibPrelude.nofibStringToList("(equal (remainder (times x z)z)(zero) )");
    tmp70 = NofibPrelude.nofibStringToList("(equal (difference (plus b (plus a c) )a)(plus b c) )");
    tmp71 = NofibPrelude.nofibStringToList("(equal (difference (add1 (plus y z)z)(add1 y) )");
    tmp72 = NofibPrelude.nofibStringToList("(equal (lessp (plus x y)(plus x z ) )(lessp y z) )");
    tmp73 = NofibPrelude.nofibStringToList("(equal (lessp (times x z)(times y z) )(and (not (zerop z) )(lessp x y) ) )");
    tmp74 = NofibPrelude.nofibStringToList("(equal (lessp y (plus x y) )(not (zerop x) ) )");
    tmp75 = NofibPrelude.nofibStringToList("(equal (gcd (times x z)(times y z) )(times z (gcd x y) ) )");
    tmp76 = NofibPrelude.nofibStringToList("(equal (value (normalize x)a)(value x a) )");
    tmp77 = NofibPrelude.nofibStringToList("(equal (equal (flatten x)(Conss y (Nill) ) )(and (nlistp x)(equal x y) ) )");
    tmp78 = NofibPrelude.nofibStringToList("(equal (listp (gopher x) )(listp x) )");
    tmp79 = NofibPrelude.nofibStringToList("(equal (samefringe x y)(equal (flatten x)(flatten y) ) )");
    tmp80 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)(zero) )(and (or (zerop y)(equal y 1) )(equal x (zero) ) ) )");
    tmp81 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)1)(equal x 1) )");
    tmp82 = NofibPrelude.nofibStringToList("(equal (numberp (greatest-factor x y) )(not (and (or (zerop y)(equal y 1) )(not (numberp x) ) ) ) )");
    tmp83 = NofibPrelude.nofibStringToList("(equal (times-list (append x y) )(times (times-list x)(times-list y) ) )");
    tmp84 = NofibPrelude.nofibStringToList("(equal (prime-list (append x y) )(and (prime-list x)(prime-list y) ) )");
    tmp85 = NofibPrelude.nofibStringToList("(equal (equal z (times w z) )(and (numberp z)(or (equal z (zero) )(equal w 1) ) ) )");
    tmp86 = NofibPrelude.nofibStringToList("(equal (greatereqpr x y)(not (lessp x y) ) )");
    tmp87 = NofibPrelude.nofibStringToList("(equal (equal x (times x y) )(or (equal x (zero) )(and (numberp x)(equal y 1) ) ) )");
    tmp88 = NofibPrelude.nofibStringToList("(equal (remainder (times y x)y)(zero) )");
    tmp89 = NofibPrelude.nofibStringToList("(equal (equal (times a b)1)(and (not (equal a (zero) ) )(not (equal b (zero) ) )(numberp a)(numberp b)(equal (1- a)(zero) )(equal (1- b)(zero) ) ) )");
    tmp90 = NofibPrelude.nofibStringToList("(equal (lessp (length (delete x l) )(length l) )(member x l) )");
    tmp91 = NofibPrelude.nofibStringToList("(equal (sort2 (delete x l) )(delete x (sort2 l) ) )");
    tmp92 = NofibPrelude.nofibStringToList("(equal (dsort x)(sort2 x) )");
    tmp93 = NofibPrelude.nofibStringToList("(equal (length(Conss x1(Conss x2(Conss x3(Conss x4(Conss x5(Conss x6 x7) ) ) ) ) ) )(plus 6 (length x7) ) )");
    tmp94 = NofibPrelude.nofibStringToList("(equal (difference (add1 (add1 x) )2)(fix x) )");
    tmp95 = NofibPrelude.nofibStringToList("(equal (quotient (plus x (plus x y) )2)(plus x (quotient y 2) ) )");
    tmp96 = NofibPrelude.nofibStringToList("(equal (sigma (zero)i)(quotient (times i (add1 i) )2) )");
    tmp97 = NofibPrelude.nofibStringToList("(equal (plus x (add1 y) )(if (numberp y)(add1 (plus x y) )(add1 x) ) )");
    tmp98 = NofibPrelude.nofibStringToList("(equal (equal (difference x y)(difference z y) )(if (lessp x y)(not (lessp y z) )(if (lessp z y)(not (lessp y x) )(equal (fix x)(fix z) ) ) ) )");
    tmp99 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (delete x y) )a)(if (member x y)(difference (meaning (plus-tree y)a)(meaning x a) )(meaning (plus-tree y)a) ) )");
    tmp100 = NofibPrelude.nofibStringToList("(equal (times x (add1 y) )(if (numberp y)(plus x (times x y) )(fix x) ) )");
    tmp101 = NofibPrelude.nofibStringToList("(equal (nth (Nill)i)(if (zerop i)(Nill)(zero) ) )");
    tmp102 = NofibPrelude.nofibStringToList("(equal (last (append a b) )(if (listp b)(last b)(if (listp a)(Conss (car (last a) )b)b) ) )");
    tmp103 = NofibPrelude.nofibStringToList("(equal (equal (lessp x y)z)(if (lessp x y)(equal t z)(equal f z) ) )");
    tmp104 = NofibPrelude.nofibStringToList("(equal (assignment x (append a b) )(if (assignedp x a)(assignment x a)(assignment x b) ) )");
    tmp105 = NofibPrelude.nofibStringToList("(equal (car (gopher x) )(if (listp x)(car (flatten x) )(zero) ) )");
    tmp106 = NofibPrelude.nofibStringToList("(equal (flatten (cdr (gopher x) ) )(if (listp x)(cdr (flatten x) )(Conss (zero)(Nill) ) ) )");
    tmp107 = NofibPrelude.nofibStringToList("(equal (quotient (times y x)y)(if (zerop y)(zero)(fix x) ) )");
    tmp108 = NofibPrelude.nofibStringToList("(equal (get j (set i val mem) )(if (eqp j i)val(get j mem) ) )");
    _deforest_Cons_head105 = tmp108;
    _deforest_Cons_tail105 = () => {
      return (term) => {
        return term
      }
    };
    tmp109 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head105, _deforest_Cons_tail105)
    };
    _deforest_Cons_head104 = tmp107;
    _deforest_Cons_tail104 = tmp109;
    tmp110 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head104, _deforest_Cons_tail104)
    };
    _deforest_Cons_head103 = tmp106;
    _deforest_Cons_tail103 = tmp110;
    tmp111 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head103, _deforest_Cons_tail103)
    };
    _deforest_Cons_head102 = tmp105;
    _deforest_Cons_tail102 = tmp111;
    tmp112 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head102, _deforest_Cons_tail102)
    };
    _deforest_Cons_head101 = tmp104;
    _deforest_Cons_tail101 = tmp112;
    tmp113 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head101, _deforest_Cons_tail101)
    };
    _deforest_Cons_head100 = tmp103;
    _deforest_Cons_tail100 = tmp113;
    tmp114 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head100, _deforest_Cons_tail100)
    };
    _deforest_Cons_head99 = tmp102;
    _deforest_Cons_tail99 = tmp114;
    tmp115 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head99, _deforest_Cons_tail99)
    };
    _deforest_Cons_head98 = tmp101;
    _deforest_Cons_tail98 = tmp115;
    tmp116 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head98, _deforest_Cons_tail98)
    };
    _deforest_Cons_head97 = tmp100;
    _deforest_Cons_tail97 = tmp116;
    tmp117 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head97, _deforest_Cons_tail97)
    };
    _deforest_Cons_head96 = tmp99;
    _deforest_Cons_tail96 = tmp117;
    tmp118 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head96, _deforest_Cons_tail96)
    };
    _deforest_Cons_head95 = tmp98;
    _deforest_Cons_tail95 = tmp118;
    tmp119 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head95, _deforest_Cons_tail95)
    };
    _deforest_Cons_head94 = tmp97;
    _deforest_Cons_tail94 = tmp119;
    tmp120 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head94, _deforest_Cons_tail94)
    };
    _deforest_Cons_head93 = tmp96;
    _deforest_Cons_tail93 = tmp120;
    tmp121 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head93, _deforest_Cons_tail93)
    };
    _deforest_Cons_head92 = tmp95;
    _deforest_Cons_tail92 = tmp121;
    tmp122 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head92, _deforest_Cons_tail92)
    };
    _deforest_Cons_head91 = tmp94;
    _deforest_Cons_tail91 = tmp122;
    tmp123 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head91, _deforest_Cons_tail91)
    };
    _deforest_Cons_head90 = tmp93;
    _deforest_Cons_tail90 = tmp123;
    tmp124 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head90, _deforest_Cons_tail90)
    };
    _deforest_Cons_head89 = tmp92;
    _deforest_Cons_tail89 = tmp124;
    tmp125 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head89, _deforest_Cons_tail89)
    };
    _deforest_Cons_head88 = tmp91;
    _deforest_Cons_tail88 = tmp125;
    tmp126 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head88, _deforest_Cons_tail88)
    };
    _deforest_Cons_head87 = tmp90;
    _deforest_Cons_tail87 = tmp126;
    tmp127 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head87, _deforest_Cons_tail87)
    };
    _deforest_Cons_head86 = tmp89;
    _deforest_Cons_tail86 = tmp127;
    tmp128 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head86, _deforest_Cons_tail86)
    };
    _deforest_Cons_head85 = tmp88;
    _deforest_Cons_tail85 = tmp128;
    tmp129 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head85, _deforest_Cons_tail85)
    };
    _deforest_Cons_head84 = tmp87;
    _deforest_Cons_tail84 = tmp129;
    tmp130 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head84, _deforest_Cons_tail84)
    };
    _deforest_Cons_head83 = tmp86;
    _deforest_Cons_tail83 = tmp130;
    tmp131 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head83, _deforest_Cons_tail83)
    };
    _deforest_Cons_head82 = tmp85;
    _deforest_Cons_tail82 = tmp131;
    tmp132 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head82, _deforest_Cons_tail82)
    };
    _deforest_Cons_head81 = tmp84;
    _deforest_Cons_tail81 = tmp132;
    tmp133 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head81, _deforest_Cons_tail81)
    };
    _deforest_Cons_head80 = tmp83;
    _deforest_Cons_tail80 = tmp133;
    tmp134 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head80, _deforest_Cons_tail80)
    };
    _deforest_Cons_head79 = tmp82;
    _deforest_Cons_tail79 = tmp134;
    tmp135 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head79, _deforest_Cons_tail79)
    };
    _deforest_Cons_head78 = tmp81;
    _deforest_Cons_tail78 = tmp135;
    tmp136 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head78, _deforest_Cons_tail78)
    };
    _deforest_Cons_head77 = tmp80;
    _deforest_Cons_tail77 = tmp136;
    tmp137 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head77, _deforest_Cons_tail77)
    };
    _deforest_Cons_head76 = tmp79;
    _deforest_Cons_tail76 = tmp137;
    tmp138 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head76, _deforest_Cons_tail76)
    };
    _deforest_Cons_head75 = tmp78;
    _deforest_Cons_tail75 = tmp138;
    tmp139 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head75, _deforest_Cons_tail75)
    };
    _deforest_Cons_head74 = tmp77;
    _deforest_Cons_tail74 = tmp139;
    tmp140 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head74, _deforest_Cons_tail74)
    };
    _deforest_Cons_head73 = tmp76;
    _deforest_Cons_tail73 = tmp140;
    tmp141 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head73, _deforest_Cons_tail73)
    };
    _deforest_Cons_head72 = tmp75;
    _deforest_Cons_tail72 = tmp141;
    tmp142 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head72, _deforest_Cons_tail72)
    };
    _deforest_Cons_head71 = tmp74;
    _deforest_Cons_tail71 = tmp142;
    tmp143 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head71, _deforest_Cons_tail71)
    };
    _deforest_Cons_head70 = tmp73;
    _deforest_Cons_tail70 = tmp143;
    tmp144 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head70, _deforest_Cons_tail70)
    };
    _deforest_Cons_head69 = tmp72;
    _deforest_Cons_tail69 = tmp144;
    tmp145 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head69, _deforest_Cons_tail69)
    };
    _deforest_Cons_head68 = tmp71;
    _deforest_Cons_tail68 = tmp145;
    tmp146 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head68, _deforest_Cons_tail68)
    };
    _deforest_Cons_head67 = tmp70;
    _deforest_Cons_tail67 = tmp146;
    tmp147 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head67, _deforest_Cons_tail67)
    };
    _deforest_Cons_head66 = tmp69;
    _deforest_Cons_tail66 = tmp147;
    tmp148 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head66, _deforest_Cons_tail66)
    };
    _deforest_Cons_head65 = tmp68;
    _deforest_Cons_tail65 = tmp148;
    tmp149 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head65, _deforest_Cons_tail65)
    };
    _deforest_Cons_head64 = tmp67;
    _deforest_Cons_tail64 = tmp149;
    tmp150 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head64, _deforest_Cons_tail64)
    };
    _deforest_Cons_head63 = tmp66;
    _deforest_Cons_tail63 = tmp150;
    tmp151 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head63, _deforest_Cons_tail63)
    };
    _deforest_Cons_head62 = tmp65;
    _deforest_Cons_tail62 = tmp151;
    tmp152 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head62, _deforest_Cons_tail62)
    };
    _deforest_Cons_head61 = tmp64;
    _deforest_Cons_tail61 = tmp152;
    tmp153 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head61, _deforest_Cons_tail61)
    };
    _deforest_Cons_head60 = tmp63;
    _deforest_Cons_tail60 = tmp153;
    tmp154 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head60, _deforest_Cons_tail60)
    };
    _deforest_Cons_head59 = tmp62;
    _deforest_Cons_tail59 = tmp154;
    tmp155 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head59, _deforest_Cons_tail59)
    };
    _deforest_Cons_head58 = tmp61;
    _deforest_Cons_tail58 = tmp155;
    tmp156 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head58, _deforest_Cons_tail58)
    };
    _deforest_Cons_head57 = tmp60;
    _deforest_Cons_tail57 = tmp156;
    tmp157 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head57, _deforest_Cons_tail57)
    };
    _deforest_Cons_head56 = tmp59;
    _deforest_Cons_tail56 = tmp157;
    tmp158 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head56, _deforest_Cons_tail56)
    };
    _deforest_Cons_head55 = tmp58;
    _deforest_Cons_tail55 = tmp158;
    tmp159 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head55, _deforest_Cons_tail55)
    };
    _deforest_Cons_head54 = tmp57;
    _deforest_Cons_tail54 = tmp159;
    tmp160 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head54, _deforest_Cons_tail54)
    };
    _deforest_Cons_head53 = tmp56;
    _deforest_Cons_tail53 = tmp160;
    tmp161 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head53, _deforest_Cons_tail53)
    };
    _deforest_Cons_head52 = tmp55;
    _deforest_Cons_tail52 = tmp161;
    tmp162 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head52, _deforest_Cons_tail52)
    };
    _deforest_Cons_head51 = tmp54;
    _deforest_Cons_tail51 = tmp162;
    tmp163 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head51, _deforest_Cons_tail51)
    };
    _deforest_Cons_head50 = tmp53;
    _deforest_Cons_tail50 = tmp163;
    tmp164 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head50, _deforest_Cons_tail50)
    };
    _deforest_Cons_head49 = tmp52;
    _deforest_Cons_tail49 = tmp164;
    tmp165 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head49, _deforest_Cons_tail49)
    };
    _deforest_Cons_head48 = tmp51;
    _deforest_Cons_tail48 = tmp165;
    tmp166 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head48, _deforest_Cons_tail48)
    };
    _deforest_Cons_head47 = tmp50;
    _deforest_Cons_tail47 = tmp166;
    tmp167 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head47, _deforest_Cons_tail47)
    };
    _deforest_Cons_head46 = tmp49;
    _deforest_Cons_tail46 = tmp167;
    tmp168 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head46, _deforest_Cons_tail46)
    };
    _deforest_Cons_head45 = tmp48;
    _deforest_Cons_tail45 = tmp168;
    tmp169 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head45, _deforest_Cons_tail45)
    };
    _deforest_Cons_head44 = tmp47;
    _deforest_Cons_tail44 = tmp169;
    tmp170 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head44, _deforest_Cons_tail44)
    };
    _deforest_Cons_head43 = tmp46;
    _deforest_Cons_tail43 = tmp170;
    tmp171 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head43, _deforest_Cons_tail43)
    };
    _deforest_Cons_head42 = tmp45;
    _deforest_Cons_tail42 = tmp171;
    tmp172 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head42, _deforest_Cons_tail42)
    };
    _deforest_Cons_head41 = tmp44;
    _deforest_Cons_tail41 = tmp172;
    tmp173 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head41, _deforest_Cons_tail41)
    };
    _deforest_Cons_head40 = tmp43;
    _deforest_Cons_tail40 = tmp173;
    tmp174 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head40, _deforest_Cons_tail40)
    };
    _deforest_Cons_head39 = tmp42;
    _deforest_Cons_tail39 = tmp174;
    tmp175 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head39, _deforest_Cons_tail39)
    };
    _deforest_Cons_head38 = tmp41;
    _deforest_Cons_tail38 = tmp175;
    tmp176 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head38, _deforest_Cons_tail38)
    };
    _deforest_Cons_head37 = tmp40;
    _deforest_Cons_tail37 = tmp176;
    tmp177 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head37, _deforest_Cons_tail37)
    };
    _deforest_Cons_head36 = tmp39;
    _deforest_Cons_tail36 = tmp177;
    tmp178 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head36, _deforest_Cons_tail36)
    };
    _deforest_Cons_head35 = tmp38;
    _deforest_Cons_tail35 = tmp178;
    tmp179 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head35, _deforest_Cons_tail35)
    };
    _deforest_Cons_head34 = tmp37;
    _deforest_Cons_tail34 = tmp179;
    tmp180 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head34, _deforest_Cons_tail34)
    };
    _deforest_Cons_head33 = tmp36;
    _deforest_Cons_tail33 = tmp180;
    tmp181 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head33, _deforest_Cons_tail33)
    };
    _deforest_Cons_head32 = tmp35;
    _deforest_Cons_tail32 = tmp181;
    tmp182 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head32, _deforest_Cons_tail32)
    };
    _deforest_Cons_head31 = tmp34;
    _deforest_Cons_tail31 = tmp182;
    tmp183 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head31, _deforest_Cons_tail31)
    };
    _deforest_Cons_head30 = tmp33;
    _deforest_Cons_tail30 = tmp183;
    tmp184 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head30, _deforest_Cons_tail30)
    };
    _deforest_Cons_head29 = tmp32;
    _deforest_Cons_tail29 = tmp184;
    tmp185 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head29, _deforest_Cons_tail29)
    };
    _deforest_Cons_head28 = tmp31;
    _deforest_Cons_tail28 = tmp185;
    tmp186 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head28, _deforest_Cons_tail28)
    };
    _deforest_Cons_head27 = tmp30;
    _deforest_Cons_tail27 = tmp186;
    tmp187 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head27, _deforest_Cons_tail27)
    };
    _deforest_Cons_head26 = tmp29;
    _deforest_Cons_tail26 = tmp187;
    tmp188 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head26, _deforest_Cons_tail26)
    };
    _deforest_Cons_head25 = tmp28;
    _deforest_Cons_tail25 = tmp188;
    tmp189 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head25, _deforest_Cons_tail25)
    };
    _deforest_Cons_head24 = tmp27;
    _deforest_Cons_tail24 = tmp189;
    tmp190 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head24, _deforest_Cons_tail24)
    };
    _deforest_Cons_head23 = tmp26;
    _deforest_Cons_tail23 = tmp190;
    tmp191 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head23, _deforest_Cons_tail23)
    };
    _deforest_Cons_head22 = tmp25;
    _deforest_Cons_tail22 = tmp191;
    tmp192 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head22, _deforest_Cons_tail22)
    };
    _deforest_Cons_head21 = tmp24;
    _deforest_Cons_tail21 = tmp192;
    tmp193 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head21, _deforest_Cons_tail21)
    };
    _deforest_Cons_head20 = tmp23;
    _deforest_Cons_tail20 = tmp193;
    tmp194 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head20, _deforest_Cons_tail20)
    };
    _deforest_Cons_head19 = tmp22;
    _deforest_Cons_tail19 = tmp194;
    tmp195 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head19, _deforest_Cons_tail19)
    };
    _deforest_Cons_head18 = tmp21;
    _deforest_Cons_tail18 = tmp195;
    tmp196 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head18, _deforest_Cons_tail18)
    };
    _deforest_Cons_head17 = tmp20;
    _deforest_Cons_tail17 = tmp196;
    tmp197 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head17, _deforest_Cons_tail17)
    };
    _deforest_Cons_head16 = tmp19;
    _deforest_Cons_tail16 = tmp197;
    tmp198 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head16, _deforest_Cons_tail16)
    };
    _deforest_Cons_head15 = tmp18;
    _deforest_Cons_tail15 = tmp198;
    tmp199 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head15, _deforest_Cons_tail15)
    };
    _deforest_Cons_head14 = tmp17;
    _deforest_Cons_tail14 = tmp199;
    tmp200 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head14, _deforest_Cons_tail14)
    };
    _deforest_Cons_head13 = tmp16;
    _deforest_Cons_tail13 = tmp200;
    tmp201 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head13, _deforest_Cons_tail13)
    };
    _deforest_Cons_head12 = tmp15;
    _deforest_Cons_tail12 = tmp201;
    tmp202 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head12, _deforest_Cons_tail12)
    };
    _deforest_Cons_head11 = tmp14;
    _deforest_Cons_tail11 = tmp202;
    tmp203 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head11, _deforest_Cons_tail11)
    };
    _deforest_Cons_head10 = tmp13;
    _deforest_Cons_tail10 = tmp203;
    tmp204 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head10, _deforest_Cons_tail10)
    };
    _deforest_Cons_head9 = tmp12;
    _deforest_Cons_tail9 = tmp204;
    tmp205 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = tmp11;
    _deforest_Cons_tail8 = tmp205;
    tmp206 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = tmp10;
    _deforest_Cons_tail7 = tmp206;
    tmp207 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = tmp9;
    _deforest_Cons_tail6 = tmp207;
    tmp208 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp8;
    _deforest_Cons_tail5 = tmp208;
    tmp209 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp7;
    _deforest_Cons_tail4 = tmp209;
    tmp210 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp6;
    _deforest_Cons_tail3 = tmp210;
    tmp211 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp5;
    _deforest_Cons_tail2 = tmp211;
    tmp212 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp4;
    _deforest_Cons_tail1 = tmp212;
    tmp213 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = tmp3;
    _deforest_Cons_tail = tmp213;
    tmp214 = () => {
      return match_rules_arm_Cons_inst_0_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    this.rules = tmp214;
    tmp215 = makelemmas_inst_0_tsni(boyer2.rules);
    tmp216 = addlemmalst_inst_17_tsni(tmp215, boyer2.Empty);
    this.lemmas = tmp216;
  }
  static lispListEq(x, y) {
    let param0, first1, first0, a, b, param01, first11, first01, c, d, scrut, a1, b1;
    if (x instanceof boyer2.Nill.class) {
      if (y instanceof boyer2.Nill.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      a1 = param0;
      if (y instanceof boyer2.Atom.class) {
        param01 = y.a;
        b1 = param01;
        return NofibPrelude.listEq(a1, b1)
      } else {
        return false
      }
    } else if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        a = first0;
        b = first1;
        if (y instanceof boyer2.Conss.class) {
          param01 = y.a;
          if (globalThis.Array.isArray(param01) && param01.length === 2) {
            first01 = param01[0];
            first11 = param01[1];
            c = first01;
            d = first11;
            scrut = boyer2.lispListEq(a, c);
            if (scrut === true) {
              return boyer2.lispListEq(b, d)
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static lispmember(e_x) {
    let first1, first0, e, param0, first11, first01, x1, xs, scrut, arr;
    if (globalThis.Array.isArray(e_x) && e_x.length === 2) {
      first0 = e_x[0];
      first1 = e_x[1];
      e = first0;
      if (first1 instanceof boyer2.Conss.class) {
        param0 = first1.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          x1 = first01;
          xs = first11;
          scrut = boyer2.lispListEq(e, x1);
          if (scrut === true) {
            return true
          } else {
            arr = [
              e,
              xs
            ];
            return boyer2.lispmember(arr)
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static truep(term_l) {
    let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6;
    if (globalThis.Array.isArray(term_l) && term_l.length === 2) {
      first0 = term_l[0];
      first1 = term_l[1];
      if (first0 instanceof boyer2.Nill.class) {
        return false
      } else if (first0 instanceof boyer2.Conss.class) {
        param0 = first0.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          if (first01 instanceof boyer2.Atom.class) {
            param01 = first01.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "t") {
                if (param1 instanceof NofibPrelude.Nil.class) {
                  if (first11 instanceof boyer2.Nill.class) {
                    return true
                  } else {
                    term = first0;
                    l = first1;
                    arr = [
                      term,
                      l
                    ];
                    return boyer2.lispmember(arr)
                  }
                } else {
                  term = first0;
                  l = first1;
                  arr1 = [
                    term,
                    l
                  ];
                  return boyer2.lispmember(arr1)
                }
              } else {
                term = first0;
                l = first1;
                arr2 = [
                  term,
                  l
                ];
                return boyer2.lispmember(arr2)
              }
            } else {
              term = first0;
              l = first1;
              arr3 = [
                term,
                l
              ];
              return boyer2.lispmember(arr3)
            }
          } else {
            term = first0;
            l = first1;
            arr4 = [
              term,
              l
            ];
            return boyer2.lispmember(arr4)
          }
        } else {
          term = first0;
          l = first1;
          arr5 = [
            term,
            l
          ];
          return boyer2.lispmember(arr5)
        }
      } else {
        term = first0;
        l = first1;
        arr6 = [
          term,
          l
        ];
        return boyer2.lispmember(arr6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static falsep(term_l1) {
    let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6;
    if (globalThis.Array.isArray(term_l1) && term_l1.length === 2) {
      first0 = term_l1[0];
      first1 = term_l1[1];
      if (first0 instanceof boyer2.Nill.class) {
        return false
      } else if (first0 instanceof boyer2.Conss.class) {
        param0 = first0.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          if (first01 instanceof boyer2.Atom.class) {
            param01 = first01.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "f") {
                if (param1 instanceof NofibPrelude.Nil.class) {
                  if (first11 instanceof boyer2.Nill.class) {
                    return true
                  } else {
                    term = first0;
                    l = first1;
                    arr = [
                      term,
                      l
                    ];
                    return boyer2.lispmember(arr)
                  }
                } else {
                  term = first0;
                  l = first1;
                  arr1 = [
                    term,
                    l
                  ];
                  return boyer2.lispmember(arr1)
                }
              } else {
                term = first0;
                l = first1;
                arr2 = [
                  term,
                  l
                ];
                return boyer2.lispmember(arr2)
              }
            } else {
              term = first0;
              l = first1;
              arr3 = [
                term,
                l
              ];
              return boyer2.lispmember(arr3)
            }
          } else {
            term = first0;
            l = first1;
            arr4 = [
              term,
              l
            ];
            return boyer2.lispmember(arr4)
          }
        } else {
          term = first0;
          l = first1;
          arr5 = [
            term,
            l
          ];
          return boyer2.lispmember(arr5)
        }
      } else {
        term = first0;
        l = first1;
        arr6 = [
          term,
          l
        ];
        return boyer2.lispmember(arr6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tv(x1) {
    let param0, a;
    if (x1 instanceof boyer2.Atom.class) {
      param0 = x1.a;
      a = param0;
      return a
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static atom(x2) {
    let param0;
    if (x2 instanceof boyer2.Atom.class) {
      param0 = x2.a;
      return true
    } else {
      return false
    }
  } 
  static car(x3) {
    let param0, first1, first0, a;
    if (x3 instanceof boyer2.Conss.class) {
      param0 = x3.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        a = first0;
        return a
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static cdr(x4) {
    let param0, first1, first0, b;
    if (x4 instanceof boyer2.Conss.class) {
      param0 = x4.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        b = first1;
        return b
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static cadr(x5) {
    let tmp;
    tmp = boyer2.cdr(x5);
    return boyer2.car(tmp)
  } 
  static caddr(x6) {
    let tmp, tmp1;
    tmp = boyer2.cdr(x6);
    tmp1 = boyer2.cdr(tmp);
    return boyer2.car(tmp1)
  } 
  static cadddr(x7) {
    let tmp, tmp1, tmp2;
    tmp = boyer2.cdr(x7);
    tmp1 = boyer2.cdr(tmp);
    tmp2 = boyer2.cdr(tmp1);
    return boyer2.car(tmp2)
  } 
  static tautologyp(f_truelst_falselst) {
    let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x8, y1, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x9, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
    if (globalThis.Array.isArray(f_truelst_falselst) && f_truelst_falselst.length === 3) {
      first0 = f_truelst_falselst[0];
      first1 = f_truelst_falselst[1];
      first2 = f_truelst_falselst[2];
      f = first0;
      truelst = first1;
      falselst = first2;
      if (f instanceof boyer2.Nill.class) {
        return false
      } else if (f instanceof boyer2.Atom.class) {
        param0 = f.a;
        x9 = param0;
        tmp = runtime.safeCall(boyer2.Atom(x9));
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = truelst;
        arr = () => {
          let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          if (first02 instanceof boyer2.Nill.class) {
            return false
          } else if (first02 instanceof boyer2.Conss.class) {
            param04 = first02.a;
            if (globalThis.Array.isArray(param04) && param04.length === 2) {
              first03 = param04[0];
              first13 = param04[1];
              if (first03 instanceof boyer2.Atom.class) {
                param05 = first03.a;
                if (param05 instanceof NofibPrelude.Cons.class) {
                  param06 = param05.head;
                  param12 = param05.tail;
                  if (param06 === "t") {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      if (first13 instanceof boyer2.Nill.class) {
                        return true
                      } else {
                        term = first02;
                        l = first12;
                        arr13 = [
                          term,
                          l
                        ];
                        return boyer2.lispmember(arr13)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      arr14 = [
                        term,
                        l
                      ];
                      return boyer2.lispmember(arr14)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    arr15 = [
                      term,
                      l
                    ];
                    return boyer2.lispmember(arr15)
                  }
                } else {
                  term = first02;
                  l = first12;
                  arr16 = [
                    term,
                    l
                  ];
                  return boyer2.lispmember(arr16)
                }
              } else {
                term = first02;
                l = first12;
                arr17 = [
                  term,
                  l
                ];
                return boyer2.lispmember(arr17)
              }
            } else {
              term = first02;
              l = first12;
              arr18 = [
                term,
                l
              ];
              return boyer2.lispmember(arr18)
            }
          } else {
            term = first02;
            l = first12;
            arr19 = [
              term,
              l
            ];
            return boyer2.lispmember(arr19)
          }
        };
        return truep_inst_4_18_tsni(arr)
      } else if (f instanceof boyer2.Conss.class) {
        param0 = f.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          x8 = first01;
          y1 = first11;
          arr1 = [
            x8,
            y1
          ];
          tmp1 = runtime.safeCall(boyer2.Conss(arr1));
          _deforest_Deforest_Arr_2_01 = tmp1;
          _deforest_Deforest_Arr_2_11 = truelst;
          arr2 = () => {
            let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19;
            first02 = _deforest_Deforest_Arr_2_01;
            first12 = _deforest_Deforest_Arr_2_11;
            if (first02 instanceof boyer2.Nill.class) {
              return false
            } else if (first02 instanceof boyer2.Conss.class) {
              param04 = first02.a;
              if (globalThis.Array.isArray(param04) && param04.length === 2) {
                first03 = param04[0];
                first13 = param04[1];
                if (first03 instanceof boyer2.Atom.class) {
                  param05 = first03.a;
                  if (param05 instanceof NofibPrelude.Cons.class) {
                    param06 = param05.head;
                    param12 = param05.tail;
                    if (param06 === "t") {
                      if (param12 instanceof NofibPrelude.Nil.class) {
                        if (first13 instanceof boyer2.Nill.class) {
                          return true
                        } else {
                          term = first02;
                          l = first12;
                          arr13 = [
                            term,
                            l
                          ];
                          return boyer2.lispmember(arr13)
                        }
                      } else {
                        term = first02;
                        l = first12;
                        arr14 = [
                          term,
                          l
                        ];
                        return boyer2.lispmember(arr14)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      arr15 = [
                        term,
                        l
                      ];
                      return boyer2.lispmember(arr15)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    arr16 = [
                      term,
                      l
                    ];
                    return boyer2.lispmember(arr16)
                  }
                } else {
                  term = first02;
                  l = first12;
                  arr17 = [
                    term,
                    l
                  ];
                  return boyer2.lispmember(arr17)
                }
              } else {
                term = first02;
                l = first12;
                arr18 = [
                  term,
                  l
                ];
                return boyer2.lispmember(arr18)
              }
            } else {
              term = first02;
              l = first12;
              arr19 = [
                term,
                l
              ];
              return boyer2.lispmember(arr19)
            }
          };
          scrut5 = truep_inst_4_19_tsni(arr2);
          if (scrut5 === true) {
            return true
          } else {
            arr3 = [
              x8,
              y1
            ];
            tmp2 = runtime.safeCall(boyer2.Conss(arr3));
            _deforest_Deforest_Arr_2_02 = tmp2;
            _deforest_Deforest_Arr_2_12 = falselst;
            arr4 = () => {
              let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19;
              first02 = _deforest_Deforest_Arr_2_02;
              first12 = _deforest_Deforest_Arr_2_12;
              if (first02 instanceof boyer2.Nill.class) {
                return false
              } else if (first02 instanceof boyer2.Conss.class) {
                param04 = first02.a;
                if (globalThis.Array.isArray(param04) && param04.length === 2) {
                  first03 = param04[0];
                  first13 = param04[1];
                  if (first03 instanceof boyer2.Atom.class) {
                    param05 = first03.a;
                    if (param05 instanceof NofibPrelude.Cons.class) {
                      param06 = param05.head;
                      param12 = param05.tail;
                      if (param06 === "f") {
                        if (param12 instanceof NofibPrelude.Nil.class) {
                          if (first13 instanceof boyer2.Nill.class) {
                            return true
                          } else {
                            term = first02;
                            l = first12;
                            arr13 = [
                              term,
                              l
                            ];
                            return boyer2.lispmember(arr13)
                          }
                        } else {
                          term = first02;
                          l = first12;
                          arr14 = [
                            term,
                            l
                          ];
                          return boyer2.lispmember(arr14)
                        }
                      } else {
                        term = first02;
                        l = first12;
                        arr15 = [
                          term,
                          l
                        ];
                        return boyer2.lispmember(arr15)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      arr16 = [
                        term,
                        l
                      ];
                      return boyer2.lispmember(arr16)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    arr17 = [
                      term,
                      l
                    ];
                    return boyer2.lispmember(arr17)
                  }
                } else {
                  term = first02;
                  l = first12;
                  arr18 = [
                    term,
                    l
                  ];
                  return boyer2.lispmember(arr18)
                }
              } else {
                term = first02;
                l = first12;
                arr19 = [
                  term,
                  l
                ];
                return boyer2.lispmember(arr19)
              }
            };
            scrut4 = falsep_inst_4_20_tsni(arr4);
            if (scrut4 === true) {
              return false
            } else {
              if (x8 instanceof boyer2.Atom.class) {
                param01 = x8.a;
                if (param01 instanceof NofibPrelude.Cons.class) {
                  param02 = param01.head;
                  param1 = param01.tail;
                  if (param02 === "i") {
                    if (param1 instanceof NofibPrelude.Cons.class) {
                      param03 = param1.head;
                      param11 = param1.tail;
                      if (param03 === "f") {
                        if (param11 instanceof NofibPrelude.Nil.class) {
                          tmp3 = boyer2.car(y1);
                          _deforest_Deforest_Arr_2_03 = tmp3;
                          _deforest_Deforest_Arr_2_13 = truelst;
                          arr5 = () => {
                            let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19;
                            first02 = _deforest_Deforest_Arr_2_03;
                            first12 = _deforest_Deforest_Arr_2_13;
                            if (first02 instanceof boyer2.Nill.class) {
                              return false
                            } else if (first02 instanceof boyer2.Conss.class) {
                              param04 = first02.a;
                              if (globalThis.Array.isArray(param04) && param04.length === 2) {
                                first03 = param04[0];
                                first13 = param04[1];
                                if (first03 instanceof boyer2.Atom.class) {
                                  param05 = first03.a;
                                  if (param05 instanceof NofibPrelude.Cons.class) {
                                    param06 = param05.head;
                                    param12 = param05.tail;
                                    if (param06 === "t") {
                                      if (param12 instanceof NofibPrelude.Nil.class) {
                                        if (first13 instanceof boyer2.Nill.class) {
                                          return true
                                        } else {
                                          term = first02;
                                          l = first12;
                                          arr13 = [
                                            term,
                                            l
                                          ];
                                          return boyer2.lispmember(arr13)
                                        }
                                      } else {
                                        term = first02;
                                        l = first12;
                                        arr14 = [
                                          term,
                                          l
                                        ];
                                        return boyer2.lispmember(arr14)
                                      }
                                    } else {
                                      term = first02;
                                      l = first12;
                                      arr15 = [
                                        term,
                                        l
                                      ];
                                      return boyer2.lispmember(arr15)
                                    }
                                  } else {
                                    term = first02;
                                    l = first12;
                                    arr16 = [
                                      term,
                                      l
                                    ];
                                    return boyer2.lispmember(arr16)
                                  }
                                } else {
                                  term = first02;
                                  l = first12;
                                  arr17 = [
                                    term,
                                    l
                                  ];
                                  return boyer2.lispmember(arr17)
                                }
                              } else {
                                term = first02;
                                l = first12;
                                arr18 = [
                                  term,
                                  l
                                ];
                                return boyer2.lispmember(arr18)
                              }
                            } else {
                              term = first02;
                              l = first12;
                              arr19 = [
                                term,
                                l
                              ];
                              return boyer2.lispmember(arr19)
                            }
                          };
                          scrut3 = truep_inst_4_21_tsni(arr5);
                          if (scrut3 === true) {
                            tmp4 = boyer2.cadr(y1);
                            arr6 = [
                              tmp4,
                              truelst,
                              falselst
                            ];
                            return boyer2.tautologyp(arr6)
                          } else {
                            tmp5 = boyer2.car(y1);
                            _deforest_Deforest_Arr_2_04 = tmp5;
                            _deforest_Deforest_Arr_2_14 = falselst;
                            arr7 = () => {
                              let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19;
                              first02 = _deforest_Deforest_Arr_2_04;
                              first12 = _deforest_Deforest_Arr_2_14;
                              if (first02 instanceof boyer2.Nill.class) {
                                return false
                              } else if (first02 instanceof boyer2.Conss.class) {
                                param04 = first02.a;
                                if (globalThis.Array.isArray(param04) && param04.length === 2) {
                                  first03 = param04[0];
                                  first13 = param04[1];
                                  if (first03 instanceof boyer2.Atom.class) {
                                    param05 = first03.a;
                                    if (param05 instanceof NofibPrelude.Cons.class) {
                                      param06 = param05.head;
                                      param12 = param05.tail;
                                      if (param06 === "f") {
                                        if (param12 instanceof NofibPrelude.Nil.class) {
                                          if (first13 instanceof boyer2.Nill.class) {
                                            return true
                                          } else {
                                            term = first02;
                                            l = first12;
                                            arr13 = [
                                              term,
                                              l
                                            ];
                                            return boyer2.lispmember(arr13)
                                          }
                                        } else {
                                          term = first02;
                                          l = first12;
                                          arr14 = [
                                            term,
                                            l
                                          ];
                                          return boyer2.lispmember(arr14)
                                        }
                                      } else {
                                        term = first02;
                                        l = first12;
                                        arr15 = [
                                          term,
                                          l
                                        ];
                                        return boyer2.lispmember(arr15)
                                      }
                                    } else {
                                      term = first02;
                                      l = first12;
                                      arr16 = [
                                        term,
                                        l
                                      ];
                                      return boyer2.lispmember(arr16)
                                    }
                                  } else {
                                    term = first02;
                                    l = first12;
                                    arr17 = [
                                      term,
                                      l
                                    ];
                                    return boyer2.lispmember(arr17)
                                  }
                                } else {
                                  term = first02;
                                  l = first12;
                                  arr18 = [
                                    term,
                                    l
                                  ];
                                  return boyer2.lispmember(arr18)
                                }
                              } else {
                                term = first02;
                                l = first12;
                                arr19 = [
                                  term,
                                  l
                                ];
                                return boyer2.lispmember(arr19)
                              }
                            };
                            scrut2 = falsep_inst_4_22_tsni(arr7);
                            if (scrut2 === true) {
                              tmp6 = boyer2.caddr(y1);
                              arr8 = [
                                tmp6,
                                truelst,
                                falselst
                              ];
                              return boyer2.tautologyp(arr8)
                            } else {
                              tmp7 = boyer2.cadr(y1);
                              tmp8 = boyer2.car(y1);
                              arr9 = [
                                tmp8,
                                truelst
                              ];
                              tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                              arr10 = [
                                tmp7,
                                tmp9,
                                falselst
                              ];
                              scrut = boyer2.tautologyp(arr10);
                              if (scrut === true) {
                                tmp10 = boyer2.caddr(y1);
                                tmp11 = boyer2.car(y1);
                                arr11 = [
                                  tmp11,
                                  falselst
                                ];
                                tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                                arr12 = [
                                  tmp10,
                                  truelst,
                                  tmp12
                                ];
                                scrut1 = boyer2.tautologyp(arr12);
                                if (scrut1 === true) {
                                  return true
                                } else {
                                  return false
                                }
                              } else {
                                return false
                              }
                            }
                          }
                        } else {
                          return false
                        }
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              } else {
                return false
              }
            }
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
  static sublist(t) {
    let param0, param1, h, t1, scrut, first1, first0, r, l, param01, param11, t2, t3, scrut1, first11, first01, r1, l1, scrut2, first12, first02, r2, l2, arr, arr1, tmp, arr2, tmp1, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, arr9, tmp7, arr10, tmp8, arr11, tmp9, arr12, tmp10, arr13, tmp11, arr14, tmp12, arr15;
    if (t instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        boyer2.Nill
      ];
      return arr
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param11 = param0.tail;
        if (param01 === "(") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t3 = param1;
            scrut1 = boyer2.sublist(t3);
            if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
              first01 = scrut1[0];
              first11 = scrut1[1];
              r1 = first01;
              l1 = first11;
              scrut2 = boyer2.sublist(r1);
              if (globalThis.Array.isArray(scrut2) && scrut2.length === 2) {
                first02 = scrut2[0];
                first12 = scrut2[1];
                r2 = first02;
                l2 = first12;
                arr1 = [
                  l1,
                  l2
                ];
                tmp = runtime.safeCall(boyer2.Conss(arr1));
                arr2 = [
                  r2,
                  tmp
                ];
                return arr2
              } else {
                h = param0;
                t1 = param1;
                scrut = boyer2.sublist(t1);
                if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                  first0 = scrut[0];
                  first1 = scrut[1];
                  r = first0;
                  l = first1;
                  tmp1 = runtime.safeCall(boyer2.Atom(h));
                  arr3 = [
                    tmp1,
                    l
                  ];
                  tmp2 = runtime.safeCall(boyer2.Conss(arr3));
                  arr4 = [
                    r,
                    tmp2
                  ];
                  return arr4
                } else {
                  throw new globalThis.Error("match error");
                }
              }
            } else {
              h = param0;
              t1 = param1;
              scrut = boyer2.sublist(t1);
              if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
                first0 = scrut[0];
                first1 = scrut[1];
                r = first0;
                l = first1;
                tmp3 = runtime.safeCall(boyer2.Atom(h));
                arr5 = [
                  tmp3,
                  l
                ];
                tmp4 = runtime.safeCall(boyer2.Conss(arr5));
                arr6 = [
                  r,
                  tmp4
                ];
                return arr6
              } else {
                throw new globalThis.Error("match error");
              }
            }
          } else {
            h = param0;
            t1 = param1;
            scrut = boyer2.sublist(t1);
            if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
              first0 = scrut[0];
              first1 = scrut[1];
              r = first0;
              l = first1;
              tmp5 = runtime.safeCall(boyer2.Atom(h));
              arr7 = [
                tmp5,
                l
              ];
              tmp6 = runtime.safeCall(boyer2.Conss(arr7));
              arr8 = [
                r,
                tmp6
              ];
              return arr8
            } else {
              throw new globalThis.Error("match error");
            }
          }
        } else if (param01 === ")") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t2 = param1;
            arr9 = [
              t2,
              boyer2.Nill
            ];
            return arr9
          } else {
            h = param0;
            t1 = param1;
            scrut = boyer2.sublist(t1);
            if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
              first0 = scrut[0];
              first1 = scrut[1];
              r = first0;
              l = first1;
              tmp7 = runtime.safeCall(boyer2.Atom(h));
              arr10 = [
                tmp7,
                l
              ];
              tmp8 = runtime.safeCall(boyer2.Conss(arr10));
              arr11 = [
                r,
                tmp8
              ];
              return arr11
            } else {
              throw new globalThis.Error("match error");
            }
          }
        } else {
          h = param0;
          t1 = param1;
          scrut = boyer2.sublist(t1);
          if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
            first0 = scrut[0];
            first1 = scrut[1];
            r = first0;
            l = first1;
            tmp9 = runtime.safeCall(boyer2.Atom(h));
            arr12 = [
              tmp9,
              l
            ];
            tmp10 = runtime.safeCall(boyer2.Conss(arr12));
            arr13 = [
              r,
              tmp10
            ];
            return arr13
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        h = param0;
        t1 = param1;
        scrut = boyer2.sublist(t1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          r = first0;
          l = first1;
          tmp11 = runtime.safeCall(boyer2.Atom(h));
          arr14 = [
            tmp11,
            l
          ];
          tmp12 = runtime.safeCall(boyer2.Conss(arr14));
          arr15 = [
            r,
            tmp12
          ];
          return arr15
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mkLispList(ls) {
    let param0, param1, param01, param11, t1, scrut, first1, first0, r, l;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param11 = param0.tail;
        if (param01 === "(") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t1 = param1;
            scrut = boyer2.sublist(t1);
            if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
              first0 = scrut[0];
              first1 = scrut[1];
              r = first0;
              l = first1;
              if (r instanceof NofibPrelude.Nil.class) {
                return l
              } else {
                return boyer2.Nill
              }
            } else {
              return boyer2.Nill
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static restOfToken(s) {
    let param0, param1, h, t1, scrut, first1, first0, a, b, scrut1, arr, tmp, tmp1, tmp2, tmp3, tmp4, arr1, tmp5, arr2;
    if (s instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      h = param0;
      t1 = param1;
      tmp = h === "(";
      tmp1 = h === ")";
      tmp2 = tmp || tmp1;
      tmp3 = h === " ";
      scrut1 = tmp2 || tmp3;
      if (scrut1 === true) {
        tmp4 = NofibPrelude.Cons(h, t1);
        arr1 = [
          NofibPrelude.Nil,
          tmp4
        ];
        return arr1
      } else {
        scrut = boyer2.restOfToken(t1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          a = first0;
          b = first1;
          tmp5 = NofibPrelude.Cons(h, a);
          arr2 = [
            tmp5,
            b
          ];
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static getToken(s1) {
    let param0, param1, h, t1, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2;
    if (s1 instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else if (s1 instanceof NofibPrelude.Cons.class) {
      param0 = s1.head;
      param1 = s1.tail;
      h = param0;
      t1 = param1;
      scrut2 = h === " ";
      if (scrut2 === true) {
        return boyer2.getToken(t1)
      } else {
        tmp = h === "(";
        tmp1 = h === ")";
        scrut1 = tmp || tmp1;
        if (scrut1 === true) {
          tmp2 = NofibPrelude.Cons(h, NofibPrelude.Nil);
          arr1 = [
            tmp2,
            t1
          ];
          return arr1
        } else {
          scrut = boyer21.restOfToken(t1);
          if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
            first0 = scrut[0];
            first1 = scrut[1];
            a = first0;
            b = first1;
            tmp3 = NofibPrelude.Cons(h, a);
            arr2 = [
              tmp3,
              b
            ];
            return arr2
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static strToToken(s2) {
    let scrut;
    if (s2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      scrut = getToken_inst_5_2_tsni(s2);
      return runtime.safeCall(scrut())
    }
  } 
  static assoc(term_x_y) {
    let first1, first0, term, param0, first11, first01, x8, y1, param01, first12, first02, param02, key, rest, scrut, tmp, arr;
    if (globalThis.Array.isArray(term_x_y) && term_x_y.length === 2) {
      first0 = term_x_y[0];
      first1 = term_x_y[1];
      term = first0;
      if (first1 instanceof boyer2.Conss.class) {
        param0 = first1.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first01 = param0[0];
          first11 = param0[1];
          x8 = first01;
          y1 = first11;
          if (x8 instanceof boyer2.Conss.class) {
            param01 = x8.a;
            if (globalThis.Array.isArray(param01) && param01.length === 2) {
              first02 = param01[0];
              first12 = param01[1];
              if (first02 instanceof boyer2.Atom.class) {
                param02 = first02.a;
                key = param02;
                rest = first12;
                tmp = runtime.safeCall(boyer2.Atom(key));
                scrut = boyer2.lispListEq(term, tmp);
                if (scrut === true) {
                  return x8
                } else {
                  arr = [
                    term,
                    y1
                  ];
                  return boyer2.assoc(arr)
                }
              } else {
                return boyer2.Nill
              }
            } else {
              return boyer2.Nill
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addtoLUT(k_l_lut) {
    let first2, first1, first0, k, l, param0, first21, first11, first01, left, first12, first02, k1, kl, right, scrut, scrut1, k2, l1, tmp, arr, arr1, tmp1, arr2, arr3, arr4, tmp2, arr5, arr6, arr7, arr8, tmp3, arr9, lambda, lambda1;
    if (globalThis.Array.isArray(k_l_lut) && k_l_lut.length === 3) {
      first0 = k_l_lut[0];
      first1 = k_l_lut[1];
      first2 = k_l_lut[2];
      k2 = first0;
      l1 = first1;
      k = first0;
      l = first1;
      if (first2 instanceof boyer2.Empty.class) {
        tmp = NofibPrelude.Cons(l1, NofibPrelude.Nil);
        arr = [
          k2,
          tmp
        ];
        arr1 = [
          boyer2.Empty,
          arr,
          boyer2.Empty
        ];
        return runtime.safeCall(boyer2.Node(arr1))
      } else if (first2 instanceof boyer2.Node.class) {
        param0 = first2.x;
        if (globalThis.Array.isArray(param0) && param0.length === 3) {
          first01 = param0[0];
          first11 = param0[1];
          first21 = param0[2];
          left = first01;
          if (globalThis.Array.isArray(first11) && first11.length === 2) {
            first02 = first11[0];
            first12 = first11[1];
            k1 = first02;
            kl = first12;
            right = first21;
            scrut1 = NofibPrelude.listEq(k, k1);
            if (scrut1 === true) {
              tmp1 = NofibPrelude.Cons(l, kl);
              arr2 = [
                k1,
                tmp1
              ];
              arr3 = [
                left,
                arr2,
                right
              ];
              return runtime.safeCall(boyer2.Node(arr3))
            } else {
              lambda = (undefined, function (x8, y1) {
                return x8 < y1
              });
              lambda1 = (undefined, function (x8, y1) {
                return x8 > y1
              });
              scrut = NofibPrelude.ltList(k, k1, lambda, lambda1);
              if (scrut === true) {
                arr4 = [
                  k,
                  l,
                  left
                ];
                tmp2 = boyer2.addtoLUT(arr4);
                arr5 = [
                  k1,
                  kl
                ];
                arr6 = [
                  tmp2,
                  arr5,
                  right
                ];
                return runtime.safeCall(boyer2.Node(arr6))
              } else {
                arr7 = [
                  k1,
                  kl
                ];
                arr8 = [
                  k,
                  l,
                  right
                ];
                tmp3 = boyer2.addtoLUT(arr8);
                arr9 = [
                  left,
                  arr7,
                  tmp3
                ];
                return runtime.safeCall(boyer2.Node(arr9))
              }
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
  static getLUT(t_lut) {
    let first1, first0, t1, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t2, arr, arr1, lambda, lambda1;
    if (globalThis.Array.isArray(t_lut) && t_lut.length === 2) {
      first0 = t_lut[0];
      first1 = t_lut[1];
      t2 = first0;
      t1 = first0;
      if (first1 instanceof boyer2.Empty.class) {
        return NofibPrelude.Nil
      } else if (first1 instanceof boyer2.Node.class) {
        param0 = first1.x;
        if (globalThis.Array.isArray(param0) && param0.length === 3) {
          first01 = param0[0];
          first11 = param0[1];
          first2 = param0[2];
          left = first01;
          if (globalThis.Array.isArray(first11) && first11.length === 2) {
            first02 = first11[0];
            first12 = first11[1];
            k = first02;
            kl = first12;
            right = first2;
            scrut1 = NofibPrelude.listEq(t1, k);
            if (scrut1 === true) {
              return kl
            } else {
              lambda = (undefined, function (x8, y1) {
                return x8 < y1
              });
              lambda1 = (undefined, function (x8, y1) {
                return x8 > y1
              });
              scrut = NofibPrelude.ltList(t1, k, lambda, lambda1);
              if (scrut === true) {
                arr = [
                  t1,
                  left
                ];
                return boyer2.getLUT(arr)
              } else {
                arr1 = [
                  t1,
                  right
                ];
                return boyer2.getLUT(arr1)
              }
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
  static makelemmas(rules) {
    let param0, param1, h, t1, tmp, tmp1, tmp2;
    if (rules instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (rules instanceof NofibPrelude.Cons.class) {
      param0 = rules.head;
      param1 = rules.tail;
      h = param0;
      t1 = param1;
      tmp = strToToken_inst_6_1_tsni(h);
      tmp1 = boyer21.mkLispList(tmp);
      tmp2 = boyer2.makelemmas(t1);
      return NofibPrelude.Cons(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addlemma(lspls, term) {
    let param0, first1, first0, x8, y1, z, scrut, scrut1, x9, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1;
    if (lspls instanceof boyer2.Nill.class) {
      return term
    } else if (lspls instanceof boyer2.Atom.class) {
      param0 = lspls.a;
      x9 = param0;
      throw new globalThis.Error("error");
    } else if (lspls instanceof boyer2.Conss.class) {
      param0 = lspls.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x8 = first0;
        y1 = first1;
        tmp = boyer2.car(y1);
        z = tmp;
        tmp1 = boyer2.tv(x8);
        tmp2 = NofibPrelude.nofibStringToList("equal");
        scrut = NofibPrelude.listEq(tmp1, tmp2);
        if (scrut === true) {
          tmp3 = boyer2.atom(z);
          scrut1 = Predef.not(tmp3);
          if (scrut1 === true) {
            tmp4 = boyer2.car(z);
            tmp5 = boyer2.tv(tmp4);
            arr = [
              x8,
              y1
            ];
            tmp6 = runtime.safeCall(boyer2.Conss(arr));
            arr1 = [
              tmp5,
              tmp6,
              term
            ];
            return boyer2.addtoLUT(arr1)
          } else {
            throw new globalThis.Error("error");
          }
        } else {
          throw new globalThis.Error("error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addlemmalst(lspls1, term1) {
    let param0, param1, h, t1, tmp;
    if (lspls1 instanceof NofibPrelude.Nil.class) {
      return term1
    } else if (lspls1 instanceof NofibPrelude.Cons.class) {
      param0 = lspls1.head;
      param1 = lspls1.tail;
      h = param0;
      t1 = param1;
      tmp = boyer21.addlemma(h, term1);
      return boyer2.addlemmalst(t1, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static applysubstlst(alist, y1) {
    let param0, first1, first0, x8, y2, x9, tmp, tmp1, arr;
    if (y1 instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (y1 instanceof boyer2.Atom.class) {
      param0 = y1.a;
      x9 = param0;
      throw new globalThis.Error("error");
    } else if (y1 instanceof boyer2.Conss.class) {
      param0 = y1.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x8 = first0;
        y2 = first1;
        tmp = boyer2.applysubst(alist, x8);
        tmp1 = boyer2.applysubstlst(alist, y2);
        arr = [
          tmp,
          tmp1
        ];
        return runtime.safeCall(boyer2.Conss(arr))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static applysubst(alist1, x8) {
    let param0, first1, first0, x9, y2, x10, scrut, param01, first11, first01, y3, tmp, arr, tmp1, arr1;
    if (x8 instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x8 instanceof boyer2.Atom.class) {
      param0 = x8.a;
      x10 = param0;
      tmp = runtime.safeCall(boyer2.Atom(x10));
      arr = [
        tmp,
        alist1
      ];
      scrut = boyer2.assoc(arr);
      if (scrut instanceof boyer2.Conss.class) {
        param01 = scrut.a;
        if (globalThis.Array.isArray(param01) && param01.length === 2) {
          first01 = param01[0];
          first11 = param01[1];
          y3 = first11;
          return y3
        } else {
          return runtime.safeCall(boyer2.Atom(x10))
        }
      } else {
        return runtime.safeCall(boyer2.Atom(x10))
      }
    } else if (x8 instanceof boyer2.Conss.class) {
      param0 = x8.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x9 = first0;
        y2 = first1;
        tmp1 = boyer2.applysubstlst(alist1, y2);
        arr1 = [
          x9,
          tmp1
        ];
        return runtime.safeCall(boyer2.Conss(arr1))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static onewayunify1lst(l1, l2, u) {
    let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
    if (l1 instanceof boyer2.Nill.class) {
      arr = [
        true,
        u
      ];
      return arr
    } else {
      tmp = boyer2.car(l1);
      tmp1 = boyer2.car(l2);
      scrut = boyer2.onewayunify1(tmp, tmp1, u);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        b = first0;
        u1 = first1;
        if (b === true) {
          tmp2 = boyer2.cdr(l1);
          tmp3 = boyer2.cdr(l2);
          return boyer2.onewayunify1lst(tmp2, tmp3, u1)
        } else {
          arr1 = [
            false,
            u1
          ];
          return arr1
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static onewayunify1(t1, t2, u1) {
    let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y2, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9;
    scrut2 = boyer2.atom(t2);
    if (scrut2 === true) {
      arr = [
        t2,
        u1
      ];
      scrut3 = boyer2.assoc(arr);
      if (scrut3 instanceof boyer2.Conss.class) {
        param0 = scrut3.a;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          y2 = first1;
          tmp = boyer2.lispListEq(t1, y2);
          arr1 = [
            tmp,
            u1
          ];
          return arr1
        } else {
          arr2 = [
            t2,
            t1
          ];
          tmp1 = runtime.safeCall(boyer2.Conss(arr2));
          arr3 = [
            tmp1,
            u1
          ];
          tmp2 = runtime.safeCall(boyer2.Conss(arr3));
          arr4 = [
            true,
            tmp2
          ];
          return arr4
        }
      } else {
        arr5 = [
          t2,
          t1
        ];
        tmp3 = runtime.safeCall(boyer2.Conss(arr5));
        arr6 = [
          tmp3,
          u1
        ];
        tmp4 = runtime.safeCall(boyer2.Conss(arr6));
        arr7 = [
          true,
          tmp4
        ];
        return arr7
      }
    } else {
      scrut1 = boyer2.atom(t1);
      if (scrut1 === true) {
        arr8 = [
          false,
          u1
        ];
        return arr8
      } else {
        tmp5 = boyer2.car(t1);
        tmp6 = boyer2.car(t2);
        scrut = boyer2.lispListEq(tmp5, tmp6);
        if (scrut === true) {
          tmp7 = boyer2.cdr(t1);
          tmp8 = boyer2.cdr(t2);
          return boyer2.onewayunify1lst(tmp7, tmp8, u1)
        } else {
          arr9 = [
            false,
            u1
          ];
          return arr9
        }
      }
    }
  } 
  static onewayunify(t11, t21) {
    return boyer2.onewayunify1(t11, t21, boyer2.Nill)
  } 
  static rewritewithlemmas(t3, l, term2) {
    let param0, param1, lh, lt, scrut, first1, first0, b, u2, tmp, tmp1, tmp2;
    if (l instanceof NofibPrelude.Nil.class) {
      return t3
    } else if (l instanceof NofibPrelude.Cons.class) {
      param0 = l.head;
      param1 = l.tail;
      lh = param0;
      lt = param1;
      tmp = boyer2.cadr(lh);
      scrut = boyer2.onewayunify(t3, tmp);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        b = first0;
        u2 = first1;
        if (b === true) {
          tmp1 = boyer2.caddr(lh);
          tmp2 = boyer2.applysubst(u2, tmp1);
          return boyer2.rewrite(tmp2, term2)
        } else {
          return boyer2.rewritewithlemmas(t3, lt, term2)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rewriteargs(x9, term3) {
    let param0, first1, first0, x10, y2, tmp, tmp1, arr;
    if (x9 instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x9 instanceof boyer2.Atom.class) {
      param0 = x9.a;
      throw new globalThis.Error("error");
    } else if (x9 instanceof boyer2.Conss.class) {
      param0 = x9.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x10 = first0;
        y2 = first1;
        tmp = boyer2.rewrite(x10, term3);
        tmp1 = boyer2.rewriteargs(y2, term3);
        arr = [
          tmp,
          tmp1
        ];
        return runtime.safeCall(boyer2.Conss(arr))
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rewrite(x10, term4) {
    let param0, first1, first0, l11, l21, x11, tmp, arr, tmp1, tmp2, arr1, tmp3;
    if (x10 instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x10 instanceof boyer2.Atom.class) {
      param0 = x10.a;
      x11 = param0;
      return runtime.safeCall(boyer2.Atom(x11))
    } else if (x10 instanceof boyer2.Conss.class) {
      param0 = x10.a;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        l11 = first0;
        l21 = first1;
        tmp = boyer2.rewriteargs(l21, term4);
        arr = [
          l11,
          tmp
        ];
        tmp1 = runtime.safeCall(boyer2.Conss(arr));
        tmp2 = boyer2.tv(l11);
        arr1 = [
          tmp2,
          term4
        ];
        tmp3 = boyer2.getLUT(arr1);
        return boyer2.rewritewithlemmas(tmp1, tmp3, term4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static subterm(i) {
    let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.stringOfInt(i);
    tmp1 = NofibPrelude.stringConcat("c", tmp);
    c = tmp1;
    tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
    tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
    tmp4 = NofibPrelude.stringConcat(c, tmp3);
    tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
    str = tmp5;
    tmp6 = NofibPrelude.nofibStringToList(str);
    tmp7 = strToToken_inst_7_8_tsni(tmp6);
    return boyer2.mkLispList(tmp7)
  } 
  static report(b) {
    if (b === true) {
      return "The term is a tautology"
    } else {
      return "The term is not a tautology"
    }
  } 
  static tautp(term5) {
    let tmp, arr;
    tmp = boyer2.rewrite(term5, boyer2.lemmas);
    arr = [
      tmp,
      boyer2.Nill,
      boyer2.Nill
    ];
    return boyer2.tautologyp(arr)
  } 
  static teststatement(i1) {
    let tmp;
    tmp = subterm_inst_9_10_tsni(i1);
    return boyer2.applysubst(tmp, boyer2.statement)
  } 
  static testresult(i2) {
    let tmp;
    tmp = teststatement_inst_11_12_tsni(i2);
    return boyer2.tautp(tmp)
  } 
  static testBoyer2_nofib(n) {
    let tmp;
    tmp = testresult_inst_13_14_tsni(n);
    return boyer2.report(tmp)
  } 
  static main() {
    return testBoyer2_nofib_inst_15_16_tsni(3)
  }
  static toString() { return "boyer2"; }
});
let boyer2 = boyer21; export default boyer2;
