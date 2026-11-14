const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const rows$accessorSymbol = globalThis.Symbol("rows");
const cols$accessorSymbol = globalThis.Symbol("cols");
const moveTo$accessorSymbol = globalThis.Symbol("moveTo");
const hasTrip$accessorSymbol = globalThis.Symbol("hasTrip");
const isCat$accessorSymbol = globalThis.Symbol("isCat");
const top$accessorSymbol = globalThis.Symbol("top");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
const listFoldr$tailrec$accessorSymbol = globalThis.Symbol("listFoldr$tailrec");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let go, go1, f, handleItem, lookupTrans, setTrans, minimaxTT, doKid, sz, minimax1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, lambda$1, lambda$2, lambda$3, doKid$, main_gameTree_empty_lambda$$lambda$, main_gameTreeWithTT_empty_lambda$$lambda$, main_gameTreeWithTT_lambda$$lambda$, gameTreeWithTT_lambda$$lambda$, gameTreeWithTT_empty_lambda$$lambda$, gameTree_empty_lambda$$lambda$, empty_lambda$$lambda$, main_gameTree_empty_listTabulate_go$go, main_gameTreeWithTT_empty_listTabulate_go$go, gameTreeWithTT_empty_listTabulate_go$go, gameTree_empty_listTabulate_go$go, empty_listTabulate_go$go, main_gameTree_minimax_snd$snd, main_gameTree_minimax$minimax, main_gameTreeWithTT_minimaxTT$minimaxTT, main_gameTreeWithTT_minimaxTT_snd$snd, gameTreeWithTT_minimaxTT$minimaxTT, gameTreeWithTT_minimaxTT_snd$snd, gameTree_minimax_snd$snd, gameTree_minimax$minimax, minimax_snd$snd, minimaxTT_snd$snd, minimaxTT$worker, gameTree_minimax$minimax$worker, gameTreeWithTT_minimaxTT$minimaxTT$worker, main_gameTreeWithTT_minimaxTT$minimaxTT$worker, main_gameTree_minimax$minimax$worker;
main_gameTree_empty_lambda$$lambda$ = function main_gameTree_empty_lambda$$lambda$(minimax2) {
  return () => {
    return minimax2.None
  }
};
main_gameTreeWithTT_empty_lambda$$lambda$ = function main_gameTreeWithTT_empty_lambda$$lambda$(minimax2) {
  return () => {
    return minimax2.None
  }
};
main_gameTreeWithTT_lambda$$lambda$ = function main_gameTreeWithTT_lambda$$lambda$(unused) {
  return () => {
    return unused
  }
};
gameTreeWithTT_lambda$$lambda$ = function gameTreeWithTT_lambda$$lambda$(unused) {
  return () => {
    return unused
  }
};
gameTreeWithTT_empty_lambda$$lambda$ = function gameTreeWithTT_empty_lambda$$lambda$(minimax2) {
  return () => {
    return minimax2.None
  }
};
gameTree_empty_lambda$$lambda$ = function gameTree_empty_lambda$$lambda$(minimax2) {
  return () => {
    return minimax2.None
  }
};
empty_lambda$$lambda$ = function empty_lambda$$lambda$(minimax2) {
  return () => {
    return minimax2.None
  }
};
main_gameTree_empty_listTabulate_go$go = function main_gameTree_empty_listTabulate_go$go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1());
  tmp1 = i + 1;
  tmp2 = main_gameTree_empty_listTabulate_go$go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
main_gameTreeWithTT_empty_listTabulate_go$go = function main_gameTreeWithTT_empty_listTabulate_go$go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1());
  tmp1 = i + 1;
  tmp2 = main_gameTreeWithTT_empty_listTabulate_go$go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
gameTreeWithTT_empty_listTabulate_go$go = function gameTreeWithTT_empty_listTabulate_go$go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1());
  tmp1 = i + 1;
  tmp2 = gameTreeWithTT_empty_listTabulate_go$go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
gameTree_empty_listTabulate_go$go = function gameTree_empty_listTabulate_go$go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1());
  tmp1 = i + 1;
  tmp2 = gameTree_empty_listTabulate_go$go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
empty_listTabulate_go$go = function empty_listTabulate_go$go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1());
  tmp1 = i + 1;
  tmp2 = empty_listTabulate_go$go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
