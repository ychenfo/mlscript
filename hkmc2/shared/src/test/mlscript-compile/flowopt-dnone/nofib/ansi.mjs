const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const append$accessorSymbol = globalThis.Symbol("append");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
const end$accessorSymbol = globalThis.Symbol("end");
let ansi1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, main_testAnsi_nofib_program$program, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda, main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda$, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee, main_testAnsi_nofib_program_writes_concat_append$append, main_testAnsi_nofib_replicate$replicate, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons, main_testAnsi_nofib_program_writes_writeString_append$xs_Nil, main_testAnsi_nofib_program_writes_writeString_append$xs_Cons, main_testAnsi_nofib_foldr$xs_Nil, main_testAnsi_nofib_foldr$xs_Cons;
main_testAnsi_nofib_program$program = function main_testAnsi_nofib_program$program(input) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, Cons_head, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, tmp9, arg$Cons$1$, fv_tmp, fv_tmp1, fv_tmp2, fv_consume, tmp10, tmp11, a, element1$, element0$, element1$1, element0$1, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, inlinedVal15, inlinedVal16, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, inlinedVal17, inlinedVal18, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, inlinedVal19, inlinedVal20, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, inlinedVal21, inlinedVal22, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, inlinedVal23, inlinedVal24, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32;
  tmp = NofibPrelude.nofibStringToList("Demonstration program");
  tmp6 = NofibPrelude.nofibStringToList("ESC[7m");
  tmp7 = NofibPrelude.nofibStringToList("ESC[0m");
  tmp8 = ansi1[append$accessorSymbol](tmp, tmp7);
  inlinedVal = ansi1[append$accessorSymbol](tmp6, tmp8);
  inlinedVal25 = 5 + "";
  tmp47 = NofibPrelude.nofibStringToList(inlinedVal25);
  inlinedVal26 = 17 + "";
  tmp48 = NofibPrelude.nofibStringToList(inlinedVal26);
  tmp49 = NofibPrelude.nofibStringToList("H");
  tmp50 = ansi1[append$accessorSymbol](tmp48, tmp49);
  tmp51 = NofibPrelude.Cons(";", tmp50);
  tmp52 = ansi1[append$accessorSymbol](tmp47, tmp51);
  tmp53 = NofibPrelude.Cons("[", tmp52);
  inlinedVal8 = NofibPrelude.Cons("E", tmp53);
  inlinedVal1 = ansi1[append$accessorSymbol](inlinedVal8, inlinedVal);
  tmp1 = NofibPrelude.nofibStringToList("Version 1.0");
  inlinedVal23 = 5 + "";
  tmp40 = NofibPrelude.nofibStringToList(inlinedVal23);
  inlinedVal24 = 48 + "";
  tmp41 = NofibPrelude.nofibStringToList(inlinedVal24);
  tmp42 = NofibPrelude.nofibStringToList("H");
  tmp43 = ansi1[append$accessorSymbol](tmp41, tmp42);
  tmp44 = NofibPrelude.Cons(";", tmp43);
  tmp45 = ansi1[append$accessorSymbol](tmp40, tmp44);
  tmp46 = NofibPrelude.Cons("[", tmp45);
  inlinedVal9 = NofibPrelude.Cons("E", tmp46);
  inlinedVal2 = ansi1[append$accessorSymbol](inlinedVal9, tmp1);
  tmp2 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
  inlinedVal21 = 7 + "";
  tmp33 = NofibPrelude.nofibStringToList(inlinedVal21);
  inlinedVal22 = 17 + "";
  tmp34 = NofibPrelude.nofibStringToList(inlinedVal22);
  tmp35 = NofibPrelude.nofibStringToList("H");
  tmp36 = ansi1[append$accessorSymbol](tmp34, tmp35);
  tmp37 = NofibPrelude.Cons(";", tmp36);
  tmp38 = ansi1[append$accessorSymbol](tmp33, tmp37);
  tmp39 = NofibPrelude.Cons("[", tmp38);
  inlinedVal10 = NofibPrelude.Cons("E", tmp39);
  inlinedVal3 = ansi1[append$accessorSymbol](inlinedVal10, tmp2);
  tmp3 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
  inlinedVal19 = 8 + "";
  tmp26 = NofibPrelude.nofibStringToList(inlinedVal19);
  inlinedVal20 = 17 + "";
  tmp27 = NofibPrelude.nofibStringToList(inlinedVal20);
  tmp28 = NofibPrelude.nofibStringToList("H");
  tmp29 = ansi1[append$accessorSymbol](tmp27, tmp28);
  tmp30 = NofibPrelude.Cons(";", tmp29);
  tmp31 = ansi1[append$accessorSymbol](tmp26, tmp30);
  tmp32 = NofibPrelude.Cons("[", tmp31);
  inlinedVal11 = NofibPrelude.Cons("E", tmp32);
  inlinedVal4 = ansi1[append$accessorSymbol](inlinedVal11, tmp3);
  tmp4 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
  inlinedVal17 = 9 + "";
  tmp19 = NofibPrelude.nofibStringToList(inlinedVal17);
  inlinedVal18 = 17 + "";
  tmp20 = NofibPrelude.nofibStringToList(inlinedVal18);
  tmp21 = NofibPrelude.nofibStringToList("H");
  tmp22 = ansi1[append$accessorSymbol](tmp20, tmp21);
  tmp23 = NofibPrelude.Cons(";", tmp22);
  tmp24 = ansi1[append$accessorSymbol](tmp19, tmp23);
  tmp25 = NofibPrelude.Cons("[", tmp24);
  inlinedVal12 = NofibPrelude.Cons("E", tmp25);
  inlinedVal5 = ansi1[append$accessorSymbol](inlinedVal12, tmp4);
  tmp5 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
  inlinedVal15 = 11 + "";
  tmp12 = NofibPrelude.nofibStringToList(inlinedVal15);
  inlinedVal16 = 17 + "";
  tmp13 = NofibPrelude.nofibStringToList(inlinedVal16);
  tmp14 = NofibPrelude.nofibStringToList("H");
  tmp15 = ansi1[append$accessorSymbol](tmp13, tmp14);
  tmp16 = NofibPrelude.Cons(";", tmp15);
  tmp17 = ansi1[append$accessorSymbol](tmp12, tmp16);
  tmp18 = NofibPrelude.Cons("[", tmp17);
  inlinedVal13 = NofibPrelude.Cons("E", tmp18);
  inlinedVal6 = ansi1[append$accessorSymbol](inlinedVal13, tmp5);
  Cons_head = ansi1.cls;
  inlinedVal32 = main_testAnsi_nofib_program_writes_writeString_append$xs_Nil();
  inlinedVal31 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal6, inlinedVal32);
  inlinedVal30 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal5, inlinedVal31);
  inlinedVal29 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal4, inlinedVal30);
  inlinedVal28 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal3, inlinedVal29);
  inlinedVal27 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal2, inlinedVal28);
  inlinedVal14 = main_testAnsi_nofib_program_writes_concat_append$append(inlinedVal1, inlinedVal27);
  inlinedVal7 = main_testAnsi_nofib_program_writes_concat_append$append(Cons_head, inlinedVal14);
  tmp9 = NofibPrelude.nofibStringToList("Please enter your name: ");
  fv_consume = main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi1);
  fv_tmp = ansi1[listLen$accessorSymbol](tmp9);
  fv_tmp1 = 17 + fv_tmp;
  fv_tmp2 = globalThis.Object.freeze([
    fv_tmp1,
    15
  ]);
  tmp10 = ansi1[replicate$accessorSymbol](18, "_");
  tmp11 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(0, "", 18, fv_consume);
  if (runtime.Tuple.isArrayLike(fv_tmp2) && fv_tmp2.length === 2) {
    element0$ = runtime.Tuple.get(fv_tmp2, 0);
    element1$ = runtime.Tuple.get(fv_tmp2, 1);
    a = lambda$2(ansi1, tmp11, element0$, element1$);
    if (runtime.Tuple.isArrayLike(fv_tmp2) && fv_tmp2.length === 2) {
      element0$1 = runtime.Tuple.get(fv_tmp2, 0);
      element1$1 = runtime.Tuple.get(fv_tmp2, 1);
      if (input instanceof NofibPrelude.Nil.class) {
        let a1, p, inlinedVal33;
        a1 = lambda$1(ansi1, tmp10, a, element0$1, element1$1);
        p = NofibPrelude.Nil;
        inlinedVal33 = lambda2(ansi1, tmp9, a1, 17, 15, p);
        return inlinedVal7(inlinedVal33, undefined, undefined, undefined, undefined, undefined)
      } else if (input instanceof NofibPrelude.Cons.class) {
        let a1, inlinedVal33;
        arg$Cons$1$ = input.tail;
        a1 = lambda$1(ansi1, tmp10, a, element0$1, element1$1);
        inlinedVal33 = lambda2(ansi1, tmp9, a1, 17, 15, arg$Cons$1$);
        return inlinedVal7(inlinedVal33, undefined, undefined, undefined, undefined, undefined)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, fv_a, fv_a1;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  inlinedVal = name(tmp1, undefined, undefined, undefined, undefined, undefined);
  reply = ansi2[append$accessorSymbol](tmp, inlinedVal);
  tmp2 = ansi2[listLen$accessorSymbol](reply);
  tmp3 = tmp2 / 2;
  tmp4 = 40 - tmp3;
  fv_a = lambda$3(ansi2);
  fv_a1 = lambda$2(ansi1, fv_a, 1, 23);
  return lambda$1(ansi1, reply, fv_a1, tmp4, 18)
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$ = function main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi2) {
  return (name) => {
    return main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name)
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(n, s, l, consume, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4;
  scrut = n > 0;
  if (scrut === true) {
    let tmp5, arg$Cons$1$;
    tmp = NofibPrelude.nofibStringToList("BS_BS");
    tmp1 = n - 1;
    if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = s.tail;
      tmp2 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(tmp1, arg$Cons$1$, l, consume);
      tmp5 = runtime.safeCall(tmp2(d));
      return ansi1[append$accessorSymbol](tmp, tmp5)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  {
    let tmp5;
    tmp3 = NofibPrelude.nofibStringToList("");
    tmp4 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(0, tmp3, l, consume);
    tmp5 = runtime.safeCall(tmp4(d));
    return NofibPrelude.Cons("B", tmp5);
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(n, s, l, consume) {
  return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda$(ansi1, n, s, l, consume)
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda(ansi2, n, s, l, consume, x) {
  let consume1, inlinedVal, l$_, l1, inlinedVal1, arg$Cons$0$, arg$Cons$1$;
  consume1 = consume;
  l$_ = main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil();
  l1 = s;
  inlinedLbl: {
    loopLabel: while (true) {
      let arg$Cons$0$1, arg$Cons$1$1;
      if (l1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = l1.head;
        arg$Cons$1$1 = l1.tail;
        l$_ = main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(arg$Cons$0$1, l$_);
        l1 = arg$Cons$1$1;
        continue loopLabel
      }
      inlinedVal1 = l$_;
      break inlinedLbl;
    }
  }
  inlinedVal = runtime.safeCall(consume1(inlinedVal1));
  if (x instanceof NofibPrelude.Nil.class) {
    return runtime.safeCall(inlinedVal(NofibPrelude.Nil))
  } else if (x instanceof NofibPrelude.Cons.class) {
    let d, scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3;
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    d = arg$Cons$1$;
    scrut = arg$Cons$0$ == "B";
    if (scrut === true) {
      return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(n, s, l, consume, arg$Cons$1$)
    }
    scrut1 = arg$Cons$0$ == "D";
    if (scrut1 === true) {
      return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(n, s, l, consume, arg$Cons$1$)
    }
    scrut2 = arg$Cons$0$ == "`";
    if (scrut2 === true) {
      let consume2, inlinedVal2, l$_1, l2, inlinedVal3;
      consume2 = consume;
      l$_1 = main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil();
      l2 = s;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = l2.head;
            arg$Cons$1$1 = l2.tail;
            l$_1 = main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(arg$Cons$0$1, l$_1);
            l2 = arg$Cons$1$1;
            continue loopLabel1
          }
          inlinedVal3 = l$_1;
          break inlinedLbl1;
        }
      }
      inlinedVal2 = runtime.safeCall(consume2(inlinedVal3));
      return runtime.safeCall(inlinedVal2(d))
    }
    scrut3 = n < l;
    if (scrut3 === true) {
      let tmp4;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, s);
      tmp2 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(tmp, tmp1, l, consume);
      tmp4 = runtime.safeCall(tmp2(arg$Cons$1$));
      return NofibPrelude.Cons(arg$Cons$0$, tmp4)
    }
    {
      let tmp4;
      tmp3 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(n, s, l, consume);
      tmp4 = runtime.safeCall(tmp3(arg$Cons$1$));
      return NofibPrelude.Cons("B", tmp4);
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda$ = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda$(ansi2, n, s, l, consume) {
  return (x) => {
    return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda(ansi2, n, s, l, consume, x)
  }
};
main_testAnsi_nofib_program_writes_concat_append$append = function main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testAnsi_nofib_program_writes_concat_append$append(arg$Cons$1$, ys);
    return main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_replicate$replicate = function main_testAnsi_nofib_replicate$replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return main_testAnsi_nofib_foldr$xs_Nil()
  }
  tmp = n - 1;
  tmp1 = main_testAnsi_nofib_replicate$replicate(tmp, x);
  return main_testAnsi_nofib_foldr$xs_Cons(x, tmp1);
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testAnsi_nofib_program_writes_writeString_append$xs_Nil = function main_testAnsi_nofib_program_writes_writeString_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testAnsi_nofib_program_writes_writeString_append$xs_Cons = function main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testAnsi_nofib_foldr$xs_Nil = function main_testAnsi_nofib_foldr$xs_Nil() {
  return (fv_z, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp, fv_f) => {
    return fv_z
  }
};
main_testAnsi_nofib_foldr$xs_Cons = function main_testAnsi_nofib_foldr$xs_Cons(Cons_head, Cons_tail) {
  return (fv_z, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp, fv_f) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_z, undefined, undefined, undefined, undefined, undefined, fv_f);
    return runtime.safeCall(fv_f(Cons_head, inlinedVal))
  }
};
lambda1 = (undefined, function (x) {
  return x
});
lambda$3 = (undefined, function (ansi2) {
  return (y) => {
    return lambda(ansi2, y)
  }
});
lambda = (undefined, function (ansi2, y) {
  let tmp, inlinedVal, prog, arg$Cons$1$;
  tmp = NofibPrelude.nofibStringToList("I'm waiting...");
  prog = ansi2[end$accessorSymbol];
  if (y instanceof NofibPrelude.Nil.class) {
    inlinedVal = runtime.safeCall(prog(NofibPrelude.Nil));
    return ansi2[append$accessorSymbol](tmp, inlinedVal)
  } else if (y instanceof NofibPrelude.Cons.class) {
    let inlinedVal1;
    arg$Cons$1$ = y.tail;
    inlinedVal1 = runtime.safeCall(prog(arg$Cons$1$));
    return ansi2[append$accessorSymbol](tmp, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (ansi2, a, x, y) {
  return (p) => {
    return lambda3(ansi2, a, x, y, p)
  }
});
lambda3 = (undefined, function (ansi2, a, x, y, p) {
  let tmp, inlinedVal, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal1, inlinedVal2;
  inlinedVal1 = y + "";
  tmp1 = NofibPrelude.nofibStringToList(inlinedVal1);
  inlinedVal2 = x + "";
  tmp2 = NofibPrelude.nofibStringToList(inlinedVal2);
  tmp3 = NofibPrelude.nofibStringToList("H");
  tmp4 = ansi2[append$accessorSymbol](tmp2, tmp3);
  tmp5 = NofibPrelude.Cons(";", tmp4);
  tmp6 = ansi2[append$accessorSymbol](tmp1, tmp5);
  tmp7 = NofibPrelude.Cons("[", tmp6);
  inlinedVal = NofibPrelude.Cons("E", tmp7);
  tmp = runtime.safeCall(a(p));
  return ansi2[append$accessorSymbol](inlinedVal, tmp)
});
lambda$1 = (undefined, function (ansi2, s, a, x, y) {
  return (p) => {
    return lambda2(ansi2, s, a, x, y, p)
  }
});
lambda2 = (undefined, function (ansi2, s, a, x, y, p) {
  let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal1, inlinedVal2;
  inlinedVal1 = y + "";
  tmp2 = NofibPrelude.nofibStringToList(inlinedVal1);
  inlinedVal2 = x + "";
  tmp3 = NofibPrelude.nofibStringToList(inlinedVal2);
  tmp4 = NofibPrelude.nofibStringToList("H");
  tmp5 = ansi2[append$accessorSymbol](tmp3, tmp4);
  tmp6 = NofibPrelude.Cons(";", tmp5);
  tmp7 = ansi2[append$accessorSymbol](tmp2, tmp6);
  tmp8 = NofibPrelude.Cons("[", tmp7);
  inlinedVal = NofibPrelude.Cons("E", tmp8);
  tmp = ansi2[append$accessorSymbol](inlinedVal, s);
  tmp1 = runtime.safeCall(a(p));
  return ansi2[append$accessorSymbol](tmp, tmp1)
});
lambda$ = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
(class ansi {
  static {
    ansi1 = this
  }
  static get [listLen$accessorSymbol]() { return ansi.#listLen; }
  static get [append$accessorSymbol]() { return ansi.#append; }
  static get [replicate$accessorSymbol]() { return ansi.#replicate; }
  static get [end$accessorSymbol]() { return ansi.#end; }
  static {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("L");
    ansi.cls = tmp;
  }
  static #compose(f, g) {
    return lambda$(f, g)
  }
  static #listLen(ls) {
    let ls1, a, inlinedVal;
    ls1 = ls;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$1$, tmp;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$ = ls1.tail;
          tmp = a + 1;
          ls1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = ansi.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = ansi.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #end(xs) {
    return NofibPrelude.nofibStringToList("")
  }
  static main() {
    let inlinedVal, tmp, tmp1, f, inlinedVal1;
    tmp = main_testAnsi_nofib_replicate$replicate(1, main_testAnsi_nofib_program$program);
    f = ansi1.#compose;
    inlinedVal1 = tmp(lambda1, undefined, undefined, undefined, undefined, undefined, f);
    tmp1 = NofibPrelude.nofibStringToList("testtesttest");
    inlinedVal = runtime.safeCall(inlinedVal1(tmp1));
    return NofibPrelude.nofibListToString(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"];
});
export default ansi1;
