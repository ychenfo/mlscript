const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const append$accessorSymbol = globalThis.Symbol("append");
const concat$accessorSymbol = globalThis.Symbol("concat");
const filter$accessorSymbol = globalThis.Symbol("filter");
const foldl$accessorSymbol = globalThis.Symbol("foldl");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const sum$accessorSymbol = globalThis.Symbol("sum");
const lookup$accessorSymbol = globalThis.Symbol("lookup");
const delete_$accessorSymbol = globalThis.Symbol("delete_");
let lscomp, cryptarithm21, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, look, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, look$, lambda$14, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve$lambda$, main_testCryptarithm2_nofib_puzzle_solve$lambda, main_testCryptarithm2_nofib_puzzle_solve$solve, main_testCryptarithm2_nofib_puzzle_solve$lambda$1, main_testCryptarithm2_nofib_puzzle_solve$lambda1, main_testCryptarithm2_nofib_puzzle_solve$lambda$2, main_testCryptarithm2_nofib_puzzle_solve$lambda2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select$select, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_execStateT_concat$concat, main_testCryptarithm2_nofib_puzzle_nubBy$nubBy, main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda;
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run());
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let tmp, lambda$here, inlinedVal, f, lambda$here1, lambda$here2, arg$Digits$0$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$0$ = st.i;
    lambda$here = lambda$9(cryptarithm22, arg$Digits$0$);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, arg$Digits$0$);
    lambda$here2 = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$2(cryptarithm22, tmp);
    inlinedVal = cryptarithm22.StateT(lambda$here2);
    f = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(cryptarithm22, c, st);
    lambda$here1 = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, inlinedVal, f);
    return cryptarithm22.StateT(lambda$here1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let scrut, arg$Some$0$, arg$Digits$1$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$1$ = st.c;
    scrut = cryptarithm22[lookup$accessorSymbol](c, arg$Digits$1$);
    if (scrut instanceof NofibPrelude.Some.class) {
      let lambda$here;
      arg$Some$0$ = scrut.x;
      lambda$here = lambda$4(arg$Some$0$);
      return cryptarithm22.StateT(lambda$here)
    } else if (scrut instanceof NofibPrelude.None.class) {
      let m, f, lambda$here;
      m = cryptarithm22.get;
      f = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$(cryptarithm22, c);
      lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$1(cryptarithm22, m, f);
      return cryptarithm22.StateT(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$solve = function main_testCryptarithm2_nofib_puzzle_solve$solve(tops, bots, carry) {
  let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp;
  if (bots instanceof NofibPrelude.Cons.class) {
    let f, lambda$here;
    arg$Cons$0$ = bots.head;
    arg$Cons$1$ = bots.tail;
    if (tops instanceof NofibPrelude.Nil.class) {
      let inlinedVal, lambda$here1;
      lambda$here1 = lambda$4(carry);
      inlinedVal = cryptarithm21.StateT(lambda$here1);
      tmp = inlinedVal;
    } else if (tops instanceof NofibPrelude.Cons.class) {
      let inlinedVal, f1, inlinedVal1, lambda$here1, lambda$here2, a, inlinedVal2, lambda$here3;
      arg$Cons$0$1 = tops.head;
      a = NofibPrelude.Nil;
      lambda$here3 = lambda$4(a);
      inlinedVal2 = cryptarithm21.StateT(lambda$here3);
      lambda$here2 = lambda$5(cryptarithm21, main_testCryptarithm2_nofib_puzzle_solve_select$select);
      inlinedVal = cryptarithm21[foldr$accessorSymbol](lambda$here2, inlinedVal2, arg$Cons$0$1);
      f1 = lambda$10(cryptarithm21, carry);
      lambda$here1 = lambda$2(cryptarithm21, inlinedVal, f1);
      inlinedVal1 = cryptarithm21.StateT(lambda$here1);
      tmp = inlinedVal1;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    f = main_testCryptarithm2_nofib_puzzle_solve$lambda$1(cryptarithm21, tops, arg$Cons$0$, arg$Cons$1$);
    lambda$here = lambda$2(cryptarithm21, tmp, f);
    return cryptarithm21.StateT(lambda$here)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        let lambda$here;
        lambda$here = main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$();
        return cryptarithm21.StateT(lambda$here)
      }
      return cryptarithm21.StateT(lambda9);
    }
    return cryptarithm21.StateT(lambda9);
  }
  return cryptarithm21.StateT(lambda9);
};
main_testCryptarithm2_nofib_puzzle_solve$lambda = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN) {
  let inlinedVal, inlinedVal1, tmp, arg$Cons$1$;
  if (tops instanceof NofibPrelude.Nil.class) {
    inlinedVal = NofibPrelude.Nil;
  } else if (tops instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = tops.tail;
    inlinedVal = arg$Cons$1$;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  tmp = topN / 10;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp));
  return main_testCryptarithm2_nofib_puzzle_solve$solve(inlinedVal, botss, inlinedVal1)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN, botN) {
  let tmp, inlinedVal, inlinedVal1, f, lambda$here, lambda$here1, tmp1, inlinedVal2, tmp2;
  tmp2 = topN / 10;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = 10 * inlinedVal2;
  inlinedVal = topN - tmp1;
  tmp = inlinedVal === botN;
  if (tmp === true) {
    lambda$here1 = lambda$8(cryptarithm22);
    inlinedVal1 = cryptarithm22.StateT(lambda$here1);
  } else {
    inlinedVal1 = cryptarithm22.StateT(lambda6);
  }
  f = main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN);
  lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$1(cryptarithm22, inlinedVal1, f);
  return cryptarithm22.StateT(lambda$here)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, bot, botss, topN) {
  let f, lambda$here, m, f1, inlinedVal, lambda$here1;
  m = cryptarithm22.get;
  f1 = main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$(cryptarithm22, bot);
  lambda$here1 = lambda$2(cryptarithm22, m, f1);
  inlinedVal = cryptarithm22.StateT(lambda$here1);
  f = main_testCryptarithm2_nofib_puzzle_solve$lambda$2(cryptarithm22, tops, botss, topN);
  lambda$here = lambda$2(cryptarithm22, inlinedVal, f);
  return cryptarithm22.StateT(lambda$here)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, bot, botss) {
  return (topN) => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda1(cryptarithm22, tops, bot, botss, topN)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN) {
  return (botN) => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda2(cryptarithm22, tops, botss, topN, botN)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run());
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st, iis) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(iis) && iis.length === 2) {
    let inlinedVal, f, lambda$here, lambda$here1, arg$Digits$1$;
    element0$ = runtime.Tuple.get(iis, 0);
    element1$ = runtime.Tuple.get(iis, 1);
    tmp = globalThis.Object.freeze([
      c,
      element0$
    ]);
    if (st instanceof cryptarithm22.Digits.class) {
      arg$Digits$1$ = st.c;
      tmp1 = NofibPrelude.Cons(tmp, arg$Digits$1$);
      tmp2 = cryptarithm22.Digits(element1$, tmp1);
      lambda$here1 = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2(cryptarithm22, tmp2);
      inlinedVal = cryptarithm22.StateT(lambda$here1);
      f = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(cryptarithm22, element0$);
      lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, inlinedVal, f);
      return cryptarithm22.StateT(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, c, st) {
  return (iis) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, c, st, iis)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, i) {
  return () => {
    let lambda$here;
    lambda$here = lambda$4(i);
    return cryptarithm22.StateT(lambda$here)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, s) {
  return () => {
    let tmp;
    tmp = globalThis.Object.freeze([
      cryptarithm22.Unit,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$() {
  return (x) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      x,
      undefined
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, ls) {
  let tmp, lambda$here;
  lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3();
  tmp = cryptarithm22[map$accessorSymbol](lambda$here, ls);
  return cryptarithm22[concat$accessorSymbol](tmp)
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, ls) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2(cryptarithm22, ls)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$() {
  return (s) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      undefined,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$() {
  return (x) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      x,
      undefined
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, ls) {
  let tmp, lambda$here;
  lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$();
  tmp = cryptarithm22[map$accessorSymbol](lambda$here, ls);
  return cryptarithm22[concat$accessorSymbol](tmp)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, ls) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, ls)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let tmp, lambda$here, inlinedVal, f, lambda$here1, lambda$here2, arg$Digits$0$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$0$ = st.i;
    lambda$here = lambda$9(cryptarithm22, arg$Digits$0$);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, arg$Digits$0$);
    lambda$here2 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, tmp);
    inlinedVal = cryptarithm22.StateT(lambda$here2);
    f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(cryptarithm22, c, st);
    lambda$here1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$2(cryptarithm22, inlinedVal, f);
    return cryptarithm22.StateT(lambda$here1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let scrut, arg$Some$0$, arg$Digits$1$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$1$ = st.c;
    scrut = cryptarithm22[lookup$accessorSymbol](c, arg$Digits$1$);
    if (scrut instanceof NofibPrelude.Some.class) {
      let lambda$here;
      arg$Some$0$ = scrut.x;
      lambda$here = lambda$4(arg$Some$0$);
      return cryptarithm22.StateT(lambda$here)
    } else if (scrut instanceof NofibPrelude.None.class) {
      let m, f, lambda$here;
      m = cryptarithm22.get;
      f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$(cryptarithm22, c);
      lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$1(cryptarithm22, m, f);
      return cryptarithm22.StateT(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select$select = function main_testCryptarithm2_nofib_puzzle_solve_select$select(c) {
  let m, f, lambda$here;
  m = cryptarithm21.get;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$(cryptarithm21, c);
  lambda$here = lambda$2(cryptarithm21, m, f);
  return cryptarithm21.StateT(lambda$here)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run());
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, c, st, iis) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(iis) && iis.length === 2) {
    let inlinedVal, f, lambda$here, lambda$here1, arg$Digits$1$;
    element0$ = runtime.Tuple.get(iis, 0);
    element1$ = runtime.Tuple.get(iis, 1);
    tmp = globalThis.Object.freeze([
      c,
      element0$
    ]);
    if (st instanceof cryptarithm22.Digits.class) {
      arg$Digits$1$ = st.c;
      tmp1 = NofibPrelude.Cons(tmp, arg$Digits$1$);
      tmp2 = cryptarithm22.Digits(element1$, tmp1);
      lambda$here1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2(cryptarithm22, tmp2);
      inlinedVal = cryptarithm22.StateT(lambda$here1);
      f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3(cryptarithm22, element0$);
      lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(cryptarithm22, inlinedVal, f);
      return cryptarithm22.StateT(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, c, st) {
  return (iis) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, c, st, iis)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, s) {
  return () => {
    let tmp;
    tmp = globalThis.Object.freeze([
      cryptarithm22.Unit,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, i) {
  return () => {
    let lambda$here;
    lambda$here = lambda$4(i);
    return cryptarithm22.StateT(lambda$here)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run());
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return () => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2(cryptarithm22, m, f)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f());
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run(element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    tmp = runtime.safeCall(f(element0$));
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda_lambda$$lambda$3(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f());
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run(element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    tmp = runtime.safeCall(f(element0$));
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$4 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda3(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda_lambda$$lambda$3(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f());
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run(element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$_lambda$lambda2(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_lambda$$lambda$2(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_concat$concat = function main_testCryptarithm2_nofib_puzzle_execStateT_concat$concat(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    let arg$Cons$0$1;
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = main_testCryptarithm2_nofib_puzzle_execStateT_concat$concat(arg$Cons$1$);
    if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
      return tmp
    } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$1 = arg$Cons$0$.head;
      return NofibPrelude.Cons(arg$Cons$0$1, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_nubBy$nubBy = function main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(eq, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, lambda$here;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    lambda$here = lambda$(eq, arg$Cons$0$);
    tmp = cryptarithm21[filter$accessorSymbol](lambda$here, arg$Cons$1$);
    tmp1 = main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(eq, tmp);
    return NofibPrelude.Cons(undefined, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda(caseScrut) {
  let element1$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element1$ = runtime.Tuple.get(caseScrut, 1);
    return NofibPrelude.Cons(element1$, NofibPrelude.Nil)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
look$ = function look$(cryptarithm22, env) {
  return (c) => {
    return look(cryptarithm22, env, c)
  }
};
lambda$14 = (undefined, function (look1) {
  return (a, b) => {
    return lambda10(look1, a, b)
  }
});
lambda10 = (undefined, function (look1, a, b) {
  let tmp, tmp1;
  tmp = a * 10;
  tmp1 = runtime.safeCall(look1(b));
  return tmp + tmp1
});
lambda$13 = (undefined, function (cryptarithm22, look1) {
  return (ls) => {
    let lambda$here;
    lambda$here = lambda$14(look1);
    return cryptarithm22[foldl$accessorSymbol](lambda$here, 0, ls)
  }
});
lambda$12 = (undefined, function (expand) {
  return (xs) => {
    return runtime.safeCall(expand(xs))
  }
});
lambda$11 = (undefined, function (cryptarithm22) {
  return (caseScrut) => {
    return lambda12(cryptarithm22, caseScrut)
  }
});
look = function look(cryptarithm22, env, c) {
  let tmp;
  tmp = cryptarithm22[lookup$accessorSymbol](c, env);
  if (tmp instanceof NofibPrelude.Some.class) {
    return tmp.x
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda11 = (undefined, function (x, y) {
  return x === y
});
lambda12 = (undefined, function (cryptarithm22, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = NofibPrelude.nofibStringToList(" => ");
    inlinedVal = element1$ + "";
    tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
    tmp2 = cryptarithm22[append$accessorSymbol](tmp, tmp1);
    return NofibPrelude.Cons(element0$, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$10 = (undefined, function (cryptarithm22, carry) {
  return (topNS) => {
    return lambda8(cryptarithm22, carry, topNS)
  }
});
lambda8 = (undefined, function (cryptarithm22, carry, topNS) {
  let tmp, tmp1, lambda$here;
  tmp = cryptarithm22[sum$accessorSymbol](topNS);
  tmp1 = tmp + carry;
  lambda$here = lambda$4(tmp1);
  return cryptarithm22.StateT(lambda$here)
});
lambda9 = (undefined, function (_p) {
  return NofibPrelude.Nil
});
lambda$9 = (undefined, function (cryptarithm22, xs) {
  return (x) => {
    return lambda7(cryptarithm22, xs, x)
  }
});
lambda7 = (undefined, function (cryptarithm22, xs, x) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
  inlinedVal = cryptarithm22[foldl$accessorSymbol](cryptarithm22[delete_$accessorSymbol], xs, tmp);
  return globalThis.Object.freeze([
    x,
    inlinedVal
  ])
});
lambda$8 = (undefined, function (cryptarithm22) {
  return (s) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      cryptarithm22.Unit,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda6 = (undefined, function (s) {
  return NofibPrelude.Nil
});
lambda$7 = (undefined, function (cryptarithm22, x) {
  return (xs) => {
    return lambda3(cryptarithm22, x, xs)
  }
});
lambda3 = (undefined, function (cryptarithm22, x, xs) {
  let tmp, lambda$here;
  tmp = NofibPrelude.Cons(x, xs);
  lambda$here = lambda$4(tmp);
  return cryptarithm22.StateT(lambda$here)
});
lambda$6 = (undefined, function (cryptarithm22, r) {
  return (x) => {
    return lambda4(cryptarithm22, r, x)
  }
});
lambda4 = (undefined, function (cryptarithm22, r, x) {
  let f, lambda$here;
  f = lambda$7(cryptarithm22, x);
  lambda$here = lambda$2(cryptarithm22, r, f);
  return cryptarithm22.StateT(lambda$here)
});
lambda$5 = (undefined, function (cryptarithm22, f) {
  return (a, r) => {
    return lambda5(cryptarithm22, f, a, r)
  }
});
lambda5 = (undefined, function (cryptarithm22, f, a, r) {
  let tmp, f1, lambda$here;
  tmp = runtime.safeCall(f(a));
  f1 = lambda$6(cryptarithm22, r);
  lambda$here = lambda$2(cryptarithm22, tmp, f1);
  return cryptarithm22.StateT(lambda$here)
});
lambda$4 = (undefined, function (a) {
  return (s) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      a,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda$3 = (undefined, function (cryptarithm22, f) {
  return (caseScrut) => {
    return lambda1(cryptarithm22, f, caseScrut)
  }
});
lambda1 = (undefined, function (cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    if (tmp instanceof cryptarithm22.StateT.class) {
      return runtime.safeCall(tmp.run(element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (cryptarithm22, m, f) {
  return (s) => {
    return lambda2(cryptarithm22, m, f, s)
  }
});
lambda2 = (undefined, function (cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = lambda$3(cryptarithm22, f);
    tmp = cryptarithm22[map$accessorSymbol](lambda$here, inlinedVal);
    return cryptarithm22[concat$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda = (undefined, function (x, y) {
  return x === y
});
lambda$1 = (undefined, function (cryptarithm22) {
  return (x) => {
    let tmp;
    tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return cryptarithm22[append$accessorSymbol](x, tmp)
  }
});
lscomp = function lscomp(ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$1,
          arg$Cons$1$1
        ]);
        tmp1 = lscomp(arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$ = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda13 = (undefined, function (s) {
  let tmp;
  tmp = globalThis.Object.freeze([
    s,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
(class cryptarithm2 {
  static {
    cryptarithm21 = this
  }
  static get [map$accessorSymbol]() { return cryptarithm2.#map; }
  static get [append$accessorSymbol]() { return cryptarithm2.#append; }
  static get [concat$accessorSymbol]() { return cryptarithm2.#concat; }
  static get [filter$accessorSymbol]() { return cryptarithm2.#filter; }
  static get [foldl$accessorSymbol]() { return cryptarithm2.#foldl; }
  static get [foldr$accessorSymbol]() { return cryptarithm2.#foldr; }
  static get [sum$accessorSymbol]() { return cryptarithm2.#sum; }
  static get [lookup$accessorSymbol]() { return cryptarithm2.#lookup; }
  static get [delete_$accessorSymbol]() { return cryptarithm2.#delete_; }
  static {
    let tmp;
    (class Unit {
      static {
        new this
      }
      constructor() {
        cryptarithm2.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"];
    });
    cryptarithm2.StateT = function StateT(run) {
      return globalThis.Object.freeze(new StateT.class(run));
    };
    (class StateT {
      static {
        cryptarithm2.StateT.class = this
      }
      constructor(run) {
        this.run = run;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "StateT", ["run"]];
    });
    tmp = cryptarithm2.StateT(lambda13);
    cryptarithm2.get = tmp;
    cryptarithm2.Digits = function Digits(i, c) {
      return globalThis.Object.freeze(new Digits.class(i, c));
    };
    (class Digits {
      static {
        cryptarithm2.Digits.class = this
      }
      constructor(i, c) {
        this.i = i;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Digits", ["i", "c"]];
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
      tmp1 = cryptarithm2.#map(f, arg$Cons$1$);
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
      tmp1 = cryptarithm2.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = cryptarithm2.#append(arg$Cons$1$, ys);
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
      tmp = cryptarithm2.#concat(arg$Cons$1$);
      return cryptarithm2.#append(arg$Cons$0$, tmp)
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
          tmp = cryptarithm2.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
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
  static #foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = cryptarithm2.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
      tmp = cryptarithm2.#deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sum(xs) {
    let xs1, a, inlinedVal;
    xs1 = xs;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (xs1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (xs1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs1.head;
          arg$Cons$1$ = xs1.tail;
          tmp = a + arg$Cons$0$;
          xs1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #unzip(l) {
    let cryptarithm22, l1, a, b, inlinedVal;
    cryptarithm22 = cryptarithm2;
    l1 = l;
    a = NofibPrelude.Nil;
    b = NofibPrelude.Nil;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
        if (l1 instanceof NofibPrelude.Nil.class) {
          tmp = cryptarithm22.#reverse(a);
          tmp1 = cryptarithm22.#reverse(b);
          inlinedVal = globalThis.Object.freeze([
            tmp,
            tmp1
          ]);
          break inlinedLbl
        } else if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            tmp2 = NofibPrelude.Cons(element0$, a);
            tmp3 = NofibPrelude.Cons(element1$, b);
            l1 = arg$Cons$1$;
            a = tmp2;
            b = tmp3;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #transpose(xss) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, tmp;
      if (xss instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
          xss = arg$Cons$1$;
          continue loopLabel
        } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$0$.head;
          arg$Cons$1$1 = arg$Cons$0$.tail;
          tmp = lscomp(arg$Cons$1$);
          scrut = cryptarithm2.#unzip(tmp);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            let tmp1, tmp2, tmp3;
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp1 = NofibPrelude.Cons(arg$Cons$0$1, element0$);
            tmp2 = NofibPrelude.Cons(arg$Cons$1$1, element1$);
            tmp3 = cryptarithm2.#transpose(tmp2);
            return NofibPrelude.Cons(tmp1, tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #lookup(k, t) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = k === element0$;
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          t = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #delete_(xs, e) {
    return cryptarithm2.#deleteBy(lambda, e, xs)
  }
  static main() {
    let args, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, solution, look1, expand, topVal, scrut, scrut1, tmp14, tmp15, tmp16, arg$Cons$0$, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, inlinedVal, tmp25, inlinedVal1;
    tmp = NofibPrelude.nofibStringToList("THIRTY");
    tmp1 = NofibPrelude.nofibStringToList("TWELVE");
    tmp2 = NofibPrelude.nofibStringToList("TWELVE");
    tmp3 = NofibPrelude.nofibStringToList("TWELVE");
    tmp4 = NofibPrelude.nofibStringToList("TWELVE");
    tmp5 = NofibPrelude.nofibStringToList("TWELVE");
    if (false === true) {
      tmp6 = NofibPrelude.nofibStringToList("1");
    } else {
      tmp6 = NofibPrelude.Nil;
    }
    tmp7 = cryptarithm21.#append(tmp5, tmp6);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = NofibPrelude.Cons(tmp4, tmp8);
    tmp10 = NofibPrelude.Cons(tmp3, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    tmp12 = NofibPrelude.Cons(tmp1, tmp11);
    args = NofibPrelude.Cons(tmp, tmp12);
    tmp13 = NofibPrelude.nofibStringToList("NINETY");
    tmp14 = cryptarithm21.#map(cryptarithm21.#reverse, args);
    tmp15 = cryptarithm21.#transpose(tmp14);
    tmp16 = cryptarithm21.#reverse(tmp13);
    solution = main_testCryptarithm2_nofib_puzzle_solve$solve(tmp15, tmp16, 0);
    tmp17 = cryptarithm21.#enumFromTo(0, 9);
    tmp18 = cryptarithm21.Digits(tmp17, NofibPrelude.Nil);
    if (solution instanceof cryptarithm21.StateT.class) {
      inlinedVal1 = runtime.safeCall(solution.run(tmp18));
      tmp25 = cryptarithm21.#map(main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda, inlinedVal1);
      inlinedVal = main_testCryptarithm2_nofib_puzzle_execStateT_concat$concat(tmp25);
      if (inlinedVal instanceof NofibPrelude.Cons.class) {
        let lambda$here, lambda$here1, look2, inlinedVal2, lambda$here2, inlinedVal3;
        arg$Cons$0$ = inlinedVal.head;
        if (arg$Cons$0$ instanceof cryptarithm21.Digits.class) {
          inlinedVal3 = arg$Cons$0$.c;
          look1 = look$(cryptarithm21, inlinedVal3);
          expand = lambda$13(cryptarithm21, look1);
          lambda$here = lambda$12(expand);
          tmp19 = cryptarithm21.#map(lambda$here, args);
          topVal = cryptarithm21.#sum(tmp19);
          look2 = look$(cryptarithm21, inlinedVal3);
          lambda$here2 = lambda$14(look2);
          inlinedVal2 = cryptarithm21.#foldl(lambda$here2, 0, tmp13);
          tmp20 = cryptarithm21.#concat(args);
          tmp21 = cryptarithm21.#append(tmp20, tmp13);
          tmp22 = main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(lambda11, tmp21);
          tmp23 = cryptarithm21.#listLen(tmp22);
          scrut = tmp23 <= 10;
          if (scrut === true) {
            scrut1 = topVal == inlinedVal2;
            if (scrut1 === true) {
              let inlinedVal4, tmp26, lambda$here3;
              lambda$here1 = lambda$11(cryptarithm21);
              tmp24 = cryptarithm21.#map(lambda$here1, inlinedVal3);
              lambda$here3 = lambda$1(cryptarithm21);
              tmp26 = cryptarithm21.#map(lambda$here3, tmp24);
              inlinedVal4 = cryptarithm21.#concat(tmp26);
              return runtime.safeCall(inlinedVal4.toString())
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
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm2"];
});
export default cryptarithm21;
