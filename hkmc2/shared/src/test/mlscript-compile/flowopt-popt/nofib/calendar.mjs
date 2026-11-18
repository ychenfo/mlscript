const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const enumFromTo$accessorSymbol = globalThis.Symbol("enumFromTo");
const append$accessorSymbol = globalThis.Symbol("append");
const foldr1$accessorSymbol = globalThis.Symbol("foldr1");
const zipWith$accessorSymbol = globalThis.Symbol("zipWith");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
const spread$accessorSymbol = globalThis.Symbol("spread");
const groop$accessorSymbol = globalThis.Symbol("groop");
const date$accessorSymbol = globalThis.Symbol("date");
const cal$accessorSymbol = globalThis.Symbol("cal");
let calendar1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6;
lambda$6 = (undefined, function (calendar2) {
  return (x) => {
    return calendar2[cal$accessorSymbol](x)
  }
});
lambda$5 = (undefined, function (calendar2, side, end, daynames) {
  return (x) => {
    return lambda2(calendar2, side, end, daynames, x)
  }
});
lambda2 = (undefined, function (calendar2, side, end, daynames, x) {
  let inlinedVal, tmp, tmp1, element2$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
    let inlinedVal1, inlinedVal2, inlinedVal3, tmp2, tmp3, tmp4, lambda$here, tmp5, tmp6, inlinedVal4, lambda$here1, inlinedVal5, m, tmp7, tmp8, tmp9, inlinedVal6, tmp10, inlinedVal7, inlinedVal8;
    element0$ = runtime.Tuple.get(x, 0);
    element1$ = runtime.Tuple.get(x, 1);
    element2$ = runtime.Tuple.get(x, 2);
    tmp7 = calendar2[listLen$accessorSymbol](element0$);
    m = 21 - tmp7;
    tmp10 = m / 2;
    inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp10));
    inlinedVal7 = calendar2[replicate$accessorSymbol](inlinedVal6, " ");
    tmp8 = m - inlinedVal6;
    inlinedVal8 = calendar2[replicate$accessorSymbol](tmp8, " ");
    tmp9 = calendar2[append$accessorSymbol](element0$, inlinedVal8);
    inlinedVal5 = calendar2[append$accessorSymbol](inlinedVal7, tmp9);
    inlinedVal1 = NofibPrelude.Cons(inlinedVal5, NofibPrelude.Nil);
    tmp2 = 1 - element1$;
    tmp3 = 42 - element1$;
    tmp4 = calendar2[enumFromTo$accessorSymbol](tmp2, tmp3);
    lambda$here = lambda$4(calendar2, element2$);
    inlinedVal3 = calendar2[map$accessorSymbol](lambda$here, tmp4);
    tmp5 = calendar2[groop$accessorSymbol](7, inlinedVal3);
    tmp6 = calendar2[map$accessorSymbol](calendar2[spread$accessorSymbol], tmp5);
    lambda$here1 = lambda$1(calendar2);
    inlinedVal4 = calendar2[foldr1$accessorSymbol](lambda$here1, tmp6);
    inlinedVal2 = calendar2[append$accessorSymbol](daynames, inlinedVal4);
    inlinedVal = calendar2[append$accessorSymbol](inlinedVal1, inlinedVal2);
    tmp = calendar2[zipWith$accessorSymbol](calendar2[append$accessorSymbol], side, inlinedVal);
    tmp1 = calendar2[zipWith$accessorSymbol](calendar2[append$accessorSymbol], tmp, side);
    return calendar2[append$accessorSymbol](tmp1, end)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (calendar2, ml) {
  return (d) => {
    return calendar2[date$accessorSymbol](ml, d)
  }
});
lambda = (undefined, function (x) {
  let tmp, inlinedVal, tmp1;
  tmp1 = x / 7;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = 7 * inlinedVal;
  return x - tmp
});
lambda1 = (undefined, function (a, b) {
  return a + b
});
lambda$3 = (undefined, function (calendar2) {
  return (a, b) => {
    return calendar2[append$accessorSymbol](a, b)
  }
});
lambda$2 = (undefined, function (calendar2) {
  return (a, b) => {
    let lambda$here;
    lambda$here = lambda$3(calendar2);
    return calendar2[zipWith$accessorSymbol](lambda$here, a, b)
  }
});
lambda$1 = (undefined, function (calendar2) {
  return (a, b) => {
    return calendar2[append$accessorSymbol](a, b)
  }
});
lambda$ = (undefined, function (calendar2) {
  return (x) => {
    let tmp;
    tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return calendar2[append$accessorSymbol](x, tmp)
  }
});
(class calendar {
  static {
    calendar1 = this
  }
  static get [map$accessorSymbol]() { return calendar.#map; }
  static get [listLen$accessorSymbol]() { return calendar.#listLen; }
  static get [enumFromTo$accessorSymbol]() { return calendar.#enumFromTo; }
  static get [append$accessorSymbol]() { return calendar.#append; }
  static get [foldr1$accessorSymbol]() { return calendar.#foldr1; }
  static get [zipWith$accessorSymbol]() { return calendar.#zipWith; }
  static get [replicate$accessorSymbol]() { return calendar.#replicate; }
  static get [spread$accessorSymbol]() { return calendar.#spread; }
  static get [groop$accessorSymbol]() { return calendar.#groop; }
  static get [date$accessorSymbol]() { return calendar.#date; }
  static get [cal$accessorSymbol]() { return calendar.#cal; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp7, tmp15);
    tmp17 = NofibPrelude.Cons(tmp6, tmp16);
    tmp18 = NofibPrelude.Cons(tmp5, tmp17);
    tmp19 = NofibPrelude.Cons(tmp4, tmp18);
    tmp20 = NofibPrelude.Cons(tmp3, tmp19);
    tmp21 = NofibPrelude.Cons(tmp2, tmp20);
    tmp22 = NofibPrelude.Cons(tmp1, tmp21);
    tmp23 = NofibPrelude.Cons(tmp, tmp22);
    calendar.monthNames = tmp23;
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = calendar.#map(f, arg$Cons$1$);
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
      tmp1 = calendar.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #leave(n, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
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
  }
  static #take(n, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = calendar.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = calendar.#append(arg$Cons$1$, ys);
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
      tmp = calendar.#concat(arg$Cons$1$);
      return calendar.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanl(f, q, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f(q, arg$Cons$0$));
      tmp1 = calendar.#scanl(f, tmp, arg$Cons$1$);
      return NofibPrelude.Cons(q, tmp1)
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
      tmp = calendar.#foldr1(f, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
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
        tmp1 = calendar.#zipWith(f, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = calendar.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #zip3(xs, ys, zs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        if (zs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = zs.head;
          arg$Cons$1$2 = zs.tail;
          tmp = globalThis.Object.freeze([
            arg$Cons$0$,
            arg$Cons$0$1,
            arg$Cons$0$2
          ]);
          tmp1 = calendar.#zip3(arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #unlines(ls) {
    let tmp, lambda$here;
    lambda$here = lambda$(calendar);
    tmp = calendar.#map(lambda$here, ls);
    return calendar.#concat(tmp)
  }
  static #stack(ls) {
    let lambda$here;
    lambda$here = lambda$1(calendar);
    return calendar.#foldr1(lambda$here, ls)
  }
  static #spread(ls) {
    let lambda$here;
    lambda$here = lambda$2(calendar);
    return calendar.#foldr1(lambda$here, ls)
  }
  static #emptyPic(hw) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(hw) && hw.length === 2) {
      element0$ = runtime.Tuple.get(hw, 0);
      element1$ = runtime.Tuple.get(hw, 1);
      tmp = calendar.#replicate(element1$, " ");
      return calendar.#replicate(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    tmp = calendar.#take(n, xs);
    tmp1 = calendar.#leave(n, xs);
    tmp2 = calendar.#groop(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  }
  static #leap(year) {
    let scrut, inlinedVal, tmp, inlinedVal1, tmp1;
    tmp1 = year / 100;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = 100 * inlinedVal1;
    inlinedVal = year - tmp;
    scrut = inlinedVal == 0;
    if (scrut === true) {
      let inlinedVal2, tmp2, inlinedVal3, tmp3;
      tmp3 = year / 400;
      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
      tmp2 = 400 * inlinedVal3;
      inlinedVal2 = year - tmp2;
      return inlinedVal2 == 0
    }
    {
      let inlinedVal2, tmp2, inlinedVal3, tmp3;
      tmp3 = year / 4;
      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
      tmp2 = 4 * inlinedVal3;
      inlinedVal2 = year - tmp2;
      return inlinedVal2 == 0;
    }
  }
  static #monthLengths(year) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.#leap(year);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    tmp1 = NofibPrelude.Cons(31, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(30, tmp1);
    tmp3 = NofibPrelude.Cons(31, tmp2);
    tmp4 = NofibPrelude.Cons(30, tmp3);
    tmp5 = NofibPrelude.Cons(31, tmp4);
    tmp6 = NofibPrelude.Cons(31, tmp5);
    tmp7 = NofibPrelude.Cons(30, tmp6);
    tmp8 = NofibPrelude.Cons(31, tmp7);
    tmp9 = NofibPrelude.Cons(30, tmp8);
    tmp10 = NofibPrelude.Cons(31, tmp9);
    tmp11 = NofibPrelude.Cons(tmp, tmp10);
    return NofibPrelude.Cons(31, tmp11)
  }
  static #jan1st(year) {
    let last, tmp, tmp1, tmp2, inlinedVal, inlinedVal1, inlinedVal2, tmp3, tmp4, tmp5, tmp6, inlinedVal3, tmp7;
    last = year - 1;
    tmp6 = last / 4;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp6));
    tmp = year + inlinedVal;
    tmp5 = last / 100;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp5));
    tmp1 = tmp - inlinedVal1;
    tmp4 = last / 400;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp2 = tmp1 + inlinedVal2;
    tmp7 = tmp2 / 7;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp7));
    tmp3 = 7 * inlinedVal3;
    return tmp2 - tmp3
  }
  static #space(n) {
    return calendar.#replicate(n, " ")
  }
  static #rjustify(n, s) {
    let tmp, tmp1, tmp2;
    tmp = calendar.#listLen(s);
    tmp1 = n - tmp;
    tmp2 = calendar.#space(tmp1);
    return calendar.#append(tmp2, s)
  }
  static #date(ml, d) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = d < 1;
    if (tmp === false) {
      tmp1 = ml < d;
      if (tmp1 === true) {
        tmp2 = NofibPrelude.nofibStringToList("   ");
        return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
      }
      {
        let inlinedVal;
        inlinedVal = d + "";
        tmp3 = NofibPrelude.nofibStringToList(inlinedVal);
        tmp4 = calendar.#rjustify(3, tmp3);
        return NofibPrelude.Cons(tmp4, NofibPrelude.Nil);
      }
    }
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
  }
  static #cjustify(n, s) {
    let m, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, tmp5;
    tmp = calendar.#listLen(s);
    m = n - tmp;
    tmp5 = m / 2;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp5));
    tmp1 = calendar.#space(inlinedVal);
    tmp2 = m - inlinedVal;
    tmp3 = calendar.#space(tmp2);
    tmp4 = calendar.#append(s, tmp3);
    return calendar.#append(tmp1, tmp4)
  }
  static #cal(year) {
    let side, end, daynames, tmp, tmp1, tmp2, tmp3, inlinedVal, tmp4, lambda$here, inlinedVal1, inlinedVal2, tmp5, inlinedVal3, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, inlinedVal4;
    tmp = globalThis.Object.freeze([
      8,
      2
    ]);
    side = calendar.#emptyPic(tmp);
    tmp1 = globalThis.Object.freeze([
      1,
      25
    ]);
    end = calendar.#emptyPic(tmp1);
    tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
    daynames = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    inlinedVal4 = year + "";
    tmp12 = NofibPrelude.nofibStringToList(inlinedVal4);
    tmp13 = calendar.#cjustify(75, tmp12);
    tmp14 = globalThis.Object.freeze([
      1,
      75
    ]);
    tmp15 = calendar.#emptyPic(tmp14);
    inlinedVal = NofibPrelude.Cons(tmp13, tmp15);
    tmp6 = calendar.#jan1st(year);
    tmp7 = calendar.#monthLengths(year);
    tmp8 = calendar.#scanl(lambda1, tmp6, tmp7);
    tmp9 = calendar.#map(lambda, tmp8);
    inlinedVal3 = calendar.#take(12, tmp9);
    tmp5 = calendar.#monthLengths(year);
    inlinedVal1 = calendar.#zip3(calendar.monthNames, inlinedVal3, tmp5);
    lambda$here = lambda$5(calendar, side, end, daynames);
    tmp4 = calendar.#map(lambda$here, inlinedVal1);
    tmp10 = calendar.#groop(3, tmp4);
    tmp11 = calendar.#map(calendar.#spread, tmp10);
    inlinedVal2 = calendar.#stack(tmp11);
    tmp3 = calendar.#append(inlinedVal, inlinedVal2);
    return calendar.#unlines(tmp3)
  }
  static #testCalendar_nofib(n) {
    let tmp, tmp1, lambda$here;
    tmp = 1993 + n;
    tmp1 = calendar.#enumFromTo(1993, tmp);
    lambda$here = lambda$6(calendar);
    return calendar.#map(lambda$here, tmp1)
  }
  static main() {
    let tmp, tmp1;
    tmp = calendar.#testCalendar_nofib(0);
    tmp1 = calendar.#concat(tmp);
    return NofibPrelude.nofibListToString(tmp1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "calendar"];
});
export default calendar1;
