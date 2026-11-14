const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const rands$accessorSymbol = globalThis.Symbol("rands");
const singleTest$accessorSymbol = globalThis.Symbol("singleTest");
const doInput$accessorSymbol = globalThis.Symbol("doInput");
let f, chop_, g, f1, f2, square, witness, mTest, primetest1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, lambda$1, lambda$2, square$, lambda$3, f_g;
f_g = function f_g(id, param0, param1, param2, param3, param4) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut;
          scrut = param3 == 0;
          if (scrut === true) {
            return param4
          }
          {
            let param3_tmp, param2_tmp;
            param3_tmp = param3;
            param2_tmp = param2;
            param2 = param4;
            param3 = param2_tmp;
            param4 = param3_tmp;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let tmp, tmp1, tmp2, inlinedVal, inlinedVal1, tmp3, inlinedVal2, tmp4;
          tmp4 = param4 / 2;
          inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp4));
          tmp3 = 2 * inlinedVal2;
          inlinedVal1 = param4 - tmp3;
          inlinedVal = inlinedVal1 == 0;
          if (inlinedVal === true) {
            let inlinedVal3, inlinedVal4, tmp5, tmp6, inlinedVal5, tmp7;
            tmp = param3 * param3;
            tmp7 = tmp / param1;
            inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp7));
            tmp6 = param1 * inlinedVal5;
            inlinedVal3 = tmp - tmp6;
            tmp5 = param4 / 2;
            inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp5));
            param3 = inlinedVal3;
            param4 = inlinedVal4;
            id = 1;
            continue loopLabel
          }
          {
            let inlinedVal3, tmp5, inlinedVal4, tmp6;
            tmp1 = param4 - 1;
            tmp2 = param3 * param2;
            tmp6 = tmp2 / param1;
            inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp6));
            tmp5 = param1 * inlinedVal4;
            inlinedVal3 = tmp2 - tmp5;
            param2 = param3;
            param3 = tmp1;
            param4 = inlinedVal3;
            id = 0;
            continue loopLabel;
          }
        }
    }
  }
};
lambda$3 = (undefined, function (primetest2, ls) {
  return (state) => {
    return primetest2[doInput$accessorSymbol](state, ls)
  }
});
lambda5 = (undefined, function (primetest2, ls, state) {
  return primetest2[doInput$accessorSymbol](state, ls)
});
mTest = function mTest(primetest2, n, k, rs) {
  loopLabel: while (true) {
    let scrut, scrut1, element1$, element0$, tmp;
    scrut = k == 0;
    if (scrut === true) {
      return globalThis.Object.freeze([
        true,
        rs
      ])
    }
    {
      let inlinedVal, tmp1;
      tmp1 = n - 1;
      inlinedVal = f2(0, tmp1);
      scrut1 = primetest2[singleTest$accessorSymbol](n, inlinedVal, rs);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        if (element0$ === true) {
          tmp = k - 1;
          k = tmp;
          rs = element1$;
          continue loopLabel
        }
        return globalThis.Object.freeze([
          false,
          element1$
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
square$ = function square$(n) {
  return (x) => {
    return square(n, x)
  }
};
square = function square(n, x) {
  let tmp, tmp1, inlinedVal, tmp2;
  tmp = x * x;
  tmp2 = tmp / n;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = n * inlinedVal;
  return tmp - tmp1
};
witness = function witness(n, ls) {
  loopLabel: while (true) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return false
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = n - 1;
      scrut = arg$Cons$0$ == tmp;
      if (scrut === true) {
        return true
      }
      scrut1 = arg$Cons$0$ == 1;
      if (scrut1 === true) {
        return false
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda4 = (undefined, function (x) {
  let tmp, inlinedVal, tmp1;
  tmp1 = x / 65536;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = 65536 * inlinedVal;
  return x - tmp
});
f2 = function f(k, q) {
  loopLabel: while (true) {
    let scrut, element1$, element0$, tmp, inlinedVal, inlinedVal1, inlinedVal2, tmp1, tmp2, inlinedVal3, tmp3;
    tmp2 = q / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
    tmp3 = q / 2;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
    tmp1 = 2 * inlinedVal3;
    inlinedVal2 = q - tmp1;
    inlinedVal = globalThis.Object.freeze([
      inlinedVal1,
      inlinedVal2
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      scrut = element1$ == 0;
      if (scrut === true) {
        tmp = k + 1;
        k = tmp;
        q = element0$;
        continue loopLabel
      }
      return globalThis.Object.freeze([
        k,
        q
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$2 = (undefined, function (primetest2, s1__, s2__, z) {
  return () => {
    return lambda2(primetest2, s1__, s2__, z)
  }
});
lambda$1 = (undefined, function (primetest2, s1__, s2__, z) {
  return () => {
    let tmp;
    tmp = primetest2[rands$accessorSymbol](s1__, s2__);
    return NofibPrelude.LzCons(z, tmp)
  }
});
lambda2 = (undefined, function (primetest2, s1__, s2__, z) {
  let tmp, tmp1;
  tmp = z + 2147483562;
  tmp1 = primetest2[rands$accessorSymbol](s1__, s2__);
  return NofibPrelude.LzCons(tmp, tmp1)
});
lambda3 = (undefined, function (primetest2, s1__, s2__, z) {
  let tmp;
  tmp = primetest2[rands$accessorSymbol](s1__, s2__);
  return NofibPrelude.LzCons(z, tmp)
});
g = function g(primetest2, m, c, a, b) {
  return f_g(1, primetest2, m, c, a, b)
};
f1 = function f(primetest2, m, a, b, c) {
  return f_g(0, primetest2, m, a, b, c)
};
chop_ = function chop_(b, a, n) {
  loopLabel: while (true) {
    let scrut, element1$, element0$, tmp, inlinedVal, inlinedVal1, inlinedVal2, tmp1, tmp2, inlinedVal3, tmp3;
    tmp2 = n / b;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
    tmp3 = n / b;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
    tmp1 = b * inlinedVal3;
    inlinedVal2 = n - tmp1;
    inlinedVal = globalThis.Object.freeze([
      inlinedVal1,
      inlinedVal2
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      scrut = n == 0;
      if (scrut === true) {
        return a
      }
      tmp = NofibPrelude.Cons(element1$, a);
      a = tmp;
      n = element0$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$ = (undefined, function (b) {
  return (a, x) => {
    let tmp;
    tmp = a * b;
    return tmp + x
  }
});
lambda1 = (undefined, function (b, a, x) {
  let tmp;
  tmp = a * b;
  return tmp + x
});
lambda = (undefined, function (x) {
  return x == "|"
});
f = function f(primetest2, l1, a) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l1 instanceof NofibPrelude.Nil.class) {
      return a
    } else if (l1 instanceof NofibPrelude.Cons.class) {
      let inlinedVal, x, inlinedVal1;
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = 10 * a;
      x = arg$Cons$0$;
      inlinedVal1 = runtime.safeCall(x.charCodeAt(0));
      inlinedVal = inlinedVal1 - 48;
      tmp1 = tmp + inlinedVal;
      l1 = arg$Cons$1$;
      a = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class primetest {
  static {
    primetest1 = this
  }
  static get [rands$accessorSymbol]() { return primetest.#rands; }
  static get [singleTest$accessorSymbol]() { return primetest.#singleTest; }
  static get [doInput$accessorSymbol]() { return primetest.#doInput; }
  static #even(x) {
    let inlinedVal, tmp, inlinedVal1, tmp1;
    tmp1 = x / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = 2 * inlinedVal1;
    inlinedVal = x - tmp;
    return inlinedVal == 0
  }
  static #int_val_of_char(x) {
    let x1, inlinedVal;
    x1 = x;
    inlinedVal = runtime.safeCall(x1.charCodeAt(0));
    return inlinedVal - 48
  }
  static #int_val_of_string(s) {
    return f(primetest, s, 0)
  }
  static #break_(p, ls) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(p(arg$Cons$0$));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = primetest.#break_(p, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lines(s) {
    let scrut, element1$, element0$, arg$Cons$1$, tmp;
    scrut = primetest.#break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(element0$, tmp)
      } else if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = primetest.#lines(arg$Cons$1$);
        return NofibPrelude.Cons(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #makeNumber(b, ls) {
    return NofibPrelude.foldl(lambda$(b), 0, ls)
  }
  static #chop(b, n) {
    return chop_(b, NofibPrelude.Nil, n)
  }
  static #powerMod(a, b, m) {
    let scrut, tmp;
    scrut = b == 0;
    if (scrut === true) {
      return 1
    }
    {
      let inlinedVal, tmp1, inlinedVal1, tmp2;
      tmp2 = a / m;
      inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
      tmp1 = m * inlinedVal1;
      inlinedVal = a - tmp1;
      tmp = b - 1;
      return f_g(0, primetest, m, inlinedVal, tmp, inlinedVal);
    }
  }
  static #log2(x) {
    let tmp;
    tmp = primetest.#chop(2, x);
    return l(NofibPrelude, tmp, 0)
  }
  static #rands(s1, s2) {
    let s1_, scrut, s2_, scrut1, z, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1, tmp10, tmp11;
    tmp11 = s1 / 53668;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp11));
    tmp = inlinedVal * 53668;
    tmp1 = s1 - tmp;
    tmp2 = 40014 * tmp1;
    tmp3 = inlinedVal * 12211;
    s1_ = tmp2 - tmp3;
    scrut = s1_ < 0;
    if (scrut === true) {
      tmp4 = s1_ + 2147483563;
    } else {
      tmp4 = s1_;
    }
    tmp10 = s2 / 52774;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp10));
    tmp5 = inlinedVal1 * 52774;
    tmp6 = s2 - tmp5;
    tmp7 = 40692 * tmp6;
    tmp8 = inlinedVal1 * 3791;
    s2_ = tmp7 - tmp8;
    scrut1 = s2_ < 0;
    if (scrut1 === true) {
      tmp9 = s2_ + 2147483399;
    } else {
      tmp9 = s2_;
    }
    z = tmp4 - tmp9;
    scrut2 = z < 1;
    if (scrut2 === true) {
      return NofibPrelude.Lazy(lambda$2(primetest, tmp4, tmp9, z))
    }
    return NofibPrelude.Lazy(lambda$1(primetest, tmp4, tmp9, z));
  }
  static #randomInts(s1, s2) {
    let scrut, scrut1, scrut2, scrut3;
    scrut = 1 <= s1;
    if (scrut === true) {
      scrut3 = s1 <= 2147483562;
      if (scrut3 === true) {
        scrut2 = 1 <= s2;
        if (scrut2 === true) {
          scrut1 = s2 <= 2147483398;
          if (scrut1 === true) {
            return primetest.#rands(s1, s2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #findKQ(n) {
    let tmp;
    tmp = n - 1;
    return f2(0, tmp)
  }
  static #uniform(nns, rrs) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2;
    if (nns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = nns.head;
      arg$Cons$1$ = nns.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        if (rrs instanceof NofibPrelude.Cons.class) {
          let inlinedVal, tmp3, inlinedVal1, tmp4;
          arg$Cons$0$1 = rrs.head;
          tmp4 = arg$Cons$0$1 / arg$Cons$0$;
          inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
          tmp3 = arg$Cons$0$ * inlinedVal1;
          inlinedVal = arg$Cons$0$1 - tmp3;
          return NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (rrs instanceof NofibPrelude.Cons.class) {
        let inlinedVal, tmp3, inlinedVal1, tmp4;
        arg$Cons$0$1 = rrs.head;
        arg$Cons$1$1 = rrs.tail;
        tmp = arg$Cons$0$ + 1;
        tmp4 = arg$Cons$0$1 / tmp;
        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
        tmp3 = tmp * inlinedVal1;
        inlinedVal = arg$Cons$0$1 - tmp3;
        scrut = inlinedVal == arg$Cons$0$;
        if (scrut === true) {
          tmp1 = primetest.#uniform(arg$Cons$1$, arg$Cons$1$1);
          return NofibPrelude.Cons(inlinedVal, tmp1)
        }
        tmp2 = NofibPrelude.map(lambda4, arg$Cons$1$1);
        return NofibPrelude.Cons(inlinedVal, tmp2);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #random(n, rs) {
    let ns, element1$, element0$, tmp, tmp1, inlinedVal, inlinedVal1, tmp2, tmp3;
    ns = primetest.#chop(65536, n);
    inlinedVal = l(NofibPrelude, ns, 0);
    tmp2 = NofibPrelude.take_lz(inlinedVal, rs);
    tmp3 = NofibPrelude.leave_lz(inlinedVal, rs);
    inlinedVal1 = globalThis.Object.freeze([
      tmp2,
      tmp3
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal1, 0);
      element1$ = runtime.Tuple.get(inlinedVal1, 1);
      tmp = primetest.#uniform(ns, element0$);
      tmp1 = primetest.#makeNumber(65536, tmp);
      return globalThis.Object.freeze([
        tmp1,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #singleTestX(n, kq, x) {
    let scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, square$here;
    if (runtime.Tuple.isArrayLike(kq) && kq.length === 2) {
      element0$ = runtime.Tuple.get(kq, 0);
      element1$ = runtime.Tuple.get(kq, 1);
      tmp = primetest.#powerMod(x, element1$, n);
      square$here = square$(n);
      tmp1 = NofibPrelude.iterate(square$here, tmp);
      scrut = NofibPrelude.take_lz(element0$, tmp1);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = scrut.head;
        arg$Cons$1$ = scrut.tail;
        tmp2 = arg$Cons$0$ == 1;
        if (tmp2 === false) {
          tmp4 = n - 1;
          tmp3 = arg$Cons$0$ == tmp4;
          if (tmp3 === false) {
            return witness(n, arg$Cons$1$)
          }
          return true;
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #singleTest(n, kq, rs) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2;
    tmp = n - 2;
    scrut = primetest.#random(tmp, rs);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = 2 + element0$;
      tmp2 = primetest.#singleTestX(n, kq, tmp1);
      return globalThis.Object.freeze([
        tmp2,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #multiTest(k, rs, n) {
    let tmp, tmp1, tmp2;
    tmp = n <= 1;
    if (tmp === false) {
      tmp1 = primetest.#even(n);
      if (tmp1 === true) {
        tmp2 = n == 2;
        return globalThis.Object.freeze([
          tmp2,
          rs
        ])
      }
      return mTest(primetest, n, k, rs);
    }
    tmp2 = n == 2;
    return globalThis.Object.freeze([
      tmp2,
      rs
    ]);
  }
  static #doLine(cs, cont, rs) {
    let n, scrut, element1$, element0$, tmp, tmp1;
    n = primetest.#int_val_of_string(cs);
    scrut = primetest.#multiTest(100, rs, n);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element0$ === true) {
        tmp = runtime.safeCall(cont(element1$));
        return NofibPrelude.Cons("Probably prime", tmp)
      }
      tmp1 = runtime.safeCall(cont(element1$));
      return NofibPrelude.Cons("Composite", tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #doInput(state, lls) {
    let arg$Cons$0$, arg$Cons$1$;
    if (lls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (lls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = lls.head;
      arg$Cons$1$ = lls.tail;
      return primetest.#doLine(arg$Cons$0$, lambda$3(primetest, arg$Cons$1$), state)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #process(process_arg1) {
    let tmp;
    tmp = primetest.#randomInts(111, 47);
    return primetest.#doInput(tmp, process_arg1)
  }
  static #testPrimetest_nofib(d) {
    let tmp, inlinedVal;
    inlinedVal = go(NofibPrelude, "24|48|47|1317|8901", 0);
    tmp = primetest.#lines(inlinedVal);
    return primetest.#process(tmp)
  }
  static main() {
    let tmp;
    tmp = primetest.#testPrimetest_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "primetest"];
});
export { f as _$_modulePrivate_$_f };
export { chop_ as _$_modulePrivate_$_chop_ };
export { g as _$_modulePrivate_$_g };
export { f1 as _$_modulePrivate_$_f1 };
export { f2 as _$_modulePrivate_$_f2 };
export { square as _$_modulePrivate_$_square };
export { witness as _$_modulePrivate_$_witness };
export { mTest as _$_modulePrivate_$_mTest };
export { primetest1 as _$_modulePrivate_$_primetest };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { square$ as _$_modulePrivate_$_square$ };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { f_g as _$_modulePrivate_$_f_g };
export default primetest1;
