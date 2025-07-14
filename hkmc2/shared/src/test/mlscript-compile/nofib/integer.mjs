import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let integer1, integerbench_inst_0_tsni, enumFromThenTo_inst_0_1_tsni, enumFromThenTo_inst_0_2_tsni, intbench_inst_3_tsni, enumFromThenTo_inst_3_4_tsni, enumFromThenTo_inst_3_5_tsni, runbench_inst_6_tsni, intbench_inst_6_3_tsni, enumFromThenTo_inst_6_3_4_tsni, enumFromThenTo_inst_6_3_5_tsni, integerbench_inst_6_0_tsni, enumFromThenTo_inst_6_0_1_tsni, enumFromThenTo_inst_6_0_2_tsni, runbench_inst_7_tsni, intbench_inst_7_3_tsni, enumFromThenTo_inst_7_3_4_tsni, enumFromThenTo_inst_7_3_5_tsni, integerbench_inst_7_0_tsni, enumFromThenTo_inst_7_0_1_tsni, enumFromThenTo_inst_7_0_2_tsni, runbench_inst_8_tsni, intbench_inst_8_3_tsni, enumFromThenTo_inst_8_3_4_tsni, enumFromThenTo_inst_8_3_5_tsni, integerbench_inst_8_0_tsni, enumFromThenTo_inst_8_0_1_tsni, enumFromThenTo_inst_8_0_2_tsni, runbench_inst_9_tsni, intbench_inst_9_3_tsni, enumFromThenTo_inst_9_3_4_tsni, enumFromThenTo_inst_9_3_5_tsni, integerbench_inst_9_0_tsni, enumFromThenTo_inst_9_0_1_tsni, enumFromThenTo_inst_9_0_2_tsni, runbench_inst_10_tsni, intbench_inst_10_3_tsni, enumFromThenTo_inst_10_3_4_tsni, enumFromThenTo_inst_10_3_5_tsni, integerbench_inst_10_0_tsni, enumFromThenTo_inst_10_0_1_tsni, enumFromThenTo_inst_10_0_2_tsni, runbench_inst_11_tsni, intbench_inst_11_3_tsni, enumFromThenTo_inst_11_3_4_tsni, enumFromThenTo_inst_11_3_5_tsni, integerbench_inst_11_0_tsni, enumFromThenTo_inst_11_0_1_tsni, enumFromThenTo_inst_11_0_2_tsni, runbench_inst_12_tsni, intbench_inst_12_3_tsni, enumFromThenTo_inst_12_3_4_tsni, enumFromThenTo_inst_12_3_5_tsni, integerbench_inst_12_0_tsni, enumFromThenTo_inst_12_0_1_tsni, enumFromThenTo_inst_12_0_2_tsni, runbench_inst_13_tsni, intbench_inst_13_3_tsni, enumFromThenTo_inst_13_3_4_tsni, enumFromThenTo_inst_13_3_5_tsni, integerbench_inst_13_0_tsni, enumFromThenTo_inst_13_0_1_tsni, enumFromThenTo_inst_13_0_2_tsni, runbench_inst_14_tsni, intbench_inst_14_3_tsni, enumFromThenTo_inst_14_3_4_tsni, enumFromThenTo_inst_14_3_5_tsni, integerbench_inst_14_0_tsni, enumFromThenTo_inst_14_0_1_tsni, enumFromThenTo_inst_14_0_2_tsni, runbench_inst_15_tsni, intbench_inst_15_3_tsni, enumFromThenTo_inst_15_3_4_tsni, enumFromThenTo_inst_15_3_5_tsni, integerbench_inst_15_0_tsni, enumFromThenTo_inst_15_0_1_tsni, enumFromThenTo_inst_15_0_2_tsni, runalltests_inst_16_tsni, runbench_inst_16_15_tsni, integerbench_inst_16_15_0_tsni, enumFromThenTo_inst_16_15_0_1_tsni, enumFromThenTo_inst_16_15_0_2_tsni, intbench_inst_16_15_3_tsni, enumFromThenTo_inst_16_15_3_4_tsni, enumFromThenTo_inst_16_15_3_5_tsni, runbench_inst_16_14_tsni, integerbench_inst_16_14_0_tsni, enumFromThenTo_inst_16_14_0_1_tsni, enumFromThenTo_inst_16_14_0_2_tsni, intbench_inst_16_14_3_tsni, enumFromThenTo_inst_16_14_3_4_tsni, enumFromThenTo_inst_16_14_3_5_tsni, runbench_inst_16_13_tsni, integerbench_inst_16_13_0_tsni, enumFromThenTo_inst_16_13_0_1_tsni, enumFromThenTo_inst_16_13_0_2_tsni, intbench_inst_16_13_3_tsni, enumFromThenTo_inst_16_13_3_4_tsni, enumFromThenTo_inst_16_13_3_5_tsni, runbench_inst_16_12_tsni, integerbench_inst_16_12_0_tsni, enumFromThenTo_inst_16_12_0_1_tsni, enumFromThenTo_inst_16_12_0_2_tsni, intbench_inst_16_12_3_tsni, enumFromThenTo_inst_16_12_3_4_tsni, enumFromThenTo_inst_16_12_3_5_tsni, runbench_inst_16_11_tsni, integerbench_inst_16_11_0_tsni, enumFromThenTo_inst_16_11_0_1_tsni, enumFromThenTo_inst_16_11_0_2_tsni, intbench_inst_16_11_3_tsni, enumFromThenTo_inst_16_11_3_4_tsni, enumFromThenTo_inst_16_11_3_5_tsni, runbench_inst_16_10_tsni, integerbench_inst_16_10_0_tsni, enumFromThenTo_inst_16_10_0_1_tsni, enumFromThenTo_inst_16_10_0_2_tsni, intbench_inst_16_10_3_tsni, enumFromThenTo_inst_16_10_3_4_tsni, enumFromThenTo_inst_16_10_3_5_tsni, runbench_inst_16_9_tsni, integerbench_inst_16_9_0_tsni, enumFromThenTo_inst_16_9_0_1_tsni, enumFromThenTo_inst_16_9_0_2_tsni, intbench_inst_16_9_3_tsni, enumFromThenTo_inst_16_9_3_4_tsni, enumFromThenTo_inst_16_9_3_5_tsni, runbench_inst_16_8_tsni, integerbench_inst_16_8_0_tsni, enumFromThenTo_inst_16_8_0_1_tsni, enumFromThenTo_inst_16_8_0_2_tsni, intbench_inst_16_8_3_tsni, enumFromThenTo_inst_16_8_3_4_tsni, enumFromThenTo_inst_16_8_3_5_tsni, runbench_inst_16_7_tsni, integerbench_inst_16_7_0_tsni, enumFromThenTo_inst_16_7_0_1_tsni, enumFromThenTo_inst_16_7_0_2_tsni, intbench_inst_16_7_3_tsni, enumFromThenTo_inst_16_7_3_4_tsni, enumFromThenTo_inst_16_7_3_5_tsni, runbench_inst_16_6_tsni, integerbench_inst_16_6_0_tsni, enumFromThenTo_inst_16_6_0_1_tsni, enumFromThenTo_inst_16_6_0_2_tsni, intbench_inst_16_6_3_tsni, enumFromThenTo_inst_16_6_3_4_tsni, enumFromThenTo_inst_16_6_3_5_tsni, testInteger_nofib_inst_17_tsni, runalltests_inst_17_16_tsni, runbench_inst_17_16_6_tsni, intbench_inst_17_16_6_3_tsni, enumFromThenTo_inst_17_16_6_3_4_tsni, enumFromThenTo_inst_17_16_6_3_5_tsni, integerbench_inst_17_16_6_0_tsni, enumFromThenTo_inst_17_16_6_0_1_tsni, enumFromThenTo_inst_17_16_6_0_2_tsni, runbench_inst_17_16_7_tsni, intbench_inst_17_16_7_3_tsni, enumFromThenTo_inst_17_16_7_3_4_tsni, enumFromThenTo_inst_17_16_7_3_5_tsni, integerbench_inst_17_16_7_0_tsni, enumFromThenTo_inst_17_16_7_0_1_tsni, enumFromThenTo_inst_17_16_7_0_2_tsni, runbench_inst_17_16_8_tsni, intbench_inst_17_16_8_3_tsni, enumFromThenTo_inst_17_16_8_3_4_tsni, enumFromThenTo_inst_17_16_8_3_5_tsni, integerbench_inst_17_16_8_0_tsni, enumFromThenTo_inst_17_16_8_0_1_tsni, enumFromThenTo_inst_17_16_8_0_2_tsni, runbench_inst_17_16_9_tsni, intbench_inst_17_16_9_3_tsni, enumFromThenTo_inst_17_16_9_3_4_tsni, enumFromThenTo_inst_17_16_9_3_5_tsni, integerbench_inst_17_16_9_0_tsni, enumFromThenTo_inst_17_16_9_0_1_tsni, enumFromThenTo_inst_17_16_9_0_2_tsni, runbench_inst_17_16_10_tsni, intbench_inst_17_16_10_3_tsni, enumFromThenTo_inst_17_16_10_3_4_tsni, enumFromThenTo_inst_17_16_10_3_5_tsni, integerbench_inst_17_16_10_0_tsni, enumFromThenTo_inst_17_16_10_0_1_tsni, enumFromThenTo_inst_17_16_10_0_2_tsni, runbench_inst_17_16_11_tsni, intbench_inst_17_16_11_3_tsni, enumFromThenTo_inst_17_16_11_3_4_tsni, enumFromThenTo_inst_17_16_11_3_5_tsni, integerbench_inst_17_16_11_0_tsni, enumFromThenTo_inst_17_16_11_0_1_tsni, enumFromThenTo_inst_17_16_11_0_2_tsni, runbench_inst_17_16_12_tsni, intbench_inst_17_16_12_3_tsni, enumFromThenTo_inst_17_16_12_3_4_tsni, enumFromThenTo_inst_17_16_12_3_5_tsni, integerbench_inst_17_16_12_0_tsni, enumFromThenTo_inst_17_16_12_0_1_tsni, enumFromThenTo_inst_17_16_12_0_2_tsni, runbench_inst_17_16_13_tsni, intbench_inst_17_16_13_3_tsni, enumFromThenTo_inst_17_16_13_3_4_tsni, enumFromThenTo_inst_17_16_13_3_5_tsni, integerbench_inst_17_16_13_0_tsni, enumFromThenTo_inst_17_16_13_0_1_tsni, enumFromThenTo_inst_17_16_13_0_2_tsni, runbench_inst_17_16_14_tsni, intbench_inst_17_16_14_3_tsni, enumFromThenTo_inst_17_16_14_3_4_tsni, enumFromThenTo_inst_17_16_14_3_5_tsni, integerbench_inst_17_16_14_0_tsni, enumFromThenTo_inst_17_16_14_0_1_tsni, enumFromThenTo_inst_17_16_14_0_2_tsni, runbench_inst_17_16_15_tsni, intbench_inst_17_16_15_3_tsni, enumFromThenTo_inst_17_16_15_3_4_tsni, enumFromThenTo_inst_17_16_15_3_5_tsni, integerbench_inst_17_16_15_0_tsni, enumFromThenTo_inst_17_16_15_0_1_tsni, enumFromThenTo_inst_17_16_15_0_2_tsni;
integerbench_inst_0_tsni = function integerbench_inst_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_0_1_tsni = function enumFromThenTo_inst_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_0_2_tsni = function enumFromThenTo_inst_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_3_tsni = function intbench_inst_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_3_4_tsni = function enumFromThenTo_inst_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_3_5_tsni = function enumFromThenTo_inst_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_6_tsni = function runbench_inst_6_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_6_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_6_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_6_3_tsni = function intbench_inst_6_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_6_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_6_3_4_tsni = function enumFromThenTo_inst_6_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_6_3_5_tsni = function enumFromThenTo_inst_6_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_6_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_6_0_tsni = function integerbench_inst_6_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_6_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_6_0_1_tsni = function enumFromThenTo_inst_6_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_6_0_2_tsni = function enumFromThenTo_inst_6_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_6_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_7_tsni = function runbench_inst_7_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_7_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_7_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_7_3_tsni = function intbench_inst_7_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_7_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_7_3_4_tsni = function enumFromThenTo_inst_7_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_7_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_7_3_5_tsni = function enumFromThenTo_inst_7_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_7_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_7_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_7_0_tsni = function integerbench_inst_7_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_7_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_7_0_1_tsni = function enumFromThenTo_inst_7_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_7_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_7_0_2_tsni = function enumFromThenTo_inst_7_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_7_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_7_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_8_tsni = function runbench_inst_8_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_8_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_8_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_8_3_tsni = function intbench_inst_8_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_8_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_8_3_4_tsni = function enumFromThenTo_inst_8_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_8_3_5_tsni = function enumFromThenTo_inst_8_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_8_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_8_0_tsni = function integerbench_inst_8_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_8_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_8_0_1_tsni = function enumFromThenTo_inst_8_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_8_0_2_tsni = function enumFromThenTo_inst_8_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_8_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_tsni = function runbench_inst_9_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_9_3_tsni = function intbench_inst_9_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_3_4_tsni = function enumFromThenTo_inst_9_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_9_3_5_tsni = function enumFromThenTo_inst_9_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_9_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_9_0_tsni = function integerbench_inst_9_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_0_1_tsni = function enumFromThenTo_inst_9_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_9_0_2_tsni = function enumFromThenTo_inst_9_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_9_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_10_tsni = function runbench_inst_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_10_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_10_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_10_3_tsni = function intbench_inst_10_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_10_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_10_3_4_tsni = function enumFromThenTo_inst_10_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_10_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_10_3_5_tsni = function enumFromThenTo_inst_10_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_10_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_10_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_10_0_tsni = function integerbench_inst_10_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_10_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_10_0_1_tsni = function enumFromThenTo_inst_10_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_10_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_10_0_2_tsni = function enumFromThenTo_inst_10_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_10_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_10_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_11_tsni = function runbench_inst_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_11_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_11_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_11_3_tsni = function intbench_inst_11_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_11_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_11_3_4_tsni = function enumFromThenTo_inst_11_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_11_3_5_tsni = function enumFromThenTo_inst_11_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_11_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_11_0_tsni = function integerbench_inst_11_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_11_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_11_0_1_tsni = function enumFromThenTo_inst_11_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_11_0_2_tsni = function enumFromThenTo_inst_11_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_11_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_12_tsni = function runbench_inst_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_12_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_12_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_12_3_tsni = function intbench_inst_12_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_12_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_12_3_4_tsni = function enumFromThenTo_inst_12_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_12_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_12_3_5_tsni = function enumFromThenTo_inst_12_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_12_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_12_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_12_0_tsni = function integerbench_inst_12_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_12_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_12_0_1_tsni = function enumFromThenTo_inst_12_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_12_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_12_0_2_tsni = function enumFromThenTo_inst_12_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_12_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_12_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_13_tsni = function runbench_inst_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_13_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_13_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_13_3_tsni = function intbench_inst_13_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_13_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_13_3_4_tsni = function enumFromThenTo_inst_13_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_13_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_13_3_5_tsni = function enumFromThenTo_inst_13_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_13_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_13_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_13_0_tsni = function integerbench_inst_13_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_13_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_13_0_1_tsni = function enumFromThenTo_inst_13_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_13_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_13_0_2_tsni = function enumFromThenTo_inst_13_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_13_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_13_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_14_tsni = function runbench_inst_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_14_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_14_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_14_3_tsni = function intbench_inst_14_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_14_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_14_3_4_tsni = function enumFromThenTo_inst_14_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_14_3_5_tsni = function enumFromThenTo_inst_14_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_14_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_14_0_tsni = function integerbench_inst_14_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_14_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_14_0_1_tsni = function enumFromThenTo_inst_14_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_14_0_2_tsni = function enumFromThenTo_inst_14_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_14_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_15_tsni = function runbench_inst_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_15_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_15_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_15_3_tsni = function intbench_inst_15_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_15_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_15_3_4_tsni = function enumFromThenTo_inst_15_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_15_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_15_3_5_tsni = function enumFromThenTo_inst_15_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_15_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_15_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_15_0_tsni = function integerbench_inst_15_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_15_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_15_0_1_tsni = function enumFromThenTo_inst_15_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_15_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_15_0_2_tsni = function enumFromThenTo_inst_15_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_15_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_15_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runalltests_inst_16_tsni = function runalltests_inst_16_tsni(astart, astep, alim, bstart, bstep, blim) {
  let z_lt, z_add, z_leq, z_mod, z_gt, z_geq, z_mul, z_equal, z_sub, z_div, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19;
  z_add = function z_add(a, b) {
    return a + b
  };
  z_sub = function z_sub(a, b) {
    return a - b
  };
  z_mul = function z_mul(a, b) {
    return a * b
  };
  z_div = function z_div(a, b) {
    return NofibPrelude.intDiv(a, b)
  };
  z_mod = function z_mod(a, b) {
    return NofibPrelude.intMod(a, b)
  };
  z_equal = function z_equal(a, b) {
    return a == b
  };
  z_lt = function z_lt(a, b) {
    return a < b
  };
  z_leq = function z_leq(a, b) {
    return a <= b
  };
  z_gt = function z_gt(a, b) {
    return a > b
  };
  z_geq = function z_geq(a, b) {
    return a >= b
  };
  lambda = (undefined, function (a, b) {
    return z_add(a, b)
  });
  lambda1 = (undefined, function (a, b) {
    return a + b
  });
  tmp = runbench_inst_16_15_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  lambda2 = (undefined, function (a, b) {
    return z_sub(a, b)
  });
  lambda3 = (undefined, function (a, b) {
    return a - b
  });
  tmp1 = runbench_inst_16_14_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  lambda4 = (undefined, function (a, b) {
    return z_mul(a, b)
  });
  lambda5 = (undefined, function (a, b) {
    return a * b
  });
  tmp3 = runbench_inst_16_13_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  lambda6 = (undefined, function (a, b) {
    return z_div(a, b)
  });
  lambda7 = (undefined, function (a, b) {
    return NofibPrelude.intDiv(a, b)
  });
  tmp5 = runbench_inst_16_12_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  lambda8 = (undefined, function (a, b) {
    return z_mod(a, b)
  });
  lambda9 = (undefined, function (a, b) {
    return NofibPrelude.intMod(a, b)
  });
  tmp7 = runbench_inst_16_11_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  lambda10 = (undefined, function (a, b) {
    return z_equal(a, b)
  });
  lambda11 = (undefined, function (a, b) {
    return a == b
  });
  tmp9 = runbench_inst_16_10_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  lambda12 = (undefined, function (a, b) {
    return z_lt(a, b)
  });
  lambda13 = (undefined, function (a, b) {
    return a < b
  });
  tmp11 = runbench_inst_16_9_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  lambda14 = (undefined, function (a, b) {
    return z_leq(a, b)
  });
  lambda15 = (undefined, function (a, b) {
    return a <= b
  });
  tmp13 = runbench_inst_16_8_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  lambda16 = (undefined, function (a, b) {
    return z_gt(a, b)
  });
  lambda17 = (undefined, function (a, b) {
    return a > b
  });
  tmp15 = runbench_inst_16_7_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  lambda18 = (undefined, function (a, b) {
    return z_geq(a, b)
  });
  lambda19 = (undefined, function (a, b) {
    return a >= b
  });
  tmp17 = runbench_inst_16_6_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_16_15_tsni = function runbench_inst_16_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_15_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_15_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_15_0_tsni = function integerbench_inst_16_15_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_15_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_15_0_1_tsni = function enumFromThenTo_inst_16_15_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_15_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_15_0_2_tsni = function enumFromThenTo_inst_16_15_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_15_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_15_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_15_3_tsni = function intbench_inst_16_15_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_15_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_15_3_4_tsni = function enumFromThenTo_inst_16_15_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_15_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_15_3_5_tsni = function enumFromThenTo_inst_16_15_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_15_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_15_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_14_tsni = function runbench_inst_16_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_14_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_14_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_14_0_tsni = function integerbench_inst_16_14_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_14_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_14_0_1_tsni = function enumFromThenTo_inst_16_14_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_14_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_14_0_2_tsni = function enumFromThenTo_inst_16_14_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_14_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_14_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_14_3_tsni = function intbench_inst_16_14_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_14_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_14_3_4_tsni = function enumFromThenTo_inst_16_14_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_14_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_14_3_5_tsni = function enumFromThenTo_inst_16_14_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_14_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_14_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_13_tsni = function runbench_inst_16_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_13_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_13_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_13_0_tsni = function integerbench_inst_16_13_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_13_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_13_0_1_tsni = function enumFromThenTo_inst_16_13_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_13_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_13_0_2_tsni = function enumFromThenTo_inst_16_13_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_13_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_13_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_13_3_tsni = function intbench_inst_16_13_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_13_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_13_3_4_tsni = function enumFromThenTo_inst_16_13_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_13_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_13_3_5_tsni = function enumFromThenTo_inst_16_13_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_13_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_13_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_12_tsni = function runbench_inst_16_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_12_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_12_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_12_0_tsni = function integerbench_inst_16_12_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_12_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_12_0_1_tsni = function enumFromThenTo_inst_16_12_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_12_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_12_0_2_tsni = function enumFromThenTo_inst_16_12_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_12_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_12_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_12_3_tsni = function intbench_inst_16_12_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_12_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_12_3_4_tsni = function enumFromThenTo_inst_16_12_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_12_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_12_3_5_tsni = function enumFromThenTo_inst_16_12_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_12_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_12_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_11_tsni = function runbench_inst_16_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_11_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_11_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_11_0_tsni = function integerbench_inst_16_11_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_11_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_11_0_1_tsni = function enumFromThenTo_inst_16_11_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_11_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_11_0_2_tsni = function enumFromThenTo_inst_16_11_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_11_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_11_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_11_3_tsni = function intbench_inst_16_11_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_11_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_11_3_4_tsni = function enumFromThenTo_inst_16_11_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_11_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_11_3_5_tsni = function enumFromThenTo_inst_16_11_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_11_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_11_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_10_tsni = function runbench_inst_16_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_10_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_10_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_10_0_tsni = function integerbench_inst_16_10_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_10_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_10_0_1_tsni = function enumFromThenTo_inst_16_10_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_10_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_10_0_2_tsni = function enumFromThenTo_inst_16_10_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_10_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_10_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_10_3_tsni = function intbench_inst_16_10_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_10_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_10_3_4_tsni = function enumFromThenTo_inst_16_10_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_10_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_10_3_5_tsni = function enumFromThenTo_inst_16_10_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_10_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_10_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_9_tsni = function runbench_inst_16_9_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_9_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_9_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_9_0_tsni = function integerbench_inst_16_9_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_9_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_9_0_1_tsni = function enumFromThenTo_inst_16_9_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_9_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_9_0_2_tsni = function enumFromThenTo_inst_16_9_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_9_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_9_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_9_3_tsni = function intbench_inst_16_9_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_9_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_9_3_4_tsni = function enumFromThenTo_inst_16_9_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_9_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_9_3_5_tsni = function enumFromThenTo_inst_16_9_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_9_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_9_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_8_tsni = function runbench_inst_16_8_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_8_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_8_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_8_0_tsni = function integerbench_inst_16_8_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_8_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_8_0_1_tsni = function enumFromThenTo_inst_16_8_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_8_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_8_0_2_tsni = function enumFromThenTo_inst_16_8_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_8_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_8_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_8_3_tsni = function intbench_inst_16_8_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_8_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_8_3_4_tsni = function enumFromThenTo_inst_16_8_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_8_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_8_3_5_tsni = function enumFromThenTo_inst_16_8_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_8_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_8_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_7_tsni = function runbench_inst_16_7_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_7_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_7_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_7_0_tsni = function integerbench_inst_16_7_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_7_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_7_0_1_tsni = function enumFromThenTo_inst_16_7_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_7_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_7_0_2_tsni = function enumFromThenTo_inst_16_7_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_7_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_7_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_7_3_tsni = function intbench_inst_16_7_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_7_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_7_3_4_tsni = function enumFromThenTo_inst_16_7_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_7_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_7_3_5_tsni = function enumFromThenTo_inst_16_7_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_7_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_7_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_16_6_tsni = function runbench_inst_16_6_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_16_6_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_16_6_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_16_6_0_tsni = function integerbench_inst_16_6_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_6_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_6_0_1_tsni = function enumFromThenTo_inst_16_6_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_6_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_6_0_2_tsni = function enumFromThenTo_inst_16_6_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_6_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_6_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_16_6_3_tsni = function intbench_inst_16_6_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_16_6_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_16_6_3_4_tsni = function enumFromThenTo_inst_16_6_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_6_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_16_6_3_5_tsni = function enumFromThenTo_inst_16_6_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_16_6_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_16_6_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
testInteger_nofib_inst_17_tsni = function testInteger_nofib_inst_17_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = - 2100000000;
  tmp1 = - 2100000000;
  tmp2 = - 2100000000;
  return runalltests_inst_17_16_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
};
runalltests_inst_17_16_tsni = function runalltests_inst_17_16_tsni(astart, astep, alim, bstart, bstep, blim) {
  let z_lt, z_add, z_leq, z_mod, z_gt, z_geq, z_mul, z_equal, z_sub, z_div, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19;
  z_add = function z_add(a, b) {
    return a + b
  };
  z_sub = function z_sub(a, b) {
    return a - b
  };
  z_mul = function z_mul(a, b) {
    return a * b
  };
  z_div = function z_div(a, b) {
    return NofibPrelude.intDiv(a, b)
  };
  z_mod = function z_mod(a, b) {
    return NofibPrelude.intMod(a, b)
  };
  z_equal = function z_equal(a, b) {
    return a == b
  };
  z_lt = function z_lt(a, b) {
    return a < b
  };
  z_leq = function z_leq(a, b) {
    return a <= b
  };
  z_gt = function z_gt(a, b) {
    return a > b
  };
  z_geq = function z_geq(a, b) {
    return a >= b
  };
  lambda = (undefined, function (a, b) {
    return z_add(a, b)
  });
  lambda1 = (undefined, function (a, b) {
    return a + b
  });
  tmp = runbench_inst_17_16_15_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  lambda2 = (undefined, function (a, b) {
    return z_sub(a, b)
  });
  lambda3 = (undefined, function (a, b) {
    return a - b
  });
  tmp1 = runbench_inst_17_16_14_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  lambda4 = (undefined, function (a, b) {
    return z_mul(a, b)
  });
  lambda5 = (undefined, function (a, b) {
    return a * b
  });
  tmp3 = runbench_inst_17_16_13_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  lambda6 = (undefined, function (a, b) {
    return z_div(a, b)
  });
  lambda7 = (undefined, function (a, b) {
    return NofibPrelude.intDiv(a, b)
  });
  tmp5 = runbench_inst_17_16_12_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  lambda8 = (undefined, function (a, b) {
    return z_mod(a, b)
  });
  lambda9 = (undefined, function (a, b) {
    return NofibPrelude.intMod(a, b)
  });
  tmp7 = runbench_inst_17_16_11_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  lambda10 = (undefined, function (a, b) {
    return z_equal(a, b)
  });
  lambda11 = (undefined, function (a, b) {
    return a == b
  });
  tmp9 = runbench_inst_17_16_10_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  lambda12 = (undefined, function (a, b) {
    return z_lt(a, b)
  });
  lambda13 = (undefined, function (a, b) {
    return a < b
  });
  tmp11 = runbench_inst_17_16_9_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  lambda14 = (undefined, function (a, b) {
    return z_leq(a, b)
  });
  lambda15 = (undefined, function (a, b) {
    return a <= b
  });
  tmp13 = runbench_inst_17_16_8_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  lambda16 = (undefined, function (a, b) {
    return z_gt(a, b)
  });
  lambda17 = (undefined, function (a, b) {
    return a > b
  });
  tmp15 = runbench_inst_17_16_7_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  lambda18 = (undefined, function (a, b) {
    return z_geq(a, b)
  });
  lambda19 = (undefined, function (a, b) {
    return a >= b
  });
  tmp17 = runbench_inst_17_16_6_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_17_16_6_tsni = function runbench_inst_17_16_6_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_6_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_6_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_6_3_tsni = function intbench_inst_17_16_6_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_6_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_6_3_4_tsni = function enumFromThenTo_inst_17_16_6_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_6_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_6_3_5_tsni = function enumFromThenTo_inst_17_16_6_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_6_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_6_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_6_0_tsni = function integerbench_inst_17_16_6_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_6_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_6_0_1_tsni = function enumFromThenTo_inst_17_16_6_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_6_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_6_0_2_tsni = function enumFromThenTo_inst_17_16_6_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_6_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_6_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_7_tsni = function runbench_inst_17_16_7_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_7_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_7_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_7_3_tsni = function intbench_inst_17_16_7_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_7_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_7_3_4_tsni = function enumFromThenTo_inst_17_16_7_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_7_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_7_3_5_tsni = function enumFromThenTo_inst_17_16_7_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_7_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_7_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_7_0_tsni = function integerbench_inst_17_16_7_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_7_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_7_0_1_tsni = function enumFromThenTo_inst_17_16_7_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_7_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_7_0_2_tsni = function enumFromThenTo_inst_17_16_7_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_7_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_7_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_8_tsni = function runbench_inst_17_16_8_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_8_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_8_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_8_3_tsni = function intbench_inst_17_16_8_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_8_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_8_3_4_tsni = function enumFromThenTo_inst_17_16_8_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_8_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_8_3_5_tsni = function enumFromThenTo_inst_17_16_8_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_8_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_8_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_8_0_tsni = function integerbench_inst_17_16_8_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_8_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_8_0_1_tsni = function enumFromThenTo_inst_17_16_8_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_8_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_8_0_2_tsni = function enumFromThenTo_inst_17_16_8_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_8_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_8_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_9_tsni = function runbench_inst_17_16_9_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_9_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_9_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_9_3_tsni = function intbench_inst_17_16_9_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_9_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_9_3_4_tsni = function enumFromThenTo_inst_17_16_9_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_9_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_9_3_5_tsni = function enumFromThenTo_inst_17_16_9_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_9_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_9_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_9_0_tsni = function integerbench_inst_17_16_9_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_9_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_9_0_1_tsni = function enumFromThenTo_inst_17_16_9_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_9_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_9_0_2_tsni = function enumFromThenTo_inst_17_16_9_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_9_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_9_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_10_tsni = function runbench_inst_17_16_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_10_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_10_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_10_3_tsni = function intbench_inst_17_16_10_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_10_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_10_3_4_tsni = function enumFromThenTo_inst_17_16_10_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_10_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_10_3_5_tsni = function enumFromThenTo_inst_17_16_10_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_10_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_10_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_10_0_tsni = function integerbench_inst_17_16_10_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_10_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_10_0_1_tsni = function enumFromThenTo_inst_17_16_10_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_10_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_10_0_2_tsni = function enumFromThenTo_inst_17_16_10_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_10_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_10_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_11_tsni = function runbench_inst_17_16_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_11_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_11_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_11_3_tsni = function intbench_inst_17_16_11_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_11_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_11_3_4_tsni = function enumFromThenTo_inst_17_16_11_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_11_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_11_3_5_tsni = function enumFromThenTo_inst_17_16_11_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_11_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_11_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_11_0_tsni = function integerbench_inst_17_16_11_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_11_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_11_0_1_tsni = function enumFromThenTo_inst_17_16_11_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_11_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_11_0_2_tsni = function enumFromThenTo_inst_17_16_11_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_11_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_11_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_12_tsni = function runbench_inst_17_16_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_12_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_12_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_12_3_tsni = function intbench_inst_17_16_12_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_12_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_12_3_4_tsni = function enumFromThenTo_inst_17_16_12_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_12_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_12_3_5_tsni = function enumFromThenTo_inst_17_16_12_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_12_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_12_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_12_0_tsni = function integerbench_inst_17_16_12_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_12_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_12_0_1_tsni = function enumFromThenTo_inst_17_16_12_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_12_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_12_0_2_tsni = function enumFromThenTo_inst_17_16_12_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_12_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_12_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_13_tsni = function runbench_inst_17_16_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_13_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_13_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_13_3_tsni = function intbench_inst_17_16_13_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_13_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_13_3_4_tsni = function enumFromThenTo_inst_17_16_13_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_13_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_13_3_5_tsni = function enumFromThenTo_inst_17_16_13_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_13_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_13_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_13_0_tsni = function integerbench_inst_17_16_13_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_13_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_13_0_1_tsni = function enumFromThenTo_inst_17_16_13_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_13_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_13_0_2_tsni = function enumFromThenTo_inst_17_16_13_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_13_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_13_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_14_tsni = function runbench_inst_17_16_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_14_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_14_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_14_3_tsni = function intbench_inst_17_16_14_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_14_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_14_3_4_tsni = function enumFromThenTo_inst_17_16_14_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_14_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_14_3_5_tsni = function enumFromThenTo_inst_17_16_14_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_14_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_14_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_14_0_tsni = function integerbench_inst_17_16_14_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_14_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_14_0_1_tsni = function enumFromThenTo_inst_17_16_14_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_14_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_14_0_2_tsni = function enumFromThenTo_inst_17_16_14_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_14_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_14_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_16_15_tsni = function runbench_inst_17_16_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_16_15_3_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_16_15_0_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_17_16_15_3_tsni = function intbench_inst_17_16_15_3_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_15_3_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_15_3_4_tsni = function enumFromThenTo_inst_17_16_15_3_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_15_3_4_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_15_3_5_tsni = function enumFromThenTo_inst_17_16_15_3_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_15_3_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_15_3_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_17_16_15_0_tsni = function integerbench_inst_17_16_15_0_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_16_15_0_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_17_16_15_0_1_tsni = function enumFromThenTo_inst_17_16_15_0_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_15_0_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp2, lscomp1, op, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2(t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (lscomp2, lscomp1, op, a1, t1) => {
      return lscomp1(t1)
    }
  }
};
enumFromThenTo_inst_17_16_15_0_2_tsni = function enumFromThenTo_inst_17_16_15_0_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_16_15_0_2_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (lscomp1, op, bstart, bstep, blim) => {
      let lscomp2, param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      lscomp2 = function lscomp2(ls) {
        return runtime.safeCall(ls(lscomp2, lscomp1, op, a1, t1))
      };
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_16_15_0_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
(class integer {
  static {
    integer1 = integer;
  }
  static integerbench(op, astart, astep, alim, bstart, bstep, blim) {
    let lscomp1, tmp, tmp1;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, param0, param1, a, t1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        a = param0;
        t1 = param1;
        lscomp2 = function lscomp2(ls1) {
          let param01, param11, b, t2, tmp4, tmp5;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            param01 = ls1.head;
            param11 = ls1.tail;
            b = param01;
            t2 = param11;
            tmp4 = runtime.safeCall(op(a, b));
            tmp5 = lscomp2(t2);
            return NofibPrelude.Cons(tmp4, tmp5)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp2 = bstart + bstep;
        tmp3 = NofibPrelude.enumFromThenTo(bstart, tmp2, blim);
        return lscomp2(tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = astart + astep;
    tmp1 = NofibPrelude.enumFromThenTo(astart, tmp, alim);
    return lscomp1(tmp1)
  } 
  static intbench(op1, astart1, astep1, alim1, bstart1, bstep1, blim1) {
    let lscomp1, tmp, tmp1;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, param0, param1, a, t1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        a = param0;
        t1 = param1;
        lscomp2 = function lscomp2(ls1) {
          let param01, param11, b, t2, tmp4, tmp5;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            param01 = ls1.head;
            param11 = ls1.tail;
            b = param01;
            t2 = param11;
            tmp4 = runtime.safeCall(op1(a, b));
            tmp5 = lscomp2(t2);
            return NofibPrelude.Cons(tmp4, tmp5)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp2 = bstart1 + bstep1;
        tmp3 = NofibPrelude.enumFromThenTo(bstart1, tmp2, blim1);
        return lscomp2(tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = astart1 + astep1;
    tmp1 = NofibPrelude.enumFromThenTo(astart1, tmp, alim1);
    return lscomp1(tmp1)
  } 
  static runbench(jop, iop, opstr, astart2, astep2, alim2, bstart2, bstep2, blim2) {
    let tmp, tmp1;
    tmp = intbench_inst_3_tsni(iop, astart2, astep2, alim2, astart2, astep2, alim2);
    tmp1 = integerbench_inst_0_tsni(jop, astart2, astep2, alim2, astart2, astep2, alim2);
    return (tmp , tmp1)
  } 
  static runalltests(astart3, astep3, alim3, bstart3, bstep3, blim3) {
    let z_lt, z_add, z_leq, z_mod, z_gt, z_geq, z_mul, z_equal, z_sub, z_div, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19;
    z_add = function z_add(a, b) {
      return a + b
    };
    z_sub = function z_sub(a, b) {
      return a - b
    };
    z_mul = function z_mul(a, b) {
      return a * b
    };
    z_div = function z_div(a, b) {
      return NofibPrelude.intDiv(a, b)
    };
    z_mod = function z_mod(a, b) {
      return NofibPrelude.intMod(a, b)
    };
    z_equal = function z_equal(a, b) {
      return a == b
    };
    z_lt = function z_lt(a, b) {
      return a < b
    };
    z_leq = function z_leq(a, b) {
      return a <= b
    };
    z_gt = function z_gt(a, b) {
      return a > b
    };
    z_geq = function z_geq(a, b) {
      return a >= b
    };
    lambda = (undefined, function (a, b) {
      return z_add(a, b)
    });
    lambda1 = (undefined, function (a, b) {
      return a + b
    });
    tmp = runbench_inst_15_tsni(lambda, lambda1, "(+)", astart3, astep3, alim3, astart3, astep3, alim3);
    lambda2 = (undefined, function (a, b) {
      return z_sub(a, b)
    });
    lambda3 = (undefined, function (a, b) {
      return a - b
    });
    tmp1 = runbench_inst_14_tsni(lambda2, lambda3, "(-)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp2 = (tmp , tmp1);
    lambda4 = (undefined, function (a, b) {
      return z_mul(a, b)
    });
    lambda5 = (undefined, function (a, b) {
      return a * b
    });
    tmp3 = runbench_inst_13_tsni(lambda4, lambda5, "(*)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp4 = (tmp2 , tmp3);
    lambda6 = (undefined, function (a, b) {
      return z_div(a, b)
    });
    lambda7 = (undefined, function (a, b) {
      return NofibPrelude.intDiv(a, b)
    });
    tmp5 = runbench_inst_12_tsni(lambda6, lambda7, "div", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp6 = (tmp4 , tmp5);
    lambda8 = (undefined, function (a, b) {
      return z_mod(a, b)
    });
    lambda9 = (undefined, function (a, b) {
      return NofibPrelude.intMod(a, b)
    });
    tmp7 = runbench_inst_11_tsni(lambda8, lambda9, "mod", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp8 = (tmp6 , tmp7);
    lambda10 = (undefined, function (a, b) {
      return z_equal(a, b)
    });
    lambda11 = (undefined, function (a, b) {
      return a == b
    });
    tmp9 = runbench_inst_10_tsni(lambda10, lambda11, "(==)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp10 = (tmp8 , tmp9);
    lambda12 = (undefined, function (a, b) {
      return z_lt(a, b)
    });
    lambda13 = (undefined, function (a, b) {
      return a < b
    });
    tmp11 = runbench_inst_9_tsni(lambda12, lambda13, "(<)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp12 = (tmp10 , tmp11);
    lambda14 = (undefined, function (a, b) {
      return z_leq(a, b)
    });
    lambda15 = (undefined, function (a, b) {
      return a <= b
    });
    tmp13 = runbench_inst_8_tsni(lambda14, lambda15, "(<=)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp14 = (tmp12 , tmp13);
    lambda16 = (undefined, function (a, b) {
      return z_gt(a, b)
    });
    lambda17 = (undefined, function (a, b) {
      return a > b
    });
    tmp15 = runbench_inst_7_tsni(lambda16, lambda17, "(>)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp16 = (tmp14 , tmp15);
    lambda18 = (undefined, function (a, b) {
      return z_geq(a, b)
    });
    lambda19 = (undefined, function (a, b) {
      return a >= b
    });
    tmp17 = runbench_inst_6_tsni(lambda18, lambda19, "(>=)", astart3, astep3, alim3, astart3, astep3, alim3);
    return (tmp16 , tmp17)
  } 
  static testInteger_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = - 2100000000;
    tmp1 = - 2100000000;
    tmp2 = - 2100000000;
    return runalltests_inst_16_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
  } 
  static main() {
    let tmp;
    tmp = testInteger_nofib_inst_17_tsni(700000001);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "integer"; }
});
let integer = integer1; export default integer;
