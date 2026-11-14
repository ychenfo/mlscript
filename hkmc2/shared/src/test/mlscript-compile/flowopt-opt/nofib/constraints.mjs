const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda3 as lambda } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$2 as lambda$ } from "./NofibPrelude.mjs";
const maxLevel$accessorSymbol = globalThis.Symbol("maxLevel");
const safe$accessorSymbol = globalThis.Symbol("safe");
const label$accessorSymbol = globalThis.Symbol("label");
const mapTree$accessorSymbol = globalThis.Symbol("mapTree");
const foldTree$accessorSymbol = globalThis.Symbol("foldTree");
const leaves$accessorSymbol = globalThis.Symbol("leaves");
const initTree$accessorSymbol = globalThis.Symbol("initTree");
const earliestInconsistency$accessorSymbol = globalThis.Symbol("earliestInconsistency");
const knownConflict$accessorSymbol = globalThis.Symbol("knownConflict");
const fillTable$accessorSymbol = globalThis.Symbol("fillTable");
const cacheChecks$accessorSymbol = globalThis.Symbol("cacheChecks");
const combine$accessorSymbol = globalThis.Symbol("combine");
const collect$accessorSymbol = globalThis.Symbol("collect");
let f1, lscomp1, next, f2, f3, lscomp2, lscomp11, lscomp21, f4, lscomp12, f5, f7, f6, lscomp13, f8, constraints1, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda$1, lambda$2, f1$, lambda$3, lambda$4, lambda$5, next$, lambda$6, f2$, lambda$7, lambda$8, lambda$9, f3$, lambda$10, f4$, lambda$11, lambda$12, f7$, f6$, f8$, lambda$13;
lambda$13 = (undefined, function (constraints2, n) {
  return (x) => {
    return lambda14(constraints2, n, x)
  }
});
lambda14 = (undefined, function (constraints2, n, x) {
  let inlinedVal, labeler, inlinedVal1, tmp, tmp1, tmp2, inlinedVal2, p, arg$CSP$0$, arg$CSP$1$, next$here;
  inlinedVal = constraints2.CSP(n, n, constraints2[safe$accessorSymbol]);
  labeler = x;
  if (inlinedVal instanceof constraints2.CSP.class) {
    let p1, inlinedVal3, f1$here;
    arg$CSP$0$ = inlinedVal.vars;
    arg$CSP$1$ = inlinedVal.vals;
    next$here = next$(constraints2, arg$CSP$0$, arg$CSP$1$);
    inlinedVal2 = constraints2[initTree$accessorSymbol](next$here, NofibPrelude.Nil);
    tmp = runtime.safeCall(labeler(inlinedVal, inlinedVal2));
    p = lambda$8(constraints2);
    p1 = lambda$4(p);
    f1$here = f1$(constraints2, p1);
    inlinedVal3 = constraints2[foldTree$accessorSymbol](f1$here, tmp);
    tmp1 = constraints2[leaves$accessorSymbol](inlinedVal3);
    tmp2 = NofibPrelude.filter(lambda$9(constraints2), tmp1);
    inlinedVal1 = NofibPrelude.map(NofibPrelude.fst, tmp2);
    return l(NofibPrelude, inlinedVal1, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lscomp13 = function lscomp1(constraints2, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = NofibPrelude.all(constraints2[knownConflict$accessorSymbol], arg$Cons$0$);
      if (scrut === true) {
        tmp = lscomp13(constraints2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
f8$ = function f8$(constraints2) {
  return (tp2) => {
    return f8(constraints2, tp2)
  }
};
f8 = function f8(constraints2, tp2) {
  let wipedDomains, element1$, element0$, element1$1, element0$1, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    element0$ = runtime.Tuple.get(tp2, 0);
    element1$ = runtime.Tuple.get(tp2, 1);
    if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
      element0$1 = runtime.Tuple.get(element0$, 0);
      element1$1 = runtime.Tuple.get(element0$, 1);
      wipedDomains = lscomp13(constraints2, element1$);
      if (wipedDomains instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          element0$1,
          element1$1
        ])
      }
      {
        let inlinedVal;
        if (wipedDomains instanceof NofibPrelude.Cons.class) {
          inlinedVal = wipedDomains.head;
          tmp1 = constraints2[collect$accessorSymbol](inlinedVal);
          tmp = constraints2.Known(tmp1);
          return globalThis.Object.freeze([
            element0$1,
            tmp
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
f6$ = function f6$(constraints2) {
  return (tp2, chs) => {
    return f6(constraints2, tp2, chs)
  }
};
f6 = function f6(constraints2, tp2, chs) {
  let element1$, element0$, arg$Known$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    element0$ = runtime.Tuple.get(tp2, 0);
    element1$ = runtime.Tuple.get(tp2, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      tmp = constraints2.Known(arg$Known$0$);
      tmp1 = globalThis.Object.freeze([
        element0$,
        tmp
      ]);
      return constraints2.Node(tmp1, chs)
    } else if (element1$ instanceof constraints2.Unknown.class) {
      tmp2 = NofibPrelude.map(constraints2[label$accessorSymbol], chs);
      tmp3 = constraints2[combine$accessorSymbol](tmp2, NofibPrelude.Nil);
      tmp4 = constraints2.Known(tmp3);
      tmp5 = globalThis.Object.freeze([
        element0$,
        tmp4
      ]);
      return constraints2.Node(tmp5, chs)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
f7$ = function f7$(constraints2) {
  return (tp2, chs) => {
    return f7(constraints2, tp2, chs)
  }
};
f7 = function f7(constraints2, tp2, chs) {
  let cs_, element1$, element0$, arg$Known$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    element0$ = runtime.Tuple.get(tp2, 0);
    element1$ = runtime.Tuple.get(tp2, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      tmp = constraints2.Known(arg$Known$0$);
      tmp1 = globalThis.Object.freeze([
        element0$,
        tmp
      ]);
      return constraints2.Node(tmp1, chs)
    } else if (element1$ instanceof constraints2.Unknown.class) {
      let arg$Known$0$1;
      tmp2 = NofibPrelude.map(constraints2[label$accessorSymbol], chs);
      tmp3 = constraints2[combine$accessorSymbol](tmp2, NofibPrelude.Nil);
      cs_ = constraints2.Known(tmp3);
      if (cs_ instanceof constraints2.Known.class) {
        arg$Known$0$1 = cs_.vs;
        if (arg$Known$0$1 instanceof NofibPrelude.Cons.class) {
          tmp4 = globalThis.Object.freeze([
            element0$,
            cs_
          ]);
          return constraints2.Node(tmp4, NofibPrelude.Nil)
        }
        tmp5 = globalThis.Object.freeze([
          element0$,
          cs_
        ]);
        return constraints2.Node(tmp5, chs);
      }
      tmp5 = globalThis.Object.freeze([
        element0$,
        cs_
      ]);
      return constraints2.Node(tmp5, chs);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$12 = (undefined, function (constraints2, csp, tbl, s) {
  return (x) => {
    return lambda13(constraints2, csp, tbl, s, x)
  }
});
lambda13 = (undefined, function (constraints2, csp, tbl, s, x) {
  let tmp, inlinedVal;
  if (tbl instanceof NofibPrelude.Cons.class) {
    inlinedVal = tbl.tail;
    tmp = constraints2[fillTable$accessorSymbol](s, csp, inlinedVal);
    return constraints2[cacheChecks$accessorSymbol](csp, tmp, x)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$11 = (undefined, function (constraints2, csp) {
  return (x) => {
    return f5(constraints2, csp, x)
  }
});
f5 = function f5(constraints2, csp, tp) {
  let tableEntry, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (runtime.Tuple.isArrayLike(tp) && tp.length === 2) {
    element0$ = runtime.Tuple.get(tp, 0);
    element1$ = runtime.Tuple.get(tp, 1);
    if (element0$ instanceof NofibPrelude.Nil.class) {
      tmp = globalThis.Object.freeze([
        NofibPrelude.Nil,
        constraints2.Unknown
      ]);
      return globalThis.Object.freeze([
        tmp,
        element1$
      ])
    } else if (element0$ instanceof NofibPrelude.Cons.class) {
      let inlinedVal, arg$Assign$1$;
      arg$Cons$0$ = element0$.head;
      arg$Cons$1$ = element0$.tail;
      if (arg$Cons$0$ instanceof constraints2.Assign.class) {
        arg$Assign$1$ = arg$Cons$0$.value;
        tmp1 = arg$Assign$1$ - 1;
        if (element1$ instanceof NofibPrelude.Cons.class) {
          inlinedVal = element1$.head;
          tableEntry = NofibPrelude.atIndex(tmp1, inlinedVal);
          scrut = tableEntry === constraints2.Unknown;
          if (scrut === true) {
            let inlinedVal1, inlinedVal2, arg$CSP$0$, tmp6;
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            if (csp instanceof constraints2.CSP.class) {
              arg$CSP$0$ = csp.vars;
              tmp6 = constraints2[maxLevel$accessorSymbol](tmp2);
              inlinedVal2 = tmp6 == arg$CSP$0$;
              if (inlinedVal2 === true) {
                inlinedVal1 = constraints2.Known(NofibPrelude.Nil);
              } else {
                inlinedVal1 = constraints2.Unknown;
              }
              tmp3 = inlinedVal1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp3 = tableEntry;
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp5 = globalThis.Object.freeze([
            tmp4,
            tmp3
          ]);
          return globalThis.Object.freeze([
            tmp5,
            element1$
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda12 = (undefined, function (constraints2, csp, x) {
  return f5(constraints2, csp, x)
});
f4$ = function f4$(constraints2, val_, var_, rel) {
  return (cs, varval) => {
    return f4(constraints2, val_, var_, rel, cs, varval)
  }
};
lscomp21 = function lscomp2(varrr, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = globalThis.Object.freeze([
      varrr,
      arg$Cons$0$
    ]);
    tmp1 = lscomp21(varrr, arg$Cons$1$);
    return NofibPrelude.Cons(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$10 = (undefined, function (constraints2, val_, var_, rel) {
  return (x, y) => {
    let f4$here;
    f4$here = f4$(constraints2, val_, var_, rel);
    return NofibPrelude.zipWith(f4$here, x, y)
  }
});
f4 = function f4(constraints2, val_, var_, rel, cs, varval) {
  let scrut, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (runtime.Tuple.isArrayLike(varval) && varval.length === 2) {
    element0$ = runtime.Tuple.get(varval, 0);
    element1$ = runtime.Tuple.get(varval, 1);
    scrut = cs === constraints2.Unknown;
    if (scrut === true) {
      tmp = constraints2.Assign(var_, val_);
      tmp1 = constraints2.Assign(element0$, element1$);
      tmp2 = runtime.safeCall(rel(tmp, tmp1));
      scrut1 = ! tmp2;
      if (scrut1 === true) {
        tmp3 = NofibPrelude.Cons(element0$, NofibPrelude.Nil);
        tmp4 = NofibPrelude.Cons(var_, tmp3);
        return constraints2.Known(tmp4)
      }
      return cs;
    }
    return cs;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lscomp12 = function lscomp1(vals, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = NofibPrelude.enumFromTo(1, vals);
    tmp1 = lscomp21(arg$Cons$0$, tmp);
    tmp2 = lscomp12(vals, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda11 = (undefined, function (constraints2, val_, var_, rel, x, y) {
  let f4$here;
  f4$here = f4$(constraints2, val_, var_, rel);
  return NofibPrelude.zipWith(f4$here, x, y)
});
lscomp2 = function lscomp2(constraints2, ls) {
  let arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = ls.tail;
    tmp = lscomp2(constraints2, arg$Cons$1$);
    return NofibPrelude.Cons(constraints2.Unknown, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lscomp11 = function lscomp1(constraints2, vals, ls) {
  let arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = ls.tail;
    tmp = NofibPrelude.enumFromTo(1, vals);
    tmp1 = lscomp2(constraints2, tmp);
    tmp2 = lscomp11(constraints2, vals, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
f3$ = function f3$(constraints2, csp) {
  return (s) => {
    return f3(constraints2, csp, s)
  }
};
f3 = function f3(constraints2, csp, s) {
  let scrut, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = constraints2[earliestInconsistency$accessorSymbol](csp, s);
  σ$x: {
    let inlinedVal, inlinedVal1, arg$CSP$0$, tmp3;
    if (scrut instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = scrut.x;
      if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Some$0$, 0);
        element1$ = runtime.Tuple.get(arg$Some$0$, 1);
        tmp1 = NofibPrelude.Cons(element1$, NofibPrelude.Nil);
        tmp2 = NofibPrelude.Cons(element0$, tmp1);
        tmp = constraints2.Known(tmp2);
        break σ$x
      }
    }
    if (csp instanceof constraints2.CSP.class) {
      arg$CSP$0$ = csp.vars;
      tmp3 = constraints2[maxLevel$accessorSymbol](s);
      inlinedVal1 = tmp3 == arg$CSP$0$;
      if (inlinedVal1 === true) {
        inlinedVal = constraints2.Known(NofibPrelude.Nil);
      } else {
        inlinedVal = constraints2.Unknown;
      }
      tmp = inlinedVal;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
  return globalThis.Object.freeze([
    s,
    tmp
  ])
};
lambda$9 = (undefined, function (constraints2) {
  return (x) => {
    return lambda9(constraints2, x)
  }
});
lambda$8 = (undefined, function (constraints2) {
  return (x) => {
    return lambda10(constraints2, x)
  }
});
lambda9 = (undefined, function (constraints2, x) {
  let inlinedVal;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    let arg$Known$0$;
    runtime.Tuple.get(x, 0);
    inlinedVal = runtime.Tuple.get(x, 1);
    if (inlinedVal instanceof constraints2.Known.class) {
      arg$Known$0$ = inlinedVal.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda10 = (undefined, function (constraints2, x) {
  let inlinedVal;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    let arg$Known$0$;
    runtime.Tuple.get(x, 0);
    inlinedVal = runtime.Tuple.get(x, 1);
    if (inlinedVal instanceof constraints2.Known.class) {
      arg$Known$0$ = inlinedVal.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (constraints2, csp) {
  return (x) => {
    return lambda7(constraints2, csp, x)
  }
});
lambda7 = (undefined, function (constraints2, csp, x) {
  let arg$CSP$0$, tmp;
  if (csp instanceof constraints2.CSP.class) {
    arg$CSP$0$ = csp.vars;
    tmp = constraints2[maxLevel$accessorSymbol](x);
    return tmp == arg$CSP$0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda8 = (undefined, function (x) {
  let tmp, inlinedVal;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    runtime.Tuple.get(x, 0);
    inlinedVal = runtime.Tuple.get(x, 1);
    tmp = inlinedVal === NofibPrelude.None;
    return ! tmp
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
f2$ = function f2$(constraints2, csp) {
  return (s) => {
    let tmp;
    tmp = constraints2[earliestInconsistency$accessorSymbol](csp, s);
    return globalThis.Object.freeze([
      s,
      tmp
    ])
  }
};
f2 = function f2(constraints2, csp, s) {
  let tmp;
  tmp = constraints2[earliestInconsistency$accessorSymbol](csp, s);
  return globalThis.Object.freeze([
    s,
    tmp
  ])
};
lambda$6 = (undefined, function (rel, a) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(rel(a, x));
    return ! tmp
  }
});
lambda6 = (undefined, function (rel, a, x) {
  let tmp;
  tmp = runtime.safeCall(rel(a, x));
  return ! tmp
});
lscomp1 = function lscomp1(constraints2, ss, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = constraints2[maxLevel$accessorSymbol](ss);
    tmp1 = tmp + 1;
    tmp2 = constraints2.Assign(tmp1, arg$Cons$0$);
    tmp3 = NofibPrelude.Cons(tmp2, ss);
    tmp4 = lscomp1(constraints2, ss, arg$Cons$1$);
    return NofibPrelude.Cons(tmp3, tmp4)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
next$ = function next$(constraints2, vars, vals) {
  return (ss) => {
    return next(constraints2, vars, vals, ss)
  }
};
next = function next(constraints2, vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints2[maxLevel$accessorSymbol](ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = NofibPrelude.enumFromTo(1, vals);
    return lscomp1(constraints2, ss, tmp1)
  }
  return NofibPrelude.Nil;
};
lambda$5 = (undefined, function (constraints2, f) {
  return (y) => {
    return constraints2[initTree$accessorSymbol](f, y)
  }
});
lambda5 = (undefined, function (constraints2, f, y) {
  return constraints2[initTree$accessorSymbol](f, y)
});
lambda$4 = (undefined, function (p) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return ! tmp
  }
});
lambda4 = (undefined, function (p, x) {
  let tmp;
  tmp = runtime.safeCall(p(x));
  return ! tmp
});
lambda$3 = (undefined, function (constraints2, p) {
  return (x) => {
    return lambda3(constraints2, p, x)
  }
});
lambda3 = (undefined, function (constraints2, p, x) {
  let arg$Node$0$;
  if (x instanceof constraints2.Node.class) {
    arg$Node$0$ = x.lab;
    return runtime.safeCall(p(arg$Node$0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
f1$ = function f1$(constraints2, p) {
  return (a, cs) => {
    let tmp;
    tmp = NofibPrelude.filter(lambda$3(constraints2, p), cs);
    return constraints2.Node(a, tmp)
  }
};
f1 = function f1(constraints2, p, a, cs) {
  let tmp;
  tmp = NofibPrelude.filter(lambda$3(constraints2, p), cs);
  return constraints2.Node(a, tmp)
};
lambda$2 = (undefined, function (constraints2, f) {
  return (x) => {
    return constraints2[foldTree$accessorSymbol](f, x)
  }
});
lambda2 = (undefined, function (constraints2, f, x) {
  return constraints2[foldTree$accessorSymbol](f, x)
});
lambda$1 = (undefined, function (constraints2, f) {
  return (x) => {
    return constraints2[mapTree$accessorSymbol](f, x)
  }
});
lambda1 = (undefined, function (constraints2, f, x) {
  return constraints2[mapTree$accessorSymbol](f, x)
});
(class constraints {
  static {
    constraints1 = this
  }
  static get [maxLevel$accessorSymbol]() { return constraints.#maxLevel; }
  static get [safe$accessorSymbol]() { return constraints.#safe; }
  static get [label$accessorSymbol]() { return constraints.#label; }
  static get [mapTree$accessorSymbol]() { return constraints.#mapTree; }
  static get [foldTree$accessorSymbol]() { return constraints.#foldTree; }
  static get [leaves$accessorSymbol]() { return constraints.#leaves; }
  static get [initTree$accessorSymbol]() { return constraints.#initTree; }
  static get [earliestInconsistency$accessorSymbol]() { return constraints.#earliestInconsistency; }
  static get [knownConflict$accessorSymbol]() { return constraints.#knownConflict; }
  static get [fillTable$accessorSymbol]() { return constraints.#fillTable; }
  static get [cacheChecks$accessorSymbol]() { return constraints.#cacheChecks; }
  static get [combine$accessorSymbol]() { return constraints.#combine; }
  static get [collect$accessorSymbol]() { return constraints.#collect; }
  static {
    constraints.Assign = function Assign(varr, value) {
      return globalThis.Object.freeze(new Assign.class(varr, value));
    };
    (class Assign {
      static {
        constraints.Assign.class = this
      }
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assign", ["varr", "value"]];
    });
    constraints.CSP = function CSP(vars, vals, rel) {
      return globalThis.Object.freeze(new CSP.class(vars, vals, rel));
    };
    (class CSP {
      static {
        constraints.CSP.class = this
      }
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSP", ["vars", "vals", "rel"]];
    });
    constraints.Node = function Node(lab, children) {
      return globalThis.Object.freeze(new Node.class(lab, children));
    };
    (class Node {
      static {
        constraints.Node.class = this
      }
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["lab", "children"]];
    });
    (class ConflictSet {
      static {
        constraints.ConflictSet = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ConflictSet"];
    });
    constraints.Known = function Known(vs) {
      return globalThis.Object.freeze(new Known.class(vs));
    };
    (class Known extends constraints.ConflictSet {
      static {
        constraints.Known.class = this
      }
      constructor(vs) {
        super();
        this.vs = vs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Known", ["vs"]];
    });
    (class Unknown extends constraints.ConflictSet {
      static {
        new this
      }
      constructor() {
        super();
        constraints.Unknown = this;
        Object.defineProperty(this, "class", {
          value: Unknown
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unknown"];
    });
  }
  static #qsort_qpart_rqsort_rqpart(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param2
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Cons(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = NofibPrelude.Nil;
                param4 = NofibPrelude.Nil;
                param5 = param2_tmp;
                id = 1;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof NofibPrelude.Nil.class) {
              tmp = constraints.#qsort_qpart_rqsort_rqpart(2, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = NofibPrelude.Cons(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 2;
              continue loopLabel
            } else if (param2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
              if (scrut === true) {
                tmp2 = NofibPrelude.Cons(arg$Cons$0$, param4);
                param2 = arg$Cons$1$;
                param4 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp3;
              id = 1;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param2
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Cons(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = NofibPrelude.Nil;
                param4 = NofibPrelude.Nil;
                param5 = param2_tmp;
                id = 3;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 3:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof NofibPrelude.Nil.class) {
              tmp = constraints.#qsort_qpart_rqsort_rqpart(0, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = NofibPrelude.Cons(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 2;
              continue loopLabel
            } else if (param2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
              if (scrut === true) {
                tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
                param2 = arg$Cons$1$;
                param3 = tmp2;
                id = 3;
                continue loopLabel
              }
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp3;
              id = 3;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #qsort(le, ls, r1) {
    return constraints.#qsort_qpart_rqsort_rqpart(0, le, ls, r1, undefined, undefined, undefined)
  }
  static #qpart(le, x, ls, rlt, rge, r1) {
    return constraints.#qsort_qpart_rqsort_rqpart(1, le, x, ls, rlt, rge, r1)
  }
  static #rqsort(le, ls, r1) {
    return constraints.#qsort_qpart_rqsort_rqpart(2, le, ls, r1, undefined, undefined, undefined)
  }
  static #rqpart(le, x, ls, rle, rgt, r1) {
    return constraints.#qsort_qpart_rqsort_rqpart(3, le, x, ls, rle, rgt, r1)
  }
  static #level(a) {
    if (a instanceof constraints.Assign.class) {
      return a.varr
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #value(a) {
    if (a instanceof constraints.Assign.class) {
      return a.value
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #maxLevel(ls) {
    let arg$Cons$0$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      if (arg$Cons$0$ instanceof constraints.Assign.class) {
        return arg$Cons$0$.varr
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #complete(csp, s) {
    let arg$CSP$0$, tmp;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      tmp = constraints.#maxLevel(s);
      return tmp == arg$CSP$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #safe(as1, as2) {
    let scrut, scrut1, arg$Assign$0$, arg$Assign$1$, arg$Assign$0$1, arg$Assign$1$1, tmp, tmp1, tmp2, tmp3;
    if (as1 instanceof constraints.Assign.class) {
      arg$Assign$0$ = as1.varr;
      arg$Assign$1$ = as1.value;
      if (as2 instanceof constraints.Assign.class) {
        arg$Assign$0$1 = as2.varr;
        arg$Assign$1$1 = as2.value;
        tmp = arg$Assign$1$ == arg$Assign$1$1;
        scrut = ! tmp;
        if (scrut === true) {
          let inlinedVal, inlinedVal1;
          tmp1 = arg$Assign$0$ - arg$Assign$0$1;
          inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp1));
          tmp2 = arg$Assign$1$ - arg$Assign$1$1;
          inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp2));
          tmp3 = inlinedVal == inlinedVal1;
          scrut1 = ! tmp3;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #queens(n) {
    return constraints.CSP(n, n, constraints.#safe)
  }
  static #label(n) {
    if (n instanceof constraints.Node.class) {
      return n.lab
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mapTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp, tmp1;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = runtime.safeCall(f(arg$Node$0$));
      tmp1 = NofibPrelude.map(lambda$1(constraints, f), arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = NofibPrelude.map(lambda$2(constraints, f), arg$Node$1$);
      return runtime.safeCall(f(arg$Node$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filterTree(p, t) {
    let f1$here;
    f1$here = f1$(constraints, p);
    return constraints.#foldTree(f1$here, t)
  }
  static #prune(p, t) {
    return constraints.#filterTree(lambda$4(p), t)
  }
  static #leaves(t) {
    let arg$Node$0$, arg$Node$1$, tmp;
    if (t instanceof constraints.Node.class) {
      arg$Node$0$ = t.lab;
      arg$Node$1$ = t.children;
      if (arg$Node$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(arg$Node$0$, NofibPrelude.Nil)
      }
      tmp = NofibPrelude.map(constraints.#leaves, arg$Node$1$);
      return NofibPrelude.concat(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initTree(f, x) {
    let tmp, tmp1;
    tmp = runtime.safeCall(f(x));
    tmp1 = NofibPrelude.map(lambda$5(constraints, f), tmp);
    return constraints.Node(x, tmp1)
  }
  static #mkTree(csp) {
    let arg$CSP$0$, arg$CSP$1$, next$here;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      arg$CSP$1$ = csp.vals;
      next$here = next$(constraints, arg$CSP$0$, arg$CSP$1$);
      return constraints.#initTree(next$here, NofibPrelude.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #earliestInconsistency(csp, aas) {
    let scrut, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp, tmp1, tmp2;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$2$ = csp.rel;
      if (aas instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (aas instanceof NofibPrelude.Cons.class) {
        let inlinedVal;
        arg$Cons$0$ = aas.head;
        arg$Cons$1$ = aas.tail;
        inlinedVal = r(NofibPrelude, NofibPrelude.Nil, arg$Cons$1$);
        scrut = NofibPrelude.filter(lambda$6(arg$CSP$2$, arg$Cons$0$), inlinedVal);
        if (scrut instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.None
        } else if (scrut instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = scrut.head;
          tmp = constraints.#level(arg$Cons$0$);
          tmp1 = constraints.#level(arg$Cons$0$1);
          tmp2 = globalThis.Object.freeze([
            tmp,
            tmp1
          ]);
          return NofibPrelude.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #labelInconsistencies(csp, t) {
    let f2$here;
    f2$here = f2$(constraints, csp);
    return constraints.#mapTree(f2$here, t)
  }
  static #btsolver0(csp) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = constraints.#mkTree(csp);
    tmp1 = constraints.#labelInconsistencies(csp, tmp);
    tmp2 = constraints.#prune(lambda8, tmp1);
    tmp3 = constraints.#mapTree(NofibPrelude.fst, tmp2);
    tmp4 = constraints.#leaves(tmp3);
    return NofibPrelude.filter(lambda$7(constraints, csp), tmp4)
  }
  static #knownConflict(c) {
    let arg$Known$0$;
    if (c instanceof constraints.Known.class) {
      arg$Known$0$ = c.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #knownSolution(c) {
    let arg$Known$0$;
    if (c instanceof constraints.Known.class) {
      arg$Known$0$ = c.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #checkComplete(csp, s) {
    let scrut;
    scrut = constraints.#complete(csp, s);
    if (scrut === true) {
      return constraints.Known(NofibPrelude.Nil)
    }
    return constraints.Unknown;
  }
  static #search(labeler, csp) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = constraints.#mkTree(csp);
    tmp1 = runtime.safeCall(labeler(csp, tmp));
    tmp2 = constraints.#prune(lambda$8(constraints), tmp1);
    tmp3 = constraints.#leaves(tmp2);
    tmp4 = NofibPrelude.filter(lambda$9(constraints), tmp3);
    return NofibPrelude.map(NofibPrelude.fst, tmp4)
  }
  static #bt(csp, t) {
    let f3$here;
    f3$here = f3$(constraints, csp);
    return constraints.#mapTree(f3$here, t)
  }
  static #emptyTable(csp) {
    let arg$CSP$0$, arg$CSP$1$, tmp, tmp1;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      arg$CSP$1$ = csp.vals;
      tmp = NofibPrelude.enumFromTo(1, arg$CSP$0$);
      tmp1 = lscomp11(constraints, arg$CSP$1$, tmp);
      return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fillTable(s, csp, tbl) {
    let arg$Cons$0$, arg$Assign$0$, arg$Assign$1$, arg$CSP$0$, arg$CSP$1$, arg$CSP$2$, tmp, tmp1, tmp2;
    if (s instanceof NofibPrelude.Nil.class) {
      return tbl
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      if (arg$Cons$0$ instanceof constraints.Assign.class) {
        arg$Assign$0$ = arg$Cons$0$.varr;
        arg$Assign$1$ = arg$Cons$0$.value;
        if (csp instanceof constraints.CSP.class) {
          arg$CSP$0$ = csp.vars;
          arg$CSP$1$ = csp.vals;
          arg$CSP$2$ = csp.rel;
          tmp = arg$Assign$0$ + 1;
          tmp1 = NofibPrelude.enumFromTo(tmp, arg$CSP$0$);
          tmp2 = lscomp12(arg$CSP$1$, tmp1);
          return NofibPrelude.zipWith(lambda$10(constraints, arg$Assign$1$, arg$Assign$0$, arg$CSP$2$), tbl, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lookupCache(csp, t) {
    return constraints.#mapTree(lambda$11(constraints, csp), t)
  }
  static #cacheChecks(csp, tbl, n) {
    let arg$Node$0$, arg$Node$1$, tmp, tmp1;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = globalThis.Object.freeze([
        arg$Node$0$,
        tbl
      ]);
      tmp1 = NofibPrelude.map(lambda$12(constraints, csp, tbl, arg$Node$0$), arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bm(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = constraints.#emptyTable(csp);
    tmp1 = constraints.#cacheChecks(csp, tmp, t);
    tmp2 = constraints.#lookupCache(csp, tmp1);
    return constraints.#mapTree(NofibPrelude.fst, tmp2)
  }
  static #combine(ls, acc) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Known$0$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return acc
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          if (element1$ instanceof constraints.Known.class) {
            let inlinedVal, tmp1;
            arg$Known$0$ = element1$.vs;
            tmp = constraints.#maxLevel(element0$);
            tmp1 = NofibPrelude.inList(tmp, arg$Known$0$);
            inlinedVal = ! tmp1;
            if (inlinedVal === true) {
              return arg$Known$0$
            }
            {
              let inlinedVal1, tmp2, tmp3;
              tmp2 = NofibPrelude.nubBy(lambda, acc);
              tmp3 = NofibPrelude.foldl(lambda$(NofibPrelude, lambda), tmp2, arg$Known$0$);
              inlinedVal1 = NofibPrelude.append(arg$Known$0$, tmp3);
              ls = arg$Cons$1$;
              acc = inlinedVal1;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #bj_(csp, t) {
    let f7$here;
    f7$here = f7$(constraints);
    return constraints.#foldTree(f7$here, t)
  }
  static #bj(csp, t) {
    let f6$here;
    f6$here = f6$(constraints);
    return constraints.#foldTree(f6$here, t)
  }
  static #bjbt(csp, t) {
    let tmp;
    tmp = constraints.#bt(csp, t);
    return constraints.#bj(csp, tmp)
  }
  static #bjbt_(csp, t) {
    let tmp;
    tmp = constraints.#bt(csp, t);
    return constraints.#bj_(csp, tmp)
  }
  static #collect(ls) {
    let arg$Cons$0$, arg$Cons$1$, arg$Known$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof constraints.Known.class) {
        let tmp1, tmp2;
        arg$Known$0$ = arg$Cons$0$.vs;
        tmp = constraints.#collect(arg$Cons$1$);
        tmp1 = NofibPrelude.nubBy(lambda, tmp);
        tmp2 = NofibPrelude.foldl(lambda$(NofibPrelude, lambda), tmp1, arg$Known$0$);
        return NofibPrelude.append(arg$Known$0$, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #domainWipeout(csp, t) {
    let f8$here;
    if (csp instanceof constraints.CSP.class) {
      f8$here = f8$(constraints);
      return constraints.#mapTree(f8$here, t)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fc(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = constraints.#emptyTable(csp);
    tmp1 = constraints.#cacheChecks(csp, tmp, t);
    tmp2 = constraints.#lookupCache(csp, tmp1);
    return constraints.#domainWipeout(csp, tmp2)
  }
  static #try_(n, algorithm) {
    let tmp, tmp1;
    tmp = constraints.#queens(n);
    tmp1 = constraints.#search(algorithm, tmp);
    return l(NofibPrelude, tmp1, 0)
  }
  static #testConstraints_nofib(n) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.Cons(constraints.#fc, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(constraints.#bjbt_, tmp);
    tmp2 = NofibPrelude.Cons(constraints.#bjbt, tmp1);
    tmp3 = NofibPrelude.Cons(constraints.#bm, tmp2);
    tmp4 = NofibPrelude.Cons(constraints.#bt, tmp3);
    return NofibPrelude.map(lambda$13(constraints, n), tmp4)
  }
  static main() {
    let tmp;
    tmp = constraints.#testConstraints_nofib(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "constraints"];
});
export { f1 as _$_modulePrivate_$_f1 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { next as _$_modulePrivate_$_next };
export { f2 as _$_modulePrivate_$_f2 };
export { f3 as _$_modulePrivate_$_f3 };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp11 as _$_modulePrivate_$_lscomp11 };
export { lscomp21 as _$_modulePrivate_$_lscomp21 };
export { f4 as _$_modulePrivate_$_f4 };
export { lscomp12 as _$_modulePrivate_$_lscomp12 };
export { f5 as _$_modulePrivate_$_f5 };
export { f7 as _$_modulePrivate_$_f7 };
export { f6 as _$_modulePrivate_$_f6 };
export { lscomp13 as _$_modulePrivate_$_lscomp13 };
export { f8 as _$_modulePrivate_$_f8 };
export { constraints1 as _$_modulePrivate_$_constraints };
export { lambda1 as _$_modulePrivate_$_lambda };
export { lambda2 as _$_modulePrivate_$_lambda1 };
export { lambda3 as _$_modulePrivate_$_lambda2 };
export { lambda4 as _$_modulePrivate_$_lambda3 };
export { lambda5 as _$_modulePrivate_$_lambda4 };
export { lambda6 as _$_modulePrivate_$_lambda5 };
export { lambda7 as _$_modulePrivate_$_lambda6 };
export { lambda8 as _$_modulePrivate_$_lambda7 };
export { lambda9 as _$_modulePrivate_$_lambda8 };
export { lambda10 as _$_modulePrivate_$_lambda9 };
export { lambda11 as _$_modulePrivate_$_lambda10 };
export { lambda12 as _$_modulePrivate_$_lambda11 };
export { lambda13 as _$_modulePrivate_$_lambda12 };
export { lambda14 as _$_modulePrivate_$_lambda13 };
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export { lambda$2 as _$_modulePrivate_$_lambda$1 };
export { f1$ as _$_modulePrivate_$_f1$ };
export { lambda$3 as _$_modulePrivate_$_lambda$2 };
export { lambda$4 as _$_modulePrivate_$_lambda$3 };
export { lambda$5 as _$_modulePrivate_$_lambda$4 };
export { next$ as _$_modulePrivate_$_next$ };
export { lambda$6 as _$_modulePrivate_$_lambda$5 };
export { f2$ as _$_modulePrivate_$_f2$ };
export { lambda$7 as _$_modulePrivate_$_lambda$6 };
export { lambda$8 as _$_modulePrivate_$_lambda$7 };
export { lambda$9 as _$_modulePrivate_$_lambda$8 };
export { f3$ as _$_modulePrivate_$_f3$ };
export { lambda$10 as _$_modulePrivate_$_lambda$9 };
export { f4$ as _$_modulePrivate_$_f4$ };
export { lambda$11 as _$_modulePrivate_$_lambda$10 };
export { lambda$12 as _$_modulePrivate_$_lambda$11 };
export { f7$ as _$_modulePrivate_$_f7$ };
export { f6$ as _$_modulePrivate_$_f6$ };
export { f8$ as _$_modulePrivate_$_f8$ };
export { lambda$13 as _$_modulePrivate_$_lambda$12 };
export default constraints1;
