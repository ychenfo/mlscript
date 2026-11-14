const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let fft1;
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
  static #aUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
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
  static #test(np) {
    let enp, npm, pxr, pxi, t, n2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, element1$, element0$, tmp9, tmp10, np1, npm1, pxr1, pxi1, t1, i, np2, pxr2, pxi2, i1, zr, zi, kr, ki, inlinedVal;
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
    np1 = np;
    npm1 = npm;
    pxr1 = pxr;
    pxi1 = pxi;
    t1 = t;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, j, z, y, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
        scrut1 = i > npm1;
        if (scrut1 === true) {
          break inlinedLbl
        }
        {
          let inlinedVal1, inlinedVal2;
          j = np1 - i;
          tmp11 = i + 1;
          tmp12 = - 0.5;
          pxr1[tmp11] = tmp12;
          tmp13 = j + 1;
          tmp14 = - 0.5;
          pxr1[tmp13] = tmp14;
          z = t1 * i;
          inlinedVal1 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal2 = runtime.safeCall(globalThis.Math.sin(z));
          tmp15 = inlinedVal1 / inlinedVal2;
          tmp16 = 0.5 * tmp15;
          y = - tmp16;
          tmp17 = i + 1;
          pxi1[tmp17] = y;
          tmp18 = j + 1;
          tmp19 = - y;
          pxi1[tmp18] = tmp19;
          tmp20 = i + 1;
          i = tmp20;
          continue loopLabel;
        }
      }
    }
    fft.#fft(pxr)(pxi)(np);
    np2 = np;
    pxr2 = pxr;
    pxi2 = pxi;
    i1 = 0;
    zr = 0.0;
    zi = 0.0;
    kr = 0;
    ki = 0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut1, scrut2, scrut3, tmp11, tmp12, tmp13, element1$1, element0$1, tmp14, tmp15, element1$2, element0$2, tmp16;
        scrut1 = i1 >= np2;
        if (scrut1 === true) {
          inlinedVal = globalThis.Object.freeze([
            zr,
            zi
          ]);
          break inlinedLbl1
        }
        {
          let inlinedVal1, inlinedVal2;
          tmp11 = i1 + 1;
          inlinedVal1 = pxr2.at(tmp11);
          tmp12 = inlinedVal1 - i1;
          inlinedVal2 = runtime.safeCall(globalThis.Math.abs(tmp12));
          scrut2 = zr < inlinedVal2;
          if (scrut2 === true) {
            tmp13 = globalThis.Object.freeze([
              inlinedVal2,
              i1
            ]);
          } else {
            tmp13 = globalThis.Object.freeze([
              zr,
              kr
            ]);
          }
          if (runtime.Tuple.isArrayLike(tmp13) && tmp13.length === 2) {
            let inlinedVal3, inlinedVal4;
            element0$1 = runtime.Tuple.get(tmp13, 0);
            element1$1 = runtime.Tuple.get(tmp13, 1);
            tmp14 = i1 + 1;
            inlinedVal3 = pxi2.at(tmp14);
            inlinedVal4 = runtime.safeCall(globalThis.Math.abs(inlinedVal3));
            scrut3 = zi < inlinedVal4;
            if (scrut3 === true) {
              tmp15 = globalThis.Object.freeze([
                inlinedVal4,
                i1
              ]);
            } else {
              tmp15 = globalThis.Object.freeze([
                zi,
                ki
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp15) && tmp15.length === 2) {
              element0$2 = runtime.Tuple.get(tmp15, 0);
              element1$2 = runtime.Tuple.get(tmp15, 1);
              tmp16 = i1 + 1;
              i1 = tmp16;
              zr = element0$1;
              zi = element0$2;
              kr = element1$1;
              ki = element1$2;
              continue loopLabel1
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
    }
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
export { fft1 as _$_modulePrivate_$_fft };
export default fft1;
