const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const labelSame$accessorSymbol = globalThis.Symbol("labelSame");
const varMapInsert$accessorSymbol = globalThis.Symbol("varMapInsert");
const varMapNext$accessorSymbol = globalThis.Symbol("varMapNext");
const varMapLeft$accessorSymbol = globalThis.Symbol("varMapLeft");
const compareLambda$accessorSymbol = globalThis.Symbol("compareLambda");
const sameCall$accessorSymbol = globalThis.Symbol("sameCall");
const bindCompare$accessorSymbol = globalThis.Symbol("bindCompare");
const setNext$accessorSymbol = globalThis.Symbol("setNext");
const setLeft$accessorSymbol = globalThis.Symbol("setLeft");
const storeMapInsertWith$accessorSymbol = globalThis.Symbol("storeMapInsertWith");
const storeMapNext$accessorSymbol = globalThis.Symbol("storeMapNext");
const storeMapLeft$accessorSymbol = globalThis.Symbol("storeMapLeft");
const storeMapWrap$accessorSymbol = globalThis.Symbol("storeMapWrap");
const storeMapIns$accessorSymbol = globalThis.Symbol("storeMapIns");
const alloc$accessorSymbol = globalThis.Symbol("alloc");
const monoStoreUpdate$accessorSymbol = globalThis.Symbol("monoStoreUpdate");
const listMap$tailrec$accessorSymbol = globalThis.Symbol("listMap$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
const listPairAllEq$tailrec$accessorSymbol = globalThis.Symbol("listPairAllEq$tailrec");
let foldf, ins, find1, cmp, cmp1, incr, link, union1, ins1, foldf1, ins2, find11, foldf2, cmp2, incr1, link1, union, eval1, apply, return_, newLabel, lambda, var_, mkLet, call, kcfa1, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, union$, lambda$5, eval$, apply$, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, main_doit_summarize_lambda$_lambda_setUnion$setUnion, main_doit_summarize_lambda$_lambda$lambda, main_doit_summarize_lambda$$lambda$, main_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare, main_doit_explore_member_lambda$_stateSame$stateSame, main_doit_explore_member_lambda$$lambda$, main_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion, main_doit_explore_absNext_apply$_apply_lambda$$lambda$, main_doit_explore_absNext_apply$_apply$apply, main_doit_explore_absNext_apply$$apply$, doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion, doit_explore_absNext_apply$_apply_lambda$$lambda$, doit_explore_absNext_apply$_apply$apply, doit_explore_absNext_apply$$apply$, doit_explore_member_lambda$_stateSame$stateSame, doit_explore_member_lambda$$lambda$, doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare, doit_summarize_lambda$_lambda_setUnion$setUnion, doit_summarize_lambda$_lambda$lambda, doit_summarize_lambda$$lambda$, summarize_lambda$_lambda_setUnion$setUnion, summarize_lambda$_lambda$lambda, summarize_lambda$$lambda$, explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare, explore_member_lambda$_stateSame$stateSame, explore_member_lambda$$lambda$, explore_absNext_apply$_apply_lambda$_setUnion$setUnion, explore_absNext_apply$_apply_lambda$$lambda$, explore_absNext_apply$_apply$apply, explore_absNext_apply$$apply$, member_lambda$_stateSame$stateSame, member_lambda$$lambda$, member_lambda$_stateSame_storeCompare_setCompare$setCompare, absNext_apply$_apply_lambda$_setUnion$setUnion, absNext_apply$_apply_lambda$$lambda$, absNext_apply$_apply$apply, absNext_apply$$apply$, stateSame_storeCompare_setCompare$setCompare, storeJoin_setUnion$setUnion, storeUpdate1_lambda$_setUnion$setUnion, storeUpdate1_lambda$$lambda$, storeUpdate_setUnion$setUnion, storeCompare_setCompare$setCompare, lambda_setUnion$setUnion, lambda$_setUnion$setUnion, apply_lambda$_setUnion$setUnion, apply_lambda$$lambda$, apply$_apply_lambda$_setUnion$setUnion, apply$_apply_lambda$$lambda$, apply$_apply$apply, lambda_stateSame_storeCompare_setCompare$setCompare, lambda$_stateSame_storeCompare_setCompare$setCompare, lambda$_stateSame$stateSame, lambda_setUnion$setUnion1, lambda$_lambda_setUnion$setUnion, lambda$_lambda$lambda, main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$, main_doit_monovariantStore_lambda$_lambda$lambda, main_doit_monovariantStore_lambda$$lambda$, doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, doit_monovariantStore_lambda$_lambda_lambda$$lambda$, doit_monovariantStore_lambda$_lambda$lambda, doit_monovariantStore_lambda$$lambda$, monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, monovariantStore_lambda$_lambda_lambda$$lambda$, monovariantStore_lambda$_lambda$lambda, monovariantStore_lambda$$lambda$, lambda_lambda$_monoStoreUpdate_insertExp$insertExp, lambda_lambda$_monoStoreUpdate$monoStoreUpdate, lambda_lambda$$lambda$, lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp, lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate, lambda$_lambda_lambda$$lambda$, lambda$_lambda$lambda1, doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr, doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1, doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2, doit_summarize_lambda$_lambda_setUnion_union1_incr$incr, doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr, doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1, doit_summarize_lambda$_lambda_union$_union_incr$incr, doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2, doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr, doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1, doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2, doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr, doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3, doit_explore_absNext_atomEval_eval$_eval$eval, doit_explore_absNext_atomEval_eval$$eval$, main_doit_explore_absNext_atomEval_eval$_eval$eval, main_doit_explore_absNext_atomEval_eval$$eval$, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2, main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr, main_doit_summarize_lambda$_lambda_union$_union_incr$incr, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2, main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns, main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr, main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr, main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1, main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2, main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3, main_lambda$_lambda$lambda, main_lambda$$lambda$, summarize_lambda$_lambda_union$_union$union, summarize_lambda$_lambda_union$$union$, storeJoin_storeMapUnionWith_union$_union$union, storeJoin_storeMapUnionWith_union$$union$, storeMapUnionWith_union$_union$union, storeMapUnionWith_union$$union$, storeMapCollate_lambda$_lambda$lambda, storeMapCollate_lambda$$lambda$, varMapCollate_lambda$_lambda$lambda, varMapCollate_lambda$$lambda$, lambda$_lambda$lambda2, lambda$_lambda$lambda3, union$_union$union, lambda_union$_union$union, lambda_union$$union$, lambda$_lambda_union$_union$union, lambda$_lambda_union$$union$, mkLet$worker, call$worker, lambda$worker;
main_doit_summarize_lambda$_lambda_setUnion$setUnion = function main_doit_summarize_lambda$_lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = globalThis.Object.freeze([
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
                          inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                  inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
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
                      inlinedVal4 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              inlinedVal2 = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
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
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                          inlinedVal2 = inlinedVal3;
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
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
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
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa3.GREATER;
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
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = globalThis.Object.freeze([
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
                          inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                  inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
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
                      inlinedVal4 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              inlinedVal2 = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
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
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = main_doit_explore_absNext_apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
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
doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion = function doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = globalThis.Object.freeze([
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
                          inlinedVal4 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                  inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                            inlinedVal5 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
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
                      inlinedVal4 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              inlinedVal2 = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
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
doit_explore_absNext_apply$_apply_lambda$$lambda$ = function doit_explore_absNext_apply$_apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
doit_explore_absNext_apply$_apply$apply = function doit_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = doit_explore_absNext_apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$$apply$ = function doit_explore_absNext_apply$$apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return doit_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
doit_explore_member_lambda$_stateSame$stateSame = function doit_explore_member_lambda$_stateSame$stateSame(state1, state2) {
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
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa3.GREATER;
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
                    cmpRng2 = doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare;
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
doit_explore_member_lambda$$lambda$ = function doit_explore_member_lambda$$lambda$(kcfa2, st) {
  return (st1) => {
    return doit_explore_member_lambda$_stateSame$stateSame(st, st1)
  }
};
doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare = function doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                          inlinedVal2 = inlinedVal3;
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
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion$setUnion = function doit_summarize_lambda$_lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = globalThis.Object.freeze([
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
                          inlinedVal4 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                  inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                        inlinedVal4 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                inlinedVal2 = inlinedVal3;
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
                                              let scrut2, scrut3;
                                              arg$VmT$2$1 = element0$5.key;
                                              arg$VmT$3$1 = element0$5.value;
                                              scrut2 = arg$VmT$2$ < arg$VmT$2$1;
                                              if (scrut2 === true) {
                                                inlinedVal7 = kcfa4.LESS;
                                                break inlinedLbl1
                                              }
                                              scrut3 = arg$VmT$2$1 < arg$VmT$2$;
                                              if (scrut3 === true) {
                                                inlinedVal7 = kcfa4.GREATER;
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
                            inlinedVal5 = doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            n = tmp;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                            let inlinedVal5;
                            tmp1 = n + 1;
                            inlinedVal5 = doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                            t1 = element1$1;
                            t2 = element1$2;
                            n = tmp1;
                            result = inlinedVal5;
                            continue loopLabel
                          } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                            let inlinedVal5;
                            tmp2 = n + 1;
                            inlinedVal5 = doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
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
                      inlinedVal4 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              inlinedVal2 = inlinedVal3;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let kcfa3, t11, d, inlinedVal3;
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
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
doit_summarize_lambda$_lambda$lambda = function doit_summarize_lambda$_lambda$lambda(kcfa2, state, sum) {
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
        mergeFn = doit_summarize_lambda$_lambda_setUnion$setUnion;
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
                  inlinedVal2 = doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p2, n, result1);
                  break inlinedLbl;
                }
                inlinedVal2 = doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p2, n, result1);
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
                          inlinedVal4 = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
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
                      inlinedVal3 = doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$, arg$SmT$3$, kcfa3.SmE, result1);
                      t1 = element1$1;
                      n = tmp;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.EQUAL.class) {
                      let inlinedVal3;
                      tmp1 = n + 1;
                      tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
                      inlinedVal3 = doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$, tmp2, kcfa3.SmE, result1);
                      t1 = element1$1;
                      t2 = element1$2;
                      n = tmp1;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.GREATER.class) {
                      let inlinedVal3;
                      tmp3 = n + 1;
                      inlinedVal3 = doit_summarize_lambda$_lambda_union$_union_incr$incr(kcfa3, arg$SmT$2$1, arg$SmT$3$1, kcfa3.SmE, result1);
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
                        inlinedVal4 = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
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
doit_summarize_lambda$$lambda$ = function doit_summarize_lambda$$lambda$(kcfa2) {
  return (state, sum) => {
    return doit_summarize_lambda$_lambda$lambda(kcfa2, state, sum)
  }
};
summarize_lambda$_lambda_setUnion$setUnion = function summarize_lambda$_lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
summarize_lambda$_lambda$lambda = function summarize_lambda$_lambda$lambda(kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let union$here;
    arg$State$2$ = state.store;
    union$here = summarize_lambda$_lambda_union$$union$(kcfa2, summarize_lambda$_lambda_setUnion$setUnion);
    return kcfa2[storeMapWrap$accessorSymbol](union$here)(arg$State$2$, sum)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
summarize_lambda$$lambda$ = function summarize_lambda$$lambda$(kcfa2) {
  return (state, sum) => {
    return summarize_lambda$_lambda$lambda(kcfa2, state, sum)
  }
};
explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare = function explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
explore_member_lambda$_stateSame$stateSame = function explore_member_lambda$_stateSame$stateSame(state1, state2) {
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
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa3.GREATER;
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
                    cmpRng2 = explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare;
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
explore_member_lambda$$lambda$ = function explore_member_lambda$$lambda$(kcfa2, st) {
  return (st1) => {
    return explore_member_lambda$_stateSame$stateSame(st, st1)
  }
};
explore_absNext_apply$_apply_lambda$_setUnion$setUnion = function explore_absNext_apply$_apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
explore_absNext_apply$_apply_lambda$$lambda$ = function explore_absNext_apply$_apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](explore_absNext_apply$_apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
explore_absNext_apply$_apply$apply = function explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = explore_absNext_apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
explore_absNext_apply$$apply$ = function explore_absNext_apply$$apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
member_lambda$_stateSame$stateSame = function member_lambda$_stateSame$stateSame(state1, state2) {
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
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa3.GREATER;
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
                    cmpRng2 = member_lambda$_stateSame_storeCompare_setCompare$setCompare;
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
member_lambda$$lambda$ = function member_lambda$$lambda$(kcfa2, st) {
  return (st1) => {
    return member_lambda$_stateSame$stateSame(st, st1)
  }
};
member_lambda$_stateSame_storeCompare_setCompare$setCompare = function member_lambda$_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
absNext_apply$_apply_lambda$_setUnion$setUnion = function absNext_apply$_apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
absNext_apply$_apply_lambda$$lambda$ = function absNext_apply$_apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](absNext_apply$_apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
absNext_apply$_apply$apply = function absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = absNext_apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
absNext_apply$$apply$ = function absNext_apply$$apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
stateSame_storeCompare_setCompare$setCompare = function stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
storeJoin_setUnion$setUnion = function storeJoin_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
storeUpdate1_lambda$_setUnion$setUnion = function storeUpdate1_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
storeUpdate1_lambda$$lambda$ = function storeUpdate1_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](storeUpdate1_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
storeUpdate_setUnion$setUnion = function storeUpdate_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
storeCompare_setCompare$setCompare = function storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_setUnion$setUnion = function lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_setUnion$setUnion = function lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
apply_lambda$_setUnion$setUnion = function apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
apply_lambda$$lambda$ = function apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
apply$_apply_lambda$_setUnion$setUnion = function apply$_apply_lambda$_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
apply$_apply_lambda$$lambda$ = function apply$_apply_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](apply$_apply_lambda$_setUnion$setUnion)(st, adr, dv)
  }
};
apply$_apply$apply = function apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = apply$_apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_stateSame_storeCompare_setCompare$setCompare = function lambda_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_stateSame_storeCompare_setCompare$setCompare = function lambda$_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa2.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa2.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa2.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                inlinedVal2 = kcfa2.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$.item;
                if (element0$1 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$1.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$2 = runtime.Tuple.get(p11, 0);
                                  element1$2 = runtime.Tuple.get(p11, 1);
                                  if (element0$2 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    element1$3 = runtime.Tuple.get(p21, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$2.key;
                                      arg$VmT$3$ = element0$2.value;
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$3.key;
                                        arg$VmT$3$1 = element0$3.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$2;
                                          t21 = element1$3;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$2 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$3 = runtime.Tuple.get(p21, 0);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = inlinedVal3;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            if (element0$1 instanceof kcfa2.SetE.class) {
              inlinedVal2 = kcfa2.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_stateSame$stateSame = function lambda$_stateSame$stateSame(state1, state2) {
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
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa3.GREATER;
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
                    cmpRng2 = lambda$_stateSame_storeCompare_setCompare$setCompare;
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
lambda_setUnion$setUnion1 = function lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_setUnion$setUnion = function lambda$_lambda_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, element1$, element0$;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let inlinedVal, inlinedVal1, kcfa2, t1, t2, n, result, inlinedVal2;
      arg$SET$1$1 = set2.tree;
      inlinedVal = kcfa1[setLeft$accessorSymbol](arg$SET$1$, kcfa1.Nil);
      inlinedVal1 = kcfa1[setLeft$accessorSymbol](arg$SET$1$1, kcfa1.Nil);
      kcfa2 = kcfa1;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      n = 0;
      result = kcfa1.SetZERO;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$1 = runtime.Tuple.get(p1, 0);
            element1$1 = runtime.Tuple.get(p1, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = globalThis.Object.freeze([
                    n,
                    result
                  ]);
                  break inlinedLbl
                }
                inlinedVal2 = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              inlinedVal2 = ins1(kcfa2, p2, n, result);
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              element1$2 = runtime.Tuple.get(p2, 1);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal2 = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              if (element0$1 instanceof kcfa2.SetT.class) {
                arg$SetT$2$ = element0$1.item;
                if (element0$2 instanceof kcfa2.SetT.class) {
                  let inlinedVal3, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                  arg$SetT$2$1 = element0$2.item;
                  if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                    arg$Clos$0$ = arg$SetT$2$.lam;
                    arg$Clos$1$ = arg$SetT$2$.benv;
                    if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                      arg$Clos$0$1 = arg$SetT$2$1.lam;
                      arg$Clos$1$1 = arg$SetT$2$1.benv;
                      order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                      if (order instanceof kcfa1.EQUAL.class) {
                        let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let inlinedVal4, inlinedVal5, kcfa4, cmpRng1, t11, t21, inlinedVal6;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            inlinedVal4 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                            inlinedVal5 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                            kcfa4 = kcfa1;
                            cmpRng1 = cmpRng;
                            t11 = inlinedVal4;
                            t21 = inlinedVal5;
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                p11 = kcfa4[varMapNext$accessorSymbol](t11);
                                p21 = kcfa4[varMapNext$accessorSymbol](t21);
                                if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                  element0$3 = runtime.Tuple.get(p11, 0);
                                  element1$3 = runtime.Tuple.get(p11, 1);
                                  if (element0$3 instanceof kcfa4.VmE.class) {
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal6 = kcfa4.EQUAL;
                                        break inlinedLbl1
                                      }
                                      inlinedVal6 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    inlinedVal6 = kcfa4.LESS;
                                    break inlinedLbl1;
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    element1$4 = runtime.Tuple.get(p21, 1);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal6 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      arg$VmT$2$ = element0$3.key;
                                      arg$VmT$3$ = element0$3.value;
                                      if (element0$4 instanceof kcfa4.VmT.class) {
                                        let scrut, scrut1;
                                        arg$VmT$2$1 = element0$4.key;
                                        arg$VmT$3$1 = element0$4.value;
                                        scrut = arg$VmT$2$ < arg$VmT$2$1;
                                        if (scrut === true) {
                                          inlinedVal6 = kcfa4.LESS;
                                          break inlinedLbl1
                                        }
                                        scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                        if (scrut1 === true) {
                                          inlinedVal6 = kcfa4.GREATER;
                                          break inlinedLbl1
                                        }
                                        order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                        if (order1 instanceof kcfa4.EQUAL.class) {
                                          t11 = element1$3;
                                          t21 = element1$4;
                                          continue loopLabel1
                                        }
                                        inlinedVal6 = order1;
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (element0$3 instanceof kcfa4.VmT.class) {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                  element0$4 = runtime.Tuple.get(p21, 0);
                                  if (element0$4 instanceof kcfa4.VmE.class) {
                                    inlinedVal6 = kcfa4.GREATER;
                                    break inlinedLbl1
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal3 = inlinedVal6;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        inlinedVal3 = order;
                      }
                      if (inlinedVal3 instanceof kcfa2.LESS.class) {
                        let inlinedVal4;
                        tmp = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$1;
                        t2 = element1$2;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$2;
                        n = tmp2;
                        result = inlinedVal4;
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
            if (element0$1 instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$2 = runtime.Tuple.get(p2, 0);
            if (element0$2 instanceof kcfa2.SetE.class) {
              inlinedVal2 = ins1(kcfa2, p1, n, result);
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        let inlinedVal3;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        inlinedVal3 = link(kcfa1, kcfa1.SetE, element1$);
        return kcfa1.SET(element0$, inlinedVal3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let union$here;
    arg$State$2$ = state.store;
    union$here = lambda$_lambda_union$$union$(kcfa2, lambda$_lambda_setUnion$setUnion);
    return kcfa2[storeMapWrap$accessorSymbol](union$here)(arg$State$2$, sum)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
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
doit_monovariantStore_lambda$_lambda_lambda$$lambda$ = function doit_monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
};
doit_monovariantStore_lambda$_lambda$lambda = function doit_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
      f1 = doit_monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_monovariantStore_lambda$$lambda$ = function doit_monovariantStore_lambda$$lambda$(kcfa2) {
  return (b, d, mst) => {
    return doit_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst)
  }
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
monovariantStore_lambda$_lambda_lambda$$lambda$ = function monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
};
monovariantStore_lambda$_lambda$lambda = function monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
      f1 = monovariantStore_lambda$_lambda_lambda$$lambda$(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
monovariantStore_lambda$$lambda$ = function monovariantStore_lambda$$lambda$(kcfa2) {
  return (b, d, mst) => {
    return monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst)
  }
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
lambda_lambda$$lambda$ = function lambda_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
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
lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
};
lambda$_lambda$lambda1 = function lambda$_lambda$lambda(kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
      f1 = lambda$_lambda_lambda$$lambda$(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr = function doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 = function doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 = function doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_union1_incr$incr = function doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 = function doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
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
doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns = function doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns(p, n, result) {
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
        inlinedVal = doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr(kcfa1, arg$SmT$2$, arg$SmT$3$, kcfa1.SmE, result);
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
doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr = function doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr = function doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 = function doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_explore_absNext_atomEval_eval$_eval$eval = function doit_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let arg$Some$0$, inlinedVal, arg$VmMAP$1$;
    arg$VAR$1$ = e.x;
    if (benv instanceof kcfa2.VmMAP.class) {
      arg$VmMAP$1$ = benv.tree;
      inlinedVal = find1(kcfa2, arg$VAR$1$, arg$VmMAP$1$);
      if (inlinedVal instanceof kcfa2.Some.class) {
        let inlinedVal1, arg$SmMAP$1$;
        arg$Some$0$ = inlinedVal.value;
        if (store instanceof kcfa2.SmMAP.class) {
          arg$SmMAP$1$ = store.tree;
          inlinedVal1 = find11(kcfa2, arg$Some$0$, arg$SmMAP$1$);
          if (inlinedVal1 instanceof kcfa2.Some.class) {
            return inlinedVal1.value
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
doit_explore_absNext_atomEval_eval$$eval$ = function doit_explore_absNext_atomEval_eval$$eval$(kcfa2, benv, store) {
  return (e) => {
    return doit_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e)
  }
};
main_doit_explore_absNext_atomEval_eval$_eval$eval = function main_doit_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let arg$Some$0$, inlinedVal, arg$VmMAP$1$;
    arg$VAR$1$ = e.x;
    if (benv instanceof kcfa2.VmMAP.class) {
      arg$VmMAP$1$ = benv.tree;
      inlinedVal = find1(kcfa2, arg$VAR$1$, arg$VmMAP$1$);
      if (inlinedVal instanceof kcfa2.Some.class) {
        let inlinedVal1, arg$SmMAP$1$;
        arg$Some$0$ = inlinedVal.value;
        if (store instanceof kcfa2.SmMAP.class) {
          arg$SmMAP$1$ = store.tree;
          inlinedVal1 = find11(kcfa2, arg$Some$0$, arg$SmMAP$1$);
          if (inlinedVal1 instanceof kcfa2.Some.class) {
            return inlinedVal1.value
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 = function main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
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
main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr = function main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr = function main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 = function main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 = function main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
    return kcfa2.SetONE(a1, t1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 = function main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr(kcfa2, a1, t1, d) {
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
    tmp1 = main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3(kcfa2, arg$SetTWO$0$, tmp, arg$SetTWO$4$);
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
summarize_lambda$_lambda_union$_union$union = function summarize_lambda$_lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
summarize_lambda$_lambda_union$$union$ = function summarize_lambda$_lambda_union$$union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return summarize_lambda$_lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
storeJoin_storeMapUnionWith_union$_union$union = function storeJoin_storeMapUnionWith_union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
storeJoin_storeMapUnionWith_union$$union$ = function storeJoin_storeMapUnionWith_union$$union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return storeJoin_storeMapUnionWith_union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
storeMapUnionWith_union$_union$union = function storeMapUnionWith_union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
storeMapUnionWith_union$$union$ = function storeMapUnionWith_union$$union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return storeMapUnionWith_union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
storeMapCollate_lambda$_lambda$lambda = function storeMapCollate_lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2) {
  let arg$SmMAP$1$, arg$SmMAP$1$1;
  if (map1 instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.SmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$SmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
          p1 = kcfa3[storeMapNext$accessorSymbol](t1);
          p2 = kcfa3[storeMapNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa3.SmE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.SmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.SmT.class) {
                arg$SmT$2$ = element0$.key;
                arg$SmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.SmT.class) {
                  arg$SmT$2$1 = element0$1.key;
                  arg$SmT$3$1 = element0$1.value;
                  order = kcfa3[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                  if (order instanceof kcfa3.EQUAL.class) {
                    order1 = runtime.safeCall(cmpRng1(arg$SmT$3$, arg$SmT$3$1));
                    if (order1 instanceof kcfa3.EQUAL.class) {
                      t1 = element1$;
                      t2 = element1$1;
                      continue loopLabel
                    }
                    inlinedVal2 = order1;
                    break inlinedLbl;
                  }
                  inlinedVal2 = order;
                  break inlinedLbl;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
storeMapCollate_lambda$$lambda$ = function storeMapCollate_lambda$$lambda$(kcfa2, cmpRng) {
  return (map1, map2) => {
    return storeMapCollate_lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2)
  }
};
varMapCollate_lambda$_lambda$lambda = function varMapCollate_lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2) {
  let arg$VmMAP$1$, arg$VmMAP$1$1;
  if (map1 instanceof kcfa2.VmMAP.class) {
    arg$VmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.VmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$VmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.VmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.VmT.class) {
                arg$VmT$2$ = element0$.key;
                arg$VmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.VmT.class) {
                  let scrut, scrut1;
                  arg$VmT$2$1 = element0$1.key;
                  arg$VmT$3$1 = element0$1.value;
                  scrut = arg$VmT$2$ < arg$VmT$2$1;
                  if (scrut === true) {
                    inlinedVal2 = kcfa3.LESS;
                    break inlinedLbl
                  }
                  scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                  if (scrut1 === true) {
                    inlinedVal2 = kcfa3.GREATER;
                    break inlinedLbl
                  }
                  order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                  if (order1 instanceof kcfa3.EQUAL.class) {
                    t1 = element1$;
                    t2 = element1$1;
                    continue loopLabel
                  }
                  inlinedVal2 = order1;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
varMapCollate_lambda$$lambda$ = function varMapCollate_lambda$$lambda$(kcfa2, cmpRng) {
  return (map1, map2) => {
    return varMapCollate_lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2)
  }
};
lambda$_lambda$lambda2 = function lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2) {
  let arg$VmMAP$1$, arg$VmMAP$1$1;
  if (map1 instanceof kcfa2.VmMAP.class) {
    arg$VmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.VmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$VmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.VmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.VmT.class) {
                arg$VmT$2$ = element0$.key;
                arg$VmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.VmT.class) {
                  let scrut, scrut1;
                  arg$VmT$2$1 = element0$1.key;
                  arg$VmT$3$1 = element0$1.value;
                  scrut = arg$VmT$2$ < arg$VmT$2$1;
                  if (scrut === true) {
                    inlinedVal2 = kcfa3.LESS;
                    break inlinedLbl
                  }
                  scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                  if (scrut1 === true) {
                    inlinedVal2 = kcfa3.GREATER;
                    break inlinedLbl
                  }
                  order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                  if (order1 instanceof kcfa3.EQUAL.class) {
                    t1 = element1$;
                    t2 = element1$1;
                    continue loopLabel
                  }
                  inlinedVal2 = order1;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$lambda3 = function lambda$_lambda$lambda(kcfa2, cmpRng, map1, map2) {
  let arg$SmMAP$1$, arg$SmMAP$1$1;
  if (map1 instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.SmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$SmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
          p1 = kcfa3[storeMapNext$accessorSymbol](t1);
          p2 = kcfa3[storeMapNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa3.SmE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.SmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.SmT.class) {
                arg$SmT$2$ = element0$.key;
                arg$SmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.SmT.class) {
                  arg$SmT$2$1 = element0$1.key;
                  arg$SmT$3$1 = element0$1.value;
                  order = kcfa3[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                  if (order instanceof kcfa3.EQUAL.class) {
                    order1 = runtime.safeCall(cmpRng1(arg$SmT$3$, arg$SmT$3$1));
                    if (order1 instanceof kcfa3.EQUAL.class) {
                      t1 = element1$;
                      t2 = element1$1;
                      continue loopLabel
                    }
                    inlinedVal2 = order1;
                    break inlinedLbl;
                  }
                  inlinedVal2 = order;
                  break inlinedLbl;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
union$_union$union = function union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda_union$_union$union = function lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda_union$$union$ = function lambda_union$$union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
lambda$_lambda_union$_union$union = function lambda$_lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$_lambda_union$$union$ = function lambda$_lambda_union$$union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return lambda$_lambda_union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
lambda$12 = (undefined, function (kcfa2) {
  return (e) => {
    return lambda8(kcfa2, e)
  }
});
lambda$11 = (undefined, function (kcfa2, lambdaLabel) {
  return (p) => {
    return lambda9(kcfa2, lambdaLabel, p)
  }
});
lambda8 = (undefined, function (kcfa2, e) {
  let arg$LAMBDA$0$, element0$;
  if (e instanceof kcfa2.LAMBDA.class) {
    arg$LAMBDA$0$ = e.lam;
    if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
      element0$ = runtime.Tuple.get(arg$LAMBDA$0$, 0);
      runtime.Tuple.get(arg$LAMBDA$0$, 1);
      runtime.Tuple.get(arg$LAMBDA$0$, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda9 = (undefined, function (kcfa2, lambdaLabel, p) {
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
newLabel = function newLabel(labelCount) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return n
};
var_ = function var_(kcfa2, labelCount, x) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.VAR(n, x)
};
lambda = function lambda(kcfa2, labelCount, formals) {
  return (call1) => {
    return lambda$worker(kcfa2, labelCount, formals, call1)
  }
};
lambda$worker = function lambda$worker(kcfa2, labelCount, formals, call1) {
  let tmp, n;
  n = labelCount.value + 1;
  labelCount.value = n;
  tmp = globalThis.Object.freeze([
    n,
    formals,
    call1
  ]);
  return kcfa2.LAMBDA(tmp)
};
call = function call(kcfa2, labelCount, f) {
  return (args) => {
    return call$worker(kcfa2, labelCount, f, args)
  }
};
call$worker = function call$worker(kcfa2, labelCount, f, args) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.CALL(n, f, args)
};
return_ = function return_(kcfa2, labelCount, x) {
  let n;
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.RET(n, x)
};
mkLet = function mkLet(kcfa2, labelCount, x) {
  return (e1) => {
    return (e2) => {
      return mkLet$worker(kcfa2, labelCount, x, e1, e2)
    }
  }
};
mkLet$worker = function mkLet$worker(kcfa2, labelCount, x, e1, e2) {
  let tmp, tmp1, inlinedVal, n, tmp2, n1;
  tmp = kcfa2.Cons(x, kcfa2.Nil);
  n1 = labelCount.value + 1;
  labelCount.value = n1;
  tmp2 = globalThis.Object.freeze([
    n1,
    tmp,
    e2
  ]);
  inlinedVal = kcfa2.LAMBDA(tmp2);
  tmp1 = kcfa2.Cons(e1, kcfa2.Nil);
  n = labelCount.value + 1;
  labelCount.value = n;
  return kcfa2.CALL(n, inlinedVal, tmp1)
};
lambda$10 = (undefined, function (kcfa2) {
  return (b, d, mst) => {
    return lambda$_lambda$lambda1(kcfa2, b, d, mst)
  }
});
lambda7 = (undefined, function (kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, init, inlinedVal, f1, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f = lambda$7(kcfa2);
    init = kcfa2.Nil;
    if (d instanceof kcfa2.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf1(kcfa2, f, arg$SET$1$, init);
      f1 = lambda_lambda$$lambda$(kcfa2, arg$Bnd$0$);
      return kcfa2[listFoldl$tailrec$accessorSymbol](f1, mst, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (kcfa2) {
  return (state, sum) => {
    return lambda$_lambda$lambda(kcfa2, state, sum)
  }
});
lambda6 = (undefined, function (kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let union$here;
    arg$State$2$ = state.store;
    union$here = lambda_union$$union$(kcfa2, lambda_setUnion$setUnion1);
    return kcfa2[storeMapWrap$accessorSymbol](union$here)(arg$State$2$, sum)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (kcfa2, x) {
  return (exp, mst) => {
    return kcfa2[monoStoreUpdate$accessorSymbol](mst, x, exp)
  }
});
lambda5 = (undefined, function (kcfa2, x, exp, mst) {
  return kcfa2[monoStoreUpdate$accessorSymbol](mst, x, exp)
});
lambda$7 = (undefined, function (kcfa2) {
  return (v, exps) => {
    return lambda4(kcfa2, v, exps)
  }
});
lambda4 = (undefined, function (kcfa2, v, exps) {
  let inlinedVal, arg$Clos$0$;
  if (v instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = v.lam;
    inlinedVal = kcfa2.LAMBDA(arg$Clos$0$);
    return kcfa2.Cons(inlinedVal, exps)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$6 = (undefined, function (kcfa2, st) {
  return (st1) => {
    return lambda$_stateSame$stateSame(st, st1)
  }
});
lambda3 = (undefined, function (kcfa2, st, st1) {
  let arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp;
  if (st instanceof kcfa1.State.class) {
    arg$State$0$ = st.call;
    arg$State$1$ = st.benv;
    arg$State$2$ = st.store;
    arg$State$3$ = st.time;
    if (st1 instanceof kcfa1.State.class) {
      let pred, inlinedVal;
      arg$State$0$1 = st1.call;
      arg$State$1$1 = st1.benv;
      arg$State$2$1 = st1.store;
      arg$State$3$1 = st1.time;
      pred = kcfa1[labelSame$accessorSymbol];
      inlinedVal = kcfa1[listPairAllEq$tailrec$accessorSymbol](pred, arg$State$3$, arg$State$3$1);
      if (inlinedVal === true) {
        tmp = kcfa1[sameCall$accessorSymbol](arg$State$0$, arg$State$0$1);
        if (tmp === true) {
          let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
          cmpRng = kcfa1[bindCompare$accessorSymbol];
          kcfa3 = kcfa1;
          if (arg$State$1$ instanceof kcfa3.VmMAP.class) {
            arg$VmMAP$1$ = arg$State$1$.tree;
            if (arg$State$1$1 instanceof kcfa3.VmMAP.class) {
              let inlinedVal1, inlinedVal2, kcfa4, cmpRng1, t1, t2, inlinedVal3;
              arg$VmMAP$1$1 = arg$State$1$1.tree;
              inlinedVal1 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
              inlinedVal2 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
              kcfa4 = kcfa1;
              cmpRng1 = cmpRng;
              t1 = inlinedVal1;
              t2 = inlinedVal2;
              inlinedLbl: {
                loopLabel: while (true) {
                  let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
                  p1 = kcfa4[varMapNext$accessorSymbol](t1);
                  p2 = kcfa4[varMapNext$accessorSymbol](t2);
                  if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                    element0$ = runtime.Tuple.get(p1, 0);
                    element1$ = runtime.Tuple.get(p1, 1);
                    if (element0$ instanceof kcfa4.VmE.class) {
                      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                        element0$1 = runtime.Tuple.get(p2, 0);
                        if (element0$1 instanceof kcfa4.VmE.class) {
                          inlinedVal3 = kcfa4.EQUAL;
                          break inlinedLbl
                        }
                        inlinedVal3 = kcfa4.LESS;
                        break inlinedLbl;
                      }
                      inlinedVal3 = kcfa4.LESS;
                      break inlinedLbl;
                    }
                    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                      element0$1 = runtime.Tuple.get(p2, 0);
                      element1$1 = runtime.Tuple.get(p2, 1);
                      if (element0$1 instanceof kcfa4.VmE.class) {
                        inlinedVal3 = kcfa4.GREATER;
                        break inlinedLbl
                      }
                      if (element0$ instanceof kcfa4.VmT.class) {
                        arg$VmT$2$ = element0$.key;
                        arg$VmT$3$ = element0$.value;
                        if (element0$1 instanceof kcfa4.VmT.class) {
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal3 = kcfa4.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal3 = kcfa4.GREATER;
                            break inlinedLbl
                          }
                          order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                          if (order1 instanceof kcfa4.EQUAL.class) {
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
                    if (element0$ instanceof kcfa4.VmT.class) {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                    element0$1 = runtime.Tuple.get(p2, 0);
                    if (element0$1 instanceof kcfa4.VmE.class) {
                      inlinedVal3 = kcfa4.GREATER;
                      break inlinedLbl
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              if (inlinedVal3 instanceof kcfa1.EQUAL.class) {
                let kcfa5, arg$SmMAP$1$, arg$SmMAP$1$1;
                kcfa5 = kcfa1;
                if (arg$State$2$ instanceof kcfa5.SmMAP.class) {
                  arg$SmMAP$1$ = arg$State$2$.tree;
                  if (arg$State$2$1 instanceof kcfa5.SmMAP.class) {
                    let inlinedVal4, inlinedVal5, kcfa6, cmpRng2, t11, t21, inlinedVal6;
                    arg$SmMAP$1$1 = arg$State$2$1.tree;
                    inlinedVal4 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa1.Nil);
                    inlinedVal5 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa1.Nil);
                    kcfa6 = kcfa1;
                    cmpRng2 = lambda_stateSame_storeCompare_setCompare$setCompare;
                    t11 = inlinedVal4;
                    t21 = inlinedVal5;
                    inlinedLbl1: {
                      loopLabel1: while (true) {
                        let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
                        p1 = kcfa6[storeMapNext$accessorSymbol](t11);
                        p2 = kcfa6[storeMapNext$accessorSymbol](t21);
                        if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                          element0$ = runtime.Tuple.get(p1, 0);
                          element1$ = runtime.Tuple.get(p1, 1);
                          if (element0$ instanceof kcfa6.SmE.class) {
                            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                              element0$1 = runtime.Tuple.get(p2, 0);
                              if (element0$1 instanceof kcfa6.SmE.class) {
                                inlinedVal6 = kcfa6.EQUAL;
                                break inlinedLbl1
                              }
                              inlinedVal6 = kcfa6.LESS;
                              break inlinedLbl1;
                            }
                            inlinedVal6 = kcfa6.LESS;
                            break inlinedLbl1;
                          }
                          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                            element0$1 = runtime.Tuple.get(p2, 0);
                            element1$1 = runtime.Tuple.get(p2, 1);
                            if (element0$1 instanceof kcfa6.SmE.class) {
                              inlinedVal6 = kcfa6.GREATER;
                              break inlinedLbl1
                            }
                            if (element0$ instanceof kcfa6.SmT.class) {
                              arg$SmT$2$ = element0$.key;
                              arg$SmT$3$ = element0$.value;
                              if (element0$1 instanceof kcfa6.SmT.class) {
                                arg$SmT$2$1 = element0$1.key;
                                arg$SmT$3$1 = element0$1.value;
                                order = kcfa6[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                                if (order instanceof kcfa6.EQUAL.class) {
                                  order1 = runtime.safeCall(cmpRng2(arg$SmT$3$, arg$SmT$3$1));
                                  if (order1 instanceof kcfa6.EQUAL.class) {
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
                          if (element0$ instanceof kcfa6.SmT.class) {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                          element0$1 = runtime.Tuple.get(p2, 0);
                          if (element0$1 instanceof kcfa6.SmE.class) {
                            inlinedVal6 = kcfa6.GREATER;
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
});
apply$ = function apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
apply = function apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, f1, inlinedVal1, f2, inlinedVal2;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      f1 = lambda$1(kcfa2);
      inlinedVal1 = foldf(kcfa2, f1, element1$, inlinedVal, arg$Clos$1$);
      f2 = apply_lambda$$lambda$(kcfa2);
      inlinedVal2 = foldf(kcfa2, f2, inlinedVal, params, store);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return kcfa2.Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
eval$ = function eval$(kcfa2, benv, store) {
  return (e) => {
    return eval1(kcfa2, benv, store, e)
  }
};
eval1 = (undefined, function (kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let arg$Some$0$, inlinedVal, arg$VmMAP$1$;
    arg$VAR$1$ = e.x;
    if (benv instanceof kcfa2.VmMAP.class) {
      arg$VmMAP$1$ = benv.tree;
      inlinedVal = find1(kcfa2, arg$VAR$1$, arg$VmMAP$1$);
      if (inlinedVal instanceof kcfa2.Some.class) {
        let inlinedVal1, arg$SmMAP$1$;
        arg$Some$0$ = inlinedVal.value;
        if (store instanceof kcfa2.SmMAP.class) {
          arg$SmMAP$1$ = store.tree;
          inlinedVal1 = find11(kcfa2, arg$Some$0$, arg$SmMAP$1$);
          if (inlinedVal1 instanceof kcfa2.Some.class) {
            return inlinedVal1.value
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (e instanceof kcfa2.LAMBDA.class) {
    let tmp1;
    arg$LAMBDA$0$ = e.lam;
    tmp = kcfa2.Clos(arg$LAMBDA$0$, benv);
    tmp1 = kcfa2.SetT(kcfa2.SetB, kcfa2.SetE, tmp, kcfa2.SetE);
    return kcfa2.SET(1, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (kcfa2) {
  return (adr, dv, st) => {
    return kcfa2[storeMapInsertWith$accessorSymbol](lambda$_setUnion$setUnion)(st, adr, dv)
  }
});
lambda2 = (undefined, function (kcfa2, adr, dv, st) {
  return kcfa2[storeMapInsertWith$accessorSymbol](lambda_setUnion$setUnion)(st, adr, dv)
});
union$ = function union$(kcfa2, mergeFn) {
  return (t1, t2, n, result) => {
    return union$_union$union(kcfa2, mergeFn, t1, t2, n, result)
  }
};
union = function union(kcfa2, mergeFn, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
        }
        return kcfa2[storeMapIns$accessorSymbol](p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            scrut = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (scrut instanceof kcfa2.LESS.class) {
              let inlinedVal;
              tmp = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$, arg$SmT$3$, kcfa2.SmE, result);
              t1 = element1$;
              n = tmp;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.EQUAL.class) {
              let inlinedVal;
              tmp1 = n + 1;
              tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
              inlinedVal = incr1(kcfa2, arg$SmT$2$, tmp2, kcfa2.SmE, result);
              t1 = element1$;
              t2 = element1$1;
              n = tmp1;
              result = inlinedVal;
              continue loopLabel
            } else if (scrut instanceof kcfa2.GREATER.class) {
              let inlinedVal;
              tmp3 = n + 1;
              inlinedVal = incr1(kcfa2, arg$SmT$2$1, arg$SmT$3$1, kcfa2.SmE, result);
              t2 = element1$1;
              n = tmp3;
              result = inlinedVal;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2[storeMapIns$accessorSymbol](p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
link1 = function link(kcfa2, t1, d) {
  loopLabel: while (true) {
    let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1, tmp2;
    if (d instanceof kcfa2.SmZERO.class) {
      return t1
    } else if (d instanceof kcfa2.SmONE.class) {
      arg$SmONE$0$ = d.key;
      arg$SmONE$1$ = d.value;
      arg$SmONE$2$ = d.tree;
      arg$SmONE$3$ = d.digit;
      tmp = kcfa2.SmT(kcfa2.SmB, arg$SmONE$2$, arg$SmONE$0$, arg$SmONE$1$, t1);
      t1 = tmp;
      d = arg$SmONE$3$;
      continue loopLabel
    } else if (d instanceof kcfa2.SmTWO.class) {
      arg$SmTWO$0$ = d.key1;
      arg$SmTWO$1$ = d.value1;
      arg$SmTWO$2$ = d.tree1;
      arg$SmTWO$3$ = d.key2;
      arg$SmTWO$4$ = d.value2;
      arg$SmTWO$5$ = d.tree2;
      arg$SmTWO$6$ = d.digit;
      tmp1 = kcfa2.SmT(kcfa2.SmR, arg$SmTWO$5$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$2$);
      tmp2 = kcfa2.SmT(kcfa2.SmB, tmp1, arg$SmTWO$0$, arg$SmTWO$1$, t1);
      t1 = tmp2;
      d = arg$SmTWO$6$;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
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
lambda$4 = (undefined, function (kcfa2, cmpRng) {
  return (map1, map2) => {
    return lambda$_lambda$lambda3(kcfa2, cmpRng, map1, map2)
  }
});
cmp2 = function cmp(kcfa2, cmpRng, t1, t2) {
  loopLabel: while (true) {
    let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
    p1 = kcfa2[storeMapNext$accessorSymbol](t1);
    p2 = kcfa2[storeMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SmE.class) {
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SmE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.SmT.class) {
            arg$SmT$2$1 = element0$1.key;
            arg$SmT$3$1 = element0$1.value;
            order = kcfa2[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
            if (order instanceof kcfa2.EQUAL.class) {
              order1 = runtime.safeCall(cmpRng(arg$SmT$3$, arg$SmT$3$1));
              if (order1 instanceof kcfa2.EQUAL.class) {
                t1 = element1$;
                t2 = element1$1;
                continue loopLabel
              }
              return order1;
            }
            return order;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.SmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SmE.class) {
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda13 = (undefined, function (kcfa2, cmpRng, map1, map2) {
  let arg$SmMAP$1$, arg$SmMAP$1$1;
  if (map1 instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.SmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$SmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
      inlinedLbl: {
        loopLabel: while (true) {
          let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
          p1 = kcfa3[storeMapNext$accessorSymbol](t1);
          p2 = kcfa3[storeMapNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa3.SmE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.SmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.SmT.class) {
                arg$SmT$2$ = element0$.key;
                arg$SmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.SmT.class) {
                  arg$SmT$2$1 = element0$1.key;
                  arg$SmT$3$1 = element0$1.value;
                  order = kcfa3[bindCompare$accessorSymbol](arg$SmT$2$, arg$SmT$2$1);
                  if (order instanceof kcfa3.EQUAL.class) {
                    order1 = runtime.safeCall(cmpRng1(arg$SmT$3$, arg$SmT$3$1));
                    if (order1 instanceof kcfa3.EQUAL.class) {
                      t1 = element1$;
                      t2 = element1$1;
                      continue loopLabel
                    }
                    inlinedVal2 = order1;
                    break inlinedLbl;
                  }
                  inlinedVal2 = order;
                  break inlinedLbl;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (kcfa2, f, init) {
  return (map) => {
    return lambda12(kcfa2, f, init, map)
  }
});
lambda12 = (undefined, function (kcfa2, f, init, map) {
  let arg$SmMAP$1$;
  if (map instanceof kcfa2.SmMAP.class) {
    arg$SmMAP$1$ = map.tree;
    return foldf2(kcfa2, f, arg$SmMAP$1$, init)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (kcfa2, f) {
  return (init) => {
    return lambda$3(kcfa2, f, init)
  }
});
foldf2 = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp, tmp1;
    if (t instanceof kcfa2.SmE.class) {
      return accum
    } else if (t instanceof kcfa2.SmT.class) {
      arg$SmT$1$ = t.left;
      arg$SmT$2$ = t.key;
      arg$SmT$3$ = t.value;
      arg$SmT$4$ = t.right;
      tmp = foldf2(kcfa2, f, arg$SmT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SmT$2$, arg$SmT$3$, tmp));
      t = arg$SmT$4$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda11 = (undefined, function (kcfa2, f, init) {
  return lambda$3(kcfa2, f, init)
});
find11 = function find1(kcfa2, k, t) {
  loopLabel: while (true) {
    let scrut, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$;
    if (t instanceof kcfa2.SmE.class) {
      return kcfa2.None
    } else if (t instanceof kcfa2.SmT.class) {
      arg$SmT$1$ = t.left;
      arg$SmT$2$ = t.key;
      arg$SmT$3$ = t.value;
      arg$SmT$4$ = t.right;
      scrut = kcfa2[bindCompare$accessorSymbol](k, arg$SmT$2$);
      if (scrut instanceof kcfa2.LESS.class) {
        t = arg$SmT$1$;
        continue loopLabel
      } else if (scrut instanceof kcfa2.EQUAL.class) {
        return kcfa2.Some(arg$SmT$3$)
      } else if (scrut instanceof kcfa2.GREATER.class) {
        t = arg$SmT$4$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins2 = function ins(kcfa2, comb, xk, x, nItems, nItems1, s) {
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
            c1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$1);
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
            d1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$1);
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
      tmp1 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$);
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
            c11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$4);
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
            d11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$4);
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
      tmp11 = ins2(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$);
      return kcfa2.SmT(kcfa2.SmB, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, tmp11)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
foldf1 = function foldf(kcfa2, f, t, accum) {
  loopLabel: while (true) {
    let arg$SetT$1$, arg$SetT$2$, arg$SetT$3$, tmp, tmp1;
    if (t instanceof kcfa2.SetE.class) {
      return accum
    } else if (t instanceof kcfa2.SetT.class) {
      arg$SetT$1$ = t.left;
      arg$SetT$2$ = t.item;
      arg$SetT$3$ = t.right;
      tmp = foldf1(kcfa2, f, arg$SetT$1$, accum);
      tmp1 = runtime.safeCall(f(arg$SetT$2$, tmp));
      t = arg$SetT$3$;
      accum = tmp1;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ins1 = function ins(kcfa2, p, n, result) {
  loopLabel: while (true) {
    let element1$, element0$, arg$SetT$2$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof kcfa2.SetE.class) {
        return globalThis.Object.freeze([
          n,
          result
        ])
      } else if (element0$ instanceof kcfa2.SetT.class) {
        let inlinedVal;
        arg$SetT$2$ = element0$.item;
        tmp = kcfa2[setNext$accessorSymbol](element1$);
        tmp1 = n + 1;
        inlinedVal = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
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
union1 = function union1(kcfa2, t1, t2, n, result) {
  loopLabel: while (true) {
    let p1, p2, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
    p1 = kcfa2[setNext$accessorSymbol](t1);
    p2 = kcfa2[setNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.SetE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.SetE.class) {
            return globalThis.Object.freeze([
              n,
              result
            ])
          }
          return ins1(kcfa2, p2, n, result);
        }
        return ins1(kcfa2, p2, n, result);
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SetE.class) {
          return ins1(kcfa2, p1, n, result)
        }
        if (element0$ instanceof kcfa2.SetT.class) {
          arg$SetT$2$ = element0$.item;
          if (element0$1 instanceof kcfa2.SetT.class) {
            let inlinedVal, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
            arg$SetT$2$1 = element0$1.item;
            if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
              arg$Clos$0$ = arg$SetT$2$.lam;
              arg$Clos$1$ = arg$SetT$2$.benv;
              if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                arg$Clos$0$1 = arg$SetT$2$1.lam;
                arg$Clos$1$1 = arg$SetT$2$1.benv;
                order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                if (order instanceof kcfa1.EQUAL.class) {
                  let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                  cmpRng = kcfa1[bindCompare$accessorSymbol];
                  kcfa3 = kcfa1;
                  if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                    arg$VmMAP$1$ = arg$Clos$1$.tree;
                    if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                      let inlinedVal1, inlinedVal2, kcfa4, cmpRng1, t11, t21, inlinedVal3;
                      arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                      inlinedVal1 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                      inlinedVal2 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                      kcfa4 = kcfa1;
                      cmpRng1 = cmpRng;
                      t11 = inlinedVal1;
                      t21 = inlinedVal2;
                      inlinedLbl: {
                        loopLabel1: while (true) {
                          let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                          p11 = kcfa4[varMapNext$accessorSymbol](t11);
                          p21 = kcfa4[varMapNext$accessorSymbol](t21);
                          if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                            element0$2 = runtime.Tuple.get(p11, 0);
                            element1$2 = runtime.Tuple.get(p11, 1);
                            if (element0$2 instanceof kcfa4.VmE.class) {
                              if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                element0$3 = runtime.Tuple.get(p21, 0);
                                if (element0$3 instanceof kcfa4.VmE.class) {
                                  inlinedVal3 = kcfa4.EQUAL;
                                  break inlinedLbl
                                }
                                inlinedVal3 = kcfa4.LESS;
                                break inlinedLbl;
                              }
                              inlinedVal3 = kcfa4.LESS;
                              break inlinedLbl;
                            }
                            if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                              element0$3 = runtime.Tuple.get(p21, 0);
                              element1$3 = runtime.Tuple.get(p21, 1);
                              if (element0$3 instanceof kcfa4.VmE.class) {
                                inlinedVal3 = kcfa4.GREATER;
                                break inlinedLbl
                              }
                              if (element0$2 instanceof kcfa4.VmT.class) {
                                arg$VmT$2$ = element0$2.key;
                                arg$VmT$3$ = element0$2.value;
                                if (element0$3 instanceof kcfa4.VmT.class) {
                                  let scrut, scrut1;
                                  arg$VmT$2$1 = element0$3.key;
                                  arg$VmT$3$1 = element0$3.value;
                                  scrut = arg$VmT$2$ < arg$VmT$2$1;
                                  if (scrut === true) {
                                    inlinedVal3 = kcfa4.LESS;
                                    break inlinedLbl
                                  }
                                  scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                  if (scrut1 === true) {
                                    inlinedVal3 = kcfa4.GREATER;
                                    break inlinedLbl
                                  }
                                  order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                  if (order1 instanceof kcfa4.EQUAL.class) {
                                    t11 = element1$2;
                                    t21 = element1$3;
                                    continue loopLabel1
                                  }
                                  inlinedVal3 = order1;
                                  break inlinedLbl;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            if (element0$2 instanceof kcfa4.VmT.class) {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                            element0$3 = runtime.Tuple.get(p21, 0);
                            if (element0$3 instanceof kcfa4.VmE.class) {
                              inlinedVal3 = kcfa4.GREATER;
                              break inlinedLbl
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      inlinedVal = inlinedVal3;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  inlinedVal = order;
                }
                if (inlinedVal instanceof kcfa2.LESS.class) {
                  let inlinedVal1;
                  tmp = n + 1;
                  inlinedVal1 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                  t1 = element1$;
                  n = tmp;
                  result = inlinedVal1;
                  continue loopLabel
                } else if (inlinedVal instanceof kcfa2.EQUAL.class) {
                  let inlinedVal1;
                  tmp1 = n + 1;
                  inlinedVal1 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                  t1 = element1$;
                  t2 = element1$1;
                  n = tmp1;
                  result = inlinedVal1;
                  continue loopLabel
                } else if (inlinedVal instanceof kcfa2.GREATER.class) {
                  let inlinedVal1;
                  tmp2 = n + 1;
                  inlinedVal1 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                  t2 = element1$1;
                  n = tmp2;
                  result = inlinedVal1;
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
      if (element0$ instanceof kcfa2.SetT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.SetE.class) {
        return ins1(kcfa2, p1, n, result)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
link = function link(kcfa2, t1, d) {
  loopLabel: while (true) {
    let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1, tmp2;
    if (d instanceof kcfa2.SetZERO.class) {
      return t1
    } else if (d instanceof kcfa2.SetONE.class) {
      arg$SetONE$0$ = d.item;
      arg$SetONE$1$ = d.tree;
      arg$SetONE$2$ = d.digit;
      tmp = kcfa2.SetT(kcfa2.SetB, arg$SetONE$1$, arg$SetONE$0$, t1);
      t1 = tmp;
      d = arg$SetONE$2$;
      continue loopLabel
    } else if (d instanceof kcfa2.SetTWO.class) {
      arg$SetTWO$0$ = d.item1;
      arg$SetTWO$1$ = d.tree1;
      arg$SetTWO$2$ = d.item2;
      arg$SetTWO$3$ = d.tree2;
      arg$SetTWO$4$ = d.digit;
      tmp1 = kcfa2.SetT(kcfa2.SetR, arg$SetTWO$3$, arg$SetTWO$2$, arg$SetTWO$1$);
      tmp2 = kcfa2.SetT(kcfa2.SetB, tmp1, arg$SetTWO$0$, t1);
      t1 = tmp2;
      d = arg$SetTWO$4$;
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
cmp1 = function cmp(kcfa2, t1, t2) {
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
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.SetE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.SetT.class) {
          arg$SetT$2$ = element0$.item;
          if (element0$1 instanceof kcfa2.SetT.class) {
            let inlinedVal, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
            arg$SetT$2$1 = element0$1.item;
            if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
              arg$Clos$0$ = arg$SetT$2$.lam;
              arg$Clos$1$ = arg$SetT$2$.benv;
              if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                arg$Clos$0$1 = arg$SetT$2$1.lam;
                arg$Clos$1$1 = arg$SetT$2$1.benv;
                order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
                if (order instanceof kcfa1.EQUAL.class) {
                  let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                  cmpRng = kcfa1[bindCompare$accessorSymbol];
                  kcfa3 = kcfa1;
                  if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                    arg$VmMAP$1$ = arg$Clos$1$.tree;
                    if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                      let inlinedVal1, inlinedVal2, kcfa4, cmpRng1, t11, t21, inlinedVal3;
                      arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                      inlinedVal1 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa1.Nil);
                      inlinedVal2 = kcfa1[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa1.Nil);
                      kcfa4 = kcfa1;
                      cmpRng1 = cmpRng;
                      t11 = inlinedVal1;
                      t21 = inlinedVal2;
                      inlinedLbl: {
                        loopLabel1: while (true) {
                          let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                          p11 = kcfa4[varMapNext$accessorSymbol](t11);
                          p21 = kcfa4[varMapNext$accessorSymbol](t21);
                          if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                            element0$2 = runtime.Tuple.get(p11, 0);
                            element1$2 = runtime.Tuple.get(p11, 1);
                            if (element0$2 instanceof kcfa4.VmE.class) {
                              if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                element0$3 = runtime.Tuple.get(p21, 0);
                                if (element0$3 instanceof kcfa4.VmE.class) {
                                  inlinedVal3 = kcfa4.EQUAL;
                                  break inlinedLbl
                                }
                                inlinedVal3 = kcfa4.LESS;
                                break inlinedLbl;
                              }
                              inlinedVal3 = kcfa4.LESS;
                              break inlinedLbl;
                            }
                            if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                              element0$3 = runtime.Tuple.get(p21, 0);
                              element1$3 = runtime.Tuple.get(p21, 1);
                              if (element0$3 instanceof kcfa4.VmE.class) {
                                inlinedVal3 = kcfa4.GREATER;
                                break inlinedLbl
                              }
                              if (element0$2 instanceof kcfa4.VmT.class) {
                                arg$VmT$2$ = element0$2.key;
                                arg$VmT$3$ = element0$2.value;
                                if (element0$3 instanceof kcfa4.VmT.class) {
                                  let scrut, scrut1;
                                  arg$VmT$2$1 = element0$3.key;
                                  arg$VmT$3$1 = element0$3.value;
                                  scrut = arg$VmT$2$ < arg$VmT$2$1;
                                  if (scrut === true) {
                                    inlinedVal3 = kcfa4.LESS;
                                    break inlinedLbl
                                  }
                                  scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                  if (scrut1 === true) {
                                    inlinedVal3 = kcfa4.GREATER;
                                    break inlinedLbl
                                  }
                                  order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                  if (order1 instanceof kcfa4.EQUAL.class) {
                                    t11 = element1$2;
                                    t21 = element1$3;
                                    continue loopLabel1
                                  }
                                  inlinedVal3 = order1;
                                  break inlinedLbl;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            if (element0$2 instanceof kcfa4.VmT.class) {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                            element0$3 = runtime.Tuple.get(p21, 0);
                            if (element0$3 instanceof kcfa4.VmE.class) {
                              inlinedVal3 = kcfa4.GREATER;
                              break inlinedLbl
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      inlinedVal = inlinedVal3;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  inlinedVal = order;
                }
                if (inlinedVal instanceof kcfa2.EQUAL.class) {
                  t1 = element1$;
                  t2 = element1$1;
                  continue loopLabel
                }
                return inlinedVal;
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
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$1 = (undefined, function (kcfa2) {
  return (x, adr, benv) => {
    return kcfa2[varMapInsert$accessorSymbol](benv, x, adr)
  }
});
lambda1 = (undefined, function (kcfa2, x, adr, benv) {
  return kcfa2[varMapInsert$accessorSymbol](benv, x, adr)
});
lambda$ = (undefined, function (kcfa2, cmpRng) {
  return (map1, map2) => {
    return lambda$_lambda$lambda2(kcfa2, cmpRng, map1, map2)
  }
});
cmp = function cmp(kcfa2, cmpRng, t1, t2) {
  loopLabel: while (true) {
    let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
    p1 = kcfa2[varMapNext$accessorSymbol](t1);
    p2 = kcfa2[varMapNext$accessorSymbol](t2);
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (element0$ instanceof kcfa2.VmE.class) {
        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
          element0$1 = runtime.Tuple.get(p2, 0);
          if (element0$1 instanceof kcfa2.VmE.class) {
            return kcfa2.EQUAL
          }
          return kcfa2.LESS;
        }
        return kcfa2.LESS;
      }
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        if (element0$1 instanceof kcfa2.VmE.class) {
          return kcfa2.GREATER
        }
        if (element0$ instanceof kcfa2.VmT.class) {
          arg$VmT$2$ = element0$.key;
          arg$VmT$3$ = element0$.value;
          if (element0$1 instanceof kcfa2.VmT.class) {
            let scrut, scrut1;
            arg$VmT$2$1 = element0$1.key;
            arg$VmT$3$1 = element0$1.value;
            scrut = arg$VmT$2$ < arg$VmT$2$1;
            if (scrut === true) {
              return kcfa2.LESS
            }
            scrut1 = arg$VmT$2$1 < arg$VmT$2$;
            if (scrut1 === true) {
              return kcfa2.GREATER
            }
            order1 = runtime.safeCall(cmpRng(arg$VmT$3$, arg$VmT$3$1));
            if (order1 instanceof kcfa2.EQUAL.class) {
              t1 = element1$;
              t2 = element1$1;
              continue loopLabel
            }
            return order1;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (element0$ instanceof kcfa2.VmT.class) {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
      element0$1 = runtime.Tuple.get(p2, 0);
      if (element0$1 instanceof kcfa2.VmE.class) {
        return kcfa2.GREATER
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda10 = (undefined, function (kcfa2, cmpRng, map1, map2) {
  let arg$VmMAP$1$, arg$VmMAP$1$1;
  if (map1 instanceof kcfa2.VmMAP.class) {
    arg$VmMAP$1$ = map1.tree;
    if (map2 instanceof kcfa2.VmMAP.class) {
      let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
      arg$VmMAP$1$1 = map2.tree;
      inlinedVal = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$, kcfa2.Nil);
      inlinedVal1 = kcfa2[varMapLeft$accessorSymbol](arg$VmMAP$1$1, kcfa2.Nil);
      kcfa3 = kcfa2;
      cmpRng1 = cmpRng;
      t1 = inlinedVal;
      t2 = inlinedVal1;
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
                  inlinedVal2 = kcfa3.EQUAL;
                  break inlinedLbl
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              inlinedVal2 = kcfa3.LESS;
              break inlinedLbl;
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$1 = runtime.Tuple.get(p2, 0);
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.VmE.class) {
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              if (element0$ instanceof kcfa3.VmT.class) {
                arg$VmT$2$ = element0$.key;
                arg$VmT$3$ = element0$.value;
                if (element0$1 instanceof kcfa3.VmT.class) {
                  let scrut, scrut1;
                  arg$VmT$2$1 = element0$1.key;
                  arg$VmT$3$1 = element0$1.value;
                  scrut = arg$VmT$2$ < arg$VmT$2$1;
                  if (scrut === true) {
                    inlinedVal2 = kcfa3.LESS;
                    break inlinedLbl
                  }
                  scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                  if (scrut1 === true) {
                    inlinedVal2 = kcfa3.GREATER;
                    break inlinedLbl
                  }
                  order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                  if (order1 instanceof kcfa3.EQUAL.class) {
                    t1 = element1$;
                    t2 = element1$1;
                    continue loopLabel
                  }
                  inlinedVal2 = order1;
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
              inlinedVal2 = kcfa3.GREATER;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
find1 = function find1(kcfa2, k, t) {
  loopLabel: while (true) {
    let arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$;
    if (t instanceof kcfa2.VmE.class) {
      return kcfa2.None
    } else if (t instanceof kcfa2.VmT.class) {
      let scrut, scrut1;
      arg$VmT$1$ = t.left;
      arg$VmT$2$ = t.key;
      arg$VmT$3$ = t.value;
      arg$VmT$4$ = t.right;
      scrut = k < arg$VmT$2$;
      if (scrut === true) {
        t = arg$VmT$1$;
        continue loopLabel
      }
      scrut1 = arg$VmT$2$ < k;
      if (scrut1 === true) {
        t = arg$VmT$4$;
        continue loopLabel
      }
      return kcfa2.Some(arg$VmT$3$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
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
foldf = function foldf(kcfa2, f, xs, ys, accum) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (xs instanceof kcfa2.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof kcfa2.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1, accum));
        xs = arg$Cons$1$;
        ys = arg$Cons$1$1;
        accum = tmp;
        continue loopLabel
      }
      return accum;
    }
    return accum;
  }
};
(class kcfa {
  static {
    kcfa1 = this
  }
  static get [listPairAllEq$tailrec$accessorSymbol]() { return kcfa.#listPairAllEq$tailrec; }
  static get [listFoldl$tailrec$accessorSymbol]() { return kcfa.#listFoldl$tailrec; }
  static get [listMap$tailrec$accessorSymbol]() { return kcfa.#listMap$tailrec; }
  static get [labelSame$accessorSymbol]() { return kcfa.#labelSame; }
  static get [varMapInsert$accessorSymbol]() { return kcfa.#varMapInsert; }
  static get [varMapNext$accessorSymbol]() { return kcfa.#varMapNext; }
  static get [varMapLeft$accessorSymbol]() { return kcfa.#varMapLeft; }
  static get [compareLambda$accessorSymbol]() { return kcfa.#compareLambda; }
  static get [sameCall$accessorSymbol]() { return kcfa.#sameCall; }
  static get [bindCompare$accessorSymbol]() { return kcfa.#bindCompare; }
  static get [setNext$accessorSymbol]() { return kcfa.#setNext; }
  static get [setLeft$accessorSymbol]() { return kcfa.#setLeft; }
  static get [storeMapInsertWith$accessorSymbol]() { return kcfa.#storeMapInsertWith; }
  static get [storeMapNext$accessorSymbol]() { return kcfa.#storeMapNext; }
  static get [storeMapLeft$accessorSymbol]() { return kcfa.#storeMapLeft; }
  static get [storeMapWrap$accessorSymbol]() { return kcfa.#storeMapWrap; }
  static get [storeMapIns$accessorSymbol]() { return kcfa.#storeMapIns; }
  static get [alloc$accessorSymbol]() { return kcfa.#alloc; }
  static get [monoStoreUpdate$accessorSymbol]() { return kcfa.#monoStoreUpdate; }
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
    kcfa.State = function State(call1, benv, store, time) {
      return globalThis.Object.freeze(new State.class(call1, benv, store, time));
    };
    (class State {
      static {
        kcfa.State.class = this
      }
      constructor(call1, benv, store, time) {
        this.call = call1;
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
  static #listCollate$tailrec(cmp3, l1, l2) {
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
          order = runtime.safeCall(cmp3(arg$Cons$0$, arg$Cons$0$1));
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
  static #listExists(f) {
    return (l) => {
      return kcfa.#listExists$tailrec(f, l)
    }
  }
  static #listFoldl(f) {
    return (init) => {
      return (l) => {
        return kcfa.#listFoldl$tailrec(f, init, l)
      }
    }
  }
  static #listCollate(cmp3) {
    return (l1, l2) => {
      return kcfa.#listCollate$tailrec(cmp3, l1, l2)
    }
  }
  static #listPairFoldl(f) {
    return (init) => {
      return (l1, l2) => {
        return foldf(kcfa, f, l1, l2, init)
      }
    }
  }
  static #listPairAllEq(pred) {
    return (l1, l2) => {
      return kcfa.#listPairAllEq$tailrec(pred, l1, l2)
    }
  }
  static #labelSame(l1, l2) {
    return l1 == l2
  }
  static #varMapEmpty() {
    return kcfa.VmMAP(0, kcfa.VmE)
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
      arg$VmMAP$1$ = map.tree;
      return find1(kcfa, k, arg$VmMAP$1$)
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
  static #varMapStart(m) {
    return kcfa.#varMapLeft(m, kcfa.Nil)
  }
  static #varMapCollate(cmpRng) {
    return varMapCollate_lambda$$lambda$(kcfa, cmpRng)
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
  static #timeSame(t1, t2) {
    return kcfa.#listPairAllEq(kcfa.#labelSame)(t1, t2)
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
  static #benvCompare(benv1, benv2) {
    let cmpRng, kcfa2, arg$VmMAP$1$, arg$VmMAP$1$1;
    cmpRng = kcfa.#bindCompare;
    kcfa2 = kcfa1;
    if (benv1 instanceof kcfa2.VmMAP.class) {
      arg$VmMAP$1$ = benv1.tree;
      if (benv2 instanceof kcfa2.VmMAP.class) {
        let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
        arg$VmMAP$1$1 = benv2.tree;
        inlinedVal = kcfa1.#varMapLeft(arg$VmMAP$1$, kcfa1.Nil);
        inlinedVal1 = kcfa1.#varMapLeft(arg$VmMAP$1$1, kcfa1.Nil);
        kcfa3 = kcfa1;
        cmpRng1 = cmpRng;
        t1 = inlinedVal;
        t2 = inlinedVal1;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
            p1 = kcfa3.#varMapNext(t1);
            p2 = kcfa3.#varMapNext(t2);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
              element0$ = runtime.Tuple.get(p1, 0);
              element1$ = runtime.Tuple.get(p1, 1);
              if (element0$ instanceof kcfa3.VmE.class) {
                if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                  element0$1 = runtime.Tuple.get(p2, 0);
                  if (element0$1 instanceof kcfa3.VmE.class) {
                    inlinedVal2 = kcfa3.EQUAL;
                    break inlinedLbl
                  }
                  inlinedVal2 = kcfa3.LESS;
                  break inlinedLbl;
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                element1$1 = runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa3.VmE.class) {
                  inlinedVal2 = kcfa3.GREATER;
                  break inlinedLbl
                }
                if (element0$ instanceof kcfa3.VmT.class) {
                  arg$VmT$2$ = element0$.key;
                  arg$VmT$3$ = element0$.value;
                  if (element0$1 instanceof kcfa3.VmT.class) {
                    let scrut, scrut1;
                    arg$VmT$2$1 = element0$1.key;
                    arg$VmT$3$1 = element0$1.value;
                    scrut = arg$VmT$2$ < arg$VmT$2$1;
                    if (scrut === true) {
                      inlinedVal2 = kcfa3.LESS;
                      break inlinedLbl
                    }
                    scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                    if (scrut1 === true) {
                      inlinedVal2 = kcfa3.GREATER;
                      break inlinedLbl
                    }
                    order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                    if (order1 instanceof kcfa3.EQUAL.class) {
                      t1 = element1$;
                      t2 = element1$1;
                      continue loopLabel
                    }
                    inlinedVal2 = order1;
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
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return inlinedVal2
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvLookup(benv, x) {
    let scrut;
    scrut = kcfa.#varMapFind(benv, x);
    if (scrut instanceof kcfa.Some.class) {
      return scrut.value
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvExtend1(benv, xs, adrs) {
    let lambda$here;
    lambda$here = lambda$1(kcfa);
    return kcfa.#listPairFoldl(lambda$here)(benv)(xs, adrs)
  }
  static #lambdaOf(clos) {
    let arg$Clos$0$;
    if (clos instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos.lam;
      return kcfa.LAMBDA(arg$Clos$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #benvOf(clos) {
    if (clos instanceof kcfa.Clos.class) {
      return clos.benv
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #closureCompare(clos1, clos2) {
    let order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
    if (clos1 instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos1.lam;
      arg$Clos$1$ = clos1.benv;
      if (clos2 instanceof kcfa.Clos.class) {
        arg$Clos$0$1 = clos2.lam;
        arg$Clos$1$1 = clos2.benv;
        order = kcfa.#compareLambda(arg$Clos$0$, arg$Clos$0$1);
        if (order instanceof kcfa.EQUAL.class) {
          let cmpRng, kcfa2, arg$VmMAP$1$, arg$VmMAP$1$1;
          cmpRng = kcfa1.#bindCompare;
          kcfa2 = kcfa1;
          if (arg$Clos$1$ instanceof kcfa2.VmMAP.class) {
            arg$VmMAP$1$ = arg$Clos$1$.tree;
            if (arg$Clos$1$1 instanceof kcfa2.VmMAP.class) {
              let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
              arg$VmMAP$1$1 = arg$Clos$1$1.tree;
              inlinedVal = kcfa1.#varMapLeft(arg$VmMAP$1$, kcfa1.Nil);
              inlinedVal1 = kcfa1.#varMapLeft(arg$VmMAP$1$1, kcfa1.Nil);
              kcfa3 = kcfa1;
              cmpRng1 = cmpRng;
              t1 = inlinedVal;
              t2 = inlinedVal1;
              inlinedLbl: {
                loopLabel: while (true) {
                  let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
                  p1 = kcfa3.#varMapNext(t1);
                  p2 = kcfa3.#varMapNext(t2);
                  if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                    element0$ = runtime.Tuple.get(p1, 0);
                    element1$ = runtime.Tuple.get(p1, 1);
                    if (element0$ instanceof kcfa3.VmE.class) {
                      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                        element0$1 = runtime.Tuple.get(p2, 0);
                        if (element0$1 instanceof kcfa3.VmE.class) {
                          inlinedVal2 = kcfa3.EQUAL;
                          break inlinedLbl
                        }
                        inlinedVal2 = kcfa3.LESS;
                        break inlinedLbl;
                      }
                      inlinedVal2 = kcfa3.LESS;
                      break inlinedLbl;
                    }
                    if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                      element0$1 = runtime.Tuple.get(p2, 0);
                      element1$1 = runtime.Tuple.get(p2, 1);
                      if (element0$1 instanceof kcfa3.VmE.class) {
                        inlinedVal2 = kcfa3.GREATER;
                        break inlinedLbl
                      }
                      if (element0$ instanceof kcfa3.VmT.class) {
                        arg$VmT$2$ = element0$.key;
                        arg$VmT$3$ = element0$.value;
                        if (element0$1 instanceof kcfa3.VmT.class) {
                          let scrut, scrut1;
                          arg$VmT$2$1 = element0$1.key;
                          arg$VmT$3$1 = element0$1.value;
                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                          if (scrut === true) {
                            inlinedVal2 = kcfa3.LESS;
                            break inlinedLbl
                          }
                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                          if (scrut1 === true) {
                            inlinedVal2 = kcfa3.GREATER;
                            break inlinedLbl
                          }
                          order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                          if (order1 instanceof kcfa3.EQUAL.class) {
                            t1 = element1$;
                            t2 = element1$1;
                            continue loopLabel
                          }
                          inlinedVal2 = order1;
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
                      inlinedVal2 = kcfa3.GREATER;
                      break inlinedLbl
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              return inlinedVal2
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return order;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setSingleton(x) {
    let tmp;
    tmp = kcfa.SetT(kcfa.SetB, kcfa.SetE, x, kcfa.SetE);
    return kcfa.SET(1, tmp)
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
  static #setStart(m) {
    return kcfa.#setLeft(m, kcfa.Nil)
  }
  static #setCompare(set1, set2) {
    let arg$SET$1$, arg$SET$1$1, tmp, tmp1;
    if (set1 instanceof kcfa.SET.class) {
      arg$SET$1$ = set1.tree;
      if (set2 instanceof kcfa.SET.class) {
        let kcfa2, t1, t2, inlinedVal;
        arg$SET$1$1 = set2.tree;
        tmp = kcfa.#setStart(arg$SET$1$);
        tmp1 = kcfa.#setStart(arg$SET$1$1);
        kcfa2 = kcfa;
        t1 = tmp;
        t2 = tmp1;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1;
            p1 = kcfa2.#setNext(t1);
            p2 = kcfa2.#setNext(t2);
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
                    let inlinedVal1, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                    arg$SetT$2$1 = element0$1.item;
                    if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                      arg$Clos$0$ = arg$SetT$2$.lam;
                      arg$Clos$1$ = arg$SetT$2$.benv;
                      if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                        arg$Clos$0$1 = arg$SetT$2$1.lam;
                        arg$Clos$1$1 = arg$SetT$2$1.benv;
                        order = kcfa1.#compareLambda(arg$Clos$0$, arg$Clos$0$1);
                        if (order instanceof kcfa1.EQUAL.class) {
                          let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                          cmpRng = kcfa1.#bindCompare;
                          kcfa3 = kcfa1;
                          if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                            arg$VmMAP$1$ = arg$Clos$1$.tree;
                            if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                              let inlinedVal2, inlinedVal3, kcfa4, cmpRng1, t11, t21, inlinedVal4;
                              arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                              inlinedVal2 = kcfa1.#varMapLeft(arg$VmMAP$1$, kcfa1.Nil);
                              inlinedVal3 = kcfa1.#varMapLeft(arg$VmMAP$1$1, kcfa1.Nil);
                              kcfa4 = kcfa1;
                              cmpRng1 = cmpRng;
                              t11 = inlinedVal2;
                              t21 = inlinedVal3;
                              inlinedLbl1: {
                                loopLabel1: while (true) {
                                  let p11, p21, order1, element1$2, element0$2, arg$VmT$2$, arg$VmT$3$, element1$3, element0$3, arg$VmT$2$1, arg$VmT$3$1;
                                  p11 = kcfa4.#varMapNext(t11);
                                  p21 = kcfa4.#varMapNext(t21);
                                  if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                    element0$2 = runtime.Tuple.get(p11, 0);
                                    element1$2 = runtime.Tuple.get(p11, 1);
                                    if (element0$2 instanceof kcfa4.VmE.class) {
                                      if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                        element0$3 = runtime.Tuple.get(p21, 0);
                                        if (element0$3 instanceof kcfa4.VmE.class) {
                                          inlinedVal4 = kcfa4.EQUAL;
                                          break inlinedLbl1
                                        }
                                        inlinedVal4 = kcfa4.LESS;
                                        break inlinedLbl1;
                                      }
                                      inlinedVal4 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$3 = runtime.Tuple.get(p21, 0);
                                      element1$3 = runtime.Tuple.get(p21, 1);
                                      if (element0$3 instanceof kcfa4.VmE.class) {
                                        inlinedVal4 = kcfa4.GREATER;
                                        break inlinedLbl1
                                      }
                                      if (element0$2 instanceof kcfa4.VmT.class) {
                                        arg$VmT$2$ = element0$2.key;
                                        arg$VmT$3$ = element0$2.value;
                                        if (element0$3 instanceof kcfa4.VmT.class) {
                                          let scrut, scrut1;
                                          arg$VmT$2$1 = element0$3.key;
                                          arg$VmT$3$1 = element0$3.value;
                                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                                          if (scrut === true) {
                                            inlinedVal4 = kcfa4.LESS;
                                            break inlinedLbl1
                                          }
                                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                          if (scrut1 === true) {
                                            inlinedVal4 = kcfa4.GREATER;
                                            break inlinedLbl1
                                          }
                                          order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                          if (order1 instanceof kcfa4.EQUAL.class) {
                                            t11 = element1$2;
                                            t21 = element1$3;
                                            continue loopLabel1
                                          }
                                          inlinedVal4 = order1;
                                          break inlinedLbl1;
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    if (element0$2 instanceof kcfa4.VmT.class) {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$3 = runtime.Tuple.get(p21, 0);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      inlinedVal4 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                              }
                              inlinedVal1 = inlinedVal4;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          inlinedVal1 = order;
                        }
                        if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
                          t1 = element1$;
                          t2 = element1$1;
                          continue loopLabel
                        }
                        inlinedVal = inlinedVal1;
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
  }
  static #setAddItem(a, l) {
    return incr(kcfa, a, kcfa.SetE, l)
  }
  static #setLinkAll(t) {
    return link(kcfa, kcfa.SetE, t)
  }
  static #setUnion(set1, set2) {
    let arg$SET$1$, arg$SET$1$1, element1$, element0$, tmp, tmp1, tmp2;
    if (set1 instanceof kcfa.SET.class) {
      arg$SET$1$ = set1.tree;
      if (set2 instanceof kcfa.SET.class) {
        let kcfa2, t1, t2, n, result, inlinedVal;
        arg$SET$1$1 = set2.tree;
        tmp = kcfa.#setStart(arg$SET$1$);
        tmp1 = kcfa.#setStart(arg$SET$1$1);
        kcfa2 = kcfa;
        t1 = tmp;
        t2 = tmp1;
        n = 0;
        result = kcfa.SetZERO;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, element1$1, element0$1, arg$SetT$2$, element1$2, element0$2, arg$SetT$2$1, tmp3, tmp4, tmp5;
            p1 = kcfa2.#setNext(t1);
            p2 = kcfa2.#setNext(t2);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
              element0$1 = runtime.Tuple.get(p1, 0);
              element1$1 = runtime.Tuple.get(p1, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                  element0$2 = runtime.Tuple.get(p2, 0);
                  if (element0$2 instanceof kcfa2.SetE.class) {
                    inlinedVal = globalThis.Object.freeze([
                      n,
                      result
                    ]);
                    break inlinedLbl
                  }
                  inlinedVal = ins1(kcfa2, p2, n, result);
                  break inlinedLbl;
                }
                inlinedVal = ins1(kcfa2, p2, n, result);
                break inlinedLbl;
              }
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$2 = runtime.Tuple.get(p2, 0);
                element1$2 = runtime.Tuple.get(p2, 1);
                if (element0$2 instanceof kcfa2.SetE.class) {
                  inlinedVal = ins1(kcfa2, p1, n, result);
                  break inlinedLbl
                }
                if (element0$1 instanceof kcfa2.SetT.class) {
                  arg$SetT$2$ = element0$1.item;
                  if (element0$2 instanceof kcfa2.SetT.class) {
                    let inlinedVal1, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
                    arg$SetT$2$1 = element0$2.item;
                    if (arg$SetT$2$ instanceof kcfa1.Clos.class) {
                      arg$Clos$0$ = arg$SetT$2$.lam;
                      arg$Clos$1$ = arg$SetT$2$.benv;
                      if (arg$SetT$2$1 instanceof kcfa1.Clos.class) {
                        arg$Clos$0$1 = arg$SetT$2$1.lam;
                        arg$Clos$1$1 = arg$SetT$2$1.benv;
                        order = kcfa1.#compareLambda(arg$Clos$0$, arg$Clos$0$1);
                        if (order instanceof kcfa1.EQUAL.class) {
                          let cmpRng, kcfa3, arg$VmMAP$1$, arg$VmMAP$1$1;
                          cmpRng = kcfa1.#bindCompare;
                          kcfa3 = kcfa1;
                          if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                            arg$VmMAP$1$ = arg$Clos$1$.tree;
                            if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                              let inlinedVal2, inlinedVal3, kcfa4, cmpRng1, t11, t21, inlinedVal4;
                              arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                              inlinedVal2 = kcfa1.#varMapLeft(arg$VmMAP$1$, kcfa1.Nil);
                              inlinedVal3 = kcfa1.#varMapLeft(arg$VmMAP$1$1, kcfa1.Nil);
                              kcfa4 = kcfa1;
                              cmpRng1 = cmpRng;
                              t11 = inlinedVal2;
                              t21 = inlinedVal3;
                              inlinedLbl1: {
                                loopLabel1: while (true) {
                                  let p11, p21, order1, element1$3, element0$3, arg$VmT$2$, arg$VmT$3$, element1$4, element0$4, arg$VmT$2$1, arg$VmT$3$1;
                                  p11 = kcfa4.#varMapNext(t11);
                                  p21 = kcfa4.#varMapNext(t21);
                                  if (runtime.Tuple.isArrayLike(p11) && p11.length === 2) {
                                    element0$3 = runtime.Tuple.get(p11, 0);
                                    element1$3 = runtime.Tuple.get(p11, 1);
                                    if (element0$3 instanceof kcfa4.VmE.class) {
                                      if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                        element0$4 = runtime.Tuple.get(p21, 0);
                                        if (element0$4 instanceof kcfa4.VmE.class) {
                                          inlinedVal4 = kcfa4.EQUAL;
                                          break inlinedLbl1
                                        }
                                        inlinedVal4 = kcfa4.LESS;
                                        break inlinedLbl1;
                                      }
                                      inlinedVal4 = kcfa4.LESS;
                                      break inlinedLbl1;
                                    }
                                    if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                      element0$4 = runtime.Tuple.get(p21, 0);
                                      element1$4 = runtime.Tuple.get(p21, 1);
                                      if (element0$4 instanceof kcfa4.VmE.class) {
                                        inlinedVal4 = kcfa4.GREATER;
                                        break inlinedLbl1
                                      }
                                      if (element0$3 instanceof kcfa4.VmT.class) {
                                        arg$VmT$2$ = element0$3.key;
                                        arg$VmT$3$ = element0$3.value;
                                        if (element0$4 instanceof kcfa4.VmT.class) {
                                          let scrut, scrut1;
                                          arg$VmT$2$1 = element0$4.key;
                                          arg$VmT$3$1 = element0$4.value;
                                          scrut = arg$VmT$2$ < arg$VmT$2$1;
                                          if (scrut === true) {
                                            inlinedVal4 = kcfa4.LESS;
                                            break inlinedLbl1
                                          }
                                          scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                                          if (scrut1 === true) {
                                            inlinedVal4 = kcfa4.GREATER;
                                            break inlinedLbl1
                                          }
                                          order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                                          if (order1 instanceof kcfa4.EQUAL.class) {
                                            t11 = element1$3;
                                            t21 = element1$4;
                                            continue loopLabel1
                                          }
                                          inlinedVal4 = order1;
                                          break inlinedLbl1;
                                        }
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                    if (element0$3 instanceof kcfa4.VmT.class) {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  if (runtime.Tuple.isArrayLike(p21) && p21.length === 2) {
                                    element0$4 = runtime.Tuple.get(p21, 0);
                                    if (element0$4 instanceof kcfa4.VmE.class) {
                                      inlinedVal4 = kcfa4.GREATER;
                                      break inlinedLbl1
                                    }
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                              }
                              inlinedVal1 = inlinedVal4;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                        } else {
                          inlinedVal1 = order;
                        }
                        if (inlinedVal1 instanceof kcfa2.LESS.class) {
                          let inlinedVal2;
                          tmp3 = n + 1;
                          inlinedVal2 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                          t1 = element1$1;
                          n = tmp3;
                          result = inlinedVal2;
                          continue loopLabel
                        } else if (inlinedVal1 instanceof kcfa2.EQUAL.class) {
                          let inlinedVal2;
                          tmp4 = n + 1;
                          inlinedVal2 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                          t1 = element1$1;
                          t2 = element1$2;
                          n = tmp4;
                          result = inlinedVal2;
                          continue loopLabel
                        } else if (inlinedVal1 instanceof kcfa2.GREATER.class) {
                          let inlinedVal2;
                          tmp5 = n + 1;
                          inlinedVal2 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                          t2 = element1$2;
                          n = tmp5;
                          result = inlinedVal2;
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
              if (element0$1 instanceof kcfa2.SetT.class) {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
              element0$2 = runtime.Tuple.get(p2, 0);
              if (element0$2 instanceof kcfa2.SetE.class) {
                inlinedVal = ins1(kcfa2, p1, n, result);
                break inlinedLbl
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
          element0$ = runtime.Tuple.get(inlinedVal, 0);
          element1$ = runtime.Tuple.get(inlinedVal, 1);
          tmp2 = kcfa.#setLinkAll(element1$);
          return kcfa.SET(element0$, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setFoldl(f) {
    return (init) => {
      return (s) => {
        let arg$SET$1$;
        if (s instanceof kcfa.SET.class) {
          arg$SET$1$ = s.tree;
          return foldf1(kcfa, f, arg$SET$1$, init)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #storeMapEmpty() {
    return kcfa.SmMAP(0, kcfa.SmE)
  }
  static #storeMapInsertWith(comb) {
    return (map, xk, x) => {
      let nItems1, scrut, arg$SmMAP$0$, arg$SmMAP$1$, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$, tmp;
      if (map instanceof kcfa.SmMAP.class) {
        arg$SmMAP$0$ = map.nItems;
        arg$SmMAP$1$ = map.tree;
        nItems1 = new kcfa.Ref.class(arg$SmMAP$0$);
        scrut = ins2(kcfa, comb, xk, x, arg$SmMAP$0$, nItems1, arg$SmMAP$1$);
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
      arg$SmMAP$1$ = map.tree;
      return find11(kcfa, k, arg$SmMAP$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeMapFoldli(f) {
    return lambda$2(kcfa, f)
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
  static #storeMapStart(m) {
    return kcfa.#storeMapLeft(m, kcfa.Nil)
  }
  static #storeMapCollate(cmpRng) {
    return storeMapCollate_lambda$$lambda$(kcfa, cmpRng)
  }
  static #storeMapAddItem(ak, a, l) {
    return incr1(kcfa, ak, a, kcfa.SmE, l)
  }
  static #storeMapLinkAll(t) {
    return link1(kcfa, kcfa.SmE, t)
  }
  static #storeMapWrap(f) {
    return (map1, map2) => {
      let scrut, arg$SmMAP$1$, arg$SmMAP$1$1, element1$, element0$, tmp, tmp1, tmp2;
      if (map1 instanceof kcfa.SmMAP.class) {
        arg$SmMAP$1$ = map1.tree;
        if (map2 instanceof kcfa.SmMAP.class) {
          arg$SmMAP$1$1 = map2.tree;
          tmp = kcfa.#storeMapStart(arg$SmMAP$1$);
          tmp1 = kcfa.#storeMapStart(arg$SmMAP$1$1);
          scrut = runtime.safeCall(f(tmp, tmp1, 0, kcfa.SmZERO));
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp2 = kcfa.#storeMapLinkAll(element1$);
            return kcfa.SmMAP(element0$, tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapIns(p, n, result) {
    loopLabel: while (true) {
      let element1$, element0$, arg$SmT$2$, arg$SmT$3$, tmp, tmp1, tmp2;
      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
        element0$ = runtime.Tuple.get(p, 0);
        element1$ = runtime.Tuple.get(p, 1);
        if (element0$ instanceof kcfa.SmE.class) {
          return globalThis.Object.freeze([
            n,
            result
          ])
        } else if (element0$ instanceof kcfa.SmT.class) {
          arg$SmT$2$ = element0$.key;
          arg$SmT$3$ = element0$.value;
          tmp = kcfa.#storeMapNext(element1$);
          tmp1 = n + 1;
          tmp2 = kcfa.#storeMapAddItem(arg$SmT$2$, arg$SmT$3$, result);
          p = tmp;
          n = tmp1;
          result = tmp2;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #storeMapUnionWith(mergeFn) {
    let union$here;
    union$here = storeMapUnionWith_union$$union$(kcfa, mergeFn);
    return kcfa.#storeMapWrap(union$here)
  }
  static #storeCompare(st1, st2) {
    let kcfa2, arg$SmMAP$1$, arg$SmMAP$1$1;
    kcfa2 = kcfa1;
    if (st1 instanceof kcfa2.SmMAP.class) {
      arg$SmMAP$1$ = st1.tree;
      if (st2 instanceof kcfa2.SmMAP.class) {
        let inlinedVal, inlinedVal1, kcfa3, cmpRng, t1, t2, inlinedVal2;
        arg$SmMAP$1$1 = st2.tree;
        inlinedVal = kcfa1.#storeMapLeft(arg$SmMAP$1$, kcfa1.Nil);
        inlinedVal1 = kcfa1.#storeMapLeft(arg$SmMAP$1$1, kcfa1.Nil);
        kcfa3 = kcfa1;
        cmpRng = storeCompare_setCompare$setCompare;
        t1 = inlinedVal;
        t2 = inlinedVal1;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
            p1 = kcfa3.#storeMapNext(t1);
            p2 = kcfa3.#storeMapNext(t2);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
              element0$ = runtime.Tuple.get(p1, 0);
              element1$ = runtime.Tuple.get(p1, 1);
              if (element0$ instanceof kcfa3.SmE.class) {
                if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                  element0$1 = runtime.Tuple.get(p2, 0);
                  if (element0$1 instanceof kcfa3.SmE.class) {
                    inlinedVal2 = kcfa3.EQUAL;
                    break inlinedLbl
                  }
                  inlinedVal2 = kcfa3.LESS;
                  break inlinedLbl;
                }
                inlinedVal2 = kcfa3.LESS;
                break inlinedLbl;
              }
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                element1$1 = runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  inlinedVal2 = kcfa3.GREATER;
                  break inlinedLbl
                }
                if (element0$ instanceof kcfa3.SmT.class) {
                  arg$SmT$2$ = element0$.key;
                  arg$SmT$3$ = element0$.value;
                  if (element0$1 instanceof kcfa3.SmT.class) {
                    arg$SmT$2$1 = element0$1.key;
                    arg$SmT$3$1 = element0$1.value;
                    order = kcfa3.#bindCompare(arg$SmT$2$, arg$SmT$2$1);
                    if (order instanceof kcfa3.EQUAL.class) {
                      order1 = runtime.safeCall(cmpRng(arg$SmT$3$, arg$SmT$3$1));
                      if (order1 instanceof kcfa3.EQUAL.class) {
                        t1 = element1$;
                        t2 = element1$1;
                        continue loopLabel
                      }
                      inlinedVal2 = order1;
                      break inlinedLbl;
                    }
                    inlinedVal2 = order;
                    break inlinedLbl;
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
                inlinedVal2 = kcfa3.GREATER;
                break inlinedLbl
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return inlinedVal2
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeLookup(st, adr) {
    let scrut;
    scrut = kcfa.#storeMapFind(st, adr);
    if (scrut instanceof kcfa.Some.class) {
      return scrut.value
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #storeUpdate(st, adr, dv) {
    return kcfa.#storeMapInsertWith(storeUpdate_setUnion$setUnion)(st, adr, dv)
  }
  static #storeUpdate1(st, adrs, dvs) {
    let lambda$here;
    lambda$here = storeUpdate1_lambda$$lambda$(kcfa);
    return kcfa.#listPairFoldl(lambda$here)(st)(adrs, dvs)
  }
  static #storeJoin(st1, st2) {
    let union$here;
    union$here = storeJoin_storeMapUnionWith_union$$union$(kcfa1, storeJoin_setUnion$setUnion);
    return kcfa1.#storeMapWrap(union$here)(st1, st2)
  }
  static #storeOf(state) {
    if (state instanceof kcfa.State.class) {
      return state.store
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #stateSame(state1, state2) {
    let arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp, tmp1;
    if (state1 instanceof kcfa.State.class) {
      arg$State$0$ = state1.call;
      arg$State$1$ = state1.benv;
      arg$State$2$ = state1.store;
      arg$State$3$ = state1.time;
      if (state2 instanceof kcfa.State.class) {
        arg$State$0$1 = state2.call;
        arg$State$1$1 = state2.benv;
        arg$State$2$1 = state2.store;
        arg$State$3$1 = state2.time;
        tmp = kcfa.#timeSame(arg$State$3$, arg$State$3$1);
        if (tmp === true) {
          tmp1 = kcfa.#sameCall(arg$State$0$, arg$State$0$1);
          if (tmp1 === true) {
            let cmpRng, kcfa2, arg$VmMAP$1$, arg$VmMAP$1$1;
            cmpRng = kcfa1.#bindCompare;
            kcfa2 = kcfa1;
            if (arg$State$1$ instanceof kcfa2.VmMAP.class) {
              arg$VmMAP$1$ = arg$State$1$.tree;
              if (arg$State$1$1 instanceof kcfa2.VmMAP.class) {
                let inlinedVal, inlinedVal1, kcfa3, cmpRng1, t1, t2, inlinedVal2;
                arg$VmMAP$1$1 = arg$State$1$1.tree;
                inlinedVal = kcfa1.#varMapLeft(arg$VmMAP$1$, kcfa1.Nil);
                inlinedVal1 = kcfa1.#varMapLeft(arg$VmMAP$1$1, kcfa1.Nil);
                kcfa3 = kcfa1;
                cmpRng1 = cmpRng;
                t1 = inlinedVal;
                t2 = inlinedVal1;
                inlinedLbl: {
                  loopLabel: while (true) {
                    let p1, p2, order1, element1$, element0$, arg$VmT$2$, arg$VmT$3$, element1$1, element0$1, arg$VmT$2$1, arg$VmT$3$1;
                    p1 = kcfa3.#varMapNext(t1);
                    p2 = kcfa3.#varMapNext(t2);
                    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                      element0$ = runtime.Tuple.get(p1, 0);
                      element1$ = runtime.Tuple.get(p1, 1);
                      if (element0$ instanceof kcfa3.VmE.class) {
                        if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                          element0$1 = runtime.Tuple.get(p2, 0);
                          if (element0$1 instanceof kcfa3.VmE.class) {
                            inlinedVal2 = kcfa3.EQUAL;
                            break inlinedLbl
                          }
                          inlinedVal2 = kcfa3.LESS;
                          break inlinedLbl;
                        }
                        inlinedVal2 = kcfa3.LESS;
                        break inlinedLbl;
                      }
                      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                        element0$1 = runtime.Tuple.get(p2, 0);
                        element1$1 = runtime.Tuple.get(p2, 1);
                        if (element0$1 instanceof kcfa3.VmE.class) {
                          inlinedVal2 = kcfa3.GREATER;
                          break inlinedLbl
                        }
                        if (element0$ instanceof kcfa3.VmT.class) {
                          arg$VmT$2$ = element0$.key;
                          arg$VmT$3$ = element0$.value;
                          if (element0$1 instanceof kcfa3.VmT.class) {
                            let scrut, scrut1;
                            arg$VmT$2$1 = element0$1.key;
                            arg$VmT$3$1 = element0$1.value;
                            scrut = arg$VmT$2$ < arg$VmT$2$1;
                            if (scrut === true) {
                              inlinedVal2 = kcfa3.LESS;
                              break inlinedLbl
                            }
                            scrut1 = arg$VmT$2$1 < arg$VmT$2$;
                            if (scrut1 === true) {
                              inlinedVal2 = kcfa3.GREATER;
                              break inlinedLbl
                            }
                            order1 = runtime.safeCall(cmpRng1(arg$VmT$3$, arg$VmT$3$1));
                            if (order1 instanceof kcfa3.EQUAL.class) {
                              t1 = element1$;
                              t2 = element1$1;
                              continue loopLabel
                            }
                            inlinedVal2 = order1;
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
                        inlinedVal2 = kcfa3.GREATER;
                        break inlinedLbl
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                if (inlinedVal2 instanceof kcfa.EQUAL.class) {
                  let kcfa4, arg$SmMAP$1$, arg$SmMAP$1$1;
                  kcfa4 = kcfa1;
                  if (arg$State$2$ instanceof kcfa4.SmMAP.class) {
                    arg$SmMAP$1$ = arg$State$2$.tree;
                    if (arg$State$2$1 instanceof kcfa4.SmMAP.class) {
                      let inlinedVal3, inlinedVal4, kcfa5, cmpRng2, t11, t21, inlinedVal5;
                      arg$SmMAP$1$1 = arg$State$2$1.tree;
                      inlinedVal3 = kcfa1.#storeMapLeft(arg$SmMAP$1$, kcfa1.Nil);
                      inlinedVal4 = kcfa1.#storeMapLeft(arg$SmMAP$1$1, kcfa1.Nil);
                      kcfa5 = kcfa1;
                      cmpRng2 = stateSame_storeCompare_setCompare$setCompare;
                      t11 = inlinedVal3;
                      t21 = inlinedVal4;
                      inlinedLbl1: {
                        loopLabel1: while (true) {
                          let p1, p2, order, order1, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1;
                          p1 = kcfa5.#storeMapNext(t11);
                          p2 = kcfa5.#storeMapNext(t21);
                          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
                            element0$ = runtime.Tuple.get(p1, 0);
                            element1$ = runtime.Tuple.get(p1, 1);
                            if (element0$ instanceof kcfa5.SmE.class) {
                              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                                element0$1 = runtime.Tuple.get(p2, 0);
                                if (element0$1 instanceof kcfa5.SmE.class) {
                                  inlinedVal5 = kcfa5.EQUAL;
                                  break inlinedLbl1
                                }
                                inlinedVal5 = kcfa5.LESS;
                                break inlinedLbl1;
                              }
                              inlinedVal5 = kcfa5.LESS;
                              break inlinedLbl1;
                            }
                            if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                              element0$1 = runtime.Tuple.get(p2, 0);
                              element1$1 = runtime.Tuple.get(p2, 1);
                              if (element0$1 instanceof kcfa5.SmE.class) {
                                inlinedVal5 = kcfa5.GREATER;
                                break inlinedLbl1
                              }
                              if (element0$ instanceof kcfa5.SmT.class) {
                                arg$SmT$2$ = element0$.key;
                                arg$SmT$3$ = element0$.value;
                                if (element0$1 instanceof kcfa5.SmT.class) {
                                  arg$SmT$2$1 = element0$1.key;
                                  arg$SmT$3$1 = element0$1.value;
                                  order = kcfa5.#bindCompare(arg$SmT$2$, arg$SmT$2$1);
                                  if (order instanceof kcfa5.EQUAL.class) {
                                    order1 = runtime.safeCall(cmpRng2(arg$SmT$3$, arg$SmT$3$1));
                                    if (order1 instanceof kcfa5.EQUAL.class) {
                                      t11 = element1$;
                                      t21 = element1$1;
                                      continue loopLabel1
                                    }
                                    inlinedVal5 = order1;
                                    break inlinedLbl1;
                                  }
                                  inlinedVal5 = order;
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
                              inlinedVal5 = kcfa5.GREATER;
                              break inlinedLbl1
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      if (inlinedVal5 instanceof kcfa.EQUAL.class) {
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
  }
  static #initState(call1) {
    let tmp, tmp1;
    tmp = kcfa.#varMapEmpty();
    tmp1 = kcfa.#storeMapEmpty();
    return kcfa.State(call1, tmp, tmp1, kcfa.Nil)
  }
  static #tick(call1, t) {
    let arg$CALL$0$;
    if (call1 instanceof kcfa.CALL.class) {
      arg$CALL$0$ = call1.label;
      return kcfa.Cons(arg$CALL$0$, kcfa.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #alloc(t) {
    return (x) => {
      return kcfa.Bnd(x, t)
    }
  }
  static #atomEval(benv, store) {
    return eval$(kcfa, benv, store)
  }
  static #absNext(state) {
    let params, arg$State$0$, arg$State$1$, arg$State$2$, arg$CALL$1$, arg$CALL$2$, tmp, apply$here;
    if (state instanceof kcfa.State.class) {
      arg$State$0$ = state.call;
      arg$State$1$ = state.benv;
      arg$State$2$ = state.store;
      if (arg$State$0$ instanceof kcfa.CALL.class) {
        let inlinedVal, arg$CALL$0$;
        arg$CALL$1$ = arg$State$0$.f;
        arg$CALL$2$ = arg$State$0$.args;
        if (arg$State$0$ instanceof kcfa1.CALL.class) {
          let kcfa2, inlinedVal1, arg$LAMBDA$0$, arg$VAR$1$, tmp1;
          arg$CALL$0$ = arg$State$0$.label;
          inlinedVal = kcfa1.Cons(arg$CALL$0$, kcfa1.Nil);
          kcfa2 = kcfa1;
          if (arg$CALL$1$ instanceof kcfa2.VAR.class) {
            let arg$Some$0$, inlinedVal2, arg$VmMAP$1$;
            arg$VAR$1$ = arg$CALL$1$.x;
            if (arg$State$1$ instanceof kcfa2.VmMAP.class) {
              arg$VmMAP$1$ = arg$State$1$.tree;
              inlinedVal2 = find1(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
              if (inlinedVal2 instanceof kcfa2.Some.class) {
                let inlinedVal3, arg$SmMAP$1$;
                arg$Some$0$ = inlinedVal2.value;
                if (arg$State$2$ instanceof kcfa2.SmMAP.class) {
                  arg$SmMAP$1$ = arg$State$2$.tree;
                  inlinedVal3 = find11(kcfa1, arg$Some$0$, arg$SmMAP$1$);
                  if (inlinedVal3 instanceof kcfa2.Some.class) {
                    inlinedVal1 = inlinedVal3.value;
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
          } else if (arg$CALL$1$ instanceof kcfa2.LAMBDA.class) {
            let tmp2;
            arg$LAMBDA$0$ = arg$CALL$1$.lam;
            tmp1 = kcfa1.Clos(arg$LAMBDA$0$, arg$State$1$);
            tmp2 = kcfa1.SetT(undefined, kcfa1.SetE, tmp1, kcfa1.SetE);
            inlinedVal1 = kcfa1.SET(undefined, tmp2);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          tmp = kcfa.#atomEval(arg$State$1$, arg$State$2$);
          params = kcfa.#listMap(tmp)(arg$CALL$2$);
          apply$here = absNext_apply$$apply$(kcfa, arg$State$2$, inlinedVal, params);
          return kcfa.#setFoldl(apply$here)(kcfa.Nil)(inlinedVal1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      return kcfa.Nil;
    }
    return kcfa.Nil;
  }
  static #member(sts, st) {
    let lambda$here;
    lambda$here = member_lambda$$lambda$(kcfa, st);
    return kcfa.#listExists(lambda$here)(sts)
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
  static #monoBinding(b) {
    if (b instanceof kcfa.Bnd.class) {
      return b.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoValue(clos) {
    let arg$Clos$0$;
    if (clos instanceof kcfa.Clos.class) {
      arg$Clos$0$ = clos.lam;
      return kcfa.LAMBDA(arg$Clos$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #monoValues(d) {
    let lambda$here;
    lambda$here = lambda$7(kcfa);
    return kcfa.#setFoldl(lambda$here)(kcfa.Nil)(d)
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
  static #monoStoreUpdate1(mst, x, exps) {
    let lambda$here;
    lambda$here = lambda$8(kcfa, x);
    return kcfa.#listFoldl(lambda$here)(mst)(exps)
  }
  static #explore(seen, todo) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
      if (todo instanceof kcfa.Nil.class) {
        return seen
      } else if (todo instanceof kcfa.Cons.class) {
        let f, inlinedVal;
        arg$Cons$0$ = todo.head;
        arg$Cons$1$ = todo.tail;
        f = explore_member_lambda$$lambda$(kcfa1, arg$Cons$0$);
        inlinedVal = kcfa1.#listExists$tailrec(f, seen);
        if (inlinedVal === true) {
          todo = arg$Cons$1$;
          continue loopLabel
        }
        {
          let inlinedVal1, arg$State$0$, arg$State$1$, arg$State$2$, arg$CALL$1$, arg$CALL$2$;
          tmp = kcfa.Cons(arg$Cons$0$, seen);
          if (arg$Cons$0$ instanceof kcfa1.State.class) {
            arg$State$0$ = arg$Cons$0$.call;
            arg$State$1$ = arg$Cons$0$.benv;
            arg$State$2$ = arg$Cons$0$.store;
            if (arg$State$0$ instanceof kcfa1.CALL.class) {
              let inlinedVal2, f1, inlinedVal3, f2, init, inlinedVal4, arg$CALL$0$, arg$SET$1$;
              arg$CALL$1$ = arg$State$0$.f;
              arg$CALL$2$ = arg$State$0$.args;
              if (arg$State$0$ instanceof kcfa1.CALL.class) {
                let kcfa2, inlinedVal5, arg$LAMBDA$0$, arg$VAR$1$, tmp2;
                arg$CALL$0$ = arg$State$0$.label;
                inlinedVal2 = kcfa1.Cons(arg$CALL$0$, kcfa1.Nil);
                kcfa2 = kcfa1;
                if (arg$CALL$1$ instanceof kcfa2.VAR.class) {
                  let arg$Some$0$, inlinedVal6, arg$VmMAP$1$;
                  arg$VAR$1$ = arg$CALL$1$.x;
                  if (arg$State$1$ instanceof kcfa2.VmMAP.class) {
                    arg$VmMAP$1$ = arg$State$1$.tree;
                    inlinedVal6 = find1(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
                    if (inlinedVal6 instanceof kcfa2.Some.class) {
                      let inlinedVal7, arg$SmMAP$1$;
                      arg$Some$0$ = inlinedVal6.value;
                      if (arg$State$2$ instanceof kcfa2.SmMAP.class) {
                        arg$SmMAP$1$ = arg$State$2$.tree;
                        inlinedVal7 = find11(kcfa1, arg$Some$0$, arg$SmMAP$1$);
                        if (inlinedVal7 instanceof kcfa2.Some.class) {
                          inlinedVal5 = inlinedVal7.value;
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
                } else if (arg$CALL$1$ instanceof kcfa2.LAMBDA.class) {
                  let tmp3;
                  arg$LAMBDA$0$ = arg$CALL$1$.lam;
                  tmp2 = kcfa1.Clos(arg$LAMBDA$0$, arg$State$1$);
                  tmp3 = kcfa1.SetT(undefined, kcfa1.SetE, tmp2, kcfa1.SetE);
                  inlinedVal5 = kcfa1.SET(undefined, tmp3);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                f1 = eval$(kcfa1, arg$State$1$, arg$State$2$);
                inlinedVal3 = kcfa1.#listMap$tailrec(f1, arg$CALL$2$);
                f2 = explore_absNext_apply$$apply$(kcfa1, arg$State$2$, inlinedVal2, inlinedVal3);
                init = kcfa1.Nil;
                if (inlinedVal5 instanceof kcfa1.SET.class) {
                  arg$SET$1$ = inlinedVal5.tree;
                  inlinedVal4 = foldf1(kcfa1, f2, arg$SET$1$, init);
                  inlinedVal1 = inlinedVal4;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              inlinedVal1 = kcfa1.Nil;
            }
          } else {
            inlinedVal1 = kcfa1.Nil;
          }
          tmp1 = kcfa.#append(inlinedVal1, arg$Cons$1$);
          seen = tmp;
          todo = tmp1;
          continue loopLabel;
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #summarize(states) {
    let tmp, lambda$here;
    tmp = kcfa.#storeMapEmpty();
    lambda$here = summarize_lambda$$lambda$(kcfa);
    return kcfa.#listFoldl(lambda$here)(tmp)(states)
  }
  static #monovariantStore(st) {
    let eta$0$0, kcfa2, f, arg$SmMAP$1$;
    eta$0$0 = kcfa.Nil;
    kcfa2 = kcfa1;
    f = monovariantStore_lambda$$lambda$(kcfa);
    if (st instanceof kcfa2.SmMAP.class) {
      arg$SmMAP$1$ = st.tree;
      return foldf2(kcfa1, f, arg$SmMAP$1$, eta$0$0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #stdExample() {
    let labelCount, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, n, tmp11, n1, n2, tmp12, n3, n4, tmp13, n5, n6, n7, tmp14, n8, n9, n10, tmp15, n11, n12, n13, n14, tmp16, tmp17, inlinedVal15, n15, tmp18, n16;
    labelCount = new kcfa.Ref.class(1);
    tmp = kcfa.Cons("k", kcfa.Nil);
    tmp1 = kcfa.Cons("x", tmp);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal = kcfa.VAR(n14, "k");
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    inlinedVal1 = kcfa.VAR(n13, "x");
    tmp2 = kcfa.Cons(inlinedVal1, kcfa.Nil);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal2 = kcfa.CALL(n12, inlinedVal, tmp2);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    tmp15 = globalThis.Object.freeze([
      n11,
      tmp1,
      inlinedVal2
    ]);
    inlinedVal3 = kcfa.LAMBDA(tmp15);
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    inlinedVal4 = kcfa.VAR(n10, "id");
    tmp3 = kcfa.Cons("z", kcfa.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal5 = kcfa.RET(n9, "z");
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    tmp14 = globalThis.Object.freeze([
      n8,
      tmp3,
      inlinedVal5
    ]);
    inlinedVal6 = kcfa.LAMBDA(tmp14);
    tmp4 = kcfa.Cons("a", kcfa.Nil);
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    inlinedVal7 = kcfa.VAR(n7, "id");
    tmp5 = kcfa.Cons("y", kcfa.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal8 = kcfa.RET(n6, "y");
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp13 = globalThis.Object.freeze([
      n5,
      tmp5,
      inlinedVal8
    ]);
    inlinedVal9 = kcfa.LAMBDA(tmp13);
    tmp6 = kcfa.Cons("b", kcfa.Nil);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal10 = kcfa.RET(n4, "b");
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp12 = globalThis.Object.freeze([
      n3,
      tmp6,
      inlinedVal10
    ]);
    inlinedVal11 = kcfa.LAMBDA(tmp12);
    tmp7 = kcfa.Cons(inlinedVal11, kcfa.Nil);
    tmp8 = kcfa.Cons(inlinedVal9, tmp7);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal12 = kcfa.CALL(n2, inlinedVal7, tmp8);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    tmp11 = globalThis.Object.freeze([
      n1,
      tmp4,
      inlinedVal12
    ]);
    inlinedVal13 = kcfa.LAMBDA(tmp11);
    tmp9 = kcfa.Cons(inlinedVal13, kcfa.Nil);
    tmp10 = kcfa.Cons(inlinedVal6, tmp9);
    n = labelCount.value + 1;
    labelCount.value = n;
    inlinedVal14 = kcfa.CALL(n, inlinedVal4, tmp10);
    tmp16 = kcfa.Cons("id", kcfa.Nil);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    tmp18 = globalThis.Object.freeze([
      n16,
      tmp16,
      inlinedVal14
    ]);
    inlinedVal15 = kcfa.LAMBDA(tmp18);
    tmp17 = kcfa.Cons(inlinedVal3, kcfa.Nil);
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    return kcfa.CALL(n15, inlinedVal15, tmp17)
  }
  static #doit() {
    let tmp, tmp1, inlinedVal, seen, todo, inlinedVal1, eta$0$0, inlinedVal2, f, inlinedVal3, labelCount, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, n, tmp13, n1, n2, tmp14, n3, n4, tmp15, n5, n6, n7, tmp16, n8, n9, n10, tmp17, n11, n12, n13, n14, tmp18, tmp19, inlinedVal19, n15, tmp20, n16, kcfa2, f1, arg$SmMAP$1$;
    labelCount = new kcfa1.Ref.class(1);
    tmp2 = kcfa1.Cons("k", kcfa1.Nil);
    tmp3 = kcfa1.Cons("x", tmp2);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal4 = kcfa1.VAR(n14, "k");
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    inlinedVal5 = kcfa1.VAR(n13, "x");
    tmp4 = kcfa1.Cons(inlinedVal5, kcfa1.Nil);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal6 = kcfa1.CALL(n12, inlinedVal4, tmp4);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    tmp17 = globalThis.Object.freeze([
      n11,
      tmp3,
      inlinedVal6
    ]);
    inlinedVal7 = kcfa1.LAMBDA(tmp17);
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    inlinedVal8 = kcfa1.VAR(undefined, "id");
    tmp5 = kcfa1.Cons("z", kcfa1.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal9 = kcfa1.RET(n9, "z");
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    tmp16 = globalThis.Object.freeze([
      n8,
      tmp5,
      inlinedVal9
    ]);
    inlinedVal10 = kcfa1.LAMBDA(tmp16);
    tmp6 = kcfa1.Cons("a", kcfa1.Nil);
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    inlinedVal11 = kcfa1.VAR(n7, "id");
    tmp7 = kcfa1.Cons("y", kcfa1.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal12 = kcfa1.RET(n6, "y");
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp15 = globalThis.Object.freeze([
      n5,
      tmp7,
      inlinedVal12
    ]);
    inlinedVal13 = kcfa1.LAMBDA(tmp15);
    tmp8 = kcfa1.Cons("b", kcfa1.Nil);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal14 = kcfa1.RET(n4, "b");
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp14 = globalThis.Object.freeze([
      n3,
      tmp8,
      inlinedVal14
    ]);
    inlinedVal15 = kcfa1.LAMBDA(tmp14);
    tmp9 = kcfa1.Cons(inlinedVal15, kcfa1.Nil);
    tmp10 = kcfa1.Cons(inlinedVal13, tmp9);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal16 = kcfa1.CALL(n2, inlinedVal11, tmp10);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    tmp13 = globalThis.Object.freeze([
      n1,
      tmp6,
      inlinedVal16
    ]);
    inlinedVal17 = kcfa1.LAMBDA(tmp13);
    tmp11 = kcfa1.Cons(inlinedVal17, kcfa1.Nil);
    tmp12 = kcfa1.Cons(inlinedVal10, tmp11);
    n = labelCount.value + 1;
    labelCount.value = n;
    inlinedVal18 = kcfa1.CALL(n, inlinedVal8, tmp12);
    tmp18 = kcfa1.Cons("id", kcfa1.Nil);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    tmp20 = globalThis.Object.freeze([
      n16,
      tmp18,
      inlinedVal18
    ]);
    inlinedVal19 = kcfa1.LAMBDA(tmp20);
    tmp19 = kcfa1.Cons(inlinedVal7, kcfa1.Nil);
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    inlinedVal = kcfa1.CALL(n15, inlinedVal19, tmp19);
    tmp = kcfa.#initState(inlinedVal);
    tmp1 = kcfa.Cons(tmp, kcfa.Nil);
    seen = kcfa.Nil;
    todo = tmp1;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp21, tmp22;
        if (todo instanceof kcfa1.Nil.class) {
          inlinedVal1 = seen;
          break inlinedLbl
        } else if (todo instanceof kcfa1.Cons.class) {
          let f2, inlinedVal20;
          arg$Cons$0$ = todo.head;
          arg$Cons$1$ = todo.tail;
          f2 = doit_explore_member_lambda$$lambda$(kcfa1, arg$Cons$0$);
          inlinedVal20 = kcfa1.#listExists$tailrec(f2, seen);
          if (inlinedVal20 === true) {
            todo = arg$Cons$1$;
            continue loopLabel
          }
          {
            let inlinedVal21, arg$State$0$, arg$State$1$, arg$State$2$, arg$CALL$1$, arg$CALL$2$;
            tmp21 = kcfa1.Cons(arg$Cons$0$, seen);
            if (arg$Cons$0$ instanceof kcfa1.State.class) {
              arg$State$0$ = arg$Cons$0$.call;
              arg$State$1$ = arg$Cons$0$.benv;
              arg$State$2$ = arg$Cons$0$.store;
              if (arg$State$0$ instanceof kcfa1.CALL.class) {
                let inlinedVal22, f3, inlinedVal23, f4, init, inlinedVal24, arg$CALL$0$, arg$SET$1$;
                arg$CALL$1$ = arg$State$0$.f;
                arg$CALL$2$ = arg$State$0$.args;
                if (arg$State$0$ instanceof kcfa1.CALL.class) {
                  let kcfa3, inlinedVal25, arg$LAMBDA$0$, arg$VAR$1$, tmp23;
                  arg$CALL$0$ = arg$State$0$.label;
                  inlinedVal22 = kcfa1.Cons(arg$CALL$0$, kcfa1.Nil);
                  kcfa3 = kcfa1;
                  if (arg$CALL$1$ instanceof kcfa3.VAR.class) {
                    let arg$Some$0$, inlinedVal26, arg$VmMAP$1$;
                    arg$VAR$1$ = arg$CALL$1$.x;
                    if (arg$State$1$ instanceof kcfa3.VmMAP.class) {
                      arg$VmMAP$1$ = arg$State$1$.tree;
                      inlinedVal26 = find1(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
                      if (inlinedVal26 instanceof kcfa3.Some.class) {
                        let inlinedVal27, arg$SmMAP$1$1;
                        arg$Some$0$ = inlinedVal26.value;
                        if (arg$State$2$ instanceof kcfa3.SmMAP.class) {
                          arg$SmMAP$1$1 = arg$State$2$.tree;
                          inlinedVal27 = find11(kcfa1, arg$Some$0$, arg$SmMAP$1$1);
                          if (inlinedVal27 instanceof kcfa3.Some.class) {
                            inlinedVal25 = inlinedVal27.value;
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
                  } else if (arg$CALL$1$ instanceof kcfa3.LAMBDA.class) {
                    let tmp24;
                    arg$LAMBDA$0$ = arg$CALL$1$.lam;
                    tmp23 = kcfa1.Clos(arg$LAMBDA$0$, arg$State$1$);
                    tmp24 = kcfa1.SetT(undefined, kcfa1.SetE, tmp23, kcfa1.SetE);
                    inlinedVal25 = kcfa1.SET(undefined, tmp24);
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  f3 = doit_explore_absNext_atomEval_eval$$eval$(kcfa1, arg$State$1$, arg$State$2$);
                  inlinedVal23 = kcfa1.#listMap$tailrec(f3, arg$CALL$2$);
                  f4 = doit_explore_absNext_apply$$apply$(kcfa1, arg$State$2$, inlinedVal22, inlinedVal23);
                  init = kcfa1.Nil;
                  if (inlinedVal25 instanceof kcfa1.SET.class) {
                    arg$SET$1$ = inlinedVal25.tree;
                    inlinedVal24 = foldf1(kcfa1, f4, arg$SET$1$, init);
                    inlinedVal21 = inlinedVal24;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                inlinedVal21 = kcfa1.Nil;
              }
            } else {
              inlinedVal21 = kcfa1.Nil;
            }
            tmp22 = kcfa1.#append(inlinedVal21, arg$Cons$1$);
            seen = tmp21;
            todo = tmp22;
            continue loopLabel;
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal2 = kcfa1.SmMAP(undefined, kcfa1.SmE);
    f = doit_summarize_lambda$$lambda$(kcfa1);
    inlinedVal3 = kcfa1.#listFoldl$tailrec(f, inlinedVal2, inlinedVal1);
    eta$0$0 = kcfa1.Nil;
    kcfa2 = kcfa1;
    f1 = doit_monovariantStore_lambda$$lambda$(kcfa1);
    if (inlinedVal3 instanceof kcfa2.SmMAP.class) {
      arg$SmMAP$1$ = inlinedVal3.tree;
      return foldf2(kcfa1, f1, arg$SmMAP$1$, eta$0$0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let lambdaLabel, lambda$here, tmp, inlinedVal, inlinedVal1, seen, todo, inlinedVal2, labelCount, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, n, tmp12, n1, n2, tmp13, n3, n4, tmp14, n5, n6, n7, tmp15, n8, n9, n10, tmp16, n11, n12, n13, n14, tmp17, tmp18, inlinedVal18, n15, tmp19, n16, inlinedVal19, f, inlinedVal20, eta$0$0, inlinedVal21, inlinedVal22, kcfa2, f1, inlinedVal23, arg$SmMAP$1$;
    lambdaLabel = main_lambda$$lambda$(kcfa);
    labelCount = new kcfa1.Ref.class(1);
    tmp1 = kcfa1.Cons("k", kcfa1.Nil);
    tmp2 = kcfa1.Cons("x", tmp1);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal3 = kcfa1.VAR(undefined, "k");
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    inlinedVal4 = kcfa1.VAR(undefined, "x");
    tmp3 = kcfa1.Cons(inlinedVal4, kcfa1.Nil);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal5 = kcfa1.CALL(n12, inlinedVal3, tmp3);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    tmp16 = globalThis.Object.freeze([
      n11,
      tmp2,
      inlinedVal5
    ]);
    inlinedVal6 = kcfa1.LAMBDA(tmp16);
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    inlinedVal7 = kcfa1.VAR(undefined, "id");
    tmp4 = kcfa1.Cons("z", kcfa1.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal8 = kcfa1.RET(n9, undefined);
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    tmp15 = globalThis.Object.freeze([
      n8,
      tmp4,
      inlinedVal8
    ]);
    inlinedVal9 = kcfa1.LAMBDA(tmp15);
    tmp5 = kcfa1.Cons("a", kcfa1.Nil);
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    inlinedVal10 = kcfa1.VAR(undefined, "id");
    tmp6 = kcfa1.Cons("y", kcfa1.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal11 = kcfa1.RET(n6, undefined);
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp14 = globalThis.Object.freeze([
      n5,
      tmp6,
      inlinedVal11
    ]);
    inlinedVal12 = kcfa1.LAMBDA(tmp14);
    tmp7 = kcfa1.Cons("b", kcfa1.Nil);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal13 = kcfa1.RET(n4, undefined);
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp13 = globalThis.Object.freeze([
      n3,
      tmp7,
      inlinedVal13
    ]);
    inlinedVal14 = kcfa1.LAMBDA(tmp13);
    tmp8 = kcfa1.Cons(inlinedVal14, kcfa1.Nil);
    tmp9 = kcfa1.Cons(inlinedVal12, tmp8);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal15 = kcfa1.CALL(n2, inlinedVal10, tmp9);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    tmp12 = globalThis.Object.freeze([
      n1,
      tmp5,
      inlinedVal15
    ]);
    inlinedVal16 = kcfa1.LAMBDA(tmp12);
    tmp10 = kcfa1.Cons(inlinedVal16, kcfa1.Nil);
    tmp11 = kcfa1.Cons(inlinedVal9, tmp10);
    n = labelCount.value + 1;
    labelCount.value = n;
    inlinedVal17 = kcfa1.CALL(n, inlinedVal7, tmp11);
    tmp17 = kcfa1.Cons("id", kcfa1.Nil);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    tmp19 = globalThis.Object.freeze([
      n16,
      tmp17,
      inlinedVal17
    ]);
    inlinedVal18 = kcfa1.LAMBDA(tmp19);
    tmp18 = kcfa1.Cons(inlinedVal6, kcfa1.Nil);
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    inlinedVal = kcfa1.CALL(n15, inlinedVal18, tmp18);
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
                    let arg$Some$0$, inlinedVal30, arg$VmMAP$1$;
                    arg$VAR$1$ = arg$CALL$1$.x;
                    if (arg$State$1$ instanceof kcfa3.VmMAP.class) {
                      arg$VmMAP$1$ = arg$State$1$.tree;
                      inlinedVal30 = find1(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
                      if (inlinedVal30 instanceof kcfa3.Some.class) {
                        let inlinedVal31, arg$SmMAP$1$1;
                        arg$Some$0$ = inlinedVal30.value;
                        if (arg$State$2$ instanceof kcfa3.SmMAP.class) {
                          arg$SmMAP$1$1 = arg$State$2$.tree;
                          inlinedVal31 = find11(kcfa1, arg$Some$0$, arg$SmMAP$1$1);
                          if (inlinedVal31 instanceof kcfa3.Some.class) {
                            inlinedVal29 = inlinedVal31.value;
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
                    inlinedVal28 = foldf1(kcfa1, f4, arg$SET$1$, init);
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
      inlinedVal23 = foldf2(kcfa1, f1, arg$SmMAP$1$, eta$0$0);
      lambda$here = lambda$11(kcfa, lambdaLabel);
      return kcfa.#listMap(lambda$here)(inlinedVal23)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "kcfa"];
});
export { foldf as _$_modulePrivate_$_foldf };
export { ins as _$_modulePrivate_$_ins };
export { find1 as _$_modulePrivate_$_find1 };
export { cmp as _$_modulePrivate_$_cmp };
export { cmp1 as _$_modulePrivate_$_cmp1 };
export { incr as _$_modulePrivate_$_incr };
export { link as _$_modulePrivate_$_link };
export { union1 as _$_modulePrivate_$_union1 };
export { ins1 as _$_modulePrivate_$_ins1 };
export { foldf1 as _$_modulePrivate_$_foldf1 };
export { ins2 as _$_modulePrivate_$_ins2 };
export { find11 as _$_modulePrivate_$_find11 };
export { foldf2 as _$_modulePrivate_$_foldf2 };
export { cmp2 as _$_modulePrivate_$_cmp2 };
export { incr1 as _$_modulePrivate_$_incr1 };
export { link1 as _$_modulePrivate_$_link1 };
export { union as _$_modulePrivate_$_union };
export { eval1 as _$_modulePrivate_$_eval };
export { apply as _$_modulePrivate_$_apply };
export { return_ as _$_modulePrivate_$_return_ };
export { newLabel as _$_modulePrivate_$_newLabel };
export { lambda as _$_modulePrivate_$_lambda };
export { var_ as _$_modulePrivate_$_var_ };
export { mkLet as _$_modulePrivate_$_mkLet };
export { call as _$_modulePrivate_$_call };
export { kcfa1 as _$_modulePrivate_$_kcfa };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { union$ as _$_modulePrivate_$_union$ };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { eval$ as _$_modulePrivate_$_eval$ };
export { apply$ as _$_modulePrivate_$_apply$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
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
export { doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion$setUnion };
export { doit_explore_absNext_apply$_apply_lambda$$lambda$ as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$$lambda$ };
export { doit_explore_absNext_apply$_apply$apply as _$_modulePrivate_$_doit_explore_absNext_apply$_apply$apply };
export { doit_explore_absNext_apply$$apply$ as _$_modulePrivate_$_doit_explore_absNext_apply$$apply$ };
export { doit_explore_member_lambda$_stateSame$stateSame as _$_modulePrivate_$_doit_explore_member_lambda$_stateSame$stateSame };
export { doit_explore_member_lambda$$lambda$ as _$_modulePrivate_$_doit_explore_member_lambda$$lambda$ };
export { doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_doit_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare };
export { doit_summarize_lambda$_lambda_setUnion$setUnion as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion$setUnion };
export { doit_summarize_lambda$_lambda$lambda as _$_modulePrivate_$_doit_summarize_lambda$_lambda$lambda };
export { doit_summarize_lambda$$lambda$ as _$_modulePrivate_$_doit_summarize_lambda$$lambda$ };
export { summarize_lambda$_lambda_setUnion$setUnion as _$_modulePrivate_$_summarize_lambda$_lambda_setUnion$setUnion };
export { summarize_lambda$_lambda$lambda as _$_modulePrivate_$_summarize_lambda$_lambda$lambda };
export { summarize_lambda$$lambda$ as _$_modulePrivate_$_summarize_lambda$$lambda$ };
export { explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_explore_member_lambda$_stateSame_storeCompare_setCompare$setCompare };
export { explore_member_lambda$_stateSame$stateSame as _$_modulePrivate_$_explore_member_lambda$_stateSame$stateSame };
export { explore_member_lambda$$lambda$ as _$_modulePrivate_$_explore_member_lambda$$lambda$ };
export { explore_absNext_apply$_apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_explore_absNext_apply$_apply_lambda$_setUnion$setUnion };
export { explore_absNext_apply$_apply_lambda$$lambda$ as _$_modulePrivate_$_explore_absNext_apply$_apply_lambda$$lambda$ };
export { explore_absNext_apply$_apply$apply as _$_modulePrivate_$_explore_absNext_apply$_apply$apply };
export { explore_absNext_apply$$apply$ as _$_modulePrivate_$_explore_absNext_apply$$apply$ };
export { member_lambda$_stateSame$stateSame as _$_modulePrivate_$_member_lambda$_stateSame$stateSame };
export { member_lambda$$lambda$ as _$_modulePrivate_$_member_lambda$$lambda$ };
export { member_lambda$_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_member_lambda$_stateSame_storeCompare_setCompare$setCompare };
export { absNext_apply$_apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_absNext_apply$_apply_lambda$_setUnion$setUnion };
export { absNext_apply$_apply_lambda$$lambda$ as _$_modulePrivate_$_absNext_apply$_apply_lambda$$lambda$ };
export { absNext_apply$_apply$apply as _$_modulePrivate_$_absNext_apply$_apply$apply };
export { absNext_apply$$apply$ as _$_modulePrivate_$_absNext_apply$$apply$ };
export { stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_stateSame_storeCompare_setCompare$setCompare };
export { storeJoin_setUnion$setUnion as _$_modulePrivate_$_storeJoin_setUnion$setUnion };
export { storeUpdate1_lambda$_setUnion$setUnion as _$_modulePrivate_$_storeUpdate1_lambda$_setUnion$setUnion };
export { storeUpdate1_lambda$$lambda$ as _$_modulePrivate_$_storeUpdate1_lambda$$lambda$ };
export { storeUpdate_setUnion$setUnion as _$_modulePrivate_$_storeUpdate_setUnion$setUnion };
export { storeCompare_setCompare$setCompare as _$_modulePrivate_$_storeCompare_setCompare$setCompare };
export { lambda_setUnion$setUnion as _$_modulePrivate_$_lambda_setUnion$setUnion };
export { lambda$_setUnion$setUnion as _$_modulePrivate_$_lambda$_setUnion$setUnion };
export { apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_apply_lambda$_setUnion$setUnion };
export { apply_lambda$$lambda$ as _$_modulePrivate_$_apply_lambda$$lambda$ };
export { apply$_apply_lambda$_setUnion$setUnion as _$_modulePrivate_$_apply$_apply_lambda$_setUnion$setUnion };
export { apply$_apply_lambda$$lambda$ as _$_modulePrivate_$_apply$_apply_lambda$$lambda$ };
export { apply$_apply$apply as _$_modulePrivate_$_apply$_apply$apply };
export { lambda_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_lambda_stateSame_storeCompare_setCompare$setCompare };
export { lambda$_stateSame_storeCompare_setCompare$setCompare as _$_modulePrivate_$_lambda$_stateSame_storeCompare_setCompare$setCompare };
export { lambda$_stateSame$stateSame as _$_modulePrivate_$_lambda$_stateSame$stateSame };
export { lambda_setUnion$setUnion1 as _$_modulePrivate_$_lambda_setUnion$setUnion1 };
export { lambda$_lambda_setUnion$setUnion as _$_modulePrivate_$_lambda$_lambda_setUnion$setUnion };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ };
export { main_doit_monovariantStore_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_monovariantStore_lambda$_lambda$lambda };
export { main_doit_monovariantStore_lambda$$lambda$ as _$_modulePrivate_$_main_doit_monovariantStore_lambda$$lambda$ };
export { doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { doit_monovariantStore_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda_lambda$$lambda$ };
export { doit_monovariantStore_lambda$_lambda$lambda as _$_modulePrivate_$_doit_monovariantStore_lambda$_lambda$lambda };
export { doit_monovariantStore_lambda$$lambda$ as _$_modulePrivate_$_doit_monovariantStore_lambda$$lambda$ };
export { monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_monovariantStore_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { monovariantStore_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_monovariantStore_lambda$_lambda_lambda$$lambda$ };
export { monovariantStore_lambda$_lambda$lambda as _$_modulePrivate_$_monovariantStore_lambda$_lambda$lambda };
export { monovariantStore_lambda$$lambda$ as _$_modulePrivate_$_monovariantStore_lambda$$lambda$ };
export { lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp as _$_modulePrivate_$_lambda$_lambda_lambda$_monoStoreUpdate_insertExp$insertExp };
export { lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate as _$_modulePrivate_$_lambda$_lambda_lambda$_monoStoreUpdate$monoStoreUpdate };
export { lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$lambda1 };
export { doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr };
export { doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 };
export { doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 };
export { doit_summarize_lambda$_lambda_setUnion_union1_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr };
export { doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 };
export { doit_summarize_lambda$_lambda_union$_union_incr$incr as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_incr$incr };
export { doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 as _$_modulePrivate_$_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr };
export { doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 as _$_modulePrivate_$_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 };
export { doit_explore_absNext_atomEval_eval$_eval$eval as _$_modulePrivate_$_doit_explore_absNext_atomEval_eval$_eval$eval };
export { doit_explore_absNext_atomEval_eval$$eval$ as _$_modulePrivate_$_doit_explore_absNext_atomEval_eval$$eval$ };
export { main_doit_explore_absNext_atomEval_eval$_eval$eval as _$_modulePrivate_$_main_doit_explore_absNext_atomEval_eval$_eval$eval };
export { main_doit_explore_absNext_atomEval_eval$$eval$ as _$_modulePrivate_$_main_doit_explore_absNext_atomEval_eval$$eval$ };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_incr$incr };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr1 };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr2 };
export { main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 as _$_modulePrivate_$_main_doit_explore_absNext_apply$_apply_lambda$_setUnion_union1_ins_incr$incr3 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr };
export { main_doit_summarize_lambda$_lambda_union$_union_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_incr$incr };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr1 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns_storeMapAddItem_incr$incr2 };
export { main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_union$_union_storeMapIns$storeMapIns };
export { main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr };
export { main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_union1_incr$incr };
export { main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr1 };
export { main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr2 };
export { main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 as _$_modulePrivate_$_main_doit_summarize_lambda$_lambda_setUnion_union1_ins_incr$incr3 };
export { main_lambda$_lambda$lambda as _$_modulePrivate_$_main_lambda$_lambda$lambda };
export { main_lambda$$lambda$ as _$_modulePrivate_$_main_lambda$$lambda$ };
export { summarize_lambda$_lambda_union$_union$union as _$_modulePrivate_$_summarize_lambda$_lambda_union$_union$union };
export { summarize_lambda$_lambda_union$$union$ as _$_modulePrivate_$_summarize_lambda$_lambda_union$$union$ };
export { storeJoin_storeMapUnionWith_union$_union$union as _$_modulePrivate_$_storeJoin_storeMapUnionWith_union$_union$union };
export { storeJoin_storeMapUnionWith_union$$union$ as _$_modulePrivate_$_storeJoin_storeMapUnionWith_union$$union$ };
export { storeMapUnionWith_union$_union$union as _$_modulePrivate_$_storeMapUnionWith_union$_union$union };
export { storeMapUnionWith_union$$union$ as _$_modulePrivate_$_storeMapUnionWith_union$$union$ };
export { storeMapCollate_lambda$_lambda$lambda as _$_modulePrivate_$_storeMapCollate_lambda$_lambda$lambda };
export { storeMapCollate_lambda$$lambda$ as _$_modulePrivate_$_storeMapCollate_lambda$$lambda$ };
export { varMapCollate_lambda$_lambda$lambda as _$_modulePrivate_$_varMapCollate_lambda$_lambda$lambda };
export { varMapCollate_lambda$$lambda$ as _$_modulePrivate_$_varMapCollate_lambda$$lambda$ };
export { lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$lambda2 };
export { lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda$_lambda$lambda3 };
export { union$_union$union as _$_modulePrivate_$_union$_union$union };
export { lambda_union$_union$union as _$_modulePrivate_$_lambda_union$_union$union };
export { lambda_union$$union$ as _$_modulePrivate_$_lambda_union$$union$ };
export { lambda$_lambda_union$_union$union as _$_modulePrivate_$_lambda$_lambda_union$_union$union };
export { lambda$_lambda_union$$union$ as _$_modulePrivate_$_lambda$_lambda_union$$union$ };
export { mkLet$worker as _$_modulePrivate_$_mkLet$worker };
export { call$worker as _$_modulePrivate_$_call$worker };
export { lambda$worker as _$_modulePrivate_$_lambda$worker };
export default kcfa1;
