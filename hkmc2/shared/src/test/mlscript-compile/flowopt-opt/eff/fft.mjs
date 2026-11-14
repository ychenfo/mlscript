const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let loop, loop_i0, loop_is, loop_j, loop_i02, loop_k, loop_i, loop_k1, loop_is2, find_num_points, loop_i1, loop_i2, fft1, loop_k$tailrec, loop_i$tailrec, loop_is2$tailrec, loop_is$tailrec, loop_j$tailrec, loop_k$tailrec1, find_num_points$tailrec, loop_i2$tailrec, main_doit_loop_np_loop_np$tailrec$loop_np$tailrec, doit_loop_np_loop_np$tailrec$loop_np$tailrec, loop_np_loop_np$tailrec$loop_np$tailrec, loop_i_loop_i$tailrec$loop_i$tailrec, loop_is2_loop_is2$tailrec$loop_is2$tailrec, loop_k_loop_k$tailrec$loop_k$tailrec, loop_k_loop_k$tailrec$loop_k$tailrec1, loop_j_loop_j$tailrec$loop_j$tailrec, loop_is_loop_is$tailrec$loop_is$tailrec, loop_i2_loop_i2$tailrec$loop_i2$tailrec;
main_doit_loop_np_loop_np$tailrec$loop_np$tailrec = function main_doit_loop_np_loop_np$tailrec$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, inlinedVal1, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6, px, py, scrut2, element1$1, element0$1, tmp14, inlinedVal7;
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
        let scrut3, tmp15;
        scrut3 = i3 == n;
        if (scrut3 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i3] = x;
        tmp15 = i3 + 1;
        i3 = tmp15;
        continue loopLabel;
      }
    }
    inlinedVal1 = inlinedVal4;
    pxr = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i4 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut3, tmp15;
        scrut3 = i4 == n1;
        if (scrut3 === true) {
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
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal1;
    pxi1 = inlinedVal5;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut3, j, z, y, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
        scrut3 = i1 > npm1;
        if (scrut3 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal8, inlinedVal9;
          j = np2 - i1;
          tmp15 = i1 + 1;
          tmp16 = - 0.5;
          pxr1[tmp15] = tmp16;
          tmp17 = j + 1;
          tmp18 = - 0.5;
          pxr1[tmp17] = tmp18;
          z = t1 * i1;
          inlinedVal8 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal9 = runtime.safeCall(globalThis.Math.sin(z));
          tmp19 = inlinedVal8 / inlinedVal9;
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
    px = pxr;
    py = pxi;
    inlinedVal7 = find_num_points$tailrec(np1, 2, 1);
    if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
      let px1, py1, n2, m, k, n21, px2, py2, n3, is_, id, px3, py3, n4, i5, j;
      element0$1 = runtime.Tuple.get(inlinedVal7, 0);
      element1$1 = runtime.Tuple.get(inlinedVal7, 1);
      scrut2 = element0$1 != np1;
      if (scrut2 === true) {
        let px4, py4, n5, i6;
        tmp14 = np1 + 1;
        px4 = pxr;
        py4 = pxi;
        n5 = element0$1;
        i6 = tmp14;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut3, tmp15;
            scrut3 = i6 > n5;
            if (scrut3 === true) {
              break inlinedLbl3
            }
            px4[i6] = 0.0;
            py4[i6] = 0.0;
            tmp15 = i6 + 1;
            i6 = tmp15;
            continue loopLabel3;
          }
        }
      }
      px1 = px;
      py1 = py;
      n2 = element0$1;
      m = element1$1;
      k = 1;
      n21 = element0$1;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut3, e, tmp15;
          scrut3 = k >= m;
          if (scrut3 === true) {
            break inlinedLbl3
          }
          {
            let inlinedVal8, tmp16, tmp17, inlinedVal9, inlinedVal10, px4, py4, n5, n22, n41, e1, j1, a;
            tmp17 = n21 / 4;
            inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp17));
            inlinedVal8 = 2.0 * 3.141592653589793;
            e = inlinedVal8 / n21;
            px4 = px1;
            py4 = py1;
            n5 = n2;
            n22 = n21;
            n41 = inlinedVal9;
            e1 = e;
            j1 = 1;
            a = 0.0;
            inlinedLbl4: {
              loopLabel4: while (true) {
                let scrut4, a3, tmp18, tmp19, tmp20;
                scrut4 = j1 > n41;
                if (scrut4 === true) {
                  break inlinedLbl4
                }
                {
                  let inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, px5, py5, n6, n23, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                  a3 = 3.0 * a;
                  inlinedVal11 = runtime.safeCall(globalThis.Math.cos(a));
                  inlinedVal12 = runtime.safeCall(globalThis.Math.sin(a));
                  inlinedVal13 = runtime.safeCall(globalThis.Math.cos(a3));
                  inlinedVal14 = runtime.safeCall(globalThis.Math.sin(a3));
                  tmp18 = 2 * n22;
                  px5 = px4;
                  py5 = py4;
                  n6 = n5;
                  n23 = n22;
                  n42 = n41;
                  j2 = j1;
                  cc1 = inlinedVal11;
                  ss1 = inlinedVal12;
                  cc3 = inlinedVal13;
                  ss3 = inlinedVal14;
                  is_1 = j1;
                  id1 = tmp18;
                  inlinedLbl5: {
                    loopLabel5: while (true) {
                      let scrut5, tmp21, tmp22, tmp23, tmp24;
                      scrut5 = is_1 >= n6;
                      if (scrut5 === true) {
                        break inlinedLbl5
                      }
                      {
                        let px6, py6, n7, n43, cc11, ss11, cc31, ss31, id2, i0;
                        px6 = px5;
                        py6 = py5;
                        n7 = n6;
                        n43 = n42;
                        cc11 = cc1;
                        ss11 = ss1;
                        cc31 = cc3;
                        ss31 = ss3;
                        id2 = id1;
                        i0 = is_1;
                        inlinedLbl6: {
                          loopLabel6: while (true) {
                            let scrut6, i11, i21, i31, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42;
                            scrut6 = i0 >= n7;
                            if (scrut6 === true) {
                              break inlinedLbl6
                            }
                            {
                              let inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30;
                              i11 = i0 + n43;
                              i21 = i11 + n43;
                              i31 = i21 + n43;
                              inlinedVal15 = px6.at(i0);
                              inlinedVal16 = px6.at(i21);
                              r1 = inlinedVal15 - inlinedVal16;
                              inlinedVal17 = px6.at(i0);
                              inlinedVal18 = px6.at(i21);
                              tmp25 = inlinedVal17 + inlinedVal18;
                              px6[i0] = tmp25;
                              inlinedVal19 = px6.at(i11);
                              inlinedVal20 = px6.at(i31);
                              r2 = inlinedVal19 - inlinedVal20;
                              inlinedVal21 = px6.at(i11);
                              inlinedVal22 = px6.at(i31);
                              tmp26 = inlinedVal21 + inlinedVal22;
                              px6[i11] = tmp26;
                              inlinedVal23 = py6.at(i0);
                              inlinedVal24 = py6.at(i21);
                              s1 = inlinedVal23 - inlinedVal24;
                              inlinedVal25 = py6.at(i0);
                              inlinedVal26 = py6.at(i21);
                              tmp27 = inlinedVal25 + inlinedVal26;
                              py6[i0] = tmp27;
                              inlinedVal27 = py6.at(i11);
                              inlinedVal28 = py6.at(i31);
                              s2 = inlinedVal27 - inlinedVal28;
                              inlinedVal29 = py6.at(i11);
                              inlinedVal30 = py6.at(i31);
                              tmp28 = inlinedVal29 + inlinedVal30;
                              py6[i11] = tmp28;
                              s3 = r1 - s2;
                              r1b = r1 + s2;
                              s2b = r2 - s1;
                              r2b = r2 + s1;
                              tmp29 = r1b * cc11;
                              tmp30 = s2b * ss11;
                              tmp31 = tmp29 - tmp30;
                              px6[i21] = tmp31;
                              tmp32 = - s2b;
                              tmp33 = tmp32 * cc11;
                              tmp34 = r1b * ss11;
                              tmp35 = tmp33 - tmp34;
                              py6[i21] = tmp35;
                              tmp36 = s3 * cc31;
                              tmp37 = r2b * ss31;
                              tmp38 = tmp36 + tmp37;
                              px6[i31] = tmp38;
                              tmp39 = r2b * cc31;
                              tmp40 = s3 * ss31;
                              tmp41 = tmp39 - tmp40;
                              py6[i31] = tmp41;
                              tmp42 = i0 + id2;
                              i0 = tmp42;
                              continue loopLabel6;
                            }
                          }
                        }
                        tmp21 = 2 * id1;
                        tmp22 = tmp21 - n23;
                        tmp23 = tmp22 + j2;
                        tmp24 = 4 * id1;
                        is_1 = tmp23;
                        id1 = tmp24;
                        continue loopLabel5;
                      }
                    }
                  }
                  tmp19 = j1 + 1;
                  tmp20 = e1 * j1;
                  j1 = tmp19;
                  a = tmp20;
                  continue loopLabel4;
                }
              }
            }
            tmp15 = k + 1;
            tmp16 = n21 / 2;
            inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k = tmp15;
            n21 = inlinedVal10;
            continue loopLabel3;
          }
        }
      }
      px2 = px;
      py2 = py;
      n3 = element0$1;
      is_ = 1;
      id = 4;
      inlinedLbl4: {
        loopLabel4: while (true) {
          let scrut3, tmp15, tmp16, tmp17;
          scrut3 = is_ >= n3;
          if (scrut3 === true) {
            break inlinedLbl4
          }
          {
            let px4, py4, n5, id1, i0;
            px4 = px2;
            py4 = py2;
            n5 = n3;
            id1 = id;
            i0 = is_;
            inlinedLbl5: {
              loopLabel5: while (true) {
                let scrut4, i11, tmp18, tmp19, tmp20, tmp21, tmp22;
                scrut4 = i0 > n5;
                if (scrut4 === true) {
                  break inlinedLbl5
                }
                {
                  let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
                  i11 = i0 + 1;
                  inlinedVal8 = px4.at(i0);
                  inlinedVal9 = px4.at(i11);
                  tmp18 = inlinedVal8 + inlinedVal9;
                  px4[i0] = tmp18;
                  inlinedVal10 = px4.at(i11);
                  tmp19 = inlinedVal8 - inlinedVal10;
                  px4[i11] = tmp19;
                  inlinedVal11 = py4.at(i0);
                  inlinedVal12 = py4.at(i11);
                  tmp20 = inlinedVal11 + inlinedVal12;
                  py4[i0] = tmp20;
                  inlinedVal13 = py4.at(i11);
                  tmp21 = inlinedVal11 - inlinedVal13;
                  py4[i11] = tmp21;
                  tmp22 = i0 + id1;
                  i0 = tmp22;
                  continue loopLabel5;
                }
              }
            }
            tmp15 = 2 * id;
            tmp16 = tmp15 - 1;
            tmp17 = 4 * id;
            is_ = tmp16;
            id = tmp17;
            continue loopLabel4;
          }
        }
      }
      px3 = px;
      py3 = py;
      n4 = element0$1;
      i5 = 1;
      j = 1;
      inlinedLbl5: {
        loopLabel5: while (true) {
          let scrut3, scrut4, tmp15;
          scrut3 = i5 >= n4;
          if (scrut3 === true) {
            break inlinedLbl5
          }
          {
            let tmp16, inlinedVal8, k1, j1, inlinedVal9;
            scrut4 = i5 < j;
            if (scrut4 === true) {
              let inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
              inlinedVal10 = px3.at(j);
              inlinedVal11 = px3.at(i5);
              px3[j] = inlinedVal11;
              px3[i5] = inlinedVal10;
              inlinedVal12 = py3.at(j);
              inlinedVal13 = py3.at(i5);
              py3[j] = inlinedVal13;
              py3[i5] = inlinedVal12;
            }
            tmp16 = n4 / 2;
            inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k1 = inlinedVal8;
            j1 = j;
            inlinedLbl6: {
              loopLabel6: while (true) {
                let scrut5, tmp17;
                scrut5 = k1 < j1;
                if (scrut5 === true) {
                  let tmp18, inlinedVal10;
                  tmp18 = k1 / 2;
                  inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp18));
                  tmp17 = j1 - k1;
                  k1 = inlinedVal10;
                  j1 = tmp17;
                  continue loopLabel6
                }
                inlinedVal9 = j1 + k1;
                break inlinedLbl6;
              }
            }
            tmp15 = i5 + 1;
            i5 = tmp15;
            j = inlinedVal9;
            continue loopLabel5;
          }
        }
      }
      np3 = np1;
      pxr2 = pxr;
      pxi2 = pxi;
      i2 = 0;
      zr = 0.0;
      zi = 0.0;
      inlinedLbl6: {
        loopLabel6: while (true) {
          let scrut3, scrut4, scrut5, tmp15, tmp16, tmp17, element0$2, tmp18, tmp19, element0$3, tmp20;
          scrut3 = i2 >= np3;
          if (scrut3 === true) {
            inlinedVal2 = globalThis.Object.freeze([
              zr,
              zi
            ]);
            break inlinedLbl6
          }
          {
            let inlinedVal8, inlinedVal9;
            tmp15 = i2 + 1;
            inlinedVal8 = pxr2.at(tmp15);
            tmp16 = inlinedVal8 - i2;
            inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp16));
            scrut4 = zr < inlinedVal9;
            if (scrut4 === true) {
              tmp17 = globalThis.Object.freeze([
                inlinedVal9,
                i2
              ]);
            } else {
              tmp17 = globalThis.Object.freeze([
                zr,
                undefined
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp17) && tmp17.length === 2) {
              let inlinedVal10, inlinedVal11;
              element0$2 = runtime.Tuple.get(tmp17, 0);
              tmp18 = i2 + 1;
              inlinedVal10 = pxi2.at(tmp18);
              inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
              scrut5 = zi < inlinedVal11;
              if (scrut5 === true) {
                tmp19 = globalThis.Object.freeze([
                  inlinedVal11,
                  i2
                ]);
              } else {
                tmp19 = globalThis.Object.freeze([
                  zi,
                  undefined
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp19) && tmp19.length === 2) {
                element0$3 = runtime.Tuple.get(tmp19, 0);
                tmp20 = i2 + 1;
                i2 = tmp20;
                zr = element0$2;
                zi = element0$3;
                continue loopLabel6
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal8, inlinedVal9;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element0$));
        inlinedVal9 = runtime.safeCall(globalThis.Math.abs(element1$));
        scrut1 = inlinedVal8 < inlinedVal9;
        if (scrut1 === true) {
          inlinedVal = element1$;
        } else {
          inlinedVal = element0$;
        }
        tmp = i + 1;
        tmp1 = np * 2;
        tmp2 = main_doit_loop_np_loop_np$tailrec$loop_np$tailrec(tmp, tmp1);
        return fft1.Cons(inlinedVal, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_loop_np_loop_np$tailrec$loop_np$tailrec = function doit_loop_np_loop_np$tailrec$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  {
    let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, inlinedVal1, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6, px, py, scrut2, element1$1, element0$1, tmp14, inlinedVal7;
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
        let scrut3, tmp15;
        scrut3 = i3 == n;
        if (scrut3 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i3] = x;
        tmp15 = i3 + 1;
        i3 = tmp15;
        continue loopLabel;
      }
    }
    inlinedVal1 = inlinedVal4;
    pxr = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i4 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut3, tmp15;
        scrut3 = i4 == n1;
        if (scrut3 === true) {
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
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal1;
    pxi1 = inlinedVal5;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut3, j, z, y, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
        scrut3 = i1 > npm1;
        if (scrut3 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal8, inlinedVal9;
          j = np2 - i1;
          tmp15 = i1 + 1;
          tmp16 = - 0.5;
          pxr1[tmp15] = tmp16;
          tmp17 = j + 1;
          tmp18 = - 0.5;
          pxr1[tmp17] = tmp18;
          z = t1 * i1;
          inlinedVal8 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal9 = runtime.safeCall(globalThis.Math.sin(z));
          tmp19 = inlinedVal8 / inlinedVal9;
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
    px = pxr;
    py = pxi;
    inlinedVal7 = find_num_points$tailrec(np1, 2, 1);
    if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
      let px1, py1, n2, m, k, n21, px2, py2, n3, is_, id, px3, py3, n4, i5, j;
      element0$1 = runtime.Tuple.get(inlinedVal7, 0);
      element1$1 = runtime.Tuple.get(inlinedVal7, 1);
      scrut2 = element0$1 != np1;
      if (scrut2 === true) {
        let px4, py4, n5, i6;
        tmp14 = np1 + 1;
        px4 = pxr;
        py4 = pxi;
        n5 = element0$1;
        i6 = tmp14;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut3, tmp15;
            scrut3 = i6 > n5;
            if (scrut3 === true) {
              break inlinedLbl3
            }
            px4[i6] = 0.0;
            py4[i6] = 0.0;
            tmp15 = i6 + 1;
            i6 = tmp15;
            continue loopLabel3;
          }
        }
      }
      px1 = px;
      py1 = py;
      n2 = element0$1;
      m = element1$1;
      k = 1;
      n21 = element0$1;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut3, e, tmp15;
          scrut3 = k >= m;
          if (scrut3 === true) {
            break inlinedLbl3
          }
          {
            let inlinedVal8, tmp16, tmp17, inlinedVal9, inlinedVal10, px4, py4, n5, n22, n41, e1, j1, a;
            tmp17 = n21 / 4;
            inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp17));
            inlinedVal8 = 2.0 * 3.141592653589793;
            e = inlinedVal8 / n21;
            px4 = px1;
            py4 = py1;
            n5 = n2;
            n22 = n21;
            n41 = inlinedVal9;
            e1 = e;
            j1 = 1;
            a = 0.0;
            inlinedLbl4: {
              loopLabel4: while (true) {
                let scrut4, a3, tmp18, tmp19, tmp20;
                scrut4 = j1 > n41;
                if (scrut4 === true) {
                  break inlinedLbl4
                }
                {
                  let inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, px5, py5, n6, n23, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                  a3 = 3.0 * a;
                  inlinedVal11 = runtime.safeCall(globalThis.Math.cos(a));
                  inlinedVal12 = runtime.safeCall(globalThis.Math.sin(a));
                  inlinedVal13 = runtime.safeCall(globalThis.Math.cos(a3));
                  inlinedVal14 = runtime.safeCall(globalThis.Math.sin(a3));
                  tmp18 = 2 * n22;
                  px5 = px4;
                  py5 = py4;
                  n6 = n5;
                  n23 = n22;
                  n42 = n41;
                  j2 = j1;
                  cc1 = inlinedVal11;
                  ss1 = inlinedVal12;
                  cc3 = inlinedVal13;
                  ss3 = inlinedVal14;
                  is_1 = j1;
                  id1 = tmp18;
                  inlinedLbl5: {
                    loopLabel5: while (true) {
                      let scrut5, tmp21, tmp22, tmp23, tmp24;
                      scrut5 = is_1 >= n6;
                      if (scrut5 === true) {
                        break inlinedLbl5
                      }
                      {
                        let px6, py6, n7, n43, cc11, ss11, cc31, ss31, id2, i0;
                        px6 = px5;
                        py6 = py5;
                        n7 = n6;
                        n43 = n42;
                        cc11 = cc1;
                        ss11 = ss1;
                        cc31 = cc3;
                        ss31 = ss3;
                        id2 = id1;
                        i0 = is_1;
                        inlinedLbl6: {
                          loopLabel6: while (true) {
                            let scrut6, i11, i21, i31, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42;
                            scrut6 = i0 >= n7;
                            if (scrut6 === true) {
                              break inlinedLbl6
                            }
                            {
                              let inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30;
                              i11 = i0 + n43;
                              i21 = i11 + n43;
                              i31 = i21 + n43;
                              inlinedVal15 = px6.at(i0);
                              inlinedVal16 = px6.at(i21);
                              r1 = inlinedVal15 - inlinedVal16;
                              inlinedVal17 = px6.at(i0);
                              inlinedVal18 = px6.at(i21);
                              tmp25 = inlinedVal17 + inlinedVal18;
                              px6[i0] = tmp25;
                              inlinedVal19 = px6.at(i11);
                              inlinedVal20 = px6.at(i31);
                              r2 = inlinedVal19 - inlinedVal20;
                              inlinedVal21 = px6.at(i11);
                              inlinedVal22 = px6.at(i31);
                              tmp26 = inlinedVal21 + inlinedVal22;
                              px6[i11] = tmp26;
                              inlinedVal23 = py6.at(i0);
                              inlinedVal24 = py6.at(i21);
                              s1 = inlinedVal23 - inlinedVal24;
                              inlinedVal25 = py6.at(i0);
                              inlinedVal26 = py6.at(i21);
                              tmp27 = inlinedVal25 + inlinedVal26;
                              py6[i0] = tmp27;
                              inlinedVal27 = py6.at(i11);
                              inlinedVal28 = py6.at(i31);
                              s2 = inlinedVal27 - inlinedVal28;
                              inlinedVal29 = py6.at(i11);
                              inlinedVal30 = py6.at(i31);
                              tmp28 = inlinedVal29 + inlinedVal30;
                              py6[i11] = tmp28;
                              s3 = r1 - s2;
                              r1b = r1 + s2;
                              s2b = r2 - s1;
                              r2b = r2 + s1;
                              tmp29 = r1b * cc11;
                              tmp30 = s2b * ss11;
                              tmp31 = tmp29 - tmp30;
                              px6[i21] = tmp31;
                              tmp32 = - s2b;
                              tmp33 = tmp32 * cc11;
                              tmp34 = r1b * ss11;
                              tmp35 = tmp33 - tmp34;
                              py6[i21] = tmp35;
                              tmp36 = s3 * cc31;
                              tmp37 = r2b * ss31;
                              tmp38 = tmp36 + tmp37;
                              px6[i31] = tmp38;
                              tmp39 = r2b * cc31;
                              tmp40 = s3 * ss31;
                              tmp41 = tmp39 - tmp40;
                              py6[i31] = tmp41;
                              tmp42 = i0 + id2;
                              i0 = tmp42;
                              continue loopLabel6;
                            }
                          }
                        }
                        tmp21 = 2 * id1;
                        tmp22 = tmp21 - n23;
                        tmp23 = tmp22 + j2;
                        tmp24 = 4 * id1;
                        is_1 = tmp23;
                        id1 = tmp24;
                        continue loopLabel5;
                      }
                    }
                  }
                  tmp19 = j1 + 1;
                  tmp20 = e1 * j1;
                  j1 = tmp19;
                  a = tmp20;
                  continue loopLabel4;
                }
              }
            }
            tmp15 = k + 1;
            tmp16 = n21 / 2;
            inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k = tmp15;
            n21 = inlinedVal10;
            continue loopLabel3;
          }
        }
      }
      px2 = px;
      py2 = py;
      n3 = element0$1;
      is_ = 1;
      id = 4;
      inlinedLbl4: {
        loopLabel4: while (true) {
          let scrut3, tmp15, tmp16, tmp17;
          scrut3 = is_ >= n3;
          if (scrut3 === true) {
            break inlinedLbl4
          }
          {
            let px4, py4, n5, id1, i0;
            px4 = px2;
            py4 = py2;
            n5 = n3;
            id1 = id;
            i0 = is_;
            inlinedLbl5: {
              loopLabel5: while (true) {
                let scrut4, i11, tmp18, tmp19, tmp20, tmp21, tmp22;
                scrut4 = i0 > n5;
                if (scrut4 === true) {
                  break inlinedLbl5
                }
                {
                  let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
                  i11 = i0 + 1;
                  inlinedVal8 = px4.at(i0);
                  inlinedVal9 = px4.at(i11);
                  tmp18 = inlinedVal8 + inlinedVal9;
                  px4[i0] = tmp18;
                  inlinedVal10 = px4.at(i11);
                  tmp19 = inlinedVal8 - inlinedVal10;
                  px4[i11] = tmp19;
                  inlinedVal11 = py4.at(i0);
                  inlinedVal12 = py4.at(i11);
                  tmp20 = inlinedVal11 + inlinedVal12;
                  py4[i0] = tmp20;
                  inlinedVal13 = py4.at(i11);
                  tmp21 = inlinedVal11 - inlinedVal13;
                  py4[i11] = tmp21;
                  tmp22 = i0 + id1;
                  i0 = tmp22;
                  continue loopLabel5;
                }
              }
            }
            tmp15 = 2 * id;
            tmp16 = tmp15 - 1;
            tmp17 = 4 * id;
            is_ = tmp16;
            id = tmp17;
            continue loopLabel4;
          }
        }
      }
      px3 = px;
      py3 = py;
      n4 = element0$1;
      i5 = 1;
      j = 1;
      inlinedLbl5: {
        loopLabel5: while (true) {
          let scrut3, scrut4, tmp15;
          scrut3 = i5 >= n4;
          if (scrut3 === true) {
            break inlinedLbl5
          }
          {
            let tmp16, inlinedVal8, k1, j1, inlinedVal9;
            scrut4 = i5 < j;
            if (scrut4 === true) {
              let inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
              inlinedVal10 = px3.at(j);
              inlinedVal11 = px3.at(i5);
              px3[j] = inlinedVal11;
              px3[i5] = inlinedVal10;
              inlinedVal12 = py3.at(j);
              inlinedVal13 = py3.at(i5);
              py3[j] = inlinedVal13;
              py3[i5] = inlinedVal12;
            }
            tmp16 = n4 / 2;
            inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k1 = inlinedVal8;
            j1 = j;
            inlinedLbl6: {
              loopLabel6: while (true) {
                let scrut5, tmp17;
                scrut5 = k1 < j1;
                if (scrut5 === true) {
                  let tmp18, inlinedVal10;
                  tmp18 = k1 / 2;
                  inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp18));
                  tmp17 = j1 - k1;
                  k1 = inlinedVal10;
                  j1 = tmp17;
                  continue loopLabel6
                }
                inlinedVal9 = j1 + k1;
                break inlinedLbl6;
              }
            }
            tmp15 = i5 + 1;
            i5 = tmp15;
            j = inlinedVal9;
            continue loopLabel5;
          }
        }
      }
      np3 = np1;
      pxr2 = pxr;
      pxi2 = pxi;
      i2 = 0;
      zr = 0.0;
      zi = 0.0;
      inlinedLbl6: {
        loopLabel6: while (true) {
          let scrut3, scrut4, scrut5, tmp15, tmp16, tmp17, element0$2, tmp18, tmp19, element0$3, tmp20;
          scrut3 = i2 >= np3;
          if (scrut3 === true) {
            inlinedVal2 = globalThis.Object.freeze([
              zr,
              zi
            ]);
            break inlinedLbl6
          }
          {
            let inlinedVal8, inlinedVal9;
            tmp15 = i2 + 1;
            inlinedVal8 = pxr2.at(tmp15);
            tmp16 = inlinedVal8 - i2;
            inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp16));
            scrut4 = zr < inlinedVal9;
            if (scrut4 === true) {
              tmp17 = globalThis.Object.freeze([
                inlinedVal9,
                i2
              ]);
            } else {
              tmp17 = globalThis.Object.freeze([
                zr,
                undefined
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp17) && tmp17.length === 2) {
              let inlinedVal10, inlinedVal11;
              element0$2 = runtime.Tuple.get(tmp17, 0);
              tmp18 = i2 + 1;
              inlinedVal10 = pxi2.at(tmp18);
              inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
              scrut5 = zi < inlinedVal11;
              if (scrut5 === true) {
                tmp19 = globalThis.Object.freeze([
                  inlinedVal11,
                  i2
                ]);
              } else {
                tmp19 = globalThis.Object.freeze([
                  zi,
                  undefined
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp19) && tmp19.length === 2) {
                element0$3 = runtime.Tuple.get(tmp19, 0);
                tmp20 = i2 + 1;
                i2 = tmp20;
                zr = element0$2;
                zi = element0$3;
                continue loopLabel6
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal8, inlinedVal9;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element0$));
        inlinedVal9 = runtime.safeCall(globalThis.Math.abs(element1$));
        scrut1 = inlinedVal8 < inlinedVal9;
        if (scrut1 === true) {
          inlinedVal = element1$;
        } else {
          inlinedVal = element0$;
        }
        tmp = i + 1;
        tmp1 = np * 2;
        tmp2 = doit_loop_np_loop_np$tailrec$loop_np$tailrec(tmp, tmp1);
        return fft1.Cons(inlinedVal, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, inlinedVal1, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, inlinedVal2, tmp10, tmp11, tmp12, tmp13, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6, px, py, scrut2, element1$1, element0$1, tmp14, inlinedVal7;
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
        let scrut3, tmp15;
        scrut3 = i3 == n;
        if (scrut3 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i3] = x;
        tmp15 = i3 + 1;
        i3 = tmp15;
        continue loopLabel;
      }
    }
    inlinedVal1 = inlinedVal4;
    pxr = inlinedVal4;
    tmp4 = np + 2;
    tmp12 = [];
    arr1 = tmp12;
    i4 = 0;
    n1 = tmp4;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut3, tmp15;
        scrut3 = i4 == n1;
        if (scrut3 === true) {
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
    np2 = np;
    npm1 = npm;
    pxr1 = inlinedVal1;
    pxi1 = inlinedVal5;
    t1 = t;
    i1 = 1;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut3, j, z, y, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
        scrut3 = i1 > npm1;
        if (scrut3 === true) {
          break inlinedLbl2
        }
        {
          let inlinedVal8, inlinedVal9;
          j = np2 - i1;
          tmp15 = i1 + 1;
          tmp16 = - 0.5;
          pxr1[tmp15] = tmp16;
          tmp17 = j + 1;
          tmp18 = - 0.5;
          pxr1[tmp17] = tmp18;
          z = t1 * i1;
          inlinedVal8 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal9 = runtime.safeCall(globalThis.Math.sin(z));
          tmp19 = inlinedVal8 / inlinedVal9;
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
    px = pxr;
    py = pxi;
    inlinedVal7 = find_num_points$tailrec(np1, 2, 1);
    if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
      let px1, py1, n2, m, k, n21, px2, py2, n3, is_, id, px3, py3, n4, i5, j;
      element0$1 = runtime.Tuple.get(inlinedVal7, 0);
      element1$1 = runtime.Tuple.get(inlinedVal7, 1);
      scrut2 = element0$1 != np1;
      if (scrut2 === true) {
        let px4, py4, n5, i6;
        tmp14 = np1 + 1;
        px4 = pxr;
        py4 = pxi;
        n5 = element0$1;
        i6 = tmp14;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut3, tmp15;
            scrut3 = i6 > n5;
            if (scrut3 === true) {
              break inlinedLbl3
            }
            px4[i6] = 0.0;
            py4[i6] = 0.0;
            tmp15 = i6 + 1;
            i6 = tmp15;
            continue loopLabel3;
          }
        }
      }
      px1 = px;
      py1 = py;
      n2 = element0$1;
      m = element1$1;
      k = 1;
      n21 = element0$1;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut3, e, tmp15;
          scrut3 = k >= m;
          if (scrut3 === true) {
            break inlinedLbl3
          }
          {
            let inlinedVal8, tmp16, tmp17, inlinedVal9, inlinedVal10, px4, py4, n5, n22, n41, e1, j1, a;
            tmp17 = n21 / 4;
            inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp17));
            inlinedVal8 = 2.0 * 3.141592653589793;
            e = inlinedVal8 / n21;
            px4 = px1;
            py4 = py1;
            n5 = n2;
            n22 = n21;
            n41 = inlinedVal9;
            e1 = e;
            j1 = 1;
            a = 0.0;
            inlinedLbl4: {
              loopLabel4: while (true) {
                let scrut4, a3, tmp18, tmp19, tmp20;
                scrut4 = j1 > n41;
                if (scrut4 === true) {
                  break inlinedLbl4
                }
                {
                  let inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, px5, py5, n6, n23, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                  a3 = 3.0 * a;
                  inlinedVal11 = runtime.safeCall(globalThis.Math.cos(a));
                  inlinedVal12 = runtime.safeCall(globalThis.Math.sin(a));
                  inlinedVal13 = runtime.safeCall(globalThis.Math.cos(a3));
                  inlinedVal14 = runtime.safeCall(globalThis.Math.sin(a3));
                  tmp18 = 2 * n22;
                  px5 = px4;
                  py5 = py4;
                  n6 = n5;
                  n23 = n22;
                  n42 = n41;
                  j2 = j1;
                  cc1 = inlinedVal11;
                  ss1 = inlinedVal12;
                  cc3 = inlinedVal13;
                  ss3 = inlinedVal14;
                  is_1 = j1;
                  id1 = tmp18;
                  inlinedLbl5: {
                    loopLabel5: while (true) {
                      let scrut5, tmp21, tmp22, tmp23, tmp24;
                      scrut5 = is_1 >= n6;
                      if (scrut5 === true) {
                        break inlinedLbl5
                      }
                      {
                        let px6, py6, n7, n43, cc11, ss11, cc31, ss31, id2, i0;
                        px6 = px5;
                        py6 = py5;
                        n7 = n6;
                        n43 = n42;
                        cc11 = cc1;
                        ss11 = ss1;
                        cc31 = cc3;
                        ss31 = ss3;
                        id2 = id1;
                        i0 = is_1;
                        inlinedLbl6: {
                          loopLabel6: while (true) {
                            let scrut6, i11, i21, i31, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42;
                            scrut6 = i0 >= n7;
                            if (scrut6 === true) {
                              break inlinedLbl6
                            }
                            {
                              let inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30;
                              i11 = i0 + n43;
                              i21 = i11 + n43;
                              i31 = i21 + n43;
                              inlinedVal15 = px6.at(i0);
                              inlinedVal16 = px6.at(i21);
                              r1 = inlinedVal15 - inlinedVal16;
                              inlinedVal17 = px6.at(i0);
                              inlinedVal18 = px6.at(i21);
                              tmp25 = inlinedVal17 + inlinedVal18;
                              px6[i0] = tmp25;
                              inlinedVal19 = px6.at(i11);
                              inlinedVal20 = px6.at(i31);
                              r2 = inlinedVal19 - inlinedVal20;
                              inlinedVal21 = px6.at(i11);
                              inlinedVal22 = px6.at(i31);
                              tmp26 = inlinedVal21 + inlinedVal22;
                              px6[i11] = tmp26;
                              inlinedVal23 = py6.at(i0);
                              inlinedVal24 = py6.at(i21);
                              s1 = inlinedVal23 - inlinedVal24;
                              inlinedVal25 = py6.at(i0);
                              inlinedVal26 = py6.at(i21);
                              tmp27 = inlinedVal25 + inlinedVal26;
                              py6[i0] = tmp27;
                              inlinedVal27 = py6.at(i11);
                              inlinedVal28 = py6.at(i31);
                              s2 = inlinedVal27 - inlinedVal28;
                              inlinedVal29 = py6.at(i11);
                              inlinedVal30 = py6.at(i31);
                              tmp28 = inlinedVal29 + inlinedVal30;
                              py6[i11] = tmp28;
                              s3 = r1 - s2;
                              r1b = r1 + s2;
                              s2b = r2 - s1;
                              r2b = r2 + s1;
                              tmp29 = r1b * cc11;
                              tmp30 = s2b * ss11;
                              tmp31 = tmp29 - tmp30;
                              px6[i21] = tmp31;
                              tmp32 = - s2b;
                              tmp33 = tmp32 * cc11;
                              tmp34 = r1b * ss11;
                              tmp35 = tmp33 - tmp34;
                              py6[i21] = tmp35;
                              tmp36 = s3 * cc31;
                              tmp37 = r2b * ss31;
                              tmp38 = tmp36 + tmp37;
                              px6[i31] = tmp38;
                              tmp39 = r2b * cc31;
                              tmp40 = s3 * ss31;
                              tmp41 = tmp39 - tmp40;
                              py6[i31] = tmp41;
                              tmp42 = i0 + id2;
                              i0 = tmp42;
                              continue loopLabel6;
                            }
                          }
                        }
                        tmp21 = 2 * id1;
                        tmp22 = tmp21 - n23;
                        tmp23 = tmp22 + j2;
                        tmp24 = 4 * id1;
                        is_1 = tmp23;
                        id1 = tmp24;
                        continue loopLabel5;
                      }
                    }
                  }
                  tmp19 = j1 + 1;
                  tmp20 = e1 * j1;
                  j1 = tmp19;
                  a = tmp20;
                  continue loopLabel4;
                }
              }
            }
            tmp15 = k + 1;
            tmp16 = n21 / 2;
            inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k = tmp15;
            n21 = inlinedVal10;
            continue loopLabel3;
          }
        }
      }
      px2 = px;
      py2 = py;
      n3 = element0$1;
      is_ = 1;
      id = 4;
      inlinedLbl4: {
        loopLabel4: while (true) {
          let scrut3, tmp15, tmp16, tmp17;
          scrut3 = is_ >= n3;
          if (scrut3 === true) {
            break inlinedLbl4
          }
          {
            let px4, py4, n5, id1, i0;
            px4 = px2;
            py4 = py2;
            n5 = n3;
            id1 = id;
            i0 = is_;
            inlinedLbl5: {
              loopLabel5: while (true) {
                let scrut4, i11, tmp18, tmp19, tmp20, tmp21, tmp22;
                scrut4 = i0 > n5;
                if (scrut4 === true) {
                  break inlinedLbl5
                }
                {
                  let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
                  i11 = i0 + 1;
                  inlinedVal8 = px4.at(i0);
                  inlinedVal9 = px4.at(i11);
                  tmp18 = inlinedVal8 + inlinedVal9;
                  px4[i0] = tmp18;
                  inlinedVal10 = px4.at(i11);
                  tmp19 = inlinedVal8 - inlinedVal10;
                  px4[i11] = tmp19;
                  inlinedVal11 = py4.at(i0);
                  inlinedVal12 = py4.at(i11);
                  tmp20 = inlinedVal11 + inlinedVal12;
                  py4[i0] = tmp20;
                  inlinedVal13 = py4.at(i11);
                  tmp21 = inlinedVal11 - inlinedVal13;
                  py4[i11] = tmp21;
                  tmp22 = i0 + id1;
                  i0 = tmp22;
                  continue loopLabel5;
                }
              }
            }
            tmp15 = 2 * id;
            tmp16 = tmp15 - 1;
            tmp17 = 4 * id;
            is_ = tmp16;
            id = tmp17;
            continue loopLabel4;
          }
        }
      }
      px3 = px;
      py3 = py;
      n4 = element0$1;
      i5 = 1;
      j = 1;
      inlinedLbl5: {
        loopLabel5: while (true) {
          let scrut3, scrut4, tmp15;
          scrut3 = i5 >= n4;
          if (scrut3 === true) {
            break inlinedLbl5
          }
          {
            let tmp16, inlinedVal8, k1, j1, inlinedVal9;
            scrut4 = i5 < j;
            if (scrut4 === true) {
              let inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
              inlinedVal10 = px3.at(j);
              inlinedVal11 = px3.at(i5);
              px3[j] = inlinedVal11;
              px3[i5] = inlinedVal10;
              inlinedVal12 = py3.at(j);
              inlinedVal13 = py3.at(i5);
              py3[j] = inlinedVal13;
              py3[i5] = inlinedVal12;
            }
            tmp16 = n4 / 2;
            inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp16));
            k1 = inlinedVal8;
            j1 = j;
            inlinedLbl6: {
              loopLabel6: while (true) {
                let scrut5, tmp17;
                scrut5 = k1 < j1;
                if (scrut5 === true) {
                  let tmp18, inlinedVal10;
                  tmp18 = k1 / 2;
                  inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp18));
                  tmp17 = j1 - k1;
                  k1 = inlinedVal10;
                  j1 = tmp17;
                  continue loopLabel6
                }
                inlinedVal9 = j1 + k1;
                break inlinedLbl6;
              }
            }
            tmp15 = i5 + 1;
            i5 = tmp15;
            j = inlinedVal9;
            continue loopLabel5;
          }
        }
      }
      np3 = np1;
      pxr2 = pxr;
      pxi2 = pxi;
      i2 = 0;
      zr = 0.0;
      zi = 0.0;
      inlinedLbl6: {
        loopLabel6: while (true) {
          let scrut3, scrut4, scrut5, tmp15, tmp16, tmp17, element0$2, tmp18, tmp19, element0$3, tmp20;
          scrut3 = i2 >= np3;
          if (scrut3 === true) {
            inlinedVal2 = globalThis.Object.freeze([
              zr,
              zi
            ]);
            break inlinedLbl6
          }
          {
            let inlinedVal8, inlinedVal9;
            tmp15 = i2 + 1;
            inlinedVal8 = pxr2.at(tmp15);
            tmp16 = inlinedVal8 - i2;
            inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp16));
            scrut4 = zr < inlinedVal9;
            if (scrut4 === true) {
              tmp17 = globalThis.Object.freeze([
                inlinedVal9,
                i2
              ]);
            } else {
              tmp17 = globalThis.Object.freeze([
                zr,
                undefined
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp17) && tmp17.length === 2) {
              let inlinedVal10, inlinedVal11;
              element0$2 = runtime.Tuple.get(tmp17, 0);
              tmp18 = i2 + 1;
              inlinedVal10 = pxi2.at(tmp18);
              inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
              scrut5 = zi < inlinedVal11;
              if (scrut5 === true) {
                tmp19 = globalThis.Object.freeze([
                  inlinedVal11,
                  i2
                ]);
              } else {
                tmp19 = globalThis.Object.freeze([
                  zi,
                  undefined
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp19) && tmp19.length === 2) {
                element0$3 = runtime.Tuple.get(tmp19, 0);
                tmp20 = i2 + 1;
                i2 = tmp20;
                zr = element0$2;
                zi = element0$3;
                continue loopLabel6
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal8, inlinedVal9;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element0$));
        inlinedVal9 = runtime.safeCall(globalThis.Math.abs(element1$));
        scrut1 = inlinedVal8 < inlinedVal9;
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_i_loop_i$tailrec$loop_i$tailrec = function loop_i_loop_i$tailrec$loop_i$tailrec(px, py, n, i, j) {
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
loop_is2_loop_is2$tailrec$loop_is2$tailrec = function loop_is2_loop_is2$tailrec$loop_is2$tailrec(px, py, n, is_, id) {
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
loop_k_loop_k$tailrec$loop_k$tailrec = function loop_k_loop_k$tailrec$loop_k$tailrec(px, py, n, m, k, n2) {
  loopLabel: while (true) {
    let scrut, e, tmp;
    scrut = k >= m;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, tmp1, tmp2, inlinedVal1, inlinedVal2, px1, py1, n1, n21, n4, e1, j, a;
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
loop_k_loop_k$tailrec$loop_k$tailrec1 = function loop_k_loop_k$tailrec$loop_k$tailrec(k, j) {
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
loop_j_loop_j$tailrec$loop_j$tailrec = function loop_j_loop_j$tailrec$loop_j$tailrec(px, py, n, n2, n4, e, j, a) {
  loopLabel: while (true) {
    let scrut, a3, tmp, tmp1, tmp2;
    scrut = j > n4;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, px1, py1, n1, n21, n41, j1, cc1, ss1, cc3, ss3, is_, id;
      a3 = 3.0 * a;
      inlinedVal = runtime.safeCall(globalThis.Math.cos(a));
      inlinedVal1 = runtime.safeCall(globalThis.Math.sin(a));
      inlinedVal2 = runtime.safeCall(globalThis.Math.cos(a3));
      inlinedVal3 = runtime.safeCall(globalThis.Math.sin(a3));
      tmp = 2 * n2;
      px1 = px;
      py1 = py;
      n1 = n;
      n21 = n2;
      n41 = n4;
      j1 = j;
      cc1 = inlinedVal;
      ss1 = inlinedVal1;
      cc3 = inlinedVal2;
      ss3 = inlinedVal3;
      is_ = j;
      id = tmp;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, tmp3, tmp4, tmp5, tmp6;
          scrut1 = is_ >= n1;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let px2, py2, n3, n42, cc11, ss11, cc31, ss31, id1, i0;
            px2 = px1;
            py2 = py1;
            n3 = n1;
            n42 = n41;
            cc11 = cc1;
            ss11 = ss1;
            cc31 = cc3;
            ss31 = ss3;
            id1 = id;
            i0 = is_;
            inlinedLbl1: {
              loopLabel2: while (true) {
                let scrut2, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
                scrut2 = i0 >= n3;
                if (scrut2 === true) {
                  break inlinedLbl1
                }
                {
                  let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19;
                  i1 = i0 + n42;
                  i2 = i1 + n42;
                  i3 = i2 + n42;
                  inlinedVal4 = px2.at(i0);
                  inlinedVal5 = px2.at(i2);
                  r1 = inlinedVal4 - inlinedVal5;
                  inlinedVal6 = px2.at(i0);
                  inlinedVal7 = px2.at(i2);
                  tmp7 = inlinedVal6 + inlinedVal7;
                  px2[i0] = tmp7;
                  inlinedVal8 = px2.at(i1);
                  inlinedVal9 = px2.at(i3);
                  r2 = inlinedVal8 - inlinedVal9;
                  inlinedVal10 = px2.at(i1);
                  inlinedVal11 = px2.at(i3);
                  tmp8 = inlinedVal10 + inlinedVal11;
                  px2[i1] = tmp8;
                  inlinedVal12 = py2.at(i0);
                  inlinedVal13 = py2.at(i2);
                  s1 = inlinedVal12 - inlinedVal13;
                  inlinedVal14 = py2.at(i0);
                  inlinedVal15 = py2.at(i2);
                  tmp9 = inlinedVal14 + inlinedVal15;
                  py2[i0] = tmp9;
                  inlinedVal16 = py2.at(i1);
                  inlinedVal17 = py2.at(i3);
                  s2 = inlinedVal16 - inlinedVal17;
                  inlinedVal18 = py2.at(i1);
                  inlinedVal19 = py2.at(i3);
                  tmp10 = inlinedVal18 + inlinedVal19;
                  py2[i1] = tmp10;
                  s3 = r1 - s2;
                  r1b = r1 + s2;
                  s2b = r2 - s1;
                  r2b = r2 + s1;
                  tmp11 = r1b * cc11;
                  tmp12 = s2b * ss11;
                  tmp13 = tmp11 - tmp12;
                  px2[i2] = tmp13;
                  tmp14 = - s2b;
                  tmp15 = tmp14 * cc11;
                  tmp16 = r1b * ss11;
                  tmp17 = tmp15 - tmp16;
                  py2[i2] = tmp17;
                  tmp18 = s3 * cc31;
                  tmp19 = r2b * ss31;
                  tmp20 = tmp18 + tmp19;
                  px2[i3] = tmp20;
                  tmp21 = r2b * cc31;
                  tmp22 = s3 * ss31;
                  tmp23 = tmp21 - tmp22;
                  py2[i3] = tmp23;
                  tmp24 = i0 + id1;
                  i0 = tmp24;
                  continue loopLabel2;
                }
              }
            }
            tmp3 = 2 * id;
            tmp4 = tmp3 - n21;
            tmp5 = tmp4 + j1;
            tmp6 = 4 * id;
            is_ = tmp5;
            id = tmp6;
            continue loopLabel1;
          }
        }
      }
      tmp1 = j + 1;
      tmp2 = e * j;
      j = tmp1;
      a = tmp2;
      continue loopLabel;
    }
  }
};
loop_is_loop_is$tailrec$loop_is$tailrec = function loop_is_loop_is$tailrec$loop_is$tailrec(px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let px1, py1, n1, n41, cc11, ss11, cc31, ss31, id1, i0;
      px1 = px;
      py1 = py;
      n1 = n;
      n41 = n4;
      cc11 = cc1;
      ss11 = ss1;
      cc31 = cc3;
      ss31 = ss3;
      id1 = id;
      i0 = is_;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
          scrut1 = i0 >= n1;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15;
            i1 = i0 + n41;
            i2 = i1 + n41;
            i3 = i2 + n41;
            inlinedVal = px1.at(i0);
            inlinedVal1 = px1.at(i2);
            r1 = inlinedVal - inlinedVal1;
            inlinedVal2 = px1.at(i0);
            inlinedVal3 = px1.at(i2);
            tmp4 = inlinedVal2 + inlinedVal3;
            px1[i0] = tmp4;
            inlinedVal4 = px1.at(i1);
            inlinedVal5 = px1.at(i3);
            r2 = inlinedVal4 - inlinedVal5;
            inlinedVal6 = px1.at(i1);
            inlinedVal7 = px1.at(i3);
            tmp5 = inlinedVal6 + inlinedVal7;
            px1[i1] = tmp5;
            inlinedVal8 = py1.at(i0);
            inlinedVal9 = py1.at(i2);
            s1 = inlinedVal8 - inlinedVal9;
            inlinedVal10 = py1.at(i0);
            inlinedVal11 = py1.at(i2);
            tmp6 = inlinedVal10 + inlinedVal11;
            py1[i0] = tmp6;
            inlinedVal12 = py1.at(i1);
            inlinedVal13 = py1.at(i3);
            s2 = inlinedVal12 - inlinedVal13;
            inlinedVal14 = py1.at(i1);
            inlinedVal15 = py1.at(i3);
            tmp7 = inlinedVal14 + inlinedVal15;
            py1[i1] = tmp7;
            s3 = r1 - s2;
            r1b = r1 + s2;
            s2b = r2 - s1;
            r2b = r2 + s1;
            tmp8 = r1b * cc11;
            tmp9 = s2b * ss11;
            tmp10 = tmp8 - tmp9;
            px1[i2] = tmp10;
            tmp11 = - s2b;
            tmp12 = tmp11 * cc11;
            tmp13 = r1b * ss11;
            tmp14 = tmp12 - tmp13;
            py1[i2] = tmp14;
            tmp15 = s3 * cc31;
            tmp16 = r2b * ss31;
            tmp17 = tmp15 + tmp16;
            px1[i3] = tmp17;
            tmp18 = r2b * cc31;
            tmp19 = s3 * ss31;
            tmp20 = tmp18 - tmp19;
            py1[i3] = tmp20;
            tmp21 = i0 + id1;
            i0 = tmp21;
            continue loopLabel1;
          }
        }
      }
      tmp = 2 * id;
      tmp1 = tmp - n2;
      tmp2 = tmp1 + j;
      tmp3 = 4 * id;
      is_ = tmp2;
      id = tmp3;
      continue loopLabel;
    }
  }
};
loop_i2_loop_i2$tailrec$loop_i2$tailrec = function loop_i2_loop_i2$tailrec$loop_i2$tailrec(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, tmp, tmp1, tmp2, element0$, tmp3, tmp4, element0$1, tmp5;
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
          undefined
        ]);
      }
      if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
        let inlinedVal2, inlinedVal3;
        element0$ = runtime.Tuple.get(tmp2, 0);
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
            undefined
          ]);
        }
        if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
          element0$1 = runtime.Tuple.get(tmp4, 0);
          tmp5 = i + 1;
          i = tmp5;
          zr = element0$;
          zi = element0$1;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
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
loop_is2$tailrec = function loop_is2$tailrec(fft2, px, py, n, is_, id) {
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
loop_is$tailrec = function loop_is$tailrec(fft2, px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let px1, py1, n1, n41, cc11, ss11, cc31, ss31, id1, i0;
      px1 = px;
      py1 = py;
      n1 = n;
      n41 = n4;
      cc11 = cc1;
      ss11 = ss1;
      cc31 = cc3;
      ss31 = ss3;
      id1 = id;
      i0 = is_;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
          scrut1 = i0 >= n1;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15;
            i1 = i0 + n41;
            i2 = i1 + n41;
            i3 = i2 + n41;
            inlinedVal = px1.at(i0);
            inlinedVal1 = px1.at(i2);
            r1 = inlinedVal - inlinedVal1;
            inlinedVal2 = px1.at(i0);
            inlinedVal3 = px1.at(i2);
            tmp4 = inlinedVal2 + inlinedVal3;
            px1[i0] = tmp4;
            inlinedVal4 = px1.at(i1);
            inlinedVal5 = px1.at(i3);
            r2 = inlinedVal4 - inlinedVal5;
            inlinedVal6 = px1.at(i1);
            inlinedVal7 = px1.at(i3);
            tmp5 = inlinedVal6 + inlinedVal7;
            px1[i1] = tmp5;
            inlinedVal8 = py1.at(i0);
            inlinedVal9 = py1.at(i2);
            s1 = inlinedVal8 - inlinedVal9;
            inlinedVal10 = py1.at(i0);
            inlinedVal11 = py1.at(i2);
            tmp6 = inlinedVal10 + inlinedVal11;
            py1[i0] = tmp6;
            inlinedVal12 = py1.at(i1);
            inlinedVal13 = py1.at(i3);
            s2 = inlinedVal12 - inlinedVal13;
            inlinedVal14 = py1.at(i1);
            inlinedVal15 = py1.at(i3);
            tmp7 = inlinedVal14 + inlinedVal15;
            py1[i1] = tmp7;
            s3 = r1 - s2;
            r1b = r1 + s2;
            s2b = r2 - s1;
            r2b = r2 + s1;
            tmp8 = r1b * cc11;
            tmp9 = s2b * ss11;
            tmp10 = tmp8 - tmp9;
            px1[i2] = tmp10;
            tmp11 = - s2b;
            tmp12 = tmp11 * cc11;
            tmp13 = r1b * ss11;
            tmp14 = tmp12 - tmp13;
            py1[i2] = tmp14;
            tmp15 = s3 * cc31;
            tmp16 = r2b * ss31;
            tmp17 = tmp15 + tmp16;
            px1[i3] = tmp17;
            tmp18 = r2b * cc31;
            tmp19 = s3 * ss31;
            tmp20 = tmp18 - tmp19;
            py1[i3] = tmp20;
            tmp21 = i0 + id1;
            i0 = tmp21;
            continue loopLabel1;
          }
        }
      }
      tmp = 2 * id;
      tmp1 = tmp - n2;
      tmp2 = tmp1 + j;
      tmp3 = 4 * id;
      is_ = tmp2;
      id = tmp3;
      continue loopLabel;
    }
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
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, px1, py1, n1, n21, n41, j1, cc1, ss1, cc3, ss3, is_, id;
      a3 = 3.0 * a;
      inlinedVal = runtime.safeCall(globalThis.Math.cos(a));
      inlinedVal1 = runtime.safeCall(globalThis.Math.sin(a));
      inlinedVal2 = runtime.safeCall(globalThis.Math.cos(a3));
      inlinedVal3 = runtime.safeCall(globalThis.Math.sin(a3));
      tmp = 2 * n2;
      px1 = px;
      py1 = py;
      n1 = n;
      n21 = n2;
      n41 = n4;
      j1 = j;
      cc1 = inlinedVal;
      ss1 = inlinedVal1;
      cc3 = inlinedVal2;
      ss3 = inlinedVal3;
      is_ = j;
      id = tmp;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut1, tmp3, tmp4, tmp5, tmp6;
          scrut1 = is_ >= n1;
          if (scrut1 === true) {
            break inlinedLbl
          }
          {
            let px2, py2, n3, n42, cc11, ss11, cc31, ss31, id1, i0;
            px2 = px1;
            py2 = py1;
            n3 = n1;
            n42 = n41;
            cc11 = cc1;
            ss11 = ss1;
            cc31 = cc3;
            ss31 = ss3;
            id1 = id;
            i0 = is_;
            inlinedLbl1: {
              loopLabel2: while (true) {
                let scrut2, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
                scrut2 = i0 >= n3;
                if (scrut2 === true) {
                  break inlinedLbl1
                }
                {
                  let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19;
                  i1 = i0 + n42;
                  i2 = i1 + n42;
                  i3 = i2 + n42;
                  inlinedVal4 = px2.at(i0);
                  inlinedVal5 = px2.at(i2);
                  r1 = inlinedVal4 - inlinedVal5;
                  inlinedVal6 = px2.at(i0);
                  inlinedVal7 = px2.at(i2);
                  tmp7 = inlinedVal6 + inlinedVal7;
                  px2[i0] = tmp7;
                  inlinedVal8 = px2.at(i1);
                  inlinedVal9 = px2.at(i3);
                  r2 = inlinedVal8 - inlinedVal9;
                  inlinedVal10 = px2.at(i1);
                  inlinedVal11 = px2.at(i3);
                  tmp8 = inlinedVal10 + inlinedVal11;
                  px2[i1] = tmp8;
                  inlinedVal12 = py2.at(i0);
                  inlinedVal13 = py2.at(i2);
                  s1 = inlinedVal12 - inlinedVal13;
                  inlinedVal14 = py2.at(i0);
                  inlinedVal15 = py2.at(i2);
                  tmp9 = inlinedVal14 + inlinedVal15;
                  py2[i0] = tmp9;
                  inlinedVal16 = py2.at(i1);
                  inlinedVal17 = py2.at(i3);
                  s2 = inlinedVal16 - inlinedVal17;
                  inlinedVal18 = py2.at(i1);
                  inlinedVal19 = py2.at(i3);
                  tmp10 = inlinedVal18 + inlinedVal19;
                  py2[i1] = tmp10;
                  s3 = r1 - s2;
                  r1b = r1 + s2;
                  s2b = r2 - s1;
                  r2b = r2 + s1;
                  tmp11 = r1b * cc11;
                  tmp12 = s2b * ss11;
                  tmp13 = tmp11 - tmp12;
                  px2[i2] = tmp13;
                  tmp14 = - s2b;
                  tmp15 = tmp14 * cc11;
                  tmp16 = r1b * ss11;
                  tmp17 = tmp15 - tmp16;
                  py2[i2] = tmp17;
                  tmp18 = s3 * cc31;
                  tmp19 = r2b * ss31;
                  tmp20 = tmp18 + tmp19;
                  px2[i3] = tmp20;
                  tmp21 = r2b * cc31;
                  tmp22 = s3 * ss31;
                  tmp23 = tmp21 - tmp22;
                  py2[i3] = tmp23;
                  tmp24 = i0 + id1;
                  i0 = tmp24;
                  continue loopLabel2;
                }
              }
            }
            tmp3 = 2 * id;
            tmp4 = tmp3 - n21;
            tmp5 = tmp4 + j1;
            tmp6 = 4 * id;
            is_ = tmp5;
            id = tmp6;
            continue loopLabel1;
          }
        }
      }
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
      let inlinedVal, tmp1, tmp2, inlinedVal1, inlinedVal2, px1, py1, n1, n21, n4, e1, j, a;
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
    let scrut, scrut1, scrut2, tmp, tmp1, tmp2, element0$, tmp3, tmp4, element0$1, tmp5;
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
          tmp5 = i + 1;
          i = tmp5;
          zr = element0$;
          zi = element0$1;
          kr = undefined;
          ki = undefined;
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
          return loop_i2_loop_i2$tailrec$loop_i2$tailrec(np, pxr, pxi, i, zr, zi)
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
    return loop_is_loop_is$tailrec$loop_is$tailrec(px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id)
  }
};
loop_j = function loop_j(fft2, px, py, n, n2, n4, e, j) {
  return (a) => {
    return loop_j_loop_j$tailrec$loop_j$tailrec(px, py, n, n2, n4, e, j, a)
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
    return loop_k_loop_k$tailrec$loop_k$tailrec1(k, j)
  }
};
find_num_points = function find_num_points(np, i) {
  return (m) => {
    return find_num_points$tailrec(np, i, m)
  }
};
loop_k1 = function loop_k(fft2, px, py, n, m, k) {
  return (n2) => {
    return loop_k_loop_k$tailrec$loop_k$tailrec(px, py, n, m, k, n2)
  }
};
loop_is2 = function loop_is2(fft2, px, py, n, is_) {
  return (id) => {
    return loop_is2_loop_is2$tailrec$loop_is2$tailrec(px, py, n, is_, id)
  }
};
loop_i = function loop_i(fft2, px, py, n, i) {
  return (j) => {
    return loop_i_loop_i$tailrec$loop_i$tailrec(px, py, n, i, j)
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
    let scrut, tmp, tmp1, tmp2, tmp3;
    tmp = fft.#nSizes();
    scrut = i > tmp;
    if (scrut === true) {
      return fft.Nil
    }
    {
      let np1, inlinedVal, npm, pxr, pxi, t, scrut1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, element1$, element0$, inlinedVal1, np2, npm1, pxr1, pxi1, t1, i1, np3, pxr2, pxi2, i2, zr, zi, inlinedVal2, tmp11, tmp12, tmp13, tmp14, inlinedVal3, arr, i3, n, x, inlinedVal4, arr1, i4, n1, x1, inlinedVal5, inlinedVal6, px, py, scrut2, element1$1, element0$1, tmp15, inlinedVal7;
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
          let scrut3, tmp16;
          scrut3 = i3 == n;
          if (scrut3 === true) {
            inlinedVal4 = arr;
            break inlinedLbl
          }
          arr[i3] = x;
          tmp16 = i3 + 1;
          i3 = tmp16;
          continue loopLabel;
        }
      }
      inlinedVal1 = inlinedVal4;
      pxr = inlinedVal4;
      tmp5 = np + 2;
      tmp13 = [];
      arr1 = tmp13;
      i4 = 0;
      n1 = tmp5;
      x1 = 0.0;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut3, tmp16;
          scrut3 = i4 == n1;
          if (scrut3 === true) {
            inlinedVal5 = arr1;
            break inlinedLbl1
          }
          arr1[i4] = x1;
          tmp16 = i4 + 1;
          i4 = tmp16;
          continue loopLabel1;
        }
      }
      pxi = inlinedVal5;
      t = 3.141592653589793 / np;
      tmp6 = np - 1.0;
      tmp7 = tmp6 * 0.5;
      inlinedVal1[1] = tmp7;
      inlinedVal5[1] = 0.0;
      tmp14 = np / 2;
      inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp14));
      tmp8 = inlinedVal6 + 1;
      tmp9 = - 0.5;
      inlinedVal1[tmp8] = tmp9;
      tmp10 = inlinedVal6 + 1;
      inlinedVal5[tmp10] = 0.0;
      np2 = np;
      npm1 = npm;
      pxr1 = inlinedVal1;
      pxi1 = inlinedVal5;
      t1 = t;
      i1 = 1;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut3, j, z, y, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
          scrut3 = i1 > npm1;
          if (scrut3 === true) {
            break inlinedLbl2
          }
          {
            let inlinedVal8, inlinedVal9;
            j = np2 - i1;
            tmp16 = i1 + 1;
            tmp17 = - 0.5;
            pxr1[tmp16] = tmp17;
            tmp18 = j + 1;
            tmp19 = - 0.5;
            pxr1[tmp18] = tmp19;
            z = t1 * i1;
            inlinedVal8 = runtime.safeCall(globalThis.Math.cos(z));
            inlinedVal9 = runtime.safeCall(globalThis.Math.sin(z));
            tmp20 = inlinedVal8 / inlinedVal9;
            tmp21 = 0.5 * tmp20;
            y = - tmp21;
            tmp22 = i1 + 1;
            pxi1[tmp22] = y;
            tmp23 = j + 1;
            tmp24 = - y;
            pxi1[tmp23] = tmp24;
            tmp25 = i1 + 1;
            i1 = tmp25;
            continue loopLabel2;
          }
        }
      }
      px = pxr;
      py = pxi;
      inlinedVal7 = find_num_points$tailrec(np1, 2, 1);
      if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
        let px1, py1, n2, m, k, n21, px2, py2, n3, is_, id, px3, py3, n4, i5, j;
        element0$1 = runtime.Tuple.get(inlinedVal7, 0);
        element1$1 = runtime.Tuple.get(inlinedVal7, 1);
        scrut2 = element0$1 != np1;
        if (scrut2 === true) {
          let px4, py4, n5, i6;
          tmp15 = np1 + 1;
          px4 = pxr;
          py4 = pxi;
          n5 = element0$1;
          i6 = tmp15;
          inlinedLbl3: {
            loopLabel3: while (true) {
              let scrut3, tmp16;
              scrut3 = i6 > n5;
              if (scrut3 === true) {
                break inlinedLbl3
              }
              px4[i6] = 0.0;
              py4[i6] = 0.0;
              tmp16 = i6 + 1;
              i6 = tmp16;
              continue loopLabel3;
            }
          }
        }
        px1 = px;
        py1 = py;
        n2 = element0$1;
        m = element1$1;
        k = 1;
        n21 = element0$1;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut3, e, tmp16;
            scrut3 = k >= m;
            if (scrut3 === true) {
              break inlinedLbl3
            }
            {
              let inlinedVal8, tmp17, tmp18, inlinedVal9, inlinedVal10, px4, py4, n5, n22, n41, e1, j1, a;
              tmp18 = n21 / 4;
              inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp18));
              inlinedVal8 = 2.0 * 3.141592653589793;
              e = inlinedVal8 / n21;
              px4 = px1;
              py4 = py1;
              n5 = n2;
              n22 = n21;
              n41 = inlinedVal9;
              e1 = e;
              j1 = 1;
              a = 0.0;
              inlinedLbl4: {
                loopLabel4: while (true) {
                  let scrut4, a3, tmp19, tmp20, tmp21;
                  scrut4 = j1 > n41;
                  if (scrut4 === true) {
                    break inlinedLbl4
                  }
                  {
                    let inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, px5, py5, n6, n23, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                    a3 = 3.0 * a;
                    inlinedVal11 = runtime.safeCall(globalThis.Math.cos(a));
                    inlinedVal12 = runtime.safeCall(globalThis.Math.sin(a));
                    inlinedVal13 = runtime.safeCall(globalThis.Math.cos(a3));
                    inlinedVal14 = runtime.safeCall(globalThis.Math.sin(a3));
                    tmp19 = 2 * n22;
                    px5 = px4;
                    py5 = py4;
                    n6 = n5;
                    n23 = n22;
                    n42 = n41;
                    j2 = j1;
                    cc1 = inlinedVal11;
                    ss1 = inlinedVal12;
                    cc3 = inlinedVal13;
                    ss3 = inlinedVal14;
                    is_1 = j1;
                    id1 = tmp19;
                    inlinedLbl5: {
                      loopLabel5: while (true) {
                        let scrut5, tmp22, tmp23, tmp24, tmp25;
                        scrut5 = is_1 >= n6;
                        if (scrut5 === true) {
                          break inlinedLbl5
                        }
                        {
                          let px6, py6, n7, n43, cc11, ss11, cc31, ss31, id2, i0;
                          px6 = px5;
                          py6 = py5;
                          n7 = n6;
                          n43 = n42;
                          cc11 = cc1;
                          ss11 = ss1;
                          cc31 = cc3;
                          ss31 = ss3;
                          id2 = id1;
                          i0 = is_1;
                          inlinedLbl6: {
                            loopLabel6: while (true) {
                              let scrut6, i11, i21, i31, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43;
                              scrut6 = i0 >= n7;
                              if (scrut6 === true) {
                                break inlinedLbl6
                              }
                              {
                                let inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30;
                                i11 = i0 + n43;
                                i21 = i11 + n43;
                                i31 = i21 + n43;
                                inlinedVal15 = px6.at(i0);
                                inlinedVal16 = px6.at(i21);
                                r1 = inlinedVal15 - inlinedVal16;
                                inlinedVal17 = px6.at(i0);
                                inlinedVal18 = px6.at(i21);
                                tmp26 = inlinedVal17 + inlinedVal18;
                                px6[i0] = tmp26;
                                inlinedVal19 = px6.at(i11);
                                inlinedVal20 = px6.at(i31);
                                r2 = inlinedVal19 - inlinedVal20;
                                inlinedVal21 = px6.at(i11);
                                inlinedVal22 = px6.at(i31);
                                tmp27 = inlinedVal21 + inlinedVal22;
                                px6[i11] = tmp27;
                                inlinedVal23 = py6.at(i0);
                                inlinedVal24 = py6.at(i21);
                                s1 = inlinedVal23 - inlinedVal24;
                                inlinedVal25 = py6.at(i0);
                                inlinedVal26 = py6.at(i21);
                                tmp28 = inlinedVal25 + inlinedVal26;
                                py6[i0] = tmp28;
                                inlinedVal27 = py6.at(i11);
                                inlinedVal28 = py6.at(i31);
                                s2 = inlinedVal27 - inlinedVal28;
                                inlinedVal29 = py6.at(i11);
                                inlinedVal30 = py6.at(i31);
                                tmp29 = inlinedVal29 + inlinedVal30;
                                py6[i11] = tmp29;
                                s3 = r1 - s2;
                                r1b = r1 + s2;
                                s2b = r2 - s1;
                                r2b = r2 + s1;
                                tmp30 = r1b * cc11;
                                tmp31 = s2b * ss11;
                                tmp32 = tmp30 - tmp31;
                                px6[i21] = tmp32;
                                tmp33 = - s2b;
                                tmp34 = tmp33 * cc11;
                                tmp35 = r1b * ss11;
                                tmp36 = tmp34 - tmp35;
                                py6[i21] = tmp36;
                                tmp37 = s3 * cc31;
                                tmp38 = r2b * ss31;
                                tmp39 = tmp37 + tmp38;
                                px6[i31] = tmp39;
                                tmp40 = r2b * cc31;
                                tmp41 = s3 * ss31;
                                tmp42 = tmp40 - tmp41;
                                py6[i31] = tmp42;
                                tmp43 = i0 + id2;
                                i0 = tmp43;
                                continue loopLabel6;
                              }
                            }
                          }
                          tmp22 = 2 * id1;
                          tmp23 = tmp22 - n23;
                          tmp24 = tmp23 + j2;
                          tmp25 = 4 * id1;
                          is_1 = tmp24;
                          id1 = tmp25;
                          continue loopLabel5;
                        }
                      }
                    }
                    tmp20 = j1 + 1;
                    tmp21 = e1 * j1;
                    j1 = tmp20;
                    a = tmp21;
                    continue loopLabel4;
                  }
                }
              }
              tmp16 = k + 1;
              tmp17 = n21 / 2;
              inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp17));
              k = tmp16;
              n21 = inlinedVal10;
              continue loopLabel3;
            }
          }
        }
        px2 = px;
        py2 = py;
        n3 = element0$1;
        is_ = 1;
        id = 4;
        inlinedLbl4: {
          loopLabel4: while (true) {
            let scrut3, tmp16, tmp17, tmp18;
            scrut3 = is_ >= n3;
            if (scrut3 === true) {
              break inlinedLbl4
            }
            {
              let px4, py4, n5, id1, i0;
              px4 = px2;
              py4 = py2;
              n5 = n3;
              id1 = id;
              i0 = is_;
              inlinedLbl5: {
                loopLabel5: while (true) {
                  let scrut4, i11, tmp19, tmp20, tmp21, tmp22, tmp23;
                  scrut4 = i0 > n5;
                  if (scrut4 === true) {
                    break inlinedLbl5
                  }
                  {
                    let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
                    i11 = i0 + 1;
                    inlinedVal8 = px4.at(i0);
                    inlinedVal9 = px4.at(i11);
                    tmp19 = inlinedVal8 + inlinedVal9;
                    px4[i0] = tmp19;
                    inlinedVal10 = px4.at(i11);
                    tmp20 = inlinedVal8 - inlinedVal10;
                    px4[i11] = tmp20;
                    inlinedVal11 = py4.at(i0);
                    inlinedVal12 = py4.at(i11);
                    tmp21 = inlinedVal11 + inlinedVal12;
                    py4[i0] = tmp21;
                    inlinedVal13 = py4.at(i11);
                    tmp22 = inlinedVal11 - inlinedVal13;
                    py4[i11] = tmp22;
                    tmp23 = i0 + id1;
                    i0 = tmp23;
                    continue loopLabel5;
                  }
                }
              }
              tmp16 = 2 * id;
              tmp17 = tmp16 - 1;
              tmp18 = 4 * id;
              is_ = tmp17;
              id = tmp18;
              continue loopLabel4;
            }
          }
        }
        px3 = px;
        py3 = py;
        n4 = element0$1;
        i5 = 1;
        j = 1;
        inlinedLbl5: {
          loopLabel5: while (true) {
            let scrut3, scrut4, tmp16;
            scrut3 = i5 >= n4;
            if (scrut3 === true) {
              break inlinedLbl5
            }
            {
              let tmp17, inlinedVal8, k1, j1, inlinedVal9;
              scrut4 = i5 < j;
              if (scrut4 === true) {
                let inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13;
                inlinedVal10 = px3.at(j);
                inlinedVal11 = px3.at(i5);
                px3[j] = inlinedVal11;
                px3[i5] = inlinedVal10;
                inlinedVal12 = py3.at(j);
                inlinedVal13 = py3.at(i5);
                py3[j] = inlinedVal13;
                py3[i5] = inlinedVal12;
              }
              tmp17 = n4 / 2;
              inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp17));
              k1 = inlinedVal8;
              j1 = j;
              inlinedLbl6: {
                loopLabel6: while (true) {
                  let scrut5, tmp18;
                  scrut5 = k1 < j1;
                  if (scrut5 === true) {
                    let tmp19, inlinedVal10;
                    tmp19 = k1 / 2;
                    inlinedVal10 = runtime.safeCall(globalThis.Math.floor(tmp19));
                    tmp18 = j1 - k1;
                    k1 = inlinedVal10;
                    j1 = tmp18;
                    continue loopLabel6
                  }
                  inlinedVal9 = j1 + k1;
                  break inlinedLbl6;
                }
              }
              tmp16 = i5 + 1;
              i5 = tmp16;
              j = inlinedVal9;
              continue loopLabel5;
            }
          }
        }
        np3 = np1;
        pxr2 = pxr;
        pxi2 = pxi;
        i2 = 0;
        zr = 0.0;
        zi = 0.0;
        inlinedLbl6: {
          loopLabel6: while (true) {
            let scrut3, scrut4, scrut5, tmp16, tmp17, tmp18, element0$2, tmp19, tmp20, element0$3, tmp21;
            scrut3 = i2 >= np3;
            if (scrut3 === true) {
              inlinedVal2 = globalThis.Object.freeze([
                zr,
                zi
              ]);
              break inlinedLbl6
            }
            {
              let inlinedVal8, inlinedVal9;
              tmp16 = i2 + 1;
              inlinedVal8 = pxr2.at(tmp16);
              tmp17 = inlinedVal8 - i2;
              inlinedVal9 = runtime.safeCall(globalThis.Math.abs(tmp17));
              scrut4 = zr < inlinedVal9;
              if (scrut4 === true) {
                tmp18 = globalThis.Object.freeze([
                  inlinedVal9,
                  i2
                ]);
              } else {
                tmp18 = globalThis.Object.freeze([
                  zr,
                  undefined
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp18) && tmp18.length === 2) {
                let inlinedVal10, inlinedVal11;
                element0$2 = runtime.Tuple.get(tmp18, 0);
                tmp19 = i2 + 1;
                inlinedVal10 = pxi2.at(tmp19);
                inlinedVal11 = runtime.safeCall(globalThis.Math.abs(inlinedVal10));
                scrut5 = zi < inlinedVal11;
                if (scrut5 === true) {
                  tmp20 = globalThis.Object.freeze([
                    inlinedVal11,
                    i2
                  ]);
                } else {
                  tmp20 = globalThis.Object.freeze([
                    zi,
                    undefined
                  ]);
                }
                if (runtime.Tuple.isArrayLike(tmp20) && tmp20.length === 2) {
                  element0$3 = runtime.Tuple.get(tmp20, 0);
                  tmp21 = i2 + 1;
                  i2 = tmp21;
                  zr = element0$2;
                  zi = element0$3;
                  continue loopLabel6
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
        }
        if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
          let inlinedVal8, inlinedVal9;
          element0$ = runtime.Tuple.get(inlinedVal2, 0);
          element1$ = runtime.Tuple.get(inlinedVal2, 1);
          inlinedVal8 = runtime.safeCall(globalThis.Math.abs(element0$));
          inlinedVal9 = runtime.safeCall(globalThis.Math.abs(element1$));
          scrut1 = inlinedVal8 < inlinedVal9;
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
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
          let px1, py1, n, m, k, n2, px2, py2, n1, is_, id, px3, py3, n3, i, j;
          element0$ = runtime.Tuple.get(inlinedVal, 0);
          element1$ = runtime.Tuple.get(inlinedVal, 1);
          scrut = element0$ != np;
          if (scrut === true) {
            let px4, py4, n4, i1;
            tmp = np + 1;
            px4 = px;
            py4 = py;
            n4 = element0$;
            i1 = tmp;
            inlinedLbl: {
              loopLabel: while (true) {
                let scrut1, tmp1;
                scrut1 = i1 > n4;
                if (scrut1 === true) {
                  break inlinedLbl
                }
                px4[i1] = 0.0;
                py4[i1] = 0.0;
                tmp1 = i1 + 1;
                i1 = tmp1;
                continue loopLabel;
              }
            }
          }
          px1 = px;
          py1 = py;
          n = element0$;
          m = element1$;
          k = 1;
          n2 = element0$;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut1, e, tmp1;
              scrut1 = k >= m;
              if (scrut1 === true) {
                break inlinedLbl
              }
              {
                let inlinedVal1, tmp2, tmp3, inlinedVal2, inlinedVal3, px4, py4, n4, n21, n41, e1, j1, a;
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
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let scrut2, a3, tmp4, tmp5, tmp6;
                    scrut2 = j1 > n41;
                    if (scrut2 === true) {
                      break inlinedLbl1
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
                      inlinedLbl2: {
                        loopLabel2: while (true) {
                          let scrut3, tmp7, tmp8, tmp9, tmp10;
                          scrut3 = is_1 >= n5;
                          if (scrut3 === true) {
                            break inlinedLbl2
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
                            inlinedLbl3: {
                              loopLabel3: while (true) {
                                let scrut4, i1, i2, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28;
                                scrut4 = i0 >= n6;
                                if (scrut4 === true) {
                                  break inlinedLbl3
                                }
                                {
                                  let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23;
                                  i1 = i0 + n43;
                                  i2 = i1 + n43;
                                  i3 = i2 + n43;
                                  inlinedVal8 = px6.at(i0);
                                  inlinedVal9 = px6.at(i2);
                                  r1 = inlinedVal8 - inlinedVal9;
                                  inlinedVal10 = px6.at(i0);
                                  inlinedVal11 = px6.at(i2);
                                  tmp11 = inlinedVal10 + inlinedVal11;
                                  px6[i0] = tmp11;
                                  inlinedVal12 = px6.at(i1);
                                  inlinedVal13 = px6.at(i3);
                                  r2 = inlinedVal12 - inlinedVal13;
                                  inlinedVal14 = px6.at(i1);
                                  inlinedVal15 = px6.at(i3);
                                  tmp12 = inlinedVal14 + inlinedVal15;
                                  px6[i1] = tmp12;
                                  inlinedVal16 = py6.at(i0);
                                  inlinedVal17 = py6.at(i2);
                                  s1 = inlinedVal16 - inlinedVal17;
                                  inlinedVal18 = py6.at(i0);
                                  inlinedVal19 = py6.at(i2);
                                  tmp13 = inlinedVal18 + inlinedVal19;
                                  py6[i0] = tmp13;
                                  inlinedVal20 = py6.at(i1);
                                  inlinedVal21 = py6.at(i3);
                                  s2 = inlinedVal20 - inlinedVal21;
                                  inlinedVal22 = py6.at(i1);
                                  inlinedVal23 = py6.at(i3);
                                  tmp14 = inlinedVal22 + inlinedVal23;
                                  py6[i1] = tmp14;
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
                                  continue loopLabel3;
                                }
                              }
                            }
                            tmp7 = 2 * id1;
                            tmp8 = tmp7 - n22;
                            tmp9 = tmp8 + j2;
                            tmp10 = 4 * id1;
                            is_1 = tmp9;
                            id1 = tmp10;
                            continue loopLabel2;
                          }
                        }
                      }
                      tmp5 = j1 + 1;
                      tmp6 = e1 * j1;
                      j1 = tmp5;
                      a = tmp6;
                      continue loopLabel1;
                    }
                  }
                }
                tmp1 = k + 1;
                tmp2 = n2 / 2;
                inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp2));
                k = tmp1;
                n2 = inlinedVal3;
                continue loopLabel;
              }
            }
          }
          px2 = px;
          py2 = py;
          n1 = element0$;
          is_ = 1;
          id = 4;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut1, tmp1, tmp2, tmp3;
              scrut1 = is_ >= n1;
              if (scrut1 === true) {
                break inlinedLbl1
              }
              {
                let px4, py4, n4, id1, i0;
                px4 = px2;
                py4 = py2;
                n4 = n1;
                id1 = id;
                i0 = is_;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut2, i1, tmp4, tmp5, tmp6, tmp7, tmp8;
                    scrut2 = i0 > n4;
                    if (scrut2 === true) {
                      break inlinedLbl2
                    }
                    {
                      let inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
                      i1 = i0 + 1;
                      inlinedVal1 = px4.at(i0);
                      inlinedVal2 = px4.at(i1);
                      tmp4 = inlinedVal1 + inlinedVal2;
                      px4[i0] = tmp4;
                      inlinedVal3 = px4.at(i1);
                      tmp5 = inlinedVal1 - inlinedVal3;
                      px4[i1] = tmp5;
                      inlinedVal4 = py4.at(i0);
                      inlinedVal5 = py4.at(i1);
                      tmp6 = inlinedVal4 + inlinedVal5;
                      py4[i0] = tmp6;
                      inlinedVal6 = py4.at(i1);
                      tmp7 = inlinedVal4 - inlinedVal6;
                      py4[i1] = tmp7;
                      tmp8 = i0 + id1;
                      i0 = tmp8;
                      continue loopLabel2;
                    }
                  }
                }
                tmp1 = 2 * id;
                tmp2 = tmp1 - 1;
                tmp3 = 4 * id;
                is_ = tmp2;
                id = tmp3;
                continue loopLabel1;
              }
            }
          }
          px3 = px;
          py3 = py;
          n3 = element0$;
          i = 1;
          j = 1;
          inlinedLbl2: {
            loopLabel2: while (true) {
              let scrut1, scrut2, tmp1;
              scrut1 = i >= n3;
              if (scrut1 === true) {
                break inlinedLbl2
              }
              {
                let tmp2, inlinedVal1, k1, j1, inlinedVal2;
                scrut2 = i < j;
                if (scrut2 === true) {
                  let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6;
                  inlinedVal3 = px3.at(j);
                  inlinedVal4 = px3.at(i);
                  px3[j] = inlinedVal4;
                  px3[i] = inlinedVal3;
                  inlinedVal5 = py3.at(j);
                  inlinedVal6 = py3.at(i);
                  py3[j] = inlinedVal6;
                  py3[i] = inlinedVal5;
                }
                tmp2 = n3 / 2;
                inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
                k1 = inlinedVal1;
                j1 = j;
                inlinedLbl3: {
                  loopLabel3: while (true) {
                    let scrut3, tmp3;
                    scrut3 = k1 < j1;
                    if (scrut3 === true) {
                      let tmp4, inlinedVal3;
                      tmp4 = k1 / 2;
                      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp4));
                      tmp3 = j1 - k1;
                      k1 = inlinedVal3;
                      j1 = tmp3;
                      continue loopLabel3
                    }
                    inlinedVal2 = j1 + k1;
                    break inlinedLbl3;
                  }
                }
                tmp1 = i + 1;
                i = tmp1;
                j = inlinedVal2;
                continue loopLabel2;
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
    let enp, npm, pxr, pxi, t, n2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, element1$, element0$, tmp9, tmp10, np1, npm1, pxr1, pxi1, t1, i, np2, pxr2, pxi2, i1, zr, zi, inlinedVal, px, py, scrut1, element1$1, element0$1, tmp11, inlinedVal1;
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
        let scrut2, j, z, y, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
        scrut2 = i > npm1;
        if (scrut2 === true) {
          break inlinedLbl
        }
        {
          let inlinedVal2, inlinedVal3;
          j = np1 - i;
          tmp12 = i + 1;
          tmp13 = - 0.5;
          pxr1[tmp12] = tmp13;
          tmp14 = j + 1;
          tmp15 = - 0.5;
          pxr1[tmp14] = tmp15;
          z = t1 * i;
          inlinedVal2 = runtime.safeCall(globalThis.Math.cos(z));
          inlinedVal3 = runtime.safeCall(globalThis.Math.sin(z));
          tmp16 = inlinedVal2 / inlinedVal3;
          tmp17 = 0.5 * tmp16;
          y = - tmp17;
          tmp18 = i + 1;
          pxi1[tmp18] = y;
          tmp19 = j + 1;
          tmp20 = - y;
          pxi1[tmp19] = tmp20;
          tmp21 = i + 1;
          i = tmp21;
          continue loopLabel;
        }
      }
    }
    px = pxr;
    py = pxi;
    inlinedVal1 = find_num_points$tailrec(np, 2, 1);
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      let px1, py1, n, m, k, n21, px2, py2, n1, is_, id, px3, py3, n3, i2, j;
      element0$1 = runtime.Tuple.get(inlinedVal1, 0);
      element1$1 = runtime.Tuple.get(inlinedVal1, 1);
      scrut1 = element0$1 != np;
      if (scrut1 === true) {
        let px4, py4, n4, i3;
        tmp11 = np + 1;
        px4 = pxr;
        py4 = pxi;
        n4 = element0$1;
        i3 = tmp11;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut2, tmp12;
            scrut2 = i3 > n4;
            if (scrut2 === true) {
              break inlinedLbl1
            }
            px4[i3] = 0.0;
            py4[i3] = 0.0;
            tmp12 = i3 + 1;
            i3 = tmp12;
            continue loopLabel1;
          }
        }
      }
      px1 = px;
      py1 = py;
      n = element0$1;
      m = element1$1;
      k = 1;
      n21 = element0$1;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut2, e, tmp12;
          scrut2 = k >= m;
          if (scrut2 === true) {
            break inlinedLbl1
          }
          {
            let inlinedVal2, tmp13, tmp14, inlinedVal3, inlinedVal4, px4, py4, n4, n22, n41, e1, j1, a;
            tmp14 = n21 / 4;
            inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp14));
            inlinedVal2 = 2.0 * 3.141592653589793;
            e = inlinedVal2 / n21;
            px4 = px1;
            py4 = py1;
            n4 = n;
            n22 = n21;
            n41 = inlinedVal3;
            e1 = e;
            j1 = 1;
            a = 0.0;
            inlinedLbl2: {
              loopLabel2: while (true) {
                let scrut3, a3, tmp15, tmp16, tmp17;
                scrut3 = j1 > n41;
                if (scrut3 === true) {
                  break inlinedLbl2
                }
                {
                  let inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, px5, py5, n5, n23, n42, j2, cc1, ss1, cc3, ss3, is_1, id1;
                  a3 = 3.0 * a;
                  inlinedVal5 = runtime.safeCall(globalThis.Math.cos(a));
                  inlinedVal6 = runtime.safeCall(globalThis.Math.sin(a));
                  inlinedVal7 = runtime.safeCall(globalThis.Math.cos(a3));
                  inlinedVal8 = runtime.safeCall(globalThis.Math.sin(a3));
                  tmp15 = 2 * n22;
                  px5 = px4;
                  py5 = py4;
                  n5 = n4;
                  n23 = n22;
                  n42 = n41;
                  j2 = j1;
                  cc1 = inlinedVal5;
                  ss1 = inlinedVal6;
                  cc3 = inlinedVal7;
                  ss3 = inlinedVal8;
                  is_1 = j1;
                  id1 = tmp15;
                  inlinedLbl3: {
                    loopLabel3: while (true) {
                      let scrut4, tmp18, tmp19, tmp20, tmp21;
                      scrut4 = is_1 >= n5;
                      if (scrut4 === true) {
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
                            let scrut5, i11, i21, i3, r1, r2, s1, s2, s3, r1b, s2b, r2b, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39;
                            scrut5 = i0 >= n6;
                            if (scrut5 === true) {
                              break inlinedLbl4
                            }
                            {
                              let inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24;
                              i11 = i0 + n43;
                              i21 = i11 + n43;
                              i3 = i21 + n43;
                              inlinedVal9 = px6.at(i0);
                              inlinedVal10 = px6.at(i21);
                              r1 = inlinedVal9 - inlinedVal10;
                              inlinedVal11 = px6.at(i0);
                              inlinedVal12 = px6.at(i21);
                              tmp22 = inlinedVal11 + inlinedVal12;
                              px6[i0] = tmp22;
                              inlinedVal13 = px6.at(i11);
                              inlinedVal14 = px6.at(i3);
                              r2 = inlinedVal13 - inlinedVal14;
                              inlinedVal15 = px6.at(i11);
                              inlinedVal16 = px6.at(i3);
                              tmp23 = inlinedVal15 + inlinedVal16;
                              px6[i11] = tmp23;
                              inlinedVal17 = py6.at(i0);
                              inlinedVal18 = py6.at(i21);
                              s1 = inlinedVal17 - inlinedVal18;
                              inlinedVal19 = py6.at(i0);
                              inlinedVal20 = py6.at(i21);
                              tmp24 = inlinedVal19 + inlinedVal20;
                              py6[i0] = tmp24;
                              inlinedVal21 = py6.at(i11);
                              inlinedVal22 = py6.at(i3);
                              s2 = inlinedVal21 - inlinedVal22;
                              inlinedVal23 = py6.at(i11);
                              inlinedVal24 = py6.at(i3);
                              tmp25 = inlinedVal23 + inlinedVal24;
                              py6[i11] = tmp25;
                              s3 = r1 - s2;
                              r1b = r1 + s2;
                              s2b = r2 - s1;
                              r2b = r2 + s1;
                              tmp26 = r1b * cc11;
                              tmp27 = s2b * ss11;
                              tmp28 = tmp26 - tmp27;
                              px6[i21] = tmp28;
                              tmp29 = - s2b;
                              tmp30 = tmp29 * cc11;
                              tmp31 = r1b * ss11;
                              tmp32 = tmp30 - tmp31;
                              py6[i21] = tmp32;
                              tmp33 = s3 * cc31;
                              tmp34 = r2b * ss31;
                              tmp35 = tmp33 + tmp34;
                              px6[i3] = tmp35;
                              tmp36 = r2b * cc31;
                              tmp37 = s3 * ss31;
                              tmp38 = tmp36 - tmp37;
                              py6[i3] = tmp38;
                              tmp39 = i0 + id2;
                              i0 = tmp39;
                              continue loopLabel4;
                            }
                          }
                        }
                        tmp18 = 2 * id1;
                        tmp19 = tmp18 - n23;
                        tmp20 = tmp19 + j2;
                        tmp21 = 4 * id1;
                        is_1 = tmp20;
                        id1 = tmp21;
                        continue loopLabel3;
                      }
                    }
                  }
                  tmp16 = j1 + 1;
                  tmp17 = e1 * j1;
                  j1 = tmp16;
                  a = tmp17;
                  continue loopLabel2;
                }
              }
            }
            tmp12 = k + 1;
            tmp13 = n21 / 2;
            inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp13));
            k = tmp12;
            n21 = inlinedVal4;
            continue loopLabel1;
          }
        }
      }
      px2 = px;
      py2 = py;
      n1 = element0$1;
      is_ = 1;
      id = 4;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut2, tmp12, tmp13, tmp14;
          scrut2 = is_ >= n1;
          if (scrut2 === true) {
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
                let scrut3, i11, tmp15, tmp16, tmp17, tmp18, tmp19;
                scrut3 = i0 > n4;
                if (scrut3 === true) {
                  break inlinedLbl3
                }
                {
                  let inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7;
                  i11 = i0 + 1;
                  inlinedVal2 = px4.at(i0);
                  inlinedVal3 = px4.at(i11);
                  tmp15 = inlinedVal2 + inlinedVal3;
                  px4[i0] = tmp15;
                  inlinedVal4 = px4.at(i11);
                  tmp16 = inlinedVal2 - inlinedVal4;
                  px4[i11] = tmp16;
                  inlinedVal5 = py4.at(i0);
                  inlinedVal6 = py4.at(i11);
                  tmp17 = inlinedVal5 + inlinedVal6;
                  py4[i0] = tmp17;
                  inlinedVal7 = py4.at(i11);
                  tmp18 = inlinedVal5 - inlinedVal7;
                  py4[i11] = tmp18;
                  tmp19 = i0 + id1;
                  i0 = tmp19;
                  continue loopLabel3;
                }
              }
            }
            tmp12 = 2 * id;
            tmp13 = tmp12 - 1;
            tmp14 = 4 * id;
            is_ = tmp13;
            id = tmp14;
            continue loopLabel2;
          }
        }
      }
      px3 = px;
      py3 = py;
      n3 = element0$1;
      i2 = 1;
      j = 1;
      inlinedLbl3: {
        loopLabel3: while (true) {
          let scrut2, scrut3, tmp12;
          scrut2 = i2 >= n3;
          if (scrut2 === true) {
            break inlinedLbl3
          }
          {
            let tmp13, inlinedVal2, k1, j1, inlinedVal3;
            scrut3 = i2 < j;
            if (scrut3 === true) {
              let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7;
              inlinedVal4 = px3.at(j);
              inlinedVal5 = px3.at(i2);
              px3[j] = inlinedVal5;
              px3[i2] = inlinedVal4;
              inlinedVal6 = py3.at(j);
              inlinedVal7 = py3.at(i2);
              py3[j] = inlinedVal7;
              py3[i2] = inlinedVal6;
            }
            tmp13 = n3 / 2;
            inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp13));
            k1 = inlinedVal2;
            j1 = j;
            inlinedLbl4: {
              loopLabel4: while (true) {
                let scrut4, tmp14;
                scrut4 = k1 < j1;
                if (scrut4 === true) {
                  let tmp15, inlinedVal4;
                  tmp15 = k1 / 2;
                  inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp15));
                  tmp14 = j1 - k1;
                  k1 = inlinedVal4;
                  j1 = tmp14;
                  continue loopLabel4
                }
                inlinedVal3 = j1 + k1;
                break inlinedLbl4;
              }
            }
            tmp12 = i2 + 1;
            i2 = tmp12;
            j = inlinedVal3;
            continue loopLabel3;
          }
        }
      }
      np2 = np;
      pxr2 = pxr;
      pxi2 = pxi;
      i1 = 0;
      zr = 0.0;
      zi = 0.0;
      inlinedLbl4: {
        loopLabel4: while (true) {
          let scrut2, scrut3, scrut4, tmp12, tmp13, tmp14, element0$2, tmp15, tmp16, element0$3, tmp17;
          scrut2 = i1 >= np2;
          if (scrut2 === true) {
            inlinedVal = globalThis.Object.freeze([
              zr,
              zi
            ]);
            break inlinedLbl4
          }
          {
            let inlinedVal2, inlinedVal3;
            tmp12 = i1 + 1;
            inlinedVal2 = pxr2.at(tmp12);
            tmp13 = inlinedVal2 - i1;
            inlinedVal3 = runtime.safeCall(globalThis.Math.abs(tmp13));
            scrut3 = zr < inlinedVal3;
            if (scrut3 === true) {
              tmp14 = globalThis.Object.freeze([
                inlinedVal3,
                i1
              ]);
            } else {
              tmp14 = globalThis.Object.freeze([
                zr,
                undefined
              ]);
            }
            if (runtime.Tuple.isArrayLike(tmp14) && tmp14.length === 2) {
              let inlinedVal4, inlinedVal5;
              element0$2 = runtime.Tuple.get(tmp14, 0);
              tmp15 = i1 + 1;
              inlinedVal4 = pxi2.at(tmp15);
              inlinedVal5 = runtime.safeCall(globalThis.Math.abs(inlinedVal4));
              scrut4 = zi < inlinedVal5;
              if (scrut4 === true) {
                tmp16 = globalThis.Object.freeze([
                  inlinedVal5,
                  i1
                ]);
              } else {
                tmp16 = globalThis.Object.freeze([
                  zi,
                  undefined
                ]);
              }
              if (runtime.Tuple.isArrayLike(tmp16) && tmp16.length === 2) {
                element0$3 = runtime.Tuple.get(tmp16, 0);
                tmp17 = i1 + 1;
                i1 = tmp17;
                zr = element0$2;
                zi = element0$3;
                continue loopLabel4
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #nSizes() {
    return 14
  }
  static #loop_np(i) {
    return (np) => {
      return loop_np_loop_np$tailrec$loop_np$tailrec(i, np)
    }
  }
  static #doit() {
    return doit_loop_np_loop_np$tailrec$loop_np$tailrec(1, 16)
  }
  static main() {
    return main_doit_loop_np_loop_np$tailrec$loop_np$tailrec(1, 16)
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
export { main_doit_loop_np_loop_np$tailrec$loop_np$tailrec as _$_modulePrivate_$_main_doit_loop_np_loop_np$tailrec$loop_np$tailrec };
export { doit_loop_np_loop_np$tailrec$loop_np$tailrec as _$_modulePrivate_$_doit_loop_np_loop_np$tailrec$loop_np$tailrec };
export { loop_np_loop_np$tailrec$loop_np$tailrec as _$_modulePrivate_$_loop_np_loop_np$tailrec$loop_np$tailrec };
export { loop_i_loop_i$tailrec$loop_i$tailrec as _$_modulePrivate_$_loop_i_loop_i$tailrec$loop_i$tailrec };
export { loop_is2_loop_is2$tailrec$loop_is2$tailrec as _$_modulePrivate_$_loop_is2_loop_is2$tailrec$loop_is2$tailrec };
export { loop_k_loop_k$tailrec$loop_k$tailrec as _$_modulePrivate_$_loop_k_loop_k$tailrec$loop_k$tailrec };
export { loop_k_loop_k$tailrec$loop_k$tailrec1 as _$_modulePrivate_$_loop_k_loop_k$tailrec$loop_k$tailrec1 };
export { loop_j_loop_j$tailrec$loop_j$tailrec as _$_modulePrivate_$_loop_j_loop_j$tailrec$loop_j$tailrec };
export { loop_is_loop_is$tailrec$loop_is$tailrec as _$_modulePrivate_$_loop_is_loop_is$tailrec$loop_is$tailrec };
export { loop_i2_loop_i2$tailrec$loop_i2$tailrec as _$_modulePrivate_$_loop_i2_loop_i2$tailrec$loop_i2$tailrec };
export default fft1;
