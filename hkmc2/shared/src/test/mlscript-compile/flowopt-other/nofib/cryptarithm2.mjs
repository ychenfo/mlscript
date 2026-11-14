const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go1 } from "./NofibPrelude.mjs";
const lookup$accessorSymbol = globalThis.Symbol("lookup");
const delete_$accessorSymbol = globalThis.Symbol("delete_");
const solve$accessorSymbol = globalThis.Symbol("solve");
let cryptarithm21, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, look, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, look$, lambda$21;
look$ = function look$(cryptarithm22, env) {
  return (c) => {
    return look(cryptarithm22, env, c)
  }
};
lambda$21 = (undefined, function (look1) {
  return (a, b) => {
    return lambda24(look1, a, b)
  }
});
lambda24 = (undefined, function (look1, a, b) {
  let tmp, tmp1;
  tmp = a * 10;
  tmp1 = runtime.safeCall(look1(b));
  return tmp + tmp1
});
lambda$20 = (undefined, function (look1) {
  return (ls) => {
    return NofibPrelude.foldl(lambda$21(look1), 0, ls)
  }
});
lambda$19 = (undefined, function (expand) {
  return (xs) => {
    return runtime.safeCall(expand(xs))
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
lambda25 = (undefined, function (look1, ls) {
  return NofibPrelude.foldl(lambda$21(look1), 0, ls)
});
lambda26 = (undefined, function (expand, xs) {
  return runtime.safeCall(expand(xs))
});
lambda27 = (undefined, function (x, y) {
  return x === y
});
lambda28 = (undefined, function (caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal, inlinedVal1, s, inlinedVal2;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    inlinedVal = go1(NofibPrelude, " => ", 0);
    inlinedVal1 = element1$ + "";
    s = inlinedVal1;
    inlinedVal2 = go1(NofibPrelude, s, 0);
    tmp = NofibPrelude.append(inlinedVal, inlinedVal2);
    return NofibPrelude.Cons(element0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$16 = (undefined, function (cryptarithm22, carry) {
  return (topNS) => {
    return lambda19(cryptarithm22, carry, topNS)
  }
});
lambda$18 = (undefined, function (cryptarithm22, tops, botss, topN) {
  return (_s) => {
    return lambda20(cryptarithm22, tops, botss, topN, _s)
  }
});
lambda20 = (undefined, function (cryptarithm22, tops, botss, topN, _s) {
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
  return cryptarithm22[solve$accessorSymbol](inlinedVal, botss, inlinedVal1)
});
lambda$17 = (undefined, function (cryptarithm22, tops, botss, topN) {
  return (botN) => {
    return lambda21(cryptarithm22, tops, botss, topN, botN)
  }
});
lambda21 = (undefined, function (cryptarithm22, tops, botss, topN, botN) {
  let tmp, inlinedVal, inlinedVal1, f, tmp1, inlinedVal2, tmp2;
  tmp2 = topN / 10;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = 10 * inlinedVal2;
  inlinedVal = topN - tmp1;
  tmp = inlinedVal === botN;
  if (tmp === true) {
    inlinedVal1 = cryptarithm22.StateT(lambda$8(cryptarithm22));
  } else {
    inlinedVal1 = cryptarithm22.StateT(lambda12);
  }
  f = lambda$18(cryptarithm22, tops, botss, topN);
  return cryptarithm22.StateT(lambda$(cryptarithm22, inlinedVal1, f))
});
lambda$15 = (undefined, function (cryptarithm22, tops, bot, botss) {
  return (topN) => {
    return lambda22(cryptarithm22, tops, bot, botss, topN)
  }
});
lambda19 = (undefined, function (cryptarithm22, carry, topNS) {
  let tmp, inlinedVal;
  inlinedVal = go(NofibPrelude, topNS, 0);
  tmp = inlinedVal + carry;
  return cryptarithm22.StateT(lambda$2(tmp))
});
lambda22 = (undefined, function (cryptarithm22, tops, bot, botss, topN) {
  let f, m, f1, inlinedVal;
  m = cryptarithm22.get;
  f1 = lambda$14(cryptarithm22, bot);
  inlinedVal = cryptarithm22.StateT(lambda$(cryptarithm22, m, f1));
  f = lambda$17(cryptarithm22, tops, botss, topN);
  return cryptarithm22.StateT(lambda$(cryptarithm22, inlinedVal, f))
});
lambda23 = (undefined, function (_p) {
  return NofibPrelude.Nil
});
lambda$14 = (undefined, function (cryptarithm22, c) {
  return (st) => {
    return lambda18(cryptarithm22, c, st)
  }
});
lambda18 = (undefined, function (cryptarithm22, c, st) {
  let scrut, arg$Some$0$, arg$Digits$1$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$1$ = st.c;
    scrut = cryptarithm22[lookup$accessorSymbol](c, arg$Digits$1$);
    if (scrut instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = scrut.x;
      return cryptarithm22.StateT(lambda$2(arg$Some$0$))
    } else if (scrut instanceof NofibPrelude.None.class) {
      let m, f;
      m = cryptarithm22.get;
      f = lambda$10(cryptarithm22, c);
      return cryptarithm22.StateT(lambda$(cryptarithm22, m, f))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$12 = (undefined, function (cryptarithm22, xs) {
  return (x) => {
    return lambda14(cryptarithm22, xs, x)
  }
});
lambda$13 = (undefined, function (cryptarithm22, i) {
  return (_p) => {
    return cryptarithm22.StateT(lambda$2(i))
  }
});
lambda15 = (undefined, function (cryptarithm22, i, _p) {
  return cryptarithm22.StateT(lambda$2(i))
});
lambda$11 = (undefined, function (cryptarithm22, c, st) {
  return (iis) => {
    return lambda16(cryptarithm22, c, st, iis)
  }
});
lambda14 = (undefined, function (cryptarithm22, xs, x) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.foldl(cryptarithm22[delete_$accessorSymbol], xs, tmp);
  return globalThis.Object.freeze([
    x,
    inlinedVal
  ])
});
lambda16 = (undefined, function (cryptarithm22, c, st, iis) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(iis) && iis.length === 2) {
    let inlinedVal, f, arg$Digits$1$;
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
      inlinedVal = cryptarithm22.StateT(lambda$9(cryptarithm22, tmp2));
      f = lambda$13(cryptarithm22, element0$);
      return cryptarithm22.StateT(lambda$(cryptarithm22, inlinedVal, f))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$10 = (undefined, function (cryptarithm22, c) {
  return (st) => {
    return lambda17(cryptarithm22, c, st)
  }
});
lambda17 = (undefined, function (cryptarithm22, c, st) {
  let tmp, inlinedVal, f, arg$Digits$0$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$0$ = st.i;
    tmp = NofibPrelude.map(lambda$12(cryptarithm22, arg$Digits$0$), arg$Digits$0$);
    inlinedVal = cryptarithm22.StateT(lambda$6(tmp));
    f = lambda$11(cryptarithm22, c, st);
    return cryptarithm22.StateT(lambda$(cryptarithm22, inlinedVal, f))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (cryptarithm22, s) {
  return (x) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      cryptarithm22.Unit,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda13 = (undefined, function (cryptarithm22, s, x) {
  let tmp;
  tmp = globalThis.Object.freeze([
    cryptarithm22.Unit,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
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
lambda11 = (undefined, function (cryptarithm22, s) {
  let tmp;
  tmp = globalThis.Object.freeze([
    cryptarithm22.Unit,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
lambda12 = (undefined, function (s) {
  return NofibPrelude.Nil
});
lambda10 = (undefined, function (caseScrut) {
  let element1$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    return NofibPrelude.Cons(element1$, NofibPrelude.Nil)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (s) {
  return (x) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      x,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda8 = (undefined, function (s, x) {
  let tmp;
  tmp = globalThis.Object.freeze([
    x,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
lambda$6 = (undefined, function (ls) {
  return (s) => {
    let tmp;
    tmp = NofibPrelude.map(lambda$7(s), ls);
    return NofibPrelude.concat(tmp)
  }
});
lambda9 = (undefined, function (ls, s) {
  let tmp;
  tmp = NofibPrelude.map(lambda$7(s), ls);
  return NofibPrelude.concat(tmp)
});
lambda$5 = (undefined, function (cryptarithm22, x) {
  return (xs) => {
    let tmp;
    tmp = NofibPrelude.Cons(x, xs);
    return cryptarithm22.StateT(lambda$2(tmp))
  }
});
lambda5 = (undefined, function (cryptarithm22, x, xs) {
  let tmp;
  tmp = NofibPrelude.Cons(x, xs);
  return cryptarithm22.StateT(lambda$2(tmp))
});
lambda$4 = (undefined, function (cryptarithm22, r1) {
  return (x) => {
    let f;
    f = lambda$5(cryptarithm22, x);
    return cryptarithm22.StateT(lambda$(cryptarithm22, r1, f))
  }
});
lambda6 = (undefined, function (cryptarithm22, r1, x) {
  let f;
  f = lambda$5(cryptarithm22, x);
  return cryptarithm22.StateT(lambda$(cryptarithm22, r1, f))
});
lambda$3 = (undefined, function (cryptarithm22, f) {
  return (a, r1) => {
    return lambda7(cryptarithm22, f, a, r1)
  }
});
lambda7 = (undefined, function (cryptarithm22, f, a, r1) {
  let tmp, f1;
  tmp = runtime.safeCall(f(a));
  f1 = lambda$4(cryptarithm22, r1);
  return cryptarithm22.StateT(lambda$(cryptarithm22, tmp, f1))
});
lambda$2 = (undefined, function (a) {
  return (s) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      a,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda4 = (undefined, function (a, s) {
  let tmp;
  tmp = globalThis.Object.freeze([
    a,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
lambda$1 = (undefined, function (cryptarithm22, f) {
  return (caseScrut) => {
    return lambda2(cryptarithm22, f, caseScrut)
  }
});
lambda2 = (undefined, function (cryptarithm22, f, caseScrut) {
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
lambda$ = (undefined, function (cryptarithm22, m, f) {
  return (s) => {
    return lambda3(cryptarithm22, m, f, s)
  }
});
lambda3 = (undefined, function (cryptarithm22, m, f, s) {
  let tmp, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    tmp = NofibPrelude.map(lambda$1(cryptarithm22, f), inlinedVal);
    return NofibPrelude.concat(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (x, y) {
  return x === y
});
lambda = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(x, tmp)
});
lambda29 = (undefined, function (s) {
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
  static get [lookup$accessorSymbol]() { return cryptarithm2.#lookup; }
  static get [delete_$accessorSymbol]() { return cryptarithm2.#delete_; }
  static get [solve$accessorSymbol]() { return cryptarithm2.#solve; }
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
    tmp = cryptarithm2.StateT(lambda29);
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
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
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
    return NofibPrelude.deleteBy(lambda1, e, xs)
  }
  static #listDiff(a, ls) {
    return NofibPrelude.foldl(cryptarithm2.#delete_, a, ls)
  }
  static #runStateT(m, s) {
    if (m instanceof cryptarithm2.StateT.class) {
      return runtime.safeCall(m.run(s))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bind(m, f) {
    return cryptarithm2.StateT(lambda$(cryptarithm2, m, f))
  }
  static #return_(a) {
    return cryptarithm2.StateT(lambda$2(a))
  }
  static #mapM(f, ls) {
    let tmp;
    tmp = cryptarithm2.#return_(NofibPrelude.Nil);
    return NofibPrelude.foldr(lambda$3(cryptarithm2, f), tmp, ls)
  }
  static #lift(ls) {
    return cryptarithm2.StateT(lambda$6(ls))
  }
  static #execStateT(m, s) {
    let tmp, tmp1;
    tmp = cryptarithm2.#runStateT(m, s);
    tmp1 = NofibPrelude.map(lambda10, tmp);
    return NofibPrelude.concat(tmp1)
  }
  static #guard(b) {
    if (b === true) {
      return cryptarithm2.StateT(lambda$8(cryptarithm2))
    }
    return cryptarithm2.StateT(lambda12);
  }
  static #put(s) {
    return cryptarithm2.StateT(lambda$9(cryptarithm2, s))
  }
  static #digits(d) {
    if (d instanceof cryptarithm2.Digits.class) {
      return d.i
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #digitEnv(d) {
    if (d instanceof cryptarithm2.Digits.class) {
      return d.c
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #permute(c) {
    return cryptarithm2.#bind(cryptarithm2.get, lambda$10(cryptarithm2, c))
  }
  static #select(c) {
    return cryptarithm2.#bind(cryptarithm2.get, lambda$14(cryptarithm2, c))
  }
  static #rest(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      return ls.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #solve(tops, bots, carry) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp, tmp1;
    if (bots instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = bots.head;
      arg$Cons$1$ = bots.tail;
      if (tops instanceof NofibPrelude.Nil.class) {
        tmp = cryptarithm2.#return_(carry);
        return cryptarithm2.#bind(tmp, lambda$15(cryptarithm2, tops, arg$Cons$0$, arg$Cons$1$))
      } else if (tops instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = tops.head;
        tmp1 = cryptarithm2.#mapM(cryptarithm2.#select, arg$Cons$0$1);
        tmp = cryptarithm2.#bind(tmp1, lambda$16(cryptarithm2, carry));
        return cryptarithm2.#bind(tmp, lambda$15(cryptarithm2, tops, arg$Cons$0$, arg$Cons$1$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (bots instanceof NofibPrelude.Nil.class) {
      if (tops instanceof NofibPrelude.Nil.class) {
        scrut = carry === 0;
        if (scrut === true) {
          return cryptarithm2.#return_(cryptarithm2.Unit)
        }
        return cryptarithm2.StateT(lambda23);
      }
      return cryptarithm2.StateT(lambda23);
    }
    return cryptarithm2.StateT(lambda23);
  }
  static #puzzle(top, bot) {
    let solution, scrut, env, look1, expand, scrut1, scrut2, tmp, tmp1, arg$Cons$0$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal;
    tmp = NofibPrelude.map(NofibPrelude.reverse, top);
    tmp1 = NofibPrelude.transpose(tmp);
    inlinedVal = r(NofibPrelude, NofibPrelude.Nil, bot);
    solution = cryptarithm2.#solve(tmp1, inlinedVal, 0);
    tmp2 = NofibPrelude.enumFromTo(0, 9);
    tmp3 = cryptarithm2.Digits(tmp2, NofibPrelude.Nil);
    scrut = cryptarithm2.#execStateT(solution, tmp3);
    if (scrut instanceof NofibPrelude.Cons.class) {
      let inlinedVal1, inlinedVal2, look2, inlinedVal3;
      arg$Cons$0$ = scrut.head;
      env = cryptarithm2.#digitEnv(arg$Cons$0$);
      look1 = look$(cryptarithm2, env);
      expand = lambda$20(look1);
      tmp4 = NofibPrelude.map(lambda$19(expand), top);
      inlinedVal1 = go(NofibPrelude, tmp4, 0);
      look2 = look$(cryptarithm2, env);
      inlinedVal3 = NofibPrelude.foldl(lambda$21(look2), 0, bot);
      tmp5 = NofibPrelude.concat(top);
      tmp6 = NofibPrelude.append(tmp5, bot);
      tmp7 = NofibPrelude.nubBy(lambda27, tmp6);
      inlinedVal2 = l(NofibPrelude, tmp7, 0);
      scrut1 = inlinedVal2 > 10;
      if (scrut1 === true) {
        throw runtime.safeCall(globalThis.Error("error"))
      }
      scrut2 = inlinedVal1 != inlinedVal3;
      if (scrut2 === true) {
        throw runtime.safeCall(globalThis.Error("error"))
      }
      tmp8 = NofibPrelude.map(lambda28, env);
      return cryptarithm2.#unlines(tmp8);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testCryptarithm2_nofib(n) {
    let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
    inlinedVal = go1(NofibPrelude, "THIRTY", 0);
    inlinedVal1 = go1(NofibPrelude, "TWELVE", 0);
    inlinedVal2 = go1(NofibPrelude, "TWELVE", 0);
    inlinedVal3 = go1(NofibPrelude, "TWELVE", 0);
    inlinedVal4 = go1(NofibPrelude, "TWELVE", 0);
    inlinedVal5 = go1(NofibPrelude, "TWELVE", 0);
    scrut = n > 999999;
    if (scrut === true) {
      let inlinedVal7;
      inlinedVal7 = go1(NofibPrelude, "1", 0);
      tmp = inlinedVal7;
    } else {
      tmp = NofibPrelude.Nil;
    }
    tmp1 = NofibPrelude.append(inlinedVal5, tmp);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(inlinedVal4, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal3, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal2, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal1, tmp5);
    args = NofibPrelude.Cons(inlinedVal, tmp6);
    inlinedVal6 = go1(NofibPrelude, "NINETY", 0);
    return cryptarithm2.#puzzle(args, inlinedVal6)
  }
  static main() {
    let tmp;
    tmp = cryptarithm2.#testCryptarithm2_nofib(1);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm2"];
});
export { cryptarithm21 as _$_modulePrivate_$_cryptarithm2 };
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
export { look as _$_modulePrivate_$_look };
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
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export { lambda$19 as _$_modulePrivate_$_lambda$19 };
export { lambda$20 as _$_modulePrivate_$_lambda$20 };
export { look$ as _$_modulePrivate_$_look$ };
export { lambda$21 as _$_modulePrivate_$_lambda$21 };
export default cryptarithm21;
