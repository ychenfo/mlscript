const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const fold$accessorSymbol = globalThis.Symbol("fold");
const exists_$accessorSymbol = globalThis.Symbol("exists_");
const foreach$accessorSymbol = globalThis.Symbol("foreach");
const map$accessorSymbol = globalThis.Symbol("map");
const sub$accessorSymbol = globalThis.Symbol("sub");
let loop, recordResult, stringValue, letterValue, setLetterValue, testOk, mpuz1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, main_solve$solve, main_solve_map$map, main_solve_fold$fold, solve_fold$fold, solve_map$map, main_solve_map$l_Cons, main_solve_map$l_rest, main_solve_map$l_Nil, main_solve_fold$l_Cons, main_solve_fold$l_rest, main_solve_fold$l_Nil, solve_fold$l_Cons, solve_fold$l_rest, solve_fold$l_Nil, solve_map$l_Cons, solve_map$l_rest, solve_map$l_Nil, solve_map$l_Cons$worker, main_solve_map$l_Cons$worker;
main_solve$solve = function main_solve$solve(a, b, c, d, e) {
  let found, b1, inlinedVal, tmp, arr, i, n, x, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp1, lambda$here, inlinedVal6, inlinedVal7, inlinedVal8, tmp2, lambda$here1, inlinedVal9, inlinedVal10, inlinedVal11, tmp3, lambda$here2, inlinedVal12, inlinedVal13, inlinedVal14, tmp4, lambda$here3, inlinedVal15, inlinedVal16, inlinedVal17, tmp5, lambda$here4, inlinedVal18, inlinedVal19, tmp6, inlinedVal20, inlinedVal21, tmp7, inlinedVal22, inlinedVal23, tmp8, inlinedVal24, tmp9, inlinedVal25, inlinedVal26, inlinedVal27, tmp10;
  b1 = mpuz1.Nil;
  lambda$here = lambda$2(mpuz1);
  inlinedVal3 = mpuz1[fold$accessorSymbol](a, b1, lambda$here);
  lambda$here1 = lambda$2(mpuz1);
  inlinedVal6 = mpuz1[fold$accessorSymbol](b, inlinedVal3, lambda$here1);
  lambda$here2 = lambda$2(mpuz1);
  inlinedVal9 = mpuz1[fold$accessorSymbol](c, inlinedVal6, lambda$here2);
  lambda$here3 = lambda$2(mpuz1);
  inlinedVal12 = mpuz1[fold$accessorSymbol](d, inlinedVal9, lambda$here3);
  lambda$here4 = lambda$2(mpuz1);
  inlinedVal15 = mpuz1[fold$accessorSymbol](e, inlinedVal12, lambda$here4);
  inlinedVal = inlinedVal15;
  tmp = [];
  arr = tmp;
  i = 0;
  n = 256;
  x = 0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp11;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal1 = arr;
        break inlinedLbl
      }
      arr[i] = x;
      tmp11 = i + 1;
      i = tmp11;
      continue loopLabel;
    }
  }
  found = new mpuz1.Ref.class(mpuz1.Nil);
  tmp1 = new mpuz1.Ref.class(false);
  inlinedVal4 = globalThis.Object.freeze([
    0,
    tmp1
  ]);
  tmp2 = new mpuz1.Ref.class(false);
  inlinedVal7 = globalThis.Object.freeze([
    1,
    tmp2
  ]);
  tmp3 = new mpuz1.Ref.class(false);
  inlinedVal10 = globalThis.Object.freeze([
    2,
    tmp3
  ]);
  tmp4 = new mpuz1.Ref.class(false);
  inlinedVal13 = globalThis.Object.freeze([
    3,
    tmp4
  ]);
  tmp5 = new mpuz1.Ref.class(false);
  inlinedVal16 = globalThis.Object.freeze([
    4,
    tmp5
  ]);
  tmp6 = new mpuz1.Ref.class(false);
  inlinedVal18 = globalThis.Object.freeze([
    5,
    tmp6
  ]);
  tmp7 = new mpuz1.Ref.class(false);
  inlinedVal20 = globalThis.Object.freeze([
    6,
    tmp7
  ]);
  tmp8 = new mpuz1.Ref.class(false);
  inlinedVal22 = globalThis.Object.freeze([
    7,
    tmp8
  ]);
  tmp9 = new mpuz1.Ref.class(false);
  inlinedVal24 = globalThis.Object.freeze([
    8,
    tmp9
  ]);
  tmp10 = new mpuz1.Ref.class(false);
  inlinedVal26 = globalThis.Object.freeze([
    9,
    tmp10
  ]);
  inlinedVal27 = mpuz1.Nil;
  inlinedVal25 = mpuz1.Cons(inlinedVal26, inlinedVal27);
  inlinedVal23 = mpuz1.Cons(inlinedVal24, inlinedVal25);
  inlinedVal21 = mpuz1.Cons(inlinedVal22, inlinedVal23);
  inlinedVal19 = mpuz1.Cons(inlinedVal20, inlinedVal21);
  inlinedVal17 = mpuz1.Cons(inlinedVal18, inlinedVal19);
  inlinedVal14 = mpuz1.Cons(inlinedVal16, inlinedVal17);
  inlinedVal11 = mpuz1.Cons(inlinedVal13, inlinedVal14);
  inlinedVal8 = mpuz1.Cons(inlinedVal10, inlinedVal11);
  inlinedVal5 = mpuz1.Cons(inlinedVal7, inlinedVal8);
  inlinedVal2 = mpuz1.Cons(inlinedVal4, inlinedVal5);
  loop(mpuz1, a, b, c, d, e, inlinedVal, inlinedVal1, found, inlinedVal2, inlinedVal);
  return found.value
};
main_solve_map$map = function main_solve_map$map(l, f) {
  return l(undefined, undefined, undefined, undefined, undefined, f, undefined)
};
main_solve_fold$fold = function main_solve_fold$fold(l, b, f) {
  return l(undefined, undefined, undefined, undefined, undefined, f, b)
};
solve_fold$fold = function solve_fold$fold(l, b, f) {
  return l(undefined, undefined, undefined, undefined, undefined, f, b)
};
solve_map$map = function solve_map$map(l, f) {
  return l(undefined, undefined, undefined, undefined, undefined, f, undefined)
};
main_solve_map$l_Cons = function main_solve_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_solve_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_solve_map$l_Cons$worker = function main_solve_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return mpuz1.Cons(fv_tmp, inlinedVal)
};
main_solve_map$l_Nil = function main_solve_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return mpuz1.Nil
  }
};
main_solve_fold$l_Cons = function main_solve_fold$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_b) => {
    let fv_tmp1;
    fv_tmp1 = runtime.safeCall(fv_f(Cons_head, fv_b));
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, fv_tmp1)
  }
};
main_solve_fold$l_Nil = function main_solve_fold$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_b) => {
    return fv_b
  }
};
solve_fold$l_Cons = function solve_fold$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_b) => {
    let fv_tmp1;
    fv_tmp1 = runtime.safeCall(fv_f(Cons_head, fv_b));
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, fv_tmp1)
  }
};
solve_fold$l_Nil = function solve_fold$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_b) => {
    return fv_b
  }
};
solve_map$l_Cons = function solve_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return solve_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
solve_map$l_Cons$worker = function solve_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return mpuz1.Cons(fv_tmp, inlinedVal)
};
solve_map$l_Nil = function solve_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return mpuz1.Nil
  }
};
main_solve_map$l_rest = function main_solve_map$l_rest() {
  return null
};
main_solve_fold$l_rest = function main_solve_fold$l_rest() {
  return null
};
solve_fold$l_rest = function solve_fold$l_rest() {
  return null
};
solve_map$l_rest = function solve_map$l_rest() {
  return null
};
lambda$6 = (undefined, function (letterValues) {
  return (c, v) => {
    return lambda(letterValues, c, v)
  }
});
lambda = (undefined, function (letterValues, c, v) {
  let tmp, inlinedVal;
  tmp = v * 10;
  inlinedVal = letterValues.at(c);
  return tmp + inlinedVal
});
lambda$5 = (undefined, function (letterValues) {
  return (c) => {
    let inlinedVal;
    inlinedVal = letterValues.at(c);
    return globalThis.Object.freeze([
      c,
      inlinedVal
    ])
  }
});
lambda1 = (undefined, function (letterValues, c) {
  let inlinedVal;
  inlinedVal = letterValues.at(c);
  return globalThis.Object.freeze([
    c,
    inlinedVal
  ])
});
lambda$4 = (undefined, function (mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1) {
  return (p) => {
    return lambda2(mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1, p)
  }
});
lambda2 = (undefined, function (mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1, p) {
  let scrut, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    element1$ = runtime.Tuple.get(p, 1);
    scrut = element1$.value;
    if (scrut === true) {
      return runtime.Unit
    }
    element1$.value = true;
    letterValues[c1] = element0$;
    loop(mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1);
    element1$.value = false;
    return runtime.Unit;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (c) {
  return (c1) => {
    return c == c1
  }
});
lambda3 = (undefined, function (c, c1) {
  return c == c1
});
lambda$2 = (undefined, function (mpuz2) {
  return (c, letters) => {
    return lambda4(mpuz2, c, letters)
  }
});
lambda4 = (undefined, function (mpuz2, c, letters) {
  let scrut, lambda$here;
  lambda$here = lambda$3(c);
  scrut = mpuz2[exists_$accessorSymbol](letters, lambda$here);
  if (scrut === true) {
    return letters
  }
  return mpuz2.Cons(c, letters);
});
lambda$1 = (undefined, function (mpuz2) {
  return (s, letters) => {
    let lambda$here;
    lambda$here = lambda$2(mpuz2);
    return mpuz2[fold$accessorSymbol](s, letters, lambda$here)
  }
});
lambda$ = (undefined, function (mpuz2) {
  return (v) => {
    let tmp;
    tmp = new mpuz2.Ref.class(false);
    return globalThis.Object.freeze([
      v,
      tmp
    ])
  }
});
letterValue = function letterValue(letterValues, c) {
  return letterValues.at(c)
};
setLetterValue = function setLetterValue(letterValues, c, v) {
  letterValues[c] = v;
  return runtime.Unit
};
stringValue = function stringValue(mpuz2, letterValues, s) {
  let lambda$here;
  lambda$here = lambda$6(letterValues);
  return mpuz2[fold$accessorSymbol](s, 0, lambda$here)
};
recordResult = function recordResult(mpuz2, letters, letterValues, found) {
  let tmp, tmp1, lambda$here;
  lambda$here = lambda$5(letterValues);
  tmp = mpuz2[map$accessorSymbol](letters, lambda$here);
  tmp1 = mpuz2.Cons(tmp, found.value);
  found.value = tmp1;
  return runtime.Unit
};
testOk = function testOk(mpuz2, a, b, c, d, e, letters, letterValues, found) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  tmp = mpuz2[sub$accessorSymbol](b, 1);
  inlinedVal = letterValues.at(tmp);
  tmp1 = mpuz2[sub$accessorSymbol](b, 0);
  inlinedVal1 = letterValues.at(tmp1);
  lambda$here4 = lambda$6(letterValues);
  inlinedVal2 = mpuz2[fold$accessorSymbol](a, 0, lambda$here4);
  lambda$here3 = lambda$6(letterValues);
  inlinedVal3 = mpuz2[fold$accessorSymbol](b, 0, lambda$here3);
  lambda$here2 = lambda$6(letterValues);
  inlinedVal4 = mpuz2[fold$accessorSymbol](c, 0, lambda$here2);
  lambda$here1 = lambda$6(letterValues);
  inlinedVal5 = mpuz2[fold$accessorSymbol](d, 0, lambda$here1);
  lambda$here = lambda$6(letterValues);
  inlinedVal6 = mpuz2[fold$accessorSymbol](e, 0, lambda$here);
  tmp2 = inlinedVal2 * inlinedVal;
  tmp3 = tmp2 == inlinedVal4;
  if (tmp3 === true) {
    tmp5 = inlinedVal2 * inlinedVal1;
    tmp4 = tmp5 == inlinedVal5;
    if (tmp4 === true) {
      tmp7 = inlinedVal2 * inlinedVal3;
      tmp6 = tmp7 == inlinedVal6;
      if (tmp6 === true) {
        tmp9 = inlinedVal5 * 10;
        tmp10 = inlinedVal4 + tmp9;
        tmp8 = tmp10 == inlinedVal6;
        if (tmp8 === true) {
          let tmp11, tmp12, lambda$here5;
          lambda$here5 = lambda$5(letterValues);
          tmp11 = mpuz2[map$accessorSymbol](letters, lambda$here5);
          tmp12 = mpuz2.Cons(tmp11, found.value);
          found.value = tmp12;
          return runtime.Unit
        }
        return runtime.Unit;
      }
      return runtime.Unit;
    }
    return runtime.Unit;
  }
  return runtime.Unit;
};
loop = function loop(mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1) {
  let arg$Cons$0$, arg$Cons$1$, lambda$here;
  if (letters1 instanceof mpuz2.Nil.class) {
    return testOk(mpuz2, a, b, c, d, e, letters, letterValues, found)
  } else if (letters1 instanceof mpuz2.Cons.class) {
    arg$Cons$0$ = letters1.head;
    arg$Cons$1$ = letters1.tail;
    lambda$here = lambda$4(mpuz2, a, b, c, d, e, letters, letterValues, found, values, arg$Cons$1$, arg$Cons$0$);
    return mpuz2[foreach$accessorSymbol](values, lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda5 = (undefined, function (mpuz2, s, letters) {
  let lambda$here;
  lambda$here = lambda$2(mpuz2);
  return mpuz2[fold$accessorSymbol](s, letters, lambda$here)
});
lambda6 = (undefined, function (mpuz2, v) {
  let tmp;
  tmp = new mpuz2.Ref.class(false);
  return globalThis.Object.freeze([
    v,
    tmp
  ])
});
(class mpuz {
  static {
    mpuz1 = this
  }
  static get [fold$accessorSymbol]() { return mpuz.#fold; }
  static get [exists_$accessorSymbol]() { return mpuz.#exists_; }
  static get [foreach$accessorSymbol]() { return mpuz.#foreach; }
  static get [map$accessorSymbol]() { return mpuz.#map; }
  static get [sub$accessorSymbol]() { return mpuz.#sub; }
  static {
    mpuz.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        mpuz.Cons.class = this
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
        mpuz.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    mpuz.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        mpuz.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
  }
  static #fold(l, b, f) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof mpuz.Nil.class) {
        return b
      } else if (l instanceof mpuz.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, b));
        l = arg$Cons$1$;
        b = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #exists_(l, f) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof mpuz.Nil.class) {
        return false
      } else if (l instanceof mpuz.Cons.class) {
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
  static #foreach(l, f) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (l instanceof mpuz.Nil.class) {
        return runtime.Unit
      } else if (l instanceof mpuz.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        runtime.safeCall(f(arg$Cons$0$));
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #map(l, f) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof mpuz.Nil.class) {
      return mpuz.Nil
    } else if (l instanceof mpuz.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = mpuz.#map(arg$Cons$1$, f);
      return mpuz.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sub(l, i) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof mpuz.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        scrut = i == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = i - 1;
        l = arg$Cons$1$;
        i = tmp;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fillArray(arr, i, n, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      arr[i] = x;
      tmp = i + 1;
      i = tmp;
      continue loopLabel;
    }
  }
  static #array(n, x) {
    let tmp;
    tmp = [];
    return mpuz.#fillArray(tmp, 0, n, x)
  }
  static #solve(a, b, c, d, e) {
    let letterValues, found, b1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp, lambda$here, inlinedVal4, inlinedVal5, inlinedVal6, tmp1, lambda$here1, inlinedVal7, inlinedVal8, inlinedVal9, tmp2, lambda$here2, inlinedVal10, inlinedVal11, inlinedVal12, tmp3, lambda$here3, inlinedVal13, inlinedVal14, inlinedVal15, tmp4, lambda$here4, inlinedVal16, inlinedVal17, tmp5, inlinedVal18, inlinedVal19, tmp6, inlinedVal20, inlinedVal21, tmp7, inlinedVal22, tmp8, inlinedVal23, inlinedVal24, inlinedVal25, tmp9;
    b1 = mpuz.Nil;
    lambda$here = lambda$2(mpuz);
    inlinedVal1 = mpuz.#fold(a, b1, lambda$here);
    lambda$here1 = lambda$2(mpuz);
    inlinedVal4 = mpuz.#fold(b, inlinedVal1, lambda$here1);
    lambda$here2 = lambda$2(mpuz);
    inlinedVal7 = mpuz.#fold(c, inlinedVal4, lambda$here2);
    lambda$here3 = lambda$2(mpuz);
    inlinedVal10 = mpuz.#fold(d, inlinedVal7, lambda$here3);
    lambda$here4 = lambda$2(mpuz);
    inlinedVal13 = mpuz.#fold(e, inlinedVal10, lambda$here4);
    letterValues = mpuz.#array(256, 0);
    found = new mpuz.Ref.class(mpuz.Nil);
    tmp = new mpuz.Ref.class(false);
    inlinedVal2 = globalThis.Object.freeze([
      0,
      tmp
    ]);
    tmp1 = new mpuz.Ref.class(false);
    inlinedVal5 = globalThis.Object.freeze([
      1,
      tmp1
    ]);
    tmp2 = new mpuz.Ref.class(false);
    inlinedVal8 = globalThis.Object.freeze([
      2,
      tmp2
    ]);
    tmp3 = new mpuz.Ref.class(false);
    inlinedVal11 = globalThis.Object.freeze([
      3,
      tmp3
    ]);
    tmp4 = new mpuz.Ref.class(false);
    inlinedVal14 = globalThis.Object.freeze([
      4,
      tmp4
    ]);
    tmp5 = new mpuz.Ref.class(false);
    inlinedVal16 = globalThis.Object.freeze([
      5,
      tmp5
    ]);
    tmp6 = new mpuz.Ref.class(false);
    inlinedVal18 = globalThis.Object.freeze([
      6,
      tmp6
    ]);
    tmp7 = new mpuz.Ref.class(false);
    inlinedVal20 = globalThis.Object.freeze([
      7,
      tmp7
    ]);
    tmp8 = new mpuz.Ref.class(false);
    inlinedVal22 = globalThis.Object.freeze([
      8,
      tmp8
    ]);
    tmp9 = new mpuz.Ref.class(false);
    inlinedVal24 = globalThis.Object.freeze([
      9,
      tmp9
    ]);
    inlinedVal25 = mpuz1.Nil;
    inlinedVal23 = mpuz1.Cons(inlinedVal24, inlinedVal25);
    inlinedVal21 = mpuz1.Cons(inlinedVal22, inlinedVal23);
    inlinedVal19 = mpuz1.Cons(inlinedVal20, inlinedVal21);
    inlinedVal17 = mpuz1.Cons(inlinedVal18, inlinedVal19);
    inlinedVal15 = mpuz1.Cons(inlinedVal16, inlinedVal17);
    inlinedVal12 = mpuz1.Cons(inlinedVal14, inlinedVal15);
    inlinedVal9 = mpuz1.Cons(inlinedVal11, inlinedVal12);
    inlinedVal6 = mpuz1.Cons(inlinedVal8, inlinedVal9);
    inlinedVal3 = mpuz1.Cons(inlinedVal5, inlinedVal6);
    inlinedVal = mpuz1.Cons(inlinedVal2, inlinedVal3);
    loop(mpuz, a, b, c, d, e, inlinedVal13, letterValues, found, inlinedVal, inlinedVal13);
    return found.value
  }
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    tmp = mpuz.Cons(72, mpuz.Nil);
    tmp1 = mpuz.Cons(71, tmp);
    tmp2 = mpuz.Cons(65, tmp1);
    tmp3 = mpuz.Cons(66, mpuz.Nil);
    tmp4 = mpuz.Cons(70, tmp3);
    tmp5 = mpuz.Cons(69, mpuz.Nil);
    tmp6 = mpuz.Cons(69, tmp5);
    tmp7 = mpuz.Cons(66, tmp6);
    tmp8 = mpuz.Cons(67, tmp7);
    tmp9 = mpuz.Cons(68, mpuz.Nil);
    tmp10 = mpuz.Cons(70, tmp9);
    tmp11 = mpuz.Cons(72, tmp10);
    tmp12 = mpuz.Cons(71, tmp11);
    tmp13 = mpuz.Cons(69, mpuz.Nil);
    tmp14 = mpuz.Cons(74, tmp13);
    tmp15 = mpuz.Cons(73, tmp14);
    tmp16 = mpuz.Cons(71, tmp15);
    tmp17 = mpuz.Cons(70, tmp16);
    return main_solve$solve(tmp2, tmp4, tmp8, tmp12, tmp17)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mpuz"];
});
export { loop as _$_modulePrivate_$_loop };
export { recordResult as _$_modulePrivate_$_recordResult };
export { stringValue as _$_modulePrivate_$_stringValue };
export { letterValue as _$_modulePrivate_$_letterValue };
export { setLetterValue as _$_modulePrivate_$_setLetterValue };
export { testOk as _$_modulePrivate_$_testOk };
export { mpuz1 as _$_modulePrivate_$_mpuz };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { main_solve$solve as _$_modulePrivate_$_main_solve$solve };
export { main_solve_map$map as _$_modulePrivate_$_main_solve_map$map };
export { main_solve_fold$fold as _$_modulePrivate_$_main_solve_fold$fold };
export { solve_fold$fold as _$_modulePrivate_$_solve_fold$fold };
export { solve_map$map as _$_modulePrivate_$_solve_map$map };
export { main_solve_map$l_Cons as _$_modulePrivate_$_main_solve_map$l_Cons };
export { main_solve_map$l_rest as _$_modulePrivate_$_main_solve_map$l_rest };
export { main_solve_map$l_Nil as _$_modulePrivate_$_main_solve_map$l_Nil };
export { main_solve_fold$l_Cons as _$_modulePrivate_$_main_solve_fold$l_Cons };
export { main_solve_fold$l_rest as _$_modulePrivate_$_main_solve_fold$l_rest };
export { main_solve_fold$l_Nil as _$_modulePrivate_$_main_solve_fold$l_Nil };
export { solve_fold$l_Cons as _$_modulePrivate_$_solve_fold$l_Cons };
export { solve_fold$l_rest as _$_modulePrivate_$_solve_fold$l_rest };
export { solve_fold$l_Nil as _$_modulePrivate_$_solve_fold$l_Nil };
export { solve_map$l_Cons as _$_modulePrivate_$_solve_map$l_Cons };
export { solve_map$l_rest as _$_modulePrivate_$_solve_map$l_rest };
export { solve_map$l_Nil as _$_modulePrivate_$_solve_map$l_Nil };
export { solve_map$l_Cons$worker as _$_modulePrivate_$_solve_map$l_Cons$worker };
export { main_solve_map$l_Cons$worker as _$_modulePrivate_$_main_solve_map$l_Cons$worker };
export default mpuz1;
