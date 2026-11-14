const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda as lambda } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda8 as lambda1 } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$5 as lambda$ } from "./NofibPrelude.mjs";
let f, lscomp, proc, listcomp, secretary1, lambda2, lambda3, lambda4, lambda$1, proc$, lambda$2;
listcomp = function listcomp(secretary2, n, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    let proc1, inlinedVal, tmp1, tmp2, tmp3, inlinedVal1;
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    proc1 = proc$(arg$Cons$0$);
    tmp1 = NofibPrelude.enumFromTo(1, n);
    tmp2 = lscomp(secretary2, 100, proc1, tmp1);
    tmp3 = NofibPrelude.filter(lambda3, tmp2);
    inlinedVal1 = l(NofibPrelude, tmp3, 0);
    inlinedVal = inlinedVal1 / n;
    tmp = listcomp(secretary2, n, arg$Cons$1$);
    return NofibPrelude.Cons(inlinedVal, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$2 = (undefined, function (bestk) {
  return (x) => {
    return x < bestk
  }
});
lambda4 = (undefined, function (bestk, x) {
  return x < bestk
});
proc$ = function proc$(k) {
  return (rs) => {
    return proc(k, rs)
  }
};
proc = function proc(k, rs) {
  let xs, afterk, tmp, tmp1, tmp2, tmp3, eq, inlinedVal, arg$Cons$0$, arg$Cons$1$, inlinedVal1;
  eq = lambda1;
  inlinedVal1 = NofibPrelude.Lazy(lambda$(NofibPrelude, eq, rs));
  xs = NofibPrelude.take_lz(100, inlinedVal1);
  tmp = NofibPrelude.take(k, xs);
  if (tmp instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = tmp.head;
    arg$Cons$1$ = tmp.tail;
    inlinedVal = NofibPrelude.foldl(lambda, arg$Cons$0$, arg$Cons$1$);
    tmp1 = NofibPrelude.leave(k, xs);
    afterk = NofibPrelude.leaveWhile(lambda$2(inlinedVal), tmp1);
    tmp2 = NofibPrelude.Cons(100, NofibPrelude.Nil);
    tmp3 = NofibPrelude.take(1, afterk);
    return NofibPrelude.listEq(tmp2, tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lscomp = function lscomp(secretary2, m, proc1, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    let inlinedVal;
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    inlinedVal = f(m, arg$Cons$0$);
    tmp = runtime.safeCall(proc1(inlinedVal));
    tmp1 = lscomp(secretary2, m, proc1, arg$Cons$1$);
    return NofibPrelude.Cons(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda3 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (m, x) {
  return () => {
    return lambda2(m, x)
  }
});
lambda2 = (undefined, function (m, x) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal, inlinedVal1, inlinedVal2, tmp4, tmp5, inlinedVal3, inlinedVal4, tmp6, tmp7;
  tmp7 = x / m;
  inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp7));
  tmp5 = m * inlinedVal3;
  inlinedVal = x - tmp5;
  tmp = inlinedVal + 1;
  tmp1 = 97 * x;
  tmp2 = tmp1 + 11;
  inlinedVal1 = runtime.safeCall(globalThis.Math.pow(2, 7));
  tmp6 = tmp2 / inlinedVal1;
  inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp6));
  tmp4 = inlinedVal1 * inlinedVal4;
  inlinedVal2 = tmp2 - tmp4;
  tmp3 = f(m, inlinedVal2);
  return NofibPrelude.LzCons(tmp, tmp3)
});
f = function f(m, x) {
  return NofibPrelude.Lazy(lambda$1(m, x))
};
(class secretary {
  static {
    secretary1 = this
  }
  static #infRand(m, s) {
    return f(m, s)
  }
  static #simulate(n, m, proc1) {
    let tmp, tmp1, tmp2, inlinedVal;
    tmp = NofibPrelude.enumFromTo(1, n);
    tmp1 = lscomp(secretary, m, proc1, tmp);
    tmp2 = NofibPrelude.filter(lambda3, tmp1);
    inlinedVal = l(NofibPrelude, tmp2, 0);
    return inlinedVal / n
  }
  static #sim(n, k) {
    let proc$here;
    proc$here = proc$(k);
    return secretary.#simulate(n, 100, proc$here)
  }
  static #testSecretary_nofib(n) {
    let tmp;
    tmp = NofibPrelude.enumFromTo(35, 39);
    return listcomp(secretary, n, tmp)
  }
  static main() {
    let tmp;
    tmp = secretary.#testSecretary_nofib(50);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "secretary"];
});
export { f as _$_modulePrivate_$_f };
export { lscomp as _$_modulePrivate_$_lscomp };
export { proc as _$_modulePrivate_$_proc };
export { listcomp as _$_modulePrivate_$_listcomp };
export { secretary1 as _$_modulePrivate_$_secretary };
export { lambda2 as _$_modulePrivate_$_lambda };
export { lambda3 as _$_modulePrivate_$_lambda1 };
export { lambda4 as _$_modulePrivate_$_lambda2 };
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export { proc$ as _$_modulePrivate_$_proc$ };
export { lambda$2 as _$_modulePrivate_$_lambda$1 };
export default secretary1;
