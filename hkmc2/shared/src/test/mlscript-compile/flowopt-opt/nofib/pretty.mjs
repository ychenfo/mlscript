const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const ppNil$accessorSymbol = globalThis.Symbol("ppNil");
const ppInt$accessorSymbol = globalThis.Symbol("ppInt");
const ppBeside$accessorSymbol = globalThis.Symbol("ppBeside");
const ppBesideSP$accessorSymbol = globalThis.Symbol("ppBesideSP");
const ppAbove$accessorSymbol = globalThis.Symbol("ppAbove");
const ppHang$accessorSymbol = globalThis.Symbol("ppHang");
let pp_word, pretty_stuff, pretty1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, pretty_stuff$, pp_word$, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11;
pp_word$ = function pp_word$(pretty2) {
  return (a, b) => {
    return pp_word(pretty2, a, b)
  }
};
lambda$10 = (undefined, function (pretty2) {
  return (a, b) => {
    return pretty2[ppInt$accessorSymbol](-42, a, b)
  }
});
lambda$9 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda4(pretty2, a, b)
  }
});
lambda$8 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda5(pretty2, a, b)
  }
});
lambda$7 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda6(pretty2, a, b)
  }
});
lambda$11 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda7(pretty2, a, b)
  }
});
lambda7 = (undefined, function (pretty2, a, b) {
  let inlinedVal, tmp, inlinedVal1, inlinedVal2;
  inlinedVal = go(NofibPrelude, "This is the label", 0);
  inlinedVal1 = l(NofibPrelude, inlinedVal, 0);
  inlinedVal2 = pretty2.CStr(inlinedVal);
  tmp = a >= inlinedVal1;
  return pretty2.MkPrettyRep(inlinedVal2, inlinedVal1, false, tmp)
});
lambda$6 = (undefined, function (pretty2, pp_words) {
  return (a, b) => {
    return lambda8(pretty2, pp_words, a, b)
  }
});
lambda3 = (undefined, function (pretty2, a, b) {
  let inlinedVal, s, inlinedVal1, tmp, inlinedVal2, inlinedVal3;
  inlinedVal = -42 + "";
  s = inlinedVal;
  inlinedVal1 = go(NofibPrelude, s, 0);
  inlinedVal2 = l(NofibPrelude, inlinedVal1, 0);
  inlinedVal3 = pretty2.CStr(inlinedVal1);
  tmp = a >= inlinedVal2;
  return pretty2.MkPrettyRep(inlinedVal3, inlinedVal2, false, tmp)
});
lambda4 = (undefined, function (pretty2, a, b) {
  let tmp, inlinedVal;
  inlinedVal = pretty2.CCh("@");
  tmp = a >= 1;
  return pretty2.MkPrettyRep(inlinedVal, 1, false, tmp)
});
lambda5 = (undefined, function (pretty2, a, b) {
  let inlinedVal, tmp, inlinedVal1, inlinedVal2;
  inlinedVal = go(NofibPrelude, "This is a string", 0);
  inlinedVal1 = l(NofibPrelude, inlinedVal, 0);
  inlinedVal2 = pretty2.CStr(inlinedVal);
  tmp = a >= inlinedVal1;
  return pretty2.MkPrettyRep(inlinedVal2, inlinedVal1, false, tmp)
});
lambda6 = (undefined, function (pretty2, a, b) {
  let inlinedVal, tmp, inlinedVal1, inlinedVal2;
  inlinedVal = go(NofibPrelude, ", ", 0);
  inlinedVal1 = l(NofibPrelude, inlinedVal, 0);
  inlinedVal2 = pretty2.CStr(inlinedVal);
  tmp = a >= inlinedVal1;
  return pretty2.MkPrettyRep(inlinedVal2, inlinedVal1, false, tmp)
});
lambda8 = (undefined, function (pretty2, pp_words, a, b) {
  let inlinedVal;
  if (pp_words instanceof NofibPrelude.Nil.class) {
    inlinedVal = pretty2[ppNil$accessorSymbol];
    return pretty2[ppHang$accessorSymbol](lambda$11(pretty2), 8, inlinedVal, a, b)
  }
  inlinedVal = NofibPrelude.foldr1(lambda$2(pretty2), pp_words);
  return pretty2[ppHang$accessorSymbol](lambda$11(pretty2), 8, inlinedVal, a, b);
});
pretty_stuff$ = function pretty_stuff$(pretty2, pp_words) {
  return (a, b) => {
    return pretty_stuff(pretty2, pp_words, a, b)
  }
};
pp_word = function pp_word(pretty2, a, b) {
  let inlinedVal, tmp, inlinedVal1, inlinedVal2;
  inlinedVal = go(NofibPrelude, "xxxxx", 0);
  inlinedVal1 = l(NofibPrelude, inlinedVal, 0);
  inlinedVal2 = pretty2.CStr(inlinedVal);
  tmp = a >= inlinedVal1;
  return pretty2.MkPrettyRep(inlinedVal2, inlinedVal1, false, tmp)
};
pretty_stuff = function pretty_stuff(pretty2, pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ps, inlinedVal, ps1, baseCall;
  lambda$here = lambda$8(pretty2);
  tmp = NofibPrelude.Cons(lambda$here, NofibPrelude.Nil);
  lambda$here1 = lambda$9(pretty2);
  tmp1 = NofibPrelude.Cons(lambda$here1, tmp);
  lambda$here2 = lambda$10(pretty2);
  tmp2 = NofibPrelude.Cons(lambda$here2, tmp1);
  ps = tmp2;
  if (ps instanceof NofibPrelude.Nil.class) {
    inlinedVal = pretty2[ppNil$accessorSymbol];
  } else {
    inlinedVal = NofibPrelude.foldr1(lambda$(pretty2), ps);
  }
  lambda$here3 = lambda$6(pretty2, pp_words);
  tmp3 = NofibPrelude.Cons(lambda$here3, NofibPrelude.Nil);
  lambda$here4 = lambda$7(pretty2);
  tmp4 = NofibPrelude.Cons(lambda$here4, tmp3);
  tmp5 = NofibPrelude.Cons(inlinedVal, tmp4);
  ps1 = tmp5;
  if (ps1 instanceof NofibPrelude.Nil.class) {
    let tmp6;
    tmp6 = a >= 0;
    return pretty2.MkPrettyRep(pretty2.cNil, 0, true, tmp6)
  }
  baseCall = NofibPrelude.foldr1(lambda$4(pretty2), ps1);
  return runtime.safeCall(baseCall(a, b));
};
lambda$5 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppAbove$accessorSymbol](a, b, c, d)
  }
});
lambda11 = (undefined, function (pretty2, a, b, c, d) {
  return pretty2[ppAbove$accessorSymbol](a, b, c, d)
});
lambda$4 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$5(pretty2, a, b)
  }
});
lambda2 = (undefined, function (pretty2, a, b) {
  return lambda$5(pretty2, a, b)
});
lambda$3 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppBesideSP$accessorSymbol](a, b, c, d)
  }
});
lambda10 = (undefined, function (pretty2, a, b, c, d) {
  return pretty2[ppBesideSP$accessorSymbol](a, b, c, d)
});
lambda$2 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$3(pretty2, a, b)
  }
});
lambda1 = (undefined, function (pretty2, a, b) {
  return lambda$3(pretty2, a, b)
});
lambda$1 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppBeside$accessorSymbol](a, b, c, d)
  }
});
lambda9 = (undefined, function (pretty2, a, b, c, d) {
  return pretty2[ppBeside$accessorSymbol](a, b, c, d)
});
lambda$ = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$1(pretty2, a, b)
  }
});
lambda = (undefined, function (pretty2, a, b) {
  return lambda$1(pretty2, a, b)
});
(class pretty {
  static {
    pretty1 = this
  }
  static get [ppNil$accessorSymbol]() { return pretty.#ppNil; }
  static get [ppInt$accessorSymbol]() { return pretty.#ppInt; }
  static get [ppBeside$accessorSymbol]() { return pretty.#ppBeside; }
  static get [ppBesideSP$accessorSymbol]() { return pretty.#ppBesideSP; }
  static get [ppAbove$accessorSymbol]() { return pretty.#ppAbove; }
  static get [ppHang$accessorSymbol]() { return pretty.#ppHang; }
  static {
    (class CSeq {
      static {
        pretty.CSeq = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSeq"];
    });
    pretty.CAppend = function CAppend(a, b) {
      return globalThis.Object.freeze(new CAppend.class(a, b));
    };
    (class CAppend extends pretty.CSeq {
      static {
        pretty.CAppend.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CAppend", ["a", "b"]];
    });
    pretty.CIndent = function CIndent(a, b) {
      return globalThis.Object.freeze(new CIndent.class(a, b));
    };
    (class CIndent extends pretty.CSeq {
      static {
        pretty.CIndent.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CIndent", ["a", "b"]];
    });
    pretty.CStr = function CStr(a) {
      return globalThis.Object.freeze(new CStr.class(a));
    };
    (class CStr extends pretty.CSeq {
      static {
        pretty.CStr.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CStr", ["a"]];
    });
    pretty.CCh = function CCh(a) {
      return globalThis.Object.freeze(new CCh.class(a));
    };
    (class CCh extends pretty.CSeq {
      static {
        pretty.CCh.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CCh", ["a"]];
    });
    (class CNil extends pretty.CSeq {
      static {
        new this
      }
      constructor() {
        super();
        pretty.CNil = this;
        Object.defineProperty(this, "class", {
          value: CNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNil"];
    });
    (class CNewline extends pretty.CSeq {
      static {
        new this
      }
      constructor() {
        super();
        pretty.CNewline = this;
        Object.defineProperty(this, "class", {
          value: CNewline
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNewline"];
    });
    (class PprStyle {
      static {
        pretty.PprStyle = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PprStyle"];
    });
    (class PprForUser extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprForUser = this;
        Object.defineProperty(this, "class", {
          value: PprForUser
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprForUser"];
    });
    (class PprDebug extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprDebug = this;
        Object.defineProperty(this, "class", {
          value: PprDebug
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprDebug"];
    });
    (class PprShowAll extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprShowAll = this;
        Object.defineProperty(this, "class", {
          value: PprShowAll
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprShowAll"];
    });
    (class PprInterface extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprInterface = this;
        Object.defineProperty(this, "class", {
          value: PprInterface
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprInterface"];
    });
    pretty.cNil = pretty.CNil;
    pretty.cNL = pretty.CNewline;
    pretty.MkPrettyRep = function MkPrettyRep(cseq, n, b1, b2) {
      return globalThis.Object.freeze(new MkPrettyRep.class(cseq, n, b1, b2));
    };
    (class MkPrettyRep {
      static {
        pretty.MkPrettyRep.class = this
      }
      constructor(cseq, n, b1, b2) {
        this.cseq = cseq;
        this.n = n;
        this.b1 = b1;
        this.b2 = b2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MkPrettyRep", ["cseq", "n", "b1", "b2"]];
    });
  }
  static #flattenS_flatten(id, param0, param1, param2, param3) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let arg$Cons$0$, arg$Cons$1$, element1$, element0$;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                let param0_tmp;
                element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                param0_tmp = param0;
                param0 = element0$;
                param1 = param0_tmp;
                param2 = element1$;
                param3 = arg$Cons$1$;
                id = 1;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let arg$CCh$0$, arg$CStr$0$, arg$CIndent$0$, arg$CIndent$1$, arg$CAppend$0$, arg$CAppend$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
            if (param2 instanceof pretty.CNil.class) {
              param0 = param1;
              param1 = param3;
              id = 0;
              continue loopLabel
            } else if (param2 instanceof pretty.CAppend.class) {
              arg$CAppend$0$ = param2.a;
              arg$CAppend$1$ = param2.b;
              tmp = globalThis.Object.freeze([
                param0,
                arg$CAppend$1$
              ]);
              tmp1 = NofibPrelude.Cons(tmp, param3);
              param2 = arg$CAppend$0$;
              param3 = tmp1;
              id = 1;
              continue loopLabel
            } else if (param2 instanceof pretty.CIndent.class) {
              arg$CIndent$0$ = param2.a;
              arg$CIndent$1$ = param2.b;
              tmp2 = arg$CIndent$0$ + param0;
              param0 = tmp2;
              param2 = arg$CIndent$1$;
              id = 1;
              continue loopLabel
            } else if (param2 instanceof pretty.CNewline.class) {
              tmp3 = pretty.#flattenS_flatten(0, true, param3, undefined, undefined);
              return NofibPrelude.Cons("\n", tmp3)
            } else if (param2 instanceof pretty.CStr.class) {
              arg$CStr$0$ = param2.a;
              if (param1 === true) {
                tmp4 = pretty.#flattenS_flatten(0, false, param3, undefined, undefined);
                tmp5 = NofibPrelude.append(arg$CStr$0$, tmp4);
                return pretty.#mkIndent(param0, tmp5)
              }
              tmp6 = pretty.#flattenS_flatten(0, false, param3, undefined, undefined);
              return NofibPrelude.append(arg$CStr$0$, tmp6);
            } else if (param2 instanceof pretty.CCh.class) {
              arg$CCh$0$ = param2.a;
              if (param1 === true) {
                tmp7 = pretty.#flattenS_flatten(0, false, param3, undefined, undefined);
                tmp8 = NofibPrelude.Cons(arg$CCh$0$, tmp7);
                return pretty.#mkIndent(param0, tmp8)
              }
              tmp9 = pretty.#flattenS_flatten(0, false, param3, undefined, undefined);
              return NofibPrelude.Cons(arg$CCh$0$, tmp9);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #cAppend(cs1, cs2) {
    return pretty.CAppend(cs1, cs2)
  }
  static #cIndent(n, cs) {
    return pretty.CIndent(n, cs)
  }
  static #cStr(s) {
    return pretty.CStr(s)
  }
  static #cCh(c) {
    return pretty.CCh(c)
  }
  static #mkIndent(n, s) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    scrut = n === 0;
    if (scrut === true) {
      return s
    }
    scrut1 = n >= 8;
    if (scrut1 === true) {
      tmp = n - 8;
      tmp1 = pretty.#mkIndent(tmp, s);
      return NofibPrelude.Cons("\t", tmp1)
    }
    tmp2 = n - 1;
    tmp3 = pretty.#mkIndent(tmp2, s);
    return NofibPrelude.Cons(" ", tmp3);
  }
  static #flattenS(nlp, seqs) {
    return pretty.#flattenS_flatten(0, nlp, seqs, undefined, undefined)
  }
  static #flatten(n, nlp, cseq, seqs) {
    return pretty.#flattenS_flatten(1, n, nlp, cseq, seqs)
  }
  static #cShow(seq) {
    return pretty.#flatten(0, true, seq, NofibPrelude.Nil)
  }
  static #ppShow(width, p) {
    let scrut, arg$MkPrettyRep$0$;
    scrut = runtime.safeCall(p(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      return pretty.#cShow(arg$MkPrettyRep$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ppUnformatted(p) {
    let scrut, arg$MkPrettyRep$0$;
    scrut = runtime.safeCall(p(80, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      return pretty.#cShow(arg$MkPrettyRep$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ppNil(width, is_vert) {
    let tmp;
    tmp = width >= 0;
    return pretty.MkPrettyRep(pretty.cNil, 0, true, tmp)
  }
  static #ppStr(s, width, is_vert) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = l(NofibPrelude, s, 0);
    tmp = pretty.#cStr(s);
    tmp1 = width >= inlinedVal;
    return pretty.MkPrettyRep(tmp, inlinedVal, false, tmp1)
  }
  static #ppChar(c, width, is_vert) {
    let tmp, tmp1;
    tmp = pretty.#cCh(c);
    tmp1 = width >= 1;
    return pretty.MkPrettyRep(tmp, 1, false, tmp1)
  }
  static #ppInt(n, width, is_vert) {
    let inlinedVal, s, inlinedVal1;
    inlinedVal = n + "";
    s = inlinedVal;
    inlinedVal1 = go(NofibPrelude, s, 0);
    return pretty.#ppStr(inlinedVal1, width, is_vert)
  }
  static #pp_SP(a, b) {
    let inlinedVal;
    inlinedVal = go(NofibPrelude, ", ", 0);
    return pretty.#ppStr(inlinedVal, a, b)
  }
  static #ppSP(a, b) {
    return pretty.#ppChar(" ", a, b)
  }
  static #ppLbrack(a, b) {
    return pretty.#ppChar("[", a, b)
  }
  static #ppRbrack(a, b) {
    return pretty.#ppChar("]", a, b)
  }
  static #ppLparen(a, b) {
    return pretty.#ppChar("(", a, b)
  }
  static #ppRparen(a, b) {
    return pretty.#ppChar(")", a, b)
  }
  static #ppSemi(a, b) {
    return pretty.#ppChar(";", a, b)
  }
  static #ppComma(a, b) {
    return pretty.#ppChar(",", a, b)
  }
  static #andL(a, b) {
    if (a === true) {
      return b
    }
    return false;
  }
  static #orL(a, b) {
    if (a === true) {
      return true
    }
    return b;
  }
  static #ppBeside(p1, p2, width, is_vert) {
    let scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      tmp = width - arg$MkPrettyRep$1$;
      scrut1 = runtime.safeCall(p2(tmp, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        tmp1 = pretty.#cIndent(arg$MkPrettyRep$1$, arg$MkPrettyRep$0$1);
        tmp2 = pretty.#cAppend(arg$MkPrettyRep$0$, tmp1);
        tmp3 = arg$MkPrettyRep$1$ + arg$MkPrettyRep$1$1;
        tmp4 = pretty.#andL(arg$MkPrettyRep$2$, arg$MkPrettyRep$2$1);
        tmp5 = width >= 0;
        tmp6 = pretty.#andL(arg$MkPrettyRep$3$, arg$MkPrettyRep$3$1);
        tmp7 = pretty.#andL(tmp5, tmp6);
        return pretty.MkPrettyRep(tmp2, tmp3, tmp4, tmp7)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ppBesides(ps) {
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.#ppNil
    }
    return NofibPrelude.foldr1(lambda$(pretty), ps);
  }
  static #ppBesideSP(p1, p2, width, is_vert) {
    let scrut, scrut1, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      if (arg$MkPrettyRep$2$ === true) {
        tmp = 0;
      } else {
        tmp = arg$MkPrettyRep$1$ + 1;
      }
      tmp1 = width - tmp;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        if (arg$MkPrettyRep$2$ === true) {
          tmp2 = 0;
        } else {
          tmp2 = 1;
        }
        scrut2 = pretty.#orL(arg$MkPrettyRep$2$, arg$MkPrettyRep$2$1);
        if (scrut2 === true) {
          tmp3 = pretty.cNil;
        } else {
          tmp3 = pretty.#cCh(" ");
        }
        tmp4 = pretty.#cIndent(tmp, arg$MkPrettyRep$0$1);
        tmp5 = pretty.#cAppend(tmp3, tmp4);
        tmp6 = pretty.#cAppend(arg$MkPrettyRep$0$, tmp5);
        tmp7 = tmp + arg$MkPrettyRep$1$1;
        tmp8 = pretty.#andL(arg$MkPrettyRep$2$, arg$MkPrettyRep$2$1);
        tmp9 = width >= tmp2;
        tmp10 = pretty.#andL(arg$MkPrettyRep$3$, arg$MkPrettyRep$3$1);
        tmp11 = pretty.#andL(tmp9, tmp10);
        return pretty.MkPrettyRep(tmp6, tmp7, tmp8, tmp11)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ppCat(ps) {
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.#ppNil
    }
    return NofibPrelude.foldr1(lambda$2(pretty), ps);
  }
  static #ppAbove(p1, p2, width, is_vert) {
    let scrut, scrut1, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$1, tmp, tmp1, tmp2, tmp3;
    scrut = runtime.safeCall(p1(width, true));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$2$ = scrut.b1;
      scrut1 = runtime.safeCall(p2(width, true));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$ = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        scrut2 = pretty.#orL(arg$MkPrettyRep$2$, arg$MkPrettyRep$2$1);
        if (scrut2 === true) {
          tmp = pretty.cNil;
        } else {
          tmp = pretty.cNL;
        }
        tmp1 = pretty.#cAppend(tmp, arg$MkPrettyRep$0$1);
        tmp2 = pretty.#cAppend(arg$MkPrettyRep$0$, tmp1);
        tmp3 = pretty.#andL(arg$MkPrettyRep$2$, arg$MkPrettyRep$2$1);
        return pretty.MkPrettyRep(tmp2, arg$MkPrettyRep$1$, tmp3, false)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ppAboves(ps, a, b) {
    let baseCall;
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.#ppNil(a, b)
    }
    baseCall = NofibPrelude.foldr1(lambda$4(pretty), ps);
    return runtime.safeCall(baseCall(a, b));
  }
  static #ppNest(n, p, width, is_vert) {
    let scrut, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, tmp1, tmp2;
    if (is_vert === true) {
      tmp = width - n;
      scrut = runtime.safeCall(p(tmp, true));
      if (scrut instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$ = scrut.cseq;
        arg$MkPrettyRep$1$ = scrut.n;
        arg$MkPrettyRep$2$ = scrut.b1;
        arg$MkPrettyRep$3$ = scrut.b2;
        tmp1 = pretty.#cIndent(n, arg$MkPrettyRep$0$);
        tmp2 = arg$MkPrettyRep$1$ + n;
        return pretty.MkPrettyRep(tmp1, tmp2, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$)
      }
      return runtime.safeCall(p(width, false));
    }
    return runtime.safeCall(p(width, false));
  }
  static #ppHang(p1, n, p2, width, is_vert) {
    let scrut, scrut1, scrut2, scrut3, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$3$1, arg$MkPrettyRep$0$2, arg$MkPrettyRep$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      tmp = arg$MkPrettyRep$1$ + 1;
      tmp1 = width - tmp;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        tmp2 = width - n;
        scrut2 = runtime.safeCall(p2(tmp2, false));
        if (scrut2 instanceof pretty.MkPrettyRep.class) {
          arg$MkPrettyRep$0$2 = scrut2.cseq;
          arg$MkPrettyRep$1$2 = scrut2.n;
          if (arg$MkPrettyRep$2$ === true) {
            return runtime.safeCall(p2(width, is_vert))
          }
          tmp3 = arg$MkPrettyRep$1$ <= n;
          scrut3 = pretty.#orL(tmp3, arg$MkPrettyRep$3$1);
          if (scrut3 === true) {
            tmp4 = pretty.#cCh(" ");
            tmp5 = arg$MkPrettyRep$1$ + 1;
            tmp6 = pretty.#cIndent(tmp5, arg$MkPrettyRep$0$1);
            tmp7 = pretty.#cAppend(tmp4, tmp6);
            tmp8 = pretty.#cAppend(arg$MkPrettyRep$0$, tmp7);
            tmp9 = arg$MkPrettyRep$1$ + 1;
            tmp10 = tmp9 + arg$MkPrettyRep$1$1;
            tmp11 = pretty.#andL(arg$MkPrettyRep$3$, arg$MkPrettyRep$3$1);
            return pretty.MkPrettyRep(tmp8, tmp10, false, tmp11)
          }
          tmp12 = pretty.#cIndent(n, arg$MkPrettyRep$0$2);
          tmp13 = pretty.#cAppend(pretty.cNL, tmp12);
          tmp14 = pretty.#cAppend(arg$MkPrettyRep$0$, tmp13);
          return pretty.MkPrettyRep(tmp14, arg$MkPrettyRep$1$2, false, false);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testPretty_nofib() {
    let pp_words, tmp, pp_word$here, pretty_stuff$here, inlinedVal;
    pp_word$here = pp_word$(pretty);
    pp_words = NofibPrelude.replicate(50, pp_word$here);
    pretty_stuff$here = pretty_stuff$(pretty, pp_words);
    tmp = pretty.#ppShow(80, pretty_stuff$here);
    inlinedVal = go(NofibPrelude, "\n", 0);
    return NofibPrelude.append(tmp, inlinedVal)
  }
  static main() {
    let tmp;
    tmp = pretty.#testPretty_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"];
});
export { pp_word as _$_modulePrivate_$_pp_word };
export { pretty_stuff as _$_modulePrivate_$_pretty_stuff };
export { pretty1 as _$_modulePrivate_$_pretty };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { pretty_stuff$ as _$_modulePrivate_$_pretty_stuff$ };
export { pp_word$ as _$_modulePrivate_$_pp_word$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export default pretty1;
