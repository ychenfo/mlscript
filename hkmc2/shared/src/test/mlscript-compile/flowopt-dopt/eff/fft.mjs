const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let loop, loop_i, fft1, main_doit_loop_np_test$scrut_tup2, main_doit_loop_np_test_fft$scrut_tup2, doit_loop_np_test_fft$scrut_tup2, doit_loop_np_test$scrut_tup2, loop_np_test$scrut_tup2, loop_np_test_fft$scrut_tup2, loop_i$tailrec, loop_is2$tailrec, loop_k$tailrec, doit_loop_np$loop_np$tailrec, main_doit_loop_np$loop_np$tailrec, loop_np_test_fft$scrut_tup2$worker, loop_np_test$scrut_tup2$worker, doit_loop_np_test$scrut_tup2$worker, doit_loop_np_test_fft$scrut_tup2$worker, main_doit_loop_np_test_fft$scrut_tup2$worker, main_doit_loop_np_test$scrut_tup2$worker;
loop_i$tailrec = function loop_i$tailrec(px, py, n, i, j) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp;
    scrut = i >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let tmp1, inlinedVal, k, j1, inlinedVal1;
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
      inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
      k = inlinedVal;
      j1 = j;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut2, tmp2;
          scrut2 = k < j1;
          if (scrut2 === true) {
            let tmp3, inlinedVal2;
            tmp3 = k / 2;
            inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp3));
            tmp2 = j1 - k;
            k = inlinedVal2;
            j1 = tmp2;
            continue loopLabel1
          }
          inlinedVal1 = j1 + k;
          break inlinedLbl;
        }
      }
      tmp = i + 1;
      i = tmp;
      j = inlinedVal1;
      continue loopLabel;
    }
  }
};
loop_is2$tailrec = function loop_is2$tailrec(px, py, n, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let px1, py1, n1, id1, i0;
      px1 = px;
      py1 = py;
      n1 = n;
      id1 = id;
      i0 = is_;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, i1, tmp3, tmp4, tmp5, tmp6, tmp7;
          scrut1 = i0 > n1;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
            i1 = i0 + 1;
            inlinedVal = px1.at(i0);
            inlinedVal1 = px1.at(i1);
            tmp3 = inlinedVal + inlinedVal1;
            px1[i0] = tmp3;
            inlinedVal2 = px1.at(i1);
            tmp4 = inlinedVal - inlinedVal2;
            px1[i1] = tmp4;
            inlinedVal3 = py1.at(i0);
            inlinedVal4 = py1.at(i1);
            tmp5 = inlinedVal3 + inlinedVal4;
            py1[i0] = tmp5;
            inlinedVal5 = py1.at(i1);
            tmp6 = inlinedVal3 - inlinedVal5;
            py1[i1] = tmp6;
            tmp7 = i0 + id1;
            i0 = tmp7;
            continue loopLabel1;
          }
        }
      }
      tmp = 2 * id;
      tmp1 = tmp - 1;
      tmp2 = 4 * id;
      is_ = tmp1;
      id = tmp2;
      continue loopLabel;
    }
  }
};
loop_k$tailrec = function loop_k$tailrec(px, py, n, m, k, n2) {
  loopLabel: while (true) {
    let scrut, e, tmp;
    scrut = k >= m;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, tmp1, tmp2, inlinedVal1, px1, py1, n1, n21, n4, e1, j, a, inlinedVal2;
      tmp2 = n2 / 4;
      inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
      inlinedVal = 2.0 * 3.141592653589793;
      e = inlinedVal / n2;
      px1 = px;
      py1 = py;
      n1 = n;
      n21 = n2;
      n4 = inlinedVal1;
      e1 = e;
      j = 1;
      a = 0.0;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, a3, tmp3, tmp4, tmp5;
          scrut1 = j > n4;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, px2, py2, n3, n22, n41, j1, cc1, ss1, cc3, ss3, is_, id;
            a3 = 3.0 * a;
            inlinedVal3 = runtime.safeCall(globalThis.Math.cos(a));
            inlinedVal4 = runtime.safeCall(globalThis.Math.sin(a));
            inlinedVal5 = runtime.safeCall(globalThis.Math.cos(a3));
            inlinedVal6 = runtime.safeCall(globalThis.Math.sin(a3));
            tmp3 = 2 * n21;
            px2 = px1;
            py2 = py1;
            n3 = n1;
            n22 = n21;
            n41 = n4;
            j1 = j;
            cc1 = inlinedVal3;
            ss1 = inlinedVal4;
            cc3 = inlinedVal5;
            ss3 = inlinedVal6;
            is_ = j;
            id = tmp3;
            inlinedLbl1: {
              loopLabel2: while (true) {
                let scrut2, tmp6, tmp7, tmp8, tmp9;
                scrut2 = is_ >= n3;
                if (scrut2 === true) {
                  break inlinedLbl1
                }
                {
                  let px3, py3, n5, n42, cc11, ss11, cc31, ss31, id1, i0;
                  px3 = px2;
                  py3 = py2;
                  n5 = n3;
                  n42 = n41;
                  cc11 = cc1;
                  ss11 = ss1;
                  cc31 = cc3;
                  ss31 = ss3;
                  id1 = id;
                  i0 = is_;
                  inlinedLbl2: {
                    loopLabel3: while (true) {
                      let scrut3, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
                      scrut3 = i0 >= n5;
                      if (scrut3 === true) {
                        break inlinedLbl2
                      }
                      {
                        let inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22;
                        i1 = i0 + n42;
                        i2 = i1 + n42;
                        i3 = i2 + n42;
                        inlinedVal7 = px3.at(i0);
                        inlinedVal8 = px3.at(i2);
                        r1 = inlinedVal7 - inlinedVal8;
                        inlinedVal9 = px3.at(i0);
                        inlinedVal10 = px3.at(i2);
                        tmp10 = inlinedVal9 + inlinedVal10;
                        px3[i0] = tmp10;
                        inlinedVal11 = px3.at(i1);
                        inlinedVal12 = px3.at(i3);
                        r2 = inlinedVal11 - inlinedVal12;
                        inlinedVal13 = px3.at(i1);
                        inlinedVal14 = px3.at(i3);
                        tmp11 = inlinedVal13 + inlinedVal14;
                        px3[i1] = tmp11;
                        inlinedVal15 = py3.at(i0);
                        inlinedVal16 = py3.at(i2);
                        s1 = inlinedVal15 - inlinedVal16;
                        inlinedVal17 = py3.at(i0);
                        inlinedVal18 = py3.at(i2);
                        tmp12 = inlinedVal17 + inlinedVal18;
                        py3[i0] = tmp12;
                        inlinedVal19 = py3.at(i1);
                        inlinedVal20 = py3.at(i3);
                        s2 = inlinedVal19 - inlinedVal20;
                        inlinedVal21 = py3.at(i1);
                        inlinedVal22 = py3.at(i3);
                        tmp13 = inlinedVal21 + inlinedVal22;
                        py3[i1] = tmp13;
                        s3 = r1 - s2;
                        r1b = r1 + s2;
                        s2b = r2 - s1;
                        r2b = r2 + s1;
                        tmp14 = r1b * cc11;
                        tmp15 = s2b * ss11;
                        tmp16 = tmp14 - tmp15;
                        px3[i2] = tmp16;
                        tmp17 = - s2b;
                        tmp18 = tmp17 * cc11;
                        tmp19 = r1b * ss11;
                        tmp20 = tmp18 - tmp19;
                        py3[i2] = tmp20;
                        tmp21 = s3 * cc31;
                        tmp22 = r2b * ss31;
                        tmp23 = tmp21 + tmp22;
                        px3[i3] = tmp23;
                        tmp24 = r2b * cc31;
                        tmp25 = s3 * ss31;
                        tmp26 = tmp24 - tmp25;
                        py3[i3] = tmp26;
                        tmp27 = i0 + id1;
                        i0 = tmp27;
                        continue loopLabel3;
                      }
                    }
                  }
                  tmp6 = 2 * id;
                  tmp7 = tmp6 - n22;
                  tmp8 = tmp7 + j1;
                  tmp9 = 4 * id;
                  is_ = tmp8;
                  id = tmp9;
                  continue loopLabel2;
                }
              }
            }
            tmp4 = j + 1;
            tmp5 = e1 * j;
            j = tmp4;
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
};
doit_loop_np$loop_np$tailrec = function doit_loop_np$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let npm, t, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal, inlinedVal1, tmp9, tmp10, tmp11, tmp12, inlinedVal2, arr, i1, n, x, inlinedVal3, arr1, i2, n1, x1, inlinedVal4, inlinedVal5, np1, i3, m, inlinedVal6, np2, pxr, pxi, i4, zr, zi, inlinedVal7;
    tmp9 = np / 2;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp9));
    npm = inlinedVal2 - 1;
    tmp2 = np + 2;
    tmp10 = [];
    arr = tmp10;
    i1 = 0;
    n = tmp2;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp13;
        scrut1 = i1 == n;
        if (scrut1 === true) {
          inlinedVal3 = arr;
          break inlinedLbl
        }
        arr[i1] = x;
        tmp13 = i1 + 1;
        i1 = tmp13;
        continue loopLabel;
      }
    }
    inlinedVal = inlinedVal3;
    tmp3 = np + 2;
    tmp11 = [];
    arr1 = tmp11;
    i2 = 0;
    n1 = tmp3;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut1, tmp13;
        scrut1 = i2 == n1;
        if (scrut1 === true) {
          inlinedVal4 = arr1;
          break inlinedLbl1
        }
        arr1[i2] = x1;
        tmp13 = i2 + 1;
        i2 = tmp13;
        continue loopLabel1;
      }
    }
    inlinedVal1 = inlinedVal4;
    t = 3.141592653589793 / np;
    tmp4 = np - 1.0;
    tmp5 = tmp4 * 0.5;
    inlinedVal[1] = tmp5;
    inlinedVal4[1] = 0.0;
    tmp12 = np / 2;
    inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp12));
    tmp6 = inlinedVal5 + 1;
    tmp7 = - 0.5;
    inlinedVal[tmp6] = tmp7;
    tmp8 = inlinedVal5 + 1;
    inlinedVal4[tmp8] = 0.0;
    loop_i(np, npm, inlinedVal, inlinedVal4, t, 1);
    np1 = np;
    i3 = 2;
    m = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut1, tmp13, tmp14;
        scrut1 = i3 < np1;
        if (scrut1 === true) {
          tmp13 = i3 + i3;
          tmp14 = m + 1;
          i3 = tmp13;
          m = tmp14;
          continue loopLabel2
        }
        inlinedVal6 = doit_loop_np_test_fft$scrut_tup2(i3, m);
        break inlinedLbl2;
      }
    }
    inlinedVal6(undefined, np, undefined, inlinedVal, inlinedVal1);
    np2 = np;
    pxr = inlinedVal;
    pxi = inlinedVal1;
    i4 = 0;
    zr = 0.0;
    zi = 0.0;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut1, scrut2, tmp13, tmp14;
        scrut1 = i4 >= np2;
        if (scrut1 === true) {
          inlinedVal7 = doit_loop_np_test$scrut_tup2(zr, zi);
          break inlinedLbl3
        }
        {
          let inlinedVal8, inlinedVal9;
          tmp13 = i4 + 1;
          inlinedVal8 = pxr.at(tmp13);
          tmp14 = inlinedVal8 - i4;
          inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp14));
          scrut2 = zr < inlinedVal9;
          if (scrut2 === true) {
            let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
            fv_tmp = i4 + 1;
            inlinedVal10 = pxi.at(fv_tmp);
            inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
            fv_scrut = zi < inlinedVal11;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zr = inlinedVal9;
              zi = inlinedVal11;
              continue loopLabel3
            }
            {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zr = inlinedVal9;
              continue loopLabel3;
            }
          }
          {
            let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
            fv_tmp = i4 + 1;
            inlinedVal10 = pxi.at(fv_tmp);
            inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
            fv_scrut = zi < inlinedVal11;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zi = inlinedVal11;
              continue loopLabel3
            }
            {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              continue loopLabel3;
            }
          }
        }
      }
    }
    inlinedVal7(undefined);
    tmp = i + 1;
    tmp1 = np * 2;
    doit_loop_np$loop_np$tailrec(tmp, tmp1);
    return runtime.Unit;
  }
};
main_doit_loop_np$loop_np$tailrec = function main_doit_loop_np$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let inlinedVal, npm, t, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal1, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i1, n, x, inlinedVal4, arr1, i2, n1, x1, inlinedVal5, inlinedVal6, np1, i3, m, inlinedVal7, np2, pxr, pxi, i4, zr, zi, inlinedVal8;
    tmp10 = np / 2;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp10));
    npm = inlinedVal3 - 1;
    tmp3 = np + 2;
    tmp11 = [];
    arr = tmp11;
    i1 = 0;
    n = tmp3;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp14;
        scrut1 = i1 == n;
        if (scrut1 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i1] = x;
        tmp14 = i1 + 1;
        i1 = tmp14;
        continue loopLabel;
      }
    }
    inlinedVal1 = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i2 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut1, tmp14;
        scrut1 = i2 == n1;
        if (scrut1 === true) {
          inlinedVal5 = arr1;
          break inlinedLbl1
        }
        arr1[i2] = x1;
        tmp14 = i2 + 1;
        i2 = tmp14;
        continue loopLabel1;
      }
    }
    inlinedVal2 = inlinedVal5;
    t = 3.141592653589793 / np;
    tmp5 = np - 1.0;
    tmp6 = tmp5 * 0.5;
    inlinedVal1[1] = tmp6;
    inlinedVal5[1] = 0.0;
    tmp13 = np / 2;
    inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp13));
    tmp7 = inlinedVal6 + 1;
    tmp8 = - 0.5;
    inlinedVal1[tmp7] = tmp8;
    tmp9 = inlinedVal6 + 1;
    inlinedVal5[tmp9] = 0.0;
    loop_i(np, npm, inlinedVal1, inlinedVal5, t, 1);
    np1 = np;
    i3 = 2;
    m = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut1, tmp14, tmp15;
        scrut1 = i3 < np1;
        if (scrut1 === true) {
          tmp14 = i3 + i3;
          tmp15 = m + 1;
          i3 = tmp14;
          m = tmp15;
          continue loopLabel2
        }
        inlinedVal7 = main_doit_loop_np_test_fft$scrut_tup2(i3, m);
        break inlinedLbl2;
      }
    }
    inlinedVal7(undefined, np, undefined, inlinedVal1, inlinedVal2);
    np2 = np;
    pxr = inlinedVal1;
    pxi = inlinedVal2;
    i4 = 0;
    zr = 0.0;
    zi = 0.0;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut1, scrut2, tmp14, tmp15;
        scrut1 = i4 >= np2;
        if (scrut1 === true) {
          inlinedVal8 = main_doit_loop_np_test$scrut_tup2(zr, zi);
          break inlinedLbl3
        }
        {
          let inlinedVal9, inlinedVal10;
          tmp14 = i4 + 1;
          inlinedVal9 = pxr.at(tmp14);
          tmp15 = inlinedVal9 - i4;
          inlinedVal10 = runtime.safeCall(globalThis.Math.abs(tmp15));
          scrut2 = zr < inlinedVal10;
          if (scrut2 === true) {
            let fv_tmp, fv_scrut, inlinedVal11, inlinedVal12;
            fv_tmp = i4 + 1;
            inlinedVal11 = pxi.at(fv_tmp);
            inlinedVal12 = runtime.safeCall(globalThis.Math.abs(inlinedVal11));
            fv_scrut = zi < inlinedVal12;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zr = inlinedVal10;
              zi = inlinedVal12;
              continue loopLabel3
            }
            {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zr = inlinedVal10;
              continue loopLabel3;
            }
          }
          {
            let fv_tmp, fv_scrut, inlinedVal11, inlinedVal12;
            fv_tmp = i4 + 1;
            inlinedVal11 = pxi.at(fv_tmp);
            inlinedVal12 = runtime.safeCall(globalThis.Math.abs(inlinedVal11));
            fv_scrut = zi < inlinedVal12;
            if (fv_scrut === true) {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              zi = inlinedVal12;
              continue loopLabel3
            }
            {
              let fv_tmp1;
              fv_tmp1 = i4 + 1;
              i4 = fv_tmp1;
              continue loopLabel3;
            }
          }
        }
      }
    }
    inlinedVal = inlinedVal8(undefined);
    tmp = i + 1;
    tmp1 = np * 2;
    tmp2 = main_doit_loop_np$loop_np$tailrec(tmp, tmp1);
    return fft1.Cons(inlinedVal, tmp2);
  }
};
main_doit_loop_np_test$scrut_tup2 = function main_doit_loop_np_test$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut) => {
    return main_doit_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut)
  }
};
main_doit_loop_np_test$scrut_tup2$worker = function main_doit_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut) {
  let inlinedVal, inlinedVal1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tup2_0));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tup2_1));
  fv_scrut = inlinedVal < inlinedVal1;
  if (fv_scrut === true) {
    return tup2_1
  }
  return tup2_0;
};
main_doit_loop_np_test_fft$scrut_tup2 = function main_doit_loop_np_test_fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return main_doit_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
main_doit_loop_np_test_fft$scrut_tup2$worker = function main_doit_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    fv_tmp = fv_np + 1;
    loop(fv_px, fv_py, tup2_0, fv_tmp);
  }
  loop_k$tailrec(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
doit_loop_np_test_fft$scrut_tup2 = function doit_loop_np_test_fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return doit_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
doit_loop_np_test_fft$scrut_tup2$worker = function doit_loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    fv_tmp = fv_np + 1;
    loop(fv_px, fv_py, tup2_0, fv_tmp);
  }
  loop_k$tailrec(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
doit_loop_np_test$scrut_tup2 = function doit_loop_np_test$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut) => {
    return doit_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut)
  }
};
doit_loop_np_test$scrut_tup2$worker = function doit_loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut) {
  let inlinedVal, inlinedVal1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tup2_0));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tup2_1));
  fv_scrut = inlinedVal < inlinedVal1;
  if (fv_scrut === true) {
    return tup2_1
  }
  return tup2_0;
};
loop_np_test$scrut_tup2 = function loop_np_test$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut) => {
    return loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut)
  }
};
loop_np_test$scrut_tup2$worker = function loop_np_test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut) {
  let inlinedVal, inlinedVal1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tup2_0));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tup2_1));
  fv_scrut = inlinedVal < inlinedVal1;
  if (fv_scrut === true) {
    return tup2_1
  }
  return tup2_0;
};
loop_np_test_fft$scrut_tup2 = function loop_np_test_fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
loop_np_test_fft$scrut_tup2$worker = function loop_np_test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    fv_tmp = fv_np + 1;
    loop(fv_px, fv_py, tup2_0, fv_tmp);
  }
  loop_k$tailrec(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
loop_i = function loop_i(np, npm, pxr, pxi, t, i) {
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
loop = function loop(px, py, n, i) {
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
    let scrut, tmp, tmp1, tmp2;
    tmp = fft.#nSizes();
    scrut = i > tmp;
    if (scrut === true) {
      return fft.Nil
    }
    {
      let npm, t, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1, tmp10, tmp11, tmp12, tmp13, inlinedVal2, arr, i1, n, x, inlinedVal3, arr1, i2, n1, x1, inlinedVal4, inlinedVal5, np1, i3, m, inlinedVal6, np2, pxr, pxi, i4, zr, zi, inlinedVal7;
      tmp10 = np / 2;
      inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
      npm = inlinedVal2 - 1;
      tmp3 = np + 2;
      tmp11 = [];
      arr = tmp11;
      i1 = 0;
      n = tmp3;
      x = 0.0;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp14;
          scrut1 = i1 == n;
          if (scrut1 === true) {
            inlinedVal3 = arr;
            break inlinedLbl
          }
          arr[i1] = x;
          tmp14 = i1 + 1;
          i1 = tmp14;
          continue loopLabel;
        }
      }
      inlinedVal = inlinedVal3;
      tmp4 = np + 2;
      tmp12 = [];
      arr1 = tmp12;
      i2 = 0;
      n1 = tmp4;
      x1 = 0.0;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut1, tmp14;
          scrut1 = i2 == n1;
          if (scrut1 === true) {
            inlinedVal4 = arr1;
            break inlinedLbl1
          }
          arr1[i2] = x1;
          tmp14 = i2 + 1;
          i2 = tmp14;
          continue loopLabel1;
        }
      }
      inlinedVal1 = inlinedVal4;
      t = 3.141592653589793 / np;
      tmp5 = np - 1.0;
      tmp6 = tmp5 * 0.5;
      inlinedVal[1] = tmp6;
      inlinedVal4[1] = 0.0;
      tmp13 = np / 2;
      inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp13));
      tmp7 = inlinedVal5 + 1;
      tmp8 = - 0.5;
      inlinedVal[tmp7] = tmp8;
      tmp9 = inlinedVal5 + 1;
      inlinedVal4[tmp9] = 0.0;
      loop_i(np, npm, inlinedVal, inlinedVal4, t, 1);
      np1 = np;
      i3 = 2;
      m = 1;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut1, tmp14, tmp15;
          scrut1 = i3 < np1;
          if (scrut1 === true) {
            tmp14 = i3 + i3;
            tmp15 = m + 1;
            i3 = tmp14;
            m = tmp15;
            continue loopLabel2
          }
          inlinedVal6 = loop_np_test_fft$scrut_tup2(i3, m);
          break inlinedLbl2;
        }
      }
      inlinedVal6(undefined, np, undefined, inlinedVal, inlinedVal1);
      np2 = np;
      pxr = inlinedVal;
      pxi = inlinedVal1;
      i4 = 0;
      zr = 0.0;
      zi = 0.0;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut1, scrut2, tmp14, tmp15;
          scrut1 = i4 >= np2;
          if (scrut1 === true) {
            inlinedVal7 = loop_np_test$scrut_tup2(zr, zi);
            break inlinedLbl3
          }
          {
            let inlinedVal8, inlinedVal9;
            tmp14 = i4 + 1;
            inlinedVal8 = pxr.at(tmp14);
            tmp15 = inlinedVal8 - i4;
            inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp15));
            scrut2 = zr < inlinedVal9;
            if (scrut2 === true) {
              let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
              fv_tmp = i4 + 1;
              inlinedVal10 = pxi.at(fv_tmp);
              inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
              fv_scrut = zi < inlinedVal11;
              if (fv_scrut === true) {
                let fv_tmp1;
                fv_tmp1 = i4 + 1;
                i4 = fv_tmp1;
                zr = inlinedVal9;
                zi = inlinedVal11;
                continue loopLabel3
              }
              {
                let fv_tmp1;
                fv_tmp1 = i4 + 1;
                i4 = fv_tmp1;
                zr = inlinedVal9;
                continue loopLabel3;
              }
            }
            {
              let fv_tmp, fv_scrut, inlinedVal10, inlinedVal11;
              fv_tmp = i4 + 1;
              inlinedVal10 = pxi.at(fv_tmp);
              inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
              fv_scrut = zi < inlinedVal11;
              if (fv_scrut === true) {
                let fv_tmp1;
                fv_tmp1 = i4 + 1;
                i4 = fv_tmp1;
                zi = inlinedVal11;
                continue loopLabel3
              }
              {
                let fv_tmp1;
                fv_tmp1 = i4 + 1;
                i4 = fv_tmp1;
                continue loopLabel3;
              }
            }
          }
        }
      }
      inlinedVal7(undefined);
      tmp1 = i + 1;
      tmp2 = np * 2;
      fft.#loop_np$tailrec(tmp1, tmp2);
      return runtime.Unit;
    }
  }
  static #nSizes() {
    return 14
  }
  static main() {
    return main_doit_loop_np$loop_np$tailrec(1, 16)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "fft"];
});
export { loop as _$_modulePrivate_$_loop };
export { loop_i as _$_modulePrivate_$_loop_i };
export { fft1 as _$_modulePrivate_$_fft };
export { main_doit_loop_np_test$scrut_tup2 as _$_modulePrivate_$_main_doit_loop_np_test$scrut_tup2 };
export { main_doit_loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_main_doit_loop_np_test_fft$scrut_tup2 };
export { doit_loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_doit_loop_np_test_fft$scrut_tup2 };
export { doit_loop_np_test$scrut_tup2 as _$_modulePrivate_$_doit_loop_np_test$scrut_tup2 };
export { loop_np_test$scrut_tup2 as _$_modulePrivate_$_loop_np_test$scrut_tup2 };
export { loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_loop_np_test_fft$scrut_tup2 };
export { loop_i$tailrec as _$_modulePrivate_$_loop_i$tailrec };
export { loop_is2$tailrec as _$_modulePrivate_$_loop_is2$tailrec };
export { loop_k$tailrec as _$_modulePrivate_$_loop_k$tailrec };
export { doit_loop_np$loop_np$tailrec as _$_modulePrivate_$_doit_loop_np$loop_np$tailrec };
export { main_doit_loop_np$loop_np$tailrec as _$_modulePrivate_$_main_doit_loop_np$loop_np$tailrec };
export { loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_loop_np_test_fft$scrut_tup2$worker };
export { loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_loop_np_test$scrut_tup2$worker };
export { doit_loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_doit_loop_np_test$scrut_tup2$worker };
export { doit_loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_doit_loop_np_test_fft$scrut_tup2$worker };
export { main_doit_loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_main_doit_loop_np_test_fft$scrut_tup2$worker };
export { main_doit_loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_main_doit_loop_np_test$scrut_tup2$worker };
export default fft1;
