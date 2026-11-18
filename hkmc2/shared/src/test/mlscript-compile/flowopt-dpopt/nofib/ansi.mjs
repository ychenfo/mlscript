const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const append$accessorSymbol = globalThis.Symbol("append");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
let ansi1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop, main_main_testAnsi_nofib_program$program$main_testAnsi_nofib_program$program, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil1, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons1, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$_lambda$lambda, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$$lambda$, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$$main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons1, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append1, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons2, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append2, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons3, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append3, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons4, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append4, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons5, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append5, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons6, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append6, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_writeString_append$xs_Nil$main_testAnsi_nofib_program_writes_writeString_append$xs_Nil, main_main_testAnsi_nofib_replicate$replicate$main_testAnsi_nofib_replicate$replicate$worker, main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee;
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(id, param0, param1, param2, param3, param4) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let consume, inlinedVal, l$_, l, inlinedVal1, arg$Cons$0$, arg$Cons$1$;
          consume = param3;
          l$_ = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil();
          l = param1;
          inlinedLbl: {
            loopLabel1: while (true) {
              let arg$Cons$0$1, arg$Cons$1$1;
              if (l instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = l.head;
                arg$Cons$1$1 = l.tail;
                l$_ = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(arg$Cons$0$1, l$_);
                l = arg$Cons$1$1;
                continue loopLabel1
              }
              inlinedVal1 = l$_;
              break inlinedLbl;
            }
          }
          inlinedVal = runtime.safeCall(consume(inlinedVal1));
          if (param4 instanceof NofibPrelude.Nil.class) {
            return runtime.safeCall(inlinedVal(NofibPrelude.Nil))
          } else if (param4 instanceof NofibPrelude.Cons.class) {
            let d, scrut, scrut1, scrut2, scrut3, tmp, tmp1;
            arg$Cons$0$ = param4.head;
            arg$Cons$1$ = param4.tail;
            d = arg$Cons$1$;
            scrut = arg$Cons$0$ == "B";
            if (scrut === true) {
              param4 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            scrut1 = arg$Cons$0$ == "D";
            if (scrut1 === true) {
              param4 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            scrut2 = arg$Cons$0$ == "`";
            if (scrut2 === true) {
              let consume1, inlinedVal2, l$_1, l1, inlinedVal3;
              consume1 = param3;
              l$_1 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil1();
              l1 = param1;
              inlinedLbl1: {
                loopLabel2: while (true) {
                  let arg$Cons$0$1, arg$Cons$1$1;
                  if (l1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$1 = l1.head;
                    arg$Cons$1$1 = l1.tail;
                    l$_1 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons1(arg$Cons$0$1, l$_1);
                    l1 = arg$Cons$1$1;
                    continue loopLabel2
                  }
                  inlinedVal3 = l$_1;
                  break inlinedLbl1;
                }
              }
              inlinedVal2 = runtime.safeCall(consume1(inlinedVal3));
              return runtime.safeCall(inlinedVal2(d))
            }
            scrut3 = param0 < param2;
            if (scrut3 === true) {
              let inlinedVal2;
              tmp = param0 + 1;
              tmp1 = NofibPrelude.Cons(arg$Cons$0$, param1);
              inlinedVal2 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, tmp, tmp1, param2, param3, arg$Cons$1$);
              return NofibPrelude.Cons(arg$Cons$0$, inlinedVal2)
            }
            {
              let inlinedVal2;
              inlinedVal2 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, param0, param1, param2, param3, arg$Cons$1$);
              return NofibPrelude.Cons("B", inlinedVal2);
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, tmp, tmp1, tmp2;
          scrut = param0 > 0;
          if (scrut === true) {
            let arg$Cons$1$;
            tmp = NofibPrelude.nofibStringToList("BS_BS");
            tmp1 = param0 - 1;
            if (param1 instanceof NofibPrelude.Cons.class) {
              let inlinedVal;
              arg$Cons$1$ = param1.tail;
              inlinedVal = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, tmp1, arg$Cons$1$, param2, param3, param4);
              return ansi1[append$accessorSymbol](tmp, inlinedVal)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          {
            let inlinedVal;
            tmp2 = NofibPrelude.nofibStringToList("");
            inlinedVal = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, 0, tmp2, param2, param3, param4);
            return NofibPrelude.Cons("B", inlinedVal);
          }
        }
    }
  }
};
main_main_testAnsi_nofib_replicate$replicate$main_testAnsi_nofib_replicate$replicate$worker = function main_main_testAnsi_nofib_replicate$replicate$main_testAnsi_nofib_replicate$replicate$worker(n, x, eta$0$0, eta$0$6) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return eta$0$0
  }
  {
    let inlinedVal;
    tmp = n - 1;
    inlinedVal = main_main_testAnsi_nofib_replicate$replicate$main_testAnsi_nofib_replicate$replicate$worker(tmp, x, eta$0$0, eta$0$6);
    return runtime.safeCall(eta$0$6(x, inlinedVal));
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(n, s, l, consume) {
  return (eta$0$0) => {
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$lambda_main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$deletee(0, n, s, l, consume, eta$0$0)
  }
};
main_main_testAnsi_nofib_program$program$main_testAnsi_nofib_program$program = function main_main_testAnsi_nofib_program$program$main_testAnsi_nofib_program$program(input) {
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
  inlinedVal32 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_writeString_append$xs_Nil$main_testAnsi_nofib_program_writes_writeString_append$xs_Nil();
  inlinedVal31 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append6(inlinedVal6, inlinedVal32);
  inlinedVal30 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append5(inlinedVal5, inlinedVal31);
  inlinedVal29 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append4(inlinedVal4, inlinedVal30);
  inlinedVal28 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append3(inlinedVal3, inlinedVal29);
  inlinedVal27 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append2(inlinedVal2, inlinedVal28);
  inlinedVal14 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append1(inlinedVal1, inlinedVal27);
  inlinedVal7 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(Cons_head, inlinedVal14);
  tmp9 = NofibPrelude.nofibStringToList("Please enter your name: ");
  fv_consume = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$$main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi1);
  fv_tmp = ansi1[listLen$accessorSymbol](tmp9);
  fv_tmp1 = 17 + fv_tmp;
  fv_tmp2 = globalThis.Object.freeze([
    fv_tmp1,
    15
  ]);
  tmp10 = ansi1[replicate$accessorSymbol](18, "_");
  tmp11 = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop$main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop(0, "", 18, fv_consume);
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
        inlinedVal33 = lambda1(ansi1, tmp9, a1, 17, 15, p);
        return inlinedVal7(inlinedVal33)
      } else if (input instanceof NofibPrelude.Cons.class) {
        let a1, inlinedVal33;
        arg$Cons$1$ = input.tail;
        a1 = lambda$1(ansi1, tmp10, a, element0$1, element1$1);
        inlinedVal33 = lambda1(ansi1, tmp9, a1, 17, 15, arg$Cons$1$);
        return inlinedVal7(inlinedVal33)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil1 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons1 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_promptReadAt_readAt_loop$loop_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$_lambda$lambda = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$_lambda$lambda(ansi2, y) {
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
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$$lambda$ = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$$lambda$(ansi2) {
  return (y) => {
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$_lambda$lambda(ansi2, y)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, fv_a, fv_a1;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  inlinedVal = name(tmp1);
  reply = ansi2[append$accessorSymbol](tmp, inlinedVal);
  tmp2 = ansi2[listLen$accessorSymbol](reply);
  tmp3 = tmp2 / 2;
  tmp4 = 40 - tmp3;
  fv_a = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda_lambda$$lambda$(ansi2);
  fv_a1 = lambda$2(ansi1, fv_a, 1, 23);
  return lambda$1(ansi1, reply, fv_a1, tmp4, 18)
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$$main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$ = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$$main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$(ansi2) {
  return (name) => {
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_lambda$_lambda_lambda$$lambda$_main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda$main_testAnsi_nofib_program_lambda$_lambda_lambda$_lambda$lambda(ansi2, name)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons1 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append1 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append1(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons1(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons2 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append2 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append2(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons2(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons3 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append3 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append3(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons3(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons4 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append4 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append4(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons4(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons5 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append5 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append5(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons5(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons6 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append6 = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append$main_testAnsi_nofib_program_writes_concat_append$append6(arg$Cons$1$, ys);
    return main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_concat_append$append_main_testAnsi_nofib_program_writes_writeString_append$xs_Cons$main_testAnsi_nofib_program_writes_writeString_append$xs_Cons6(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_writeString_append$xs_Nil$main_testAnsi_nofib_program_writes_writeString_append$xs_Nil = function main_main_testAnsi_nofib_program$program_main_testAnsi_nofib_program_writes_writeString_append$xs_Nil$main_testAnsi_nofib_program_writes_writeString_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
lambda = (undefined, function (x) {
  return x
});
lambda$2 = (undefined, function (ansi2, a, x, y) {
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
lambda$1 = (undefined, function (ansi2, s, a, x, y) {
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
  static main() {
    let inlinedVal, tmp, f, inlinedVal1;
    f = ansi1.#compose;
    inlinedVal1 = main_main_testAnsi_nofib_replicate$replicate$main_testAnsi_nofib_replicate$replicate$worker(1, main_main_testAnsi_nofib_program$program$main_testAnsi_nofib_program$program, lambda, f);
    tmp = NofibPrelude.nofibStringToList("testtesttest");
    inlinedVal = runtime.safeCall(inlinedVal1(tmp));
    return NofibPrelude.nofibListToString(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"];
});
export default ansi1;
