import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let knights1, printBoard_inst_0_tsni, spaces_inst_0_1_tsni, replicate_inst_0_1_2_tsni, spaces_inst_0_3_tsni, replicate_inst_0_3_2_tsni, spaces_inst_0_4_tsni, replicate_inst_0_4_2_tsni, spaces_inst_0_5_tsni, replicate_inst_0_5_2_tsni, spaces_inst_0_6_tsni, replicate_inst_0_6_2_tsni, spaces_inst_0_7_tsni, replicate_inst_0_7_2_tsni, spaces_inst_0_8_tsni, replicate_inst_0_8_2_tsni, printBoard_inst_9_tsni, spaces_inst_9_1_tsni, replicate_inst_9_1_2_tsni, spaces_inst_9_3_tsni, replicate_inst_9_3_2_tsni, spaces_inst_9_4_tsni, replicate_inst_9_4_2_tsni, spaces_inst_9_5_tsni, replicate_inst_9_5_2_tsni, spaces_inst_9_6_tsni, replicate_inst_9_6_2_tsni, spaces_inst_9_7_tsni, replicate_inst_9_7_2_tsni, spaces_inst_9_8_tsni, replicate_inst_9_8_2_tsni, spaces_inst_8_tsni, replicate_inst_8_2_tsni, printBoard_inst_10_tsni, spaces_inst_10_1_tsni, replicate_inst_10_1_2_tsni, spaces_inst_10_3_tsni, replicate_inst_10_3_2_tsni, spaces_inst_10_4_tsni, replicate_inst_10_4_2_tsni, spaces_inst_10_5_tsni, replicate_inst_10_5_2_tsni, spaces_inst_10_6_tsni, replicate_inst_10_6_2_tsni, spaces_inst_10_7_tsni, replicate_inst_10_7_2_tsni, spaces_inst_10_8_tsni, replicate_inst_10_8_2_tsni, printBoard_inst_11_tsni, spaces_inst_11_1_tsni, replicate_inst_11_1_2_tsni, spaces_inst_11_3_tsni, replicate_inst_11_3_2_tsni, spaces_inst_11_4_tsni, replicate_inst_11_4_2_tsni, spaces_inst_11_5_tsni, replicate_inst_11_5_2_tsni, spaces_inst_11_6_tsni, replicate_inst_11_6_2_tsni, spaces_inst_11_7_tsni, replicate_inst_11_7_2_tsni, spaces_inst_11_8_tsni, replicate_inst_11_8_2_tsni, spaces_inst_7_tsni, replicate_inst_7_2_tsni, printBoard_inst_12_tsni, spaces_inst_12_1_tsni, replicate_inst_12_1_2_tsni, spaces_inst_12_3_tsni, replicate_inst_12_3_2_tsni, spaces_inst_12_4_tsni, replicate_inst_12_4_2_tsni, spaces_inst_12_5_tsni, replicate_inst_12_5_2_tsni, spaces_inst_12_6_tsni, replicate_inst_12_6_2_tsni, spaces_inst_12_7_tsni, replicate_inst_12_7_2_tsni, spaces_inst_12_8_tsni, replicate_inst_12_8_2_tsni, spaces_inst_6_tsni, replicate_inst_6_2_tsni, printBoard_inst_13_tsni, spaces_inst_13_1_tsni, replicate_inst_13_1_2_tsni, spaces_inst_13_3_tsni, replicate_inst_13_3_2_tsni, spaces_inst_13_4_tsni, replicate_inst_13_4_2_tsni, spaces_inst_13_5_tsni, replicate_inst_13_5_2_tsni, spaces_inst_13_6_tsni, replicate_inst_13_6_2_tsni, spaces_inst_13_7_tsni, replicate_inst_13_7_2_tsni, spaces_inst_13_8_tsni, replicate_inst_13_8_2_tsni, printBoard_inst_14_tsni, spaces_inst_14_1_tsni, replicate_inst_14_1_2_tsni, spaces_inst_14_3_tsni, replicate_inst_14_3_2_tsni, spaces_inst_14_4_tsni, replicate_inst_14_4_2_tsni, spaces_inst_14_5_tsni, replicate_inst_14_5_2_tsni, spaces_inst_14_6_tsni, replicate_inst_14_6_2_tsni, spaces_inst_14_7_tsni, replicate_inst_14_7_2_tsni, spaces_inst_14_8_tsni, replicate_inst_14_8_2_tsni, spaces_inst_5_tsni, replicate_inst_5_2_tsni, printBoard_inst_15_tsni, spaces_inst_15_1_tsni, replicate_inst_15_1_2_tsni, spaces_inst_15_3_tsni, replicate_inst_15_3_2_tsni, spaces_inst_15_4_tsni, replicate_inst_15_4_2_tsni, spaces_inst_15_5_tsni, replicate_inst_15_5_2_tsni, spaces_inst_15_6_tsni, replicate_inst_15_6_2_tsni, spaces_inst_15_7_tsni, replicate_inst_15_7_2_tsni, spaces_inst_15_8_tsni, replicate_inst_15_8_2_tsni, printBoard_inst_16_tsni, spaces_inst_16_1_tsni, replicate_inst_16_1_2_tsni, spaces_inst_16_3_tsni, replicate_inst_16_3_2_tsni, spaces_inst_16_4_tsni, replicate_inst_16_4_2_tsni, spaces_inst_16_5_tsni, replicate_inst_16_5_2_tsni, spaces_inst_16_6_tsni, replicate_inst_16_6_2_tsni, spaces_inst_16_7_tsni, replicate_inst_16_7_2_tsni, spaces_inst_16_8_tsni, replicate_inst_16_8_2_tsni, spaces_inst_4_tsni, replicate_inst_4_2_tsni, printBoard_inst_17_tsni, spaces_inst_17_1_tsni, replicate_inst_17_1_2_tsni, spaces_inst_17_3_tsni, replicate_inst_17_3_2_tsni, spaces_inst_17_4_tsni, replicate_inst_17_4_2_tsni, spaces_inst_17_5_tsni, replicate_inst_17_5_2_tsni, spaces_inst_17_6_tsni, replicate_inst_17_6_2_tsni, spaces_inst_17_7_tsni, replicate_inst_17_7_2_tsni, spaces_inst_17_8_tsni, replicate_inst_17_8_2_tsni, spaces_inst_3_tsni, replicate_inst_3_2_tsni, printBoard_inst_18_tsni, spaces_inst_18_1_tsni, replicate_inst_18_1_2_tsni, spaces_inst_18_3_tsni, replicate_inst_18_3_2_tsni, spaces_inst_18_4_tsni, replicate_inst_18_4_2_tsni, spaces_inst_18_5_tsni, replicate_inst_18_5_2_tsni, spaces_inst_18_6_tsni, replicate_inst_18_6_2_tsni, spaces_inst_18_7_tsni, replicate_inst_18_7_2_tsni, spaces_inst_18_8_tsni, replicate_inst_18_8_2_tsni, printBoard_inst_19_tsni, spaces_inst_19_1_tsni, replicate_inst_19_1_2_tsni, spaces_inst_19_3_tsni, replicate_inst_19_3_2_tsni, spaces_inst_19_4_tsni, replicate_inst_19_4_2_tsni, spaces_inst_19_5_tsni, replicate_inst_19_5_2_tsni, spaces_inst_19_6_tsni, replicate_inst_19_6_2_tsni, spaces_inst_19_7_tsni, replicate_inst_19_7_2_tsni, spaces_inst_19_8_tsni, replicate_inst_19_8_2_tsni, printBoard_inst_20_tsni, spaces_inst_20_1_tsni, replicate_inst_20_1_2_tsni, spaces_inst_20_3_tsni, replicate_inst_20_3_2_tsni, spaces_inst_20_4_tsni, replicate_inst_20_4_2_tsni, spaces_inst_20_5_tsni, replicate_inst_20_5_2_tsni, spaces_inst_20_6_tsni, replicate_inst_20_6_2_tsni, spaces_inst_20_7_tsni, replicate_inst_20_7_2_tsni, spaces_inst_20_8_tsni, replicate_inst_20_8_2_tsni, spaces_inst_1_tsni, replicate_inst_1_2_tsni, printBoard_inst_21_tsni, spaces_inst_21_1_tsni, replicate_inst_21_1_2_tsni, spaces_inst_21_3_tsni, replicate_inst_21_3_2_tsni, spaces_inst_21_4_tsni, replicate_inst_21_4_2_tsni, spaces_inst_21_5_tsni, replicate_inst_21_5_2_tsni, spaces_inst_21_6_tsni, replicate_inst_21_6_2_tsni, spaces_inst_21_7_tsni, replicate_inst_21_7_2_tsni, spaces_inst_21_8_tsni, replicate_inst_21_8_2_tsni, printTour_inst_22_tsni, showChessSet_inst_22_23_tsni, printBoard_inst_22_23_21_tsni, spaces_inst_22_23_21_1_tsni, replicate_inst_22_23_21_1_2_tsni, spaces_inst_22_23_21_3_tsni, replicate_inst_22_23_21_3_2_tsni, spaces_inst_22_23_21_4_tsni, replicate_inst_22_23_21_4_2_tsni, spaces_inst_22_23_21_5_tsni, replicate_inst_22_23_21_5_2_tsni, spaces_inst_22_23_21_6_tsni, replicate_inst_22_23_21_6_2_tsni, spaces_inst_22_23_21_7_tsni, replicate_inst_22_23_21_7_2_tsni, spaces_inst_22_23_21_8_tsni, replicate_inst_22_23_21_8_2_tsni, append_inst_22_23_21_24_tsni, append_inst_22_23_21_25_tsni, append_inst_22_23_21_26_tsni, append_inst_22_23_21_27_tsni, append_inst_22_23_21_28_tsni, append_inst_22_23_21_29_tsni, append_inst_22_23_21_30_tsni, append_inst_22_23_21_31_tsni, append_inst_22_23_21_32_tsni, append_inst_22_23_21_33_tsni, append_inst_22_23_21_34_tsni, append_inst_22_23_21_35_tsni, append_inst_22_23_21_36_tsni, append_inst_22_23_21_37_tsni, append_inst_22_23_21_38_tsni, append_inst_22_23_21_39_tsni, testKnights_nofib_inst_40_tsni, printTour_inst_40_22_tsni, showChessSet_inst_40_22_23_tsni, printBoard_inst_40_22_23_21_tsni, spaces_inst_40_22_23_21_8_tsni, replicate_inst_40_22_23_21_8_2_tsni, spaces_inst_40_22_23_21_7_tsni, replicate_inst_40_22_23_21_7_2_tsni, spaces_inst_40_22_23_21_6_tsni, replicate_inst_40_22_23_21_6_2_tsni, spaces_inst_40_22_23_21_5_tsni, replicate_inst_40_22_23_21_5_2_tsni, spaces_inst_40_22_23_21_4_tsni, replicate_inst_40_22_23_21_4_2_tsni, spaces_inst_40_22_23_21_3_tsni, replicate_inst_40_22_23_21_3_2_tsni, spaces_inst_40_22_23_21_1_tsni, replicate_inst_40_22_23_21_1_2_tsni, append_inst_40_22_23_21_34_tsni, append_inst_40_22_23_21_27_tsni, append_inst_40_22_23_21_29_tsni, append_inst_40_22_23_21_24_tsni, append_inst_40_22_23_21_28_tsni, append_inst_40_22_23_21_26_tsni, append_inst_40_22_23_21_33_tsni, append_inst_40_22_23_21_25_tsni, append_inst_40_22_23_21_31_tsni, append_inst_40_22_23_21_32_tsni, append_inst_40_22_23_21_30_tsni, append_inst_40_22_23_21_36_tsni, append_inst_40_22_23_21_37_tsni, append_inst_40_22_23_21_39_tsni, append_inst_40_22_23_21_35_tsni, append_inst_40_22_23_21_38_tsni, append_inst_0_35_tsni, append_inst_0_33_tsni, append_inst_0_36_tsni, append_inst_0_37_tsni, append_inst_0_25_tsni, append_inst_0_39_tsni, append_inst_0_38_tsni, append_inst_9_35_tsni, append_inst_9_33_tsni, append_inst_9_36_tsni, append_inst_9_37_tsni, append_inst_9_25_tsni, append_inst_9_39_tsni, append_inst_9_38_tsni, append_inst_38_tsni, append_inst_10_35_tsni, append_inst_10_33_tsni, append_inst_10_36_tsni, append_inst_10_37_tsni, append_inst_10_25_tsni, append_inst_10_39_tsni, append_inst_10_38_tsni, append_inst_11_35_tsni, append_inst_11_33_tsni, append_inst_11_36_tsni, append_inst_11_37_tsni, append_inst_11_25_tsni, append_inst_11_39_tsni, append_inst_11_38_tsni, append_inst_39_tsni, append_inst_12_35_tsni, append_inst_12_33_tsni, append_inst_12_36_tsni, append_inst_12_37_tsni, append_inst_12_25_tsni, append_inst_12_39_tsni, append_inst_12_38_tsni, append_inst_25_tsni, append_inst_13_35_tsni, append_inst_13_33_tsni, append_inst_13_36_tsni, append_inst_13_37_tsni, append_inst_13_25_tsni, append_inst_13_39_tsni, append_inst_13_38_tsni, append_inst_14_35_tsni, append_inst_14_33_tsni, append_inst_14_36_tsni, append_inst_14_37_tsni, append_inst_14_25_tsni, append_inst_14_39_tsni, append_inst_14_38_tsni, append_inst_37_tsni, append_inst_15_35_tsni, append_inst_15_33_tsni, append_inst_15_36_tsni, append_inst_15_37_tsni, append_inst_15_25_tsni, append_inst_15_39_tsni, append_inst_15_38_tsni, append_inst_16_35_tsni, append_inst_16_33_tsni, append_inst_16_36_tsni, append_inst_16_37_tsni, append_inst_16_25_tsni, append_inst_16_39_tsni, append_inst_16_38_tsni, append_inst_36_tsni, append_inst_17_35_tsni, append_inst_17_33_tsni, append_inst_17_36_tsni, append_inst_17_37_tsni, append_inst_17_25_tsni, append_inst_17_39_tsni, append_inst_17_38_tsni, append_inst_33_tsni, append_inst_18_35_tsni, append_inst_18_33_tsni, append_inst_18_36_tsni, append_inst_18_37_tsni, append_inst_18_25_tsni, append_inst_18_39_tsni, append_inst_18_38_tsni, append_inst_19_35_tsni, append_inst_19_33_tsni, append_inst_19_36_tsni, append_inst_19_37_tsni, append_inst_19_25_tsni, append_inst_19_39_tsni, append_inst_19_38_tsni, append_inst_20_35_tsni, append_inst_20_33_tsni, append_inst_20_36_tsni, append_inst_20_37_tsni, append_inst_20_25_tsni, append_inst_20_39_tsni, append_inst_20_38_tsni, append_inst_35_tsni, append_inst_21_35_tsni, append_inst_21_33_tsni, append_inst_21_36_tsni, append_inst_21_37_tsni, append_inst_21_25_tsni, append_inst_21_39_tsni, append_inst_21_38_tsni, append_inst_22_41_tsni, append_inst_40_22_41_tsni, match_xs_arm_Cons_inst_22_41_tsni, match_xs_arm_Cons_inst_40_22_41_tsni;
match_xs_arm_Cons_inst_22_41_tsni = function match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head_inst_22_41_tsni, _deforest_Cons_tail_inst_22_41_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_22_41_tsni;
  param1 = _deforest_Cons_tail_inst_22_41_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_22_41_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_40_22_41_tsni = function match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head_inst_40_22_41_tsni, _deforest_Cons_tail_inst_40_22_41_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_40_22_41_tsni;
  param1 = _deforest_Cons_tail_inst_40_22_41_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_22_41_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
