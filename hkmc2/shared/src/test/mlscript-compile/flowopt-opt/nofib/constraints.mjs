const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const map$accessorSymbol = globalThis.Symbol("map");
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const enumFromTo$accessorSymbol = globalThis.Symbol("enumFromTo");
const filter$accessorSymbol = globalThis.Symbol("filter");
const all$accessorSymbol = globalThis.Symbol("all");
const zipWith$accessorSymbol = globalThis.Symbol("zipWith");
const deleteBy$accessorSymbol = globalThis.Symbol("deleteBy");
const atIndex$accessorSymbol = globalThis.Symbol("atIndex");
const maxLevel$accessorSymbol = globalThis.Symbol("maxLevel");
const safe$accessorSymbol = globalThis.Symbol("safe");
const label$accessorSymbol = globalThis.Symbol("label");
const mapTree$accessorSymbol = globalThis.Symbol("mapTree");
const foldTree$accessorSymbol = globalThis.Symbol("foldTree");
const leaves$accessorSymbol = globalThis.Symbol("leaves");
const initTree$accessorSymbol = globalThis.Symbol("initTree");
const knownConflict$accessorSymbol = globalThis.Symbol("knownConflict");
const fillTable$accessorSymbol = globalThis.Symbol("fillTable");
const cacheChecks$accessorSymbol = globalThis.Symbol("cacheChecks");
const combine$accessorSymbol = globalThis.Symbol("combine");
const collect$accessorSymbol = globalThis.Symbol("collect");
let f1, lscomp1, next, lscomp2, lscomp21, f4, lscomp11, f7, f6, constraints1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lambda$3, f1$, lambda$4, lambda$5, lambda$6, next$, lambda$7, lambda$8, f4$, lambda$9, f7$, f6$, main_testConstraints_nofib_bjbt$bjbt, main_testConstraints_nofib_bjbt_$bjbt_, main_testConstraints_nofib_fc_lookupCache_lambda$_lambda$lambda, main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$, main_testConstraints_nofib_fc$fc, main_testConstraints_nofib_bm_lookupCache_lambda$_lambda$lambda, main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$, main_testConstraints_nofib_bm$bm, main_testConstraints_nofib_bt_f3$_f3$f3, main_testConstraints_nofib_bt_f3$$f3$, main_testConstraints_nofib_bt$bt, main_testConstraints_nofib_lambda$_lambda_map$map, main_testConstraints_nofib_lambda$_lambda$lambda, main_testConstraints_nofib_lambda$$lambda$, main_testConstraints_nofib_bjbt_bt_f3$_f3$f3, main_testConstraints_nofib_bjbt_bt_f3$$f3$, main_testConstraints_nofib_bjbt__bt_f3$_f3$f3, main_testConstraints_nofib_bjbt__bt_f3$$f3$, main_testConstraints_nofib_fc_domainWipeout_f8$_f8$f8, main_testConstraints_nofib_fc_domainWipeout_f8$$f8$, main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo, main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo, main_testConstraints_nofib_fc_emptyTable_lscomp1$lscomp1, main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo, main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo, main_testConstraints_nofib_bm_emptyTable_lscomp1$lscomp1, main_testConstraints_nofib_lambda$_lambda_fst$fst, main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda, main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$, main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda1, main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$1, main_testConstraints_nofib_bm_fst$fst;
main_testConstraints_nofib_bjbt$bjbt = function main_testConstraints_nofib_bjbt$bjbt(csp, t) {
  let inlinedVal, f6$here, f3$here;
  f3$here = main_testConstraints_nofib_bjbt_bt_f3$$f3$(constraints1, csp);
  inlinedVal = constraints1[mapTree$accessorSymbol](f3$here, t);
  f6$here = f6$(constraints1);
  return constraints1[foldTree$accessorSymbol](f6$here, inlinedVal)
};
main_testConstraints_nofib_bjbt_$bjbt_ = function main_testConstraints_nofib_bjbt_$bjbt_(csp, t) {
  let inlinedVal, f7$here, f3$here;
  f3$here = main_testConstraints_nofib_bjbt__bt_f3$$f3$(constraints1, csp);
  inlinedVal = constraints1[mapTree$accessorSymbol](f3$here, t);
  f7$here = f7$(constraints1);
  return constraints1[foldTree$accessorSymbol](f7$here, inlinedVal)
};
main_testConstraints_nofib_fc_lookupCache_lambda$_lambda$lambda = function main_testConstraints_nofib_fc_lookupCache_lambda$_lambda$lambda(constraints2, csp, x) {
  let constraints3, tableEntry, scrut, element1$, element0$, arg$Cons$0$, tmp, tmp1, tmp2, tmp3, tmp4;
  constraints3 = constraints2;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    element0$ = runtime.Tuple.get(x, 0);
    element1$ = runtime.Tuple.get(x, 1);
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
      let arg$Assign$1$, arg$Cons$0$1;
      arg$Cons$0$ = element0$.head;
      if (arg$Cons$0$ instanceof constraints3.Assign.class) {
        arg$Assign$1$ = arg$Cons$0$.value;
        tmp1 = arg$Assign$1$ - 1;
        if (element1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = element1$.head;
          tableEntry = constraints2[atIndex$accessorSymbol](tmp1, arg$Cons$0$1);
          scrut = tableEntry === constraints2.Unknown;
          if (scrut === true) {
            let inlinedVal, inlinedVal1, arg$CSP$0$, tmp5;
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, undefined);
            if (csp instanceof constraints2.CSP.class) {
              arg$CSP$0$ = csp.vars;
              tmp5 = constraints2[maxLevel$accessorSymbol](tmp2);
              inlinedVal1 = tmp5 == arg$CSP$0$;
              if (inlinedVal1 === true) {
                inlinedVal = constraints2.Known(NofibPrelude.Nil);
              } else {
                inlinedVal = constraints2.Unknown;
              }
              tmp3 = inlinedVal;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp3 = tableEntry;
          }
          tmp4 = globalThis.Object.freeze([
            undefined,
            tmp3
          ]);
          return globalThis.Object.freeze([
            tmp4,
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
main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$ = function main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$(constraints2, csp) {
  return (x) => {
    return main_testConstraints_nofib_fc_lookupCache_lambda$_lambda$lambda(constraints2, csp, x)
  }
};
main_testConstraints_nofib_fc$fc = function main_testConstraints_nofib_fc$fc(csp, t) {
  let tmp, inlinedVal, inlinedVal1, f8$here, lambda$here, arg$CSP$0$, arg$CSP$1$, tmp1, tmp2;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$0$ = csp.vars;
    arg$CSP$1$ = csp.vals;
    tmp1 = main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo(1, arg$CSP$0$);
    tmp2 = main_testConstraints_nofib_fc_emptyTable_lscomp1$lscomp1(constraints1, arg$CSP$1$, tmp1);
    inlinedVal = NofibPrelude.Cons(NofibPrelude.Nil, tmp2);
    tmp = constraints1[cacheChecks$accessorSymbol](csp, inlinedVal, t);
    lambda$here = main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$(constraints1, csp);
    inlinedVal1 = constraints1[mapTree$accessorSymbol](lambda$here, tmp);
    if (csp instanceof constraints1.CSP.class) {
      f8$here = main_testConstraints_nofib_fc_domainWipeout_f8$$f8$(constraints1);
      return constraints1[mapTree$accessorSymbol](f8$here, inlinedVal1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_lookupCache_lambda$_lambda$lambda = function main_testConstraints_nofib_bm_lookupCache_lambda$_lambda$lambda(constraints2, csp, x) {
  let constraints3, tableEntry, scrut, element1$, element0$, arg$Cons$0$, tmp, tmp1, tmp2, tmp3, tmp4;
  constraints3 = constraints2;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    element0$ = runtime.Tuple.get(x, 0);
    element1$ = runtime.Tuple.get(x, 1);
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
      let arg$Assign$1$, arg$Cons$0$1;
      arg$Cons$0$ = element0$.head;
      if (arg$Cons$0$ instanceof constraints3.Assign.class) {
        arg$Assign$1$ = arg$Cons$0$.value;
        tmp1 = arg$Assign$1$ - 1;
        if (element1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = element1$.head;
          tableEntry = constraints2[atIndex$accessorSymbol](tmp1, arg$Cons$0$1);
          scrut = tableEntry === constraints2.Unknown;
          if (scrut === true) {
            let inlinedVal, inlinedVal1, arg$CSP$0$, tmp5;
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, undefined);
            if (csp instanceof constraints2.CSP.class) {
              arg$CSP$0$ = csp.vars;
              tmp5 = constraints2[maxLevel$accessorSymbol](tmp2);
              inlinedVal1 = tmp5 == arg$CSP$0$;
              if (inlinedVal1 === true) {
                inlinedVal = constraints2.Known(NofibPrelude.Nil);
              } else {
                inlinedVal = constraints2.Unknown;
              }
              tmp3 = inlinedVal;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp3 = tableEntry;
          }
          tmp4 = globalThis.Object.freeze([
            undefined,
            tmp3
          ]);
          return globalThis.Object.freeze([
            tmp4,
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
main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$ = function main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$(constraints2, csp) {
  return (x) => {
    return main_testConstraints_nofib_bm_lookupCache_lambda$_lambda$lambda(constraints2, csp, x)
  }
};
main_testConstraints_nofib_bm$bm = function main_testConstraints_nofib_bm$bm(csp, t) {
  let tmp, inlinedVal, inlinedVal1, lambda$here, arg$CSP$0$, arg$CSP$1$, tmp1, tmp2;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$0$ = csp.vars;
    arg$CSP$1$ = csp.vals;
    tmp1 = main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo(1, arg$CSP$0$);
    tmp2 = main_testConstraints_nofib_bm_emptyTable_lscomp1$lscomp1(constraints1, arg$CSP$1$, tmp1);
    inlinedVal = NofibPrelude.Cons(NofibPrelude.Nil, tmp2);
    tmp = constraints1[cacheChecks$accessorSymbol](csp, inlinedVal, t);
    lambda$here = main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$(constraints1, csp);
    inlinedVal1 = constraints1[mapTree$accessorSymbol](lambda$here, tmp);
    return constraints1[mapTree$accessorSymbol](main_testConstraints_nofib_bm_fst$fst, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bt_f3$_f3$f3 = function main_testConstraints_nofib_bt_f3$_f3$f3(constraints2, csp, s) {
  let arg$Some$0$, tmp, tmp1, inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.None;
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, ls, inlinedVal1;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      tmp2 = constraints1[reverse$accessorSymbol](arg$Cons$1$);
      f = lambda$7(arg$CSP$2$, arg$Cons$0$);
      ls = tmp2;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, arg$Cons$0$1, arg$Cons$1$1;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal1 = NofibPrelude.Nil;
            break inlinedLbl
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = ls.head;
            arg$Cons$1$1 = ls.tail;
            scrut = runtime.safeCall(f(arg$Cons$0$1));
            if (scrut === true) {
              inlinedVal1 = NofibPrelude.Cons(arg$Cons$0$1, undefined);
              break inlinedLbl
            }
            ls = arg$Cons$1$1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (inlinedVal1 instanceof NofibPrelude.Nil.class) {
        inlinedVal = NofibPrelude.None;
      } else if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
        tmp3 = globalThis.Object.freeze([
          undefined,
          undefined
        ]);
        inlinedVal = NofibPrelude.Some(tmp3);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    σ$x: {
      let inlinedVal1, inlinedVal2, arg$CSP$0$, tmp4;
      if (inlinedVal instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = inlinedVal.x;
        if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
          tmp1 = NofibPrelude.Cons(undefined, undefined);
          tmp = constraints2.Known(tmp1);
          break σ$x
        }
      }
      if (csp instanceof constraints2.CSP.class) {
        arg$CSP$0$ = csp.vars;
        tmp4 = constraints2[maxLevel$accessorSymbol](s);
        inlinedVal2 = tmp4 == arg$CSP$0$;
        if (inlinedVal2 === true) {
          inlinedVal1 = constraints2.Known(NofibPrelude.Nil);
        } else {
          inlinedVal1 = constraints2.Unknown;
        }
        tmp = inlinedVal1;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
    return globalThis.Object.freeze([
      s,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bt_f3$$f3$ = function main_testConstraints_nofib_bt_f3$$f3$(constraints2, csp) {
  return (s) => {
    return main_testConstraints_nofib_bt_f3$_f3$f3(constraints2, csp, s)
  }
};
main_testConstraints_nofib_bt$bt = function main_testConstraints_nofib_bt$bt(csp, t) {
  let f3$here;
  f3$here = main_testConstraints_nofib_bt_f3$$f3$(constraints1, csp);
  return constraints1[mapTree$accessorSymbol](f3$here, t)
};
main_testConstraints_nofib_lambda$_lambda_map$map = function main_testConstraints_nofib_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = xs.tail;
    tmp = main_testConstraints_nofib_lambda$_lambda_map$map(f, arg$Cons$1$);
    return NofibPrelude.Cons(undefined, tmp)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda$lambda = function main_testConstraints_nofib_lambda$_lambda$lambda(constraints2, n, x) {
  let inlinedVal, inlinedVal1, tmp, tmp1, tmp2, lambda$here, inlinedVal2, p, arg$CSP$0$, arg$CSP$1$, next$here;
  inlinedVal = constraints2.CSP(n, n, constraints2[safe$accessorSymbol]);
  if (inlinedVal instanceof constraints2.CSP.class) {
    let p1, inlinedVal3, f1$here;
    arg$CSP$0$ = inlinedVal.vars;
    arg$CSP$1$ = inlinedVal.vals;
    next$here = next$(constraints2, arg$CSP$0$, arg$CSP$1$);
    inlinedVal2 = constraints2[initTree$accessorSymbol](next$here, NofibPrelude.Nil);
    tmp = runtime.safeCall(x(inlinedVal, inlinedVal2));
    p = main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$1(constraints2);
    p1 = lambda$5(p);
    f1$here = f1$(constraints2, p1);
    inlinedVal3 = constraints2[foldTree$accessorSymbol](f1$here, tmp);
    tmp1 = constraints2[leaves$accessorSymbol](inlinedVal3);
    lambda$here = main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$(constraints2);
    tmp2 = constraints2[filter$accessorSymbol](lambda$here, tmp1);
    inlinedVal1 = main_testConstraints_nofib_lambda$_lambda_map$map(main_testConstraints_nofib_lambda$_lambda_fst$fst, tmp2);
    return constraints2[listLen$accessorSymbol](inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$$lambda$ = function main_testConstraints_nofib_lambda$$lambda$(constraints2, n) {
  return (x) => {
    return main_testConstraints_nofib_lambda$_lambda$lambda(constraints2, n, x)
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$f3 = function main_testConstraints_nofib_bjbt_bt_f3$_f3$f3(constraints2, csp, s) {
  let arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2, inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp3, tmp4;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.None;
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, ls, inlinedVal1;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      tmp3 = constraints1[reverse$accessorSymbol](arg$Cons$1$);
      f = lambda$7(arg$CSP$2$, arg$Cons$0$);
      ls = tmp3;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, arg$Cons$0$2, arg$Cons$1$1;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal1 = NofibPrelude.Nil;
            break inlinedLbl
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = ls.head;
            arg$Cons$1$1 = ls.tail;
            scrut = runtime.safeCall(f(arg$Cons$0$2));
            if (scrut === true) {
              inlinedVal1 = NofibPrelude.Cons(arg$Cons$0$2, undefined);
              break inlinedLbl
            }
            ls = arg$Cons$1$1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (inlinedVal1 instanceof NofibPrelude.Nil.class) {
        inlinedVal = NofibPrelude.None;
      } else if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
        let inlinedVal2, inlinedVal3;
        arg$Cons$0$1 = inlinedVal1.head;
        if (arg$Cons$0$ instanceof constraints1.Assign.class) {
          inlinedVal2 = arg$Cons$0$.varr;
          if (arg$Cons$0$1 instanceof constraints1.Assign.class) {
            inlinedVal3 = arg$Cons$0$1.varr;
            tmp4 = globalThis.Object.freeze([
              inlinedVal2,
              inlinedVal3
            ]);
            inlinedVal = NofibPrelude.Some(tmp4);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    σ$x: {
      let inlinedVal1, inlinedVal2, arg$CSP$0$, tmp5;
      if (inlinedVal instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = inlinedVal.x;
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
        tmp5 = constraints2[maxLevel$accessorSymbol](s);
        inlinedVal2 = tmp5 == arg$CSP$0$;
        if (inlinedVal2 === true) {
          inlinedVal1 = constraints2.Known(NofibPrelude.Nil);
        } else {
          inlinedVal1 = constraints2.Unknown;
        }
        tmp = inlinedVal1;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
    return globalThis.Object.freeze([
      s,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bt_f3$$f3$ = function main_testConstraints_nofib_bjbt_bt_f3$$f3$(constraints2, csp) {
  return (s) => {
    return main_testConstraints_nofib_bjbt_bt_f3$_f3$f3(constraints2, csp, s)
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$f3 = function main_testConstraints_nofib_bjbt__bt_f3$_f3$f3(constraints2, csp, s) {
  let arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2, inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp3, tmp4;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.None;
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, ls, inlinedVal1;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      tmp3 = constraints1[reverse$accessorSymbol](arg$Cons$1$);
      f = lambda$7(arg$CSP$2$, arg$Cons$0$);
      ls = tmp3;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, arg$Cons$0$2, arg$Cons$1$1;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal1 = NofibPrelude.Nil;
            break inlinedLbl
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = ls.head;
            arg$Cons$1$1 = ls.tail;
            scrut = runtime.safeCall(f(arg$Cons$0$2));
            if (scrut === true) {
              inlinedVal1 = NofibPrelude.Cons(arg$Cons$0$2, undefined);
              break inlinedLbl
            }
            ls = arg$Cons$1$1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (inlinedVal1 instanceof NofibPrelude.Nil.class) {
        inlinedVal = NofibPrelude.None;
      } else if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
        let inlinedVal2, inlinedVal3;
        arg$Cons$0$1 = inlinedVal1.head;
        if (arg$Cons$0$ instanceof constraints1.Assign.class) {
          inlinedVal2 = arg$Cons$0$.varr;
          if (arg$Cons$0$1 instanceof constraints1.Assign.class) {
            inlinedVal3 = arg$Cons$0$1.varr;
            tmp4 = globalThis.Object.freeze([
              inlinedVal2,
              inlinedVal3
            ]);
            inlinedVal = NofibPrelude.Some(tmp4);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    σ$x: {
      let inlinedVal1, inlinedVal2, arg$CSP$0$, tmp5;
      if (inlinedVal instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = inlinedVal.x;
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
        tmp5 = constraints2[maxLevel$accessorSymbol](s);
        inlinedVal2 = tmp5 == arg$CSP$0$;
        if (inlinedVal2 === true) {
          inlinedVal1 = constraints2.Known(NofibPrelude.Nil);
        } else {
          inlinedVal1 = constraints2.Unknown;
        }
        tmp = inlinedVal1;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
    return globalThis.Object.freeze([
      s,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_f3$$f3$ = function main_testConstraints_nofib_bjbt__bt_f3$$f3$(constraints2, csp) {
  return (s) => {
    return main_testConstraints_nofib_bjbt__bt_f3$_f3$f3(constraints2, csp, s)
  }
};
main_testConstraints_nofib_fc_domainWipeout_f8$_f8$f8 = function main_testConstraints_nofib_fc_domainWipeout_f8$_f8$f8(constraints2, tp2) {
  let element1$, element0$, element1$1, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    element0$ = runtime.Tuple.get(tp2, 0);
    element1$ = runtime.Tuple.get(tp2, 1);
    if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
      let constraints3, ls, inlinedVal;
      element1$1 = runtime.Tuple.get(element0$, 1);
      constraints3 = constraints2;
      ls = element1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, arg$Cons$0$, arg$Cons$1$;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal = NofibPrelude.Nil;
            break inlinedLbl
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = ls.head;
            arg$Cons$1$ = ls.tail;
            scrut = constraints3[all$accessorSymbol](constraints3[knownConflict$accessorSymbol], arg$Cons$0$);
            if (scrut === true) {
              inlinedVal = NofibPrelude.Cons(arg$Cons$0$, undefined);
              break inlinedLbl
            }
            ls = arg$Cons$1$;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (inlinedVal instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          undefined,
          element1$1
        ])
      }
      {
        let arg$Cons$0$;
        if (inlinedVal instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = inlinedVal.head;
          tmp1 = constraints2[collect$accessorSymbol](arg$Cons$0$);
          tmp = constraints2.Known(tmp1);
          return globalThis.Object.freeze([
            undefined,
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
main_testConstraints_nofib_fc_domainWipeout_f8$$f8$ = function main_testConstraints_nofib_fc_domainWipeout_f8$$f8$(constraints2) {
  return (tp2) => {
    return main_testConstraints_nofib_fc_domainWipeout_f8$_f8$f8(constraints2, tp2)
  }
};
main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo(tmp, b);
    return NofibPrelude.Cons(undefined, tmp1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo = function main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo(tmp, b);
    return NofibPrelude.Cons(undefined, tmp1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc_emptyTable_lscomp1$lscomp1 = function main_testConstraints_nofib_fc_emptyTable_lscomp1$lscomp1(constraints2, vals, ls) {
  let arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = ls.tail;
    tmp = main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo(1, vals);
    tmp1 = lscomp2(constraints2, tmp);
    tmp2 = main_testConstraints_nofib_fc_emptyTable_lscomp1$lscomp1(constraints2, vals, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo(tmp, b);
    return NofibPrelude.Cons(undefined, tmp1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo = function main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo(tmp, b);
    return NofibPrelude.Cons(undefined, tmp1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm_emptyTable_lscomp1$lscomp1 = function main_testConstraints_nofib_bm_emptyTable_lscomp1$lscomp1(constraints2, vals, ls) {
  let arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = ls.tail;
    tmp = main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo(1, vals);
    tmp1 = lscomp2(constraints2, tmp);
    tmp2 = main_testConstraints_nofib_bm_emptyTable_lscomp1$lscomp1(constraints2, vals, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_fst$fst = function main_testConstraints_nofib_lambda$_lambda_fst$fst(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda = function main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda(constraints2, x) {
  let arg$Known$0$, element1$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    element1$ = runtime.Tuple.get(x, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$ = function main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$(constraints2) {
  return (x) => {
    return main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda(constraints2, x)
  }
};
main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda1 = function main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda(constraints2, x) {
  let arg$Known$0$, element1$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    element1$ = runtime.Tuple.get(x, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$1 = function main_testConstraints_nofib_lambda$_lambda_lambda$$lambda$(constraints2) {
  return (x) => {
    return main_testConstraints_nofib_lambda$_lambda_lambda$_lambda$lambda1(constraints2, x)
  }
};
main_testConstraints_nofib_bm_fst$fst = function main_testConstraints_nofib_bm_fst$fst(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    return runtime.Tuple.get(x, 0)
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
      tmp2 = constraints2[map$accessorSymbol](constraints2[label$accessorSymbol], chs);
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
      tmp2 = constraints2[map$accessorSymbol](constraints2[label$accessorSymbol], chs);
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
lambda$9 = (undefined, function (constraints2, csp, tbl, s) {
  return (x) => {
    return lambda2(constraints2, csp, tbl, s, x)
  }
});
lambda2 = (undefined, function (constraints2, csp, tbl, s, x) {
  let tmp, arg$Cons$1$;
  if (tbl instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = tbl.tail;
    tmp = constraints2[fillTable$accessorSymbol](s, csp, arg$Cons$1$);
    return constraints2[cacheChecks$accessorSymbol](csp, tmp, x)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
lambda$8 = (undefined, function (constraints2, val_, var_, rel) {
  return (x, y) => {
    let f4$here;
    f4$here = f4$(constraints2, val_, var_, rel);
    return constraints2[zipWith$accessorSymbol](f4$here, x, y)
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
lscomp11 = function lscomp1(constraints2, vals, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = constraints2[enumFromTo$accessorSymbol](1, vals);
    tmp1 = lscomp21(arg$Cons$0$, tmp);
    tmp2 = lscomp11(constraints2, vals, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
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
lambda$7 = (undefined, function (rel, a) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(rel(a, x));
    return ! tmp
  }
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
    tmp1 = constraints2[enumFromTo$accessorSymbol](1, vals);
    return lscomp1(constraints2, ss, tmp1)
  }
  return NofibPrelude.Nil;
};
lambda$6 = (undefined, function (constraints2, f) {
  return (y) => {
    return constraints2[initTree$accessorSymbol](f, y)
  }
});
lambda$5 = (undefined, function (p) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return ! tmp
  }
});
lambda$4 = (undefined, function (constraints2, p) {
  return (x) => {
    return lambda1(constraints2, p, x)
  }
});
lambda1 = (undefined, function (constraints2, p, x) {
  let arg$Node$0$;
  if (x instanceof constraints2.Node.class) {
    arg$Node$0$ = x.lab;
    return runtime.safeCall(p(arg$Node$0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
f1$ = function f1$(constraints2, p) {
  return (a, cs) => {
    return f1(constraints2, p, a, cs)
  }
};
f1 = function f1(constraints2, p, a, cs) {
  let tmp, lambda$here;
  lambda$here = lambda$4(constraints2, p);
  tmp = constraints2[filter$accessorSymbol](lambda$here, cs);
  return constraints2.Node(a, tmp)
};
lambda$3 = (undefined, function (constraints2, f) {
  return (x) => {
    return constraints2[foldTree$accessorSymbol](f, x)
  }
});
lambda$2 = (undefined, function (constraints2, f) {
  return (x) => {
    return constraints2[mapTree$accessorSymbol](f, x)
  }
});
lambda = (undefined, function (x, y) {
  return x == y
});
lambda$1 = (undefined, function (constraints2, eq) {
  return (acc, y) => {
    return constraints2[deleteBy$accessorSymbol](eq, y, acc)
  }
});
lambda$ = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
(class constraints {
  static {
    constraints1 = this
  }
  static get [reverse$accessorSymbol]() { return constraints.#reverse; }
  static get [map$accessorSymbol]() { return constraints.#map; }
  static get [listLen$accessorSymbol]() { return constraints.#listLen; }
  static get [enumFromTo$accessorSymbol]() { return constraints.#enumFromTo; }
  static get [filter$accessorSymbol]() { return constraints.#filter; }
  static get [all$accessorSymbol]() { return constraints.#all; }
  static get [zipWith$accessorSymbol]() { return constraints.#zipWith; }
  static get [deleteBy$accessorSymbol]() { return constraints.#deleteBy; }
  static get [atIndex$accessorSymbol]() { return constraints.#atIndex; }
  static get [maxLevel$accessorSymbol]() { return constraints.#maxLevel; }
  static get [safe$accessorSymbol]() { return constraints.#safe; }
  static get [label$accessorSymbol]() { return constraints.#label; }
  static get [mapTree$accessorSymbol]() { return constraints.#mapTree; }
  static get [foldTree$accessorSymbol]() { return constraints.#foldTree; }
  static get [leaves$accessorSymbol]() { return constraints.#leaves; }
  static get [initTree$accessorSymbol]() { return constraints.#initTree; }
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
    constraints.Known = function Known(vs) {
      return globalThis.Object.freeze(new Known.class(vs));
    };
    (class Known {
      static {
        constraints.Known.class = this
      }
      constructor(vs) {
        this.vs = vs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Known", ["vs"]];
    });
    (class Unknown {
      static {
        new this
      }
      constructor() {
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
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = constraints.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = constraints.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #notElem(x, ls) {
    let tmp;
    tmp = constraints.#inList(x, ls);
    return ! tmp
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = constraints.#append(arg$Cons$1$, ys);
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
      tmp = constraints.#concat(arg$Cons$1$);
      return constraints.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = constraints.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
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
  static #foldl(f, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #nubBy(eq, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, lambda$here;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      lambda$here = lambda$(eq, arg$Cons$0$);
      tmp = constraints.#filter(lambda$here, arg$Cons$1$);
      tmp1 = constraints.#nubBy(eq, tmp);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zipWith(f, xss, yss) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = yss.head;
        arg$Cons$1$1 = yss.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = constraints.#zipWith(f, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = constraints.#deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unionBy(eq, xs, ys) {
    let tmp, tmp1, lambda$here;
    tmp = constraints.#nubBy(eq, ys);
    lambda$here = lambda$1(constraints, eq);
    tmp1 = constraints.#foldl(lambda$here, tmp, xs);
    return constraints.#append(xs, tmp1)
  }
  static #union(xs, ys) {
    return constraints.#unionBy(lambda, xs, ys)
  }
  static #atIndex(i, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = i == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = i - 1;
        i = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
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
  static #label(n) {
    if (n instanceof constraints.Node.class) {
      return n.lab
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mapTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp, tmp1, lambda$here;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = runtime.safeCall(f(arg$Node$0$));
      lambda$here = lambda$2(constraints, f);
      tmp1 = constraints.#map(lambda$here, arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp, lambda$here;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      lambda$here = lambda$3(constraints, f);
      tmp = constraints.#map(lambda$here, arg$Node$1$);
      return runtime.safeCall(f(arg$Node$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #leaves(t) {
    let arg$Node$0$, arg$Node$1$, tmp;
    if (t instanceof constraints.Node.class) {
      arg$Node$0$ = t.lab;
      arg$Node$1$ = t.children;
      if (arg$Node$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(arg$Node$0$, NofibPrelude.Nil)
      }
      tmp = constraints.#map(constraints.#leaves, arg$Node$1$);
      return constraints.#concat(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initTree(f, x) {
    let tmp, tmp1, lambda$here;
    tmp = runtime.safeCall(f(x));
    lambda$here = lambda$6(constraints, f);
    tmp1 = constraints.#map(lambda$here, tmp);
    return constraints.Node(x, tmp1)
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
  static #fillTable(s, csp, tbl) {
    let arg$Cons$0$, arg$Assign$0$, arg$Assign$1$, arg$CSP$0$, arg$CSP$1$, arg$CSP$2$, tmp, tmp1, tmp2, lambda$here;
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
          tmp1 = constraints.#enumFromTo(tmp, arg$CSP$0$);
          tmp2 = lscomp11(constraints, arg$CSP$1$, tmp1);
          lambda$here = lambda$8(constraints, arg$Assign$1$, arg$Assign$0$, arg$CSP$2$);
          return constraints.#zipWith(lambda$here, tbl, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cacheChecks(csp, tbl, n) {
    let arg$Node$0$, arg$Node$1$, tmp, tmp1, lambda$here;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = globalThis.Object.freeze([
        arg$Node$0$,
        tbl
      ]);
      lambda$here = lambda$9(constraints, csp, tbl, arg$Node$0$);
      tmp1 = constraints.#map(lambda$here, arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #combine(ls, acc) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Known$0$, tmp, tmp1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return acc
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          if (element1$ instanceof constraints.Known.class) {
            arg$Known$0$ = element1$.vs;
            tmp = constraints.#maxLevel(element0$);
            scrut = constraints.#notElem(tmp, arg$Known$0$);
            if (scrut === true) {
              return arg$Known$0$
            }
            tmp1 = constraints.#union(arg$Known$0$, acc);
            ls = arg$Cons$1$;
            acc = tmp1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #collect(ls) {
    let arg$Cons$0$, arg$Cons$1$, arg$Known$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof constraints.Known.class) {
        arg$Known$0$ = arg$Cons$0$.vs;
        tmp = constraints.#collect(arg$Cons$1$);
        return constraints.#union(arg$Known$0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, lambda$here;
    tmp = NofibPrelude.Cons(main_testConstraints_nofib_fc$fc, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(main_testConstraints_nofib_bjbt_$bjbt_, tmp);
    tmp2 = NofibPrelude.Cons(main_testConstraints_nofib_bjbt$bjbt, tmp1);
    tmp3 = NofibPrelude.Cons(main_testConstraints_nofib_bm$bm, tmp2);
    tmp4 = NofibPrelude.Cons(main_testConstraints_nofib_bt$bt, tmp3);
    lambda$here = main_testConstraints_nofib_lambda$$lambda$(constraints1, 6);
    inlinedVal = constraints1.#map(lambda$here, tmp4);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "constraints"];
});
export default constraints1;
