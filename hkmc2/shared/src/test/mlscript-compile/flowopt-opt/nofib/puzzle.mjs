const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const concat$accessorSymbol = globalThis.Symbol("concat");
const all$accessorSymbol = globalThis.Symbol("all");
const itemFromTo$accessorSymbol = globalThis.Symbol("itemFromTo");
const bankEq$accessorSymbol = globalThis.Symbol("bankEq");
const stateEq$accessorSymbol = globalThis.Symbol("stateEq");
const updateState$accessorSymbol = globalThis.Symbol("updateState");
const writeState$accessorSymbol = globalThis.Symbol("writeState");
let puzzle1, lambda, main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr, main_testPuzzle_nofib_writeSolutions$writeSolutions, main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$, main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda$_lambda$lambda, main_testPuzzle_nofib_transfer_lambda$_lambda$lambda, main_testPuzzle_nofib_transfer_lambda$$lambda$, main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr$worker, main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1;
main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1 = function main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  switch (id) {
    case 0:
      loopLabel: while (true) {
        switch (param0) {
          case 0:
            {
              let arg$Cons$0$, arg$Cons$1$, tmp;
              if (param9 instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Nil
              } else if (param9 instanceof NofibPrelude.Cons.class) {
                let receiver, inlinedVal;
                arg$Cons$0$ = param9.head;
                arg$Cons$1$ = param9.tail;
                receiver = param1;
                if (arg$Cons$0$ instanceof receiver.Bono.class) {
                  inlinedVal = param1.Edge;
                } else if (arg$Cons$0$ instanceof receiver.Edge.class) {
                  inlinedVal = param1.Larry;
                } else if (arg$Cons$0$ instanceof receiver.Larry.class) {
                  inlinedVal = param1.Adam;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                tmp = param1[itemFromTo$accessorSymbol](inlinedVal, param1.Adam);
                param9 = arg$Cons$1$;
                param10 = arg$Cons$0$;
                param11 = tmp;
                param0 = 1;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          case 1:
            {
              let scrut, newDest, newTime, scrut1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
              if (param11 instanceof NofibPrelude.Nil.class) {
                param0 = 0;
                continue loopLabel
              } else if (param11 instanceof NofibPrelude.Cons.class) {
                let receiver, inlinedVal;
                arg$Cons$0$ = param11.head;
                arg$Cons$1$ = param11.tail;
                receiver = param1;
                if (param10 instanceof receiver.Bono.class) {
                  let receiver1, inlinedVal1;
                  receiver1 = param1;
                  if (param3 instanceof receiver1.State.class) {
                    inlinedVal1 = param3.b;
                    inlinedVal = inlinedVal1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else if (param10 instanceof receiver.Edge.class) {
                  let receiver1, inlinedVal1;
                  receiver1 = param1;
                  if (param3 instanceof receiver1.State.class) {
                    inlinedVal1 = param3.e;
                    inlinedVal = inlinedVal1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else if (param10 instanceof receiver.Larry.class) {
                  let receiver1, inlinedVal1;
                  receiver1 = param1;
                  if (param3 instanceof receiver1.State.class) {
                    inlinedVal1 = param3.l;
                    inlinedVal = inlinedVal1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else if (param10 instanceof receiver.Adam.class) {
                  let receiver1, inlinedVal1;
                  receiver1 = param1;
                  if (param3 instanceof receiver1.State.class) {
                    inlinedVal1 = param3.a;
                    inlinedVal = inlinedVal1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                scrut = param1[bankEq$accessorSymbol](inlinedVal, param4);
                if (scrut === true) {
                  let receiver1, inlinedVal1;
                  receiver1 = param1;
                  if (arg$Cons$0$ instanceof receiver1.Bono.class) {
                    let receiver2, inlinedVal2;
                    receiver2 = param1;
                    if (param3 instanceof receiver2.State.class) {
                      inlinedVal2 = param3.b;
                      inlinedVal1 = inlinedVal2;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else if (arg$Cons$0$ instanceof receiver1.Edge.class) {
                    let receiver2, inlinedVal2;
                    receiver2 = param1;
                    if (param3 instanceof receiver2.State.class) {
                      inlinedVal2 = param3.e;
                      inlinedVal1 = inlinedVal2;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else if (arg$Cons$0$ instanceof receiver1.Larry.class) {
                    let receiver2, inlinedVal2;
                    receiver2 = param1;
                    if (param3 instanceof receiver2.State.class) {
                      inlinedVal2 = param3.l;
                      inlinedVal1 = inlinedVal2;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else if (arg$Cons$0$ instanceof receiver1.Adam.class) {
                    let receiver2, inlinedVal2;
                    receiver2 = param1;
                    if (param3 instanceof receiver2.State.class) {
                      inlinedVal2 = param3.a;
                      inlinedVal1 = inlinedVal2;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  scrut1 = param1[bankEq$accessorSymbol](inlinedVal1, param4);
                  if (scrut1 === true) {
                    let inlinedVal2, lambda$here;
                    tmp = param1[updateState$accessorSymbol](param3, param10, param8);
                    newDest = param1[updateState$accessorSymbol](tmp, arg$Cons$0$, param8);
                    lambda$here = main_testPuzzle_nofib_transfer_lambda$$lambda$(param1, newDest);
                    inlinedVal2 = param1[all$accessorSymbol](lambda$here, param6);
                    if (inlinedVal2 === true) {
                      let receiver2, inlinedVal3;
                      receiver2 = param1;
                      if (param10 instanceof receiver2.Bono.class) {
                        inlinedVal3 = 10;
                      } else if (param10 instanceof receiver2.Edge.class) {
                        inlinedVal3 = 5;
                      } else if (param10 instanceof receiver2.Larry.class) {
                        inlinedVal3 = 2;
                      } else if (param10 instanceof receiver2.Adam.class) {
                        inlinedVal3 = 1;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      newTime = param5 + inlinedVal3;
                      tmp1 = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(1, param2, newDest, param8, newTime, param7, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                      tmp2 = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(0, 1, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, arg$Cons$1$);
                      return NofibPrelude.Cons(tmp1, tmp2)
                    }
                    param11 = arg$Cons$1$;
                    param0 = 1;
                    continue loopLabel;
                  }
                  param11 = arg$Cons$1$;
                  param0 = 1;
                  continue loopLabel;
                }
                param11 = arg$Cons$1$;
                param0 = 1;
                continue loopLabel;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
        }
      }
    case 1:
      {
        let scrut, newHistory, moveOne, moveTwo, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
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
          let inlinedVal, inlinedVal1;
          tmp2 = globalThis.Object.freeze([
            param3,
            param1
          ]);
          newHistory = NofibPrelude.Cons(tmp2, param4);
          if (param2 instanceof puzzle1.LeftBank.class) {
            inlinedVal1 = puzzle1.RightBank;
          } else if (param2 instanceof puzzle1.RightBank.class) {
            inlinedVal1 = puzzle1.LeftBank;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          tmp3 = puzzle1[itemFromTo$accessorSymbol](puzzle1.Bono, puzzle1.Adam);
          tmp4 = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(2, puzzle1, param0, param1, param2, param3, param4, newHistory, inlinedVal1, tmp3, undefined, undefined, undefined);
          moveOne = puzzle1[concat$accessorSymbol](tmp4);
          tmp5 = puzzle1[itemFromTo$accessorSymbol](puzzle1.Bono, puzzle1.Larry);
          inlinedVal = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(0, 0, puzzle1, param0, param1, param2, param3, param4, newHistory, inlinedVal1, tmp5, undefined, undefined);
          moveTwo = puzzle1[concat$accessorSymbol](inlinedVal);
          return puzzle1[append$accessorSymbol](moveOne, moveTwo);
        }
      }
    case 2:
      loopLabel1: while (true) {
        let scrut, newDest, newTime, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
        if (param8 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (param8 instanceof NofibPrelude.Cons.class) {
          let receiver, inlinedVal;
          arg$Cons$0$ = param8.head;
          arg$Cons$1$ = param8.tail;
          receiver = param0;
          if (arg$Cons$0$ instanceof receiver.Bono.class) {
            let receiver1, inlinedVal1;
            receiver1 = param0;
            if (param2 instanceof receiver1.State.class) {
              inlinedVal1 = param2.b;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (arg$Cons$0$ instanceof receiver.Edge.class) {
            let receiver1, inlinedVal1;
            receiver1 = param0;
            if (param2 instanceof receiver1.State.class) {
              inlinedVal1 = param2.e;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (arg$Cons$0$ instanceof receiver.Larry.class) {
            let receiver1, inlinedVal1;
            receiver1 = param0;
            if (param2 instanceof receiver1.State.class) {
              inlinedVal1 = param2.l;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (arg$Cons$0$ instanceof receiver.Adam.class) {
            let receiver1, inlinedVal1;
            receiver1 = param0;
            if (param2 instanceof receiver1.State.class) {
              inlinedVal1 = param2.a;
              inlinedVal = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          scrut = param0[bankEq$accessorSymbol](inlinedVal, param3);
          if (scrut === true) {
            let inlinedVal1, lambda$here;
            newDest = param0[updateState$accessorSymbol](param2, arg$Cons$0$, param7);
            lambda$here = main_testPuzzle_nofib_transfer_lambda$$lambda$(param0, newDest);
            inlinedVal1 = param0[all$accessorSymbol](lambda$here, param5);
            if (inlinedVal1 === true) {
              let receiver1, inlinedVal2;
              receiver1 = param0;
              if (arg$Cons$0$ instanceof receiver1.Bono.class) {
                inlinedVal2 = 10;
              } else if (arg$Cons$0$ instanceof receiver1.Edge.class) {
                inlinedVal2 = 5;
              } else if (arg$Cons$0$ instanceof receiver1.Larry.class) {
                inlinedVal2 = 2;
              } else if (arg$Cons$0$ instanceof receiver1.Adam.class) {
                inlinedVal2 = 1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              newTime = param4 + inlinedVal2;
              tmp = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(1, param1, newDest, param7, newTime, param6, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              tmp1 = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(2, param0, param1, param2, param3, param4, param5, param6, param7, arg$Cons$1$, undefined, undefined, undefined);
              return NofibPrelude.Cons(tmp, tmp1)
            }
            param8 = arg$Cons$1$;
            continue loopLabel1;
          }
          param8 = arg$Cons$1$;
          continue loopLabel1;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
  }
};
main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr = function main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr(f, z, xs) {
  return (eta$0$0) => {
    return main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr$worker(f, z, xs, eta$0$0)
  }
};
main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr$worker = function main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr$worker(f, z, xs, eta$0$0) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return z(eta$0$0)
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr(f, z, arg$Cons$1$);
    return runtime.safeCall(f(arg$Cons$0$, tmp)(eta$0$0))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPuzzle_nofib_writeSolutions$writeSolutions = function main_testPuzzle_nofib_writeSolutions$writeSolutions(solutions, count, s) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (solutions instanceof NofibPrelude.Nil.class) {
    return s
  } else if (solutions instanceof NofibPrelude.Cons.class) {
    let inlinedVal, inlinedVal1;
    arg$Cons$0$ = solutions.head;
    arg$Cons$1$ = solutions.tail;
    tmp = NofibPrelude.nofibStringToList("Solution ");
    inlinedVal = count + "";
    tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
    tmp2 = count + 1;
    tmp3 = main_testPuzzle_nofib_writeSolutions$writeSolutions(arg$Cons$1$, tmp2, s);
    if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
      inlinedVal1 = tmp3;
    } else {
      let f, inlinedVal2;
      f = main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle1, arg$Cons$0$);
      inlinedVal2 = main_testPuzzle_nofib_writeSolutions_writeHistory_foldr$foldr$worker(f, lambda, arg$Cons$0$, tmp3);
      inlinedVal1 = inlinedVal2;
    }
    tmp4 = NofibPrelude.Cons("\n", inlinedVal1);
    tmp5 = puzzle1[append$accessorSymbol](tmp1, tmp4);
    return puzzle1[append$accessorSymbol](tmp, tmp5)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$ = function main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$$lambda$(puzzle2, history) {
  return (timestate, acc) => {
    return (eta$0$0) => {
      return main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda$_lambda$lambda(puzzle2, history, timestate, acc, eta$0$0)
    }
  }
};
main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda$_lambda$lambda = function main_testPuzzle_nofib_writeSolutions_writeHistory_lambda$_lambda$_lambda$lambda(puzzle2, history, timestate, acc, s) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    let inlinedVal, inlinedVal1, arg$Cons$0$;
    element0$ = runtime.Tuple.get(timestate, 0);
    element1$ = runtime.Tuple.get(timestate, 1);
    tmp = NofibPrelude.nofibStringToList("Time: ");
    if (history instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = history.head;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        inlinedVal1 = runtime.Tuple.get(arg$Cons$0$, 0);
        tmp1 = inlinedVal1 - element0$;
        inlinedVal = tmp1 + "";
        tmp2 = NofibPrelude.nofibStringToList(inlinedVal);
        tmp3 = runtime.safeCall(acc(s));
        tmp4 = puzzle2[writeState$accessorSymbol](element1$, tmp3);
        tmp5 = NofibPrelude.Cons("\n", tmp4);
        tmp6 = puzzle2[append$accessorSymbol](tmp2, tmp5);
        return puzzle2[append$accessorSymbol](tmp, tmp6)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPuzzle_nofib_transfer_lambda$_lambda$lambda = function main_testPuzzle_nofib_transfer_lambda$_lambda$lambda(puzzle2, state, caseScrut) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = puzzle2[stateEq$accessorSymbol](state, element1$);
    return ! tmp
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPuzzle_nofib_transfer_lambda$$lambda$ = function main_testPuzzle_nofib_transfer_lambda$$lambda$(puzzle2, state) {
  return (caseScrut) => {
    return main_testPuzzle_nofib_transfer_lambda$_lambda$lambda(puzzle2, state, caseScrut)
  }
};
lambda = (undefined, function (x) {
  return x
});
(class puzzle {
  static {
    puzzle1 = this
  }
  static get [append$accessorSymbol]() { return puzzle.#append; }
  static get [concat$accessorSymbol]() { return puzzle.#concat; }
  static get [all$accessorSymbol]() { return puzzle.#all; }
  static get [itemFromTo$accessorSymbol]() { return puzzle.#itemFromTo; }
  static get [bankEq$accessorSymbol]() { return puzzle.#bankEq; }
  static get [stateEq$accessorSymbol]() { return puzzle.#stateEq; }
  static get [updateState$accessorSymbol]() { return puzzle.#updateState; }
  static get [writeState$accessorSymbol]() { return puzzle.#writeState; }
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
      tmp = puzzle.#append(arg$Cons$1$, ys);
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
      tmp = puzzle.#concat(arg$Cons$1$);
      return puzzle.#append(arg$Cons$0$, tmp)
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
  static #succItem(i) {
    if (i instanceof puzzle.Bono.class) {
      return puzzle.Edge
    } else if (i instanceof puzzle.Edge.class) {
      return puzzle.Larry
    } else if (i instanceof puzzle.Larry.class) {
      return puzzle.Adam
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #itemFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = puzzle.#itemEq(a, b);
    if (scrut === true) {
      return NofibPrelude.Cons(a, NofibPrelude.Nil)
    }
    tmp = puzzle.#succItem(a);
    tmp1 = puzzle.#itemFromTo(tmp, b);
    return NofibPrelude.Cons(a, tmp1);
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
  static #bonoPos(s) {
    if (s instanceof puzzle.State.class) {
      return s.b
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #edgePos(s) {
    if (s instanceof puzzle.State.class) {
      return s.e
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #larryPos(s) {
    if (s instanceof puzzle.State.class) {
      return s.l
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #adamPos(s) {
    if (s instanceof puzzle.State.class) {
      return s.a
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
  static #writeItem(i, b, rest) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (i instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp = NofibPrelude.nofibStringToList("    Bono |                    |\n");
        return puzzle.#append(tmp, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp1 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
        return puzzle.#append(tmp1, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp2 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return puzzle.#append(tmp2, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp3 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return puzzle.#append(tmp3, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp4 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return puzzle.#append(tmp4, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp5 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return puzzle.#append(tmp5, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp6 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return puzzle.#append(tmp6, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp7 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return puzzle.#append(tmp7, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #writeState(state, s) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp1 = puzzle.#bonoPos(state);
    tmp2 = puzzle.#edgePos(state);
    tmp3 = puzzle.#larryPos(state);
    tmp4 = puzzle.#adamPos(state);
    tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp6 = puzzle.#append(tmp5, s);
    tmp7 = puzzle.#writeItem(puzzle.Adam, tmp4, tmp6);
    tmp8 = puzzle.#writeItem(puzzle.Larry, tmp3, tmp7);
    tmp9 = puzzle.#writeItem(puzzle.Edge, tmp2, tmp8);
    tmp10 = puzzle.#writeItem(puzzle.Bono, tmp1, tmp9);
    return puzzle.#append(tmp, tmp10)
  }
  static main() {
    let tmp, inlinedVal, scrut, tmp1;
    tmp = NofibPrelude.Cons(undefined, NofibPrelude.Nil);
    tmp1 = puzzle1.#listLen(tmp);
    scrut = tmp1 === 1;
    if (scrut === true) {
      let inlinedVal1, arg$Cons$0$, arg$Cons$1$, tmp2, source, dest, location, history, inlinedVal2;
      source = puzzle1.initialState;
      dest = puzzle1.finalState;
      location = puzzle1.RightBank;
      history = NofibPrelude.Nil;
      inlinedVal2 = main_testPuzzle_nofib_transfer$lscomp2_lscomp3_main_testPuzzle_nofib_transfer$transfer_main_testPuzzle_nofib_transfer$lscomp1(1, source, dest, location, 0, history, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      if (inlinedVal2 instanceof NofibPrelude.Nil.class) {
        inlinedVal1 = NofibPrelude.Nil;
      } else if (inlinedVal2 instanceof NofibPrelude.Cons.class) {
        let minSoFar, mins, ls, inlinedVal3, inlinedVal4, arg$Cons$0$1;
        arg$Cons$0$ = inlinedVal2.head;
        arg$Cons$1$ = inlinedVal2.tail;
        if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$0$.head;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$1) && arg$Cons$0$1.length === 2) {
            inlinedVal4 = runtime.Tuple.get(arg$Cons$0$1, 0);
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
            minSoFar = inlinedVal4;
            mins = tmp2;
            ls = arg$Cons$1$;
            inlinedLbl: {
              loopLabel: while (true) {
                let scrut1, scrut2, arg$Cons$0$2, arg$Cons$1$1, tmp3, tmp4;
                if (ls instanceof NofibPrelude.Nil.class) {
                  inlinedVal3 = mins;
                  break inlinedLbl
                } else if (ls instanceof NofibPrelude.Cons.class) {
                  let inlinedVal5, arg$Cons$0$3;
                  arg$Cons$0$2 = ls.head;
                  arg$Cons$1$1 = ls.tail;
                  if (arg$Cons$0$2 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$3 = arg$Cons$0$2.head;
                    if (runtime.Tuple.isArrayLike(arg$Cons$0$3) && arg$Cons$0$3.length === 2) {
                      inlinedVal5 = runtime.Tuple.get(arg$Cons$0$3, 0);
                      scrut1 = minSoFar < inlinedVal5;
                      if (scrut1 === true) {
                        ls = arg$Cons$1$1;
                        continue loopLabel
                      }
                      scrut2 = minSoFar === inlinedVal5;
                      if (scrut2 === true) {
                        tmp3 = NofibPrelude.Cons(arg$Cons$0$2, mins);
                        mins = tmp3;
                        ls = arg$Cons$1$1;
                        continue loopLabel
                      }
                      tmp4 = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
                      minSoFar = inlinedVal5;
                      mins = tmp4;
                      ls = arg$Cons$1$1;
                      continue loopLabel;
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            inlinedVal1 = puzzle1.#reverse(inlinedVal3);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      inlinedVal = main_testPuzzle_nofib_writeSolutions$writeSolutions(inlinedVal1, 1, NofibPrelude.Nil);
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "puzzle"];
});
export default puzzle1;
