const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let smithNormalForm1, lambda$, lambda$1, main_snf_smithNormalForm_matrixCopy_lambda$$lambda$, main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$, main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$, main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$, main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$, main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$1, main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$, main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$, main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$1, main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$, main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$, main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$1, main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$1, main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$, main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda, main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$, main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$1, main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$1, main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda1, main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$1, main_snf_matrixMake_lambda$_lambda$lambda, main_snf_matrixMake_lambda$$lambda$;
main_snf_smithNormalForm_matrixCopy_lambda$$lambda$ = function main_snf_smithNormalForm_matrixCopy_lambda$$lambda$(mat) {
  return (i) => {
    return mat.at(i)
  }
};
main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row) {
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
};
main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$ = function main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$(col, mat, height, width) {
  return (row) => {
    return main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row)
  }
};
main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$ = function main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col)
  }
};
main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda(mat, width, offset, col, entry) {
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
};
main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$ = function main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$(mat, width, offset) {
  return (col, entry) => {
    return main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda(mat, width, offset, col, entry)
  }
};
main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$ = function main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col)
  }
};
main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda1(mat, width, offset, col)
  }
};
main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda(col, mat, height, width, row, entry) {
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
};
main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$ = function main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$(col, mat, height, width) {
  return (row, entry) => {
    return main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda(col, mat, height, width, row, entry)
  }
};
main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row) {
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
};
main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$ = function main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$(col, mat, height, width) {
  return (row) => {
    return main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row)
  }
};
main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row) {
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
};
main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$(col, mat, height, width) {
  return (row) => {
    return main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda1(col, mat, height, width, row)
  }
};
main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda(mat, width, offset, col, entry) {
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
};
main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$ = function main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$(mat, width, offset) {
  return (col, entry) => {
    return main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda(mat, width, offset, col, entry)
  }
};
main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$ = function main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col)
  }
};
main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda(mat, width, offset, col, entry) {
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
};
main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$(mat, width, offset) {
  return (col, entry) => {
    return main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda1(mat, width, offset, col, entry)
  }
};
main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda1(mat, width, offset, col)
  }
};
main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda(col, mat, height, width, row, entry) {
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
};
main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$ = function main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$(col, mat, height, width) {
  return (row, entry) => {
    return main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda(col, mat, height, width, row, entry)
  }
};
main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda = function main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row) {
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
};
main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$ = function main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$(col, mat, height, width) {
  return (row) => {
    return main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row)
  }
};
main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda(col, mat, height, width, row, entry) {
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
};
main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$(col, mat, height, width) {
  return (row, entry) => {
    return main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda1(col, mat, height, width, row, entry)
  }
};
main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda(col, mat, height, width, row) {
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
};
main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$(col, mat, height, width) {
  return (row) => {
    return main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda1(col, mat, height, width, row)
  }
};
main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda1 = function main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda(mat, width, offset, col) {
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
};
main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$1 = function main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$(mat, width, offset) {
  return (col) => {
    return main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda1(mat, width, offset, col)
  }
};
main_snf_matrixMake_lambda$_lambda$lambda = function main_snf_matrixMake_lambda$_lambda$lambda(width, generator, z) {
  let inlinedVal, tmp, tmp1, inlinedVal1, tmp2, inlinedVal2;
  tmp1 = z / width;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp2 = z / width;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp = width * inlinedVal2;
  inlinedVal = z - tmp;
  return runtime.safeCall(generator(inlinedVal1, inlinedVal))
};
main_snf_matrixMake_lambda$$lambda$ = function main_snf_matrixMake_lambda$$lambda$(width, generator) {
  return (z) => {
    return main_snf_matrixMake_lambda$_lambda$lambda(width, generator, z)
  }
};
lambda$ = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
});
lambda$1 = (undefined, function (x) {
  return (lhs, rhs) => {
    let tmp;
    tmp = lhs * x;
    return tmp + rhs
  }
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
  static #arraySub(a, i) {
    return a.at(i)
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
  static #intInfAbs(x) {
    let scrut;
    scrut = x < 0;
    if (scrut === true) {
      return - x
    }
    return x;
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
  static #table() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = smithNormalForm.Cons(4, smithNormalForm.Nil);
    tmp1 = smithNormalForm.Cons(4, tmp);
    tmp2 = smithNormalForm.Cons(2, tmp1);
    tmp3 = smithNormalForm.Cons(12, smithNormalForm.Nil);
    tmp4 = smithNormalForm.Cons(6, tmp3);
    tmp5 = smithNormalForm.Cons(-6, tmp4);
    tmp6 = smithNormalForm.Cons(-16, smithNormalForm.Nil);
    tmp7 = smithNormalForm.Cons(-4, tmp6);
    tmp8 = smithNormalForm.Cons(10, tmp7);
    tmp9 = smithNormalForm.Cons(tmp8, smithNormalForm.Nil);
    tmp10 = smithNormalForm.Cons(tmp5, tmp9);
    return smithNormalForm.Cons(tmp2, tmp10)
  }
  static #f(x, y) {
    let tmp, tmp1;
    tmp = smithNormalForm.#table();
    tmp1 = smithNormalForm.#listNth(tmp, x);
    return smithNormalForm.#listNth(tmp1, y)
  }
  static main() {
    let generator, inlinedVal, tmp, lambda$here, smithNormalForm2, height, width, mat, range, pos, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
    generator = smithNormalForm1.#f;
    if (true === true) {
      if (true === true) {
        lambda$here = main_snf_matrixMake_lambda$$lambda$(3, generator);
        tmp = smithNormalForm1.#arrayTabulate(9, lambda$here);
        inlinedVal = globalThis.Object.freeze([
          3,
          3,
          tmp
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
          inlinedVal2 = runtime.Tuple.get(inlinedVal, 0);
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
            let element2$, element1$, element0$, tmp1, lambda$here1, scrut;
            inlinedVal3 = runtime.Tuple.get(inlinedVal, 0);
            if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
              let inlinedVal6;
              element0$ = runtime.Tuple.get(inlinedVal, 0);
              element1$ = runtime.Tuple.get(inlinedVal, 1);
              element2$ = runtime.Tuple.get(inlinedVal, 2);
              inlinedVal6 = element2$.length;
              lambda$here1 = main_snf_smithNormalForm_matrixCopy_lambda$$lambda$(element2$);
              tmp1 = smithNormalForm1.#arrayTabulate(inlinedVal6, lambda$here1);
              inlinedVal4 = globalThis.Object.freeze([
                element0$,
                element1$,
                tmp1
              ]);
              scrut = inlinedVal3 < inlinedVal2;
              if (scrut === true) {
                inlinedVal5 = inlinedVal3;
              } else {
                inlinedVal5 = inlinedVal2;
              }
              smithNormalForm2 = smithNormalForm1;
              height = inlinedVal2;
              width = inlinedVal3;
              mat = inlinedVal4;
              range = inlinedVal5;
              pos = 0;
              inlinedLbl: {
                loopLabel: while (true) {
                  let scrut1, tmp2;
                  scrut1 = pos == range;
                  if (scrut1 === true) {
                    inlinedVal1 = mat;
                    break inlinedLbl
                  }
                  {
                    let id, param0, param1, param2, param3, param4, param5, param6, param7, element2$1, element1$1, element0$1, tmp3, tmp4, offset, element2$2, element1$2, element0$2, tmp5, tmp6;
                    if (runtime.Tuple.isArrayLike(mat) && mat.length === 3) {
                      element0$1 = runtime.Tuple.get(mat, 0);
                      element1$1 = runtime.Tuple.get(mat, 1);
                      element2$1 = runtime.Tuple.get(mat, 2);
                      tmp3 = 0 <= pos;
                      if (tmp3 === true) {
                        tmp4 = pos < element1$1;
                        if (tmp4 === true) {
                          if (runtime.Tuple.isArrayLike(mat) && mat.length === 3) {
                            element0$2 = runtime.Tuple.get(mat, 0);
                            element1$2 = runtime.Tuple.get(mat, 1);
                            element2$2 = runtime.Tuple.get(mat, 2);
                            tmp5 = 0 <= pos;
                            if (tmp5 === true) {
                              tmp6 = pos < element0$2;
                              if (tmp6 === true) {
                                offset = element1$2 * pos;
                                id = 2;
                                param0 = smithNormalForm2;
                                param1 = height;
                                param2 = width;
                                param3 = mat;
                                param4 = pos;
                                param5 = main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$(pos, element2$1, element0$1, element1$1);
                                param6 = main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$(element2$2, element1$2, offset);
                                param7 = undefined;
                                inlinedLbl1: {
                                  loopLabel1: while (true) {
                                    switch (id) {
                                      case 0:
                                        {
                                          let scrut2, scrut3, x, scrut4, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
                                          scrut2 = param7 < param1;
                                          if (scrut2 === true) {
                                            tmp7 = runtime.safeCall(param5(param7));
                                            scrut3 = tmp7 == 0;
                                            if (scrut3 === true) {
                                              tmp8 = param7 + 1;
                                              param7 = tmp8;
                                              id = 0;
                                              continue loopLabel1
                                            }
                                            {
                                              let tmp14, inlinedVal7, f, element1$3, element0$3, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
                                              tmp9 = runtime.safeCall(param5(param7));
                                              tmp10 = runtime.safeCall(param5(param4));
                                              tmp14 = tmp9 / tmp10;
                                              inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp14));
                                              x = - inlinedVal7;
                                              f = lambda$(x);
                                              if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                element0$3 = runtime.Tuple.get(param3, 0);
                                                element1$3 = runtime.Tuple.get(param3, 1);
                                                tmp15 = 0 <= param4;
                                                if (tmp15 === true) {
                                                  tmp16 = param4 < element0$3;
                                                  if (tmp16 === true) {
                                                    tmp17 = 0 <= param7;
                                                    if (tmp17 === true) {
                                                      tmp18 = param7 < element0$3;
                                                      if (tmp18 === true) {
                                                        tmp19 = param4 != param7;
                                                        if (tmp19 === true) {
                                                          let offset1, element2$3, element1$4, element0$4, tmp23, tmp24, offset2, element2$4, element1$5, element0$5, tmp25, tmp26, offset3, element2$5, element1$6, element0$6, tmp27, tmp28;
                                                          if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                            element0$4 = runtime.Tuple.get(param3, 0);
                                                            element1$4 = runtime.Tuple.get(param3, 1);
                                                            element2$3 = runtime.Tuple.get(param3, 2);
                                                            tmp23 = 0 <= param4;
                                                            if (tmp23 === true) {
                                                              tmp24 = param4 < element0$4;
                                                              if (tmp24 === true) {
                                                                offset1 = element1$4 * param4;
                                                                tmp20 = main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$1(element2$3, element1$4, offset1);
                                                                if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                                  element0$5 = runtime.Tuple.get(param3, 0);
                                                                  element1$5 = runtime.Tuple.get(param3, 1);
                                                                  element2$4 = runtime.Tuple.get(param3, 2);
                                                                  tmp25 = 0 <= param7;
                                                                  if (tmp25 === true) {
                                                                    tmp26 = param7 < element0$5;
                                                                    if (tmp26 === true) {
                                                                      offset2 = element1$5 * param7;
                                                                      tmp21 = main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$(element2$4, element1$5, offset2);
                                                                      if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                                        element0$6 = runtime.Tuple.get(param3, 0);
                                                                        element1$6 = runtime.Tuple.get(param3, 1);
                                                                        element2$5 = runtime.Tuple.get(param3, 2);
                                                                        tmp27 = 0 <= param7;
                                                                        if (tmp27 === true) {
                                                                          tmp28 = param7 < element0$6;
                                                                          if (tmp28 === true) {
                                                                            offset3 = element1$6 * param7;
                                                                            tmp22 = main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$(element2$5, element1$6, offset3);
                                                                            smithNormalForm1.#opLoop(tmp20, tmp21, tmp22, element1$3, f);
                                                                            tmp11 = runtime.safeCall(param5(param7));
                                                                            scrut4 = tmp11 == 0;
                                                                            if (scrut4 === true) {
                                                                              tmp12 = param7 + 1;
                                                                              param7 = tmp12;
                                                                              id = 0;
                                                                              continue loopLabel1
                                                                            }
                                                                            id = 2;
                                                                            continue loopLabel1;
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
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                  }
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                }
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                              }
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                            }
                                          }
                                          tmp13 = param4 + 1;
                                          param7 = tmp13;
                                          id = 1;
                                          continue loopLabel1;
                                        }
                                      case 1:
                                        {
                                          let scrut2, scrut3, x, scrut4, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
                                          scrut2 = param7 < param2;
                                          if (scrut2 === true) {
                                            tmp7 = runtime.safeCall(param6(param7));
                                            scrut3 = tmp7 == 0;
                                            if (scrut3 === true) {
                                              tmp8 = param7 + 1;
                                              param7 = tmp8;
                                              id = 1;
                                              continue loopLabel1
                                            }
                                            {
                                              let tmp13, inlinedVal7, f, element1$3, element0$3, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
                                              tmp9 = runtime.safeCall(param6(param7));
                                              tmp10 = runtime.safeCall(param6(param4));
                                              tmp13 = tmp9 / tmp10;
                                              inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp13));
                                              x = - inlinedVal7;
                                              f = lambda$1(x);
                                              if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                element0$3 = runtime.Tuple.get(param3, 0);
                                                element1$3 = runtime.Tuple.get(param3, 1);
                                                tmp14 = 0 <= param4;
                                                if (tmp14 === true) {
                                                  tmp15 = param4 < element1$3;
                                                  if (tmp15 === true) {
                                                    tmp16 = 0 <= param7;
                                                    if (tmp16 === true) {
                                                      tmp17 = param7 < element1$3;
                                                      if (tmp17 === true) {
                                                        tmp18 = param4 != param7;
                                                        if (tmp18 === true) {
                                                          let element2$3, element1$4, element0$4, tmp22, tmp23, element2$4, element1$5, element0$5, tmp24, tmp25, element2$5, element1$6, element0$6, tmp26, tmp27;
                                                          if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                            element0$4 = runtime.Tuple.get(param3, 0);
                                                            element1$4 = runtime.Tuple.get(param3, 1);
                                                            element2$3 = runtime.Tuple.get(param3, 2);
                                                            tmp22 = 0 <= param4;
                                                            if (tmp22 === true) {
                                                              tmp23 = param4 < element1$4;
                                                              if (tmp23 === true) {
                                                                tmp19 = main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$1(param4, element2$3, element0$4, element1$4);
                                                                if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                                  element0$5 = runtime.Tuple.get(param3, 0);
                                                                  element1$5 = runtime.Tuple.get(param3, 1);
                                                                  element2$4 = runtime.Tuple.get(param3, 2);
                                                                  tmp24 = 0 <= param7;
                                                                  if (tmp24 === true) {
                                                                    tmp25 = param7 < element1$5;
                                                                    if (tmp25 === true) {
                                                                      tmp20 = main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$(param7, element2$4, element0$5, element1$5);
                                                                      if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                                                                        element0$6 = runtime.Tuple.get(param3, 0);
                                                                        element1$6 = runtime.Tuple.get(param3, 1);
                                                                        element2$5 = runtime.Tuple.get(param3, 2);
                                                                        tmp26 = 0 <= param7;
                                                                        if (tmp26 === true) {
                                                                          tmp27 = param7 < element1$6;
                                                                          if (tmp27 === true) {
                                                                            tmp21 = main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$(param7, element2$5, element0$6, element1$6);
                                                                            smithNormalForm1.#opLoop(tmp19, tmp20, tmp21, element0$3, f);
                                                                            tmp11 = runtime.safeCall(param6(param7));
                                                                            scrut4 = tmp11 == 0;
                                                                            if (scrut4 === true) {
                                                                              tmp12 = param7 + 1;
                                                                              param7 = tmp12;
                                                                              id = 1;
                                                                              continue loopLabel1
                                                                            }
                                                                            id = 2;
                                                                            continue loopLabel1;
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
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                  }
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                }
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                              }
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                            }
                                          }
                                          break inlinedLbl1;
                                        }
                                      case 2:
                                        {
                                          let tmp7, id1, param01, param11, param21, param31, param41, param51, param61, param71, param8, param9, param10;
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
                                                    let scrut2;
                                                    scrut2 = param8 >= param11;
                                                    if (scrut2 === true) {
                                                      let scrut3, element1$3, element0$3, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, scrut4, element1$4, element0$4, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
                                                      if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                        element0$3 = runtime.Tuple.get(param31, 0);
                                                        element1$3 = runtime.Tuple.get(param31, 1);
                                                        tmp8 = 0 <= param41;
                                                        if (tmp8 === true) {
                                                          tmp9 = param41 < element0$3;
                                                          if (tmp9 === true) {
                                                            tmp10 = 0 <= param61;
                                                            if (tmp10 === true) {
                                                              tmp11 = param61 < element0$3;
                                                              if (tmp11 === true) {
                                                                scrut3 = param41 == param61;
                                                                if (scrut3 !== true) {
                                                                  let offset1, element2$3, element1$5, element0$5, tmp24, tmp25, offset2, element2$4, element1$6, element0$6, tmp26, tmp27, offset3, element2$5, element1$7, element0$7, tmp28, tmp29, offset4, element2$6, element1$8, element0$8, tmp30, tmp31;
                                                                  if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                    element0$5 = runtime.Tuple.get(param31, 0);
                                                                    element1$5 = runtime.Tuple.get(param31, 1);
                                                                    element2$3 = runtime.Tuple.get(param31, 2);
                                                                    tmp24 = 0 <= param41;
                                                                    if (tmp24 === true) {
                                                                      tmp25 = param41 < element0$5;
                                                                      if (tmp25 === true) {
                                                                        offset1 = element1$5 * param41;
                                                                        tmp12 = main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$1(element2$3, element1$5, offset1);
                                                                        if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                          element0$6 = runtime.Tuple.get(param31, 0);
                                                                          element1$6 = runtime.Tuple.get(param31, 1);
                                                                          element2$4 = runtime.Tuple.get(param31, 2);
                                                                          tmp26 = 0 <= param41;
                                                                          if (tmp26 === true) {
                                                                            tmp27 = param41 < element0$6;
                                                                            if (tmp27 === true) {
                                                                              offset2 = element1$6 * param41;
                                                                              tmp13 = main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$1(element2$4, element1$6, offset2);
                                                                              if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                                element0$7 = runtime.Tuple.get(param31, 0);
                                                                                element1$7 = runtime.Tuple.get(param31, 1);
                                                                                element2$5 = runtime.Tuple.get(param31, 2);
                                                                                tmp28 = 0 <= param61;
                                                                                if (tmp28 === true) {
                                                                                  tmp29 = param61 < element0$7;
                                                                                  if (tmp29 === true) {
                                                                                    offset3 = element1$7 * param61;
                                                                                    tmp14 = main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$(element2$5, element1$7, offset3);
                                                                                    if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                                      element0$8 = runtime.Tuple.get(param31, 0);
                                                                                      element1$8 = runtime.Tuple.get(param31, 1);
                                                                                      element2$6 = runtime.Tuple.get(param31, 2);
                                                                                      tmp30 = 0 <= param61;
                                                                                      if (tmp30 === true) {
                                                                                        tmp31 = param61 < element0$8;
                                                                                        if (tmp31 === true) {
                                                                                          offset4 = element1$8 * param61;
                                                                                          tmp15 = main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$(element2$6, element1$8, offset4);
                                                                                          smithNormalForm1.#swapLoop(tmp12, tmp13, tmp14, tmp15, element1$3);
                                                                                        } else {
                                                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                        }
                                                                                      } else {
                                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                      }
                                                                                    } else {
                                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                    }
                                                                                  } else {
                                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                  }
                                                                                } else {
                                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                }
                                                                              } else {
                                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                              }
                                                                            } else {
                                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                            }
                                                                          } else {
                                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                          }
                                                                        } else {
                                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                        }
                                                                      } else {
                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                      }
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                }
                                                                if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                  element0$4 = runtime.Tuple.get(param31, 0);
                                                                  element1$4 = runtime.Tuple.get(param31, 1);
                                                                  tmp16 = 0 <= param41;
                                                                  if (tmp16 === true) {
                                                                    tmp17 = param41 < element1$4;
                                                                    if (tmp17 === true) {
                                                                      tmp18 = 0 <= param71;
                                                                      if (tmp18 === true) {
                                                                        tmp19 = param71 < element1$4;
                                                                        if (tmp19 === true) {
                                                                          scrut4 = param41 == param71;
                                                                          if (scrut4 === true) {
                                                                            break inlinedLbl2
                                                                          }
                                                                          {
                                                                            let element2$3, element1$5, element0$5, tmp24, tmp25, element2$4, element1$6, element0$6, tmp26, tmp27, element2$5, element1$7, element0$7, tmp28, tmp29, element2$6, element1$8, element0$8, tmp30, tmp31;
                                                                            if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                              element0$5 = runtime.Tuple.get(param31, 0);
                                                                              element1$5 = runtime.Tuple.get(param31, 1);
                                                                              element2$3 = runtime.Tuple.get(param31, 2);
                                                                              tmp24 = 0 <= param41;
                                                                              if (tmp24 === true) {
                                                                                tmp25 = param41 < element1$5;
                                                                                if (tmp25 === true) {
                                                                                  tmp20 = main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$1(param41, element2$3, element0$5, element1$5);
                                                                                  if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                                    element0$6 = runtime.Tuple.get(param31, 0);
                                                                                    element1$6 = runtime.Tuple.get(param31, 1);
                                                                                    element2$4 = runtime.Tuple.get(param31, 2);
                                                                                    tmp26 = 0 <= param41;
                                                                                    if (tmp26 === true) {
                                                                                      tmp27 = param41 < element1$6;
                                                                                      if (tmp27 === true) {
                                                                                        tmp21 = main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$1(param41, element2$4, element0$6, element1$6);
                                                                                        if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                                          element0$7 = runtime.Tuple.get(param31, 0);
                                                                                          element1$7 = runtime.Tuple.get(param31, 1);
                                                                                          element2$5 = runtime.Tuple.get(param31, 2);
                                                                                          tmp28 = 0 <= param71;
                                                                                          if (tmp28 === true) {
                                                                                            tmp29 = param71 < element1$7;
                                                                                            if (tmp29 === true) {
                                                                                              tmp22 = main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$(param71, element2$5, element0$7, element1$7);
                                                                                              if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                                                                element0$8 = runtime.Tuple.get(param31, 0);
                                                                                                element1$8 = runtime.Tuple.get(param31, 1);
                                                                                                element2$6 = runtime.Tuple.get(param31, 2);
                                                                                                tmp30 = 0 <= param71;
                                                                                                if (tmp30 === true) {
                                                                                                  tmp31 = param71 < element1$8;
                                                                                                  if (tmp31 === true) {
                                                                                                    tmp23 = main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$(param71, element2$6, element0$8, element1$8);
                                                                                                    smithNormalForm1.#swapLoop(tmp20, tmp21, tmp22, tmp23, element0$4);
                                                                                                    break inlinedLbl2
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
                                                    {
                                                      let param7_tmp, param6_tmp, param5_tmp, offset1, element2$3, element1$3, element0$3, tmp8, tmp9;
                                                      if (runtime.Tuple.isArrayLike(param31) && param31.length === 3) {
                                                        element0$3 = runtime.Tuple.get(param31, 0);
                                                        element1$3 = runtime.Tuple.get(param31, 1);
                                                        element2$3 = runtime.Tuple.get(param31, 2);
                                                        tmp8 = 0 <= param8;
                                                        if (tmp8 === true) {
                                                          tmp9 = param8 < element0$3;
                                                          if (tmp9 === true) {
                                                            offset1 = element1$3 * param8;
                                                            param7_tmp = param71;
                                                            param6_tmp = param61;
                                                            param5_tmp = param51;
                                                            param51 = param8;
                                                            param61 = main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$1(element2$3, element1$3, offset1);
                                                            param71 = param5_tmp;
                                                            param8 = param6_tmp;
                                                            param9 = param7_tmp;
                                                            param10 = param41;
                                                            id1 = 1;
                                                            continue loopLabel2
                                                          }
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                        }
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                      }
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                                    }
                                                  }
                                                case 1:
                                                  {
                                                    let scrut2, next, scrut3, tmp8, tmp9, tmp10;
                                                    scrut2 = param10 >= param21;
                                                    if (scrut2 === true) {
                                                      tmp8 = param51 + 1;
                                                      param51 = param71;
                                                      param61 = param8;
                                                      param71 = param9;
                                                      param8 = tmp8;
                                                      id1 = 0;
                                                      continue loopLabel2
                                                    }
                                                    next = runtime.safeCall(param61(param10));
                                                    scrut3 = param01.#smaller(next, param71);
                                                    if (scrut3 === true) {
                                                      tmp9 = param10 + 1;
                                                      param71 = next;
                                                      param8 = param51;
                                                      param9 = param10;
                                                      param10 = tmp9;
                                                      id1 = 1;
                                                      continue loopLabel2
                                                    }
                                                    tmp10 = param10 + 1;
                                                    param10 = tmp10;
                                                    id1 = 1;
                                                    continue loopLabel2;
                                                  }
                                              }
                                            }
                                          }
                                          tmp7 = param4 + 1;
                                          param7 = tmp7;
                                          id = 0;
                                          continue loopLabel1;
                                        }
                                    }
                                  }
                                }
                                tmp2 = pos + 1;
                                pos = tmp2;
                                continue loopLabel
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
                }
              }
              return smithNormalForm1.#matrixFetch(inlinedVal1, 2, 2)
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
  static [definitionMetadata] = ["class", "smithNormalForm"];
});
export { smithNormalForm1 as _$_modulePrivate_$_smithNormalForm };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { main_snf_smithNormalForm_matrixCopy_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixCopy_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchCol_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchCol_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixStoreRow_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowOp_matrixFetchRow_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixStoreCol_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColOp_matrixFetchCol_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixStoreRow_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixRowSwap_matrixFetchRow_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda };
export { main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$ as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$ };
export { main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixStoreCol_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixColSwap_matrixFetchCol_lambda$$lambda$1 };
export { main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchRow_lambda$_lambda$lambda1 };
export { main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$1 as _$_modulePrivate_$_main_snf_smithNormalForm_matrixFetchRow_lambda$$lambda$1 };
export { main_snf_matrixMake_lambda$_lambda$lambda as _$_modulePrivate_$_main_snf_matrixMake_lambda$_lambda$lambda };
export { main_snf_matrixMake_lambda$$lambda$ as _$_modulePrivate_$_main_snf_matrixMake_lambda$$lambda$ };
export default smithNormalForm1;
