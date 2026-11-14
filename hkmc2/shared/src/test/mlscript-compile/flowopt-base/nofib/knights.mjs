const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$3 as lambda$ } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$11 as lambda$1 } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$14 as lambda$2 } from "./NofibPrelude.mjs";
const intintComp$accessorSymbol = globalThis.Symbol("intintComp");
const intChessSetComp$accessorSymbol = globalThis.Symbol("intChessSetComp");
const quickSortIntChessSet$accessorSymbol = globalThis.Symbol("quickSortIntChessSet");
const addPiece$accessorSymbol = globalThis.Symbol("addPiece");
const deleteFirst$accessorSymbol = globalThis.Symbol("deleteFirst");
const lastPiece$accessorSymbol = globalThis.Symbol("lastPiece");
const move$accessorSymbol = globalThis.Symbol("move");
const canMoveTo$accessorSymbol = globalThis.Symbol("canMoveTo");
const showChessSet$accessorSymbol = globalThis.Symbol("showChessSet");
const removeFront_lz$accessorSymbol = globalThis.Symbol("removeFront_lz");
const inquireFront_lz$accessorSymbol = globalThis.Symbol("inquireFront_lz");
const depthSearch$accessorSymbol = globalThis.Symbol("depthSearch");
let go1, lscomp2, lscomp1, lscomp21, lscomp11, find, logTen, lscomp, lscomp3, lscomp4, lscomp22, lscomp12, pp, strToInt, argsOk, all_digits, knights1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Lazy(lambda15)
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            tmp = NofibPrelude.enumFromTo(1, param0);
            param1 = arg$Cons$0$;
            param2 = arg$Cons$1$;
            param3 = tmp;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param3 instanceof NofibPrelude.Nil.class) {
            param1 = param2;
            id = 0;
            continue loopLabel
          } else if (param3 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param3.head;
            arg$Cons$1$ = param3.tail;
            return NofibPrelude.Lazy(lambda$11(param0, param1, param2, arg$Cons$0$, arg$Cons$1$))
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lambda$14 = (undefined, function (knights2) {
  return (a, b) => {
    return lambda21(knights2, a, b)
  }
});
lambda21 = (undefined, function (knights2, a, b) {
  let c, inlinedVal, tmp, tmp1, tmp2;
  c = a;
  tmp = runtime.safeCall(c.codePointAt(0));
  tmp1 = tmp >= 48;
  if (tmp1 === true) {
    tmp2 = runtime.safeCall(c.codePointAt(0));
    inlinedVal = tmp2 <= 57;
    if (inlinedVal === true) {
      return b
    }
    return false;
  }
  return false;
});
lambda$13 = (undefined, function (knights2) {
  return (a, b) => {
    return lambda22(knights2, a, b)
  }
});
lambda22 = (undefined, function (knights2, a, b) {
  let inlinedVal;
  inlinedVal = NofibPrelude.foldr(lambda$14(knights2), true, a);
  if (inlinedVal === true) {
    return b
  }
  return false;
});
all_digits = function all_digits(knights2, s) {
  return NofibPrelude.foldr(lambda$14(knights2), true, s)
};
argsOk = function argsOk(knights2, ss) {
  let tmp, inlinedVal;
  inlinedVal = l(NofibPrelude, ss, 0);
  tmp = inlinedVal === 2;
  if (tmp === true) {
    return NofibPrelude.foldr(lambda$13(knights2), true, ss)
  }
  return false;
};
strToInt = function strToInt(y, xs) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
    if (xs instanceof NofibPrelude.Nil.class) {
      return y
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = 10 * y;
      tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
      tmp2 = tmp1 - 48;
      tmp3 = tmp + tmp2;
      y = tmp3;
      xs = arg$Cons$1$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
pp = function pp(knights2, xs) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let inlinedVal, inlinedVal1, s, inlinedVal2, inlinedVal3;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      inlinedVal = go(NofibPrelude, "\nKnights tour with ", 0);
      inlinedVal1 = element0$ + "";
      s = inlinedVal1;
      inlinedVal2 = go(NofibPrelude, s, 0);
      inlinedVal3 = go(NofibPrelude, " backtracking moves\n", 0);
      tmp = knights2[showChessSet$accessorSymbol](element1$);
      tmp1 = pp(knights2, arg$Cons$1$);
      tmp2 = NofibPrelude.append(tmp, tmp1);
      tmp3 = NofibPrelude.append(inlinedVal3, tmp2);
      tmp4 = NofibPrelude.append(inlinedVal2, tmp3);
      return NofibPrelude.append(inlinedVal, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda20 = (undefined, function (x) {
  return strToInt(0, x)
});
lambda$12 = (undefined, function (knights2, q, growFn, finFn) {
  return () => {
    return lambda19(knights2, q, growFn, finFn)
  }
});
lambda18 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda19 = (undefined, function (knights2, q, growFn, finFn) {
  let tmp, tmp1, tmp2;
  tmp = knights2[inquireFront_lz$accessorSymbol](q);
  tmp1 = knights2[removeFront_lz$accessorSymbol](q);
  tmp2 = knights2[depthSearch$accessorSymbol](tmp1, growFn, finFn);
  return NofibPrelude.LzCons(tmp, tmp2)
});
lambda$11 = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda16(sze, h1, t1, h2, t2)
  }
});
lambda16 = (undefined, function (sze, h1, t1, h2, t2) {
  let tmp, inlinedVal;
  tmp = globalThis.Object.freeze([
    h1,
    h2
  ]);
  inlinedVal = lscomp1_lscomp2(1, sze, h1, t1, t2);
  return NofibPrelude.LzCons(tmp, inlinedVal)
});
lambda15 = (undefined, function () {
  return NofibPrelude.LzNil
});
lscomp22 = function lscomp2(sze, h1, t1, ls) {
  return lscomp1_lscomp2(1, sze, h1, t1, ls)
};
lscomp12 = function lscomp1(sze, ls) {
  return lscomp1_lscomp2(0, sze, ls, undefined, undefined)
};
lambda17 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda12 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$10 = (undefined, function (h) {
  return () => {
    let inlinedVal;
    inlinedVal = NofibPrelude.Lazy(lambda12);
    return NofibPrelude.LzCons(h, inlinedVal)
  }
});
lambda11 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda13 = (undefined, function (h) {
  let inlinedVal;
  inlinedVal = NofibPrelude.Lazy(lambda12);
  return NofibPrelude.LzCons(h, inlinedVal)
});
lambda14 = (undefined, function () {
  return NofibPrelude.LzNil
});
lscomp4 = function lscomp(ls) {
  loopLabel: while (true) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, element1$, element0$, tmp, inlinedVal;
    if (ls instanceof NofibPrelude.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        if (runtime.Tuple.isArrayLike(arg$LzCons$0$) && arg$LzCons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$LzCons$0$, 0);
          element1$ = runtime.Tuple.get(arg$LzCons$0$, 1);
          scrut = element0$ === 1;
          if (scrut === true) {
            tmp = lscomp4(arg$LzCons$1$);
            return NofibPrelude.Cons(element1$, tmp)
          }
          ls = arg$LzCons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$9 = (undefined, function (knights2, x, t) {
  return () => {
    return lambda10(knights2, x, t)
  }
});
lambda9 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda10 = (undefined, function (knights2, x, t) {
  let tmp, tmp1, tmp2, inlinedVal, inlinedVal1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = knights2[deleteFirst$accessorSymbol](x);
  tmp3 = NofibPrelude.Cons(knights2.RD, NofibPrelude.Nil);
  tmp4 = NofibPrelude.Cons(knights2.RU, tmp3);
  tmp5 = NofibPrelude.Cons(knights2.LD, tmp4);
  tmp6 = NofibPrelude.Cons(knights2.LU, tmp5);
  tmp7 = NofibPrelude.Cons(knights2.DR, tmp6);
  tmp8 = NofibPrelude.Cons(knights2.DL, tmp7);
  tmp9 = NofibPrelude.Cons(knights2.UR, tmp8);
  tmp10 = NofibPrelude.Cons(knights2.UL, tmp9);
  inlinedVal = lscomp(knights2, tmp, tmp10);
  inlinedVal1 = l(NofibPrelude, inlinedVal, 0);
  tmp1 = globalThis.Object.freeze([
    inlinedVal1,
    x
  ]);
  tmp2 = lscomp3(knights2, t);
  return NofibPrelude.LzCons(tmp1, tmp2)
});
lscomp3 = function lscomp(knights2, ls) {
  let arg$Cons$0$, arg$Cons$1$;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Lazy(lambda9)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    return NofibPrelude.Lazy(lambda$9(knights2, arg$Cons$0$, arg$Cons$1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$8 = (undefined, function (knights2, board) {
  return (b) => {
    return lambda8(knights2, board, b)
  }
});
lambda8 = (undefined, function (knights2, board, b) {
  let tmp, tmp1;
  tmp = knights2[lastPiece$accessorSymbol](board);
  tmp1 = knights2[move$accessorSymbol](b, tmp);
  return knights2[addPiece$accessorSymbol](tmp1, board)
});
lscomp = function lscomp(knights2, board, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let inlinedVal, tmp1, tmp2;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp1 = knights2[lastPiece$accessorSymbol](board);
      tmp2 = knights2[move$accessorSymbol](arg$Cons$0$, tmp1);
      inlinedVal = knights2[canMoveTo$accessorSymbol](tmp2, board);
      if (inlinedVal === true) {
        tmp = lscomp(knights2, board, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
logTen = function logTen(x) {
  let scrut, tmp;
  scrut = x === 0;
  if (scrut === true) {
    return 0
  }
  {
    let inlinedVal, tmp1;
    tmp1 = x / 10;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = logTen(inlinedVal);
    return 1 + tmp;
  }
};
find = function find(x, xs) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (xs instanceof NofibPrelude.Nil.class) {
      throw runtime.safeCall(globalThis.Error("Tile not used"))
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      scrut = NofibPrelude.eqTup2(x, arg$Cons$0$);
      if (scrut === true) {
        let inlinedVal;
        inlinedVal = l(NofibPrelude, arg$Cons$1$, 0);
        return 1 + inlinedVal
      }
      xs = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$7 = (undefined, function (knights2, ts_) {
  return () => {
    return lambda7(knights2, ts_)
  }
});
lambda7 = (undefined, function (knights2, ts_) {
  let arg$Cons$0$, arg$Cons$1$;
  if (ts_ instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ts_.head;
    arg$Cons$1$ = ts_.tail;
    return go1(arg$Cons$0$, arg$Cons$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$6 = (undefined, function (t) {
  return () => {
    return t
  }
});
lambda6 = (undefined, function (t) {
  return t
});
lambda$5 = (undefined, function (knights2, x, t, h) {
  return () => {
    let tmp;
    tmp = lscomp11(knights2, x, t);
    return NofibPrelude.LzCons(h, tmp)
  }
});
lambda1 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda2 = (undefined, function (knights2, x, t, h) {
  let tmp;
  tmp = lscomp11(knights2, x, t);
  return NofibPrelude.LzCons(h, tmp)
});
lambda$4 = (undefined, function (knights2, x, t, h) {
  return () => {
    let tmp;
    tmp = lscomp21(knights2, x, t);
    return NofibPrelude.LzCons(h, tmp)
  }
});
lambda3 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda4 = (undefined, function (knights2, x, t, h) {
  let tmp;
  tmp = lscomp21(knights2, x, t);
  return NofibPrelude.LzCons(h, tmp)
});
lambda$3 = (undefined, function (knights2, x, xs) {
  return () => {
    return lambda5(knights2, x, xs)
  }
});
lambda = (undefined, function () {
  return NofibPrelude.LzNil
});
lscomp11 = function lscomp1(knights2, x, ls) {
  loopLabel: while (true) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, inlinedVal;
    if (ls instanceof NofibPrelude.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Lazy(lambda1)
      } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        scrut = knights2[intChessSetComp$accessorSymbol](arg$LzCons$0$, x);
        if (scrut === true) {
          return NofibPrelude.Lazy(lambda$5(knights2, x, arg$LzCons$1$, arg$LzCons$0$))
        }
        ls = arg$LzCons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp21 = function lscomp2(knights2, x, ls) {
  loopLabel: while (true) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, inlinedVal;
    if (ls instanceof NofibPrelude.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Lazy(lambda3)
      } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        tmp = knights2[intChessSetComp$accessorSymbol](arg$LzCons$0$, x);
        scrut = ! tmp;
        if (scrut === true) {
          return NofibPrelude.Lazy(lambda$4(knights2, x, arg$LzCons$1$, arg$LzCons$0$))
        }
        ls = arg$LzCons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda5 = (undefined, function (knights2, x, xs) {
  let tmp, tmp1;
  tmp = lscomp21(knights2, x, xs);
  tmp1 = knights2[quickSortIntChessSet$accessorSymbol](tmp);
  return NofibPrelude.LzCons(x, tmp1)
});
lscomp1 = function lscomp1(knights2, x, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = knights2[intintComp$accessorSymbol](arg$Cons$0$, x);
      if (scrut === true) {
        tmp = lscomp1(knights2, x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp2 = function lscomp2(knights2, x, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = knights2[intintComp$accessorSymbol](arg$Cons$0$, x);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = lscomp2(knights2, x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
go1 = function go(h, t) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$;
    if (t instanceof NofibPrelude.Nil.class) {
      return h
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      h = arg$Cons$0$;
      t = arg$Cons$1$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class knights {
  static {
    knights1 = this
  }
  static get [intintComp$accessorSymbol]() { return knights.#intintComp; }
  static get [intChessSetComp$accessorSymbol]() { return knights.#intChessSetComp; }
  static get [quickSortIntChessSet$accessorSymbol]() { return knights.#quickSortIntChessSet; }
  static get [addPiece$accessorSymbol]() { return knights.#addPiece; }
  static get [deleteFirst$accessorSymbol]() { return knights.#deleteFirst; }
  static get [lastPiece$accessorSymbol]() { return knights.#lastPiece; }
  static get [move$accessorSymbol]() { return knights.#move; }
  static get [canMoveTo$accessorSymbol]() { return knights.#canMoveTo; }
  static get [showChessSet$accessorSymbol]() { return knights.#showChessSet; }
  static get [removeFront_lz$accessorSymbol]() { return knights.#removeFront_lz; }
  static get [inquireFront_lz$accessorSymbol]() { return knights.#inquireFront_lz; }
  static get [depthSearch$accessorSymbol]() { return knights.#depthSearch; }
  static {
    knights.createQueue = NofibPrelude.Nil;
    knights.Board = function Board(a, b, c, d) {
      return globalThis.Object.freeze(new Board.class(a, b, c, d));
    };
    (class Board {
      static {
        knights.Board.class = this
      }
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Board", ["a", "b", "c", "d"]];
    });
    (class Direction {
      static {
        knights.Direction = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Direction"];
    });
    (class UL extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.UL = this;
        Object.defineProperty(this, "class", {
          value: UL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UL"];
    });
    (class UR extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.UR = this;
        Object.defineProperty(this, "class", {
          value: UR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UR"];
    });
    (class DL extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.DL = this;
        Object.defineProperty(this, "class", {
          value: DL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DL"];
    });
    (class DR extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.DR = this;
        Object.defineProperty(this, "class", {
          value: DR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DR"];
    });
    (class LU extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.LU = this;
        Object.defineProperty(this, "class", {
          value: LU
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LU"];
    });
    (class LD extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.LD = this;
        Object.defineProperty(this, "class", {
          value: LD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LD"];
    });
    (class RU extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.RU = this;
        Object.defineProperty(this, "class", {
          value: RU
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RU"];
    });
    (class RD extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.RD = this;
        Object.defineProperty(this, "class", {
          value: RD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RD"];
    });
  }
  static #myIsDigit(c) {
    let tmp, tmp1, tmp2;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    if (tmp1 === true) {
      tmp2 = runtime.safeCall(c.codePointAt(0));
      return tmp2 <= 57
    }
    return false;
  }
  static #intintComp(a_b, c_d) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        element0$1 = runtime.Tuple.get(c_d, 0);
        element1$1 = runtime.Tuple.get(c_d, 1);
        tmp = element0$ < element0$1;
        if (tmp === false) {
          tmp1 = element0$ === element0$1;
          if (tmp1 === true) {
            return element1$ < element1$1
          }
          return false;
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intChessSetComp(a_b, c_d) {
    let element0$, element0$1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      runtime.Tuple.get(a_b, 1);
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        element0$1 = runtime.Tuple.get(c_d, 0);
        runtime.Tuple.get(c_d, 1);
        return element0$ < element0$1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #myInit(a_t) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      tmp = knights.#myInit(arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #myLast(a_t) {
    let arg$Cons$0$, arg$Cons$1$;
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      return go1(arg$Cons$0$, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #quickSortIntInt(xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = lscomp1(knights, arg$Cons$0$, arg$Cons$1$);
      tmp1 = knights.#quickSortIntInt(tmp);
      tmp2 = lscomp2(knights, arg$Cons$0$, arg$Cons$1$);
      tmp3 = knights.#quickSortIntInt(tmp2);
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #quickSortIntChessSet(xs) {
    let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
    if (xs instanceof NofibPrelude.Lazy.class) {
      inlinedVal = xs.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Lazy(lambda)
      } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        let inlinedVal1;
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        tmp = lscomp11(knights, arg$LzCons$0$, arg$LzCons$1$);
        tmp1 = knights.#quickSortIntChessSet(tmp);
        inlinedVal1 = NofibPrelude.Lazy(lambda$3(knights, arg$LzCons$0$, arg$LzCons$1$));
        return NofibPrelude.Lazy(lambda$2(NofibPrelude, tmp1, inlinedVal1))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sizeQueue(xs) {
    return l(NofibPrelude, xs, 0)
  }
  static #emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  }
  static #removeBack(xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      tmp = knights.#removeBack(arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #removeFront(xs) {
    if (xs instanceof NofibPrelude.Cons.class) {
      return xs.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #inquireBack(xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Cons$0$
        }
        xs = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #inquireFront(h_t) {
    if (h_t instanceof NofibPrelude.Cons.class) {
      return h_t.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  }
  static #addAllFront(list, q) {
    return NofibPrelude.append(list, q)
  }
  static #addBack(x, q) {
    let tmp;
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return NofibPrelude.append(q, tmp)
  }
  static #addFront(x, q) {
    return NofibPrelude.Cons(x, q)
  }
  static #createBoard(x, t) {
    let tmp, inlinedVal;
    inlinedVal = NofibPrelude.Lazy(lambda$6(t));
    tmp = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return knights.Board(x, 1, inlinedVal, tmp)
  }
  static #sizeBoard(b) {
    if (b instanceof knights.Board.class) {
      return b.a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #noPieces(b) {
    if (b instanceof knights.Board.class) {
      return b.b
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addPiece(t, b) {
    let arg$Board$0$, arg$Board$1$, arg$Board$2$, arg$Board$3$, tmp, tmp1;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$2$ = b.c;
      arg$Board$3$ = b.d;
      tmp = arg$Board$1$ + 1;
      tmp1 = NofibPrelude.Cons(t, arg$Board$3$);
      return knights.Board(arg$Board$0$, tmp, arg$Board$2$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #deleteFirst(b) {
    let ts_, arg$Board$0$, arg$Board$1$, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      let inlinedVal;
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      ts_ = knights.#myInit(arg$Board$3$);
      tmp = arg$Board$1$ - 1;
      inlinedVal = NofibPrelude.Lazy(lambda$7(knights, ts_));
      return knights.Board(arg$Board$0$, tmp, inlinedVal, ts_)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #positionPiece(x, b) {
    let arg$Board$1$, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      tmp = arg$Board$1$ - x;
      return NofibPrelude.atIndex(tmp, arg$Board$3$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lastPiece(b) {
    let arg$Board$3$;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      if (arg$Board$3$ instanceof NofibPrelude.Cons.class) {
        return arg$Board$3$.head
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #firstPiece(b) {
    let arg$Board$2$;
    if (b instanceof knights.Board.class) {
      arg$Board$2$ = b.c;
      if (arg$Board$2$ instanceof NofibPrelude.Lazy.class) {
        return arg$Board$2$.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pieceAtTile(x, b) {
    let arg$Board$3$;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      return find(x, arg$Board$3$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tup2InList(y, xs) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (xs instanceof NofibPrelude.Nil.class) {
        return false
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        scrut = NofibPrelude.eqTup2(y, arg$Cons$0$);
        if (scrut === true) {
          return true
        }
        xs = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #isSquareFree(x, b) {
    let arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      tmp = knights.#tup2InList(x, arg$Board$3$);
      return ! tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #assignMoveNo(t, size, z) {
    let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (t instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        tmp = element1$ - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + element0$;
        tmp3 = globalThis.Object.freeze([
          tmp2,
          z
        ]);
        tmp4 = z - 1;
        tmp5 = knights.#assignMoveNo(arg$Cons$1$, size, tmp4);
        return NofibPrelude.Cons(tmp3, tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #spaces(s, y) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = logTen(s);
    tmp1 = logTen(y);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  }
  static #printBoard(s, n, xs) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
    if (xs instanceof NofibPrelude.Nil.class) {
      tmp = s * s;
      scrut = n > tmp;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      {
        let inlinedVal, tmp27, inlinedVal1, tmp28;
        tmp28 = n / s;
        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp28));
        tmp27 = s * inlinedVal1;
        inlinedVal = n - tmp27;
        scrut1 = inlinedVal != 0;
        if (scrut1 === true) {
          tmp1 = s * s;
          tmp2 = knights.#spaces(tmp1, 1);
          tmp3 = n + 1;
          tmp4 = knights.#printBoard(s, tmp3, NofibPrelude.Nil);
          tmp5 = NofibPrelude.append(tmp2, tmp4);
          return NofibPrelude.Cons("*", tmp5)
        }
        {
          let inlinedVal2, tmp29, inlinedVal3, tmp30;
          tmp30 = n / s;
          inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp30));
          tmp29 = s * inlinedVal3;
          inlinedVal2 = n - tmp29;
          scrut2 = inlinedVal2 === 0;
          if (scrut2 === true) {
            let inlinedVal4;
            inlinedVal4 = go(NofibPrelude, "*\n", 0);
            tmp6 = n + 1;
            tmp7 = knights.#printBoard(s, tmp6, NofibPrelude.Nil);
            return NofibPrelude.append(inlinedVal4, tmp7)
          }
          throw runtime.safeCall(globalThis.Error("printBoard empty list error"));
        }
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        let inlinedVal, tmp27, inlinedVal1, tmp28;
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut3 = element0$ === n;
        if (scrut3 === true) {
          let inlinedVal2, tmp29, inlinedVal3, tmp30;
          tmp30 = n / s;
          inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp30));
          tmp29 = s * inlinedVal3;
          inlinedVal2 = n - tmp29;
          scrut4 = inlinedVal2 === 0;
          if (scrut4 === true) {
            let inlinedVal4, s1, inlinedVal5, inlinedVal6;
            inlinedVal4 = element1$ + "";
            s1 = inlinedVal4;
            inlinedVal5 = go(NofibPrelude, s1, 0);
            inlinedVal6 = go(NofibPrelude, "\n", 0);
            tmp24 = n + 1;
            tmp25 = knights.#printBoard(s, tmp24, arg$Cons$1$);
            tmp26 = NofibPrelude.append(inlinedVal6, tmp25);
            return NofibPrelude.append(inlinedVal5, tmp26)
          }
        }
        scrut5 = element0$ === n;
        if (scrut5 === true) {
          let inlinedVal2, tmp29, inlinedVal3, tmp30;
          tmp30 = n / s;
          inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp30));
          tmp29 = s * inlinedVal3;
          inlinedVal2 = n - tmp29;
          scrut6 = inlinedVal2 != 0;
          if (scrut6 === true) {
            let inlinedVal4, s1, inlinedVal5;
            inlinedVal4 = element1$ + "";
            s1 = inlinedVal4;
            inlinedVal5 = go(NofibPrelude, s1, 0);
            tmp19 = s * s;
            tmp20 = knights.#spaces(tmp19, element1$);
            tmp21 = n + 1;
            tmp22 = knights.#printBoard(s, tmp21, arg$Cons$1$);
            tmp23 = NofibPrelude.append(tmp20, tmp22);
            return NofibPrelude.append(inlinedVal5, tmp23)
          }
        }
        tmp28 = n / s;
        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp28));
        tmp27 = s * inlinedVal1;
        inlinedVal = n - tmp27;
        scrut7 = inlinedVal != 0;
        if (scrut7 === true) {
          tmp8 = s * s;
          tmp9 = knights.#spaces(tmp8, 1);
          tmp10 = n + 1;
          tmp11 = globalThis.Object.freeze([
            element0$,
            element1$
          ]);
          tmp12 = NofibPrelude.Cons(tmp11, arg$Cons$1$);
          tmp13 = knights.#printBoard(s, tmp10, tmp12);
          tmp14 = NofibPrelude.append(tmp9, tmp13);
          return NofibPrelude.Cons("*", tmp14)
        }
        {
          let inlinedVal2, tmp29, inlinedVal3, tmp30;
          tmp30 = n / s;
          inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp30));
          tmp29 = s * inlinedVal3;
          inlinedVal2 = n - tmp29;
          scrut8 = inlinedVal2 === 0;
          if (scrut8 === true) {
            let inlinedVal4;
            inlinedVal4 = go(NofibPrelude, "*\n", 0);
            tmp15 = n + 1;
            tmp16 = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            tmp17 = NofibPrelude.Cons(tmp16, arg$Cons$1$);
            tmp18 = knights.#printBoard(s, tmp15, tmp17);
            return NofibPrelude.append(inlinedVal4, tmp18)
          }
          throw runtime.safeCall(globalThis.Error("printBoard non-empty list error"));
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #move(d, x_y) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      if (d instanceof knights.UL.class) {
        tmp = element0$ - 1;
        tmp1 = element1$ - 2;
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      } else if (d instanceof knights.UR.class) {
        tmp2 = element0$ + 1;
        tmp3 = element1$ - 2;
        return globalThis.Object.freeze([
          tmp2,
          tmp3
        ])
      } else if (d instanceof knights.DL.class) {
        tmp4 = element0$ - 1;
        tmp5 = element1$ + 2;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      } else if (d instanceof knights.DR.class) {
        tmp6 = element0$ + 1;
        tmp7 = element1$ + 2;
        return globalThis.Object.freeze([
          tmp6,
          tmp7
        ])
      } else if (d instanceof knights.LU.class) {
        tmp8 = element0$ - 2;
        tmp9 = element1$ - 1;
        return globalThis.Object.freeze([
          tmp8,
          tmp9
        ])
      } else if (d instanceof knights.LD.class) {
        tmp10 = element0$ - 2;
        tmp11 = element1$ + 1;
        return globalThis.Object.freeze([
          tmp10,
          tmp11
        ])
      } else if (d instanceof knights.RU.class) {
        tmp12 = element0$ + 2;
        tmp13 = element1$ - 1;
        return globalThis.Object.freeze([
          tmp12,
          tmp13
        ])
      } else if (d instanceof knights.RD.class) {
        tmp14 = element0$ + 2;
        tmp15 = element1$ + 1;
        return globalThis.Object.freeze([
          tmp14,
          tmp15
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #startTour(st, size) {
    let scrut, inlinedVal, tmp, inlinedVal1, tmp1;
    tmp1 = size / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = 2 * inlinedVal1;
    inlinedVal = size - tmp;
    scrut = inlinedVal === 0;
    if (scrut === true) {
      return knights.#createBoard(size, st)
    }
    throw runtime.safeCall(globalThis.Error("Tour doesnt exist for odd size board"));
  }
  static #moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.#lastPiece(board);
    tmp1 = knights.#move(dir, tmp);
    return knights.#addPiece(tmp1, board)
  }
  static #canMoveTo(x_y, board) {
    let sze, scrut, scrut1, scrut2, scrut3, scrut4, element1$, element0$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      sze = knights.#sizeBoard(board);
      scrut = element0$ >= 1;
      if (scrut === true) {
        scrut4 = element0$ <= sze;
        if (scrut4 === true) {
          scrut3 = element1$ >= 1;
          if (scrut3 === true) {
            scrut2 = element1$ <= sze;
            if (scrut2 === true) {
              scrut1 = knights.#isSquareFree(x_y, board);
              if (scrut1 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #canMove(board, dir) {
    let tmp, tmp1;
    tmp = knights.#lastPiece(board);
    tmp1 = knights.#move(dir, tmp);
    return knights.#canMoveTo(tmp1, board)
  }
  static #canJumpFirst(board) {
    let tmp, tmp1;
    tmp = knights.#firstPiece(board);
    tmp1 = knights.#deleteFirst(board);
    return knights.#canMoveTo(tmp, tmp1)
  }
  static #tourFinished(board) {
    let sze, tmp, tmp1, tmp2;
    sze = knights.#sizeBoard(board);
    tmp = knights.#noPieces(board);
    tmp1 = sze * sze;
    tmp2 = tmp === tmp1;
    if (tmp2 === true) {
      return knights.#canJumpFirst(board)
    }
    return false;
  }
  static #possibleMoves(board) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.Cons(knights.RD, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(knights.RU, tmp);
    tmp2 = NofibPrelude.Cons(knights.LD, tmp1);
    tmp3 = NofibPrelude.Cons(knights.LU, tmp2);
    tmp4 = NofibPrelude.Cons(knights.DR, tmp3);
    tmp5 = NofibPrelude.Cons(knights.DL, tmp4);
    tmp6 = NofibPrelude.Cons(knights.UR, tmp5);
    tmp7 = NofibPrelude.Cons(knights.UL, tmp6);
    return lscomp(knights, board, tmp7)
  }
  static #deadEnd(board) {
    let tmp, inlinedVal;
    tmp = knights.#possibleMoves(board);
    inlinedVal = l(NofibPrelude, tmp, 0);
    return inlinedVal === 0
  }
  static #allDescend(board) {
    let tmp;
    tmp = knights.#possibleMoves(board);
    return NofibPrelude.map(lambda$8(knights, board), tmp)
  }
  static #descAndNo(board) {
    let tmp;
    tmp = knights.#allDescend(board);
    return lscomp3(knights, tmp)
  }
  static #singleDescend(board) {
    let tmp;
    tmp = knights.#descAndNo(board);
    return lscomp4(tmp)
  }
  static #descendents(board) {
    let singles, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arg$Cons$0$, arg$Cons$1$, tmp6;
    tmp = knights.#canJumpFirst(board);
    if (tmp === true) {
      tmp2 = knights.#firstPiece(board);
      tmp3 = knights.#addPiece(tmp2, board);
      tmp1 = knights.#deadEnd(tmp3);
    } else {
      tmp1 = false;
    }
    if (tmp1 === true) {
      return NofibPrelude.Lazy(lambda11)
    }
    {
      let inlinedVal;
      singles = knights.#singleDescend(board);
      inlinedVal = l(NofibPrelude, singles, 0);
      scrut = inlinedVal === 0;
      if (scrut === true) {
        let f;
        tmp4 = knights.#descAndNo(board);
        tmp5 = knights.#quickSortIntChessSet(tmp4);
        f = NofibPrelude.snd;
        return NofibPrelude.Lazy(lambda$(NofibPrelude, f, tmp5))
      }
      scrut1 = inlinedVal === 1;
      if (scrut1 === true) {
        σ$x: {
          if (singles instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = singles.head;
            arg$Cons$1$ = singles.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              let inlinedVal1;
              inlinedVal1 = NofibPrelude.Lazy(lambda$10(arg$Cons$0$));
              tmp6 = inlinedVal1;
              break σ$x
            }
          }
          throw runtime.safeCall(globalThis.Error("unreachable"));
        }
        return tmp6
      }
      return NofibPrelude.Lazy(lambda14);
    }
  }
  static #showChessSet(b) {
    let sortedTrail, arg$Board$0$, arg$Board$1$, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      tmp = knights.#assignMoveNo(arg$Board$3$, arg$Board$0$, arg$Board$1$);
      sortedTrail = knights.#quickSortIntInt(tmp);
      return knights.#printBoard(arg$Board$0$, 1, sortedTrail)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #root(sze) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, f, inlinedVal1, inlinedVal2;
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = NofibPrelude.enumFromTo(1, sze);
    inlinedVal = lscomp1_lscomp2(0, sze, tmp3, undefined, undefined);
    tmp4 = sze * sze;
    tmp5 = NofibPrelude.replicate_lz(tmp4, sze);
    f = knights.#startTour;
    inlinedVal2 = NofibPrelude.Lazy(lambda$1(NofibPrelude, f, inlinedVal, tmp5));
    tmp6 = NofibPrelude.zip_lz_lz(tmp2, inlinedVal2);
    inlinedVal1 = NofibPrelude.Lazy(lambda17);
    return NofibPrelude.Lazy(lambda$2(NofibPrelude, tmp6, inlinedVal1))
  }
  static #grow(x_y) {
    let element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = element0$ + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = knights.#descendents(element1$);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #isFinished(x_y) {
    let element1$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      return knights.#tourFinished(element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #emptyQueue_lz(x) {
    let inlinedVal;
    if (x instanceof NofibPrelude.Lazy.class) {
      inlinedVal = x.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return true
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #removeFront_lz(xs) {
    let inlinedVal;
    if (xs instanceof NofibPrelude.Lazy.class) {
      inlinedVal = xs.get();
      if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        return inlinedVal.tail
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #inquireFront_lz(h_t) {
    let inlinedVal;
    if (h_t instanceof NofibPrelude.Lazy.class) {
      inlinedVal = h_t.get();
      if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        return inlinedVal.head
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addAllFront_lz(list, q) {
    return NofibPrelude.Lazy(lambda$2(NofibPrelude, list, q))
  }
  static #depthSearch(q, growFn, finFn) {
    loopLabel: while (true) {
      let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
      scrut = knights.#emptyQueue_lz(q);
      if (scrut === true) {
        return NofibPrelude.Lazy(lambda18)
      }
      tmp = knights.#inquireFront_lz(q);
      scrut1 = runtime.safeCall(finFn(tmp));
      if (scrut1 === true) {
        return NofibPrelude.Lazy(lambda$12(knights, q, growFn, finFn))
      }
      tmp1 = knights.#inquireFront_lz(q);
      tmp2 = runtime.safeCall(growFn(tmp1));
      tmp3 = knights.#removeFront_lz(q);
      tmp4 = knights.#addAllFront_lz(tmp2, tmp3);
      q = tmp4;
      continue loopLabel;
    }
  }
  static #printTour(ss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2;
    scrut = NofibPrelude.map(lambda20, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
          tmp = knights.#root(arg$Cons$0$);
          tmp1 = knights.#depthSearch(tmp, knights.#grow, knights.#isFinished);
          tmp2 = NofibPrelude.take_lz(arg$Cons$0$1, tmp1);
          return pp(knights, tmp2)
        }
      }
    }
    throw runtime.safeCall(globalThis.Error("printTour error"))
  }
  static #testKnights_nofib(ss) {
    let inlinedVal, tmp, inlinedVal1;
    inlinedVal1 = l(NofibPrelude, ss, 0);
    tmp = inlinedVal1 === 2;
    if (tmp === true) {
      inlinedVal = NofibPrelude.foldr(lambda$13(knights), true, ss);
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return knights.#printTour(ss)
    }
    throw runtime.safeCall(globalThis.Error("\nUsage: knights <board size> <no solutions> \n"));
  }
  static main() {
    let tmp, tmp1, tmp2, inlinedVal, inlinedVal1;
    inlinedVal = go(NofibPrelude, "8", 0);
    inlinedVal1 = go(NofibPrelude, "1", 0);
    tmp = NofibPrelude.Cons(inlinedVal1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal, tmp);
    tmp2 = knights.#testKnights_nofib(tmp1);
    return NofibPrelude.nofibListToString(tmp2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "knights"];
});
export { go1 as _$_modulePrivate_$_go };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { lscomp21 as _$_modulePrivate_$_lscomp21 };
export { lscomp11 as _$_modulePrivate_$_lscomp11 };
export { find as _$_modulePrivate_$_find };
export { logTen as _$_modulePrivate_$_logTen };
export { lscomp as _$_modulePrivate_$_lscomp };
export { lscomp3 as _$_modulePrivate_$_lscomp3 };
export { lscomp4 as _$_modulePrivate_$_lscomp4 };
export { lscomp22 as _$_modulePrivate_$_lscomp22 };
export { lscomp12 as _$_modulePrivate_$_lscomp12 };
export { pp as _$_modulePrivate_$_pp };
export { strToInt as _$_modulePrivate_$_strToInt };
export { argsOk as _$_modulePrivate_$_argsOk };
export { all_digits as _$_modulePrivate_$_all_digits };
export { knights1 as _$_modulePrivate_$_knights };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { lambda16 as _$_modulePrivate_$_lambda16 };
export { lambda17 as _$_modulePrivate_$_lambda17 };
export { lambda18 as _$_modulePrivate_$_lambda18 };
export { lambda19 as _$_modulePrivate_$_lambda19 };
export { lambda20 as _$_modulePrivate_$_lambda20 };
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda$3 as _$_modulePrivate_$_lambda$ };
export { lambda$4 as _$_modulePrivate_$_lambda$1 };
export { lambda$5 as _$_modulePrivate_$_lambda$2 };
export { lambda$6 as _$_modulePrivate_$_lambda$3 };
export { lambda$7 as _$_modulePrivate_$_lambda$4 };
export { lambda$8 as _$_modulePrivate_$_lambda$5 };
export { lambda$9 as _$_modulePrivate_$_lambda$6 };
export { lambda$10 as _$_modulePrivate_$_lambda$7 };
export { lambda$11 as _$_modulePrivate_$_lambda$8 };
export { lambda$12 as _$_modulePrivate_$_lambda$9 };
export { lambda$13 as _$_modulePrivate_$_lambda$10 };
export { lambda$14 as _$_modulePrivate_$_lambda$11 };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default knights1;