printBoard_inst_0_tsni = function printBoard_inst_0_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_0_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_0_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_0_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_0_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_0_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_0_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_0_tsni(s, tmp23, xs1);
              tmp25 = append_inst_0_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_0_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_0_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_0_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_0_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_0_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_0_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_0_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_0_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_0_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_0_tsni(s, tmp55, xs1);
            tmp57 = append_inst_0_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_0_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_0_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_0_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_0_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_0_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_0_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_0_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_0_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_0_1_tsni = function spaces_inst_0_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_tsni(tmp3, " ")
};
replicate_inst_0_1_2_tsni = function replicate_inst_0_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_3_tsni = function spaces_inst_0_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_3_2_tsni(tmp3, " ")
};
replicate_inst_0_3_2_tsni = function replicate_inst_0_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_4_tsni = function spaces_inst_0_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_4_2_tsni(tmp3, " ")
};
replicate_inst_0_4_2_tsni = function replicate_inst_0_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_5_tsni = function spaces_inst_0_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_5_2_tsni(tmp3, " ")
};
replicate_inst_0_5_2_tsni = function replicate_inst_0_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_6_tsni = function spaces_inst_0_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_6_2_tsni(tmp3, " ")
};
replicate_inst_0_6_2_tsni = function replicate_inst_0_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_7_tsni = function spaces_inst_0_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_7_2_tsni(tmp3, " ")
};
replicate_inst_0_7_2_tsni = function replicate_inst_0_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_0_8_tsni = function spaces_inst_0_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_8_2_tsni(tmp3, " ")
};
replicate_inst_0_8_2_tsni = function replicate_inst_0_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_9_tsni = function printBoard_inst_9_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_9_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_9_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_9_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_9_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_9_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_9_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_9_tsni(s, tmp23, xs1);
              tmp25 = append_inst_9_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_9_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_9_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_9_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_9_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_9_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_9_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_9_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_9_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_9_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_9_tsni(s, tmp55, xs1);
            tmp57 = append_inst_9_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_9_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_9_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_9_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_9_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_9_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_9_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_9_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_9_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_9_1_tsni = function spaces_inst_9_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_1_2_tsni(tmp3, " ")
};
replicate_inst_9_1_2_tsni = function replicate_inst_9_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_3_tsni = function spaces_inst_9_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_3_2_tsni(tmp3, " ")
};
replicate_inst_9_3_2_tsni = function replicate_inst_9_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_4_tsni = function spaces_inst_9_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_4_2_tsni(tmp3, " ")
};
replicate_inst_9_4_2_tsni = function replicate_inst_9_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_5_tsni = function spaces_inst_9_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_5_2_tsni(tmp3, " ")
};
replicate_inst_9_5_2_tsni = function replicate_inst_9_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_6_tsni = function spaces_inst_9_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_6_2_tsni(tmp3, " ")
};
replicate_inst_9_6_2_tsni = function replicate_inst_9_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_7_tsni = function spaces_inst_9_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_7_2_tsni(tmp3, " ")
};
replicate_inst_9_7_2_tsni = function replicate_inst_9_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_9_8_tsni = function spaces_inst_9_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_9_8_2_tsni(tmp3, " ")
};
replicate_inst_9_8_2_tsni = function replicate_inst_9_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_9_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_8_tsni = function spaces_inst_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_8_2_tsni(tmp3, " ")
};
replicate_inst_8_2_tsni = function replicate_inst_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_10_tsni = function printBoard_inst_10_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_10_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_10_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_10_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_10_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_10_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_10_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_10_tsni(s, tmp23, xs1);
              tmp25 = append_inst_10_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_10_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_10_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_10_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_10_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_10_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_10_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_10_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_10_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_10_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_10_tsni(s, tmp55, xs1);
            tmp57 = append_inst_10_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_10_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_10_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_10_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_10_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_10_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_10_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_10_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_10_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_10_1_tsni = function spaces_inst_10_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_1_2_tsni(tmp3, " ")
};
replicate_inst_10_1_2_tsni = function replicate_inst_10_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_3_tsni = function spaces_inst_10_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_3_2_tsni(tmp3, " ")
};
replicate_inst_10_3_2_tsni = function replicate_inst_10_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_4_tsni = function spaces_inst_10_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_4_2_tsni(tmp3, " ")
};
replicate_inst_10_4_2_tsni = function replicate_inst_10_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_5_tsni = function spaces_inst_10_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_5_2_tsni(tmp3, " ")
};
replicate_inst_10_5_2_tsni = function replicate_inst_10_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_6_tsni = function spaces_inst_10_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_6_2_tsni(tmp3, " ")
};
replicate_inst_10_6_2_tsni = function replicate_inst_10_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_7_tsni = function spaces_inst_10_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_7_2_tsni(tmp3, " ")
};
replicate_inst_10_7_2_tsni = function replicate_inst_10_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_10_8_tsni = function spaces_inst_10_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_10_8_2_tsni(tmp3, " ")
};
replicate_inst_10_8_2_tsni = function replicate_inst_10_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_10_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_10_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_11_tsni = function printBoard_inst_11_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_11_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_11_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_11_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_11_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_11_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_11_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_11_tsni(s, tmp23, xs1);
              tmp25 = append_inst_11_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_11_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_11_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_11_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_11_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_11_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_11_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_11_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_11_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_11_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_11_tsni(s, tmp55, xs1);
            tmp57 = append_inst_11_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_11_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_11_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_11_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_11_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_11_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_11_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_11_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_11_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_11_1_tsni = function spaces_inst_11_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_1_2_tsni(tmp3, " ")
};
replicate_inst_11_1_2_tsni = function replicate_inst_11_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_3_tsni = function spaces_inst_11_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_3_2_tsni(tmp3, " ")
};
replicate_inst_11_3_2_tsni = function replicate_inst_11_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_4_tsni = function spaces_inst_11_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_4_2_tsni(tmp3, " ")
};
replicate_inst_11_4_2_tsni = function replicate_inst_11_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_5_tsni = function spaces_inst_11_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_5_2_tsni(tmp3, " ")
};
replicate_inst_11_5_2_tsni = function replicate_inst_11_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_6_tsni = function spaces_inst_11_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_6_2_tsni(tmp3, " ")
};
replicate_inst_11_6_2_tsni = function replicate_inst_11_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_7_tsni = function spaces_inst_11_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_7_2_tsni(tmp3, " ")
};
replicate_inst_11_7_2_tsni = function replicate_inst_11_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_11_8_tsni = function spaces_inst_11_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_11_8_2_tsni(tmp3, " ")
};
replicate_inst_11_8_2_tsni = function replicate_inst_11_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_11_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_11_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_7_tsni = function spaces_inst_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_7_2_tsni(tmp3, " ")
};
replicate_inst_7_2_tsni = function replicate_inst_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_12_tsni = function printBoard_inst_12_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_12_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_12_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_12_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_12_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_12_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_12_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_12_tsni(s, tmp23, xs1);
              tmp25 = append_inst_12_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_12_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_12_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_12_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_12_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_12_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_12_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_12_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_12_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_12_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_12_tsni(s, tmp55, xs1);
            tmp57 = append_inst_12_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_12_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_12_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_12_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_12_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_12_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_12_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_12_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_12_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_12_1_tsni = function spaces_inst_12_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_1_2_tsni(tmp3, " ")
};
replicate_inst_12_1_2_tsni = function replicate_inst_12_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_3_tsni = function spaces_inst_12_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_3_2_tsni(tmp3, " ")
};
replicate_inst_12_3_2_tsni = function replicate_inst_12_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_4_tsni = function spaces_inst_12_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_4_2_tsni(tmp3, " ")
};
replicate_inst_12_4_2_tsni = function replicate_inst_12_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_5_tsni = function spaces_inst_12_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_5_2_tsni(tmp3, " ")
};
replicate_inst_12_5_2_tsni = function replicate_inst_12_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_6_tsni = function spaces_inst_12_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_6_2_tsni(tmp3, " ")
};
replicate_inst_12_6_2_tsni = function replicate_inst_12_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_7_tsni = function spaces_inst_12_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_7_2_tsni(tmp3, " ")
};
replicate_inst_12_7_2_tsni = function replicate_inst_12_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_12_8_tsni = function spaces_inst_12_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_12_8_2_tsni(tmp3, " ")
};
replicate_inst_12_8_2_tsni = function replicate_inst_12_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_12_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_6_tsni = function spaces_inst_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_6_2_tsni(tmp3, " ")
};
replicate_inst_6_2_tsni = function replicate_inst_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_13_tsni = function printBoard_inst_13_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_13_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_13_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_13_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_13_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_13_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_13_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_13_tsni(s, tmp23, xs1);
              tmp25 = append_inst_13_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_13_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_13_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_13_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_13_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_13_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_13_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_13_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_13_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_13_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_13_tsni(s, tmp55, xs1);
            tmp57 = append_inst_13_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_13_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_13_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_13_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_13_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_13_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_13_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_13_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_13_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_13_1_tsni = function spaces_inst_13_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_1_2_tsni(tmp3, " ")
};
replicate_inst_13_1_2_tsni = function replicate_inst_13_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_3_tsni = function spaces_inst_13_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_3_2_tsni(tmp3, " ")
};
replicate_inst_13_3_2_tsni = function replicate_inst_13_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_4_tsni = function spaces_inst_13_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_4_2_tsni(tmp3, " ")
};
replicate_inst_13_4_2_tsni = function replicate_inst_13_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_5_tsni = function spaces_inst_13_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_5_2_tsni(tmp3, " ")
};
replicate_inst_13_5_2_tsni = function replicate_inst_13_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_6_tsni = function spaces_inst_13_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_6_2_tsni(tmp3, " ")
};
replicate_inst_13_6_2_tsni = function replicate_inst_13_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_7_tsni = function spaces_inst_13_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_7_2_tsni(tmp3, " ")
};
replicate_inst_13_7_2_tsni = function replicate_inst_13_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_13_8_tsni = function spaces_inst_13_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_13_8_2_tsni(tmp3, " ")
};
replicate_inst_13_8_2_tsni = function replicate_inst_13_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_13_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_14_tsni = function printBoard_inst_14_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_14_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_14_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_14_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_14_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_14_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_14_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_14_tsni(s, tmp23, xs1);
              tmp25 = append_inst_14_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_14_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_14_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_14_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_14_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_14_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_14_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_14_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_14_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_14_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_14_tsni(s, tmp55, xs1);
            tmp57 = append_inst_14_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_14_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_14_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_14_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_14_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_14_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_14_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_14_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_14_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_14_1_tsni = function spaces_inst_14_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_1_2_tsni(tmp3, " ")
};
replicate_inst_14_1_2_tsni = function replicate_inst_14_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_3_tsni = function spaces_inst_14_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_3_2_tsni(tmp3, " ")
};
replicate_inst_14_3_2_tsni = function replicate_inst_14_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_4_tsni = function spaces_inst_14_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_4_2_tsni(tmp3, " ")
};
replicate_inst_14_4_2_tsni = function replicate_inst_14_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_5_tsni = function spaces_inst_14_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_5_2_tsni(tmp3, " ")
};
replicate_inst_14_5_2_tsni = function replicate_inst_14_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_6_tsni = function spaces_inst_14_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_6_2_tsni(tmp3, " ")
};
replicate_inst_14_6_2_tsni = function replicate_inst_14_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_7_tsni = function spaces_inst_14_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_7_2_tsni(tmp3, " ")
};
replicate_inst_14_7_2_tsni = function replicate_inst_14_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_14_8_tsni = function spaces_inst_14_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_14_8_2_tsni(tmp3, " ")
};
replicate_inst_14_8_2_tsni = function replicate_inst_14_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_14_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_5_tsni = function spaces_inst_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_5_2_tsni(tmp3, " ")
};
replicate_inst_5_2_tsni = function replicate_inst_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_15_tsni = function printBoard_inst_15_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_15_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_15_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_15_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_15_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_15_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_15_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_15_tsni(s, tmp23, xs1);
              tmp25 = append_inst_15_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_15_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_15_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_15_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_15_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_15_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_15_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_15_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_15_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_15_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_15_tsni(s, tmp55, xs1);
            tmp57 = append_inst_15_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_15_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_15_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_15_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_15_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_15_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_15_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_15_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_15_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_15_1_tsni = function spaces_inst_15_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_1_2_tsni(tmp3, " ")
};
replicate_inst_15_1_2_tsni = function replicate_inst_15_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_3_tsni = function spaces_inst_15_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_3_2_tsni(tmp3, " ")
};
replicate_inst_15_3_2_tsni = function replicate_inst_15_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_4_tsni = function spaces_inst_15_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_4_2_tsni(tmp3, " ")
};
replicate_inst_15_4_2_tsni = function replicate_inst_15_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_5_tsni = function spaces_inst_15_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_5_2_tsni(tmp3, " ")
};
replicate_inst_15_5_2_tsni = function replicate_inst_15_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_6_tsni = function spaces_inst_15_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_6_2_tsni(tmp3, " ")
};
replicate_inst_15_6_2_tsni = function replicate_inst_15_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_7_tsni = function spaces_inst_15_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_7_2_tsni(tmp3, " ")
};
replicate_inst_15_7_2_tsni = function replicate_inst_15_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_15_8_tsni = function spaces_inst_15_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_15_8_2_tsni(tmp3, " ")
};
replicate_inst_15_8_2_tsni = function replicate_inst_15_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_16_tsni = function printBoard_inst_16_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_16_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_16_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_16_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_16_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_16_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_16_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_16_tsni(s, tmp23, xs1);
              tmp25 = append_inst_16_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_16_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_16_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_16_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_16_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_16_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_16_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_16_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_16_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_16_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_16_tsni(s, tmp55, xs1);
            tmp57 = append_inst_16_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_16_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_16_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_16_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_16_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_16_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_16_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_16_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_16_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_16_1_tsni = function spaces_inst_16_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_1_2_tsni(tmp3, " ")
};
replicate_inst_16_1_2_tsni = function replicate_inst_16_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_3_tsni = function spaces_inst_16_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_3_2_tsni(tmp3, " ")
};
replicate_inst_16_3_2_tsni = function replicate_inst_16_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_4_tsni = function spaces_inst_16_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_4_2_tsni(tmp3, " ")
};
replicate_inst_16_4_2_tsni = function replicate_inst_16_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_5_tsni = function spaces_inst_16_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_5_2_tsni(tmp3, " ")
};
replicate_inst_16_5_2_tsni = function replicate_inst_16_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_6_tsni = function spaces_inst_16_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_6_2_tsni(tmp3, " ")
};
replicate_inst_16_6_2_tsni = function replicate_inst_16_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_7_tsni = function spaces_inst_16_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_7_2_tsni(tmp3, " ")
};
replicate_inst_16_7_2_tsni = function replicate_inst_16_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_16_8_tsni = function spaces_inst_16_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_16_8_2_tsni(tmp3, " ")
};
replicate_inst_16_8_2_tsni = function replicate_inst_16_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_16_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_16_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_4_tsni = function spaces_inst_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_4_2_tsni(tmp3, " ")
};
replicate_inst_4_2_tsni = function replicate_inst_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_17_tsni = function printBoard_inst_17_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_17_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_17_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_17_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_17_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_17_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_17_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_17_tsni(s, tmp23, xs1);
              tmp25 = append_inst_17_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_17_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_17_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_17_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_17_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_17_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_17_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_17_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_17_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_17_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_17_tsni(s, tmp55, xs1);
            tmp57 = append_inst_17_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_17_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_17_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_17_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_17_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_17_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_17_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_17_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_17_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_17_1_tsni = function spaces_inst_17_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_1_2_tsni(tmp3, " ")
};
replicate_inst_17_1_2_tsni = function replicate_inst_17_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_3_tsni = function spaces_inst_17_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_3_2_tsni(tmp3, " ")
};
replicate_inst_17_3_2_tsni = function replicate_inst_17_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_4_tsni = function spaces_inst_17_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_4_2_tsni(tmp3, " ")
};
replicate_inst_17_4_2_tsni = function replicate_inst_17_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_5_tsni = function spaces_inst_17_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_5_2_tsni(tmp3, " ")
};
replicate_inst_17_5_2_tsni = function replicate_inst_17_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_6_tsni = function spaces_inst_17_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_6_2_tsni(tmp3, " ")
};
replicate_inst_17_6_2_tsni = function replicate_inst_17_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_7_tsni = function spaces_inst_17_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_7_2_tsni(tmp3, " ")
};
replicate_inst_17_7_2_tsni = function replicate_inst_17_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_17_8_tsni = function spaces_inst_17_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_17_8_2_tsni(tmp3, " ")
};
replicate_inst_17_8_2_tsni = function replicate_inst_17_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_17_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_3_tsni = function spaces_inst_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_3_2_tsni(tmp3, " ")
};
replicate_inst_3_2_tsni = function replicate_inst_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_18_tsni = function printBoard_inst_18_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_18_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_18_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_18_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_18_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_18_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_18_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_18_tsni(s, tmp23, xs1);
              tmp25 = append_inst_18_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_18_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_18_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_18_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_18_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_18_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_18_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_18_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_18_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_18_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_18_tsni(s, tmp55, xs1);
            tmp57 = append_inst_18_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_18_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_18_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_18_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_18_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_18_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_18_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_18_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_18_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_18_1_tsni = function spaces_inst_18_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_1_2_tsni(tmp3, " ")
};
replicate_inst_18_1_2_tsni = function replicate_inst_18_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_3_tsni = function spaces_inst_18_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_3_2_tsni(tmp3, " ")
};
replicate_inst_18_3_2_tsni = function replicate_inst_18_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_4_tsni = function spaces_inst_18_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_4_2_tsni(tmp3, " ")
};
replicate_inst_18_4_2_tsni = function replicate_inst_18_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_5_tsni = function spaces_inst_18_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_5_2_tsni(tmp3, " ")
};
replicate_inst_18_5_2_tsni = function replicate_inst_18_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_6_tsni = function spaces_inst_18_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_6_2_tsni(tmp3, " ")
};
replicate_inst_18_6_2_tsni = function replicate_inst_18_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_7_tsni = function spaces_inst_18_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_7_2_tsni(tmp3, " ")
};
replicate_inst_18_7_2_tsni = function replicate_inst_18_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_18_8_tsni = function spaces_inst_18_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_18_8_2_tsni(tmp3, " ")
};
replicate_inst_18_8_2_tsni = function replicate_inst_18_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_19_tsni = function printBoard_inst_19_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_19_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_19_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_19_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_19_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_19_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_19_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_19_tsni(s, tmp23, xs1);
              tmp25 = append_inst_19_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_19_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_19_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_19_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_19_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_19_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_19_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_19_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_19_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_19_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_19_tsni(s, tmp55, xs1);
            tmp57 = append_inst_19_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_19_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_19_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_19_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_19_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_19_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_19_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_19_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_19_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_19_1_tsni = function spaces_inst_19_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_1_2_tsni(tmp3, " ")
};
replicate_inst_19_1_2_tsni = function replicate_inst_19_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_3_tsni = function spaces_inst_19_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_3_2_tsni(tmp3, " ")
};
replicate_inst_19_3_2_tsni = function replicate_inst_19_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_4_tsni = function spaces_inst_19_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_4_2_tsni(tmp3, " ")
};
replicate_inst_19_4_2_tsni = function replicate_inst_19_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_5_tsni = function spaces_inst_19_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_5_2_tsni(tmp3, " ")
};
replicate_inst_19_5_2_tsni = function replicate_inst_19_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_6_tsni = function spaces_inst_19_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_6_2_tsni(tmp3, " ")
};
replicate_inst_19_6_2_tsni = function replicate_inst_19_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_7_tsni = function spaces_inst_19_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_7_2_tsni(tmp3, " ")
};
replicate_inst_19_7_2_tsni = function replicate_inst_19_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_19_8_tsni = function spaces_inst_19_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_19_8_2_tsni(tmp3, " ")
};
replicate_inst_19_8_2_tsni = function replicate_inst_19_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_19_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_19_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_20_tsni = function printBoard_inst_20_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_20_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_20_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_20_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_20_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_20_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_20_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_20_tsni(s, tmp23, xs1);
              tmp25 = append_inst_20_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_20_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_20_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_20_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_20_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_20_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_20_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_20_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_20_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_20_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_20_tsni(s, tmp55, xs1);
            tmp57 = append_inst_20_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_20_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_20_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_20_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_20_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_20_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_20_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_20_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_20_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_20_1_tsni = function spaces_inst_20_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_1_2_tsni(tmp3, " ")
};
replicate_inst_20_1_2_tsni = function replicate_inst_20_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_3_tsni = function spaces_inst_20_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_3_2_tsni(tmp3, " ")
};
replicate_inst_20_3_2_tsni = function replicate_inst_20_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_4_tsni = function spaces_inst_20_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_4_2_tsni(tmp3, " ")
};
replicate_inst_20_4_2_tsni = function replicate_inst_20_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_5_tsni = function spaces_inst_20_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_5_2_tsni(tmp3, " ")
};
replicate_inst_20_5_2_tsni = function replicate_inst_20_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_6_tsni = function spaces_inst_20_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_6_2_tsni(tmp3, " ")
};
replicate_inst_20_6_2_tsni = function replicate_inst_20_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_7_tsni = function spaces_inst_20_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_7_2_tsni(tmp3, " ")
};
replicate_inst_20_7_2_tsni = function replicate_inst_20_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_20_8_tsni = function spaces_inst_20_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_20_8_2_tsni(tmp3, " ")
};
replicate_inst_20_8_2_tsni = function replicate_inst_20_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_1_tsni = function spaces_inst_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_1_2_tsni(tmp3, " ")
};
replicate_inst_1_2_tsni = function replicate_inst_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printBoard_inst_21_tsni = function printBoard_inst_21_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_21_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_21_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_21_35_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_21_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_21_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_21_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_21_tsni(s, tmp23, xs1);
              tmp25 = append_inst_21_33_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_21_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_21_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_21_36_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_21_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_21_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_21_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_21_37_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_21_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_21_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_21_tsni(s, tmp55, xs1);
            tmp57 = append_inst_21_25_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_21_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_21_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_21_39_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_21_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_21_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_21_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_21_38_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_21_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_21_1_tsni = function spaces_inst_21_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_1_2_tsni(tmp3, " ")
};
replicate_inst_21_1_2_tsni = function replicate_inst_21_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_35_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_3_tsni = function spaces_inst_21_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_3_2_tsni(tmp3, " ")
};
replicate_inst_21_3_2_tsni = function replicate_inst_21_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_33_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_4_tsni = function spaces_inst_21_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_4_2_tsni(tmp3, " ")
};
replicate_inst_21_4_2_tsni = function replicate_inst_21_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_36_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_5_tsni = function spaces_inst_21_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_5_2_tsni(tmp3, " ")
};
replicate_inst_21_5_2_tsni = function replicate_inst_21_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_37_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_6_tsni = function spaces_inst_21_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_6_2_tsni(tmp3, " ")
};
replicate_inst_21_6_2_tsni = function replicate_inst_21_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_7_tsni = function spaces_inst_21_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_7_2_tsni(tmp3, " ")
};
replicate_inst_21_7_2_tsni = function replicate_inst_21_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_39_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_21_8_tsni = function spaces_inst_21_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_21_8_2_tsni(tmp3, " ")
};
replicate_inst_21_8_2_tsni = function replicate_inst_21_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_21_38_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
printTour_inst_22_tsni = function printTour_inst_22_tsni(ss) {
  let pp, strToInt, scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2, lambda;
  strToInt = function strToInt(y, xs) {
    let param02, param12, x, xs1, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return y
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      x = param02;
      xs1 = param12;
      tmp3 = 10 * y;
      tmp4 = runtime.safeCall(x.codePointAt(0));
      tmp5 = tmp4 - 48;
      tmp6 = tmp3 + tmp5;
      return strToInt(tmp6, xs1)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  pp = function pp(xs) {
    let param02, param12, first1, first0, x, y, xs1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      if (globalThis.Array.isArray(param02) && param02.length === 2) {
        first0 = param02[0];
        first1 = param02[1];
        x = first0;
        y = first1;
        xs1 = param12;
        tmp3 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp4 = NofibPrelude.stringOfInt(x);
        tmp5 = NofibPrelude.nofibStringToList(tmp4);
        tmp6 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp7 = showChessSet_inst_22_23_tsni(y);
        tmp8 = pp(xs1);
        tmp9 = append_inst_22_41_tsni(tmp7, tmp8);
        tmp10 = NofibPrelude.append(tmp6, tmp9);
        tmp11 = NofibPrelude.append(tmp5, tmp10);
        return NofibPrelude.append(tmp3, tmp11)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return strToInt(0, x)
  });
  scrut = NofibPrelude.map(lambda, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = knights.root(size);
        tmp1 = knights.depthSearch(tmp, knights.grow, knights.isFinished);
        tmp2 = NofibPrelude.take_lz(number, tmp1);
        return pp(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
showChessSet_inst_22_23_tsni = function showChessSet_inst_22_23_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_22_23_21_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_22_23_21_tsni = function printBoard_inst_22_23_21_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_22_23_21_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_22_23_21_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_22_23_21_35_tsni(tmp3, tmp5);
        _deforest_Cons_head4 = "*";
        _deforest_Cons_tail4 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_22_23_21_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_22_23_21_34_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_22_23_21_tsni(s, tmp15, xs1);
          tmp17 = append_inst_22_23_21_29_tsni(tmp14, tmp16);
          return append_inst_22_23_21_28_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_22_23_21_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_22_23_21_tsni(s, tmp23, xs1);
              tmp25 = append_inst_22_23_21_33_tsni(tmp22, tmp24);
              return append_inst_22_23_21_31_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_22_23_21_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_22_23_21_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_22_23_21_36_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_22_23_21_tsni(s, tmp35, tmp36);
                  return append_inst_22_23_21_32_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_22_23_21_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_22_23_21_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_22_23_21_37_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_22_23_21_tsni(s, tmp47, tmp48);
                return append_inst_22_23_21_30_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_22_23_21_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_22_23_21_tsni(s, tmp55, xs1);
            tmp57 = append_inst_22_23_21_25_tsni(tmp54, tmp56);
            return append_inst_22_23_21_26_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_22_23_21_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_22_23_21_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_22_23_21_39_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_22_23_21_tsni(s, tmp67, tmp68);
                return append_inst_22_23_21_24_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_22_23_21_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_22_23_21_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_22_23_21_38_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_22_41_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_22_23_21_tsni(s, tmp79, tmp80);
              return append_inst_22_23_21_27_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_22_23_21_1_tsni = function spaces_inst_22_23_21_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_1_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_1_2_tsni = function replicate_inst_22_23_21_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_35_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_3_tsni = function spaces_inst_22_23_21_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_3_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_3_2_tsni = function replicate_inst_22_23_21_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_33_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_4_tsni = function spaces_inst_22_23_21_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_4_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_4_2_tsni = function replicate_inst_22_23_21_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_36_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_5_tsni = function spaces_inst_22_23_21_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_5_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_5_2_tsni = function replicate_inst_22_23_21_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_37_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_6_tsni = function spaces_inst_22_23_21_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_6_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_6_2_tsni = function replicate_inst_22_23_21_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_7_tsni = function spaces_inst_22_23_21_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_7_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_7_2_tsni = function replicate_inst_22_23_21_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_39_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_22_23_21_8_tsni = function spaces_inst_22_23_21_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_22_23_21_8_2_tsni(tmp3, " ")
};
replicate_inst_22_23_21_8_2_tsni = function replicate_inst_22_23_21_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_22_23_21_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_22_23_21_38_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_22_23_21_24_tsni = function append_inst_22_23_21_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_25_tsni = function append_inst_22_23_21_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_26_tsni = function append_inst_22_23_21_26_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_26_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_27_tsni = function append_inst_22_23_21_27_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_27_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_28_tsni = function append_inst_22_23_21_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_29_tsni = function append_inst_22_23_21_29_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_29_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_30_tsni = function append_inst_22_23_21_30_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_30_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_31_tsni = function append_inst_22_23_21_31_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_31_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_32_tsni = function append_inst_22_23_21_32_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_32_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_33_tsni = function append_inst_22_23_21_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_34_tsni = function append_inst_22_23_21_34_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_21_34_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_22_23_21_35_tsni = function append_inst_22_23_21_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_36_tsni = function append_inst_22_23_21_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_37_tsni = function append_inst_22_23_21_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_38_tsni = function append_inst_22_23_21_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_21_39_tsni = function append_inst_22_23_21_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
testKnights_nofib_inst_40_tsni = function testKnights_nofib_inst_40_tsni(ss) {
  let argsOk, all_digits, usageString, scrut;
  all_digits = function all_digits(s) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let tmp;
      tmp = knights.myIsDigit(a);
      return tmp && b
    });
    return NofibPrelude.foldr(lambda, true, s)
  };
  argsOk = function argsOk(ss1) {
    let tmp, tmp1, tmp2, lambda;
    tmp = NofibPrelude.listLen(ss1);
    tmp1 = tmp === 2;
    lambda = (undefined, function (a, b) {
      let tmp3;
      tmp3 = all_digits(a);
      return tmp3 && b
    });
    tmp2 = NofibPrelude.foldr(lambda, true, ss1);
    return tmp1 && tmp2
  };
  usageString = "\nUsage: knights <board size> <no solutions> \n";
  scrut = argsOk(ss);
  if (scrut === true) {
    return printTour_inst_40_22_tsni(ss)
  } else {
    throw globalThis.Error(usageString);
  }
};
printTour_inst_40_22_tsni = function printTour_inst_40_22_tsni(ss) {
  let pp, strToInt, scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2, lambda;
  strToInt = function strToInt(y, xs) {
    let param02, param12, x, xs1, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return y
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      x = param02;
      xs1 = param12;
      tmp3 = 10 * y;
      tmp4 = runtime.safeCall(x.codePointAt(0));
      tmp5 = tmp4 - 48;
      tmp6 = tmp3 + tmp5;
      return strToInt(tmp6, xs1)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  pp = function pp(xs) {
    let param02, param12, first1, first0, x, y, xs1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param02 = xs.head;
      param12 = xs.tail;
      if (globalThis.Array.isArray(param02) && param02.length === 2) {
        first0 = param02[0];
        first1 = param02[1];
        x = first0;
        y = first1;
        xs1 = param12;
        tmp3 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp4 = NofibPrelude.stringOfInt(x);
        tmp5 = NofibPrelude.nofibStringToList(tmp4);
        tmp6 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp7 = showChessSet_inst_40_22_23_tsni(y);
        tmp8 = pp(xs1);
        tmp9 = append_inst_40_22_41_tsni(tmp7, tmp8);
        tmp10 = NofibPrelude.append(tmp6, tmp9);
        tmp11 = NofibPrelude.append(tmp5, tmp10);
        return NofibPrelude.append(tmp3, tmp11)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return strToInt(0, x)
  });
  scrut = NofibPrelude.map(lambda, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = knights.root(size);
        tmp1 = knights.depthSearch(tmp, knights.grow, knights.isFinished);
        tmp2 = NofibPrelude.take_lz(number, tmp1);
        return pp(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
showChessSet_inst_40_22_23_tsni = function showChessSet_inst_40_22_23_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_40_22_23_21_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_40_22_23_21_tsni = function printBoard_inst_40_22_23_21_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_40_22_23_21_1_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_40_22_23_21_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_40_22_23_21_35_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_40_22_23_21_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_40_22_23_21_34_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_40_22_23_21_tsni(s, tmp15, xs1);
          tmp17 = append_inst_40_22_23_21_29_tsni(tmp14, tmp16);
          return append_inst_40_22_23_21_28_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_40_22_23_21_3_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_40_22_23_21_tsni(s, tmp23, xs1);
              tmp25 = append_inst_40_22_23_21_33_tsni(tmp22, tmp24);
              return append_inst_40_22_23_21_31_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_40_22_23_21_4_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_40_22_23_21_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_40_22_23_21_36_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_40_22_23_21_tsni(s, tmp35, tmp36);
                  return append_inst_40_22_23_21_32_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_40_22_23_21_5_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_40_22_23_21_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_40_22_23_21_37_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_40_22_23_21_tsni(s, tmp47, tmp48);
                return append_inst_40_22_23_21_30_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_40_22_23_21_6_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_40_22_23_21_tsni(s, tmp55, xs1);
            tmp57 = append_inst_40_22_23_21_25_tsni(tmp54, tmp56);
            return append_inst_40_22_23_21_26_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_40_22_23_21_7_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_40_22_23_21_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_40_22_23_21_39_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_40_22_23_21_tsni(s, tmp67, tmp68);
                return append_inst_40_22_23_21_24_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_40_22_23_21_8_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_40_22_23_21_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_40_22_23_21_38_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_40_22_41_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_40_22_23_21_tsni(s, tmp79, tmp80);
              return append_inst_40_22_23_21_27_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
spaces_inst_40_22_23_21_8_tsni = function spaces_inst_40_22_23_21_8_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_8_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_8_2_tsni = function replicate_inst_40_22_23_21_8_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_8_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_38_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_7_tsni = function spaces_inst_40_22_23_21_7_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_7_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_7_2_tsni = function replicate_inst_40_22_23_21_7_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_7_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_39_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_6_tsni = function spaces_inst_40_22_23_21_6_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_6_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_6_2_tsni = function replicate_inst_40_22_23_21_6_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_6_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_5_tsni = function spaces_inst_40_22_23_21_5_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_5_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_5_2_tsni = function replicate_inst_40_22_23_21_5_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_5_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_37_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_4_tsni = function spaces_inst_40_22_23_21_4_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_4_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_4_2_tsni = function replicate_inst_40_22_23_21_4_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_4_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_36_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_3_tsni = function spaces_inst_40_22_23_21_3_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_3_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_3_2_tsni = function replicate_inst_40_22_23_21_3_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_3_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_33_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_40_22_23_21_1_tsni = function spaces_inst_40_22_23_21_1_tsni(s, y) {
  let logTen, tmp, tmp1, tmp2, tmp3;
  logTen = function logTen(x) {
    let scrut, tmp4, tmp5;
    scrut = x === 0;
    if (scrut === true) {
      return 0
    } else {
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5
    }
  };
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_22_23_21_1_2_tsni(tmp3, " ")
};
replicate_inst_40_22_23_21_1_2_tsni = function replicate_inst_40_22_23_21_1_2_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_22_23_21_1_2_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_23_21_35_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_40_22_23_21_34_tsni = function append_inst_40_22_23_21_34_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_34_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_27_tsni = function append_inst_40_22_23_21_27_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_27_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_29_tsni = function append_inst_40_22_23_21_29_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_29_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_24_tsni = function append_inst_40_22_23_21_24_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_24_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_28_tsni = function append_inst_40_22_23_21_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_26_tsni = function append_inst_40_22_23_21_26_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_26_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_33_tsni = function append_inst_40_22_23_21_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_25_tsni = function append_inst_40_22_23_21_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_31_tsni = function append_inst_40_22_23_21_31_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_31_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_32_tsni = function append_inst_40_22_23_21_32_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_32_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_30_tsni = function append_inst_40_22_23_21_30_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_22_23_21_30_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_22_41_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_22_23_21_36_tsni = function append_inst_40_22_23_21_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_37_tsni = function append_inst_40_22_23_21_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_39_tsni = function append_inst_40_22_23_21_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_35_tsni = function append_inst_40_22_23_21_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_23_21_38_tsni = function append_inst_40_22_23_21_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_35_tsni = function append_inst_0_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_33_tsni = function append_inst_0_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_36_tsni = function append_inst_0_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_37_tsni = function append_inst_0_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_25_tsni = function append_inst_0_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_39_tsni = function append_inst_0_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_38_tsni = function append_inst_0_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_35_tsni = function append_inst_9_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_33_tsni = function append_inst_9_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_36_tsni = function append_inst_9_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_37_tsni = function append_inst_9_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_25_tsni = function append_inst_9_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_39_tsni = function append_inst_9_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_9_38_tsni = function append_inst_9_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_38_tsni = function append_inst_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_35_tsni = function append_inst_10_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_33_tsni = function append_inst_10_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_36_tsni = function append_inst_10_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_37_tsni = function append_inst_10_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_25_tsni = function append_inst_10_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_39_tsni = function append_inst_10_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_10_38_tsni = function append_inst_10_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_35_tsni = function append_inst_11_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_33_tsni = function append_inst_11_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_36_tsni = function append_inst_11_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_37_tsni = function append_inst_11_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_25_tsni = function append_inst_11_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_39_tsni = function append_inst_11_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_11_38_tsni = function append_inst_11_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_tsni = function append_inst_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_35_tsni = function append_inst_12_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_33_tsni = function append_inst_12_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_36_tsni = function append_inst_12_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_37_tsni = function append_inst_12_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_25_tsni = function append_inst_12_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_39_tsni = function append_inst_12_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_12_38_tsni = function append_inst_12_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_tsni = function append_inst_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_35_tsni = function append_inst_13_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_33_tsni = function append_inst_13_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_36_tsni = function append_inst_13_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_37_tsni = function append_inst_13_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_25_tsni = function append_inst_13_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_39_tsni = function append_inst_13_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_13_38_tsni = function append_inst_13_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_35_tsni = function append_inst_14_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_33_tsni = function append_inst_14_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_36_tsni = function append_inst_14_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_37_tsni = function append_inst_14_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_25_tsni = function append_inst_14_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_39_tsni = function append_inst_14_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_14_38_tsni = function append_inst_14_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_37_tsni = function append_inst_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_35_tsni = function append_inst_15_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_33_tsni = function append_inst_15_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_36_tsni = function append_inst_15_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_37_tsni = function append_inst_15_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_25_tsni = function append_inst_15_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_39_tsni = function append_inst_15_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_38_tsni = function append_inst_15_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_35_tsni = function append_inst_16_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_33_tsni = function append_inst_16_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_36_tsni = function append_inst_16_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_37_tsni = function append_inst_16_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_25_tsni = function append_inst_16_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_39_tsni = function append_inst_16_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_16_38_tsni = function append_inst_16_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_36_tsni = function append_inst_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_35_tsni = function append_inst_17_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_33_tsni = function append_inst_17_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_36_tsni = function append_inst_17_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_37_tsni = function append_inst_17_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_25_tsni = function append_inst_17_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_39_tsni = function append_inst_17_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_38_tsni = function append_inst_17_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_33_tsni = function append_inst_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_35_tsni = function append_inst_18_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_33_tsni = function append_inst_18_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_36_tsni = function append_inst_18_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_37_tsni = function append_inst_18_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_25_tsni = function append_inst_18_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_39_tsni = function append_inst_18_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_38_tsni = function append_inst_18_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_35_tsni = function append_inst_19_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_33_tsni = function append_inst_19_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_36_tsni = function append_inst_19_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_37_tsni = function append_inst_19_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_25_tsni = function append_inst_19_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_39_tsni = function append_inst_19_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_19_38_tsni = function append_inst_19_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_35_tsni = function append_inst_20_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_33_tsni = function append_inst_20_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_36_tsni = function append_inst_20_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_37_tsni = function append_inst_20_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_25_tsni = function append_inst_20_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_39_tsni = function append_inst_20_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_38_tsni = function append_inst_20_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_tsni = function append_inst_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_35_tsni = function append_inst_21_35_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_33_tsni = function append_inst_21_33_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_36_tsni = function append_inst_21_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_37_tsni = function append_inst_21_37_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_25_tsni = function append_inst_21_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_39_tsni = function append_inst_21_39_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_38_tsni = function append_inst_21_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_41_tsni = function append_inst_22_41_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_22_41_tsni = function append_inst_40_22_41_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
(class knights {
  static {
    knights1 = knights;
    this.createQueue = NofibPrelude.Nil;
    this.Board = function Board(a1, b1, c1, d1) {
      return new Board.class(a1, b1, c1, d1);
    };
    this.Board.class = class Board {
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return "Board(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ", " + runtime.render(this.c) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Direction = class Direction {
      constructor() {}
      toString() { return "Direction"; }
    };
    const UL$class = class UL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UL"; }
    };
    this.UL = new UL$class;
    this.UL.class = UL$class;
    const UR$class = class UR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UR"; }
    };
    this.UR = new UR$class;
    this.UR.class = UR$class;
    const DL$class = class DL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DL"; }
    };
    this.DL = new DL$class;
    this.DL.class = DL$class;
    const DR$class = class DR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DR"; }
    };
    this.DR = new DR$class;
    this.DR.class = DR$class;
    const LU$class = class LU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LU"; }
    };
    this.LU = new LU$class;
    this.LU.class = LU$class;
    const LD$class = class LD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LD"; }
    };
    this.LD = new LD$class;
    this.LD.class = LD$class;
    const RU$class = class RU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RU"; }
    };
    this.RU = new RU$class;
    this.RU.class = RU$class;
    const RD$class = class RD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RD"; }
    };
    this.RD = new RD$class;
    this.RD.class = RD$class;
  }
  static myIsDigit(c) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    tmp2 = runtime.safeCall(c.codePointAt(0));
    tmp3 = tmp2 <= 57;
    return tmp1 && tmp3
  } 
  static intintComp(a_b, c_d) {
    let first1, first0, a, b, first11, first01, c1, d, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
      first0 = a_b[0];
      first1 = a_b[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d) && c_d.length === 2) {
        first01 = c_d[0];
        first11 = c_d[1];
        c1 = first01;
        d = first11;
        tmp = a < c1;
        tmp1 = a === c1;
        tmp2 = b < d;
        tmp3 = tmp1 && tmp2;
        return tmp || tmp3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static intChessSetComp(a_b1, c_d1) {
    let first1, first0, a, b, first11, first01, c1, d;
    if (globalThis.Array.isArray(a_b1) && a_b1.length === 2) {
      first0 = a_b1[0];
      first1 = a_b1[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d1) && c_d1.length === 2) {
        first01 = c_d1[0];
        first11 = c_d1[1];
        c1 = first01;
        d = first11;
        return a < c1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myInit(a_t) {
    let param0, param1, a, t, a1, tmp;
    if (a_t instanceof NofibPrelude.Cons.class) {
      param0 = a_t.head;
      param1 = a_t.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param0;
        t = param1;
        tmp = knights.myInit(t);
        return NofibPrelude.Cons(a, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myLast(a_t1) {
    let go, param0, param1, a, t;
    go = function go(h, t1) {
      let param01, param11, head, t2;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h
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
    if (a_t1 instanceof NofibPrelude.Cons.class) {
      param0 = a_t1.head;
      param1 = a_t1.tail;
      a = param0;
      t = param1;
      return go(a, t)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntInt(xs) {
    let lscomp2, lscomp1, param0, param1, x, xs1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      lscomp1 = function lscomp1(ls) {
        let param01, param11, h, t, scrut, tmp5;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param01 = ls.head;
          param11 = ls.tail;
          h = param01;
          t = param11;
          scrut = knights.intintComp(h, x);
          if (scrut === true) {
            tmp5 = lscomp1(t);
            return NofibPrelude.Cons(h, tmp5)
          } else {
            return lscomp1(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls) {
        let param01, param11, h, t, scrut, tmp5, tmp6;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          param01 = ls.head;
          param11 = ls.tail;
          h = param01;
          t = param11;
          tmp5 = knights.intintComp(h, x);
          scrut = Predef.not(tmp5);
          if (scrut === true) {
            tmp6 = lscomp2(t);
            return NofibPrelude.Cons(h, tmp6)
          } else {
            return lscomp2(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp1(xs1);
      tmp1 = knights.quickSortIntInt(tmp);
      tmp2 = lscomp2(xs1);
      tmp3 = knights.quickSortIntInt(tmp2);
      tmp4 = NofibPrelude.Cons(x, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntChessSet(xs1) {
    let lscomp2, lscomp1, scrut, param0, param1, x, xs2, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    scrut = NofibPrelude.force(xs1);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs2 = param1;
      lscomp1 = function lscomp1(ls) {
        let scrut1, param01, param11, h, t, scrut2, lambda2, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          h = param01;
          t = param11;
          scrut2 = knights.intChessSetComp(h, x);
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp4;
              tmp4 = lscomp1(t);
              return NofibPrelude.LzCons(h, tmp4)
            });
            return NofibPrelude.lazy(lambda3)
          } else {
            return lscomp1(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls) {
        let scrut1, param01, param11, h, t, scrut2, tmp4, lambda2, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          param01 = scrut1.head;
          param11 = scrut1.tail;
          h = param01;
          t = param11;
          tmp4 = knights.intChessSetComp(h, x);
          scrut2 = Predef.not(tmp4);
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp5;
              tmp5 = lscomp2(t);
              return NofibPrelude.LzCons(h, tmp5)
            });
            return NofibPrelude.lazy(lambda3)
          } else {
            return lscomp2(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp1(xs2);
      tmp1 = knights.quickSortIntChessSet(tmp);
      lambda1 = (undefined, function () {
        let tmp4, tmp5;
        tmp4 = lscomp2(xs2);
        tmp5 = knights.quickSortIntChessSet(tmp4);
        return NofibPrelude.LzCons(x, tmp5)
      });
      tmp2 = lambda1;
      tmp3 = NofibPrelude.lazy(tmp2);
      return NofibPrelude.append_lz_lz(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sizeQueue(xs2) {
    return NofibPrelude.listLen(xs2)
  } 
  static emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  } 
  static removeBack(xs3) {
    let param0, param1, x1, xs4, x2, tmp;
    if (xs3 instanceof NofibPrelude.Cons.class) {
      param0 = xs3.head;
      param1 = xs3.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        x1 = param0;
        xs4 = param1;
        tmp = knights.removeBack(xs4);
        return NofibPrelude.Cons(x1, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static removeFront(xs4) {
    let param0, param1, h, t;
    if (xs4 instanceof NofibPrelude.Cons.class) {
      param0 = xs4.head;
      param1 = xs4.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireBack(xs5) {
    let param0, param1, x1, xs6, x2;
    if (xs5 instanceof NofibPrelude.Cons.class) {
      param0 = xs5.head;
      param1 = xs5.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x2
      } else {
        x1 = param0;
        xs6 = param1;
        return knights.inquireBack(xs6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront(h_t) {
    return NofibPrelude.head(h_t)
  } 
  static addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  } 
  static addAllFront(list1, q1) {
    return NofibPrelude.append(list1, q1)
  } 
  static addBack(x1, q2) {
    let tmp;
    tmp = NofibPrelude.Cons(x1, NofibPrelude.Nil);
    return NofibPrelude.append(q2, tmp)
  } 
  static addFront(x2, q3) {
    return NofibPrelude.Cons(x2, q3)
  } 
  static createBoard(x3, t) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function () {
      return t
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return runtime.safeCall(knights.Board(x3, 1, tmp, tmp1))
  } 
  static sizeBoard(b) {
    let param0, param1, param2, param3, a;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      a = param0;
      return a
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static noPieces(b1) {
    let param0, param1, param2, param3, n;
    if (b1 instanceof knights.Board.class) {
      param0 = b1.a;
      param1 = b1.b;
      param2 = b1.c;
      param3 = b1.d;
      n = param1;
      return n
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addPiece(t1, b2) {
    let param0, param1, param2, param3, s, n, f, ts, tmp, tmp1;
    if (b2 instanceof knights.Board.class) {
      param0 = b2.a;
      param1 = b2.b;
      param2 = b2.c;
      param3 = b2.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(t1, ts);
      return runtime.safeCall(knights.Board(s, tmp, f, tmp1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static deleteFirst(b3) {
    let param0, param1, param2, param3, s, n, f, ts, ts_, tmp, tmp1, tmp2, lambda;
    if (b3 instanceof knights.Board.class) {
      param0 = b3.a;
      param1 = b3.b;
      param2 = b3.c;
      param3 = b3.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = knights.myInit(ts);
      ts_ = tmp;
      tmp1 = n - 1;
      lambda = (undefined, function () {
        return knights.myLast(ts_)
      });
      tmp2 = NofibPrelude.lazy(lambda);
      return runtime.safeCall(knights.Board(s, tmp1, tmp2, ts_))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static positionPiece(x4, b4) {
    let param0, param1, param2, param3, n, ts, tmp;
    if (b4 instanceof knights.Board.class) {
      param0 = b4.a;
      param1 = b4.b;
      param2 = b4.c;
      param3 = b4.d;
      n = param1;
      ts = param3;
      tmp = n - x4;
      return NofibPrelude.atIndex(tmp, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lastPiece(b5) {
    let param0, param1, param2, param3, param01, param11, t2, ts;
    if (b5 instanceof knights.Board.class) {
      param0 = b5.a;
      param1 = b5.b;
      param2 = b5.c;
      param3 = b5.d;
      if (param3 instanceof NofibPrelude.Cons.class) {
        param01 = param3.head;
        param11 = param3.tail;
        t2 = param01;
        ts = param11;
        return t2
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static firstPiece(b6) {
    let param0, param1, param2, param3, f;
    if (b6 instanceof knights.Board.class) {
      param0 = b6.a;
      param1 = b6.b;
      param2 = b6.c;
      param3 = b6.d;
      f = param2;
      return NofibPrelude.force(f)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pieceAtTile(x5, b7) {
    let find, param0, param1, param2, param3, ts;
    if (b7 instanceof knights.Board.class) {
      param0 = b7.a;
      param1 = b7.b;
      param2 = b7.c;
      param3 = b7.d;
      ts = param3;
      find = function find(x6, xs6) {
        let param01, param11, y, xs7, scrut, tmp;
        if (xs6 instanceof NofibPrelude.Nil.class) {
          throw globalThis.Error("Tile not used");
        } else if (xs6 instanceof NofibPrelude.Cons.class) {
          param01 = xs6.head;
          param11 = xs6.tail;
          y = param01;
          xs7 = param11;
          scrut = NofibPrelude.eqTup2(x6, y);
          if (scrut === true) {
            tmp = NofibPrelude.listLen(xs7);
            return 1 + tmp
          } else {
            return find(x6, xs7)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return find(x5, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tup2InList(y, xs6) {
    let param0, param1, x6, xs7, scrut;
    if (xs6 instanceof NofibPrelude.Nil.class) {
      return false
    } else if (xs6 instanceof NofibPrelude.Cons.class) {
      param0 = xs6.head;
      param1 = xs6.tail;
      x6 = param0;
      xs7 = param1;
      scrut = NofibPrelude.eqTup2(y, x6);
      if (scrut === true) {
        return true
      } else {
        return knights.tup2InList(y, xs7)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isSquareFree(x6, b8) {
    let param0, param1, param2, param3, ts, tmp;
    if (b8 instanceof knights.Board.class) {
      param0 = b8.a;
      param1 = b8.b;
      param2 = b8.c;
      param3 = b8.d;
      ts = param3;
      tmp = knights.tup2InList(x6, ts);
      return Predef.not(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static assignMoveNo(t2, size, z) {
    let param0, param1, first1, first0, x7, y1, t3, tmp, tmp1, tmp2, arr, tmp3, tmp4;
    if (t2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t2 instanceof NofibPrelude.Cons.class) {
      param0 = t2.head;
      param1 = t2.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x7 = first0;
        y1 = first1;
        t3 = param1;
        tmp = y1 - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + x7;
        arr = [
          tmp2,
          z
        ];
        tmp3 = z - 1;
        tmp4 = knights.assignMoveNo(t3, size, tmp3);
        return NofibPrelude.Cons(arr, tmp4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static spaces(s, y1) {
    let logTen, tmp, tmp1, tmp2, tmp3;
    logTen = function logTen(x7) {
      let scrut, tmp4, tmp5;
      scrut = x7 === 0;
      if (scrut === true) {
        return 0
      } else {
        tmp4 = NofibPrelude.intDiv(x7, 10);
        tmp5 = logTen(tmp4);
        return 1 + tmp5
      }
    };
    tmp = logTen(s);
    tmp1 = logTen(y1);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  } 
  static printBoard(s1, n, xs7) {
    let param0, param1, first1, first0, i, j, xs8, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
    if (xs7 instanceof NofibPrelude.Nil.class) {
      tmp = s1 * s1;
      scrut8 = n > tmp;
      if (scrut8 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = NofibPrelude.intMod(n, s1);
        scrut7 = tmp1 != 0;
        if (scrut7 === true) {
          tmp2 = s1 * s1;
          tmp3 = spaces_inst_1_tsni(tmp2, 1);
          tmp4 = n + 1;
          tmp5 = printBoard_inst_20_tsni(s1, tmp4, NofibPrelude.Nil);
          tmp6 = append_inst_35_tsni(tmp3, tmp5);
          return NofibPrelude.Cons("*", tmp6)
        } else {
          tmp7 = NofibPrelude.intMod(n, s1);
          scrut6 = tmp7 === 0;
          if (scrut6 === true) {
            tmp8 = NofibPrelude.nofibStringToList("*\n");
            tmp9 = n + 1;
            tmp10 = printBoard_inst_19_tsni(s1, tmp9, NofibPrelude.Nil);
            return NofibPrelude.append(tmp8, tmp10)
          } else {
            throw globalThis.Error("printBoard empty list error");
          }
        }
      }
    } else if (xs7 instanceof NofibPrelude.Cons.class) {
      param0 = xs7.head;
      param1 = xs7.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        i = first0;
        j = first1;
        xs8 = param1;
        scrut4 = i === n;
        if (scrut4 === true) {
          tmp11 = NofibPrelude.intMod(n, s1);
          scrut5 = tmp11 === 0;
          if (scrut5 === true) {
            tmp12 = NofibPrelude.stringOfInt(j);
            tmp13 = NofibPrelude.nofibStringToList(tmp12);
            tmp14 = NofibPrelude.nofibStringToList("\n");
            tmp15 = n + 1;
            tmp16 = printBoard_inst_18_tsni(s1, tmp15, xs8);
            tmp17 = NofibPrelude.append(tmp14, tmp16);
            return NofibPrelude.append(tmp13, tmp17)
          } else {
            scrut2 = i === n;
            if (scrut2 === true) {
              tmp18 = NofibPrelude.intMod(n, s1);
              scrut3 = tmp18 != 0;
              if (scrut3 === true) {
                tmp19 = NofibPrelude.stringOfInt(j);
                tmp20 = NofibPrelude.nofibStringToList(tmp19);
                tmp21 = s1 * s1;
                tmp22 = spaces_inst_3_tsni(tmp21, j);
                tmp23 = n + 1;
                tmp24 = printBoard_inst_17_tsni(s1, tmp23, xs8);
                tmp25 = append_inst_33_tsni(tmp22, tmp24);
                return NofibPrelude.append(tmp20, tmp25)
              } else {
                tmp26 = NofibPrelude.intMod(n, s1);
                scrut1 = tmp26 != 0;
                if (scrut1 === true) {
                  tmp27 = s1 * s1;
                  tmp28 = spaces_inst_4_tsni(tmp27, 1);
                  tmp29 = n + 1;
                  arr = [
                    i,
                    j
                  ];
                  tmp30 = NofibPrelude.Cons(arr, xs8);
                  tmp31 = printBoard_inst_16_tsni(s1, tmp29, tmp30);
                  tmp32 = append_inst_36_tsni(tmp28, tmp31);
                  return NofibPrelude.Cons("*", tmp32)
                } else {
                  tmp33 = NofibPrelude.intMod(n, s1);
                  scrut = tmp33 === 0;
                  if (scrut === true) {
                    tmp34 = NofibPrelude.nofibStringToList("*\n");
                    tmp35 = n + 1;
                    arr1 = [
                      i,
                      j
                    ];
                    tmp36 = NofibPrelude.Cons(arr1, xs8);
                    tmp37 = printBoard_inst_15_tsni(s1, tmp35, tmp36);
                    return NofibPrelude.append(tmp34, tmp37)
                  } else {
                    throw globalThis.Error("printBoard non-empty list error");
                  }
                }
              }
            } else {
              tmp38 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp38 != 0;
              if (scrut1 === true) {
                tmp39 = s1 * s1;
                tmp40 = spaces_inst_5_tsni(tmp39, 1);
                tmp41 = n + 1;
                arr2 = [
                  i,
                  j
                ];
                tmp42 = NofibPrelude.Cons(arr2, xs8);
                tmp43 = printBoard_inst_14_tsni(s1, tmp41, tmp42);
                tmp44 = append_inst_37_tsni(tmp40, tmp43);
                return NofibPrelude.Cons("*", tmp44)
              } else {
                tmp45 = NofibPrelude.intMod(n, s1);
                scrut = tmp45 === 0;
                if (scrut === true) {
                  tmp46 = NofibPrelude.nofibStringToList("*\n");
                  tmp47 = n + 1;
                  arr3 = [
                    i,
                    j
                  ];
                  tmp48 = NofibPrelude.Cons(arr3, xs8);
                  tmp49 = printBoard_inst_13_tsni(s1, tmp47, tmp48);
                  return NofibPrelude.append(tmp46, tmp49)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          }
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp50 = NofibPrelude.intMod(n, s1);
            scrut3 = tmp50 != 0;
            if (scrut3 === true) {
              tmp51 = NofibPrelude.stringOfInt(j);
              tmp52 = NofibPrelude.nofibStringToList(tmp51);
              tmp53 = s1 * s1;
              tmp54 = spaces_inst_6_tsni(tmp53, j);
              tmp55 = n + 1;
              tmp56 = printBoard_inst_12_tsni(s1, tmp55, xs8);
              tmp57 = append_inst_25_tsni(tmp54, tmp56);
              return NofibPrelude.append(tmp52, tmp57)
            } else {
              tmp58 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp58 != 0;
              if (scrut1 === true) {
                tmp59 = s1 * s1;
                tmp60 = spaces_inst_7_tsni(tmp59, 1);
                tmp61 = n + 1;
                arr4 = [
                  i,
                  j
                ];
                tmp62 = NofibPrelude.Cons(arr4, xs8);
                tmp63 = printBoard_inst_11_tsni(s1, tmp61, tmp62);
                tmp64 = append_inst_39_tsni(tmp60, tmp63);
                return NofibPrelude.Cons("*", tmp64)
              } else {
                tmp65 = NofibPrelude.intMod(n, s1);
                scrut = tmp65 === 0;
                if (scrut === true) {
                  tmp66 = NofibPrelude.nofibStringToList("*\n");
                  tmp67 = n + 1;
                  arr5 = [
                    i,
                    j
                  ];
                  tmp68 = NofibPrelude.Cons(arr5, xs8);
                  tmp69 = printBoard_inst_10_tsni(s1, tmp67, tmp68);
                  return NofibPrelude.append(tmp66, tmp69)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp70 = NofibPrelude.intMod(n, s1);
            scrut1 = tmp70 != 0;
            if (scrut1 === true) {
              tmp71 = s1 * s1;
              tmp72 = spaces_inst_8_tsni(tmp71, 1);
              tmp73 = n + 1;
              arr6 = [
                i,
                j
              ];
              tmp74 = NofibPrelude.Cons(arr6, xs8);
              tmp75 = printBoard_inst_9_tsni(s1, tmp73, tmp74);
              tmp76 = append_inst_38_tsni(tmp72, tmp75);
              return NofibPrelude.Cons("*", tmp76)
            } else {
              tmp77 = NofibPrelude.intMod(n, s1);
              scrut = tmp77 === 0;
              if (scrut === true) {
                tmp78 = NofibPrelude.nofibStringToList("*\n");
                tmp79 = n + 1;
                arr7 = [
                  i,
                  j
                ];
                tmp80 = NofibPrelude.Cons(arr7, xs8);
                tmp81 = printBoard_inst_0_tsni(s1, tmp79, tmp80);
                return NofibPrelude.append(tmp78, tmp81)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static move(d, x_y) {
    let first1, first0, x7, y2, tmp, tmp1, arr, tmp2, tmp3, arr1, tmp4, tmp5, arr2, tmp6, tmp7, arr3, tmp8, tmp9, arr4, tmp10, tmp11, arr5, tmp12, tmp13, arr6, tmp14, tmp15, arr7;
    if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
      first0 = x_y[0];
      first1 = x_y[1];
      x7 = first0;
      y2 = first1;
      if (d instanceof knights.UL.class) {
        tmp = x7 - 1;
        tmp1 = y2 - 2;
        arr = [
          tmp,
          tmp1
        ];
        return arr
      } else if (d instanceof knights.UR.class) {
        tmp2 = x7 + 1;
        tmp3 = y2 - 2;
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else if (d instanceof knights.DL.class) {
        tmp4 = x7 - 1;
        tmp5 = y2 + 2;
        arr2 = [
          tmp4,
          tmp5
        ];
        return arr2
      } else if (d instanceof knights.DR.class) {
        tmp6 = x7 + 1;
        tmp7 = y2 + 2;
        arr3 = [
          tmp6,
          tmp7
        ];
        return arr3
      } else if (d instanceof knights.LU.class) {
        tmp8 = x7 - 2;
        tmp9 = y2 - 1;
        arr4 = [
          tmp8,
          tmp9
        ];
        return arr4
      } else if (d instanceof knights.LD.class) {
        tmp10 = x7 - 2;
        tmp11 = y2 + 1;
        arr5 = [
          tmp10,
          tmp11
        ];
        return arr5
      } else if (d instanceof knights.RU.class) {
        tmp12 = x7 + 2;
        tmp13 = y2 - 1;
        arr6 = [
          tmp12,
          tmp13
        ];
        return arr6
      } else if (d instanceof knights.RD.class) {
        tmp14 = x7 + 2;
        tmp15 = y2 + 1;
        arr7 = [
          tmp14,
          tmp15
        ];
        return arr7
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static startTour(st, size1) {
    let scrut, tmp;
    tmp = NofibPrelude.intMod(size1, 2);
    scrut = tmp === 0;
    if (scrut === true) {
      return knights.createBoard(size1, st)
    } else {
      throw globalThis.Error("Tour doesnt exist for odd size board");
    }
  } 
  static moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.addPiece(tmp1, board)
  } 
  static canMoveTo(x_y1, board1) {
    let first1, first0, x7, y2, sze, res, scrut, scrut1, scrut2, scrut3, scrut4, tmp, tmp1;
    if (globalThis.Array.isArray(x_y1) && x_y1.length === 2) {
      first0 = x_y1[0];
      first1 = x_y1[1];
      x7 = first0;
      y2 = first1;
      tmp = knights.sizeBoard(board1);
      sze = tmp;
      scrut = x7 >= 1;
      if (scrut === true) {
        scrut1 = x7 <= sze;
        if (scrut1 === true) {
          scrut2 = y2 >= 1;
          if (scrut2 === true) {
            scrut3 = y2 <= sze;
            if (scrut3 === true) {
              scrut4 = knights.isSquareFree(x_y1, board1);
              if (scrut4 === true) {
                tmp1 = true;
              } else {
                tmp1 = false;
              }
            } else {
              tmp1 = false;
            }
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
      } else {
        tmp1 = false;
      }
      res = tmp1;
      return res
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static canMove(board2, dir1) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board2);
    tmp1 = knights.move(dir1, tmp);
    return knights.canMoveTo(tmp1, board2)
  } 
  static canJumpFirst(board3) {
    let tmp, tmp1;
    tmp = knights.firstPiece(board3);
    tmp1 = knights.deleteFirst(board3);
    return knights.canMoveTo(tmp, tmp1)
  } 
  static tourFinished(board4) {
    let sze, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = knights.sizeBoard(board4);
    sze = tmp;
    tmp1 = knights.noPieces(board4);
    tmp2 = sze * sze;
    tmp3 = tmp1 === tmp2;
    tmp4 = knights.canJumpFirst(board4);
    return tmp3 && tmp4
  } 
  static possibleMoves(board5) {
    let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    lscomp = function lscomp(ls) {
      let param0, param1, x7, t3, scrut, tmp9;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        x7 = param0;
        t3 = param1;
        scrut = knights.canMove(board5, x7);
        if (scrut === true) {
          tmp9 = lscomp(t3);
          return NofibPrelude.Cons(x7, tmp9)
        } else {
          return lscomp(t3)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = NofibPrelude.Cons(knights.RD, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(knights.RU, tmp);
    tmp2 = NofibPrelude.Cons(knights.LD, tmp1);
    tmp3 = NofibPrelude.Cons(knights.LU, tmp2);
    tmp4 = NofibPrelude.Cons(knights.DR, tmp3);
    tmp5 = NofibPrelude.Cons(knights.DL, tmp4);
    tmp6 = NofibPrelude.Cons(knights.UR, tmp5);
    tmp7 = NofibPrelude.Cons(knights.UL, tmp6);
    tmp8 = lscomp(tmp7);
    res = tmp8;
    return res
  } 
  static deadEnd(board6) {
    let tmp, tmp1;
    tmp = knights.possibleMoves(board6);
    tmp1 = NofibPrelude.listLen(tmp);
    return tmp1 === 0
  } 
  static allDescend(board7) {
    let tmp, lambda;
    tmp = knights.possibleMoves(board7);
    lambda = (undefined, function (b9) {
      return knights.moveKnight(board7, b9)
    });
    return NofibPrelude.map(lambda, tmp)
  } 
  static descAndNo(board8) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let param0, param1, x7, t3, tmp1, lambda, lambda1;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        x7 = param0;
        t3 = param1;
        lambda1 = (undefined, function () {
          let tmp2, tmp3, tmp4, arr, tmp5;
          tmp2 = knights.deleteFirst(x7);
          tmp3 = knights.possibleMoves(tmp2);
          tmp4 = NofibPrelude.listLen(tmp3);
          arr = [
            tmp4,
            x7
          ];
          tmp5 = lscomp(t3);
          return NofibPrelude.LzCons(arr, tmp5)
        });
        tmp1 = lambda1;
        return NofibPrelude.lazy(tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = knights.allDescend(board8);
    return lscomp(tmp)
  } 
  static singleDescend(board9) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let scrut, param0, param1, first1, first0, y2, x7, t3, scrut1, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        if (globalThis.Array.isArray(param0) && param0.length === 2) {
          first0 = param0[0];
          first1 = param0[1];
          y2 = first0;
          x7 = first1;
          t3 = param1;
          scrut1 = y2 === 1;
          if (scrut1 === true) {
            tmp1 = lscomp(t3);
            return NofibPrelude.Cons(x7, tmp1)
          } else {
            return lscomp(t3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = knights.descAndNo(board9);
    return lscomp(tmp)
  } 
  static descendents(board10) {
    let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1, lambda2;
    tmp = knights.canJumpFirst(board10);
    tmp1 = knights.firstPiece(board10);
    tmp2 = knights.addPiece(tmp1, board10);
    tmp3 = knights.deadEnd(tmp2);
    scrut3 = tmp && tmp3;
    if (scrut3 === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else {
      tmp4 = knights.singleDescend(board10);
      singles = tmp4;
      tmp5 = NofibPrelude.listLen(singles);
      scrut = tmp5;
      scrut2 = scrut === 0;
      if (scrut2 === true) {
        tmp6 = knights.descAndNo(board10);
        tmp7 = knights.quickSortIntChessSet(tmp6);
        tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
      } else {
        scrut1 = scrut === 1;
        if (scrut1 === true) {
          if (singles instanceof NofibPrelude.Cons.class) {
            param0 = singles.head;
            param1 = singles.tail;
            h = param0;
            if (param1 instanceof NofibPrelude.Nil.class) {
              lambda1 = (undefined, function () {
                let tmp10, lambda3;
                lambda3 = (undefined, function () {
                  return NofibPrelude.LzNil
                });
                tmp10 = NofibPrelude.lazy(lambda3);
                return NofibPrelude.LzCons(h, tmp10)
              });
              tmp9 = NofibPrelude.lazy(lambda1);
            } else {
              throw globalThis.Error("unreachable");
            }
          } else {
            throw globalThis.Error("unreachable");
          }
          tmp8 = tmp9;
        } else {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          tmp8 = NofibPrelude.lazy(lambda2);
        }
      }
      res = tmp8;
      return res
    }
  } 
  static showChessSet(b9) {
    let param0, param1, param2, param3, sze, n1, f, ts, sortedTrail, tmp, tmp1;
    if (b9 instanceof knights.Board.class) {
      param0 = b9.a;
      param1 = b9.b;
      param2 = b9.c;
      param3 = b9.d;
      sze = param0;
      n1 = param1;
      f = param2;
      ts = param3;
      tmp = knights.assignMoveNo(ts, sze, n1);
      tmp1 = knights.quickSortIntInt(tmp);
      sortedTrail = tmp1;
      return printBoard_inst_21_tsni(sze, 1, sortedTrail)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static root(sze) {
    let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, param0, param1, h1, t11, tmp10, lambda1;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda1 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda1)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        h1 = param0;
        t11 = param1;
        lscomp2 = function lscomp2(ls1) {
          let param01, param11, h2, t21, tmp11, lambda2;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t11)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            param01 = ls1.head;
            param11 = ls1.tail;
            h2 = param01;
            t21 = param11;
            lambda2 = (undefined, function () {
              let arr, tmp12;
              arr = [
                h1,
                h2
              ];
              tmp12 = lscomp2(t21);
              return NofibPrelude.LzCons(arr, tmp12)
            });
            tmp11 = lambda2;
            return NofibPrelude.lazy(tmp11)
          } else {
            throw new globalThis.Error("match error");
          }
        };
        tmp10 = NofibPrelude.enumFromTo(1, sze);
        return lscomp2(tmp10)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = NofibPrelude.enumFromTo(1, sze);
    tmp4 = lscomp1(tmp3);
    tmp5 = sze * sze;
    tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
    tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
    tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda);
    return NofibPrelude.append_lz_lz(tmp8, tmp9)
  } 
  static grow(x_y2) {
    let first1, first0, x7, y2, tmp, tmp1, tmp2;
    if (globalThis.Array.isArray(x_y2) && x_y2.length === 2) {
      first0 = x_y2[0];
      first1 = x_y2[1];
      x7 = first0;
      y2 = first1;
      tmp = x7 + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = knights.descendents(y2);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isFinished(x_y3) {
    let first1, first0, x7, y2;
    if (globalThis.Array.isArray(x_y3) && x_y3.length === 2) {
      first0 = x_y3[0];
      first1 = x_y3[1];
      x7 = first0;
      y2 = first1;
      return knights.tourFinished(y2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static emptyQueue_lz(x7) {
    let scrut;
    scrut = NofibPrelude.force(x7);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else {
      return false
    }
  } 
  static removeFront_lz(xs8) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(xs8);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return t3
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront_lz(h_t1) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(h_t1);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return h
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addAllFront_lz(list2, q4) {
    return NofibPrelude.append_lz_lz(list2, q4)
  } 
  static depthSearch(q5, growFn, finFn) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, lambda1;
    scrut1 = knights.emptyQueue_lz(q5);
    if (scrut1 === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else {
      tmp = knights.inquireFront_lz(q5);
      scrut = runtime.safeCall(finFn(tmp));
      if (scrut === true) {
        lambda1 = (undefined, function () {
          let tmp6, tmp7, tmp8;
          tmp6 = knights.inquireFront_lz(q5);
          tmp7 = knights.removeFront_lz(q5);
          tmp8 = knights.depthSearch(tmp7, growFn, finFn);
          return NofibPrelude.LzCons(tmp6, tmp8)
        });
        tmp1 = lambda1;
        return NofibPrelude.lazy(tmp1)
      } else {
        tmp2 = knights.inquireFront_lz(q5);
        tmp3 = runtime.safeCall(growFn(tmp2));
        tmp4 = knights.removeFront_lz(q5);
        tmp5 = knights.addAllFront_lz(tmp3, tmp4);
        return knights.depthSearch(tmp5, growFn, finFn)
      }
    }
  } 
  static printTour(ss) {
    let pp, strToInt, scrut, param0, param1, size2, param01, param11, number, tmp, tmp1, tmp2, lambda;
    strToInt = function strToInt(y2, xs9) {
      let param02, param12, x8, xs10, tmp3, tmp4, tmp5, tmp6;
      if (xs9 instanceof NofibPrelude.Nil.class) {
        return y2
      } else if (xs9 instanceof NofibPrelude.Cons.class) {
        param02 = xs9.head;
        param12 = xs9.tail;
        x8 = param02;
        xs10 = param12;
        tmp3 = 10 * y2;
        tmp4 = runtime.safeCall(x8.codePointAt(0));
        tmp5 = tmp4 - 48;
        tmp6 = tmp3 + tmp5;
        return strToInt(tmp6, xs10)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    pp = function pp(xs9) {
      let param02, param12, first1, first0, x8, y2, xs10, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs9 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs9 instanceof NofibPrelude.Cons.class) {
        param02 = xs9.head;
        param12 = xs9.tail;
        if (globalThis.Array.isArray(param02) && param02.length === 2) {
          first0 = param02[0];
          first1 = param02[1];
          x8 = first0;
          y2 = first1;
          xs10 = param12;
          tmp3 = NofibPrelude.nofibStringToList("\nKnights tour with ");
          tmp4 = NofibPrelude.stringOfInt(x8);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = NofibPrelude.nofibStringToList(" backtracking moves\n");
          tmp7 = knights.showChessSet(y2);
          tmp8 = pp(xs10);
          tmp9 = NofibPrelude.append(tmp7, tmp8);
          tmp10 = NofibPrelude.append(tmp6, tmp9);
          tmp11 = NofibPrelude.append(tmp5, tmp10);
          return NofibPrelude.append(tmp3, tmp11)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x8) {
      return strToInt(0, x8)
    });
    scrut = NofibPrelude.map(lambda, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      size2 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        number = param01;
        if (param11 instanceof NofibPrelude.Nil.class) {
          tmp = knights.root(size2);
          tmp1 = knights.depthSearch(tmp, knights.grow, knights.isFinished);
          tmp2 = NofibPrelude.take_lz(number, tmp1);
          return pp(tmp2)
        } else {
          throw globalThis.Error("printTour error");
        }
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } 
  static testKnights_nofib(ss1) {
    let argsOk, all_digits, usageString, scrut;
    all_digits = function all_digits(s2) {
      let lambda;
      lambda = (undefined, function (a, b10) {
        let tmp;
        tmp = knights.myIsDigit(a);
        return tmp && b10
      });
      return NofibPrelude.foldr(lambda, true, s2)
    };
    argsOk = function argsOk(ss2) {
      let tmp, tmp1, tmp2, lambda;
      tmp = NofibPrelude.listLen(ss2);
      tmp1 = tmp === 2;
      lambda = (undefined, function (a, b10) {
        let tmp3;
        tmp3 = all_digits(a);
        return tmp3 && b10
      });
      tmp2 = NofibPrelude.foldr(lambda, true, ss2);
      return tmp1 && tmp2
    };
    usageString = "\nUsage: knights <board size> <no solutions> \n";
    scrut = argsOk(ss1);
    if (scrut === true) {
      return printTour_inst_22_tsni(ss1)
    } else {
      throw globalThis.Error(usageString);
    }
  } 
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.nofibStringToList("8");
    tmp1 = NofibPrelude.nofibStringToList("1");
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    tmp4 = testKnights_nofib_inst_40_tsni(tmp3);
    return NofibPrelude.nofibListToString(tmp4)
  }
  static toString() { return "knights"; }
});
let knights = knights1; export default knights;
