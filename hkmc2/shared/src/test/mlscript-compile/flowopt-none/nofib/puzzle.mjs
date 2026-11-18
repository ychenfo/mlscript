const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const all$accessorSymbol = globalThis.Symbol("all");
const itemFromTo$accessorSymbol = globalThis.Symbol("itemFromTo");
const bankEq$accessorSymbol = globalThis.Symbol("bankEq");
const stateEq$accessorSymbol = globalThis.Symbol("stateEq");
const updateState$accessorSymbol = globalThis.Symbol("updateState");
const writeState$accessorSymbol = globalThis.Symbol("writeState");
const totalTime$accessorSymbol = globalThis.Symbol("totalTime");
const transfer$accessorSymbol = globalThis.Symbol("transfer");
let lscomp1, puzzle1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lscomp2_lscomp3;
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
                let inlinedVal2, lambda$here;
                tmp = param0[updateState$accessorSymbol](param2, param9, param7);
                newDest = param0[updateState$accessorSymbol](tmp, arg$Cons$0$, param7);
                lambda$here = lambda$(param0, newDest);
                inlinedVal2 = param0[all$accessorSymbol](lambda$here, param5);
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
        let inlinedVal1, lambda$here;
        newDest = puzzle2[updateState$accessorSymbol](dest, arg$Cons$0$, newLocation);
        lambda$here = lambda$(puzzle2, newDest);
        inlinedVal1 = puzzle2[all$accessorSymbol](lambda$here, history);
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
lambda$2 = (undefined, function (puzzle2, history, timestate, acc) {
  return (s) => {
    return lambda2(puzzle2, history, timestate, acc, s)
  }
});
lambda2 = (undefined, function (puzzle2, history, timestate, acc, s) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(timestate, 0);
    element1$ = runtime.Tuple.get(timestate, 1);
    tmp = NofibPrelude.nofibStringToList("Time: ");
    tmp1 = puzzle2[totalTime$accessorSymbol](history);
    tmp2 = tmp1 - element0$;
    inlinedVal = tmp2 + "";
    tmp3 = NofibPrelude.nofibStringToList(inlinedVal);
    tmp4 = runtime.safeCall(acc(s));
    tmp5 = puzzle2[writeState$accessorSymbol](element1$, tmp4);
    tmp6 = NofibPrelude.Cons("\n", tmp5);
    tmp7 = puzzle2[append$accessorSymbol](tmp3, tmp6);
    return puzzle2[append$accessorSymbol](tmp, tmp7)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (puzzle2, history) {
  return (timestate, acc) => {
    return lambda$2(puzzle2, history, timestate, acc)
  }
});
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
  static get [itemFromTo$accessorSymbol]() { return puzzle.#itemFromTo; }
  static get [bankEq$accessorSymbol]() { return puzzle.#bankEq; }
  static get [stateEq$accessorSymbol]() { return puzzle.#stateEq; }
  static get [updateState$accessorSymbol]() { return puzzle.#updateState; }
  static get [writeState$accessorSymbol]() { return puzzle.#writeState; }
  static get [totalTime$accessorSymbol]() { return puzzle.#totalTime; }
  static get [transfer$accessorSymbol]() { return puzzle.#transfer; }
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
  static #opposite(b) {
    if (b instanceof puzzle.LeftBank.class) {
      return puzzle.RightBank
    } else if (b instanceof puzzle.RightBank.class) {
      return puzzle.LeftBank
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
    let baseCall, lambda$here;
    if (history instanceof NofibPrelude.Nil.class) {
      return x
    }
    lambda$here = lambda$1(puzzle, history);
    baseCall = puzzle.#foldr(lambda$here, lambda1, history);
    return runtime.safeCall(baseCall(x));
  }
  static #writeSolutions(solutions, count, s) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (solutions instanceof NofibPrelude.Nil.class) {
      return s
    } else if (solutions instanceof NofibPrelude.Cons.class) {
      let inlinedVal;
      arg$Cons$0$ = solutions.head;
      arg$Cons$1$ = solutions.tail;
      tmp = NofibPrelude.nofibStringToList("Solution ");
      inlinedVal = count + "";
      tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
      tmp2 = count + 1;
      tmp3 = puzzle.#writeSolutions(arg$Cons$1$, tmp2, s);
      tmp4 = puzzle.#writeHistory(arg$Cons$0$, tmp3);
      tmp5 = NofibPrelude.Cons("\n", tmp4);
      tmp6 = puzzle.#append(tmp1, tmp5);
      return puzzle.#append(tmp, tmp6)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #minSolutions(history) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (history instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (history instanceof NofibPrelude.Cons.class) {
      let puzzle2, minSoFar, mins, ls, inlinedVal;
      arg$Cons$0$ = history.head;
      arg$Cons$1$ = history.tail;
      tmp = puzzle.#totalTime(arg$Cons$0$);
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
      puzzle2 = puzzle;
      minSoFar = tmp;
      mins = tmp1;
      ls = arg$Cons$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let total, scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1, tmp2, tmp3;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal = mins;
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
              tmp2 = NofibPrelude.Cons(arg$Cons$0$1, mins);
              mins = tmp2;
              ls = arg$Cons$1$1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
            minSoFar = total;
            mins = tmp3;
            ls = arg$Cons$1$1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return puzzle.#reverse(inlinedVal)
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
      moveOne = puzzle.#concat(tmp4);
      tmp5 = puzzle.#itemFromTo(puzzle.Bono, puzzle.Larry);
      inlinedVal = lscomp2_lscomp3(0, puzzle, source, dest, location, countdown, history, newHistory, newLocation, tmp5, undefined, undefined);
      moveTwo = puzzle.#concat(inlinedVal);
      return puzzle.#append(moveOne, moveTwo);
    }
  }
  static #testPuzzle_nofib(x) {
    let scrut, solutions, mins, tmp;
    tmp = puzzle.#listLen(x);
    scrut = tmp === 1;
    if (scrut === true) {
      solutions = puzzle.#transfer(puzzle.initialState, puzzle.finalState, puzzle.RightBank, 0, NofibPrelude.Nil);
      mins = puzzle.#minSolutions(solutions);
      return puzzle.#writeSolutions(mins, 1, NofibPrelude.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
export default puzzle1;
