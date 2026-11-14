const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let loop, loop_i0, loop_is, loop_j, loop_i02, loop_k, loop_i, loop_k1, loop_is2, find_num_points, loop_i1, loop_i2, fft1, loop_k$tailrec, loop_i$tailrec, loop_is2$tailrec, loop_is$tailrec, loop_j$tailrec, loop_k$tailrec1, find_num_points$tailrec, loop_i2$tailrec;
loop_k$tailrec = function loop_k$tailrec(fft2, k, j) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = k < j;
    if (scrut === true) {
      let tmp1, inlinedVal;
      tmp1 = k / 2;
      inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
      tmp = j - k;
      k = inlinedVal;
      j = tmp;
      continue loopLabel
    }
    return j + k;
  }
};
loop_i$tailrec = function loop_i$tailrec(fft2, px, py, n, i, j) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp;
    scrut = i >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, tmp1, inlinedVal1;
      scrut1 = i < j;
      if (scrut1 === true) {
        let inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
        inlinedVal2 = px.at(j);
        inlinedVal3 = px.at(i);
        px[j] = inlinedVal3;
        px[i] = inlinedVal2;
        inlinedVal4 = py.at(j);
        inlinedVal5 = py.at(i);
        py[j] = inlinedVal5;
        py[i] = inlinedVal4;
      }
      tmp1 = n / 2;
      inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
      inlinedVal = loop_k$tailrec(fft2, inlinedVal1, j);
      tmp = i + 1;
      i = tmp;
      j = inlinedVal;
      continue loopLabel;
    }
  }
};
loop_is2$tailrec = function loop_is2$tailrec(fft2, px, py, n, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    loop_i02(fft2, px, py, n, id, is_);
    tmp = 2 * id;
    tmp1 = tmp - 1;
    tmp2 = 4 * id;
    is_ = tmp1;
    id = tmp2;
    continue loopLabel;
  }
};
loop_is$tailrec = function loop_is$tailrec(fft2, px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    loop_i0(fft2, px, py, n, n4, cc1, ss1, cc3, ss3, id, is_);
    tmp = 2 * id;
    tmp1 = tmp - n2;
    tmp2 = tmp1 + j;
    tmp3 = 4 * id;
    is_ = tmp2;
    id = tmp3;
    continue loopLabel;
  }
};
loop_j$tailrec = function loop_j$tailrec(fft2, px, py, n, n2, n4, e, j, a) {
  loopLabel: while (true) {
    let scrut, a3, tmp, tmp1, tmp2;
    scrut = j > n4;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3;
      a3 = 3.0 * a;
      inlinedVal = runtime.safeCall(globalThis.Math.cos(a));
      inlinedVal1 = runtime.safeCall(globalThis.Math.sin(a));
      inlinedVal2 = runtime.safeCall(globalThis.Math.cos(a3));
      inlinedVal3 = runtime.safeCall(globalThis.Math.sin(a3));
      tmp = 2 * n2;
      loop_is$tailrec(fft2, px, py, n, n2, n4, j, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, j, tmp);
      tmp1 = j + 1;
      tmp2 = e * j;
      j = tmp1;
      a = tmp2;
      continue loopLabel;
    }
  }
};
loop_k$tailrec1 = function loop_k$tailrec(fft2, px, py, n, m, k, n2) {
  loopLabel: while (true) {
    let scrut, e, tmp;
    scrut = k >= m;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, tmp1, tmp2, inlinedVal1, inlinedVal2;
      tmp2 = n2 / 4;
      inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
      inlinedVal = 2.0 * 3.141592653589793;
      e = inlinedVal / n2;
      loop_j$tailrec(fft2, px, py, n, n2, inlinedVal1, e, 1, 0.0);
      tmp = k + 1;
      tmp1 = n2 / 2;
      inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp1));
      k = tmp;
      n2 = inlinedVal2;
      continue loopLabel;
    }
  }
};
find_num_points$tailrec = function find_num_points$tailrec(np, i, m) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1;
    scrut = i < np;
    if (scrut === true) {
      tmp = i + i;
      tmp1 = m + 1;
      i = tmp;
      m = tmp1;
      continue loopLabel
    }
    return globalThis.Object.freeze([
      i,
      m
    ]);
  }
};
loop_i2$tailrec = function loop_i2$tailrec(fft2, np, pxr, pxi, i, zr, zi, kr, ki) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, tmp, tmp1, tmp2, element1$, element0$, tmp3, tmp4, element1$1, element0$1, tmp5;
    scrut = i >= np;
    if (scrut === true) {
      return globalThis.Object.freeze([
        zr,
        zi
      ])
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        tmp2 = globalThis.Object.freeze([
          inlinedVal1,
          i
        ]);
      } else {
        tmp2 = globalThis.Object.freeze([
          zr,
          kr
        ]);
      }
      if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
        let inlinedVal2, inlinedVal3;
        element0$ = runtime.Tuple.get(tmp2, 0);
        element1$ = runtime.Tuple.get(tmp2, 1);
        tmp3 = i + 1;
        inlinedVal2 = pxi.at(tmp3);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        scrut2 = zi < inlinedVal3;
        if (scrut2 === true) {
          tmp4 = globalThis.Object.freeze([
            inlinedVal3,
            i
          ]);
        } else {
          tmp4 = globalThis.Object.freeze([
            zi,
            ki
          ]);
        }
        if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
          element0$1 = runtime.Tuple.get(tmp4, 0);
          element1$1 = runtime.Tuple.get(tmp4, 1);
          tmp5 = i + 1;
          i = tmp5;
          zr = element0$;
          zi = element0$1;
          kr = element1$;
          ki = element1$1;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
