const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listEq$accessorSymbol = globalThis.Symbol("listEq");
const lispListEq$accessorSymbol = globalThis.Symbol("lispListEq");
const truep$accessorSymbol = globalThis.Symbol("truep");
const falsep$accessorSymbol = globalThis.Symbol("falsep");
const getLUT$accessorSymbol = globalThis.Symbol("getLUT");
let boyer21, lambda, lambda1, lambda2, lambda3, main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst, main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp, main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst, main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite, main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_onewayunify_onewayunify1_onewayunify1lst_onewayunify1$onewayunify1lst_onewayunify1;
main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst = function main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(id, param0, param1) {
  switch (id) {
    case 0:
      {
        let arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2;
        if (param1 instanceof boyer21.Nill.class) {
          return boyer21.Nill
        } else if (param1 instanceof boyer21.Conss.class) {
          arg$Conss$0$ = param1.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
            tmp = main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(1, param0, element0$);
            tmp1 = main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(0, param0, element1$);
            tmp2 = globalThis.Object.freeze([
              tmp,
              tmp1
            ]);
            return boyer21.Conss(tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    case 1:
      {
        let arg$Conss$0$, element1$, element0$, arg$Atom$0$, arg$Conss$0$1, tmp, tmp1, tmp2, tmp3;
        if (param1 instanceof boyer21.Nill.class) {
          return boyer21.Nill
        } else if (param1 instanceof boyer21.Atom.class) {
          let term_x_y, inlinedVal;
          arg$Atom$0$ = param1.a;
          tmp = boyer21.Atom(arg$Atom$0$);
          tmp1 = globalThis.Object.freeze([
            tmp,
            param0
          ]);
          term_x_y = tmp1;
          inlinedLbl: {
            loopLabel: while (true) {
              let element1$1, element0$1, arg$Conss$0$2, element1$2, element0$2, arg$Conss$0$3, element0$3, arg$Atom$0$1, tmp4, tmp5;
              if (runtime.Tuple.isArrayLike(term_x_y) && term_x_y.length === 2) {
                element0$1 = runtime.Tuple.get(term_x_y, 0);
                element1$1 = runtime.Tuple.get(term_x_y, 1);
                if (element1$1 instanceof boyer21.Conss.class) {
                  arg$Conss$0$2 = element1$1.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                    element0$2 = runtime.Tuple.get(arg$Conss$0$2, 0);
                    element1$2 = runtime.Tuple.get(arg$Conss$0$2, 1);
                    if (element0$2 instanceof boyer21.Conss.class) {
                      arg$Conss$0$3 = element0$2.a;
                      if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                        element0$3 = runtime.Tuple.get(arg$Conss$0$3, 0);
                        if (element0$3 instanceof boyer21.Atom.class) {
                          let inlinedVal1, arg$Atom$0$2, arg$Atom$0$3;
                          arg$Atom$0$1 = element0$3.a;
                          tmp4 = boyer21.Atom(arg$Atom$0$1);
                          if (element0$1 instanceof boyer21.Nill.class) {
                            if (tmp4 instanceof boyer21.Nill.class) {
                              inlinedVal1 = true;
                            } else {
                              inlinedVal1 = false;
                            }
                          } else if (element0$1 instanceof boyer21.Atom.class) {
                            arg$Atom$0$2 = element0$1.a;
                            if (tmp4 instanceof boyer21.Atom.class) {
                              arg$Atom$0$3 = tmp4.a;
                              inlinedVal1 = boyer21[listEq$accessorSymbol](arg$Atom$0$2, arg$Atom$0$3);
                            } else {
                              inlinedVal1 = false;
                            }
                          } else {
                            inlinedVal1 = false;
                          }
                          if (inlinedVal1 === true) {
                            inlinedVal = element0$2;
                            break inlinedLbl
                          }
                          tmp5 = globalThis.Object.freeze([
                            element0$1,
                            element1$2
                          ]);
                          term_x_y = tmp5;
                          continue loopLabel;
                        }
                        inlinedVal = boyer21.Nill;
                        break inlinedLbl;
                      }
                      inlinedVal = boyer21.Nill;
                      break inlinedLbl;
                    }
                    inlinedVal = boyer21.Nill;
                    break inlinedLbl;
                  }
                  inlinedVal = boyer21.Nill;
                  break inlinedLbl;
                }
                inlinedVal = boyer21.Nill;
                break inlinedLbl;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          if (inlinedVal instanceof boyer21.Conss.class) {
            arg$Conss$0$1 = inlinedVal.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
              return runtime.Tuple.get(arg$Conss$0$1, 1)
            }
            return boyer21.Atom(arg$Atom$0$);
          }
          return boyer21.Atom(arg$Atom$0$);
        } else if (param1 instanceof boyer21.Conss.class) {
          arg$Conss$0$ = param1.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
            tmp2 = main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(0, param0, element1$);
            tmp3 = globalThis.Object.freeze([
              element0$,
              tmp2
            ]);
            return boyer21.Conss(tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
  }
};
main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp = function main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp(f_truelst_falselst) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, element2$, element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Atom$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    if (runtime.Tuple.isArrayLike(f_truelst_falselst) && f_truelst_falselst.length === 3) {
      element0$ = runtime.Tuple.get(f_truelst_falselst, 0);
      element1$ = runtime.Tuple.get(f_truelst_falselst, 1);
      element2$ = runtime.Tuple.get(f_truelst_falselst, 2);
      if (element0$ instanceof boyer21.Nill.class) {
        return false
      } else if (element0$ instanceof boyer21.Atom.class) {
        let inlinedVal;
        arg$Atom$0$1 = element0$.a;
        tmp = boyer21.Atom(arg$Atom$0$1);
        tmp1 = globalThis.Object.freeze([
          tmp,
          element1$
        ]);
        inlinedLbl: {
          let element1$2, element0$2, arg$Conss$0$1, element1$3, element0$3, arg$Atom$0$2, arg$Cons$0$2, arg$Cons$1$2, tmp18;
          if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 2) {
            element0$2 = runtime.Tuple.get(tmp1, 0);
            element1$2 = runtime.Tuple.get(tmp1, 1);
            if (element0$2 instanceof boyer21.Nill.class) {
              inlinedVal = false;
            } else {
              let e_x, inlinedVal1;
              if (element0$2 instanceof boyer21.Conss.class) {
                arg$Conss$0$1 = element0$2.a;
                if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                  element0$3 = runtime.Tuple.get(arg$Conss$0$1, 0);
                  element1$3 = runtime.Tuple.get(arg$Conss$0$1, 1);
                  if (element0$3 instanceof boyer21.Atom.class) {
                    arg$Atom$0$2 = element0$3.a;
                    if (arg$Atom$0$2 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$0$2 = arg$Atom$0$2.head;
                      arg$Cons$1$2 = arg$Atom$0$2.tail;
                      if (arg$Cons$0$2 === "t") {
                        if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                          if (element1$3 instanceof boyer21.Nill.class) {
                            inlinedVal = true;
                            break inlinedLbl
                          }
                        }
                      }
                    }
                  }
                }
              }
              tmp18 = globalThis.Object.freeze([
                element0$2,
                element1$2
              ]);
              e_x = tmp18;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let element1$4, element0$4, arg$Conss$0$2, element1$5, element0$5, tmp19;
                  if (runtime.Tuple.isArrayLike(e_x) && e_x.length === 2) {
                    element0$4 = runtime.Tuple.get(e_x, 0);
                    element1$4 = runtime.Tuple.get(e_x, 1);
                    if (element1$4 instanceof boyer21.Conss.class) {
                      arg$Conss$0$2 = element1$4.a;
                      if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                        let inlinedVal2, arg$Atom$0$3, arg$Atom$0$4;
                        element0$5 = runtime.Tuple.get(arg$Conss$0$2, 0);
                        element1$5 = runtime.Tuple.get(arg$Conss$0$2, 1);
                        if (element0$4 instanceof boyer21.Nill.class) {
                          if (element0$5 instanceof boyer21.Nill.class) {
                            inlinedVal2 = true;
                          } else {
                            inlinedVal2 = false;
                          }
                        } else if (element0$4 instanceof boyer21.Atom.class) {
                          arg$Atom$0$3 = element0$4.a;
                          if (element0$5 instanceof boyer21.Atom.class) {
                            arg$Atom$0$4 = element0$5.a;
                            inlinedVal2 = boyer21[listEq$accessorSymbol](arg$Atom$0$3, arg$Atom$0$4);
                          } else {
                            inlinedVal2 = false;
                          }
                        } else {
                          inlinedVal2 = false;
                        }
                        if (inlinedVal2 === true) {
                          inlinedVal1 = true;
                          break inlinedLbl1
                        }
                        tmp19 = globalThis.Object.freeze([
                          element0$4,
                          element1$5
                        ]);
                        e_x = tmp19;
                        continue loopLabel1;
                      }
                      inlinedVal1 = false;
                      break inlinedLbl1;
                    }
                    inlinedVal1 = false;
                    break inlinedLbl1;
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal = inlinedVal1;
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
        return inlinedVal
      } else if (element0$ instanceof boyer21.Conss.class) {
        arg$Conss$0$ = element0$.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
          tmp2 = globalThis.Object.freeze([
            element0$1,
            element1$1
          ]);
          tmp3 = boyer21.Conss(tmp2);
          tmp4 = globalThis.Object.freeze([
            tmp3,
            element1$
          ]);
          scrut = boyer21[truep$accessorSymbol](tmp4);
          if (scrut === true) {
            return true
          }
          tmp5 = globalThis.Object.freeze([
            element0$1,
            element1$1
          ]);
          tmp6 = boyer21.Conss(tmp5);
          tmp7 = globalThis.Object.freeze([
            tmp6,
            element2$
          ]);
          scrut1 = boyer21[falsep$accessorSymbol](tmp7);
          if (scrut1 === true) {
            return false
          }
          if (element0$1 instanceof boyer21.Atom.class) {
            arg$Atom$0$ = element0$1.a;
            if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = arg$Atom$0$.head;
              arg$Cons$1$ = arg$Atom$0$.tail;
              if (arg$Cons$0$ === "i") {
                if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$1 = arg$Cons$1$.head;
                  arg$Cons$1$1 = arg$Cons$1$.tail;
                  if (arg$Cons$0$1 === "f") {
                    if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
                      let inlinedVal, arg$Conss$0$1, element0$2;
                      if (element1$1 instanceof boyer21.Conss.class) {
                        arg$Conss$0$1 = element1$1.a;
                        if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                          element0$2 = runtime.Tuple.get(arg$Conss$0$1, 0);
                          runtime.Tuple.get(arg$Conss$0$1, 1);
                          inlinedVal = element0$2;
                        } else {
                          inlinedVal = boyer21.Nill;
                        }
                      } else {
                        inlinedVal = boyer21.Nill;
                      }
                      tmp8 = globalThis.Object.freeze([
                        inlinedVal,
                        element1$
                      ]);
                      scrut2 = boyer21[truep$accessorSymbol](tmp8);
                      if (scrut2 === true) {
                        let inlinedVal1, inlinedVal2, arg$Conss$0$2, element0$3, arg$Conss$0$3;
                        if (element1$1 instanceof boyer21.Conss.class) {
                          arg$Conss$0$3 = element1$1.a;
                          if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                            runtime.Tuple.get(arg$Conss$0$3, 0);
                            inlinedVal1 = runtime.Tuple.get(arg$Conss$0$3, 1);
                            if (inlinedVal1 instanceof boyer21.Conss.class) {
                              arg$Conss$0$2 = inlinedVal1.a;
                              if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                                element0$3 = runtime.Tuple.get(arg$Conss$0$2, 0);
                                runtime.Tuple.get(arg$Conss$0$2, 1);
                                inlinedVal2 = element0$3;
                              } else {
                                inlinedVal2 = boyer21.Nill;
                              }
                            } else {
                              inlinedVal2 = boyer21.Nill;
                            }
                          } else {
                            inlinedVal1 = boyer21.Nill;
                            inlinedVal2 = boyer21.Nill;
                          }
                        } else {
                          inlinedVal2 = boyer21.Nill;
                        }
                        tmp9 = globalThis.Object.freeze([
                          inlinedVal2,
                          element1$,
                          element2$
                        ]);
                        f_truelst_falselst = tmp9;
                        continue loopLabel
                      }
                      {
                        let inlinedVal1, arg$Conss$0$2, element0$3;
                        if (element1$1 instanceof boyer21.Conss.class) {
                          arg$Conss$0$2 = element1$1.a;
                          if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                            element0$3 = runtime.Tuple.get(arg$Conss$0$2, 0);
                            runtime.Tuple.get(arg$Conss$0$2, 1);
                            inlinedVal1 = element0$3;
                          } else {
                            inlinedVal1 = boyer21.Nill;
                          }
                        } else {
                          inlinedVal1 = boyer21.Nill;
                        }
                        tmp10 = globalThis.Object.freeze([
                          inlinedVal1,
                          element2$
                        ]);
                        scrut3 = boyer21[falsep$accessorSymbol](tmp10);
                        if (scrut3 === true) {
                          let inlinedVal2, inlinedVal3, inlinedVal4, arg$Conss$0$3, element0$4, arg$Conss$0$4, arg$Conss$0$5;
                          if (element1$1 instanceof boyer21.Conss.class) {
                            arg$Conss$0$5 = element1$1.a;
                            if (runtime.Tuple.isArrayLike(arg$Conss$0$5) && arg$Conss$0$5.length === 2) {
                              runtime.Tuple.get(arg$Conss$0$5, 0);
                              inlinedVal2 = runtime.Tuple.get(arg$Conss$0$5, 1);
                              if (inlinedVal2 instanceof boyer21.Conss.class) {
                                arg$Conss$0$4 = inlinedVal2.a;
                                if (runtime.Tuple.isArrayLike(arg$Conss$0$4) && arg$Conss$0$4.length === 2) {
                                  runtime.Tuple.get(arg$Conss$0$4, 0);
                                  inlinedVal3 = runtime.Tuple.get(arg$Conss$0$4, 1);
                                  if (inlinedVal3 instanceof boyer21.Conss.class) {
                                    arg$Conss$0$3 = inlinedVal3.a;
                                    if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                                      element0$4 = runtime.Tuple.get(arg$Conss$0$3, 0);
                                      runtime.Tuple.get(arg$Conss$0$3, 1);
                                      inlinedVal4 = element0$4;
                                    } else {
                                      inlinedVal4 = boyer21.Nill;
                                    }
                                  } else {
                                    inlinedVal4 = boyer21.Nill;
                                  }
                                } else {
                                  inlinedVal3 = boyer21.Nill;
                                  inlinedVal4 = boyer21.Nill;
                                }
                              } else {
                                inlinedVal4 = boyer21.Nill;
                              }
                            } else {
                              inlinedVal2 = boyer21.Nill;
                              inlinedVal4 = boyer21.Nill;
                            }
                          } else {
                            inlinedVal4 = boyer21.Nill;
                          }
                          tmp11 = globalThis.Object.freeze([
                            inlinedVal4,
                            element1$,
                            element2$
                          ]);
                          f_truelst_falselst = tmp11;
                          continue loopLabel
                        }
                        {
                          let inlinedVal2, arg$Conss$0$3, element0$4, inlinedVal3, inlinedVal4, arg$Conss$0$4, element0$5, arg$Conss$0$5;
                          if (element1$1 instanceof boyer21.Conss.class) {
                            arg$Conss$0$5 = element1$1.a;
                            if (runtime.Tuple.isArrayLike(arg$Conss$0$5) && arg$Conss$0$5.length === 2) {
                              runtime.Tuple.get(arg$Conss$0$5, 0);
                              inlinedVal3 = runtime.Tuple.get(arg$Conss$0$5, 1);
                              if (inlinedVal3 instanceof boyer21.Conss.class) {
                                arg$Conss$0$4 = inlinedVal3.a;
                                if (runtime.Tuple.isArrayLike(arg$Conss$0$4) && arg$Conss$0$4.length === 2) {
                                  element0$5 = runtime.Tuple.get(arg$Conss$0$4, 0);
                                  runtime.Tuple.get(arg$Conss$0$4, 1);
                                  inlinedVal4 = element0$5;
                                } else {
                                  inlinedVal4 = boyer21.Nill;
                                }
                              } else {
                                inlinedVal4 = boyer21.Nill;
                              }
                            } else {
                              inlinedVal3 = boyer21.Nill;
                              inlinedVal4 = boyer21.Nill;
                            }
                          } else {
                            inlinedVal4 = boyer21.Nill;
                          }
                          if (element1$1 instanceof boyer21.Conss.class) {
                            arg$Conss$0$3 = element1$1.a;
                            if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                              element0$4 = runtime.Tuple.get(arg$Conss$0$3, 0);
                              runtime.Tuple.get(arg$Conss$0$3, 1);
                              inlinedVal2 = element0$4;
                            } else {
                              inlinedVal2 = boyer21.Nill;
                            }
                          } else {
                            inlinedVal2 = boyer21.Nill;
                          }
                          tmp12 = globalThis.Object.freeze([
                            inlinedVal2,
                            element1$
                          ]);
                          tmp13 = boyer21.Conss(tmp12);
                          tmp14 = globalThis.Object.freeze([
                            inlinedVal4,
                            tmp13,
                            element2$
                          ]);
                          scrut4 = main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp(tmp14);
                          if (scrut4 === true) {
                            let inlinedVal5, arg$Conss$0$6, element0$6, inlinedVal6, inlinedVal7, inlinedVal8, arg$Conss$0$7, element0$7, arg$Conss$0$8, arg$Conss$0$9;
                            if (element1$1 instanceof boyer21.Conss.class) {
                              arg$Conss$0$9 = element1$1.a;
                              if (runtime.Tuple.isArrayLike(arg$Conss$0$9) && arg$Conss$0$9.length === 2) {
                                runtime.Tuple.get(arg$Conss$0$9, 0);
                                inlinedVal6 = runtime.Tuple.get(arg$Conss$0$9, 1);
                                if (inlinedVal6 instanceof boyer21.Conss.class) {
                                  arg$Conss$0$8 = inlinedVal6.a;
                                  if (runtime.Tuple.isArrayLike(arg$Conss$0$8) && arg$Conss$0$8.length === 2) {
                                    runtime.Tuple.get(arg$Conss$0$8, 0);
                                    inlinedVal7 = runtime.Tuple.get(arg$Conss$0$8, 1);
                                    if (inlinedVal7 instanceof boyer21.Conss.class) {
                                      arg$Conss$0$7 = inlinedVal7.a;
                                      if (runtime.Tuple.isArrayLike(arg$Conss$0$7) && arg$Conss$0$7.length === 2) {
                                        element0$7 = runtime.Tuple.get(arg$Conss$0$7, 0);
                                        runtime.Tuple.get(arg$Conss$0$7, 1);
                                        inlinedVal8 = element0$7;
                                      } else {
                                        inlinedVal8 = boyer21.Nill;
                                      }
                                    } else {
                                      inlinedVal8 = boyer21.Nill;
                                    }
                                  } else {
                                    inlinedVal7 = boyer21.Nill;
                                    inlinedVal8 = boyer21.Nill;
                                  }
                                } else {
                                  inlinedVal8 = boyer21.Nill;
                                }
                              } else {
                                inlinedVal6 = boyer21.Nill;
                                inlinedVal8 = boyer21.Nill;
                              }
                            } else {
                              inlinedVal8 = boyer21.Nill;
                            }
                            if (element1$1 instanceof boyer21.Conss.class) {
                              arg$Conss$0$6 = element1$1.a;
                              if (runtime.Tuple.isArrayLike(arg$Conss$0$6) && arg$Conss$0$6.length === 2) {
                                element0$6 = runtime.Tuple.get(arg$Conss$0$6, 0);
                                runtime.Tuple.get(arg$Conss$0$6, 1);
                                inlinedVal5 = element0$6;
                              } else {
                                inlinedVal5 = boyer21.Nill;
                              }
                            } else {
                              inlinedVal5 = boyer21.Nill;
                            }
                            tmp15 = globalThis.Object.freeze([
                              inlinedVal5,
                              element2$
                            ]);
                            tmp16 = boyer21.Conss(tmp15);
                            tmp17 = globalThis.Object.freeze([
                              inlinedVal8,
                              element1$,
                              tmp16
                            ]);
                            scrut5 = main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp(tmp17);
                            if (scrut5 === true) {
                              return true
                            }
                            return false;
                          }
                          return false;
                        }
                      }
                    }
                    return false;
                  }
                  return false;
                }
                return false;
              }
              return false;
            }
            return false;
          }
          return false;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst = function main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(id, param0, param1) {
  switch (id) {
    case 0:
      {
        let arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2;
        if (param1 instanceof boyer21.Nill.class) {
          return boyer21.Nill
        } else if (param1 instanceof boyer21.Conss.class) {
          arg$Conss$0$ = param1.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
            tmp = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(1, param0, element0$);
            tmp1 = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(0, param0, element1$);
            tmp2 = globalThis.Object.freeze([
              tmp,
              tmp1
            ]);
            return boyer21.Conss(tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    case 1:
      {
        let arg$Conss$0$, element1$, element0$, arg$Atom$0$, arg$Conss$0$1, tmp, tmp1, tmp2, tmp3;
        if (param1 instanceof boyer21.Nill.class) {
          return boyer21.Nill
        } else if (param1 instanceof boyer21.Atom.class) {
          let term_x_y, inlinedVal;
          arg$Atom$0$ = param1.a;
          tmp = boyer21.Atom(arg$Atom$0$);
          tmp1 = globalThis.Object.freeze([
            tmp,
            param0
          ]);
          term_x_y = tmp1;
          inlinedLbl: {
            loopLabel: while (true) {
              let element1$1, element0$1, arg$Conss$0$2, element1$2, element0$2, arg$Conss$0$3, element0$3, arg$Atom$0$1, tmp4, tmp5;
              if (runtime.Tuple.isArrayLike(term_x_y) && term_x_y.length === 2) {
                element0$1 = runtime.Tuple.get(term_x_y, 0);
                element1$1 = runtime.Tuple.get(term_x_y, 1);
                if (element1$1 instanceof boyer21.Conss.class) {
                  arg$Conss$0$2 = element1$1.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                    element0$2 = runtime.Tuple.get(arg$Conss$0$2, 0);
                    element1$2 = runtime.Tuple.get(arg$Conss$0$2, 1);
                    if (element0$2 instanceof boyer21.Conss.class) {
                      arg$Conss$0$3 = element0$2.a;
                      if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                        element0$3 = runtime.Tuple.get(arg$Conss$0$3, 0);
                        if (element0$3 instanceof boyer21.Atom.class) {
                          let inlinedVal1, arg$Atom$0$2, arg$Atom$0$3;
                          arg$Atom$0$1 = element0$3.a;
                          tmp4 = boyer21.Atom(arg$Atom$0$1);
                          if (element0$1 instanceof boyer21.Nill.class) {
                            if (tmp4 instanceof boyer21.Nill.class) {
                              inlinedVal1 = true;
                            } else {
                              inlinedVal1 = false;
                            }
                          } else if (element0$1 instanceof boyer21.Atom.class) {
                            arg$Atom$0$2 = element0$1.a;
                            if (tmp4 instanceof boyer21.Atom.class) {
                              arg$Atom$0$3 = tmp4.a;
                              inlinedVal1 = boyer21[listEq$accessorSymbol](arg$Atom$0$2, arg$Atom$0$3);
                            } else {
                              inlinedVal1 = false;
                            }
                          } else {
                            inlinedVal1 = false;
                          }
                          if (inlinedVal1 === true) {
                            inlinedVal = element0$2;
                            break inlinedLbl
                          }
                          tmp5 = globalThis.Object.freeze([
                            element0$1,
                            element1$2
                          ]);
                          term_x_y = tmp5;
                          continue loopLabel;
                        }
                        inlinedVal = boyer21.Nill;
                        break inlinedLbl;
                      }
                      inlinedVal = boyer21.Nill;
                      break inlinedLbl;
                    }
                    inlinedVal = boyer21.Nill;
                    break inlinedLbl;
                  }
                  inlinedVal = boyer21.Nill;
                  break inlinedLbl;
                }
                inlinedVal = boyer21.Nill;
                break inlinedLbl;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          if (inlinedVal instanceof boyer21.Conss.class) {
            arg$Conss$0$1 = inlinedVal.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
              return runtime.Tuple.get(arg$Conss$0$1, 1)
            }
            return boyer21.Atom(arg$Atom$0$);
          }
          return boyer21.Atom(arg$Atom$0$);
        } else if (param1 instanceof boyer21.Conss.class) {
          arg$Conss$0$ = param1.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
            tmp2 = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(0, param0, element1$);
            tmp3 = globalThis.Object.freeze([
              element0$,
              tmp2
            ]);
            return boyer21.Conss(tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
  }
};
main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite = function main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite(id, param0, param1, param2) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, element1$, element0$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param0
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            let u, inlinedVal, inlinedVal1, inlinedVal2, arg$Conss$0$, element0$1, arg$Conss$0$1;
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$0$ instanceof boyer21.Conss.class) {
              arg$Conss$0$1 = arg$Cons$0$.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                runtime.Tuple.get(arg$Conss$0$1, 0);
                inlinedVal1 = runtime.Tuple.get(arg$Conss$0$1, 1);
                if (inlinedVal1 instanceof boyer21.Conss.class) {
                  arg$Conss$0$ = inlinedVal1.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                    element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
                    runtime.Tuple.get(arg$Conss$0$, 1);
                    inlinedVal2 = element0$1;
                  } else {
                    inlinedVal2 = boyer21.Nill;
                  }
                } else {
                  inlinedVal2 = boyer21.Nill;
                }
              } else {
                inlinedVal1 = boyer21.Nill;
                inlinedVal2 = boyer21.Nill;
              }
            } else {
              inlinedVal2 = boyer21.Nill;
            }
            u = boyer21.Nill;
            inlinedVal = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_onewayunify_onewayunify1_onewayunify1lst_onewayunify1$onewayunify1lst_onewayunify1(1, param0, inlinedVal2, u);
            if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
              element0$ = runtime.Tuple.get(inlinedVal, 0);
              element1$ = runtime.Tuple.get(inlinedVal, 1);
              if (element0$ === true) {
                let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Conss$0$2, element0$2, arg$Conss$0$3, arg$Conss$0$4;
                if (arg$Cons$0$ instanceof boyer21.Conss.class) {
                  arg$Conss$0$4 = arg$Cons$0$.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$4) && arg$Conss$0$4.length === 2) {
                    runtime.Tuple.get(arg$Conss$0$4, 0);
                    inlinedVal4 = runtime.Tuple.get(arg$Conss$0$4, 1);
                    if (inlinedVal4 instanceof boyer21.Conss.class) {
                      arg$Conss$0$3 = inlinedVal4.a;
                      if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                        runtime.Tuple.get(arg$Conss$0$3, 0);
                        inlinedVal5 = runtime.Tuple.get(arg$Conss$0$3, 1);
                        if (inlinedVal5 instanceof boyer21.Conss.class) {
                          arg$Conss$0$2 = inlinedVal5.a;
                          if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                            element0$2 = runtime.Tuple.get(arg$Conss$0$2, 0);
                            runtime.Tuple.get(arg$Conss$0$2, 1);
                            inlinedVal6 = element0$2;
                          } else {
                            inlinedVal6 = boyer21.Nill;
                          }
                        } else {
                          inlinedVal6 = boyer21.Nill;
                        }
                      } else {
                        inlinedVal5 = boyer21.Nill;
                        inlinedVal6 = boyer21.Nill;
                      }
                    } else {
                      inlinedVal6 = boyer21.Nill;
                    }
                  } else {
                    inlinedVal4 = boyer21.Nill;
                    inlinedVal6 = boyer21.Nill;
                  }
                } else {
                  inlinedVal6 = boyer21.Nill;
                }
                inlinedVal3 = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(1, element1$, inlinedVal6);
                param0 = inlinedVal3;
                param1 = param2;
                id = 2;
                continue loopLabel
              }
              param1 = arg$Cons$1$;
              id = 0;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2;
          if (param0 instanceof boyer21.Nill.class) {
            return boyer21.Nill
          } else if (param0 instanceof boyer21.Conss.class) {
            arg$Conss$0$ = param0.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
              element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
              tmp = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite(2, element0$, param1, undefined);
              tmp1 = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite(1, element1$, param1, undefined);
              tmp2 = globalThis.Object.freeze([
                tmp,
                tmp1
              ]);
              return boyer21.Conss(tmp2)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let arg$Conss$0$, element1$, element0$, arg$Atom$0$, tmp, tmp1, tmp2, tmp3, tmp4;
          if (param0 instanceof boyer21.Nill.class) {
            return boyer21.Nill
          } else if (param0 instanceof boyer21.Atom.class) {
            arg$Atom$0$ = param0.a;
            return boyer21.Atom(arg$Atom$0$)
          } else if (param0 instanceof boyer21.Conss.class) {
            arg$Conss$0$ = param0.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
              let param1_tmp, inlinedVal;
              element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
              element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
              tmp = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite(1, element1$, param1, undefined);
              tmp1 = globalThis.Object.freeze([
                element0$,
                tmp
              ]);
              tmp2 = boyer21.Conss(tmp1);
              if (element0$ instanceof boyer21.Atom.class) {
                inlinedVal = element0$.a;
                tmp3 = globalThis.Object.freeze([
                  inlinedVal,
                  param1
                ]);
                tmp4 = boyer21[getLUT$accessorSymbol](tmp3);
                param1_tmp = param1;
                param0 = tmp2;
                param1 = tmp4;
                param2 = param1_tmp;
                id = 0;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_onewayunify_onewayunify1_onewayunify1lst_onewayunify1$onewayunify1lst_onewayunify1 = function main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_onewayunify_onewayunify1_onewayunify1lst_onewayunify1$onewayunify1lst_onewayunify1(id, param0, param1, param2) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, element1$, element0$;
          if (param0 instanceof boyer21.Nill.class) {
            return globalThis.Object.freeze([
              true,
              param2
            ])
          }
          {
            let inlinedVal, inlinedVal1, arg$Conss$0$, element0$1, arg$Conss$0$1, element0$2;
            if (param0 instanceof boyer21.Conss.class) {
              arg$Conss$0$1 = param0.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                element0$2 = runtime.Tuple.get(arg$Conss$0$1, 0);
                runtime.Tuple.get(arg$Conss$0$1, 1);
                inlinedVal = element0$2;
              } else {
                inlinedVal = boyer21.Nill;
              }
            } else {
              inlinedVal = boyer21.Nill;
            }
            if (param1 instanceof boyer21.Conss.class) {
              arg$Conss$0$ = param1.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
                runtime.Tuple.get(arg$Conss$0$, 1);
                inlinedVal1 = element0$1;
              } else {
                inlinedVal1 = boyer21.Nill;
              }
            } else {
              inlinedVal1 = boyer21.Nill;
            }
            scrut = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite_onewayunify_onewayunify1_onewayunify1lst_onewayunify1$onewayunify1lst_onewayunify1(1, inlinedVal, inlinedVal1, param2);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              if (element0$ === true) {
                let inlinedVal2, inlinedVal3, arg$Conss$0$2, arg$Conss$0$3;
                if (param0 instanceof boyer21.Conss.class) {
                  arg$Conss$0$3 = param0.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                    runtime.Tuple.get(arg$Conss$0$3, 0);
                    inlinedVal2 = runtime.Tuple.get(arg$Conss$0$3, 1);
                  } else {
                    inlinedVal2 = boyer21.Nill;
                  }
                } else {
                  inlinedVal2 = boyer21.Nill;
                }
                if (param1 instanceof boyer21.Conss.class) {
                  arg$Conss$0$2 = param1.a;
                  if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                    runtime.Tuple.get(arg$Conss$0$2, 0);
                    inlinedVal3 = runtime.Tuple.get(arg$Conss$0$2, 1);
                  } else {
                    inlinedVal3 = boyer21.Nill;
                  }
                } else {
                  inlinedVal3 = boyer21.Nill;
                }
                param0 = inlinedVal2;
                param1 = inlinedVal3;
                param2 = element1$;
                id = 0;
                continue loopLabel
              }
              return globalThis.Object.freeze([
                false,
                element1$
              ]);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      case 1:
        {
          let scrut, arg$Conss$0$, element1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
          if (param1 instanceof boyer21.Atom.class) {
            let term_x_y, inlinedVal;
            tmp = globalThis.Object.freeze([
              param1,
              param2
            ]);
            term_x_y = tmp;
            inlinedLbl: {
              loopLabel1: while (true) {
                let element1$1, element0$, arg$Conss$0$1, element1$2, element0$1, arg$Conss$0$2, element0$2, arg$Atom$0$, tmp6, tmp7;
                if (runtime.Tuple.isArrayLike(term_x_y) && term_x_y.length === 2) {
                  element0$ = runtime.Tuple.get(term_x_y, 0);
                  element1$1 = runtime.Tuple.get(term_x_y, 1);
                  if (element1$1 instanceof boyer21.Conss.class) {
                    arg$Conss$0$1 = element1$1.a;
                    if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                      element0$1 = runtime.Tuple.get(arg$Conss$0$1, 0);
                      element1$2 = runtime.Tuple.get(arg$Conss$0$1, 1);
                      if (element0$1 instanceof boyer21.Conss.class) {
                        arg$Conss$0$2 = element0$1.a;
                        if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                          element0$2 = runtime.Tuple.get(arg$Conss$0$2, 0);
                          if (element0$2 instanceof boyer21.Atom.class) {
                            let inlinedVal1, arg$Conss$0$3, arg$Atom$0$1, arg$Atom$0$2;
                            arg$Atom$0$ = element0$2.a;
                            tmp6 = boyer21.Atom(arg$Atom$0$);
                            if (element0$ instanceof boyer21.Nill.class) {
                              if (tmp6 instanceof boyer21.Nill.class) {
                                inlinedVal1 = true;
                              } else {
                                inlinedVal1 = false;
                              }
                            } else if (element0$ instanceof boyer21.Atom.class) {
                              arg$Atom$0$1 = element0$.a;
                              if (tmp6 instanceof boyer21.Atom.class) {
                                arg$Atom$0$2 = tmp6.a;
                                inlinedVal1 = boyer21[listEq$accessorSymbol](arg$Atom$0$1, arg$Atom$0$2);
                              } else {
                                inlinedVal1 = false;
                              }
                            } else if (element0$ instanceof boyer21.Conss.class) {
                              arg$Conss$0$3 = element0$.a;
                              if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                                runtime.Tuple.get(arg$Conss$0$3, 0);
                                runtime.Tuple.get(arg$Conss$0$3, 1);
                                inlinedVal1 = false;
                              } else {
                                inlinedVal1 = false;
                              }
                            } else {
                              inlinedVal1 = false;
                            }
                            if (inlinedVal1 === true) {
                              inlinedVal = element0$1;
                              break inlinedLbl
                            }
                            tmp7 = globalThis.Object.freeze([
                              element0$,
                              element1$2
                            ]);
                            term_x_y = tmp7;
                            continue loopLabel1;
                          }
                          inlinedVal = boyer21.Nill;
                          break inlinedLbl;
                        }
                        inlinedVal = boyer21.Nill;
                        break inlinedLbl;
                      }
                      inlinedVal = boyer21.Nill;
                      break inlinedLbl;
                    }
                    inlinedVal = boyer21.Nill;
                    break inlinedLbl;
                  }
                  inlinedVal = boyer21.Nill;
                  break inlinedLbl;
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            if (inlinedVal instanceof boyer21.Conss.class) {
              arg$Conss$0$ = inlinedVal.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
                tmp5 = boyer21[lispListEq$accessorSymbol](param0, element1$);
                return globalThis.Object.freeze([
                  tmp5,
                  param2
                ])
              }
            }
            tmp1 = globalThis.Object.freeze([
              param1,
              param0
            ]);
            tmp2 = boyer21.Conss(tmp1);
            tmp3 = globalThis.Object.freeze([
              tmp2,
              param2
            ]);
            tmp4 = boyer21.Conss(tmp3);
            return globalThis.Object.freeze([
              true,
              tmp4
            ])
          }
          if (param0 instanceof boyer21.Atom.class) {
            return globalThis.Object.freeze([
              false,
              param2
            ])
          }
          {
            let inlinedVal, inlinedVal1, arg$Conss$0$1, element0$, arg$Conss$0$2, element0$1;
            if (param0 instanceof boyer21.Conss.class) {
              arg$Conss$0$2 = param0.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                element0$1 = runtime.Tuple.get(arg$Conss$0$2, 0);
                runtime.Tuple.get(arg$Conss$0$2, 1);
                inlinedVal = element0$1;
              } else {
                inlinedVal = boyer21.Nill;
              }
            } else {
              inlinedVal = boyer21.Nill;
            }
            if (param1 instanceof boyer21.Conss.class) {
              arg$Conss$0$1 = param1.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                element0$ = runtime.Tuple.get(arg$Conss$0$1, 0);
                runtime.Tuple.get(arg$Conss$0$1, 1);
                inlinedVal1 = element0$;
              } else {
                inlinedVal1 = boyer21.Nill;
              }
            } else {
              inlinedVal1 = boyer21.Nill;
            }
            scrut = boyer21[lispListEq$accessorSymbol](inlinedVal, inlinedVal1);
            if (scrut === true) {
              let inlinedVal2, inlinedVal3, arg$Conss$0$3, arg$Conss$0$4;
              if (param0 instanceof boyer21.Conss.class) {
                arg$Conss$0$4 = param0.a;
                if (runtime.Tuple.isArrayLike(arg$Conss$0$4) && arg$Conss$0$4.length === 2) {
                  runtime.Tuple.get(arg$Conss$0$4, 0);
                  inlinedVal2 = runtime.Tuple.get(arg$Conss$0$4, 1);
                } else {
                  inlinedVal2 = boyer21.Nill;
                }
              } else {
                inlinedVal2 = boyer21.Nill;
              }
              if (param1 instanceof boyer21.Conss.class) {
                arg$Conss$0$3 = param1.a;
                if (runtime.Tuple.isArrayLike(arg$Conss$0$3) && arg$Conss$0$3.length === 2) {
                  runtime.Tuple.get(arg$Conss$0$3, 0);
                  inlinedVal3 = runtime.Tuple.get(arg$Conss$0$3, 1);
                } else {
                  inlinedVal3 = boyer21.Nill;
                }
              } else {
                inlinedVal3 = boyer21.Nill;
              }
              param0 = inlinedVal2;
              param1 = inlinedVal3;
              id = 0;
              continue loopLabel
            }
            return globalThis.Object.freeze([
              false,
              param2
            ]);
          }
        }
    }
  }
};
lambda2 = (undefined, function (x, y) {
  return x < y
});
lambda3 = (undefined, function (x, y) {
  return x > y
});
lambda = (undefined, function (x, y) {
  return x < y
});
lambda1 = (undefined, function (x, y) {
  return x > y
});
(class boyer2 {
  static {
    boyer21 = this
  }
  static get [listEq$accessorSymbol]() { return boyer2.#listEq; }
  static get [lispListEq$accessorSymbol]() { return boyer2.#lispListEq; }
  static get [truep$accessorSymbol]() { return boyer2.#truep; }
  static get [falsep$accessorSymbol]() { return boyer2.#falsep; }
  static get [getLUT$accessorSymbol]() { return boyer2.#getLUT; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, lspls, term, inlinedVal;
    (class Nill {
      static {
        new this
      }
      constructor() {
        boyer2.Nill = this;
        Object.defineProperty(this, "class", {
          value: Nill
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nill"];
    });
    boyer2.Atom = function Atom(a) {
      return globalThis.Object.freeze(new Atom.class(a));
    };
    (class Atom {
      static {
        boyer2.Atom.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Atom", ["a"]];
    });
    boyer2.Conss = function Conss(a) {
      return globalThis.Object.freeze(new Conss.class(a));
    };
    (class Conss {
      static {
        boyer2.Conss.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Conss", ["a"]];
    });
    (class Empty {
      static {
        new this
      }
      constructor() {
        boyer2.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
    boyer2.Node = function Node(x) {
      return globalThis.Object.freeze(new Node.class(x));
    };
    (class Node {
      static {
        boyer2.Node.class = this
      }
      constructor(x) {
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["x"]];
    });
    tmp = NofibPrelude.nofibStringToList("( implies ( and ( implies x y )( and ( implies y z )( and ( implies z u )( implies u w ) ) ) )( implies x w ) )");
    tmp1 = boyer2.#strToToken(tmp);
    tmp2 = boyer2.#mkLispList(tmp1);
    boyer2.statement = tmp2;
    tmp3 = NofibPrelude.nofibStringToList("(equal (compile form)(reverse (codegen (optimize form) (Nill) ) ) )");
    tmp4 = NofibPrelude.nofibStringToList("(equal (eqp x y)(equal (fix x)(fix y) ) )");
    tmp5 = NofibPrelude.nofibStringToList("(equal (greaterp x y)(lessp y x) )");
    tmp6 = NofibPrelude.nofibStringToList("(equal (lesseqp x y)(not (lessp y x) ) )");
    tmp7 = NofibPrelude.nofibStringToList("(equal (greatereqp x y)(not (lessp y x) ) )");
    tmp8 = NofibPrelude.nofibStringToList("(equal (boolean x)(or (equal x (t) )(equal x (f) ) )");
    tmp9 = NofibPrelude.nofibStringToList("(equal (iff x y)(and (implies x y)(implies y x) ) )");
    tmp10 = NofibPrelude.nofibStringToList("(equal (even1 x)(if (zerop x)(t)(odd (1- x) ) ) )");
    tmp11 = NofibPrelude.nofibStringToList("(equal (countps- l pred)(countps-loop l pred (zero) ) )");
    tmp12 = NofibPrelude.nofibStringToList("(equal (fact- i)(fact-loop i 1) )");
    tmp13 = NofibPrelude.nofibStringToList("(equal (reverse- x)(reverse-loop x (Nill) ) )");
    tmp14 = NofibPrelude.nofibStringToList("(equal (divides x y)(zerop (remainder y x) ) )");
    tmp15 = NofibPrelude.nofibStringToList("(equal (assume-true var alist)(Conss (Conss var (t) )alist) )");
    tmp16 = NofibPrelude.nofibStringToList("(equal (assume-false var alist)(Conss (Conss var (f) )alist) )");
    tmp17 = NofibPrelude.nofibStringToList("(equal (tautology-checker x)(tautologyp (normalize x)(Nill) ) )");
    tmp18 = NofibPrelude.nofibStringToList("(equal (falsify x)(falsify1 (normalize x)(Nill) ) )");
    tmp19 = NofibPrelude.nofibStringToList("(equal (prime x)(and (not (zerop x))(not (equal x (add1 (zero) ) ) )(prime1 x (1- x) ) ) )");
    tmp20 = NofibPrelude.nofibStringToList("(equal (and p q)(if p (if q (t) (f) ) (f) ) )");
    tmp21 = NofibPrelude.nofibStringToList("(equal (or p q)(if p (t) (if q (t) (f) ) ) )");
    tmp22 = NofibPrelude.nofibStringToList("(equal (not p)(if p (f) (t) ) )");
    tmp23 = NofibPrelude.nofibStringToList("(equal (implies p q)(if p (if q (t) (f) ) (t) ) )");
    tmp24 = NofibPrelude.nofibStringToList("(equal (fix x)(if (numberp x) x (zero) ) )");
    tmp25 = NofibPrelude.nofibStringToList("(equal (if (if a b c) d e)(if a (if b d e) (if c d e) ) )");
    tmp26 = NofibPrelude.nofibStringToList("(equal (zerop x)(or (equal x (zero) )(not (numberp x) ) ) )");
    tmp27 = NofibPrelude.nofibStringToList("(equal (plus (plus x y) z )(plus x (plus y z) ) )");
    tmp28 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (zero ) )(and (zerop a) (zerop b) ) )");
    tmp29 = NofibPrelude.nofibStringToList("(equal (difference x x)(zero) )");
    tmp30 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (plus a c) )(equal (fix b) (fix c) ) )");
    tmp31 = NofibPrelude.nofibStringToList("(equal (equal (zero) (difference x y) )(not (lessp y x) ) )");
    tmp32 = NofibPrelude.nofibStringToList("(equal (equal x (difference x y) )(and (numberp x)(or (equal x (zero) )(zerop y) ) ) )");
    tmp33 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (append x y) ) a)(plus (meaning (plus-tree x) a)(meaning (plus-tree y) a) ) )");
    tmp34 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (plus-fringe x) ) a)(fix (meaning x a) ) )");
    tmp35 = NofibPrelude.nofibStringToList("(equal (append (append x y) z)(append x (append y z) ) )");
    tmp36 = NofibPrelude.nofibStringToList("(equal (reverse (append a b) )(append (reverse b) (reverse a) ) )");
    tmp37 = NofibPrelude.nofibStringToList("(equal (times x (plus y z) )(plus (times x y)(times x z) ) )");
    tmp38 = NofibPrelude.nofibStringToList("(equal (times (times x y) z)(times x (times y z) ) )");
    tmp39 = NofibPrelude.nofibStringToList("(equal (equal (times x y) (zero) )(or (zerop x)(zerop y) ) )");
    tmp40 = NofibPrelude.nofibStringToList("(equal (exec (append x y)pds envrn)(exec y (exec x pds envrn)envrn) )");
    tmp41 = NofibPrelude.nofibStringToList("(equal (mc-flatten x y)(append (flatten x)y) )");
    tmp42 = NofibPrelude.nofibStringToList("(equal (member x (append a b) )(or (member x a)(member x b) ) )");
    tmp43 = NofibPrelude.nofibStringToList("(equal (member x (reverse y) )(member x y) )");
    tmp44 = NofibPrelude.nofibStringToList("(equal (length (reverse x) )(length x) )");
    tmp45 = NofibPrelude.nofibStringToList("(equal (member a (intersect b c) )(and (member a b)(member a c) ) )");
    tmp46 = NofibPrelude.nofibStringToList("(equal (nth (zero)i)(zero) )");
    tmp47 = NofibPrelude.nofibStringToList("(equal (exp i (plus j k) )(times (exp i j)(exp i k) ) )");
    tmp48 = NofibPrelude.nofibStringToList("(equal (exp i (times j k) )(exp (exp i j)k) )");
    tmp49 = NofibPrelude.nofibStringToList("(equal (reverse-loop x y)(append (reverse x)y) )");
    tmp50 = NofibPrelude.nofibStringToList("(equal (reverse-loop x (Nill) )(reverse x) )");
    tmp51 = NofibPrelude.nofibStringToList("(equal (count-list z (sort-lp x y) )(plus (count-list z x)(count-list z y) ) )");
    tmp52 = NofibPrelude.nofibStringToList("(equal (equal (append a b)(append a c) )(equal b c) )");
    tmp53 = NofibPrelude.nofibStringToList("(equal (plus (remainder x y)(times y (quotient x y) ) )(fix x) )");
    tmp54 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus1 l i base)base)(plus (power-eval l base)i) )");
    tmp55 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus x y i base)base)(plus i (plus (power-eval x base)(power-eval y base) ) ) )");
    tmp56 = NofibPrelude.nofibStringToList("(equal (remainder y 1)(zero) )");
    tmp57 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)y)(not (zerop y) ) )");
    tmp58 = NofibPrelude.nofibStringToList("(equal (remainder x x)(zero) )");
    tmp59 = NofibPrelude.nofibStringToList("(equal (lessp (quotient i j)i)(and (not (zerop i) )(or (zerop j)(not (equal j 1) ) ) ) )");
    tmp60 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)x)(and (not (zerop y) )(not (zerop x) )(not (lessp x y) ) ) )");
    tmp61 = NofibPrelude.nofibStringToList("(equal (power-eval (power-rep i base)base)(fix i) )");
    tmp62 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus (power-rep i base)(power-rep j base)(zero)base)base)(plus i j) )");
    tmp63 = NofibPrelude.nofibStringToList("(equal (gcd x y)(gcd y x) )");
    tmp64 = NofibPrelude.nofibStringToList("(equal (nth (append a b)i)(append (nth a i)(nth b (difference i (length a) ) ) ) )");
    tmp65 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)x)(fix y) )");
    tmp66 = NofibPrelude.nofibStringToList("(equal (difference (plus y x)x)(fix y) )");
    tmp67 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)(plus x z) )(difference y z) )");
    tmp68 = NofibPrelude.nofibStringToList("(equal (times x (difference c w) )(difference (times c x)(times w x) ) )");
    tmp69 = NofibPrelude.nofibStringToList("(equal (remainder (times x z)z)(zero) )");
    tmp70 = NofibPrelude.nofibStringToList("(equal (difference (plus b (plus a c) )a)(plus b c) )");
    tmp71 = NofibPrelude.nofibStringToList("(equal (difference (add1 (plus y z)z)(add1 y) )");
    tmp72 = NofibPrelude.nofibStringToList("(equal (lessp (plus x y)(plus x z ) )(lessp y z) )");
    tmp73 = NofibPrelude.nofibStringToList("(equal (lessp (times x z)(times y z) )(and (not (zerop z) )(lessp x y) ) )");
    tmp74 = NofibPrelude.nofibStringToList("(equal (lessp y (plus x y) )(not (zerop x) ) )");
    tmp75 = NofibPrelude.nofibStringToList("(equal (gcd (times x z)(times y z) )(times z (gcd x y) ) )");
    tmp76 = NofibPrelude.nofibStringToList("(equal (value (normalize x)a)(value x a) )");
    tmp77 = NofibPrelude.nofibStringToList("(equal (equal (flatten x)(Conss y (Nill) ) )(and (nlistp x)(equal x y) ) )");
    tmp78 = NofibPrelude.nofibStringToList("(equal (listp (gopher x) )(listp x) )");
    tmp79 = NofibPrelude.nofibStringToList("(equal (samefringe x y)(equal (flatten x)(flatten y) ) )");
    tmp80 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)(zero) )(and (or (zerop y)(equal y 1) )(equal x (zero) ) ) )");
    tmp81 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)1)(equal x 1) )");
    tmp82 = NofibPrelude.nofibStringToList("(equal (numberp (greatest-factor x y) )(not (and (or (zerop y)(equal y 1) )(not (numberp x) ) ) ) )");
    tmp83 = NofibPrelude.nofibStringToList("(equal (times-list (append x y) )(times (times-list x)(times-list y) ) )");
    tmp84 = NofibPrelude.nofibStringToList("(equal (prime-list (append x y) )(and (prime-list x)(prime-list y) ) )");
    tmp85 = NofibPrelude.nofibStringToList("(equal (equal z (times w z) )(and (numberp z)(or (equal z (zero) )(equal w 1) ) ) )");
    tmp86 = NofibPrelude.nofibStringToList("(equal (greatereqpr x y)(not (lessp x y) ) )");
    tmp87 = NofibPrelude.nofibStringToList("(equal (equal x (times x y) )(or (equal x (zero) )(and (numberp x)(equal y 1) ) ) )");
    tmp88 = NofibPrelude.nofibStringToList("(equal (remainder (times y x)y)(zero) )");
    tmp89 = NofibPrelude.nofibStringToList("(equal (equal (times a b)1)(and (not (equal a (zero) ) )(not (equal b (zero) ) )(numberp a)(numberp b)(equal (1- a)(zero) )(equal (1- b)(zero) ) ) )");
    tmp90 = NofibPrelude.nofibStringToList("(equal (lessp (length (delete x l) )(length l) )(member x l) )");
    tmp91 = NofibPrelude.nofibStringToList("(equal (sort2 (delete x l) )(delete x (sort2 l) ) )");
    tmp92 = NofibPrelude.nofibStringToList("(equal (dsort x)(sort2 x) )");
    tmp93 = NofibPrelude.nofibStringToList("(equal (length(Conss x1(Conss x2(Conss x3(Conss x4(Conss x5(Conss x6 x7) ) ) ) ) ) )(plus 6 (length x7) ) )");
    tmp94 = NofibPrelude.nofibStringToList("(equal (difference (add1 (add1 x) )2)(fix x) )");
    tmp95 = NofibPrelude.nofibStringToList("(equal (quotient (plus x (plus x y) )2)(plus x (quotient y 2) ) )");
    tmp96 = NofibPrelude.nofibStringToList("(equal (sigma (zero)i)(quotient (times i (add1 i) )2) )");
    tmp97 = NofibPrelude.nofibStringToList("(equal (plus x (add1 y) )(if (numberp y)(add1 (plus x y) )(add1 x) ) )");
    tmp98 = NofibPrelude.nofibStringToList("(equal (equal (difference x y)(difference z y) )(if (lessp x y)(not (lessp y z) )(if (lessp z y)(not (lessp y x) )(equal (fix x)(fix z) ) ) ) )");
    tmp99 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (delete x y) )a)(if (member x y)(difference (meaning (plus-tree y)a)(meaning x a) )(meaning (plus-tree y)a) ) )");
    tmp100 = NofibPrelude.nofibStringToList("(equal (times x (add1 y) )(if (numberp y)(plus x (times x y) )(fix x) ) )");
    tmp101 = NofibPrelude.nofibStringToList("(equal (nth (Nill)i)(if (zerop i)(Nill)(zero) ) )");
    tmp102 = NofibPrelude.nofibStringToList("(equal (last (append a b) )(if (listp b)(last b)(if (listp a)(Conss (car (last a) )b)b) ) )");
    tmp103 = NofibPrelude.nofibStringToList("(equal (equal (lessp x y)z)(if (lessp x y)(equal t z)(equal f z) ) )");
    tmp104 = NofibPrelude.nofibStringToList("(equal (assignment x (append a b) )(if (assignedp x a)(assignment x a)(assignment x b) ) )");
    tmp105 = NofibPrelude.nofibStringToList("(equal (car (gopher x) )(if (listp x)(car (flatten x) )(zero) ) )");
    tmp106 = NofibPrelude.nofibStringToList("(equal (flatten (cdr (gopher x) ) )(if (listp x)(cdr (flatten x) )(Conss (zero)(Nill) ) ) )");
    tmp107 = NofibPrelude.nofibStringToList("(equal (quotient (times y x)y)(if (zerop y)(zero)(fix x) ) )");
    tmp108 = NofibPrelude.nofibStringToList("(equal (get j (set i val mem) )(if (eqp j i)val(get j mem) ) )");
    tmp109 = NofibPrelude.Cons(tmp108, NofibPrelude.Nil);
    tmp110 = NofibPrelude.Cons(tmp107, tmp109);
    tmp111 = NofibPrelude.Cons(tmp106, tmp110);
    tmp112 = NofibPrelude.Cons(tmp105, tmp111);
    tmp113 = NofibPrelude.Cons(tmp104, tmp112);
    tmp114 = NofibPrelude.Cons(tmp103, tmp113);
    tmp115 = NofibPrelude.Cons(tmp102, tmp114);
    tmp116 = NofibPrelude.Cons(tmp101, tmp115);
    tmp117 = NofibPrelude.Cons(tmp100, tmp116);
    tmp118 = NofibPrelude.Cons(tmp99, tmp117);
    tmp119 = NofibPrelude.Cons(tmp98, tmp118);
    tmp120 = NofibPrelude.Cons(tmp97, tmp119);
    tmp121 = NofibPrelude.Cons(tmp96, tmp120);
    tmp122 = NofibPrelude.Cons(tmp95, tmp121);
    tmp123 = NofibPrelude.Cons(tmp94, tmp122);
    tmp124 = NofibPrelude.Cons(tmp93, tmp123);
    tmp125 = NofibPrelude.Cons(tmp92, tmp124);
    tmp126 = NofibPrelude.Cons(tmp91, tmp125);
    tmp127 = NofibPrelude.Cons(tmp90, tmp126);
    tmp128 = NofibPrelude.Cons(tmp89, tmp127);
    tmp129 = NofibPrelude.Cons(tmp88, tmp128);
    tmp130 = NofibPrelude.Cons(tmp87, tmp129);
    tmp131 = NofibPrelude.Cons(tmp86, tmp130);
    tmp132 = NofibPrelude.Cons(tmp85, tmp131);
    tmp133 = NofibPrelude.Cons(tmp84, tmp132);
    tmp134 = NofibPrelude.Cons(tmp83, tmp133);
    tmp135 = NofibPrelude.Cons(tmp82, tmp134);
    tmp136 = NofibPrelude.Cons(tmp81, tmp135);
    tmp137 = NofibPrelude.Cons(tmp80, tmp136);
    tmp138 = NofibPrelude.Cons(tmp79, tmp137);
    tmp139 = NofibPrelude.Cons(tmp78, tmp138);
    tmp140 = NofibPrelude.Cons(tmp77, tmp139);
    tmp141 = NofibPrelude.Cons(tmp76, tmp140);
    tmp142 = NofibPrelude.Cons(tmp75, tmp141);
    tmp143 = NofibPrelude.Cons(tmp74, tmp142);
    tmp144 = NofibPrelude.Cons(tmp73, tmp143);
    tmp145 = NofibPrelude.Cons(tmp72, tmp144);
    tmp146 = NofibPrelude.Cons(tmp71, tmp145);
    tmp147 = NofibPrelude.Cons(tmp70, tmp146);
    tmp148 = NofibPrelude.Cons(tmp69, tmp147);
    tmp149 = NofibPrelude.Cons(tmp68, tmp148);
    tmp150 = NofibPrelude.Cons(tmp67, tmp149);
    tmp151 = NofibPrelude.Cons(tmp66, tmp150);
    tmp152 = NofibPrelude.Cons(tmp65, tmp151);
    tmp153 = NofibPrelude.Cons(tmp64, tmp152);
    tmp154 = NofibPrelude.Cons(tmp63, tmp153);
    tmp155 = NofibPrelude.Cons(tmp62, tmp154);
    tmp156 = NofibPrelude.Cons(tmp61, tmp155);
    tmp157 = NofibPrelude.Cons(tmp60, tmp156);
    tmp158 = NofibPrelude.Cons(tmp59, tmp157);
    tmp159 = NofibPrelude.Cons(tmp58, tmp158);
    tmp160 = NofibPrelude.Cons(tmp57, tmp159);
    tmp161 = NofibPrelude.Cons(tmp56, tmp160);
    tmp162 = NofibPrelude.Cons(tmp55, tmp161);
    tmp163 = NofibPrelude.Cons(tmp54, tmp162);
    tmp164 = NofibPrelude.Cons(tmp53, tmp163);
    tmp165 = NofibPrelude.Cons(tmp52, tmp164);
    tmp166 = NofibPrelude.Cons(tmp51, tmp165);
    tmp167 = NofibPrelude.Cons(tmp50, tmp166);
    tmp168 = NofibPrelude.Cons(tmp49, tmp167);
    tmp169 = NofibPrelude.Cons(tmp48, tmp168);
    tmp170 = NofibPrelude.Cons(tmp47, tmp169);
    tmp171 = NofibPrelude.Cons(tmp46, tmp170);
    tmp172 = NofibPrelude.Cons(tmp45, tmp171);
    tmp173 = NofibPrelude.Cons(tmp44, tmp172);
    tmp174 = NofibPrelude.Cons(tmp43, tmp173);
    tmp175 = NofibPrelude.Cons(tmp42, tmp174);
    tmp176 = NofibPrelude.Cons(tmp41, tmp175);
    tmp177 = NofibPrelude.Cons(tmp40, tmp176);
    tmp178 = NofibPrelude.Cons(tmp39, tmp177);
    tmp179 = NofibPrelude.Cons(tmp38, tmp178);
    tmp180 = NofibPrelude.Cons(tmp37, tmp179);
    tmp181 = NofibPrelude.Cons(tmp36, tmp180);
    tmp182 = NofibPrelude.Cons(tmp35, tmp181);
    tmp183 = NofibPrelude.Cons(tmp34, tmp182);
    tmp184 = NofibPrelude.Cons(tmp33, tmp183);
    tmp185 = NofibPrelude.Cons(tmp32, tmp184);
    tmp186 = NofibPrelude.Cons(tmp31, tmp185);
    tmp187 = NofibPrelude.Cons(tmp30, tmp186);
    tmp188 = NofibPrelude.Cons(tmp29, tmp187);
    tmp189 = NofibPrelude.Cons(tmp28, tmp188);
    tmp190 = NofibPrelude.Cons(tmp27, tmp189);
    tmp191 = NofibPrelude.Cons(tmp26, tmp190);
    tmp192 = NofibPrelude.Cons(tmp25, tmp191);
    tmp193 = NofibPrelude.Cons(tmp24, tmp192);
    tmp194 = NofibPrelude.Cons(tmp23, tmp193);
    tmp195 = NofibPrelude.Cons(tmp22, tmp194);
    tmp196 = NofibPrelude.Cons(tmp21, tmp195);
    tmp197 = NofibPrelude.Cons(tmp20, tmp196);
    tmp198 = NofibPrelude.Cons(tmp19, tmp197);
    tmp199 = NofibPrelude.Cons(tmp18, tmp198);
    tmp200 = NofibPrelude.Cons(tmp17, tmp199);
    tmp201 = NofibPrelude.Cons(tmp16, tmp200);
    tmp202 = NofibPrelude.Cons(tmp15, tmp201);
    tmp203 = NofibPrelude.Cons(tmp14, tmp202);
    tmp204 = NofibPrelude.Cons(tmp13, tmp203);
    tmp205 = NofibPrelude.Cons(tmp12, tmp204);
    tmp206 = NofibPrelude.Cons(tmp11, tmp205);
    tmp207 = NofibPrelude.Cons(tmp10, tmp206);
    tmp208 = NofibPrelude.Cons(tmp9, tmp207);
    tmp209 = NofibPrelude.Cons(tmp8, tmp208);
    tmp210 = NofibPrelude.Cons(tmp7, tmp209);
    tmp211 = NofibPrelude.Cons(tmp6, tmp210);
    tmp212 = NofibPrelude.Cons(tmp5, tmp211);
    tmp213 = NofibPrelude.Cons(tmp4, tmp212);
    tmp214 = NofibPrelude.Cons(tmp3, tmp213);
    boyer2.rules = tmp214;
    tmp215 = boyer2.#makelemmas(boyer2.rules);
    lspls = tmp215;
    term = boyer2.Empty;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$;
        if (lspls instanceof NofibPrelude.Nil.class) {
          inlinedVal = term;
          break inlinedLbl
        } else if (lspls instanceof NofibPrelude.Cons.class) {
          let inlinedVal1, scrut, scrut1, arg$Conss$0$, element1$, element0$, tmp216, tmp217, tmp218, tmp219;
          arg$Cons$0$ = lspls.head;
          arg$Cons$1$ = lspls.tail;
          if (arg$Cons$0$ instanceof boyer21.Nill.class) {
            inlinedVal1 = term;
          } else if (arg$Cons$0$ instanceof boyer21.Conss.class) {
            arg$Conss$0$ = arg$Cons$0$.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
              let inlinedVal2, inlinedVal3, arg$Conss$0$1;
              element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
              element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
              if (element1$ instanceof boyer21.Conss.class) {
                arg$Conss$0$1 = element1$.a;
                if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                  inlinedVal2 = runtime.Tuple.get(arg$Conss$0$1, 0);
                } else {
                  inlinedVal2 = boyer21.Nill;
                }
              } else {
                inlinedVal2 = boyer21.Nill;
              }
              if (element0$ instanceof boyer21.Atom.class) {
                inlinedVal3 = element0$.a;
                tmp216 = NofibPrelude.nofibStringToList("equal");
                scrut = boyer21.#listEq(inlinedVal3, tmp216);
                if (scrut === true) {
                  let inlinedVal4;
                  if (inlinedVal2 instanceof boyer21.Atom.class) {
                    inlinedVal4 = true;
                  } else {
                    inlinedVal4 = false;
                  }
                  scrut1 = ! inlinedVal4;
                  if (scrut1 === true) {
                    let inlinedVal5, inlinedVal6, arg$Conss$0$2;
                    if (inlinedVal2 instanceof boyer21.Conss.class) {
                      arg$Conss$0$2 = inlinedVal2.a;
                      if (runtime.Tuple.isArrayLike(arg$Conss$0$2) && arg$Conss$0$2.length === 2) {
                        inlinedVal5 = runtime.Tuple.get(arg$Conss$0$2, 0);
                        if (inlinedVal5 instanceof boyer21.Atom.class) {
                          inlinedVal6 = inlinedVal5.a;
                          tmp217 = globalThis.Object.freeze([
                            element0$,
                            element1$
                          ]);
                          tmp218 = boyer21.Conss(tmp217);
                          tmp219 = globalThis.Object.freeze([
                            inlinedVal6,
                            tmp218,
                            term
                          ]);
                          inlinedVal1 = boyer21.#addtoLUT(tmp219);
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          lspls = arg$Cons$1$;
          term = inlinedVal1;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    boyer2.lemmas = inlinedVal;
  }
  static #ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut1 === true) {
            return false
          }
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listEq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = arg$Cons$0$ == arg$Cons$0$1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #lispListEq(x, y) {
    loopLabel: while (true) {
      let scrut, arg$Conss$0$, element1$, element0$, arg$Conss$0$1, element1$1, element0$1, arg$Atom$0$, arg$Atom$0$1;
      if (x instanceof boyer2.Nill.class) {
        if (y instanceof boyer2.Nill.class) {
          return true
        }
        return false;
      } else if (x instanceof boyer2.Atom.class) {
        arg$Atom$0$ = x.a;
        if (y instanceof boyer2.Atom.class) {
          arg$Atom$0$1 = y.a;
          return boyer2.#listEq(arg$Atom$0$, arg$Atom$0$1)
        }
        return false;
      } else if (x instanceof boyer2.Conss.class) {
        arg$Conss$0$ = x.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
          if (y instanceof boyer2.Conss.class) {
            arg$Conss$0$1 = y.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
              element0$1 = runtime.Tuple.get(arg$Conss$0$1, 0);
              element1$1 = runtime.Tuple.get(arg$Conss$0$1, 1);
              scrut = boyer2.#lispListEq(element0$, element0$1);
              if (scrut === true) {
                x = element1$;
                y = element1$1;
                continue loopLabel
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #lispmember(e_x) {
    loopLabel: while (true) {
      let scrut, element1$, element0$, arg$Conss$0$, element1$1, element0$1, tmp;
      if (runtime.Tuple.isArrayLike(e_x) && e_x.length === 2) {
        element0$ = runtime.Tuple.get(e_x, 0);
        element1$ = runtime.Tuple.get(e_x, 1);
        if (element1$ instanceof boyer2.Conss.class) {
          arg$Conss$0$ = element1$.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
            scrut = boyer2.#lispListEq(element0$, element0$1);
            if (scrut === true) {
              return true
            }
            tmp = globalThis.Object.freeze([
              element0$,
              element1$1
            ]);
            e_x = tmp;
            continue loopLabel;
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #truep(term_l) {
    let element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      element0$ = runtime.Tuple.get(term_l, 0);
      element1$ = runtime.Tuple.get(term_l, 1);
      if (element0$ instanceof boyer2.Nill.class) {
        return false
      }
      if (element0$ instanceof boyer2.Conss.class) {
        arg$Conss$0$ = element0$.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
          if (element0$1 instanceof boyer2.Atom.class) {
            arg$Atom$0$ = element0$1.a;
            if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = arg$Atom$0$.head;
              arg$Cons$1$ = arg$Atom$0$.tail;
              if (arg$Cons$0$ === "t") {
                if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                  if (element1$1 instanceof boyer2.Nill.class) {
                    return true
                  }
                }
              }
            }
          }
        }
      }
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      return boyer2.#lispmember(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #falsep(term_l) {
    let element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      element0$ = runtime.Tuple.get(term_l, 0);
      element1$ = runtime.Tuple.get(term_l, 1);
      if (element0$ instanceof boyer2.Nill.class) {
        return false
      }
      if (element0$ instanceof boyer2.Conss.class) {
        arg$Conss$0$ = element0$.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
          if (element0$1 instanceof boyer2.Atom.class) {
            arg$Atom$0$ = element0$1.a;
            if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = arg$Atom$0$.head;
              arg$Cons$1$ = arg$Atom$0$.tail;
              if (arg$Cons$0$ === "f") {
                if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                  if (element1$1 instanceof boyer2.Nill.class) {
                    return true
                  }
                }
              }
            }
          }
        }
      }
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      return boyer2.#lispmember(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sublist(t) {
    let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (t instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        boyer2.Nill
      ])
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        switch (arg$Cons$0$1) {
          case "(":
            if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
              scrut1 = boyer2.#sublist(arg$Cons$1$);
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                element0$1 = runtime.Tuple.get(scrut1, 0);
                element1$1 = runtime.Tuple.get(scrut1, 1);
                scrut = boyer2.#sublist(element0$1);
                if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                  element0$2 = runtime.Tuple.get(scrut, 0);
                  element1$2 = runtime.Tuple.get(scrut, 1);
                  tmp3 = globalThis.Object.freeze([
                    element1$1,
                    element1$2
                  ]);
                  tmp4 = boyer2.Conss(tmp3);
                  return globalThis.Object.freeze([
                    element0$2,
                    tmp4
                  ])
                }
              }
            }
            scrut2 = boyer2.#sublist(arg$Cons$1$);
            if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
              element0$ = runtime.Tuple.get(scrut2, 0);
              element1$ = runtime.Tuple.get(scrut2, 1);
              tmp = boyer2.Atom(arg$Cons$0$);
              tmp1 = globalThis.Object.freeze([
                tmp,
                element1$
              ]);
              tmp2 = boyer2.Conss(tmp1);
              return globalThis.Object.freeze([
                element0$,
                tmp2
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          case ")":
            if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
              return globalThis.Object.freeze([
                arg$Cons$1$,
                boyer2.Nill
              ])
            }
            break;
        }
        scrut2 = boyer2.#sublist(arg$Cons$1$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$ = runtime.Tuple.get(scrut2, 0);
          element1$ = runtime.Tuple.get(scrut2, 1);
          tmp5 = boyer2.Atom(arg$Cons$0$);
          tmp6 = globalThis.Object.freeze([
            tmp5,
            element1$
          ]);
          tmp7 = boyer2.Conss(tmp6);
          return globalThis.Object.freeze([
            element0$,
            tmp7
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      scrut2 = boyer2.#sublist(arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$ = runtime.Tuple.get(scrut2, 0);
        element1$ = runtime.Tuple.get(scrut2, 1);
        tmp8 = boyer2.Atom(arg$Cons$0$);
        tmp9 = globalThis.Object.freeze([
          tmp8,
          element1$
        ]);
        tmp10 = boyer2.Conss(tmp9);
        return globalThis.Object.freeze([
          element0$,
          tmp10
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mkLispList(ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        if (arg$Cons$0$1 === "(") {
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            scrut = boyer2.#sublist(arg$Cons$1$);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              if (element0$ instanceof NofibPrelude.Nil.class) {
                return element1$
              }
              return boyer2.Nill;
            }
            return boyer2.Nill;
          }
          return boyer2.Nill;
        }
        return boyer2.Nill;
      }
      return boyer2.Nill;
    }
    return boyer2.Nill;
  }
  static #restOfToken(s) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (s instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      tmp = arg$Cons$0$ === "(";
      if (tmp === false) {
        tmp1 = arg$Cons$0$ === ")";
        if (tmp1 === false) {
          tmp2 = arg$Cons$0$ === " ";
          if (tmp2 === true) {
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            return globalThis.Object.freeze([
              NofibPrelude.Nil,
              tmp3
            ])
          }
          scrut = boyer2.#restOfToken(arg$Cons$1$);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, element0$);
            return globalThis.Object.freeze([
              tmp4,
              element1$
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp3
        ]);
      }
      tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        tmp3
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getToken(s) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
      if (s instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      } else if (s instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = s.head;
        arg$Cons$1$ = s.tail;
        scrut = arg$Cons$0$ === " ";
        if (scrut === true) {
          s = arg$Cons$1$;
          continue loopLabel
        }
        tmp = arg$Cons$0$ === "(";
        if (tmp === false) {
          tmp1 = arg$Cons$0$ === ")";
          if (tmp1 === true) {
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
            return globalThis.Object.freeze([
              tmp2,
              arg$Cons$1$
            ])
          }
          scrut1 = boyer2.#restOfToken(arg$Cons$1$);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$ = runtime.Tuple.get(scrut1, 0);
            element1$ = runtime.Tuple.get(scrut1, 1);
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, element0$);
            return globalThis.Object.freeze([
              tmp3,
              element1$
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp2 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
        return globalThis.Object.freeze([
          tmp2,
          arg$Cons$1$
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #strToToken(s) {
    let scrut, element1$, element0$, tmp;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = boyer2.#getToken(s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = boyer2.#strToToken(element1$);
      return NofibPrelude.Cons(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addtoLUT(k_l_lut) {
    let scrut, scrut1, element2$, element1$, element0$, arg$Node$0$, element2$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
    if (runtime.Tuple.isArrayLike(k_l_lut) && k_l_lut.length === 3) {
      element0$ = runtime.Tuple.get(k_l_lut, 0);
      element1$ = runtime.Tuple.get(k_l_lut, 1);
      element2$ = runtime.Tuple.get(k_l_lut, 2);
      if (element2$ instanceof boyer2.Empty.class) {
        tmp = NofibPrelude.Cons(element1$, NofibPrelude.Nil);
        tmp1 = globalThis.Object.freeze([
          element0$,
          tmp
        ]);
        tmp2 = globalThis.Object.freeze([
          boyer2.Empty,
          tmp1,
          boyer2.Empty
        ]);
        return boyer2.Node(tmp2)
      } else if (element2$ instanceof boyer2.Node.class) {
        arg$Node$0$ = element2$.x;
        if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 3) {
          element0$1 = runtime.Tuple.get(arg$Node$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Node$0$, 1);
          element2$1 = runtime.Tuple.get(arg$Node$0$, 2);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
            element0$2 = runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            scrut = boyer2.#listEq(element0$, element0$2);
            if (scrut === true) {
              tmp3 = NofibPrelude.Cons(element1$, element1$2);
              tmp4 = globalThis.Object.freeze([
                element0$2,
                tmp3
              ]);
              tmp5 = globalThis.Object.freeze([
                element0$1,
                tmp4,
                element2$1
              ]);
              return boyer2.Node(tmp5)
            }
            scrut1 = boyer2.#ltList(element0$, element0$2, lambda, lambda1);
            if (scrut1 === true) {
              tmp6 = globalThis.Object.freeze([
                element0$,
                element1$,
                element0$1
              ]);
              tmp7 = boyer2.#addtoLUT(tmp6);
              tmp8 = globalThis.Object.freeze([
                element0$2,
                element1$2
              ]);
              tmp9 = globalThis.Object.freeze([
                tmp7,
                tmp8,
                element2$1
              ]);
              return boyer2.Node(tmp9)
            }
            tmp10 = globalThis.Object.freeze([
              element0$2,
              element1$2
            ]);
            tmp11 = globalThis.Object.freeze([
              element0$,
              element1$,
              element2$1
            ]);
            tmp12 = boyer2.#addtoLUT(tmp11);
            tmp13 = globalThis.Object.freeze([
              element0$1,
              tmp10,
              tmp12
            ]);
            return boyer2.Node(tmp13);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getLUT(t_lut) {
    loopLabel: while (true) {
      let scrut, scrut1, element1$, element0$, arg$Node$0$, element2$, element1$1, element0$1, element1$2, element0$2, tmp, tmp1;
      if (runtime.Tuple.isArrayLike(t_lut) && t_lut.length === 2) {
        element0$ = runtime.Tuple.get(t_lut, 0);
        element1$ = runtime.Tuple.get(t_lut, 1);
        if (element1$ instanceof boyer2.Empty.class) {
          return NofibPrelude.Nil
        } else if (element1$ instanceof boyer2.Node.class) {
          arg$Node$0$ = element1$.x;
          if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 3) {
            element0$1 = runtime.Tuple.get(arg$Node$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Node$0$, 1);
            element2$ = runtime.Tuple.get(arg$Node$0$, 2);
            if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
              element0$2 = runtime.Tuple.get(element1$1, 0);
              element1$2 = runtime.Tuple.get(element1$1, 1);
              scrut = boyer2.#listEq(element0$, element0$2);
              if (scrut === true) {
                return element1$2
              }
              scrut1 = boyer2.#ltList(element0$, element0$2, lambda2, lambda3);
              if (scrut1 === true) {
                tmp = globalThis.Object.freeze([
                  element0$,
                  element0$1
                ]);
                t_lut = tmp;
                continue loopLabel
              }
              tmp1 = globalThis.Object.freeze([
                element0$,
                element2$
              ]);
              t_lut = tmp1;
              continue loopLabel;
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
  static #makelemmas(rules) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (rules instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (rules instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = rules.head;
      arg$Cons$1$ = rules.tail;
      tmp = boyer2.#strToToken(arg$Cons$0$);
      tmp1 = boyer2.#mkLispList(tmp);
      tmp2 = boyer2.#makelemmas(arg$Cons$1$);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #subterm(i) {
    let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
    inlinedVal = i + "";
    inlinedVal1 = "c" + inlinedVal;
    inlinedVal2 = inlinedVal1 + " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )";
    inlinedVal3 = " ( zero ) ) ) )( y f ( times ( times a b )( plus " + inlinedVal2;
    inlinedVal4 = inlinedVal1 + inlinedVal3;
    inlinedVal5 = "( ( x f ( plus ( plus a b )( plus " + inlinedVal4;
    tmp = NofibPrelude.nofibStringToList(inlinedVal5);
    tmp1 = boyer2.#strToToken(tmp);
    return boyer2.#mkLispList(tmp1)
  }
  static #report(b) {
    if (b === true) {
      return "The term is a tautology"
    }
    return "The term is not a tautology";
  }
  static main() {
    let inlinedVal, tmp, x, inlinedVal1, tmp1, term, inlinedVal2;
    tmp = boyer21.#subterm(3);
    x = boyer21.statement;
    inlinedVal1 = main_testBoyer2_nofib_testresult_teststatement_applysubst_applysubstlst_applysubst$applysubstlst_applysubst(1, tmp, x);
    term = boyer21.lemmas;
    inlinedVal2 = main_testBoyer2_nofib_testresult_tautp_rewrite_rewritewithlemmas_rewriteargs_rewrite$rewritewithlemmas_rewriteargs_rewrite(2, inlinedVal1, term, undefined);
    tmp1 = globalThis.Object.freeze([
      inlinedVal2,
      boyer21.Nill,
      boyer21.Nill
    ]);
    inlinedVal = main_testBoyer2_nofib_testresult_tautp_tautologyp$tautologyp(tmp1);
    return boyer21.#report(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "boyer2"];
});
export default boyer21;
