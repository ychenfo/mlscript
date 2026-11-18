const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const append$accessorSymbol = globalThis.Symbol("append");
const fold1$accessorSymbol = globalThis.Symbol("fold1");
const tile$accessorSymbol = globalThis.Symbol("tile");
const null__$accessorSymbol = globalThis.Symbol("null__");
const single_$accessorSymbol = globalThis.Symbol("single_");
const head_$accessorSymbol = globalThis.Symbol("head_");
const last_$accessorSymbol = globalThis.Symbol("last_");
const cons_$accessorSymbol = globalThis.Symbol("cons_");
const tail_$accessorSymbol = globalThis.Symbol("tail_");
const init_$accessorSymbol = globalThis.Symbol("init_");
const startr$accessorSymbol = globalThis.Symbol("startr");
let go, para1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk, main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$, main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk1, main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$1, main_testPara_nofib_fmt_par3_stepr$stepr, main_testPara_nofib_fmt_par3$par3, main_testPara_nofib_fmt_par3_scan1_lambda$_lambda$lambda, main_testPara_nofib_fmt_par3_scan1_lambda$$lambda$, main_testPara_nofib_fmt_parse_paras_lambda$_listNeq$listNeq, main_testPara_nofib_fmt_parse_paras_lambda$$lambda$, main_testPara_nofib_fmt_parse_lines_break_$break_, main_testPara_nofib_fmt_parse_lines$lines, main_testPara_nofib_fmt_par3_lambda$_lambda$lambda, main_testPara_nofib_fmt_par3_lambda$$lambda$;
main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk = function main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk(a, b, xs) {
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
main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$ = function main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$(a) {
  return (y) => {
    let tmp;
    tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
    return main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk(a, y, tmp)
  }
};
main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk1 = function main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk(a, b, xs) {
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
main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$1 = function main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$(a) {
  return (x, y) => {
    return main_testPara_nofib_fmt_parse_paras_format_lambda$_breakk$breakk1(a, x, y)
  }
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
          let q, r_rs, r, scrut, tmp4, tmp5;
          tmp4 = para2[single_$accessorSymbol](qr_rs);
          if (tmp4 === false) {
            tmp5 = para2[null__$accessorSymbol](qr_rs);
            if (tmp5 === true) {
              inlinedVal1 = para2[cons_$accessorSymbol](p, qr_rs);
              break inlinedLbl
            }
            {
              let inlinedVal6, inlinedVal7, rqh, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, tmp12, inlinedVal11, inlinedVal12, rqh1, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, inlinedVal13, inlinedVal14, inlinedVal15, tmp19, inlinedVal16, inlinedVal17;
              q = para2[head_$accessorSymbol](qr_rs);
              r_rs = para2[tail_$accessorSymbol](qr_rs);
              r = para2[head_$accessorSymbol](r_rs);
              if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                runtime.Tuple.get(q, 0);
                runtime.Tuple.get(q, 1);
                inlinedVal17 = runtime.Tuple.get(q, 2);
                inlinedVal16 = inlinedVal17 === 0;
                if (inlinedVal16 === true) {
                  inlinedVal15 = tot_width1;
                } else {
                  let element0$1;
                  if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                    element0$1 = runtime.Tuple.get(q, 0);
                    runtime.Tuple.get(q, 1);
                    runtime.Tuple.get(q, 2);
                    tmp19 = tot_width1 - element0$1;
                    inlinedVal15 = tmp19 - 1;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                }
                tmp13 = para2.maxw - inlinedVal15;
                rqh1 = tmp13 + 1;
                if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                  runtime.Tuple.get(q, 0);
                  runtime.Tuple.get(q, 1);
                  inlinedVal14 = runtime.Tuple.get(q, 2);
                  inlinedVal13 = inlinedVal14 === 0;
                  if (inlinedVal13 === true) {
                    let element1$1;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                      element1$1 = runtime.Tuple.get(p, 1);
                      tmp14 = element1$1 === 0;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    tmp14 = false;
                  }
                  if (tmp14 === true) {
                    let inlinedVal18, tmp20, inlinedVal19, inlinedVal20;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                      inlinedVal20 = runtime.Tuple.get(p, 2);
                      inlinedVal19 = inlinedVal20 === 0;
                      if (inlinedVal19 === true) {
                        inlinedVal18 = tot_width1;
                      } else {
                        let element0$1;
                        if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                          element0$1 = runtime.Tuple.get(p, 0);
                          tmp20 = tot_width1 - element0$1;
                          inlinedVal18 = tmp20 - 1;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      }
                      tmp15 = para2.optw - inlinedVal18;
                      inlinedVal6 = runtime.safeCall(globalThis.Math.min(tmp15, rqh1));
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    let inlinedVal18, inlinedVal19;
                    if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                      runtime.Tuple.get(q, 0);
                      runtime.Tuple.get(q, 1);
                      inlinedVal19 = runtime.Tuple.get(q, 2);
                      inlinedVal18 = inlinedVal19 === 0;
                      if (inlinedVal18 === true) {
                        inlinedVal6 = rqh1;
                      } else {
                        let tmp20, tmp21, inlinedVal20, tmp22, inlinedVal21, inlinedVal22, inlinedVal23, a, tmp23, inlinedVal24, inlinedVal25, a1, tmp24, inlinedVal26, inlinedVal27, tmp25, inlinedVal28, inlinedVal29;
                        if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                          inlinedVal25 = runtime.Tuple.get(p, 2);
                          inlinedVal24 = inlinedVal25 === 0;
                          if (inlinedVal24 === true) {
                            inlinedVal21 = 0;
                          } else {
                            let element1$1;
                            if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                              let inlinedVal30, tmp26, inlinedVal31, inlinedVal32;
                              element1$1 = runtime.Tuple.get(p, 1);
                              if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                                inlinedVal32 = runtime.Tuple.get(p, 2);
                                inlinedVal31 = inlinedVal32 === 0;
                                if (inlinedVal31 === true) {
                                  inlinedVal30 = tot_width1;
                                } else {
                                  let element0$1;
                                  if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                                    element0$1 = runtime.Tuple.get(p, 0);
                                    tmp26 = tot_width1 - element0$1;
                                    inlinedVal30 = tmp26 - 1;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                }
                                a = para2.optw - inlinedVal30;
                                tmp23 = a * a;
                                inlinedVal21 = element1$1 + tmp23;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          }
                          if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                            runtime.Tuple.get(q, 0);
                            runtime.Tuple.get(q, 1);
                            inlinedVal27 = runtime.Tuple.get(q, 2);
                            inlinedVal26 = inlinedVal27 === 0;
                            if (inlinedVal26 === true) {
                              inlinedVal22 = 0;
                            } else {
                              let element1$1;
                              if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                let inlinedVal30, tmp26, inlinedVal31, inlinedVal32;
                                runtime.Tuple.get(q, 0);
                                element1$1 = runtime.Tuple.get(q, 1);
                                runtime.Tuple.get(q, 2);
                                if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                  runtime.Tuple.get(q, 0);
                                  runtime.Tuple.get(q, 1);
                                  inlinedVal32 = runtime.Tuple.get(q, 2);
                                  inlinedVal31 = inlinedVal32 === 0;
                                  if (inlinedVal31 === true) {
                                    inlinedVal30 = tot_width1;
                                  } else {
                                    let element0$1;
                                    if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                      element0$1 = runtime.Tuple.get(q, 0);
                                      runtime.Tuple.get(q, 1);
                                      runtime.Tuple.get(q, 2);
                                      tmp26 = tot_width1 - element0$1;
                                      inlinedVal30 = tmp26 - 1;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                  }
                                  a1 = para2.optw - inlinedVal30;
                                  tmp24 = a1 * a1;
                                  inlinedVal22 = element1$1 + tmp24;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                            }
                            tmp16 = inlinedVal21 - inlinedVal22;
                            if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                              inlinedVal29 = runtime.Tuple.get(p, 2);
                              inlinedVal28 = inlinedVal29 === 0;
                              if (inlinedVal28 === true) {
                                inlinedVal23 = tot_width1;
                              } else {
                                let element0$1;
                                if (runtime.Tuple.isArrayLike(p) && p.length === 3) {
                                  element0$1 = runtime.Tuple.get(p, 0);
                                  tmp25 = tot_width1 - element0$1;
                                  inlinedVal23 = tmp25 - 1;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              }
                              tmp17 = inlinedVal15 - inlinedVal23;
                              tmp18 = 2 * tmp17;
                              tmp20 = tmp16 + tmp18;
                              tmp21 = tmp20 - 1;
                              tmp22 = tmp21 / tmp18;
                              inlinedVal20 = runtime.safeCall(globalThis.Math.floor(tmp22));
                              inlinedVal6 = runtime.safeCall(globalThis.Math.min(inlinedVal20, rqh1));
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
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  }
                  if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                    runtime.Tuple.get(r, 0);
                    runtime.Tuple.get(r, 1);
                    inlinedVal12 = runtime.Tuple.get(r, 2);
                    inlinedVal11 = inlinedVal12 === 0;
                    if (inlinedVal11 === true) {
                      inlinedVal10 = tot_width1;
                    } else {
                      let element0$1;
                      if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                        element0$1 = runtime.Tuple.get(r, 0);
                        runtime.Tuple.get(r, 1);
                        runtime.Tuple.get(r, 2);
                        tmp12 = tot_width1 - element0$1;
                        inlinedVal10 = tmp12 - 1;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    }
                    tmp6 = para2.maxw - inlinedVal10;
                    rqh = tmp6 + 1;
                    if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                      runtime.Tuple.get(r, 0);
                      runtime.Tuple.get(r, 1);
                      inlinedVal9 = runtime.Tuple.get(r, 2);
                      inlinedVal8 = inlinedVal9 === 0;
                      if (inlinedVal8 === true) {
                        let element1$1;
                        if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                          runtime.Tuple.get(q, 0);
                          element1$1 = runtime.Tuple.get(q, 1);
                          runtime.Tuple.get(q, 2);
                          tmp7 = element1$1 === 0;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        tmp7 = false;
                      }
                      if (tmp7 === true) {
                        let inlinedVal18, tmp20, inlinedVal19, inlinedVal20;
                        if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                          runtime.Tuple.get(q, 0);
                          runtime.Tuple.get(q, 1);
                          inlinedVal20 = runtime.Tuple.get(q, 2);
                          inlinedVal19 = inlinedVal20 === 0;
                          if (inlinedVal19 === true) {
                            inlinedVal18 = tot_width1;
                          } else {
                            let element0$1;
                            if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                              element0$1 = runtime.Tuple.get(q, 0);
                              runtime.Tuple.get(q, 1);
                              runtime.Tuple.get(q, 2);
                              tmp20 = tot_width1 - element0$1;
                              inlinedVal18 = tmp20 - 1;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          }
                          tmp8 = para2.optw - inlinedVal18;
                          inlinedVal7 = runtime.safeCall(globalThis.Math.min(tmp8, rqh));
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        let inlinedVal18, inlinedVal19;
                        if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                          runtime.Tuple.get(r, 0);
                          runtime.Tuple.get(r, 1);
                          inlinedVal19 = runtime.Tuple.get(r, 2);
                          inlinedVal18 = inlinedVal19 === 0;
                          if (inlinedVal18 === true) {
                            inlinedVal7 = rqh;
                          } else {
                            let tmp20, tmp21, inlinedVal20, tmp22, inlinedVal21, inlinedVal22, inlinedVal23, a, tmp23, inlinedVal24, inlinedVal25, a1, tmp24, inlinedVal26, inlinedVal27, tmp25, inlinedVal28, inlinedVal29;
                            if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                              runtime.Tuple.get(q, 0);
                              runtime.Tuple.get(q, 1);
                              inlinedVal25 = runtime.Tuple.get(q, 2);
                              inlinedVal24 = inlinedVal25 === 0;
                              if (inlinedVal24 === true) {
                                inlinedVal21 = 0;
                              } else {
                                let element1$1;
                                if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                  let inlinedVal30, tmp26, inlinedVal31, inlinedVal32;
                                  runtime.Tuple.get(q, 0);
                                  element1$1 = runtime.Tuple.get(q, 1);
                                  runtime.Tuple.get(q, 2);
                                  if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                    runtime.Tuple.get(q, 0);
                                    runtime.Tuple.get(q, 1);
                                    inlinedVal32 = runtime.Tuple.get(q, 2);
                                    inlinedVal31 = inlinedVal32 === 0;
                                    if (inlinedVal31 === true) {
                                      inlinedVal30 = tot_width1;
                                    } else {
                                      let element0$1;
                                      if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                        element0$1 = runtime.Tuple.get(q, 0);
                                        runtime.Tuple.get(q, 1);
                                        runtime.Tuple.get(q, 2);
                                        tmp26 = tot_width1 - element0$1;
                                        inlinedVal30 = tmp26 - 1;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                    }
                                    a = para2.optw - inlinedVal30;
                                    tmp23 = a * a;
                                    inlinedVal21 = element1$1 + tmp23;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              }
                              if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                                runtime.Tuple.get(r, 0);
                                runtime.Tuple.get(r, 1);
                                inlinedVal27 = runtime.Tuple.get(r, 2);
                                inlinedVal26 = inlinedVal27 === 0;
                                if (inlinedVal26 === true) {
                                  inlinedVal22 = 0;
                                } else {
                                  let element1$1;
                                  if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                                    let inlinedVal30, tmp26, inlinedVal31, inlinedVal32;
                                    runtime.Tuple.get(r, 0);
                                    element1$1 = runtime.Tuple.get(r, 1);
                                    runtime.Tuple.get(r, 2);
                                    if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                                      runtime.Tuple.get(r, 0);
                                      runtime.Tuple.get(r, 1);
                                      inlinedVal32 = runtime.Tuple.get(r, 2);
                                      inlinedVal31 = inlinedVal32 === 0;
                                      if (inlinedVal31 === true) {
                                        inlinedVal30 = tot_width1;
                                      } else {
                                        let element0$1;
                                        if (runtime.Tuple.isArrayLike(r) && r.length === 3) {
                                          element0$1 = runtime.Tuple.get(r, 0);
                                          runtime.Tuple.get(r, 1);
                                          runtime.Tuple.get(r, 2);
                                          tmp26 = tot_width1 - element0$1;
                                          inlinedVal30 = tmp26 - 1;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                      }
                                      a1 = para2.optw - inlinedVal30;
                                      tmp24 = a1 * a1;
                                      inlinedVal22 = element1$1 + tmp24;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                }
                                tmp9 = inlinedVal21 - inlinedVal22;
                                if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                  runtime.Tuple.get(q, 0);
                                  runtime.Tuple.get(q, 1);
                                  inlinedVal29 = runtime.Tuple.get(q, 2);
                                  inlinedVal28 = inlinedVal29 === 0;
                                  if (inlinedVal28 === true) {
                                    inlinedVal23 = tot_width1;
                                  } else {
                                    let element0$1;
                                    if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                                      element0$1 = runtime.Tuple.get(q, 0);
                                      runtime.Tuple.get(q, 1);
                                      runtime.Tuple.get(q, 2);
                                      tmp25 = tot_width1 - element0$1;
                                      inlinedVal23 = tmp25 - 1;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                  }
                                  tmp10 = inlinedVal10 - inlinedVal23;
                                  tmp11 = 2 * tmp10;
                                  tmp20 = tmp9 + tmp11;
                                  tmp21 = tmp20 - 1;
                                  tmp22 = tmp21 / tmp11;
                                  inlinedVal20 = runtime.safeCall(globalThis.Math.floor(tmp22));
                                  inlinedVal7 = runtime.safeCall(globalThis.Math.min(inlinedVal20, rqh));
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
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      }
                      scrut = inlinedVal6 <= inlinedVal7;
                      if (scrut === true) {
                        qr_rs = r_rs;
                        continue loopLabel
                      }
                      inlinedVal1 = para2[cons_$accessorSymbol](p, qr_rs);
                      break inlinedLbl;
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
          {
            let inlinedVal6, tmp6, inlinedVal7, inlinedVal8;
            tmp4 = para3[last_$accessorSymbol](ps_p);
            if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 3) {
              runtime.Tuple.get(tmp4, 0);
              runtime.Tuple.get(tmp4, 1);
              inlinedVal8 = runtime.Tuple.get(tmp4, 2);
              inlinedVal7 = inlinedVal8 === 0;
              if (inlinedVal7 === true) {
                inlinedVal6 = tot_width2;
              } else {
                let element0$1;
                if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 3) {
                  element0$1 = runtime.Tuple.get(tmp4, 0);
                  runtime.Tuple.get(tmp4, 1);
                  runtime.Tuple.get(tmp4, 2);
                  tmp6 = tot_width2 - element0$1;
                  inlinedVal6 = tmp6 - 1;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              }
              scrut1 = inlinedVal6 > para3.maxw;
              if (scrut1 === true) {
                tmp5 = para3[init_$accessorSymbol](ps_p);
                ps_p = tmp5;
                continue loopLabel1
              }
              inlinedVal2 = ps_p;
              break inlinedLbl1;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      }
      para4 = para1;
      tot_width3 = tot_width;
      ps_pq = inlinedVal2;
      inlinedLbl2: {
        loopLabel2: while (true) {
          let scrut, scrut1, ps_p1, q, p1, scrut2;
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
            let inlinedVal6, inlinedVal7, a, tmp4, inlinedVal8, inlinedVal9, a1, tmp5, inlinedVal10, inlinedVal11;
            ps_p1 = para4[init_$accessorSymbol](ps_pq);
            q = para4[last_$accessorSymbol](ps_pq);
            p1 = para4[last_$accessorSymbol](ps_p1);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 3) {
              runtime.Tuple.get(p1, 0);
              runtime.Tuple.get(p1, 1);
              inlinedVal11 = runtime.Tuple.get(p1, 2);
              inlinedVal10 = inlinedVal11 === 0;
              if (inlinedVal10 === true) {
                inlinedVal6 = 0;
              } else {
                let element1$1;
                if (runtime.Tuple.isArrayLike(p1) && p1.length === 3) {
                  let inlinedVal12, tmp6, inlinedVal13, inlinedVal14;
                  runtime.Tuple.get(p1, 0);
                  element1$1 = runtime.Tuple.get(p1, 1);
                  runtime.Tuple.get(p1, 2);
                  if (runtime.Tuple.isArrayLike(p1) && p1.length === 3) {
                    runtime.Tuple.get(p1, 0);
                    runtime.Tuple.get(p1, 1);
                    inlinedVal14 = runtime.Tuple.get(p1, 2);
                    inlinedVal13 = inlinedVal14 === 0;
                    if (inlinedVal13 === true) {
                      inlinedVal12 = tot_width3;
                    } else {
                      let element0$1;
                      if (runtime.Tuple.isArrayLike(p1) && p1.length === 3) {
                        element0$1 = runtime.Tuple.get(p1, 0);
                        runtime.Tuple.get(p1, 1);
                        runtime.Tuple.get(p1, 2);
                        tmp6 = tot_width3 - element0$1;
                        inlinedVal12 = tmp6 - 1;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    }
                    a1 = para4.optw - inlinedVal12;
                    tmp5 = a1 * a1;
                    inlinedVal6 = element1$1 + tmp5;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              }
              if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                runtime.Tuple.get(q, 0);
                runtime.Tuple.get(q, 1);
                inlinedVal9 = runtime.Tuple.get(q, 2);
                inlinedVal8 = inlinedVal9 === 0;
                if (inlinedVal8 === true) {
                  inlinedVal7 = 0;
                } else {
                  let element1$1;
                  if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                    let inlinedVal12, tmp6, inlinedVal13, inlinedVal14;
                    runtime.Tuple.get(q, 0);
                    element1$1 = runtime.Tuple.get(q, 1);
                    runtime.Tuple.get(q, 2);
                    if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                      runtime.Tuple.get(q, 0);
                      runtime.Tuple.get(q, 1);
                      inlinedVal14 = runtime.Tuple.get(q, 2);
                      inlinedVal13 = inlinedVal14 === 0;
                      if (inlinedVal13 === true) {
                        inlinedVal12 = tot_width3;
                      } else {
                        let element0$1;
                        if (runtime.Tuple.isArrayLike(q) && q.length === 3) {
                          element0$1 = runtime.Tuple.get(q, 0);
                          runtime.Tuple.get(q, 1);
                          runtime.Tuple.get(q, 2);
                          tmp6 = tot_width3 - element0$1;
                          inlinedVal12 = tmp6 - 1;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      }
                      a = para4.optw - inlinedVal12;
                      tmp4 = a * a;
                      inlinedVal7 = element1$1 + tmp4;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                }
                scrut2 = inlinedVal6 <= inlinedVal7;
                if (scrut2 === true) {
                  ps_pq = ps_p1;
                  continue loopLabel2
                }
                inlinedVal3 = ps_pq;
                break inlinedLbl2;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
main_testPara_nofib_fmt_par3$par3 = function main_testPara_nofib_fmt_par3$par3(ws) {
  let tmp, tmp1, tmp2, lambda$here, g, inlinedVal, inlinedVal1, inlinedVal2, lambda$here1, lambda$here2;
  tmp = para1[map$accessorSymbol](para1[listLen$accessorSymbol], ws);
  g = para1[startr$accessorSymbol];
  lambda$here1 = main_testPara_nofib_fmt_par3_scan1_lambda$$lambda$(main_testPara_nofib_fmt_par3_stepr$stepr);
  lambda$here2 = lambda$1(g);
  inlinedVal = para1[fold1$accessorSymbol](lambda$here1, lambda$here2, tmp);
  lambda$here = main_testPara_nofib_fmt_par3_lambda$$lambda$(para1);
  tmp1 = para1[map$accessorSymbol](lambda$here, inlinedVal);
  if (inlinedVal instanceof NofibPrelude.Cons.class) {
    inlinedVal1 = inlinedVal.head;
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
      inlinedVal2 = runtime.Tuple.get(inlinedVal1, 2);
      tmp2 = globalThis.Object.freeze([
        tmp1,
        inlinedVal2
      ]);
      return para1[tile$accessorSymbol](ws, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_par3_scan1_lambda$_lambda$lambda = function main_testPara_nofib_fmt_par3_scan1_lambda$_lambda$lambda(f, a, s) {
  let tmp, arg$Cons$0$;
  if (s instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = s.head;
    tmp = runtime.safeCall(f(a, arg$Cons$0$));
    return NofibPrelude.Cons(tmp, s)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_par3_scan1_lambda$$lambda$ = function main_testPara_nofib_fmt_par3_scan1_lambda$$lambda$(f) {
  return (a, s) => {
    return main_testPara_nofib_fmt_par3_scan1_lambda$_lambda$lambda(f, a, s)
  }
};
main_testPara_nofib_fmt_parse_paras_lambda$_listNeq$listNeq = function main_testPara_nofib_fmt_parse_paras_lambda$_listNeq$listNeq(xs, ys) {
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return false
    }
    return true;
  }
  return true;
};
main_testPara_nofib_fmt_parse_paras_lambda$$lambda$ = function main_testPara_nofib_fmt_parse_paras_lambda$$lambda$(para2) {
  return (x) => {
    return main_testPara_nofib_fmt_parse_paras_lambda$_listNeq$listNeq(NofibPrelude.Nil, x)
  }
};
main_testPara_nofib_fmt_parse_lines_break_$break_ = function main_testPara_nofib_fmt_parse_lines_break_$break_(p, xs) {
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
      tmp = NofibPrelude.Cons(undefined, arg$Cons$1$);
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
main_testPara_nofib_fmt_parse_lines$lines = function main_testPara_nofib_fmt_parse_lines$lines(s) {
  let scrut, element1$, element0$, arg$Cons$1$, tmp;
  scrut = main_testPara_nofib_fmt_parse_lines_break_$break_(lambda, s);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    if (element1$ instanceof NofibPrelude.Nil.class) {
      tmp = NofibPrelude.Nil;
      return NofibPrelude.Cons(element0$, tmp)
    } else if (element1$ instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = element1$.tail;
      tmp = main_testPara_nofib_fmt_parse_lines$lines(arg$Cons$1$);
      return NofibPrelude.Cons(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_par3_lambda$_lambda$lambda = function main_testPara_nofib_fmt_par3_lambda$_lambda$lambda(para2, x) {
  let tmp, element0$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
    element0$ = runtime.Tuple.get(x, 0);
    tmp = para2[last_$accessorSymbol](element0$);
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
      runtime.Tuple.get(tmp, 0);
      runtime.Tuple.get(tmp, 1);
      return runtime.Tuple.get(tmp, 2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testPara_nofib_fmt_par3_lambda$$lambda$ = function main_testPara_nofib_fmt_par3_lambda$$lambda$(para2) {
  return (x) => {
    return main_testPara_nofib_fmt_par3_lambda$_lambda$lambda(para2, x)
  }
};
lambda$2 = (undefined, function (para2, a) {
  return (xs, ys) => {
    return lambda1(para2, a, xs, ys)
  }
});
lambda1 = (undefined, function (para2, a, xs, ys) {
  let tmp, tmp1;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  tmp1 = para2[append$accessorSymbol](tmp, ys);
  return para2[append$accessorSymbol](xs, tmp1)
});
lambda2 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (g) {
  return (a) => {
    let tmp;
    tmp = runtime.safeCall(g(a));
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda$ = (undefined, function (para2) {
  return (l) => {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("\n");
    return para2[append$accessorSymbol](l, tmp)
  }
});
lambda = (undefined, function (x) {
  return x === "\n"
});
go = function go(para2, vs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (vs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (vs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = vs.head;
    arg$Cons$1$ = vs.tail;
    tmp = go(para2, arg$Cons$1$);
    tmp1 = para2[append$accessorSymbol](arg$Cons$0$, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class para {
  static {
    para1 = this
  }
  static get [map$accessorSymbol]() { return para.#map; }
  static get [listLen$accessorSymbol]() { return para.#listLen; }
  static get [append$accessorSymbol]() { return para.#append; }
  static get [fold1$accessorSymbol]() { return para.#fold1; }
  static get [tile$accessorSymbol]() { return para.#tile; }
  static get [null__$accessorSymbol]() { return para.#null__; }
  static get [single_$accessorSymbol]() { return para.#single_; }
  static get [head_$accessorSymbol]() { return para.#head_; }
  static get [last_$accessorSymbol]() { return para.#last_; }
  static get [cons_$accessorSymbol]() { return para.#cons_; }
  static get [tail_$accessorSymbol]() { return para.#tail_; }
  static get [init_$accessorSymbol]() { return para.#init_; }
  static get [startr$accessorSymbol]() { return para.#startr; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
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
    tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    tmp12 = NofibPrelude.Cons(tmp9, tmp11);
    tmp13 = NofibPrelude.Cons(tmp8, tmp12);
    tmp14 = NofibPrelude.Cons(tmp7, tmp13);
    tmp15 = NofibPrelude.Cons(tmp6, tmp14);
    tmp16 = NofibPrelude.Cons(tmp5, tmp15);
    tmp17 = NofibPrelude.Cons(tmp4, tmp16);
    tmp18 = NofibPrelude.Cons(tmp3, tmp17);
    tmp19 = NofibPrelude.Cons(tmp2, tmp18);
    tmp20 = NofibPrelude.Cons(tmp1, tmp19);
    tmp21 = para.#concat(tmp20);
    para.test = tmp21;
  }
  static #head(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tail(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.tail
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
  static #splitAt(n, ls) {
    let tmp, tmp1;
    tmp = para.#take(n, ls);
    tmp1 = para.#leave(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
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
  static #concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = para.#concat(arg$Cons$1$);
      return para.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = para.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #leaveWhile(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  }
  static #unwords(ws) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      tmp = go(para, arg$Cons$1$);
      return para.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #words(s) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = para.#leaveWhile(para.#isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      scrut1 = para.#break_(para.#isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = para.#words(element1$);
        return NofibPrelude.Cons(element0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #tile(ws, a_b) {
    let l, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (element0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element0$.head;
        arg$Cons$1$ = element0$.tail;
        l = element1$ - arg$Cons$0$;
        scrut = para.#splitAt(l, ws);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp1 = para.#leave(l, tmp);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            arg$Cons$0$
          ]);
          tmp3 = para.#tile(element1$1, tmp2);
          return NofibPrelude.Cons(element0$1, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #tail_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = para.#null_(element0$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.#single(element0$);
      if (scrut1 === true) {
        let inlinedVal, tmp3;
        tmp1 = para.#listLen(element1$);
        tmp3 = tmp1 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
        scrut2 = para.#splitAt(inlinedVal, element1$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = para.#reverse(element1$1);
          return globalThis.Object.freeze([
            tmp2,
            element0$1
          ])
        }
      }
      tmp = para.#tail(element0$);
      return globalThis.Object.freeze([
        tmp,
        element1$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #init_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = para.#null_(element1$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.#single(element1$);
      if (scrut1 === true) {
        let inlinedVal, tmp3;
        tmp1 = para.#listLen(element0$);
        tmp3 = tmp1 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
        scrut2 = para.#splitAt(inlinedVal, element0$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = para.#reverse(element1$1);
          return globalThis.Object.freeze([
            element0$1,
            tmp2
          ])
        }
      }
      tmp = para.#tail(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp
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
      let x, tmp, tmp1, tmp2, tmp3, inlinedVal1, lambda$here, a, inlinedVal2, lambda$here1, lambda$here2, tmp4, inlinedVal3, tmp5, lambda$here3, a1, inlinedVal4, lambda$here4;
      x = para1.test;
      tmp2 = main_testPara_nofib_fmt_parse_lines$lines(x);
      tmp3 = para1.#map(para1.#words, tmp2);
      a = NofibPrelude.Nil;
      if (tmp3 instanceof NofibPrelude.Nil.class) {
        inlinedVal2 = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
      } else {
        lambda$here1 = main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$1(a);
        lambda$here2 = main_testPara_nofib_fmt_parse_paras_format_lambda$$lambda$(a);
        inlinedVal2 = para1.#fold1(lambda$here1, lambda$here2, tmp3);
      }
      lambda$here = main_testPara_nofib_fmt_parse_paras_lambda$$lambda$(para1);
      inlinedVal1 = para1.#filter(lambda$here, inlinedVal2);
      tmp = para1.#concat(inlinedVal1);
      tmp1 = para1.#map(main_testPara_nofib_fmt_par3$par3, tmp);
      a1 = NofibPrelude.Nil;
      lambda$here4 = lambda$2(para1, a1);
      inlinedVal4 = para1.#fold1(lambda$here4, lambda2, tmp1);
      tmp4 = para1.#map(para1.#unwords, inlinedVal4);
      lambda$here3 = lambda$(para1);
      tmp5 = para1.#map(lambda$here3, tmp4);
      inlinedVal3 = para1.#concat(tmp5);
      return NofibPrelude.nofibListToString(inlinedVal3);
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "para"];
});
export default para1;
