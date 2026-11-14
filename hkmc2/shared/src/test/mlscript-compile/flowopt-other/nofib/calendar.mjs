const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const spread$accessorSymbol = globalThis.Symbol("spread");
const groop$accessorSymbol = globalThis.Symbol("groop");
const monthLengths$accessorSymbol = globalThis.Symbol("monthLengths");
const jan1st$accessorSymbol = globalThis.Symbol("jan1st");
const date$accessorSymbol = globalThis.Symbol("date");
const cal$accessorSymbol = globalThis.Symbol("cal");
let body, pad, banner, entries, pic, title, months, table, calendar1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda$, lambda$1, lambda$2;
lambda$2 = (undefined, function (calendar2) {
  return (x) => {
    return calendar2[cal$accessorSymbol](x)
  }
});
lambda8 = (undefined, function (calendar2, x) {
  return calendar2[cal$accessorSymbol](x)
});
lambda$1 = (undefined, function (calendar2, side, end, daynames) {
  return (x) => {
    return lambda7(calendar2, side, end, daynames, x)
  }
});
lambda7 = (undefined, function (calendar2, side, end, daynames, x) {
  let tmp, tmp1, tmp2;
  tmp = pic(calendar2, daynames, x);
  tmp1 = NofibPrelude.zipWith(NofibPrelude.append, side, tmp);
  tmp2 = NofibPrelude.zipWith(NofibPrelude.append, tmp1, side);
  return NofibPrelude.append(tmp2, end)
});
banner = function banner(calendar2, yr) {
  let tmp, inlinedVal, s, inlinedVal1, inlinedVal2, element1$, element0$, tmp1, inlinedVal3, m, tmp2, tmp3, inlinedVal4, inlinedVal5, tmp4, inlinedVal6, inlinedVal7;
  inlinedVal = yr + "";
  s = inlinedVal;
  inlinedVal1 = go(NofibPrelude, s, 0);
  inlinedVal4 = l(NofibPrelude, inlinedVal1, 0);
  m = 75 - inlinedVal4;
  tmp4 = m / 2;
  inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp4));
  inlinedVal6 = NofibPrelude.replicate(inlinedVal5, " ");
  tmp2 = m - inlinedVal5;
  inlinedVal7 = NofibPrelude.replicate(tmp2, " ");
  tmp3 = NofibPrelude.append(inlinedVal1, inlinedVal7);
  inlinedVal3 = NofibPrelude.append(inlinedVal6, tmp3);
  tmp = globalThis.Object.freeze([
    1,
    75
  ]);
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    element1$ = runtime.Tuple.get(tmp, 1);
    tmp1 = NofibPrelude.replicate(element1$, " ");
    inlinedVal2 = NofibPrelude.replicate(element0$, tmp1);
    return NofibPrelude.Cons(inlinedVal3, inlinedVal2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
body = function body(calendar2, side, end, daynames, yr) {
  let tmp, tmp1, tmp2, inlinedVal, tmp3, inlinedVal1, tmp4, tmp5, tmp6, tmp7;
  tmp4 = calendar2[jan1st$accessorSymbol](yr);
  tmp5 = calendar2[monthLengths$accessorSymbol](yr);
  tmp6 = NofibPrelude.scanl(lambda5, tmp4, tmp5);
  tmp7 = NofibPrelude.map(lambda4, tmp6);
  inlinedVal1 = NofibPrelude.take(12, tmp7);
  tmp3 = calendar2[monthLengths$accessorSymbol](yr);
  inlinedVal = NofibPrelude.zip3(calendar2.monthNames, inlinedVal1, tmp3);
  tmp = NofibPrelude.map(lambda$1(calendar2, side, end, daynames), inlinedVal);
  tmp1 = calendar2[groop$accessorSymbol](3, tmp);
  tmp2 = NofibPrelude.map(calendar2[spread$accessorSymbol], tmp1);
  return NofibPrelude.foldr1(lambda1, tmp2)
};
pic = function pic(calendar2, daynames, mnfdml) {
  let element2$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, tmp, tmp1, tmp2, tmp3, tmp4, m, tmp5, tmp6, inlinedVal5, inlinedVal6, tmp7, inlinedVal7, inlinedVal8;
    element0$ = runtime.Tuple.get(mnfdml, 0);
    element1$ = runtime.Tuple.get(mnfdml, 1);
    element2$ = runtime.Tuple.get(mnfdml, 2);
    inlinedVal5 = l(NofibPrelude, element0$, 0);
    m = 21 - inlinedVal5;
    tmp7 = m / 2;
    inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp7));
    inlinedVal7 = NofibPrelude.replicate(inlinedVal6, " ");
    tmp5 = m - inlinedVal6;
    inlinedVal8 = NofibPrelude.replicate(tmp5, " ");
    tmp6 = NofibPrelude.append(element0$, inlinedVal8);
    inlinedVal2 = NofibPrelude.append(inlinedVal7, tmp6);
    inlinedVal = NofibPrelude.Cons(inlinedVal2, NofibPrelude.Nil);
    tmp2 = 1 - element1$;
    tmp3 = 42 - element1$;
    tmp4 = NofibPrelude.enumFromTo(tmp2, tmp3);
    inlinedVal4 = NofibPrelude.map(lambda$(calendar2, element2$), tmp4);
    tmp = calendar2[groop$accessorSymbol](7, inlinedVal4);
    tmp1 = NofibPrelude.map(calendar2[spread$accessorSymbol], tmp);
    inlinedVal3 = NofibPrelude.foldr1(lambda1, tmp1);
    inlinedVal1 = NofibPrelude.append(daynames, inlinedVal3);
    return NofibPrelude.append(inlinedVal, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
pad = function pad(side, end, p) {
  let tmp, tmp1;
  tmp = NofibPrelude.zipWith(NofibPrelude.append, side, p);
  tmp1 = NofibPrelude.zipWith(NofibPrelude.append, tmp, side);
  return NofibPrelude.append(tmp1, end)
};
title = function title(calendar2, mn) {
  let inlinedVal, m, tmp, tmp1, inlinedVal1, inlinedVal2, tmp2, inlinedVal3, inlinedVal4;
  inlinedVal1 = l(NofibPrelude, mn, 0);
  m = 21 - inlinedVal1;
  tmp2 = m / 2;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  inlinedVal3 = NofibPrelude.replicate(inlinedVal2, " ");
  tmp = m - inlinedVal2;
  inlinedVal4 = NofibPrelude.replicate(tmp, " ");
  tmp1 = NofibPrelude.append(mn, inlinedVal4);
  inlinedVal = NofibPrelude.append(inlinedVal3, tmp1);
  return NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil)
};
table = function table(calendar2, daynames, fd, ml) {
  let inlinedVal, inlinedVal1, tmp, tmp1, tmp2, tmp3, tmp4;
  tmp2 = 1 - fd;
  tmp3 = 42 - fd;
  tmp4 = NofibPrelude.enumFromTo(tmp2, tmp3);
  inlinedVal1 = NofibPrelude.map(lambda$(calendar2, ml), tmp4);
  tmp = calendar2[groop$accessorSymbol](7, inlinedVal1);
  tmp1 = NofibPrelude.map(calendar2[spread$accessorSymbol], tmp);
  inlinedVal = NofibPrelude.foldr1(lambda1, tmp1);
  return NofibPrelude.append(daynames, inlinedVal)
};
entries = function entries(calendar2, fd, ml) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4;
  tmp2 = 1 - fd;
  tmp3 = 42 - fd;
  tmp4 = NofibPrelude.enumFromTo(tmp2, tmp3);
  inlinedVal = NofibPrelude.map(lambda$(calendar2, ml), tmp4);
  tmp = calendar2[groop$accessorSymbol](7, inlinedVal);
  tmp1 = NofibPrelude.map(calendar2[spread$accessorSymbol], tmp);
  return NofibPrelude.foldr1(lambda1, tmp1)
};
months = function months(calendar2, yer) {
  let tmp, inlinedVal, tmp1, tmp2, tmp3, tmp4;
  tmp1 = calendar2[jan1st$accessorSymbol](yer);
  tmp2 = calendar2[monthLengths$accessorSymbol](yer);
  tmp3 = NofibPrelude.scanl(lambda5, tmp1, tmp2);
  tmp4 = NofibPrelude.map(lambda4, tmp3);
  inlinedVal = NofibPrelude.take(12, tmp4);
  tmp = calendar2[monthLengths$accessorSymbol](yer);
  return NofibPrelude.zip3(calendar2.monthNames, inlinedVal, tmp)
};
lambda$ = (undefined, function (calendar2, ml) {
  return (d) => {
    return calendar2[date$accessorSymbol](ml, d)
  }
});
lambda6 = (undefined, function (calendar2, ml, d) {
  return calendar2[date$accessorSymbol](ml, d)
});
lambda4 = (undefined, function (x) {
  let tmp, inlinedVal, tmp1;
  tmp1 = x / 7;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = 7 * inlinedVal;
  return x - tmp
});
lambda5 = (undefined, function (a, b) {
  return a + b
});
lambda2 = (undefined, function (a, b) {
  return NofibPrelude.append(a, b)
});
lambda3 = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda2, a, b)
});
lambda1 = (undefined, function (a, b) {
  return NofibPrelude.append(a, b)
});
lambda = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(x, tmp)
});
(class calendar {
  static {
    calendar1 = this
  }
  static get [spread$accessorSymbol]() { return calendar.#spread; }
  static get [groop$accessorSymbol]() { return calendar.#groop; }
  static get [monthLengths$accessorSymbol]() { return calendar.#monthLengths; }
  static get [jan1st$accessorSymbol]() { return calendar.#jan1st; }
  static get [date$accessorSymbol]() { return calendar.#date; }
  static get [cal$accessorSymbol]() { return calendar.#cal; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
    inlinedVal = go(NofibPrelude, "January", 0);
    inlinedVal1 = go(NofibPrelude, "February", 0);
    inlinedVal2 = go(NofibPrelude, "March", 0);
    inlinedVal3 = go(NofibPrelude, "April", 0);
    inlinedVal4 = go(NofibPrelude, "May", 0);
    inlinedVal5 = go(NofibPrelude, "June", 0);
    inlinedVal6 = go(NofibPrelude, "July", 0);
    inlinedVal7 = go(NofibPrelude, "August", 0);
    inlinedVal8 = go(NofibPrelude, "September", 0);
    inlinedVal9 = go(NofibPrelude, "October", 0);
    inlinedVal10 = go(NofibPrelude, "November", 0);
    inlinedVal11 = go(NofibPrelude, "December", 0);
    tmp = NofibPrelude.Cons(inlinedVal11, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal10, tmp);
    tmp2 = NofibPrelude.Cons(inlinedVal9, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal8, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal7, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal6, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal5, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal4, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal3, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal2, tmp8);
    tmp10 = NofibPrelude.Cons(inlinedVal1, tmp9);
    tmp11 = NofibPrelude.Cons(inlinedVal, tmp10);
    calendar.monthNames = tmp11;
  }
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  }
  static #height(p) {
    return l(NofibPrelude, p, 0)
  }
  static #width(p) {
    let inlinedVal;
    if (p instanceof NofibPrelude.Cons.class) {
      inlinedVal = p.head;
      return l(NofibPrelude, inlinedVal, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #stack(ls) {
    return NofibPrelude.foldr1(lambda1, ls)
  }
  static #spread(ls) {
    return NofibPrelude.foldr1(lambda3, ls)
  }
  static #emptyPic(hw) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(hw) && hw.length === 2) {
      element0$ = runtime.Tuple.get(hw, 0);
      element1$ = runtime.Tuple.get(hw, 1);
      tmp = NofibPrelude.replicate(element1$, " ");
      return NofibPrelude.replicate(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = calendar.#groop(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  }
  static #block(n, t) {
    let tmp, tmp1;
    tmp = calendar.#groop(n, t);
    tmp1 = NofibPrelude.map(calendar.#spread, tmp);
    return calendar.#stack(tmp1)
  }
  static #blockT(n, t) {
    let tmp, tmp1;
    tmp = calendar.#groop(n, t);
    tmp1 = NofibPrelude.map(calendar.#stack, tmp);
    return calendar.#stack(tmp1)
  }
  static #lframe(mn, p) {
    let h, w, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (runtime.Tuple.isArrayLike(mn) && mn.length === 2) {
      element0$ = runtime.Tuple.get(mn, 0);
      element1$ = runtime.Tuple.get(mn, 1);
      h = calendar.#height(p);
      w = calendar.#width(p);
      tmp = element1$ - w;
      tmp1 = globalThis.Object.freeze([
        h,
        tmp
      ]);
      tmp2 = calendar.#emptyPic(tmp1);
      tmp3 = NofibPrelude.zipWith(NofibPrelude.append, p, tmp2);
      tmp4 = element0$ - h;
      tmp5 = globalThis.Object.freeze([
        tmp4,
        element1$
      ]);
      tmp6 = calendar.#emptyPic(tmp5);
      return NofibPrelude.append(tmp3, tmp6)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #firstDays(year) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = calendar.#jan1st(year);
    tmp1 = calendar.#monthLengths(year);
    tmp2 = NofibPrelude.scanl(lambda5, tmp, tmp1);
    tmp3 = NofibPrelude.map(lambda4, tmp2);
    return NofibPrelude.take(12, tmp3)
  }
  static #space(n) {
    return NofibPrelude.replicate(n, " ")
  }
  static #ljustify(n, s) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = l(NofibPrelude, s, 0);
    tmp = n - inlinedVal;
    tmp1 = calendar.#space(tmp);
    return NofibPrelude.append(s, tmp1)
  }
  static #rjustify(n, s) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = l(NofibPrelude, s, 0);
    tmp = n - inlinedVal;
    tmp1 = calendar.#space(tmp);
    return NofibPrelude.append(tmp1, s)
  }
  static #date(ml, d) {
    let tmp, tmp1, tmp2;
    tmp = d < 1;
    if (tmp === false) {
      tmp1 = ml < d;
      if (tmp1 === true) {
        let inlinedVal;
        inlinedVal = go(NofibPrelude, "   ", 0);
        return NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil)
      }
      {
        let inlinedVal, s, inlinedVal1;
        inlinedVal = d + "";
        s = inlinedVal;
        inlinedVal1 = go(NofibPrelude, s, 0);
        tmp2 = calendar.#rjustify(3, inlinedVal1);
        return NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
      }
    }
    {
      let inlinedVal;
      inlinedVal = go(NofibPrelude, "   ", 0);
      return NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil);
    }
  }
  static #dates(fd, ml) {
    let tmp, tmp1, tmp2;
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = NofibPrelude.enumFromTo(tmp, tmp1);
    return NofibPrelude.map(lambda$(calendar, ml), tmp2)
  }
  static #cjustify(n, s) {
    let m, tmp, tmp1, tmp2, tmp3, inlinedVal, inlinedVal1, tmp4;
    inlinedVal = l(NofibPrelude, s, 0);
    m = n - inlinedVal;
    tmp4 = m / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp = calendar.#space(inlinedVal1);
    tmp1 = m - inlinedVal1;
    tmp2 = calendar.#space(tmp1);
    tmp3 = NofibPrelude.append(s, tmp2);
    return NofibPrelude.append(tmp, tmp3)
  }
  static #cal(year) {
    let side, end, daynames, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal;
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
    inlinedVal = go(NofibPrelude, " Su Mo Tu We Th Fr Sa", 0);
    daynames = NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil);
    tmp2 = banner(calendar, year);
    tmp3 = body(calendar, side, end, daynames, year);
    tmp4 = NofibPrelude.append(tmp2, tmp3);
    return calendar.#unlines(tmp4)
  }
  static #testCalendar_nofib(n) {
    let tmp, tmp1;
    tmp = 1993 + n;
    tmp1 = NofibPrelude.enumFromTo(1993, tmp);
    return NofibPrelude.map(lambda$2(calendar), tmp1)
  }
  static main() {
    let tmp, tmp1;
    tmp = calendar.#testCalendar_nofib(0);
    tmp1 = NofibPrelude.concat(tmp);
    return NofibPrelude.nofibListToString(tmp1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "calendar"];
});
export { body as _$_modulePrivate_$_body };
export { pad as _$_modulePrivate_$_pad };
export { banner as _$_modulePrivate_$_banner };
export { entries as _$_modulePrivate_$_entries };
export { pic as _$_modulePrivate_$_pic };
export { title as _$_modulePrivate_$_title };
export { months as _$_modulePrivate_$_months };
export { table as _$_modulePrivate_$_table };
export { calendar1 as _$_modulePrivate_$_calendar };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export default calendar1;
