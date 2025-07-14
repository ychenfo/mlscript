import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let power1, integral_inst_0_tsni, integralLz_inst_1_tsni, cosx_inst_2_tsni, integralLz_inst_2_1_tsni, integral_inst_2_0_tsni, integralLz_inst_3_tsni, sinx_inst_4_tsni, integralLz_inst_4_3_tsni, revert_inst_5_tsni, divPs_inst_5_6_tsni, dotMult_inst_5_6_7_tsni, dotMult_inst_5_6_8_tsni, dotMult_inst_5_6_9_tsni, integral_inst_10_tsni, divPs_inst_11_tsni, dotMult_inst_11_9_tsni, dotMult_inst_11_8_tsni, dotMult_inst_11_7_tsni, divPs_inst_12_tsni, dotMult_inst_12_9_tsni, dotMult_inst_12_8_tsni, dotMult_inst_12_7_tsni, cosx_inst_13_tsni, integralLz_inst_13_1_tsni, integral_inst_13_0_tsni, sinx_inst_14_tsni, integralLz_inst_14_3_tsni, sqrtPs_inst_15_tsni, divPs_inst_15_16_tsni, dotMult_inst_15_16_7_tsni, dotMult_inst_15_16_8_tsni, dotMult_inst_15_16_9_tsni, cosx_inst_17_tsni, integralLz_inst_17_1_tsni, integral_inst_17_0_tsni, sinx_inst_18_tsni, integralLz_inst_18_3_tsni, testPower_nofib_inst_19_tsni, sinx_inst_19_18_tsni, integralLz_inst_19_18_3_tsni, cosx_inst_19_17_tsni, integral_inst_19_17_0_tsni, integralLz_inst_19_17_1_tsni, sqrtPs_inst_19_15_tsni, divPs_inst_19_15_16_tsni, dotMult_inst_19_15_16_9_tsni, dotMult_inst_19_15_16_8_tsni, dotMult_inst_19_15_16_7_tsni, sinx_inst_19_14_tsni, integralLz_inst_19_14_3_tsni, cosx_inst_19_13_tsni, integral_inst_19_13_0_tsni, integralLz_inst_19_13_1_tsni, divPs_inst_19_12_tsni, dotMult_inst_19_12_7_tsni, dotMult_inst_19_12_8_tsni, dotMult_inst_19_12_9_tsni, divPs_inst_19_11_tsni, dotMult_inst_19_11_7_tsni, dotMult_inst_19_11_8_tsni, dotMult_inst_19_11_9_tsni, revert_inst_19_5_tsni, divPs_inst_19_5_6_tsni, dotMult_inst_19_5_6_9_tsni, dotMult_inst_19_5_6_8_tsni, dotMult_inst_19_5_6_7_tsni, integral_inst_19_10_tsni, minusPs_inst_20_tsni, negatePs_inst_20_21_tsni, minusPs_inst_2_20_tsni, negatePs_inst_2_20_21_tsni, minusPs_inst_22_tsni, negatePs_inst_22_21_tsni, minusPs_inst_4_22_tsni, negatePs_inst_4_22_21_tsni, negatePs_inst_5_6_23_tsni, negatePs_inst_5_6_24_tsni, negatePs_inst_5_6_25_tsni, negatePs_inst_11_25_tsni, negatePs_inst_11_24_tsni, negatePs_inst_11_23_tsni, negatePs_inst_12_25_tsni, negatePs_inst_12_24_tsni, negatePs_inst_12_23_tsni, minusPs_inst_13_20_tsni, negatePs_inst_13_20_21_tsni, minusPs_inst_14_22_tsni, negatePs_inst_14_22_21_tsni, deriv_inst_15_26_tsni, negatePs_inst_15_16_23_tsni, negatePs_inst_15_16_24_tsni, negatePs_inst_15_16_25_tsni, integral_inst_15_27_tsni, minusPs_inst_17_20_tsni, negatePs_inst_17_20_21_tsni, minusPs_inst_18_22_tsni, negatePs_inst_18_22_21_tsni, minusPs_inst_19_18_22_tsni, negatePs_inst_19_18_22_21_tsni, minusPs_inst_19_17_20_tsni, negatePs_inst_19_17_20_21_tsni, negatePs_inst_19_15_16_25_tsni, negatePs_inst_19_15_16_24_tsni, negatePs_inst_19_15_16_23_tsni, integral_inst_19_15_27_tsni, deriv_inst_19_15_26_tsni, minusPs_inst_19_14_22_tsni, negatePs_inst_19_14_22_21_tsni, minusPs_inst_19_13_20_tsni, negatePs_inst_19_13_20_21_tsni, negatePs_inst_19_12_23_tsni, negatePs_inst_19_12_24_tsni, negatePs_inst_19_12_25_tsni, negatePs_inst_19_11_23_tsni, negatePs_inst_19_11_24_tsni, negatePs_inst_19_11_25_tsni, negatePs_inst_19_5_6_25_tsni, negatePs_inst_19_5_6_24_tsni, negatePs_inst_19_5_6_23_tsni, match_scrut_arm_Pc_inst_20_21_tsni, match_scrut_arm_Pc_inst_0_tsni, match_scrut_arm_Pc_inst_2_0_tsni, match_scrut_arm_Pc_inst_2_20_21_tsni, match_scrut_arm_Pc_inst_22_21_tsni, match_scrut_arm_Pc_inst_4_22_21_tsni, match_scrut_arm_Pz_inst_10_tsni, match_scrut_arm_Pc_inst_10_tsni, match_scrut_arm_Pc_inst_13_0_tsni, match_scrut_arm_Pc_inst_13_20_21_tsni, match_scrut_arm_Pc_inst_14_22_21_tsni, match_scrut_arm_Pz_inst_15_27_tsni, match_scrut_arm_Pc_inst_15_27_tsni, match_scrut_arm_Pc_inst_17_0_tsni, match_scrut_arm_Pc_inst_17_20_21_tsni, match_scrut_arm_Pc_inst_18_22_21_tsni, match_scrut_arm_Pc_inst_19_18_22_21_tsni, match_scrut_arm_Pc_inst_19_17_20_21_tsni, match_scrut_arm_Pc_inst_19_17_0_tsni, match_scrut_arm_Pz_inst_19_15_27_tsni, match_scrut_arm_Pc_inst_19_15_27_tsni, match_scrut_arm_Pc_inst_19_14_22_21_tsni, match_scrut_arm_Pc_inst_19_13_20_21_tsni, match_scrut_arm_Pc_inst_19_13_0_tsni, match_scrut_arm_Pz_inst_19_10_tsni, match_scrut_arm_Pc_inst_19_10_tsni;
match_scrut_arm_Pc_inst_20_21_tsni = function match_scrut_arm_Pc_inst_20_21_tsni(_deforest_Pc_f_inst_20_21_tsni, _deforest_Pc_s_inst_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_20_21_tsni;
  param1 = _deforest_Pc_s_inst_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_0_tsni = function match_scrut_arm_Pc_inst_0_tsni(int1, n, _deforest_Pc_f_inst_0_tsni, _deforest_Pc_s_inst_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_0_tsni;
  param1 = _deforest_Pc_s_inst_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pc_inst_2_0_tsni = function match_scrut_arm_Pc_inst_2_0_tsni(int1, n, _deforest_Pc_f_inst_2_0_tsni, _deforest_Pc_s_inst_2_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_2_0_tsni;
  param1 = _deforest_Pc_s_inst_2_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_2_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pc_inst_2_20_21_tsni = function match_scrut_arm_Pc_inst_2_20_21_tsni(_deforest_Pc_f_inst_2_20_21_tsni, _deforest_Pc_s_inst_2_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_2_20_21_tsni;
  param1 = _deforest_Pc_s_inst_2_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_2_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_22_21_tsni = function match_scrut_arm_Pc_inst_22_21_tsni(_deforest_Pc_f_inst_22_21_tsni, _deforest_Pc_s_inst_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_22_21_tsni;
  param1 = _deforest_Pc_s_inst_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_4_22_21_tsni = function match_scrut_arm_Pc_inst_4_22_21_tsni(_deforest_Pc_f_inst_4_22_21_tsni, _deforest_Pc_s_inst_4_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_4_22_21_tsni;
  param1 = _deforest_Pc_s_inst_4_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_4_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pz_inst_10_tsni = function match_scrut_arm_Pz_inst_10_tsni(int1, n) {
  return power.Pz
};
match_scrut_arm_Pc_inst_10_tsni = function match_scrut_arm_Pc_inst_10_tsni(int1, n, _deforest_Pc_f_inst_10_tsni, _deforest_Pc_s_inst_10_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_10_tsni;
  param1 = _deforest_Pc_s_inst_10_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  return power.Pc(tmp, tmp2)
};
match_scrut_arm_Pc_inst_13_0_tsni = function match_scrut_arm_Pc_inst_13_0_tsni(int1, n, _deforest_Pc_f_inst_13_0_tsni, _deforest_Pc_s_inst_13_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_13_0_tsni;
  param1 = _deforest_Pc_s_inst_13_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_13_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pc_inst_13_20_21_tsni = function match_scrut_arm_Pc_inst_13_20_21_tsni(_deforest_Pc_f_inst_13_20_21_tsni, _deforest_Pc_s_inst_13_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_13_20_21_tsni;
  param1 = _deforest_Pc_s_inst_13_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_13_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_14_22_21_tsni = function match_scrut_arm_Pc_inst_14_22_21_tsni(_deforest_Pc_f_inst_14_22_21_tsni, _deforest_Pc_s_inst_14_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_14_22_21_tsni;
  param1 = _deforest_Pc_s_inst_14_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_14_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pz_inst_15_27_tsni = function match_scrut_arm_Pz_inst_15_27_tsni(int1, n) {
  return power.Pz
};
match_scrut_arm_Pc_inst_15_27_tsni = function match_scrut_arm_Pc_inst_15_27_tsni(int1, n, _deforest_Pc_f_inst_15_27_tsni, _deforest_Pc_s_inst_15_27_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_15_27_tsni;
  param1 = _deforest_Pc_s_inst_15_27_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  return power.Pc(tmp, tmp2)
};
match_scrut_arm_Pc_inst_17_0_tsni = function match_scrut_arm_Pc_inst_17_0_tsni(int1, n, _deforest_Pc_f_inst_17_0_tsni, _deforest_Pc_s_inst_17_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_17_0_tsni;
  param1 = _deforest_Pc_s_inst_17_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_17_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pc_inst_17_20_21_tsni = function match_scrut_arm_Pc_inst_17_20_21_tsni(_deforest_Pc_f_inst_17_20_21_tsni, _deforest_Pc_s_inst_17_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_17_20_21_tsni;
  param1 = _deforest_Pc_s_inst_17_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_17_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_18_22_21_tsni = function match_scrut_arm_Pc_inst_18_22_21_tsni(_deforest_Pc_f_inst_18_22_21_tsni, _deforest_Pc_s_inst_18_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_18_22_21_tsni;
  param1 = _deforest_Pc_s_inst_18_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_18_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_19_18_22_21_tsni = function match_scrut_arm_Pc_inst_19_18_22_21_tsni(_deforest_Pc_f_inst_19_18_22_21_tsni, _deforest_Pc_s_inst_19_18_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_19_18_22_21_tsni;
  param1 = _deforest_Pc_s_inst_19_18_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_19_18_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_19_17_20_21_tsni = function match_scrut_arm_Pc_inst_19_17_20_21_tsni(_deforest_Pc_f_inst_19_17_20_21_tsni, _deforest_Pc_s_inst_19_17_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_19_17_20_21_tsni;
  param1 = _deforest_Pc_s_inst_19_17_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_19_17_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_19_17_0_tsni = function match_scrut_arm_Pc_inst_19_17_0_tsni(int1, n, _deforest_Pc_f_inst_19_17_0_tsni, _deforest_Pc_s_inst_19_17_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_19_17_0_tsni;
  param1 = _deforest_Pc_s_inst_19_17_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_19_17_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pz_inst_19_15_27_tsni = function match_scrut_arm_Pz_inst_19_15_27_tsni(int1, n) {
  return power.Pz
};
match_scrut_arm_Pc_inst_19_15_27_tsni = function match_scrut_arm_Pc_inst_19_15_27_tsni(int1, n, _deforest_Pc_f_inst_19_15_27_tsni, _deforest_Pc_s_inst_19_15_27_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_19_15_27_tsni;
  param1 = _deforest_Pc_s_inst_19_15_27_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  return power.Pc(tmp, tmp2)
};
match_scrut_arm_Pc_inst_19_14_22_21_tsni = function match_scrut_arm_Pc_inst_19_14_22_21_tsni(_deforest_Pc_f_inst_19_14_22_21_tsni, _deforest_Pc_s_inst_19_14_22_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_19_14_22_21_tsni;
  param1 = _deforest_Pc_s_inst_19_14_22_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_19_14_22_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_19_13_20_21_tsni = function match_scrut_arm_Pc_inst_19_13_20_21_tsni(_deforest_Pc_f_inst_19_13_20_21_tsni, _deforest_Pc_s_inst_19_13_20_21_tsni) {
  let param0, param1, f, fs_, tmp, tmp1;
  param0 = _deforest_Pc_f_inst_19_13_20_21_tsni;
  param1 = _deforest_Pc_s_inst_19_13_20_21_tsni;
  f = param0;
  fs_ = param1;
  tmp = - f;
  tmp1 = negatePs_inst_19_13_20_21_tsni(fs_);
  return power.Pc(tmp, tmp1)
};
match_scrut_arm_Pc_inst_19_13_0_tsni = function match_scrut_arm_Pc_inst_19_13_0_tsni(int1, n, _deforest_Pc_f_inst_19_13_0_tsni, _deforest_Pc_s_inst_19_13_0_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
  param0 = _deforest_Pc_f_inst_19_13_0_tsni;
  param1 = _deforest_Pc_s_inst_19_13_0_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  _deforest_Pc_f = tmp;
  _deforest_Pc_s = tmp2;
  return () => {
    return match_scrut_arm_Pc_inst_19_13_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
  }
};
match_scrut_arm_Pz_inst_19_10_tsni = function match_scrut_arm_Pz_inst_19_10_tsni(int1, n) {
  return power.Pz
};
match_scrut_arm_Pc_inst_19_10_tsni = function match_scrut_arm_Pc_inst_19_10_tsni(int1, n, _deforest_Pc_f_inst_19_10_tsni, _deforest_Pc_s_inst_19_10_tsni) {
  let param0, param1, f, fs_, tmp, tmp1, tmp2;
  param0 = _deforest_Pc_f_inst_19_10_tsni;
  param1 = _deforest_Pc_s_inst_19_10_tsni;
  f = param0;
  fs_ = param1;
  tmp = f / n;
  tmp1 = n + 1;
  tmp2 = int1(fs_, tmp1);
  return power.Pc(tmp, tmp2)
};
integral_inst_0_tsni = function integral_inst_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
integralLz_inst_1_tsni = function integralLz_inst_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
cosx_inst_2_tsni = function cosx_inst_2_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_2_1_tsni(cosx_inst_2_tsni);
  tmp2 = integral_inst_2_0_tsni(tmp1);
  return minusPs_inst_2_20_tsni(tmp, tmp2)
};
integralLz_inst_2_1_tsni = function integralLz_inst_2_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_2_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_2_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_2_0_tsni = function integral_inst_2_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_2_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
integralLz_inst_3_tsni = function integralLz_inst_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
sinx_inst_4_tsni = function sinx_inst_4_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_4_3_tsni(sinx_inst_4_tsni);
  tmp2 = minusPs_inst_4_22_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_4_3_tsni = function integralLz_inst_4_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_4_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_4_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
revert_inst_5_tsni = function revert_inst_5_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(fss);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_5_6_tsni = function divPs_inst_5_6_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_5_6_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return power.Pz
        }
      } else {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_5_6_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_5_6_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_5_6_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_5_6_tsni(tmp6, tmp7);
            return power.Pc(q1, tmp8)
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_5_6_8_tsni(q, gs);
            tmp11 = negatePs_inst_5_6_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_5_6_tsni(tmp12, tmp13);
            return power.Pc(q, tmp14)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_5_6_7_tsni(q, gs);
          tmp17 = negatePs_inst_5_6_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_5_6_tsni(tmp18, tmp19);
          return power.Pc(q, tmp20)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_5_6_7_tsni = function dotMult_inst_5_6_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_5_6_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_5_6_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_5_6_8_tsni = function dotMult_inst_5_6_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_5_6_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_5_6_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_5_6_9_tsni = function dotMult_inst_5_6_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_5_6_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_5_6_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_10_tsni = function integral_inst_10_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      let rs, param0, param1, f0, kss, scrut, param01, param11, f1, gss, scrut1, fs_1, tmp1, tmp2, tmp3, tmp4, lambda1;
      param0 = _deforest_Pc_f;
      param1 = _deforest_Pc_s;
      if (param0 === 0) {
        fs_1 = param1;
        rs = function rs() {
          let tmp5, lambda2;
          lambda2 = (undefined, function () {
            let tmp6, tmp7, tmp8, tmp9;
            tmp6 = power.fromIntegerPs(1);
            tmp7 = rs();
            tmp8 = power.compose_(fs_1, tmp7);
            tmp9 = divPs_inst_5_6_tsni(tmp6, tmp8);
            return power.Pc(0, tmp9)
          });
          tmp5 = lambda2;
          return NofibPrelude.lazy(tmp5)
        };
        tmp1 = rs();
        return NofibPrelude.force(tmp1)
      } else {
        f0 = param0;
        kss = param1;
        scrut = NofibPrelude.force(kss);
        if (scrut instanceof power.Pc.class) {
          param01 = scrut.f;
          param11 = scrut.s;
          f1 = param01;
          gss = param11;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pz.class) {
            tmp2 = - 1;
            tmp3 = tmp2 / f1;
            lambda1 = (undefined, function () {
              let tmp5, tmp6, lambda2;
              tmp5 = 1 / f1;
              lambda2 = (undefined, function () {
                return power.Pz
              });
              tmp6 = NofibPrelude.lazy(lambda2);
              return power.Pc(tmp5, tmp6)
            });
            tmp4 = NofibPrelude.lazy(lambda1);
            return power.Pc(tmp3, tmp4)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  });
  return NofibPrelude.lazy(lambda)
};
divPs_inst_11_tsni = function divPs_inst_11_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_11_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return (int1, n) => {
            return match_scrut_arm_Pz_inst_10_tsni(int1, n)
          }
        }
      } else {
        return (int1, n) => {
          return match_scrut_arm_Pz_inst_10_tsni(int1, n)
        }
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_11_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_11_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_11_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_11_tsni(tmp6, tmp7);
            _deforest_Pc_f2 = q1;
            _deforest_Pc_s2 = tmp8;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_10_tsni(int1, n, _deforest_Pc_f2, _deforest_Pc_s2)
            }
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_11_8_tsni(q, gs);
            tmp11 = negatePs_inst_11_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_11_tsni(tmp12, tmp13);
            _deforest_Pc_f1 = q;
            _deforest_Pc_s1 = tmp14;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_10_tsni(int1, n, _deforest_Pc_f1, _deforest_Pc_s1)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_11_7_tsni(q, gs);
          tmp17 = negatePs_inst_11_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_11_tsni(tmp18, tmp19);
          _deforest_Pc_f = q;
          _deforest_Pc_s = tmp20;
          return (int1, n) => {
            return match_scrut_arm_Pc_inst_10_tsni(int1, n, _deforest_Pc_f, _deforest_Pc_s)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_11_9_tsni = function dotMult_inst_11_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_11_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_11_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_11_8_tsni = function dotMult_inst_11_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_11_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_11_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_11_7_tsni = function dotMult_inst_11_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_11_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_11_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_12_tsni = function divPs_inst_12_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_12_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return power.Pz
        }
      } else {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_12_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_12_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_12_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_12_tsni(tmp6, tmp7);
            return power.Pc(q1, tmp8)
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_12_8_tsni(q, gs);
            tmp11 = negatePs_inst_12_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_12_tsni(tmp12, tmp13);
            return power.Pc(q, tmp14)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_12_7_tsni(q, gs);
          tmp17 = negatePs_inst_12_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_12_tsni(tmp18, tmp19);
          return power.Pc(q, tmp20)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_12_9_tsni = function dotMult_inst_12_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_12_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_12_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_12_8_tsni = function dotMult_inst_12_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_12_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_12_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_12_7_tsni = function dotMult_inst_12_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_12_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_12_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
cosx_inst_13_tsni = function cosx_inst_13_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_13_1_tsni(cosx_inst_13_tsni);
  tmp2 = integral_inst_13_0_tsni(tmp1);
  return minusPs_inst_13_20_tsni(tmp, tmp2)
};
integralLz_inst_13_1_tsni = function integralLz_inst_13_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_13_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_13_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_13_0_tsni = function integral_inst_13_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_13_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
sinx_inst_14_tsni = function sinx_inst_14_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_14_3_tsni(sinx_inst_14_tsni);
  tmp2 = minusPs_inst_14_22_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_14_3_tsni = function integralLz_inst_14_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_14_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_14_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
sqrtPs_inst_15_tsni = function sqrtPs_inst_15_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let qs, scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      return power.Pz
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gss = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          if (param01 === 0) {
            fs_1 = param11;
            tmp1 = sqrtPs_inst_15_tsni(fs_1);
            return power.Pc(0, tmp1)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else if (param0 === 1) {
        fs_ = param1;
        qs = function qs() {
          let tmp4, lambda1;
          lambda1 = (undefined, function () {
            let tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda2;
            tmp5 = power.fromIntegerPs(1);
            lambda2 = (undefined, function () {
              let _deforest_Pc_f, _deforest_Pc_s;
              _deforest_Pc_f = 1;
              _deforest_Pc_s = fs_;
              return () => {
                let deriv1, param02, param12, fs_2, tmp12;
                param02 = _deforest_Pc_f;
                param12 = _deforest_Pc_s;
                fs_2 = param12;
                deriv1 = function deriv1(gss1, n) {
                  let tmp13, lambda3;
                  lambda3 = (undefined, function () {
                    let scrut2, param03, param13, f, fs_3, tmp14, tmp15, tmp16;
                    scrut2 = NofibPrelude.force(gss1);
                    if (scrut2 instanceof power.Pz.class) {
                      return power.Pz
                    } else if (scrut2 instanceof power.Pc.class) {
                      param03 = scrut2.f;
                      param13 = scrut2.s;
                      f = param03;
                      fs_3 = param13;
                      tmp14 = n * f;
                      tmp15 = n + 1;
                      tmp16 = deriv1(fs_3, tmp15);
                      return power.Pc(tmp14, tmp16)
                    } else {
                      throw new globalThis.Error("match error");
                    }
                  });
                  tmp13 = lambda3;
                  return NofibPrelude.lazy(tmp13)
                };
                tmp12 = deriv1(fs_2, 1);
                return NofibPrelude.force(tmp12)
              }
            });
            tmp6 = NofibPrelude.lazy(lambda2);
            tmp7 = deriv_inst_15_26_tsni(tmp6);
            tmp8 = qs();
            tmp9 = power.dotMultSndLz(2, tmp8);
            tmp10 = divPs_inst_15_16_tsni(tmp7, tmp9);
            tmp11 = integral_inst_15_27_tsni(tmp10);
            return power.addPs(tmp5, tmp11)
          });
          tmp4 = lambda1;
          return NofibPrelude.lazy(tmp4)
        };
        tmp2 = qs();
        tmp3 = NofibPrelude.force(tmp2);
        return NofibPrelude.force(tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_15_16_tsni = function divPs_inst_15_16_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_15_16_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return (int1, n) => {
            return match_scrut_arm_Pz_inst_15_27_tsni(int1, n)
          }
        }
      } else {
        return (int1, n) => {
          return match_scrut_arm_Pz_inst_15_27_tsni(int1, n)
        }
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_15_16_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_15_16_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_15_16_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_15_16_tsni(tmp6, tmp7);
            _deforest_Pc_f = q1;
            _deforest_Pc_s = tmp8;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_15_27_tsni(int1, n, _deforest_Pc_f, _deforest_Pc_s)
            }
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_15_16_8_tsni(q, gs);
            tmp11 = negatePs_inst_15_16_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_15_16_tsni(tmp12, tmp13);
            _deforest_Pc_f2 = q;
            _deforest_Pc_s2 = tmp14;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_15_27_tsni(int1, n, _deforest_Pc_f2, _deforest_Pc_s2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_15_16_7_tsni(q, gs);
          tmp17 = negatePs_inst_15_16_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_15_16_tsni(tmp18, tmp19);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp20;
          return (int1, n) => {
            return match_scrut_arm_Pc_inst_15_27_tsni(int1, n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_15_16_7_tsni = function dotMult_inst_15_16_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_15_16_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_15_16_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_15_16_8_tsni = function dotMult_inst_15_16_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_15_16_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_15_16_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_15_16_9_tsni = function dotMult_inst_15_16_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_15_16_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_15_16_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
cosx_inst_17_tsni = function cosx_inst_17_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_17_1_tsni(cosx_inst_17_tsni);
  tmp2 = integral_inst_17_0_tsni(tmp1);
  return minusPs_inst_17_20_tsni(tmp, tmp2)
};
integralLz_inst_17_1_tsni = function integralLz_inst_17_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_17_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_17_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_17_0_tsni = function integral_inst_17_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_17_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
sinx_inst_18_tsni = function sinx_inst_18_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_18_3_tsni(sinx_inst_18_tsni);
  tmp2 = minusPs_inst_18_22_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_18_3_tsni = function integralLz_inst_18_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_18_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_18_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
testPower_nofib_inst_19_tsni = function testPower_nofib_inst_19_tsni(p) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
  tmp = sinx_inst_19_18_tsni();
  tmp1 = power.fromIntegerPs(1);
  tmp2 = cosx_inst_19_17_tsni();
  tmp3 = power.powerPs(tmp2, 2);
  tmp4 = power.minusPs(tmp1, tmp3);
  tmp5 = sqrtPs_inst_19_15_tsni(tmp4);
  tmp6 = power.minusPs(tmp, tmp5);
  tmp7 = power.extract(p, tmp6);
  tmp8 = sinx_inst_19_14_tsni();
  tmp9 = cosx_inst_19_13_tsni();
  tmp10 = divPs_inst_19_12_tsni(tmp8, tmp9);
  tmp11 = power.fromIntegerPs(1);
  tmp12 = power.fromIntegerPs(1);
  tmp13 = power.x_();
  tmp14 = power.powerPs(tmp13, 2);
  tmp15 = power.addPs(tmp12, tmp14);
  tmp16 = divPs_inst_19_11_tsni(tmp11, tmp15);
  tmp17 = integral_inst_19_10_tsni(tmp16);
  tmp18 = revert_inst_19_5_tsni(tmp17);
  tmp19 = power.minusPs(tmp10, tmp18);
  tmp20 = power.extract(p, tmp19);
  tmp21 = (tmp7 , tmp20);
  tmp22 = power.ts();
  tmp23 = power.extract(p, tmp22);
  tmp24 = (tmp21 , tmp23);
  tmp25 = power.tree();
  tmp26 = power.extract(p, tmp25);
  return (tmp24 , tmp26)
};
sinx_inst_19_18_tsni = function sinx_inst_19_18_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_19_18_3_tsni(sinx_inst_19_18_tsni);
  tmp2 = minusPs_inst_19_18_22_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_19_18_3_tsni = function integralLz_inst_19_18_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_19_18_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_19_18_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
cosx_inst_19_17_tsni = function cosx_inst_19_17_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_19_17_1_tsni(cosx_inst_19_17_tsni);
  tmp2 = integral_inst_19_17_0_tsni(tmp1);
  return minusPs_inst_19_17_20_tsni(tmp, tmp2)
};
integral_inst_19_17_0_tsni = function integral_inst_19_17_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_19_17_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
integralLz_inst_19_17_1_tsni = function integralLz_inst_19_17_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_19_17_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_19_17_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
sqrtPs_inst_19_15_tsni = function sqrtPs_inst_19_15_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let qs, scrut, param0, param1, fs_, gss, scrut1, param01, param11, fs_1, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      return power.Pz
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        gss = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          if (param01 === 0) {
            fs_1 = param11;
            tmp1 = sqrtPs_inst_19_15_tsni(fs_1);
            return power.Pc(0, tmp1)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else if (param0 === 1) {
        fs_ = param1;
        qs = function qs() {
          let tmp4, lambda1;
          lambda1 = (undefined, function () {
            let tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda2;
            tmp5 = power.fromIntegerPs(1);
            lambda2 = (undefined, function () {
              let _deforest_Pc_f, _deforest_Pc_s;
              _deforest_Pc_f = 1;
              _deforest_Pc_s = fs_;
              return () => {
                let deriv1, param02, param12, fs_2, tmp12;
                param02 = _deforest_Pc_f;
                param12 = _deforest_Pc_s;
                fs_2 = param12;
                deriv1 = function deriv1(gss1, n) {
                  let tmp13, lambda3;
                  lambda3 = (undefined, function () {
                    let scrut2, param03, param13, f, fs_3, tmp14, tmp15, tmp16;
                    scrut2 = NofibPrelude.force(gss1);
                    if (scrut2 instanceof power.Pz.class) {
                      return power.Pz
                    } else if (scrut2 instanceof power.Pc.class) {
                      param03 = scrut2.f;
                      param13 = scrut2.s;
                      f = param03;
                      fs_3 = param13;
                      tmp14 = n * f;
                      tmp15 = n + 1;
                      tmp16 = deriv1(fs_3, tmp15);
                      return power.Pc(tmp14, tmp16)
                    } else {
                      throw new globalThis.Error("match error");
                    }
                  });
                  tmp13 = lambda3;
                  return NofibPrelude.lazy(tmp13)
                };
                tmp12 = deriv1(fs_2, 1);
                return NofibPrelude.force(tmp12)
              }
            });
            tmp6 = NofibPrelude.lazy(lambda2);
            tmp7 = deriv_inst_19_15_26_tsni(tmp6);
            tmp8 = qs();
            tmp9 = power.dotMultSndLz(2, tmp8);
            tmp10 = divPs_inst_19_15_16_tsni(tmp7, tmp9);
            tmp11 = integral_inst_19_15_27_tsni(tmp10);
            return power.addPs(tmp5, tmp11)
          });
          tmp4 = lambda1;
          return NofibPrelude.lazy(tmp4)
        };
        tmp2 = qs();
        tmp3 = NofibPrelude.force(tmp2);
        return NofibPrelude.force(tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_19_15_16_tsni = function divPs_inst_19_15_16_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_19_15_16_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return (int1, n) => {
            return match_scrut_arm_Pz_inst_19_15_27_tsni(int1, n)
          }
        }
      } else {
        return (int1, n) => {
          return match_scrut_arm_Pz_inst_19_15_27_tsni(int1, n)
        }
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_19_15_16_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_19_15_16_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_19_15_16_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_19_15_16_tsni(tmp6, tmp7);
            _deforest_Pc_f2 = q1;
            _deforest_Pc_s2 = tmp8;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_19_15_27_tsni(int1, n, _deforest_Pc_f2, _deforest_Pc_s2)
            }
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_19_15_16_8_tsni(q, gs);
            tmp11 = negatePs_inst_19_15_16_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_19_15_16_tsni(tmp12, tmp13);
            _deforest_Pc_f1 = q;
            _deforest_Pc_s1 = tmp14;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_19_15_27_tsni(int1, n, _deforest_Pc_f1, _deforest_Pc_s1)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_19_15_16_7_tsni(q, gs);
          tmp17 = negatePs_inst_19_15_16_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_19_15_16_tsni(tmp18, tmp19);
          _deforest_Pc_f = q;
          _deforest_Pc_s = tmp20;
          return (int1, n) => {
            return match_scrut_arm_Pc_inst_19_15_27_tsni(int1, n, _deforest_Pc_f, _deforest_Pc_s)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_15_16_9_tsni = function dotMult_inst_19_15_16_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_15_16_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_15_16_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_15_16_8_tsni = function dotMult_inst_19_15_16_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_15_16_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_15_16_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_15_16_7_tsni = function dotMult_inst_19_15_16_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_15_16_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_15_16_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
sinx_inst_19_14_tsni = function sinx_inst_19_14_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_19_14_3_tsni(sinx_inst_19_14_tsni);
  tmp2 = minusPs_inst_19_14_22_tsni(tmp, tmp1);
  return power.integral(tmp2)
};
integralLz_inst_19_14_3_tsni = function integralLz_inst_19_14_3_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return () => {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return () => {
          return match_scrut_arm_Pc_inst_19_14_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return () => {
      return match_scrut_arm_Pc_inst_19_14_22_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
cosx_inst_19_13_tsni = function cosx_inst_19_13_tsni() {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function () {
    let tmp3, lambda1;
    lambda1 = (undefined, function () {
      return power.Pz
    });
    tmp3 = NofibPrelude.lazy(lambda1);
    return power.Pc(1, tmp3)
  });
  tmp = NofibPrelude.lazy(lambda);
  tmp1 = integralLz_inst_19_13_1_tsni(cosx_inst_19_13_tsni);
  tmp2 = integral_inst_19_13_0_tsni(tmp1);
  return minusPs_inst_19_13_20_tsni(tmp, tmp2)
};
integral_inst_19_13_0_tsni = function integral_inst_19_13_0_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      return match_scrut_arm_Pc_inst_19_13_20_21_tsni(_deforest_Pc_f, _deforest_Pc_s)
    }
  });
  return NofibPrelude.lazy(lambda)
};
integralLz_inst_19_13_1_tsni = function integralLz_inst_19_13_1_tsni(fs_) {
  let int1, tmp, lambda;
  int1 = function int1(fss, n) {
    let tmp1, lambda1;
    lambda1 = (undefined, function () {
      let scrut, param0, param1, f, fs_1, tmp2, tmp3, tmp4, _deforest_Pc_f, _deforest_Pc_s;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return (int11, n1) => {
          return () => {
            return power.Pz
          }
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_1 = param1;
        tmp2 = f / n;
        tmp3 = n + 1;
        tmp4 = int1(fs_1, tmp3);
        _deforest_Pc_f = tmp2;
        _deforest_Pc_s = tmp4;
        return (int11, n1) => {
          return match_scrut_arm_Pc_inst_19_13_0_tsni(int11, n1, _deforest_Pc_f, _deforest_Pc_s)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    return NofibPrelude.lazy(tmp1)
  };
  lambda = (undefined, function () {
    let tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    tmp1 = runtime.safeCall(fs_());
    tmp2 = int1(tmp1, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp2;
    return (int11, n) => {
      return match_scrut_arm_Pc_inst_19_13_0_tsni(int11, n, _deforest_Pc_f, _deforest_Pc_s)
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_19_12_tsni = function divPs_inst_19_12_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_19_12_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return power.Pz
        }
      } else {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_19_12_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_19_12_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_19_12_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_19_12_tsni(tmp6, tmp7);
            return power.Pc(q1, tmp8)
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_19_12_8_tsni(q, gs);
            tmp11 = negatePs_inst_19_12_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_19_12_tsni(tmp12, tmp13);
            return power.Pc(q, tmp14)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_19_12_7_tsni(q, gs);
          tmp17 = negatePs_inst_19_12_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_19_12_tsni(tmp18, tmp19);
          return power.Pc(q, tmp20)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_12_7_tsni = function dotMult_inst_19_12_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_12_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_12_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_12_8_tsni = function dotMult_inst_19_12_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_12_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_12_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_12_9_tsni = function dotMult_inst_19_12_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_12_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_12_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_19_11_tsni = function divPs_inst_19_11_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4, _deforest_Pc_f, _deforest_Pc_s, _deforest_Pc_f1, _deforest_Pc_s1, _deforest_Pc_f2, _deforest_Pc_s2;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_19_11_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return (int1, n) => {
            return match_scrut_arm_Pz_inst_19_10_tsni(int1, n)
          }
        }
      } else {
        return (int1, n) => {
          return match_scrut_arm_Pz_inst_19_10_tsni(int1, n)
        }
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_19_11_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_19_11_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_19_11_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_19_11_tsni(tmp6, tmp7);
            _deforest_Pc_f = q1;
            _deforest_Pc_s = tmp8;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_19_10_tsni(int1, n, _deforest_Pc_f, _deforest_Pc_s)
            }
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_19_11_8_tsni(q, gs);
            tmp11 = negatePs_inst_19_11_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_19_11_tsni(tmp12, tmp13);
            _deforest_Pc_f2 = q;
            _deforest_Pc_s2 = tmp14;
            return (int1, n) => {
              return match_scrut_arm_Pc_inst_19_10_tsni(int1, n, _deforest_Pc_f2, _deforest_Pc_s2)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_19_11_7_tsni(q, gs);
          tmp17 = negatePs_inst_19_11_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_19_11_tsni(tmp18, tmp19);
          _deforest_Pc_f1 = q;
          _deforest_Pc_s1 = tmp20;
          return (int1, n) => {
            return match_scrut_arm_Pc_inst_19_10_tsni(int1, n, _deforest_Pc_f1, _deforest_Pc_s1)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_11_7_tsni = function dotMult_inst_19_11_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_11_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_11_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_11_8_tsni = function dotMult_inst_19_11_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_11_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_11_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_11_9_tsni = function dotMult_inst_19_11_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_11_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_11_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
revert_inst_19_5_tsni = function revert_inst_19_5_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(fss);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
divPs_inst_19_5_6_tsni = function divPs_inst_19_5_6_tsni(fss, gss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs, q, fs_1, scrut2, param02, param12, g1, gs1, q1, gs2, scrut3, param03, param13, gs3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4;
    scrut = NofibPrelude.force(fss);
    if (scrut instanceof power.Pz.class) {
      scrut3 = NofibPrelude.force(gss);
      if (scrut3 instanceof power.Pz.class) {
        throw globalThis.Error("power series 0/0");
      } else if (scrut3 instanceof power.Pc.class) {
        param03 = scrut3.f;
        param13 = scrut3.s;
        if (param03 === 0) {
          gs3 = param13;
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          tmp2 = divPs_inst_19_5_6_tsni(tmp1, gs3);
          return NofibPrelude.force(tmp2)
        } else {
          return power.Pz
        }
      } else {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      if (param0 === 0) {
        fs_1 = param1;
        scrut2 = NofibPrelude.force(gss);
        if (scrut2 instanceof power.Pc.class) {
          param02 = scrut2.f;
          param12 = scrut2.s;
          if (param02 === 0) {
            gs2 = param12;
            tmp3 = divPs_inst_19_5_6_tsni(fs_1, gs2);
            return NofibPrelude.force(tmp3)
          } else {
            g1 = param02;
            gs1 = param12;
            q1 = 0;
            tmp4 = dotMult_inst_19_5_6_9_tsni(q1, gs1);
            tmp5 = negatePs_inst_19_5_6_25_tsni(tmp4);
            tmp6 = power.addPs(fs_1, tmp5);
            lambda2 = (undefined, function () {
              return power.Pc(g1, gs1)
            });
            tmp7 = NofibPrelude.lazy(lambda2);
            tmp8 = divPs_inst_19_5_6_tsni(tmp6, tmp7);
            return power.Pc(q1, tmp8)
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs = param11;
            tmp9 = f / g;
            q = tmp9;
            tmp10 = dotMult_inst_19_5_6_8_tsni(q, gs);
            tmp11 = negatePs_inst_19_5_6_24_tsni(tmp10);
            tmp12 = power.addPs(fs_, tmp11);
            lambda3 = (undefined, function () {
              return power.Pc(g, gs)
            });
            tmp13 = NofibPrelude.lazy(lambda3);
            tmp14 = divPs_inst_19_5_6_tsni(tmp12, tmp13);
            return power.Pc(q, tmp14)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs = param11;
          tmp15 = f / g;
          q = tmp15;
          tmp16 = dotMult_inst_19_5_6_7_tsni(q, gs);
          tmp17 = negatePs_inst_19_5_6_23_tsni(tmp16);
          tmp18 = power.addPs(fs_, tmp17);
          lambda4 = (undefined, function () {
            return power.Pc(g, gs)
          });
          tmp19 = NofibPrelude.lazy(lambda4);
          tmp20 = divPs_inst_19_5_6_tsni(tmp18, tmp19);
          return power.Pc(q, tmp20)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_5_6_9_tsni = function dotMult_inst_19_5_6_9_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_5_6_9_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_5_6_25_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_5_6_8_tsni = function dotMult_inst_19_5_6_8_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_5_6_8_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_5_6_24_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
dotMult_inst_19_5_6_7_tsni = function dotMult_inst_19_5_6_7_tsni(c, ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, f, fs_, tmp1, tmp2, _deforest_Pc_f, _deforest_Pc_s;
    scrut = NofibPrelude.force(ps);
    if (scrut instanceof power.Pz.class) {
      return () => {
        return power.Pz
      }
    } else if (scrut instanceof power.Pc.class) {
      param0 = scrut.f;
      param1 = scrut.s;
      f = param0;
      fs_ = param1;
      tmp1 = c * f;
      tmp2 = dotMult_inst_19_5_6_7_tsni(c, fs_);
      _deforest_Pc_f = tmp1;
      _deforest_Pc_s = tmp2;
      return () => {
        let param01, param11, f1, fs_1, tmp3, tmp4;
        param01 = _deforest_Pc_f;
        param11 = _deforest_Pc_s;
        f1 = param01;
        fs_1 = param11;
        tmp3 = - f1;
        tmp4 = negatePs_inst_19_5_6_23_tsni(fs_1);
        return power.Pc(tmp3, tmp4)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_19_10_tsni = function integral_inst_19_10_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp, _deforest_Pc_f, _deforest_Pc_s;
    tmp = int1(fs_, 1);
    _deforest_Pc_f = 0;
    _deforest_Pc_s = tmp;
    return () => {
      let rs, param0, param1, f0, kss, scrut, param01, param11, f1, gss, scrut1, fs_1, tmp1, tmp2, tmp3, tmp4, lambda1;
      param0 = _deforest_Pc_f;
      param1 = _deforest_Pc_s;
      if (param0 === 0) {
        fs_1 = param1;
        rs = function rs() {
          let tmp5, lambda2;
          lambda2 = (undefined, function () {
            let tmp6, tmp7, tmp8, tmp9;
            tmp6 = power.fromIntegerPs(1);
            tmp7 = rs();
            tmp8 = power.compose_(fs_1, tmp7);
            tmp9 = divPs_inst_19_5_6_tsni(tmp6, tmp8);
            return power.Pc(0, tmp9)
          });
          tmp5 = lambda2;
          return NofibPrelude.lazy(tmp5)
        };
        tmp1 = rs();
        return NofibPrelude.force(tmp1)
      } else {
        f0 = param0;
        kss = param1;
        scrut = NofibPrelude.force(kss);
        if (scrut instanceof power.Pc.class) {
          param01 = scrut.f;
          param11 = scrut.s;
          f1 = param01;
          gss = param11;
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pz.class) {
            tmp2 = - 1;
            tmp3 = tmp2 / f1;
            lambda1 = (undefined, function () {
              let tmp5, tmp6, lambda2;
              tmp5 = 1 / f1;
              lambda2 = (undefined, function () {
                return power.Pz
              });
              tmp6 = NofibPrelude.lazy(lambda2);
              return power.Pc(tmp5, tmp6)
            });
            tmp4 = NofibPrelude.lazy(lambda1);
            return power.Pc(tmp3, tmp4)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  });
  return NofibPrelude.lazy(lambda)
};
minusPs_inst_20_tsni = function minusPs_inst_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_20_21_tsni = function negatePs_inst_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_2_20_tsni = function minusPs_inst_2_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_2_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_2_20_21_tsni = function negatePs_inst_2_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_22_tsni = function minusPs_inst_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_22_21_tsni = function negatePs_inst_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_4_22_tsni = function minusPs_inst_4_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_4_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_4_22_21_tsni = function negatePs_inst_4_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_5_6_23_tsni = function negatePs_inst_5_6_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_5_6_24_tsni = function negatePs_inst_5_6_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_5_6_25_tsni = function negatePs_inst_5_6_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_11_25_tsni = function negatePs_inst_11_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_11_24_tsni = function negatePs_inst_11_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_11_23_tsni = function negatePs_inst_11_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_12_25_tsni = function negatePs_inst_12_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_12_24_tsni = function negatePs_inst_12_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_12_23_tsni = function negatePs_inst_12_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_13_20_tsni = function minusPs_inst_13_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_13_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_13_20_21_tsni = function negatePs_inst_13_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_14_22_tsni = function minusPs_inst_14_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_14_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_14_22_21_tsni = function negatePs_inst_14_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
deriv_inst_15_26_tsni = function deriv_inst_15_26_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(fss);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_15_16_23_tsni = function negatePs_inst_15_16_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_15_16_24_tsni = function negatePs_inst_15_16_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_15_16_25_tsni = function negatePs_inst_15_16_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_15_27_tsni = function integral_inst_15_27_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp;
    tmp = int1(fs_, 1);
    return power.Pc(0, tmp)
  });
  return NofibPrelude.lazy(lambda)
};
minusPs_inst_17_20_tsni = function minusPs_inst_17_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_17_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_17_20_21_tsni = function negatePs_inst_17_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_18_22_tsni = function minusPs_inst_18_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_18_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_18_22_21_tsni = function negatePs_inst_18_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_19_18_22_tsni = function minusPs_inst_19_18_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_19_18_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_19_18_22_21_tsni = function negatePs_inst_19_18_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_19_17_20_tsni = function minusPs_inst_19_17_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_19_17_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_19_17_20_21_tsni = function negatePs_inst_19_17_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_15_16_25_tsni = function negatePs_inst_19_15_16_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_15_16_24_tsni = function negatePs_inst_19_15_16_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_15_16_23_tsni = function negatePs_inst_19_15_16_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
integral_inst_19_15_27_tsni = function integral_inst_19_15_27_tsni(fs_) {
  let int1, lambda;
  int1 = function int1(fss, n) {
    let tmp, lambda1;
    lambda1 = (undefined, function () {
      let scrut;
      scrut = NofibPrelude.force(fss);
      return runtime.safeCall(scrut(int1, n))
    });
    tmp = lambda1;
    return NofibPrelude.lazy(tmp)
  };
  lambda = (undefined, function () {
    let tmp;
    tmp = int1(fs_, 1);
    return power.Pc(0, tmp)
  });
  return NofibPrelude.lazy(lambda)
};
deriv_inst_19_15_26_tsni = function deriv_inst_19_15_26_tsni(fss) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(fss);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_19_14_22_tsni = function minusPs_inst_19_14_22_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_19_14_22_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_19_14_22_21_tsni = function negatePs_inst_19_14_22_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
minusPs_inst_19_13_20_tsni = function minusPs_inst_19_13_20_tsni(a, b) {
  let tmp;
  tmp = negatePs_inst_19_13_20_21_tsni(b);
  return power.addPs(a, tmp)
};
negatePs_inst_19_13_20_21_tsni = function negatePs_inst_19_13_20_21_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_12_23_tsni = function negatePs_inst_19_12_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_12_24_tsni = function negatePs_inst_19_12_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_12_25_tsni = function negatePs_inst_19_12_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_11_23_tsni = function negatePs_inst_19_11_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_11_24_tsni = function negatePs_inst_19_11_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_11_25_tsni = function negatePs_inst_19_11_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_5_6_25_tsni = function negatePs_inst_19_5_6_25_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_5_6_24_tsni = function negatePs_inst_19_5_6_24_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
negatePs_inst_19_5_6_23_tsni = function negatePs_inst_19_5_6_23_tsni(ps) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut;
    scrut = NofibPrelude.force(ps);
    return runtime.safeCall(scrut())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
(class power {
  static {
    power1 = power;
    this.Pss = class Pss {
      constructor() {}
      toString() { return "Pss"; }
    };
    this.Pc = function Pc(f1, s1) {
      return new Pc.class(f1, s1);
    };
    this.Pc.class = class Pc extends power.Pss {
      constructor(f, s) {
        super();
        this.f = f;
        this.s = s;
      }
      toString() { return "Pc(" + runtime.render(this.f) + ", " + runtime.render(this.s) + ")"; }
    };
    const Pz$class = class Pz extends power.Pss {
      constructor() {
        super();
      }
      toString() { return "Pz"; }
    };
    this.Pz = new Pz$class;
    this.Pz.class = Pz$class;
  }
  static list() {
    let lambda;
    lambda = (undefined, function () {
      let tmp;
      tmp = power.list();
      return power.Pc(1, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static x_() {
    let lambda;
    lambda = (undefined, function () {
      let tmp, lambda1;
      lambda1 = (undefined, function () {
        let tmp1, lambda2;
        lambda2 = (undefined, function () {
          return power.Pz
        });
        tmp1 = NofibPrelude.lazy(lambda2);
        return power.Pc(1, tmp1)
      });
      tmp = NofibPrelude.lazy(lambda1);
      return power.Pc(0, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static fromIntegerPs(c) {
    let scrut, lambda, lambda1;
    scrut = c == 0;
    if (scrut === true) {
      lambda = (undefined, function () {
        return power.Pz
      });
      return NofibPrelude.lazy(lambda)
    } else {
      lambda1 = (undefined, function () {
        let tmp, lambda2;
        lambda2 = (undefined, function () {
          return power.Pz
        });
        tmp = NofibPrelude.lazy(lambda2);
        return power.Pc(c, tmp)
      });
      return NofibPrelude.lazy(lambda1)
    }
  } 
  static extract(n, ps) {
    let scrut, param0, param1, x, ps1, scrut1, tmp, tmp1;
    scrut1 = n == 0;
    if (scrut1 === true) {
      return NofibPrelude.Nil
    } else {
      scrut = NofibPrelude.force(ps);
      if (scrut instanceof power.Pz.class) {
        return NofibPrelude.Nil
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        x = param0;
        ps1 = param1;
        tmp = n - 1;
        tmp1 = power.extract(tmp, ps1);
        return NofibPrelude.Cons(x, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static dotMult(c1, ps1) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, tmp1, tmp2;
      scrut = NofibPrelude.force(ps1);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        tmp1 = c1 * f;
        tmp2 = power.dotMult(c1, fs_);
        return power.Pc(tmp1, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static dotMultSndLz(c2, ps2) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, tmp1, tmp2, tmp3;
      tmp1 = NofibPrelude.force(ps2);
      scrut = NofibPrelude.force(tmp1);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        tmp2 = c2 * f;
        tmp3 = power.dotMult(c2, fs_);
        return power.Pc(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static negatePs(ps3) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, tmp1, tmp2;
      scrut = NofibPrelude.force(ps3);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        tmp1 = - f;
        tmp2 = power.negatePs(fs_);
        return power.Pc(tmp1, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static addPs(fss, gs) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs1, tmp1, tmp2;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return NofibPrelude.force(gs)
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gs);
        if (scrut1 instanceof power.Pz.class) {
          return NofibPrelude.force(fss)
        } else if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs1 = param11;
          tmp1 = f + g;
          tmp2 = power.addPs(fs_, gs1);
          return power.Pc(tmp1, tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static minusPs(a, b) {
    let tmp;
    tmp = power.negatePs(b);
    return power.addPs(a, tmp)
  } 
  static multPs(fss1, gss) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      scrut = NofibPrelude.force(fss1);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs1 = param11;
          tmp1 = f * g;
          tmp2 = power.dotMult(f, gs1);
          tmp3 = power.dotMult(g, fs_);
          tmp4 = power.addPs(tmp2, tmp3);
          tmp5 = power.x_();
          tmp6 = power.multPs(tmp5, fs_);
          tmp7 = power.multPs(tmp6, gs1);
          tmp8 = power.addPs(tmp4, tmp7);
          return power.Pc(tmp1, tmp8)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static multPsFstLz(fss2, gss1) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      tmp1 = NofibPrelude.force(fss2);
      scrut = NofibPrelude.force(tmp1);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss1);
        if (scrut1 instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          g = param01;
          gs1 = param11;
          tmp2 = f * g;
          tmp3 = power.dotMult(f, gs1);
          tmp4 = power.dotMult(g, fs_);
          tmp5 = power.addPs(tmp3, tmp4);
          tmp6 = power.x_();
          tmp7 = power.multPs(tmp6, fs_);
          tmp8 = power.multPs(tmp7, gs1);
          tmp9 = power.addPs(tmp5, tmp8);
          return power.Pc(tmp2, tmp9)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static powerPs(a1, n1) {
    let scrut, tmp, tmp1;
    scrut = n1 <= 0;
    if (scrut === true) {
      return power.fromIntegerPs(1)
    } else {
      tmp = n1 - 1;
      tmp1 = power.powerPs(a1, tmp);
      return power.multPs(a1, tmp1)
    }
  } 
  static divPs(fss3, gss2) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, g, gs1, q, fs_1, scrut2, param02, param12, g1, gs2, q1, gs3, scrut3, param03, param13, gs4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda1, lambda2, lambda3, lambda4;
      scrut = NofibPrelude.force(fss3);
      if (scrut instanceof power.Pz.class) {
        scrut3 = NofibPrelude.force(gss2);
        if (scrut3 instanceof power.Pz.class) {
          throw globalThis.Error("power series 0/0");
        } else if (scrut3 instanceof power.Pc.class) {
          param03 = scrut3.f;
          param13 = scrut3.s;
          if (param03 === 0) {
            gs4 = param13;
            lambda1 = (undefined, function () {
              return power.Pz
            });
            tmp1 = NofibPrelude.lazy(lambda1);
            tmp2 = power.divPs(tmp1, gs4);
            return NofibPrelude.force(tmp2)
          } else {
            return power.Pz
          }
        } else {
          return power.Pz
        }
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        if (param0 === 0) {
          fs_1 = param1;
          scrut2 = NofibPrelude.force(gss2);
          if (scrut2 instanceof power.Pc.class) {
            param02 = scrut2.f;
            param12 = scrut2.s;
            if (param02 === 0) {
              gs3 = param12;
              tmp3 = power.divPs(fs_1, gs3);
              return NofibPrelude.force(tmp3)
            } else {
              g1 = param02;
              gs2 = param12;
              q1 = 0;
              tmp4 = power.dotMult(q1, gs2);
              tmp5 = power.negatePs(tmp4);
              tmp6 = power.addPs(fs_1, tmp5);
              lambda2 = (undefined, function () {
                return power.Pc(g1, gs2)
              });
              tmp7 = NofibPrelude.lazy(lambda2);
              tmp8 = power.divPs(tmp6, tmp7);
              return power.Pc(q1, tmp8)
            }
          } else {
            f = param0;
            fs_ = param1;
            scrut1 = NofibPrelude.force(gss2);
            if (scrut1 instanceof power.Pc.class) {
              param01 = scrut1.f;
              param11 = scrut1.s;
              g = param01;
              gs1 = param11;
              tmp9 = f / g;
              q = tmp9;
              tmp10 = power.dotMult(q, gs1);
              tmp11 = power.negatePs(tmp10);
              tmp12 = power.addPs(fs_, tmp11);
              lambda3 = (undefined, function () {
                return power.Pc(g, gs1)
              });
              tmp13 = NofibPrelude.lazy(lambda3);
              tmp14 = power.divPs(tmp12, tmp13);
              return power.Pc(q, tmp14)
            } else {
              throw new globalThis.Error("match error");
            }
          }
        } else {
          f = param0;
          fs_ = param1;
          scrut1 = NofibPrelude.force(gss2);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            g = param01;
            gs1 = param11;
            tmp15 = f / g;
            q = tmp15;
            tmp16 = power.dotMult(q, gs1);
            tmp17 = power.negatePs(tmp16);
            tmp18 = power.addPs(fs_, tmp17);
            lambda4 = (undefined, function () {
              return power.Pc(g, gs1)
            });
            tmp19 = NofibPrelude.lazy(lambda4);
            tmp20 = power.divPs(tmp18, tmp19);
            return power.Pc(q, tmp20)
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static compose_(fss4, gss3) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, gs1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, lambda1, lambda2, lambda3, lambda4;
      scrut = NofibPrelude.force(fss4);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        scrut1 = NofibPrelude.force(gss3);
        if (scrut1 instanceof power.Pz.class) {
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          return power.Pc(f, tmp1)
        } else if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          if (param01 === 0) {
            gs1 = param11;
            lambda2 = (undefined, function () {
              return power.Pc(0, gs1)
            });
            tmp2 = NofibPrelude.lazy(lambda2);
            tmp3 = power.compose_(fs_, tmp2);
            tmp4 = power.multPs(gs1, tmp3);
            return power.Pc(f, tmp4)
          } else {
            lambda3 = (undefined, function () {
              let tmp13, lambda5;
              lambda5 = (undefined, function () {
                return power.Pz
              });
              tmp13 = NofibPrelude.lazy(lambda5);
              return power.Pc(f, tmp13)
            });
            tmp5 = NofibPrelude.lazy(lambda3);
            tmp6 = power.compose_(fs_, gss3);
            tmp7 = power.multPs(gss3, tmp6);
            tmp8 = power.addPs(tmp5, tmp7);
            return NofibPrelude.force(tmp8)
          }
        } else {
          lambda4 = (undefined, function () {
            let tmp13, lambda5;
            lambda5 = (undefined, function () {
              return power.Pz
            });
            tmp13 = NofibPrelude.lazy(lambda5);
            return power.Pc(f, tmp13)
          });
          tmp9 = NofibPrelude.lazy(lambda4);
          tmp10 = power.compose_(fs_, gss3);
          tmp11 = power.multPs(gss3, tmp10);
          tmp12 = power.addPs(tmp9, tmp11);
          return NofibPrelude.force(tmp12)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static composeSndLz_(fss5, gss4) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, f, fs_, scrut1, param01, param11, gs1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, lambda1, lambda2, lambda3, lambda4;
      scrut = NofibPrelude.force(fss5);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        f = param0;
        fs_ = param1;
        tmp1 = NofibPrelude.force(gss4);
        scrut1 = NofibPrelude.force(tmp1);
        if (scrut1 instanceof power.Pz.class) {
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp2 = NofibPrelude.lazy(lambda1);
          return power.Pc(f, tmp2)
        } else if (scrut1 instanceof power.Pc.class) {
          param01 = scrut1.f;
          param11 = scrut1.s;
          if (param01 === 0) {
            gs1 = param11;
            lambda2 = (undefined, function () {
              return power.Pc(0, gs1)
            });
            tmp3 = NofibPrelude.lazy(lambda2);
            tmp4 = power.compose_(fs_, tmp3);
            tmp5 = power.multPs(gs1, tmp4);
            return power.Pc(f, tmp5)
          } else {
            lambda3 = (undefined, function () {
              let tmp14, lambda5;
              lambda5 = (undefined, function () {
                return power.Pz
              });
              tmp14 = NofibPrelude.lazy(lambda5);
              return power.Pc(f, tmp14)
            });
            tmp6 = NofibPrelude.lazy(lambda3);
            tmp7 = power.composeSndLz_(fs_, gss4);
            tmp8 = power.multPs(gss4, tmp7);
            tmp9 = power.addPs(tmp6, tmp8);
            return NofibPrelude.force(tmp9)
          }
        } else {
          lambda4 = (undefined, function () {
            let tmp14, lambda5;
            lambda5 = (undefined, function () {
              return power.Pz
            });
            tmp14 = NofibPrelude.lazy(lambda5);
            return power.Pc(f, tmp14)
          });
          tmp10 = NofibPrelude.lazy(lambda4);
          tmp11 = power.composeSndLz_(fs_, gss4);
          tmp12 = power.multPs(gss4, tmp11);
          tmp13 = power.addPs(tmp10, tmp12);
          return NofibPrelude.force(tmp13)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static revert(fss6) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let rs, scrut, param0, param1, f0, kss, scrut1, param01, param11, f1, gss5, scrut2, fs_, tmp1, tmp2, tmp3, tmp4, lambda1;
      scrut = NofibPrelude.force(fss6);
      if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        if (param0 === 0) {
          fs_ = param1;
          rs = function rs() {
            let tmp5, lambda2;
            lambda2 = (undefined, function () {
              let tmp6, tmp7, tmp8, tmp9;
              tmp6 = power.fromIntegerPs(1);
              tmp7 = rs();
              tmp8 = power.compose_(fs_, tmp7);
              tmp9 = power.divPs(tmp6, tmp8);
              return power.Pc(0, tmp9)
            });
            tmp5 = lambda2;
            return NofibPrelude.lazy(tmp5)
          };
          tmp1 = rs();
          return NofibPrelude.force(tmp1)
        } else {
          f0 = param0;
          kss = param1;
          scrut1 = NofibPrelude.force(kss);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            f1 = param01;
            gss5 = param11;
            scrut2 = NofibPrelude.force(gss5);
            if (scrut2 instanceof power.Pz.class) {
              tmp2 = - 1;
              tmp3 = tmp2 / f1;
              lambda1 = (undefined, function () {
                let tmp5, tmp6, lambda2;
                tmp5 = 1 / f1;
                lambda2 = (undefined, function () {
                  return power.Pz
                });
                tmp6 = NofibPrelude.lazy(lambda2);
                return power.Pc(tmp5, tmp6)
              });
              tmp4 = NofibPrelude.lazy(lambda1);
              return power.Pc(tmp3, tmp4)
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static deriv(fss7) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let deriv1, scrut, param0, param1, fs_, tmp1;
      scrut = NofibPrelude.force(fss7);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        fs_ = param1;
        deriv1 = function deriv1(gss5, n2) {
          let tmp2, lambda1;
          lambda1 = (undefined, function () {
            let scrut1, param01, param11, f, fs_1, tmp3, tmp4, tmp5;
            scrut1 = NofibPrelude.force(gss5);
            if (scrut1 instanceof power.Pz.class) {
              return power.Pz
            } else if (scrut1 instanceof power.Pc.class) {
              param01 = scrut1.f;
              param11 = scrut1.s;
              f = param01;
              fs_1 = param11;
              tmp3 = n2 * f;
              tmp4 = n2 + 1;
              tmp5 = deriv1(fs_1, tmp4);
              return power.Pc(tmp3, tmp5)
            } else {
              throw new globalThis.Error("match error");
            }
          });
          tmp2 = lambda1;
          return NofibPrelude.lazy(tmp2)
        };
        tmp1 = deriv1(fs_, 1);
        return NofibPrelude.force(tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static integral(fs_) {
    let int1, lambda;
    int1 = function int1(fss8, n2) {
      let tmp, lambda1;
      lambda1 = (undefined, function () {
        let scrut, param0, param1, f, fs_1, tmp1, tmp2, tmp3;
        scrut = NofibPrelude.force(fss8);
        if (scrut instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut instanceof power.Pc.class) {
          param0 = scrut.f;
          param1 = scrut.s;
          f = param0;
          fs_1 = param1;
          tmp1 = f / n2;
          tmp2 = n2 + 1;
          tmp3 = int1(fs_1, tmp2);
          return power.Pc(tmp1, tmp3)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp = lambda1;
      return NofibPrelude.lazy(tmp)
    };
    lambda = (undefined, function () {
      let tmp;
      tmp = int1(fs_, 1);
      return power.Pc(0, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static integralLz(fs_1) {
    let int1, tmp, lambda;
    int1 = function int1(fss8, n2) {
      let tmp1, lambda1;
      lambda1 = (undefined, function () {
        let scrut, param0, param1, f, fs_2, tmp2, tmp3, tmp4;
        scrut = NofibPrelude.force(fss8);
        if (scrut instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut instanceof power.Pc.class) {
          param0 = scrut.f;
          param1 = scrut.s;
          f = param0;
          fs_2 = param1;
          tmp2 = f / n2;
          tmp3 = n2 + 1;
          tmp4 = int1(fs_2, tmp3);
          return power.Pc(tmp2, tmp4)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp1 = lambda1;
      return NofibPrelude.lazy(tmp1)
    };
    lambda = (undefined, function () {
      let tmp1, tmp2;
      tmp1 = runtime.safeCall(fs_1());
      tmp2 = int1(tmp1, 1);
      return power.Pc(0, tmp2)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static sqrtPs(fss8) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let qs, scrut, param0, param1, fs_2, gss5, scrut1, param01, param11, fs_3, tmp1, tmp2, tmp3;
      scrut = NofibPrelude.force(fss8);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        param0 = scrut.f;
        param1 = scrut.s;
        if (param0 === 0) {
          gss5 = param1;
          scrut1 = NofibPrelude.force(gss5);
          if (scrut1 instanceof power.Pc.class) {
            param01 = scrut1.f;
            param11 = scrut1.s;
            if (param01 === 0) {
              fs_3 = param11;
              tmp1 = power.sqrtPs(fs_3);
              return power.Pc(0, tmp1)
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else if (param0 === 1) {
          fs_2 = param1;
          qs = function qs() {
            let tmp4, lambda1;
            lambda1 = (undefined, function () {
              let tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda2;
              tmp5 = power.fromIntegerPs(1);
              lambda2 = (undefined, function () {
                return power.Pc(1, fs_2)
              });
              tmp6 = NofibPrelude.lazy(lambda2);
              tmp7 = power.deriv(tmp6);
              tmp8 = qs();
              tmp9 = power.dotMultSndLz(2, tmp8);
              tmp10 = power.divPs(tmp7, tmp9);
              tmp11 = power.integral(tmp10);
              return power.addPs(tmp5, tmp11)
            });
            tmp4 = lambda1;
            return NofibPrelude.lazy(tmp4)
          };
          tmp2 = qs();
          tmp3 = NofibPrelude.force(tmp2);
          return NofibPrelude.force(tmp3)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static ts() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, tmp3;
      tmp1 = power.ts();
      tmp2 = power.ts();
      tmp3 = power.multPs(tmp1, tmp2);
      return power.Pc(1, tmp3)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static tree() {
    let tmp, lambda;
    lambda = (undefined, function () {
      let tmp1, tmp2, tmp3, lambda1;
      tmp1 = power.list();
      lambda1 = (undefined, function () {
        return power.tree()
      });
      tmp2 = NofibPrelude.lazy(lambda1);
      tmp3 = power.composeSndLz_(tmp1, tmp2);
      return power.Pc(0, tmp3)
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static cosx() {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function () {
      let tmp3, lambda1;
      lambda1 = (undefined, function () {
        return power.Pz
      });
      tmp3 = NofibPrelude.lazy(lambda1);
      return power.Pc(1, tmp3)
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = integralLz_inst_1_tsni(cosx_inst_2_tsni);
    tmp2 = integral_inst_0_tsni(tmp1);
    return minusPs_inst_20_tsni(tmp, tmp2)
  } 
  static sinx() {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function () {
      let tmp3, lambda1;
      lambda1 = (undefined, function () {
        return power.Pz
      });
      tmp3 = NofibPrelude.lazy(lambda1);
      return power.Pc(1, tmp3)
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = integralLz_inst_3_tsni(sinx_inst_4_tsni);
    tmp2 = minusPs_inst_22_tsni(tmp, tmp1);
    return power.integral(tmp2)
  } 
  static testPower_nofib(p) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
    tmp = sinx_inst_18_tsni();
    tmp1 = power.fromIntegerPs(1);
    tmp2 = cosx_inst_17_tsni();
    tmp3 = power.powerPs(tmp2, 2);
    tmp4 = power.minusPs(tmp1, tmp3);
    tmp5 = sqrtPs_inst_15_tsni(tmp4);
    tmp6 = power.minusPs(tmp, tmp5);
    tmp7 = power.extract(p, tmp6);
    tmp8 = sinx_inst_14_tsni();
    tmp9 = cosx_inst_13_tsni();
    tmp10 = divPs_inst_12_tsni(tmp8, tmp9);
    tmp11 = power.fromIntegerPs(1);
    tmp12 = power.fromIntegerPs(1);
    tmp13 = power.x_();
    tmp14 = power.powerPs(tmp13, 2);
    tmp15 = power.addPs(tmp12, tmp14);
    tmp16 = divPs_inst_11_tsni(tmp11, tmp15);
    tmp17 = integral_inst_10_tsni(tmp16);
    tmp18 = revert_inst_5_tsni(tmp17);
    tmp19 = power.minusPs(tmp10, tmp18);
    tmp20 = power.extract(p, tmp19);
    tmp21 = (tmp7 , tmp20);
    tmp22 = power.ts();
    tmp23 = power.extract(p, tmp22);
    tmp24 = (tmp21 , tmp23);
    tmp25 = power.tree();
    tmp26 = power.extract(p, tmp25);
    return (tmp24 , tmp26)
  } 
  static main() {
    let tmp;
    tmp = testPower_nofib_inst_19_tsni(14);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "power"; }
});
let power = power1; export default power;
