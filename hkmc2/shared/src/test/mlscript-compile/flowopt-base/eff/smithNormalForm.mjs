const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const matrixMake$accessorSymbol = globalThis.Symbol("matrixMake");
const matrixFetch$accessorSymbol = globalThis.Symbol("matrixFetch");
const matrixFetchRow$accessorSymbol = globalThis.Symbol("matrixFetchRow");
const matrixFetchCol$accessorSymbol = globalThis.Symbol("matrixFetchCol");
const matrixRowSwap$accessorSymbol = globalThis.Symbol("matrixRowSwap");
const matrixColSwap$accessorSymbol = globalThis.Symbol("matrixColSwap");
const matrixRowOp$accessorSymbol = globalThis.Symbol("matrixRowOp");
const matrixColOp$accessorSymbol = globalThis.Symbol("matrixColOp");
const smaller$accessorSymbol = globalThis.Symbol("smaller");
const smithNormalForm$accessorSymbol = globalThis.Symbol("smithNormalForm");
let init, loop, loop1, swapColLoop, colLoop, swapRowLoop, hitPosAgain, rowLoop, dd, loop2, smithNormalForm1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, main_snf_f_table$table, main_snf_f$f, main_snf$snf, main_snf_f_listNth$listNth, main_snf_f_listNth$listNth1, snf_f_table$table, snf_f$f, snf_f_listNth$listNth, snf_f_listNth$listNth1, f_table$table, f_listNth$listNth, f_listNth$listNth1, main_snf_f_listNth$l_Cons, main_snf_f_listNth$l_rest, main_snf_f_listNth$l_dflt, main_snf_f_listNth$l_Cons1, main_snf_f_listNth$l_rest1, main_snf_f_listNth$l_dflt1, snf_f_listNth$l_Cons, snf_f_listNth$l_rest, snf_f_listNth$l_Cons1, snf_f_listNth$l_rest1, snf_f_listNth$l_dflt, snf_f_listNth$l_dflt1, f_listNth$l_Cons, f_listNth$l_rest, f_listNth$l_dflt, f_listNth$l_Cons1, f_listNth$l_rest1, f_listNth$l_dflt1, swapRowLoop_swapColLoop, rowLoop_colLoop_hitPosAgain, f_listNth$l_dflt$worker, f_listNth$l_Cons$worker, f_listNth$l_dflt$worker1, f_listNth$l_Cons$worker1, snf_f_listNth$l_dflt$worker, snf_f_listNth$l_dflt$worker1, snf_f_listNth$l_Cons$worker, snf_f_listNth$l_Cons$worker1, main_snf_f_listNth$l_dflt$worker, main_snf_f_listNth$l_Cons$worker, main_snf_f_listNth$l_dflt$worker1, main_snf_f_listNth$l_Cons$worker1;
swapRowLoop_swapColLoop = function swapRowLoop_swapColLoop(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, matRow;
          scrut = param8 >= param1;
          if (scrut === true) {
            param0[matrixRowSwap$accessorSymbol](param3, param4, param6);
            return param0[matrixColSwap$accessorSymbol](param3, param4, param7)
          }
          {
            let param7_tmp, param6_tmp, param5_tmp;
            matRow = param0[matrixFetchRow$accessorSymbol](param3, param8);
            param7_tmp = param7;
            param6_tmp = param6;
            param5_tmp = param5;
            param5 = param8;
            param6 = matRow;
            param7 = param5_tmp;
            param8 = param6_tmp;
            param9 = param7_tmp;
            param10 = param4;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let scrut, next, scrut1, tmp, tmp1, tmp2;
          scrut = param10 >= param2;
          if (scrut === true) {
            tmp = param5 + 1;
            param5 = param7;
            param6 = param8;
            param7 = param9;
            param8 = tmp;
            id = 0;
            continue loopLabel
          }
          next = runtime.safeCall(param6(param10));
          scrut1 = param0[smaller$accessorSymbol](next, param7);
          if (scrut1 === true) {
            tmp1 = param10 + 1;
            param7 = next;
            param8 = param5;
            param9 = param10;
            param10 = tmp1;
            id = 1;
            continue loopLabel
          }
          tmp2 = param10 + 1;
          param10 = tmp2;
          id = 1;
          continue loopLabel;
        }
    }
  }
};
rowLoop_colLoop_hitPosAgain = function rowLoop_colLoop_hitPosAgain(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, scrut1, x, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here;
          scrut = param7 < param1;
          if (scrut === true) {
            tmp = runtime.safeCall(param5(param7));
            scrut1 = tmp == 0;
            if (scrut1 === true) {
              tmp1 = param7 + 1;
              param7 = tmp1;
              id = 0;
              continue loopLabel
            }
            {
              let tmp7, inlinedVal;
              tmp2 = runtime.safeCall(param5(param7));
              tmp3 = runtime.safeCall(param5(param4));
              tmp7 = tmp2 / tmp3;
              inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp7));
              x = - inlinedVal;
              lambda$here = lambda$6(x);
              param0[matrixRowOp$accessorSymbol](param3, param4, param7, lambda$here);
              tmp4 = runtime.safeCall(param5(param7));
              scrut2 = tmp4 == 0;
              if (scrut2 === true) {
                tmp5 = param7 + 1;
                param7 = tmp5;
                id = 0;
                continue loopLabel
              }
              id = 2;
              continue loopLabel;
            }
          }
          tmp6 = param4 + 1;
          param7 = tmp6;
          id = 1;
          continue loopLabel;
        }
      case 1:
        {
          let scrut, scrut1, x, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda$here;
          scrut = param7 < param2;
          if (scrut === true) {
            tmp = runtime.safeCall(param6(param7));
            scrut1 = tmp == 0;
            if (scrut1 === true) {
              tmp1 = param7 + 1;
              param7 = tmp1;
              id = 1;
              continue loopLabel
            }
            {
              let tmp6, inlinedVal;
              tmp2 = runtime.safeCall(param6(param7));
              tmp3 = runtime.safeCall(param6(param4));
              tmp6 = tmp2 / tmp3;
              inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp6));
              x = - inlinedVal;
              lambda$here = lambda$7(x);
              param0[matrixColOp$accessorSymbol](param3, param4, param7, lambda$here);
              tmp4 = runtime.safeCall(param6(param7));
              scrut2 = tmp4 == 0;
              if (scrut2 === true) {
                tmp5 = param7 + 1;
                param7 = tmp5;
                id = 1;
                continue loopLabel
              }
              id = 2;
              continue loopLabel;
            }
          }
          return runtime.Unit;
        }
      case 2:
        {
          let tmp;
          swapRowLoop_swapColLoop(0, param0, param1, param2, param3, param4, 0, param4, param4, param4, undefined, undefined);
          tmp = param4 + 1;
          param7 = tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
main_snf_f_table$table = function main_snf_f_table$table() {
  let Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, Cons_tail4, Cons_tail5, Cons_tail6, Cons_tail7, Cons_tail8, Cons_head, Cons_tail9, Cons_head1, Cons_tail10, Cons_head2, Cons_tail11;
  Cons_tail = main_snf_f_listNth$l_dflt1();
  Cons_tail1 = main_snf_f_listNth$l_Cons1(4, Cons_tail);
  Cons_tail2 = main_snf_f_listNth$l_Cons1(4, Cons_tail1);
  Cons_tail3 = main_snf_f_listNth$l_dflt1();
  Cons_tail4 = main_snf_f_listNth$l_Cons1(12, Cons_tail3);
  Cons_tail5 = main_snf_f_listNth$l_Cons1(6, Cons_tail4);
  Cons_tail6 = main_snf_f_listNth$l_dflt1();
  Cons_tail7 = main_snf_f_listNth$l_Cons1(-16, Cons_tail6);
  Cons_tail8 = main_snf_f_listNth$l_Cons1(-4, Cons_tail7);
  Cons_head = main_snf_f_listNth$l_Cons1(10, Cons_tail8);
  Cons_tail9 = main_snf_f_listNth$l_dflt();
  Cons_head1 = main_snf_f_listNth$l_Cons1(-6, Cons_tail5);
  Cons_tail10 = main_snf_f_listNth$l_Cons(Cons_head, Cons_tail9);
  Cons_head2 = main_snf_f_listNth$l_Cons1(2, Cons_tail2);
  Cons_tail11 = main_snf_f_listNth$l_Cons(Cons_head1, Cons_tail10);
  return main_snf_f_listNth$l_Cons(Cons_head2, Cons_tail11)
};
main_snf_f$f = function main_snf_f$f(x, y) {
  let tmp, inlinedVal;
  tmp = main_snf_f_table$table();
  inlinedVal = tmp(undefined, undefined, undefined, undefined, undefined, x, undefined);
  return inlinedVal(undefined, undefined, undefined, undefined, undefined, y, undefined)
};
main_snf$snf = function main_snf$snf() {
  let big, tmp;
  big = smithNormalForm1[matrixMake$accessorSymbol](3, 3, main_snf_f$f);
  tmp = smithNormalForm1[smithNormalForm$accessorSymbol](big);
  return smithNormalForm1[matrixFetch$accessorSymbol](tmp, 2, 2)
};
main_snf_f_listNth$listNth = function main_snf_f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
main_snf_f_listNth$listNth1 = function main_snf_f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
snf_f_table$table = function snf_f_table$table() {
  let Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, Cons_tail4, Cons_tail5, Cons_tail6, Cons_tail7, Cons_tail8, Cons_head, Cons_tail9, Cons_head1, Cons_tail10, Cons_head2, Cons_tail11;
  Cons_tail = snf_f_listNth$l_dflt();
  Cons_tail1 = snf_f_listNth$l_Cons1(4, Cons_tail);
  Cons_tail2 = snf_f_listNth$l_Cons1(4, Cons_tail1);
  Cons_tail3 = snf_f_listNth$l_dflt();
  Cons_tail4 = snf_f_listNth$l_Cons1(12, Cons_tail3);
  Cons_tail5 = snf_f_listNth$l_Cons1(6, Cons_tail4);
  Cons_tail6 = snf_f_listNth$l_dflt();
  Cons_tail7 = snf_f_listNth$l_Cons1(-16, Cons_tail6);
  Cons_tail8 = snf_f_listNth$l_Cons1(-4, Cons_tail7);
  Cons_head = snf_f_listNth$l_Cons1(10, Cons_tail8);
  Cons_tail9 = snf_f_listNth$l_dflt1();
  Cons_head1 = snf_f_listNth$l_Cons1(-6, Cons_tail5);
  Cons_tail10 = snf_f_listNth$l_Cons(Cons_head, Cons_tail9);
  Cons_head2 = snf_f_listNth$l_Cons1(2, Cons_tail2);
  Cons_tail11 = snf_f_listNth$l_Cons(Cons_head1, Cons_tail10);
  return snf_f_listNth$l_Cons(Cons_head2, Cons_tail11)
};
snf_f$f = function snf_f$f(x, y) {
  let tmp, inlinedVal;
  tmp = snf_f_table$table();
  inlinedVal = tmp(undefined, undefined, undefined, undefined, undefined, x, undefined);
  return inlinedVal(undefined, undefined, undefined, undefined, undefined, y, undefined)
};
snf_f_listNth$listNth = function snf_f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
snf_f_listNth$listNth1 = function snf_f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
f_table$table = function f_table$table() {
  let Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, Cons_tail4, Cons_tail5, Cons_tail6, Cons_tail7, Cons_tail8, Cons_head, Cons_tail9, Cons_head1, Cons_tail10, Cons_head2, Cons_tail11;
  Cons_tail = f_listNth$l_dflt1();
  Cons_tail1 = f_listNth$l_Cons1(4, Cons_tail);
  Cons_tail2 = f_listNth$l_Cons1(4, Cons_tail1);
  Cons_tail3 = f_listNth$l_dflt1();
  Cons_tail4 = f_listNth$l_Cons1(12, Cons_tail3);
  Cons_tail5 = f_listNth$l_Cons1(6, Cons_tail4);
  Cons_tail6 = f_listNth$l_dflt1();
  Cons_tail7 = f_listNth$l_Cons1(-16, Cons_tail6);
  Cons_tail8 = f_listNth$l_Cons1(-4, Cons_tail7);
  Cons_head = f_listNth$l_Cons1(10, Cons_tail8);
  Cons_tail9 = f_listNth$l_dflt();
  Cons_head1 = f_listNth$l_Cons1(-6, Cons_tail5);
  Cons_tail10 = f_listNth$l_Cons(Cons_head, Cons_tail9);
  Cons_head2 = f_listNth$l_Cons1(2, Cons_tail2);
  Cons_tail11 = f_listNth$l_Cons(Cons_head1, Cons_tail10);
  return f_listNth$l_Cons(Cons_head2, Cons_tail11)
};
f_listNth$listNth = function f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
f_listNth$listNth1 = function f_listNth$listNth(l, n) {
  return l(undefined, undefined, undefined, undefined, undefined, n, undefined)
};
main_snf_f_listNth$l_Cons = function main_snf_f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return main_snf_f_listNth$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
main_snf_f_listNth$l_Cons$worker1 = function main_snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
main_snf_f_listNth$l_dflt = function main_snf_f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return main_snf_f_listNth$l_dflt$worker1(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
main_snf_f_listNth$l_dflt$worker1 = function main_snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_snf_f_listNth$l_Cons1 = function main_snf_f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return main_snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
main_snf_f_listNth$l_Cons$worker = function main_snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
main_snf_f_listNth$l_dflt1 = function main_snf_f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return main_snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
main_snf_f_listNth$l_dflt$worker = function main_snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
snf_f_listNth$l_Cons = function snf_f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return snf_f_listNth$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
snf_f_listNth$l_Cons$worker1 = function snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
snf_f_listNth$l_Cons1 = function snf_f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
snf_f_listNth$l_Cons$worker = function snf_f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
snf_f_listNth$l_dflt = function snf_f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return snf_f_listNth$l_dflt$worker1(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
snf_f_listNth$l_dflt$worker1 = function snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
snf_f_listNth$l_dflt1 = function snf_f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
snf_f_listNth$l_dflt$worker = function snf_f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
f_listNth$l_Cons = function f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return f_listNth$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
f_listNth$l_Cons$worker1 = function f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
f_listNth$l_dflt = function f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return f_listNth$l_dflt$worker1(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
f_listNth$l_dflt$worker1 = function f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
f_listNth$l_Cons1 = function f_listNth$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
f_listNth$l_Cons$worker = function f_listNth$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  fv_scrut = fv_n == 0;
  if (fv_scrut === true) {
    return Cons_head
  }
  fv_tmp = fv_n - 1;
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
};
f_listNth$l_dflt1 = function f_listNth$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) => {
    return f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp)
  }
};
f_listNth$l_dflt$worker = function f_listNth$l_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_n, fv_tmp) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_snf_f_listNth$l_rest = function main_snf_f_listNth$l_rest() {
  return null
};
main_snf_f_listNth$l_rest1 = function main_snf_f_listNth$l_rest() {
  return null
};
snf_f_listNth$l_rest = function snf_f_listNth$l_rest() {
  return null
};
snf_f_listNth$l_rest1 = function snf_f_listNth$l_rest() {
  return null
};
f_listNth$l_rest = function f_listNth$l_rest() {
  return null
};
f_listNth$l_rest1 = function f_listNth$l_rest() {
  return null
};
swapColLoop = function swapColLoop(smithNormalForm2, height, width, mat, pos, row, matRow, best, bestRow, bestCol, col) {
  return swapRowLoop_swapColLoop(1, smithNormalForm2, height, width, mat, pos, row, matRow, best, bestRow, bestCol, col)
};
lambda$6 = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
});
lambda$7 = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
});
lambda3 = (undefined, function (x, lhs, rhs) {
  let tmp;
  tmp = lhs * x;
  return tmp + rhs
});
lambda2 = (undefined, function (x, lhs, rhs) {
  let tmp;
  tmp = lhs * x;
  return tmp + rhs
});
colLoop = function colLoop(smithNormalForm2, height, width, mat, pos, matCol, matRow, col) {
  return rowLoop_colLoop_hitPosAgain(1, smithNormalForm2, height, width, mat, pos, matCol, matRow, col)
};
swapRowLoop = function swapRowLoop(smithNormalForm2, height, width, mat, pos, best, bestRow, bestCol, row) {
  return swapRowLoop_swapColLoop(0, smithNormalForm2, height, width, mat, pos, best, bestRow, bestCol, row, undefined, undefined)
};
rowLoop = function rowLoop(smithNormalForm2, height, width, mat, pos, matCol, matRow, row) {
  return rowLoop_colLoop_hitPosAgain(0, smithNormalForm2, height, width, mat, pos, matCol, matRow, row)
};
hitPosAgain = function hitPosAgain(smithNormalForm2, height, width, mat, pos, matCol, matRow) {
  return rowLoop_colLoop_hitPosAgain(2, smithNormalForm2, height, width, mat, pos, matCol, matRow, undefined)
};
dd = function dd(smithNormalForm2, height, width, mat, pos) {
  let matCol, matRow;
  matCol = smithNormalForm2[matrixFetchCol$accessorSymbol](mat, pos);
  matRow = smithNormalForm2[matrixFetchRow$accessorSymbol](mat, pos);
  return rowLoop_colLoop_hitPosAgain(2, smithNormalForm2, height, width, mat, pos, matCol, matRow, undefined)
};
loop2 = function loop(smithNormalForm2, height, width, mat, range, pos) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = pos == range;
    if (scrut === true) {
      return mat
    }
    {
      let matCol, matRow;
      matCol = smithNormalForm2[matrixFetchCol$accessorSymbol](mat, pos);
      matRow = smithNormalForm2[matrixFetchRow$accessorSymbol](mat, pos);
      rowLoop_colLoop_hitPosAgain(2, smithNormalForm2, height, width, mat, pos, matCol, matRow, undefined);
      tmp = pos + 1;
      pos = tmp;
      continue loopLabel;
    }
  }
};
lambda$5 = (undefined, function (smithNormalForm2, mat) {
  return (i) => {
    return mat.at(i)
  }
});
lambda1 = (undefined, function (smithNormalForm2, mat, i) {
  return mat.at(i)
});
loop1 = function loop(from1, from2, to2, limit, f, i) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = i == limit;
    if (scrut === true) {
      return runtime.Unit
    }
    tmp = runtime.safeCall(from1(i));
    tmp1 = runtime.safeCall(from2(i));
    tmp2 = runtime.safeCall(f(tmp, tmp1));
    runtime.safeCall(to2(i, tmp2));
    tmp3 = i + 1;
    i = tmp3;
    continue loopLabel;
  }
};
loop = function loop(from1, to1, from2, to2, limit, i) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2;
    scrut = i == limit;
    if (scrut === true) {
      return runtime.Unit
    }
    tmp = runtime.safeCall(from1(i));
    tmp1 = runtime.safeCall(from2(i));
    runtime.safeCall(to1(i, tmp1));
    runtime.safeCall(to2(i, tmp));
    tmp2 = i + 1;
    i = tmp2;
    continue loopLabel;
  }
};
lambda$4 = (undefined, function (smithNormalForm2, col, mat, height, width) {
  return (row, entry) => {
    return lambda7(smithNormalForm2, col, mat, height, width, row, entry)
  }
});
lambda7 = (undefined, function (smithNormalForm2, col, mat, height, width, row, entry) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = 0 <= row;
  if (tmp === true) {
    tmp1 = row < height;
    if (tmp1 === true) {
      tmp2 = width * row;
      tmp3 = col + tmp2;
      mat[tmp3] = entry;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (smithNormalForm2, mat, width, offset) {
  return (col, entry) => {
    return lambda6(smithNormalForm2, mat, width, offset, col, entry)
  }
});
lambda6 = (undefined, function (smithNormalForm2, mat, width, offset, col, entry) {
  let tmp, tmp1, tmp2;
  tmp = 0 <= col;
  if (tmp === true) {
    tmp1 = col < width;
    if (tmp1 === true) {
      tmp2 = col + offset;
      mat[tmp2] = entry;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (smithNormalForm2, col, mat, height, width) {
  return (row) => {
    return lambda5(smithNormalForm2, col, mat, height, width, row)
  }
});
lambda5 = (undefined, function (smithNormalForm2, col, mat, height, width, row) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = 0 <= row;
  if (tmp === true) {
    tmp1 = row < height;
    if (tmp1 === true) {
      tmp2 = width * row;
      tmp3 = col + tmp2;
      return mat.at(tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (smithNormalForm2, mat, width, offset) {
  return (col) => {
    return lambda4(smithNormalForm2, mat, width, offset, col)
  }
});
lambda4 = (undefined, function (smithNormalForm2, mat, width, offset, col) {
  let tmp, tmp1, tmp2;
  tmp = 0 <= col;
  if (tmp === true) {
    tmp1 = col < width;
    if (tmp1 === true) {
      tmp2 = col + offset;
      return mat.at(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$ = (undefined, function (smithNormalForm2, width, generator) {
  return (z) => {
    return lambda(smithNormalForm2, width, generator, z)
  }
});
lambda = (undefined, function (smithNormalForm2, width, generator, z) {
  let inlinedVal, tmp, tmp1, inlinedVal1, tmp2, inlinedVal2;
  tmp1 = z / width;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp2 = z / width;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp = width * inlinedVal2;
  inlinedVal = z - tmp;
  return runtime.safeCall(generator(inlinedVal1, inlinedVal))
});
init = function init(smithNormalForm2, n, f, arr, i) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1;
    scrut = i < n;
    if (scrut === true) {
      tmp = runtime.safeCall(f(i));
      arr[i] = tmp;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel
    }
    return runtime.Unit;
  }
};
(class smithNormalForm {
  static {
    smithNormalForm1 = this
  }
  static get [matrixMake$accessorSymbol]() { return smithNormalForm.#matrixMake; }
  static get [matrixFetch$accessorSymbol]() { return smithNormalForm.#matrixFetch; }
  static get [matrixFetchRow$accessorSymbol]() { return smithNormalForm.#matrixFetchRow; }
  static get [matrixFetchCol$accessorSymbol]() { return smithNormalForm.#matrixFetchCol; }
  static get [matrixRowSwap$accessorSymbol]() { return smithNormalForm.#matrixRowSwap; }
  static get [matrixColSwap$accessorSymbol]() { return smithNormalForm.#matrixColSwap; }
  static get [matrixRowOp$accessorSymbol]() { return smithNormalForm.#matrixRowOp; }
  static get [matrixColOp$accessorSymbol]() { return smithNormalForm.#matrixColOp; }
  static get [smaller$accessorSymbol]() { return smithNormalForm.#smaller; }
  static get [smithNormalForm$accessorSymbol]() { return smithNormalForm.#smithNormalForm; }
  static {
    smithNormalForm.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        smithNormalForm.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        smithNormalForm.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return smithNormalForm.#floor(tmp)
  }
  static #intMod(a, b) {
    let tmp, tmp1;
    tmp = smithNormalForm.#intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static #listNth(l, n) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof smithNormalForm.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        scrut = n == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = n - 1;
        l = arg$Cons$1$;
        n = tmp;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fillArray(arr, i, n, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      arr[i] = x;
      tmp = i + 1;
      i = tmp;
      continue loopLabel;
    }
  }
  static #array_alloc(n, init1) {
    let tmp;
    tmp = [];
    return smithNormalForm.#fillArray(tmp, 0, n, init1)
  }
  static #arrayLength(a) {
    return a.length
  }
  static #arraySub(a, i) {
    return a.at(i)
  }
  static #arrayUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #arrayTabulate(n, f) {
    let scrut, arr, tmp;
    scrut = n > 0;
    if (scrut === true) {
      tmp = runtime.safeCall(f(0));
      arr = smithNormalForm.#array_alloc(n, tmp);
      init(smithNormalForm, n, f, arr, 1);
      return arr
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intMin(x, y) {
    let scrut;
    scrut = x < y;
    if (scrut === true) {
      return x
    }
    return y;
  }
  static #intInfAbs(x) {
    let scrut;
    scrut = x < 0;
    if (scrut === true) {
      return - x
    }
    return x;
  }
  static #matrixMake(height, width, generator) {
    let tmp, tmp1, tmp2, tmp3, lambda$here;
    tmp = height >= 0;
    if (tmp === true) {
      tmp1 = width >= 0;
      if (tmp1 === true) {
        tmp2 = height * width;
        lambda$here = lambda$(smithNormalForm, width, generator);
        tmp3 = smithNormalForm.#arrayTabulate(tmp2, lambda$here);
        return globalThis.Object.freeze([
          height,
          width,
          tmp3
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixHeight(m) {
    let element0$;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixWidth(m) {
    let element0$;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixFetch(m, row, col) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= col;
          if (tmp2 === true) {
            tmp3 = col < element1$;
            if (tmp3 === true) {
              tmp4 = element1$ * row;
              tmp5 = col + tmp4;
              return smithNormalForm.#arraySub(element2$, tmp5)
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
  static #matrixFetchRow(m, row) {
    let offset, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          offset = element1$ * row;
          return lambda$1(smithNormalForm, element2$, element1$, offset)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixFetchCol(m, col) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= col;
      if (tmp === true) {
        tmp1 = col < element1$;
        if (tmp1 === true) {
          return lambda$2(smithNormalForm, col, element2$, element0$, element1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixStoreRow(m, row) {
    let offset, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          offset = element1$ * row;
          return lambda$3(smithNormalForm, element2$, element1$, offset)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixStoreCol(m, col) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= col;
      if (tmp === true) {
        tmp1 = col < element1$;
        if (tmp1 === true) {
          return lambda$4(smithNormalForm, col, element2$, element0$, element1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #swapLoop(from1, to1, from2, to2, limit) {
    return loop(from1, to1, from2, to2, limit, 0)
  }
  static #matrixRowSwap(m, row1, row2) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      tmp = 0 <= row1;
      if (tmp === true) {
        tmp1 = row1 < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= row2;
          if (tmp2 === true) {
            tmp3 = row2 < element0$;
            if (tmp3 === true) {
              scrut = row1 == row2;
              if (scrut === true) {
                return runtime.Unit
              }
              tmp4 = smithNormalForm.#matrixFetchRow(m, row1);
              tmp5 = smithNormalForm.#matrixStoreRow(m, row1);
              tmp6 = smithNormalForm.#matrixFetchRow(m, row2);
              tmp7 = smithNormalForm.#matrixStoreRow(m, row2);
              return smithNormalForm.#swapLoop(tmp4, tmp5, tmp6, tmp7, element1$);
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
  static #matrixColSwap(m, col1, col2) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      tmp = 0 <= col1;
      if (tmp === true) {
        tmp1 = col1 < element1$;
        if (tmp1 === true) {
          tmp2 = 0 <= col2;
          if (tmp2 === true) {
            tmp3 = col2 < element1$;
            if (tmp3 === true) {
              scrut = col1 == col2;
              if (scrut === true) {
                return runtime.Unit
              }
              tmp4 = smithNormalForm.#matrixFetchCol(m, col1);
              tmp5 = smithNormalForm.#matrixStoreCol(m, col1);
              tmp6 = smithNormalForm.#matrixFetchCol(m, col2);
              tmp7 = smithNormalForm.#matrixStoreCol(m, col2);
              return smithNormalForm.#swapLoop(tmp4, tmp5, tmp6, tmp7, element0$);
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
  static #opLoop(from1, from2, to2, limit, f) {
    return loop1(from1, from2, to2, limit, f, 0)
  }
  static #matrixRowOp(m, row1, row2, f) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      tmp = 0 <= row1;
      if (tmp === true) {
        tmp1 = row1 < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= row2;
          if (tmp2 === true) {
            tmp3 = row2 < element0$;
            if (tmp3 === true) {
              tmp4 = row1 != row2;
              if (tmp4 === true) {
                tmp5 = smithNormalForm.#matrixFetchRow(m, row1);
                tmp6 = smithNormalForm.#matrixFetchRow(m, row2);
                tmp7 = smithNormalForm.#matrixStoreRow(m, row2);
                return smithNormalForm.#opLoop(tmp5, tmp6, tmp7, element1$, f)
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
  static #matrixColOp(m, col1, col2, f) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      runtime.Tuple.get(m, 2);
      tmp = 0 <= col1;
      if (tmp === true) {
        tmp1 = col1 < element1$;
        if (tmp1 === true) {
          tmp2 = 0 <= col2;
          if (tmp2 === true) {
            tmp3 = col2 < element1$;
            if (tmp3 === true) {
              tmp4 = col1 != col2;
              if (tmp4 === true) {
                tmp5 = smithNormalForm.#matrixFetchCol(m, col1);
                tmp6 = smithNormalForm.#matrixFetchCol(m, col2);
                tmp7 = smithNormalForm.#matrixStoreCol(m, col2);
                return smithNormalForm.#opLoop(tmp5, tmp6, tmp7, element0$, f)
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
  static #matrixCopy(m) {
    let element2$, element1$, element0$, tmp, tmp1, lambda$here;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = smithNormalForm.#arrayLength(element2$);
      lambda$here = lambda$5(smithNormalForm, element2$);
      tmp1 = smithNormalForm.#arrayTabulate(tmp, lambda$here);
      return globalThis.Object.freeze([
        element0$,
        element1$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #print_(s) {
    return runtime.Unit
  }
  static #smaller(a, b) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = a != 0;
    if (tmp === true) {
      tmp1 = b == 0;
      if (tmp1 === false) {
        tmp2 = smithNormalForm.#intInfAbs(a);
        tmp3 = smithNormalForm.#intInfAbs(b);
        return tmp2 < tmp3
      }
      return true;
    }
    return false;
  }
  static #smithNormalForm(mat0) {
    let height, width, mat, range, smithNormalForm2, height1, width1, mat1, range1, pos, inlinedVal;
    height = smithNormalForm.#matrixHeight(mat0);
    width = smithNormalForm.#matrixWidth(mat0);
    mat = smithNormalForm.#matrixCopy(mat0);
    range = smithNormalForm.#intMin(width, height);
    smithNormalForm2 = smithNormalForm;
    height1 = height;
    width1 = width;
    mat1 = mat;
    range1 = range;
    pos = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = pos == range1;
        if (scrut === true) {
          inlinedVal = mat1;
          break inlinedLbl
        }
        {
          let matCol, matRow;
          matCol = smithNormalForm2.#matrixFetchCol(mat1, pos);
          matRow = smithNormalForm2.#matrixFetchRow(mat1, pos);
          rowLoop_colLoop_hitPosAgain(2, smithNormalForm2, height1, width1, mat1, pos, matCol, matRow, undefined);
          tmp = pos + 1;
          pos = tmp;
          continue loopLabel;
        }
      }
    }
    return inlinedVal
  }
  static #table() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = smithNormalForm.Cons(4, smithNormalForm.Nil);
    tmp1 = smithNormalForm.Cons(4, tmp);
    tmp2 = smithNormalForm.Cons(2, tmp1);
    tmp3 = smithNormalForm.Cons(12, smithNormalForm.Nil);
    tmp4 = smithNormalForm.Cons(6, tmp3);
    tmp5 = smithNormalForm.Cons(-6, tmp4);
    tmp6 = smithNormalForm.Cons(-16, smithNormalForm.Nil);
    tmp7 = smithNormalForm.Cons(-4, tmp6);
    tmp8 = smithNormalForm.Cons(10, tmp7);
    tmp9 = smithNormalForm.Cons(tmp8, smithNormalForm.Nil);
    tmp10 = smithNormalForm.Cons(tmp5, tmp9);
    return smithNormalForm.Cons(tmp2, tmp10)
  }
  static #f(x, y) {
    let tmp, inlinedVal;
    tmp = f_table$table();
    inlinedVal = tmp(undefined, undefined, undefined, undefined, undefined, x, undefined);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, y, undefined)
  }
  static #snf() {
    let big, tmp;
    big = smithNormalForm.#matrixMake(3, 3, snf_f$f);
    tmp = smithNormalForm.#smithNormalForm(big);
    return smithNormalForm.#matrixFetch(tmp, 2, 2)
  }
  static main() {
    let big, tmp;
    big = smithNormalForm1.#matrixMake(3, 3, main_snf_f$f);
    tmp = smithNormalForm1.#smithNormalForm(big);
    return smithNormalForm1.#matrixFetch(tmp, 2, 2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "smithNormalForm"];
});
export { init as _$_modulePrivate_$_init };
export { loop as _$_modulePrivate_$_loop };
export { loop1 as _$_modulePrivate_$_loop1 };
export { swapColLoop as _$_modulePrivate_$_swapColLoop };
export { colLoop as _$_modulePrivate_$_colLoop };
export { swapRowLoop as _$_modulePrivate_$_swapRowLoop };
export { hitPosAgain as _$_modulePrivate_$_hitPosAgain };
export { rowLoop as _$_modulePrivate_$_rowLoop };
export { dd as _$_modulePrivate_$_dd };
export { loop2 as _$_modulePrivate_$_loop2 };
export { smithNormalForm1 as _$_modulePrivate_$_smithNormalForm };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { main_snf_f_table$table as _$_modulePrivate_$_main_snf_f_table$table };
export { main_snf_f$f as _$_modulePrivate_$_main_snf_f$f };
export { main_snf$snf as _$_modulePrivate_$_main_snf$snf };
export { main_snf_f_listNth$listNth as _$_modulePrivate_$_main_snf_f_listNth$listNth };
export { main_snf_f_listNth$listNth1 as _$_modulePrivate_$_main_snf_f_listNth$listNth1 };
export { snf_f_table$table as _$_modulePrivate_$_snf_f_table$table };
export { snf_f$f as _$_modulePrivate_$_snf_f$f };
export { snf_f_listNth$listNth as _$_modulePrivate_$_snf_f_listNth$listNth };
export { snf_f_listNth$listNth1 as _$_modulePrivate_$_snf_f_listNth$listNth1 };
export { f_table$table as _$_modulePrivate_$_f_table$table };
export { f_listNth$listNth as _$_modulePrivate_$_f_listNth$listNth };
export { f_listNth$listNth1 as _$_modulePrivate_$_f_listNth$listNth1 };
export { main_snf_f_listNth$l_Cons as _$_modulePrivate_$_main_snf_f_listNth$l_Cons };
export { main_snf_f_listNth$l_rest as _$_modulePrivate_$_main_snf_f_listNth$l_rest };
export { main_snf_f_listNth$l_dflt as _$_modulePrivate_$_main_snf_f_listNth$l_dflt };
export { main_snf_f_listNth$l_Cons1 as _$_modulePrivate_$_main_snf_f_listNth$l_Cons1 };
export { main_snf_f_listNth$l_rest1 as _$_modulePrivate_$_main_snf_f_listNth$l_rest1 };
export { main_snf_f_listNth$l_dflt1 as _$_modulePrivate_$_main_snf_f_listNth$l_dflt1 };
export { snf_f_listNth$l_Cons as _$_modulePrivate_$_snf_f_listNth$l_Cons };
export { snf_f_listNth$l_rest as _$_modulePrivate_$_snf_f_listNth$l_rest };
export { snf_f_listNth$l_Cons1 as _$_modulePrivate_$_snf_f_listNth$l_Cons1 };
export { snf_f_listNth$l_rest1 as _$_modulePrivate_$_snf_f_listNth$l_rest1 };
export { snf_f_listNth$l_dflt as _$_modulePrivate_$_snf_f_listNth$l_dflt };
export { snf_f_listNth$l_dflt1 as _$_modulePrivate_$_snf_f_listNth$l_dflt1 };
export { f_listNth$l_Cons as _$_modulePrivate_$_f_listNth$l_Cons };
export { f_listNth$l_rest as _$_modulePrivate_$_f_listNth$l_rest };
export { f_listNth$l_dflt as _$_modulePrivate_$_f_listNth$l_dflt };
export { f_listNth$l_Cons1 as _$_modulePrivate_$_f_listNth$l_Cons1 };
export { f_listNth$l_rest1 as _$_modulePrivate_$_f_listNth$l_rest1 };
export { f_listNth$l_dflt1 as _$_modulePrivate_$_f_listNth$l_dflt1 };
export { swapRowLoop_swapColLoop as _$_modulePrivate_$_swapRowLoop_swapColLoop };
export { rowLoop_colLoop_hitPosAgain as _$_modulePrivate_$_rowLoop_colLoop_hitPosAgain };
export { f_listNth$l_dflt$worker as _$_modulePrivate_$_f_listNth$l_dflt$worker };
export { f_listNth$l_Cons$worker as _$_modulePrivate_$_f_listNth$l_Cons$worker };
export { f_listNth$l_dflt$worker1 as _$_modulePrivate_$_f_listNth$l_dflt$worker1 };
export { f_listNth$l_Cons$worker1 as _$_modulePrivate_$_f_listNth$l_Cons$worker1 };
export { snf_f_listNth$l_dflt$worker as _$_modulePrivate_$_snf_f_listNth$l_dflt$worker };
export { snf_f_listNth$l_dflt$worker1 as _$_modulePrivate_$_snf_f_listNth$l_dflt$worker1 };
export { snf_f_listNth$l_Cons$worker as _$_modulePrivate_$_snf_f_listNth$l_Cons$worker };
export { snf_f_listNth$l_Cons$worker1 as _$_modulePrivate_$_snf_f_listNth$l_Cons$worker1 };
export { main_snf_f_listNth$l_dflt$worker as _$_modulePrivate_$_main_snf_f_listNth$l_dflt$worker };
export { main_snf_f_listNth$l_Cons$worker as _$_modulePrivate_$_main_snf_f_listNth$l_Cons$worker };
export { main_snf_f_listNth$l_dflt$worker1 as _$_modulePrivate_$_main_snf_f_listNth$l_dflt$worker1 };
export { main_snf_f_listNth$l_Cons$worker1 as _$_modulePrivate_$_main_snf_f_listNth$l_Cons$worker1 };
export default smithNormalForm1;
