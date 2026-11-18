const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const append$accessorSymbol = globalThis.Symbol("append");
const concat$accessorSymbol = globalThis.Symbol("concat");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
let ansi1, lambda, lambda1, lambda2, lambda$, lambda$1, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda, main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$, main_testAnsi_nofib_program$program, main_testAnsi_nofib_foldr$foldr, main_testAnsi_nofib_compose$compose, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo$worker, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt$worker, main_testAnsi_nofib_foldr$foldr$worker, main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee;
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let inlinedVal, tmp, arg$Cons$0$, arg$Cons$1$;
          tmp = param0[reverse$accessorSymbol](param2);
          inlinedVal = runtime.safeCall(param4(tmp));
          if (param5 instanceof NofibPrelude.Nil.class) {
            return runtime.safeCall(inlinedVal(NofibPrelude.Nil))
          } else if (param5 instanceof NofibPrelude.Cons.class) {
            let scrut, scrut1, scrut2, scrut3, tmp1, tmp2;
            arg$Cons$0$ = param5.head;
            arg$Cons$1$ = param5.tail;
            scrut = arg$Cons$0$ == "B";
            if (scrut === true) {
              param0 = param1;
              param1 = param2;
              param2 = param3;
              param3 = param4;
              param4 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            scrut1 = arg$Cons$0$ == "D";
            if (scrut1 === true) {
              param0 = param1;
              param1 = param2;
              param2 = param3;
              param3 = param4;
              param4 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            scrut2 = arg$Cons$0$ == "`";
            if (scrut2 === true) {
              let inlinedVal1, tmp3;
              tmp3 = param0[reverse$accessorSymbol](param2);
              inlinedVal1 = runtime.safeCall(param4(tmp3));
              return runtime.safeCall(inlinedVal1(arg$Cons$1$))
            }
            scrut3 = param1 < param3;
            if (scrut3 === true) {
              let inlinedVal1;
              tmp1 = param1 + 1;
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param2);
              inlinedVal1 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, ansi1, tmp1, tmp2, param3, param4, arg$Cons$1$);
              return NofibPrelude.Cons(arg$Cons$0$, inlinedVal1)
            }
            {
              let inlinedVal1;
              inlinedVal1 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, ansi1, param1, param2, param3, param4, arg$Cons$1$);
              return NofibPrelude.Cons("B", inlinedVal1);
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, tmp, tmp1, tmp2;
          scrut = param0 > 0;
          if (scrut === true) {
            let inlinedVal;
            tmp = NofibPrelude.nofibStringToList("BS_BS");
            tmp1 = param0 - 1;
            if (param1 instanceof NofibPrelude.Cons.class) {
              let inlinedVal1;
              inlinedVal = param1.tail;
              inlinedVal1 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, ansi1, tmp1, inlinedVal, param2, param3, param4);
              return ansi1[append$accessorSymbol](tmp, inlinedVal1)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          {
            let inlinedVal;
            tmp2 = NofibPrelude.nofibStringToList("");
            inlinedVal = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, ansi1, 0, tmp2, param2, param3, param4);
            return NofibPrelude.Cons("B", inlinedVal);
          }
        }
    }
  }
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(ansi2, y) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("I'm waiting...");
  if (y instanceof NofibPrelude.Nil.class) {
    let inlinedVal;
    inlinedVal = NofibPrelude.nofibStringToList("");
    return ansi2[append$accessorSymbol](tmp, inlinedVal)
  } else if (y instanceof NofibPrelude.Cons.class) {
    let inlinedVal;
    inlinedVal = NofibPrelude.nofibStringToList("");
    return ansi2[append$accessorSymbol](tmp, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$$lambda$(ansi2) {
  return (y) => {
    return main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(ansi2, y)
  }
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda = function main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, a, a1, element1$, element0$, element1$1, element0$1;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = ansi2[append$accessorSymbol](name, tmp1);
  reply = ansi2[append$accessorSymbol](tmp, tmp2);
  tmp3 = ansi2[listLen$accessorSymbol](reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  tmp6 = globalThis.Object.freeze([
    tmp5,
    18
  ]);
  tmp7 = globalThis.Object.freeze([
    1,
    23
  ]);
  a = main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_lambda$$lambda$(ansi2);
  if (runtime.Tuple.isArrayLike(tmp7) && tmp7.length === 2) {
    element0$1 = runtime.Tuple.get(tmp7, 0);
    element1$1 = runtime.Tuple.get(tmp7, 1);
    a1 = lambda$1(ansi2, a, element0$1, element1$1);
    if (runtime.Tuple.isArrayLike(tmp6) && tmp6.length === 2) {
      element0$ = runtime.Tuple.get(tmp6, 0);
      element1$ = runtime.Tuple.get(tmp6, 1);
      return lambda$(ansi2, reply, a1, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$ = function main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi2) {
  return (name) => {
    return main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name)
  }
};
main_testAnsi_nofib_program$program = function main_testAnsi_nofib_program$program(input) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, tmp19, element1$, element0$, element1$1, element0$1, element1$2, element0$2, element1$3, element0$3, element1$4, element0$4, element1$5, element0$5, tmp20, tmp21, tmp22;
  tmp = globalThis.Object.freeze([
    17,
    5
  ]);
  tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
  tmp20 = NofibPrelude.nofibStringToList("ESC[7m");
  tmp21 = NofibPrelude.nofibStringToList("ESC[0m");
  tmp22 = ansi1[append$accessorSymbol](tmp1, tmp21);
  inlinedVal = ansi1[append$accessorSymbol](tmp20, tmp22);
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    let inlinedVal7, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal8, inlinedVal9;
    element0$5 = runtime.Tuple.get(tmp, 0);
    element1$5 = runtime.Tuple.get(tmp, 1);
    inlinedVal8 = element1$5 + "";
    tmp23 = NofibPrelude.nofibStringToList(inlinedVal8);
    inlinedVal9 = element0$5 + "";
    tmp24 = NofibPrelude.nofibStringToList(inlinedVal9);
    tmp25 = NofibPrelude.nofibStringToList("H");
    tmp26 = ansi1[append$accessorSymbol](tmp24, tmp25);
    tmp27 = NofibPrelude.Cons(";", tmp26);
    tmp28 = ansi1[append$accessorSymbol](tmp23, tmp27);
    tmp29 = NofibPrelude.Cons("[", tmp28);
    inlinedVal7 = NofibPrelude.Cons("E", tmp29);
    inlinedVal1 = ansi1[append$accessorSymbol](inlinedVal7, inlinedVal);
    tmp2 = globalThis.Object.freeze([
      48,
      5
    ]);
    tmp3 = NofibPrelude.nofibStringToList("Version 1.0");
    if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
      let inlinedVal10, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, inlinedVal11, inlinedVal12;
      element0$4 = runtime.Tuple.get(tmp2, 0);
      element1$4 = runtime.Tuple.get(tmp2, 1);
      inlinedVal11 = element1$4 + "";
      tmp30 = NofibPrelude.nofibStringToList(inlinedVal11);
      inlinedVal12 = element0$4 + "";
      tmp31 = NofibPrelude.nofibStringToList(inlinedVal12);
      tmp32 = NofibPrelude.nofibStringToList("H");
      tmp33 = ansi1[append$accessorSymbol](tmp31, tmp32);
      tmp34 = NofibPrelude.Cons(";", tmp33);
      tmp35 = ansi1[append$accessorSymbol](tmp30, tmp34);
      tmp36 = NofibPrelude.Cons("[", tmp35);
      inlinedVal10 = NofibPrelude.Cons("E", tmp36);
      inlinedVal2 = ansi1[append$accessorSymbol](inlinedVal10, tmp3);
      tmp4 = globalThis.Object.freeze([
        17,
        7
      ]);
      tmp5 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
      if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
        let inlinedVal13, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, inlinedVal14, inlinedVal15;
        element0$3 = runtime.Tuple.get(tmp4, 0);
        element1$3 = runtime.Tuple.get(tmp4, 1);
        inlinedVal14 = element1$3 + "";
        tmp37 = NofibPrelude.nofibStringToList(inlinedVal14);
        inlinedVal15 = element0$3 + "";
        tmp38 = NofibPrelude.nofibStringToList(inlinedVal15);
        tmp39 = NofibPrelude.nofibStringToList("H");
        tmp40 = ansi1[append$accessorSymbol](tmp38, tmp39);
        tmp41 = NofibPrelude.Cons(";", tmp40);
        tmp42 = ansi1[append$accessorSymbol](tmp37, tmp41);
        tmp43 = NofibPrelude.Cons("[", tmp42);
        inlinedVal13 = NofibPrelude.Cons("E", tmp43);
        inlinedVal3 = ansi1[append$accessorSymbol](inlinedVal13, tmp5);
        tmp6 = globalThis.Object.freeze([
          17,
          8
        ]);
        tmp7 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
        if (runtime.Tuple.isArrayLike(tmp6) && tmp6.length === 2) {
          let inlinedVal16, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, inlinedVal17, inlinedVal18;
          element0$2 = runtime.Tuple.get(tmp6, 0);
          element1$2 = runtime.Tuple.get(tmp6, 1);
          inlinedVal17 = element1$2 + "";
          tmp44 = NofibPrelude.nofibStringToList(inlinedVal17);
          inlinedVal18 = element0$2 + "";
          tmp45 = NofibPrelude.nofibStringToList(inlinedVal18);
          tmp46 = NofibPrelude.nofibStringToList("H");
          tmp47 = ansi1[append$accessorSymbol](tmp45, tmp46);
          tmp48 = NofibPrelude.Cons(";", tmp47);
          tmp49 = ansi1[append$accessorSymbol](tmp44, tmp48);
          tmp50 = NofibPrelude.Cons("[", tmp49);
          inlinedVal16 = NofibPrelude.Cons("E", tmp50);
          inlinedVal4 = ansi1[append$accessorSymbol](inlinedVal16, tmp7);
          tmp8 = globalThis.Object.freeze([
            17,
            9
          ]);
          tmp9 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
          if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 2) {
            let inlinedVal19, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, inlinedVal20, inlinedVal21;
            element0$1 = runtime.Tuple.get(tmp8, 0);
            element1$1 = runtime.Tuple.get(tmp8, 1);
            inlinedVal20 = element1$1 + "";
            tmp51 = NofibPrelude.nofibStringToList(inlinedVal20);
            inlinedVal21 = element0$1 + "";
            tmp52 = NofibPrelude.nofibStringToList(inlinedVal21);
            tmp53 = NofibPrelude.nofibStringToList("H");
            tmp54 = ansi1[append$accessorSymbol](tmp52, tmp53);
            tmp55 = NofibPrelude.Cons(";", tmp54);
            tmp56 = ansi1[append$accessorSymbol](tmp51, tmp55);
            tmp57 = NofibPrelude.Cons("[", tmp56);
            inlinedVal19 = NofibPrelude.Cons("E", tmp57);
            inlinedVal5 = ansi1[append$accessorSymbol](inlinedVal19, tmp9);
            tmp10 = globalThis.Object.freeze([
              17,
              11
            ]);
            tmp11 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
            if (runtime.Tuple.isArrayLike(tmp10) && tmp10.length === 2) {
              let inlinedVal22, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, inlinedVal23, inlinedVal24, inlinedVal25, tmp65, tmp66, arg$Cons$1$, consume, element1$6, element0$6, tmp67, tmp68, tmp69, tmp70;
              element0$ = runtime.Tuple.get(tmp10, 0);
              element1$ = runtime.Tuple.get(tmp10, 1);
              inlinedVal23 = element1$ + "";
              tmp58 = NofibPrelude.nofibStringToList(inlinedVal23);
              inlinedVal24 = element0$ + "";
              tmp59 = NofibPrelude.nofibStringToList(inlinedVal24);
              tmp60 = NofibPrelude.nofibStringToList("H");
              tmp61 = ansi1[append$accessorSymbol](tmp59, tmp60);
              tmp62 = NofibPrelude.Cons(";", tmp61);
              tmp63 = ansi1[append$accessorSymbol](tmp58, tmp62);
              tmp64 = NofibPrelude.Cons("[", tmp63);
              inlinedVal22 = NofibPrelude.Cons("E", tmp64);
              inlinedVal6 = ansi1[append$accessorSymbol](inlinedVal22, tmp11);
              tmp12 = NofibPrelude.Cons(inlinedVal6, NofibPrelude.Nil);
              tmp13 = NofibPrelude.Cons(inlinedVal5, tmp12);
              tmp14 = NofibPrelude.Cons(inlinedVal4, tmp13);
              tmp15 = NofibPrelude.Cons(inlinedVal3, tmp14);
              tmp16 = NofibPrelude.Cons(inlinedVal2, tmp15);
              tmp17 = NofibPrelude.Cons(inlinedVal1, tmp16);
              tmp18 = NofibPrelude.Cons(ansi1.cls, tmp17);
              tmp19 = ansi1[concat$accessorSymbol](tmp18);
              tmp65 = globalThis.Object.freeze([
                17,
                15
              ]);
              tmp66 = NofibPrelude.nofibStringToList("Please enter your name: ");
              consume = main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi1);
              if (runtime.Tuple.isArrayLike(tmp65) && tmp65.length === 2) {
                element0$6 = runtime.Tuple.get(tmp65, 0);
                element1$6 = runtime.Tuple.get(tmp65, 1);
                tmp67 = globalThis.Object.freeze([
                  element0$6,
                  element1$6
                ]);
                tmp68 = ansi1[listLen$accessorSymbol](tmp66);
                tmp69 = element0$6 + tmp68;
                tmp70 = globalThis.Object.freeze([
                  tmp69,
                  element1$6
                ]);
                if (input instanceof NofibPrelude.Nil.class) {
                  let eta$0$0, a, element1$7, element0$7;
                  eta$0$0 = NofibPrelude.Nil;
                  a = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt(tmp70, 18, consume);
                  if (runtime.Tuple.isArrayLike(tmp67) && tmp67.length === 2) {
                    element0$7 = runtime.Tuple.get(tmp67, 0);
                    element1$7 = runtime.Tuple.get(tmp67, 1);
                    inlinedVal25 = lambda1(ansi1, tmp66, a, element0$7, element1$7, eta$0$0);
                    return ansi1[append$accessorSymbol](tmp19, inlinedVal25)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                } else if (input instanceof NofibPrelude.Cons.class) {
                  let a, element1$7, element0$7;
                  arg$Cons$1$ = input.tail;
                  a = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt(tmp70, 18, consume);
                  if (runtime.Tuple.isArrayLike(tmp67) && tmp67.length === 2) {
                    element0$7 = runtime.Tuple.get(tmp67, 0);
                    element1$7 = runtime.Tuple.get(tmp67, 1);
                    inlinedVal25 = lambda1(ansi1, tmp66, a, element0$7, element1$7, arg$Cons$1$);
                    return ansi1[append$accessorSymbol](tmp19, inlinedVal25)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_foldr$foldr = function main_testAnsi_nofib_foldr$foldr(f, z, xs) {
  return (eta$0$0) => {
    return main_testAnsi_nofib_foldr$foldr$worker(f, z, xs, eta$0$0)
  }
};
main_testAnsi_nofib_foldr$foldr$worker = function main_testAnsi_nofib_foldr$foldr$worker(f, z, xs, eta$0$0) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return z(eta$0$0)
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testAnsi_nofib_foldr$foldr(f, z, arg$Cons$1$);
    return runtime.safeCall(f(arg$Cons$0$, tmp)(eta$0$0))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_compose$compose = function main_testAnsi_nofib_compose$compose(f, g) {
  return (eta$0$0) => {
    let tmp;
    tmp = runtime.safeCall(g(eta$0$0));
    return runtime.safeCall(f(tmp))
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(n, s, l, consume) {
  return (eta$0$0) => {
    return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, ansi1, n, s, l, consume, eta$0$0)
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt(x_y, l, consume) {
  return (eta$0$0) => {
    return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt$worker(x_y, l, consume, eta$0$0)
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt$worker = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt$readAt$worker(x_y, l, consume, eta$0$0) {
  let tmp, tmp1, a, element1$, element0$;
  tmp = ansi1[replicate$accessorSymbol](l, "_");
  tmp1 = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(0, "", l, consume);
  a = main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo(x_y, tmp1);
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    element0$ = runtime.Tuple.get(x_y, 0);
    element1$ = runtime.Tuple.get(x_y, 1);
    return lambda1(ansi1, tmp, a, element0$, element1$, eta$0$0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo(x_y, a) {
  return (eta$0$0) => {
    return main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo$worker(x_y, a, eta$0$0)
  }
};
main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo$worker = function main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_moveTo$moveTo$worker(x_y, a, eta$0$0) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    element0$ = runtime.Tuple.get(x_y, 0);
    element1$ = runtime.Tuple.get(x_y, 1);
    return lambda2(ansi1, a, element0$, element1$, eta$0$0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (ansi2, a, x, y) {
  return (p) => {
    return lambda2(ansi2, a, x, y, p)
  }
});
lambda2 = (undefined, function (ansi2, a, x, y, p) {
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
lambda$ = (undefined, function (ansi2, s, a, x, y) {
  return (p) => {
    return lambda1(ansi2, s, a, x, y, p)
  }
});
lambda1 = (undefined, function (ansi2, s, a, x, y, p) {
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
(class ansi {
  static {
    ansi1 = this
  }
  static get [reverse$accessorSymbol]() { return ansi.#reverse; }
  static get [listLen$accessorSymbol]() { return ansi.#listLen; }
  static get [append$accessorSymbol]() { return ansi.#append; }
  static get [concat$accessorSymbol]() { return ansi.#concat; }
  static get [replicate$accessorSymbol]() { return ansi.#replicate; }
  static {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("L");
    ansi.cls = tmp;
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
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
  static #concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = ansi.#concat(arg$Cons$1$);
      return ansi.#append(arg$Cons$0$, tmp)
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
  static main() {
    let tmp, tmp1, inlinedVal;
    tmp = ansi1.#replicate(1, main_testAnsi_nofib_program$program);
    tmp1 = NofibPrelude.nofibStringToList("testtesttest");
    inlinedVal = main_testAnsi_nofib_foldr$foldr$worker(main_testAnsi_nofib_compose$compose, lambda, tmp, tmp1);
    return NofibPrelude.nofibListToString(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"];
});
export default ansi1;
