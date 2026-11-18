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
let pp_word, pretty1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, pp_word$, lambda$6, lambda$7, lambda$8, lambda$9, main_testPretty_nofib_ppShow_cShow_flatten$flatten, main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent, main_testPretty_nofib_ppShow_cShow_flatten_append$append, main_testPretty_nofib_ppShow_cShow_flatten_append$append1, main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent1, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda, main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$, main_testPretty_nofib_ppShow_cShow_flatten$seqs_Nil, main_testPretty_nofib_ppShow_cShow_flatten$seqs_Cons, main_testPretty_nofib_ppShow_cShow_flatten$arg$Cons$0$_tup2, main_testPretty_nofib_append$xs_Cons, main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker, main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker1;
main_testPretty_nofib_ppShow_cShow_flatten$flatten = function main_testPretty_nofib_ppShow_cShow_flatten$flatten(n, nlp, cseq, seqs) {
  loopLabel: while (true) {
    let arg$CCh$0$, arg$CStr$0$, arg$CIndent$0$, arg$CIndent$1$, arg$CAppend$0$, arg$CAppend$1$, tmp, tmp1, tmp2;
    if (cseq instanceof pretty1.CNil.class) {
      return seqs(nlp)
    } else if (cseq instanceof pretty1.CAppend.class) {
      let Cons_head;
      arg$CAppend$0$ = cseq.a;
      arg$CAppend$1$ = cseq.b;
      Cons_head = main_testPretty_nofib_ppShow_cShow_flatten$arg$Cons$0$_tup2(n, arg$CAppend$1$);
      cseq = arg$CAppend$0$;
      seqs = main_testPretty_nofib_ppShow_cShow_flatten$seqs_Cons(Cons_head, seqs);
      continue loopLabel
    } else if (cseq instanceof pretty1.CIndent.class) {
      arg$CIndent$0$ = cseq.a;
      arg$CIndent$1$ = cseq.b;
      tmp = arg$CIndent$0$ + n;
      n = tmp;
      cseq = arg$CIndent$1$;
      continue loopLabel
    } else if (cseq instanceof pretty1.CNewline.class) {
      let inlinedVal;
      inlinedVal = seqs(true);
      return main_testPretty_nofib_append$xs_Cons("\n", inlinedVal)
    } else if (cseq instanceof pretty1.CStr.class) {
      arg$CStr$0$ = cseq.a;
      if (nlp === true) {
        let inlinedVal;
        inlinedVal = seqs(false);
        tmp1 = main_testPretty_nofib_ppShow_cShow_flatten_append$append(arg$CStr$0$, inlinedVal);
        return main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent(n, tmp1)
      }
      {
        let inlinedVal;
        inlinedVal = seqs(false);
        return main_testPretty_nofib_ppShow_cShow_flatten_append$append1(arg$CStr$0$, inlinedVal);
      }
    } else if (cseq instanceof pretty1.CCh.class) {
      arg$CCh$0$ = cseq.a;
      if (nlp === true) {
        let inlinedVal;
        inlinedVal = seqs(false);
        tmp2 = main_testPretty_nofib_append$xs_Cons(arg$CCh$0$, inlinedVal);
        return main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent1(n, tmp2)
      }
      {
        let inlinedVal;
        inlinedVal = seqs(false);
        return main_testPretty_nofib_append$xs_Cons(arg$CCh$0$, inlinedVal);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent = function main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent(n, s) {
  return (eta$0$0) => {
    return main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker1(n, s, eta$0$0)
  }
};
main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker1 = function main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker(n, s, eta$0$0) {
  let scrut, scrut1, tmp, tmp1;
  scrut = n === 0;
  if (scrut === true) {
    return s(eta$0$0)
  }
  scrut1 = n >= 8;
  if (scrut1 === true) {
    let inlinedVal;
    tmp = n - 8;
    inlinedVal = main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker1(tmp, s, eta$0$0);
    return NofibPrelude.Cons("\t", inlinedVal)
  }
  {
    let inlinedVal;
    tmp1 = n - 1;
    inlinedVal = main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker1(tmp1, s, eta$0$0);
    return NofibPrelude.Cons(" ", inlinedVal);
  }
};
main_testPretty_nofib_ppShow_cShow_flatten_append$append = function main_testPretty_nofib_ppShow_cShow_flatten_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPretty_nofib_ppShow_cShow_flatten_append$append(arg$Cons$1$, ys);
    return main_testPretty_nofib_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_ppShow_cShow_flatten_append$append1 = function main_testPretty_nofib_ppShow_cShow_flatten_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPretty_nofib_ppShow_cShow_flatten_append$append1(arg$Cons$1$, ys);
    return main_testPretty_nofib_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent1 = function main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent(n, s) {
  return (eta$0$0) => {
    return main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker(n, s, eta$0$0)
  }
};
main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker = function main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker(n, s, eta$0$0) {
  let scrut, scrut1, tmp, tmp1;
  scrut = n === 0;
  if (scrut === true) {
    return s(eta$0$0)
  }
  scrut1 = n >= 8;
  if (scrut1 === true) {
    let inlinedVal;
    tmp = n - 8;
    inlinedVal = main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker(tmp, s, eta$0$0);
    return NofibPrelude.Cons("\t", inlinedVal)
  }
  {
    let inlinedVal;
    tmp1 = n - 1;
    inlinedVal = main_testPretty_nofib_ppShow_cShow_flatten_mkIndent$mkIndent$worker(tmp1, s, eta$0$0);
    return NofibPrelude.Cons(" ", inlinedVal);
  }
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, pp_words, a) {
  let inlinedVal, lambda$here, tmp, ls, tmp1, inlinedVal1, fv_tmp, fv_tmp1, fv_scrut, fv_arg$MkPrettyRep$0$, fv_arg$MkPrettyRep$1$, fv_arg$MkPrettyRep$3$, fv_tmp2, fv_scrut1, fv_arg$MkPrettyRep$0$1, fv_arg$MkPrettyRep$1$1, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6;
  if (pp_words instanceof NofibPrelude.Nil.class) {
    inlinedVal = pretty2[ppNil$accessorSymbol];
  } else {
    lambda$here = lambda$2(pretty2);
    inlinedVal = pretty2[foldr1$accessorSymbol](lambda$here, pp_words);
  }
  tmp = NofibPrelude.nofibStringToList("This is the label");
  ls = pretty1[listLen$accessorSymbol](tmp);
  inlinedVal1 = pretty1.CStr(tmp);
  tmp1 = a >= ls;
  fv_tmp = ls + 1;
  fv_tmp1 = a - fv_tmp;
  fv_scrut = runtime.safeCall(inlinedVal(fv_tmp1));
  if (fv_scrut instanceof pretty1.MkPrettyRep.class) {
    fv_arg$MkPrettyRep$0$ = fv_scrut.cseq;
    fv_arg$MkPrettyRep$1$ = fv_scrut.n;
    fv_arg$MkPrettyRep$3$ = fv_scrut.b2;
    fv_tmp2 = a - 8;
    fv_scrut1 = runtime.safeCall(inlinedVal(fv_tmp2));
    if (fv_scrut1 instanceof pretty1.MkPrettyRep.class) {
      fv_arg$MkPrettyRep$0$1 = fv_scrut1.cseq;
      fv_arg$MkPrettyRep$1$1 = fv_scrut1.n;
      if (false === true) {
        return runtime.safeCall(inlinedVal(a))
      }
      {
        let inlinedVal2;
        fv_tmp3 = ls <= 8;
        if (fv_tmp3 === true) {
          inlinedVal2 = true;
        } else {
          inlinedVal2 = fv_arg$MkPrettyRep$3$;
        }
        if (inlinedVal2 === true) {
          let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
          inlinedVal3 = pretty1.CCh(" ");
          fv_tmp4 = ls + 1;
          inlinedVal4 = pretty1.CIndent(fv_tmp4, fv_arg$MkPrettyRep$0$);
          inlinedVal5 = pretty1.CAppend(inlinedVal3, inlinedVal4);
          inlinedVal6 = pretty1.CAppend(inlinedVal1, inlinedVal5);
          fv_tmp5 = ls + 1;
          fv_tmp6 = fv_tmp5 + fv_arg$MkPrettyRep$1$;
          if (tmp1 === true) {
            return pretty1.MkPrettyRep(inlinedVal6, fv_tmp6, false, fv_arg$MkPrettyRep$3$)
          }
          return pretty1.MkPrettyRep(inlinedVal6, fv_tmp6, false, false);
        }
        {
          let inlinedVal3, cs1, inlinedVal4, inlinedVal5;
          inlinedVal3 = pretty1.CIndent(8, fv_arg$MkPrettyRep$0$1);
          cs1 = pretty1.cNL;
          inlinedVal4 = pretty1.CAppend(cs1, inlinedVal3);
          inlinedVal5 = pretty1.CAppend(inlinedVal1, inlinedVal4);
          return pretty1.MkPrettyRep(inlinedVal5, fv_arg$MkPrettyRep$1$1, false, false);
        }
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$ = function main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty2, pp_words) {
  return (a) => {
    return main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$_lambda$lambda(pretty2, pp_words, a)
  }
};
main_testPretty_nofib_ppShow_cShow_flatten$seqs_Nil = function main_testPretty_nofib_ppShow_cShow_flatten$seqs_Nil() {
  return (fv_nlp) => {
    return (eta$0$0) => {
      return eta$0$0
    }
  }
};
main_testPretty_nofib_ppShow_cShow_flatten$seqs_Cons = function main_testPretty_nofib_ppShow_cShow_flatten$seqs_Cons(Cons_head, Cons_tail) {
  return (fv_nlp) => {
    return Cons_head(Cons_tail, fv_nlp)
  }
};
main_testPretty_nofib_ppShow_cShow_flatten$arg$Cons$0$_tup2 = function main_testPretty_nofib_ppShow_cShow_flatten$arg$Cons$0$_tup2(tup2_0, tup2_1) {
  return (fv_arg$Cons$1$, fv_nlp) => {
    return main_testPretty_nofib_ppShow_cShow_flatten$flatten(tup2_0, fv_nlp, tup2_1, fv_arg$Cons$1$)
  }
};
main_testPretty_nofib_append$xs_Cons = function main_testPretty_nofib_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
pp_word$ = function pp_word$(pretty2) {
  return (a) => {
    return pp_word(pretty2, a)
  }
};
lambda$9 = (undefined, function (pretty2) {
  return (a) => {
    return lambda(pretty2, a)
  }
});
lambda$8 = (undefined, function (pretty2) {
  return (a) => {
    return lambda1(pretty2, a)
  }
});
lambda$7 = (undefined, function (pretty2) {
  return (a) => {
    return lambda2(pretty2, a)
  }
});
lambda$6 = (undefined, function (pretty2) {
  return (a) => {
    return lambda3(pretty2, a)
  }
});
lambda = (undefined, function (pretty2, a) {
  let tmp, inlinedVal, ls, tmp1, inlinedVal1;
  inlinedVal = -42 + "";
  tmp = NofibPrelude.nofibStringToList(inlinedVal);
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal1 = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal1, ls, false, tmp1)
});
lambda1 = (undefined, function (pretty2, a) {
  let tmp, inlinedVal;
  inlinedVal = pretty2.CCh("@");
  tmp = a >= 1;
  return pretty2.MkPrettyRep(inlinedVal, 1, false, tmp)
});
lambda2 = (undefined, function (pretty2, a) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("This is a string");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
});
lambda3 = (undefined, function (pretty2, a) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList(", ");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
});
pp_word = function pp_word(pretty2, a) {
  let tmp, ls, tmp1, inlinedVal;
  tmp = NofibPrelude.nofibStringToList("xxxxx");
  ls = pretty2[listLen$accessorSymbol](tmp);
  inlinedVal = pretty2.CStr(tmp);
  tmp1 = a >= ls;
  return pretty2.MkPrettyRep(inlinedVal, ls, false, tmp1)
};
lambda$5 = (undefined, function (pretty2, a, b) {
  return (c) => {
    return pretty2[ppAbove$accessorSymbol](a, b, c)
  }
});
lambda$4 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$5(pretty2, a, b)
  }
});
lambda$3 = (undefined, function (pretty2, a, b) {
  return (c) => {
    return pretty2[ppBesideSP$accessorSymbol](a, b, c)
  }
});
lambda$2 = (undefined, function (pretty2) {
  return (a, b) => {
    return lambda$3(pretty2, a, b)
  }
});
lambda$1 = (undefined, function (pretty2, a, b) {
  return (c) => {
    return pretty2[ppBeside$accessorSymbol](a, b, c)
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
  static #ppNil(width) {
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
  static #ppBeside(p1, p2, width) {
    let scrut, scrut1, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    scrut = runtime.safeCall(p1(width));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      tmp = width - arg$MkPrettyRep$1$;
      scrut1 = runtime.safeCall(p2(tmp));
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
  static #ppBesideSP(p1, p2, width) {
    let scrut, scrut1, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = runtime.safeCall(p1(width));
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
      scrut1 = runtime.safeCall(p2(tmp1));
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
  static #ppAbove(p1, p2, width) {
    let scrut, scrut1, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$1, tmp, tmp1, tmp2, tmp3;
    scrut = runtime.safeCall(p1(width));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$2$ = scrut.b1;
      scrut1 = runtime.safeCall(p2(width));
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
  static main() {
    let pp_words, tmp, pp_word$here, inlinedVal, arg$MkPrettyRep$0$, inlinedVal1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, inlinedVal2, baseCall, lambda$here5, lambda$here6;
    pp_word$here = pp_word$(pretty1);
    pp_words = pretty1.#replicate(50, pp_word$here);
    lambda$here = lambda$7(pretty1);
    tmp1 = NofibPrelude.Cons(lambda$here, NofibPrelude.Nil);
    lambda$here1 = lambda$8(pretty1);
    tmp2 = NofibPrelude.Cons(lambda$here1, tmp1);
    lambda$here2 = lambda$9(pretty1);
    tmp3 = NofibPrelude.Cons(lambda$here2, tmp2);
    if (tmp3 instanceof NofibPrelude.Nil.class) {
      inlinedVal2 = pretty1.#ppNil;
    } else {
      lambda$here6 = lambda$(pretty1);
      inlinedVal2 = pretty1.#foldr1(lambda$here6, tmp3);
    }
    lambda$here3 = main_testPretty_nofib_pretty_stuff$_pretty_stuff_lambda$$lambda$(pretty1, pp_words);
    tmp4 = NofibPrelude.Cons(lambda$here3, NofibPrelude.Nil);
    lambda$here4 = lambda$6(pretty1);
    tmp5 = NofibPrelude.Cons(lambda$here4, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal2, tmp5);
    if (tmp6 instanceof NofibPrelude.Nil.class) {
      let inlinedVal3, deforest$lam;
      inlinedVal1 = pretty1.MkPrettyRep(pretty1.cNil, undefined, undefined, undefined);
      arg$MkPrettyRep$0$ = inlinedVal1.cseq;
      deforest$lam = main_testPretty_nofib_ppShow_cShow_flatten$seqs_Nil();
      inlinedVal3 = main_testPretty_nofib_ppShow_cShow_flatten$flatten(0, true, arg$MkPrettyRep$0$, deforest$lam);
      tmp = NofibPrelude.nofibStringToList("\n");
      inlinedVal = inlinedVal3(tmp);
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    lambda$here5 = lambda$4(pretty1);
    baseCall = pretty1.#foldr1(lambda$here5, tmp6);
    inlinedVal1 = runtime.safeCall(baseCall(80));
    if (inlinedVal1 instanceof pretty1.MkPrettyRep.class) {
      let inlinedVal3, deforest$lam;
      arg$MkPrettyRep$0$ = inlinedVal1.cseq;
      deforest$lam = main_testPretty_nofib_ppShow_cShow_flatten$seqs_Nil();
      inlinedVal3 = main_testPretty_nofib_ppShow_cShow_flatten$flatten(0, true, arg$MkPrettyRep$0$, deforest$lam);
      tmp = NofibPrelude.nofibStringToList("\n");
      inlinedVal = inlinedVal3(tmp);
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"];
});
export default pretty1;
