const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$3 as lambda$ } from "./NofibPrelude.mjs";
const copy_lz$accessorSymbol = globalThis.Symbol("copy_lz");
const append_lz_lz$accessorSymbol = globalThis.Symbol("append_lz_lz");
const init$accessorSymbol = globalThis.Symbol("init");
const zip3$accessorSymbol = globalThis.Symbol("zip3");
const lzfy$accessorSymbol = globalThis.Symbol("lzfy");
const row$accessorSymbol = globalThis.Symbol("row");
const star$accessorSymbol = globalThis.Symbol("star");
let go1, life1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9;
lambda$9 = (undefined, function (life2, sz) {
  return (b) => {
    return lambda8(life2, sz, b)
  }
});
lambda$8 = (undefined, function (life2, sz) {
  return (l1) => {
    return lambda9(life2, sz, l1)
  }
});
lambda7 = (undefined, function (i) {
  let inlinedVal, s;
  inlinedVal = i + "";
  s = inlinedVal;
  return go(NofibPrelude, s, 0)
});
lambda8 = (undefined, function (life2, sz, b) {
  let tmp, inlinedVal, inlinedVal1, inlinedVal2, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.replicate(sz, 0);
  tmp3 = life2[init$accessorSymbol](b);
  inlinedVal1 = NofibPrelude.Cons(tmp, tmp3);
  tmp1 = life2[init$accessorSymbol](b);
  tmp2 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  inlinedVal2 = NofibPrelude.append(tmp1, tmp2);
  inlinedVal = life2[zip3$accessorSymbol](inlinedVal1, b, inlinedVal2);
  return NofibPrelude.map(life2[row$accessorSymbol], inlinedVal)
});
lambda9 = (undefined, function (life2, sz, l1) {
  let tmp, tmp1;
  tmp = life2[copy_lz$accessorSymbol](sz, 0);
  tmp1 = life2[append_lz_lz$accessorSymbol](l1, tmp);
  return NofibPrelude.take_lz(sz, tmp1)
});
lambda$7 = (undefined, function (life2) {
  return (a, b) => {
    return lambda4(life2, a, b)
  }
});
lambda$6 = (undefined, function (life2) {
  return (x) => {
    let tmp;
    tmp = NofibPrelude.map(life2[star$accessorSymbol], x);
    return NofibPrelude.concat(tmp)
  }
});
lambda4 = (undefined, function (life2, a, b) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons("n", NofibPrelude.Nil);
  tmp1 = NofibPrelude.append(tmp, b);
  return NofibPrelude.append(a, tmp1)
});
lambda5 = (undefined, function (life2, x) {
  let tmp;
  tmp = NofibPrelude.map(life2[star$accessorSymbol], x);
  return NofibPrelude.concat(tmp)
});
lambda$5 = (undefined, function (life2, genn, xss) {
  return () => {
    return lambda6(life2, genn, xss)
  }
});
lambda6 = (undefined, function (life2, genn, xss) {
  let tmp, tmp1, tmp2, inlinedVal;
  inlinedVal = go(NofibPrelude, "nn", 0);
  tmp = NofibPrelude.map(lambda$6(life2), xss);
  tmp1 = NofibPrelude.foldr(lambda$7(life2), NofibPrelude.Nil, tmp);
  tmp2 = NofibPrelude.append(inlinedVal, tmp1);
  return NofibPrelude.append(genn, tmp2)
});
lambda$4 = (undefined, function (xs, y) {
  return () => {
    return NofibPrelude.LzCons(y, xs)
  }
});
lambda3 = (undefined, function (xs, y) {
  return NofibPrelude.LzCons(y, xs)
});
lambda$3 = (undefined, function (life2, ls) {
  return () => {
    return lambda2(life2, ls)
  }
});
lambda2 = (undefined, function (life2, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = life2[lzfy$accessorSymbol](arg$Cons$1$);
    return NofibPrelude.LzCons(arg$Cons$0$, tmp)
  }
  return NofibPrelude.LzNil;
});
lambda$2 = (undefined, function (life2, xs, ys) {
  return () => {
    return lambda1(life2, xs, ys)
  }
});
lambda1 = (undefined, function (life2, xs, ys) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, inlinedVal;
  if (xs instanceof NofibPrelude.Lazy.class) {
    inlinedVal = xs.get();
    if (inlinedVal instanceof NofibPrelude.LzNil.class) {
      if (ys instanceof NofibPrelude.Lazy.class) {
        return ys.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = life2[append_lz_lz$accessorSymbol](arg$LzCons$1$, ys);
      return NofibPrelude.LzCons(arg$LzCons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (life2, n, x) {
  return () => {
    return lambda(life2, n, x)
  }
});
lambda = (undefined, function (life2, n, x) {
  let scrut, tmp, tmp1;
  scrut = n === 0;
  if (scrut === true) {
    return NofibPrelude.LzNil
  }
  tmp = n - 1;
  tmp1 = life2[copy_lz$accessorSymbol](tmp, x);
  return NofibPrelude.LzCons(x, tmp1);
});
go1 = function go(h, t) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$;
    if (t instanceof NofibPrelude.Nil.class) {
      return h
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      h = arg$Cons$0$;
      t = arg$Cons$1$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda10 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda11 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda12 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda13 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda14 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda15 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda16 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda17 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda18 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda19 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda20 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda21 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda22 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda23 = (undefined, function () {
  return NofibPrelude.LzNil
});
(class life {
  static {
    life1 = this
  }
  static get [copy_lz$accessorSymbol]() { return life.#copy_lz; }
  static get [append_lz_lz$accessorSymbol]() { return life.#append_lz_lz; }
  static get [init$accessorSymbol]() { return life.#init; }
  static get [zip3$accessorSymbol]() { return life.#zip3; }
  static get [lzfy$accessorSymbol]() { return life.#lzfy; }
  static get [row$accessorSymbol]() { return life.#row; }
  static get [star$accessorSymbol]() { return life.#star; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
    inlinedVal = NofibPrelude.Lazy(lambda10);
    inlinedVal1 = NofibPrelude.Lazy(lambda11);
    inlinedVal2 = NofibPrelude.Lazy(lambda12);
    inlinedVal3 = NofibPrelude.Lazy(lambda13);
    inlinedVal4 = NofibPrelude.Lazy(lambda14);
    inlinedVal5 = NofibPrelude.Lazy(lambda15);
    inlinedVal6 = NofibPrelude.Lazy(lambda16);
    inlinedVal7 = NofibPrelude.Lazy(lambda17);
    inlinedVal8 = NofibPrelude.Lazy(lambda18);
    inlinedVal9 = NofibPrelude.Lazy(lambda19);
    inlinedVal10 = NofibPrelude.Lazy(lambda20);
    inlinedVal11 = NofibPrelude.Lazy(lambda21);
    inlinedVal12 = NofibPrelude.Lazy(lambda22);
    inlinedVal13 = NofibPrelude.Lazy(lambda23);
    tmp = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    tmp3 = NofibPrelude.Cons(1, tmp2);
    tmp4 = NofibPrelude.Cons(1, tmp3);
    tmp5 = NofibPrelude.Cons(1, tmp4);
    tmp6 = NofibPrelude.Cons(0, tmp5);
    tmp7 = NofibPrelude.Cons(1, tmp6);
    tmp8 = NofibPrelude.Cons(1, tmp7);
    tmp9 = NofibPrelude.Cons(1, tmp8);
    tmp10 = NofibPrelude.Cons(1, tmp9);
    tmp11 = NofibPrelude.Cons(1, tmp10);
    tmp12 = NofibPrelude.Cons(0, tmp11);
    tmp13 = NofibPrelude.Cons(1, tmp12);
    tmp14 = NofibPrelude.Cons(1, tmp13);
    tmp15 = NofibPrelude.Cons(1, tmp14);
    tmp16 = NofibPrelude.Cons(1, tmp15);
    tmp17 = NofibPrelude.Cons(1, tmp16);
    tmp18 = NofibPrelude.Cons(0, tmp17);
    tmp19 = NofibPrelude.Cons(1, tmp18);
    tmp20 = NofibPrelude.Cons(1, tmp19);
    tmp21 = NofibPrelude.Cons(1, tmp20);
    tmp22 = NofibPrelude.Cons(1, tmp21);
    tmp23 = NofibPrelude.Cons(1, tmp22);
    tmp24 = NofibPrelude.Cons(0, tmp23);
    tmp25 = NofibPrelude.Cons(0, tmp24);
    tmp26 = NofibPrelude.Cons(0, tmp25);
    tmp27 = life.#lzfy(tmp26);
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(inlinedVal13, tmp28);
    tmp30 = NofibPrelude.Cons(inlinedVal12, tmp29);
    tmp31 = NofibPrelude.Cons(inlinedVal11, tmp30);
    tmp32 = NofibPrelude.Cons(inlinedVal10, tmp31);
    tmp33 = NofibPrelude.Cons(inlinedVal9, tmp32);
    tmp34 = NofibPrelude.Cons(inlinedVal8, tmp33);
    tmp35 = NofibPrelude.Cons(inlinedVal7, tmp34);
    tmp36 = NofibPrelude.Cons(inlinedVal6, tmp35);
    tmp37 = NofibPrelude.Cons(inlinedVal5, tmp36);
    tmp38 = NofibPrelude.Cons(inlinedVal4, tmp37);
    tmp39 = NofibPrelude.Cons(inlinedVal3, tmp38);
    tmp40 = NofibPrelude.Cons(inlinedVal2, tmp39);
    tmp41 = NofibPrelude.Cons(inlinedVal1, tmp40);
    tmp42 = NofibPrelude.Cons(inlinedVal, tmp41);
    life.start = tmp42;
  }
  static #last(a_t) {
    let arg$Cons$0$, arg$Cons$1$;
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      return go1(arg$Cons$0$, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #copy_lz(n, x) {
    return NofibPrelude.Lazy(lambda$1(life, n, x))
  }
  static #append_lz_lz(xs, ys) {
    return NofibPrelude.Lazy(lambda$2(life, xs, ys))
  }
  static #init(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      tmp = life.#init(arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw runtime.safeCall(globalThis.Error(ls));
  }
  static #zipWith3(f, xs, ys, zs) {
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
          tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1, arg$Cons$0$2));
          tmp1 = life.#zipWith3(f, arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
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
          tmp1 = life.#zip3(arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #lzfy(ls) {
    return NofibPrelude.Lazy(lambda$3(life, ls))
  }
  static #elt(a_b_c, d_e_f, g_h_i) {
    let tot, scrut, element2$, element1$, element0$, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      element0$ = runtime.Tuple.get(a_b_c, 0);
      element1$ = runtime.Tuple.get(a_b_c, 1);
      element2$ = runtime.Tuple.get(a_b_c, 2);
      if (runtime.Tuple.isArrayLike(d_e_f) && d_e_f.length === 3) {
        element0$1 = runtime.Tuple.get(d_e_f, 0);
        element1$1 = runtime.Tuple.get(d_e_f, 1);
        element2$1 = runtime.Tuple.get(d_e_f, 2);
        if (runtime.Tuple.isArrayLike(g_h_i) && g_h_i.length === 3) {
          element0$2 = runtime.Tuple.get(g_h_i, 0);
          element1$2 = runtime.Tuple.get(g_h_i, 1);
          element2$2 = runtime.Tuple.get(g_h_i, 2);
          tmp = element0$ + element1$;
          tmp1 = tmp + element2$;
          tmp2 = tmp1 + element0$1;
          tmp3 = tmp2 + element2$1;
          tmp4 = tmp3 + element0$2;
          tmp5 = tmp4 + element1$2;
          tot = tmp5 + element2$2;
          tmp6 = tot < 2;
          if (tmp6 === false) {
            tmp7 = tot > 3;
            if (tmp7 === true) {
              return 0
            }
            scrut = tot === 3;
            if (scrut === true) {
              return 1
            }
            return element1$1;
          }
          return 0;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #shiftr(x, xs) {
    let tmp;
    tmp = life.#init(xs);
    return NofibPrelude.Cons(x, tmp)
  }
  static #shiftl(x, xs) {
    let tmp, tmp1;
    tmp = life.#init(xs);
    tmp1 = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return NofibPrelude.append(tmp, tmp1)
  }
  static #shift(x, xs) {
    let tmp, tmp1;
    tmp = life.#shiftr(x, xs);
    tmp1 = life.#shiftl(x, xs);
    return life.#zip3(tmp, xs, tmp1)
  }
  static #row(last_this_next) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(last_this_next) && last_this_next.length === 3) {
      element0$ = runtime.Tuple.get(last_this_next, 0);
      element1$ = runtime.Tuple.get(last_this_next, 1);
      element2$ = runtime.Tuple.get(last_this_next, 2);
      tmp = life.#shift(0, element0$);
      tmp1 = life.#shift(0, element1$);
      tmp2 = life.#shift(0, element2$);
      return life.#zipWith3(life.#elt, tmp, tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #gen(n, board) {
    let tmp, tmp1;
    tmp = NofibPrelude.replicate(n, 0);
    tmp1 = life.#shift(tmp, board);
    return NofibPrelude.map(life.#row, tmp1)
  }
  static #star(x) {
    let scrut, scrut1;
    scrut = x === 0;
    if (scrut === true) {
      return go(NofibPrelude, "  ", 0)
    }
    scrut1 = x === 1;
    if (scrut1 === true) {
      return go(NofibPrelude, " o", 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #glue(s, xs, ys) {
    let tmp;
    tmp = NofibPrelude.append(s, ys);
    return NofibPrelude.append(xs, tmp)
  }
  static #limit(ls) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, tmp, inlinedVal;
    if (ls instanceof NofibPrelude.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        let inlinedVal1;
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        if (arg$LzCons$1$ instanceof NofibPrelude.Lazy.class) {
          inlinedVal1 = arg$LzCons$1$.get();
          if (inlinedVal1 instanceof NofibPrelude.LzCons.class) {
            arg$LzCons$0$1 = inlinedVal1.head;
            arg$LzCons$1$1 = inlinedVal1.tail;
            scrut = NofibPrelude.listEqBy(NofibPrelude.listEq, arg$LzCons$0$, arg$LzCons$0$1);
            if (scrut === true) {
              return NofibPrelude.Cons(arg$LzCons$0$, NofibPrelude.Nil)
            }
            {
              let inlinedVal2;
              inlinedVal2 = NofibPrelude.Lazy(lambda$4(arg$LzCons$1$1, arg$LzCons$0$1));
              tmp = life.#limit(inlinedVal2);
              return NofibPrelude.Cons(arg$LzCons$0$, tmp);
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #disp(gen_xss) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(gen_xss) && gen_xss.length === 2) {
      element0$ = runtime.Tuple.get(gen_xss, 0);
      element1$ = runtime.Tuple.get(gen_xss, 1);
      return NofibPrelude.Lazy(lambda$5(life, element0$, element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #generations(sz) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, f, f1, inlinedVal, inlinedVal1;
    tmp = NofibPrelude.enumFrom(0);
    f = lambda7;
    inlinedVal = NofibPrelude.Lazy(lambda$(NofibPrelude, f, tmp));
    tmp1 = life.#copy_lz(sz, 0);
    tmp2 = life.#copy_lz(sz, tmp1);
    tmp3 = NofibPrelude.append_nl_lz(life.start, tmp2);
    f1 = lambda$8(life, sz);
    inlinedVal1 = NofibPrelude.Lazy(lambda$(NofibPrelude, f1, tmp3));
    tmp4 = NofibPrelude.take_lz(sz, inlinedVal1);
    tmp5 = NofibPrelude.iterate(lambda$9(life, sz), tmp4);
    tmp6 = life.#limit(tmp5);
    tmp7 = NofibPrelude.zip_lz_nl(inlinedVal, tmp6);
    return NofibPrelude.map(life.#disp, tmp7)
  }
  static #testLife_nofib(n) {
    let tmp, tmp1, inlinedVal;
    tmp = life.#generations(n);
    tmp1 = life.#last(tmp);
    if (tmp1 instanceof NofibPrelude.Lazy.class) {
      inlinedVal = tmp1.get();
      return l(NofibPrelude, inlinedVal, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    return life.#testLife_nofib(15)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "life"];
});
export { go1 as _$_modulePrivate_$_go };
export { life1 as _$_modulePrivate_$_life };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { lambda16 as _$_modulePrivate_$_lambda16 };
export { lambda17 as _$_modulePrivate_$_lambda17 };
export { lambda18 as _$_modulePrivate_$_lambda18 };
export { lambda19 as _$_modulePrivate_$_lambda19 };
export { lambda20 as _$_modulePrivate_$_lambda20 };
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export { lambda$2 as _$_modulePrivate_$_lambda$1 };
export { lambda$3 as _$_modulePrivate_$_lambda$2 };
export { lambda$4 as _$_modulePrivate_$_lambda$3 };
export { lambda$5 as _$_modulePrivate_$_lambda$4 };
export { lambda$6 as _$_modulePrivate_$_lambda$5 };
export { lambda$7 as _$_modulePrivate_$_lambda$6 };
export { lambda$8 as _$_modulePrivate_$_lambda$7 };
export { lambda$9 as _$_modulePrivate_$_lambda$8 };
export default life1;
