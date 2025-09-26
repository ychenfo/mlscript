const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let ansi1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda_inst_1_2_tsni, promptReadAt_inst_1_3_tsni, readAt_inst_1_3_4_tsni, writeAt_inst_1_3_4_5_tsni, lambda_inst_1_3_4_5_6_tsni, lambda$_inst_1_3_4_5_6_7_tsni, append_inst_1_3_4_5_6_7_8_tsni, replicate_inst_1_3_4_9_tsni, concat_inst_10_11_tsni, append_inst_10_11_12_tsni, writeAt_inst_13_5_tsni, lambda_inst_13_5_6_tsni, lambda$_inst_13_5_6_7_tsni, append_inst_13_5_6_7_8_tsni, replicate_inst_13_9_tsni, readAt_inst_14_4_tsni, writeAt_inst_14_4_5_tsni, lambda_inst_14_4_5_6_tsni, lambda$_inst_14_4_5_6_7_tsni, append_inst_14_4_5_6_7_8_tsni, replicate_inst_14_4_9_tsni, lambda_inst_15_16_tsni, promptReadAt_inst_15_16_3_tsni, readAt_inst_15_16_3_4_tsni, writeAt_inst_15_16_3_4_5_tsni, lambda_inst_15_16_3_4_5_6_tsni, lambda$_inst_15_16_3_4_5_6_7_tsni, append_inst_15_16_3_4_5_6_7_8_tsni, replicate_inst_15_16_3_4_9_tsni, lambda_inst_15_16_2_tsni, writes_inst_15_17_tsni, concat_inst_15_17_11_tsni, append_inst_15_17_11_12_tsni, program_inst_18_19_tsni, writes_inst_18_19_17_tsni, concat_inst_18_19_17_11_tsni, append_inst_18_19_17_11_12_tsni, lambda_inst_18_19_16_tsni, lambda_inst_18_19_16_2_tsni, promptReadAt_inst_18_19_16_3_tsni, readAt_inst_18_19_16_3_4_tsni, writeAt_inst_18_19_16_3_4_5_tsni, lambda_inst_18_19_16_3_4_5_6_tsni, lambda$_inst_18_19_16_3_4_5_6_7_tsni, append_inst_18_19_16_3_4_5_6_7_8_tsni, replicate_inst_18_19_16_3_4_9_tsni, replicate_inst_18_20_tsni, testAnsi_nofib_inst_21_22_tsni, replicate_inst_21_22_20_tsni, program_inst_21_22_19_tsni, lambda_inst_21_22_19_16_tsni, promptReadAt_inst_21_22_19_16_3_tsni, readAt_inst_21_22_19_16_3_4_tsni, writeAt_inst_21_22_19_16_3_4_5_tsni, lambda_inst_21_22_19_16_3_4_5_6_tsni, lambda$_inst_21_22_19_16_3_4_5_6_7_tsni, append_inst_21_22_19_16_3_4_5_6_7_8_tsni, replicate_inst_21_22_19_16_3_4_9_tsni, lambda_inst_21_22_19_16_2_tsni, writes_inst_21_22_19_17_tsni, concat_inst_21_22_19_17_11_tsni, append_inst_21_22_19_17_11_12_tsni, moveTo_inst_0_23_tsni, writeAt_inst_0_24_tsni, moveTo_inst_1_2_23_tsni, writeAt_inst_1_2_24_tsni, writeString_inst_1_3_4_5_6_7_25_tsni, append_inst_1_3_4_5_6_7_25_26_tsni, writeAt_inst_1_3_27_tsni, writeString_inst_10_28_tsni, append_inst_10_28_26_tsni, writeString_inst_13_5_6_7_25_tsni, append_inst_13_5_6_7_25_26_tsni, writeString_inst_14_4_5_6_7_25_tsni, append_inst_14_4_5_6_7_25_26_tsni, writeAt_inst_14_27_tsni, at_inst_15_29_tsni, at_inst_15_30_tsni, at_inst_15_31_tsni, at_inst_15_32_tsni, at_inst_15_33_tsni, at_inst_15_34_tsni, writeString_inst_15_16_3_4_5_6_7_25_tsni, append_inst_15_16_3_4_5_6_7_25_26_tsni, writeAt_inst_15_16_3_27_tsni, moveTo_inst_15_16_2_23_tsni, writeAt_inst_15_16_2_24_tsni, writeString_inst_15_17_28_tsni, append_inst_15_17_28_26_tsni, writeString_inst_18_19_17_28_tsni, append_inst_18_19_17_28_26_tsni, moveTo_inst_18_19_16_2_23_tsni, writeAt_inst_18_19_16_2_24_tsni, writeString_inst_18_19_16_3_4_5_6_7_25_tsni, append_inst_18_19_16_3_4_5_6_7_25_26_tsni, writeAt_inst_18_19_16_3_27_tsni, at_inst_18_19_34_tsni, at_inst_18_19_33_tsni, at_inst_18_19_32_tsni, at_inst_18_19_31_tsni, at_inst_18_19_30_tsni, at_inst_18_19_29_tsni, foldr_inst_18_35_tsni, foldr_inst_21_22_35_tsni, at_inst_21_22_19_29_tsni, at_inst_21_22_19_30_tsni, at_inst_21_22_19_31_tsni, at_inst_21_22_19_32_tsni, at_inst_21_22_19_33_tsni, at_inst_21_22_19_34_tsni, writeString_inst_21_22_19_16_3_4_5_6_7_25_tsni, append_inst_21_22_19_16_3_4_5_6_7_25_26_tsni, writeAt_inst_21_22_19_16_3_27_tsni, moveTo_inst_21_22_19_16_2_23_tsni, writeAt_inst_21_22_19_16_2_24_tsni, writeString_inst_21_22_19_17_28_tsni, append_inst_21_22_19_17_28_26_tsni, match_xs_arm_Cons_inst_1_3_4_5_6_7_25_26_tsni, match_xs_arm_Cons_inst_13_5_6_7_25_26_tsni, match_xs_arm_Cons_inst_14_4_5_6_7_25_26_tsni, match_xs_arm_Cons_inst_15_16_3_4_5_6_7_25_26_tsni, match_ls_arm_Cons_inst_15_17_11_tsni, match_xs_arm_Cons_inst_18_19_16_3_4_5_6_7_25_26_tsni, match_ls_arm_Cons_inst_18_19_17_11_tsni, match_xs_arm_Cons_inst_21_22_19_16_3_4_5_6_7_25_26_tsni, match_ls_arm_Cons_inst_21_22_19_17_11_tsni;
match_xs_arm_Cons_inst_1_3_4_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_1_3_4_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_1_3_4_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_1_3_4_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_1_3_4_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_1_3_4_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_13_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_13_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_13_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_13_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_13_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_13_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_14_4_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_14_4_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_14_4_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_14_4_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_14_4_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_14_4_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_15_16_3_4_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_15_16_3_4_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_15_16_3_4_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_16_3_4_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_15_16_3_4_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_15_16_3_4_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_15_17_11_tsni = (undefined, function (_deforest_Cons_head_inst_15_17_11_tsni, _deforest_Cons_tail_inst_15_17_11_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_17_11_tsni;
  param1 = _deforest_Cons_tail_inst_15_17_11_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_15_17_11_tsni(xs);
  return append_inst_15_17_11_12_tsni(x, tmp)
});
match_xs_arm_Cons_inst_18_19_16_3_4_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_18_19_16_3_4_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_18_19_16_3_4_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_18_19_16_3_4_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_16_3_4_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_18_19_16_3_4_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_18_19_17_11_tsni = (undefined, function (_deforest_Cons_head_inst_18_19_17_11_tsni, _deforest_Cons_tail_inst_18_19_17_11_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_18_19_17_11_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_17_11_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_18_19_17_11_tsni(xs);
  return append_inst_18_19_17_11_12_tsni(x, tmp)
});
match_xs_arm_Cons_inst_21_22_19_16_3_4_5_6_7_25_26_tsni = (undefined, function (ys, _deforest_Cons_head_inst_21_22_19_16_3_4_5_6_7_25_26_tsni, _deforest_Cons_tail_inst_21_22_19_16_3_4_5_6_7_25_26_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_21_22_19_16_3_4_5_6_7_25_26_tsni;
  param1 = _deforest_Cons_tail_inst_21_22_19_16_3_4_5_6_7_25_26_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_21_22_19_16_3_4_5_6_7_25_26_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_21_22_19_17_11_tsni = (undefined, function (_deforest_Cons_head_inst_21_22_19_17_11_tsni, _deforest_Cons_tail_inst_21_22_19_17_11_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_21_22_19_17_11_tsni;
  param1 = _deforest_Cons_tail_inst_21_22_19_17_11_tsni;
  x = param0;
  xs = param1;
  tmp = concat_inst_21_22_19_17_11_tsni(xs);
  return append_inst_21_22_19_17_11_12_tsni(x, tmp)
});
lambda_inst_1_2_tsni = (undefined, function (name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = NofibPrelude.append(name, tmp1);
  reply = NofibPrelude.append(tmp, tmp2);
  tmp3 = NofibPrelude.listLen(reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  _deforest_Deforest_Arr_2_01 = tmp5;
  _deforest_Deforest_Arr_2_11 = 18;
  tmp6 = (s, a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda7(s, a, x, y))
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 23;
  tmp7 = (a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda8(a, x, y))
  };
  tmp8 = moveTo_inst_1_2_23_tsni(tmp7, lambda3);
  return writeAt_inst_1_2_24_tsni(tmp6, reply, tmp8)
});
promptReadAt_inst_1_3_tsni = function promptReadAt_inst_1_3_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_1_3_4_tsni = function readAt_inst_1_3_4_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_1_3_4_9_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_1_3_4_5_tsni(x_y, tmp, tmp2)
};
writeAt_inst_1_3_4_5_tsni = function writeAt_inst_1_3_4_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_1_3_4_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_1_3_4_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_1_3_4_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_1_3_4_5_6_7_tsni = function lambda$_inst_1_3_4_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_1_3_4_5_6_7_8_tsni(tmp, s);
  return writeString_inst_1_3_4_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_1_3_4_5_6_7_8_tsni = function append_inst_1_3_4_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_1_3_4_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_1_3_4_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_1_3_4_9_tsni = function replicate_inst_1_3_4_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_1_3_4_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_1_3_4_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
concat_inst_10_11_tsni = function concat_inst_10_11_tsni(ls) {
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
    tmp = concat_inst_10_11_tsni(xs);
    return append_inst_10_11_12_tsni(x, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_10_11_12_tsni = function append_inst_10_11_12_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_10_11_12_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_10_28_26_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
writeAt_inst_13_5_tsni = function writeAt_inst_13_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_13_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_13_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_13_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_13_5_6_7_tsni = function lambda$_inst_13_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_13_5_6_7_8_tsni(tmp, s);
  return writeString_inst_13_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_13_5_6_7_8_tsni = function append_inst_13_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_13_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_13_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_13_9_tsni = function replicate_inst_13_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_13_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_13_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
readAt_inst_14_4_tsni = function readAt_inst_14_4_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_14_4_9_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_14_4_5_tsni(x_y, tmp, tmp2)
};
writeAt_inst_14_4_5_tsni = function writeAt_inst_14_4_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_14_4_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_14_4_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_14_4_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_14_4_5_6_7_tsni = function lambda$_inst_14_4_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_14_4_5_6_7_8_tsni(tmp, s);
  return writeString_inst_14_4_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_14_4_5_6_7_8_tsni = function append_inst_14_4_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_14_4_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_14_4_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_14_4_9_tsni = function replicate_inst_14_4_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_14_4_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_14_4_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
lambda_inst_15_16_tsni = (undefined, function (x) {
  let tmp, tmp1, tmp2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 15;
  tmp = (l, prompt, consume) => {
    let first1, first0, x1, y, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x1 = first0;
    y = first1;
    _deforest_Deforest_Arr_2_01 = x1;
    _deforest_Deforest_Arr_2_11 = y;
    tmp3 = (s, a) => {
      let first11, first01, x2, y1;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x2 = first01;
      y1 = first11;
      return runtime.safeCall(lambda7(s, a, x2, y1))
    };
    tmp4 = NofibPrelude.listLen(prompt);
    tmp5 = x1 + tmp4;
    tmp6 = globalThis.Object.freeze([
      tmp5,
      y
    ]);
    tmp7 = readAt_inst_15_16_3_4_tsni(tmp6, l, consume);
    return writeAt_inst_15_16_3_27_tsni(tmp3, prompt, tmp7)
  };
  tmp1 = NofibPrelude.nofibStringToList("Please enter your name: ");
  tmp2 = promptReadAt_inst_15_16_3_tsni(tmp, 18, tmp1, lambda_inst_15_16_2_tsni);
  return ansi1.pressAnyKey(tmp2, x)
});
promptReadAt_inst_15_16_3_tsni = function promptReadAt_inst_15_16_3_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_15_16_3_4_tsni = function readAt_inst_15_16_3_4_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_15_16_3_4_9_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_15_16_3_4_5_tsni(x_y, tmp, tmp2)
};
writeAt_inst_15_16_3_4_5_tsni = function writeAt_inst_15_16_3_4_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_15_16_3_4_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_15_16_3_4_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_15_16_3_4_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_15_16_3_4_5_6_7_tsni = function lambda$_inst_15_16_3_4_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_15_16_3_4_5_6_7_8_tsni(tmp, s);
  return writeString_inst_15_16_3_4_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_15_16_3_4_5_6_7_8_tsni = function append_inst_15_16_3_4_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_16_3_4_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_15_16_3_4_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_15_16_3_4_9_tsni = function replicate_inst_15_16_3_4_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_16_3_4_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_15_16_3_4_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
lambda_inst_15_16_2_tsni = (undefined, function (name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = NofibPrelude.append(name, tmp1);
  reply = NofibPrelude.append(tmp, tmp2);
  tmp3 = NofibPrelude.listLen(reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  _deforest_Deforest_Arr_2_01 = tmp5;
  _deforest_Deforest_Arr_2_11 = 18;
  tmp6 = (s, a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda7(s, a, x, y))
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 23;
  tmp7 = (a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda8(a, x, y))
  };
  tmp8 = moveTo_inst_15_16_2_23_tsni(tmp7, lambda3);
  return writeAt_inst_15_16_2_24_tsni(tmp6, reply, tmp8)
});
writes_inst_15_17_tsni = function writes_inst_15_17_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_15_17_11_tsni(ss);
  return writeString_inst_15_17_28_tsni(tmp, a, b)
};
concat_inst_15_17_11_tsni = function concat_inst_15_17_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_17_11_12_tsni = function append_inst_15_17_11_12_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_17_11_12_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_15_17_28_26_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
program_inst_18_19_tsni = function program_inst_18_19_tsni(input) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15;
  _deforest_Deforest_Arr_2_05 = 17;
  _deforest_Deforest_Arr_2_15 = 5;
  tmp = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_05;
    first1 = _deforest_Deforest_Arr_2_15;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
  tmp2 = ansi.highlight(tmp1);
  tmp3 = at_inst_18_19_29_tsni(tmp, tmp2);
  _deforest_Deforest_Arr_2_04 = 48;
  _deforest_Deforest_Arr_2_14 = 5;
  tmp4 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_04;
    first1 = _deforest_Deforest_Arr_2_14;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp5 = NofibPrelude.nofibStringToList("Version 1.0");
  tmp6 = at_inst_18_19_30_tsni(tmp4, tmp5);
  _deforest_Deforest_Arr_2_03 = 17;
  _deforest_Deforest_Arr_2_13 = 7;
  tmp7 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_03;
    first1 = _deforest_Deforest_Arr_2_13;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp8 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
  tmp9 = at_inst_18_19_31_tsni(tmp7, tmp8);
  _deforest_Deforest_Arr_2_02 = 17;
  _deforest_Deforest_Arr_2_12 = 8;
  tmp10 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp11 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
  tmp12 = at_inst_18_19_32_tsni(tmp10, tmp11);
  _deforest_Deforest_Arr_2_01 = 17;
  _deforest_Deforest_Arr_2_11 = 9;
  tmp13 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp14 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
  tmp15 = at_inst_18_19_33_tsni(tmp13, tmp14);
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 11;
  tmp16 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp17 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
  tmp18 = at_inst_18_19_34_tsni(tmp16, tmp17);
  _deforest_Cons_head6 = tmp18;
  _deforest_Cons_tail6 = () => {
    return (ys) => {
      return ys
    }
  };
  tmp19 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp15;
  _deforest_Cons_tail5 = tmp19;
  tmp20 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp12;
  _deforest_Cons_tail4 = tmp20;
  tmp21 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp9;
  _deforest_Cons_tail3 = tmp21;
  tmp22 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp6;
  _deforest_Cons_tail2 = tmp22;
  tmp23 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp3;
  _deforest_Cons_tail1 = tmp23;
  tmp24 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = ansi.cls;
  _deforest_Cons_tail = tmp24;
  tmp25 = () => {
    return match_ls_arm_Cons_inst_18_19_17_11_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  return writes_inst_18_19_17_tsni(tmp25, lambda_inst_18_19_16_tsni, input)
};
writes_inst_18_19_17_tsni = function writes_inst_18_19_17_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_18_19_17_11_tsni(ss);
  return writeString_inst_18_19_17_28_tsni(tmp, a, b)
};
concat_inst_18_19_17_11_tsni = function concat_inst_18_19_17_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_18_19_17_11_12_tsni = function append_inst_18_19_17_11_12_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_18_19_17_11_12_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_18_19_17_28_26_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_18_19_16_tsni = (undefined, function (x) {
  let tmp, tmp1, tmp2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 15;
  tmp = (l, prompt, consume) => {
    let first1, first0, x1, y, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x1 = first0;
    y = first1;
    _deforest_Deforest_Arr_2_01 = x1;
    _deforest_Deforest_Arr_2_11 = y;
    tmp3 = (s, a) => {
      let first11, first01, x2, y1;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x2 = first01;
      y1 = first11;
      return runtime.safeCall(lambda7(s, a, x2, y1))
    };
    tmp4 = NofibPrelude.listLen(prompt);
    tmp5 = x1 + tmp4;
    tmp6 = globalThis.Object.freeze([
      tmp5,
      y
    ]);
    tmp7 = readAt_inst_18_19_16_3_4_tsni(tmp6, l, consume);
    return writeAt_inst_18_19_16_3_27_tsni(tmp3, prompt, tmp7)
  };
  tmp1 = NofibPrelude.nofibStringToList("Please enter your name: ");
  tmp2 = promptReadAt_inst_18_19_16_3_tsni(tmp, 18, tmp1, lambda_inst_18_19_16_2_tsni);
  return ansi1.pressAnyKey(tmp2, x)
});
lambda_inst_18_19_16_2_tsni = (undefined, function (name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = NofibPrelude.append(name, tmp1);
  reply = NofibPrelude.append(tmp, tmp2);
  tmp3 = NofibPrelude.listLen(reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  _deforest_Deforest_Arr_2_01 = tmp5;
  _deforest_Deforest_Arr_2_11 = 18;
  tmp6 = (s, a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda7(s, a, x, y))
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 23;
  tmp7 = (a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda8(a, x, y))
  };
  tmp8 = moveTo_inst_18_19_16_2_23_tsni(tmp7, lambda3);
  return writeAt_inst_18_19_16_2_24_tsni(tmp6, reply, tmp8)
});
promptReadAt_inst_18_19_16_3_tsni = function promptReadAt_inst_18_19_16_3_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_18_19_16_3_4_tsni = function readAt_inst_18_19_16_3_4_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_18_19_16_3_4_9_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_18_19_16_3_4_5_tsni(x_y, tmp, tmp2)
};
writeAt_inst_18_19_16_3_4_5_tsni = function writeAt_inst_18_19_16_3_4_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_18_19_16_3_4_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_18_19_16_3_4_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_18_19_16_3_4_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_18_19_16_3_4_5_6_7_tsni = function lambda$_inst_18_19_16_3_4_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_18_19_16_3_4_5_6_7_8_tsni(tmp, s);
  return writeString_inst_18_19_16_3_4_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_18_19_16_3_4_5_6_7_8_tsni = function append_inst_18_19_16_3_4_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_18_19_16_3_4_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_18_19_16_3_4_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_18_19_16_3_4_9_tsni = function replicate_inst_18_19_16_3_4_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_19_16_3_4_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_18_19_16_3_4_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
