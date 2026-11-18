const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listNeq$accessorSymbol = globalThis.Symbol("listNeq");
const append$accessorSymbol = globalThis.Symbol("append");
const last_$accessorSymbol = globalThis.Symbol("last_");
let go, breakk, bf, width_hd, cost, para1, lambda, lambda1, lambda2, lambda3, lambda4, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7;
lambda$7 = (undefined, function (para2) {
  return (x) => {
    return lambda4(para2, x)
  }
});
lambda4 = (undefined, function (para2, x) {
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
width_hd = function width_hd(tot_width, p) {
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
        tmp = width_hd(tot_width, p);
        a = para2.optw - tmp;
        tmp1 = a * a;
        return element1$ + tmp1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
bf = function bf(para2, tot_width, p, q) {
  let wqh, rqh, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1;
  wqh = width_hd(tot_width, q);
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
      tmp2 = width_hd(tot_width, p);
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
          tmp7 = width_hd(tot_width, p);
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
lambda$6 = (undefined, function (para2) {
  return (x) => {
    return para2[listNeq$accessorSymbol](NofibPrelude.Nil, x)
  }
});
lambda$5 = (undefined, function (a) {
  return (x, y) => {
    return breakk(a, x, y)
  }
});
lambda$4 = (undefined, function (a) {
  return (y) => {
    let tmp;
    tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
    return breakk(a, y, tmp)
  }
});
breakk = function breakk(a, b, xs) {
  let tmp, inlinedVal;
  inlinedVal = a === b;
  if (inlinedVal === true) {
    return NofibPrelude.Cons(NofibPrelude.Nil, xs)
  }
  {
    let arg$Cons$1$, arg$Cons$0$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      tmp = NofibPrelude.Cons(b, arg$Cons$0$);
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = xs.tail;
        return NofibPrelude.Cons(tmp, arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$3 = (undefined, function (para2, a) {
  return (xs, ys) => {
    return lambda2(para2, a, xs, ys)
  }
});
lambda2 = (undefined, function (para2, a, xs, ys) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  tmp1 = para2[append$accessorSymbol](tmp, ys);
  return para2[append$accessorSymbol](xs, tmp1)
});
lambda3 = (undefined, function (x) {
  return x
});
lambda$2 = (undefined, function (f) {
  return (a, s) => {
    return lambda1(f, a, s)
  }
});
lambda$1 = (undefined, function (g) {
  return (a) => {
    let tmp;
    tmp = runtime.safeCall(g(a));
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda1 = (undefined, function (f, a, s) {
  let tmp, arg$Cons$0$;
  if (s instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = s.head;
    tmp = runtime.safeCall(f(a, arg$Cons$0$));
    return NofibPrelude.Cons(tmp, s)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$ = (undefined, function (para2) {
  return (l) => {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("\n");
    return para2[append$accessorSymbol](l, tmp)
  }
});
lambda = (undefined, function (x) {
  return x === "\n"
});
go = function go(para2, vs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (vs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (vs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = vs.head;
    arg$Cons$1$ = vs.tail;
    tmp = go(para2, arg$Cons$1$);
    tmp1 = para2[append$accessorSymbol](arg$Cons$0$, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class para {
  static {
    para1 = this
  }
  static get [listNeq$accessorSymbol]() { return para.#listNeq; }
  static get [append$accessorSymbol]() { return para.#append; }
  static get [last_$accessorSymbol]() { return para.#last_; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    para.maxw = 70;
    para.optw = 63;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    para.nil_ = tmp;
    tmp1 = NofibPrelude.nofibStringToList("In the constructive programming community it is commonplace to see ");
    tmp2 = NofibPrelude.nofibStringToList("formal developments of textbook algorithms. In the algorithm design ");
    tmp3 = NofibPrelude.nofibStringToList("community, on the other hand, it may be well known that the textbook ");
    tmp4 = NofibPrelude.nofibStringToList("solution to a problem is not the most efficient possible. However, in ");
    tmp5 = NofibPrelude.nofibStringToList("presenting the more efficient solution, the algorithm designer will ");
    tmp6 = NofibPrelude.nofibStringToList("usually omit some of the implementation details, this creating an ");
    tmp7 = NofibPrelude.nofibStringToList("algorithm gap between the abstract algorithm and its concrete ");
    tmp8 = NofibPrelude.nofibStringToList("implementation. This is in contrast to the formal development, which ");
    tmp9 = NofibPrelude.nofibStringToList("usually presents the complete concrete implementation of the less ");
    tmp10 = NofibPrelude.nofibStringToList("efficient solution.\n\n");
    tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    tmp12 = NofibPrelude.Cons(tmp9, tmp11);
    tmp13 = NofibPrelude.Cons(tmp8, tmp12);
    tmp14 = NofibPrelude.Cons(tmp7, tmp13);
    tmp15 = NofibPrelude.Cons(tmp6, tmp14);
    tmp16 = NofibPrelude.Cons(tmp5, tmp15);
    tmp17 = NofibPrelude.Cons(tmp4, tmp16);
    tmp18 = NofibPrelude.Cons(tmp3, tmp17);
    tmp19 = NofibPrelude.Cons(tmp2, tmp18);
    tmp20 = NofibPrelude.Cons(tmp1, tmp19);
    tmp21 = para.#concat(tmp20);
    para.test = tmp21;
  }
  static #head(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tail(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = para.#map(f, arg$Cons$1$);
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
  static #listNeq(xs, ys) {
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Nil.class) {
        return false
      }
      return true;
    }
    return true;
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
      tmp1 = para.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #splitAt(n, ls) {
    let tmp, tmp1;
    tmp = para.#take(n, ls);
    tmp1 = para.#leave(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = para.#append(arg$Cons$1$, ys);
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
      tmp = para.#concat(arg$Cons$1$);
      return para.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = para.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #leaveWhile(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  }
  static #unwords(ws) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      tmp = go(para, arg$Cons$1$);
      return para.#append(arg$Cons$0$, tmp)
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
    scrut = para.#leaveWhile(para.#isSpace, s);
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
    let tmp, lambda$here;
    lambda$here = lambda$(para);
    tmp = para.#map(lambda$here, ls);
    return para.#concat(tmp)
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
    let lambda$here, lambda$here1;
    lambda$here = lambda$2(f);
    lambda$here1 = lambda$1(g);
    return para.#fold1(lambda$here, lambda$here1, xs)
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
  static #tile(ws, a_b) {
    let l, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (element0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element0$.head;
        arg$Cons$1$ = element0$.tail;
        l = element1$ - arg$Cons$0$;
        scrut = para.#splitAt(l, ws);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp1 = para.#leave(l, tmp);
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
    let element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element0$);
      if (tmp === true) {
        tmp1 = para.#single(element1$);
        if (tmp1 === false) {
          tmp2 = para.#single(element0$);
          if (tmp2 === true) {
            return para.#null_(element1$)
          }
          return false;
        }
        return true;
      }
      tmp2 = para.#single(element0$);
      if (tmp2 === true) {
        return para.#null_(element1$)
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #head_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element0$);
      scrut = ! tmp;
      if (scrut === true) {
        return para.#head(element0$)
      }
      return para.#head(element1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #last_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        return para.#head(element1$)
      }
      return para.#head(element0$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cons_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        tmp2,
        element0$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tail_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = para.#null_(element0$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.#single(element0$);
      if (scrut1 === true) {
        let inlinedVal, tmp3;
        tmp1 = para.#listLen(element1$);
        tmp3 = tmp1 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
        scrut2 = para.#splitAt(inlinedVal, element1$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = para.#reverse(element1$1);
          return globalThis.Object.freeze([
            tmp2,
            element0$1
          ])
        }
      }
      tmp = para.#tail(element0$);
      return globalThis.Object.freeze([
        tmp,
        element1$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #init_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = para.#null_(element1$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.#single(element1$);
      if (scrut1 === true) {
        let inlinedVal, tmp3;
        tmp1 = para.#listLen(element0$);
        tmp3 = tmp1 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
        scrut2 = para.#splitAt(inlinedVal, element0$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = para.#reverse(element1$1);
          return globalThis.Object.freeze([
            element0$1,
            tmp2
          ])
        }
      }
      tmp = para.#tail(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unformat(a, l) {
    let lambda$here;
    lambda$here = lambda$3(para, a);
    return para.#fold1(lambda$here, lambda3, l)
  }
  static #format(a, x) {
    let lambda$here, lambda$here1;
    if (x instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    }
    lambda$here = lambda$5(a);
    lambda$here1 = lambda$4(a);
    return para.#fold1(lambda$here, lambda$here1, x);
  }
  static #unparas(ls) {
    return para.#unformat(NofibPrelude.Nil, ls)
  }
  static #paras(ls) {
    let tmp, lambda$here;
    tmp = para.#format(NofibPrelude.Nil, ls);
    lambda$here = lambda$6(para);
    return para.#filter(lambda$here, tmp)
  }
  static #parse(ls) {
    let tmp, tmp1;
    tmp = para.#lines(ls);
    tmp1 = para.#map(para.#words, tmp);
    return para.#paras(tmp1)
  }
  static #unparse(ls) {
    let tmp, tmp1;
    tmp = para.#unparas(ls);
    tmp1 = para.#map(para.#unwords, tmp);
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #stepr(w, ps_tw_tl) {
    let tot_width, tot_len, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ps_tw_tl) && ps_tw_tl.length === 3) {
      let inlinedVal, para2, tot_width1, p, qr_rs, inlinedVal1, para3, tot_width2, ps_p, inlinedVal2, para4, tot_width3, ps_pq, inlinedVal3, x, tmp2, tmp3, inlinedVal4, inlinedVal5;
      element0$ = runtime.Tuple.get(ps_tw_tl, 0);
      element1$ = runtime.Tuple.get(ps_tw_tl, 1);
      element2$ = runtime.Tuple.get(ps_tw_tl, 2);
      tmp = w + 1;
      tot_width = tmp + element1$;
      tot_len = 1 + element2$;
      tmp1 = para.#last_(element0$);
      inlinedVal5 = para.#thd3(tmp1);
      inlinedVal4 = inlinedVal5 === 0;
      if (inlinedVal4 === true) {
        inlinedVal = globalThis.Object.freeze([
          element1$,
          0,
          element2$
        ]);
      } else {
        let inlinedVal6, inlinedVal7, tmp4, inlinedVal8, inlinedVal9;
        inlinedVal6 = para.#snd3(tmp1);
        inlinedVal9 = para.#thd3(tmp1);
        inlinedVal8 = inlinedVal9 === 0;
        if (inlinedVal8 === true) {
          inlinedVal7 = element1$;
        } else {
          let inlinedVal10;
          inlinedVal10 = para.#fst3(tmp1);
          tmp4 = element1$ - inlinedVal10;
          inlinedVal7 = tmp4 - 1;
        }
        x = para.optw - inlinedVal7;
        tmp2 = x * x;
        tmp3 = inlinedVal6 + tmp2;
        inlinedVal = globalThis.Object.freeze([
          element1$,
          tmp3,
          element2$
        ]);
      }
      para2 = para;
      tot_width1 = tot_width;
      p = inlinedVal;
      qr_rs = element0$;
      inlinedLbl: {
        loopLabel: while (true) {
          let q, r_rs, r, scrut, tmp4, tmp5, tmp6, tmp7;
          tmp4 = para2.#single_(qr_rs);
          if (tmp4 === false) {
            tmp5 = para2.#null__(qr_rs);
            if (tmp5 === true) {
              inlinedVal1 = para2.#cons_(p, qr_rs);
              break inlinedLbl
            }
            q = para2.#head_(qr_rs);
            r_rs = para2.#tail_(qr_rs);
            r = para2.#head_(r_rs);
            tmp6 = bf(para2, tot_width1, p, q);
            tmp7 = bf(para2, tot_width1, q, r);
            scrut = tmp6 <= tmp7;
            if (scrut === true) {
              qr_rs = r_rs;
              continue loopLabel
            }
            inlinedVal1 = para2.#cons_(p, qr_rs);
            break inlinedLbl;
          }
          inlinedVal1 = para2.#cons_(p, qr_rs);
          break inlinedLbl;
        }
      }
      para3 = para;
      tot_width2 = tot_width;
      ps_p = inlinedVal1;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut, scrut1, tmp4, tmp5, tmp6;
          scrut = para3.#null__(ps_p);
          if (scrut === true) {
            inlinedVal2 = ps_p;
            break inlinedLbl1
          }
          tmp4 = para3.#last_(ps_p);
          tmp5 = width_hd(tot_width2, tmp4);
          scrut1 = tmp5 > para3.maxw;
          if (scrut1 === true) {
            tmp6 = para3.#init_(ps_p);
            ps_p = tmp6;
            continue loopLabel1
          }
          inlinedVal2 = ps_p;
          break inlinedLbl1;
        }
      }
      para4 = para;
      tot_width3 = tot_width;
      ps_pq = inlinedVal2;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut, scrut1, ps_p1, q, p1, scrut2, tmp4, tmp5;
          scrut = para4.#null__(ps_pq);
          if (scrut === true) {
            inlinedVal3 = ps_pq;
            break inlinedLbl2
          }
          scrut1 = para4.#single_(ps_pq);
          if (scrut1 === true) {
            inlinedVal3 = ps_pq;
            break inlinedLbl2
          }
          ps_p1 = para4.#init_(ps_pq);
          q = para4.#last_(ps_pq);
          p1 = para4.#last_(ps_p1);
          tmp4 = cost(para4, tot_width3, p1);
          tmp5 = cost(para4, tot_width3, q);
          scrut2 = tmp4 <= tmp5;
          if (scrut2 === true) {
            ps_pq = ps_p1;
            continue loopLabel2
          }
          inlinedVal3 = ps_pq;
          break inlinedLbl2;
        }
      }
      return globalThis.Object.freeze([
        inlinedVal3,
        tot_width,
        tot_len
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #par3(ws) {
    let zs, tmp, tmp1, tmp2, tmp3, tmp4, lambda$here;
    tmp = para.#map(para.#listLen, ws);
    zs = para.#scan1(para.#stepr, para.#startr, tmp);
    lambda$here = lambda$7(para);
    tmp1 = para.#map(lambda$here, zs);
    tmp2 = para.#head(zs);
    tmp3 = para.#thd3(tmp2);
    tmp4 = globalThis.Object.freeze([
      tmp1,
      tmp3
    ]);
    return para.#tile(ws, tmp4)
  }
  static #fmt(x) {
    let tmp, tmp1, tmp2;
    tmp = para.#parse(x);
    tmp1 = para.#concat(tmp);
    tmp2 = para.#map(para.#par3, tmp1);
    return para.#unparse(tmp2)
  }
  static #testPara_nofib() {
    let scrut;
    scrut = para.#null_(para.test);
    if (scrut === true) {
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
export default para1;
