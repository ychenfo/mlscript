import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let ansi1, concat_inst_0_1_tsni, append_inst_0_1_2_tsni, writeAt_inst_3_4_tsni, append_inst_3_4_5_tsni, replicate_inst_3_6_tsni, readAt_inst_7_8_tsni, writeAt_inst_7_8_4_tsni, append_inst_7_8_4_5_tsni, replicate_inst_7_8_6_tsni, promptReadAt_inst_9_10_tsni, readAt_inst_9_10_8_tsni, writeAt_inst_9_10_8_4_tsni, append_inst_9_10_8_4_5_tsni, replicate_inst_9_10_8_6_tsni, writes_inst_9_11_tsni, concat_inst_9_11_1_tsni, append_inst_9_11_1_2_tsni, program_inst_12_13_tsni, writes_inst_12_13_11_tsni, concat_inst_12_13_11_1_tsni, append_inst_12_13_11_1_2_tsni, promptReadAt_inst_12_13_10_tsni, readAt_inst_12_13_10_8_tsni, writeAt_inst_12_13_10_8_4_tsni, append_inst_12_13_10_8_4_5_tsni, replicate_inst_12_13_10_8_6_tsni, replicate_inst_12_14_tsni, testAnsi_nofib_inst_15_16_tsni, replicate_inst_15_16_14_tsni, program_inst_15_16_13_tsni, promptReadAt_inst_15_16_13_10_tsni, readAt_inst_15_16_13_10_8_tsni, writeAt_inst_15_16_13_10_8_4_tsni, append_inst_15_16_13_10_8_4_5_tsni, replicate_inst_15_16_13_10_8_6_tsni, writes_inst_15_16_13_11_tsni, concat_inst_15_16_13_11_1_tsni, append_inst_15_16_13_11_1_2_tsni, writeString_inst_0_17_tsni, append_inst_0_17_18_tsni, writeString_inst_3_4_19_tsni, append_inst_3_4_19_18_tsni, writeString_inst_7_8_4_19_tsni, append_inst_7_8_4_19_18_tsni, writeAt_inst_7_20_tsni, at_inst_9_21_tsni, at_inst_9_22_tsni, at_inst_9_23_tsni, at_inst_9_24_tsni, at_inst_9_25_tsni, at_inst_9_26_tsni, moveTo_inst_9_27_tsni, writeAt_inst_9_28_tsni, writeString_inst_9_10_8_4_19_tsni, append_inst_9_10_8_4_19_18_tsni, writeAt_inst_9_10_20_tsni, writeString_inst_9_11_17_tsni, append_inst_9_11_17_18_tsni, writeString_inst_12_13_11_17_tsni, append_inst_12_13_11_17_18_tsni, writeString_inst_12_13_10_8_4_19_tsni, append_inst_12_13_10_8_4_19_18_tsni, writeAt_inst_12_13_10_20_tsni, moveTo_inst_12_13_27_tsni, writeAt_inst_12_13_28_tsni, at_inst_12_13_26_tsni, at_inst_12_13_25_tsni, at_inst_12_13_24_tsni, at_inst_12_13_23_tsni, at_inst_12_13_22_tsni, at_inst_12_13_21_tsni, foldr_inst_12_29_tsni, foldr_inst_15_16_29_tsni, at_inst_15_16_13_21_tsni, at_inst_15_16_13_22_tsni, at_inst_15_16_13_23_tsni, at_inst_15_16_13_24_tsni, at_inst_15_16_13_25_tsni, at_inst_15_16_13_26_tsni, moveTo_inst_15_16_13_27_tsni, writeAt_inst_15_16_13_28_tsni, writeString_inst_15_16_13_10_8_4_19_tsni, append_inst_15_16_13_10_8_4_19_18_tsni, writeAt_inst_15_16_13_10_20_tsni, writeString_inst_15_16_13_11_17_tsni, append_inst_15_16_13_11_17_18_tsni, match_xs_arm_Cons_inst_3_4_19_18_tsni, match_xs_arm_Cons_inst_7_8_4_19_18_tsni, match_xs_arm_Cons_inst_9_10_8_4_19_18_tsni, match_ls_arm_Cons_inst_9_11_1_tsni, match_xs_arm_Cons_inst_12_13_10_8_4_19_18_tsni, match_ls_arm_Cons_inst_12_13_11_1_tsni, match_xs_arm_Cons_inst_15_16_13_10_8_4_19_18_tsni, match_ls_arm_Cons_inst_15_16_13_11_1_tsni;
match_xs_arm_Cons_inst_3_4_19_18_tsni = function match_xs_arm_Cons_inst_3_4_19_18_tsni(ys, _deforest_Cons_head_inst_3_4_19_18_tsni, _deforest_Cons_tail_inst_3_4_19_18_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_3_4_19_18_tsni;
  param1 = _deforest_Cons_tail_inst_3_4_19_18_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_3_4_19_18_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_7_8_4_19_18_tsni = function match_xs_arm_Cons_inst_7_8_4_19_18_tsni(ys, _deforest_Cons_head_inst_7_8_4_19_18_tsni, _deforest_Cons_tail_inst_7_8_4_19_18_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_7_8_4_19_18_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_4_19_18_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_7_8_4_19_18_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_9_10_8_4_19_18_tsni = function match_xs_arm_Cons_inst_9_10_8_4_19_18_tsni(ys, _deforest_Cons_head_inst_9_10_8_4_19_18_tsni, _deforest_Cons_tail_inst_9_10_8_4_19_18_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_9_10_8_4_19_18_tsni;
  param1 = _deforest_Cons_tail_inst_9_10_8_4_19_18_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_9_10_8_4_19_18_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_9_11_1_tsni = function match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head_inst_9_11_1_tsni, _deforest_Cons_tail_inst_9_11_1_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_9_11_1_tsni;
  param1 = _deforest_Cons_tail_inst_9_11_1_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_9_11_1_tsni(xs);
  return append_inst_9_11_1_2_tsni(x, tmp)
};
match_xs_arm_Cons_inst_12_13_10_8_4_19_18_tsni = function match_xs_arm_Cons_inst_12_13_10_8_4_19_18_tsni(ys, _deforest_Cons_head_inst_12_13_10_8_4_19_18_tsni, _deforest_Cons_tail_inst_12_13_10_8_4_19_18_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_12_13_10_8_4_19_18_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_10_8_4_19_18_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_12_13_10_8_4_19_18_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_12_13_11_1_tsni = function match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head_inst_12_13_11_1_tsni, _deforest_Cons_tail_inst_12_13_11_1_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_12_13_11_1_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_11_1_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_12_13_11_1_tsni(xs);
  return append_inst_12_13_11_1_2_tsni(x, tmp)
};
match_xs_arm_Cons_inst_15_16_13_10_8_4_19_18_tsni = function match_xs_arm_Cons_inst_15_16_13_10_8_4_19_18_tsni(ys, _deforest_Cons_head_inst_15_16_13_10_8_4_19_18_tsni, _deforest_Cons_tail_inst_15_16_13_10_8_4_19_18_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_16_13_10_8_4_19_18_tsni;
  param1 = _deforest_Cons_tail_inst_15_16_13_10_8_4_19_18_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_15_16_13_10_8_4_19_18_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_ls_arm_Cons_inst_15_16_13_11_1_tsni = function match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head_inst_15_16_13_11_1_tsni, _deforest_Cons_tail_inst_15_16_13_11_1_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_16_13_11_1_tsni;
  param1 = _deforest_Cons_tail_inst_15_16_13_11_1_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_15_16_13_11_1_tsni(xs);
  return append_inst_15_16_13_11_1_2_tsni(x, tmp)
};
concat_inst_0_1_tsni = function concat_inst_0_1_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_0_1_tsni(xs);
    return append_inst_0_1_2_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_tsni = function append_inst_0_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_0_17_18_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeAt_inst_3_4_tsni = function writeAt_inst_3_4_tsni(x_y, s, a) {
  let first1, first0, x, y, lambda;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    lambda = (undefined, function (p) {
      let tmp, tmp1;
      tmp = ansi.goto(x, y);
      tmp1 = append_inst_3_4_5_tsni(tmp, s);
      return writeString_inst_3_4_19_tsni(tmp1, a, p)
    });
    return lambda
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_3_4_5_tsni = function append_inst_3_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_3_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_3_4_19_18_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_3_6_tsni = function replicate_inst_3_6_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_3_6_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_3_4_19_18_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
readAt_inst_7_8_tsni = function readAt_inst_7_8_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_7_8_6_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_7_8_4_tsni(x_y, tmp, tmp2)
};
writeAt_inst_7_8_4_tsni = function writeAt_inst_7_8_4_tsni(x_y, s, a) {
  let first1, first0, x, y, lambda;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    lambda = (undefined, function (p) {
      let tmp, tmp1;
      tmp = ansi.goto(x, y);
      tmp1 = append_inst_7_8_4_5_tsni(tmp, s);
      return writeString_inst_7_8_4_19_tsni(tmp1, a, p)
    });
    return lambda
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_7_8_4_5_tsni = function append_inst_7_8_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_7_8_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_7_8_4_19_18_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_7_8_6_tsni = function replicate_inst_7_8_6_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_7_8_6_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_7_8_4_19_18_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
promptReadAt_inst_9_10_tsni = function promptReadAt_inst_9_10_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_9_10_8_tsni = function readAt_inst_9_10_8_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_9_10_8_6_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_9_10_8_4_tsni(x_y, tmp, tmp2)
};
writeAt_inst_9_10_8_4_tsni = function writeAt_inst_9_10_8_4_tsni(x_y, s, a) {
  let first1, first0, x, y, lambda;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    lambda = (undefined, function (p) {
      let tmp, tmp1;
      tmp = ansi.goto(x, y);
      tmp1 = append_inst_9_10_8_4_5_tsni(tmp, s);
      return writeString_inst_9_10_8_4_19_tsni(tmp1, a, p)
    });
    return lambda
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_9_10_8_4_5_tsni = function append_inst_9_10_8_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_9_10_8_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_9_10_8_4_19_18_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_9_10_8_6_tsni = function replicate_inst_9_10_8_6_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_9_10_8_6_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_9_10_8_4_19_18_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
writes_inst_9_11_tsni = function writes_inst_9_11_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_9_11_1_tsni(ss);
  return writeString_inst_9_11_17_tsni(tmp, a, b)
};
concat_inst_9_11_1_tsni = function concat_inst_9_11_1_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_9_11_1_2_tsni = function append_inst_9_11_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_9_11_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_9_11_17_18_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
program_inst_12_13_tsni = function program_inst_12_13_tsni(input) {
  let arr, tmp, tmp1, tmp2, arr1, tmp3, tmp4, arr2, tmp5, tmp6, arr3, tmp7, tmp8, arr4, tmp9, tmp10, arr5, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
  _deforest_Deforest_Arr_2_05 = 17;
  _deforest_Deforest_Arr_2_15 = 5;
  arr = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_05;
    first1 = _deforest_Deforest_Arr_2_15;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp = NofibPrelude.nofibStringToList("Demonstration program");
  tmp1 = ansi.highlight(tmp);
  tmp2 = at_inst_12_13_21_tsni(arr, tmp1);
  _deforest_Deforest_Arr_2_04 = 48;
  _deforest_Deforest_Arr_2_14 = 5;
  arr1 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_04;
    first1 = _deforest_Deforest_Arr_2_14;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp3 = NofibPrelude.nofibStringToList("Version 1.0");
  tmp4 = at_inst_12_13_22_tsni(arr1, tmp3);
  _deforest_Deforest_Arr_2_03 = 17;
  _deforest_Deforest_Arr_2_13 = 7;
  arr2 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_03;
    first1 = _deforest_Deforest_Arr_2_13;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp5 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
  tmp6 = at_inst_12_13_23_tsni(arr2, tmp5);
  _deforest_Deforest_Arr_2_02 = 17;
  _deforest_Deforest_Arr_2_12 = 8;
  arr3 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp7 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
  tmp8 = at_inst_12_13_24_tsni(arr3, tmp7);
  _deforest_Deforest_Arr_2_01 = 17;
  _deforest_Deforest_Arr_2_11 = 9;
  arr4 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp9 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
  tmp10 = at_inst_12_13_25_tsni(arr4, tmp9);
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 11;
  arr5 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp11 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
  tmp12 = at_inst_12_13_26_tsni(arr5, tmp11);
  _deforest_Cons_head6 = tmp12;
  _deforest_Cons_tail6 = () => {
    return (ys) => {
      return ys
    }
  };
  tmp13 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp10;
  _deforest_Cons_tail5 = tmp13;
  tmp14 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp8;
  _deforest_Cons_tail4 = tmp14;
  tmp15 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp6;
  _deforest_Cons_tail3 = tmp15;
  tmp16 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp4;
  _deforest_Cons_tail2 = tmp16;
  tmp17 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp2;
  _deforest_Cons_tail1 = tmp17;
  tmp18 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = ansi.cls;
  _deforest_Cons_tail = tmp18;
  tmp19 = () => {
    return match_ls_arm_Cons_inst_12_13_11_1_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  lambda = (undefined, function (x) {
    let arr6, tmp21, tmp22, tmp23, lambda1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
    _deforest_Deforest_Arr_2_06 = 17;
    _deforest_Deforest_Arr_2_16 = 15;
    arr6 = (l, prompt, consume) => {
      let first1, first0, x1, y, arr7, tmp24, tmp25, arr8, tmp26, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17;
      first0 = _deforest_Deforest_Arr_2_06;
      first1 = _deforest_Deforest_Arr_2_16;
      x1 = first0;
      y = first1;
      _deforest_Deforest_Arr_2_07 = x1;
      _deforest_Deforest_Arr_2_17 = y;
      arr7 = (s, a) => {
        let first11, first01, x2, y1, lambda2;
        first01 = _deforest_Deforest_Arr_2_07;
        first11 = _deforest_Deforest_Arr_2_17;
        x2 = first01;
        y1 = first11;
        lambda2 = (undefined, function (p) {
          let tmp27, tmp28;
          tmp27 = ansi.goto(x2, y1);
          tmp28 = NofibPrelude.append(tmp27, s);
          return ansi.writeString(tmp28, a, p)
        });
        return lambda2
      };
      tmp24 = NofibPrelude.listLen(prompt);
      tmp25 = x1 + tmp24;
      arr8 = [
        tmp25,
        y
      ];
      tmp26 = readAt_inst_12_13_10_8_tsni(arr8, l, consume);
      return writeAt_inst_12_13_10_20_tsni(arr7, prompt, tmp26)
    };
    tmp21 = NofibPrelude.nofibStringToList("Please enter your name: ");
    lambda1 = (undefined, function (name) {
      let reply, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, arr7, arr8, tmp31, lambda2, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp24 = NofibPrelude.nofibStringToList("Hello ");
      tmp25 = NofibPrelude.nofibStringToList("!");
      tmp26 = NofibPrelude.append(name, tmp25);
      tmp27 = NofibPrelude.append(tmp24, tmp26);
      reply = tmp27;
      tmp28 = NofibPrelude.listLen(reply);
      tmp29 = tmp28 / 2;
      tmp30 = 40 - tmp29;
      _deforest_Deforest_Arr_2_08 = tmp30;
      _deforest_Deforest_Arr_2_18 = 18;
      arr7 = (s, a) => {
        let first1, first0, x1, y, lambda3;
        first0 = _deforest_Deforest_Arr_2_08;
        first1 = _deforest_Deforest_Arr_2_18;
        x1 = first0;
        y = first1;
        lambda3 = (undefined, function (p) {
          let tmp32, tmp33;
          tmp32 = ansi.goto(x1, y);
          tmp33 = NofibPrelude.append(tmp32, s);
          return ansi.writeString(tmp33, a, p)
        });
        return lambda3
      };
      _deforest_Deforest_Arr_2_07 = 1;
      _deforest_Deforest_Arr_2_17 = 23;
      arr8 = (a) => {
        let first1, first0, x1, y, lambda3;
        first0 = _deforest_Deforest_Arr_2_07;
        first1 = _deforest_Deforest_Arr_2_17;
        x1 = first0;
        y = first1;
        lambda3 = (undefined, function (p) {
          let tmp32;
          tmp32 = ansi.goto(x1, y);
          return ansi.writeString(tmp32, a, p)
        });
        return lambda3
      };
      lambda2 = (undefined, function (y) {
        let tmp32, lambda3;
        tmp32 = NofibPrelude.nofibStringToList("I'm waiting...");
        lambda3 = (undefined, function (x1) {
          return ansi.pressAnyKey(ansi.end, x1)
        });
        return ansi.writeString(tmp32, lambda3, y)
      });
      tmp31 = moveTo_inst_12_13_27_tsni(arr8, lambda2);
      return writeAt_inst_12_13_28_tsni(arr7, reply, tmp31)
    });
    tmp22 = lambda1;
    tmp23 = promptReadAt_inst_12_13_10_tsni(arr6, 18, tmp21, tmp22);
    return ansi.pressAnyKey(tmp23, x)
  });
  tmp20 = lambda;
  return writes_inst_12_13_11_tsni(tmp19, tmp20, input)
};
writes_inst_12_13_11_tsni = function writes_inst_12_13_11_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_12_13_11_1_tsni(ss);
  return writeString_inst_12_13_11_17_tsni(tmp, a, b)
};
concat_inst_12_13_11_1_tsni = function concat_inst_12_13_11_1_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_12_13_11_1_2_tsni = function append_inst_12_13_11_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_12_13_11_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_12_13_11_17_18_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
promptReadAt_inst_12_13_10_tsni = function promptReadAt_inst_12_13_10_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_12_13_10_8_tsni = function readAt_inst_12_13_10_8_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_12_13_10_8_6_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_12_13_10_8_4_tsni(x_y, tmp, tmp2)
};
writeAt_inst_12_13_10_8_4_tsni = function writeAt_inst_12_13_10_8_4_tsni(x_y, s, a) {
  let first1, first0, x, y, lambda;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    lambda = (undefined, function (p) {
      let tmp, tmp1;
      tmp = ansi.goto(x, y);
      tmp1 = append_inst_12_13_10_8_4_5_tsni(tmp, s);
      return writeString_inst_12_13_10_8_4_19_tsni(tmp1, a, p)
    });
    return lambda
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_12_13_10_8_4_5_tsni = function append_inst_12_13_10_8_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_12_13_10_8_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_12_13_10_8_4_19_18_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_12_13_10_8_6_tsni = function replicate_inst_12_13_10_8_6_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_13_10_8_6_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_12_13_10_8_4_19_18_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
replicate_inst_12_14_tsni = function replicate_inst_12_14_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, z) => {
      return z
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_12_14_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, z) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = foldr_inst_12_29_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp2))
    }
  }
};
testAnsi_nofib_inst_15_16_tsni = function testAnsi_nofib_inst_15_16_tsni(n) {
  let tmp, tmp1, tmp2, lambda;
  tmp = replicate_inst_15_16_14_tsni(n, program_inst_15_16_13_tsni);
  lambda = (undefined, function (x) {
    return x
  });
  tmp1 = foldr_inst_15_16_29_tsni(NofibPrelude.compose, lambda, tmp);
  tmp2 = NofibPrelude.nofibStringToList("testtesttest");
  return runtime.safeCall(tmp1(tmp2))
};
replicate_inst_15_16_14_tsni = function replicate_inst_15_16_14_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, z) => {
      return z
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_16_14_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, z) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = foldr_inst_15_16_29_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp2))
    }
  }
};
program_inst_15_16_13_tsni = function program_inst_15_16_13_tsni(input) {
  let arr, tmp, tmp1, tmp2, arr1, tmp3, tmp4, arr2, tmp5, tmp6, arr3, tmp7, tmp8, arr4, tmp9, tmp10, arr5, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 5;
  arr = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp = NofibPrelude.nofibStringToList("Demonstration program");
  tmp1 = ansi.highlight(tmp);
  tmp2 = at_inst_15_16_13_21_tsni(arr, tmp1);
  _deforest_Deforest_Arr_2_01 = 48;
  _deforest_Deforest_Arr_2_11 = 5;
  arr1 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp3 = NofibPrelude.nofibStringToList("Version 1.0");
  tmp4 = at_inst_15_16_13_22_tsni(arr1, tmp3);
  _deforest_Deforest_Arr_2_02 = 17;
  _deforest_Deforest_Arr_2_12 = 7;
  arr2 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp5 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
  tmp6 = at_inst_15_16_13_23_tsni(arr2, tmp5);
  _deforest_Deforest_Arr_2_03 = 17;
  _deforest_Deforest_Arr_2_13 = 8;
  arr3 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_03;
    first1 = _deforest_Deforest_Arr_2_13;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp7 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
  tmp8 = at_inst_15_16_13_24_tsni(arr3, tmp7);
  _deforest_Deforest_Arr_2_04 = 17;
  _deforest_Deforest_Arr_2_14 = 9;
  arr4 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_04;
    first1 = _deforest_Deforest_Arr_2_14;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp9 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
  tmp10 = at_inst_15_16_13_25_tsni(arr4, tmp9);
  _deforest_Deforest_Arr_2_05 = 17;
  _deforest_Deforest_Arr_2_15 = 11;
  arr5 = (s) => {
    let first1, first0, x, y, tmp21;
    first0 = _deforest_Deforest_Arr_2_05;
    first1 = _deforest_Deforest_Arr_2_15;
    x = first0;
    y = first1;
    tmp21 = ansi.goto(x, y);
    return NofibPrelude.append(tmp21, s)
  };
  tmp11 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
  tmp12 = at_inst_15_16_13_26_tsni(arr5, tmp11);
  _deforest_Cons_head6 = tmp12;
  _deforest_Cons_tail6 = () => {
    return (ys) => {
      return ys
    }
  };
  tmp13 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp10;
  _deforest_Cons_tail5 = tmp13;
  tmp14 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp8;
  _deforest_Cons_tail4 = tmp14;
  tmp15 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp6;
  _deforest_Cons_tail3 = tmp15;
  tmp16 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp4;
  _deforest_Cons_tail2 = tmp16;
  tmp17 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp2;
  _deforest_Cons_tail1 = tmp17;
  tmp18 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = ansi.cls;
  _deforest_Cons_tail = tmp18;
  tmp19 = () => {
    return match_ls_arm_Cons_inst_15_16_13_11_1_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  lambda = (undefined, function (x) {
    let arr6, tmp21, tmp22, tmp23, lambda1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
    _deforest_Deforest_Arr_2_06 = 17;
    _deforest_Deforest_Arr_2_16 = 15;
    arr6 = (l, prompt, consume) => {
      let first1, first0, x1, y, arr7, tmp24, tmp25, arr8, tmp26, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17;
      first0 = _deforest_Deforest_Arr_2_06;
      first1 = _deforest_Deforest_Arr_2_16;
      x1 = first0;
      y = first1;
      _deforest_Deforest_Arr_2_07 = x1;
      _deforest_Deforest_Arr_2_17 = y;
      arr7 = (s, a) => {
        let first11, first01, x2, y1, lambda2;
        first01 = _deforest_Deforest_Arr_2_07;
        first11 = _deforest_Deforest_Arr_2_17;
        x2 = first01;
        y1 = first11;
        lambda2 = (undefined, function (p) {
          let tmp27, tmp28;
          tmp27 = ansi.goto(x2, y1);
          tmp28 = NofibPrelude.append(tmp27, s);
          return ansi.writeString(tmp28, a, p)
        });
        return lambda2
      };
      tmp24 = NofibPrelude.listLen(prompt);
      tmp25 = x1 + tmp24;
      arr8 = [
        tmp25,
        y
      ];
      tmp26 = readAt_inst_15_16_13_10_8_tsni(arr8, l, consume);
      return writeAt_inst_15_16_13_10_20_tsni(arr7, prompt, tmp26)
    };
    tmp21 = NofibPrelude.nofibStringToList("Please enter your name: ");
    lambda1 = (undefined, function (name) {
      let reply, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, arr7, arr8, tmp31, lambda2, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
      tmp24 = NofibPrelude.nofibStringToList("Hello ");
      tmp25 = NofibPrelude.nofibStringToList("!");
      tmp26 = NofibPrelude.append(name, tmp25);
      tmp27 = NofibPrelude.append(tmp24, tmp26);
      reply = tmp27;
      tmp28 = NofibPrelude.listLen(reply);
      tmp29 = tmp28 / 2;
      tmp30 = 40 - tmp29;
      _deforest_Deforest_Arr_2_08 = tmp30;
      _deforest_Deforest_Arr_2_18 = 18;
      arr7 = (s, a) => {
        let first1, first0, x1, y, lambda3;
        first0 = _deforest_Deforest_Arr_2_08;
        first1 = _deforest_Deforest_Arr_2_18;
        x1 = first0;
        y = first1;
        lambda3 = (undefined, function (p) {
          let tmp32, tmp33;
          tmp32 = ansi.goto(x1, y);
          tmp33 = NofibPrelude.append(tmp32, s);
          return ansi.writeString(tmp33, a, p)
        });
        return lambda3
      };
      _deforest_Deforest_Arr_2_07 = 1;
      _deforest_Deforest_Arr_2_17 = 23;
      arr8 = (a) => {
        let first1, first0, x1, y, lambda3;
        first0 = _deforest_Deforest_Arr_2_07;
        first1 = _deforest_Deforest_Arr_2_17;
        x1 = first0;
        y = first1;
        lambda3 = (undefined, function (p) {
          let tmp32;
          tmp32 = ansi.goto(x1, y);
          return ansi.writeString(tmp32, a, p)
        });
        return lambda3
      };
      lambda2 = (undefined, function (y) {
        let tmp32, lambda3;
        tmp32 = NofibPrelude.nofibStringToList("I'm waiting...");
        lambda3 = (undefined, function (x1) {
          return ansi.pressAnyKey(ansi.end, x1)
        });
        return ansi.writeString(tmp32, lambda3, y)
      });
      tmp31 = moveTo_inst_15_16_13_27_tsni(arr8, lambda2);
      return writeAt_inst_15_16_13_28_tsni(arr7, reply, tmp31)
    });
    tmp22 = lambda1;
    tmp23 = promptReadAt_inst_15_16_13_10_tsni(arr6, 18, tmp21, tmp22);
    return ansi.pressAnyKey(tmp23, x)
  });
  tmp20 = lambda;
  return writes_inst_15_16_13_11_tsni(tmp19, tmp20, input)
};
promptReadAt_inst_15_16_13_10_tsni = function promptReadAt_inst_15_16_13_10_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_15_16_13_10_8_tsni = function readAt_inst_15_16_13_10_8_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_15_16_13_10_8_6_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_15_16_13_10_8_4_tsni(x_y, tmp, tmp2)
};
writeAt_inst_15_16_13_10_8_4_tsni = function writeAt_inst_15_16_13_10_8_4_tsni(x_y, s, a) {
  let first1, first0, x, y, lambda;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    lambda = (undefined, function (p) {
      let tmp, tmp1;
      tmp = ansi.goto(x, y);
      tmp1 = append_inst_15_16_13_10_8_4_5_tsni(tmp, s);
      return writeString_inst_15_16_13_10_8_4_19_tsni(tmp1, a, p)
    });
    return lambda
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_15_16_13_10_8_4_5_tsni = function append_inst_15_16_13_10_8_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_16_13_10_8_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_15_16_13_10_8_4_19_18_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_15_16_13_10_8_6_tsni = function replicate_inst_15_16_13_10_8_6_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_16_13_10_8_6_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_15_16_13_10_8_4_19_18_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
writes_inst_15_16_13_11_tsni = function writes_inst_15_16_13_11_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_15_16_13_11_1_tsni(ss);
  return writeString_inst_15_16_13_11_17_tsni(tmp, a, b)
};
concat_inst_15_16_13_11_1_tsni = function concat_inst_15_16_13_11_1_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_16_13_11_1_2_tsni = function append_inst_15_16_13_11_1_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_16_13_11_1_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_15_16_13_11_17_18_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
writeString_inst_0_17_tsni = function writeString_inst_0_17_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_0_17_18_tsni(s, tmp)
};
append_inst_0_17_18_tsni = function append_inst_0_17_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_3_4_19_tsni = function writeString_inst_3_4_19_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_3_4_19_18_tsni(s, tmp)
};
append_inst_3_4_19_18_tsni = function append_inst_3_4_19_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_7_8_4_19_tsni = function writeString_inst_7_8_4_19_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_7_8_4_19_18_tsni(s, tmp)
};
append_inst_7_8_4_19_18_tsni = function append_inst_7_8_4_19_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_7_20_tsni = function writeAt_inst_7_20_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
at_inst_9_21_tsni = function at_inst_9_21_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_9_22_tsni = function at_inst_9_22_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_9_23_tsni = function at_inst_9_23_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_9_24_tsni = function at_inst_9_24_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_9_25_tsni = function at_inst_9_25_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_9_26_tsni = function at_inst_9_26_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
moveTo_inst_9_27_tsni = function moveTo_inst_9_27_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_9_28_tsni = function writeAt_inst_9_28_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_9_10_8_4_19_tsni = function writeString_inst_9_10_8_4_19_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_9_10_8_4_19_18_tsni(s, tmp)
};
append_inst_9_10_8_4_19_18_tsni = function append_inst_9_10_8_4_19_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_9_10_20_tsni = function writeAt_inst_9_10_20_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_9_11_17_tsni = function writeString_inst_9_11_17_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_9_11_17_18_tsni(s, tmp)
};
append_inst_9_11_17_18_tsni = function append_inst_9_11_17_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_12_13_11_17_tsni = function writeString_inst_12_13_11_17_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_12_13_11_17_18_tsni(s, tmp)
};
append_inst_12_13_11_17_18_tsni = function append_inst_12_13_11_17_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_12_13_10_8_4_19_tsni = function writeString_inst_12_13_10_8_4_19_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_12_13_10_8_4_19_18_tsni(s, tmp)
};
append_inst_12_13_10_8_4_19_18_tsni = function append_inst_12_13_10_8_4_19_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_12_13_10_20_tsni = function writeAt_inst_12_13_10_20_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
moveTo_inst_12_13_27_tsni = function moveTo_inst_12_13_27_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_12_13_28_tsni = function writeAt_inst_12_13_28_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
at_inst_12_13_26_tsni = function at_inst_12_13_26_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_12_13_25_tsni = function at_inst_12_13_25_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_12_13_24_tsni = function at_inst_12_13_24_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_12_13_23_tsni = function at_inst_12_13_23_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_12_13_22_tsni = function at_inst_12_13_22_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_12_13_21_tsni = function at_inst_12_13_21_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
foldr_inst_12_29_tsni = function foldr_inst_12_29_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_15_16_29_tsni = function foldr_inst_15_16_29_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
at_inst_15_16_13_21_tsni = function at_inst_15_16_13_21_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_16_13_22_tsni = function at_inst_15_16_13_22_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_16_13_23_tsni = function at_inst_15_16_13_23_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_16_13_24_tsni = function at_inst_15_16_13_24_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_16_13_25_tsni = function at_inst_15_16_13_25_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_16_13_26_tsni = function at_inst_15_16_13_26_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
moveTo_inst_15_16_13_27_tsni = function moveTo_inst_15_16_13_27_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_15_16_13_28_tsni = function writeAt_inst_15_16_13_28_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_15_16_13_10_8_4_19_tsni = function writeString_inst_15_16_13_10_8_4_19_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_15_16_13_10_8_4_19_18_tsni(s, tmp)
};
append_inst_15_16_13_10_8_4_19_18_tsni = function append_inst_15_16_13_10_8_4_19_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_15_16_13_10_20_tsni = function writeAt_inst_15_16_13_10_20_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_15_16_13_11_17_tsni = function writeString_inst_15_16_13_11_17_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_15_16_13_11_17_18_tsni(s, tmp)
};
append_inst_15_16_13_11_17_18_tsni = function append_inst_15_16_13_11_17_18_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
(class ansi {
  static {
    ansi1 = ansi;
    let tmp;
    tmp = NofibPrelude.nofibStringToList("L");
    this.cls = tmp;
  }
  static goto(x, y) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = NofibPrelude.stringOfInt(y);
    tmp1 = NofibPrelude.nofibStringToList(tmp);
    tmp2 = NofibPrelude.stringOfInt(x);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = NofibPrelude.nofibStringToList("H");
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    tmp6 = NofibPrelude.Cons(";", tmp5);
    tmp7 = NofibPrelude.append(tmp1, tmp6);
    tmp8 = NofibPrelude.Cons("[", tmp7);
    return NofibPrelude.Cons("E", tmp8)
  } 
  static at(x_y, s) {
    let first1, first0, x1, y1, tmp;
    if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
      first0 = x_y[0];
      first1 = x_y[1];
      x1 = first0;
      y1 = first1;
      tmp = ansi.goto(x1, y1);
      return NofibPrelude.append(tmp, s)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static highlight(s1) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.nofibStringToList("ESC[7m");
    tmp1 = NofibPrelude.nofibStringToList("ESC[0m");
    tmp2 = NofibPrelude.append(s1, tmp1);
    return NofibPrelude.append(tmp, tmp2)
  } 
  static end(xs) {
    return NofibPrelude.nofibStringToList("")
  } 
  static readChar(eof, consume, cs) {
    let param0, param1, c, cs1;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      param0 = cs.head;
      param1 = cs.tail;
      c = param0;
      cs1 = param1;
      return runtime.safeCall(consume(c, cs1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static peekChar(eof1, consume1, cs1) {
    let param0, param1, c, cs2, tmp;
    if (cs1 instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof1(NofibPrelude.Nil))
    } else if (cs1 instanceof NofibPrelude.Cons.class) {
      param0 = cs1.head;
      param1 = cs1.tail;
      c = param0;
      cs2 = param1;
      tmp = NofibPrelude.Cons(c, cs2);
      return runtime.safeCall(consume1(c, tmp))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pressAnyKey(prog, x1) {
    let lambda;
    lambda = (undefined, function (c, x2) {
      return runtime.safeCall(prog(x2))
    });
    return ansi.readChar(prog, lambda, x1)
  } 
  static unreadChar(c, prog1, cs2) {
    let tmp;
    tmp = NofibPrelude.Cons(c, cs2);
    return runtime.safeCall(prog1(tmp))
  } 
  static writeChar(c1, prog2, cs3) {
    let tmp;
    tmp = runtime.safeCall(prog2(cs3));
    return NofibPrelude.Cons(c1, tmp)
  } 
  static writeString(s2, prog3, cs4) {
    let tmp;
    tmp = runtime.safeCall(prog3(cs4));
    return NofibPrelude.append(s2, tmp)
  } 
  static writes(ss, a, b) {
    let tmp;
    tmp = concat_inst_0_1_tsni(ss);
    return writeString_inst_0_17_tsni(tmp, a, b)
  } 
  static ringBell(prog4, cs5) {
    return ansi.writeChar("B", prog4, cs5)
  } 
  static clearScreen(a1, b1) {
    return ansi.writeString(ansi.cls, a1, b1)
  } 
  static writeAt(x_y1, s3, a2) {
    let first1, first0, x2, y1, lambda;
    if (globalThis.Array.isArray(x_y1) && x_y1.length === 2) {
      first0 = x_y1[0];
      first1 = x_y1[1];
      x2 = first0;
      y1 = first1;
      lambda = (undefined, function (p) {
        let tmp, tmp1;
        tmp = ansi.goto(x2, y1);
        tmp1 = NofibPrelude.append(tmp, s3);
        return ansi.writeString(tmp1, a2, p)
      });
      return lambda
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static moveTo(x_y2, a3) {
    let first1, first0, x2, y1, lambda;
    if (globalThis.Array.isArray(x_y2) && x_y2.length === 2) {
      first0 = x_y2[0];
      first1 = x_y2[1];
      x2 = first0;
      y1 = first1;
      lambda = (undefined, function (p) {
        let tmp;
        tmp = ansi.goto(x2, y1);
        return ansi.writeString(tmp, a3, p)
      });
      return lambda
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static returnn(s4, consume2) {
    let tmp;
    tmp = NofibPrelude.reverse(s4);
    return runtime.safeCall(consume2(tmp))
  } 
  static deletee(n, s5, l, consume3, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = n > 0;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList("BS_BS");
      tmp1 = n - 1;
      tmp2 = NofibPrelude.tail(s5);
      tmp3 = ansi.loop(tmp1, tmp2, l, consume3);
      return ansi.writeString(tmp, tmp3, d)
    } else {
      tmp4 = NofibPrelude.nofibStringToList("");
      tmp5 = ansi.loop(0, tmp4, l, consume3);
      return ansi.ringBell(tmp5, d)
    }
  } 
  static loop(n1, s6, l1, consume4) {
    let lambda;
    lambda = (undefined, function (x2) {
      let tmp, tmp1, lambda1;
      tmp = ansi.returnn(s6, consume4);
      lambda1 = (undefined, function (c2, d1) {
        let scrut, scrut1, scrut2, scrut3, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut3 = c2 == "B";
        if (scrut3 === true) {
          return ansi.deletee(n1, s6, l1, consume4, d1)
        } else {
          scrut2 = c2 == "D";
          if (scrut2 === true) {
            return ansi.deletee(n1, s6, l1, consume4, d1)
          } else {
            scrut1 = c2 == "`";
            if (scrut1 === true) {
              tmp2 = ansi.returnn(s6, consume4);
              return runtime.safeCall(tmp2(d1))
            } else {
              scrut = n1 < l1;
              if (scrut === true) {
                tmp3 = n1 + 1;
                tmp4 = NofibPrelude.Cons(c2, s6);
                tmp5 = ansi.loop(tmp3, tmp4, l1, consume4);
                return ansi.writeChar(c2, tmp5, d1)
              } else {
                tmp6 = ansi.loop(n1, s6, l1, consume4);
                return ansi.ringBell(tmp6, d1)
              }
            }
          }
        }
      });
      tmp1 = lambda1;
      return ansi.readChar(tmp, tmp1, x2)
    });
    return lambda
  } 
  static readAt(x_y3, l2, consume5) {
    let tmp, tmp1, tmp2;
    tmp = replicate_inst_3_6_tsni(l2, "_");
    tmp1 = ansi.loop(0, "", l2, consume5);
    tmp2 = ansi.moveTo(x_y3, tmp1);
    return writeAt_inst_3_4_tsni(x_y3, tmp, tmp2)
  } 
  static promptReadAt(x_y4, l3, prompt, consume6) {
    let first1, first0, x2, y1, arr, tmp, tmp1, arr1, tmp2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (globalThis.Array.isArray(x_y4) && x_y4.length === 2) {
      first0 = x_y4[0];
      first1 = x_y4[1];
      x2 = first0;
      y1 = first1;
      _deforest_Deforest_Arr_2_0 = x2;
      _deforest_Deforest_Arr_2_1 = y1;
      arr = (s7, a4) => {
        let first11, first01, x3, y2, lambda;
        first01 = _deforest_Deforest_Arr_2_0;
        first11 = _deforest_Deforest_Arr_2_1;
        x3 = first01;
        y2 = first11;
        lambda = (undefined, function (p) {
          let tmp3, tmp4;
          tmp3 = ansi.goto(x3, y2);
          tmp4 = NofibPrelude.append(tmp3, s7);
          return ansi.writeString(tmp4, a4, p)
        });
        return lambda
      };
      tmp = NofibPrelude.listLen(prompt);
      tmp1 = x2 + tmp;
      arr1 = [
        tmp1,
        y1
      ];
      tmp2 = readAt_inst_7_8_tsni(arr1, l3, consume6);
      return writeAt_inst_7_20_tsni(arr, prompt, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static program(input) {
    let arr, tmp, tmp1, tmp2, arr1, tmp3, tmp4, arr2, tmp5, tmp6, arr3, tmp7, tmp8, arr4, tmp9, tmp10, arr5, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, lambda, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
    _deforest_Deforest_Arr_2_0 = 17;
    _deforest_Deforest_Arr_2_1 = 5;
    arr = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp = NofibPrelude.nofibStringToList("Demonstration program");
    tmp1 = ansi.highlight(tmp);
    tmp2 = at_inst_9_21_tsni(arr, tmp1);
    _deforest_Deforest_Arr_2_01 = 48;
    _deforest_Deforest_Arr_2_11 = 5;
    arr1 = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp3 = NofibPrelude.nofibStringToList("Version 1.0");
    tmp4 = at_inst_9_22_tsni(arr1, tmp3);
    _deforest_Deforest_Arr_2_02 = 17;
    _deforest_Deforest_Arr_2_12 = 7;
    arr2 = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp5 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
    tmp6 = at_inst_9_23_tsni(arr2, tmp5);
    _deforest_Deforest_Arr_2_03 = 17;
    _deforest_Deforest_Arr_2_13 = 8;
    arr3 = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_03;
      first1 = _deforest_Deforest_Arr_2_13;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp7 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
    tmp8 = at_inst_9_24_tsni(arr3, tmp7);
    _deforest_Deforest_Arr_2_04 = 17;
    _deforest_Deforest_Arr_2_14 = 9;
    arr4 = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_04;
      first1 = _deforest_Deforest_Arr_2_14;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp9 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
    tmp10 = at_inst_9_25_tsni(arr4, tmp9);
    _deforest_Deforest_Arr_2_05 = 17;
    _deforest_Deforest_Arr_2_15 = 11;
    arr5 = (s7) => {
      let first1, first0, x2, y1, tmp21;
      first0 = _deforest_Deforest_Arr_2_05;
      first1 = _deforest_Deforest_Arr_2_15;
      x2 = first0;
      y1 = first1;
      tmp21 = ansi.goto(x2, y1);
      return NofibPrelude.append(tmp21, s7)
    };
    tmp11 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
    tmp12 = at_inst_9_26_tsni(arr5, tmp11);
    _deforest_Cons_head6 = tmp12;
    _deforest_Cons_tail6 = () => {
      return (ys) => {
        return ys
      }
    };
    tmp13 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp10;
    _deforest_Cons_tail5 = tmp13;
    tmp14 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp8;
    _deforest_Cons_tail4 = tmp14;
    tmp15 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp6;
    _deforest_Cons_tail3 = tmp15;
    tmp16 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp4;
    _deforest_Cons_tail2 = tmp16;
    tmp17 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp2;
    _deforest_Cons_tail1 = tmp17;
    tmp18 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = ansi.cls;
    _deforest_Cons_tail = tmp18;
    tmp19 = () => {
      return match_ls_arm_Cons_inst_9_11_1_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    lambda = (undefined, function (x2) {
      let arr6, tmp21, tmp22, tmp23, lambda1, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
      _deforest_Deforest_Arr_2_06 = 17;
      _deforest_Deforest_Arr_2_16 = 15;
      arr6 = (l4, prompt1, consume7) => {
        let first1, first0, x3, y1, arr7, tmp24, tmp25, arr8, tmp26, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17;
        first0 = _deforest_Deforest_Arr_2_06;
        first1 = _deforest_Deforest_Arr_2_16;
        x3 = first0;
        y1 = first1;
        _deforest_Deforest_Arr_2_07 = x3;
        _deforest_Deforest_Arr_2_17 = y1;
        arr7 = (s7, a4) => {
          let first11, first01, x4, y2, lambda2;
          first01 = _deforest_Deforest_Arr_2_07;
          first11 = _deforest_Deforest_Arr_2_17;
          x4 = first01;
          y2 = first11;
          lambda2 = (undefined, function (p) {
            let tmp27, tmp28;
            tmp27 = ansi.goto(x4, y2);
            tmp28 = NofibPrelude.append(tmp27, s7);
            return ansi.writeString(tmp28, a4, p)
          });
          return lambda2
        };
        tmp24 = NofibPrelude.listLen(prompt1);
        tmp25 = x3 + tmp24;
        arr8 = [
          tmp25,
          y1
        ];
        tmp26 = readAt_inst_9_10_8_tsni(arr8, l4, consume7);
        return writeAt_inst_9_10_20_tsni(arr7, prompt1, tmp26)
      };
      tmp21 = NofibPrelude.nofibStringToList("Please enter your name: ");
      lambda1 = (undefined, function (name) {
        let reply, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, arr7, arr8, tmp31, lambda2, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18;
        tmp24 = NofibPrelude.nofibStringToList("Hello ");
        tmp25 = NofibPrelude.nofibStringToList("!");
        tmp26 = NofibPrelude.append(name, tmp25);
        tmp27 = NofibPrelude.append(tmp24, tmp26);
        reply = tmp27;
        tmp28 = NofibPrelude.listLen(reply);
        tmp29 = tmp28 / 2;
        tmp30 = 40 - tmp29;
        _deforest_Deforest_Arr_2_08 = tmp30;
        _deforest_Deforest_Arr_2_18 = 18;
        arr7 = (s7, a4) => {
          let first1, first0, x3, y1, lambda3;
          first0 = _deforest_Deforest_Arr_2_08;
          first1 = _deforest_Deforest_Arr_2_18;
          x3 = first0;
          y1 = first1;
          lambda3 = (undefined, function (p) {
            let tmp32, tmp33;
            tmp32 = ansi.goto(x3, y1);
            tmp33 = NofibPrelude.append(tmp32, s7);
            return ansi.writeString(tmp33, a4, p)
          });
          return lambda3
        };
        _deforest_Deforest_Arr_2_07 = 1;
        _deforest_Deforest_Arr_2_17 = 23;
        arr8 = (a4) => {
          let first1, first0, x3, y1, lambda3;
          first0 = _deforest_Deforest_Arr_2_07;
          first1 = _deforest_Deforest_Arr_2_17;
          x3 = first0;
          y1 = first1;
          lambda3 = (undefined, function (p) {
            let tmp32;
            tmp32 = ansi.goto(x3, y1);
            return ansi.writeString(tmp32, a4, p)
          });
          return lambda3
        };
        lambda2 = (undefined, function (y1) {
          let tmp32, lambda3;
          tmp32 = NofibPrelude.nofibStringToList("I'm waiting...");
          lambda3 = (undefined, function (x3) {
            return ansi.pressAnyKey(ansi.end, x3)
          });
          return ansi.writeString(tmp32, lambda3, y1)
        });
        tmp31 = moveTo_inst_9_27_tsni(arr8, lambda2);
        return writeAt_inst_9_28_tsni(arr7, reply, tmp31)
      });
      tmp22 = lambda1;
      tmp23 = promptReadAt_inst_9_10_tsni(arr6, 18, tmp21, tmp22);
      return ansi.pressAnyKey(tmp23, x2)
    });
    tmp20 = lambda;
    return writes_inst_9_11_tsni(tmp19, tmp20, input)
  } 
  static testAnsi_nofib(n2) {
    let tmp, tmp1, tmp2, lambda;
    tmp = replicate_inst_12_14_tsni(n2, program_inst_12_13_tsni);
    lambda = (undefined, function (x2) {
      return x2
    });
    tmp1 = foldr_inst_12_29_tsni(NofibPrelude.compose, lambda, tmp);
    tmp2 = NofibPrelude.nofibStringToList("testtesttest");
    return runtime.safeCall(tmp1(tmp2))
  } 
  static main() {
    let tmp;
    tmp = testAnsi_nofib_inst_15_16_tsni(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  static toString() { return "ansi"; }
});
let ansi = ansi1; export default ansi;
