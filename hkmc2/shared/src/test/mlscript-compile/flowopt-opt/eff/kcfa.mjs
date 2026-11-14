const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const listPairFoldl$accessorSymbol = globalThis.Symbol("listPairFoldl");
const labelSame$accessorSymbol = globalThis.Symbol("labelSame");
const varMapInsert$accessorSymbol = globalThis.Symbol("varMapInsert");
const varMapFind$accessorSymbol = globalThis.Symbol("varMapFind");
const varMapNext$accessorSymbol = globalThis.Symbol("varMapNext");
const varMapLeft$accessorSymbol = globalThis.Symbol("varMapLeft");
const compareLambda$accessorSymbol = globalThis.Symbol("compareLambda");
const sameCall$accessorSymbol = globalThis.Symbol("sameCall");
const bindCompare$accessorSymbol = globalThis.Symbol("bindCompare");
const setNext$accessorSymbol = globalThis.Symbol("setNext");
const setLeft$accessorSymbol = globalThis.Symbol("setLeft");
const storeMapInsertWith$accessorSymbol = globalThis.Symbol("storeMapInsertWith");
const storeMapFind$accessorSymbol = globalThis.Symbol("storeMapFind");
const storeMapNext$accessorSymbol = globalThis.Symbol("storeMapNext");
const storeMapLeft$accessorSymbol = globalThis.Symbol("storeMapLeft");
const alloc$accessorSymbol = globalThis.Symbol("alloc");
const listMap$tailrec$accessorSymbol = globalThis.Symbol("listMap$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
const listPairAllEq$tailrec$accessorSymbol = globalThis.Symbol("listPairAllEq$tailrec");
let ins, incr, foldf, ins1, foldf1, incr1, kcfa1, lambda, lambda1, lambda$, lambda$1, lambda$2, main_doit_summarize_lambda$_lambda_setUnion$setUnion, main_doit_summarize_lambda$_lambda$lambda, main_doit_summarize_lambda$$lambda$, main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare, main_doit_explore_member_lambda$_stateSame$stateSame, main_doit_explore_member_lambda$$lambda$, main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion, main_doit_explore_absNext_apply$_apply_lambda$$lambda$, main_doit_explore_absNext_apply$_apply$apply, main_doit_explore_absNext_apply$$apply$, main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$, main_doit_monovariantStore_lambda$_lambda$lambda, main_doit_monovariantStore_lambda$$lambda$, doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, lambda_lambda$_monoStoreUpdate_insertExp$insertExp, lambda_lambda$_monoStoreUpdate$monoStoreUpdate, lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, doit_summarize_lambda$_lambda_setUnion_ins_incr$incr, doit_summarize_lambda$_lambda_setUnion_incr$incr, doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1, doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2, doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1, doit_summarize_lambda$_lambda_union$_union_incr$incr, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2, doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr, doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr, doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1, doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2, doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3, main_doit_explore_absNext_atomEval_eval$_eval$eval, main_doit_explore_absNext_atomEval_eval$$eval$, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr, main_doit_summarize_lambda$_lambda_union$_union_incr$incr, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns, main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr, main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1, main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2, main_doit_summarize_lambda$_lambda_setUnion_incr$incr, main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3, main_lambda$_lambda$lambda, main_lambda$$lambda$;
main_doit_summarize_lambda$_lambda_setUnion$setUnion = function main_doit_summarize_lambda$_lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let kcfa2, t1, t2, n, result, inlinedVal, inlinedVal1, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal2 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal1;
      t2 = inlinedVal2;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$, arg$SetT$2$, element1$2, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa2.SetE.class) {
                  inlinedVal = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                {
                  let kcfa3, p, n1, result1, inlinedVal3;
                  kcfa3 = kcfa2;
                  p = p2;
                  n1 = n;
                  result1 = result;
                  inlinedLbl1: {
                    loopLabel1: while (true) {
                      let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$3 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa3.SetE.class) {
                          inlinedVal3 = globalThis.Object.freeze([
                            n1,
                            result1
                          ]);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa3.SetT.class) {
                          let inlinedVal4;
                          arg$SetT$2$2 = element0$2.item;
                          tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                          tmp4 = n1 + 1;
                          inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                          p = tmp3;
                          n1 = tmp4;
                          result1 = inlinedVal4;
                          continue loopLabel1
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                  }
                  inlinedVal = inlinedVal3;
                  break inlinedLbl;
                }
              }
              {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p2;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$3 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = globalThis.Object.freeze([
                          n1,
                          result1
                        ]);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                        tmp4 = n1 + 1;
                        inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                        p = tmp3;
                        n1 = tmp4;
                        result1 = inlinedVal4;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                inlinedVal = inlinedVal3;
                break inlinedLbl;
              }
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p1;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$3 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = globalThis.Object.freeze([
                          n1,
                          result1
                        ]);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                        tmp4 = n1 + 1;
                        inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                        p = tmp3;
                        n1 = tmp4;
                        result1 = inlinedVal4;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                inlinedVal = inlinedVal3;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      let element0$2, element0$3;
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
                        element0$2 = runtime.Tuple.get(arg$Clos$0$, 0);
                        if (runtime.Tuple.isArrayLike(arg$Clos$0$1) && arg$Clos$0$1.length === 3) {
                          let inlinedVal4, scrut, scrut1;
                          element0$3 = runtime.Tuple.get(arg$Clos$0$1, 0);
                          scrut = element0$2 < element0$3;
                          if (scrut === true) {
                            inlinedVal4 = kcfa1.LESS;
                            inlinedVal3 = inlinedVal4;
                          } else {
                            scrut1 = element0$3 < element0$2;
                            if (scrut1 === true) {
                              inlinedVal4 = kcfa1.GREATER;
                              inlinedVal3 = inlinedVal4;
                            } else {
                              let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                              cmpRng = kcfa1[bindCompare$accessorSymbol];
                              kcfa3 = kcfa1;
                              if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                                arg$VmMAP$1$ = arg$Clos$1$.tree;
                                if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                                  let inlinedVal5, inlinedVal6, kcfa4, cmpRng1, t11, t21, inlinedVal7;
                                  arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                                  inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                                  inlinedVal6 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                                  kcfa4 = kcfa1;
                                  cmpRng1 = cmpRng;
                                  t11 = inlinedVal5;
                                  t21 = inlinedVal6;
                                  inlinedLbl1: {
                                    loopLabel1: while (true) {
                                      let p11, p21, order1, element1$3, element0$4, arg$VmT$2$, arg$VmT$3$, element1$4, element0$5, arg$VmT$2$1, arg$VmT$3$1;
                                      p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                      p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                      if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                        element0$4 = runtime.Tuple.get(p11, 0);
                                        element1$3 = runtime.Tuple.get(p11, 1);
                                        if (element0$4 instanceof kcfa4.VmE.class) {
                                          if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                            element0$5 = runtime.Tuple.get(p21, 0);
                                            if (element0$5 instanceof kcfa4.VmE.class) {
                                              inlinedVal7 = kcfa4.EQUAL;
                                              break inlinedLbl1
                                            }
                                            inlinedVal7 = kcfa4.LESS;
                                            break inlinedLbl1;
                                          }
                                          inlinedVal7 = kcfa4.LESS;
                                          break inlinedLbl1;
                                        }
                                        if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                          element0$5 = runtime.Tuple.get(p21, 0);
                                          element1$4 = runtime.Tuple.get(p21, 1);
                                          if (element0$5 instanceof kcfa4.VmE.class) {
                                            inlinedVal7 = kcfa4.GREATER;
                                            break inlinedLbl1
                                          }
                                          if (element0$4 instanceof kcfa4.VmT.class) {
                                            arg$VmT$2$ = element0$4.key;
                                            arg$VmT$3$ = element0$4.value;
                                            if (element0$5 instanceof kcfa4.VmT.class) {
                                              let inlinedVal8, scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal8 = kcfa4.LESS;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal8 = kcfa4.GREATER;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                              if (order1 instanceof kcfa4.EQUAL.class) {
                                                t11 = element1$3;
                                                t21 = element1$4;
                                                continue loopLabel1
                                              }
                                              inlinedVal7 = order1;
                                              break inlinedLbl1;
                                            }
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                          }
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                        }
                                        if (element0$4 instanceof kcfa4.VmT.class) {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                        element0$5 = runtime.Tuple.get(p21, 0);
                                        if (element0$5 instanceof kcfa4.VmE.class) {
                                          inlinedVal7 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  inlinedVal3 = inlinedVal7;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                            }
                          }
                          if (inlinedVal3 instanceof kcfa2.LESS.class) {
                            let inlinedVal5;
                            tmp = n + 1;
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                            t2 = element1$2;
                            n = tmp2;
                            result = inlinedVal5;
                            continue loopLabel
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              let kcfa3, p, n1, result1, inlinedVal3;
              kcfa3 = kcfa2;
              p = p1;
              n1 = n;
              result1 = result;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                    element0$2 = runtime.Tuple.get(p, 0);
                    element1$3 = runtime.Tuple.get(p, 1);
                    if (element0$2 instanceof kcfa3.SetE.class) {
                      inlinedVal3 = globalThis.Object.freeze([
                        n1,
                        result1
                      ]);
                      break inlinedLbl1
                    } else if (element0$2 instanceof kcfa3.SetT.class) {
                      let inlinedVal4;
                      arg$SetT$2$2 = element0$2.item;
                      tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                      tmp4 = n1 + 1;
                      inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                      p = tmp3;
                      n1 = tmp4;
                      result1 = inlinedVal4;
                      continue loopLabel1
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal, 1);
        kcfa3 = kcfa1;
        t11 = kcfa1.SetE;
        d = element1$;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1, tmp2;
            if (d instanceof kcfa3.SetZERO.class) {
              inlinedVal3 = t11;
              break inlinedLbl1
            } else if (d instanceof kcfa3.SetONE.class) {
              arg$SetONE$0$ = d.item;
              arg$SetONE$1$ = d.tree;
              arg$SetONE$2$ = d.digit;
              tmp = kcfa3.SetT(undefined, arg$SetONE$1$, arg$SetONE$0$, t11);
              t11 = tmp;
              d = arg$SetONE$2$;
              continue loopLabel1
            } else if (d instanceof kcfa3.SetTWO.class) {
              arg$SetTWO$0$ = d.item1;
              arg$SetTWO$1$ = d.tree1;
              arg$SetTWO$2$ = d.item2;
              arg$SetTWO$3$ = d.tree2;
              arg$SetTWO$4$ = d.digit;
              tmp1 = kcfa3.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
              tmp2 = kcfa3.SetT(undefined, tmp1, arg$SetTWO$0$, t11);
              t11 = tmp2;
              d = arg$SetTWO$4$;
              continue loopLabel1
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return kcfa1.SET(undefined, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda$lambda = function main_doit_summarize_lambda$_lambda$lambda(kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let arg$SmMAP$1$, arg$SmMAP$1$1, element1$;
    arg$State$2$ = state.store;
    if (arg$State$2$ instanceof kcfa1.SmMAP.class) {
      arg$SmMAP$1$ = arg$State$2$.tree;
      if (sum instanceof kcfa1.SmMAP.class) {
        let inlinedVal, inlinedVal1, result, kcfa3, mergeFn, t1, t2, n, result1, inlinedVal2;
        arg$SmMAP$1$1 = sum.tree;
        inlinedVal = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa1.Nil);
        inlinedVal1 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa1.Nil);
        result = kcfa1.SmZERO;
        kcfa3 = kcfa2;
        mergeFn = main_doit_summarize_lambda$_lambda_setUnion$setUnion;
        t1 = inlinedVal;
        t2 = inlinedVal1;
        n = 0;
        result1 = result;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, scrut, element1$1, element0$, arg$SmT$2$, arg$SmT$3$, element1$2, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
            p1 = kcfa3[storeMapNext$accessorSymbol](t1);
            p2 = kcfa3[storeMapNext$accessorSymbol](t2);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
              element0$ = runtime.Tuple.get(p1, 0);
              element1$1 = runtime.Tuple.get(p1, 1);
              if (element0$ instanceof kcfa3.SmE.class) {
                if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                  element0$1 = runtime.Tuple.get(p2, 0);
                  if (element0$1 instanceof kcfa3.SmE.class) {
                    inlinedVal2 = globalThis.Object.freeze([
                      n,
                      result1
                    ]);
                    break inlinedLbl
                  }
                  inlinedVal2 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p2, n, result1);
                  break inlinedLbl;
                }
                inlinedVal2 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p2, n, result1);
                break inlinedLbl;
              }
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                element1$2 = runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  let p, n1, result2, inlinedVal3;
                  p = p1;
                  n1 = n;
                  result2 = result1;
                  inlinedLbl1: {
                    loopLabel1: while (true) {
                      let element1$3, element0$2, arg$SmT$2$2, arg$SmT$3$2, tmp4, tmp5;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$3 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa1.SmE.class) {
                          inlinedVal3 = globalThis.Object.freeze([
                            n1,
                            result2
                          ]);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa1.SmT.class) {
                          let inlinedVal4;
                          arg$SmT$2$2 = element0$2.key;
                          arg$SmT$3$2 = element0$2.value;
                          tmp4 = kcfa1[storeMapNext$accessorSymbol](element1$3);
                          tmp5 = n1 + 1;
                          inlinedVal4 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
                          p = tmp4;
                          n1 = tmp5;
                          result2 = inlinedVal4;
                          continue loopLabel1
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                  }
                  inlinedVal2 = inlinedVal3;
                  break inlinedLbl
                }
                if (element0$ instanceof kcfa3.SmT.class) {
                  arg$SmT$2$ = element0$.key;
                  arg$SmT$3$ = element0$.value;
                  if (element0$1 instanceof kcfa3.SmT.class) {
                    arg$SmT$2$1 = element0$1.key;
                    arg$SmT$3$1 = element0$1.value;
                    scrut = kcfa3[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                    if (scrut instanceof kcfa3.LESS.class) {
                      let inlinedVal3;
                      tmp = n + 1;
                      inlinedVal3 = main_doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$, arg$SmT$3$, kcfa3.SmE, result1);
                      t1 = element1$1;
                      n = tmp;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.EQUAL.class) {
                      let inlinedVal3;
                      tmp1 = n + 1;
                      tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
                      inlinedVal3 = main_doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$, tmp2, kcfa3.SmE, result1);
                      t1 = element1$1;
                      t2 = element1$2;
                      n = tmp1;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.GREATER.class) {
                      let inlinedVal3;
                      tmp3 = n + 1;
                      inlinedVal3 = main_doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$1, arg$SmT$3$1, kcfa3.SmE, result1);
                      t2 = element1$2;
                      n = tmp3;
                      result1 = inlinedVal3;
                      continue loopLabel
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              if (element0$ instanceof kcfa3.SmT.class) {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              if (element0$1 instanceof kcfa3.SmE.class) {
                let p, n1, result2, inlinedVal3;
                p = p1;
                n1 = n;
                result2 = result1;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$3, element0$2, arg$SmT$2$2, arg$SmT$3$2, tmp4, tmp5;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$3 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa1.SmE.class) {
                        inlinedVal3 = globalThis.Object.freeze([
                          n1,
                          result2
                        ]);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa1.SmT.class) {
                        let inlinedVal4;
                        arg$SmT$2$2 = element0$2.key;
                        arg$SmT$3$2 = element0$2.value;
                        tmp4 = kcfa1[storeMapNext$accessorSymbol](element1$3);
                        tmp5 = n1 + 1;
                        inlinedVal4 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
                        p = tmp4;
                        n1 = tmp5;
                        result2 = inlinedVal4;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                inlinedVal2 = inlinedVal3;
                break inlinedLbl
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
          let kcfa4, t11, d, inlinedVal3;
          element1$ = runtime.Tuple.get(inlinedVal2, 1);
          kcfa4 = kcfa1;
          t11 = kcfa1.SmE;
          d = element1$;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1, tmp2;
              if (d instanceof kcfa4.SmZERO.class) {
                inlinedVal3 = t11;
                break inlinedLbl1
              } else if (d instanceof kcfa4.SmONE.class) {
                arg$SmONE$0$ = d.key;
                arg$SmONE$1$ = d.value;
                arg$SmONE$2$ = d.tree;
                arg$SmONE$3$ = d.digit;
                tmp = kcfa4.SmT(undefined, arg$SmONE$2$, arg$SmONE$0$, arg$SmONE$1$, t11);
                t11 = tmp;
                d = arg$SmONE$3$;
                continue loopLabel1
              } else if (d instanceof kcfa4.SmTWO.class) {
                arg$SmTWO$0$ = d.key1;
                arg$SmTWO$1$ = d.value1;
                arg$SmTWO$2$ = d.tree1;
                arg$SmTWO$3$ = d.key2;
                arg$SmTWO$4$ = d.value2;
                arg$SmTWO$5$ = d.tree2;
                arg$SmTWO$6$ = d.digit;
                tmp1 = kcfa4.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
                tmp2 = kcfa4.SmT(undefined, tmp1, arg$SmTWO$0$, arg$SmTWO$1$, t11);
                t11 = tmp2;
                d = arg$SmTWO$6$;
                continue loopLabel1
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          return kcfa1.SmMAP(undefined, inlinedVal3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$$lambda$ = function main_doit_summarize_lambda$$lambda$(kcfa2) {
  return (state, sum) => {
    return main_doit_summarize_lambda$_lambda$lambda(kcfa2, state, sum)
  }
};
main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare = function main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let kcfa2, t1, t2, inlinedVal, inlinedVal1, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal2 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal1;
      t2 = inlinedVal2;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa2.SetE.class) {
                  inlinedVal = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      let element0$2, element0$3;
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
                        element0$2 = runtime.Tuple.get(arg$Clos$0$, 0);
                        if (runtime.Tuple.isArrayLike(arg$Clos$0$1) && arg$Clos$0$1.length === 3) {
                          let inlinedVal4, scrut, scrut1;
                          element0$3 = runtime.Tuple.get(arg$Clos$0$1, 0);
                          scrut = element0$2 < element0$3;
                          if (scrut === true) {
                            inlinedVal4 = kcfa1.LESS;
                            inlinedVal3 = inlinedVal4;
                          } else {
                            scrut1 = element0$3 < element0$2;
                            if (scrut1 === true) {
                              inlinedVal4 = kcfa1.GREATER;
                              inlinedVal3 = inlinedVal4;
                            } else {
                              let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                              cmpRng = kcfa1[bindCompare$accessorSymbol];
                              kcfa3 = kcfa1;
                              if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                                arg$VmMAP$1$ = arg$Clos$1$.tree;
                                if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                                  let inlinedVal5, inlinedVal6, kcfa4, cmpRng1, t11, t21, inlinedVal7;
                                  arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                                  inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                                  inlinedVal6 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                                  kcfa4 = kcfa1;
                                  cmpRng1 = cmpRng;
                                  t11 = inlinedVal5;
                                  t21 = inlinedVal6;
                                  inlinedLbl1: {
                                    loopLabel1: while (true) {
                                      let p11, p21, order1, element1$2, element0$4, arg$VmT$2$, arg$VmT$3$, element1$3, element0$5, arg$VmT$2$1, arg$VmT$3$1;
                                      p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                      p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                      if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                        element0$4 = runtime.Tuple.get(p11, 0);
                                        element1$2 = runtime.Tuple.get(p11, 1);
                                        if (element0$4 instanceof kcfa4.VmE.class) {
                                          if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                            element0$5 = runtime.Tuple.get(p21, 0);
                                            if (element0$5 instanceof kcfa4.VmE.class) {
                                              inlinedVal7 = kcfa4.EQUAL;
                                              break inlinedLbl1
                                            }
                                            inlinedVal7 = kcfa4.LESS;
                                            break inlinedLbl1;
                                          }
                                          inlinedVal7 = kcfa4.LESS;
                                          break inlinedLbl1;
                                        }
                                        if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                          element0$5 = runtime.Tuple.get(p21, 0);
                                          element1$3 = runtime.Tuple.get(p21, 1);
                                          if (element0$5 instanceof kcfa4.VmE.class) {
                                            inlinedVal7 = kcfa4.GREATER;
                                            break inlinedLbl1
                                          }
                                          if (element0$4 instanceof kcfa4.VmT.class) {
                                            arg$VmT$2$ = element0$4.key;
                                            arg$VmT$3$ = element0$4.value;
                                            if (element0$5 instanceof kcfa4.VmT.class) {
                                              let inlinedVal8, scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal8 = kcfa4.LESS;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal8 = kcfa4.GREATER;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                              if (order1 instanceof kcfa4.EQUAL.class) {
                                                t11 = element1$2;
                                                t21 = element1$3;
                                                continue loopLabel1
                                              }
                                              inlinedVal7 = order1;
                                              break inlinedLbl1;
                                            }
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                          }
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                        }
                                        if (element0$4 instanceof kcfa4.VmT.class) {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                        element0$5 = runtime.Tuple.get(p21, 0);
                                        if (element0$5 instanceof kcfa4.VmE.class) {
                                          inlinedVal7 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  inlinedVal3 = inlinedVal7;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                            }
                          }
                          if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            t1 = element1$;
                            t2 = element1$1;
                            continue loopLabel
                          }
                          inlinedVal = inlinedVal3;
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
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_member_lambda$_stateSame$stateSame = function main_doit_explore_member_lambda$_stateSame$stateSame(state1, state2) {
  let arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp;
  if (state1 instanceof kcfa1.State.class) {
    arg$State$0$ = state1.call;
    arg$State$1$ = state1.benv;
    arg$State$2$ = state1.store;
    arg$State$3$ = state1.time;
    if (state2 instanceof kcfa1.State.class) {
      let pred, inlinedVal;
      arg$State$0$1 = state2.call;
      arg$State$1$1 = state2.benv;
      arg$State$2$1 = state2.store;
      arg$State$3$1 = state2.time;
      pred = kcfa1[labelSame$accessorSymbol];
      inlinedVal = kcfa1[listPairAllEq$tailrec$accessorSymbol](pred, arg$State$3$, arg$State$3$1);
      if (inlinedVal === true) {
        tmp = kcfa1[sameCall$accessorSymbol](arg$State$0$, arg$State$0$1);
        if (tmp === true) {
          let cmpRng, kcfa2, arg$VmMAP$1$, arg$VmMAP$1$1;
          cmpRng = kcfa1[bindCompare$accessorSymbol];
          kcfa2 = kcfa1;
          if (arg$State$1$ instanceof kcfa2.VmMAP.class) {
            arg$VmMAP$1$ = arg$State$1$.tree;
            if (arg$State$1$1 instanceof kcfa2.VmMAP.class) {
              let inlinedVal1, inlinedVal2, kcfa3, cmpRng1, t1, t2, inlinedVal3;
              arg$VmMAP$1$1 = arg$State$1$1.tree;
              inlinedVal1 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
              inlinedVal2 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
              kcfa3 = kcfa1;
              cmpRng1 = cmpRng;
              t1 = inlinedVal1;
              t2 = inlinedVal2;
              inlinedLbl: {
                loopLabel: while (true) {
                  let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
                  p1 = kcfa3[varMapNext$accessorSymbol](t1);
                  p2 = kcfa3[varMapNext$accessorSymbol](t2);
                  if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                    element0$ = runtime.Tuple.get(p1, 0);
                    element1$ = runtime.Tuple.get(p1, 1);
                    if (element0$ instanceof kcfa3.VmE.class) {
                      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                        element0$1 = runtime.Tuple.get(p2, 0);
                        if (element0$1 instanceof kcfa3.VmE.class) {
                          inlinedVal3 = kcfa3.EQUAL;
                          break inlinedLbl
                        }
                        inlinedVal3 = kcfa3.LESS;
                        break inlinedLbl;
                      }
                      inlinedVal3 = kcfa3.LESS;
                      break inlinedLbl;
                    }
                    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                      element0$1 = runtime.Tuple.get(p2, 0);
                      element1$1 = runtime.Tuple.get(p2, 1);
                      if (element0$1 instanceof kcfa3.VmE.class) {
                        inlinedVal3 = kcfa3.GREATER;
                        break inlinedLbl
                      }
                      if (element0$ instanceof kcfa3.VmT.class) {
                        arg$VmT$2$ = element0$.key;
                        arg$VmT$3$ = element0$.value;
                        if (element0$1 instanceof kcfa3.VmT.class) {
                          let inlinedVal4, scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal4 = kcfa3.LESS;
                            inlinedVal3 = inlinedVal4;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal4 = kcfa3.GREATER;
                            inlinedVal3 = inlinedVal4;
                            break inlinedLbl
                          }
                          order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                          if (order1 instanceof kcfa3.EQUAL.class) {
                            t1 = element1$;
                            t2 = element1$1;
                            continue loopLabel
                          }
                          inlinedVal3 = order1;
                          break inlinedLbl;
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    if (element0$ instanceof kcfa3.VmT.class) {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                    element0$1 = runtime.Tuple.get(p2, 0);
                    if (element0$1 instanceof kcfa3.VmE.class) {
                      inlinedVal3 = kcfa3.GREATER;
                      break inlinedLbl
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              if (inlinedVal3 instanceof kcfa1.EQUAL.class) {
                let kcfa4, arg$SmMAP$1$, arg$SmMAP$1$1;
                kcfa4 = kcfa1;
                if (arg$State$2$ instanceof kcfa4.SmMAP.class) {
                  arg$SmMAP$1$ = arg$State$2$.tree;
                  if (arg$State$2$1 instanceof kcfa4.SmMAP.class) {
                    let inlinedVal4, inlinedVal5, kcfa5, cmpRng2, t11, t21, inlinedVal6;
                    arg$SmMAP$1$1 = arg$State$2$1.tree;
                    inlinedVal4 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa1.Nil);
                    inlinedVal5 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa1.Nil);
                    kcfa5 = kcfa1;
                    cmpRng2 = main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare;
                    t11 = inlinedVal4;
                    t21 = inlinedVal5;
                    inlinedLbl1: {
                      loopLabel1: while (true) {
                        let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
                        p1 = kcfa5[storeMapNext$accessorSymbol](t11);
                        p2 = kcfa5[storeMapNext$accessorSymbol](t21);
                        if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                          element0$ = runtime.Tuple.get(p1, 0);
                          element1$ = runtime.Tuple.get(p1, 1);
                          if (element0$ instanceof kcfa5.SmE.class) {
                            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                              element0$1 = runtime.Tuple.get(p2, 0);
                              if (element0$1 instanceof kcfa5.SmE.class) {
                                inlinedVal6 = kcfa5.EQUAL;
                                break inlinedLbl1
                              }
                              inlinedVal6 = kcfa5.LESS;
                              break inlinedLbl1;
                            }
                            inlinedVal6 = kcfa5.LESS;
                            break inlinedLbl1;
                          }
                          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                            element0$1 = runtime.Tuple.get(p2, 0);
                            element1$1 = runtime.Tuple.get(p2, 1);
                            if (element0$1 instanceof kcfa5.SmE.class) {
                              inlinedVal6 = kcfa5.GREATER;
                              break inlinedLbl1
                            }
                            if (element0$ instanceof kcfa5.SmT.class) {
                              arg$SmT$2$ = element0$.key;
                              arg$SmT$3$ = element0$.value;
                              if (element0$1 instanceof kcfa5.SmT.class) {
                                arg$SmT$2$1 = element0$1.key;
                                arg$SmT$3$1 = element0$1.value;
                                order = kcfa5[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                                if (order instanceof kcfa5.EQUAL.class) {
                                  order1 = runtime.safeCall(cmpRng2(arg$SmT$3$, arg$SmT$3$1));
                                  if (order1 instanceof kcfa5.EQUAL.class) {
                                    t11 = element1$;
                                    t21 = element1$1;
                                    continue loopLabel1
                                  }
                                  inlinedVal6 = order1;
                                  break inlinedLbl1;
                                }
                                inlinedVal6 = order;
                                break inlinedLbl1;
                              }
                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          if (element0$ instanceof kcfa5.SmT.class) {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                          element0$1 = runtime.Tuple.get(p2, 0);
                          if (element0$1 instanceof kcfa5.SmE.class) {
                            inlinedVal6 = kcfa5.GREATER;
                            break inlinedLbl1
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                    }
                    if (inlinedVal6 instanceof kcfa1.EQUAL.class) {
                      return true
                    }
                    return false;
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              return false;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_member_lambda$$lambda$ = function main_doit_explore_member_lambda$$lambda$(kcfa2, st) {
  return (st1) => {
    return main_doit_explore_member_lambda$_stateSame$stateSame(st, st1)
  }
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let kcfa2, t1, t2, n, result, inlinedVal, inlinedVal1, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal2 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal1;
      t2 = inlinedVal2;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$, arg$SetT$2$, element1$2, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa2.SetE.class) {
                  inlinedVal = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                {
                  let kcfa3, p, n1, result1, inlinedVal3;
                  kcfa3 = kcfa2;
                  p = p2;
                  n1 = n;
                  result1 = result;
                  inlinedLbl1: {
                    loopLabel1: while (true) {
                      let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$3 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa3.SetE.class) {
                          inlinedVal3 = globalThis.Object.freeze([
                            n1,
                            result1
                          ]);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa3.SetT.class) {
                          let inlinedVal4;
                          arg$SetT$2$2 = element0$2.item;
                          tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                          tmp4 = n1 + 1;
                          inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                          p = tmp3;
                          n1 = tmp4;
                          result1 = inlinedVal4;
                          continue loopLabel1
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                  }
                  inlinedVal = inlinedVal3;
                  break inlinedLbl;
                }
              }
              {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p2;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$3 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = globalThis.Object.freeze([
                          n1,
                          result1
                        ]);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                        tmp4 = n1 + 1;
                        inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                        p = tmp3;
                        n1 = tmp4;
                        result1 = inlinedVal4;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                inlinedVal = inlinedVal3;
                break inlinedLbl;
              }
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p1;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$3 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = globalThis.Object.freeze([
                          n1,
                          result1
                        ]);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                        tmp4 = n1 + 1;
                        inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                        p = tmp3;
                        n1 = tmp4;
                        result1 = inlinedVal4;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                inlinedVal = inlinedVal3;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      let element0$2, element0$3;
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
                        element0$2 = runtime.Tuple.get(arg$Clos$0$, 0);
                        if (runtime.Tuple.isArrayLike(arg$Clos$0$1) && arg$Clos$0$1.length === 3) {
                          let inlinedVal4, scrut, scrut1;
                          element0$3 = runtime.Tuple.get(arg$Clos$0$1, 0);
                          scrut = element0$2 < element0$3;
                          if (scrut === true) {
                            inlinedVal4 = kcfa1.LESS;
                            inlinedVal3 = inlinedVal4;
                          } else {
                            scrut1 = element0$3 < element0$2;
                            if (scrut1 === true) {
                              inlinedVal4 = kcfa1.GREATER;
                              inlinedVal3 = inlinedVal4;
                            } else {
                              let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                              cmpRng = kcfa1[bindCompare$accessorSymbol];
                              kcfa3 = kcfa1;
                              if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                                arg$VmMAP$1$ = arg$Clos$1$.tree;
                                if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                                  let inlinedVal5, inlinedVal6, kcfa4, cmpRng1, t11, t21, inlinedVal7;
                                  arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                                  inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                                  inlinedVal6 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                                  kcfa4 = kcfa1;
                                  cmpRng1 = cmpRng;
                                  t11 = inlinedVal5;
                                  t21 = inlinedVal6;
                                  inlinedLbl1: {
                                    loopLabel1: while (true) {
                                      let p11, p21, order1, element1$3, element0$4, arg$VmT$2$, arg$VmT$3$, element1$4, element0$5, arg$VmT$2$1, arg$VmT$3$1;
                                      p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                      p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                      if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                        element0$4 = runtime.Tuple.get(p11, 0);
                                        element1$3 = runtime.Tuple.get(p11, 1);
                                        if (element0$4 instanceof kcfa4.VmE.class) {
                                          if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                            element0$5 = runtime.Tuple.get(p21, 0);
                                            if (element0$5 instanceof kcfa4.VmE.class) {
                                              inlinedVal7 = kcfa4.EQUAL;
                                              break inlinedLbl1
                                            }
                                            inlinedVal7 = kcfa4.LESS;
                                            break inlinedLbl1;
                                          }
                                          inlinedVal7 = kcfa4.LESS;
                                          break inlinedLbl1;
                                        }
                                        if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                          element0$5 = runtime.Tuple.get(p21, 0);
                                          element1$4 = runtime.Tuple.get(p21, 1);
                                          if (element0$5 instanceof kcfa4.VmE.class) {
                                            inlinedVal7 = kcfa4.GREATER;
                                            break inlinedLbl1
                                          }
                                          if (element0$4 instanceof kcfa4.VmT.class) {
                                            arg$VmT$2$ = element0$4.key;
                                            arg$VmT$3$ = element0$4.value;
                                            if (element0$5 instanceof kcfa4.VmT.class) {
                                              let inlinedVal8, scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal8 = kcfa4.LESS;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal8 = kcfa4.GREATER;
                                                inlinedVal7 = inlinedVal8;
                                                break inlinedLbl1
                                              }
                                              order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                              if (order1 instanceof kcfa4.EQUAL.class) {
                                                t11 = element1$3;
                                                t21 = element1$4;
                                                continue loopLabel1
                                              }
                                              inlinedVal7 = order1;
                                              break inlinedLbl1;
                                            }
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                          }
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                        }
                                        if (element0$4 instanceof kcfa4.VmT.class) {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                        element0$5 = runtime.Tuple.get(p21, 0);
                                        if (element0$5 instanceof kcfa4.VmE.class) {
                                          inlinedVal7 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  inlinedVal3 = inlinedVal7;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                            }
                          }
                          if (inlinedVal3 instanceof kcfa2.LESS.class) {
                            let inlinedVal5;
                            tmp = n + 1;
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                            t2 = element1$2;
                            n = tmp2;
                            result = inlinedVal5;
                            continue loopLabel
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              let kcfa3, p, n1, result1, inlinedVal3;
              kcfa3 = kcfa2;
              p = p1;
              n1 = n;
              result1 = result;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let element1$3, element0$2, arg$SetT$2$2, tmp3, tmp4;
                  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                    element0$2 = runtime.Tuple.get(p, 0);
                    element1$3 = runtime.Tuple.get(p, 1);
                    if (element0$2 instanceof kcfa3.SetE.class) {
                      inlinedVal3 = globalThis.Object.freeze([
                        n1,
                        result1
                      ]);
                      break inlinedLbl1
                    } else if (element0$2 instanceof kcfa3.SetT.class) {
                      let inlinedVal4;
                      arg$SetT$2$2 = element0$2.item;
                      tmp3 = kcfa3[setNext$accessorSymbol](element1$3);
                      tmp4 = n1 + 1;
                      inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
                      p = tmp3;
                      n1 = tmp4;
                      result1 = inlinedVal4;
                      continue loopLabel1
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal, 1);
        kcfa3 = kcfa1;
        t11 = kcfa1.SetE;
        d = element1$;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1, tmp2;
            if (d instanceof kcfa3.SetZERO.class) {
              inlinedVal3 = t11;
              break inlinedLbl1
            } else if (d instanceof kcfa3.SetONE.class) {
              arg$SetONE$0$ = d.item;
              arg$SetONE$1$ = d.tree;
              arg$SetONE$2$ = d.digit;
              tmp = kcfa3.SetT(undefined, arg$SetONE$1$, arg$SetONE$0$, t11);
              t11 = tmp;
              d = arg$SetONE$2$;
              continue loopLabel1
            } else if (d instanceof kcfa3.SetTWO.class) {
              arg$SetTWO$0$ = d.item1;
              arg$SetTWO$1$ = d.tree1;
              arg$SetTWO$2$ = d.item2;
              arg$SetTWO$3$ = d.tree2;
              arg$SetTWO$4$ = d.digit;
              tmp1 = kcfa3.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
              tmp2 = kcfa3.SetT(undefined, tmp1, arg$SetTWO$0$, t11);
              t11 = tmp2;
              d = arg$SetTWO$4$;
              continue loopLabel1
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return kcfa1.SET(undefined, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$$lambda$ = function main_doit_explore_absNext_apply$_apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
main_doit_explore_absNext_apply$_apply$apply = function main_doit_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, inlinedVal1, inlinedVal2, lambda$here, lambda$here1;
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      lambda$here1 = lambda$(kcfa2);
      inlinedVal1 = kcfa2[listPairFoldl$accessorSymbol](lambda$here1)(arg$Clos$1$)(element1$, inlinedVal);
      lambda$here = main_doit_explore_absNext_apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = kcfa2[listPairFoldl$accessorSymbol](lambda$here)(store)(inlinedVal, params);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$$apply$ = function main_doit_explore_absNext_apply$$apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return main_doit_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp = function main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, exps) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (exps instanceof kcfa1.Nil.class) {
    return kcfa1.Cons(exp, kcfa1.Nil)
  } else if (exps instanceof kcfa1.Cons.class) {
    let arg$LAMBDA$0$, arg$LAMBDA$0$1;
    arg$Cons$0$ = exps.head;
    arg$Cons$1$ = exps.tail;
    if (arg$Cons$0$ instanceof kcfa1.VAR.class) {
      tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
      return kcfa1.Cons(exp, tmp1)
    }
    if (exp instanceof kcfa1.LAMBDA.class) {
      arg$LAMBDA$0$ = exp.lam;
      if (arg$Cons$0$ instanceof kcfa1.LAMBDA.class) {
        let element0$, element0$1;
        arg$LAMBDA$0$1 = arg$Cons$0$.lam;
        if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
          element0$ = runtime.Tuple.get(arg$LAMBDA$0$, 0);
          if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$1) && arg$LAMBDA$0$1.length === 3) {
            let scrut, scrut1;
            element0$1 = runtime.Tuple.get(arg$LAMBDA$0$1, 0);
            scrut = element0$ < element0$1;
            if (scrut === true) {
              tmp = main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, arg$Cons$1$);
              return kcfa1.Cons(arg$Cons$0$, tmp)
            }
            scrut1 = element0$1 < element0$;
            if (scrut1 === true) {
              tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
              return kcfa1.Cons(exp, tmp1)
            }
            return kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate = function main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (mst instanceof kcfa1.Nil.class) {
    tmp = kcfa1.Cons(exp, kcfa1.Nil);
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    return kcfa1.Cons(tmp1, kcfa1.Nil)
  } else if (mst instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = mst.head;
    arg$Cons$1$ = mst.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let scrut, scrut1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      scrut = x < element0$;
      if (scrut === true) {
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(tmp2, tmp3)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        tmp4 = kcfa1.Cons(exp, kcfa1.Nil);
        tmp5 = globalThis.Object.freeze([
          x,
          tmp4
        ]);
        tmp6 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp7 = kcfa1.Cons(tmp6, arg$Cons$1$);
        return kcfa1.Cons(tmp5, tmp7)
      }
      tmp8 = main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, element1$);
      tmp9 = globalThis.Object.freeze([
        element0$,
        tmp8
      ]);
      return kcfa1.Cons(tmp9, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ = function main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
};
main_doit_monovariantStore_lambda$_lambda$lambda = function main_doit_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$1(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf(kcfa2, f, arg$SET$1$, init);
      f1 = main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_monovariantStore_lambda$$lambda$ = function main_doit_monovariantStore_lambda$$lambda$(kcfa2) {
  return (b, d, mst) => {
    return main_doit_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst)
  }
};
doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp = function doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, exps) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (exps instanceof kcfa1.Nil.class) {
    return kcfa1.Cons(exp, kcfa1.Nil)
  } else if (exps instanceof kcfa1.Cons.class) {
    let arg$LAMBDA$0$, arg$LAMBDA$0$1;
    arg$Cons$0$ = exps.head;
    arg$Cons$1$ = exps.tail;
    if (arg$Cons$0$ instanceof kcfa1.VAR.class) {
      tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
      return kcfa1.Cons(exp, tmp1)
    }
    if (exp instanceof kcfa1.LAMBDA.class) {
      arg$LAMBDA$0$ = exp.lam;
      if (arg$Cons$0$ instanceof kcfa1.LAMBDA.class) {
        let element0$, element0$1;
        arg$LAMBDA$0$1 = arg$Cons$0$.lam;
        if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
          element0$ = runtime.Tuple.get(arg$LAMBDA$0$, 0);
          if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$1) && arg$LAMBDA$0$1.length === 3) {
            let scrut, scrut1;
            element0$1 = runtime.Tuple.get(arg$LAMBDA$0$1, 0);
            scrut = element0$ < element0$1;
            if (scrut === true) {
              tmp = doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, arg$Cons$1$);
              return kcfa1.Cons(arg$Cons$0$, tmp)
            }
            scrut1 = element0$1 < element0$;
            if (scrut1 === true) {
              tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
              return kcfa1.Cons(exp, tmp1)
            }
            return kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate = function doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (mst instanceof kcfa1.Nil.class) {
    tmp = kcfa1.Cons(exp, kcfa1.Nil);
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    return kcfa1.Cons(tmp1, kcfa1.Nil)
  } else if (mst instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = mst.head;
    arg$Cons$1$ = mst.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let scrut, scrut1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      scrut = x < element0$;
      if (scrut === true) {
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(tmp2, tmp3)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        tmp4 = kcfa1.Cons(exp, kcfa1.Nil);
        tmp5 = globalThis.Object.freeze([
          x,
          tmp4
        ]);
        tmp6 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp7 = kcfa1.Cons(tmp6, arg$Cons$1$);
        return kcfa1.Cons(tmp5, tmp7)
      }
      tmp8 = doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, element1$);
      tmp9 = globalThis.Object.freeze([
        element0$,
        tmp8
      ]);
      return kcfa1.Cons(tmp9, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp = function monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, exps) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (exps instanceof kcfa1.Nil.class) {
    return kcfa1.Cons(exp, kcfa1.Nil)
  } else if (exps instanceof kcfa1.Cons.class) {
    let inlinedVal, arg$LAMBDA$0$, arg$LAMBDA$0$1;
    arg$Cons$0$ = exps.head;
    arg$Cons$1$ = exps.tail;
    if (arg$Cons$0$ instanceof kcfa1.VAR.class) {
      tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
      return kcfa1.Cons(exp, tmp1)
    }
    if (exp instanceof kcfa1.LAMBDA.class) {
      arg$LAMBDA$0$ = exp.lam;
      if (arg$Cons$0$ instanceof kcfa1.LAMBDA.class) {
        arg$LAMBDA$0$1 = arg$Cons$0$.lam;
        inlinedVal = kcfa1[compareLambda$accessorSymbol](arg$LAMBDA$0$, arg$LAMBDA$0$1);
        if (inlinedVal instanceof kcfa1.LESS.class) {
          tmp = monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, arg$Cons$1$);
          return kcfa1.Cons(arg$Cons$0$, tmp)
        } else if (inlinedVal instanceof kcfa1.GREATER.class) {
          tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
          return kcfa1.Cons(exp, tmp1)
        } else if (inlinedVal instanceof kcfa1.EQUAL.class) {
          return kcfa1.Cons(arg$Cons$0$, arg$Cons$1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate = function monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (mst instanceof kcfa1.Nil.class) {
    tmp = kcfa1.Cons(exp, kcfa1.Nil);
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    return kcfa1.Cons(tmp1, kcfa1.Nil)
  } else if (mst instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = mst.head;
    arg$Cons$1$ = mst.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let scrut, scrut1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      scrut = x < element0$;
      if (scrut === true) {
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(tmp2, tmp3)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        tmp4 = kcfa1.Cons(exp, kcfa1.Nil);
        tmp5 = globalThis.Object.freeze([
          x,
          tmp4
        ]);
        tmp6 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp7 = kcfa1.Cons(tmp6, arg$Cons$1$);
        return kcfa1.Cons(tmp5, tmp7)
      }
      tmp8 = monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, element1$);
      tmp9 = globalThis.Object.freeze([
        element0$,
        tmp8
      ]);
      return kcfa1.Cons(tmp9, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_monoStoreUpdate_insertExp$insertExp = function lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, exps) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (exps instanceof kcfa1.Nil.class) {
    return kcfa1.Cons(exp, kcfa1.Nil)
  } else if (exps instanceof kcfa1.Cons.class) {
    let inlinedVal, arg$LAMBDA$0$, arg$LAMBDA$0$1;
    arg$Cons$0$ = exps.head;
    arg$Cons$1$ = exps.tail;
    if (arg$Cons$0$ instanceof kcfa1.VAR.class) {
      tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
      return kcfa1.Cons(exp, tmp1)
    }
    if (exp instanceof kcfa1.LAMBDA.class) {
      arg$LAMBDA$0$ = exp.lam;
      if (arg$Cons$0$ instanceof kcfa1.LAMBDA.class) {
        arg$LAMBDA$0$1 = arg$Cons$0$.lam;
        inlinedVal = kcfa1[compareLambda$accessorSymbol](arg$LAMBDA$0$, arg$LAMBDA$0$1);
        if (inlinedVal instanceof kcfa1.LESS.class) {
          tmp = lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, arg$Cons$1$);
          return kcfa1.Cons(arg$Cons$0$, tmp)
        } else if (inlinedVal instanceof kcfa1.GREATER.class) {
          tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
          return kcfa1.Cons(exp, tmp1)
        } else if (inlinedVal instanceof kcfa1.EQUAL.class) {
          return kcfa1.Cons(arg$Cons$0$, arg$Cons$1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_monoStoreUpdate$monoStoreUpdate = function lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (mst instanceof kcfa1.Nil.class) {
    tmp = kcfa1.Cons(exp, kcfa1.Nil);
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    return kcfa1.Cons(tmp1, kcfa1.Nil)
  } else if (mst instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = mst.head;
    arg$Cons$1$ = mst.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let scrut, scrut1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      scrut = x < element0$;
      if (scrut === true) {
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = lambda_lambda$_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(tmp2, tmp3)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        tmp4 = kcfa1.Cons(exp, kcfa1.Nil);
        tmp5 = globalThis.Object.freeze([
          x,
          tmp4
        ]);
        tmp6 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp7 = kcfa1.Cons(tmp6, arg$Cons$1$);
        return kcfa1.Cons(tmp5, tmp7)
      }
      tmp8 = lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, element1$);
      tmp9 = globalThis.Object.freeze([
        element0$,
        tmp8
      ]);
      return kcfa1.Cons(tmp9, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp = function lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, exps) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (exps instanceof kcfa1.Nil.class) {
    return kcfa1.Cons(exp, kcfa1.Nil)
  } else if (exps instanceof kcfa1.Cons.class) {
    let inlinedVal, arg$LAMBDA$0$, arg$LAMBDA$0$1;
    arg$Cons$0$ = exps.head;
    arg$Cons$1$ = exps.tail;
    if (arg$Cons$0$ instanceof kcfa1.VAR.class) {
      tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
      return kcfa1.Cons(exp, tmp1)
    }
    if (exp instanceof kcfa1.LAMBDA.class) {
      arg$LAMBDA$0$ = exp.lam;
      if (arg$Cons$0$ instanceof kcfa1.LAMBDA.class) {
        arg$LAMBDA$0$1 = arg$Cons$0$.lam;
        inlinedVal = kcfa1[compareLambda$accessorSymbol](arg$LAMBDA$0$, arg$LAMBDA$0$1);
        if (inlinedVal instanceof kcfa1.LESS.class) {
          tmp = lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, arg$Cons$1$);
          return kcfa1.Cons(arg$Cons$0$, tmp)
        } else if (inlinedVal instanceof kcfa1.GREATER.class) {
          tmp1 = kcfa1.Cons(arg$Cons$0$, arg$Cons$1$);
          return kcfa1.Cons(exp, tmp1)
        } else if (inlinedVal instanceof kcfa1.EQUAL.class) {
          return kcfa1.Cons(arg$Cons$0$, arg$Cons$1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate = function lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  if (mst instanceof kcfa1.Nil.class) {
    tmp = kcfa1.Cons(exp, kcfa1.Nil);
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    return kcfa1.Cons(tmp1, kcfa1.Nil)
  } else if (mst instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = mst.head;
    arg$Cons$1$ = mst.tail;
    if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
      let scrut, scrut1;
      element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
      element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
      scrut = x < element0$;
      if (scrut === true) {
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(tmp2, tmp3)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        tmp4 = kcfa1.Cons(exp, kcfa1.Nil);
        tmp5 = globalThis.Object.freeze([
          x,
          tmp4
        ]);
        tmp6 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp7 = kcfa1.Cons(tmp6, arg$Cons$1$);
        return kcfa1.Cons(tmp5, tmp7)
      }
      tmp8 = lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp(exp, element1$);
      tmp9 = globalThis.Object.freeze([
        element0$,
        tmp8
      ]);
      return kcfa1.Cons(tmp9, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_ins_incr$incr = function doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_incr$incr = function doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 = function doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 = function doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 = function doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr = function doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 = function doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_union$_union_incr$incr = function doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 = function doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr = function doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr = function doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_atomEval_eval$_eval$eval = function main_doit_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let scrut, scrut1, arg$Some$0$;
    arg$VAR$1$ = e.x;
    scrut1 = kcfa2[varMapFind$accessorSymbol](benv, arg$VAR$1$);
    if (scrut1 instanceof kcfa2.Some.class) {
      arg$Some$0$ = scrut1.value;
      scrut = kcfa2[storeMapFind$accessorSymbol](store, arg$Some$0$);
      if (scrut instanceof kcfa2.Some.class) {
        return scrut.value
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (e instanceof kcfa2.LAMBDA.class) {
    let tmp1;
    arg$LAMBDA$0$ = e.lam;
    tmp = kcfa2.Clos(arg$LAMBDA$0$, benv);
    tmp1 = kcfa2.SetT(undefined, kcfa2.SetE, tmp, kcfa2.SetE);
    return kcfa2.SET(undefined, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_atomEval_eval$$eval$ = function main_doit_explore_absNext_atomEval_eval$$eval$(kcfa2, benv, store) {
  return (e) => {
    return main_doit_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e)
  }
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr = function main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_union$_union_incr$incr = function main_doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = main_doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 = function main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 = function main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(undefined, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns = function main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p, n, result) {
  loopLabel: while (true) {
    let element1$, element0$, arg$SmT$2$, arg$SmT$3$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof kcfa1.SmE.class) {
        return globalThis.Object.freeze([
          n,
          result
        ])
      } else if (element0$ instanceof kcfa1.SmT.class) {
        let inlinedVal;
        arg$SmT$2$ = element0$.key;
        arg$SmT$3$ = element0$.value;
        tmp = kcfa1[storeMapNext$accessorSymbol](element1$);
        tmp1 = n + 1;
        inlinedVal = main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2(kcfa1, arg$SmT$2$, arg$SmT$3$, kcfa1.SmE, result);
        p = tmp;
        n = tmp1;
        result = inlinedVal;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr = function main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 = function main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 = function main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_incr$incr = function main_doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 = function main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(undefined, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_lambda$_lambda$lambda = function main_lambda$_lambda$lambda(kcfa2, e) {
  let arg$LAMBDA$0$;
  if (e instanceof kcfa2.LAMBDA.class) {
    arg$LAMBDA$0$ = e.lam;
    if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
      return runtime.Tuple.get(arg$LAMBDA$0$, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_lambda$$lambda$ = function main_lambda$$lambda$(kcfa2) {
  return (e) => {
    return main_lambda$_lambda$lambda(kcfa2, e)
  }
};
lambda$2 = (undefined, function (kcfa2, lambdaLabel) {
  return (p) => {
    return lambda1(kcfa2, lambdaLabel, p)
  }
});
lambda1 = (undefined, function (kcfa2, lambdaLabel, p) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(p, 0);
    element1$ = runtime.Tuple.get(p, 1);
    inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](lambdaLabel, element1$);
    return globalThis.Object.freeze([
      element0$,
      inlinedVal
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (kcfa2) {
  return (v, exps) => {
    return lambda(kcfa2, v, exps)
  }
});
lambda = (undefined, function (kcfa2, v, exps) {
  let inlinedVal, arg$Clos$0$;
  if (v instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = v.lam;
    inlinedVal = kcfa2.LAMBDA(arg$Clos$0$);
    return kcfa2.Cons(inlinedVal, exps)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
incr1 = function incr(kcfa2, ak1, a1, t1, d) {
  let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1;
  if (d instanceof kcfa2.SmZERO.class) {
    return kcfa2.SmONE(ak1, a1, t1, kcfa2.SmZERO)
  } else if (d instanceof kcfa2.SmONE.class) {
    arg$SmONE$0$ = d.key;
    arg$SmONE$1$ = d.value;
    arg$SmONE$2$ = d.tree;
    arg$SmONE$3$ = d.digit;
    return kcfa2.SmTWO(ak1, a1, t1, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$)
  } else if (d instanceof kcfa2.SmTWO.class) {
    arg$SmTWO$0$ = d.key1;
    arg$SmTWO$1$ = d.value1;
    arg$SmTWO$2$ = d.tree1;
    arg$SmTWO$3$ = d.key2;
    arg$SmTWO$4$ = d.value2;
    arg$SmTWO$5$ = d.tree2;
    arg$SmTWO$6$ = d.digit;
    tmp = kcfa2.SmT(kcfa2.SmB, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
    tmp1 = incr1(kcfa2, arg$SmTWO$0$, arg$SmTWO$1$, tmp, arg$SmTWO$6$);
    return kcfa2.SmONE(ak1, a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldf1 = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp, tmp1;
    if (t instanceof kcfa2.SmE.class) {
      return accum
    } else if (t instanceof kcfa2.SmT.class) {
      arg$SmT$1$ = t.left;
      arg$SmT$2$ = t.key;
      arg$SmT$3$ = t.value;
      arg$SmT$4$ = t.right;
      tmp = foldf1(kcfa2, f, arg$SmT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SmT$2$, arg$SmT$3$, tmp));
      t = arg$SmT$4$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins1 = function ins(kcfa2, comb, xk, x, nItems, nItems1, s) {
  let scrut, scrut1, c1, d1, scrut2, c11, d11, arg$SmT$0$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp, arg$SmT$0$1, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$4$1, tmp1, arg$SmT$0$2, arg$SmT$1$2, arg$SmT$2$2, arg$SmT$3$2, arg$SmT$4$2, tmp2, tmp3, tmp4, tmp5, tmp6, arg$SmT$0$3, arg$SmT$1$3, arg$SmT$2$3, arg$SmT$3$3, arg$SmT$4$3, tmp7, tmp8, tmp9, tmp10, arg$SmT$0$4, arg$SmT$1$4, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4, tmp11, arg$SmT$0$5, arg$SmT$1$5, arg$SmT$2$5, arg$SmT$3$5, arg$SmT$4$5, tmp12, tmp13, tmp14, tmp15, tmp16, arg$SmT$0$6, arg$SmT$1$6, arg$SmT$2$6, arg$SmT$3$6, arg$SmT$4$6, tmp17, tmp18, tmp19;
  if (s instanceof kcfa2.SmE.class) {
    tmp = nItems + 1;
    nItems1.value = tmp;
    return kcfa2.SmT(kcfa2.SmR, kcfa2.SmE, xk, x, kcfa2.SmE)
  } else if (s instanceof kcfa2.SmT.class) {
    arg$SmT$0$ = s.color;
    arg$SmT$1$ = s.left;
    arg$SmT$2$ = s.key;
    arg$SmT$3$ = s.value;
    arg$SmT$4$ = s.right;
    scrut = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$);
    if (scrut instanceof kcfa2.LESS.class) {
      if (arg$SmT$1$ instanceof kcfa2.SmT.class) {
        arg$SmT$0$1 = arg$SmT$1$.color;
        arg$SmT$1$1 = arg$SmT$1$.left;
        arg$SmT$2$1 = arg$SmT$1$.key;
        arg$SmT$3$1 = arg$SmT$1$.value;
        arg$SmT$4$1 = arg$SmT$1$.right;
        if (arg$SmT$0$1 instanceof kcfa2.SmR.class) {
          scrut1 = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$1);
          if (scrut1 instanceof kcfa2.LESS.class) {
            c1 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$1);
            if (c1 instanceof kcfa2.SmT.class) {
              arg$SmT$0$2 = c1.color;
              arg$SmT$1$2 = c1.left;
              arg$SmT$2$2 = c1.key;
              arg$SmT$3$2 = c1.value;
              arg$SmT$4$2 = c1.right;
              if (arg$SmT$0$2 instanceof kcfa2.SmR.class) {
                tmp3 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$2, arg$SmT$2$2, arg$SmT$3$2, arg$SmT$4$2);
                tmp4 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$1, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
                return kcfa2.SmT(kcfa2.SmR, tmp3, arg$SmT$2$1, arg$SmT$3$1, tmp4)
              }
            }
            tmp2 = kcfa2.SmT(kcfa2.SmR, c1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$4$1);
            return kcfa2.SmT(kcfa2.SmB, tmp2, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          } else if (scrut1 instanceof kcfa2.EQUAL.class) {
            tmp5 = runtime.safeCall(comb(arg$SmT$3$1, x));
            tmp6 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$1, xk, tmp5, arg$SmT$4$1);
            return kcfa2.SmT(arg$SmT$0$, tmp6, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          } else if (scrut1 instanceof kcfa2.GREATER.class) {
            d1 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$1);
            if (d1 instanceof kcfa2.SmT.class) {
              arg$SmT$0$3 = d1.color;
              arg$SmT$1$3 = d1.left;
              arg$SmT$2$3 = d1.key;
              arg$SmT$3$3 = d1.value;
              arg$SmT$4$3 = d1.right;
              if (arg$SmT$0$3 instanceof kcfa2.SmR.class) {
                tmp8 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, arg$SmT$1$3);
                tmp9 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$3, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
                return kcfa2.SmT(kcfa2.SmR, tmp8, arg$SmT$2$3, arg$SmT$3$3, tmp9)
              }
            }
            tmp7 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$1, arg$SmT$2$1, arg$SmT$3$1, d1);
            return kcfa2.SmT(kcfa2.SmB, tmp7, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp1 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$);
      return kcfa2.SmT(kcfa2.SmB, tmp1, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$)
    } else if (scrut instanceof kcfa2.EQUAL.class) {
      tmp10 = runtime.safeCall(comb(arg$SmT$3$, x));
      return kcfa2.SmT(arg$SmT$0$, arg$SmT$1$, xk, tmp10, arg$SmT$4$)
    } else if (scrut instanceof kcfa2.GREATER.class) {
      if (arg$SmT$4$ instanceof kcfa2.SmT.class) {
        arg$SmT$0$4 = arg$SmT$4$.color;
        arg$SmT$1$4 = arg$SmT$4$.left;
        arg$SmT$2$4 = arg$SmT$4$.key;
        arg$SmT$3$4 = arg$SmT$4$.value;
        arg$SmT$4$4 = arg$SmT$4$.right;
        if (arg$SmT$0$4 instanceof kcfa2.SmR.class) {
          scrut2 = kcfa2[bindCompare$accessorSymbol](xk, arg$SmT$2$4);
          if (scrut2 instanceof kcfa2.LESS.class) {
            c11 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$4);
            if (c11 instanceof kcfa2.SmT.class) {
              arg$SmT$0$5 = c11.color;
              arg$SmT$1$5 = c11.left;
              arg$SmT$2$5 = c11.key;
              arg$SmT$3$5 = c11.value;
              arg$SmT$4$5 = c11.right;
              if (arg$SmT$0$5 instanceof kcfa2.SmR.class) {
                tmp13 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$1$5);
                tmp14 = kcfa2.SmT(kcfa2.SmB, arg$SmT$4$5, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4);
                return kcfa2.SmT(kcfa2.SmR, tmp13, arg$SmT$2$5, arg$SmT$3$5, tmp14)
              }
            }
            tmp12 = kcfa2.SmT(kcfa2.SmR, c11, arg$SmT$2$4, arg$SmT$3$4, arg$SmT$4$4);
            return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp12)
          } else if (scrut2 instanceof kcfa2.EQUAL.class) {
            tmp15 = runtime.safeCall(comb(arg$SmT$3$4, x));
            tmp16 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$4, xk, tmp15, arg$SmT$4$4);
            return kcfa2.SmT(arg$SmT$0$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp16)
          } else if (scrut2 instanceof kcfa2.GREATER.class) {
            d11 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$4);
            if (d11 instanceof kcfa2.SmT.class) {
              arg$SmT$0$6 = d11.color;
              arg$SmT$1$6 = d11.left;
              arg$SmT$2$6 = d11.key;
              arg$SmT$3$6 = d11.value;
              arg$SmT$4$6 = d11.right;
              if (arg$SmT$0$6 instanceof kcfa2.SmR.class) {
                tmp18 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$1$4);
                tmp19 = kcfa2.SmT(kcfa2.SmB, arg$SmT$1$6, arg$SmT$2$6, arg$SmT$3$6, arg$SmT$4$6);
                return kcfa2.SmT(kcfa2.SmR, tmp18, arg$SmT$2$4, arg$SmT$3$4, tmp19)
              }
            }
            tmp17 = kcfa2.SmT(kcfa2.SmR, arg$SmT$1$4, arg$SmT$2$4, arg$SmT$3$4, d11);
            return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp17)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp11 = ins1(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$);
      return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp11)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldf = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SetT$1$, arg$SetT$2$, arg$SetT$3$, tmp, tmp1;
    if (t instanceof kcfa2.SetE.class) {
      return accum
    } else if (t instanceof kcfa2.SetT.class) {
      arg$SetT$1$ = t.left;
      arg$SetT$2$ = t.item;
      arg$SetT$3$ = t.right;
      tmp = foldf(kcfa2, f, arg$SetT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SetT$2$, tmp));
      t = arg$SetT$3$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
incr = function incr(kcfa2, a1, t1, d) {
  let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1;
  if (d instanceof kcfa2.SetZERO.class) {
    return kcfa2.SetONE(a1, t1, kcfa2.SetZERO)
  } else if (d instanceof kcfa2.SetONE.class) {
    arg$SetONE$0$ = d.item;
    arg$SetONE$1$ = d.tree;
    arg$SetONE$2$ = d.digit;
    return kcfa2.SetTWO(a1, t1, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$)
  } else if (d instanceof kcfa2.SetTWO.class) {
    arg$SetTWO$0$ = d.item1;
    arg$SetTWO$1$ = d.tree1;
    arg$SetTWO$2$ = d.item2;
    arg$SetTWO$3$ = d.tree2;
    arg$SetTWO$4$ = d.digit;
    tmp = kcfa2.SetT(kcfa2.SetB, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
    tmp1 = incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (kcfa2) {
  return (x, adr, benv) => {
    return kcfa2[varMapInsert$accessorSymbol](benv, x, adr)
  }
});
ins = function ins(kcfa2, xk, x, nItems, nItems1, s) {
  let c1, d1, c11, d11, arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp, arg$VmT$0$1, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$4$1, tmp1, arg$VmT$0$2, arg$VmT$1$2, arg$VmT$2$2, arg$VmT$3$2, arg$VmT$4$2, tmp2, tmp3, tmp4, tmp5, arg$VmT$0$3, arg$VmT$1$3, arg$VmT$2$3, arg$VmT$3$3, arg$VmT$4$3, tmp6, tmp7, tmp8, arg$VmT$0$4, arg$VmT$1$4, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4, tmp9, arg$VmT$0$5, arg$VmT$1$5, arg$VmT$2$5, arg$VmT$3$5, arg$VmT$4$5, tmp10, tmp11, tmp12, tmp13, arg$VmT$0$6, arg$VmT$1$6, arg$VmT$2$6, arg$VmT$3$6, arg$VmT$4$6, tmp14, tmp15, tmp16;
  if (s instanceof kcfa2.VmE.class) {
    tmp = nItems + 1;
    nItems1.value = tmp;
    return kcfa2.VmT(kcfa2.VmR, kcfa2.VmE, xk, x, kcfa2.VmE)
  } else if (s instanceof kcfa2.VmT.class) {
    let inlinedVal, scrut, scrut1;
    arg$VmT$0$ = s.color;
    arg$VmT$1$ = s.left;
    arg$VmT$2$ = s.key;
    arg$VmT$3$ = s.value;
    arg$VmT$4$ = s.right;
    scrut = xk < arg$VmT$2$;
    if (scrut === true) {
      inlinedVal = kcfa2.LESS;
    } else {
      scrut1 = arg$VmT$2$ < xk;
      if (scrut1 === true) {
        inlinedVal = kcfa2.GREATER;
      } else {
        inlinedVal = kcfa2.EQUAL;
      }
    }
    if (inlinedVal instanceof kcfa2.LESS.class) {
      if (arg$VmT$1$ instanceof kcfa2.VmT.class) {
        arg$VmT$0$1 = arg$VmT$1$.color;
        arg$VmT$1$1 = arg$VmT$1$.left;
        arg$VmT$2$1 = arg$VmT$1$.key;
        arg$VmT$3$1 = arg$VmT$1$.value;
        arg$VmT$4$1 = arg$VmT$1$.right;
        if (arg$VmT$0$1 instanceof kcfa2.VmR.class) {
          let inlinedVal1, scrut2, scrut3;
          scrut2 = xk < arg$VmT$2$1;
          if (scrut2 === true) {
            inlinedVal1 = kcfa2.LESS;
          } else {
            scrut3 = arg$VmT$2$1 < xk;
            if (scrut3 === true) {
              inlinedVal1 = kcfa2.GREATER;
            } else {
              inlinedVal1 = kcfa2.EQUAL;
            }
          }
          if (inlinedVal1 instanceof kcfa2.LESS.class) {
            c1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$1);
            if (c1 instanceof kcfa2.VmT.class) {
              arg$VmT$0$2 = c1.color;
              arg$VmT$1$2 = c1.left;
              arg$VmT$2$2 = c1.key;
              arg$VmT$3$2 = c1.value;
              arg$VmT$4$2 = c1.right;
              if (arg$VmT$0$2 instanceof kcfa2.VmR.class) {
                tmp3 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$2, arg$VmT$2$2, arg$VmT$3$2, arg$VmT$4$2);
                tmp4 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$1, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                return kcfa2.VmT(kcfa2.VmR, tmp3, arg$VmT$2$1, arg$VmT$3$1, tmp4)
              }
            }
            tmp2 = kcfa2.VmT(kcfa2.VmR, c1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$4$1);
            return kcfa2.VmT(kcfa2.VmB, tmp2, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          } else if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
            tmp5 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$1, xk, x, arg$VmT$4$1);
            return kcfa2.VmT(arg$VmT$0$, tmp5, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          } else if (inlinedVal1 instanceof kcfa2.GREATER.class) {
            d1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$1);
            if (d1 instanceof kcfa2.VmT.class) {
              arg$VmT$0$3 = d1.color;
              arg$VmT$1$3 = d1.left;
              arg$VmT$2$3 = d1.key;
              arg$VmT$3$3 = d1.value;
              arg$VmT$4$3 = d1.right;
              if (arg$VmT$0$3 instanceof kcfa2.VmR.class) {
                tmp7 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, arg$VmT$1$3);
                tmp8 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$3, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                return kcfa2.VmT(kcfa2.VmR, tmp7, arg$VmT$2$3, arg$VmT$3$3, tmp8)
              }
            }
            tmp6 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$1, arg$VmT$2$1, arg$VmT$3$1, d1);
            return kcfa2.VmT(kcfa2.VmB, tmp6, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp1 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$);
      return kcfa2.VmT(kcfa2.VmB, tmp1, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$)
    } else if (inlinedVal instanceof kcfa2.EQUAL.class) {
      return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, xk, x, arg$VmT$4$)
    } else if (inlinedVal instanceof kcfa2.GREATER.class) {
      if (arg$VmT$4$ instanceof kcfa2.VmT.class) {
        arg$VmT$0$4 = arg$VmT$4$.color;
        arg$VmT$1$4 = arg$VmT$4$.left;
        arg$VmT$2$4 = arg$VmT$4$.key;
        arg$VmT$3$4 = arg$VmT$4$.value;
        arg$VmT$4$4 = arg$VmT$4$.right;
        if (arg$VmT$0$4 instanceof kcfa2.VmR.class) {
          let inlinedVal1, scrut2, scrut3;
          scrut2 = xk < arg$VmT$2$4;
          if (scrut2 === true) {
            inlinedVal1 = kcfa2.LESS;
          } else {
            scrut3 = arg$VmT$2$4 < xk;
            if (scrut3 === true) {
              inlinedVal1 = kcfa2.GREATER;
            } else {
              inlinedVal1 = kcfa2.EQUAL;
            }
          }
          if (inlinedVal1 instanceof kcfa2.LESS.class) {
            c11 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$4);
            if (c11 instanceof kcfa2.VmT.class) {
              arg$VmT$0$5 = c11.color;
              arg$VmT$1$5 = c11.left;
              arg$VmT$2$5 = c11.key;
              arg$VmT$3$5 = c11.value;
              arg$VmT$4$5 = c11.right;
              if (arg$VmT$0$5 instanceof kcfa2.VmR.class) {
                tmp11 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$1$5);
                tmp12 = kcfa2.VmT(kcfa2.VmB, arg$VmT$4$5, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4);
                return kcfa2.VmT(kcfa2.VmR, tmp11, arg$VmT$2$5, arg$VmT$3$5, tmp12)
              }
            }
            tmp10 = kcfa2.VmT(kcfa2.VmR, c11, arg$VmT$2$4, arg$VmT$3$4, arg$VmT$4$4);
            return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp10)
          } else if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
            tmp13 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$4, xk, x, arg$VmT$4$4);
            return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp13)
          } else if (inlinedVal1 instanceof kcfa2.GREATER.class) {
            d11 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$4);
            if (d11 instanceof kcfa2.VmT.class) {
              arg$VmT$0$6 = d11.color;
              arg$VmT$1$6 = d11.left;
              arg$VmT$2$6 = d11.key;
              arg$VmT$3$6 = d11.value;
              arg$VmT$4$6 = d11.right;
              if (arg$VmT$0$6 instanceof kcfa2.VmR.class) {
                tmp15 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$1$4);
                tmp16 = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$6, arg$VmT$2$6, arg$VmT$3$6, arg$VmT$4$6);
                return kcfa2.VmT(kcfa2.VmR, tmp15, arg$VmT$2$4, arg$VmT$3$4, tmp16)
              }
            }
            tmp14 = kcfa2.VmT(kcfa2.VmR, arg$VmT$1$4, arg$VmT$2$4, arg$VmT$3$4, d11);
            return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp14)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp9 = ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$);
      return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, tmp9)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class kcfa {
  static {
    kcfa1 = this
  }
  static get [listPairAllEq$tailrec$accessorSymbol]() { return kcfa.#listPairAllEq$tailrec; }
  static get [listFoldl$tailrec$accessorSymbol]() { return kcfa.#listFoldl$tailrec; }
  static get [listMap$tailrec$accessorSymbol]() { return kcfa.#listMap$tailrec; }
  static get [listPairFoldl$accessorSymbol]() { return kcfa.#listPairFoldl; }
  static get [labelSame$accessorSymbol]() { return kcfa.#labelSame; }
  static get [varMapInsert$accessorSymbol]() { return kcfa.#varMapInsert; }
  static get [varMapFind$accessorSymbol]() { return kcfa.#varMapFind; }
  static get [varMapNext$accessorSymbol]() { return kcfa.#varMapNext; }
  static get [varMapLeft$accessorSymbol]() { return kcfa.#varMapLeft; }
  static get [compareLambda$accessorSymbol]() { return kcfa.#compareLambda; }
  static get [sameCall$accessorSymbol]() { return kcfa.#sameCall; }
  static get [bindCompare$accessorSymbol]() { return kcfa.#bindCompare; }
  static get [setNext$accessorSymbol]() { return kcfa.#setNext; }
  static get [setLeft$accessorSymbol]() { return kcfa.#setLeft; }
  static get [storeMapInsertWith$accessorSymbol]() { return kcfa.#storeMapInsertWith; }
  static get [storeMapFind$accessorSymbol]() { return kcfa.#storeMapFind; }
  static get [storeMapNext$accessorSymbol]() { return kcfa.#storeMapNext; }
  static get [storeMapLeft$accessorSymbol]() { return kcfa.#storeMapLeft; }
  static get [alloc$accessorSymbol]() { return kcfa.#alloc; }
  static {
    kcfa.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        kcfa.Cons.class = this
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
        kcfa.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    kcfa.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        kcfa.Some.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["value"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        kcfa.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    kcfa.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        kcfa.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class LESS {
      static {
        new this
      }
      constructor() {
        kcfa.LESS = this;
        Object.defineProperty(this, "class", {
          value: LESS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESS"];
    });
    (class EQUAL {
      static {
        new this
      }
      constructor() {
        kcfa.EQUAL = this;
        Object.defineProperty(this, "class", {
          value: EQUAL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQUAL"];
    });
    (class GREATER {
      static {
        new this
      }
      constructor() {
        kcfa.GREATER = this;
        Object.defineProperty(this, "class", {
          value: GREATER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATER"];
    });
    (class VmR {
      static {
        new this
      }
      constructor() {
        kcfa.VmR = this;
        Object.defineProperty(this, "class", {
          value: VmR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmR"];
    });
    (class VmB {
      static {
        new this
      }
      constructor() {
        kcfa.VmB = this;
        Object.defineProperty(this, "class", {
          value: VmB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmB"];
    });
    (class VmE {
      static {
        new this
      }
      constructor() {
        kcfa.VmE = this;
        Object.defineProperty(this, "class", {
          value: VmE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "VmE"];
    });
    kcfa.VmT = function VmT(color, left, key, value, right) {
      return globalThis.Object.freeze(new VmT.class(color, left, key, value, right));
    };
    (class VmT {
      static {
        kcfa.VmT.class = this
      }
      constructor(color, left, key, value, right) {
        this.color = color;
        this.left = left;
        this.key = key;
        this.value = value;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VmT", ["color", "left", "key", "value", "right"]];
    });
    kcfa.VmMAP = function VmMAP(nItems, tree) {
      return globalThis.Object.freeze(new VmMAP.class(nItems, tree));
    };
    (class VmMAP {
      static {
        kcfa.VmMAP.class = this
      }
      constructor(nItems, tree) {
        this.nItems = nItems;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VmMAP", ["nItems", "tree"]];
    });
    kcfa.VAR = function VAR(label, x) {
      return globalThis.Object.freeze(new VAR.class(label, x));
    };
    (class VAR {
      static {
        kcfa.VAR.class = this
      }
      constructor(label, x) {
        this.label = label;
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VAR", ["label", "x"]];
    });
    kcfa.LAMBDA = function LAMBDA(lam) {
      return globalThis.Object.freeze(new LAMBDA.class(lam));
    };
    (class LAMBDA {
      static {
        kcfa.LAMBDA.class = this
      }
      constructor(lam) {
        this.lam = lam;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LAMBDA", ["lam"]];
    });
    kcfa.CALL = function CALL(label, f, args) {
      return globalThis.Object.freeze(new CALL.class(label, f, args));
    };
    (class CALL {
      static {
        kcfa.CALL.class = this
      }
      constructor(label, f, args) {
        this.label = label;
        this.f = f;
        this.args = args;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CALL", ["label", "f", "args"]];
    });
    kcfa.RET = function RET(label, x) {
      return globalThis.Object.freeze(new RET.class(label, x));
    };
    (class RET {
      static {
        kcfa.RET.class = this
      }
      constructor(label, x) {
        this.label = label;
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "RET", ["label", "x"]];
    });
    kcfa.Bnd = function Bnd(x, t) {
      return globalThis.Object.freeze(new Bnd.class(x, t));
    };
    (class Bnd {
      static {
        kcfa.Bnd.class = this
      }
      constructor(x, t) {
        this.x = x;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Bnd", ["x", "t"]];
    });
    kcfa.Clos = function Clos(lam, benv) {
      return globalThis.Object.freeze(new Clos.class(lam, benv));
    };
    (class Clos {
      static {
        kcfa.Clos.class = this
      }
      constructor(lam, benv) {
        this.lam = lam;
        this.benv = benv;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Clos", ["lam", "benv"]];
    });
    (class SetR {
      static {
        new this
      }
      constructor() {
        kcfa.SetR = this;
        Object.defineProperty(this, "class", {
          value: SetR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetR"];
    });
    (class SetB {
      static {
        new this
      }
      constructor() {
        kcfa.SetB = this;
        Object.defineProperty(this, "class", {
          value: SetB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetB"];
    });
    (class SetE {
      static {
        new this
      }
      constructor() {
        kcfa.SetE = this;
        Object.defineProperty(this, "class", {
          value: SetE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetE"];
    });
    kcfa.SetT = function SetT(color, left, item, right) {
      return globalThis.Object.freeze(new SetT.class(color, left, item, right));
    };
    (class SetT {
      static {
        kcfa.SetT.class = this
      }
      constructor(color, left, item, right) {
        this.color = color;
        this.left = left;
        this.item = item;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetT", ["color", "left", "item", "right"]];
    });
    kcfa.SET = function SET(n, tree) {
      return globalThis.Object.freeze(new SET.class(n, tree));
    };
    (class SET {
      static {
        kcfa.SET.class = this
      }
      constructor(n, tree) {
        this.n = n;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SET", ["n", "tree"]];
    });
    (class SetZERO {
      static {
        new this
      }
      constructor() {
        kcfa.SetZERO = this;
        Object.defineProperty(this, "class", {
          value: SetZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SetZERO"];
    });
    kcfa.SetONE = function SetONE(item, tree, digit) {
      return globalThis.Object.freeze(new SetONE.class(item, tree, digit));
    };
    (class SetONE {
      static {
        kcfa.SetONE.class = this
      }
      constructor(item, tree, digit) {
        this.item = item;
        this.tree = tree;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetONE", ["item", "tree", "digit"]];
    });
    kcfa.SetTWO = function SetTWO(item1, tree1, item2, tree2, digit) {
      return globalThis.Object.freeze(new SetTWO.class(item1, tree1, item2, tree2, digit));
    };
    (class SetTWO {
      static {
        kcfa.SetTWO.class = this
      }
      constructor(item1, tree1, item2, tree2, digit) {
        this.item1 = item1;
        this.tree1 = tree1;
        this.item2 = item2;
        this.tree2 = tree2;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetTWO", ["item1", "tree1", "item2", "tree2", "digit"]];
    });
    (class SmR {
      static {
        new this
      }
      constructor() {
        kcfa.SmR = this;
        Object.defineProperty(this, "class", {
          value: SmR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmR"];
    });
    (class SmB {
      static {
        new this
      }
      constructor() {
        kcfa.SmB = this;
        Object.defineProperty(this, "class", {
          value: SmB
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmB"];
    });
    (class SmE {
      static {
        new this
      }
      constructor() {
        kcfa.SmE = this;
        Object.defineProperty(this, "class", {
          value: SmE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmE"];
    });
    kcfa.SmT = function SmT(color, left, key, value, right) {
      return globalThis.Object.freeze(new SmT.class(color, left, key, value, right));
    };
    (class SmT {
      static {
        kcfa.SmT.class = this
      }
      constructor(color, left, key, value, right) {
        this.color = color;
        this.left = left;
        this.key = key;
        this.value = value;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmT", ["color", "left", "key", "value", "right"]];
    });
    kcfa.SmMAP = function SmMAP(nItems, tree) {
      return globalThis.Object.freeze(new SmMAP.class(nItems, tree));
    };
    (class SmMAP {
      static {
        kcfa.SmMAP.class = this
      }
      constructor(nItems, tree) {
        this.nItems = nItems;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmMAP", ["nItems", "tree"]];
    });
    (class SmZERO {
      static {
        new this
      }
      constructor() {
        kcfa.SmZERO = this;
        Object.defineProperty(this, "class", {
          value: SmZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SmZERO"];
    });
    kcfa.SmONE = function SmONE(key, value, tree, digit) {
      return globalThis.Object.freeze(new SmONE.class(key, value, tree, digit));
    };
    (class SmONE {
      static {
        kcfa.SmONE.class = this
      }
      constructor(key, value, tree, digit) {
        this.key = key;
        this.value = value;
        this.tree = tree;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmONE", ["key", "value", "tree", "digit"]];
    });
    kcfa.SmTWO = function SmTWO(key1, value1, tree1, key2, value2, tree2, digit) {
      return globalThis.Object.freeze(new SmTWO.class(key1, value1, tree1, key2, value2, tree2, digit));
    };
    (class SmTWO {
      static {
        kcfa.SmTWO.class = this
      }
      constructor(key1, value1, tree1, key2, value2, tree2, digit) {
        this.key1 = key1;
        this.value1 = value1;
        this.tree1 = tree1;
        this.key2 = key2;
        this.value2 = value2;
        this.tree2 = tree2;
        this.digit = digit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SmTWO", ["key1", "value1", "tree1", "key2", "value2", "tree2", "digit"]];
    });
    kcfa.State = function State(call, benv, store, time) {
      return globalThis.Object.freeze(new State.class(call, benv, store, time));
    };
    (class State {
      static {
        kcfa.State.class = this
      }
      constructor(call, benv, store, time) {
        this.call = call;
        this.benv = benv;
        this.store = store;
        this.time = time;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["call", "benv", "store", "time"]];
    });
  }
  static #listPairAllEq$tailrec(pred, l1, l2) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
      if (l1 instanceof kcfa.Nil.class) {
        if (l2 instanceof kcfa.Nil.class) {
          return true
        }
        return false;
      } else if (l1 instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof kcfa.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          tmp = runtime.safeCall(pred(arg$Cons$0$, arg$Cons$0$1));
          if (tmp === true) {
            l1 = arg$Cons$1$;
            l2 = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #listCollate$tailrec(cmp, l1, l2) {
    loopLabel: while (true) {
      let order, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (l1 instanceof kcfa.Nil.class) {
        if (l2 instanceof kcfa.Nil.class) {
          return kcfa.EQUAL
        }
        return kcfa.LESS;
      }
      if (l2 instanceof kcfa.Nil.class) {
        return kcfa.GREATER
      }
      if (l1 instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof kcfa.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          order = runtime.safeCall(cmp(arg$Cons$0$, arg$Cons$0$1));
          if (order instanceof kcfa.EQUAL.class) {
            l1 = arg$Cons$1$;
            l2 = arg$Cons$1$1;
            continue loopLabel
          }
          return order;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listFoldl$tailrec(f, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof kcfa.Nil.class) {
        return init
      } else if (l instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listExists$tailrec(f, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof kcfa.Nil.class) {
        return false
      } else if (l instanceof kcfa.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$));
        if (tmp === false) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listMap$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof kcfa.Nil.class) {
      return kcfa.Nil
    } else if (l instanceof kcfa.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = kcfa.#listMap$tailrec(f, arg$Cons$1$);
      return kcfa.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intCompare(s1, s2) {
    let scrut, scrut1;
    scrut = s1 < s2;
    if (scrut === true) {
      return kcfa.LESS
    }
    scrut1 = s2 < s1;
    if (scrut1 === true) {
      return kcfa.GREATER
    }
    return kcfa.EQUAL;
  }
  static #stringCompare(s1, s2) {
    let scrut, scrut1;
    scrut = s1 < s2;
    if (scrut === true) {
      return kcfa.LESS
    }
    scrut1 = s2 < s1;
    if (scrut1 === true) {
      return kcfa.GREATER
    }
    return kcfa.EQUAL;
  }
  static #append(l1, l2) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l1 instanceof kcfa.Nil.class) {
      return l2
    } else if (l1 instanceof kcfa.Cons.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = kcfa.#append(arg$Cons$1$, l2);
      return kcfa.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listMap(f) {
    return (l) => {
      return kcfa.#listMap$tailrec(f, l)
    }
  }
  static #listCollate(cmp) {
    return (l1, l2) => {
      return kcfa.#listCollate$tailrec(cmp, l1, l2)
    }
  }
  static #listPairFoldl(f) {
    return (init) => {
      return (l1, l2) => {
        let kcfa2, f1, xs, ys, accum, inlinedVal;
        kcfa2 = kcfa;
        f1 = f;
        xs = l1;
        ys = l2;
        accum = init;
        inlinedLbl: {
          loopLabel: while (true) {
            let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
            if (xs instanceof kcfa2.Cons.class) {
              arg$Cons$0$ = xs.head;
              arg$Cons$1$ = xs.tail;
              if (ys instanceof kcfa2.Cons.class) {
                arg$Cons$0$1 = ys.head;
                arg$Cons$1$1 = ys.tail;
                tmp = runtime.safeCall(f1(arg$Cons$0$, arg$Cons$0$1, accum));
                xs = arg$Cons$1$;
                ys = arg$Cons$1$1;
                accum = tmp;
                continue loopLabel
              }
              inlinedVal = accum;
              break inlinedLbl;
            }
            inlinedVal = accum;
            break inlinedLbl;
          }
        }
        return inlinedVal
      }
    }
  }
  static #labelSame(l1, l2) {
    return l1 == l2
  }
  static #varMapInsert(map, xk, x) {
    let nItems1, scrut, arg$VmMAP$0$, arg$VmMAP$1$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp;
    if (map instanceof kcfa.VmMAP.class) {
      arg$VmMAP$0$ = map.nItems;
      arg$VmMAP$1$ = map.tree;
      nItems1 = new kcfa.Ref.class(arg$VmMAP$0$);
      scrut = ins(kcfa, xk, x, arg$VmMAP$0$, nItems1, arg$VmMAP$1$);
      if (scrut instanceof kcfa.VmT.class) {
        arg$VmT$1$ = scrut.left;
        arg$VmT$2$ = scrut.key;
        arg$VmT$3$ = scrut.value;
        arg$VmT$4$ = scrut.right;
        tmp = kcfa.VmT(kcfa.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
        return kcfa.VmMAP(nItems1.value, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #varMapFind(map, k) {
    let arg$VmMAP$1$;
    if (map instanceof kcfa.VmMAP.class) {
      let kcfa2, k1, t, inlinedVal;
      arg$VmMAP$1$ = map.tree;
      kcfa2 = kcfa;
      k1 = k;
      t = arg$VmMAP$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$;
          if (t instanceof kcfa2.VmE.class) {
            inlinedVal = kcfa2.None;
            break inlinedLbl
          } else if (t instanceof kcfa2.VmT.class) {
            let scrut, scrut1;
            arg$VmT$1$ = t.left;
            arg$VmT$2$ = t.key;
            arg$VmT$3$ = t.value;
            arg$VmT$4$ = t.right;
            scrut = k1 < arg$VmT$2$;
            if (scrut === true) {
              t = arg$VmT$1$;
              continue loopLabel
            }
            scrut1 = arg$VmT$2$ < k1;
            if (scrut1 === true) {
              t = arg$VmT$4$;
              continue loopLabel
            }
            inlinedVal = kcfa2.Some(arg$VmT$3$);
            break inlinedLbl;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #varMapNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$VmT$4$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.VmT.class) {
        arg$VmT$4$ = arg$Cons$0$.right;
        tmp = kcfa.#varMapLeft(arg$VmT$4$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.VmE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.VmE,
      kcfa.Nil
    ]);
  }
  static #varMapLeft(t, rest) {
    loopLabel: while (true) {
      let arg$VmT$1$, tmp;
      if (t instanceof kcfa.VmE.class) {
        return rest
      } else if (t instanceof kcfa.VmT.class) {
        arg$VmT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$VmT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #compareLambda(lam1, lam2) {
    let element0$, element0$1;
    if (runtime.Tuple.isArrayLike(lam1) && lam1.length === 3) {
      element0$ = runtime.Tuple.get(lam1, 0);
      runtime.Tuple.get(lam1, 1);
      runtime.Tuple.get(lam1, 2);
      if (runtime.Tuple.isArrayLike(lam2) && lam2.length === 3) {
        element0$1 = runtime.Tuple.get(lam2, 0);
        runtime.Tuple.get(lam2, 1);
        runtime.Tuple.get(lam2, 2);
        return kcfa.#intCompare(element0$, element0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #compareExp(e1, e2) {
    let arg$LAMBDA$0$, arg$LAMBDA$0$1, arg$VAR$1$, arg$VAR$1$1;
    if (e1 instanceof kcfa.VAR.class) {
      arg$VAR$1$ = e1.x;
      if (e2 instanceof kcfa.VAR.class) {
        arg$VAR$1$1 = e2.x;
        return kcfa.#stringCompare(arg$VAR$1$, arg$VAR$1$1)
      }
      return kcfa.LESS;
    }
    if (e2 instanceof kcfa.VAR.class) {
      return kcfa.GREATER
    }
    if (e1 instanceof kcfa.LAMBDA.class) {
      arg$LAMBDA$0$ = e1.lam;
      if (e2 instanceof kcfa.LAMBDA.class) {
        arg$LAMBDA$0$1 = e2.lam;
        return kcfa.#compareLambda(arg$LAMBDA$0$, arg$LAMBDA$0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sameCall(c1, c2) {
    let arg$RET$0$, arg$RET$0$1, arg$CALL$0$, arg$CALL$0$1;
    if (c1 instanceof kcfa.CALL.class) {
      arg$CALL$0$ = c1.label;
      if (c2 instanceof kcfa.CALL.class) {
        arg$CALL$0$1 = c2.label;
        return arg$CALL$0$ == arg$CALL$0$1
      }
      return false;
    } else if (c1 instanceof kcfa.RET.class) {
      arg$RET$0$ = c1.label;
      if (c2 instanceof kcfa.RET.class) {
        arg$RET$0$1 = c2.label;
        return arg$RET$0$ == arg$RET$0$1
      }
      return false;
    }
    return false;
  }
  static #timeCompare(t1, t2) {
    return kcfa.#listCollate(kcfa.#intCompare)(t1, t2)
  }
  static #bindCompare(b1, b2) {
    let order, arg$Bnd$0$, arg$Bnd$1$, arg$Bnd$0$1, arg$Bnd$1$1;
    if (b1 instanceof kcfa.Bnd.class) {
      arg$Bnd$0$ = b1.x;
      arg$Bnd$1$ = b1.t;
      if (b2 instanceof kcfa.Bnd.class) {
        arg$Bnd$0$1 = b2.x;
        arg$Bnd$1$1 = b2.t;
        order = kcfa.#stringCompare(arg$Bnd$0$, arg$Bnd$0$1);
        if (order instanceof kcfa.EQUAL.class) {
          return kcfa.#timeCompare(arg$Bnd$1$, arg$Bnd$1$1)
        }
        return order;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$SetT$3$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.SetT.class) {
        arg$SetT$3$ = arg$Cons$0$.right;
        tmp = kcfa.#setLeft(arg$SetT$3$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.SetE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.SetE,
      kcfa.Nil
    ]);
  }
  static #setLeft(t, rest) {
    loopLabel: while (true) {
      let arg$SetT$1$, tmp;
      if (t instanceof kcfa.SetE.class) {
        return rest
      } else if (t instanceof kcfa.SetT.class) {
        arg$SetT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$SetT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapInsertWith(comb) {
    return (map, xk, x) => {
      let nItems1, scrut, arg$SmMAP$0$, arg$SmMAP$1$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp;
      if (map instanceof kcfa.SmMAP.class) {
        arg$SmMAP$0$ = map.nItems;
        arg$SmMAP$1$ = map.tree;
        nItems1 = new kcfa.Ref.class(arg$SmMAP$0$);
        scrut = ins1(kcfa, comb, xk, x, arg$SmMAP$0$, nItems1, arg$SmMAP$1$);
        if (scrut instanceof kcfa.SmT.class) {
          arg$SmT$1$ = scrut.left;
          arg$SmT$2$ = scrut.key;
          arg$SmT$3$ = scrut.value;
          arg$SmT$4$ = scrut.right;
          tmp = kcfa.SmT(kcfa.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$);
          return kcfa.SmMAP(nItems1.value, tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapFind(map, k) {
    let arg$SmMAP$1$;
    if (map instanceof kcfa.SmMAP.class) {
      let kcfa2, k1, t, inlinedVal;
      arg$SmMAP$1$ = map.tree;
      kcfa2 = kcfa;
      k1 = k;
      t = arg$SmMAP$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$;
          if (t instanceof kcfa2.SmE.class) {
            inlinedVal = kcfa2.None;
            break inlinedLbl
          } else if (t instanceof kcfa2.SmT.class) {
            arg$SmT$1$ = t.left;
            arg$SmT$2$ = t.key;
            arg$SmT$3$ = t.value;
            arg$SmT$4$ = t.right;
            scrut = kcfa2.#bindCompare(k1, arg$SmT$2$);
            if (scrut instanceof kcfa2.LESS.class) {
              t = arg$SmT$1$;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              inlinedVal = kcfa2.Some(arg$SmT$3$);
              break inlinedLbl
            } else if (scrut instanceof kcfa2.GREATER.class) {
              t = arg$SmT$4$;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeMapNext(stack) {
    let arg$Cons$0$, arg$Cons$1$, arg$SmT$4$, tmp;
    if (stack instanceof kcfa.Cons.class) {
      arg$Cons$0$ = stack.head;
      arg$Cons$1$ = stack.tail;
      if (arg$Cons$0$ instanceof kcfa.SmT.class) {
        arg$SmT$4$ = arg$Cons$0$.right;
        tmp = kcfa.#storeMapLeft(arg$SmT$4$, arg$Cons$1$);
        return globalThis.Object.freeze([
          arg$Cons$0$,
          tmp
        ])
      }
      return globalThis.Object.freeze([
        kcfa.SmE,
        kcfa.Nil
      ]);
    }
    return globalThis.Object.freeze([
      kcfa.SmE,
      kcfa.Nil
    ]);
  }
  static #storeMapLeft(t, rest) {
    loopLabel: while (true) {
      let arg$SmT$1$, tmp;
      if (t instanceof kcfa.SmE.class) {
        return rest
      } else if (t instanceof kcfa.SmT.class) {
        arg$SmT$1$ = t.left;
        tmp = kcfa.Cons(t, rest);
        t = arg$SmT$1$;
        rest = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #alloc(t) {
    return (x) => {
      return kcfa.Bnd(x, t)
    }
  }
  static #insertExp(exp, exps) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (exps instanceof kcfa.Nil.class) {
      return kcfa.Cons(exp, kcfa.Nil)
    } else if (exps instanceof kcfa.Cons.class) {
      arg$Cons$0$ = exps.head;
      arg$Cons$1$ = exps.tail;
      scrut = kcfa.#compareExp(exp, arg$Cons$0$);
      if (scrut instanceof kcfa.LESS.class) {
        tmp = kcfa.#insertExp(exp, arg$Cons$1$);
        return kcfa.Cons(arg$Cons$0$, tmp)
      } else if (scrut instanceof kcfa.GREATER.class) {
        tmp1 = kcfa.Cons(arg$Cons$0$, arg$Cons$1$);
        return kcfa.Cons(exp, tmp1)
      } else if (scrut instanceof kcfa.EQUAL.class) {
        return kcfa.Cons(arg$Cons$0$, arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoStoreUpdate(mst, x, exp) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (mst instanceof kcfa.Nil.class) {
      tmp = kcfa.Cons(exp, kcfa.Nil);
      tmp1 = globalThis.Object.freeze([
        x,
        tmp
      ]);
      return kcfa.Cons(tmp1, kcfa.Nil)
    } else if (mst instanceof kcfa.Cons.class) {
      arg$Cons$0$ = mst.head;
      arg$Cons$1$ = mst.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = kcfa.#stringCompare(x, element0$);
        if (scrut instanceof kcfa.LESS.class) {
          tmp2 = globalThis.Object.freeze([
            element0$,
            element1$
          ]);
          tmp3 = kcfa.#monoStoreUpdate(arg$Cons$1$, x, exp);
          return kcfa.Cons(tmp2, tmp3)
        } else if (scrut instanceof kcfa.GREATER.class) {
          tmp4 = kcfa.Cons(exp, kcfa.Nil);
          tmp5 = globalThis.Object.freeze([
            x,
            tmp4
          ]);
          tmp6 = globalThis.Object.freeze([
            element0$,
            element1$
          ]);
          tmp7 = kcfa.Cons(tmp6, arg$Cons$1$);
          return kcfa.Cons(tmp5, tmp7)
        } else if (scrut instanceof kcfa.EQUAL.class) {
          tmp8 = kcfa.#insertExp(exp, element1$);
          tmp9 = globalThis.Object.freeze([
            element0$,
            tmp8
          ]);
          return kcfa.Cons(tmp9, arg$Cons$1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let lambdaLabel, lambda$here, tmp, inlinedVal, inlinedVal1, seen, todo, inlinedVal2, labelCount, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, tmp12, tmp13, inlinedVal18, tmp14, n, n1, n2, tmp15, n3, n4, tmp16, n5, n6, tmp17, n7, n8, n9, tmp18, n10, n11, n12, tmp19, n13, n14, n15, n16, inlinedVal19, f, inlinedVal20, eta$0$0, inlinedVal21, inlinedVal22, kcfa2, f1, inlinedVal23, arg$SmMAP$1$;
    lambdaLabel = main_lambda$$lambda$(kcfa);
    labelCount = new kcfa1.Ref.class(1);
    tmp1 = kcfa1.Cons("k", kcfa1.Nil);
    tmp2 = kcfa1.Cons("x", tmp1);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    inlinedVal3 = kcfa1.VAR(undefined, "k");
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    inlinedVal4 = kcfa1.VAR(undefined, "x");
    tmp3 = kcfa1.Cons(inlinedVal4, kcfa1.Nil);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal5 = kcfa1.CALL(n14, inlinedVal3, tmp3);
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    tmp19 = globalThis.Object.freeze([
      n13,
      tmp2,
      inlinedVal5
    ]);
    inlinedVal6 = kcfa1.LAMBDA(tmp19);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal7 = kcfa1.VAR(undefined, "id");
    tmp4 = kcfa1.Cons("z", kcfa1.Nil);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    inlinedVal8 = kcfa1.RET(n11, undefined);
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    tmp18 = globalThis.Object.freeze([
      n10,
      tmp4,
      inlinedVal8
    ]);
    inlinedVal9 = kcfa1.LAMBDA(tmp18);
    tmp5 = kcfa1.Cons("a", kcfa1.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal10 = kcfa1.VAR(undefined, "id");
    tmp6 = kcfa1.Cons("y", kcfa1.Nil);
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    inlinedVal11 = kcfa1.RET(n8, undefined);
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    tmp17 = globalThis.Object.freeze([
      n7,
      tmp6,
      inlinedVal11
    ]);
    inlinedVal12 = kcfa1.LAMBDA(tmp17);
    tmp7 = kcfa1.Cons("b", kcfa1.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal13 = kcfa1.RET(n6, undefined);
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp16 = globalThis.Object.freeze([
      n5,
      tmp7,
      inlinedVal13
    ]);
    inlinedVal14 = kcfa1.LAMBDA(tmp16);
    tmp8 = kcfa1.Cons(inlinedVal14, kcfa1.Nil);
    tmp9 = kcfa1.Cons(inlinedVal12, tmp8);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal15 = kcfa1.CALL(n4, inlinedVal10, tmp9);
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp15 = globalThis.Object.freeze([
      n3,
      tmp5,
      inlinedVal15
    ]);
    inlinedVal16 = kcfa1.LAMBDA(tmp15);
    tmp10 = kcfa1.Cons(inlinedVal16, kcfa1.Nil);
    tmp11 = kcfa1.Cons(inlinedVal9, tmp10);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal17 = kcfa1.CALL(n2, inlinedVal7, tmp11);
    tmp12 = kcfa1.Cons("id", kcfa1.Nil);
    n = labelCount.value + 1;
    labelCount.value = n;
    tmp14 = globalThis.Object.freeze([
      n,
      tmp12,
      inlinedVal17
    ]);
    inlinedVal18 = kcfa1.LAMBDA(tmp14);
    tmp13 = kcfa1.Cons(inlinedVal6, kcfa1.Nil);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    inlinedVal = kcfa1.CALL(n1, inlinedVal18, tmp13);
    inlinedVal21 = kcfa1.VmMAP(0, kcfa1.VmE);
    inlinedVal22 = kcfa1.SmMAP(0, kcfa1.SmE);
    inlinedVal1 = kcfa1.State(inlinedVal, inlinedVal21, inlinedVal22, kcfa1.Nil);
    tmp = kcfa1.Cons(inlinedVal1, kcfa1.Nil);
    seen = kcfa1.Nil;
    todo = tmp;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp20, tmp21;
        if (todo instanceof kcfa1.Nil.class) {
          inlinedVal2 = seen;
          break inlinedLbl
        } else if (todo instanceof kcfa1.Cons.class) {
          let f2, inlinedVal24;
          arg$Cons$0$ = todo.head;
          arg$Cons$1$ = todo.tail;
          f2 = main_doit_explore_member_lambda$$lambda$(kcfa1, arg$Cons$0$);
          inlinedVal24 = kcfa1.#listExists$tailrec(f2, seen);
          if (inlinedVal24 === true) {
            todo = arg$Cons$1$;
            continue loopLabel
          }
          {
            let inlinedVal25, arg$State$0$, arg$State$1$, arg$State$2$, arg$CALL$1$, arg$CALL$2$;
            tmp20 = kcfa1.Cons(arg$Cons$0$, seen);
            if (arg$Cons$0$ instanceof kcfa1.State.class) {
              arg$State$0$ = arg$Cons$0$.call;
              arg$State$1$ = arg$Cons$0$.benv;
              arg$State$2$ = arg$Cons$0$.store;
              if (arg$State$0$ instanceof kcfa1.CALL.class) {
                let inlinedVal26, f3, inlinedVal27, f4, init, inlinedVal28, arg$CALL$0$, arg$SET$1$;
                arg$CALL$1$ = arg$State$0$.f;
                arg$CALL$2$ = arg$State$0$.args;
                if (arg$State$0$ instanceof kcfa1.CALL.class) {
                  let kcfa3, inlinedVal29, arg$LAMBDA$0$, arg$VAR$1$, tmp22;
                  arg$CALL$0$ = arg$State$0$.label;
                  inlinedVal26 = kcfa1.Cons(arg$CALL$0$, kcfa1.Nil);
                  kcfa3 = kcfa1;
                  if (arg$CALL$1$ instanceof kcfa3.VAR.class) {
                    let scrut, scrut1, arg$Some$0$;
                    arg$VAR$1$ = arg$CALL$1$.x;
                    scrut1 = kcfa1.#varMapFind(arg$State$1$, arg$VAR$1$);
                    if (scrut1 instanceof kcfa3.Some.class) {
                      arg$Some$0$ = scrut1.value;
                      scrut = kcfa1.#storeMapFind(arg$State$2$, arg$Some$0$);
                      if (scrut instanceof kcfa3.Some.class) {
                        inlinedVal29 = scrut.value;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else if (arg$CALL$1$ instanceof kcfa3.LAMBDA.class) {
                    let tmp23;
                    arg$LAMBDA$0$ = arg$CALL$1$.lam;
                    tmp22 = kcfa1.Clos(arg$LAMBDA$0$, arg$State$1$);
                    tmp23 = kcfa1.SetT(undefined, kcfa1.SetE, tmp22, kcfa1.SetE);
                    inlinedVal29 = kcfa1.SET(undefined, tmp23);
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  f3 = main_doit_explore_absNext_atomEval_eval$$eval$(kcfa1, arg$State$1$, arg$State$2$);
                  inlinedVal27 = kcfa1.#listMap$tailrec(f3, arg$CALL$2$);
                  f4 = main_doit_explore_absNext_apply$$apply$(kcfa1, arg$State$2$, inlinedVal26, inlinedVal27);
                  init = kcfa1.Nil;
                  if (inlinedVal29 instanceof kcfa1.SET.class) {
                    arg$SET$1$ = inlinedVal29.tree;
                    inlinedVal28 = foldf(kcfa1, f4, arg$SET$1$, init);
                    inlinedVal25 = inlinedVal28;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                inlinedVal25 = kcfa1.Nil;
              }
            } else {
              inlinedVal25 = kcfa1.Nil;
            }
            tmp21 = kcfa1.#append(inlinedVal25, arg$Cons$1$);
            seen = tmp20;
            todo = tmp21;
            continue loopLabel;
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal19 = kcfa1.SmMAP(undefined, kcfa1.SmE);
    f = main_doit_summarize_lambda$$lambda$(kcfa1);
    inlinedVal20 = kcfa1.#listFoldl$tailrec(f, inlinedVal19, inlinedVal2);
    eta$0$0 = kcfa1.Nil;
    kcfa2 = kcfa1;
    f1 = main_doit_monovariantStore_lambda$$lambda$(kcfa1);
    if (inlinedVal20 instanceof kcfa2.SmMAP.class) {
      arg$SmMAP$1$ = inlinedVal20.tree;
      inlinedVal23 = foldf1(kcfa1, f1, arg$SmMAP$1$, eta$0$0);
      lambda$here = lambda$2(kcfa, lambdaLabel);
      return kcfa.#listMap(lambda$here)(inlinedVal23)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "kcfa"];
});
export { ins as _$_modulePrivate_$_ins };
export { incr as _$_modulePrivate_$_incr };
export { foldf as _$_modulePrivate_$_foldf };
export { ins1 as _$_modulePrivate_$_ins1 };
export { foldf1 as _$_modulePrivate_$_foldf1 };
export { incr1 as _$_modulePrivate_$_incr1 };
export { kcfa1 as _$_modulePrivate_$_kcfa };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { main_doit_summarize_lambda$_lambda_setUnion$setUnion as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion$setUnion };
export { main_doit_summarize_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda$lambda };
export { main_doit_summarize_lambda$$lambda$ as _$_modulePrivate_$_main_doit_summarize_lambda$$lambda$ };
export { main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare };
export { main_doit_explore_member_lambda$_stateSame$stateSame as _$_modulePrivate_$_main_doit_explore_member_lambda$_stateSame$stateSame };
export { main_doit_explore_member_lambda$$lambda$ as _$_modulePrivate_$_main_doit_explore_member_lambda$$lambda$ };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion };
export { main_doit_explore_absNext_apply$_apply_lambda$$lambda$ as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$$lambda$ };
export { main_doit_explore_absNext_apply$_apply$apply as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply$apply };
export { main_doit_explore_absNext_apply$$apply$ as _$_modulePrivate_$_main_doit_explore_absNext_apply$$apply$ };
export { main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ };
export { main_doit_monovariantStore_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda$lambda };
export { main_doit_monovariantStore_lambda$$lambda$ as _$_modulePrivate_$_main_doit_monovariantStore_lambda$$lambda$ };
export { doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { doit_summarize_lambda$_lambda_setUnion_ins_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr };
export { doit_summarize_lambda$_lambda_setUnion_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_incr$incr };
export { doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 };
export { doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 };
export { doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 };
export { doit_summarize_lambda$_lambda_union$_union_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_incr$incr };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 };
export { main_doit_explore_absNext_atomEval_eval$_eval$eval as _$_modulePrivate_$_main_doit_explore_absNext_atomEval_eval$_eval$eval };
export { main_doit_explore_absNext_atomEval_eval$$eval$ as _$_modulePrivate_$_main_doit_explore_absNext_atomEval_eval$$eval$ };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr1 };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr2 };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_incr$incr };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_ins_incr$incr3 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr };
export { main_doit_summarize_lambda$_lambda_union$_union_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_incr$incr };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns };
export { main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr };
export { main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr1 };
export { main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr2 };
export { main_doit_summarize_lambda$_lambda_setUnion_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_incr$incr };
export { main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_ins_incr$incr3 };
export { main_lambda$_lambda$lambda as _$_modulePrivate_$_main_lambda$_lambda$lambda };
export { main_lambda$$lambda$ as _$_modulePrivate_$_main_lambda$$lambda$ };
export default kcfa1;
