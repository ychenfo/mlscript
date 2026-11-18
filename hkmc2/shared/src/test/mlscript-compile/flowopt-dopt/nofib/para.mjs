const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const map$accessorSymbol = globalThis.Symbol("map");
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const leave$accessorSymbol = globalThis.Symbol("leave");
const take$accessorSymbol = globalThis.Symbol("take");
const append$accessorSymbol = globalThis.Symbol("append");
const break_$accessorSymbol = globalThis.Symbol("break_");
const isSpace$accessorSymbol = globalThis.Symbol("isSpace");
const fold1$accessorSymbol = globalThis.Symbol("fold1");
const null__$accessorSymbol = globalThis.Symbol("null__");
const single_$accessorSymbol = globalThis.Symbol("single_");
const head_$accessorSymbol = globalThis.Symbol("head_");
const last_$accessorSymbol = globalThis.Symbol("last_");
const cons_$accessorSymbol = globalThis.Symbol("cons_");
const startr$accessorSymbol = globalThis.Symbol("startr");
let breakk, bf, width_hd, cost, para1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, main_testPara_nofib_fmt_parse_paras_lambda$_lambda$lambda, main_testPara_nofib_fmt_parse_paras_lambda$$lambda$, main_testPara_nofib_fmt_parse_words_leaveWhile$leaveWhile, main_testPara_nofib_fmt_parse_words$words, main_testPara_nofib_fmt_parse_lines_break_$break_, main_testPara_nofib_fmt_parse_paras_filter$filter, main_testPara_nofib_fmt_par3_tile_splitAt$splitAt, main_testPara_nofib_fmt_par3$par3, main_testPara_nofib_fmt_par3_stepr$stepr, main_testPara_nofib_fmt_concat_append$append, main_testPara_nofib_fmt_unparse_map$map, main_testPara_nofib_fmt_unparse_unwords$unwords, main_testPara_nofib_fmt_unparse_unlines_lambda$$lambda$, main_testPara_nofib_fmt_unparse_unwords_append$append, main_testPara_nofib_fmt_unparse_unwords_go$go, main_testPara_nofib_fmt_unparse_unwords_go_append$append, main_testPara_nofib_fmt_unparse_unparas_unformat_lambda$$lambda$, main_testPara_nofib_fmt_parse_words$scrut_Cons, main_testPara_nofib_fmt_parse_words$scrut_Nil, main_testPara_nofib_fmt_parse_lines$s__Cons, main_testPara_nofib_fmt_parse_lines$s__Nil, main_testPara_nofib_fmt_parse_map$xs_Cons, main_testPara_nofib_fmt_parse_map$xs_Nil, main_testPara_nofib_fmt_concat$ls_Cons, main_testPara_nofib_fmt_concat$ls_Nil, main_testPara_nofib_fmt_par3_tile$scrut_tup2, main_testPara_nofib_fmt_map$xs_Cons, main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons, main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Nil, main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons, main_testPara_nofib_fmt_unparse_unlines_map$xs_Nil, main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons$worker, main_testPara_nofib_fmt_map$xs_Cons$worker, main_testPara_nofib_fmt_par3_tile$a_b_tup2$worker, main_testPara_nofib_fmt_par3_tile$scrut_tup2$worker, main_testPara_nofib_fmt_parse_map$xs_Cons$worker, main_testPara_nofib_fmt_parse_lines$s__Cons$worker, main_testPara_nofib_fmt_parse_words$scrut_Cons$worker;
main_testPara_nofib_fmt_parse_paras_lambda$_lambda$lambda = function main_testPara_nofib_fmt_parse_paras_lambda$_lambda$lambda(x) {
  if (x instanceof NofibPrelude.Nil.class) {
    return false
  }
  return true;
};
main_testPara_nofib_fmt_parse_paras_lambda$$lambda$ = function main_testPara_nofib_fmt_parse_paras_lambda$$lambda$() {
  return (x) => {
    return main_testPara_nofib_fmt_parse_paras_lambda$_lambda$lambda(x)
  }
};
main_testPara_nofib_fmt_parse_words_leaveWhile$leaveWhile = function main_testPara_nofib_fmt_parse_words_leaveWhile$leaveWhile(f, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testPara_nofib_fmt_parse_words$scrut_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(f(arg$Cons$0$));
      if (scrut === true) {
        ls = arg$Cons$1$;
        continue loopLabel
      }
      return main_testPara_nofib_fmt_parse_words$scrut_Cons(arg$Cons$0$, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testPara_nofib_fmt_parse_words$words = function main_testPara_nofib_fmt_parse_words$words(s) {
  let scrut;
  scrut = main_testPara_nofib_fmt_parse_words_leaveWhile$leaveWhile(para1[isSpace$accessorSymbol], s);
  return scrut(undefined, undefined, undefined, undefined)
};
main_testPara_nofib_fmt_parse_lines_break_$break_ = function main_testPara_nofib_fmt_parse_lines_break_$break_(p, xs) {
  let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    let deforest$lam;
    deforest$lam = main_testPara_nofib_fmt_parse_lines$s__Nil();
    return globalThis.Object.freeze([
      NofibPrelude.Nil,
      deforest$lam
    ])
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    scrut = runtime.safeCall(p(arg$Cons$0$));
    if (scrut === true) {
      tmp = main_testPara_nofib_fmt_parse_lines$s__Cons(arg$Cons$1$);
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        tmp
      ])
    }
    scrut1 = main_testPara_nofib_fmt_parse_lines_break_$break_(p, arg$Cons$1$);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
      return globalThis.Object.freeze([
        tmp1,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_parse_paras_filter$filter = function main_testPara_nofib_fmt_parse_paras_filter$filter(f, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testPara_nofib_fmt_concat$ls_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(f(arg$Cons$0$));
      if (scrut === true) {
        tmp = main_testPara_nofib_fmt_parse_paras_filter$filter(f, arg$Cons$1$);
        return main_testPara_nofib_fmt_concat$ls_Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testPara_nofib_fmt_par3_tile_splitAt$splitAt = function main_testPara_nofib_fmt_par3_tile_splitAt$splitAt(n, ls) {
  let tmp, tmp1;
  tmp = para1[take$accessorSymbol](n, ls);
  tmp1 = para1[leave$accessorSymbol](n, ls);
  return main_testPara_nofib_fmt_par3_tile$scrut_tup2(tmp, tmp1)
};
main_testPara_nofib_fmt_par3$par3 = function main_testPara_nofib_fmt_par3$par3(ws) {
  let tmp, tmp1, lambda$here, g, inlinedVal, element2$, arg$Cons$0$, lambda$here1, lambda$here2;
  tmp = para1[map$accessorSymbol](para1[listLen$accessorSymbol], ws);
  g = para1[startr$accessorSymbol];
  lambda$here1 = lambda$1(main_testPara_nofib_fmt_par3_stepr$stepr);
  lambda$here2 = lambda$(g);
  inlinedVal = para1[fold1$accessorSymbol](lambda$here1, lambda$here2, tmp);
  lambda$here = lambda$4(para1);
  tmp1 = para1[map$accessorSymbol](lambda$here, inlinedVal);
  if (inlinedVal instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = inlinedVal.head;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 3) {
      runtime.Tuple.get(arg$Cons$0$, 0);
      runtime.Tuple.get(arg$Cons$0$, 1);
      element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
      return main_testPara_nofib_fmt_par3_tile$a_b_tup2$worker(tmp1, element2$, undefined, undefined, undefined, undefined, ws, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_par3_stepr$stepr = function main_testPara_nofib_fmt_par3_stepr$stepr(w, ps_tw_tl) {
  let tot_width, tot_len, element2$, element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(ps_tw_tl) && ps_tw_tl.length === 3) {
    let inlinedVal, para2, tot_width1, p, qr_rs, inlinedVal1, para3, tot_width2, ps_p, inlinedVal2, para4, tot_width3, ps_pq, inlinedVal3, x, tmp2, tmp3, inlinedVal4, inlinedVal5;
    element0$ = runtime.Tuple.get(ps_tw_tl, 0);
    element1$ = runtime.Tuple.get(ps_tw_tl, 1);
    element2$ = runtime.Tuple.get(ps_tw_tl, 2);
    tmp = w + 1;
    tot_width = tmp + element1$;
    tot_len = 1 + element2$;
    tmp1 = para1[last_$accessorSymbol](element0$);
    if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 3) {
      runtime.Tuple.get(tmp1, 0);
      runtime.Tuple.get(tmp1, 1);
      inlinedVal5 = runtime.Tuple.get(tmp1, 2);
      inlinedVal4 = inlinedVal5 === 0;
      if (inlinedVal4 === true) {
        inlinedVal = globalThis.Object.freeze([
          element1$,
          0,
          element2$
        ]);
      } else {
        let inlinedVal6, tmp4, inlinedVal7, inlinedVal8, element1$1;
        if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 3) {
          runtime.Tuple.get(tmp1, 0);
          element1$1 = runtime.Tuple.get(tmp1, 1);
          runtime.Tuple.get(tmp1, 2);
          if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 3) {
            runtime.Tuple.get(tmp1, 0);
            runtime.Tuple.get(tmp1, 1);
            inlinedVal8 = runtime.Tuple.get(tmp1, 2);
            inlinedVal7 = inlinedVal8 === 0;
            if (inlinedVal7 === true) {
              inlinedVal6 = element1$;
            } else {
              let element0$1;
              if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 3) {
                element0$1 = runtime.Tuple.get(tmp1, 0);
                runtime.Tuple.get(tmp1, 1);
                runtime.Tuple.get(tmp1, 2);
                tmp4 = element1$ - element0$1;
                inlinedVal6 = tmp4 - 1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
            x = para1.optw - inlinedVal6;
            tmp2 = x * x;
            tmp3 = element1$1 + tmp2;
            inlinedVal = globalThis.Object.freeze([
              element1$,
              tmp3,
              element2$
            ]);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      para2 = para1;
      tot_width1 = tot_width;
      p = inlinedVal;
      qr_rs = element0$;
      inlinedLbl: {
        loopLabel: while (true) {
          let q, r, scrut, tmp4, tmp5, tmp6, tmp7;
          tmp4 = para2[single_$accessorSymbol](qr_rs);
          if (tmp4 === false) {
            tmp5 = para2[null__$accessorSymbol](qr_rs);
            if (tmp5 === true) {
              inlinedVal1 = para2[cons_$accessorSymbol](p, qr_rs);
              break inlinedLbl
            }
            {
              let inlinedVal6, element1$1, element0$1, tmp8;
              q = para2[head_$accessorSymbol](qr_rs);
              if (runtime.Tuple.isArrayLike(qr_rs) && qr_rs.length === 2) {
                element0$1 = runtime.Tuple.get(qr_rs, 0);
                element1$1 = runtime.Tuple.get(qr_rs, 1);
                if (element0$1 instanceof NofibPrelude.Nil.class) {
                  inlinedVal6 = globalThis.Object.freeze([
                    NofibPrelude.Nil,
                    NofibPrelude.Nil
                  ]);
                } else {
                  let arg$Cons$1$;
                  if (element0$1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$1$ = element0$1.tail;
                    if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                      let inlinedVal7, tmp9, tmp10, tmp11, fv_tmp, inlinedVal8;
                      tmp8 = para1[listLen$accessorSymbol](element1$1);
                      tmp9 = tmp8 / 2;
                      inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp9));
                      tmp10 = para1[take$accessorSymbol](inlinedVal7, element1$1);
                      tmp11 = para1[leave$accessorSymbol](inlinedVal7, element1$1);
                      fv_tmp = para1[reverse$accessorSymbol](tmp11);
                      inlinedVal8 = globalThis.Object.freeze([
                        fv_tmp,
                        tmp10
                      ]);
                      inlinedVal6 = inlinedVal8;
                    } else {
                      let inlinedVal7, arg$Cons$1$1;
                      if (element0$1 instanceof NofibPrelude.Cons.class) {
                        arg$Cons$1$1 = element0$1.tail;
                        inlinedVal7 = globalThis.Object.freeze([
                          arg$Cons$1$1,
                          element1$1
                        ]);
                        inlinedVal6 = inlinedVal7;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    }
                  } else {
                    let inlinedVal7, arg$Cons$1$1;
                    if (element0$1 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$1$1 = element0$1.tail;
                      inlinedVal7 = globalThis.Object.freeze([
                        arg$Cons$1$1,
                        element1$1
                      ]);
                      inlinedVal6 = inlinedVal7;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  }
                }
                r = para2[head_$accessorSymbol](inlinedVal6);
                tmp6 = bf(para2, tot_width1, p, q);
                tmp7 = bf(para2, tot_width1, q, r);
                scrut = tmp6 <= tmp7;
                if (scrut === true) {
                  qr_rs = inlinedVal6;
                  continue loopLabel
                }
                inlinedVal1 = para2[cons_$accessorSymbol](p, qr_rs);
                break inlinedLbl;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          inlinedVal1 = para2[cons_$accessorSymbol](p, qr_rs);
          break inlinedLbl;
        }
      }
      para3 = para1;
      tot_width2 = tot_width;
      ps_p = inlinedVal1;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut, scrut1, tmp4, tmp5;
          scrut = para3[null__$accessorSymbol](ps_p);
          if (scrut === true) {
            inlinedVal2 = ps_p;
            break inlinedLbl1
          }
          tmp4 = para3[last_$accessorSymbol](ps_p);
          tmp5 = width_hd(tot_width2, tmp4);
          scrut1 = tmp5 > para3.maxw;
          if (scrut1 === true) {
            let inlinedVal6, element1$1, element0$1, tmp6;
            if (runtime.Tuple.isArrayLike(ps_p) && ps_p.length === 2) {
              element0$1 = runtime.Tuple.get(ps_p, 0);
              element1$1 = runtime.Tuple.get(ps_p, 1);
              if (element1$1 instanceof NofibPrelude.Nil.class) {
                inlinedVal6 = globalThis.Object.freeze([
                  NofibPrelude.Nil,
                  NofibPrelude.Nil
                ]);
              } else {
                let arg$Cons$1$;
                if (element1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$1$ = element1$1.tail;
                  if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                    let inlinedVal7, tmp7, tmp8, tmp9, fv_tmp, inlinedVal8;
                    tmp6 = para1[listLen$accessorSymbol](element0$1);
                    tmp7 = tmp6 / 2;
                    inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp7));
                    tmp8 = para1[take$accessorSymbol](inlinedVal7, element0$1);
                    tmp9 = para1[leave$accessorSymbol](inlinedVal7, element0$1);
                    fv_tmp = para1[reverse$accessorSymbol](tmp9);
                    inlinedVal8 = globalThis.Object.freeze([
                      tmp8,
                      fv_tmp
                    ]);
                    inlinedVal6 = inlinedVal8;
                  } else {
                    let inlinedVal7, arg$Cons$1$1;
                    if (element1$1 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$1$1 = element1$1.tail;
                      inlinedVal7 = globalThis.Object.freeze([
                        element0$1,
                        arg$Cons$1$1
                      ]);
                      inlinedVal6 = inlinedVal7;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  }
                } else {
                  let inlinedVal7, arg$Cons$1$1;
                  if (element1$1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$1$1 = element1$1.tail;
                    inlinedVal7 = globalThis.Object.freeze([
                      element0$1,
                      arg$Cons$1$1
                    ]);
                    inlinedVal6 = inlinedVal7;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                }
              }
              ps_p = inlinedVal6;
              continue loopLabel1
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          inlinedVal2 = ps_p;
          break inlinedLbl1;
        }
      }
      para4 = para1;
      tot_width3 = tot_width;
      ps_pq = inlinedVal2;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut, scrut1, q, p1, scrut2, tmp4, tmp5;
          scrut = para4[null__$accessorSymbol](ps_pq);
          if (scrut === true) {
            inlinedVal3 = ps_pq;
            break inlinedLbl2
          }
          scrut1 = para4[single_$accessorSymbol](ps_pq);
          if (scrut1 === true) {
            inlinedVal3 = ps_pq;
            break inlinedLbl2
          }
          {
            let inlinedVal6, element1$1, element0$1, tmp6;
            if (runtime.Tuple.isArrayLike(ps_pq) && ps_pq.length === 2) {
              element0$1 = runtime.Tuple.get(ps_pq, 0);
              element1$1 = runtime.Tuple.get(ps_pq, 1);
              if (element1$1 instanceof NofibPrelude.Nil.class) {
                inlinedVal6 = globalThis.Object.freeze([
                  NofibPrelude.Nil,
                  NofibPrelude.Nil
                ]);
              } else {
                let arg$Cons$1$;
                if (element1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$1$ = element1$1.tail;
                  if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                    let inlinedVal7, tmp7, tmp8, tmp9, fv_tmp, inlinedVal8;
                    tmp6 = para1[listLen$accessorSymbol](element0$1);
                    tmp7 = tmp6 / 2;
                    inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp7));
                    tmp8 = para1[take$accessorSymbol](inlinedVal7, element0$1);
                    tmp9 = para1[leave$accessorSymbol](inlinedVal7, element0$1);
                    fv_tmp = para1[reverse$accessorSymbol](tmp9);
                    inlinedVal8 = globalThis.Object.freeze([
                      tmp8,
                      fv_tmp
                    ]);
                    inlinedVal6 = inlinedVal8;
                  } else {
                    let inlinedVal7, arg$Cons$1$1;
                    if (element1$1 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$1$1 = element1$1.tail;
                      inlinedVal7 = globalThis.Object.freeze([
                        element0$1,
                        arg$Cons$1$1
                      ]);
                      inlinedVal6 = inlinedVal7;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  }
                } else {
                  let inlinedVal7, arg$Cons$1$1;
                  if (element1$1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$1$1 = element1$1.tail;
                    inlinedVal7 = globalThis.Object.freeze([
                      element0$1,
                      arg$Cons$1$1
                    ]);
                    inlinedVal6 = inlinedVal7;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                }
              }
              q = para4[last_$accessorSymbol](ps_pq);
              p1 = para4[last_$accessorSymbol](inlinedVal6);
              tmp4 = cost(para4, tot_width3, p1);
              tmp5 = cost(para4, tot_width3, q);
              scrut2 = tmp4 <= tmp5;
              if (scrut2 === true) {
                ps_pq = inlinedVal6;
                continue loopLabel2
              }
              inlinedVal3 = ps_pq;
              break inlinedLbl2;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      return globalThis.Object.freeze([
        inlinedVal3,
        tot_width,
        tot_len
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_concat_append$append = function main_testPara_nofib_fmt_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPara_nofib_fmt_concat_append$append(arg$Cons$1$, ys);
    return main_testPara_nofib_fmt_map$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_map$map = function main_testPara_nofib_fmt_unparse_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testPara_nofib_fmt_unparse_map$map(f, arg$Cons$1$);
    return main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testPara_nofib_fmt_unparse_unlines_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_unwords$unwords = function main_testPara_nofib_fmt_unparse_unwords$unwords(ws) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ws instanceof NofibPrelude.Nil.class) {
    return main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Nil()
  } else if (ws instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ws.head;
    arg$Cons$1$ = ws.tail;
    tmp = main_testPara_nofib_fmt_unparse_unwords_go$go(arg$Cons$1$);
    return main_testPara_nofib_fmt_unparse_unwords_append$append(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_unlines_lambda$$lambda$ = function main_testPara_nofib_fmt_unparse_unlines_lambda$$lambda$() {
  return (l) => {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("\n");
    return l(tmp)
  }
};
main_testPara_nofib_fmt_unparse_unwords_append$append = function main_testPara_nofib_fmt_unparse_unwords_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPara_nofib_fmt_unparse_unwords_append$append(arg$Cons$1$, ys);
    return main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_unwords_go$go = function main_testPara_nofib_fmt_unparse_unwords_go$go(vs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (vs instanceof NofibPrelude.Nil.class) {
    return main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Nil()
  } else if (vs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = vs.head;
    arg$Cons$1$ = vs.tail;
    tmp = main_testPara_nofib_fmt_unparse_unwords_go$go(arg$Cons$1$);
    tmp1 = main_testPara_nofib_fmt_unparse_unwords_go_append$append(arg$Cons$0$, tmp);
    return main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons(" ", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_unwords_go_append$append = function main_testPara_nofib_fmt_unparse_unwords_go_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testPara_nofib_fmt_unparse_unwords_go_append$append(arg$Cons$1$, ys);
    return main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_unparse_unparas_unformat_lambda$$lambda$ = function main_testPara_nofib_fmt_unparse_unparas_unformat_lambda$$lambda$(para2, a) {
  return (xs, ys) => {
    let inlinedVal;
    inlinedVal = NofibPrelude.Cons(a, ys);
    return para2[append$accessorSymbol](xs, inlinedVal)
  }
};
main_testPara_nofib_fmt_parse_words$scrut_Cons = function main_testPara_nofib_fmt_parse_words$scrut_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_scrut, fv_element0$, fv_element1$) => {
    return main_testPara_nofib_fmt_parse_words$scrut_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_scrut, fv_element0$, fv_element1$)
  }
};
main_testPara_nofib_fmt_parse_words$scrut_Cons$worker = function main_testPara_nofib_fmt_parse_words$scrut_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_scrut, fv_element0$, fv_element1$) {
  fv_tmp = NofibPrelude.Cons(Cons_head, Cons_tail);
  fv_scrut = para1[break_$accessorSymbol](para1[isSpace$accessorSymbol], fv_tmp);
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 2) {
    let inlinedVal, scrut;
    fv_element0$ = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$ = runtime.Tuple.get(fv_scrut, 1);
    scrut = main_testPara_nofib_fmt_parse_words_leaveWhile$leaveWhile(para1[isSpace$accessorSymbol], fv_element1$);
    inlinedVal = scrut(undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(fv_element0$, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_parse_words$scrut_Nil = function main_testPara_nofib_fmt_parse_words$scrut_Nil() {
  return (fv_tmp, fv_scrut, fv_element0$, fv_element1$) => {
    return NofibPrelude.Nil
  }
};
main_testPara_nofib_fmt_parse_lines$s__Cons = function main_testPara_nofib_fmt_parse_lines$s__Cons(Cons_tail) {
  return (fv_l) => {
    return main_testPara_nofib_fmt_parse_lines$s__Cons$worker(Cons_tail, fv_l)
  }
};
main_testPara_nofib_fmt_parse_lines$s__Cons$worker = function main_testPara_nofib_fmt_parse_lines$s__Cons$worker(Cons_tail, fv_l) {
  let inlinedVal, scrut, element1$, element0$;
  scrut = main_testPara_nofib_fmt_parse_lines_break_$break_(lambda, Cons_tail);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    inlinedVal = element1$(element0$);
    return main_testPara_nofib_fmt_parse_map$xs_Cons(fv_l, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_parse_lines$s__Nil = function main_testPara_nofib_fmt_parse_lines$s__Nil() {
  return (fv_l) => {
    return (eta$0$4, eta$0$5) => {
      let Cons_tail;
      Cons_tail = main_testPara_nofib_fmt_parse_map$xs_Nil();
      return main_testPara_nofib_fmt_parse_map$xs_Cons$worker(fv_l, Cons_tail, eta$0$4, eta$0$5)
    }
  }
};
main_testPara_nofib_fmt_parse_map$xs_Cons = function main_testPara_nofib_fmt_parse_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testPara_nofib_fmt_parse_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testPara_nofib_fmt_parse_map$xs_Cons$worker = function main_testPara_nofib_fmt_parse_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testPara_nofib_fmt_parse_map$xs_Nil = function main_testPara_nofib_fmt_parse_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testPara_nofib_fmt_concat$ls_Cons = function main_testPara_nofib_fmt_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_testPara_nofib_fmt_concat_append$append(Cons_head, inlinedVal)
  }
};
main_testPara_nofib_fmt_concat$ls_Nil = function main_testPara_nofib_fmt_concat$ls_Nil() {
  return () => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testPara_nofib_fmt_par3_tile$scrut_tup2 = function main_testPara_nofib_fmt_par3_tile$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ws2, fv_ws1, fv_tmp, fv_m, fv_ms, fv_tmp1, fv_l, fv_tmp2, fv_tmp3) => {
    return main_testPara_nofib_fmt_par3_tile$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_ws2, fv_ws1, fv_tmp, fv_m, fv_ms, fv_tmp1, fv_l, fv_tmp2, fv_tmp3)
  }
};
main_testPara_nofib_fmt_par3_tile$scrut_tup2$worker = function main_testPara_nofib_fmt_par3_tile$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_ws2, fv_ws1, fv_tmp, fv_m, fv_ms, fv_tmp1, fv_l, fv_tmp2, fv_tmp3) {
  let inlinedVal;
  fv_tmp = NofibPrelude.Cons(fv_m, fv_ms);
  fv_tmp1 = para1[leave$accessorSymbol](fv_l, fv_tmp);
  inlinedVal = main_testPara_nofib_fmt_par3_tile$a_b_tup2$worker(fv_tmp1, fv_m, undefined, undefined, undefined, undefined, tup2_1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  return NofibPrelude.Cons(tup2_0, inlinedVal)
};
main_testPara_nofib_fmt_par3_tile$a_b_tup2$worker = function main_testPara_nofib_fmt_par3_tile$a_b_tup2$worker(tup2_0, tup2_1, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l, fv_scrut, fv_ws, fv_element0$, fv_element1$, fv_ws2, fv_ws1, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3) {
  if (tup2_0 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (tup2_0 instanceof NofibPrelude.Cons.class) {
    fv_arg$Cons$0$ = tup2_0.head;
    fv_arg$Cons$1$ = tup2_0.tail;
    fv_l = tup2_1 - fv_arg$Cons$0$;
    fv_scrut = main_testPara_nofib_fmt_par3_tile_splitAt$splitAt(fv_l, fv_ws);
    return fv_scrut(fv_element0$, fv_element1$, fv_ws2, fv_ws1, fv_tmp, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp1, fv_l, fv_tmp2, fv_tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_map$xs_Cons = function main_testPara_nofib_fmt_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testPara_nofib_fmt_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testPara_nofib_fmt_map$xs_Cons$worker = function main_testPara_nofib_fmt_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons = function main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return () => {
      return main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
    }
  }
};
main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons$worker = function main_testPara_nofib_fmt_unparse_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal, inlinedVal1;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  inlinedVal1 = inlinedVal();
  return para1[append$accessorSymbol](fv_tmp, inlinedVal1)
};
main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Nil = function main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons = function main_testPara_nofib_fmt_unparse_unlines_lambda$_lambda_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testPara_nofib_fmt_unparse_unlines_map$xs_Nil = function main_testPara_nofib_fmt_unparse_unlines_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
lambda$4 = (undefined, function (para2) {
  return (x) => {
    return lambda3(para2, x)
  }
});
lambda3 = (undefined, function (para2, x) {
  let tmp, element0$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
    element0$ = runtime.Tuple.get(x, 0);
    runtime.Tuple.get(x, 1);
    runtime.Tuple.get(x, 2);
    tmp = para2[last_$accessorSymbol](element0$);
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
      runtime.Tuple.get(tmp, 0);
      runtime.Tuple.get(tmp, 1);
      return runtime.Tuple.get(tmp, 2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
width_hd = function width_hd(tot_width, p) {
  let tmp, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return tot_width
    }
    {
      let element0$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        element0$ = runtime.Tuple.get(p, 0);
        runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = tot_width - element0$;
        return tmp - 1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cost = function cost(para2, tot_width, p) {
  let a, tmp, tmp1, inlinedVal, inlinedVal1;
  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
    runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    inlinedVal1 = runtime.Tuple.get(p, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      return 0
    }
    {
      let element1$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp = width_hd(tot_width, p);
        a = para2.optw - tmp;
        tmp1 = a * a;
        return element1$ + tmp1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
bf = function bf(para2, tot_width, p, q) {
  let wqh, rqh, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1;
  wqh = width_hd(tot_width, q);
  tmp = para2.maxw - wqh;
  rqh = tmp + 1;
  if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
    runtime.Tuple.get(q, 0);
    runtime.Tuple.get(q, 1);
    inlinedVal1 = runtime.Tuple.get(q, 2);
    inlinedVal = inlinedVal1 === 0;
    if (inlinedVal === true) {
      let element1$;
      if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
        runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        runtime.Tuple.get(p, 2);
        tmp1 = element1$ === 0;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp1 = false;
    }
    if (tmp1 === true) {
      tmp2 = width_hd(tot_width, p);
      tmp3 = para2.optw - tmp2;
      return runtime.safeCall(globalThis.Math.min(tmp3, rqh))
    }
    {
      let inlinedVal2, inlinedVal3;
      if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
        runtime.Tuple.get(q, 0);
        runtime.Tuple.get(q, 1);
        inlinedVal3 = runtime.Tuple.get(q, 2);
        inlinedVal2 = inlinedVal3 === 0;
        if (inlinedVal2 === true) {
          return rqh
        }
        {
          let tmp10, tmp11, inlinedVal4, tmp12;
          tmp4 = cost(para2, tot_width, p);
          tmp5 = cost(para2, tot_width, q);
          tmp6 = tmp4 - tmp5;
          tmp7 = width_hd(tot_width, p);
          tmp8 = wqh - tmp7;
          tmp9 = 2 * tmp8;
          tmp10 = tmp6 + tmp9;
          tmp11 = tmp10 - 1;
          tmp12 = tmp11 / tmp9;
          inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp12));
          return runtime.safeCall(globalThis.Math.min(inlinedVal4, rqh));
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$3 = (undefined, function (a) {
  return (x, y) => {
    return breakk(a, x, y)
  }
});
lambda$2 = (undefined, function (a) {
  return (y) => {
    let tmp;
    tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
    return breakk(a, y, tmp)
  }
});
breakk = function breakk(a, b, xs) {
  let tmp, inlinedVal;
  inlinedVal = a === b;
  if (inlinedVal === true) {
    return NofibPrelude.Cons(NofibPrelude.Nil, xs)
  }
  {
    let arg$Cons$1$, arg$Cons$0$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      tmp = NofibPrelude.Cons(b, arg$Cons$0$);
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = xs.tail;
        return NofibPrelude.Cons(tmp, arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda2 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (f) {
  return (a, s) => {
    return lambda1(f, a, s)
  }
});
lambda$ = (undefined, function (g) {
  return (a) => {
    let tmp;
    tmp = runtime.safeCall(g(a));
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda1 = (undefined, function (f, a, s) {
  let tmp, arg$Cons$0$;
  if (s instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = s.head;
    tmp = runtime.safeCall(f(a, arg$Cons$0$));
    return NofibPrelude.Cons(tmp, s)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda = (undefined, function (x) {
  return x === "\n"
});
(class para {
  static {
    para1 = this
  }
  static get [reverse$accessorSymbol]() { return para.#reverse; }
  static get [map$accessorSymbol]() { return para.#map; }
  static get [listLen$accessorSymbol]() { return para.#listLen; }
  static get [leave$accessorSymbol]() { return para.#leave; }
  static get [take$accessorSymbol]() { return para.#take; }
  static get [append$accessorSymbol]() { return para.#append; }
  static get [break_$accessorSymbol]() { return para.#break_; }
  static get [isSpace$accessorSymbol]() { return para.#isSpace; }
  static get [fold1$accessorSymbol]() { return para.#fold1; }
  static get [null__$accessorSymbol]() { return para.#null__; }
  static get [single_$accessorSymbol]() { return para.#single_; }
  static get [head_$accessorSymbol]() { return para.#head_; }
  static get [last_$accessorSymbol]() { return para.#last_; }
  static get [cons_$accessorSymbol]() { return para.#cons_; }
  static get [startr$accessorSymbol]() { return para.#startr; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10;
    para.maxw = 70;
    para.optw = 63;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    para.nil_ = tmp;
    tmp1 = NofibPrelude.nofibStringToList("In the constructive programming community it is commonplace to see ");
    tmp2 = NofibPrelude.nofibStringToList("formal developments of textbook algorithms. In the algorithm design ");
    tmp3 = NofibPrelude.nofibStringToList("community, on the other hand, it may be well known that the textbook ");
    tmp4 = NofibPrelude.nofibStringToList("solution to a problem is not the most efficient possible. However, in ");
    tmp5 = NofibPrelude.nofibStringToList("presenting the more efficient solution, the algorithm designer will ");
    tmp6 = NofibPrelude.nofibStringToList("usually omit some of the implementation details, this creating an ");
    tmp7 = NofibPrelude.nofibStringToList("algorithm gap between the abstract algorithm and its concrete ");
    tmp8 = NofibPrelude.nofibStringToList("implementation. This is in contrast to the formal development, which ");
    tmp9 = NofibPrelude.nofibStringToList("usually presents the complete concrete implementation of the less ");
    tmp10 = NofibPrelude.nofibStringToList("efficient solution.\n\n");
    inlinedVal10 = NofibPrelude.Nil;
    inlinedVal9 = para1.#append(tmp10, inlinedVal10);
    inlinedVal8 = para1.#append(tmp9, inlinedVal9);
    inlinedVal7 = para1.#append(tmp8, inlinedVal8);
    inlinedVal6 = para1.#append(tmp7, inlinedVal7);
    inlinedVal5 = para1.#append(tmp6, inlinedVal6);
    inlinedVal4 = para1.#append(tmp5, inlinedVal5);
    inlinedVal3 = para1.#append(tmp4, inlinedVal4);
    inlinedVal2 = para1.#append(tmp3, inlinedVal3);
    inlinedVal1 = para1.#append(tmp2, inlinedVal2);
    inlinedVal = para1.#append(tmp1, inlinedVal1);
    para.test = inlinedVal;
  }
  static #head(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = para.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
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
      tmp1 = para.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = para.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  }
  static #break_(p, xs) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      scrut = runtime.safeCall(p(arg$Cons$0$));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = para.#break_(p, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #isSpace(c) {
    return c === " "
  }
  static #fold1(f, g, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(g(arg$Cons$0$))
      }
      tmp = para.#fold1(f, g, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #single(xs) {
    let arg$Cons$1$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #null__(a_b) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        if (element1$ instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      }
      return false;
    }
    return false;
  }
  static #single_(a_b) {
    let element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element0$);
      if (tmp === true) {
        tmp1 = para.#single(element1$);
        if (tmp1 === false) {
          tmp2 = para.#single(element0$);
          if (tmp2 === true) {
            return para.#null_(element1$)
          }
          return false;
        }
        return true;
      }
      tmp2 = para.#single(element0$);
      if (tmp2 === true) {
        return para.#null_(element1$)
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #head_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element0$);
      scrut = ! tmp;
      if (scrut === true) {
        return para.#head(element0$)
      }
      return para.#head(element1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #last_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        return para.#head(element1$)
      }
      return para.#head(element0$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cons_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = para.#null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        tmp2,
        element0$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #startr(a) {
    let scrut, tmp, tmp1;
    scrut = a <= para.maxw;
    if (scrut === true) {
      tmp = globalThis.Object.freeze([
        0,
        0,
        0
      ]);
      tmp1 = para.#cons_(tmp, para.nil_);
      return globalThis.Object.freeze([
        tmp1,
        a,
        1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let inlinedVal, ls;
    ls = para1.test;
    if (ls instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.Nil;
      return NofibPrelude.nofibListToString(inlinedVal)
    }
    {
      let x, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, lambda$here, a, inlinedVal5, lambda$here1, lambda$here2, tmp, a1, inlinedVal6, lambda$here3, f, inlinedVal7, inlinedVal8, inlinedVal9, scrut, element1$, element0$;
      x = para1.test;
      scrut = main_testPara_nofib_fmt_parse_lines_break_$break_(lambda, x);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        inlinedVal9 = element1$(element0$);
        inlinedVal3 = inlinedVal9(undefined, main_testPara_nofib_fmt_parse_words$words);
        a = NofibPrelude.Nil;
        if (inlinedVal3 instanceof NofibPrelude.Nil.class) {
          inlinedVal5 = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
        } else {
          lambda$here1 = lambda$3(a);
          lambda$here2 = lambda$2(a);
          inlinedVal5 = para1.#fold1(lambda$here1, lambda$here2, inlinedVal3);
        }
        lambda$here = main_testPara_nofib_fmt_parse_paras_lambda$$lambda$();
        inlinedVal4 = main_testPara_nofib_fmt_parse_paras_filter$filter(lambda$here, inlinedVal5);
        inlinedVal1 = inlinedVal4();
        inlinedVal2 = inlinedVal1(undefined, main_testPara_nofib_fmt_par3$par3);
        a1 = NofibPrelude.Nil;
        lambda$here3 = main_testPara_nofib_fmt_unparse_unparas_unformat_lambda$$lambda$(para1, a1);
        inlinedVal6 = para1.#fold1(lambda$here3, lambda2, inlinedVal2);
        tmp = main_testPara_nofib_fmt_unparse_map$map(main_testPara_nofib_fmt_unparse_unwords$unwords, inlinedVal6);
        f = main_testPara_nofib_fmt_unparse_unlines_lambda$$lambda$();
        inlinedVal7 = tmp(undefined, f);
        inlinedVal8 = inlinedVal7();
        return NofibPrelude.nofibListToString(inlinedVal8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "para"];
});
export default para1;
