const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const snd$accessorSymbol = globalThis.Symbol("snd");
const leave$accessorSymbol = globalThis.Symbol("leave");
const take$accessorSymbol = globalThis.Symbol("take");
const inList$accessorSymbol = globalThis.Symbol("inList");
const algb2$accessorSymbol = globalThis.Symbol("algb2");
let listcomp_fun, lcss1, lambda, lambda1, lambda$, lambda$1, main_testLCSS_nofib_lcssMain_lcss_algc$algc, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map1, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Nil, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Nil, main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_dflt, main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_dflt, main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_dflt, main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Nil, main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Cons, main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2, main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2$worker, main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons$worker, main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons$worker;
main_testLCSS_nofib_lcssMain_lcss_algc$algc = function main_testLCSS_nofib_lcssMain_lcss_algc$algc(m, n, xs, ys) {
  let scrut, m2, xs1, xs2, l1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (ys instanceof NofibPrelude.Nil.class) {
    return lambda
  }
  {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, l$_, l, inlinedVal5, l$_1, l2, inlinedVal6, tmp7, xss, yss, inlinedVal7, tmp8, fv_l$_, inlinedVal8, l$_2;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        scrut = lcss1[inList$accessorSymbol](arg$Cons$0$, ys);
        if (scrut === true) {
          return lambda$1(arg$Cons$0$)
        }
        return lambda1;
      }
    }
    tmp8 = m / 2;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp8));
    m2 = inlinedVal;
    xs1 = lcss1[take$accessorSymbol](inlinedVal, xs);
    xs2 = lcss1[leave$accessorSymbol](inlinedVal, xs);
    tmp7 = listcomp_fun(ys);
    xss = xs1;
    yss = tmp7;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$1, arg$Cons$1$1, tmp9;
        if (xss instanceof NofibPrelude.Nil.class) {
          inlinedVal7 = main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map1(lcss1[snd$accessorSymbol], yss);
          break inlinedLbl
        } else if (xss instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = xss.head;
          arg$Cons$1$1 = xss.tail;
          tmp9 = lcss1[algb2$accessorSymbol](arg$Cons$0$1, 0, 0, yss);
          xss = arg$Cons$1$1;
          yss = tmp9;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    l1 = main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_Cons(0, inlinedVal7);
    l$_1 = main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Nil();
    l2 = xs2;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let arg$Cons$0$1, arg$Cons$1$1;
        if (l2 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          l$_1 = main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Cons(arg$Cons$0$1, l$_1);
          l2 = arg$Cons$1$1;
          continue loopLabel1
        }
        inlinedVal6 = l$_1;
        break inlinedLbl1;
      }
    }
    tmp = inlinedVal6;
    l$_ = main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Nil();
    l = ys;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let arg$Cons$0$1, arg$Cons$1$1;
        if (l instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = l.head;
          arg$Cons$1$1 = l.tail;
          l$_ = main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons(arg$Cons$0$1, l$_);
          l = arg$Cons$1$1;
          continue loopLabel2
        }
        inlinedVal5 = l$_;
        break inlinedLbl2;
      }
    }
    inlinedVal3 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, undefined);
    inlinedVal4 = tmp(inlinedVal3, undefined, undefined, undefined, undefined, undefined);
    fv_l$_ = main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_dflt();
    l$_2 = main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons(0, fv_l$_);
    inlinedVal8 = inlinedVal4(undefined, undefined, undefined, undefined, undefined, l$_2);
    inlinedVal1 = l1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, inlinedVal8);
    inlinedVal2 = inlinedVal1(0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, 0, undefined, undefined);
    tmp1 = lcss1[take$accessorSymbol](inlinedVal2, ys);
    tmp2 = main_testLCSS_nofib_lcssMain_lcss_algc$algc(m2, inlinedVal2, xs1, tmp1);
    tmp3 = m - m2;
    tmp4 = n - inlinedVal2;
    tmp5 = lcss1[leave$accessorSymbol](inlinedVal2, ys);
    tmp6 = main_testLCSS_nofib_lcssMain_lcss_algc$algc(tmp3, tmp4, xs2, tmp5);
    return lambda$(tmp2, tmp6);
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map(f, arg$Cons$1$);
    return main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_dflt()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map1 = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map1(f, arg$Cons$1$);
    return main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_dflt()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Nil = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Nil() {
  return (fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_map$map(lcss1[snd$accessorSymbol], fv_yss)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1$xss_Cons(Cons_head, Cons_tail) {
  return (fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    fv_tmp = lcss1[algb2$accessorSymbol](Cons_head, 0, 0, fv_yss);
    return Cons_tail(fv_tmp, undefined, undefined, undefined, undefined, undefined)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Nil = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_listcomp_fun_ls_t, fv_listcomp_fun_ls_h, fv_tmp, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_listcomp_fun_ls_t, fv_listcomp_fun_ls_h, fv_tmp, fv_tmp1) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_listcomp_fun_ls_t, fv_listcomp_fun_ls_h, fv_tmp, fv_tmp1)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons$worker = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_listcomp_fun$listcomp_fun_para_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_listcomp_fun_ls_t, fv_listcomp_fun_ls_h, fv_tmp, fv_tmp1) {
  let inlinedVal;
  fv_tmp = globalThis.Object.freeze([
    Cons_head,
    0
  ]);
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    let l$_;
    l$_ = main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons(Cons_head, fv_l$_);
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, l$_)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_dflt = function main_testLCSS_nofib_lcssMain_lcss_algc_reverse_r$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    return fv_l$_
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_tmp1, fv_ys1) => {
    return fv_ys1(fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, Cons_head, fv_tmp1, Cons_tail)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_dflt = function main_testLCSS_nofib_lcssMain_lcss_algc_zip$xs_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_tmp1, fv_ys1) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Nil()
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_dflt = function main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_tmp, fv_x, fv_tmp1, fv_xs) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Nil()
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_tmp, fv_x, fv_tmp1, fv_xs) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_tmp, fv_x, fv_tmp1, fv_xs)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons$worker = function main_testLCSS_nofib_lcssMain_lcss_algc_zip$ys_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_tmp, fv_x, fv_tmp1, fv_xs) {
  let Cons_head1, inlinedVal;
  inlinedVal = fv_xs(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Cons_tail);
  Cons_head1 = main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2(fv_x, Cons_head);
  return main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Cons(Cons_head1, inlinedVal)
};
main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Nil = function main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Nil() {
  return (fv_km, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_xys, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3) => {
    return fv_km
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Cons = function main_testLCSS_nofib_lcssMain_lcss_algc_findk$ls_Cons(Cons_head, Cons_tail) {
  return (fv_km, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_xys, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3) => {
    return Cons_head(fv_element0$, fv_element1$, fv_xys, Cons_tail, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3, fv_km)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2 = function main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_xys, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3, fv_km) => {
    return main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_xys, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3, fv_km)
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2$worker = function main_testLCSS_nofib_lcssMain_lcss_algc_findk$arg$Cons$0$_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_xys, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_scrut, fv_m, fv_tmp1, fv_k, fv_tmp2, fv_tmp3, fv_km) {
  fv_tmp = tup2_0 + tup2_1;
  fv_scrut = fv_tmp >= fv_m;
  if (fv_scrut === true) {
    fv_tmp1 = fv_k + 1;
    fv_tmp2 = tup2_0 + tup2_1;
    return fv_arg$Cons$1$(fv_k, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_tmp2, undefined, fv_tmp1, undefined, undefined)
  }
  fv_tmp3 = fv_k + 1;
  return fv_arg$Cons$1$(fv_km, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_m, undefined, fv_tmp3, undefined, undefined);
};
lambda1 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (x) {
  return (t) => {
    return NofibPrelude.Cons(x, t)
  }
});
lambda = (undefined, function (x) {
  return x
});
listcomp_fun = function listcomp_fun(listcomp_fun_para) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (listcomp_fun_para instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = listcomp_fun_para.head;
    arg$Cons$1$ = listcomp_fun_para.tail;
    tmp = globalThis.Object.freeze([
      arg$Cons$0$,
      0
    ]);
    tmp1 = listcomp_fun(arg$Cons$1$);
    return NofibPrelude.Cons(tmp, tmp1)
  } else if (listcomp_fun_para instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
(class lcss {
  static {
    lcss1 = this
  }
  static get [snd$accessorSymbol]() { return lcss.#snd; }
  static get [leave$accessorSymbol]() { return lcss.#leave; }
  static get [take$accessorSymbol]() { return lcss.#take; }
  static get [inList$accessorSymbol]() { return lcss.#inList; }
  static get [algb2$accessorSymbol]() { return lcss.#algb2; }
  static #snd(x) {
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      return runtime.Tuple.get(x, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listLen(ls) {
    let ls1, a, inlinedVal;
    ls1 = ls;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$1$, tmp;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$ = ls1.tail;
          tmp = a + 1;
          ls1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = lcss.#enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    }
    return NofibPrelude.Nil;
  }
  static #leave(n, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls.tail;
        scrut = n <= 0;
        if (scrut === true) {
          return ls
        }
        tmp = n - 1;
        n = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #take(n, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = lcss.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #algb2(x, k0j1, k1j1, yss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
    if (yss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (yss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = yss.head;
      arg$Cons$1$ = yss.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = x == element0$;
        if (scrut === true) {
          tmp = k0j1 + 1;
        } else {
          let inlinedVal;
          inlinedVal = runtime.safeCall(globalThis.Math.max(k1j1, element1$));
          tmp = inlinedVal;
        }
        tmp1 = globalThis.Object.freeze([
          element0$,
          tmp
        ]);
        tmp2 = lcss.#algb2(x, element1$, tmp, arg$Cons$1$);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, tmp1, inlinedVal, tmp2, tmp3, baseCall;
    tmp = lcss1.#enumFromThenTo(1, 2, 60);
    tmp1 = lcss1.#enumFromThenTo(30, 31, 90);
    tmp2 = lcss1.#listLen(tmp);
    tmp3 = lcss1.#listLen(tmp1);
    baseCall = main_testLCSS_nofib_lcssMain_lcss_algc$algc(tmp2, tmp3, tmp, tmp1);
    inlinedVal = runtime.safeCall(baseCall(NofibPrelude.Nil));
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lcss"];
});
export default lcss1;
