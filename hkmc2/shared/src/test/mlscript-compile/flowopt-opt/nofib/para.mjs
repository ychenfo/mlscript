const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const fold1$accessorSymbol = globalThis.Symbol("fold1");
const glue$accessorSymbol = globalThis.Symbol("glue");
const null__$accessorSymbol = globalThis.Symbol("null__");
const single_$accessorSymbol = globalThis.Symbol("single_");
const head_$accessorSymbol = globalThis.Symbol("head_");
const last_$accessorSymbol = globalThis.Symbol("last_");
const cons_$accessorSymbol = globalThis.Symbol("cons_");
const tail_$accessorSymbol = globalThis.Symbol("tail_");
const init_$accessorSymbol = globalThis.Symbol("init_");
let go1, plus, linc, plus1, start, breakk, unknownEq, bf, old_width_hd, width_hd, myAdd, single, cost, leave_nofit, trim, new_, para1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, plus$, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10;
lambda$10 = (undefined, function (para2) {
  return (x) => {
    return lambda19(para2, x)
  }
});
lambda19 = (undefined, function (para2, x) {
  let tmp, element0$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
    element0$ = runtime.Tuple.get(x, 0);
    runtime.Tuple.get(x, 1);
    runtime.Tuple.get(x, 2);
    tmp = para2[last_$accessorSymbol](element0$);
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
      runtime.Tuple.get(tmp, 0);
      runtime.Tuple.get(tmp, 1);
      return runtime.Tuple.get(tmp, 2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
single = function single(para2, p) {
  let inlinedVal;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal = runtime.Tuple.get(p, 2);
    return inlinedVal === 0
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
width_hd = function width_hd(para2, tot_width, p) {
  let tmp, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return tot_width
    }
    {
      let element0$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        element0$ = runtime.Tuple.get(p, 0);
        runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = tot_width - element0$;
        return tmp - 1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cost = function cost(para2, tot_width, p) {
  let a, tmp, tmp1, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return 0
    }
    {
      let element1$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = width_hd(para2, tot_width, p);
        a = para2.optw - tmp;
        tmp1 = a * a;
        return element1$ + tmp1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
old_width_hd = function old_width_hd(para2, tw, p) {
  let tmp, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return tw
    }
    {
      let element0$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        element0$ = runtime.Tuple.get(p, 0);
        runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = tw - element0$;
        return tmp - 1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
new_ = function new_(para2, tl, tw, p) {
  let x, tmp, tmp1, tmp2, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return globalThis.Object.freeze([
        tw,
        0,
        tl
      ])
    }
    {
      let element1$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = old_width_hd(para2, tw, p);
        x = para2.optw - tmp;
        tmp1 = x * x;
        tmp2 = element1$ + tmp1;
        return globalThis.Object.freeze([
          tw,
          tmp2,
          tl
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
trim = function trim(para2, tot_width, ps_pq) {
  loopLabel: while (true) {
    let scrut, scrut1, ps_p, q, p, scrut2, tmp, tmp1;
    scrut = para2[null__$accessorSymbol](ps_pq);
    if (scrut === true) {
      return ps_pq
    }
    scrut1 = para2[single_$accessorSymbol](ps_pq);
    if (scrut1 === true) {
      return ps_pq
    }
    ps_p = para2[init_$accessorSymbol](ps_pq);
    q = para2[last_$accessorSymbol](ps_pq);
    p = para2[last_$accessorSymbol](ps_p);
    tmp = cost(para2, tot_width, p);
    tmp1 = cost(para2, tot_width, q);
    scrut2 = tmp <= tmp1;
    if (scrut2 === true) {
      ps_pq = ps_p;
      continue loopLabel
    }
    return ps_pq;
  }
};
leave_nofit = function leave_nofit(para2, tot_width, ps_p) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1, tmp2;
    scrut = para2[null__$accessorSymbol](ps_p);
    if (scrut === true) {
      return ps_p
    }
    tmp = para2[last_$accessorSymbol](ps_p);
    tmp1 = width_hd(para2, tot_width, tmp);
    scrut1 = tmp1 > para2.maxw;
    if (scrut1 === true) {
      tmp2 = para2[init_$accessorSymbol](ps_p);
      ps_p = tmp2;
      continue loopLabel
    }
    return ps_p;
  }
};
bf = function bf(para2, tot_width, p, q) {
  let wqh, rqh, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1;
  wqh = width_hd(para2, tot_width, q);
  tmp = para2.maxw - wqh;
  rqh = tmp + 1;
  if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
    runtime.Tuple.get(q, 0);
    runtime.Tuple.get(q, 1);
    inlinedVal1 = runtime.Tuple.get(q, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      let element1$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp1 = element1$ === 0;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp1 = false;
    }
    if (tmp1 === true) {
      tmp2 = width_hd(para2, tot_width, p);
      tmp3 = para2.optw - tmp2;
      return runtime.safeCall(globalThis.Math.min(tmp3, rqh))
    }
    {
      let inlinedVal2, inlinedVal3;
      if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
        runtime.Tuple.get(q, 0);
        runtime.Tuple.get(q, 1);
        inlinedVal3 = runtime.Tuple.get(q, 2);
        inlinedVal2 = inlinedVal3 === 0;
        if (inlinedVal2 === true) {
          return rqh
        }
        {
          let tmp10, tmp11, inlinedVal4, tmp12;
          tmp4 = cost(para2, tot_width, p);
          tmp5 = cost(para2, tot_width, q);
          tmp6 = tmp4 - tmp5;
          tmp7 = width_hd(para2, tot_width, p);
          tmp8 = wqh - tmp7;
          tmp9 = 2 * tmp8;
          tmp10 = tmp6 + tmp9;
          tmp11 = tmp10 - 1;
          tmp12 = tmp11 / tmp9;
          inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp12));
          return runtime.safeCall(globalThis.Math.min(inlinedVal4, rqh));
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
myAdd = function myAdd(para2, tot_width, p, qr_rs) {
  loopLabel: while (true) {
    let q, r_rs, r1, scrut, tmp, tmp1, tmp2, tmp3;
    tmp = para2[single_$accessorSymbol](qr_rs);
    if (tmp === false) {
      tmp1 = para2[null__$accessorSymbol](qr_rs);
      if (tmp1 === true) {
        return para2[cons_$accessorSymbol](p, qr_rs)
      }
      q = para2[head_$accessorSymbol](qr_rs);
      r_rs = para2[tail_$accessorSymbol](qr_rs);
      r1 = para2[head_$accessorSymbol](r_rs);
      tmp2 = bf(para2, tot_width, p, q);
      tmp3 = bf(para2, tot_width, q, r1);
      scrut = tmp2 <= tmp3;
      if (scrut === true) {
        qr_rs = r_rs;
        continue loopLabel
      }
      return para2[cons_$accessorSymbol](p, qr_rs);
    }
    return para2[cons_$accessorSymbol](p, qr_rs);
  }
};
lambda$9 = (undefined, function (par) {
  return (x) => {
    let tmp;
    tmp = NofibPrelude.concat(x);
    return runtime.safeCall(par(tmp))
  }
});
lambda18 = (undefined, function (par, x) {
  let tmp;
  tmp = NofibPrelude.concat(x);
  return runtime.safeCall(par(tmp))
});
lambda17 = (undefined, function (x) {
  return NofibPrelude.listNeq(NofibPrelude.Nil, x)
});
lambda$8 = (undefined, function (a) {
  return (x, y) => {
    return breakk(a, x, y)
  }
});
lambda$7 = (undefined, function (a) {
  return (y) => {
    let tmp;
    tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
    return breakk(a, y, tmp)
  }
});
unknownEq = function unknownEq(a, b) {
  return a === b
};
breakk = function breakk(a, b, xs) {
  let tmp, inlinedVal;
  inlinedVal = a === b;
  if (inlinedVal === true) {
    return NofibPrelude.Cons(NofibPrelude.Nil, xs)
  }
  {
    let inlinedVal1, inlinedVal2;
    if (xs instanceof NofibPrelude.Cons.class) {
      inlinedVal1 = xs.head;
      tmp = NofibPrelude.Cons(b, inlinedVal1);
      if (xs instanceof NofibPrelude.Cons.class) {
        inlinedVal2 = xs.tail;
        return NofibPrelude.Cons(tmp, inlinedVal2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
start = function start(a, b) {
  let tmp;
  tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
  return breakk(a, b, tmp)
};
lambda15 = (undefined, function (a, x, y) {
  return breakk(a, x, y)
});
lambda16 = (undefined, function (a, y) {
  let tmp;
  tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
  return breakk(a, y, tmp)
});
lambda$6 = (undefined, function (a) {
  return (xs, ys) => {
    return lambda13(a, xs, ys)
  }
});
lambda13 = (undefined, function (a, xs, ys) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  tmp1 = NofibPrelude.append(tmp, ys);
  return NofibPrelude.append(xs, tmp1)
});
lambda14 = (undefined, function (x) {
  return x
});
plus$ = function plus$(para2) {
  return (l1, n) => {
    return plus1(para2, l1, n)
  }
};
linc = function linc(para2, l1) {
  let a, inlinedVal;
  inlinedVal = para2[fold1$accessorSymbol](plus, NofibPrelude.listLen, l1);
  a = para2.optw - inlinedVal;
  return a * a
};
plus1 = function (para2, l1, n) {
  let inlinedVal, a, inlinedVal1;
  inlinedVal1 = para2[fold1$accessorSymbol](plus, NofibPrelude.listLen, l1);
  a = para2.optw - inlinedVal1;
  inlinedVal = a * a;
  return inlinedVal + n
};
lambda12 = (undefined, function (x) {
  return 0
});
plus = function plus(w, n) {
  let tmp, inlinedVal;
  inlinedVal = l(NofibPrelude, w, 0);
  tmp = inlinedVal + 1;
  return tmp + n
};
lambda$5 = (undefined, function (para2, w) {
  return (p) => {
    let tmp;
    tmp = NofibPrelude.Cons(w, NofibPrelude.Nil);
    return NofibPrelude.Cons(tmp, p)
  }
});
lambda$4 = (undefined, function (para2, w) {
  return (p) => {
    return para2[glue$accessorSymbol](w, p)
  }
});
lambda8 = (undefined, function (para2, w, p) {
  let tmp;
  tmp = NofibPrelude.Cons(w, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp, p)
});
lambda9 = (undefined, function (para2, w, p) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (p instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = p.head;
    arg$Cons$1$ = p.tail;
    tmp = NofibPrelude.Cons(w, arg$Cons$0$);
    return NofibPrelude.Cons(tmp, arg$Cons$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (para2) {
  return (w, ps) => {
    return lambda10(para2, w, ps)
  }
});
lambda10 = (undefined, function (para2, w, ps) {
  let tmp, tmp1;
  tmp = NofibPrelude.map(lambda$5(para2, w), ps);
  tmp1 = NofibPrelude.map(lambda$4(para2, w), ps);
  return NofibPrelude.append(tmp, tmp1)
});
lambda11 = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
});
lambda$2 = (undefined, function (f) {
  return (a, b) => {
    return lambda6(f, a, b)
  }
});
lambda6 = (undefined, function (f, a, b) {
  let scrut, tmp, tmp1;
  tmp = runtime.safeCall(f(a));
  tmp1 = runtime.safeCall(f(b));
  scrut = tmp < tmp1;
  if (scrut === true) {
    return a
  }
  return b;
});
lambda7 = (undefined, function (x) {
  return x
});
lambda4 = (undefined, function (a, s) {
  return NofibPrelude.Cons(a, s)
});
lambda5 = (undefined, function (a) {
  return NofibPrelude.Cons(a, NofibPrelude.Nil)
});
lambda$1 = (undefined, function (f) {
  return (a, s) => {
    return lambda2(f, a, s)
  }
});
lambda$ = (undefined, function (g) {
  return (a) => {
    let tmp;
    tmp = runtime.safeCall(g(a));
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda2 = (undefined, function (f, a, s) {
  let tmp, inlinedVal;
  if (s instanceof NofibPrelude.Cons.class) {
    inlinedVal = s.head;
    tmp = runtime.safeCall(f(a, inlinedVal));
    return NofibPrelude.Cons(tmp, s)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda3 = (undefined, function (g, a) {
  let tmp;
  tmp = runtime.safeCall(g(a));
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
lambda1 = (undefined, function (l1) {
  let inlinedVal;
  inlinedVal = go(NofibPrelude, "\n", 0);
  return NofibPrelude.append(l1, inlinedVal)
});
lambda = (undefined, function (x) {
  return x === "\n"
});
go1 = function go(vs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (vs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (vs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = vs.head;
    arg$Cons$1$ = vs.tail;
    tmp = go1(arg$Cons$1$);
    tmp1 = NofibPrelude.append(arg$Cons$0$, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class para {
  static {
    para1 = this
  }
  static get [fold1$accessorSymbol]() { return para.#fold1; }
  static get [glue$accessorSymbol]() { return para.#glue; }
  static get [null__$accessorSymbol]() { return para.#null__; }
  static get [single_$accessorSymbol]() { return para.#single_; }
  static get [head_$accessorSymbol]() { return para.#head_; }
  static get [last_$accessorSymbol]() { return para.#last_; }
  static get [cons_$accessorSymbol]() { return para.#cons_; }
  static get [tail_$accessorSymbol]() { return para.#tail_; }
  static get [init_$accessorSymbol]() { return para.#init_; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9;
    para.maxw = 70;
    para.optw = 63;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    para.nil_ = tmp;
    inlinedVal = go(NofibPrelude, "In the constructive programming community it is commonplace to see ", 0);
    inlinedVal1 = go(NofibPrelude, "formal developments of textbook algorithms. In the algorithm design ", 0);
    inlinedVal2 = go(NofibPrelude, "community, on the other hand, it may be well known that the textbook ", 0);
    inlinedVal3 = go(NofibPrelude, "solution to a problem is not the most efficient possible. However, in ", 0);
    inlinedVal4 = go(NofibPrelude, "presenting the more efficient solution, the algorithm designer will ", 0);
    inlinedVal5 = go(NofibPrelude, "usually omit some of the implementation details, this creating an ", 0);
    inlinedVal6 = go(NofibPrelude, "algorithm gap between the abstract algorithm and its concrete ", 0);
    inlinedVal7 = go(NofibPrelude, "implementation. This is in contrast to the formal development, which ", 0);
    inlinedVal8 = go(NofibPrelude, "usually presents the complete concrete implementation of the less ", 0);
    inlinedVal9 = go(NofibPrelude, "efficient solution.\n\n", 0);
    tmp1 = NofibPrelude.Cons(inlinedVal9, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(inlinedVal8, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal7, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal6, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal5, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal4, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal3, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal2, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal1, tmp8);
    tmp10 = NofibPrelude.Cons(inlinedVal, tmp9);
    tmp11 = NofibPrelude.concat(tmp10);
    para.test = tmp11;
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
  static #break_(p, xs) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      scrut = runtime.safeCall(p(arg$Cons$0$));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = para.#break_(p, arg$Cons$1$);
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
  static #isSpace(c) {
    return c === " "
  }
  static #words(s) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = NofibPrelude.leaveWhile(para.#isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      scrut1 = para.#break_(para.#isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = para.#words(element1$);
        return NofibPrelude.Cons(element0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lines(s) {
    let scrut, element1$, element0$, arg$Cons$1$, tmp;
    scrut = para.#break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(element0$, tmp)
      } else if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = para.#lines(arg$Cons$1$);
        return NofibPrelude.Cons(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda1, ls);
    return NofibPrelude.concat(tmp)
  }
  static #all(p, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return true
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === true) {
          xs = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fold1(f, g, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(g(arg$Cons$0$))
      }
      tmp = para.#fold1(f, g, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scan1(f, g, xs) {
    return para.#fold1(lambda$1(f), lambda$(g), xs)
  }
  static #tails(xs) {
    return para.#scan1(lambda4, lambda5, xs)
  }
  static #single(xs) {
    let arg$Cons$1$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #minWith(f, xs) {
    return para.#fold1(lambda$2(f), lambda7, xs)
  }
  static #new_(w, ls) {
    let tmp;
    tmp = NofibPrelude.Cons(w, NofibPrelude.Nil);
    return NofibPrelude.Cons(tmp, ls)
  }
  static #glue(w, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.Cons(w, arg$Cons$0$);
      return NofibPrelude.Cons(tmp, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #formats(txt) {
    return para.#fold1(lambda$3(para), lambda11, txt)
  }
  static #width(ls) {
    return para.#fold1(plus, NofibPrelude.listLen, ls)
  }
  static #fits(xs) {
    let tmp;
    tmp = para.#width(xs);
    return tmp <= para.maxw
  }
  static #feasible(a) {
    return para.#all(para.#fits, a)
  }
  static #cost(ls) {
    let plus$here;
    plus$here = plus$(para);
    return para.#fold1(plus$here, lambda12, ls)
  }
  static #par0(x) {
    let tmp, tmp1;
    tmp = para.#formats(x);
    tmp1 = NofibPrelude.filter(para.#feasible, tmp);
    return para.#minWith(para.#cost, tmp1)
  }
  static #fitH(ls) {
    let inlinedVal;
    if (ls instanceof NofibPrelude.Cons.class) {
      inlinedVal = ls.head;
      return para.#fits(inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fst3(a_b_c) {
    let element0$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      element0$ = runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #snd3(a_b_c) {
    let element1$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      element1$ = runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      return element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #thd3(a_b_c) {
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      return runtime.Tuple.get(a_b_c, 2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #width_tl(a_b_c) {
    return para.#fst3(a_b_c)
  }
  static #cost_tl(a_b_c) {
    return para.#snd3(a_b_c)
  }
  static #len_tl(a_b_c) {
    return para.#thd3(a_b_c)
  }
  static #tile(ws, a_b) {
    let l1, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (element0$ instanceof NofibPrelude.Cons.class) {
        let inlinedVal, tmp4, tmp5;
        arg$Cons$0$ = element0$.head;
        arg$Cons$1$ = element0$.tail;
        l1 = element1$ - arg$Cons$0$;
        tmp4 = NofibPrelude.take(l1, ws);
        tmp5 = NofibPrelude.leave(l1, ws);
        inlinedVal = globalThis.Object.freeze([
          tmp4,
          tmp5
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
          element0$1 = runtime.Tuple.get(inlinedVal, 0);
          element1$1 = runtime.Tuple.get(inlinedVal, 1);
          tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp1 = NofibPrelude.leave(l1, tmp);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            arg$Cons$0$
          ]);
          tmp3 = para.#tile(element1$1, tmp2);
          return NofibPrelude.Cons(element0$1, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #null__(a_b) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        if (element1$ instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      }
      return false;
    }
    return false;
  }
  static #single_(a_b) {
    let element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        tmp = para.#single(element1$);
        if (tmp === false) {
          tmp1 = para.#single(element0$);
          if (tmp1 === true) {
            if (element1$ instanceof NofibPrelude.Nil.class) {
              return true
            }
            return false;
          }
          return false;
        }
        return true;
      }
      tmp1 = para.#single(element0$);
      if (tmp1 === true) {
        if (element1$ instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #head_(a_b) {
    let scrut, element1$, element0$;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        inlinedVal = true;
      } else {
        inlinedVal = false;
      }
      scrut = ! inlinedVal;
      if (scrut === true) {
        if (element0$ instanceof NofibPrelude.Cons.class) {
          return element0$.head
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element1$ instanceof NofibPrelude.Cons.class) {
        return element1$.head
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #last_(a_b) {
    let scrut, element1$, element0$;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        inlinedVal = true;
      } else {
        inlinedVal = false;
      }
      scrut = ! inlinedVal;
      if (scrut === true) {
        if (element1$ instanceof NofibPrelude.Cons.class) {
          return element1$.head
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof NofibPrelude.Cons.class) {
        return element0$.head
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cons_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        inlinedVal = true;
      } else {
        inlinedVal = false;
      }
      scrut = ! inlinedVal;
      if (scrut === true) {
        tmp = NofibPrelude.Cons(a, element0$);
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      tmp1 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        tmp1,
        element0$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #snoc_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        inlinedVal = true;
      } else {
        inlinedVal = false;
      }
      scrut = ! inlinedVal;
      if (scrut === true) {
        tmp = NofibPrelude.Cons(a, element1$);
        return globalThis.Object.freeze([
          element0$,
          tmp
        ])
      }
      tmp1 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        element1$,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tail_(a_b) {
    let scrut, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      {
        let inlinedVal;
        scrut = para.#single(element0$);
        if (scrut === true) {
          let inlinedVal1, inlinedVal2, inlinedVal3, tmp, tmp1, tmp2;
          inlinedVal1 = l(NofibPrelude, element1$, 0);
          tmp2 = inlinedVal1 / 2;
          inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
          tmp = NofibPrelude.take(inlinedVal2, element1$);
          tmp1 = NofibPrelude.leave(inlinedVal2, element1$);
          inlinedVal3 = globalThis.Object.freeze([
            tmp,
            tmp1
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
            let inlinedVal4;
            element0$1 = runtime.Tuple.get(inlinedVal3, 0);
            element1$1 = runtime.Tuple.get(inlinedVal3, 1);
            inlinedVal4 = r(NofibPrelude, NofibPrelude.Nil, element1$1);
            return globalThis.Object.freeze([
              inlinedVal4,
              element0$1
            ])
          }
        }
        if (element0$ instanceof NofibPrelude.Cons.class) {
          inlinedVal = element0$.tail;
          return globalThis.Object.freeze([
            inlinedVal,
            element1$
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #init_(a_b) {
    let scrut, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      {
        let inlinedVal;
        scrut = para.#single(element1$);
        if (scrut === true) {
          let inlinedVal1, inlinedVal2, inlinedVal3, tmp, tmp1, tmp2;
          inlinedVal1 = l(NofibPrelude, element0$, 0);
          tmp2 = inlinedVal1 / 2;
          inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
          tmp = NofibPrelude.take(inlinedVal2, element0$);
          tmp1 = NofibPrelude.leave(inlinedVal2, element0$);
          inlinedVal3 = globalThis.Object.freeze([
            tmp,
            tmp1
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
            let inlinedVal4;
            element0$1 = runtime.Tuple.get(inlinedVal3, 0);
            element1$1 = runtime.Tuple.get(inlinedVal3, 1);
            inlinedVal4 = r(NofibPrelude, NofibPrelude.Nil, element1$1);
            return globalThis.Object.freeze([
              element0$1,
              inlinedVal4
            ])
          }
        }
        if (element1$ instanceof NofibPrelude.Cons.class) {
          inlinedVal = element1$.tail;
          return globalThis.Object.freeze([
            element0$,
            inlinedVal
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unformat(a, l1) {
    return para.#fold1(lambda$6(a), lambda14, l1)
  }
  static #format(a, x) {
    if (x instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    }
    return para.#fold1(lambda$8(a), lambda$7(a), x);
  }
  static #unparas(ls) {
    return para.#unformat(NofibPrelude.Nil, ls)
  }
  static #paras(ls) {
    let tmp;
    tmp = para.#format(NofibPrelude.Nil, ls);
    return NofibPrelude.filter(lambda17, tmp)
  }
  static #parse(ls) {
    let tmp, tmp1;
    tmp = para.#lines(ls);
    tmp1 = NofibPrelude.map(para.#words, tmp);
    return para.#paras(tmp1)
  }
  static #unparse(ls) {
    let tmp, tmp1;
    tmp = para.#unparas(ls);
    tmp1 = NofibPrelude.map(para.#unwords, tmp);
    return para.#unlines(tmp1)
  }
  static #startr(a) {
    let scrut, tmp, tmp1;
    scrut = a <= para.maxw;
    if (scrut === true) {
      tmp = globalThis.Object.freeze([
        0,
        0,
        0
      ]);
      tmp1 = para.#cons_(tmp, para.nil_);
      return globalThis.Object.freeze([
        tmp1,
        a,
        1
      ])
    }
    throw runtime.safeCall(globalThis.Error("startr param error"));
  }
  static #ceildiv(n, m) {
    let tmp, tmp1, tmp2;
    tmp = n + m;
    tmp1 = tmp - 1;
    tmp2 = tmp1 / m;
    return runtime.safeCall(globalThis.Math.floor(tmp2))
  }
  static #fmtWith(par) {
    let tmp, tmp1;
    tmp = para.#parse(par);
    tmp1 = NofibPrelude.map(lambda$9(par), tmp);
    return para.#unparse(tmp1)
  }
  static #stepr(w, ps_tw_tl) {
    let tot_width, tot_len, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(ps_tw_tl) && ps_tw_tl.length === 3) {
      element0$ = runtime.Tuple.get(ps_tw_tl, 0);
      element1$ = runtime.Tuple.get(ps_tw_tl, 1);
      element2$ = runtime.Tuple.get(ps_tw_tl, 2);
      tmp = w + 1;
      tot_width = tmp + element1$;
      tot_len = 1 + element2$;
      tmp1 = para.#last_(element0$);
      tmp2 = new_(para, element2$, element1$, tmp1);
      tmp3 = myAdd(para, tot_width, tmp2, element0$);
      tmp4 = leave_nofit(para, tot_width, tmp3);
      tmp5 = trim(para, tot_width, tmp4);
      return globalThis.Object.freeze([
        tmp5,
        tot_width,
        tot_len
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #par3(ws) {
    let zs, tmp, tmp1, tmp2, tmp3, inlinedVal;
    tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
    zs = para.#scan1(para.#stepr, para.#startr, tmp);
    tmp1 = NofibPrelude.map(lambda$10(para), zs);
    if (zs instanceof NofibPrelude.Cons.class) {
      inlinedVal = zs.head;
      tmp2 = para.#thd3(inlinedVal);
      tmp3 = globalThis.Object.freeze([
        tmp1,
        tmp2
      ]);
      return para.#tile(ws, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fmt(x) {
    let tmp, tmp1, tmp2;
    tmp = para.#parse(x);
    tmp1 = NofibPrelude.concat(tmp);
    tmp2 = NofibPrelude.map(para.#par3, tmp1);
    return para.#unparse(tmp2)
  }
  static #testPara_nofib() {
    let ls;
    ls = para.test;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    return para.#fmt(para.test);
  }
  static main() {
    let tmp;
    tmp = para.#testPara_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "para"];
});
export { go1 as _$_modulePrivate_$_go };
export { plus as _$_modulePrivate_$_plus };
export { linc as _$_modulePrivate_$_linc };
export { plus1 as _$_modulePrivate_$_plus1 };
export { start as _$_modulePrivate_$_start };
export { breakk as _$_modulePrivate_$_breakk };
export { unknownEq as _$_modulePrivate_$_unknownEq };
export { bf as _$_modulePrivate_$_bf };
export { old_width_hd as _$_modulePrivate_$_old_width_hd };
export { width_hd as _$_modulePrivate_$_width_hd };
export { myAdd as _$_modulePrivate_$_myAdd };
export { single as _$_modulePrivate_$_single };
export { cost as _$_modulePrivate_$_cost };
export { leave_nofit as _$_modulePrivate_$_leave_nofit };
export { trim as _$_modulePrivate_$_trim };
export { new_ as _$_modulePrivate_$_new_ };
export { para1 as _$_modulePrivate_$_para };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { plus$ as _$_modulePrivate_$_plus$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export default para1;
