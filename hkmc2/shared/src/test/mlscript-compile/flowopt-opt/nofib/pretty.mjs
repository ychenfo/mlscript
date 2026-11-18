const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const foldr1$accessorSymbol = globalThis.Symbol("foldr1");
let pretty1, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppAbove$ppAbove, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$1, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda1, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$2, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$_ppBesideSP$ppBesideSP, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$$lambda$, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$$lambda$, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_ppNil$ppNil, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppBeside$ppBeside, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$$lambda$, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$3, main_testPretty_nofib_pretty_stuff$_pretty_stuff_ppNil$ppNil, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda2, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$4, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda3, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$5, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda4, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$6, main_testPretty_nofib_pp_word$_pp_word$pp_word, main_testPretty_nofib_pp_word$$pp_word$;
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppAbove$ppAbove = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppAbove$ppAbove(p1, p2, width) {
  let scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$2$1, tmp;
  scrut = runtime.safeCall(p1(width));
  if (scrut instanceof pretty1.MkPrettyRep.class) {
    arg$MkPrettyRep$0$ = scrut.cseq;
    arg$MkPrettyRep$2$ = scrut.b1;
    scrut1 = runtime.safeCall(p2(width));
    if (scrut1 instanceof pretty1.MkPrettyRep.class) {
      let inlinedVal, inlinedVal1;
      arg$MkPrettyRep$0$1 = scrut1.cseq;
      arg$MkPrettyRep$2$1 = scrut1.b1;
      if (arg$MkPrettyRep$2$ === true) {
        tmp = pretty1.cNil;
      } else {
        if (arg$MkPrettyRep$2$1 === true) {
          tmp = pretty1.cNil;
        } else {
          tmp = pretty1.cNL;
        }
      }
      inlinedVal = pretty1.CAppend(tmp, arg$MkPrettyRep$0$1);
      inlinedVal1 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal);
      if (arg$MkPrettyRep$2$ === true) {
        return pretty1.MkPrettyRep(inlinedVal1, undefined, arg$MkPrettyRep$2$1, undefined)
      }
      return pretty1.MkPrettyRep(inlinedVal1, undefined, false, undefined);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$ = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a, b) => {
    return (eta$0$0) => {
      return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppAbove$ppAbove(a, b, eta$0$0)
    }
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.nofibStringToList(", ");
  pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  return pretty2.MkPrettyRep(inlinedVal, undefined, false, undefined)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$1 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, a)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda1 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, pp_words, a) {
  let inlinedVal, lambda$here, scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$2, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal1, tmp5, ls, tmp6, inlinedVal2;
  if (pp_words instanceof NofibPrelude.Nil.class) {
    inlinedVal = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_ppNil$ppNil;
  } else {
    lambda$here = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$$lambda$(pretty2);
    inlinedVal = pretty2[foldr1$accessorSymbol](lambda$here, pp_words);
  }
  tmp5 = NofibPrelude.nofibStringToList("This is the label");
  ls = pretty2[listLen$accessorSymbol](tmp5);
  inlinedVal2 = pretty2.CStr(tmp5);
  tmp6 = a >= ls;
  inlinedVal1 = pretty2.MkPrettyRep(inlinedVal2, ls, false, tmp6);
  if (inlinedVal1 instanceof pretty1.MkPrettyRep.class) {
    arg$MkPrettyRep$0$ = inlinedVal1.cseq;
    arg$MkPrettyRep$1$ = inlinedVal1.n;
    arg$MkPrettyRep$2$ = inlinedVal1.b1;
    tmp = arg$MkPrettyRep$1$ + 1;
    tmp1 = a - tmp;
    scrut = runtime.safeCall(inlinedVal(tmp1));
    if (scrut instanceof pretty1.MkPrettyRep.class) {
      arg$MkPrettyRep$0$1 = scrut.cseq;
      arg$MkPrettyRep$3$ = scrut.b2;
      tmp2 = a - 8;
      scrut1 = runtime.safeCall(inlinedVal(tmp2));
      if (scrut1 instanceof pretty1.MkPrettyRep.class) {
        arg$MkPrettyRep$0$2 = scrut1.cseq;
        if (arg$MkPrettyRep$2$ === true) {
          return runtime.safeCall(inlinedVal(a))
        }
        tmp3 = arg$MkPrettyRep$1$ <= 8;
        if (tmp3 === true) {
          let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
          inlinedVal3 = pretty1.CCh(" ");
          tmp4 = arg$MkPrettyRep$1$ + 1;
          inlinedVal4 = pretty1.CIndent(tmp4, arg$MkPrettyRep$0$1);
          inlinedVal5 = pretty1.CAppend(inlinedVal3, inlinedVal4);
          inlinedVal6 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal5);
          return pretty1.MkPrettyRep(inlinedVal6, undefined, false, undefined)
        }
        if (arg$MkPrettyRep$3$ === true) {
          let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
          inlinedVal3 = pretty1.CCh(" ");
          tmp4 = arg$MkPrettyRep$1$ + 1;
          inlinedVal4 = pretty1.CIndent(tmp4, arg$MkPrettyRep$0$1);
          inlinedVal5 = pretty1.CAppend(inlinedVal3, inlinedVal4);
          inlinedVal6 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal5);
          return pretty1.MkPrettyRep(inlinedVal6, undefined, false, undefined)
        }
        {
          let inlinedVal3, cs1, inlinedVal4, inlinedVal5;
          inlinedVal3 = pretty1.CIndent(8, arg$MkPrettyRep$0$2);
          cs1 = pretty1.cNL;
          inlinedVal4 = pretty1.CAppend(cs1, inlinedVal3);
          inlinedVal5 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal4);
          return pretty1.MkPrettyRep(inlinedVal5, undefined, false, undefined);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$2 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2, pp_words) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda1(pretty2, pp_words, a)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$_ppBesideSP$ppBesideSP = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$_ppBesideSP$ppBesideSP(p1, p2, width) {
  let scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut = runtime.safeCall(p1(width));
  if (scrut instanceof pretty1.MkPrettyRep.class) {
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
    scrut1 = runtime.safeCall(p2(tmp1));
    if (scrut1 instanceof pretty1.MkPrettyRep.class) {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4;
      arg$MkPrettyRep$0$1 = scrut1.cseq;
      arg$MkPrettyRep$1$1 = scrut1.n;
      arg$MkPrettyRep$2$1 = scrut1.b1;
      arg$MkPrettyRep$3$1 = scrut1.b2;
      if (arg$MkPrettyRep$2$ === true) {
        tmp2 = 0;
      } else {
        tmp2 = 1;
      }
      if (arg$MkPrettyRep$2$ === true) {
        tmp3 = pretty1.cNil;
      } else {
        if (arg$MkPrettyRep$2$1 === true) {
          tmp3 = pretty1.cNil;
        } else {
          let inlinedVal5;
          inlinedVal5 = pretty1.CCh(" ");
          tmp3 = inlinedVal5;
        }
      }
      inlinedVal = pretty1.CIndent(tmp, arg$MkPrettyRep$0$1);
      inlinedVal1 = pretty1.CAppend(tmp3, inlinedVal);
      inlinedVal2 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal1);
      tmp4 = tmp + arg$MkPrettyRep$1$1;
      if (arg$MkPrettyRep$2$ === true) {
        inlinedVal3 = arg$MkPrettyRep$2$1;
      } else {
        inlinedVal3 = false;
      }
      tmp5 = width >= tmp2;
      if (arg$MkPrettyRep$3$ === true) {
        inlinedVal4 = arg$MkPrettyRep$3$1;
      } else {
        inlinedVal4 = false;
      }
      if (tmp5 === true) {
        return pretty1.MkPrettyRep(inlinedVal2, tmp4, inlinedVal3, inlinedVal4)
      }
      return pretty1.MkPrettyRep(inlinedVal2, tmp4, inlinedVal3, false);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$$lambda$ = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$$lambda$(pretty2, a, b) {
  return (c) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$_ppBesideSP$ppBesideSP(a, b, c)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$$lambda$ = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$$lambda$(pretty2) {
  return (a, b) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_lambda$_lambda$$lambda$(pretty2, a, b)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_ppNil$ppNil = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda_ppNil$ppNil(width) {
  let tmp;
  tmp = width >= 0;
  return pretty1.MkPrettyRep(pretty1.cNil, 0, true, tmp)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppBeside$ppBeside = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppBeside$ppBeside(p1, p2, width) {
  let scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, tmp, tmp1;
  scrut = runtime.safeCall(p1(width));
  if (scrut instanceof pretty1.MkPrettyRep.class) {
    arg$MkPrettyRep$0$ = scrut.cseq;
    arg$MkPrettyRep$1$ = scrut.n;
    arg$MkPrettyRep$2$ = scrut.b1;
    tmp = width - arg$MkPrettyRep$1$;
    scrut1 = runtime.safeCall(p2(tmp));
    if (scrut1 instanceof pretty1.MkPrettyRep.class) {
      let inlinedVal, inlinedVal1;
      arg$MkPrettyRep$0$1 = scrut1.cseq;
      arg$MkPrettyRep$1$1 = scrut1.n;
      arg$MkPrettyRep$2$1 = scrut1.b1;
      inlinedVal = pretty1.CIndent(arg$MkPrettyRep$1$, arg$MkPrettyRep$0$1);
      inlinedVal1 = pretty1.CAppend(arg$MkPrettyRep$0$, inlinedVal);
      tmp1 = arg$MkPrettyRep$1$ + arg$MkPrettyRep$1$1;
      if (arg$MkPrettyRep$2$ === true) {
        return pretty1.MkPrettyRep(inlinedVal1, tmp1, arg$MkPrettyRep$2$1, undefined)
      }
      return pretty1.MkPrettyRep(inlinedVal1, tmp1, false, undefined);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$$lambda$ = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$$lambda$(pretty2, a, b) {
  return (c) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$_ppBeside$ppBeside(a, b, c)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$3 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a, b) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$$lambda$(pretty2, a, b)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_ppNil$ppNil = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_ppNil$ppNil(width) {
  return pretty1.MkPrettyRep(pretty1.cNil, undefined, true, undefined)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda2 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, a) {
  let tmp, inlinedVal, ls, tmp1, inlinedVal1;
  inlinedVal = -42 + "";
  tmp = NofibPrelude.nofibStringToList(inlinedVal);
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal1 = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal1, ls, false, tmp1)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$4 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda2(pretty2, a)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda3 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, a) {
  let tmp, inlinedVal;
  inlinedVal = pretty2.CCh("@");
  tmp = a >= 1;
  return pretty2.MkPrettyRep(inlinedVal, 1, false, tmp)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$5 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda3(pretty2, a)
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda4 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, a) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("This is a string");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$6 = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda4(pretty2, a)
  }
};
main_testPretty_nofib_pp_word$_pp_word$pp_word = function main_testPretty_nofib_pp_word$_pp_word$pp_word(pretty2, a) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("xxxxx");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
};
main_testPretty_nofib_pp_word$$pp_word$ = function main_testPretty_nofib_pp_word$$pp_word$(pretty2) {
  return (a) => {
    return main_testPretty_nofib_pp_word$_pp_word$pp_word(pretty2, a)
  }
};
(class pretty {
  static {
    pretty1 = this
  }
  static get [listLen$accessorSymbol]() { return pretty.#listLen; }
  static get [foldr1$accessorSymbol]() { return pretty.#foldr1; }
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
  static main() {
    let inlinedVal, pp_words, tmp, pp_word$here, arg$MkPrettyRep$0$, inlinedVal1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, inlinedVal2, baseCall, lambda$here5, lambda$here6;
    pp_word$here = main_testPretty_nofib_pp_word$$pp_word$(pretty1);
    pp_words = pretty1.#replicate(50, pp_word$here);
    lambda$here = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$6(pretty1);
    tmp1 = NofibPrelude.Cons(lambda$here, NofibPrelude.Nil);
    lambda$here1 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$5(pretty1);
    tmp2 = NofibPrelude.Cons(lambda$here1, tmp1);
    lambda$here2 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$4(pretty1);
    tmp3 = NofibPrelude.Cons(lambda$here2, tmp2);
    if (tmp3 instanceof NofibPrelude.Nil.class) {
      inlinedVal2 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_ppNil$ppNil;
    } else {
      lambda$here6 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$3(pretty1);
      inlinedVal2 = pretty1.#foldr1(lambda$here6, tmp3);
    }
    lambda$here3 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$2(pretty1, pp_words);
    tmp4 = NofibPrelude.Cons(lambda$here3, NofibPrelude.Nil);
    lambda$here4 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$1(pretty1);
    tmp5 = NofibPrelude.Cons(lambda$here4, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal2, tmp5);
    if (tmp6 instanceof NofibPrelude.Nil.class) {
      let seqs, inlinedVal3;
      inlinedVal1 = pretty1.MkPrettyRep(pretty1.cNil, undefined, undefined, undefined);
      arg$MkPrettyRep$0$ = inlinedVal1.cseq;
      seqs = NofibPrelude.Nil;
      inlinedVal3 = pretty1.#flattenS_flatten(1, 0, true, arg$MkPrettyRep$0$, seqs);
      tmp = NofibPrelude.nofibStringToList("\n");
      inlinedVal = pretty1.#append(inlinedVal3, tmp);
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    lambda$here5 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty1);
    baseCall = pretty1.#foldr1(lambda$here5, tmp6);
    inlinedVal1 = runtime.safeCall(baseCall(80));
    if (inlinedVal1 instanceof pretty1.MkPrettyRep.class) {
      let seqs, inlinedVal3;
      arg$MkPrettyRep$0$ = inlinedVal1.cseq;
      seqs = NofibPrelude.Nil;
      inlinedVal3 = pretty1.#flattenS_flatten(1, 0, true, arg$MkPrettyRep$0$, seqs);
      tmp = NofibPrelude.nofibStringToList("\n");
      inlinedVal = pretty1.#append(inlinedVal3, tmp);
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"];
});
export default pretty1;
