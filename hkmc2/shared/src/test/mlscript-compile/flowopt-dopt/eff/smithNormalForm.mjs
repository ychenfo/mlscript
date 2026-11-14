const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let smithNormalForm1, lambda, lambda1, lambda2, lambda3, lambda4, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, main_snf_f$f, snf_f$f;
main_snf_f$f = function main_snf_f$f(x, y) {
  let fv_scrut, fv_tmp;
  fv_scrut = x == 0;
  if (fv_scrut === true) {
    let fv_scrut1, fv_tmp1;
    fv_scrut1 = y == 0;
    if (fv_scrut1 === true) {
      return 2
    }
    {
      let fv_scrut2, fv_tmp2;
      fv_tmp1 = y - 1;
      fv_scrut2 = fv_tmp1 == 0;
      if (fv_scrut2 === true) {
        return 4
      }
      {
        let fv_scrut3;
        fv_tmp2 = fv_tmp1 - 1;
        fv_scrut3 = fv_tmp2 == 0;
        if (fv_scrut3 === true) {
          return 4
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  {
    let fv_scrut1, fv_tmp1;
    fv_tmp = x - 1;
    fv_scrut1 = fv_tmp == 0;
    if (fv_scrut1 === true) {
      let fv_scrut2, fv_tmp2;
      fv_scrut2 = y == 0;
      if (fv_scrut2 === true) {
        return -6
      }
      {
        let fv_scrut3, fv_tmp3;
        fv_tmp2 = y - 1;
        fv_scrut3 = fv_tmp2 == 0;
        if (fv_scrut3 === true) {
          return 6
        }
        {
          let fv_scrut4;
          fv_tmp3 = fv_tmp2 - 1;
          fv_scrut4 = fv_tmp3 == 0;
          if (fv_scrut4 === true) {
            return 12
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
    {
      let fv_scrut2;
      fv_tmp1 = fv_tmp - 1;
      fv_scrut2 = fv_tmp1 == 0;
      if (fv_scrut2 === true) {
        let fv_scrut3, fv_tmp2;
        fv_scrut3 = y == 0;
        if (fv_scrut3 === true) {
          return 10
        }
        {
          let fv_scrut4, fv_tmp3;
          fv_tmp2 = y - 1;
          fv_scrut4 = fv_tmp2 == 0;
          if (fv_scrut4 === true) {
            return -4
          }
          {
            let fv_scrut5;
            fv_tmp3 = fv_tmp2 - 1;
            fv_scrut5 = fv_tmp3 == 0;
            if (fv_scrut5 === true) {
              return -16
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
snf_f$f = function snf_f$f(x, y) {
  let fv_scrut, fv_tmp;
  fv_scrut = x == 0;
  if (fv_scrut === true) {
    let fv_scrut1, fv_tmp1;
    fv_scrut1 = y == 0;
    if (fv_scrut1 === true) {
      return 2
    }
    {
      let fv_scrut2, fv_tmp2;
      fv_tmp1 = y - 1;
      fv_scrut2 = fv_tmp1 == 0;
      if (fv_scrut2 === true) {
        return 4
      }
      {
        let fv_scrut3;
        fv_tmp2 = fv_tmp1 - 1;
        fv_scrut3 = fv_tmp2 == 0;
        if (fv_scrut3 === true) {
          return 4
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  {
    let fv_scrut1, fv_tmp1;
    fv_tmp = x - 1;
    fv_scrut1 = fv_tmp == 0;
    if (fv_scrut1 === true) {
      let fv_scrut2, fv_tmp2;
      fv_scrut2 = y == 0;
      if (fv_scrut2 === true) {
        return -6
      }
      {
        let fv_scrut3, fv_tmp3;
        fv_tmp2 = y - 1;
        fv_scrut3 = fv_tmp2 == 0;
        if (fv_scrut3 === true) {
          return 6
        }
        {
          let fv_scrut4;
          fv_tmp3 = fv_tmp2 - 1;
          fv_scrut4 = fv_tmp3 == 0;
          if (fv_scrut4 === true) {
            return 12
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
    {
      let fv_scrut2;
      fv_tmp1 = fv_tmp - 1;
      fv_scrut2 = fv_tmp1 == 0;
      if (fv_scrut2 === true) {
        let fv_scrut3, fv_tmp2;
        fv_scrut3 = y == 0;
        if (fv_scrut3 === true) {
          return 10
        }
        {
          let fv_scrut4, fv_tmp3;
          fv_tmp2 = y - 1;
          fv_scrut4 = fv_tmp2 == 0;
          if (fv_scrut4 === true) {
            return -4
          }
          {
            let fv_scrut5;
            fv_tmp3 = fv_tmp2 - 1;
            fv_scrut5 = fv_tmp3 == 0;
            if (fv_scrut5 === true) {
              return -16
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
lambda$6 = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
});
lambda$7 = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
});
lambda$5 = (undefined, function (mat) {
  return (i) => {
    return mat.at(i)
  }
});
lambda$4 = (undefined, function (col, mat, height, width) {
  return (row, entry) => {
    return lambda4(col, mat, height, width, row, entry)
  }
});
lambda4 = (undefined, function (col, mat, height, width, row, entry) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = 0 <= row;
  if (tmp === true) {
    tmp1 = row < height;
    if (tmp1 === true) {
      tmp2 = width * row;
      tmp3 = col + tmp2;
      mat[tmp3] = entry;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (mat, width, offset) {
  return (col, entry) => {
    return lambda3(mat, width, offset, col, entry)
  }
});
lambda3 = (undefined, function (mat, width, offset, col, entry) {
  let tmp, tmp1, tmp2;
  tmp = 0 <= col;
  if (tmp === true) {
    tmp1 = col < width;
    if (tmp1 === true) {
      tmp2 = col + offset;
      mat[tmp2] = entry;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (col, mat, height, width) {
  return (row) => {
    return lambda2(col, mat, height, width, row)
  }
});
lambda2 = (undefined, function (col, mat, height, width, row) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = 0 <= row;
  if (tmp === true) {
    tmp1 = row < height;
    if (tmp1 === true) {
      tmp2 = width * row;
      tmp3 = col + tmp2;
      return mat.at(tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (mat, width, offset) {
  return (col) => {
    return lambda1(mat, width, offset, col)
  }
});
lambda1 = (undefined, function (mat, width, offset, col) {
  let tmp, tmp1, tmp2;
  tmp = 0 <= col;
  if (tmp === true) {
    tmp1 = col < width;
    if (tmp1 === true) {
      tmp2 = col + offset;
      return mat.at(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$ = (undefined, function (width, generator) {
  return (z) => {
    return lambda(width, generator, z)
  }
});
lambda = (undefined, function (width, generator, z) {
  let inlinedVal, tmp, tmp1, inlinedVal1, tmp2, inlinedVal2;
  tmp1 = z / width;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp2 = z / width;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp = width * inlinedVal2;
  inlinedVal = z - tmp;
  return runtime.safeCall(generator(inlinedVal1, inlinedVal))
});
(class smithNormalForm {
  static {
    smithNormalForm1 = this
  }
  static {
    smithNormalForm.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        smithNormalForm.Cons.class = this
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
        smithNormalForm.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return smithNormalForm.#floor(tmp)
  }
  static #intMod(a, b) {
    smithNormalForm.#intDiv(a, b);
    return runtime.Unit
  }
  static #listNth(l, n) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof smithNormalForm.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        scrut = n == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = n - 1;
        l = arg$Cons$1$;
        n = tmp;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #array_alloc(n, init) {
    let tmp;
    tmp = [];
    return smithNormalForm.#fillArray(tmp, 0, n, init)
  }
  static #arrayLength(a) {
    return a.length
  }
  static #arraySub(a, i) {
    return a.at(i)
  }
  static #arrayUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #arrayTabulate(n, f) {
    let scrut, arr, tmp;
    scrut = n > 0;
    if (scrut === true) {
      let n1, f1, arr1, i;
      tmp = runtime.safeCall(f(0));
      arr = smithNormalForm.#array_alloc(n, tmp);
      n1 = n;
      f1 = f;
      arr1 = arr;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp1, tmp2;
          scrut1 = i < n1;
          if (scrut1 === true) {
            tmp1 = runtime.safeCall(f1(i));
            arr1[i] = tmp1;
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      return arr
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intMin(x, y) {
    let scrut;
    scrut = x < y;
    if (scrut === true) {
      return x
    }
    return y;
  }
  static #intInfAbs(x) {
    let scrut;
    scrut = x < 0;
    if (scrut === true) {
      return - x
    }
    return x;
  }
  static #matrixMake(height, width, generator) {
    let tmp, tmp1, tmp2, tmp3, lambda$here;
    tmp = height >= 0;
    if (tmp === true) {
      tmp1 = width >= 0;
      if (tmp1 === true) {
        tmp2 = height * width;
        lambda$here = lambda$(width, generator);
        tmp3 = smithNormalForm.#arrayTabulate(tmp2, lambda$here);
        return globalThis.Object.freeze([
          height,
          width,
          tmp3
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixHeight(m) {
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      return runtime.Tuple.get(m, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixWidth(m) {
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      return runtime.Tuple.get(m, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixFetch(m, row, col) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= col;
          if (tmp2 === true) {
            tmp3 = col < element1$;
            if (tmp3 === true) {
              tmp4 = element1$ * row;
              tmp5 = col + tmp4;
              return smithNormalForm.#arraySub(element2$, tmp5)
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
  static #matrixFetchRow(m, row) {
    let offset, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          offset = element1$ * row;
          return lambda$1(element2$, element1$, offset)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixFetchCol(m, col) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= col;
      if (tmp === true) {
        tmp1 = col < element1$;
        if (tmp1 === true) {
          return lambda$2(col, element2$, element0$, element1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixStoreRow(m, row) {
    let offset, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= row;
      if (tmp === true) {
        tmp1 = row < element0$;
        if (tmp1 === true) {
          offset = element1$ * row;
          return lambda$3(element2$, element1$, offset)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrixStoreCol(m, col) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = 0 <= col;
      if (tmp === true) {
        tmp1 = col < element1$;
        if (tmp1 === true) {
          return lambda$4(col, element2$, element0$, element1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #swapLoop(from1, to1, from2, to2, limit) {
    let from11, to11, from21, to21, limit1, i, inlinedVal;
    from11 = from1;
    to11 = to1;
    from21 = from2;
    to21 = to2;
    limit1 = limit;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp, tmp1, tmp2;
        scrut = i == limit1;
        if (scrut === true) {
          inlinedVal = runtime.Unit;
          break inlinedLbl
        }
        tmp = runtime.safeCall(from11(i));
        tmp1 = runtime.safeCall(from21(i));
        runtime.safeCall(to11(i, tmp1));
        runtime.safeCall(to21(i, tmp));
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  static #matrixRowSwap(m, row1, row2) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      tmp = 0 <= row1;
      if (tmp === true) {
        tmp1 = row1 < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= row2;
          if (tmp2 === true) {
            tmp3 = row2 < element0$;
            if (tmp3 === true) {
              scrut = row1 == row2;
              if (scrut === true) {
                return runtime.Unit
              }
              tmp4 = smithNormalForm.#matrixFetchRow(m, row1);
              tmp5 = smithNormalForm.#matrixStoreRow(m, row1);
              tmp6 = smithNormalForm.#matrixFetchRow(m, row2);
              tmp7 = smithNormalForm.#matrixStoreRow(m, row2);
              return smithNormalForm.#swapLoop(tmp4, tmp5, tmp6, tmp7, element1$);
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
  static #matrixColSwap(m, col1, col2) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      tmp = 0 <= col1;
      if (tmp === true) {
        tmp1 = col1 < element1$;
        if (tmp1 === true) {
          tmp2 = 0 <= col2;
          if (tmp2 === true) {
            tmp3 = col2 < element1$;
            if (tmp3 === true) {
              scrut = col1 == col2;
              if (scrut === true) {
                return runtime.Unit
              }
              tmp4 = smithNormalForm.#matrixFetchCol(m, col1);
              tmp5 = smithNormalForm.#matrixStoreCol(m, col1);
              tmp6 = smithNormalForm.#matrixFetchCol(m, col2);
              tmp7 = smithNormalForm.#matrixStoreCol(m, col2);
              return smithNormalForm.#swapLoop(tmp4, tmp5, tmp6, tmp7, element0$);
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
  static #opLoop(from1, from2, to2, limit, f) {
    let from11, from21, to21, limit1, f1, i, inlinedVal;
    from11 = from1;
    from21 = from2;
    to21 = to2;
    limit1 = limit;
    f1 = f;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp, tmp1, tmp2, tmp3;
        scrut = i == limit1;
        if (scrut === true) {
          inlinedVal = runtime.Unit;
          break inlinedLbl
        }
        tmp = runtime.safeCall(from11(i));
        tmp1 = runtime.safeCall(from21(i));
        tmp2 = runtime.safeCall(f1(tmp, tmp1));
        runtime.safeCall(to21(i, tmp2));
        tmp3 = i + 1;
        i = tmp3;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  static #matrixRowOp(m, row1, row2, f) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      tmp = 0 <= row1;
      if (tmp === true) {
        tmp1 = row1 < element0$;
        if (tmp1 === true) {
          tmp2 = 0 <= row2;
          if (tmp2 === true) {
            tmp3 = row2 < element0$;
            if (tmp3 === true) {
              tmp4 = row1 != row2;
              if (tmp4 === true) {
                tmp5 = smithNormalForm.#matrixFetchRow(m, row1);
                tmp6 = smithNormalForm.#matrixFetchRow(m, row2);
                tmp7 = smithNormalForm.#matrixStoreRow(m, row2);
                return smithNormalForm.#opLoop(tmp5, tmp6, tmp7, element1$, f)
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
  static #matrixColOp(m, col1, col2, f) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      tmp = 0 <= col1;
      if (tmp === true) {
        tmp1 = col1 < element1$;
        if (tmp1 === true) {
          tmp2 = 0 <= col2;
          if (tmp2 === true) {
            tmp3 = col2 < element1$;
            if (tmp3 === true) {
              tmp4 = col1 != col2;
              if (tmp4 === true) {
                tmp5 = smithNormalForm.#matrixFetchCol(m, col1);
                tmp6 = smithNormalForm.#matrixFetchCol(m, col2);
                tmp7 = smithNormalForm.#matrixStoreCol(m, col2);
                return smithNormalForm.#opLoop(tmp5, tmp6, tmp7, element0$, f)
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
  static #matrixCopy(m) {
    let element2$, element1$, element0$, tmp, tmp1, lambda$here;
    if (runtime.Tuple.isArrayLike(m) && m.length === 3) {
      element0$ = runtime.Tuple.get(m, 0);
      element1$ = runtime.Tuple.get(m, 1);
      element2$ = runtime.Tuple.get(m, 2);
      tmp = smithNormalForm.#arrayLength(element2$);
      lambda$here = lambda$5(element2$);
      tmp1 = smithNormalForm.#arrayTabulate(tmp, lambda$here);
      return globalThis.Object.freeze([
        element0$,
        element1$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #print_(s) {
    return runtime.Unit
  }
  static #smaller(a, b) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = a != 0;
    if (tmp === true) {
      tmp1 = b == 0;
      if (tmp1 === false) {
        tmp2 = smithNormalForm.#intInfAbs(a);
        tmp3 = smithNormalForm.#intInfAbs(b);
        return tmp2 < tmp3
      }
      return true;
    }
    return false;
  }
  static #smithNormalForm(mat0) {
    let height, width, mat, range, smithNormalForm2, height1, width1, mat1, range1, pos, inlinedVal;
    height = smithNormalForm.#matrixHeight(mat0);
    width = smithNormalForm.#matrixWidth(mat0);
    mat = smithNormalForm.#matrixCopy(mat0);
    range = smithNormalForm.#intMin(width, height);
    smithNormalForm2 = smithNormalForm;
    height1 = height;
    width1 = width;
    mat1 = mat;
    range1 = range;
    pos = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = pos == range1;
        if (scrut === true) {
          inlinedVal = mat1;
          break inlinedLbl
        }
        {
          let matCol, matRow, id, param0, param1, param2, param3, param4, param5, param6, param7;
          matCol = smithNormalForm2.#matrixFetchCol(mat1, pos);
          matRow = smithNormalForm2.#matrixFetchRow(mat1, pos);
          id = 2;
          param0 = smithNormalForm2;
          param1 = height1;
          param2 = width1;
          param3 = mat1;
          param4 = pos;
          param5 = matCol;
          param6 = matRow;
          param7 = undefined;
          inlinedLbl1: {
            loopLabel1: while (true) {
              switch (id) {
                case 0:
                  {
                    let scrut1, scrut2, x, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$here;
                    scrut1 = param7 < param1;
                    if (scrut1 === true) {
                      tmp1 = runtime.safeCall(param5(param7));
                      scrut2 = tmp1 == 0;
                      if (scrut2 === true) {
                        tmp2 = param7 + 1;
                        param7 = tmp2;
                        id = 0;
                        continue loopLabel1
                      }
                      {
                        let tmp8, inlinedVal1;
                        tmp3 = runtime.safeCall(param5(param7));
                        tmp4 = runtime.safeCall(param5(param4));
                        tmp8 = tmp3 / tmp4;
                        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp8));
                        x = - inlinedVal1;
                        lambda$here = lambda$6(x);
                        param0.#matrixRowOp(param3, param4, param7, lambda$here);
                        tmp5 = runtime.safeCall(param5(param7));
                        scrut3 = tmp5 == 0;
                        if (scrut3 === true) {
                          tmp6 = param7 + 1;
                          param7 = tmp6;
                          id = 0;
                          continue loopLabel1
                        }
                        id = 2;
                        continue loopLabel1;
                      }
                    }
                    tmp7 = param4 + 1;
                    param7 = tmp7;
                    id = 1;
                    continue loopLabel1;
                  }
                case 1:
                  {
                    let scrut1, scrut2, x, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here;
                    scrut1 = param7 < param2;
                    if (scrut1 === true) {
                      tmp1 = runtime.safeCall(param6(param7));
                      scrut2 = tmp1 == 0;
                      if (scrut2 === true) {
                        tmp2 = param7 + 1;
                        param7 = tmp2;
                        id = 1;
                        continue loopLabel1
                      }
                      {
                        let tmp7, inlinedVal1;
                        tmp3 = runtime.safeCall(param6(param7));
                        tmp4 = runtime.safeCall(param6(param4));
                        tmp7 = tmp3 / tmp4;
                        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp7));
                        x = - inlinedVal1;
                        lambda$here = lambda$7(x);
                        param0.#matrixColOp(param3, param4, param7, lambda$here);
                        tmp5 = runtime.safeCall(param6(param7));
                        scrut3 = tmp5 == 0;
                        if (scrut3 === true) {
                          tmp6 = param7 + 1;
                          param7 = tmp6;
                          id = 1;
                          continue loopLabel1
                        }
                        id = 2;
                        continue loopLabel1;
                      }
                    }
                    break inlinedLbl1;
                  }
                case 2:
                  {
                    let tmp1, id1, param01, param11, param21, param31, param41, param51, param61, param71, param8, param9, param10;
                    id1 = 0;
                    param01 = param0;
                    param11 = param1;
                    param21 = param2;
                    param31 = param3;
                    param41 = param4;
                    param51 = 0;
                    param61 = param4;
                    param71 = param4;
                    param8 = param4;
                    param9 = undefined;
                    param10 = undefined;
                    inlinedLbl2: {
                      loopLabel2: while (true) {
                        switch (id1) {
                          case 0:
                            {
                              let scrut1, matRow1;
                              scrut1 = param8 >= param11;
                              if (scrut1 === true) {
                                param01.#matrixRowSwap(param31, param41, param61);
                                param01.#matrixColSwap(param31, param41, param71);
                                break inlinedLbl2
                              }
                              {
                                let param7_tmp, param6_tmp, param5_tmp;
                                matRow1 = param01.#matrixFetchRow(param31, param8);
                                param7_tmp = param71;
                                param6_tmp = param61;
                                param5_tmp = param51;
                                param51 = param8;
                                param61 = matRow1;
                                param71 = param5_tmp;
                                param8 = param6_tmp;
                                param9 = param7_tmp;
                                param10 = param41;
                                id1 = 1;
                                continue loopLabel2;
                              }
                            }
                          case 1:
                            {
                              let scrut1, next, scrut2, tmp2, tmp3, tmp4;
                              scrut1 = param10 >= param21;
                              if (scrut1 === true) {
                                tmp2 = param51 + 1;
                                param51 = param71;
                                param61 = param8;
                                param71 = param9;
                                param8 = tmp2;
                                id1 = 0;
                                continue loopLabel2
                              }
                              next = runtime.safeCall(param61(param10));
                              scrut2 = param01.#smaller(next, param71);
                              if (scrut2 === true) {
                                tmp3 = param10 + 1;
                                param71 = next;
                                param8 = param51;
                                param9 = param10;
                                param10 = tmp3;
                                id1 = 1;
                                continue loopLabel2
                              }
                              tmp4 = param10 + 1;
                              param10 = tmp4;
                              id1 = 1;
                              continue loopLabel2;
                            }
                        }
                      }
                    }
                    tmp1 = param4 + 1;
                    param7 = tmp1;
                    id = 0;
                    continue loopLabel1;
                  }
              }
            }
          }
          tmp = pos + 1;
          pos = tmp;
          continue loopLabel;
        }
      }
    }
    return inlinedVal
  }
  static #table() {
    return runtime.Unit
  }
  static #f(x, y) {
    let fv_scrut, fv_tmp;
    fv_scrut = x == 0;
    if (fv_scrut === true) {
      let fv_scrut1, fv_tmp1;
      fv_scrut1 = y == 0;
      if (fv_scrut1 === true) {
        return 2
      }
      {
        let fv_scrut2, fv_tmp2;
        fv_tmp1 = y - 1;
        fv_scrut2 = fv_tmp1 == 0;
        if (fv_scrut2 === true) {
          return 4
        }
        {
          let fv_scrut3;
          fv_tmp2 = fv_tmp1 - 1;
          fv_scrut3 = fv_tmp2 == 0;
          if (fv_scrut3 === true) {
            return 4
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
    {
      let fv_scrut1, fv_tmp1;
      fv_tmp = x - 1;
      fv_scrut1 = fv_tmp == 0;
      if (fv_scrut1 === true) {
        let fv_scrut2, fv_tmp2;
        fv_scrut2 = y == 0;
        if (fv_scrut2 === true) {
          return -6
        }
        {
          let fv_scrut3, fv_tmp3;
          fv_tmp2 = y - 1;
          fv_scrut3 = fv_tmp2 == 0;
          if (fv_scrut3 === true) {
            return 6
          }
          {
            let fv_scrut4;
            fv_tmp3 = fv_tmp2 - 1;
            fv_scrut4 = fv_tmp3 == 0;
            if (fv_scrut4 === true) {
              return 12
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      {
        let fv_scrut2;
        fv_tmp1 = fv_tmp - 1;
        fv_scrut2 = fv_tmp1 == 0;
        if (fv_scrut2 === true) {
          let fv_scrut3, fv_tmp2;
          fv_scrut3 = y == 0;
          if (fv_scrut3 === true) {
            return 10
          }
          {
            let fv_scrut4, fv_tmp3;
            fv_tmp2 = y - 1;
            fv_scrut4 = fv_tmp2 == 0;
            if (fv_scrut4 === true) {
              return -4
            }
            {
              let fv_scrut5;
              fv_tmp3 = fv_tmp2 - 1;
              fv_scrut5 = fv_tmp3 == 0;
              if (fv_scrut5 === true) {
                return -16
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #snf() {
    let big, tmp;
    big = smithNormalForm.#matrixMake(3, 3, snf_f$f);
    tmp = smithNormalForm.#smithNormalForm(big);
    return smithNormalForm.#matrixFetch(tmp, 2, 2)
  }
  static main() {
    let big, tmp;
    big = smithNormalForm1.#matrixMake(3, 3, main_snf_f$f);
    tmp = smithNormalForm1.#smithNormalForm(big);
    return smithNormalForm1.#matrixFetch(tmp, 2, 2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "smithNormalForm"];
});
export { smithNormalForm1 as _$_modulePrivate_$_smithNormalForm };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { main_snf_f$f as _$_modulePrivate_$_main_snf_f$f };
export { snf_f$f as _$_modulePrivate_$_snf_f$f };
export default smithNormalForm1;
