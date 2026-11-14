const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const power$accessorSymbol = globalThis.Symbol("power");
let rsa1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2;
lambda$2 = (undefined, function (rsa2, n, e) {
  return (c) => {
    return lambda3(rsa2, n, e, c)
  }
});
lambda3 = (undefined, function (rsa2, n, e, c) {
  let tmp, inlinedVal, tmp1;
  inlinedVal = NofibPrelude.foldl(lambda$1(rsa2), rsa2.const0, c);
  tmp = rsa2[power$accessorSymbol](e, n, inlinedVal);
  tmp1 = tmp + "";
  return go(NofibPrelude, tmp1, 0)
});
lambda$1 = (undefined, function (rsa2) {
  return (x, y) => {
    return lambda2(rsa2, x, y)
  }
});
lambda2 = (undefined, function (rsa2, x, y) {
  let x1, inlinedVal, c, inlinedVal1, inlinedVal2;
  x1 = rsa2.const128;
  inlinedVal = x1 * x;
  c = y;
  inlinedVal1 = runtime.safeCall(c.codePointAt(0));
  inlinedVal2 = runtime.safeCall(globalThis.BigInt(inlinedVal1));
  return inlinedVal + inlinedVal2
});
lambda1 = (undefined, function (l1) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(l1, tmp)
});
lambda$ = (undefined, function (rsa2) {
  return (acc, c) => {
    return lambda(rsa2, acc, c)
  }
});
lambda = (undefined, function (rsa2, acc, c) {
  let c1, inlinedVal, inlinedVal1, y, inlinedVal2;
  c1 = c;
  inlinedVal = runtime.safeCall(c1.codePointAt(0));
  inlinedVal1 = runtime.safeCall(globalThis.BigInt(inlinedVal));
  y = rsa2.const31;
  inlinedVal2 = acc * y;
  return inlinedVal1 + inlinedVal2
});
(class rsa {
  static {
    rsa1 = this
  }
  static get [power$accessorSymbol]() { return rsa.#power; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, s, inlinedVal;
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
    tmp5 = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/rsa.faststdin"));
    tmp6 = runtime.safeCall(tmp5.toString());
    s = tmp6;
    inlinedVal = go(NofibPrelude, s, 0);
    rsa.intput = inlinedVal;
  }
  static #z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  }
  static #string_of_z(x) {
    let tmp;
    tmp = x + "";
    return go(NofibPrelude, tmp, 0)
  }
  static #z_add(x, y) {
    return x + y
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
  static #int_if_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  }
  static #hash(str) {
    return NofibPrelude.foldl(lambda$(rsa), rsa.const0, str)
  }
  static #and_(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$0$ === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda1, ls);
    return NofibPrelude.concat(tmp)
  }
  static #even(a) {
    let tmp;
    tmp = rsa.#z_mod(a, rsa.const2);
    return tmp === rsa.const0
  }
  static #code(ls) {
    return NofibPrelude.foldl(lambda$1(rsa), rsa.const0, ls)
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
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = rsa.#collect(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  }
  static #size(n) {
    let tmp, tmp1, inlinedVal, tmp2;
    tmp = rsa.#string_of_z(n);
    inlinedVal = l(NofibPrelude, tmp, 0);
    tmp1 = inlinedVal * 47;
    tmp2 = tmp1 / 100;
    return runtime.safeCall(globalThis.Math.floor(tmp2))
  }
  static #encrypt(n, e, s) {
    let tmp, tmp1, tmp2;
    tmp = rsa.#size(n);
    tmp1 = rsa.#collect(tmp, s);
    tmp2 = NofibPrelude.map(lambda$2(rsa, n, e), tmp1);
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
  static #testRsa_nofib(_) {
    let tmp, tmp1, tmp2;
    tmp = rsa.#z_of_int("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107");
    tmp1 = rsa.#z_of_int("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213");
    tmp2 = rsa.#encrypt(tmp, tmp1, rsa.intput);
    return rsa.#hash(tmp2)
  }
  static main() {
    return rsa.#testRsa_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "rsa"];
});
export { rsa1 as _$_modulePrivate_$_rsa };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export default rsa1;
