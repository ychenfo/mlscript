const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$3 as lambda$ } from "./NofibPrelude.mjs";
const enumFromTo_lz$accessorSymbol = globalThis.Symbol("enumFromTo_lz");
const hash$accessorSymbol = globalThis.Symbol("hash");
const select$accessorSymbol = globalThis.Symbol("select");
const hinsert$accessorSymbol = globalThis.Symbol("hinsert");
const findhash_$accessorSymbol = globalThis.Symbol("findhash_");
let go1, lscomp, lscomp2, lscomp1, tryy, cichelli1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11;
lambda$9 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks) {
  return (m) => {
    return lambda5(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, m)
  }
});
lambda$11 = (undefined, function (cichelli2, m, ms, n, ns) {
  return () => {
    return lambda6(cichelli2, m, ms, n, ns)
  }
});
lambda6 = (undefined, function (cichelli2, m, ms, n, ns) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp1 = lscomp2(cichelli2, m, ms, ns);
  return NofibPrelude.LzCons(tmp, tmp1)
});
lscomp2 = function lscomp2(cichelli2, m, ms, ls2) {
  let arg$LzCons$0$, arg$LzCons$1$, inlinedVal;
  if (ls2 instanceof NofibPrelude.Lazy.class) {
    inlinedVal = ls2.get();
    if (inlinedVal instanceof NofibPrelude.LzNil.class) {
      return lscomp1(cichelli2, ms)
    } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      return NofibPrelude.Lazy(lambda$11(cichelli2, m, ms, arg$LzCons$0$, arg$LzCons$1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$10 = (undefined, function (cichelli2, ls1) {
  return () => {
    return lambda7(cichelli2, ls1)
  }
});
lambda7 = (undefined, function (cichelli2, ls1) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls1 instanceof NofibPrelude.Lazy.class) {
    inlinedVal = ls1.get();
    if (inlinedVal instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.LzNil
    } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = cichelli2[enumFromTo_lz$accessorSymbol](0, cichelli2.maxval);
      tmp1 = lscomp2(cichelli2, arg$LzCons$0$, arg$LzCons$1$, tmp);
      if (tmp1 instanceof NofibPrelude.Lazy.class) {
        return tmp1.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks) {
  return (caseScrut) => {
    return lambda8(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, caseScrut)
  }
});
lambda$7 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks) {
  return (m) => {
    return lambda9(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, m)
  }
});
lambda$6 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks) {
  return (n1) => {
    return lambda10(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, n1)
  }
});
tryy = function tryy(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, newAssocs) {
  let newCharAssocs, scrut, arg$Some$0$, tmp, tmp1;
  newCharAssocs = NofibPrelude.append(newAssocs, charAssocs);
  tmp = cichelli2.K(s, a, z, n);
  tmp1 = cichelli2[hash$accessorSymbol](newCharAssocs, tmp);
  scrut = cichelli2[hinsert$accessorSymbol](tmp1, keyHashSet);
  if (scrut instanceof NofibPrelude.None.class) {
    return cichelli2.NotEver(1)
  } else if (scrut instanceof NofibPrelude.Some.class) {
    arg$Some$0$ = scrut.x;
    return cichelli2[findhash_$accessorSymbol](arg$Some$0$, newCharAssocs, ks)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda5 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, m) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  return tryy(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, tmp1)
});
lscomp1 = function lscomp1(cichelli2, ls1) {
  return NofibPrelude.Lazy(lambda$10(cichelli2, ls1))
};
lambda8 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = globalThis.Object.freeze([
      a,
      element0$
    ]);
    tmp1 = globalThis.Object.freeze([
      z,
      element1$
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    return tryy(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda9 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, m) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  return tryy(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, tmp1)
});
lambda10 = (undefined, function (cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, n1) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  return tryy(cichelli2, keyHashSet, charAssocs, s, n, a, z, ks, tmp1)
});
lambda$5 = (undefined, function (cichelli2, ds_) {
  return (x) => {
    return lambda4(cichelli2, ds_, x)
  }
});
lambda4 = (undefined, function (cichelli2, ds_, x) {
  let inlinedVal, arg$K$1$, arg$K$2$, tmp;
  if (x instanceof cichelli2.K.class) {
    arg$K$1$ = x.c1;
    arg$K$2$ = x.c2;
    tmp = NofibPrelude.Cons(arg$K$2$, NofibPrelude.Nil);
    inlinedVal = NofibPrelude.Cons(arg$K$1$, tmp);
    return NofibPrelude.all(lambda$2(ds_), inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (cichelli2, p) {
  return (x, y) => {
    return cichelli2[select$accessorSymbol](p, x, y)
  }
});
lambda3 = (undefined, function (cichelli2, p, x, y) {
  return cichelli2[select$accessorSymbol](p, x, y)
});
lambda$3 = (undefined, function (cichelli2) {
  return (k) => {
    return lambda2(cichelli2, k)
  }
});
lambda2 = (undefined, function (cichelli2, k) {
  let inlinedVal, inlinedVal1;
  if (k instanceof NofibPrelude.Cons.class) {
    let inlinedVal2, arg$Cons$0$, arg$Cons$1$;
    inlinedVal = k.head;
    if (k instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = k.head;
      arg$Cons$1$ = k.tail;
      inlinedVal2 = go1(arg$Cons$0$, arg$Cons$1$);
      inlinedVal1 = l(NofibPrelude, k, 0);
      return cichelli2.K(k, inlinedVal, inlinedVal2, inlinedVal1)
    }
    throw runtime.safeCall(globalThis.Error("last: empty list"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lscomp = function lscomp(xs, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.inList(arg$Cons$0$, xs);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = lscomp(xs, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$2 = (undefined, function (ys) {
  return (x) => {
    return NofibPrelude.inList(x, ys)
  }
});
lambda1 = (undefined, function (ys, x) {
  return NofibPrelude.inList(x, ys)
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
lambda$1 = (undefined, function (cichelli2, a, b) {
  return () => {
    return lambda(cichelli2, a, b)
  }
});
lambda = (undefined, function (cichelli2, a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = cichelli2[enumFromTo_lz$accessorSymbol](tmp, b);
    return NofibPrelude.LzCons(a, tmp1)
  }
  return NofibPrelude.LzNil;
});
(class cichelli {
  static {
    cichelli1 = this
  }
  static get [enumFromTo_lz$accessorSymbol]() { return cichelli.#enumFromTo_lz; }
  static get [hash$accessorSymbol]() { return cichelli.#hash; }
  static get [select$accessorSymbol]() { return cichelli.#select; }
  static get [hinsert$accessorSymbol]() { return cichelli.#hinsert; }
  static get [findhash_$accessorSymbol]() { return cichelli.#findhash_; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, ls, inlinedVal22, ls1, inlinedVal23;
    inlinedVal = go(NofibPrelude, "case", 0);
    inlinedVal1 = go(NofibPrelude, "class", 0);
    inlinedVal2 = go(NofibPrelude, "data", 0);
    inlinedVal3 = go(NofibPrelude, "default", 0);
    inlinedVal4 = go(NofibPrelude, "deriving", 0);
    inlinedVal5 = go(NofibPrelude, "else", 0);
    inlinedVal6 = go(NofibPrelude, "hiding", 0);
    inlinedVal7 = go(NofibPrelude, "if", 0);
    inlinedVal8 = go(NofibPrelude, "import", 0);
    inlinedVal9 = go(NofibPrelude, "in", 0);
    inlinedVal10 = go(NofibPrelude, "infix", 0);
    inlinedVal11 = go(NofibPrelude, "infixl", 0);
    inlinedVal12 = go(NofibPrelude, "instance", 0);
    inlinedVal13 = go(NofibPrelude, "interface", 0);
    inlinedVal14 = go(NofibPrelude, "let", 0);
    inlinedVal15 = go(NofibPrelude, "module", 0);
    inlinedVal16 = go(NofibPrelude, "of", 0);
    inlinedVal17 = go(NofibPrelude, "renaming", 0);
    inlinedVal18 = go(NofibPrelude, "then", 0);
    inlinedVal19 = go(NofibPrelude, "to", 0);
    inlinedVal20 = go(NofibPrelude, "type", 0);
    inlinedVal21 = go(NofibPrelude, "where", 0);
    tmp = NofibPrelude.Cons(inlinedVal21, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal20, tmp);
    tmp2 = NofibPrelude.Cons(inlinedVal19, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal18, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal17, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal16, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal15, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal14, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal13, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal12, tmp8);
    tmp10 = NofibPrelude.Cons(inlinedVal11, tmp9);
    tmp11 = NofibPrelude.Cons(inlinedVal10, tmp10);
    tmp12 = NofibPrelude.Cons(inlinedVal9, tmp11);
    tmp13 = NofibPrelude.Cons(inlinedVal8, tmp12);
    tmp14 = NofibPrelude.Cons(inlinedVal7, tmp13);
    tmp15 = NofibPrelude.Cons(inlinedVal6, tmp14);
    tmp16 = NofibPrelude.Cons(inlinedVal5, tmp15);
    tmp17 = NofibPrelude.Cons(inlinedVal4, tmp16);
    tmp18 = NofibPrelude.Cons(inlinedVal3, tmp17);
    tmp19 = NofibPrelude.Cons(inlinedVal2, tmp18);
    tmp20 = NofibPrelude.Cons(inlinedVal1, tmp19);
    tmp21 = NofibPrelude.Cons(inlinedVal, tmp20);
    cichelli.keys = tmp21;
    cichelli.K = function K(s, c1, c2, i) {
      return globalThis.Object.freeze(new K.class(s, c1, c2, i));
    };
    (class K {
      static {
        cichelli.K.class = this
      }
      constructor(s, c1, c2, i) {
        this.s = s;
        this.c1 = c1;
        this.c2 = c2;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "K", ["s", "c1", "c2", "i"]];
    });
    cichelli.H = function H(f, s, ls2) {
      return globalThis.Object.freeze(new H.class(f, s, ls2));
    };
    (class H {
      static {
        cichelli.H.class = this
      }
      constructor(f, s, ls2) {
        this.f = f;
        this.s = s;
        this.ls = ls2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "H", ["f", "s", "ls"]];
    });
    ls = cichelli.keys;
    inlinedVal22 = l(NofibPrelude, ls, 0);
    cichelli.numberofkeys = inlinedVal22;
    tmp22 = cichelli.#attribkeys(cichelli.keys);
    tmp23 = NofibPrelude.map(cichelli.#ends, tmp22);
    tmp24 = NofibPrelude.concat(tmp23);
    tmp25 = cichelli.#histo(tmp24);
    cichelli.freqtab = tmp25;
    ls1 = cichelli.freqtab;
    inlinedVal23 = l(NofibPrelude, ls1, 0);
    cichelli.maxval = inlinedVal23;
    (class Status {
      static {
        cichelli.Status = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Status"];
    });
    cichelli.NotEver = function NotEver(i) {
      return globalThis.Object.freeze(new NotEver.class(i));
    };
    (class NotEver extends cichelli.Status {
      static {
        cichelli.NotEver.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NotEver", ["i"]];
    });
    cichelli.YesIts = function YesIts(i, t) {
      return globalThis.Object.freeze(new YesIts.class(i, t));
    };
    (class YesIts extends cichelli.Status {
      static {
        cichelli.YesIts.class = this
      }
      constructor(i, t) {
        super();
        this.i = i;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "YesIts", ["i", "t"]];
    });
  }
  static #enumFromTo_lz(a, b) {
    return NofibPrelude.Lazy(lambda$1(cichelli, a, b))
  }
  static #last(ls) {
    let arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      return go1(arg$Cons$0$, arg$Cons$1$)
    }
    throw runtime.safeCall(globalThis.Error("last: empty list"));
  }
  static #ends(k) {
    let arg$K$1$, arg$K$2$, tmp;
    if (k instanceof cichelli.K.class) {
      arg$K$1$ = k.c1;
      arg$K$2$ = k.c2;
      tmp = NofibPrelude.Cons(arg$K$2$, NofibPrelude.Nil);
      return NofibPrelude.Cons(arg$K$1$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #assoc(x, yz) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (yz instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yz.head;
        arg$Cons$1$ = yz.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = x === element0$;
          if (scrut === true) {
            return element1$
          }
          yz = arg$Cons$1$;
          continue loopLabel;
        }
      }
      throw runtime.safeCall(globalThis.Error("assoc: not found"));
    }
  }
  static #assocm(x, yz) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (yz instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yz.head;
        arg$Cons$1$ = yz.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = x === element0$;
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          yz = arg$Cons$1$;
          continue loopLabel;
        }
        return NofibPrelude.None;
      }
      return NofibPrelude.None;
    }
  }
  static #histins(x, yns) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (yns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = yns.head;
      arg$Cons$1$ = yns.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = x === element0$;
        if (scrut === true) {
          tmp1 = element1$ + 1;
          tmp2 = globalThis.Object.freeze([
            element0$,
            tmp1
          ]);
          return NofibPrelude.Cons(tmp2, arg$Cons$1$)
        }
        tmp3 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp4 = cichelli.#histins(x, arg$Cons$1$);
        return NofibPrelude.Cons(tmp3, tmp4);
      }
    }
    tmp = globalThis.Object.freeze([
      x,
      1
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
  static #histo(ls) {
    return NofibPrelude.foldr(cichelli.#histins, NofibPrelude.Nil, ls)
  }
  static #subset(xs, ys) {
    return NofibPrelude.all(lambda$2(ys), xs)
  }
  static #union(xs, ys) {
    let tmp;
    tmp = lscomp(xs, ys);
    return NofibPrelude.append(xs, tmp)
  }
  static #attribkeys(ks) {
    return NofibPrelude.map(lambda$3(cichelli), ks)
  }
  static #minm(x, y) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(globalThis.Math.min(arg$Some$0$, y))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #maxm(x, y) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(globalThis.Math.max(arg$Some$0$, y))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #hash(cvs, k) {
    let arg$K$1$, arg$K$2$, arg$K$3$, tmp, tmp1, tmp2;
    if (k instanceof cichelli.K.class) {
      arg$K$1$ = k.c1;
      arg$K$2$ = k.c2;
      arg$K$3$ = k.i;
      tmp = cichelli.#assoc(arg$K$1$, cvs);
      tmp1 = arg$K$3$ + tmp;
      tmp2 = cichelli.#assoc(arg$K$2$, cvs);
      return tmp1 + tmp2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #select(p, x, ts_fs) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      element0$ = runtime.Tuple.get(ts_fs, 0);
      element1$ = runtime.Tuple.get(ts_fs, 1);
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, element0$);
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      tmp1 = NofibPrelude.Cons(x, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #partition_(p, ls) {
    let tmp;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return NofibPrelude.foldr(lambda$4(cichelli, p), tmp, ls)
  }
  static #freqsorted(x) {
    return x
  }
  static #blocked_(ds, ls) {
    let ds_, scrut, arg$Cons$0$, arg$Cons$1$, tmp, element1$, element0$, tmp1, tmp2, lambda$here;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = cichelli.#ends(arg$Cons$0$);
      ds_ = cichelli.#union(ds, tmp);
      lambda$here = lambda$5(cichelli, ds_);
      scrut = cichelli.#partition_(lambda$here, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp1 = cichelli.#blocked_(ds_, element1$);
        tmp2 = NofibPrelude.append(element0$, tmp1);
        return NofibPrelude.Cons(arg$Cons$0$, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #blocked(ls) {
    return cichelli.#blocked_(NofibPrelude.Nil, ls)
  }
  static #hinsert(h, hh) {
    let lo_, hi_, arg$H$0$, arg$H$1$, arg$H$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (hh instanceof cichelli.H.class) {
      arg$H$0$ = hh.f;
      arg$H$1$ = hh.s;
      arg$H$2$ = hh.ls;
      lo_ = cichelli.#minm(arg$H$0$, h);
      hi_ = cichelli.#maxm(arg$H$1$, h);
      tmp = NofibPrelude.inList(h, arg$H$2$);
      if (tmp === false) {
        tmp2 = 1 + hi_;
        tmp3 = tmp2 - lo_;
        tmp1 = tmp3 > cichelli.numberofkeys;
        if (tmp1 === true) {
          return NofibPrelude.None
        }
        tmp4 = NofibPrelude.Some(lo_);
        tmp5 = NofibPrelude.Some(hi_);
        tmp6 = NofibPrelude.Cons(h, arg$H$2$);
        tmp7 = cichelli.H(tmp4, tmp5, tmp6);
        return NofibPrelude.Some(tmp7);
      }
      return NofibPrelude.None;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #first(k, ls) {
    loopLabel: while (true) {
      let arg$LzCons$0$, arg$LzCons$1$, arg$NotEver$0$, arg$YesIts$0$, arg$YesIts$1$, tmp, tmp1, inlinedVal;
      if (ls instanceof NofibPrelude.Lazy.class) {
        inlinedVal = ls.get();
        if (inlinedVal instanceof NofibPrelude.LzNil.class) {
          return cichelli.NotEver(k)
        } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$ = inlinedVal.head;
          arg$LzCons$1$ = inlinedVal.tail;
          if (arg$LzCons$0$ instanceof cichelli.YesIts.class) {
            arg$YesIts$0$ = arg$LzCons$0$.i;
            arg$YesIts$1$ = arg$LzCons$0$.t;
            tmp = k + arg$YesIts$0$;
            return cichelli.YesIts(tmp, arg$YesIts$1$)
          } else if (arg$LzCons$0$ instanceof cichelli.NotEver.class) {
            arg$NotEver$0$ = arg$LzCons$0$.i;
            tmp1 = k + arg$NotEver$0$;
            k = tmp1;
            ls = arg$LzCons$1$;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #firstSuccess(f, possibles) {
    let f1, inlinedVal;
    f1 = f;
    inlinedVal = NofibPrelude.Lazy(lambda$(NofibPrelude, f1, possibles));
    return cichelli.#first(0, inlinedVal)
  }
  static #findhash_(keyHashSet, charAssocs, ks) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$K$0$, arg$K$1$, arg$K$2$, arg$K$3$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here, lambda$here1, lambda$here2, lambda$here3;
    if (ks instanceof NofibPrelude.Nil.class) {
      return cichelli.YesIts(1, charAssocs)
    } else if (ks instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ks.head;
      arg$Cons$1$ = ks.tail;
      if (arg$Cons$0$ instanceof cichelli.K.class) {
        arg$K$0$ = arg$Cons$0$.s;
        arg$K$1$ = arg$Cons$0$.c1;
        arg$K$2$ = arg$Cons$0$.c2;
        arg$K$3$ = arg$Cons$0$.i;
        tmp = cichelli.#assocm(arg$K$1$, charAssocs);
        tmp1 = cichelli.#assocm(arg$K$2$, charAssocs);
        scrut = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          if (element0$ instanceof NofibPrelude.None.class) {
            if (element1$ instanceof NofibPrelude.None.class) {
              scrut1 = arg$K$1$ === arg$K$2$;
              if (scrut1 === true) {
                tmp2 = cichelli.#enumFromTo_lz(0, cichelli.maxval);
                lambda$here = lambda$9(cichelli, keyHashSet, charAssocs, arg$K$0$, arg$K$3$, arg$K$1$, arg$K$2$, arg$Cons$1$);
                return cichelli.#firstSuccess(lambda$here, tmp2)
              }
              tmp3 = cichelli.#enumFromTo_lz(0, cichelli.maxval);
              tmp4 = lscomp1(cichelli, tmp3);
              lambda$here1 = lambda$8(cichelli, keyHashSet, charAssocs, arg$K$0$, arg$K$3$, arg$K$1$, arg$K$2$, arg$Cons$1$);
              return cichelli.#firstSuccess(lambda$here1, tmp4);
            } else if (element1$ instanceof NofibPrelude.Some.class) {
              tmp5 = cichelli.#enumFromTo_lz(0, cichelli.maxval);
              lambda$here2 = lambda$7(cichelli, keyHashSet, charAssocs, arg$K$0$, arg$K$3$, arg$K$1$, arg$K$2$, arg$Cons$1$);
              return cichelli.#firstSuccess(lambda$here2, tmp5)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (element0$ instanceof NofibPrelude.Some.class) {
            if (element1$ instanceof NofibPrelude.None.class) {
              tmp6 = cichelli.#enumFromTo_lz(0, cichelli.maxval);
              lambda$here3 = lambda$6(cichelli, keyHashSet, charAssocs, arg$K$0$, arg$K$3$, arg$K$1$, arg$K$2$, arg$Cons$1$);
              return cichelli.#firstSuccess(lambda$here3, tmp6)
            } else if (element1$ instanceof NofibPrelude.Some.class) {
              return tryy(cichelli, keyHashSet, charAssocs, arg$K$0$, arg$K$3$, arg$K$1$, arg$K$2$, arg$Cons$1$, NofibPrelude.Nil)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #findhash(keys) {
    let tmp;
    tmp = cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil);
    return cichelli.#findhash_(tmp, NofibPrelude.Nil, keys)
  }
  static #freq(c) {
    return cichelli.#assoc(c, cichelli.freqtab)
  }
  static #morefreq(k1, k2) {
    let arg$K$1$, arg$K$2$, arg$K$1$1, arg$K$2$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (k1 instanceof cichelli.K.class) {
      arg$K$1$ = k1.c1;
      arg$K$2$ = k1.c2;
      if (k2 instanceof cichelli.K.class) {
        arg$K$1$1 = k2.c1;
        arg$K$2$1 = k2.c2;
        tmp = cichelli.#freq(arg$K$1$);
        tmp1 = cichelli.#freq(arg$K$2$);
        tmp2 = tmp + tmp1;
        tmp3 = cichelli.#freq(arg$K$1$1);
        tmp4 = cichelli.#freq(arg$K$2$1);
        tmp5 = tmp3 + tmp4;
        return tmp2 > tmp5
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cichelli_(n) {
    let attribkeys_, hashkeys, tmp, tmp1, tmp2, inlinedVal, tmp3, inlinedVal1, tmp4;
    tmp4 = n / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp3 = 2 * inlinedVal1;
    inlinedVal = n - tmp3;
    tmp = NofibPrelude.take(inlinedVal, cichelli.keys);
    tmp1 = NofibPrelude.append(cichelli.keys, tmp);
    attribkeys_ = cichelli.#attribkeys(tmp1);
    tmp2 = cichelli.#freqsorted(attribkeys_);
    hashkeys = cichelli.#blocked(tmp2);
    return cichelli.#findhash(hashkeys)
  }
  static #prog(n) {
    return cichelli.#cichelli_(n)
  }
  static main() {
    let tmp;
    tmp = cichelli.#prog(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cichelli"];
});
export { go1 as _$_modulePrivate_$_go };
export { lscomp as _$_modulePrivate_$_lscomp };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { tryy as _$_modulePrivate_$_tryy };
export { cichelli1 as _$_modulePrivate_$_cichelli };
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
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export { lambda$2 as _$_modulePrivate_$_lambda$1 };
export { lambda$3 as _$_modulePrivate_$_lambda$2 };
export { lambda$4 as _$_modulePrivate_$_lambda$3 };
export { lambda$5 as _$_modulePrivate_$_lambda$4 };
export { lambda$6 as _$_modulePrivate_$_lambda$5 };
export { lambda$7 as _$_modulePrivate_$_lambda$6 };
export { lambda$8 as _$_modulePrivate_$_lambda$7 };
export { lambda$9 as _$_modulePrivate_$_lambda$8 };
export { lambda$10 as _$_modulePrivate_$_lambda$9 };
export { lambda$11 as _$_modulePrivate_$_lambda$10 };
export default cichelli1;
