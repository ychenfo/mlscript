const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const all$accessorSymbol = globalThis.Symbol("all");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const itemEq$accessorSymbol = globalThis.Symbol("itemEq");
const bankEq$accessorSymbol = globalThis.Symbol("bankEq");
const stateEq$accessorSymbol = globalThis.Symbol("stateEq");
const updateState$accessorSymbol = globalThis.Symbol("updateState");
const totalTime$accessorSymbol = globalThis.Symbol("totalTime");
let puzzle1, lambda, lambda1, lambda$, main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda, main_testPuzzle_nofib_transfer$ls_Nil, main_testPuzzle_nofib_transfer_concat$ls_Cons, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append_main_testPuzzle_nofib_transfer_append$xs_Cons$main_testPuzzle_nofib_transfer_append$xs_Cons, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append$main_testPuzzle_nofib_transfer_concat_append$append, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons$main_testPuzzle_nofib_transfer_concat$ls_Cons, main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo, main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1, main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State1, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State2, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State3, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons2, main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil, main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons2, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$2, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker1, main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker2, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker1, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker2, main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker3, main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker;
main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker = function main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, newHistory, tmp, tmp1, tmp2;
          scrut = puzzle1[stateEq$accessorSymbol](param0, param1);
          if (scrut === true) {
            tmp = globalThis.Object.freeze([
              param3,
              param1
            ]);
            tmp1 = NofibPrelude.Cons(tmp, param4);
            return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
          }
          {
            let inlinedVal, inlinedVal1, inlinedVal2, a, b, inlinedVal3, a1, b1, inlinedVal4;
            tmp2 = globalThis.Object.freeze([
              param3,
              param1
            ]);
            newHistory = NofibPrelude.Cons(tmp2, param4);
            if (param2 instanceof puzzle1.LeftBank.class) {
              inlinedVal = puzzle1.RightBank;
            } else if (param2 instanceof puzzle1.RightBank.class) {
              inlinedVal = puzzle1.LeftBank;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            a = puzzle1.Bono;
            b = puzzle1.Adam;
            inlinedVal3 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(4, a, b, puzzle1, param1, undefined, param2, undefined, inlinedVal, param4, undefined, param3, undefined, param0, newHistory, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            inlinedVal1 = inlinedVal3();
            a1 = puzzle1.Bono;
            b1 = puzzle1.Larry;
            inlinedVal4 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(5, a1, b1, undefined, undefined, undefined, undefined, undefined, puzzle1, undefined, param0, param1, param2, param3, param4, newHistory, inlinedVal, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            inlinedVal2 = inlinedVal4(undefined, undefined, undefined, undefined, undefined);
            return inlinedVal1(inlinedVal2);
          }
        }
      case 1:
        {
          let inlinedVal;
          if (param0 instanceof param2.Bono.class) {
            let inlinedVal1;
            if (param3 instanceof param2.State.class) {
              inlinedVal1 = param3.b;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param0 instanceof param2.Edge.class) {
            let inlinedVal1;
            if (param3 instanceof param2.State.class) {
              inlinedVal1 = param3.e;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param0 instanceof param2.Larry.class) {
            let inlinedVal1;
            if (param3 instanceof param2.State.class) {
              inlinedVal1 = param3.l;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param0 instanceof param2.Adam.class) {
            let inlinedVal1;
            if (param3 instanceof param2.State.class) {
              inlinedVal1 = param3.a;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          param4 = param2[bankEq$accessorSymbol](inlinedVal, param5);
          if (param4 === true) {
            let inlinedVal1, lambda$here;
            param6 = param2[updateState$accessorSymbol](param3, param0, param7);
            lambda$here = lambda$(param2, param6);
            inlinedVal1 = param2[all$accessorSymbol](lambda$here, param8);
            if (inlinedVal1 === true) {
              let inlinedVal2, inlinedVal3;
              if (param0 instanceof param2.Bono.class) {
                inlinedVal2 = 10;
              } else if (param0 instanceof param2.Edge.class) {
                inlinedVal2 = 5;
              } else if (param0 instanceof param2.Larry.class) {
                inlinedVal2 = 2;
              } else if (param0 instanceof param2.Adam.class) {
                inlinedVal2 = 1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              param9 = param10 + inlinedVal2;
              param11 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(0, param12, param6, param7, param9, param13, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              inlinedVal3 = param1(param2, param3, undefined, param5, undefined, param7, param8, undefined, param10, undefined, param12, param13);
              return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons$main_testPuzzle_nofib_transfer_concat$ls_Cons(param11, inlinedVal3)
            }
            return param1(param2, param3, undefined, param5, undefined, param7, param8, undefined, param10, undefined, param12, param13);
          }
          return param1(param2, param3, undefined, param5, undefined, param7, param8, undefined, param10, undefined, param12, param13);
        }
      case 2:
        {
          let inlinedVal, b, param1_tmp, param14_tmp, param9_tmp, param12_tmp, param13_tmp, param0_tmp;
          if (param0 instanceof param7.Bono.class) {
            inlinedVal = param7.Edge;
          } else if (param0 instanceof param7.Edge.class) {
            inlinedVal = param7.Larry;
          } else if (param0 instanceof param7.Larry.class) {
            inlinedVal = param7.Adam;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          b = param7.Adam;
          param12_tmp = param12;
          param13_tmp = param13;
          param0_tmp = param0;
          param14_tmp = param14;
          param1_tmp = param1;
          param9_tmp = param9;
          param0 = inlinedVal;
          param1 = b;
          param2 = undefined;
          param3 = undefined;
          param4 = undefined;
          param5 = undefined;
          param8 = param0_tmp;
          param9 = param10;
          param10 = undefined;
          param12 = undefined;
          param13 = undefined;
          param14 = undefined;
          param18 = param13_tmp;
          param21 = param12_tmp;
          param23 = param9_tmp;
          param24 = param14_tmp;
          param26 = param1_tmp;
          id = 6;
          continue loopLabel;
        }
      case 3:
        {
          let inlinedVal;
          if (param8 instanceof param7.Bono.class) {
            let inlinedVal1;
            if (param9 instanceof param7.State.class) {
              inlinedVal1 = param9.b;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param8 instanceof param7.Edge.class) {
            let inlinedVal1;
            if (param9 instanceof param7.State.class) {
              inlinedVal1 = param9.e;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param8 instanceof param7.Larry.class) {
            let inlinedVal1;
            if (param9 instanceof param7.State.class) {
              inlinedVal1 = param9.l;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (param8 instanceof param7.Adam.class) {
            let inlinedVal1;
            if (param9 instanceof param7.State.class) {
              inlinedVal1 = param9.a;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          param10 = param7[bankEq$accessorSymbol](inlinedVal, param11);
          if (param10 === true) {
            let inlinedVal1;
            if (param0 instanceof param7.Bono.class) {
              let inlinedVal2;
              if (param9 instanceof param7.State.class) {
                inlinedVal2 = param9.b;
                inlinedVal1 = inlinedVal2;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param0 instanceof param7.Edge.class) {
              let inlinedVal2;
              if (param9 instanceof param7.State.class) {
                inlinedVal2 = param9.e;
                inlinedVal1 = inlinedVal2;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param0 instanceof param7.Larry.class) {
              let inlinedVal2;
              if (param9 instanceof param7.State.class) {
                inlinedVal2 = param9.l;
                inlinedVal1 = inlinedVal2;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param0 instanceof param7.Adam.class) {
              let inlinedVal2;
              if (param9 instanceof param7.State.class) {
                inlinedVal2 = param9.a;
                inlinedVal1 = inlinedVal2;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            param13 = param7[bankEq$accessorSymbol](inlinedVal1, param11);
            if (param13 === true) {
              let inlinedVal2, inlinedVal3, inlinedVal4, lambda$here, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$;
              if (param9 instanceof puzzle1.State.class) {
                arg$State$0$ = param9.b;
                arg$State$1$ = param9.e;
                arg$State$2$ = param9.l;
                arg$State$3$ = param9.a;
                if (param8 instanceof puzzle1.Bono.class) {
                  inlinedVal2 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State3(param15, arg$State$1$, arg$State$2$, arg$State$3$);
                } else if (param8 instanceof puzzle1.Edge.class) {
                  inlinedVal2 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State2(arg$State$0$, param15, arg$State$2$, arg$State$3$);
                } else if (param8 instanceof puzzle1.Larry.class) {
                  inlinedVal2 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State1(arg$State$0$, arg$State$1$, param15, arg$State$3$);
                } else if (param8 instanceof puzzle1.Adam.class) {
                  inlinedVal2 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State(arg$State$0$, arg$State$1$, arg$State$2$, param15);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal3 = inlinedVal2(param0, param15);
                lambda$here = lambda$(param7, inlinedVal3);
                inlinedVal4 = param7[all$accessorSymbol](lambda$here, param18);
                if (inlinedVal4 === true) {
                  let inlinedVal5, inlinedVal6;
                  if (param8 instanceof param7.Bono.class) {
                    inlinedVal5 = 10;
                  } else if (param8 instanceof param7.Edge.class) {
                    inlinedVal5 = 5;
                  } else if (param8 instanceof param7.Larry.class) {
                    inlinedVal5 = 2;
                  } else if (param8 instanceof param7.Adam.class) {
                    inlinedVal5 = 1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  param20 = param21 + inlinedVal5;
                  param22 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(0, param23, inlinedVal3, param15, param20, param24, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                  inlinedVal6 = param1(undefined, undefined, undefined, undefined, undefined, param7, param8, param9, undefined, param11, undefined, undefined, undefined, param15, undefined, undefined, param18, undefined, undefined, param21, undefined, param23, param24, undefined, param26);
                  return main_testPuzzle_nofib_transfer_concat$ls_Cons(param22, inlinedVal6)
                }
                return param1(undefined, undefined, undefined, undefined, undefined, param7, param8, param9, undefined, param11, undefined, undefined, undefined, param15, undefined, undefined, param18, undefined, undefined, param21, undefined, param23, param24, undefined, param26);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            return param1(undefined, undefined, undefined, undefined, undefined, param7, param8, param9, undefined, param11, undefined, undefined, undefined, param15, undefined, undefined, param18, undefined, undefined, param21, undefined, param23, param24, undefined, param26);
          }
          return param1(undefined, undefined, undefined, undefined, undefined, param7, param8, param9, undefined, param11, undefined, undefined, undefined, param15, undefined, undefined, param18, undefined, undefined, param21, undefined, param23, param24, undefined, param26);
        }
      case 4:
        {
          let scrut;
          scrut = puzzle1[itemEq$accessorSymbol](param0, param1);
          if (scrut === true) {
            param1 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil();
            id = 1;
            continue loopLabel
          }
          {
            let inlinedVal;
            if (param0 instanceof puzzle1.Bono.class) {
              inlinedVal = puzzle1.Edge;
            } else if (param0 instanceof puzzle1.Edge.class) {
              inlinedVal = puzzle1.Larry;
            } else if (param0 instanceof puzzle1.Larry.class) {
              inlinedVal = puzzle1.Adam;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            param1 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2(inlinedVal, param1);
            id = 1;
            continue loopLabel;
          }
        }
      case 5:
        {
          let scrut;
          scrut = puzzle1[itemEq$accessorSymbol](param0, param1);
          if (scrut === true) {
            param1 = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil1();
            id = 2;
            continue loopLabel
          }
          {
            let inlinedVal;
            if (param0 instanceof puzzle1.Bono.class) {
              inlinedVal = puzzle1.Edge;
            } else if (param0 instanceof puzzle1.Edge.class) {
              inlinedVal = puzzle1.Larry;
            } else if (param0 instanceof puzzle1.Larry.class) {
              inlinedVal = puzzle1.Adam;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            param1 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(inlinedVal, param1);
            id = 2;
            continue loopLabel;
          }
        }
      case 6:
        {
          let scrut;
          scrut = puzzle1[itemEq$accessorSymbol](param0, param1);
          if (scrut === true) {
            param1 = main_testPuzzle_nofib_transfer$ls_Nil();
            id = 3;
            continue loopLabel
          }
          {
            let inlinedVal;
            if (param0 instanceof puzzle1.Bono.class) {
              inlinedVal = puzzle1.Edge;
            } else if (param0 instanceof puzzle1.Edge.class) {
              inlinedVal = puzzle1.Larry;
            } else if (param0 instanceof puzzle1.Larry.class) {
              inlinedVal = puzzle1.Adam;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            param1 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1(inlinedVal, param1);
            id = 3;
            continue loopLabel;
          }
        }
    }
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append_main_testPuzzle_nofib_transfer_append$xs_Cons$main_testPuzzle_nofib_transfer_append$xs_Cons = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append_main_testPuzzle_nofib_transfer_append$xs_Cons$main_testPuzzle_nofib_transfer_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append$main_testPuzzle_nofib_transfer_concat_append$append = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append$main_testPuzzle_nofib_transfer_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append$main_testPuzzle_nofib_transfer_concat_append$append(arg$Cons$1$, ys);
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append_main_testPuzzle_nofib_transfer_append$xs_Cons$main_testPuzzle_nofib_transfer_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons$main_testPuzzle_nofib_transfer_concat$ls_Cons = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons$main_testPuzzle_nofib_transfer_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_concat$ls_Cons_main_testPuzzle_nofib_transfer_concat_append$append$main_testPuzzle_nofib_transfer_concat_append$append(Cons_head, inlinedVal)
  }
};
main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1 = function main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24) => {
    return main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(6, a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24)
  }
};
main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo = function main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13) => {
    return main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(5, a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
  }
};
main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2 = function main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18) => {
    return main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(4, a, b, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_puzzle, fv_dest, fv_scrut, fv_location, fv_newDest, fv_newLocation, fv_history, fv_newTime, fv_countdown, fv_tmp, fv_source, fv_newHistory) => {
    return () => {
      return (eta$1$5) => {
        return eta$1$5
      }
    }
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State(State_b, State_e, State_l, State_a) {
  return (fv_i, fv_pos) => {
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker3(State_b, State_e, State_l, State_a, fv_i, fv_pos)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker3 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos) {
  if (fv_i instanceof puzzle1.Bono.class) {
    return puzzle1.State(fv_pos, State_e, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Edge.class) {
    return puzzle1.State(State_b, fv_pos, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Larry.class) {
    return puzzle1.State(State_b, State_e, fv_pos, State_a)
  } else if (fv_i instanceof puzzle1.Adam.class) {
    return puzzle1.State(State_b, State_e, State_l, fv_pos)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State1 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State(State_b, State_e, State_l, State_a) {
  return (fv_i, fv_pos) => {
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker2(State_b, State_e, State_l, State_a, fv_i, fv_pos)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker2 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos) {
  if (fv_i instanceof puzzle1.Bono.class) {
    return puzzle1.State(fv_pos, State_e, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Edge.class) {
    return puzzle1.State(State_b, fv_pos, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Larry.class) {
    return puzzle1.State(State_b, State_e, fv_pos, State_a)
  } else if (fv_i instanceof puzzle1.Adam.class) {
    return puzzle1.State(State_b, State_e, State_l, fv_pos)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State2 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State(State_b, State_e, State_l, State_a) {
  return (fv_i, fv_pos) => {
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker1(State_b, State_e, State_l, State_a, fv_i, fv_pos)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker1 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos) {
  if (fv_i instanceof puzzle1.Bono.class) {
    return puzzle1.State(fv_pos, State_e, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Edge.class) {
    return puzzle1.State(State_b, fv_pos, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Larry.class) {
    return puzzle1.State(State_b, State_e, fv_pos, State_a)
  } else if (fv_i instanceof puzzle1.Adam.class) {
    return puzzle1.State(State_b, State_e, State_l, fv_pos)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State3 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State(State_b, State_e, State_l, State_a) {
  return (fv_i, fv_pos) => {
    return main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos)
  }
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer_updateState$s_State$main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos) {
  if (fv_i instanceof puzzle1.Bono.class) {
    return puzzle1.State(fv_pos, State_e, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Edge.class) {
    return puzzle1.State(State_b, fv_pos, State_l, State_a)
  } else if (fv_i instanceof puzzle1.Larry.class) {
    return puzzle1.State(State_b, State_e, fv_pos, State_a)
  } else if (fv_i instanceof puzzle1.Adam.class) {
    return puzzle1.State(State_b, State_e, State_l, fv_pos)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt() {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      return fv_l$_(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      let l$_;
      l$_ = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons1(Cons_head, fv_l$_);
      return Cons_tail(l$_)(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, Cons_tail) {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker2(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker2 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let inlinedVal, inlinedVal1, inlinedVal2, baseCall, lambda$here;
  fv_tmp = NofibPrelude.nofibStringToList("Solution ");
  inlinedVal = fv_count + "";
  fv_tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
  fv_tmp2 = fv_count + 1;
  inlinedVal1 = Cons_tail(fv_s, undefined, fv_tmp2, undefined, undefined, undefined, undefined);
  if (Cons_head instanceof NofibPrelude.Nil.class) {
    inlinedVal2 = inlinedVal1;
  } else {
    lambda$here = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$1(puzzle1, Cons_head);
    baseCall = puzzle1[foldr$accessorSymbol](lambda$here, lambda1, Cons_head);
    inlinedVal2 = runtime.safeCall(baseCall(inlinedVal1));
  }
  fv_tmp3 = NofibPrelude.Cons("\n", inlinedVal2);
  fv_tmp4 = puzzle1[append$accessorSymbol](fv_tmp1, fv_tmp3);
  return puzzle1[append$accessorSymbol](fv_tmp, fv_tmp4)
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons1 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      let l$_;
      l$_ = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, fv_l$_);
      return Cons_tail(l$_)(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt1 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt() {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      return fv_l$_(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons2 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      let l$_;
      l$_ = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons2(Cons_head, fv_l$_);
      return Cons_tail(l$_)(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil = function main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil() {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return fv_s
  }
};
main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil1 = function main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil() {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return fv_s
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons1 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, Cons_tail) {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker1(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker1 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let inlinedVal, inlinedVal1, inlinedVal2, baseCall, lambda$here;
  fv_tmp = NofibPrelude.nofibStringToList("Solution ");
  inlinedVal = fv_count + "";
  fv_tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
  fv_tmp2 = fv_count + 1;
  inlinedVal1 = Cons_tail(fv_s, undefined, fv_tmp2, undefined, undefined, undefined, undefined);
  if (Cons_head instanceof NofibPrelude.Nil.class) {
    inlinedVal2 = inlinedVal1;
  } else {
    lambda$here = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle1, Cons_head);
    baseCall = puzzle1[foldr$accessorSymbol](lambda$here, lambda1, Cons_head);
    inlinedVal2 = runtime.safeCall(baseCall(inlinedVal1));
  }
  fv_tmp3 = NofibPrelude.Cons("\n", inlinedVal2);
  fv_tmp4 = puzzle1[append$accessorSymbol](fv_tmp1, fv_tmp3);
  return puzzle1[append$accessorSymbol](fv_tmp, fv_tmp4)
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons2 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, Cons_tail) {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons$main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let inlinedVal, inlinedVal1, inlinedVal2, baseCall, lambda$here;
  fv_tmp = NofibPrelude.nofibStringToList("Solution ");
  inlinedVal = fv_count + "";
  fv_tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
  fv_tmp2 = fv_count + 1;
  inlinedVal1 = Cons_tail(fv_s, undefined, fv_tmp2, undefined, undefined, undefined, undefined);
  if (Cons_head instanceof NofibPrelude.Nil.class) {
    inlinedVal2 = inlinedVal1;
  } else {
    lambda$here = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$2(puzzle1, Cons_head);
    baseCall = puzzle1[foldr$accessorSymbol](lambda$here, lambda1, Cons_head);
    inlinedVal2 = runtime.safeCall(baseCall(inlinedVal1));
  }
  fv_tmp3 = NofibPrelude.Cons("\n", inlinedVal2);
  fv_tmp4 = puzzle1[append$accessorSymbol](fv_tmp1, fv_tmp3);
  return puzzle1[append$accessorSymbol](fv_tmp, fv_tmp4)
};
main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil1 = function main_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$ls_Nil$main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_i, fv_tmp, fv_puzzle, fv_tmp1, fv_source, fv_dest, fv_location, fv_countdown, fv_history, fv_newHistory, fv_newLocation) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4) => {
      return NofibPrelude.Nil
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$ = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle2, history) {
  return (timestate, acc) => {
    return (eta$0$0) => {
      return main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda(puzzle2, history, timestate, acc, eta$0$0)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$1 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle2, history) {
  return (timestate, acc) => {
    return (eta$0$0) => {
      return main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda(puzzle2, history, timestate, acc, eta$0$0)
    }
  }
};
main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$2 = function main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons_main_testPuzzle_nofib_writeSolutions$solutions_Cons_main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$$main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle2, history) {
  return (timestate, acc) => {
    return (eta$0$0) => {
      return main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda(puzzle2, history, timestate, acc, eta$0$0)
    }
  }
};
main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda = function main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda(puzzle2, history, timestate, acc, s) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    let inlinedVal, inlinedVal1, tmp7, tmp8, tmp9, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$;
    element0$ = runtime.Tuple.get(timestate, 0);
    element1$ = runtime.Tuple.get(timestate, 1);
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle2[totalTime$accessorSymbol](history);
    tmp2 = tmp1 - element0$;
    inlinedVal = tmp2 + "";
    tmp3 = NofibPrelude.nofibStringToList(inlinedVal);
    tmp4 = runtime.safeCall(acc(s));
    tmp7 = NofibPrelude.nofibStringToList("----------------------------------------\n");
    if (element1$ instanceof puzzle1.State.class) {
      arg$State$0$ = element1$.b;
      if (element1$ instanceof puzzle1.State.class) {
        arg$State$1$ = element1$.e;
        if (element1$ instanceof puzzle1.State.class) {
          arg$State$2$ = element1$.l;
          if (element1$ instanceof puzzle1.State.class) {
            let fv_tmp, fv_tmp1, inlinedVal2, fv_tmp2, fv_tmp3, inlinedVal3, fv_tmp4, fv_tmp5, inlinedVal4, fv_tmp6, fv_tmp7, inlinedVal5;
            arg$State$3$ = element1$.a;
            tmp8 = NofibPrelude.nofibStringToList("----------------------------------------\n");
            tmp9 = puzzle1[append$accessorSymbol](tmp8, tmp4);
            if (arg$State$3$ instanceof puzzle1.LeftBank.class) {
              fv_tmp = NofibPrelude.nofibStringToList("    Adam |                    |\n");
              inlinedVal2 = puzzle1[append$accessorSymbol](fv_tmp, tmp9);
            } else if (arg$State$3$ instanceof puzzle1.RightBank.class) {
              fv_tmp1 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
              inlinedVal2 = puzzle1[append$accessorSymbol](fv_tmp1, tmp9);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (arg$State$2$ instanceof puzzle1.LeftBank.class) {
              fv_tmp2 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
              inlinedVal3 = puzzle1[append$accessorSymbol](fv_tmp2, inlinedVal2);
            } else if (arg$State$2$ instanceof puzzle1.RightBank.class) {
              fv_tmp3 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
              inlinedVal3 = puzzle1[append$accessorSymbol](fv_tmp3, inlinedVal2);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (arg$State$1$ instanceof puzzle1.LeftBank.class) {
              fv_tmp4 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
              inlinedVal4 = puzzle1[append$accessorSymbol](fv_tmp4, inlinedVal3);
            } else if (arg$State$1$ instanceof puzzle1.RightBank.class) {
              fv_tmp5 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
              inlinedVal4 = puzzle1[append$accessorSymbol](fv_tmp5, inlinedVal3);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (arg$State$0$ instanceof puzzle1.LeftBank.class) {
              fv_tmp6 = NofibPrelude.nofibStringToList("    Bono |                    |\n");
              inlinedVal5 = puzzle1[append$accessorSymbol](fv_tmp6, inlinedVal4);
            } else if (arg$State$0$ instanceof puzzle1.RightBank.class) {
              fv_tmp7 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
              inlinedVal5 = puzzle1[append$accessorSymbol](fv_tmp7, inlinedVal4);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal1 = puzzle1[append$accessorSymbol](tmp7, inlinedVal5);
            tmp5 = NofibPrelude.Cons("\n", inlinedVal1);
            tmp6 = puzzle2[append$accessorSymbol](tmp3, tmp5);
            return puzzle2[append$accessorSymbol](tmp, tmp6)
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
main_testPuzzle_nofib_transfer$ls_Nil = function main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_j, fv_tmp, fv_puzzle, fv_i, fv_dest, fv_scrut, fv_location, fv_tmp1, fv_scrut1, fv_tmp2, fv_newLocation, fv_newDest, fv_scrut2, fv_history, fv_tmp3, fv_newTime, fv_countdown, fv_tmp4, fv_source, fv_newHistory, fv_tmp5, fv_xs) => {
    return fv_xs(undefined, undefined, undefined, undefined, undefined, fv_puzzle, undefined, fv_source, fv_dest, fv_location, fv_countdown, fv_history, fv_newHistory, fv_newLocation)
  }
};
main_testPuzzle_nofib_transfer_concat$ls_Cons = function main_testPuzzle_nofib_transfer_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return puzzle1[append$accessorSymbol](Cons_head, inlinedVal)
  }
};
lambda1 = (undefined, function (x) {
  return x
});
lambda$ = (undefined, function (puzzle2, state) {
  return (caseScrut) => {
    return lambda(puzzle2, state, caseScrut)
  }
});
lambda = (undefined, function (puzzle2, state, caseScrut) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = puzzle2[stateEq$accessorSymbol](state, element1$);
    return ! tmp
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class puzzle {
  static {
    puzzle1 = this
  }
  static get [append$accessorSymbol]() { return puzzle.#append; }
  static get [all$accessorSymbol]() { return puzzle.#all; }
  static get [foldr$accessorSymbol]() { return puzzle.#foldr; }
  static get [itemEq$accessorSymbol]() { return puzzle.#itemEq; }
  static get [bankEq$accessorSymbol]() { return puzzle.#bankEq; }
  static get [stateEq$accessorSymbol]() { return puzzle.#stateEq; }
  static get [updateState$accessorSymbol]() { return puzzle.#updateState; }
  static get [totalTime$accessorSymbol]() { return puzzle.#totalTime; }
  static {
    let tmp, tmp1;
    (class Bono {
      static {
        new this
      }
      constructor() {
        puzzle.Bono = this;
        Object.defineProperty(this, "class", {
          value: Bono
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bono"];
    });
    (class Edge {
      static {
        new this
      }
      constructor() {
        puzzle.Edge = this;
        Object.defineProperty(this, "class", {
          value: Edge
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Edge"];
    });
    (class Larry {
      static {
        new this
      }
      constructor() {
        puzzle.Larry = this;
        Object.defineProperty(this, "class", {
          value: Larry
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Larry"];
    });
    (class Adam {
      static {
        new this
      }
      constructor() {
        puzzle.Adam = this;
        Object.defineProperty(this, "class", {
          value: Adam
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Adam"];
    });
    (class LeftBank {
      static {
        new this
      }
      constructor() {
        puzzle.LeftBank = this;
        Object.defineProperty(this, "class", {
          value: LeftBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftBank"];
    });
    (class RightBank {
      static {
        new this
      }
      constructor() {
        puzzle.RightBank = this;
        Object.defineProperty(this, "class", {
          value: RightBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RightBank"];
    });
    puzzle.State = function State(b, e, l, a) {
      return globalThis.Object.freeze(new State.class(b, e, l, a));
    };
    (class State {
      static {
        puzzle.State.class = this
      }
      constructor(b, e, l, a) {
        this.b = b;
        this.e = e;
        this.l = l;
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["b", "e", "l", "a"]];
    });
    tmp = puzzle.State(puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank);
    puzzle.initialState = tmp;
    tmp1 = puzzle.State(puzzle.RightBank, puzzle.RightBank, puzzle.RightBank, puzzle.RightBank);
    puzzle.finalState = tmp1;
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = puzzle.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #all(p, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(p(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = puzzle.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #itemEq(a, b) {
    if (a instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.Bono.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.Edge.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.Larry.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.Adam.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #bankEq(a, b) {
    if (a instanceof puzzle.LeftBank.class) {
      if (b instanceof puzzle.LeftBank.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.RightBank.class) {
      if (b instanceof puzzle.RightBank.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #stateEq(s1, s2) {
    let arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp, tmp1, tmp2;
    if (s1 instanceof puzzle.State.class) {
      arg$State$0$ = s1.b;
      arg$State$1$ = s1.e;
      arg$State$2$ = s1.l;
      arg$State$3$ = s1.a;
      if (s2 instanceof puzzle.State.class) {
        arg$State$0$1 = s2.b;
        arg$State$1$1 = s2.e;
        arg$State$2$1 = s2.l;
        arg$State$3$1 = s2.a;
        tmp = puzzle.#bankEq(arg$State$0$, arg$State$0$1);
        if (tmp === true) {
          tmp1 = puzzle.#bankEq(arg$State$1$, arg$State$1$1);
          if (tmp1 === true) {
            tmp2 = puzzle.#bankEq(arg$State$2$, arg$State$2$1);
            if (tmp2 === true) {
              return puzzle.#bankEq(arg$State$3$, arg$State$3$1)
            }
            return false;
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #updateState(s, i, pos) {
    let arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$;
    if (s instanceof puzzle.State.class) {
      arg$State$0$ = s.b;
      arg$State$1$ = s.e;
      arg$State$2$ = s.l;
      arg$State$3$ = s.a;
      if (i instanceof puzzle.Bono.class) {
        return puzzle.State(pos, arg$State$1$, arg$State$2$, arg$State$3$)
      } else if (i instanceof puzzle.Edge.class) {
        return puzzle.State(arg$State$0$, pos, arg$State$2$, arg$State$3$)
      } else if (i instanceof puzzle.Larry.class) {
        return puzzle.State(arg$State$0$, arg$State$1$, pos, arg$State$3$)
      } else if (i instanceof puzzle.Adam.class) {
        return puzzle.State(arg$State$0$, arg$State$1$, arg$State$2$, pos)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #totalTime(history) {
    let arg$Cons$0$, element0$;
    if (history instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = history.head;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        runtime.Tuple.get(arg$Cons$0$, 1);
        return element0$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    if (true === true) {
      let inlinedVal, s, inlinedVal1, arg$Cons$0$, arg$Cons$1$, tmp, source, dest, location, history, inlinedVal2;
      source = puzzle1.initialState;
      dest = puzzle1.finalState;
      location = puzzle1.RightBank;
      history = NofibPrelude.Nil;
      inlinedVal2 = main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$transfer_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer$ls_Cons$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker_main_main_testPuzzle_nofib_transfer$transfer$main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(0, source, dest, location, 0, history, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      if (inlinedVal2 instanceof NofibPrelude.Nil.class) {
        inlinedVal = main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil1();
      } else if (inlinedVal2 instanceof NofibPrelude.Cons.class) {
        let Cons_tail, puzzle2, minSoFar, mins, ls, inlinedVal3, l$_, inlinedVal4;
        arg$Cons$0$ = inlinedVal2.head;
        arg$Cons$1$ = inlinedVal2.tail;
        tmp = puzzle1.#totalTime(arg$Cons$0$);
        Cons_tail = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt();
        puzzle2 = puzzle1;
        minSoFar = tmp;
        mins = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(arg$Cons$0$, Cons_tail);
        ls = arg$Cons$1$;
        inlinedLbl: {
          loopLabel: while (true) {
            let total, scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1;
            if (ls instanceof NofibPrelude.Nil.class) {
              inlinedVal3 = mins;
              break inlinedLbl
            } else if (ls instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = ls.head;
              arg$Cons$1$1 = ls.tail;
              total = puzzle2.#totalTime(arg$Cons$0$1);
              scrut = minSoFar < total;
              if (scrut === true) {
                ls = arg$Cons$1$1;
                continue loopLabel
              }
              scrut1 = minSoFar === total;
              if (scrut1 === true) {
                mins = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons1(arg$Cons$0$1, mins);
                ls = arg$Cons$1$1;
                continue loopLabel
              }
              {
                let Cons_tail1;
                Cons_tail1 = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt$main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt1();
                minSoFar = total;
                mins = main_main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons$main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons2(arg$Cons$0$1, Cons_tail1);
                ls = arg$Cons$1$1;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        l$_ = main_main_testPuzzle_nofib_writeSolutions$solutions_Nil$main_testPuzzle_nofib_writeSolutions$solutions_Nil();
        inlinedVal4 = inlinedVal3(l$_);
        inlinedVal = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      s = NofibPrelude.Nil;
      inlinedVal1 = inlinedVal(s, undefined, 1, undefined, undefined, undefined, undefined);
      return NofibPrelude.nofibListToString(inlinedVal1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "puzzle"];
});
export default puzzle1;
