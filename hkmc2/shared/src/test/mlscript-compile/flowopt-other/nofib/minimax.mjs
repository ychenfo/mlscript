const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_go as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go1 } from "./NofibPrelude.mjs";
const eqPiece$accessorSymbol = globalThis.Symbol("eqPiece");
const evaluationEq$accessorSymbol = globalThis.Symbol("evaluationEq");
const placePiece$accessorSymbol = globalThis.Symbol("placePiece");
const newPositions$accessorSymbol = globalThis.Symbol("newPositions");
const scorePiece$accessorSymbol = globalThis.Symbol("scorePiece");
const map2$accessorSymbol = globalThis.Symbol("map2");
const static$accessorSymbol = globalThis.Symbol("static");
const repTree$accessorSymbol = globalThis.Symbol("repTree");
const mapTree$accessorSymbol = globalThis.Symbol("mapTree");
const prune$accessorSymbol = globalThis.Symbol("prune");
const mise$accessorSymbol = globalThis.Symbol("mise");
const cropTree$accessorSymbol = globalThis.Symbol("cropTree");
let lscomp2, lscomp1, best_, board, minimax1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
          if (param0 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param0 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            tmp = NofibPrelude.Cons(3, NofibPrelude.Nil);
            tmp1 = NofibPrelude.Cons(2, tmp);
            tmp2 = NofibPrelude.Cons(1, tmp1);
            param0 = arg$Cons$0$;
            param1 = arg$Cons$1$;
            param2 = tmp2;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param2 instanceof NofibPrelude.Nil.class) {
            param0 = param1;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            tmp = globalThis.Object.freeze([
              param0,
              arg$Cons$0$
            ]);
            tmp1 = lscomp1_lscomp2(1, param0, param1, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
board = function board(testBoard, x) {
  let scrut;
  scrut = x === "doesn't happen";
  if (scrut === true) {
    return NofibPrelude.append(testBoard, testBoard)
  }
  return testBoard;
};
lambda$10 = (undefined, function (minimax2, f, g, opposition) {
  return (x) => {
    return lambda10(minimax2, f, g, opposition, x)
  }
});
lambda10 = (undefined, function (minimax2, f, g, opposition, x) {
  let tmp, tmp1, inlinedVal, tmp2, lambda$here;
  lambda$here = lambda$8(minimax2, opposition);
  tmp2 = minimax2[repTree$accessorSymbol](lambda$9(minimax2, opposition), lambda$here, x);
  inlinedVal = minimax2[prune$accessorSymbol](5, tmp2);
  tmp = minimax2[mapTree$accessorSymbol](minimax2[static$accessorSymbol], inlinedVal);
  tmp1 = minimax2[cropTree$accessorSymbol](tmp);
  return minimax2[mise$accessorSymbol](g, f, tmp1)
});
lambda$9 = (undefined, function (minimax2, p) {
  return (x) => {
    return minimax2[newPositions$accessorSymbol](p, x)
  }
});
lambda$8 = (undefined, function (minimax2, p) {
  return (x) => {
    return lambda9(minimax2, p, x)
  }
});
lambda8 = (undefined, function (minimax2, p, x) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal;
  tmp = NofibPrelude.Cons(3, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(2, tmp);
  tmp2 = NofibPrelude.Cons(1, tmp1);
  inlinedVal = lscomp1_lscomp2(0, tmp2, undefined, undefined);
  tmp3 = NofibPrelude.map(lambda$1(minimax2, p, x), inlinedVal);
  return NofibPrelude.concat(tmp3)
});
lambda9 = (undefined, function (minimax2, p, x) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, inlinedVal1;
  if (p instanceof minimax2.X.class) {
    inlinedVal = minimax2.O;
  } else if (p instanceof minimax2.O.class) {
    inlinedVal = minimax2.X;
  } else {
    throw runtime.safeCall(globalThis.Error("opposite"))
  }
  tmp = NofibPrelude.Cons(3, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(2, tmp);
  tmp2 = NofibPrelude.Cons(1, tmp1);
  inlinedVal1 = lscomp1_lscomp2(0, tmp2, undefined, undefined);
  tmp3 = NofibPrelude.map(lambda$1(minimax2, inlinedVal, x), inlinedVal1);
  return NofibPrelude.concat(tmp3)
});
lambda$7 = (undefined, function (minimax2, f, g) {
  return (x) => {
    return minimax2[mise$accessorSymbol](g, f, x)
  }
});
lambda7 = (undefined, function (minimax2, f, g, x) {
  return minimax2[mise$accessorSymbol](g, f, x)
});
best_ = function best_(minimax2, f, b, s, ls1, ls2) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      if (ls2 instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          b,
          s
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls1.head;
      arg$Cons$1$ = ls1.tail;
      if (ls2 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ls2.head;
        arg$Cons$1$1 = ls2.tail;
        tmp = runtime.safeCall(f(s, arg$Cons$0$1));
        scrut = minimax2[evaluationEq$accessorSymbol](s, tmp);
        if (scrut === true) {
          ls1 = arg$Cons$1$;
          ls2 = arg$Cons$1$1;
          continue loopLabel
        }
        b = arg$Cons$0$;
        s = arg$Cons$0$1;
        ls1 = arg$Cons$1$;
        ls2 = arg$Cons$1$1;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$6 = (undefined, function (minimax2, n) {
  return (x) => {
    let tmp;
    tmp = n - 1;
    return minimax2[prune$accessorSymbol](tmp, x)
  }
});
lambda6 = (undefined, function (minimax2, n, x) {
  let tmp;
  tmp = n - 1;
  return minimax2[prune$accessorSymbol](tmp, x)
});
lambda$5 = (undefined, function (minimax2, f) {
  return (x) => {
    return minimax2[mapTree$accessorSymbol](f, x)
  }
});
lambda5 = (undefined, function (minimax2, f, x) {
  return minimax2[mapTree$accessorSymbol](f, x)
});
lambda$4 = (undefined, function (minimax2, f, g) {
  return (x) => {
    return minimax2[repTree$accessorSymbol](g, f, x)
  }
});
lambda4 = (undefined, function (minimax2, f, g, x) {
  return minimax2[repTree$accessorSymbol](g, f, x)
});
lambda$3 = (undefined, function (minimax2, board1) {
  return (x) => {
    return lambda3(minimax2, board1, x)
  }
});
lambda3 = (undefined, function (minimax2, board1, x) {
  let tmp, tmp1, inlinedVal, scrut, scrut1;
  tmp = minimax2[map2$accessorSymbol](lambda$2(minimax2), board1, x);
  tmp1 = NofibPrelude.map(NofibPrelude.sum, tmp);
  inlinedVal = go(NofibPrelude, tmp1, 0);
  scrut = inlinedVal === 3;
  if (scrut === true) {
    return minimax2.XWin
  }
  scrut1 = inlinedVal === -3;
  if (scrut1 === true) {
    return minimax2.OWin
  }
  return minimax2.Score(inlinedVal);
});
lambda$2 = (undefined, function (minimax2) {
  return (x, y) => {
    return minimax2[map2$accessorSymbol](minimax2[scorePiece$accessorSymbol], x, y)
  }
});
lambda2 = (undefined, function (minimax2, x, y) {
  return minimax2[map2$accessorSymbol](minimax2[scorePiece$accessorSymbol], x, y)
});
lscomp2 = function lscomp2(x, xs, ls) {
  return lscomp1_lscomp2(1, x, xs, ls)
};
lambda$1 = (undefined, function (minimax2, piece, board1) {
  return (pos) => {
    return minimax2[placePiece$accessorSymbol](piece, board1, pos)
  }
});
lscomp1 = function lscomp1(ls) {
  return lscomp1_lscomp2(0, ls, undefined, undefined)
};
lambda1 = (undefined, function (minimax2, piece, board1, pos) {
  return minimax2[placePiece$accessorSymbol](piece, board1, pos)
});
lambda$ = (undefined, function (minimax2) {
  return (x) => {
    let tmp;
    tmp = minimax2[eqPiece$accessorSymbol](x, minimax2.Empty);
    return ! tmp
  }
});
lambda = (undefined, function (minimax2, x) {
  let tmp;
  tmp = minimax2[eqPiece$accessorSymbol](x, minimax2.Empty);
  return ! tmp
});
(class minimax {
  static {
    minimax1 = this
  }
  static get [eqPiece$accessorSymbol]() { return minimax.#eqPiece; }
  static get [evaluationEq$accessorSymbol]() { return minimax.#evaluationEq; }
  static get [placePiece$accessorSymbol]() { return minimax.#placePiece; }
  static get [newPositions$accessorSymbol]() { return minimax.#newPositions; }
  static get [scorePiece$accessorSymbol]() { return minimax.#scorePiece; }
  static get [map2$accessorSymbol]() { return minimax.#map2; }
  static get [static$accessorSymbol]() { return minimax.#static1; }
  static get [repTree$accessorSymbol]() { return minimax.#repTree; }
  static get [mapTree$accessorSymbol]() { return minimax.#mapTree; }
  static get [prune$accessorSymbol]() { return minimax.#prune; }
  static get [mise$accessorSymbol]() { return minimax.#mise; }
  static get [cropTree$accessorSymbol]() { return minimax.#cropTree; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105;
    (class Piece {
      static {
        minimax.Piece = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Piece"];
    });
    (class X extends minimax.Piece {
      static {
        new this
      }
      constructor() {
        super();
        minimax.X = this;
        Object.defineProperty(this, "class", {
          value: X
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"];
    });
    (class O extends minimax.Piece {
      static {
        new this
      }
      constructor() {
        super();
        minimax.O = this;
        Object.defineProperty(this, "class", {
          value: O
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "O"];
    });
    (class Empty extends minimax.Piece {
      static {
        new this
      }
      constructor() {
        super();
        minimax.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
    (class Evaluation {
      static {
        minimax.Evaluation = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Evaluation"];
    });
    (class XWin extends minimax.Evaluation {
      static {
        new this
      }
      constructor() {
        super();
        minimax.XWin = this;
        Object.defineProperty(this, "class", {
          value: XWin
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "XWin"];
    });
    (class OWin extends minimax.Evaluation {
      static {
        new this
      }
      constructor() {
        super();
        minimax.OWin = this;
        Object.defineProperty(this, "class", {
          value: OWin
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OWin"];
    });
    minimax.Score = function Score(i) {
      return globalThis.Object.freeze(new Score.class(i));
    };
    (class Score extends minimax.Evaluation {
      static {
        minimax.Score.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Score", ["i"]];
    });
    minimax.Branch = function Branch(a, cs) {
      return globalThis.Object.freeze(new Branch.class(a, cs));
    };
    (class Branch {
      static {
        minimax.Branch.class = this
      }
      constructor(a, cs) {
        this.a = a;
        this.cs = cs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch", ["a", "cs"]];
    });
    tmp = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    tmp3 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(0, tmp3);
    tmp5 = NofibPrelude.Cons(0, tmp4);
    tmp6 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(0, tmp6);
    tmp8 = NofibPrelude.Cons(0, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    minimax.win1 = tmp11;
    tmp12 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(0, tmp12);
    tmp14 = NofibPrelude.Cons(0, tmp13);
    tmp15 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(1, tmp15);
    tmp17 = NofibPrelude.Cons(1, tmp16);
    tmp18 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp19 = NofibPrelude.Cons(0, tmp18);
    tmp20 = NofibPrelude.Cons(0, tmp19);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp17, tmp21);
    tmp23 = NofibPrelude.Cons(tmp14, tmp22);
    minimax.win2 = tmp23;
    tmp24 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp25 = NofibPrelude.Cons(0, tmp24);
    tmp26 = NofibPrelude.Cons(0, tmp25);
    tmp27 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp28 = NofibPrelude.Cons(0, tmp27);
    tmp29 = NofibPrelude.Cons(0, tmp28);
    tmp30 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(1, tmp30);
    tmp32 = NofibPrelude.Cons(1, tmp31);
    tmp33 = NofibPrelude.Cons(tmp32, NofibPrelude.Nil);
    tmp34 = NofibPrelude.Cons(tmp29, tmp33);
    tmp35 = NofibPrelude.Cons(tmp26, tmp34);
    minimax.win3 = tmp35;
    tmp36 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp37 = NofibPrelude.Cons(0, tmp36);
    tmp38 = NofibPrelude.Cons(1, tmp37);
    tmp39 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(0, tmp39);
    tmp41 = NofibPrelude.Cons(1, tmp40);
    tmp42 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(0, tmp42);
    tmp44 = NofibPrelude.Cons(1, tmp43);
    tmp45 = NofibPrelude.Cons(tmp44, NofibPrelude.Nil);
    tmp46 = NofibPrelude.Cons(tmp41, tmp45);
    tmp47 = NofibPrelude.Cons(tmp38, tmp46);
    minimax.win4 = tmp47;
    tmp48 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(1, tmp48);
    tmp50 = NofibPrelude.Cons(0, tmp49);
    tmp51 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(1, tmp51);
    tmp53 = NofibPrelude.Cons(0, tmp52);
    tmp54 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp55 = NofibPrelude.Cons(1, tmp54);
    tmp56 = NofibPrelude.Cons(0, tmp55);
    tmp57 = NofibPrelude.Cons(tmp56, NofibPrelude.Nil);
    tmp58 = NofibPrelude.Cons(tmp53, tmp57);
    tmp59 = NofibPrelude.Cons(tmp50, tmp58);
    minimax.win5 = tmp59;
    tmp60 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(0, tmp60);
    tmp62 = NofibPrelude.Cons(0, tmp61);
    tmp63 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp64 = NofibPrelude.Cons(0, tmp63);
    tmp65 = NofibPrelude.Cons(0, tmp64);
    tmp66 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp67 = NofibPrelude.Cons(0, tmp66);
    tmp68 = NofibPrelude.Cons(0, tmp67);
    tmp69 = NofibPrelude.Cons(tmp68, NofibPrelude.Nil);
    tmp70 = NofibPrelude.Cons(tmp65, tmp69);
    tmp71 = NofibPrelude.Cons(tmp62, tmp70);
    minimax.win6 = tmp71;
    tmp72 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp73 = NofibPrelude.Cons(0, tmp72);
    tmp74 = NofibPrelude.Cons(1, tmp73);
    tmp75 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(1, tmp75);
    tmp77 = NofibPrelude.Cons(0, tmp76);
    tmp78 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp79 = NofibPrelude.Cons(0, tmp78);
    tmp80 = NofibPrelude.Cons(0, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp77, tmp81);
    tmp83 = NofibPrelude.Cons(tmp74, tmp82);
    minimax.win7 = tmp83;
    tmp84 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp85 = NofibPrelude.Cons(0, tmp84);
    tmp86 = NofibPrelude.Cons(0, tmp85);
    tmp87 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp88 = NofibPrelude.Cons(1, tmp87);
    tmp89 = NofibPrelude.Cons(0, tmp88);
    tmp90 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(0, tmp90);
    tmp92 = NofibPrelude.Cons(1, tmp91);
    tmp93 = NofibPrelude.Cons(tmp92, NofibPrelude.Nil);
    tmp94 = NofibPrelude.Cons(tmp89, tmp93);
    tmp95 = NofibPrelude.Cons(tmp86, tmp94);
    minimax.win8 = tmp95;
    tmp96 = NofibPrelude.Cons(minimax.win8, NofibPrelude.Nil);
    tmp97 = NofibPrelude.Cons(minimax.win7, tmp96);
    tmp98 = NofibPrelude.Cons(minimax.win6, tmp97);
    tmp99 = NofibPrelude.Cons(minimax.win5, tmp98);
    tmp100 = NofibPrelude.Cons(minimax.win4, tmp99);
    tmp101 = NofibPrelude.Cons(minimax.win3, tmp100);
    tmp102 = NofibPrelude.Cons(minimax.win2, tmp101);
    tmp103 = NofibPrelude.Cons(minimax.win1, tmp102);
    minimax.wins = tmp103;
    tmp104 = NofibPrelude.replicate(3, minimax.Empty);
    tmp105 = NofibPrelude.replicate(3, tmp104);
    minimax.initialBoard = tmp105;
  }
  static #andd(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$0$ === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #eqPiece(p1, p2) {
    if (p1 instanceof minimax.X.class) {
      if (p2 instanceof minimax.X.class) {
        return true
      }
      return false;
    } else if (p1 instanceof minimax.O.class) {
      if (p2 instanceof minimax.O.class) {
        return true
      }
      return false;
    } else if (p1 instanceof minimax.Empty.class) {
      if (p2 instanceof minimax.Empty.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #evaluationEq(x, y) {
    let scrut, arg$Score$0$, arg$Score$0$1;
    if (x instanceof minimax.XWin.class) {
      if (y instanceof minimax.XWin.class) {
        return true
      }
      return false;
    } else if (x instanceof minimax.OWin.class) {
      if (y instanceof minimax.OWin.class) {
        return true
      }
      return false;
    } else if (x instanceof minimax.Score.class) {
      arg$Score$0$ = x.i;
      if (y instanceof minimax.Score.class) {
        arg$Score$0$1 = y.i;
        scrut = arg$Score$0$ === arg$Score$0$1;
        if (scrut === true) {
          return true
        }
        return false;
      }
      return false;
    }
    return false;
  }
  static #showEvaluation(e) {
    let arg$Score$0$;
    if (e instanceof minimax.XWin.class) {
      return go1(NofibPrelude, "XWin", 0)
    } else if (e instanceof minimax.OWin.class) {
      return go1(NofibPrelude, "OWin", 0)
    } else if (e instanceof minimax.Score.class) {
      let inlinedVal, inlinedVal1, s, inlinedVal2;
      arg$Score$0$ = e.i;
      inlinedVal = go1(NofibPrelude, "Score ", 0);
      inlinedVal1 = arg$Score$0$ + "";
      s = inlinedVal1;
      inlinedVal2 = go1(NofibPrelude, s, 0);
      return NofibPrelude.append(inlinedVal, inlinedVal2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showPiece(p) {
    if (p instanceof minimax.X.class) {
      return go1(NofibPrelude, "X", 0)
    } else if (p instanceof minimax.O.class) {
      return go1(NofibPrelude, "O", 0)
    } else if (p instanceof minimax.Empty.class) {
      return go1(NofibPrelude, " ", 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showRow(ps) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (ps instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ps.head;
      arg$Cons$1$ = ps.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
            let inlinedVal, inlinedVal1;
            tmp = minimax.#showPiece(arg$Cons$0$);
            inlinedVal = go1(NofibPrelude, "|", 0);
            tmp1 = minimax.#showPiece(arg$Cons$0$1);
            inlinedVal1 = go1(NofibPrelude, "|", 0);
            tmp2 = minimax.#showPiece(arg$Cons$0$2);
            tmp3 = NofibPrelude.append(inlinedVal1, tmp2);
            tmp4 = NofibPrelude.append(tmp1, tmp3);
            tmp5 = NofibPrelude.append(inlinedVal, tmp4);
            return NofibPrelude.append(tmp, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showBoard(rs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (rs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = rs.head;
      arg$Cons$1$ = rs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
            let inlinedVal, inlinedVal1, inlinedVal2;
            tmp = minimax.#showRow(arg$Cons$0$);
            inlinedVal = go1(NofibPrelude, "\n------\n", 0);
            tmp1 = minimax.#showRow(arg$Cons$0$1);
            inlinedVal1 = go1(NofibPrelude, "\n------\n", 0);
            tmp2 = minimax.#showRow(arg$Cons$0$2);
            inlinedVal2 = go1(NofibPrelude, "\n\n", 0);
            tmp3 = NofibPrelude.append(tmp2, inlinedVal2);
            tmp4 = NofibPrelude.append(inlinedVal1, tmp3);
            tmp5 = NofibPrelude.append(tmp1, tmp4);
            tmp6 = NofibPrelude.append(inlinedVal, tmp5);
            return NofibPrelude.append(tmp, tmp6)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #insert(p, ps, i) {
    let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (ps instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ps.head;
      arg$Cons$1$ = ps.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
            scrut = i === 1;
            if (scrut === true) {
              tmp = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
              tmp1 = NofibPrelude.Cons(arg$Cons$0$1, tmp);
              return NofibPrelude.Cons(p, tmp1)
            }
            scrut1 = i === 2;
            if (scrut1 === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
              tmp3 = NofibPrelude.Cons(p, tmp2);
              return NofibPrelude.Cons(arg$Cons$0$, tmp3)
            }
            scrut2 = i === 3;
            if (scrut2 === true) {
              tmp4 = NofibPrelude.Cons(p, NofibPrelude.Nil);
              tmp5 = NofibPrelude.Cons(arg$Cons$0$1, tmp4);
              return NofibPrelude.Cons(arg$Cons$0$, tmp5)
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
  static #empty_(x, r) {
    let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2;
    scrut = x === 1;
    if (scrut === true) {
      if (r instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = r.head;
        arg$Cons$1$ = r.tail;
        if (arg$Cons$0$ instanceof minimax.Empty.class) {
          if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = arg$Cons$1$1.head;
              arg$Cons$1$2 = arg$Cons$1$1.tail;
              if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                return true
              }
              scrut1 = x === 2;
              if (scrut1 === true) {
                if (arg$Cons$0$1 instanceof minimax.Empty.class) {
                  scrut2 = x === 3;
                  if (scrut2 === true) {
                    if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                      return false
                    }
                    return false;
                  }
                  return false;
                }
                scrut2 = x === 3;
                if (scrut2 === true) {
                  if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                    return false
                  }
                  return false;
                }
                return false;
              }
              scrut2 = x === 3;
              if (scrut2 === true) {
                if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                  return false
                }
                return false;
              }
              return false;
            }
            scrut1 = x === 2;
            if (scrut1 === true) {
              if (arg$Cons$0$1 instanceof minimax.Empty.class) {
                scrut2 = x === 3;
                if (scrut2 === true) {
                  return false
                }
                return false;
              }
              scrut2 = x === 3;
              if (scrut2 === true) {
                return false
              }
              return false;
            }
            scrut2 = x === 3;
            if (scrut2 === true) {
              return false
            }
            return false;
          }
          scrut1 = x === 2;
          if (scrut1 === true) {
            scrut2 = x === 3;
            if (scrut2 === true) {
              return false
            }
            return false;
          }
          scrut2 = x === 3;
          if (scrut2 === true) {
            return false
          }
          return false;
        }
        scrut1 = x === 2;
        if (scrut1 === true) {
          if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            if (arg$Cons$0$1 instanceof minimax.Empty.class) {
              if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                  return true
                }
                scrut2 = x === 3;
                if (scrut2 === true) {
                  if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                    return false
                  }
                  return false;
                }
                return false;
              }
              scrut2 = x === 3;
              if (scrut2 === true) {
                return false
              }
              return false;
            }
            scrut2 = x === 3;
            if (scrut2 === true) {
              if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                  if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
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
          scrut2 = x === 3;
          if (scrut2 === true) {
            return false
          }
          return false;
        }
        scrut2 = x === 3;
        if (scrut2 === true) {
          if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$1 = arg$Cons$1$.tail;
            if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = arg$Cons$1$1.head;
              arg$Cons$1$2 = arg$Cons$1$1.tail;
              if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
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
      scrut1 = x === 2;
      if (scrut1 === true) {
        scrut2 = x === 3;
        if (scrut2 === true) {
          return false
        }
        return false;
      }
      scrut2 = x === 3;
      if (scrut2 === true) {
        return false
      }
      return false;
    }
    scrut1 = x === 2;
    if (scrut1 === true) {
      if (r instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = r.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$0$1 instanceof minimax.Empty.class) {
            if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = arg$Cons$1$1.head;
              arg$Cons$1$2 = arg$Cons$1$1.tail;
              if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                return true
              }
              scrut2 = x === 3;
              if (scrut2 === true) {
                if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                  return false
                }
                return false;
              }
              return false;
            }
            scrut2 = x === 3;
            if (scrut2 === true) {
              return false
            }
            return false;
          }
          scrut2 = x === 3;
          if (scrut2 === true) {
            if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = arg$Cons$1$1.head;
              arg$Cons$1$2 = arg$Cons$1$1.tail;
              if (arg$Cons$0$2 instanceof minimax.Empty.class) {
                if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
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
        scrut2 = x === 3;
        if (scrut2 === true) {
          return false
        }
        return false;
      }
      scrut2 = x === 3;
      if (scrut2 === true) {
        return false
      }
      return false;
    }
    scrut2 = x === 3;
    if (scrut2 === true) {
      if (r instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = r.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = arg$Cons$1$1.head;
            arg$Cons$1$2 = arg$Cons$1$1.tail;
            if (arg$Cons$0$2 instanceof minimax.Empty.class) {
              if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
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
    return false;
  }
  static #empty(pos, board1) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, element1$, element0$;
    if (board1 instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = board1.head;
      arg$Cons$1$ = board1.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
            if (runtime.Tuple.isArrayLike(pos) && pos.length === 2) {
              element0$ = runtime.Tuple.get(pos, 0);
              element1$ = runtime.Tuple.get(pos, 1);
              switch (element0$) {
                case 1:
                  return minimax.#empty_(element1$, arg$Cons$0$);
                case 2:
                  return minimax.#empty_(element1$, arg$Cons$0$1);
                case 3:
                  return minimax.#empty_(element1$, arg$Cons$0$2);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
  static #placePiece(p, board1, pos) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    tmp = minimax.#empty(pos, board1);
    scrut = ! tmp;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    if (board1 instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = board1.head;
      arg$Cons$1$ = board1.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
            if (runtime.Tuple.isArrayLike(pos) && pos.length === 2) {
              element0$ = runtime.Tuple.get(pos, 0);
              element1$ = runtime.Tuple.get(pos, 1);
              switch (element0$) {
                case 1:
                  tmp1 = minimax.#insert(p, arg$Cons$0$, element1$);
                  tmp2 = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
                  tmp3 = NofibPrelude.Cons(arg$Cons$0$1, tmp2);
                  tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil);
                case 2:
                  tmp5 = minimax.#insert(p, arg$Cons$0$1, element1$);
                  tmp6 = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
                  tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                  tmp8 = NofibPrelude.Cons(arg$Cons$0$, tmp7);
                  return NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
                case 3:
                  tmp9 = minimax.#insert(p, arg$Cons$0$2, element1$);
                  tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                  tmp11 = NofibPrelude.Cons(arg$Cons$0$1, tmp10);
                  tmp12 = NofibPrelude.Cons(arg$Cons$0$, tmp11);
                  return NofibPrelude.Cons(tmp12, NofibPrelude.Nil);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
  static #fullBoard(b) {
    let tmp, tmp1;
    tmp = NofibPrelude.concat(b);
    tmp1 = NofibPrelude.map(lambda$(minimax), tmp);
    return minimax.#andd(tmp1)
  }
  static #newPositions(piece, board1) {
    let tmp, tmp1, tmp2, tmp3, inlinedVal;
    tmp = NofibPrelude.Cons(3, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(2, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    inlinedVal = lscomp1_lscomp2(0, tmp2, undefined, undefined);
    tmp3 = NofibPrelude.map(lambda$1(minimax, piece, board1), inlinedVal);
    return NofibPrelude.concat(tmp3)
  }
  static #eval1(x) {
    let scrut, scrut1;
    scrut = x === 3;
    if (scrut === true) {
      return minimax.XWin
    }
    scrut1 = x === -3;
    if (scrut1 === true) {
      return minimax.OWin
    }
    return minimax.Score(x);
  }
  static #interpret(x, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Score$0$, tmp;
      if (l instanceof NofibPrelude.Nil.class) {
        return minimax.Score(x)
      } else if (l instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        if (arg$Cons$0$ instanceof minimax.Score.class) {
          arg$Score$0$ = arg$Cons$0$.i;
          tmp = x + arg$Score$0$;
          x = tmp;
          l = arg$Cons$1$;
          continue loopLabel
        } else if (arg$Cons$0$ instanceof minimax.XWin.class) {
          return minimax.XWin
        } else if (arg$Cons$0$ instanceof minimax.OWin.class) {
          return minimax.OWin
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #scorePiece(p, score) {
    if (p instanceof minimax.X.class) {
      return score
    } else if (p instanceof minimax.Empty.class) {
      return 0
    } else if (p instanceof minimax.O.class) {
      return - score
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map2(f, xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = minimax.#map2(f, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else if (ys instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #score(board1, win) {
    let tmp, tmp1, inlinedVal;
    tmp = minimax.#map2(lambda$2(minimax), board1, win);
    tmp1 = NofibPrelude.map(NofibPrelude.sum, tmp);
    inlinedVal = go(NofibPrelude, tmp1, 0);
    return minimax.#eval1(inlinedVal)
  }
  static #static1(board1) {
    let tmp;
    tmp = NofibPrelude.map(lambda$3(minimax, board1), minimax.wins);
    return minimax.#interpret(0, tmp)
  }
  static #repTree(f, g, a) {
    let tmp, tmp1;
    tmp = runtime.safeCall(f(a));
    tmp1 = NofibPrelude.map(lambda$4(minimax, f, g), tmp);
    return minimax.Branch(a, tmp1)
  }
  static #mapTree(f, t) {
    let arg$Branch$0$, arg$Branch$1$, tmp, tmp1;
    if (t instanceof minimax.Branch.class) {
      arg$Branch$0$ = t.a;
      arg$Branch$1$ = t.cs;
      tmp = runtime.safeCall(f(arg$Branch$0$));
      tmp1 = NofibPrelude.map(lambda$5(minimax, f), arg$Branch$1$);
      return minimax.Branch(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #prune(n, t) {
    let scrut, scrut1, arg$Branch$0$, arg$Branch$1$, tmp;
    if (t instanceof minimax.Branch.class) {
      arg$Branch$0$ = t.a;
      arg$Branch$1$ = t.cs;
      scrut = n === 0;
      if (scrut === true) {
        return minimax.Branch(arg$Branch$0$, NofibPrelude.Nil)
      }
      scrut1 = n < 0;
      if (scrut1 === true) {
        throw runtime.safeCall(globalThis.Error("Tree.prune: < 0"))
      }
      tmp = NofibPrelude.map(lambda$6(minimax, n), arg$Branch$1$);
      return minimax.Branch(arg$Branch$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #opposite(p) {
    if (p instanceof minimax.X.class) {
      return minimax.O
    } else if (p instanceof minimax.O.class) {
      return minimax.X
    }
    throw runtime.safeCall(globalThis.Error("opposite"));
  }
  static #best(f, bs, ss) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
    if (bs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = bs.head;
      arg$Cons$1$ = bs.tail;
      if (ss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ss.head;
        arg$Cons$1$1 = ss.tail;
        return best_(minimax, f, arg$Cons$0$, arg$Cons$0$1, arg$Cons$1$, arg$Cons$1$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showMove(m) {
    let element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(m) && m.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      tmp = minimax.#showEvaluation(element1$);
      inlinedVal = go1(NofibPrelude, "\n", 0);
      tmp1 = minimax.#showBoard(element0$);
      tmp2 = NofibPrelude.append(inlinedVal, tmp1);
      return NofibPrelude.append(tmp, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #max_(e1, e2) {
    let scrut, arg$Score$0$, arg$Score$0$1;
    if (e1 instanceof minimax.XWin.class) {
      return minimax.XWin
    }
    if (e2 instanceof minimax.XWin.class) {
      return minimax.XWin
    } else if (e2 instanceof minimax.OWin.class) {
      return e1
    }
    if (e1 instanceof minimax.OWin.class) {
      return e2
    } else if (e1 instanceof minimax.Score.class) {
      arg$Score$0$ = e1.i;
      if (e2 instanceof minimax.Score.class) {
        arg$Score$0$1 = e2.i;
        scrut = arg$Score$0$ > arg$Score$0$1;
        if (scrut === true) {
          return minimax.Score(arg$Score$0$)
        }
        return minimax.Score(arg$Score$0$1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #min_(e1, e2) {
    let scrut, arg$Score$0$, arg$Score$0$1;
    if (e1 instanceof minimax.OWin.class) {
      return minimax.OWin
    }
    if (e2 instanceof minimax.OWin.class) {
      return minimax.OWin
    } else if (e2 instanceof minimax.XWin.class) {
      return e1
    }
    if (e1 instanceof minimax.XWin.class) {
      return e2
    } else if (e1 instanceof minimax.Score.class) {
      arg$Score$0$ = e1.i;
      if (e2 instanceof minimax.Score.class) {
        arg$Score$0$1 = e2.i;
        scrut = arg$Score$0$ < arg$Score$0$1;
        if (scrut === true) {
          return minimax.Score(arg$Score$0$)
        }
        return minimax.Score(arg$Score$0$1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mise(f, g, t) {
    let arg$Branch$0$, arg$Branch$1$, tmp, tmp1;
    if (t instanceof minimax.Branch.class) {
      arg$Branch$0$ = t.a;
      arg$Branch$1$ = t.cs;
      if (arg$Branch$1$ instanceof NofibPrelude.Nil.class) {
        return arg$Branch$0$
      }
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      tmp1 = NofibPrelude.map(lambda$7(minimax, f, g), arg$Branch$1$);
      return NofibPrelude.foldr(f, tmp, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #searchTree(p, board1) {
    let tmp, lambda$here;
    lambda$here = lambda$8(minimax, p);
    tmp = minimax.#repTree(lambda$9(minimax, p), lambda$here, board1);
    return minimax.#prune(5, tmp)
  }
  static #cropTree(t) {
    let arg$Branch$0$, arg$Branch$1$, arg$Score$0$, tmp, tmp1;
    if (t instanceof minimax.Branch.class) {
      arg$Branch$0$ = t.a;
      arg$Branch$1$ = t.cs;
      if (arg$Branch$1$ instanceof NofibPrelude.Nil.class) {
        return minimax.Branch(arg$Branch$0$, NofibPrelude.Nil)
      }
      if (arg$Branch$0$ instanceof minimax.Score.class) {
        arg$Score$0$ = arg$Branch$0$.i;
        tmp = minimax.Score(arg$Score$0$);
        tmp1 = NofibPrelude.map(minimax.#cropTree, arg$Branch$1$);
        return minimax.Branch(tmp, tmp1)
      }
      return minimax.Branch(arg$Branch$0$, NofibPrelude.Nil);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bestMove(p, f, g, b) {
    let tmp, tmp1, tmp2;
    tmp = minimax.#searchTree(p, b);
    tmp1 = minimax.#mapTree(minimax.#static1, tmp);
    tmp2 = minimax.#cropTree(tmp1);
    return minimax.#mise(f, g, tmp2)
  }
  static #alternate(player, f, g, board1) {
    let scrut, scrut1, scrut2, opposition, possibles, scores, boardd_eval, element1$, element0$, tmp, tmp1, tmp2, tmp3;
    scrut = minimax.#fullBoard(board1);
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = minimax.#static1(board1);
    scrut1 = minimax.#evaluationEq(tmp, minimax.XWin);
    if (scrut1 === true) {
      return NofibPrelude.Nil
    }
    tmp1 = minimax.#static1(board1);
    scrut2 = minimax.#evaluationEq(tmp1, minimax.OWin);
    if (scrut2 === true) {
      return NofibPrelude.Nil
    }
    opposition = minimax.#opposite(player);
    possibles = minimax.#newPositions(player, board1);
    scores = NofibPrelude.map(lambda$10(minimax, f, g, opposition), possibles);
    boardd_eval = minimax.#best(f, possibles, scores);
    if (runtime.Tuple.isArrayLike(boardd_eval) && boardd_eval.length === 2) {
      element0$ = runtime.Tuple.get(boardd_eval, 0);
      element1$ = runtime.Tuple.get(boardd_eval, 1);
      tmp2 = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      tmp3 = minimax.#alternate(opposition, g, f, element0$);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #prog(input) {
    let testBoard, game, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal, inlinedVal1, scrut;
    tmp = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(minimax.O, tmp);
    tmp2 = NofibPrelude.Cons(minimax.Empty, tmp1);
    tmp3 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(minimax.X, tmp3);
    tmp5 = NofibPrelude.Cons(minimax.Empty, tmp4);
    tmp6 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(minimax.Empty, tmp6);
    tmp8 = NofibPrelude.Cons(minimax.Empty, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    testBoard = NofibPrelude.Cons(tmp2, tmp10);
    scrut = input === "doesn't happen";
    if (scrut === true) {
      inlinedVal = NofibPrelude.append(testBoard, testBoard);
    } else {
      inlinedVal = testBoard;
    }
    game = minimax.#alternate(minimax.X, minimax.#max_, minimax.#min_, inlinedVal);
    inlinedVal1 = go1(NofibPrelude, "OXO\n", 0);
    tmp11 = NofibPrelude.map(minimax.#showMove, game);
    tmp12 = NofibPrelude.concat(tmp11);
    return NofibPrelude.append(inlinedVal1, tmp12)
  }
  static main() {
    let tmp;
    tmp = minimax.#prog("180000");
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "minimax"];
});
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { best_ as _$_modulePrivate_$_best_ };
export { board as _$_modulePrivate_$_board };
export { minimax1 as _$_modulePrivate_$_minimax };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default minimax1;
