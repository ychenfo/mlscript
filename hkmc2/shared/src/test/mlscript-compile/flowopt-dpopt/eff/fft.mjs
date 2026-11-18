const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let fft1, main_main_loop_np$loop_np$tailrec$main_loop_np$loop_np$tailrec, main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2, main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2, main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2$worker, main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2$worker;
main_main_loop_np$loop_np$tailrec$main_loop_np$loop_np$tailrec = function main_main_loop_np$loop_np$tailrec$main_loop_np$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let np1, inlinedVal, npm, pxr, pxi, t, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal1, np2, npm1, pxr1, pxi1, t1, i1, tmp10, tmp11, tmp12, tmp13, inlinedVal2, arr, i2, n, x, inlinedVal3, arr1, i3, n1, x1, inlinedVal4, inlinedVal5, np3, i4, m, inlinedVal6, np4, pxr2, pxi2, i5, zr, zi, inlinedVal7;
    np1 = np;
    tmp10 = np / 2;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
    npm = inlinedVal2 - 1;
    tmp3 = np + 2;
    tmp11 = [];
    arr = tmp11;
    i2 = 0;
    n = tmp3;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp14;
        scrut1 = i2 == n;
        if (scrut1 === true) {
          inlinedVal3 = arr;
          break inlinedLbl
        }
        arr[i2] = x;
        tmp14 = i2 + 1;
        i2 = tmp14;
        continue loopLabel;
      }
    }
    inlinedVal1 = inlinedVal3;
    pxr = inlinedVal3;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i3 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut1, tmp14;
        scrut1 = i3 == n1;
        if (scrut1 === true) {
          inlinedVal4 = arr1;
          break inlinedLbl1
        }
        arr1[i3] = x1;
        tmp14 = i3 + 1;
        i3 = tmp14;
        continue loopLabel1;
      }
    }
    pxi = inlinedVal4;
    t = 3.141592653589793 / np;
    tmp5 = np - 1.0;
    tmp6 = tmp5 * 0.5;
    inlinedVal1[1] = tmp6;
    inlinedVal4[1] = 0.0;
    tmp13 = np / 2;
    inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp13));
    tmp7 = inlinedVal5 + 1;
    tmp8 = - 0.5;
    inlinedVal1[tmp7] = tmp8;
    tmp9 = inlinedVal5 + 1;
    inlinedVal4[tmp9] = 0.0;
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal1;
    pxi1 = inlinedVal4;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut1, j, z, y, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
        scrut1 = i1 > npm1;
        if (scrut1 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal8, inlinedVal9;
          j = np2 - i1;
          tmp14 = i1 + 1;
          tmp15 = - 0.5;
          pxr1[tmp14] = tmp15;
          tmp16 = j + 1;
          tmp17 = - 0.5;
          pxr1[tmp16] = tmp17;
          z = t1 * i1;
          inlinedVal8 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal9 = runtime.safeCall(globalThis.Math.sin(z));
          tmp18 = inlinedVal8 / inlinedVal9;
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
    np3 = np1;
    i4 = 2;
    m = 1;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut1, tmp14, tmp15;
        scrut1 = i4 < np3;
        if (scrut1 === true) {
          tmp14 = i4 + i4;
          tmp15 = m + 1;
          i4 = tmp14;
          m = tmp15;
          continue loopLabel3
        }
        inlinedVal6 = main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2(i4, m);
        break inlinedLbl3;
      }
    }
    inlinedVal6(undefined, np1, undefined, pxr, pxi);
    np4 = np1;
    pxr2 = pxr;
    pxi2 = pxi;
    i5 = 0;
    zr = 0.0;
    zi = 0.0;
    inlinedLbl4: {
      loopLabel4: while (true) {
        let scrut1, scrut2, tmp14, tmp15;
        scrut1 = i5 >= np4;
        if (scrut1 === true) {
          inlinedVal7 = main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2(zr, zi);
          break inlinedLbl4
        }
        {
          let inlinedVal8, inlinedVal9;
          tmp14 = i5 + 1;
          inlinedVal8 = pxr2.at(tmp14);
          tmp15 = inlinedVal8 - i5;
          inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp15));
          scrut2 = zr < inlinedVal9;
          if (scrut2 === true) {
            let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
            fv_tmp = i5 + 1;
            inlinedVal10 = pxi2.at(fv_tmp);
            inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
            fv_scrut = zi < inlinedVal11;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i5 + 1;
              i5 = fv_tmp1;
              zr = inlinedVal9;
              zi = inlinedVal11;
              continue loopLabel4
            }
            {
              let fv_tmp1;
              fv_tmp1 = i5 + 1;
              i5 = fv_tmp1;
              zr = inlinedVal9;
              continue loopLabel4;
            }
          }
          {
            let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
            fv_tmp = i5 + 1;
            inlinedVal10 = pxi2.at(fv_tmp);
            inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
            fv_scrut = zi < inlinedVal11;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i5 + 1;
              i5 = fv_tmp1;
              zi = inlinedVal11;
              continue loopLabel4
            }
            {
              let fv_tmp1;
              fv_tmp1 = i5 + 1;
              i5 = fv_tmp1;
              continue loopLabel4;
            }
          }
        }
      }
    }
    inlinedVal = inlinedVal7(undefined);
    tmp = i + 1;
    tmp1 = np * 2;
    tmp2 = main_main_loop_np$loop_np$tailrec$main_loop_np$loop_np$tailrec(tmp, tmp1);
    return fft1.Cons(inlinedVal, tmp2);
  }
};
main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2 = function main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut) => {
    return main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut)
  }
};
main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2$worker = function main_main_loop_np$loop_np$tailrec_main_loop_np_test_loop_i2$loop_i2_main_loop_np_test$scrut_tup2$main_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut) {
  let inlinedVal, inlinedVal1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tup2_0));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tup2_1));
  fv_scrut = inlinedVal < inlinedVal1;
  if (fv_scrut === true) {
    return tup2_1
  }
  return tup2_0;
};
main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2 = function main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2$worker = function main_main_loop_np$loop_np$tailrec_main_loop_np_test_fft$scrut_tup2$main_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  let px, py, n, m, k, n2, px1, py1, n1, is_, id, px2, py2, n3, i, j;
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    let px3, py3, n4, i1;
    fv_tmp = fv_np + 1;
    px3 = fv_px;
    py3 = fv_py;
    n4 = tup2_0;
    i1 = fv_tmp;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = i1 > n4;
        if (scrut === true) {
          break inlinedLbl
        }
        px3[i1] = 0.0;
        py3[i1] = 0.0;
        tmp = i1 + 1;
        i1 = tmp;
        continue loopLabel;
      }
    }
  }
  px = fv_px;
  py = fv_py;
  n = tup2_0;
  m = tup2_1;
  k = 1;
  n2 = tup2_0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, e, tmp;
      scrut = k >= m;
      if (scrut === true) {
        break inlinedLbl
      }
      {
        let inlinedVal, tmp1, tmp2, inlinedVal1, px3, py3, n4, n21, n41, e1, j1, a, inlinedVal2;
        tmp2 = n2 / 4;
        inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
        inlinedVal = 2.0 * 3.141592653589793;
        e = inlinedVal / n2;
        px3 = px;
        py3 = py;
        n4 = n;
        n21 = n2;
        n41 = inlinedVal1;
        e1 = e;
        j1 = 1;
        a = 0.0;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut1, a3, tmp3, tmp4, tmp5;
            scrut1 = j1 > n41;
            if (scrut1 === true) {
              break inlinedLbl1
            }
            {
              let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, px4, py4, n5, n22, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
              a3 = 3.0 * a;
              inlinedVal3 = runtime.safeCall(globalThis.Math.cos(a));
              inlinedVal4 = runtime.safeCall(globalThis.Math.sin(a));
              inlinedVal5 = runtime.safeCall(globalThis.Math.cos(a3));
              inlinedVal6 = runtime.safeCall(globalThis.Math.sin(a3));
              tmp3 = 2 * n21;
              px4 = px3;
              py4 = py3;
              n5 = n4;
              n22 = n21;
              n42 = n41;
              j2 = j1;
              cc1 = inlinedVal3;
              ss1 = inlinedVal4;
              cc3 = inlinedVal5;
              ss3 = inlinedVal6;
              is_1 = j1;
              id1 = tmp3;
              inlinedLbl2: {
                loopLabel2: while (true) {
                  let scrut2, tmp6, tmp7, tmp8, tmp9;
                  scrut2 = is_1 >= n5;
                  if (scrut2 === true) {
                    break inlinedLbl2
                  }
                  {
                    let px5, py5, n6, n43, cc11, ss11, cc31, ss31, id2, i0;
                    px5 = px4;
                    py5 = py4;
                    n6 = n5;
                    n43 = n42;
                    cc11 = cc1;
                    ss11 = ss1;
                    cc31 = cc3;
                    ss31 = ss3;
                    id2 = id1;
                    i0 = is_1;
                    inlinedLbl3: {
                      loopLabel3: while (true) {
                        let scrut3, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
                        scrut3 = i0 >= n6;
                        if (scrut3 === true) {
                          break inlinedLbl3
                        }
                        {
                          let inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22;
                          i1 = i0 + n43;
                          i2 = i1 + n43;
                          i3 = i2 + n43;
                          inlinedVal7 = px5.at(i0);
                          inlinedVal8 = px5.at(i2);
                          r1 = inlinedVal7 - inlinedVal8;
                          inlinedVal9 = px5.at(i0);
                          inlinedVal10 = px5.at(i2);
                          tmp10 = inlinedVal9 + inlinedVal10;
                          px5[i0] = tmp10;
                          inlinedVal11 = px5.at(i1);
                          inlinedVal12 = px5.at(i3);
                          r2 = inlinedVal11 - inlinedVal12;
                          inlinedVal13 = px5.at(i1);
                          inlinedVal14 = px5.at(i3);
                          tmp11 = inlinedVal13 + inlinedVal14;
                          px5[i1] = tmp11;
                          inlinedVal15 = py5.at(i0);
                          inlinedVal16 = py5.at(i2);
                          s1 = inlinedVal15 - inlinedVal16;
                          inlinedVal17 = py5.at(i0);
                          inlinedVal18 = py5.at(i2);
                          tmp12 = inlinedVal17 + inlinedVal18;
                          py5[i0] = tmp12;
                          inlinedVal19 = py5.at(i1);
                          inlinedVal20 = py5.at(i3);
                          s2 = inlinedVal19 - inlinedVal20;
                          inlinedVal21 = py5.at(i1);
                          inlinedVal22 = py5.at(i3);
                          tmp13 = inlinedVal21 + inlinedVal22;
                          py5[i1] = tmp13;
                          s3 = r1 - s2;
                          r1b = r1 + s2;
                          s2b = r2 - s1;
                          r2b = r2 + s1;
                          tmp14 = r1b * cc11;
                          tmp15 = s2b * ss11;
                          tmp16 = tmp14 - tmp15;
                          px5[i2] = tmp16;
                          tmp17 = - s2b;
                          tmp18 = tmp17 * cc11;
                          tmp19 = r1b * ss11;
                          tmp20 = tmp18 - tmp19;
                          py5[i2] = tmp20;
                          tmp21 = s3 * cc31;
                          tmp22 = r2b * ss31;
                          tmp23 = tmp21 + tmp22;
                          px5[i3] = tmp23;
                          tmp24 = r2b * cc31;
                          tmp25 = s3 * ss31;
                          tmp26 = tmp24 - tmp25;
                          py5[i3] = tmp26;
                          tmp27 = i0 + id2;
                          i0 = tmp27;
                          continue loopLabel3;
                        }
                      }
                    }
                    tmp6 = 2 * id1;
                    tmp7 = tmp6 - n22;
                    tmp8 = tmp7 + j2;
                    tmp9 = 4 * id1;
                    is_1 = tmp8;
                    id1 = tmp9;
                    continue loopLabel2;
                  }
                }
              }
              tmp4 = j1 + 1;
              tmp5 = e1 * j1;
              j1 = tmp4;
              a = tmp5;
              continue loopLabel1;
            }
          }
        }
        tmp = k + 1;
        tmp1 = n2 / 2;
        inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp1));
        k = tmp;
        n2 = inlinedVal2;
        continue loopLabel;
      }
    }
  }
  px1 = fv_px;
  py1 = fv_py;
  n1 = tup2_0;
  is_ = 1;
  id = 4;
  inlinedLbl1: {
    loopLabel1: while (true) {
      let scrut, tmp, tmp1, tmp2;
      scrut = is_ >= n1;
      if (scrut === true) {
        break inlinedLbl1
      }
      {
        let px3, py3, n4, id1, i0;
        px3 = px1;
        py3 = py1;
        n4 = n1;
        id1 = id;
        i0 = is_;
        inlinedLbl2: {
          loopLabel2: while (true) {
            let scrut1, i1, tmp3, tmp4, tmp5, tmp6, tmp7;
            scrut1 = i0 > n4;
            if (scrut1 === true) {
              break inlinedLbl2
            }
            {
              let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
              i1 = i0 + 1;
              inlinedVal = px3.at(i0);
              inlinedVal1 = px3.at(i1);
              tmp3 = inlinedVal + inlinedVal1;
              px3[i0] = tmp3;
              inlinedVal2 = px3.at(i1);
              tmp4 = inlinedVal - inlinedVal2;
              px3[i1] = tmp4;
              inlinedVal3 = py3.at(i0);
              inlinedVal4 = py3.at(i1);
              tmp5 = inlinedVal3 + inlinedVal4;
              py3[i0] = tmp5;
              inlinedVal5 = py3.at(i1);
              tmp6 = inlinedVal3 - inlinedVal5;
              py3[i1] = tmp6;
              tmp7 = i0 + id1;
              i0 = tmp7;
              continue loopLabel2;
            }
          }
        }
        tmp = 2 * id;
        tmp1 = tmp - 1;
        tmp2 = 4 * id;
        is_ = tmp1;
        id = tmp2;
        continue loopLabel1;
      }
    }
  }
  px2 = fv_px;
  py2 = fv_py;
  n3 = tup2_0;
  i = 1;
  j = 1;
  inlinedLbl2: {
    loopLabel2: while (true) {
      let scrut, scrut1, tmp;
      scrut = i >= n3;
      if (scrut === true) {
        break inlinedLbl2
      }
      {
        let tmp1, inlinedVal, k1, j1, inlinedVal1;
        scrut1 = i < j;
        if (scrut1 === true) {
          let inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
          inlinedVal2 = px2.at(j);
          inlinedVal3 = px2.at(i);
          px2[j] = inlinedVal3;
          px2[i] = inlinedVal2;
          inlinedVal4 = py2.at(j);
          inlinedVal5 = py2.at(i);
          py2[j] = inlinedVal5;
          py2[i] = inlinedVal4;
        }
        tmp1 = n3 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
        k1 = inlinedVal;
        j1 = j;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut2, tmp2;
            scrut2 = k1 < j1;
            if (scrut2 === true) {
              let tmp3, inlinedVal2;
              tmp3 = k1 / 2;
              inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp3));
              tmp2 = j1 - k1;
              k1 = inlinedVal2;
              j1 = tmp2;
              continue loopLabel3
            }
            inlinedVal1 = j1 + k1;
            break inlinedLbl3;
          }
        }
        tmp = i + 1;
        i = tmp;
        j = inlinedVal1;
        continue loopLabel2;
      }
    }
  }
  return tup2_0
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
  static main() {
    return main_main_loop_np$loop_np$tailrec$main_loop_np$loop_np$tailrec(1, 16)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "fft"];
});
export default fft1;
