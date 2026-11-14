const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Rendering from "./../../Rendering.mjs";
let r, l, go, f, lscomp, combine, go1, NofibPrelude1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18;
go1 = function go(NofibPrelude2, s, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i < s.length;
  if (scrut === true) {
    tmp = runtime.safeCall(s.charAt(i));
    tmp1 = i + 1;
    tmp2 = go1(NofibPrelude2, s, tmp1);
    return NofibPrelude2.Cons(tmp, tmp2)
  }
  return NofibPrelude2.Nil;
};
lambda$18 = (undefined, function (NofibPrelude2, x) {
  return () => {
    let tmp;
    tmp = NofibPrelude2.repeat(x);
    return NofibPrelude2.LzCons(x, tmp)
  }
});
lambda20 = (undefined, function (NofibPrelude2, x) {
  let tmp;
  tmp = NofibPrelude2.repeat(x);
  return NofibPrelude2.LzCons(x, tmp)
});
lambda$17 = (undefined, function (NofibPrelude2, a) {
  return () => {
    return lambda19(NofibPrelude2, a)
  }
});
lambda19 = (undefined, function (NofibPrelude2, a) {
  let tmp, tmp1;
  tmp = a + 1;
  tmp1 = NofibPrelude2.enumFrom(tmp);
  return NofibPrelude2.LzCons(a, tmp1)
});
lambda$16 = (undefined, function (NofibPrelude2) {
  return () => {
    return NofibPrelude2.LzNil
  }
});
lambda$15 = (undefined, function (NofibPrelude2, n, x) {
  return () => {
    return lambda18(NofibPrelude2, n, x)
  }
});
lambda17 = (undefined, function (NofibPrelude2) {
  return NofibPrelude2.LzNil
});
lambda18 = (undefined, function (NofibPrelude2, n, x) {
  let tmp, tmp1;
  tmp = n - 1;
  tmp1 = NofibPrelude2.replicate_lz(tmp, x);
  return NofibPrelude2.LzCons(x, tmp1)
});
lambda$14 = (undefined, function (NofibPrelude2, xs, ys) {
  return () => {
    return lambda16(NofibPrelude2, xs, ys)
  }
});
lambda16 = (undefined, function (NofibPrelude2, xs, ys) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, inlinedVal;
  if (xs instanceof NofibPrelude2.Lazy.class) {
    inlinedVal = xs.get();
    if (inlinedVal instanceof NofibPrelude2.LzNil.class) {
      if (ys instanceof NofibPrelude2.Lazy.class) {
        return ys.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = NofibPrelude2.append_lz_lz(arg$LzCons$1$, ys);
      return NofibPrelude2.LzCons(arg$LzCons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$13 = (undefined, function (NofibPrelude2, ys, t, h) {
  return () => {
    let tmp;
    tmp = NofibPrelude2.append_nl_lz(t, ys);
    return NofibPrelude2.LzCons(h, tmp)
  }
});
lambda15 = (undefined, function (NofibPrelude2, ys, t, h) {
  let tmp;
  tmp = NofibPrelude2.append_nl_lz(t, ys);
  return NofibPrelude2.LzCons(h, tmp)
});
lambda$12 = (undefined, function (NofibPrelude2, f1, x) {
  return () => {
    return lambda14(NofibPrelude2, f1, x)
  }
});
lambda14 = (undefined, function (NofibPrelude2, f1, x) {
  let tmp, tmp1;
  tmp = runtime.safeCall(f1(x));
  tmp1 = NofibPrelude2.iterate(f1, tmp);
  return NofibPrelude2.LzCons(x, tmp1)
});
lambda$11 = (undefined, function (NofibPrelude2, f1, xss, yss) {
  return () => {
    return lambda13(NofibPrelude2, f1, xss, yss)
  }
});
lambda13 = (undefined, function (NofibPrelude2, f1, xss, yss) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, tmp, tmp1, inlinedVal;
  if (xss instanceof NofibPrelude2.Lazy.class) {
    inlinedVal = xss.get();
    if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
      let inlinedVal1;
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (yss instanceof NofibPrelude2.Lazy.class) {
        inlinedVal1 = yss.get();
        if (inlinedVal1 instanceof NofibPrelude2.LzCons.class) {
          arg$LzCons$0$1 = inlinedVal1.head;
          arg$LzCons$1$1 = inlinedVal1.tail;
          tmp = runtime.safeCall(f1(arg$LzCons$0$, arg$LzCons$0$1));
          tmp1 = NofibPrelude2.zipWith_lz_lz(f1, arg$LzCons$1$, arg$LzCons$1$1);
          return NofibPrelude2.LzCons(tmp, tmp1)
        }
        return NofibPrelude2.LzNil;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return NofibPrelude2.LzNil;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$10 = (undefined, function (NofibPrelude2, x, xs, ys, y) {
  return () => {
    return lambda12(NofibPrelude2, x, xs, ys, y)
  }
});
lambda$9 = (undefined, function (NofibPrelude2) {
  return () => {
    return NofibPrelude2.LzNil
  }
});
lambda12 = (undefined, function (NofibPrelude2, x, xs, ys, y) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    x,
    y
  ]);
  tmp1 = NofibPrelude2.zip_lz_lz(xs, ys);
  return NofibPrelude2.LzCons(tmp, tmp1)
});
lambda11 = (undefined, function (NofibPrelude2) {
  return NofibPrelude2.LzNil
});
lambda$8 = (undefined, function (NofibPrelude2) {
  return () => {
    return NofibPrelude2.LzNil
  }
});
lambda10 = (undefined, function (NofibPrelude2) {
  return NofibPrelude2.LzNil
});
lambda$7 = (undefined, function (NofibPrelude2, n, ls) {
  return () => {
    return lambda9(NofibPrelude2, n, ls)
  }
});
lambda9 = (undefined, function (NofibPrelude2, n, ls) {
  let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
  scrut = n > 0;
  if (scrut === true) {
    let inlinedVal;
    if (ls instanceof NofibPrelude2.Lazy.class) {
      inlinedVal = ls.get();
      if (inlinedVal instanceof NofibPrelude2.LzNil.class) {
        return NofibPrelude2.LzNil
      } else if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
        arg$LzCons$0$ = inlinedVal.head;
        arg$LzCons$1$ = inlinedVal.tail;
        tmp = n - 1;
        tmp1 = NofibPrelude2.take_lz_lz(tmp, arg$LzCons$1$);
        return NofibPrelude2.LzCons(arg$LzCons$0$, tmp1)
      }
      return NofibPrelude2.LzNil;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return NofibPrelude2.LzNil;
});
lambda8 = (undefined, function (x, y) {
  return x == y
});
lambda$6 = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda6 = (undefined, function (eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
});
lambda$5 = (undefined, function (NofibPrelude2, eq, ls) {
  return () => {
    return lambda7(NofibPrelude2, eq, ls)
  }
});
lambda7 = (undefined, function (NofibPrelude2, eq, ls) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof NofibPrelude2.Lazy.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof NofibPrelude2.LzNil.class) {
      return NofibPrelude2.LzNil
    } else if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = NofibPrelude2.filter_lz(lambda$6(eq, arg$LzCons$0$), arg$LzCons$1$);
      tmp1 = NofibPrelude2.nubBy_lz(eq, tmp);
      return NofibPrelude2.LzCons(arg$LzCons$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (NofibPrelude2, p, ls) {
  return () => {
    return lambda5(NofibPrelude2, p, ls)
  }
});
lambda5 = (undefined, function (NofibPrelude2, p, ls) {
  let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof NofibPrelude2.Lazy.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof NofibPrelude2.LzNil.class) {
      return NofibPrelude2.LzNil
    } else if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      scrut = runtime.safeCall(p(arg$LzCons$0$));
      if (scrut === true) {
        tmp = NofibPrelude2.filter_lz(p, arg$LzCons$1$);
        return NofibPrelude2.LzCons(arg$LzCons$0$, tmp)
      }
      tmp1 = NofibPrelude2.filter_lz(p, arg$LzCons$1$);
      if (tmp1 instanceof NofibPrelude2.Lazy.class) {
        return tmp1.get()
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (NofibPrelude2, f1, ls) {
  return () => {
    return lambda4(NofibPrelude2, f1, ls)
  }
});
lambda4 = (undefined, function (NofibPrelude2, f1, ls) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1, inlinedVal;
  if (ls instanceof NofibPrelude2.Lazy.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof NofibPrelude2.LzNil.class) {
      return NofibPrelude2.LzNil
    } else if (inlinedVal instanceof NofibPrelude2.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp = runtime.safeCall(f1(arg$LzCons$0$));
      tmp1 = NofibPrelude2.map_lz(f1, arg$LzCons$1$);
      return NofibPrelude2.LzCons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lscomp = function lscomp(NofibPrelude2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude2.Nil.class) {
      return NofibPrelude2.Nil
    } else if (ls instanceof NofibPrelude2.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof NofibPrelude2.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$1,
          arg$Cons$1$1
        ]);
        tmp1 = lscomp(NofibPrelude2, arg$Cons$1$);
        return NofibPrelude2.Cons(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
combine = function combine(NofibPrelude2, y, h, ys, t) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude2.Cons(y, h);
  tmp1 = NofibPrelude2.Cons(ys, t);
  tmp2 = NofibPrelude2.transpose(tmp1);
  return NofibPrelude2.Cons(tmp, tmp2)
};
f = function f(NofibPrelude2, l1, a, b) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (l1 instanceof NofibPrelude2.Nil.class) {
      let inlinedVal, inlinedVal1;
      inlinedVal = r(NofibPrelude2, NofibPrelude2.Nil, a);
      inlinedVal1 = r(NofibPrelude2, NofibPrelude2.Nil, b);
      return globalThis.Object.freeze([
        inlinedVal,
        inlinedVal1
      ])
    } else if (l1 instanceof NofibPrelude2.Cons.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        tmp = NofibPrelude2.Cons(element0$, a);
        tmp1 = NofibPrelude2.Cons(element1$, b);
        l1 = arg$Cons$1$;
        a = tmp;
        b = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
go = function go(NofibPrelude2, xs, a) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude2.Nil.class) {
      return a
    } else if (xs instanceof NofibPrelude2.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = a + arg$Cons$0$;
      xs = arg$Cons$1$;
      a = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda3 = (undefined, function (x, y) {
  return x == y
});
lambda$2 = (undefined, function (NofibPrelude2, eq) {
  return (acc, y) => {
    return NofibPrelude2.deleteBy(eq, y, acc)
  }
});
lambda2 = (undefined, function (NofibPrelude2, eq, acc, y) {
  return NofibPrelude2.deleteBy(eq, y, acc)
});
lambda$1 = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda1 = (undefined, function (eq, h, y) {
  let tmp;
  tmp = runtime.safeCall(eq(h, y));
  return ! tmp
});
lambda = (undefined, function (x, y) {
  let scrut;
  scrut = x > y;
  if (scrut === true) {
    return x
  }
  return y;
});
l = function l(NofibPrelude2, ls, a) {
  loopLabel: while (true) {
    let arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude2.Nil.class) {
      return a
    } else if (ls instanceof NofibPrelude2.Cons.class) {
      arg$Cons$1$ = ls.tail;
      tmp = a + 1;
      ls = arg$Cons$1$;
      a = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
r = function r(NofibPrelude2, l$_, l1) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l1 instanceof NofibPrelude2.Cons.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = NofibPrelude2.Cons(arg$Cons$0$, l$_);
      l$_ = tmp;
      l1 = arg$Cons$1$;
      continue loopLabel
    }
    return l$_;
  }
};
lambda$ = (undefined, function (f1, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f1(tmp))
  }
});
lambda21 = (undefined, function (f1, g, x) {
  let tmp;
  tmp = runtime.safeCall(g(x));
  return runtime.safeCall(f1(tmp))
});
(class NofibPrelude {
  static {
    NofibPrelude1 = this
  }
  static {
    (class Option {
      static {
        NofibPrelude.Option = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Option"];
    });
    NofibPrelude.Some = function Some(x) {
      return globalThis.Object.freeze(new Some.class(x));
    };
    (class Some extends NofibPrelude.Option {
      static {
        NofibPrelude.Some.class = this
      }
      constructor(x) {
        super();
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["x"]];
    });
    (class None extends NofibPrelude.Option {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    NofibPrelude.Lazy = function Lazy(init) {
      return globalThis.Object.freeze(new Lazy.class(init));
    };
    (class Lazy {
      static {
        NofibPrelude.Lazy.class = this
      }
      constructor(init) {
        this.init = init;
        this.cached = NofibPrelude.None;
      }
      #cached;
      get cached() { return this.#cached; }
      set cached(value) { this.#cached = value; }
      get() {
        let scrut, v, tmp;
        scrut = this.cached;
        if (scrut instanceof NofibPrelude.Some.class) {
          return scrut.x
        }
        v = runtime.safeCall(this.init());
        tmp = NofibPrelude.Some(v);
        this.cached = tmp;
        return v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lazy", ["init"]];
    });
    (class List {
      static {
        NofibPrelude.List = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "List"];
    });
    NofibPrelude.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons extends NofibPrelude.List {
      static {
        NofibPrelude.Cons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() {
        let tmp, tmp1, tmp2;
        tmp = NofibPrelude.Cons(this.head, this.tail);
        tmp1 = NofibPrelude._internal_cons_to_str(tmp);
        tmp2 = "[" + tmp1;
        return tmp2 + "]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil extends NofibPrelude.List {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() {
        return "[]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    (class LzList {
      static {
        NofibPrelude.LzList = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzList"];
    });
    NofibPrelude.LzCons = function LzCons(head, tail) {
      return globalThis.Object.freeze(new LzCons.class(head, tail));
    };
    (class LzCons extends NofibPrelude.LzList {
      static {
        NofibPrelude.LzCons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzCons", ["head", "tail"]];
    });
    (class LzNil extends NofibPrelude.LzList {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.LzNil = this;
        Object.defineProperty(this, "class", {
          value: LzNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LzNil"];
    });
  }
  static fromSome(s) {
    if (s instanceof NofibPrelude.Some.class) {
      return s.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static lazy(x) {
    return NofibPrelude.Lazy(x)
  }
  static force(x) {
    if (x instanceof NofibPrelude.Lazy.class) {
      return x.get()
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static _internal_cons_to_str(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(Rendering.render(arg$Cons$0$))
      }
      {
        let inlinedVal;
        inlinedVal = Rendering.render;
        tmp = runtime.safeCall(inlinedVal(arg$Cons$0$));
        tmp1 = tmp + ",";
        tmp2 = NofibPrelude._internal_cons_to_str(arg$Cons$1$);
        return tmp1 + tmp2;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut1 === true) {
            return false
          }
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static list(...args) {
    let element0$, tmp;
    if (runtime.Tuple.isArrayLike(args) && args.length === 0) {
      return NofibPrelude.Nil
    } else if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
      let inlinedVal, tmp1;
      element0$ = runtime.Tuple.get(args, 0);
      tmp1 = args.length - 0;
      inlinedVal = runtime.safeCall(args.slice(1, tmp1));
      tmp = NofibPrelude.list(...inlinedVal);
      return NofibPrelude.Cons(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static ltTup2(t1, t2, lt1, gt1, lt2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = runtime.safeCall(lt1(element0$, element0$1));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt1(element0$, element0$1));
        if (scrut1 === true) {
          return false
        }
        return runtime.safeCall(lt2(element1$, element1$1));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static eqTup2(t1, t2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = element0$ == element0$1;
        if (scrut === true) {
          scrut1 = element1$ == element1$1;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static compose(f1, g) {
    return lambda$(f1, g)
  }
  static snd(x) {
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      return runtime.Tuple.get(x, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static fst(x) {
    let element0$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      element0$ = runtime.Tuple.get(x, 0);
      runtime.Tuple.get(x, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static until(p, f1, i) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = runtime.safeCall(p(i));
      if (scrut === true) {
        return i
      }
      tmp = runtime.safeCall(f1(i));
      i = tmp;
      continue loopLabel;
    }
  }
  static flip(f1, x, y) {
    let callPrefix;
    callPrefix = runtime.safeCall(f1(y));
    return runtime.safeCall(callPrefix(x))
  }
  static power(a, n) {
    return runtime.safeCall(globalThis.Math.pow(a, n))
  }
  static intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  }
  static intQuot(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.trunc(tmp))
  }
  static intMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static intRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static quotRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = NofibPrelude.intRem(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  static divMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = NofibPrelude.intMod(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  static max(a, b) {
    return runtime.safeCall(globalThis.Math.max(a, b))
  }
  static min(a, b) {
    return runtime.safeCall(globalThis.Math.min(a, b))
  }
  static abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  }
  static head(l1) {
    if (l1 instanceof NofibPrelude.Cons.class) {
      return l1.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static tail(l1) {
    if (l1 instanceof NofibPrelude.Cons.class) {
      return l1.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static while_(p, f1, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = runtime.safeCall(f1(x));
        x = tmp;
        continue loopLabel
      }
      return x;
    }
  }
  static reverse(l1) {
    return r(NofibPrelude, NofibPrelude.Nil, l1)
  }
  static map(f1, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$));
      tmp1 = NofibPrelude.map(f1, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static listLen(ls) {
    return l(NofibPrelude, ls, 0)
  }
  static listEq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = arg$Cons$0$ == arg$Cons$0$1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static listEqBy(f1, a, b) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
      if (a instanceof NofibPrelude.Nil.class) {
        if (b instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (a instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = a.head;
        arg$Cons$1$ = a.tail;
        if (b instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = b.head;
          arg$Cons$1$1 = b.tail;
          tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
          if (tmp === true) {
            a = arg$Cons$1$;
            b = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static listNeq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = arg$Cons$0$ == arg$Cons$0$1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          return true;
        }
        return true;
      }
      return true;
    }
  }
  static enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = NofibPrelude.enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = NofibPrelude.enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    }
    return NofibPrelude.Nil;
  }
  static leave(n, ls) {
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
  static take(n, ls) {
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
      tmp1 = NofibPrelude.take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static splitAt(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take(n, ls);
    tmp1 = NofibPrelude.leave(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  static zip(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$,
          arg$Cons$0$1
        ]);
        tmp1 = NofibPrelude.zip(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static notElem(x, ls) {
    let tmp;
    tmp = NofibPrelude.inList(x, ls);
    return ! tmp
  }
  static append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = NofibPrelude.append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.concat(arg$Cons$1$);
      return NofibPrelude.append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static filter(f1, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f1(arg$Cons$0$));
        if (scrut === true) {
          tmp = NofibPrelude.filter(f1, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static all(p, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(p(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static orList(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$0$ === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static leaveWhile(f1, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f1(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static foldl(f1, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f1(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static scanl(f1, q, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f1(q, arg$Cons$0$));
      tmp1 = NofibPrelude.scanl(f1, tmp, arg$Cons$1$);
      return NofibPrelude.Cons(q, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static scanr(f1, q, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = NofibPrelude.scanr(f1, q, arg$Cons$1$);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = scrut.head;
        arg$Cons$1$1 = scrut.tail;
        tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static foldr(f1, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = NofibPrelude.foldr(f1, z, arg$Cons$1$);
      return runtime.safeCall(f1(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static foldl1(f1, ls) {
    let arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      return NofibPrelude.foldl(f1, arg$Cons$0$, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static foldr1(f1, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return arg$Cons$0$
      }
      tmp = NofibPrelude.foldr1(f1, arg$Cons$1$);
      return runtime.safeCall(f1(arg$Cons$0$, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static maximum(xs) {
    return NofibPrelude.foldl1(lambda, xs)
  }
  static nubBy(eq, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.filter(lambda$1(eq, arg$Cons$0$), arg$Cons$1$);
      tmp1 = NofibPrelude.nubBy(eq, tmp);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static zipWith(f1, xss, yss) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = yss.head;
        arg$Cons$1$1 = yss.tail;
        tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = NofibPrelude.zipWith(f1, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = NofibPrelude.deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static unionBy(eq, xs, ys) {
    let tmp, tmp1;
    tmp = NofibPrelude.nubBy(eq, ys);
    tmp1 = NofibPrelude.foldl(lambda$2(NofibPrelude, eq), tmp, xs);
    return NofibPrelude.append(xs, tmp1)
  }
  static union(xs, ys) {
    return NofibPrelude.unionBy(lambda3, xs, ys)
  }
  static atIndex(i, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = i == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = i - 1;
        i = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static sum(xs) {
    return go(NofibPrelude, xs, 0)
  }
  static null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  }
  static replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = NofibPrelude.replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static unzip(l1) {
    return f(NofibPrelude, l1, NofibPrelude.Nil, NofibPrelude.Nil)
  }
  static zip3(xs, ys, zs) {
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
          tmp1 = NofibPrelude.zip3(arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static transpose(xss) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, tmp;
      if (xss instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
          xss = arg$Cons$1$;
          continue loopLabel
        } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$0$.head;
          arg$Cons$1$1 = arg$Cons$0$.tail;
          tmp = lscomp(NofibPrelude, arg$Cons$1$);
          scrut = NofibPrelude.unzip(tmp);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            let tmp1, tmp2, tmp3;
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp1 = NofibPrelude.Cons(arg$Cons$0$1, element0$);
            tmp2 = NofibPrelude.Cons(arg$Cons$1$1, element1$);
            tmp3 = NofibPrelude.transpose(tmp2);
            return NofibPrelude.Cons(tmp1, tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static break_(p, ls) {
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
      scrut1 = NofibPrelude.break_(p, arg$Cons$1$);
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
  static flatMap(f1, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$));
      tmp1 = NofibPrelude.flatMap(f1, arg$Cons$1$);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static map_lz(f1, ls) {
    let lambda$here;
    lambda$here = lambda$3(NofibPrelude, f1, ls);
    return NofibPrelude.lazy(lambda$here)
  }
  static filter_lz(p, ls) {
    let lambda$here;
    lambda$here = lambda$4(NofibPrelude, p, ls);
    return NofibPrelude.lazy(lambda$here)
  }
  static nubBy_lz(eq, ls) {
    let lambda$here;
    lambda$here = lambda$5(NofibPrelude, eq, ls);
    return NofibPrelude.lazy(lambda$here)
  }
  static nub_lz(ls) {
    return NofibPrelude.nubBy_lz(lambda8, ls)
  }
  static take_lz(n, ls) {
    let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
    scrut = n > 0;
    if (scrut === true) {
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut1.head;
        arg$LzCons$1$ = scrut1.tail;
        tmp = n - 1;
        tmp1 = NofibPrelude.take_lz(tmp, arg$LzCons$1$);
        return NofibPrelude.Cons(arg$LzCons$0$, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static take_lz_lz(n, ls) {
    let lambda$here;
    lambda$here = lambda$7(NofibPrelude, n, ls);
    return NofibPrelude.lazy(lambda$here)
  }
  static leave_lz(n, ls) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$LzCons$1$, tmp, lambda$here;
      scrut = n <= 0;
      if (scrut === true) {
        return ls
      }
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        lambda$here = lambda$8(NofibPrelude);
        return NofibPrelude.lazy(lambda$here)
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$1$ = scrut1.tail;
        tmp = n - 1;
        n = tmp;
        ls = arg$LzCons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static splitAt_lz(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take_lz(n, ls);
    tmp1 = NofibPrelude.leave_lz(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  static zip_lz_nl(xs, ys) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ys.head;
        arg$Cons$1$ = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$LzCons$0$,
          arg$Cons$0$
        ]);
        tmp1 = NofibPrelude.zip_lz_nl(arg$LzCons$1$, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static zip_lz_lz(xs, ys) {
    let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, lambda$here, lambda$here1;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      scrut1 = NofibPrelude.force(ys);
      if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$1 = scrut1.head;
        arg$LzCons$1$1 = scrut1.tail;
        lambda$here = lambda$10(NofibPrelude, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$1$1, arg$LzCons$0$1);
        return NofibPrelude.lazy(lambda$here)
      }
    }
    lambda$here1 = lambda$9(NofibPrelude);
    return NofibPrelude.lazy(lambda$here1)
  }
  static zipWith_lz_lz(f1, xss, yss) {
    let lambda$here;
    lambda$here = lambda$11(NofibPrelude, f1, xss, yss);
    return NofibPrelude.lazy(lambda$here)
  }
  static zipWith_lz_nl(f1, xss, yss) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yss.head;
        arg$Cons$1$ = yss.tail;
        tmp = runtime.safeCall(f1(arg$LzCons$0$, arg$Cons$0$));
        tmp1 = NofibPrelude.zipWith_lz_nl(f1, arg$LzCons$1$, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static iterate(f1, x) {
    let lambda$here;
    lambda$here = lambda$12(NofibPrelude, f1, x);
    return NofibPrelude.lazy(lambda$here)
  }
  static append_nl_lz(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, lambda$here;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      lambda$here = lambda$13(NofibPrelude, ys, arg$Cons$1$, arg$Cons$0$);
      return NofibPrelude.lazy(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static append_lz_lz(xs, ys) {
    let lambda$here;
    lambda$here = lambda$14(NofibPrelude, xs, ys);
    return NofibPrelude.lazy(lambda$here)
  }
  static replicate_lz(n, x) {
    let scrut, lambda$here, lambda$here1;
    scrut = n == 0;
    if (scrut === true) {
      lambda$here = lambda$16(NofibPrelude);
      return NofibPrelude.lazy(lambda$here)
    }
    lambda$here1 = lambda$15(NofibPrelude, n, x);
    return NofibPrelude.lazy(lambda$here1);
  }
  static enumFrom(a) {
    let lambda$here;
    lambda$here = lambda$17(NofibPrelude, a);
    return NofibPrelude.lazy(lambda$here)
  }
  static head_lz(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      return scrut.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static repeat(x) {
    let lambda$here;
    lambda$here = lambda$18(NofibPrelude, x);
    return NofibPrelude.lazy(lambda$here)
  }
  static stringOfFloat(x) {
    return x + ""
  }
  static stringOfInt(x) {
    return x + ""
  }
  static stringConcat(x, y) {
    return x + y
  }
  static stringListConcat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.stringListConcat(arg$Cons$1$);
      return NofibPrelude.stringConcat(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
  }
  static sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static round(x) {
    return runtime.safeCall(globalThis.Math.round(x))
  }
  static int_of_char(x) {
    return runtime.safeCall(x.charCodeAt(0))
  }
  static nofibStringToList(s) {
    return go1(NofibPrelude, s, 0)
  }
  static nofibListToString(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.nofibListToString(arg$Cons$1$);
      return arg$Cons$0$ + tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NofibPrelude"];
});
export { r as _$_modulePrivate_$_r };
export { l as _$_modulePrivate_$_l };
export { go as _$_modulePrivate_$_go };
export { f as _$_modulePrivate_$_f };
export { lscomp as _$_modulePrivate_$_lscomp };
export { combine as _$_modulePrivate_$_combine };
export { go1 as _$_modulePrivate_$_go1 };
export { NofibPrelude1 as _$_modulePrivate_$_NofibPrelude };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { lambda$13 as _$_modulePrivate_$_lambda$13 };
export { lambda$14 as _$_modulePrivate_$_lambda$14 };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export default NofibPrelude1;
