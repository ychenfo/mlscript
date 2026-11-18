const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const foldl$accessorSymbol = globalThis.Symbol("foldl");
const power$accessorSymbol = globalThis.Symbol("power");
let rsa1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lambda$3;
lambda$3 = (undefined, function (rsa2, n, e) {
  return (c) => {
    return lambda2(rsa2, n, e, c)
  }
});
lambda2 = (undefined, function (rsa2, n, e, c) {
  let tmp, inlinedVal, tmp1, lambda$here;
  lambda$here = lambda$2(rsa2);
  inlinedVal = rsa2[foldl$accessorSymbol](lambda$here, rsa2.const0, c);
  tmp = rsa2[power$accessorSymbol](e, n, inlinedVal);
  tmp1 = tmp + "";
  return NofibPrelude.nofibStringToList(tmp1)
});
lambda$2 = (undefined, function (rsa2) {
  return (x, y) => {
    return lambda1(rsa2, x, y)
  }
});
lambda1 = (undefined, function (rsa2, x, y) {
  let x1, inlinedVal, inlinedVal1, inlinedVal2;
  x1 = rsa2.const128;
  inlinedVal = x1 * x;
  inlinedVal1 = runtime.safeCall(y.codePointAt(0));
  inlinedVal2 = runtime.safeCall(globalThis.BigInt(inlinedVal1));
  return inlinedVal + inlinedVal2
});
lambda$1 = (undefined, function (rsa2) {
  return (l) => {
    let tmp;
    tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return rsa2[append$accessorSymbol](l, tmp)
  }
});
lambda$ = (undefined, function (rsa2) {
  return (acc, c) => {
    return lambda(rsa2, acc, c)
  }
});
lambda = (undefined, function (rsa2, acc, c) {
  let inlinedVal, inlinedVal1, y, inlinedVal2;
  inlinedVal = runtime.safeCall(c.codePointAt(0));
  inlinedVal1 = runtime.safeCall(globalThis.BigInt(inlinedVal));
  y = rsa2.const31;
  inlinedVal2 = acc * y;
  return inlinedVal1 + inlinedVal2
});
(class rsa {
  static {
    rsa1 = this
  }
  static get [append$accessorSymbol]() { return rsa.#append; }
  static get [foldl$accessorSymbol]() { return rsa.#foldl; }
  static get [power$accessorSymbol]() { return rsa.#power; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = rsa.#z_of_int(0);
    rsa.const0 = tmp;
    tmp1 = rsa.#z_of_int(31);
    rsa.const31 = tmp1;
    tmp2 = rsa.#z_of_int(1);
    rsa.const1 = tmp2;
    tmp3 = rsa.#z_of_int(2);
    rsa.const2 = tmp3;
    tmp4 = rsa.#z_of_int(128);
    rsa.const128 = tmp4;
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = rsa.#map(f, arg$Cons$1$);
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
      tmp1 = rsa.#take(tmp, arg$Cons$1$);
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
      tmp = rsa.#append(arg$Cons$1$, ys);
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
      tmp = rsa.#concat(arg$Cons$1$);
      return rsa.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  }
  static #string_of_z(x) {
    let tmp;
    tmp = x + "";
    return NofibPrelude.nofibStringToList(tmp)
  }
  static #z_mul(x, y) {
    return x * y
  }
  static #z_sub(x, y) {
    return x - y
  }
  static #z_div(x, y) {
    return x / y
  }
  static #z_mod(x, y) {
    return x % y
  }
  static #z_equal(x, y) {
    return x === y
  }
  static #z_sqr(x) {
    return x * x
  }
  static #hash(str) {
    let lambda$here;
    lambda$here = lambda$(rsa);
    return rsa.#foldl(lambda$here, rsa.const0, str)
  }
  static #unlines(ls) {
    let tmp, lambda$here;
    lambda$here = lambda$1(rsa);
    tmp = rsa.#map(lambda$here, ls);
    return rsa.#concat(tmp)
  }
  static #even(a) {
    let tmp;
    tmp = rsa.#z_mod(a, rsa.const2);
    return tmp === rsa.const0
  }
  static #collect(n, xs) {
    let scrut, tmp, tmp1, tmp2;
    scrut = n === 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    tmp = rsa.#take(n, xs);
    tmp1 = rsa.#leave(n, xs);
    tmp2 = rsa.#collect(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  }
  static #size(n) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = rsa.#string_of_z(n);
    tmp1 = rsa.#listLen(tmp);
    tmp2 = tmp1 * 47;
    tmp3 = tmp2 / 100;
    return runtime.safeCall(globalThis.Math.floor(tmp3))
  }
  static #encrypt(n, e, s) {
    let tmp, tmp1, tmp2, lambda$here;
    tmp = rsa.#size(n);
    tmp1 = rsa.#collect(tmp, s);
    lambda$here = lambda$3(rsa, n, e);
    tmp2 = rsa.#map(lambda$here, tmp1);
    return rsa.#unlines(tmp2)
  }
  static #power(n, m, x) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = rsa.#z_equal(n, rsa.const0);
    if (scrut === true) {
      return rsa.const1
    }
    scrut1 = rsa.#even(n);
    if (scrut1 === true) {
      tmp = rsa.#z_div(n, rsa.const2);
      tmp1 = rsa.#power(tmp, m, x);
      tmp2 = rsa.#z_sqr(tmp1);
      return rsa.#z_mod(tmp2, m)
    }
    tmp3 = rsa.#z_sub(n, rsa.const1);
    tmp4 = rsa.#power(tmp3, m, x);
    tmp5 = rsa.#z_mul(x, tmp4);
    return rsa.#z_mod(tmp5, m);
  }
  static #testRsa_nofib(input) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = rsa.#z_of_int("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107");
    tmp1 = rsa.#z_of_int("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213");
    tmp2 = NofibPrelude.nofibStringToList(input);
    tmp3 = rsa.#encrypt(tmp, tmp1, tmp2);
    return rsa.#hash(tmp3)
  }
  static main(input) {
    return rsa.#testRsa_nofib(input)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "rsa"];
});
export default rsa1;
