const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const foldr1$accessorSymbol = globalThis.Symbol("foldr1");
const ppNil$accessorSymbol = globalThis.Symbol("ppNil");
const ppBeside$accessorSymbol = globalThis.Symbol("ppBeside");
const ppBesideSP$accessorSymbol = globalThis.Symbol("ppBesideSP");
const ppAbove$accessorSymbol = globalThis.Symbol("ppAbove");
const ppHang$accessorSymbol = globalThis.Symbol("ppHang");
let pp_word, pretty_stuff, pretty1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, pretty_stuff$, pp_word$, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11;
pp_word$ = function pp_word$(pretty2) {
  return (a, b) => {
    return pp_word(pretty2, a, b)
  }
};
lambda$10 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda(pretty2, a, b)
  }
});
lambda$9 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda1(pretty2, a, b)
  }
});
lambda$8 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda2(pretty2, a, b)
  }
});
lambda$7 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda3(pretty2, a, b)
  }
});
lambda$11 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda4(pretty2, a, b)
  }
});
lambda4 = (undefined, function (pretty2, a, b) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
});
lambda$6 = (undefined, function (pretty2, pp_words) {
  return (a, b) => {
    return lambda5(pretty2, pp_words, a, b)
  }
});
lambda = (undefined, function (pretty2, a, b) {
  let tmp, inlinedVal, ls, tmp1, inlinedVal1;
  inlinedVal = -42 + "";
  tmp = NofibPrelude.nofibStringToList(inlinedVal);
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal1 = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal1, ls, false, tmp1)
});
lambda1 = (undefined, function (pretty2, a, b) {
  let tmp, inlinedVal;
  inlinedVal = pretty2.CCh("@");
  tmp = a >= 1;
  return pretty2.MkPrettyRep(inlinedVal, 1, false, tmp)
});
lambda2 = (undefined, function (pretty2, a, b) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("This is a string");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
});
lambda3 = (undefined, function (pretty2, a, b) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList(", ");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
});
lambda5 = (undefined, function (pretty2, pp_words, a, b) {
  let lambda$here, inlinedVal, lambda$here1;
  if (pp_words instanceof NofibPrelude.Nil.class) {
    inlinedVal = pretty2[ppNil$accessorSymbol];
  } else {
    lambda$here1 = lambda$2(pretty2);
    inlinedVal = pretty2[foldr1$accessorSymbol](lambda$here1, pp_words);
  }
  lambda$here = lambda$11(pretty2);
  return pretty2[ppHang$accessorSymbol](lambda$here, 8, inlinedVal, a, b)
});
pretty_stuff$ = function pretty_stuff$(pretty2, pp_words) {
  return (a, b) => {
    return pretty_stuff(pretty2, pp_words, a, b)
  }
};
pp_word = function pp_word(pretty2, a, b) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("xxxxx");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
};
pretty_stuff = function pretty_stuff(pretty2, pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, inlinedVal, baseCall, lambda$here5, lambda$here6;
  lambda$here = lambda$8(pretty2);
  tmp = NofibPrelude.Cons(lambda$here, NofibPrelude.Nil);
  lambda$here1 = lambda$9(pretty2);
  tmp1 = NofibPrelude.Cons(lambda$here1, tmp);
  lambda$here2 = lambda$10(pretty2);
  tmp2 = NofibPrelude.Cons(lambda$here2, tmp1);
  if (tmp2 instanceof NofibPrelude.Nil.class) {
    inlinedVal = pretty2[ppNil$accessorSymbol];
  } else {
    lambda$here6 = lambda$(pretty2);
    inlinedVal = pretty2[foldr1$accessorSymbol](lambda$here6, tmp2);
  }
  lambda$here3 = lambda$6(pretty2, pp_words);
  tmp3 = NofibPrelude.Cons(lambda$here3, NofibPrelude.Nil);
  lambda$here4 = lambda$7(pretty2);
  tmp4 = NofibPrelude.Cons(lambda$here4, tmp3);
  tmp5 = NofibPrelude.Cons(inlinedVal, tmp4);
  if (tmp5 instanceof NofibPrelude.Nil.class) {
    let tmp6;
    tmp6 = a >= 0;
    return pretty2.MkPrettyRep(pretty2.cNil, 0, true, tmp6)
  }
  lambda$here5 = lambda$4(pretty2);
  baseCall = pretty2[foldr1$accessorSymbol](lambda$here5, tmp5);
  return runtime.safeCall(baseCall(a, b));
};
lambda$5 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppAbove$accessorSymbol](a, b, c, d)
  }
});
lambda$4 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$5(pretty2, a, b)
  }
});
lambda$3 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppBesideSP$accessorSymbol](a, b, c, d)
  }
});
lambda$2 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$3(pretty2, a, b)
  }
});
lambda$1 = (undefined, function (pretty2, a, b) {
  return (c, d) => {
    return pretty2[ppBeside$accessorSymbol](a, b, c, d)
  }
});
lambda$ = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$1(pretty2, a, b)
  }
});
(class pretty {
  static {
    pretty1 = this
  }
  static get [listLen$accessorSymbol]() { return pretty.#listLen; }
  static get [foldr1$accessorSymbol]() { return pretty.#foldr1; }
  static get [ppNil$accessorSymbol]() { return pretty.#ppNil; }
  static get [ppBeside$accessorSymbol]() { return pretty.#ppBeside; }
  static get [ppBesideSP$accessorSymbol]() { return pretty.#ppBesideSP; }
  static get [ppAbove$accessorSymbol]() { return pretty.#ppAbove; }
  static get [ppHang$accessorSymbol]() { return pretty.#ppHang; }
  static {
    pretty.CAppend = function CAppend(a, b) {
      return globalThis.Object.freeze(new CAppend.class(a, b));
    };
    (class CAppend {
      static {
        pretty.CAppend.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CAppend", ["a", "b"]];
    });
    pretty.CIndent = function CIndent(a, b) {
      return globalThis.Object.freeze(new CIndent.class(a, b));
    };
    (class CIndent {
      static {
        pretty.CIndent.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CIndent", ["a", "b"]];
    });
    pretty.CStr = function CStr(a) {
      return globalThis.Object.freeze(new CStr.class(a));
    };
    (class CStr {
      static {
        pretty.CStr.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CStr", ["a"]];
    });
    pretty.CCh = function CCh(a) {
      return globalThis.Object.freeze(new CCh.class(a));
    };
    (class CCh {
      static {
        pretty.CCh.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CCh", ["a"]];
    });
    (class CNil {
      static {
        new this
      }
      constructor() {
        pretty.CNil = this;
        Object.defineProperty(this, "class", {
          value: CNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNil"];
    });
    (class CNewline {
      static {
        new this
      }
      constructor() {
        pretty.CNewline = this;
        Object.defineProperty(this, "class", {
          value: CNewline
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNewline"];
    });
    (class PprForUser {
      static {
        new this
      }
      constructor() {
        pretty.PprForUser = this;
        Object.defineProperty(this, "class", {
          value: PprForUser
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprForUser"];
    });
    (class PprDebug {
      static {
        new this
      }
      constructor() {
        pretty.PprDebug = this;
        Object.defineProperty(this, "class", {
          value: PprDebug
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprDebug"];
    });
    (class PprShowAll {
      static {
        new this
      }
      constructor() {
        pretty.PprShowAll = this;
        Object.defineProperty(this, "class", {
          value: PprShowAll
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprShowAll"];
    });
    (class PprInterface {
      static {
        new this
      }
      constructor() {
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
                tmp5 = pretty.#append(arg$CStr$0$, tmp4);
                return pretty.#mkIndent(param0, tmp5)
              }
              tmp6 = pretty.#flattenS_flatten(0, false, param3, undefined, undefined);
              return pretty.#append(arg$CStr$0$, tmp6);
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
      tmp = pretty.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldr1(f, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return arg$Cons$0$
      }
      tmp = pretty.#foldr1(f, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
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
    tmp1 = pretty.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #cAppend(cs1, cs2) {
    return pretty.CAppend(cs1, cs2)
  }
  static #cIndent(n, cs) {
    return pretty.CIndent(n, cs)
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
  static #ppNil(width, is_vert) {
    let tmp;
    tmp = width >= 0;
    return pretty.MkPrettyRep(pretty.cNil, 0, true, tmp)
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
    let pp_words, tmp, tmp1, pp_word$here, pretty_stuff$here;
    pp_word$here = pp_word$(pretty);
    pp_words = pretty.#replicate(50, pp_word$here);
    pretty_stuff$here = pretty_stuff$(pretty, pp_words);
    tmp = pretty.#ppShow(80, pretty_stuff$here);
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return pretty.#append(tmp, tmp1)
  }
  static main() {
    let tmp;
    tmp = pretty.#testPretty_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"];
});
export default pretty1;
