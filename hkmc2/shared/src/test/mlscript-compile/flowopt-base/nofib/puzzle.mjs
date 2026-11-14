const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const itemFromTo$accessorSymbol = globalThis.Symbol("itemFromTo");
const bankEq$accessorSymbol = globalThis.Symbol("bankEq");
const stateEq$accessorSymbol = globalThis.Symbol("stateEq");
const updateState$accessorSymbol = globalThis.Symbol("updateState");
const writeState$accessorSymbol = globalThis.Symbol("writeState");
const totalTime$accessorSymbol = globalThis.Symbol("totalTime");
const transfer$accessorSymbol = globalThis.Symbol("transfer");
let minAcc, lscomp3, lscomp2, lscomp1, puzzle1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lscomp2_lscomp3;
lscomp2_lscomp3 = function lscomp2_lscomp3(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param8 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param8 instanceof NofibPrelude.Cons.class) {
            let receiver, inlinedVal;
            arg$Cons$0$ = param8.head;
            arg$Cons$1$ = param8.tail;
            receiver = param0;
            if (arg$Cons$0$ instanceof receiver.Bono.class) {
              inlinedVal = param0.Edge;
            } else if (arg$Cons$0$ instanceof receiver.Edge.class) {
              inlinedVal = param0.Larry;
            } else if (arg$Cons$0$ instanceof receiver.Larry.class) {
              inlinedVal = param0.Adam;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            tmp = param0[itemFromTo$accessorSymbol](inlinedVal, param0.Adam);
            param8 = arg$Cons$1$;
            param9 = arg$Cons$0$;
            param10 = tmp;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, newDest, newTime, scrut1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
          if (param10 instanceof NofibPrelude.Nil.class) {
            id = 0;
            continue loopLabel
          } else if (param10 instanceof NofibPrelude.Cons.class) {
            let receiver, inlinedVal;
            arg$Cons$0$ = param10.head;
            arg$Cons$1$ = param10.tail;
            receiver = param0;
            if (param9 instanceof receiver.Bono.class) {
              let receiver1, inlinedVal1;
              receiver1 = param0;
              if (param2 instanceof receiver1.State.class) {
                inlinedVal1 = param2.b;
                inlinedVal = inlinedVal1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param9 instanceof receiver.Edge.class) {
              let receiver1, inlinedVal1;
              receiver1 = param0;
              if (param2 instanceof receiver1.State.class) {
                inlinedVal1 = param2.e;
                inlinedVal = inlinedVal1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param9 instanceof receiver.Larry.class) {
              let receiver1, inlinedVal1;
              receiver1 = param0;
              if (param2 instanceof receiver1.State.class) {
                inlinedVal1 = param2.l;
                inlinedVal = inlinedVal1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (param9 instanceof receiver.Adam.class) {
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
              let receiver1, inlinedVal1;
              receiver1 = param0;
              if (arg$Cons$0$ instanceof receiver1.Bono.class) {
                let receiver2, inlinedVal2;
                receiver2 = param0;
                if (param2 instanceof receiver2.State.class) {
                  inlinedVal2 = param2.b;
                  inlinedVal1 = inlinedVal2;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else if (arg$Cons$0$ instanceof receiver1.Edge.class) {
                let receiver2, inlinedVal2;
                receiver2 = param0;
                if (param2 instanceof receiver2.State.class) {
                  inlinedVal2 = param2.e;
                  inlinedVal1 = inlinedVal2;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else if (arg$Cons$0$ instanceof receiver1.Larry.class) {
                let receiver2, inlinedVal2;
                receiver2 = param0;
                if (param2 instanceof receiver2.State.class) {
                  inlinedVal2 = param2.l;
                  inlinedVal1 = inlinedVal2;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else if (arg$Cons$0$ instanceof receiver1.Adam.class) {
                let receiver2, inlinedVal2;
                receiver2 = param0;
                if (param2 instanceof receiver2.State.class) {
                  inlinedVal2 = param2.a;
                  inlinedVal1 = inlinedVal2;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              scrut1 = param0[bankEq$accessorSymbol](inlinedVal1, param3);
              if (scrut1 === true) {
                let inlinedVal2;
                tmp = param0[updateState$accessorSymbol](param2, param9, param7);
                newDest = param0[updateState$accessorSymbol](tmp, arg$Cons$0$, param7);
                inlinedVal2 = NofibPrelude.all(lambda$(param0, newDest), param5);
                if (inlinedVal2 === true) {
                  let receiver2, inlinedVal3;
                  receiver2 = param0;
                  if (param9 instanceof receiver2.Bono.class) {
                    inlinedVal3 = 10;
                  } else if (param9 instanceof receiver2.Edge.class) {
                    inlinedVal3 = 5;
                  } else if (param9 instanceof receiver2.Larry.class) {
                    inlinedVal3 = 2;
                  } else if (param9 instanceof receiver2.Adam.class) {
                    inlinedVal3 = 1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  newTime = param4 + inlinedVal3;
                  tmp1 = param0[transfer$accessorSymbol](param1, newDest, param7, newTime, param6);
                  tmp2 = lscomp2_lscomp3(1, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, arg$Cons$1$);
                  return NofibPrelude.Cons(tmp1, tmp2)
                }
                param10 = arg$Cons$1$;
                id = 1;
                continue loopLabel;
              }
              param10 = arg$Cons$1$;
              id = 1;
              continue loopLabel;
            }
            param10 = arg$Cons$1$;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lscomp3 = function lscomp3(puzzle2, source, dest, location, countdown, history, newHistory, newLocation, xs, i, ls) {
  return lscomp2_lscomp3(1, puzzle2, source, dest, location, countdown, history, newHistory, newLocation, xs, i, ls)
};
lscomp1 = function lscomp1(puzzle2, source, dest, location, countdown, history, newHistory, newLocation, ls) {
  loopLabel: while (true) {
    let scrut, newDest, newTime, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let receiver, inlinedVal;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      receiver = puzzle2;
      if (arg$Cons$0$ instanceof receiver.Bono.class) {
        let receiver1, inlinedVal1;
        receiver1 = puzzle2;
        if (dest instanceof receiver1.State.class) {
          inlinedVal1 = dest.b;
          inlinedVal = inlinedVal1;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (arg$Cons$0$ instanceof receiver.Edge.class) {
        let receiver1, inlinedVal1;
        receiver1 = puzzle2;
        if (dest instanceof receiver1.State.class) {
          inlinedVal1 = dest.e;
          inlinedVal = inlinedVal1;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (arg$Cons$0$ instanceof receiver.Larry.class) {
        let receiver1, inlinedVal1;
        receiver1 = puzzle2;
        if (dest instanceof receiver1.State.class) {
          inlinedVal1 = dest.l;
          inlinedVal = inlinedVal1;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (arg$Cons$0$ instanceof receiver.Adam.class) {
        let receiver1, inlinedVal1;
        receiver1 = puzzle2;
        if (dest instanceof receiver1.State.class) {
          inlinedVal1 = dest.a;
          inlinedVal = inlinedVal1;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      scrut = puzzle2[bankEq$accessorSymbol](inlinedVal, location);
      if (scrut === true) {
        let inlinedVal1;
        newDest = puzzle2[updateState$accessorSymbol](dest, arg$Cons$0$, newLocation);
        inlinedVal1 = NofibPrelude.all(lambda$(puzzle2, newDest), history);
        if (inlinedVal1 === true) {
          let receiver1, inlinedVal2;
          receiver1 = puzzle2;
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
          newTime = countdown + inlinedVal2;
          tmp = puzzle2[transfer$accessorSymbol](source, newDest, newLocation, newTime, newHistory);
          tmp1 = lscomp1(puzzle2, source, dest, location, countdown, history, newHistory, newLocation, arg$Cons$1$);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp2 = function lscomp2(puzzle2, source, dest, location, countdown, history, newHistory, newLocation, ls) {
  return lscomp2_lscomp3(0, puzzle2, source, dest, location, countdown, history, newHistory, newLocation, ls, undefined, undefined)
};
minAcc = function minAcc(puzzle2, minSoFar, mins, ls) {
  loopLabel: while (true) {
    let total, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return mins
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      total = puzzle2[totalTime$accessorSymbol](arg$Cons$0$);
      scrut = minSoFar < total;
      if (scrut === true) {
        ls = arg$Cons$1$;
        continue loopLabel
      }
      scrut1 = minSoFar === total;
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, mins);
        mins = tmp;
        ls = arg$Cons$1$;
        continue loopLabel
      }
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
      minSoFar = total;
      mins = tmp1;
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$2 = (undefined, function (puzzle2, history, timestate, acc) {
  return (s) => {
    return lambda3(puzzle2, history, timestate, acc, s)
  }
});
lambda3 = (undefined, function (puzzle2, history, timestate, acc, s) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    let inlinedVal, inlinedVal1, s1, inlinedVal2;
    element0$ = runtime.Tuple.get(timestate, 0);
    element1$ = runtime.Tuple.get(timestate, 1);
    inlinedVal = go(NofibPrelude, "Time: ", 0);
    tmp = puzzle2[totalTime$accessorSymbol](history);
    tmp1 = tmp - element0$;
    inlinedVal1 = tmp1 + "";
    s1 = inlinedVal1;
    inlinedVal2 = go(NofibPrelude, s1, 0);
    tmp2 = runtime.safeCall(acc(s));
    tmp3 = puzzle2[writeState$accessorSymbol](element1$, tmp2);
    tmp4 = NofibPrelude.Cons("\n", tmp3);
    tmp5 = NofibPrelude.append(inlinedVal2, tmp4);
    return NofibPrelude.append(inlinedVal, tmp5)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (puzzle2, history) {
  return (timestate, acc) => {
    return lambda$2(puzzle2, history, timestate, acc)
  }
});
lambda1 = (undefined, function (puzzle2, history, timestate, acc) {
  return lambda$2(puzzle2, history, timestate, acc)
});
lambda2 = (undefined, function (x) {
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
  static get [itemFromTo$accessorSymbol]() { return puzzle.#itemFromTo; }
  static get [bankEq$accessorSymbol]() { return puzzle.#bankEq; }
  static get [stateEq$accessorSymbol]() { return puzzle.#stateEq; }
  static get [updateState$accessorSymbol]() { return puzzle.#updateState; }
  static get [writeState$accessorSymbol]() { return puzzle.#writeState; }
  static get [totalTime$accessorSymbol]() { return puzzle.#totalTime; }
  static get [transfer$accessorSymbol]() { return puzzle.#transfer; }
  static {
    let tmp, tmp1;
    (class ItemType {
      static {
        puzzle.ItemType = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ItemType"];
    });
    (class Bono extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Bono = this;
        Object.defineProperty(this, "class", {
          value: Bono
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bono"];
    });
    (class Edge extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Edge = this;
        Object.defineProperty(this, "class", {
          value: Edge
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Edge"];
    });
    (class Larry extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Larry = this;
        Object.defineProperty(this, "class", {
          value: Larry
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Larry"];
    });
    (class Adam extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Adam = this;
        Object.defineProperty(this, "class", {
          value: Adam
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Adam"];
    });
    (class BankType {
      static {
        puzzle.BankType = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "BankType"];
    });
    (class LeftBank extends puzzle.BankType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.LeftBank = this;
        Object.defineProperty(this, "class", {
          value: LeftBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftBank"];
    });
    (class RightBank extends puzzle.BankType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.RightBank = this;
        Object.defineProperty(this, "class", {
          value: RightBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RightBank"];
    });
    puzzle.State = function State(b, e, l1, a) {
      return globalThis.Object.freeze(new State.class(b, e, l1, a));
    };
    (class State {
      static {
        puzzle.State.class = this
      }
      constructor(b, e, l1, a) {
        this.b = b;
        this.e = e;
        this.l = l1;
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
  static #isEnd(i) {
    if (i instanceof puzzle.Bono.class) {
      return false
    } else if (i instanceof puzzle.Edge.class) {
      return false
    } else if (i instanceof puzzle.Larry.class) {
      return false
    } else if (i instanceof puzzle.Adam.class) {
      return true
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
  static #position(i, s) {
    if (i instanceof puzzle.Bono.class) {
      return puzzle.#bonoPos(s)
    } else if (i instanceof puzzle.Edge.class) {
      return puzzle.#edgePos(s)
    } else if (i instanceof puzzle.Larry.class) {
      return puzzle.#larryPos(s)
    } else if (i instanceof puzzle.Adam.class) {
      return puzzle.#adamPos(s)
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
  static #opposite(b) {
    if (b instanceof puzzle.LeftBank.class) {
      return puzzle.RightBank
    } else if (b instanceof puzzle.RightBank.class) {
      return puzzle.LeftBank
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #notSeen(state, states) {
    return NofibPrelude.all(lambda$(puzzle, state), states)
  }
  static #writeItem(i, b, rest) {
    if (i instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.LeftBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "    Bono |                    |\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "         |                    | Bono\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.LeftBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "The Edge |                    |\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "         |                    | The Edge\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.LeftBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "   Larry |                    |\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "         |                    | Larry\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.LeftBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "    Adam |                    |\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "         |                    | Adam\n", 0);
        return NofibPrelude.append(inlinedVal, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #writeState(state, s) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal, inlinedVal1;
    inlinedVal = go(NofibPrelude, "----------------------------------------\n", 0);
    tmp = puzzle.#bonoPos(state);
    tmp1 = puzzle.#edgePos(state);
    tmp2 = puzzle.#larryPos(state);
    tmp3 = puzzle.#adamPos(state);
    inlinedVal1 = go(NofibPrelude, "----------------------------------------\n", 0);
    tmp4 = NofibPrelude.append(inlinedVal1, s);
    tmp5 = puzzle.#writeItem(puzzle.Adam, tmp3, tmp4);
    tmp6 = puzzle.#writeItem(puzzle.Larry, tmp2, tmp5);
    tmp7 = puzzle.#writeItem(puzzle.Edge, tmp1, tmp6);
    tmp8 = puzzle.#writeItem(puzzle.Bono, tmp, tmp7);
    return NofibPrelude.append(inlinedVal, tmp8)
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
  static #writeHistory(history, x) {
    let baseCall;
    if (history instanceof NofibPrelude.Nil.class) {
      return x
    }
    baseCall = NofibPrelude.foldr(lambda$1(puzzle, history), lambda2, history);
    return runtime.safeCall(baseCall(x));
  }
  static #writeSolutions(solutions, count, s) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (solutions instanceof NofibPrelude.Nil.class) {
      return s
    } else if (solutions instanceof NofibPrelude.Cons.class) {
      let inlinedVal, inlinedVal1, s1, inlinedVal2;
      arg$Cons$0$ = solutions.head;
      arg$Cons$1$ = solutions.tail;
      inlinedVal = go(NofibPrelude, "Solution ", 0);
      inlinedVal1 = count + "";
      s1 = inlinedVal1;
      inlinedVal2 = go(NofibPrelude, s1, 0);
      tmp = count + 1;
      tmp1 = puzzle.#writeSolutions(arg$Cons$1$, tmp, s);
      tmp2 = puzzle.#writeHistory(arg$Cons$0$, tmp1);
      tmp3 = NofibPrelude.Cons("\n", tmp2);
      tmp4 = NofibPrelude.append(inlinedVal2, tmp3);
      return NofibPrelude.append(inlinedVal, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #minSolutions(history) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (history instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (history instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = history.head;
      arg$Cons$1$ = history.tail;
      tmp = puzzle.#totalTime(arg$Cons$0$);
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
      tmp2 = minAcc(puzzle, tmp, tmp1, arg$Cons$1$);
      return r(NofibPrelude, NofibPrelude.Nil, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #u2times(i) {
    if (i instanceof puzzle.Bono.class) {
      return 10
    } else if (i instanceof puzzle.Edge.class) {
      return 5
    } else if (i instanceof puzzle.Larry.class) {
      return 2
    } else if (i instanceof puzzle.Adam.class) {
      return 1
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #transfer(source, dest, location, countdown, history) {
    let scrut, newHistory, newLocation, moveOne, moveTwo, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = puzzle.#stateEq(source, dest);
    if (scrut === true) {
      tmp = globalThis.Object.freeze([
        countdown,
        dest
      ]);
      tmp1 = NofibPrelude.Cons(tmp, history);
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    }
    {
      let inlinedVal;
      tmp2 = globalThis.Object.freeze([
        countdown,
        dest
      ]);
      newHistory = NofibPrelude.Cons(tmp2, history);
      newLocation = puzzle.#opposite(location);
      tmp3 = puzzle.#itemFromTo(puzzle.Bono, puzzle.Adam);
      tmp4 = lscomp1(puzzle, source, dest, location, countdown, history, newHistory, newLocation, tmp3);
      moveOne = NofibPrelude.concat(tmp4);
      tmp5 = puzzle.#itemFromTo(puzzle.Bono, puzzle.Larry);
      inlinedVal = lscomp2_lscomp3(0, puzzle, source, dest, location, countdown, history, newHistory, newLocation, tmp5, undefined, undefined);
      moveTwo = NofibPrelude.concat(inlinedVal);
      return NofibPrelude.append(moveOne, moveTwo);
    }
  }
  static #testPuzzle_nofib(x) {
    let scrut, solutions, mins, inlinedVal;
    inlinedVal = l(NofibPrelude, x, 0);
    scrut = inlinedVal === 1;
    if (scrut === true) {
      solutions = puzzle.#transfer(puzzle.initialState, puzzle.finalState, puzzle.RightBank, 0, NofibPrelude.Nil);
      mins = puzzle.#minSolutions(solutions);
      return puzzle.#writeSolutions(mins, 1, NofibPrelude.Nil)
    }
    throw runtime.safeCall(globalThis.Error("puzzle expects exactly one argument"));
  }
  static main() {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(2, NofibPrelude.Nil);
    tmp1 = puzzle.#testPuzzle_nofib(tmp);
    return NofibPrelude.nofibListToString(tmp1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "puzzle"];
});
export { minAcc as _$_modulePrivate_$_minAcc };
export { lscomp3 as _$_modulePrivate_$_lscomp3 };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { puzzle1 as _$_modulePrivate_$_puzzle };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lscomp2_lscomp3 as _$_modulePrivate_$_lscomp2_lscomp3 };
export default puzzle1;
