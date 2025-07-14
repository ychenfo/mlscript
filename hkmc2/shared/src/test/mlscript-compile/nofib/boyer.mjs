import runtime from "./../Runtime.mjs";
import Term1 from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let boyer1, one_way_unify1_inst_0_tsni, one_way_unify1_lst_inst_0_tsni, find_inst_0_1_tsni, find_inst_1_tsni, one_way_unify1_inst_2_tsni, one_way_unify1_lst_inst_2_tsni, find_inst_2_1_tsni, one_way_unify1_inst_3_tsni, one_way_unify1_lst_inst_3_tsni, find_inst_3_1_tsni, one_way_unify1_inst_4_tsni, one_way_unify1_lst_inst_4_tsni, find_inst_4_1_tsni, find_inst_5_tsni, rewrite_inst_6_tsni, rewrite_with_lemmas_inst_6_tsni, rewrite_with_lemmas_helper_inst_6_tsni, one_way_unify_inst_6_7_tsni, one_way_unify1_inst_6_7_4_tsni, one_way_unify1_lst_inst_6_7_4_tsni, find_inst_6_7_4_1_tsni, apply_subst_inst_6_8_tsni, find_inst_6_8_5_tsni, rewrite_inst_9_tsni, rewrite_with_lemmas_inst_9_tsni, rewrite_with_lemmas_helper_inst_9_tsni, one_way_unify_inst_9_7_tsni, one_way_unify1_inst_9_7_4_tsni, one_way_unify1_lst_inst_9_7_4_tsni, find_inst_9_7_4_1_tsni, apply_subst_inst_9_8_tsni, find_inst_9_8_5_tsni, apply_subst_inst_8_tsni, find_inst_8_5_tsni, one_way_unify_inst_7_tsni, one_way_unify1_inst_7_4_tsni, one_way_unify1_lst_inst_7_4_tsni, find_inst_7_4_1_tsni, rewrite_inst_10_tsni, rewrite_with_lemmas_inst_10_tsni, rewrite_with_lemmas_helper_inst_10_tsni, one_way_unify_inst_10_7_tsni, one_way_unify1_inst_10_7_4_tsni, one_way_unify1_lst_inst_10_7_4_tsni, find_inst_10_7_4_1_tsni, apply_subst_inst_10_8_tsni, find_inst_10_8_5_tsni, rewrite_inst_11_tsni, rewrite_with_lemmas_inst_11_tsni, rewrite_with_lemmas_helper_inst_11_tsni, one_way_unify_inst_11_7_tsni, one_way_unify1_inst_11_7_4_tsni, one_way_unify1_lst_inst_11_7_4_tsni, find_inst_11_7_4_1_tsni, apply_subst_inst_11_8_tsni, find_inst_11_8_5_tsni, rewrite_inst_12_tsni, rewrite_with_lemmas_inst_12_tsni, rewrite_with_lemmas_helper_inst_12_tsni, one_way_unify_inst_12_7_tsni, one_way_unify1_inst_12_7_4_tsni, one_way_unify1_lst_inst_12_7_4_tsni, find_inst_12_7_4_1_tsni, apply_subst_inst_12_8_tsni, find_inst_12_8_5_tsni, rewrite_inst_13_tsni, rewrite_with_lemmas_inst_13_tsni, rewrite_with_lemmas_helper_inst_13_tsni, one_way_unify_inst_13_7_tsni, one_way_unify1_inst_13_7_4_tsni, one_way_unify1_lst_inst_13_7_4_tsni, find_inst_13_7_4_1_tsni, apply_subst_inst_13_8_tsni, find_inst_13_8_5_tsni, tautp_inst_14_tsni, rewrite_inst_14_13_tsni, rewrite_with_lemmas_inst_14_13_tsni, rewrite_with_lemmas_helper_inst_14_13_tsni, apply_subst_inst_14_13_8_tsni, find_inst_14_13_8_5_tsni, one_way_unify_inst_14_13_7_tsni, one_way_unify1_inst_14_13_7_4_tsni, one_way_unify1_lst_inst_14_13_7_4_tsni, find_inst_14_13_7_4_1_tsni, apply_subst_inst_15_tsni, find_inst_15_5_tsni, test0_inst_16_tsni, apply_subst_inst_16_15_tsni, find_inst_16_15_5_tsni, tautp_inst_16_14_tsni, rewrite_inst_16_14_13_tsni, rewrite_with_lemmas_inst_16_14_13_tsni, rewrite_with_lemmas_helper_inst_16_14_13_tsni, one_way_unify_inst_16_14_13_7_tsni, one_way_unify1_inst_16_14_13_7_4_tsni, one_way_unify1_lst_inst_16_14_13_7_4_tsni, find_inst_16_14_13_7_4_1_tsni, apply_subst_inst_16_14_13_8_tsni, find_inst_16_14_13_8_5_tsni, replicate_inst_17_tsni, testBoyer_nofib_inst_18_tsni, test0_inst_18_16_tsni, tautp_inst_18_16_14_tsni, rewrite_inst_18_16_14_13_tsni, rewrite_with_lemmas_inst_18_16_14_13_tsni, rewrite_with_lemmas_helper_inst_18_16_14_13_tsni, apply_subst_inst_18_16_14_13_8_tsni, find_inst_18_16_14_13_8_5_tsni, one_way_unify_inst_18_16_14_13_7_tsni, one_way_unify1_inst_18_16_14_13_7_4_tsni, one_way_unify1_lst_inst_18_16_14_13_7_4_tsni, find_inst_18_16_14_13_7_4_1_tsni, apply_subst_inst_18_16_15_tsni, find_inst_18_16_15_5_tsni, replicate_inst_18_17_tsni, all_inst_19_tsni, all_inst_18_19_tsni, match_scrut_arm_Deforest_Arr_2_inst_0_tsni, match_scrut_arm_Deforest_Arr_2_inst__tsni, match_scrut_arm_Deforest_Arr_2_inst_2_tsni, match_scrut_arm_Deforest_Arr_2_inst_3_tsni, match_scrut_arm_Deforest_Arr_2_inst_4_tsni, match_scrut_arm_Deforest_Arr_2_inst__tsni1, match_scrut_arm_Deforest_Arr_2_inst_6_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_6_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_9_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_9_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_10_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_10_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_11_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_12_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_12_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_13_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_13_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_14_13_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_14_13_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_15_tsni, match_ls_arm_Cons_inst_15_5_tsni, match_param0_arm_Deforest_Arr_2_inst_15_5_tsni, match_scrut_arm_Deforest_Arr_2_inst_16_15_tsni, match_ls_arm_Cons_inst_16_15_5_tsni, match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni, match_scrut_arm_Deforest_Arr_2_inst_16_14_13_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_16_14_13_8_tsni, match_lss_arm_Nil_inst_16_14_13_tsni, match_lss_arm_Cons_inst_16_14_13_tsni, match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni, match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_8_tsni, match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_7_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_18_16_15_tsni, match_ls_arm_Cons_inst_18_16_15_5_tsni, match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni, match_lss_arm_Cons_inst_18_16_14_13_tsni, match_lss_arm_Nil_inst_18_16_14_13_tsni, match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni;
match_scrut_arm_Deforest_Arr_2_inst_0_tsni = function match_scrut_arm_Deforest_Arr_2_inst_0_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_0_tsni, _deforest_Deforest_Arr_2_1_inst_0_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst__tsni = function match_scrut_arm_Deforest_Arr_2_inst__tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst__tsni, _deforest_Deforest_Arr_2_1_inst__tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst__tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst__tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_2_tsni = function match_scrut_arm_Deforest_Arr_2_inst_2_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_2_tsni, _deforest_Deforest_Arr_2_1_inst_2_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_2_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_2_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_3_tsni = function match_scrut_arm_Deforest_Arr_2_inst_3_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_3_tsni, _deforest_Deforest_Arr_2_1_inst_3_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_3_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_4_tsni, _deforest_Deforest_Arr_2_1_inst_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst__tsni1 = function match_scrut_arm_Deforest_Arr_2_inst__tsni(vid, _deforest_Deforest_Arr_2_0_inst__tsni, _deforest_Deforest_Arr_2_1_inst__tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst__tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst__tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_6_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_6_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_6_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_6_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_6_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_6_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_6_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_6_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_6_8_tsni, _deforest_Deforest_Arr_2_1_inst_6_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_6_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_6_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_9_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_9_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_9_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_9_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_9_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_9_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_9_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_9_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_9_8_tsni, _deforest_Deforest_Arr_2_1_inst_9_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_9_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_9_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_8_tsni, _deforest_Deforest_Arr_2_1_inst_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_10_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_10_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_10_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_10_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_10_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_10_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_10_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_10_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_10_8_tsni, _deforest_Deforest_Arr_2_1_inst_10_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_10_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_10_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_11_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_11_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_11_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_11_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_11_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_11_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_11_8_tsni, _deforest_Deforest_Arr_2_1_inst_11_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_11_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_11_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_12_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_12_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_12_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_12_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_12_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_12_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_12_8_tsni, _deforest_Deforest_Arr_2_1_inst_12_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_12_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_12_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_13_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_13_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_13_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_13_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_13_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_13_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_13_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_13_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_13_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_13_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_14_13_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_14_13_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_14_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_14_13_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_14_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_14_13_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_14_13_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_14_13_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_14_13_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_14_13_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_14_13_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_14_13_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_15_tsni = function match_scrut_arm_Deforest_Arr_2_inst_15_tsni(vid, _deforest_Deforest_Arr_2_0_inst_15_tsni, _deforest_Deforest_Arr_2_1_inst_15_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_ls_arm_Cons_inst_15_5_tsni = function match_ls_arm_Cons_inst_15_5_tsni(vid, _deforest_Cons_head_inst_15_5_tsni, _deforest_Cons_tail_inst_15_5_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_15_5_tsni;
  param1 = _deforest_Cons_tail_inst_15_5_tsni;
  return runtime.safeCall(param0(vid, param1))
};
match_param0_arm_Deforest_Arr_2_inst_15_5_tsni = function match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_0_inst_15_5_tsni, _deforest_Deforest_Arr_2_1_inst_15_5_tsni) {
  let first1, first0, vid2, val2, bs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_5_tsni;
  vid2 = first0;
  val2 = first1;
  bs = param1;
  scrut = vid === vid2;
  if (scrut === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = val2;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_15_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return find_inst_15_5_tsni(vid, bs)
  }
};
match_scrut_arm_Deforest_Arr_2_inst_16_15_tsni = function match_scrut_arm_Deforest_Arr_2_inst_16_15_tsni(vid, _deforest_Deforest_Arr_2_0_inst_16_15_tsni, _deforest_Deforest_Arr_2_1_inst_16_15_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_16_15_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_16_15_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_ls_arm_Cons_inst_16_15_5_tsni = function match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head_inst_16_15_5_tsni, _deforest_Cons_tail_inst_16_15_5_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_16_15_5_tsni;
  param1 = _deforest_Cons_tail_inst_16_15_5_tsni;
  return runtime.safeCall(param0(vid, param1))
};
match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni = function match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_0_inst_16_15_5_tsni, _deforest_Deforest_Arr_2_1_inst_16_15_5_tsni) {
  let first1, first0, vid2, val2, bs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_16_15_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_16_15_5_tsni;
  vid2 = first0;
  val2 = first1;
  bs = param1;
  scrut = vid === vid2;
  if (scrut === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = val2;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_16_15_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return find_inst_16_15_5_tsni(vid, bs)
  }
};
match_scrut_arm_Deforest_Arr_2_inst_16_14_13_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_16_14_13_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_16_14_13_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_16_14_13_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_16_14_13_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_16_14_13_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_16_14_13_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_16_14_13_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_16_14_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_16_14_13_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_16_14_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_16_14_13_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_lss_arm_Nil_inst_16_14_13_tsni = function match_lss_arm_Nil_inst_16_14_13_tsni(term) {
  return term
};
match_lss_arm_Cons_inst_16_14_13_tsni = function match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head_inst_16_14_13_tsni, _deforest_Cons_tail_inst_16_14_13_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_16_14_13_tsni;
  param1 = _deforest_Cons_tail_inst_16_14_13_tsni;
  return runtime.safeCall(param0(term, param1))
};
match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni = function match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_0_inst_16_14_13_tsni, _deforest_Deforest_Arr_2_1_inst_16_14_13_tsni) {
  let first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_16_14_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_16_14_13_tsni;
  lhs = first0;
  rhs = first1;
  ls = param1;
  scrut = one_way_unify_inst_16_14_13_7_tsni(term, lhs);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first01 = scrut[0];
    first11 = scrut[1];
    unified = first01;
    subst = first11;
    if (unified === true) {
      tmp = apply_subst_inst_16_14_13_8_tsni(subst, rhs);
      return rewrite_inst_16_14_13_tsni(tmp)
    } else {
      return rewrite_with_lemmas_helper_inst_16_14_13_tsni(term, ls)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_8_tsni = function match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_8_tsni(vid, _deforest_Deforest_Arr_2_0_inst_18_16_14_13_8_tsni, _deforest_Deforest_Arr_2_1_inst_18_16_14_13_8_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_16_14_13_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_16_14_13_8_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_7_4_tsni = function match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_7_4_tsni(term1, subst, vid2, _deforest_Deforest_Arr_2_0_inst_18_16_14_13_7_4_tsni, _deforest_Deforest_Arr_2_1_inst_18_16_14_13_7_4_tsni) {
  let first1, first0, found, v2, tmp, arr, arr1, tmp1, arr2;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_16_14_13_7_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_16_14_13_7_4_tsni;
  found = first0;
  v2 = first1;
  if (found === true) {
    tmp = boyer.termEq(term1, v2);
    arr = [
      tmp,
      subst
    ];
    return arr
  } else {
    arr1 = [
      vid2,
      term1
    ];
    tmp1 = NofibPrelude.Cons(arr1, subst);
    arr2 = [
      true,
      tmp1
    ];
    return arr2
  }
};
match_scrut_arm_Deforest_Arr_2_inst_18_16_15_tsni = function match_scrut_arm_Deforest_Arr_2_inst_18_16_15_tsni(vid, _deforest_Deforest_Arr_2_0_inst_18_16_15_tsni, _deforest_Deforest_Arr_2_1_inst_18_16_15_tsni) {
  let first1, first0, found, value;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_16_15_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_16_15_tsni;
  found = first0;
  value = first1;
  if (found === true) {
    return value
  } else {
    return runtime.safeCall(boyer.Var(vid))
  }
};
match_ls_arm_Cons_inst_18_16_15_5_tsni = function match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head_inst_18_16_15_5_tsni, _deforest_Cons_tail_inst_18_16_15_5_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_18_16_15_5_tsni;
  param1 = _deforest_Cons_tail_inst_18_16_15_5_tsni;
  return runtime.safeCall(param0(vid, param1))
};
match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni = function match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_0_inst_18_16_15_5_tsni, _deforest_Deforest_Arr_2_1_inst_18_16_15_5_tsni) {
  let first1, first0, vid2, val2, bs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_16_15_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_16_15_5_tsni;
  vid2 = first0;
  val2 = first1;
  bs = param1;
  scrut = vid === vid2;
  if (scrut === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = val2;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_16_15_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return find_inst_18_16_15_5_tsni(vid, bs)
  }
};
match_lss_arm_Cons_inst_18_16_14_13_tsni = function match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head_inst_18_16_14_13_tsni, _deforest_Cons_tail_inst_18_16_14_13_tsni) {
  let param0, param1;
  param0 = _deforest_Cons_head_inst_18_16_14_13_tsni;
  param1 = _deforest_Cons_tail_inst_18_16_14_13_tsni;
  return runtime.safeCall(param0(term, param1))
};
match_lss_arm_Nil_inst_18_16_14_13_tsni = function match_lss_arm_Nil_inst_18_16_14_13_tsni(term) {
  return term
};
match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni = function match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_0_inst_18_16_14_13_tsni, _deforest_Deforest_Arr_2_1_inst_18_16_14_13_tsni) {
  let first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_16_14_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_16_14_13_tsni;
  lhs = first0;
  rhs = first1;
  ls = param1;
  scrut = one_way_unify_inst_18_16_14_13_7_tsni(term, lhs);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first01 = scrut[0];
    first11 = scrut[1];
    unified = first01;
    subst = first11;
    if (unified === true) {
      tmp = apply_subst_inst_18_16_14_13_8_tsni(subst, rhs);
      return rewrite_inst_18_16_14_13_tsni(tmp)
    } else {
      return rewrite_with_lemmas_helper_inst_18_16_14_13_tsni(term, ls)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify1_inst_0_tsni = function one_way_unify1_inst_0_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_0_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_0_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_0_tsni = function one_way_unify1_lst_inst_0_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_0_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_0_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_0_1_tsni = function find_inst_0_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_0_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_0_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_0_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_1_tsni = function find_inst_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst__tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst__tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify1_inst_2_tsni = function one_way_unify1_inst_2_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_2_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_2_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_2_tsni = function one_way_unify1_lst_inst_2_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_2_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_2_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_2_1_tsni = function find_inst_2_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_2_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_2_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_2_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify1_inst_3_tsni = function one_way_unify1_inst_3_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_3_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_3_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_3_tsni = function one_way_unify1_lst_inst_3_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_3_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_3_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_3_1_tsni = function find_inst_3_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_3_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_3_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_3_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify1_inst_4_tsni = function one_way_unify1_inst_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_4_tsni = function one_way_unify1_lst_inst_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_4_1_tsni = function find_inst_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_5_tsni = function find_inst_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst__tsni1(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst__tsni1(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_6_tsni = function rewrite_inst_6_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_6_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_6_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_6_tsni = function rewrite_with_lemmas_inst_6_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_6_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_6_tsni = function rewrite_with_lemmas_helper_inst_6_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_6_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_6_8_tsni(subst, rhs);
          return rewrite_inst_6_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_6_tsni(term, ls)
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
};
one_way_unify_inst_6_7_tsni = function one_way_unify_inst_6_7_tsni(term1, term2) {
  return one_way_unify1_inst_6_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_6_7_4_tsni = function one_way_unify1_inst_6_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_6_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_6_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_6_7_4_tsni = function one_way_unify1_lst_inst_6_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_6_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_6_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_6_7_4_1_tsni = function find_inst_6_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_6_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_6_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_6_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_6_8_tsni = function apply_subst_inst_6_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_6_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_6_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_6_8_5_tsni = function find_inst_6_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_6_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_6_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_6_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_9_tsni = function rewrite_inst_9_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_9_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_9_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_9_tsni = function rewrite_with_lemmas_inst_9_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_9_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_9_tsni = function rewrite_with_lemmas_helper_inst_9_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_9_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_9_8_tsni(subst, rhs);
          return rewrite_inst_9_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_9_tsni(term, ls)
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
};
one_way_unify_inst_9_7_tsni = function one_way_unify_inst_9_7_tsni(term1, term2) {
  return one_way_unify1_inst_9_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_9_7_4_tsni = function one_way_unify1_inst_9_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_9_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_9_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_9_7_4_tsni = function one_way_unify1_lst_inst_9_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_9_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_9_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_9_7_4_1_tsni = function find_inst_9_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_9_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_9_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_9_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_9_8_tsni = function apply_subst_inst_9_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_9_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_9_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_9_8_5_tsni = function find_inst_9_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_9_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_9_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_9_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_8_tsni = function apply_subst_inst_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_8_5_tsni = function find_inst_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify_inst_7_tsni = function one_way_unify_inst_7_tsni(term1, term2) {
  return one_way_unify1_inst_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_7_4_tsni = function one_way_unify1_inst_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_7_4_tsni = function one_way_unify1_lst_inst_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_7_4_1_tsni = function find_inst_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_10_tsni = function rewrite_inst_10_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_10_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_10_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_10_tsni = function rewrite_with_lemmas_inst_10_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_10_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_10_tsni = function rewrite_with_lemmas_helper_inst_10_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_10_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_10_8_tsni(subst, rhs);
          return rewrite_inst_10_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_10_tsni(term, ls)
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
};
one_way_unify_inst_10_7_tsni = function one_way_unify_inst_10_7_tsni(term1, term2) {
  return one_way_unify1_inst_10_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_10_7_4_tsni = function one_way_unify1_inst_10_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_10_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_10_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_10_7_4_tsni = function one_way_unify1_lst_inst_10_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_10_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_10_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_10_7_4_1_tsni = function find_inst_10_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_10_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_10_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_10_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_10_8_tsni = function apply_subst_inst_10_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_10_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_10_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_10_8_5_tsni = function find_inst_10_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_10_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_10_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_10_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_11_tsni = function rewrite_inst_11_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_11_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_11_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_11_tsni = function rewrite_with_lemmas_inst_11_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_11_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_11_tsni = function rewrite_with_lemmas_helper_inst_11_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_11_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_11_8_tsni(subst, rhs);
          return rewrite_inst_11_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_11_tsni(term, ls)
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
};
one_way_unify_inst_11_7_tsni = function one_way_unify_inst_11_7_tsni(term1, term2) {
  return one_way_unify1_inst_11_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_11_7_4_tsni = function one_way_unify1_inst_11_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_11_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_11_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_11_7_4_tsni = function one_way_unify1_lst_inst_11_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_11_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_11_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_11_7_4_1_tsni = function find_inst_11_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_11_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_11_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_11_8_tsni = function apply_subst_inst_11_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_11_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_11_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_11_8_5_tsni = function find_inst_11_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_11_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_11_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_11_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_12_tsni = function rewrite_inst_12_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_12_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_12_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_12_tsni = function rewrite_with_lemmas_inst_12_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_12_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_12_tsni = function rewrite_with_lemmas_helper_inst_12_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_12_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_12_8_tsni(subst, rhs);
          return rewrite_inst_12_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_12_tsni(term, ls)
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
};
one_way_unify_inst_12_7_tsni = function one_way_unify_inst_12_7_tsni(term1, term2) {
  return one_way_unify1_inst_12_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_12_7_4_tsni = function one_way_unify1_inst_12_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_12_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_12_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_12_7_4_tsni = function one_way_unify1_lst_inst_12_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_12_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_12_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_12_7_4_1_tsni = function find_inst_12_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_12_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_12_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_12_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_12_8_tsni = function apply_subst_inst_12_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_12_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_12_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_12_8_5_tsni = function find_inst_12_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_12_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_12_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_12_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_inst_13_tsni = function rewrite_inst_13_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_13_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_13_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_13_tsni = function rewrite_with_lemmas_inst_13_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_13_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_13_tsni = function rewrite_with_lemmas_helper_inst_13_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_13_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_13_8_tsni(subst, rhs);
          return rewrite_inst_13_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_13_tsni(term, ls)
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
};
one_way_unify_inst_13_7_tsni = function one_way_unify_inst_13_7_tsni(term1, term2) {
  return one_way_unify1_inst_13_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_13_7_4_tsni = function one_way_unify1_inst_13_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_13_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_13_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_13_7_4_tsni = function one_way_unify1_lst_inst_13_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_13_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_13_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_13_7_4_1_tsni = function find_inst_13_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_13_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_13_8_tsni = function apply_subst_inst_13_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_13_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_13_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_13_8_5_tsni = function find_inst_13_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_13_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_13_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_13_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
tautp_inst_14_tsni = function tautp_inst_14_tsni(x) {
  let tmp;
  tmp = rewrite_inst_14_13_tsni(x);
  return boyer.tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
};
rewrite_inst_14_13_tsni = function rewrite_inst_14_13_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_14_13_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_14_13_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_14_13_tsni = function rewrite_with_lemmas_inst_14_13_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_14_13_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_14_13_tsni = function rewrite_with_lemmas_helper_inst_14_13_tsni(term, lss) {
  let param0, param1, first1, first0, lhs, rhs, ls, scrut, first11, first01, unified, subst, tmp;
  if (lss instanceof NofibPrelude.Nil.class) {
    return term
  } else if (lss instanceof NofibPrelude.Cons.class) {
    param0 = lss.head;
    param1 = lss.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      lhs = first0;
      rhs = first1;
      ls = param1;
      scrut = one_way_unify_inst_14_13_7_tsni(term, lhs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first01 = scrut[0];
        first11 = scrut[1];
        unified = first01;
        subst = first11;
        if (unified === true) {
          tmp = apply_subst_inst_14_13_8_tsni(subst, rhs);
          return rewrite_inst_14_13_tsni(tmp)
        } else {
          return rewrite_with_lemmas_helper_inst_14_13_tsni(term, ls)
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
};
apply_subst_inst_14_13_8_tsni = function apply_subst_inst_14_13_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_14_13_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_14_13_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_14_13_8_5_tsni = function find_inst_14_13_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_14_13_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify_inst_14_13_7_tsni = function one_way_unify_inst_14_13_7_tsni(term1, term2) {
  return one_way_unify1_inst_14_13_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_14_13_7_4_tsni = function one_way_unify1_inst_14_13_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_14_13_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_14_13_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_14_13_7_4_tsni = function one_way_unify1_lst_inst_14_13_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_14_13_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_14_13_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_14_13_7_4_1_tsni = function find_inst_14_13_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_14_13_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_15_tsni = function apply_subst_inst_15_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_15_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_15_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_15_5_tsni = function find_inst_15_5_tsni(vid, ls) {
  return runtime.safeCall(ls(vid))
};
test0_inst_16_tsni = function test0_inst_16_tsni(xxxx) {
  let quotient, if_, sub1, plus, f, implies, times, exp_, gcd_, difference, nlistp, one, remainder, four, and_, reverse_, greaterp, or_, odd_, two, lessp, cons, add1, divides, nilp, listp, consp, lesseqp, equal, append_, greatereqp, member, zerop, not_, iff, length_, even_, a, b, c, d, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, subst0, theorem, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, arr, tmp21, tmp22, tmp23, tmp24, arr1, tmp25, tmp26, tmp27, tmp28, arr2, tmp29, tmp30, tmp31, arr3, tmp32, tmp33, tmp34, tmp35, arr4, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, lambda, lambda1, lambda2, lambda3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
  one = function one() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = one();
      tmp54 = add1(zero);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp54;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.ONE, NofibPrelude.Nil, tmp52))
  };
  two = function two() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = two();
      tmp54 = one();
      tmp55 = add1(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.TWO, NofibPrelude.Nil, tmp52))
  };
  four = function four() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, tmp55, tmp56, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = four();
      tmp54 = two();
      tmp55 = add1(tmp54);
      tmp56 = add1(tmp55);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.FOUR, NofibPrelude.Nil, tmp52))
  };
  add1 = function add1(a1) {
    let tmp51, tmp52, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      }
    });
    tmp52 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.ADD1, tmp51, tmp52))
  };
  if_ = function if_(a1, b1, c1) {
    let tmp51, tmp52, tmp53, tmp54, tmp55, lambda4;
    tmp51 = NofibPrelude.Cons(c1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(b1, tmp51);
    tmp53 = NofibPrelude.Cons(a1, tmp52);
    lambda4 = (undefined, function () {
      let tmp56, tmp57, tmp58, tmp59, tmp60, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp56 = if_(x, y, z);
      tmp57 = if_(tmp56, u, w);
      tmp58 = if_(y, u, w);
      tmp59 = if_(z, u, w);
      tmp60 = if_(x, tmp58, tmp59);
      _deforest_Deforest_Arr_2_05 = tmp57;
      _deforest_Deforest_Arr_2_15 = tmp60;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp54 = lambda4;
    tmp55 = NofibPrelude.lazy(tmp54);
    return runtime.safeCall(boyer.Fun(boyer.IF, tmp53, tmp55))
  };
  not_ = function not_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = not_(x);
      tmp55 = if_(x, boyerFalse, boyerTrue);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NOT, tmp51, tmp53))
  };
  and_ = function and_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = and_(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, tmp56, boyerFalse);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.AND, tmp52, tmp54))
  };
  append_ = function append_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = append_(x, y);
      tmp56 = append_(tmp55, z);
      tmp57 = append_(y, z);
      tmp58 = append_(x, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.APPEND, tmp52, tmp54))
  };
  cons = function cons(a1, b1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      }
    });
    tmp53 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.CONS, tmp52, tmp53))
  };
  consp = function consp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = cons(x, y);
      tmp55 = consp(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = boyerTrue;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.CONSP, tmp51, tmp53))
  };
  difference = function difference(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, arr5, tmp56, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, tmp62, tmp63, arr8, tmp64, tmp65, tmp66, tmp67, arr9, tmp68, tmp69, tmp70, tmp71, arr10, tmp72, tmp73, tmp74, tmp75, arr11, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
      tmp55 = difference(x, x);
      _deforest_Deforest_Arr_2_011 = tmp55;
      _deforest_Deforest_Arr_2_111 = zero;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
      };
      tmp56 = plus(x, y);
      tmp57 = difference(tmp56, x);
      _deforest_Deforest_Arr_2_010 = tmp57;
      _deforest_Deforest_Arr_2_110 = y;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
      };
      tmp58 = plus(y, x);
      tmp59 = difference(tmp58, x);
      _deforest_Deforest_Arr_2_09 = tmp59;
      _deforest_Deforest_Arr_2_19 = y;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp60 = plus(x, y);
      tmp61 = plus(x, z);
      tmp62 = difference(tmp60, tmp61);
      tmp63 = difference(y, z);
      _deforest_Deforest_Arr_2_08 = tmp62;
      _deforest_Deforest_Arr_2_18 = tmp63;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp64 = plus(x, z);
      tmp65 = plus(y, tmp64);
      tmp66 = difference(tmp65, x);
      tmp67 = plus(y, z);
      _deforest_Deforest_Arr_2_07 = tmp66;
      _deforest_Deforest_Arr_2_17 = tmp67;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp68 = plus(y, z);
      tmp69 = add1(tmp68);
      tmp70 = difference(tmp69, z);
      tmp71 = add1(y);
      _deforest_Deforest_Arr_2_06 = tmp70;
      _deforest_Deforest_Arr_2_16 = tmp71;
      arr10 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp72 = add1(x);
      tmp73 = add1(tmp72);
      tmp74 = two();
      tmp75 = difference(tmp73, tmp74);
      _deforest_Deforest_Arr_2_05 = tmp75;
      _deforest_Deforest_Arr_2_15 = x;
      arr11 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head11 = arr11;
      _deforest_Cons_tail11 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp76 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head11, _deforest_Cons_tail11)
      };
      _deforest_Cons_head10 = arr10;
      _deforest_Cons_tail10 = tmp76;
      tmp77 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head10, _deforest_Cons_tail10)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = tmp77;
      tmp78 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp78;
      tmp79 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp79;
      tmp80 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp80;
      tmp81 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp81;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.DIFFERENCE, tmp52, tmp54))
  };
  divides = function divides(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = divides(x, y);
      tmp56 = remainder(y, x);
      tmp57 = zerop(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.DIVIDES, tmp52, tmp54))
  };
  equal = function equal(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, arr7, tmp68, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75, tmp76, tmp77, arr9, tmp78, tmp79, tmp80, tmp81, arr10, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, arr11, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, arr12, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, arr13, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, arr14, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, arr15, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Cons_head12, _deforest_Cons_tail12, _deforest_Cons_head13, _deforest_Cons_tail13, _deforest_Cons_head14, _deforest_Cons_tail14, _deforest_Cons_head15, _deforest_Cons_tail15, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111, _deforest_Deforest_Arr_2_012, _deforest_Deforest_Arr_2_112, _deforest_Deforest_Arr_2_013, _deforest_Deforest_Arr_2_113, _deforest_Deforest_Arr_2_014, _deforest_Deforest_Arr_2_114, _deforest_Deforest_Arr_2_015, _deforest_Deforest_Arr_2_115;
      tmp55 = plus(x, y);
      tmp56 = equal(tmp55, zero);
      tmp57 = zerop(x);
      tmp58 = zerop(y);
      tmp59 = and_(tmp57, tmp58);
      _deforest_Deforest_Arr_2_015 = tmp56;
      _deforest_Deforest_Arr_2_115 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_015, _deforest_Deforest_Arr_2_115)
      };
      tmp60 = plus(x, y);
      tmp61 = plus(x, z);
      tmp62 = equal(tmp60, tmp61);
      tmp63 = equal(y, z);
      _deforest_Deforest_Arr_2_014 = tmp62;
      _deforest_Deforest_Arr_2_114 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_014, _deforest_Deforest_Arr_2_114)
      };
      tmp64 = difference(x, y);
      tmp65 = equal(zero, tmp64);
      tmp66 = lessp(y, x);
      tmp67 = not_(tmp66);
      _deforest_Deforest_Arr_2_013 = tmp65;
      _deforest_Deforest_Arr_2_113 = tmp67;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_013, _deforest_Deforest_Arr_2_113)
      };
      tmp68 = difference(x, y);
      tmp69 = equal(x, tmp68);
      tmp70 = equal(x, zero);
      tmp71 = zerop(y);
      tmp72 = or_(tmp70, tmp71);
      _deforest_Deforest_Arr_2_012 = tmp69;
      _deforest_Deforest_Arr_2_112 = tmp72;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_012, _deforest_Deforest_Arr_2_112)
      };
      tmp73 = times(x, y);
      tmp74 = equal(tmp73, zero);
      tmp75 = zerop(x);
      tmp76 = zerop(y);
      tmp77 = or_(tmp75, tmp76);
      _deforest_Deforest_Arr_2_011 = tmp74;
      _deforest_Deforest_Arr_2_111 = tmp77;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
      };
      tmp78 = append_(x, y);
      tmp79 = append_(x, z);
      tmp80 = equal(tmp78, tmp79);
      tmp81 = equal(y, z);
      _deforest_Deforest_Arr_2_010 = tmp80;
      _deforest_Deforest_Arr_2_110 = tmp81;
      arr10 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
      };
      tmp82 = times(x, y);
      tmp83 = equal(y, tmp82);
      tmp84 = equal(y, zero);
      tmp85 = one();
      tmp86 = equal(x, tmp85);
      tmp87 = or_(tmp84, tmp86);
      _deforest_Deforest_Arr_2_09 = tmp83;
      _deforest_Deforest_Arr_2_19 = tmp87;
      arr11 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp88 = times(x, y);
      tmp89 = equal(x, tmp88);
      tmp90 = equal(x, zero);
      tmp91 = one();
      tmp92 = equal(y, tmp91);
      tmp93 = or_(tmp90, tmp92);
      _deforest_Deforest_Arr_2_08 = tmp89;
      _deforest_Deforest_Arr_2_18 = tmp93;
      arr12 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp94 = times(x, y);
      tmp95 = one();
      tmp96 = equal(tmp94, tmp95);
      tmp97 = one();
      tmp98 = equal(x, tmp97);
      tmp99 = one();
      tmp100 = equal(y, tmp99);
      tmp101 = and_(tmp98, tmp100);
      _deforest_Deforest_Arr_2_07 = tmp96;
      _deforest_Deforest_Arr_2_17 = tmp101;
      arr13 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp102 = difference(x, y);
      tmp103 = difference(z, y);
      tmp104 = equal(tmp102, tmp103);
      tmp105 = lessp(x, y);
      tmp106 = lessp(y, z);
      tmp107 = not_(tmp106);
      tmp108 = lessp(z, y);
      tmp109 = lessp(y, x);
      tmp110 = not_(tmp109);
      tmp111 = equal(x, z);
      tmp112 = if_(tmp108, tmp110, tmp111);
      tmp113 = if_(tmp105, tmp107, tmp112);
      _deforest_Deforest_Arr_2_06 = tmp104;
      _deforest_Deforest_Arr_2_16 = tmp113;
      arr14 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp114 = lessp(x, y);
      tmp115 = equal(tmp114, z);
      tmp116 = lessp(x, y);
      tmp117 = equal(boyerTrue, z);
      tmp118 = equal(boyerFalse, z);
      tmp119 = if_(tmp116, tmp117, tmp118);
      _deforest_Deforest_Arr_2_05 = tmp115;
      _deforest_Deforest_Arr_2_15 = tmp119;
      arr15 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head15 = arr15;
      _deforest_Cons_tail15 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp120 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head15, _deforest_Cons_tail15)
      };
      _deforest_Cons_head14 = arr14;
      _deforest_Cons_tail14 = tmp120;
      tmp121 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head14, _deforest_Cons_tail14)
      };
      _deforest_Cons_head13 = arr13;
      _deforest_Cons_tail13 = tmp121;
      tmp122 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head13, _deforest_Cons_tail13)
      };
      _deforest_Cons_head12 = arr12;
      _deforest_Cons_tail12 = tmp122;
      tmp123 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head12, _deforest_Cons_tail12)
      };
      _deforest_Cons_head11 = arr11;
      _deforest_Cons_tail11 = tmp123;
      tmp124 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head11, _deforest_Cons_tail11)
      };
      _deforest_Cons_head10 = arr10;
      _deforest_Cons_tail10 = tmp124;
      tmp125 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head10, _deforest_Cons_tail10)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = tmp125;
      tmp126 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp126;
      tmp127 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp127;
      tmp128 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp128;
      tmp129 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp129;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.EQUAL, tmp52, tmp54))
  };
  even_ = function even_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = even_(x);
      tmp55 = zerop(x);
      tmp56 = sub1(x);
      tmp57 = odd_(tmp56);
      tmp58 = if_(tmp55, boyerTrue, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.EVEN, tmp51, tmp53))
  };
  exp_ = function exp_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = plus(y, z);
      tmp56 = exp_(x, tmp55);
      tmp57 = exp_(x, y);
      tmp58 = exp_(x, z);
      tmp59 = times(tmp57, tmp58);
      _deforest_Deforest_Arr_2_06 = tmp56;
      _deforest_Deforest_Arr_2_16 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp60 = times(y, z);
      tmp61 = exp_(x, tmp60);
      tmp62 = exp_(x, y);
      tmp63 = exp_(tmp62, z);
      _deforest_Deforest_Arr_2_05 = tmp61;
      _deforest_Deforest_Arr_2_15 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp64 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp64;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.EXP, tmp52, tmp54))
  };
  f = function f(a1) {
    let tmp51, tmp52, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      }
    });
    tmp52 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.F, tmp51, tmp52))
  };
  gcd_ = function gcd_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, arr6, tmp62, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = gcd_(x, y);
      tmp56 = gcd_(y, x);
      _deforest_Deforest_Arr_2_06 = tmp55;
      _deforest_Deforest_Arr_2_16 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp57 = times(x, z);
      tmp58 = times(y, z);
      tmp59 = gcd_(tmp57, tmp58);
      tmp60 = gcd_(x, y);
      tmp61 = times(z, tmp60);
      _deforest_Deforest_Arr_2_05 = tmp59;
      _deforest_Deforest_Arr_2_15 = tmp61;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp62 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp62;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GCD, tmp52, tmp54))
  };
  greatereqp = function greatereqp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = greatereqp(x, y);
      tmp56 = lessp(x, y);
      tmp57 = not_(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GREATEREQP, tmp52, tmp54))
  };
  greaterp = function greaterp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5;
      tmp55 = greaterp(x, y);
      tmp56 = lessp(y, x);
      arr5 = [
        tmp55,
        tmp56
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GREATERP, tmp52, tmp54))
  };
  implies = function implies(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = implies(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, tmp56, boyerTrue);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.IMPLIES, tmp52, tmp54))
  };
  iff = function iff(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5;
      tmp55 = iff(x, y);
      tmp56 = implies(x, y);
      tmp57 = implies(y, x);
      tmp58 = and_(tmp56, tmp57);
      arr5 = [
        tmp55,
        tmp58
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.IFF, tmp52, tmp54))
  };
  length_ = function length_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, arr6, tmp65, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp54 = reverse_(x);
      tmp55 = length_(tmp54);
      tmp56 = length_(x);
      _deforest_Deforest_Arr_2_06 = tmp55;
      _deforest_Deforest_Arr_2_16 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp57 = cons(u, w);
      tmp58 = cons(z, tmp57);
      tmp59 = cons(y, tmp58);
      tmp60 = cons(x, tmp59);
      tmp61 = length_(tmp60);
      tmp62 = four();
      tmp63 = length_(w);
      tmp64 = plus(tmp62, tmp63);
      _deforest_Deforest_Arr_2_05 = tmp61;
      _deforest_Deforest_Arr_2_15 = tmp64;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp65 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp65;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.LENGTH, tmp51, tmp53))
  };
  lesseqp = function lesseqp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = lesseqp(x, y);
      tmp56 = lessp(y, x);
      tmp57 = not_(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.LESSEQP, tmp52, tmp54))
  };
  lessp = function lessp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, arr6, tmp66, tmp67, tmp68, tmp69, arr7, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, arr8, tmp77, tmp78, tmp79, tmp80, arr9, tmp81, tmp82, tmp83, tmp84, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19;
      tmp55 = remainder(x, y);
      tmp56 = lessp(tmp55, y);
      tmp57 = zerop(y);
      tmp58 = not_(tmp57);
      _deforest_Deforest_Arr_2_09 = tmp56;
      _deforest_Deforest_Arr_2_19 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp59 = quotient(x, y);
      tmp60 = lessp(tmp59, x);
      tmp61 = zerop(x);
      tmp62 = not_(tmp61);
      tmp63 = one();
      tmp64 = lessp(tmp63, y);
      tmp65 = and_(tmp62, tmp64);
      _deforest_Deforest_Arr_2_08 = tmp60;
      _deforest_Deforest_Arr_2_18 = tmp65;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp66 = plus(x, y);
      tmp67 = plus(x, z);
      tmp68 = lessp(tmp66, tmp67);
      tmp69 = lessp(y, z);
      _deforest_Deforest_Arr_2_07 = tmp68;
      _deforest_Deforest_Arr_2_17 = tmp69;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp70 = times(x, z);
      tmp71 = times(y, z);
      tmp72 = lessp(tmp70, tmp71);
      tmp73 = zerop(z);
      tmp74 = not_(tmp73);
      tmp75 = lessp(x, y);
      tmp76 = and_(tmp74, tmp75);
      _deforest_Deforest_Arr_2_06 = tmp72;
      _deforest_Deforest_Arr_2_16 = tmp76;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp77 = plus(x, y);
      tmp78 = lessp(y, tmp77);
      tmp79 = zerop(x);
      tmp80 = not_(tmp79);
      _deforest_Deforest_Arr_2_05 = tmp78;
      _deforest_Deforest_Arr_2_15 = tmp80;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp81 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp81;
      tmp82 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp82;
      tmp83 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp83;
      tmp84 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp84;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.LESSP, tmp52, tmp54))
  };
  nilp = function nilp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = nilp(x);
      tmp55 = equal(x, nil);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NILP, tmp51, tmp53))
  };
  listp = function listp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = listp(x);
      tmp55 = nilp(x);
      tmp56 = consp(x);
      tmp57 = or_(tmp55, tmp56);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.LISTP, tmp51, tmp53))
  };
  member = function member(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, arr6, tmp63, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = append_(y, z);
      tmp56 = member(x, tmp55);
      tmp57 = member(x, y);
      tmp58 = member(x, z);
      tmp59 = or_(tmp57, tmp58);
      _deforest_Deforest_Arr_2_06 = tmp56;
      _deforest_Deforest_Arr_2_16 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp60 = reverse_(y);
      tmp61 = member(x, tmp60);
      tmp62 = member(x, y);
      _deforest_Deforest_Arr_2_05 = tmp61;
      _deforest_Deforest_Arr_2_15 = tmp62;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp63 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp63;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.MEMBER, tmp52, tmp54))
  };
  nlistp = function nlistp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5;
      tmp54 = nlistp(x);
      tmp55 = listp(x);
      tmp56 = not_(tmp55);
      arr5 = [
        tmp54,
        tmp56
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NLISTP, tmp51, tmp53))
  };
  odd_ = function odd_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = odd_(x);
      tmp55 = sub1(x);
      tmp56 = even_(tmp55);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.ODD, tmp51, tmp53))
  };
  or_ = function or_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = or_(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, boyerTrue, tmp56);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.OR, tmp52, tmp54))
  };
  plus = function plus(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, arr6, tmp63, tmp64, tmp65, tmp66, arr7, tmp67, tmp68, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17;
      tmp55 = plus(x, y);
      tmp56 = plus(tmp55, z);
      tmp57 = plus(y, z);
      tmp58 = plus(x, tmp57);
      _deforest_Deforest_Arr_2_07 = tmp56;
      _deforest_Deforest_Arr_2_17 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp59 = remainder(x, y);
      tmp60 = quotient(x, y);
      tmp61 = times(y, tmp60);
      tmp62 = plus(tmp59, tmp61);
      _deforest_Deforest_Arr_2_06 = tmp62;
      _deforest_Deforest_Arr_2_16 = x;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp63 = add1(y);
      tmp64 = plus(x, tmp63);
      tmp65 = plus(x, y);
      tmp66 = add1(tmp65);
      _deforest_Deforest_Arr_2_05 = tmp64;
      _deforest_Deforest_Arr_2_15 = tmp66;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp67 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp67;
      tmp68 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp68;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.PLUS, tmp52, tmp54))
  };
  quotient = function quotient(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr5, tmp62, tmp63, tmp64, tmp65, arr6, tmp66, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = plus(x, y);
      tmp56 = plus(x, tmp55);
      tmp57 = two();
      tmp58 = quotient(tmp56, tmp57);
      tmp59 = two();
      tmp60 = quotient(y, tmp59);
      tmp61 = plus(x, tmp60);
      _deforest_Deforest_Arr_2_06 = tmp58;
      _deforest_Deforest_Arr_2_16 = tmp61;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp62 = times(y, x);
      tmp63 = quotient(tmp62, y);
      tmp64 = zerop(y);
      tmp65 = if_(tmp64, zero, x);
      _deforest_Deforest_Arr_2_05 = tmp63;
      _deforest_Deforest_Arr_2_15 = tmp65;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp66 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp66;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.QUOTIENT, tmp52, tmp54))
  };
  remainder = function remainder(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, arr8, tmp62, tmp63, tmp64, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp55 = one();
      tmp56 = remainder(x, tmp55);
      _deforest_Deforest_Arr_2_08 = tmp56;
      _deforest_Deforest_Arr_2_18 = zero;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp57 = remainder(x, x);
      _deforest_Deforest_Arr_2_07 = tmp57;
      _deforest_Deforest_Arr_2_17 = zero;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp58 = times(x, y);
      tmp59 = remainder(tmp58, x);
      _deforest_Deforest_Arr_2_06 = tmp59;
      _deforest_Deforest_Arr_2_16 = zero;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp60 = times(x, y);
      tmp61 = remainder(tmp60, y);
      _deforest_Deforest_Arr_2_05 = tmp61;
      _deforest_Deforest_Arr_2_15 = zero;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp62 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp62;
      tmp63 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp63;
      tmp64 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp64;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.REMAINDER, tmp52, tmp54))
  };
  reverse_ = function reverse_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = append_(x, y);
      tmp55 = reverse_(tmp54);
      tmp56 = reverse_(y);
      tmp57 = reverse_(x);
      tmp58 = append_(tmp56, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.REVERSE, tmp51, tmp53))
  };
  sub1 = function sub1(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = add1(x);
      tmp55 = sub1(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = x;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.SUB1, tmp51, tmp53))
  };
  times = function times(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, tmp68, arr7, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp55 = plus(y, z);
      tmp56 = times(x, tmp55);
      tmp57 = times(x, y);
      tmp58 = times(x, z);
      tmp59 = plus(tmp57, tmp58);
      _deforest_Deforest_Arr_2_08 = tmp56;
      _deforest_Deforest_Arr_2_18 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp60 = times(x, y);
      tmp61 = times(tmp60, z);
      tmp62 = times(y, z);
      tmp63 = times(x, tmp62);
      _deforest_Deforest_Arr_2_07 = tmp61;
      _deforest_Deforest_Arr_2_17 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp64 = difference(y, z);
      tmp65 = times(x, tmp64);
      tmp66 = times(y, x);
      tmp67 = times(z, x);
      tmp68 = difference(tmp66, tmp67);
      _deforest_Deforest_Arr_2_06 = tmp65;
      _deforest_Deforest_Arr_2_16 = tmp68;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp69 = add1(y);
      tmp70 = times(x, tmp69);
      tmp71 = times(x, y);
      tmp72 = plus(x, tmp71);
      _deforest_Deforest_Arr_2_05 = tmp70;
      _deforest_Deforest_Arr_2_15 = tmp72;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      tmp73 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp73;
      tmp74 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp74;
      tmp75 = (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp75;
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.TIMES, tmp52, tmp54))
  };
  zerop = function zerop(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = zerop(x);
      tmp55 = equal(x, zero);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.ZEROP, tmp51, tmp53))
  };
  tmp = runtime.safeCall(boyer.Var(boyer.A));
  a = tmp;
  tmp1 = runtime.safeCall(boyer.Var(boyer.B));
  b = tmp1;
  tmp2 = runtime.safeCall(boyer.Var(boyer.C));
  c = tmp2;
  tmp3 = runtime.safeCall(boyer.Var(boyer.D));
  d = tmp3;
  tmp4 = runtime.safeCall(boyer.Var(boyer.U));
  u = tmp4;
  tmp5 = runtime.safeCall(boyer.Var(boyer.W));
  w = tmp5;
  tmp6 = runtime.safeCall(boyer.Var(boyer.X));
  x = tmp6;
  tmp7 = runtime.safeCall(boyer.Var(boyer.Y));
  y = tmp7;
  tmp8 = runtime.safeCall(boyer.Var(boyer.Z));
  z = tmp8;
  lambda = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_16_14_13_tsni(term)
    }
  });
  tmp9 = NofibPrelude.lazy(lambda);
  tmp10 = runtime.safeCall(boyer.Fun(boyer.FALSE, NofibPrelude.Nil, tmp9));
  boyerFalse = tmp10;
  lambda1 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_16_14_13_tsni(term)
    }
  });
  tmp11 = NofibPrelude.lazy(lambda1);
  tmp12 = runtime.safeCall(boyer.Fun(boyer.NIL, NofibPrelude.Nil, tmp11));
  nil = tmp12;
  lambda2 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_16_14_13_tsni(term)
    }
  });
  tmp13 = NofibPrelude.lazy(lambda2);
  tmp14 = runtime.safeCall(boyer.Fun(boyer.TRUE, NofibPrelude.Nil, tmp13));
  boyerTrue = tmp14;
  lambda3 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_16_14_13_tsni(term)
    }
  });
  tmp15 = NofibPrelude.lazy(lambda3);
  tmp16 = runtime.safeCall(boyer.Fun(boyer.ZERO, NofibPrelude.Nil, tmp15));
  zero = tmp16;
  tmp17 = plus(a, b);
  tmp18 = plus(c, zero);
  tmp19 = plus(tmp17, tmp18);
  tmp20 = f(tmp19);
  _deforest_Deforest_Arr_2_04 = boyer.X;
  _deforest_Deforest_Arr_2_14 = tmp20;
  arr = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
  };
  tmp21 = times(a, b);
  tmp22 = plus(c, d);
  tmp23 = times(tmp21, tmp22);
  tmp24 = f(tmp23);
  _deforest_Deforest_Arr_2_03 = boyer.Y;
  _deforest_Deforest_Arr_2_13 = tmp24;
  arr1 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
  };
  tmp25 = append_(a, b);
  tmp26 = append_(tmp25, nil);
  tmp27 = reverse_(tmp26);
  tmp28 = f(tmp27);
  _deforest_Deforest_Arr_2_02 = boyer.Z;
  _deforest_Deforest_Arr_2_12 = tmp28;
  arr2 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp29 = plus(a, b);
  tmp30 = difference(x, y);
  tmp31 = equal(tmp29, tmp30);
  _deforest_Deforest_Arr_2_01 = boyer.U;
  _deforest_Deforest_Arr_2_11 = tmp31;
  arr3 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp32 = remainder(a, b);
  tmp33 = length_(b);
  tmp34 = member(a, tmp33);
  tmp35 = lessp(tmp32, tmp34);
  _deforest_Deforest_Arr_2_0 = boyer.W;
  _deforest_Deforest_Arr_2_1 = tmp35;
  arr4 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Cons_head4 = arr4;
  _deforest_Cons_tail4 = (vid) => {
    let arr5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
    _deforest_Deforest_Arr_2_05 = false;
    _deforest_Deforest_Arr_2_15 = boyer.ERROR;
    arr5 = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_16_15_tsni(vid1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
    };
    return arr5
  };
  tmp36 = (vid) => {
    return match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = arr3;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (vid) => {
    return match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = arr2;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (vid) => {
    return match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = arr1;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (vid) => {
    return match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp39;
  tmp40 = (vid) => {
    return match_ls_arm_Cons_inst_16_15_5_tsni(vid, _deforest_Cons_head, _deforest_Cons_tail)
  };
  subst0 = tmp40;
  tmp41 = implies(xxxx, y);
  tmp42 = implies(y, z);
  tmp43 = implies(z, u);
  tmp44 = implies(u, w);
  tmp45 = and_(tmp43, tmp44);
  tmp46 = and_(tmp42, tmp45);
  tmp47 = and_(tmp41, tmp46);
  tmp48 = implies(x, w);
  tmp49 = implies(tmp47, tmp48);
  theorem = tmp49;
  tmp50 = apply_subst_inst_16_15_tsni(subst0, theorem);
  return tautp_inst_16_14_tsni(tmp50)
};
apply_subst_inst_16_15_tsni = function apply_subst_inst_16_15_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_16_15_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_16_15_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_16_15_5_tsni = function find_inst_16_15_5_tsni(vid, ls) {
  return runtime.safeCall(ls(vid))
};
tautp_inst_16_14_tsni = function tautp_inst_16_14_tsni(x) {
  let tmp;
  tmp = rewrite_inst_16_14_13_tsni(x);
  return boyer.tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
};
rewrite_inst_16_14_13_tsni = function rewrite_inst_16_14_13_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_16_14_13_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_16_14_13_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_16_14_13_tsni = function rewrite_with_lemmas_inst_16_14_13_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_16_14_13_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_16_14_13_tsni = function rewrite_with_lemmas_helper_inst_16_14_13_tsni(term, lss) {
  return runtime.safeCall(lss(term))
};
one_way_unify_inst_16_14_13_7_tsni = function one_way_unify_inst_16_14_13_7_tsni(term1, term2) {
  return one_way_unify1_inst_16_14_13_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_16_14_13_7_4_tsni = function one_way_unify1_inst_16_14_13_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_16_14_13_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_16_14_13_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_16_14_13_7_4_tsni = function one_way_unify1_lst_inst_16_14_13_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_16_14_13_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_16_14_13_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_16_14_13_7_4_1_tsni = function find_inst_16_14_13_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_16_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_16_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_16_14_13_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_16_14_13_8_tsni = function apply_subst_inst_16_14_13_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_16_14_13_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_16_14_13_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_16_14_13_8_5_tsni = function find_inst_16_14_13_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_16_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_16_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_16_14_13_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_17_tsni = function replicate_inst_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (p) => {
      return true
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (p) => {
      let param0, param1, h, t, scrut1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      scrut1 = runtime.safeCall(p(h));
      if (scrut1 === true) {
        return all_inst_19_tsni(p, t)
      } else {
        return false
      }
    }
  }
};
testBoyer_nofib_inst_18_tsni = function testBoyer_nofib_inst_18_tsni(n) {
  let tmp, tmp1;
  tmp = runtime.safeCall(boyer.Var(boyer.X));
  tmp1 = replicate_inst_18_17_tsni(n, tmp);
  return all_inst_18_19_tsni(test0_inst_18_16_tsni, tmp1)
};
test0_inst_18_16_tsni = function test0_inst_18_16_tsni(xxxx) {
  let quotient, if_, sub1, plus, f, implies, times, exp_, gcd_, difference, nlistp, one, remainder, four, and_, reverse_, greaterp, or_, odd_, two, lessp, cons, add1, divides, nilp, listp, consp, lesseqp, equal, append_, greatereqp, member, zerop, not_, iff, length_, even_, a, b, c, d, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, subst0, theorem, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, arr, tmp21, tmp22, tmp23, tmp24, arr1, tmp25, tmp26, tmp27, tmp28, arr2, tmp29, tmp30, tmp31, arr3, tmp32, tmp33, tmp34, tmp35, arr4, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, lambda, lambda1, lambda2, lambda3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
  one = function one() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = one();
      tmp54 = add1(zero);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp54;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.ONE, NofibPrelude.Nil, tmp52))
  };
  two = function two() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = two();
      tmp54 = one();
      tmp55 = add1(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.TWO, NofibPrelude.Nil, tmp52))
  };
  four = function four() {
    let tmp51, tmp52, lambda4;
    lambda4 = (undefined, function () {
      let tmp53, tmp54, tmp55, tmp56, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp53 = four();
      tmp54 = two();
      tmp55 = add1(tmp54);
      tmp56 = add1(tmp55);
      _deforest_Deforest_Arr_2_05 = tmp53;
      _deforest_Deforest_Arr_2_15 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp51 = lambda4;
    tmp52 = NofibPrelude.lazy(tmp51);
    return runtime.safeCall(boyer.Fun(boyer.FOUR, NofibPrelude.Nil, tmp52))
  };
  add1 = function add1(a1) {
    let tmp51, tmp52, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      }
    });
    tmp52 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.ADD1, tmp51, tmp52))
  };
  if_ = function if_(a1, b1, c1) {
    let tmp51, tmp52, tmp53, tmp54, tmp55, lambda4;
    tmp51 = NofibPrelude.Cons(c1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(b1, tmp51);
    tmp53 = NofibPrelude.Cons(a1, tmp52);
    lambda4 = (undefined, function () {
      let tmp56, tmp57, tmp58, tmp59, tmp60, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp56 = if_(x, y, z);
      tmp57 = if_(tmp56, u, w);
      tmp58 = if_(y, u, w);
      tmp59 = if_(z, u, w);
      tmp60 = if_(x, tmp58, tmp59);
      _deforest_Deforest_Arr_2_05 = tmp57;
      _deforest_Deforest_Arr_2_15 = tmp60;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp54 = lambda4;
    tmp55 = NofibPrelude.lazy(tmp54);
    return runtime.safeCall(boyer.Fun(boyer.IF, tmp53, tmp55))
  };
  not_ = function not_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = not_(x);
      tmp55 = if_(x, boyerFalse, boyerTrue);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NOT, tmp51, tmp53))
  };
  and_ = function and_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = and_(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, tmp56, boyerFalse);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.AND, tmp52, tmp54))
  };
  append_ = function append_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = append_(x, y);
      tmp56 = append_(tmp55, z);
      tmp57 = append_(y, z);
      tmp58 = append_(x, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.APPEND, tmp52, tmp54))
  };
  cons = function cons(a1, b1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      }
    });
    tmp53 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.CONS, tmp52, tmp53))
  };
  consp = function consp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = cons(x, y);
      tmp55 = consp(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = boyerTrue;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.CONSP, tmp51, tmp53))
  };
  difference = function difference(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, arr5, tmp56, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, tmp62, tmp63, arr8, tmp64, tmp65, tmp66, tmp67, arr9, tmp68, tmp69, tmp70, tmp71, arr10, tmp72, tmp73, tmp74, tmp75, arr11, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
      tmp55 = difference(x, x);
      _deforest_Deforest_Arr_2_011 = tmp55;
      _deforest_Deforest_Arr_2_111 = zero;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
      };
      tmp56 = plus(x, y);
      tmp57 = difference(tmp56, x);
      _deforest_Deforest_Arr_2_010 = tmp57;
      _deforest_Deforest_Arr_2_110 = y;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
      };
      tmp58 = plus(y, x);
      tmp59 = difference(tmp58, x);
      _deforest_Deforest_Arr_2_09 = tmp59;
      _deforest_Deforest_Arr_2_19 = y;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp60 = plus(x, y);
      tmp61 = plus(x, z);
      tmp62 = difference(tmp60, tmp61);
      tmp63 = difference(y, z);
      _deforest_Deforest_Arr_2_08 = tmp62;
      _deforest_Deforest_Arr_2_18 = tmp63;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp64 = plus(x, z);
      tmp65 = plus(y, tmp64);
      tmp66 = difference(tmp65, x);
      tmp67 = plus(y, z);
      _deforest_Deforest_Arr_2_07 = tmp66;
      _deforest_Deforest_Arr_2_17 = tmp67;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp68 = plus(y, z);
      tmp69 = add1(tmp68);
      tmp70 = difference(tmp69, z);
      tmp71 = add1(y);
      _deforest_Deforest_Arr_2_06 = tmp70;
      _deforest_Deforest_Arr_2_16 = tmp71;
      arr10 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp72 = add1(x);
      tmp73 = add1(tmp72);
      tmp74 = two();
      tmp75 = difference(tmp73, tmp74);
      _deforest_Deforest_Arr_2_05 = tmp75;
      _deforest_Deforest_Arr_2_15 = x;
      arr11 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head11 = arr11;
      _deforest_Cons_tail11 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp76 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head11, _deforest_Cons_tail11)
      };
      _deforest_Cons_head10 = arr10;
      _deforest_Cons_tail10 = tmp76;
      tmp77 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head10, _deforest_Cons_tail10)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = tmp77;
      tmp78 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp78;
      tmp79 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp79;
      tmp80 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp80;
      tmp81 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp81;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.DIFFERENCE, tmp52, tmp54))
  };
  divides = function divides(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = divides(x, y);
      tmp56 = remainder(y, x);
      tmp57 = zerop(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.DIVIDES, tmp52, tmp54))
  };
  equal = function equal(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, arr7, tmp68, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75, tmp76, tmp77, arr9, tmp78, tmp79, tmp80, tmp81, arr10, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, arr11, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, arr12, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, arr13, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, arr14, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, arr15, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Cons_head12, _deforest_Cons_tail12, _deforest_Cons_head13, _deforest_Cons_tail13, _deforest_Cons_head14, _deforest_Cons_tail14, _deforest_Cons_head15, _deforest_Cons_tail15, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111, _deforest_Deforest_Arr_2_012, _deforest_Deforest_Arr_2_112, _deforest_Deforest_Arr_2_013, _deforest_Deforest_Arr_2_113, _deforest_Deforest_Arr_2_014, _deforest_Deforest_Arr_2_114, _deforest_Deforest_Arr_2_015, _deforest_Deforest_Arr_2_115;
      tmp55 = plus(x, y);
      tmp56 = equal(tmp55, zero);
      tmp57 = zerop(x);
      tmp58 = zerop(y);
      tmp59 = and_(tmp57, tmp58);
      _deforest_Deforest_Arr_2_015 = tmp56;
      _deforest_Deforest_Arr_2_115 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_015, _deforest_Deforest_Arr_2_115)
      };
      tmp60 = plus(x, y);
      tmp61 = plus(x, z);
      tmp62 = equal(tmp60, tmp61);
      tmp63 = equal(y, z);
      _deforest_Deforest_Arr_2_014 = tmp62;
      _deforest_Deforest_Arr_2_114 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_014, _deforest_Deforest_Arr_2_114)
      };
      tmp64 = difference(x, y);
      tmp65 = equal(zero, tmp64);
      tmp66 = lessp(y, x);
      tmp67 = not_(tmp66);
      _deforest_Deforest_Arr_2_013 = tmp65;
      _deforest_Deforest_Arr_2_113 = tmp67;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_013, _deforest_Deforest_Arr_2_113)
      };
      tmp68 = difference(x, y);
      tmp69 = equal(x, tmp68);
      tmp70 = equal(x, zero);
      tmp71 = zerop(y);
      tmp72 = or_(tmp70, tmp71);
      _deforest_Deforest_Arr_2_012 = tmp69;
      _deforest_Deforest_Arr_2_112 = tmp72;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_012, _deforest_Deforest_Arr_2_112)
      };
      tmp73 = times(x, y);
      tmp74 = equal(tmp73, zero);
      tmp75 = zerop(x);
      tmp76 = zerop(y);
      tmp77 = or_(tmp75, tmp76);
      _deforest_Deforest_Arr_2_011 = tmp74;
      _deforest_Deforest_Arr_2_111 = tmp77;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
      };
      tmp78 = append_(x, y);
      tmp79 = append_(x, z);
      tmp80 = equal(tmp78, tmp79);
      tmp81 = equal(y, z);
      _deforest_Deforest_Arr_2_010 = tmp80;
      _deforest_Deforest_Arr_2_110 = tmp81;
      arr10 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
      };
      tmp82 = times(x, y);
      tmp83 = equal(y, tmp82);
      tmp84 = equal(y, zero);
      tmp85 = one();
      tmp86 = equal(x, tmp85);
      tmp87 = or_(tmp84, tmp86);
      _deforest_Deforest_Arr_2_09 = tmp83;
      _deforest_Deforest_Arr_2_19 = tmp87;
      arr11 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp88 = times(x, y);
      tmp89 = equal(x, tmp88);
      tmp90 = equal(x, zero);
      tmp91 = one();
      tmp92 = equal(y, tmp91);
      tmp93 = or_(tmp90, tmp92);
      _deforest_Deforest_Arr_2_08 = tmp89;
      _deforest_Deforest_Arr_2_18 = tmp93;
      arr12 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp94 = times(x, y);
      tmp95 = one();
      tmp96 = equal(tmp94, tmp95);
      tmp97 = one();
      tmp98 = equal(x, tmp97);
      tmp99 = one();
      tmp100 = equal(y, tmp99);
      tmp101 = and_(tmp98, tmp100);
      _deforest_Deforest_Arr_2_07 = tmp96;
      _deforest_Deforest_Arr_2_17 = tmp101;
      arr13 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp102 = difference(x, y);
      tmp103 = difference(z, y);
      tmp104 = equal(tmp102, tmp103);
      tmp105 = lessp(x, y);
      tmp106 = lessp(y, z);
      tmp107 = not_(tmp106);
      tmp108 = lessp(z, y);
      tmp109 = lessp(y, x);
      tmp110 = not_(tmp109);
      tmp111 = equal(x, z);
      tmp112 = if_(tmp108, tmp110, tmp111);
      tmp113 = if_(tmp105, tmp107, tmp112);
      _deforest_Deforest_Arr_2_06 = tmp104;
      _deforest_Deforest_Arr_2_16 = tmp113;
      arr14 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp114 = lessp(x, y);
      tmp115 = equal(tmp114, z);
      tmp116 = lessp(x, y);
      tmp117 = equal(boyerTrue, z);
      tmp118 = equal(boyerFalse, z);
      tmp119 = if_(tmp116, tmp117, tmp118);
      _deforest_Deforest_Arr_2_05 = tmp115;
      _deforest_Deforest_Arr_2_15 = tmp119;
      arr15 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head15 = arr15;
      _deforest_Cons_tail15 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp120 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head15, _deforest_Cons_tail15)
      };
      _deforest_Cons_head14 = arr14;
      _deforest_Cons_tail14 = tmp120;
      tmp121 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head14, _deforest_Cons_tail14)
      };
      _deforest_Cons_head13 = arr13;
      _deforest_Cons_tail13 = tmp121;
      tmp122 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head13, _deforest_Cons_tail13)
      };
      _deforest_Cons_head12 = arr12;
      _deforest_Cons_tail12 = tmp122;
      tmp123 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head12, _deforest_Cons_tail12)
      };
      _deforest_Cons_head11 = arr11;
      _deforest_Cons_tail11 = tmp123;
      tmp124 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head11, _deforest_Cons_tail11)
      };
      _deforest_Cons_head10 = arr10;
      _deforest_Cons_tail10 = tmp124;
      tmp125 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head10, _deforest_Cons_tail10)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = tmp125;
      tmp126 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp126;
      tmp127 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp127;
      tmp128 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp128;
      tmp129 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp129;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.EQUAL, tmp52, tmp54))
  };
  even_ = function even_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = even_(x);
      tmp55 = zerop(x);
      tmp56 = sub1(x);
      tmp57 = odd_(tmp56);
      tmp58 = if_(tmp55, boyerTrue, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.EVEN, tmp51, tmp53))
  };
  exp_ = function exp_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = plus(y, z);
      tmp56 = exp_(x, tmp55);
      tmp57 = exp_(x, y);
      tmp58 = exp_(x, z);
      tmp59 = times(tmp57, tmp58);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp60 = times(y, z);
      tmp61 = exp_(x, tmp60);
      tmp62 = exp_(x, y);
      tmp63 = exp_(tmp62, z);
      _deforest_Deforest_Arr_2_06 = tmp61;
      _deforest_Deforest_Arr_2_16 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp64 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp64;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.EXP, tmp52, tmp54))
  };
  f = function f(a1) {
    let tmp51, tmp52, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      return (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      }
    });
    tmp52 = NofibPrelude.lazy(lambda4);
    return runtime.safeCall(boyer.Fun(boyer.F, tmp51, tmp52))
  };
  gcd_ = function gcd_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, arr6, tmp62, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = gcd_(x, y);
      tmp56 = gcd_(y, x);
      _deforest_Deforest_Arr_2_06 = tmp55;
      _deforest_Deforest_Arr_2_16 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp57 = times(x, z);
      tmp58 = times(y, z);
      tmp59 = gcd_(tmp57, tmp58);
      tmp60 = gcd_(x, y);
      tmp61 = times(z, tmp60);
      _deforest_Deforest_Arr_2_05 = tmp59;
      _deforest_Deforest_Arr_2_15 = tmp61;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp62 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp62;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GCD, tmp52, tmp54))
  };
  greatereqp = function greatereqp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = greatereqp(x, y);
      tmp56 = lessp(x, y);
      tmp57 = not_(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GREATEREQP, tmp52, tmp54))
  };
  greaterp = function greaterp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5;
      tmp55 = greaterp(x, y);
      tmp56 = lessp(y, x);
      arr5 = [
        tmp55,
        tmp56
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.GREATERP, tmp52, tmp54))
  };
  implies = function implies(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = implies(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, tmp56, boyerTrue);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.IMPLIES, tmp52, tmp54))
  };
  iff = function iff(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5;
      tmp55 = iff(x, y);
      tmp56 = implies(x, y);
      tmp57 = implies(y, x);
      tmp58 = and_(tmp56, tmp57);
      arr5 = [
        tmp55,
        tmp58
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.IFF, tmp52, tmp54))
  };
  length_ = function length_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, arr6, tmp65, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp54 = reverse_(x);
      tmp55 = length_(tmp54);
      tmp56 = length_(x);
      _deforest_Deforest_Arr_2_06 = tmp55;
      _deforest_Deforest_Arr_2_16 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp57 = cons(u, w);
      tmp58 = cons(z, tmp57);
      tmp59 = cons(y, tmp58);
      tmp60 = cons(x, tmp59);
      tmp61 = length_(tmp60);
      tmp62 = four();
      tmp63 = length_(w);
      tmp64 = plus(tmp62, tmp63);
      _deforest_Deforest_Arr_2_05 = tmp61;
      _deforest_Deforest_Arr_2_15 = tmp64;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp65 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp65;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.LENGTH, tmp51, tmp53))
  };
  lesseqp = function lesseqp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5;
      tmp55 = lesseqp(x, y);
      tmp56 = lessp(y, x);
      tmp57 = not_(tmp56);
      arr5 = [
        tmp55,
        tmp57
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.LESSEQP, tmp52, tmp54))
  };
  lessp = function lessp(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, arr6, tmp66, tmp67, tmp68, tmp69, arr7, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, arr8, tmp77, tmp78, tmp79, tmp80, arr9, tmp81, tmp82, tmp83, tmp84, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19;
      tmp55 = remainder(x, y);
      tmp56 = lessp(tmp55, y);
      tmp57 = zerop(y);
      tmp58 = not_(tmp57);
      _deforest_Deforest_Arr_2_09 = tmp56;
      _deforest_Deforest_Arr_2_19 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
      };
      tmp59 = quotient(x, y);
      tmp60 = lessp(tmp59, x);
      tmp61 = zerop(x);
      tmp62 = not_(tmp61);
      tmp63 = one();
      tmp64 = lessp(tmp63, y);
      tmp65 = and_(tmp62, tmp64);
      _deforest_Deforest_Arr_2_08 = tmp60;
      _deforest_Deforest_Arr_2_18 = tmp65;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      tmp66 = plus(x, y);
      tmp67 = plus(x, z);
      tmp68 = lessp(tmp66, tmp67);
      tmp69 = lessp(y, z);
      _deforest_Deforest_Arr_2_07 = tmp68;
      _deforest_Deforest_Arr_2_17 = tmp69;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp70 = times(x, z);
      tmp71 = times(y, z);
      tmp72 = lessp(tmp70, tmp71);
      tmp73 = zerop(z);
      tmp74 = not_(tmp73);
      tmp75 = lessp(x, y);
      tmp76 = and_(tmp74, tmp75);
      _deforest_Deforest_Arr_2_06 = tmp72;
      _deforest_Deforest_Arr_2_16 = tmp76;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp77 = plus(x, y);
      tmp78 = lessp(y, tmp77);
      tmp79 = zerop(x);
      tmp80 = not_(tmp79);
      _deforest_Deforest_Arr_2_05 = tmp78;
      _deforest_Deforest_Arr_2_15 = tmp80;
      arr9 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head9 = arr9;
      _deforest_Cons_tail9 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp81 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head9, _deforest_Cons_tail9)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = tmp81;
      tmp82 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp82;
      tmp83 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp83;
      tmp84 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp84;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.LESSP, tmp52, tmp54))
  };
  nilp = function nilp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = nilp(x);
      tmp55 = equal(x, nil);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NILP, tmp51, tmp53))
  };
  listp = function listp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = listp(x);
      tmp55 = nilp(x);
      tmp56 = consp(x);
      tmp57 = or_(tmp55, tmp56);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.LISTP, tmp51, tmp53))
  };
  member = function member(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, arr6, tmp63, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = append_(y, z);
      tmp56 = member(x, tmp55);
      tmp57 = member(x, y);
      tmp58 = member(x, z);
      tmp59 = or_(tmp57, tmp58);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp60 = reverse_(y);
      tmp61 = member(x, tmp60);
      tmp62 = member(x, y);
      _deforest_Deforest_Arr_2_06 = tmp61;
      _deforest_Deforest_Arr_2_16 = tmp62;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp63 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp63;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.MEMBER, tmp52, tmp54))
  };
  nlistp = function nlistp(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5;
      tmp54 = nlistp(x);
      tmp55 = listp(x);
      tmp56 = not_(tmp55);
      arr5 = [
        tmp54,
        tmp56
      ];
      return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.NLISTP, tmp51, tmp53))
  };
  odd_ = function odd_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = odd_(x);
      tmp55 = sub1(x);
      tmp56 = even_(tmp55);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp56;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.ODD, tmp51, tmp53))
  };
  or_ = function or_(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp55 = or_(x, y);
      tmp56 = if_(y, boyerTrue, boyerFalse);
      tmp57 = if_(x, boyerTrue, tmp56);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp57;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.OR, tmp52, tmp54))
  };
  plus = function plus(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, arr6, tmp63, tmp64, tmp65, tmp66, arr7, tmp67, tmp68, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17;
      tmp55 = plus(x, y);
      tmp56 = plus(tmp55, z);
      tmp57 = plus(y, z);
      tmp58 = plus(x, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp59 = remainder(x, y);
      tmp60 = quotient(x, y);
      tmp61 = times(y, tmp60);
      tmp62 = plus(tmp59, tmp61);
      _deforest_Deforest_Arr_2_06 = tmp62;
      _deforest_Deforest_Arr_2_16 = x;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp63 = add1(y);
      tmp64 = plus(x, tmp63);
      tmp65 = plus(x, y);
      tmp66 = add1(tmp65);
      _deforest_Deforest_Arr_2_07 = tmp64;
      _deforest_Deforest_Arr_2_17 = tmp66;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp67 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp67;
      tmp68 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp68;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.PLUS, tmp52, tmp54))
  };
  quotient = function quotient(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr5, tmp62, tmp63, tmp64, tmp65, arr6, tmp66, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      tmp55 = plus(x, y);
      tmp56 = plus(x, tmp55);
      tmp57 = two();
      tmp58 = quotient(tmp56, tmp57);
      tmp59 = two();
      tmp60 = quotient(y, tmp59);
      tmp61 = plus(x, tmp60);
      _deforest_Deforest_Arr_2_05 = tmp58;
      _deforest_Deforest_Arr_2_15 = tmp61;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp62 = times(y, x);
      tmp63 = quotient(tmp62, y);
      tmp64 = zerop(y);
      tmp65 = if_(tmp64, zero, x);
      _deforest_Deforest_Arr_2_06 = tmp63;
      _deforest_Deforest_Arr_2_16 = tmp65;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp66 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp66;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.QUOTIENT, tmp52, tmp54))
  };
  remainder = function remainder(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, arr5, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, arr8, tmp62, tmp63, tmp64, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp55 = one();
      tmp56 = remainder(x, tmp55);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = zero;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp57 = remainder(x, x);
      _deforest_Deforest_Arr_2_06 = tmp57;
      _deforest_Deforest_Arr_2_16 = zero;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp58 = times(x, y);
      tmp59 = remainder(tmp58, x);
      _deforest_Deforest_Arr_2_07 = tmp59;
      _deforest_Deforest_Arr_2_17 = zero;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp60 = times(x, y);
      tmp61 = remainder(tmp60, y);
      _deforest_Deforest_Arr_2_08 = tmp61;
      _deforest_Deforest_Arr_2_18 = zero;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp62 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp62;
      tmp63 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp63;
      tmp64 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp64;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.REMAINDER, tmp52, tmp54))
  };
  reverse_ = function reverse_(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, tmp56, tmp57, tmp58, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = append_(x, y);
      tmp55 = reverse_(tmp54);
      tmp56 = reverse_(y);
      tmp57 = reverse_(x);
      tmp58 = append_(tmp56, tmp57);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = tmp58;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.REVERSE, tmp51, tmp53))
  };
  sub1 = function sub1(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = add1(x);
      tmp55 = sub1(tmp54);
      _deforest_Deforest_Arr_2_05 = tmp55;
      _deforest_Deforest_Arr_2_15 = x;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.SUB1, tmp51, tmp53))
  };
  times = function times(a1, b1) {
    let tmp51, tmp52, tmp53, tmp54, lambda4;
    tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(a1, tmp51);
    lambda4 = (undefined, function () {
      let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, tmp68, arr7, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp55 = plus(y, z);
      tmp56 = times(x, tmp55);
      tmp57 = times(x, y);
      tmp58 = times(x, z);
      tmp59 = plus(tmp57, tmp58);
      _deforest_Deforest_Arr_2_05 = tmp56;
      _deforest_Deforest_Arr_2_15 = tmp59;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      tmp60 = times(x, y);
      tmp61 = times(tmp60, z);
      tmp62 = times(y, z);
      tmp63 = times(x, tmp62);
      _deforest_Deforest_Arr_2_06 = tmp61;
      _deforest_Deforest_Arr_2_16 = tmp63;
      arr6 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
      };
      tmp64 = difference(y, z);
      tmp65 = times(x, tmp64);
      tmp66 = times(y, x);
      tmp67 = times(z, x);
      tmp68 = difference(tmp66, tmp67);
      _deforest_Deforest_Arr_2_07 = tmp65;
      _deforest_Deforest_Arr_2_17 = tmp68;
      arr7 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
      };
      tmp69 = add1(y);
      tmp70 = times(x, tmp69);
      tmp71 = times(x, y);
      tmp72 = plus(x, tmp71);
      _deforest_Deforest_Arr_2_08 = tmp70;
      _deforest_Deforest_Arr_2_18 = tmp72;
      arr8 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
      };
      _deforest_Cons_head8 = arr8;
      _deforest_Cons_tail8 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      tmp73 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head8, _deforest_Cons_tail8)
      };
      _deforest_Cons_head7 = arr7;
      _deforest_Cons_tail7 = tmp73;
      tmp74 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = arr6;
      _deforest_Cons_tail6 = tmp74;
      tmp75 = (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = tmp75;
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp53 = lambda4;
    tmp54 = NofibPrelude.lazy(tmp53);
    return runtime.safeCall(boyer.Fun(boyer.TIMES, tmp52, tmp54))
  };
  zerop = function zerop(a1) {
    let tmp51, tmp52, tmp53, lambda4;
    tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
    lambda4 = (undefined, function () {
      let tmp54, tmp55, arr5, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      tmp54 = zerop(x);
      tmp55 = equal(x, zero);
      _deforest_Deforest_Arr_2_05 = tmp54;
      _deforest_Deforest_Arr_2_15 = tmp55;
      arr5 = (term, param1) => {
        return match_param0_arm_Deforest_Arr_2_inst_18_16_14_13_tsni(term, param1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      _deforest_Cons_head5 = arr5;
      _deforest_Cons_tail5 = (term) => {
        return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
      };
      return (term) => {
        return match_lss_arm_Cons_inst_18_16_14_13_tsni(term, _deforest_Cons_head5, _deforest_Cons_tail5)
      }
    });
    tmp52 = lambda4;
    tmp53 = NofibPrelude.lazy(tmp52);
    return runtime.safeCall(boyer.Fun(boyer.ZEROP, tmp51, tmp53))
  };
  tmp = runtime.safeCall(boyer.Var(boyer.A));
  a = tmp;
  tmp1 = runtime.safeCall(boyer.Var(boyer.B));
  b = tmp1;
  tmp2 = runtime.safeCall(boyer.Var(boyer.C));
  c = tmp2;
  tmp3 = runtime.safeCall(boyer.Var(boyer.D));
  d = tmp3;
  tmp4 = runtime.safeCall(boyer.Var(boyer.U));
  u = tmp4;
  tmp5 = runtime.safeCall(boyer.Var(boyer.W));
  w = tmp5;
  tmp6 = runtime.safeCall(boyer.Var(boyer.X));
  x = tmp6;
  tmp7 = runtime.safeCall(boyer.Var(boyer.Y));
  y = tmp7;
  tmp8 = runtime.safeCall(boyer.Var(boyer.Z));
  z = tmp8;
  lambda = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
    }
  });
  tmp9 = NofibPrelude.lazy(lambda);
  tmp10 = runtime.safeCall(boyer.Fun(boyer.FALSE, NofibPrelude.Nil, tmp9));
  boyerFalse = tmp10;
  lambda1 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
    }
  });
  tmp11 = NofibPrelude.lazy(lambda1);
  tmp12 = runtime.safeCall(boyer.Fun(boyer.NIL, NofibPrelude.Nil, tmp11));
  nil = tmp12;
  lambda2 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
    }
  });
  tmp13 = NofibPrelude.lazy(lambda2);
  tmp14 = runtime.safeCall(boyer.Fun(boyer.TRUE, NofibPrelude.Nil, tmp13));
  boyerTrue = tmp14;
  lambda3 = (undefined, function () {
    return (term) => {
      return match_lss_arm_Nil_inst_18_16_14_13_tsni(term)
    }
  });
  tmp15 = NofibPrelude.lazy(lambda3);
  tmp16 = runtime.safeCall(boyer.Fun(boyer.ZERO, NofibPrelude.Nil, tmp15));
  zero = tmp16;
  tmp17 = plus(a, b);
  tmp18 = plus(c, zero);
  tmp19 = plus(tmp17, tmp18);
  tmp20 = f(tmp19);
  _deforest_Deforest_Arr_2_04 = boyer.X;
  _deforest_Deforest_Arr_2_14 = tmp20;
  arr = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
  };
  tmp21 = times(a, b);
  tmp22 = plus(c, d);
  tmp23 = times(tmp21, tmp22);
  tmp24 = f(tmp23);
  _deforest_Deforest_Arr_2_03 = boyer.Y;
  _deforest_Deforest_Arr_2_13 = tmp24;
  arr1 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
  };
  tmp25 = append_(a, b);
  tmp26 = append_(tmp25, nil);
  tmp27 = reverse_(tmp26);
  tmp28 = f(tmp27);
  _deforest_Deforest_Arr_2_02 = boyer.Z;
  _deforest_Deforest_Arr_2_12 = tmp28;
  arr2 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
  };
  tmp29 = plus(a, b);
  tmp30 = difference(x, y);
  tmp31 = equal(tmp29, tmp30);
  _deforest_Deforest_Arr_2_01 = boyer.U;
  _deforest_Deforest_Arr_2_11 = tmp31;
  arr3 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  tmp32 = remainder(a, b);
  tmp33 = length_(b);
  tmp34 = member(a, tmp33);
  tmp35 = lessp(tmp32, tmp34);
  _deforest_Deforest_Arr_2_0 = boyer.W;
  _deforest_Deforest_Arr_2_1 = tmp35;
  arr4 = (vid, param1) => {
    return match_param0_arm_Deforest_Arr_2_inst_18_16_15_5_tsni(vid, param1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Cons_head4 = arr4;
  _deforest_Cons_tail4 = (vid) => {
    let arr5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
    _deforest_Deforest_Arr_2_05 = false;
    _deforest_Deforest_Arr_2_15 = boyer.ERROR;
    arr5 = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_16_15_tsni(vid1, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
    };
    return arr5
  };
  tmp36 = (vid) => {
    return match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = arr3;
  _deforest_Cons_tail3 = tmp36;
  tmp37 = (vid) => {
    return match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = arr2;
  _deforest_Cons_tail2 = tmp37;
  tmp38 = (vid) => {
    return match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = arr1;
  _deforest_Cons_tail1 = tmp38;
  tmp39 = (vid) => {
    return match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp39;
  tmp40 = (vid) => {
    return match_ls_arm_Cons_inst_18_16_15_5_tsni(vid, _deforest_Cons_head, _deforest_Cons_tail)
  };
  subst0 = tmp40;
  tmp41 = implies(xxxx, y);
  tmp42 = implies(y, z);
  tmp43 = implies(z, u);
  tmp44 = implies(u, w);
  tmp45 = and_(tmp43, tmp44);
  tmp46 = and_(tmp42, tmp45);
  tmp47 = and_(tmp41, tmp46);
  tmp48 = implies(x, w);
  tmp49 = implies(tmp47, tmp48);
  theorem = tmp49;
  tmp50 = apply_subst_inst_18_16_15_tsni(subst0, theorem);
  return tautp_inst_18_16_14_tsni(tmp50)
};
tautp_inst_18_16_14_tsni = function tautp_inst_18_16_14_tsni(x) {
  let tmp;
  tmp = rewrite_inst_18_16_14_13_tsni(x);
  return boyer.tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
};
rewrite_inst_18_16_14_13_tsni = function rewrite_inst_18_16_14_13_tsni(t) {
  let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    v = param0;
    return runtime.safeCall(boyer.Var(v))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    lemmas = param2;
    tmp = NofibPrelude.map(rewrite_inst_18_16_14_13_tsni, args);
    tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
    return rewrite_with_lemmas_inst_18_16_14_13_tsni(tmp1, lemmas)
  } else {
    throw new globalThis.Error("match error");
  }
};
rewrite_with_lemmas_inst_18_16_14_13_tsni = function rewrite_with_lemmas_inst_18_16_14_13_tsni(term, lss) {
  let tmp;
  tmp = NofibPrelude.force(lss);
  return rewrite_with_lemmas_helper_inst_18_16_14_13_tsni(term, tmp)
};
rewrite_with_lemmas_helper_inst_18_16_14_13_tsni = function rewrite_with_lemmas_helper_inst_18_16_14_13_tsni(term, lss) {
  return runtime.safeCall(lss(term))
};
apply_subst_inst_18_16_14_13_8_tsni = function apply_subst_inst_18_16_14_13_8_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_18_16_14_13_8_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_18_16_14_13_8_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_18_16_14_13_8_5_tsni = function find_inst_18_16_14_13_8_5_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (vid1) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (vid1) => {
          return match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_8_tsni(vid1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_18_16_14_13_8_5_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
one_way_unify_inst_18_16_14_13_7_tsni = function one_way_unify_inst_18_16_14_13_7_tsni(term1, term2) {
  return one_way_unify1_inst_18_16_14_13_7_4_tsni(term1, term2, NofibPrelude.Nil)
};
one_way_unify1_inst_18_16_14_13_7_4_tsni = function one_way_unify1_inst_18_16_14_13_7_4_tsni(term1, term2, subst) {
  let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
  if (term2 instanceof boyer.Var.class) {
    param01 = term2.i;
    vid2 = param01;
    scrut1 = find_inst_18_16_14_13_7_4_1_tsni(vid2, subst);
    return runtime.safeCall(scrut1(term1, subst, vid2))
  } else {
    if (term1 instanceof boyer.Fun.class) {
      param0 = term1.i;
      param1 = term1.t;
      param2 = term1.l;
      f1 = param0;
      as1 = param1;
      if (term2 instanceof boyer.Fun.class) {
        param01 = term2.i;
        param11 = term2.t;
        param21 = term2.l;
        f2 = param01;
        as2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          return one_way_unify1_lst_inst_18_16_14_13_7_4_tsni(as1, as2, subst)
        } else {
          arr = [
            false,
            NofibPrelude.Nil
          ];
          return arr
        }
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else {
      arr2 = [
        false,
        NofibPrelude.Nil
      ];
      return arr2
    }
  }
};
one_way_unify1_lst_inst_18_16_14_13_7_4_tsni = function one_way_unify1_lst_inst_18_16_14_13_7_4_tsni(tts1, tts2, subst) {
  let param0, param1, t1, ts1, param01, param11, t2, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
  if (tts1 instanceof NofibPrelude.Nil.class) {
    if (tts2 instanceof NofibPrelude.Nil.class) {
      arr = [
        true,
        subst
      ];
      return arr
    } else {
      arr1 = [
        false,
        NofibPrelude.Nil
      ];
      return arr1
    }
  } else if (tts1 instanceof NofibPrelude.Cons.class) {
    param0 = tts1.head;
    param1 = tts1.tail;
    t1 = param0;
    ts1 = param1;
    if (tts2 instanceof NofibPrelude.Cons.class) {
      param01 = tts2.head;
      param11 = tts2.tail;
      t2 = param01;
      ts2 = param11;
      scrut = one_way_unify1_inst_18_16_14_13_7_4_tsni(t1, t2, subst);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        hd_ok = first0;
        subst_ = first1;
        scrut1 = one_way_unify1_lst_inst_18_16_14_13_7_4_tsni(ts1, ts2, subst_);
        if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
          first01 = scrut1[0];
          first11 = scrut1[1];
          tl_ok = first01;
          subst__ = first11;
          if (hd_ok === true) {
            if (tl_ok === true) {
              tmp = true;
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
          arr2 = [
            tmp,
            subst__
          ];
          return arr2
        } else {
          arr3 = [
            false,
            NofibPrelude.Nil
          ];
          return arr3
        }
      } else {
        arr4 = [
          false,
          NofibPrelude.Nil
        ];
        return arr4
      }
    } else {
      arr5 = [
        false,
        NofibPrelude.Nil
      ];
      return arr5
    }
  } else {
    arr6 = [
      false,
      NofibPrelude.Nil
    ];
    return arr6
  }
};
find_inst_18_16_14_13_7_4_1_tsni = function find_inst_18_16_14_13_7_4_1_tsni(vid, ls) {
  let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  if (ls instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = false;
    _deforest_Deforest_Arr_2_1 = boyer.ERROR;
    arr = (term1, subst, vid21) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      vid2 = first0;
      val2 = first1;
      bs = param1;
      scrut = vid === vid2;
      if (scrut === true) {
        _deforest_Deforest_Arr_2_01 = true;
        _deforest_Deforest_Arr_2_11 = val2;
        arr1 = (term1, subst, vid21) => {
          return match_scrut_arm_Deforest_Arr_2_inst_18_16_14_13_7_4_tsni(term1, subst, vid21, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        return find_inst_18_16_14_13_7_4_1_tsni(vid, bs)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
apply_subst_inst_18_16_15_tsni = function apply_subst_inst_18_16_15_tsni(subst, t) {
  let param0, param1, param2, f, args, ls, vid, scrut, tmp, lambda;
  if (t instanceof boyer.Var.class) {
    param0 = t.i;
    vid = param0;
    scrut = find_inst_18_16_15_5_tsni(vid, subst);
    return runtime.safeCall(scrut(vid))
  } else if (t instanceof boyer.Fun.class) {
    param0 = t.i;
    param1 = t.t;
    param2 = t.l;
    f = param0;
    args = param1;
    ls = param2;
    lambda = (undefined, function (x) {
      return apply_subst_inst_18_16_15_tsni(subst, x)
    });
    tmp = NofibPrelude.map(lambda, args);
    return runtime.safeCall(boyer.Fun(f, tmp, ls))
  } else {
    throw new globalThis.Error("match error");
  }
};
find_inst_18_16_15_5_tsni = function find_inst_18_16_15_5_tsni(vid, ls) {
  return runtime.safeCall(ls(vid))
};
replicate_inst_18_17_tsni = function replicate_inst_18_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (p) => {
      return true
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (p) => {
      let param0, param1, h, t, scrut1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      scrut1 = runtime.safeCall(p(h));
      if (scrut1 === true) {
        return all_inst_18_19_tsni(p, t)
      } else {
        return false
      }
    }
  }
};
all_inst_19_tsni = function all_inst_19_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
all_inst_18_19_tsni = function all_inst_18_19_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
(class boyer {
  static {
    boyer1 = boyer;
    this.Id = class Id {
      constructor() {}
      toString() { return "Id"; }
    };
    const A$class = class A extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "A"; }
    };
    this.A = new A$class;
    this.A.class = A$class;
    const B$class = class B extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "B"; }
    };
    this.B = new B$class;
    this.B.class = B$class;
    const C$class = class C extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "C"; }
    };
    this.C = new C$class;
    this.C.class = C$class;
    const D$class = class D extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "D"; }
    };
    this.D = new D$class;
    this.D.class = D$class;
    const X$class = class X extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "X"; }
    };
    this.X = new X$class;
    this.X.class = X$class;
    const Y$class = class Y extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "Y"; }
    };
    this.Y = new Y$class;
    this.Y.class = Y$class;
    const Z$class = class Z extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "Z"; }
    };
    this.Z = new Z$class;
    this.Z.class = Z$class;
    const U$class = class U extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "U"; }
    };
    this.U = new U$class;
    this.U.class = U$class;
    const W$class = class W extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "W"; }
    };
    this.W = new W$class;
    this.W.class = W$class;
    const ADD1$class = class ADD1 extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "ADD1"; }
    };
    this.ADD1 = new ADD1$class;
    this.ADD1.class = ADD1$class;
    const AND$class = class AND extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "AND"; }
    };
    this.AND = new AND$class;
    this.AND.class = AND$class;
    const APPEND$class = class APPEND extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "APPEND"; }
    };
    this.APPEND = new APPEND$class;
    this.APPEND.class = APPEND$class;
    const CONS$class = class CONS extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "CONS"; }
    };
    this.CONS = new CONS$class;
    this.CONS.class = CONS$class;
    const CONSP$class = class CONSP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "CONSP"; }
    };
    this.CONSP = new CONSP$class;
    this.CONSP.class = CONSP$class;
    const DIFFERENCE$class = class DIFFERENCE extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "DIFFERENCE"; }
    };
    this.DIFFERENCE = new DIFFERENCE$class;
    this.DIFFERENCE.class = DIFFERENCE$class;
    const DIVIDES$class = class DIVIDES extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "DIVIDES"; }
    };
    this.DIVIDES = new DIVIDES$class;
    this.DIVIDES.class = DIVIDES$class;
    const EQUAL$class = class EQUAL extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "EQUAL"; }
    };
    this.EQUAL = new EQUAL$class;
    this.EQUAL.class = EQUAL$class;
    const EVEN$class = class EVEN extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "EVEN"; }
    };
    this.EVEN = new EVEN$class;
    this.EVEN.class = EVEN$class;
    const EXP$class = class EXP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "EXP"; }
    };
    this.EXP = new EXP$class;
    this.EXP.class = EXP$class;
    const F$class = class F extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "F"; }
    };
    this.F = new F$class;
    this.F.class = F$class;
    const FALSE$class = class FALSE extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "FALSE"; }
    };
    this.FALSE = new FALSE$class;
    this.FALSE.class = FALSE$class;
    const FOUR$class = class FOUR extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "FOUR"; }
    };
    this.FOUR = new FOUR$class;
    this.FOUR.class = FOUR$class;
    const GCD$class = class GCD extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "GCD"; }
    };
    this.GCD = new GCD$class;
    this.GCD.class = GCD$class;
    const GREATEREQP$class = class GREATEREQP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "GREATEREQP"; }
    };
    this.GREATEREQP = new GREATEREQP$class;
    this.GREATEREQP.class = GREATEREQP$class;
    const GREATERP$class = class GREATERP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "GREATERP"; }
    };
    this.GREATERP = new GREATERP$class;
    this.GREATERP.class = GREATERP$class;
    const IF$class = class IF extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "IF"; }
    };
    this.IF = new IF$class;
    this.IF.class = IF$class;
    const IFF$class = class IFF extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "IFF"; }
    };
    this.IFF = new IFF$class;
    this.IFF.class = IFF$class;
    const IMPLIES$class = class IMPLIES extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "IMPLIES"; }
    };
    this.IMPLIES = new IMPLIES$class;
    this.IMPLIES.class = IMPLIES$class;
    const LENGTH$class = class LENGTH extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "LENGTH"; }
    };
    this.LENGTH = new LENGTH$class;
    this.LENGTH.class = LENGTH$class;
    const LESSEQP$class = class LESSEQP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "LESSEQP"; }
    };
    this.LESSEQP = new LESSEQP$class;
    this.LESSEQP.class = LESSEQP$class;
    const LESSP$class = class LESSP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "LESSP"; }
    };
    this.LESSP = new LESSP$class;
    this.LESSP.class = LESSP$class;
    const LISTP$class = class LISTP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "LISTP"; }
    };
    this.LISTP = new LISTP$class;
    this.LISTP.class = LISTP$class;
    const MEMBER$class = class MEMBER extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "MEMBER"; }
    };
    this.MEMBER = new MEMBER$class;
    this.MEMBER.class = MEMBER$class;
    const NIL$class = class NIL extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "NIL"; }
    };
    this.NIL = new NIL$class;
    this.NIL.class = NIL$class;
    const NILP$class = class NILP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "NILP"; }
    };
    this.NILP = new NILP$class;
    this.NILP.class = NILP$class;
    const NLISTP$class = class NLISTP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "NLISTP"; }
    };
    this.NLISTP = new NLISTP$class;
    this.NLISTP.class = NLISTP$class;
    const NOT$class = class NOT extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "NOT"; }
    };
    this.NOT = new NOT$class;
    this.NOT.class = NOT$class;
    const ODD$class = class ODD extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "ODD"; }
    };
    this.ODD = new ODD$class;
    this.ODD.class = ODD$class;
    const ONE$class = class ONE extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "ONE"; }
    };
    this.ONE = new ONE$class;
    this.ONE.class = ONE$class;
    const OR$class = class OR extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "OR"; }
    };
    this.OR = new OR$class;
    this.OR.class = OR$class;
    const PLUS$class = class PLUS extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "PLUS"; }
    };
    this.PLUS = new PLUS$class;
    this.PLUS.class = PLUS$class;
    const QUOTIENT$class = class QUOTIENT extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "QUOTIENT"; }
    };
    this.QUOTIENT = new QUOTIENT$class;
    this.QUOTIENT.class = QUOTIENT$class;
    const REMAINDER$class = class REMAINDER extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "REMAINDER"; }
    };
    this.REMAINDER = new REMAINDER$class;
    this.REMAINDER.class = REMAINDER$class;
    const REVERSE$class = class REVERSE extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "REVERSE"; }
    };
    this.REVERSE = new REVERSE$class;
    this.REVERSE.class = REVERSE$class;
    const SUB1$class = class SUB1 extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "SUB1"; }
    };
    this.SUB1 = new SUB1$class;
    this.SUB1.class = SUB1$class;
    const TIMES$class = class TIMES extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "TIMES"; }
    };
    this.TIMES = new TIMES$class;
    this.TIMES.class = TIMES$class;
    const TRUE$class = class TRUE extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "TRUE"; }
    };
    this.TRUE = new TRUE$class;
    this.TRUE.class = TRUE$class;
    const TWO$class = class TWO extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "TWO"; }
    };
    this.TWO = new TWO$class;
    this.TWO.class = TWO$class;
    const ZERO$class = class ZERO extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "ZERO"; }
    };
    this.ZERO = new ZERO$class;
    this.ZERO.class = ZERO$class;
    const ZEROP$class = class ZEROP extends boyer.Id {
      constructor() {
        super();
      }
      toString() { return "ZEROP"; }
    };
    this.ZEROP = new ZEROP$class;
    this.ZEROP.class = ZEROP$class;
    this.Term = class Term {
      constructor() {}
      toString() { return "Term"; }
    };
    this.Var = function Var(i1) {
      return new Var.class(i1);
    };
    this.Var.class = class Var extends boyer.Term {
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return "Var(" + runtime.render(this.i) + ")"; }
    };
    this.Fun = function Fun(i1, t1, l1) {
      return new Fun.class(i1, t1, l1);
    };
    this.Fun.class = class Fun extends boyer.Term {
      constructor(i, t, l) {
        super();
        this.i = i;
        this.t = t;
        this.l = l;
      }
      toString() { return "Fun(" + runtime.render(this.i) + ", " + runtime.render(this.t) + ", " + runtime.render(this.l) + ")"; }
    };
    const ERROR$class = class ERROR extends boyer.Term {
      constructor() {
        super();
      }
      toString() { return "ERROR"; }
    };
    this.ERROR = new ERROR$class;
    this.ERROR.class = ERROR$class;
  }
  static termLsEq(h1t1, h2t2) {
    let param0, param1, h1, t1, param01, param11, h2, t2, scrut;
    if (h1t1 instanceof NofibPrelude.Cons.class) {
      param0 = h1t1.head;
      param1 = h1t1.tail;
      h1 = param0;
      t1 = param1;
      if (h2t2 instanceof NofibPrelude.Cons.class) {
        param01 = h2t2.head;
        param11 = h2t2.tail;
        h2 = param01;
        t2 = param11;
        scrut = boyer.termEq(h1, h2);
        if (scrut === true) {
          return boyer.termLsEq(t1, t2)
        } else {
          return false
        }
      } else {
        return true
      }
    } else {
      return true
    }
  } 
  static termEq(t1, t2) {
    let param0, param1, param2, f1, ts1, param01, param11, param21, f2, ts2, scrut, scrut1, i1, i2;
    if (t1 instanceof boyer.Var.class) {
      param0 = t1.i;
      i1 = param0;
      if (t2 instanceof boyer.Var.class) {
        param01 = t2.i;
        i2 = param01;
        return i1 === i2
      } else {
        return false
      }
    } else if (t1 instanceof boyer.Fun.class) {
      param0 = t1.i;
      param1 = t1.t;
      param2 = t1.l;
      f1 = param0;
      ts1 = param1;
      if (t2 instanceof boyer.Fun.class) {
        param01 = t2.i;
        param11 = t2.t;
        param21 = t2.l;
        f2 = param01;
        ts2 = param11;
        scrut = f1 === f2;
        if (scrut === true) {
          scrut1 = boyer.termLsEq(ts1, ts2);
          if (scrut1 === true) {
            return true
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
  static termInList(term, ht) {
    let param0, param1, h, t, scrut;
    if (ht instanceof NofibPrelude.Cons.class) {
      param0 = ht.head;
      param1 = ht.tail;
      h = param0;
      t = param1;
      scrut = boyer.termEq(term, h);
      if (scrut === true) {
        return true
      } else {
        return boyer.termInList(term, t)
      }
    } else if (ht instanceof NofibPrelude.Nil.class) {
      return false
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static find(vid, ls) {
    let param0, param1, first1, first0, vid2, val2, bs, scrut, arr, arr1;
    if (ls instanceof NofibPrelude.Nil.class) {
      arr = [
        false,
        boyer.ERROR
      ];
      return arr
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        vid2 = first0;
        val2 = first1;
        bs = param1;
        scrut = vid === vid2;
        if (scrut === true) {
          arr1 = [
            true,
            val2
          ];
          return arr1
        } else {
          return boyer.find(vid, bs)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static one_way_unify1(term1, term2, subst) {
    let param0, param1, param2, f1, as1, param01, param11, param21, f2, as2, scrut, vid2, scrut1, arr, arr1, arr2;
    if (term2 instanceof boyer.Var.class) {
      param01 = term2.i;
      vid2 = param01;
      scrut1 = find_inst_1_tsni(vid2, subst);
      return runtime.safeCall(scrut1(term1, subst, vid2))
    } else {
      if (term1 instanceof boyer.Fun.class) {
        param0 = term1.i;
        param1 = term1.t;
        param2 = term1.l;
        f1 = param0;
        as1 = param1;
        if (term2 instanceof boyer.Fun.class) {
          param01 = term2.i;
          param11 = term2.t;
          param21 = term2.l;
          f2 = param01;
          as2 = param11;
          scrut = f1 === f2;
          if (scrut === true) {
            return one_way_unify1_lst_inst_0_tsni(as1, as2, subst)
          } else {
            arr = [
              false,
              NofibPrelude.Nil
            ];
            return arr
          }
        } else {
          arr1 = [
            false,
            NofibPrelude.Nil
          ];
          return arr1
        }
      } else {
        arr2 = [
          false,
          NofibPrelude.Nil
        ];
        return arr2
      }
    }
  } 
  static one_way_unify1_lst(tts1, tts2, subst1) {
    let param0, param1, t11, ts1, param01, param11, t21, ts2, scrut, first1, first0, hd_ok, subst_, scrut1, first11, first01, tl_ok, subst__, arr, arr1, tmp, arr2, arr3, arr4, arr5, arr6;
    if (tts1 instanceof NofibPrelude.Nil.class) {
      if (tts2 instanceof NofibPrelude.Nil.class) {
        arr = [
          true,
          subst1
        ];
        return arr
      } else {
        arr1 = [
          false,
          NofibPrelude.Nil
        ];
        return arr1
      }
    } else if (tts1 instanceof NofibPrelude.Cons.class) {
      param0 = tts1.head;
      param1 = tts1.tail;
      t11 = param0;
      ts1 = param1;
      if (tts2 instanceof NofibPrelude.Cons.class) {
        param01 = tts2.head;
        param11 = tts2.tail;
        t21 = param01;
        ts2 = param11;
        scrut = one_way_unify1_inst_3_tsni(t11, t21, subst1);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          hd_ok = first0;
          subst_ = first1;
          scrut1 = one_way_unify1_lst_inst_2_tsni(ts1, ts2, subst_);
          if (globalThis.Array.isArray(scrut1) && scrut1.length === 2) {
            first01 = scrut1[0];
            first11 = scrut1[1];
            tl_ok = first01;
            subst__ = first11;
            if (hd_ok === true) {
              if (tl_ok === true) {
                tmp = true;
              } else {
                tmp = false;
              }
            } else {
              tmp = false;
            }
            arr2 = [
              tmp,
              subst__
            ];
            return arr2
          } else {
            arr3 = [
              false,
              NofibPrelude.Nil
            ];
            return arr3
          }
        } else {
          arr4 = [
            false,
            NofibPrelude.Nil
          ];
          return arr4
        }
      } else {
        arr5 = [
          false,
          NofibPrelude.Nil
        ];
        return arr5
      }
    } else {
      arr6 = [
        false,
        NofibPrelude.Nil
      ];
      return arr6
    }
  } 
  static one_way_unify(term11, term21) {
    return one_way_unify1_inst_4_tsni(term11, term21, NofibPrelude.Nil)
  } 
  static apply_subst(subst2, t) {
    let param0, param1, param2, f, args, ls1, vid1, scrut, tmp, lambda;
    if (t instanceof boyer.Var.class) {
      param0 = t.i;
      vid1 = param0;
      scrut = find_inst_5_tsni(vid1, subst2);
      return runtime.safeCall(scrut(vid1))
    } else if (t instanceof boyer.Fun.class) {
      param0 = t.i;
      param1 = t.t;
      param2 = t.l;
      f = param0;
      args = param1;
      ls1 = param2;
      lambda = (undefined, function (x) {
        return boyer.apply_subst(subst2, x)
      });
      tmp = NofibPrelude.map(lambda, args);
      return runtime.safeCall(boyer.Fun(f, tmp, ls1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rewrite_with_lemmas_helper(term3, lss) {
    let param0, param1, first1, first0, lhs, rhs, ls1, scrut, first11, first01, unified, subst3, tmp;
    if (lss instanceof NofibPrelude.Nil.class) {
      return term3
    } else if (lss instanceof NofibPrelude.Cons.class) {
      param0 = lss.head;
      param1 = lss.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        lhs = first0;
        rhs = first1;
        ls1 = param1;
        scrut = one_way_unify_inst_7_tsni(term3, lhs);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first01 = scrut[0];
          first11 = scrut[1];
          unified = first01;
          subst3 = first11;
          if (unified === true) {
            tmp = apply_subst_inst_8_tsni(subst3, rhs);
            return rewrite_inst_9_tsni(tmp)
          } else {
            return rewrite_with_lemmas_helper_inst_6_tsni(term3, ls1)
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
  static rewrite_with_lemmas(term4, lss1) {
    let tmp;
    tmp = NofibPrelude.force(lss1);
    return rewrite_with_lemmas_helper_inst_10_tsni(term4, tmp)
  } 
  static rewrite(t3) {
    let param0, param1, param2, f, args, lemmas, v, tmp, tmp1;
    if (t3 instanceof boyer.Var.class) {
      param0 = t3.i;
      v = param0;
      return runtime.safeCall(boyer.Var(v))
    } else if (t3 instanceof boyer.Fun.class) {
      param0 = t3.i;
      param1 = t3.t;
      param2 = t3.l;
      f = param0;
      args = param1;
      lemmas = param2;
      tmp = NofibPrelude.map(rewrite_inst_12_tsni, args);
      tmp1 = runtime.safeCall(boyer.Fun(f, tmp, lemmas));
      return rewrite_with_lemmas_inst_11_tsni(tmp1, lemmas)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static truep(x, l) {
    let param0, param1, param2;
    if (x instanceof boyer.Fun.class) {
      param0 = x.i;
      param1 = x.t;
      param2 = x.l;
      if (param0 instanceof boyer.TRUE.class) {
        return true
      } else {
        return boyer.termInList(x, l)
      }
    } else {
      return boyer.termInList(x, l)
    }
  } 
  static falsep(x1, l1) {
    let param0, param1, param2;
    if (x1 instanceof boyer.Fun.class) {
      param0 = x1.i;
      param1 = x1.t;
      param2 = x1.l;
      if (param0 instanceof boyer.FALSE.class) {
        return true
      } else {
        return boyer.termInList(x1, l1)
      }
    } else {
      return boyer.termInList(x1, l1)
    }
  } 
  static tautologyp(x2, true_lst, false_lst) {
    let param0, param1, param2, param01, param11, cond, param02, param12, t4, param03, param13, e, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1;
    scrut5 = boyer.truep(x2, true_lst);
    if (scrut5 === true) {
      return true
    } else {
      scrut4 = boyer.falsep(x2, false_lst);
      if (scrut4 === true) {
        return false
      } else {
        if (x2 instanceof boyer.Fun.class) {
          param0 = x2.i;
          param1 = x2.t;
          param2 = x2.l;
          if (param0 instanceof boyer.IF.class) {
            if (param1 instanceof NofibPrelude.Cons.class) {
              param01 = param1.head;
              param11 = param1.tail;
              cond = param01;
              if (param11 instanceof NofibPrelude.Cons.class) {
                param02 = param11.head;
                param12 = param11.tail;
                t4 = param02;
                if (param12 instanceof NofibPrelude.Cons.class) {
                  param03 = param12.head;
                  param13 = param12.tail;
                  e = param03;
                  if (param13 instanceof NofibPrelude.Nil.class) {
                    scrut3 = boyer.truep(cond, true_lst);
                    if (scrut3 === true) {
                      return boyer.tautologyp(t4, true_lst, false_lst)
                    } else {
                      scrut2 = boyer.falsep(cond, false_lst);
                      if (scrut2 === true) {
                        return boyer.tautologyp(e, true_lst, false_lst)
                      } else {
                        tmp = NofibPrelude.Cons(cond, true_lst);
                        scrut = boyer.tautologyp(t4, tmp, false_lst);
                        if (scrut === true) {
                          tmp1 = NofibPrelude.Cons(cond, false_lst);
                          scrut1 = boyer.tautologyp(e, true_lst, tmp1);
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
  } 
  static tautp(x3) {
    let tmp;
    tmp = rewrite_inst_13_tsni(x3);
    return boyer.tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
  } 
  static test0(xxxx) {
    let quotient, if_, sub1, plus, f, implies, times, exp_, gcd_, difference, nlistp, one, remainder, four, and_, reverse_, greaterp, or_, odd_, two, lessp, cons, add1, divides, nilp, listp, consp, lesseqp, equal, append_, greatereqp, member, zerop, not_, iff, length_, even_, a, b, c, d, u, w, x4, y, z, boyerFalse, nil, boyerTrue, zero, subst0, theorem, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, arr, tmp21, tmp22, tmp23, tmp24, arr1, tmp25, tmp26, tmp27, tmp28, arr2, tmp29, tmp30, tmp31, arr3, tmp32, tmp33, tmp34, tmp35, arr4, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, lambda, lambda1, lambda2, lambda3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
    one = function one() {
      let tmp51, tmp52, lambda4;
      lambda4 = (undefined, function () {
        let tmp53, tmp54, arr5;
        tmp53 = one();
        tmp54 = add1(zero);
        arr5 = [
          tmp53,
          tmp54
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp51 = lambda4;
      tmp52 = NofibPrelude.lazy(tmp51);
      return runtime.safeCall(boyer.Fun(boyer.ONE, NofibPrelude.Nil, tmp52))
    };
    two = function two() {
      let tmp51, tmp52, lambda4;
      lambda4 = (undefined, function () {
        let tmp53, tmp54, tmp55, arr5;
        tmp53 = two();
        tmp54 = one();
        tmp55 = add1(tmp54);
        arr5 = [
          tmp53,
          tmp55
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp51 = lambda4;
      tmp52 = NofibPrelude.lazy(tmp51);
      return runtime.safeCall(boyer.Fun(boyer.TWO, NofibPrelude.Nil, tmp52))
    };
    four = function four() {
      let tmp51, tmp52, lambda4;
      lambda4 = (undefined, function () {
        let tmp53, tmp54, tmp55, tmp56, arr5;
        tmp53 = four();
        tmp54 = two();
        tmp55 = add1(tmp54);
        tmp56 = add1(tmp55);
        arr5 = [
          tmp53,
          tmp56
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp51 = lambda4;
      tmp52 = NofibPrelude.lazy(tmp51);
      return runtime.safeCall(boyer.Fun(boyer.FOUR, NofibPrelude.Nil, tmp52))
    };
    add1 = function add1(a1) {
      let tmp51, tmp52, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp52 = NofibPrelude.lazy(lambda4);
      return runtime.safeCall(boyer.Fun(boyer.ADD1, tmp51, tmp52))
    };
    if_ = function if_(a1, b1, c1) {
      let tmp51, tmp52, tmp53, tmp54, tmp55, lambda4;
      tmp51 = NofibPrelude.Cons(c1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(b1, tmp51);
      tmp53 = NofibPrelude.Cons(a1, tmp52);
      lambda4 = (undefined, function () {
        let tmp56, tmp57, tmp58, tmp59, tmp60, arr5;
        tmp56 = if_(x4, y, z);
        tmp57 = if_(tmp56, u, w);
        tmp58 = if_(y, u, w);
        tmp59 = if_(z, u, w);
        tmp60 = if_(x4, tmp58, tmp59);
        arr5 = [
          tmp57,
          tmp60
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp54 = lambda4;
      tmp55 = NofibPrelude.lazy(tmp54);
      return runtime.safeCall(boyer.Fun(boyer.IF, tmp53, tmp55))
    };
    not_ = function not_(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, arr5;
        tmp54 = not_(x4);
        tmp55 = if_(x4, boyerFalse, boyerTrue);
        arr5 = [
          tmp54,
          tmp55
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.NOT, tmp51, tmp53))
    };
    and_ = function and_(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = and_(x4, y);
        tmp56 = if_(y, boyerTrue, boyerFalse);
        tmp57 = if_(x4, tmp56, boyerFalse);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.AND, tmp52, tmp54))
    };
    append_ = function append_(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, arr5;
        tmp55 = append_(x4, y);
        tmp56 = append_(tmp55, z);
        tmp57 = append_(y, z);
        tmp58 = append_(x4, tmp57);
        arr5 = [
          tmp56,
          tmp58
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.APPEND, tmp52, tmp54))
    };
    cons = function cons(a1, b1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp53 = NofibPrelude.lazy(lambda4);
      return runtime.safeCall(boyer.Fun(boyer.CONS, tmp52, tmp53))
    };
    consp = function consp(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, arr5;
        tmp54 = cons(x4, y);
        tmp55 = consp(tmp54);
        arr5 = [
          tmp55,
          boyerTrue
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.CONSP, tmp51, tmp53))
    };
    difference = function difference(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, arr5, tmp56, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, tmp62, tmp63, arr8, tmp64, tmp65, tmp66, tmp67, arr9, tmp68, tmp69, tmp70, tmp71, arr10, tmp72, tmp73, tmp74, tmp75, arr11, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81;
        tmp55 = difference(x4, x4);
        arr5 = [
          tmp55,
          zero
        ];
        tmp56 = plus(x4, y);
        tmp57 = difference(tmp56, x4);
        arr6 = [
          tmp57,
          y
        ];
        tmp58 = plus(y, x4);
        tmp59 = difference(tmp58, x4);
        arr7 = [
          tmp59,
          y
        ];
        tmp60 = plus(x4, y);
        tmp61 = plus(x4, z);
        tmp62 = difference(tmp60, tmp61);
        tmp63 = difference(y, z);
        arr8 = [
          tmp62,
          tmp63
        ];
        tmp64 = plus(x4, z);
        tmp65 = plus(y, tmp64);
        tmp66 = difference(tmp65, x4);
        tmp67 = plus(y, z);
        arr9 = [
          tmp66,
          tmp67
        ];
        tmp68 = plus(y, z);
        tmp69 = add1(tmp68);
        tmp70 = difference(tmp69, z);
        tmp71 = add1(y);
        arr10 = [
          tmp70,
          tmp71
        ];
        tmp72 = add1(x4);
        tmp73 = add1(tmp72);
        tmp74 = two();
        tmp75 = difference(tmp73, tmp74);
        arr11 = [
          tmp75,
          x4
        ];
        tmp76 = NofibPrelude.Cons(arr11, NofibPrelude.Nil);
        tmp77 = NofibPrelude.Cons(arr10, tmp76);
        tmp78 = NofibPrelude.Cons(arr9, tmp77);
        tmp79 = NofibPrelude.Cons(arr8, tmp78);
        tmp80 = NofibPrelude.Cons(arr7, tmp79);
        tmp81 = NofibPrelude.Cons(arr6, tmp80);
        return NofibPrelude.Cons(arr5, tmp81)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.DIFFERENCE, tmp52, tmp54))
    };
    divides = function divides(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = divides(x4, y);
        tmp56 = remainder(y, x4);
        tmp57 = zerop(tmp56);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.DIVIDES, tmp52, tmp54))
    };
    equal = function equal(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, arr7, tmp68, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75, tmp76, tmp77, arr9, tmp78, tmp79, tmp80, tmp81, arr10, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, arr11, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, arr12, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, arr13, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, arr14, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, arr15, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129;
        tmp55 = plus(x4, y);
        tmp56 = equal(tmp55, zero);
        tmp57 = zerop(x4);
        tmp58 = zerop(y);
        tmp59 = and_(tmp57, tmp58);
        arr5 = [
          tmp56,
          tmp59
        ];
        tmp60 = plus(x4, y);
        tmp61 = plus(x4, z);
        tmp62 = equal(tmp60, tmp61);
        tmp63 = equal(y, z);
        arr6 = [
          tmp62,
          tmp63
        ];
        tmp64 = difference(x4, y);
        tmp65 = equal(zero, tmp64);
        tmp66 = lessp(y, x4);
        tmp67 = not_(tmp66);
        arr7 = [
          tmp65,
          tmp67
        ];
        tmp68 = difference(x4, y);
        tmp69 = equal(x4, tmp68);
        tmp70 = equal(x4, zero);
        tmp71 = zerop(y);
        tmp72 = or_(tmp70, tmp71);
        arr8 = [
          tmp69,
          tmp72
        ];
        tmp73 = times(x4, y);
        tmp74 = equal(tmp73, zero);
        tmp75 = zerop(x4);
        tmp76 = zerop(y);
        tmp77 = or_(tmp75, tmp76);
        arr9 = [
          tmp74,
          tmp77
        ];
        tmp78 = append_(x4, y);
        tmp79 = append_(x4, z);
        tmp80 = equal(tmp78, tmp79);
        tmp81 = equal(y, z);
        arr10 = [
          tmp80,
          tmp81
        ];
        tmp82 = times(x4, y);
        tmp83 = equal(y, tmp82);
        tmp84 = equal(y, zero);
        tmp85 = one();
        tmp86 = equal(x4, tmp85);
        tmp87 = or_(tmp84, tmp86);
        arr11 = [
          tmp83,
          tmp87
        ];
        tmp88 = times(x4, y);
        tmp89 = equal(x4, tmp88);
        tmp90 = equal(x4, zero);
        tmp91 = one();
        tmp92 = equal(y, tmp91);
        tmp93 = or_(tmp90, tmp92);
        arr12 = [
          tmp89,
          tmp93
        ];
        tmp94 = times(x4, y);
        tmp95 = one();
        tmp96 = equal(tmp94, tmp95);
        tmp97 = one();
        tmp98 = equal(x4, tmp97);
        tmp99 = one();
        tmp100 = equal(y, tmp99);
        tmp101 = and_(tmp98, tmp100);
        arr13 = [
          tmp96,
          tmp101
        ];
        tmp102 = difference(x4, y);
        tmp103 = difference(z, y);
        tmp104 = equal(tmp102, tmp103);
        tmp105 = lessp(x4, y);
        tmp106 = lessp(y, z);
        tmp107 = not_(tmp106);
        tmp108 = lessp(z, y);
        tmp109 = lessp(y, x4);
        tmp110 = not_(tmp109);
        tmp111 = equal(x4, z);
        tmp112 = if_(tmp108, tmp110, tmp111);
        tmp113 = if_(tmp105, tmp107, tmp112);
        arr14 = [
          tmp104,
          tmp113
        ];
        tmp114 = lessp(x4, y);
        tmp115 = equal(tmp114, z);
        tmp116 = lessp(x4, y);
        tmp117 = equal(boyerTrue, z);
        tmp118 = equal(boyerFalse, z);
        tmp119 = if_(tmp116, tmp117, tmp118);
        arr15 = [
          tmp115,
          tmp119
        ];
        tmp120 = NofibPrelude.Cons(arr15, NofibPrelude.Nil);
        tmp121 = NofibPrelude.Cons(arr14, tmp120);
        tmp122 = NofibPrelude.Cons(arr13, tmp121);
        tmp123 = NofibPrelude.Cons(arr12, tmp122);
        tmp124 = NofibPrelude.Cons(arr11, tmp123);
        tmp125 = NofibPrelude.Cons(arr10, tmp124);
        tmp126 = NofibPrelude.Cons(arr9, tmp125);
        tmp127 = NofibPrelude.Cons(arr8, tmp126);
        tmp128 = NofibPrelude.Cons(arr7, tmp127);
        tmp129 = NofibPrelude.Cons(arr6, tmp128);
        return NofibPrelude.Cons(arr5, tmp129)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.EQUAL, tmp52, tmp54))
    };
    even_ = function even_(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, tmp57, tmp58, arr5;
        tmp54 = even_(x4);
        tmp55 = zerop(x4);
        tmp56 = sub1(x4);
        tmp57 = odd_(tmp56);
        tmp58 = if_(tmp55, boyerTrue, tmp57);
        arr5 = [
          tmp54,
          tmp58
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.EVEN, tmp51, tmp53))
    };
    exp_ = function exp_(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64;
        tmp55 = plus(y, z);
        tmp56 = exp_(x4, tmp55);
        tmp57 = exp_(x4, y);
        tmp58 = exp_(x4, z);
        tmp59 = times(tmp57, tmp58);
        arr5 = [
          tmp56,
          tmp59
        ];
        tmp60 = times(y, z);
        tmp61 = exp_(x4, tmp60);
        tmp62 = exp_(x4, y);
        tmp63 = exp_(tmp62, z);
        arr6 = [
          tmp61,
          tmp63
        ];
        tmp64 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
        return NofibPrelude.Cons(arr5, tmp64)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.EXP, tmp52, tmp54))
    };
    f = function f(a1) {
      let tmp51, tmp52, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp52 = NofibPrelude.lazy(lambda4);
      return runtime.safeCall(boyer.Fun(boyer.F, tmp51, tmp52))
    };
    gcd_ = function gcd_(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, arr6, tmp62;
        tmp55 = gcd_(x4, y);
        tmp56 = gcd_(y, x4);
        arr5 = [
          tmp55,
          tmp56
        ];
        tmp57 = times(x4, z);
        tmp58 = times(y, z);
        tmp59 = gcd_(tmp57, tmp58);
        tmp60 = gcd_(x4, y);
        tmp61 = times(z, tmp60);
        arr6 = [
          tmp59,
          tmp61
        ];
        tmp62 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
        return NofibPrelude.Cons(arr5, tmp62)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.GCD, tmp52, tmp54))
    };
    greatereqp = function greatereqp(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = greatereqp(x4, y);
        tmp56 = lessp(x4, y);
        tmp57 = not_(tmp56);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.GREATEREQP, tmp52, tmp54))
    };
    greaterp = function greaterp(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, arr5;
        tmp55 = greaterp(x4, y);
        tmp56 = lessp(y, x4);
        arr5 = [
          tmp55,
          tmp56
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.GREATERP, tmp52, tmp54))
    };
    implies = function implies(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = implies(x4, y);
        tmp56 = if_(y, boyerTrue, boyerFalse);
        tmp57 = if_(x4, tmp56, boyerTrue);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.IMPLIES, tmp52, tmp54))
    };
    iff = function iff(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, arr5;
        tmp55 = iff(x4, y);
        tmp56 = implies(x4, y);
        tmp57 = implies(y, x4);
        tmp58 = and_(tmp56, tmp57);
        arr5 = [
          tmp55,
          tmp58
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.IFF, tmp52, tmp54))
    };
    length_ = function length_(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, arr5, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, arr6, tmp65;
        tmp54 = reverse_(x4);
        tmp55 = length_(tmp54);
        tmp56 = length_(x4);
        arr5 = [
          tmp55,
          tmp56
        ];
        tmp57 = cons(u, w);
        tmp58 = cons(z, tmp57);
        tmp59 = cons(y, tmp58);
        tmp60 = cons(x4, tmp59);
        tmp61 = length_(tmp60);
        tmp62 = four();
        tmp63 = length_(w);
        tmp64 = plus(tmp62, tmp63);
        arr6 = [
          tmp61,
          tmp64
        ];
        tmp65 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
        return NofibPrelude.Cons(arr5, tmp65)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.LENGTH, tmp51, tmp53))
    };
    lesseqp = function lesseqp(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = lesseqp(x4, y);
        tmp56 = lessp(y, x4);
        tmp57 = not_(tmp56);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.LESSEQP, tmp52, tmp54))
    };
    lessp = function lessp(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, arr6, tmp66, tmp67, tmp68, tmp69, arr7, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, arr8, tmp77, tmp78, tmp79, tmp80, arr9, tmp81, tmp82, tmp83, tmp84;
        tmp55 = remainder(x4, y);
        tmp56 = lessp(tmp55, y);
        tmp57 = zerop(y);
        tmp58 = not_(tmp57);
        arr5 = [
          tmp56,
          tmp58
        ];
        tmp59 = quotient(x4, y);
        tmp60 = lessp(tmp59, x4);
        tmp61 = zerop(x4);
        tmp62 = not_(tmp61);
        tmp63 = one();
        tmp64 = lessp(tmp63, y);
        tmp65 = and_(tmp62, tmp64);
        arr6 = [
          tmp60,
          tmp65
        ];
        tmp66 = plus(x4, y);
        tmp67 = plus(x4, z);
        tmp68 = lessp(tmp66, tmp67);
        tmp69 = lessp(y, z);
        arr7 = [
          tmp68,
          tmp69
        ];
        tmp70 = times(x4, z);
        tmp71 = times(y, z);
        tmp72 = lessp(tmp70, tmp71);
        tmp73 = zerop(z);
        tmp74 = not_(tmp73);
        tmp75 = lessp(x4, y);
        tmp76 = and_(tmp74, tmp75);
        arr8 = [
          tmp72,
          tmp76
        ];
        tmp77 = plus(x4, y);
        tmp78 = lessp(y, tmp77);
        tmp79 = zerop(x4);
        tmp80 = not_(tmp79);
        arr9 = [
          tmp78,
          tmp80
        ];
        tmp81 = NofibPrelude.Cons(arr9, NofibPrelude.Nil);
        tmp82 = NofibPrelude.Cons(arr8, tmp81);
        tmp83 = NofibPrelude.Cons(arr7, tmp82);
        tmp84 = NofibPrelude.Cons(arr6, tmp83);
        return NofibPrelude.Cons(arr5, tmp84)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.LESSP, tmp52, tmp54))
    };
    nilp = function nilp(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, arr5;
        tmp54 = nilp(x4);
        tmp55 = equal(x4, nil);
        arr5 = [
          tmp54,
          tmp55
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.NILP, tmp51, tmp53))
    };
    listp = function listp(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, tmp57, arr5;
        tmp54 = listp(x4);
        tmp55 = nilp(x4);
        tmp56 = consp(x4);
        tmp57 = or_(tmp55, tmp56);
        arr5 = [
          tmp54,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.LISTP, tmp51, tmp53))
    };
    member = function member(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, arr6, tmp63;
        tmp55 = append_(y, z);
        tmp56 = member(x4, tmp55);
        tmp57 = member(x4, y);
        tmp58 = member(x4, z);
        tmp59 = or_(tmp57, tmp58);
        arr5 = [
          tmp56,
          tmp59
        ];
        tmp60 = reverse_(y);
        tmp61 = member(x4, tmp60);
        tmp62 = member(x4, y);
        arr6 = [
          tmp61,
          tmp62
        ];
        tmp63 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
        return NofibPrelude.Cons(arr5, tmp63)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.MEMBER, tmp52, tmp54))
    };
    nlistp = function nlistp(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, arr5;
        tmp54 = nlistp(x4);
        tmp55 = listp(x4);
        tmp56 = not_(tmp55);
        arr5 = [
          tmp54,
          tmp56
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.NLISTP, tmp51, tmp53))
    };
    odd_ = function odd_(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, arr5;
        tmp54 = odd_(x4);
        tmp55 = sub1(x4);
        tmp56 = even_(tmp55);
        arr5 = [
          tmp54,
          tmp56
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.ODD, tmp51, tmp53))
    };
    or_ = function or_(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, arr5;
        tmp55 = or_(x4, y);
        tmp56 = if_(y, boyerTrue, boyerFalse);
        tmp57 = if_(x4, boyerTrue, tmp56);
        arr5 = [
          tmp55,
          tmp57
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.OR, tmp52, tmp54))
    };
    plus = function plus(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, arr5, tmp59, tmp60, tmp61, tmp62, arr6, tmp63, tmp64, tmp65, tmp66, arr7, tmp67, tmp68;
        tmp55 = plus(x4, y);
        tmp56 = plus(tmp55, z);
        tmp57 = plus(y, z);
        tmp58 = plus(x4, tmp57);
        arr5 = [
          tmp56,
          tmp58
        ];
        tmp59 = remainder(x4, y);
        tmp60 = quotient(x4, y);
        tmp61 = times(y, tmp60);
        tmp62 = plus(tmp59, tmp61);
        arr6 = [
          tmp62,
          x4
        ];
        tmp63 = add1(y);
        tmp64 = plus(x4, tmp63);
        tmp65 = plus(x4, y);
        tmp66 = add1(tmp65);
        arr7 = [
          tmp64,
          tmp66
        ];
        tmp67 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
        tmp68 = NofibPrelude.Cons(arr6, tmp67);
        return NofibPrelude.Cons(arr5, tmp68)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.PLUS, tmp52, tmp54))
    };
    quotient = function quotient(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr5, tmp62, tmp63, tmp64, tmp65, arr6, tmp66;
        tmp55 = plus(x4, y);
        tmp56 = plus(x4, tmp55);
        tmp57 = two();
        tmp58 = quotient(tmp56, tmp57);
        tmp59 = two();
        tmp60 = quotient(y, tmp59);
        tmp61 = plus(x4, tmp60);
        arr5 = [
          tmp58,
          tmp61
        ];
        tmp62 = times(y, x4);
        tmp63 = quotient(tmp62, y);
        tmp64 = zerop(y);
        tmp65 = if_(tmp64, zero, x4);
        arr6 = [
          tmp63,
          tmp65
        ];
        tmp66 = NofibPrelude.Cons(arr6, NofibPrelude.Nil);
        return NofibPrelude.Cons(arr5, tmp66)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.QUOTIENT, tmp52, tmp54))
    };
    remainder = function remainder(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, arr5, tmp57, arr6, tmp58, tmp59, arr7, tmp60, tmp61, arr8, tmp62, tmp63, tmp64;
        tmp55 = one();
        tmp56 = remainder(x4, tmp55);
        arr5 = [
          tmp56,
          zero
        ];
        tmp57 = remainder(x4, x4);
        arr6 = [
          tmp57,
          zero
        ];
        tmp58 = times(x4, y);
        tmp59 = remainder(tmp58, x4);
        arr7 = [
          tmp59,
          zero
        ];
        tmp60 = times(x4, y);
        tmp61 = remainder(tmp60, y);
        arr8 = [
          tmp61,
          zero
        ];
        tmp62 = NofibPrelude.Cons(arr8, NofibPrelude.Nil);
        tmp63 = NofibPrelude.Cons(arr7, tmp62);
        tmp64 = NofibPrelude.Cons(arr6, tmp63);
        return NofibPrelude.Cons(arr5, tmp64)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.REMAINDER, tmp52, tmp54))
    };
    reverse_ = function reverse_(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, tmp56, tmp57, tmp58, arr5;
        tmp54 = append_(x4, y);
        tmp55 = reverse_(tmp54);
        tmp56 = reverse_(y);
        tmp57 = reverse_(x4);
        tmp58 = append_(tmp56, tmp57);
        arr5 = [
          tmp55,
          tmp58
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.REVERSE, tmp51, tmp53))
    };
    sub1 = function sub1(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, arr5;
        tmp54 = add1(x4);
        tmp55 = sub1(tmp54);
        arr5 = [
          tmp55,
          x4
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.SUB1, tmp51, tmp53))
    };
    times = function times(a1, b1) {
      let tmp51, tmp52, tmp53, tmp54, lambda4;
      tmp51 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp52 = NofibPrelude.Cons(a1, tmp51);
      lambda4 = (undefined, function () {
        let tmp55, tmp56, tmp57, tmp58, tmp59, arr5, tmp60, tmp61, tmp62, tmp63, arr6, tmp64, tmp65, tmp66, tmp67, tmp68, arr7, tmp69, tmp70, tmp71, tmp72, arr8, tmp73, tmp74, tmp75;
        tmp55 = plus(y, z);
        tmp56 = times(x4, tmp55);
        tmp57 = times(x4, y);
        tmp58 = times(x4, z);
        tmp59 = plus(tmp57, tmp58);
        arr5 = [
          tmp56,
          tmp59
        ];
        tmp60 = times(x4, y);
        tmp61 = times(tmp60, z);
        tmp62 = times(y, z);
        tmp63 = times(x4, tmp62);
        arr6 = [
          tmp61,
          tmp63
        ];
        tmp64 = difference(y, z);
        tmp65 = times(x4, tmp64);
        tmp66 = times(y, x4);
        tmp67 = times(z, x4);
        tmp68 = difference(tmp66, tmp67);
        arr7 = [
          tmp65,
          tmp68
        ];
        tmp69 = add1(y);
        tmp70 = times(x4, tmp69);
        tmp71 = times(x4, y);
        tmp72 = plus(x4, tmp71);
        arr8 = [
          tmp70,
          tmp72
        ];
        tmp73 = NofibPrelude.Cons(arr8, NofibPrelude.Nil);
        tmp74 = NofibPrelude.Cons(arr7, tmp73);
        tmp75 = NofibPrelude.Cons(arr6, tmp74);
        return NofibPrelude.Cons(arr5, tmp75)
      });
      tmp53 = lambda4;
      tmp54 = NofibPrelude.lazy(tmp53);
      return runtime.safeCall(boyer.Fun(boyer.TIMES, tmp52, tmp54))
    };
    zerop = function zerop(a1) {
      let tmp51, tmp52, tmp53, lambda4;
      tmp51 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp54, tmp55, arr5;
        tmp54 = zerop(x4);
        tmp55 = equal(x4, zero);
        arr5 = [
          tmp54,
          tmp55
        ];
        return NofibPrelude.Cons(arr5, NofibPrelude.Nil)
      });
      tmp52 = lambda4;
      tmp53 = NofibPrelude.lazy(tmp52);
      return runtime.safeCall(boyer.Fun(boyer.ZEROP, tmp51, tmp53))
    };
    tmp = runtime.safeCall(boyer.Var(boyer.A));
    a = tmp;
    tmp1 = runtime.safeCall(boyer.Var(boyer.B));
    b = tmp1;
    tmp2 = runtime.safeCall(boyer.Var(boyer.C));
    c = tmp2;
    tmp3 = runtime.safeCall(boyer.Var(boyer.D));
    d = tmp3;
    tmp4 = runtime.safeCall(boyer.Var(boyer.U));
    u = tmp4;
    tmp5 = runtime.safeCall(boyer.Var(boyer.W));
    w = tmp5;
    tmp6 = runtime.safeCall(boyer.Var(boyer.X));
    x4 = tmp6;
    tmp7 = runtime.safeCall(boyer.Var(boyer.Y));
    y = tmp7;
    tmp8 = runtime.safeCall(boyer.Var(boyer.Z));
    z = tmp8;
    lambda = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp9 = NofibPrelude.lazy(lambda);
    tmp10 = runtime.safeCall(boyer.Fun(boyer.FALSE, NofibPrelude.Nil, tmp9));
    boyerFalse = tmp10;
    lambda1 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp11 = NofibPrelude.lazy(lambda1);
    tmp12 = runtime.safeCall(boyer.Fun(boyer.NIL, NofibPrelude.Nil, tmp11));
    nil = tmp12;
    lambda2 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp13 = NofibPrelude.lazy(lambda2);
    tmp14 = runtime.safeCall(boyer.Fun(boyer.TRUE, NofibPrelude.Nil, tmp13));
    boyerTrue = tmp14;
    lambda3 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp15 = NofibPrelude.lazy(lambda3);
    tmp16 = runtime.safeCall(boyer.Fun(boyer.ZERO, NofibPrelude.Nil, tmp15));
    zero = tmp16;
    tmp17 = plus(a, b);
    tmp18 = plus(c, zero);
    tmp19 = plus(tmp17, tmp18);
    tmp20 = f(tmp19);
    _deforest_Deforest_Arr_2_04 = boyer.X;
    _deforest_Deforest_Arr_2_14 = tmp20;
    arr = (vid1, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid1, param1, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
    };
    tmp21 = times(a, b);
    tmp22 = plus(c, d);
    tmp23 = times(tmp21, tmp22);
    tmp24 = f(tmp23);
    _deforest_Deforest_Arr_2_03 = boyer.Y;
    _deforest_Deforest_Arr_2_13 = tmp24;
    arr1 = (vid1, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid1, param1, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
    };
    tmp25 = append_(a, b);
    tmp26 = append_(tmp25, nil);
    tmp27 = reverse_(tmp26);
    tmp28 = f(tmp27);
    _deforest_Deforest_Arr_2_02 = boyer.Z;
    _deforest_Deforest_Arr_2_12 = tmp28;
    arr2 = (vid1, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid1, param1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
    };
    tmp29 = plus(a, b);
    tmp30 = difference(x4, y);
    tmp31 = equal(tmp29, tmp30);
    _deforest_Deforest_Arr_2_01 = boyer.U;
    _deforest_Deforest_Arr_2_11 = tmp31;
    arr3 = (vid1, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid1, param1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    tmp32 = remainder(a, b);
    tmp33 = length_(b);
    tmp34 = member(a, tmp33);
    tmp35 = lessp(tmp32, tmp34);
    _deforest_Deforest_Arr_2_0 = boyer.W;
    _deforest_Deforest_Arr_2_1 = tmp35;
    arr4 = (vid1, param1) => {
      return match_param0_arm_Deforest_Arr_2_inst_15_5_tsni(vid1, param1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head4 = arr4;
    _deforest_Cons_tail4 = (vid1) => {
      let arr5, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
      _deforest_Deforest_Arr_2_05 = false;
      _deforest_Deforest_Arr_2_15 = boyer.ERROR;
      arr5 = (vid2) => {
        return match_scrut_arm_Deforest_Arr_2_inst_15_tsni(vid2, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return arr5
    };
    tmp36 = (vid1) => {
      return match_ls_arm_Cons_inst_15_5_tsni(vid1, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = arr3;
    _deforest_Cons_tail3 = tmp36;
    tmp37 = (vid1) => {
      return match_ls_arm_Cons_inst_15_5_tsni(vid1, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = arr2;
    _deforest_Cons_tail2 = tmp37;
    tmp38 = (vid1) => {
      return match_ls_arm_Cons_inst_15_5_tsni(vid1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = tmp38;
    tmp39 = (vid1) => {
      return match_ls_arm_Cons_inst_15_5_tsni(vid1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp39;
    tmp40 = (vid1) => {
      return match_ls_arm_Cons_inst_15_5_tsni(vid1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    subst0 = tmp40;
    tmp41 = implies(xxxx, y);
    tmp42 = implies(y, z);
    tmp43 = implies(z, u);
    tmp44 = implies(u, w);
    tmp45 = and_(tmp43, tmp44);
    tmp46 = and_(tmp42, tmp45);
    tmp47 = and_(tmp41, tmp46);
    tmp48 = implies(x4, w);
    tmp49 = implies(tmp47, tmp48);
    theorem = tmp49;
    tmp50 = apply_subst_inst_15_tsni(subst0, theorem);
    return tautp_inst_14_tsni(tmp50)
  } 
  static testBoyer_nofib(n) {
    let tmp, tmp1;
    tmp = runtime.safeCall(boyer.Var(boyer.X));
    tmp1 = replicate_inst_17_tsni(n, tmp);
    return all_inst_19_tsni(test0_inst_16_tsni, tmp1)
  } 
  static main() {
    return testBoyer_nofib_inst_18_tsni(5)
  }
  static toString() { return "boyer"; }
});
let boyer = boyer1; export default boyer;
