const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let loop, loop_i0, loop_is, loop_j, loop_i02, loop_k, loop_i, loop_k1, loop_is2, find_num_points, loop_i1, loop_i2, fft1, main_doit_loop_np_test_loop_i2$loop_i2, main_doit_loop_np_test$test, main_doit_loop_np$loop_np, main_doit$doit, main_doit_loop_np_test_fft_find_num_points$find_num_points, main_doit_loop_np_test_fft$fft, doit_loop_np_test_fft_find_num_points$find_num_points, doit_loop_np_test_fft$fft, doit_loop_np_test$test, doit_loop_np$loop_np, doit_loop_np_test_loop_i2$loop_i2, loop_np_test_loop_i2$loop_i2, loop_np_test$test, loop_np_test_fft_find_num_points$find_num_points, loop_np_test_fft$fft, test_fft_find_num_points$find_num_points, test_fft$fft, test_loop_i2$loop_i2, fft_find_num_points$find_num_points, main_doit_loop_np_test_loop_i2$p1_tup2, main_doit_loop_np_test_loop_i2$p1_rest, main_doit_loop_np_test_loop_i2$scrut_rest, main_doit_loop_np_test_loop_i2$p2_tup2, main_doit_loop_np_test_loop_i2$p2_rest, main_doit_loop_np_test$scrut_tup2, main_doit_loop_np_test$scrut_rest, main_doit_loop_np_test_fft$scrut_tup2, main_doit_loop_np_test_fft$scrut_rest, doit_loop_np_test_fft$scrut_tup2, doit_loop_np_test_fft$scrut_rest, doit_loop_np_test_loop_i2$p2_tup2, doit_loop_np_test_loop_i2$p2_rest, doit_loop_np_test_loop_i2$p1_rest, doit_loop_np_test_loop_i2$scrut_rest, doit_loop_np_test_loop_i2$p1_tup2, doit_loop_np_test$scrut_tup2, doit_loop_np_test$scrut_rest, loop_np_test_loop_i2$p1_tup2, loop_np_test_loop_i2$p1_rest, loop_np_test_loop_i2$scrut_rest, loop_np_test_loop_i2$p2_tup2, loop_np_test_loop_i2$p2_rest, loop_np_test$scrut_tup2, loop_np_test$scrut_rest, loop_np_test_fft$scrut_tup2, loop_np_test_fft$scrut_rest, test_fft$scrut_tup2, test_fft$scrut_rest, test_loop_i2$p2_tup2, test_loop_i2$p2_rest, test_loop_i2$p1_rest, test_loop_i2$scrut_rest, test_loop_i2$p1_tup2, test$scrut_tup2, test$scrut_rest, fft$scrut_tup2, fft$scrut_rest, loop_i2$p1_tup2, loop_i2$p1_rest, loop_i2$scrut_rest, loop_i2$p2_tup2, loop_i2$p2_rest, loop_k$tailrec, loop_i$tailrec, loop_is2$tailrec, loop_is$tailrec, loop_j$tailrec, loop_k$tailrec1, find_num_points$tailrec, fft_find_num_points$find_num_points$tailrec, test_fft_find_num_points$find_num_points$tailrec, loop_np_test_fft_find_num_points$find_num_points$tailrec, doit_loop_np_test_fft_find_num_points$find_num_points$tailrec, doit_loop_np$loop_np$tailrec, main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec, main_doit_loop_np$loop_np$tailrec, loop_i2$worker, loop_i2$p1_tup2$worker, fft$scrut_tup2$worker, test$scrut_tup2$worker, test_loop_i2$p1_tup2$worker, test_fft$scrut_tup2$worker, loop_np_test_fft$scrut_tup2$worker, loop_np_test$scrut_tup2$worker, loop_np_test_loop_i2$p1_tup2$worker, doit_loop_np_test$scrut_tup2$worker, doit_loop_np_test_loop_i2$p1_tup2$worker, doit_loop_np_test_fft$scrut_tup2$worker, main_doit_loop_np_test_fft$scrut_tup2$worker, main_doit_loop_np_test$scrut_tup2$worker, main_doit_loop_np_test_loop_i2$p1_tup2$worker, test_loop_i2$loop_i2$worker, loop_np_test_loop_i2$loop_i2$worker, doit_loop_np_test_loop_i2$loop_i2$worker, main_doit_loop_np_test_loop_i2$loop_i2$worker, main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker, doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker, loop_np_test_fft_find_num_points$find_num_points$tailrec$worker, test_fft_find_num_points$find_num_points$tailrec$worker, fft_find_num_points$find_num_points$tailrec$worker;
loop_k$tailrec = function loop_k$tailrec(k, j) {
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
loop_i$tailrec = function loop_i$tailrec(px, py, n, i, j) {
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
      inlinedVal = loop_k$tailrec(inlinedVal1, j);
      tmp = i + 1;
      i = tmp;
      j = inlinedVal;
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
    loop_i02(px, py, n, id, is_);
    tmp = 2 * id;
    tmp1 = tmp - 1;
    tmp2 = 4 * id;
    is_ = tmp1;
    id = tmp2;
    continue loopLabel;
  }
};
loop_is$tailrec = function loop_is$tailrec(px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = is_ >= n;
    if (scrut === true) {
      return runtime.Unit
    }
    loop_i0(px, py, n, n4, cc1, ss1, cc3, ss3, id, is_);
    tmp = 2 * id;
    tmp1 = tmp - n2;
    tmp2 = tmp1 + j;
    tmp3 = 4 * id;
    is_ = tmp2;
    id = tmp3;
    continue loopLabel;
  }
};
loop_j$tailrec = function loop_j$tailrec(px, py, n, n2, n4, e, j, a) {
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
      loop_is$tailrec(px, py, n, n2, n4, j, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, j, tmp);
      tmp1 = j + 1;
      tmp2 = e * j;
      j = tmp1;
      a = tmp2;
      continue loopLabel;
    }
  }
};
loop_k$tailrec1 = function loop_k$tailrec(px, py, n, m, k, n2) {
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
      loop_j$tailrec(px, py, n, n2, inlinedVal1, e, 1, 0.0);
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
    return runtime.Unit;
  }
};
fft_find_num_points$find_num_points$tailrec = function fft_find_num_points$find_num_points$tailrec(np, i, m) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) => {
    return fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9)
  }
};
fft_find_num_points$find_num_points$tailrec$worker = function fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) {
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
    {
      let fv_scrut, fv_tmp;
      fv_scrut = i != eta$0$5;
      if (fv_scrut === true) {
        fv_tmp = eta$0$5 + 1;
        loop(eta$0$8, eta$0$9, i, fv_tmp);
      }
      loop_k$tailrec1(eta$0$8, eta$0$9, i, m, 1, i);
      loop_is2$tailrec(eta$0$8, eta$0$9, i, 1, 4);
      loop_i$tailrec(eta$0$8, eta$0$9, i, 1, 1);
      return i;
    }
  }
};
test_fft_find_num_points$find_num_points$tailrec = function test_fft_find_num_points$find_num_points$tailrec(np, i, m) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) => {
    return test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9)
  }
};
test_fft_find_num_points$find_num_points$tailrec$worker = function test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) {
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
    {
      let fv_scrut, fv_tmp;
      fv_scrut = i != eta$0$5;
      if (fv_scrut === true) {
        fv_tmp = eta$0$5 + 1;
        loop(eta$0$8, eta$0$9, i, fv_tmp);
      }
      loop_k$tailrec1(eta$0$8, eta$0$9, i, m, 1, i);
      loop_is2$tailrec(eta$0$8, eta$0$9, i, 1, 4);
      loop_i$tailrec(eta$0$8, eta$0$9, i, 1, 1);
      return i;
    }
  }
};
loop_np_test_fft_find_num_points$find_num_points$tailrec = function loop_np_test_fft_find_num_points$find_num_points$tailrec(np, i, m) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) => {
    return loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9)
  }
};
loop_np_test_fft_find_num_points$find_num_points$tailrec$worker = function loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) {
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
    {
      let fv_scrut, fv_tmp;
      fv_scrut = i != eta$0$5;
      if (fv_scrut === true) {
        fv_tmp = eta$0$5 + 1;
        loop(eta$0$8, eta$0$9, i, fv_tmp);
      }
      loop_k$tailrec1(eta$0$8, eta$0$9, i, m, 1, i);
      loop_is2$tailrec(eta$0$8, eta$0$9, i, 1, 4);
      loop_i$tailrec(eta$0$8, eta$0$9, i, 1, 1);
      return i;
    }
  }
};
doit_loop_np_test_fft_find_num_points$find_num_points$tailrec = function doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, i, m) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) => {
    return doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9)
  }
};
doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker = function doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) {
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
    {
      let fv_scrut, fv_tmp;
      fv_scrut = i != eta$0$5;
      if (fv_scrut === true) {
        fv_tmp = eta$0$5 + 1;
        loop(eta$0$8, eta$0$9, i, fv_tmp);
      }
      loop_k$tailrec1(eta$0$8, eta$0$9, i, m, 1, i);
      loop_is2$tailrec(eta$0$8, eta$0$9, i, 1, 4);
      loop_i$tailrec(eta$0$8, eta$0$9, i, 1, 1);
      return i;
    }
  }
};
doit_loop_np$loop_np$tailrec = function doit_loop_np$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  doit_loop_np_test$test(np);
  tmp = i + 1;
  tmp1 = np * 2;
  doit_loop_np$loop_np$tailrec(tmp, tmp1);
  return runtime.Unit;
};
main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec = function main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, i, m) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) => {
    return main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9)
  }
};
main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker = function main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker(np, i, m, eta$0$4, eta$0$5, eta$0$6, eta$0$8, eta$0$9) {
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
    {
      let fv_scrut, fv_tmp;
      fv_scrut = i != eta$0$5;
      if (fv_scrut === true) {
        fv_tmp = eta$0$5 + 1;
        loop(eta$0$8, eta$0$9, i, fv_tmp);
      }
      loop_k$tailrec1(eta$0$8, eta$0$9, i, m, 1, i);
      loop_is2$tailrec(eta$0$8, eta$0$9, i, 1, 4);
      loop_i$tailrec(eta$0$8, eta$0$9, i, 1, 1);
      return i;
    }
  }
};
main_doit_loop_np$loop_np$tailrec = function main_doit_loop_np$loop_np$tailrec(i, np) {
  let scrut, tmp, tmp1, tmp2, tmp3;
  scrut = i > 14;
  if (scrut === true) {
    return fft1.Nil
  }
  tmp = main_doit_loop_np_test$test(np);
  tmp1 = i + 1;
  tmp2 = np * 2;
  tmp3 = main_doit_loop_np$loop_np$tailrec(tmp1, tmp2);
  return fft1.Cons(tmp, tmp3);
};
main_doit_loop_np_test_loop_i2$loop_i2 = function main_doit_loop_np_test_loop_i2$loop_i2(np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return () => {
        return () => {
          return main_doit_loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi)
        }
      }
    }
  }
};
main_doit_loop_np_test_loop_i2$loop_i2$worker = function main_doit_loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1;
    scrut = i >= np;
    if (scrut === true) {
      return main_doit_loop_np_test$scrut_tup2(zr, zi)
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          continue loopLabel;
        }
      }
      {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          continue loopLabel;
        }
      }
    }
  }
};
main_doit_loop_np_test$test = function main_doit_loop_np_test$test(np) {
  let npm, t, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, tmp7, tmp8, tmp9, tmp10, inlinedVal2, arr, i, n, x, inlinedVal3, arr1, i1, n1, x1, inlinedVal4, inlinedVal5, inlinedVal6;
  tmp10 = np / 2;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
  npm = inlinedVal2 - 1;
  tmp = np + 2;
  tmp9 = [];
  arr = tmp9;
  i = 0;
  n = tmp;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp11;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal3 = arr;
        break inlinedLbl
      }
      arr[i] = x;
      tmp11 = i + 1;
      i = tmp11;
      continue loopLabel;
    }
  }
  inlinedVal = inlinedVal3;
  tmp1 = np + 2;
  tmp8 = [];
  arr1 = tmp8;
  i1 = 0;
  n1 = tmp1;
  x1 = 0.0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      let scrut, tmp11;
      scrut = i1 == n1;
      if (scrut === true) {
        inlinedVal4 = arr1;
        break inlinedLbl1
      }
      arr1[i1] = x1;
      tmp11 = i1 + 1;
      i1 = tmp11;
      continue loopLabel1;
    }
  }
  t = 3.141592653589793 / np;
  tmp2 = np - 1.0;
  tmp3 = tmp2 * 0.5;
  inlinedVal[1] = tmp3;
  inlinedVal4[1] = 0.0;
  tmp7 = np / 2;
  inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp7));
  tmp4 = inlinedVal5 + 1;
  tmp5 = - 0.5;
  inlinedVal[tmp4] = tmp5;
  tmp6 = inlinedVal5 + 1;
  inlinedVal4[tmp6] = 0.0;
  loop_i1(np, npm, inlinedVal, inlinedVal4, t, 1);
  inlinedVal1 = main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
  inlinedVal1(undefined, np, undefined, inlinedVal, inlinedVal4);
  inlinedVal6 = main_doit_loop_np_test_loop_i2$loop_i2$worker(np, inlinedVal, inlinedVal4, 0, 0.0, 0.0);
  return inlinedVal6(undefined)
};
main_doit_loop_np$loop_np = function main_doit_loop_np$loop_np(i) {
  return (np) => {
    return main_doit_loop_np$loop_np$tailrec(i, np)
  }
};
main_doit$doit = function main_doit$doit() {
  return main_doit_loop_np$loop_np$tailrec(1, 16)
};
main_doit_loop_np_test_fft_find_num_points$find_num_points = function main_doit_loop_np_test_fft_find_num_points$find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
main_doit_loop_np_test_fft$fft = function main_doit_loop_np_test_fft$fft(px) {
  return (py) => {
    return (np) => {
      let inlinedVal;
      inlinedVal = main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
      return inlinedVal(undefined, np, undefined, px, py)
    }
  }
};
doit_loop_np_test_fft_find_num_points$find_num_points = function doit_loop_np_test_fft_find_num_points$find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
doit_loop_np_test_fft$fft = function doit_loop_np_test_fft$fft(px) {
  return (py) => {
    return (np) => {
      let inlinedVal;
      inlinedVal = doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
      return inlinedVal(undefined, np, undefined, px, py)
    }
  }
};
doit_loop_np_test$test = function doit_loop_np_test$test(np) {
  let npm, t, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, tmp7, tmp8, tmp9, tmp10, inlinedVal2, arr, i, n, x, inlinedVal3, arr1, i1, n1, x1, inlinedVal4, inlinedVal5, inlinedVal6;
  tmp10 = np / 2;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
  npm = inlinedVal2 - 1;
  tmp = np + 2;
  tmp9 = [];
  arr = tmp9;
  i = 0;
  n = tmp;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp11;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal3 = arr;
        break inlinedLbl
      }
      arr[i] = x;
      tmp11 = i + 1;
      i = tmp11;
      continue loopLabel;
    }
  }
  inlinedVal = inlinedVal3;
  tmp1 = np + 2;
  tmp8 = [];
  arr1 = tmp8;
  i1 = 0;
  n1 = tmp1;
  x1 = 0.0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      let scrut, tmp11;
      scrut = i1 == n1;
      if (scrut === true) {
        inlinedVal4 = arr1;
        break inlinedLbl1
      }
      arr1[i1] = x1;
      tmp11 = i1 + 1;
      i1 = tmp11;
      continue loopLabel1;
    }
  }
  t = 3.141592653589793 / np;
  tmp2 = np - 1.0;
  tmp3 = tmp2 * 0.5;
  inlinedVal[1] = tmp3;
  inlinedVal4[1] = 0.0;
  tmp7 = np / 2;
  inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp7));
  tmp4 = inlinedVal5 + 1;
  tmp5 = - 0.5;
  inlinedVal[tmp4] = tmp5;
  tmp6 = inlinedVal5 + 1;
  inlinedVal4[tmp6] = 0.0;
  loop_i1(np, npm, inlinedVal, inlinedVal4, t, 1);
  inlinedVal1 = doit_loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
  inlinedVal1(undefined, np, undefined, inlinedVal, inlinedVal4);
  inlinedVal6 = doit_loop_np_test_loop_i2$loop_i2$worker(np, inlinedVal, inlinedVal4, 0, 0.0, 0.0);
  return inlinedVal6(undefined)
};
doit_loop_np$loop_np = function doit_loop_np$loop_np(i) {
  return (np) => {
    return doit_loop_np$loop_np$tailrec(i, np)
  }
};
doit_loop_np_test_loop_i2$loop_i2 = function doit_loop_np_test_loop_i2$loop_i2(np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return () => {
        return () => {
          return doit_loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi)
        }
      }
    }
  }
};
doit_loop_np_test_loop_i2$loop_i2$worker = function doit_loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1;
    scrut = i >= np;
    if (scrut === true) {
      return doit_loop_np_test$scrut_tup2(zr, zi)
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          continue loopLabel;
        }
      }
      {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          continue loopLabel;
        }
      }
    }
  }
};
loop_np_test_loop_i2$loop_i2 = function loop_np_test_loop_i2$loop_i2(np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return () => {
        return () => {
          return loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi)
        }
      }
    }
  }
};
loop_np_test_loop_i2$loop_i2$worker = function loop_np_test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1;
    scrut = i >= np;
    if (scrut === true) {
      return loop_np_test$scrut_tup2(zr, zi)
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          continue loopLabel;
        }
      }
      {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          continue loopLabel;
        }
      }
    }
  }
};
loop_np_test$test = function loop_np_test$test(np) {
  let npm, t, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, tmp7, tmp8, tmp9, tmp10, inlinedVal2, arr, i, n, x, inlinedVal3, arr1, i1, n1, x1, inlinedVal4, inlinedVal5, inlinedVal6;
  tmp10 = np / 2;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
  npm = inlinedVal2 - 1;
  tmp = np + 2;
  tmp9 = [];
  arr = tmp9;
  i = 0;
  n = tmp;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp11;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal3 = arr;
        break inlinedLbl
      }
      arr[i] = x;
      tmp11 = i + 1;
      i = tmp11;
      continue loopLabel;
    }
  }
  inlinedVal = inlinedVal3;
  tmp1 = np + 2;
  tmp8 = [];
  arr1 = tmp8;
  i1 = 0;
  n1 = tmp1;
  x1 = 0.0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      let scrut, tmp11;
      scrut = i1 == n1;
      if (scrut === true) {
        inlinedVal4 = arr1;
        break inlinedLbl1
      }
      arr1[i1] = x1;
      tmp11 = i1 + 1;
      i1 = tmp11;
      continue loopLabel1;
    }
  }
  t = 3.141592653589793 / np;
  tmp2 = np - 1.0;
  tmp3 = tmp2 * 0.5;
  inlinedVal[1] = tmp3;
  inlinedVal4[1] = 0.0;
  tmp7 = np / 2;
  inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp7));
  tmp4 = inlinedVal5 + 1;
  tmp5 = - 0.5;
  inlinedVal[tmp4] = tmp5;
  tmp6 = inlinedVal5 + 1;
  inlinedVal4[tmp6] = 0.0;
  loop_i1(np, npm, inlinedVal, inlinedVal4, t, 1);
  inlinedVal1 = loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
  inlinedVal1(undefined, np, undefined, inlinedVal, inlinedVal4);
  inlinedVal6 = loop_np_test_loop_i2$loop_i2$worker(np, inlinedVal, inlinedVal4, 0, 0.0, 0.0);
  return inlinedVal6(undefined)
};
loop_np_test_fft_find_num_points$find_num_points = function loop_np_test_fft_find_num_points$find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
loop_np_test_fft$fft = function loop_np_test_fft$fft(px) {
  return (py) => {
    return (np) => {
      let inlinedVal;
      inlinedVal = loop_np_test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
      return inlinedVal(undefined, np, undefined, px, py)
    }
  }
};
test_fft_find_num_points$find_num_points = function test_fft_find_num_points$find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
test_fft$fft = function test_fft$fft(px) {
  return (py) => {
    return (np) => {
      let inlinedVal;
      inlinedVal = test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
      return inlinedVal(undefined, np, undefined, px, py)
    }
  }
};
test_loop_i2$loop_i2 = function test_loop_i2$loop_i2(np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return () => {
        return () => {
          return test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi)
        }
      }
    }
  }
};
test_loop_i2$loop_i2$worker = function test_loop_i2$loop_i2$worker(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1;
    scrut = i >= np;
    if (scrut === true) {
      return test$scrut_tup2(zr, zi)
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          continue loopLabel;
        }
      }
      {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          continue loopLabel;
        }
      }
    }
  }
};
fft_find_num_points$find_num_points = function fft_find_num_points$find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
main_doit_loop_np_test_loop_i2$p1_tup2 = function main_doit_loop_np_test_loop_i2$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) => {
    return main_doit_loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr)
  }
};
main_doit_loop_np_test_loop_i2$p1_tup2$worker = function main_doit_loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) {
  let inlinedVal, inlinedVal1;
  fv_tmp = fv_i + 1;
  inlinedVal = fv_pxi.at(fv_tmp);
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(inlinedVal));
  fv_scrut = fv_zi < inlinedVal1;
  if (fv_scrut === true) {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return main_doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, inlinedVal1)
  }
  {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return main_doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, fv_zi);
  }
};
main_doit_loop_np_test_loop_i2$p2_tup2 = function main_doit_loop_np_test_loop_i2$p2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ki1, fv_zi1, fv_tmp, fv_i, fv_fft, fv_np, fv_pxr, fv_pxi, fv_zr1, fv_kr1) => {
    fv_tmp = fv_i + 1;
    return main_doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp, fv_zr1, tup2_0)
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
  loop_k$tailrec1(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
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
  loop_k$tailrec1(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
doit_loop_np_test_loop_i2$p2_tup2 = function doit_loop_np_test_loop_i2$p2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ki1, fv_zi1, fv_tmp, fv_i, fv_fft, fv_np, fv_pxr, fv_pxi, fv_zr1, fv_kr1) => {
    fv_tmp = fv_i + 1;
    return doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp, fv_zr1, tup2_0)
  }
};
doit_loop_np_test_loop_i2$p1_tup2 = function doit_loop_np_test_loop_i2$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) => {
    return doit_loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr)
  }
};
doit_loop_np_test_loop_i2$p1_tup2$worker = function doit_loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) {
  let inlinedVal, inlinedVal1;
  fv_tmp = fv_i + 1;
  inlinedVal = fv_pxi.at(fv_tmp);
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(inlinedVal));
  fv_scrut = fv_zi < inlinedVal1;
  if (fv_scrut === true) {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, inlinedVal1)
  }
  {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return doit_loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, fv_zi);
  }
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
loop_np_test_loop_i2$p1_tup2 = function loop_np_test_loop_i2$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) => {
    return loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr)
  }
};
loop_np_test_loop_i2$p1_tup2$worker = function loop_np_test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) {
  let inlinedVal, inlinedVal1;
  fv_tmp = fv_i + 1;
  inlinedVal = fv_pxi.at(fv_tmp);
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(inlinedVal));
  fv_scrut = fv_zi < inlinedVal1;
  if (fv_scrut === true) {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, inlinedVal1)
  }
  {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, fv_zi);
  }
};
loop_np_test_loop_i2$p2_tup2 = function loop_np_test_loop_i2$p2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ki1, fv_zi1, fv_tmp, fv_i, fv_fft, fv_np, fv_pxr, fv_pxi, fv_zr1, fv_kr1) => {
    fv_tmp = fv_i + 1;
    return loop_np_test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp, fv_zr1, tup2_0)
  }
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
  loop_k$tailrec1(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
test_fft$scrut_tup2 = function test_fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
test_fft$scrut_tup2$worker = function test_fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    fv_tmp = fv_np + 1;
    loop(fv_px, fv_py, tup2_0, fv_tmp);
  }
  loop_k$tailrec1(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
test_loop_i2$p2_tup2 = function test_loop_i2$p2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ki1, fv_zi1, fv_tmp, fv_i, fv_fft, fv_np, fv_pxr, fv_pxi, fv_zr1, fv_kr1) => {
    fv_tmp = fv_i + 1;
    return test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp, fv_zr1, tup2_0)
  }
};
test_loop_i2$p1_tup2 = function test_loop_i2$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) => {
    return test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr)
  }
};
test_loop_i2$p1_tup2$worker = function test_loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) {
  let inlinedVal, inlinedVal1;
  fv_tmp = fv_i + 1;
  inlinedVal = fv_pxi.at(fv_tmp);
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(inlinedVal));
  fv_scrut = fv_zi < inlinedVal1;
  if (fv_scrut === true) {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, inlinedVal1)
  }
  {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return test_loop_i2$loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, fv_zi);
  }
};
test$scrut_tup2 = function test$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut) => {
    return test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut)
  }
};
test$scrut_tup2$worker = function test$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut) {
  let inlinedVal, inlinedVal1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tup2_0));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tup2_1));
  fv_scrut = inlinedVal < inlinedVal1;
  if (fv_scrut === true) {
    return tup2_1
  }
  return tup2_0;
};
fft$scrut_tup2 = function fft$scrut_tup2(tup2_0, tup2_1) {
  return (fv_scrut, fv_np, fv_tmp, fv_px, fv_py) => {
    return fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py)
  }
};
fft$scrut_tup2$worker = function fft$scrut_tup2$worker(tup2_0, tup2_1, fv_scrut, fv_np, fv_tmp, fv_px, fv_py) {
  fv_scrut = tup2_0 != fv_np;
  if (fv_scrut === true) {
    fv_tmp = fv_np + 1;
    loop(fv_px, fv_py, tup2_0, fv_tmp);
  }
  loop_k$tailrec1(fv_px, fv_py, tup2_0, tup2_1, 1, tup2_0);
  loop_is2$tailrec(fv_px, fv_py, tup2_0, 1, 4);
  loop_i$tailrec(fv_px, fv_py, tup2_0, 1, 1);
  return tup2_0
};
loop_i2$p1_tup2 = function loop_i2$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) => {
    return loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr)
  }
};
loop_i2$p1_tup2$worker = function loop_i2$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kr1, fv_zr1, fv_tmp, fv_i, fv_tmp1, fv_fft, fv_pxi, fv_a1, fv_scrut, fv_zi, fv_tmp2, fv_ki, fv_p2, fv_element0$1, fv_element1$1, fv_ki1, fv_zi1, fv_tmp3, fv_np, fv_pxr) {
  let inlinedVal, inlinedVal1;
  fv_tmp = fv_i + 1;
  inlinedVal = fv_pxi.at(fv_tmp);
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(inlinedVal));
  fv_scrut = fv_zi < inlinedVal1;
  if (fv_scrut === true) {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, inlinedVal1)
  }
  {
    let fv_tmp4;
    fv_tmp4 = fv_i + 1;
    return loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp4, tup2_0, fv_zi);
  }
};
loop_i2$p2_tup2 = function loop_i2$p2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ki1, fv_zi1, fv_tmp, fv_i, fv_fft, fv_np, fv_pxr, fv_pxi, fv_zr1, fv_kr1) => {
    fv_tmp = fv_i + 1;
    return loop_i2$worker(fv_np, fv_pxr, fv_pxi, fv_tmp, fv_zr1, tup2_0)
  }
};
main_doit_loop_np_test_loop_i2$p1_rest = function main_doit_loop_np_test_loop_i2$p1_rest() {
  return null
};
main_doit_loop_np_test_loop_i2$scrut_rest = function main_doit_loop_np_test_loop_i2$scrut_rest() {
  return null
};
main_doit_loop_np_test_loop_i2$p2_rest = function main_doit_loop_np_test_loop_i2$p2_rest() {
  return null
};
main_doit_loop_np_test$scrut_rest = function main_doit_loop_np_test$scrut_rest() {
  return null
};
main_doit_loop_np_test_fft$scrut_rest = function main_doit_loop_np_test_fft$scrut_rest() {
  return null
};
doit_loop_np_test_fft$scrut_rest = function doit_loop_np_test_fft$scrut_rest() {
  return null
};
doit_loop_np_test_loop_i2$p2_rest = function doit_loop_np_test_loop_i2$p2_rest() {
  return null
};
doit_loop_np_test_loop_i2$p1_rest = function doit_loop_np_test_loop_i2$p1_rest() {
  return null
};
doit_loop_np_test_loop_i2$scrut_rest = function doit_loop_np_test_loop_i2$scrut_rest() {
  return null
};
doit_loop_np_test$scrut_rest = function doit_loop_np_test$scrut_rest() {
  return null
};
loop_np_test_loop_i2$p1_rest = function loop_np_test_loop_i2$p1_rest() {
  return null
};
loop_np_test_loop_i2$scrut_rest = function loop_np_test_loop_i2$scrut_rest() {
  return null
};
loop_np_test_loop_i2$p2_rest = function loop_np_test_loop_i2$p2_rest() {
  return null
};
loop_np_test$scrut_rest = function loop_np_test$scrut_rest() {
  return null
};
loop_np_test_fft$scrut_rest = function loop_np_test_fft$scrut_rest() {
  return null
};
test_fft$scrut_rest = function test_fft$scrut_rest() {
  return null
};
test_loop_i2$p2_rest = function test_loop_i2$p2_rest() {
  return null
};
test_loop_i2$p1_rest = function test_loop_i2$p1_rest() {
  return null
};
test_loop_i2$scrut_rest = function test_loop_i2$scrut_rest() {
  return null
};
test$scrut_rest = function test$scrut_rest() {
  return null
};
fft$scrut_rest = function fft$scrut_rest() {
  return null
};
loop_i2$p1_rest = function loop_i2$p1_rest() {
  return null
};
loop_i2$scrut_rest = function loop_i2$scrut_rest() {
  return null
};
loop_i2$p2_rest = function loop_i2$p2_rest() {
  return null
};
loop_i1 = function loop_i(np, npm, pxr, pxi, t, i) {
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
loop_i2 = function loop_i2(np, pxr, pxi, i) {
  return (zr) => {
    return (zi) => {
      return () => {
        return () => {
          return loop_i2$worker(np, pxr, pxi, i, zr, zi)
        }
      }
    }
  }
};
loop_i2$worker = function loop_i2$worker(np, pxr, pxi, i, zr, zi) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1;
    scrut = i >= np;
    if (scrut === true) {
      return runtime.Unit
    }
    {
      let inlinedVal, inlinedVal1;
      tmp = i + 1;
      inlinedVal = pxr.at(tmp);
      tmp1 = inlinedVal - i;
      inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp1));
      scrut1 = zr < inlinedVal1;
      if (scrut1 === true) {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zr = inlinedVal1;
          continue loopLabel;
        }
      }
      {
        let fv_tmp, fv_scrut, inlinedVal2, inlinedVal3;
        fv_tmp = i + 1;
        inlinedVal2 = pxi.at(fv_tmp);
        inlinedVal3 = runtime.safeCall(globalThis.Math.abs(inlinedVal2));
        fv_scrut = zi < inlinedVal3;
        if (fv_scrut === true) {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          zi = inlinedVal3;
          continue loopLabel
        }
        {
          let fv_tmp1;
          fv_tmp1 = i + 1;
          i = fv_tmp1;
          continue loopLabel;
        }
      }
    }
  }
};
loop_i0 = function loop_i0(px, py, n, n4, cc1, ss1, cc3, ss3, id, i0) {
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
    return loop_is$tailrec(px, py, n, n2, n4, j, cc1, ss1, cc3, ss3, is_, id)
  }
};
loop_j = function loop_j(fft2, px, py, n, n2, n4, e, j) {
  return (a) => {
    return loop_j$tailrec(px, py, n, n2, n4, e, j, a)
  }
};
loop_i02 = function loop_i02(px, py, n, id, i0) {
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
    return loop_k$tailrec(k, j)
  }
};
find_num_points = function find_num_points(np, i) {
  return (m) => {
    return runtime.Unit
  }
};
loop_k1 = function loop_k(fft2, px, py, n, m, k) {
  return (n2) => {
    return loop_k$tailrec1(px, py, n, m, k, n2)
  }
};
loop_is2 = function loop_is2(fft2, px, py, n, is_) {
  return (id) => {
    return loop_is2$tailrec(px, py, n, is_, id)
  }
};
loop_i = function loop_i(fft2, px, py, n, i) {
  return (j) => {
    return loop_i$tailrec(px, py, n, i, j)
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
    loop_np_test$test(np);
    tmp1 = i + 1;
    tmp2 = np * 2;
    fft.#loop_np$tailrec(tmp1, tmp2);
    return runtime.Unit;
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
    fft.#pi();
    return runtime.Unit
  }
  static #fft(px) {
    return (py) => {
      return (np) => {
        let inlinedVal;
        inlinedVal = fft_find_num_points$find_num_points$tailrec(np, 2, 1);
        return inlinedVal(undefined, np, undefined, px, py)
      }
    }
  }
  static #test(np) {
    let enp, npm, pxr, pxi, t, n2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal, inlinedVal1;
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
    loop_i1(np, npm, pxr, pxi, t, 1);
    inlinedVal = test_fft_find_num_points$find_num_points$tailrec(np, 2, 1);
    inlinedVal(undefined, np, undefined, pxr, pxi);
    inlinedVal1 = test_loop_i2$loop_i2$worker(np, pxr, pxi, 0, 0.0, 0.0);
    return inlinedVal1(undefined)
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
    return doit_loop_np$loop_np$tailrec(1, 16)
  }
  static main() {
    return main_doit_loop_np$loop_np$tailrec(1, 16)
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
export { main_doit_loop_np_test_loop_i2$loop_i2 as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$loop_i2 };
export { main_doit_loop_np_test$test as _$_modulePrivate_$_main_doit_loop_np_test$test };
export { main_doit_loop_np$loop_np as _$_modulePrivate_$_main_doit_loop_np$loop_np };
export { main_doit$doit as _$_modulePrivate_$_main_doit$doit };
export { main_doit_loop_np_test_fft_find_num_points$find_num_points as _$_modulePrivate_$_main_doit_loop_np_test_fft_find_num_points$find_num_points };
export { main_doit_loop_np_test_fft$fft as _$_modulePrivate_$_main_doit_loop_np_test_fft$fft };
export { doit_loop_np_test_fft_find_num_points$find_num_points as _$_modulePrivate_$_doit_loop_np_test_fft_find_num_points$find_num_points };
export { doit_loop_np_test_fft$fft as _$_modulePrivate_$_doit_loop_np_test_fft$fft };
export { doit_loop_np_test$test as _$_modulePrivate_$_doit_loop_np_test$test };
export { doit_loop_np$loop_np as _$_modulePrivate_$_doit_loop_np$loop_np };
export { doit_loop_np_test_loop_i2$loop_i2 as _$_modulePrivate_$_doit_loop_np_test_loop_i2$loop_i2 };
export { loop_np_test_loop_i2$loop_i2 as _$_modulePrivate_$_loop_np_test_loop_i2$loop_i2 };
export { loop_np_test$test as _$_modulePrivate_$_loop_np_test$test };
export { loop_np_test_fft_find_num_points$find_num_points as _$_modulePrivate_$_loop_np_test_fft_find_num_points$find_num_points };
export { loop_np_test_fft$fft as _$_modulePrivate_$_loop_np_test_fft$fft };
export { test_fft_find_num_points$find_num_points as _$_modulePrivate_$_test_fft_find_num_points$find_num_points };
export { test_fft$fft as _$_modulePrivate_$_test_fft$fft };
export { test_loop_i2$loop_i2 as _$_modulePrivate_$_test_loop_i2$loop_i2 };
export { fft_find_num_points$find_num_points as _$_modulePrivate_$_fft_find_num_points$find_num_points };
export { main_doit_loop_np_test_loop_i2$p1_tup2 as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$p1_tup2 };
export { main_doit_loop_np_test_loop_i2$p1_rest as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$p1_rest };
export { main_doit_loop_np_test_loop_i2$scrut_rest as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$scrut_rest };
export { main_doit_loop_np_test_loop_i2$p2_tup2 as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$p2_tup2 };
export { main_doit_loop_np_test_loop_i2$p2_rest as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$p2_rest };
export { main_doit_loop_np_test$scrut_tup2 as _$_modulePrivate_$_main_doit_loop_np_test$scrut_tup2 };
export { main_doit_loop_np_test$scrut_rest as _$_modulePrivate_$_main_doit_loop_np_test$scrut_rest };
export { main_doit_loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_main_doit_loop_np_test_fft$scrut_tup2 };
export { main_doit_loop_np_test_fft$scrut_rest as _$_modulePrivate_$_main_doit_loop_np_test_fft$scrut_rest };
export { doit_loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_doit_loop_np_test_fft$scrut_tup2 };
export { doit_loop_np_test_fft$scrut_rest as _$_modulePrivate_$_doit_loop_np_test_fft$scrut_rest };
export { doit_loop_np_test_loop_i2$p2_tup2 as _$_modulePrivate_$_doit_loop_np_test_loop_i2$p2_tup2 };
export { doit_loop_np_test_loop_i2$p2_rest as _$_modulePrivate_$_doit_loop_np_test_loop_i2$p2_rest };
export { doit_loop_np_test_loop_i2$p1_rest as _$_modulePrivate_$_doit_loop_np_test_loop_i2$p1_rest };
export { doit_loop_np_test_loop_i2$scrut_rest as _$_modulePrivate_$_doit_loop_np_test_loop_i2$scrut_rest };
export { doit_loop_np_test_loop_i2$p1_tup2 as _$_modulePrivate_$_doit_loop_np_test_loop_i2$p1_tup2 };
export { doit_loop_np_test$scrut_tup2 as _$_modulePrivate_$_doit_loop_np_test$scrut_tup2 };
export { doit_loop_np_test$scrut_rest as _$_modulePrivate_$_doit_loop_np_test$scrut_rest };
export { loop_np_test_loop_i2$p1_tup2 as _$_modulePrivate_$_loop_np_test_loop_i2$p1_tup2 };
export { loop_np_test_loop_i2$p1_rest as _$_modulePrivate_$_loop_np_test_loop_i2$p1_rest };
export { loop_np_test_loop_i2$scrut_rest as _$_modulePrivate_$_loop_np_test_loop_i2$scrut_rest };
export { loop_np_test_loop_i2$p2_tup2 as _$_modulePrivate_$_loop_np_test_loop_i2$p2_tup2 };
export { loop_np_test_loop_i2$p2_rest as _$_modulePrivate_$_loop_np_test_loop_i2$p2_rest };
export { loop_np_test$scrut_tup2 as _$_modulePrivate_$_loop_np_test$scrut_tup2 };
export { loop_np_test$scrut_rest as _$_modulePrivate_$_loop_np_test$scrut_rest };
export { loop_np_test_fft$scrut_tup2 as _$_modulePrivate_$_loop_np_test_fft$scrut_tup2 };
export { loop_np_test_fft$scrut_rest as _$_modulePrivate_$_loop_np_test_fft$scrut_rest };
export { test_fft$scrut_tup2 as _$_modulePrivate_$_test_fft$scrut_tup2 };
export { test_fft$scrut_rest as _$_modulePrivate_$_test_fft$scrut_rest };
export { test_loop_i2$p2_tup2 as _$_modulePrivate_$_test_loop_i2$p2_tup2 };
export { test_loop_i2$p2_rest as _$_modulePrivate_$_test_loop_i2$p2_rest };
export { test_loop_i2$p1_rest as _$_modulePrivate_$_test_loop_i2$p1_rest };
export { test_loop_i2$scrut_rest as _$_modulePrivate_$_test_loop_i2$scrut_rest };
export { test_loop_i2$p1_tup2 as _$_modulePrivate_$_test_loop_i2$p1_tup2 };
export { test$scrut_tup2 as _$_modulePrivate_$_test$scrut_tup2 };
export { test$scrut_rest as _$_modulePrivate_$_test$scrut_rest };
export { fft$scrut_tup2 as _$_modulePrivate_$_fft$scrut_tup2 };
export { fft$scrut_rest as _$_modulePrivate_$_fft$scrut_rest };
export { loop_i2$p1_tup2 as _$_modulePrivate_$_loop_i2$p1_tup2 };
export { loop_i2$p1_rest as _$_modulePrivate_$_loop_i2$p1_rest };
export { loop_i2$scrut_rest as _$_modulePrivate_$_loop_i2$scrut_rest };
export { loop_i2$p2_tup2 as _$_modulePrivate_$_loop_i2$p2_tup2 };
export { loop_i2$p2_rest as _$_modulePrivate_$_loop_i2$p2_rest };
export { loop_k$tailrec as _$_modulePrivate_$_loop_k$tailrec };
export { loop_i$tailrec as _$_modulePrivate_$_loop_i$tailrec };
export { loop_is2$tailrec as _$_modulePrivate_$_loop_is2$tailrec };
export { loop_is$tailrec as _$_modulePrivate_$_loop_is$tailrec };
export { loop_j$tailrec as _$_modulePrivate_$_loop_j$tailrec };
export { loop_k$tailrec1 as _$_modulePrivate_$_loop_k$tailrec1 };
export { find_num_points$tailrec as _$_modulePrivate_$_find_num_points$tailrec };
export { fft_find_num_points$find_num_points$tailrec as _$_modulePrivate_$_fft_find_num_points$find_num_points$tailrec };
export { test_fft_find_num_points$find_num_points$tailrec as _$_modulePrivate_$_test_fft_find_num_points$find_num_points$tailrec };
export { loop_np_test_fft_find_num_points$find_num_points$tailrec as _$_modulePrivate_$_loop_np_test_fft_find_num_points$find_num_points$tailrec };
export { doit_loop_np_test_fft_find_num_points$find_num_points$tailrec as _$_modulePrivate_$_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec };
export { doit_loop_np$loop_np$tailrec as _$_modulePrivate_$_doit_loop_np$loop_np$tailrec };
export { main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec as _$_modulePrivate_$_main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec };
export { main_doit_loop_np$loop_np$tailrec as _$_modulePrivate_$_main_doit_loop_np$loop_np$tailrec };
export { loop_i2$worker as _$_modulePrivate_$_loop_i2$worker };
export { loop_i2$p1_tup2$worker as _$_modulePrivate_$_loop_i2$p1_tup2$worker };
export { fft$scrut_tup2$worker as _$_modulePrivate_$_fft$scrut_tup2$worker };
export { test$scrut_tup2$worker as _$_modulePrivate_$_test$scrut_tup2$worker };
export { test_loop_i2$p1_tup2$worker as _$_modulePrivate_$_test_loop_i2$p1_tup2$worker };
export { test_fft$scrut_tup2$worker as _$_modulePrivate_$_test_fft$scrut_tup2$worker };
export { loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_loop_np_test_fft$scrut_tup2$worker };
export { loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_loop_np_test$scrut_tup2$worker };
export { loop_np_test_loop_i2$p1_tup2$worker as _$_modulePrivate_$_loop_np_test_loop_i2$p1_tup2$worker };
export { doit_loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_doit_loop_np_test$scrut_tup2$worker };
export { doit_loop_np_test_loop_i2$p1_tup2$worker as _$_modulePrivate_$_doit_loop_np_test_loop_i2$p1_tup2$worker };
export { doit_loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_doit_loop_np_test_fft$scrut_tup2$worker };
export { main_doit_loop_np_test_fft$scrut_tup2$worker as _$_modulePrivate_$_main_doit_loop_np_test_fft$scrut_tup2$worker };
export { main_doit_loop_np_test$scrut_tup2$worker as _$_modulePrivate_$_main_doit_loop_np_test$scrut_tup2$worker };
export { main_doit_loop_np_test_loop_i2$p1_tup2$worker as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$p1_tup2$worker };
export { test_loop_i2$loop_i2$worker as _$_modulePrivate_$_test_loop_i2$loop_i2$worker };
export { loop_np_test_loop_i2$loop_i2$worker as _$_modulePrivate_$_loop_np_test_loop_i2$loop_i2$worker };
export { doit_loop_np_test_loop_i2$loop_i2$worker as _$_modulePrivate_$_doit_loop_np_test_loop_i2$loop_i2$worker };
export { main_doit_loop_np_test_loop_i2$loop_i2$worker as _$_modulePrivate_$_main_doit_loop_np_test_loop_i2$loop_i2$worker };
export { main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker as _$_modulePrivate_$_main_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker };
export { doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker as _$_modulePrivate_$_doit_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker };
export { loop_np_test_fft_find_num_points$find_num_points$tailrec$worker as _$_modulePrivate_$_loop_np_test_fft_find_num_points$find_num_points$tailrec$worker };
export { test_fft_find_num_points$find_num_points$tailrec$worker as _$_modulePrivate_$_test_fft_find_num_points$find_num_points$tailrec$worker };
export { fft_find_num_points$find_num_points$tailrec$worker as _$_modulePrivate_$_fft_find_num_points$find_num_points$tailrec$worker };
export default fft1;
