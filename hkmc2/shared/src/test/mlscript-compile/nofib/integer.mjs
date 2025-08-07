import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let integer1, enumFromThenTo_inst_0_1_tsni, enumFromThenTo_inst_0_2_tsni, enumFromThenTo_inst_3_4_tsni, enumFromThenTo_inst_3_5_tsni, intbench_inst_6_7_tsni, enumFromThenTo_inst_6_7_4_tsni, enumFromThenTo_inst_6_7_5_tsni, integerbench_inst_6_8_tsni, enumFromThenTo_inst_6_8_1_tsni, enumFromThenTo_inst_6_8_2_tsni, runbench_inst_9_10_tsni, integerbench_inst_9_10_8_tsni, enumFromThenTo_inst_9_10_8_1_tsni, enumFromThenTo_inst_9_10_8_2_tsni, intbench_inst_9_10_7_tsni, enumFromThenTo_inst_9_10_7_4_tsni, enumFromThenTo_inst_9_10_7_5_tsni, runbench_inst_9_11_tsni, integerbench_inst_9_11_8_tsni, enumFromThenTo_inst_9_11_8_1_tsni, enumFromThenTo_inst_9_11_8_2_tsni, intbench_inst_9_11_7_tsni, enumFromThenTo_inst_9_11_7_4_tsni, enumFromThenTo_inst_9_11_7_5_tsni, runbench_inst_9_12_tsni, integerbench_inst_9_12_8_tsni, enumFromThenTo_inst_9_12_8_1_tsni, enumFromThenTo_inst_9_12_8_2_tsni, intbench_inst_9_12_7_tsni, enumFromThenTo_inst_9_12_7_4_tsni, enumFromThenTo_inst_9_12_7_5_tsni, runbench_inst_9_13_tsni, integerbench_inst_9_13_8_tsni, enumFromThenTo_inst_9_13_8_1_tsni, enumFromThenTo_inst_9_13_8_2_tsni, intbench_inst_9_13_7_tsni, enumFromThenTo_inst_9_13_7_4_tsni, enumFromThenTo_inst_9_13_7_5_tsni, runbench_inst_9_14_tsni, integerbench_inst_9_14_8_tsni, enumFromThenTo_inst_9_14_8_1_tsni, enumFromThenTo_inst_9_14_8_2_tsni, intbench_inst_9_14_7_tsni, enumFromThenTo_inst_9_14_7_4_tsni, enumFromThenTo_inst_9_14_7_5_tsni, runbench_inst_9_15_tsni, integerbench_inst_9_15_8_tsni, enumFromThenTo_inst_9_15_8_1_tsni, enumFromThenTo_inst_9_15_8_2_tsni, intbench_inst_9_15_7_tsni, enumFromThenTo_inst_9_15_7_4_tsni, enumFromThenTo_inst_9_15_7_5_tsni, runbench_inst_9_16_tsni, integerbench_inst_9_16_8_tsni, enumFromThenTo_inst_9_16_8_1_tsni, enumFromThenTo_inst_9_16_8_2_tsni, intbench_inst_9_16_7_tsni, enumFromThenTo_inst_9_16_7_4_tsni, enumFromThenTo_inst_9_16_7_5_tsni, runbench_inst_9_17_tsni, integerbench_inst_9_17_8_tsni, enumFromThenTo_inst_9_17_8_1_tsni, enumFromThenTo_inst_9_17_8_2_tsni, intbench_inst_9_17_7_tsni, enumFromThenTo_inst_9_17_7_4_tsni, enumFromThenTo_inst_9_17_7_5_tsni, runbench_inst_9_18_tsni, integerbench_inst_9_18_8_tsni, enumFromThenTo_inst_9_18_8_1_tsni, enumFromThenTo_inst_9_18_8_2_tsni, intbench_inst_9_18_7_tsni, enumFromThenTo_inst_9_18_7_4_tsni, enumFromThenTo_inst_9_18_7_5_tsni, runbench_inst_9_19_tsni, integerbench_inst_9_19_8_tsni, enumFromThenTo_inst_9_19_8_1_tsni, enumFromThenTo_inst_9_19_8_2_tsni, intbench_inst_9_19_7_tsni, enumFromThenTo_inst_9_19_7_4_tsni, enumFromThenTo_inst_9_19_7_5_tsni, runalltests_inst_20_21_tsni, runbench_inst_20_21_19_tsni, intbench_inst_20_21_19_7_tsni, enumFromThenTo_inst_20_21_19_7_4_tsni, enumFromThenTo_inst_20_21_19_7_5_tsni, integerbench_inst_20_21_19_8_tsni, enumFromThenTo_inst_20_21_19_8_1_tsni, enumFromThenTo_inst_20_21_19_8_2_tsni, runbench_inst_20_21_18_tsni, intbench_inst_20_21_18_7_tsni, enumFromThenTo_inst_20_21_18_7_4_tsni, enumFromThenTo_inst_20_21_18_7_5_tsni, integerbench_inst_20_21_18_8_tsni, enumFromThenTo_inst_20_21_18_8_1_tsni, enumFromThenTo_inst_20_21_18_8_2_tsni, runbench_inst_20_21_17_tsni, intbench_inst_20_21_17_7_tsni, enumFromThenTo_inst_20_21_17_7_4_tsni, enumFromThenTo_inst_20_21_17_7_5_tsni, integerbench_inst_20_21_17_8_tsni, enumFromThenTo_inst_20_21_17_8_1_tsni, enumFromThenTo_inst_20_21_17_8_2_tsni, runbench_inst_20_21_16_tsni, intbench_inst_20_21_16_7_tsni, enumFromThenTo_inst_20_21_16_7_4_tsni, enumFromThenTo_inst_20_21_16_7_5_tsni, integerbench_inst_20_21_16_8_tsni, enumFromThenTo_inst_20_21_16_8_1_tsni, enumFromThenTo_inst_20_21_16_8_2_tsni, runbench_inst_20_21_15_tsni, intbench_inst_20_21_15_7_tsni, enumFromThenTo_inst_20_21_15_7_4_tsni, enumFromThenTo_inst_20_21_15_7_5_tsni, integerbench_inst_20_21_15_8_tsni, enumFromThenTo_inst_20_21_15_8_1_tsni, enumFromThenTo_inst_20_21_15_8_2_tsni, runbench_inst_20_21_14_tsni, intbench_inst_20_21_14_7_tsni, enumFromThenTo_inst_20_21_14_7_4_tsni, enumFromThenTo_inst_20_21_14_7_5_tsni, integerbench_inst_20_21_14_8_tsni, enumFromThenTo_inst_20_21_14_8_1_tsni, enumFromThenTo_inst_20_21_14_8_2_tsni, runbench_inst_20_21_13_tsni, intbench_inst_20_21_13_7_tsni, enumFromThenTo_inst_20_21_13_7_4_tsni, enumFromThenTo_inst_20_21_13_7_5_tsni, integerbench_inst_20_21_13_8_tsni, enumFromThenTo_inst_20_21_13_8_1_tsni, enumFromThenTo_inst_20_21_13_8_2_tsni, runbench_inst_20_21_12_tsni, intbench_inst_20_21_12_7_tsni, enumFromThenTo_inst_20_21_12_7_4_tsni, enumFromThenTo_inst_20_21_12_7_5_tsni, integerbench_inst_20_21_12_8_tsni, enumFromThenTo_inst_20_21_12_8_1_tsni, enumFromThenTo_inst_20_21_12_8_2_tsni, runbench_inst_20_21_11_tsni, intbench_inst_20_21_11_7_tsni, enumFromThenTo_inst_20_21_11_7_4_tsni, enumFromThenTo_inst_20_21_11_7_5_tsni, integerbench_inst_20_21_11_8_tsni, enumFromThenTo_inst_20_21_11_8_1_tsni, enumFromThenTo_inst_20_21_11_8_2_tsni, runbench_inst_20_21_10_tsni, intbench_inst_20_21_10_7_tsni, enumFromThenTo_inst_20_21_10_7_4_tsni, enumFromThenTo_inst_20_21_10_7_5_tsni, integerbench_inst_20_21_10_8_tsni, enumFromThenTo_inst_20_21_10_8_1_tsni, enumFromThenTo_inst_20_21_10_8_2_tsni, testInteger_nofib_inst_22_23_tsni, runalltests_inst_22_23_21_tsni, runbench_inst_22_23_21_10_tsni, integerbench_inst_22_23_21_10_8_tsni, enumFromThenTo_inst_22_23_21_10_8_1_tsni, enumFromThenTo_inst_22_23_21_10_8_2_tsni, intbench_inst_22_23_21_10_7_tsni, enumFromThenTo_inst_22_23_21_10_7_4_tsni, enumFromThenTo_inst_22_23_21_10_7_5_tsni, runbench_inst_22_23_21_11_tsni, integerbench_inst_22_23_21_11_8_tsni, enumFromThenTo_inst_22_23_21_11_8_1_tsni, enumFromThenTo_inst_22_23_21_11_8_2_tsni, intbench_inst_22_23_21_11_7_tsni, enumFromThenTo_inst_22_23_21_11_7_4_tsni, enumFromThenTo_inst_22_23_21_11_7_5_tsni, runbench_inst_22_23_21_12_tsni, integerbench_inst_22_23_21_12_8_tsni, enumFromThenTo_inst_22_23_21_12_8_1_tsni, enumFromThenTo_inst_22_23_21_12_8_2_tsni, intbench_inst_22_23_21_12_7_tsni, enumFromThenTo_inst_22_23_21_12_7_4_tsni, enumFromThenTo_inst_22_23_21_12_7_5_tsni, runbench_inst_22_23_21_13_tsni, integerbench_inst_22_23_21_13_8_tsni, enumFromThenTo_inst_22_23_21_13_8_1_tsni, enumFromThenTo_inst_22_23_21_13_8_2_tsni, intbench_inst_22_23_21_13_7_tsni, enumFromThenTo_inst_22_23_21_13_7_4_tsni, enumFromThenTo_inst_22_23_21_13_7_5_tsni, runbench_inst_22_23_21_14_tsni, integerbench_inst_22_23_21_14_8_tsni, enumFromThenTo_inst_22_23_21_14_8_1_tsni, enumFromThenTo_inst_22_23_21_14_8_2_tsni, intbench_inst_22_23_21_14_7_tsni, enumFromThenTo_inst_22_23_21_14_7_4_tsni, enumFromThenTo_inst_22_23_21_14_7_5_tsni, runbench_inst_22_23_21_15_tsni, integerbench_inst_22_23_21_15_8_tsni, enumFromThenTo_inst_22_23_21_15_8_1_tsni, enumFromThenTo_inst_22_23_21_15_8_2_tsni, intbench_inst_22_23_21_15_7_tsni, enumFromThenTo_inst_22_23_21_15_7_4_tsni, enumFromThenTo_inst_22_23_21_15_7_5_tsni, runbench_inst_22_23_21_16_tsni, integerbench_inst_22_23_21_16_8_tsni, enumFromThenTo_inst_22_23_21_16_8_1_tsni, enumFromThenTo_inst_22_23_21_16_8_2_tsni, intbench_inst_22_23_21_16_7_tsni, enumFromThenTo_inst_22_23_21_16_7_4_tsni, enumFromThenTo_inst_22_23_21_16_7_5_tsni, runbench_inst_22_23_21_17_tsni, integerbench_inst_22_23_21_17_8_tsni, enumFromThenTo_inst_22_23_21_17_8_1_tsni, enumFromThenTo_inst_22_23_21_17_8_2_tsni, intbench_inst_22_23_21_17_7_tsni, enumFromThenTo_inst_22_23_21_17_7_4_tsni, enumFromThenTo_inst_22_23_21_17_7_5_tsni, runbench_inst_22_23_21_18_tsni, integerbench_inst_22_23_21_18_8_tsni, enumFromThenTo_inst_22_23_21_18_8_1_tsni, enumFromThenTo_inst_22_23_21_18_8_2_tsni, intbench_inst_22_23_21_18_7_tsni, enumFromThenTo_inst_22_23_21_18_7_4_tsni, enumFromThenTo_inst_22_23_21_18_7_5_tsni, runbench_inst_22_23_21_19_tsni, integerbench_inst_22_23_21_19_8_tsni, enumFromThenTo_inst_22_23_21_19_8_1_tsni, enumFromThenTo_inst_22_23_21_19_8_2_tsni, intbench_inst_22_23_21_19_7_tsni, enumFromThenTo_inst_22_23_21_19_7_4_tsni, enumFromThenTo_inst_22_23_21_19_7_5_tsni;
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
intbench_inst_6_7_tsni = function intbench_inst_6_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_6_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_6_7_4_tsni = function enumFromThenTo_inst_6_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_6_7_5_tsni = function enumFromThenTo_inst_6_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_6_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_6_8_tsni = function integerbench_inst_6_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_6_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_6_8_1_tsni = function enumFromThenTo_inst_6_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_6_8_2_tsni = function enumFromThenTo_inst_6_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_6_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_6_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_10_tsni = function runbench_inst_9_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_10_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_10_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_10_8_tsni = function integerbench_inst_9_10_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_10_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_10_8_1_tsni = function enumFromThenTo_inst_9_10_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_10_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_10_8_2_tsni = function enumFromThenTo_inst_9_10_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_10_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_10_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_10_7_tsni = function intbench_inst_9_10_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_10_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_10_7_4_tsni = function enumFromThenTo_inst_9_10_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_10_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_10_7_5_tsni = function enumFromThenTo_inst_9_10_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_10_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_10_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_11_tsni = function runbench_inst_9_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_11_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_11_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_11_8_tsni = function integerbench_inst_9_11_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_11_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_11_8_1_tsni = function enumFromThenTo_inst_9_11_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_11_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_11_8_2_tsni = function enumFromThenTo_inst_9_11_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_11_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_11_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_11_7_tsni = function intbench_inst_9_11_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_11_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_11_7_4_tsni = function enumFromThenTo_inst_9_11_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_11_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_11_7_5_tsni = function enumFromThenTo_inst_9_11_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_11_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_11_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_12_tsni = function runbench_inst_9_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_12_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_12_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_12_8_tsni = function integerbench_inst_9_12_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_12_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_12_8_1_tsni = function enumFromThenTo_inst_9_12_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_12_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_12_8_2_tsni = function enumFromThenTo_inst_9_12_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_12_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_12_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_12_7_tsni = function intbench_inst_9_12_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_12_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_12_7_4_tsni = function enumFromThenTo_inst_9_12_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_12_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_12_7_5_tsni = function enumFromThenTo_inst_9_12_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_12_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_12_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_13_tsni = function runbench_inst_9_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_13_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_13_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_13_8_tsni = function integerbench_inst_9_13_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_13_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_13_8_1_tsni = function enumFromThenTo_inst_9_13_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_13_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_13_8_2_tsni = function enumFromThenTo_inst_9_13_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_13_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_13_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_13_7_tsni = function intbench_inst_9_13_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_13_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_13_7_4_tsni = function enumFromThenTo_inst_9_13_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_13_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_13_7_5_tsni = function enumFromThenTo_inst_9_13_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_13_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_13_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_14_tsni = function runbench_inst_9_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_14_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_14_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_14_8_tsni = function integerbench_inst_9_14_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_14_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_14_8_1_tsni = function enumFromThenTo_inst_9_14_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_14_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_14_8_2_tsni = function enumFromThenTo_inst_9_14_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_14_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_14_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_14_7_tsni = function intbench_inst_9_14_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_14_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_14_7_4_tsni = function enumFromThenTo_inst_9_14_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_14_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_14_7_5_tsni = function enumFromThenTo_inst_9_14_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_14_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_14_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_15_tsni = function runbench_inst_9_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_15_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_15_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_15_8_tsni = function integerbench_inst_9_15_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_15_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_15_8_1_tsni = function enumFromThenTo_inst_9_15_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_15_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_15_8_2_tsni = function enumFromThenTo_inst_9_15_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_15_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_15_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_15_7_tsni = function intbench_inst_9_15_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_15_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_15_7_4_tsni = function enumFromThenTo_inst_9_15_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_15_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_15_7_5_tsni = function enumFromThenTo_inst_9_15_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_15_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_15_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_16_tsni = function runbench_inst_9_16_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_16_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_16_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_16_8_tsni = function integerbench_inst_9_16_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_16_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_16_8_1_tsni = function enumFromThenTo_inst_9_16_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_16_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_16_8_2_tsni = function enumFromThenTo_inst_9_16_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_16_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_16_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_16_7_tsni = function intbench_inst_9_16_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_16_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_16_7_4_tsni = function enumFromThenTo_inst_9_16_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_16_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_16_7_5_tsni = function enumFromThenTo_inst_9_16_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_16_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_16_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_17_tsni = function runbench_inst_9_17_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_17_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_17_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_17_8_tsni = function integerbench_inst_9_17_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_17_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_17_8_1_tsni = function enumFromThenTo_inst_9_17_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_17_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_17_8_2_tsni = function enumFromThenTo_inst_9_17_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_17_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_17_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_17_7_tsni = function intbench_inst_9_17_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_17_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_17_7_4_tsni = function enumFromThenTo_inst_9_17_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_17_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_17_7_5_tsni = function enumFromThenTo_inst_9_17_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_17_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_17_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_18_tsni = function runbench_inst_9_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_18_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_18_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_18_8_tsni = function integerbench_inst_9_18_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_18_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_18_8_1_tsni = function enumFromThenTo_inst_9_18_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_18_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_18_8_2_tsni = function enumFromThenTo_inst_9_18_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_18_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_18_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_18_7_tsni = function intbench_inst_9_18_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_18_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_18_7_4_tsni = function enumFromThenTo_inst_9_18_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_18_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_18_7_5_tsni = function enumFromThenTo_inst_9_18_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_18_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_18_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_9_19_tsni = function runbench_inst_9_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_9_19_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_9_19_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_9_19_8_tsni = function integerbench_inst_9_19_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_19_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_19_8_1_tsni = function enumFromThenTo_inst_9_19_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_19_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_19_8_2_tsni = function enumFromThenTo_inst_9_19_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_19_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_19_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_9_19_7_tsni = function intbench_inst_9_19_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_9_19_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_9_19_7_4_tsni = function enumFromThenTo_inst_9_19_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_19_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_9_19_7_5_tsni = function enumFromThenTo_inst_9_19_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_9_19_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_9_19_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runalltests_inst_20_21_tsni = function runalltests_inst_20_21_tsni(astart, astep, alim, bstart, bstep, blim) {
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
  tmp = runbench_inst_20_21_10_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  lambda2 = (undefined, function (a, b) {
    return z_sub(a, b)
  });
  lambda3 = (undefined, function (a, b) {
    return a - b
  });
  tmp1 = runbench_inst_20_21_11_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  lambda4 = (undefined, function (a, b) {
    return z_mul(a, b)
  });
  lambda5 = (undefined, function (a, b) {
    return a * b
  });
  tmp3 = runbench_inst_20_21_12_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  lambda6 = (undefined, function (a, b) {
    return z_div(a, b)
  });
  lambda7 = (undefined, function (a, b) {
    return NofibPrelude.intDiv(a, b)
  });
  tmp5 = runbench_inst_20_21_13_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  lambda8 = (undefined, function (a, b) {
    return z_mod(a, b)
  });
  lambda9 = (undefined, function (a, b) {
    return NofibPrelude.intMod(a, b)
  });
  tmp7 = runbench_inst_20_21_14_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  lambda10 = (undefined, function (a, b) {
    return z_equal(a, b)
  });
  lambda11 = (undefined, function (a, b) {
    return a == b
  });
  tmp9 = runbench_inst_20_21_15_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  lambda12 = (undefined, function (a, b) {
    return z_lt(a, b)
  });
  lambda13 = (undefined, function (a, b) {
    return a < b
  });
  tmp11 = runbench_inst_20_21_16_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  lambda14 = (undefined, function (a, b) {
    return z_leq(a, b)
  });
  lambda15 = (undefined, function (a, b) {
    return a <= b
  });
  tmp13 = runbench_inst_20_21_17_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  lambda16 = (undefined, function (a, b) {
    return z_gt(a, b)
  });
  lambda17 = (undefined, function (a, b) {
    return a > b
  });
  tmp15 = runbench_inst_20_21_18_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  lambda18 = (undefined, function (a, b) {
    return z_geq(a, b)
  });
  lambda19 = (undefined, function (a, b) {
    return a >= b
  });
  tmp17 = runbench_inst_20_21_19_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_20_21_19_tsni = function runbench_inst_20_21_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_19_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_19_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_19_7_tsni = function intbench_inst_20_21_19_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_19_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_19_7_4_tsni = function enumFromThenTo_inst_20_21_19_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_19_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_19_7_5_tsni = function enumFromThenTo_inst_20_21_19_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_19_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_19_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_19_8_tsni = function integerbench_inst_20_21_19_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_19_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_19_8_1_tsni = function enumFromThenTo_inst_20_21_19_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_19_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_19_8_2_tsni = function enumFromThenTo_inst_20_21_19_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_19_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_19_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_18_tsni = function runbench_inst_20_21_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_18_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_18_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_18_7_tsni = function intbench_inst_20_21_18_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_18_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_18_7_4_tsni = function enumFromThenTo_inst_20_21_18_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_18_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_18_7_5_tsni = function enumFromThenTo_inst_20_21_18_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_18_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_18_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_18_8_tsni = function integerbench_inst_20_21_18_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_18_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_18_8_1_tsni = function enumFromThenTo_inst_20_21_18_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_18_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_18_8_2_tsni = function enumFromThenTo_inst_20_21_18_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_18_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_18_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_17_tsni = function runbench_inst_20_21_17_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_17_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_17_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_17_7_tsni = function intbench_inst_20_21_17_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_17_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_17_7_4_tsni = function enumFromThenTo_inst_20_21_17_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_17_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_17_7_5_tsni = function enumFromThenTo_inst_20_21_17_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_17_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_17_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_17_8_tsni = function integerbench_inst_20_21_17_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_17_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_17_8_1_tsni = function enumFromThenTo_inst_20_21_17_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_17_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_17_8_2_tsni = function enumFromThenTo_inst_20_21_17_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_17_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_17_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_16_tsni = function runbench_inst_20_21_16_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_16_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_16_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_16_7_tsni = function intbench_inst_20_21_16_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_16_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_16_7_4_tsni = function enumFromThenTo_inst_20_21_16_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_16_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_16_7_5_tsni = function enumFromThenTo_inst_20_21_16_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_16_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_16_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_16_8_tsni = function integerbench_inst_20_21_16_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_16_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_16_8_1_tsni = function enumFromThenTo_inst_20_21_16_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_16_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_16_8_2_tsni = function enumFromThenTo_inst_20_21_16_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_16_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_16_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_15_tsni = function runbench_inst_20_21_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_15_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_15_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_15_7_tsni = function intbench_inst_20_21_15_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_15_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_15_7_4_tsni = function enumFromThenTo_inst_20_21_15_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_15_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_15_7_5_tsni = function enumFromThenTo_inst_20_21_15_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_15_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_15_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_15_8_tsni = function integerbench_inst_20_21_15_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_15_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_15_8_1_tsni = function enumFromThenTo_inst_20_21_15_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_15_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_15_8_2_tsni = function enumFromThenTo_inst_20_21_15_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_15_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_15_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_14_tsni = function runbench_inst_20_21_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_14_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_14_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_14_7_tsni = function intbench_inst_20_21_14_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_14_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_14_7_4_tsni = function enumFromThenTo_inst_20_21_14_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_14_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_14_7_5_tsni = function enumFromThenTo_inst_20_21_14_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_14_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_14_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_14_8_tsni = function integerbench_inst_20_21_14_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_14_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_14_8_1_tsni = function enumFromThenTo_inst_20_21_14_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_14_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_14_8_2_tsni = function enumFromThenTo_inst_20_21_14_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_14_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_14_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_13_tsni = function runbench_inst_20_21_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_13_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_13_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_13_7_tsni = function intbench_inst_20_21_13_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_13_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_13_7_4_tsni = function enumFromThenTo_inst_20_21_13_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_13_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_13_7_5_tsni = function enumFromThenTo_inst_20_21_13_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_13_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_13_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_13_8_tsni = function integerbench_inst_20_21_13_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_13_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_13_8_1_tsni = function enumFromThenTo_inst_20_21_13_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_13_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_13_8_2_tsni = function enumFromThenTo_inst_20_21_13_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_13_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_13_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_12_tsni = function runbench_inst_20_21_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_12_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_12_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_12_7_tsni = function intbench_inst_20_21_12_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_12_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_12_7_4_tsni = function enumFromThenTo_inst_20_21_12_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_12_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_12_7_5_tsni = function enumFromThenTo_inst_20_21_12_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_12_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_12_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_12_8_tsni = function integerbench_inst_20_21_12_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_12_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_12_8_1_tsni = function enumFromThenTo_inst_20_21_12_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_12_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_12_8_2_tsni = function enumFromThenTo_inst_20_21_12_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_12_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_12_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_11_tsni = function runbench_inst_20_21_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_11_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_11_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_11_7_tsni = function intbench_inst_20_21_11_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_11_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_11_7_4_tsni = function enumFromThenTo_inst_20_21_11_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_11_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_11_7_5_tsni = function enumFromThenTo_inst_20_21_11_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_11_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_11_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_11_8_tsni = function integerbench_inst_20_21_11_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_11_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_11_8_1_tsni = function enumFromThenTo_inst_20_21_11_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_11_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_11_8_2_tsni = function enumFromThenTo_inst_20_21_11_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_11_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_11_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_20_21_10_tsni = function runbench_inst_20_21_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_20_21_10_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_20_21_10_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_20_21_10_7_tsni = function intbench_inst_20_21_10_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_10_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_10_7_4_tsni = function enumFromThenTo_inst_20_21_10_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_10_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_10_7_5_tsni = function enumFromThenTo_inst_20_21_10_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_10_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_10_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_20_21_10_8_tsni = function integerbench_inst_20_21_10_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_20_21_10_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_20_21_10_8_1_tsni = function enumFromThenTo_inst_20_21_10_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_10_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_20_21_10_8_2_tsni = function enumFromThenTo_inst_20_21_10_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_20_21_10_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_20_21_10_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
testInteger_nofib_inst_22_23_tsni = function testInteger_nofib_inst_22_23_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = - 2100000000;
  tmp1 = - 2100000000;
  tmp2 = - 2100000000;
  return runalltests_inst_22_23_21_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
};
runalltests_inst_22_23_21_tsni = function runalltests_inst_22_23_21_tsni(astart, astep, alim, bstart, bstep, blim) {
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
  tmp = runbench_inst_22_23_21_10_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  lambda2 = (undefined, function (a, b) {
    return z_sub(a, b)
  });
  lambda3 = (undefined, function (a, b) {
    return a - b
  });
  tmp1 = runbench_inst_22_23_21_11_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  lambda4 = (undefined, function (a, b) {
    return z_mul(a, b)
  });
  lambda5 = (undefined, function (a, b) {
    return a * b
  });
  tmp3 = runbench_inst_22_23_21_12_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  lambda6 = (undefined, function (a, b) {
    return z_div(a, b)
  });
  lambda7 = (undefined, function (a, b) {
    return NofibPrelude.intDiv(a, b)
  });
  tmp5 = runbench_inst_22_23_21_13_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  lambda8 = (undefined, function (a, b) {
    return z_mod(a, b)
  });
  lambda9 = (undefined, function (a, b) {
    return NofibPrelude.intMod(a, b)
  });
  tmp7 = runbench_inst_22_23_21_14_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  lambda10 = (undefined, function (a, b) {
    return z_equal(a, b)
  });
  lambda11 = (undefined, function (a, b) {
    return a == b
  });
  tmp9 = runbench_inst_22_23_21_15_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  lambda12 = (undefined, function (a, b) {
    return z_lt(a, b)
  });
  lambda13 = (undefined, function (a, b) {
    return a < b
  });
  tmp11 = runbench_inst_22_23_21_16_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  lambda14 = (undefined, function (a, b) {
    return z_leq(a, b)
  });
  lambda15 = (undefined, function (a, b) {
    return a <= b
  });
  tmp13 = runbench_inst_22_23_21_17_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  lambda16 = (undefined, function (a, b) {
    return z_gt(a, b)
  });
  lambda17 = (undefined, function (a, b) {
    return a > b
  });
  tmp15 = runbench_inst_22_23_21_18_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  lambda18 = (undefined, function (a, b) {
    return z_geq(a, b)
  });
  lambda19 = (undefined, function (a, b) {
    return a >= b
  });
  tmp17 = runbench_inst_22_23_21_19_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_22_23_21_10_tsni = function runbench_inst_22_23_21_10_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_10_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_10_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_10_8_tsni = function integerbench_inst_22_23_21_10_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_10_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_10_8_1_tsni = function enumFromThenTo_inst_22_23_21_10_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_10_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_10_8_2_tsni = function enumFromThenTo_inst_22_23_21_10_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_10_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_10_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_10_7_tsni = function intbench_inst_22_23_21_10_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_10_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_10_7_4_tsni = function enumFromThenTo_inst_22_23_21_10_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_10_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_10_7_5_tsni = function enumFromThenTo_inst_22_23_21_10_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_10_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_10_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_11_tsni = function runbench_inst_22_23_21_11_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_11_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_11_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_11_8_tsni = function integerbench_inst_22_23_21_11_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_11_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_11_8_1_tsni = function enumFromThenTo_inst_22_23_21_11_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_11_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_11_8_2_tsni = function enumFromThenTo_inst_22_23_21_11_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_11_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_11_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_11_7_tsni = function intbench_inst_22_23_21_11_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_11_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_11_7_4_tsni = function enumFromThenTo_inst_22_23_21_11_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_11_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_11_7_5_tsni = function enumFromThenTo_inst_22_23_21_11_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_11_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_11_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_12_tsni = function runbench_inst_22_23_21_12_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_12_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_12_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_12_8_tsni = function integerbench_inst_22_23_21_12_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_12_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_12_8_1_tsni = function enumFromThenTo_inst_22_23_21_12_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_12_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_12_8_2_tsni = function enumFromThenTo_inst_22_23_21_12_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_12_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_12_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_12_7_tsni = function intbench_inst_22_23_21_12_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_12_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_12_7_4_tsni = function enumFromThenTo_inst_22_23_21_12_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_12_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_12_7_5_tsni = function enumFromThenTo_inst_22_23_21_12_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_12_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_12_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_13_tsni = function runbench_inst_22_23_21_13_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_13_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_13_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_13_8_tsni = function integerbench_inst_22_23_21_13_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_13_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_13_8_1_tsni = function enumFromThenTo_inst_22_23_21_13_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_13_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_13_8_2_tsni = function enumFromThenTo_inst_22_23_21_13_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_13_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_13_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_13_7_tsni = function intbench_inst_22_23_21_13_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_13_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_13_7_4_tsni = function enumFromThenTo_inst_22_23_21_13_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_13_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_13_7_5_tsni = function enumFromThenTo_inst_22_23_21_13_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_13_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_13_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_14_tsni = function runbench_inst_22_23_21_14_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_14_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_14_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_14_8_tsni = function integerbench_inst_22_23_21_14_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_14_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_14_8_1_tsni = function enumFromThenTo_inst_22_23_21_14_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_14_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_14_8_2_tsni = function enumFromThenTo_inst_22_23_21_14_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_14_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_14_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_14_7_tsni = function intbench_inst_22_23_21_14_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_14_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_14_7_4_tsni = function enumFromThenTo_inst_22_23_21_14_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_14_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_14_7_5_tsni = function enumFromThenTo_inst_22_23_21_14_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_14_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_14_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_15_tsni = function runbench_inst_22_23_21_15_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_15_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_15_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_15_8_tsni = function integerbench_inst_22_23_21_15_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_15_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_15_8_1_tsni = function enumFromThenTo_inst_22_23_21_15_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_15_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_15_8_2_tsni = function enumFromThenTo_inst_22_23_21_15_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_15_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_15_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_15_7_tsni = function intbench_inst_22_23_21_15_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_15_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_15_7_4_tsni = function enumFromThenTo_inst_22_23_21_15_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_15_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_15_7_5_tsni = function enumFromThenTo_inst_22_23_21_15_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_15_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_15_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_16_tsni = function runbench_inst_22_23_21_16_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_16_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_16_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_16_8_tsni = function integerbench_inst_22_23_21_16_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_16_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_16_8_1_tsni = function enumFromThenTo_inst_22_23_21_16_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_16_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_16_8_2_tsni = function enumFromThenTo_inst_22_23_21_16_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_16_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_16_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_16_7_tsni = function intbench_inst_22_23_21_16_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_16_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_16_7_4_tsni = function enumFromThenTo_inst_22_23_21_16_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_16_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_16_7_5_tsni = function enumFromThenTo_inst_22_23_21_16_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_16_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_16_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_17_tsni = function runbench_inst_22_23_21_17_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_17_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_17_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_17_8_tsni = function integerbench_inst_22_23_21_17_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_17_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_17_8_1_tsni = function enumFromThenTo_inst_22_23_21_17_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_17_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_17_8_2_tsni = function enumFromThenTo_inst_22_23_21_17_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_17_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_17_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_17_7_tsni = function intbench_inst_22_23_21_17_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_17_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_17_7_4_tsni = function enumFromThenTo_inst_22_23_21_17_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_17_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_17_7_5_tsni = function enumFromThenTo_inst_22_23_21_17_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_17_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_17_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_18_tsni = function runbench_inst_22_23_21_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_18_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_18_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_18_8_tsni = function integerbench_inst_22_23_21_18_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_18_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_18_8_1_tsni = function enumFromThenTo_inst_22_23_21_18_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_18_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_18_8_2_tsni = function enumFromThenTo_inst_22_23_21_18_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_18_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_18_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_18_7_tsni = function intbench_inst_22_23_21_18_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_18_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_18_7_4_tsni = function enumFromThenTo_inst_22_23_21_18_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_18_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_18_7_5_tsni = function enumFromThenTo_inst_22_23_21_18_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_18_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_18_7_4_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_22_23_21_19_tsni = function runbench_inst_22_23_21_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_22_23_21_19_7_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_22_23_21_19_8_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_22_23_21_19_8_tsni = function integerbench_inst_22_23_21_19_8_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_19_8_2_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_19_8_1_tsni = function enumFromThenTo_inst_22_23_21_19_8_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_19_8_1_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_19_8_2_tsni = function enumFromThenTo_inst_22_23_21_19_8_2_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_19_8_2_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_19_8_1_tsni(bstart, tmp3, blim);
      return lscomp2(tmp4)
    }
  } else {
    return (lscomp1, op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_22_23_21_19_7_tsni = function intbench_inst_22_23_21_19_7_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let lscomp1, tmp, tmp1;
  lscomp1 = function lscomp1(ls) {
    return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
  };
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_22_23_21_19_7_5_tsni(astart, tmp, alim);
  return lscomp1(tmp1)
};
enumFromThenTo_inst_22_23_21_19_7_4_tsni = function enumFromThenTo_inst_22_23_21_19_7_4_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_19_7_4_tsni(t, tmp1, b);
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
enumFromThenTo_inst_22_23_21_19_7_5_tsni = function enumFromThenTo_inst_22_23_21_19_7_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_22_23_21_19_7_5_tsni(t, tmp1, b);
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
      tmp4 = enumFromThenTo_inst_22_23_21_19_7_4_tsni(bstart, tmp3, blim);
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
      return runtime.safeCall(ls(lscomp1, op, bstart, bstep, blim))
    };
    tmp = astart + astep;
    tmp1 = enumFromThenTo_inst_0_2_tsni(astart, tmp, alim);
    return lscomp1(tmp1)
  } 
  static intbench(op1, astart1, astep1, alim1, bstart1, bstep1, blim1) {
    let lscomp1, tmp, tmp1;
    lscomp1 = function lscomp1(ls) {
      return runtime.safeCall(ls(lscomp1, op1, bstart1, bstep1, blim1))
    };
    tmp = astart1 + astep1;
    tmp1 = enumFromThenTo_inst_3_5_tsni(astart1, tmp, alim1);
    return lscomp1(tmp1)
  } 
  static runbench(jop, iop, opstr, astart2, astep2, alim2, bstart2, bstep2, blim2) {
    let tmp, tmp1;
    tmp = intbench_inst_6_7_tsni(iop, astart2, astep2, alim2, astart2, astep2, alim2);
    tmp1 = integerbench_inst_6_8_tsni(jop, astart2, astep2, alim2, astart2, astep2, alim2);
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
    tmp = runbench_inst_9_10_tsni(lambda, lambda1, "(+)", astart3, astep3, alim3, astart3, astep3, alim3);
    lambda2 = (undefined, function (a, b) {
      return z_sub(a, b)
    });
    lambda3 = (undefined, function (a, b) {
      return a - b
    });
    tmp1 = runbench_inst_9_11_tsni(lambda2, lambda3, "(-)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp2 = (tmp , tmp1);
    lambda4 = (undefined, function (a, b) {
      return z_mul(a, b)
    });
    lambda5 = (undefined, function (a, b) {
      return a * b
    });
    tmp3 = runbench_inst_9_12_tsni(lambda4, lambda5, "(*)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp4 = (tmp2 , tmp3);
    lambda6 = (undefined, function (a, b) {
      return z_div(a, b)
    });
    lambda7 = (undefined, function (a, b) {
      return NofibPrelude.intDiv(a, b)
    });
    tmp5 = runbench_inst_9_13_tsni(lambda6, lambda7, "div", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp6 = (tmp4 , tmp5);
    lambda8 = (undefined, function (a, b) {
      return z_mod(a, b)
    });
    lambda9 = (undefined, function (a, b) {
      return NofibPrelude.intMod(a, b)
    });
    tmp7 = runbench_inst_9_14_tsni(lambda8, lambda9, "mod", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp8 = (tmp6 , tmp7);
    lambda10 = (undefined, function (a, b) {
      return z_equal(a, b)
    });
    lambda11 = (undefined, function (a, b) {
      return a == b
    });
    tmp9 = runbench_inst_9_15_tsni(lambda10, lambda11, "(==)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp10 = (tmp8 , tmp9);
    lambda12 = (undefined, function (a, b) {
      return z_lt(a, b)
    });
    lambda13 = (undefined, function (a, b) {
      return a < b
    });
    tmp11 = runbench_inst_9_16_tsni(lambda12, lambda13, "(<)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp12 = (tmp10 , tmp11);
    lambda14 = (undefined, function (a, b) {
      return z_leq(a, b)
    });
    lambda15 = (undefined, function (a, b) {
      return a <= b
    });
    tmp13 = runbench_inst_9_17_tsni(lambda14, lambda15, "(<=)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp14 = (tmp12 , tmp13);
    lambda16 = (undefined, function (a, b) {
      return z_gt(a, b)
    });
    lambda17 = (undefined, function (a, b) {
      return a > b
    });
    tmp15 = runbench_inst_9_18_tsni(lambda16, lambda17, "(>)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp16 = (tmp14 , tmp15);
    lambda18 = (undefined, function (a, b) {
      return z_geq(a, b)
    });
    lambda19 = (undefined, function (a, b) {
      return a >= b
    });
    tmp17 = runbench_inst_9_19_tsni(lambda18, lambda19, "(>=)", astart3, astep3, alim3, astart3, astep3, alim3);
    return (tmp16 , tmp17)
  } 
  static testInteger_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = - 2100000000;
    tmp1 = - 2100000000;
    tmp2 = - 2100000000;
    return runalltests_inst_20_21_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
  } 
  static main() {
    let tmp;
    tmp = testInteger_nofib_inst_22_23_tsni(700000001);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "integer"; }
});
let integer = integer1; export default integer;
