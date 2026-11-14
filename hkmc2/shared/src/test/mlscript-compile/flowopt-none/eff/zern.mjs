const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const tabulateRM$accessorSymbol = globalThis.Symbol("tabulateRM");
const tabulateCM$accessorSymbol = globalThis.Symbol("tabulateCM");
let zern1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7;
lambda$6 = (undefined, function (zern2) {
  return (x) => {
    return 1 + x
  }
});
lambda$7 = (undefined, function (zern2) {
  return (r, c) => {
    return lambda2(zern2, r, c)
  }
});
lambda2 = (undefined, function (zern2, r, c) {
  let tmp, tmp1;
  tmp = 128 * r;
  tmp1 = tmp + c;
  return 0.01 * tmp1
});
lambda$5 = (undefined, function (zern2) {
  return (x) => {
    return lambda3(zern2, x)
  }
});
lambda3 = (undefined, function (zern2, x) {
  let lambda$here, t, inlinedVal;
  t = zern2.RowMajor;
  if (t instanceof zern2.RowMajor.class) {
    inlinedVal = zern2[tabulateRM$accessorSymbol];
  } else if (t instanceof zern2.ColMajor.class) {
    inlinedVal = zern2[tabulateCM$accessorSymbol];
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  lambda$here = lambda$7(zern2);
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
});
lambda$4 = (undefined, function (sf) {
  return (vdst, vsrc) => {
    let tmp;
    tmp = sf * vsrc;
    return vdst + tmp
  }
});
lambda$3 = (undefined, function (sf) {
  return (vsrc) => {
    return sf * vsrc
  }
});
lambda$2 = (undefined, function (zern2, f, dst, src) {
  return (ix) => {
    return lambda1(zern2, f, dst, src, ix)
  }
});
lambda1 = (undefined, function (zern2, f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
});
lambda$1 = (undefined, function (zern2, f, dst, src1, src2) {
  return (ix) => {
    return lambda(zern2, f, dst, src1, src2, ix)
  }
});
lambda = (undefined, function (zern2, f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
});
lambda$ = (undefined, function (zern2, v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
});
(class zern {
  static {
    zern1 = this
  }
  static get [tabulateRM$accessorSymbol]() { return zern.#tabulateRM; }
  static get [tabulateCM$accessorSymbol]() { return zern.#tabulateCM; }
  static {
    zern.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        zern.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        zern.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    zern.Arr2 = function Arr2(data_, nrows, ncols, nelts) {
      return globalThis.Object.freeze(new Arr2.class(data_, nrows, ncols, nelts));
    };
    (class Arr2 {
      static {
        zern.Arr2.class = this
      }
      constructor(data_, nrows, ncols, nelts) {
        this.data_ = data_;
        this.nrows = nrows;
        this.ncols = ncols;
        this.nelts = nelts;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Arr2", ["data_", "nrows", "ncols", "nelts"]];
    });
    (class RowMajor {
      static {
        new this
      }
      constructor() {
        zern.RowMajor = this;
        Object.defineProperty(this, "class", {
          value: RowMajor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RowMajor"];
    });
    (class ColMajor {
      static {
        new this
      }
      constructor() {
        zern.ColMajor = this;
        Object.defineProperty(this, "class", {
          value: ColMajor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ColMajor"];
    });
  }
  static #listPairApp$tailrec(f, l1, l2) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (l1 instanceof zern.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof zern.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
          l1 = arg$Cons$1$;
          l2 = arg$Cons$1$1;
          continue loopLabel
        }
        return runtime.Unit;
      }
      return runtime.Unit;
    }
  }
  static #sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static #cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static #listHd(l) {
    if (l instanceof zern.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listTl(l) {
    if (l instanceof zern.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listPairApp(f) {
    return (l1, l2) => {
      return zern.#listPairApp$tailrec(f, l1, l2)
    }
  }
  static #fillArray(arr, i, n, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      arr[i] = x;
      tmp = i + 1;
      i = tmp;
      continue loopLabel;
    }
  }
  static #unsafeSub(a, i) {
    return a.at(i)
  }
  static #mkRawArray(n) {
    let tmp;
    tmp = [];
    return zern.#fillArray(tmp, 0, n, 0.0)
  }
  static #dotimes(n) {
    return (f) => {
      let n1, f1, k, inlinedVal;
      n1 = n;
      f1 = f;
      k = 0;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, tmp;
          scrut = k >= n1;
          if (scrut === true) {
            inlinedVal = runtime.Unit;
            break inlinedLbl
          }
          runtime.safeCall(f1(k));
          tmp = k + 1;
          k = tmp;
          continue loopLabel;
        }
      }
      return inlinedVal
    }
  }
  static #mkArray(n, v) {
    let arr, lambda$here;
    arr = zern.#mkRawArray(n);
    lambda$here = lambda$(zern, v, arr);
    zern.#dotimes(n)(lambda$here);
    return arr
  }
  static #ltu(i, limit) {
    let tmp;
    tmp = i >= 0;
    if (tmp === true) {
      return i < limit
    }
    return false;
  }
  static #unsafeIndex(arr, i, j) {
    let arg$Arr2$2$, tmp;
    if (arr instanceof zern.Arr2.class) {
      arg$Arr2$2$ = arr.ncols;
      tmp = i * arg$Arr2$2$;
      return tmp + j
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #index(arr, i, j) {
    let arg$Arr2$1$, arg$Arr2$2$, tmp, tmp1;
    if (arr instanceof zern.Arr2.class) {
      arg$Arr2$1$ = arr.nrows;
      arg$Arr2$2$ = arr.ncols;
      tmp = zern.#ltu(i, arg$Arr2$1$);
      if (tmp === true) {
        tmp1 = zern.#ltu(j, arg$Arr2$2$);
        if (tmp1 === true) {
          return zern.#unsafeIndex(arr, i, j)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #max_length() {
    return 16777216
  }
  static #chkSize(nrows, ncols) {
    let n, scrut, tmp, tmp1, tmp2;
    tmp = nrows > 0;
    if (tmp === true) {
      tmp1 = ncols > 0;
      if (tmp1 === true) {
        n = nrows * ncols;
        tmp2 = zern.#max_length();
        scrut = n <= tmp2;
        if (scrut === true) {
          return n
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #array(nrows, ncols, v) {
    let nelts, tmp;
    nelts = zern.#chkSize(nrows, ncols);
    tmp = zern.#mkArray(nelts, v);
    return zern.Arr2(tmp, nrows, ncols, nelts)
  }
  static #tabulateRM(nrows, ncols, f) {
    let nelts, arr, id, param1, param2, param3, param4, param5, param6, param7;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    id = 1;
    param1 = nrows;
    param2 = ncols;
    param3 = f;
    param4 = arr;
    param5 = 0;
    param6 = 0;
    param7 = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        switch (id) {
          case 0:
            {
              let scrut;
              scrut = param5 < param1;
              if (scrut === true) {
                param6 = 0;
                id = 1;
                continue loopLabel
              }
              break inlinedLbl;
            }
          case 1:
            {
              let scrut, tmp, tmp1, tmp2, tmp3;
              scrut = param6 < param2;
              if (scrut === true) {
                tmp = runtime.safeCall(param3(param5, param6));
                param4[param7] = tmp;
                tmp1 = param6 + 1;
                tmp2 = param7 + 1;
                param6 = tmp1;
                param7 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = param5 + 1;
              param5 = tmp3;
              param6 = 0;
              id = 0;
              continue loopLabel;
            }
        }
      }
    }
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #tabulateCM(nrows, ncols, f) {
    let nelts, arr, delta, id, param1, param2, param3, param4, param5, param6, param7, param8;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    delta = nelts - 1;
    id = 1;
    param1 = nrows;
    param2 = ncols;
    param3 = f;
    param4 = arr;
    param5 = delta;
    param6 = 0;
    param7 = 0;
    param8 = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        switch (id) {
          case 0:
            {
              let scrut;
              scrut = param7 < param2;
              if (scrut === true) {
                param6 = 0;
                id = 1;
                continue loopLabel
              }
              break inlinedLbl;
            }
          case 1:
            {
              let scrut, tmp, tmp1, tmp2, tmp3, tmp4;
              scrut = param6 < param1;
              if (scrut === true) {
                tmp = runtime.safeCall(param3(param6, param7));
                param4[param8] = tmp;
                tmp1 = param6 + 1;
                tmp2 = param8 + param2;
                param6 = tmp1;
                param8 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = param7 + 1;
              tmp4 = param8 - param5;
              param6 = 0;
              param7 = tmp3;
              param8 = tmp4;
              id = 0;
              continue loopLabel;
            }
        }
      }
    }
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #sub(a, i, j) {
    let arg$Arr2$0$, tmp;
    if (a instanceof zern.Arr2.class) {
      arg$Arr2$0$ = a.data_;
      tmp = zern.#index(a, i, j);
      return zern.#unsafeSub(arg$Arr2$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #binop(d, s1, s2, f) {
    let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
    if (d instanceof zern.Arr2.class) {
      arg$Arr2$0$ = d.data_;
      arg$Arr2$3$ = d.nelts;
      if (s1 instanceof zern.Arr2.class) {
        arg$Arr2$0$1 = s1.data_;
        if (s2 instanceof zern.Arr2.class) {
          arg$Arr2$0$2 = s2.data_;
          lambda$here = lambda$1(zern, f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
          return zern.#dotimes(arg$Arr2$3$)(lambda$here)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unop(d, s, f) {
    let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here;
    if (d instanceof zern.Arr2.class) {
      arg$Arr2$0$ = d.data_;
      arg$Arr2$3$ = d.nelts;
      if (s instanceof zern.Arr2.class) {
        arg$Arr2$0$1 = s.data_;
        lambda$here = lambda$2(zern, f, arg$Arr2$0$, arg$Arr2$0$1);
        return zern.#dotimes(arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #collect(n) {
    return (f) => {
      let l, zern2, f1, n1, l1, inlinedVal;
      l = zern.Nil;
      zern2 = zern;
      f1 = f;
      n1 = n;
      l1 = l;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, tmp, tmp1, tmp2;
          scrut = n1 == 0;
          if (scrut === true) {
            inlinedVal = l1;
            break inlinedLbl
          }
          tmp = n1 - 1;
          tmp1 = runtime.safeCall(f1(n1));
          tmp2 = zern2.Cons(tmp1, l1);
          n1 = tmp;
          l1 = tmp2;
          continue loopLabel;
        }
      }
      return inlinedVal
    }
  }
  static #ncoefs() {
    return 15
  }
  static #nx() {
    return 128
  }
  static #ny() {
    return zern.#nx()
  }
  static #mulsv(dst, sf, a) {
    let lambda$here;
    lambda$here = lambda$3(sf);
    return zern.#unop(dst, a, lambda$here)
  }
  static #cisv(a, rpart, ipart) {
    zern.#unop(rpart, a, zern.#cos);
    zern.#unop(ipart, a, zern.#sin);
    return globalThis.Object.freeze([
      rpart,
      ipart
    ])
  }
  static #mpadd(dst) {
    return (sf, src) => {
      let lambda$here;
      lambda$here = lambda$4(sf);
      return zern.#binop(dst, dst, src, lambda$here)
    }
  }
  static #zern(dst, rpart, ipart, coefs, zerns) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = zern.#listHd(coefs);
    tmp1 = zern.#listHd(zerns);
    zern.#mulsv(dst, tmp, tmp1);
    tmp2 = zern.#mpadd(dst);
    tmp3 = zern.#listTl(coefs);
    tmp4 = zern.#listTl(zerns);
    zern.#listPairApp(tmp2)(tmp3, tmp4);
    return zern.#cisv(dst, rpart, ipart)
  }
  static #ztest() {
    let sum, rpart, ipart, coefs, zerns, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, element0$, lambda$here, lambda$here1;
    tmp = zern.#ny();
    tmp1 = zern.#nx();
    sum = zern.#array(tmp, tmp1, 0.0);
    tmp2 = zern.#ny();
    tmp3 = zern.#nx();
    rpart = zern.#array(tmp2, tmp3, 0.0);
    tmp4 = zern.#ny();
    tmp5 = zern.#nx();
    ipart = zern.#array(tmp4, tmp5, 0.0);
    tmp6 = zern.#ncoefs();
    lambda$here = lambda$6(zern);
    coefs = zern.#collect(tmp6)(lambda$here);
    tmp7 = zern.#ncoefs();
    lambda$here1 = lambda$5(zern);
    zerns = zern.#collect(tmp7)(lambda$here1);
    scrut = zern.#zern(sum, rpart, ipart, coefs, zerns);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      return zern.#sub(element0$, 0, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    return zern.#ztest()
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "zern"];
});
export { zern1 as _$_modulePrivate_$_zern };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export default zern1;