main_gameTree_minimax_snd$snd = function main_gameTree_minimax_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_gameTree_minimax$minimax = function main_gameTree_minimax$minimax(p) {
  return (b) => {
    return main_gameTree_minimax$minimax$worker(p, b)
  }
};
main_gameTree_minimax$minimax$worker = function main_gameTree_minimax$minimax$worker(p, b) {
  let tmp, tmp1, tmp2, inlinedVal, p1, tmp3, p2, inlinedVal1;
  p1 = minimax1.X;
  tmp3 = minimax1[rows$accessorSymbol]();
  p2 = minimax1[hasTrip$accessorSymbol](b, p1);
  inlinedVal1 = minimax1[listExists$tailrec$accessorSymbol](p2, tmp3);
  if (inlinedVal1 === false) {
    let tmp4, p3, inlinedVal2;
    tmp4 = minimax1[cols$accessorSymbol]();
    p3 = minimax1[hasTrip$accessorSymbol](b, p1);
    inlinedVal2 = minimax1[listExists$tailrec$accessorSymbol](p3, tmp4);
    if (inlinedVal2 === false) {
      let inlinedVal3, p4, inlinedVal4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      tmp5 = minimax1.Cons(8, minimax1.Nil);
      tmp6 = minimax1.Cons(4, tmp5);
      tmp7 = minimax1.Cons(0, tmp6);
      tmp8 = minimax1.Cons(6, minimax1.Nil);
      tmp9 = minimax1.Cons(4, tmp8);
      tmp10 = minimax1.Cons(2, tmp9);
      tmp11 = minimax1.Cons(tmp10, minimax1.Nil);
      inlinedVal3 = minimax1.Cons(tmp7, tmp11);
      p4 = minimax1[hasTrip$accessorSymbol](b, p1);
      inlinedVal4 = minimax1[listExists$tailrec$accessorSymbol](p4, inlinedVal3);
      if (inlinedVal4 === false) {
        let p5, tmp12, p6, inlinedVal5;
        p5 = minimax1.O;
        tmp12 = minimax1[rows$accessorSymbol]();
        p6 = minimax1[hasTrip$accessorSymbol](b, p5);
        inlinedVal5 = minimax1[listExists$tailrec$accessorSymbol](p6, tmp12);
        if (inlinedVal5 === false) {
          let tmp13, p7, inlinedVal6;
          tmp13 = minimax1[cols$accessorSymbol]();
          p7 = minimax1[hasTrip$accessorSymbol](b, p5);
          inlinedVal6 = minimax1[listExists$tailrec$accessorSymbol](p7, tmp13);
          if (inlinedVal6 === false) {
            let inlinedVal7, p8, inlinedVal8, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
            tmp14 = minimax1.Cons(8, minimax1.Nil);
            tmp15 = minimax1.Cons(4, tmp14);
            tmp16 = minimax1.Cons(0, tmp15);
            tmp17 = minimax1.Cons(6, minimax1.Nil);
            tmp18 = minimax1.Cons(4, tmp17);
            tmp19 = minimax1.Cons(2, tmp18);
            tmp20 = minimax1.Cons(tmp19, minimax1.Nil);
            inlinedVal7 = minimax1.Cons(tmp16, tmp20);
            p8 = minimax1[hasTrip$accessorSymbol](b, p5);
            inlinedVal8 = minimax1[listExists$tailrec$accessorSymbol](p8, inlinedVal7);
            if (inlinedVal8 === false) {
              inlinedVal = minimax1[isCat$accessorSymbol](b);
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal2, p3, tmp4, p4, inlinedVal3;
    p3 = minimax1.X;
    tmp4 = minimax1[rows$accessorSymbol]();
    p4 = minimax1[hasTrip$accessorSymbol](b, p3);
    inlinedVal3 = minimax1[listExists$tailrec$accessorSymbol](p4, tmp4);
    if (inlinedVal3 === false) {
      let tmp5, p5, inlinedVal4;
      tmp5 = minimax1[cols$accessorSymbol]();
      p5 = minimax1[hasTrip$accessorSymbol](b, p3);
      inlinedVal4 = minimax1[listExists$tailrec$accessorSymbol](p5, tmp5);
      if (inlinedVal4 === false) {
        let inlinedVal5, p6, inlinedVal6, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
        tmp6 = minimax1.Cons(8, minimax1.Nil);
        tmp7 = minimax1.Cons(4, tmp6);
        tmp8 = minimax1.Cons(0, tmp7);
        tmp9 = minimax1.Cons(6, minimax1.Nil);
        tmp10 = minimax1.Cons(4, tmp9);
        tmp11 = minimax1.Cons(2, tmp10);
        tmp12 = minimax1.Cons(tmp11, minimax1.Nil);
        inlinedVal5 = minimax1.Cons(tmp8, tmp12);
        p6 = minimax1[hasTrip$accessorSymbol](b, p3);
        inlinedVal6 = minimax1[listExists$tailrec$accessorSymbol](p6, inlinedVal5);
        if (inlinedVal6 === true) {
          inlinedVal2 = 1;
        } else {
          let p7, tmp13, p8, inlinedVal7;
          p7 = minimax1.O;
          tmp13 = minimax1[rows$accessorSymbol]();
          p8 = minimax1[hasTrip$accessorSymbol](b, p7);
          inlinedVal7 = minimax1[listExists$tailrec$accessorSymbol](p8, tmp13);
          if (inlinedVal7 === false) {
            let tmp14, p9, inlinedVal8;
            tmp14 = minimax1[cols$accessorSymbol]();
            p9 = minimax1[hasTrip$accessorSymbol](b, p7);
            inlinedVal8 = minimax1[listExists$tailrec$accessorSymbol](p9, tmp14);
            if (inlinedVal8 === false) {
              let inlinedVal9, p10, inlinedVal10, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
              tmp15 = minimax1.Cons(8, minimax1.Nil);
              tmp16 = minimax1.Cons(4, tmp15);
              tmp17 = minimax1.Cons(0, tmp16);
              tmp18 = minimax1.Cons(6, minimax1.Nil);
              tmp19 = minimax1.Cons(4, tmp18);
              tmp20 = minimax1.Cons(2, tmp19);
              tmp21 = minimax1.Cons(tmp20, minimax1.Nil);
              inlinedVal9 = minimax1.Cons(tmp17, tmp21);
              p10 = minimax1[hasTrip$accessorSymbol](b, p7);
              inlinedVal10 = minimax1[listExists$tailrec$accessorSymbol](p10, inlinedVal9);
              if (inlinedVal10 === true) {
                inlinedVal2 = -1;
              } else {
                inlinedVal2 = 0;
              }
            } else {
              inlinedVal2 = -1;
            }
          } else {
            inlinedVal2 = -1;
          }
        }
      } else {
        inlinedVal2 = 1;
      }
    } else {
      inlinedVal2 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal2
    ]);
    return minimax1.Rose(tmp, minimax1.Nil)
  }
  {
    let inlinedVal2, f1, inlinedVal3, g, f2, inlinedVal4, inlinedVal5, f3, inlinedVal6;
    if (p instanceof minimax1.X.class) {
      inlinedVal2 = minimax1.O;
    } else if (p instanceof minimax1.O.class) {
      inlinedVal2 = minimax1.X;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    inlinedVal5 = f(minimax1, 0, b, minimax1.Nil);
    f3 = minimax1[moveTo$accessorSymbol](b, p);
    inlinedVal6 = minimax1[map$tailrec$accessorSymbol](f3, inlinedVal5);
    f1 = main_gameTree_minimax$minimax(inlinedVal2);
    inlinedVal3 = minimax1[map$tailrec$accessorSymbol](f1, inlinedVal6);
    g = minimax1[top$accessorSymbol];
    f2 = lambda$(main_gameTree_minimax_snd$snd, g);
    inlinedVal4 = minimax1[map$tailrec$accessorSymbol](f2, inlinedVal3);
    if (p instanceof minimax1.X.class) {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal4 instanceof minimax1.Cons.class) {
        let inlinedVal7;
        arg$Cons$0$ = inlinedVal4.head;
        arg$Cons$1$ = inlinedVal4.tail;
        inlinedVal7 = minimax1[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
        tmp1 = globalThis.Object.freeze([
          b,
          inlinedVal7
        ]);
        return minimax1.Rose(tmp1, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal4 instanceof minimax1.Cons.class) {
        let inlinedVal7;
        arg$Cons$0$ = inlinedVal4.head;
        arg$Cons$1$ = inlinedVal4.tail;
        inlinedVal7 = minimax1[listFoldl$tailrec$accessorSymbol](lambda2, arg$Cons$0$, arg$Cons$1$);
        tmp2 = globalThis.Object.freeze([
          b,
          inlinedVal7
        ]);
        return minimax1.Rose(tmp2, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
main_gameTreeWithTT_minimaxTT$minimaxTT = function main_gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b)
  }
};
main_gameTreeWithTT_minimaxTT$minimaxTT$worker = function main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, arg$Some$0$, tmp1, tmp2, tmp3, inlinedVal, p1, tmp4, p2, inlinedVal1;
  p1 = minimax2.X;
  tmp4 = minimax2[rows$accessorSymbol]();
  p2 = minimax2[hasTrip$accessorSymbol](b, p1);
  inlinedVal1 = minimax2[listExists$tailrec$accessorSymbol](p2, tmp4);
  if (inlinedVal1 === false) {
    let tmp5, p3, inlinedVal2;
    tmp5 = minimax2[cols$accessorSymbol]();
    p3 = minimax2[hasTrip$accessorSymbol](b, p1);
    inlinedVal2 = minimax2[listExists$tailrec$accessorSymbol](p3, tmp5);
    if (inlinedVal2 === false) {
      let inlinedVal3, p4, inlinedVal4, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      tmp6 = minimax2.Cons(8, minimax2.Nil);
      tmp7 = minimax2.Cons(4, tmp6);
      tmp8 = minimax2.Cons(0, tmp7);
      tmp9 = minimax2.Cons(6, minimax2.Nil);
      tmp10 = minimax2.Cons(4, tmp9);
      tmp11 = minimax2.Cons(2, tmp10);
      tmp12 = minimax2.Cons(tmp11, minimax2.Nil);
      inlinedVal3 = minimax2.Cons(tmp8, tmp12);
      p4 = minimax2[hasTrip$accessorSymbol](b, p1);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p4, inlinedVal3);
      if (inlinedVal4 === false) {
        let p5, tmp13, p6, inlinedVal5;
        p5 = minimax2.O;
        tmp13 = minimax2[rows$accessorSymbol]();
        p6 = minimax2[hasTrip$accessorSymbol](b, p5);
        inlinedVal5 = minimax2[listExists$tailrec$accessorSymbol](p6, tmp13);
        if (inlinedVal5 === false) {
          let tmp14, p7, inlinedVal6;
          tmp14 = minimax2[cols$accessorSymbol]();
          p7 = minimax2[hasTrip$accessorSymbol](b, p5);
          inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p7, tmp14);
          if (inlinedVal6 === false) {
            let inlinedVal7, p8, inlinedVal8, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
            tmp15 = minimax2.Cons(8, minimax2.Nil);
            tmp16 = minimax2.Cons(4, tmp15);
            tmp17 = minimax2.Cons(0, tmp16);
            tmp18 = minimax2.Cons(6, minimax2.Nil);
            tmp19 = minimax2.Cons(4, tmp18);
            tmp20 = minimax2.Cons(2, tmp19);
            tmp21 = minimax2.Cons(tmp20, minimax2.Nil);
            inlinedVal7 = minimax2.Cons(tmp17, tmp21);
            p8 = minimax2[hasTrip$accessorSymbol](b, p5);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p8, inlinedVal7);
            if (inlinedVal8 === false) {
              inlinedVal = minimax2[isCat$accessorSymbol](b);
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal2, p3, tmp5, p4, inlinedVal3;
    p3 = minimax2.X;
    tmp5 = minimax2[rows$accessorSymbol]();
    p4 = minimax2[hasTrip$accessorSymbol](b, p3);
    inlinedVal3 = minimax2[listExists$tailrec$accessorSymbol](p4, tmp5);
    if (inlinedVal3 === false) {
      let tmp6, p5, inlinedVal4;
      tmp6 = minimax2[cols$accessorSymbol]();
      p5 = minimax2[hasTrip$accessorSymbol](b, p3);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p5, tmp6);
      if (inlinedVal4 === false) {
        let inlinedVal5, p6, inlinedVal6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
        tmp7 = minimax2.Cons(8, minimax2.Nil);
        tmp8 = minimax2.Cons(4, tmp7);
        tmp9 = minimax2.Cons(0, tmp8);
        tmp10 = minimax2.Cons(6, minimax2.Nil);
        tmp11 = minimax2.Cons(4, tmp10);
        tmp12 = minimax2.Cons(2, tmp11);
        tmp13 = minimax2.Cons(tmp12, minimax2.Nil);
        inlinedVal5 = minimax2.Cons(tmp9, tmp13);
        p6 = minimax2[hasTrip$accessorSymbol](b, p3);
        inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p6, inlinedVal5);
        if (inlinedVal6 === true) {
          inlinedVal2 = 1;
        } else {
          let p7, tmp14, p8, inlinedVal7;
          p7 = minimax2.O;
          tmp14 = minimax2[rows$accessorSymbol]();
          p8 = minimax2[hasTrip$accessorSymbol](b, p7);
          inlinedVal7 = minimax2[listExists$tailrec$accessorSymbol](p8, tmp14);
          if (inlinedVal7 === false) {
            let tmp15, p9, inlinedVal8;
            tmp15 = minimax2[cols$accessorSymbol]();
            p9 = minimax2[hasTrip$accessorSymbol](b, p7);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p9, tmp15);
            if (inlinedVal8 === false) {
              let inlinedVal9, p10, inlinedVal10, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
              tmp16 = minimax2.Cons(8, minimax2.Nil);
              tmp17 = minimax2.Cons(4, tmp16);
              tmp18 = minimax2.Cons(0, tmp17);
              tmp19 = minimax2.Cons(6, minimax2.Nil);
              tmp20 = minimax2.Cons(4, tmp19);
              tmp21 = minimax2.Cons(2, tmp20);
              tmp22 = minimax2.Cons(tmp21, minimax2.Nil);
              inlinedVal9 = minimax2.Cons(tmp18, tmp22);
              p10 = minimax2[hasTrip$accessorSymbol](b, p7);
              inlinedVal10 = minimax2[listExists$tailrec$accessorSymbol](p10, inlinedVal9);
              if (inlinedVal10 === true) {
                inlinedVal2 = -1;
              } else {
                inlinedVal2 = 0;
              }
            } else {
              inlinedVal2 = -1;
            }
          } else {
            inlinedVal2 = -1;
          }
        }
      } else {
        inlinedVal2 = 1;
      }
    } else {
      inlinedVal2 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal2
    ]);
    return minimax2.Rose(tmp, minimax2.Nil)
  }
  {
    let inlinedVal2, scrut, inlinedVal3, inlinedVal4, start, tmp5, f1, inlinedVal5;
    if (p instanceof minimax1.X.class) {
      tmp5 = 1;
    } else {
      tmp5 = 0;
    }
    start = globalThis.Object.freeze([
      tmp5,
      3
    ]);
    f1 = lambda$2(minimax1);
    inlinedVal5 = minimax1[listFoldr$tailrec$accessorSymbol](f1, start, b);
    if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 2) {
      inlinedVal4 = runtime.Tuple.get(inlinedVal5, 0);
      inlinedVal3 = transTable.at(inlinedVal4);
      scrut = inlinedVal3 == -2;
      if (scrut === true) {
        let inlinedVal6, f2, inlinedVal7, g, f3, inlinedVal8, inlinedVal9, f4, inlinedVal10, inlinedVal11, start1, tmp6, f5, inlinedVal12;
        if (p instanceof minimax2.X.class) {
          inlinedVal6 = minimax2.O;
        } else if (p instanceof minimax2.O.class) {
          inlinedVal6 = minimax2.X;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal9 = f(minimax2, 0, b, minimax2.Nil);
        f4 = minimax2[moveTo$accessorSymbol](b, p);
        inlinedVal10 = minimax2[map$tailrec$accessorSymbol](f4, inlinedVal9);
        f2 = main_gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, inlinedVal6);
        inlinedVal7 = minimax2[map$tailrec$accessorSymbol](f2, inlinedVal10);
        g = minimax2[top$accessorSymbol];
        f3 = lambda$(main_gameTreeWithTT_minimaxTT_snd$snd, g);
        inlinedVal8 = minimax2[map$tailrec$accessorSymbol](f3, inlinedVal7);
        if (p instanceof minimax2.X.class) {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda2, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
        if (p instanceof minimax1.X.class) {
          tmp6 = 1;
        } else {
          tmp6 = 0;
        }
        start1 = globalThis.Object.freeze([
          tmp6,
          3
        ]);
        f5 = lambda$2(minimax1);
        inlinedVal12 = minimax1[listFoldr$tailrec$accessorSymbol](f5, start1, b);
        if (runtime.Tuple.isArrayLike(inlinedVal12) && inlinedVal12.length === 2) {
          inlinedVal11 = runtime.Tuple.get(inlinedVal12, 0);
          transTable[inlinedVal11] = tmp2;
          tmp3 = globalThis.Object.freeze([
            b,
            tmp2
          ]);
          return minimax2.Rose(tmp3, inlinedVal7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      inlinedVal2 = minimax2.Some(inlinedVal3);
      arg$Some$0$ = inlinedVal2.value;
      tmp1 = globalThis.Object.freeze([
        b,
        arg$Some$0$
      ]);
      return minimax2.Rose(tmp1, minimax2.Nil);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_gameTreeWithTT_minimaxTT_snd$snd = function main_gameTreeWithTT_minimaxTT_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
gameTreeWithTT_minimaxTT$minimaxTT = function gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b)
  }
};
gameTreeWithTT_minimaxTT$minimaxTT$worker = function gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, arg$Some$0$, tmp1, tmp2, tmp3, inlinedVal, p1, tmp4, p2, inlinedVal1;
  p1 = minimax2.X;
  tmp4 = minimax2[rows$accessorSymbol]();
  p2 = minimax2[hasTrip$accessorSymbol](b, p1);
  inlinedVal1 = minimax2[listExists$tailrec$accessorSymbol](p2, tmp4);
  if (inlinedVal1 === false) {
    let tmp5, p3, inlinedVal2;
    tmp5 = minimax2[cols$accessorSymbol]();
    p3 = minimax2[hasTrip$accessorSymbol](b, p1);
    inlinedVal2 = minimax2[listExists$tailrec$accessorSymbol](p3, tmp5);
    if (inlinedVal2 === false) {
      let inlinedVal3, p4, inlinedVal4, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      tmp6 = minimax2.Cons(8, minimax2.Nil);
      tmp7 = minimax2.Cons(4, tmp6);
      tmp8 = minimax2.Cons(0, tmp7);
      tmp9 = minimax2.Cons(6, minimax2.Nil);
      tmp10 = minimax2.Cons(4, tmp9);
      tmp11 = minimax2.Cons(2, tmp10);
      tmp12 = minimax2.Cons(tmp11, minimax2.Nil);
      inlinedVal3 = minimax2.Cons(tmp8, tmp12);
      p4 = minimax2[hasTrip$accessorSymbol](b, p1);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p4, inlinedVal3);
      if (inlinedVal4 === false) {
        let p5, tmp13, p6, inlinedVal5;
        p5 = minimax2.O;
        tmp13 = minimax2[rows$accessorSymbol]();
        p6 = minimax2[hasTrip$accessorSymbol](b, p5);
        inlinedVal5 = minimax2[listExists$tailrec$accessorSymbol](p6, tmp13);
        if (inlinedVal5 === false) {
          let tmp14, p7, inlinedVal6;
          tmp14 = minimax2[cols$accessorSymbol]();
          p7 = minimax2[hasTrip$accessorSymbol](b, p5);
          inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p7, tmp14);
          if (inlinedVal6 === false) {
            let inlinedVal7, p8, inlinedVal8, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
            tmp15 = minimax2.Cons(8, minimax2.Nil);
            tmp16 = minimax2.Cons(4, tmp15);
            tmp17 = minimax2.Cons(0, tmp16);
            tmp18 = minimax2.Cons(6, minimax2.Nil);
            tmp19 = minimax2.Cons(4, tmp18);
            tmp20 = minimax2.Cons(2, tmp19);
            tmp21 = minimax2.Cons(tmp20, minimax2.Nil);
            inlinedVal7 = minimax2.Cons(tmp17, tmp21);
            p8 = minimax2[hasTrip$accessorSymbol](b, p5);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p8, inlinedVal7);
            if (inlinedVal8 === false) {
              inlinedVal = minimax2[isCat$accessorSymbol](b);
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal2, p3, tmp5, p4, inlinedVal3;
    p3 = minimax2.X;
    tmp5 = minimax2[rows$accessorSymbol]();
    p4 = minimax2[hasTrip$accessorSymbol](b, p3);
    inlinedVal3 = minimax2[listExists$tailrec$accessorSymbol](p4, tmp5);
    if (inlinedVal3 === false) {
      let tmp6, p5, inlinedVal4;
      tmp6 = minimax2[cols$accessorSymbol]();
      p5 = minimax2[hasTrip$accessorSymbol](b, p3);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p5, tmp6);
      if (inlinedVal4 === false) {
        let inlinedVal5, p6, inlinedVal6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
        tmp7 = minimax2.Cons(8, minimax2.Nil);
        tmp8 = minimax2.Cons(4, tmp7);
        tmp9 = minimax2.Cons(0, tmp8);
        tmp10 = minimax2.Cons(6, minimax2.Nil);
        tmp11 = minimax2.Cons(4, tmp10);
        tmp12 = minimax2.Cons(2, tmp11);
        tmp13 = minimax2.Cons(tmp12, minimax2.Nil);
        inlinedVal5 = minimax2.Cons(tmp9, tmp13);
        p6 = minimax2[hasTrip$accessorSymbol](b, p3);
        inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p6, inlinedVal5);
        if (inlinedVal6 === true) {
          inlinedVal2 = 1;
        } else {
          let p7, tmp14, p8, inlinedVal7;
          p7 = minimax2.O;
          tmp14 = minimax2[rows$accessorSymbol]();
          p8 = minimax2[hasTrip$accessorSymbol](b, p7);
          inlinedVal7 = minimax2[listExists$tailrec$accessorSymbol](p8, tmp14);
          if (inlinedVal7 === false) {
            let tmp15, p9, inlinedVal8;
            tmp15 = minimax2[cols$accessorSymbol]();
            p9 = minimax2[hasTrip$accessorSymbol](b, p7);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p9, tmp15);
            if (inlinedVal8 === false) {
              let inlinedVal9, p10, inlinedVal10, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
              tmp16 = minimax2.Cons(8, minimax2.Nil);
              tmp17 = minimax2.Cons(4, tmp16);
              tmp18 = minimax2.Cons(0, tmp17);
              tmp19 = minimax2.Cons(6, minimax2.Nil);
              tmp20 = minimax2.Cons(4, tmp19);
              tmp21 = minimax2.Cons(2, tmp20);
              tmp22 = minimax2.Cons(tmp21, minimax2.Nil);
              inlinedVal9 = minimax2.Cons(tmp18, tmp22);
              p10 = minimax2[hasTrip$accessorSymbol](b, p7);
              inlinedVal10 = minimax2[listExists$tailrec$accessorSymbol](p10, inlinedVal9);
              if (inlinedVal10 === true) {
                inlinedVal2 = -1;
              } else {
                inlinedVal2 = 0;
              }
            } else {
              inlinedVal2 = -1;
            }
          } else {
            inlinedVal2 = -1;
          }
        }
      } else {
        inlinedVal2 = 1;
      }
    } else {
      inlinedVal2 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal2
    ]);
    return minimax2.Rose(tmp, minimax2.Nil)
  }
  {
    let inlinedVal2, scrut, inlinedVal3, inlinedVal4, start, tmp5, f1, inlinedVal5;
    if (p instanceof minimax1.X.class) {
      tmp5 = 1;
    } else {
      tmp5 = 0;
    }
    start = globalThis.Object.freeze([
      tmp5,
      3
    ]);
    f1 = lambda$2(minimax1);
    inlinedVal5 = minimax1[listFoldr$tailrec$accessorSymbol](f1, start, b);
    if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 2) {
      inlinedVal4 = runtime.Tuple.get(inlinedVal5, 0);
      inlinedVal3 = transTable.at(inlinedVal4);
      scrut = inlinedVal3 == -2;
      if (scrut === true) {
        let inlinedVal6, f2, inlinedVal7, g, f3, inlinedVal8, inlinedVal9, f4, inlinedVal10, inlinedVal11, start1, tmp6, f5, inlinedVal12;
        if (p instanceof minimax2.X.class) {
          inlinedVal6 = minimax2.O;
        } else if (p instanceof minimax2.O.class) {
          inlinedVal6 = minimax2.X;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal9 = f(minimax2, 0, b, minimax2.Nil);
        f4 = minimax2[moveTo$accessorSymbol](b, p);
        inlinedVal10 = minimax2[map$tailrec$accessorSymbol](f4, inlinedVal9);
        f2 = gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, inlinedVal6);
        inlinedVal7 = minimax2[map$tailrec$accessorSymbol](f2, inlinedVal10);
        g = minimax2[top$accessorSymbol];
        f3 = lambda$(gameTreeWithTT_minimaxTT_snd$snd, g);
        inlinedVal8 = minimax2[map$tailrec$accessorSymbol](f3, inlinedVal7);
        if (p instanceof minimax2.X.class) {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda2, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
        if (p instanceof minimax1.X.class) {
          tmp6 = 1;
        } else {
          tmp6 = 0;
        }
        start1 = globalThis.Object.freeze([
          tmp6,
          3
        ]);
        f5 = lambda$2(minimax1);
        inlinedVal12 = minimax1[listFoldr$tailrec$accessorSymbol](f5, start1, b);
        if (runtime.Tuple.isArrayLike(inlinedVal12) && inlinedVal12.length === 2) {
          inlinedVal11 = runtime.Tuple.get(inlinedVal12, 0);
          transTable[inlinedVal11] = tmp2;
          tmp3 = globalThis.Object.freeze([
            b,
            tmp2
          ]);
          return minimax2.Rose(tmp3, inlinedVal7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      inlinedVal2 = minimax2.Some(inlinedVal3);
      arg$Some$0$ = inlinedVal2.value;
      tmp1 = globalThis.Object.freeze([
        b,
        arg$Some$0$
      ]);
      return minimax2.Rose(tmp1, minimax2.Nil);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
gameTreeWithTT_minimaxTT_snd$snd = function gameTreeWithTT_minimaxTT_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
gameTree_minimax_snd$snd = function gameTree_minimax_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
gameTree_minimax$minimax = function gameTree_minimax$minimax(p) {
  return (b) => {
    return gameTree_minimax$minimax$worker(p, b)
  }
};
gameTree_minimax$minimax$worker = function gameTree_minimax$minimax$worker(p, b) {
  let tmp, tmp1, tmp2, inlinedVal, p1, tmp3, p2, inlinedVal1;
  p1 = minimax1.X;
  tmp3 = minimax1[rows$accessorSymbol]();
  p2 = minimax1[hasTrip$accessorSymbol](b, p1);
  inlinedVal1 = minimax1[listExists$tailrec$accessorSymbol](p2, tmp3);
  if (inlinedVal1 === false) {
    let tmp4, p3, inlinedVal2;
    tmp4 = minimax1[cols$accessorSymbol]();
    p3 = minimax1[hasTrip$accessorSymbol](b, p1);
    inlinedVal2 = minimax1[listExists$tailrec$accessorSymbol](p3, tmp4);
    if (inlinedVal2 === false) {
      let inlinedVal3, p4, inlinedVal4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      tmp5 = minimax1.Cons(8, minimax1.Nil);
      tmp6 = minimax1.Cons(4, tmp5);
      tmp7 = minimax1.Cons(0, tmp6);
      tmp8 = minimax1.Cons(6, minimax1.Nil);
      tmp9 = minimax1.Cons(4, tmp8);
      tmp10 = minimax1.Cons(2, tmp9);
      tmp11 = minimax1.Cons(tmp10, minimax1.Nil);
      inlinedVal3 = minimax1.Cons(tmp7, tmp11);
      p4 = minimax1[hasTrip$accessorSymbol](b, p1);
      inlinedVal4 = minimax1[listExists$tailrec$accessorSymbol](p4, inlinedVal3);
      if (inlinedVal4 === false) {
        let p5, tmp12, p6, inlinedVal5;
        p5 = minimax1.O;
        tmp12 = minimax1[rows$accessorSymbol]();
        p6 = minimax1[hasTrip$accessorSymbol](b, p5);
        inlinedVal5 = minimax1[listExists$tailrec$accessorSymbol](p6, tmp12);
        if (inlinedVal5 === false) {
          let tmp13, p7, inlinedVal6;
          tmp13 = minimax1[cols$accessorSymbol]();
          p7 = minimax1[hasTrip$accessorSymbol](b, p5);
          inlinedVal6 = minimax1[listExists$tailrec$accessorSymbol](p7, tmp13);
          if (inlinedVal6 === false) {
            let inlinedVal7, p8, inlinedVal8, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
            tmp14 = minimax1.Cons(8, minimax1.Nil);
            tmp15 = minimax1.Cons(4, tmp14);
            tmp16 = minimax1.Cons(0, tmp15);
            tmp17 = minimax1.Cons(6, minimax1.Nil);
            tmp18 = minimax1.Cons(4, tmp17);
            tmp19 = minimax1.Cons(2, tmp18);
            tmp20 = minimax1.Cons(tmp19, minimax1.Nil);
            inlinedVal7 = minimax1.Cons(tmp16, tmp20);
            p8 = minimax1[hasTrip$accessorSymbol](b, p5);
            inlinedVal8 = minimax1[listExists$tailrec$accessorSymbol](p8, inlinedVal7);
            if (inlinedVal8 === false) {
              inlinedVal = minimax1[isCat$accessorSymbol](b);
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal2, p3, tmp4, p4, inlinedVal3;
    p3 = minimax1.X;
    tmp4 = minimax1[rows$accessorSymbol]();
    p4 = minimax1[hasTrip$accessorSymbol](b, p3);
    inlinedVal3 = minimax1[listExists$tailrec$accessorSymbol](p4, tmp4);
    if (inlinedVal3 === false) {
      let tmp5, p5, inlinedVal4;
      tmp5 = minimax1[cols$accessorSymbol]();
      p5 = minimax1[hasTrip$accessorSymbol](b, p3);
      inlinedVal4 = minimax1[listExists$tailrec$accessorSymbol](p5, tmp5);
      if (inlinedVal4 === false) {
        let inlinedVal5, p6, inlinedVal6, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
        tmp6 = minimax1.Cons(8, minimax1.Nil);
        tmp7 = minimax1.Cons(4, tmp6);
        tmp8 = minimax1.Cons(0, tmp7);
        tmp9 = minimax1.Cons(6, minimax1.Nil);
        tmp10 = minimax1.Cons(4, tmp9);
        tmp11 = minimax1.Cons(2, tmp10);
        tmp12 = minimax1.Cons(tmp11, minimax1.Nil);
        inlinedVal5 = minimax1.Cons(tmp8, tmp12);
        p6 = minimax1[hasTrip$accessorSymbol](b, p3);
        inlinedVal6 = minimax1[listExists$tailrec$accessorSymbol](p6, inlinedVal5);
        if (inlinedVal6 === true) {
          inlinedVal2 = 1;
        } else {
          let p7, tmp13, p8, inlinedVal7;
          p7 = minimax1.O;
          tmp13 = minimax1[rows$accessorSymbol]();
          p8 = minimax1[hasTrip$accessorSymbol](b, p7);
          inlinedVal7 = minimax1[listExists$tailrec$accessorSymbol](p8, tmp13);
          if (inlinedVal7 === false) {
            let tmp14, p9, inlinedVal8;
            tmp14 = minimax1[cols$accessorSymbol]();
            p9 = minimax1[hasTrip$accessorSymbol](b, p7);
            inlinedVal8 = minimax1[listExists$tailrec$accessorSymbol](p9, tmp14);
            if (inlinedVal8 === false) {
              let inlinedVal9, p10, inlinedVal10, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
              tmp15 = minimax1.Cons(8, minimax1.Nil);
              tmp16 = minimax1.Cons(4, tmp15);
              tmp17 = minimax1.Cons(0, tmp16);
              tmp18 = minimax1.Cons(6, minimax1.Nil);
              tmp19 = minimax1.Cons(4, tmp18);
              tmp20 = minimax1.Cons(2, tmp19);
              tmp21 = minimax1.Cons(tmp20, minimax1.Nil);
              inlinedVal9 = minimax1.Cons(tmp17, tmp21);
              p10 = minimax1[hasTrip$accessorSymbol](b, p7);
              inlinedVal10 = minimax1[listExists$tailrec$accessorSymbol](p10, inlinedVal9);
              if (inlinedVal10 === true) {
                inlinedVal2 = -1;
              } else {
                inlinedVal2 = 0;
              }
            } else {
              inlinedVal2 = -1;
            }
          } else {
            inlinedVal2 = -1;
          }
        }
      } else {
        inlinedVal2 = 1;
      }
    } else {
      inlinedVal2 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal2
    ]);
    return minimax1.Rose(tmp, minimax1.Nil)
  }
  {
    let inlinedVal2, f1, inlinedVal3, g, f2, inlinedVal4, inlinedVal5, f3, inlinedVal6;
    if (p instanceof minimax1.X.class) {
      inlinedVal2 = minimax1.O;
    } else if (p instanceof minimax1.O.class) {
      inlinedVal2 = minimax1.X;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    inlinedVal5 = f(minimax1, 0, b, minimax1.Nil);
    f3 = minimax1[moveTo$accessorSymbol](b, p);
    inlinedVal6 = minimax1[map$tailrec$accessorSymbol](f3, inlinedVal5);
    f1 = gameTree_minimax$minimax(inlinedVal2);
    inlinedVal3 = minimax1[map$tailrec$accessorSymbol](f1, inlinedVal6);
    g = minimax1[top$accessorSymbol];
    f2 = lambda$(gameTree_minimax_snd$snd, g);
    inlinedVal4 = minimax1[map$tailrec$accessorSymbol](f2, inlinedVal3);
    if (p instanceof minimax1.X.class) {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal4 instanceof minimax1.Cons.class) {
        let inlinedVal7;
        arg$Cons$0$ = inlinedVal4.head;
        arg$Cons$1$ = inlinedVal4.tail;
        inlinedVal7 = minimax1[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
        tmp1 = globalThis.Object.freeze([
          b,
          inlinedVal7
        ]);
        return minimax1.Rose(tmp1, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal4 instanceof minimax1.Cons.class) {
        let inlinedVal7;
        arg$Cons$0$ = inlinedVal4.head;
        arg$Cons$1$ = inlinedVal4.tail;
        inlinedVal7 = minimax1[listFoldl$tailrec$accessorSymbol](lambda2, arg$Cons$0$, arg$Cons$1$);
        tmp2 = globalThis.Object.freeze([
          b,
          inlinedVal7
        ]);
        return minimax1.Rose(tmp2, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
minimax_snd$snd = function minimax_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
minimaxTT_snd$snd = function minimaxTT_snd$snd(p) {
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    return runtime.Tuple.get(p, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doKid$ = function doKid$(minimax2) {
  return (t, acc) => {
    return doKid(minimax2, t, acc)
  }
};
doKid = function doKid(minimax2, t, acc) {
  let scrut, element1$, element0$, element1$1, element0$1, tmp;
  if (runtime.Tuple.isArrayLike(acc) && acc.length === 2) {
    element0$ = runtime.Tuple.get(acc, 0);
    element1$ = runtime.Tuple.get(acc, 1);
    scrut = sz(minimax2, t);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      let scrut1;
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$1 = runtime.Tuple.get(scrut, 1);
      tmp = element0$ + element0$1;
      scrut1 = element1$ > element1$1;
      if (scrut1 === true) {
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      return globalThis.Object.freeze([
        tmp,
        element1$1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
sz = function sz(minimax2, t) {
  let arg$Rose$1$, element1$, element0$, tmp, tmp1, tmp2;
  if (t instanceof minimax2.Rose.class) {
    let f1, inlinedVal;
    arg$Rose$1$ = t.kids;
    tmp = globalThis.Object.freeze([
      0,
      0
    ]);
    f1 = doKid$(minimax2);
    inlinedVal = minimax2[listFoldl$tailrec$accessorSymbol](f1, tmp, arg$Rose$1$);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      tmp1 = element0$ + 1;
      tmp2 = element1$ + 1;
      return globalThis.Object.freeze([
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$3 = (undefined, function (unused) {
  return (i) => {
    return unused
  }
});
lookupTrans = function lookupTrans(minimax2, transTable, p, b) {
  let scrut, inlinedVal, inlinedVal1, start, tmp, f1, inlinedVal2;
  if (p instanceof minimax1.X.class) {
    tmp = 1;
  } else {
    tmp = 0;
  }
  start = globalThis.Object.freeze([
    tmp,
    3
  ]);
  f1 = lambda$2(minimax1);
  inlinedVal2 = minimax1[listFoldr$tailrec$accessorSymbol](f1, start, b);
  if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
    inlinedVal1 = runtime.Tuple.get(inlinedVal2, 0);
    inlinedVal = transTable.at(inlinedVal1);
    scrut = inlinedVal == -2;
    if (scrut === true) {
      return minimax2.None
    }
    return minimax2.Some(inlinedVal);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
setTrans = function setTrans(minimax2, transTable, p, b, i) {
  let inlinedVal, start, tmp, f1, inlinedVal1;
  if (p instanceof minimax1.X.class) {
    tmp = 1;
  } else {
    tmp = 0;
  }
  start = globalThis.Object.freeze([
    tmp,
    3
  ]);
  f1 = lambda$2(minimax1);
  inlinedVal1 = minimax1[listFoldr$tailrec$accessorSymbol](f1, start, b);
  if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
    inlinedVal = runtime.Tuple.get(inlinedVal1, 0);
    transTable[inlinedVal] = i;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
minimaxTT = function minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return minimaxTT$worker(minimax2, transTable, p, b)
  }
};
minimaxTT$worker = function minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, arg$Some$0$, tmp1, tmp2, tmp3, inlinedVal, p1, tmp4, p2, inlinedVal1;
  p1 = minimax2.X;
  tmp4 = minimax2[rows$accessorSymbol]();
  p2 = minimax2[hasTrip$accessorSymbol](b, p1);
  inlinedVal1 = minimax2[listExists$tailrec$accessorSymbol](p2, tmp4);
  if (inlinedVal1 === false) {
    let tmp5, p3, inlinedVal2;
    tmp5 = minimax2[cols$accessorSymbol]();
    p3 = minimax2[hasTrip$accessorSymbol](b, p1);
    inlinedVal2 = minimax2[listExists$tailrec$accessorSymbol](p3, tmp5);
    if (inlinedVal2 === false) {
      let inlinedVal3, p4, inlinedVal4, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      tmp6 = minimax2.Cons(8, minimax2.Nil);
      tmp7 = minimax2.Cons(4, tmp6);
      tmp8 = minimax2.Cons(0, tmp7);
      tmp9 = minimax2.Cons(6, minimax2.Nil);
      tmp10 = minimax2.Cons(4, tmp9);
      tmp11 = minimax2.Cons(2, tmp10);
      tmp12 = minimax2.Cons(tmp11, minimax2.Nil);
      inlinedVal3 = minimax2.Cons(tmp8, tmp12);
      p4 = minimax2[hasTrip$accessorSymbol](b, p1);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p4, inlinedVal3);
      if (inlinedVal4 === false) {
        let p5, tmp13, p6, inlinedVal5;
        p5 = minimax2.O;
        tmp13 = minimax2[rows$accessorSymbol]();
        p6 = minimax2[hasTrip$accessorSymbol](b, p5);
        inlinedVal5 = minimax2[listExists$tailrec$accessorSymbol](p6, tmp13);
        if (inlinedVal5 === false) {
          let tmp14, p7, inlinedVal6;
          tmp14 = minimax2[cols$accessorSymbol]();
          p7 = minimax2[hasTrip$accessorSymbol](b, p5);
          inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p7, tmp14);
          if (inlinedVal6 === false) {
            let inlinedVal7, p8, inlinedVal8, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
            tmp15 = minimax2.Cons(8, minimax2.Nil);
            tmp16 = minimax2.Cons(4, tmp15);
            tmp17 = minimax2.Cons(0, tmp16);
            tmp18 = minimax2.Cons(6, minimax2.Nil);
            tmp19 = minimax2.Cons(4, tmp18);
            tmp20 = minimax2.Cons(2, tmp19);
            tmp21 = minimax2.Cons(tmp20, minimax2.Nil);
            inlinedVal7 = minimax2.Cons(tmp17, tmp21);
            p8 = minimax2[hasTrip$accessorSymbol](b, p5);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p8, inlinedVal7);
            if (inlinedVal8 === false) {
              inlinedVal = minimax2[isCat$accessorSymbol](b);
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal2, p3, tmp5, p4, inlinedVal3;
    p3 = minimax2.X;
    tmp5 = minimax2[rows$accessorSymbol]();
    p4 = minimax2[hasTrip$accessorSymbol](b, p3);
    inlinedVal3 = minimax2[listExists$tailrec$accessorSymbol](p4, tmp5);
    if (inlinedVal3 === false) {
      let tmp6, p5, inlinedVal4;
      tmp6 = minimax2[cols$accessorSymbol]();
      p5 = minimax2[hasTrip$accessorSymbol](b, p3);
      inlinedVal4 = minimax2[listExists$tailrec$accessorSymbol](p5, tmp6);
      if (inlinedVal4 === false) {
        let inlinedVal5, p6, inlinedVal6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
        tmp7 = minimax2.Cons(8, minimax2.Nil);
        tmp8 = minimax2.Cons(4, tmp7);
        tmp9 = minimax2.Cons(0, tmp8);
        tmp10 = minimax2.Cons(6, minimax2.Nil);
        tmp11 = minimax2.Cons(4, tmp10);
        tmp12 = minimax2.Cons(2, tmp11);
        tmp13 = minimax2.Cons(tmp12, minimax2.Nil);
        inlinedVal5 = minimax2.Cons(tmp9, tmp13);
        p6 = minimax2[hasTrip$accessorSymbol](b, p3);
        inlinedVal6 = minimax2[listExists$tailrec$accessorSymbol](p6, inlinedVal5);
        if (inlinedVal6 === true) {
          inlinedVal2 = 1;
        } else {
          let p7, tmp14, p8, inlinedVal7;
          p7 = minimax2.O;
          tmp14 = minimax2[rows$accessorSymbol]();
          p8 = minimax2[hasTrip$accessorSymbol](b, p7);
          inlinedVal7 = minimax2[listExists$tailrec$accessorSymbol](p8, tmp14);
          if (inlinedVal7 === false) {
            let tmp15, p9, inlinedVal8;
            tmp15 = minimax2[cols$accessorSymbol]();
            p9 = minimax2[hasTrip$accessorSymbol](b, p7);
            inlinedVal8 = minimax2[listExists$tailrec$accessorSymbol](p9, tmp15);
            if (inlinedVal8 === false) {
              let inlinedVal9, p10, inlinedVal10, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
              tmp16 = minimax2.Cons(8, minimax2.Nil);
              tmp17 = minimax2.Cons(4, tmp16);
              tmp18 = minimax2.Cons(0, tmp17);
              tmp19 = minimax2.Cons(6, minimax2.Nil);
              tmp20 = minimax2.Cons(4, tmp19);
              tmp21 = minimax2.Cons(2, tmp20);
              tmp22 = minimax2.Cons(tmp21, minimax2.Nil);
              inlinedVal9 = minimax2.Cons(tmp18, tmp22);
              p10 = minimax2[hasTrip$accessorSymbol](b, p7);
              inlinedVal10 = minimax2[listExists$tailrec$accessorSymbol](p10, inlinedVal9);
              if (inlinedVal10 === true) {
                inlinedVal2 = -1;
              } else {
                inlinedVal2 = 0;
              }
            } else {
              inlinedVal2 = -1;
            }
          } else {
            inlinedVal2 = -1;
          }
        }
      } else {
        inlinedVal2 = 1;
      }
    } else {
      inlinedVal2 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal2
    ]);
    return minimax2.Rose(tmp, minimax2.Nil)
  }
  {
    let inlinedVal2, scrut, inlinedVal3, inlinedVal4, start, tmp5, f1, inlinedVal5;
    if (p instanceof minimax1.X.class) {
      tmp5 = 1;
    } else {
      tmp5 = 0;
    }
    start = globalThis.Object.freeze([
      tmp5,
      3
    ]);
    f1 = lambda$2(minimax1);
    inlinedVal5 = minimax1[listFoldr$tailrec$accessorSymbol](f1, start, b);
    if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 2) {
      inlinedVal4 = runtime.Tuple.get(inlinedVal5, 0);
      inlinedVal3 = transTable.at(inlinedVal4);
      scrut = inlinedVal3 == -2;
      if (scrut === true) {
        let inlinedVal6, f2, inlinedVal7, g, f3, inlinedVal8, inlinedVal9, f4, inlinedVal10, inlinedVal11, start1, tmp6, f5, inlinedVal12;
        if (p instanceof minimax2.X.class) {
          inlinedVal6 = minimax2.O;
        } else if (p instanceof minimax2.O.class) {
          inlinedVal6 = minimax2.X;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal9 = f(minimax2, 0, b, minimax2.Nil);
        f4 = minimax2[moveTo$accessorSymbol](b, p);
        inlinedVal10 = minimax2[map$tailrec$accessorSymbol](f4, inlinedVal9);
        f2 = minimaxTT(minimax2, transTable, inlinedVal6);
        inlinedVal7 = minimax2[map$tailrec$accessorSymbol](f2, inlinedVal10);
        g = minimax2[top$accessorSymbol];
        f3 = lambda$(minimaxTT_snd$snd, g);
        inlinedVal8 = minimax2[map$tailrec$accessorSymbol](f3, inlinedVal7);
        if (p instanceof minimax2.X.class) {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          let arg$Cons$0$, arg$Cons$1$;
          if (inlinedVal8 instanceof minimax2.Cons.class) {
            let inlinedVal13;
            arg$Cons$0$ = inlinedVal8.head;
            arg$Cons$1$ = inlinedVal8.tail;
            inlinedVal13 = minimax2[listFoldl$tailrec$accessorSymbol](lambda2, arg$Cons$0$, arg$Cons$1$);
            tmp2 = inlinedVal13;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
        if (p instanceof minimax1.X.class) {
          tmp6 = 1;
        } else {
          tmp6 = 0;
        }
        start1 = globalThis.Object.freeze([
          tmp6,
          3
        ]);
        f5 = lambda$2(minimax1);
        inlinedVal12 = minimax1[listFoldr$tailrec$accessorSymbol](f5, start1, b);
        if (runtime.Tuple.isArrayLike(inlinedVal12) && inlinedVal12.length === 2) {
          inlinedVal11 = runtime.Tuple.get(inlinedVal12, 0);
          transTable[inlinedVal11] = tmp2;
          tmp3 = globalThis.Object.freeze([
            b,
            tmp2
          ]);
          return minimax2.Rose(tmp3, inlinedVal7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      inlinedVal2 = minimax2.Some(inlinedVal3);
      arg$Some$0$ = inlinedVal2.value;
      tmp1 = globalThis.Object.freeze([
        b,
        arg$Some$0$
      ]);
      return minimax2.Rose(tmp1, minimax2.Nil);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda4 = (undefined, function (unused, i) {
  return unused
});
lambda$2 = (undefined, function (minimax2) {
  return (i, acc) => {
    return lambda3(minimax2, i, acc)
  }
});
handleItem = function handleItem(minimax2, i) {
  let arg$Some$0$;
  if (i instanceof minimax2.Some.class) {
    arg$Some$0$ = i.value;
    if (arg$Some$0$ instanceof minimax2.X.class) {
      return 1
    } else if (arg$Some$0$ instanceof minimax2.O.class) {
      return 2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (i instanceof minimax2.None.class) {
    return 0
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda3 = (undefined, function (minimax2, i, acc) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(acc) && acc.length === 2) {
    element0$ = runtime.Tuple.get(acc, 0);
    element1$ = runtime.Tuple.get(acc, 1);
    tmp = handleItem(minimax2, i);
    tmp1 = tmp * element1$;
    tmp2 = element0$ + tmp1;
    tmp3 = element1$ * 3;
    return globalThis.Object.freeze([
      tmp2,
      tmp3
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda2 = (undefined, function (a, b) {
  let scrut;
  scrut = a < b;
  if (scrut === true) {
    return a
  }
  return b;
});
lambda1 = (undefined, function (a, b) {
  let scrut;
  scrut = a > b;
  if (scrut === true) {
    return a
  }
  return b;
});
f = function f(minimax2, n, m, acc) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (m instanceof minimax2.Nil.class) {
      return go1(minimax2, acc, minimax2.Nil)
    } else if (m instanceof minimax2.Cons.class) {
      arg$Cons$0$ = m.head;
      arg$Cons$1$ = m.tail;
      if (arg$Cons$0$ instanceof minimax2.Some.class) {
        tmp = n + 1;
        n = tmp;
        m = arg$Cons$1$;
        continue loopLabel
      } else if (arg$Cons$0$ instanceof minimax2.None.class) {
        tmp1 = n + 1;
        tmp2 = minimax2.Cons(n, acc);
        n = tmp1;
        m = arg$Cons$1$;
        acc = tmp2;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$1 = (undefined, function (minimax2) {
  return (i) => {
    return minimax2.None
  }
});
lambda = (undefined, function (minimax2, i) {
  return minimax2.None
});
lambda$ = (undefined, function (f1, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f1(tmp))
  }
});
lambda5 = (undefined, function (f1, g, x) {
  let tmp;
  tmp = runtime.safeCall(g(x));
  return runtime.safeCall(f1(tmp))
});
go1 = function go(minimax2, l, acc) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l instanceof minimax2.Nil.class) {
      return acc
    } else if (l instanceof minimax2.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = minimax2.Cons(arg$Cons$0$, acc);
      l = arg$Cons$1$;
      acc = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
go = function go(minimax2, n, f1, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f1(i));
  tmp1 = i + 1;
  tmp2 = go(minimax2, n, f1, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
(class minimax {
  static {
    minimax1 = this
  }
  static get [map$tailrec$accessorSymbol]() { return minimax.#map$tailrec; }
  static get [listFoldr$tailrec$accessorSymbol]() { return minimax.#listFoldr$tailrec; }
  static get [listFoldl$tailrec$accessorSymbol]() { return minimax.#listFoldl$tailrec; }
  static get [listExists$tailrec$accessorSymbol]() { return minimax.#listExists$tailrec; }
  static get [rows$accessorSymbol]() { return minimax.#rows; }
  static get [cols$accessorSymbol]() { return minimax.#cols; }
  static get [moveTo$accessorSymbol]() { return minimax.#moveTo; }
  static get [hasTrip$accessorSymbol]() { return minimax.#hasTrip; }
  static get [isCat$accessorSymbol]() { return minimax.#isCat; }
  static get [top$accessorSymbol]() { return minimax.#top; }
  static {
    minimax.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        minimax.Cons.class = this
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
        minimax.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    minimax.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        minimax.Some.class = this
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
        minimax.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    (class X {
      static {
        new this
      }
      constructor() {
        minimax.X = this;
        Object.defineProperty(this, "class", {
          value: X
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"];
    });
    (class O {
      static {
        new this
      }
      constructor() {
        minimax.O = this;
        Object.defineProperty(this, "class", {
          value: O
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "O"];
    });
    minimax.Rose = function Rose(x, kids) {
      return globalThis.Object.freeze(new Rose.class(x, kids));
    };
    (class Rose {
      static {
        minimax.Rose.class = this
      }
      constructor(x, kids) {
        this.x = x;
        this.kids = kids;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Rose", ["x", "kids"]];
    });
  }
  static #map$tailrec(f1, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof minimax.Nil.class) {
      return minimax.Nil
    } else if (l instanceof minimax.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$));
      tmp1 = minimax.#map$tailrec(f1, arg$Cons$1$);
      return minimax.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listFoldr$tailrec(f1, init, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l instanceof minimax.Nil.class) {
      return init
    } else if (l instanceof minimax.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = minimax.#listFoldr$tailrec(f1, init, arg$Cons$1$);
      return runtime.safeCall(f1(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listFoldl$tailrec(f1, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return init
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f1(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listExists$tailrec(p, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return false
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === false) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listAll$tailrec(p, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return true
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === true) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #hd(l) {
    if (l instanceof minimax.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tl(l) {
    if (l instanceof minimax.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listNth(l, n) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        scrut = n == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = n - 1;
        l = arg$Cons$1$;
        n = tmp;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listTabulate(n, f1) {
    return go(minimax, n, f1, 0)
  }
  static #listAll(p) {
    return (l) => {
      return minimax.#listAll$tailrec(p, l)
    }
  }
  static #listExists(p) {
    return (l) => {
      return minimax.#listExists$tailrec(p, l)
    }
  }
  static #listFoldl(f1) {
    return (init) => {
      return (l) => {
        return minimax.#listFoldl$tailrec(f1, init, l)
      }
    }
  }
  static #listFoldr(f1) {
    return (init) => {
      return (l) => {
        return minimax.#listFoldr$tailrec(f1, init, l)
      }
    }
  }
  static #map(f1) {
    return (l) => {
      return minimax.#map$tailrec(f1, l)
    }
  }
  static #rev(l) {
    return go1(minimax, l, minimax.Nil)
  }
  static #isSome(o) {
    if (o instanceof minimax.Some.class) {
      return true
    } else if (o instanceof minimax.None.class) {
      return false
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #not_(b) {
    switch (b) {
      case false:
        return true;
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  static #compose(f1, g) {
    return lambda$(f1, g)
  }
  static #intMax(a, b) {
    let scrut;
    scrut = a > b;
    if (scrut === true) {
      return a
    }
    return b;
  }
  static #fillTabulate(arr, i, n, f1) {
    loopLabel: while (true) {
      let scrut, tmp, tmp1;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      tmp = runtime.safeCall(f1(i));
      arr[i] = tmp;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  static #arrayTabulate(n, f1) {
    let tmp;
    tmp = [];
    return minimax.#fillTabulate(tmp, 0, n, f1)
  }
  static #arraySub(a, i) {
    return a.at(i)
  }
  static #arrayUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #snd(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rows() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = minimax.Cons(2, minimax.Nil);
    tmp1 = minimax.Cons(1, tmp);
    tmp2 = minimax.Cons(0, tmp1);
    tmp3 = minimax.Cons(5, minimax.Nil);
    tmp4 = minimax.Cons(4, tmp3);
    tmp5 = minimax.Cons(3, tmp4);
    tmp6 = minimax.Cons(8, minimax.Nil);
    tmp7 = minimax.Cons(7, tmp6);
    tmp8 = minimax.Cons(6, tmp7);
    tmp9 = minimax.Cons(tmp8, minimax.Nil);
    tmp10 = minimax.Cons(tmp5, tmp9);
    return minimax.Cons(tmp2, tmp10)
  }
  static #cols() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = minimax.Cons(6, minimax.Nil);
    tmp1 = minimax.Cons(3, tmp);
    tmp2 = minimax.Cons(0, tmp1);
    tmp3 = minimax.Cons(7, minimax.Nil);
    tmp4 = minimax.Cons(4, tmp3);
    tmp5 = minimax.Cons(1, tmp4);
    tmp6 = minimax.Cons(8, minimax.Nil);
    tmp7 = minimax.Cons(5, tmp6);
    tmp8 = minimax.Cons(2, tmp7);
    tmp9 = minimax.Cons(tmp8, minimax.Nil);
    tmp10 = minimax.Cons(tmp5, tmp9);
    return minimax.Cons(tmp2, tmp10)
  }
  static #diags() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = minimax.Cons(8, minimax.Nil);
    tmp1 = minimax.Cons(4, tmp);
    tmp2 = minimax.Cons(0, tmp1);
    tmp3 = minimax.Cons(6, minimax.Nil);
    tmp4 = minimax.Cons(4, tmp3);
    tmp5 = minimax.Cons(2, tmp4);
    tmp6 = minimax.Cons(tmp5, minimax.Nil);
    return minimax.Cons(tmp2, tmp6)
  }
  static #empty() {
    let f1;
    f1 = empty_lambda$$lambda$(minimax);
    return empty_listTabulate_go$go(minimax1, 9, f1, 0)
  }
  static #isOccupied(b, i) {
    let tmp;
    tmp = minimax.#listNth(b, i);
    return minimax.#isSome(tmp)
  }
  static #find(b, i) {
    return minimax.#listNth(b, i)
  }
  static #playerEq(p1, p2) {
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
    }
    return false;
  }
  static #playerOccupies(p) {
    return (b) => {
      return (i) => {
        let scrut, arg$Some$0$;
        scrut = minimax.#find(b, i);
        if (scrut instanceof minimax.Some.class) {
          arg$Some$0$ = scrut.value;
          return minimax.#playerEq(p, arg$Some$0$)
        } else if (scrut instanceof minimax.None.class) {
          return false
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #putAt(x, xs, i) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
    scrut = i == 0;
    if (scrut === true) {
      tmp = minimax.#tl(xs);
      return minimax.Cons(x, tmp)
    }
    scrut1 = i > 0;
    if (scrut1 === true) {
      tmp1 = minimax.#hd(xs);
      tmp2 = minimax.#tl(xs);
      tmp3 = i - 1;
      tmp4 = minimax.#putAt(x, tmp2, tmp3);
      return minimax.Cons(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveTo(b, p) {
    return (i) => {
      let scrut, tmp;
      scrut = minimax.#isOccupied(b, i);
      if (scrut === false) {
        tmp = minimax.Some(p);
        return minimax.#putAt(tmp, b, i)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #hasTrip(b, p) {
    return (t) => {
      let tmp;
      tmp = minimax.#playerOccupies(p)(b);
      return minimax.#listAll(tmp)(t)
    }
  }
  static #hasRow(b, p) {
    let tmp, tmp1;
    tmp = minimax.#hasTrip(b, p);
    tmp1 = minimax.#rows();
    return minimax.#listExists(tmp)(tmp1)
  }
  static #hasCol(b, p) {
    let tmp, tmp1;
    tmp = minimax.#hasTrip(b, p);
    tmp1 = minimax.#cols();
    return minimax.#listExists(tmp)(tmp1)
  }
  static #hasDiag(b, p) {
    let tmp, tmp1;
    tmp = minimax.#hasTrip(b, p);
    tmp1 = minimax.#diags();
    return minimax.#listExists(tmp)(tmp1)
  }
  static #isFull(b) {
    return minimax.#listAll(minimax.#isSome)(b)
  }
  static #isWinFor(b) {
    return (p) => {
      let tmp, tmp1;
      tmp = minimax.#hasRow(b, p);
      if (tmp === false) {
        tmp1 = minimax.#hasCol(b, p);
        if (tmp1 === false) {
          return minimax.#hasDiag(b, p)
        }
        return true;
      }
      return true;
    }
  }
  static #isWin(b) {
    let tmp;
    tmp = minimax.#isWinFor(b)(minimax.X);
    if (tmp === false) {
      return minimax.#isWinFor(b)(minimax.O)
    }
    return true;
  }
  static #isCat(b) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = minimax.#isFull(b);
    if (tmp === true) {
      tmp2 = minimax.#isWinFor(b)(minimax.X);
      tmp1 = minimax.#not_(tmp2);
      if (tmp1 === true) {
        tmp3 = minimax.#isWinFor(b)(minimax.O);
        return minimax.#not_(tmp3)
      }
      return false;
    }
    return false;
  }
  static #score(b) {
    let scrut, scrut1;
    scrut = minimax.#isWinFor(b)(minimax.X);
    if (scrut === true) {
      return 1
    }
    scrut1 = minimax.#isWinFor(b)(minimax.O);
    if (scrut1 === true) {
      return -1
    }
    return 0;
  }
  static #mkLeaf(x) {
    return minimax.Rose(x, minimax.Nil)
  }
  static #allMoves(b) {
    return f(minimax, 0, b, minimax.Nil)
  }
  static #other(p) {
    if (p instanceof minimax.X.class) {
      return minimax.O
    } else if (p instanceof minimax.O.class) {
      return minimax.X
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #top(t) {
    if (t instanceof minimax.Rose.class) {
      return t.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listExtreme(e) {
    return (l) => {
      let arg$Cons$0$, arg$Cons$1$;
      if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        return minimax.#listFoldl(e)(arg$Cons$0$)(arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listmax(l) {
    return minimax.#listExtreme(lambda1)(l)
  }
  static #listmin(l) {
    return minimax.#listExtreme(lambda2)(l)
  }
  static #gameOver(b) {
    let tmp;
    tmp = minimax.#isWin(b);
    if (tmp === false) {
      return minimax.#isCat(b)
    }
    return true;
  }
  static #successors(b, p) {
    let tmp, tmp1;
    tmp = minimax.#moveTo(b, p);
    tmp1 = minimax.#allMoves(b);
    return minimax.#map(tmp)(tmp1)
  }
  static #minimax(p) {
    return (b) => {
      let scrut, trees, scores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      scrut = minimax.#gameOver(b);
      if (scrut === true) {
        tmp = minimax.#score(b);
        tmp1 = globalThis.Object.freeze([
          b,
          tmp
        ]);
        return minimax.#mkLeaf(tmp1)
      }
      tmp2 = minimax.#other(p);
      tmp3 = minimax.#minimax(tmp2);
      tmp4 = minimax.#successors(b, p);
      trees = minimax.#map(tmp3)(tmp4);
      tmp5 = minimax.#compose(minimax_snd$snd, minimax.#top);
      scores = minimax.#map(tmp5)(trees);
      if (p instanceof minimax.X.class) {
        tmp6 = minimax.#listmax(scores);
        tmp7 = globalThis.Object.freeze([
          b,
          tmp6
        ]);
        return minimax.Rose(tmp7, trees)
      }
      tmp8 = minimax.#listmin(scores);
      tmp9 = globalThis.Object.freeze([
        b,
        tmp8
      ]);
      return minimax.Rose(tmp9, trees);
    }
  }
  static #gameTree() {
    let p, f1, inlinedVal;
    f1 = gameTree_empty_lambda$$lambda$(minimax1);
    inlinedVal = gameTree_empty_listTabulate_go$go(minimax1, 9, f1, 0);
    p = minimax.X;
    return gameTree_minimax$minimax$worker(p, inlinedVal)
  }
  static #boardToIndex(p, b) {
    let start, scrut, tmp, lambda$here;
    if (p instanceof minimax.X.class) {
      tmp = 1;
    } else {
      tmp = 0;
    }
    start = globalThis.Object.freeze([
      tmp,
      3
    ]);
    lambda$here = lambda$2(minimax);
    scrut = minimax.#listFoldr(lambda$here)(start)(b);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      return runtime.Tuple.get(scrut, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #gameTreeWithTT() {
    let p, f1, inlinedVal, tmp, arr, i, n, f2, inlinedVal1;
    tmp = [];
    arr = tmp;
    i = 0;
    n = 59049;
    f2 = gameTreeWithTT_lambda$$lambda$(-2);
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp1, tmp2;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal1 = arr;
          break inlinedLbl
        }
        tmp1 = runtime.safeCall(f2());
        arr[i] = tmp1;
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel;
      }
    }
    f1 = gameTreeWithTT_empty_lambda$$lambda$(minimax1);
    inlinedVal = gameTreeWithTT_empty_listTabulate_go$go(minimax1, 9, f1, 0);
    p = minimax.X;
    return gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax, inlinedVal1, p, inlinedVal)
  }
  static #treeStats(tr) {
    return sz(minimax, tr)
  }
  static main() {
    let tmp, tmp1, p, inlinedVal, tmp2, arr, i, n, f1, inlinedVal1, f2, inlinedVal2, p1, inlinedVal3, f3, inlinedVal4;
    f3 = main_gameTree_empty_lambda$$lambda$(minimax1);
    inlinedVal4 = main_gameTree_empty_listTabulate_go$go(minimax1, 9, f3, 0);
    p1 = minimax1.X;
    inlinedVal3 = main_gameTree_minimax$minimax$worker(p1, inlinedVal4);
    tmp = minimax.#treeStats(inlinedVal3);
    tmp2 = [];
    arr = tmp2;
    i = 0;
    n = 59049;
    f1 = main_gameTreeWithTT_lambda$$lambda$(-2);
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp3, tmp4;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal1 = arr;
          break inlinedLbl
        }
        tmp3 = runtime.safeCall(f1());
        arr[i] = tmp3;
        tmp4 = i + 1;
        i = tmp4;
        continue loopLabel;
      }
    }
    f2 = main_gameTreeWithTT_empty_lambda$$lambda$(minimax1);
    inlinedVal2 = main_gameTreeWithTT_empty_listTabulate_go$go(minimax1, 9, f2, 0);
    p = minimax1.X;
    inlinedVal = main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax1, inlinedVal1, p, inlinedVal2);
    tmp1 = minimax.#treeStats(inlinedVal);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "minimax"];
});
export { go as _$_modulePrivate_$_go };
export { go1 as _$_modulePrivate_$_go1 };
export { f as _$_modulePrivate_$_f };
export { handleItem as _$_modulePrivate_$_handleItem };
export { lookupTrans as _$_modulePrivate_$_lookupTrans };
export { setTrans as _$_modulePrivate_$_setTrans };
export { minimaxTT as _$_modulePrivate_$_minimaxTT };
export { doKid as _$_modulePrivate_$_doKid };
export { sz as _$_modulePrivate_$_sz };
export { minimax1 as _$_modulePrivate_$_minimax };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { doKid$ as _$_modulePrivate_$_doKid$ };
export { main_gameTree_empty_lambda$$lambda$ as _$_modulePrivate_$_main_gameTree_empty_lambda$$lambda$ };
export { main_gameTreeWithTT_empty_lambda$$lambda$ as _$_modulePrivate_$_main_gameTreeWithTT_empty_lambda$$lambda$ };
export { main_gameTreeWithTT_lambda$$lambda$ as _$_modulePrivate_$_main_gameTreeWithTT_lambda$$lambda$ };
export { gameTreeWithTT_lambda$$lambda$ as _$_modulePrivate_$_gameTreeWithTT_lambda$$lambda$ };
export { gameTreeWithTT_empty_lambda$$lambda$ as _$_modulePrivate_$_gameTreeWithTT_empty_lambda$$lambda$ };
export { gameTree_empty_lambda$$lambda$ as _$_modulePrivate_$_gameTree_empty_lambda$$lambda$ };
export { empty_lambda$$lambda$ as _$_modulePrivate_$_empty_lambda$$lambda$ };
export { main_gameTree_empty_listTabulate_go$go as _$_modulePrivate_$_main_gameTree_empty_listTabulate_go$go };
export { main_gameTreeWithTT_empty_listTabulate_go$go as _$_modulePrivate_$_main_gameTreeWithTT_empty_listTabulate_go$go };
export { gameTreeWithTT_empty_listTabulate_go$go as _$_modulePrivate_$_gameTreeWithTT_empty_listTabulate_go$go };
export { gameTree_empty_listTabulate_go$go as _$_modulePrivate_$_gameTree_empty_listTabulate_go$go };
export { empty_listTabulate_go$go as _$_modulePrivate_$_empty_listTabulate_go$go };
export { main_gameTree_minimax_snd$snd as _$_modulePrivate_$_main_gameTree_minimax_snd$snd };
export { main_gameTree_minimax$minimax as _$_modulePrivate_$_main_gameTree_minimax$minimax };
export { main_gameTreeWithTT_minimaxTT$minimaxTT as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT$minimaxTT };
export { main_gameTreeWithTT_minimaxTT_snd$snd as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_snd$snd };
export { gameTreeWithTT_minimaxTT$minimaxTT as _$_modulePrivate_$_gameTreeWithTT_minimaxTT$minimaxTT };
export { gameTreeWithTT_minimaxTT_snd$snd as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_snd$snd };
export { gameTree_minimax_snd$snd as _$_modulePrivate_$_gameTree_minimax_snd$snd };
export { gameTree_minimax$minimax as _$_modulePrivate_$_gameTree_minimax$minimax };
export { minimax_snd$snd as _$_modulePrivate_$_minimax_snd$snd };
export { minimaxTT_snd$snd as _$_modulePrivate_$_minimaxTT_snd$snd };
export { minimaxTT$worker as _$_modulePrivate_$_minimaxTT$worker };
export { gameTree_minimax$minimax$worker as _$_modulePrivate_$_gameTree_minimax$minimax$worker };
export { gameTreeWithTT_minimaxTT$minimaxTT$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT$minimaxTT$worker };
export { main_gameTreeWithTT_minimaxTT$minimaxTT$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT$minimaxTT$worker };
export { main_gameTree_minimax$minimax$worker as _$_modulePrivate_$_main_gameTree_minimax$minimax$worker };
export default minimax1;
