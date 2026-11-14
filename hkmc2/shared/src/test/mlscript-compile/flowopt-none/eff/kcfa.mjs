const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const varMapInsert$accessorSymbol = globalThis.Symbol("varMapInsert");
const varMapNext$accessorSymbol = globalThis.Symbol("varMapNext");
const varMapLeft$accessorSymbol = globalThis.Symbol("varMapLeft");
const bindCompare$accessorSymbol = globalThis.Symbol("bindCompare");
const closureCompare$accessorSymbol = globalThis.Symbol("closureCompare");
const setNext$accessorSymbol = globalThis.Symbol("setNext");
const setUnion$accessorSymbol = globalThis.Symbol("setUnion");
const storeMapInsertWith$accessorSymbol = globalThis.Symbol("storeMapInsertWith");
const storeMapNext$accessorSymbol = globalThis.Symbol("storeMapNext");
const storeMapLeft$accessorSymbol = globalThis.Symbol("storeMapLeft");
const storeMapWrap$accessorSymbol = globalThis.Symbol("storeMapWrap");
const storeMapIns$accessorSymbol = globalThis.Symbol("storeMapIns");
const stateSame$accessorSymbol = globalThis.Symbol("stateSame");
const alloc$accessorSymbol = globalThis.Symbol("alloc");
const monoStoreUpdate$accessorSymbol = globalThis.Symbol("monoStoreUpdate");
const listMap$tailrec$accessorSymbol = globalThis.Symbol("listMap$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
let foldf, ins, find1, cmp, cmp1, incr, link, union1, ins1, foldf1, ins2, find11, foldf2, cmp2, incr1, link1, union, eval1, apply, return_, newLabel, lambda, var_, mkLet, call, kcfa1, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, union$, lambda$5, eval$, apply$, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, mkLet$worker, call$worker, lambda$worker;
lambda$12 = (undefined, function (kcfa2) {
  return (e) => {
    return lambda8(kcfa2, e)
  }
});
lambda$11 = (undefined, function (kcfa2, lambdaLabel) {
  return (p) => {
    return lambda9(kcfa2, lambdaLabel, p)
  }
});
lambda8 = (undefined, function (kcfa2, e) {
  let arg$LAMBDA$0$, element0$;
  if (e instanceof kcfa2.LAMBDA.class) {
    arg$LAMBDA$0$ = e.lam;
    if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
      element0$ = runtime.Tuple.get(arg$LAMBDA$0$, 0);
      runtime.Tuple.get(arg$LAMBDA$0$, 1);
      runtime.Tuple.get(arg$LAMBDA$0$, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda9 = (undefined, function (kcfa2, lambdaLabel, p) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(p, 0);
    element1$ = runtime.Tuple.get(p, 1);
    inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](lambdaLabel, element1$);
    return globalThis.Object.freeze([
      element0$,
      inlinedVal
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
newLabel = function newLabel(labelCount) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return n
};
var_ = function var_(kcfa2, labelCount, x) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.VAR(n, x)
};
lambda = function lambda(kcfa2, labelCount, formals) {
  return (call1) => {
    return lambda$worker(kcfa2, labelCount, formals, call1)
  }
};
lambda$worker = function lambda$worker(kcfa2, labelCount, formals, call1) {
  let tmp, n;
  n = labelCount.value + 1;
  labelCount.value = n;
  tmp = globalThis.Object.freeze([
    n,
    formals,
    call1
  ]);
  return kcfa2.LAMBDA(tmp)
};
call = function call(kcfa2, labelCount, f) {
  return (args) => {
    return call$worker(kcfa2, labelCount, f, args)
  }
};
call$worker = function call$worker(kcfa2, labelCount, f, args) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.CALL(n, f, args)
};
return_ = function return_(kcfa2, labelCount, x) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.RET(n, x)
};
mkLet = function mkLet(kcfa2, labelCount, x) {
  return (e1) => {
    return (e2) => {
      return mkLet$worker(kcfa2, labelCount, x, e1, e2)
    }
  }
};
mkLet$worker = function mkLet$worker(kcfa2, labelCount, x, e1, e2) {
  let tmp, tmp1, inlinedVal, n, tmp2, n1;
  tmp = kcfa2.Cons(x, kcfa2.Nil);
  n1 = labelCount.value + 1;
  labelCount.value = n1;
  tmp2 = globalThis.Object.freeze([
    n1,
    tmp,
    e2
  ]);
  inlinedVal = kcfa2.LAMBDA(tmp2);
  tmp1 = kcfa2.Cons(e1, kcfa2.Nil);
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.CALL(n, inlinedVal, tmp1)
};
lambda$10 = (undefined, function (kcfa2) {
  return (b, d, mst) => {
    return lambda7(kcfa2, b, d, mst)
  }
});
lambda7 = (undefined, function (kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
      f1 = lambda$8(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (kcfa2) {
  return (state, sum) => {
    return lambda6(kcfa2, state, sum)
  }
});
lambda6 = (undefined, function (kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let mergeFn, union$here;
    arg$State$2$ = state.store;
    mergeFn = kcfa2[setUnion$accessorSymbol];
    union$here = union$(kcfa2, mergeFn);
    return kcfa2[storeMapWrap$accessorSymbol](union$here)(arg$State$2$, sum)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (kcfa2, x) {
  return (exp, mst) => {
    return kcfa2[monoStoreUpdate$accessorSymbol](mst, x, exp)
  }
});
lambda5 = (undefined, function (kcfa2, x, exp, mst) {
  return kcfa2[monoStoreUpdate$accessorSymbol](mst, x, exp)
});
lambda$7 = (undefined, function (kcfa2) {
  return (v, exps) => {
    return lambda4(kcfa2, v, exps)
  }
});
lambda4 = (undefined, function (kcfa2, v, exps) {
  let inlinedVal, arg$Clos$0$;
  if (v instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = v.lam;
    inlinedVal = kcfa2.LAMBDA(arg$Clos$0$);
    return kcfa2.Cons(inlinedVal, exps)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$6 = (undefined, function (kcfa2, st) {
  return (st1) => {
    return kcfa2[stateSame$accessorSymbol](st, st1)
  }
});
lambda3 = (undefined, function (kcfa2, st, st1) {
  return kcfa2[stateSame$accessorSymbol](st, st1)
});
apply$ = function apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return apply(kcfa2, store, time1, params, clos, states)
  }
};
apply = function apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = lambda$5(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
eval$ = function eval$(kcfa2, benv, store) {
  return (e) => {
    return eval1(kcfa2, benv, store, e)
  }
};
eval1 = (undefined, function (kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let arg$Some$0$, inlinedVal, arg$VmMAP$1$;
    arg$VAR$1$ = e.x;
    if (benv instanceof kcfa2.VmMAP.class) {
      arg$VmMAP$1$ = benv.tree;
      inlinedVal = find1(kcfa2, arg$VAR$1$, arg$VmMAP$1$);
      if (inlinedVal instanceof kcfa2.Some.class) {
        let inlinedVal1, arg$SmMAP$1$;
        arg$Some$0$ = inlinedVal.value;
        if (store instanceof kcfa2.SmMAP.class) {
          arg$SmMAP$1$ = store.tree;
          inlinedVal1 = find11(kcfa2, arg$Some$0$, arg$SmMAP$1$);
          if (inlinedVal1 instanceof kcfa2.Some.class) {
            return inlinedVal1.value
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (e instanceof kcfa2.LAMBDA.class) {
    let tmp1;
    arg$LAMBDA$0$ = e.lam;
    tmp = kcfa2.Clos(arg$LAMBDA$0$, benv);
    tmp1 = kcfa2.SetT(kcfa2.SetB, kcfa2.SetE, tmp, kcfa2.SetE);
    return kcfa2.SET(1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](kcfa2[setUnion$accessorSymbol])(st, adr, dv)
  }
});
lambda2 = (undefined, function (kcfa2, adr, dv, st) {
  return kcfa2[storeMapInsertWith$accessorSymbol](kcfa2[setUnion$accessorSymbol])(st, adr, dv)
});
union$ = function union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
union = function union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          runtime.Tuple.get(p2, 1);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      runtime.Tuple.get(p2, 1);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
link1 = function link(kcfa2, t1, d) {
  loopLabel: while (true) {
    let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1, tmp2;
    if (d instanceof kcfa2.SmZERO.class) {
      return t1
    } else if (d instanceof kcfa2.SmONE.class) {
      arg$SmONE$0$ = d.key;
      arg$SmONE$1$ = d.value;
      arg$SmONE$2$ = d.tree;
      arg$SmONE$3$ = d.digit;
      tmp = kcfa2.SmT(kcfa2.SmB, arg$SmONE$2$, arg$SmONE$0$, arg$SmONE$1$, t1);
      t1 = tmp;
      d = arg$SmONE$3$;
      continue loopLabel
    } else if (d instanceof kcfa2.SmTWO.class) {
      arg$SmTWO$0$ = d.key1;
      arg$SmTWO$1$ = d.value1;
      arg$SmTWO$2$ = d.tree1;
      arg$SmTWO$3$ = d.key2;
      arg$SmTWO$4$ = d.value2;
      arg$SmTWO$5$ = d.tree2;
      arg$SmTWO$6$ = d.digit;
      tmp1 = kcfa2.SmT(kcfa2.SmR, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
      tmp2 = kcfa2.SmT(kcfa2.SmB, tmp1, arg$SmTWO$0$, arg$SmTWO$1$, t1);
      t1 = tmp2;
      d = arg$SmTWO$6$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
incr1 = function incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(kcfa2.SmB, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = incr1(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$4 = (undefined, function (kcfa2, cmpRng) {
  return (map1, map2) => {
    return lambda13(kcfa2, cmpRng, map1, map2)
  }
});
cmp2 = function cmp(kcfa2, cmpRng, t1, t2) {
  loopLabel: while (true) {
    let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          runtime.Tuple.get(p2, 1);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            order = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (order instanceof kcfa2.EQUAL.class) {
              order1 = runtime.safeCall(cmpRng(arg$SmT$3$, arg$SmT$3$1));
              if (order1 instanceof kcfa2.EQUAL.class) {
                t1 = element1$;
                t2 = element1$1;
                continue loopLabel
              }
              return order1;
            }
            return order;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      runtime.Tuple.get(p2, 1);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda13 = (undefined, function (kcfa2, cmpRng, map1, map2) {
  let arg$SmMAP$1$, arg$SmMAP$1$1;
  if (map1 instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.SmMAP.class) {
      let inlinedVal, inlinedVal1;
      arg$SmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa2.Nil);
      return cmp2(kcfa2, cmpRng, inlinedVal, inlinedVal1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (kcfa2, f, init) {
  return (map) => {
    return lambda12(kcfa2, f, init, map)
  }
});
lambda12 = (undefined, function (kcfa2, f, init, map) {
  let arg$SmMAP$1$;
  if (map instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map.tree;
    return foldf2(kcfa2, f, arg$SmMAP$1$, init)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (kcfa2, f) {
  return (init) => {
    return lambda$3(kcfa2, f, init)
  }
});
foldf2 = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp, tmp1;
    if (t instanceof kcfa2.SmE.class) {
      return accum
    } else if (t instanceof kcfa2.SmT.class) {
      arg$SmT$1$ = t.left;
      arg$SmT$2$ = t.key;
      arg$SmT$3$ = t.value;
      arg$SmT$4$ = t.right;
      tmp = foldf2(kcfa2, f, arg$SmT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SmT$2$, arg$SmT$3$, tmp));
      t = arg$SmT$4$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda11 = (undefined, function (kcfa2, f, init) {
  return lambda$3(kcfa2, f, init)
});
find11 = function find1(kcfa2, k, t) {
  loopLabel: while (true) {
    let scrut, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$;
    if (t instanceof kcfa2.SmE.class) {
      return kcfa2.None
    } else if (t instanceof kcfa2.SmT.class) {
      arg$SmT$1$ = t.left;
      arg$SmT$2$ = t.key;
      arg$SmT$3$ = t.value;
      arg$SmT$4$ = t.right;
      scrut = kcfa2[bindCompare$accessorSymbol](k, arg$SmT$2$);
      if (scrut instanceof kcfa2.LESS.class) {
        t = arg$SmT$1$;
        continue loopLabel
      } else if (scrut instanceof kcfa2.EQUAL.class) {
        return kcfa2.Some(arg$SmT$3$)
      } else if (scrut instanceof kcfa2.GREATER.class) {
        t = arg$SmT$4$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins2 = function ins(kcfa2, comb, xk, x, nItems, nItems1, s) {
  let scrut, scrut1, c1, d1, scrut2, c11, d11, arg$SmT$0$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp, arg$SmT$0$1, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$4$1, tmp1, arg$SmT$0$2, arg$SmT$1$2, arg$SmT$2$2, arg$SmT$3$2, arg$SmT$4$2, tmp2, tmp3, tmp4, tmp5, tmp6, arg$SmT$0$3, arg$SmT$1$3, arg$SmT$2$3, arg$SmT$3$3, arg$SmT$4$3, tmp7, tmp8, tmp9, tmp10, arg$SmT$0$4, arg$SmT$1$4, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4, tmp11, arg$SmT$0$5, arg$SmT$1$5, arg$SmT$2$5, arg$SmT$3$5, arg$SmT$4$5, tmp12, tmp13, tmp14, tmp15, tmp16, arg$SmT$0$6, arg$SmT$1$6, arg$SmT$2$6, arg$SmT$3$6, arg$SmT$4$6, tmp17, tmp18, tmp19;
  if (s instanceof kcfa2.SmE.class) {
    tmp = nItems + 1;
    nItems1.value = tmp;
    return kcfa2.SmT(kcfa2.SmR, kcfa2.SmE, xk, x, kcfa2.SmE)
  } else if (s instanceof kcfa2.SmT.class) {
    arg$SmT$0$ = s.color;
    arg$SmT$1$ = s.left;
    arg$SmT$2$ = s.key;
    arg$SmT$3$ = s.value;
    arg$SmT$4$ = s.right;
    scrut = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$);
    if (scrut instanceof kcfa2.LESS.class) {
      if (arg$SmT$1$ instanceof kcfa2.SmT.class) {
        arg$SmT$0$1 = arg$SmT$1$.color;
        arg$SmT$1$1 = arg$SmT$1$.left;
        arg$SmT$2$1 = arg$SmT$1$.key;
        arg$SmT$3$1 = arg$SmT$1$.value;
        arg$SmT$4$1 = arg$SmT$1$.right;
        if (arg$SmT$0$1 instanceof kcfa2.SmR.class) {
          scrut1 = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$1);
          if (scrut1 instanceof kcfa2.LESS.class) {
            c1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$1);
            if (c1 instanceof kcfa2.SmT.class) {
              arg$SmT$0$2 = c1.color;
              arg$SmT$1$2 = c1.left;
              arg$SmT$2$2 = c1.key;
              arg$SmT$3$2 = c1.value;
              arg$SmT$4$2 = c1.right;
              if (arg$SmT$0$2 instanceof kcfa2.SmR.class) {
                tmp3 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$2, arg$SmT$2$2, arg$SmT$3$2, arg$SmT$4$2);
                tmp4 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$1, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
                return kcfa2.SmT(kcfa2.SmR, tmp3, arg$SmT$2$1, arg$SmT$3$1, tmp4)
              }
            }
            tmp2 = kcfa2.SmT(kcfa2.SmR, c1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$4$1);
            return kcfa2.SmT(kcfa2.SmB, tmp2, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          } else if (scrut1 instanceof kcfa2.EQUAL.class) {
            tmp5 = runtime.safeCall(comb(arg$SmT$3$1, x));
            tmp6 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$1, xk, tmp5, arg$SmT$4$1);
            return kcfa2.SmT(arg$SmT$0$, tmp6, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          } else if (scrut1 instanceof kcfa2.GREATER.class) {
            d1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$1);
            if (d1 instanceof kcfa2.SmT.class) {
              arg$SmT$0$3 = d1.color;
              arg$SmT$1$3 = d1.left;
              arg$SmT$2$3 = d1.key;
              arg$SmT$3$3 = d1.value;
              arg$SmT$4$3 = d1.right;
              if (arg$SmT$0$3 instanceof kcfa2.SmR.class) {
                tmp8 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$1$3);
                tmp9 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$3, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
                return kcfa2.SmT(kcfa2.SmR, tmp8, arg$SmT$2$3, arg$SmT$3$3, tmp9)
              }
            }
            tmp7 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, d1);
            return kcfa2.SmT(kcfa2.SmB, tmp7, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$);
      return kcfa2.SmT(kcfa2.SmB, tmp1, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
    } else if (scrut instanceof kcfa2.EQUAL.class) {
      tmp10 = runtime.safeCall(comb(arg$SmT$3$, x));
      return kcfa2.SmT(arg$SmT$0$, arg$SmT$1$, xk, tmp10, arg$SmT$4$)
    } else if (scrut instanceof kcfa2.GREATER.class) {
      if (arg$SmT$4$ instanceof kcfa2.SmT.class) {
        arg$SmT$0$4 = arg$SmT$4$.color;
        arg$SmT$1$4 = arg$SmT$4$.left;
        arg$SmT$2$4 = arg$SmT$4$.key;
        arg$SmT$3$4 = arg$SmT$4$.value;
        arg$SmT$4$4 = arg$SmT$4$.right;
        if (arg$SmT$0$4 instanceof kcfa2.SmR.class) {
          scrut2 = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$4);
          if (scrut2 instanceof kcfa2.LESS.class) {
            c11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$4);
            if (c11 instanceof kcfa2.SmT.class) {
              arg$SmT$0$5 = c11.color;
              arg$SmT$1$5 = c11.left;
              arg$SmT$2$5 = c11.key;
              arg$SmT$3$5 = c11.value;
              arg$SmT$4$5 = c11.right;
              if (arg$SmT$0$5 instanceof kcfa2.SmR.class) {
                tmp13 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$1$5);
                tmp14 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$5, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4);
                return kcfa2.SmT(kcfa2.SmR, tmp13, arg$SmT$2$5, arg$SmT$3$5, tmp14)
              }
            }
            tmp12 = kcfa2.SmT(kcfa2.SmR, c11, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4);
            return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp12)
          } else if (scrut2 instanceof kcfa2.EQUAL.class) {
            tmp15 = runtime.safeCall(comb(arg$SmT$3$4, x));
            tmp16 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$4, xk, tmp15, arg$SmT$4$4);
            return kcfa2.SmT(arg$SmT$0$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp16)
          } else if (scrut2 instanceof kcfa2.GREATER.class) {
            d11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$4);
            if (d11 instanceof kcfa2.SmT.class) {
              arg$SmT$0$6 = d11.color;
              arg$SmT$1$6 = d11.left;
              arg$SmT$2$6 = d11.key;
              arg$SmT$3$6 = d11.value;
              arg$SmT$4$6 = d11.right;
              if (arg$SmT$0$6 instanceof kcfa2.SmR.class) {
                tmp18 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$1$4);
                tmp19 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$6, arg$SmT$2$6, arg$SmT$3$6, arg$SmT$4$6);
                return kcfa2.SmT(kcfa2.SmR, tmp18, arg$SmT$2$4, arg$SmT$3$4, tmp19)
              }
            }
            tmp17 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$4, arg$SmT$2$4, arg$SmT$3$4, d11);
            return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp17)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$);
      return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp11)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldf1 = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SetT$1$, arg$SetT$2$, arg$SetT$3$, tmp, tmp1;
    if (t instanceof kcfa2.SetE.class) {
      return accum
    } else if (t instanceof kcfa2.SetT.class) {
      arg$SetT$1$ = t.left;
      arg$SetT$2$ = t.item;
      arg$SetT$3$ = t.right;
      tmp = foldf1(kcfa2, f, arg$SetT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SetT$2$, tmp));
      t = arg$SetT$3$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins1 = function ins(kcfa2, p, n, result) {
  loopLabel: while (true) {
    let element1$, element0$, arg$SetT$2$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof kcfa2.SetE.class) {
        return globalThis.Object.freeze([
          n,
          result
        ])
      } else if (element0$ instanceof kcfa2.SetT.class) {
        let inlinedVal;
        arg$SetT$2$ = element0$.item;
        tmp = kcfa2[setNext$accessorSymbol](element1$);
        tmp1 = n + 1;
        inlinedVal = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
        p = tmp;
        n = tmp1;
        result = inlinedVal;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
union1 = function union1(kcfa2, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
    p1 = kcfa2[setNext$accessorSymbol](t1);
    p2 = kcfa2[setNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SetE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          runtime.Tuple.get(p2, 1);
          if (element0$1 instanceof kcfa2.SetE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return ins1(kcfa2, p2, n, result);
        }
        return ins1(kcfa2, p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SetE.class) {
          return ins1(kcfa2, p1, n, result)
        }
        if (element0$ instanceof kcfa2.SetT.class) {
          arg$SetT$2$ = element0$.item;
          if (element0$1 instanceof kcfa2.SetT.class) {
            arg$SetT$2$1 = element0$1.item;
            scrut = kcfa2[closureCompare$accessorSymbol](arg$SetT$2$, arg$SetT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              inlinedVal = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp2 = n + 1;
              inlinedVal = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
              t2 = element1$1;
              n = tmp2;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SetT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      runtime.Tuple.get(p2, 1);
      if (element0$1 instanceof kcfa2.SetE.class) {
        return ins1(kcfa2, p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
link = function link(kcfa2, t1, d) {
  loopLabel: while (true) {
    let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1, tmp2;
    if (d instanceof kcfa2.SetZERO.class) {
      return t1
    } else if (d instanceof kcfa2.SetONE.class) {
      arg$SetONE$0$ = d.item;
      arg$SetONE$1$ = d.tree;
      arg$SetONE$2$ = d.digit;
      tmp = kcfa2.SetT(kcfa2.SetB, arg$SetONE$1$, arg$SetONE$0$, t1);
      t1 = tmp;
      d = arg$SetONE$2$;
      continue loopLabel
    } else if (d instanceof kcfa2.SetTWO.class) {
      arg$SetTWO$0$ = d.item1;
      arg$SetTWO$1$ = d.tree1;
      arg$SetTWO$2$ = d.item2;
      arg$SetTWO$3$ = d.tree2;
      arg$SetTWO$4$ = d.digit;
      tmp1 = kcfa2.SetT(kcfa2.SetR, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
      tmp2 = kcfa2.SetT(kcfa2.SetB, tmp1, arg$SetTWO$0$, t1);
      t1 = tmp2;
      d = arg$SetTWO$4$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
incr = function incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(kcfa2.SetB, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cmp1 = function cmp(kcfa2, t1, t2) {
  loopLabel: while (true) {
    let p1, p2, order, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1;
    p1 = kcfa2[setNext$accessorSymbol](t1);
    p2 = kcfa2[setNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SetE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          runtime.Tuple.get(p2, 1);
          if (element0$1 instanceof kcfa2.SetE.class) {
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SetE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.SetT.class) {
          arg$SetT$2$ = element0$.item;
          if (element0$1 instanceof kcfa2.SetT.class) {
            arg$SetT$2$1 = element0$1.item;
            order = kcfa2[closureCompare$accessorSymbol](arg$SetT$2$, arg$SetT$2$1);
            if (order instanceof kcfa2.EQUAL.class) {
              t1 = element1$;
              t2 = element1$1;
              continue loopLabel
            }
            return order;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SetT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      runtime.Tuple.get(p2, 1);
      if (element0$1 instanceof kcfa2.SetE.class) {
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$1 = (undefined, function (kcfa2) {
  return (x, adr, benv) => {
    return kcfa2[varMapInsert$accessorSymbol](benv, x, adr)
  }
});
lambda1 = (undefined, function (kcfa2, x, adr, benv) {
  return kcfa2[varMapInsert$accessorSymbol](benv, x, adr)
});
lambda$ = (undefined, function (kcfa2, cmpRng) {
  return (map1, map2) => {
    return lambda10(kcfa2, cmpRng, map1, map2)
  }
});
cmp = function cmp(kcfa2, cmpRng, t1, t2) {
  loopLabel: while (true) {
    let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
    p1 = kcfa2[varMapNext$accessorSymbol](t1);
    p2 = kcfa2[varMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.VmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          runtime.Tuple.get(p2, 1);
          if (element0$1 instanceof kcfa2.VmE.class) {
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.VmE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.VmT.class) {
          arg$VmT$2$ = element0$.key;
          arg$VmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.VmT.class) {
            let scrut, scrut1;
            arg$VmT$2$1 = element0$1.key;
            arg$VmT$3$1 = element0$1.value;
            scrut = arg$VmT$2$ < arg$VmT$2$1;
            if (scrut === true) {
              return kcfa2.LESS
            }
            scrut1 = arg$VmT$2$1 < arg$VmT$2$;
            if (scrut1 === true) {
              return kcfa2.GREATER
            }
            order1 = runtime.safeCall(cmpRng(arg$VmT$3$, arg$VmT$3$1));
            if (order1 instanceof kcfa2.EQUAL.class) {
              t1 = element1$;
              t2 = element1$1;
              continue loopLabel
            }
            return order1;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.VmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      runtime.Tuple.get(p2, 1);
      if (element0$1 instanceof kcfa2.VmE.class) {
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda10 = (undefined, function (kcfa2, cmpRng, map1, map2) {
  let arg$VmMAP$1$, arg$VmMAP$1$1;
  if (map1 instanceof kcfa2.VmMAP.class) {
    arg$VmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.VmMAP.class) {
      let inlinedVal, inlinedVal1;
      arg$VmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa2.Nil);
      return cmp(kcfa2, cmpRng, inlinedVal, inlinedVal1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
find1 = function find1(kcfa2, k, t) {
  loopLabel: while (true) {
    let arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$;
    if (t instanceof kcfa2.VmE.class) {
      return kcfa2.None
    } else if (t instanceof kcfa2.VmT.class) {
      let scrut, scrut1;
      arg$VmT$1$ = t.left;
      arg$VmT$2$ = t.key;
      arg$VmT$3$ = t.value;
      arg$VmT$4$ = t.right;
      scrut = k < arg$VmT$2$;
      if (scrut === true) {
        t = arg$VmT$1$;
        continue loopLabel
      }
      scrut1 = arg$VmT$2$ < k;
      if (scrut1 === true) {
        t = arg$VmT$4$;
        continue loopLabel
      }
      return kcfa2.Some(arg$VmT$3$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins = function ins(kcfa2, xk, x, nItems, nItems1, s) {
  let c1, d1, c11, d11, arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp, arg$VmT$0$1, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$4$1, tmp1, arg$VmT$0$2, arg$VmT$1$2, arg$VmT$2$2, arg$VmT$3$2, arg$VmT$4$2, tmp2, tmp3, tmp4, tmp5, arg$VmT$0$3, arg$VmT$1$3, arg$VmT$2$3, arg$VmT$3$3, arg$VmT$4$3, tmp6, tmp7, tmp8, arg$VmT$0$4, arg$VmT$1$4, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4, tmp9, arg$VmT$0$5, arg$VmT$1$5, arg$VmT$2$5, arg$VmT$3$5, arg$VmT$4$5, tmp10, tmp11, tmp12, tmp13, arg$VmT$0$6, arg$VmT$1$6, arg$VmT$2$6, arg$VmT$3$6, arg$VmT$4$6, tmp14, tmp15, tmp16;
  if (s instanceof kcfa2.VmE.class) {
    tmp = nItems + 1;
    nItems1.value = tmp;
    return kcfa2.VmT(kcfa2.VmR, kcfa2.VmE, xk, x, kcfa2.VmE)
  } else if (s instanceof kcfa2.VmT.class) {
    let inlinedVal, scrut, scrut1;
    arg$VmT$0$ = s.color;
    arg$VmT$1$ = s.left;
    arg$VmT$2$ = s.key;
    arg$VmT$3$ = s.value;
    arg$VmT$4$ = s.right;
    scrut = xk < arg$VmT$2$;
    if (scrut === true) {
      inlinedVal = kcfa2.LESS;
    } else {
      scrut1 = arg$VmT$2$ < xk;
      if (scrut1 === true) {
        inlinedVal = kcfa2.GREATER;
      } else {
        inlinedVal = kcfa2.EQUAL;
      }
    }
    if (inlinedVal instanceof kcfa2.LESS.class) {
      if (arg$VmT$1$ instanceof kcfa2.VmT.class) {
        arg$VmT$0$1 = arg$VmT$1$.color;
        arg$VmT$1$1 = arg$VmT$1$.left;
        arg$VmT$2$1 = arg$VmT$1$.key;
        arg$VmT$3$1 = arg$VmT$1$.value;
        arg$VmT$4$1 = arg$VmT$1$.right;
        if (arg$VmT$0$1 instanceof kcfa2.VmR.class) {
          let inlinedVal1, scrut2, scrut3;
          scrut2 = xk < arg$VmT$2$1;
          if (scrut2 === true) {
            inlinedVal1 = kcfa2.LESS;
          } else {
            scrut3 = arg$VmT$2$1 < xk;
            if (scrut3 === true) {
              inlinedVal1 = kcfa2.GREATER;
            } else {
              inlinedVal1 = kcfa2.EQUAL;
            }
          }
          if (inlinedVal1 instanceof kcfa2.LESS.class) {
            c1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$1);
            if (c1 instanceof kcfa2.VmT.class) {
              arg$VmT$0$2 = c1.color;
              arg$VmT$1$2 = c1.left;
              arg$VmT$2$2 = c1.key;
              arg$VmT$3$2 = c1.value;
              arg$VmT$4$2 = c1.right;
              if (arg$VmT$0$2 instanceof kcfa2.VmR.class) {
                tmp3 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$2, arg$VmT$2$2, arg$VmT$3$2, arg$VmT$4$2);
                tmp4 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$1, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                return kcfa2.VmT(kcfa2.VmR, tmp3, arg$VmT$2$1, arg$VmT$3$1, tmp4)
              }
            }
            tmp2 = kcfa2.VmT(kcfa2.VmR, c1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$4$1);
            return kcfa2.VmT(kcfa2.VmB, tmp2, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          } else if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
            tmp5 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$1, xk, x, arg$VmT$4$1);
            return kcfa2.VmT(arg$VmT$0$, tmp5, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          } else if (inlinedVal1 instanceof kcfa2.GREATER.class) {
            d1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$1);
            if (d1 instanceof kcfa2.VmT.class) {
              arg$VmT$0$3 = d1.color;
              arg$VmT$1$3 = d1.left;
              arg$VmT$2$3 = d1.key;
              arg$VmT$3$3 = d1.value;
              arg$VmT$4$3 = d1.right;
              if (arg$VmT$0$3 instanceof kcfa2.VmR.class) {
                tmp7 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$1$3);
                tmp8 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$3, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                return kcfa2.VmT(kcfa2.VmR, tmp7, arg$VmT$2$3, arg$VmT$3$3, tmp8)
              }
            }
            tmp6 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, d1);
            return kcfa2.VmT(kcfa2.VmB, tmp6, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$);
      return kcfa2.VmT(kcfa2.VmB, tmp1, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
    } else if (inlinedVal instanceof kcfa2.EQUAL.class) {
      return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, xk, x, arg$VmT$4$)
    } else if (inlinedVal instanceof kcfa2.GREATER.class) {
      if (arg$VmT$4$ instanceof kcfa2.VmT.class) {
        arg$VmT$0$4 = arg$VmT$4$.color;
        arg$VmT$1$4 = arg$VmT$4$.left;
        arg$VmT$2$4 = arg$VmT$4$.key;
        arg$VmT$3$4 = arg$VmT$4$.value;
        arg$VmT$4$4 = arg$VmT$4$.right;
        if (arg$VmT$0$4 instanceof kcfa2.VmR.class) {
          let inlinedVal1, scrut2, scrut3;
          scrut2 = xk < arg$VmT$2$4;
          if (scrut2 === true) {
            inlinedVal1 = kcfa2.LESS;
          } else {
            scrut3 = arg$VmT$2$4 < xk;
            if (scrut3 === true) {
              inlinedVal1 = kcfa2.GREATER;
            } else {
              inlinedVal1 = kcfa2.EQUAL;
            }
          }
          if (inlinedVal1 instanceof kcfa2.LESS.class) {
            c11 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$4);
            if (c11 instanceof kcfa2.VmT.class) {
              arg$VmT$0$5 = c11.color;
              arg$VmT$1$5 = c11.left;
              arg$VmT$2$5 = c11.key;
              arg$VmT$3$5 = c11.value;
              arg$VmT$4$5 = c11.right;
              if (arg$VmT$0$5 instanceof kcfa2.VmR.class) {
                tmp11 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$1$5);
                tmp12 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$5, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4);
                return kcfa2.VmT(kcfa2.VmR, tmp11, arg$VmT$2$5, arg$VmT$3$5, tmp12)
              }
            }
            tmp10 = kcfa2.VmT(kcfa2.VmR, c11, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4);
            return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp10)
          } else if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
            tmp13 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$4, xk, x, arg$VmT$4$4);
            return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp13)
          } else if (inlinedVal1 instanceof kcfa2.GREATER.class) {
            d11 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$4);
            if (d11 instanceof kcfa2.VmT.class) {
              arg$VmT$0$6 = d11.color;
              arg$VmT$1$6 = d11.left;
              arg$VmT$2$6 = d11.key;
              arg$VmT$3$6 = d11.value;
              arg$VmT$4$6 = d11.right;
              if (arg$VmT$0$6 instanceof kcfa2.VmR.class) {
                tmp15 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$1$4);
                tmp16 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$6, arg$VmT$2$6, arg$VmT$3$6, arg$VmT$4$6);
                return kcfa2.VmT(kcfa2.VmR, tmp15, arg$VmT$2$4, arg$VmT$3$4, tmp16)
              }
            }
            tmp14 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$4, arg$VmT$2$4, arg$VmT$3$4, d11);
            return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp14)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp9 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$);
      return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp9)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldf = function foldf(kcfa2, f, xs, ys, accum) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (xs instanceof kcfa2.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof kcfa2.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1, accum));
        xs = arg$Cons$1$;
        ys = arg$Cons$1$1;
        accum = tmp;
        continue loopLabel
      }
      return accum;
    }
    return accum;
  }
};
(class kcfa {
  static {
    kcfa1 = this
  }
  static get [listFoldl$tailrec$accessorSymbol]() { return kcfa.#listFoldl$tailrec; }
  static get [listMap$tailrec$accessorSymbol]() { return kcfa.#listMap$tailrec; }
  static get [varMapInsert$accessorSymbol]() { return kcfa.#varMapInsert; }
  static get [varMapNext$accessorSymbol]() { return kcfa.#varMapNext; }
  static get [varMapLeft$accessorSymbol]() { return kcfa.#varMapLeft; }
  static get [bindCompare$accessorSymbol]() { return kcfa.#bindCompare; }
  static get [closureCompare$accessorSymbol]() { return kcfa.#closureCompare; }
  static get [setNext$accessorSymbol]() { return kcfa.#setNext; }
  static get [setUnion$accessorSymbol]() { return kcfa.#setUnion; }
  static get [storeMapInsertWith$accessorSymbol]() { return kcfa.#storeMapInsertWith; }
  static get [storeMapNext$accessorSymbol]() { return kcfa.#storeMapNext; }
  static get [storeMapLeft$accessorSymbol]() { return kcfa.#storeMapLeft; }
  static get [storeMapWrap$accessorSymbol]() { return kcfa.#storeMapWrap; }
  static get [storeMapIns$accessorSymbol]() { return kcfa.#storeMapIns; }
  static get [stateSame$accessorSymbol]() { return kcfa.#stateSame; }
  static get [alloc$accessorSymbol]() { return kcfa.#alloc; }
  static get [monoStoreUpdate$accessorSymbol]() { return kcfa.#monoStoreUpdate; }
  static {
    kcfa.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        kcfa.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        kcfa.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    kcfa.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        kcfa.Some.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["value"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        kcfa.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    kcfa.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        kcfa.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class LESS {
      static {
        new this
      }
      constructor() {
        kcfa.LESS = this;
        Object.defineProperty(this, "class", {
          value: LESS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESS"];
    });
    (class EQUAL {
      static {
        new this
      }
      constructor() {
        kcfa.EQUAL = this;
        Object.defineProperty(this, "class", {
          value: EQUAL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQUAL"];
    });
    (class GREATER {
      static {
        new this
      }
      constructor() {
        kcfa.GREATER = this;
        Object.defineProperty(this, "class", {
          value: GREATER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATER"];
    });
    (class VmR {
      static {
        new this
      }
      constructor() {
        kcfa.VmR = this;
        Object.defineProperty(this, "class", {
          value: VmR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmR"];
    });
    (class VmB {
      static {
        new this
      }
      constructor() {
        kcfa.VmB = this;
        Object.defineProperty(this, "class", {
          value: VmB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmB"];
    });
    (class VmE {
      static {
        new this
      }
      constructor() {
        kcfa.VmE = this;
        Object.defineProperty(this, "class", {
          value: VmE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmE"];
    });
    kcfa.VmT = function VmT(color, left, key, value, right) {
      return globalThis.Object.freeze(new VmT.class(color, left, key, value, right));
    };
    (class VmT {
      static {
        kcfa.VmT.class = this
      }
      constructor(color, left, key, value, right) {
        this.color = color;
        this.left = left;
        this.key = key;
        this.value = value;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VmT", ["color", "left", "key", "value", "right"]];
    });
    kcfa.VmMAP = function VmMAP(nItems, tree) {
      return globalThis.Object.freeze(new VmMAP.class(nItems, tree));
    };
    (class VmMAP {
      static {
        kcfa.VmMAP.class = this
      }
      constructor(nItems, tree) {
        this.nItems = nItems;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VmMAP", ["nItems", "tree"]];
    });
    kcfa.VAR = function VAR(label, x) {
      return globalThis.Object.freeze(new VAR.class(label, x));
    };
    (class VAR {
      static {
        kcfa.VAR.class = this
      }
      constructor(label, x) {
        this.label = label;
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VAR", ["label", "x"]];
    });
    kcfa.LAMBDA = function LAMBDA(lam) {
      return globalThis.Object.freeze(new LAMBDA.class(lam));
    };
    (class LAMBDA {
      static {
        kcfa.LAMBDA.class = this
      }
      constructor(lam) {
        this.lam = lam;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LAMBDA", ["lam"]];
    });
    kcfa.CALL = function CALL(label, f, args) {
      return globalThis.Object.freeze(new CALL.class(label, f, args));
    };
    (class CALL {
      static {
        kcfa.CALL.class = this
      }
      constructor(label, f, args) {
        this.label = label;
        this.f = f;
        this.args = args;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CALL", ["label", "f", "args"]];
    });
    kcfa.RET = function RET(label, x) {
      return globalThis.Object.freeze(new RET.class(label, x));
    };
    (class RET {
      static {
        kcfa.RET.class = this
      }
      constructor(label, x) {
        this.label = label;
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "RET", ["label", "x"]];
    });
    kcfa.Bnd = function Bnd(x, t) {
      return globalThis.Object.freeze(new Bnd.class(x, t));
    };
    (class Bnd {
      static {
        kcfa.Bnd.class = this
      }
      constructor(x, t) {
        this.x = x;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Bnd", ["x", "t"]];
    });
    kcfa.Clos = function Clos(lam, benv) {
      return globalThis.Object.freeze(new Clos.class(lam, benv));
    };
    (class Clos {
      static {
        kcfa.Clos.class = this
      }
      constructor(lam, benv) {
        this.lam = lam;
        this.benv = benv;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Clos", ["lam", "benv"]];
    });
    (class SetR {
      static {
        new this
      }
      constructor() {
        kcfa.SetR = this;
        Object.defineProperty(this, "class", {
          value: SetR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetR"];
    });
    (class SetB {
      static {
        new this
      }
      constructor() {
        kcfa.SetB = this;
        Object.defineProperty(this, "class", {
          value: SetB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetB"];
    });
    (class SetE {
      static {
        new this
      }
      constructor() {
        kcfa.SetE = this;
        Object.defineProperty(this, "class", {
          value: SetE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetE"];
    });
    kcfa.SetT = function SetT(color, left, item, right) {
      return globalThis.Object.freeze(new SetT.class(color, left, item, right));
    };
    (class SetT {
      static {
        kcfa.SetT.class = this
      }
      constructor(color, left, item, right) {
        this.color = color;
        this.left = left;
        this.item = item;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetT", ["color", "left", "item", "right"]];
    });
    kcfa.SET = function SET(n, tree) {
      return globalThis.Object.freeze(new SET.class(n, tree));
    };
    (class SET {
      static {
        kcfa.SET.class = this
      }
      constructor(n, tree) {
        this.n = n;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SET", ["n", "tree"]];
    });
    (class SetZERO {
      static {
        new this
      }
      constructor() {
        kcfa.SetZERO = this;
        Object.defineProperty(this, "class", {
          value: SetZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetZERO"];
    });
    kcfa.SetONE = function SetONE(item, tree, digit) {
      return globalThis.Object.freeze(new SetONE.class(item, tree, digit));
    };
    (class SetONE {
      static {
        kcfa.SetONE.class = this
      }
      constructor(item, tree, digit) {
        this.item = item;
        this.tree = tree;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetONE", ["item", "tree", "digit"]];
    });
    kcfa.SetTWO = function SetTWO(item1, tree1, item2, tree2, digit) {
      return globalThis.Object.freeze(new SetTWO.class(item1, tree1, item2, tree2, digit));
    };
    (class SetTWO {
      static {
        kcfa.SetTWO.class = this
      }
      constructor(item1, tree1, item2, tree2, digit) {
        this.item1 = item1;
        this.tree1 = tree1;
        this.item2 = item2;
        this.tree2 = tree2;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetTWO", ["item1", "tree1", "item2", "tree2", "digit"]];
    });
    (class SmR {
      static {
        new this
      }
      constructor() {
        kcfa.SmR = this;
        Object.defineProperty(this, "class", {
          value: SmR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmR"];
    });
    (class SmB {
      static {
        new this
      }
      constructor() {
        kcfa.SmB = this;
        Object.defineProperty(this, "class", {
          value: SmB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmB"];
    });
    (class SmE {
      static {
        new this
      }
      constructor() {
        kcfa.SmE = this;
        Object.defineProperty(this, "class", {
          value: SmE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmE"];
    });
    kcfa.SmT = function SmT(color, left, key, value, right) {
      return globalThis.Object.freeze(new SmT.class(color, left, key, value, right));
    };
    (class SmT {
      static {
        kcfa.SmT.class = this
      }
      constructor(color, left, key, value, right) {
        this.color = color;
        this.left = left;
        this.key = key;
        this.value = value;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmT", ["color", "left", "key", "value", "right"]];
    });
    kcfa.SmMAP = function SmMAP(nItems, tree) {
      return globalThis.Object.freeze(new SmMAP.class(nItems, tree));
    };
    (class SmMAP {
      static {
        kcfa.SmMAP.class = this
      }
      constructor(nItems, tree) {
        this.nItems = nItems;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmMAP", ["nItems", "tree"]];
    });
    (class SmZERO {
      static {
        new this
      }
      constructor() {
        kcfa.SmZERO = this;
        Object.defineProperty(this, "class", {
          value: SmZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmZERO"];
    });
    kcfa.SmONE = function SmONE(key, value, tree, digit) {
      return globalThis.Object.freeze(new SmONE.class(key, value, tree, digit));
    };
    (class SmONE {
      static {
        kcfa.SmONE.class = this
      }
      constructor(key, value, tree, digit) {
        this.key = key;
        this.value = value;
        this.tree = tree;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmONE", ["key", "value", "tree", "digit"]];
    });
    kcfa.SmTWO = function SmTWO(key1, value1, tree1, key2, value2, tree2, digit) {
      return globalThis.Object.freeze(new SmTWO.class(key1, value1, tree1, key2, value2, tree2, digit));
    };
    (class SmTWO {
      static {
        kcfa.SmTWO.class = this
      }
      constructor(key1, value1, tree1, key2, value2, tree2, digit) {
        this.key1 = key1;
        this.value1 = value1;
        this.tree1 = tree1;
        this.key2 = key2;
        this.value2 = value2;
        this.tree2 = tree2;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmTWO", ["key1", "value1", "tree1", "key2", "value2", "tree2", "digit"]];
    });
    kcfa.State = function State(call1, benv, store, time) {
      return globalThis.Object.freeze(new State.class(call1, benv, store, time));
    };
    (class State {
      static {
        kcfa.State.class = this
      }
      constructor(call1, benv, store, time) {
        this.call = call1;
        this.benv = benv;
        this.store = store;
        this.time = time;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["call", "benv", "store", "time"]];
    });
  }
  static #listPairAllEq$tailrec(pred, l1, l2) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
      if (l1 instanceof kcfa.Nil.class) {
        if (l2 instanceof kcfa.Nil.class) {
          return true
        }
        return false;
      } else if (l1 instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof kcfa.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          tmp = runtime.safeCall(pred(arg$Cons$0$, arg$Cons$0$1));
          if (tmp === true) {
            l1 = arg$Cons$1$;
            l2 = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #listCollate$tailrec(cmp3, l1, l2) {
    loopLabel: while (true) {
      let order, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (l1 instanceof kcfa.Nil.class) {
        if (l2 instanceof kcfa.Nil.class) {
          return kcfa.EQUAL
        }
        return kcfa.LESS;
      }
      if (l2 instanceof kcfa.Nil.class) {
        return kcfa.GREATER
      }
      if (l1 instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof kcfa.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          order = runtime.safeCall(cmp3(arg$Cons$0$, arg$Cons$0$1));
          if (order instanceof kcfa.EQUAL.class) {
            l1 = arg$Cons$1$;
            l2 = arg$Cons$1$1;
            continue loopLabel
          }
          return order;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listFoldl$tailrec(f, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof kcfa.Nil.class) {
        return init
      } else if (l instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listExists$tailrec(f, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof kcfa.Nil.class) {
        return false
      } else if (l instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$));
        if (tmp === false) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listMap$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof kcfa.Nil.class) {
      return kcfa.Nil
    } else if (l instanceof kcfa.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = kcfa.#listMap$tailrec(f, arg$Cons$1$);
      return kcfa.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intCompare(s1, s2) {
    let scrut, scrut1;
    scrut = s1 < s2;
    if (scrut === true) {
      return kcfa.LESS
    }
    scrut1 = s2 < s1;
    if (scrut1 === true) {
      return kcfa.GREATER
    }
    return kcfa.EQUAL;
  }
  static #stringCompare(s1, s2) {
    let scrut, scrut1;
    scrut = s1 < s2;
    if (scrut === true) {
      return kcfa.LESS
    }
    scrut1 = s2 < s1;
    if (scrut1 === true) {
      return kcfa.GREATER
    }
    return kcfa.EQUAL;
  }
  static #append(l1, l2) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l1 instanceof kcfa.Nil.class) {
      return l2
    } else if (l1 instanceof kcfa.Cons.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = kcfa.#append(arg$Cons$1$, l2);
      return kcfa.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listMap(f) {
    return (l) => {
      return kcfa.#listMap$tailrec(f, l)
    }
  }
  static #listExists(f) {
    return (l) => {
      return kcfa.#listExists$tailrec(f, l)
    }
  }
  static #listFoldl(f) {
    return (init) => {
      return (l) => {
        return kcfa.#listFoldl$tailrec(f, init, l)
      }
    }
  }
  static #listCollate(cmp3) {
    return (l1, l2) => {
      return kcfa.#listCollate$tailrec(cmp3, l1, l2)
    }
  }
  static #listPairFoldl(f) {
    return (init) => {
      return (l1, l2) => {
        return foldf(kcfa, f, l1, l2, init)
      }
    }
  }
  static #listPairAllEq(pred) {
    return (l1, l2) => {
      return kcfa.#listPairAllEq$tailrec(pred, l1, l2)
    }
  }
  static #labelSame(l1, l2) {
    return l1 == l2
  }
  static #varMapEmpty() {
    return kcfa.VmMAP(0, kcfa.VmE)
  }
  static #varMapInsert(map, xk, x) {
    let nItems1, scrut, arg$VmMAP$0$, arg$VmMAP$1$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp;
    if (map instanceof kcfa.VmMAP.class) {
      arg$VmMAP$0$ = map.nItems;
      arg$VmMAP$1$ = map.tree;
      nItems1 = new kcfa.Ref.class(arg$VmMAP$0$);
      scrut = ins(kcfa, xk, x, arg$VmMAP$0$, nItems1, arg$VmMAP$1$);
      if (scrut instanceof kcfa.VmT.class) {
        arg$VmT$1$ = scrut.left;
        arg$VmT$2$ = scrut.key;
        arg$VmT$3$ = scrut.value;
        arg$VmT$4$ = scrut.right;
        tmp = kcfa.VmT(kcfa.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
        return kcfa.VmMAP(nItems1.value, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #varMapFind(map, k) {
    let arg$VmMAP$1$;
    if (map instanceof kcfa.VmMAP.class) {
      arg$VmMAP$1$ = map.tree;
      return find1(kcfa, k, arg$VmMAP$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #varMapNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$VmT$4$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.VmT.class) {
        arg$VmT$4$ = arg$Cons$0$.right;
        tmp = kcfa.#varMapLeft(arg$VmT$4$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.VmE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.VmE,
      kcfa.Nil
    ]);
  }
  static #varMapLeft(t, rest) {
    loopLabel: while (true) {
      let arg$VmT$1$, tmp;
      if (t instanceof kcfa.VmE.class) {
        return rest
      } else if (t instanceof kcfa.VmT.class) {
        arg$VmT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$VmT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #varMapStart(m) {
    return kcfa.#varMapLeft(m, kcfa.Nil)
  }
  static #varMapCollate(cmpRng) {
    return lambda$(kcfa, cmpRng)
  }
  static #compareLambda(lam1, lam2) {
    let element0$, element0$1;
    if (runtime.Tuple.isArrayLike(lam1) && lam1.length === 3) {
      element0$ = runtime.Tuple.get(lam1, 0);
      runtime.Tuple.get(lam1, 1);
      runtime.Tuple.get(lam1, 2);
      if (runtime.Tuple.isArrayLike(lam2) && lam2.length === 3) {
        element0$1 = runtime.Tuple.get(lam2, 0);
        runtime.Tuple.get(lam2, 1);
        runtime.Tuple.get(lam2, 2);
        return kcfa.#intCompare(element0$, element0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #compareExp(e1, e2) {
    let arg$LAMBDA$0$, arg$LAMBDA$0$1, arg$VAR$1$, arg$VAR$1$1;
    if (e1 instanceof kcfa.VAR.class) {
      arg$VAR$1$ = e1.x;
      if (e2 instanceof kcfa.VAR.class) {
        arg$VAR$1$1 = e2.x;
        return kcfa.#stringCompare(arg$VAR$1$, arg$VAR$1$1)
      }
      return kcfa.LESS;
    }
    if (e2 instanceof kcfa.VAR.class) {
      return kcfa.GREATER
    }
    if (e1 instanceof kcfa.LAMBDA.class) {
      arg$LAMBDA$0$ = e1.lam;
      if (e2 instanceof kcfa.LAMBDA.class) {
        arg$LAMBDA$0$1 = e2.lam;
        return kcfa.#compareLambda(arg$LAMBDA$0$, arg$LAMBDA$0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sameCall(c1, c2) {
    let arg$RET$0$, arg$RET$0$1, arg$CALL$0$, arg$CALL$0$1;
    if (c1 instanceof kcfa.CALL.class) {
      arg$CALL$0$ = c1.label;
      if (c2 instanceof kcfa.CALL.class) {
        arg$CALL$0$1 = c2.label;
        return arg$CALL$0$ == arg$CALL$0$1
      }
      return false;
    } else if (c1 instanceof kcfa.RET.class) {
      arg$RET$0$ = c1.label;
      if (c2 instanceof kcfa.RET.class) {
        arg$RET$0$1 = c2.label;
        return arg$RET$0$ == arg$RET$0$1
      }
      return false;
    }
    return false;
  }
  static #timeCompare(t1, t2) {
    return kcfa.#listCollate(kcfa.#intCompare)(t1, t2)
  }
  static #timeSame(t1, t2) {
    return kcfa.#listPairAllEq(kcfa.#labelSame)(t1, t2)
  }
  static #bindCompare(b1, b2) {
    let order, arg$Bnd$0$, arg$Bnd$1$, arg$Bnd$0$1, arg$Bnd$1$1;
    if (b1 instanceof kcfa.Bnd.class) {
      arg$Bnd$0$ = b1.x;
      arg$Bnd$1$ = b1.t;
      if (b2 instanceof kcfa.Bnd.class) {
        arg$Bnd$0$1 = b2.x;
        arg$Bnd$1$1 = b2.t;
        order = kcfa.#stringCompare(arg$Bnd$0$, arg$Bnd$0$1);
        if (order instanceof kcfa.EQUAL.class) {
          return kcfa.#timeCompare(arg$Bnd$1$, arg$Bnd$1$1)
        }
        return order;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvCompare(benv1, benv2) {
    let baseCall;
    baseCall = kcfa.#varMapCollate(kcfa.#bindCompare);
    return runtime.safeCall(baseCall(benv1, benv2))
  }
  static #benvLookup(benv, x) {
    let scrut;
    scrut = kcfa.#varMapFind(benv, x);
    if (scrut instanceof kcfa.Some.class) {
      return scrut.value
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvExtend1(benv, xs, adrs) {
    let lambda$here;
    lambda$here = lambda$1(kcfa);
    return kcfa.#listPairFoldl(lambda$here)(benv)(xs, adrs)
  }
  static #lambdaOf(clos) {
    let arg$Clos$0$;
    if (clos instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos.lam;
      return kcfa.LAMBDA(arg$Clos$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvOf(clos) {
    if (clos instanceof kcfa.Clos.class) {
      return clos.benv
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #closureCompare(clos1, clos2) {
    let order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
    if (clos1 instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos1.lam;
      arg$Clos$1$ = clos1.benv;
      if (clos2 instanceof kcfa.Clos.class) {
        arg$Clos$0$1 = clos2.lam;
        arg$Clos$1$1 = clos2.benv;
        order = kcfa.#compareLambda(arg$Clos$0$, arg$Clos$0$1);
        if (order instanceof kcfa.EQUAL.class) {
          return kcfa.#benvCompare(arg$Clos$1$, arg$Clos$1$1)
        }
        return order;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setSingleton(x) {
    let tmp;
    tmp = kcfa.SetT(kcfa.SetB, kcfa.SetE, x, kcfa.SetE);
    return kcfa.SET(1, tmp)
  }
  static #setNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$SetT$3$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.SetT.class) {
        arg$SetT$3$ = arg$Cons$0$.right;
        tmp = kcfa.#setLeft(arg$SetT$3$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.SetE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.SetE,
      kcfa.Nil
    ]);
  }
  static #setLeft(t, rest) {
    loopLabel: while (true) {
      let arg$SetT$1$, tmp;
      if (t instanceof kcfa.SetE.class) {
        return rest
      } else if (t instanceof kcfa.SetT.class) {
        arg$SetT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$SetT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #setStart(m) {
    return kcfa.#setLeft(m, kcfa.Nil)
  }
  static #setCompare(set1, set2) {
    let arg$SET$1$, arg$SET$1$1, tmp, tmp1;
    if (set1 instanceof kcfa.SET.class) {
      arg$SET$1$ = set1.tree;
      if (set2 instanceof kcfa.SET.class) {
        arg$SET$1$1 = set2.tree;
        tmp = kcfa.#setStart(arg$SET$1$);
        tmp1 = kcfa.#setStart(arg$SET$1$1);
        return cmp1(kcfa, tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setAddItem(a, l) {
    return incr(kcfa, a, kcfa.SetE, l)
  }
  static #setLinkAll(t) {
    return link(kcfa, kcfa.SetE, t)
  }
  static #setUnion(set1, set2) {
    let scrut, arg$SET$1$, arg$SET$1$1, element1$, element0$, tmp, tmp1, tmp2;
    if (set1 instanceof kcfa.SET.class) {
      arg$SET$1$ = set1.tree;
      if (set2 instanceof kcfa.SET.class) {
        arg$SET$1$1 = set2.tree;
        tmp = kcfa.#setStart(arg$SET$1$);
        tmp1 = kcfa.#setStart(arg$SET$1$1);
        scrut = union1(kcfa, tmp, tmp1, 0, kcfa.SetZERO);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          tmp2 = kcfa.#setLinkAll(element1$);
          return kcfa.SET(element0$, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setFoldl(f) {
    return (init) => {
      return (s) => {
        let arg$SET$1$;
        if (s instanceof kcfa.SET.class) {
          arg$SET$1$ = s.tree;
          return foldf1(kcfa, f, arg$SET$1$, init)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #storeMapEmpty() {
    return kcfa.SmMAP(0, kcfa.SmE)
  }
  static #storeMapInsertWith(comb) {
    return (map, xk, x) => {
      let nItems1, scrut, arg$SmMAP$0$, arg$SmMAP$1$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp;
      if (map instanceof kcfa.SmMAP.class) {
        arg$SmMAP$0$ = map.nItems;
        arg$SmMAP$1$ = map.tree;
        nItems1 = new kcfa.Ref.class(arg$SmMAP$0$);
        scrut = ins2(kcfa, comb, xk, x, arg$SmMAP$0$, nItems1, arg$SmMAP$1$);
        if (scrut instanceof kcfa.SmT.class) {
          arg$SmT$1$ = scrut.left;
          arg$SmT$2$ = scrut.key;
          arg$SmT$3$ = scrut.value;
          arg$SmT$4$ = scrut.right;
          tmp = kcfa.SmT(kcfa.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
          return kcfa.SmMAP(nItems1.value, tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapFind(map, k) {
    let arg$SmMAP$1$;
    if (map instanceof kcfa.SmMAP.class) {
      arg$SmMAP$1$ = map.tree;
      return find11(kcfa, k, arg$SmMAP$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeMapFoldli(f) {
    return lambda$2(kcfa, f)
  }
  static #storeMapNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$SmT$4$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.SmT.class) {
        arg$SmT$4$ = arg$Cons$0$.right;
        tmp = kcfa.#storeMapLeft(arg$SmT$4$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.SmE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.SmE,
      kcfa.Nil
    ]);
  }
  static #storeMapLeft(t, rest) {
    loopLabel: while (true) {
      let arg$SmT$1$, tmp;
      if (t instanceof kcfa.SmE.class) {
        return rest
      } else if (t instanceof kcfa.SmT.class) {
        arg$SmT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$SmT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapStart(m) {
    return kcfa.#storeMapLeft(m, kcfa.Nil)
  }
  static #storeMapCollate(cmpRng) {
    return lambda$4(kcfa, cmpRng)
  }
  static #storeMapAddItem(ak, a, l) {
    return incr1(kcfa, ak, a, kcfa.SmE, l)
  }
  static #storeMapLinkAll(t) {
    return link1(kcfa, kcfa.SmE, t)
  }
  static #storeMapWrap(f) {
    return (map1, map2) => {
      let scrut, arg$SmMAP$1$, arg$SmMAP$1$1, element1$, element0$, tmp, tmp1, tmp2;
      if (map1 instanceof kcfa.SmMAP.class) {
        arg$SmMAP$1$ = map1.tree;
        if (map2 instanceof kcfa.SmMAP.class) {
          arg$SmMAP$1$1 = map2.tree;
          tmp = kcfa.#storeMapStart(arg$SmMAP$1$);
          tmp1 = kcfa.#storeMapStart(arg$SmMAP$1$1);
          scrut = runtime.safeCall(f(tmp, tmp1, 0, kcfa.SmZERO));
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp2 = kcfa.#storeMapLinkAll(element1$);
            return kcfa.SmMAP(element0$, tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapIns(p, n, result) {
    loopLabel: while (true) {
      let element1$, element0$, arg$SmT$2$, arg$SmT$3$, tmp, tmp1, tmp2;
      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
        element0$ = runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        if (element0$ instanceof kcfa.SmE.class) {
          return globalThis.Object.freeze([
            n,
            result
          ])
        } else if (element0$ instanceof kcfa.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          tmp = kcfa.#storeMapNext(element1$);
          tmp1 = n + 1;
          tmp2 = kcfa.#storeMapAddItem(arg$SmT$2$, arg$SmT$3$, result);
          p = tmp;
          n = tmp1;
          result = tmp2;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapUnionWith(mergeFn) {
    let union$here;
    union$here = union$(kcfa, mergeFn);
    return kcfa.#storeMapWrap(union$here)
  }
  static #storeCompare(st1, st2) {
    let baseCall;
    baseCall = kcfa.#storeMapCollate(kcfa.#setCompare);
    return runtime.safeCall(baseCall(st1, st2))
  }
  static #storeLookup(st, adr) {
    let scrut;
    scrut = kcfa.#storeMapFind(st, adr);
    if (scrut instanceof kcfa.Some.class) {
      return scrut.value
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeUpdate(st, adr, dv) {
    return kcfa.#storeMapInsertWith(kcfa.#setUnion)(st, adr, dv)
  }
  static #storeUpdate1(st, adrs, dvs) {
    let lambda$here;
    lambda$here = lambda$5(kcfa);
    return kcfa.#listPairFoldl(lambda$here)(st)(adrs, dvs)
  }
  static #storeJoin(st1, st2) {
    let baseCall;
    baseCall = kcfa.#storeMapUnionWith(kcfa.#setUnion);
    return runtime.safeCall(baseCall(st1, st2))
  }
  static #storeOf(state) {
    if (state instanceof kcfa.State.class) {
      return state.store
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #stateSame(state1, state2) {
    let scrut, scrut1, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp, tmp1;
    if (state1 instanceof kcfa.State.class) {
      arg$State$0$ = state1.call;
      arg$State$1$ = state1.benv;
      arg$State$2$ = state1.store;
      arg$State$3$ = state1.time;
      if (state2 instanceof kcfa.State.class) {
        arg$State$0$1 = state2.call;
        arg$State$1$1 = state2.benv;
        arg$State$2$1 = state2.store;
        arg$State$3$1 = state2.time;
        tmp = kcfa.#timeSame(arg$State$3$, arg$State$3$1);
        if (tmp === true) {
          tmp1 = kcfa.#sameCall(arg$State$0$, arg$State$0$1);
          if (tmp1 === true) {
            scrut = kcfa.#benvCompare(arg$State$1$, arg$State$1$1);
            if (scrut instanceof kcfa.EQUAL.class) {
              scrut1 = kcfa.#storeCompare(arg$State$2$, arg$State$2$1);
              if (scrut1 instanceof kcfa.EQUAL.class) {
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initState(call1) {
    let tmp, tmp1;
    tmp = kcfa.#varMapEmpty();
    tmp1 = kcfa.#storeMapEmpty();
    return kcfa.State(call1, tmp, tmp1, kcfa.Nil)
  }
  static #tick(call1, t) {
    let arg$CALL$0$;
    if (call1 instanceof kcfa.CALL.class) {
      arg$CALL$0$ = call1.label;
      return kcfa.Cons(arg$CALL$0$, kcfa.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #alloc(t) {
    return (x) => {
      return kcfa.Bnd(x, t)
    }
  }
  static #atomEval(benv, store) {
    return eval$(kcfa, benv, store)
  }
  static #absNext(state) {
    let time1, procs, params, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$CALL$1$, arg$CALL$2$, baseCall, tmp, apply$here;
    if (state instanceof kcfa.State.class) {
      arg$State$0$ = state.call;
      arg$State$1$ = state.benv;
      arg$State$2$ = state.store;
      arg$State$3$ = state.time;
      if (arg$State$0$ instanceof kcfa.CALL.class) {
        arg$CALL$1$ = arg$State$0$.f;
        arg$CALL$2$ = arg$State$0$.args;
        time1 = kcfa.#tick(arg$State$0$, arg$State$3$);
        baseCall = kcfa.#atomEval(arg$State$1$, arg$State$2$);
        procs = runtime.safeCall(baseCall(arg$CALL$1$));
        tmp = kcfa.#atomEval(arg$State$1$, arg$State$2$);
        params = kcfa.#listMap(tmp)(arg$CALL$2$);
        apply$here = apply$(kcfa, arg$State$2$, time1, params);
        return kcfa.#setFoldl(apply$here)(kcfa.Nil)(procs)
      }
      return kcfa.Nil;
    }
    return kcfa.Nil;
  }
  static #member(sts, st) {
    let lambda$here;
    lambda$here = lambda$6(kcfa, st);
    return kcfa.#listExists(lambda$here)(sts)
  }
  static #insertExp(exp, exps) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (exps instanceof kcfa.Nil.class) {
      return kcfa.Cons(exp, kcfa.Nil)
    } else if (exps instanceof kcfa.Cons.class) {
      arg$Cons$0$ = exps.head;
      arg$Cons$1$ = exps.tail;
      scrut = kcfa.#compareExp(exp, arg$Cons$0$);
      if (scrut instanceof kcfa.LESS.class) {
        tmp = kcfa.#insertExp(exp, arg$Cons$1$);
        return kcfa.Cons(arg$Cons$0$, tmp)
      } else if (scrut instanceof kcfa.GREATER.class) {
        tmp1 = kcfa.Cons(arg$Cons$0$, arg$Cons$1$);
        return kcfa.Cons(exp, tmp1)
      } else if (scrut instanceof kcfa.EQUAL.class) {
        return kcfa.Cons(arg$Cons$0$, arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoBinding(b) {
    if (b instanceof kcfa.Bnd.class) {
      return b.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoValue(clos) {
    let arg$Clos$0$;
    if (clos instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos.lam;
      return kcfa.LAMBDA(arg$Clos$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoValues(d) {
    let lambda$here;
    lambda$here = lambda$7(kcfa);
    return kcfa.#setFoldl(lambda$here)(kcfa.Nil)(d)
  }
  static #monoStoreUpdate(mst, x, exp) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (mst instanceof kcfa.Nil.class) {
      tmp = kcfa.Cons(exp, kcfa.Nil);
      tmp1 = globalThis.Object.freeze([
        x,
        tmp
      ]);
      return kcfa.Cons(tmp1, kcfa.Nil)
    } else if (mst instanceof kcfa.Cons.class) {
      arg$Cons$0$ = mst.head;
      arg$Cons$1$ = mst.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = kcfa.#stringCompare(x, element0$);
        if (scrut instanceof kcfa.LESS.class) {
          tmp2 = globalThis.Object.freeze([
            element0$,
            element1$
          ]);
          tmp3 = kcfa.#monoStoreUpdate(arg$Cons$1$, x, exp);
          return kcfa.Cons(tmp2, tmp3)
        } else if (scrut instanceof kcfa.GREATER.class) {
          tmp4 = kcfa.Cons(exp, kcfa.Nil);
          tmp5 = globalThis.Object.freeze([
            x,
            tmp4
          ]);
          tmp6 = globalThis.Object.freeze([
            element0$,
            element1$
          ]);
          tmp7 = kcfa.Cons(tmp6, arg$Cons$1$);
          return kcfa.Cons(tmp5, tmp7)
        } else if (scrut instanceof kcfa.EQUAL.class) {
          tmp8 = kcfa.#insertExp(exp, element1$);
          tmp9 = globalThis.Object.freeze([
            element0$,
            tmp8
          ]);
          return kcfa.Cons(tmp9, arg$Cons$1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoStoreUpdate1(mst, x, exps) {
    let lambda$here;
    lambda$here = lambda$8(kcfa, x);
    return kcfa.#listFoldl(lambda$here)(mst)(exps)
  }
  static #explore(seen, todo) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
      if (todo instanceof kcfa.Nil.class) {
        return seen
      } else if (todo instanceof kcfa.Cons.class) {
        arg$Cons$0$ = todo.head;
        arg$Cons$1$ = todo.tail;
        scrut = kcfa.#member(seen, arg$Cons$0$);
        if (scrut === true) {
          todo = arg$Cons$1$;
          continue loopLabel
        }
        tmp = kcfa.Cons(arg$Cons$0$, seen);
        tmp1 = kcfa.#absNext(arg$Cons$0$);
        tmp2 = kcfa.#append(tmp1, arg$Cons$1$);
        seen = tmp;
        todo = tmp2;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #summarize(states) {
    let tmp, lambda$here;
    tmp = kcfa.#storeMapEmpty();
    lambda$here = lambda$9(kcfa);
    return kcfa.#listFoldl(lambda$here)(tmp)(states)
  }
  static #monovariantStore(st) {
    let baseCall, callPrefix, lambda$here;
    lambda$here = lambda$10(kcfa);
    baseCall = kcfa.#storeMapFoldli(lambda$here);
    callPrefix = runtime.safeCall(baseCall(kcfa.Nil));
    return runtime.safeCall(callPrefix(st))
  }
  static #stdExample() {
    let labelCount, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, n, tmp11, n1, n2, tmp12, n3, n4, tmp13, n5, n6, n7, tmp14, n8, n9, n10, tmp15, n11, n12, n13, n14, tmp16, tmp17, inlinedVal15, n15, tmp18, n16;
    labelCount = new kcfa.Ref.class(1);
    tmp = kcfa.Cons("k", kcfa.Nil);
    tmp1 = kcfa.Cons("x", tmp);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal = kcfa.VAR(n14, "k");
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    inlinedVal1 = kcfa.VAR(n13, "x");
    tmp2 = kcfa.Cons(inlinedVal1, kcfa.Nil);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal2 = kcfa.CALL(n12, inlinedVal, tmp2);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    tmp15 = globalThis.Object.freeze([
      n11,
      tmp1,
      inlinedVal2
    ]);
    inlinedVal3 = kcfa.LAMBDA(tmp15);
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    inlinedVal4 = kcfa.VAR(n10, "id");
    tmp3 = kcfa.Cons("z", kcfa.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal5 = kcfa.RET(n9, "z");
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    tmp14 = globalThis.Object.freeze([
      n8,
      tmp3,
      inlinedVal5
    ]);
    inlinedVal6 = kcfa.LAMBDA(tmp14);
    tmp4 = kcfa.Cons("a", kcfa.Nil);
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    inlinedVal7 = kcfa.VAR(n7, "id");
    tmp5 = kcfa.Cons("y", kcfa.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal8 = kcfa.RET(n6, "y");
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp13 = globalThis.Object.freeze([
      n5,
      tmp5,
      inlinedVal8
    ]);
    inlinedVal9 = kcfa.LAMBDA(tmp13);
    tmp6 = kcfa.Cons("b", kcfa.Nil);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal10 = kcfa.RET(n4, "b");
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp12 = globalThis.Object.freeze([
      n3,
      tmp6,
      inlinedVal10
    ]);
    inlinedVal11 = kcfa.LAMBDA(tmp12);
    tmp7 = kcfa.Cons(inlinedVal11, kcfa.Nil);
    tmp8 = kcfa.Cons(inlinedVal9, tmp7);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal12 = kcfa.CALL(n2, inlinedVal7, tmp8);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    tmp11 = globalThis.Object.freeze([
      n1,
      tmp4,
      inlinedVal12
    ]);
    inlinedVal13 = kcfa.LAMBDA(tmp11);
    tmp9 = kcfa.Cons(inlinedVal13, kcfa.Nil);
    tmp10 = kcfa.Cons(inlinedVal6, tmp9);
    n = labelCount.value + 1;
    labelCount.value = n;
    inlinedVal14 = kcfa.CALL(n, inlinedVal4, tmp10);
    tmp16 = kcfa.Cons("id", kcfa.Nil);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    tmp18 = globalThis.Object.freeze([
      n16,
      tmp16,
      inlinedVal14
    ]);
    inlinedVal15 = kcfa.LAMBDA(tmp18);
    tmp17 = kcfa.Cons(inlinedVal3, kcfa.Nil);
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    return kcfa.CALL(n15, inlinedVal15, tmp17)
  }
  static #doit() {
    let states, summary, tmp, tmp1, tmp2;
    tmp = kcfa.#stdExample();
    tmp1 = kcfa.#initState(tmp);
    tmp2 = kcfa.Cons(tmp1, kcfa.Nil);
    states = kcfa.#explore(kcfa.Nil, tmp2);
    summary = kcfa.#summarize(states);
    return kcfa.#monovariantStore(summary)
  }
  static main() {
    let lambdaLabel, tmp, lambda$here;
    lambdaLabel = lambda$12(kcfa);
    tmp = kcfa.#doit();
    lambda$here = lambda$11(kcfa, lambdaLabel);
    return kcfa.#listMap(lambda$here)(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "kcfa"];
});
export { foldf as _$_modulePrivate_$_foldf };
export { ins as _$_modulePrivate_$_ins };
export { find1 as _$_modulePrivate_$_find1 };
export { cmp as _$_modulePrivate_$_cmp };
export { cmp1 as _$_modulePrivate_$_cmp1 };
export { incr as _$_modulePrivate_$_incr };
export { link as _$_modulePrivate_$_link };
export { union1 as _$_modulePrivate_$_union1 };
export { ins1 as _$_modulePrivate_$_ins1 };
export { foldf1 as _$_modulePrivate_$_foldf1 };
export { ins2 as _$_modulePrivate_$_ins2 };
export { find11 as _$_modulePrivate_$_find11 };
export { foldf2 as _$_modulePrivate_$_foldf2 };
export { cmp2 as _$_modulePrivate_$_cmp2 };
export { incr1 as _$_modulePrivate_$_incr1 };
export { link1 as _$_modulePrivate_$_link1 };
export { union as _$_modulePrivate_$_union };
export { eval1 as _$_modulePrivate_$_eval };
export { apply as _$_modulePrivate_$_apply };
export { return_ as _$_modulePrivate_$_return_ };
export { newLabel as _$_modulePrivate_$_newLabel };
export { lambda as _$_modulePrivate_$_lambda };
export { var_ as _$_modulePrivate_$_var_ };
export { mkLet as _$_modulePrivate_$_mkLet };
export { call as _$_modulePrivate_$_call };
export { kcfa1 as _$_modulePrivate_$_kcfa };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { union$ as _$_modulePrivate_$_union$ };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { eval$ as _$_modulePrivate_$_eval$ };
export { apply$ as _$_modulePrivate_$_apply$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { mkLet$worker as _$_modulePrivate_$_mkLet$worker };
export { call$worker as _$_modulePrivate_$_call$worker };
export { lambda$worker as _$_modulePrivate_$_lambda$worker };
export default kcfa1;
