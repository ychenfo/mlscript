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
let puzzle1, lambda, lambda1, lambda$, main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda, main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$, main_testPuzzle_nofib_transfer$transfer, main_testPuzzle_nofib_transfer_concat_append$append, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2, main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons, main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt, main_testPuzzle_nofib_writeSolutions$solutions_Nil, main_testPuzzle_nofib_writeSolutions$solutions_Cons, main_testPuzzle_nofib_transfer_updateState$s_State, main_testPuzzle_nofib_transfer_append$xs_Cons, main_testPuzzle_nofib_transfer$ls_Nil, main_testPuzzle_nofib_transfer$ls_Nil1, main_testPuzzle_nofib_transfer_concat$ls_Cons, main_testPuzzle_nofib_transfer_concat$ls_Cons1, main_testPuzzle_nofib_transfer$ls_Nil2, main_testPuzzle_nofib_transfer$ls_Cons$worker, main_testPuzzle_nofib_transfer$ls_Cons$worker1, main_testPuzzle_nofib_transfer$ls_Cons$worker2, main_testPuzzle_nofib_transfer_updateState$s_State$worker, main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker1, main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker2;
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
main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$ = function main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle2, history) {
  return (timestate, acc) => {
    return (eta$0$0) => {
      return main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda_lambda$_lambda$lambda(puzzle2, history, timestate, acc, eta$0$0)
    }
  }
};
main_testPuzzle_nofib_transfer$transfer = function main_testPuzzle_nofib_transfer$transfer(source, dest, location, countdown, history) {
  let scrut, newHistory, tmp, tmp1, tmp2, tmp3, tmp4;
  scrut = puzzle1[stateEq$accessorSymbol](source, dest);
  if (scrut === true) {
    tmp = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    tmp1 = NofibPrelude.Cons(tmp, history);
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  }
  {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4;
    tmp2 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    newHistory = NofibPrelude.Cons(tmp2, history);
    if (location instanceof puzzle1.LeftBank.class) {
      inlinedVal = puzzle1.RightBank;
    } else if (location instanceof puzzle1.RightBank.class) {
      inlinedVal = puzzle1.LeftBank;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    tmp3 = main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2(puzzle1.Bono, puzzle1.Adam);
    inlinedVal1 = tmp3(puzzle1, dest, undefined, location, undefined, inlinedVal, history, undefined, countdown, undefined, source, newHistory);
    inlinedVal2 = inlinedVal1();
    tmp4 = main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1(puzzle1.Bono, puzzle1.Larry);
    inlinedVal3 = tmp4(undefined, undefined, undefined, undefined, undefined, puzzle1, undefined, source, dest, location, countdown, history, newHistory, inlinedVal);
    inlinedVal4 = inlinedVal3(undefined, undefined, undefined, undefined, undefined);
    return inlinedVal2(inlinedVal4);
  }
};
main_testPuzzle_nofib_transfer_concat_append$append = function main_testPuzzle_nofib_transfer_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPuzzle_nofib_transfer_concat_append$append(arg$Cons$1$, ys);
    return main_testPuzzle_nofib_transfer_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24) => {
    return main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker2(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24)
  }
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker2 = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24) {
  let scrut;
  scrut = puzzle1[itemEq$accessorSymbol](a, b);
  if (scrut === true) {
    let Cons_tail;
    Cons_tail = main_testPuzzle_nofib_transfer$ls_Nil();
    return main_testPuzzle_nofib_transfer$ls_Cons$worker2(a, Cons_tail, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24)
  }
  {
    let inlinedVal, Cons_tail;
    if (a instanceof puzzle1.Bono.class) {
      inlinedVal = puzzle1.Edge;
    } else if (a instanceof puzzle1.Edge.class) {
      inlinedVal = puzzle1.Larry;
    } else if (a instanceof puzzle1.Larry.class) {
      inlinedVal = puzzle1.Adam;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    Cons_tail = main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(inlinedVal, b);
    return main_testPuzzle_nofib_transfer$ls_Cons$worker2(a, Cons_tail, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19, eta$0$20, eta$0$21, eta$0$22, eta$0$23, eta$0$24);
  }
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1 = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13) => {
    return main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker1(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13)
  }
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker1 = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13) {
  let scrut;
  scrut = puzzle1[itemEq$accessorSymbol](a, b);
  if (scrut === true) {
    let Cons_tail;
    Cons_tail = main_testPuzzle_nofib_transfer$ls_Nil1();
    return main_testPuzzle_nofib_transfer$ls_Cons$worker1(a, Cons_tail, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13)
  }
  {
    let inlinedVal, Cons_tail;
    if (a instanceof puzzle1.Bono.class) {
      inlinedVal = puzzle1.Edge;
    } else if (a instanceof puzzle1.Edge.class) {
      inlinedVal = puzzle1.Larry;
    } else if (a instanceof puzzle1.Larry.class) {
      inlinedVal = puzzle1.Adam;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    Cons_tail = main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo1(inlinedVal, b);
    return main_testPuzzle_nofib_transfer$ls_Cons$worker1(a, Cons_tail, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13);
  }
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2 = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo(a, b) {
  return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18) => {
    return main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(a, b, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18)
  }
};
main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker = function main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker(a, b, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18) {
  let scrut;
  scrut = puzzle1[itemEq$accessorSymbol](a, b);
  if (scrut === true) {
    let Cons_tail;
    Cons_tail = main_testPuzzle_nofib_transfer$ls_Nil2();
    return main_testPuzzle_nofib_transfer$ls_Cons$worker(a, Cons_tail, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18)
  }
  {
    let inlinedVal, Cons_tail;
    if (a instanceof puzzle1.Bono.class) {
      inlinedVal = puzzle1.Edge;
    } else if (a instanceof puzzle1.Edge.class) {
      inlinedVal = puzzle1.Larry;
    } else if (a instanceof puzzle1.Larry.class) {
      inlinedVal = puzzle1.Adam;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    Cons_tail = main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo2(inlinedVal, b);
    return main_testPuzzle_nofib_transfer$ls_Cons$worker(a, Cons_tail, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$12, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18);
  }
};
main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons = function main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      let l$_;
      l$_ = main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, fv_l$_);
      return Cons_tail(l$_)(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt = function main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt() {
  return (fv_l$_) => {
    return (eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13) => {
      return fv_l$_(eta$0$0, eta$0$5, eta$0$7, eta$0$8, eta$0$9, eta$0$12, eta$0$13)
    }
  }
};
main_testPuzzle_nofib_writeSolutions$solutions_Nil = function main_testPuzzle_nofib_writeSolutions$solutions_Nil() {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return fv_s
  }
};
main_testPuzzle_nofib_writeSolutions$solutions_Cons = function main_testPuzzle_nofib_writeSolutions$solutions_Cons(Cons_head, Cons_tail) {
  return (fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker = function main_testPuzzle_nofib_writeSolutions$solutions_Cons$worker(Cons_head, Cons_tail, fv_s, fv_tmp, fv_count, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let inlinedVal, inlinedVal1, inlinedVal2, baseCall, lambda$here;
  fv_tmp = NofibPrelude.nofibStringToList("Solution ");
  inlinedVal = fv_count + "";
  fv_tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
  fv_tmp2 = fv_count + 1;
  inlinedVal1 = Cons_tail(fv_s, undefined, fv_tmp2, undefined, undefined, undefined, undefined);
  if (Cons_head instanceof NofibPrelude.Nil.class) {
    inlinedVal2 = inlinedVal1;
  } else {
    lambda$here = main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle1, Cons_head);
    baseCall = puzzle1[foldr$accessorSymbol](lambda$here, lambda1, Cons_head);
    inlinedVal2 = runtime.safeCall(baseCall(inlinedVal1));
  }
  fv_tmp3 = NofibPrelude.Cons("\n", inlinedVal2);
  fv_tmp4 = puzzle1[append$accessorSymbol](fv_tmp1, fv_tmp3);
  return puzzle1[append$accessorSymbol](fv_tmp, fv_tmp4)
};
main_testPuzzle_nofib_transfer_updateState$s_State = function main_testPuzzle_nofib_transfer_updateState$s_State(State_b, State_e, State_l, State_a) {
  return (fv_i, fv_pos) => {
    return main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos)
  }
};
main_testPuzzle_nofib_transfer_updateState$s_State$worker = function main_testPuzzle_nofib_transfer_updateState$s_State$worker(State_b, State_e, State_l, State_a, fv_i, fv_pos) {
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
main_testPuzzle_nofib_transfer_append$xs_Cons = function main_testPuzzle_nofib_transfer_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testPuzzle_nofib_transfer$ls_Cons$worker2 = function main_testPuzzle_nofib_transfer$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_j, fv_tmp, fv_puzzle, fv_i, fv_dest, fv_scrut, fv_location, fv_tmp1, fv_scrut1, fv_tmp2, fv_newLocation, fv_newDest, fv_scrut2, fv_history, fv_tmp3, fv_newTime, fv_countdown, fv_tmp4, fv_source, fv_newHistory, fv_tmp5, fv_xs) {
  let inlinedVal;
  if (fv_i instanceof fv_puzzle.Bono.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.b;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (fv_i instanceof fv_puzzle.Edge.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.e;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (fv_i instanceof fv_puzzle.Larry.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.l;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (fv_i instanceof fv_puzzle.Adam.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.a;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  fv_scrut = fv_puzzle[bankEq$accessorSymbol](inlinedVal, fv_location);
  if (fv_scrut === true) {
    let inlinedVal1;
    if (Cons_head instanceof fv_puzzle.Bono.class) {
      let inlinedVal2;
      if (fv_dest instanceof fv_puzzle.State.class) {
        inlinedVal2 = fv_dest.b;
        inlinedVal1 = inlinedVal2;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (Cons_head instanceof fv_puzzle.Edge.class) {
      let inlinedVal2;
      if (fv_dest instanceof fv_puzzle.State.class) {
        inlinedVal2 = fv_dest.e;
        inlinedVal1 = inlinedVal2;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (Cons_head instanceof fv_puzzle.Larry.class) {
      let inlinedVal2;
      if (fv_dest instanceof fv_puzzle.State.class) {
        inlinedVal2 = fv_dest.l;
        inlinedVal1 = inlinedVal2;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (Cons_head instanceof fv_puzzle.Adam.class) {
      let inlinedVal2;
      if (fv_dest instanceof fv_puzzle.State.class) {
        inlinedVal2 = fv_dest.a;
        inlinedVal1 = inlinedVal2;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    fv_scrut1 = fv_puzzle[bankEq$accessorSymbol](inlinedVal1, fv_location);
    if (fv_scrut1 === true) {
      let inlinedVal2, inlinedVal3, inlinedVal4, lambda$here, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$;
      if (fv_dest instanceof puzzle1.State.class) {
        arg$State$0$ = fv_dest.b;
        arg$State$1$ = fv_dest.e;
        arg$State$2$ = fv_dest.l;
        arg$State$3$ = fv_dest.a;
        if (fv_i instanceof puzzle1.Bono.class) {
          inlinedVal2 = main_testPuzzle_nofib_transfer_updateState$s_State(fv_newLocation, arg$State$1$, arg$State$2$, arg$State$3$);
        } else if (fv_i instanceof puzzle1.Edge.class) {
          inlinedVal2 = main_testPuzzle_nofib_transfer_updateState$s_State(arg$State$0$, fv_newLocation, arg$State$2$, arg$State$3$);
        } else if (fv_i instanceof puzzle1.Larry.class) {
          inlinedVal2 = main_testPuzzle_nofib_transfer_updateState$s_State(arg$State$0$, arg$State$1$, fv_newLocation, arg$State$3$);
        } else if (fv_i instanceof puzzle1.Adam.class) {
          inlinedVal2 = main_testPuzzle_nofib_transfer_updateState$s_State(arg$State$0$, arg$State$1$, arg$State$2$, fv_newLocation);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal3 = inlinedVal2(Cons_head, fv_newLocation);
        lambda$here = lambda$(fv_puzzle, inlinedVal3);
        inlinedVal4 = fv_puzzle[all$accessorSymbol](lambda$here, fv_history);
        if (inlinedVal4 === true) {
          let inlinedVal5, inlinedVal6;
          if (fv_i instanceof fv_puzzle.Bono.class) {
            inlinedVal5 = 10;
          } else if (fv_i instanceof fv_puzzle.Edge.class) {
            inlinedVal5 = 5;
          } else if (fv_i instanceof fv_puzzle.Larry.class) {
            inlinedVal5 = 2;
          } else if (fv_i instanceof fv_puzzle.Adam.class) {
            inlinedVal5 = 1;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          fv_newTime = fv_countdown + inlinedVal5;
          fv_tmp4 = main_testPuzzle_nofib_transfer$transfer(fv_source, inlinedVal3, fv_newLocation, fv_newTime, fv_newHistory);
          inlinedVal6 = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_puzzle, fv_i, fv_dest, undefined, fv_location, undefined, undefined, undefined, fv_newLocation, undefined, undefined, fv_history, undefined, undefined, fv_countdown, undefined, fv_source, fv_newHistory, undefined, fv_xs);
          return main_testPuzzle_nofib_transfer_concat$ls_Cons(fv_tmp4, inlinedVal6)
        }
        return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_puzzle, fv_i, fv_dest, undefined, fv_location, undefined, undefined, undefined, fv_newLocation, undefined, undefined, fv_history, undefined, undefined, fv_countdown, undefined, fv_source, fv_newHistory, undefined, fv_xs);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_puzzle, fv_i, fv_dest, undefined, fv_location, undefined, undefined, undefined, fv_newLocation, undefined, undefined, fv_history, undefined, undefined, fv_countdown, undefined, fv_source, fv_newHistory, undefined, fv_xs);
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_puzzle, fv_i, fv_dest, undefined, fv_location, undefined, undefined, undefined, fv_newLocation, undefined, undefined, fv_history, undefined, undefined, fv_countdown, undefined, fv_source, fv_newHistory, undefined, fv_xs);
};
main_testPuzzle_nofib_transfer$ls_Nil = function main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_j, fv_tmp, fv_puzzle, fv_i, fv_dest, fv_scrut, fv_location, fv_tmp1, fv_scrut1, fv_tmp2, fv_newLocation, fv_newDest, fv_scrut2, fv_history, fv_tmp3, fv_newTime, fv_countdown, fv_tmp4, fv_source, fv_newHistory, fv_tmp5, fv_xs) => {
    return fv_xs(undefined, undefined, undefined, undefined, undefined, fv_puzzle, undefined, fv_source, fv_dest, fv_location, fv_countdown, fv_history, fv_newHistory, fv_newLocation)
  }
};
main_testPuzzle_nofib_transfer$ls_Cons$worker1 = function main_testPuzzle_nofib_transfer$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_i, fv_tmp, fv_puzzle, fv_tmp1, fv_source, fv_dest, fv_location, fv_countdown, fv_history, fv_newHistory, fv_newLocation) {
  let inlinedVal, b;
  if (Cons_head instanceof fv_puzzle.Bono.class) {
    inlinedVal = fv_puzzle.Edge;
  } else if (Cons_head instanceof fv_puzzle.Edge.class) {
    inlinedVal = fv_puzzle.Larry;
  } else if (Cons_head instanceof fv_puzzle.Larry.class) {
    inlinedVal = fv_puzzle.Adam;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  b = fv_puzzle.Adam;
  return main_testPuzzle_nofib_transfer_itemFromTo$itemFromTo$worker2(inlinedVal, b, undefined, undefined, undefined, undefined, undefined, fv_puzzle, Cons_head, fv_dest, undefined, fv_location, undefined, undefined, undefined, fv_newLocation, undefined, undefined, fv_history, undefined, undefined, fv_countdown, undefined, fv_source, fv_newHistory, undefined, Cons_tail)
};
main_testPuzzle_nofib_transfer$ls_Nil1 = function main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_i, fv_tmp, fv_puzzle, fv_tmp1, fv_source, fv_dest, fv_location, fv_countdown, fv_history, fv_newHistory, fv_newLocation) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4) => {
      return NofibPrelude.Nil
    }
  }
};
main_testPuzzle_nofib_transfer_concat$ls_Cons = function main_testPuzzle_nofib_transfer_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return puzzle1[append$accessorSymbol](Cons_head, inlinedVal)
  }
};
main_testPuzzle_nofib_transfer$ls_Cons$worker = function main_testPuzzle_nofib_transfer$ls_Cons$worker(Cons_head, Cons_tail, fv_puzzle, fv_dest, fv_scrut, fv_location, fv_newDest, fv_newLocation, fv_history, fv_newTime, fv_countdown, fv_tmp, fv_source, fv_newHistory) {
  let inlinedVal;
  if (Cons_head instanceof fv_puzzle.Bono.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.b;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (Cons_head instanceof fv_puzzle.Edge.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.e;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (Cons_head instanceof fv_puzzle.Larry.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.l;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (Cons_head instanceof fv_puzzle.Adam.class) {
    let inlinedVal1;
    if (fv_dest instanceof fv_puzzle.State.class) {
      inlinedVal1 = fv_dest.a;
      inlinedVal = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  fv_scrut = fv_puzzle[bankEq$accessorSymbol](inlinedVal, fv_location);
  if (fv_scrut === true) {
    let inlinedVal1, lambda$here;
    fv_newDest = fv_puzzle[updateState$accessorSymbol](fv_dest, Cons_head, fv_newLocation);
    lambda$here = lambda$(fv_puzzle, fv_newDest);
    inlinedVal1 = fv_puzzle[all$accessorSymbol](lambda$here, fv_history);
    if (inlinedVal1 === true) {
      let inlinedVal2, inlinedVal3;
      if (Cons_head instanceof fv_puzzle.Bono.class) {
        inlinedVal2 = 10;
      } else if (Cons_head instanceof fv_puzzle.Edge.class) {
        inlinedVal2 = 5;
      } else if (Cons_head instanceof fv_puzzle.Larry.class) {
        inlinedVal2 = 2;
      } else if (Cons_head instanceof fv_puzzle.Adam.class) {
        inlinedVal2 = 1;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      fv_newTime = fv_countdown + inlinedVal2;
      fv_tmp = main_testPuzzle_nofib_transfer$transfer(fv_source, fv_newDest, fv_newLocation, fv_newTime, fv_newHistory);
      inlinedVal3 = Cons_tail(fv_puzzle, fv_dest, undefined, fv_location, undefined, fv_newLocation, fv_history, undefined, fv_countdown, undefined, fv_source, fv_newHistory);
      return main_testPuzzle_nofib_transfer_concat$ls_Cons1(fv_tmp, inlinedVal3)
    }
    return Cons_tail(fv_puzzle, fv_dest, undefined, fv_location, undefined, fv_newLocation, fv_history, undefined, fv_countdown, undefined, fv_source, fv_newHistory);
  }
  return Cons_tail(fv_puzzle, fv_dest, undefined, fv_location, undefined, fv_newLocation, fv_history, undefined, fv_countdown, undefined, fv_source, fv_newHistory);
};
main_testPuzzle_nofib_transfer_concat$ls_Cons1 = function main_testPuzzle_nofib_transfer_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_testPuzzle_nofib_transfer_concat_append$append(Cons_head, inlinedVal)
  }
};
main_testPuzzle_nofib_transfer$ls_Nil2 = function main_testPuzzle_nofib_transfer$ls_Nil() {
  return (fv_puzzle, fv_dest, fv_scrut, fv_location, fv_newDest, fv_newLocation, fv_history, fv_newTime, fv_countdown, fv_tmp, fv_source, fv_newHistory) => {
    return () => {
      return (eta$1$5) => {
        return eta$1$5
      }
    }
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
    let solutions;
    if (true === true) {
      let inlinedVal, s, inlinedVal1, arg$Cons$0$, arg$Cons$1$, tmp;
      solutions = main_testPuzzle_nofib_transfer$transfer(puzzle1.initialState, puzzle1.finalState, puzzle1.RightBank, 0, NofibPrelude.Nil);
      if (solutions instanceof NofibPrelude.Nil.class) {
        inlinedVal = main_testPuzzle_nofib_writeSolutions$solutions_Nil();
      } else if (solutions instanceof NofibPrelude.Cons.class) {
        let Cons_tail, puzzle2, minSoFar, mins, ls, inlinedVal2, l$_, inlinedVal3;
        arg$Cons$0$ = solutions.head;
        arg$Cons$1$ = solutions.tail;
        tmp = puzzle1.#totalTime(arg$Cons$0$);
        Cons_tail = main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt();
        puzzle2 = puzzle1;
        minSoFar = tmp;
        mins = main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(arg$Cons$0$, Cons_tail);
        ls = arg$Cons$1$;
        inlinedLbl: {
          loopLabel: while (true) {
            let total, scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1;
            if (ls instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = mins;
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
                mins = main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(arg$Cons$0$1, mins);
                ls = arg$Cons$1$1;
                continue loopLabel
              }
              {
                let Cons_tail1;
                Cons_tail1 = main_testPuzzle_nofib_minSolutions_reverse_r$l_dflt();
                minSoFar = total;
                mins = main_testPuzzle_nofib_minSolutions_reverse_r$l_Cons(arg$Cons$0$1, Cons_tail1);
                ls = arg$Cons$1$1;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        l$_ = main_testPuzzle_nofib_writeSolutions$solutions_Nil();
        inlinedVal3 = inlinedVal2(l$_);
        inlinedVal = inlinedVal3;
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
