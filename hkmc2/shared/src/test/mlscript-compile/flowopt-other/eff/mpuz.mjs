const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const fold$accessorSymbol = globalThis.Symbol("fold");
const exists_$accessorSymbol = globalThis.Symbol("exists_");
const foreach$accessorSymbol = globalThis.Symbol("foreach");
const map$accessorSymbol = globalThis.Symbol("map");
const sub$accessorSymbol = globalThis.Symbol("sub");
let loop, recordResult, stringValue, letterValue, setLetterValue, testOk, mpuz1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6;
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
    let letters, letterValues, found, values, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda$here, lambda$here1;
    tmp = mpuz.Cons(e, mpuz.Nil);
    tmp1 = mpuz.Cons(d, tmp);
    tmp2 = mpuz.Cons(c, tmp1);
    tmp3 = mpuz.Cons(b, tmp2);
    tmp4 = mpuz.Cons(a, tmp3);
    lambda$here = lambda$1(mpuz);
    letters = mpuz.#fold(tmp4, mpuz.Nil, lambda$here);
    letterValues = mpuz.#array(256, 0);
    found = new mpuz.Ref.class(mpuz.Nil);
    tmp5 = mpuz.Cons(9, mpuz.Nil);
    tmp6 = mpuz.Cons(8, tmp5);
    tmp7 = mpuz.Cons(7, tmp6);
    tmp8 = mpuz.Cons(6, tmp7);
    tmp9 = mpuz.Cons(5, tmp8);
    tmp10 = mpuz.Cons(4, tmp9);
    tmp11 = mpuz.Cons(3, tmp10);
    tmp12 = mpuz.Cons(2, tmp11);
    tmp13 = mpuz.Cons(1, tmp12);
    tmp14 = mpuz.Cons(0, tmp13);
    lambda$here1 = lambda$(mpuz);
    values = mpuz.#map(tmp14, lambda$here1);
    loop(mpuz, a, b, c, d, e, letters, letterValues, found, values, letters);
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
    return mpuz.#solve(tmp2, tmp4, tmp8, tmp12, tmp17)
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
export default mpuz1;
