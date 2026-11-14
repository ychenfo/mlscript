const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const sin$accessorSymbol = globalThis.Symbol("sin");
const cos$accessorSymbol = globalThis.Symbol("cos");
const dotimes$accessorSymbol = globalThis.Symbol("dotimes");
const index$accessorSymbol = globalThis.Symbol("index");
const chkSize$accessorSymbol = globalThis.Symbol("chkSize");
const tabulateRM$accessorSymbol = globalThis.Symbol("tabulateRM");
const unop$accessorSymbol = globalThis.Symbol("unop");
const mpadd$accessorSymbol = globalThis.Symbol("mpadd");
const listPairApp$tailrec$accessorSymbol = globalThis.Symbol("listPairApp$tailrec");
let iter, lp1, lp2, lp11, lp21, g, zern1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, main_ztest_zern_cisv$cisv, main_ztest_zern$zern, main_ztest$ztest, main_ztest_lambda$_lambda$lambda, main_ztest_lambda$$lambda$, main_ztest_lambda$_lambda_tabulate$tabulate, ztest_lambda$_lambda$lambda, ztest_lambda$$lambda$, ztest_lambda$_lambda_tabulate$tabulate, ztest_zern_cisv$cisv, ztest_zern$zern, lambda_tabulate$tabulate, lambda$_lambda$lambda, lambda$_lambda_tabulate$tabulate, main_ztest$scrut_tup2, main_ztest$scrut_rest, main_ztest_lambda$_lambda_tabulate$t_RowMajor, main_ztest_lambda$_lambda_tabulate$t_rest, ztest_lambda$_lambda_tabulate$t_RowMajor, ztest_lambda$_lambda_tabulate$t_rest, ztest$scrut_tup2, ztest$scrut_rest, lambda_tabulate$t_RowMajor, lambda_tabulate$t_rest, lambda$_lambda_tabulate$t_RowMajor, lambda$_lambda_tabulate$t_rest, lp1_lp2, lp1_lp21, g$tailrec, ztest$scrut_tup2$worker, main_ztest$scrut_tup2$worker;
lp1_lp2 = function lp1_lp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          return runtime.Unit;
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
};
lp1_lp21 = function lp1_lp2(id, param0, param1, param2, param3, param4, param5, param6, param7, param8) {
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
          return runtime.Unit;
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
};
g$tailrec = function g$tailrec(zern2, f, n, l) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2;
    scrut = n == 0;
    if (scrut === true) {
      return l
    }
    tmp = n - 1;
    tmp1 = runtime.safeCall(f(n));
    tmp2 = zern2.Cons(tmp1, l);
    n = tmp;
    l = tmp2;
    continue loopLabel;
  }
};
main_ztest_zern_cisv$cisv = function main_ztest_zern_cisv$cisv(a, rpart, ipart) {
  zern1[unop$accessorSymbol](rpart, a, zern1[cos$accessorSymbol]);
  zern1[unop$accessorSymbol](ipart, a, zern1[sin$accessorSymbol]);
  return main_ztest$scrut_tup2(rpart, ipart)
};
main_ztest_zern$zern = function main_ztest_zern$zern(dst, rpart, ipart, coefs, zerns) {
  let f, arg$Cons$1$, arg$Cons$1$1, lambda$here, arg$Cons$0$, arg$Cons$0$1;
  if (coefs instanceof zern1.Cons.class) {
    arg$Cons$0$1 = coefs.head;
    if (zerns instanceof zern1.Cons.class) {
      arg$Cons$0$ = zerns.head;
      lambda$here = lambda$3(arg$Cons$0$1);
      zern1[unop$accessorSymbol](dst, arg$Cons$0$, lambda$here);
      if (coefs instanceof zern1.Cons.class) {
        arg$Cons$1$1 = coefs.tail;
        if (zerns instanceof zern1.Cons.class) {
          arg$Cons$1$ = zerns.tail;
          f = zern1[mpadd$accessorSymbol](dst);
          zern1[listPairApp$tailrec$accessorSymbol](f, arg$Cons$1$1, arg$Cons$1$);
          zern1[unop$accessorSymbol](rpart, dst, zern1[cos$accessorSymbol]);
          zern1[unop$accessorSymbol](ipart, dst, zern1[sin$accessorSymbol]);
          return main_ztest$scrut_tup2(rpart, ipart)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_ztest$ztest = function main_ztest$ztest() {
  let scrut, inlinedVal, inlinedVal1, inlinedVal2, f, l, inlinedVal3, f1, l1, inlinedVal4, nelts, nelts1, nelts2, lambda$here, lambda$here1, lambda$here2, tmp, tmp1, tmp2, arr, i, n, x, inlinedVal5, arr1, i1, n1, x1, inlinedVal6, arr2, i2, n2, x2, inlinedVal7;
  nelts2 = zern1[chkSize$accessorSymbol](128, 128);
  tmp2 = [];
  arr = tmp2;
  i = 0;
  n = nelts2;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut1, tmp3;
      scrut1 = i == n;
      if (scrut1 === true) {
        inlinedVal5 = arr;
        break inlinedLbl
      }
      arr[i] = x;
      tmp3 = i + 1;
      i = tmp3;
      continue loopLabel;
    }
  }
  lambda$here2 = lambda$(zern1, 0.0, inlinedVal5);
  zern1[dotimes$accessorSymbol](nelts2)(lambda$here2);
  inlinedVal = zern1.Arr2(inlinedVal5, 128, 128, nelts2);
  nelts1 = zern1[chkSize$accessorSymbol](128, 128);
  tmp1 = [];
  arr1 = tmp1;
  i1 = 0;
  n1 = nelts1;
  x1 = 0.0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      let scrut1, tmp3;
      scrut1 = i1 == n1;
      if (scrut1 === true) {
        inlinedVal6 = arr1;
        break inlinedLbl1
      }
      arr1[i1] = x1;
      tmp3 = i1 + 1;
      i1 = tmp3;
      continue loopLabel1;
    }
  }
  lambda$here1 = lambda$(zern1, 0.0, inlinedVal6);
  zern1[dotimes$accessorSymbol](nelts1)(lambda$here1);
  inlinedVal1 = zern1.Arr2(inlinedVal6, 128, 128, nelts1);
  nelts = zern1[chkSize$accessorSymbol](128, 128);
  tmp = [];
  arr2 = tmp;
  i2 = 0;
  n2 = nelts;
  x2 = 0.0;
  inlinedLbl2: {
    loopLabel2: while (true) {
      let scrut1, tmp3;
      scrut1 = i2 == n2;
      if (scrut1 === true) {
        inlinedVal7 = arr2;
        break inlinedLbl2
      }
      arr2[i2] = x2;
      tmp3 = i2 + 1;
      i2 = tmp3;
      continue loopLabel2;
    }
  }
  lambda$here = lambda$(zern1, 0.0, inlinedVal7);
  zern1[dotimes$accessorSymbol](nelts)(lambda$here);
  inlinedVal2 = zern1.Arr2(inlinedVal7, 128, 128, nelts);
  f1 = lambda$6(zern1);
  l1 = zern1.Nil;
  inlinedVal4 = g$tailrec(zern1, f1, 15, l1);
  f = main_ztest_lambda$$lambda$(zern1);
  l = zern1.Nil;
  inlinedVal3 = g$tailrec(zern1, f, 15, l);
  scrut = main_ztest_zern$zern(inlinedVal, inlinedVal1, inlinedVal2, inlinedVal4, inlinedVal3);
  return scrut(undefined, undefined, undefined)
};
main_ztest_lambda$_lambda$lambda = function main_ztest_lambda$_lambda$lambda(zern2, x) {
  let lambda$here, inlinedVal;
  inlinedVal = zern1[tabulateRM$accessorSymbol];
  lambda$here = lambda$7(zern2);
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
};
main_ztest_lambda$$lambda$ = function main_ztest_lambda$$lambda$(zern2) {
  return (x) => {
    return main_ztest_lambda$_lambda$lambda(zern2, x)
  }
};
main_ztest_lambda$_lambda_tabulate$tabulate = function main_ztest_lambda$_lambda_tabulate$tabulate(t) {
  return t()
};
ztest_lambda$_lambda$lambda = function ztest_lambda$_lambda$lambda(zern2, x) {
  let lambda$here, inlinedVal;
  inlinedVal = zern1[tabulateRM$accessorSymbol];
  lambda$here = lambda$7(zern2);
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
};
ztest_lambda$$lambda$ = function ztest_lambda$$lambda$(zern2) {
  return (x) => {
    return ztest_lambda$_lambda$lambda(zern2, x)
  }
};
ztest_lambda$_lambda_tabulate$tabulate = function ztest_lambda$_lambda_tabulate$tabulate(t) {
  return t()
};
ztest_zern_cisv$cisv = function ztest_zern_cisv$cisv(a, rpart, ipart) {
  zern1[unop$accessorSymbol](rpart, a, zern1[cos$accessorSymbol]);
  zern1[unop$accessorSymbol](ipart, a, zern1[sin$accessorSymbol]);
  return ztest$scrut_tup2(rpart, ipart)
};
ztest_zern$zern = function ztest_zern$zern(dst, rpart, ipart, coefs, zerns) {
  let f, arg$Cons$1$, arg$Cons$1$1, lambda$here, arg$Cons$0$, arg$Cons$0$1;
  if (coefs instanceof zern1.Cons.class) {
    arg$Cons$0$1 = coefs.head;
    if (zerns instanceof zern1.Cons.class) {
      arg$Cons$0$ = zerns.head;
      lambda$here = lambda$3(arg$Cons$0$1);
      zern1[unop$accessorSymbol](dst, arg$Cons$0$, lambda$here);
      if (coefs instanceof zern1.Cons.class) {
        arg$Cons$1$1 = coefs.tail;
        if (zerns instanceof zern1.Cons.class) {
          arg$Cons$1$ = zerns.tail;
          f = zern1[mpadd$accessorSymbol](dst);
          zern1[listPairApp$tailrec$accessorSymbol](f, arg$Cons$1$1, arg$Cons$1$);
          zern1[unop$accessorSymbol](rpart, dst, zern1[cos$accessorSymbol]);
          zern1[unop$accessorSymbol](ipart, dst, zern1[sin$accessorSymbol]);
          return ztest$scrut_tup2(rpart, ipart)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_tabulate$tabulate = function lambda_tabulate$tabulate(t) {
  return t()
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(zern2, x) {
  let lambda$here, inlinedVal;
  inlinedVal = zern1[tabulateRM$accessorSymbol];
  lambda$here = lambda$7(zern2);
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
};
lambda$_lambda_tabulate$tabulate = function lambda$_lambda_tabulate$tabulate(t) {
  return t()
};
main_ztest$scrut_tup2 = function main_ztest$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_rpart1) => {
    return main_ztest$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_rpart1)
  }
};
main_ztest$scrut_tup2$worker = function main_ztest$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_rpart1) {
  let arg$Arr2$0$, tmp;
  if (tup2_0 instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = tup2_0.data_;
    tmp = zern1[index$accessorSymbol](tup2_0, 0, 1);
    return arg$Arr2$0$.at(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_ztest_lambda$_lambda_tabulate$t_RowMajor = function main_ztest_lambda$_lambda_tabulate$t_RowMajor() {
  return () => {
    return zern1[tabulateRM$accessorSymbol]
  }
};
ztest_lambda$_lambda_tabulate$t_RowMajor = function ztest_lambda$_lambda_tabulate$t_RowMajor() {
  return () => {
    return zern1[tabulateRM$accessorSymbol]
  }
};
ztest$scrut_tup2 = function ztest$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_rpart1) => {
    return ztest$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_rpart1)
  }
};
ztest$scrut_tup2$worker = function ztest$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_rpart1) {
  let arg$Arr2$0$, tmp;
  if (tup2_0 instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = tup2_0.data_;
    tmp = zern1[index$accessorSymbol](tup2_0, 0, 1);
    return arg$Arr2$0$.at(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_tabulate$t_RowMajor = function lambda_tabulate$t_RowMajor() {
  return () => {
    return zern1[tabulateRM$accessorSymbol]
  }
};
lambda$_lambda_tabulate$t_RowMajor = function lambda$_lambda_tabulate$t_RowMajor() {
  return () => {
    return zern1[tabulateRM$accessorSymbol]
  }
};
main_ztest$scrut_rest = function main_ztest$scrut_rest() {
  return null
};
main_ztest_lambda$_lambda_tabulate$t_rest = function main_ztest_lambda$_lambda_tabulate$t_rest() {
  return null
};
ztest_lambda$_lambda_tabulate$t_rest = function ztest_lambda$_lambda_tabulate$t_rest() {
  return null
};
ztest$scrut_rest = function ztest$scrut_rest() {
  return null
};
lambda_tabulate$t_rest = function lambda_tabulate$t_rest() {
  return null
};
lambda$_lambda_tabulate$t_rest = function lambda$_lambda_tabulate$t_rest() {
  return null
};
lambda$6 = (undefined, function (zern2) {
  return (x) => {
    return 1 + x
  }
});
lambda$7 = (undefined, function (zern2) {
  return (r, c) => {
    return lambda6(zern2, r, c)
  }
});
lambda6 = (undefined, function (zern2, r, c) {
  let tmp, tmp1;
  tmp = 128 * r;
  tmp1 = tmp + c;
  return 0.01 * tmp1
});
lambda$5 = (undefined, function (zern2) {
  return (x) => {
    return lambda$_lambda$lambda(zern2, x)
  }
});
lambda5 = (undefined, function (zern2, x) {
  return 1 + x
});
lambda7 = (undefined, function (zern2, x) {
  let lambda$here, inlinedVal;
  inlinedVal = zern1[tabulateRM$accessorSymbol];
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
lambda4 = (undefined, function (sf, vdst, vsrc) {
  let tmp;
  tmp = sf * vsrc;
  return vdst + tmp
});
lambda$3 = (undefined, function (sf) {
  return (vsrc) => {
    return sf * vsrc
  }
});
lambda3 = (undefined, function (sf, vsrc) {
  return sf * vsrc
});
g = function g(zern2, f, n) {
  return (l) => {
    return g$tailrec(zern2, f, n, l)
  }
};
lambda$2 = (undefined, function (zern2, f, dst, src) {
  return (ix) => {
    return lambda2(zern2, f, dst, src, ix)
  }
});
lambda2 = (undefined, function (zern2, f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
});
lambda$1 = (undefined, function (zern2, f, dst, src1, src2) {
  return (ix) => {
    return lambda1(zern2, f, dst, src1, src2, ix)
  }
});
lambda1 = (undefined, function (zern2, f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
});
lp11 = function lp1(zern2, nrows, ncols, f, arr, delta, i, j, k) {
  return lp1_lp21(0, zern2, nrows, ncols, f, arr, delta, i, j, k)
};
lp21 = function lp2(zern2, nrows, ncols, f, arr, delta, i, j, k) {
  return lp1_lp21(1, zern2, nrows, ncols, f, arr, delta, i, j, k)
};
lp1 = function lp1(zern2, nrows, ncols, f, arr, i, j, k) {
  return lp1_lp2(0, zern2, nrows, ncols, f, arr, i, j, k)
};
lp2 = function lp2(zern2, nrows, ncols, f, arr, i, j, k) {
  return lp1_lp2(1, zern2, nrows, ncols, f, arr, i, j, k)
};
lambda$ = (undefined, function (zern2, v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
});
lambda = (undefined, function (zern2, v, arr, ix) {
  arr[ix] = v;
  return runtime.Unit
});
iter = function iter(n, f, k) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = k >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    runtime.safeCall(f(k));
    tmp = k + 1;
    k = tmp;
    continue loopLabel;
  }
};
(class zern {
  static {
    zern1 = this
  }
  static get [listPairApp$tailrec$accessorSymbol]() { return zern.#listPairApp$tailrec; }
  static get [sin$accessorSymbol]() { return zern.#sin; }
  static get [cos$accessorSymbol]() { return zern.#cos; }
  static get [dotimes$accessorSymbol]() { return zern.#dotimes; }
  static get [index$accessorSymbol]() { return zern.#index; }
  static get [chkSize$accessorSymbol]() { return zern.#chkSize; }
  static get [tabulateRM$accessorSymbol]() { return zern.#tabulateRM; }
  static get [unop$accessorSymbol]() { return zern.#unop; }
  static get [mpadd$accessorSymbol]() { return zern.#mpadd; }
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
  static #real(i) {
    return i
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
  static #unsafeUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
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
    let nelts, arr;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    lp1_lp2(1, zern, nrows, ncols, f, arr, 0, 0, 0);
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #tabulateCM(nrows, ncols, f) {
    let nelts, arr, delta;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    delta = nelts - 1;
    lp1_lp21(1, zern, nrows, ncols, f, arr, delta, 0, 0, 0);
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #tabulate(t) {
    if (t instanceof zern.RowMajor.class) {
      return zern.#tabulateRM
    } else if (t instanceof zern.ColMajor.class) {
      return zern.#tabulateCM
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
      let l;
      l = zern.Nil;
      return g$tailrec(zern, f, n, l)
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
    let sum, rpart, ipart, coefs, zerns, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$here, lambda$here1;
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
    lambda$here1 = ztest_lambda$$lambda$(zern);
    zerns = zern.#collect(tmp7)(lambda$here1);
    scrut = ztest_zern$zern(sum, rpart, ipart, coefs, zerns);
    return scrut(undefined, undefined, undefined)
  }
  static main() {
    return main_ztest$ztest()
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "zern"];
});
export { iter as _$_modulePrivate_$_iter };
export { lp1 as _$_modulePrivate_$_lp1 };
export { lp2 as _$_modulePrivate_$_lp2 };
export { lp11 as _$_modulePrivate_$_lp11 };
export { lp21 as _$_modulePrivate_$_lp21 };
export { g as _$_modulePrivate_$_g };
export { zern1 as _$_modulePrivate_$_zern };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { main_ztest_zern_cisv$cisv as _$_modulePrivate_$_main_ztest_zern_cisv$cisv };
export { main_ztest_zern$zern as _$_modulePrivate_$_main_ztest_zern$zern };
export { main_ztest$ztest as _$_modulePrivate_$_main_ztest$ztest };
export { main_ztest_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_lambda$_lambda$lambda };
export { main_ztest_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_lambda$$lambda$ };
export { main_ztest_lambda$_lambda_tabulate$tabulate as _$_modulePrivate_$_main_ztest_lambda$_lambda_tabulate$tabulate };
export { ztest_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_lambda$_lambda$lambda };
export { ztest_lambda$$lambda$ as _$_modulePrivate_$_ztest_lambda$$lambda$ };
export { ztest_lambda$_lambda_tabulate$tabulate as _$_modulePrivate_$_ztest_lambda$_lambda_tabulate$tabulate };
export { ztest_zern_cisv$cisv as _$_modulePrivate_$_ztest_zern_cisv$cisv };
export { ztest_zern$zern as _$_modulePrivate_$_ztest_zern$zern };
export { lambda_tabulate$tabulate as _$_modulePrivate_$_lambda_tabulate$tabulate };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { lambda$_lambda_tabulate$tabulate as _$_modulePrivate_$_lambda$_lambda_tabulate$tabulate };
export { main_ztest$scrut_tup2 as _$_modulePrivate_$_main_ztest$scrut_tup2 };
export { main_ztest$scrut_rest as _$_modulePrivate_$_main_ztest$scrut_rest };
export { main_ztest_lambda$_lambda_tabulate$t_RowMajor as _$_modulePrivate_$_main_ztest_lambda$_lambda_tabulate$t_RowMajor };
export { main_ztest_lambda$_lambda_tabulate$t_rest as _$_modulePrivate_$_main_ztest_lambda$_lambda_tabulate$t_rest };
export { ztest_lambda$_lambda_tabulate$t_RowMajor as _$_modulePrivate_$_ztest_lambda$_lambda_tabulate$t_RowMajor };
export { ztest_lambda$_lambda_tabulate$t_rest as _$_modulePrivate_$_ztest_lambda$_lambda_tabulate$t_rest };
export { ztest$scrut_tup2 as _$_modulePrivate_$_ztest$scrut_tup2 };
export { ztest$scrut_rest as _$_modulePrivate_$_ztest$scrut_rest };
export { lambda_tabulate$t_RowMajor as _$_modulePrivate_$_lambda_tabulate$t_RowMajor };
export { lambda_tabulate$t_rest as _$_modulePrivate_$_lambda_tabulate$t_rest };
export { lambda$_lambda_tabulate$t_RowMajor as _$_modulePrivate_$_lambda$_lambda_tabulate$t_RowMajor };
export { lambda$_lambda_tabulate$t_rest as _$_modulePrivate_$_lambda$_lambda_tabulate$t_rest };
export { lp1_lp2 as _$_modulePrivate_$_lp1_lp2 };
export { lp1_lp21 as _$_modulePrivate_$_lp1_lp21 };
export { g$tailrec as _$_modulePrivate_$_g$tailrec };
export { ztest$scrut_tup2$worker as _$_modulePrivate_$_ztest$scrut_tup2$worker };
export { main_ztest$scrut_tup2$worker as _$_modulePrivate_$_main_ztest$scrut_tup2$worker };
export default zern1;
