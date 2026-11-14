const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Rendering from "./../../Rendering.mjs";
const moveInFullCompare$accessorSymbol = globalThis.Symbol("moveInFullCompare");
const any$accessorSymbol = globalThis.Symbol("any");
const kindToChar$accessorSymbol = globalThis.Symbol("kindToChar");
const pieceToChar$accessorSymbol = globalThis.Symbol("pieceToChar");
const rmPieceAt$accessorSymbol = globalThis.Symbol("rmPieceAt");
const putPieceAt$accessorSymbol = globalThis.Symbol("putPieceAt");
const kingSquare$accessorSymbol = globalThis.Symbol("kingSquare");
const onboard$accessorSymbol = globalThis.Symbol("onboard");
const forcesColoured$accessorSymbol = globalThis.Symbol("forcesColoured");
const tryMove$accessorSymbol = globalThis.Symbol("tryMove");
const rawmoves$accessorSymbol = globalThis.Symbol("rawmoves");
const comment$accessorSymbol = globalThis.Symbol("comment");
const parseSquare$accessorSymbol = globalThis.Symbol("parseSquare");
const foldr_lz$accessorSymbol = globalThis.Symbol("foldr_lz");
const replies$accessorSymbol = globalThis.Symbol("replies");
const showReplies_showSoln$accessorSymbol = globalThis.Symbol("showReplies_showSoln");
let r, l, go, f, lscomp, combine, go1, pieceAtWith, consFile, showRank, emptyAtAllAnd, ml, lscomp2, promote, lscomp1, kthreat, givesCheck, addPiece, solnAnd, solnOr, insert, ic, enumFrom, LzList1, leave_lz, sum, nub_lz, LzNil1, intDiv, Nil1, ltList, divMod, scanl, zip_lz_lz, nofibListToString, orList, lazy, atIndex, _internal_cons_to_str, force, stringOfFloat, unionBy, splitAt, nubBy_lz, union, zip, compose, fromSome, take_lz_lz, stringConcat, map, all, head, zipWith_lz_lz, unzip, null_, concat, break_, zip_lz_nl, min, eqTup2, filter_lz, intQuot, zipWith, scanr, replicate, append_nl_lz, tail, cos, int_of_char, LzCons1, map_lz, until, ltTup2, Cons1, Lazy1, zipWith_lz_nl, snd, reverse, filter, append_lz_lz, quotRem, maximum, take_lz, replicate_lz, zip3, leaveWhile, enumFromTo, max, foldl, enumFromThenTo, sqrt, flatMap, intRem, take, listEqBy, flip, Some1, inList, nofibStringToList, Option1, intMod, None1, head_lz, notElem, round, iterate, transpose, while_, repeat, power, foldr, List1, stringOfInt, tan, listNeq, abs, listEq, foldr1, fst, mate1, splitAt_lz, nubBy, sin, stringListConcat, listLen, foldl1, list, leave, deleteBy, append, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda42, lambda43, lambda44, lambda45, lambda46, lambda47, lambda48, lambda49, lambda50, lambda51, lambda52, lambda53, lambda54, lambda55, lambda56, lambda57, lambda58, lambda59, lambda60, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, showRank$, consFile$, lambda$16, lambda$17, lambda$18, lambda$19, givesCheck$, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, addPiece$, lambda$29, lambda$30, solnAnd$, solnOr$, transpose_combine, lscomp1_lscomp2;
transpose_combine = function transpose_combine(id, param0, param1, param2, param3) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, tmp;
          if (param0 instanceof Nil1.class) {
            return Nil1
          } else if (param0 instanceof Cons1.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            if (arg$Cons$0$ instanceof Nil1.class) {
              param0 = arg$Cons$1$;
              id = 0;
              continue loopLabel
            } else if (arg$Cons$0$ instanceof Cons1.class) {
              let inlinedVal;
              arg$Cons$0$1 = arg$Cons$0$.head;
              arg$Cons$1$1 = arg$Cons$0$.tail;
              tmp = lscomp(arg$Cons$1$);
              inlinedVal = f(tmp, Nil1, Nil1);
              if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
                element0$ = runtime.Tuple.get(inlinedVal, 0);
                element1$ = runtime.Tuple.get(inlinedVal, 1);
                param0 = arg$Cons$0$1;
                param1 = element0$;
                param2 = arg$Cons$1$1;
                param3 = element1$;
                id = 1;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let tmp, tmp1, tmp2;
          tmp = Cons1(param0, param1);
          tmp1 = Cons1(param2, param3);
          tmp2 = transpose_combine(0, tmp1, undefined, undefined, undefined);
          return Cons1(tmp, tmp2);
        }
    }
  }
};
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param3 instanceof Nil1.class) {
            return Nil1
          } else if (param3 instanceof Cons1.class) {
            let receiver, inlinedVal, arg$Board$0$, arg$Board$1$, tmp1;
            arg$Cons$0$ = param3.head;
            arg$Cons$1$ = param3.tail;
            receiver = param0;
            if (param2 instanceof receiver.Board.class) {
              arg$Board$0$ = param2.a;
              arg$Board$1$ = param2.b;
              tmp1 = pieceAtWith(arg$Cons$0$, param0.Black, None1, arg$Board$1$);
              inlinedVal = pieceAtWith(arg$Cons$0$, param0.White, tmp1, arg$Board$0$);
              tmp = Cons1(inlinedVal, Nil1);
              param3 = arg$Cons$0$;
              param4 = arg$Cons$1$;
              param5 = tmp;
              id = 1;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1, tmp2, tmp3;
          if (param5 instanceof Nil1.class) {
            param3 = param4;
            id = 0;
            continue loopLabel
          } else if (param5 instanceof Cons1.class) {
            arg$Cons$0$ = param5.head;
            arg$Cons$1$ = param5.tail;
            if (arg$Cons$0$ instanceof Some1.class) {
              let element0$;
              arg$Some$0$ = arg$Cons$0$.x;
              if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
                element0$ = runtime.Tuple.get(arg$Some$0$, 0);
                runtime.Tuple.get(arg$Some$0$, 1);
                tmp = element0$ === param1;
                scrut = ! tmp;
                if (scrut === true) {
                  tmp1 = Some1(arg$Some$0$);
                  tmp2 = promote(param0, param1, param3, tmp1);
                  tmp3 = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, arg$Cons$1$);
                  return Cons1(tmp2, tmp3)
                }
                param5 = arg$Cons$1$;
                id = 1;
                continue loopLabel;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            param5 = arg$Cons$1$;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lambda54 = (undefined, function (x, y) {
  return x < y
});
lambda55 = (undefined, function (x, y) {
  return x > y
});
lambda56 = (undefined, function (x, y) {
  return x < y
});
lambda57 = (undefined, function (x, y) {
  return x > y
});
insert = function insert(mate2, x, ls) {
  let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof Nil1.class) {
    return Cons1(x, Nil1)
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = mate2[moveInFullCompare$accessorSymbol](x, arg$Cons$0$);
    scrut = tmp > 0;
    if (scrut === true) {
      tmp1 = insert(mate2, x, arg$Cons$1$);
      return Cons1(arg$Cons$0$, tmp1)
    }
    tmp2 = Cons1(arg$Cons$0$, arg$Cons$1$);
    return Cons1(x, tmp2);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ic = function ic(mate2, mif, cs, ls) {
  let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  if (ls instanceof Nil1.class) {
    tmp = Cons1(mif, Nil1);
    tmp1 = globalThis.Object.freeze([
      tmp,
      cs
    ]);
    return Cons1(tmp1, Nil1)
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let inlinedVal, inlinedVal1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      inlinedVal = mate2[showReplies_showSoln$accessorSymbol](1, cs, 1);
      inlinedVal1 = mate2[showReplies_showSoln$accessorSymbol](1, element1$, 1);
      scrut = ltList(inlinedVal, inlinedVal1, lambda54, lambda55);
      if (scrut === true) {
        tmp2 = Cons1(mif, Nil1);
        tmp3 = globalThis.Object.freeze([
          tmp2,
          cs
        ]);
        tmp4 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp5 = Cons1(tmp4, arg$Cons$1$);
        return Cons1(tmp3, tmp5)
      }
      scrut1 = listEq(inlinedVal, inlinedVal1);
      if (scrut1 === true) {
        tmp6 = insert(mate2, mif, element0$);
        tmp7 = globalThis.Object.freeze([
          tmp6,
          cs
        ]);
        return Cons1(tmp7, arg$Cons$1$)
      }
      tmp8 = ltList(inlinedVal, inlinedVal1, lambda56, lambda57);
      scrut2 = ! tmp8;
      if (scrut2 === true) {
        tmp9 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp10 = ic(mate2, mif, cs, arg$Cons$1$);
        return Cons1(tmp9, tmp10)
      }
      throw runtime.safeCall(globalThis.Error("compare error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
solnOr$ = function solnOr$(mate2, c, n) {
  return (mifb, other) => {
    return solnOr(mate2, c, n, mifb, other)
  }
};
solnOr = function solnOr(mate2, c, n, mifb, other) {
  let rsm, element1$, element0$, tmp, arg$Some$0$, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(mifb) && mifb.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(mifb, 0);
    element1$ = runtime.Tuple.get(mifb, 1);
    if (c instanceof mate2.White.class) {
      inlinedVal = mate2.Black;
    } else {
      inlinedVal = mate2.White;
    }
    tmp = n - 1;
    rsm = mate2[replies$accessorSymbol](element1$, inlinedVal, tmp);
    if (rsm instanceof None1.class) {
      if (other instanceof Lazy1.class) {
        return other.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (rsm instanceof Some1.class) {
      arg$Some$0$ = rsm.x;
      if (arg$Some$0$ instanceof Nil1.class) {
        let inlinedVal1, inlinedVal2, tmp3, givesCheck$here, inlinedVal3;
        if (c instanceof mate2.White.class) {
          inlinedVal1 = mate2.Black;
          inlinedVal3 = mate2.White;
        } else {
          inlinedVal1 = mate2.White;
          inlinedVal3 = mate2.Black;
        }
        tmp3 = mate2[forcesColoured$accessorSymbol](inlinedVal3, element1$);
        givesCheck$here = givesCheck$(mate2, inlinedVal1, element1$);
        inlinedVal2 = mate2[any$accessorSymbol](givesCheck$here, tmp3);
        if (inlinedVal2 === true) {
          tmp1 = mate2.Solution(element0$, Nil1);
          return Some1(tmp1)
        }
        if (other instanceof Lazy1.class) {
          return other.get()
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp2 = mate2.Solution(element0$, arg$Some$0$);
      return Some1(tmp2);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
solnAnd$ = function solnAnd$(mate2, c, n) {
  return (mifb, rest) => {
    return solnAnd(mate2, c, n, mifb, rest)
  }
};
solnAnd = function solnAnd(mate2, c, n, mifb, rest) {
  let element1$, element0$, tmp, arg$Some$0$, arg$Some$0$1, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(mifb) && mifb.length === 2) {
    let inlinedVal, inlinedVal1, scrut, solnOr$here;
    element0$ = runtime.Tuple.get(mifb, 0);
    element1$ = runtime.Tuple.get(mifb, 1);
    if (c instanceof mate2.White.class) {
      inlinedVal = mate2.Black;
    } else {
      inlinedVal = mate2.White;
    }
    tmp = n - 1;
    scrut = tmp > 0;
    if (scrut === true) {
      let inlinedVal2, tmp3;
      tmp3 = mate2[forcesColoured$accessorSymbol](inlinedVal, element1$);
      inlinedVal2 = foldr(lambda$25(mate2, inlinedVal, element1$), Nil1, tmp3);
      solnOr$here = solnOr$(mate2, inlinedVal, tmp);
      inlinedVal1 = mate2[foldr_lz$accessorSymbol](solnOr$here, None1, inlinedVal2);
      if (inlinedVal1 instanceof None1.class) {
        return None1
      } else if (inlinedVal1 instanceof Some1.class) {
        let inlinedVal3;
        arg$Some$0$ = inlinedVal1.x;
        if (rest instanceof Lazy1.class) {
          inlinedVal3 = rest.get();
          if (inlinedVal3 instanceof None1.class) {
            return None1
          } else if (inlinedVal3 instanceof Some1.class) {
            arg$Some$0$1 = inlinedVal3.x;
            tmp1 = globalThis.Object.freeze([
              element0$,
              arg$Some$0$
            ]);
            tmp2 = Cons1(tmp1, arg$Some$0$1);
            return Some1(tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw runtime.safeCall(globalThis.Error("n <= 0"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$30 = (undefined, function (mate2, f1, a, t) {
  return () => {
    return mate2[foldr_lz$accessorSymbol](f1, a, t)
  }
});
lambda53 = (undefined, function (mate2, f1, a, t) {
  return mate2[foldr_lz$accessorSymbol](f1, a, t)
});
lambda$29 = (undefined, function (mate2) {
  return (x) => {
    let tmp;
    tmp = mate2[comment$accessorSymbol](x);
    return ! tmp
  }
});
lambda52 = (undefined, function (mate2, x) {
  let inlinedVal, tmp;
  if (x instanceof Nil1.class) {
    return false
  }
  {
    let inlinedVal1;
    tmp = take(2, x);
    inlinedVal1 = go1("--", 0);
    inlinedVal = listEq(tmp, inlinedVal1);
    return ! inlinedVal;
  }
});
addPiece$ = function addPiece$(mate2) {
  return (p_sq, x) => {
    return addPiece(mate2, p_sq, x)
  }
};
addPiece = function addPiece(mate2, p_sq, x) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(p_sq) && p_sq.length === 2) {
    element0$ = runtime.Tuple.get(p_sq, 0);
    element1$ = runtime.Tuple.get(p_sq, 1);
    return mate2[putPieceAt$accessorSymbol](element1$, element0$, x)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$28 = (undefined, function (mate2, r1) {
  return (a, b) => {
    return mate2[parseSquare$accessorSymbol](r1, a, b)
  }
});
lambda50 = (undefined, function (mate2, r1, a, b) {
  return mate2[parseSquare$accessorSymbol](r1, a, b)
});
lambda51 = (undefined, function (pp) {
  let tmp;
  tmp = pp === " ";
  return ! tmp
});
lambda$27 = (undefined, function (h) {
  return (t) => {
    return Cons1(h, t)
  }
});
lambda60 = (undefined, function (h, t) {
  return Cons1(h, t)
});
lambda46 = (undefined, function (x) {
  return x
});
lambda47 = (undefined, function (h) {
  return lambda$27(h)
});
lambda$26 = (undefined, function (mate2, c, bd, ksq) {
  return (rm, ms_) => {
    return lambda48(mate2, c, bd, ksq, rm, ms_)
  }
});
lambda48 = (undefined, function (mate2, c, bd, ksq, rm, ms_) {
  let tmp, f1, x, inlinedVal, arg$Some$0$;
  tmp = mate2[tryMove$accessorSymbol](c, ksq, rm, bd);
  f1 = lambda47;
  x = tmp;
  if (x instanceof None1.class) {
    return ms_
  } else if (x instanceof Some1.class) {
    arg$Some$0$ = x.x;
    inlinedVal = runtime.safeCall(f1(arg$Some$0$));
    return runtime.safeCall(inlinedVal(ms_))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$25 = (undefined, function (mate2, c, bd) {
  return (ksq, ms) => {
    let tmp;
    tmp = mate2[rawmoves$accessorSymbol](c, ksq, bd);
    return foldr(lambda$26(mate2, c, bd, ksq), ms, tmp)
  }
});
lambda49 = (undefined, function (mate2, c, bd, ksq, ms) {
  let tmp;
  tmp = mate2[rawmoves$accessorSymbol](c, ksq, bd);
  return foldr(lambda$26(mate2, c, bd, ksq), ms, tmp)
});
lambda$24 = (undefined, function (mate2, c, sq_, bd1, p_) {
  return (dummy) => {
    return lambda45(mate2, c, sq_, bd1, p_, dummy)
  }
});
lambda44 = (undefined, function (x) {
  return x
});
lambda45 = (undefined, function (mate2, c, sq_, bd1, p_, dummy) {
  let tmp, inlinedVal;
  if (c instanceof mate2.White.class) {
    inlinedVal = mate2.Black;
  } else {
    inlinedVal = mate2.White;
  }
  tmp = mate2[rmPieceAt$accessorSymbol](inlinedVal, sq_, bd1);
  return mate2[putPieceAt$accessorSymbol](sq_, p_, tmp)
});
lambda$23 = (undefined, function (y, yk, xk) {
  return (caseScrut) => {
    return lambda40(y, yk, xk, caseScrut)
  }
});
lambda$22 = (undefined, function (x, yk, xk) {
  return (caseScrut) => {
    return lambda41(x, yk, xk, caseScrut)
  }
});
lambda$21 = (undefined, function (x, yk, xk) {
  return (caseScrut) => {
    return lambda42(x, yk, xk, caseScrut)
  }
});
lambda$20 = (undefined, function (x, yk, xk) {
  return (caseScrut) => {
    return lambda43(x, yk, xk, caseScrut)
  }
});
lambda40 = (undefined, function (y, yk, xk, caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ === xk;
    if (tmp === true) {
      let inlinedVal;
      inlinedVal = runtime.safeCall(globalThis.Math.min(y, yk));
      tmp1 = inlinedVal < element1$;
      if (tmp1 === true) {
        let inlinedVal1;
        inlinedVal1 = runtime.safeCall(globalThis.Math.max(y, yk));
        return element1$ < inlinedVal1
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda41 = (undefined, function (x, yk, xk, caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element1$ === yk;
    if (tmp === true) {
      let inlinedVal;
      inlinedVal = runtime.safeCall(globalThis.Math.min(x, xk));
      tmp1 = inlinedVal < element0$;
      if (tmp1 === true) {
        let inlinedVal1;
        inlinedVal1 = runtime.safeCall(globalThis.Math.max(x, xk));
        return element0$ < inlinedVal1
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda42 = (undefined, function (x, yk, xk, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ + element1$;
    tmp1 = xk + yk;
    tmp2 = tmp === tmp1;
    if (tmp2 === true) {
      let inlinedVal;
      inlinedVal = runtime.safeCall(globalThis.Math.min(x, xk));
      tmp3 = inlinedVal < element0$;
      if (tmp3 === true) {
        let inlinedVal1;
        inlinedVal1 = runtime.safeCall(globalThis.Math.max(x, xk));
        return element0$ < inlinedVal1
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda43 = (undefined, function (x, yk, xk, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ - element1$;
    tmp1 = xk - yk;
    tmp2 = tmp === tmp1;
    if (tmp2 === true) {
      let inlinedVal;
      inlinedVal = runtime.safeCall(globalThis.Math.min(x, xk));
      tmp3 = inlinedVal < element0$;
      if (tmp3 === true) {
        let inlinedVal1;
        inlinedVal1 = runtime.safeCall(globalThis.Math.max(x, xk));
        return element0$ < inlinedVal1
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
kthreat = function kthreat(mate2, c, bd, x, y, param) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    scrut = mate2[kingSquare$accessorSymbol](c, bd);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (param instanceof mate2.King.class) {
        let inlinedVal;
        tmp = x - element0$;
        inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp));
        scrut1 = inlinedVal <= 1;
        if (scrut1 === true) {
          let inlinedVal1;
          tmp1 = y - element1$;
          inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
          scrut2 = inlinedVal1 <= 1;
          if (scrut2 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (param instanceof mate2.Queen.class) {
        tmp2 = kthreat(mate2, c, bd, x, y, mate2.Rook);
        if (tmp2 === false) {
          param = mate2.Bishop;
          continue loopLabel
        }
        return true;
      } else if (param instanceof mate2.Rook.class) {
        tmp3 = x === element0$;
        if (tmp3 === true) {
          let receiver, e, inlinedVal, arg$Board$0$, arg$Board$1$, tmp22;
          receiver = mate2;
          e = lambda$23(y, element1$, element0$);
          if (bd instanceof receiver.Board.class) {
            arg$Board$0$ = bd.a;
            arg$Board$1$ = bd.b;
            tmp22 = emptyAtAllAnd(e, true, arg$Board$1$);
            inlinedVal = emptyAtAllAnd(e, tmp22, arg$Board$0$);
            if (inlinedVal === false) {
              tmp4 = y === element1$;
              if (tmp4 === true) {
                let receiver1, e1, arg$Board$0$1, arg$Board$1$1, tmp23;
                receiver1 = mate2;
                e1 = lambda$22(x, element1$, element0$);
                if (bd instanceof receiver1.Board.class) {
                  arg$Board$0$1 = bd.a;
                  arg$Board$1$1 = bd.b;
                  tmp23 = emptyAtAllAnd(e1, true, arg$Board$1$1);
                  return emptyAtAllAnd(e1, tmp23, arg$Board$0$1)
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              return false;
            }
            return true;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp4 = y === element1$;
        if (tmp4 === true) {
          let receiver, e, arg$Board$0$, arg$Board$1$, tmp22;
          receiver = mate2;
          e = lambda$22(x, element1$, element0$);
          if (bd instanceof receiver.Board.class) {
            arg$Board$0$ = bd.a;
            arg$Board$1$ = bd.b;
            tmp22 = emptyAtAllAnd(e, true, arg$Board$1$);
            return emptyAtAllAnd(e, tmp22, arg$Board$0$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return false;
      } else if (param instanceof mate2.Bishop.class) {
        tmp5 = x + y;
        tmp6 = element0$ + element1$;
        tmp7 = tmp5 === tmp6;
        if (tmp7 === true) {
          let receiver, e, inlinedVal, arg$Board$0$, arg$Board$1$, tmp22;
          receiver = mate2;
          e = lambda$21(x, element1$, element0$);
          if (bd instanceof receiver.Board.class) {
            arg$Board$0$ = bd.a;
            arg$Board$1$ = bd.b;
            tmp22 = emptyAtAllAnd(e, true, arg$Board$1$);
            inlinedVal = emptyAtAllAnd(e, tmp22, arg$Board$0$);
            if (inlinedVal === false) {
              tmp8 = x - y;
              tmp9 = element0$ - element1$;
              tmp10 = tmp8 === tmp9;
              if (tmp10 === true) {
                let receiver1, e1, arg$Board$0$1, arg$Board$1$1, tmp23;
                receiver1 = mate2;
                e1 = lambda$20(x, element1$, element0$);
                if (bd instanceof receiver1.Board.class) {
                  arg$Board$0$1 = bd.a;
                  arg$Board$1$1 = bd.b;
                  tmp23 = emptyAtAllAnd(e1, true, arg$Board$1$1);
                  return emptyAtAllAnd(e1, tmp23, arg$Board$0$1)
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              return false;
            }
            return true;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp8 = x - y;
        tmp9 = element0$ - element1$;
        tmp10 = tmp8 === tmp9;
        if (tmp10 === true) {
          let receiver, e, arg$Board$0$, arg$Board$1$, tmp22;
          receiver = mate2;
          e = lambda$20(x, element1$, element0$);
          if (bd instanceof receiver.Board.class) {
            arg$Board$0$ = bd.a;
            arg$Board$1$ = bd.b;
            tmp22 = emptyAtAllAnd(e, true, arg$Board$1$);
            return emptyAtAllAnd(e, tmp22, arg$Board$0$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return false;
      } else if (param instanceof mate2.Knight.class) {
        let inlinedVal;
        tmp11 = x - element0$;
        inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp11));
        tmp12 = inlinedVal === 2;
        if (tmp12 === true) {
          let inlinedVal1;
          tmp14 = y - element1$;
          inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp14));
          tmp13 = inlinedVal1 === 1;
          if (tmp13 === false) {
            let inlinedVal2;
            tmp15 = x - element0$;
            inlinedVal2 = runtime.safeCall(globalThis.Math.abs(tmp15));
            tmp16 = inlinedVal2 === 1;
            if (tmp16 === true) {
              let inlinedVal3;
              tmp17 = y - element1$;
              inlinedVal3 = runtime.safeCall(globalThis.Math.abs(tmp17));
              return inlinedVal3 === 2
            }
            return false;
          }
          return true;
        }
        {
          let inlinedVal1;
          tmp15 = x - element0$;
          inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp15));
          tmp16 = inlinedVal1 === 1;
          if (tmp16 === true) {
            let inlinedVal2;
            tmp17 = y - element1$;
            inlinedVal2 = runtime.safeCall(globalThis.Math.abs(tmp17));
            return inlinedVal2 === 2
          }
          return false;
        }
      } else if (param instanceof mate2.Pawn.class) {
        let inlinedVal;
        tmp18 = x - element0$;
        inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp18));
        tmp19 = inlinedVal === 1;
        if (tmp19 === true) {
          if (c instanceof mate2.Black.class) {
            tmp20 = y + 1;
            return element1$ === tmp20
          }
          tmp21 = y - 1;
          return element1$ === tmp21;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
givesCheck$ = function givesCheck$(mate2, c, bd) {
  return (kxy) => {
    return givesCheck(mate2, c, bd, kxy)
  }
};
givesCheck = function givesCheck(mate2, c, bd, kxy) {
  let element1$, element0$, element1$1, element0$1;
  if (runtime.Tuple.isArrayLike(kxy) && kxy.length === 2) {
    element0$ = runtime.Tuple.get(kxy, 0);
    element1$ = runtime.Tuple.get(kxy, 1);
    if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
      element0$1 = runtime.Tuple.get(element1$, 0);
      element1$1 = runtime.Tuple.get(element1$, 1);
      return kthreat(mate2, c, bd, element0$1, element1$1, element0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$19 = (undefined, function (mate2, mcp, x, y) {
  return (param) => {
    return lambda39(mate2, mcp, x, y, param)
  }
});
lambda39 = (undefined, function (mate2, mcp, x, y, param) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    x,
    y
  ]);
  tmp1 = Some1(param);
  return mate2.Move(tmp, mcp, tmp1)
});
lscomp2 = function lscomp2(mate2, c, bd, sq, sqs, ls) {
  return lscomp1_lscomp2(1, mate2, c, bd, sq, sqs, ls)
};
promote = function promote(mate2, c, xy, mcp) {
  let scrut, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  if (runtime.Tuple.isArrayLike(xy) && xy.length === 2) {
    element0$ = runtime.Tuple.get(xy, 0);
    element1$ = runtime.Tuple.get(xy, 1);
    if (c instanceof mate2.Black.class) {
      scrut = element1$ === 1;
      if (scrut === true) {
        tmp = true;
      } else {
        tmp = false;
      }
    } else {
      tmp = false;
    }
    if (tmp === false) {
      if (c instanceof mate2.White.class) {
        scrut1 = element1$ === 8;
        if (scrut1 === true) {
          tmp1 = globalThis.Object.freeze([
            c,
            mate2.Queen
          ]);
          tmp2 = globalThis.Object.freeze([
            c,
            mate2.Rook
          ]);
          tmp3 = globalThis.Object.freeze([
            c,
            mate2.Bishop
          ]);
          tmp4 = globalThis.Object.freeze([
            c,
            mate2.Knight
          ]);
          tmp5 = Cons1(tmp4, Nil1);
          tmp6 = Cons1(tmp3, tmp5);
          tmp7 = Cons1(tmp2, tmp6);
          tmp8 = Cons1(tmp1, tmp7);
          return map(lambda$19(mate2, mcp, element0$, element1$), tmp8)
        }
        tmp9 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp10 = mate2.Move(tmp9, mcp, None1);
        return Cons1(tmp10, Nil1);
      }
      tmp9 = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      tmp10 = mate2.Move(tmp9, mcp, None1);
      return Cons1(tmp10, Nil1);
    }
    tmp1 = globalThis.Object.freeze([
      c,
      mate2.Queen
    ]);
    tmp2 = globalThis.Object.freeze([
      c,
      mate2.Rook
    ]);
    tmp3 = globalThis.Object.freeze([
      c,
      mate2.Bishop
    ]);
    tmp4 = globalThis.Object.freeze([
      c,
      mate2.Knight
    ]);
    tmp5 = Cons1(tmp4, Nil1);
    tmp6 = Cons1(tmp3, tmp5);
    tmp7 = Cons1(tmp2, tmp6);
    tmp8 = Cons1(tmp1, tmp7);
    return map(lambda$19(mate2, mcp, element0$, element1$), tmp8);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lscomp1 = function lscomp1(mate2, c, bd, ls) {
  return lscomp1_lscomp2(0, mate2, c, bd, ls, undefined, undefined)
};
lambda34 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ - 1;
    return globalThis.Object.freeze([
      tmp,
      element1$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda35 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ + 1;
    return globalThis.Object.freeze([
      tmp,
      element1$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda36 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element1$ - 1;
    return globalThis.Object.freeze([
      element0$,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda37 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element1$ + 1;
    return globalThis.Object.freeze([
      element0$,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda38 = (undefined, function (x) {
  return x
});
lambda29 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ - 1;
    tmp1 = element1$ + 1;
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda30 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ + 1;
    tmp1 = element1$ + 1;
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda31 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ - 1;
    tmp1 = element1$ - 1;
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda32 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = element0$ + 1;
    tmp1 = element1$ - 1;
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda33 = (undefined, function (x) {
  return x
});
lambda$18 = (undefined, function (mate2, bd, c, sq, inc, cont) {
  return (ms) => {
    return ml(mate2, bd, c, inc, cont, sq, ms)
  }
});
ml = function ml(mate2, bd, c, inc, cont, sq, ms) {
  loopLabel: while (true) {
    let sq_, scrut, scrut1, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    sq_ = runtime.safeCall(inc(sq));
    scrut = mate2[onboard$accessorSymbol](sq_);
    if (scrut === true) {
      let receiver, inlinedVal, arg$Board$0$, arg$Board$1$, tmp6;
      receiver = mate2;
      if (bd instanceof receiver.Board.class) {
        arg$Board$0$ = bd.a;
        arg$Board$1$ = bd.b;
        tmp6 = pieceAtWith(sq_, mate2.Black, None1, arg$Board$1$);
        inlinedVal = pieceAtWith(sq_, mate2.White, tmp6, arg$Board$0$);
        if (inlinedVal instanceof None1.class) {
          tmp = mate2.Move(sq_, None1, None1);
          tmp1 = Cons1(tmp, ms);
          sq = sq_;
          ms = tmp1;
          continue loopLabel
        } else if (inlinedVal instanceof Some1.class) {
          let element0$;
          arg$Some$0$ = inlinedVal.x;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            runtime.Tuple.get(arg$Some$0$, 1);
            tmp2 = element0$ === c;
            scrut1 = ! tmp2;
            if (scrut1 === true) {
              tmp3 = Some1(arg$Some$0$);
              tmp4 = mate2.Move(sq_, tmp3, None1);
              tmp5 = Cons1(tmp4, ms);
              return runtime.safeCall(cont(tmp5))
            }
            return runtime.safeCall(cont(ms));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return runtime.safeCall(cont(ms));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return runtime.safeCall(cont(ms));
  }
};
lambda59 = (undefined, function (mate2, bd, c, sq, inc, cont, ms) {
  return ml(mate2, bd, c, inc, cont, sq, ms)
});
lambda$17 = (undefined, function (mate2) {
  return (cp) => {
    return lambda27(mate2, cp)
  }
});
lambda$16 = (undefined, function (mate2) {
  return (pp) => {
    return lambda28(mate2, pp)
  }
});
lambda27 = (undefined, function (mate2, cp) {
  let tmp, tmp1, inlinedVal, element1$, tmp2;
  if (runtime.Tuple.isArrayLike(cp) && cp.length === 2) {
    runtime.Tuple.get(cp, 0);
    element1$ = runtime.Tuple.get(cp, 1);
    tmp2 = mate2[kindToChar$accessorSymbol](element1$);
    inlinedVal = Cons1(tmp2, Nil1);
    tmp = Cons1("/", Nil1);
    tmp1 = append(inlinedVal, tmp);
    return Cons1("x", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda28 = (undefined, function (mate2, pp) {
  let tmp, tmp1, inlinedVal, element1$, tmp2;
  if (runtime.Tuple.isArrayLike(pp) && pp.length === 2) {
    runtime.Tuple.get(pp, 0);
    element1$ = runtime.Tuple.get(pp, 1);
    tmp2 = mate2[kindToChar$accessorSymbol](element1$);
    inlinedVal = Cons1(tmp2, Nil1);
    tmp = Cons1(")", Nil1);
    tmp1 = append(inlinedVal, tmp);
    return Cons1("(", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
emptyAtAllAnd = function emptyAtAllAnd(e, b, ls) {
  let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, tmp;
  if (ls instanceof Nil1.class) {
    return b
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      tmp = runtime.safeCall(e(element1$));
      scrut = ! tmp;
      if (scrut === true) {
        scrut1 = emptyAtAllAnd(e, b, arg$Cons$1$);
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
};
consFile$ = function consFile$(mate2, bd, r1) {
  return (f1, s) => {
    return consFile(mate2, bd, r1, f1, s)
  }
};
consFile = function consFile(mate2, bd, r1, f1, s) {
  let arg$Some$0$, tmp, tmp1, tmp2, inlinedVal, arg$Board$0$, arg$Board$1$, tmp3;
  tmp = globalThis.Object.freeze([
    f1,
    r1
  ]);
  if (bd instanceof mate2.Board.class) {
    arg$Board$0$ = bd.a;
    arg$Board$1$ = bd.b;
    tmp3 = pieceAtWith(tmp, mate2.Black, None1, arg$Board$1$);
    inlinedVal = pieceAtWith(tmp, mate2.White, tmp3, arg$Board$0$);
    if (inlinedVal instanceof None1.class) {
      let inlinedVal1;
      inlinedVal1 = go1(" -", 0);
      return append(inlinedVal1, s)
    } else if (inlinedVal instanceof Some1.class) {
      arg$Some$0$ = inlinedVal.x;
      tmp1 = mate2[pieceToChar$accessorSymbol](arg$Some$0$);
      tmp2 = Cons1(tmp1, s);
      return Cons1(" ", tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
showRank$ = function showRank$(mate2, bd) {
  return (r1) => {
    return showRank(mate2, bd, r1)
  }
};
showRank = function showRank(mate2, bd, r1) {
  let tmp, consFile$here;
  tmp = enumFromTo(1, 8);
  consFile$here = consFile$(mate2, bd, r1);
  return foldr(consFile$here, Nil1, tmp)
};
pieceAtWith = function pieceAtWith(sq, c, n, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp;
    if (ls instanceof Nil1.class) {
      return n
    } else if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = eqTup2(element1$, sq);
        if (scrut === true) {
          tmp = globalThis.Object.freeze([
            c,
            element0$
          ]);
          return Some1(tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda26 = (undefined, function (x) {
  return x === "\n"
});
lambda25 = (undefined, function (l1) {
  let tmp;
  tmp = Cons1("\n", Nil1);
  return append(l1, tmp)
});
lambda23 = (undefined, function (x) {
  return x === " "
});
lambda24 = (undefined, function (x) {
  return x === " "
});
lambda22 = (undefined, function (a, b) {
  let element0$, element0$1;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    element0$ = runtime.Tuple.get(a, 0);
    runtime.Tuple.get(a, 1);
    if (runtime.Tuple.isArrayLike(b) && b.length === 2) {
      let inlinedVal, inlinedVal1;
      element0$1 = runtime.Tuple.get(b, 0);
      runtime.Tuple.get(b, 1);
      inlinedVal = l(element0$, 0);
      inlinedVal1 = l(element0$1, 0);
      return inlinedVal <= inlinedVal1
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
go1 = function go(s, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i < s.length;
  if (scrut === true) {
    tmp = runtime.safeCall(s.charAt(i));
    tmp1 = i + 1;
    tmp2 = go1(s, tmp1);
    return Cons1(tmp, tmp2)
  }
  return Nil1;
};
lambda$15 = (undefined, function (x) {
  return () => {
    let tmp;
    tmp = repeat(x);
    return LzCons1(x, tmp)
  }
});
lambda21 = (undefined, function (x) {
  let tmp;
  tmp = repeat(x);
  return LzCons1(x, tmp)
});
lambda$14 = (undefined, function (a) {
  return () => {
    return lambda20(a)
  }
});
lambda20 = (undefined, function (a) {
  let tmp, tmp1;
  tmp = a + 1;
  tmp1 = enumFrom(tmp);
  return LzCons1(a, tmp1)
});
lambda$13 = (undefined, function (n, x) {
  return () => {
    return lambda19(n, x)
  }
});
lambda18 = (undefined, function () {
  return LzNil1
});
lambda19 = (undefined, function (n, x) {
  let tmp, tmp1;
  tmp = n - 1;
  tmp1 = replicate_lz(tmp, x);
  return LzCons1(x, tmp1)
});
lambda$12 = (undefined, function (xs, ys) {
  return () => {
    return lambda17(xs, ys)
  }
});
lambda17 = (undefined, function (xs, ys) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, inlinedVal;
  if (xs instanceof Lazy1.class) {
    inlinedVal = xs.get();
    if (inlinedVal instanceof LzNil1.class) {
      if (ys instanceof Lazy1.class) {
        return ys.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = append_lz_lz(arg$LzCons$1$, ys);
      return LzCons1(arg$LzCons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$11 = (undefined, function (ys, t, h) {
  return () => {
    let tmp;
    tmp = append_nl_lz(t, ys);
    return LzCons1(h, tmp)
  }
});
lambda16 = (undefined, function (ys, t, h) {
  let tmp;
  tmp = append_nl_lz(t, ys);
  return LzCons1(h, tmp)
});
lambda$10 = (undefined, function (f1, x) {
  return () => {
    return lambda15(f1, x)
  }
});
lambda15 = (undefined, function (f1, x) {
  let tmp, tmp1;
  tmp = runtime.safeCall(f1(x));
  tmp1 = iterate(f1, tmp);
  return LzCons1(x, tmp1)
});
lambda$9 = (undefined, function (f1, xss, yss) {
  return () => {
    return lambda14(f1, xss, yss)
  }
});
lambda14 = (undefined, function (f1, xss, yss) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, tmp, tmp1, inlinedVal;
  if (xss instanceof Lazy1.class) {
    inlinedVal = xss.get();
    if (inlinedVal instanceof LzCons1.class) {
      let inlinedVal1;
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (yss instanceof Lazy1.class) {
        inlinedVal1 = yss.get();
        if (inlinedVal1 instanceof LzCons1.class) {
          arg$LzCons$0$1 = inlinedVal1.head;
          arg$LzCons$1$1 = inlinedVal1.tail;
          tmp = runtime.safeCall(f1(arg$LzCons$0$, arg$LzCons$0$1));
          tmp1 = zipWith_lz_lz(f1, arg$LzCons$1$, arg$LzCons$1$1);
          return LzCons1(tmp, tmp1)
        }
        return LzNil1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return LzNil1;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (x, xs, ys, y) {
  return () => {
    return lambda11(x, xs, ys, y)
  }
});
lambda11 = (undefined, function (x, xs, ys, y) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    x,
    y
  ]);
  tmp1 = zip_lz_lz(xs, ys);
  return LzCons1(tmp, tmp1)
});
lambda12 = (undefined, function () {
  return LzNil1
});
lambda13 = (undefined, function () {
  return LzNil1
});
lambda10 = (undefined, function () {
  return LzNil1
});
lambda$7 = (undefined, function (n, ls) {
  return () => {
    return lambda9(n, ls)
  }
});
lambda9 = (undefined, function (n, ls) {
  let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
  scrut = n > 0;
  if (scrut === true) {
    let inlinedVal;
    if (ls instanceof Lazy1.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof LzNil1.class) {
        return LzNil1
      } else if (inlinedVal instanceof LzCons1.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        tmp = n - 1;
        tmp1 = take_lz_lz(tmp, arg$LzCons$1$);
        return LzCons1(arg$LzCons$0$, tmp1)
      }
      return LzNil1;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return LzNil1;
});
lambda8 = (undefined, function (x, y) {
  return x == y
});
lambda$6 = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda6 = (undefined, function (eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
});
lambda$5 = (undefined, function (eq, ls) {
  return () => {
    return lambda7(eq, ls)
  }
});
lambda7 = (undefined, function (eq, ls) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof Lazy1.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof LzNil1.class) {
      return LzNil1
    } else if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = filter_lz(lambda$6(eq, arg$LzCons$0$), arg$LzCons$1$);
      tmp1 = nubBy_lz(eq, tmp);
      return LzCons1(arg$LzCons$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (p, ls) {
  return () => {
    return lambda5(p, ls)
  }
});
lambda5 = (undefined, function (p, ls) {
  let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof Lazy1.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof LzNil1.class) {
      return LzNil1
    } else if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      scrut = runtime.safeCall(p(arg$LzCons$0$));
      if (scrut === true) {
        tmp = filter_lz(p, arg$LzCons$1$);
        return LzCons1(arg$LzCons$0$, tmp)
      }
      tmp1 = filter_lz(p, arg$LzCons$1$);
      if (tmp1 instanceof Lazy1.class) {
        return tmp1.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (f1, ls) {
  return () => {
    return lambda4(f1, ls)
  }
});
lambda4 = (undefined, function (f1, ls) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof Lazy1.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof LzNil1.class) {
      return LzNil1
    } else if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = runtime.safeCall(f1(arg$LzCons$0$));
      tmp1 = map_lz(f1, arg$LzCons$1$);
      return LzCons1(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lscomp = function lscomp(ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof Nil1.class) {
      return Nil1
    } else if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof Cons1.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$1,
          arg$Cons$1$1
        ]);
        tmp1 = lscomp(arg$Cons$1$);
        return Cons1(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
combine = function combine(y, h, ys, t) {
  return transpose_combine(1, y, h, ys, t)
};
f = function f(l1, a, b) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (l1 instanceof Nil1.class) {
      let inlinedVal, inlinedVal1;
      inlinedVal = r(Nil1, a);
      inlinedVal1 = r(Nil1, b);
      return globalThis.Object.freeze([
        inlinedVal,
        inlinedVal1
      ])
    } else if (l1 instanceof Cons1.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        tmp = Cons1(element0$, a);
        tmp1 = Cons1(element1$, b);
        l1 = arg$Cons$1$;
        a = tmp;
        b = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
go = function go(xs, a) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof Nil1.class) {
      return a
    } else if (xs instanceof Cons1.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = a + arg$Cons$0$;
      xs = arg$Cons$1$;
      a = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda3 = (undefined, function (x, y) {
  return x == y
});
lambda$2 = (undefined, function (eq) {
  return (acc, y) => {
    return deleteBy(eq, y, acc)
  }
});
lambda2 = (undefined, function (eq, acc, y) {
  return deleteBy(eq, y, acc)
});
lambda$1 = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda1 = (undefined, function (eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
});
lambda = (undefined, function (x, y) {
  let scrut;
  scrut = x > y;
  if (scrut === true) {
    return x
  }
  return y;
});
l = function l(ls, a) {
  loopLabel: while (true) {
    let arg$Cons$1$, tmp;
    if (ls instanceof Nil1.class) {
      return a
    } else if (ls instanceof Cons1.class) {
      arg$Cons$1$ = ls.tail;
      tmp = a + 1;
      ls = arg$Cons$1$;
      a = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
r = function r(l$_, l1) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l1 instanceof Cons1.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = Cons1(arg$Cons$0$, l$_);
      l$_ = tmp;
      l1 = arg$Cons$1$;
      continue loopLabel
    }
    return l$_;
  }
};
lambda$ = (undefined, function (f1, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f1(tmp))
  }
});
lambda58 = (undefined, function (f1, g, x) {
  let tmp;
  tmp = runtime.safeCall(g(x));
  return runtime.safeCall(f1(tmp))
});
fromSome = function fromSome(s) {
  if (s instanceof Some1.class) {
    return s.x
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lazy = function lazy(x) {
  return Lazy1(x)
};
force = function force(x) {
  if (x instanceof Lazy1.class) {
    return x.get()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
_internal_cons_to_str = function _internal_cons_to_str(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
  if (ls instanceof Nil1.class) {
    return ""
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (arg$Cons$1$ instanceof Nil1.class) {
      return runtime.safeCall(Rendering.render(arg$Cons$0$))
    }
    {
      let inlinedVal;
      inlinedVal = Rendering.render;
      tmp = runtime.safeCall(inlinedVal(arg$Cons$0$));
      tmp1 = tmp + ",";
      tmp2 = _internal_cons_to_str(arg$Cons$1$);
      return tmp1 + tmp2;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ltList = function ltList(xs, ys, lt, gt) {
  loopLabel: while (true) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
    if (xs instanceof Nil1.class) {
      if (ys instanceof Nil1.class) {
        return false
      }
      return true;
    } else if (xs instanceof Cons1.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof Nil1.class) {
        return false
      } else if (ys instanceof Cons1.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
        if (scrut1 === true) {
          return false
        }
        xs = arg$Cons$1$;
        ys = arg$Cons$1$1;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
list = function list(...args) {
  let element0$, tmp;
  if (runtime.Tuple.isArrayLike(args) && args.length === 0) {
    return Nil1
  } else if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
    let inlinedVal, tmp1;
    element0$ = runtime.Tuple.get(args, 0);
    tmp1 = args.length - 0;
    inlinedVal = runtime.safeCall(args.slice(1, tmp1));
    tmp = list(...inlinedVal);
    return Cons1(element0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ltTup2 = function ltTup2(t1, t2, lt1, gt1, lt2) {
  let scrut, scrut1, element1$, element0$, element1$1, element0$1;
  if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
    element0$ = runtime.Tuple.get(t1, 0);
    element1$ = runtime.Tuple.get(t1, 1);
    if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
      element0$1 = runtime.Tuple.get(t2, 0);
      element1$1 = runtime.Tuple.get(t2, 1);
      scrut = runtime.safeCall(lt1(element0$, element0$1));
      if (scrut === true) {
        return true
      }
      scrut1 = runtime.safeCall(gt1(element0$, element0$1));
      if (scrut1 === true) {
        return false
      }
      return runtime.safeCall(lt2(element1$, element1$1));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
eqTup2 = function eqTup2(t1, t2) {
  let scrut, scrut1, element1$, element0$, element1$1, element0$1;
  if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
    element0$ = runtime.Tuple.get(t1, 0);
    element1$ = runtime.Tuple.get(t1, 1);
    if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
      element0$1 = runtime.Tuple.get(t2, 0);
      element1$1 = runtime.Tuple.get(t2, 1);
      scrut = element0$ == element0$1;
      if (scrut === true) {
        scrut1 = element1$ == element1$1;
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
};
compose = function compose(f1, g) {
  return lambda$(f1, g)
};
snd = function snd(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    runtime.Tuple.get(x, 0);
    return runtime.Tuple.get(x, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
fst = function fst(x) {
  let element0$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    element0$ = runtime.Tuple.get(x, 0);
    runtime.Tuple.get(x, 1);
    return element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
until = function until(p, f1, i) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = runtime.safeCall(p(i));
    if (scrut === true) {
      return i
    }
    tmp = runtime.safeCall(f1(i));
    i = tmp;
    continue loopLabel;
  }
};
flip = function flip(f1, x, y) {
  let callPrefix;
  callPrefix = runtime.safeCall(f1(y));
  return runtime.safeCall(callPrefix(x))
};
power = function power(a, n) {
  return runtime.safeCall(globalThis.Math.pow(a, n))
};
intDiv = function intDiv(a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
};
intQuot = function intQuot(a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.trunc(tmp))
};
intMod = function intMod(a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
};
intRem = function intRem(a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.trunc(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
};
quotRem = function quotRem(a, b) {
  let inlinedVal, inlinedVal1, tmp, inlinedVal2, tmp1, tmp2;
  tmp2 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.trunc(tmp2));
  tmp1 = a / b;
  inlinedVal2 = runtime.safeCall(globalThis.Math.trunc(tmp1));
  tmp = b * inlinedVal2;
  inlinedVal1 = a - tmp;
  return globalThis.Object.freeze([
    inlinedVal,
    inlinedVal1
  ])
};
divMod = function divMod(a, b) {
  let inlinedVal, inlinedVal1, tmp, inlinedVal2, tmp1, tmp2;
  tmp2 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = a / b;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal2;
  inlinedVal1 = a - tmp;
  return globalThis.Object.freeze([
    inlinedVal,
    inlinedVal1
  ])
};
max = function max(a, b) {
  return runtime.safeCall(globalThis.Math.max(a, b))
};
min = function min(a, b) {
  return runtime.safeCall(globalThis.Math.min(a, b))
};
abs = function abs(x) {
  return runtime.safeCall(globalThis.Math.abs(x))
};
head = function head(l1) {
  if (l1 instanceof Cons1.class) {
    return l1.head
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
tail = function tail(l1) {
  if (l1 instanceof Cons1.class) {
    return l1.tail
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
while_ = function while_(p, f1, x) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      tmp = runtime.safeCall(f1(x));
      x = tmp;
      continue loopLabel
    }
    return x;
  }
};
reverse = function reverse(l1) {
  return r(Nil1, l1)
};
map = function map(f1, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f1(arg$Cons$0$));
    tmp1 = map(f1, arg$Cons$1$);
    return Cons1(tmp, tmp1)
  } else if (xs instanceof Nil1.class) {
    return Nil1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
listLen = function listLen(ls) {
  return l(ls, 0)
};
listEq = function listEq(xs, ys) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
    if (xs instanceof Nil1.class) {
      if (ys instanceof Nil1.class) {
        return true
      }
      return false;
    } else if (xs instanceof Cons1.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof Cons1.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        scrut = arg$Cons$0$ == arg$Cons$0$1;
        if (scrut === true) {
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel
        }
        return false;
      }
      return false;
    }
    return false;
  }
};
listEqBy = function listEqBy(f1, a, b) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (a instanceof Nil1.class) {
      if (b instanceof Nil1.class) {
        return true
      }
      return false;
    } else if (a instanceof Cons1.class) {
      arg$Cons$0$ = a.head;
      arg$Cons$1$ = a.tail;
      if (b instanceof Cons1.class) {
        arg$Cons$0$1 = b.head;
        arg$Cons$1$1 = b.tail;
        tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
        if (tmp === true) {
          a = arg$Cons$1$;
          b = arg$Cons$1$1;
          continue loopLabel
        }
        return false;
      }
      return false;
    }
    return false;
  }
};
listNeq = function listNeq(xs, ys) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
    if (xs instanceof Nil1.class) {
      if (ys instanceof Nil1.class) {
        return false
      }
      return true;
    } else if (xs instanceof Cons1.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof Cons1.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        scrut = arg$Cons$0$ == arg$Cons$0$1;
        if (scrut === true) {
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel
        }
        return true;
      }
      return true;
    }
    return true;
  }
};
enumFromTo = function enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo(tmp, b);
    return Cons1(a, tmp1)
  }
  return Nil1;
};
enumFromThenTo = function enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = enumFromThenTo(t, tmp1, b);
    return Cons1(a, tmp2)
  }
  return Nil1;
};
leave = function leave(n, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$1$, tmp;
    if (ls instanceof Nil1.class) {
      return Nil1
    } else if (ls instanceof Cons1.class) {
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return ls
      }
      tmp = n - 1;
      n = tmp;
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
take = function take(n, ls) {
  let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return Nil1
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    scrut = n <= 0;
    if (scrut === true) {
      return Nil1
    }
    tmp = n - 1;
    tmp1 = take(tmp, arg$Cons$1$);
    return Cons1(arg$Cons$0$, tmp1);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
splitAt = function splitAt(n, ls) {
  let tmp, tmp1;
  tmp = take(n, ls);
  tmp1 = leave(n, ls);
  return globalThis.Object.freeze([
    tmp,
    tmp1
  ])
};
zip = function zip(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
  if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof Cons1.class) {
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      tmp = globalThis.Object.freeze([
        arg$Cons$0$,
        arg$Cons$0$1
      ]);
      tmp1 = zip(arg$Cons$1$, arg$Cons$1$1);
      return Cons1(tmp, tmp1)
    }
    return Nil1;
  }
  return Nil1;
};
inList = function inList(x, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = x === arg$Cons$0$;
      if (scrut === true) {
        return true
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    } else if (ls instanceof Nil1.class) {
      return false
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
notElem = function notElem(x, ls) {
  let tmp;
  tmp = inList(x, ls);
  return ! tmp
};
append = function append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof Nil1.class) {
    return ys
  } else if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = append(arg$Cons$1$, ys);
    return Cons1(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
concat = function concat(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof Nil1.class) {
    return Nil1
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = concat(arg$Cons$1$);
    return append(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
filter = function filter(f1, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof Nil1.class) {
      return Nil1
    } else if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(f1(arg$Cons$0$));
      if (scrut === true) {
        tmp = filter(f1, arg$Cons$1$);
        return Cons1(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
all = function all(p, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof Nil1.class) {
      return true
    } else if (ls instanceof Cons1.class) {
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
};
orList = function orList(ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof Nil1.class) {
      return false
    } else if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ === true) {
        return true
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
leaveWhile = function leaveWhile(f1, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof Nil1.class) {
      return Nil1
    } else if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(f1(arg$Cons$0$));
      if (scrut === true) {
        ls = arg$Cons$1$;
        continue loopLabel
      }
      return Cons1(arg$Cons$0$, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
foldl = function foldl(f1, a, xs) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof Nil1.class) {
      return a
    } else if (xs instanceof Cons1.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f1(a, arg$Cons$0$));
      a = tmp;
      xs = arg$Cons$1$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
scanl = function scanl(f1, q, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return Cons1(q, Nil1)
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = runtime.safeCall(f1(q, arg$Cons$0$));
    tmp1 = scanl(f1, tmp, arg$Cons$1$);
    return Cons1(q, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
scanr = function scanr(f1, q, ls) {
  let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return Cons1(q, Nil1)
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    scrut = scanr(f1, q, arg$Cons$1$);
    if (scrut instanceof Cons1.class) {
      arg$Cons$0$1 = scrut.head;
      arg$Cons$1$1 = scrut.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
      tmp1 = Cons1(arg$Cons$0$1, arg$Cons$1$1);
      return Cons1(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldr = function foldr(f1, z, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof Nil1.class) {
    return z
  } else if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = foldr(f1, z, arg$Cons$1$);
    return runtime.safeCall(f1(arg$Cons$0$, tmp))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldl1 = function foldl1(f1, ls) {
  let arg$Cons$0$, arg$Cons$1$;
  if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    return foldl(f1, arg$Cons$0$, arg$Cons$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldr1 = function foldr1(f1, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (arg$Cons$1$ instanceof Nil1.class) {
      return arg$Cons$0$
    }
    tmp = foldr1(f1, arg$Cons$1$);
    return runtime.safeCall(f1(arg$Cons$0$, tmp));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
maximum = function maximum(xs) {
  let arg$Cons$0$, arg$Cons$1$;
  if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    return foldl(lambda, arg$Cons$0$, arg$Cons$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
nubBy = function nubBy(eq, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return Nil1
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = filter(lambda$1(eq, arg$Cons$0$), arg$Cons$1$);
    tmp1 = nubBy(eq, tmp);
    return Cons1(arg$Cons$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
zipWith = function zipWith(f1, xss, yss) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
  if (xss instanceof Cons1.class) {
    arg$Cons$0$ = xss.head;
    arg$Cons$1$ = xss.tail;
    if (yss instanceof Cons1.class) {
      arg$Cons$0$1 = yss.head;
      arg$Cons$1$1 = yss.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
      tmp1 = zipWith(f1, arg$Cons$1$, arg$Cons$1$1);
      return Cons1(tmp, tmp1)
    }
    return Nil1;
  }
  return Nil1;
};
deleteBy = function deleteBy(eq, x, ys) {
  let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
  if (ys instanceof Nil1.class) {
    return Nil1
  } else if (ys instanceof Cons1.class) {
    arg$Cons$0$ = ys.head;
    arg$Cons$1$ = ys.tail;
    scrut = runtime.safeCall(eq(x, arg$Cons$0$));
    if (scrut === true) {
      return arg$Cons$1$
    }
    tmp = deleteBy(eq, x, arg$Cons$1$);
    return Cons1(arg$Cons$0$, tmp);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
unionBy = function unionBy(eq, xs, ys) {
  let tmp, tmp1;
  tmp = nubBy(eq, ys);
  tmp1 = foldl(lambda$2(eq), tmp, xs);
  return append(xs, tmp1)
};
union = function union(xs, ys) {
  let tmp, tmp1;
  tmp = nubBy(lambda3, ys);
  tmp1 = foldl(lambda$2(lambda3), tmp, xs);
  return append(xs, tmp1)
};
atIndex = function atIndex(i, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof Cons1.class) {
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
};
sum = function sum(xs) {
  return go(xs, 0)
};
null_ = function null_(ls) {
  if (ls instanceof Nil1.class) {
    return true
  }
  return false;
};
replicate = function replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return Nil1
  }
  tmp = n - 1;
  tmp1 = replicate(tmp, x);
  return Cons1(x, tmp1);
};
unzip = function unzip(l1) {
  return f(l1, Nil1, Nil1)
};
zip3 = function zip3(xs, ys, zs) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
  if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof Cons1.class) {
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      if (zs instanceof Cons1.class) {
        arg$Cons$0$2 = zs.head;
        arg$Cons$1$2 = zs.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$,
          arg$Cons$0$1,
          arg$Cons$0$2
        ]);
        tmp1 = zip3(arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
        return Cons1(tmp, tmp1)
      }
      return Nil1;
    }
    return Nil1;
  }
  return Nil1;
};
transpose = function transpose(xss) {
  return transpose_combine(0, xss, undefined, undefined, undefined)
};
break_ = function break_(p, ls) {
  let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return globalThis.Object.freeze([
      Nil1,
      Nil1
    ])
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    scrut = runtime.safeCall(p(arg$Cons$0$));
    if (scrut === true) {
      tmp = Cons1(arg$Cons$0$, arg$Cons$1$);
      return globalThis.Object.freeze([
        Nil1,
        tmp
      ])
    }
    scrut1 = break_(p, arg$Cons$1$);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      tmp1 = Cons1(arg$Cons$0$, element0$);
      return globalThis.Object.freeze([
        tmp1,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
flatMap = function flatMap(f1, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof Nil1.class) {
    return Nil1
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = runtime.safeCall(f1(arg$Cons$0$));
    tmp1 = flatMap(f1, arg$Cons$1$);
    return append(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
map_lz = function map_lz(f1, ls) {
  return Lazy1(lambda$3(f1, ls))
};
filter_lz = function filter_lz(p, ls) {
  return Lazy1(lambda$4(p, ls))
};
nubBy_lz = function nubBy_lz(eq, ls) {
  return Lazy1(lambda$5(eq, ls))
};
nub_lz = function nub_lz(ls) {
  return nubBy_lz(lambda8, ls)
};
take_lz = function take_lz(n, ls) {
  let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
  scrut = n > 0;
  if (scrut === true) {
    let inlinedVal;
    if (ls instanceof Lazy1.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof LzNil1.class) {
        return Nil1
      } else if (inlinedVal instanceof LzCons1.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        tmp = n - 1;
        tmp1 = take_lz(tmp, arg$LzCons$1$);
        return Cons1(arg$LzCons$0$, tmp1)
      }
      return Nil1;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return Nil1;
};
take_lz_lz = function take_lz_lz(n, ls) {
  return Lazy1(lambda$7(n, ls))
};
leave_lz = function leave_lz(n, ls) {
  loopLabel: while (true) {
    let scrut, arg$LzCons$1$, tmp;
    scrut = n <= 0;
    if (scrut === true) {
      return ls
    }
    {
      let inlinedVal;
      if (ls instanceof Lazy1.class) {
        inlinedVal = ls.get();
        if (inlinedVal instanceof LzNil1.class) {
          return Lazy1(lambda10)
        } else if (inlinedVal instanceof LzCons1.class) {
          arg$LzCons$1$ = inlinedVal.tail;
          tmp = n - 1;
          n = tmp;
          ls = arg$LzCons$1$;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
splitAt_lz = function splitAt_lz(n, ls) {
  let tmp, tmp1;
  tmp = take_lz(n, ls);
  tmp1 = leave_lz(n, ls);
  return globalThis.Object.freeze([
    tmp,
    tmp1
  ])
};
zip_lz_nl = function zip_lz_nl(xs, ys) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, inlinedVal;
  if (xs instanceof Lazy1.class) {
    inlinedVal = xs.get();
    if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (ys instanceof Cons1.class) {
        arg$Cons$0$ = ys.head;
        arg$Cons$1$ = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$LzCons$0$,
          arg$Cons$0$
        ]);
        tmp1 = zip_lz_nl(arg$LzCons$1$, arg$Cons$1$);
        return Cons1(tmp, tmp1)
      }
      return Nil1;
    }
    return Nil1;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
zip_lz_lz = function zip_lz_lz(xs, ys) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, inlinedVal;
  if (xs instanceof Lazy1.class) {
    inlinedVal = xs.get();
    if (inlinedVal instanceof LzCons1.class) {
      let inlinedVal1;
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (ys instanceof Lazy1.class) {
        inlinedVal1 = ys.get();
        if (inlinedVal1 instanceof LzCons1.class) {
          arg$LzCons$0$1 = inlinedVal1.head;
          arg$LzCons$1$1 = inlinedVal1.tail;
          return Lazy1(lambda$8(arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$1$1, arg$LzCons$0$1))
        }
        return Lazy1(lambda12);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return Lazy1(lambda13);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
zipWith_lz_lz = function zipWith_lz_lz(f1, xss, yss) {
  return Lazy1(lambda$9(f1, xss, yss))
};
zipWith_lz_nl = function zipWith_lz_nl(f1, xss, yss) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, inlinedVal;
  if (xss instanceof Lazy1.class) {
    inlinedVal = xss.get();
    if (inlinedVal instanceof LzCons1.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (yss instanceof Cons1.class) {
        arg$Cons$0$ = yss.head;
        arg$Cons$1$ = yss.tail;
        tmp = runtime.safeCall(f1(arg$LzCons$0$, arg$Cons$0$));
        tmp1 = zipWith_lz_nl(f1, arg$LzCons$1$, arg$Cons$1$);
        return Cons1(tmp, tmp1)
      }
      return Nil1;
    }
    return Nil1;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
iterate = function iterate(f1, x) {
  return Lazy1(lambda$10(f1, x))
};
append_nl_lz = function append_nl_lz(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$;
  if (xs instanceof Nil1.class) {
    return ys
  } else if (xs instanceof Cons1.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    return Lazy1(lambda$11(ys, arg$Cons$1$, arg$Cons$0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
append_lz_lz = function append_lz_lz(xs, ys) {
  return Lazy1(lambda$12(xs, ys))
};
replicate_lz = function replicate_lz(n, x) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return Lazy1(lambda18)
  }
  return Lazy1(lambda$13(n, x));
};
enumFrom = function enumFrom(a) {
  return Lazy1(lambda$14(a))
};
head_lz = function head_lz(ls) {
  let inlinedVal;
  if (ls instanceof Lazy1.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof LzCons1.class) {
      return inlinedVal.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
repeat = function repeat(x) {
  return Lazy1(lambda$15(x))
};
stringOfFloat = function stringOfFloat(x) {
  return x + ""
};
stringOfInt = function stringOfInt(x) {
  return x + ""
};
stringConcat = function stringConcat(x, y) {
  return x + y
};
stringListConcat = function stringListConcat(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof Nil1.class) {
    return ""
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = stringListConcat(arg$Cons$1$);
    return arg$Cons$0$ + tmp
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
sqrt = function sqrt(x) {
  return runtime.safeCall(globalThis.Math.sqrt(x))
};
tan = function tan(x) {
  return runtime.safeCall(globalThis.Math.tan(x))
};
sin = function sin(x) {
  return runtime.safeCall(globalThis.Math.sin(x))
};
cos = function cos(x) {
  return runtime.safeCall(globalThis.Math.cos(x))
};
round = function round(x) {
  return runtime.safeCall(globalThis.Math.round(x))
};
int_of_char = function int_of_char(x) {
  return runtime.safeCall(x.charCodeAt(0))
};
nofibStringToList = function nofibStringToList(s) {
  return go1(s, 0)
};
nofibListToString = function nofibListToString(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof Nil1.class) {
    return ""
  } else if (ls instanceof Cons1.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = nofibListToString(arg$Cons$1$);
    return arg$Cons$0$ + tmp
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class Option {
  static {
    Option1 = this
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Option"];
});
Some1 = function Some(x) {
  return globalThis.Object.freeze(new Some.class(x));
};
(class Some extends Option1 {
  static {
    Some1.class = this
  }
  constructor(x) {
    super();
    this.x = x;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Some", ["x"]];
});
(class None extends Option1 {
  static {
    new this
  }
  constructor() {
    super();
    None1 = this;
    Object.defineProperty(this, "class", {
      value: None
    });
    globalThis.Object.freeze(this);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["object", "None"];
});
Lazy1 = function Lazy(init) {
  return globalThis.Object.freeze(new Lazy.class(init));
};
(class Lazy {
  static {
    Lazy1.class = this
  }
  constructor(init) {
    this.init = init;
    this.cached = None1;
  }
  #cached;
  get cached() { return this.#cached; }
  set cached(value) { this.#cached = value; }
  get() {
    let scrut, v, tmp;
    scrut = this.cached;
    if (scrut instanceof Some1.class) {
      return scrut.x
    }
    v = runtime.safeCall(this.init());
    tmp = Some1(v);
    this.cached = tmp;
    return v;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Lazy", ["init"]];
});
(class List {
  static {
    List1 = this
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "List"];
});
Cons1 = function Cons(head1, tail1) {
  return globalThis.Object.freeze(new Cons.class(head1, tail1));
};
(class Cons extends List1 {
  static {
    Cons1.class = this
  }
  constructor(head1, tail1) {
    super();
    this.head = head1;
    this.tail = tail1;
  }
  toString() {
    let tmp, tmp1, tmp2;
    tmp = Cons1(this.head, this.tail);
    tmp1 = _internal_cons_to_str(tmp);
    tmp2 = "[" + tmp1;
    return tmp2 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
});
(class Nil extends List1 {
  static {
    new this
  }
  constructor() {
    super();
    Nil1 = this;
    Object.defineProperty(this, "class", {
      value: Nil
    });
    globalThis.Object.freeze(this);
  }
  toString() {
    return "[]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["object", "Nil"];
});
(class LzList {
  static {
    LzList1 = this
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "LzList"];
});
LzCons1 = function LzCons(head1, tail1) {
  return globalThis.Object.freeze(new LzCons.class(head1, tail1));
};
(class LzCons extends LzList1 {
  static {
    LzCons1.class = this
  }
  constructor(head1, tail1) {
    super();
    this.head = head1;
    this.tail = tail1;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "LzCons", ["head", "tail"]];
});
(class LzNil extends LzList1 {
  static {
    new this
  }
  constructor() {
    super();
    LzNil1 = this;
    Object.defineProperty(this, "class", {
      value: LzNil
    });
    globalThis.Object.freeze(this);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["object", "LzNil"];
});
(class mate {
  static {
    mate1 = this
  }
  static get [showReplies_showSoln$accessorSymbol]() { return mate.#showReplies_showSoln; }
  static get [moveInFullCompare$accessorSymbol]() { return mate.#moveInFullCompare; }
  static get [any$accessorSymbol]() { return mate.#any; }
  static get [kindToChar$accessorSymbol]() { return mate.#kindToChar; }
  static get [pieceToChar$accessorSymbol]() { return mate.#pieceToChar; }
  static get [rmPieceAt$accessorSymbol]() { return mate.#rmPieceAt; }
  static get [putPieceAt$accessorSymbol]() { return mate.#putPieceAt; }
  static get [kingSquare$accessorSymbol]() { return mate.#kingSquare; }
  static get [onboard$accessorSymbol]() { return mate.#onboard; }
  static get [forcesColoured$accessorSymbol]() { return mate.#forcesColoured; }
  static get [tryMove$accessorSymbol]() { return mate.#tryMove; }
  static get [rawmoves$accessorSymbol]() { return mate.#rawmoves; }
  static get [comment$accessorSymbol]() { return mate.#comment; }
  static get [parseSquare$accessorSymbol]() { return mate.#parseSquare; }
  static get [foldr_lz$accessorSymbol]() { return mate.#foldr_lz; }
  static get [replies$accessorSymbol]() { return mate.#replies; }
  static {
    let tmp;
    (class Kind {
      static {
        mate.Kind = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Kind"];
    });
    (class King extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.King = this;
        Object.defineProperty(this, "class", {
          value: King
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "King"];
    });
    (class Queen extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Queen = this;
        Object.defineProperty(this, "class", {
          value: Queen
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Queen"];
    });
    (class Rook extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Rook = this;
        Object.defineProperty(this, "class", {
          value: Rook
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Rook"];
    });
    (class Bishop extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Bishop = this;
        Object.defineProperty(this, "class", {
          value: Bishop
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bishop"];
    });
    (class Knight extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Knight = this;
        Object.defineProperty(this, "class", {
          value: Knight
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Knight"];
    });
    (class Pawn extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Pawn = this;
        Object.defineProperty(this, "class", {
          value: Pawn
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Pawn"];
    });
    (class Colour {
      static {
        mate.Colour = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Colour"];
    });
    (class Black extends mate.Colour {
      static {
        new this
      }
      constructor() {
        super();
        mate.Black = this;
        Object.defineProperty(this, "class", {
          value: Black
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Black"];
    });
    (class White extends mate.Colour {
      static {
        new this
      }
      constructor() {
        super();
        mate.White = this;
        Object.defineProperty(this, "class", {
          value: White
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "White"];
    });
    mate.Board = function Board(a, b) {
      return globalThis.Object.freeze(new Board.class(a, b));
    };
    (class Board {
      static {
        mate.Board.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Board", ["a", "b"]];
    });
    mate.Move = function Move(a, b, c) {
      return globalThis.Object.freeze(new Move.class(a, b, c));
    };
    (class Move {
      static {
        mate.Move.class = this
      }
      constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Move", ["a", "b", "c"]];
    });
    mate.MoveInFull = function MoveInFull(a, b, c) {
      return globalThis.Object.freeze(new MoveInFull.class(a, b, c));
    };
    (class MoveInFull {
      static {
        mate.MoveInFull.class = this
      }
      constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MoveInFull", ["a", "b", "c"]];
    });
    mate.Solution = function Solution(a, b) {
      return globalThis.Object.freeze(new Solution.class(a, b));
    };
    (class Solution {
      static {
        mate.Solution.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Solution", ["a", "b"]];
    });
    tmp = mate.Board(Nil1, Nil1);
    mate.emptyBoard = tmp;
    mate.Soln = function Soln(a, b) {
      return globalThis.Object.freeze(new Soln.class(a, b));
    };
    (class Soln {
      static {
        mate.Soln.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Soln", ["a", "b"]];
    });
  }
  static #showReplies_showSoln(id, param0, param1) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
          if (param0 instanceof Nil1.class) {
            return Nil1
          } else if (param0 instanceof Cons1.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              let inlinedVal;
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              tmp = mate.#tab(param1);
              inlinedVal = go1("if ", 0);
              if (arg$Cons$1$ instanceof Nil1.class) {
                let inlinedVal1;
                inlinedVal1 = l(element0$, 0);
                tmp1 = inlinedVal1 > 1;
                if (tmp1 === true) {
                  let inlinedVal2;
                  inlinedVal2 = go1("others", 0);
                  tmp2 = inlinedVal2;
                } else {
                  let inlinedVal2;
                  tmp3 = mate.#showMoves(element0$);
                  inlinedVal2 = go1("; ", 0);
                  tmp4 = param1 + 1;
                  tmp5 = mate.#showReplies_showSoln(1, element1$, tmp4);
                  tmp6 = mate.#showReplies_showSoln(0, arg$Cons$1$, param1);
                  tmp7 = append(tmp5, tmp6);
                  tmp8 = append(inlinedVal2, tmp7);
                  tmp2 = append(tmp3, tmp8);
                }
              } else {
                let inlinedVal1;
                tmp3 = mate.#showMoves(element0$);
                inlinedVal1 = go1("; ", 0);
                tmp4 = param1 + 1;
                tmp5 = mate.#showReplies_showSoln(1, element1$, tmp4);
                tmp6 = mate.#showReplies_showSoln(0, arg$Cons$1$, param1);
                tmp7 = append(tmp5, tmp6);
                tmp8 = append(inlinedVal1, tmp7);
                tmp2 = append(tmp3, tmp8);
              }
              tmp9 = append(inlinedVal, tmp2);
              return append(tmp, tmp9)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Soln$0$, arg$Soln$1$, tmp, tmp1, tmp2, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
          if (param0 instanceof mate.Soln.class) {
            let inlinedVal, s, inlinedVal1, inlinedVal2;
            arg$Soln$0$ = param0.a;
            arg$Soln$1$ = param0.b;
            inlinedVal = param1 + "";
            s = inlinedVal;
            inlinedVal1 = go1(s, 0);
            tmp = inlinedVal1;
            inlinedVal2 = go1(". ", 0);
            tmp1 = inlinedVal2;
            tmp2 = mate.#showMoveInFull(arg$Soln$0$);
            if (arg$Soln$1$ instanceof Nil1.class) {
              let inlinedVal3;
              inlinedVal3 = go1("++\n", 0);
              tmp3 = inlinedVal3;
            } else {
              σ$x: {
                let inlinedVal3;
                if (arg$Soln$1$ instanceof Cons1.class) {
                  arg$Cons$0$ = arg$Soln$1$.head;
                  arg$Cons$1$ = arg$Soln$1$.tail;
                  if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                    element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                    element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                    if (arg$Cons$1$ instanceof Nil1.class) {
                      let inlinedVal4, inlinedVal5, inlinedVal6;
                      inlinedVal4 = go1(", ", 0);
                      inlinedVal5 = l(element0$, 0);
                      scrut = inlinedVal5 > 1;
                      if (scrut === true) {
                        let inlinedVal7;
                        inlinedVal7 = go1("...", 0);
                        tmp7 = inlinedVal7;
                      } else {
                        tmp7 = mate.#showMoves(element0$);
                      }
                      inlinedVal6 = go1("; ", 0);
                      tmp8 = param1 + 1;
                      tmp9 = mate.#showReplies_showSoln(1, element1$, tmp8);
                      tmp10 = append(inlinedVal6, tmp9);
                      tmp11 = append(tmp7, tmp10);
                      tmp4 = append(inlinedVal4, tmp11);
                      break σ$x
                    }
                  }
                }
                inlinedVal3 = go1(",\n", 0);
                tmp5 = mate.#sort(arg$Soln$1$);
                tmp6 = mate.#showReplies_showSoln(0, tmp5, param1);
                tmp4 = append(inlinedVal3, tmp6);
              }
              tmp3 = tmp4;
            }
            tmp12 = append(tmp2, tmp3);
            tmp13 = append(tmp1, tmp12);
            return append(tmp, tmp13)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
  static #rqpart_rqsort_qpart_qsort(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof Nil1.class) {
              tmp = mate.#rqpart_rqsort_qpart_qsort(3, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = Cons1(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 3;
              continue loopLabel
            } else if (param2 instanceof Cons1.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
              if (scrut === true) {
                tmp2 = Cons1(arg$Cons$0$, param3);
                param2 = arg$Cons$1$;
                param3 = tmp2;
                id = 0;
                continue loopLabel
              }
              tmp3 = Cons1(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp3;
              id = 0;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof Nil1.class) {
              return param2
            } else if (param1 instanceof Cons1.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof Nil1.class) {
                return Cons1(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = Nil1;
                param4 = Nil1;
                param5 = param2_tmp;
                id = 0;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof Nil1.class) {
              tmp = mate.#rqpart_rqsort_qpart_qsort(1, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = Cons1(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 1;
              continue loopLabel
            } else if (param2 instanceof Cons1.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
              if (scrut === true) {
                tmp2 = Cons1(arg$Cons$0$, param4);
                param2 = arg$Cons$1$;
                param4 = tmp2;
                id = 2;
                continue loopLabel
              }
              tmp3 = Cons1(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp3;
              id = 2;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 3:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof Nil1.class) {
              return param2
            } else if (param1 instanceof Cons1.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof Nil1.class) {
                return Cons1(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = Nil1;
                param4 = Nil1;
                param5 = param2_tmp;
                id = 2;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #rqpart(le, x, ys, rle, rgt, r1) {
    return mate.#rqpart_rqsort_qpart_qsort(0, le, x, ys, rle, rgt, r1)
  }
  static #rqsort(le, xs, r1) {
    return mate.#rqpart_rqsort_qpart_qsort(1, le, xs, r1, undefined, undefined, undefined)
  }
  static #qpart(le, x, ys, rlt, rge, r1) {
    return mate.#rqpart_rqsort_qpart_qsort(2, le, x, ys, rlt, rge, r1)
  }
  static #qsort(le, xs, r1) {
    return mate.#rqpart_rqsort_qpart_qsort(3, le, xs, r1, undefined, undefined, undefined)
  }
  static #sort(l1) {
    return mate.#qsort(lambda22, l1, Nil1)
  }
  static #kindOrder(k) {
    if (k instanceof mate.King.class) {
      return 1
    } else if (k instanceof mate.Queen.class) {
      return 2
    } else if (k instanceof mate.Rook.class) {
      return 3
    } else if (k instanceof mate.Bishop.class) {
      return 4
    } else if (k instanceof mate.Knight.class) {
      return 5
    } else if (k instanceof mate.Pawn.class) {
      return 6
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #colourOrder(c) {
    if (c instanceof mate.Black.class) {
      return 1
    }
    return 2;
  }
  static #pieceCompare(p1, p2) {
    let co, scrut, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        tmp = mate.#colourOrder(element0$);
        tmp1 = mate.#colourOrder(element0$1);
        co = tmp - tmp1;
        scrut = co === 0;
        if (scrut === true) {
          tmp2 = mate.#kindOrder(element1$);
          tmp3 = mate.#kindOrder(element1$1);
          return tmp2 - tmp3
        }
        return co;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #squareCompare(s1, s2) {
    let ro, scrut, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(s1) && s1.length === 2) {
      element0$ = runtime.Tuple.get(s1, 0);
      element1$ = runtime.Tuple.get(s1, 1);
      if (runtime.Tuple.isArrayLike(s2) && s2.length === 2) {
        element0$1 = runtime.Tuple.get(s2, 0);
        element1$1 = runtime.Tuple.get(s2, 1);
        ro = element1$ - element1$1;
        scrut = ro === 0;
        if (scrut === true) {
          return element0$ - element0$1
        }
        return ro;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #optPieceCompare(op1, op2) {
    let arg$Some$0$, arg$Some$0$1;
    if (op1 instanceof None1.class) {
      if (op2 instanceof None1.class) {
        return 0
      } else if (op2 instanceof Some1.class) {
        return -1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (op1 instanceof Some1.class) {
      arg$Some$0$ = op1.x;
      if (op2 instanceof None1.class) {
        return 1
      } else if (op2 instanceof Some1.class) {
        arg$Some$0$1 = op2.x;
        return mate.#pieceCompare(arg$Some$0$, arg$Some$0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveCompare(m1, m2) {
    let ac, scrut, bc, scrut1, arg$Move$0$, arg$Move$1$, arg$Move$2$, arg$Move$0$1, arg$Move$1$1, arg$Move$2$1;
    if (m1 instanceof mate.Move.class) {
      arg$Move$0$ = m1.a;
      arg$Move$1$ = m1.b;
      arg$Move$2$ = m1.c;
      if (m2 instanceof mate.Move.class) {
        arg$Move$0$1 = m2.a;
        arg$Move$1$1 = m2.b;
        arg$Move$2$1 = m2.c;
        ac = mate.#squareCompare(arg$Move$0$, arg$Move$0$1);
        scrut = ac === 0;
        if (scrut === true) {
          bc = mate.#optPieceCompare(arg$Move$1$, arg$Move$1$1);
          scrut1 = bc === 0;
          if (scrut1 === true) {
            return mate.#optPieceCompare(arg$Move$2$, arg$Move$2$1)
          }
          return bc;
        }
        return ac;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveInFullCompare(mif1, mif2) {
    let pc, scrut, sc, scrut1, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, arg$MoveInFull$0$1, arg$MoveInFull$1$1, arg$MoveInFull$2$1;
    if (mif1 instanceof mate.MoveInFull.class) {
      arg$MoveInFull$0$ = mif1.a;
      arg$MoveInFull$1$ = mif1.b;
      arg$MoveInFull$2$ = mif1.c;
      if (mif2 instanceof mate.MoveInFull.class) {
        arg$MoveInFull$0$1 = mif2.a;
        arg$MoveInFull$1$1 = mif2.b;
        arg$MoveInFull$2$1 = mif2.c;
        pc = mate.#pieceCompare(arg$MoveInFull$0$, arg$MoveInFull$0$1);
        scrut = pc === 0;
        if (scrut === true) {
          sc = mate.#squareCompare(arg$MoveInFull$1$, arg$MoveInFull$1$1);
          scrut1 = sc === 0;
          if (scrut1 === true) {
            return mate.#moveCompare(arg$MoveInFull$2$, arg$MoveInFull$2$1)
          }
          return sc;
        }
        return pc;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #maybe(d, f1, x) {
    let arg$Some$0$;
    if (x instanceof None1.class) {
      return d
    } else if (x instanceof Some1.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(f1(arg$Some$0$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #isUpper(c) {
    let x, scrut, scrut1;
    x = runtime.safeCall(c.charCodeAt(0));
    scrut = x >= 65;
    if (scrut === true) {
      scrut1 = x <= 90;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  }
  static #isLower(c) {
    let x, scrut, scrut1;
    x = runtime.safeCall(c.charCodeAt(0));
    scrut = x >= 97;
    if (scrut === true) {
      scrut1 = x <= 122;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  }
  static #toLower(c) {
    let scrut, tmp, tmp1;
    scrut = mate.#isUpper(c);
    if (scrut === true) {
      tmp = runtime.safeCall(c.charCodeAt(0));
      tmp1 = tmp + 32;
      return runtime.safeCall(globalThis.String.fromCharCode(tmp1))
    }
    return c;
  }
  static #words(s) {
    let scrut, scrut1, element1$, element0$, tmp;
    scrut = leaveWhile(lambda23, s);
    if (scrut instanceof Nil1.class) {
      return Nil1
    }
    scrut1 = break_(lambda24, scrut);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      tmp = mate.#words(element1$);
      return Cons1(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unlines(ls) {
    let tmp;
    tmp = map(lambda25, ls);
    return concat(tmp)
  }
  static #lines(s) {
    let scrut, element1$, element0$, arg$Cons$1$, tmp;
    scrut = break_(lambda26, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element1$ instanceof Nil1.class) {
        return Cons1(element0$, Nil1)
      } else if (element1$ instanceof Cons1.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = mate.#lines(arg$Cons$1$);
        return Cons1(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #any(p, ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof Nil1.class) {
        return false
      } else if (ls instanceof Cons1.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === false) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #showColour(c) {
    if (c instanceof mate.Black.class) {
      return go1("Black", 0)
    }
    return go1("White", 0);
  }
  static #pieceAt(bd, sq) {
    let arg$Board$0$, arg$Board$1$, tmp;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      tmp = pieceAtWith(sq, mate.Black, None1, arg$Board$1$);
      return pieceAtWith(sq, mate.White, tmp, arg$Board$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #kindToChar(k) {
    if (k instanceof mate.King.class) {
      return "K"
    } else if (k instanceof mate.Queen.class) {
      return "Q"
    } else if (k instanceof mate.Rook.class) {
      return "R"
    } else if (k instanceof mate.Bishop.class) {
      return "B"
    } else if (k instanceof mate.Knight.class) {
      return "N"
    } else if (k instanceof mate.Pawn.class) {
      return "P"
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pieceToChar(p) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof mate.Black.class) {
        return mate.#kindToChar(element1$)
      } else if (element0$ instanceof mate.White.class) {
        tmp = mate.#kindToChar(element1$);
        return mate.#toLower(tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showBoard(bd) {
    let tmp, tmp1, showRank$here, inlinedVal;
    tmp = enumFromTo(1, 8);
    inlinedVal = r(Nil1, tmp);
    showRank$here = showRank$(mate, bd);
    tmp1 = map(showRank$here, inlinedVal);
    return mate.#unlines(tmp1)
  }
  static #showPiece(p) {
    let element1$, tmp;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      tmp = mate.#kindToChar(element1$);
      return Cons1(tmp, Nil1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showSquare(c, x_y) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, s, inlinedVal9;
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = element0$ - 1;
      inlinedVal = go1("QR", 0);
      inlinedVal1 = go1("QN", 0);
      inlinedVal2 = go1("QB", 0);
      inlinedVal3 = go1("Q", 0);
      inlinedVal4 = go1("K", 0);
      inlinedVal5 = go1("KB", 0);
      inlinedVal6 = go1("KN", 0);
      inlinedVal7 = go1("KR", 0);
      tmp1 = Cons1(inlinedVal7, Nil1);
      tmp2 = Cons1(inlinedVal6, tmp1);
      tmp3 = Cons1(inlinedVal5, tmp2);
      tmp4 = Cons1(inlinedVal4, tmp3);
      tmp5 = Cons1(inlinedVal3, tmp4);
      tmp6 = Cons1(inlinedVal2, tmp5);
      tmp7 = Cons1(inlinedVal1, tmp6);
      tmp8 = Cons1(inlinedVal, tmp7);
      tmp9 = atIndex(tmp, tmp8);
      if (c instanceof mate.Black.class) {
        tmp10 = 9 - element1$;
      } else {
        tmp10 = element1$;
      }
      inlinedVal8 = tmp10 + "";
      s = inlinedVal8;
      inlinedVal9 = go1(s, 0);
      return append(tmp9, inlinedVal9)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #emptyAtAll(bd, e) {
    let arg$Board$0$, arg$Board$1$, tmp;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      tmp = emptyAtAllAnd(e, true, arg$Board$1$);
      return emptyAtAllAnd(e, tmp, arg$Board$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rPa(sq, kss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (kss instanceof Nil1.class) {
      throw runtime.safeCall(globalThis.Error("rPa"))
    } else if (kss instanceof Cons1.class) {
      arg$Cons$0$ = kss.head;
      arg$Cons$1$ = kss.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = eqTup2(element1$, sq);
        if (scrut === true) {
          return arg$Cons$1$
        }
        tmp = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp1 = mate.#rPa(sq, arg$Cons$1$);
        return Cons1(tmp, tmp1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rmPieceAt(c, sq, bd) {
    let arg$Board$0$, arg$Board$1$, tmp, tmp1;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        tmp = mate.#rPa(sq, arg$Board$0$);
        return mate.Board(tmp, arg$Board$1$)
      } else if (c instanceof mate.Black.class) {
        tmp1 = mate.#rPa(sq, arg$Board$1$);
        return mate.Board(arg$Board$0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #putPieceAt(sq, c_k, bd) {
    let element1$, element0$, arg$Board$0$, arg$Board$1$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      element0$ = runtime.Tuple.get(c_k, 0);
      element1$ = runtime.Tuple.get(c_k, 1);
      if (bd instanceof mate.Board.class) {
        arg$Board$0$ = bd.a;
        arg$Board$1$ = bd.b;
        if (element0$ instanceof mate.White.class) {
          tmp = globalThis.Object.freeze([
            element1$,
            sq
          ]);
          tmp1 = Cons1(tmp, arg$Board$0$);
          return mate.Board(tmp1, arg$Board$1$)
        } else if (element0$ instanceof mate.Black.class) {
          tmp2 = globalThis.Object.freeze([
            element1$,
            sq
          ]);
          tmp3 = Cons1(tmp2, arg$Board$1$);
          return mate.Board(arg$Board$0$, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #kSq(kss) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (kss instanceof Cons1.class) {
        arg$Cons$0$ = kss.head;
        arg$Cons$1$ = kss.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          if (element0$ instanceof mate.King.class) {
            return element1$
          }
        }
        kss = arg$Cons$1$;
        continue loopLabel
      } else if (kss instanceof Nil1.class) {
        throw runtime.safeCall(globalThis.Error("kSq"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #kingSquare(c, bd) {
    let arg$Board$0$, arg$Board$1$;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        return mate.#kSq(arg$Board$0$)
      } else if (c instanceof mate.Black.class) {
        return mate.#kSq(arg$Board$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #opponent(c) {
    if (c instanceof mate.White.class) {
      return mate.Black
    }
    return mate.White;
  }
  static #colourOf(c_k) {
    let element0$;
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      element0$ = runtime.Tuple.get(c_k, 0);
      runtime.Tuple.get(c_k, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #kindOf(c_k) {
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      runtime.Tuple.get(c_k, 0);
      return runtime.Tuple.get(c_k, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #onboard(p_q) {
    let scrut, scrut1, scrut2, scrut3, element1$, element0$;
    if (runtime.Tuple.isArrayLike(p_q) && p_q.length === 2) {
      element0$ = runtime.Tuple.get(p_q, 0);
      element1$ = runtime.Tuple.get(p_q, 1);
      scrut = element0$ >= 1;
      if (scrut === true) {
        scrut1 = element0$ <= 8;
        if (scrut1 === true) {
          scrut2 = element1$ >= 1;
          if (scrut2 === true) {
            scrut3 = element1$ <= 8;
            if (scrut3 === true) {
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
  static #forcesColoured(c, bd) {
    let arg$Board$0$, arg$Board$1$;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        return arg$Board$0$
      } else if (c instanceof mate.Black.class) {
        return arg$Board$1$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showMove(withPiece, m) {
    let scrut, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, element1$, element0$, arg$Move$0$, arg$Move$1$, arg$Move$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    if (m instanceof mate.MoveInFull.class) {
      arg$MoveInFull$0$ = m.a;
      arg$MoveInFull$1$ = m.b;
      arg$MoveInFull$2$ = m.c;
      if (runtime.Tuple.isArrayLike(arg$MoveInFull$0$) && arg$MoveInFull$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$MoveInFull$0$, 0);
        element1$ = runtime.Tuple.get(arg$MoveInFull$0$, 1);
        if (arg$MoveInFull$2$ instanceof mate.Move.class) {
          arg$Move$0$ = arg$MoveInFull$2$.a;
          arg$Move$1$ = arg$MoveInFull$2$.b;
          arg$Move$2$ = arg$MoveInFull$2$.c;
          if (arg$Move$1$ instanceof Some1.class) {
            tmp = true;
          } else {
            tmp = false;
          }
          if (arg$Move$2$ instanceof Some1.class) {
            tmp1 = true;
          } else {
            tmp1 = false;
          }
          if (withPiece === true) {
            tmp2 = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            tmp3 = mate.#showPiece(tmp2);
            tmp4 = element1$ === mate.King;
            if (tmp4 === false) {
              if (element1$ instanceof mate.Pawn.class) {
                if (tmp === false) {
                  tmp5 = tmp1;
                } else {
                  tmp5 = true;
                }
                scrut = ! tmp5;
                if (scrut === true) {
                  tmp6 = Nil1;
                } else {
                  tmp7 = mate.#showSquare(element0$, arg$MoveInFull$1$);
                  tmp6 = Cons1("/", tmp7);
                }
              } else {
                tmp7 = mate.#showSquare(element0$, arg$MoveInFull$1$);
                tmp6 = Cons1("/", tmp7);
              }
            } else {
              tmp6 = Nil1;
            }
            tmp8 = append(tmp3, tmp6);
          } else {
            tmp8 = Nil1;
          }
          tmp9 = Cons1("-", Nil1);
          tmp10 = mate.#maybe(tmp9, lambda$17(mate), arg$Move$1$);
          tmp11 = mate.#showSquare(element0$, arg$Move$0$);
          tmp12 = mate.#maybe(Nil1, lambda$16(mate), arg$Move$2$);
          tmp13 = append(tmp11, tmp12);
          tmp14 = append(tmp10, tmp13);
          return append(tmp8, tmp14)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showMoveInFull(a) {
    return mate.#showMove(true, a)
  }
  static #showMovesAfter(p_, mifs) {
    let arg$Cons$0$, arg$Cons$1$, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, arg$MoveInFull$0$1, arg$MoveInFull$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (mifs instanceof Nil1.class) {
      return Nil1
    } else if (mifs instanceof Cons1.class) {
      arg$Cons$0$ = mifs.head;
      arg$Cons$1$ = mifs.tail;
      if (arg$Cons$0$ instanceof mate.MoveInFull.class) {
        arg$MoveInFull$0$ = arg$Cons$0$.a;
        arg$MoveInFull$1$ = arg$Cons$0$.b;
        arg$MoveInFull$2$ = arg$Cons$0$.c;
        if (p_ instanceof mate.MoveInFull.class) {
          let inlinedVal;
          arg$MoveInFull$0$1 = p_.a;
          arg$MoveInFull$1$1 = p_.b;
          inlinedVal = go1(", ", 0);
          tmp = eqTup2(arg$MoveInFull$0$, arg$MoveInFull$0$1);
          if (tmp === false) {
            tmp2 = eqTup2(arg$MoveInFull$1$, arg$MoveInFull$1$1);
            tmp1 = ! tmp2;
          } else {
            tmp1 = true;
          }
          tmp3 = ! tmp1;
          tmp4 = mate.MoveInFull(arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$);
          tmp5 = mate.#showMove(tmp3, tmp4);
          tmp6 = mate.MoveInFull(arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$);
          tmp7 = mate.#showMovesAfter(tmp6, arg$Cons$1$);
          tmp8 = append(tmp5, tmp7);
          return append(inlinedVal, tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showMoves(mifs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (mifs instanceof Nil1.class) {
      throw runtime.safeCall(globalThis.Error("showMoves"))
    } else if (mifs instanceof Cons1.class) {
      arg$Cons$0$ = mifs.head;
      arg$Cons$1$ = mifs.tail;
      tmp = mate.#showMoveInFull(arg$Cons$0$);
      tmp1 = mate.#showMovesAfter(arg$Cons$0$, arg$Cons$1$);
      return append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sift(c, bd, ms, sqs) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (sqs instanceof Nil1.class) {
        return ms
      } else if (sqs instanceof Cons1.class) {
        arg$Cons$0$ = sqs.head;
        arg$Cons$1$ = sqs.tail;
        scrut = mate.#onboard(arg$Cons$0$);
        if (scrut === true) {
          scrut1 = mate.#pieceAt(bd, arg$Cons$0$);
          if (scrut1 instanceof None1.class) {
            tmp = mate.Move(arg$Cons$0$, None1, None1);
            tmp1 = Cons1(tmp, ms);
            ms = tmp1;
            sqs = arg$Cons$1$;
            continue loopLabel
          } else if (scrut1 instanceof Some1.class) {
            arg$Some$0$ = scrut1.x;
            tmp2 = mate.#colourOf(arg$Some$0$);
            scrut2 = tmp2 === c;
            if (scrut2 === true) {
              sqs = arg$Cons$1$;
              continue loopLabel
            }
            tmp3 = Some1(arg$Some$0$);
            tmp4 = mate.Move(arg$Cons$0$, tmp3, None1);
            tmp5 = Cons1(tmp4, ms);
            ms = tmp5;
            sqs = arg$Cons$1$;
            continue loopLabel;
          }
        }
        sqs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #moveLine(bd, c, sq, inc, cont) {
    return lambda$18(mate, bd, c, sq, inc, cont)
  }
  static #bishopmoves(c, sq, bd) {
    let tmp, tmp1, tmp2, baseCall;
    tmp = mate.#moveLine(bd, c, sq, lambda32, lambda33);
    tmp1 = mate.#moveLine(bd, c, sq, lambda31, tmp);
    tmp2 = mate.#moveLine(bd, c, sq, lambda30, tmp1);
    baseCall = mate.#moveLine(bd, c, sq, lambda29, tmp2);
    return runtime.safeCall(baseCall(Nil1))
  }
  static #rookmoves(c, sq, bd) {
    let tmp, tmp1, tmp2, baseCall;
    tmp = mate.#moveLine(bd, c, sq, lambda37, lambda38);
    tmp1 = mate.#moveLine(bd, c, sq, lambda36, tmp);
    tmp2 = mate.#moveLine(bd, c, sq, lambda35, tmp1);
    baseCall = mate.#moveLine(bd, c, sq, lambda34, tmp2);
    return runtime.safeCall(baseCall(Nil1))
  }
  static #kingmoves(c, pq, bd) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      tmp = element0$ - 1;
      tmp1 = element1$ + 1;
      tmp2 = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      tmp3 = element1$ + 1;
      tmp4 = globalThis.Object.freeze([
        element0$,
        tmp3
      ]);
      tmp5 = element0$ + 1;
      tmp6 = element1$ + 1;
      tmp7 = globalThis.Object.freeze([
        tmp5,
        tmp6
      ]);
      tmp8 = element0$ - 1;
      tmp9 = globalThis.Object.freeze([
        tmp8,
        element1$
      ]);
      tmp10 = element0$ + 1;
      tmp11 = globalThis.Object.freeze([
        tmp10,
        element1$
      ]);
      tmp12 = element0$ - 1;
      tmp13 = element1$ - 1;
      tmp14 = globalThis.Object.freeze([
        tmp12,
        tmp13
      ]);
      tmp15 = element1$ - 1;
      tmp16 = globalThis.Object.freeze([
        element0$,
        tmp15
      ]);
      tmp17 = element0$ + 1;
      tmp18 = element1$ - 1;
      tmp19 = globalThis.Object.freeze([
        tmp17,
        tmp18
      ]);
      tmp20 = Cons1(tmp19, Nil1);
      tmp21 = Cons1(tmp16, tmp20);
      tmp22 = Cons1(tmp14, tmp21);
      tmp23 = Cons1(tmp11, tmp22);
      tmp24 = Cons1(tmp9, tmp23);
      tmp25 = Cons1(tmp7, tmp24);
      tmp26 = Cons1(tmp4, tmp25);
      tmp27 = Cons1(tmp2, tmp26);
      return mate.#sift(c, bd, Nil1, tmp27)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #knightmoves(c, pq, bd) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      tmp = element0$ - 1;
      tmp1 = element1$ + 2;
      tmp2 = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      tmp3 = element0$ + 1;
      tmp4 = element1$ + 2;
      tmp5 = globalThis.Object.freeze([
        tmp3,
        tmp4
      ]);
      tmp6 = element0$ - 2;
      tmp7 = element1$ + 1;
      tmp8 = globalThis.Object.freeze([
        tmp6,
        tmp7
      ]);
      tmp9 = element0$ + 2;
      tmp10 = element1$ + 1;
      tmp11 = globalThis.Object.freeze([
        tmp9,
        tmp10
      ]);
      tmp12 = element0$ - 2;
      tmp13 = element1$ - 1;
      tmp14 = globalThis.Object.freeze([
        tmp12,
        tmp13
      ]);
      tmp15 = element0$ + 2;
      tmp16 = element1$ - 1;
      tmp17 = globalThis.Object.freeze([
        tmp15,
        tmp16
      ]);
      tmp18 = element0$ - 1;
      tmp19 = element1$ - 2;
      tmp20 = globalThis.Object.freeze([
        tmp18,
        tmp19
      ]);
      tmp21 = element0$ + 1;
      tmp22 = element1$ - 2;
      tmp23 = globalThis.Object.freeze([
        tmp21,
        tmp22
      ]);
      tmp24 = Cons1(tmp23, Nil1);
      tmp25 = Cons1(tmp20, tmp24);
      tmp26 = Cons1(tmp17, tmp25);
      tmp27 = Cons1(tmp14, tmp26);
      tmp28 = Cons1(tmp11, tmp27);
      tmp29 = Cons1(tmp8, tmp28);
      tmp30 = Cons1(tmp5, tmp29);
      tmp31 = Cons1(tmp2, tmp30);
      return mate.#sift(c, bd, Nil1, tmp31)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pawnmoves(c, pq, bd) {
    let on1, on2, scrut, scrut1, scrut2, scrut3, caps, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      if (c instanceof mate.White.class) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      tmp1 = element1$ + tmp;
      on1 = globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
      tmp2 = 2 * tmp;
      tmp3 = element1$ + tmp2;
      on2 = globalThis.Object.freeze([
        element0$,
        tmp3
      ]);
      scrut = mate.#pieceAt(bd, on1);
      if (scrut instanceof None1.class) {
        tmp4 = promote(mate, c, on1, None1);
        scrut1 = element1$ === 2;
        if (scrut1 === true) {
          if (c instanceof mate.White.class) {
            tmp5 = true;
          } else {
            tmp5 = false;
          }
        } else {
          tmp5 = false;
        }
        if (tmp5 === false) {
          scrut2 = element1$ === 7;
          if (scrut2 === true) {
            if (c instanceof mate.Black.class) {
              scrut3 = mate.#pieceAt(bd, on2);
              if (scrut3 instanceof None1.class) {
                tmp6 = mate.Move(on2, None1, None1);
                tmp7 = Cons1(tmp6, Nil1);
              } else {
                tmp7 = Nil1;
              }
            } else {
              tmp7 = Nil1;
            }
          } else {
            tmp7 = Nil1;
          }
        } else {
          scrut3 = mate.#pieceAt(bd, on2);
          if (scrut3 instanceof None1.class) {
            tmp6 = mate.Move(on2, None1, None1);
            tmp7 = Cons1(tmp6, Nil1);
          } else {
            tmp7 = Nil1;
          }
        }
        tmp8 = append(tmp4, tmp7);
      } else {
        tmp8 = Nil1;
      }
      tmp9 = element0$ + 1;
      tmp10 = element1$ + tmp;
      tmp11 = globalThis.Object.freeze([
        tmp9,
        tmp10
      ]);
      tmp12 = element0$ - 1;
      tmp13 = element1$ + tmp;
      tmp14 = globalThis.Object.freeze([
        tmp12,
        tmp13
      ]);
      tmp15 = Cons1(tmp14, Nil1);
      tmp16 = Cons1(tmp11, tmp15);
      inlinedVal = lscomp1_lscomp2(0, mate, c, bd, tmp16, undefined, undefined);
      caps = concat(inlinedVal);
      return append(tmp8, caps)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #queenmoves(c, sq, bd) {
    let tmp, tmp1;
    tmp = mate.#bishopmoves(c, sq, bd);
    tmp1 = mate.#rookmoves(c, sq, bd);
    return append(tmp, tmp1)
  }
  static #kingincheck(c, bd) {
    let tmp, tmp1, givesCheck$here;
    tmp = mate.#opponent(c);
    tmp1 = mate.#forcesColoured(tmp, bd);
    givesCheck$here = givesCheck$(mate, c, bd);
    return mate.#any(givesCheck$here, tmp1)
  }
  static #tryMove(c, ksq, m, bd) {
    let p, bd1, p_, bd2, scrut, element1$, element0$, arg$Move$0$, arg$Move$1$, arg$Move$2$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(ksq) && ksq.length === 2) {
      element0$ = runtime.Tuple.get(ksq, 0);
      element1$ = runtime.Tuple.get(ksq, 1);
      if (m instanceof mate.Move.class) {
        arg$Move$0$ = m.a;
        arg$Move$1$ = m.b;
        arg$Move$2$ = m.c;
        p = globalThis.Object.freeze([
          c,
          element0$
        ]);
        bd1 = mate.#rmPieceAt(c, element1$, bd);
        p_ = mate.#maybe(p, lambda44, arg$Move$2$);
        tmp = mate.#putPieceAt(arg$Move$0$, p_, bd1);
        bd2 = mate.#maybe(tmp, lambda$24(mate, c, arg$Move$0$, bd1, p_), arg$Move$1$);
        tmp1 = mate.#kingincheck(c, bd2);
        scrut = ! tmp1;
        if (scrut === true) {
          tmp2 = mate.Move(arg$Move$0$, arg$Move$1$, arg$Move$2$);
          tmp3 = mate.MoveInFull(p, element1$, tmp2);
          tmp4 = globalThis.Object.freeze([
            tmp3,
            bd2
          ]);
          return Some1(tmp4)
        }
        return None1;
      }
      throw runtime.safeCall(globalThis.Error(m));
    }
    throw runtime.safeCall(globalThis.Error(m));
  }
  static #rawmoves(c, ksq, bd) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(ksq) && ksq.length === 2) {
      element0$ = runtime.Tuple.get(ksq, 0);
      element1$ = runtime.Tuple.get(ksq, 1);
      if (element0$ instanceof mate.King.class) {
        return runtime.safeCall(mate.#kingmoves(c, element1$, bd))
      } else if (element0$ instanceof mate.Queen.class) {
        return runtime.safeCall(mate.#queenmoves(c, element1$, bd))
      } else if (element0$ instanceof mate.Rook.class) {
        return runtime.safeCall(mate.#rookmoves(c, element1$, bd))
      } else if (element0$ instanceof mate.Bishop.class) {
        return runtime.safeCall(mate.#bishopmoves(c, element1$, bd))
      } else if (element0$ instanceof mate.Knight.class) {
        return runtime.safeCall(mate.#knightmoves(c, element1$, bd))
      } else if (element0$ instanceof mate.Pawn.class) {
        return runtime.safeCall(mate.#pawnmoves(c, element1$, bd))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveDetailsFor(c, bd) {
    let tmp;
    tmp = mate.#forcesColoured(c, bd);
    return foldr(lambda$25(mate, c, bd), Nil1, tmp)
  }
  static #comment(s) {
    let tmp;
    if (s instanceof Nil1.class) {
      return true
    }
    {
      let inlinedVal;
      tmp = take(2, s);
      inlinedVal = go1("--", 0);
      return listEq(tmp, inlinedVal);
    }
  }
  static #last(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof Cons1.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$1$ instanceof Nil1.class) {
          return arg$Cons$0$
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #intOfString(s) {
    let tmp;
    tmp = nofibListToString(s);
    return runtime.safeCall(globalThis.parseInt(tmp))
  }
  static #parseGoal(ls) {
    let ws, scrut, n, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof Cons1.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof Nil1.class) {
        let inlinedVal, arg$Cons$0$1;
        ws = mate.#words(arg$Cons$0$);
        if (ws instanceof Cons1.class) {
          arg$Cons$0$1 = ws.head;
          inlinedVal = go1("Black", 0);
          scrut = listEq(arg$Cons$0$1, inlinedVal);
          if (scrut === true) {
            tmp = mate.Black;
          } else {
            tmp = mate.White;
          }
          tmp1 = mate.#last(ws);
          n = mate.#intOfString(tmp1);
          return globalThis.Object.freeze([
            tmp,
            n
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw runtime.safeCall(globalThis.Error("parseGoal"))
  }
  static #parseSquare(r1, f1, c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4;
    scrut = c === "-";
    if (scrut === true) {
      return Nil1
    }
    scrut1 = mate.#isUpper(c);
    if (scrut1 === true) {
      tmp = mate.Black;
    } else {
      tmp = mate.White;
    }
    scrut2 = mate.#toLower(c);
    scrut3 = scrut2 === "k";
    if (scrut3 === true) {
      tmp1 = mate.King;
    } else {
      scrut4 = scrut2 === "q";
      if (scrut4 === true) {
        tmp1 = mate.Queen;
      } else {
        scrut5 = scrut2 === "r";
        if (scrut5 === true) {
          tmp1 = mate.Rook;
        } else {
          scrut6 = scrut2 === "b";
          if (scrut6 === true) {
            tmp1 = mate.Bishop;
          } else {
            scrut7 = scrut2 === "n";
            if (scrut7 === true) {
              tmp1 = mate.Knight;
            } else {
              scrut8 = scrut2 === "p";
              if (scrut8 === true) {
                tmp1 = mate.Pawn;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
          }
        }
      }
    }
    tmp2 = globalThis.Object.freeze([
      tmp,
      tmp1
    ]);
    tmp3 = globalThis.Object.freeze([
      f1,
      r1
    ]);
    tmp4 = globalThis.Object.freeze([
      tmp2,
      tmp3
    ]);
    return Cons1(tmp4, Nil1);
  }
  static #parseRank(r1, x) {
    let tmp, tmp1, tmp2;
    tmp = enumFromTo(1, 8);
    tmp1 = filter(lambda51, x);
    tmp2 = zipWith(lambda$28(mate, r1), tmp, tmp1);
    return concat(tmp2)
  }
  static #parseBoard(ls) {
    let tmp, tmp1, tmp2, addPiece$here, inlinedVal;
    tmp = enumFromTo(1, 8);
    inlinedVal = r(Nil1, tmp);
    tmp1 = zipWith(mate.#parseRank, inlinedVal, ls);
    tmp2 = concat(tmp1);
    addPiece$here = addPiece$(mate);
    return foldr(addPiece$here, mate.emptyBoard, tmp2)
  }
  static #parseProblem(s) {
    let bd, gl, tmp, element1$, element0$, inlinedVal, tmp1, tmp2;
    tmp = filter(lambda$29(mate), s);
    tmp1 = take(8, tmp);
    tmp2 = leave(8, tmp);
    inlinedVal = globalThis.Object.freeze([
      tmp1,
      tmp2
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      bd = mate.#parseBoard(element0$);
      gl = mate.#parseGoal(element1$);
      return globalThis.Object.freeze([
        bd,
        gl
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #readProblem(s) {
    let tmp;
    tmp = mate.#lines(s);
    return mate.#parseProblem(tmp)
  }
  static #foldr_lz(f1, a, x) {
    let arg$Cons$0$, arg$Cons$1$;
    if (x instanceof Cons1.class) {
      let inlinedVal;
      arg$Cons$0$ = x.head;
      arg$Cons$1$ = x.tail;
      inlinedVal = Lazy1(lambda$30(mate, f1, a, arg$Cons$1$));
      return runtime.safeCall(f1(arg$Cons$0$, inlinedVal))
    } else if (x instanceof Nil1.class) {
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #replies(bd, c, n) {
    let mds, scrut, scrut1, tmp, solnAnd$here;
    mds = mate.#moveDetailsFor(c, bd);
    scrut = n === 0;
    if (scrut === true) {
      if (mds instanceof Nil1.class) {
        return Some1(Nil1)
      }
      return None1;
    }
    scrut1 = n > 0;
    if (scrut1 === true) {
      tmp = Some1(Nil1);
      solnAnd$here = solnAnd$(mate, c, n);
      return mate.#foldr_lz(solnAnd$here, tmp, mds)
    }
    throw runtime.safeCall(globalThis.Error("n < 0"));
  }
  static #solution(bd, c, n) {
    let scrut, mds, solnOr$here;
    scrut = n > 0;
    if (scrut === true) {
      mds = mate.#moveDetailsFor(c, bd);
      solnOr$here = solnOr$(mate, c, n);
      return mate.#foldr_lz(solnOr$here, None1, mds)
    }
    throw runtime.safeCall(globalThis.Error("n <= 0"));
  }
  static #tab(n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return Nil1
    }
    tmp = n - 1;
    tmp1 = mate.#tab(tmp);
    return Cons1(" ", tmp1);
  }
  static #showReplies(rs, n) {
    return mate.#showReplies_showSoln(0, rs, n)
  }
  static #showSoln(s, n) {
    return mate.#showReplies_showSoln(1, s, n)
  }
  static #compact(s) {
    let arg$Solution$0$, arg$Solution$1$, tmp;
    if (s instanceof mate.Solution.class) {
      arg$Solution$0$ = s.a;
      arg$Solution$1$ = s.b;
      tmp = foldr(mate.#insertCompact, Nil1, arg$Solution$1$);
      return mate.Soln(arg$Solution$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #insertCompact(mif_s, ls) {
    let cs, element1$, element0$;
    if (runtime.Tuple.isArrayLike(mif_s) && mif_s.length === 2) {
      element0$ = runtime.Tuple.get(mif_s, 0);
      element1$ = runtime.Tuple.get(mif_s, 1);
      cs = mate.#compact(element1$);
      return ic(mate, element0$, cs, ls)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #showResult(s) {
    let arg$Some$0$, tmp;
    if (s instanceof None1.class) {
      return go1("No solution!", 0)
    } else if (s instanceof Some1.class) {
      arg$Some$0$ = s.x;
      tmp = mate.#compact(arg$Some$0$);
      return mate.#showSoln(tmp, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #solve(bd, c, n) {
    let tmp, tmp1, tmp2;
    tmp = 2 * n;
    tmp1 = tmp - 1;
    tmp2 = mate.#solution(bd, c, tmp1);
    return mate.#showResult(tmp2)
  }
  static #testMate_nofib(dummy) {
    let bdcn, tmp, tmp1, element1$, element0$, element1$1, element0$1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, s, inlinedVal;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/heathcote3.prob"));
    tmp1 = runtime.safeCall(tmp.toString());
    s = tmp1;
    inlinedVal = go1(s, 0);
    bdcn = mate.#readProblem(inlinedVal);
    if (runtime.Tuple.isArrayLike(bdcn) && bdcn.length === 2) {
      element0$ = runtime.Tuple.get(bdcn, 0);
      element1$ = runtime.Tuple.get(bdcn, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        let inlinedVal1, inlinedVal2, inlinedVal3, s1, inlinedVal4, inlinedVal5, inlinedVal6;
        element0$1 = runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        tmp2 = mate.#showBoard(element0$);
        inlinedVal1 = go1("\n", 0);
        tmp3 = mate.#showColour(element0$1);
        inlinedVal2 = go1(" to move and mate in ", 0);
        inlinedVal3 = element1$1 + "";
        s1 = inlinedVal3;
        inlinedVal4 = go1(s1, 0);
        inlinedVal5 = go1("\n", 0);
        inlinedVal6 = go1("\n", 0);
        tmp4 = mate.#solve(element0$, element0$1, element1$1);
        tmp5 = append(inlinedVal6, tmp4);
        tmp6 = append(inlinedVal5, tmp5);
        tmp7 = append(inlinedVal4, tmp6);
        tmp8 = append(inlinedVal2, tmp7);
        tmp9 = append(tmp3, tmp8);
        tmp10 = append(inlinedVal1, tmp9);
        return append(tmp2, tmp10)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp;
    tmp = mate.#testMate_nofib(0);
    return nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mate"];
});
export { r as _$_modulePrivate_$_r };
export { l as _$_modulePrivate_$_l };
export { go as _$_modulePrivate_$_go };
export { f as _$_modulePrivate_$_f };
export { lscomp as _$_modulePrivate_$_lscomp };
export { combine as _$_modulePrivate_$_combine };
export { go1 as _$_modulePrivate_$_go1 };
export { pieceAtWith as _$_modulePrivate_$_pieceAtWith };
export { consFile as _$_modulePrivate_$_consFile };
export { showRank as _$_modulePrivate_$_showRank };
export { emptyAtAllAnd as _$_modulePrivate_$_emptyAtAllAnd };
export { ml as _$_modulePrivate_$_ml };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { promote as _$_modulePrivate_$_promote };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { kthreat as _$_modulePrivate_$_kthreat };
export { givesCheck as _$_modulePrivate_$_givesCheck };
export { addPiece as _$_modulePrivate_$_addPiece };
export { solnAnd as _$_modulePrivate_$_solnAnd };
export { solnOr as _$_modulePrivate_$_solnOr };
export { insert as _$_modulePrivate_$_insert };
export { ic as _$_modulePrivate_$_ic };
export { enumFrom as _$_modulePrivate_$_enumFrom };
export { LzList1 as _$_modulePrivate_$_LzList };
export { leave_lz as _$_modulePrivate_$_leave_lz };
export { sum as _$_modulePrivate_$_sum };
export { nub_lz as _$_modulePrivate_$_nub_lz };
export { LzNil1 as _$_modulePrivate_$_LzNil };
export { intDiv as _$_modulePrivate_$_intDiv };
export { Nil1 as _$_modulePrivate_$_Nil };
export { ltList as _$_modulePrivate_$_ltList };
export { divMod as _$_modulePrivate_$_divMod };
export { scanl as _$_modulePrivate_$_scanl };
export { zip_lz_lz as _$_modulePrivate_$_zip_lz_lz };
export { nofibListToString as _$_modulePrivate_$_nofibListToString };
export { orList as _$_modulePrivate_$_orList };
export { lazy as _$_modulePrivate_$_lazy };
export { atIndex as _$_modulePrivate_$_atIndex };
export { _internal_cons_to_str as _$_modulePrivate_$__internal_cons_to_str };
export { force as _$_modulePrivate_$_force };
export { stringOfFloat as _$_modulePrivate_$_stringOfFloat };
export { unionBy as _$_modulePrivate_$_unionBy };
export { splitAt as _$_modulePrivate_$_splitAt };
export { nubBy_lz as _$_modulePrivate_$_nubBy_lz };
export { union as _$_modulePrivate_$_union };
export { zip as _$_modulePrivate_$_zip };
export { compose as _$_modulePrivate_$_compose };
export { fromSome as _$_modulePrivate_$_fromSome };
export { take_lz_lz as _$_modulePrivate_$_take_lz_lz };
export { stringConcat as _$_modulePrivate_$_stringConcat };
export { map as _$_modulePrivate_$_map };
export { all as _$_modulePrivate_$_all };
export { head as _$_modulePrivate_$_head };
export { zipWith_lz_lz as _$_modulePrivate_$_zipWith_lz_lz };
export { unzip as _$_modulePrivate_$_unzip };
export { null_ as _$_modulePrivate_$_null_ };
export { concat as _$_modulePrivate_$_concat };
export { break_ as _$_modulePrivate_$_break_ };
export { zip_lz_nl as _$_modulePrivate_$_zip_lz_nl };
export { min as _$_modulePrivate_$_min };
export { eqTup2 as _$_modulePrivate_$_eqTup2 };
export { filter_lz as _$_modulePrivate_$_filter_lz };
export { intQuot as _$_modulePrivate_$_intQuot };
export { zipWith as _$_modulePrivate_$_zipWith };
export { scanr as _$_modulePrivate_$_scanr };
export { replicate as _$_modulePrivate_$_replicate };
export { append_nl_lz as _$_modulePrivate_$_append_nl_lz };
export { tail as _$_modulePrivate_$_tail };
export { cos as _$_modulePrivate_$_cos };
export { int_of_char as _$_modulePrivate_$_int_of_char };
export { LzCons1 as _$_modulePrivate_$_LzCons };
export { map_lz as _$_modulePrivate_$_map_lz };
export { until as _$_modulePrivate_$_until };
export { ltTup2 as _$_modulePrivate_$_ltTup2 };
export { Cons1 as _$_modulePrivate_$_Cons };
export { Lazy1 as _$_modulePrivate_$_Lazy };
export { zipWith_lz_nl as _$_modulePrivate_$_zipWith_lz_nl };
export { snd as _$_modulePrivate_$_snd };
export { reverse as _$_modulePrivate_$_reverse };
export { filter as _$_modulePrivate_$_filter };
export { append_lz_lz as _$_modulePrivate_$_append_lz_lz };
export { quotRem as _$_modulePrivate_$_quotRem };
export { maximum as _$_modulePrivate_$_maximum };
export { take_lz as _$_modulePrivate_$_take_lz };
export { replicate_lz as _$_modulePrivate_$_replicate_lz };
export { zip3 as _$_modulePrivate_$_zip3 };
export { leaveWhile as _$_modulePrivate_$_leaveWhile };
export { enumFromTo as _$_modulePrivate_$_enumFromTo };
export { max as _$_modulePrivate_$_max };
export { foldl as _$_modulePrivate_$_foldl };
export { enumFromThenTo as _$_modulePrivate_$_enumFromThenTo };
export { sqrt as _$_modulePrivate_$_sqrt };
export { flatMap as _$_modulePrivate_$_flatMap };
export { intRem as _$_modulePrivate_$_intRem };
export { take as _$_modulePrivate_$_take };
export { listEqBy as _$_modulePrivate_$_listEqBy };
export { flip as _$_modulePrivate_$_flip };
export { Some1 as _$_modulePrivate_$_Some };
export { inList as _$_modulePrivate_$_inList };
export { nofibStringToList as _$_modulePrivate_$_nofibStringToList };
export { Option1 as _$_modulePrivate_$_Option };
export { intMod as _$_modulePrivate_$_intMod };
export { None1 as _$_modulePrivate_$_None };
export { head_lz as _$_modulePrivate_$_head_lz };
export { notElem as _$_modulePrivate_$_notElem };
export { round as _$_modulePrivate_$_round };
export { iterate as _$_modulePrivate_$_iterate };
export { transpose as _$_modulePrivate_$_transpose };
export { while_ as _$_modulePrivate_$_while_ };
export { repeat as _$_modulePrivate_$_repeat };
export { power as _$_modulePrivate_$_power };
export { foldr as _$_modulePrivate_$_foldr };
export { List1 as _$_modulePrivate_$_List };
export { stringOfInt as _$_modulePrivate_$_stringOfInt };
export { tan as _$_modulePrivate_$_tan };
export { listNeq as _$_modulePrivate_$_listNeq };
export { abs as _$_modulePrivate_$_abs };
export { listEq as _$_modulePrivate_$_listEq };
export { foldr1 as _$_modulePrivate_$_foldr1 };
export { fst as _$_modulePrivate_$_fst };
export { mate1 as _$_modulePrivate_$_mate };
export { splitAt_lz as _$_modulePrivate_$_splitAt_lz };
export { nubBy as _$_modulePrivate_$_nubBy };
export { sin as _$_modulePrivate_$_sin };
export { stringListConcat as _$_modulePrivate_$_stringListConcat };
export { listLen as _$_modulePrivate_$_listLen };
export { foldl1 as _$_modulePrivate_$_foldl1 };
export { list as _$_modulePrivate_$_list };
export { leave as _$_modulePrivate_$_leave };
export { deleteBy as _$_modulePrivate_$_deleteBy };
export { append as _$_modulePrivate_$_append };
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
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda24 as _$_modulePrivate_$_lambda24 };
export { lambda25 as _$_modulePrivate_$_lambda25 };
export { lambda26 as _$_modulePrivate_$_lambda26 };
export { lambda27 as _$_modulePrivate_$_lambda27 };
export { lambda28 as _$_modulePrivate_$_lambda28 };
export { lambda29 as _$_modulePrivate_$_lambda29 };
export { lambda30 as _$_modulePrivate_$_lambda30 };
export { lambda31 as _$_modulePrivate_$_lambda31 };
export { lambda32 as _$_modulePrivate_$_lambda32 };
export { lambda33 as _$_modulePrivate_$_lambda33 };
export { lambda34 as _$_modulePrivate_$_lambda34 };
export { lambda35 as _$_modulePrivate_$_lambda35 };
export { lambda36 as _$_modulePrivate_$_lambda36 };
export { lambda37 as _$_modulePrivate_$_lambda37 };
export { lambda38 as _$_modulePrivate_$_lambda38 };
export { lambda39 as _$_modulePrivate_$_lambda39 };
export { lambda40 as _$_modulePrivate_$_lambda40 };
export { lambda41 as _$_modulePrivate_$_lambda41 };
export { lambda42 as _$_modulePrivate_$_lambda42 };
export { lambda43 as _$_modulePrivate_$_lambda43 };
export { lambda44 as _$_modulePrivate_$_lambda44 };
export { lambda45 as _$_modulePrivate_$_lambda45 };
export { lambda46 as _$_modulePrivate_$_lambda46 };
export { lambda47 as _$_modulePrivate_$_lambda47 };
export { lambda48 as _$_modulePrivate_$_lambda48 };
export { lambda49 as _$_modulePrivate_$_lambda49 };
export { lambda50 as _$_modulePrivate_$_lambda50 };
export { lambda51 as _$_modulePrivate_$_lambda51 };
export { lambda52 as _$_modulePrivate_$_lambda52 };
export { lambda53 as _$_modulePrivate_$_lambda53 };
export { lambda54 as _$_modulePrivate_$_lambda54 };
export { lambda55 as _$_modulePrivate_$_lambda55 };
export { lambda56 as _$_modulePrivate_$_lambda56 };
export { lambda57 as _$_modulePrivate_$_lambda57 };
export { lambda58 as _$_modulePrivate_$_lambda58 };
export { lambda59 as _$_modulePrivate_$_lambda59 };
export { lambda60 as _$_modulePrivate_$_lambda60 };
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
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { lambda$13 as _$_modulePrivate_$_lambda$13 };
export { lambda$14 as _$_modulePrivate_$_lambda$14 };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { showRank$ as _$_modulePrivate_$_showRank$ };
export { consFile$ as _$_modulePrivate_$_consFile$ };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export { lambda$19 as _$_modulePrivate_$_lambda$19 };
export { givesCheck$ as _$_modulePrivate_$_givesCheck$ };
export { lambda$20 as _$_modulePrivate_$_lambda$20 };
export { lambda$21 as _$_modulePrivate_$_lambda$21 };
export { lambda$22 as _$_modulePrivate_$_lambda$22 };
export { lambda$23 as _$_modulePrivate_$_lambda$23 };
export { lambda$24 as _$_modulePrivate_$_lambda$24 };
export { lambda$25 as _$_modulePrivate_$_lambda$25 };
export { lambda$26 as _$_modulePrivate_$_lambda$26 };
export { lambda$27 as _$_modulePrivate_$_lambda$27 };
export { lambda$28 as _$_modulePrivate_$_lambda$28 };
export { addPiece$ as _$_modulePrivate_$_addPiece$ };
export { lambda$29 as _$_modulePrivate_$_lambda$29 };
export { lambda$30 as _$_modulePrivate_$_lambda$30 };
export { solnAnd$ as _$_modulePrivate_$_solnAnd$ };
export { solnOr$ as _$_modulePrivate_$_solnOr$ };
export { transpose_combine as _$_modulePrivate_$_transpose_combine };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default mate1;