replicate_inst_18_20_tsni = function replicate_inst_18_20_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, z) => {
      return z
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_20_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, z) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = foldr_inst_18_35_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp2))
    }
  }
};
testAnsi_nofib_inst_21_22_tsni = function testAnsi_nofib_inst_21_22_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_21_22_20_tsni(n, program_inst_21_22_19_tsni);
  tmp1 = foldr_inst_21_22_35_tsni(NofibPrelude.compose, lambda6, tmp);
  tmp2 = NofibPrelude.nofibStringToList("testtesttest");
  return runtime.safeCall(tmp1(tmp2))
};
replicate_inst_21_22_20_tsni = function replicate_inst_21_22_20_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, z) => {
      return z
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_22_20_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, z) => {
      let param0, param1, h, t, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h = param0;
      t = param1;
      tmp2 = foldr_inst_21_22_35_tsni(f, z, t);
      return runtime.safeCall(f(h, tmp2))
    }
  }
};
program_inst_21_22_19_tsni = function program_inst_21_22_19_tsni(input) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 5;
  tmp = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
  tmp2 = ansi.highlight(tmp1);
  tmp3 = at_inst_21_22_19_29_tsni(tmp, tmp2);
  _deforest_Deforest_Arr_2_01 = 48;
  _deforest_Deforest_Arr_2_11 = 5;
  tmp4 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp5 = NofibPrelude.nofibStringToList("Version 1.0");
  tmp6 = at_inst_21_22_19_30_tsni(tmp4, tmp5);
  _deforest_Deforest_Arr_2_02 = 17;
  _deforest_Deforest_Arr_2_12 = 7;
  tmp7 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp8 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
  tmp9 = at_inst_21_22_19_31_tsni(tmp7, tmp8);
  _deforest_Deforest_Arr_2_03 = 17;
  _deforest_Deforest_Arr_2_13 = 8;
  tmp10 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_03;
    first1 = _deforest_Deforest_Arr_2_13;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp11 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
  tmp12 = at_inst_21_22_19_32_tsni(tmp10, tmp11);
  _deforest_Deforest_Arr_2_04 = 17;
  _deforest_Deforest_Arr_2_14 = 9;
  tmp13 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_04;
    first1 = _deforest_Deforest_Arr_2_14;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp14 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
  tmp15 = at_inst_21_22_19_33_tsni(tmp13, tmp14);
  _deforest_Deforest_Arr_2_05 = 17;
  _deforest_Deforest_Arr_2_15 = 11;
  tmp16 = (s) => {
    let first1, first0, x, y, tmp26;
    first0 = _deforest_Deforest_Arr_2_05;
    first1 = _deforest_Deforest_Arr_2_15;
    x = first0;
    y = first1;
    tmp26 = ansi.goto(x, y);
    return NofibPrelude.append(tmp26, s)
  };
  tmp17 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
  tmp18 = at_inst_21_22_19_34_tsni(tmp16, tmp17);
  _deforest_Cons_head6 = tmp18;
  _deforest_Cons_tail6 = () => {
    return (ys) => {
      return ys
    }
  };
  tmp19 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = tmp15;
  _deforest_Cons_tail5 = tmp19;
  tmp20 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = tmp12;
  _deforest_Cons_tail4 = tmp20;
  tmp21 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = tmp9;
  _deforest_Cons_tail3 = tmp21;
  tmp22 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = tmp6;
  _deforest_Cons_tail2 = tmp22;
  tmp23 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = tmp3;
  _deforest_Cons_tail1 = tmp23;
  tmp24 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = ansi.cls;
  _deforest_Cons_tail = tmp24;
  tmp25 = () => {
    return match_ls_arm_Cons_inst_21_22_19_17_11_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  return writes_inst_21_22_19_17_tsni(tmp25, lambda_inst_21_22_19_16_tsni, input)
};
lambda_inst_21_22_19_16_tsni = (undefined, function (x) {
  let tmp, tmp1, tmp2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 15;
  tmp = (l, prompt, consume) => {
    let first1, first0, x1, y, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x1 = first0;
    y = first1;
    _deforest_Deforest_Arr_2_01 = x1;
    _deforest_Deforest_Arr_2_11 = y;
    tmp3 = (s, a) => {
      let first11, first01, x2, y1;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x2 = first01;
      y1 = first11;
      return runtime.safeCall(lambda7(s, a, x2, y1))
    };
    tmp4 = NofibPrelude.listLen(prompt);
    tmp5 = x1 + tmp4;
    tmp6 = globalThis.Object.freeze([
      tmp5,
      y
    ]);
    tmp7 = readAt_inst_21_22_19_16_3_4_tsni(tmp6, l, consume);
    return writeAt_inst_21_22_19_16_3_27_tsni(tmp3, prompt, tmp7)
  };
  tmp1 = NofibPrelude.nofibStringToList("Please enter your name: ");
  tmp2 = promptReadAt_inst_21_22_19_16_3_tsni(tmp, 18, tmp1, lambda_inst_21_22_19_16_2_tsni);
  return ansi1.pressAnyKey(tmp2, x)
});
promptReadAt_inst_21_22_19_16_3_tsni = function promptReadAt_inst_21_22_19_16_3_tsni(x_y, l, prompt, consume) {
  return runtime.safeCall(x_y(l, prompt, consume))
};
readAt_inst_21_22_19_16_3_4_tsni = function readAt_inst_21_22_19_16_3_4_tsni(x_y, l, consume) {
  let tmp, tmp1, tmp2;
  tmp = replicate_inst_21_22_19_16_3_4_9_tsni(l, "_");
  tmp1 = ansi.loop(0, "", l, consume);
  tmp2 = ansi.moveTo(x_y, tmp1);
  return writeAt_inst_21_22_19_16_3_4_5_tsni(x_y, tmp, tmp2)
};
writeAt_inst_21_22_19_16_3_4_5_tsni = function writeAt_inst_21_22_19_16_3_4_5_tsni(x_y, s, a) {
  let first1, first0, x, y;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    return runtime.safeCall(lambda_inst_21_22_19_16_3_4_5_6_tsni(s, a, x, y))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_21_22_19_16_3_4_5_6_tsni = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$_inst_21_22_19_16_3_4_5_6_7_tsni(s, a, x, y, p)
  }
});
lambda$_inst_21_22_19_16_3_4_5_6_7_tsni = function lambda$_inst_21_22_19_16_3_4_5_6_7_tsni(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = append_inst_21_22_19_16_3_4_5_6_7_8_tsni(tmp, s);
  return writeString_inst_21_22_19_16_3_4_5_6_7_25_tsni(tmp1, a, p)
};
append_inst_21_22_19_16_3_4_5_6_7_8_tsni = function append_inst_21_22_19_16_3_4_5_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_21_22_19_16_3_4_5_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_21_22_19_16_3_4_5_6_7_25_26_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replicate_inst_21_22_19_16_3_4_9_tsni = function replicate_inst_21_22_19_16_3_4_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_21_22_19_16_3_4_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_21_22_19_16_3_4_5_6_7_25_26_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
lambda_inst_21_22_19_16_2_tsni = (undefined, function (name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = NofibPrelude.append(name, tmp1);
  reply = NofibPrelude.append(tmp, tmp2);
  tmp3 = NofibPrelude.listLen(reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  _deforest_Deforest_Arr_2_01 = tmp5;
  _deforest_Deforest_Arr_2_11 = 18;
  tmp6 = (s, a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda7(s, a, x, y))
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 23;
  tmp7 = (a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda8(a, x, y))
  };
  tmp8 = moveTo_inst_21_22_19_16_2_23_tsni(tmp7, lambda3);
  return writeAt_inst_21_22_19_16_2_24_tsni(tmp6, reply, tmp8)
});
writes_inst_21_22_19_17_tsni = function writes_inst_21_22_19_17_tsni(ss, a, b) {
  let tmp;
  tmp = concat_inst_21_22_19_17_11_tsni(ss);
  return writeString_inst_21_22_19_17_28_tsni(tmp, a, b)
};
concat_inst_21_22_19_17_11_tsni = function concat_inst_21_22_19_17_11_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_21_22_19_17_11_12_tsni = function append_inst_21_22_19_17_11_12_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_21_22_19_17_11_12_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_21_22_19_17_28_26_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
moveTo_inst_0_23_tsni = function moveTo_inst_0_23_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_0_24_tsni = function writeAt_inst_0_24_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
moveTo_inst_1_2_23_tsni = function moveTo_inst_1_2_23_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_1_2_24_tsni = function writeAt_inst_1_2_24_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_1_3_4_5_6_7_25_tsni = function writeString_inst_1_3_4_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_1_3_4_5_6_7_25_26_tsni(s, tmp)
};
append_inst_1_3_4_5_6_7_25_26_tsni = function append_inst_1_3_4_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_1_3_27_tsni = function writeAt_inst_1_3_27_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_10_28_tsni = function writeString_inst_10_28_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_10_28_26_tsni(s, tmp)
};
append_inst_10_28_26_tsni = function append_inst_10_28_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_13_5_6_7_25_tsni = function writeString_inst_13_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_13_5_6_7_25_26_tsni(s, tmp)
};
append_inst_13_5_6_7_25_26_tsni = function append_inst_13_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_14_4_5_6_7_25_tsni = function writeString_inst_14_4_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_14_4_5_6_7_25_26_tsni(s, tmp)
};
append_inst_14_4_5_6_7_25_26_tsni = function append_inst_14_4_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_14_27_tsni = function writeAt_inst_14_27_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
at_inst_15_29_tsni = function at_inst_15_29_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_30_tsni = function at_inst_15_30_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_31_tsni = function at_inst_15_31_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_32_tsni = function at_inst_15_32_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_33_tsni = function at_inst_15_33_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_15_34_tsni = function at_inst_15_34_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
writeString_inst_15_16_3_4_5_6_7_25_tsni = function writeString_inst_15_16_3_4_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_15_16_3_4_5_6_7_25_26_tsni(s, tmp)
};
append_inst_15_16_3_4_5_6_7_25_26_tsni = function append_inst_15_16_3_4_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_15_16_3_27_tsni = function writeAt_inst_15_16_3_27_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
moveTo_inst_15_16_2_23_tsni = function moveTo_inst_15_16_2_23_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_15_16_2_24_tsni = function writeAt_inst_15_16_2_24_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_15_17_28_tsni = function writeString_inst_15_17_28_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_15_17_28_26_tsni(s, tmp)
};
append_inst_15_17_28_26_tsni = function append_inst_15_17_28_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeString_inst_18_19_17_28_tsni = function writeString_inst_18_19_17_28_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_18_19_17_28_26_tsni(s, tmp)
};
append_inst_18_19_17_28_26_tsni = function append_inst_18_19_17_28_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
moveTo_inst_18_19_16_2_23_tsni = function moveTo_inst_18_19_16_2_23_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_18_19_16_2_24_tsni = function writeAt_inst_18_19_16_2_24_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_18_19_16_3_4_5_6_7_25_tsni = function writeString_inst_18_19_16_3_4_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_18_19_16_3_4_5_6_7_25_26_tsni(s, tmp)
};
append_inst_18_19_16_3_4_5_6_7_25_26_tsni = function append_inst_18_19_16_3_4_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_18_19_16_3_27_tsni = function writeAt_inst_18_19_16_3_27_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
at_inst_18_19_34_tsni = function at_inst_18_19_34_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_18_19_33_tsni = function at_inst_18_19_33_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_18_19_32_tsni = function at_inst_18_19_32_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_18_19_31_tsni = function at_inst_18_19_31_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_18_19_30_tsni = function at_inst_18_19_30_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_18_19_29_tsni = function at_inst_18_19_29_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
foldr_inst_18_35_tsni = function foldr_inst_18_35_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_21_22_35_tsni = function foldr_inst_21_22_35_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
at_inst_21_22_19_29_tsni = function at_inst_21_22_19_29_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_21_22_19_30_tsni = function at_inst_21_22_19_30_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_21_22_19_31_tsni = function at_inst_21_22_19_31_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_21_22_19_32_tsni = function at_inst_21_22_19_32_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_21_22_19_33_tsni = function at_inst_21_22_19_33_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
at_inst_21_22_19_34_tsni = function at_inst_21_22_19_34_tsni(x_y, s) {
  return runtime.safeCall(x_y(s))
};
writeString_inst_21_22_19_16_3_4_5_6_7_25_tsni = function writeString_inst_21_22_19_16_3_4_5_6_7_25_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_21_22_19_16_3_4_5_6_7_25_26_tsni(s, tmp)
};
append_inst_21_22_19_16_3_4_5_6_7_25_26_tsni = function append_inst_21_22_19_16_3_4_5_6_7_25_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
writeAt_inst_21_22_19_16_3_27_tsni = function writeAt_inst_21_22_19_16_3_27_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
moveTo_inst_21_22_19_16_2_23_tsni = function moveTo_inst_21_22_19_16_2_23_tsni(x_y, a) {
  return runtime.safeCall(x_y(a))
};
writeAt_inst_21_22_19_16_2_24_tsni = function writeAt_inst_21_22_19_16_2_24_tsni(x_y, s, a) {
  return runtime.safeCall(x_y(s, a))
};
writeString_inst_21_22_19_17_28_tsni = function writeString_inst_21_22_19_17_28_tsni(s, prog, cs) {
  let tmp;
  tmp = runtime.safeCall(prog(cs));
  return append_inst_21_22_19_17_28_26_tsni(s, tmp)
};
append_inst_21_22_19_17_28_26_tsni = function append_inst_21_22_19_17_28_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda6 = (undefined, function (x) {
  return x
});
lambda2 = (undefined, function (x) {
  return ansi1.pressAnyKey(ansi1.end, x)
});
lambda3 = (undefined, function (y) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("I'm waiting...");
  return ansi1.writeString(tmp, lambda2, y)
});
lambda4 = (undefined, function (name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = NofibPrelude.append(name, tmp1);
  reply = NofibPrelude.append(tmp, tmp2);
  tmp3 = NofibPrelude.listLen(reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  _deforest_Deforest_Arr_2_01 = tmp5;
  _deforest_Deforest_Arr_2_11 = 18;
  tmp6 = (s, a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda7(s, a, x, y))
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 23;
  tmp7 = (a) => {
    let first1, first0, x, y;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x = first0;
    y = first1;
    return runtime.safeCall(lambda8(a, x, y))
  };
  tmp8 = moveTo_inst_0_23_tsni(tmp7, lambda3);
  return writeAt_inst_0_24_tsni(tmp6, reply, tmp8)
});
lambda5 = (undefined, function (x) {
  let tmp, tmp1, tmp2, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = 17;
  _deforest_Deforest_Arr_2_1 = 15;
  tmp = (l, prompt, consume) => {
    let first1, first0, x1, y, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    x1 = first0;
    y = first1;
    _deforest_Deforest_Arr_2_01 = x1;
    _deforest_Deforest_Arr_2_11 = y;
    tmp3 = (s, a) => {
      let first11, first01, x2, y1;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x2 = first01;
      y1 = first11;
      return runtime.safeCall(lambda7(s, a, x2, y1))
    };
    tmp4 = NofibPrelude.listLen(prompt);
    tmp5 = x1 + tmp4;
    tmp6 = globalThis.Object.freeze([
      tmp5,
      y
    ]);
    tmp7 = readAt_inst_1_3_4_tsni(tmp6, l, consume);
    return writeAt_inst_1_3_27_tsni(tmp3, prompt, tmp7)
  };
  tmp1 = NofibPrelude.nofibStringToList("Please enter your name: ");
  tmp2 = promptReadAt_inst_1_3_tsni(tmp, 18, tmp1, lambda_inst_1_2_tsni);
  return ansi1.pressAnyKey(tmp2, x)
});
lambda$4 = function lambda$(n, s, l, consume, c, d) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4;
  scrut3 = c == "B";
  if (scrut3 === true) {
    return ansi1.deletee(n, s, l, consume, d)
  } else {
    scrut2 = c == "D";
    if (scrut2 === true) {
      return ansi1.deletee(n, s, l, consume, d)
    } else {
      scrut1 = c == "`";
      if (scrut1 === true) {
        tmp = ansi1.returnn(s, consume);
        return runtime.safeCall(tmp(d))
      } else {
        scrut = n < l;
        if (scrut === true) {
          tmp1 = n + 1;
          tmp2 = NofibPrelude.Cons(c, s);
          tmp3 = ansi1.loop(tmp1, tmp2, l, consume);
          return ansi1.writeChar(c, tmp3, d)
        } else {
          tmp4 = ansi1.loop(n, s, l, consume);
          return ansi1.ringBell(tmp4, d)
        }
      }
    }
  }
};
lambda1 = (undefined, function (n, s, l, consume) {
  return (c, d) => {
    return lambda$4(n, s, l, consume, c, d)
  }
});
lambda$3 = function lambda$(n, s, l, consume, x) {
  let tmp, lambda$this;
  tmp = ansi1.returnn(s, consume);
  lambda$this = runtime.safeCall(lambda1(n, s, l, consume));
  return ansi1.readChar(tmp, lambda$this, x)
};
lambda9 = (undefined, function (n, s, l, consume) {
  return (x) => {
    return lambda$3(n, s, l, consume, x)
  }
});
lambda$2 = function lambda$(a, x, y, p) {
  let tmp;
  tmp = ansi1.goto(x, y);
  return ansi1.writeString(tmp, a, p)
};
lambda8 = (undefined, function (a, x, y) {
  return (p) => {
    return lambda$2(a, x, y, p)
  }
});
lambda$1 = function lambda$(s, a, x, y, p) {
  let tmp, tmp1;
  tmp = ansi1.goto(x, y);
  tmp1 = NofibPrelude.append(tmp, s);
  return ansi1.writeString(tmp1, a, p)
};
lambda7 = (undefined, function (s, a, x, y) {
  return (p) => {
    return lambda$1(s, a, x, y, p)
  }
});
lambda$ = function lambda$(prog, c, x) {
  return runtime.safeCall(prog(x))
};
lambda = (undefined, function (prog) {
  return (c, x) => {
    return lambda$(prog, c, x)
  }
});
globalThis.Object.freeze(class ansi {
  static {
    ansi1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
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
    let first1, first0, x, y, tmp;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      tmp = ansi.goto(x, y);
      return NofibPrelude.append(tmp, s)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static highlight(s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.nofibStringToList("ESC[7m");
    tmp1 = NofibPrelude.nofibStringToList("ESC[0m");
    tmp2 = NofibPrelude.append(s, tmp1);
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static peekChar(eof, consume, cs) {
    let param0, param1, c, cs1, tmp;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      param0 = cs.head;
      param1 = cs.tail;
      c = param0;
      cs1 = param1;
      tmp = NofibPrelude.Cons(c, cs1);
      return runtime.safeCall(consume(c, tmp))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static pressAnyKey(prog, x) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda(prog));
    return ansi.readChar(prog, lambda$this, x)
  } 
  static unreadChar(c, prog, cs) {
    let tmp;
    tmp = NofibPrelude.Cons(c, cs);
    return runtime.safeCall(prog(tmp))
  } 
  static writeChar(c, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.Cons(c, tmp)
  } 
  static writeString(s, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.append(s, tmp)
  } 
  static writes(ss, a, b) {
    let tmp;
    tmp = concat_inst_10_11_tsni(ss);
    return writeString_inst_10_28_tsni(tmp, a, b)
  } 
  static ringBell(prog, cs) {
    return ansi.writeChar("B", prog, cs)
  } 
  static clearScreen(a, b) {
    return ansi.writeString(ansi.cls, a, b)
  } 
  static writeAt(x_y, s, a) {
    let first1, first0, x, y;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      return runtime.safeCall(lambda7(s, a, x, y))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static moveTo(x_y, a) {
    let first1, first0, x, y;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      return runtime.safeCall(lambda8(a, x, y))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static returnn(s, consume) {
    let tmp;
    tmp = NofibPrelude.reverse(s);
    return runtime.safeCall(consume(tmp))
  } 
  static deletee(n, s, l, consume, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = n > 0;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList("BS_BS");
      tmp1 = n - 1;
      tmp2 = NofibPrelude.tail(s);
      tmp3 = ansi.loop(tmp1, tmp2, l, consume);
      return ansi.writeString(tmp, tmp3, d)
    } else {
      tmp4 = NofibPrelude.nofibStringToList("");
      tmp5 = ansi.loop(0, tmp4, l, consume);
      return ansi.ringBell(tmp5, d)
    }
  } 
  static loop(n, s, l, consume) {
    return runtime.safeCall(lambda9(n, s, l, consume))
  } 
  static readAt(x_y, l, consume) {
    let tmp, tmp1, tmp2;
    tmp = replicate_inst_13_9_tsni(l, "_");
    tmp1 = ansi.loop(0, "", l, consume);
    tmp2 = ansi.moveTo(x_y, tmp1);
    return writeAt_inst_13_5_tsni(x_y, tmp, tmp2)
  } 
  static promptReadAt(x_y, l, prompt, consume) {
    let first1, first0, x, y, tmp, tmp1, tmp2, tmp3, tmp4, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = y;
      tmp = (s, a) => {
        let first11, first01, x1, y1;
        first01 = _deforest_Deforest_Arr_2_0;
        first11 = _deforest_Deforest_Arr_2_1;
        x1 = first01;
        y1 = first11;
        return runtime.safeCall(lambda7(s, a, x1, y1))
      };
      tmp1 = NofibPrelude.listLen(prompt);
      tmp2 = x + tmp1;
      tmp3 = globalThis.Object.freeze([
        tmp2,
        y
      ]);
      tmp4 = readAt_inst_14_4_tsni(tmp3, l, consume);
      return writeAt_inst_14_27_tsni(tmp, prompt, tmp4)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static program(input) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6;
    _deforest_Deforest_Arr_2_0 = 17;
    _deforest_Deforest_Arr_2_1 = 5;
    tmp = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
    tmp2 = ansi.highlight(tmp1);
    tmp3 = at_inst_15_29_tsni(tmp, tmp2);
    _deforest_Deforest_Arr_2_01 = 48;
    _deforest_Deforest_Arr_2_11 = 5;
    tmp4 = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp5 = NofibPrelude.nofibStringToList("Version 1.0");
    tmp6 = at_inst_15_30_tsni(tmp4, tmp5);
    _deforest_Deforest_Arr_2_02 = 17;
    _deforest_Deforest_Arr_2_12 = 7;
    tmp7 = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp8 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
    tmp9 = at_inst_15_31_tsni(tmp7, tmp8);
    _deforest_Deforest_Arr_2_03 = 17;
    _deforest_Deforest_Arr_2_13 = 8;
    tmp10 = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_03;
      first1 = _deforest_Deforest_Arr_2_13;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp11 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
    tmp12 = at_inst_15_32_tsni(tmp10, tmp11);
    _deforest_Deforest_Arr_2_04 = 17;
    _deforest_Deforest_Arr_2_14 = 9;
    tmp13 = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_04;
      first1 = _deforest_Deforest_Arr_2_14;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp14 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
    tmp15 = at_inst_15_33_tsni(tmp13, tmp14);
    _deforest_Deforest_Arr_2_05 = 17;
    _deforest_Deforest_Arr_2_15 = 11;
    tmp16 = (s) => {
      let first1, first0, x, y, tmp26;
      first0 = _deforest_Deforest_Arr_2_05;
      first1 = _deforest_Deforest_Arr_2_15;
      x = first0;
      y = first1;
      tmp26 = ansi.goto(x, y);
      return NofibPrelude.append(tmp26, s)
    };
    tmp17 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
    tmp18 = at_inst_15_34_tsni(tmp16, tmp17);
    _deforest_Cons_head6 = tmp18;
    _deforest_Cons_tail6 = () => {
      return (ys) => {
        return ys
      }
    };
    tmp19 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = tmp15;
    _deforest_Cons_tail5 = tmp19;
    tmp20 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = tmp12;
    _deforest_Cons_tail4 = tmp20;
    tmp21 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = tmp9;
    _deforest_Cons_tail3 = tmp21;
    tmp22 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = tmp6;
    _deforest_Cons_tail2 = tmp22;
    tmp23 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = tmp3;
    _deforest_Cons_tail1 = tmp23;
    tmp24 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = ansi.cls;
    _deforest_Cons_tail = tmp24;
    tmp25 = () => {
      return match_ls_arm_Cons_inst_15_17_11_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    return writes_inst_15_17_tsni(tmp25, lambda_inst_15_16_tsni, input)
  } 
  static testAnsi_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = replicate_inst_18_20_tsni(n, program_inst_18_19_tsni);
    tmp1 = foldr_inst_18_35_tsni(NofibPrelude.compose, lambda6, tmp);
    tmp2 = NofibPrelude.nofibStringToList("testtesttest");
    return runtime.safeCall(tmp1(tmp2))
  } 
  static main() {
    let tmp;
    tmp = testAnsi_nofib_inst_21_22_tsni(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"]; 
});
let ansi = ansi1; export default ansi;
