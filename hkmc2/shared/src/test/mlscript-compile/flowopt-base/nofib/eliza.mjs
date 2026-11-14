const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$3 as lambda$ } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$4 as lambda$1 } from "./NofibPrelude.mjs";
const toUpper$accessorSymbol = globalThis.Symbol("toUpper");
const lz_map$accessorSymbol = globalThis.Symbol("lz_map");
const append_lz$accessorSymbol = globalThis.Symbol("append_lz");
const cycle$accessorSymbol = globalThis.Symbol("cycle");
const words$accessorSymbol = globalThis.Symbol("words");
const null_lz$accessorSymbol = globalThis.Symbol("null_lz");
const makeResponse$accessorSymbol = globalThis.Symbol("makeResponse");
const prefix$accessorSymbol = globalThis.Symbol("prefix");
const tails$accessorSymbol = globalThis.Symbol("tails");
const ucase$accessorSymbol = globalThis.Symbol("ucase");
const session$accessorSymbol = globalThis.Symbol("session");
let go1, cons, lscomp, prepare, lscomp1, lscomp2, cons1, maybe, conj, trailingI, ans, cons2, eliza1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, conj$, lambda$7, lambda$8, lambda$9, lambda$10;
lambda10 = (undefined, function (x) {
  return NofibPrelude.nofibListToString(x)
});
lambda$10 = (undefined, function (eliza2) {
  return (x) => {
    return lambda8(eliza2, x)
  }
});
lambda7 = (undefined, function (x) {
  if (x instanceof NofibPrelude.Nil.class) {
    return false
  }
  return true;
});
lambda8 = (undefined, function (eliza2, x) {
  let inlinedVal, tmp;
  tmp = NofibPrelude.leaveWhile(lambda3, x);
  inlinedVal = NofibPrelude.foldr(cons, NofibPrelude.Nil, tmp);
  return eliza2[words$accessorSymbol](inlinedVal)
});
lambda$9 = (undefined, function (eliza2, input) {
  return (i) => {
    return lambda9(eliza2, input, i)
  }
});
lambda9 = (undefined, function (eliza2, input, i) {
  let tmp, tmp1, tmp2, inlinedVal, tmp3, inlinedVal1, tmp4;
  tmp4 = i / 20;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
  tmp3 = 20 * inlinedVal1;
  inlinedVal = i - tmp3;
  tmp = NofibPrelude.take(inlinedVal, input);
  tmp1 = NofibPrelude.map(lambda$10(eliza2), tmp);
  tmp2 = NofibPrelude.filter(lambda7, tmp1);
  return eliza2[session$accessorSymbol](eliza2.initial, NofibPrelude.Nil, tmp2)
});
cons2 = function cons(e, r_es) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(r_es) && r_es.length === 2) {
    element0$ = runtime.Tuple.get(r_es, 0);
    element1$ = runtime.Tuple.get(r_es, 1);
    tmp = NofibPrelude.Cons(e, element1$);
    return globalThis.Object.freeze([
      element0$,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ans = function ans(eliza2, e_es, l1) {
  let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (e_es instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = e_es.head;
    arg$Cons$1$ = e_es.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      if (element1$ instanceof NofibPrelude.Lazy.class) {
        inlinedVal = element1$.get();
        if (inlinedVal instanceof NofibPrelude.LzCons.class) {
          let inlinedVal1, tmp5, p, f, inlinedVal2;
          arg$LzCons$0$ = inlinedVal.head;
          arg$LzCons$1$ = inlinedVal.tail;
          tmp5 = eliza2[tails$accessorSymbol](l1);
          p = lambda$7(eliza2, element0$);
          inlinedVal2 = NofibPrelude.Lazy(lambda$1(NofibPrelude, p, tmp5));
          f = lambda$8(eliza2, element0$, l1);
          inlinedVal1 = NofibPrelude.Lazy(lambda$(NofibPrelude, f, inlinedVal2));
          scrut = eliza2[null_lz$accessorSymbol](inlinedVal1);
          if (scrut === true) {
            let element1$1, element0$1, tmp6;
            tmp = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            tmp1 = ans(eliza2, arg$Cons$1$, l1);
            if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 2) {
              element0$1 = runtime.Tuple.get(tmp1, 0);
              element1$1 = runtime.Tuple.get(tmp1, 1);
              tmp6 = NofibPrelude.Cons(tmp, element1$1);
              return globalThis.Object.freeze([
                element0$1,
                tmp6
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          {
            let inlinedVal3, inlinedVal4;
            if (inlinedVal1 instanceof NofibPrelude.Lazy.class) {
              inlinedVal4 = inlinedVal1.get();
              if (inlinedVal4 instanceof NofibPrelude.LzCons.class) {
                inlinedVal3 = inlinedVal4.head;
                tmp2 = eliza2[makeResponse$accessorSymbol](arg$LzCons$0$, inlinedVal3);
                tmp3 = globalThis.Object.freeze([
                  element0$,
                  arg$LzCons$1$
                ]);
                tmp4 = NofibPrelude.Cons(tmp3, arg$Cons$1$);
                return globalThis.Object.freeze([
                  tmp2,
                  tmp4
                ])
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$8 = (undefined, function (eliza2, key, l1) {
  return (x) => {
    return lambda5(eliza2, key, l1, x)
  }
});
lambda$7 = (undefined, function (eliza2, key) {
  return (ls) => {
    let tmp;
    tmp = eliza2[lz_map$accessorSymbol](eliza2[ucase$accessorSymbol], ls);
    return eliza2[prefix$accessorSymbol](key, tmp)
  }
});
lambda5 = (undefined, function (eliza2, key, l1, x) {
  let tmp, inlinedVal, tmp1, conj$here, inlinedVal1, arg$Cons$0$, arg$Cons$1$, tmp2, inlinedVal2;
  inlinedVal = l(NofibPrelude, key, 0);
  tmp = NofibPrelude.leave(inlinedVal, x);
  if (tmp instanceof NofibPrelude.Nil.class) {
    inlinedVal2 = l1;
  } else {
    inlinedVal2 = tmp;
  }
  conj$here = conj$(eliza2);
  tmp1 = NofibPrelude.map(conj$here, inlinedVal2);
  inlinedVal1 = NofibPrelude.foldr(cons1, NofibPrelude.Nil, tmp1);
  if (inlinedVal1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = inlinedVal1.head;
    arg$Cons$1$ = inlinedVal1.tail;
    tmp2 = go1(arg$Cons$1$);
    return NofibPrelude.append(arg$Cons$0$, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda6 = (undefined, function (eliza2, key, ls) {
  let tmp;
  tmp = eliza2[lz_map$accessorSymbol](eliza2[ucase$accessorSymbol], ls);
  return eliza2[prefix$accessorSymbol](key, tmp)
});
lscomp2 = function lscomp(eliza2, w, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        let inlinedVal;
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        inlinedVal = NofibPrelude.map(eliza2[toUpper$accessorSymbol], w);
        scrut = NofibPrelude.listEq(inlinedVal, element0$);
        if (scrut === true) {
          tmp = lscomp2(eliza2, w, arg$Cons$1$);
          return NofibPrelude.Cons(element1$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
conj$ = function conj$(eliza2) {
  return (w) => {
    return conj(eliza2, w)
  }
};
cons1 = function cons(x, xs) {
  let tmp, inlinedVal;
  inlinedVal = go(NofibPrelude, "I", 0);
  tmp = NofibPrelude.listEq(x, inlinedVal);
  if (tmp === true) {
    if (xs instanceof NofibPrelude.Nil.class) {
      let inlinedVal1;
      inlinedVal1 = go(NofibPrelude, "me", 0);
      return NofibPrelude.Cons(inlinedVal1, NofibPrelude.Nil)
    }
    return NofibPrelude.Cons(x, xs);
  }
  return NofibPrelude.Cons(x, xs);
};
maybe = function maybe(d, xs) {
  if (xs instanceof NofibPrelude.Nil.class) {
    return d
  }
  return xs;
};
conj = function conj(eliza2, w) {
  let tmp, tmp1, tmp2;
  tmp = lscomp2(eliza2, w, eliza2.conjugates);
  tmp1 = NofibPrelude.Cons(w, NofibPrelude.Nil);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  if (tmp2 instanceof NofibPrelude.Cons.class) {
    return tmp2.head
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
trailingI = function trailingI(ls) {
  return NofibPrelude.foldr(cons1, NofibPrelude.Nil, ls)
};
lambda$6 = (undefined, function (eliza2, xs) {
  return () => {
    return lambda4(eliza2, xs)
  }
});
lambda4 = (undefined, function (eliza2, xs) {
  let tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.LzNil
  }
  {
    let inlinedVal;
    if (xs instanceof NofibPrelude.Cons.class) {
      inlinedVal = xs.tail;
      tmp = eliza2[tails$accessorSymbol](inlinedVal);
      return NofibPrelude.LzCons(xs, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
});
cons = function cons(x, xs) {
  let scrut, inlinedVal;
  inlinedVal = go(NofibPrelude, " .!?,", 0);
  scrut = NofibPrelude.inList(x, inlinedVal);
  if (scrut === true) {
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    return NofibPrelude.Cons(x, xs);
  }
  return NofibPrelude.Cons(x, xs);
};
lambda3 = (undefined, function (x) {
  let inlinedVal;
  inlinedVal = go(NofibPrelude, " .!?,", 0);
  return NofibPrelude.inList(x, inlinedVal)
});
go1 = function go(ws) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ws instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ws instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ws.head;
    arg$Cons$1$ = ws.tail;
    tmp = go1(arg$Cons$1$);
    tmp1 = NofibPrelude.append(arg$Cons$0$, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$5 = (undefined, function (eliza2, xs) {
  return () => {
    return eliza2[cycle$accessorSymbol](xs)
  }
});
lambda2 = (undefined, function (eliza2, xs) {
  return eliza2[cycle$accessorSymbol](xs)
});
lambda$4 = (undefined, function (eliza2, ys, t, h) {
  return () => {
    let tmp;
    tmp = eliza2[append_lz$accessorSymbol](t, ys);
    return NofibPrelude.LzCons(h, tmp)
  }
});
lambda1 = (undefined, function (eliza2, ys, t, h) {
  let tmp;
  tmp = eliza2[append_lz$accessorSymbol](t, ys);
  return NofibPrelude.LzCons(h, tmp)
});
lambda$3 = (undefined, function (eliza2, f, ls) {
  return () => {
    return lambda(eliza2, f, ls)
  }
});
lambda = (undefined, function (eliza2, f, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.LzNil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = eliza2[lz_map$accessorSymbol](f, arg$Cons$1$);
    return NofibPrelude.LzCons(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (eliza2) {
  return (caseScrut) => {
    return lambda11(eliza2, caseScrut)
  }
});
lambda11 = (undefined, function (eliza2, caseScrut) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    inlinedVal = NofibPrelude.map(eliza2[toUpper$accessorSymbol], element0$);
    return globalThis.Object.freeze([
      inlinedVal,
      element1$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lscomp = function lscomp(eliza2, ls) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      tmp = eliza2[words$accessorSymbol](element0$);
      tmp1 = eliza2[cycle$accessorSymbol](element1$);
      tmp2 = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      tmp3 = lscomp(eliza2, arg$Cons$1$);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
prepare = function prepare(eliza2, ls) {
  return NofibPrelude.map(lambda$2(eliza2), ls)
};
lscomp1 = function lscomp(ls) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      tmp1 = globalThis.Object.freeze([
        element1$,
        element0$
      ]);
      tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
      tmp3 = NofibPrelude.Cons(tmp, tmp2);
      tmp4 = lscomp1(arg$Cons$1$);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class eliza {
  static {
    eliza1 = this
  }
  static get [toUpper$accessorSymbol]() { return eliza.#toUpper; }
  static get [lz_map$accessorSymbol]() { return eliza.#lz_map; }
  static get [append_lz$accessorSymbol]() { return eliza.#append_lz; }
  static get [cycle$accessorSymbol]() { return eliza.#cycle; }
  static get [words$accessorSymbol]() { return eliza.#words; }
  static get [null_lz$accessorSymbol]() { return eliza.#null_lz; }
  static get [makeResponse$accessorSymbol]() { return eliza.#makeResponse; }
  static get [prefix$accessorSymbol]() { return eliza.#prefix; }
  static get [tails$accessorSymbol]() { return eliza.#tails; }
  static get [ucase$accessorSymbol]() { return eliza.#ucase; }
  static get [session$accessorSymbol]() { return eliza.#session; }
  static {
    let canYou, canI, youAre, iDont, iFeel, whyDont, whyCant, areYou, iCant, iAm, you, yes, no, computer, iWant, question, name, because, sorry, dream, hello, maybe1, your, always, think, alike, friend, nokeyMsgs, oneways, bothways, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32, inlinedVal33, inlinedVal34, inlinedVal35, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, inlinedVal43, inlinedVal44, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48, inlinedVal49, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, inlinedVal54, inlinedVal55, inlinedVal56, inlinedVal57, inlinedVal58, inlinedVal59, inlinedVal60, inlinedVal61, inlinedVal62, inlinedVal63, inlinedVal64, inlinedVal65, inlinedVal66, inlinedVal67, inlinedVal68, inlinedVal69, inlinedVal70, inlinedVal71, inlinedVal72, inlinedVal73, inlinedVal74, inlinedVal75, inlinedVal76, inlinedVal77, inlinedVal78, inlinedVal79, inlinedVal80, inlinedVal81, inlinedVal82, inlinedVal83, inlinedVal84, inlinedVal85, inlinedVal86, inlinedVal87, inlinedVal88, inlinedVal89, inlinedVal90, inlinedVal91, inlinedVal92, inlinedVal93, inlinedVal94, inlinedVal95, inlinedVal96, inlinedVal97, inlinedVal98, inlinedVal99, inlinedVal100, inlinedVal101, inlinedVal102, inlinedVal103, inlinedVal104, inlinedVal105, inlinedVal106, inlinedVal107, inlinedVal108, inlinedVal109, inlinedVal110, inlinedVal111, inlinedVal112, inlinedVal113, inlinedVal114, inlinedVal115, inlinedVal116, inlinedVal117, inlinedVal118, inlinedVal119, inlinedVal120, inlinedVal121, inlinedVal122, inlinedVal123, inlinedVal124, inlinedVal125, inlinedVal126, inlinedVal127, inlinedVal128, inlinedVal129, inlinedVal130, inlinedVal131, inlinedVal132, inlinedVal133, inlinedVal134, inlinedVal135, inlinedVal136, inlinedVal137, inlinedVal138, inlinedVal139, inlinedVal140, inlinedVal141, inlinedVal142, inlinedVal143, inlinedVal144, inlinedVal145, inlinedVal146, inlinedVal147, inlinedVal148, inlinedVal149, inlinedVal150, inlinedVal151, inlinedVal152, inlinedVal153, inlinedVal154, inlinedVal155, inlinedVal156, inlinedVal157, inlinedVal158, inlinedVal159, inlinedVal160, inlinedVal161, inlinedVal162, inlinedVal163, inlinedVal164, inlinedVal165, inlinedVal166, inlinedVal167;
    inlinedVal = go(NofibPrelude, "Why did you repeat yourself?", 0);
    inlinedVal1 = go(NofibPrelude, "Do you expect a different answer by repeating yourself?", 0);
    inlinedVal2 = go(NofibPrelude, "Come, come, elucidate your thoughts.", 0);
    inlinedVal3 = go(NofibPrelude, "Please don't repeat yourself!", 0);
    tmp = NofibPrelude.Cons(inlinedVal3, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal2, tmp);
    tmp2 = NofibPrelude.Cons(inlinedVal1, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal, tmp2);
    eliza.repeatMsgs = tmp3;
    inlinedVal4 = go(NofibPrelude, "?Don_t you believe that I can", 0);
    inlinedVal5 = go(NofibPrelude, "?Perhaps you would like to be able to", 0);
    inlinedVal6 = go(NofibPrelude, "?You want me to be able to", 0);
    tmp4 = NofibPrelude.Cons(inlinedVal6, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(inlinedVal5, tmp4);
    canYou = NofibPrelude.Cons(inlinedVal4, tmp5);
    inlinedVal7 = go(NofibPrelude, "?Perhaps you don_t want to", 0);
    inlinedVal8 = go(NofibPrelude, "?Do you want to be able to", 0);
    tmp6 = NofibPrelude.Cons(inlinedVal8, NofibPrelude.Nil);
    canI = NofibPrelude.Cons(inlinedVal7, tmp6);
    inlinedVal9 = go(NofibPrelude, "?What makes you think I am", 0);
    inlinedVal10 = go(NofibPrelude, "?Does it please you to believe I am", 0);
    inlinedVal11 = go(NofibPrelude, "?Perhaps you would like to be", 0);
    inlinedVal12 = go(NofibPrelude, "?Do you sometimes wish you were", 0);
    tmp7 = NofibPrelude.Cons(inlinedVal12, NofibPrelude.Nil);
    tmp8 = NofibPrelude.Cons(inlinedVal11, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal10, tmp8);
    youAre = NofibPrelude.Cons(inlinedVal9, tmp9);
    inlinedVal13 = go(NofibPrelude, "?Don_t you really", 0);
    inlinedVal14 = go(NofibPrelude, "?Why don_t you", 0);
    inlinedVal15 = go(NofibPrelude, "?Do you wish to be able to", 0);
    inlinedVal16 = go(NofibPrelude, "Does that trouble you?", 0);
    tmp10 = NofibPrelude.Cons(inlinedVal16, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(inlinedVal15, tmp10);
    tmp12 = NofibPrelude.Cons(inlinedVal14, tmp11);
    iDont = NofibPrelude.Cons(inlinedVal13, tmp12);
    inlinedVal17 = go(NofibPrelude, "Tell me more about such feelings.", 0);
    inlinedVal18 = go(NofibPrelude, "?Do you often feel", 0);
    inlinedVal19 = go(NofibPrelude, "?Do you enjoy feeling", 0);
    tmp13 = NofibPrelude.Cons(inlinedVal19, NofibPrelude.Nil);
    tmp14 = NofibPrelude.Cons(inlinedVal18, tmp13);
    iFeel = NofibPrelude.Cons(inlinedVal17, tmp14);
    inlinedVal20 = go(NofibPrelude, "?Do you really believe I don't", 0);
    inlinedVal21 = go(NofibPrelude, ".Perhaps in good time I will", 0);
    inlinedVal22 = go(NofibPrelude, "?Do you want me to", 0);
    tmp15 = NofibPrelude.Cons(inlinedVal22, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(inlinedVal21, tmp15);
    whyDont = NofibPrelude.Cons(inlinedVal20, tmp16);
    inlinedVal23 = go(NofibPrelude, "?Do you think you should be able to", 0);
    inlinedVal24 = go(NofibPrelude, "?Why can't you", 0);
    tmp17 = NofibPrelude.Cons(inlinedVal24, NofibPrelude.Nil);
    whyCant = NofibPrelude.Cons(inlinedVal23, tmp17);
    inlinedVal25 = go(NofibPrelude, "?Why are you interested in whether or not I am", 0);
    inlinedVal26 = go(NofibPrelude, "?Would you prefer if I were not", 0);
    inlinedVal27 = go(NofibPrelude, "?Perhaps in your fantasies I am", 0);
    tmp18 = NofibPrelude.Cons(inlinedVal27, NofibPrelude.Nil);
    tmp19 = NofibPrelude.Cons(inlinedVal26, tmp18);
    areYou = NofibPrelude.Cons(inlinedVal25, tmp19);
    inlinedVal28 = go(NofibPrelude, "?How do you know you can't", 0);
    inlinedVal29 = go(NofibPrelude, "Have you tried?", 0);
    inlinedVal30 = go(NofibPrelude, "?Perhaps you can now", 0);
    tmp20 = NofibPrelude.Cons(inlinedVal30, NofibPrelude.Nil);
    tmp21 = NofibPrelude.Cons(inlinedVal29, tmp20);
    iCant = NofibPrelude.Cons(inlinedVal28, tmp21);
    inlinedVal31 = go(NofibPrelude, "?Did you come to me because you are", 0);
    inlinedVal32 = go(NofibPrelude, "?How long have you been", 0);
    inlinedVal33 = go(NofibPrelude, "?Do you believe it is normal to be", 0);
    inlinedVal34 = go(NofibPrelude, "?Do you enjoy being", 0);
    tmp22 = NofibPrelude.Cons(inlinedVal34, NofibPrelude.Nil);
    tmp23 = NofibPrelude.Cons(inlinedVal33, tmp22);
    tmp24 = NofibPrelude.Cons(inlinedVal32, tmp23);
    iAm = NofibPrelude.Cons(inlinedVal31, tmp24);
    inlinedVal35 = go(NofibPrelude, "We were discussing you --not me.", 0);
    inlinedVal36 = go(NofibPrelude, "?Oh,", 0);
    inlinedVal37 = go(NofibPrelude, "You're not really talking about me, are you?", 0);
    tmp25 = NofibPrelude.Cons(inlinedVal37, NofibPrelude.Nil);
    tmp26 = NofibPrelude.Cons(inlinedVal36, tmp25);
    you = NofibPrelude.Cons(inlinedVal35, tmp26);
    inlinedVal38 = go(NofibPrelude, "You seem quite positive.", 0);
    inlinedVal39 = go(NofibPrelude, "Are you Sure?", 0);
    inlinedVal40 = go(NofibPrelude, "I see.", 0);
    inlinedVal41 = go(NofibPrelude, "I understand.", 0);
    tmp27 = NofibPrelude.Cons(inlinedVal41, NofibPrelude.Nil);
    tmp28 = NofibPrelude.Cons(inlinedVal40, tmp27);
    tmp29 = NofibPrelude.Cons(inlinedVal39, tmp28);
    yes = NofibPrelude.Cons(inlinedVal38, tmp29);
    inlinedVal42 = go(NofibPrelude, "Are you saying no just to be negative?", 0);
    inlinedVal43 = go(NofibPrelude, "You are being a bit negative.", 0);
    inlinedVal44 = go(NofibPrelude, "Why not?", 0);
    inlinedVal45 = go(NofibPrelude, "Are you sure?", 0);
    inlinedVal46 = go(NofibPrelude, "Why no?", 0);
    tmp30 = NofibPrelude.Cons(inlinedVal46, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(inlinedVal45, tmp30);
    tmp32 = NofibPrelude.Cons(inlinedVal44, tmp31);
    tmp33 = NofibPrelude.Cons(inlinedVal43, tmp32);
    no = NofibPrelude.Cons(inlinedVal42, tmp33);
    inlinedVal47 = go(NofibPrelude, "Do computers worry you?", 0);
    inlinedVal48 = go(NofibPrelude, "Are you talking about me in particular?", 0);
    inlinedVal49 = go(NofibPrelude, "Are you frightened by machines?", 0);
    inlinedVal50 = go(NofibPrelude, "Why do you mention computers?", 0);
    inlinedVal51 = go(NofibPrelude, "What do you think machines have to do with your problems?", 0);
    inlinedVal52 = go(NofibPrelude, "Don't you think computers can help people?", 0);
    inlinedVal53 = go(NofibPrelude, "What is it about machines that worries you?", 0);
    tmp34 = NofibPrelude.Cons(inlinedVal53, NofibPrelude.Nil);
    tmp35 = NofibPrelude.Cons(inlinedVal52, tmp34);
    tmp36 = NofibPrelude.Cons(inlinedVal51, tmp35);
    tmp37 = NofibPrelude.Cons(inlinedVal50, tmp36);
    tmp38 = NofibPrelude.Cons(inlinedVal49, tmp37);
    tmp39 = NofibPrelude.Cons(inlinedVal48, tmp38);
    computer = NofibPrelude.Cons(inlinedVal47, tmp39);
    inlinedVal54 = go(NofibPrelude, "?Why do you want", 0);
    inlinedVal55 = go(NofibPrelude, "?What would it mean to you if you got", 0);
    inlinedVal56 = go(NofibPrelude, "?Suppose you got", 0);
    inlinedVal57 = go(NofibPrelude, "?What if you never got", 0);
    inlinedVal58 = go(NofibPrelude, ".I sometimes also want", 0);
    tmp40 = NofibPrelude.Cons(inlinedVal58, NofibPrelude.Nil);
    tmp41 = NofibPrelude.Cons(inlinedVal57, tmp40);
    tmp42 = NofibPrelude.Cons(inlinedVal56, tmp41);
    tmp43 = NofibPrelude.Cons(inlinedVal55, tmp42);
    iWant = NofibPrelude.Cons(inlinedVal54, tmp43);
    inlinedVal59 = go(NofibPrelude, "Why do you ask?", 0);
    inlinedVal60 = go(NofibPrelude, "Does that question interest you?", 0);
    inlinedVal61 = go(NofibPrelude, "What answer would please you the most?", 0);
    inlinedVal62 = go(NofibPrelude, "What do you think?", 0);
    inlinedVal63 = go(NofibPrelude, "Are such questions on your mind often?", 0);
    inlinedVal64 = go(NofibPrelude, "What is it that you really want to know?", 0);
    inlinedVal65 = go(NofibPrelude, "Have you asked anyone else?", 0);
    inlinedVal66 = go(NofibPrelude, "Have you asked such questions before?", 0);
    inlinedVal67 = go(NofibPrelude, "What else comes to mind when you ask that?", 0);
    tmp44 = NofibPrelude.Cons(inlinedVal67, NofibPrelude.Nil);
    tmp45 = NofibPrelude.Cons(inlinedVal66, tmp44);
    tmp46 = NofibPrelude.Cons(inlinedVal65, tmp45);
    tmp47 = NofibPrelude.Cons(inlinedVal64, tmp46);
    tmp48 = NofibPrelude.Cons(inlinedVal63, tmp47);
    tmp49 = NofibPrelude.Cons(inlinedVal62, tmp48);
    tmp50 = NofibPrelude.Cons(inlinedVal61, tmp49);
    tmp51 = NofibPrelude.Cons(inlinedVal60, tmp50);
    question = NofibPrelude.Cons(inlinedVal59, tmp51);
    inlinedVal68 = go(NofibPrelude, "Names don't interest me.", 0);
    inlinedVal69 = go(NofibPrelude, "I don't care about names --please go on.", 0);
    tmp52 = NofibPrelude.Cons(inlinedVal69, NofibPrelude.Nil);
    name = NofibPrelude.Cons(inlinedVal68, tmp52);
    inlinedVal70 = go(NofibPrelude, "Is that the real reason?", 0);
    inlinedVal71 = go(NofibPrelude, "Don't any other reasons come to mind?", 0);
    inlinedVal72 = go(NofibPrelude, "Does that reason explain anything else?", 0);
    inlinedVal73 = go(NofibPrelude, "What other reasons might there be?", 0);
    tmp53 = NofibPrelude.Cons(inlinedVal73, NofibPrelude.Nil);
    tmp54 = NofibPrelude.Cons(inlinedVal72, tmp53);
    tmp55 = NofibPrelude.Cons(inlinedVal71, tmp54);
    because = NofibPrelude.Cons(inlinedVal70, tmp55);
    inlinedVal74 = go(NofibPrelude, "Please don't apologise!", 0);
    inlinedVal75 = go(NofibPrelude, "Apologies are not necessary.", 0);
    inlinedVal76 = go(NofibPrelude, "What feelings do you have when you apologise?", 0);
    inlinedVal77 = go(NofibPrelude, "Don't be so defensive!", 0);
    tmp56 = NofibPrelude.Cons(inlinedVal77, NofibPrelude.Nil);
    tmp57 = NofibPrelude.Cons(inlinedVal76, tmp56);
    tmp58 = NofibPrelude.Cons(inlinedVal75, tmp57);
    sorry = NofibPrelude.Cons(inlinedVal74, tmp58);
    inlinedVal78 = go(NofibPrelude, "What does that dream suggest to you?", 0);
    inlinedVal79 = go(NofibPrelude, "Do you dream often?", 0);
    inlinedVal80 = go(NofibPrelude, "What persons appear in your dreams?", 0);
    inlinedVal81 = go(NofibPrelude, "Are you disturbed by your dreams?", 0);
    tmp59 = NofibPrelude.Cons(inlinedVal81, NofibPrelude.Nil);
    tmp60 = NofibPrelude.Cons(inlinedVal80, tmp59);
    tmp61 = NofibPrelude.Cons(inlinedVal79, tmp60);
    dream = NofibPrelude.Cons(inlinedVal78, tmp61);
    inlinedVal82 = go(NofibPrelude, "How do you...please state your problem.", 0);
    hello = NofibPrelude.Cons(inlinedVal82, NofibPrelude.Nil);
    inlinedVal83 = go(NofibPrelude, "You don't seem quite certain.", 0);
    inlinedVal84 = go(NofibPrelude, "Why the uncertain tone?", 0);
    inlinedVal85 = go(NofibPrelude, "Can't you be more positive?", 0);
    inlinedVal86 = go(NofibPrelude, "You aren't sure?", 0);
    inlinedVal87 = go(NofibPrelude, "Don't you know?", 0);
    tmp62 = NofibPrelude.Cons(inlinedVal87, NofibPrelude.Nil);
    tmp63 = NofibPrelude.Cons(inlinedVal86, tmp62);
    tmp64 = NofibPrelude.Cons(inlinedVal85, tmp63);
    tmp65 = NofibPrelude.Cons(inlinedVal84, tmp64);
    maybe1 = NofibPrelude.Cons(inlinedVal83, tmp65);
    inlinedVal88 = go(NofibPrelude, "?Why are you concerned about my", 0);
    inlinedVal89 = go(NofibPrelude, "?What about your own", 0);
    tmp66 = NofibPrelude.Cons(inlinedVal89, NofibPrelude.Nil);
    your = NofibPrelude.Cons(inlinedVal88, tmp66);
    inlinedVal90 = go(NofibPrelude, "Can you think of a specific example?", 0);
    inlinedVal91 = go(NofibPrelude, "When?", 0);
    inlinedVal92 = go(NofibPrelude, "What are you thinking of?", 0);
    inlinedVal93 = go(NofibPrelude, "Really, always?", 0);
    tmp67 = NofibPrelude.Cons(inlinedVal93, NofibPrelude.Nil);
    tmp68 = NofibPrelude.Cons(inlinedVal92, tmp67);
    tmp69 = NofibPrelude.Cons(inlinedVal91, tmp68);
    always = NofibPrelude.Cons(inlinedVal90, tmp69);
    inlinedVal94 = go(NofibPrelude, "Do you really think so?", 0);
    inlinedVal95 = go(NofibPrelude, "?But you are not sure you", 0);
    inlinedVal96 = go(NofibPrelude, "?Do you doubt you", 0);
    tmp70 = NofibPrelude.Cons(inlinedVal96, NofibPrelude.Nil);
    tmp71 = NofibPrelude.Cons(inlinedVal95, tmp70);
    think = NofibPrelude.Cons(inlinedVal94, tmp71);
    inlinedVal97 = go(NofibPrelude, "In what way?", 0);
    inlinedVal98 = go(NofibPrelude, "What resemblence do you see?", 0);
    inlinedVal99 = go(NofibPrelude, "What does the similarity suggest to you?", 0);
    inlinedVal100 = go(NofibPrelude, "What other connections do you see?", 0);
    inlinedVal101 = go(NofibPrelude, "Cound there really be some connection?", 0);
    inlinedVal102 = go(NofibPrelude, "How?", 0);
    tmp72 = NofibPrelude.Cons(inlinedVal102, NofibPrelude.Nil);
    tmp73 = NofibPrelude.Cons(inlinedVal101, tmp72);
    tmp74 = NofibPrelude.Cons(inlinedVal100, tmp73);
    tmp75 = NofibPrelude.Cons(inlinedVal99, tmp74);
    tmp76 = NofibPrelude.Cons(inlinedVal98, tmp75);
    alike = NofibPrelude.Cons(inlinedVal97, tmp76);
    inlinedVal103 = go(NofibPrelude, "Why do you bring up the topic of friends?", 0);
    inlinedVal104 = go(NofibPrelude, "Do your friends worry you?", 0);
    inlinedVal105 = go(NofibPrelude, "Do your friends pick on you?", 0);
    inlinedVal106 = go(NofibPrelude, "Are you sure you have any friends?", 0);
    inlinedVal107 = go(NofibPrelude, "Do you impose on your friends?", 0);
    inlinedVal108 = go(NofibPrelude, "Perhaps your love for friends worries you.", 0);
    tmp77 = NofibPrelude.Cons(inlinedVal108, NofibPrelude.Nil);
    tmp78 = NofibPrelude.Cons(inlinedVal107, tmp77);
    tmp79 = NofibPrelude.Cons(inlinedVal106, tmp78);
    tmp80 = NofibPrelude.Cons(inlinedVal105, tmp79);
    tmp81 = NofibPrelude.Cons(inlinedVal104, tmp80);
    friend = NofibPrelude.Cons(inlinedVal103, tmp81);
    inlinedVal109 = go(NofibPrelude, "I'm not sure I understand you fully.", 0);
    inlinedVal110 = go(NofibPrelude, "What does that suggest to you?", 0);
    inlinedVal111 = go(NofibPrelude, "I see.", 0);
    inlinedVal112 = go(NofibPrelude, "Can you elaborate on that?", 0);
    inlinedVal113 = go(NofibPrelude, "Say, do you have any psychological problems?", 0);
    tmp82 = NofibPrelude.Cons(inlinedVal113, NofibPrelude.Nil);
    tmp83 = NofibPrelude.Cons(inlinedVal112, tmp82);
    tmp84 = NofibPrelude.Cons(inlinedVal111, tmp83);
    tmp85 = NofibPrelude.Cons(inlinedVal110, tmp84);
    nokeyMsgs = NofibPrelude.Cons(inlinedVal109, tmp85);
    inlinedVal114 = go(NofibPrelude, "CAN YOU", 0);
    tmp86 = globalThis.Object.freeze([
      inlinedVal114,
      canYou
    ]);
    inlinedVal115 = go(NofibPrelude, "CAN I", 0);
    tmp87 = globalThis.Object.freeze([
      inlinedVal115,
      canI
    ]);
    inlinedVal116 = go(NofibPrelude, "YOU ARE", 0);
    tmp88 = globalThis.Object.freeze([
      inlinedVal116,
      youAre
    ]);
    inlinedVal117 = go(NofibPrelude, "YOU'RE", 0);
    tmp89 = globalThis.Object.freeze([
      inlinedVal117,
      youAre
    ]);
    inlinedVal118 = go(NofibPrelude, "I DON'T", 0);
    tmp90 = globalThis.Object.freeze([
      inlinedVal118,
      iDont
    ]);
    inlinedVal119 = go(NofibPrelude, "I FEEL", 0);
    tmp91 = globalThis.Object.freeze([
      inlinedVal119,
      iFeel
    ]);
    inlinedVal120 = go(NofibPrelude, "WHY DON'T YOU", 0);
    tmp92 = globalThis.Object.freeze([
      inlinedVal120,
      whyDont
    ]);
    inlinedVal121 = go(NofibPrelude, "WHY CAN'T I", 0);
    tmp93 = globalThis.Object.freeze([
      inlinedVal121,
      whyCant
    ]);
    inlinedVal122 = go(NofibPrelude, "ARE YOU", 0);
    tmp94 = globalThis.Object.freeze([
      inlinedVal122,
      areYou
    ]);
    inlinedVal123 = go(NofibPrelude, "I CAN'T", 0);
    tmp95 = globalThis.Object.freeze([
      inlinedVal123,
      iCant
    ]);
    inlinedVal124 = go(NofibPrelude, "I AM", 0);
    tmp96 = globalThis.Object.freeze([
      inlinedVal124,
      iAm
    ]);
    inlinedVal125 = go(NofibPrelude, "I'M", 0);
    tmp97 = globalThis.Object.freeze([
      inlinedVal125,
      iAm
    ]);
    inlinedVal126 = go(NofibPrelude, "YOU", 0);
    tmp98 = globalThis.Object.freeze([
      inlinedVal126,
      you
    ]);
    inlinedVal127 = go(NofibPrelude, "YES", 0);
    tmp99 = globalThis.Object.freeze([
      inlinedVal127,
      yes
    ]);
    inlinedVal128 = go(NofibPrelude, "NO", 0);
    tmp100 = globalThis.Object.freeze([
      inlinedVal128,
      no
    ]);
    inlinedVal129 = go(NofibPrelude, "COMPUTER", 0);
    tmp101 = globalThis.Object.freeze([
      inlinedVal129,
      computer
    ]);
    inlinedVal130 = go(NofibPrelude, "COMPUTERS", 0);
    tmp102 = globalThis.Object.freeze([
      inlinedVal130,
      computer
    ]);
    inlinedVal131 = go(NofibPrelude, "I WANT", 0);
    tmp103 = globalThis.Object.freeze([
      inlinedVal131,
      iWant
    ]);
    inlinedVal132 = go(NofibPrelude, "WHAT", 0);
    tmp104 = globalThis.Object.freeze([
      inlinedVal132,
      question
    ]);
    inlinedVal133 = go(NofibPrelude, "HOW", 0);
    tmp105 = globalThis.Object.freeze([
      inlinedVal133,
      question
    ]);
    inlinedVal134 = go(NofibPrelude, "WHO", 0);
    tmp106 = globalThis.Object.freeze([
      inlinedVal134,
      question
    ]);
    inlinedVal135 = go(NofibPrelude, "WHERE", 0);
    tmp107 = globalThis.Object.freeze([
      inlinedVal135,
      question
    ]);
    inlinedVal136 = go(NofibPrelude, "WHEN", 0);
    tmp108 = globalThis.Object.freeze([
      inlinedVal136,
      question
    ]);
    inlinedVal137 = go(NofibPrelude, "NAME", 0);
    tmp109 = globalThis.Object.freeze([
      inlinedVal137,
      name
    ]);
    inlinedVal138 = go(NofibPrelude, "WHY", 0);
    tmp110 = globalThis.Object.freeze([
      inlinedVal138,
      question
    ]);
    inlinedVal139 = go(NofibPrelude, "CAUSE", 0);
    tmp111 = globalThis.Object.freeze([
      inlinedVal139,
      because
    ]);
    inlinedVal140 = go(NofibPrelude, "BECAUSE", 0);
    tmp112 = globalThis.Object.freeze([
      inlinedVal140,
      because
    ]);
    inlinedVal141 = go(NofibPrelude, "DREAM", 0);
    tmp113 = globalThis.Object.freeze([
      inlinedVal141,
      dream
    ]);
    inlinedVal142 = go(NofibPrelude, "SORRY", 0);
    tmp114 = globalThis.Object.freeze([
      inlinedVal142,
      sorry
    ]);
    inlinedVal143 = go(NofibPrelude, "HI", 0);
    tmp115 = globalThis.Object.freeze([
      inlinedVal143,
      hello
    ]);
    inlinedVal144 = go(NofibPrelude, "DREAMS", 0);
    tmp116 = globalThis.Object.freeze([
      inlinedVal144,
      dream
    ]);
    inlinedVal145 = go(NofibPrelude, "MAYBE", 0);
    tmp117 = globalThis.Object.freeze([
      inlinedVal145,
      maybe1
    ]);
    inlinedVal146 = go(NofibPrelude, "HELLO", 0);
    tmp118 = globalThis.Object.freeze([
      inlinedVal146,
      hello
    ]);
    inlinedVal147 = go(NofibPrelude, "ALWAYS", 0);
    tmp119 = globalThis.Object.freeze([
      inlinedVal147,
      always
    ]);
    inlinedVal148 = go(NofibPrelude, "YOUR", 0);
    tmp120 = globalThis.Object.freeze([
      inlinedVal148,
      your
    ]);
    inlinedVal149 = go(NofibPrelude, "ALIKE", 0);
    tmp121 = globalThis.Object.freeze([
      inlinedVal149,
      alike
    ]);
    inlinedVal150 = go(NofibPrelude, "THINK", 0);
    tmp122 = globalThis.Object.freeze([
      inlinedVal150,
      think
    ]);
    inlinedVal151 = go(NofibPrelude, "FRIENDS", 0);
    tmp123 = globalThis.Object.freeze([
      inlinedVal151,
      friend
    ]);
    inlinedVal152 = go(NofibPrelude, "FRIEND", 0);
    tmp124 = globalThis.Object.freeze([
      inlinedVal152,
      friend
    ]);
    tmp125 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      nokeyMsgs
    ]);
    tmp126 = NofibPrelude.Cons(tmp125, NofibPrelude.Nil);
    tmp127 = NofibPrelude.Cons(tmp124, tmp126);
    tmp128 = NofibPrelude.Cons(tmp123, tmp127);
    tmp129 = NofibPrelude.Cons(tmp122, tmp128);
    tmp130 = NofibPrelude.Cons(tmp121, tmp129);
    tmp131 = NofibPrelude.Cons(tmp120, tmp130);
    tmp132 = NofibPrelude.Cons(tmp119, tmp131);
    tmp133 = NofibPrelude.Cons(tmp118, tmp132);
    tmp134 = NofibPrelude.Cons(tmp117, tmp133);
    tmp135 = NofibPrelude.Cons(tmp116, tmp134);
    tmp136 = NofibPrelude.Cons(tmp115, tmp135);
    tmp137 = NofibPrelude.Cons(tmp114, tmp136);
    tmp138 = NofibPrelude.Cons(tmp113, tmp137);
    tmp139 = NofibPrelude.Cons(tmp112, tmp138);
    tmp140 = NofibPrelude.Cons(tmp111, tmp139);
    tmp141 = NofibPrelude.Cons(tmp110, tmp140);
    tmp142 = NofibPrelude.Cons(tmp109, tmp141);
    tmp143 = NofibPrelude.Cons(tmp108, tmp142);
    tmp144 = NofibPrelude.Cons(tmp107, tmp143);
    tmp145 = NofibPrelude.Cons(tmp106, tmp144);
    tmp146 = NofibPrelude.Cons(tmp105, tmp145);
    tmp147 = NofibPrelude.Cons(tmp104, tmp146);
    tmp148 = NofibPrelude.Cons(tmp103, tmp147);
    tmp149 = NofibPrelude.Cons(tmp102, tmp148);
    tmp150 = NofibPrelude.Cons(tmp101, tmp149);
    tmp151 = NofibPrelude.Cons(tmp100, tmp150);
    tmp152 = NofibPrelude.Cons(tmp99, tmp151);
    tmp153 = NofibPrelude.Cons(tmp98, tmp152);
    tmp154 = NofibPrelude.Cons(tmp97, tmp153);
    tmp155 = NofibPrelude.Cons(tmp96, tmp154);
    tmp156 = NofibPrelude.Cons(tmp95, tmp155);
    tmp157 = NofibPrelude.Cons(tmp94, tmp156);
    tmp158 = NofibPrelude.Cons(tmp93, tmp157);
    tmp159 = NofibPrelude.Cons(tmp92, tmp158);
    tmp160 = NofibPrelude.Cons(tmp91, tmp159);
    tmp161 = NofibPrelude.Cons(tmp90, tmp160);
    tmp162 = NofibPrelude.Cons(tmp89, tmp161);
    tmp163 = NofibPrelude.Cons(tmp88, tmp162);
    tmp164 = NofibPrelude.Cons(tmp87, tmp163);
    tmp165 = NofibPrelude.Cons(tmp86, tmp164);
    eliza.respMsgs = tmp165;
    tmp166 = lscomp(eliza, eliza.respMsgs);
    tmp167 = eliza.#cycle(eliza.repeatMsgs);
    tmp168 = globalThis.Object.freeze([
      tmp166,
      tmp167
    ]);
    eliza.initial = tmp168;
    inlinedVal153 = go(NofibPrelude, "me", 0);
    inlinedVal154 = go(NofibPrelude, "you", 0);
    tmp169 = globalThis.Object.freeze([
      inlinedVal153,
      inlinedVal154
    ]);
    oneways = NofibPrelude.Cons(tmp169, NofibPrelude.Nil);
    inlinedVal155 = go(NofibPrelude, "are", 0);
    inlinedVal156 = go(NofibPrelude, "am", 0);
    tmp170 = globalThis.Object.freeze([
      inlinedVal155,
      inlinedVal156
    ]);
    inlinedVal157 = go(NofibPrelude, "we're", 0);
    inlinedVal158 = go(NofibPrelude, "was", 0);
    tmp171 = globalThis.Object.freeze([
      inlinedVal157,
      inlinedVal158
    ]);
    inlinedVal159 = go(NofibPrelude, "you", 0);
    inlinedVal160 = go(NofibPrelude, "I", 0);
    tmp172 = globalThis.Object.freeze([
      inlinedVal159,
      inlinedVal160
    ]);
    inlinedVal161 = go(NofibPrelude, "your", 0);
    inlinedVal162 = go(NofibPrelude, "my", 0);
    tmp173 = globalThis.Object.freeze([
      inlinedVal161,
      inlinedVal162
    ]);
    inlinedVal163 = go(NofibPrelude, "I've", 0);
    inlinedVal164 = go(NofibPrelude, "you've", 0);
    tmp174 = globalThis.Object.freeze([
      inlinedVal163,
      inlinedVal164
    ]);
    inlinedVal165 = go(NofibPrelude, "I'm", 0);
    inlinedVal166 = go(NofibPrelude, "you're", 0);
    tmp175 = globalThis.Object.freeze([
      inlinedVal165,
      inlinedVal166
    ]);
    tmp176 = NofibPrelude.Cons(tmp175, NofibPrelude.Nil);
    tmp177 = NofibPrelude.Cons(tmp174, tmp176);
    tmp178 = NofibPrelude.Cons(tmp173, tmp177);
    tmp179 = NofibPrelude.Cons(tmp172, tmp178);
    tmp180 = NofibPrelude.Cons(tmp171, tmp179);
    bothways = NofibPrelude.Cons(tmp170, tmp180);
    tmp181 = lscomp1(bothways);
    tmp182 = NofibPrelude.concat(tmp181);
    tmp183 = NofibPrelude.append(oneways, tmp182);
    inlinedVal167 = NofibPrelude.map(lambda$2(eliza), tmp183);
    eliza.conjugates = inlinedVal167;
  }
  static #toUpper(c) {
    return runtime.safeCall(c.toUpperCase())
  }
  static #lz_map(f, ls) {
    return NofibPrelude.Lazy(lambda$3(eliza, f, ls))
  }
  static #append_lz(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Lazy.class) {
        return ys.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      return NofibPrelude.Lazy(lambda$4(eliza, ys, arg$Cons$1$, arg$Cons$0$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cycle(xs) {
    let inlinedVal;
    inlinedVal = NofibPrelude.Lazy(lambda$5(eliza, xs));
    return eliza.#append_lz(xs, inlinedVal)
  }
  static #isSpace(c) {
    return c === " "
  }
  static #words(s) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = NofibPrelude.leaveWhile(eliza.#isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      scrut1 = NofibPrelude.break_(eliza.#isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = eliza.#words(element1$);
        return NofibPrelude.Cons(element0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unwords(ws) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      tmp = go1(arg$Cons$1$);
      return NofibPrelude.append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #null_lz(ls) {
    let inlinedVal;
    if (ls instanceof NofibPrelude.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude.LzNil.class) {
        return true
      } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #trim(ls) {
    let tmp;
    tmp = NofibPrelude.leaveWhile(lambda3, ls);
    return NofibPrelude.foldr(cons, NofibPrelude.Nil, tmp)
  }
  static #repeated(kt_rp) {
    let element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      element0$ = runtime.Tuple.get(kt_rp, 0);
      element1$ = runtime.Tuple.get(kt_rp, 1);
      if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element1$.head;
        arg$Cons$1$ = element1$.tail;
        tmp = globalThis.Object.freeze([
          element0$,
          arg$Cons$1$
        ]);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #newKeyTab(kt_, kt_rp) {
    let element1$;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      runtime.Tuple.get(kt_rp, 0);
      element1$ = runtime.Tuple.get(kt_rp, 1);
      return globalThis.Object.freeze([
        kt_,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #keyTabOf(kt_rp) {
    let element0$;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      element0$ = runtime.Tuple.get(kt_rp, 0);
      runtime.Tuple.get(kt_rp, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #makeResponse(cs, us) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
    if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      switch (arg$Cons$0$) {
        case "?":
          {
            let inlinedVal, inlinedVal1;
            inlinedVal = go(NofibPrelude, " ", 0);
            inlinedVal1 = go(NofibPrelude, "?", 0);
            tmp = NofibPrelude.append(us, inlinedVal1);
            tmp1 = NofibPrelude.append(inlinedVal, tmp);
            return NofibPrelude.append(arg$Cons$1$, tmp1);
          }
        case ".":
          {
            let inlinedVal, inlinedVal1;
            inlinedVal = go(NofibPrelude, " ", 0);
            inlinedVal1 = go(NofibPrelude, ".", 0);
            tmp2 = NofibPrelude.append(us, inlinedVal1);
            tmp3 = NofibPrelude.append(inlinedVal, tmp2);
            return NofibPrelude.append(arg$Cons$1$, tmp3);
          }
      }
      return cs
    }
    return cs;
  }
  static #prefix(xxs, yys) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$LzCons$0$, arg$LzCons$1$, tmp;
      if (xxs instanceof NofibPrelude.Nil.class) {
        return true
      } else if (xxs instanceof NofibPrelude.Cons.class) {
        let inlinedVal;
        arg$Cons$0$ = xxs.head;
        arg$Cons$1$ = xxs.tail;
        if (yys instanceof NofibPrelude.Lazy.class) {
          inlinedVal = yys.get();
          if (inlinedVal instanceof NofibPrelude.LzNil.class) {
            return false
          } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
            arg$LzCons$0$ = inlinedVal.head;
            arg$LzCons$1$ = inlinedVal.tail;
            tmp = NofibPrelude.listEq(arg$Cons$0$, arg$LzCons$0$);
            if (tmp === true) {
              xxs = arg$Cons$1$;
              yys = arg$LzCons$1$;
              continue loopLabel
            }
            return false;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #tails(xs) {
    return NofibPrelude.Lazy(lambda$6(eliza, xs))
  }
  static #ucase(ls) {
    return NofibPrelude.map(eliza.#toUpper, ls)
  }
  static #conjug(d, w) {
    let tmp, conj$here, inlinedVal, inlinedVal1;
    if (w instanceof NofibPrelude.Nil.class) {
      inlinedVal1 = d;
    } else {
      inlinedVal1 = w;
    }
    conj$here = conj$(eliza);
    tmp = NofibPrelude.map(conj$here, inlinedVal1);
    inlinedVal = NofibPrelude.foldr(cons1, NofibPrelude.Nil, tmp);
    return eliza.#unwords(inlinedVal)
  }
  static #replies(key, l1) {
    let tmp, p, f, inlinedVal;
    tmp = eliza.#tails(l1);
    p = lambda$7(eliza, key);
    inlinedVal = NofibPrelude.Lazy(lambda$1(NofibPrelude, p, tmp));
    f = lambda$8(eliza, key, l1);
    return NofibPrelude.Lazy(lambda$(NofibPrelude, f, inlinedVal))
  }
  static #answer(st, l1) {
    let scrut, element1$, element0$, tmp, tmp1;
    tmp = eliza.#keyTabOf(st);
    scrut = ans(eliza, tmp, l1);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = eliza.#newKeyTab(element1$, st);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #session(rs, prev, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, arg$Cons$0$);
      if (scrut === true) {
        tmp = eliza.#repeated(rs);
      } else {
        tmp = eliza.#answer(rs, arg$Cons$0$);
      }
      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
        let inlinedVal;
        element0$ = runtime.Tuple.get(tmp, 0);
        element1$ = runtime.Tuple.get(tmp, 1);
        inlinedVal = go(NofibPrelude, "\n\n", 0);
        tmp1 = eliza.#session(element1$, arg$Cons$0$, arg$Cons$1$);
        tmp2 = NofibPrelude.append(inlinedVal, tmp1);
        return NofibPrelude.append(element0$, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testEliza_nofib(n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
    inlinedVal = go(NofibPrelude, "Are we alone?", 0);
    inlinedVal1 = go(NofibPrelude, "That the Roswell event was actually an alien encounter. Do you agreed?", 0);
    inlinedVal2 = go(NofibPrelude, "But why not talk about you, its more fun.", 0);
    inlinedVal3 = go(NofibPrelude, "I dont ask, you do", 0);
    inlinedVal4 = go(NofibPrelude, "do ray me", 0);
    inlinedVal5 = go(NofibPrelude, "Nop, thats because your a computer", 0);
    inlinedVal6 = go(NofibPrelude, "you dont", 0);
    inlinedVal7 = go(NofibPrelude, "Oh, a paranoid computer, ehh?", 0);
    inlinedVal8 = go(NofibPrelude, "Tell me about *your* mother", 0);
    inlinedVal9 = go(NofibPrelude, "No, what what was she like?", 0);
    inlinedVal10 = go(NofibPrelude, "I'm asking questions, not you", 0);
    inlinedVal11 = go(NofibPrelude, "no", 0);
    inlinedVal12 = go(NofibPrelude, "yes", 0);
    inlinedVal13 = go(NofibPrelude, "but I'm not", 0);
    tmp = NofibPrelude.Cons(inlinedVal13, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal12, tmp);
    tmp2 = NofibPrelude.Cons(inlinedVal11, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal10, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal9, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal8, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal7, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal6, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal5, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal4, tmp8);
    tmp10 = NofibPrelude.Cons(inlinedVal3, tmp9);
    tmp11 = NofibPrelude.Cons(inlinedVal2, tmp10);
    tmp12 = NofibPrelude.Cons(inlinedVal1, tmp11);
    tmp13 = NofibPrelude.Cons(inlinedVal, tmp12);
    tmp14 = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda$9(eliza, tmp13), tmp14)
  }
  static main() {
    let tmp, tmp1;
    tmp = eliza.#testEliza_nofib(20);
    tmp1 = NofibPrelude.map(lambda10, tmp);
    return runtime.safeCall(tmp1.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "eliza"];
});
export { go1 as _$_modulePrivate_$_go };
export { cons as _$_modulePrivate_$_cons };
export { lscomp as _$_modulePrivate_$_lscomp };
export { prepare as _$_modulePrivate_$_prepare };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { cons1 as _$_modulePrivate_$_cons1 };
export { maybe as _$_modulePrivate_$_maybe };
export { conj as _$_modulePrivate_$_conj };
export { trailingI as _$_modulePrivate_$_trailingI };
export { ans as _$_modulePrivate_$_ans };
export { cons2 as _$_modulePrivate_$_cons2 };
export { eliza1 as _$_modulePrivate_$_eliza };
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
export { lambda$2 as _$_modulePrivate_$_lambda$ };
export { lambda$3 as _$_modulePrivate_$_lambda$1 };
export { lambda$4 as _$_modulePrivate_$_lambda$2 };
export { lambda$5 as _$_modulePrivate_$_lambda$3 };
export { lambda$6 as _$_modulePrivate_$_lambda$4 };
export { conj$ as _$_modulePrivate_$_conj$ };
export { lambda$7 as _$_modulePrivate_$_lambda$5 };
export { lambda$8 as _$_modulePrivate_$_lambda$6 };
export { lambda$9 as _$_modulePrivate_$_lambda$7 };
export { lambda$10 as _$_modulePrivate_$_lambda$8 };
export default eliza1;
