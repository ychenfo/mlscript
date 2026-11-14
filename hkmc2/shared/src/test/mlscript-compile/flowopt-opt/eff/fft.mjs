const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const fft$accessorSymbol = globalThis.Symbol("fft");
let fft1, main_loop_np_loop_np$tailrec$loop_np$tailrec, loop_np_loop_np$tailrec$loop_np$tailrec;
main_loop_np_loop_np$tailrec$loop_np$tailrec = function main_loop_np_loop_np$tailrec$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, kr, ki, inlinedVal1, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6;
    np1 = np;
    tmp10 = np / 2;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp10));
    npm = inlinedVal3 - 1;
    tmp3 = np + 2;
    tmp11 = [];
    arr = tmp11;
    i3 = 0;
    n = tmp3;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut2, tmp14;
        scrut2 = i3 == n;
        if (scrut2 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i3] = x;
        tmp14 = i3 + 1;
        i3 = tmp14;
        continue loopLabel;
      }
    }
    inlinedVal2 = inlinedVal4;
    pxr = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i4 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut2, tmp14;
        scrut2 = i4 == n1;
        if (scrut2 === true) {
          inlinedVal5 = arr1;
          break inlinedLbl1
        }
        arr1[i4] = x1;
        tmp14 = i4 + 1;
        i4 = tmp14;
        continue loopLabel1;
      }
    }
    pxi = inlinedVal5;
    t = 3.141592653589793 / np;
    tmp5 = np - 1.0;
    tmp6 = tmp5 * 0.5;
    inlinedVal2[1] = tmp6;
    inlinedVal5[1] = 0.0;
    tmp13 = np / 2;
    inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp13));
    tmp7 = inlinedVal6 + 1;
    tmp8 = - 0.5;
    inlinedVal2[tmp7] = tmp8;
    tmp9 = inlinedVal6 + 1;
    inlinedVal5[tmp9] = 0.0;
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal2;
    pxi1 = inlinedVal5;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut2, j, z, y, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
        scrut2 = i1 > npm1;
        if (scrut2 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal7, inlinedVal8;
          j = np2 - i1;
          tmp14 = i1 + 1;
          tmp15 = - 0.5;
          pxr1[tmp14] = tmp15;
          tmp16 = j + 1;
          tmp17 = - 0.5;
          pxr1[tmp16] = tmp17;
          z = t1 * i1;
          inlinedVal7 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal8 = runtime.safeCall(globalThis.Math.sin(z));
          tmp18 = inlinedVal7 / inlinedVal8;
          tmp19 = 0.5 * tmp18;
          y = - tmp19;
          tmp20 = i1 + 1;
          pxi1[tmp20] = y;
          tmp21 = j + 1;
          tmp22 = - y;
          pxi1[tmp21] = tmp22;
          tmp23 = i1 + 1;
          i1 = tmp23;
          continue loopLabel2;
        }
      }
    }
    fft1[fft$accessorSymbol](pxr)(pxi)(np1);
    np3 = np1;
    pxr2 = pxr;
    pxi2 = pxi;
    i2 = 0;
    zr = 0.0;
    zi = 0.0;
    kr = 0;
    ki = 0;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut2, scrut3, scrut4, tmp14, tmp15, tmp16, element0$1, tmp17, tmp18, element0$2, tmp19;
        scrut2 = i2 >= np3;
        if (scrut2 === true) {
          inlinedVal1 = globalThis.Object.freeze([
            zr,
            zi
          ]);
          break inlinedLbl3
        }
        {
          let inlinedVal7, inlinedVal8;
          tmp14 = i2 + 1;
          inlinedVal7 = pxr2.at(tmp14);
          tmp15 = inlinedVal7 - i2;
          inlinedVal8 = runtime.safeCall(globalThis.Math.abs(tmp15));
          scrut3 = zr < inlinedVal8;
          if (scrut3 === true) {
            tmp16 = globalThis.Object.freeze([
              inlinedVal8,
              i2
            ]);
          } else {
            tmp16 = globalThis.Object.freeze([
              zr,
              kr
            ]);
          }
          if (runtime.Tuple.isArrayLike(tmp16) && tmp16.length === 2) {
            let inlinedVal9, inlinedVal10;
            element0$1 = runtime.Tuple.get(tmp16, 0);
            tmp17 = i2 + 1;
            inlinedVal9 = pxi2.at(tmp17);
            inlinedVal10 = runtime.safeCall(globalThis.Math.abs(inlinedVal9));
            scrut4 = zi < inlinedVal10;
            if (scrut4 === true) {
              tmp18 = globalThis.Object.freeze([
                inlinedVal10,
                i2
              ]);
            } else {
              tmp18 = globalThis.Object.freeze([
                zi,
                ki
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp18) && tmp18.length === 2) {
              element0$2 = runtime.Tuple.get(tmp18, 0);
              tmp19 = i2 + 1;
              i2 = tmp19;
              zr = element0$1;
              zi = element0$2;
              kr = undefined;
              ki = undefined;
              continue loopLabel3
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      let inlinedVal7, inlinedVal8;
      element0$ = runtime.Tuple.get(inlinedVal1, 0);
      element1$ = runtime.Tuple.get(inlinedVal1, 1);
      inlinedVal7 = runtime.safeCall(globalThis.Math.abs(element0$));
      inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element1$));
      scrut1 = inlinedVal7 < inlinedVal8;
      if (scrut1 === true) {
        inlinedVal = element1$;
      } else {
        inlinedVal = element0$;
      }
      tmp = i + 1;
      tmp1 = np * 2;
      tmp2 = main_loop_np_loop_np$tailrec$loop_np$tailrec(tmp, tmp1);
      return fft1.Cons(inlinedVal, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_np_loop_np$tailrec$loop_np$tailrec = function loop_np_loop_np$tailrec$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, kr, ki, inlinedVal1, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6;
    np1 = np;
    tmp10 = np / 2;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp10));
    npm = inlinedVal3 - 1;
    tmp3 = np + 2;
    tmp11 = [];
    arr = tmp11;
    i3 = 0;
    n = tmp3;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut2, tmp14;
        scrut2 = i3 == n;
        if (scrut2 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i3] = x;
        tmp14 = i3 + 1;
        i3 = tmp14;
        continue loopLabel;
      }
    }
    inlinedVal2 = inlinedVal4;
    pxr = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i4 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut2, tmp14;
        scrut2 = i4 == n1;
        if (scrut2 === true) {
          inlinedVal5 = arr1;
          break inlinedLbl1
        }
        arr1[i4] = x1;
        tmp14 = i4 + 1;
        i4 = tmp14;
        continue loopLabel1;
      }
    }
    pxi = inlinedVal5;
    t = 3.141592653589793 / np;
    tmp5 = np - 1.0;
    tmp6 = tmp5 * 0.5;
    inlinedVal2[1] = tmp6;
    inlinedVal5[1] = 0.0;
    tmp13 = np / 2;
    inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp13));
    tmp7 = inlinedVal6 + 1;
    tmp8 = - 0.5;
    inlinedVal2[tmp7] = tmp8;
    tmp9 = inlinedVal6 + 1;
    inlinedVal5[tmp9] = 0.0;
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal2;
    pxi1 = inlinedVal5;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut2, j, z, y, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
        scrut2 = i1 > npm1;
        if (scrut2 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal7, inlinedVal8;
          j = np2 - i1;
          tmp14 = i1 + 1;
          tmp15 = - 0.5;
          pxr1[tmp14] = tmp15;
          tmp16 = j + 1;
          tmp17 = - 0.5;
          pxr1[tmp16] = tmp17;
          z = t1 * i1;
          inlinedVal7 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal8 = runtime.safeCall(globalThis.Math.sin(z));
          tmp18 = inlinedVal7 / inlinedVal8;
          tmp19 = 0.5 * tmp18;
          y = - tmp19;
          tmp20 = i1 + 1;
          pxi1[tmp20] = y;
          tmp21 = j + 1;
          tmp22 = - y;
          pxi1[tmp21] = tmp22;
          tmp23 = i1 + 1;
          i1 = tmp23;
          continue loopLabel2;
        }
      }
    }
    fft1[fft$accessorSymbol](pxr)(pxi)(np1);
    np3 = np1;
    pxr2 = pxr;
    pxi2 = pxi;
    i2 = 0;
    zr = 0.0;
    zi = 0.0;
    kr = 0;
    ki = 0;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut2, scrut3, scrut4, tmp14, tmp15, tmp16, element0$1, tmp17, tmp18, element0$2, tmp19;
        scrut2 = i2 >= np3;
        if (scrut2 === true) {
          inlinedVal1 = globalThis.Object.freeze([
            zr,
            zi
          ]);
          break inlinedLbl3
        }
        {
          let inlinedVal7, inlinedVal8;
          tmp14 = i2 + 1;
          inlinedVal7 = pxr2.at(tmp14);
          tmp15 = inlinedVal7 - i2;
          inlinedVal8 = runtime.safeCall(globalThis.Math.abs(tmp15));
          scrut3 = zr < inlinedVal8;
          if (scrut3 === true) {
            tmp16 = globalThis.Object.freeze([
              inlinedVal8,
              i2
            ]);
          } else {
            tmp16 = globalThis.Object.freeze([
              zr,
              kr
            ]);
          }
          if (runtime.Tuple.isArrayLike(tmp16) && tmp16.length === 2) {
            let inlinedVal9, inlinedVal10;
            element0$1 = runtime.Tuple.get(tmp16, 0);
            tmp17 = i2 + 1;
            inlinedVal9 = pxi2.at(tmp17);
            inlinedVal10 = runtime.safeCall(globalThis.Math.abs(inlinedVal9));
            scrut4 = zi < inlinedVal10;
            if (scrut4 === true) {
              tmp18 = globalThis.Object.freeze([
                inlinedVal10,
                i2
              ]);
            } else {
              tmp18 = globalThis.Object.freeze([
                zi,
                ki
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp18) && tmp18.length === 2) {
              element0$2 = runtime.Tuple.get(tmp18, 0);
              tmp19 = i2 + 1;
              i2 = tmp19;
              zr = element0$1;
              zi = element0$2;
              kr = undefined;
              ki = undefined;
              continue loopLabel3
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      let inlinedVal7, inlinedVal8;
      element0$ = runtime.Tuple.get(inlinedVal1, 0);
      element1$ = runtime.Tuple.get(inlinedVal1, 1);
      inlinedVal7 = runtime.safeCall(globalThis.Math.abs(element0$));
      inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element1$));
      scrut1 = inlinedVal7 < inlinedVal8;
      if (scrut1 === true) {
        inlinedVal = element1$;
      } else {
        inlinedVal = element0$;
      }
      tmp = i + 1;
      tmp1 = np * 2;
      tmp2 = loop_np_loop_np$tailrec$loop_np$tailrec(tmp, tmp1);
      return fft1.Cons(inlinedVal, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class fft {
  static {
    fft1 = this
  }
  static get [fft$accessorSymbol]() { return fft.#fft; }
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
    let scrut, tmp, tmp1, tmp2, tmp3;
    tmp = fft.#nSizes();
    scrut = i > tmp;
    if (scrut === true) {
      return fft.Nil
    }
    {
      let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, element1$, element0$, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, kr, ki, inlinedVal1, inlinedVal2, tmp11, tmp12, tmp13, tmp14, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6;
      np1 = np;
      tmp11 = np / 2;
      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp11));
      npm = inlinedVal3 - 1;
      tmp4 = np + 2;
      tmp12 = [];
      arr = tmp12;
      i3 = 0;
      n = tmp4;
      x = 0.0;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut2, tmp15;
          scrut2 = i3 == n;
          if (scrut2 === true) {
            inlinedVal4 = arr;
            break inlinedLbl
          }
          arr[i3] = x;
          tmp15 = i3 + 1;
          i3 = tmp15;
          continue loopLabel;
        }
      }
      inlinedVal2 = inlinedVal4;
      pxr = inlinedVal4;
      tmp5 = np + 2;
      tmp13 = [];
      arr1 = tmp13;
      i4 = 0;
      n1 = tmp5;
      x1 = 0.0;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut2, tmp15;
          scrut2 = i4 == n1;
          if (scrut2 === true) {
            inlinedVal5 = arr1;
            break inlinedLbl1
          }
          arr1[i4] = x1;
          tmp15 = i4 + 1;
          i4 = tmp15;
          continue loopLabel1;
        }
      }
      pxi = inlinedVal5;
      t = 3.141592653589793 / np;
      tmp6 = np - 1.0;
      tmp7 = tmp6 * 0.5;
      inlinedVal2[1] = tmp7;
      inlinedVal5[1] = 0.0;
      tmp14 = np / 2;
      inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp14));
      tmp8 = inlinedVal6 + 1;
      tmp9 = - 0.5;
      inlinedVal2[tmp8] = tmp9;
      tmp10 = inlinedVal6 + 1;
      inlinedVal5[tmp10] = 0.0;
      np2 = np;
      npm1 = npm;
      pxr1 = inlinedVal2;
      pxi1 = inlinedVal5;
      t1 = t;
      i1 = 1;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut2, j, z, y, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
          scrut2 = i1 > npm1;
          if (scrut2 === true) {
            break inlinedLbl2
          }
          {
            let inlinedVal7, inlinedVal8;
            j = np2 - i1;
            tmp15 = i1 + 1;
            tmp16 = - 0.5;
            pxr1[tmp15] = tmp16;
            tmp17 = j + 1;
            tmp18 = - 0.5;
            pxr1[tmp17] = tmp18;
            z = t1 * i1;
            inlinedVal7 = runtime.safeCall(globalThis.Math.cos(z));
            inlinedVal8 = runtime.safeCall(globalThis.Math.sin(z));
            tmp19 = inlinedVal7 / inlinedVal8;
            tmp20 = 0.5 * tmp19;
            y = - tmp20;
            tmp21 = i1 + 1;
            pxi1[tmp21] = y;
            tmp22 = j + 1;
            tmp23 = - y;
            pxi1[tmp22] = tmp23;
            tmp24 = i1 + 1;
            i1 = tmp24;
            continue loopLabel2;
          }
        }
      }
      fft1.#fft(pxr)(pxi)(np1);
      np3 = np1;
      pxr2 = pxr;
      pxi2 = pxi;
      i2 = 0;
      zr = 0.0;
      zi = 0.0;
      kr = 0;
      ki = 0;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut2, scrut3, scrut4, tmp15, tmp16, tmp17, element0$1, tmp18, tmp19, element0$2, tmp20;
          scrut2 = i2 >= np3;
          if (scrut2 === true) {
            inlinedVal1 = globalThis.Object.freeze([
              zr,
              zi
            ]);
            break inlinedLbl3
          }
          {
            let inlinedVal7, inlinedVal8;
            tmp15 = i2 + 1;
            inlinedVal7 = pxr2.at(tmp15);
            tmp16 = inlinedVal7 - i2;
            inlinedVal8 = runtime.safeCall(globalThis.Math.abs(tmp16));
            scrut3 = zr < inlinedVal8;
            if (scrut3 === true) {
              tmp17 = globalThis.Object.freeze([
                inlinedVal8,
                i2
              ]);
            } else {
              tmp17 = globalThis.Object.freeze([
                zr,
                kr
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp17) && tmp17.length === 2) {
              let inlinedVal9, inlinedVal10;
              element0$1 = runtime.Tuple.get(tmp17, 0);
              tmp18 = i2 + 1;
              inlinedVal9 = pxi2.at(tmp18);
              inlinedVal10 = runtime.safeCall(globalThis.Math.abs(inlinedVal9));
              scrut4 = zi < inlinedVal10;
              if (scrut4 === true) {
                tmp19 = globalThis.Object.freeze([
                  inlinedVal10,
                  i2
                ]);
              } else {
                tmp19 = globalThis.Object.freeze([
                  zi,
                  ki
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp19) && tmp19.length === 2) {
                element0$2 = runtime.Tuple.get(tmp19, 0);
                tmp20 = i2 + 1;
                i2 = tmp20;
                zr = element0$1;
                zi = element0$2;
                kr = undefined;
                ki = undefined;
                continue loopLabel3
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
        let inlinedVal7, inlinedVal8;
        element0$ = runtime.Tuple.get(inlinedVal1, 0);
        element1$ = runtime.Tuple.get(inlinedVal1, 1);
        inlinedVal7 = runtime.safeCall(globalThis.Math.abs(element0$));
        inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element1$));
        scrut1 = inlinedVal7 < inlinedVal8;
        if (scrut1 === true) {
          inlinedVal = element1$;
        } else {
          inlinedVal = element0$;
        }
        tmp1 = i + 1;
        tmp2 = np * 2;
        tmp3 = fft.#loop_np$tailrec(tmp1, tmp2);
        return fft.Cons(inlinedVal, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fft(px) {
    return (py) => {
      return (np) => {
        let scrut, element1$, element0$, tmp, np1, i, m, inlinedVal;
        np1 = np;
        i = 2;
        m = 1;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut1, tmp1, tmp2;
            scrut1 = i < np1;
            if (scrut1 === true) {
              tmp1 = i + i;
              tmp2 = m + 1;
              i = tmp1;
              m = tmp2;
              continue loopLabel
            }
            inlinedVal = globalThis.Object.freeze([
              i,
              m
            ]);
            break inlinedLbl;
          }
        }
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
          let px1, py1, n, m1, k, n2, px2, py2, n1, is_, id, px3, py3, n3, i1, j;
          element0$ = runtime.Tuple.get(inlinedVal, 0);
          element1$ = runtime.Tuple.get(inlinedVal, 1);
          scrut = element0$ != np;
          if (scrut === true) {
            let px4, py4, n4, i2;
            tmp = np + 1;
            px4 = px;
            py4 = py;
            n4 = element0$;
            i2 = tmp;
            inlinedLbl1: {
              loopLabel1: while (true) {
                let scrut1, tmp1;
                scrut1 = i2 > n4;
                if (scrut1 === true) {
                  break inlinedLbl1
                }
                px4[i2] = 0.0;
                py4[i2] = 0.0;
                tmp1 = i2 + 1;
                i2 = tmp1;
                continue loopLabel1;
              }
            }
          }
          px1 = px;
          py1 = py;
          n = element0$;
          m1 = element1$;
          k = 1;
          n2 = element0$;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut1, e, tmp1;
              scrut1 = k >= m1;
              if (scrut1 === true) {
                break inlinedLbl1
              }
              {
                let inlinedVal1, tmp2, tmp3, inlinedVal2, px4, py4, n4, n21, n41, e1, j1, a, inlinedVal3;
                tmp3 = n2 / 4;
                inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp3));
                inlinedVal1 = 2.0 * 3.141592653589793;
                e = inlinedVal1 / n2;
                px4 = px1;
                py4 = py1;
                n4 = n;
                n21 = n2;
                n41 = inlinedVal2;
                e1 = e;
                j1 = 1;
                a = 0.0;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut2, a3, tmp4, tmp5, tmp6;
                    scrut2 = j1 > n41;
                    if (scrut2 === true) {
                      break inlinedLbl2
                    }
                    {
                      let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, px5, py5, n5, n22, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                      a3 = 3.0 * a;
                      inlinedVal4 = runtime.safeCall(globalThis.Math.cos(a));
                      inlinedVal5 = runtime.safeCall(globalThis.Math.sin(a));
                      inlinedVal6 = runtime.safeCall(globalThis.Math.cos(a3));
                      inlinedVal7 = runtime.safeCall(globalThis.Math.sin(a3));
                      tmp4 = 2 * n21;
                      px5 = px4;
                      py5 = py4;
                      n5 = n4;
                      n22 = n21;
                      n42 = n41;
                      j2 = j1;
                      cc1 = inlinedVal4;
                      ss1 = inlinedVal5;
                      cc3 = inlinedVal6;
                      ss3 = inlinedVal7;
                      is_1 = j1;
                      id1 = tmp4;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let scrut3, tmp7, tmp8, tmp9, tmp10;
                          scrut3 = is_1 >= n5;
                          if (scrut3 === true) {
                            break inlinedLbl3
                          }
                          {
                            let px6, py6, n6, n43, cc11, ss11, cc31, ss31, id2, i0;
                            px6 = px5;
                            py6 = py5;
                            n6 = n5;
                            n43 = n42;
                            cc11 = cc1;
                            ss11 = ss1;
                            cc31 = cc3;
                            ss31 = ss3;
                            id2 = id1;
                            i0 = is_1;
                            inlinedLbl4: {
                              loopLabel4: while (true) {
                                let scrut4, i11, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28;
                                scrut4 = i0 >= n6;
                                if (scrut4 === true) {
                                  break inlinedLbl4
                                }
                                {
                                  let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23;
                                  i11 = i0 + n43;
                                  i2 = i11 + n43;
                                  i3 = i2 + n43;
                                  inlinedVal8 = px6.at(i0);
                                  inlinedVal9 = px6.at(i2);
                                  r1 = inlinedVal8 - inlinedVal9;
                                  inlinedVal10 = px6.at(i0);
                                  inlinedVal11 = px6.at(i2);
                                  tmp11 = inlinedVal10 + inlinedVal11;
                                  px6[i0] = tmp11;
                                  inlinedVal12 = px6.at(i11);
                                  inlinedVal13 = px6.at(i3);
                                  r2 = inlinedVal12 - inlinedVal13;
                                  inlinedVal14 = px6.at(i11);
                                  inlinedVal15 = px6.at(i3);
                                  tmp12 = inlinedVal14 + inlinedVal15;
                                  px6[i11] = tmp12;
                                  inlinedVal16 = py6.at(i0);
                                  inlinedVal17 = py6.at(i2);
                                  s1 = inlinedVal16 - inlinedVal17;
                                  inlinedVal18 = py6.at(i0);
                                  inlinedVal19 = py6.at(i2);
                                  tmp13 = inlinedVal18 + inlinedVal19;
                                  py6[i0] = tmp13;
                                  inlinedVal20 = py6.at(i11);
                                  inlinedVal21 = py6.at(i3);
                                  s2 = inlinedVal20 - inlinedVal21;
                                  inlinedVal22 = py6.at(i11);
                                  inlinedVal23 = py6.at(i3);
                                  tmp14 = inlinedVal22 + inlinedVal23;
                                  py6[i11] = tmp14;
                                  s3 = r1 - s2;
                                  r1b = r1 + s2;
                                  s2b = r2 - s1;
                                  r2b = r2 + s1;
                                  tmp15 = r1b * cc11;
                                  tmp16 = s2b * ss11;
                                  tmp17 = tmp15 - tmp16;
                                  px6[i2] = tmp17;
                                  tmp18 = - s2b;
                                  tmp19 = tmp18 * cc11;
                                  tmp20 = r1b * ss11;
                                  tmp21 = tmp19 - tmp20;
                                  py6[i2] = tmp21;
                                  tmp22 = s3 * cc31;
                                  tmp23 = r2b * ss31;
                                  tmp24 = tmp22 + tmp23;
                                  px6[i3] = tmp24;
                                  tmp25 = r2b * cc31;
                                  tmp26 = s3 * ss31;
                                  tmp27 = tmp25 - tmp26;
                                  py6[i3] = tmp27;
                                  tmp28 = i0 + id2;
                                  i0 = tmp28;
                                  continue loopLabel4;
                                }
                              }
                            }
                            tmp7 = 2 * id1;
                            tmp8 = tmp7 - n22;
                            tmp9 = tmp8 + j2;
                            tmp10 = 4 * id1;
                            is_1 = tmp9;
                            id1 = tmp10;
                            continue loopLabel3;
                          }
                        }
                      }
                      tmp5 = j1 + 1;
                      tmp6 = e1 * j1;
                      j1 = tmp5;
                      a = tmp6;
                      continue loopLabel2;
                    }
                  }
                }
                tmp1 = k + 1;
                tmp2 = n2 / 2;
                inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp2));
                k = tmp1;
                n2 = inlinedVal3;
                continue loopLabel1;
              }
            }
          }
          px2 = px;
          py2 = py;
          n1 = element0$;
          is_ = 1;
          id = 4;
          inlinedLbl2: {
            loopLabel2: while (true) {
              let scrut1, tmp1, tmp2, tmp3;
              scrut1 = is_ >= n1;
              if (scrut1 === true) {
                break inlinedLbl2
              }
              {
                let px4, py4, n4, id1, i0;
                px4 = px2;
                py4 = py2;
                n4 = n1;
                id1 = id;
                i0 = is_;
                inlinedLbl3: {
                  loopLabel3: while (true) {
                    let scrut2, i11, tmp4, tmp5, tmp6, tmp7, tmp8;
                    scrut2 = i0 > n4;
                    if (scrut2 === true) {
                      break inlinedLbl3
                    }
                    {
                      let inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
                      i11 = i0 + 1;
                      inlinedVal1 = px4.at(i0);
                      inlinedVal2 = px4.at(i11);
                      tmp4 = inlinedVal1 + inlinedVal2;
                      px4[i0] = tmp4;
                      inlinedVal3 = px4.at(i11);
                      tmp5 = inlinedVal1 - inlinedVal3;
                      px4[i11] = tmp5;
                      inlinedVal4 = py4.at(i0);
                      inlinedVal5 = py4.at(i11);
                      tmp6 = inlinedVal4 + inlinedVal5;
                      py4[i0] = tmp6;
                      inlinedVal6 = py4.at(i11);
                      tmp7 = inlinedVal4 - inlinedVal6;
                      py4[i11] = tmp7;
                      tmp8 = i0 + id1;
                      i0 = tmp8;
                      continue loopLabel3;
                    }
                  }
                }
                tmp1 = 2 * id;
                tmp2 = tmp1 - 1;
                tmp3 = 4 * id;
                is_ = tmp2;
                id = tmp3;
                continue loopLabel2;
              }
            }
          }
          px3 = px;
          py3 = py;
          n3 = element0$;
          i1 = 1;
          j = 1;
          inlinedLbl3: {
            loopLabel3: while (true) {
              let scrut1, scrut2, tmp1;
              scrut1 = i1 >= n3;
              if (scrut1 === true) {
                break inlinedLbl3
              }
              {
                let tmp2, inlinedVal1, k1, j1, inlinedVal2;
                scrut2 = i1 < j;
                if (scrut2 === true) {
                  let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
                  inlinedVal3 = px3.at(j);
                  inlinedVal4 = px3.at(i1);
                  px3[j] = inlinedVal4;
                  px3[i1] = inlinedVal3;
                  inlinedVal5 = py3.at(j);
                  inlinedVal6 = py3.at(i1);
                  py3[j] = inlinedVal6;
                  py3[i1] = inlinedVal5;
                }
                tmp2 = n3 / 2;
                inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
                k1 = inlinedVal1;
                j1 = j;
                inlinedLbl4: {
                  loopLabel4: while (true) {
                    let scrut3, tmp3;
                    scrut3 = k1 < j1;
                    if (scrut3 === true) {
                      let tmp4, inlinedVal3;
                      tmp4 = k1 / 2;
                      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp4));
                      tmp3 = j1 - k1;
                      k1 = inlinedVal3;
                      j1 = tmp3;
                      continue loopLabel4
                    }
                    inlinedVal2 = j1 + k1;
                    break inlinedLbl4;
                  }
                }
                tmp1 = i1 + 1;
                i1 = tmp1;
                j = inlinedVal2;
                continue loopLabel3;
              }
            }
          }
          return element0$
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #nSizes() {
    return 14
  }
  static main() {
    return main_loop_np_loop_np$tailrec$loop_np$tailrec(1, 16)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "fft"];
});
export { fft1 as _$_modulePrivate_$_fft };
export { main_loop_np_loop_np$tailrec$loop_np$tailrec as _$_modulePrivate_$_main_loop_np_loop_np$tailrec$loop_np$tailrec };
export { loop_np_loop_np$tailrec$loop_np$tailrec as _$_modulePrivate_$_loop_np_loop_np$tailrec$loop_np$tailrec };
export default fft1;
