import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lscomp2, lscomp1, lscomp21, lscomp11, z_lt, z_add, z_leq, z_mod, z_gt, z_geq, z_mul, z_equal, z_sub, z_div, integer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lscomp1$, lscomp2$, lscomp1$1, lscomp2$1, lscomp2$_inst_0_tsni, enumFromThenTo_inst_0_1_tsni, lscomp1$_inst_2_3_tsni, lscomp2$_inst_2_3_tsni, enumFromThenTo_inst_2_3_1_tsni, lscomp2$_inst_4_tsni, enumFromThenTo_inst_4_5_tsni, lscomp1$_inst_6_7_tsni, lscomp2$_inst_6_7_tsni, enumFromThenTo_inst_6_7_5_tsni, lscomp1$_inst_8_9_tsni, lscomp2$_inst_8_9_tsni, enumFromThenTo_inst_8_9_5_tsni, enumFromThenTo_inst_8_10_tsni, lscomp1$_inst_11_12_tsni, lscomp2$_inst_11_12_tsni, enumFromThenTo_inst_11_12_1_tsni, enumFromThenTo_inst_11_13_tsni, intbench_inst_14_15_tsni, lscomp1$_inst_14_15_12_tsni, lscomp2$_inst_14_15_12_tsni, enumFromThenTo_inst_14_15_12_1_tsni, enumFromThenTo_inst_14_15_13_tsni, integerbench_inst_14_16_tsni, lscomp1$_inst_14_16_9_tsni, lscomp2$_inst_14_16_9_tsni, enumFromThenTo_inst_14_16_9_5_tsni, enumFromThenTo_inst_14_16_10_tsni, runbench_inst_17_18_tsni, integerbench_inst_17_18_16_tsni, lscomp1$_inst_17_18_16_9_tsni, lscomp2$_inst_17_18_16_9_tsni, enumFromThenTo_inst_17_18_16_9_5_tsni, enumFromThenTo_inst_17_18_16_10_tsni, intbench_inst_17_18_15_tsni, lscomp1$_inst_17_18_15_12_tsni, lscomp2$_inst_17_18_15_12_tsni, enumFromThenTo_inst_17_18_15_12_1_tsni, enumFromThenTo_inst_17_18_15_13_tsni, runbench_inst_17_19_tsni, integerbench_inst_17_19_16_tsni, lscomp1$_inst_17_19_16_9_tsni, lscomp2$_inst_17_19_16_9_tsni, enumFromThenTo_inst_17_19_16_9_5_tsni, enumFromThenTo_inst_17_19_16_10_tsni, intbench_inst_17_19_15_tsni, lscomp1$_inst_17_19_15_12_tsni, lscomp2$_inst_17_19_15_12_tsni, enumFromThenTo_inst_17_19_15_12_1_tsni, enumFromThenTo_inst_17_19_15_13_tsni, runbench_inst_17_20_tsni, integerbench_inst_17_20_16_tsni, lscomp1$_inst_17_20_16_9_tsni, lscomp2$_inst_17_20_16_9_tsni, enumFromThenTo_inst_17_20_16_9_5_tsni, enumFromThenTo_inst_17_20_16_10_tsni, intbench_inst_17_20_15_tsni, lscomp1$_inst_17_20_15_12_tsni, lscomp2$_inst_17_20_15_12_tsni, enumFromThenTo_inst_17_20_15_12_1_tsni, enumFromThenTo_inst_17_20_15_13_tsni, runbench_inst_17_21_tsni, integerbench_inst_17_21_16_tsni, lscomp1$_inst_17_21_16_9_tsni, lscomp2$_inst_17_21_16_9_tsni, enumFromThenTo_inst_17_21_16_9_5_tsni, enumFromThenTo_inst_17_21_16_10_tsni, intbench_inst_17_21_15_tsni, lscomp1$_inst_17_21_15_12_tsni, lscomp2$_inst_17_21_15_12_tsni, enumFromThenTo_inst_17_21_15_12_1_tsni, enumFromThenTo_inst_17_21_15_13_tsni, runbench_inst_17_22_tsni, integerbench_inst_17_22_16_tsni, lscomp1$_inst_17_22_16_9_tsni, lscomp2$_inst_17_22_16_9_tsni, enumFromThenTo_inst_17_22_16_9_5_tsni, enumFromThenTo_inst_17_22_16_10_tsni, intbench_inst_17_22_15_tsni, lscomp1$_inst_17_22_15_12_tsni, lscomp2$_inst_17_22_15_12_tsni, enumFromThenTo_inst_17_22_15_12_1_tsni, enumFromThenTo_inst_17_22_15_13_tsni, runbench_inst_17_23_tsni, integerbench_inst_17_23_16_tsni, lscomp1$_inst_17_23_16_9_tsni, lscomp2$_inst_17_23_16_9_tsni, enumFromThenTo_inst_17_23_16_9_5_tsni, enumFromThenTo_inst_17_23_16_10_tsni, intbench_inst_17_23_15_tsni, lscomp1$_inst_17_23_15_12_tsni, lscomp2$_inst_17_23_15_12_tsni, enumFromThenTo_inst_17_23_15_12_1_tsni, enumFromThenTo_inst_17_23_15_13_tsni, runbench_inst_17_24_tsni, integerbench_inst_17_24_16_tsni, lscomp1$_inst_17_24_16_9_tsni, lscomp2$_inst_17_24_16_9_tsni, enumFromThenTo_inst_17_24_16_9_5_tsni, enumFromThenTo_inst_17_24_16_10_tsni, intbench_inst_17_24_15_tsni, lscomp1$_inst_17_24_15_12_tsni, lscomp2$_inst_17_24_15_12_tsni, enumFromThenTo_inst_17_24_15_12_1_tsni, enumFromThenTo_inst_17_24_15_13_tsni, runbench_inst_17_25_tsni, integerbench_inst_17_25_16_tsni, lscomp1$_inst_17_25_16_9_tsni, lscomp2$_inst_17_25_16_9_tsni, enumFromThenTo_inst_17_25_16_9_5_tsni, enumFromThenTo_inst_17_25_16_10_tsni, intbench_inst_17_25_15_tsni, lscomp1$_inst_17_25_15_12_tsni, lscomp2$_inst_17_25_15_12_tsni, enumFromThenTo_inst_17_25_15_12_1_tsni, enumFromThenTo_inst_17_25_15_13_tsni, runbench_inst_17_26_tsni, integerbench_inst_17_26_16_tsni, lscomp1$_inst_17_26_16_9_tsni, lscomp2$_inst_17_26_16_9_tsni, enumFromThenTo_inst_17_26_16_9_5_tsni, enumFromThenTo_inst_17_26_16_10_tsni, intbench_inst_17_26_15_tsni, lscomp1$_inst_17_26_15_12_tsni, lscomp2$_inst_17_26_15_12_tsni, enumFromThenTo_inst_17_26_15_12_1_tsni, enumFromThenTo_inst_17_26_15_13_tsni, runbench_inst_17_27_tsni, integerbench_inst_17_27_16_tsni, lscomp1$_inst_17_27_16_9_tsni, lscomp2$_inst_17_27_16_9_tsni, enumFromThenTo_inst_17_27_16_9_5_tsni, enumFromThenTo_inst_17_27_16_10_tsni, intbench_inst_17_27_15_tsni, lscomp1$_inst_17_27_15_12_tsni, lscomp2$_inst_17_27_15_12_tsni, enumFromThenTo_inst_17_27_15_12_1_tsni, enumFromThenTo_inst_17_27_15_13_tsni, runalltests_inst_28_29_tsni, runbench_inst_28_29_27_tsni, intbench_inst_28_29_27_15_tsni, lscomp1$_inst_28_29_27_15_12_tsni, lscomp2$_inst_28_29_27_15_12_tsni, enumFromThenTo_inst_28_29_27_15_12_1_tsni, enumFromThenTo_inst_28_29_27_15_13_tsni, integerbench_inst_28_29_27_16_tsni, lscomp1$_inst_28_29_27_16_9_tsni, lscomp2$_inst_28_29_27_16_9_tsni, enumFromThenTo_inst_28_29_27_16_9_5_tsni, enumFromThenTo_inst_28_29_27_16_10_tsni, runbench_inst_28_29_26_tsni, intbench_inst_28_29_26_15_tsni, lscomp1$_inst_28_29_26_15_12_tsni, lscomp2$_inst_28_29_26_15_12_tsni, enumFromThenTo_inst_28_29_26_15_12_1_tsni, enumFromThenTo_inst_28_29_26_15_13_tsni, integerbench_inst_28_29_26_16_tsni, lscomp1$_inst_28_29_26_16_9_tsni, lscomp2$_inst_28_29_26_16_9_tsni, enumFromThenTo_inst_28_29_26_16_9_5_tsni, enumFromThenTo_inst_28_29_26_16_10_tsni, runbench_inst_28_29_25_tsni, intbench_inst_28_29_25_15_tsni, lscomp1$_inst_28_29_25_15_12_tsni, lscomp2$_inst_28_29_25_15_12_tsni, enumFromThenTo_inst_28_29_25_15_12_1_tsni, enumFromThenTo_inst_28_29_25_15_13_tsni, integerbench_inst_28_29_25_16_tsni, lscomp1$_inst_28_29_25_16_9_tsni, lscomp2$_inst_28_29_25_16_9_tsni, enumFromThenTo_inst_28_29_25_16_9_5_tsni, enumFromThenTo_inst_28_29_25_16_10_tsni, runbench_inst_28_29_24_tsni, intbench_inst_28_29_24_15_tsni, lscomp1$_inst_28_29_24_15_12_tsni, lscomp2$_inst_28_29_24_15_12_tsni, enumFromThenTo_inst_28_29_24_15_12_1_tsni, enumFromThenTo_inst_28_29_24_15_13_tsni, integerbench_inst_28_29_24_16_tsni, lscomp1$_inst_28_29_24_16_9_tsni, lscomp2$_inst_28_29_24_16_9_tsni, enumFromThenTo_inst_28_29_24_16_9_5_tsni, enumFromThenTo_inst_28_29_24_16_10_tsni, runbench_inst_28_29_23_tsni, intbench_inst_28_29_23_15_tsni, lscomp1$_inst_28_29_23_15_12_tsni, lscomp2$_inst_28_29_23_15_12_tsni, enumFromThenTo_inst_28_29_23_15_12_1_tsni, enumFromThenTo_inst_28_29_23_15_13_tsni, integerbench_inst_28_29_23_16_tsni, lscomp1$_inst_28_29_23_16_9_tsni, lscomp2$_inst_28_29_23_16_9_tsni, enumFromThenTo_inst_28_29_23_16_9_5_tsni, enumFromThenTo_inst_28_29_23_16_10_tsni, runbench_inst_28_29_22_tsni, intbench_inst_28_29_22_15_tsni, lscomp1$_inst_28_29_22_15_12_tsni, lscomp2$_inst_28_29_22_15_12_tsni, enumFromThenTo_inst_28_29_22_15_12_1_tsni, enumFromThenTo_inst_28_29_22_15_13_tsni, integerbench_inst_28_29_22_16_tsni, lscomp1$_inst_28_29_22_16_9_tsni, lscomp2$_inst_28_29_22_16_9_tsni, enumFromThenTo_inst_28_29_22_16_9_5_tsni, enumFromThenTo_inst_28_29_22_16_10_tsni, runbench_inst_28_29_21_tsni, intbench_inst_28_29_21_15_tsni, lscomp1$_inst_28_29_21_15_12_tsni, lscomp2$_inst_28_29_21_15_12_tsni, enumFromThenTo_inst_28_29_21_15_12_1_tsni, enumFromThenTo_inst_28_29_21_15_13_tsni, integerbench_inst_28_29_21_16_tsni, lscomp1$_inst_28_29_21_16_9_tsni, lscomp2$_inst_28_29_21_16_9_tsni, enumFromThenTo_inst_28_29_21_16_9_5_tsni, enumFromThenTo_inst_28_29_21_16_10_tsni, runbench_inst_28_29_20_tsni, intbench_inst_28_29_20_15_tsni, lscomp1$_inst_28_29_20_15_12_tsni, lscomp2$_inst_28_29_20_15_12_tsni, enumFromThenTo_inst_28_29_20_15_12_1_tsni, enumFromThenTo_inst_28_29_20_15_13_tsni, integerbench_inst_28_29_20_16_tsni, lscomp1$_inst_28_29_20_16_9_tsni, lscomp2$_inst_28_29_20_16_9_tsni, enumFromThenTo_inst_28_29_20_16_9_5_tsni, enumFromThenTo_inst_28_29_20_16_10_tsni, runbench_inst_28_29_19_tsni, intbench_inst_28_29_19_15_tsni, lscomp1$_inst_28_29_19_15_12_tsni, lscomp2$_inst_28_29_19_15_12_tsni, enumFromThenTo_inst_28_29_19_15_12_1_tsni, enumFromThenTo_inst_28_29_19_15_13_tsni, integerbench_inst_28_29_19_16_tsni, lscomp1$_inst_28_29_19_16_9_tsni, lscomp2$_inst_28_29_19_16_9_tsni, enumFromThenTo_inst_28_29_19_16_9_5_tsni, enumFromThenTo_inst_28_29_19_16_10_tsni, runbench_inst_28_29_18_tsni, intbench_inst_28_29_18_15_tsni, lscomp1$_inst_28_29_18_15_12_tsni, lscomp2$_inst_28_29_18_15_12_tsni, enumFromThenTo_inst_28_29_18_15_12_1_tsni, enumFromThenTo_inst_28_29_18_15_13_tsni, integerbench_inst_28_29_18_16_tsni, lscomp1$_inst_28_29_18_16_9_tsni, lscomp2$_inst_28_29_18_16_9_tsni, enumFromThenTo_inst_28_29_18_16_9_5_tsni, enumFromThenTo_inst_28_29_18_16_10_tsni, testInteger_nofib_inst_30_31_tsni, runalltests_inst_30_31_29_tsni, runbench_inst_30_31_29_18_tsni, integerbench_inst_30_31_29_18_16_tsni, lscomp1$_inst_30_31_29_18_16_9_tsni, lscomp2$_inst_30_31_29_18_16_9_tsni, enumFromThenTo_inst_30_31_29_18_16_9_5_tsni, enumFromThenTo_inst_30_31_29_18_16_10_tsni, intbench_inst_30_31_29_18_15_tsni, lscomp1$_inst_30_31_29_18_15_12_tsni, lscomp2$_inst_30_31_29_18_15_12_tsni, enumFromThenTo_inst_30_31_29_18_15_12_1_tsni, enumFromThenTo_inst_30_31_29_18_15_13_tsni, runbench_inst_30_31_29_19_tsni, integerbench_inst_30_31_29_19_16_tsni, lscomp1$_inst_30_31_29_19_16_9_tsni, lscomp2$_inst_30_31_29_19_16_9_tsni, enumFromThenTo_inst_30_31_29_19_16_9_5_tsni, enumFromThenTo_inst_30_31_29_19_16_10_tsni, intbench_inst_30_31_29_19_15_tsni, lscomp1$_inst_30_31_29_19_15_12_tsni, lscomp2$_inst_30_31_29_19_15_12_tsni, enumFromThenTo_inst_30_31_29_19_15_12_1_tsni, enumFromThenTo_inst_30_31_29_19_15_13_tsni, runbench_inst_30_31_29_20_tsni, integerbench_inst_30_31_29_20_16_tsni, lscomp1$_inst_30_31_29_20_16_9_tsni, lscomp2$_inst_30_31_29_20_16_9_tsni, enumFromThenTo_inst_30_31_29_20_16_9_5_tsni, enumFromThenTo_inst_30_31_29_20_16_10_tsni, intbench_inst_30_31_29_20_15_tsni, lscomp1$_inst_30_31_29_20_15_12_tsni, lscomp2$_inst_30_31_29_20_15_12_tsni, enumFromThenTo_inst_30_31_29_20_15_12_1_tsni, enumFromThenTo_inst_30_31_29_20_15_13_tsni, runbench_inst_30_31_29_21_tsni, integerbench_inst_30_31_29_21_16_tsni, lscomp1$_inst_30_31_29_21_16_9_tsni, lscomp2$_inst_30_31_29_21_16_9_tsni, enumFromThenTo_inst_30_31_29_21_16_9_5_tsni, enumFromThenTo_inst_30_31_29_21_16_10_tsni, intbench_inst_30_31_29_21_15_tsni, lscomp1$_inst_30_31_29_21_15_12_tsni, lscomp2$_inst_30_31_29_21_15_12_tsni, enumFromThenTo_inst_30_31_29_21_15_12_1_tsni, enumFromThenTo_inst_30_31_29_21_15_13_tsni, runbench_inst_30_31_29_22_tsni, integerbench_inst_30_31_29_22_16_tsni, lscomp1$_inst_30_31_29_22_16_9_tsni, lscomp2$_inst_30_31_29_22_16_9_tsni, enumFromThenTo_inst_30_31_29_22_16_9_5_tsni, enumFromThenTo_inst_30_31_29_22_16_10_tsni, intbench_inst_30_31_29_22_15_tsni, lscomp1$_inst_30_31_29_22_15_12_tsni, lscomp2$_inst_30_31_29_22_15_12_tsni, enumFromThenTo_inst_30_31_29_22_15_12_1_tsni, enumFromThenTo_inst_30_31_29_22_15_13_tsni, runbench_inst_30_31_29_23_tsni, integerbench_inst_30_31_29_23_16_tsni, lscomp1$_inst_30_31_29_23_16_9_tsni, lscomp2$_inst_30_31_29_23_16_9_tsni, enumFromThenTo_inst_30_31_29_23_16_9_5_tsni, enumFromThenTo_inst_30_31_29_23_16_10_tsni, intbench_inst_30_31_29_23_15_tsni, lscomp1$_inst_30_31_29_23_15_12_tsni, lscomp2$_inst_30_31_29_23_15_12_tsni, enumFromThenTo_inst_30_31_29_23_15_12_1_tsni, enumFromThenTo_inst_30_31_29_23_15_13_tsni, runbench_inst_30_31_29_24_tsni, integerbench_inst_30_31_29_24_16_tsni, lscomp1$_inst_30_31_29_24_16_9_tsni, lscomp2$_inst_30_31_29_24_16_9_tsni, enumFromThenTo_inst_30_31_29_24_16_9_5_tsni, enumFromThenTo_inst_30_31_29_24_16_10_tsni, intbench_inst_30_31_29_24_15_tsni, lscomp1$_inst_30_31_29_24_15_12_tsni, lscomp2$_inst_30_31_29_24_15_12_tsni, enumFromThenTo_inst_30_31_29_24_15_12_1_tsni, enumFromThenTo_inst_30_31_29_24_15_13_tsni, runbench_inst_30_31_29_25_tsni, integerbench_inst_30_31_29_25_16_tsni, lscomp1$_inst_30_31_29_25_16_9_tsni, lscomp2$_inst_30_31_29_25_16_9_tsni, enumFromThenTo_inst_30_31_29_25_16_9_5_tsni, enumFromThenTo_inst_30_31_29_25_16_10_tsni, intbench_inst_30_31_29_25_15_tsni, lscomp1$_inst_30_31_29_25_15_12_tsni, lscomp2$_inst_30_31_29_25_15_12_tsni, enumFromThenTo_inst_30_31_29_25_15_12_1_tsni, enumFromThenTo_inst_30_31_29_25_15_13_tsni, runbench_inst_30_31_29_26_tsni, integerbench_inst_30_31_29_26_16_tsni, lscomp1$_inst_30_31_29_26_16_9_tsni, lscomp2$_inst_30_31_29_26_16_9_tsni, enumFromThenTo_inst_30_31_29_26_16_9_5_tsni, enumFromThenTo_inst_30_31_29_26_16_10_tsni, intbench_inst_30_31_29_26_15_tsni, lscomp1$_inst_30_31_29_26_15_12_tsni, lscomp2$_inst_30_31_29_26_15_12_tsni, enumFromThenTo_inst_30_31_29_26_15_12_1_tsni, enumFromThenTo_inst_30_31_29_26_15_13_tsni, runbench_inst_30_31_29_27_tsni, integerbench_inst_30_31_29_27_16_tsni, lscomp1$_inst_30_31_29_27_16_9_tsni, lscomp2$_inst_30_31_29_27_16_9_tsni, enumFromThenTo_inst_30_31_29_27_16_9_5_tsni, enumFromThenTo_inst_30_31_29_27_16_10_tsni, intbench_inst_30_31_29_27_15_tsni, lscomp1$_inst_30_31_29_27_15_12_tsni, lscomp2$_inst_30_31_29_27_15_12_tsni, enumFromThenTo_inst_30_31_29_27_15_12_1_tsni, enumFromThenTo_inst_30_31_29_27_15_13_tsni;
lscomp2$_inst_0_tsni = function lscomp2$_inst_0_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
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
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_0_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$1(op, bstart, bstep, blim, t1)
    }
  }
};
lscomp1$_inst_2_3_tsni = function lscomp1$_inst_2_3_tsni(op, bstart, bstep, blim, ls) {
  let param0, param1, a, t1, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a = param0;
    t1 = param1;
    tmp = bstart + bstep;
    tmp1 = enumFromThenTo_inst_2_3_1_tsni(bstart, tmp, blim);
    return lscomp2$_inst_2_3_tsni(op, bstart, bstep, blim, a, t1, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_2_3_tsni = function lscomp2$_inst_2_3_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_2_3_1_tsni = function enumFromThenTo_inst_2_3_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_2_3_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_2_3_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_2_3_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
lscomp2$_inst_4_tsni = function lscomp2$_inst_4_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_4_5_tsni = function enumFromThenTo_inst_4_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_4_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_4_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$(op, bstart, bstep, blim, t1)
    }
  }
};
lscomp1$_inst_6_7_tsni = function lscomp1$_inst_6_7_tsni(op, bstart, bstep, blim, ls) {
  let param0, param1, a, t1, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a = param0;
    t1 = param1;
    tmp = bstart + bstep;
    tmp1 = enumFromThenTo_inst_6_7_5_tsni(bstart, tmp, blim);
    return lscomp2$_inst_6_7_tsni(op, bstart, bstep, blim, a, t1, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_6_7_tsni = function lscomp2$_inst_6_7_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
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
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_6_7_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_6_7_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
lscomp1$_inst_8_9_tsni = function lscomp1$_inst_8_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_8_9_tsni = function lscomp2$_inst_8_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_8_9_5_tsni = function enumFromThenTo_inst_8_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_8_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_8_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_8_10_tsni = function enumFromThenTo_inst_8_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_8_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_8_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_8_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
lscomp1$_inst_11_12_tsni = function lscomp1$_inst_11_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_11_12_tsni = function lscomp2$_inst_11_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_11_12_1_tsni = function enumFromThenTo_inst_11_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_11_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_11_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_11_13_tsni = function enumFromThenTo_inst_11_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_11_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_11_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_11_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_14_15_tsni = function intbench_inst_14_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_14_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_14_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_14_15_12_tsni = function lscomp1$_inst_14_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_14_15_12_tsni = function lscomp2$_inst_14_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_14_15_12_1_tsni = function enumFromThenTo_inst_14_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_14_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_14_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_14_15_13_tsni = function enumFromThenTo_inst_14_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_14_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_14_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_14_16_tsni = function integerbench_inst_14_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_14_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_14_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_14_16_9_tsni = function lscomp1$_inst_14_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_14_16_9_tsni = function lscomp2$_inst_14_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_14_16_9_5_tsni = function enumFromThenTo_inst_14_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_14_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_14_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_14_16_10_tsni = function enumFromThenTo_inst_14_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_14_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_14_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_14_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_18_tsni = function runbench_inst_17_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_18_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_18_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_18_16_tsni = function integerbench_inst_17_18_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_18_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_18_16_9_tsni = function lscomp1$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_18_16_9_tsni = function lscomp2$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_18_16_9_5_tsni = function enumFromThenTo_inst_17_18_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_18_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_18_16_10_tsni = function enumFromThenTo_inst_17_18_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_18_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_18_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_18_15_tsni = function intbench_inst_17_18_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_18_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_18_15_12_tsni = function lscomp1$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_18_15_12_tsni = function lscomp2$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_18_15_12_1_tsni = function enumFromThenTo_inst_17_18_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_18_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_18_15_13_tsni = function enumFromThenTo_inst_17_18_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_18_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_18_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_19_tsni = function runbench_inst_17_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_19_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_19_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_19_16_tsni = function integerbench_inst_17_19_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_19_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_19_16_9_tsni = function lscomp1$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_19_16_9_tsni = function lscomp2$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_19_16_9_5_tsni = function enumFromThenTo_inst_17_19_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_19_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_19_16_10_tsni = function enumFromThenTo_inst_17_19_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_19_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_19_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_19_15_tsni = function intbench_inst_17_19_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_19_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_19_15_12_tsni = function lscomp1$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_19_15_12_tsni = function lscomp2$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_19_15_12_1_tsni = function enumFromThenTo_inst_17_19_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_19_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_19_15_13_tsni = function enumFromThenTo_inst_17_19_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_19_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_19_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_20_tsni = function runbench_inst_17_20_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_20_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_20_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_20_16_tsni = function integerbench_inst_17_20_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_20_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_20_16_9_tsni = function lscomp1$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_20_16_9_tsni = function lscomp2$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_20_16_9_5_tsni = function enumFromThenTo_inst_17_20_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_20_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_20_16_10_tsni = function enumFromThenTo_inst_17_20_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_20_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_20_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_20_15_tsni = function intbench_inst_17_20_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_20_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_20_15_12_tsni = function lscomp1$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_20_15_12_tsni = function lscomp2$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_20_15_12_1_tsni = function enumFromThenTo_inst_17_20_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_20_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_20_15_13_tsni = function enumFromThenTo_inst_17_20_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_20_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_20_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_21_tsni = function runbench_inst_17_21_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_21_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_21_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_21_16_tsni = function integerbench_inst_17_21_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_21_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_21_16_9_tsni = function lscomp1$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_21_16_9_tsni = function lscomp2$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_21_16_9_5_tsni = function enumFromThenTo_inst_17_21_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_21_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_21_16_10_tsni = function enumFromThenTo_inst_17_21_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_21_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_21_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_21_15_tsni = function intbench_inst_17_21_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_21_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_21_15_12_tsni = function lscomp1$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_21_15_12_tsni = function lscomp2$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_21_15_12_1_tsni = function enumFromThenTo_inst_17_21_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_21_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_21_15_13_tsni = function enumFromThenTo_inst_17_21_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_21_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_21_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_22_tsni = function runbench_inst_17_22_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_22_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_22_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_22_16_tsni = function integerbench_inst_17_22_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_22_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_22_16_9_tsni = function lscomp1$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_22_16_9_tsni = function lscomp2$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_22_16_9_5_tsni = function enumFromThenTo_inst_17_22_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_22_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_22_16_10_tsni = function enumFromThenTo_inst_17_22_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_22_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_22_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_22_15_tsni = function intbench_inst_17_22_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_22_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_22_15_12_tsni = function lscomp1$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_22_15_12_tsni = function lscomp2$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_22_15_12_1_tsni = function enumFromThenTo_inst_17_22_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_22_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_22_15_13_tsni = function enumFromThenTo_inst_17_22_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_22_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_22_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_23_tsni = function runbench_inst_17_23_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_23_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_23_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_23_16_tsni = function integerbench_inst_17_23_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_23_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_23_16_9_tsni = function lscomp1$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_23_16_9_tsni = function lscomp2$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_23_16_9_5_tsni = function enumFromThenTo_inst_17_23_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_23_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_23_16_10_tsni = function enumFromThenTo_inst_17_23_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_23_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_23_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_23_15_tsni = function intbench_inst_17_23_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_23_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_23_15_12_tsni = function lscomp1$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_23_15_12_tsni = function lscomp2$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_23_15_12_1_tsni = function enumFromThenTo_inst_17_23_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_23_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_23_15_13_tsni = function enumFromThenTo_inst_17_23_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_23_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_23_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_24_tsni = function runbench_inst_17_24_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_24_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_24_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_24_16_tsni = function integerbench_inst_17_24_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_24_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_24_16_9_tsni = function lscomp1$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_24_16_9_tsni = function lscomp2$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_24_16_9_5_tsni = function enumFromThenTo_inst_17_24_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_24_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_24_16_10_tsni = function enumFromThenTo_inst_17_24_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_24_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_24_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_24_15_tsni = function intbench_inst_17_24_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_24_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_24_15_12_tsni = function lscomp1$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_24_15_12_tsni = function lscomp2$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_24_15_12_1_tsni = function enumFromThenTo_inst_17_24_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_24_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_24_15_13_tsni = function enumFromThenTo_inst_17_24_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_24_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_24_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_25_tsni = function runbench_inst_17_25_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_25_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_25_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_25_16_tsni = function integerbench_inst_17_25_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_25_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_25_16_9_tsni = function lscomp1$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_25_16_9_tsni = function lscomp2$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_25_16_9_5_tsni = function enumFromThenTo_inst_17_25_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_25_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_25_16_10_tsni = function enumFromThenTo_inst_17_25_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_25_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_25_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_25_15_tsni = function intbench_inst_17_25_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_25_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_25_15_12_tsni = function lscomp1$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_25_15_12_tsni = function lscomp2$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_25_15_12_1_tsni = function enumFromThenTo_inst_17_25_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_25_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_25_15_13_tsni = function enumFromThenTo_inst_17_25_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_25_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_25_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_26_tsni = function runbench_inst_17_26_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_26_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_26_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_26_16_tsni = function integerbench_inst_17_26_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_26_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_26_16_9_tsni = function lscomp1$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_26_16_9_tsni = function lscomp2$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_26_16_9_5_tsni = function enumFromThenTo_inst_17_26_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_26_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_26_16_10_tsni = function enumFromThenTo_inst_17_26_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_26_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_26_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_26_15_tsni = function intbench_inst_17_26_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_26_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_26_15_12_tsni = function lscomp1$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_26_15_12_tsni = function lscomp2$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_26_15_12_1_tsni = function enumFromThenTo_inst_17_26_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_26_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_26_15_13_tsni = function enumFromThenTo_inst_17_26_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_26_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_26_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_17_27_tsni = function runbench_inst_17_27_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_17_27_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_17_27_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_17_27_16_tsni = function integerbench_inst_17_27_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_27_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_27_16_9_tsni = function lscomp1$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_27_16_9_tsni = function lscomp2$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_27_16_9_5_tsni = function enumFromThenTo_inst_17_27_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_27_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_27_16_10_tsni = function enumFromThenTo_inst_17_27_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_27_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_27_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_17_27_15_tsni = function intbench_inst_17_27_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_17_27_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_17_27_15_12_tsni = function lscomp1$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_17_27_15_12_tsni = function lscomp2$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_17_27_15_12_1_tsni = function enumFromThenTo_inst_17_27_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_27_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_17_27_15_13_tsni = function enumFromThenTo_inst_17_27_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_17_27_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_17_27_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_17_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runalltests_inst_28_29_tsni = function runalltests_inst_28_29_tsni(astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
  tmp = runbench_inst_28_29_18_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  tmp1 = runbench_inst_28_29_19_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  tmp3 = runbench_inst_28_29_20_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  tmp5 = runbench_inst_28_29_21_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  tmp7 = runbench_inst_28_29_22_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  tmp9 = runbench_inst_28_29_23_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  tmp11 = runbench_inst_28_29_24_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  tmp13 = runbench_inst_28_29_25_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  tmp15 = runbench_inst_28_29_26_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  tmp17 = runbench_inst_28_29_27_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_28_29_27_tsni = function runbench_inst_28_29_27_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_27_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_27_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_27_15_tsni = function intbench_inst_28_29_27_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_27_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_27_15_12_tsni = function lscomp1$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_27_15_12_tsni = function lscomp2$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_27_15_12_1_tsni = function enumFromThenTo_inst_28_29_27_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_27_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_27_15_13_tsni = function enumFromThenTo_inst_28_29_27_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_27_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_27_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_27_16_tsni = function integerbench_inst_28_29_27_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_27_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_27_16_9_tsni = function lscomp1$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_27_16_9_tsni = function lscomp2$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_27_16_9_5_tsni = function enumFromThenTo_inst_28_29_27_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_27_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_27_16_10_tsni = function enumFromThenTo_inst_28_29_27_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_27_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_27_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_26_tsni = function runbench_inst_28_29_26_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_26_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_26_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_26_15_tsni = function intbench_inst_28_29_26_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_26_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_26_15_12_tsni = function lscomp1$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_26_15_12_tsni = function lscomp2$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_26_15_12_1_tsni = function enumFromThenTo_inst_28_29_26_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_26_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_26_15_13_tsni = function enumFromThenTo_inst_28_29_26_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_26_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_26_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_26_16_tsni = function integerbench_inst_28_29_26_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_26_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_26_16_9_tsni = function lscomp1$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_26_16_9_tsni = function lscomp2$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_26_16_9_5_tsni = function enumFromThenTo_inst_28_29_26_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_26_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_26_16_10_tsni = function enumFromThenTo_inst_28_29_26_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_26_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_26_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_25_tsni = function runbench_inst_28_29_25_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_25_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_25_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_25_15_tsni = function intbench_inst_28_29_25_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_25_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_25_15_12_tsni = function lscomp1$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_25_15_12_tsni = function lscomp2$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_25_15_12_1_tsni = function enumFromThenTo_inst_28_29_25_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_25_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_25_15_13_tsni = function enumFromThenTo_inst_28_29_25_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_25_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_25_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_25_16_tsni = function integerbench_inst_28_29_25_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_25_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_25_16_9_tsni = function lscomp1$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_25_16_9_tsni = function lscomp2$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_25_16_9_5_tsni = function enumFromThenTo_inst_28_29_25_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_25_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_25_16_10_tsni = function enumFromThenTo_inst_28_29_25_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_25_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_25_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_24_tsni = function runbench_inst_28_29_24_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_24_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_24_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_24_15_tsni = function intbench_inst_28_29_24_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_24_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_24_15_12_tsni = function lscomp1$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_24_15_12_tsni = function lscomp2$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_24_15_12_1_tsni = function enumFromThenTo_inst_28_29_24_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_24_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_24_15_13_tsni = function enumFromThenTo_inst_28_29_24_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_24_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_24_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_24_16_tsni = function integerbench_inst_28_29_24_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_24_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_24_16_9_tsni = function lscomp1$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_24_16_9_tsni = function lscomp2$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_24_16_9_5_tsni = function enumFromThenTo_inst_28_29_24_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_24_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_24_16_10_tsni = function enumFromThenTo_inst_28_29_24_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_24_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_24_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_23_tsni = function runbench_inst_28_29_23_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_23_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_23_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_23_15_tsni = function intbench_inst_28_29_23_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_23_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_23_15_12_tsni = function lscomp1$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_23_15_12_tsni = function lscomp2$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_23_15_12_1_tsni = function enumFromThenTo_inst_28_29_23_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_23_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_23_15_13_tsni = function enumFromThenTo_inst_28_29_23_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_23_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_23_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_23_16_tsni = function integerbench_inst_28_29_23_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_23_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_23_16_9_tsni = function lscomp1$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_23_16_9_tsni = function lscomp2$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_23_16_9_5_tsni = function enumFromThenTo_inst_28_29_23_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_23_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_23_16_10_tsni = function enumFromThenTo_inst_28_29_23_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_23_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_23_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_22_tsni = function runbench_inst_28_29_22_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_22_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_22_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_22_15_tsni = function intbench_inst_28_29_22_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_22_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_22_15_12_tsni = function lscomp1$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_22_15_12_tsni = function lscomp2$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_22_15_12_1_tsni = function enumFromThenTo_inst_28_29_22_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_22_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_22_15_13_tsni = function enumFromThenTo_inst_28_29_22_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_22_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_22_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_22_16_tsni = function integerbench_inst_28_29_22_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_22_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_22_16_9_tsni = function lscomp1$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_22_16_9_tsni = function lscomp2$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_22_16_9_5_tsni = function enumFromThenTo_inst_28_29_22_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_22_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_22_16_10_tsni = function enumFromThenTo_inst_28_29_22_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_22_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_22_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_21_tsni = function runbench_inst_28_29_21_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_21_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_21_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_21_15_tsni = function intbench_inst_28_29_21_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_21_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_21_15_12_tsni = function lscomp1$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_21_15_12_tsni = function lscomp2$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_21_15_12_1_tsni = function enumFromThenTo_inst_28_29_21_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_21_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_21_15_13_tsni = function enumFromThenTo_inst_28_29_21_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_21_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_21_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_21_16_tsni = function integerbench_inst_28_29_21_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_21_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_21_16_9_tsni = function lscomp1$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_21_16_9_tsni = function lscomp2$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_21_16_9_5_tsni = function enumFromThenTo_inst_28_29_21_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_21_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_21_16_10_tsni = function enumFromThenTo_inst_28_29_21_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_21_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_21_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_20_tsni = function runbench_inst_28_29_20_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_20_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_20_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_20_15_tsni = function intbench_inst_28_29_20_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_20_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_20_15_12_tsni = function lscomp1$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_20_15_12_tsni = function lscomp2$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_20_15_12_1_tsni = function enumFromThenTo_inst_28_29_20_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_20_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_20_15_13_tsni = function enumFromThenTo_inst_28_29_20_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_20_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_20_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_20_16_tsni = function integerbench_inst_28_29_20_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_20_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_20_16_9_tsni = function lscomp1$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_20_16_9_tsni = function lscomp2$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_20_16_9_5_tsni = function enumFromThenTo_inst_28_29_20_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_20_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_20_16_10_tsni = function enumFromThenTo_inst_28_29_20_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_20_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_20_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_19_tsni = function runbench_inst_28_29_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_19_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_19_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_19_15_tsni = function intbench_inst_28_29_19_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_19_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_19_15_12_tsni = function lscomp1$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_19_15_12_tsni = function lscomp2$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_19_15_12_1_tsni = function enumFromThenTo_inst_28_29_19_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_19_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_19_15_13_tsni = function enumFromThenTo_inst_28_29_19_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_19_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_19_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_19_16_tsni = function integerbench_inst_28_29_19_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_19_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_19_16_9_tsni = function lscomp1$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_19_16_9_tsni = function lscomp2$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_19_16_9_5_tsni = function enumFromThenTo_inst_28_29_19_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_19_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_19_16_10_tsni = function enumFromThenTo_inst_28_29_19_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_19_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_19_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_28_29_18_tsni = function runbench_inst_28_29_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_28_29_18_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_28_29_18_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
intbench_inst_28_29_18_15_tsni = function intbench_inst_28_29_18_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_18_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_18_15_12_tsni = function lscomp1$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_18_15_12_tsni = function lscomp2$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_18_15_12_1_tsni = function enumFromThenTo_inst_28_29_18_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_18_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_18_15_13_tsni = function enumFromThenTo_inst_28_29_18_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_18_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_18_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
integerbench_inst_28_29_18_16_tsni = function integerbench_inst_28_29_18_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_28_29_18_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_28_29_18_16_9_tsni = function lscomp1$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_28_29_18_16_9_tsni = function lscomp2$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_28_29_18_16_9_5_tsni = function enumFromThenTo_inst_28_29_18_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_18_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_28_29_18_16_10_tsni = function enumFromThenTo_inst_28_29_18_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_28_29_18_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_28_29_18_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_28_29_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
testInteger_nofib_inst_30_31_tsni = function testInteger_nofib_inst_30_31_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = - 2100000000;
  tmp1 = - 2100000000;
  tmp2 = - 2100000000;
  return runalltests_inst_30_31_29_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
};
runalltests_inst_30_31_29_tsni = function runalltests_inst_30_31_29_tsni(astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
  tmp = runbench_inst_30_31_29_18_tsni(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
  tmp1 = runbench_inst_30_31_29_19_tsni(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
  tmp2 = (tmp , tmp1);
  tmp3 = runbench_inst_30_31_29_20_tsni(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
  tmp4 = (tmp2 , tmp3);
  tmp5 = runbench_inst_30_31_29_21_tsni(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
  tmp6 = (tmp4 , tmp5);
  tmp7 = runbench_inst_30_31_29_22_tsni(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
  tmp8 = (tmp6 , tmp7);
  tmp9 = runbench_inst_30_31_29_23_tsni(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
  tmp10 = (tmp8 , tmp9);
  tmp11 = runbench_inst_30_31_29_24_tsni(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
  tmp12 = (tmp10 , tmp11);
  tmp13 = runbench_inst_30_31_29_25_tsni(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
  tmp14 = (tmp12 , tmp13);
  tmp15 = runbench_inst_30_31_29_26_tsni(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
  tmp16 = (tmp14 , tmp15);
  tmp17 = runbench_inst_30_31_29_27_tsni(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
  return (tmp16 , tmp17)
};
runbench_inst_30_31_29_18_tsni = function runbench_inst_30_31_29_18_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_18_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_18_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_18_16_tsni = function integerbench_inst_30_31_29_18_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_18_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_18_16_9_tsni = function lscomp1$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_18_16_9_tsni = function lscomp2$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_18_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_18_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_18_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_18_16_10_tsni = function enumFromThenTo_inst_30_31_29_18_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_18_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_18_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_18_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_18_15_tsni = function intbench_inst_30_31_29_18_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_18_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_18_15_12_tsni = function lscomp1$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_18_15_12_tsni = function lscomp2$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_18_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_18_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_18_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_18_15_13_tsni = function enumFromThenTo_inst_30_31_29_18_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_18_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_18_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_18_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_19_tsni = function runbench_inst_30_31_29_19_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_19_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_19_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_19_16_tsni = function integerbench_inst_30_31_29_19_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_19_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_19_16_9_tsni = function lscomp1$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_19_16_9_tsni = function lscomp2$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_19_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_19_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_19_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_19_16_10_tsni = function enumFromThenTo_inst_30_31_29_19_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_19_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_19_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_19_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_19_15_tsni = function intbench_inst_30_31_29_19_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_19_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_19_15_12_tsni = function lscomp1$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_19_15_12_tsni = function lscomp2$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_19_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_19_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_19_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_19_15_13_tsni = function enumFromThenTo_inst_30_31_29_19_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_19_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_19_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_19_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_20_tsni = function runbench_inst_30_31_29_20_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_20_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_20_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_20_16_tsni = function integerbench_inst_30_31_29_20_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_20_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_20_16_9_tsni = function lscomp1$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_20_16_9_tsni = function lscomp2$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_20_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_20_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_20_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_20_16_10_tsni = function enumFromThenTo_inst_30_31_29_20_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_20_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_20_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_20_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_20_15_tsni = function intbench_inst_30_31_29_20_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_20_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_20_15_12_tsni = function lscomp1$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_20_15_12_tsni = function lscomp2$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_20_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_20_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_20_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_20_15_13_tsni = function enumFromThenTo_inst_30_31_29_20_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_20_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_20_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_20_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_21_tsni = function runbench_inst_30_31_29_21_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_21_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_21_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_21_16_tsni = function integerbench_inst_30_31_29_21_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_21_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_21_16_9_tsni = function lscomp1$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_21_16_9_tsni = function lscomp2$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_21_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_21_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_21_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_21_16_10_tsni = function enumFromThenTo_inst_30_31_29_21_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_21_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_21_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_21_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_21_15_tsni = function intbench_inst_30_31_29_21_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_21_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_21_15_12_tsni = function lscomp1$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_21_15_12_tsni = function lscomp2$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_21_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_21_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_21_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_21_15_13_tsni = function enumFromThenTo_inst_30_31_29_21_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_21_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_21_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_21_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_22_tsni = function runbench_inst_30_31_29_22_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_22_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_22_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_22_16_tsni = function integerbench_inst_30_31_29_22_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_22_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_22_16_9_tsni = function lscomp1$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_22_16_9_tsni = function lscomp2$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_22_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_22_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_22_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_22_16_10_tsni = function enumFromThenTo_inst_30_31_29_22_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_22_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_22_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_22_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_22_15_tsni = function intbench_inst_30_31_29_22_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_22_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_22_15_12_tsni = function lscomp1$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_22_15_12_tsni = function lscomp2$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_22_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_22_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_22_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_22_15_13_tsni = function enumFromThenTo_inst_30_31_29_22_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_22_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_22_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_22_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_23_tsni = function runbench_inst_30_31_29_23_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_23_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_23_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_23_16_tsni = function integerbench_inst_30_31_29_23_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_23_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_23_16_9_tsni = function lscomp1$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_23_16_9_tsni = function lscomp2$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_23_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_23_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_23_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_23_16_10_tsni = function enumFromThenTo_inst_30_31_29_23_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_23_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_23_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_23_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_23_15_tsni = function intbench_inst_30_31_29_23_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_23_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_23_15_12_tsni = function lscomp1$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_23_15_12_tsni = function lscomp2$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_23_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_23_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_23_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_23_15_13_tsni = function enumFromThenTo_inst_30_31_29_23_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_23_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_23_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_23_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_24_tsni = function runbench_inst_30_31_29_24_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_24_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_24_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_24_16_tsni = function integerbench_inst_30_31_29_24_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_24_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_24_16_9_tsni = function lscomp1$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_24_16_9_tsni = function lscomp2$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_24_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_24_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_24_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_24_16_10_tsni = function enumFromThenTo_inst_30_31_29_24_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_24_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_24_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_24_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_24_15_tsni = function intbench_inst_30_31_29_24_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_24_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_24_15_12_tsni = function lscomp1$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_24_15_12_tsni = function lscomp2$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_24_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_24_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_24_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_24_15_13_tsni = function enumFromThenTo_inst_30_31_29_24_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_24_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_24_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_24_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_25_tsni = function runbench_inst_30_31_29_25_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_25_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_25_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_25_16_tsni = function integerbench_inst_30_31_29_25_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_25_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_25_16_9_tsni = function lscomp1$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_25_16_9_tsni = function lscomp2$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_25_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_25_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_25_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_25_16_10_tsni = function enumFromThenTo_inst_30_31_29_25_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_25_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_25_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_25_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_25_15_tsni = function intbench_inst_30_31_29_25_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_25_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_25_15_12_tsni = function lscomp1$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_25_15_12_tsni = function lscomp2$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_25_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_25_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_25_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_25_15_13_tsni = function enumFromThenTo_inst_30_31_29_25_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_25_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_25_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_25_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_26_tsni = function runbench_inst_30_31_29_26_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_26_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_26_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_26_16_tsni = function integerbench_inst_30_31_29_26_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_26_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_26_16_9_tsni = function lscomp1$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_26_16_9_tsni = function lscomp2$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_26_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_26_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_26_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_26_16_10_tsni = function enumFromThenTo_inst_30_31_29_26_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_26_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_26_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_26_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_26_15_tsni = function intbench_inst_30_31_29_26_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_26_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_26_15_12_tsni = function lscomp1$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_26_15_12_tsni = function lscomp2$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_26_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_26_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_26_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_26_15_13_tsni = function enumFromThenTo_inst_30_31_29_26_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_26_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_26_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_26_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
runbench_inst_30_31_29_27_tsni = function runbench_inst_30_31_29_27_tsni(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = intbench_inst_30_31_29_27_15_tsni(iop, astart, astep, alim, astart, astep, alim);
  tmp1 = integerbench_inst_30_31_29_27_16_tsni(jop, astart, astep, alim, astart, astep, alim);
  return (tmp , tmp1)
};
integerbench_inst_30_31_29_27_16_tsni = function integerbench_inst_30_31_29_27_16_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_27_16_10_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_27_16_9_tsni = function lscomp1$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_27_16_9_tsni = function lscomp2$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_27_16_9_5_tsni = function enumFromThenTo_inst_30_31_29_27_16_9_5_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_27_16_9_5_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_27_16_10_tsni = function enumFromThenTo_inst_30_31_29_27_16_10_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_27_16_10_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_27_16_9_5_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_27_16_9_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
intbench_inst_30_31_29_27_15_tsni = function intbench_inst_30_31_29_27_15_tsni(op, astart, astep, alim, bstart, bstep, blim) {
  let tmp, tmp1;
  tmp = astart + astep;
  tmp1 = enumFromThenTo_inst_30_31_29_27_15_13_tsni(astart, tmp, alim);
  return lscomp1$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, tmp1)
};
lscomp1$_inst_30_31_29_27_15_12_tsni = function lscomp1$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim))
};
lscomp2$_inst_30_31_29_27_15_12_tsni = function lscomp2$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, a, t1, ls) {
  return runtime.safeCall(ls(op, bstart, bstep, blim, a, t1))
};
enumFromThenTo_inst_30_31_29_27_15_12_1_tsni = function enumFromThenTo_inst_30_31_29_27_15_12_1_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_27_15_12_1_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim, a1, t1) => {
      let param0, param1, b1, t2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      b1 = param0;
      t2 = param1;
      tmp3 = runtime.safeCall(op(a1, b1));
      tmp4 = lscomp2$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, t2);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim, a1, t1) => {
      return lscomp1$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, t1)
    }
  }
};
enumFromThenTo_inst_30_31_29_27_15_13_tsni = function enumFromThenTo_inst_30_31_29_27_15_13_tsni(a, t, b) {
  let scrut, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo_inst_30_31_29_27_15_13_tsni(t, tmp1, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp2;
    return (op, bstart, bstep, blim) => {
      let param0, param1, a1, t1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      a1 = param0;
      t1 = param1;
      tmp3 = bstart + bstep;
      tmp4 = enumFromThenTo_inst_30_31_29_27_15_12_1_tsni(bstart, tmp3, blim);
      return lscomp2$_inst_30_31_29_27_15_12_tsni(op, bstart, bstep, blim, a1, t1, tmp4)
    }
  } else {
    return (op, bstart, bstep, blim) => {
      return NofibPrelude.Nil
    }
  }
};
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
lambda2 = (undefined, function (a, b) {
  return z_sub(a, b)
});
lambda3 = (undefined, function (a, b) {
  return a - b
});
lambda4 = (undefined, function (a, b) {
  return z_mul(a, b)
});
lambda5 = (undefined, function (a, b) {
  return a * b
});
lambda6 = (undefined, function (a, b) {
  return z_div(a, b)
});
lambda7 = (undefined, function (a, b) {
  return NofibPrelude.intDiv(a, b)
});
lambda8 = (undefined, function (a, b) {
  return z_mod(a, b)
});
lambda9 = (undefined, function (a, b) {
  return NofibPrelude.intMod(a, b)
});
lambda10 = (undefined, function (a, b) {
  return z_equal(a, b)
});
lambda11 = (undefined, function (a, b) {
  return a == b
});
lambda12 = (undefined, function (a, b) {
  return z_lt(a, b)
});
lambda13 = (undefined, function (a, b) {
  return a < b
});
lambda14 = (undefined, function (a, b) {
  return z_leq(a, b)
});
lambda15 = (undefined, function (a, b) {
  return a <= b
});
lambda16 = (undefined, function (a, b) {
  return z_gt(a, b)
});
lambda17 = (undefined, function (a, b) {
  return a > b
});
lambda18 = (undefined, function (a, b) {
  return z_geq(a, b)
});
lambda19 = (undefined, function (a, b) {
  return a >= b
});
lscomp2$1 = function lscomp2$(op, bstart, bstep, blim, a, t1, ls) {
  let param0, param1, b, t2, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp1$1(op, bstart, bstep, blim, t1)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    b = param0;
    t2 = param1;
    tmp = runtime.safeCall(op(a, b));
    tmp1 = lscomp2$1(op, bstart, bstep, blim, a, t1, t2);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp21 = function lscomp2(op, bstart, bstep, blim, a, t1) {
  return (ls) => {
    return lscomp2$1(op, bstart, bstep, blim, a, t1, ls)
  }
};
lscomp1$1 = function lscomp1$(op, bstart, bstep, blim, ls) {
  let param0, param1, a, t1, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a = param0;
    t1 = param1;
    tmp = bstart + bstep;
    tmp1 = enumFromThenTo_inst_0_1_tsni(bstart, tmp, blim);
    return lscomp2$_inst_0_tsni(op, bstart, bstep, blim, a, t1, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp11 = function lscomp1(op, bstart, bstep, blim) {
  return (ls) => {
    return lscomp1$_inst_2_3_tsni(op, bstart, bstep, blim, ls)
  }
};
lscomp2$ = function lscomp2$(op, bstart, bstep, blim, a, t1, ls) {
  let param0, param1, b, t2, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp1$(op, bstart, bstep, blim, t1)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    b = param0;
    t2 = param1;
    tmp = runtime.safeCall(op(a, b));
    tmp1 = lscomp2$(op, bstart, bstep, blim, a, t1, t2);
    return NofibPrelude.Cons(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2 = function lscomp2(op, bstart, bstep, blim, a, t1) {
  return (ls) => {
    return lscomp2$(op, bstart, bstep, blim, a, t1, ls)
  }
};
lscomp1$ = function lscomp1$(op, bstart, bstep, blim, ls) {
  let param0, param1, a, t1, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a = param0;
    t1 = param1;
    tmp = bstart + bstep;
    tmp1 = enumFromThenTo_inst_4_5_tsni(bstart, tmp, blim);
    return lscomp2$_inst_4_tsni(op, bstart, bstep, blim, a, t1, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1 = function lscomp1(op, bstart, bstep, blim) {
  return (ls) => {
    return lscomp1$_inst_6_7_tsni(op, bstart, bstep, blim, ls)
  }
};
(class integer {
  static {
    integer1 = integer;
  }
  static integerbench(op, astart, astep, alim, bstart, bstep, blim) {
    let tmp, tmp1;
    tmp = astart + astep;
    tmp1 = enumFromThenTo_inst_8_10_tsni(astart, tmp, alim);
    return lscomp1$_inst_8_9_tsni(op, bstart, bstep, blim, tmp1)
  } 
  static intbench(op1, astart1, astep1, alim1, bstart1, bstep1, blim1) {
    let tmp, tmp1;
    tmp = astart1 + astep1;
    tmp1 = enumFromThenTo_inst_11_13_tsni(astart1, tmp, alim1);
    return lscomp1$_inst_11_12_tsni(op1, bstart1, bstep1, blim1, tmp1)
  } 
  static runbench(jop, iop, opstr, astart2, astep2, alim2, bstart2, bstep2, blim2) {
    let tmp, tmp1;
    tmp = intbench_inst_14_15_tsni(iop, astart2, astep2, alim2, astart2, astep2, alim2);
    tmp1 = integerbench_inst_14_16_tsni(jop, astart2, astep2, alim2, astart2, astep2, alim2);
    return (tmp , tmp1)
  } 
  static runalltests(astart3, astep3, alim3, bstart3, bstep3, blim3) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    tmp = runbench_inst_17_18_tsni(lambda, lambda1, "(+)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp1 = runbench_inst_17_19_tsni(lambda2, lambda3, "(-)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp2 = (tmp , tmp1);
    tmp3 = runbench_inst_17_20_tsni(lambda4, lambda5, "(*)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp4 = (tmp2 , tmp3);
    tmp5 = runbench_inst_17_21_tsni(lambda6, lambda7, "div", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp6 = (tmp4 , tmp5);
    tmp7 = runbench_inst_17_22_tsni(lambda8, lambda9, "mod", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp8 = (tmp6 , tmp7);
    tmp9 = runbench_inst_17_23_tsni(lambda10, lambda11, "(==)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp10 = (tmp8 , tmp9);
    tmp11 = runbench_inst_17_24_tsni(lambda12, lambda13, "(<)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp12 = (tmp10 , tmp11);
    tmp13 = runbench_inst_17_25_tsni(lambda14, lambda15, "(<=)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp14 = (tmp12 , tmp13);
    tmp15 = runbench_inst_17_26_tsni(lambda16, lambda17, "(>)", astart3, astep3, alim3, astart3, astep3, alim3);
    tmp16 = (tmp14 , tmp15);
    tmp17 = runbench_inst_17_27_tsni(lambda18, lambda19, "(>=)", astart3, astep3, alim3, astart3, astep3, alim3);
    return (tmp16 , tmp17)
  } 
  static testInteger_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = - 2100000000;
    tmp1 = - 2100000000;
    tmp2 = - 2100000000;
    return runalltests_inst_28_29_tsni(tmp, n, 2100000000, tmp1, n, tmp2)
  } 
  static main() {
    let tmp;
    tmp = testInteger_nofib_inst_30_31_tsni(700000001);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "integer"; }
});
let integer = integer1; export default integer;