loop_i1 = function loop_i(fft2, np, npm, pxr, pxi, t, i) {
  loopLabel: while (true) {
    let scrut, j, z, y, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    scrut = i > npm;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1;
      j = np - i;
      tmp = i + 1;
      tmp1 = - 0.5;
      pxr[tmp] = tmp1;
      tmp2 = j + 1;
      tmp3 = - 0.5;
      pxr[tmp2] = tmp3;
      z = t * i;
      inlinedVal = runtime.safeCall(globalThis.Math.cos(z));
      inlinedVal1 = runtime.safeCall(globalThis.Math.sin(z));
      tmp4 = inlinedVal / inlinedVal1;
      tmp5 = 0.5 * tmp4;
      y = - tmp5;
      tmp6 = i + 1;
      pxi[tmp6] = y;
      tmp7 = j + 1;
      tmp8 = - y;
      pxi[tmp7] = tmp8;
      tmp9 = i + 1;
      i = tmp9;
      continue loopLabel;
    }
  }
};
loop_i2 = function loop_i2(fft2, np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return (kr) => {
        return (ki) => {
          return loop_i2$tailrec(fft2, np, pxr, pxi, i, zr, zi, kr, ki)
        }
      }
    }
  }
};
loop_i0 = function loop_i0(fft2, px, py, n, n4, cc1, ss1, cc3, ss3, id, i0) {
  loopLabel: while (true) {
    let scrut, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    scrut = i0 >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15;
      i1 = i0 + n4;
      i2 = i1 + n4;
      i3 = i2 + n4;
      inlinedVal = px.at(i0);
      inlinedVal1 = px.at(i2);
      r1 = inlinedVal - inlinedVal1;
      inlinedVal2 = px.at(i0);
      inlinedVal3 = px.at(i2);
      tmp = inlinedVal2 + inlinedVal3;
      px[i0] = tmp;
      inlinedVal4 = px.at(i1);
      inlinedVal5 = px.at(i3);
      r2 = inlinedVal4 - inlinedVal5;
      inlinedVal6 = px.at(i1);
      inlinedVal7 = px.at(i3);
      tmp1 = inlinedVal6 + inlinedVal7;
      px[i1] = tmp1;
      inlinedVal8 = py.at(i0);
      inlinedVal9 = py.at(i2);
      s1 = inlinedVal8 - inlinedVal9;
      inlinedVal10 = py.at(i0);
      inlinedVal11 = py.at(i2);
      tmp2 = inlinedVal10 + inlinedVal11;
      py[i0] = tmp2;
      inlinedVal12 = py.at(i1);
      inlinedVal13 = py.at(i3);
      s2 = inlinedVal12 - inlinedVal13;
      inlinedVal14 = py.at(i1);
      inlinedVal15 = py.at(i3);
      tmp3 = inlinedVal14 + inlinedVal15;
      py[i1] = tmp3;
      s3 = r1 - s2;
      r1b = r1 + s2;
      s2b = r2 - s1;
      r2b = r2 + s1;
      tmp4 = r1b * cc1;
      tmp5 = s2b * ss1;
      tmp6 = tmp4 - tmp5;
      px[i2] = tmp6;
      tmp7 = - s2b;
      tmp8 = tmp7 * cc1;
      tmp9 = r1b * ss1;
      tmp10 = tmp8 - tmp9;
      py[i2] = tmp10;
      tmp11 = s3 * cc3;
      tmp12 = r2b * ss3;
      tmp13 = tmp11 + tmp12;
      px[i3] = tmp13;
      tmp14 = r2b * cc3;
      tmp15 = s3 * ss3;
      tmp16 = tmp14 - tmp15;
      py[i3] = tmp16;
      tmp17 = i0 + id;
      i0 = tmp17;
      continue loopLabel;
    }
  }
};
loop_is = function loop_is(fft2, px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_) {
  return (id) => {
    return loop_is$tailrec(fft2, px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id)
  }
};
loop_j = function loop_j(fft2, px, py, n, n2, n4, e, j) {
  return (a) => {
    return loop_j$tailrec(fft2, px, py, n, n2, n4, e, j, a)
  }
};
loop_i02 = function loop_i02(fft2, px, py, n, id, i0) {
  loopLabel: while (true) {
    let scrut, i1, tmp, tmp1, tmp2, tmp3, tmp4;
    scrut = i0 > n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
      i1 = i0 + 1;
      inlinedVal = px.at(i0);
      inlinedVal1 = px.at(i1);
      tmp = inlinedVal + inlinedVal1;
      px[i0] = tmp;
      inlinedVal2 = px.at(i1);
      tmp1 = inlinedVal - inlinedVal2;
      px[i1] = tmp1;
      inlinedVal3 = py.at(i0);
      inlinedVal4 = py.at(i1);
      tmp2 = inlinedVal3 + inlinedVal4;
      py[i0] = tmp2;
      inlinedVal5 = py.at(i1);
      tmp3 = inlinedVal3 - inlinedVal5;
      py[i1] = tmp3;
      tmp4 = i0 + id;
      i0 = tmp4;
      continue loopLabel;
    }
  }
};
loop_k = function loop_k(fft2, k) {
  return (j) => {
    return loop_k$tailrec(fft2, k, j)
  }
};
find_num_points = function find_num_points(np, i) {
  return (m) => {
    return find_num_points$tailrec(np, i, m)
  }
};
loop_k1 = function loop_k(fft2, px, py, n, m, k) {
  return (n2) => {
    return loop_k$tailrec1(fft2, px, py, n, m, k, n2)
  }
};
loop_is2 = function loop_is2(fft2, px, py, n, is_) {
  return (id) => {
    return loop_is2$tailrec(fft2, px, py, n, is_, id)
  }
};
loop_i = function loop_i(fft2, px, py, n, i) {
  return (j) => {
    return loop_i$tailrec(fft2, px, py, n, i, j)
  }
};
loop = function loop(fft2, px, py, n, i) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = i > n;
    if (scrut === true) {
      return runtime.Unit
    }
    px[i] = 0.0;
    py[i] = 0.0;
    tmp = i + 1;
    i = tmp;
    continue loopLabel;
  }
};
(class fft {
  static {
    fft1 = this
  }
  static {
    fft.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        fft.Cons.class = this
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
        fft.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
  }
  static #loop_np$tailrec(i, np) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = fft.#nSizes();
    scrut = i > tmp;
    if (scrut === true) {
      return fft.Nil
    }
    tmp1 = fft.#test(np);
    tmp2 = i + 1;
    tmp3 = np * 2;
    tmp4 = fft.#loop_np$tailrec(tmp2, tmp3);
    return fft.Cons(tmp1, tmp4);
  }
  static #cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static #sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static #abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return fft.#floor(tmp)
  }
  static #fromInt(i) {
    return i
  }
  static #pi() {
    return 3.141592653589793
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
  static #aArray(n, x) {
    let tmp;
    tmp = [];
    return fft.#fillArray(tmp, 0, n, x)
  }
  static #aSub(a, i) {
    return a.at(i)
  }
  static #aUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #tpi() {
    let tmp;
    tmp = fft.#pi();
    return 2.0 * tmp
  }
  static #fft(px) {
    return (py) => {
      return (np) => {
        let scrut, element1$, element0$, tmp, inlinedVal;
        inlinedVal = find_num_points$tailrec(np, 2, 1);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
          element0$ = runtime.Tuple.get(inlinedVal, 0);
          element1$ = runtime.Tuple.get(inlinedVal, 1);
          scrut = element0$ != np;
          if (scrut === true) {
            tmp = np + 1;
            loop(fft, px, py, element0$, tmp);
          }
          loop_k$tailrec1(fft, px, py, element0$, element1$, 1, element0$);
          loop_is2$tailrec(fft, px, py, element0$, 1, 4);
          loop_i$tailrec(fft, px, py, element0$, 1, 1);
          return element0$
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #test(np) {
    let enp, npm, pxr, pxi, t, n2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, element1$, element0$, tmp9, tmp10, inlinedVal;
    enp = fft.#fromInt(np);
    tmp = fft.#intDiv(np, 2);
    npm = tmp - 1;
    tmp1 = np + 2;
    pxr = fft.#aArray(tmp1, 0.0);
    tmp2 = np + 2;
    pxi = fft.#aArray(tmp2, 0.0);
    tmp3 = fft.#pi();
    t = tmp3 / enp;
    tmp4 = enp - 1.0;
    tmp5 = tmp4 * 0.5;
    fft.#aUpdate(pxr, 1, tmp5);
    fft.#aUpdate(pxi, 1, 0.0);
    n2 = fft.#intDiv(np, 2);
    tmp6 = n2 + 1;
    tmp7 = - 0.5;
    fft.#aUpdate(pxr, tmp6, tmp7);
    tmp8 = n2 + 1;
    fft.#aUpdate(pxi, tmp8, 0.0);
    loop_i1(fft, np, npm, pxr, pxi, t, 1);
    fft.#fft(pxr)(pxi)(np);
    inlinedVal = loop_i2$tailrec(fft, np, pxr, pxi, 0, 0.0, 0.0, 0, 0);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      tmp9 = fft.#abs(element0$);
      tmp10 = fft.#abs(element1$);
      scrut = tmp9 < tmp10;
      if (scrut === true) {
        return element1$
      }
      return element0$;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #nSizes() {
    return 14
  }
  static #loop_np(i) {
    return (np) => {
      return fft.#loop_np$tailrec(i, np)
    }
  }
  static #doit() {
    return fft.#loop_np(1)(16)
  }
  static main() {
    return fft.#doit()
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "fft"];
});
export { loop as _$_modulePrivate_$_loop };
export { loop_i0 as _$_modulePrivate_$_loop_i0 };
export { loop_is as _$_modulePrivate_$_loop_is };
export { loop_j as _$_modulePrivate_$_loop_j };
export { loop_i02 as _$_modulePrivate_$_loop_i02 };
export { loop_k as _$_modulePrivate_$_loop_k };
export { loop_i as _$_modulePrivate_$_loop_i };
export { loop_k1 as _$_modulePrivate_$_loop_k1 };
export { loop_is2 as _$_modulePrivate_$_loop_is2 };
export { find_num_points as _$_modulePrivate_$_find_num_points };
export { loop_i1 as _$_modulePrivate_$_loop_i1 };
export { loop_i2 as _$_modulePrivate_$_loop_i2 };
export { fft1 as _$_modulePrivate_$_fft };
export { loop_k$tailrec as _$_modulePrivate_$_loop_k$tailrec };
export { loop_i$tailrec as _$_modulePrivate_$_loop_i$tailrec };
export { loop_is2$tailrec as _$_modulePrivate_$_loop_is2$tailrec };
export { loop_is$tailrec as _$_modulePrivate_$_loop_is$tailrec };
export { loop_j$tailrec as _$_modulePrivate_$_loop_j$tailrec };
export { loop_k$tailrec1 as _$_modulePrivate_$_loop_k$tailrec1 };
export { find_num_points$tailrec as _$_modulePrivate_$_find_num_points$tailrec };
export { loop_i2$tailrec as _$_modulePrivate_$_loop_i2$tailrec };
export default fft1;
