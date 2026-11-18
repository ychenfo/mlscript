const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const dotimes$accessorSymbol = globalThis.Symbol("dotimes");
const chkSize$accessorSymbol = globalThis.Symbol("chkSize");
let zern1, lambda$, lambda$1, main_lambda$$lambda$, main_lambda$$lambda$1, main_lambda$$lambda$2, main_lambda$$lambda$3, main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$_lambda$lambda, main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$$lambda$, main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda$main_ztest_lambda$_lambda$lambda, main_main_ztest_lambda$$lambda$$main_ztest_lambda$$lambda$, main_unop_lambda$_lambda$lambda, main_unop_lambda$$lambda$, main_mpadd_binop_lambda$_lambda$lambda, main_mpadd_binop_lambda$$lambda$, main_mpadd_binop$binop, main_mpadd$mpadd, main_unop_lambda$_lambda$lambda1, main_unop_lambda$$lambda$1, main_unop_lambda$_lambda$lambda2, main_unop_lambda$$lambda$2;
main_lambda$$lambda$ = function main_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
main_lambda$$lambda$1 = function main_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
main_lambda$$lambda$2 = function main_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
main_lambda$$lambda$3 = function main_lambda$$lambda$() {
  return (x) => {
    return 1 + x
  }
};
main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$_lambda$lambda = function main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$_lambda$lambda(r, c) {
  let tmp, tmp1;
  tmp = 128 * r;
  tmp1 = tmp + c;
  return 0.01 * tmp1
};
main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$$lambda$ = function main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$$lambda$() {
  return (r, c) => {
    return main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$_lambda$lambda(r, c)
  }
};
main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda$main_ztest_lambda$_lambda$lambda = function main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda$main_ztest_lambda$_lambda$lambda() {
  let nrows, ncols, f, nelts, arr, id, param1, param2, param3, param4, param5, param6, param7, tmp, arr1, i, n, x, inlinedVal;
  nrows = 128;
  ncols = 128;
  f = main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda_lambda$$lambda$();
  nelts = zern1[chkSize$accessorSymbol](128, 128);
  tmp = [];
  arr1 = tmp;
  i = 0;
  n = nelts;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp1;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal = arr1;
        break inlinedLbl
      }
      arr1[i] = x;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  arr = inlinedVal;
  id = 1;
  param1 = nrows;
  param2 = ncols;
  param3 = f;
  param4 = inlinedVal;
  param5 = 0;
  param6 = 0;
  param7 = 0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      switch (id) {
        case 0:
          {
            let scrut;
            scrut = param5 < param1;
            if (scrut === true) {
              param6 = 0;
              id = 1;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        case 1:
          {
            let scrut, tmp1, tmp2, tmp3, tmp4;
            scrut = param6 < param2;
            if (scrut === true) {
              tmp1 = runtime.safeCall(param3(param5, param6));
              param4[param7] = tmp1;
              tmp2 = param6 + 1;
              tmp3 = param7 + 1;
              param6 = tmp2;
              param7 = tmp3;
              id = 1;
              continue loopLabel1
            }
            tmp4 = param5 + 1;
            param5 = tmp4;
            param6 = 0;
            id = 0;
            continue loopLabel1;
          }
      }
    }
  }
  return zern1.Arr2(arr, undefined, undefined, undefined)
};
main_main_ztest_lambda$$lambda$$main_ztest_lambda$$lambda$ = function main_main_ztest_lambda$$lambda$$main_ztest_lambda$$lambda$() {
  return () => {
    return main_main_ztest_lambda$$lambda$_main_ztest_lambda$_lambda$lambda$main_ztest_lambda$_lambda$lambda()
  }
};
main_unop_lambda$_lambda$lambda = function main_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_unop_lambda$$lambda$ = function main_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
main_mpadd_binop_lambda$_lambda$lambda = function main_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
main_mpadd_binop_lambda$$lambda$ = function main_mpadd_binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return main_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
main_mpadd_binop$binop = function main_mpadd_binop$binop(d, s1, s2, f) {
  let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
  if (d instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = d.data_;
    arg$Arr2$3$ = d.nelts;
    if (s1 instanceof zern1.Arr2.class) {
      arg$Arr2$0$1 = s1.data_;
      if (s2 instanceof zern1.Arr2.class) {
        arg$Arr2$0$2 = s2.data_;
        lambda$here = main_mpadd_binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
        return zern1[dotimes$accessorSymbol](arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_mpadd$mpadd = function main_mpadd$mpadd(dst) {
  return (sf, src) => {
    let lambda$here;
    lambda$here = lambda$1(sf);
    return main_mpadd_binop$binop(dst, dst, src, lambda$here)
  }
};
main_unop_lambda$_lambda$lambda1 = function main_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_unop_lambda$$lambda$1 = function main_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_unop_lambda$_lambda$lambda1(f, dst, src, ix)
  }
};
main_unop_lambda$_lambda$lambda2 = function main_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_unop_lambda$$lambda$2 = function main_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_unop_lambda$_lambda$lambda2(f, dst, src, ix)
  }
};
lambda$1 = (undefined, function (sf) {
  return (vdst, vsrc) => {
    let tmp;
    tmp = sf * vsrc;
    return vdst + tmp
  }
});
lambda$ = (undefined, function (sf) {
  return (vsrc) => {
    return sf * vsrc
  }
});
(class zern {
  static {
    zern1 = this
  }
  static get [dotimes$accessorSymbol]() { return zern.#dotimes; }
  static get [chkSize$accessorSymbol]() { return zern.#chkSize; }
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
  static main() {
    let inlinedVal, inlinedVal1, inlinedVal2, nelts, nelts1, nelts2, l, inlinedVal3, l1, f, arg$Cons$0$, arg$Cons$0$1, arg$Cons$1$, arg$Cons$1$1, lambda$here, lambda$here1, lambda$here2, tmp, tmp1, tmp2, arr, i, n, x, inlinedVal4, arr1, i1, n1, x1, inlinedVal5, arr2, i2, n2, x2, inlinedVal6, zern2, f1, n3, l2, inlinedVal7, zern3, f2, n4, l3, inlinedVal8;
    nelts = zern1.#chkSize(128, 128);
    tmp2 = [];
    arr = tmp2;
    i = 0;
    n = nelts;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp3;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp3 = i + 1;
        i = tmp3;
        continue loopLabel;
      }
    }
    lambda$here2 = main_lambda$$lambda$(0.0, inlinedVal4);
    zern1.#dotimes(nelts)(lambda$here2);
    inlinedVal = zern1.Arr2(inlinedVal4, undefined, undefined, nelts);
    nelts1 = zern1.#chkSize(128, 128);
    tmp1 = [];
    arr1 = tmp1;
    i1 = 0;
    n1 = nelts1;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut, tmp3;
        scrut = i1 == n1;
        if (scrut === true) {
          inlinedVal5 = arr1;
          break inlinedLbl1
        }
        arr1[i1] = x1;
        tmp3 = i1 + 1;
        i1 = tmp3;
        continue loopLabel1;
      }
    }
    lambda$here1 = main_lambda$$lambda$1(0.0, inlinedVal5);
    zern1.#dotimes(nelts1)(lambda$here1);
    inlinedVal1 = zern1.Arr2(inlinedVal5, 128, 128, nelts1);
    nelts2 = zern1.#chkSize(128, 128);
    tmp = [];
    arr2 = tmp;
    i2 = 0;
    n2 = nelts2;
    x2 = 0.0;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut, tmp3;
        scrut = i2 == n2;
        if (scrut === true) {
          inlinedVal6 = arr2;
          break inlinedLbl2
        }
        arr2[i2] = x2;
        tmp3 = i2 + 1;
        i2 = tmp3;
        continue loopLabel2;
      }
    }
    lambda$here = main_lambda$$lambda$2(0.0, inlinedVal6);
    zern1.#dotimes(nelts2)(lambda$here);
    inlinedVal2 = zern1.Arr2(inlinedVal6, undefined, undefined, nelts2);
    l = zern1.Nil;
    zern2 = zern1;
    f1 = main_lambda$$lambda$3();
    n3 = 15;
    l2 = l;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut, tmp3, tmp4, tmp5;
        scrut = n3 == 0;
        if (scrut === true) {
          inlinedVal7 = l2;
          break inlinedLbl3
        }
        tmp3 = n3 - 1;
        tmp4 = runtime.safeCall(f1(n3));
        tmp5 = zern2.Cons(tmp4, l2);
        n3 = tmp3;
        l2 = tmp5;
        continue loopLabel3;
      }
    }
    inlinedVal3 = inlinedVal7;
    l1 = zern1.Nil;
    zern3 = zern1;
    f2 = main_main_ztest_lambda$$lambda$$main_ztest_lambda$$lambda$();
    n4 = 15;
    l3 = l1;
    inlinedLbl4: {
      loopLabel4: while (true) {
        let scrut, tmp3, tmp4, tmp5;
        scrut = n4 == 0;
        if (scrut === true) {
          inlinedVal8 = l3;
          break inlinedLbl4
        }
        tmp3 = n4 - 1;
        tmp4 = runtime.safeCall(f2());
        tmp5 = zern3.Cons(tmp4, l3);
        n4 = tmp3;
        l3 = tmp5;
        continue loopLabel4;
      }
    }
    if (inlinedVal3 instanceof zern1.Cons.class) {
      arg$Cons$0$ = inlinedVal3.head;
      if (inlinedVal8 instanceof zern1.Cons.class) {
        let f3, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here3;
        arg$Cons$0$1 = inlinedVal8.head;
        f3 = lambda$(arg$Cons$0$);
        if (inlinedVal instanceof zern1.Arr2.class) {
          arg$Arr2$0$ = inlinedVal.data_;
          arg$Arr2$3$ = inlinedVal.nelts;
          if (arg$Cons$0$1 instanceof zern1.Arr2.class) {
            arg$Arr2$0$1 = arg$Cons$0$1.data_;
            lambda$here3 = main_unop_lambda$$lambda$(f3, arg$Arr2$0$, arg$Arr2$0$1);
            zern1.#dotimes(arg$Arr2$3$)(lambda$here3);
            if (inlinedVal3 instanceof zern1.Cons.class) {
              arg$Cons$1$ = inlinedVal3.tail;
              if (inlinedVal8 instanceof zern1.Cons.class) {
                let arg$Arr2$0$2, tmp3, f4, f5, arg$Arr2$0$3, arg$Arr2$3$1, arg$Arr2$0$4, lambda$here4, arg$Arr2$0$5, arg$Arr2$3$2, arg$Arr2$0$6, lambda$here5;
                arg$Cons$1$1 = inlinedVal8.tail;
                f = main_mpadd$mpadd(inlinedVal);
                zern1.#listPairApp$tailrec(f, arg$Cons$1$, arg$Cons$1$1);
                f4 = zern1.#cos;
                if (inlinedVal1 instanceof zern1.Arr2.class) {
                  arg$Arr2$0$5 = inlinedVal1.data_;
                  arg$Arr2$3$2 = inlinedVal1.nelts;
                  if (inlinedVal instanceof zern1.Arr2.class) {
                    arg$Arr2$0$6 = inlinedVal.data_;
                    lambda$here5 = main_unop_lambda$$lambda$1(f4, arg$Arr2$0$5, arg$Arr2$0$6);
                    zern1.#dotimes(arg$Arr2$3$2)(lambda$here5);
                    f5 = zern1.#sin;
                    if (inlinedVal2 instanceof zern1.Arr2.class) {
                      arg$Arr2$0$3 = inlinedVal2.data_;
                      arg$Arr2$3$1 = inlinedVal2.nelts;
                      if (inlinedVal instanceof zern1.Arr2.class) {
                        arg$Arr2$0$4 = inlinedVal.data_;
                        lambda$here4 = main_unop_lambda$$lambda$2(f5, arg$Arr2$0$3, arg$Arr2$0$4);
                        zern1.#dotimes(arg$Arr2$3$1)(lambda$here4);
                        if (inlinedVal1 instanceof zern1.Arr2.class) {
                          arg$Arr2$0$2 = inlinedVal1.data_;
                          tmp3 = zern1.#index(inlinedVal1, 0, 1);
                          return arg$Arr2$0$2.at(tmp3)
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "zern"];
});
export default zern1;
