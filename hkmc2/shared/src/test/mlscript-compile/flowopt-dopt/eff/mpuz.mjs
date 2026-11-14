const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const fold$accessorSymbol = globalThis.Symbol("fold");
const exists_$accessorSymbol = globalThis.Symbol("exists_");
const foreach$accessorSymbol = globalThis.Symbol("foreach");
const map$accessorSymbol = globalThis.Symbol("map");
const sub$accessorSymbol = globalThis.Symbol("sub");
let loop, mpuz1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lambda$3, lambda$4;
lambda$4 = (undefined, function (letterValues) {
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
lambda$3 = (undefined, function (letterValues) {
  return (c) => {
    let inlinedVal;
    inlinedVal = letterValues.at(c);
    return globalThis.Object.freeze([
      c,
      inlinedVal
    ])
  }
});
lambda$2 = (undefined, function (mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1) {
  return (p) => {
    return lambda1(mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1, p)
  }
});
lambda1 = (undefined, function (mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1, c1, p) {
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
lambda$1 = (undefined, function (c) {
  return (c1) => {
    return c == c1
  }
});
lambda$ = (undefined, function (mpuz2) {
  return (c, letters) => {
    return lambda2(mpuz2, c, letters)
  }
});
lambda2 = (undefined, function (mpuz2, c, letters) {
  let scrut, lambda$here;
  lambda$here = lambda$1(c);
  scrut = mpuz2[exists_$accessorSymbol](letters, lambda$here);
  if (scrut === true) {
    return letters
  }
  return mpuz2.Cons(c, letters);
});
loop = function loop(mpuz2, a, b, c, d, e, letters, letterValues, found, values, letters1) {
  let arg$Cons$0$, arg$Cons$1$, lambda$here;
  if (letters1 instanceof mpuz2.Nil.class) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5;
    tmp = mpuz2[sub$accessorSymbol](b, 1);
    inlinedVal = letterValues.at(tmp);
    tmp1 = mpuz2[sub$accessorSymbol](b, 0);
    inlinedVal1 = letterValues.at(tmp1);
    lambda$here1 = lambda$4(letterValues);
    inlinedVal2 = mpuz2[fold$accessorSymbol](a, 0, lambda$here1);
    lambda$here2 = lambda$4(letterValues);
    inlinedVal3 = mpuz2[fold$accessorSymbol](b, 0, lambda$here2);
    lambda$here3 = lambda$4(letterValues);
    inlinedVal4 = mpuz2[fold$accessorSymbol](c, 0, lambda$here3);
    lambda$here4 = lambda$4(letterValues);
    inlinedVal5 = mpuz2[fold$accessorSymbol](d, 0, lambda$here4);
    lambda$here5 = lambda$4(letterValues);
    inlinedVal6 = mpuz2[fold$accessorSymbol](e, 0, lambda$here5);
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
            let tmp11, tmp12, lambda$here6;
            lambda$here6 = lambda$3(letterValues);
            tmp11 = mpuz2[map$accessorSymbol](letters, lambda$here6);
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
  } else if (letters1 instanceof mpuz2.Cons.class) {
    arg$Cons$0$ = letters1.head;
    arg$Cons$1$ = letters1.tail;
    lambda$here = lambda$2(mpuz2, a, b, c, d, e, letters, letterValues, found, values, arg$Cons$1$, arg$Cons$0$);
    return mpuz2[foreach$accessorSymbol](values, lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
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
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, found, b, inlinedVal, tmp18, arr, i, n, x, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp19, lambda$here, inlinedVal6, inlinedVal7, inlinedVal8, tmp20, lambda$here1, inlinedVal9, inlinedVal10, inlinedVal11, tmp21, lambda$here2, inlinedVal12, inlinedVal13, inlinedVal14, tmp22, lambda$here3, inlinedVal15, inlinedVal16, inlinedVal17, tmp23, lambda$here4, inlinedVal18, inlinedVal19, tmp24, inlinedVal20, inlinedVal21, tmp25, inlinedVal22, inlinedVal23, tmp26, inlinedVal24, tmp27, inlinedVal25, inlinedVal26, inlinedVal27, tmp28;
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
    b = mpuz1.Nil;
    lambda$here = lambda$(mpuz1);
    inlinedVal3 = mpuz1.#fold(tmp2, b, lambda$here);
    lambda$here1 = lambda$(mpuz1);
    inlinedVal6 = mpuz1.#fold(tmp4, inlinedVal3, lambda$here1);
    lambda$here2 = lambda$(mpuz1);
    inlinedVal9 = mpuz1.#fold(tmp8, inlinedVal6, lambda$here2);
    lambda$here3 = lambda$(mpuz1);
    inlinedVal12 = mpuz1.#fold(tmp12, inlinedVal9, lambda$here3);
    lambda$here4 = lambda$(mpuz1);
    inlinedVal15 = mpuz1.#fold(tmp17, inlinedVal12, lambda$here4);
    inlinedVal = inlinedVal15;
    tmp18 = [];
    arr = tmp18;
    i = 0;
    n = 256;
    x = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp29;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal1 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp29 = i + 1;
        i = tmp29;
        continue loopLabel;
      }
    }
    found = new mpuz1.Ref.class(mpuz1.Nil);
    tmp19 = new mpuz1.Ref.class(false);
    inlinedVal4 = globalThis.Object.freeze([
      0,
      tmp19
    ]);
    tmp20 = new mpuz1.Ref.class(false);
    inlinedVal7 = globalThis.Object.freeze([
      1,
      tmp20
    ]);
    tmp21 = new mpuz1.Ref.class(false);
    inlinedVal10 = globalThis.Object.freeze([
      2,
      tmp21
    ]);
    tmp22 = new mpuz1.Ref.class(false);
    inlinedVal13 = globalThis.Object.freeze([
      3,
      tmp22
    ]);
    tmp23 = new mpuz1.Ref.class(false);
    inlinedVal16 = globalThis.Object.freeze([
      4,
      tmp23
    ]);
    tmp24 = new mpuz1.Ref.class(false);
    inlinedVal18 = globalThis.Object.freeze([
      5,
      tmp24
    ]);
    tmp25 = new mpuz1.Ref.class(false);
    inlinedVal20 = globalThis.Object.freeze([
      6,
      tmp25
    ]);
    tmp26 = new mpuz1.Ref.class(false);
    inlinedVal22 = globalThis.Object.freeze([
      7,
      tmp26
    ]);
    tmp27 = new mpuz1.Ref.class(false);
    inlinedVal24 = globalThis.Object.freeze([
      8,
      tmp27
    ]);
    tmp28 = new mpuz1.Ref.class(false);
    inlinedVal26 = globalThis.Object.freeze([
      9,
      tmp28
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
    loop(mpuz1, tmp2, tmp4, tmp8, tmp12, tmp17, inlinedVal, inlinedVal1, found, inlinedVal2, inlinedVal);
    return found.value
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mpuz"];
});
export { loop as _$_modulePrivate_$_loop };
export { mpuz1 as _$_modulePrivate_$_mpuz };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export default mpuz1;
