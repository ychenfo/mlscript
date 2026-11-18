const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const leave$accessorSymbol = globalThis.Symbol("leave");
const power$accessorSymbol = globalThis.Symbol("power");
let rsa1, lambda, lambda1, lambda$, lambda$1, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons, main_main_testRsa_nofib_encrypt_collect$collect$main_testRsa_nofib_encrypt_collect$collect, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_concat$ls_Cons$main_testRsa_nofib_encrypt_unlines_concat$ls_Cons, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take$main_testRsa_nofib_encrypt_collect_take$take, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil1, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil1, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$$main_testRsa_nofib_encrypt_unlines_lambda$$lambda$, main_main_testRsa_nofib_encrypt_lambda$$lambda$_main_testRsa_nofib_encrypt_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_lambda$_lambda$lambda, main_main_testRsa_nofib_encrypt_lambda$$lambda$$main_testRsa_nofib_encrypt_lambda$$lambda$, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons, main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append$main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons$worker, main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons$worker;
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons$worker = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons(fv_tmp, inlinedVal)
};
main_main_testRsa_nofib_encrypt_collect$collect$main_testRsa_nofib_encrypt_collect$collect = function main_main_testRsa_nofib_encrypt_collect$collect$main_testRsa_nofib_encrypt_collect$collect(n, xs) {
  let scrut, tmp, tmp1, tmp2;
  scrut = n === 0;
  if (scrut === true) {
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil1()
  }
  if (xs instanceof NofibPrelude.Nil.class) {
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil()
  }
  tmp = main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take$main_testRsa_nofib_encrypt_collect_take$take(n, xs);
  tmp1 = rsa1[leave$accessorSymbol](n, xs);
  tmp2 = main_main_testRsa_nofib_encrypt_collect$collect$main_testRsa_nofib_encrypt_collect$collect(n, tmp1);
  return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons$main_testRsa_nofib_encrypt_map$xs_Cons(tmp, tmp2);
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons$worker = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons$main_testRsa_nofib_encrypt_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_concat$ls_Cons$main_testRsa_nofib_encrypt_unlines_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_concat$ls_Cons$main_testRsa_nofib_encrypt_unlines_concat$ls_Cons = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_map$xs_Cons_main_testRsa_nofib_encrypt_unlines_concat$ls_Cons$main_testRsa_nofib_encrypt_unlines_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil() {
  return (fv_a, fv_tmp, fv_f) => {
    return fv_a
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take$main_testRsa_nofib_encrypt_collect_take$take = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take$main_testRsa_nofib_encrypt_collect_take$take(n, ls) {
  let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil()
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    scrut = n <= 0;
    if (scrut === true) {
      return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil1()
    }
    tmp = n - 1;
    tmp1 = main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take$main_testRsa_nofib_encrypt_collect_take$take(tmp, arg$Cons$1$);
    return main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons(arg$Cons$0$, tmp1);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil1 = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Nil() {
  return (fv_a, fv_tmp, fv_f) => {
    return fv_a
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_collect_take$take_main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons$main_testRsa_nofib_encrypt_lambda$_lambda_code_foldl$xs_Cons(Cons_head, Cons_tail) {
  return (fv_a, fv_tmp, fv_f) => {
    fv_tmp = runtime.safeCall(fv_f(fv_a, Cons_head));
    return Cons_tail(fv_tmp, undefined, fv_f)
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return () => {
        return (eta$2$0, eta$2$1, eta$2$2, eta$2$3, eta$2$4, eta$2$5, eta$2$6) => {
          return eta$2$0
        }
      }
    }
  }
};
main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil1 = function main_main_testRsa_nofib_encrypt_collect$collect_main_testRsa_nofib_encrypt_map$xs_Nil$main_testRsa_nofib_encrypt_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return () => {
        return (eta$2$0, eta$2$1, eta$2$2, eta$2$3, eta$2$4, eta$2$5, eta$2$6) => {
          return eta$2$0
        }
      }
    }
  }
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda(l) {
  let tmp, Cons_tail;
  Cons_tail = main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Nil();
  tmp = main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons("\n", Cons_tail);
  return main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append$main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append(l, tmp)
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$$main_testRsa_nofib_encrypt_unlines_lambda$$lambda$ = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$$main_testRsa_nofib_encrypt_unlines_lambda$$lambda$() {
  return (l) => {
    return main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda(l)
  }
};
main_main_testRsa_nofib_encrypt_lambda$$lambda$_main_testRsa_nofib_encrypt_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_lambda$_lambda$lambda = function main_main_testRsa_nofib_encrypt_lambda$$lambda$_main_testRsa_nofib_encrypt_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_lambda$_lambda$lambda(rsa2, n, e, c) {
  let tmp, tmp1, f, a, inlinedVal;
  f = lambda$1(rsa1);
  a = rsa1.const0;
  inlinedVal = c(a, undefined, f);
  tmp = rsa2[power$accessorSymbol](e, n, inlinedVal);
  tmp1 = tmp + "";
  return NofibPrelude.nofibStringToList(tmp1)
};
main_main_testRsa_nofib_encrypt_lambda$$lambda$$main_testRsa_nofib_encrypt_lambda$$lambda$ = function main_main_testRsa_nofib_encrypt_lambda$$lambda$$main_testRsa_nofib_encrypt_lambda$$lambda$(rsa2, n, e) {
  return (c) => {
    return main_main_testRsa_nofib_encrypt_lambda$$lambda$_main_testRsa_nofib_encrypt_lambda$_lambda$lambda$main_testRsa_nofib_encrypt_lambda$_lambda$lambda(rsa2, n, e, c)
  }
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6) => {
      let inlinedVal, fv_tmp1;
      inlinedVal = Cons_tail(fv_ys);
      fv_tmp1 = runtime.safeCall(eta$0$6(eta$0$0, Cons_head));
      return inlinedVal(fv_tmp1, undefined, undefined, undefined, undefined, undefined, eta$0$6)
    }
  }
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6) => {
      let inlinedVal, fv_tmp1;
      inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
      fv_tmp1 = runtime.safeCall(eta$0$6(eta$0$0, Cons_head));
      return inlinedVal(fv_tmp1, undefined, undefined, undefined, undefined, undefined, eta$0$6)
    }
  }
};
main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append$main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append = function main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append$main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append$main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append(arg$Cons$1$, ys);
    return main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$_main_testRsa_nofib_encrypt_unlines_lambda$_lambda$lambda_main_testRsa_nofib_encrypt_unlines_lambda$_lambda_append$append_main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons$main_testRsa_nofib_encrypt_unlines_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$1 = (undefined, function (rsa2) {
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
  static get [leave$accessorSymbol]() { return rsa.#leave; }
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
  static #z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
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
  static #even(a) {
    let tmp;
    tmp = rsa.#z_mod(a, rsa.const2);
    return tmp === rsa.const0
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
  static main(input) {
    let tmp, inlinedVal, inlinedVal1, tmp1, f, inlinedVal2, tmp2, tmp3, inlinedVal3, tmp4, f1, inlinedVal4, inlinedVal5, f2, a, inlinedVal6, tmp5;
    inlinedVal = runtime.safeCall(globalThis.BigInt("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107"));
    inlinedVal1 = runtime.safeCall(globalThis.BigInt("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213"));
    tmp = NofibPrelude.nofibStringToList(input);
    tmp5 = inlinedVal + "";
    inlinedVal6 = NofibPrelude.nofibStringToList(tmp5);
    tmp2 = rsa1.#listLen(inlinedVal6);
    tmp3 = tmp2 * 47;
    tmp4 = tmp3 / 100;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp1 = main_main_testRsa_nofib_encrypt_collect$collect$main_testRsa_nofib_encrypt_collect$collect(inlinedVal3, tmp);
    f = main_main_testRsa_nofib_encrypt_lambda$$lambda$$main_testRsa_nofib_encrypt_lambda$$lambda$(rsa1, inlinedVal, inlinedVal1);
    inlinedVal2 = tmp1(undefined, f);
    f1 = main_main_testRsa_nofib_encrypt_unlines_lambda$$lambda$$main_testRsa_nofib_encrypt_unlines_lambda$$lambda$();
    inlinedVal4 = inlinedVal2(undefined, f1);
    inlinedVal5 = inlinedVal4();
    f2 = lambda$(rsa1);
    a = rsa1.const0;
    return inlinedVal5(a, undefined, undefined, undefined, undefined, undefined, f2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "rsa"];
});
export default rsa1;
